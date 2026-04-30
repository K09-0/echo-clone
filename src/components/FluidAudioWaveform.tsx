import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FLUID_VERTEX = `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FLUID_FRAGMENT = `
precision mediump float;
uniform sampler2D uPrevState;
uniform vec4 iMouse;
uniform vec2 uResolution;
uniform float uBrushSize;
uniform float uBrushStrength;
uniform float uFluidDecay;
uniform float uTrailLength;
uniform float uStopDecay;
varying vec2 v_uv;

vec3 encode(vec3 v) { return v / 0.8 + 0.5; }
vec3 decode(vec3 c) { return (c - 0.5) * 0.8; }

void main() {
  vec2 pixel = v_uv * uResolution;
  vec2 texel = 1.0 / uResolution;

  vec3 prev = decode(texture2D(uPrevState, v_uv).rgb);
  vec3 left = decode(texture2D(uPrevState, v_uv + vec2(-texel.x, 0.0)).rgb);
  vec3 right = decode(texture2D(uPrevState, v_uv + vec2(texel.x, 0.0)).rgb);
  vec3 up = decode(texture2D(uPrevState, v_uv + vec2(0.0, texel.y)).rgb);
  vec3 down = decode(texture2D(uPrevState, v_uv + vec2(0.0, -texel.y)).rgb);

  vec3 avg = decode((left + right + up + down) * 0.25);
  vec3 state = mix(prev, avg, 0.28);

  vec2 mousePos = iMouse.xy;
  vec2 mousePrev = iMouse.zw;
  bool hasMotion = length(mousePos) > 0.0;

  if (hasMotion) {
    vec2 motionVec = mousePos - mousePrev;
    float motionLen = length(motionVec);
    if (motionLen > 6.0) {
      motionVec = motionVec / motionLen * 6.0;
      motionLen = 6.0;
    }
    vec2 toMouse = mousePos - pixel;
    float dist = length(toMouse);
    float brushSizeFactor = 2.2e-4 / uBrushSize;
    float strength = exp(-dist * dist * brushSizeFactor);
    state.xy += motionVec * strength * 0.45;
    state.z += motionLen * strength * 0.2;
  }

  state *= uFluidDecay;

  if (!hasMotion && uStopDecay > 0.0) {
    float cursorDist = length(iMouse.xy - pixel);
    state *= 1.0 - uStopDecay * exp(-cursorDist * cursorDist * 1.0e-5);
  }

  state = clamp(state, -0.4, 0.4);
  gl_FragColor = vec4(encode(state), 1.0);
}
`;

const DISPLAY_VERTEX = `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const DISPLAY_FRAGMENT = `
precision mediump float;
uniform float u_time;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_amplitude;
uniform float u_waveSpeed;
uniform float u_distortion;
uniform float u_complexity;
uniform sampler2D u_fluid;
uniform vec2 u_mouseFluid;
uniform float u_fluidInfluence;
varying vec2 v_uv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

float waveform(vec2 uv, float t) {
  float amp = u_amplitude;
  float spd = u_waveSpeed;
  float base = sin(uv.x * 3.0 + t * spd) * 0.6;
  base += sin(uv.x * 5.0 - t * spd * 0.8) * 0.4;
  base += sin(uv.x * 8.0 + t * spd * 1.5) * 0.2;
  base += fbm(vec2(uv.x * 4.0, t * 0.5)) * 0.3;
  if (u_mouse.x > 0.0) {
    vec2 mUV = u_mouse / u_resolution;
    float mDist = length(uv - mUV);
    float mouseAmp = exp(-mDist * mDist * 8.0);
    base += sin(mDist * 20.0 - t * 3.0) * mouseAmp * 0.5;
  }
  return base * amp;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 uvAspect = vec2(uv.x * aspect, uv.y);

  vec3 fluidSample = texture2D(u_fluid, u_mouseFluid).rgb;
  vec2 fluidVel = (fluidSample.rg - 0.5) * 0.4;
  uvAspect += fluidVel * u_fluidInfluence;

  float t = u_time * u_complexity;

  vec2 q = vec2(fbm(uvAspect + t * 0.1), fbm(uvAspect + vec2(1.0)));
  vec2 r = vec2(
    fbm(uvAspect + 1.0 * q + vec2(1.7, 9.2) + t * 0.15),
    fbm(uvAspect + 1.0 * q + vec2(8.3, 2.8) + t * 0.126)
  );
  vec2 warpPos = uvAspect + u_distortion * r;

  float waveVal = waveform(warpPos, t);
  float waveThickness = 0.03 + length(r) * 0.04;
  float waveDist = abs(uv.y - 0.5 - waveVal * 0.3);

  float waveColor = 0.0;
  waveColor += exp(-waveDist * waveDist / (waveThickness * waveThickness * 0.3)) * 1.0;
  waveColor += exp(-waveDist * waveDist / (waveThickness * waveThickness * 1.5)) * 0.6;
  waveColor += exp(-waveDist * waveDist / (waveThickness * waveThickness * 4.0)) * 0.2;
  waveColor = min(waveColor, 1.0);

  float fieldVal = fbm(warpPos + t * 0.05);
  waveColor += fieldVal * 0.1 * (1.0 - smoothstep(0.0, waveThickness * 2.0, waveDist));

  float colorMix = fbm(uvAspect + r + t * 0.05);
  vec3 col = mix(u_color1, u_color2, smoothstep(0.3, 0.7, colorMix));
  col = mix(col, u_color3, waveColor * 0.5);

  vec3 finalColor = col * waveColor;
  float vig = smoothstep(0.0, 1.0, pow(1.0 - uv.x * uv.y * 0.5, 0.5));
  finalColor *= vig;

  gl_FragColor = vec4(finalColor, 1.0);
  #include <colorspace_fragment>
}
`;

class FluidSimulation {
  renderer: THREE.WebGLRenderer;
  container: HTMLElement;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  readTarget: THREE.WebGLRenderTarget;
  writeTarget: THREE.WebGLRenderTarget;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  uniforms: Record<string, THREE.IUniform>;
  inputPos = new THREE.Vector3();
  prevPos = new THREE.Vector3();
  motionDecay = 0.95;
  clock = new THREE.Clock();
  pointerActive = false;
  idleTime = 0;
  lastInputPos = new THREE.Vector2();
  animId = 0;

  constructor(renderer: THREE.WebGLRenderer, container: HTMLElement, width: number, height: number) {
    this.renderer = renderer;
    this.container = container;

    const isMobile = window.innerWidth < 768;
    const type = isMobile || !renderer.capabilities.isWebGL2
      ? THREE.HalfFloatType
      : THREE.FloatType;

    this.readTarget = new THREE.WebGLRenderTarget(width, height, {
      type,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    this.writeTarget = this.readTarget.clone();

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new THREE.Scene();

    this.uniforms = {
      uPrevState: { value: this.readTarget.texture },
      iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      uResolution: { value: new THREE.Vector2(width, height) },
      uBrushSize: { value: 1.0 },
      uBrushStrength: { value: 1.0 },
      uFluidDecay: { value: 0.98 },
      uTrailLength: { value: 0.8 },
      uStopDecay: { value: 0.0 },
    };

    this.material = new THREE.ShaderMaterial({
      vertexShader: FLUID_VERTEX,
      fragmentShader: FLUID_FRAGMENT,
      uniforms: this.uniforms,
    });

    const geo = new THREE.PlaneGeometry(2, 2);
    this.mesh = new THREE.Mesh(geo, this.material);
    this.scene.add(this.mesh);
  }

  onPointerMove(e: PointerEvent) {
    const rect = this.container.getBoundingClientRect();
    const pr = this.renderer.getPixelRatio();
    const x = (e.clientX - rect.left) * pr;
    const y = (e.clientY - rect.top) * pr;
    this.prevPos.copy(this.inputPos);
    this.inputPos.set(x, this.uniforms.uResolution.value.y - y, 1.0);
    this.uniforms.iMouse.value.set(
      this.inputPos.x, this.inputPos.y,
      this.prevPos.x, this.prevPos.y
    );
    this.pointerActive = true;
    this.idleTime = 0;
    this.lastInputPos.set(x, y);
  }

  onPointerLeave() {
    this.pointerActive = false;
  }

  update() {
    this.idleTime++;
    if (!this.pointerActive) {
      if (this.idleTime > 60) {
        this.motionDecay = Math.max(0.5, this.motionDecay - 0.02);
        this.uniforms.iMouse.value.set(
          this.lastInputPos.x, this.lastInputPos.y,
          this.lastInputPos.x, this.lastInputPos.y
        );
      }
    } else {
      this.motionDecay = 0.95;
    }

    this.uniforms.uPrevState.value = this.readTarget.texture;
    this.material.uniforms.uPrevState.value = this.readTarget.texture;

    this.renderer.setRenderTarget(this.writeTarget);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    const temp = this.readTarget;
    this.readTarget = this.writeTarget;
    this.writeTarget = temp;

    return this.readTarget.texture;
  }

  resize(w: number, h: number) {
    const pr = this.renderer.getPixelRatio();
    this.readTarget.setSize(w * pr, h * pr);
    this.writeTarget.setSize(w * pr, h * pr);
    this.uniforms.uResolution.value.set(w * pr, h * pr);
  }

  dispose() {
    this.readTarget.dispose();
    this.writeTarget.dispose();
    this.material.dispose();
    (this.mesh.geometry as THREE.PlaneGeometry).dispose();
  }
}

export default function FluidAudioWaveform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    const pr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pr);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const rect = container.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const fluid = new FluidSimulation(renderer, container, rect.width, rect.height);

    const displayScene = new THREE.Scene();
    const displayCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const displayUniforms: Record<string, THREE.IUniform> = {
      u_time: { value: 0.0 },
      u_color1: { value: new THREE.Color(0x00e5ff) },
      u_color2: { value: new THREE.Color(0xff00aa) },
      u_color3: { value: new THREE.Color(0x3300ff) },
      u_mouse: { value: new THREE.Vector2(-1, -1) },
      u_resolution: { value: new THREE.Vector2(rect.width * pr, rect.height * pr) },
      u_amplitude: { value: 0.5 },
      u_waveSpeed: { value: 0.8 },
      u_distortion: { value: 0.6 },
      u_complexity: { value: 1.0 },
      u_fluid: { value: null },
      u_mouseFluid: { value: new THREE.Vector2(0.5, 0.5) },
      u_fluidInfluence: { value: 0.6 },
    };

    const displayMaterial = new THREE.ShaderMaterial({
      vertexShader: DISPLAY_VERTEX,
      fragmentShader: DISPLAY_FRAGMENT,
      uniforms: displayUniforms,
    });

    const displayMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), displayMaterial);
    displayScene.add(displayMesh);

    const fluidMouse = new THREE.Vector2(0.5, 0.5);
    const clock = new THREE.Clock();
    let running = true;

    const onPointerMove = (e: PointerEvent) => fluid.onPointerMove(e);
    const onPointerLeave = () => fluid.onPointerLeave();
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onPointerLeave);

    function animate() {
      if (!running) return;
      displayUniforms.u_time.value = clock.getElapsedTime();
      const fluidTex = fluid.update();
      displayUniforms.u_fluid.value = fluidTex;

      const im = fluid.uniforms.iMouse.value as THREE.Vector4;
      const res = fluid.uniforms.uResolution.value as THREE.Vector2;
      if (res.x > 0 && res.y > 0) {
        fluidMouse.set(im.x / res.x, im.y / res.y);
      }
      (displayUniforms.u_mouseFluid.value as THREE.Vector2).lerp(fluidMouse, 0.1);

      renderer.render(displayScene, displayCamera);
      requestAnimationFrame(animate);
    }
    animate();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          clock.start();
          animate();
        } else if (!entry.isIntersecting) {
          running = false;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const onResize = () => {
      const r = container.getBoundingClientRect();
      renderer.setSize(r.width, r.height);
      fluid.resize(r.width, r.height);
      (displayUniforms.u_resolution.value as THREE.Vector2).set(r.width * pr, r.height * pr);
    };
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      window.removeEventListener('resize', onResize);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      observer.disconnect();
      fluid.dispose();
      displayMaterial.dispose();
      (displayMesh.geometry as THREE.PlaneGeometry).dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        cursor: 'crosshair',
      }}
    />
  );
}
