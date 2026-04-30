(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yd={exports:{}},ko={};var pv;function Jy(){if(pv)return ko;pv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=e,ko.jsx=i,ko.jsxs=i,ko}var mv;function Qy(){return mv||(mv=1,yd.exports=Jy()),yd.exports}var B=Qy(),Md={exports:{}},Xo={},Ed={exports:{}},bd={};var gv;function $y(){return gv||(gv=1,(function(s){function e(O,P){var Q=O.length;O.push(P);e:for(;0<Q;){var fe=Q-1>>>1,ye=O[fe];if(0<l(ye,P))O[fe]=P,O[Q]=ye,Q=fe;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var P=O[0],Q=O.pop();if(Q!==P){O[0]=Q;e:for(var fe=0,ye=O.length,L=ye>>>1;fe<L;){var Z=2*(fe+1)-1,ve=O[Z],Ae=Z+1,Ue=O[Ae];if(0>l(ve,Q))Ae<ye&&0>l(Ue,ve)?(O[fe]=Ue,O[Ae]=Q,fe=Ae):(O[fe]=ve,O[Z]=Q,fe=Z);else if(Ae<ye&&0>l(Ue,Q))O[fe]=Ue,O[Ae]=Q,fe=Ae;else break e}}return P}function l(O,P){var Q=O.sortIndex-P.sortIndex;return Q!==0?Q:O.id-P.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],_=1,v=null,g=3,M=!1,E=!1,R=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var P=i(h);P!==null;){if(P.callback===null)r(h);else if(P.startTime<=O)r(h),P.sortIndex=P.expirationTime,e(m,P);else break;P=i(h)}}function V(O){if(R=!1,U(O),!E)if(i(m)!==null)E=!0,F||(F=!0,$());else{var P=i(h);P!==null&&k(V,P.startTime-O)}}var F=!1,I=-1,T=5,z=-1;function J(){return x?!0:!(s.unstable_now()-z<T)}function G(){if(x=!1,F){var O=s.unstable_now();z=O;var P=!0;try{e:{E=!1,R&&(R=!1,w(I),I=-1),M=!0;var Q=g;try{t:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&J());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,g=v.priorityLevel;var ye=fe(v.expirationTime<=O);if(O=s.unstable_now(),typeof ye=="function"){v.callback=ye,U(O),P=!0;break t}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)P=!0;else{var L=i(h);L!==null&&k(V,L.startTime-O),P=!1}}break e}finally{v=null,g=Q,M=!1}P=void 0}}finally{P?$():F=!1}}}var $;if(typeof N=="function")$=function(){N(G)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,he=re.port2;re.port1.onmessage=G,$=function(){he.postMessage(null)}}else $=function(){y(G,0)};function k(O,P){I=y(function(){O(s.unstable_now())},P)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var Q=g;g=P;try{return O()}finally{g=Q}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=g;g=O;try{return P()}finally{g=Q}},s.unstable_scheduleCallback=function(O,P,Q){var fe=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,O){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,O={id:_++,callback:P,priorityLevel:O,startTime:Q,expirationTime:ye,sortIndex:-1},Q>fe?(O.sortIndex=Q,e(h,O),i(m)===null&&O===i(h)&&(R?(w(I),I=-1):R=!0,k(V,Q-fe))):(O.sortIndex=ye,e(m,O),E||M||(E=!0,F||(F=!0,$()))),O},s.unstable_shouldYield=J,s.unstable_wrapCallback=function(O){var P=g;return function(){var Q=g;g=P;try{return O.apply(this,arguments)}finally{g=Q}}}})(bd)),bd}var vv;function eM(){return vv||(vv=1,Ed.exports=$y()),Ed.exports}var Td={exports:{}},rt={};var _v;function tM(){if(_v)return rt;_v=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function y(L,Z,ve){this.props=L,this.context=Z,this.refs=x,this.updater=ve||E}y.prototype.isReactComponent={},y.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=y.prototype;function N(L,Z,ve){this.props=L,this.context=Z,this.refs=x,this.updater=ve||E}var U=N.prototype=new w;U.constructor=N,R(U,y.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(L,Z,ve){var Ae=ve.ref;return{$$typeof:s,type:L,key:Z,ref:Ae!==void 0?Ae:null,props:ve}}function J(L,Z){return z(L.type,Z,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function $(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ve){return Z[ve]})}var re=/\/+/g;function he(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?$(""+L.key):Z.toString(36)}function k(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,Z,ve,Ae,Ue){var ce=typeof L;(ce==="undefined"||ce==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(ce){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case s:case e:Me=!0;break;case _:return Me=L._init,O(Me(L._payload),Z,ve,Ae,Ue)}}if(Me)return Ue=Ue(L),Me=Ae===""?"."+he(L,0):Ae,V(Ue)?(ve="",Me!=null&&(ve=Me.replace(re,"$&/")+"/"),O(Ue,Z,ve,"",function(et){return et})):Ue!=null&&(G(Ue)&&(Ue=J(Ue,ve+(Ue.key==null||L&&L.key===Ue.key?"":(""+Ue.key).replace(re,"$&/")+"/")+Me)),Z.push(Ue)),1;Me=0;var Te=Ae===""?".":Ae+":";if(V(L))for(var Ge=0;Ge<L.length;Ge++)Ae=L[Ge],ce=Te+he(Ae,Ge),Me+=O(Ae,Z,ve,ce,Ue);else if(Ge=M(L),typeof Ge=="function")for(L=Ge.call(L),Ge=0;!(Ae=L.next()).done;)Ae=Ae.value,ce=Te+he(Ae,Ge++),Me+=O(Ae,Z,ve,ce,Ue);else if(ce==="object"){if(typeof L.then=="function")return O(k(L),Z,ve,Ae,Ue);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Me}function P(L,Z,ve){if(L==null)return L;var Ae=[],Ue=0;return O(L,Ae,"","",function(ce){return Z.call(ve,ce,Ue++)}),Ae}function Q(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(ve){(L._status===0||L._status===-1)&&(L._status=1,L._result=ve)},function(ve){(L._status===0||L._status===-1)&&(L._status=2,L._result=ve)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ye={map:P,forEach:function(L,Z,ve){P(L,function(){Z.apply(this,arguments)},ve)},count:function(L){var Z=0;return P(L,function(){Z++}),Z},toArray:function(L){return P(L,function(Z){return Z})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=v,rt.Children=ye,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,Z,ve){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ae=R({},L.props),Ue=L.key;if(Z!=null)for(ce in Z.key!==void 0&&(Ue=""+Z.key),Z)!T.call(Z,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&Z.ref===void 0||(Ae[ce]=Z[ce]);var ce=arguments.length-2;if(ce===1)Ae.children=ve;else if(1<ce){for(var Me=Array(ce),Te=0;Te<ce;Te++)Me[Te]=arguments[Te+2];Ae.children=Me}return z(L.type,Ue,Ae)},rt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,Z,ve){var Ae,Ue={},ce=null;if(Z!=null)for(Ae in Z.key!==void 0&&(ce=""+Z.key),Z)T.call(Z,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ue[Ae]=Z[Ae]);var Me=arguments.length-2;if(Me===1)Ue.children=ve;else if(1<Me){for(var Te=Array(Me),Ge=0;Ge<Me;Ge++)Te[Ge]=arguments[Ge+2];Ue.children=Te}if(L&&L.defaultProps)for(Ae in Me=L.defaultProps,Me)Ue[Ae]===void 0&&(Ue[Ae]=Me[Ae]);return z(L,ce,Ue)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:p,render:L}},rt.isValidElement=G,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Q}},rt.memo=function(L,Z){return{$$typeof:h,type:L,compare:Z===void 0?null:Z}},rt.startTransition=function(L){var Z=I.T,ve={};I.T=ve;try{var Ae=L(),Ue=I.S;Ue!==null&&Ue(ve,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(F,fe)}catch(ce){fe(ce)}finally{Z!==null&&ve.types!==null&&(Z.types=ve.types),I.T=Z}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(L){return I.H.use(L)},rt.useActionState=function(L,Z,ve){return I.H.useActionState(L,Z,ve)},rt.useCallback=function(L,Z){return I.H.useCallback(L,Z)},rt.useContext=function(L){return I.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,Z){return I.H.useDeferredValue(L,Z)},rt.useEffect=function(L,Z){return I.H.useEffect(L,Z)},rt.useEffectEvent=function(L){return I.H.useEffectEvent(L)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(L,Z,ve){return I.H.useImperativeHandle(L,Z,ve)},rt.useInsertionEffect=function(L,Z){return I.H.useInsertionEffect(L,Z)},rt.useLayoutEffect=function(L,Z){return I.H.useLayoutEffect(L,Z)},rt.useMemo=function(L,Z){return I.H.useMemo(L,Z)},rt.useOptimistic=function(L,Z){return I.H.useOptimistic(L,Z)},rt.useReducer=function(L,Z,ve){return I.H.useReducer(L,Z,ve)},rt.useRef=function(L){return I.H.useRef(L)},rt.useState=function(L){return I.H.useState(L)},rt.useSyncExternalStore=function(L,Z,ve){return I.H.useSyncExternalStore(L,Z,ve)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.3",rt}var xv;function cp(){return xv||(xv=1,Td.exports=tM()),Td.exports}var Ad={exports:{}},Pn={};var Sv;function nM(){if(Sv)return Pn;Sv=1;var s=cp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Pn.flushSync=function(m){var h=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=_,r.d.f()}},Pn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Pn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Pn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Pn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Pn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Pn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Pn.requestFormReset=function(m){r.d.r(m)},Pn.unstable_batchedUpdates=function(m,h){return m(h)},Pn.useFormState=function(m,h,_){return f.H.useFormState(m,h,_)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var yv;function iM(){if(yv)return Ad.exports;yv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=nM(),Ad.exports}var Mv;function aM(){if(Mv)return Xo;Mv=1;var s=eM(),e=cp(),i=iM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,C=u.child;C;){if(C===a){S=!0,a=u,o=d;break}if(C===o){S=!0,o=u,a=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===a){S=!0,a=d,o=u;break}if(C===o){S=!0,o=d,a=u;break}C=C.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var k=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},fe=[],ye=-1;function L(t){return{current:t}}function Z(t){0>ye||(t.current=fe[ye],fe[ye]=null,ye--)}function ve(t,n){ye++,fe[ye]=t.current,t.current=n}var Ae=L(null),Ue=L(null),ce=L(null),Me=L(null);function Te(t,n){switch(ve(ce,n),ve(Ue,t),ve(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?z0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=z0(n),t=I0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ae),ve(Ae,t)}function Ge(){Z(Ae),Z(Ue),Z(ce)}function et(t){t.memoizedState!==null&&ve(Me,t);var n=Ae.current,a=I0(n,t.type);n!==a&&(ve(Ue,t),ve(Ae,a))}function Qe(t){Ue.current===t&&(Z(Ae),Z(Ue)),Me.current===t&&(Z(Me),Bo._currentValue=Q)}var Xt,dt;function _t(t){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var Lt=!1;function ct(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var oe=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){oe=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){oe=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&oe&&typeof ue.stack=="string")return[ue.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var H=S.split(`
`),ne=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var me=`
`+H[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function ln(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return _t("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=ln(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var An=Object.prototype.hasOwnProperty,q=s.unstable_scheduleCallback,tn=s.unstable_cancelCallback,ht=s.unstable_shouldYield,Ht=s.unstable_requestPaint,Re=s.unstable_now,Kt=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,ee=s.unstable_NormalPriority,xe=s.unstable_LowPriority,be=s.unstable_IdlePriority,we=s.log,Oe=s.unstable_setDisableYieldValue,de=null,pe=null;function Pe(t){if(typeof we=="function"&&Oe(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(de,t)}catch{}}var Fe=Math.clz32?Math.clz32:it,Ne=Math.log,De=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/De|0)|0}var at=256,pt=262144,X=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Ce(o):(S&=C,S!==0?u=Ce(S):a||(a=C&~t,a!==0&&(u=Ce(a))))):(C=o&~d,C!==0?u=Ce(C):S!==0?u=Ce(S):a||(a=o&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Fe(a),Se=1<<me;C[me]=0,H[me]=-1;var oe=ne[me];if(oe!==null)for(ne[me]=null,me=0;me<oe.length;me++){var ue=oe[me];ue!==null&&(ue.lane&=-536870913)}a&=~Se}o!==0&&wt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function wt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ci(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zn(t,n){var a=n&-n;return a=(a&42)!==0?1:pr(a),(a&(t.suspendedLanes|n))!==0?0:a}function pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ks(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Js(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:ov(t.type))}function Qs(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var Ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ln,Cn="__reactProps$"+Ln,Qi="__reactContainer$"+Ln,Da="__reactEvents$"+Ln,dl="__reactListeners$"+Ln,qr="__reactHandles$"+Ln,$s="__reactResources$"+Ln,Ua="__reactMarker$"+Ln;function eo(t){delete t[cn],delete t[Cn],delete t[Da],delete t[dl],delete t[qr]}function Na(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Qi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=W0(t);t!==null;){if(a=t[cn])return a;t=W0(t)}return n}t=a,a=t.parentNode}return null}function La(t){if(t=t[cn]||t[Qi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Oa(t){var n=t[$s];return n||(n=t[$s]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ua]=!0}var hl=new Set,A={};function Y(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)hl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ie={};function ke(t){return An.call(Ie,t)?!0:An.call(ae,t)?!1:ie.test(t)?Ie[t]=!0:(ae[t]=!0,!1)}function ze(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Jt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,d,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?mt(t,S,Ke(n)):a!=null?mt(t,S,Ke(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ke(C):t.removeAttribute("name")}function On(t,n,a,o,u,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){At(t);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),At(t)}function mt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Kn(t,n,a){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ke(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(k(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Qt(t,d,n[d])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gr(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var vu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Zr=null;function Fp(t){var n=La(t);if(n&&(t=n.stateNode)){var a=t[Cn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Cn]||null;if(!u)throw Error(r(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Jt(o)}break e;case"textarea":Kn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var xu=!1;function zp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Yr!==null||Zr!==null)&&(ec(),Yr&&(n=Yr,t=Zr,Zr=Yr=null,Fp(n),t)))for(n=0;n<t.length;n++)Fp(t[n])}}function to(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ea)try{var no={};Object.defineProperty(no,"passive",{get:function(){Su=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Su=!1}var Fa=null,yu=null,pl=null;function Ip(){if(pl)return pl;var t,n=yu,a=n.length,o,u="value"in Fa?Fa.value:Fa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Bp(){return!1}function Gn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Bp,this.isPropagationStopped=Bp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Gn(vr),io=v({},vr,{view:0,detail:0}),Zx=Gn(io),Mu,Eu,ao,_l=v({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Mu=t.screenX-ao.screenX,Eu=t.screenY-ao.screenY):Eu=Mu=0,ao=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Hp=Gn(_l),Kx=v({},_l,{dataTransfer:0}),Jx=Gn(Kx),Qx=v({},io,{relatedTarget:0}),bu=Gn(Qx),$x=v({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Gn($x),tS=v({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nS=Gn(tS),iS=v({},vr,{data:0}),Gp=Gn(iS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sS[t])?!!n[t]:!1}function Tu(){return oS}var lS=v({},io,{key:function(t){if(t.key){var n=aS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=Gn(lS),uS=v({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Gn(uS),fS=v({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),dS=Gn(fS),hS=v({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pS=Gn(hS),mS=v({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=Gn(mS),vS=v({},vr,{newState:0,oldState:0}),_S=Gn(vS),xS=[9,13,27,32],Au=ea&&"CompositionEvent"in window,ro=null;ea&&"documentMode"in document&&(ro=document.documentMode);var SS=ea&&"TextEvent"in window&&!ro,kp=ea&&(!Au||ro&&8<ro&&11>=ro),Xp=" ",Wp=!1;function jp(t,n){switch(t){case"keyup":return xS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function yS(t,n){switch(t){case"compositionend":return qp(n);case"keypress":return n.which!==32?null:(Wp=!0,Xp);case"textInput":return t=n.data,t===Xp&&Wp?null:t;default:return null}}function MS(t,n){if(Kr)return t==="compositionend"||!Au&&jp(t,n)?(t=Ip(),pl=yu=Fa=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ES[t.type]:n==="textarea"}function Zp(t,n,a,o){Yr?Zr?Zr.push(o):Zr=[o]:Yr=o,n=oc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var so=null,oo=null;function bS(t){U0(t,0)}function xl(t){var n=mr(t);if(Jt(n))return t}function Kp(t,n){if(t==="change")return n}var Jp=!1;if(ea){var Cu;if(ea){var Ru="oninput"in document;if(!Ru){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Ru=typeof Qp.oninput=="function"}Cu=Ru}else Cu=!1;Jp=Cu&&(!document.documentMode||9<document.documentMode)}function $p(){so&&(so.detachEvent("onpropertychange",em),oo=so=null)}function em(t){if(t.propertyName==="value"&&xl(oo)){var n=[];Zp(n,oo,t,_u(t)),zp(bS,n)}}function TS(t,n,a){t==="focusin"?($p(),so=n,oo=a,so.attachEvent("onpropertychange",em)):t==="focusout"&&$p()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(oo)}function CS(t,n){if(t==="click")return xl(n)}function RS(t,n){if(t==="input"||t==="change")return xl(n)}function wS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:wS;function lo(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!An.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,n){var a=tm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tm(a)}}function im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var DS=ea&&"documentMode"in document&&11>=document.documentMode,Jr=null,Du=null,co=null,Uu=!1;function rm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Jr==null||Jr!==Wt(o)||(o=Jr,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=oc(Du,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Jr)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Nu={},sm={};ea&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function xr(t){if(Nu[t])return Nu[t];if(!Qr[t])return t;var n=Qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sm)return Nu[t]=n[a];return t}var om=xr("animationend"),lm=xr("animationiteration"),cm=xr("animationstart"),US=xr("transitionrun"),NS=xr("transitionstart"),LS=xr("transitioncancel"),um=xr("transitionend"),fm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ti(t,n){fm.set(t,n),Y(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],$r=0,Ou=0;function yl(){for(var t=$r,n=Ou=$r=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&dm(a,u,d)}}function Ml(t,n,a,o){ui[$r++]=t,ui[$r++]=n,ui[$r++]=a,ui[$r++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return Ml(t,n,a,o),El(t)}function Sr(t,n){return Ml(t,null,null,n),El(t)}function dm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(t){if(50<No)throw No=0,Wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function OS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new OS(t,n,a,o)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Fu(t)&&(S=1);else if(typeof t=="string")S=By(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=$n(31,a,n,u),t.elementType=z,t.lanes=d,t;case R:return yr(a.children,u,d,n);case x:S=8,u|=24;break;case y:return t=$n(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case V:return t=$n(13,a,n,u),t.elementType=V,t.lanes=d,t;case F:return t=$n(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:S=10;break e;case w:S=9;break e;case U:S=11;break e;case I:S=14;break e;case T:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=$n(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function yr(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function zu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function pm(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var mm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=mm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},mm.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var ts=[],ns=0,Tl=null,uo=0,di=[],hi=0,za=null,Ii=1,Bi="";function na(t,n){ts[ns++]=uo,ts[ns++]=Tl,Tl=t,uo=n}function gm(t,n,a){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=za,za=t;var o=Ii;t=Bi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Fe(n)+u|a<<u|o,Bi=d+t}else Ii=1<<d|a<<u|o,Bi=t}function Bu(t){t.return!==null&&(na(t,1),gm(t,1,0))}function Hu(t){for(;t===Tl;)Tl=ts[--ns],ts[ns]=null,uo=ts[--ns],ts[ns]=null;for(;t===za;)za=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null}function vm(t,n){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=za,Ii=n.id,Bi=n.overflow,za=t}var Rn=null,Yt=null,yt=!1,Ia=null,pi=!1,Gu=Error(r(519));function Ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(fi(n,t)),Gu}function _m(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Cn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)vt(Oo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||P0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Ba(t,!0)}function xm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function is(t){if(t!==Rn)return!1;if(!yt)return xm(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ba(t),xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=X0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=X0(t)}else n===27?(n=Yt,$a(t.type)?(t=fd,fd=null,Yt=t):Yt=n):Yt=Rn?gi(t.stateNode.nextSibling):null;return!0}function Mr(){Yt=Rn=null,yt=!1}function Vu(){var t=Ia;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ia=null),t}function fo(t){Ia===null?Ia=[t]:Ia.push(t)}var ku=L(null),Er=null,ia=null;function Ha(t,n,a){ve(ku,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=ku.current,Z(ku)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Wu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Xu(d.return,a,t),o||(S=null);break e}d=C.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Xu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function as(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(u===Me.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}u=u.return}t!==null&&Wu(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Sm(Er,t)}function Cl(t,n){return Er===null&&br(t),Sm(t,n)}function Sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(r(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var PS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},FS=s.unstable_scheduleCallback,zS=s.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new PS,data:new Map,refCount:0}}function ho(t){t.refCount--,t.refCount===0&&FS(zS,function(){t.controller.abort()})}var po=null,qu=0,rs=0,ss=null;function IS(t,n){if(po===null){var a=po=[];qu=0,rs=Jf(),ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(ym,ym),n}function ym(){if(--qu===0&&po!==null){ss!==null&&(ss.status="fulfilled");var t=po;po=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function BS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Mm=O.S;O.S=function(t,n){r0=Re(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&IS(t,n),Mm!==null&&Mm(t,n)};var Tr=L(null);function Yu(){var t=Tr.current;return t!==null?t:jt.pooledCache}function Rl(t,n){n===null?ve(Tr,Tr.current):ve(Tr,n.pool)}function Em(){var t=Yu();return t===null?null:{parent:hn._currentValue,pool:t}}var os=Error(r(460)),Zu=Error(r(474)),wl=Error(r(542)),Dl={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cm(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cm(t),t}throw Cr=n,os}}function Ar(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cr=a,os):a}}var Cr=null;function Am(){if(Cr===null)throw Error(r(459));var t=Cr;return Cr=null,t}function Cm(t){if(t===os||t===wl)throw Error(r(483))}var ls=null,mo=0;function Ul(t){var n=mo;return mo+=1,ls===null&&(ls=[]),Tm(ls,t,n)}function go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rm(t){function n(K,W){if(t){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=ta(K,W),K.index=0,K.sibling=null,K}function d(K,W,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=67108866,W):te):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function C(K,W,te,_e){return W===null||W.tag!==6?(W=zu(te,K.mode,_e),W.return=K,W):(W=u(W,te),W.return=K,W)}function H(K,W,te,_e){var Je=te.type;return Je===R?me(K,W,te.props.children,_e,te.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Ar(Je)===W.type)?(W=u(W,te.props),go(W,te),W.return=K,W):(W=bl(te.type,te.key,te.props,null,K.mode,_e),go(W,te),W.return=K,W)}function ne(K,W,te,_e){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Iu(te,K.mode,_e),W.return=K,W):(W=u(W,te.children||[]),W.return=K,W)}function me(K,W,te,_e,Je){return W===null||W.tag!==7?(W=yr(te,K.mode,_e,Je),W.return=K,W):(W=u(W,te),W.return=K,W)}function Se(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return te=bl(W.type,W.key,W.props,null,K.mode,te),go(te,W),te.return=K,te;case E:return W=Iu(W,K.mode,te),W.return=K,W;case T:return W=Ar(W),Se(K,W,te)}if(k(W)||$(W))return W=yr(W,K.mode,te,null),W.return=K,W;if(typeof W.then=="function")return Se(K,Ul(W),te);if(W.$$typeof===N)return Se(K,Cl(K,W),te);Nl(K,W)}return null}function oe(K,W,te,_e){var Je=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:C(K,W,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===Je?H(K,W,te,_e):null;case E:return te.key===Je?ne(K,W,te,_e):null;case T:return te=Ar(te),oe(K,W,te,_e)}if(k(te)||$(te))return Je!==null?null:me(K,W,te,_e,null);if(typeof te.then=="function")return oe(K,W,Ul(te),_e);if(te.$$typeof===N)return oe(K,W,Cl(K,te),_e);Nl(K,te)}return null}function ue(K,W,te,_e,Je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(te)||null,C(W,K,""+_e,Je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return K=K.get(_e.key===null?te:_e.key)||null,H(W,K,_e,Je);case E:return K=K.get(_e.key===null?te:_e.key)||null,ne(W,K,_e,Je);case T:return _e=Ar(_e),ue(K,W,te,_e,Je)}if(k(_e)||$(_e))return K=K.get(te)||null,me(W,K,_e,Je,null);if(typeof _e.then=="function")return ue(K,W,te,Ul(_e),Je);if(_e.$$typeof===N)return ue(K,W,te,Cl(W,_e),Je);Nl(W,_e)}return null}function je(K,W,te,_e){for(var Je=null,Ct=null,Ye=W,ut=W=0,St=null;Ye!==null&&ut<te.length;ut++){Ye.index>ut?(St=Ye,Ye=null):St=Ye.sibling;var Rt=oe(K,Ye,te[ut],_e);if(Rt===null){Ye===null&&(Ye=St);break}t&&Ye&&Rt.alternate===null&&n(K,Ye),W=d(Rt,W,ut),Ct===null?Je=Rt:Ct.sibling=Rt,Ct=Rt,Ye=St}if(ut===te.length)return a(K,Ye),yt&&na(K,ut),Je;if(Ye===null){for(;ut<te.length;ut++)Ye=Se(K,te[ut],_e),Ye!==null&&(W=d(Ye,W,ut),Ct===null?Je=Ye:Ct.sibling=Ye,Ct=Ye);return yt&&na(K,ut),Je}for(Ye=o(Ye);ut<te.length;ut++)St=ue(Ye,K,ut,te[ut],_e),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?ut:St.key),W=d(St,W,ut),Ct===null?Je=St:Ct.sibling=St,Ct=St);return t&&Ye.forEach(function(ar){return n(K,ar)}),yt&&na(K,ut),Je}function $e(K,W,te,_e){if(te==null)throw Error(r(151));for(var Je=null,Ct=null,Ye=W,ut=W=0,St=null,Rt=te.next();Ye!==null&&!Rt.done;ut++,Rt=te.next()){Ye.index>ut?(St=Ye,Ye=null):St=Ye.sibling;var ar=oe(K,Ye,Rt.value,_e);if(ar===null){Ye===null&&(Ye=St);break}t&&Ye&&ar.alternate===null&&n(K,Ye),W=d(ar,W,ut),Ct===null?Je=ar:Ct.sibling=ar,Ct=ar,Ye=St}if(Rt.done)return a(K,Ye),yt&&na(K,ut),Je;if(Ye===null){for(;!Rt.done;ut++,Rt=te.next())Rt=Se(K,Rt.value,_e),Rt!==null&&(W=d(Rt,W,ut),Ct===null?Je=Rt:Ct.sibling=Rt,Ct=Rt);return yt&&na(K,ut),Je}for(Ye=o(Ye);!Rt.done;ut++,Rt=te.next())Rt=ue(Ye,K,ut,Rt.value,_e),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?ut:Rt.key),W=d(Rt,W,ut),Ct===null?Je=Rt:Ct.sibling=Rt,Ct=Rt);return t&&Ye.forEach(function(Ky){return n(K,Ky)}),yt&&na(K,ut),Je}function kt(K,W,te,_e){if(typeof te=="object"&&te!==null&&te.type===R&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var Je=te.key;W!==null;){if(W.key===Je){if(Je=te.type,Je===R){if(W.tag===7){a(K,W.sibling),_e=u(W,te.props.children),_e.return=K,K=_e;break e}}else if(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Ar(Je)===W.type){a(K,W.sibling),_e=u(W,te.props),go(_e,te),_e.return=K,K=_e;break e}a(K,W);break}else n(K,W);W=W.sibling}te.type===R?(_e=yr(te.props.children,K.mode,_e,te.key),_e.return=K,K=_e):(_e=bl(te.type,te.key,te.props,null,K.mode,_e),go(_e,te),_e.return=K,K=_e)}return S(K);case E:e:{for(Je=te.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(K,W.sibling),_e=u(W,te.children||[]),_e.return=K,K=_e;break e}else{a(K,W);break}else n(K,W);W=W.sibling}_e=Iu(te,K.mode,_e),_e.return=K,K=_e}return S(K);case T:return te=Ar(te),kt(K,W,te,_e)}if(k(te))return je(K,W,te,_e);if($(te)){if(Je=$(te),typeof Je!="function")throw Error(r(150));return te=Je.call(te),$e(K,W,te,_e)}if(typeof te.then=="function")return kt(K,W,Ul(te),_e);if(te.$$typeof===N)return kt(K,W,Cl(K,te),_e);Nl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(a(K,W.sibling),_e=u(W,te),_e.return=K,K=_e):(a(K,W),_e=zu(te,K.mode,_e),_e.return=K,K=_e),S(K)):a(K,W)}return function(K,W,te,_e){try{mo=0;var Je=kt(K,W,te,_e);return ls=null,Je}catch(Ye){if(Ye===os||Ye===wl)throw Ye;var Ct=$n(29,Ye,null,K.mode);return Ct.lanes=_e,Ct.return=K,Ct}}}var Rr=Rm(!0),wm=Rm(!1),Ga=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),dm(t,null,a),n}return Ml(t,o,n,a),El(t)}function vo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function _o(){if($u){var t=ss;if(t!==null)throw t}}function xo(t,n,a,o){$u=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ne=H.next;H.next=null,S===null?d=ne:S.next=ne,S=H;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==S&&(C===null?me.firstBaseUpdate=ne:C.next=ne,me.lastBaseUpdate=H))}if(d!==null){var Se=u.baseState;S=0,me=ne=H=null,C=d;do{var oe=C.lane&-536870913,ue=oe!==C.lane;if(ue?(xt&oe)===oe:(o&oe)===oe){oe!==0&&oe===rs&&($u=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var je=t,$e=C;oe=n;var kt=a;switch($e.tag){case 1:if(je=$e.payload,typeof je=="function"){Se=je.call(kt,Se,oe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,oe=typeof je=="function"?je.call(kt,Se,oe):je,oe==null)break e;Se=v({},Se,oe);break e;case 2:Ga=!0}}oe=C.callback,oe!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[oe]:ue.push(oe))}else ue={lane:oe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ne=me=ue,H=Se):me=me.next=ue,S|=oe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Ya|=S,t.lanes=S,t.memoizedState=Se}}function Dm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Um(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Dm(a[t],n)}var cs=L(null),Ll=L(0);function Nm(t,n){t=ha,ve(Ll,t),ve(cs,n),ha=t|n.baseLanes}function ef(){ve(Ll,ha),ve(cs,cs.current)}function tf(){ha=Ll.current,Z(cs),Z(Ll)}var ei=L(null),mi=null;function Xa(t){var n=t.alternate;ve(un,un.current&1),ve(ei,t),mi===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(mi=t)}function nf(t){ve(un,un.current),ve(ei,t),mi===null&&(mi=t)}function Lm(t){t.tag===22?(ve(un,un.current),ve(ei,t),mi===null&&(mi=t)):Wa()}function Wa(){ve(un,un.current),ve(ei,ei.current)}function ti(t){Z(ei),mi===t&&(mi=null),Z(un)}var un=L(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,lt=null,Gt=null,pn=null,Pl=!1,us=!1,wr=!1,Fl=0,So=0,fs=null,HS=0;function rn(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function rf(t,n,a,o,u,d){return ra=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?gg:Sf,wr=!1,d=a(o,u),wr=!1,us&&(d=Pm(n,a,o,u)),Om(t),d}function Om(t){O.H=Eo;var n=Gt!==null&&Gt.next!==null;if(ra=0,pn=Gt=lt=null,Pl=!1,So=0,fs=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Al(t)&&(mn=!0))}function Pm(t,n,a,o){lt=t;var u=0;do{if(us&&(fs=null),So=0,us=!1,25<=u)throw Error(r(301));if(u+=1,pn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=vg,d=n(a,o)}while(us);return d}function GS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?yo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function sf(){var t=Fl!==0;return Fl=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}ra=0,pn=Gt=lt=null,us=!1,So=Fl=0,fs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?lt.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=pn===null?lt.memoizedState:pn.next;if(n!==null)pn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},pn===null?lt.memoizedState=pn=t:pn=pn.next=t}return pn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var n=So;return So+=1,fs===null&&(fs=[]),t=Tm(fs,t,n),n=lt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?gg:Sf),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===N)return wn(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=J;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=fn();return uf(n,Gt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=S=null,H=null,ne=n,me=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(xt&Se)===Se:(ra&Se)===Se){var oe=ne.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===rs&&(me=!0);else if((ra&oe)===oe){ne=ne.next,oe===rs&&(me=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=Se,S=d):H=H.next=Se,lt.lanes|=oe,Ya|=oe;Se=ne.action,wr&&a(d,Se),d=ne.hasEagerState?ne.eagerState:a(d,Se)}else oe={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=oe,S=d):H=H.next=oe,lt.lanes|=Se,Ya|=Se;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?S=d:H.next=C,!Qn(d,t.memoizedState)&&(mn=!0,me&&(a=ss,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Qn(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Fm(t,n,a){var o=lt,u=fn(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Qn((Gt||u).memoizedState,a);if(S&&(u.memoizedState=a,mn=!0),u=u.queue,pf(Bm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),jt===null)throw Error(r(349));d||(ra&127)!==0||zm(o,n,a)}return a}function zm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=zl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Im(t,n,a,o){n.value=a,n.getSnapshot=o,Hm(n)&&Gm(t)}function Bm(t,n,a){return a(function(){Hm(n)&&Gm(t)})}function Hm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Gm(t){var n=Sr(t,2);n!==null&&jn(n,t,2)}function df(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),wr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function Vm(t,n,a,o){return t.baseState=a,uf(t,Gt,typeof o=="function"?o:sa)}function VS(t,n,a,o,u){if(Vl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function km(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,S={};O.T=S;try{var C=a(u,o),H=O.S;H!==null&&H(S,C),Xm(t,n,C)}catch(ne){hf(t,n,ne)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=a(u,o),Xm(t,n,d)}catch(ne){hf(t,n,ne)}}function Xm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wm(t,n,o)},function(o){return hf(t,n,o)}):Wm(t,n,a)}function Wm(t,n,a){n.status="fulfilled",n.value=a,jm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,km(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jm(n),n=n.next;while(n!==o)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qm(t,n){return n}function Ym(t,n){if(yt){var a=jt.formState;if(a!==null){e:{var o=lt;if(yt){if(Yt){t:{for(var u=Yt,d=pi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=gi(u.nextSibling),o=u.data==="F!";break e}}Ba(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:n},a.queue=o,a=hg.bind(null,lt,o),o.dispatch=a,o=df(!1),d=xf.bind(null,lt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=VS.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Zm(t){var n=fn();return Km(n,Gt,t)}function Km(t,n,a){if(n=uf(t,n,qm)[0],t=Bl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(S){throw S===os?wl:S}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ds(9,{destroy:void 0},kS.bind(null,u,a),null)),[o,d,t]}function kS(t,n){t.action=n}function Jm(t){var n=fn(),a=Gt;if(a!==null)return Km(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ds(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=zl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Qm(){return fn().memoizedState}function Hl(t,n,a,o){var u=In();lt.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&af(o,Gt.memoizedState.deps)?u.memoizedState=ds(n,d,a,o):(lt.flags|=t,u.memoizedState=ds(1|n,d,a,o))}function $m(t,n){Hl(8390656,8,t,n)}function pf(t,n){Gl(2048,8,t,n)}function XS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=zl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function eg(t){var n=fn().memoizedState;return XS({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function tg(t,n){return Gl(4,2,t,n)}function ng(t,n){return Gl(4,4,t,n)}function ig(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ag(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,ig.bind(null,n,t),a)}function mf(){}function rg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function sg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=o0(),lt.lanes|=t,Ya|=t,a)}function og(t,n,a,o){return Qn(a,n)?a:cs.current!==null?(t=gf(t,a,o),Qn(t,n)||(mn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(xt&261930)===0?(mn=!0,t.memoizedState=a):(t=o0(),lt.lanes|=t,Ya|=t,n)}function lg(t,n,a,o,u){var d=P.p;P.p=d!==0&&8>d?d:8;var S=O.T,C={};O.T=C,xf(t,!1,n,a);try{var H=u(),ne=O.S;if(ne!==null&&ne(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=BS(H,o);Mo(t,n,me,ai(t))}else Mo(t,n,o,ai(t))}catch(Se){Mo(t,n,{then:function(){},status:"rejected",reason:Se},ai())}finally{P.p=d,S!==null&&C.types!==null&&(S.types=C.types),O.T=S}}function WS(){}function vf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=cg(t).queue;lg(t,u,n,Q,a===null?WS:function(){return ug(t),a(o)})}function cg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ug(t){var n=cg(t);n.next===null&&(n=t.alternate.memoizedState),Mo(t,n.next.queue,{},ai())}function _f(){return wn(Bo)}function fg(){return fn().memoizedState}function dg(){return fn().memoizedState}function jS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Va(a);var o=ka(n,t,a);o!==null&&(jn(o,n,a),vo(o,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function qS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?pg(n,a):(a=Pu(t,n,a,o),a!==null&&(jn(a,t,o),mg(a,n,o)))}function hg(t,n,a){var o=ai();Mo(t,n,a,o)}function Mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))pg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,C=d(S,a);if(u.hasEagerState=!0,u.eagerState=C,Qn(C,S))return Ml(t,n,u,0),jt===null&&yl(),!1}catch{}if(a=Pu(t,n,u,o),a!==null)return jn(a,t,o),mg(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(r(479))}else n=Pu(t,a,o,2),n!==null&&jn(n,t,2)}function Vl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function pg(t,n){us=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}var Eo={readContext:wn,use:Il,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Eo.useEffectEvent=rn;var gg={readContext:wn,use:Il,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:$m,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,ig.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(wr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=qS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=hg.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=In();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=lg.bind(null,lt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=In();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(xt&127)!==0||zm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,$m(Bm.bind(null,o,d,t),[t]),o.flags|=2048,ds(9,{destroy:void 0},Im.bind(null,o,d,a,n),null),a},useId:function(){var t=In(),n=jt.identifierPrefix;if(yt){var a=Bi,o=Ii;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=HS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Ym,useActionState:Ym,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return In().memoizedState=jS.bind(null,lt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:wn,use:Il,useCallback:rg,useContext:wn,useEffect:pf,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:sg,useReducer:Bl,useRef:Qm,useState:function(){return Bl(sa)},useDebugValue:mf,useDeferredValue:function(t,n){var a=fn();return og(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Bl(sa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:Fm,useId:fg,useHostTransitionStatus:_f,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var a=fn();return Vm(a,Gt,t,n)},useMemoCache:cf,useCacheRefresh:dg};Sf.useEffectEvent=eg;var vg={readContext:wn,use:Il,useCallback:rg,useContext:wn,useEffect:pf,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:sg,useReducer:ff,useRef:Qm,useState:function(){return ff(sa)},useDebugValue:mf,useDeferredValue:function(t,n){var a=fn();return Gt===null?gf(a,t,n):og(a,Gt.memoizedState,t,n)},useTransition:function(){var t=ff(sa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:Fm,useId:fg,useHostTransitionStatus:_f,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var a=fn();return Gt!==null?Vm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:dg};vg.useEffectEvent=eg;function yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(jn(n,t,o),vo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(jn(n,t,o),vo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(jn(n,t,a),vo(n,t,a))}};function _g(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,d):!0}function xg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Sg(t){Sl(t)}function yg(t){console.error(t)}function Mg(t){Sl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Eg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function bg(t){return t=Va(t),t.tag=3,t}function Tg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Eg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Eg(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function YS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?tc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,u)),!1}throw Error(r(435,a.tag))}return Yf(t,o,u),tc(),!1}if(yt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(r(422),{cause:o}),fo(fi(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),fo(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Ef(t.stateNode,o,u),Qu(t,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=fi(d,a),Uo===null?Uo=[d]:Uo.push(d),sn!==4&&(sn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ef(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=bg(u),Tg(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(r(461)),mn=!1;function Dn(t,n,a,o){n.child=t===null?wm(n,null,a,o):Rr(n,t.child,a,o)}function Ag(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return br(n),o=rf(t,n,a,S,d,u),C=sf(),t!==null&&!mn?(of(t,n,u),oa(t,n,u)):(yt&&C&&Bu(n),n.flags|=1,Dn(t,n,o,u),n.child)}function Cg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Fu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Rg(t,n,d,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Nf(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(S,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(d,o),t.ref=n.ref,t.return=n,n.child=t}function Rg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(lo(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,Nf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return Tf(t,n,a,o,u)}function wg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Dg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,d!==null?d.cachePool:null),d!==null?Nm(n,d):ef(),Lm(n);else return o=n.lanes=536870912,Dg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Rl(n,d.cachePool),Nm(n,d),Wa(),n.memoizedState=null):(t!==null&&Rl(n,null),ef(),Wa());return Dn(t,n,u,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dg(t,n,a,o,u){var d=Yu();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Rl(n,null),ef(),Lm(n),t!==null&&as(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ug(t,n,a){return Rr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function ZS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,bo(null,t);if(nf(n),(t=Yt)?(t=k0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=pm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Xl(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=Ug(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||as(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=jt,o!==null&&(S=Zn(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,Sr(t,S),jn(o,t,S),bf;tc(),n=Ug(t,n,a)}else t=d.treeContext,Yt=gi(S.nextSibling),Rn=n,yt=!0,Ia=null,pi=!1,t!==null&&vm(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,u){return br(n),a=rf(t,n,a,o,void 0,u),o=sf(),t!==null&&!mn?(of(t,n,u),oa(t,n,u)):(yt&&o&&Bu(n),n.flags|=1,Dn(t,n,a,u),n.child)}function Ng(t,n,a,o,u,d){return br(n),n.updateQueue=null,a=Pm(n,o,a,u),Om(t),o=sf(),t!==null&&!mn?(of(t,n,d),oa(t,n,d)):(yt&&o&&Bu(n),n.flags|=1,Dn(t,n,a,d),n.child)}function Lg(t,n,a,o,u){if(br(n),n.stateNode===null){var d=es,S=a.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?wn(S):es,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Mf.enqueueReplaceState(d,d.state,null),xo(n,o,d,u),_o(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,H=Dr(a,C);d.props=H;var ne=d.context,me=a.contextType;S=es,typeof me=="object"&&me!==null&&(S=wn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ne!==S)&&xg(n,d,o,S),Ga=!1;var oe=n.memoizedState;d.state=oe,xo(n,o,d,u),_o(),ne=n.memoizedState,C||oe!==ne||Ga?(typeof Se=="function"&&(yf(n,a,Se,o),ne=n.memoizedState),(H=Ga||_g(n,a,H,o,oe,ne,S))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=S,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ju(t,n),S=n.memoizedProps,me=Dr(a,S),d.props=me,Se=n.pendingProps,oe=d.context,ne=a.contextType,H=es,typeof ne=="object"&&ne!==null&&(H=wn(ne)),C=a.getDerivedStateFromProps,(ne=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Se||oe!==H)&&xg(n,d,o,H),Ga=!1,oe=n.memoizedState,d.state=oe,xo(n,o,d,u),_o();var ue=n.memoizedState;S!==Se||oe!==ue||Ga||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof C=="function"&&(yf(n,a,C,o),ue=n.memoizedState),(me=Ga||_g(n,a,me,o,oe,ue,H)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=H,o=me):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Rr(n,t.child,null,u),n.child=Rr(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=oa(t,n,u),t}function Og(t,n,a,o){return Mr(),n.flags|=256,Dn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:Em()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Pg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Xa(n):Wa(),(t=Yt)?(t=k0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=pm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ba(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Wa(),u=n.mode,C=jl({mode:"hidden",children:C},u),o=yr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Cf(a),o.childLanes=Rf(t,S,a),n.memoizedState=Af,bo(null,o)):(Xa(n),wf(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(d)n.flags&256?(Xa(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),C=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),C=yr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Rr(n,t.child,null,a),o=n.child,o.memoizedState=Cf(a),o.childLanes=Rf(t,S,a),n.memoizedState=Af,n=bo(null,o));else if(Xa(n),ud(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var ne=S.dgst;S=ne,o=Error(r(419)),o.stack="",o.digest=S,fo({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(mn||as(t,n,a,!1),S=(a&t.childLanes)!==0,mn||S){if(S=jt,S!==null&&(o=Zn(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Sr(t,o),jn(S,t,o),bf;cd(C)||tc(),n=Df(t,n,a)}else cd(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=gi(C.nextSibling),Rn=n,yt=!0,Ia=null,pi=!1,t!==null&&vm(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(Wa(),C=o.fallback,u=n.mode,H=t.child,ne=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?C=ta(ne,C):(C=yr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,bo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Cf(a):(u=C.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Em(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Rf(t,S,a),n.memoizedState=Af,bo(t.child,o)):(Xa(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return Rr(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Uf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function zg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=un.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,ve(un,S),Dn(t,n,o,a),o=yt?uo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,a,n);else if(t.tag===19)Fg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uf(n,!0,a,null,d,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function KS(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ha(n,hn,t.memoizedState.cache),Mr();break;case 27:case 5:et(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pg(t,n,a):(Xa(n),t=oa(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(as(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return zg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(un,un.current),o)break;return null;case 22:return n.lanes=0,wg(t,n,a,n.pendingProps);case 24:Ha(n,hn,t.memoizedState.cache)}return oa(t,n,a)}function Ig(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Nf(t,a)&&(n.flags&128)===0)return mn=!1,KS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,yt&&(n.flags&1048576)!==0&&gm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ar(n.elementType),n.type=t,typeof t=="function")Fu(t)?(o=Dr(t,o),n.tag=1,n=Lg(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=Ag(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=Cg(null,n,t,o,a);break e}}throw n=he(t)||t,Error(r(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Dr(o,n.pendingProps),Lg(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ju(t,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ha(n,hn,o),o!==d.cache&&Wu(n,[hn],a,!0),_o(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Og(t,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),fo(u),n=Og(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=gi(t.firstChild),Rn=n,yt=!0,Ia=null,pi=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Mr(),o===u){n=oa(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=Z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=lc(ce.current).createElement(a),o[cn]=n,o[Cn]=t,Un(o,a,t),dn(o),n.stateNode=o):n.memoizedState=Z0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&yt&&(o=n.stateNode=j0(n.type,n.pendingProps,ce.current),Rn=n,pi=!0,u=Yt,$a(n.type)?(fd=u,Yt=gi(o.firstChild)):Yt=u),Dn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=Yt)&&(o=Ay(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Yt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ba(n)),et(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,sd(u,d)?o=null:S!==null&&sd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(t,n,GS,null,null,a),Bo._currentValue=u),Wl(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Yt)&&(a=Cy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Yt=null,t=!0):t=!1),t||Ba(n)),null;case 13:return Pg(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rr(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return Ag(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,br(n),u=wn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return Cg(t,n,n.type,n.pendingProps,a);case 15:return Rg(t,n,n.type,n.pendingProps,a);case 19:return zg(t,n,a);case 31:return ZS(t,n,a);case 22:return wg(t,n,a,n.pendingProps);case 24:return br(n),o=wn(hn),t===null?(u=Yu(),u===null&&(u=jt,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ku(n),Ha(n,hn,u)):((t.lanes&a)!==0&&(Ju(t,n),xo(n,null,null,a),_o()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,hn,o)):(o=d.cache,Ha(n,hn,o),o!==u.cache&&Wu(n,[hn],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function la(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(f0())t.flags|=8192;else throw Cr=Dl,Zu}else t.flags&=-16777217}function Bg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ev(n))if(f0())t.flags|=8192;else throw Cr=Dl,Zu}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,gs|=n)}function To(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function JS(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(hn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(la(n),d!==null?(Zt(n),Bg(n,d)):(Zt(n),Lf(n,u,null,o,a))):d?d!==t.memoizedState?(la(n),Zt(n),Bg(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Zt(n),Lf(n,u,t,o,a)),null;case 27:if(Qe(n),a=ce.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}t=Ae.current,is(n)?_m(n):(t=j0(u,o,a),n.stateNode=t,la(n))}return Zt(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(d=Ae.current,is(n))_m(n);else{var S=lc(ce.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[cn]=n,d[Cn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Zt(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ce.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||P0(t.nodeValue,a)),t||Ba(n,!0)}else t=lc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=is(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Zt(n),null);case 4:return Ge(),t===null&&td(n.stateNode.containerInfo),Zt(n),null;case 10:return aa(n.type),Zt(n),null;case 19:if(Z(un),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)To(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,To(o,!1),t=d.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hm(a,t),a=a.sibling;return ve(un,un.current&1|2),yt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Re()>Ql&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Zt(n),null}else 2*Re()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Re(),t.sibling=null,a=un.current,ve(un,u?a&1|2:a&1),yt&&na(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ti(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(hn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function QS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(hn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(un),null;case 4:return Ge(),null;case 10:return aa(n.type),null;case 22:case 23:return ti(n),tf(),t!==null&&Z(Tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(hn),null;case 25:return null;default:return null}}function Hg(t,n){switch(Hu(n),n.tag){case 3:aa(hn),Ge();break;case 26:case 27:case 5:Qe(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Z(un);break;case 10:aa(n.type);break;case 22:case 23:ti(n),tf(),t!==null&&Z(Tr);break;case 24:aa(hn)}}function Ao(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(C){It(n,n.return,C)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,u=n;var H=a,ne=C;try{ne()}catch(me){It(u,H,me)}}}o=o.next}while(o!==d)}}catch(me){It(n,n.return,me)}}function Gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Um(n,a)}catch(o){It(t,t.return,o)}}}function Vg(t,n,a){a.props=Dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Hi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function kg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Of(t,n,a){try{var o=t.stateNode;Sy(o,t.type,a,n),o[Cn]=n}catch(u){It(t,t.return,u)}}function Xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ff(t,n,a),t=t.sibling;t!==null;)Ff(t,n,a),t=t.sibling}function Yl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function Wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=t,n[Cn]=a}catch(d){It(t,t.return,d)}}var ca=!1,gn=!1,zf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,En=null;function $S(t,n){if(t=t.containerInfo,ad=mc,t=am(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,C=-1,H=-1,ne=0,me=0,Se=t,oe=null;t:for(;;){for(var ue;Se!==a||u!==0&&Se.nodeType!==3||(C=S+u),Se!==d||o!==0&&Se.nodeType!==3||(H=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)oe=Se,Se=ue;for(;;){if(Se===t)break t;if(oe===a&&++ne===u&&(C=S),oe===d&&++me===o&&(H=S),(ue=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ue}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},mc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=Dr(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){It(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function qg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&Ao(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){It(a,a.return,S)}else{var u=Dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){It(a,a.return,S)}}o&64&&Gg(a),o&512&&Co(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Um(t,n)}catch(S){It(a,a.return,S)}}break;case 27:n===null&&o&4&&Wg(a);case 26:case 5:fa(t,a),n===null&&o&4&&kg(a),o&512&&Co(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&Kg(t,a);break;case 13:fa(t,a),o&4&&Jg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ly.bind(null,a),Ry(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||gn,u=ca;var d=gn;ca=o,(gn=n)&&!d?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,gn=d}break;case 30:break;default:fa(t,a)}}function Yg(t){var n=t.alternate;n!==null&&(t.alternate=null,Yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&eo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Vn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Zg(t,n,a),a=a.sibling}function Zg(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:gn||Hi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Hi(a,n);var o=$t,u=Vn;$a(a.type)&&($t=a.stateNode,Vn=!1),ua(t,n,a),Fo(a.stateNode),$t=o,Vn=u;break;case 5:gn||Hi(a,n);case 6:if(o=$t,u=Vn,$t=null,ua(t,n,a),$t=o,Vn=u,$t!==null)if(Vn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){It(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){It(a,n,d)}break;case 18:$t!==null&&(Vn?(t=$t,G0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):G0($t,a.stateNode));break;case 4:o=$t,u=Vn,$t=a.stateNode.containerInfo,Vn=!0,ua(t,n,a),$t=o,Vn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),gn||ja(4,a,n),ua(t,n,a);break;case 1:gn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Vg(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ua(t,n,a),gn=o;break;default:ua(t,n,a)}}function Kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){It(n,n.return,a)}}}function Jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){It(n,n.return,a)}}function ey(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jg),n;default:throw Error(r(435,t.tag))}}function Zl(t,n){var a=ey(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=cy.bind(null,t,o);o.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if($a(C.type)){$t=C.stateNode,Vn=!1;break e}break;case 5:$t=C.stateNode,Vn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,Vn=!0;break e}C=C.return}if($t===null)throw Error(r(160));Zg(d,S,u),$t=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qg(n,t),n=n.sibling}var Ai=null;function Qg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),o&4&&(ja(3,t,t.return),Ao(3,t),ja(5,t,t.return));break;case 1:kn(n,t),Xn(t),o&512&&(gn||a===null||Hi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(kn(n,t),Xn(t),o&512&&(gn||a===null||Hi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ua]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,a),d[cn]=t,dn(d),o=d;break e;case"link":var S=Q0("link","href",u).get(o+(a.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(C,1);break t}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Q0("meta","content",u).get(o+(a.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(C,1);break t}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,dn(d),o=d}t.stateNode=o}else $0(u,t.type,t.stateNode);else t.stateNode=J0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?$0(u,t.type,t.stateNode):J0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),o&512&&(gn||a===null||Hi(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),o&512&&(gn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(je){It(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(kn(n,t),Xn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){It(t,t.return,je)}}break;case 3:if(fc=null,u=Ai,Ai=cc(n.containerInfo),kn(n,t),Ai=u,Xn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(je){It(t,t.return,je)}zf&&(zf=!1,$g(t));break;case 4:o=Ai,Ai=cc(t.stateNode.containerInfo),kn(n,t),Xn(t),Ai=o;break;case 12:kn(n,t),Xn(t);break;case 31:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=Re()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=ca,me=gn;if(ca=ne||u,gn=me||H,kn(n,t),gn=me,ca=ne,Xn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ca||gn||Ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=H.stateNode;var Se=H.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;C.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(je){It(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){It(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?V0(ue,!0):V0(H.stateNode,!1)}catch(je){It(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Xg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Pf(t);Yl(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Jn(S,""),a.flags&=-33);var C=Pf(t);Yl(t,C,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=Pf(t);Ff(t,ne,H);break;default:throw Error(r(161))}}catch(me){It(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qg(t,n.alternate,n),n=n.sibling}function Ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Ur(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vg(n,n.return,a),Ur(n);break;case 27:Fo(n.stateNode);case 26:case 5:Hi(n,n.return),Ur(n);break;case 22:n.memoizedState===null&&Ur(n);break;case 30:Ur(n);break;default:Ur(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:da(u,d,a),Ao(4,d);break;case 1:if(da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){It(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Dm(H[u],C)}catch(ne){It(o,o.return,ne)}}a&&S&64&&Gg(d),Co(d,d.return);break;case 27:Wg(d);case 26:case 5:da(u,d,a),a&&o===null&&S&4&&kg(d),Co(d,d.return);break;case 12:da(u,d,a);break;case 31:da(u,d,a),a&&S&4&&Kg(u,d);break;case 13:da(u,d,a),a&&S&4&&Jg(u,d);break;case 22:d.memoizedState===null&&da(u,d,a),Co(d,d.return);break;case 30:break;default:da(u,d,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ho(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ho(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e0(t,n,a,o),n=n.sibling}function e0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Ao(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ho(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){It(n,n.return,H)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):Ro(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,hs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(S,n);break;case 24:Ci(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ci(t,n,a,o)}}function hs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,C=a,H=o,ne=S.flags;switch(S.tag){case 0:case 11:case 15:hs(d,S,C,H,u),Ao(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?hs(d,S,C,H,u):Ro(d,S):(me._visibility|=2,hs(d,S,C,H,u)),u&&ne&2048&&If(S.alternate,S);break;case 24:hs(d,S,C,H,u),u&&ne&2048&&Bf(S.alternate,S);break;default:hs(d,S,C,H,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&If(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Bf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var wo=8192;function ps(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)t0(t,n,a),t=t.sibling}function t0(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&wo&&t.memoizedState!==null&&Hy(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var o=Ai;Ai=cc(t.stateNode.containerInfo),ps(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,ps(t,n,a),wo=o):ps(t,n,a));break;default:ps(t,n,a)}}function n0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Do(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,a0(o,t)}n0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)i0(t),t=t.sibling}function i0(t){switch(t.tag){case 0:case 11:case 15:Do(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Do(t);break;case 12:Do(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Do(t);break;default:Do(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,a0(o,t)}n0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function a0(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,d=o.return;if(Yg(o),o===a){En=null;break e}if(u!==null){u.return=d,En=u;break e}En=d}}}var ty={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(hn).controller.signal}},ny=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,gt=null,xt=0,zt=0,ni=null,qa=!1,ms=!1,Hf=!1,ha=0,sn=0,Ya=0,Nr=0,Gf=0,ii=0,gs=0,Uo=null,Wn=null,Vf=!1,Jl=0,r0=0,Ql=1/0,$l=null,Za=null,xn=0,Ka=null,vs=null,pa=0,kf=0,Xf=null,s0=null,No=0,Wf=null;function ai(){return(Dt&2)!==0&&xt!==0?xt&-xt:O.T!==null?Jf():Js()}function o0(){if(ii===0)if((xt&536870912)===0||yt){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===jt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(_s(t,0),Ja(t,xt,ii,!1)),tt(t,a),((Dt&2)===0||t!==jt)&&(t===jt&&((Dt&2)===0&&(Nr|=a),sn===4&&Ja(t,xt,ii,!1)),Gi(t))}function l0(t,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Be(t,n),u=o?ry(t,n):qf(t,n,!0),d=o;do{if(u===0){ms&&!o&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!iy(a)){u=qf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;u=Uo;var H=C.current.memoizedState.isDehydrated;if(H&&(_s(C,S).flags|=256),S=qf(C,S,!1),S!==2){if(Hf&&!H){C.errorRecoveryDisabledLanes|=d,Nr|=d,u=4;break e}d=Wn,Wn=u,d!==null&&(Wn===null?Wn=d:Wn.push.apply(Wn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){_s(t,0),Ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,ii,!qa);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Jl+300-Re(),10<u)){if(Ja(o,n,ii,!qa),ge(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=B0(c0.bind(null,o,a,Wn,$l,Vf,n,ii,Nr,gs,qa,d,"Throttled",-0,0),u);break e}c0(o,a,Wn,$l,Vf,n,ii,Nr,gs,qa,d,null,-0,0)}}break}while(!0);Gi(t)}function c0(t,n,a,o,u,d,S,C,H,ne,me,Se,oe,ue){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},t0(n,d,Se);var je=(d&62914560)===d?Jl-Re():(d&4194048)===d?r0-Re():0;if(je=Gy(Se,je),je!==null){pa=d,t.cancelPendingCommit=je(v0.bind(null,t,n,d,a,o,u,S,C,H,me,Se,null,oe,ue)),Ja(t,d,S,!ne);return}}v0(t,n,d,a,o,u,S,C,H)}function iy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,o){n&=~Gf,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&wt(t,a,n)}function ec(){return(Dt&6)===0?(Lo(0),!1):!0}function jf(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,ia=Er=null,lf(t),ls=null,mo=0,t=gt;for(;t!==null;)Hg(t.alternate,t),t=t.return;gt=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,jf(),jt=t,gt=a=ta(t.current,null),xt=n,zt=0,ni=null,qa=!1,ms=Be(t,n),Hf=!1,gs=ii=Gf=Nr=Ya=sn=0,Wn=Uo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return ha=n,yl(),a}function u0(t,n){lt=null,O.H=Eo,n===os||n===wl?(n=Am(),zt=3):n===Zu?(n=Am(),zt=4):zt=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,gt===null&&(sn=1,kl(t,fi(n,t.current)))}function f0(){var t=ei.current;return t===null?!0:(xt&4194048)===xt?mi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===mi:!1}function d0(){var t=O.H;return O.H=Eo,t===null?Eo:t}function h0(){var t=O.A;return O.A=ty,t}function tc(){sn=4,qa||(xt&4194048)!==xt&&ei.current!==null||(ms=!0),(Ya&134217727)===0&&(Nr&134217727)===0||jt===null||Ja(jt,xt,ii,!1)}function qf(t,n,a){var o=Dt;Dt|=2;var u=d0(),d=h0();(jt!==t||xt!==n)&&($l=null,_s(t,n)),n=!1;var S=sn;e:do try{if(zt!==0&&gt!==null){var C=gt,H=ni;switch(zt){case 8:jf(),S=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ne=zt;if(zt=0,ni=null,xs(t,C,H,ne),a&&ms){S=0;break e}break;default:ne=zt,zt=0,ni=null,xs(t,C,H,ne)}}ay(),S=sn;break}catch(me){u0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ia=Er=null,Dt=o,O.H=u,O.A=d,gt===null&&(jt=null,xt=0,yl()),S}function ay(){for(;gt!==null;)p0(gt)}function ry(t,n){var a=Dt;Dt|=2;var o=d0(),u=h0();jt!==t||xt!==n?($l=null,Ql=Re()+500,_s(t,n)):ms=Be(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var d=ni;t:switch(zt){case 1:zt=0,ni=null,xs(t,n,d,1);break;case 2:case 9:if(bm(d)){zt=0,ni=null,m0(n);break}n=function(){zt!==2&&zt!==9||jt!==t||(zt=7),Gi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:bm(d)?(zt=0,ni=null,m0(n)):(zt=0,ni=null,xs(t,n,d,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var C=gt;if(S?ev(S):C.stateNode.complete){zt=0,ni=null;var H=C.sibling;if(H!==null)gt=H;else{var ne=C.return;ne!==null?(gt=ne,nc(ne)):gt=null}break t}}zt=0,ni=null,xs(t,n,d,5);break;case 6:zt=0,ni=null,xs(t,n,d,6);break;case 8:jf(),sn=6;break e;default:throw Error(r(462))}}sy();break}catch(me){u0(t,me)}while(!0);return ia=Er=null,O.H=o,O.A=u,Dt=a,gt!==null?0:(jt=null,xt=0,yl(),sn)}function sy(){for(;gt!==null&&!ht();)p0(gt)}function p0(t){var n=Ig(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function m0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ng(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Ng(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:lf(n);default:Hg(a,n),n=gt=hm(n,ha),n=Ig(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function xs(t,n,a,o){ia=Er=null,lf(n),ls=null,mo=0;var u=n.return;try{if(YS(t,u,n,a,xt)){sn=1,kl(t,fi(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;sn=1,kl(t,fi(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:ms||(xt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),g0(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){g0(n,qa);return}t=n.return;var a=JS(n.alternate,n,ha);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);sn===0&&(sn=5)}function g0(t,n){do{var a=QS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);sn=6,gt=null}function v0(t,n,a,o,u,d,S,C,H){t.cancelPendingCommit=null;do ic();while(xn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ou,nn(t,a,d,S,C,H),t===jt&&(gt=jt=null,xt=0),vs=n,Ka=t,pa=a,kf=d,Xf=u,s0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uy(ee,function(){return M0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,S=Dt,Dt|=4;try{$S(t,n,a)}finally{Dt=S,P.p=u,O.T=o}}xn=1,_0(),x0(),S0()}}function _0(){if(xn===1){xn=0;var t=Ka,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Dt;Dt|=4;try{Qg(n,t);var d=rd,S=am(t.containerInfo),C=d.focusedElem,H=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&im(C.ownerDocument.documentElement,C)){if(H!==null&&wu(C)){var ne=H.start,me=H.end;if(me===void 0&&(me=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(me,C.value.length);else{var Se=C.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ue=oe.getSelection(),je=C.textContent.length,$e=Math.min(H.start,je),kt=H.end===void 0?$e:Math.min(H.end,je);!ue.extend&&$e>kt&&(S=kt,kt=$e,$e=S);var K=nm(C,$e),W=nm(C,kt);if(K&&W&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==W.node||ue.focusOffset!==W.offset)){var te=Se.createRange();te.setStart(K.node,K.offset),ue.removeAllRanges(),$e>kt?(ue.addRange(te),ue.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),ue.addRange(te))}}}}for(Se=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Se.length;C++){var _e=Se[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}mc=!!ad,rd=ad=null}finally{Dt=u,P.p=o,O.T=a}}t.current=n,xn=2}}function x0(){if(xn===2){xn=0;var t=Ka,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Dt;Dt|=4;try{qg(t,n.alternate,n)}finally{Dt=u,P.p=o,O.T=a}}xn=3}}function S0(){if(xn===4||xn===3){xn=0,Ht();var t=Ka,n=vs,a=pa,o=s0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,vs=Ka=null,y0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),Ks(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var C=o[S];d(C.value,{componentStack:C.stack})}}finally{O.T=n,P.p=u}}(pa&3)!==0&&ic(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Wf?No++:(No=0,Wf=t):No=0,Lo(0)}}function y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ho(n)))}function ic(){return _0(),x0(),S0(),M0()}function M0(){if(xn!==5)return!1;var t=Ka,n=kf;kf=0;var a=Ks(pa),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=Xf,Xf=null;var d=Ka,S=pa;if(xn=0,vs=Ka=null,pa=0,(Dt&6)!==0)throw Error(r(331));var C=Dt;if(Dt|=4,i0(d.current),e0(d,d.current,S,a),Dt=C,Lo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(de,d)}catch{}return!0}finally{P.p=u,O.T=o,y0(t,n)}}function E0(t,n,a){n=fi(a,n),n=Ef(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(tt(t,2),Gi(t))}function It(t,n,a){if(t.tag===3)E0(t,t,a);else for(;n!==null;){if(n.tag===3){E0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=fi(a,t),a=bg(2),o=ka(n,a,2),o!==null&&(Tg(a,o,n,t),tt(o,2),Gi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ny;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=oy.bind(null,t,n,a),n.then(t,t))}function oy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(xt&a)===a&&(sn===4||sn===3&&(xt&62914560)===xt&&300>Re()-Jl?(Dt&2)===0&&_s(t,0):Gf|=a,gs===xt&&(gs=0)),Gi(t)}function b0(t,n){n===0&&(n=Ee()),t=Sr(t,n),t!==null&&(tt(t,n),Gi(t))}function ly(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),b0(t,a)}function cy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),b0(t,a)}function uy(t,n){return q(t,n)}var ac=null,Ss=null,Zf=!1,rc=!1,Kf=!1,Qa=0;function Gi(t){t!==Ss&&t.next===null&&(Ss===null?ac=Ss=t:Ss=Ss.next=t),rc=!0,Zf||(Zf=!0,dy())}function Lo(t,n){if(!Kf&&rc){Kf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,R0(o,d))}else d=xt,d=ge(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Be(o,d)||(a=!0,R0(o,d));o=o.next}while(a);Kf=!1}}function fy(){T0()}function T0(){rc=Zf=!1;var t=0;Qa!==0&&My()&&(t=Qa);for(var n=Re(),a=null,o=ac;o!==null;){var u=o.next,d=A0(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(Ss=a)):(a=o,(t!==0||(d&3)!==0)&&(rc=!0)),o=u}xn!==0&&xn!==5||Lo(t),Qa!==0&&(Qa=0)}function A0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Fe(d),C=1<<S,H=u[S];H===-1?((C&a)===0||(C&o)!==0)&&(u[S]=Le(C,n)):H<=n&&(t.expiredLanes|=C),d&=~C}if(n=jt,a=xt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&tn(o),Ks(a)){case 2:case 8:a=b;break;case 32:a=ee;break;case 268435456:a=be;break;default:a=ee}return o=C0.bind(null,t),a=q(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&tn(o),t.callbackPriority=2,t.callbackNode=null,2}function C0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=xt;return o=ge(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(l0(t,o,n),A0(t,Re()),t.callbackNode!=null&&t.callbackNode===a?C0.bind(null,t):null)}function R0(t,n){if(ic())return null;l0(t,n,!0)}function dy(){by(function(){(Dt&6)!==0?q(D,fy):T0()})}function Jf(){if(Qa===0){var t=rs;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Qa=t}return Qa}function w0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gr(""+t)}function D0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function hy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=w0((u[Cn]||null).action),S=o.submitter;S&&(n=(n=S[Cn]||null)?w0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var C=new vl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var H=S?D0(u,S):new FormData(u);vf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(C.preventDefault(),H=S?D0(u,S):new FormData(u),vf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var $f=Lu[Qf],py=$f.toLowerCase(),my=$f[0].toUpperCase()+$f.slice(1);Ti(py,"on"+my)}Ti(om,"onAnimationEnd"),Ti(lm,"onAnimationIteration"),Ti(cm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(US,"onTransitionRun"),Ti(NS,"onTransitionStart"),Ti(LS,"onTransitionCancel"),Ti(um,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function U0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var C=o[S],H=C.instance,ne=C.currentTarget;if(C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(me){Sl(me)}u.currentTarget=null,d=H}else for(S=0;S<o.length;S++){if(C=o[S],H=C.instance,ne=C.currentTarget,C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(me){Sl(me)}u.currentTarget=null,d=H}}}}function vt(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(N0(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),N0(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[sc]){t[sc]=!0,hl.forEach(function(a){a!=="selectionchange"&&(gy.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,ed("selectionchange",!1,n))}}function N0(t,n,a,o){switch(ov(n)){case 2:var u=Xy;break;case 8:u=Wy;break;default:u=gd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;C!==null;){if(S=Na(C),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=d=S;continue e}C=C.parentNode}}o=o.return}zp(function(){var ne=d,me=_u(a),Se=[];e:{var oe=fm.get(t);if(oe!==void 0){var ue=vl,je=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":ue=cS;break;case"focusin":je="focus",ue=bu;break;case"focusout":je="blur",ue=bu;break;case"beforeblur":case"afterblur":ue=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=dS;break;case om:case lm:case cm:ue=eS;break;case um:ue=pS;break;case"scroll":case"scrollend":ue=Zx;break;case"wheel":ue=gS;break;case"copy":case"cut":case"paste":ue=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Vp;break;case"toggle":case"beforetoggle":ue=_S}var $e=(n&4)!==0,kt=!$e&&(t==="scroll"||t==="scrollend"),K=$e?oe!==null?oe+"Capture":null:oe;$e=[];for(var W=ne,te;W!==null;){var _e=W;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||K===null||(_e=to(W,K),_e!=null&&$e.push(Po(W,_e,te))),kt)break;W=W.return}0<$e.length&&(oe=new ue(oe,je,null,a,me),Se.push({event:oe,listeners:$e}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",oe&&a!==vu&&(je=a.relatedTarget||a.fromElement)&&(Na(je)||je[Qi]))break e;if((ue||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,ue?(je=a.relatedTarget||a.toElement,ue=ne,je=je?Na(je):null,je!==null&&(kt=c(je),$e=je.tag,je!==kt||$e!==5&&$e!==27&&$e!==6)&&(je=null)):(ue=null,je=ne),ue!==je)){if($e=Hp,_e="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&($e=Vp,_e="onPointerLeave",K="onPointerEnter",W="pointer"),kt=ue==null?oe:mr(ue),te=je==null?oe:mr(je),oe=new $e(_e,W+"leave",ue,a,me),oe.target=kt,oe.relatedTarget=te,_e=null,Na(me)===ne&&($e=new $e(K,W+"enter",je,a,me),$e.target=te,$e.relatedTarget=kt,_e=$e),kt=_e,ue&&je)t:{for($e=vy,K=ue,W=je,te=0,_e=K;_e;_e=$e(_e))te++;_e=0;for(var Je=W;Je;Je=$e(Je))_e++;for(;0<te-_e;)K=$e(K),te--;for(;0<_e-te;)W=$e(W),_e--;for(;te--;){if(K===W||W!==null&&K===W.alternate){$e=K;break t}K=$e(K),W=$e(W)}$e=null}else $e=null;ue!==null&&L0(Se,oe,ue,$e,!1),je!==null&&kt!==null&&L0(Se,kt,je,$e,!0)}}e:{if(oe=ne?mr(ne):window,ue=oe.nodeName&&oe.nodeName.toLowerCase(),ue==="select"||ue==="input"&&oe.type==="file")var Ct=Kp;else if(Yp(oe))if(Jp)Ct=RS;else{Ct=AS;var Ye=TS}else ue=oe.nodeName,!ue||ue.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Nt(ne.elementType)&&(Ct=Kp):Ct=CS;if(Ct&&(Ct=Ct(t,ne))){Zp(Se,Ct,a,me);break e}Ye&&Ye(t,oe,ne),t==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&mt(oe,"number",oe.value)}switch(Ye=ne?mr(ne):window,t){case"focusin":(Yp(Ye)||Ye.contentEditable==="true")&&(Jr=Ye,Du=ne,co=null);break;case"focusout":co=Du=Jr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,rm(Se,a,me);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":rm(Se,a,me)}var ut;if(Au)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Kr?jp(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(kp&&a.locale!=="ko"&&(Kr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Kr&&(ut=Ip()):(Fa=me,yu="value"in Fa?Fa.value:Fa.textContent,Kr=!0)),Ye=oc(ne,St),0<Ye.length&&(St=new Gp(St,t,null,a,me),Se.push({event:St,listeners:Ye}),ut?St.data=ut:(ut=qp(a),ut!==null&&(St.data=ut)))),(ut=SS?yS(t,a):MS(t,a))&&(St=oc(ne,"onBeforeInput"),0<St.length&&(Ye=new Gp("onBeforeInput","beforeinput",null,a,me),Se.push({event:Ye,listeners:St}),Ye.data=ut)),hy(Se,t,ne,a,me)}U0(Se,n)})}function Po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(t,a),u!=null&&o.unshift(Po(t,u,d)),u=to(t,n),u!=null&&o.push(Po(t,u,d))),t.tag===3)return o;t=t.return}return[]}function vy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function L0(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var C=a,H=C.alternate,ne=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ne===null||(H=ne,u?(ne=to(a,d),ne!=null&&S.unshift(Po(a,ne,H))):u||(ne=to(a,d),ne!=null&&S.push(Po(a,ne,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var _y=/\r\n?/g,xy=/\u0000|\uFFFD/g;function O0(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(xy,"")}function P0(t,n){return n=O0(n),O0(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":bi(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,ze(t,a,o))}}function id(t,n,a,o,u,d){switch(a){case"style":bi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Cn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,d,S,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var C=d=S=u=null,H=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":ne=me;break;case"value":d=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Vt(t,n,o,me,a,null)}}On(t,d,C,H,ne,S,u,!1);return;case"select":vt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:Vt(t,n,u,C,a,null)}n=d,a=S,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Vt(t,n,S,C,a,null)}Ei(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,H,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Oo.length;o++)vt(Oo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,ne,o,a,null)}return;default:if(Nt(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&id(t,n,me,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Vt(t,n,C,o,a,null))}function Sy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,C=null,H=null,ne=null,me=null;for(ue in a){var Se=a[ue];if(a.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=Se;default:o.hasOwnProperty(ue)||Vt(t,n,ue,null,o,Se)}}for(var oe in o){var ue=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(ue!=null||Se!=null))switch(oe){case"type":d=ue;break;case"name":u=ue;break;case"checked":ne=ue;break;case"defaultChecked":me=ue;break;case"value":S=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==Se&&Vt(t,n,oe,ue,o,Se)}}Ve(t,S,C,H,ne,me,d,u);return;case"select":ue=S=C=oe=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":oe=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==H&&Vt(t,n,u,d,o,H)}n=C,a=S,o=ue,oe!=null?_n(t,!!a,oe,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ue=oe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(t,n,C,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":oe=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Vt(t,n,S,u,o,d)}Kn(t,oe,ue);return;case"option":for(var je in a)oe=a[je],a.hasOwnProperty(je)&&oe!=null&&!o.hasOwnProperty(je)&&(je==="selected"?t.selected=!1:Vt(t,n,je,null,o,oe));for(H in o)oe=o[H],ue=a[H],o.hasOwnProperty(H)&&oe!==ue&&(oe!=null||ue!=null)&&(H==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Vt(t,n,H,oe,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)oe=a[$e],a.hasOwnProperty($e)&&oe!=null&&!o.hasOwnProperty($e)&&Vt(t,n,$e,null,o,oe);for(ne in o)if(oe=o[ne],ue=a[ne],o.hasOwnProperty(ne)&&oe!==ue&&(oe!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Vt(t,n,ne,oe,o,ue)}return;default:if(Nt(n)){for(var kt in a)oe=a[kt],a.hasOwnProperty(kt)&&oe!==void 0&&!o.hasOwnProperty(kt)&&id(t,n,kt,void 0,o,oe);for(me in o)oe=o[me],ue=a[me],!o.hasOwnProperty(me)||oe===ue||oe===void 0&&ue===void 0||id(t,n,me,oe,o,ue);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&Vt(t,n,K,null,o,oe);for(Se in o)oe=o[Se],ue=a[Se],!o.hasOwnProperty(Se)||oe===ue||oe==null&&ue==null||Vt(t,n,Se,oe,o,ue)}function F0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,C=u.duration;if(d&&C&&F0(S)){for(S=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ne=H.startTime;if(ne>C)break;var me=H.transferSize,Se=H.initiatorType;me&&F0(Se)&&(H=H.responseEnd,S+=me*(H<C?1:(C-ne)/(H-ne)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,rd=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function My(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(t){return H0.resolve(null).then(t).catch(Ty)}:B0;function Ty(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function G0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[Ua]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);bs(n)}function V0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ay(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function Cy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function k0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ry(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function X0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function W0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function j0(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);eo(t)}var vi=new Map,q0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=P.d;P.d={f:wy,r:Dy,D:Uy,C:Ny,L:Ly,m:Oy,X:Fy,S:Py,M:zy};function wy(){var t=ma.f(),n=ec();return t||n}function Dy(t){var n=La(t);n!==null&&n.tag===5&&n.type==="form"?ug(n):ma.r(t)}var ys=typeof document>"u"?null:document;function Y0(t,n,a){var o=ys;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),q0.has(u)||(q0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),dn(n),o.head.appendChild(n)))}}function Uy(t){ma.D(t),Y0("dns-prefetch",t,null)}function Ny(t,n){ma.C(t,n),Y0("preconnect",t,n)}function Ly(t,n,a){ma.L(t,n,a);var o=ys;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var d=u;switch(n){case"style":d=Ms(t);break;case"script":d=Es(t)}vi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(d))||n==="script"&&o.querySelector(Io(d))||(n=o.createElement("link"),Un(n,"link",t),dn(n),o.head.appendChild(n)))}}function Oy(t,n){ma.m(t,n);var a=ys;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Es(t)}if(!vi.has(d)&&(t=v({rel:"modulepreload",href:t},n),vi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(d)))return}o=a.createElement("link"),Un(o,"link",t),dn(o),a.head.appendChild(o)}}}function Py(t,n,a){ma.S(t,n,a);var o=ys;if(o&&t){var u=Oa(o).hoistableStyles,d=Ms(t);n=n||"default";var S=u.get(d);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(zo(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(d))&&dd(t,a);var H=S=o.createElement("link");dn(H),Un(H,"link",t),H._p=new Promise(function(ne,me){H.onload=ne,H.onerror=me}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,uc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:C},u.set(d,S)}}}function Fy(t,n){ma.X(t,n);var a=ys;if(a&&t){var o=Oa(a).hoistableScripts,u=Es(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=v({src:t,async:!0},n),(n=vi.get(u))&&hd(t,n),d=a.createElement("script"),dn(d),Un(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function zy(t,n){ma.M(t,n);var a=ys;if(a&&t){var o=Oa(a).hoistableScripts,u=Es(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&hd(t,n),d=a.createElement("script"),dn(d),Un(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Z0(t,n,a,o){var u=(u=ce.current)?cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var d=Oa(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(zo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),d||Iy(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Es(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+Pt(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function K0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),dn(n),t.head.appendChild(n))}function Es(t){return'[src="'+Pt(t)+'"]'}function Io(t){return"script[async]"+t}function J0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Un(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ms(a.href);var d=t.querySelector(zo(u));if(d)return n.state.loading|=4,n.instance=d,dn(d),d;o=K0(a),(u=vi.get(u))&&dd(o,u),d=(t.ownerDocument||t).createElement("link"),dn(d);var S=d;return S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Un(d,"link",o),n.state.loading|=4,uc(d,a.precedence,t),n.instance=d;case"script":return d=Es(a.src),(u=t.querySelector(Io(d)))?(n.instance=u,dn(u),u):(o=a,(u=vi.get(d))&&(o=v({},a),hd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function Q0(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ua]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var C=o.get(S);C?C.push(d):o.set(S,[d])}}return o}function $0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function By(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Hy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(o.href),d=n.querySelector(zo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,dn(d);return}d=n.ownerDocument||n,o=K0(o),(u=vi.get(u))&&dd(o,u),d=d.createElement("link"),dn(d);var S=d;S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Un(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function Gy(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*yy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(Vy,t),hc=null,dc.call(t))}function Vy(t,n){if(!(n.state.loading&4)){var a=hc.get(t);if(a)var o=a.get(null);else{a=new Map,hc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function ky(t,n,a,o,u,d,S,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function tv(t,n,a,o,u,d,S,C,H,ne,me,Se){return t=new ky(t,n,a,S,H,ne,me,Se,C),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),t.current=d,d.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ku(d),t}function nv(t){return t?(t=es,t):es}function iv(t,n,a,o,u,d){u=nv(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ka(t,o,n),a!==null&&(jn(a,t,n),vo(a,t,n))}function av(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){av(t,n),(t=t.alternate)&&av(t,n)}function rv(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&jn(n,t,67108864),md(t,67108864)}}function sv(t){if(t.tag===13||t.tag===31){var n=ai();n=pr(n);var a=Sr(t,n);a!==null&&jn(a,t,n),md(t,n)}}var mc=!0;function Xy(t,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=2,gd(t,n,a,o)}finally{P.p=d,O.T=u}}function Wy(t,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=8,gd(t,n,a,o)}finally{P.p=d,O.T=u}}function gd(t,n,a,o){if(mc){var u=vd(o);if(u===null)nd(t,n,o,gc,a),lv(t,o);else if(qy(u,t,n,a,o))o.stopPropagation();else if(lv(t,o),n&4&&-1<jy.indexOf(t)){for(;u!==null;){var d=La(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ce(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var H=1<<31-Fe(S);C.entanglements[1]|=H,S&=~H}Gi(d),(Dt&6)===0&&(Ql=Re()+500,Lo(0))}}break;case 31:case 13:C=Sr(d,2),C!==null&&jn(C,d,2),ec(),md(d,2)}if(d=vd(o),d===null&&nd(t,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function vd(t){return t=_u(t),_d(t)}var gc=null;function _d(t){if(gc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function ov(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case D:return 2;case b:return 8;case ee:case xe:return 32;case be:return 268435456;default:return 32}default:return 32}}var xd=!1,er=null,tr=null,nr=null,Ho=new Map,Go=new Map,ir=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lv(t,n){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&rv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qy(t,n,a,o,u){switch(n){case"focusin":return er=Vo(er,t,n,a,o,u),!0;case"dragenter":return tr=Vo(tr,t,n,a,o,u),!0;case"mouseover":return nr=Vo(nr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Ho.set(d,Vo(Ho.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Go.set(d,Vo(Go.get(d)||null,t,n,a,o,u)),!0}return!1}function cv(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){sv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){sv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=vd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=La(a),n!==null&&rv(n),t.blockedOn=a,!1;n.shift()}return!0}function uv(t,n,a){vc(t)&&a.delete(n)}function Yy(){xd=!1,er!==null&&vc(er)&&(er=null),tr!==null&&vc(tr)&&(tr=null),nr!==null&&vc(nr)&&(nr=null),Ho.forEach(uv),Go.forEach(uv)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Yy)))}var xc=null;function fv(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_d(o||a)===null)continue;break}var d=La(a);d!==null&&(t.splice(n,3),n-=3,vf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function bs(t){function n(H){return _c(H,t)}er!==null&&_c(er,t),tr!==null&&_c(tr,t),nr!==null&&_c(nr,t),Ho.forEach(n),Go.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&ir.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[Cn]||null;if(typeof d=="function")S||fv(a);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Cn]||null)C=S.formAction;else if(_d(u)!==null)continue}else C=S.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),fv(a)}}}function dv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Sc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();iv(a,o,t,n,null,null)},Sc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;iv(t.current,2,null,t,null,null),ec(),n[Qi]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Js();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,t),a===0&&cv(t)}};var hv=e.version;if(hv!=="19.2.3")throw Error(r(527,hv,"19.2.3"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{de=yc.inject(Zy),pe=yc}catch{}}return Xo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Sg,d=yg,S=Mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=tv(t,1,!1,null,null,a,o,null,u,d,S,dv),t[Qi]=n.current,td(t),new Sd(n)},Xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Sg,S=yg,C=Mg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=tv(t,1,!0,n,a??null,o,u,H,d,S,C,dv),n.context=nv(null),a=n.current,o=ai(),o=pr(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,tt(n,a),Gi(n),t[Qi]=n.current,td(t),new Sc(n)},Xo.version="19.2.3",Xo}var Ev;function rM(){if(Ev)return Md.exports;Ev=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=aM(),Md.exports}var sM=rM(),j=cp();var bv="popstate";function Tv(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function oM(s={}){function e(r,l){let c=l.state?.masked,{pathname:f,search:p,hash:m}=c||r.location;return dh("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:nl(l)}return cM(e,i,null,s)}function an(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Yi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lM(){return Math.random().toString(36).substring(2,10)}function Av(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function dh(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:i,key:e&&e.key||r||lM(),unstable_mask:l}}function nl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ws(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function cM(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function v(){p="POP";let x=_(),y=x==null?null:x-h;h=x,m&&m({action:p,location:R.location,delta:y})}function g(x,y){p="PUSH";let w=Tv(x)?x:dh(R.location,x,y);h=_()+1;let N=Av(w,h),U=R.createHref(w.unstable_mask||w);try{f.pushState(N,"",U)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(U)}c&&m&&m({action:p,location:R.location,delta:1})}function M(x,y){p="REPLACE";let w=Tv(x)?x:dh(R.location,x,y);h=_();let N=Av(w,h),U=R.createHref(w.unstable_mask||w);f.replaceState(N,"",U),c&&m&&m({action:p,location:R.location,delta:0})}function E(x){return uM(x)}let R={get action(){return p},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(bv,v),m=x,()=>{l.removeEventListener(bv,v),m=null}},createHref(x){return e(l,x)},createURL:E,encodeLocation(x){let y=E(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:M,go(x){return f.go(x)}};return R}function uM(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),an(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:nl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function N_(s,e,i="/"){return fM(s,e,i,!1)}function fM(s,e,i,r){let l=typeof e=="string"?Ws(e):e,c=Aa(l.pathname||"/",i);if(c==null)return null;let f=L_(s);dM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=EM(c);p=yM(f[m],h,r)}return p}function L_(s,e=[],i=[],r="",l=!1){let c=(f,p,m=l,h)=>{let _={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;an(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let v=Oi([r,_.relativePath]),g=i.concat(_);f.children&&f.children.length>0&&(an(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),L_(f.children,e,g,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:xM(v,f.index),routesMeta:g})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of O_(f.path))c(f,p,!0,m)}),e}function O_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=O_(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function dM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:SM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var hM=/^:[\w-]+$/,pM=3,mM=2,gM=1,vM=10,_M=-2,Cv=s=>s==="*";function xM(s,e){let i=s.split("/"),r=i.length;return i.some(Cv)&&(r+=_M),e&&(r+=mM),i.filter(l=>!Cv(l)).reduce((l,c)=>l+(hM.test(c)?pM:c===""?gM:vM),r)}function SM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function yM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",v=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),g=m.route;if(!v&&h&&i&&!r[r.length-1].route.index&&(v=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Oi([c,v.pathname]),pathnameBase:CM(Oi([c,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(c=Oi([c,v.pathnameBase]))}return f}function eu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=MM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:_,isOptional:v},g)=>{if(_==="*"){let E=p[g]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=p[g];return v&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function MM(s,e=!1,i=!0){Yi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,_)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let v=_.charAt(h+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function EM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Aa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var bM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function TM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ws(s):s,c;return i?(i=F_(i),i.startsWith("/")?c=Rv(i.substring(1),"/"):c=Rv(i,e)):c=e,{pathname:c,search:RM(r),hash:wM(l)}}function Rv(s,e){let i=tu(e).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Cd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function P_(s){let e=AM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function up(s,e,i,r=!1){let l;typeof s=="string"?l=Ws(s):(l={...s},an(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}p=v>=0?e[v]:"/"}let m=TM(l,p),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var F_=s=>s.replace(/\/\/+/g,"/"),Oi=s=>F_(s.join("/")),tu=s=>s.replace(/\/+$/,""),CM=s=>tu(s).replace(/^\/*/,"/"),RM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,wM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,DM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function UM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function NM(s){let e=s.map(i=>i.route.path).filter(Boolean);return Oi(e)||"/"}var z_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function I_(s,e){let i=s;if(typeof i!="string"||!bM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(z_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Aa(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Yi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var B_=["POST","PUT","PATCH","DELETE"];new Set(B_);var LM=["GET",...B_];new Set(LM);var js=j.createContext(null);js.displayName="DataRouter";var cu=j.createContext(null);cu.displayName="DataRouterState";var H_=j.createContext(!1);function OM(){return j.useContext(H_)}var G_=j.createContext({isTransitioning:!1});G_.displayName="ViewTransition";var PM=j.createContext(new Map);PM.displayName="Fetchers";var FM=j.createContext(null);FM.displayName="Await";var Mi=j.createContext(null);Mi.displayName="Navigation";var rl=j.createContext(null);rl.displayName="Location";var Ra=j.createContext({outlet:null,matches:[],isDataRoute:!1});Ra.displayName="Route";var fp=j.createContext(null);fp.displayName="RouteError";var V_="REACT_ROUTER_ERROR",zM="REDIRECT",IM="ROUTE_ERROR_RESPONSE";function BM(s){if(s.startsWith(`${V_}:${zM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function HM(s){if(s.startsWith(`${V_}:${IM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new DM(e.status,e.statusText,e.data)}catch{}}function GM(s,{relative:e}={}){an(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=j.useContext(Mi),{hash:l,pathname:c,search:f}=ll(s,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Oi([i,c])),r.createHref({pathname:p,search:f,hash:l})}function sl(){return j.useContext(rl)!=null}function Ji(){return an(sl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(rl).location}var k_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X_(s){j.useContext(Mi).static||j.useLayoutEffect(s)}function ol(){let{isDataRoute:s}=j.useContext(Ra);return s?e1():VM()}function VM(){an(sl(),"useNavigate() may be used only in the context of a <Router> component.");let s=j.useContext(js),{basename:e,navigator:i}=j.useContext(Mi),{matches:r}=j.useContext(Ra),{pathname:l}=Ji(),c=JSON.stringify(P_(r)),f=j.useRef(!1);return X_(()=>{f.current=!0}),j.useCallback((m,h={})=>{if(Yi(f.current,k_),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=up(m,JSON.parse(c),l,h.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Oi([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,s])}j.createContext(null);function ll(s,{relative:e}={}){let{matches:i}=j.useContext(Ra),{pathname:r}=Ji(),l=JSON.stringify(P_(i));return j.useMemo(()=>up(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function kM(s,e){return W_(s,e)}function W_(s,e,i){an(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(Mi),{matches:l}=j.useContext(Ra),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let x=h&&h.path||"";q_(p,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let _=Ji(),v;if(e){let x=typeof e=="string"?Ws(e):e;an(m==="/"||x.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=_;let g=v.pathname||"/",M=g;if(m!=="/"){let x=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=N_(s,{pathname:M});Yi(h||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Yi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=YM(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Oi([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:Oi([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,i);return e&&R?j.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},R):R}function XM(){let s=$M(),e=UM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),i?j.createElement("pre",{style:l},i):null,f)}var WM=j.createElement(XM,null),j_=class extends j.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=HM(s.digest);i&&(s=i)}let e=s!==void 0?j.createElement(Ra.Provider,{value:this.props.routeContext},j.createElement(fp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?j.createElement(jM,{error:s},e):e}};j_.contextType=H_;var Rd=new WeakMap;function jM({children:s,error:e}){let{basename:i}=j.useContext(Mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=BM(e.digest);if(r){let l=Rd.get(e);if(l)throw l;let c=I_(r.location,i);if(z_&&!Rd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Rd.set(e,f),f}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function qM({routeContext:s,match:e,children:i}){let r=j.useContext(js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Ra.Provider,{value:s},i)}function YM(s,e=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r?.errors;if(c!=null){let _=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);an(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,p=-1;if(i&&r){f=r.renderFallback;for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=_),v.route.id){let{loaderData:g,errors:M}=r,E=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=r&&m?(_,v)=>{m(_,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:NM(r.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,g)=>{let M,E=!1,R=null,x=null;r&&(M=c&&v.route.id?c[v.route.id]:void 0,R=v.route.errorElement||WM,f&&(p<0&&g===0?(q_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):p===g&&(E=!0,x=v.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,g+1)),w=()=>{let N;return M?N=R:E?N=x:v.route.Component?N=j.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=_,j.createElement(qM,{match:v,routeContext:{outlet:_,matches:y,isDataRoute:r!=null},children:N})};return r&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?j.createElement(j_,{location:r.location,revalidation:r.revalidation,component:R,error:M,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):w()},null)}function dp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZM(s){let e=j.useContext(js);return an(e,dp(s)),e}function KM(s){let e=j.useContext(cu);return an(e,dp(s)),e}function JM(s){let e=j.useContext(Ra);return an(e,dp(s)),e}function hp(s){let e=JM(s),i=e.matches[e.matches.length-1];return an(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function QM(){return hp("useRouteId")}function $M(){let s=j.useContext(fp),e=KM("useRouteError"),i=hp("useRouteError");return s!==void 0?s:e.errors?.[i]}function e1(){let{router:s}=ZM("useNavigate"),e=hp("useNavigate"),i=j.useRef(!1);return X_(()=>{i.current=!0}),j.useCallback(async(l,c={})=>{Yi(i.current,k_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var wv={};function q_(s,e,i){!e&&!wv[s]&&(wv[s]=!0,Yi(!1,i))}j.memo(t1);function t1({routes:s,future:e,state:i,isStatic:r,onError:l}){return W_(s,void 0,{state:i,isStatic:r,onError:l})}function $o(s){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function n1({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){an(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Ws(i));let{pathname:h="/",search:_="",hash:v="",state:g=null,key:M="default",unstable_mask:E}=i,R=j.useMemo(()=>{let x=Aa(h,p);return x==null?null:{location:{pathname:x,search:_,hash:v,state:g,key:M,unstable_mask:E},navigationType:r}},[p,h,_,v,g,M,r,E]);return Yi(R!=null,`<Router basename="${p}"> is not able to match the URL "${h}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:j.createElement(Mi.Provider,{value:m},j.createElement(rl.Provider,{children:e,value:R}))}function i1({children:s,location:e}){return kM(hh(s),e)}function hh(s,e=[]){let i=[];return j.Children.forEach(s,(r,l)=>{if(!j.isValidElement(r))return;let c=[...e,l];if(r.type===j.Fragment){i.push.apply(i,hh(r.props.children,c));return}an(r.type===$o,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=hh(r.props.children,c)),i.push(f)}),i}var jc="get",qc="application/x-www-form-urlencoded";function uu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function a1(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function r1(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function s1(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function o1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function l1(s,e){return s.button===0&&(!e||e==="_self")&&!o1(s)}var Mc=null;function c1(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var u1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wd(s){return s!=null&&!u1.has(s)?(Yi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):s}function f1(s,e){let i,r,l,c,f;if(r1(s)){let p=s.getAttribute("action");r=p?Aa(p,e):null,i=s.getAttribute("method")||jc,l=wd(s.getAttribute("enctype"))||qc,c=new FormData(s)}else if(a1(s)||s1(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Aa(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||jc,l=wd(s.getAttribute("formenctype"))||wd(p.getAttribute("enctype"))||qc,c=new FormData(p,s),!c1()){let{name:h,type:_,value:v}=s;if(_==="image"){let g=h?`${h}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else h&&c.append(h,v)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=jc,r=null,l=qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Y_(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Aa(l.pathname,e)==="/"?l.pathname=`${tu(e)}/_root.${r}`:l.pathname=`${tu(l.pathname)}.${r}`,l}async function d1(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function p1(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await d1(c,i);return f.links?f.links():[]}return[]}));return _1(r.flat(1).filter(h1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Dv(s,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function m1(s,e,{includeHydrateFallback:i}={}){return g1(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function g1(s){return[...new Set(s)]}function v1(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function _1(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(v1(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function mp(){let s=j.useContext(js);return pp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function x1(){let s=j.useContext(cu);return pp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var gp=j.createContext(void 0);gp.displayName="FrameworkContext";function vp(){let s=j.useContext(gp);return pp(s,"You must render this element inside a <HydratedRouter> element"),s}function S1(s,e){let i=j.useContext(gp),[r,l]=j.useState(!1),[c,f]=j.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:v}=e,g=j.useRef(null);j.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let R=y=>{y.forEach(w=>{f(w.isIntersecting)})},x=new IntersectionObserver(R,{threshold:.5});return g.current&&x.observe(g.current),()=>{x.disconnect()}}},[s]),j.useEffect(()=>{if(r){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Wo(p,M),onBlur:Wo(m,E),onMouseEnter:Wo(h,M),onMouseLeave:Wo(_,E),onTouchStart:Wo(v,M)}]:[!1,g,{}]}function Wo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function y1({page:s,...e}){let i=OM(),{router:r}=mp(),l=j.useMemo(()=>N_(r.routes,s,r.basename),[r.routes,s,r.basename]);return l?i?j.createElement(E1,{page:s,matches:l,...e}):j.createElement(b1,{page:s,matches:l,...e}):null}function M1(s){let{manifest:e,routeModules:i}=vp(),[r,l]=j.useState([]);return j.useEffect(()=>{let c=!1;return p1(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function E1({page:s,matches:e,...i}){let r=Ji(),{future:l}=vp(),{basename:c}=mp(),f=j.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let p=Y_(s,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let _ of e)typeof _.route.shouldRevalidate=="function"?m=!0:h.push(_.route.id);return m&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[c,l.unstable_trailingSlashAwareDataRequests,s,r,e]);return j.createElement(j.Fragment,null,f.map(p=>j.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function b1({page:s,matches:e,...i}){let r=Ji(),{future:l,manifest:c,routeModules:f}=vp(),{basename:p}=mp(),{loaderData:m,matches:h}=x1(),_=j.useMemo(()=>Dv(s,e,h,c,r,"data"),[s,e,h,c,r]),v=j.useMemo(()=>Dv(s,e,h,c,r,"assets"),[s,e,h,c,r]),g=j.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let R=new Set,x=!1;if(e.forEach(w=>{let N=c.routes[w.route.id];!N||!N.hasLoader||(!_.some(U=>U.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||N.hasClientLoader?x=!0:R.add(w.route.id))}),R.size===0)return[];let y=Y_(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return x&&R.size>0&&y.searchParams.set("_routes",e.filter(w=>R.has(w.route.id)).map(w=>w.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,c,_,e,s,f]),M=j.useMemo(()=>m1(v,c),[v,c]),E=M1(v);return j.createElement(j.Fragment,null,g.map(R=>j.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),M.map(R=>j.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),E.map(({key:R,link:x})=>j.createElement("link",{key:R,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function T1(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A1&&(window.__reactRouterVersion="7.14.2")}catch{}function C1({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=j.useRef();l.current==null&&(l.current=oM({window:r,v5Compat:!0}));let c=l.current,[f,p]=j.useState({action:c.action,location:c.location}),m=j.useCallback(h=>{i===!1?p(h):j.startTransition(()=>p(h))},[i]);return j.useLayoutEffect(()=>c.listen(m),[c,m]),j.createElement(n1,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K_=j.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,unstable_mask:p,state:m,target:h,to:_,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:M,...E},R){let{basename:x,navigator:y,unstable_useTransitions:w}=j.useContext(Mi),N=typeof _=="string"&&Z_.test(_),U=I_(_,x);_=U.to;let V=GM(_,{relative:l}),F=Ji(),I=null;if(p){let k=up(p,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);x!=="/"&&(k.pathname=k.pathname==="/"?x:Oi([x,k.pathname])),I=y.createHref(k)}let[T,z,J]=S1(r,E),G=U1(_,{replace:f,unstable_mask:p,state:m,target:h,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:w});function $(k){e&&e(k),k.defaultPrevented||G(k)}let re=!(U.isExternal||c),he=j.createElement("a",{...E,...J,href:(re?I:void 0)||U.absoluteURL||V,onClick:re?$:e,ref:T1(R,z),target:h,"data-discover":!N&&i==="render"?"true":void 0});return T&&!N?j.createElement(j.Fragment,null,he,j.createElement(y1,{page:V})):he});K_.displayName="Link";var R1=j.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},_){let v=ll(f,{relative:h.relative}),g=Ji(),M=j.useContext(cu),{navigator:E,basename:R}=j.useContext(Mi),x=M!=null&&F1(v)&&p===!0,y=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,w=g.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),N=N?N.toLowerCase():null,y=y.toLowerCase()),N&&R&&(N=Aa(N,R)||N);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let V=w===y||!l&&w.startsWith(y)&&w.charAt(U)==="/",F=N!=null&&(N===y||!l&&N.startsWith(y)&&N.charAt(y.length)==="/"),I={isActive:V,isPending:F,isTransitioning:x},T=V?e:void 0,z;typeof r=="function"?z=r(I):z=[r,V?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let J=typeof c=="function"?c(I):c;return j.createElement(K_,{...h,"aria-current":T,className:z,ref:_,style:J,to:f,viewTransition:p},typeof m=="function"?m(I):m)});R1.displayName="NavLink";var w1=j.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=jc,action:p,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...M},E)=>{let{unstable_useTransitions:R}=j.useContext(Mi),x=O1(),y=P1(p,{relative:h}),w=f.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&Z_.test(p),U=V=>{if(m&&m(V),V.defaultPrevented)return;V.preventDefault();let F=V.nativeEvent.submitter,I=F?.getAttribute("formmethod")||f,T=()=>x(F||V.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g});R&&i!==!1?j.startTransition(()=>T()):T()};return j.createElement("form",{ref:E,method:w,action:y,onSubmit:r?m:U,...M,"data-discover":!N&&s==="render"?"true":void 0})});w1.displayName="Form";function D1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J_(s){let e=j.useContext(js);return an(e,D1(s)),e}function U1(s,{target:e,replace:i,unstable_mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:h}={}){let _=ol(),v=Ji(),g=ll(s,{relative:f});return j.useCallback(M=>{if(l1(M,e)){M.preventDefault();let E=i!==void 0?i:nl(v)===nl(g),R=()=>_(s,{replace:E,unstable_mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m});h?j.startTransition(()=>R()):R()}},[v,_,g,i,r,l,e,s,c,f,p,m,h])}var N1=0,L1=()=>`__${String(++N1)}__`;function O1(){let{router:s}=J_("useSubmit"),{basename:e}=j.useContext(Mi),i=QM(),r=s.fetch,l=s.navigate;return j.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:_,body:v}=f1(c,e);if(f.navigate===!1){let g=f.fetcherKey||L1();await r(g,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function P1(s,{relative:e}={}){let{basename:i}=j.useContext(Mi),r=j.useContext(Ra);an(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ll(s||".",{relative:e})},f=Ji();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let _=p.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Oi([i,c.pathname])),nl(c)}function F1(s,{relative:e}={}){let i=j.useContext(G_);an(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=J_("useViewTransitionState"),l=ll(s,{relative:e});if(!i.isTransitioning)return!1;let c=Aa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Aa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return eu(l.pathname,f)!=null||eu(l.pathname,c)!=null}const z1={en:{"app.title":"ECHO // CLONE","app.tagline":"Voice Cloning & Text to Speech","hero.title1":"YOUR VOICE","hero.title2":"SYNTHESIZED","nav.back":"BACK","nav.cancel":"CANCEL","nav.cloneStudio":"CLONE STUDIO","nav.settings":"SETTINGS","nav.library":"LIBRARY","dashboard.clonesAvailable":"CLONES AVAILABLE","dashboard.createNew":"CREATE NEW CLONE","dashboard.noClones":"No voice clones yet. Create your first!","card.active":"ACTIVE","card.training":"TRAINING","card.generate":"GENERATE","card.edit":"EDIT","card.export":"EXPORT","card.delete":"DELETE","create.title":"Create Voice Clone","create.uploadAudio":"UPLOAD AUDIO FILE","create.uploadDesc":"MP3, WAV, M4A (Min. 10s)","create.recordLive":"RECORD LIVE","create.recordDesc":"Read the script to capture your voice","create.dropHint":"Drop audio file here or","create.browseFiles":"BROWSE FILES","create.recording":"RECORDING...","create.stopRecord":"STOP RECORDING","create.useRecording":"USE THIS RECORDING","create.startRecord":"START RECORDING","create.audioCaptured":"AUDIO CAPTURED","create.namePlaceholder":"Name your voice clone...","create.createBtn":"CREATE CLONE","create.startOver":"START OVER","create.processing1":"ANALYZING AUDIO SPECTRUM...","create.processing2":"EXTRACTING VOICE FEATURES...","create.processing3":"BUILDING VOICE MODEL...","create.sampleText":"The quick brown fox jumps over the lazy dog. Voice cloning technology captures the unique characteristics of your speech patterns, tone, and timbre. Read this passage clearly and at a natural pace to create the most accurate voice model possible.","create.micError":"Microphone access denied. Please allow microphone access and try again.","create.fileError":"Please upload an audio file (MP3, WAV, M4A)","create.nameError":"Please enter a name for your voice clone","create.apiKeyError":"Please configure your Fish Audio API key in Settings first","tts.title":"TEXT TO SPEECH","tts.paste":"PASTE","tts.placeholder":"Type or paste your script here...","tts.charCount":"chars","tts.voiceSettings":"VOICE SETTINGS","tts.hideSettings":"HIDE SETTINGS","tts.showSettings":"SHOW SETTINGS","tts.speed":"SPEED","tts.stability":"STABILITY","tts.style":"STYLE","tts.generate":"GENERATE SPEECH","tts.generating":"GENERATING...","tts.apiKeyWarning":"Add your Fish Audio API key in Settings to generate speech","player.export":"EXPORT","player.useInSuno":"USE IN SUNO","player.generated":"Generated Speech","settings.title":"Settings","settings.apiKey":"FISH AUDIO API KEY","settings.apiKeyDesc":"Your API key is stored locally in your browser. Get a free key at","settings.apiKeySaved":"API KEY SAVED","settings.dataManagement":"DATA MANAGEMENT","settings.deleteAll":"Delete All Voice Clones","settings.deleteDesc":"This will remove all cloned voices from local storage","settings.deleteConfirm":"Are you sure?","settings.deleteAllBtn":"DELETE ALL","settings.language":"LANGUAGE","settings.theme":"THEME","settings.dark":"Dark","settings.light":"Light","settings.system":"System","settings.version":"ECHO // CLONE v1.0","settings.poweredBy":"Powered by Fish Audio API","common.close":"CLOSE","common.save":"SAVE"},ru:{"app.title":"ECHO // CLONE","app.tagline":"Клонирование голоса и озвучка","hero.title1":"ТВОЙ ГОЛОС","hero.title2":"СИНТЕЗИРОВАН","nav.back":"НАЗАД","nav.cancel":"ОТМЕНА","nav.cloneStudio":"СТУДИЯ КЛОНОВ","nav.settings":"НАСТРОЙКИ","nav.library":"БИБЛИОТЕКА","dashboard.clonesAvailable":"ДОСТУПНО КЛОНОВ","dashboard.createNew":"СОЗДАТЬ НОВЫЙ КЛОН","dashboard.noClones":"Пока нет клонов голоса. Создай первый!","card.active":"АКТИВЕН","card.training":"ОБУЧЕНИЕ","card.generate":"СИНТЕЗ","card.edit":"ИЗМ","card.export":"ЭКСПОРТ","card.delete":"УДАЛИТЬ","create.title":"Создание клона голоса","create.uploadAudio":"ЗАГРУЗИТЬ АУДИОФАЙЛ","create.uploadDesc":"MP3, WAV, M4A (мин. 10с)","create.recordLive":"ЗАПИСАТЬ ГОЛОС","create.recordDesc":"Прочитай текст для записи голоса","create.dropHint":"Перетащи аудиофайл или","create.browseFiles":"ВЫБРАТЬ ФАЙЛ","create.recording":"ИДЁТ ЗАПИСЬ...","create.stopRecord":"ОСТАНОВИТЬ ЗАПИСЬ","create.useRecording":"ИСПОЛЬЗОВАТЬ ЗАПИСЬ","create.startRecord":"НАЧАТЬ ЗАПИСЬ","create.audioCaptured":"АУДИО ЗАПИСАНО","create.namePlaceholder":"Назови клон голоса...","create.createBtn":"СОЗДАТЬ КЛОН","create.startOver":"НАЧАТЬ ЗАНОВО","create.processing1":"АНАЛИЗ АУДИО СПЕКТРА...","create.processing2":"ИЗВЛЕЧЕНИЕ ПРИЗНАКОВ ГОЛОСА...","create.processing3":"СОЗДАНИЕ МОДЕЛИ ГОЛОСА...","create.sampleText":"Быстрая коричневая лисица прыгает через ленивого пса. Технология клонирования голоса улавливает уникальные характеристики ваших речевых паттернов, тембра и интонаций. Прочитайте этот отрывок чётко и в естественном темпе, чтобы создать максимально точную модель голоса.","create.micError":"Доступ к микрофону запрещён. Разрешите доступ и попробуйте снова.","create.fileError":"Загрузите аудиофайл (MP3, WAV, M4A)","create.nameError":"Введите название для клона голоса","create.apiKeyError":"Сначала добавьте API-ключ Fish Audio в Настройках","tts.title":"ТЕКСТ В РЕЧЬ","tts.paste":"ВСТАВИТЬ","tts.placeholder":"Введи или вставь текст...","tts.charCount":"симв","tts.voiceSettings":"НАСТРОЙКИ ГОЛОСА","tts.hideSettings":"СКРЫТЬ НАСТРОЙКИ","tts.showSettings":"ПОКАЗАТЬ НАСТРОЙКИ","tts.speed":"СКОРОСТЬ","tts.stability":"СТАБИЛЬНОСТЬ","tts.style":"СТИЛЬ","tts.generate":"СИНТЕЗИРОВАТЬ РЕЧЬ","tts.generating":"СИНТЕЗ...","tts.apiKeyWarning":"Добавьте API-ключ Fish Audio в Настройках для генерации речи","player.export":"ЭКСПОРТ","player.useInSuno":"ИСП. В SUNO","player.generated":"Сгенерированная речь","settings.title":"Настройки","settings.apiKey":"API-КЛЮЧ FISH AUDIO","settings.apiKeyDesc":"Ваш ключ хранится локально в браузере. Получите бесплатный ключ на","settings.apiKeySaved":"КЛЮЧ СОХРАНЁН","settings.dataManagement":"УПРАВЛЕНИЕ ДАННЫМИ","settings.deleteAll":"Удалить все клоны голоса","settings.deleteDesc":"Это удалит все клонированные голоса из локального хранилища","settings.deleteConfirm":"Вы уверены?","settings.deleteAllBtn":"УДАЛИТЬ ВСЕ","settings.language":"ЯЗЫК","settings.theme":"ТЕМА","settings.dark":"Тёмная","settings.light":"Светлая","settings.system":"Системная","settings.version":"ECHO // CLONE v1.0","settings.poweredBy":"На базе Fish Audio API","common.close":"ЗАКРЫТЬ","common.save":"СОХРАНИТЬ"}},Q_=j.createContext({lang:"en",t:s=>s,setLang:()=>{}});function I1({children:s}){const[e,i]=j.useState(()=>localStorage.getItem("echo_lang")||(navigator.language.startsWith("ru")?"ru":"en")),r=j.useCallback(c=>{i(c),localStorage.setItem("echo_lang",c)},[]),l=j.useCallback(c=>z1[e][c]||c,[e]);return B.jsx(Q_.Provider,{"code-path":"src/hooks/useI18n.tsx:227:5",value:{lang:e,t:l,setLang:r},children:s})}function Wr(){return j.useContext(Q_)}const $_=j.createContext({theme:"dark",toggleTheme:()=>{},setTheme:()=>{},isDark:!0});function B1({children:s}){const[e,i]=j.useState(()=>localStorage.getItem("echo_theme")||"dark"),r=e==="dark";j.useEffect(()=>{const f=document.documentElement;e==="light"?f.classList.add("light-theme"):f.classList.remove("light-theme")},[e]);const l=j.useCallback(f=>{i(f),localStorage.setItem("echo_theme",f)},[]),c=j.useCallback(()=>{l(e==="dark"?"light":"dark")},[e,l]);return B.jsx($_.Provider,{"code-path":"src/hooks/useTheme.tsx:47:5",value:{theme:e,toggleTheme:c,setTheme:l,isDark:r},children:s})}function ex(){return j.useContext($_)}const H1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Uv=s=>{const e=G1(s);return e.charAt(0).toUpperCase()+e.slice(1)},tx=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),V1=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var k1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const X1=j.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...p},m)=>j.createElement("svg",{ref:m,...k1,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:tx("lucide",l),...!c&&!V1(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,_])=>j.createElement(h,_)),...Array.isArray(c)?c:[c]]));const en=(s,e)=>{const i=j.forwardRef(({className:r,...l},c)=>j.createElement(X1,{ref:c,iconNode:e,className:tx(`lucide-${H1(Uv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Uv(s),i};const W1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_p=en("arrow-left",W1);const j1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nv=en("check",j1);const q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Y1=en("circle-alert",q1);const Z1=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],K1=en("clipboard-paste",Z1);const J1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],nx=en("download",J1);const Q1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$1=en("external-link",Q1);const eE=[["path",{d:"M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",key:"1vfytu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",key:"1etmh7"}]],tE=en("file-headphone",eE);const nE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],iE=en("globe",nE);const aE=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],rE=en("key",aE);const sE=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],oE=en("languages",sE);const lE=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],cE=en("library",lE);const uE=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Lv=en("mic",uE);const fE=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ph=en("moon",fE);const dE=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ix=en("pause",dE);const hE=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],pE=en("pen-line",hE);const mE=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ax=en("play",mE);const gE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vE=en("plus",gE);const _E=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xE=en("settings",_E);const SE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],mh=en("sun",SE);const yE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],rx=en("trash-2",yE);const ME=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],EE=en("triangle-alert",ME);const bE=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],TE=en("upload",bE);const AE=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],sx=en("wand-sparkles",AE);const CE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],RE=en("x",CE);const xp="184",wE=0,Ov=1,DE=2,Yc=1,UE=2,el=3,hr=0,Yn=1,ya=2,Ea=0,Bs=1,Pv=2,Fv=3,zv=4,NE=5,Ir=100,LE=101,OE=102,PE=103,FE=104,zE=200,IE=201,BE=202,HE=203,gh=204,vh=205,GE=206,VE=207,kE=208,XE=209,WE=210,jE=211,qE=212,YE=213,ZE=214,_h=0,xh=1,Sh=2,Gs=3,yh=4,Mh=5,Eh=6,bh=7,ox=0,KE=1,JE=2,ji=0,lx=1,cx=2,ux=3,fx=4,dx=5,hx=6,px=7,mx=300,Vr=301,Vs=302,Dd=303,Ud=304,fu=306,Th=1e3,Ma=1001,Ah=1002,Nn=1003,QE=1004,Ec=1005,Tn=1006,Nd=1007,Hr=1008,xi=1009,gx=1010,vx=1011,il=1012,Sp=1013,Zi=1014,Li=1015,Ki=1016,yp=1017,Mp=1018,al=1020,_x=35902,xx=35899,Sx=1021,yx=1022,Si=1023,Ca=1026,Gr=1027,Mx=1028,Ep=1029,kr=1030,bp=1031,Tp=1033,Zc=33776,Kc=33777,Jc=33778,Qc=33779,Ch=35840,Rh=35841,wh=35842,Dh=35843,Uh=36196,Nh=37492,Lh=37496,Oh=37488,Ph=37489,nu=37490,Fh=37491,zh=37808,Ih=37809,Bh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,jh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,Jh=36492,Qh=36494,$h=36495,ep=36283,tp=36284,iu=36285,np=36286,$E=3200,Iv=0,eb=1,fr="",oi="srgb",au="srgb-linear",ru="linear",Bt="srgb",Ts=7680,Bv=519,tb=512,nb=513,ib=514,Ap=515,ab=516,rb=517,Cp=518,sb=519,Hv=35044,Gv="300 es",Wi=2e3,su=2001;function ob(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lb(){const s=ou("canvas");return s.style.display="block",s}const Vv={};function kv(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ex(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=Ex(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=Ex(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ip(...s){const e=s.join(" ");e in Vv||(Vv[e]=!0,nt(...s))}function cb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ub={[_h]:xh,[Sh]:Eh,[yh]:bh,[Gs]:Mh,[xh]:_h,[Eh]:Sh,[bh]:yh,[Mh]:Gs};class jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=Math.PI/180,ap=180/Math.PI;function cl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function fb(s,e){return(s%e+e)%e}function Od(s,e,i){return(1-i)*s+i*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Up=class Up{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Up.prototype.isVector2=!0;let bt=Up;class qs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],_=r[l+2],v=r[l+3],g=c[f+0],M=c[f+1],E=c[f+2],R=c[f+3];if(v!==R||m!==g||h!==M||_!==E){let x=m*g+h*M+_*E+v*R;x<0&&(g=-g,M=-M,E=-E,R=-R,x=-x);let y=1-p;if(x<.9995){const w=Math.acos(x),N=Math.sin(w);y=Math.sin(y*w)/N,p=Math.sin(p*w)/N,m=m*y+g*p,h=h*y+M*p,_=_*y+E*p,v=v*y+R*p}else{m=m*y+g*p,h=h*y+M*p,_=_*y+E*p,v=v*y+R*p;const w=1/Math.sqrt(m*m+h*h+_*_+v*v);m*=w,h*=w,_*=w,v*=w}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],v=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+_*v+m*M-h*g,e[i+1]=m*E+_*g+h*v-p*M,e[i+2]=h*E+_*M+p*g-m*v,e[i+3]=_*E-p*v-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),v=p(c/2),g=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+h*M*E,this._y=h*M*v-g*_*E,this._z=h*_*E+g*M*v,this._w=h*_*v-g*M*E;break;case"YXZ":this._x=g*_*v+h*M*E,this._y=h*M*v-g*_*E,this._z=h*_*E-g*M*v,this._w=h*_*v+g*M*E;break;case"ZXY":this._x=g*_*v-h*M*E,this._y=h*M*v+g*_*E,this._z=h*_*E+g*M*v,this._w=h*_*v-g*M*E;break;case"ZYX":this._x=g*_*v-h*M*E,this._y=h*M*v+g*_*E,this._z=h*_*E-g*M*v,this._w=h*_*v+g*M*E;break;case"YZX":this._x=g*_*v+h*M*E,this._y=h*M*v+g*_*E,this._z=h*_*E-g*M*v,this._w=h*_*v-g*M*E;break;case"XZY":this._x=g*_*v-h*M*E,this._y=h*M*v-g*_*E,this._z=h*_*E+g*M*v,this._w=h*_*v+g*M*E;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],_=i[6],v=i[10],g=r+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+f*p+l*h-c*m,this._y=l*_+f*m+c*p-r*h,this._z=c*_+f*h+r*m-l*p,this._w=f*_-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Np=class Np{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Xv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Xv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),_=2*(p*i-c*l),v=2*(c*r-f*i);return this.x=i+m*h+f*v-p*_,this.y=r+m*_+p*h-c*v,this.z=l+m*v+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Np.prototype.isVector3=!0;let le=Np;const Pd=new le,Xv=new qs,Lp=class Lp{constructor(e,i,r,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],_=r[4],v=r[7],g=r[2],M=r[5],E=r[8],R=l[0],x=l[3],y=l[6],w=l[1],N=l[4],U=l[7],V=l[2],F=l[5],I=l[8];return c[0]=f*R+p*w+m*V,c[3]=f*x+p*N+m*F,c[6]=f*y+p*U+m*I,c[1]=h*R+_*w+v*V,c[4]=h*x+_*N+v*F,c[7]=h*y+_*U+v*I,c[2]=g*R+M*w+E*V,c[5]=g*x+M*N+E*F,c[8]=g*y+M*U+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*f*_-i*p*h-r*c*_+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],v=_*f-p*h,g=p*m-_*c,M=h*c-f*m,E=i*v+r*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(l*h-_*r)*R,e[2]=(p*r-l*f)*R,e[3]=g*R,e[4]=(_*i-l*m)*R,e[5]=(l*c-p*i)*R,e[6]=M*R,e[7]=(r*m-h*i)*R,e[8]=(f*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Fd.makeScale(e,i)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lp.prototype.isMatrix3=!0;let st=Lp;const Fd=new st,Wv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const s={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Hs(l.r),l.g=Hs(l.g),l.b=Hs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ip("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ip("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[au]:{primaries:e,whitePoint:r,transfer:ru,toXYZ:Wv,fromXYZ:jv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:Wv,fromXYZ:jv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Mt=db();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class hb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=ou("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pb=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(zd(l[f].image)):c.push(zd(l[f]))}else c=zd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function zd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let mb=0;const Id=new le;class Hn extends jr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Ma,l=Ma,c=Tn,f=Hr,p=Si,m=xi,h=Hn.DEFAULT_ANISOTROPY,_=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=cl(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=mx;Hn.DEFAULT_ANISOTROPY=1;const Op=class Op{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],_=m[4],v=m[8],g=m[1],M=m[5],E=m[9],R=m[2],x=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-R)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+R)<.1&&Math.abs(E+x)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,U=(M+1)/2,V=(y+1)/2,F=(_+g)/4,I=(v+R)/4,T=(E+x)/4;return N>U&&N>V?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=F/r,c=I/r):U>V?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=F/l,c=T/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=I/c,l=T/c),this.set(r,l,c,i),this}let w=Math.sqrt((x-E)*(x-E)+(v-R)*(v-R)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(x-E)/w,this.y=(v-R)/w,this.z=(g-_)/w,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Op.prototype.isVector4=!0;let on=Op;class gb extends jr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Hn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends gb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class bx extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vb extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,i,r,l,c,f,p,m,h,_,v,g,M,E,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,_,v,g,M,E,R,x)}set(e,i,r,l,c,f,p,m,h,_,v,g,M,E,R,x){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=_,y[10]=v,y[14]=g,y[3]=M,y[7]=E,y[11]=R,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,M=f*v,E=p*_,R=p*v;i[0]=m*_,i[4]=-m*v,i[8]=h,i[1]=M+E*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,E=h*_,R=h*v;i[0]=g+R*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*v,i[5]=f*_,i[9]=-p,i[2]=M*p-E,i[6]=R+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,E=h*_,R=h*v;i[0]=g-R*p,i[4]=-f*v,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*_,i[9]=R-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*v,E=p*_,R=p*v;i[0]=m*_,i[4]=E*h-M,i[8]=g*h+R,i[1]=m*v,i[5]=R*h+g,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*h,E=p*m,R=p*h;i[0]=m*_,i[4]=R-g*v,i[8]=E*v+M,i[1]=v,i[5]=f*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*v+E,i[10]=g-R*v}else if(e.order==="XZY"){const g=f*m,M=f*h,E=p*m,R=p*h;i[0]=m*_,i[4]=-v,i[8]=h*_,i[1]=g*v+R,i[5]=f*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=p*_,i[10]=R*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_b,e,xb)}lookAt(e,i,r){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),rr.crossVectors(r,ri),rr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),rr.crossVectors(r,ri)),rr.normalize(),bc.crossVectors(ri,rr),l[0]=rr.x,l[4]=bc.x,l[8]=ri.x,l[1]=rr.y,l[5]=bc.y,l[9]=ri.y,l[2]=rr.z,l[6]=bc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],_=r[1],v=r[5],g=r[9],M=r[13],E=r[2],R=r[6],x=r[10],y=r[14],w=r[3],N=r[7],U=r[11],V=r[15],F=l[0],I=l[4],T=l[8],z=l[12],J=l[1],G=l[5],$=l[9],re=l[13],he=l[2],k=l[6],O=l[10],P=l[14],Q=l[3],fe=l[7],ye=l[11],L=l[15];return c[0]=f*F+p*J+m*he+h*Q,c[4]=f*I+p*G+m*k+h*fe,c[8]=f*T+p*$+m*O+h*ye,c[12]=f*z+p*re+m*P+h*L,c[1]=_*F+v*J+g*he+M*Q,c[5]=_*I+v*G+g*k+M*fe,c[9]=_*T+v*$+g*O+M*ye,c[13]=_*z+v*re+g*P+M*L,c[2]=E*F+R*J+x*he+y*Q,c[6]=E*I+R*G+x*k+y*fe,c[10]=E*T+R*$+x*O+y*ye,c[14]=E*z+R*re+x*P+y*L,c[3]=w*F+N*J+U*he+V*Q,c[7]=w*I+N*G+U*k+V*fe,c[11]=w*T+N*$+U*O+V*ye,c[15]=w*z+N*re+U*P+V*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],_=e[2],v=e[6],g=e[10],M=e[14],E=e[3],R=e[7],x=e[11],y=e[15],w=m*M-h*g,N=p*M-h*v,U=p*g-m*v,V=f*M-h*_,F=f*g-m*_,I=f*v-p*_;return i*(R*w-x*N+y*U)-r*(E*w-x*V+y*F)+l*(E*N-R*V+y*I)-c*(E*U-R*F+x*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],v=e[9],g=e[10],M=e[11],E=e[12],R=e[13],x=e[14],y=e[15],w=i*p-r*f,N=i*m-l*f,U=i*h-c*f,V=r*m-l*p,F=r*h-c*p,I=l*h-c*m,T=_*R-v*E,z=_*x-g*E,J=_*y-M*E,G=v*x-g*R,$=v*y-M*R,re=g*y-M*x,he=w*re-N*$+U*G+V*J-F*z+I*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/he;return e[0]=(p*re-m*$+h*G)*k,e[1]=(l*$-r*re-c*G)*k,e[2]=(R*I-x*F+y*V)*k,e[3]=(g*F-v*I-M*V)*k,e[4]=(m*J-f*re-h*z)*k,e[5]=(i*re-l*J+c*z)*k,e[6]=(x*U-E*I-y*N)*k,e[7]=(_*I-g*U+M*N)*k,e[8]=(f*$-p*J+h*T)*k,e[9]=(r*J-i*$-c*T)*k,e[10]=(E*F-R*U+y*w)*k,e[11]=(v*U-_*F-M*w)*k,e[12]=(p*z-f*G-m*T)*k,e[13]=(i*G-r*z+l*T)*k,e[14]=(R*N-E*V-x*w)*k,e[15]=(_*V-v*N+g*w)*k,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,_=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*f,0,h*m-l*p,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,_=f+f,v=p+p,g=c*h,M=c*_,E=c*v,R=f*_,x=f*v,y=p*v,w=m*h,N=m*_,U=m*v,V=r.x,F=r.y,I=r.z;return l[0]=(1-(R+y))*V,l[1]=(M+U)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(g+y))*F,l[6]=(x+w)*F,l[7]=0,l[8]=(E+N)*I,l[9]=(x-w)*I,l[10]=(1-(g+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Cs.set(l[0],l[1],l[2]).length();const p=Cs.set(l[4],l[5],l[6]).length(),m=Cs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ri.copy(this);const h=1/f,_=1/p,v=1/m;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=Wi,m=!1){const h=this.elements,_=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let E,R;if(m)E=c/(f-c),R=f*c/(f-c);else if(p===Wi)E=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(p===su)E=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=Wi,m=!1){const h=this.elements,_=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,R;if(m)E=1/(f-c),R=f/(f-c);else if(p===Wi)E=-2/(f-c),R=-(f+c)/(f-c);else if(p===su)E=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};lu.prototype.isMatrix4=!0;let Sn=lu;const Cs=new le,Ri=new Sn,_b=new le(0,0,0),xb=new le(1,1,1),rr=new le,bc=new le,ri=new le,qv=new Sn,Yv=new qs;class Xr{constructor(e=0,i=0,r=0,l=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Yv.setFromEuler(this),this.setFromQuaternion(Yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sb=0;const Zv=new le,Rs=new qs,ga=new Sn,Tc=new le,qo=new le,yb=new le,Mb=new qs,Kv=new le(1,0,0),Jv=new le(0,1,0),Qv=new le(0,0,1),$v={type:"added"},Eb={type:"removed"},ws={type:"childadded",child:null},Bd={type:"childremoved",child:null};class li extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new le,i=new Xr,r=new qs,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new st}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Kv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis(Qv,e)}translateOnAxis(e,i){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Kv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis(Qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Tc.copy(e):Tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(qo,Tc,this.up):ga.lookAt(Tc,qo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(ga),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($v),ws.child=e,this.dispatchEvent(ws),ws.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Eb),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($v),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}li.DEFAULT_UP=new le(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ac extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const R of e.hand.values()){const x=i.getJointPose(R,r),y=this._getHandJoint(h,R);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,E=.005;h.inputState.pinching&&g>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Gd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Mt.workingColorSpace){if(e=fb(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Gd(f,c,e+1/3),this.g=Gd(f,c,e),this.b=Gd(f,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=Ax[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Mt.workingToColorSpace(zn.copy(this),e),Math.round(Et(zn.r*255,0,255))*65536+Math.round(Et(zn.g*255,0,255))*256+Math.round(Et(zn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const _=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=_<=.5?v/(f+p):v/(2-f-p),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=oi){Mt.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Cc);const r=Od(sr.h,Cc.h,i),l=Od(sr.s,Cc.s,i),c=Od(sr.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ut;Ut.NAMES=Ax;class Cx extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new le,va=new le,Vd=new le,_a=new le,Ds=new le,Us=new le,e_=new le,kd=new le,Xd=new le,Wd=new le,jd=new on,qd=new on,Yd=new on;class Ni{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),va.subVectors(r,i),Vd.subVectors(e,i);const f=wi.dot(wi),p=wi.dot(va),m=wi.dot(Vd),h=va.dot(va),_=va.dot(Vd),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(h*m-p*_)*g,E=(f*_-p*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return jd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),jd.fromBufferAttribute(e,i),qd.fromBufferAttribute(e,r),Yd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(jd,c.x),f.addScaledVector(qd,c.y),f.addScaledVector(Yd,c.z),f}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),va.subVectors(e,i),wi.cross(va).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),va.subVectors(this.a,this.b),wi.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;Ds.subVectors(l,r),Us.subVectors(c,r),kd.subVectors(e,r);const m=Ds.dot(kd),h=Us.dot(kd);if(m<=0&&h<=0)return i.copy(r);Xd.subVectors(e,l);const _=Ds.dot(Xd),v=Us.dot(Xd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*h;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ds,f);Wd.subVectors(e,c);const M=Ds.dot(Wd),E=Us.dot(Wd);if(E>=0&&M<=E)return i.copy(c);const R=M*h-m*E;if(R<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(Us,p);const x=_*E-M*v;if(x<=0&&v-_>=0&&M-E>=0)return e_.subVectors(c,l),p=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector(e_,p);const y=1/(x+R+g);return f=R*y,p=g*y,i.copy(r).addScaledVector(Ds,f).addScaledVector(Us,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rc.copy(r.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),wc.subVectors(this.max,Yo),Ns.subVectors(e.a,Yo),Ls.subVectors(e.b,Yo),Os.subVectors(e.c,Yo),or.subVectors(Ls,Ns),lr.subVectors(Os,Ls),Lr.subVectors(Ns,Os);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Lr.z,Lr.y,or.z,0,-or.x,lr.z,0,-lr.x,Lr.z,0,-Lr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Lr.y,Lr.x,0];return!Zd(i,Ns,Ls,Os,wc)||(i=[1,0,0,0,1,0,0,0,1],!Zd(i,Ns,Ls,Os,wc))?!1:(Dc.crossVectors(or,lr),i=[Dc.x,Dc.y,Dc.z],Zd(i,Ns,Ls,Os,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new le,new le,new le,new le,new le,new le,new le,new le],Di=new le,Rc=new ul,Ns=new le,Ls=new le,Os=new le,or=new le,lr=new le,Lr=new le,Yo=new le,wc=new le,Dc=new le,Or=new le;function Zd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Or.fromArray(s,c);const p=l.x*Math.abs(Or.x)+l.y*Math.abs(Or.y)+l.z*Math.abs(Or.z),m=e.dot(Or),h=i.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const vn=new le,Uc=new bt;let Tb=0;class qi extends jr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Hv,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rx extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class wx extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ta extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Ab=new ul,Zo=new le,Kd=new le;class wp{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ab.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Kd)),this.expandByPoint(Zo.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cb=0;const _i=new Sn,Jd=new li,Ps=new le,si=new ul,Ko=new ul,bn=new le;class wa extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ob(e)?wx:Rx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ta(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(si.min,Ko.min),si.expandByPoint(bn),bn.addVectors(si.max,Ko.max),si.expandByPoint(bn)):(si.expandByPoint(Ko.min),si.expandByPoint(Ko.max))}si.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)bn.fromBufferAttribute(p,h),m&&(Ps.fromBufferAttribute(e,h),bn.add(Ps)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new le,m[T]=new le;const h=new le,_=new le,v=new le,g=new bt,M=new bt,E=new bt,R=new le,x=new le;function y(T,z,J){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,z),v.fromBufferAttribute(r,J),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,z),E.fromBufferAttribute(c,J),_.sub(h),v.sub(h),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(G),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(G),p[T].add(R),p[z].add(R),p[J].add(R),m[T].add(x),m[z].add(x),m[J].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,z=w.length;T<z;++T){const J=w[T],G=J.start,$=J.count;for(let re=G,he=G+$;re<he;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new le,U=new le,V=new le,F=new le;function I(T){V.fromBufferAttribute(l,T),F.copy(V);const z=p[T];N.copy(z),N.sub(V.multiplyScalar(V.dot(z))).normalize(),U.crossVectors(F,z);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,z=w.length;T<z;++T){const J=w[T],G=J.start,$=J.count;for(let re=G,he=G+$;re<he;re+=3)I(e.getX(re+0)),I(e.getX(re+1)),I(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new le,c=new le,f=new le,p=new le,m=new le,h=new le,_=new le,v=new le;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,x),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,x),p.add(_),m.add(_),h.add(_),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,v=p.normalized,g=new h.constructor(m.length*_);let M=0,E=0;for(let R=0,x=m.length;R<x;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*_;for(let y=0;y<_;y++)g[E++]=h[M++]}return new qi(g,_,v)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,v=h.length;_<v;_++){const g=h[_],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let v=0,g=h.length;v<g;v++){const M=h[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],v=c[h];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rb=0;class du extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Bs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=vh,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new le,Qd=new le,Nc=new le,cr=new le,$d=new le,Lc=new le,eh=new le;class wb{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),p=cr.dot(this.direction),m=-cr.dot(Nc),h=cr.lengthSq(),_=Math.abs(1-f*f);let v,g,M,E;if(_>0)if(v=f*m-p,g=f*p-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const R=1/_;v*=R,g*=R,M=v*(v+f*g+2*p)+g*(f*v+g+2*m)+h}else g=c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;else g<=-E?(v=Math.max(0,-(-f*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(v=Math.max(0,-(f*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h);else g=f>0?-c:c,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qd).addScaledVector(Nc,g),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,c){$d.subVectors(i,e),Lc.subVectors(r,e),eh.crossVectors($d,Lc);let f=this.direction.dot(eh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=p*this.direction.dot(Lc.crossVectors(cr,Lc));if(m<0)return null;const h=p*this.direction.dot($d.cross(cr));if(h<0||m+h>f)return null;const _=-p*cr.dot(eh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dx extends du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t_=new Sn,Pr=new wb,Oc=new wp,n_=new le,Pc=new le,Fc=new le,zc=new le,th=new le,Ic=new le,i_=new le,Bc=new le;class Fi extends li{constructor(e=new wa,i=new Dx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],v=c[m];_!==0&&(th.fromBufferAttribute(v,e),f?Ic.addScaledVector(th,_):Ic.addScaledVector(th.sub(i),_))}i.add(Ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Pr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Oc,n_)===null||Pr.origin.distanceToSquared(n_)>(e.far-e.near)**2))&&(t_.copy(c).invert(),Pr.copy(e.ray).applyMatrix4(t_),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Pr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,R=g.length;E<R;E++){const x=g[E],y=f[x.materialIndex],w=Math.max(x.start,M.start),N=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let U=w,V=N;U<V;U+=3){const F=p.getX(U),I=p.getX(U+1),T=p.getX(U+2);l=Hc(this,y,e,r,h,_,v,F,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let x=E,y=R;x<y;x+=3){const w=p.getX(x),N=p.getX(x+1),U=p.getX(x+2);l=Hc(this,f,e,r,h,_,v,w,N,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,R=g.length;E<R;E++){const x=g[E],y=f[x.materialIndex],w=Math.max(x.start,M.start),N=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=w,V=N;U<V;U+=3){const F=U,I=U+1,T=U+2;l=Hc(this,y,e,r,h,_,v,F,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let x=E,y=R;x<y;x+=3){const w=x,N=x+1,U=x+2;l=Hc(this,f,e,r,h,_,v,w,N,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Db(s,e,i,r,l,c,f,p){let m;if(e.side===Yn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===hr,p),m===null)return null;Bc.copy(p),Bc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Bc);return h<i.near||h>i.far?null:{distance:h,point:Bc.clone(),object:s}}function Hc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,Pc),s.getVertexPosition(m,Fc),s.getVertexPosition(h,zc);const _=Db(s,e,i,r,Pc,Fc,zc,i_);if(_){const v=new le;Ni.getBarycoord(i_,Pc,Fc,zc,v),l&&(_.uv=Ni.getInterpolatedAttribute(l,p,m,h,v,new bt)),c&&(_.uv1=Ni.getInterpolatedAttribute(c,p,m,h,v,new bt)),f&&(_.normal=Ni.getInterpolatedAttribute(f,p,m,h,v,new le),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new le,materialIndex:0};Ni.getNormal(Pc,Fc,zc,g.normal),_.face=g,_.barycoord=v}return _}class Ub extends Hn{constructor(e=null,i=1,r=1,l,c,f,p,m,h=Nn,_=Nn,v,g){super(null,f,p,m,h,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new le,Nb=new le,Lb=new st;class zr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=nh.subVectors(r,i).cross(Nb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(nh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Lb.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new wp,Ob=new bt(.5,.5),Gc=new le;class Ux{constructor(e=new zr,i=new zr,r=new zr,l=new zr,c=new zr,f=new zr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Wi,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],_=c[4],v=c[5],g=c[6],M=c[7],E=c[8],R=c[9],x=c[10],y=c[11],w=c[12],N=c[13],U=c[14],V=c[15];if(l[0].setComponents(h-f,M-_,y-E,V-w).normalize(),l[1].setComponents(h+f,M+_,y+E,V+w).normalize(),l[2].setComponents(h+p,M+v,y+R,V+N).normalize(),l[3].setComponents(h-p,M-v,y-R,V-N).normalize(),r)l[4].setComponents(m,g,x,U).normalize(),l[5].setComponents(h-m,M-g,y-x,V-U).normalize();else if(l[4].setComponents(h-m,M-g,y-x,V-U).normalize(),i===Wi)l[5].setComponents(h+m,M+g,y+x,V+U).normalize();else if(i===su)l[5].setComponents(m,g,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=Ob.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nx extends Hn{constructor(e=[],i=Vr,r,l,c,f,p,m,h,_){super(e,i,r,l,c,f,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends Hn{constructor(e,i,r=Zi,l,c,f,p=Nn,m=Nn,h,_=Ca,v=1){if(_!==Ca&&_!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pb extends ks{constructor(e,i=Zi,r=Vr,l,c,f=Nn,p=Nn,m,h=Ca){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends wa{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],_=[],v=[];let g=0,M=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ta(h,3)),this.setAttribute("normal",new Ta(_,3)),this.setAttribute("uv",new Ta(v,2));function E(R,x,y,w,N,U,V,F,I,T,z){const J=U/I,G=V/T,$=U/2,re=V/2,he=F/2,k=I+1,O=T+1;let P=0,Q=0;const fe=new le;for(let ye=0;ye<O;ye++){const L=ye*G-re;for(let Z=0;Z<k;Z++){const ve=Z*J-$;fe[R]=ve*w,fe[x]=L*N,fe[y]=he,h.push(fe.x,fe.y,fe.z),fe[R]=0,fe[x]=0,fe[y]=F>0?1:-1,_.push(fe.x,fe.y,fe.z),v.push(Z/I),v.push(1-ye/T),P+=1}}for(let ye=0;ye<T;ye++)for(let L=0;L<I;L++){const Z=g+L+k*ye,ve=g+L+k*(ye+1),Ae=g+(L+1)+k*(ye+1),Ue=g+(L+1)+k*ye;m.push(Z,ve,Ue),m.push(ve,Ae,Ue),Q+=6}p.addGroup(M,Q,z),M+=Q,g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ys extends wa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,v=e/p,g=i/m,M=[],E=[],R=[],x=[];for(let y=0;y<_;y++){const w=y*g-f;for(let N=0;N<h;N++){const U=N*v-c;E.push(U,-w,0),R.push(0,0,1),x.push(N/p),x.push(1-y/m)}}for(let y=0;y<m;y++)for(let w=0;w<p;w++){const N=w+h*y,U=w+h*(y+1),V=w+1+h*(y+1),F=w+1+h*y;M.push(N,U,F),M.push(U,V,F)}this.setIndex(M),this.setAttribute("position",new Ta(E,3)),this.setAttribute("normal",new Ta(R,3)),this.setAttribute("uv",new Ta(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(a_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(a_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)e[l]=r[l]}return e}function a_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Fb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ox(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const zb={clone:Xs,merge:Bn};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Hb extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gb extends du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vb extends du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vc=new le,kc=new qs,Vi=new le;class Px extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,kc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Vc,kc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new le,r_=new bt,s_=new bt;class Ui extends Px{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,r_,s_),i.subVectors(s_,r_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class hu extends Px{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Fs=-90,zs=1;class kb extends li{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Fs,zs,e,i);l.layers=this.layers,this.add(l);const c=new Ui(Fs,zs,e,i);c.layers=this.layers,this.add(c);const f=new Ui(Fs,zs,e,i);f.layers=this.layers,this.add(f);const p=new Ui(Fs,zs,e,i);p.layers=this.layers,this.add(p);const m=new Ui(Fs,zs,e,i);m.layers=this.layers,this.add(m);const h=new Ui(Fs,zs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Xb extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Pp=class Pp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Pp.prototype.isMatrix2=!0;let o_=Pp;function l_(s,e,i,r){const l=Wb(r);switch(i){case Sx:return s*e;case Mx:return s*e/l.components*l.byteLength;case Ep:return s*e/l.components*l.byteLength;case kr:return s*e*2/l.components*l.byteLength;case bp:return s*e*2/l.components*l.byteLength;case yx:return s*e*3/l.components*l.byteLength;case Si:return s*e*4/l.components*l.byteLength;case Tp:return s*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case Ch:case wh:return Math.max(s,8)*Math.max(e,8)/2;case Uh:case Nh:case Oh:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lh:case nu:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Jh:case Qh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case iu:case np:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Wb(s){switch(s){case xi:case gx:return{byteLength:1,components:1};case il:case vx:case Ki:return{byteLength:2,components:1};case yp:case Mp:return{byteLength:2,components:4};case Zi:case Sp:case Li:return{byteLength:4,components:1};case _x:case xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function zx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function jb(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,v=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const _=m.array,v=m.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,_);else{v.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<v.length;M++){const E=v[g],R=v[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,v[g]=R)}v.length=g+1;for(let M=0,E=v.length;M<E;M++){const R=v[M];s.bufferSubData(h,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ET="gl_FragColor = linearToOutputTexel( gl_FragColor );",bT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,BT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:Zb,alphamap_pars_fragment:Kb,alphatest_fragment:Jb,alphatest_pars_fragment:Qb,aomap_fragment:$b,aomap_pars_fragment:eT,batching_pars_vertex:tT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:cT,clipping_planes_pars_vertex:uT,clipping_planes_vertex:fT,color_fragment:dT,color_pars_fragment:hT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:vT,defaultnormal_vertex:_T,displacementmap_pars_vertex:xT,displacementmap_vertex:ST,emissivemap_fragment:yT,emissivemap_pars_fragment:MT,colorspace_fragment:ET,colorspace_pars_fragment:bT,envmap_fragment:TT,envmap_common_pars_fragment:AT,envmap_pars_fragment:CT,envmap_pars_vertex:RT,envmap_physical_pars_fragment:BT,envmap_vertex:wT,fog_vertex:DT,fog_pars_vertex:UT,fog_fragment:NT,fog_pars_fragment:LT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:FT,lights_lambert_pars_fragment:zT,lights_pars_begin:IT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:XT,lights_physical_pars_fragment:WT,lights_fragment_begin:jT,lights_fragment_maps:qT,lights_fragment_end:YT,lightprobes_pars_fragment:ZT,logdepthbuf_fragment:KT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:$T,map_fragment:eA,map_pars_fragment:tA,map_particle_fragment:nA,map_particle_pars_fragment:iA,metalnessmap_fragment:aA,metalnessmap_pars_fragment:rA,morphinstance_vertex:sA,morphcolor_vertex:oA,morphnormal_vertex:lA,morphtarget_pars_vertex:cA,morphtarget_vertex:uA,normal_fragment_begin:fA,normal_fragment_maps:dA,normal_pars_fragment:hA,normal_pars_vertex:pA,normal_vertex:mA,normalmap_pars_fragment:gA,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:_A,clearcoat_pars_fragment:xA,iridescence_pars_fragment:SA,opaque_fragment:yA,packing:MA,premultiplied_alpha_fragment:EA,project_vertex:bA,dithering_fragment:TA,dithering_pars_fragment:AA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:DA,shadowmap_vertex:UA,shadowmask_pars_fragment:NA,skinbase_vertex:LA,skinning_pars_vertex:OA,skinning_vertex:PA,skinnormal_vertex:FA,specularmap_fragment:zA,specularmap_pars_fragment:IA,tonemapping_fragment:BA,tonemapping_pars_fragment:HA,transmission_fragment:GA,transmission_pars_fragment:VA,uv_pars_fragment:kA,uv_pars_vertex:XA,uv_vertex:WA,worldpos_vertex:jA,background_vert:qA,background_frag:YA,backgroundCube_vert:ZA,backgroundCube_frag:KA,cube_vert:JA,cube_frag:QA,depth_vert:$A,depth_frag:e2,distance_vert:t2,distance_frag:n2,equirect_vert:i2,equirect_frag:a2,linedashed_vert:r2,linedashed_frag:s2,meshbasic_vert:o2,meshbasic_frag:l2,meshlambert_vert:c2,meshlambert_frag:u2,meshmatcap_vert:f2,meshmatcap_frag:d2,meshnormal_vert:h2,meshnormal_frag:p2,meshphong_vert:m2,meshphong_frag:g2,meshphysical_vert:v2,meshphysical_frag:_2,meshtoon_vert:x2,meshtoon_frag:S2,points_vert:y2,points_frag:M2,shadow_vert:E2,shadow_frag:b2,sprite_vert:T2,sprite_frag:A2},He={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Xi={basic:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([He.points,He.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([He.common,He.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([He.sprite,He.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Bn([He.common,He.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Bn([He.lights,He.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Xi.physical={uniforms:Bn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Xc={r:0,b:0,g:0},C2=new Sn,Ix=new st;Ix.set(-1,0,0,0,1,0,0,0,1);function R2(s,e,i,r,l,c){const f=new Ut(0);let p=l===!0?0:1,m,h,_=null,v=0,g=null;function M(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const U=w.backgroundBlurriness>0;N=e.get(N,U)}return N}function E(w){let N=!1;const U=M(w);U===null?x(f,p):U&&U.isColor&&(x(U,1),N=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(w,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===fu)?(h===void 0&&(h=new Fi(new fl(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Xs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=U,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C2.makeRotationFromEuler(N.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ix),h.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Bt,(_!==U||v!==U.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=U,v=U.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Fi(new Ys(2,2),new yi({name:"BackgroundMaterial",uniforms:Xs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function x(w,N){w.getRGB(Xc,Ox(s)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,N,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,N=1){f.set(w),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:E,addToRenderList:R,dispose:y}}function w2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function p(G,$,re,he,k){let O=!1;const P=v(G,he,re,$);c!==P&&(c=P,h(c.object)),O=M(G,he,re,k),O&&E(G,he,re,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(G,$,re,he),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function v(G,$,re,he){const k=he.wireframe===!0;let O=r[$.id];O===void 0&&(O={},r[$.id]=O);const P=G.isInstancedMesh===!0?G.id:0;let Q=O[P];Q===void 0&&(Q={},O[P]=Q);let fe=Q[re.id];fe===void 0&&(fe={},Q[re.id]=fe);let ye=fe[k];return ye===void 0&&(ye=g(m()),fe[k]=ye),ye}function g(G){const $=[],re=[],he=[];for(let k=0;k<i;k++)$[k]=0,re[k]=0,he[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:he,object:G,attributes:{},index:null}}function M(G,$,re,he){const k=c.attributes,O=$.attributes;let P=0;const Q=re.getAttributes();for(const fe in Q)if(Q[fe].location>=0){const L=k[fe];let Z=O[fe];if(Z===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;P++}return c.attributesNum!==P||c.index!==he}function E(G,$,re,he){const k={},O=$.attributes;let P=0;const Q=re.getAttributes();for(const fe in Q)if(Q[fe].location>=0){let L=O[fe];L===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),k[fe]=Z,P++}c.attributes=k,c.attributesNum=P,c.index=he}function R(){const G=c.newAttributes;for(let $=0,re=G.length;$<re;$++)G[$]=0}function x(G){y(G,0)}function y(G,$){const re=c.newAttributes,he=c.enabledAttributes,k=c.attributeDivisors;re[G]=1,he[G]===0&&(s.enableVertexAttribArray(G),he[G]=1),k[G]!==$&&(s.vertexAttribDivisor(G,$),k[G]=$)}function w(){const G=c.newAttributes,$=c.enabledAttributes;for(let re=0,he=$.length;re<he;re++)$[re]!==G[re]&&(s.disableVertexAttribArray(re),$[re]=0)}function N(G,$,re,he,k,O,P){P===!0?s.vertexAttribIPointer(G,$,re,k,O):s.vertexAttribPointer(G,$,re,he,k,O)}function U(G,$,re,he){R();const k=he.attributes,O=re.getAttributes(),P=$.defaultAttributeValues;for(const Q in O){const fe=O[Q];if(fe.location>=0){let ye=k[Q];if(ye===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(ye=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(ye=G.instanceColor)),ye!==void 0){const L=ye.normalized,Z=ye.itemSize,ve=e.get(ye);if(ve===void 0)continue;const Ae=ve.buffer,Ue=ve.type,ce=ve.bytesPerElement,Me=Ue===s.INT||Ue===s.UNSIGNED_INT||ye.gpuType===Sp;if(ye.isInterleavedBufferAttribute){const Te=ye.data,Ge=Te.stride,et=ye.offset;if(Te.isInstancedInterleavedBuffer){for(let Qe=0;Qe<fe.locationSize;Qe++)y(fe.location+Qe,Te.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)x(fe.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<fe.locationSize;Qe++)N(fe.location+Qe,Z/fe.locationSize,Ue,L,Ge*ce,(et+Z/fe.locationSize*Qe)*ce,Me)}else{if(ye.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)y(fe.location+Te,ye.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Te=0;Te<fe.locationSize;Te++)x(fe.location+Te);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Te=0;Te<fe.locationSize;Te++)N(fe.location+Te,Z/fe.locationSize,Ue,L,Z*ce,Z/fe.locationSize*Te*ce,Me)}}else if(P!==void 0){const L=P[Q];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(fe.location,L);break;case 3:s.vertexAttrib3fv(fe.location,L);break;case 4:s.vertexAttrib4fv(fe.location,L);break;default:s.vertexAttrib1fv(fe.location,L)}}}}w()}function V(){z();for(const G in r){const $=r[G];for(const re in $){const he=$[re];for(const k in he){const O=he[k];for(const P in O)_(O[P].object),delete O[P];delete he[k]}}delete r[G]}}function F(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const re in $){const he=$[re];for(const k in he){const O=he[k];for(const P in O)_(O[P].object),delete O[P];delete he[k]}}delete r[G.id]}function I(G){for(const $ in r){const re=r[$];for(const he in re){const k=re[he];if(k[G.id]===void 0)continue;const O=k[G.id];for(const P in O)_(O[P].object),delete O[P];delete k[G.id]}}}function T(G){for(const $ in r){const re=r[$],he=G.isInstancedMesh===!0?G.id:0,k=re[he];if(k!==void 0){for(const O in k){const P=k[O];for(const Q in P)_(P[Q].object),delete P[Q];delete k[O]}delete re[he],Object.keys(re).length===0&&delete r[$]}}}function z(){J(),f=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:J,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:x,disableUnusedAttributes:w}}function D2(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function f(m,h,_){_!==0&&(s.drawArraysInstanced(r,m,h,_),i.update(h,r,_))}function p(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,_);let g=0;for(let M=0;M<_;M++)g+=h[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function U2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Si&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Li&&!T)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(nt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:U,maxSamples:V,samples:F}}function N2(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new zr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||r!==0||l;return l=g,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const E=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,y=s.get(v);if(!l||E===null||E.length===0||c&&!x)c?_(null):h();else{const w=c?0:r,N=w*4;let U=y.clippingState||null;m.value=U,U=_(E,g,N,M);for(let V=0;V!==N;++V)U[V]=i[V];y.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,M,E){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=m.value,E!==!0||x===null){const y=M+R*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(x===null||x.length<y)&&(x=new Float32Array(y));for(let N=0,U=M;N!==R;++N,U+=4)f.copy(v[N]).applyMatrix4(w,p),f.normal.toArray(x,U),x[U+3]=f.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const dr=4,c_=[.125,.215,.35,.446,.526,.582],Br=20,L2=256,Jo=new hu,u_=new Ut;let ih=null,ah=0,rh=0,sh=!1;const O2=new le;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=O2}=c;ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,ah,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ki,format:Si,colorSpace:au,depthBuffer:!1},l=d_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P2(c)),this._blurMaterial=z2(c,e,i),this._ggxMaterial=F2(c,e,i)}return l}_compileMaterial(e){const i=new Fi(new wa,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,r,l,c){const m=new Ui(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(u_),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new fl,new Dx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let y=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,y=!0):(x.color.copy(u_),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const V=this._cubeSize;Is(l,U*V,N>2?V:0,V,V),v.setRenderTarget(l),y&&v.render(R,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Is(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-_*_),g=0+h*1.25,M=v*g,{_lodMax:E}=this,R=this._sizeLods[r],x=3*R*(r>E-dr?r-E+dr:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Is(c,x,y,3*R,2*R),l.setRenderTarget(c),l.render(p,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Is(e,x,y,3*R,2*R),l.setRenderTarget(e),l.render(p,Jo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Br-1),R=c/E,x=isFinite(c)?1+Math.floor(_*R):Br;x>Br&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const y=[];let w=0;for(let I=0;I<Br;++I){const T=I/R,z=Math.exp(-T*T/2);y.push(z),I===0?w+=z:I<x&&(w+=2*z)}for(let I=0;I<y.length;I++)y[I]=y[I]/w;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-r;const U=this._sizeLods[l],V=3*U*(l>N-dr?l-N+dr:0),F=4*(this._cubeSize-U);Is(i,V,F,3*U,2*U),m.setRenderTarget(i),m.render(v,Jo)}}function P2(s){const e=[],i=[],r=[];let l=s;const c=s-dr+1+c_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-dr?m=c_[f-s+dr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,v=1+h,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,R=3,x=2,y=1,w=new Float32Array(R*E*M),N=new Float32Array(x*E*M),U=new Float32Array(y*E*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,T=F>2?0:-1,z=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];w.set(z,R*E*F),N.set(g,x*E*F);const J=[F,F,F,F,F,F];U.set(J,y*E*F)}const V=new wa;V.setAttribute("position",new qi(w,R)),V.setAttribute("uv",new qi(N,x)),V.setAttribute("faceIndex",new qi(U,y)),r.push(new Fi(V,null)),l>dr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function d_(s,e,i){const r=new Pi(s,e,i);return r.texture.mapping=fu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Is(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function F2(s,e,i){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function z2(s,e,i){const r=new Float32Array(Br),l=new le(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function h_(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function p_(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bx extends Pi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),c=new yi({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Fi(l,c),p=i.minFilter;return i.minFilter===Hr&&(i.minFilter=Tn),new kb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function I2(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Dd||M===Ud)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new Bx(E.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Dd||M===Ud,R=M===Vr||M===Vs;if(E||R){let x=i.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new f_(s)),x=E?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const w=g.image;return E&&w&&w.height>0||R&&w&&m(w)?(r===null&&(r=new f_(s)),x=E?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function p(g,M){return M===Dd?g.mapping=Vr:M===Ud&&(g.mapping=Vs),g}function m(g){let M=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&M++;return M===E}function h(g){const M=g.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function B2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ip("WebGLRenderer: "+r+" extension not supported."),l}}}function H2(s,e,i,r){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(v){const g=[],M=v.index,E=v.attributes.position;let R=0;if(E===void 0)return;if(M!==null){const w=M.array;R=M.version;for(let N=0,U=w.length;N<U;N+=3){const V=w[N+0],F=w[N+1],I=w[N+2];g.push(V,F,F,I,I,V)}}else{const w=E.array;R=E.version;for(let N=0,U=w.length/3-1;N<U;N+=3){const V=N+0,F=N+1,I=N+2;g.push(V,F,F,I,I,V)}}const x=new(E.count>=65535?wx:Rx)(g,1);x.version=R;const y=c.get(v);y&&e.remove(y),c.set(v,x)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function G2(s,e,i){let r;function l(v){r=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,g){s.drawElements(r,g,c,v*f),i.update(g,r,1)}function h(v,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,v*f,M),i.update(g,r,M))}function _(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,M);let R=0;for(let x=0;x<M;x++)R+=g[x];i.update(R,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_}function V2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function k2(s,e,i){const r=new WeakMap,l=new on;function c(f,p,m){const h=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let J=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",J)};var M=J;g!==void 0&&g.texture.dispose();const E=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;E===!0&&(U=1),R===!0&&(U=2),x===!0&&(U=3);let V=p.attributes.position.count*U,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const I=new Float32Array(V*F*4*v),T=new bx(I,V,F,v);T.type=Li,T.needsUpdate=!0;const z=U*4;for(let G=0;G<v;G++){const $=y[G],re=w[G],he=N[G],k=V*F*4*G;for(let O=0;O<$.count;O++){const P=O*z;E===!0&&(l.fromBufferAttribute($,O),I[k+P+0]=l.x,I[k+P+1]=l.y,I[k+P+2]=l.z,I[k+P+3]=0),R===!0&&(l.fromBufferAttribute(re,O),I[k+P+4]=l.x,I[k+P+5]=l.y,I[k+P+6]=l.z,I[k+P+7]=0),x===!0&&(l.fromBufferAttribute(he,O),I[k+P+8]=l.x,I[k+P+9]=l.y,I[k+P+10]=l.z,I[k+P+11]=he.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new bt(V,F)},r.set(p,g),p.addEventListener("dispose",J)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const R=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function X2(s,e,i,r,l){let c=new WeakMap;function f(h){const _=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const W2={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[fx]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function j2(s,e,i,r,l){const c=new Pi(e,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new ks(e,i):void 0}),f=new Pi(e,i,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),p=new wa;p.setAttribute("position",new Ta([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ta([0,2,0,0,2,0],2));const m=new Hb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Fi(p,m),_=new hu(-1,1,1,-1,0,1);let v=null,g=null,M=!1,E,R=null,x=[],y=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let U=0;U<x.length;U++){const V=x[U];V.setSize&&V.setSize(w,N)}},this.setEffects=function(w){x=w,y=x.length>0&&x[0].isRenderPass===!0;const N=c.width,U=c.height;for(let V=0;V<x.length;V++){const F=x[V];F.setSize&&F.setSize(N,U)}},this.begin=function(w,N){if(M||w.toneMapping===ji&&x.length===0)return!1;if(R=N,N!==null){const U=N.width,V=N.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return y===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return y},this.end=function(w,N){w.toneMapping=E,M=!0;let U=c,V=f;for(let F=0;F<x.length;F++){const I=x[F];if(I.enabled!==!1&&(I.render(w,V,U,N),I.needsSwap!==!1)){const T=U;U=V,V=T}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Mt.getTransfer(v)===Bt&&(m.defines.SRGB_TRANSFER="");const F=W2[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(R),w.render(h,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Hx=new Hn,rp=new ks(1,1),Gx=new bx,Vx=new vb,kx=new Nx,m_=[],g_=[],v_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function Zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=m_[l];if(c===void 0&&(c=new Float32Array(l),m_[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function yn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function mu(s,e){let i=g_[e];i===void 0&&(i=new Int32Array(e),g_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function q2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Y2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function Z2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function K2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function J2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;x_.set(r),s.uniformMatrix2fv(this.addr,!1,x_),Mn(i,r)}}function Q2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;__.set(r),s.uniformMatrix3fv(this.addr,!1,__),Mn(i,r)}}function $2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;v_.set(r),s.uniformMatrix4fv(this.addr,!1,v_),Mn(i,r)}}function eC(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function tC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function nC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function iC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function aC(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function rC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function sC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function oC(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function lC(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(rp.compareFunction=i.isReversedDepthBuffer()?Cp:Ap,c=rp):c=Hx,i.setTexture2D(e||c,l)}function cC(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Vx,l)}function uC(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||kx,l)}function fC(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Gx,l)}function dC(s){switch(s){case 5126:return q2;case 35664:return Y2;case 35665:return Z2;case 35666:return K2;case 35674:return J2;case 35675:return Q2;case 35676:return $2;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return aC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return fC}}function hC(s,e){s.uniform1fv(this.addr,e)}function pC(s,e){const i=Zs(e,this.size,2);s.uniform2fv(this.addr,i)}function mC(s,e){const i=Zs(e,this.size,3);s.uniform3fv(this.addr,i)}function gC(s,e){const i=Zs(e,this.size,4);s.uniform4fv(this.addr,i)}function vC(s,e){const i=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function _C(s,e){const i=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function xC(s,e){const i=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function SC(s,e){s.uniform1iv(this.addr,e)}function yC(s,e){s.uniform2iv(this.addr,e)}function MC(s,e){s.uniform3iv(this.addr,e)}function EC(s,e){s.uniform4iv(this.addr,e)}function bC(s,e){s.uniform1uiv(this.addr,e)}function TC(s,e){s.uniform2uiv(this.addr,e)}function AC(s,e){s.uniform3uiv(this.addr,e)}function CC(s,e){s.uniform4uiv(this.addr,e)}function RC(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=rp:f=Hx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function wC(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Vx,c[f])}function DC(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||kx,c[f])}function UC(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Gx,c[f])}function NC(s){switch(s){case 5126:return hC;case 35664:return pC;case 35665:return mC;case 35666:return gC;case 35674:return vC;case 35675:return _C;case 35676:return xC;case 5124:case 35670:return SC;case 35667:case 35671:return yC;case 35668:case 35672:return MC;case 35669:case 35673:return EC;case 5125:return bC;case 36294:return TC;case 36295:return AC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return RC;case 35679:case 36299:case 36307:return wC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return UC}}class LC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dC(i.type)}}class OC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NC(i.type)}}class PC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function S_(s,e){s.seq.push(e),s.map[e.id]=e}function FC(s,e,i){const r=s.name,l=r.length;for(oh.lastIndex=0;;){const c=oh.exec(r),f=oh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){S_(i,h===void 0?new LC(p,s,e):new OC(p,s,e));break}else{let v=i.map[p];v===void 0&&(v=new PC(p),S_(i,v)),i=v}}}class $c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);FC(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function y_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const zC=37297;let IC=0;function BC(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const M_=new st;function HC(s){Mt._getMatrix(M_,Mt.workingColorSpace,s);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+BC(s.getShaderSource(e),p)}else return c}function GC(s,e){const i=HC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const VC={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[fx]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[dx]:"Custom"};function kC(s,e){const i=VC[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new le;function XC(){Mt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function jC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function qC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function tl(s){return s!==""}function b_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(s){return s.replace(YC,KC)}const ZC=new Map;function KC(s,e){let i=ft[e];if(i===void 0){const r=ZC.get(e);if(r!==void 0)i=ft[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sp(i)}const JC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(s){return s.replace(JC,QC)}function QC(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function C_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $C={[Yc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function eR(s){return $C[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tR={[Vr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function nR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":tR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const iR={[Vs]:"ENVMAP_MODE_REFRACTION"};function aR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":iR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rR={[ox]:"ENVMAP_BLENDING_MULTIPLY",[KE]:"ENVMAP_BLENDING_MIX",[JE]:"ENVMAP_BLENDING_ADD"};function sR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rR[s.combine]||"ENVMAP_BLENDING_NONE"}function oR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function lR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=eR(i),h=nR(i),_=aR(i),v=sR(i),g=oR(i),M=WC(i),E=jC(c),R=l.createProgram();let x,y,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),y.length>0&&(y+=`
`)):(x=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),y=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ft.tonemapping_pars_fragment:"",i.toneMapping!==ji?kC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,GC("linearToOutputTexel",i.outputColorSpace),XC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),f=sp(f),f=b_(f,i),f=T_(f,i),p=sp(p),p=b_(p,i),p=T_(p,i),f=A_(f),p=A_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=w+x+f,U=w+y+p,V=y_(l,l.VERTEX_SHADER,N),F=y_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,V),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(R)||"",re=l.getShaderInfoLog(V)||"",he=l.getShaderInfoLog(F)||"",k=$.trim(),O=re.trim(),P=he.trim();let Q=!0,fe=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,V,F);else{const ye=E_(l,V,"vertex"),L=E_(l,F,"fragment");Tt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+k+`
`+ye+`
`+L)}else k!==""?nt("WebGLProgram: Program Info Log:",k):(O===""||P==="")&&(fe=!1);fe&&(G.diagnostics={runnable:Q,programLog:k,vertexShader:{log:O,prefix:x},fragmentShader:{log:P,prefix:y}})}l.deleteShader(V),l.deleteShader(F),T=new $c(l,R),z=qC(l,R)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(R,zC)),J},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IC++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=F,this}let cR=0;class uR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new fR(e),i.set(e,r)),r}}class fR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function dR(s){return s===kr||s===nu||s===iu}function hR(s,e,i,r,l,c){const f=new Tx,p=new uR,m=new Set,h=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,z,J,G,$,re){const he=G.fog,k=$.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||O,P),fe=Q&&Q.mapping===fu?Q.image.height:null,ye=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const L=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Z=L!==void 0?L.length:0;let ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let Ae,Ue,ce,Me;if(ye){const tt=Xi[ye];Ae=tt.vertexShader,Ue=tt.fragmentShader}else Ae=T.vertexShader,Ue=T.fragmentShader,p.update(T),ce=p.getVertexShaderID(T),Me=p.getFragmentShaderID(T);const Te=s.getRenderTarget(),Ge=s.state.buffers.depth.getReversed(),et=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,Xt=!!T.map,dt=!!T.matcap,_t=!!Q,Lt=!!T.aoMap,ct=!!T.lightMap,ln=!!T.bumpMap,qt=!!T.normalMap,An=!!T.displacementMap,q=!!T.emissiveMap,tn=!!T.metalnessMap,ht=!!T.roughnessMap,Ht=T.anisotropy>0,Re=T.clearcoat>0,Kt=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,ee=T.transmission>0,xe=Ht&&!!T.anisotropyMap,be=Re&&!!T.clearcoatMap,we=Re&&!!T.clearcoatNormalMap,Oe=Re&&!!T.clearcoatRoughnessMap,de=D&&!!T.iridescenceMap,pe=D&&!!T.iridescenceThicknessMap,Pe=b&&!!T.sheenColorMap,Fe=b&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,De=!!T.specularColorMap,it=!!T.specularIntensityMap,at=ee&&!!T.transmissionMap,pt=ee&&!!T.thicknessMap,X=!!T.gradientMap,Ce=!!T.alphaMap,ge=T.alphaTest>0,Be=!!T.alphaHash,Le=!!T.extensions;let Ee=ji;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const qe={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Ue,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:et,instancingColor:et&&$.instanceColor!==null,instancingMorph:et&&$.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:dt,envMap:_t,envMapMode:_t&&Q.mapping,envMapCubeUVHeight:fe,aoMap:Lt,lightMap:ct,bumpMap:ln,normalMap:qt,displacementMap:An,emissiveMap:q,normalMapObjectSpace:qt&&T.normalMapType===eb,normalMapTangentSpace:qt&&T.normalMapType===Iv,packedNormalMap:qt&&T.normalMapType===Iv&&dR(T.normalMap.format),metalnessMap:tn,roughnessMap:ht,anisotropy:Ht,anisotropyMap:xe,clearcoat:Re,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:Kt,iridescence:D,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:b,sheenColorMap:Pe,sheenRoughnessMap:Fe,specularMap:Ne,specularColorMap:De,specularIntensityMap:it,transmission:ee,transmissionMap:at,thicknessMap:pt,gradientMap:X,opaque:T.transparent===!1&&T.blending===Bs&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ge,alphaHash:Be,combine:T.combine,mapUv:Xt&&E(T.map.channel),aoMapUv:Lt&&E(T.aoMap.channel),lightMapUv:ct&&E(T.lightMap.channel),bumpMapUv:ln&&E(T.bumpMap.channel),normalMapUv:qt&&E(T.normalMap.channel),displacementMapUv:An&&E(T.displacementMap.channel),emissiveMapUv:q&&E(T.emissiveMap.channel),metalnessMapUv:tn&&E(T.metalnessMap.channel),roughnessMapUv:ht&&E(T.roughnessMap.channel),anisotropyMapUv:xe&&E(T.anisotropyMap.channel),clearcoatMapUv:be&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ne&&E(T.specularMap.channel),specularColorMapUv:De&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:pt&&E(T.thicknessMap.channel),alphaMapUv:Ce&&E(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(qt||Ht),vertexNormals:!!k.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(Xt||Ce),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:$.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ve,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function x(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)z.push(J),z.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(y(z,T),w(z,T),z.push(s.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function w(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function N(T){const z=M[T.type];let J;if(z){const G=Xi[z];J=zb.clone(G.uniforms)}else J=T.uniforms;return J}function U(T,z){let J=_.get(z);return J!==void 0?++J.usedTimes:(J=new lR(s,z,T,l),h.push(J),_.set(z,J)),J}function V(T){if(--T.usedTimes===0){const z=h.indexOf(T);h[z]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function I(){p.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:N,acquireProgram:U,releaseProgram:V,releaseShaderCache:F,programs:h,dispose:I}}function pR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function mR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function R_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function w_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,E,R,x,y){let w=s[e];return w===void 0?(w={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:y},s[e]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=E,w.materialVariant=f(g),w.groupOrder=R,w.renderOrder=g.renderOrder,w.z=x,w.group=y),e++,w}function m(g,M,E,R,x,y){const w=p(g,M,E,R,x,y);E.transmission>0?r.push(w):E.transparent===!0?l.push(w):i.push(w)}function h(g,M,E,R,x,y){const w=p(g,M,E,R,x,y);E.transmission>0?r.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,M){i.length>1&&i.sort(g||mR),r.length>1&&r.sort(M||R_),l.length>1&&l.sort(M||R_)}function v(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:v,sort:_}}function gR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new w_,s.set(r,[f])):l>=c.length?(f=new w_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function vR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Ut};break;case"SpotLight":i={position:new le,direction:new le,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function _R(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let xR=0;function SR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yR(s){const e=new vR,i=_R(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const l=new le,c=new Sn,f=new Sn;function p(h){let _=0,v=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let M=0,E=0,R=0,x=0,y=0,w=0,N=0,U=0,V=0,F=0,I=0;h.sort(SR);for(let z=0,J=h.length;z<J;z++){const G=h[z],$=G.color,re=G.intensity,he=G.distance;let k=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===kr?k=G.shadow.map.texture:k=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=$.r*re,v+=$.g*re,g+=$.b*re;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],re);I++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,Q=i.get(G);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=k,r.directionalShadowMatrix[M]=G.shadow.matrix,w++}r.directional[M]=O,M++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy($).multiplyScalar(re),O.distance=he,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[R]=O;const P=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,P.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[R]=P.matrix,G.castShadow){const Q=i.get(G);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,r.spotShadow[R]=Q,r.spotShadowMap[R]=k,U++}R++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy($).multiplyScalar(re),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=O,x++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,Q=i.get(G);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,Q.shadowCameraNear=P.camera.near,Q.shadowCameraFar=P.camera.far,r.pointShadow[E]=Q,r.pointShadowMap[E]=k,r.pointShadowMatrix[E]=G.shadow.matrix,N++}r.point[E]=O,E++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(re),O.groundColor.copy(G.groundColor).multiplyScalar(re),r.hemi[y]=O,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==R||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==V||T.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=x,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+V-F,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,T.directionalLength=M,T.pointLength=E,T.spotLength=R,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=V,T.numLightProbes=I,r.version=xR++)}function m(h,_){let v=0,g=0,M=0,E=0,R=0;const x=_.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){const N=h[y];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),v++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(N.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(x),R++}}}return{setup:p,setupView:m,state:r}}function D_(s){const e=new yR(s),i=[],r=[],l=[];function c(g){v.camera=g,i.length=0,r.length=0,l.length=0}function f(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:_,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function MR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new D_(s),e.set(l,[p])):c>=f.length?(p=new D_(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const ER=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TR=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],AR=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],U_=new Sn,Qo=new le,lh=new le;function CR(s,e,i){let r=new Ux;const l=new bt,c=new bt,f=new on,p=new Gb,m=new Vb,h={},_=i.maxTextureSize,v={[hr]:Yn,[Yn]:hr,[ya]:ya},g=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:ER,fragmentShader:bR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new wa;E.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Fi(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let y=this.type;this.render=function(F,I,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===UE&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const z=s.getRenderTarget(),J=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ea),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=y!==this.type;re&&I.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(k=>k.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,k=F.length;he<k;he++){const O=F[he],P=O.shadow;if(P===void 0){nt("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const Q=P.getFrameExtents();l.multiply(Q),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Q.x),l.x=c.x*Q.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Q.y),l.y=c.y*Q.y,P.mapSize.y=c.y));const fe=s.state.buffers.depth.getReversed();if(P.camera._reversedDepth=fe,P.map===null||re===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===el){if(O.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Pi(l.x,l.y,{format:kr,type:Ki,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new ks(l.x,l.y,Li),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=Ca,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Nn,P.map.depthTexture.magFilter=Nn}else O.isPointLight?(P.map=new Bx(l.x),P.map.depthTexture=new Pb(l.x,Zi)):(P.map=new Pi(l.x,l.y),P.map.depthTexture=new ks(l.x,l.y,Zi)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=Ca,this.type===Yc?(P.map.depthTexture.compareFunction=fe?Cp:Ap,P.map.depthTexture.minFilter=Tn,P.map.depthTexture.magFilter=Tn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Nn,P.map.depthTexture.magFilter=Nn);P.camera.updateProjectionMatrix()}const ye=P.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<ye;L++){if(P.map.isWebGLCubeRenderTarget)s.setRenderTarget(P.map,L),s.clear();else{L===0&&(s.setRenderTarget(P.map),s.clear());const Z=P.getViewport(L);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),$.viewport(f)}if(O.isPointLight){const Z=P.camera,ve=P.matrix,Ae=O.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),Z.position.copy(Qo),lh.copy(Z.position),lh.add(TR[L]),Z.up.copy(AR[L]),Z.lookAt(lh),Z.updateMatrixWorld(),ve.makeTranslation(-Qo.x,-Qo.y,-Qo.z),U_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),P._frustum.setFromProjectionMatrix(U_,Z.coordinateSystem,Z.reversedDepth)}else P.updateMatrices(O);r=P.getFrustum(),U(I,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===el&&w(P,T),P.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(z,J,G)};function w(F,I){const T=e.update(R);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pi(l.x,l.y,{format:kr,type:Ki})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,T,g,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,T,M,R,null)}function N(F,I,T,z){let J=null;const G=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)J=G;else if(J=T.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const $=J.uuid,re=I.uuid;let he=h[$];he===void 0&&(he={},h[$]=he);let k=he[re];k===void 0&&(k=J.clone(),he[re]=k,I.addEventListener("dispose",V)),J=k}if(J.visible=I.visible,J.wireframe=I.wireframe,z===el?J.side=I.shadowSide!==null?I.shadowSide:I.side:J.side=I.shadowSide!==null?I.shadowSide:v[I.side],J.alphaMap=I.alphaMap,J.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,J.map=I.map,J.clipShadows=I.clipShadows,J.clippingPlanes=I.clippingPlanes,J.clipIntersection=I.clipIntersection,J.displacementMap=I.displacementMap,J.displacementScale=I.displacementScale,J.displacementBias=I.displacementBias,J.wireframeLinewidth=I.wireframeLinewidth,J.linewidth=I.linewidth,T.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const $=s.properties.get(J);$.light=T}return J}function U(F,I,T,z,J){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&J===el)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const re=e.update(F),he=F.material;if(Array.isArray(he)){const k=re.groups;for(let O=0,P=k.length;O<P;O++){const Q=k[O],fe=he[Q.materialIndex];if(fe&&fe.visible){const ye=N(F,fe,z,J);F.onBeforeShadow(s,F,I,T,re,ye,Q),s.renderBufferDirect(T,null,re,ye,F,Q),F.onAfterShadow(s,F,I,T,re,ye,Q)}}}else if(he.visible){const k=N(F,he,z,J);F.onBeforeShadow(s,F,I,T,re,k,null),s.renderBufferDirect(T,null,re,k,F,null),F.onAfterShadow(s,F,I,T,re,k,null)}}const $=F.children;for(let re=0,he=$.length;re<he;re++)U($[re],I,T,z,J)}function V(F){F.target.removeEventListener("dispose",V);for(const T in h){const z=h[T],J=F.target.uuid;J in z&&(z[J].dispose(),delete z[J])}}}function RR(s,e){function i(){let X=!1;const Ce=new on;let ge=null;const Be=new on(0,0,0,0);return{setMask:function(Le){ge!==Le&&!X&&(s.colorMask(Le,Le,Le,Le),ge=Le)},setLocked:function(Le){X=Le},setClear:function(Le,Ee,qe,tt,nn){nn===!0&&(Le*=tt,Ee*=tt,qe*=tt),Ce.set(Le,Ee,qe,tt),Be.equals(Ce)===!1&&(s.clearColor(Le,Ee,qe,tt),Be.copy(Ce))},reset:function(){X=!1,ge=null,Be.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,ge=null,Be=null,Le=null;return{setReversed:function(Ee){if(Ce!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const tt=Le;Le=null,this.setClear(tt)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?Te(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Ee){ge!==Ee&&!X&&(s.depthMask(Ee),ge=Ee)},setFunc:function(Ee){if(Ce&&(Ee=ub[Ee]),Be!==Ee){switch(Ee){case _h:s.depthFunc(s.NEVER);break;case xh:s.depthFunc(s.ALWAYS);break;case Sh:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case yh:s.depthFunc(s.EQUAL);break;case Mh:s.depthFunc(s.GEQUAL);break;case Eh:s.depthFunc(s.GREATER);break;case bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Le!==Ee&&(Le=Ee,Ce&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){X=!1,ge=null,Be=null,Le=null,Ce=!1}}}function l(){let X=!1,Ce=null,ge=null,Be=null,Le=null,Ee=null,qe=null,tt=null,nn=null;return{setTest:function(wt){X||(wt?Te(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(wt){Ce!==wt&&!X&&(s.stencilMask(wt),Ce=wt)},setFunc:function(wt,ci,Zn){(ge!==wt||Be!==ci||Le!==Zn)&&(s.stencilFunc(wt,ci,Zn),ge=wt,Be=ci,Le=Zn)},setOp:function(wt,ci,Zn){(Ee!==wt||qe!==ci||tt!==Zn)&&(s.stencilOp(wt,ci,Zn),Ee=wt,qe=ci,tt=Zn)},setLocked:function(wt){X=wt},setClear:function(wt){nn!==wt&&(s.clearStencil(wt),nn=wt)},reset:function(){X=!1,Ce=null,ge=null,Be=null,Le=null,Ee=null,qe=null,tt=null,nn=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},v={},g={},M=new WeakMap,E=[],R=null,x=!1,y=null,w=null,N=null,U=null,V=null,F=null,I=null,T=new Ut(0,0,0),z=0,J=!1,G=null,$=null,re=null,he=null,k=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(fe)[1]),P=Q>=1):fe.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),P=Q>=2);let ye=null,L={};const Z=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ae=new on().fromArray(Z),Ue=new on().fromArray(ve);function ce(X,Ce,ge,Be){const Le=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(X,Ee),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ge;qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ee}const Me={};Me[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Te(s.DEPTH_TEST),f.setFunc(Gs),ln(!1),qt(Ov),Te(s.CULL_FACE),Lt(Ea);function Te(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Ge(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function et(X,Ce){return g[X]!==Ce?(s.bindFramebuffer(X,Ce),g[X]=Ce,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(X,Ce){let ge=E,Be=!1;if(X){ge=M.get(Ce),ge===void 0&&(ge=[],M.set(Ce,ge));const Le=X.textures;if(ge.length!==Le.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,qe=Le.length;Ee<qe;Ee++)ge[Ee]=s.COLOR_ATTACHMENT0+Ee;ge.length=Le.length,Be=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Be=!0);Be&&s.drawBuffers(ge)}function Xt(X){return R!==X?(s.useProgram(X),R=X,!0):!1}const dt={[Ir]:s.FUNC_ADD,[LE]:s.FUNC_SUBTRACT,[OE]:s.FUNC_REVERSE_SUBTRACT};dt[PE]=s.MIN,dt[FE]=s.MAX;const _t={[zE]:s.ZERO,[IE]:s.ONE,[BE]:s.SRC_COLOR,[gh]:s.SRC_ALPHA,[WE]:s.SRC_ALPHA_SATURATE,[kE]:s.DST_COLOR,[GE]:s.DST_ALPHA,[HE]:s.ONE_MINUS_SRC_COLOR,[vh]:s.ONE_MINUS_SRC_ALPHA,[XE]:s.ONE_MINUS_DST_COLOR,[VE]:s.ONE_MINUS_DST_ALPHA,[jE]:s.CONSTANT_COLOR,[qE]:s.ONE_MINUS_CONSTANT_COLOR,[YE]:s.CONSTANT_ALPHA,[ZE]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(X,Ce,ge,Be,Le,Ee,qe,tt,nn,wt){if(X===Ea){x===!0&&(Ge(s.BLEND),x=!1);return}if(x===!1&&(Te(s.BLEND),x=!0),X!==NE){if(X!==y||wt!==J){if((w!==Ir||V!==Ir)&&(s.blendEquation(s.FUNC_ADD),w=Ir,V=Ir),wt)switch(X){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pv:s.blendFunc(s.ONE,s.ONE);break;case Fv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fv:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zv:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",X);break}N=null,U=null,F=null,I=null,T.set(0,0,0),z=0,y=X,J=wt}return}Le=Le||Ce,Ee=Ee||ge,qe=qe||Be,(Ce!==w||Le!==V)&&(s.blendEquationSeparate(dt[Ce],dt[Le]),w=Ce,V=Le),(ge!==N||Be!==U||Ee!==F||qe!==I)&&(s.blendFuncSeparate(_t[ge],_t[Be],_t[Ee],_t[qe]),N=ge,U=Be,F=Ee,I=qe),(tt.equals(T)===!1||nn!==z)&&(s.blendColor(tt.r,tt.g,tt.b,nn),T.copy(tt),z=nn),y=X,J=!1}function ct(X,Ce){X.side===ya?Ge(s.CULL_FACE):Te(s.CULL_FACE);let ge=X.side===Yn;Ce&&(ge=!ge),ln(ge),X.blending===Bs&&X.transparent===!1?Lt(Ea):Lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Be=X.stencilWrite;p.setTest(Be),Be&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Te(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function ln(X){G!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),G=X)}function qt(X){X!==wE?(Te(s.CULL_FACE),X!==$&&(X===Ov?s.cullFace(s.BACK):X===DE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),$=X}function An(X){X!==re&&(P&&s.lineWidth(X),re=X)}function q(X,Ce,ge){X?(Te(s.POLYGON_OFFSET_FILL),(he!==Ce||k!==ge)&&(he=Ce,k=ge,f.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ge))):Ge(s.POLYGON_OFFSET_FILL)}function tn(X){X?Te(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function ht(X){X===void 0&&(X=s.TEXTURE0+O-1),ye!==X&&(s.activeTexture(X),ye=X)}function Ht(X,Ce,ge){ge===void 0&&(ye===null?ge=s.TEXTURE0+O-1:ge=ye);let Be=L[ge];Be===void 0&&(Be={type:void 0,texture:void 0},L[ge]=Be),(Be.type!==X||Be.texture!==Ce)&&(ye!==ge&&(s.activeTexture(ge),ye=ge),s.bindTexture(X,Ce||Me[X]),Be.type=X,Be.texture=Ce)}function Re(){const X=L[ye];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function b(){try{s.texSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function ee(){try{s.texSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function xe(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Oe(){try{s.texStorage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function de(){try{s.texImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function pe(){try{s.texImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Pe(X){return v[X]!==void 0?v[X]:s.getParameter(X)}function Fe(X,Ce){v[X]!==Ce&&(s.pixelStorei(X,Ce),v[X]=Ce)}function Ne(X){Ae.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function De(X){Ue.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function it(X,Ce){let ge=h.get(Ce);ge===void 0&&(ge=new WeakMap,h.set(Ce,ge));let Be=ge.get(X);Be===void 0&&(Be=s.getUniformBlockIndex(Ce,X.name),ge.set(X,Be))}function at(X,Ce){const Be=h.get(Ce).get(X);m.get(Ce)!==Be&&(s.uniformBlockBinding(Ce,Be,X.__bindingPointIndex),m.set(Ce,Be))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},ye=null,L={},g={},M=new WeakMap,E=[],R=null,x=!1,y=null,w=null,N=null,U=null,V=null,F=null,I=null,T=new Ut(0,0,0),z=0,J=!1,G=null,$=null,re=null,he=null,k=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Te,disable:Ge,bindFramebuffer:et,drawBuffers:Qe,useProgram:Xt,setBlending:Lt,setMaterial:ct,setFlipSided:ln,setCullFace:qt,setLineWidth:An,setPolygonOffset:q,setScissorTest:tn,activeTexture:ht,bindTexture:Ht,unbindTexture:Re,compressedTexImage2D:Kt,compressedTexImage3D:D,texImage2D:de,texImage3D:pe,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:xe,compressedTexSubImage3D:be,scissor:Ne,viewport:De,reset:pt}}function wR(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,b){return E?new OffscreenCanvas(D,b):ou("canvas")}function x(D,b,ee){let xe=1;const be=Kt(D);if((be.width>ee||be.height>ee)&&(xe=ee/Math.max(be.width,be.height)),xe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const we=Math.floor(xe*be.width),Oe=Math.floor(xe*be.height);g===void 0&&(g=R(we,Oe));const de=b?R(we,Oe):g;return de.width=we,de.height=Oe,de.getContext("2d").drawImage(D,0,0,we,Oe),nt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+we+"x"+Oe+")."),de}else return"data"in D&&nt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function y(D){return D.generateMipmaps}function w(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(D,b,ee,xe,be,we=!1){if(D!==null){if(s[D]!==void 0)return s[D];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Oe;xe&&(Oe=e.get("EXT_texture_norm16"),Oe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=b;if(b===s.RED&&(ee===s.FLOAT&&(de=s.R32F),ee===s.HALF_FLOAT&&(de=s.R16F),ee===s.UNSIGNED_BYTE&&(de=s.R8),ee===s.UNSIGNED_SHORT&&Oe&&(de=Oe.R16_EXT),ee===s.SHORT&&Oe&&(de=Oe.R16_SNORM_EXT)),b===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.R8UI),ee===s.UNSIGNED_SHORT&&(de=s.R16UI),ee===s.UNSIGNED_INT&&(de=s.R32UI),ee===s.BYTE&&(de=s.R8I),ee===s.SHORT&&(de=s.R16I),ee===s.INT&&(de=s.R32I)),b===s.RG&&(ee===s.FLOAT&&(de=s.RG32F),ee===s.HALF_FLOAT&&(de=s.RG16F),ee===s.UNSIGNED_BYTE&&(de=s.RG8),ee===s.UNSIGNED_SHORT&&Oe&&(de=Oe.RG16_EXT),ee===s.SHORT&&Oe&&(de=Oe.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RG8UI),ee===s.UNSIGNED_SHORT&&(de=s.RG16UI),ee===s.UNSIGNED_INT&&(de=s.RG32UI),ee===s.BYTE&&(de=s.RG8I),ee===s.SHORT&&(de=s.RG16I),ee===s.INT&&(de=s.RG32I)),b===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(de=s.RGB16UI),ee===s.UNSIGNED_INT&&(de=s.RGB32UI),ee===s.BYTE&&(de=s.RGB8I),ee===s.SHORT&&(de=s.RGB16I),ee===s.INT&&(de=s.RGB32I)),b===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),ee===s.UNSIGNED_INT&&(de=s.RGBA32UI),ee===s.BYTE&&(de=s.RGBA8I),ee===s.SHORT&&(de=s.RGBA16I),ee===s.INT&&(de=s.RGBA32I)),b===s.RGB&&(ee===s.UNSIGNED_SHORT&&Oe&&(de=Oe.RGB16_EXT),ee===s.SHORT&&Oe&&(de=Oe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),b===s.RGBA){const pe=we?ru:Mt.getTransfer(be);ee===s.FLOAT&&(de=s.RGBA32F),ee===s.HALF_FLOAT&&(de=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(de=pe===Bt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Oe&&(de=Oe.RGBA16_EXT),ee===s.SHORT&&Oe&&(de=Oe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(D,b){let ee;return D?b===null||b===Zi||b===al?ee=s.DEPTH24_STENCIL8:b===Li?ee=s.DEPTH32F_STENCIL8:b===il&&(ee=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===al?ee=s.DEPTH_COMPONENT24:b===Li?ee=s.DEPTH_COMPONENT32F:b===il&&(ee=s.DEPTH_COMPONENT16),ee}function F(D,b){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),G(b)}function z(D){const b=r.get(D);if(b.__webglInit===void 0)return;const ee=D.source,xe=M.get(ee);if(xe){const be=xe[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&J(D),Object.keys(xe).length===0&&M.delete(ee)}r.remove(D)}function J(D){const b=r.get(D);s.deleteTexture(b.__webglTexture);const ee=D.source,xe=M.get(ee);delete xe[b.__cacheKey],f.memory.textures--}function G(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(b.__webglFramebuffer[xe]))for(let be=0;be<b.__webglFramebuffer[xe].length;be++)s.deleteFramebuffer(b.__webglFramebuffer[xe][be]);else s.deleteFramebuffer(b.__webglFramebuffer[xe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[xe])}else{if(Array.isArray(b.__webglFramebuffer))for(let xe=0;xe<b.__webglFramebuffer.length;xe++)s.deleteFramebuffer(b.__webglFramebuffer[xe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xe=0;xe<b.__webglColorRenderbuffer.length;xe++)b.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[xe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=D.textures;for(let xe=0,be=ee.length;xe<be;xe++){const we=r.get(ee[xe]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),f.memory.textures--),r.remove(ee[xe])}r.remove(D)}let $=0;function re(){$=0}function he(){return $}function k(D){$=D}function O(){const D=$;return D>=l.maxTextures&&nt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),$+=1,D}function P(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function Q(D,b){const ee=r.get(D);if(D.isVideoTexture&&Ht(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ee.__version!==D.version){const xe=D.image;if(xe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(ee,D,b);return}}else D.isExternalTexture&&(ee.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+b)}function fe(D,b){const ee=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){Ge(ee,D,b);return}else D.isExternalTexture&&(ee.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+b)}function ye(D,b){const ee=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){Ge(ee,D,b);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+b)}function L(D,b){const ee=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&ee.__version!==D.version){et(ee,D,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+b)}const Z={[Th]:s.REPEAT,[Ma]:s.CLAMP_TO_EDGE,[Ah]:s.MIRRORED_REPEAT},ve={[Nn]:s.NEAREST,[QE]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},Ae={[tb]:s.NEVER,[sb]:s.ALWAYS,[nb]:s.LESS,[Ap]:s.LEQUAL,[ib]:s.EQUAL,[Cp]:s.GEQUAL,[ab]:s.GREATER,[rb]:s.NOTEQUAL};function Ue(D,b){if(b.type===Li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===Nd||b.magFilter===Ec||b.magFilter===Hr||b.minFilter===Tn||b.minFilter===Nd||b.minFilter===Ec||b.minFilter===Hr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Z[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ve[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Ec&&b.minFilter!==Hr||b.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ce(D,b){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const xe=b.source;let be=M.get(xe);be===void 0&&(be={},M.set(xe,be));const we=P(b);if(we!==D.__cacheKey){be[we]===void 0&&(be[we]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),be[we].usedTimes++;const Oe=be[D.__cacheKey];Oe!==void 0&&(be[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&J(b)),D.__cacheKey=we,D.__webglTexture=be[we].texture}return ee}function Me(D,b,ee){return Math.floor(Math.floor(D/ee)/b)}function Te(D,b,ee,xe){const we=D.updateRanges;if(we.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ee,xe,b.data);else{we.sort((Fe,Ne)=>Fe.start-Ne.start);let Oe=0;for(let Fe=1;Fe<we.length;Fe++){const Ne=we[Oe],De=we[Fe],it=Ne.start+Ne.count,at=Me(De.start,b.width,4),pt=Me(Ne.start,b.width,4);De.start<=it+1&&at===pt&&Me(De.start+De.count-1,b.width,4)===at?Ne.count=Math.max(Ne.count,De.start+De.count-Ne.start):(++Oe,we[Oe]=De)}we.length=Oe+1;const de=i.getParameter(s.UNPACK_ROW_LENGTH),pe=i.getParameter(s.UNPACK_SKIP_PIXELS),Pe=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Ne=we.length;Fe<Ne;Fe++){const De=we[Fe],it=Math.floor(De.start/4),at=Math.ceil(De.count/4),pt=it%b.width,X=Math.floor(it/b.width),Ce=at,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,pt,X,Ce,ge,ee,xe,b.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,de),i.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Ge(D,b,ee){let xe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=s.TEXTURE_3D);const be=ce(D,b),we=b.source;i.bindTexture(xe,D.__webglTexture,s.TEXTURE0+ee);const Oe=r.get(we);if(we.version!==Oe.__version||be===!0){if(i.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Mt.getPrimaries(Mt.workingColorSpace),Be=b.colorSpace===fr?null:Mt.getPrimaries(b.colorSpace),Le=b.colorSpace===fr||ge===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let pe=x(b.image,!1,l.maxTextureSize);pe=Re(b,pe);const Pe=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ne=U(b.internalFormat,Pe,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Ue(xe,b);let De;const it=b.mipmaps,at=b.isVideoTexture!==!0,pt=Oe.__version===void 0||be===!0,X=we.dataReady,Ce=F(b,pe);if(b.isDepthTexture)Ne=V(b.format===Gr,b.type),pt&&(at?i.texStorage2D(s.TEXTURE_2D,1,Ne,pe.width,pe.height):i.texImage2D(s.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Pe,Fe,null));else if(b.isDataTexture)if(it.length>0){at&&pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ne,it[0].width,it[0].height);for(let ge=0,Be=it.length;ge<Be;ge++)De=it[ge],at?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,De.width,De.height,Pe,Fe,De.data):i.texImage2D(s.TEXTURE_2D,ge,Ne,De.width,De.height,0,Pe,Fe,De.data);b.generateMipmaps=!1}else at?(pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ne,pe.width,pe.height),X&&Te(b,pe,Pe,Fe)):i.texImage2D(s.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Pe,Fe,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ne,it[0].width,it[0].height,pe.depth);for(let ge=0,Be=it.length;ge<Be;ge++)if(De=it[ge],b.format!==Si)if(Pe!==null)if(at){if(X)if(b.layerUpdates.size>0){const Le=l_(De.width,De.height,b.format,b.type);for(const Ee of b.layerUpdates){const qe=De.data.subarray(Ee*Le/De.data.BYTES_PER_ELEMENT,(Ee+1)*Le/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Ee,De.width,De.height,1,Pe,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,De.width,De.height,pe.depth,Pe,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ne,De.width,De.height,pe.depth,0,De.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,De.width,De.height,pe.depth,Pe,Fe,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ne,De.width,De.height,pe.depth,0,Pe,Fe,De.data)}else{at&&pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ne,it[0].width,it[0].height);for(let ge=0,Be=it.length;ge<Be;ge++)De=it[ge],b.format!==Si?Pe!==null?at?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,De.width,De.height,Pe,De.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Ne,De.width,De.height,0,De.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,De.width,De.height,Pe,Fe,De.data):i.texImage2D(s.TEXTURE_2D,ge,Ne,De.width,De.height,0,Pe,Fe,De.data)}else if(b.isDataArrayTexture)if(at){if(pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ne,pe.width,pe.height,pe.depth),X)if(b.layerUpdates.size>0){const ge=l_(pe.width,pe.height,b.format,b.type);for(const Be of b.layerUpdates){const Le=pe.data.subarray(Be*ge/pe.data.BYTES_PER_ELEMENT,(Be+1)*ge/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,pe.width,pe.height,1,Pe,Fe,Le)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Pe,Fe,pe.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,Pe,Fe,pe.data);else if(b.isData3DTexture)at?(pt&&i.texStorage3D(s.TEXTURE_3D,Ce,Ne,pe.width,pe.height,pe.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Pe,Fe,pe.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,Pe,Fe,pe.data);else if(b.isFramebufferTexture){if(pt)if(at)i.texStorage2D(s.TEXTURE_2D,Ce,Ne,pe.width,pe.height);else{let ge=pe.width,Be=pe.height;for(let Le=0;Le<Ce;Le++)i.texImage2D(s.TEXTURE_2D,Le,Ne,ge,Be,0,Pe,Fe,null),ge>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),pe.parentNode!==ge){ge.appendChild(pe),v.add(b),ge.onpaint=tt=>{const nn=tt.changedElements;for(const wt of v)nn.includes(wt.image)&&(wt.needsUpdate=!0)},ge.requestPaint();return}const Be=0,Le=s.RGBA,Ee=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Be,Le,Ee,qe,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const ge=Kt(it[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Ne,ge.width,ge.height)}for(let ge=0,Be=it.length;ge<Be;ge++)De=it[ge],at?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe,Fe,De):i.texImage2D(s.TEXTURE_2D,ge,Ne,Pe,Fe,De);b.generateMipmaps=!1}else if(at){if(pt){const ge=Kt(pe);i.texStorage2D(s.TEXTURE_2D,Ce,Ne,ge.width,ge.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Fe,pe)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Pe,Fe,pe);y(b)&&w(xe),Oe.__version=we.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function et(D,b,ee){if(b.image.length!==6)return;const xe=ce(D,b),be=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ee);const we=r.get(be);if(be.version!==we.__version||xe===!0){i.activeTexture(s.TEXTURE0+ee);const Oe=Mt.getPrimaries(Mt.workingColorSpace),de=b.colorSpace===fr?null:Mt.getPrimaries(b.colorSpace),pe=b.colorSpace===fr||Oe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Ee=0;Ee<6;Ee++)!Pe&&!Fe?Ne[Ee]=x(b.image[Ee],!0,l.maxCubemapSize):Ne[Ee]=Fe?b.image[Ee].image:b.image[Ee],Ne[Ee]=Re(b,Ne[Ee]);const De=Ne[0],it=c.convert(b.format,b.colorSpace),at=c.convert(b.type),pt=U(b.internalFormat,it,at,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Ce=we.__version===void 0||xe===!0,ge=be.dataReady;let Be=F(b,De);Ue(s.TEXTURE_CUBE_MAP,b);let Le;if(Pe){X&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pt,De.width,De.height);for(let Ee=0;Ee<6;Ee++){Le=Ne[Ee].mipmaps;for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];b.format!==Si?it!==null?X?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,pt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,pt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Le=b.mipmaps,X&&Ce){Le.length>0&&Be++;const Ee=Kt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Fe){X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ne[Ee].width,Ne[Ee].height,it,at,Ne[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pt,Ne[Ee].width,Ne[Ee].height,0,it,at,Ne[Ee].data);for(let qe=0;qe<Le.length;qe++){const nn=Le[qe].image[Ee].image;X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,nn.width,nn.height,it,at,nn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,pt,nn.width,nn.height,0,it,at,nn.data)}}else{X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,it,at,Ne[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pt,it,at,Ne[Ee]);for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,it,at,tt.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,pt,it,at,tt.image[Ee])}}}y(b)&&w(s.TEXTURE_CUBE_MAP),we.__version=be.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Qe(D,b,ee,xe,be,we){const Oe=c.convert(ee.format,ee.colorSpace),de=c.convert(ee.type),pe=U(ee.internalFormat,Oe,de,ee.normalized,ee.colorSpace),Pe=r.get(b),Fe=r.get(ee);if(Fe.__renderTarget=b,!Pe.__hasExternalTextures){const Ne=Math.max(1,b.width>>we),De=Math.max(1,b.height>>we);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,we,pe,Ne,De,b.depth,0,Oe,de,null):i.texImage2D(be,we,pe,Ne,De,0,Oe,de,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,be,Fe.__webglTexture,0,tn(b)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,be,Fe.__webglTexture,we),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(D,b,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const xe=b.depthTexture,be=xe&&xe.isDepthTexture?xe.type:null,we=V(b.stencilBuffer,be),Oe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tn(b),we,b.width,b.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,tn(b),we,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,we,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,D)}else{const xe=b.textures;for(let be=0;be<xe.length;be++){const we=xe[be],Oe=c.convert(we.format,we.colorSpace),de=c.convert(we.type),pe=U(we.internalFormat,Oe,de,we.normalized,we.colorSpace);ht(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tn(b),pe,b.width,b.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,tn(b),pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(D,b,ee){const xe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),xe){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),be.__webglTexture===void 0){be.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===Ca?Ne=s.DEPTH_COMPONENT24:b.depthTexture.format===Gr&&(Ne=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ne,b.width,b.height,0,Pe,Fe,null)}}else Q(b.depthTexture,0);const we=be.__webglTexture,Oe=tn(b),de=xe?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,pe=b.depthTexture.format===Gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ca)ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,we,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,we,0);else if(b.depthTexture.format===Gr)ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,we,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,we,0);else throw new Error("Unknown depthTexture format")}function _t(D){const b=r.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const xe=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xe){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xe.removeEventListener("dispose",be)};xe.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=xe}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(ee)for(let xe=0;xe<6;xe++)dt(b.__webglFramebuffer[xe],D,xe);else{const xe=D.texture.mipmaps;xe&&xe.length>0?dt(b.__webglFramebuffer[0],D,0):dt(b.__webglFramebuffer,D,0)}else if(ee){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]===void 0)b.__webglDepthbuffer[xe]=s.createRenderbuffer(),Xt(b.__webglDepthbuffer[xe],D,!1);else{const be=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,we)}}else{const xe=D.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Xt(b.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,we)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(D,b,ee){const xe=r.get(D);b!==void 0&&Qe(xe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&_t(D)}function ct(D){const b=D.texture,ee=r.get(D),xe=r.get(b);D.addEventListener("dispose",T);const be=D.textures,we=D.isWebGLCubeRenderTarget===!0,Oe=be.length>1;if(Oe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=b.version,f.memory.textures++),we){ee.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[de]=[];for(let pe=0;pe<b.mipmaps.length;pe++)ee.__webglFramebuffer[de][pe]=s.createFramebuffer()}else ee.__webglFramebuffer[de]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)ee.__webglFramebuffer[de]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let de=0,pe=be.length;de<pe;de++){const Pe=r.get(be[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),f.memory.textures++)}if(D.samples>0&&ht(D)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let de=0;de<be.length;de++){const pe=be[de];ee.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[de]);const Pe=c.convert(pe.format,pe.colorSpace),Fe=c.convert(pe.type),Ne=U(pe.internalFormat,Pe,Fe,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),De=tn(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ne,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ee.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(ee.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Qe(ee.__webglFramebuffer[de][pe],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Qe(ee.__webglFramebuffer[de],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);y(b)&&w(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let de=0,pe=be.length;de<pe;de++){const Pe=be[de],Fe=r.get(Pe);let Ne=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Fe.__webglTexture),Ue(Ne,Pe),Qe(ee.__webglFramebuffer,D,Pe,s.COLOR_ATTACHMENT0+de,Ne,0),y(Pe)&&w(Ne)}i.unbindTexture()}else{let de=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(de,xe.__webglTexture),Ue(de,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Qe(ee.__webglFramebuffer[pe],D,b,s.COLOR_ATTACHMENT0,de,pe);else Qe(ee.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,de,0);y(b)&&w(de),i.unbindTexture()}D.depthBuffer&&_t(D)}function ln(D){const b=D.textures;for(let ee=0,xe=b.length;ee<xe;ee++){const be=b[ee];if(y(be)){const we=N(D),Oe=r.get(be).__webglTexture;i.bindTexture(we,Oe),w(we),i.unbindTexture()}}}const qt=[],An=[];function q(D){if(D.samples>0){if(ht(D)===!1){const b=D.textures,ee=D.width,xe=D.height;let be=s.COLOR_BUFFER_BIT;const we=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(D),de=b.length>1;if(de)for(let Pe=0;Pe<b.length;Pe++)i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=r.get(b[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,ee,xe,0,0,ee,xe,be,s.NEAREST),m===!0&&(qt.length=0,An.length=0,qt.push(s.COLOR_ATTACHMENT0+Pe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qt.push(we),An.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,An)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<b.length;Pe++){i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=r.get(b[Pe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Fe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function tn(D){return Math.min(l.maxSamples,D.samples)}function ht(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(D){const b=f.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Re(D,b){const ee=D.colorSpace,xe=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==au&&ee!==fr&&(Mt.getTransfer(ee)===Bt?(xe!==Si||be!==xi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",ee)),b}function Kt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=re,this.getTextureUnits=he,this.setTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=fe,this.setTexture3D=ye,this.setTextureCube=L,this.rebindTextures=Lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function DR(s,e){function i(r,l=fr){let c;const f=Mt.getTransfer(l);if(r===xi)return s.UNSIGNED_BYTE;if(r===yp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_x)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gx)return s.BYTE;if(r===vx)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===Sp)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===Sx)return s.ALPHA;if(r===yx)return s.RGB;if(r===Si)return s.RGBA;if(r===Ca)return s.DEPTH_COMPONENT;if(r===Gr)return s.DEPTH_STENCIL;if(r===Mx)return s.RED;if(r===Ep)return s.RED_INTEGER;if(r===kr)return s.RG;if(r===bp)return s.RG_INTEGER;if(r===Tp)return s.RGBA_INTEGER;if(r===Zc||r===Kc||r===Jc||r===Qc)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===Rh||r===wh||r===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Nh||r===Lh||r===Oh||r===Ph||r===nu||r===Fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Uh||r===Nh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Oh)return c.COMPRESSED_R11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(r===nu)return c.COMPRESSED_RG11_EAC;if(r===Fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===zh||r===Ih||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===jh||r===qh||r===Yh||r===Zh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jh||r===Qh||r===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Jh)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===tp||r===iu||r===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const UR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Lx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new yi({vertexShader:UR,fragmentShader:NR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new Ys(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends jr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,_=null,v=null,g=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",x=new LR,y={},w=i.getContextAttributes();let N=null,U=null;const V=[],F=[],I=new bt;let T=null;const z=new Ui;z.viewport=new on;const J=new Ui;J.viewport=new on;const G=[z,J],$=new Xb;let re=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Me=V[ce];return Me===void 0&&(Me=new Hd,V[ce]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ce){let Me=V[ce];return Me===void 0&&(Me=new Hd,V[ce]=Me),Me.getGripSpace()},this.getHand=function(ce){let Me=V[ce];return Me===void 0&&(Me=new Hd,V[ce]=Me),Me.getHandSpace()};function k(ce){const Me=F.indexOf(ce.inputSource);if(Me===-1)return;const Te=V[Me];Te!==void 0&&(Te.update(ce.inputSource,ce.frame,h||f),Te.dispatchEvent({type:ce.type,data:ce.inputSource}))}function O(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let ce=0;ce<V.length;ce++){const Me=F[ce];Me!==null&&(F[ce]=null,V[ce].disconnect(Me))}re=null,he=null,x.reset();for(const ce in y)delete y[ce];e.setRenderTarget(N),M=null,g=null,v=null,l=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){c=ce,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){p=ce,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ce){if(l=ce,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,et=null;w.depth&&(et=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=w.stencil?Gr:Ca,Ge=w.stencil?al:Zi);const Qe={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new Pi(g.textureWidth,g.textureHeight,{format:Si,type:xi,depthTexture:new ks(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Pi(M.framebufferWidth,M.framebufferHeight,{format:Si,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ue.setContext(l),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function P(ce){for(let Me=0;Me<ce.removed.length;Me++){const Te=ce.removed[Me],Ge=F.indexOf(Te);Ge>=0&&(F[Ge]=null,V[Ge].disconnect(Te))}for(let Me=0;Me<ce.added.length;Me++){const Te=ce.added[Me];let Ge=F.indexOf(Te);if(Ge===-1){for(let Qe=0;Qe<V.length;Qe++)if(Qe>=F.length){F.push(Te),Ge=Qe;break}else if(F[Qe]===null){F[Qe]=Te,Ge=Qe;break}if(Ge===-1)break}const et=V[Ge];et&&et.connect(Te)}}const Q=new le,fe=new le;function ye(ce,Me,Te){Q.setFromMatrixPosition(Me.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const Ge=Q.distanceTo(fe),et=Me.projectionMatrix.elements,Qe=Te.projectionMatrix.elements,Xt=et[14]/(et[10]-1),dt=et[14]/(et[10]+1),_t=(et[9]+1)/et[5],Lt=(et[9]-1)/et[5],ct=(et[8]-1)/et[0],ln=(Qe[8]+1)/Qe[0],qt=Xt*ct,An=Xt*ln,q=Ge/(-ct+ln),tn=q*-ct;if(Me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(tn),ce.translateZ(q),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),et[10]===-1)ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ht=Xt+q,Ht=dt+q,Re=qt-tn,Kt=An+(Ge-tn),D=_t*dt/Ht*ht,b=Lt*dt/Ht*ht;ce.projectionMatrix.makePerspective(Re,Kt,D,b,ht,Ht),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function L(ce,Me){Me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(l===null)return;let Me=ce.near,Te=ce.far;x.texture!==null&&(x.depthNear>0&&(Me=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),$.near=J.near=z.near=Me,$.far=J.far=z.far=Te,(re!==$.near||he!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),re=$.near,he=$.far),$.layers.mask=ce.layers.mask|6,z.layers.mask=$.layers.mask&-5,J.layers.mask=$.layers.mask&-3;const Ge=ce.parent,et=$.cameras;L($,Ge);for(let Qe=0;Qe<et.length;Qe++)L(et[Qe],Ge);et.length===2?ye($,z,J):$.projectionMatrix.copy(z.projectionMatrix),Z(ce,$,Ge)};function Z(ce,Me,Te){Te===null?ce.matrix.copy(Me.matrixWorld):(ce.matrix.copy(Te.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=ap*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ce){m=ce,g!==null&&(g.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ce){return y[ce]};let ve=null;function Ae(ce,Me){if(_=Me.getViewerPose(h||f),E=Me,_!==null){const Te=_.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ge=!1;Te.length!==$.cameras.length&&($.cameras.length=0,Ge=!0);for(let dt=0;dt<Te.length;dt++){const _t=Te[dt];let Lt=null;if(M!==null)Lt=M.getViewport(_t);else{const ln=v.getViewSubImage(g,_t);Lt=ln.viewport,dt===0&&(e.setRenderTargetTextures(U,ln.colorTexture,ln.depthStencilTexture),e.setRenderTarget(U))}let ct=G[dt];ct===void 0&&(ct=new Ui,ct.layers.enable(dt),ct.viewport=new on,G[dt]=ct),ct.matrix.fromArray(_t.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(_t.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&($.matrix.copy(ct.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ge===!0&&$.cameras.push(ct)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const dt=v.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&x.init(dt,l.renderState)}if(et&&et.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Te.length;dt++){const _t=Te[dt].camera;if(_t){let Lt=y[_t];Lt||(Lt=new Lx,y[_t]=Lt);const ct=v.getCameraImage(_t);Lt.sourceTexture=ct}}}}for(let Te=0;Te<V.length;Te++){const Ge=F[Te],et=V[Te];Ge!==null&&et!==void 0&&et.update(Ge,Me,h||f)}ve&&ve(ce,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ue=new zx;Ue.setAnimationLoop(Ae),this.setAnimationLoop=function(ce){ve=ce},this.dispose=function(){}}}const PR=new Sn,Xx=new st;Xx.set(-1,0,0,0,1,0,0,0,1);function FR(s,e){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Ox(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,w,N,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(x,y):y.isMeshLambertMaterial?(c(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(x,y),v(x,y)):y.isMeshPhongMaterial?(c(x,y),_(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(x,y),g(x,y),y.isMeshPhysicalMaterial&&M(x,y,U)):y.isMeshMatcapMaterial?(c(x,y),E(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),R(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&p(x,y)):y.isPointsMaterial?m(x,y,w,N):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Yn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Yn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const w=e.get(y),N=w.envMap,U=w.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(U)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Xx),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function p(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function m(x,y,w,N){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*w,x.scale.value=N*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function _(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,w){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function R(x,y){const w=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function zR(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const U=N.program;r.uniformBlockBinding(w,U)}function h(w,N){let U=l[w.id];U===void 0&&(E(w),U=_(w),l[w.id]=U,w.addEventListener("dispose",x));const V=N.program;r.updateUBOMapping(w,V);const F=e.render.frame;c[w.id]!==F&&(g(w),c[w.id]=F)}function _(w){const N=v();w.__bindingPointIndex=N;const U=s.createBuffer(),V=w.__size,F=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,V,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],U=w.uniforms,V=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,I=U.length;F<I;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let z=0,J=T.length;z<J;z++){const G=T[z];if(M(G,F,z,V)===!0){const $=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let k=0;k<re.length;k++){const O=re[k],P=R(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,$+he,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):ArrayBuffer.isView(O)?G.__data.set(new O.constructor(O.buffer,O.byteOffset,G.__data.length)):(O.toArray(G.__data,he),he+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,N,U,V){const F=w.value,I=N+"_"+U;if(V[I]===void 0)return typeof F=="number"||typeof F=="boolean"?V[I]=F:ArrayBuffer.isView(F)?V[I]=F.slice():V[I]=F.clone(),!0;{const T=V[I];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return V[I]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(T.equals(F)===!1)return T.copy(F),!0}}return!1}function E(w){const N=w.uniforms;let U=0;const V=16;for(let I=0,T=N.length;I<T;I++){const z=Array.isArray(N[I])?N[I]:[N[I]];for(let J=0,G=z.length;J<G;J++){const $=z[J],re=Array.isArray($.value)?$.value:[$.value];for(let he=0,k=re.length;he<k;he++){const O=re[he],P=R(O),Q=U%V,fe=Q%P.boundary,ye=Q+fe;U+=fe,ye!==0&&V-ye<P.storage&&(U+=V-ye),$.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=P.storage}}}const F=U%V;return F>0&&(U+=V-F),w.__size=U,w.__cache={},this}function R(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),N}function x(w){const N=w.target;N.removeEventListener("dispose",x);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:h,dispose:y}}const IR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function BR(){return ki===null&&(ki=new Ub(IR,16,16,kr,Ki),ki.name="DFG_LUT",ki.minFilter=Tn,ki.magFilter=Tn,ki.wrapS=Ma,ki.wrapT=Ma,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class HR{constructor(e={}){const{canvas:i=lb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const R=M,x=new Set([Tp,bp,Ep]),y=new Set([xi,Zi,il,al,yp,Mp]),w=new Uint32Array(4),N=new Int32Array(4),U=new le;let V=null,F=null;const I=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const J=this;let G=!1,$=null;this._outputColorSpace=oi;let re=0,he=0,k=null,O=-1,P=null;const Q=new on,fe=new on;let ye=null;const L=new Ut(0);let Z=0,ve=i.width,Ae=i.height,Ue=1,ce=null,Me=null;const Te=new on(0,0,ve,Ae),Ge=new on(0,0,ve,Ae);let et=!1;const Qe=new Ux;let Xt=!1,dt=!1;const _t=new Sn,Lt=new le,ct=new on,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function An(){return k===null?Ue:1}let q=r;function tn(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xp}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",tt,!1),q===null){const Y="webgl2";if(q=tn(Y,A),q===null)throw tn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let ht,Ht,Re,Kt,D,b,ee,xe,be,we,Oe,de,pe,Pe,Fe,Ne,De,it,at,pt,X,Ce,ge;function Be(){ht=new B2(q),ht.init(),X=new DR(q,ht),Ht=new U2(q,ht,e,X),Re=new RR(q,ht),Ht.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),Kt=new V2(q),D=new pR,b=new wR(q,ht,Re,D,Ht,X,Kt),ee=new I2(J),xe=new jb(q),Ce=new w2(q,xe),be=new H2(q,xe,Kt,Ce),we=new X2(q,be,xe,Ce,Kt),it=new k2(q,Ht,b),Fe=new N2(D),Oe=new hR(J,ee,ht,Ht,Ce,Fe),de=new FR(J,D),pe=new gR,Pe=new MR(ht),De=new R2(J,ee,Re,we,E,m),Ne=new CR(J,we,Ht),ge=new zR(q,Kt,Ht,Re),at=new D2(q,ht,Kt),pt=new G2(q,ht,Kt),Kt.programs=Oe.programs,J.capabilities=Ht,J.extensions=ht,J.properties=D,J.renderLists=pe,J.shadowMap=Ne,J.state=Re,J.info=Kt}Be(),R!==xi&&(z=new j2(R,i.width,i.height,l,c));const Le=new OR(J,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(A){A!==void 0&&(Ue=A,this.setSize(ve,Ae,!1))},this.getSize=function(A){return A.set(ve,Ae)},this.setSize=function(A,Y,se=!0){if(Le.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Ae=Y,i.width=Math.floor(A*Ue),i.height=Math.floor(Y*Ue),se===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ve*Ue,Ae*Ue).floor()},this.setDrawingBufferSize=function(A,Y,se){ve=A,Ae=Y,Ue=se,i.width=Math.floor(A*se),i.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===xi){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,Y,se,ie){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,Y,se,ie),Re.viewport(Q.copy(Te).multiplyScalar(Ue).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,Y,se,ie){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,Y,se,ie),Re.scissor(fe.copy(Ge).multiplyScalar(Ue).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Re.setScissorTest(et=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){Me=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let ie=0;if(A){let ae=!1;if(k!==null){const Ie=k.texture.format;ae=x.has(Ie)}if(ae){const Ie=k.texture.type,ke=y.has(Ie),ze=De.getClearColor(),We=De.getClearAlpha(),Xe=ze.r,Ke=ze.g,ot=ze.b;ke?(w[0]=Xe,w[1]=Ke,w[2]=ot,w[3]=We,q.clearBufferuiv(q.COLOR,0,w)):(N[0]=Xe,N[1]=Ke,N[2]=ot,N[3]=We,q.clearBufferiv(q.COLOR,0,N))}else ie|=q.COLOR_BUFFER_BIT}Y&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),De.dispose(),pe.dispose(),Pe.dispose(),D.dispose(),ee.dispose(),we.dispose(),Ce.dispose(),ge.dispose(),Oe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Js),Le.removeEventListener("sessionend",Qs),Ln.stop()};function Ee(A){A.preventDefault(),kv("WebGLRenderer: Context Lost."),G=!0}function qe(){kv("WebGLRenderer: Context Restored."),G=!1;const A=Kt.autoReset,Y=Ne.enabled,se=Ne.autoUpdate,ie=Ne.needsUpdate,ae=Ne.type;Be(),Kt.autoReset=A,Ne.enabled=Y,Ne.autoUpdate=se,Ne.needsUpdate=ie,Ne.type=ae}function tt(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const Y=A.target;Y.removeEventListener("dispose",nn),wt(Y)}function wt(A){ci(A),D.remove(A)}function ci(A){const Y=D.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Oe.releaseProgram(se)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,ie,ae,Ie){Y===null&&(Y=ln);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,ze=Na(A,Y,se,ie,ae);Re.setMaterial(ie,ke);let We=se.index,Xe=1;if(ie.wireframe===!0){if(We=be.getWireframeAttribute(se),We===void 0)return;Xe=2}const Ke=se.drawRange,ot=se.attributes.position;let Ze=Ke.start*Xe,At=(Ke.start+Ke.count)*Xe;Ie!==null&&(Ze=Math.max(Ze,Ie.start*Xe),At=Math.min(At,(Ie.start+Ie.count)*Xe)),We!==null?(Ze=Math.max(Ze,0),At=Math.min(At,We.count)):ot!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,ot.count));const Jt=At-Ze;if(Jt<0||Jt===1/0)return;Ce.setup(ae,ie,ze,se,We);let Wt,Ot=at;if(We!==null&&(Wt=xe.get(We),Ot=pt,Ot.setIndex(Wt)),ae.isMesh)ie.wireframe===!0?(Re.setLineWidth(ie.wireframeLinewidth*An()),Ot.setMode(q.LINES)):Ot.setMode(q.TRIANGLES);else if(ae.isLine){let Pt=ie.linewidth;Pt===void 0&&(Pt=1),Re.setLineWidth(Pt*An()),ae.isLineSegments?Ot.setMode(q.LINES):ae.isLineLoop?Ot.setMode(q.LINE_LOOP):Ot.setMode(q.LINE_STRIP)}else ae.isPoints?Ot.setMode(q.POINTS):ae.isSprite&&Ot.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Pt=ae._multiDrawStarts,Ve=ae._multiDrawCounts,On=ae._multiDrawCount,mt=We?xe.get(We).bytesPerElement:1,_n=D.get(ie).currentProgram.getUniforms();for(let Kn=0;Kn<On;Kn++)_n.setValue(q,"_gl_DrawID",Kn),Ot.render(Pt[Kn]/mt,Ve[Kn])}else if(ae.isInstancedMesh)Ot.renderInstances(Ze,Jt,ae.count);else if(se.isInstancedBufferGeometry){const Pt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ve=Math.min(se.instanceCount,Pt);Ot.renderInstances(Ze,Jt,Ve)}else Ot.render(Ze,Jt)};function Zn(A,Y,se){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,qr(A,Y,se),A.side=hr,A.needsUpdate=!0,qr(A,Y,se),A.side=ya):qr(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),F=Pe.get(se),F.init(Y),T.push(F),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(F.pushLight(ae),ae.castShadow&&F.pushShadow(ae))}),A!==se&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(F.pushLight(ae),ae.castShadow&&F.pushShadow(ae))}),F.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ie=ae.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const ze=Ie[ke];Zn(ze,se,ae),ie.add(ze)}else Zn(Ie,se,ae),ie.add(Ie)}),F=T.pop(),ie},this.compileAsync=function(A,Y,se=null){const ie=this.compile(A,Y,se);return new Promise(ae=>{function Ie(){if(ie.forEach(function(ke){D.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){ae(A);return}setTimeout(Ie,10)}ht.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let pr=null;function Ks(A){pr&&pr(A)}function Js(){Ln.stop()}function Qs(){Ln.start()}const Ln=new zx;Ln.setAnimationLoop(Ks),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){pr=A,Le.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},Le.addEventListener("sessionstart",Js),Le.addEventListener("sessionend",Qs),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(A,Y);const se=Le.enabled===!0&&Le.isPresenting===!0,ie=z!==null&&(k===null||se)&&z.begin(J,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(J,A,Y,k),F=Pe.get(A,T.length),F.init(Y),F.state.textureUnits=b.getTextureUnits(),T.push(F),_t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,Wi,Y.reversedDepth),dt=this.localClippingEnabled,Xt=Fe.init(this.clippingPlanes,dt),V=pe.get(A,I.length),V.init(),I.push(V),Le.enabled===!0&&Le.isPresenting===!0){const ke=J.xr.getDepthSensingMesh();ke!==null&&cn(ke,Y,-1/0,J.sortObjects)}cn(A,Y,0,J.sortObjects),V.finish(),J.sortObjects===!0&&V.sort(ce,Me),qt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,qt&&De.addToRenderList(V,A),this.info.render.frame++,Xt===!0&&Fe.beginShadows();const ae=F.state.shadowsArray;if(Ne.render(ae,A,Y),Xt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&z.hasRenderPass())===!1){const ke=V.opaque,ze=V.transmissive;if(F.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(ze.length>0)for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe];Qi(ke,ze,A,ot)}qt&&De.render(A);for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe];Cn(V,A,ot,ot.viewport)}}else ze.length>0&&Qi(ke,ze,A,Y),qt&&De.render(A),Cn(V,A,Y)}k!==null&&he===0&&(b.updateMultisampleRenderTarget(k),b.updateRenderTargetMipmap(k)),ie&&z.end(J),A.isScene===!0&&A.onAfterRender(J,A,Y),Ce.resetDefaultState(),O=-1,P=null,T.pop(),T.length>0?(F=T[T.length-1],b.setTextureUnits(F.state.textureUnits),Xt===!0&&Fe.setGlobalState(J.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?V=I[I.length-1]:V=null,$!==null&&$.renderEnd()};function cn(A,Y,se,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)F.pushLightProbeGrid(A);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){ie&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const ke=we.update(A),ze=A.material;ze.visible&&V.push(A,ke,ze,se,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const ke=we.update(A),ze=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(ze)){const We=ke.groups;for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe],Ze=ze[ot.materialIndex];Ze&&Ze.visible&&V.push(A,ke,Ze,se,ct.z,ot)}}else ze.visible&&V.push(A,ke,ze,se,ct.z,null)}}const Ie=A.children;for(let ke=0,ze=Ie.length;ke<ze;ke++)cn(Ie[ke],Y,se,ie)}function Cn(A,Y,se,ie){const{opaque:ae,transmissive:Ie,transparent:ke}=A;F.setupLightsView(se),Xt===!0&&Fe.setGlobalState(J.clippingPlanes,se),ie&&Re.viewport(Q.copy(ie)),ae.length>0&&Da(ae,Y,se),Ie.length>0&&Da(Ie,Y,se),ke.length>0&&Da(ke,Y,se),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Qi(A,Y,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new Pi(1,1,{generateMipmaps:!0,type:Ze?Ki:xi,minFilter:Hr,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ie=F.state.transmissionRenderTarget[ie.id],ke=ie.viewport||Q;Ie.setSize(ke.z*J.transmissionResolutionScale,ke.w*J.transmissionResolutionScale);const ze=J.getRenderTarget(),We=J.getActiveCubeFace(),Xe=J.getActiveMipmapLevel();J.setRenderTarget(Ie),J.getClearColor(L),Z=J.getClearAlpha(),Z<1&&J.setClearColor(16777215,.5),J.clear(),qt&&De.render(se);const Ke=J.toneMapping;J.toneMapping=ji;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),Xt===!0&&Fe.setGlobalState(J.clippingPlanes,ie),Da(A,se,ie),b.updateMultisampleRenderTarget(Ie),b.updateRenderTargetMipmap(Ie),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Jt=Y.length;At<Jt;At++){const Wt=Y[At],{object:Ot,geometry:Pt,material:Ve,group:On}=Wt;if(Ve.side===ya&&Ot.layers.test(ie.layers)){const mt=Ve.side;Ve.side=Yn,Ve.needsUpdate=!0,dl(Ot,se,ie,Pt,Ve,On),Ve.side=mt,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(Ie),b.updateRenderTargetMipmap(Ie))}J.setRenderTarget(ze,We,Xe),J.setClearColor(L,Z),ot!==void 0&&(ie.viewport=ot),J.toneMapping=Ke}function Da(A,Y,se){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Ie=A.length;ae<Ie;ae++){const ke=A[ae],{object:ze,geometry:We,group:Xe}=ke;let Ke=ke.material;Ke.allowOverride===!0&&ie!==null&&(Ke=ie),ze.layers.test(se.layers)&&dl(ze,Y,se,We,Ke,Xe)}}function dl(A,Y,se,ie,ae,Ie){A.onBeforeRender(J,Y,se,ie,ae,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(J,Y,se,ie,A,Ie),ae.transparent===!0&&ae.side===ya&&ae.forceSinglePass===!1?(ae.side=Yn,ae.needsUpdate=!0,J.renderBufferDirect(se,Y,ie,ae,A,Ie),ae.side=hr,ae.needsUpdate=!0,J.renderBufferDirect(se,Y,ie,ae,A,Ie),ae.side=ya):J.renderBufferDirect(se,Y,ie,ae,A,Ie),A.onAfterRender(J,Y,se,ie,ae,Ie)}function qr(A,Y,se){Y.isScene!==!0&&(Y=ln);const ie=D.get(A),ae=F.state.lights,Ie=F.state.shadowsArray,ke=ae.state.version,ze=Oe.getParameters(A,ae.state,Ie,Y,se,F.state.lightProbeGridArray),We=Oe.getProgramCacheKey(ze);let Xe=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=ee.get(A.envMap||ie.environment,Ke),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",nn),Xe=new Map,ie.programs=Xe);let ot=Xe.get(We);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===ke)return Ua(A,ze),ot}else ze.uniforms=Oe.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,se,ze),A.onBeforeCompile(ze,J),ot=Oe.acquireProgram(ze,We),Xe.set(We,ot),ie.uniforms=ze.uniforms;const Ze=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),Ua(A,ze),ie.needsLights=mr(A),ie.lightsStateVersion=ke,ie.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=F.state.lightProbeGridArray.length>0,ie.currentProgram=ot,ie.uniformsList=null,ot}function $s(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=$c.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ua(A,Y){const se=D.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function eo(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(Y.matrixWorld);for(let se=0,ie=A.length;se<ie;se++){const ae=A[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(U))return ae}return null}function Na(A,Y,se,ie,ae){Y.isScene!==!0&&(Y=ln),b.resetTextureUnits();const Ie=Y.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,ze=k===null?J.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Mt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=ee.get(ie.envMap||ke,We),Ke=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,Jt=!!se.morphAttributes.color;let Wt=ji;ie.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=J.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=D.get(ie),On=F.state.lights;if(Xt===!0&&(dt===!0||A!==P)){const Nt=A===P&&ie.id===O;Fe.setState(ie,A,Nt)}let mt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==On.state.version||Ve.outputColorSpace!==ze||ae.isBatchedMesh&&Ve.batching===!1||!ae.isBatchedMesh&&Ve.batching===!0||ae.isBatchedMesh&&Ve.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ve.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ve.instancing===!1||!ae.isInstancedMesh&&Ve.instancing===!0||ae.isSkinnedMesh&&Ve.skinning===!1||!ae.isSkinnedMesh&&Ve.skinning===!0||ae.isInstancedMesh&&Ve.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ve.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ve.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ve.instancingMorph===!1&&ae.morphTexture!==null||Ve.envMap!==Xe||ie.fog===!0&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==ot||Ve.morphTargets!==Ze||Ve.morphNormals!==At||Ve.morphColors!==Jt||Ve.toneMapping!==Wt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ve.__version=ie.version);let _n=Ve.currentProgram;mt===!0&&(_n=qr(ie,Y,ae),$&&ie.isNodeMaterial&&$.onUpdateProgram(ie,_n,Ve));let Kn=!1,Ei=!1,Jn=!1;const Ft=_n.getUniforms(),Qt=Ve.uniforms;if(Re.useProgram(_n.program)&&(Kn=!0,Ei=!0,Jn=!0),ie.id!==O&&(O=ie.id,Ei=!0),Ve.needsLights){const Nt=eo(F.state.lightProbeGridArray,ae);Ve.lightProbeGrid!==Nt&&(Ve.lightProbeGrid=Nt,Ei=!0)}if(Kn||P!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(q,"projectionMatrix",A.projectionMatrix),Ft.setValue(q,"viewMatrix",A.matrixWorldInverse);const zi=Ft.map.cameraPosition;zi!==void 0&&zi.setValue(q,Lt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Ei=!0,Jn=!0)}if(Ve.needsLights&&(On.state.directionalShadowMap.length>0&&Ft.setValue(q,"directionalShadowMap",On.state.directionalShadowMap,b),On.state.spotShadowMap.length>0&&Ft.setValue(q,"spotShadowMap",On.state.spotShadowMap,b),On.state.pointShadowMap.length>0&&Ft.setValue(q,"pointShadowMap",On.state.pointShadowMap,b)),ae.isSkinnedMesh){Ft.setOptional(q,ae,"bindMatrix"),Ft.setOptional(q,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ft.setValue(q,"boneTexture",Nt.boneTexture,b))}ae.isBatchedMesh&&(Ft.setOptional(q,ae,"batchingTexture"),Ft.setValue(q,"batchingTexture",ae._matricesTexture,b),Ft.setOptional(q,ae,"batchingIdTexture"),Ft.setValue(q,"batchingIdTexture",ae._indirectTexture,b),Ft.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ft.setValue(q,"batchingColorTexture",ae._colorsTexture,b));const bi=se.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&it.update(ae,se,_n),(Ei||Ve.receiveShadow!==ae.receiveShadow)&&(Ve.receiveShadow=ae.receiveShadow,Ft.setValue(q,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Qt.envMapIntensity.value=Y.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=BR()),Ei){if(Ft.setValue(q,"toneMappingExposure",J.toneMappingExposure),Ve.needsLights&&La(Qt,Jn),Ie&&ie.fog===!0&&de.refreshFogUniforms(Qt,Ie),de.refreshMaterialUniforms(Qt,ie,Ue,Ae,F.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Nt=Ve.lightProbeGrid;Qt.probesSH.value=Nt.texture,Qt.probesMin.value.copy(Nt.boundingBox.min),Qt.probesMax.value.copy(Nt.boundingBox.max),Qt.probesResolution.value.copy(Nt.resolution)}$c.upload(q,$s(Ve),Qt,b)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($c.upload(q,$s(Ve),Qt,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(q,"center",ae.center),Ft.setValue(q,"modelViewMatrix",ae.modelViewMatrix),Ft.setValue(q,"normalMatrix",ae.normalMatrix),Ft.setValue(q,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let zi=0,Pa=Nt.length;zi<Pa;zi++){const gr=Nt[zi];ge.update(gr,_n),ge.bind(gr,_n)}}return _n}function La(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function mr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,Y,se){const ie=D.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Y,D.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=D.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Oa=q.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){k=A,re=Y,he=se;let ie=null,ae=!1,Ie=!1;if(A){const ze=D.get(A);if(ze.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(q.FRAMEBUFFER,ze.__webglFramebuffer),Q.copy(A.viewport),fe.copy(A.scissor),ye=A.scissorTest,Re.viewport(Q),Re.scissor(fe),Re.setScissorTest(ye),O=-1;return}else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ze.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(ze.__boundDepthTexture!==Ke){if(Ke!==null&&D.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?ie=Xe[Y][se]:ie=Xe[Y],ae=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?ie=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[se]:ie=Xe,Q.copy(A.viewport),fe.copy(A.scissor),ye=A.scissorTest}else Q.copy(Te).multiplyScalar(Ue).floor(),fe.copy(Ge).multiplyScalar(Ue).floor(),ye=et;if(se!==0&&(ie=Oa),Re.bindFramebuffer(q.FRAMEBUFFER,ie)&&Re.drawBuffers(A,ie),Re.viewport(Q),Re.scissor(fe),Re.setScissorTest(ye),ae){const ze=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,se)}else if(Ie){const ze=Y;for(let We=0;We<A.textures.length;We++){const Xe=D.get(A.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,Xe.__webglTexture,se,ze)}}else if(A!==null&&se!==0){const ze=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ze.__webglTexture,se)}O=-1},this.readRenderTargetPixels=function(A,Y,se,ie,ae,Ie,ke,ze=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Re.bindFramebuffer(q.FRAMEBUFFER,We);try{const Xe=A.textures[ze],Ke=Xe.format,ot=Xe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ze),!Ht.textureFormatReadable(Ke)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(ot)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ie&&se>=0&&se<=A.height-ae&&q.readPixels(Y,se,ie,ae,X.convert(Ke),X.convert(ot),Ie)}finally{const Xe=k!==null?D.get(k).__webglFramebuffer:null;Re.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,ie,ae,Ie,ke,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(Y>=0&&Y<=A.width-ie&&se>=0&&se<=A.height-ae){Re.bindFramebuffer(q.FRAMEBUFFER,We);const Xe=A.textures[ze],Ke=Xe.format,ot=Xe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ze),!Ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(Y,se,ie,ae,X.convert(Ke),X.convert(ot),0);const At=k!==null?D.get(k).__webglFramebuffer:null;Re.bindFramebuffer(q.FRAMEBUFFER,At);const Jt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await cb(q,Jt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer(Ze),q.deleteSync(Jt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(A.image.width*ie),Ie=Math.floor(A.image.height*ie),ke=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;b.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,ke,ze,ae,Ie),Re.unbindTexture()};const dn=q.createFramebuffer(),hl=q.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,ie=null,ae=0,Ie=0){let ke,ze,We,Xe,Ke,ot,Ze,At,Jt;const Wt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)ke=se.max.x-se.min.x,ze=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,Ke=se.min.y,ot=se.isBox3?se.min.z:0;else{const Qt=Math.pow(2,-ae);ke=Math.floor(Wt.width*Qt),ze=Math.floor(Wt.height*Qt),A.isDataArrayTexture?We=Wt.depth:A.isData3DTexture?We=Math.floor(Wt.depth*Qt):We=1,Xe=0,Ke=0,ot=0}ie!==null?(Ze=ie.x,At=ie.y,Jt=ie.z):(Ze=0,At=0,Jt=0);const Ot=X.convert(Y.format),Pt=X.convert(Y.type);let Ve;Y.isData3DTexture?(b.setTexture3D(Y,0),Ve=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Ve=q.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Ve=q.TEXTURE_2D),Re.activeTexture(q.TEXTURE0),Re.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Re.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Re.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const On=Re.getParameter(q.UNPACK_ROW_LENGTH),mt=Re.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=Re.getParameter(q.UNPACK_SKIP_PIXELS),Kn=Re.getParameter(q.UNPACK_SKIP_ROWS),Ei=Re.getParameter(q.UNPACK_SKIP_IMAGES);Re.pixelStorei(q.UNPACK_ROW_LENGTH,Wt.width),Re.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Wt.height),Re.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),Re.pixelStorei(q.UNPACK_SKIP_ROWS,Ke),Re.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const Jn=A.isDataArrayTexture||A.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Qt=D.get(A),bi=D.get(Y),Nt=D.get(Qt.__renderTarget),zi=D.get(bi.__renderTarget);Re.bindFramebuffer(q.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Re.bindFramebuffer(q.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Pa=0;Pa<We;Pa++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,ae,ot+Pa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,Ie,Jt+Pa)),q.blitFramebuffer(Xe,Ke,ke,ze,Ze,At,ke,ze,q.DEPTH_BUFFER_BIT,q.NEAREST);Re.bindFramebuffer(q.READ_FRAMEBUFFER,null),Re.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||D.has(A)){const Qt=D.get(A),bi=D.get(Y);Re.bindFramebuffer(q.READ_FRAMEBUFFER,dn),Re.bindFramebuffer(q.DRAW_FRAMEBUFFER,hl);for(let Nt=0;Nt<We;Nt++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.__webglTexture,ae,ot+Nt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Qt.__webglTexture,ae),Ft?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,Ie,Jt+Nt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,Ie),ae!==0?q.blitFramebuffer(Xe,Ke,ke,ze,Ze,At,ke,ze,q.COLOR_BUFFER_BIT,q.NEAREST):Ft?q.copyTexSubImage3D(Ve,Ie,Ze,At,Jt+Nt,Xe,Ke,ke,ze):q.copyTexSubImage2D(Ve,Ie,Ze,At,Xe,Ke,ke,ze);Re.bindFramebuffer(q.READ_FRAMEBUFFER,null),Re.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ve,Ie,Ze,At,Jt,ke,ze,We,Ot,Pt,Wt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,Ie,Ze,At,Jt,ke,ze,We,Ot,Wt.data):q.texSubImage3D(Ve,Ie,Ze,At,Jt,ke,ze,We,Ot,Pt,Wt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,Ze,At,ke,ze,Ot,Pt,Wt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,Ze,At,Wt.width,Wt.height,Ot,Wt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,Ze,At,ke,ze,Ot,Pt,Wt);Re.pixelStorei(q.UNPACK_ROW_LENGTH,On),Re.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mt),Re.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),Re.pixelStorei(q.UNPACK_SKIP_ROWS,Kn),Re.pixelStorei(q.UNPACK_SKIP_IMAGES,Ei),Ie===0&&Y.generateMipmaps&&q.generateMipmap(Ve),Re.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){re=0,he=0,k=null,Re.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}const GR=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`,VR=`
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
`,kR=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,XR=`
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
`;class WR{renderer;container;scene;camera;readTarget;writeTarget;material;mesh;uniforms;inputPos=new le;prevPos=new le;motionDecay=.95;clock=new Fx;pointerActive=!1;idleTime=0;lastInputPos=new bt;animId=0;constructor(e,i,r,l){this.renderer=e,this.container=i;const f=window.innerWidth<768||!e.capabilities.isWebGL2?Ki:Li;this.readTarget=new Pi(r,l,{type:f,minFilter:Tn,magFilter:Tn,format:Si}),this.writeTarget=this.readTarget.clone(),this.camera=new hu(-1,1,1,-1,0,1),this.scene=new Cx,this.uniforms={uPrevState:{value:this.readTarget.texture},iMouse:{value:new on(0,0,0,0)},uResolution:{value:new bt(r,l)},uBrushSize:{value:1},uBrushStrength:{value:1},uFluidDecay:{value:.98},uTrailLength:{value:.8},uStopDecay:{value:0}},this.material=new yi({vertexShader:GR,fragmentShader:VR,uniforms:this.uniforms});const p=new Ys(2,2);this.mesh=new Fi(p,this.material),this.scene.add(this.mesh)}onPointerMove(e){const i=this.container.getBoundingClientRect(),r=this.renderer.getPixelRatio(),l=(e.clientX-i.left)*r,c=(e.clientY-i.top)*r;this.prevPos.copy(this.inputPos),this.inputPos.set(l,this.uniforms.uResolution.value.y-c,1),this.uniforms.iMouse.value.set(this.inputPos.x,this.inputPos.y,this.prevPos.x,this.prevPos.y),this.pointerActive=!0,this.idleTime=0,this.lastInputPos.set(l,c)}onPointerLeave(){this.pointerActive=!1}update(){this.idleTime++,this.pointerActive?this.motionDecay=.95:this.idleTime>60&&(this.motionDecay=Math.max(.5,this.motionDecay-.02),this.uniforms.iMouse.value.set(this.lastInputPos.x,this.lastInputPos.y,this.lastInputPos.x,this.lastInputPos.y)),this.uniforms.uPrevState.value=this.readTarget.texture,this.material.uniforms.uPrevState.value=this.readTarget.texture,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const e=this.readTarget;return this.readTarget=this.writeTarget,this.writeTarget=e,this.readTarget.texture}resize(e,i){const r=this.renderer.getPixelRatio();this.readTarget.setSize(e*r,i*r),this.writeTarget.setSize(e*r,i*r),this.uniforms.uResolution.value.set(e*r,i*r)}dispose(){this.readTarget.dispose(),this.writeTarget.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}function jR(){const s=j.useRef(null),e=j.useRef(!1);return j.useEffect(()=>{if(e.current)return;e.current=!0;const i=s.current;if(!i)return;const r=new HR({alpha:!0,antialias:!1}),l=Math.min(window.devicePixelRatio,2);r.setPixelRatio(l),r.outputColorSpace=oi;const c=i.getBoundingClientRect();r.setSize(c.width,c.height),r.domElement.style.width="100%",r.domElement.style.height="100%",r.domElement.style.display="block",i.appendChild(r.domElement);const f=new WR(r,i,c.width,c.height),p=new Cx,m=new hu(-1,1,1,-1,0,1),h={u_time:{value:0},u_color1:{value:new Ut(58879)},u_color2:{value:new Ut(16711850)},u_color3:{value:new Ut(3342591)},u_mouse:{value:new bt(-1,-1)},u_resolution:{value:new bt(c.width*l,c.height*l)},u_amplitude:{value:.5},u_waveSpeed:{value:.8},u_distortion:{value:.6},u_complexity:{value:1},u_fluid:{value:null},u_mouseFluid:{value:new bt(.5,.5)},u_fluidInfluence:{value:.6}},_=new yi({vertexShader:kR,fragmentShader:XR,uniforms:h}),v=new Fi(new Ys(2,2),_);p.add(v);const g=new bt(.5,.5),M=new Fx;let E=!0;const R=U=>f.onPointerMove(U),x=()=>f.onPointerLeave();i.addEventListener("pointermove",R),i.addEventListener("pointerleave",x);function y(){if(!E)return;h.u_time.value=M.getElapsedTime();const U=f.update();h.u_fluid.value=U;const V=f.uniforms.iMouse.value,F=f.uniforms.uResolution.value;F.x>0&&F.y>0&&g.set(V.x/F.x,V.y/F.y),h.u_mouseFluid.value.lerp(g,.1),r.render(p,m),requestAnimationFrame(y)}y();const w=new IntersectionObserver(([U])=>{U.isIntersecting&&!E?(E=!0,M.start(),y()):U.isIntersecting||(E=!1)},{threshold:.1});w.observe(i);const N=()=>{const U=i.getBoundingClientRect();r.setSize(U.width,U.height),f.resize(U.width,U.height),h.u_resolution.value.set(U.width*l,U.height*l)};return window.addEventListener("resize",N),()=>{E=!1,window.removeEventListener("resize",N),i.removeEventListener("pointermove",R),i.removeEventListener("pointerleave",x),w.disconnect(),f.dispose(),_.dispose(),v.geometry.dispose(),r.dispose(),i.contains(r.domElement)&&i.removeChild(r.domElement)}},[]),B.jsx("div",{"code-path":"src/components/FluidAudioWaveform.tsx:427:5",ref:s,style:{position:"absolute",inset:0,zIndex:0,cursor:"crosshair"}})}function gu({left:s,right:e,transparent:i=!0}){const{t:r}=Wr();return B.jsxs("header",{"code-path":"src/components/Header.tsx:13:5",className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6",style:{height:48,backgroundColor:i?"transparent":"var(--bg-primary)",backdropFilter:i?"none":"blur(12px)",WebkitBackdropFilter:i?"none":"blur(12px)",transition:"background-color 0.2s ease"},children:[B.jsx("div",{"code-path":"src/components/Header.tsx:23:7",className:"flex items-center",children:s||B.jsx("span",{"code-path":"src/components/Header.tsx:25:11",className:"text-[var(--text-primary)] tracking-widest",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:14,fontWeight:600,letterSpacing:"2px",textTransform:"uppercase"},children:r("app.title")})}),B.jsx("div",{"code-path":"src/components/Header.tsx:39:7",className:"flex items-center gap-4",children:e||B.jsxs("span",{"code-path":"src/components/Header.tsx:41:11",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase"},children:["[ ",r("nav.cloneStudio")," ]"]})})]})}let ch=null;function Wx(){return ch||(ch=new AudioContext),ch}function qR(s,e,i,r){const l=Wx(),c=l.createOscillator(),f=l.createGain();c.type="sine",c.frequency.setValueAtTime(s,i),f.gain.setValueAtTime(0,i),f.gain.linearRampToValueAtTime(.15,i+.05),f.gain.setValueAtTime(.15,i+e-.05),f.gain.linearRampToValueAtTime(0,i+e),c.connect(f),f.connect(r),c.start(i),c.stop(i+e)}function YR(){const[s,e]=j.useState(!1),i=j.useRef([]),r=j.useRef(null),l=j.useCallback(()=>{try{const p=Wx();p.resume(),r.current&&r.current.disconnect();const m=p.createGain();m.gain.setValueAtTime(.3,p.currentTime),m.connect(p.destination),r.current=m,i.current=[];const h=[261.63,329.63,392,523.25,392,329.63,261.63,440,523.25,659.25],_=[.2,.2,.2,.3,.2,.2,.2,.3,.3,.5];let v=p.currentTime+.01;h.forEach((M,E)=>{qR(M,_[E],v,m),v+=_[E]}),e(!0);const g=_.reduce((M,E)=>M+E,0)*1e3;setTimeout(()=>{e(!1)},g)}catch{e(!1)}},[]),c=j.useCallback(()=>{if(r.current){try{r.current.disconnect()}catch{}r.current=null}i.current=[],e(!1)},[]),f=j.useCallback(()=>{s?c():l()},[s,l,c]);return{isPlaying:s,play:l,stop:c,toggle:f}}function ZR({clone:s,onDelete:e,onGenerate:i}){const[r,l]=j.useState(!1),{isPlaying:c,toggle:f}=YR(),{t:p}=Wr(),m=j.useRef(0),h=x=>{m.current=x.touches[0].clientX},_=x=>{const y=m.current-x.changedTouches[0].clientX;y>60?l(!0):y<-30&&l(!1)},v=x=>{m.current=x.clientX},g=x=>{const y=m.current-x.clientX;y>60?l(!0):y<-30&&l(!1)},M=s.status==="active"?p("card.active"):p("card.training"),E=s.status==="active"?"var(--accent-green-bg)":"var(--accent-yellow-bg)",R=s.status==="active"?"var(--accent-green)":"var(--accent-yellow)";return B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:50:5",className:"relative overflow-hidden select-none",style:{borderRadius:16},onTouchStart:h,onTouchEnd:_,onMouseDown:v,onMouseUp:g,children:[B.jsx("div",{"code-path":"src/components/VoiceCloneCard.tsx:59:7",className:"absolute inset-0 flex items-center justify-end px-6",style:{borderRadius:16,zIndex:1,backgroundColor:"var(--accent-red)"},children:B.jsxs("button",{"code-path":"src/components/VoiceCloneCard.tsx:63:9",onClick:()=>e(s.id),className:"flex items-center gap-2 text-white",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase"},children:[B.jsx(rx,{"code-path":"src/components/VoiceCloneCard.tsx:74:11",size:18}),p("card.delete")]})}),B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:80:7",className:"relative p-5 transition-transform duration-200",style:{borderRadius:16,zIndex:2,transform:r?"translateX(-100px)":"translateX(0)",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:[B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:92:9",className:"flex items-center justify-between mb-3",children:[B.jsx("span",{"code-path":"src/components/VoiceCloneCard.tsx:93:11",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:s.createdAt}),B.jsx("span",{"code-path":"src/components/VoiceCloneCard.tsx:104:11",className:"px-2 py-0.5 rounded-full",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",backgroundColor:E,color:R},children:M})]}),B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:121:9",className:"flex items-center gap-4 mb-4",children:[B.jsx("div",{"code-path":"src/components/VoiceCloneCard.tsx:122:11",className:"w-12 h-12 rounded-xl overflow-hidden flex-shrink-0",style:{border:"1px solid var(--border-color)"},children:B.jsx("img",{"code-path":"src/components/VoiceCloneCard.tsx:126:13",src:s.image,alt:s.name,className:"w-full h-full object-cover",draggable:!1,loading:"lazy"})}),B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:134:11",className:"flex-1 min-w-0",children:[B.jsx("h3",{"code-path":"src/components/VoiceCloneCard.tsx:135:13",className:"text-[var(--text-primary)] truncate",style:{fontSize:18,fontWeight:700,letterSpacing:"-0.5px",lineHeight:1.2},children:s.name}),B.jsx("span",{"code-path":"src/components/VoiceCloneCard.tsx:146:13",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px"},children:s.duration})]}),B.jsx("button",{"code-path":"src/components/VoiceCloneCard.tsx:157:11",onClick:x=>{x.stopPropagation(),f()},className:"w-10 h-10 rounded-full border flex items-center justify-center text-[var(--text-primary)] active:opacity-50 transition-opacity",style:{borderColor:"var(--border-color)",transitionDuration:"0.1s"},children:c?B.jsx(ix,{"code-path":"src/components/VoiceCloneCard.tsx:165:26",size:16}):B.jsx(ax,{"code-path":"src/components/VoiceCloneCard.tsx:165:48",size:16})})]}),B.jsxs("div",{"code-path":"src/components/VoiceCloneCard.tsx:170:9",className:"flex gap-2",children:[B.jsxs("button",{"code-path":"src/components/VoiceCloneCard.tsx:171:11",onClick:()=>i(s),className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:[B.jsx(sx,{"code-path":"src/components/VoiceCloneCard.tsx:185:13",size:13}),p("card.generate")]}),B.jsx("button",{"code-path":"src/components/VoiceCloneCard.tsx:188:11",className:"flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[var(--text-secondary)] active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"0.5px",borderColor:"var(--border-color)",transitionDuration:"0.1s"},children:B.jsx(pE,{"code-path":"src/components/VoiceCloneCard.tsx:199:13",size:13})}),B.jsx("button",{"code-path":"src/components/VoiceCloneCard.tsx:201:11",className:"flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[var(--text-secondary)] active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"0.5px",borderColor:"var(--border-color)",transitionDuration:"0.1s"},children:B.jsx(nx,{"code-path":"src/components/VoiceCloneCard.tsx:212:13",size:13})})]})]})]})}const op="echo_voice_clones",uh=[{id:"demo-1",name:"NEON_CYAN",image:"/voices/voice-1.jpg",status:"active",duration:"00:32",createdAt:"APR 24 / 14:02"},{id:"demo-2",name:"VIOLET_PULSE",image:"/voices/voice-2.jpg",status:"active",duration:"00:45",createdAt:"APR 23 / 09:15"},{id:"demo-3",name:"EMERALD_WAVE",image:"/voices/voice-3.jpg",status:"active",duration:"00:28",createdAt:"APR 22 / 18:40"}];function KR(){try{const s=localStorage.getItem(op);return s?JSON.parse(s):(localStorage.setItem(op,JSON.stringify(uh)),uh)}catch{return uh}}function JR(s){localStorage.setItem(op,JSON.stringify(s))}function jx(){const[s,e]=j.useState(KR);j.useEffect(()=>{JR(s)},[s]);const i=j.useCallback(c=>{const f={...c,id:`clone-${Date.now()}`,createdAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()+" / "+new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})};return e(p=>[f,...p]),f},[]),r=j.useCallback(c=>{e(f=>f.filter(p=>p.id!==c))},[]),l=j.useCallback((c,f)=>{e(p=>p.map(m=>m.id===c?{...m,...f}:m))},[]);return{clones:s,addClone:i,removeClone:r,updateClone:l}}function QR(){const s=ol(),{clones:e,removeClone:i}=jx(),{t:r,lang:l,setLang:c}=Wr(),{theme:f,toggleTheme:p}=ex();return B.jsxs("div",{"code-path":"src/screens/Dashboard.tsx:17:5",className:"min-h-screen",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[B.jsx(gu,{"code-path":"src/screens/Dashboard.tsx:18:7",right:B.jsxs("div",{"code-path":"src/screens/Dashboard.tsx:20:11",className:"flex items-center gap-3",children:[B.jsxs("button",{"code-path":"src/screens/Dashboard.tsx:21:13",onClick:()=>c(l==="en"?"ru":"en"),className:"flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",style:{transitionDuration:"0.1s"},title:"Switch language",children:[B.jsx(oE,{"code-path":"src/screens/Dashboard.tsx:27:15",size:14}),B.jsx("span",{"code-path":"src/screens/Dashboard.tsx:28:15",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.5px"},children:l.toUpperCase()})]}),B.jsx("button",{"code-path":"src/screens/Dashboard.tsx:32:13",onClick:p,className:"text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",style:{transitionDuration:"0.1s"},title:"Toggle theme",children:f==="dark"?B.jsx(mh,{"code-path":"src/screens/Dashboard.tsx:38:35",size:14}):B.jsx(ph,{"code-path":"src/screens/Dashboard.tsx:38:55",size:14})})]})}),B.jsxs("section",{"code-path":"src/screens/Dashboard.tsx:45:7",className:"relative w-full overflow-hidden",style:{height:"38vh",minHeight:260},children:[B.jsx(jR,{"code-path":"src/screens/Dashboard.tsx:49:9"}),B.jsxs("div",{"code-path":"src/screens/Dashboard.tsx:50:9",className:"absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none",children:[B.jsx("h1",{"code-path":"src/screens/Dashboard.tsx:51:11",className:"text-white text-center",style:{fontSize:"clamp(28px, 7vw, 56px)",fontWeight:700,letterSpacing:"-1.5px",lineHeight:1.1,textTransform:"uppercase",textShadow:"0 0 40px rgba(0,0,0,0.8)"},children:r("hero.title1")}),B.jsx("h1",{"code-path":"src/screens/Dashboard.tsx:64:11",className:"text-white text-center mt-1",style:{fontSize:"clamp(28px, 7vw, 56px)",fontWeight:700,letterSpacing:"-1.5px",lineHeight:1.1,textTransform:"uppercase",textShadow:"0 0 40px rgba(0,0,0,0.8)"},children:r("hero.title2")})]}),B.jsx("div",{"code-path":"src/screens/Dashboard.tsx:79:9",className:"absolute bottom-0 left-0 right-0 z-10 pointer-events-none",style:{height:80,background:"linear-gradient(to bottom, transparent, var(--bg-primary))"}})]}),B.jsxs("section",{"code-path":"src/screens/Dashboard.tsx:89:7",className:"px-4 sm:px-6 pb-36 max-w-lg mx-auto",children:[B.jsx("div",{"code-path":"src/screens/Dashboard.tsx:90:9",className:"flex items-center justify-between mb-4",children:B.jsxs("span",{"code-path":"src/screens/Dashboard.tsx:91:11",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase"},children:[e.length," ",r("dashboard.clonesAvailable")]})}),e.length===0?B.jsx("div",{"code-path":"src/screens/Dashboard.tsx:106:11",className:"flex flex-col items-center justify-center py-16 rounded-2xl",style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:B.jsx("p",{"code-path":"src/screens/Dashboard.tsx:113:13",className:"text-[var(--text-secondary)] text-center px-8",style:{fontSize:14},children:r("dashboard.noClones")})}):B.jsx("div",{"code-path":"src/screens/Dashboard.tsx:118:11",className:"flex flex-col gap-3",children:e.map(m=>B.jsx(ZR,{"code-path":"src/screens/Dashboard.tsx:120:15",clone:m,onDelete:i,onGenerate:h=>s("/tts",{state:{voiceId:h.id,voiceName:h.name,modelId:h.modelId}})},m.id))})]}),B.jsx("div",{"code-path":"src/screens/Dashboard.tsx:132:7",className:"fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-6",style:{paddingBottom:"max(20px, env(safe-area-inset-bottom))",paddingTop:16,background:"linear-gradient(to top, var(--bg-primary) 60%, transparent)"},children:B.jsxs("div",{"code-path":"src/screens/Dashboard.tsx:140:9",className:"max-w-lg mx-auto",children:[B.jsxs("button",{"code-path":"src/screens/Dashboard.tsx:141:11",onClick:()=>s("/create"),className:"w-full h-14 rounded-full flex items-center justify-center gap-2 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:[B.jsx(vE,{"code-path":"src/screens/Dashboard.tsx:155:13",size:18}),r("dashboard.createNew")]}),B.jsxs("div",{"code-path":"src/screens/Dashboard.tsx:159:11",className:"flex justify-center gap-8 mt-4",children:[B.jsxs("button",{"code-path":"src/screens/Dashboard.tsx:160:13",onClick:()=>s("/settings"),className:"flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",style:{transitionDuration:"0.1s"},children:[B.jsx(xE,{"code-path":"src/screens/Dashboard.tsx:165:15",size:20}),B.jsx("span",{"code-path":"src/screens/Dashboard.tsx:166:15",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.5px"},children:r("nav.settings")})]}),B.jsxs("button",{"code-path":"src/screens/Dashboard.tsx:176:13",className:"flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",style:{transitionDuration:"0.1s"},children:[B.jsx(cE,{"code-path":"src/screens/Dashboard.tsx:180:15",size:20}),B.jsx("span",{"code-path":"src/screens/Dashboard.tsx:181:15",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.5px"},children:r("nav.library")})]})]})]})})]})}function $R({isRecording:s,analyser:e}){const i=j.useRef(null),r=j.useRef(0),[l,c]=j.useState(!1);return j.useEffect(()=>{if(!s||!e){const _=i.current;if(!_)return;const v=_.getContext("2d");if(!v)return;const g=window.devicePixelRatio||1,M=_.getBoundingClientRect();_.width=M.width*g,_.height=M.height*g,v.scale(g,g),v.clearRect(0,0,M.width,M.height);const E=document.documentElement.classList.contains("light-theme");v.strokeStyle=E?"#cccccc":"#444444",v.lineWidth=1,v.beginPath(),v.moveTo(0,M.height/2),v.lineTo(M.width,M.height/2),v.stroke();return}c(!0);const f=i.current;if(!f)return;const p=f.getContext("2d");if(!p)return;const m=new Uint8Array(e.frequencyBinCount),h=()=>{r.current=requestAnimationFrame(h),e.getByteTimeDomainData(m);const _=window.devicePixelRatio||1,v=f.getBoundingClientRect();f.width=v.width*_,f.height=v.height*_,p.scale(_,_),p.clearRect(0,0,v.width,v.height),p.strokeStyle="var(--text-primary)",p.lineWidth=1.5,p.beginPath();const g=v.width/m.length;let M=0;for(let E=0;E<m.length;E++){const x=m[E]/128*v.height/2;E===0?p.moveTo(M,x):p.lineTo(M,x),M+=g}p.lineTo(v.width,v.height/2),p.stroke()};return h(),()=>{cancelAnimationFrame(r.current)}},[s,e]),B.jsxs("div",{"code-path":"src/components/RecordingVisualizer.tsx:88:5",className:"w-full relative",style:{height:100},children:[B.jsx("canvas",{"code-path":"src/components/RecordingVisualizer.tsx:89:7",ref:i,className:"w-full h-full",style:{display:"block"}}),!l&&s&&B.jsx("div",{"code-path":"src/components/RecordingVisualizer.tsx:95:9",className:"absolute inset-0 flex items-center justify-center",children:B.jsx("span",{"code-path":"src/components/RecordingVisualizer.tsx:96:11",className:"animate-pulse",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--text-secondary)"},children:"REQUESTING MIC..."})})]})}const qx="https://api.fish.audio/v1";function Yx(){return localStorage.getItem("fish_api_key")||""}function e3(s){localStorage.setItem("fish_api_key",s)}function Dp(){return localStorage.getItem("fish_api_key")||""}async function t3(s,e,i){const r=Yx();if(!r)throw new Error("API key not configured");const l=await fetch(`${qx}/tts`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({text:s,reference_id:e,format:"mp3",chunk_length:200,normalize:!0,latency:"normal",...i?.speed?{speed:i.speed}:{}})});if(!l.ok){const c=await l.json();throw new Error(c.message||"Failed to generate speech")}return l.blob()}async function n3(s,e){const i=Yx();if(!i)throw new Error("API key not configured");const r=new FormData;r.append("text",s),r.append("reference_audio",e),r.append("format","mp3");const l=await fetch(`${qx}/tts`,{method:"POST",headers:{Authorization:`Bearer ${i}`},body:r});if(!l.ok){const c=await l.json();throw new Error(c.message||"Failed to generate speech")}return l.blob()}function lp(s){return URL.createObjectURL(s)}function i3(s,e){const i=lp(s),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}function a3(){const s=ol(),{t:e}=Wr(),{addClone:i}=jx(),[r,l]=j.useState("select"),[c,f]=j.useState(!1),[p,m]=j.useState(0),[h,_]=j.useState(null),[v,g]=j.useState(""),[M,E]=j.useState(""),[R,x]=j.useState(0),[y,w]=j.useState(!1),[N,U]=j.useState(""),V=j.useRef(`file-${Date.now()}`),F=j.useRef(null),I=j.useRef([]),T=j.useRef(null),z=j.useRef(null),J=j.useRef(0),G=j.useCallback(async()=>{try{U("");const P=await navigator.mediaDevices.getUserMedia({audio:!0}),Q=new AudioContext,fe=Q.createMediaStreamSource(P),ye=Q.createAnalyser();ye.fftSize=2048,fe.connect(ye),z.current=ye;const L=new MediaRecorder(P,{mimeType:"audio/webm"});F.current=L,I.current=[],L.ondataavailable=Z=>{Z.data.size>0&&I.current.push(Z.data)},L.onstop=()=>{const Z=new Blob(I.current,{type:"audio/webm"});_(Z),P.getTracks().forEach(ve=>ve.stop()),Q.close()},L.onerror=()=>{U(e("create.micError")),f(!1)},L.start(100),f(!0),J.current=Date.now(),T.current=setInterval(()=>{m(Math.floor((Date.now()-J.current)/1e3))},100)}catch{U(e("create.micError"))}},[e]),$=j.useCallback(()=>{F.current&&c&&(F.current.stop(),f(!1),T.current&&clearInterval(T.current))},[c]),re=j.useCallback(P=>{if(U(""),!P.type.startsWith("audio/")&&!P.name.match(/\.(mp3|wav|m4a|ogg|webm|aac)$/i)){U(e("create.fileError"));return}_(P),g(P.name),l("upload")},[e]),he=j.useCallback(P=>{P.preventDefault(),P.stopPropagation(),w(!1);const Q=P.dataTransfer.files?.[0];Q&&re(Q)},[re]),k=j.useCallback(async()=>{if(!h)return;if(!M.trim()){U(e("create.nameError"));return}if(!Dp()){U(e("create.apiKeyError"));return}l("processing"),x(0),U(""),await new Promise(fe=>setTimeout(fe,1500)),x(1),await new Promise(fe=>setTimeout(fe,1500)),x(2),await new Promise(fe=>setTimeout(fe,1e3));const Q=p>0?`${Math.floor(p/60).toString().padStart(2,"0")}:${(p%60).toString().padStart(2,"0")}`:"00:32";i({name:M.toUpperCase(),image:"/voices/voice-1.jpg",status:"active",duration:Q}),s("/")},[h,M,p,i,s,e]),O=P=>{const Q=Math.floor(P/60),fe=P%60;return`${Q.toString().padStart(2,"0")}:${fe.toString().padStart(2,"0")}`};return B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:146:5",className:"min-h-screen",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[B.jsx(gu,{"code-path":"src/screens/CloneCreate.tsx:147:7",left:B.jsxs("button",{"code-path":"src/screens/CloneCreate.tsx:149:11",onClick:()=>s("/"),className:"flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",children:[B.jsx(_p,{"code-path":"src/screens/CloneCreate.tsx:150:13",size:14}),B.jsx("span",{"code-path":"src/screens/CloneCreate.tsx:151:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:e("nav.back")})]}),right:B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:155:11",onClick:()=>s("/"),className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:e("nav.cancel")}),transparent:!1}),B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:162:7",className:"pt-14 px-4 sm:px-6 pb-8 max-w-lg mx-auto",children:r==="processing"?B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:164:11",className:"flex flex-col items-center justify-center",style:{minHeight:"60vh"},children:B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:165:13",className:"w-full max-w-xs",children:[B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:166:15",className:"h-1 rounded-full overflow-hidden mb-6",style:{backgroundColor:"var(--border-color)"},children:B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:167:17",className:"h-full rounded-full transition-all",style:{width:R===0?"33%":R===1?"66%":"100%",transitionDuration:"0.5s",backgroundColor:"var(--text-primary)"}})}),B.jsxs("p",{"code-path":"src/screens/CloneCreate.tsx:176:15",className:"text-[var(--text-secondary)] text-center",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,letterSpacing:"0.5px",textTransform:"uppercase"},children:[R===0&&e("create.processing1"),R===1&&e("create.processing2"),R===2&&e("create.processing3")]})]})}):B.jsxs(B.Fragment,{children:[B.jsx("h2",{"code-path":"src/screens/CloneCreate.tsx:193:13",className:"mb-6",style:{fontSize:"clamp(22px, 5vw, 28px)",fontWeight:700,letterSpacing:"-1px",lineHeight:1.2,color:"var(--text-primary)"},children:e("create.title")}),r==="select"&&B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:208:15",className:"flex flex-col gap-3",children:[B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:209:17",onClick:()=>l("upload"),className:"w-full p-5 sm:p-6 rounded-2xl text-left active:transition-colors",style:{transitionDuration:"0.1s",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:218:19",className:"flex items-start gap-4",children:[B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:219:21",className:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",style:{backgroundColor:"var(--bg-elevated)"},children:B.jsx(TE,{"code-path":"src/screens/CloneCreate.tsx:223:23",size:22,style:{color:"var(--text-primary)"}})}),B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:225:21",children:[B.jsx("h3",{"code-path":"src/screens/CloneCreate.tsx:226:23",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--text-primary)"},children:e("create.uploadAudio")}),B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:238:23",className:"mt-1",style:{fontSize:13,color:"var(--text-secondary)"},children:e("create.uploadDesc")})]})]})}),B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:245:17",onClick:()=>{l("record"),setTimeout(G,100)},className:"w-full p-5 sm:p-6 rounded-2xl text-left active:transition-colors",style:{transitionDuration:"0.1s",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:254:19",className:"flex items-start gap-4",children:[B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:255:21",className:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",style:{backgroundColor:"var(--bg-elevated)"},children:B.jsx(Lv,{"code-path":"src/screens/CloneCreate.tsx:259:23",size:22,style:{color:"var(--text-primary)"}})}),B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:261:21",children:[B.jsx("h3",{"code-path":"src/screens/CloneCreate.tsx:262:23",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--text-primary)"},children:e("create.recordLive")}),B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:274:23",className:"mt-1",style:{fontSize:13,color:"var(--text-secondary)"},children:e("create.recordDesc")})]})]})})]}),r==="upload"&&!h&&B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:285:15",onDragOver:P=>{P.preventDefault(),P.stopPropagation(),w(!0)},onDragLeave:P=>{P.preventDefault(),P.stopPropagation(),w(!1)},onDrop:he,className:"w-full border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-8 transition-colors cursor-pointer",style:{borderColor:y?"var(--text-primary)":"var(--border-color)",backgroundColor:y?"var(--bg-elevated)":"var(--bg-card)",minHeight:200,transitionDuration:"0.1s"},onClick:()=>document.getElementById(V.current)?.click(),children:[B.jsx(tE,{"code-path":"src/screens/CloneCreate.tsx:298:17",size:32,style:{color:"var(--text-secondary)",marginBottom:12}}),B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:299:17",style:{fontSize:14,color:"var(--text-secondary)",textAlign:"center"},children:e("create.dropHint")}),B.jsx("span",{"code-path":"src/screens/CloneCreate.tsx:302:17",className:"mt-2 underline cursor-pointer",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--text-primary)"},children:e("create.browseFiles")}),B.jsx("input",{"code-path":"src/screens/CloneCreate.tsx:314:17",id:V.current,type:"file",accept:"audio/*,.mp3,.wav,.m4a,.ogg,.aac",className:"hidden",onChange:P=>{const Q=P.target.files?.[0];Q&&re(Q),P.target.value=""}})]}),r==="record"&&B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:330:15",className:"flex flex-col items-center",children:[B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:332:17",className:"w-full rounded-xl mb-6",style:{backgroundColor:"var(--bg-primary)",border:"1px solid var(--border-color)"},children:B.jsx($R,{"code-path":"src/screens/CloneCreate.tsx:339:19",isRecording:c,analyser:z.current})}),B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:343:17",className:"w-full p-4 rounded-xl mb-6",style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:350:19",style:{fontSize:15,lineHeight:1.6,color:"var(--text-secondary)"},children:e("create.sampleText")})}),B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:356:17",className:"mb-4",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"clamp(24px, 6vw, 32px)",fontWeight:500,letterSpacing:"2px",color:"var(--text-primary)"},children:c?O(p):"00:00"}),B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:370:17",className:"flex items-center gap-6",children:c?B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:372:21",onClick:$,className:"w-20 h-20 rounded-full border-2 flex items-center justify-center active:opacity-50 transition-opacity",style:{transitionDuration:"0.1s",borderColor:"var(--text-primary)"},children:B.jsx("div",{"code-path":"src/screens/CloneCreate.tsx:380:23",className:"w-6 h-6 rounded",style:{backgroundColor:"var(--accent-red)"}})}):B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:383:21",onClick:G,className:"w-20 h-20 rounded-full border-2 flex items-center justify-center active:opacity-50 transition-opacity",style:{transitionDuration:"0.1s",borderColor:"var(--text-tertiary)"},children:B.jsx(Lv,{"code-path":"src/screens/CloneCreate.tsx:391:23",size:28,style:{color:"var(--text-primary)"}})})}),!c&&p>0&&B.jsx("button",{"code-path":"src/screens/CloneCreate.tsx:397:19",onClick:()=>_(new Blob(I.current,{type:"audio/webm"})),className:"mt-6 px-6 py-3 rounded-full active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:e("create.useRecording")})]}),h&&B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:419:15",className:"mt-6",children:[B.jsxs("div",{"code-path":"src/screens/CloneCreate.tsx:420:17",className:"flex items-center gap-2 mb-4",children:[B.jsx(Nv,{"code-path":"src/screens/CloneCreate.tsx:421:19",size:16,style:{color:"var(--accent-green)"}}),B.jsxs("span",{"code-path":"src/screens/CloneCreate.tsx:422:19",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--accent-green)"},children:[e("create.audioCaptured"),v&&` - ${v}`]})]}),B.jsx("input",{"code-path":"src/screens/CloneCreate.tsx:436:17",type:"text",value:M,onChange:P=>E(P.target.value),placeholder:e("create.namePlaceholder"),className:"w-full rounded-xl px-4 py-3 outline-none transition-colors",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:14,letterSpacing:"0.5px",transitionDuration:"0.1s",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},onFocus:P=>{P.target.style.borderColor="var(--text-secondary)"},onBlur:P=>{P.target.style.borderColor="var(--border-color)"}}),N&&B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:456:19",className:"mt-2",style:{fontSize:12,color:"var(--accent-red)"},children:N}),B.jsxs("button",{"code-path":"src/screens/CloneCreate.tsx:461:17",onClick:k,className:"w-full h-14 rounded-full flex items-center justify-center gap-2 mt-6 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:[B.jsx(Nv,{"code-path":"src/screens/CloneCreate.tsx:475:19",size:18}),e("create.createBtn")]}),B.jsxs("button",{"code-path":"src/screens/CloneCreate.tsx:479:17",onClick:()=>{_(null),g(""),U(""),l("select")},className:"w-full h-14 rounded-full flex items-center justify-center gap-2 mt-3 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",border:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:[B.jsx(RE,{"code-path":"src/screens/CloneCreate.tsx:493:19",size:18}),e("create.startOver")]})]}),N&&!h&&B.jsx("p",{"code-path":"src/screens/CloneCreate.tsx:500:15",className:"mt-4 text-center",style:{fontSize:13,color:"var(--accent-red)"},children:N})]})})]})}function r3(s){const[e,i]=j.useState(!1),[r,l]=j.useState(0),[c,f]=j.useState(0),[p,m]=j.useState(0),h=j.useRef(null);j.useEffect(()=>{if(!s){h.current&&(h.current.pause(),h.current.src="",h.current=null),i(!1),l(0),f(0),m(0);return}const E=new Audio(s);h.current=E;const R=()=>m(E.duration),x=()=>{f(E.currentTime),E.duration>0&&l(E.currentTime/E.duration*100)},y=()=>{i(!1),l(0),f(0)},w=()=>{i(!1)};return E.addEventListener("loadedmetadata",R),E.addEventListener("timeupdate",x),E.addEventListener("ended",y),E.addEventListener("error",w),()=>{E.pause(),E.src="",E.removeEventListener("loadedmetadata",R),E.removeEventListener("timeupdate",x),E.removeEventListener("ended",y),E.removeEventListener("error",w)}},[s]);const _=j.useCallback(()=>{h.current&&(h.current.play().catch(()=>{}),i(!0))},[]),v=j.useCallback(()=>{h.current&&(h.current.pause(),i(!1))},[]),g=j.useCallback(()=>{e?v():_()},[e,_,v]),M=j.useCallback(E=>{if(!h.current||!p)return;const R=E/100*p;h.current.currentTime=R,l(E),f(R)},[p]);return{isPlaying:e,progress:r,currentTime:c,duration:p,togglePlay:g,play:_,pause:v,seekTo:M}}function s3({audioUrl:s,title:e,onExport:i}){const{t:r}=Wr(),{isPlaying:l,progress:c,currentTime:f,togglePlay:p,seekTo:m}=r3(s),h=_=>{const v=Math.floor(_/60),g=Math.floor(_%60);return`${v.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`};return B.jsxs("div",{"code-path":"src/components/AudioPlayer.tsx:22:5",className:"w-full rounded-2xl p-4",style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:[B.jsxs("div",{"code-path":"src/components/AudioPlayer.tsx:29:7",className:"flex items-center gap-3 mb-3",children:[B.jsx("button",{"code-path":"src/components/AudioPlayer.tsx:30:9",onClick:p,className:"w-12 h-12 rounded-full flex items-center justify-center active:opacity-50 transition-opacity flex-shrink-0",style:{transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:l?B.jsx(ix,{"code-path":"src/components/AudioPlayer.tsx:39:24",size:18}):B.jsx(ax,{"code-path":"src/components/AudioPlayer.tsx:39:46",size:18,className:"ml-0.5"})}),B.jsxs("div",{"code-path":"src/components/AudioPlayer.tsx:41:9",className:"flex-1 min-w-0",children:[e&&B.jsx("p",{"code-path":"src/components/AudioPlayer.tsx:43:13",className:"text-[var(--text-primary)] truncate",style:{fontSize:13,fontWeight:600,letterSpacing:"-0.2px"},children:e}),B.jsxs("div",{"code-path":"src/components/AudioPlayer.tsx:54:11",className:"flex items-center gap-2 mt-1",children:[B.jsx("input",{"code-path":"src/components/AudioPlayer.tsx:55:13",type:"range",min:0,max:100,value:c,onChange:_=>m(parseFloat(_.target.value)),className:"flex-1 appearance-none outline-none",style:{height:4,borderRadius:2,backgroundImage:`linear-gradient(to right, var(--text-primary) ${c}%, var(--border-color) ${c}%)`}}),B.jsx("span",{"code-path":"src/components/AudioPlayer.tsx:68:13",className:"text-[var(--text-secondary)] flex-shrink-0",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.5px"},children:h(f)})]})]})]}),B.jsxs("div",{"code-path":"src/components/AudioPlayer.tsx:82:7",className:"flex gap-2",children:[B.jsxs("button",{"code-path":"src/components/AudioPlayer.tsx:83:9",onClick:i,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:500,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",borderColor:"var(--border-color)",color:"var(--text-secondary)"},children:[B.jsx(nx,{"code-path":"src/components/AudioPlayer.tsx:97:11",size:12}),r("player.export")]}),B.jsxs("button",{"code-path":"src/components/AudioPlayer.tsx:100:9",onClick:()=>window.open("https://suno.com","_blank"),className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:500,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",borderColor:"var(--border-color)",color:"var(--text-secondary)"},children:[B.jsx($1,{"code-path":"src/components/AudioPlayer.tsx:114:11",size:12}),r("player.useInSuno")]})]})]})}function o3(){const[s,e]=j.useState(!1),[i,r]=j.useState(null),l=j.useCallback(async(f,p,m)=>{e(!0),r(null);try{const h=await t3(f,p,m),_=lp(h);return{id:`tts-${Date.now()}`,audioUrl:_,duration:0,text:f,voiceName:p,createdAt:new Date().toISOString()}}catch(h){return r(h instanceof Error?h.message:"Generation failed"),null}finally{e(!1)}},[]),c=j.useCallback(async(f,p)=>{e(!0),r(null);try{const m=await n3(f,p),h=lp(m);return{id:`tts-${Date.now()}`,audioUrl:h,duration:0,text:f,voiceName:p.name,createdAt:new Date().toISOString()}}catch(m){return r(m instanceof Error?m.message:"Generation failed"),null}finally{e(!1)}},[]);return{synthesize:l,synthesizeWithFile:c,isGenerating:s,error:i}}function l3(){const s=ol(),i=Ji().state,{t:r}=Wr(),[l,c]=j.useState(""),[f,p]=j.useState(1),[m,h]=j.useState(.5),[_,v]=j.useState(.5),[g,M]=j.useState(null),[E,R]=j.useState(!1),[x,y]=j.useState(null),{synthesize:w,isGenerating:N,error:U}=o3(),V=Dp(),F=async()=>{if(l.trim()&&V)try{const re=new AudioContext,he=Math.min(l.length*.08,10),k=re.sampleRate,O=he*k,P=re.createBuffer(1,O,k),Q=P.getChannelData(0);for(let L=0;L<O;L++){const Z=L/k,ve=200+Math.sin(Z*3)*50;Q[L]=Math.sin(2*Math.PI*ve*Z)*.3*Math.exp(-Z*.3),Q[L]+=Math.sin(2*Math.PI*ve*2*Z)*.1*Math.exp(-Z*.5),Q[L]*=Math.min(1,Z*10)*Math.min(1,(he-Z)*2)}const fe=I(P),ye=URL.createObjectURL(fe);M(ye),y(fe),re.close()}catch{const re=await w(l,i?.voiceId||"default",{speed:f});re?.audioUrl&&M(re.audioUrl)}},I=re=>{const he=re.length,k=re.numberOfChannels,O=re.sampleRate,P=new ArrayBuffer(44+he*k*2),Q=new DataView(P),fe=(Z,ve)=>{for(let Ae=0;Ae<ve.length;Ae++)Q.setUint8(Z+Ae,ve.charCodeAt(Ae))};fe(0,"RIFF"),Q.setUint32(4,36+he*k*2,!0),fe(8,"WAVE"),fe(12,"fmt "),Q.setUint32(16,16,!0),Q.setUint16(20,1,!0),Q.setUint16(22,k,!0),Q.setUint32(24,O,!0),Q.setUint32(28,O*k*2,!0),Q.setUint16(32,k*2,!0),Q.setUint16(34,16,!0),fe(36,"data"),Q.setUint32(40,he*k*2,!0);const ye=re.getChannelData(0);let L=44;for(let Z=0;Z<he;Z++){const ve=Math.max(-1,Math.min(1,ye[Z]));Q.setInt16(L,ve<0?ve*32768:ve*32767,!0),L+=2}return new Blob([P],{type:"audio/wav"})},T=async()=>{try{const re=await navigator.clipboard.readText();c(re)}catch{}},z=()=>{if(x)i3(x,`echo-tts-${Date.now()}.wav`);else if(g){const re=document.createElement("a");re.href=g,re.download=`echo-tts-${Date.now()}.wav`,re.click()}},J=l.length,G=500,$=r(E?"tts.hideSettings":"tts.showSettings");return B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:135:5",className:"min-h-screen flex flex-col",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[B.jsx(gu,{"code-path":"src/screens/TTSScreen.tsx:139:7",left:B.jsxs("button",{"code-path":"src/screens/TTSScreen.tsx:141:11",onClick:()=>s("/"),className:"flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",children:[B.jsx(_p,{"code-path":"src/screens/TTSScreen.tsx:142:13",size:14}),B.jsx("span",{"code-path":"src/screens/TTSScreen.tsx:143:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:r("nav.back")})]}),right:B.jsx("span",{"code-path":"src/screens/TTSScreen.tsx:147:11",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:i?.voiceName?`VOICE: ${i.voiceName}`:r("tts.title")}),transparent:!1}),B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:154:7",className:"flex-1 flex flex-col px-4 sm:px-6 pt-14 pb-6 max-w-lg mx-auto w-full",children:[B.jsx("div",{"code-path":"src/screens/TTSScreen.tsx:156:9",className:"flex justify-end mb-2",children:B.jsxs("button",{"code-path":"src/screens/TTSScreen.tsx:157:11",onClick:T,className:"flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s"},children:[B.jsx(K1,{"code-path":"src/screens/TTSScreen.tsx:168:13",size:12}),r("tts.paste")]})}),B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:174:9",className:"flex-1 relative min-h-[200px]",children:[B.jsx("textarea",{"code-path":"src/screens/TTSScreen.tsx:175:11",value:l,onChange:re=>{re.target.value.length<=G&&c(re.target.value)},placeholder:r("tts.placeholder"),className:"w-full h-full bg-transparent outline-none resize-none",style:{fontSize:"clamp(20px, 4vw, 30px)",fontWeight:500,letterSpacing:"-0.5px",lineHeight:1.4,color:"var(--text-primary)",minHeight:200}}),B.jsx("div",{"code-path":"src/screens/TTSScreen.tsx:193:11",className:"absolute bottom-0 right-0",children:B.jsxs("span",{"code-path":"src/screens/TTSScreen.tsx:194:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",color:"var(--text-secondary)"},children:[J,"/",G]})})]}),!V&&B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:209:11",className:"flex items-center gap-2 px-4 py-3 rounded-xl mb-4",style:{backgroundColor:"rgba(250,204,21,0.1)",border:"1px solid rgba(250,204,21,0.3)"},children:[B.jsx(Y1,{"code-path":"src/screens/TTSScreen.tsx:213:13",size:16,className:"text-yellow-400 flex-shrink-0"}),B.jsx("p",{"code-path":"src/screens/TTSScreen.tsx:214:13",style:{fontSize:12,color:"#facc15"},children:r("tts.apiKeyWarning")})]}),B.jsx("button",{"code-path":"src/screens/TTSScreen.tsx:221:9",onClick:()=>R(!E),className:"w-full py-3 text-left active:text-[var(--text-primary)] transition-colors mb-3",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",color:"var(--text-secondary)"},children:$}),E&&B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:238:11",className:"space-y-4 mb-4 p-4 rounded-xl",style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:[B.jsx(fh,{"code-path":"src/screens/TTSScreen.tsx:239:13",label:r("tts.speed"),value:f,min:.5,max:2,step:.1,onChange:p,suffix:"x"}),B.jsx(fh,{"code-path":"src/screens/TTSScreen.tsx:240:13",label:r("tts.stability"),value:m,min:0,max:1,step:.01,onChange:h,suffix:"%",scale:100}),B.jsx(fh,{"code-path":"src/screens/TTSScreen.tsx:241:13",label:r("tts.style"),value:_,min:0,max:1,step:.01,onChange:v,suffix:"%",scale:100})]}),U&&B.jsx("p",{"code-path":"src/screens/TTSScreen.tsx:247:11",className:"mb-3",style:{fontSize:12,color:"var(--accent-red)"},children:U}),g&&B.jsx("div",{"code-path":"src/screens/TTSScreen.tsx:254:11",className:"mb-4",children:B.jsx(s3,{"code-path":"src/screens/TTSScreen.tsx:255:13",audioUrl:g,title:r("player.generated"),onExport:z})}),B.jsx("button",{"code-path":"src/screens/TTSScreen.tsx:264:9",onClick:F,disabled:!l.trim()||N,className:"w-full h-14 rounded-full flex items-center justify-center gap-2 disabled:opacity-30 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--text-primary)",color:"var(--bg-primary)"},children:N?B.jsxs(B.Fragment,{children:[B.jsx("div",{"code-path":"src/screens/TTSScreen.tsx:281:15",className:"w-4 h-4 border-2 rounded-full animate-spin",style:{borderColor:"var(--bg-primary)",borderTopColor:"transparent"}}),r("tts.generating")]}):B.jsxs(B.Fragment,{children:[B.jsx(sx,{"code-path":"src/screens/TTSScreen.tsx:286:15",size:18}),r("tts.generate")]})})]})]})}function fh({label:s,value:e,min:i,max:r,step:l,onChange:c,suffix:f,scale:p=1}){const m=Math.round(e*p),h=(e-i)/(r-i)*100;return B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:311:5",children:[B.jsxs("div",{"code-path":"src/screens/TTSScreen.tsx:312:7",className:"flex justify-between mb-1",children:[B.jsx("span",{"code-path":"src/screens/TTSScreen.tsx:313:9",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--text-secondary)"},children:s}),B.jsxs("span",{"code-path":"src/screens/TTSScreen.tsx:316:9",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:"var(--text-primary)"},children:[p===1?e.toFixed(l<.1?1:0):m,f]})]}),B.jsx("input",{"code-path":"src/screens/TTSScreen.tsx:320:7",type:"range",min:i,max:r,step:l,value:e,onChange:_=>c(parseFloat(_.target.value)),className:"w-full appearance-none outline-none",style:{height:4,borderRadius:2,backgroundImage:`linear-gradient(to right, var(--text-primary) ${h}%, var(--border-color) ${h}%)`}})]})}function c3(){const s=ol(),{t:e,lang:i,setLang:r}=Wr(),{theme:l,setTheme:c}=ex(),[f,p]=j.useState(Dp()),[m,h]=j.useState(!1),_=g=>{p(g),e3(g)},v=()=>{localStorage.removeItem("echo_voice_clones"),h(!1),s("/")};return B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:29:5",className:"min-h-screen",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[B.jsx(gu,{"code-path":"src/screens/SettingsScreen.tsx:30:7",left:B.jsxs("button",{"code-path":"src/screens/SettingsScreen.tsx:32:11",onClick:()=>s("/"),className:"flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors",children:[B.jsx(_p,{"code-path":"src/screens/SettingsScreen.tsx:33:13",size:14}),B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:34:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:e("nav.back")})]}),right:B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:38:11",className:"text-[var(--text-secondary)]",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase"},children:e("nav.settings")}),transparent:!1}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:45:7",className:"pt-14 px-4 sm:px-6 pb-8 max-w-lg mx-auto",children:[B.jsx("h2",{"code-path":"src/screens/SettingsScreen.tsx:46:9",className:"mb-8",style:{fontSize:"clamp(24px, 5vw, 32px)",fontWeight:700,letterSpacing:"-1px",lineHeight:1.2,color:"var(--text-primary)"},children:e("settings.title")}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:60:9",className:"mb-8",children:[B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:61:11",className:"flex items-center gap-2 mb-3",children:[B.jsx(iE,{"code-path":"src/screens/SettingsScreen.tsx:62:13",size:16,style:{color:"var(--text-secondary)"}}),B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:63:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase",color:"var(--text-secondary)"},children:e("settings.language")})]}),B.jsx("div",{"code-path":"src/screens/SettingsScreen.tsx:76:11",className:"flex gap-2",children:["en","ru"].map(g=>B.jsx("button",{"code-path":"src/screens/SettingsScreen.tsx:78:15",onClick:()=>r(g),className:"flex-1 h-12 rounded-xl flex items-center justify-center gap-2 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.5px",transitionDuration:"0.1s",backgroundColor:i===g?"var(--text-primary)":"var(--bg-card)",color:i===g?"var(--bg-primary)":"var(--text-secondary)",border:i===g?"none":"1px solid var(--border-color)"},children:g==="en"?"English":"Русский"},g))})]}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:100:9",className:"mb-8",children:[B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:101:11",className:"flex items-center gap-2 mb-3",children:[l==="dark"?B.jsx(ph,{"code-path":"src/screens/SettingsScreen.tsx:102:33",size:16,style:{color:"var(--text-secondary)"}}):B.jsx(mh,{"code-path":"src/screens/SettingsScreen.tsx:102:97",size:16,style:{color:"var(--text-secondary)"}}),B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:103:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase",color:"var(--text-secondary)"},children:e("settings.theme")})]}),B.jsx("div",{"code-path":"src/screens/SettingsScreen.tsx:116:11",className:"flex gap-2",children:[{key:"dark",label:e("settings.dark"),icon:ph},{key:"light",label:e("settings.light"),icon:mh}].map(({key:g,label:M,icon:E})=>B.jsxs("button",{"code-path":"src/screens/SettingsScreen.tsx:121:15",onClick:()=>c(g),className:"flex-1 h-12 rounded-xl flex items-center justify-center gap-2 active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,fontWeight:600,letterSpacing:"0.5px",transitionDuration:"0.1s",backgroundColor:l===g?"var(--text-primary)":"var(--bg-card)",color:l===g?"var(--bg-primary)":"var(--text-secondary)",border:l===g?"none":"1px solid var(--border-color)"},children:[B.jsx(E,{"code-path":"src/screens/SettingsScreen.tsx:136:17",size:14}),M]},g))})]}),B.jsx("div",{"code-path":"src/screens/SettingsScreen.tsx:144:9",className:"h-px mb-8",style:{backgroundColor:"var(--border-color)"}}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:147:9",className:"mb-8",children:[B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:148:11",className:"flex items-center gap-2 mb-3",children:[B.jsx(rE,{"code-path":"src/screens/SettingsScreen.tsx:149:13",size:16,style:{color:"var(--text-secondary)"}}),B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:150:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase",color:"var(--text-secondary)"},children:e("settings.apiKey")})]}),B.jsxs("p",{"code-path":"src/screens/SettingsScreen.tsx:164:11",className:"mb-3",style:{fontSize:13,lineHeight:1.5,color:"var(--text-secondary)"},children:[e("settings.apiKeyDesc")," ",B.jsx("a",{"code-path":"src/screens/SettingsScreen.tsx:166:13",href:"https://fish.audio",target:"_blank",rel:"noopener noreferrer",className:"underline",style:{color:"var(--text-primary)"},children:"fish.audio"})]}),B.jsx("input",{"code-path":"src/screens/SettingsScreen.tsx:177:11",type:"password",value:f,onChange:g=>_(g.target.value),placeholder:"sk-...",className:"w-full rounded-xl px-4 py-3 outline-none transition-colors",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:13,letterSpacing:"0.5px",transitionDuration:"0.1s",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},onFocus:g=>{g.target.style.borderColor="var(--text-secondary)"},onBlur:g=>{g.target.style.borderColor="var(--border-color)"}}),f&&B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:197:13",className:"mt-2",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",color:"var(--accent-green)"},children:e("settings.apiKeySaved")})]}),B.jsx("div",{"code-path":"src/screens/SettingsScreen.tsx:213:9",className:"h-px mb-8",style:{backgroundColor:"var(--border-color)"}}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:216:9",children:[B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:217:11",className:"flex items-center gap-2 mb-3",children:[B.jsx(rx,{"code-path":"src/screens/SettingsScreen.tsx:218:13",size:16,style:{color:"var(--text-secondary)"}}),B.jsx("span",{"code-path":"src/screens/SettingsScreen.tsx:219:13",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:500,letterSpacing:"1px",textTransform:"uppercase",color:"var(--text-secondary)"},children:e("settings.dataManagement")})]}),m?B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:251:13",className:"p-4 rounded-xl",style:{backgroundColor:"rgba(239,68,68,0.05)",border:"1px solid rgba(239,68,68,0.2)"},children:[B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:252:15",className:"flex items-center gap-2 mb-3",children:[B.jsx(EE,{"code-path":"src/screens/SettingsScreen.tsx:253:17",size:16,style:{color:"var(--accent-red)"}}),B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:254:17",style:{fontSize:13,fontWeight:600,color:"var(--accent-red)"},children:e("settings.deleteConfirm")})]}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:258:15",className:"flex gap-3",children:[B.jsx("button",{"code-path":"src/screens/SettingsScreen.tsx:259:17",onClick:v,className:"flex-1 h-10 rounded-lg text-white active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",backgroundColor:"var(--accent-red)"},children:e("settings.deleteAllBtn")}),B.jsx("button",{"code-path":"src/screens/SettingsScreen.tsx:274:17",onClick:()=>h(!1),className:"flex-1 h-10 rounded-lg active:opacity-50 transition-opacity",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,fontWeight:600,letterSpacing:"0.5px",textTransform:"uppercase",transitionDuration:"0.1s",border:"1px solid var(--border-color)",color:"var(--text-secondary)",backgroundColor:"var(--bg-card)"},children:e("nav.cancel")})]})]}):B.jsxs("button",{"code-path":"src/screens/SettingsScreen.tsx:234:13",onClick:()=>h(!0),className:"w-full p-4 rounded-xl text-left active:opacity-50 transition-opacity",style:{transitionDuration:"0.1s",backgroundColor:"var(--bg-card)",border:"1px solid var(--border-color)"},children:[B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:243:15",style:{fontSize:14,fontWeight:500,color:"var(--accent-red)"},children:e("settings.deleteAll")}),B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:246:15",className:"mt-1",style:{fontSize:12,color:"var(--text-secondary)"},children:e("settings.deleteDesc")})]})]}),B.jsxs("div",{"code-path":"src/screens/SettingsScreen.tsx:297:9",className:"mt-12 text-center",children:[B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:298:11",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:"var(--text-tertiary)"},children:e("settings.version")}),B.jsx("p",{"code-path":"src/screens/SettingsScreen.tsx:309:11",className:"mt-1",style:{fontSize:11,color:"var(--text-tertiary)"},children:e("settings.poweredBy")})]})]})]})}function u3(){return B.jsx(I1,{"code-path":"src/App.tsx:11:5",children:B.jsx(B1,{"code-path":"src/App.tsx:12:7",children:B.jsxs(i1,{"code-path":"src/App.tsx:13:9",children:[B.jsx($o,{"code-path":"src/App.tsx:14:11",path:"/",element:B.jsx(QR,{"code-path":"src/App.tsx:14:36"})}),B.jsx($o,{"code-path":"src/App.tsx:15:11",path:"/create",element:B.jsx(a3,{"code-path":"src/App.tsx:15:42"})}),B.jsx($o,{"code-path":"src/App.tsx:16:11",path:"/tts",element:B.jsx(l3,{"code-path":"src/App.tsx:16:39"})}),B.jsx($o,{"code-path":"src/App.tsx:17:11",path:"/settings",element:B.jsx(c3,{"code-path":"src/App.tsx:17:44"})})]})})})}sM.createRoot(document.getElementById("root")).render(B.jsx(C1,{"code-path":"src/main.tsx:7:3",children:B.jsx(u3,{"code-path":"src/main.tsx:8:5"})}));
