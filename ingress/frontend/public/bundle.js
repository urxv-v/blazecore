var w0=Object.create;var ni=Object.defineProperty;var k0=Object.getOwnPropertyDescriptor;var P0=Object.getOwnPropertyNames;var R0=Object.getPrototypeOf,T0=Object.prototype.hasOwnProperty;var ta=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),F0=(e,t)=>{for(var a in t)ni(e,a,{get:t[a],enumerable:!0})},E0=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of P0(t))!T0.call(e,o)&&o!==a&&ni(e,o,{get:()=>t[o],enumerable:!(r=k0(t,o))||r.enumerable});return e};var H=(e,t,a)=>(a=e!=null?w0(R0(e)):{},E0(t||!e||!e.__esModule?ni(a,"default",{value:e,enumerable:!0}):a,e));var Cc=ta(K=>{"use strict";var zo=Symbol.for("react.element"),M0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),D0=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),_0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),cc=Symbol.iterator;function q0(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,hc={};function Ur(e,t,a){this.props=e,this.context=t,this.refs=hc,this.updater=a||mc}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=Ur.prototype;function si(e,t,a){this.props=e,this.context=t,this.refs=hc,this.updater=a||mc}var ii=si.prototype=new xc;ii.constructor=si;gc(ii,Ur.prototype);ii.isPureReactComponent=!0;var fc=Array.isArray,yc=Object.prototype.hasOwnProperty,ui={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,a){var r,o={},n=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(n=""+t.key),t)yc.call(t,r)&&!vc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var i=Array(s),u=0;u<s;u++)i[u]=arguments[u+2];o.children=i}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:zo,type:e,key:n,ref:l,props:o,_owner:ui.current}}function W0(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function di(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function V0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var pc=/\/+/g;function li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V0(""+e.key):t.toString(36)}function gl(e,t,a,r,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(n){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zo:case M0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+li(l,0):r,fc(o)?(a="",e!=null&&(a=e.replace(pc,"$&/")+"/"),gl(o,t,a,"",function(u){return u})):o!=null&&(di(o)&&(o=W0(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(pc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",fc(e))for(var s=0;s<e.length;s++){n=e[s];var i=r+li(n,s);l+=gl(n,t,a,i,o)}else if(i=q0(e),typeof i=="function")for(e=i.call(e),s=0;!(n=e.next()).done;)n=n.value,i=r+li(n,s++),l+=gl(n,t,a,i,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ml(e,t,a){if(e==null)return e;var r=[],o=0;return gl(e,r,"","",function(n){return t.call(a,n,o++)}),r}function j0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},hl={transition:null},G0={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:hl,ReactCurrentOwner:ui};function Sc(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ml,forEach:function(e,t,a){ml(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return ml(e,function(){t++}),t},toArray:function(e){return ml(e,function(t){return t})||[]},only:function(e){if(!di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Ur;K.Fragment=A0;K.Profiler=B0;K.PureComponent=si;K.StrictMode=D0;K.Suspense=U0;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0;K.act=Sc;K.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),o=e.key,n=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,l=ui.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)yc.call(t,i)&&!vc.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=a;else if(1<i){s=Array(i);for(var u=0;u<i;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:zo,type:e.type,key:o,ref:n,props:r,_owner:l}};K.createContext=function(e){return e={$$typeof:N0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z0,_context:e},e.Consumer=e};K.createElement=Lc;K.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:O0,render:e}};K.isValidElement=di;K.lazy=function(e){return{$$typeof:H0,_payload:{_status:-1,_result:e},_init:j0}};K.memo=function(e,t){return{$$typeof:_0,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=hl.transition;hl.transition={};try{e()}finally{hl.transition=t}};K.unstable_act=Sc;K.useCallback=function(e,t){return qe.current.useCallback(e,t)};K.useContext=function(e){return qe.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};K.useEffect=function(e,t){return qe.current.useEffect(e,t)};K.useId=function(){return qe.current.useId()};K.useImperativeHandle=function(e,t,a){return qe.current.useImperativeHandle(e,t,a)};K.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return qe.current.useMemo(e,t)};K.useReducer=function(e,t,a){return qe.current.useReducer(e,t,a)};K.useRef=function(e){return qe.current.useRef(e)};K.useState=function(e){return qe.current.useState(e)};K.useSyncExternalStore=function(e,t,a){return qe.current.useSyncExternalStore(e,t,a)};K.useTransition=function(){return qe.current.useTransition()};K.version="18.3.1"});var ve=ta((TL,bc)=>{"use strict";bc.exports=Cc()});var Ac=ta(ne=>{"use strict";function mi(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<xl(o,t))e[r]=t,e[a]=o,a=r;else break e}}function bt(e){return e.length===0?null:e[0]}function vl(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,n=o>>>1;r<n;){var l=2*(r+1)-1,s=e[l],i=l+1,u=e[i];if(0>xl(s,a))i<o&&0>xl(u,s)?(e[r]=u,e[i]=a,r=i):(e[r]=s,e[l]=a,r=l);else if(i<o&&0>xl(u,a))e[r]=u,e[i]=a,r=i;else break e}}return t}function xl(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ic=performance,ne.unstable_now=function(){return Ic.now()}):(ci=Date,wc=ci.now(),ne.unstable_now=function(){return ci.now()-wc});var Ic,ci,wc,Ut=[],Ca=[],$0=1,ft=null,Be=3,Ll=!1,ir=!1,Oo=!1,Rc=typeof setTimeout=="function"?setTimeout:null,Tc=typeof clearTimeout=="function"?clearTimeout:null,kc=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function gi(e){for(var t=bt(Ca);t!==null;){if(t.callback===null)vl(Ca);else if(t.startTime<=e)vl(Ca),t.sortIndex=t.expirationTime,mi(Ut,t);else break;t=bt(Ca)}}function hi(e){if(Oo=!1,gi(e),!ir)if(bt(Ut)!==null)ir=!0,yi(xi);else{var t=bt(Ca);t!==null&&vi(hi,t.startTime-e)}}function xi(e,t){ir=!1,Oo&&(Oo=!1,Tc(Uo),Uo=-1),Ll=!0;var a=Be;try{for(gi(t),ft=bt(Ut);ft!==null&&(!(ft.expirationTime>t)||e&&!Mc());){var r=ft.callback;if(typeof r=="function"){ft.callback=null,Be=ft.priorityLevel;var o=r(ft.expirationTime<=t);t=ne.unstable_now(),typeof o=="function"?ft.callback=o:ft===bt(Ut)&&vl(Ut),gi(t)}else vl(Ut);ft=bt(Ut)}if(ft!==null)var n=!0;else{var l=bt(Ca);l!==null&&vi(hi,l.startTime-t),n=!1}return n}finally{ft=null,Be=a,Ll=!1}}var Sl=!1,yl=null,Uo=-1,Fc=5,Ec=-1;function Mc(){return!(ne.unstable_now()-Ec<Fc)}function fi(){if(yl!==null){var e=ne.unstable_now();Ec=e;var t=!0;try{t=yl(!0,e)}finally{t?No():(Sl=!1,yl=null)}}else Sl=!1}var No;typeof kc=="function"?No=function(){kc(fi)}:typeof MessageChannel<"u"?(pi=new MessageChannel,Pc=pi.port2,pi.port1.onmessage=fi,No=function(){Pc.postMessage(null)}):No=function(){Rc(fi,0)};var pi,Pc;function yi(e){yl=e,Sl||(Sl=!0,No())}function vi(e,t){Uo=Rc(function(){e(ne.unstable_now())},t)}ne.unstable_IdlePriority=5;ne.unstable_ImmediatePriority=1;ne.unstable_LowPriority=4;ne.unstable_NormalPriority=3;ne.unstable_Profiling=null;ne.unstable_UserBlockingPriority=2;ne.unstable_cancelCallback=function(e){e.callback=null};ne.unstable_continueExecution=function(){ir||Ll||(ir=!0,yi(xi))};ne.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fc=0<e?Math.floor(1e3/e):5};ne.unstable_getCurrentPriorityLevel=function(){return Be};ne.unstable_getFirstCallbackNode=function(){return bt(Ut)};ne.unstable_next=function(e){switch(Be){case 1:case 2:case 3:var t=3;break;default:t=Be}var a=Be;Be=t;try{return e()}finally{Be=a}};ne.unstable_pauseExecution=function(){};ne.unstable_requestPaint=function(){};ne.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Be;Be=e;try{return t()}finally{Be=a}};ne.unstable_scheduleCallback=function(e,t,a){var r=ne.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:$0++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,mi(Ca,e),bt(Ut)===null&&e===bt(Ca)&&(Oo?(Tc(Uo),Uo=-1):Oo=!0,vi(hi,a-r))):(e.sortIndex=o,mi(Ut,e),ir||Ll||(ir=!0,yi(xi))),e};ne.unstable_shouldYield=Mc;ne.unstable_wrapCallback=function(e){var t=Be;return function(){var a=Be;Be=t;try{return e.apply(this,arguments)}finally{Be=a}}}});var Bc=ta((EL,Dc)=>{"use strict";Dc.exports=Ac()});var _m=ta(lt=>{"use strict";var X0=ve(),ot=Bc();function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wf=new Set,sn={};function Sr(e,t){lo(e,t),lo(e+"Capture",t)}function lo(e,t){for(sn[e]=t,e=0;e<t.length;e++)Wf.add(t[e])}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Nc={};function Q0(e){return qi.call(Nc,e)?!0:qi.call(zc,e)?!1:K0.test(e)?Nc[e]=!0:(zc[e]=!0,!1)}function Z0(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,a,r){if(t===null||typeof t>"u"||Z0(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,a,r,o,n,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Bu);Fe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Bu);Fe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Bu);Fe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,a,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,a,o,r)&&(a=null),r||o===null?Q0(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var ca=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),Wi=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),Vi=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),Ia=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Gf=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Oc=Symbol.iterator;function _o(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Li;function Xo(e){if(Li===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Si=!1;function Ci(e,t){if(!e||Si)return"";Si=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),n=r.stack.split(`
`),l=o.length-1,s=n.length-1;1<=l&&0<=s&&o[l]!==n[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==n[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==n[s]){var i=`
`+o[l].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=l&&0<=s);break}}}finally{Si=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Xo(e):""}function J0(e){switch(e.tag){case 5:return Xo(e.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function Gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case qr:return"Portal";case Wi:return"Profiler";case Nu:return"StrictMode";case Vi:return"Suspense";case ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uu:return t=e.displayName||null,t!==null?t:Gi(e.type)||"Memo";case Ia:t=e._payload,e=e._init;try{return Gi(e(t))}catch{}}return null}function eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gi(t);case 8:return t===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Oa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function th(e){var t=$f(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,n=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,n.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=th(e))}function Xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=$f(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function Zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $i(e,t){var a=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Uc(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=Oa(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kf(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function Xi(e,t){Kf(e,t);var a=Oa(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ki(e,t.type,a):t.hasOwnProperty("defaultValue")&&Ki(e,t.type,Oa(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _c(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Ki(e,t,a){(t!=="number"||Zl(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Ko=Array.isArray;function eo(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Oa(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hc(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(A(92));if(Ko(a)){if(1<a.length)throw Error(A(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Oa(a)}}function Qf(e,t){var a=Oa(t.value),r=Oa(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function qc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Il,Yf=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Il.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function un(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ah=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){ah.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function Jf(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function ep(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=Jf(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var rh=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(rh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ji(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,to=null,ao=null;function Wc(e){if(e=Pn(e)){if(typeof tu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ws(t),tu(e.stateNode,e.type,t))}}function tp(e){to?ao?ao.push(e):ao=[e]:to=e}function ap(){if(to){var e=to,t=ao;if(ao=to=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function rp(e,t){return e(t)}function op(){}var bi=!1;function np(e,t,a){if(bi)return e(t,a);bi=!0;try{return rp(e,t,a)}finally{bi=!1,(to!==null||ao!==null)&&(op(),ap())}}function dn(e,t){var a=e.stateNode;if(a===null)return null;var r=ws(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(A(231,t,typeof a));return a}var au=!1;if(sa)try{_r={},Object.defineProperty(_r,"passive",{get:function(){au=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{au=!1}var _r;function oh(e,t,a,r,o,n,l,s,i){var u=Array.prototype.slice.call(arguments,3);try{t.apply(a,u)}catch(p){this.onError(p)}}var Jo=!1,Yl=null,Jl=!1,ru=null,nh={onError:function(e){Jo=!0,Yl=e}};function lh(e,t,a,r,o,n,l,s,i){Jo=!1,Yl=null,oh.apply(nh,arguments)}function sh(e,t,a,r,o,n,l,s,i){if(lh.apply(this,arguments),Jo){if(Jo){var u=Yl;Jo=!1,Yl=null}else throw Error(A(198));Jl||(Jl=!0,ru=u)}}function Cr(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Cr(e)!==e)throw Error(A(188))}function ih(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var n=o.alternate;if(n===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===a)return Vc(o),e;if(n===r)return Vc(o),t;n=n.sibling}throw Error(A(188))}if(a.return!==r.return)a=o,r=n;else{for(var l=!1,s=o.child;s;){if(s===a){l=!0,a=o,r=n;break}if(s===r){l=!0,r=o,a=n;break}s=s.sibling}if(!l){for(s=n.child;s;){if(s===a){l=!0,a=n,r=o;break}if(s===r){l=!0,r=n,a=o;break}s=s.sibling}if(!l)throw Error(A(189))}}if(a.alternate!==r)throw Error(A(190))}if(a.tag!==3)throw Error(A(188));return a.stateNode.current===a?e:t}function sp(e){return e=ih(e),e!==null?ip(e):null}function ip(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ip(e);if(t!==null)return t;e=e.sibling}return null}var up=ot.unstable_scheduleCallback,jc=ot.unstable_cancelCallback,uh=ot.unstable_shouldYield,dh=ot.unstable_requestPaint,xe=ot.unstable_now,ch=ot.unstable_getCurrentPriorityLevel,Hu=ot.unstable_ImmediatePriority,dp=ot.unstable_UserBlockingPriority,es=ot.unstable_NormalPriority,fh=ot.unstable_LowPriority,cp=ot.unstable_IdlePriority,Ss=null,Wt=null;function ph(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Ss,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:hh,mh=Math.log,gh=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(mh(e)/gh|0)|0}var wl=64,kl=4194304;function Qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,n=e.pingedLanes,l=a&268435455;if(l!==0){var s=l&~o;s!==0?r=Qo(s):(n&=l,n!==0&&(r=Qo(n)))}else l=a&~o,l!==0?r=Qo(l):n!==0&&(r=Qo(n));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===16&&(n&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-Rt(t),o=1<<a,r|=e[a],t&=~o;return r}function xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yh(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes;0<n;){var l=31-Rt(n),s=1<<l,i=o[l];i===-1?((s&a)===0||(s&r)!==0)&&(o[l]=xh(s,t)):i<=t&&(e.expiredLanes|=s),n&=~s}}function ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fp(){var e=wl;return wl<<=1,(wl&4194240)===0&&(wl=64),e}function Ii(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wn(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=a}function vh(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-Rt(a),n=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~n}}function qu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Rt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var J=0;function pp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mp,Wu,gp,hp,xp,nu=!1,Pl=[],Fa=null,Ea=null,Ma=null,cn=new Map,fn=new Map,ka=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(t.pointerId)}}function Ho(e,t,a,r,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:n,targetContainers:[o]},t!==null&&(t=Pn(t),t!==null&&Wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sh(e,t,a,r,o){switch(t){case"focusin":return Fa=Ho(Fa,e,t,a,r,o),!0;case"dragenter":return Ea=Ho(Ea,e,t,a,r,o),!0;case"mouseover":return Ma=Ho(Ma,e,t,a,r,o),!0;case"pointerover":var n=o.pointerId;return cn.set(n,Ho(cn.get(n)||null,e,t,a,r,o)),!0;case"gotpointercapture":return n=o.pointerId,fn.set(n,Ho(fn.get(n)||null,e,t,a,r,o)),!0}return!1}function yp(e){var t=cr(e.target);if(t!==null){var a=Cr(t);if(a!==null){if(t=a.tag,t===13){if(t=lp(a),t!==null){e.blockedOn=t,xp(e.priority,function(){gp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);eu=r,a.target.dispatchEvent(r),eu=null}else return t=Pn(a),t!==null&&Wu(t),e.blockedOn=a,!1;t.shift()}return!0}function $c(e,t,a){Hl(e)&&a.delete(t)}function Ch(){nu=!1,Fa!==null&&Hl(Fa)&&(Fa=null),Ea!==null&&Hl(Ea)&&(Ea=null),Ma!==null&&Hl(Ma)&&(Ma=null),cn.forEach($c),fn.forEach($c)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Ch)))}function pn(e){function t(o){return qo(o,e)}if(0<Pl.length){qo(Pl[0],e);for(var a=1;a<Pl.length;a++){var r=Pl[a];r.blockedOn===e&&(r.blockedOn=null)}}for(Fa!==null&&qo(Fa,e),Ea!==null&&qo(Ea,e),Ma!==null&&qo(Ma,e),cn.forEach(t),fn.forEach(t),a=0;a<ka.length;a++)r=ka[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)yp(a),a.blockedOn===null&&ka.shift()}var ro=ca.ReactCurrentBatchConfig,as=!0;function bh(e,t,a,r){var o=J,n=ro.transition;ro.transition=null;try{J=1,Vu(e,t,a,r)}finally{J=o,ro.transition=n}}function Ih(e,t,a,r){var o=J,n=ro.transition;ro.transition=null;try{J=4,Vu(e,t,a,r)}finally{J=o,ro.transition=n}}function Vu(e,t,a,r){if(as){var o=lu(e,t,a,r);if(o===null)Ei(e,t,r,rs,a),Gc(e,r);else if(Sh(o,e,t,a,r))r.stopPropagation();else if(Gc(e,r),t&4&&-1<Lh.indexOf(e)){for(;o!==null;){var n=Pn(o);if(n!==null&&mp(n),n=lu(e,t,a,r),n===null&&Ei(e,t,r,rs,a),n===o)break;o=n}o!==null&&r.stopPropagation()}else Ei(e,t,r,null,a)}}var rs=null;function lu(e,t,a,r){if(rs=null,e=_u(r),e=cr(e),e!==null)if(t=Cr(e),t===null)e=null;else if(a=t.tag,a===13){if(e=lp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case Hu:return 1;case dp:return 4;case es:case fh:return 16;case cp:return 536870912;default:return 16}default:return 16}}var Ra=null,ju=null,ql=null;function Lp(){if(ql)return ql;var e,t=ju,a=t.length,r,o="value"in Ra?Ra.value:Ra.textContent,n=o.length;for(e=0;e<a&&t[e]===o[e];e++);var l=a-e;for(r=1;r<=l&&t[a-r]===o[n-r];r++);return ql=o.slice(e,1<r?1-r:void 0)}function Wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function Xc(){return!1}function nt(e){function t(a,r,o,n,l){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=n,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(n):n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Rl:Xc,this.isPropagationStopped=Xc,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=nt(mo),kn=me({},mo,{view:0,detail:0}),wh=nt(kn),wi,ki,Wo,Cs=me({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?(wi=e.screenX-Wo.screenX,ki=e.screenY-Wo.screenY):ki=wi=0,Wo=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:ki}}),Kc=nt(Cs),kh=me({},Cs,{dataTransfer:0}),Ph=nt(kh),Rh=me({},kn,{relatedTarget:0}),Pi=nt(Rh),Th=me({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=nt(Th),Eh=me({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mh=nt(Eh),Ah=me({},mo,{data:0}),Qc=nt(Ah),Dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zh[e])?!!t[e]:!1}function $u(){return Nh}var Oh=me({},kn,{key:function(e){if(e.key){var t=Dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uh=nt(Oh),_h=me({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=nt(_h),Hh=me({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),qh=nt(Hh),Wh=me({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vh=nt(Wh),jh=me({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=nt(jh),$h=[9,13,27,32],Xu=sa&&"CompositionEvent"in window,en=null;sa&&"documentMode"in document&&(en=document.documentMode);var Xh=sa&&"TextEvent"in window&&!en,Sp=sa&&(!Xu||en&&8<en&&11>=en),Yc=" ",Jc=!1;function Cp(e,t){switch(e){case"keyup":return $h.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Kh(e,t){switch(e){case"compositionend":return bp(t);case"keypress":return t.which!==32?null:(Jc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Jc?null:e;default:return null}}function Qh(e,t){if(Vr)return e==="compositionend"||!Xu&&Cp(e,t)?(e=Lp(),ql=ju=Ra=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zh[e.type]:t==="textarea"}function Ip(e,t,a,r){tp(r),t=os(t,"onChange"),0<t.length&&(a=new Gu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var tn=null,mn=null;function Yh(e){Bp(e,0)}function bs(e){var t=$r(e);if(Xf(t))return e}function Jh(e,t){if(e==="change")return t}var wp=!1;sa&&(sa?(Fl="oninput"in document,Fl||(Ri=document.createElement("div"),Ri.setAttribute("oninput","return;"),Fl=typeof Ri.oninput=="function"),Tl=Fl):Tl=!1,wp=Tl&&(!document.documentMode||9<document.documentMode));var Tl,Fl,Ri;function tf(){tn&&(tn.detachEvent("onpropertychange",kp),mn=tn=null)}function kp(e){if(e.propertyName==="value"&&bs(mn)){var t=[];Ip(t,mn,e,_u(e)),np(Yh,t)}}function ex(e,t,a){e==="focusin"?(tf(),tn=t,mn=a,tn.attachEvent("onpropertychange",kp)):e==="focusout"&&tf()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(mn)}function ax(e,t){if(e==="click")return bs(t)}function rx(e,t){if(e==="input"||e==="change")return bs(t)}function ox(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:ox;function gn(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!qi.call(t,o)||!Ft(e[o],t[o]))return!1}return!0}function af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rf(e,t){var a=af(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=af(a)}}function Pp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rp(){for(var e=window,t=Zl();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zl(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nx(e){var t=Rp(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Pp(a.ownerDocument.documentElement,a)){if(r!==null&&Ku(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,n=Math.min(r.start,o);r=r.end===void 0?n:Math.min(r.end,o),!e.extend&&n>r&&(o=r,r=n,n=o),o=rf(a,n);var l=rf(a,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),n>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lx=sa&&"documentMode"in document&&11>=document.documentMode,jr=null,su=null,an=null,iu=!1;function of(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||jr==null||jr!==Zl(r)||(r=jr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),an&&gn(an,r)||(an=r,r=os(su,"onSelect"),0<r.length&&(t=new Gu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=jr)))}function El(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Gr={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Ti={},Tp={};sa&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Is(e){if(Ti[e])return Ti[e];if(!Gr[e])return e;var t=Gr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tp)return Ti[e]=t[a];return e}var Fp=Is("animationend"),Ep=Is("animationiteration"),Mp=Is("animationstart"),Ap=Is("transitionend"),Dp=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _a(e,t){Dp.set(e,t),Sr(t,[e])}for(Ml=0;Ml<nf.length;Ml++)Al=nf[Ml],lf=Al.toLowerCase(),sf=Al[0].toUpperCase()+Al.slice(1),_a(lf,"on"+sf);var Al,lf,sf,Ml;_a(Fp,"onAnimationEnd");_a(Ep,"onAnimationIteration");_a(Mp,"onAnimationStart");_a("dblclick","onDoubleClick");_a("focusin","onFocus");_a("focusout","onBlur");_a(Ap,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function uf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,sh(r,t,void 0,e),e.currentTarget=null}function Bp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var n=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],i=s.instance,u=s.currentTarget;if(s=s.listener,i!==n&&o.isPropagationStopped())break e;uf(o,s,u),n=i}else for(l=0;l<r.length;l++){if(s=r[l],i=s.instance,u=s.currentTarget,s=s.listener,i!==n&&o.isPropagationStopped())break e;uf(o,s,u),n=i}}}if(Jl)throw e=ru,Jl=!1,ru=null,e}function se(e,t){var a=t[pu];a===void 0&&(a=t[pu]=new Set);var r=e+"__bubble";a.has(r)||(zp(t,e,2,!1),a.add(r))}function Fi(e,t,a){var r=0;t&&(r|=4),zp(a,e,r,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function hn(e){if(!e[Dl]){e[Dl]=!0,Wf.forEach(function(a){a!=="selectionchange"&&(sx.has(a)||Fi(a,!1,e),Fi(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,Fi("selectionchange",!1,t))}}function zp(e,t,a,r){switch(vp(t)){case 1:var o=bh;break;case 4:o=Ih;break;default:o=Vu}a=o.bind(null,t,a,e),o=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Ei(e,t,a,r,o){var n=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var i=l.tag;if((i===3||i===4)&&(i=l.stateNode.containerInfo,i===o||i.nodeType===8&&i.parentNode===o))return;l=l.return}for(;s!==null;){if(l=cr(s),l===null)return;if(i=l.tag,i===5||i===6){r=n=l;continue e}s=s.parentNode}}r=r.return}np(function(){var u=n,p=_u(a),g=[];e:{var x=Dp.get(e);if(x!==void 0){var S=Gu,d=e;switch(e){case"keypress":if(Wl(a)===0)break e;case"keydown":case"keyup":S=Uh;break;case"focusin":d="focus",S=Pi;break;case"focusout":d="blur",S=Pi;break;case"beforeblur":case"afterblur":S=Pi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=qh;break;case Fp:case Ep:case Mp:S=Fh;break;case Ap:S=Vh;break;case"scroll":S=wh;break;case"wheel":S=Gh;break;case"copy":case"cut":case"paste":S=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Zc}var L=(t&4)!==0,b=!L&&e==="scroll",c=L?x!==null?x+"Capture":null:x;L=[];for(var f=u,m;f!==null;){m=f;var I=m.stateNode;if(m.tag===5&&I!==null&&(m=I,c!==null&&(I=dn(f,c),I!=null&&L.push(xn(f,I,m)))),b)break;f=f.return}0<L.length&&(x=new S(x,d,null,a,p),g.push({event:x,listeners:L}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&a!==eu&&(d=a.relatedTarget||a.fromElement)&&(cr(d)||d[ia]))break e;if((S||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,S?(d=a.relatedTarget||a.toElement,S=u,d=d?cr(d):null,d!==null&&(b=Cr(d),d!==b||d.tag!==5&&d.tag!==6)&&(d=null)):(S=null,d=u),S!==d)){if(L=Kc,I="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(L=Zc,I="onPointerLeave",c="onPointerEnter",f="pointer"),b=S==null?x:$r(S),m=d==null?x:$r(d),x=new L(I,f+"leave",S,a,p),x.target=b,x.relatedTarget=m,I=null,cr(p)===u&&(L=new L(c,f+"enter",d,a,p),L.target=m,L.relatedTarget=b,I=L),b=I,S&&d)t:{for(L=S,c=d,f=0,m=L;m;m=Hr(m))f++;for(m=0,I=c;I;I=Hr(I))m++;for(;0<f-m;)L=Hr(L),f--;for(;0<m-f;)c=Hr(c),m--;for(;f--;){if(L===c||c!==null&&L===c.alternate)break t;L=Hr(L),c=Hr(c)}L=null}else L=null;S!==null&&df(g,x,S,L,!1),d!==null&&b!==null&&df(g,b,d,L,!0)}}e:{if(x=u?$r(u):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var T=Jh;else if(ef(x))if(wp)T=rx;else{T=tx;var R=ex}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(T=ax);if(T&&(T=T(e,u))){Ip(g,T,a,p);break e}R&&R(e,x,u),e==="focusout"&&(R=x._wrapperState)&&R.controlled&&x.type==="number"&&Ki(x,"number",x.value)}switch(R=u?$r(u):window,e){case"focusin":(ef(R)||R.contentEditable==="true")&&(jr=R,su=u,an=null);break;case"focusout":an=su=jr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,of(g,a,p);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":of(g,a,p)}var P;if(Xu)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Vr?Cp(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(Sp&&a.locale!=="ko"&&(Vr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Vr&&(P=Lp()):(Ra=p,ju="value"in Ra?Ra.value:Ra.textContent,Vr=!0)),R=os(u,F),0<R.length&&(F=new Qc(F,e,null,a,p),g.push({event:F,listeners:R}),P?F.data=P:(P=bp(a),P!==null&&(F.data=P)))),(P=Xh?Kh(e,a):Qh(e,a))&&(u=os(u,"onBeforeInput"),0<u.length&&(p=new Qc("onBeforeInput","beforeinput",null,a,p),g.push({event:p,listeners:u}),p.data=P))}Bp(g,t)})}function xn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function os(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,n=o.stateNode;o.tag===5&&n!==null&&(o=n,n=dn(e,a),n!=null&&r.unshift(xn(e,n,o)),n=dn(e,t),n!=null&&r.push(xn(e,n,o))),e=e.return}return r}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function df(e,t,a,r,o){for(var n=t._reactName,l=[];a!==null&&a!==r;){var s=a,i=s.alternate,u=s.stateNode;if(i!==null&&i===r)break;s.tag===5&&u!==null&&(s=u,o?(i=dn(a,n),i!=null&&l.unshift(xn(a,i,s))):o||(i=dn(a,n),i!=null&&l.push(xn(a,i,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var ix=/\r\n?/g,ux=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(ix,`
`).replace(ux,"")}function Bl(e,t,a){if(t=cf(t),cf(e)!==t&&a)throw Error(A(425))}function ns(){}var uu=null,du=null;function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(fx)}:fu;function fx(e){setTimeout(function(){throw e})}function Mi(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),pn(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);pn(t)}function Aa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),qt="__reactFiber$"+go,yn="__reactProps$"+go,ia="__reactContainer$"+go,pu="__reactEvents$"+go,px="__reactListeners$"+go,mx="__reactHandles$"+go;function cr(e){var t=e[qt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ia]||a[qt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pf(e);e!==null;){if(a=e[qt])return a;e=pf(e)}return t}e=a,a=e.parentNode}return null}function Pn(e){return e=e[qt]||e[ia],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ws(e){return e[yn]||null}var mu=[],Xr=-1;function Ha(e){return{current:e}}function ie(e){0>Xr||(e.current=mu[Xr],mu[Xr]=null,Xr--)}function le(e,t){Xr++,mu[Xr]=e.current,e.current=t}var Ua={},Ue=Ha(Ua),Ke=Ha(!1),hr=Ua;function so(e,t){var a=e.type.contextTypes;if(!a)return Ua;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},n;for(n in a)o[n]=t[n];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function ls(){ie(Ke),ie(Ue)}function mf(e,t,a){if(Ue.current!==Ua)throw Error(A(168));le(Ue,t),le(Ke,a)}function Np(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,eh(e)||"Unknown",o));return me({},a,r)}function ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ua,hr=Ue.current,le(Ue,e),le(Ke,Ke.current),!0}function gf(e,t,a){var r=e.stateNode;if(!r)throw Error(A(169));a?(e=Np(e,t,hr),r.__reactInternalMemoizedMergedChildContext=e,ie(Ke),ie(Ue),le(Ue,e)):ie(Ke),le(Ke,a)}var ra=null,ks=!1,Ai=!1;function Op(e){ra===null?ra=[e]:ra.push(e)}function gx(e){ks=!0,Op(e)}function qa(){if(!Ai&&ra!==null){Ai=!0;var e=0,t=J;try{var a=ra;for(J=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}ra=null,ks=!1}catch(o){throw ra!==null&&(ra=ra.slice(e+1)),up(Hu,qa),o}finally{J=t,Ai=!1}}return null}var Kr=[],Qr=0,is=null,us=0,pt=[],mt=0,xr=null,oa=1,na="";function ur(e,t){Kr[Qr++]=us,Kr[Qr++]=is,is=e,us=t}function Up(e,t,a){pt[mt++]=oa,pt[mt++]=na,pt[mt++]=xr,xr=e;var r=oa;e=na;var o=32-Rt(r)-1;r&=~(1<<o),a+=1;var n=32-Rt(t)+o;if(30<n){var l=o-o%5;n=(r&(1<<l)-1).toString(32),r>>=l,o-=l,oa=1<<32-Rt(t)+o|a<<o|r,na=n+e}else oa=1<<n|a<<o|r,na=e}function Qu(e){e.return!==null&&(ur(e,1),Up(e,1,0))}function Zu(e){for(;e===is;)is=Kr[--Qr],Kr[Qr]=null,us=Kr[--Qr],Kr[Qr]=null;for(;e===xr;)xr=pt[--mt],pt[mt]=null,na=pt[--mt],pt[mt]=null,oa=pt[--mt],pt[mt]=null}var rt=null,at=null,de=!1,Pt=null;function _p(e,t){var a=gt(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function hf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,at=Aa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=xr!==null?{id:oa,overflow:na}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=gt(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,rt=e,at=null,!0):!1;default:return!1}}function gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(de){var t=at;if(t){var a=t;if(!hf(e,t)){if(gu(e))throw Error(A(418));t=Aa(a.nextSibling);var r=rt;t&&hf(e,t)?_p(r,a):(e.flags=e.flags&-4097|2,de=!1,rt=e)}}else{if(gu(e))throw Error(A(418));e.flags=e.flags&-4097|2,de=!1,rt=e}}}function xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function zl(e){if(e!==rt)return!1;if(!de)return xf(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cu(e.type,e.memoizedProps)),t&&(t=at)){if(gu(e))throw Hp(),Error(A(418));for(;t;)_p(e,t),t=Aa(t.nextSibling)}if(xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){at=Aa(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}at=null}}else at=rt?Aa(e.stateNode.nextSibling):null;return!0}function Hp(){for(var e=at;e;)e=Aa(e.nextSibling)}function io(){at=rt=null,de=!1}function Yu(e){Pt===null?Pt=[e]:Pt.push(e)}var hx=ca.ReactCurrentBatchConfig;function Vo(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(A(309));var r=a.stateNode}if(!r)throw Error(A(147,e));var o=r,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(l){var s=o.refs;l===null?delete s[n]:s[n]=l},t._stringRef=n,t)}if(typeof e!="string")throw Error(A(284));if(!a._owner)throw Error(A(290,e))}return e}function Nl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yf(e){var t=e._init;return t(e._payload)}function qp(e){function t(c,f){if(e){var m=c.deletions;m===null?(c.deletions=[f],c.flags|=16):m.push(f)}}function a(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function o(c,f){return c=Na(c,f),c.index=0,c.sibling=null,c}function n(c,f,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<f?(c.flags|=2,f):m):(c.flags|=2,f)):(c.flags|=1048576,f)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,f,m,I){return f===null||f.tag!==6?(f=_i(m,c.mode,I),f.return=c,f):(f=o(f,m),f.return=c,f)}function i(c,f,m,I){var T=m.type;return T===Wr?p(c,f,m.props.children,I,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ia&&yf(T)===f.type)?(I=o(f,m.props),I.ref=Vo(c,f,m),I.return=c,I):(I=Ql(m.type,m.key,m.props,null,c.mode,I),I.ref=Vo(c,f,m),I.return=c,I)}function u(c,f,m,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Hi(m,c.mode,I),f.return=c,f):(f=o(f,m.children||[]),f.return=c,f)}function p(c,f,m,I,T){return f===null||f.tag!==7?(f=gr(m,c.mode,I,T),f.return=c,f):(f=o(f,m),f.return=c,f)}function g(c,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_i(""+f,c.mode,m),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cl:return m=Ql(f.type,f.key,f.props,null,c.mode,m),m.ref=Vo(c,null,f),m.return=c,m;case qr:return f=Hi(f,c.mode,m),f.return=c,f;case Ia:var I=f._init;return g(c,I(f._payload),m)}if(Ko(f)||_o(f))return f=gr(f,c.mode,m,null),f.return=c,f;Nl(c,f)}return null}function x(c,f,m,I){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:s(c,f,""+m,I);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cl:return m.key===T?i(c,f,m,I):null;case qr:return m.key===T?u(c,f,m,I):null;case Ia:return T=m._init,x(c,f,T(m._payload),I)}if(Ko(m)||_o(m))return T!==null?null:p(c,f,m,I,null);Nl(c,m)}return null}function S(c,f,m,I,T){if(typeof I=="string"&&I!==""||typeof I=="number")return c=c.get(m)||null,s(f,c,""+I,T);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Cl:return c=c.get(I.key===null?m:I.key)||null,i(f,c,I,T);case qr:return c=c.get(I.key===null?m:I.key)||null,u(f,c,I,T);case Ia:var R=I._init;return S(c,f,m,R(I._payload),T)}if(Ko(I)||_o(I))return c=c.get(m)||null,p(f,c,I,T,null);Nl(f,I)}return null}function d(c,f,m,I){for(var T=null,R=null,P=f,F=f=0,E=null;P!==null&&F<m.length;F++){P.index>F?(E=P,P=null):E=P.sibling;var v=x(c,P,m[F],I);if(v===null){P===null&&(P=E);break}e&&P&&v.alternate===null&&t(c,P),f=n(v,f,F),R===null?T=v:R.sibling=v,R=v,P=E}if(F===m.length)return a(c,P),de&&ur(c,F),T;if(P===null){for(;F<m.length;F++)P=g(c,m[F],I),P!==null&&(f=n(P,f,F),R===null?T=P:R.sibling=P,R=P);return de&&ur(c,F),T}for(P=r(c,P);F<m.length;F++)E=S(P,c,F,m[F],I),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?F:E.key),f=n(E,f,F),R===null?T=E:R.sibling=E,R=E);return e&&P.forEach(function(M){return t(c,M)}),de&&ur(c,F),T}function L(c,f,m,I){var T=_o(m);if(typeof T!="function")throw Error(A(150));if(m=T.call(m),m==null)throw Error(A(151));for(var R=T=null,P=f,F=f=0,E=null,v=m.next();P!==null&&!v.done;F++,v=m.next()){P.index>F?(E=P,P=null):E=P.sibling;var M=x(c,P,v.value,I);if(M===null){P===null&&(P=E);break}e&&P&&M.alternate===null&&t(c,P),f=n(M,f,F),R===null?T=M:R.sibling=M,R=M,P=E}if(v.done)return a(c,P),de&&ur(c,F),T;if(P===null){for(;!v.done;F++,v=m.next())v=g(c,v.value,I),v!==null&&(f=n(v,f,F),R===null?T=v:R.sibling=v,R=v);return de&&ur(c,F),T}for(P=r(c,P);!v.done;F++,v=m.next())v=S(P,c,F,v.value,I),v!==null&&(e&&v.alternate!==null&&P.delete(v.key===null?F:v.key),f=n(v,f,F),R===null?T=v:R.sibling=v,R=v);return e&&P.forEach(function(N){return t(c,N)}),de&&ur(c,F),T}function b(c,f,m,I){if(typeof m=="object"&&m!==null&&m.type===Wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cl:e:{for(var T=m.key,R=f;R!==null;){if(R.key===T){if(T=m.type,T===Wr){if(R.tag===7){a(c,R.sibling),f=o(R,m.props.children),f.return=c,c=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ia&&yf(T)===R.type){a(c,R.sibling),f=o(R,m.props),f.ref=Vo(c,R,m),f.return=c,c=f;break e}a(c,R);break}else t(c,R);R=R.sibling}m.type===Wr?(f=gr(m.props.children,c.mode,I,m.key),f.return=c,c=f):(I=Ql(m.type,m.key,m.props,null,c.mode,I),I.ref=Vo(c,f,m),I.return=c,c=I)}return l(c);case qr:e:{for(R=m.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){a(c,f.sibling),f=o(f,m.children||[]),f.return=c,c=f;break e}else{a(c,f);break}else t(c,f);f=f.sibling}f=Hi(m,c.mode,I),f.return=c,c=f}return l(c);case Ia:return R=m._init,b(c,f,R(m._payload),I)}if(Ko(m))return d(c,f,m,I);if(_o(m))return L(c,f,m,I);Nl(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(a(c,f.sibling),f=o(f,m),f.return=c,c=f):(a(c,f),f=_i(m,c.mode,I),f.return=c,c=f),l(c)):a(c,f)}return b}var uo=qp(!0),Wp=qp(!1),ds=Ha(null),cs=null,Zr=null,Ju=null;function ed(){Ju=Zr=cs=null}function td(e){var t=ds.current;ie(ds),e._currentValue=t}function xu(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function oo(e,t){cs=e,Ju=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Ju!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(cs===null)throw Error(A(308));Zr=e,cs.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var fr=null;function ad(e){fr===null?fr=[e]:fr.push(e)}function Vp(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,ad(t)):(a.next=o.next,o.next=a),t.interleaved=a,ua(e,r)}function ua(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var wa=!1;function rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function la(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ua(e,a)}return o=r.interleaved,o===null?(t.next=t,ad(r)):(t.next=o.next,o.next=t),r.interleaved=t,ua(e,a)}function Vl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,qu(e,a)}}function vf(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};n===null?o=n=l:n=n.next=l,a=a.next}while(a!==null);n===null?o=n=t:n=n.next=t}else o=n=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function fs(e,t,a,r){var o=e.updateQueue;wa=!1;var n=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var i=s,u=i.next;i.next=null,l===null?n=u:l.next=u,l=i;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=i))}if(n!==null){var g=o.baseState;l=0,p=u=i=null,s=n;do{var x=s.lane,S=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var d=e,L=s;switch(x=t,S=a,L.tag){case 1:if(d=L.payload,typeof d=="function"){g=d.call(S,g,x);break e}g=d;break e;case 3:d.flags=d.flags&-65537|128;case 0:if(d=L.payload,x=typeof d=="function"?d.call(S,g,x):d,x==null)break e;g=me({},g,x);break e;case 2:wa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else S={eventTime:S,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=S,i=g):p=p.next=S,l|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(i=g),o.baseState=i,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else n===null&&(o.shared.lanes=0);vr|=l,e.lanes=l,e.memoizedState=g}}function Lf(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var Rn={},Vt=Ha(Rn),vn=Ha(Rn),Ln=Ha(Rn);function pr(e){if(e===Rn)throw Error(A(174));return e}function od(e,t){switch(le(Ln,t),le(vn,e),le(Vt,Rn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zi(t,e)}ie(Vt),le(Vt,t)}function co(){ie(Vt),ie(vn),ie(Ln)}function Gp(e){pr(Ln.current);var t=pr(Vt.current),a=Zi(t,e.type);t!==a&&(le(vn,e),le(Vt,a))}function nd(e){vn.current===e&&(ie(Vt),ie(vn))}var fe=Ha(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Di=[];function ld(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var jl=ca.ReactCurrentDispatcher,Bi=ca.ReactCurrentBatchConfig,yr=0,pe=null,be=null,we=null,ms=!1,rn=!1,Sn=0,xx=0;function ze(){throw Error(A(321))}function sd(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ft(e[a],t[a]))return!1;return!0}function id(e,t,a,r,o,n){if(yr=n,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jl.current=e===null||e.memoizedState===null?Sx:Cx,e=a(r,o),rn){n=0;do{if(rn=!1,Sn=0,25<=n)throw Error(A(301));n+=1,we=be=null,t.updateQueue=null,jl.current=bx,e=a(r,o)}while(rn)}if(jl.current=gs,t=be!==null&&be.next!==null,yr=0,we=be=pe=null,ms=!1,t)throw Error(A(300));return e}function ud(){var e=Sn!==0;return Sn=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?pe.memoizedState=we=e:we=we.next=e,we}function yt(){if(be===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=we===null?pe.memoizedState:we.next;if(t!==null)we=t,be=e;else{if(e===null)throw Error(A(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},we===null?pe.memoizedState=we=e:we=we.next=e}return we}function Cn(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=yt(),a=t.queue;if(a===null)throw Error(A(311));a.lastRenderedReducer=e;var r=be,o=r.baseQueue,n=a.pending;if(n!==null){if(o!==null){var l=o.next;o.next=n.next,n.next=l}r.baseQueue=o=n,a.pending=null}if(o!==null){n=o.next,r=r.baseState;var s=l=null,i=null,u=n;do{var p=u.lane;if((yr&p)===p)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(s=i=g,l=r):i=i.next=g,pe.lanes|=p,vr|=p}u=u.next}while(u!==null&&u!==n);i===null?l=r:i.next=s,Ft(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=i,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do n=o.lane,pe.lanes|=n,vr|=n,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Ni(e){var t=yt(),a=t.queue;if(a===null)throw Error(A(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,n=t.memoizedState;if(o!==null){a.pending=null;var l=o=o.next;do n=e(n,l.action),l=l.next;while(l!==o);Ft(n,t.memoizedState)||(Xe=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,r]}function $p(){}function Xp(e,t){var a=pe,r=yt(),o=t(),n=!Ft(r.memoizedState,o);if(n&&(r.memoizedState=o,Xe=!0),r=r.queue,dd(Zp.bind(null,a,r,e),[e]),r.getSnapshot!==t||n||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,bn(9,Qp.bind(null,a,r,o,t),void 0,null),ke===null)throw Error(A(349));(yr&30)!==0||Kp(a,t,o)}return o}function Kp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qp(e,t,a,r){t.value=a,t.getSnapshot=r,Yp(t)&&Jp(e)}function Zp(e,t,a){return a(function(){Yp(t)&&Jp(e)})}function Yp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ft(e,a)}catch{return!0}}function Jp(e){var t=ua(e,1);t!==null&&Tt(t,e,1,-1)}function Sf(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:e},t.queue=e,e=e.dispatch=Lx.bind(null,pe,e),[t.memoizedState,e]}function bn(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function em(){return yt().memoizedState}function Gl(e,t,a,r){var o=Ht();pe.flags|=e,o.memoizedState=bn(1|t,a,void 0,r===void 0?null:r)}function Ps(e,t,a,r){var o=yt();r=r===void 0?null:r;var n=void 0;if(be!==null){var l=be.memoizedState;if(n=l.destroy,r!==null&&sd(r,l.deps)){o.memoizedState=bn(t,a,n,r);return}}pe.flags|=e,o.memoizedState=bn(1|t,a,n,r)}function Cf(e,t){return Gl(8390656,8,e,t)}function dd(e,t){return Ps(2048,8,e,t)}function tm(e,t){return Ps(4,2,e,t)}function am(e,t){return Ps(4,4,e,t)}function rm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function om(e,t,a){return a=a!=null?a.concat([e]):null,Ps(4,4,rm.bind(null,t,e),a)}function cd(){}function nm(e,t){var a=yt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&sd(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function lm(e,t){var a=yt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&sd(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function sm(e,t,a){return(yr&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=a):(Ft(a,t)||(a=fp(),pe.lanes|=a,vr|=a,e.baseState=!0),t)}function yx(e,t){var a=J;J=a!==0&&4>a?a:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{J=a,Bi.transition=r}}function im(){return yt().memoizedState}function vx(e,t,a){var r=za(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},um(e))dm(t,a);else if(a=Vp(e,t,a,r),a!==null){var o=Ve();Tt(a,e,r,o),cm(a,t,r)}}function Lx(e,t,a){var r=za(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(e))dm(t,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var l=t.lastRenderedState,s=n(l,a);if(o.hasEagerState=!0,o.eagerState=s,Ft(s,l)){var i=t.interleaved;i===null?(o.next=o,ad(t)):(o.next=i.next,i.next=o),t.interleaved=o;return}}catch{}finally{}a=Vp(e,t,o,r),a!==null&&(o=Ve(),Tt(a,e,r,o),cm(a,t,r))}}function um(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function dm(e,t){rn=ms=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function cm(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,qu(e,a)}}var gs={readContext:xt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Sx={readContext:xt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Cf,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Gl(4194308,4,rm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Gl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gl(4,2,e,t)},useMemo:function(e,t){var a=Ht();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Ht();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vx.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Sf,useDebugValue:cd,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Sf(!1),t=e[0];return e=yx.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=pe,o=Ht();if(de){if(a===void 0)throw Error(A(407));a=a()}else{if(a=t(),ke===null)throw Error(A(349));(yr&30)!==0||Kp(r,t,a)}o.memoizedState=a;var n={value:a,getSnapshot:t};return o.queue=n,Cf(Zp.bind(null,r,n,e),[e]),r.flags|=2048,bn(9,Qp.bind(null,r,n,a,t),void 0,null),a},useId:function(){var e=Ht(),t=ke.identifierPrefix;if(de){var a=na,r=oa;a=(r&~(1<<32-Rt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Sn++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=xx++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cx={readContext:xt,useCallback:nm,useContext:xt,useEffect:dd,useImperativeHandle:om,useInsertionEffect:tm,useLayoutEffect:am,useMemo:lm,useReducer:zi,useRef:em,useState:function(){return zi(Cn)},useDebugValue:cd,useDeferredValue:function(e){var t=yt();return sm(t,be.memoizedState,e)},useTransition:function(){var e=zi(Cn)[0],t=yt().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:Xp,useId:im,unstable_isNewReconciler:!1},bx={readContext:xt,useCallback:nm,useContext:xt,useEffect:dd,useImperativeHandle:om,useInsertionEffect:tm,useLayoutEffect:am,useMemo:lm,useReducer:Ni,useRef:em,useState:function(){return Ni(Cn)},useDebugValue:cd,useDeferredValue:function(e){var t=yt();return be===null?t.memoizedState=e:sm(t,be.memoizedState,e)},useTransition:function(){var e=Ni(Cn)[0],t=yt().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:Xp,useId:im,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function yu(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:me({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rs={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Ve(),o=za(e),n=la(r,o);n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,o),t!==null&&(Tt(t,e,o,r),Vl(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Ve(),o=za(e),n=la(r,o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,o),t!==null&&(Tt(t,e,o,r),Vl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ve(),r=za(e),o=la(a,r);o.tag=2,t!=null&&(o.callback=t),t=Da(e,o,r),t!==null&&(Tt(t,e,r,a),Vl(t,e,r))}};function bf(e,t,a,r,o,n,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,n,l):t.prototype&&t.prototype.isPureReactComponent?!gn(a,r)||!gn(o,n):!0}function fm(e,t,a){var r=!1,o=Ua,n=t.contextType;return typeof n=="object"&&n!==null?n=xt(n):(o=Qe(t)?hr:Ue.current,r=t.contextTypes,n=(r=r!=null)?so(e,o):Ua),t=new t(a,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=n),t}function If(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function vu(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},rd(e);var n=t.contextType;typeof n=="object"&&n!==null?o.context=xt(n):(n=Qe(t)?hr:Ue.current,o.context=so(e,n)),o.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(yu(e,t,n,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Rs.enqueueReplaceState(o,o.state,null),fs(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fo(e,t){try{var a="",r=t;do a+=J0(r),r=r.return;while(r);var o=a}catch(n){o=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:o,digest:null}}function Oi(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Lu(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function pm(e,t,a){a=la(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){xs||(xs=!0,Fu=r),Lu(e,t)},a}function mm(e,t,a){a=la(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){Lu(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(a.callback=function(){Lu(e,t),typeof r!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),a}function wf(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ix;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=Ox.bind(null,e,t,a),t.then(e,e))}function kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pf(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=la(-1,1),t.tag=2,Da(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var wx=ca.ReactCurrentOwner,Xe=!1;function We(e,t,a,r){t.child=e===null?Wp(t,null,a,r):uo(t,e.child,a,r)}function Rf(e,t,a,r,o){a=a.render;var n=t.ref;return oo(t,o),r=id(e,t,a,r,n,o),a=ud(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,da(e,t,o)):(de&&a&&Qu(t),t.flags|=1,We(e,t,r,o),t.child)}function Tf(e,t,a,r,o){if(e===null){var n=a.type;return typeof n=="function"&&!vd(n)&&n.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=n,gm(e,t,n,r,o)):(e=Ql(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,(e.lanes&o)===0){var l=n.memoizedProps;if(a=a.compare,a=a!==null?a:gn,a(l,r)&&e.ref===t.ref)return da(e,t,o)}return t.flags|=1,e=Na(n,r),e.ref=t.ref,e.return=t,t.child=e}function gm(e,t,a,r,o){if(e!==null){var n=e.memoizedProps;if(gn(n,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=n,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,da(e,t,o)}return Su(e,t,a,r,o)}function hm(e,t,a){var r=t.pendingProps,o=r.children,n=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Jr,tt),tt|=a;else{if((a&1073741824)===0)return e=n!==null?n.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Jr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=n!==null?n.baseLanes:a,le(Jr,tt),tt|=r}else n!==null?(r=n.baseLanes|a,t.memoizedState=null):r=a,le(Jr,tt),tt|=r;return We(e,t,o,a),t.child}function xm(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Su(e,t,a,r,o){var n=Qe(a)?hr:Ue.current;return n=so(t,n),oo(t,o),a=id(e,t,a,r,n,o),r=ud(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,da(e,t,o)):(de&&r&&Qu(t),t.flags|=1,We(e,t,a,o),t.child)}function Ff(e,t,a,r,o){if(Qe(a)){var n=!0;ss(t)}else n=!1;if(oo(t,o),t.stateNode===null)$l(e,t),fm(t,a,r),vu(t,a,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var i=l.context,u=a.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=Qe(a)?hr:Ue.current,u=so(t,u));var p=a.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||i!==u)&&If(t,l,r,u),wa=!1;var x=t.memoizedState;l.state=x,fs(t,r,l,o),i=t.memoizedState,s!==r||x!==i||Ke.current||wa?(typeof p=="function"&&(yu(t,a,p,r),i=t.memoizedState),(s=wa||bf(t,a,s,r,x,i,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=i),l.props=r,l.state=i,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:wt(t.type,s),l.props=u,g=t.pendingProps,x=l.context,i=a.contextType,typeof i=="object"&&i!==null?i=xt(i):(i=Qe(a)?hr:Ue.current,i=so(t,i));var S=a.getDerivedStateFromProps;(p=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||x!==i)&&If(t,l,r,i),wa=!1,x=t.memoizedState,l.state=x,fs(t,r,l,o);var d=t.memoizedState;s!==g||x!==d||Ke.current||wa?(typeof S=="function"&&(yu(t,a,S,r),d=t.memoizedState),(u=wa||bf(t,a,u,r,x,d,i)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,d,i),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,d,i)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=i,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,a,r,n,o)}function Cu(e,t,a,r,o,n){xm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&gf(t,a,!1),da(e,t,n);r=t.stateNode,wx.current=t;var s=l&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=uo(t,e.child,null,n),t.child=uo(t,null,s,n)):We(e,t,s,n),t.memoizedState=r.state,o&&gf(t,a,!0),t.child}function ym(e){var t=e.stateNode;t.pendingContext?mf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mf(e,t.context,!1),od(e,t.containerInfo)}function Ef(e,t,a,r,o){return io(),Yu(o),t.flags|=256,We(e,t,a,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vm(e,t,a){var r=t.pendingProps,o=fe.current,n=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(fe,o&1),e===null)return hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,n?(r=t.mode,n=t.child,l={mode:"hidden",children:l},(r&1)===0&&n!==null?(n.childLanes=0,n.pendingProps=l):n=Es(l,r,0,null),e=gr(e,r,a,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=Iu(a),t.memoizedState=bu,e):fd(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return kx(e,t,l,r,s,o,a);if(n){n=r.fallback,l=t.mode,o=e.child,s=o.sibling;var i={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=i,t.deletions=null):(r=Na(o,i),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?n=Na(s,n):(n=gr(n,l,a,null),n.flags|=2),n.return=t,r.return=t,r.sibling=n,t.child=r,r=n,n=t.child,l=e.child.memoizedState,l=l===null?Iu(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},n.memoizedState=l,n.childLanes=e.childLanes&~a,t.memoizedState=bu,r}return n=e.child,e=n.sibling,r=Na(n,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function fd(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ol(e,t,a,r){return r!==null&&Yu(r),uo(t,e.child,null,a),e=fd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kx(e,t,a,r,o,n,l){if(a)return t.flags&256?(t.flags&=-257,r=Oi(Error(A(422))),Ol(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=r.fallback,o=t.mode,r=Es({mode:"visible",children:r.children},o,0,null),n=gr(n,o,l,null),n.flags|=2,r.return=t,n.return=t,r.sibling=n,t.child=r,(t.mode&1)!==0&&uo(t,e.child,null,l),t.child.memoizedState=Iu(l),t.memoizedState=bu,n);if((t.mode&1)===0)return Ol(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,n=Error(A(419)),r=Oi(n,r,void 0),Ol(e,t,l,r)}if(s=(l&e.childLanes)!==0,Xe||s){if(r=ke,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==n.retryLane&&(n.retryLane=o,ua(e,o),Tt(r,e,o,-1))}return yd(),r=Oi(Error(A(421))),Ol(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ux.bind(null,e),o._reactRetry=t,null):(e=n.treeContext,at=Aa(o.nextSibling),rt=t,de=!0,Pt=null,e!==null&&(pt[mt++]=oa,pt[mt++]=na,pt[mt++]=xr,oa=e.id,na=e.overflow,xr=t),t=fd(t,r.children),t.flags|=4096,t)}function Mf(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xu(e.return,t,a)}function Ui(e,t,a,r,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=r,n.tail=a,n.tailMode=o)}function Lm(e,t,a){var r=t.pendingProps,o=r.revealOrder,n=r.tail;if(We(e,t,r.children,a),r=fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mf(e,a,t);else if(e.tag===19)Mf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(fe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Ui(t,!1,o,a,n);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Ui(t,!0,a,null,n);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $l(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function da(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,a=Na(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Na(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Px(e,t,a){switch(t.tag){case 3:ym(t),io();break;case 5:Gp(t);break;case 1:Qe(t.type)&&ss(t);break;case 4:od(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(ds,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(fe,fe.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?vm(e,t,a):(le(fe,fe.current&1),e=da(e,t,a),e!==null?e.sibling:null);le(fe,fe.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Lm(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,hm(e,t,a)}return da(e,t,a)}var Sm,wu,Cm,bm;Sm=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};wu=function(){};Cm=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pr(Vt.current);var n=null;switch(a){case"input":o=$i(e,o),r=$i(e,r),n=[];break;case"select":o=me({},o,{value:void 0}),r=me({},r,{value:void 0}),n=[];break;case"textarea":o=Qi(e,o),r=Qi(e,r),n=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ns)}Yi(a,r);var l;a=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sn.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in r){var i=r[u];if(s=o?.[u],r.hasOwnProperty(u)&&i!==s&&(i!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||i&&i.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in i)i.hasOwnProperty(l)&&s[l]!==i[l]&&(a||(a={}),a[l]=i[l])}else a||(n||(n=[]),n.push(u,a)),a=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,s=s?s.__html:void 0,i!=null&&s!==i&&(n=n||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(n=n||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sn.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&se("scroll",e),n||s===i||(n=[])):(n=n||[]).push(u,i))}a&&(n=n||[]).push("style",a);var u=n;(t.updateQueue=u)&&(t.flags|=4)}};bm=function(e,t,a,r){a!==r&&(t.flags|=4)};function jo(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Rx(e,t,a){var r=t.pendingProps;switch(Zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Qe(t.type)&&ls(),Ne(t),null;case 3:return r=t.stateNode,co(),ie(Ke),ie(Ue),ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(Au(Pt),Pt=null))),wu(e,t),Ne(t),null;case 5:nd(t);var o=pr(Ln.current);if(a=t.type,e!==null&&t.stateNode!=null)Cm(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ne(t),null}if(e=pr(Vt.current),zl(t)){r=t.stateNode,a=t.type;var n=t.memoizedProps;switch(r[qt]=t,r[yn]=n,e=(t.mode&1)!==0,a){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<Zo.length;o++)se(Zo[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Uc(r,n),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!n.multiple},se("invalid",r);break;case"textarea":Hc(r,n),se("invalid",r)}Yi(a,n),o=null;for(var l in n)if(n.hasOwnProperty(l)){var s=n[l];l==="children"?typeof s=="string"?r.textContent!==s&&(n.suppressHydrationWarning!==!0&&Bl(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(n.suppressHydrationWarning!==!0&&Bl(r.textContent,s,e),o=["children",""+s]):sn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&se("scroll",r)}switch(a){case"input":bl(r),_c(r,n,!0);break;case"textarea":bl(r),qc(r);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(r.onclick=ns)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zf(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(a,{is:r.is}):(e=l.createElement(a),a==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,a),e[qt]=t,e[yn]=r,Sm(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ji(a,r),a){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zo.length;o++)se(Zo[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":Uc(e,r),o=$i(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=me({},r,{value:void 0}),se("invalid",e);break;case"textarea":Hc(e,r),o=Qi(e,r),se("invalid",e);break;default:o=r}Yi(a,o),s=o;for(n in s)if(s.hasOwnProperty(n)){var i=s[n];n==="style"?ep(e,i):n==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&Yf(e,i)):n==="children"?typeof i=="string"?(a!=="textarea"||i!=="")&&un(e,i):typeof i=="number"&&un(e,""+i):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(sn.hasOwnProperty(n)?i!=null&&n==="onScroll"&&se("scroll",e):i!=null&&zu(e,n,i,l))}switch(a){case"input":bl(e),_c(e,r,!1);break;case"textarea":bl(e),qc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Oa(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?eo(e,!!r.multiple,n,!1):r.defaultValue!=null&&eo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ns)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)bm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(a=pr(Ln.current),pr(Vt.current),zl(t)){if(r=t.stateNode,a=t.memoizedProps,r[qt]=t,(n=r.nodeValue!==a)&&(e=rt,e!==null))switch(e.tag){case 3:Bl(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,a,(e.mode&1)!==0)}n&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ne(t),null;case 13:if(ie(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hp(),io(),t.flags|=98560,n=!1;else if(n=zl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!n)throw Error(A(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(A(317));n[qt]=t}else io(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else Pt!==null&&(Au(Pt),Pt=null),n=!0;if(!n)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?Ie===0&&(Ie=3):yd())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return co(),wu(e,t),e===null&&hn(t.stateNode.containerInfo),Ne(t),null;case 10:return td(t.type._context),Ne(t),null;case 17:return Qe(t.type)&&ls(),Ne(t),null;case 19:if(ie(fe),n=t.memoizedState,n===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=n.rendering,l===null)if(r)jo(n,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ps(e),l!==null){for(t.flags|=128,jo(n,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)n=a,e=r,n.flags&=14680066,l=n.alternate,l===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,e=l.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return le(fe,fe.current&1|2),t.child}e=e.sibling}n.tail!==null&&xe()>po&&(t.flags|=128,r=!0,jo(n,!1),t.lanes=4194304)}else{if(!r)if(e=ps(l),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),jo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!de)return Ne(t),null}else 2*xe()-n.renderingStartTime>po&&a!==1073741824&&(t.flags|=128,r=!0,jo(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(a=n.last,a!==null?a.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=xe(),t.sibling=null,a=fe.current,le(fe,r?a&1|2:a&1),t):(Ne(t),null);case 22:case 23:return xd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Tx(e,t){switch(Zu(t),t.tag){case 1:return Qe(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),ie(Ke),ie(Ue),ld(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(ie(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(fe),null;case 4:return co(),null;case 10:return td(t.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var Ul=!1,Oe=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){he(e,t,r)}else a.current=null}function ku(e,t,a){try{a()}catch(r){he(e,t,r)}}var Af=!1;function Ex(e,t){if(uu=as,e=Rp(),Ku(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,n=r.focusNode;r=r.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var l=0,s=-1,i=-1,u=0,p=0,g=e,x=null;t:for(;;){for(var S;g!==a||o!==0&&g.nodeType!==3||(s=l+o),g!==n||r!==0&&g.nodeType!==3||(i=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(S=g.firstChild)!==null;)x=g,g=S;for(;;){if(g===e)break t;if(x===a&&++u===o&&(s=l),x===n&&++p===r&&(i=l),(S=g.nextSibling)!==null)break;g=x,x=g.parentNode}g=S}a=s===-1||i===-1?null:{start:s,end:i}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:e,selectionRange:a},as=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var d=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var L=d.memoizedProps,b=d.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?L:wt(t.type,L),b);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(I){he(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return d=Af,Af=!1,d}function on(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.destroy;o.destroy=void 0,n!==void 0&&ku(t,a,n)}o=o.next}while(o!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Pu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[yn],delete t[pu],delete t[px],delete t[mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wm(e){return e.tag===5||e.tag===3||e.tag===4}function Df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ns));else if(r!==4&&(e=e.child,e!==null))for(Ru(e,t,a),e=e.sibling;e!==null;)Ru(e,t,a),e=e.sibling}function Tu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,a),e=e.sibling;e!==null;)Tu(e,t,a),e=e.sibling}var Re=null,kt=!1;function ba(e,t,a){for(a=a.child;a!==null;)km(e,t,a),a=a.sibling}function km(e,t,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Ss,a)}catch{}switch(a.tag){case 5:Oe||Yr(a,t);case 6:var r=Re,o=kt;Re=null,ba(e,t,a),Re=r,kt=o,Re!==null&&(kt?(e=Re,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):Re.removeChild(a.stateNode));break;case 18:Re!==null&&(kt?(e=Re,a=a.stateNode,e.nodeType===8?Mi(e.parentNode,a):e.nodeType===1&&Mi(e,a),pn(e)):Mi(Re,a.stateNode));break;case 4:r=Re,o=kt,Re=a.stateNode.containerInfo,kt=!0,ba(e,t,a),Re=r,kt=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var n=o,l=n.destroy;n=n.tag,l!==void 0&&((n&2)!==0||(n&4)!==0)&&ku(a,t,l),o=o.next}while(o!==r)}ba(e,t,a);break;case 1:if(!Oe&&(Yr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){he(a,t,s)}ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:a.mode&1?(Oe=(r=Oe)||a.memoizedState!==null,ba(e,t,a),Oe=r):ba(e,t,a);break;default:ba(e,t,a)}}function Bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Fx),t.forEach(function(r){var o=_x.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function It(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var n=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,kt=!1;break e;case 3:Re=s.stateNode.containerInfo,kt=!0;break e;case 4:Re=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Re===null)throw Error(A(160));km(n,l,o),Re=null,kt=!1;var i=o.alternate;i!==null&&(i.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pm(t,e),t=t.sibling}function Pm(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),_t(e),r&4){try{on(3,e,e.return),Ts(3,e)}catch(L){he(e,e.return,L)}try{on(5,e,e.return)}catch(L){he(e,e.return,L)}}break;case 1:It(t,e),_t(e),r&512&&a!==null&&Yr(a,a.return);break;case 5:if(It(t,e),_t(e),r&512&&a!==null&&Yr(a,a.return),e.flags&32){var o=e.stateNode;try{un(o,"")}catch(L){he(e,e.return,L)}}if(r&4&&(o=e.stateNode,o!=null)){var n=e.memoizedProps,l=a!==null?a.memoizedProps:n,s=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{s==="input"&&n.type==="radio"&&n.name!=null&&Kf(o,n),Ji(s,l);var u=Ji(s,n);for(l=0;l<i.length;l+=2){var p=i[l],g=i[l+1];p==="style"?ep(o,g):p==="dangerouslySetInnerHTML"?Yf(o,g):p==="children"?un(o,g):zu(o,p,g,u)}switch(s){case"input":Xi(o,n);break;case"textarea":Qf(o,n);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!n.multiple;var S=n.value;S!=null?eo(o,!!n.multiple,S,!1):x!==!!n.multiple&&(n.defaultValue!=null?eo(o,!!n.multiple,n.defaultValue,!0):eo(o,!!n.multiple,n.multiple?[]:"",!1))}o[yn]=n}catch(L){he(e,e.return,L)}}break;case 6:if(It(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,n=e.memoizedProps;try{o.nodeValue=n}catch(L){he(e,e.return,L)}}break;case 3:if(It(t,e),_t(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pn(t.containerInfo)}catch(L){he(e,e.return,L)}break;case 4:It(t,e),_t(e);break;case 13:It(t,e),_t(e),o=e.child,o.flags&8192&&(n=o.memoizedState!==null,o.stateNode.isHidden=n,!n||o.alternate!==null&&o.alternate.memoizedState!==null||(gd=xe())),r&4&&Bf(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||p,It(t,e),Oe=u):It(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(O=e,p=e.child;p!==null;){for(g=O=p;O!==null;){switch(x=O,S=x.child,x.tag){case 0:case 11:case 14:case 15:on(4,x,x.return);break;case 1:Yr(x,x.return);var d=x.stateNode;if(typeof d.componentWillUnmount=="function"){r=x,a=x.return;try{t=r,d.props=t.memoizedProps,d.state=t.memoizedState,d.componentWillUnmount()}catch(L){he(r,a,L)}}break;case 5:Yr(x,x.return);break;case 22:if(x.memoizedState!==null){Nf(g);continue}}S!==null?(S.return=x,O=S):Nf(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,u?(n=o.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(s=g.stateNode,i=g.memoizedProps.style,l=i!=null&&i.hasOwnProperty("display")?i.display:null,s.style.display=Jf("display",l))}catch(L){he(e,e.return,L)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(L){he(e,e.return,L)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:It(t,e),_t(e),r&4&&Bf(e);break;case 21:break;default:It(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(wm(a)){var r=a;break e}a=a.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(un(o,""),r.flags&=-33);var n=Df(e);Tu(e,n,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Df(e);Ru(e,s,l);break;default:throw Error(A(161))}}catch(i){he(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mx(e,t,a){O=e,Rm(e,t,a)}function Rm(e,t,a){for(var r=(e.mode&1)!==0;O!==null;){var o=O,n=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ul;if(!l){var s=o.alternate,i=s!==null&&s.memoizedState!==null||Oe;s=Ul;var u=Oe;if(Ul=l,(Oe=i)&&!u)for(O=o;O!==null;)l=O,i=l.child,l.tag===22&&l.memoizedState!==null?Of(o):i!==null?(i.return=l,O=i):Of(o);for(;n!==null;)O=n,Rm(n,t,a),n=n.sibling;O=o,Ul=s,Oe=u}zf(e,t,a)}else(o.subtreeFlags&8772)!==0&&n!==null?(n.return=o,O=n):zf(e,t,a)}}function zf(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Oe||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:wt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&Lf(t,n,r);break;case 3:var l=t.updateQueue;if(l!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Lf(t,l,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break;case"img":i.src&&(a.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&pn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Oe||t.flags&512&&Pu(t)}catch(x){he(t,t.return,x)}}if(t===e){O=null;break}if(a=t.sibling,a!==null){a.return=t.return,O=a;break}O=t.return}}function Nf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}function Of(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Ts(4,t)}catch(i){he(t,a,i)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(i){he(t,o,i)}}var n=t.return;try{Pu(t)}catch(i){he(t,n,i)}break;case 5:var l=t.return;try{Pu(t)}catch(i){he(t,l,i)}}}catch(i){he(t,t.return,i)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var Ax=Math.ceil,hs=ca.ReactCurrentDispatcher,pd=ca.ReactCurrentOwner,ht=ca.ReactCurrentBatchConfig,Z=0,ke=null,Le=null,Te=0,tt=0,Jr=Ha(0),Ie=0,In=null,vr=0,Fs=0,md=0,nn=null,$e=null,gd=0,po=1/0,aa=null,xs=!1,Fu=null,Ba=null,_l=!1,Ta=null,ys=0,ln=0,Eu=null,Xl=-1,Kl=0;function Ve(){return(Z&6)!==0?xe():Xl!==-1?Xl:Xl=xe()}function za(e){return(e.mode&1)===0?1:(Z&2)!==0&&Te!==0?Te&-Te:hx.transition!==null?(Kl===0&&(Kl=fp()),Kl):(e=J,e!==0||(e=window.event,e=e===void 0?16:vp(e.type)),e)}function Tt(e,t,a,r){if(50<ln)throw ln=0,Eu=null,Error(A(185));wn(e,a,r),((Z&2)===0||e!==ke)&&(e===ke&&((Z&2)===0&&(Fs|=a),Ie===4&&Pa(e,Te)),Ze(e,r),a===1&&Z===0&&(t.mode&1)===0&&(po=xe()+500,ks&&qa()))}function Ze(e,t){var a=e.callbackNode;yh(e,t);var r=ts(e,e===ke?Te:0);if(r===0)a!==null&&jc(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&jc(a),t===1)e.tag===0?gx(Uf.bind(null,e)):Op(Uf.bind(null,e)),cx(function(){(Z&6)===0&&qa()}),a=null;else{switch(pp(r)){case 1:a=Hu;break;case 4:a=dp;break;case 16:a=es;break;case 536870912:a=cp;break;default:a=es}a=zm(a,Tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Tm(e,t){if(Xl=-1,Kl=0,(Z&6)!==0)throw Error(A(327));var a=e.callbackNode;if(no()&&e.callbackNode!==a)return null;var r=ts(e,e===ke?Te:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=vs(e,r);else{t=r;var o=Z;Z|=2;var n=Em();(ke!==e||Te!==t)&&(aa=null,po=xe()+500,mr(e,t));do try{zx();break}catch(s){Fm(e,s)}while(!0);ed(),hs.current=n,Z=o,Le!==null?t=0:(ke=null,Te=0,t=Ie)}if(t!==0){if(t===2&&(o=ou(e),o!==0&&(r=o,t=Mu(e,o))),t===1)throw a=In,mr(e,0),Pa(e,r),Ze(e,xe()),a;if(t===6)Pa(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Dx(o)&&(t=vs(e,r),t===2&&(n=ou(e),n!==0&&(r=n,t=Mu(e,n))),t===1))throw a=In,mr(e,0),Pa(e,r),Ze(e,xe()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:dr(e,$e,aa);break;case 3:if(Pa(e,r),(r&130023424)===r&&(t=gd+500-xe(),10<t)){if(ts(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fu(dr.bind(null,e,$e,aa),t);break}dr(e,$e,aa);break;case 4:if(Pa(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Rt(r);n=1<<l,l=t[l],l>o&&(o=l),r&=~n}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ax(r/1960))-r,10<r){e.timeoutHandle=fu(dr.bind(null,e,$e,aa),r);break}dr(e,$e,aa);break;case 5:dr(e,$e,aa);break;default:throw Error(A(329))}}}return Ze(e,xe()),e.callbackNode===a?Tm.bind(null,e):null}function Mu(e,t){var a=nn;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=vs(e,t),e!==2&&(t=$e,$e=a,t!==null&&Au(t)),e}function Au(e){$e===null?$e=e:$e.push.apply($e,e)}function Dx(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],n=o.getSnapshot;o=o.value;try{if(!Ft(n(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pa(e,t){for(t&=~md,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Rt(t),r=1<<a;e[a]=-1,t&=~r}}function Uf(e){if((Z&6)!==0)throw Error(A(327));no();var t=ts(e,0);if((t&1)===0)return Ze(e,xe()),null;var a=vs(e,t);if(e.tag!==0&&a===2){var r=ou(e);r!==0&&(t=r,a=Mu(e,r))}if(a===1)throw a=In,mr(e,0),Pa(e,t),Ze(e,xe()),a;if(a===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dr(e,$e,aa),Ze(e,xe()),null}function hd(e,t){var a=Z;Z|=1;try{return e(t)}finally{Z=a,Z===0&&(po=xe()+500,ks&&qa())}}function Lr(e){Ta!==null&&Ta.tag===0&&(Z&6)===0&&no();var t=Z;Z|=1;var a=ht.transition,r=J;try{if(ht.transition=null,J=1,e)return e()}finally{J=r,ht.transition=a,Z=t,(Z&6)===0&&qa()}}function xd(){tt=Jr.current,ie(Jr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,dx(a)),Le!==null)for(a=Le.return;a!==null;){var r=a;switch(Zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:co(),ie(Ke),ie(Ue),ld();break;case 5:nd(r);break;case 4:co();break;case 13:ie(fe);break;case 19:ie(fe);break;case 10:td(r.type._context);break;case 22:case 23:xd()}a=a.return}if(ke=e,Le=e=Na(e.current,null),Te=tt=t,Ie=0,In=null,md=Fs=vr=0,$e=nn=null,fr!==null){for(t=0;t<fr.length;t++)if(a=fr[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,n=a.pending;if(n!==null){var l=n.next;n.next=o,r.next=l}a.pending=r}fr=null}return e}function Fm(e,t){do{var a=Le;try{if(ed(),jl.current=gs,ms){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ms=!1}if(yr=0,we=be=pe=null,rn=!1,Sn=0,pd.current=null,a===null||a.return===null){Ie=1,In=t,Le=null;break}e:{var n=e,l=a.return,s=a,i=t;if(t=Te,s.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,p=s,g=p.tag;if((p.mode&1)===0&&(g===0||g===11||g===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=kf(l);if(S!==null){S.flags&=-257,Pf(S,l,s,n,t),S.mode&1&&wf(n,u,t),t=S,i=u;var d=t.updateQueue;if(d===null){var L=new Set;L.add(i),t.updateQueue=L}else d.add(i);break e}else{if((t&1)===0){wf(n,u,t),yd();break e}i=Error(A(426))}}else if(de&&s.mode&1){var b=kf(l);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Pf(b,l,s,n,t),Yu(fo(i,s));break e}}n=i=fo(i,s),Ie!==4&&(Ie=2),nn===null?nn=[n]:nn.push(n),n=l;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var c=pm(n,i,t);vf(n,c);break e;case 1:s=i;var f=n.type,m=n.stateNode;if((n.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ba===null||!Ba.has(m)))){n.flags|=65536,t&=-t,n.lanes|=t;var I=mm(n,s,t);vf(n,I);break e}}n=n.return}while(n!==null)}Am(a)}catch(T){t=T,Le===a&&a!==null&&(Le=a=a.return);continue}break}while(!0)}function Em(){var e=hs.current;return hs.current=gs,e===null?gs:e}function yd(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),ke===null||(vr&268435455)===0&&(Fs&268435455)===0||Pa(ke,Te)}function vs(e,t){var a=Z;Z|=2;var r=Em();(ke!==e||Te!==t)&&(aa=null,mr(e,t));do try{Bx();break}catch(o){Fm(e,o)}while(!0);if(ed(),Z=a,hs.current=r,Le!==null)throw Error(A(261));return ke=null,Te=0,Ie}function Bx(){for(;Le!==null;)Mm(Le)}function zx(){for(;Le!==null&&!uh();)Mm(Le)}function Mm(e){var t=Bm(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Am(e):Le=t,pd.current=null}function Am(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=Rx(a,t,tt),a!==null){Le=a;return}}else{if(a=Tx(a,t),a!==null){a.flags&=32767,Le=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ie===0&&(Ie=5)}function dr(e,t,a){var r=J,o=ht.transition;try{ht.transition=null,J=1,Nx(e,t,a,r)}finally{ht.transition=o,J=r}return null}function Nx(e,t,a,r){do no();while(Ta!==null);if((Z&6)!==0)throw Error(A(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var n=a.lanes|a.childLanes;if(vh(e,n),e===ke&&(Le=ke=null,Te=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_l||(_l=!0,zm(es,function(){return no(),null})),n=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||n){n=ht.transition,ht.transition=null;var l=J;J=1;var s=Z;Z|=4,pd.current=null,Ex(e,a),Pm(a,e),nx(du),as=!!uu,du=uu=null,e.current=a,Mx(a,e,o),dh(),Z=s,J=l,ht.transition=n}else e.current=a;if(_l&&(_l=!1,Ta=e,ys=o),n=e.pendingLanes,n===0&&(Ba=null),ph(a.stateNode,r),Ze(e,xe()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(xs)throw xs=!1,e=Fu,Fu=null,e;return(ys&1)!==0&&e.tag!==0&&no(),n=e.pendingLanes,(n&1)!==0?e===Eu?ln++:(ln=0,Eu=e):ln=0,qa(),null}function no(){if(Ta!==null){var e=pp(ys),t=ht.transition,a=J;try{if(ht.transition=null,J=16>e?16:e,Ta===null)var r=!1;else{if(e=Ta,Ta=null,ys=0,(Z&6)!==0)throw Error(A(331));var o=Z;for(Z|=4,O=e.current;O!==null;){var n=O,l=n.child;if((O.flags&16)!==0){var s=n.deletions;if(s!==null){for(var i=0;i<s.length;i++){var u=s[i];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:on(8,p,n)}var g=p.child;if(g!==null)g.return=p,O=g;else for(;O!==null;){p=O;var x=p.sibling,S=p.return;if(Im(p),p===u){O=null;break}if(x!==null){x.return=S,O=x;break}O=S}}}var d=n.alternate;if(d!==null){var L=d.child;if(L!==null){d.child=null;do{var b=L.sibling;L.sibling=null,L=b}while(L!==null)}}O=n}}if((n.subtreeFlags&2064)!==0&&l!==null)l.return=n,O=l;else e:for(;O!==null;){if(n=O,(n.flags&2048)!==0)switch(n.tag){case 0:case 11:case 15:on(9,n,n.return)}var c=n.sibling;if(c!==null){c.return=n.return,O=c;break e}O=n.return}}var f=e.current;for(O=f;O!==null;){l=O;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,O=m;else e:for(l=f;O!==null;){if(s=O,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ts(9,s)}}catch(T){he(s,s.return,T)}if(s===l){O=null;break e}var I=s.sibling;if(I!==null){I.return=s.return,O=I;break e}O=s.return}}if(Z=o,qa(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Ss,e)}catch{}r=!0}return r}finally{J=a,ht.transition=t}}return!1}function _f(e,t,a){t=fo(a,t),t=pm(e,t,1),e=Da(e,t,1),t=Ve(),e!==null&&(wn(e,1,t),Ze(e,t))}function he(e,t,a){if(e.tag===3)_f(e,e,a);else for(;t!==null;){if(t.tag===3){_f(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ba===null||!Ba.has(r))){e=fo(a,e),e=mm(t,e,1),t=Da(t,e,1),e=Ve(),t!==null&&(wn(t,1,e),Ze(t,e));break}}t=t.return}}function Ox(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&a,ke===e&&(Te&a)===a&&(Ie===4||Ie===3&&(Te&130023424)===Te&&500>xe()-gd?mr(e,0):md|=a),Ze(e,t)}function Dm(e,t){t===0&&((e.mode&1)===0?t=1:(t=kl,kl<<=1,(kl&130023424)===0&&(kl=4194304)));var a=Ve();e=ua(e,t),e!==null&&(wn(e,t,a),Ze(e,a))}function Ux(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Dm(e,a)}function _x(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Dm(e,a)}var Bm;Bm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Xe=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return Xe=!1,Px(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,de&&(t.flags&1048576)!==0&&Up(t,us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$l(e,t),e=t.pendingProps;var o=so(t,Ue.current);oo(t,a),o=id(null,t,r,e,o,a);var n=ud();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(n=!0,ss(t)):n=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,rd(t),o.updater=Rs,t.stateNode=o,o._reactInternals=t,vu(t,r,e,a),t=Cu(null,t,r,!0,n,a)):(t.tag=0,de&&n&&Qu(t),We(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch($l(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qx(r),e=wt(r,e),o){case 0:t=Su(null,t,r,e,a);break e;case 1:t=Ff(null,t,r,e,a);break e;case 11:t=Rf(null,t,r,e,a);break e;case 14:t=Tf(null,t,r,wt(r.type,e),a);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Su(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Ff(e,t,r,o,a);case 3:e:{if(ym(t),e===null)throw Error(A(387));r=t.pendingProps,n=t.memoizedState,o=n.element,jp(e,t),fs(t,r,null,a);var l=t.memoizedState;if(r=l.element,n.isDehydrated)if(n={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){o=fo(Error(A(423)),t),t=Ef(e,t,r,a,o);break e}else if(r!==o){o=fo(Error(A(424)),t),t=Ef(e,t,r,a,o);break e}else for(at=Aa(t.stateNode.containerInfo.firstChild),rt=t,de=!0,Pt=null,a=Wp(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),r===o){t=da(e,t,a);break e}We(e,t,r,a)}t=t.child}return t;case 5:return Gp(t),e===null&&hu(t),r=t.type,o=t.pendingProps,n=e!==null?e.memoizedProps:null,l=o.children,cu(r,o)?l=null:n!==null&&cu(r,n)&&(t.flags|=32),xm(e,t),We(e,t,l,a),t.child;case 6:return e===null&&hu(t),null;case 13:return vm(e,t,a);case 4:return od(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,a):We(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Rf(e,t,r,o,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,n=t.memoizedProps,l=o.value,le(ds,r._currentValue),r._currentValue=l,n!==null)if(Ft(n.value,l)){if(n.children===o.children&&!Ke.current){t=da(e,t,a);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var s=n.dependencies;if(s!==null){l=n.child;for(var i=s.firstContext;i!==null;){if(i.context===r){if(n.tag===1){i=la(-1,a&-a),i.tag=2;var u=n.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i}}n.lanes|=a,i=n.alternate,i!==null&&(i.lanes|=a),xu(n.return,a,t),s.lanes|=a;break}i=i.next}}else if(n.tag===10)l=n.type===t.type?null:n.child;else if(n.tag===18){if(l=n.return,l===null)throw Error(A(341));l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),xu(l,a,t),l=n.sibling}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===t){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}We(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oo(t,a),o=xt(o),r=r(o),t.flags|=1,We(e,t,r,a),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),Tf(e,t,r,o,a);case 15:return gm(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),$l(e,t),t.tag=1,Qe(r)?(e=!0,ss(t)):e=!1,oo(t,a),fm(t,r,o),vu(t,r,o,a),Cu(null,t,r,!0,e,a);case 19:return Lm(e,t,a);case 22:return hm(e,t,a)}throw Error(A(156,t.tag))};function zm(e,t){return up(e,t)}function Hx(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,r){return new Hx(e,t,a,r)}function vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qx(e){if(typeof e=="function")return vd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Uu)return 14}return 2}function Na(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Ql(e,t,a,r,o,n){var l=2;if(r=e,typeof e=="function")vd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wr:return gr(a.children,o,n,t);case Nu:l=8,o|=8;break;case Wi:return e=gt(12,a,t,o|2),e.elementType=Wi,e.lanes=n,e;case Vi:return e=gt(13,a,t,o),e.elementType=Vi,e.lanes=n,e;case ji:return e=gt(19,a,t,o),e.elementType=ji,e.lanes=n,e;case Gf:return Es(a,o,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:l=10;break e;case jf:l=9;break e;case Ou:l=11;break e;case Uu:l=14;break e;case Ia:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=gt(l,a,t,o),t.elementType=e,t.type=r,t.lanes=n,t}function gr(e,t,a,r){return e=gt(7,e,r,t),e.lanes=a,e}function Es(e,t,a,r){return e=gt(22,e,r,t),e.elementType=Gf,e.lanes=a,e.stateNode={isHidden:!1},e}function _i(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function Hi(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wx(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ld(e,t,a,r,o,n,l,s,i){return e=new Wx(e,t,a,s,i),t===1?(t=1,n===!0&&(t|=8)):t=0,n=gt(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(n),e}function Vx(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function Nm(e){if(!e)return Ua;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var a=e.type;if(Qe(a))return Np(e,a,t)}return t}function Om(e,t,a,r,o,n,l,s,i){return e=Ld(a,r,!0,e,o,n,l,s,i),e.context=Nm(null),a=e.current,r=Ve(),o=za(a),n=la(r,o),n.callback=t??null,Da(a,n,o),e.current.lanes=o,wn(e,o,r),Ze(e,r),e}function Ms(e,t,a,r){var o=t.current,n=Ve(),l=za(o);return a=Nm(a),t.context===null?t.context=a:t.pendingContext=a,t=la(n,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Da(o,t,l),e!==null&&(Tt(e,o,l,n),Vl(e,o,l)),l}function Ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Sd(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function jx(){return null}var Um=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cd(e){this._internalRoot=e}As.prototype.render=Cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ms(e,t,null,null)};As.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){Ms(null,e,null,null)}),t[ia]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=hp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&yp(e)}};function bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qf(){}function Gx(e,t,a,r,o){if(o){if(typeof r=="function"){var n=r;r=function(){var u=Ls(l);n.call(u)}}var l=Om(t,r,e,0,null,!1,!1,"",qf);return e._reactRootContainer=l,e[ia]=l.current,hn(e.nodeType===8?e.parentNode:e),Lr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ls(i);s.call(u)}}var i=Ld(e,0,!1,null,null,!1,!1,"",qf);return e._reactRootContainer=i,e[ia]=i.current,hn(e.nodeType===8?e.parentNode:e),Lr(function(){Ms(t,i,a,r)}),i}function Bs(e,t,a,r,o){var n=a._reactRootContainer;if(n){var l=n;if(typeof o=="function"){var s=o;o=function(){var i=Ls(l);s.call(i)}}Ms(t,l,e,o)}else l=Gx(a,t,e,o,r);return Ls(l)}mp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Qo(t.pendingLanes);a!==0&&(qu(t,a|1),Ze(t,xe()),(Z&6)===0&&(po=xe()+500,qa()))}break;case 13:Lr(function(){var r=ua(e,1);if(r!==null){var o=Ve();Tt(r,e,1,o)}}),Sd(e,1)}};Wu=function(e){if(e.tag===13){var t=ua(e,134217728);if(t!==null){var a=Ve();Tt(t,e,134217728,a)}Sd(e,134217728)}};gp=function(e){if(e.tag===13){var t=za(e),a=ua(e,t);if(a!==null){var r=Ve();Tt(a,e,t,r)}Sd(e,t)}};hp=function(){return J};xp=function(e,t){var a=J;try{return J=e,t()}finally{J=a}};tu=function(e,t,a){switch(t){case"input":if(Xi(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=ws(r);if(!o)throw Error(A(90));Xf(r),Xi(r,o)}}}break;case"textarea":Qf(e,a);break;case"select":t=a.value,t!=null&&eo(e,!!a.multiple,t,!1)}};rp=hd;op=Lr;var $x={usingClientEntryPoint:!1,Events:[Pn,$r,ws,tp,ap,hd]},Go={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xx={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ca.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sp(e),e===null?null:e.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($o=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$o.isDisabled&&$o.supportsFiber))try{Ss=$o.inject(Xx),Wt=$o}catch{}var $o;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;lt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(t))throw Error(A(200));return Vx(e,t,null,a)};lt.createRoot=function(e,t){if(!bd(e))throw Error(A(299));var a=!1,r="",o=Um;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ld(e,1,!1,null,null,a,!1,r,o),e[ia]=t.current,hn(e.nodeType===8?e.parentNode:e),new Cd(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=sp(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Lr(e)};lt.hydrate=function(e,t,a){if(!Ds(t))throw Error(A(200));return Bs(null,e,t,!0,a)};lt.hydrateRoot=function(e,t,a){if(!bd(e))throw Error(A(405));var r=a!=null&&a.hydratedSources||null,o=!1,n="",l=Um;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),t=Om(t,null,e,1,a??null,o,!1,n,l),e[ia]=t.current,hn(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new As(t)};lt.render=function(e,t,a){if(!Ds(t))throw Error(A(200));return Bs(null,e,t,!1,a)};lt.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(A(40));return e._reactRootContainer?(Lr(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[ia]=null})}),!0):!1};lt.unstable_batchedUpdates=hd;lt.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!Ds(a))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Bs(e,t,a,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426"});var Wm=ta((AL,qm)=>{"use strict";function Hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm)}catch(e){console.error(e)}}Hm(),qm.exports=_m()});var jm=ta(Id=>{"use strict";var Vm=Wm();Id.createRoot=Vm.createRoot,Id.hydrateRoot=Vm.hydrateRoot;var DL});var Ym=ta(Us=>{"use strict";var m1=ve(),g1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,y1=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function Zm(e,t,a){var r,o={},n=null,l=null;a!==void 0&&(n=""+a),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)x1.call(t,r)&&!v1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:g1,type:e,key:n,ref:l,props:o,_owner:y1.current}}Us.Fragment=h1;Us.jsx=Zm;Us.jsxs=Zm});var G=ta((aI,Jm)=>{"use strict";Jm.exports=Ym()});var x0=H(jm());var Os=H(ve(),1);var zs=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var Gm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var $m=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var wd=e=>{let t=$m(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Tn=H(ve(),1);var Ns={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Xm=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var ho=H(ve(),1);var Kx=(0,ho.createContext)({});var Km=()=>(0,ho.useContext)(Kx);var Qm=(0,Tn.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:r,className:o="",children:n,iconNode:l,...s},i)=>{let{size:u=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:x="currentColor",className:S=""}=Km()??{},d=r??g?Number(a??p)*24/Number(t??u):a??p;return(0,Tn.createElement)("svg",{ref:i,...Ns,width:t??u??Ns.width,height:t??u??Ns.height,stroke:e??x,strokeWidth:d,className:zs("lucide",S,o),...!n&&!Xm(s)&&{"aria-hidden":"true"},...s},[...l.map(([L,b])=>(0,Tn.createElement)(L,b)),...Array.isArray(n)?n:[n]])});var w=(e,t)=>{let a=(0,Os.forwardRef)(({className:r,...o},n)=>(0,Os.createElement)(Qm,{ref:n,iconNode:t,className:zs(`lucide-${Gm(wd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=wd(e),a};var Qx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ge=w("activity",Qx);var Zx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],br=w("arrow-left",Zx);var Yx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],jt=w("arrow-right",Yx);var Jx=[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]],Fn=w("battery",Jx);var ey=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],En=w("book-open",ey);var ty=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Mn=w("box",ty);var ay=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],An=w("building-2",ay);var ry=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Et=w("chart-column",ry);var oy=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],Wa=w("chart-no-axes-column",oy);var ny=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xo=w("check",ny);var ly=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Dn=w("chevron-down",ly);var sy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Bn=w("chevron-left",sy);var iy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Va=w("chevron-right",iy);var uy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],vt=w("circle-alert",uy);var dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ja=w("circle-check",dy);var cy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ee=w("circle-check-big",cy);var fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Mt=w("circle-question-mark",fy);var py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ga=w("circle-x",py);var my=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Ir=w("clock",my);var gy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],zn=w("code",gy);var hy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Nn=w("copy",hy);var xy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],$a=w("cpu",xy);var yy=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],st=w("database",yy);var vy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],On=w("download",vy);var Ly=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],wr=w("droplets",Ly);var Sy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Un=w("external-link",Sy);var Cy=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],yo=w("eye-off",Cy);var by=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fa=w("eye",by);var Iy=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Xa=w("flask-conical",Iy);var wy=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],_n=w("git-branch",wy);var ky=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],Hn=w("git-fork",ky);var Py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ka=w("globe",Py);var Ry=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],qn=w("hard-drive",Ry);var Ty=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Qa=w("house",Ty);var Fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Wn=w("info",Fy);var Ey=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Za=w("layers",Ey);var My=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Vn=w("layout-dashboard",My);var Ay=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ya=w("loader-circle",Ay);var Dy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Gt=w("lock",Dy);var By=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],vo=w("log-in",By);var zy=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Lo=w("log-out",zy);var Ny=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$t=w("mail",Ny);var Oy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ja=w("map-pin",Oy);var Uy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],kr=w("menu",Uy);var _y=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Pr=w("message-square",_y);var Hy=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],jn=w("monitor",Hy);var qy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Rr=w("moon",qy);var Wy=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Gn=w("network",Wy);var Vy=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Tr=w("pause",Vy);var jy=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],$n=w("phone",jy);var Gy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],pa=w("play",Gy);var $y=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xt=w("plus",$y);var Xy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ma=w("refresh-cw",Xy);var Ky=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],So=w("search",Ky);var Qy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Xn=w("send",Qy);var Zy=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fr=w("settings",Zy);var Yy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],er=w("shield",Yy);var Jy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Kn=w("star",Jy);var e1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Er=w("sun",e1);var t1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qn=w("target",t1);var a1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Mr=w("terminal",a1);var r1=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Ar=w("thermometer",r1);var o1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kt=w("trash-2",o1);var n1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ga=w("trending-up",n1);var l1=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Zn=w("upload",l1);var s1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Co=w("user-plus",s1);var i1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Yn=w("user",i1);var u1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],tr=w("users",u1);var d1=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],ha=w("wifi",d1);var c1=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Dr=w("wind",c1);var f1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],At=w("x",f1);var p1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Pe=w("zap",p1);var eg=H(G());var tg=H(G());var L1=H(G());var bo=H(G()),S1=({size:e="md",className:t="",text:a})=>{let r={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"};return(0,bo.jsx)("div",{className:`flex items-center justify-center ${t}`,children:(0,bo.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,bo.jsx)(Ya,{className:`animate-spin text-blue-600 ${r[e]}`}),a&&(0,bo.jsx)("p",{className:"text-sm text-gray-600 animate-pulse",children:a})]})})},kd=S1;var ag=H(G()),C1=({children:e,size:t="lg",className:a=""})=>(0,ag.jsx)("div",{className:`mx-auto px-4 sm:px-6 lg:px-8 ${{sm:"max-w-2xl",md:"max-w-4xl",lg:"max-w-6xl",xl:"max-w-7xl",full:"max-w-full"}[t]} ${a}`,children:e}),Pd=C1;var rg=H(G());var lg=H(ve());var ar=H(ve()),ng=H(G()),b1={colors:{rust:"#0071E3",orange:"#0071E3",amber:"#0071E3",yellow:"#0071E3",gray:"#86868B",zinc:"#86868B",stone:"#86868B",slate:"#0071E3",indigo:"#0071E3",purple:"#0071E3",teal:"#0071E3",navy:"#1D1D1F",navyLight:"#3A3A3C",navyDark:"#000000",gold:"#0071E3",goldLight:"#2997FF",goldDark:"#0068D0",champagne:"#F5F5F7",success:"#34C759",warning:"#FF9500",error:"#FF3B30",info:"#0071E3",gruvYellow:"#0071E3",gruvYellowB:"#2997FF",gruvOrange:"#0071E3",gruvOrangeB:"#2997FF",gruvAqua:"#0071E3",gruvAquaB:"#2997FF",gruvBlue:"#0071E3",gruvBlueB:"#2997FF",gruvPurple:"#0071E3",gruvPurpleB:"#2997FF",gruvGreen:"#0071E3",gruvGreenB:"#2997FF",gruvRed:"#FF3B30",gruvRedB:"#FF453A",background:"#F5F5F7",surface:"#FFFFFF",card:"#FFFFFF",overlay:"rgba(255,255,255,0.85)",text:{primary:"#1D1D1F",secondary:"#86868B",tertiary:"#A1A1A6",inverse:"#FFFFFF"},border:{primary:"rgba(0,0,0,0.08)",secondary:"rgba(0,0,0,0.12)",focus:"#0071E3"},shadow:{sm:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",md:"0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)",lg:"0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)",xl:"0 1px 3px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.10)"}},gradients:{primary:"linear-gradient(135deg, #0071E3 0%, #2997FF 100%)",secondary:"linear-gradient(135deg, #34C759 0%, #30B0C7 100%)",accent:"linear-gradient(135deg, #0071E3 0%, #5856D6 100%)",background:"linear-gradient(180deg, #F5F5F7 0%, #FFFFFF 100%)",gold:"linear-gradient(135deg, #0068D0 0%, #0071E3 60%, #2997FF 100%)",glass:"rgba(255,255,255,0.72)"}},I1={colors:{rust:"#2997FF",orange:"#2997FF",amber:"#2997FF",yellow:"#2997FF",gray:"#636366",zinc:"#636366",stone:"#636366",slate:"#2997FF",indigo:"#2997FF",purple:"#2997FF",teal:"#2997FF",navy:"#F5F5F7",navyLight:"#E5E5EA",navyDark:"#000000",gold:"#2997FF",goldLight:"#5AC8FA",goldDark:"#0A84FF",champagne:"#2C2C2E",success:"#30D158",warning:"#FF9F0A",error:"#FF453A",info:"#2997FF",gruvYellow:"#2997FF",gruvYellowB:"#5AC8FA",gruvOrange:"#2997FF",gruvOrangeB:"#5AC8FA",gruvAqua:"#2997FF",gruvAquaB:"#5AC8FA",gruvBlue:"#2997FF",gruvBlueB:"#5AC8FA",gruvPurple:"#2997FF",gruvPurpleB:"#5AC8FA",gruvGreen:"#2997FF",gruvGreenB:"#5AC8FA",gruvRed:"#FF453A",gruvRedB:"#FF453A",background:"#000000",surface:"#1C1C1E",card:"#1C1C1E",overlay:"rgba(28,28,30,0.90)",text:{primary:"#F5F5F7",secondary:"#98989D",tertiary:"#636366",inverse:"#000000"},border:{primary:"rgba(255,255,255,0.08)",secondary:"rgba(255,255,255,0.12)",focus:"#2997FF"},shadow:{sm:"0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",md:"0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)",lg:"0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35)",xl:"0 1px 3px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.45)"}},gradients:{primary:"linear-gradient(135deg, #0A84FF 0%, #5AC8FA 100%)",secondary:"linear-gradient(135deg, #30D158 0%, #32ADE6 100%)",accent:"linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)",background:"linear-gradient(180deg, #000000 0%, #1C1C1E 100%)",gold:"linear-gradient(135deg, #0A84FF 0%, #2997FF 100%)",glass:"rgba(28,28,30,0.72)"}},og=(0,ar.createContext)(void 0),Se=()=>{let e=(0,ar.useContext)(og);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Rd=({children:e})=>{let[t,a]=(0,ar.useState)(()=>localStorage.getItem("blazecore-theme")||"light"),r=t==="light"?b1:I1;(0,ar.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("blazecore-theme",t)},[t]);let o=()=>a(l=>l==="light"?"dark":"light"),n=l=>a(l);return(0,ng.jsx)(og.Provider,{value:{theme:r,mode:t,toggleTheme:o,setTheme:n},children:e})};var sg=H(G());var w1=H(G());var ig=H(ve());var ug=H(G());var St=H(ve());function Jn(e,t){return function(){return e.apply(t,arguments)}}var{toString:k1}=Object.prototype,{getPrototypeOf:Hs}=Object,{iterator:qs,toStringTag:fg}=Symbol,Ws=(e=>t=>{let a=k1.call(t);return e[a]||(e[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Dt=e=>(e=e.toLowerCase(),t=>Ws(t)===e),Vs=e=>t=>typeof t===e,{isArray:wo}=Array,Io=Vs("undefined");function el(e){return e!==null&&!Io(e)&&e.constructor!==null&&!Io(e.constructor)&&Ye(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var pg=Dt("ArrayBuffer");function P1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&pg(e.buffer),t}var R1=Vs("string"),Ye=Vs("function"),mg=Vs("number"),tl=e=>e!==null&&typeof e=="object",T1=e=>e===!0||e===!1,_s=e=>{if(Ws(e)!=="object")return!1;let t=Hs(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(fg in e)&&!(qs in e)},F1=e=>{if(!tl(e)||el(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},E1=Dt("Date"),M1=Dt("File"),A1=e=>!!(e&&typeof e.uri<"u"),D1=e=>e&&typeof e.getParts<"u",B1=Dt("Blob"),z1=Dt("FileList"),N1=e=>tl(e)&&Ye(e.pipe);function O1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}var dg=O1(),cg=typeof dg.FormData<"u"?dg.FormData:void 0,U1=e=>{if(!e)return!1;if(cg&&e instanceof cg)return!0;let t=Hs(e);if(!t||t===Object.prototype||!Ye(e.append))return!1;let a=Ws(e);return a==="formdata"||a==="object"&&Ye(e.toString)&&e.toString()==="[object FormData]"},_1=Dt("URLSearchParams"),[H1,q1,W1,V1]=["ReadableStream","Request","Response","Headers"].map(Dt),j1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function al(e,t,{allOwnKeys:a=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),wo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(el(e))return;let n=a?Object.getOwnPropertyNames(e):Object.keys(e),l=n.length,s;for(r=0;r<l;r++)s=n[r],t.call(null,e[s],s,e)}}function gg(e,t){if(el(e))return null;t=t.toLowerCase();let a=Object.keys(e),r=a.length,o;for(;r-- >0;)if(o=a[r],t===o.toLowerCase())return o;return null}var Br=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hg=e=>!Io(e)&&e!==Br;function Td(...e){let{caseless:t,skipUndefined:a}=hg(this)&&this||{},r={},o=(n,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;let s=t&&gg(r,l)||l,i=Fd(r,s)?r[s]:void 0;_s(i)&&_s(n)?r[s]=Td(i,n):_s(n)?r[s]=Td({},n):wo(n)?r[s]=n.slice():(!a||!Io(n))&&(r[s]=n)};for(let n=0,l=e.length;n<l;n++)e[n]&&al(e[n],o);return r}var G1=(e,t,a,{allOwnKeys:r}={})=>(al(t,(o,n)=>{a&&Ye(o)?Object.defineProperty(e,n,{__proto__:null,value:Jn(o,a),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,n,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),$1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),X1=(e,t,a,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),a&&Object.assign(e.prototype,a)},K1=(e,t,a,r)=>{let o,n,l,s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),n=o.length;n-- >0;)l=o[n],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=a!==!1&&Hs(e)}while(e&&(!a||a(e,t))&&e!==Object.prototype);return t},Q1=(e,t,a)=>{e=String(e),(a===void 0||a>e.length)&&(a=e.length),a-=t.length;let r=e.indexOf(t,a);return r!==-1&&r===a},Z1=e=>{if(!e)return null;if(wo(e))return e;let t=e.length;if(!mg(t))return null;let a=new Array(t);for(;t-- >0;)a[t]=e[t];return a},Y1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hs(Uint8Array)),J1=(e,t)=>{let r=(e&&e[qs]).call(e),o;for(;(o=r.next())&&!o.done;){let n=o.value;t.call(e,n[0],n[1])}},ev=(e,t)=>{let a,r=[];for(;(a=e.exec(t))!==null;)r.push(a);return r},tv=Dt("HTMLFormElement"),av=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,r,o){return r.toUpperCase()+o}),Fd=(({hasOwnProperty:e})=>(t,a)=>e.call(t,a))(Object.prototype),rv=Dt("RegExp"),xg=(e,t)=>{let a=Object.getOwnPropertyDescriptors(e),r={};al(a,(o,n)=>{let l;(l=t(o,n,e))!==!1&&(r[n]=l||o)}),Object.defineProperties(e,r)},ov=e=>{xg(e,(t,a)=>{if(Ye(e)&&["arguments","caller","callee"].includes(a))return!1;let r=e[a];if(Ye(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},nv=(e,t)=>{let a={},r=o=>{o.forEach(n=>{a[n]=!0})};return wo(e)?r(e):r(String(e).split(t)),a},lv=()=>{},sv=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function iv(e){return!!(e&&Ye(e.append)&&e[fg]==="FormData"&&e[qs])}var uv=e=>{let t=new Array(10),a=(r,o)=>{if(tl(r)){if(t.indexOf(r)>=0)return;if(el(r))return r;if(!("toJSON"in r)){t[o]=r;let n=wo(r)?[]:{};return al(r,(l,s)=>{let i=a(l,o+1);!Io(i)&&(n[s]=i)}),t[o]=void 0,n}}return r};return a(e,0)},dv=Dt("AsyncFunction"),cv=e=>e&&(tl(e)||Ye(e))&&Ye(e.then)&&Ye(e.catch),yg=((e,t)=>e?setImmediate:t?((a,r)=>(Br.addEventListener("message",({source:o,data:n})=>{o===Br&&n===a&&r.length&&r.shift()()},!1),o=>{r.push(o),Br.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",Ye(Br.postMessage)),fv=typeof queueMicrotask<"u"?queueMicrotask.bind(Br):typeof process<"u"&&process.nextTick||yg,pv=e=>e!=null&&Ye(e[qs]),C={isArray:wo,isArrayBuffer:pg,isBuffer:el,isFormData:U1,isArrayBufferView:P1,isString:R1,isNumber:mg,isBoolean:T1,isObject:tl,isPlainObject:_s,isEmptyObject:F1,isReadableStream:H1,isRequest:q1,isResponse:W1,isHeaders:V1,isUndefined:Io,isDate:E1,isFile:M1,isReactNativeBlob:A1,isReactNative:D1,isBlob:B1,isRegExp:rv,isFunction:Ye,isStream:N1,isURLSearchParams:_1,isTypedArray:Y1,isFileList:z1,forEach:al,merge:Td,extend:G1,trim:j1,stripBOM:$1,inherits:X1,toFlatObject:K1,kindOf:Ws,kindOfTest:Dt,endsWith:Q1,toArray:Z1,forEachEntry:J1,matchAll:ev,isHTMLForm:tv,hasOwnProperty:Fd,hasOwnProp:Fd,reduceDescriptors:xg,freezeMethods:ov,toObjectSet:nv,toCamelCase:av,noop:lv,toFiniteNumber:sv,findKey:gg,global:Br,isContextDefined:hg,isSpecCompliantForm:iv,toJSONObject:uv,isAsyncFn:dv,isThenable:cv,setImmediate:yg,asap:fv,isIterable:pv};var mv=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vg=e=>{let t={},a,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),a=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!a||t[a]&&mv[a])&&(a==="set-cookie"?t[a]?t[a].push(r):t[a]=[r]:t[a]=t[a]?t[a]+", "+r:r)}),t};var Lg=Symbol("internals"),gv=/[^\x09\x20-\x7E\x80-\xFF]/g;function hv(e){let t=0,a=e.length;for(;t<a;){let r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;a>t;){let r=e.charCodeAt(a-1);if(r!==9&&r!==32)break;a-=1}return t===0&&a===e.length?e:e.slice(t,a)}function rl(e){return e&&String(e).trim().toLowerCase()}function xv(e){return hv(e.replace(gv,""))}function js(e){return e===!1||e==null?e:C.isArray(e)?e.map(js):xv(String(e))}function yv(e){let t=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=a.exec(e);)t[r[1]]=r[2];return t}var vv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ed(e,t,a,r,o){if(C.isFunction(r))return r.call(this,t,a);if(o&&(t=a),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function Lv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,a,r)=>a.toUpperCase()+r)}function Sv(e,t){let a=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+a,{__proto__:null,value:function(o,n,l){return this[r].call(this,t,o,n,l)},configurable:!0})})}var ko=class{constructor(t){t&&this.set(t)}set(t,a,r){let o=this;function n(s,i,u){let p=rl(i);if(!p)throw new Error("header name must be a non-empty string");let g=C.findKey(o,p);(!g||o[g]===void 0||u===!0||u===void 0&&o[g]!==!1)&&(o[g||i]=js(s))}let l=(s,i)=>C.forEach(s,(u,p)=>n(u,p,i));if(C.isPlainObject(t)||t instanceof this.constructor)l(t,a);else if(C.isString(t)&&(t=t.trim())&&!vv(t))l(vg(t),a);else if(C.isObject(t)&&C.isIterable(t)){let s={},i,u;for(let p of t){if(!C.isArray(p))throw TypeError("Object iterator must return a key-value pair");s[u=p[0]]=(i=s[u])?C.isArray(i)?[...i,p[1]]:[i,p[1]]:p[1]}l(s,a)}else t!=null&&n(a,t,r);return this}get(t,a){if(t=rl(t),t){let r=C.findKey(this,t);if(r){let o=this[r];if(!a)return o;if(a===!0)return yv(o);if(C.isFunction(a))return a.call(this,o,r);if(C.isRegExp(a))return a.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,a){if(t=rl(t),t){let r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!a||Ed(this,this[r],r,a)))}return!1}delete(t,a){let r=this,o=!1;function n(l){if(l=rl(l),l){let s=C.findKey(r,l);s&&(!a||Ed(r,r[s],s,a))&&(delete r[s],o=!0)}}return C.isArray(t)?t.forEach(n):n(t),o}clear(t){let a=Object.keys(this),r=a.length,o=!1;for(;r--;){let n=a[r];(!t||Ed(this,this[n],n,t,!0))&&(delete this[n],o=!0)}return o}normalize(t){let a=this,r={};return C.forEach(this,(o,n)=>{let l=C.findKey(r,n);if(l){a[l]=js(o),delete a[n];return}let s=t?Lv(n):String(n).trim();s!==n&&delete a[n],a[s]=js(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let a=Object.create(null);return C.forEach(this,(r,o)=>{r!=null&&r!==!1&&(a[o]=t&&C.isArray(r)?r.join(", "):r)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,a])=>t+": "+a).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...a){let r=new this(t);return a.forEach(o=>r.set(o)),r}static accessor(t){let r=(this[Lg]=this[Lg]={accessors:{}}).accessors,o=this.prototype;function n(l){let s=rl(l);r[s]||(Sv(o,l),r[s]=!0)}return C.isArray(t)?t.forEach(n):n(t),this}};ko.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(ko.prototype,({value:e},t)=>{let a=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[a]=r}}});C.freezeMethods(ko);var ye=ko;var Cv="[REDACTED ****]";function bv(e){if(C.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(C.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Iv(e,t){let a=new Set(t.map(n=>String(n).toLowerCase())),r=[],o=n=>{if(n===null||typeof n!="object"||C.isBuffer(n))return n;if(r.indexOf(n)!==-1)return;n instanceof ye&&(n=n.toJSON()),r.push(n);let l;if(C.isArray(n))l=[],n.forEach((s,i)=>{let u=o(s);C.isUndefined(u)||(l[i]=u)});else{if(!C.isPlainObject(n)&&bv(n))return r.pop(),n;l=Object.create(null);for(let[s,i]of Object.entries(n)){let u=a.has(s.toLowerCase())?Cv:o(i);C.isUndefined(u)||(l[s]=u)}}return r.pop(),l};return o(e)}var Me=class e extends Error{static from(t,a,r,o,n,l){let s=new e(t.message,a||t.code,r,o,n);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),l&&Object.assign(s,l),s}constructor(t,a,r,o,n){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,a&&(this.code=a),r&&(this.config=r),o&&(this.request=o),n&&(this.response=n,this.status=n.status)}toJSON(){let t=this.config,a=t&&C.hasOwnProp(t,"redact")?t.redact:void 0,r=C.isArray(a)&&a.length>0?Iv(t,a):C.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};Me.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Me.ERR_BAD_OPTION="ERR_BAD_OPTION";Me.ECONNABORTED="ECONNABORTED";Me.ETIMEDOUT="ETIMEDOUT";Me.ECONNREFUSED="ECONNREFUSED";Me.ERR_NETWORK="ERR_NETWORK";Me.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Me.ERR_DEPRECATED="ERR_DEPRECATED";Me.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Me.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Me.ERR_CANCELED="ERR_CANCELED";Me.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Me.ERR_INVALID_URL="ERR_INVALID_URL";Me.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";var W=Me;var Gs=null;function Ad(e){return C.isPlainObject(e)||C.isArray(e)}function Sg(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Md(e,t,a){return e?e.concat(t).map(function(o,n){return o=Sg(o),!a&&n?"["+o+"]":o}).join(a?".":""):t}function wv(e){return C.isArray(e)&&!e.some(Ad)}var kv=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Pv(e,t,a){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new(Gs||FormData),a=C.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,c){return!C.isUndefined(c[b])});let r=a.metaTokens,o=a.visitor||g,n=a.dots,l=a.indexes,s=a.Blob||typeof Blob<"u"&&Blob,i=a.maxDepth===void 0?100:a.maxDepth,u=s&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function p(L){if(L===null)return"";if(C.isDate(L))return L.toISOString();if(C.isBoolean(L))return L.toString();if(!u&&C.isBlob(L))throw new W("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(L)||C.isTypedArray(L)?u&&typeof Blob=="function"?new Blob([L]):Buffer.from(L):L}function g(L,b,c){let f=L;if(C.isReactNative(t)&&C.isReactNativeBlob(L))return t.append(Md(c,b,n),p(L)),!1;if(L&&!c&&typeof L=="object"){if(C.endsWith(b,"{}"))b=r?b:b.slice(0,-2),L=JSON.stringify(L);else if(C.isArray(L)&&wv(L)||(C.isFileList(L)||C.endsWith(b,"[]"))&&(f=C.toArray(L)))return b=Sg(b),f.forEach(function(I,T){!(C.isUndefined(I)||I===null)&&t.append(l===!0?Md([b],T,n):l===null?b:b+"[]",p(I))}),!1}return Ad(L)?!0:(t.append(Md(c,b,n),p(L)),!1)}let x=[],S=Object.assign(kv,{defaultVisitor:g,convertValue:p,isVisitable:Ad});function d(L,b,c=0){if(!C.isUndefined(L)){if(c>i)throw new W("Object is too deeply nested ("+c+" levels). Max depth: "+i,W.ERR_FORM_DATA_DEPTH_EXCEEDED);if(x.indexOf(L)!==-1)throw Error("Circular reference detected in "+b.join("."));x.push(L),C.forEach(L,function(m,I){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(I)?I.trim():I,b,S))===!0&&d(m,b?b.concat(I):[I],c+1)}),x.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return d(e),t}var rr=Pv;function Cg(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function bg(e,t){this._pairs=[],e&&rr(e,this,t)}var Ig=bg.prototype;Ig.append=function(t,a){this._pairs.push([t,a])};Ig.toString=function(t){let a=t?function(r){return t.call(this,r,Cg)}:Cg;return this._pairs.map(function(o){return a(o[0])+"="+a(o[1])},"").join("&")};var $s=bg;function Rv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ol(e,t,a){if(!t)return e;let r=a&&a.encode||Rv,o=C.isFunction(a)?{serialize:a}:a,n=o&&o.serialize,l;if(n?l=n(t,o):l=C.isURLSearchParams(t)?t.toString():new $s(t,o).toString(r),l){let s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}var Dd=class{constructor(){this.handlers=[]}use(t,a,r){return this.handlers.push({fulfilled:t,rejected:a,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}},Bd=Dd;var Po={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0};var wg=typeof URLSearchParams<"u"?URLSearchParams:$s;var kg=typeof FormData<"u"?FormData:null;var Pg=typeof Blob<"u"?Blob:null;var Rg={isBrowser:!0,classes:{URLSearchParams:wg,FormData:kg,Blob:Pg},protocols:["http","https","file","blob","url","data"]};var Od={};F0(Od,{hasBrowserEnv:()=>Nd,hasStandardBrowserEnv:()=>Tv,hasStandardBrowserWebWorkerEnv:()=>Fv,navigator:()=>zd,origin:()=>Ev});var Nd=typeof window<"u"&&typeof document<"u",zd=typeof navigator=="object"&&navigator||void 0,Tv=Nd&&(!zd||["ReactNative","NativeScript","NS"].indexOf(zd.product)<0),Fv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ev=Nd&&window.location.href||"http://localhost";var ge={...Od,...Rg};function Ud(e,t){return rr(e,new ge.classes.URLSearchParams,{visitor:function(a,r,o,n){return ge.isNode&&C.isBuffer(a)?(this.append(r,a.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}function Mv(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Av(e){let t={},a=Object.keys(e),r,o=a.length,n;for(r=0;r<o;r++)n=a[r],t[n]=e[n];return t}function Dv(e){function t(a,r,o,n){let l=a[n++];if(l==="__proto__")return!0;let s=Number.isFinite(+l),i=n>=a.length;return l=!l&&C.isArray(o)?o.length:l,i?(C.hasOwnProp(o,l)?o[l]=C.isArray(o[l])?o[l].concat(r):[o[l],r]:o[l]=r,!s):((!o[l]||!C.isObject(o[l]))&&(o[l]=[]),t(a,r,o[l],n)&&C.isArray(o[l])&&(o[l]=Av(o[l])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){let a={};return C.forEachEntry(e,(r,o)=>{t(Mv(r),o,a,0)}),a}return null}var Xs=Dv;var Ro=(e,t)=>e!=null&&C.hasOwnProp(e,t)?e[t]:void 0;function Bv(e,t,a){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(a||JSON.stringify)(e)}var _d={transitional:Po,adapter:["xhr","http","fetch"],transformRequest:[function(t,a){let r=a.getContentType()||"",o=r.indexOf("application/json")>-1,n=C.isObject(t);if(n&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o?JSON.stringify(Xs(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(n){let i=Ro(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ud(t,i).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){let u=Ro(this,"env"),p=u&&u.FormData;return rr(s?{"files[]":t}:t,p&&new p,i)}}return n||o?(a.setContentType("application/json",!1),Bv(t)):t}],transformResponse:[function(t){let a=Ro(this,"transitional")||_d.transitional,r=a&&a.forcedJSONParsing,o=Ro(this,"responseType"),n=o==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!o||n)){let s=!(a&&a.silentJSONParsing)&&n;try{return JSON.parse(t,Ro(this,"parseReviver"))}catch(i){if(s)throw i.name==="SyntaxError"?W.from(i,W.ERR_BAD_RESPONSE,this,null,Ro(this,"response")):i}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch","query"],e=>{_d.headers[e]={}});var To=_d;function nl(e,t){let a=this||To,r=t||a,o=ye.from(r.headers),n=r.data;return C.forEach(e,function(s){n=s.call(a,n,o.normalize(),t?t.status:void 0)}),o.normalize(),n}function ll(e){return!!(e&&e.__CANCEL__)}var Hd=class extends W{constructor(t,a,r){super(t??"canceled",W.ERR_CANCELED,a,r),this.name="CanceledError",this.__CANCEL__=!0}},Qt=Hd;function sl(e,t,a){let r=a.config.validateStatus;!a.status||!r||r(a.status)?e(a):t(new W("Request failed with status code "+a.status,a.status>=400&&a.status<500?W.ERR_BAD_REQUEST:W.ERR_BAD_RESPONSE,a.config,a.request,a))}function qd(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function zv(e,t){e=e||10;let a=new Array(e),r=new Array(e),o=0,n=0,l;return t=t!==void 0?t:1e3,function(i){let u=Date.now(),p=r[n];l||(l=u),a[o]=i,r[o]=u;let g=n,x=0;for(;g!==o;)x+=a[g++],g=g%e;if(o=(o+1)%e,o===n&&(n=(n+1)%e),u-l<t)return;let S=p&&u-p;return S?Math.round(x*1e3/S):void 0}}var Tg=zv;function Nv(e,t){let a=0,r=1e3/t,o,n,l=(u,p=Date.now())=>{a=p,o=null,n&&(clearTimeout(n),n=null),e(...u)};return[(...u)=>{let p=Date.now(),g=p-a;g>=r?l(u,p):(o=u,n||(n=setTimeout(()=>{n=null,l(o)},r-g)))},()=>o&&l(o)]}var Fg=Nv;var Fo=(e,t,a=3)=>{let r=0,o=Tg(50,250);return Fg(n=>{let l=n.loaded,s=n.lengthComputable?n.total:void 0,i=s!=null?Math.min(l,s):l,u=Math.max(0,i-r),p=o(u);r=Math.max(r,i);let g={loaded:i,total:s,progress:s?i/s:void 0,bytes:u,rate:p||void 0,estimated:p&&s?(s-i)/p:void 0,event:n,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(g)},a)},Wd=(e,t)=>{let a=e!=null;return[r=>t[0]({lengthComputable:a,total:e,loaded:r}),t[1]]},Vd=e=>(...t)=>C.asap(()=>e(...t));var Eg=ge.hasStandardBrowserEnv?((e,t)=>a=>(a=new URL(a,ge.origin),e.protocol===a.protocol&&e.host===a.host&&(t||e.port===a.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0;var Mg=ge.hasStandardBrowserEnv?{write(e,t,a,r,o,n,l){if(typeof document>"u")return;let s=[`${e}=${encodeURIComponent(t)}`];C.isNumber(a)&&s.push(`expires=${new Date(a).toUTCString()}`),C.isString(r)&&s.push(`path=${r}`),C.isString(o)&&s.push(`domain=${o}`),n===!0&&s.push("secure"),C.isString(l)&&s.push(`SameSite=${l}`),document.cookie=s.join("; ")},read(e){if(typeof document>"u")return null;let t=document.cookie.split(";");for(let a=0;a<t.length;a++){let r=t[a].replace(/^\s+/,""),o=r.indexOf("=");if(o!==-1&&r.slice(0,o)===e)return decodeURIComponent(r.slice(o+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function jd(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gd(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function il(e,t,a){let r=!jd(t);return e&&(r||a===!1)?Gd(e,t):t}var Ag=e=>e instanceof ye?{...e}:e;function Bt(e,t){t=t||{};let a=Object.create(null);Object.defineProperty(a,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(u,p,g,x){return C.isPlainObject(u)&&C.isPlainObject(p)?C.merge.call({caseless:x},u,p):C.isPlainObject(p)?C.merge({},p):C.isArray(p)?p.slice():p}function o(u,p,g,x){if(C.isUndefined(p)){if(!C.isUndefined(u))return r(void 0,u,g,x)}else return r(u,p,g,x)}function n(u,p){if(!C.isUndefined(p))return r(void 0,p)}function l(u,p){if(C.isUndefined(p)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,p)}function s(u,p,g){if(C.hasOwnProp(t,g))return r(u,p);if(C.hasOwnProp(e,g))return r(void 0,u)}let i={url:n,method:n,data:n,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,allowedSocketPaths:l,responseEncoding:l,validateStatus:s,headers:(u,p,g)=>o(Ag(u),Ag(p),g,!0)};return C.forEach(Object.keys({...e,...t}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;let g=C.hasOwnProp(i,p)?i[p]:o,x=C.hasOwnProp(e,p)?e[p]:void 0,S=C.hasOwnProp(t,p)?t[p]:void 0,d=g(x,S,p);C.isUndefined(d)&&g!==s||(a[p]=d)}),a}var Ov=["content-type","content-length"];function Uv(e,t,a){if(a!=="content-only"){e.set(t);return}Object.entries(t).forEach(([r,o])=>{Ov.includes(r.toLowerCase())&&e.set(r,o)})}var _v=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,a)=>String.fromCharCode(parseInt(a,16))),Ks=e=>{let t=Bt({},e),a=x=>C.hasOwnProp(t,x)?t[x]:void 0,r=a("data"),o=a("withXSRFToken"),n=a("xsrfHeaderName"),l=a("xsrfCookieName"),s=a("headers"),i=a("auth"),u=a("baseURL"),p=a("allowAbsoluteUrls"),g=a("url");if(t.headers=s=ye.from(s),t.url=ol(il(u,g,p),e.params,e.paramsSerializer),i&&s.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?_v(i.password):""))),C.isFormData(r)&&(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):C.isFunction(r.getHeaders)&&Uv(s,r.getHeaders(),a("formDataHeaderPolicy"))),ge.hasStandardBrowserEnv&&(C.isFunction(o)&&(o=o(t)),o===!0||o==null&&Eg(t.url))){let S=n&&l&&Mg.read(l);S&&s.set(n,S)}return t};var Hv=typeof XMLHttpRequest<"u",Dg=Hv&&function(e){return new Promise(function(a,r){let o=Ks(e),n=o.data,l=ye.from(o.headers).normalize(),{responseType:s,onUploadProgress:i,onDownloadProgress:u}=o,p,g,x,S,d;function L(){S&&S(),d&&d(),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function c(){if(!b)return;let m=ye.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),T={data:!s||s==="text"||s==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:m,config:e,request:b};sl(function(P){a(P),L()},function(P){r(P),L()},T),b=null}"onloadend"in b?b.onloadend=c:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.startsWith("file:"))||setTimeout(c)},b.onabort=function(){b&&(r(new W("Request aborted",W.ECONNABORTED,e,b)),L(),b=null)},b.onerror=function(I){let T=I&&I.message?I.message:"Network Error",R=new W(T,W.ERR_NETWORK,e,b);R.event=I||null,r(R),L(),b=null},b.ontimeout=function(){let I=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded",T=o.transitional||Po;o.timeoutErrorMessage&&(I=o.timeoutErrorMessage),r(new W(I,T.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,b)),L(),b=null},n===void 0&&l.setContentType(null),"setRequestHeader"in b&&C.forEach(l.toJSON(),function(I,T){b.setRequestHeader(T,I)}),C.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),s&&s!=="json"&&(b.responseType=o.responseType),u&&([x,d]=Fo(u,!0),b.addEventListener("progress",x)),i&&b.upload&&([g,S]=Fo(i),b.upload.addEventListener("progress",g),b.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(p=m=>{b&&(r(!m||m.type?new Qt(null,e,b):m),b.abort(),L(),b=null)},o.cancelToken&&o.cancelToken.subscribe(p),o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p)));let f=qd(o.url);if(f&&!ge.protocols.includes(f)){r(new W("Unsupported protocol "+f+":",W.ERR_BAD_REQUEST,e));return}b.send(n||null)})};var qv=(e,t)=>{let{length:a}=e=e?e.filter(Boolean):[];if(t||a){let r=new AbortController,o,n=function(u){if(!o){o=!0,s();let p=u instanceof Error?u:this.reason;r.abort(p instanceof W?p:new Qt(p instanceof Error?p.message:p))}},l=t&&setTimeout(()=>{l=null,n(new W(`timeout of ${t}ms exceeded`,W.ETIMEDOUT))},t),s=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(n):u.removeEventListener("abort",n)}),e=null)};e.forEach(u=>u.addEventListener("abort",n));let{signal:i}=r;return i.unsubscribe=()=>C.asap(s),i}},Bg=qv;var Wv=function*(e,t){let a=e.byteLength;if(!t||a<t){yield e;return}let r=0,o;for(;r<a;)o=r+t,yield e.slice(r,o),r=o},Vv=async function*(e,t){for await(let a of jv(e))yield*Wv(a,t)},jv=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:a,value:r}=await t.read();if(a)break;yield r}}finally{await t.cancel()}},$d=(e,t,a,r)=>{let o=Vv(e,t),n=0,l,s=i=>{l||(l=!0,r&&r(i))};return new ReadableStream({async pull(i){try{let{done:u,value:p}=await o.next();if(u){s(),i.close();return}let g=p.byteLength;if(a){let x=n+=g;a(x)}i.enqueue(new Uint8Array(p))}catch(u){throw s(u),u}},cancel(i){return s(i),o.return()}},{highWaterMark:2})};function Xd(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;let t=e.indexOf(",");if(t<0)return 0;let a=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(a)){let l=r.length,s=r.length;for(let S=0;S<s;S++)if(r.charCodeAt(S)===37&&S+2<s){let d=r.charCodeAt(S+1),L=r.charCodeAt(S+2);(d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102)&&(L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102)&&(l-=2,S+=2)}let i=0,u=s-1,p=S=>S>=2&&r.charCodeAt(S-2)===37&&r.charCodeAt(S-1)===51&&(r.charCodeAt(S)===68||r.charCodeAt(S)===100);u>=0&&(r.charCodeAt(u)===61?(i++,u--):p(u)&&(i++,u-=3)),i===1&&u>=0&&(r.charCodeAt(u)===61||p(u))&&i++;let x=Math.floor(l/4)*3-(i||0);return x>0?x:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(r,"utf8");let n=0;for(let l=0,s=r.length;l<s;l++){let i=r.charCodeAt(l);if(i<128)n+=1;else if(i<2048)n+=2;else if(i>=55296&&i<=56319&&l+1<s){let u=r.charCodeAt(l+1);u>=56320&&u<=57343?(n+=4,l++):n+=3}else n+=3}return n}var Eo="1.16.0";var zg=64*1024,{isFunction:Qs}=C,Ng=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Gv=e=>{let t=C.global??globalThis,{ReadableStream:a,TextEncoder:r}=t;e=C.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:o,Request:n,Response:l}=e,s=o?Qs(o):typeof fetch=="function",i=Qs(n),u=Qs(l);if(!s)return!1;let p=s&&Qs(a),g=s&&(typeof r=="function"?(c=>f=>c.encode(f))(new r):async c=>new Uint8Array(await new n(c).arrayBuffer())),x=i&&p&&Ng(()=>{let c=!1,f=new n(ge.origin,{body:new a,method:"POST",get duplex(){return c=!0,"half"}}),m=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),c&&!m}),S=u&&p&&Ng(()=>C.isReadableStream(new l("").body)),d={stream:S&&(c=>c.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(c=>{!d[c]&&(d[c]=(f,m)=>{let I=f&&f[c];if(I)return I.call(f);throw new W(`Response type '${c}' is not supported`,W.ERR_NOT_SUPPORT,m)})});let L=async c=>{if(c==null)return 0;if(C.isBlob(c))return c.size;if(C.isSpecCompliantForm(c))return(await new n(ge.origin,{method:"POST",body:c}).arrayBuffer()).byteLength;if(C.isArrayBufferView(c)||C.isArrayBuffer(c))return c.byteLength;if(C.isURLSearchParams(c)&&(c=c+""),C.isString(c))return(await g(c)).byteLength},b=async(c,f)=>{let m=C.toFiniteNumber(c.getContentLength());return m??L(f)};return async c=>{let{url:f,method:m,data:I,signal:T,cancelToken:R,timeout:P,onDownloadProgress:F,onUploadProgress:E,responseType:v,headers:M,withCredentials:N="same-origin",fetchOptions:te,maxContentLength:Q,maxBodyLength:Y}=Ks(c),dt=C.isNumber(Q)&&Q>-1,z=C.isNumber(Y)&&Y>-1,$=o||fetch;v=v?(v+"").toLowerCase():"text";let _e=Bg([T,R&&R.toAbortSignal()],P),oe=null,ct=_e&&_e.unsubscribe&&(()=>{_e.unsubscribe()}),Nr;try{if(dt&&typeof f=="string"&&f.startsWith("data:")&&Xd(f)>Q)throw new W("maxContentLength size of "+Q+" exceeded",W.ERR_BAD_RESPONSE,c,oe);if(z&&m!=="get"&&m!=="head"){let ae=await b(M,I);if(typeof ae=="number"&&isFinite(ae)&&ae>Y)throw new W("Request body larger than maxBodyLength limit",W.ERR_BAD_REQUEST,c,oe)}if(E&&x&&m!=="get"&&m!=="head"&&(Nr=await b(M,I))!==0){let ae=new n(f,{method:"POST",body:I,duplex:"half"}),va;if(C.isFormData(I)&&(va=ae.headers.get("content-type"))&&M.setContentType(va),ae.body){let[Yt,La]=Wd(Nr,Fo(Vd(E)));I=$d(ae.body,zg,Yt,La)}}C.isString(N)||(N=N?"include":"omit");let q=i&&"credentials"in n.prototype;if(C.isFormData(I)){let ae=M.getContentType();ae&&/^multipart\/form-data/i.test(ae)&&!/boundary=/i.test(ae)&&M.delete("content-type")}M.set("User-Agent","axios/"+Eo,!1);let He={...te,signal:_e,method:m.toUpperCase(),headers:M.normalize().toJSON(),body:I,duplex:"half",credentials:q?N:void 0};oe=i&&new n(f,He);let ce=await(i?$(oe,te):$(f,He));if(dt){let ae=C.toFiniteNumber(ce.headers.get("content-length"));if(ae!=null&&ae>Q)throw new W("maxContentLength size of "+Q+" exceeded",W.ERR_BAD_RESPONSE,c,oe)}let Or=S&&(v==="stream"||v==="response");if(S&&ce.body&&(F||dt||Or&&ct)){let ae={};["status","statusText","headers"].forEach(Sa=>{ae[Sa]=ce[Sa]});let va=C.toFiniteNumber(ce.headers.get("content-length")),[Yt,La]=F&&Wd(va,Fo(Vd(F),!0))||[],fl=0,ai=Sa=>{if(dt&&(fl=Sa,fl>Q))throw new W("maxContentLength size of "+Q+" exceeded",W.ERR_BAD_RESPONSE,c,oe);Yt&&Yt(Sa)};ce=new l($d(ce.body,zg,ai,()=>{La&&La(),ct&&ct()}),ae)}v=v||"text";let Ct=await d[C.findKey(d,v)||"text"](ce,c);if(dt&&!S&&!Or){let ae;if(Ct!=null&&(typeof Ct.byteLength=="number"?ae=Ct.byteLength:typeof Ct.size=="number"?ae=Ct.size:typeof Ct=="string"&&(ae=typeof r=="function"?new r().encode(Ct).byteLength:Ct.length)),typeof ae=="number"&&ae>Q)throw new W("maxContentLength size of "+Q+" exceeded",W.ERR_BAD_RESPONSE,c,oe)}return!Or&&ct&&ct(),await new Promise((ae,va)=>{sl(ae,va,{data:Ct,headers:ye.from(ce.headers),status:ce.status,statusText:ce.statusText,config:c,request:oe})})}catch(q){if(ct&&ct(),_e&&_e.aborted&&_e.reason instanceof W){let He=_e.reason;throw He.config=c,oe&&(He.request=oe),q!==He&&(He.cause=q),He}throw q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,c,oe,q&&q.response),{cause:q.cause||q}):W.from(q,q&&q.code,c,oe,q&&q.response)}}},$v=new Map,Kd=e=>{let t=e&&e.env||{},{fetch:a,Request:r,Response:o}=t,n=[r,o,a],l=n.length,s=l,i,u,p=$v;for(;s--;)i=n[s],u=p.get(i),u===void 0&&p.set(i,u=s?new Map:Gv(t)),p=u;return u},jk=Kd();var Qd={http:Gs,xhr:Dg,fetch:{get:Kd}};C.forEach(Qd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var Og=e=>`- ${e}`,Kv=e=>C.isFunction(e)||e===null||e===!1;function Qv(e,t){e=C.isArray(e)?e:[e];let{length:a}=e,r,o,n={};for(let l=0;l<a;l++){r=e[l];let s;if(o=r,!Kv(r)&&(o=Qd[(s=String(r)).toLowerCase()],o===void 0))throw new W(`Unknown adapter '${s}'`);if(o&&(C.isFunction(o)||(o=o.get(t))))break;n[s||"#"+l]=o}if(!o){let l=Object.entries(n).map(([i,u])=>`adapter ${i} `+(u===!1?"is not supported by the environment":"is not available in the build")),s=a?l.length>1?`since :
`+l.map(Og).join(`
`):" "+Og(l[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return o}var Zs={getAdapter:Qv,adapters:Qd};function Zd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qt(null,e)}function Ys(e){return Zd(e),e.headers=ye.from(e.headers),e.data=nl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zs.getAdapter(e.adapter||To.adapter,e)(e).then(function(r){Zd(e),e.response=r;try{r.data=nl.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=ye.from(r.headers),r},function(r){if(!ll(r)&&(Zd(e),r&&r.response)){e.response=r.response;try{r.response.data=nl.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=ye.from(r.response.headers)}return Promise.reject(r)})}var Js={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Js[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var Ug={};Js.transitional=function(t,a,r){function o(n,l){return"[Axios v"+Eo+"] Transitional option '"+n+"'"+l+(r?". "+r:"")}return(n,l,s)=>{if(t===!1)throw new W(o(l," has been removed"+(a?" in "+a:"")),W.ERR_DEPRECATED);return a&&!Ug[l]&&(Ug[l]=!0,console.warn(o(l," has been deprecated since v"+a+" and will be removed in the near future"))),t?t(n,l,s):!0}};Js.spelling=function(t){return(a,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Zv(e,t,a){if(typeof e!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),o=r.length;for(;o-- >0;){let n=r[o],l=Object.prototype.hasOwnProperty.call(t,n)?t[n]:void 0;if(l){let s=e[n],i=s===void 0||l(s,n,e);if(i!==!0)throw new W("option "+n+" must be "+i,W.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new W("Unknown option "+n,W.ERR_BAD_OPTION)}}var ul={assertOptions:Zv,validators:Js};var Lt=ul.validators,Mo=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Bd,response:new Bd}}async request(t,a){try{return await this._request(t,a)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;let n=(()=>{if(!o.stack)return"";let l=o.stack.indexOf(`
`);return l===-1?"":o.stack.slice(l+1)})();try{if(!r.stack)r.stack=n;else if(n){let l=n.indexOf(`
`),s=l===-1?-1:n.indexOf(`
`,l+1),i=s===-1?"":n.slice(s+1);String(r.stack).endsWith(i)||(r.stack+=`
`+n)}}catch{}}throw r}}_request(t,a){typeof t=="string"?(a=a||{},a.url=t):a=t||{},a=Bt(this.defaults,a);let{transitional:r,paramsSerializer:o,headers:n}=a;r!==void 0&&ul.assertOptions(r,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean),legacyInterceptorReqResOrdering:Lt.transitional(Lt.boolean)},!1),o!=null&&(C.isFunction(o)?a.paramsSerializer={serialize:o}:ul.assertOptions(o,{encode:Lt.function,serialize:Lt.function},!0)),a.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?a.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:a.allowAbsoluteUrls=!0),ul.assertOptions(a,{baseUrl:Lt.spelling("baseURL"),withXsrfToken:Lt.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let l=n&&C.merge(n.common,n[a.method]);n&&C.forEach(["delete","get","head","post","put","patch","query","common"],d=>{delete n[d]}),a.headers=ye.concat(l,n);let s=[],i=!0;this.interceptors.request.forEach(function(L){if(typeof L.runWhen=="function"&&L.runWhen(a)===!1)return;i=i&&L.synchronous;let b=a.transitional||Po;b&&b.legacyInterceptorReqResOrdering?s.unshift(L.fulfilled,L.rejected):s.push(L.fulfilled,L.rejected)});let u=[];this.interceptors.response.forEach(function(L){u.push(L.fulfilled,L.rejected)});let p,g=0,x;if(!i){let d=[Ys.bind(this),void 0];for(d.unshift(...s),d.push(...u),x=d.length,p=Promise.resolve(a);g<x;)p=p.then(d[g++],d[g++]);return p}x=s.length;let S=a;for(;g<x;){let d=s[g++],L=s[g++];try{S=d(S)}catch(b){L.call(this,b);break}}try{p=Ys.call(this,S)}catch(d){return Promise.reject(d)}for(g=0,x=u.length;g<x;)p=p.then(u[g++],u[g++]);return p}getUri(t){t=Bt(this.defaults,t);let a=il(t.baseURL,t.url,t.allowAbsoluteUrls);return ol(a,t.params,t.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(t){Mo.prototype[t]=function(a,r){return this.request(Bt(r||{},{method:t,url:a,data:(r||{}).data}))}});C.forEach(["post","put","patch","query"],function(t){function a(r){return function(n,l,s){return this.request(Bt(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:n,data:l}))}}Mo.prototype[t]=a(),t!=="query"&&(Mo.prototype[t+"Form"]=a(!0))});var dl=Mo;var Yd=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(n){a=n});let r=this;this.promise.then(o=>{if(!r._listeners)return;let n=r._listeners.length;for(;n-- >0;)r._listeners[n](o);r._listeners=null}),this.promise.then=o=>{let n,l=new Promise(s=>{r.subscribe(s),n=s}).then(o);return l.cancel=function(){r.unsubscribe(n)},l},t(function(n,l,s){r.reason||(r.reason=new Qt(n,l,s),a(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let a=this._listeners.indexOf(t);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){let t=new AbortController,a=r=>{t.abort(r)};return this.subscribe(a),t.signal.unsubscribe=()=>this.unsubscribe(a),t.signal}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},_g=Yd;function Jd(e){return function(a){return e.apply(null,a)}}function ec(e){return C.isObject(e)&&e.isAxiosError===!0}var tc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(tc).forEach(([e,t])=>{tc[t]=e});var Hg=tc;function qg(e){let t=new dl(e),a=Jn(dl.prototype.request,t);return C.extend(a,dl.prototype,t,{allOwnKeys:!0}),C.extend(a,t,null,{allOwnKeys:!0}),a.create=function(o){return qg(Bt(e,o))},a}var Ce=qg(To);Ce.Axios=dl;Ce.CanceledError=Qt;Ce.CancelToken=_g;Ce.isCancel=ll;Ce.VERSION=Eo;Ce.toFormData=rr;Ce.AxiosError=W;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=Jd;Ce.isAxiosError=ec;Ce.mergeConfig=Bt;Ce.AxiosHeaders=ye;Ce.formToJSON=e=>Xs(C.isHTMLForm(e)?new FormData(e):e);Ce.getAdapter=Zs.getAdapter;Ce.HttpStatusCode=Hg;Ce.default=Ce;var zr=Ce;var{Axios:q5,AxiosError:W5,CanceledError:V5,isCancel:j5,CancelToken:G5,VERSION:$5,all:X5,Cancel:K5,isAxiosError:Q5,spread:Z5,toFormData:Y5,AxiosHeaders:J5,HttpStatusCode:eP,formToJSON:tP,getAdapter:aP,mergeConfig:rP,create:oP}=zr;async function ei(e,t){let a;try{a=await e}catch{return{status:500,error:"Network or other error occurred"}}return a.status===t?{status:a.status,data:a.data}:{status:a.status,error:a.data}}async function Wg(e,t,a){let r=zr.post(e,t,{headers:{"Content-Type":"application/json",token:"jwt"},validateStatus:()=>!0});return ei(r,a)}async function Vg(e,t){let a=zr.get(e,{headers:{"Content-Type":"application/json",token:"jwt"},validateStatus:()=>!0});return ei(a,t)}async function jg(e,t){let a=zr.delete(e,{headers:{"Content-Type":"application/json",token:"jwt"},validateStatus:()=>!0});return ei(a,t)}async function Gg(e,t,a){let r=zr.put(e,t,{headers:{"Content-Type":"application/json",token:"jwt"},validateStatus:()=>!0});return ei(r,a)}var Zt=class e{constructor(){this.baseUrl=e.getBaseUrl(),this.create=`${this.baseUrl}api/v1/experiments/create`,this.getExperiments=`${this.baseUrl}api/v1/experiments/get/all`,this.update=`${this.baseUrl}api/v1/experiments/update`,this.login=`${this.baseUrl}auth/login`}static getBaseUrl(){let t=window.location.href;if(t.includes("http://localhost:3000/"))return"http://0.0.0.0:8001/";let a=new URL(t),r=a.hostname;return a.port==="3000"&&(r.startsWith("192.168.")||r.startsWith("10.")||r.startsWith("172.")||r==="127.0.0.1")?`http://${r}:8001/`:window.location.href}deleteUrl(t){return`${this.baseUrl}api/v1/experiments/delete/${t}`}};async function ac(){return await Vg(new Zt().getExperiments,200)}var ee=H(ve());var zt=H(ve());var B=H(G()),Yv=()=>{let[e,t]=(0,zt.useState)([]),[a,r]=(0,zt.useState)([{id:"1",name:"Get All Experiments",method:"GET",endpoint:"/api/v1/experiments/get/all",body:"",headers:{}},{id:"2",name:"Get Experiment by Name",method:"GET",endpoint:"/api/v1/experiments/get/{name}",body:"",headers:{}},{id:"3",name:"Create Experiment",method:"POST",endpoint:"/api/v1/experiments/create",body:'{"name": "New Test Experiment", "status": "PENDING"}',headers:{}},{id:"4",name:"Update Experiment",method:"PUT",endpoint:"/api/v1/experiments/update",body:'{"id": 1, "name": "Updated Experiment", "status": "DONE"}',headers:{}},{id:"5",name:"Delete Experiment",method:"DELETE",endpoint:"/api/v1/experiments/delete/{name}",body:"",headers:{}}]),[o,n]=(0,zt.useState)("GET"),[l,s]=(0,zt.useState)("/api/v1/experiments/get/all"),[i,u]=(0,zt.useState)(""),[p,g]=(0,zt.useState)(""),[x,S]=(0,zt.useState)(!1),[d,L]=(0,zt.useState)(!1),[b,c]=(0,zt.useState)(""),[f,m]=(0,zt.useState)(null),I=async()=>{S(!0);let v={"Content-Type":"application/json"};if(p)try{p.split(`
`).forEach(te=>{let[Q,...Y]=te.split(":");Q&&Y.length>0&&(v[Q.trim()]=Y.join(":").trim())})}catch(N){console.error("Error parsing headers:",N)}let M={method:o,endpoint:l,body:i,headers:v,response:"",status:"pending",timestamp:new Date().toLocaleTimeString()};try{let N=`http://localhost:8001${l}`,te={method:o,headers:v};i&&(o==="POST"||o==="PUT")&&(te.body=i);let Q=await fetch(N,te),Y=await Q.text();M.response=Y,M.status=Q.ok?"success":"error"}catch(N){M.response=`Error: ${N instanceof Error?N.message:"Unknown error"}`,M.status="error"}t(N=>[M,...N].slice(0,10)),S(!1)},T=v=>{n(v.method),s(v.endpoint),u(v.body||""),g(v.headers?Object.entries(v.headers).map(([M,N])=>`${M}: ${N}`).join(`
`):""),m(v.id)},R=()=>{if(!b.trim())return;let v={};if(p)try{p.split(`
`).forEach(te=>{let[Q,...Y]=te.split(":");Q&&Y.length>0&&(v[Q.trim()]=Y.join(":").trim())})}catch(N){console.error("Error parsing headers:",N)}let M={id:Date.now().toString(),name:b,method:o,endpoint:l,body:i,headers:v};r(N=>[...N,M]),L(!1),c("")},P=v=>{r(M=>M.filter(N=>N.id!==v)),f===v&&m(null)},F=()=>{t([])},E=v=>{navigator.clipboard.writeText(v)};return(0,B.jsxs)("div",{className:"api-testing-section",children:[(0,B.jsxs)("div",{className:"section-header",children:[(0,B.jsx)("h1",{className:"section-title",children:"API Testing"}),(0,B.jsxs)("div",{className:"section-actions",children:[(0,B.jsxs)("button",{className:"action-button secondary",onClick:F,children:[(0,B.jsx)(Kt,{size:16}),(0,B.jsx)("span",{children:"Clear"})]}),(0,B.jsxs)("button",{className:"action-button primary",onClick:I,disabled:x,children:[x?(0,B.jsx)(ma,{size:16,className:"animate-spin"}):(0,B.jsx)(pa,{size:16}),(0,B.jsx)("span",{children:x?"Testing...":"Execute"})]})]})]}),(0,B.jsxs)("div",{className:"api-testing-grid",children:[(0,B.jsxs)("div",{className:"request-builder",children:[(0,B.jsx)("h3",{children:"Request Builder"}),(0,B.jsxs)("div",{className:"method-selector",children:[(0,B.jsx)("label",{children:"Method:"}),(0,B.jsxs)("select",{value:o,onChange:v=>n(v.target.value),children:[(0,B.jsx)("option",{value:"GET",children:"GET"}),(0,B.jsx)("option",{value:"POST",children:"POST"}),(0,B.jsx)("option",{value:"PUT",children:"PUT"}),(0,B.jsx)("option",{value:"DELETE",children:"DELETE"})]})]}),(0,B.jsxs)("div",{className:"endpoint-selector",children:[(0,B.jsx)("label",{children:"Endpoint:"}),(0,B.jsx)("input",{type:"text",value:l,onChange:v=>s(v.target.value),placeholder:"/api/v1/endpoint"})]}),(0,B.jsxs)("div",{className:"headers-input",children:[(0,B.jsx)("label",{children:"Headers (one per line, format: Key: Value):"}),(0,B.jsx)("textarea",{value:p,onChange:v=>g(v.target.value),placeholder:"Authorization: Bearer token\\nContent-Type: application/json",rows:3})]}),(o==="POST"||o==="PUT")&&(0,B.jsxs)("div",{className:"body-input",children:[(0,B.jsx)("label",{children:"Request Body (JSON):"}),(0,B.jsx)("textarea",{value:i,onChange:v=>u(v.target.value),placeholder:'{"name": "Example", "status": "PENDING"}',rows:4})]}),(0,B.jsxs)("div",{className:"saved-endpoints",children:[(0,B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[(0,B.jsx)("h4",{children:"Saved Endpoints:"}),(0,B.jsxs)("button",{className:"action-button secondary",onClick:()=>L(!0),children:[(0,B.jsx)(Xt,{size:14}),(0,B.jsx)("span",{children:"Save Current"})]})]}),(0,B.jsx)("div",{className:"saved-endpoints-list",children:a.map(v=>(0,B.jsxs)("div",{className:`saved-endpoint-item ${f===v.id?"active":""}`,onClick:()=>T(v),children:[(0,B.jsxs)("div",{className:"saved-endpoint-info",children:[(0,B.jsx)("span",{className:`method-badge ${v.method.toLowerCase()}`,children:v.method}),(0,B.jsx)("span",{className:"endpoint-name",children:v.name}),(0,B.jsx)("span",{className:"endpoint-path",children:v.endpoint})]}),(0,B.jsx)("button",{className:"delete-endpoint-btn",onClick:M=>{M.stopPropagation(),P(v.id)},children:(0,B.jsx)(Kt,{size:12})})]},v.id))})]})]}),(0,B.jsxs)("div",{className:"response-display",children:[(0,B.jsx)("h3",{children:"Response History"}),e.length===0?(0,B.jsxs)("div",{className:"empty-state",children:[(0,B.jsx)(Mr,{size:48}),(0,B.jsx)("p",{children:"No API tests executed yet. Use the request builder to test endpoints."})]}):(0,B.jsx)("div",{className:"test-history",children:e.map((v,M)=>(0,B.jsxs)("div",{className:`test-result ${v.status}`,children:[(0,B.jsxs)("div",{className:"test-header",children:[(0,B.jsxs)("div",{className:"test-info",children:[(0,B.jsx)("span",{className:`method-badge ${v.method.toLowerCase()}`,children:v.method}),(0,B.jsx)("span",{className:"endpoint",children:v.endpoint}),(0,B.jsx)("span",{className:"timestamp",children:v.timestamp})]}),(0,B.jsxs)("div",{className:"test-actions",children:[v.status==="success"&&(0,B.jsx)(Ee,{size:16,className:"success-icon"}),v.status==="error"&&(0,B.jsx)(Ga,{size:16,className:"error-icon"}),(0,B.jsx)("button",{onClick:()=>E(v.response),children:(0,B.jsx)(Nn,{size:14})})]})]}),v.body&&(0,B.jsxs)("div",{className:"request-body",children:[(0,B.jsx)("strong",{children:"Request Body:"}),(0,B.jsx)("pre",{children:v.body})]}),v.headers&&Object.keys(v.headers).length>0&&(0,B.jsxs)("div",{className:"request-headers",children:[(0,B.jsx)("strong",{children:"Headers:"}),(0,B.jsx)("pre",{children:JSON.stringify(v.headers,null,2)})]}),(0,B.jsxs)("div",{className:"response-body",children:[(0,B.jsx)("strong",{children:"Response:"}),(0,B.jsx)("pre",{children:v.response})]})]},M))})]})]}),d&&(0,B.jsx)("div",{className:"modal-overlay",onClick:v=>{v.target===v.currentTarget&&L(!1)},children:(0,B.jsxs)("div",{className:"modal-box",style:{maxWidth:"400px"},children:[(0,B.jsxs)("div",{className:"modal-header",children:[(0,B.jsx)("h2",{className:"modal-title",children:"Save Endpoint"}),(0,B.jsx)("button",{className:"modal-close",onClick:()=>L(!1),children:(0,B.jsx)(At,{size:18})})]}),(0,B.jsxs)("div",{className:"modal-field",children:[(0,B.jsx)("label",{className:"modal-label",children:"Endpoint Name"}),(0,B.jsx)("input",{type:"text",className:"modal-input",placeholder:"e.g. Get User Profile",value:b,onChange:v=>c(v.target.value),autoFocus:!0})]}),(0,B.jsxs)("div",{className:"modal-actions",children:[(0,B.jsx)("button",{type:"button",className:"modal-btn-cancel",onClick:()=>L(!1),children:"Cancel"}),(0,B.jsx)("button",{type:"button",onClick:R,disabled:!b.trim(),style:{padding:"0.5625rem 1.25rem",border:"none",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,color:"white",cursor:b.trim()?"pointer":"not-allowed",background:b.trim()?"linear-gradient(135deg, rgb(155, 28, 28) 0%, rgb(192, 57, 43) 100%)":"#94a3b8",boxShadow:b.trim()?"rgba(192, 57, 43, 0.25) 0px 2px 8px":"none",transition:"all 0.2s"},children:"Save"})]})]})})]})},$g=Yv;var Yg=H(ve());var or=H(ve()),Zg=H(G()),Xg={status:"offline",lastEvent:null,history:{},lastReceivedAt:null},rc=class{constructor(){this.snapshots=new Map;this.listeners=new Map;this.sockets=new Map;this.reconnectTimers=new Map}getSnapshot(t){return this.snapshots.get(t)||Xg}subscribe(t,a){let r=this.listeners.get(t);return r||(r=new Set,this.listeners.set(t,r),this.connect(t)),r.add(a),()=>{r?.delete(a),r?.size===0&&(this.close(t),this.listeners.delete(t))}}setSnapshot(t,a){this.snapshots.set(t,a),this.listeners.get(t)?.forEach(r=>r())}connect(t){let a=window.location.protocol==="https:"?"wss:":"ws:",r=localStorage.getItem("blazecore_token"),o=r?`?access_token=${encodeURIComponent(r)}`:"",n=new WebSocket(`${a}//${window.location.host}/api/v1/experiments/${t}/stream${o}`);this.sockets.set(t,n),this.setSnapshot(t,{...this.getSnapshot(t),status:"connecting"}),n.onopen=()=>{this.setSnapshot(t,{...this.getSnapshot(t),status:"live"})},n.onmessage=l=>{try{let s=JSON.parse(l.data);if(s.experiment_id!==t||!s.timestamp||!s.measurements)return;let u={...this.getSnapshot(t).history};Object.entries(s.measurements).forEach(([p,g])=>{Number.isFinite(g)&&(u[p]=[...u[p]||[],g].slice(-30))}),this.setSnapshot(t,{status:"live",lastEvent:s,history:u,lastReceivedAt:Date.now()})}catch{}},n.onerror=()=>n.close(),n.onclose=()=>{if(!this.listeners.get(t)?.size)return;this.sockets.delete(t),this.setSnapshot(t,{...this.getSnapshot(t),status:"reconnecting"});let l=window.setTimeout(()=>this.connect(t),2e3);this.reconnectTimers.set(t,l)}}close(t){let a=this.reconnectTimers.get(t);a!==void 0&&window.clearTimeout(a),this.reconnectTimers.delete(t),this.sockets.get(t)?.close(),this.sockets.delete(t),this.snapshots.delete(t)}},Kg=(0,or.createContext)(null),Qg=({children:e})=>{let t=(0,or.useRef)(new rc).current;return(0,Zg.jsx)(Kg.Provider,{value:t,children:e})};function ti(e){let t=(0,or.useContext)(Kg);if(!t)throw new Error("useTelemetry must be used inside TelemetryProvider");return(0,or.useSyncExternalStore)(a=>t.subscribe(e,a),()=>t.getSnapshot(e),()=>Xg)}function Je(e,t,a){return e.lastEvent?.measurements[t]??a}var j=H(G()),Jv={gradient:"linear-gradient(135deg, #0071E3 0%, #5AC8FA 100%)",primary:"#0071E3",accent:"#5AC8FA",bgLight:"rgba(0,113,227,0.08)",bgMedium:"rgba(0,113,227,0.15)",borderColor:"rgba(0,113,227,0.25)"},eL=({experiment:e,onToggleStatus:t,onDelete:a,onRefresh:r,onClick:o,entityColors:n})=>{let l=n||Jv,[s,i]=(0,Yg.useState)(!1),u=ti(e.id),p=Je(u,"signal_strength",0),g=Je(u,"battery_level",0),x=Je(u,"data_points",0),S=u.lastEvent?new Date(u.lastEvent.timestamp):null,d=["ONLINE","ACTIVE","RUNNING","DONE"].includes(e.status.toUpperCase()),L=async R=>{R.stopPropagation(),i(!0),await r(),setTimeout(()=>i(!1),1e3)},b=R=>{R.stopPropagation(),t()},c=R=>{R.stopPropagation(),a()},f=R=>{let P=R.toLowerCase();return P.includes("temp")||P.includes("thermostat")?(0,j.jsx)(Ar,{size:20}):P.includes("humid")||P.includes("hvac")?(0,j.jsx)(wr,{size:20}):P.includes("wind")||P.includes("motion")||P.includes("fan")?(0,j.jsx)(Dr,{size:20}):P.includes("light")||P.includes("energy")||P.includes("power")?(0,j.jsx)(Pe,{size:20}):(0,j.jsx)(st,{size:20})},m=d?Je(u,"progress",0):0,I=d?{bg:"rgba(16,185,129,0.12)",color:"#065F46",border:"rgba(16,185,129,0.25)",label:e.status}:{bg:"rgba(245,158,11,0.12)",color:"#B45309",border:"rgba(245,158,11,0.25)",label:e.status},T=g>=20?"#10B981":"#EF4444";return(0,j.jsx)("div",{onClick:o,title:e.name,style:{background:"var(--color-card)",borderRadius:"14px",border:"1px solid var(--color-border-primary)",borderLeft:`3px solid ${l.primary}`,boxShadow:"var(--shadow-sm)",overflow:"hidden",isolation:"isolate",cursor:o?"pointer":"default",transition:"box-shadow 200ms ease, transform 200ms ease",position:"relative",color:"var(--color-text-primary)"},onMouseEnter:R=>{o&&(R.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.08)",R.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:R=>{R.currentTarget.style.boxShadow="var(--shadow-sm)",R.currentTarget.style.transform="translateY(0)"},children:(0,j.jsxs)("div",{style:{padding:"20px"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem",gap:"0.75rem"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",flex:1,minWidth:0},children:[(0,j.jsx)("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:`rgba(${l.primary.startsWith("#")?tL(l.primary):"0,113,227"}, 0.12)`,display:"flex",alignItems:"center",justifyContent:"center",color:l.primary,flexShrink:0},children:f(e.name)}),(0,j.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,j.jsx)("h3",{title:e.name,style:{fontSize:"16px",fontWeight:700,color:"var(--color-text-primary)",margin:"0 0 0.3rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"160px"},children:e.name}),(0,j.jsx)("span",{style:{display:"inline-flex",alignItems:"center",padding:"0.2rem 0.6rem",borderRadius:"100px",fontSize:"11px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",background:I.bg,color:I.color,border:`1px solid ${I.border}`},children:I.label})]})]}),(0,j.jsxs)("div",{style:{display:"flex",gap:"0.3rem",flexShrink:0},children:[(0,j.jsx)("button",{onClick:b,title:d?"Pause":"Start",className:`control-btn ${d?"pause":"play"}`,children:d?(0,j.jsx)(Tr,{size:13}):(0,j.jsx)(pa,{size:13})}),(0,j.jsx)("button",{onClick:L,disabled:s,title:"Refresh",className:"control-btn refresh",children:(0,j.jsx)(ma,{size:13,style:{animation:s?"spin 0.7s linear infinite":"none"}})}),(0,j.jsx)("button",{onClick:c,title:"Delete",className:"control-btn delete",children:(0,j.jsx)(Kt,{size:13})})]})]}),(0,j.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginBottom:"1rem",border:"1px solid var(--color-border-primary)",borderRadius:"8px",overflow:"hidden"},children:[{icon:(0,j.jsx)(Ge,{size:13}),label:"Data Points",value:x.toLocaleString()},{icon:(0,j.jsx)(Ir,{size:13}),label:"Updated",value:S?S.toLocaleTimeString():"Waiting"}].map((R,P)=>(0,j.jsxs)("div",{style:{padding:"0.5rem 0.625rem",background:"var(--color-surface)",borderRight:P===0?"1px solid var(--color-border-primary)":"none"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",marginBottom:"0.15rem",color:l.primary},children:[R.icon,(0,j.jsx)("span",{style:{fontSize:"10px",color:"var(--color-text-tertiary)",fontWeight:500},children:R.label})]}),(0,j.jsx)("div",{style:{fontSize:"15px",fontWeight:600,color:"var(--color-text-primary)",fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:R.value})]},P))}),(0,j.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.625rem",marginBottom:"1rem"},children:[{icon:(0,j.jsx)(ha,{size:12}),label:"Signal",value:p,barColor:"#10B981"},{icon:(0,j.jsx)(Fn,{size:12}),label:"Battery",value:g,barColor:T}].map((R,P)=>(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.25rem"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",fontSize:"0.6875rem",color:"var(--color-text-tertiary)",fontWeight:500},children:[R.icon,R.label]}),(0,j.jsxs)("span",{style:{fontSize:"0.6875rem",fontWeight:700,color:"var(--color-text-primary)"},children:[R.value,"%"]})]}),(0,j.jsx)("div",{style:{height:"4px",background:"var(--color-border-primary)",borderRadius:"2px",overflow:"hidden"},children:(0,j.jsx)("div",{style:{height:"100%",width:`${R.value}%`,background:R.barColor,borderRadius:"2px",transition:"width 0.4s ease"}})})]},P))}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.3rem"},children:[(0,j.jsx)("span",{style:{fontSize:"0.75rem",color:"var(--color-text-secondary)",fontWeight:500},children:"Task Progress"}),(0,j.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--color-text-primary)"},children:d?`${m}%`:"\u2014"})]}),(0,j.jsx)("div",{style:{height:"4px",background:"var(--color-border-primary)",borderRadius:"2px",overflow:"hidden"},children:(0,j.jsx)("div",{style:{height:"100%",width:d?`${m}%`:"0%",background:l.gradient,borderRadius:"2px",transition:"width 0.5s ease"}})})]}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.875rem",paddingTop:"0.875rem",borderTop:"1px solid var(--color-border-primary)"},children:[(0,j.jsxs)("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",display:"flex",alignItems:"center",gap:"0.25rem"},children:[(0,j.jsx)(ga,{size:12})," ID #",e.id]}),d?(0,j.jsxs)("span",{style:{fontSize:"0.6875rem",color:l.primary,fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem"},children:[(0,j.jsx)("span",{style:{display:"inline-block",width:7,height:7,borderRadius:"50%",background:l.primary,animation:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite"}}),"Online"]}):(0,j.jsx)("span",{style:{fontSize:"0.6875rem",color:"var(--color-text-tertiary)",fontWeight:600},children:"\u25CB Offline"})]})]})})};function tL(e){let t=e.replace("#",""),a=parseInt(t,16),r=a>>16&255,o=a>>8&255,n=a&255;return`${r}, ${o}, ${n}`}var oc=eL;var nc=H(ve());var k=H(G()),aL={gradient:"linear-gradient(135deg, #0071E3 0%, #2997FF 100%)",primary:"#0071E3",accent:"#5AC8FA",bgLight:"rgba(0,113,227,0.10)",bgMedium:"rgba(0,113,227,0.15)",borderColor:"rgba(0,113,227,0.25)"};function Jg({color:e,points:t}){let a=Math.max(...t),r=Math.min(...t),o=a-r||1,n=120,l=40,s=n/(t.length-1),i=g=>l-(g-r)/o*(l-6)-3,u=t.map((g,x)=>`${x===0?"M":"L"} ${x*s} ${i(g)}`).join(" "),p=`${u} L ${(t.length-1)*s} ${l} L 0 ${l} Z`;return(0,k.jsxs)("svg",{width:n,height:l,viewBox:`0 0 ${n} ${l}`,style:{overflow:"visible"},children:[(0,k.jsx)("defs",{children:(0,k.jsxs)("linearGradient",{id:`grad-${e.replace("#","")}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,k.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:"0.25"}),(0,k.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),(0,k.jsx)("path",{d:p,fill:`url(#grad-${e.replace("#","")})`}),(0,k.jsx)("path",{d:u,fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("circle",{cx:(t.length-1)*s,cy:i(t[t.length-1]),r:"3",fill:e})]})}function rL({color:e}){return(0,k.jsxs)("div",{style:{position:"relative",width:10,height:10,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,k.jsx)("div",{style:{position:"absolute",inset:-4,borderRadius:"50%",background:e,opacity:.3,animation:"ripple 2s ease-out infinite"}}),(0,k.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:e}})]})}var oL=({experiment:e,onBack:t,onDelete:a,onToggleStatus:r,onRefresh:o,entityColors:n})=>{let l=n||aL,s=l.primary,i=l.bgLight,u=l.gradient,[p,g]=(0,nc.useState)(!1),x=ti(e.id),S=Je(x,"signal_strength",0),d=Je(x,"battery_level",0),L=Je(x,"data_points",0),b=Je(x,"cpu_usage",0),c=Je(x,"memory_usage",0),f=Je(x,"network_traffic",0),m=x.lastEvent?new Date(x.lastEvent.timestamp):null,I=m?Math.max(0,Math.floor((Date.now()-m.getTime())/1e3)):null,[T,R]=(0,nc.useState)("overview"),P=x.history.signal_strength||[],F=x.history.cpu_usage||[],E=x.history.data_points||[],v=[{time:"Just now",msg:`Data stream active \u2014 ${L} points collected`,dot:"#34C759"},{time:"3 min ago",msg:"Signal recalibrated \u2014 strength 85%",dot:s},{time:"10 min ago",msg:"Memory usage optimised",dot:s},{time:"28 min ago",msg:"Battery level checked \u2014 92%",dot:"#34C759"},{time:"1 hr ago",msg:"Firmware version verified",dot:"#FF9F0A"}],M=async()=>{g(!0),await o(),setTimeout(()=>g(!1),1e3)},N=z=>{let $=z.toLowerCase();return $.includes("temperature")||$.includes("temp")?(0,k.jsx)(Ar,{size:32}):$.includes("humidity")||$.includes("hvac")?(0,k.jsx)(wr,{size:32}):$.includes("motion")||$.includes("wind")?(0,k.jsx)(Dr,{size:32}):$.includes("light")?(0,k.jsx)(Pe,{size:32}):(0,k.jsx)(Ge,{size:32})},te=e.status.toUpperCase()==="DONE",Y=[{label:"Status",value:(0,k.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"2px 10px",borderRadius:9999,fontSize:"0.75rem",fontWeight:600,background:te?"rgba(52,199,89,0.12)":"rgba(255,159,10,0.12)",color:te?"#1D8348":"#B7770D",border:`1px solid ${te?"rgba(52,199,89,0.25)":"rgba(255,159,10,0.25)"}`},children:[(0,k.jsx)(rL,{color:te?"#34C759":"#FF9F0A"}),e.status.toUpperCase()]})},{label:"Experiment ID",value:`#${e.id}`},{label:"Created",value:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},{label:"Last updated",value:m?m.toLocaleTimeString():"Waiting"},{label:"Protocol",value:"MQTT over WebSockets"},{label:"Database",value:"PostgreSQL"}],dt=z=>({padding:"0.5rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:500,cursor:"pointer",border:"none",background:T===z?i:"transparent",color:T===z?s:"#8C959F",transition:"all 0.2s"});return(0,k.jsxs)("div",{style:{animation:"fadeIn 0.3s ease",minHeight:"100%"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem",flexWrap:"wrap",gap:"0.75rem"},children:[(0,k.jsxs)("button",{onClick:t,style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.875rem",borderRadius:"0.5rem",border:"1px solid var(--color-border-primary)",background:"var(--color-card)",color:"var(--color-text-secondary)",fontSize:"0.875rem",fontWeight:500,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:z=>{z.currentTarget.style.color="var(--color-text-primary)",z.currentTarget.style.borderColor="var(--color-border-secondary)"},onMouseLeave:z=>{z.currentTarget.style.color="var(--color-text-secondary)",z.currentTarget.style.borderColor="var(--color-border-primary)"},children:[(0,k.jsx)(br,{size:15})," Back to Experiments"]}),(0,k.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[{label:te?"Pause":"Start",icon:te?(0,k.jsx)(Tr,{size:14}):(0,k.jsx)(pa,{size:14}),onClick:r,bg:te?"rgba(255,159,10,0.1)":"rgba(52,199,89,0.1)",color:te?"#B7770D":"#1D8348"},{label:"Refresh",icon:(0,k.jsx)(ma,{size:14,className:p?"animate-spin":""}),onClick:M,bg:i,color:s},{label:"Settings",icon:(0,k.jsx)(Fr,{size:14}),onClick:()=>{},bg:"var(--color-surface)",color:"var(--color-text-secondary)"},{label:"Delete",icon:(0,k.jsx)(Kt,{size:14}),onClick:a,bg:"rgba(239,68,68,0.1)",color:"#DC2626"}].map((z,$)=>(0,k.jsxs)("button",{onClick:z.onClick,disabled:z.label==="Refresh"&&p,style:{display:"inline-flex",alignItems:"center",gap:"0.375rem",padding:"0.5rem 0.875rem",borderRadius:"0.5rem",border:"none",fontSize:"0.8125rem",fontWeight:500,cursor:"pointer",background:z.bg,color:z.color,transition:"all 0.2s",opacity:z.label==="Refresh"&&p?.5:1},children:[z.icon," ",z.label]},$))})]}),(0,k.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"260px 1fr 300px",gap:"1.25rem",alignItems:"start"},children:[(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",overflow:"hidden"},children:[(0,k.jsx)("div",{style:{height:6,background:u}}),(0,k.jsxs)("div",{style:{padding:"1.25rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.875rem",marginBottom:"1rem"},children:[(0,k.jsx)("div",{style:{width:52,height:52,borderRadius:"0.875rem",background:u,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexShrink:0},children:N(e.name)}),(0,k.jsxs)("div",{style:{minWidth:0},children:[(0,k.jsx)("div",{style:{fontSize:"1rem",fontWeight:700,color:"var(--color-text-primary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",letterSpacing:"-0.01em"},children:e.name}),(0,k.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-text-tertiary)",marginTop:2},children:"IoT Experiment"})]})]}),(0,k.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:0},children:Y.map((z,$)=>(0,k.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"140px 1fr",alignItems:"center",padding:"0.5rem 0",borderBottom:$<Y.length-1?"1px solid var(--color-border-primary)":"none"},children:[(0,k.jsx)("span",{style:{fontSize:"0.8rem",color:"var(--color-text-tertiary)"},children:z.label}),(0,k.jsx)("span",{style:{fontSize:"0.8rem",color:"var(--color-text-primary)",fontWeight:600},children:z.value})]},$))})]})]}),(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.125rem"},children:[(0,k.jsx)("div",{style:{fontSize:"0.8125rem",fontWeight:700,color:"var(--color-text-primary)",marginBottom:"0.875rem",letterSpacing:"-0.01em"},children:"Device Status"}),[{label:"Battery level",value:d,unit:"%",barColor:"#34C759"},{label:"Signal strength",value:S,unit:"%",barColor:"#34C759"},{label:"Latency",value:`${Je(x,"latency_ms",0)} ms`,unit:"",barColor:null},{label:"Firmware",value:"v2.1.4",unit:"",barColor:null}].map((z,$)=>(0,k.jsxs)("div",{style:{marginBottom:"0.625rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[(0,k.jsx)("span",{style:{fontSize:"0.75rem",color:"var(--color-text-tertiary)"},children:z.label}),(0,k.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:700,color:z.barColor||"var(--color-text-primary)"},children:typeof z.value=="number"?`${z.value}${z.unit}`:z.value})]}),z.barColor&&typeof z.value=="number"&&(0,k.jsx)("div",{style:{height:4,borderRadius:2,background:"var(--color-border-primary)",overflow:"hidden"},children:(0,k.jsx)("div",{style:{height:"100%",borderRadius:2,background:z.barColor,width:`${z.value}%`,transition:"width 0.5s ease"}})})]},$))]}),(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.125rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.875rem"},children:[(0,k.jsx)("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"var(--color-text-primary)",letterSpacing:"-0.01em"},children:"Activity Log"}),(0,k.jsx)(Va,{size:14,style:{color:"var(--color-text-tertiary)"}})]}),(0,k.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:v.map((z,$)=>(0,k.jsxs)("div",{style:{display:"flex",gap:"0.625rem",alignItems:"flex-start"},children:[(0,k.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",background:z.dot,flexShrink:0,marginTop:4}}),(0,k.jsxs)("div",{style:{flex:1},children:[(0,k.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-text-secondary)",lineHeight:1.45},children:z.msg}),(0,k.jsx)("div",{style:{fontSize:"0.7rem",color:"var(--color-text-tertiary)",marginTop:2},children:z.time})]})]},$))})]})]}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,k.jsx)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"0.375rem",display:"flex",gap:"0.25rem"},children:["overview","metrics","settings"].map(z=>(0,k.jsx)("button",{style:dt(z),onClick:()=>R(z),children:z.charAt(0).toUpperCase()+z.slice(1)},z))}),(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.5rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-text-tertiary)",fontWeight:500,marginBottom:4},children:"Data Rate"}),(0,k.jsxs)("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--color-text-primary)",letterSpacing:"-0.04em",lineHeight:1},children:[f," ",(0,k.jsx)("span",{style:{fontSize:"1rem",fontWeight:500,color:"var(--color-text-secondary)"},children:"MB/s"})]})]}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},children:[(0,k.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-text-tertiary)"},children:I===null?"Waiting for data":`Updated ${I}s ago`}),(0,k.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 10px",borderRadius:9999,background:"rgba(52,199,89,0.1)",border:"1px solid rgba(52,199,89,0.2)",fontSize:"0.75rem",fontWeight:600,color:"#1D8348"},children:[(0,k.jsx)(ga,{size:11})," Stable"]})]})]}),E.length>1&&(0,k.jsx)(Jg,{color:s,points:E})]}),(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.5rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-text-tertiary)",fontWeight:500,marginBottom:4},children:"Signal Strength"}),(0,k.jsxs)("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--color-text-primary)",letterSpacing:"-0.04em",lineHeight:1},children:[S,(0,k.jsx)("span",{style:{fontSize:"1rem",fontWeight:500,color:"var(--color-text-secondary)"},children:"%"})]})]}),(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[(0,k.jsx)(ha,{size:18,style:{color:s,opacity:.5}}),(0,k.jsx)(ha,{size:20,style:{color:s,opacity:.75}}),(0,k.jsx)(ha,{size:22,style:{color:s}})]})]}),(0,k.jsx)("div",{style:{display:"flex",gap:2,alignItems:"flex-end",height:44},children:P.map((z,$)=>(0,k.jsx)("div",{style:{flex:1,borderRadius:3,background:s,opacity:.2+z/100*.8,height:`${z/100*44}px`,transition:"all 0.5s ease"}},$))})]}),(0,k.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[{label:"CPU Usage",value:b,icon:(0,k.jsx)($a,{size:16}),history:F},{label:"Memory",value:c,icon:(0,k.jsx)(qn,{size:16}),history:[55,58,62,60,62,65,63,62,64,c]}].map((z,$)=>(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.25rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.75rem",color:"var(--color-text-secondary)"},children:[z.icon,(0,k.jsx)("span",{style:{fontSize:"0.8125rem",fontWeight:500},children:z.label})]}),(0,k.jsxs)("div",{style:{fontSize:"1.75rem",fontWeight:800,color:s,letterSpacing:"-0.04em",marginBottom:"0.625rem"},children:[z.value,"%"]}),(0,k.jsx)("div",{style:{height:5,borderRadius:3,background:"var(--color-border-primary)",overflow:"hidden"},children:(0,k.jsx)("div",{style:{height:"100%",width:`${z.value}%`,borderRadius:3,background:u,transition:"width 0.5s ease"}})})]},$))}),(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.5rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-text-tertiary)",fontWeight:500,marginBottom:4},children:"Total Data Points"}),(0,k.jsx)("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--color-text-primary)",letterSpacing:"-0.04em",lineHeight:1},children:L.toLocaleString()})]}),(0,k.jsxs)("div",{style:{textAlign:"right"},children:[(0,k.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-text-secondary)",fontWeight:500},children:"Overview"}),(0,k.jsx)("div",{style:{display:"flex",gap:4,marginTop:4},children:["Overview","Firing rate","Waveform"].map((z,$)=>(0,k.jsx)("button",{style:{padding:"2px 8px",borderRadius:6,border:"1px solid var(--color-border-primary)",fontSize:"0.7rem",fontWeight:500,cursor:"pointer",background:$===0?s:"transparent",color:$===0?"#fff":"var(--color-text-secondary)"},children:z},$))})]})]}),E.length>1&&(0,k.jsx)(Jg,{color:s,points:E})]}),(0,k.jsxs)("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",width:"100%",padding:"0.875rem",borderRadius:"0.75rem",border:"none",background:u,color:"#fff",fontSize:"0.9375rem",fontWeight:600,cursor:"pointer",boxShadow:`0 4px 14px ${s}4D`,transition:"all 0.2s",letterSpacing:"-0.01em"},onMouseEnter:z=>{z.currentTarget.style.transform="translateY(-2px)",z.currentTarget.style.boxShadow=`0 8px 20px ${s}66`},onMouseLeave:z=>{z.currentTarget.style.transform="translateY(0)",z.currentTarget.style.boxShadow=`0 4px 14px ${s}4D`},children:[(0,k.jsx)(On,{size:16})," Export 24h data"]})]}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"1rem",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",padding:"1.25rem"},children:[(0,k.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.375rem 0.875rem",borderRadius:"9999px",background:"rgba(52,199,89,0.12)",border:"1px solid rgba(52,199,89,0.3)",fontSize:"0.8125rem",fontWeight:700,color:"#1D8348",marginBottom:"1rem"},children:[(0,k.jsx)(Ee,{size:13})," Connected"]}),(0,k.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[{label:"Last synced",value:I===null?"Waiting":`${I}s ago`},{label:"Battery level",value:`${d}%`},{label:"Signal strength",value:`${S}%`},{label:"Latency",value:`${Je(x,"latency_ms",0)} ms`}].map((z,$,_e)=>(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 0",borderBottom:$<_e.length-1?"1px solid var(--color-border-primary)":"none"},children:[(0,k.jsx)("span",{style:{fontSize:"0.8rem",color:"var(--color-text-tertiary)"},children:z.label}),(0,k.jsx)("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--color-text-primary)"},children:z.value})]},$))})]}),(0,k.jsxs)("div",{style:{background:i,border:`1px solid rgba(${l.bgLight.match(/[\d.]+/g)?.slice(0,3).join(",")||"0,113,227"},0.15)`,borderRadius:"1rem",padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"240px",position:"relative",overflow:"hidden"},children:[(0,k.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:[80,64,48].map((z,$)=>(0,k.jsx)("div",{style:{position:"absolute",width:z*2,height:z*2,borderRadius:"50%",border:`1.5px solid ${s}`,opacity:.15+$*.08,animation:`orbit ${6+$*2}s linear infinite`}},$))}),(0,k.jsxs)("div",{style:{position:"relative",zIndex:1,textAlign:"center"},children:[(0,k.jsx)("div",{style:{width:56,height:56,borderRadius:"1rem",background:u,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem",boxShadow:`0 8px 24px ${s}4D`},children:(0,k.jsx)(Ge,{size:28,color:"#fff"})}),(0,k.jsx)("div",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--color-text-primary)"},children:e.name}),(0,k.jsx)("div",{style:{fontSize:"0.75rem",color:s,marginTop:4,fontWeight:500},children:"Live monitoring"})]})]}),(0,k.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[{label:"Data Points",value:L.toLocaleString(),icon:(0,k.jsx)(st,{size:14}),color:s},{label:"Network",value:`${f} MB/s`,icon:(0,k.jsx)(Gn,{size:14}),color:s},{label:"Uptime",value:"99.8%",icon:(0,k.jsx)(Ge,{size:14}),color:"#34C759"},{label:"Alerts",value:"None",icon:(0,k.jsx)(Ge,{size:14}),color:"var(--color-text-tertiary)"}].map((z,$)=>(0,k.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"0.75rem",border:"1px solid var(--color-border-primary)",padding:"0.875rem"},children:[(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.375rem",color:z.color,marginBottom:"0.5rem"},children:[z.icon,(0,k.jsx)("span",{style:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-tertiary)"},children:z.label})]}),(0,k.jsx)("div",{style:{fontSize:"0.9375rem",fontWeight:700,color:"var(--color-text-primary)",letterSpacing:"-0.01em"},children:z.value})]},$))})]})]})]})},lc=oL;var ue=H(ve());var D=H(G()),a0="blzc-user-profile",nL="blzc-theme";function r0(){try{let e=localStorage.getItem(a0);return e?JSON.parse(e):{}}catch{return{}}}function e0(e){let t=r0();localStorage.setItem(a0,JSON.stringify({...t,...e}))}function lL(e){let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t}var t0=["#EF4444","#EF4444","#F59E0B","#10B981","#10B981"],sL=["","Weak","Fair","Good","Strong"],iL=({isOpen:e,onClose:t,currentEntity:a="FI"})=>{let{mode:r,setTheme:o}=Se(),[n,l]=(0,ue.useState)("general"),s=(0,ue.useRef)(null),i=r0(),[u,p]=(0,ue.useState)(i.fullName||"Admin"),[g,x]=(0,ue.useState)(i.displayName||"admin"),[S,d]=(0,ue.useState)(i.avatarUrl||""),[L,b]=(0,ue.useState)(!1),[c,f]=(0,ue.useState)(""),[m,I]=(0,ue.useState)(""),[T,R]=(0,ue.useState)(""),[P,F]=(0,ue.useState)(!1),[E,v]=(0,ue.useState)(!1),[M,N]=(0,ue.useState)(""),[te,Q]=(0,ue.useState)(!1),[Y,dt]=(0,ue.useState)(i.theme||"light"),[z,$]=(0,ue.useState)(i.defaultEntity||a),[_e,oe]=(0,ue.useState)(i.notifyLiveAlerts??!0),[ct,Nr]=(0,ue.useState)(i.notifyExperimentUpdates??!0),[q,He]=(0,ue.useState)(i.notifyWeeklyDigest??!1),[ce,Or]=(0,ue.useState)(!1),Ct=i.email||"admin@blazecore.io",ae=i.role||"Researcher",va=u.split(" ").map(U=>U[0]).join("").toUpperCase().slice(0,2)||"AD",Yt=lL(m),La=(0,ue.useCallback)(U=>{U.key==="Escape"&&t()},[t]);(0,ue.useEffect)(()=>(e&&(document.addEventListener("keydown",La),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",La),document.body.style.overflow=""}),[e,La]);let fl=U=>{let De=U.target.files?.[0];if(!De)return;let ea=new FileReader;ea.onload=oi=>d(oi.target?.result),ea.readAsDataURL(De)},ai=()=>{e0({fullName:u,displayName:g,avatarUrl:S}),b(!0),setTimeout(()=>b(!1),2e3)},Sa=c.length>0&&m.length>=8&&/[A-Z]/.test(m)&&/[0-9]/.test(m)&&/[^A-Za-z0-9]/.test(m)&&T===m,y0=()=>{if(Sa){if(m!==T){N("Passwords do not match.");return}N(""),Q(!0),f(""),I(""),R(""),setTimeout(()=>Q(!1),2e3)}},v0=()=>{e0({theme:Y,defaultEntity:z,notifyLiveAlerts:_e,notifyExperimentUpdates:ct,notifyWeeklyDigest:q}),Y!=="system"&&o(Y),localStorage.setItem(nL,Y),Or(!0),setTimeout(()=>Or(!1),2e3)},Ae=r==="dark",L0=Ae?"#1C1C1E":"#FFFFFF",Jt=Ae?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",Bo=Ae?"#F5F5F7":"#1D1D1F",et=Ae?"#98989D":"#86868B",S0=Ae?"#2C2C2E":"#F5F5F7",Ot=Ae?"#2997FF":"#0071E3",C0=Ae?"rgba(41,151,255,0.12)":"rgba(0,113,227,0.08)",nr={width:"100%",padding:"0.625rem 0.875rem",borderRadius:"0.5rem",border:`1px solid ${Jt}`,background:S0,color:Bo,fontSize:"0.875rem",outline:"none",transition:"border-color 0.15s",boxSizing:"border-box",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'},pl={display:"block",fontSize:"0.8125rem",fontWeight:500,color:et,marginBottom:"0.375rem"},lr=(U,De)=>(0,D.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,D.jsx)("label",{style:pl,children:U}),De]}),ri=(U,De,ea,oi,I0="Save changes")=>(0,D.jsx)("button",{id:U,onClick:De,disabled:ea,style:{padding:"0.5625rem 1.25rem",border:"none",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,cursor:ea?"not-allowed":"pointer",background:ea?Ae?"#3A3A3C":"#E5E5EA":Ot,color:ea?et:"#fff",display:"inline-flex",alignItems:"center",gap:"0.375rem",transition:"all 0.15s"},onMouseEnter:sr=>{ea||(sr.currentTarget.style.opacity="0.88")},onMouseLeave:sr=>{sr.currentTarget.style.opacity="1"},onMouseDown:sr=>{ea||(sr.currentTarget.style.transform="scale(0.97)")},onMouseUp:sr=>{sr.currentTarget.style.transform="scale(1)"},children:oi?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(xo,{size:13})," Saved"]}):I0}),b0=(U,De)=>(0,D.jsx)("button",{role:"switch","aria-checked":U,onClick:()=>De(!U),style:{width:"2.25rem",height:"1.25rem",borderRadius:"9999px",border:"none",cursor:"pointer",transition:"background 0.2s",background:U?Ot:Ae?"#3A3A3C":"#D1D1D6",position:"relative",flexShrink:0},children:(0,D.jsx)("span",{style:{position:"absolute",top:"0.125rem",left:U?"calc(100% - 1.125rem)":"0.125rem",width:"1rem",height:"1rem",borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})});return e?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.3)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"},onClick:t}),(0,D.jsxs)("div",{ref:s,style:{position:"fixed",right:0,top:0,height:"100vh",width:"400px",zIndex:201,background:L0,borderLeft:`1px solid ${Jt}`,boxShadow:"-8px 0 40px rgba(0,0,0,0.18)",display:"flex",flexDirection:"column",animation:"slideInRight 0.25s cubic-bezier(0.16,1,0.3,1)",overflowY:"auto",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'},onClick:U=>U.stopPropagation(),children:[(0,D.jsx)("style",{children:`
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to   { transform: translateX(0);    opacity: 1; }
          }
          .panel-field-input:focus {
            border-color: ${Ot} !important;
            box-shadow: 0 0 0 3px ${Ot}22 !important;
          }
          .panel-tab:focus-visible { outline: 2px solid ${Ot}; outline-offset: 2px; }
        `}),(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.25rem 1.5rem",borderBottom:`1px solid ${Jt}`,flexShrink:0},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("h2",{style:{margin:0,fontSize:"1rem",fontWeight:700,color:Bo,letterSpacing:"-0.01em"},children:"Account Settings"}),(0,D.jsx)("p",{style:{margin:"0.125rem 0 0",fontSize:"0.8125rem",color:et},children:"Manage your profile and preferences"})]}),(0,D.jsx)("button",{onClick:t,"aria-label":"Close panel",style:{width:"2rem",height:"2rem",borderRadius:"0.5rem",border:`1px solid ${Jt}`,background:"transparent",color:et,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},onMouseEnter:U=>{U.currentTarget.style.background=Ae?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"},onMouseLeave:U=>{U.currentTarget.style.background="transparent"},onMouseDown:U=>{U.currentTarget.style.transform="scale(0.95)"},onMouseUp:U=>{U.currentTarget.style.transform="scale(1)"},children:(0,D.jsx)(At,{size:15})})]}),(0,D.jsx)("div",{style:{display:"flex",gap:"0.25rem",padding:"0.75rem 1.5rem",borderBottom:`1px solid ${Jt}`,flexShrink:0},children:["general","security","preferences"].map(U=>(0,D.jsx)("button",{className:"panel-tab",onClick:()=>l(U),style:{padding:"0.375rem 0.875rem",borderRadius:"0.5rem",border:"none",cursor:"pointer",fontSize:"0.8125rem",fontWeight:500,transition:"all 0.15s",textTransform:"capitalize",background:n===U?C0:"transparent",color:n===U?Ot:et},onMouseDown:De=>{De.currentTarget.style.transform="scale(0.97)"},onMouseUp:De=>{De.currentTarget.style.transform="scale(1)"},children:U},U))}),(0,D.jsxs)("div",{style:{flex:1,padding:"1.5rem",overflowY:"auto"},children:[n==="general"&&(0,D.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0"},children:[(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",padding:"1rem",background:Ae?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",borderRadius:"0.75rem",border:`1px solid ${Jt}`},children:[(0,D.jsx)("div",{style:{width:"3.5rem",height:"3.5rem",borderRadius:"50%",background:S?"transparent":Ot,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",fontSize:"1rem",fontWeight:700,color:"#fff"},children:S?(0,D.jsx)("img",{src:S,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):va}),(0,D.jsxs)("div",{style:{flex:1},children:[(0,D.jsx)("div",{style:{fontSize:"0.875rem",fontWeight:600,color:Bo,marginBottom:"0.375rem"},children:"Profile Photo"}),(0,D.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,D.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:"0.375rem",padding:"0.375rem 0.75rem",borderRadius:"0.375rem",border:`1px solid ${Jt}`,background:Ae?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",fontSize:"0.75rem",fontWeight:500,color:et,cursor:"pointer",transition:"all 0.15s"},children:[(0,D.jsx)(Zn,{size:12})," Upload",(0,D.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:fl})]}),S&&(0,D.jsx)("button",{onClick:()=>d(""),style:{padding:"0.375rem 0.75rem",borderRadius:"0.375rem",border:"1px solid rgba(239,68,68,0.25)",background:"rgba(239,68,68,0.08)",fontSize:"0.75rem",fontWeight:500,color:"#EF4444",cursor:"pointer",transition:"all 0.15s"},children:"Remove"})]})]})]}),lr("Full Name",(0,D.jsx)("input",{id:"field-full-name",type:"text",className:"panel-field-input",value:u,onChange:U=>p(U.target.value),style:nr})),lr("Display Name / Handle",(0,D.jsx)("input",{id:"field-display-name",type:"text",className:"panel-field-input",value:g,onChange:U=>x(U.target.value),style:nr})),lr("Email Address",(0,D.jsxs)("div",{style:{position:"relative"},children:[(0,D.jsx)("input",{type:"email",value:Ct,readOnly:!0,style:{...nr,opacity:.6,cursor:"not-allowed",paddingRight:"2.5rem"},title:"Contact admin to change email"}),(0,D.jsx)("span",{style:{position:"absolute",right:"0.75rem",top:"50%",transform:"translateY(-50%)",fontSize:"0.6875rem",color:et},children:"read-only"})]})),lr("Role",(0,D.jsx)("div",{style:{display:"inline-flex",alignItems:"center",padding:"0.3125rem 0.75rem",borderRadius:"9999px",background:`${Ot}12`,border:`1px solid ${Ot}30`,fontSize:"0.8125rem",fontWeight:600,color:Ot},children:ae})),(0,D.jsx)("div",{style:{marginTop:"0.5rem"},children:ri("btn-save-general",ai,!u.trim(),L)})]}),n==="security"&&(0,D.jsxs)("div",{children:[lr("Current Password",(0,D.jsxs)("div",{style:{position:"relative"},children:[(0,D.jsx)("input",{id:"field-password-current",type:P?"text":"password",className:"panel-field-input",value:c,onChange:U=>f(U.target.value),style:{...nr,paddingRight:"2.5rem"}}),(0,D.jsx)("button",{onClick:()=>F(!P),style:{position:"absolute",right:"0.625rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:et,padding:"0.25rem",display:"flex",alignItems:"center",justifyContent:"center"},children:P?(0,D.jsx)(yo,{size:14}):(0,D.jsx)(fa,{size:14})})]})),lr("New Password",(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{style:{position:"relative"},children:[(0,D.jsx)("input",{id:"field-password-new",type:E?"text":"password",className:"panel-field-input",value:m,onChange:U=>I(U.target.value),style:{...nr,paddingRight:"2.5rem"}}),(0,D.jsx)("button",{onClick:()=>v(!E),style:{position:"absolute",right:"0.625rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:et,padding:"0.25rem",display:"flex",alignItems:"center",justifyContent:"center"},children:E?(0,D.jsx)(yo,{size:14}):(0,D.jsx)(fa,{size:14})})]}),m.length>0&&(0,D.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,D.jsx)("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.375rem"},children:[1,2,3,4].map(U=>(0,D.jsx)("div",{style:{flex:1,height:"4px",borderRadius:"2px",background:U<=Yt?t0[Yt]:Ae?"#3A3A3C":"#E5E5EA",transition:"background 0.2s"}},U))}),(0,D.jsx)("span",{style:{fontSize:"0.75rem",color:t0[Yt],fontWeight:500},children:sL[Yt]})]}),(0,D.jsx)("div",{style:{marginTop:"0.625rem",display:"flex",flexDirection:"column",gap:"0.25rem"},children:[{label:"8+ characters",met:m.length>=8},{label:"Uppercase letter",met:/[A-Z]/.test(m)},{label:"Number",met:/[0-9]/.test(m)},{label:"Special character",met:/[^A-Za-z0-9]/.test(m)}].map(U=>(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.375rem",fontSize:"0.75rem",color:U.met?"#10B981":et},children:[(0,D.jsx)(xo,{size:11,style:{opacity:U.met?1:.3,color:U.met?"#10B981":et}}),U.label]},U.label))})]})),lr("Confirm New Password",(0,D.jsxs)("div",{style:{position:"relative"},children:[(0,D.jsx)("input",{type:"password",className:"panel-field-input",value:T,onChange:U=>R(U.target.value),style:{...nr,paddingRight:"2rem"}}),m.length>0&&T.length>0&&(0,D.jsx)("span",{style:{position:"absolute",right:"0.625rem",top:"50%",transform:"translateY(-50%)",color:T===m?"#10B981":"#EF4444",fontSize:"0.875rem"},children:T===m?"\u2713":"\u2717"})]})),M&&(0,D.jsx)("div",{style:{marginBottom:"1rem",padding:"0.625rem 0.875rem",borderRadius:"0.5rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",fontSize:"0.8125rem",color:"#EF4444"},children:M}),ri("btn-save-password",y0,!Sa,te,"Update password")]}),n==="preferences"&&(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{style:{marginBottom:"1.25rem"},children:[(0,D.jsx)("label",{style:pl,children:"Theme"}),(0,D.jsx)("div",{style:{display:"flex",gap:"0.25rem",background:Ae?"#2C2C2E":"#F5F5F7",borderRadius:"0.5rem",padding:"0.25rem",border:`1px solid ${Jt}`},children:[{val:"light",icon:(0,D.jsx)(Er,{size:13}),label:"Light"},{val:"dark",icon:(0,D.jsx)(Rr,{size:13}),label:"Dark"},{val:"system",icon:(0,D.jsx)(jn,{size:13}),label:"System"}].map(U=>(0,D.jsxs)("button",{onClick:()=>dt(U.val),style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"0.375rem",padding:"0.4375rem",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontSize:"0.8125rem",fontWeight:500,background:Y===U.val?Ae?"#3A3A3C":"#FFFFFF":"transparent",color:Y===U.val?Bo:et,boxShadow:Y===U.val?"0 1px 3px rgba(0,0,0,0.1)":"none",transition:"all 0.15s"},onMouseDown:De=>{De.currentTarget.style.transform="scale(0.96)"},onMouseUp:De=>{De.currentTarget.style.transform="scale(1)"},children:[U.icon," ",U.label]},U.val))})]}),(0,D.jsxs)("div",{style:{marginBottom:"1.25rem"},children:[(0,D.jsx)("label",{style:pl,children:"Default Entity"}),(0,D.jsxs)("select",{value:z,onChange:U=>$(U.target.value),style:{...nr,appearance:"none",cursor:"pointer"},children:[(0,D.jsx)("option",{value:"FI",children:"Foundation Institute (FI)"}),(0,D.jsx)("option",{value:"aragon",children:"Aragon Research Institute"})]})]}),(0,D.jsxs)("div",{style:{marginBottom:"1.5rem"},children:[(0,D.jsx)("label",{style:{...pl,marginBottom:"0.75rem"},children:"Notifications"}),(0,D.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[{label:"Live Alerts",sub:"Real-time device notifications",val:_e,set:oe},{label:"Experiment Updates",sub:"Status changes and results",val:ct,set:Nr},{label:"Weekly Digest",sub:"Summary of activity each week",val:q,set:He}].map(U=>(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem",borderRadius:"0.5rem",background:Ae?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:`1px solid ${Jt}`},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("div",{style:{fontSize:"0.875rem",fontWeight:500,color:Bo},children:U.label}),(0,D.jsx)("div",{style:{fontSize:"0.75rem",color:et,marginTop:"0.125rem"},children:U.sub})]}),b0(U.val,U.set)]},U.label))})]}),ri("btn-save-preferences",v0,!1,ce,"Save preferences")]})]})]})]}):null},o0=iL;(()=>{let e=document.createElement("style");e.textContent=`/* \u2500\u2500 Dark mode depth overrides \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
[data-theme="dark"] .sidebar {
  background: #18181A;
  border-right-color: rgba(255, 255, 255, 0.06);
}

[data-theme="dark"] .main-content {
  background-color: #111113;
}

[data-theme="dark"] .sidebar-footer {
  border-top-color: rgba(255, 255, 255, 0.06);
}

[data-theme="dark"] .sidebar-workspace {
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

[data-theme="dark"] .search-input {
  background-color: #2C2C2E;
  border-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .search-input:focus {
  background-color: #3A3A3C;
}

[data-theme="dark"] .modal-box {
  background: #1C1C1E;
  border-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .modal-input {
  background: #2C2C2E;
  border-color: rgba(255, 255, 255, 0.08);
  color: #F5F5F7;
}

/* \u2500\u2500 Dark mode text pass-through for card content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
[data-theme="dark"] .blynk-card {
  color: var(--color-text-primary);
  background-color: var(--color-card);
  border-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .progress-bar {
  background-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .signal-bar,
[data-theme="dark"] .battery-bar {
  background-color: rgba(255, 255, 255, 0.08);
}

/* === Dashboard Layout === */
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: var(--color-surface);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif;
  color: var(--color-text-primary);
  overflow: hidden;
}

/* === Sidebar === */
.sidebar {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-right: 1px solid var(--color-border-primary);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  z-index: 20;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.collapsed {
  transform: translateX(-240px);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.icon-only {
  width: 64px;
}

/* === Sidebar Brand Header (64px tall) === */
.sidebar-brand-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0 0.875rem;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid var(--color-border-primary);
  overflow: hidden;
  flex-shrink: 0;
}

.sidebar-brand-logo {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--entity-gradient, var(--gradient-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.sidebar-brand-logo:hover {
  opacity: 0.85;
}

.sidebar-brand-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.sidebar-brand-name {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.sidebar-brand-tagline {
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  white-space: nowrap;
}

.sidebar-collapse-btn {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: 1px solid var(--color-border-primary);
  background: transparent;
  color: var(--color-text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease, color 0.2s ease;
  margin-left: auto;
}

.sidebar-collapse-btn:hover {
  background: var(--color-surface);
  color: var(--color-text-primary);
}

/* === Sidebar Sections === */
.sidebar-section {
  padding: 0;
  flex-shrink: 0;
}

.sidebar-nav-section {
  flex: 1;
}

/* === Section Labels === */
.nav-section-label {
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-text-tertiary);
  padding: 16px 12px 6px;
  text-transform: uppercase;
}

/* === Nav Items === */
.nav-container {
  padding: 0.25rem 0;
}

.nav-container-system {
  flex: none;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  margin: 2px 6px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--color-text-secondary);
  gap: 0.625rem;
  white-space: nowrap;
  overflow: hidden;
}

.nav-item:hover {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}

.nav-item.active {
  background: rgba(var(--entity-accent-rgb, 0, 113, 227), 0.1);
  color: var(--entity-accent, var(--macos-accent-blue));
  font-weight: 600;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: inherit;
}

.nav-text {
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-badge {
  margin-left: auto;
  background: var(--entity-gradient, var(--gradient-primary));
  color: #fff;
  border-radius: 999px;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  line-height: 1.5;
  flex-shrink: 0;
}

.nav-divider {
  border-top: 1px solid var(--color-border-primary);
  margin: 0.5rem 0.75rem;
}

/* === Entity Switcher === */
.entity-switcher-wrap {
  position: relative;
  margin: 0 6px 4px;
}

.entity-switcher-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid var(--color-border-primary);
  background: var(--color-surface);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  min-height: 44px;
  overflow: hidden;
}

.entity-switcher-btn:hover,
.entity-switcher-btn.open {
  background: var(--color-card);
  border-color: var(--entity-accent, var(--color-border-secondary));
}

.entity-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.entity-switcher-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
}

.entity-switcher-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entity-switcher-sub {
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entity-chevron {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  transition: transform 200ms ease;
}

.entity-chevron.rotated {
  transform: rotate(180deg);
}

.entity-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--color-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 30;
  overflow: hidden;
  animation: slideDown 0.18s ease both;
}

.entity-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 10px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s ease;
  text-align: left;
}

.entity-dropdown-item:hover {
  background: var(--color-surface);
}

.entity-dropdown-item.active {
  background: rgba(var(--entity-accent-rgb, 0, 113, 227), 0.08);
}

.entity-dropdown-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.entity-dropdown-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entity-dropdown-sub {
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
}

.entity-active-check {
  font-size: 0.75rem;
  color: var(--entity-accent, var(--macos-accent-blue));
  font-weight: 700;
}

/* === Live Status Section === */
.live-status-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 6px 8px;
}

.live-status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.live-status-text {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.live-status-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.live-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10B981;
  flex-shrink: 0;
  animation: livePulse 2s ease-in-out infinite;
}

.live-dot-icon {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10B981;
  margin: 8px auto;
  animation: livePulse 2s ease-in-out infinite;
}

.live-status-collapsed {
  padding: 4px 0;
}

@keyframes livePulse {

  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }

  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);
  }
}

/* === Unified Sidebar Profile === */
.sidebar-profile {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 0.875rem;
  border-top: 1px solid var(--color-border-primary);
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  transition: background 0.18s ease;
  user-select: none;
  flex-shrink: 0;
}

.sidebar-profile:hover {
  background-color: var(--color-surface);
}

.sidebar-profile:active {
  transform: scale(0.98);
}

.sidebar-profile-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--entity-gradient, var(--gradient-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
  border: 2px solid var(--color-border-primary);
}

.sidebar-profile-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1px;
  flex: 1;
}

.sidebar-profile-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.sidebar-profile-role {
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-profile-badge {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.1875rem 0.5rem;
  border-radius: 9999px;
  background: rgba(var(--entity-accent-rgb, 0, 113, 227), 0.10);
  color: var(--entity-accent, #0071E3);
  border: 1px solid rgba(var(--entity-accent-rgb, 0, 113, 227), 0.25);
  flex-shrink: 0;
}

/* === Legacy sidebar-footer (backwards compat) === */
.sidebar-footer {
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--color-border-primary);
  display: flex;
  align-items: center;
  gap: 0.625rem;
  overflow: hidden;
  white-space: nowrap;
}

/* === Main Content === */
.main-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--color-surface);
  margin-left: 240px;
  transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
}

.main-content.sidebar-collapsed {
  margin-left: 0;
}

.main-content.sidebar-icon-only {
  margin-left: 64px;
}

.main-content-inner {
  padding: 32px 2rem 1.75rem;
  animation: fadeIn 0.2s ease;
  min-height: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === Content Cards === */
.content-card {
  background-color: var(--color-card);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.card-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.01em;
}

.card-text {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.9375rem;
}

.content-placeholder {
  margin-top: 2rem;
  padding: 3rem;
  border: 2px dashed var(--color-border-primary);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-surface);
}

.placeholder-text {
  color: var(--color-text-tertiary);
  text-align: center;
  font-size: 0.875rem;
}

/* === Experiments Section === */
.experiments-section {
  animation: fadeIn 0.2s ease;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.section-subtitle {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 0.25rem 0 0 0;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* === Action Buttons === */
.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}

.action-button.primary {
  background: var(--gradient-primary);
  color: #000000;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
}

.action-button.primary:hover {
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
  transform: translateY(-1px);
}

.action-button.primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 122, 255, 0.3);
}

.action-button.secondary {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-primary);
}

.action-button.secondary:hover {
  background-color: var(--color-card);
  color: var(--color-text-primary);
  border-color: var(--color-border-secondary);
}

.action-button.danger {
  background-color: var(--macos-accent-red-light);
  color: var(--macos-accent-red);
  border: 1px solid rgba(255, 59, 48, 0.2);
}

.action-button.danger:hover {
  background-color: var(--macos-accent-red);
  color: white;
}

/* === Search === */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.875rem;
  color: var(--color-text-tertiary);
}

.search-input {
  padding: 0.625rem 1rem 0.625rem 2.625rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 8px;
  font-size: 0.875rem;
  width: 240px;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--color-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}

.search-input::placeholder {
  color: var(--color-text-tertiary);
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
  border-color: var(--macos-accent-blue);
  background-color: var(--color-card);
}

/* === Experiment Grid === */
.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.25rem;
  padding: 0.25rem 0;
}

/* === Experiment Card === */
.blynk-card {
  background-color: var(--color-card);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
  position: relative;
  overflow: hidden;
}

.blynk-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.blynk-card.active::before {
  opacity: 1;
}

.blynk-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-secondary);
}

.blynk-card.clickable {
  cursor: pointer;
  will-change: transform;
}

.blynk-card.clickable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.blynk-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
}

.experiment-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  background: var(--gradient-accent);
  color: white;
  flex-shrink: 0;
}

.experiment-title {
  flex: 1;
  min-width: 0;
}

.experiment-title h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.experiment-status {
  display: flex;
  align-items: center;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.status-indicator.success {
  background-color: var(--macos-accent-green-light);
  color: var(--macos-accent-green);
  border: 1px solid rgba(52, 199, 89, 0.25);
}

.status-indicator.warning {
  background-color: var(--macos-accent-orange-light);
  color: var(--macos-accent-orange);
  border: 1px solid rgba(255, 149, 0, 0.25);
}

.status-indicator.info {
  background-color: var(--macos-accent-blue-light);
  color: var(--macos-accent-blue);
  border: 1px solid rgba(0, 122, 255, 0.25);
}

.status-indicator.secondary {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-primary);
}

.card-actions {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: #6B7280;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .control-btn {
  border-color: rgba(255, 255, 255, 0.10);
  color: #9CA3AF;
}

.control-btn.play:hover {
  background-color: rgba(52, 199, 89, 0.12);
  color: #1D8348;
  border-color: rgba(52, 199, 89, 0.25);
}

.control-btn.pause:hover {
  background-color: rgba(255, 159, 10, 0.12);
  color: #B7770D;
  border-color: rgba(255, 159, 10, 0.25);
}

.control-btn.refresh:hover:not(:disabled) {
  background-color: var(--entity-accent-light, var(--macos-accent-blue-light));
  color: var(--entity-accent, var(--macos-accent-blue));
  border-color: transparent;
}

.control-btn.refresh:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.control-btn.delete:hover {
  background-color: rgba(239, 68, 68, 0.10);
  color: #DC2626;
  border-color: rgba(239, 68, 68, 0.2);
}

.control-btn.settings:hover {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}

/* === Metrics === */
.blynk-metrics {
  margin-bottom: 1.25rem;
}

.metric-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.metric-row:last-child {
  margin-bottom: 0;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.metric-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 0.375rem;
  background-color: var(--color-surface);
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  border: 1px solid var(--color-border-primary);
}

.metric-info {
  flex: 1;
  min-width: 0;
}

.metric-label {
  display: block;
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  margin-bottom: 0.125rem;
}

.metric-value {
  display: block;
  font-size: 0.8125rem;
  color: var(--color-text-primary);
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* === Signal & Battery Bars === */
.signal-bar,
.battery-bar {
  display: inline-block;
  width: 36px;
  height: 4px;
  background-color: var(--color-border-primary);
  border-radius: 2px;
  overflow: hidden;
  margin-right: 0.375rem;
  vertical-align: middle;
}

.signal-fill,
.battery-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.4s ease, background 0.4s ease;
}

.signal-fill.strong,
.battery-fill.good {
  background: linear-gradient(90deg, var(--macos-accent-green), #28A745);
}

.signal-fill.medium,
.battery-fill.medium {
  background: linear-gradient(90deg, var(--macos-accent-orange), #E67E22);
}

.signal-fill.weak,
.battery-fill.low {
  background: linear-gradient(90deg, var(--macos-accent-red), #DC3545);
}

/* === Progress === */
.blynk-progress {
  margin-bottom: 1.25rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.375rem;
}

.progress-label {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.progress-percentage {
  font-size: 0.8125rem;
  color: var(--color-text-primary);
  font-weight: 600;
  font-family: 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.progress-bar {
  height: 6px;
  background-color: var(--color-border-primary);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-fill.active {
  background: var(--gradient-primary);
}

.progress-fill.inactive {
  background-color: var(--color-border-secondary);
}

/* === Stats Row === */
.blynk-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-primary);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
}

/* === Empty State === */
.empty-state {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--color-text-secondary);
  background-color: var(--color-card);
  border: 2px dashed var(--color-border-primary);
  border-radius: 1rem;
}

.empty-state svg {
  margin-bottom: 1rem;
  color: var(--color-text-tertiary);
  opacity: 0.6;
}

.empty-state h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 0.5rem 0;
}

.empty-state p {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  max-width: 320px;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
}

/* === Experiment Detail View === */
.experiment-detail-view {
  animation: fadeIn 0.2s ease;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--color-border-primary);
  flex-wrap: wrap;
  gap: 1rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
  background-color: var(--color-card);
  color: var(--color-text-primary);
  border-color: var(--color-border-secondary);
}

.detail-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.detail-actions .control-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  width: auto;
  height: auto;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-info-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--color-card);
  border-radius: 1rem;
  padding: 1.75rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.experiment-large-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 1rem;
  background: var(--gradient-accent);
  color: white;
  flex-shrink: 0;
}

.experiment-details {
  flex: 1;
}

.experiment-details h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 0.625rem 0;
  line-height: 1.2;
}

.experiment-details .experiment-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.experiment-details .status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.3rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.experiment-details .status-badge.success {
  background-color: rgba(16, 185, 129, 0.12);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.experiment-details .status-badge.warning {
  background-color: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.experiment-details .status-badge.secondary {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-primary);
}

.experiment-details .meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}

/* === Metrics Grid === */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.metric-card {
  background-color: var(--color-card);
  border-radius: 0.875rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-text-secondary);
}

.metric-header h3 {
  font-size: 0.8125rem;
  font-weight: 500;
  margin: 0;
}

.metric-card .metric-value {
  font-size: 1.625rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 500;
}

.metric-trend.positive {
  color: #10b981;
}

.metric-trend.negative {
  color: #ef4444;
}

.signal-progress,
.battery-progress {
  height: 6px;
  background-color: var(--color-border-primary);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.signal-progress .signal-fill,
.battery-progress .battery-fill,
.metric-card .progress-bar .progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease, background 0.4s ease;
}

.metric-card .progress-bar {
  height: 6px;
  background-color: var(--color-border-primary);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
}

/* === Activity Chart Card === */
.activity-chart-card {
  background-color: var(--color-card);
  border-radius: 0.875rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.chart-header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
}

.chart-header-left h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.chart-controls {
  display: flex;
  gap: 0.25rem;
  background-color: var(--color-surface);
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-primary);
}

.chart-btn {
  padding: 0.3rem 0.75rem;
  background-color: transparent;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.chart-btn:hover {
  color: var(--color-text-primary);
  background-color: var(--color-card);
}

.chart-btn.active {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 1px 4px rgba(26, 39, 68, 0.25);
}

.chart-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: var(--color-surface);
  border-radius: 0.5rem;
  color: var(--color-text-secondary);
  text-align: center;
  border: 1px solid var(--color-border-primary);
}

.chart-placeholder svg {
  margin-bottom: 1rem;
  color: var(--color-text-tertiary);
  opacity: 0.6;
}

.chart-placeholder p {
  font-size: 0.875rem;
  margin: 0 0 0.25rem 0;
  color: var(--color-text-secondary);
}

.chart-placeholder span {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}

/* === Info Grid === */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.875rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--color-card);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
  color: var(--color-text-secondary);
}

.info-card h4 {
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--color-text-tertiary);
  margin: 0 0 0.2rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-card p {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

/* === API Testing === */
.api-testing-section {
  animation: fadeIn 0.2s ease;
}

.api-testing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.request-builder,
.response-display {
  background-color: var(--color-card);
  border-radius: 0.875rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.request-builder h3,
.response-display h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--color-text-primary);
}

.method-selector,
.endpoint-selector,
.headers-input,
.body-input {
  margin-bottom: 1rem;
}

.method-selector label,
.endpoint-selector label,
.headers-input label,
.body-input label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 0.375rem;
}

.method-selector select,
.endpoint-selector input,
.headers-input textarea,
.body-input textarea {
  width: 100%;
  padding: 0.625rem 0.875rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-primary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.method-selector select:focus,
.endpoint-selector input:focus,
.headers-input textarea:focus,
.body-input textarea:focus {
  outline: none;
  border-color: var(--entity-accent, var(--macos-accent-blue));
  background-color: var(--color-card);
}

.endpoint-selector input::placeholder,
.headers-input textarea::placeholder,
.body-input textarea::placeholder {
  color: var(--color-text-tertiary);
}

.saved-endpoints {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-primary);
}

.saved-endpoints h4 {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text-primary);
}

.saved-endpoints-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.saved-endpoint-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.875rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.saved-endpoint-item:hover {
  background-color: var(--color-card);
  border-color: var(--color-border-secondary);
}

.saved-endpoint-item.active {
  background-color: var(--entity-accent-light, var(--macos-accent-blue-light));
  border-color: var(--entity-accent, var(--macos-accent-blue));
}

.saved-endpoint-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
}

.saved-endpoint-info .method-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.1875rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  flex-shrink: 0;
}

.saved-endpoint-info .method-badge.get {
  background-color: rgba(16, 185, 129, 0.15);
  color: #10B981;
}

.saved-endpoint-info .method-badge.post {
  background-color: rgba(59, 130, 246, 0.15);
  color: #3B82F6;
}

.saved-endpoint-info .method-badge.put {
  background-color: rgba(245, 158, 11, 0.15);
  color: #F59E0B;
}

.saved-endpoint-info .method-badge.delete {
  background-color: rgba(239, 68, 68, 0.15);
  color: #EF4444;
}

.endpoint-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.endpoint-path {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.delete-endpoint-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: var(--color-text-tertiary);
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background 0.2s ease, color 0.2s ease;
  flex-shrink: 0;
}

.delete-endpoint-btn:hover {
  background-color: rgba(239, 68, 68, 0.1);
  color: #EF4444;
}

.method-selector select,
.endpoint-selector select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.method-selector select:focus,
.endpoint-selector select:focus {
  outline: none;
  border-color: var(--entity-accent, var(--macos-accent-blue));
  box-shadow: 0 0 0 2px rgba(var(--entity-accent-rgb, 0, 113, 227), 0.15);
}

.body-input textarea {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  resize: vertical;
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  min-height: 100px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.body-input textarea:focus {
  outline: none;
  border-color: var(--entity-accent, var(--macos-accent-blue));
  box-shadow: 0 0 0 2px rgba(var(--entity-accent-rgb, 0, 113, 227), 0.15);
}

.quick-tests h4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 0 0 0.625rem 0;
}

.quick-test-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.quick-test-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.625rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.375rem;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.quick-test-btn:hover {
  background-color: var(--color-card);
  border-color: var(--color-border-secondary);
  color: var(--color-text-primary);
}

.response-display {
  max-height: 600px;
  overflow-y: auto;
}

.test-history {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.test-result {
  border: 1px solid var(--color-border-primary);
  border-radius: 0.625rem;
  overflow: hidden;
}

.test-result.success {
  border-left: 3px solid #10b981;
}

.test-result.error {
  border-left: 3px solid #ef4444;
}

.test-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border-primary);
}

.test-info {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-wrap: wrap;
}

.method-badge {
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.method-badge.get {
  background-color: rgba(59, 130, 246, 0.12);
  color: #2563eb;
}

.method-badge.post {
  background-color: rgba(16, 185, 129, 0.12);
  color: #059669;
}

.method-badge.put {
  background-color: rgba(245, 158, 11, 0.12);
  color: #d97706;
}

.method-badge.delete {
  background-color: rgba(239, 68, 68, 0.12);
  color: #dc2626;
}

.endpoint {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8125rem;
  color: var(--color-text-primary);
}

.timestamp {
  font-size: 0.6875rem;
  color: var(--color-text-tertiary);
}

.test-actions {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.test-actions button {
  padding: 0.25rem;
  background: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  color: var(--color-text-tertiary);
  transition: color 0.15s ease;
}

.test-actions button:hover {
  color: var(--color-text-primary);
}

.success-icon {
  color: #10b981;
}

.error-icon {
  color: #ef4444;
}

.request-body,
.response-body {
  padding: 0.875rem 1rem;
}

.request-body strong,
.response-body strong {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
}

.request-body pre,
.response-body pre {
  margin: 0;
  padding: 0.75rem;
  background-color: var(--color-surface);
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--color-text-primary);
  overflow-x: auto;
  white-space: pre-wrap;
  border: 1px solid var(--color-border-primary);
}

/* === Modal === */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-box {
  background-color: var(--color-card);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 440px;
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-xl);
  animation: modalIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-8px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.modal-close {
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.modal-close:hover {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}

.modal-field {
  margin-bottom: 1.25rem;
}

.modal-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.modal-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  color: var(--color-text-primary);
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;
}

.modal-input::placeholder {
  color: var(--color-text-tertiary);
}

.modal-input:focus {
  outline: none;
  border-color: var(--entity-accent, var(--macos-accent-blue));
  box-shadow: 0 0 0 3px rgba(var(--entity-accent-rgb, 0, 113, 227), 0.15);
  background-color: var(--color-card);
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.modal-btn-cancel {
  padding: 0.5625rem 1.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.modal-btn-cancel:hover {
  background-color: var(--color-card);
  color: var(--color-text-primary);
}

.modal-btn-create {
  padding: 0.5625rem 1.25rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(26, 39, 68, 0.25);
}

.modal-btn-create:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(26, 39, 68, 0.35);
  transform: translateY(-1px);
}

.modal-btn-create:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* === Global Button Audit \u2014 active press scale ===
   Applies to all interactive button-like elements in the dashboard */
button:active,
[role="button"]:active {
  transform: scale(0.97);
}

/* === Animations === */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }

  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

@keyframes blobMove1 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(20px, -15px) scale(1.05);
  }

  66% {
    transform: translate(-10px, 10px) scale(0.97);
  }
}

@keyframes blobMove2 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(-20px, 10px) scale(1.04);
  }

  66% {
    transform: translate(15px, -20px) scale(0.96);
  }
}

@keyframes blobMove3 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(10px, 15px) scale(1.03);
  }
}

/* Responsive experiment detail 3-column \u2192 1-column */
@media (max-width: 1100px) {
  .experiment-detail-view>div[style*="grid-template-columns: 260px"] {
    grid-template-columns: 1fr !important;
  }
}

/* === Responsive === */
@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .blynk-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .metric-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .api-testing-grid {
    grid-template-columns: 1fr;
  }

  .detail-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .metrics-grid {
    grid-template-columns: 1fr 1fr;
  }

  .sidebar {
    width: 240px;
    z-index: 50;
  }

  .sidebar.collapsed {
    transform: translateX(-240px);
    width: 240px;
  }

  .sidebar.icon-only {
    width: 240px;
  }

  .main-content {
    margin-left: 0 !important;
  }

  .search-input {
    width: 180px;
  }
}

/* Overlay for mobile sidebar */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

@media (max-width: 480px) {
  .main-content-inner {
    padding: 1.25rem 1rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .detail-info-card {
    flex-direction: column;
    text-align: center;
  }
}
`,document.head.appendChild(e)})();var h=H(G()),it={THEME:"blzc.theme",ACTIVE_ENTITY:"blzc.activeEntity",USER_PROFILE:"blzc.userProfile",SESSION:"blzc.session",SIDEBAR_STATE:"blzc.sidebarCollapsed"};function uL(){[{old:"theme",newKey:it.THEME},{old:"blazecore_entity",newKey:it.ACTIVE_ENTITY},{old:"blzc-active-entity",newKey:it.ACTIVE_ENTITY},{old:"blazecore_user",newKey:it.SESSION},{old:"blzc-user-profile",newKey:it.USER_PROFILE},{old:"user-profile",newKey:it.USER_PROFILE}].forEach(({old:t,newKey:a})=>{let r=localStorage.getItem(t);r!==null&&(localStorage.getItem(a)||localStorage.setItem(a,r),localStorage.removeItem(t))})}var Nt={fi:{id:"fi",name:"FI",fullName:"Foundation Institute",tagline:"Open research infrastructure & experimentation",description:"The Foundation Institute node hosts cutting-edge IoT experiments across its distributed sensor network. Specialising in smart-city, environmental monitoring, and energy research.",location:"Barcelona, Spain",website:"fi.eus",devices:48,activeExperiments:12,researchers:34,colors:{gradient:"linear-gradient(135deg, #9B1C1C 0%, #C0392B 100%)",primary:"#C0392B",accent:"#E74C3C",bgLight:"rgba(192,57,43,0.10)",bgMedium:"rgba(192,57,43,0.14)",borderColor:"rgba(192,57,43,0.28)"},icon:"\u{1F3DB}"},aragon:{id:"aragon",name:"Aragon",fullName:"Aragon Research Institute",tagline:"Smart systems & connected infrastructure",description:"The Aragon node drives innovation in industrial IoT, precision agriculture, and autonomous systems research, leveraging state-of-the-art sensor fusion and edge computing.",location:"Zaragoza, Spain",website:"aragon.es",devices:36,activeExperiments:9,researchers:27,colors:{gradient:"linear-gradient(135deg, #1A56DB 0%, #3B82F6 100%)",primary:"#1A56DB",accent:"#3B82F6",bgLight:"rgba(26,86,219,0.10)",bgMedium:"rgba(26,86,219,0.14)",borderColor:"rgba(26,86,219,0.28)"},icon:"\u{1F52C}"}};function sc(e){let t=document.documentElement;e?(t.style.setProperty("--entity-accent",e.colors.primary),t.style.setProperty("--entity-accent-light",e.colors.bgLight),t.style.setProperty("--entity-accent-muted",e.colors.bgLight),t.style.setProperty("--entity-gradient",e.colors.gradient),document.body.setAttribute("data-entity",e.id),localStorage.setItem(it.ACTIVE_ENTITY,JSON.stringify({entity:e.id,accent:e.colors.primary}))):(t.style.removeProperty("--entity-accent"),t.style.removeProperty("--entity-accent-light"),t.style.removeProperty("--entity-accent-muted"),t.style.removeProperty("--entity-gradient"),document.body.removeAttribute("data-entity"))}var ic=({onClose:e,onCreate:t,entity:a})=>{let{theme:r}=Se(),[o,n]=(0,ee.useState)(""),[l,s]=(0,ee.useState)(!1),[i,u]=(0,ee.useState)(""),[p,g]=(0,ee.useState)(""),x=(0,ee.useRef)(null);(0,ee.useEffect)(()=>{x.current?.focus()},[]);let S=async b=>{b.preventDefault();let c=o.trim();if(!c)return;s(!0);let f=i.trim()&&p.trim()?{device:{device_id:i.trim(),name:i.trim(),protocol:"mqtt_web_socket",connector:{type:"mqtt_web_socket",topic:p.trim(),qos:1}}}:void 0;try{await t(c,f),e()}finally{s(!1)}},d=a?a.colors.primary:"#CE422B",L=a?a.colors.gradient:"linear-gradient(135deg, #CE422B 0%, #F97316 100%)";return(0,h.jsx)("div",{className:"modal-overlay",onClick:b=>{b.target===b.currentTarget&&e()},children:(0,h.jsxs)("div",{className:"modal-box",style:{maxWidth:"480px"},children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[(0,h.jsx)("div",{style:{width:"2rem",height:"2rem",borderRadius:"0.5rem",background:L,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(Xa,{size:14,color:"#fff"})}),(0,h.jsxs)("h2",{className:"modal-title",children:["New Experiment",a?` \u2014 ${a.name}`:""]})]}),(0,h.jsx)("button",{className:"modal-close",onClick:e,children:(0,h.jsx)(At,{size:18})})]}),(0,h.jsx)("p",{style:{fontSize:"0.875rem",color:r.colors.text.secondary,marginBottom:"1.25rem"},children:a?`Create a new experiment in the ${a.fullName} node.`:"Create a new IoT experiment to start collecting data."}),(0,h.jsxs)("form",{onSubmit:S,children:[(0,h.jsxs)("div",{className:"modal-field",children:[(0,h.jsx)("label",{className:"modal-label",children:"Experiment Name"}),(0,h.jsx)("input",{ref:x,type:"text",className:"modal-input",placeholder:"e.g. Temperature Sensor Array #3",value:o,onChange:b=>n(b.target.value),disabled:l})]}),(0,h.jsxs)("div",{className:"modal-field",children:[(0,h.jsx)("label",{className:"modal-label",children:"Field DAQ Device ID (optional)"}),(0,h.jsx)("input",{className:"modal-input",type:"text",placeholder:"e.g. daq-field-01",value:i,onChange:b=>u(b.target.value),disabled:l})]}),(0,h.jsxs)("div",{className:"modal-field",children:[(0,h.jsx)("label",{className:"modal-label",children:"DAQ MQTT/WebSocket Topic (optional)"}),(0,h.jsx)("input",{className:"modal-input",type:"text",placeholder:"e.g. daq/daq-field-01/telemetry",value:p,onChange:b=>g(b.target.value),disabled:l})]}),(0,h.jsxs)("div",{className:"modal-actions",children:[(0,h.jsx)("button",{type:"button",className:"modal-btn-cancel",onClick:e,disabled:l,children:"Cancel"}),(0,h.jsx)("button",{type:"submit",disabled:l||!o.trim(),style:{padding:"0.5625rem 1.25rem",border:"none",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,color:"white",cursor:l||!o.trim()?"not-allowed":"pointer",background:l||!o.trim()?"#94a3b8":L,boxShadow:l||!o.trim()?"none":`0 2px 8px ${d}50`,transition:"all 0.2s"},children:l?"Creating\u2026":"Create Experiment"})]})]})]})})},dL=({activeEntityId:e,onSelect:t,collapsed:a,experimentsCount:r})=>{let[o,n]=(0,ee.useState)(!1),l=(0,ee.useRef)(null),s=Nt[e]||Nt.fi;return(0,ee.useEffect)(()=>{let i=u=>{l.current&&!l.current.contains(u.target)&&n(!1)};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[]),(0,h.jsxs)("div",{ref:l,className:"entity-switcher-wrap",children:[(0,h.jsxs)("button",{className:`entity-switcher-btn ${o?"open":""}`,onClick:()=>n(i=>!i),title:a?s.fullName:void 0,children:[(0,h.jsx)("span",{className:"entity-dot",style:{background:s.colors.primary}}),!a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"entity-switcher-info",children:[(0,h.jsx)("span",{className:"entity-switcher-name",children:s.name}),(0,h.jsxs)("span",{className:"entity-switcher-sub",children:[s.location," \xB7 ",r," exp"]})]}),(0,h.jsx)(Dn,{size:13,className:`entity-chevron ${o?"rotated":""}`})]})]}),o&&!a&&(0,h.jsx)("div",{className:"entity-dropdown",children:Object.values(Nt).map(i=>(0,h.jsxs)("button",{className:`entity-dropdown-item ${i.id===e?"active":""}`,onClick:()=>{t(i.id),n(!1)},children:[(0,h.jsx)("span",{className:"entity-dot",style:{background:i.colors.primary}}),(0,h.jsxs)("div",{className:"entity-dropdown-info",children:[(0,h.jsx)("span",{className:"entity-dropdown-name",children:i.fullName}),(0,h.jsx)("span",{className:"entity-dropdown-sub",children:i.location})]}),i.id===e&&(0,h.jsx)("span",{className:"entity-active-check",children:"\u2713"})]},i.id))})]})},cL=({collapsed:e,experiments:t})=>{let a=t.filter(o=>["ONLINE","ACTIVE","RUNNING","DONE"].includes(o.status.toUpperCase())).length,r=a;return e?(0,h.jsx)("div",{className:"sidebar-section live-status-collapsed",children:(0,h.jsx)("span",{className:"live-dot-icon",title:`${a} live sessions`})}):(0,h.jsxs)("div",{className:"sidebar-section",children:[(0,h.jsx)("span",{className:"nav-section-label",children:"Live Status"}),(0,h.jsxs)("div",{className:"live-status-items",children:[(0,h.jsxs)("div",{className:"live-status-item",children:[(0,h.jsx)("span",{className:"live-pulse-dot"}),(0,h.jsxs)("span",{className:"live-status-text",children:[a," Live sessions"]})]}),(0,h.jsxs)("div",{className:"live-status-item",children:[(0,h.jsx)(Pe,{size:12,className:"live-status-icon"}),(0,h.jsxs)("span",{className:"live-status-text",children:[r," devices online"]})]}),(0,h.jsxs)("div",{className:"live-status-item",children:[(0,h.jsx)(er,{size:12,className:"live-status-icon"}),(0,h.jsx)("span",{className:"live-status-text",children:"TLS 1.3 secured"})]})]})]})},n0=({icon:e,text:t,isActive:a=!1,onClick:r,badge:o,collapsed:n})=>(0,h.jsxs)("div",{className:`nav-item ${a?"active":""}`,onClick:r,title:n?t:void 0,"aria-current":a?"page":void 0,children:[(0,h.jsx)("div",{className:"nav-icon",children:e}),!n&&(0,h.jsx)("span",{className:"nav-text",children:t}),!n&&o!==void 0&&o>0&&(0,h.jsx)("span",{className:"nav-badge",children:o})]}),fL=({experiments:e,onCreateExperiment:t,onToggleStatus:a,onDeleteExperiment:r,onRefresh:o,onExperimentClick:n})=>{let{theme:l}=Se(),[s,i]=(0,ee.useState)(null),[u,p]=(0,ee.useState)(null),[g,x]=(0,ee.useState)(""),[S,d]=(0,ee.useState)(!1),L=s?Nt[s]:null,b=e.filter(c=>c.name.toLowerCase().includes(g.toLowerCase()));return(0,ee.useEffect)(()=>{sc(L)},[s]),u&&L?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(lc,{experiment:u,onBack:()=>p(null),onDelete:async()=>{await r(u.id),p(null)},onToggleStatus:()=>a(u.id),onRefresh:o,entityColors:L.colors}),S&&(0,h.jsx)(ic,{onClose:()=>d(!1),onCreate:t,entity:L})]}):L?(0,h.jsxs)("div",{className:"experiments-section",children:[(0,h.jsxs)("div",{style:{background:L.colors.gradient,borderRadius:"1.25rem",padding:"2rem",marginBottom:"1.75rem",position:"relative",overflow:"hidden"},children:[(0,h.jsx)("div",{style:{position:"absolute",top:"-2rem",right:"-2rem",width:"12rem",height:"12rem",background:"rgba(255,255,255,0.06)",borderRadius:"50%"}}),(0,h.jsx)("div",{style:{position:"absolute",bottom:"-3rem",right:"4rem",width:"8rem",height:"8rem",background:"rgba(255,255,255,0.04)",borderRadius:"50%"}}),(0,h.jsxs)("button",{onClick:()=>{i(null),x("")},style:{display:"inline-flex",alignItems:"center",gap:"0.375rem",padding:"0.375rem 0.875rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",color:"#fff",fontSize:"0.8125rem",fontWeight:500,cursor:"pointer",marginBottom:"1.25rem"},children:[(0,h.jsx)(br,{size:14})," All Entities"]}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem",flexWrap:"wrap"},children:[(0,h.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[(0,h.jsx)("span",{style:{fontSize:"1.5rem"},children:L.icon}),(0,h.jsx)("h1",{style:{fontSize:"1.75rem",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-0.025em"},children:L.fullName})]}),(0,h.jsx)("p",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.9375rem",margin:"0 0 1rem",lineHeight:1.6,maxWidth:"40rem"},children:L.description}),(0,h.jsx)("div",{style:{display:"flex",gap:"1.25rem",flexWrap:"wrap"},children:[{icon:(0,h.jsx)(Ja,{size:13}),label:L.location},{icon:(0,h.jsx)($a,{size:13}),label:`${L.devices} Devices`},{icon:(0,h.jsx)(tr,{size:13}),label:`${L.researchers} Researchers`}].map((c,f)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",color:"rgba(255,255,255,0.85)",fontSize:"0.8125rem"},children:[c.icon,c.label]},f))})]}),(0,h.jsx)("div",{style:{display:"flex",gap:"0.875rem",flexShrink:0},children:[{value:e.length,label:"Experiments"},{value:L.activeExperiments,label:"Active"}].map((c,f)=>(0,h.jsxs)("div",{style:{background:"rgba(255,255,255,0.12)",borderRadius:"0.875rem",padding:"0.875rem 1.25rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(8px)",minWidth:"5rem"},children:[(0,h.jsx)("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#fff",lineHeight:1},children:c.value}),(0,h.jsx)("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.75)",marginTop:"0.25rem",fontWeight:500},children:c.label})]},f))})]})]}),(0,h.jsxs)("div",{className:"section-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"section-title",children:"Experiments"}),(0,h.jsxs)("p",{className:"section-subtitle",children:[b.length," experiment",b.length!==1?"s":""," in ",L.name]})]}),(0,h.jsxs)("div",{className:"section-actions",children:[(0,h.jsxs)("div",{className:"search-container",children:[(0,h.jsx)(So,{size:15,className:"search-icon"}),(0,h.jsx)("input",{type:"text",placeholder:"Search experiments\u2026",className:"search-input",value:g,onChange:c=>x(c.target.value)})]}),(0,h.jsxs)("button",{onClick:()=>d(!0),style:{display:"flex",alignItems:"center",gap:"0.375rem",padding:"0.5rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,cursor:"pointer",border:"none",color:"#fff",background:L.colors.gradient,boxShadow:`${L.colors.primary}40 0px 2px 8px`,transition:"0.2s"},children:[(0,h.jsx)(Xt,{size:15})," New Experiment"]})]})]}),(0,h.jsx)("div",{className:"experiment-grid",children:b.length>0?b.map(c=>(0,h.jsx)(oc,{experiment:c,onToggleStatus:()=>a(c.id),onDelete:()=>r(c.id),onRefresh:o,onClick:()=>n?n(c):p(c),entityColors:L.colors},c.id)):(0,h.jsxs)("div",{className:"empty-state",children:[(0,h.jsx)(Xa,{size:44}),(0,h.jsx)("h3",{children:g?"No matches":"No Experiments Yet"}),(0,h.jsx)("p",{children:g?`No experiments match "${g}"`:`Start your first experiment in the ${L.name} node.`}),!g&&(0,h.jsxs)("button",{onClick:()=>d(!0),style:{display:"flex",alignItems:"center",gap:"0.375rem",padding:"0.5rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,cursor:"pointer",border:"none",color:"#fff",background:L.colors.gradient,boxShadow:`${L.colors.primary}40 0px 2px 8px`,transition:"0.2s"},children:[(0,h.jsx)(Xt,{size:15})," Create First Experiment"]})]})}),S&&(0,h.jsx)(ic,{onClose:()=>d(!1),onCreate:t,entity:L})]}):(0,h.jsxs)("div",{style:{animation:"fadeIn 0.2s ease"},children:[(0,h.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,h.jsx)("h1",{style:{fontSize:"1.375rem",fontWeight:800,color:"var(--color-text-primary)",margin:"0 0 0.375rem",letterSpacing:"-0.025em"},children:"Research Entities"}),(0,h.jsx)("p",{style:{fontSize:"0.9375rem",color:"var(--color-text-secondary)",margin:0},children:"Select a node to browse and manage its experiments"})]}),(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"1.5rem",marginBottom:"2.5rem"},children:Object.values(Nt).map(c=>(0,h.jsxs)("div",{onClick:()=>i(c.id),style:{borderRadius:"1.25rem",overflow:"hidden",border:`1px solid ${c.colors.borderColor}`,boxShadow:"var(--shadow-md)",cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.25s ease",background:"var(--color-card)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-4px)",f.currentTarget.style.boxShadow=`0 16px 40px ${c.colors.primary}25`},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="var(--shadow-md)"},children:[(0,h.jsxs)("div",{style:{background:c.colors.gradient,padding:"1.75rem",position:"relative",overflow:"hidden"},children:[(0,h.jsx)("div",{style:{position:"absolute",top:"-1.5rem",right:"-1.5rem",width:"8rem",height:"8rem",background:"rgba(255,255,255,0.08)",borderRadius:"50%"}}),(0,h.jsx)("div",{style:{fontSize:"2.25rem",marginBottom:"0.625rem"},children:c.icon}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.25rem"},children:[(0,h.jsx)("h2",{style:{fontSize:"1.375rem",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-0.025em"},children:c.fullName}),(0,h.jsx)("span",{style:{background:"rgba(255,255,255,0.2)",color:"#fff",borderRadius:"999px",padding:"0.15rem 0.625rem",fontSize:"0.6875rem",fontWeight:700,letterSpacing:"0.06em"},children:c.name})]}),(0,h.jsx)("p",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.875rem",margin:0},children:c.tagline})]}),(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderBottom:`1px solid ${c.colors.borderColor}`},children:[{value:e.length,label:"Experiments"},{value:c.devices,label:"Devices"},{value:c.researchers,label:"Researchers"}].map((f,m)=>(0,h.jsxs)("div",{style:{padding:"1.125rem 0.75rem",textAlign:"center",borderRight:m<2?`1px solid ${c.colors.borderColor}`:"none"},children:[(0,h.jsx)("div",{style:{fontSize:"1.375rem",fontWeight:800,color:c.colors.primary,letterSpacing:"-0.02em"},children:f.value}),(0,h.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-text-tertiary)",marginTop:"0.2rem",fontWeight:500},children:f.label})]},m))}),(0,h.jsxs)("div",{style:{padding:"1.375rem"},children:[(0,h.jsx)("p",{style:{fontSize:"0.875rem",color:"var(--color-text-secondary)",lineHeight:1.65,margin:"0 0 1.25rem"},children:c.description}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.75rem"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.8125rem",color:"var(--color-text-tertiary)"},children:[(0,h.jsx)(Ja,{size:13})," ",c.location]}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.375rem",padding:"0.5rem 1.125rem",borderRadius:"0.5rem",background:c.colors.gradient,color:"#fff",fontSize:"0.875rem",fontWeight:600,boxShadow:`0 2px 10px ${c.colors.primary}35`},children:["View Experiments ",(0,h.jsx)(Va,{size:14})]})]})]})]},c.id))}),(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"1rem"},children:[{icon:(0,h.jsx)(Ka,{size:18}),label:"Total Entities",value:"2"},{icon:(0,h.jsx)($a,{size:18}),label:"Total Devices",value:String(Object.values(Nt).reduce((c,f)=>c+f.devices,0))},{icon:(0,h.jsx)(Xa,{size:18}),label:"All Experiments",value:String(e.length)},{icon:(0,h.jsx)(Ge,{size:18}),label:"Live Sessions",value:String(Object.values(Nt).reduce((c,f)=>c+f.activeExperiments,0))},{icon:(0,h.jsx)(Gt,{size:18}),label:"Security",value:"TLS 1.3"}].map((c,f)=>(0,h.jsxs)("div",{style:{background:"var(--color-card)",borderRadius:"0.875rem",border:"1px solid var(--color-border-primary)",padding:"1rem 1.125rem",display:"flex",alignItems:"center",gap:"0.75rem",boxShadow:"var(--shadow-sm)"},children:[(0,h.jsx)("div",{style:{width:"2.25rem",height:"2.25rem",borderRadius:"0.5rem",background:"var(--entity-accent-muted, var(--macos-accent-blue-light))",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--entity-accent, var(--macos-accent-blue))",flexShrink:0},children:c.icon}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontSize:"0.6875rem",color:"var(--color-text-tertiary)",fontWeight:500,marginBottom:"0.2rem"},children:c.label}),(0,h.jsx)("div",{style:{fontSize:"1rem",fontWeight:700,color:"var(--color-text-primary)"},children:c.value})]})]},f))})]})},pL=({experiments:e,onCreateExperiment:t,onToggleStatus:a,onDeleteExperiment:r,onRefresh:o})=>{let{mode:n}=Se(),[l,s]=(0,ee.useState)(()=>{try{return localStorage.getItem(it.SIDEBAR_STATE)!=="true"}catch{return!0}}),[i,u]=(0,ee.useState)("entities"),[p,g]=(0,ee.useState)(""),[x,S]=(0,ee.useState)(null),[d,L]=(0,ee.useState)(!1),[b,c]=(0,ee.useState)(!1),[f,m]=(0,ee.useState)(!1),[I,T]=(0,ee.useState)(()=>{try{let q=localStorage.getItem(it.ACTIVE_ENTITY);if(q)return JSON.parse(q).entity||"fi"}catch{}return"fi"});(0,ee.useEffect)(()=>{uL()},[]),(0,ee.useEffect)(()=>{let q=()=>m(window.innerWidth<=768);return q(),window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]),(0,ee.useEffect)(()=>{try{let q=localStorage.getItem(it.ACTIVE_ENTITY);if(q){let{entity:He}=JSON.parse(q),ce=Nt[He];ce&&sc(ce)}}catch{}},[]),(0,ee.useEffect)(()=>{localStorage.setItem(it.SIDEBAR_STATE,String(!l))},[l]);let R=(()=>{try{return JSON.parse(localStorage.getItem(it.USER_PROFILE)||"{}")}catch{return{}}})(),P=(()=>{try{return localStorage.getItem(it.SESSION)||"Admin"}catch{return"Admin"}})(),F=R.fullName||P,E=R.role||"Researcher",v=R.avatarUrl||"",M=F.split(" ").map(q=>q[0]).join("").toUpperCase().slice(0,2)||F.charAt(0).toUpperCase(),N=Nt[I]?.name||"FI",te=q=>{T(q),sc(Nt[q])},Q=q=>{u(q),S(null),document.title=`${q.charAt(0).toUpperCase()+q.slice(1).replace("-"," ")} \u2014 Blazecore`,f&&s(!1)},Y=q=>{S(q),f&&s(!1)},dt=()=>s(q=>!q),z=e.filter(q=>q.name.toLowerCase().includes(p.toLowerCase())),$=[{id:"entities",icon:(0,h.jsx)(An,{size:20}),label:"Entities",badge:Object.keys(Nt).length},{id:"experiments",icon:(0,h.jsx)(Vn,{size:20}),label:"Experiments"},{id:"api-testing",icon:(0,h.jsx)(Mr,{size:20}),label:"API Testing"},{id:"resources",icon:(0,h.jsx)(Mn,{size:20}),label:"Resources"},{id:"reports",icon:(0,h.jsx)(Wa,{size:20}),label:"Reports"}],_e=[{id:"settings",icon:(0,h.jsx)(Fr,{size:20}),label:"Settings"},{id:"help",icon:(0,h.jsx)(Mt,{size:20}),label:"Help"}],oe=l===!1&&!f,ct=["sidebar","dashboard-desktop-sidebar",!l&&f?"collapsed":"",!l&&!f?"icon-only":""].filter(Boolean).join(" "),Nr=()=>{switch(i){case"entities":return(0,h.jsx)(fL,{experiments:e,onCreateExperiment:t,onToggleStatus:a,onDeleteExperiment:r,onRefresh:o,onExperimentClick:Y});case"experiments":return(0,h.jsx)("div",{className:"experiments-section",children:x?(0,h.jsx)(lc,{experiment:x,onBack:()=>S(null),onDelete:async()=>{await r(x.id),S(null)},onToggleStatus:()=>a(x.id),onRefresh:o}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"section-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"section-title",children:"All Experiments"}),(0,h.jsxs)("p",{className:"section-subtitle",children:[e.length," experiment",e.length!==1?"s":""," across all entities"]})]}),(0,h.jsxs)("div",{className:"section-actions",children:[(0,h.jsxs)("div",{className:"search-container",children:[(0,h.jsx)(So,{size:15,className:"search-icon"}),(0,h.jsx)("input",{type:"text",placeholder:"Search\u2026",className:"search-input",value:p,onChange:ce=>g(ce.target.value)})]}),(0,h.jsxs)("button",{className:"action-button primary",onClick:()=>L(!0),children:[(0,h.jsx)(Xt,{size:15}),(0,h.jsx)("span",{children:"New Experiment"})]})]})]}),(0,h.jsx)("div",{className:"experiment-grid",children:z.length>0?z.map(ce=>(0,h.jsx)(oc,{experiment:ce,onToggleStatus:()=>a(ce.id),onDelete:()=>r(ce.id),onRefresh:o,onClick:()=>Y(ce)},ce.id)):(0,h.jsxs)("div",{className:"empty-state",children:[(0,h.jsx)(st,{size:44}),(0,h.jsx)("h3",{children:p?"No matches":"No Experiments"}),(0,h.jsx)("p",{children:p?`No experiments match "${p}"`:"Create your first IoT experiment to get started."}),!p&&(0,h.jsxs)("button",{className:"action-button primary",onClick:()=>L(!0),children:[(0,h.jsx)(Xt,{size:15}),(0,h.jsx)("span",{children:"Create Experiment"})]})]})})]})});case"api-testing":return(0,h.jsx)($g,{});default:let He={resources:{title:"Resources",subtitle:"Manage assets and storage across your IoT network."},reports:{title:"Reports & Analytics",subtitle:"View performance reports and generate insights."},settings:{title:"System Settings",subtitle:"Configure your Blazecore platform."},help:{title:"Help & Support",subtitle:"Documentation, guides, and community resources."}}[i]||{title:i,subtitle:""};return(0,h.jsxs)("div",{className:"content-card",children:[(0,h.jsx)("h1",{className:"card-title",style:{fontSize:"22px",fontWeight:700,color:"var(--text-primary)",marginBottom:"4px"},children:He.title}),(0,h.jsx)("p",{className:"card-text",children:He.subtitle}),(0,h.jsxs)("div",{className:"content-placeholder",children:[(0,h.jsx)(Xa,{size:32,style:{color:"var(--color-text-tertiary)",opacity:.5,marginBottom:"0.75rem"}}),(0,h.jsx)("p",{className:"placeholder-text",children:"Coming soon \u2014 this section is under active development."})]})]})}};return(0,h.jsxs)(h.Fragment,{children:[l&&f&&(0,h.jsx)("div",{style:{position:"fixed",inset:0,zIndex:45,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"},onClick:()=>s(!1)}),!l&&f&&(0,h.jsx)("button",{onClick:dt,style:{position:"fixed",top:"1rem",left:"1rem",zIndex:60,width:"40px",height:"40px",borderRadius:"10px",background:"var(--color-card)",border:"1px solid var(--color-border-primary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"var(--shadow-md)",color:"var(--color-text-secondary)"},"aria-label":"Open navigation",children:(0,h.jsx)(kr,{size:18})}),(0,h.jsxs)("div",{className:"dashboard-container",children:[(0,h.jsxs)("aside",{className:ct,children:[(0,h.jsxs)("div",{className:"sidebar-brand-header",children:[(0,h.jsx)("div",{className:"sidebar-brand-logo",onClick:()=>window.location.href="/",title:"Blazecore",children:(0,h.jsx)(Pe,{size:14,color:"#fff"})}),!oe&&(0,h.jsxs)("div",{className:"sidebar-brand-info",children:[(0,h.jsx)("span",{className:"sidebar-brand-name",children:"Blazecore"}),(0,h.jsx)("span",{className:"sidebar-brand-tagline",children:"IoT Platform"})]}),(0,h.jsx)("button",{className:"sidebar-collapse-btn",onClick:dt,title:l?"Collapse sidebar":"Expand sidebar","aria-label":l?"Collapse sidebar":"Expand sidebar",children:oe?(0,h.jsx)(Va,{size:14}):(0,h.jsx)(Bn,{size:14})})]}),(0,h.jsxs)("div",{className:"sidebar-section",children:[!oe&&(0,h.jsx)("span",{className:"nav-section-label",children:"Workspace"}),(0,h.jsx)(dL,{activeEntityId:I,onSelect:te,collapsed:oe,experimentsCount:e.length})]}),(0,h.jsxs)("div",{className:"sidebar-section sidebar-nav-section",children:[!oe&&(0,h.jsx)("span",{className:"nav-section-label",children:"Navigation"}),(0,h.jsx)("nav",{className:"nav-container",children:$.map(q=>(0,h.jsx)(n0,{icon:q.icon,text:q.label,isActive:i===q.id,onClick:()=>Q(q.id),badge:q.badge,collapsed:oe},q.id))})]}),(0,h.jsxs)("div",{className:"sidebar-section",children:[!oe&&(0,h.jsx)("span",{className:"nav-section-label",children:"System"}),(0,h.jsx)("nav",{className:"nav-container nav-container-system",children:_e.map(q=>(0,h.jsx)(n0,{icon:q.icon,text:q.label,isActive:i===q.id,onClick:()=>Q(q.id),collapsed:oe},q.id))})]}),(0,h.jsx)(cL,{collapsed:oe,experiments:e}),(0,h.jsxs)("div",{id:"sidebar-profile",className:"sidebar-profile",onClick:()=>c(!0),role:"button",tabIndex:0,"aria-label":"Open account settings",title:oe?`${F} \xB7 ${E}`:void 0,onKeyDown:q=>{(q.key==="Enter"||q.key===" ")&&c(!0)},children:[(0,h.jsx)("div",{className:"sidebar-profile-avatar",children:v?(0,h.jsx)("img",{src:v,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):M}),!oe&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"sidebar-profile-info",children:[(0,h.jsx)("span",{className:"sidebar-profile-name",children:F}),(0,h.jsx)("span",{className:"sidebar-profile-role",children:E})]}),(0,h.jsx)("div",{className:"sidebar-profile-badge",children:N})]})]})]}),(0,h.jsx)("main",{className:`main-content ${!l&&f?"sidebar-collapsed":""} ${!l&&!f?"sidebar-icon-only":""}`,children:(0,h.jsx)("div",{className:"main-content-inner",children:Nr()})})]}),d&&(0,h.jsx)(ic,{onClose:()=>L(!1),onCreate:t}),(0,h.jsx)(o0,{isOpen:b,onClose:()=>c(!1),currentEntity:N}),(0,h.jsx)("style",{children:`
        @media (max-width: 767px) {
          .dashboard-desktop-sidebar { position: fixed !important; z-index: 50 !important; }
        }
        .sidebar-profile:focus-visible {
          outline: 2px solid var(--entity-accent, #0071E3);
          outline-offset: 2px;
        }
      `})]})},l0=pL;async function s0(e,t){let a={name:e,status:"PENDING",field_daq:t};return Wg(new Zt().create,a,201)}async function i0(e){return jg(new Zt().deleteUrl(e),200)}async function u0(e,t,a){let r={id:a,name:e,status:t};return Gg(new Zt().update,r,200)}var xa=H(ve());var _=H(G()),gL=["section-hero","section-stats","section-research-tools","section-about","section-contact"],hL=["landing","about","contact"],xL=({onNavigate:e,currentPage:t,isAuthenticated:a,onLogout:r})=>{let{mode:o,toggleTheme:n}=Se(),[l,s]=xa.default.useState(!1),[i,u]=xa.default.useState(!1),[p,g]=xa.default.useState("section-hero"),x=(0,xa.useRef)(null),S=hL.includes(t);xa.default.useEffect(()=>{let E=()=>u(window.scrollY>16);return window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[]),(0,xa.useEffect)(()=>{if(!S){g("section-hero");return}x.current&&x.current.disconnect(),x.current=new IntersectionObserver(M=>{M.forEach(N=>{N.isIntersecting&&g(N.target.id)})},{threshold:.4,rootMargin:"-64px 0px 0px 0px"});let v=setTimeout(()=>{gL.forEach(M=>{let N=document.getElementById(M);N&&x.current?.observe(N)})},120);return()=>{clearTimeout(v),x.current?.disconnect()}},[S,t]);let d=(E,v)=>{if(v)if(S){let M=document.getElementById(v);M&&M.scrollIntoView({behavior:"smooth",block:"start"})}else e("landing",v);else e(E);s(!1)},L=E=>S?p===E:!1,b=o==="light"?"#0071E3":"#2997FF",c=o==="light"?"#1D1D1F":"#F5F5F7",f=o==="light"?"#86868B":"#98989D",m=o==="light"?"rgba(255,255,255,0.82)":"rgba(28,28,30,0.82)",I=o==="light"?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",T=o==="light"?"rgba(0,113,227,0.08)":"rgba(41,151,255,0.12)",R=o==="light"?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.06)",P={display:"inline-flex",alignItems:"center",gap:"0.375rem",padding:"0.4375rem 0.875rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:500,cursor:"pointer",border:"none",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',letterSpacing:"0.01em",textDecoration:"none",transition:"all 0.18s ease"},F=[{sectionId:"section-hero",icon:(0,_.jsx)(Qa,{size:13}),label:"Home"},{sectionId:"section-about",icon:(0,_.jsx)(Wn,{size:13}),label:"About"},{sectionId:"section-contact",icon:(0,_.jsx)(Pr,{size:13}),label:"Contact"}];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("style",{children:`
        .nav-desktop { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; align-items: center; gap: 0.125rem; }
          .nav-hamburger { display: none; }
        }
        .mobile-nav-menu { display: none; }
        .mobile-nav-menu.open { display: flex; }
        .nav-link-btn {
          background: transparent; color: ${f};
          cursor: pointer;
        }
        .nav-link-btn:hover { background: ${R} !important; color: ${c} !important; }
        .nav-link-btn:active { transform: scale(0.97) !important; }
        .nav-link-btn:focus-visible { outline: 2px solid ${b}; outline-offset: 2px; }
        .nav-link-active { background: var(--entity-accent-muted, ${T}) !important; color: var(--entity-accent, ${b}) !important; }
        .theme-toggle-btn:hover { border-color: ${b} !important; color: ${b} !important; }
        .signup-btn:hover { transform: translateY(-1px) !important; box-shadow: 0 6px 20px rgba(0,113,227,0.35) !important; }
        .signup-btn:active { transform: scale(0.97) !important; }
        html { scroll-padding-top: var(--nav-height, 4rem); }
      `}),(0,_.jsx)("nav",{id:"nav-primary",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:i?m:"transparent",backdropFilter:i?"blur(20px) saturate(1.8)":"none",WebkitBackdropFilter:i?"blur(20px) saturate(1.8)":"none",borderBottom:i?`1px solid ${I}`:"1px solid transparent",boxShadow:i?o==="light"?"0 1px 3px rgba(0,0,0,0.06)":"0 1px 3px rgba(0,0,0,0.3)":"none",transition:"background 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease"},children:(0,_.jsxs)("div",{style:{maxWidth:"82rem",margin:"0 auto",padding:"0 1.5rem"},children:[(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"4rem"},children:[(0,_.jsxs)("button",{onClick:()=>d("landing","section-hero"),style:{display:"flex",alignItems:"center",gap:"0.625rem",cursor:"pointer",border:"none",background:"none",padding:0},onMouseDown:E=>{E.currentTarget.style.transform="scale(0.97)"},onMouseUp:E=>{E.currentTarget.style.transform="scale(1)"},children:[(0,_.jsx)("div",{style:{width:"2rem",height:"2rem",borderRadius:"0.5rem",background:b,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 2px 8px ${b}40`},children:(0,_.jsx)(Pe,{size:13,color:"#FFFFFF"})}),(0,_.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",lineHeight:1.1},children:[(0,_.jsx)("span",{style:{fontSize:"1rem",fontWeight:600,color:c,letterSpacing:"-0.02em"},children:"Blazecore"}),(0,_.jsx)("span",{style:{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.10em",color:f,textTransform:"uppercase",marginTop:"-1px"},children:"IoT Platform"})]})]}),(0,_.jsxs)("div",{className:"nav-desktop",children:[F.map(({sectionId:E,icon:v,label:M})=>(0,_.jsxs)("button",{"data-target":E,className:`nav-link-btn ${L(E)?"nav-link-active":""}`,onClick:()=>d("landing",E),style:P,children:[v,(0,_.jsx)("span",{children:M})]},E)),a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{"data-target":"dashboard",className:`nav-link-btn ${t==="dashboard"?"nav-link-active":""}`,onClick:()=>d("dashboard"),style:P,children:[(0,_.jsx)(Et,{size:13}),(0,_.jsx)("span",{children:"Dashboard"})]}),(0,_.jsx)("div",{style:{width:1,height:"1.125rem",background:I,margin:"0 0.375rem"}}),(0,_.jsxs)("button",{className:"nav-link-btn",onClick:()=>{r(),s(!1)},style:P,children:[(0,_.jsx)(Lo,{size:13}),(0,_.jsx)("span",{children:"Logout"})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{style:{width:1,height:"1.125rem",background:I,margin:"0 0.375rem"}}),(0,_.jsxs)("button",{className:`nav-link-btn ${t==="login"?"nav-link-active":""}`,onClick:()=>d("login"),style:P,children:[(0,_.jsx)(vo,{size:13}),(0,_.jsx)("span",{children:"Login"})]}),(0,_.jsxs)("button",{className:"signup-btn",onClick:()=>d("signup"),style:{display:"inline-flex",alignItems:"center",gap:"0.375rem",padding:"0.4375rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,cursor:"pointer",background:b,border:"none",color:"#FFFFFF",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',boxShadow:`0 2px 8px ${b}35`,transition:"background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",marginLeft:"0.25rem"},children:[(0,_.jsx)(Co,{size:13}),(0,_.jsx)("span",{children:"Sign Up"})]})]})]}),(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,_.jsx)("button",{className:"theme-toggle-btn",onClick:n,"aria-label":"Toggle theme",style:{width:"2rem",height:"2rem",borderRadius:"0.5rem",background:o==="light"?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.06)",border:`1px solid ${I}`,color:f,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.15s ease, color 0.15s ease"},onMouseDown:E=>{E.currentTarget.style.transform="scale(0.95)"},onMouseUp:E=>{E.currentTarget.style.transform="scale(1)"},children:o==="light"?(0,_.jsx)(Rr,{size:14}):(0,_.jsx)(Er,{size:14})}),(0,_.jsx)("button",{onClick:()=>s(!l),className:"nav-hamburger","aria-label":"Toggle mobile menu","aria-expanded":l,style:{width:"2rem",height:"2rem",borderRadius:"0.5rem",background:o==="light"?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.06)",border:`1px solid ${I}`,color:f,cursor:"pointer",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},onMouseDown:E=>{E.currentTarget.style.transform="scale(0.95)"},onMouseUp:E=>{E.currentTarget.style.transform="scale(1)"},children:l?(0,_.jsx)(At,{size:15}):(0,_.jsx)(kr,{size:15})})]})]}),(0,_.jsxs)("div",{className:`mobile-nav-menu${l?" open":""}`,style:{borderTop:`1px solid ${I}`,paddingTop:"0.75rem",paddingBottom:"1rem",flexDirection:"column",gap:"0.25rem",background:o==="light"?"rgba(255,255,255,0.95)":"rgba(28,28,30,0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)"},children:[F.map(({sectionId:E,icon:v,label:M})=>(0,_.jsxs)("button",{"data-target":E,onClick:()=>d("landing",E),className:`nav-link-btn ${L(E)?"nav-link-active":""}`,style:{...P,justifyContent:"flex-start",width:"100%"},children:[v,(0,_.jsx)("span",{children:M})]},E)),a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{onClick:()=>d("dashboard"),className:`nav-link-btn ${t==="dashboard"?"nav-link-active":""}`,style:{...P,justifyContent:"flex-start",width:"100%"},children:[(0,_.jsx)(Et,{size:15}),(0,_.jsx)("span",{children:"Dashboard"})]}),(0,_.jsxs)("button",{onClick:()=>{r(),s(!1)},className:"nav-link-btn",style:{...P,justifyContent:"flex-start",width:"100%"},children:[(0,_.jsx)(Lo,{size:15}),(0,_.jsx)("span",{children:"Logout"})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{onClick:()=>d("login"),className:`nav-link-btn ${t==="login"?"nav-link-active":""}`,style:{...P,justifyContent:"flex-start",width:"100%"},children:[(0,_.jsx)(vo,{size:15}),(0,_.jsx)("span",{children:"Login"})]}),(0,_.jsxs)("button",{onClick:()=>d("signup"),style:{display:"flex",alignItems:"center",gap:"0.375rem",padding:"0.625rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:600,cursor:"pointer",background:b,border:"none",color:"#FFFFFF",width:"100%",marginTop:"0.25rem"},children:[(0,_.jsx)(Co,{size:15}),(0,_.jsx)("span",{children:"Sign Up"})]})]})]})]})})]})},d0=xL;var re=H(ve());var y=H(G()),yL=26,c0=120,f0=c0*c0,vL=({isDark:e})=>{let t=(0,re.useRef)(null);return(0,re.useEffect)(()=>{let a=t.current;if(!a)return;let r=a.getContext("2d",{alpha:!0});if(!r)return;let o,n=!0,l=[],s=()=>{a.width=a.offsetWidth,a.height=a.offsetHeight},i=()=>{l=Array.from({length:yL},()=>({x:Math.random()*a.width,y:Math.random()*a.height,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,r:Math.random()*1.6+.7}))},u=e?"rgba(41,151,255,0.42)":"rgba(0,113,227,0.32)",p=e?"41,151,255":"0,113,227",g=()=>{if(!n){o=requestAnimationFrame(g);return}r.clearRect(0,0,a.width,a.height);let d=l.length;for(let L=0;L<d;L++){let b=l[L];b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>a.width)&&(b.vx*=-1),(b.y<0||b.y>a.height)&&(b.vy*=-1),r.beginPath(),r.arc(b.x,b.y,b.r,0,Math.PI*2),r.fillStyle=u,r.fill();for(let c=L+1;c<d;c++){let f=l[c].x-b.x,m=l[c].y-b.y,I=f*f+m*m;if(I<f0){let T=.09*(1-I/f0);r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(l[c].x,l[c].y),r.strokeStyle=`rgba(${p},${T.toFixed(3)})`,r.lineWidth=.7,r.stroke()}}}o=requestAnimationFrame(g)},x=new IntersectionObserver(([d])=>{n=d.isIntersecting});x.observe(a),s(),i(),g();let S=new ResizeObserver(()=>{s(),i()});return S.observe(a),()=>{cancelAnimationFrame(o),S.disconnect(),x.disconnect()}},[e]),(0,y.jsx)("canvas",{ref:t,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",willChange:"auto"}})},LL=({value:e,color:t})=>{let a=(0,re.useRef)(null),[r,o]=(0,re.useState)("0"),[n,l]=(0,re.useState)(0),s=parseFloat(e.replace(/[^0-9.]/g,""))||0,i=e.replace(/[0-9.]/g,""),u=(0,re.useCallback)(()=>{let p=performance.now(),g=1100;l(S=>S+1);let x=S=>{let d=Math.min((S-p)/g,1),L=1-Math.pow(1-d,3);s>10?o(Math.round(L*s).toString()):o((L*s).toFixed(s%1?1:0)),d<1&&requestAnimationFrame(x)};requestAnimationFrame(x)},[s]);return(0,re.useEffect)(()=>{let p=a.current;if(!p)return;let g=new IntersectionObserver(([x])=>{x.isIntersecting&&(u(),g.disconnect())},{threshold:.4});return g.observe(p),()=>g.disconnect()},[u]),(0,y.jsx)("div",{ref:a,className:"animate-count",style:{fontSize:"2rem",fontWeight:700,letterSpacing:"-0.03em",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',color:t},children:s>0?r+i:e},n)},uc=({children:e,color:t,style:a,className:r,onMouseEnter:o,onMouseLeave:n})=>{let[l,s]=(0,re.useState)(0),[i,u]=(0,re.useState)(!1),p=(0,re.useRef)(null),g=(0,re.useRef)(!1),x=(0,re.useCallback)(()=>{u(!1),requestAnimationFrame(()=>{u(!0),s(S=>S+1)})},[]);return(0,re.useEffect)(()=>{let S=p.current;if(!S)return;let d=new IntersectionObserver(([L])=>{L.isIntersecting&&!g.current&&(g.current=!0,setTimeout(()=>x(),120))},{threshold:.18});return d.observe(S),()=>d.disconnect()},[x]),(0,y.jsxs)("div",{ref:p,className:r,style:{position:"relative",overflow:"hidden",borderRadius:"1rem",...a},onMouseEnter:()=>{x(),u(!0),o?.()},onMouseLeave:()=>{n?.()},children:[i&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:"trace-top",style:{background:t}},`t-${l}`),(0,y.jsx)("span",{className:"trace-right",style:{background:t}},`r-${l}`),(0,y.jsx)("span",{className:"trace-bottom",style:{background:t}},`b-${l}`),(0,y.jsx)("span",{className:"trace-left",style:{background:t}},`l-${l}`)]}),e]})};function Ao(e=.12){let t=(0,re.useRef)(null),[a,r]=(0,re.useState)(!1);return(0,re.useEffect)(()=>{let o=t.current;if(!o)return;let n=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return n.observe(o),()=>n.disconnect()},[]),{ref:t,visible:a}}var SL=({p:e})=>{let[t,a]=(0,re.useState)({name:"",email:"",message:""}),[r,o]=(0,re.useState)(!1),[n,l]=(0,re.useState)(!1),[s,i]=(0,re.useState)(""),u=async g=>{g.preventDefault(),o(!0),i("");try{await new Promise(x=>setTimeout(x,1200)),l(!0),a({name:"",email:"",message:""}),setTimeout(()=>l(!1),4e3)}catch{i("Failed to send. Please try again.")}finally{o(!1)}},p={width:"100%",padding:"0.75rem 1rem",borderRadius:"0.625rem",border:`1.5px solid ${e.glassBorder}`,background:e.isDark?"rgba(44,44,46,0.8)":"rgba(245,245,247,0.8)",color:e.fg,fontSize:"0.9375rem",outline:"none",transition:"border-color 0.2s",boxSizing:"border-box",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'};return(0,y.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s&&(0,y.jsxs)("div",{style:{padding:"0.75rem 1rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:"0.625rem",display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,y.jsx)(vt,{size:14,color:"#EF4444"}),(0,y.jsx)("span",{style:{fontSize:"0.875rem",color:"#EF4444"},children:s})]}),n&&(0,y.jsxs)("div",{style:{padding:"0.75rem 1rem",background:"rgba(52,199,89,0.08)",border:"1px solid rgba(52,199,89,0.25)",borderRadius:"0.625rem",display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,y.jsx)(Ee,{size:14,color:"#34C759"}),(0,y.jsx)("span",{style:{fontSize:"0.875rem",color:"#1D8348"},children:"\u2713 Message sent \u2014 we'll respond within 24h."})]}),(0,y.jsx)("input",{type:"text",placeholder:"Your name",required:!0,value:t.name,onChange:g=>a({...t,name:g.target.value}),disabled:r,style:p}),(0,y.jsx)("input",{type:"email",placeholder:"your@email.com",required:!0,value:t.email,onChange:g=>a({...t,email:g.target.value}),disabled:r,style:p,autoComplete:"email"}),(0,y.jsx)("textarea",{placeholder:"Your message\u2026",required:!0,value:t.message,onChange:g=>a({...t,message:g.target.value}),disabled:r,rows:4,style:{...p,resize:"vertical",lineHeight:1.6}}),(0,y.jsx)("button",{type:"submit",disabled:r,style:{width:"100%",padding:"0.8125rem 1.5rem",background:r?e.isDark?"#3A3A3C":"#E5E5EA":e.accent,color:r?e.fg2:"#fff",border:"none",borderRadius:"0.625rem",fontSize:"0.9375rem",fontWeight:600,cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",boxShadow:r?"none":`0 4px 14px ${e.accent}40`,transition:"all 0.2s"},onMouseEnter:g=>{r||(g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.opacity="0.9")},onMouseLeave:g=>{g.currentTarget.style.transform="",g.currentTarget.style.opacity="1"},onMouseDown:g=>{r||(g.currentTarget.style.transform="scale(0.97)")},onMouseUp:g=>{g.currentTarget.style.transform=""},children:r?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:{width:"1rem",height:"1rem",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),"Sending..."]}):(0,y.jsxs)(y.Fragment,{children:["Send Message ",(0,y.jsx)(Xn,{size:16})]})})]})},CL=({onNavigate:e,scrollToSection:t,onScrollComplete:a})=>{let{mode:r}=Se(),[o,n]=(0,re.useState)(0),l="IoT Experiment Platform";(0,re.useEffect)(()=>{if(o<l.length){let v=setTimeout(()=>n(M=>M+1),52);return()=>clearTimeout(v)}},[o]),(0,re.useEffect)(()=>{if(t){let v=(M=0)=>{let N=document.getElementById(t);N?setTimeout(()=>{N.scrollIntoView({behavior:"smooth",block:"start"}),a?.()},80):M<8&&setTimeout(()=>v(M+1),100)};v()}},[t]);let s=Ao(),i=Ao(),u=Ao(),p=Ao(),g=Ao(),x=Ao(),S=r==="dark",d={isDark:S,accent:S?"#2997FF":"#0071E3",accentB:S?"#5AC8FA":"#2997FF",accentGreen:S?"#30D158":"#34C759",fg:S?"#F5F5F7":"#1D1D1F",fg2:S?"#98989D":"#86868B",fg3:S?"#636366":"#A1A1A6",bg:S?"#000000":"#F5F5F7",bg4:S?"#3A3A3C":"#86868B",border:S?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",glass:S?"rgba(28,28,30,0.72)":"rgba(255,255,255,0.72)",glassBorder:S?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",glassShadow:S?"0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)":"0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)",cardBg:S?"#1C1C1E":"#FFFFFF",shadow:S?"0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)":"0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)"},L=(v,M,N=!1)=>({"--r":`${v}deg`,transform:`rotate(${v}deg)`,animation:`${N?"floatAlt":"float"} ${N?6.5:5}s ease-in-out infinite`,animationDelay:M,background:d.glass,backdropFilter:"blur(20px) saturate(1.6)",WebkitBackdropFilter:"blur(20px) saturate(1.6)",border:`1px solid ${d.glassBorder}`,boxShadow:d.glassShadow,padding:"1.25rem",position:"relative",overflow:"hidden"}),b=(0,y.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",borderRadius:"inherit",background:"linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 55%, transparent 100%)"}}),c=(0,y.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg, transparent, ${d.accent}, transparent)`,borderRadius:"inherit"}}),f=v=>(0,y.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.3125rem 0.875rem",borderRadius:"9999px",background:`${d.accent}12`,border:`1px solid ${d.accent}30`,fontSize:"0.73rem",fontWeight:600,color:d.accent,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:"1.25rem"},children:[(0,y.jsx)("span",{style:{width:5,height:5,borderRadius:"50%",background:d.accent,animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}),v]}),m=(v,M,N,te)=>(0,y.jsxs)("button",{onClick:()=>e(M,te),style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",borderRadius:"0.5625rem",fontSize:"0.9375rem",fontWeight:600,cursor:"pointer",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',letterSpacing:"-0.01em",transition:"all 0.22s ease",...N?{background:d.accent,border:"none",color:"#FFFFFF",boxShadow:`0 2px 8px ${d.accent}40`}:{background:S?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:`1px solid ${d.border}`,color:d.fg2}},onMouseEnter:Q=>{let Y=Q.currentTarget;Y.style.transform="translateY(-2px)",Y.style.boxShadow=N?`0 6px 20px ${d.accent}45`:"0 4px 12px rgba(0,0,0,0.10)"},onMouseLeave:Q=>{let Y=Q.currentTarget;Y.style.transform="translateY(0)",Y.style.boxShadow=N?`0 2px 8px ${d.accent}40`:"none"},onMouseDown:Q=>{Q.currentTarget.style.transform="scale(0.97)"},onMouseUp:Q=>{Q.currentTarget.style.transform=""},children:[v,N&&(0,y.jsx)(jt,{size:15})]}),I=[{icon:(0,y.jsx)(Ge,{size:19}),title:"Real-time Monitoring",desc:"Live data streaming from all IoT devices with instant threshold alerts."},{icon:(0,y.jsx)(st,{size:19}),title:"Data Management",desc:"Structured experiment data with PostgreSQL and time-series storage."},{icon:(0,y.jsx)(er,{size:19}),title:"Secure Auth",desc:"Enterprise-grade JWT auth with role-based access control."},{icon:(0,y.jsx)(Et,{size:19}),title:"Analytics Dashboard",desc:"Comprehensive dashboards with exportable reports and insights."},{icon:(0,y.jsx)(Ka,{size:19}),title:"REST API",desc:"OpenAPI-compliant interface for seamless third-party integration."},{icon:(0,y.jsx)(Za,{size:19}),title:"Microservices",desc:"Rust-powered distributed services built for performance."}],T=[{icon:(0,y.jsx)(En,{size:18}),title:"Open Datasets",desc:"Curated datasets for research and academic publication."},{icon:(0,y.jsx)(_n,{size:18}),title:"Version Control",desc:"Track every experiment iteration for reproducibility."},{icon:(0,y.jsx)(tr,{size:18}),title:"Collaborative",desc:"Share experiments across institutions and teams."},{icon:(0,y.jsx)(ga,{size:18}),title:"Deep Analytics",desc:"Statistical tools for data-driven scientific discovery."}],R=[{value:"100%",label:"Open Source",sub:"MIT Licensed"},{value:"Rust",label:"Powered By",sub:"High performance"},{value:"2.4 TB",label:"Processed",sub:"Across nodes"},{value:"84+",label:"Devices",sub:"Connected"}],P=[{icon:(0,y.jsx)(Qn,{size:24,color:d.accent}),title:"Our Mission",desc:"To simplify IoT experiment management and provide powerful tools for developers and researchers to build the future of connected systems."},{icon:(0,y.jsx)(fa,{size:24,color:d.accentB}),title:"Our Vision",desc:"Becoming the leading platform for IoT experimentation, enabling innovation through accessible, scalable, and open-source technology."},{icon:(0,y.jsx)(tr,{size:24,color:d.accentGreen}),title:"Our Community",desc:"Building a community of IoT enthusiasts, developers, and researchers who share knowledge and push the boundaries of what's possible."}],F=[{icon:(0,y.jsx)($t,{size:20,color:d.accent}),title:"Email Us",content:"support@blazecore.io",description:"We respond within 24 hours"},{icon:(0,y.jsx)($n,{size:20,color:d.accent}),title:"Call Us",content:"+1 (555) 123-4567",description:"Mon\u2013Fri 9am\u20136pm EST"},{icon:(0,y.jsx)(Ja,{size:20,color:d.accent}),title:"Visit Us",content:"123 Tech Street",description:"San Francisco, CA 94102"}],E=(v,M,N)=>(0,y.jsxs)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[(0,y.jsx)("div",{style:{fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:d.accent,marginBottom:"0.625rem"},children:v}),(0,y.jsx)("h2",{style:{fontSize:"clamp(1.75rem, 3.5vw, 2.5rem)",fontWeight:700,color:d.fg,margin:"0 0 0.625rem",letterSpacing:"-0.025em"},children:M}),N&&(0,y.jsx)("p",{style:{fontSize:"1rem",color:d.fg2,margin:0,maxWidth:"42rem",marginLeft:"auto",marginRight:"auto",lineHeight:1.7},children:N})]});return(0,y.jsxs)("main",{id:"page-home",style:{minHeight:"100vh",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'},children:[(0,y.jsx)("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .contact-form-input:focus {
          border-color: ${d.accent} !important;
          box-shadow: 0 0 0 3px ${d.accent}20 !important;
        }
        .card-hover:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important;
        }
      `}),(0,y.jsxs)("section",{id:"section-hero",style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:"3rem",overflow:"hidden"},children:[(0,y.jsx)(vL,{isDark:S}),(0,y.jsxs)("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[(0,y.jsx)("div",{style:{position:"absolute",top:"-8rem",right:"-6rem",width:"38rem",height:"38rem",borderRadius:"50%",background:`radial-gradient(circle, ${d.accent}14 0%, transparent 65%)`,animation:"blobMove1 14s ease-in-out infinite"}}),(0,y.jsx)("div",{style:{position:"absolute",top:"35%",left:"-8rem",width:"30rem",height:"30rem",borderRadius:"50%",background:`radial-gradient(circle, ${d.accentB}0C 0%, transparent 65%)`,animation:"blobMove2 17s ease-in-out infinite"}}),(0,y.jsx)("div",{style:{position:"absolute",bottom:"-4rem",right:"25%",width:"24rem",height:"24rem",borderRadius:"50%",background:`radial-gradient(circle, ${d.accent}0A 0%, transparent 65%)`,animation:"blobMove3 11s ease-in-out infinite"}}),(0,y.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle, ${d.bg4}28 1px, transparent 1px)`,backgroundSize:"28px 28px",opacity:.35}})]}),(0,y.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%"},children:(0,y.jsx)("div",{style:{maxWidth:"82rem",margin:"0 auto",padding:"0 1.5rem"},children:(0,y.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"4.5rem",alignItems:"center"},children:[(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem"},children:[(0,y.jsx)("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:f("Open Source \xB7 Research-First")}),(0,y.jsx)("div",{className:"animate-fade-up",style:{animationDelay:"80ms"},children:(0,y.jsxs)("h1",{style:{margin:0,lineHeight:1.04},children:[(0,y.jsx)("span",{style:{display:"block",fontSize:"clamp(2.75rem, 5.5vw, 4.75rem)",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',fontWeight:700,color:d.fg,letterSpacing:"-0.03em"},children:"Blazecore"}),(0,y.jsxs)("span",{style:{display:"block",marginTop:"0.4rem",fontSize:"clamp(1.25rem, 2.6vw, 2rem)",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',fontWeight:500,letterSpacing:"-0.02em",color:d.accent},children:[l.slice(0,o),(0,y.jsx)("span",{style:{animation:"pulse 0.9s ease-in-out infinite",opacity:o<l.length?1:0},children:"|"})]})]})}),(0,y.jsx)("div",{className:"animate-fade-up",style:{animationDelay:"160ms"},children:(0,y.jsx)("p",{style:{margin:0,fontSize:"1.0625rem",lineHeight:1.75,color:d.fg2,maxWidth:"30rem",fontWeight:400},children:"Empowering research institutions with open-source IoT experiment management, live monitoring, and comprehensive data infrastructure."})}),(0,y.jsxs)("div",{className:"animate-fade-up",style:{animationDelay:"240ms",display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center"},children:[m("Get Started","signup",!0),m("Learn More","landing",!1,"section-about")]}),(0,y.jsx)("div",{className:"animate-fade-up",style:{animationDelay:"320ms",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[{icon:(0,y.jsx)(Kn,{size:12}),label:"2.1k",text:"Stars"},{icon:(0,y.jsx)(Hn,{size:12}),label:"384",text:"Forks"},{icon:(0,y.jsx)(fa,{size:12}),label:"91",text:"Watching"}].map((v,M)=>(0,y.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem",padding:"0.3rem 0.75rem",borderRadius:"0.375rem",background:d.glass,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",border:`1px solid ${d.glassBorder}`,fontSize:"0.78rem",fontWeight:500,color:d.fg2},children:[(0,y.jsx)("span",{style:{color:d.accent},children:v.icon}),(0,y.jsx)("span",{style:{fontWeight:700,color:d.fg},children:v.label}),(0,y.jsx)("span",{children:v.text})]},M))}),(0,y.jsx)("div",{className:"animate-fade-up",style:{animationDelay:"400ms",display:"flex",flexDirection:"column",gap:"0.45rem"},children:["No credit card required","MIT Licensed \u2014 fully open-source","Self-hostable on any infrastructure"].map((v,M)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem",color:d.fg3},children:[(0,y.jsx)(ja,{size:13,style:{color:d.accentGreen,flexShrink:0}}),v]},M))})]}),(0,y.jsxs)("div",{className:"hidden lg:block",style:{position:"relative",height:"480px"},children:[(0,y.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:320,height:320,pointerEvents:"none"},children:[(0,y.jsx)("div",{className:"orbit-ring",style:{inset:0}}),(0,y.jsx)("div",{className:"orbit-ring-r",style:{inset:28}}),(0,y.jsx)("div",{className:"orbit-ring",style:{inset:58,animationDuration:"32s"}})]}),(0,y.jsx)("div",{className:"animate-fade-right",style:{animationDelay:"180ms",position:"absolute",top:"1rem",right:"0",width:"18.5rem"},children:(0,y.jsxs)("div",{style:{...L(1.5,"0s"),borderRadius:"1rem"},children:[b,c,(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[(0,y.jsx)("div",{style:{width:"2.25rem",height:"2.25rem",borderRadius:"0.625rem",background:`${d.accent}18`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(Ge,{size:16,color:d.accent})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:d.fg},children:"Live Monitoring"}),(0,y.jsx)("div",{style:{fontSize:"0.6875rem",color:d.fg2},children:"84 devices online"})]}),(0,y.jsxs)("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"0.25rem"},children:[(0,y.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:d.accentGreen,animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}),(0,y.jsx)("span",{style:{fontSize:"0.6875rem",color:d.accentGreen,fontWeight:600},children:"LIVE"})]})]}),(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:["Sensor Array #1","Temperature Grid","Humidity Network"].map((v,M)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,y.jsx)("div",{style:{flex:1,height:"5px",borderRadius:"3px",background:S?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",overflow:"hidden"},children:(0,y.jsx)("div",{style:{height:"100%",width:`${[72,58,84][M]}%`,background:d.accent,borderRadius:"3px",transition:"width 0.4s ease"}})}),(0,y.jsxs)("span",{style:{fontSize:"0.6875rem",color:d.fg2,minWidth:"2rem",textAlign:"right"},children:[[72,58,84][M],"%"]})]},M))})]})}),(0,y.jsx)("div",{className:"animate-fade-right",style:{animationDelay:"280ms",position:"absolute",top:"38%",left:"0",width:"16.5rem"},children:(0,y.jsxs)("div",{style:{...L(-2,"0.3s",!0),borderRadius:"1rem"},children:[b,c,(0,y.jsx)("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:d.fg,marginBottom:"0.75rem"},children:"Experiment Status"}),[{label:"Active",color:d.accentGreen,count:12},{label:"Pending",color:d.accent,count:5},{label:"Completed",color:d.fg3,count:28}].map((v,M)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.375rem"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.375rem"},children:[(0,y.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:v.color,display:"inline-block"}}),(0,y.jsx)("span",{style:{fontSize:"0.75rem",color:d.fg2},children:v.label})]}),(0,y.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:700,color:d.fg},children:v.count})]},M))]})}),(0,y.jsx)("div",{className:"animate-fade-right",style:{animationDelay:"360ms",position:"absolute",bottom:"2rem",right:"1.5rem",width:"14rem"},children:(0,y.jsxs)("div",{style:{...L(1,"0.6s"),borderRadius:"1rem"},children:[b,c,(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"0.5rem"},children:[(0,y.jsx)(st,{size:14,color:d.accent}),(0,y.jsx)("span",{style:{fontSize:"0.75rem",color:d.fg2,fontWeight:500},children:"Data Processed"})]}),(0,y.jsx)("div",{style:{fontSize:"1.625rem",fontWeight:800,color:d.fg,letterSpacing:"-0.03em",lineHeight:1},children:"2.4 TB"}),(0,y.jsx)("div",{style:{fontSize:"0.6875rem",color:d.accentGreen,marginTop:"0.25rem",fontWeight:500},children:"\u2191 18% this week"})]})})]})]})})})]}),(0,y.jsx)("section",{id:"section-stats",style:{padding:"5rem 1.5rem",maxWidth:"82rem",margin:"0 auto"},children:(0,y.jsx)("div",{ref:p.ref,style:{opacity:p.visible?1:0,transform:p.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"1.5rem"},children:R.map((v,M)=>(0,y.jsxs)(uc,{color:d.accent,style:{background:d.cardBg,border:`1px solid ${d.border}`,boxShadow:d.shadow,padding:"2rem 1.5rem",textAlign:"center"},children:[(0,y.jsx)(LL,{value:v.value,color:d.accent}),(0,y.jsx)("div",{style:{fontSize:"0.9375rem",fontWeight:600,color:d.fg,margin:"0.5rem 0 0.25rem"},children:v.label}),(0,y.jsx)("div",{style:{fontSize:"0.8125rem",color:d.fg2},children:v.sub})]},M))})})}),(0,y.jsx)("section",{id:"section-research-tools",style:{padding:"5rem 1.5rem",background:S?"rgba(28,28,30,0.5)":"rgba(0,0,0,0.02)"},children:(0,y.jsxs)("div",{style:{maxWidth:"82rem",margin:"0 auto"},children:[(0,y.jsxs)("div",{ref:s.ref,style:{opacity:s.visible?1:0,transform:s.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:[E("Platform Features","Everything You Need","A comprehensive suite of tools for managing IoT experiments at scale."),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem",marginBottom:"4rem"},children:I.map((v,M)=>(0,y.jsxs)(uc,{color:d.accent,style:{background:d.cardBg,border:`1px solid ${d.border}`,boxShadow:d.shadow,padding:"1.75rem"},children:[(0,y.jsx)("div",{style:{width:"2.75rem",height:"2.75rem",borderRadius:"0.75rem",background:`${d.accent}14`,display:"flex",alignItems:"center",justifyContent:"center",color:d.accent,marginBottom:"1.125rem",border:`1px solid ${d.accent}20`},children:v.icon}),(0,y.jsx)("h3",{style:{fontSize:"1.0625rem",fontWeight:700,color:d.fg,margin:"0 0 0.5rem",letterSpacing:"-0.01em"},children:v.title}),(0,y.jsx)("p",{style:{fontSize:"0.9rem",color:d.fg2,lineHeight:1.65,margin:0},children:v.desc})]},M))})]}),(0,y.jsxs)("div",{ref:i.ref,style:{opacity:i.visible?1:0,transform:i.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:[E("Research-First","Built for Science","Tools designed for rigorous academic and industrial IoT research."),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.25rem"},children:T.map((v,M)=>(0,y.jsxs)(uc,{color:d.accentGreen,style:{background:d.cardBg,border:`1px solid ${d.border}`,boxShadow:d.shadow,padding:"1.75rem"},children:[(0,y.jsx)("div",{style:{width:"2.75rem",height:"2.75rem",borderRadius:"0.75rem",background:`${d.accentGreen}14`,display:"flex",alignItems:"center",justifyContent:"center",color:d.accentGreen,marginBottom:"1.125rem",border:`1px solid ${d.accentGreen}20`},children:v.icon}),(0,y.jsx)("h3",{style:{fontSize:"1rem",fontWeight:700,color:d.fg,margin:"0 0 0.375rem"},children:v.title}),(0,y.jsx)("p",{style:{fontSize:"0.875rem",color:d.fg2,lineHeight:1.6,margin:0},children:v.desc})]},M))})]})]})}),(0,y.jsx)("section",{id:"section-about",style:{padding:"6rem 1.5rem"},children:(0,y.jsx)("div",{style:{maxWidth:"82rem",margin:"0 auto"},children:(0,y.jsxs)("div",{ref:g.ref,style:{opacity:g.visible?1:0,transform:g.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:[E("About Us","Building the Future of IoT","Blazecore is an open-source platform designed to streamline IoT experiment management, built with Rust and React for maximum performance."),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",marginBottom:"4rem"},children:P.map((v,M)=>(0,y.jsxs)("div",{className:"card-hover",style:{background:d.cardBg,borderRadius:"1rem",border:`1px solid ${d.border}`,boxShadow:d.shadow,padding:"2rem",transition:"transform 0.25s ease, box-shadow 0.25s ease"},children:[(0,y.jsx)("div",{style:{width:"3rem",height:"3rem",borderRadius:"0.75rem",background:`${d.accent}12`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem",border:`1px solid ${d.border}`},children:v.icon}),(0,y.jsx)("h3",{style:{fontSize:"1.125rem",fontWeight:700,color:d.fg,margin:"0 0 0.625rem"},children:v.title}),(0,y.jsx)("p",{style:{fontSize:"0.9375rem",color:d.fg2,lineHeight:1.65,margin:0},children:v.desc})]},M))}),(0,y.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"3rem",alignItems:"center"},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{style:{fontSize:"0.8125rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:d.accent,marginBottom:"0.5rem"},children:"Our Story"}),(0,y.jsx)("h3",{style:{fontSize:"1.75rem",fontWeight:700,color:d.fg,margin:"0 0 1.25rem",letterSpacing:"-0.025em"},children:"How Blazecore Began"}),(0,y.jsx)("p",{style:{fontSize:"0.9375rem",color:d.fg2,lineHeight:1.75,marginBottom:"1rem"},children:"Blazecore was born from a simple need: managing IoT experiments efficiently. What started as an internal tool quickly evolved into a comprehensive platform that combines the raw performance of Rust with React's modern UI flexibility."}),(0,y.jsx)("p",{style:{fontSize:"0.9375rem",color:d.fg2,lineHeight:1.75,marginBottom:"1.75rem"},children:"Today, Blazecore serves developers, researchers, and organizations worldwide, giving them everything they need to manage experiments, monitor data in real time, and scale their IoT operations confidently."}),["Open-source and community-driven","REST API for full integration","Real-time metrics and monitoring"].map((v,M)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"0.625rem"},children:[(0,y.jsx)(Ee,{size:15,color:d.accentGreen,style:{flexShrink:0}}),(0,y.jsx)("span",{style:{fontSize:"0.9375rem",color:d.fg2},children:v})]},M))]}),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[{icon:(0,y.jsx)(zn,{size:24,color:d.accent}),name:"Rust",role:"High Performance Backend"},{icon:(0,y.jsx)(Ka,{size:24,color:d.accentB}),name:"React",role:"Modern UI Layer"},{icon:(0,y.jsx)(st,{size:24,color:d.accentGreen}),name:"PostgreSQL",role:"Reliable Storage"},{icon:(0,y.jsx)(er,{size:24,color:d.accent}),name:"Security First",role:"Enterprise Grade"}].map((v,M)=>(0,y.jsxs)("div",{className:"card-hover",style:{background:d.cardBg,border:`1px solid ${d.border}`,borderRadius:"1rem",padding:"1.5rem",boxShadow:d.shadow,transition:"transform 0.25s ease, box-shadow 0.25s ease"},children:[(0,y.jsx)("div",{style:{width:"2.75rem",height:"2.75rem",borderRadius:"0.625rem",background:`${d.accent}12`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.875rem"},children:v.icon}),(0,y.jsx)("div",{style:{fontSize:"1rem",fontWeight:700,color:d.fg},children:v.name}),(0,y.jsx)("div",{style:{fontSize:"0.8125rem",color:d.fg2,marginTop:"0.25rem"},children:v.role})]},M))})]})]})})}),(0,y.jsx)("section",{style:{padding:"0 1.5rem 4rem"},children:(0,y.jsx)("div",{ref:u.ref,style:{maxWidth:"82rem",margin:"0 auto",opacity:u.visible?1:0,transform:u.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:(0,y.jsxs)("div",{style:{padding:"3.5rem 2rem",background:`linear-gradient(135deg, ${d.accent} 0%, ${d.accentB} 100%)`,borderRadius:"1.5rem",textAlign:"center",boxShadow:`0 20px 40px ${d.accent}30`},children:[(0,y.jsx)("h2",{style:{fontSize:"clamp(1.5rem, 3vw, 2.25rem)",fontWeight:700,color:"#fff",margin:"0 0 0.75rem",letterSpacing:"-0.025em"},children:"Ready to Get Started?"}),(0,y.jsx)("p",{style:{color:"rgba(255,255,255,0.85)",fontSize:"1.0625rem",margin:"0 0 2rem"},children:"Join the growing community of IoT professionals using Blazecore."}),(0,y.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[(0,y.jsxs)("button",{onClick:()=>e("signup"),style:{padding:"0.875rem 2rem",background:"#fff",color:d.accent,border:"none",borderRadius:"0.625rem",fontSize:"0.9375rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",transition:"all 0.2s"},onMouseEnter:v=>{v.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:v=>{v.currentTarget.style.transform=""},onMouseDown:v=>{v.currentTarget.style.transform="scale(0.97)"},onMouseUp:v=>{v.currentTarget.style.transform=""},children:["Create Free Account ",(0,y.jsx)(jt,{size:16})]}),(0,y.jsx)("button",{onClick:()=>{document.getElementById("section-contact")?.scrollIntoView({behavior:"smooth",block:"start"})},style:{padding:"0.875rem 2rem",background:"rgba(255,255,255,0.15)",color:"#fff",border:"1.5px solid rgba(255,255,255,0.4)",borderRadius:"0.625rem",fontSize:"0.9375rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:v=>{v.currentTarget.style.background="rgba(255,255,255,0.22)"},onMouseLeave:v=>{v.currentTarget.style.background="rgba(255,255,255,0.15)"},onMouseDown:v=>{v.currentTarget.style.transform="scale(0.97)"},onMouseUp:v=>{v.currentTarget.style.transform=""},children:"Contact Us"})]})]})})}),(0,y.jsx)("section",{id:"section-contact",style:{padding:"5rem 1.5rem 6rem",background:S?"rgba(28,28,30,0.5)":"rgba(0,0,0,0.02)"},children:(0,y.jsx)("div",{style:{maxWidth:"82rem",margin:"0 auto"},children:(0,y.jsxs)("div",{ref:x.ref,style:{opacity:x.visible?1:0,transform:x.visible?"none":"translateY(24px)",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"},children:[E("Contact","Get in Touch","Have questions about Blazecore? We're here to help."),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1.25rem",marginBottom:"3rem"},children:F.map((v,M)=>(0,y.jsxs)("div",{style:{background:d.cardBg,border:`1px solid ${d.border}`,borderRadius:"1rem",boxShadow:d.shadow,padding:"1.5rem",textAlign:"center"},children:[(0,y.jsx)("div",{style:{width:"3rem",height:"3rem",borderRadius:"0.75rem",background:`${d.accent}12`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem",border:`1px solid ${d.accent}20`},children:v.icon}),(0,y.jsx)("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:d.fg,margin:"0 0 0.375rem"},children:v.title}),(0,y.jsx)("p",{style:{fontSize:"0.9375rem",fontWeight:600,color:d.fg,margin:"0 0 0.25rem"},children:v.content}),(0,y.jsx)("p",{style:{fontSize:"0.8125rem",color:d.fg2,margin:0},children:v.description})]},M))}),(0,y.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem",alignItems:"start"},children:[(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[(0,y.jsxs)("div",{style:{background:d.cardBg,border:`1px solid ${d.border}`,borderRadius:"1rem",boxShadow:d.shadow,padding:"1.75rem"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[(0,y.jsx)("div",{style:{width:"2.5rem",height:"2.5rem",borderRadius:"0.625rem",background:`linear-gradient(135deg, ${d.accent}, ${d.accentB})`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 10px ${d.accent}30`},children:(0,y.jsx)(Pe,{size:16,color:"#fff"})}),(0,y.jsx)("span",{style:{fontSize:"1.0625rem",fontWeight:700,color:d.fg},children:"Blazecore"})]}),(0,y.jsx)("p",{style:{fontSize:"0.9rem",color:d.fg2,lineHeight:1.65,margin:"0 0 1.25rem"},children:"Dedicated to providing the best open-source IoT experiment management platform for developers and researchers worldwide."}),(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.625rem"},children:[{icon:(0,y.jsx)(Ir,{size:14,color:d.fg2}),text:"24/7 Technical Support"},{icon:(0,y.jsx)(Pr,{size:14,color:d.fg2}),text:"Live Chat Available"},{icon:(0,y.jsx)($t,{size:14,color:d.fg2}),text:"Email Response in 24h"}].map((v,M)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem"},children:[v.icon,(0,y.jsx)("span",{style:{fontSize:"0.875rem",color:d.fg2},children:v.text})]},M))})]}),(0,y.jsxs)("div",{style:{background:d.cardBg,border:`1px solid ${d.border}`,borderRadius:"1rem",boxShadow:d.shadow,padding:"1.75rem"},children:[(0,y.jsx)("p",{style:{fontSize:"0.8125rem",fontWeight:700,color:d.fg2,margin:"0 0 1rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Follow Our Progress"}),(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.625rem"},children:["GitHub","Twitter / X","LinkedIn"].map((v,M)=>(0,y.jsxs)("button",{style:{display:"flex",alignItems:"center",gap:"0.625rem",padding:"0.625rem 0.875rem",background:S?"#2C2C2E":"#F5F5F7",border:`1px solid ${d.border}`,borderRadius:"0.5rem",color:d.fg2,fontSize:"0.875rem",fontWeight:500,cursor:"pointer",transition:"all 0.15s",width:"100%"},onMouseEnter:N=>{N.currentTarget.style.borderColor=d.accent,N.currentTarget.style.color=d.accent},onMouseLeave:N=>{N.currentTarget.style.borderColor=d.border,N.currentTarget.style.color=d.fg2},onMouseDown:N=>{N.currentTarget.style.transform="scale(0.97)"},onMouseUp:N=>{N.currentTarget.style.transform=""},children:[(0,y.jsx)(Un,{size:14})," ",v]},M))})]})]}),(0,y.jsxs)("div",{style:{background:d.cardBg,border:`1px solid ${d.border}`,borderRadius:"1rem",boxShadow:d.shadow,padding:"2rem"},children:[(0,y.jsx)("h3",{style:{fontSize:"1.25rem",fontWeight:700,color:d.fg,margin:"0 0 0.5rem",letterSpacing:"-0.02em"},children:"Send us a Message"}),(0,y.jsx)("p",{style:{fontSize:"0.9rem",color:d.fg2,margin:"0 0 1.75rem"},children:"Fill out the form and we'll get back to you shortly."}),(0,y.jsx)(SL,{p:d})]})]})]})})}),(0,y.jsx)("footer",{style:{padding:"2rem 1.5rem",borderTop:`1px solid ${d.border}`,textAlign:"center"},children:(0,y.jsx)("p",{style:{margin:0,fontSize:"0.8125rem",color:d.fg3},children:"\xA9 2026 Blazecore \u2014 MIT License. Built with Rust & React."})})]})},dc=CL;var Do=H(ve());var X=H(G()),bL=({onNavigate:e,onLoginSuccess:t})=>{let{theme:a,mode:r}=Se(),[o,n]=(0,Do.useState)(""),[l,s]=(0,Do.useState)(""),[i,u]=(0,Do.useState)(!1),[p,g]=(0,Do.useState)(""),[x,S]=(0,Do.useState)(!1),d=r==="light"?"#0071E3":"#2997FF",L=async f=>{f.preventDefault(),u(!0),g(""),S(!1);try{let m=btoa(`${o}:${l}`),I=await fetch("http://0.0.0.0:8001/api/v1/auth/login",{method:"GET",headers:{Authorization:`Basic ${m}`,"Content-Type":"application/json"}});if(I.ok){let T=await I.json();S(!0),localStorage.setItem("blazecore_token",T.token||m),localStorage.setItem("blazecore_user",o),t(T.token||m),setTimeout(()=>e("dashboard"),1e3)}else{let T=await I.json().catch(()=>({}));g(T.message||"Invalid email or password")}}catch{g("Network error. Please try again.")}finally{u(!1)}},b={width:"100%",padding:"0.75rem 1rem",borderRadius:"0.5rem",border:`1px solid ${a.colors.border.primary}`,background:r==="light"?"#FFFFFF":"#2C2C2E",color:a.colors.text.primary,fontSize:"0.9375rem",outline:"none",transition:"border-color 0.2s, box-shadow 0.2s",boxSizing:"border-box"},c={display:"block",fontSize:"0.875rem",fontWeight:500,color:a.colors.text.secondary,marginBottom:"0.375rem"};return(0,X.jsxs)("div",{style:{minHeight:"100vh",background:r==="light"?"#F5F5F7":"#000000",display:"flex",alignItems:"center",justifyContent:"center",padding:"5rem 1rem 2rem"},children:[(0,X.jsx)("div",{style:{width:"100%",maxWidth:"420px"},children:(0,X.jsxs)("div",{style:{background:r==="light"?"#FFFFFF":"#1C1C1E",borderRadius:"1.25rem",border:`1px solid ${a.colors.border.primary}`,boxShadow:"0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",padding:"2.5rem"},children:[(0,X.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[(0,X.jsxs)("button",{onClick:()=>e("landing"),style:{background:"none",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem"},children:[(0,X.jsx)("div",{style:{width:"2.25rem",height:"2.25rem",borderRadius:"0.5625rem",background:d,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 8px ${d}40`},children:(0,X.jsx)(Pe,{size:16,color:"#fff"})}),(0,X.jsx)("span",{style:{fontSize:"1.0625rem",fontWeight:600,color:a.colors.text.primary,letterSpacing:"-0.02em"},children:"Blazecore"})]}),(0,X.jsx)("h1",{style:{fontSize:"1.625rem",fontWeight:700,color:a.colors.text.primary,margin:"0 0 0.375rem",letterSpacing:"-0.025em"},children:"Welcome back"}),(0,X.jsx)("p",{style:{color:a.colors.text.secondary,fontSize:"0.9375rem",margin:0},children:"Sign in to your IoT dashboard"})]}),p&&(0,X.jsxs)("div",{style:{marginBottom:"1.25rem",padding:"0.75rem 1rem",background:"rgba(255,59,48,0.06)",border:"1px solid rgba(255,59,48,0.20)",borderRadius:"0.5rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,X.jsx)(vt,{size:15,color:"#FF3B30",style:{flexShrink:0}}),(0,X.jsx)("span",{style:{fontSize:"0.875rem",color:"#FF3B30"},children:p})]}),x&&(0,X.jsxs)("div",{style:{marginBottom:"1.25rem",padding:"0.75rem 1rem",background:"rgba(52,199,89,0.06)",border:"1px solid rgba(52,199,89,0.20)",borderRadius:"0.5rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,X.jsx)(Ee,{size:15,color:"#34C759",style:{flexShrink:0}}),(0,X.jsx)("span",{style:{fontSize:"0.875rem",color:"#34C759"},children:"Login successful! Redirecting..."})]}),(0,X.jsxs)("form",{onSubmit:L,children:[(0,X.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,X.jsx)("label",{style:c,children:"Email Address"}),(0,X.jsxs)("div",{style:{position:"relative"},children:[(0,X.jsx)($t,{size:15,color:a.colors.text.tertiary,style:{position:"absolute",left:"0.875rem",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),(0,X.jsx)("input",{type:"email",placeholder:"you@example.com",value:o,onChange:f=>n(f.target.value),required:!0,disabled:i,style:{...b,paddingLeft:"2.5rem"},autoComplete:"email",onFocus:f=>{f.target.style.borderColor=d,f.target.style.boxShadow=`0 0 0 3px ${d}18`},onBlur:f=>{f.target.style.borderColor=a.colors.border.primary,f.target.style.boxShadow="none"}})]})]}),(0,X.jsxs)("div",{style:{marginBottom:"1.5rem"},children:[(0,X.jsx)("label",{style:c,children:"Password"}),(0,X.jsxs)("div",{style:{position:"relative"},children:[(0,X.jsx)(Gt,{size:15,color:a.colors.text.tertiary,style:{position:"absolute",left:"0.875rem",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),(0,X.jsx)("input",{type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:l,onChange:f=>s(f.target.value),required:!0,disabled:i,style:{...b,paddingLeft:"2.5rem"},autoComplete:"current-password",onFocus:f=>{f.target.style.borderColor=d,f.target.style.boxShadow=`0 0 0 3px ${d}18`},onBlur:f=>{f.target.style.borderColor=a.colors.border.primary,f.target.style.boxShadow="none"}})]})]}),(0,X.jsx)("button",{type:"submit",disabled:i,style:{width:"100%",padding:"0.8125rem 1.5rem",background:i?a.colors.border.secondary:d,color:"#fff",border:"none",borderRadius:"0.5625rem",fontSize:"0.9375rem",fontWeight:600,cursor:i?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",boxShadow:i?"none":`0 2px 8px ${d}35`,transition:"all 0.2s",letterSpacing:"-0.01em"},children:i?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("div",{style:{width:"1rem",height:"1rem",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),"Signing In..."]}):(0,X.jsxs)(X.Fragment,{children:["Sign In ",(0,X.jsx)(jt,{size:15})]})})]}),(0,X.jsxs)("p",{style:{textAlign:"center",marginTop:"1.5rem",fontSize:"0.875rem",color:a.colors.text.secondary},children:["Don't have an account?"," ",(0,X.jsx)("button",{onClick:()=>e("signup"),style:{background:"none",border:"none",cursor:"pointer",color:d,fontWeight:600,fontSize:"0.875rem"},children:"Sign up"})]})]})}),(0,X.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})},p0=bL;var ya=H(ve());var V=H(G()),IL=({onNavigate:e,onSignupSuccess:t})=>{let{theme:a,mode:r}=Se(),[o,n]=(0,ya.useState)(""),[l,s]=(0,ya.useState)(""),[i,u]=(0,ya.useState)(""),[p,g]=(0,ya.useState)(""),[x,S]=(0,ya.useState)(!1),[d,L]=(0,ya.useState)(!1),[b,c]=(0,ya.useState)(""),[f,m]=(0,ya.useState)(!1),I=async E=>{if(E.preventDefault(),L(!0),c(""),m(!1),i!==p){c("Passwords do not match"),L(!1);return}if(i.length<6){c("Password must be at least 6 characters"),L(!1);return}if(!x){c("Please agree to the terms and conditions"),L(!1);return}try{let v=await fetch("http://localhost:8001/api/v1/users/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:i})});if(v.ok)m(!0),t(),setTimeout(()=>e("login"),2e3);else{let M=await v.json().catch(()=>({}));c(M.message||"Failed to create account. Email may already exist.")}}catch{c("Network error. Please try again.")}finally{L(!1)}},T={width:"100%",padding:"0.75rem 1rem",borderRadius:"0.625rem",border:`1.5px solid ${a.colors.border.primary}`,background:r==="light"?"#F5F5F7":"#2C2C2E",color:a.colors.text.primary,fontSize:"0.9375rem",outline:"none",transition:"border-color 0.2s",boxSizing:"border-box"},R={display:"block",fontSize:"0.875rem",fontWeight:500,color:a.colors.text.secondary,marginBottom:"0.375rem"},P=(E,v)=>(0,V.jsxs)("div",{style:{marginBottom:"1.125rem"},children:[(0,V.jsx)("label",{style:R,children:E}),v]}),F=(E,v)=>(0,V.jsxs)("div",{style:{position:"relative"},children:[(0,V.jsx)("div",{style:{position:"absolute",left:"0.875rem",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},children:E}),v]});return(0,V.jsxs)("div",{style:{minHeight:"100vh",background:r==="light"?"#F5F5F7":"#000000",display:"flex",alignItems:"center",justifyContent:"center",padding:"5rem 1rem 2rem"},children:[(0,V.jsx)("div",{style:{width:"100%",maxWidth:"480px"},children:(0,V.jsxs)("div",{style:{background:r==="light"?"#FFFFFF":"#1C1C1E",borderRadius:"1.25rem",border:`1px solid ${a.colors.border.primary}`,boxShadow:a.colors.shadow.xl,padding:"2.5rem"},children:[(0,V.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[(0,V.jsxs)("button",{onClick:()=>e("landing"),style:{background:"none",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.625rem",marginBottom:"1.5rem"},children:[(0,V.jsx)("div",{style:{width:"2.5rem",height:"2.5rem",borderRadius:"0.625rem",background:a.gradients.primary,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0,113,227,0.3)"},children:(0,V.jsx)(Pe,{size:18,color:"#fff"})}),(0,V.jsx)("span",{style:{fontSize:"1.125rem",fontWeight:700,color:a.colors.text.primary,letterSpacing:"-0.02em"},children:"Blazecore"})]}),(0,V.jsx)("h1",{style:{fontSize:"1.75rem",fontWeight:700,color:a.colors.text.primary,margin:"0 0 0.5rem",letterSpacing:"-0.025em"},children:"Create your account"}),(0,V.jsx)("p",{style:{color:a.colors.text.secondary,fontSize:"0.9375rem",margin:0},children:"Start managing IoT experiments for free"})]}),b&&(0,V.jsxs)("div",{style:{marginBottom:"1.25rem",padding:"0.75rem 1rem",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:"0.625rem",display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,V.jsx)(vt,{size:16,color:"#EF4444",style:{flexShrink:0}}),(0,V.jsx)("span",{style:{fontSize:"0.875rem",color:"#EF4444"},children:b})]}),f&&(0,V.jsxs)("div",{style:{marginBottom:"1.25rem",padding:"0.75rem 1rem",background:"rgba(52,199,89,0.08)",border:"1px solid rgba(52,199,89,0.25)",borderRadius:"0.625rem",display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,V.jsx)(Ee,{size:16,color:"#34C759",style:{flexShrink:0}}),(0,V.jsx)("span",{style:{fontSize:"0.875rem",color:"#1D8348"},children:"Account created! Redirecting to login..."})]}),(0,V.jsxs)("form",{onSubmit:I,children:[P("Full Name",F((0,V.jsx)(Yn,{size:16,color:a.colors.text.tertiary}),(0,V.jsx)("input",{type:"text",placeholder:"Your full name",value:o,onChange:E=>n(E.target.value),required:!0,disabled:d,style:{...T,paddingLeft:"2.5rem"},autoComplete:"name"}))),P("Email Address",F((0,V.jsx)($t,{size:16,color:a.colors.text.tertiary}),(0,V.jsx)("input",{type:"email",placeholder:"you@example.com",value:l,onChange:E=>s(E.target.value),required:!0,disabled:d,style:{...T,paddingLeft:"2.5rem"},autoComplete:"email"}))),(0,V.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.875rem",marginBottom:"1.125rem"},children:[(0,V.jsxs)("div",{children:[(0,V.jsx)("label",{style:R,children:"Password"}),F((0,V.jsx)(Gt,{size:16,color:a.colors.text.tertiary}),(0,V.jsx)("input",{type:"password",placeholder:"Min. 6 chars",value:i,onChange:E=>u(E.target.value),required:!0,disabled:d,style:{...T,paddingLeft:"2.5rem"},autoComplete:"new-password"}))]}),(0,V.jsxs)("div",{children:[(0,V.jsx)("label",{style:R,children:"Confirm Password"}),F((0,V.jsx)(Gt,{size:16,color:a.colors.text.tertiary}),(0,V.jsx)("input",{type:"password",placeholder:"Repeat password",value:p,onChange:E=>g(E.target.value),required:!0,disabled:d,style:{...T,paddingLeft:"2.5rem"},autoComplete:"new-password"}))]})]}),(0,V.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.625rem",marginBottom:"1.75rem"},children:[(0,V.jsx)("input",{type:"checkbox",id:"terms",checked:x,onChange:E=>S(E.target.checked),disabled:d,style:{marginTop:"0.2rem",accentColor:a.colors.rust,width:"1rem",height:"1rem",flexShrink:0}}),(0,V.jsxs)("label",{htmlFor:"terms",style:{fontSize:"0.875rem",color:a.colors.text.secondary,cursor:"pointer",lineHeight:1.5},children:["I agree to the"," ",(0,V.jsx)("button",{type:"button",style:{background:"none",border:"none",cursor:"pointer",color:a.colors.rust,fontWeight:600,fontSize:"0.875rem",padding:0},children:"Terms of Service"})," ","and"," ",(0,V.jsx)("button",{type:"button",style:{background:"none",border:"none",cursor:"pointer",color:a.colors.rust,fontWeight:600,fontSize:"0.875rem",padding:0},children:"Privacy Policy"})]})]}),(0,V.jsx)("button",{type:"submit",disabled:d||!x,style:{width:"100%",padding:"0.8125rem 1.5rem",background:d||!x?a.colors.border.secondary:a.gradients.primary,color:"#fff",border:"none",borderRadius:"0.625rem",fontSize:"0.9375rem",fontWeight:600,cursor:d||!x?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",boxShadow:d||!x?"none":"0 4px 14px rgba(0,113,227,0.3)",transition:"all 0.2s"},children:d?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{style:{width:"1rem",height:"1rem",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),"Creating Account..."]}):(0,V.jsxs)(V.Fragment,{children:["Create Account ",(0,V.jsx)(jt,{size:16})]})})]}),(0,V.jsxs)("p",{style:{textAlign:"center",marginTop:"1.5rem",fontSize:"0.875rem",color:a.colors.text.secondary},children:["Already have an account?"," ",(0,V.jsx)("button",{onClick:()=>e("login"),style:{background:"none",border:"none",cursor:"pointer",color:a.colors.rust,fontWeight:600,fontSize:"0.875rem"},children:"Sign in"})]})]})}),(0,V.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})},m0=IL;var ut=H(G()),wL=()=>{let{theme:e,mode:t}=Se(),[a,r]=(0,St.useState)(null),[o,n]=(0,St.useState)(!0),[l,s]=(0,St.useState)([]),[i,u]=(0,St.useState)("landing"),[p,g]=(0,St.useState)(!1),x=(0,St.useRef)(null),S=async(R=!1)=>{R||n(!0);try{let P=await ac();if(console.log("API Response:",P),!P.data){console.warn("No data in response"),s([]);return}let F=typeof P.data=="string"?JSON.parse(P.data):P.data;console.log("Parsed response data:",F);let E=[];if(F.experiments){let v=F.experiments;E=Object.entries(v).map(([M,N])=>({id:N.id||0,name:M,status:(N.status||"PENDING").toUpperCase()}))}else if(F.pending||F.done){let v=(F.pending||[]).map((N,te)=>({id:N.id||te,name:N.name,status:"PENDING"})),M=(F.done||[]).map((N,te)=>({id:N.id||te+1e3,name:N.name,status:"DONE"}));E=[...v,...M]}console.log("Processed experiments array:",E),s(E),r(F)}catch(P){console.error("Failed to fetch experiments:",P),s([])}finally{R||n(!1)}},d=async(R,P)=>{try{let F=await s0(R,P);if(F.error||F.status!==201){console.error("Failed to create experiment. Backend returned:",F),alert(`Failed to create experiment: ${F.error||"Unknown error"}`);return}await S()}catch(F){console.error("Failed to create experiment:",F),alert("Failed to create experiment due to a network or unexpected error.")}},L=async R=>{try{let P=l.find(F=>F.id===R);if(P){let F=P.status==="DONE"?"PENDING":"DONE",E=await u0(P.name,F,R);if(E.error||E.status!==200){console.error("Failed to toggle experiment status. Backend returned:",E),alert(`Failed to update experiment status: ${E.error||"Unknown error"}`);return}await S()}}catch(P){console.error("Failed to toggle experiment:",P),alert("Failed to update experiment status due to a network or unexpected error.")}},b=async R=>{try{let P=l.find(F=>F.id===R);if(P){let F=await i0(P.name);if(F.error||F.status!==200){console.error("Failed to delete experiment. Backend returned:",F),alert(`Failed to delete experiment: ${F.error||"Unknown error"}`);return}await S()}}catch(P){console.error("Failed to delete experiment:",P),alert("Failed to delete experiment due to a network or unexpected error.")}},c=(R,P)=>{P&&(R==="landing"||R==="about"||R==="contact")?(x.current=P,u("landing"),window.location.hash="landing"):(u(R),window.location.hash=R)},f=R=>{g(!0),localStorage.setItem("blazecore_token",R),c("dashboard")},m=()=>{g(!1),localStorage.removeItem("blazecore_token"),localStorage.removeItem("blazecore_user"),localStorage.removeItem("blzc-session"),c("landing")};(0,St.useEffect)(()=>{let R=localStorage.getItem("blazecore_token");R&&g(!0);let P=window.location.hash.slice(1)||"landing";["landing","about","contact"].includes(P)?(u("landing"),P!=="landing"&&(x.current=`section-${P}`)):u(P),R&&P==="dashboard"&&S()},[]),(0,St.useEffect)(()=>{p&&i==="dashboard"&&S()},[p,i]),(0,St.useEffect)(()=>{if(!p||i!=="dashboard")return;let R=setInterval(()=>{S(!0)},5e3);return()=>clearInterval(R)},[p,i]);let I=i==="dashboard"&&p,T=()=>{if(o&&i==="dashboard")return(0,ut.jsx)(Pd,{className:"min-h-screen flex items-center justify-center",children:(0,ut.jsx)(kd,{size:"lg",text:"Loading Blazecore Dashboard..."})});switch(i){case"landing":return(0,ut.jsx)(dc,{onNavigate:c,scrollToSection:x.current||void 0,onScrollComplete:()=>{x.current=null}});case"login":return(0,ut.jsx)(p0,{onNavigate:c,onLoginSuccess:f});case"signup":return(0,ut.jsx)(m0,{onNavigate:c,onSignupSuccess:()=>f("")});case"dashboard":return p?(0,ut.jsx)(l0,{experiments:l,onCreateExperiment:d,onToggleStatus:L,onDeleteExperiment:b,onRefresh:S}):(c("login"),null);default:return(0,ut.jsx)(dc,{onNavigate:c,scrollToSection:x.current||void 0,onScrollComplete:()=>{x.current=null}})}};return(0,ut.jsxs)("div",{style:{minHeight:"100vh",backgroundColor:e.colors.background},children:[(0,ut.jsx)("div",{style:{position:"fixed",inset:0,opacity:.3,pointerEvents:"none",zIndex:0,background:t==="light"?"radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,113,227,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(88,86,214,0.04) 0%, transparent 50%)":"radial-gradient(ellipse 80% 50% at 50% 0%, rgba(41,151,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(94,92,230,0.06) 0%, transparent 50%)"}}),!I&&(0,ut.jsx)(d0,{onNavigate:c,currentPage:i,isAuthenticated:p,onLogout:m}),(0,ut.jsx)("main",{style:{position:"relative",zIndex:1,paddingTop:I?0:"4rem",minHeight:"100vh"},children:T()})]})},g0=wL;var cl=H(G()),kL=()=>(0,cl.jsx)(Rd,{children:(0,cl.jsx)(Qg,{children:(0,cl.jsx)(g0,{})})}),h0=document.getElementById("root");h0?x0.default.createRoot(h0).render((0,cl.jsx)(kL,{})):console.error("Root element not found");
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/activity.mjs:
lucide-react/dist/esm/icons/arrow-left.mjs:
lucide-react/dist/esm/icons/arrow-right.mjs:
lucide-react/dist/esm/icons/battery.mjs:
lucide-react/dist/esm/icons/book-open.mjs:
lucide-react/dist/esm/icons/box.mjs:
lucide-react/dist/esm/icons/building-2.mjs:
lucide-react/dist/esm/icons/chart-column.mjs:
lucide-react/dist/esm/icons/chart-no-axes-column.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/chevron-left.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
lucide-react/dist/esm/icons/circle-alert.mjs:
lucide-react/dist/esm/icons/circle-check.mjs:
lucide-react/dist/esm/icons/circle-check-big.mjs:
lucide-react/dist/esm/icons/circle-question-mark.mjs:
lucide-react/dist/esm/icons/circle-x.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/code.mjs:
lucide-react/dist/esm/icons/copy.mjs:
lucide-react/dist/esm/icons/cpu.mjs:
lucide-react/dist/esm/icons/database.mjs:
lucide-react/dist/esm/icons/download.mjs:
lucide-react/dist/esm/icons/droplets.mjs:
lucide-react/dist/esm/icons/external-link.mjs:
lucide-react/dist/esm/icons/eye-off.mjs:
lucide-react/dist/esm/icons/eye.mjs:
lucide-react/dist/esm/icons/flask-conical.mjs:
lucide-react/dist/esm/icons/git-branch.mjs:
lucide-react/dist/esm/icons/git-fork.mjs:
lucide-react/dist/esm/icons/globe.mjs:
lucide-react/dist/esm/icons/hard-drive.mjs:
lucide-react/dist/esm/icons/house.mjs:
lucide-react/dist/esm/icons/info.mjs:
lucide-react/dist/esm/icons/layers.mjs:
lucide-react/dist/esm/icons/layout-dashboard.mjs:
lucide-react/dist/esm/icons/loader-circle.mjs:
lucide-react/dist/esm/icons/lock.mjs:
lucide-react/dist/esm/icons/log-in.mjs:
lucide-react/dist/esm/icons/log-out.mjs:
lucide-react/dist/esm/icons/mail.mjs:
lucide-react/dist/esm/icons/map-pin.mjs:
lucide-react/dist/esm/icons/menu.mjs:
lucide-react/dist/esm/icons/message-square.mjs:
lucide-react/dist/esm/icons/monitor.mjs:
lucide-react/dist/esm/icons/moon.mjs:
lucide-react/dist/esm/icons/network.mjs:
lucide-react/dist/esm/icons/pause.mjs:
lucide-react/dist/esm/icons/phone.mjs:
lucide-react/dist/esm/icons/play.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/refresh-cw.mjs:
lucide-react/dist/esm/icons/search.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/settings.mjs:
lucide-react/dist/esm/icons/shield.mjs:
lucide-react/dist/esm/icons/star.mjs:
lucide-react/dist/esm/icons/sun.mjs:
lucide-react/dist/esm/icons/target.mjs:
lucide-react/dist/esm/icons/terminal.mjs:
lucide-react/dist/esm/icons/thermometer.mjs:
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/trending-up.mjs:
lucide-react/dist/esm/icons/upload.mjs:
lucide-react/dist/esm/icons/user-plus.mjs:
lucide-react/dist/esm/icons/user.mjs:
lucide-react/dist/esm/icons/users.mjs:
lucide-react/dist/esm/icons/wifi.mjs:
lucide-react/dist/esm/icons/wind.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/icons/zap.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.14.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=bundle.js.map
