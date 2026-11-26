const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./StrategyDetail-Bc609pwS.js","./recharts-xiRWp2ro.js","./react-Bzgz95E1.js"])))=>i.map(i=>d[i]);
import{R as vc,r as Et}from"./recharts-xiRWp2ro.js";import{r as Qg,a as Xg,g as Zg}from"./react-Bzgz95E1.js";(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))p(R);new MutationObserver(R=>{for(const E of R)if(E.type==="childList")for(const W of E.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&p(W)}).observe(document,{childList:!0,subtree:!0});function tt(R){const E={};return R.integrity&&(E.integrity=R.integrity),R.referrerPolicy&&(E.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?E.credentials="include":R.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function p(R){if(R.ep)return;R.ep=!0;const E=tt(R);fetch(R.href,E)}})();var ao={exports:{}},gs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function Jg(){if(uc)return gs;uc=1;var h=Symbol.for("react.transitional.element"),P=Symbol.for("react.fragment");function tt(p,R,E){var W=null;if(E!==void 0&&(W=""+E),R.key!==void 0&&(W=""+R.key),"key"in R){E={};for(var gt in R)gt!=="key"&&(E[gt]=R[gt])}else E=R;return R=E.ref,{$$typeof:h,type:p,key:W,ref:R!==void 0?R:null,props:E}}return gs.Fragment=P,gs.jsx=tt,gs.jsxs=tt,gs}var cc;function Kg(){return cc||(cc=1,ao.exports=Jg()),ao.exports}var C=Kg(),so={exports:{}},ms={},io={exports:{}},oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function Pg(){return bc||(bc=1,(function(h){function P(v,k){var z=v.length;v.push(k);t:for(;0<z;){var lt=z-1>>>1,et=v[lt];if(0<R(et,k))v[lt]=k,v[z]=et,z=lt;else break t}}function tt(v){return v.length===0?null:v[0]}function p(v){if(v.length===0)return null;var k=v[0],z=v.pop();if(z!==k){v[0]=z;t:for(var lt=0,et=v.length,zt=et>>>1;lt<zt;){var rt=2*(lt+1)-1,Y=v[rt],kt=rt+1,gl=v[kt];if(0>R(Y,z))kt<et&&0>R(gl,Y)?(v[lt]=gl,v[kt]=z,lt=kt):(v[lt]=Y,v[rt]=z,lt=rt);else if(kt<et&&0>R(gl,z))v[lt]=gl,v[kt]=z,lt=kt;else break t}}return k}function R(v,k){var z=v.sortIndex-k.sortIndex;return z!==0?z:v.id-k.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;h.unstable_now=function(){return E.now()}}else{var W=Date,gt=W.now();h.unstable_now=function(){return W.now()-gt}}var dt=[],vt=[],ht=1,M=null,F=3,Pt=!1,ot=!1,B=!1,w=!1,_l=typeof setTimeout=="function"?setTimeout:null,jl=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function Gl(v){for(var k=tt(vt);k!==null;){if(k.callback===null)p(vt);else if(k.startTime<=v)p(vt),k.sortIndex=k.expirationTime,P(dt,k);else break;k=tt(vt)}}function ge(v){if(B=!1,Gl(v),!ot)if(tt(dt)!==null)ot=!0,bl||(bl=!0,It());else{var k=tt(vt);k!==null&&yl(ge,k.startTime-v)}}var bl=!1,vl=-1,rl=5,De=-1;function fs(){return w?!0:!(h.unstable_now()-De<rl)}function Re(){if(w=!1,bl){var v=h.unstable_now();De=v;var k=!0;try{t:{ot=!1,B&&(B=!1,jl(vl),vl=-1),Pt=!0;var z=F;try{l:{for(Gl(v),M=tt(dt);M!==null&&!(M.expirationTime>v&&fs());){var lt=M.callback;if(typeof lt=="function"){M.callback=null,F=M.priorityLevel;var et=lt(M.expirationTime<=v);if(v=h.unstable_now(),typeof et=="function"){M.callback=et,Gl(v),k=!0;break l}M===tt(dt)&&p(dt),Gl(v)}else p(dt);M=tt(dt)}if(M!==null)k=!0;else{var zt=tt(vt);zt!==null&&yl(ge,zt.startTime-v),k=!1}}break t}finally{M=null,F=z,Pt=!1}k=void 0}}finally{k?It():bl=!1}}}var It;if(typeof Ct=="function")It=function(){Ct(Re)};else if(typeof MessageChannel<"u"){var xs=new MessageChannel,ha=xs.port2;xs.port1.onmessage=Re,It=function(){ha.postMessage(null)}}else It=function(){_l(Re,0)};function yl(v,k){vl=_l(function(){v(h.unstable_now())},k)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(v){v.callback=null},h.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rl=0<v?Math.floor(1e3/v):5},h.unstable_getCurrentPriorityLevel=function(){return F},h.unstable_next=function(v){switch(F){case 1:case 2:case 3:var k=3;break;default:k=F}var z=F;F=k;try{return v()}finally{F=z}},h.unstable_requestPaint=function(){w=!0},h.unstable_runWithPriority=function(v,k){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var z=F;F=v;try{return k()}finally{F=z}},h.unstable_scheduleCallback=function(v,k,z){var lt=h.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?lt+z:lt):z=lt,v){case 1:var et=-1;break;case 2:et=250;break;case 5:et=1073741823;break;case 4:et=1e4;break;default:et=5e3}return et=z+et,v={id:ht++,callback:k,priorityLevel:v,startTime:z,expirationTime:et,sortIndex:-1},z>lt?(v.sortIndex=z,P(vt,v),tt(dt)===null&&v===tt(vt)&&(B?(jl(vl),vl=-1):B=!0,yl(ge,z-lt))):(v.sortIndex=et,P(dt,v),ot||Pt||(ot=!0,bl||(bl=!0,It()))),v},h.unstable_shouldYield=fs,h.unstable_wrapCallback=function(v){var k=F;return function(){var z=F;F=k;try{return v.apply(this,arguments)}finally{F=z}}}})(oo)),oo}var gc;function Ig(){return gc||(gc=1,io.exports=Pg()),io.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Wg(){if(mc)return ms;mc=1;var h=Ig(),P=Qg(),tt=Xg();function p(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function W(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function gt(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function dt(t){if(E(t)!==t)throw Error(p(188))}function vt(t){var l=t.alternate;if(!l){if(l=E(t),l===null)throw Error(p(188));return l!==t?null:t}for(var e=t,a=l;;){var s=e.return;if(s===null)break;var d=s.alternate;if(d===null){if(a=s.return,a!==null){e=a;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===e)return dt(s),t;if(d===a)return dt(s),l;d=d.sibling}throw Error(p(188))}if(e.return!==a.return)e=s,a=d;else{for(var i=!1,o=s.child;o;){if(o===e){i=!0,e=s,a=d;break}if(o===a){i=!0,a=s,e=d;break}o=o.sibling}if(!i){for(o=d.child;o;){if(o===e){i=!0,e=d,a=s;break}if(o===a){i=!0,a=d,e=s;break}o=o.sibling}if(!i)throw Error(p(189))}}if(e.alternate!==a)throw Error(p(190))}if(e.tag!==3)throw Error(p(188));return e.stateNode.current===e?t:l}function ht(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=ht(t),l!==null)return l;t=t.sibling}return null}var M=Object.assign,F=Symbol.for("react.element"),Pt=Symbol.for("react.transitional.element"),ot=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),jl=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),rl=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),fs=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function It(t){return t===null||typeof t!="object"?null:(t=Re&&t[Re]||t["@@iterator"],typeof t=="function"?t:null)}var xs=Symbol.for("react.client.reference");function ha(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xs?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case _l:return"Profiler";case w:return"StrictMode";case ge:return"Suspense";case bl:return"SuspenseList";case De:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ot:return"Portal";case Ct:return t.displayName||"Context";case jl:return(t._context.displayName||"Context")+".Consumer";case Gl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vl:return l=t.displayName||null,l!==null?l:ha(t.type)||"Memo";case rl:l=t._payload,t=t._init;try{return ha(t(l))}catch{}}return null}var yl=Array.isArray,v=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},lt=[],et=-1;function zt(t){return{current:t}}function rt(t){0>et||(t.current=lt[et],lt[et]=null,et--)}function Y(t,l){et++,lt[et]=t.current,t.current=l}var kt=zt(null),gl=zt(null),ql=zt(null),vs=zt(null);function ys(t,l){switch(Y(ql,l),Y(gl,t),Y(kt,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Du(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Du(l),t=Ru(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(kt),Y(kt,t)}function Ue(){rt(kt),rt(gl),rt(ql)}function _d(t){t.memoizedState!==null&&Y(vs,t);var l=kt.current,e=Ru(l,t.type);l!==e&&(Y(gl,t),Y(kt,e))}function hs(t){gl.current===t&&(rt(kt),rt(gl)),vs.current===t&&(rt(vs),ns._currentValue=z)}var jd,ro;function me(t){if(jd===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);jd=l&&l[1]||"",ro=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jd+t+ro}var Gd=!1;function qd(t,l){if(!t||Gd)return"";Gd=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(m){var g=m}Reflect.construct(t,[],y)}else{try{y.call()}catch(m){g=m}t.call(y.prototype)}}else{try{throw Error()}catch(m){g=m}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(m){if(m&&g&&typeof m.stack=="string")return[m.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=a.DetermineComponentFrameRoot(),i=d[0],o=d[1];if(i&&o){var r=i.split(`
`),b=o.split(`
`);for(s=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;s<b.length&&!b[s].includes("DetermineComponentFrameRoot");)s++;if(a===r.length||s===b.length)for(a=r.length-1,s=b.length-1;1<=a&&0<=s&&r[a]!==b[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==b[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==b[s]){var f=`
`+r[a].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=a&&0<=s);break}}}finally{Gd=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?me(e):""}function $c(t,l){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==l&&l!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return qd(t.type,!1);case 11:return qd(t.type.render,!1);case 1:return qd(t.type,!0);case 31:return me("Activity");default:return""}}function no(t){try{var l="",e=null;do l+=$c(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ld=Object.prototype.hasOwnProperty,wd=h.unstable_scheduleCallback,Yd=h.unstable_cancelCallback,Tc=h.unstable_shouldYield,Cc=h.unstable_requestPaint,Gt=h.unstable_now,Sc=h.unstable_getCurrentPriorityLevel,uo=h.unstable_ImmediatePriority,co=h.unstable_UserBlockingPriority,ks=h.unstable_NormalPriority,Bc=h.unstable_LowPriority,bo=h.unstable_IdlePriority,Ac=h.log,Mc=h.unstable_setDisableYieldValue,ka=null,qt=null;function Ll(t){if(typeof Ac=="function"&&Mc(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(ka,t)}catch{}}var Lt=Math.clz32?Math.clz32:Vc,Oc=Math.log,zc=Math.LN2;function Vc(t){return t>>>=0,t===0?32:31-(Oc(t)/zc|0)|0}var $s=256,Ts=262144,Cs=4194304;function pe(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ss(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var s=0,d=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~d,a!==0?s=pe(a):(i&=o,i!==0?s=pe(i):e||(e=o&~t,e!==0&&(s=pe(e))))):(o=a&~d,o!==0?s=pe(o):i!==0?s=pe(i):e||(e=a&~t,e!==0&&(s=pe(e)))),s===0?0:l!==0&&l!==s&&(l&d)===0&&(d=s&-s,e=l&-l,d>=e||d===32&&(e&4194048)!==0)?l:s}function $a(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Ec(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var t=Cs;return Cs<<=1,(Cs&62914560)===0&&(Cs=4194304),t}function Qd(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Ta(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dc(t,l,e,a,s,d){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var o=t.entanglements,r=t.expirationTimes,b=t.hiddenUpdates;for(e=i&~e;0<e;){var f=31-Lt(e),y=1<<f;o[f]=0,r[f]=-1;var g=b[f];if(g!==null)for(b[f]=null,f=0;f<g.length;f++){var m=g[f];m!==null&&(m.lane&=-536870913)}e&=~y}a!==0&&mo(t,a,0),d!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=d&~(i&~l))}function mo(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-Lt(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function po(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-Lt(e),s=1<<a;s&l|t[a]&l&&(t[a]|=l),e&=~s}}function fo(t,l){var e=l&-l;return e=(e&42)!==0?1:Xd(e),(e&(t.suspendedLanes|l))!==0?0:e}function Xd(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zd(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xo(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:ac(t.type))}function vo(t,l){var e=k.p;try{return k.p=t,l()}finally{k.p=e}}var wl=Math.random().toString(36).slice(2),St="__reactFiber$"+wl,Dt="__reactProps$"+wl,Ne="__reactContainer$"+wl,Jd="__reactEvents$"+wl,Rc="__reactListeners$"+wl,Uc="__reactHandles$"+wl,yo="__reactResources$"+wl,Ca="__reactMarker$"+wl;function Kd(t){delete t[St],delete t[Dt],delete t[Jd],delete t[Rc],delete t[Uc]}function He(t){var l=t[St];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ne]||e[St]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=qu(t);t!==null;){if(e=t[St])return e;t=qu(t)}return l}t=e,e=t.parentNode}return null}function _e(t){if(t=t[St]||t[Ne]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Sa(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(p(33))}function je(t){var l=t[yo];return l||(l=t[yo]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function $t(t){t[Ca]=!0}var ho=new Set,ko={};function fe(t,l){Ge(t,l),Ge(t+"Capture",l)}function Ge(t,l){for(ko[t]=l,t=0;t<l.length;t++)ho.add(l[t])}var Nc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},To={};function Hc(t){return Ld.call(To,t)?!0:Ld.call($o,t)?!1:Nc.test(t)?To[t]=!0:($o[t]=!0,!1)}function Bs(t,l,e){if(Hc(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function As(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function hl(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function Wt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Co(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function _c(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,d=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return s.call(this)},set:function(i){e=""+i,d.call(this,i)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Pd(t){if(!t._valueTracker){var l=Co(t)?"checked":"value";t._valueTracker=_c(t,l,""+t[l])}}function So(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Co(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Ms(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var jc=/[\n"\\]/g;function Ft(t){return t.replace(jc,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Id(t,l,e,a,s,d,i,o){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+Wt(l)):t.value!==""+Wt(l)&&(t.value=""+Wt(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?Wd(t,i,Wt(l)):e!=null?Wd(t,i,Wt(e)):a!=null&&t.removeAttribute("value"),s==null&&d!=null&&(t.defaultChecked=!!d),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Wt(o):t.removeAttribute("name")}function Bo(t,l,e,a,s,d,i,o){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),l!=null||e!=null){if(!(d!=="submit"&&d!=="reset"||l!=null)){Pd(t);return}e=e!=null?""+Wt(e):"",l=l!=null?""+Wt(l):e,o||l===t.value||(t.value=l),t.defaultValue=l}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Pd(t)}function Wd(t,l,e){l==="number"&&Ms(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function qe(t,l,e,a){if(t=t.options,l){l={};for(var s=0;s<e.length;s++)l["$"+e[s]]=!0;for(e=0;e<t.length;e++)s=l.hasOwnProperty("$"+t[e].value),t[e].selected!==s&&(t[e].selected=s),s&&a&&(t[e].defaultSelected=!0)}else{for(e=""+Wt(e),l=null,s=0;s<t.length;s++){if(t[s].value===e){t[s].selected=!0,a&&(t[s].defaultSelected=!0);return}l!==null||t[s].disabled||(l=t[s])}l!==null&&(l.selected=!0)}}function Ao(t,l,e){if(l!=null&&(l=""+Wt(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+Wt(e):""}function Mo(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(p(92));if(yl(a)){if(1<a.length)throw Error(p(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=Wt(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),Pd(t)}function Le(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var Gc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oo(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||Gc.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function zo(t,l,e){if(l!=null&&typeof l!="object")throw Error(p(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var s in l)a=l[s],l.hasOwnProperty(s)&&e[s]!==a&&Oo(t,s,a)}else for(var d in l)l.hasOwnProperty(d)&&Oo(t,d,l[d])}function Fd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Os(t){return Lc.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function kl(){}var ti=null;function li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var we=null,Ye=null;function Vo(t){var l=_e(t);if(l&&(t=l.stateNode)){var e=t[Dt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Id(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Ft(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var s=a[Dt]||null;if(!s)throw Error(p(90));Id(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&So(a)}break t;case"textarea":Ao(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&qe(t,!!e.multiple,l,!1)}}}var ei=!1;function Eo(t,l,e){if(ei)return t(l,e);ei=!0;try{var a=t(l);return a}finally{if(ei=!1,(we!==null||Ye!==null)&&(fd(),we&&(l=we,t=Ye,Ye=we=null,Vo(l),t)))for(l=0;l<t.length;l++)Vo(t[l])}}function Ba(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Dt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(p(231,l,typeof e));return e}var $l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if($l)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{ai=!1}var Yl=null,si=null,zs=null;function Do(){if(zs)return zs;var t,l=si,e=l.length,a,s="value"in Yl?Yl.value:Yl.textContent,d=s.length;for(t=0;t<e&&l[t]===s[t];t++);var i=e-t;for(a=1;a<=i&&l[e-a]===s[d-a];a++);return zs=s.slice(t,1<a?1-a:void 0)}function Vs(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Es(){return!0}function Ro(){return!1}function Rt(t){function l(e,a,s,d,i){this._reactName=e,this._targetInst=s,this.type=a,this.nativeEvent=d,this.target=i,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(e=t[o],this[o]=e?e(d):d[o]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Es:Ro,this.isPropagationStopped=Ro,this}return M(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),l}var xe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=Rt(xe),Ma=M({},xe,{view:0,detail:0}),wc=Rt(Ma),di,ii,Oa,Rs=M({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(di=t.screenX-Oa.screenX,ii=t.screenY-Oa.screenY):ii=di=0,Oa=t),di)},movementY:function(t){return"movementY"in t?t.movementY:ii}}),Uo=Rt(Rs),Yc=M({},Rs,{dataTransfer:0}),Qc=Rt(Yc),Xc=M({},Ma,{relatedTarget:0}),oi=Rt(Xc),Zc=M({},xe,{animationName:0,elapsedTime:0,pseudoElement:0}),Jc=Rt(Zc),Kc=M({},xe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pc=Rt(Kc),Ic=M({},xe,{data:0}),No=Rt(Ic),Wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lb(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=tb[t])?!!l[t]:!1}function ri(){return lb}var eb=M({},Ma,{key:function(t){if(t.key){var l=Wc[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(t){return t.type==="keypress"?Vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ab=Rt(eb),sb=M({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=Rt(sb),db=M({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),ib=Rt(db),ob=M({},xe,{propertyName:0,elapsedTime:0,pseudoElement:0}),rb=Rt(ob),nb=M({},Rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ub=Rt(nb),cb=M({},xe,{newState:0,oldState:0}),bb=Rt(cb),gb=[9,13,27,32],ni=$l&&"CompositionEvent"in window,za=null;$l&&"documentMode"in document&&(za=document.documentMode);var mb=$l&&"TextEvent"in window&&!za,_o=$l&&(!ni||za&&8<za&&11>=za),jo=" ",Go=!1;function qo(t,l){switch(t){case"keyup":return gb.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qe=!1;function pb(t,l){switch(t){case"compositionend":return Lo(l);case"keypress":return l.which!==32?null:(Go=!0,jo);case"textInput":return t=l.data,t===jo&&Go?null:t;default:return null}}function fb(t,l){if(Qe)return t==="compositionend"||!ni&&qo(t,l)?(t=Do(),zs=si=Yl=null,Qe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return _o&&l.locale!=="ko"?null:l.data;default:return null}}var xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wo(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!xb[t.type]:l==="textarea"}function Yo(t,l,e,a){we?Ye?Ye.push(a):Ye=[a]:we=a,l=Td(l,"onChange"),0<l.length&&(e=new Ds("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Va=null,Ea=null;function vb(t){Au(t,0)}function Us(t){var l=Sa(t);if(So(l))return t}function Qo(t,l){if(t==="change")return l}var Xo=!1;if($l){var ui;if($l){var ci="oninput"in document;if(!ci){var Zo=document.createElement("div");Zo.setAttribute("oninput","return;"),ci=typeof Zo.oninput=="function"}ui=ci}else ui=!1;Xo=ui&&(!document.documentMode||9<document.documentMode)}function Jo(){Va&&(Va.detachEvent("onpropertychange",Ko),Ea=Va=null)}function Ko(t){if(t.propertyName==="value"&&Us(Ea)){var l=[];Yo(l,Ea,t,li(t)),Eo(vb,l)}}function yb(t,l,e){t==="focusin"?(Jo(),Va=l,Ea=e,Va.attachEvent("onpropertychange",Ko)):t==="focusout"&&Jo()}function hb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Us(Ea)}function kb(t,l){if(t==="click")return Us(l)}function $b(t,l){if(t==="input"||t==="change")return Us(l)}function Tb(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var wt=typeof Object.is=="function"?Object.is:Tb;function Da(t,l){if(wt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var s=e[a];if(!Ld.call(l,s)||!wt(t[s],l[s]))return!1}return!0}function Po(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Io(t,l){var e=Po(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Po(e)}}function Wo(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?Wo(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function Fo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Ms(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Ms(t.document)}return l}function bi(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Cb=$l&&"documentMode"in document&&11>=document.documentMode,Xe=null,gi=null,Ra=null,mi=!1;function tr(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mi||Xe==null||Xe!==Ms(a)||(a=Xe,"selectionStart"in a&&bi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ra&&Da(Ra,a)||(Ra=a,a=Td(gi,"onSelect"),0<a.length&&(l=new Ds("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=Xe)))}function ve(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var Ze={animationend:ve("Animation","AnimationEnd"),animationiteration:ve("Animation","AnimationIteration"),animationstart:ve("Animation","AnimationStart"),transitionrun:ve("Transition","TransitionRun"),transitionstart:ve("Transition","TransitionStart"),transitioncancel:ve("Transition","TransitionCancel"),transitionend:ve("Transition","TransitionEnd")},pi={},lr={};$l&&(lr=document.createElement("div").style,"AnimationEvent"in window||(delete Ze.animationend.animation,delete Ze.animationiteration.animation,delete Ze.animationstart.animation),"TransitionEvent"in window||delete Ze.transitionend.transition);function ye(t){if(pi[t])return pi[t];if(!Ze[t])return t;var l=Ze[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in lr)return pi[t]=l[e];return t}var er=ye("animationend"),ar=ye("animationiteration"),sr=ye("animationstart"),Sb=ye("transitionrun"),Bb=ye("transitionstart"),Ab=ye("transitioncancel"),dr=ye("transitionend"),ir=new Map,fi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fi.push("scrollEnd");function nl(t,l){ir.set(t,l),fe(l,[t])}var Ns=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},tl=[],Je=0,xi=0;function Hs(){for(var t=Je,l=xi=Je=0;l<t;){var e=tl[l];tl[l++]=null;var a=tl[l];tl[l++]=null;var s=tl[l];tl[l++]=null;var d=tl[l];if(tl[l++]=null,a!==null&&s!==null){var i=a.pending;i===null?s.next=s:(s.next=i.next,i.next=s),a.pending=s}d!==0&&or(e,s,d)}}function _s(t,l,e,a){tl[Je++]=t,tl[Je++]=l,tl[Je++]=e,tl[Je++]=a,xi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function vi(t,l,e,a){return _s(t,l,e,a),js(t)}function he(t,l){return _s(t,null,null,l),js(t)}function or(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var s=!1,d=t.return;d!==null;)d.childLanes|=e,a=d.alternate,a!==null&&(a.childLanes|=e),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(s=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,s&&l!==null&&(s=31-Lt(e),t=d.hiddenUpdates,a=t[s],a===null?t[s]=[l]:a.push(l),l.lane=e|536870912),d):null}function js(t){if(50<es)throw es=0,A0=null,Error(p(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var Ke={};function Mb(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,l,e,a){return new Mb(t,l,e,a)}function yi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tl(t,l){var e=t.alternate;return e===null?(e=Yt(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function rr(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Gs(t,l,e,a,s,d){var i=0;if(a=t,typeof t=="function")yi(t)&&(i=1);else if(typeof t=="string")i=Dg(t,e,kt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case De:return t=Yt(31,e,l,s),t.elementType=De,t.lanes=d,t;case B:return ke(e.children,s,d,l);case w:i=8,s|=24;break;case _l:return t=Yt(12,e,l,s|2),t.elementType=_l,t.lanes=d,t;case ge:return t=Yt(13,e,l,s),t.elementType=ge,t.lanes=d,t;case bl:return t=Yt(19,e,l,s),t.elementType=bl,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:i=10;break t;case jl:i=9;break t;case Gl:i=11;break t;case vl:i=14;break t;case rl:i=16,a=null;break t}i=29,e=Error(p(130,t===null?"null":typeof t,"")),a=null}return l=Yt(i,e,l,s),l.elementType=t,l.type=a,l.lanes=d,l}function ke(t,l,e,a){return t=Yt(7,t,a,l),t.lanes=e,t}function hi(t,l,e){return t=Yt(6,t,null,l),t.lanes=e,t}function nr(t){var l=Yt(18,null,null,0);return l.stateNode=t,l}function ki(t,l,e){return l=Yt(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var ur=new WeakMap;function ll(t,l){if(typeof t=="object"&&t!==null){var e=ur.get(t);return e!==void 0?e:(l={value:t,source:l,stack:no(l)},ur.set(t,l),l)}return{value:t,source:l,stack:no(l)}}var Pe=[],Ie=0,qs=null,Ua=0,el=[],al=0,Ql=null,ml=1,pl="";function Cl(t,l){Pe[Ie++]=Ua,Pe[Ie++]=qs,qs=t,Ua=l}function cr(t,l,e){el[al++]=ml,el[al++]=pl,el[al++]=Ql,Ql=t;var a=ml;t=pl;var s=32-Lt(a)-1;a&=~(1<<s),e+=1;var d=32-Lt(l)+s;if(30<d){var i=s-s%5;d=(a&(1<<i)-1).toString(32),a>>=i,s-=i,ml=1<<32-Lt(l)+s|e<<s|a,pl=d+t}else ml=1<<d|e<<s|a,pl=t}function $i(t){t.return!==null&&(Cl(t,1),cr(t,1,0))}function Ti(t){for(;t===qs;)qs=Pe[--Ie],Pe[Ie]=null,Ua=Pe[--Ie],Pe[Ie]=null;for(;t===Ql;)Ql=el[--al],el[al]=null,pl=el[--al],el[al]=null,ml=el[--al],el[al]=null}function br(t,l){el[al++]=ml,el[al++]=pl,el[al++]=Ql,ml=l.id,pl=l.overflow,Ql=t}var Bt=null,at=null,j=!1,Xl=null,sl=!1,Ci=Error(p(519));function Zl(t){var l=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Na(ll(l,t)),Ci}function gr(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[St]=t,l[Dt]=a,e){case"dialog":N("cancel",l),N("close",l);break;case"iframe":case"object":case"embed":N("load",l);break;case"video":case"audio":for(e=0;e<ss.length;e++)N(ss[e],l);break;case"source":N("error",l);break;case"img":case"image":case"link":N("error",l),N("load",l);break;case"details":N("toggle",l);break;case"input":N("invalid",l),Bo(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":N("invalid",l);break;case"textarea":N("invalid",l),Mo(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Vu(l.textContent,e)?(a.popover!=null&&(N("beforetoggle",l),N("toggle",l)),a.onScroll!=null&&N("scroll",l),a.onScrollEnd!=null&&N("scrollend",l),a.onClick!=null&&(l.onclick=kl),l=!0):l=!1,l||Zl(t,!0)}function mr(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:sl=!1;return;case 27:case 3:sl=!0;return;default:Bt=Bt.return}}function We(t){if(t!==Bt)return!1;if(!j)return mr(t),j=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||L0(t.type,t.memoizedProps)),e=!e),e&&at&&Zl(t),mr(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));at=Gu(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));at=Gu(t)}else l===27?(l=at,oe(t.type)?(t=Z0,Z0=null,at=t):at=l):at=Bt?il(t.stateNode.nextSibling):null;return!0}function $e(){at=Bt=null,j=!1}function Si(){var t=Xl;return t!==null&&(_t===null?_t=t:_t.push.apply(_t,t),Xl=null),t}function Na(t){Xl===null?Xl=[t]:Xl.push(t)}var Bi=zt(null),Te=null,Sl=null;function Jl(t,l,e){Y(Bi,l._currentValue),l._currentValue=e}function Bl(t){t._currentValue=Bi.current,rt(Bi)}function Ai(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Mi(t,l,e,a){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var d=s.dependencies;if(d!==null){var i=s.child;d=d.firstContext;t:for(;d!==null;){var o=d;d=s;for(var r=0;r<l.length;r++)if(o.context===l[r]){d.lanes|=e,o=d.alternate,o!==null&&(o.lanes|=e),Ai(d.return,e,t),a||(i=null);break t}d=o.next}}else if(s.tag===18){if(i=s.return,i===null)throw Error(p(341));i.lanes|=e,d=i.alternate,d!==null&&(d.lanes|=e),Ai(i,e,t),i=null}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}}function Fe(t,l,e,a){t=null;for(var s=l,d=!1;s!==null;){if(!d){if((s.flags&524288)!==0)d=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var i=s.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var o=s.type;wt(s.pendingProps.value,i.value)||(t!==null?t.push(o):t=[o])}}else if(s===vs.current){if(i=s.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(ns):t=[ns])}s=s.return}t!==null&&Mi(l,t,e,a),l.flags|=262144}function Ls(t){for(t=t.firstContext;t!==null;){if(!wt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ce(t){Te=t,Sl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return pr(Te,t)}function ws(t,l){return Te===null&&Ce(t),pr(t,l)}function pr(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},Sl===null){if(t===null)throw Error(p(308));Sl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Sl=Sl.next=l;return e}var Ob=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},zb=h.unstable_scheduleCallback,Vb=h.unstable_NormalPriority,mt={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new Ob,data:new Map,refCount:0}}function Ha(t){t.refCount--,t.refCount===0&&zb(Vb,function(){t.controller.abort()})}var _a=null,zi=0,ta=0,la=null;function Eb(t,l){if(_a===null){var e=_a=[];zi=0,ta=D0(),la={status:"pending",value:void 0,then:function(a){e.push(a)}}}return zi++,l.then(fr,fr),l}function fr(){if(--zi===0&&_a!==null){la!==null&&(la.status="fulfilled");var t=_a;_a=null,ta=0,la=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function Db(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var s=0;s<e.length;s++)(0,e[s])(l)},function(s){for(a.status="rejected",a.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),a}var xr=v.S;v.S=function(t,l){lu=Gt(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Eb(t,l),xr!==null&&xr(t,l)};var Se=zt(null);function Vi(){var t=Se.current;return t!==null?t:I.pooledCache}function Ys(t,l){l===null?Y(Se,Se.current):Y(Se,l.pool)}function vr(){var t=Vi();return t===null?null:{parent:mt._currentValue,pool:t}}var ea=Error(p(460)),Ei=Error(p(474)),Qs=Error(p(542)),Xs={then:function(){}};function yr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hr(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(kl,kl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,$r(t),t;default:if(typeof l.status=="string")l.then(kl,kl);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var s=l;s.status="fulfilled",s.value=a}},function(a){if(l.status==="pending"){var s=l;s.status="rejected",s.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,$r(t),t}throw Ae=l,ea}}function Be(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ae=e,ea):e}}var Ae=null;function kr(){if(Ae===null)throw Error(p(459));var t=Ae;return Ae=null,t}function $r(t){if(t===ea||t===Qs)throw Error(p(483))}var aa=null,ja=0;function Zs(t){var l=ja;return ja+=1,aa===null&&(aa=[]),hr(aa,t,l)}function Ga(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Js(t,l){throw l.$$typeof===F?Error(p(525)):(t=Object.prototype.toString.call(l),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Tr(t){function l(u,n){if(t){var c=u.deletions;c===null?(u.deletions=[n],u.flags|=16):c.push(n)}}function e(u,n){if(!t)return null;for(;n!==null;)l(u,n),n=n.sibling;return null}function a(u){for(var n=new Map;u!==null;)u.key!==null?n.set(u.key,u):n.set(u.index,u),u=u.sibling;return n}function s(u,n){return u=Tl(u,n),u.index=0,u.sibling=null,u}function d(u,n,c){return u.index=c,t?(c=u.alternate,c!==null?(c=c.index,c<n?(u.flags|=67108866,n):c):(u.flags|=67108866,n)):(u.flags|=1048576,n)}function i(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,n,c,x){return n===null||n.tag!==6?(n=hi(c,u.mode,x),n.return=u,n):(n=s(n,c),n.return=u,n)}function r(u,n,c,x){var S=c.type;return S===B?f(u,n,c.props.children,x,c.key):n!==null&&(n.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rl&&Be(S)===n.type)?(n=s(n,c.props),Ga(n,c),n.return=u,n):(n=Gs(c.type,c.key,c.props,null,u.mode,x),Ga(n,c),n.return=u,n)}function b(u,n,c,x){return n===null||n.tag!==4||n.stateNode.containerInfo!==c.containerInfo||n.stateNode.implementation!==c.implementation?(n=ki(c,u.mode,x),n.return=u,n):(n=s(n,c.children||[]),n.return=u,n)}function f(u,n,c,x,S){return n===null||n.tag!==7?(n=ke(c,u.mode,x,S),n.return=u,n):(n=s(n,c),n.return=u,n)}function y(u,n,c){if(typeof n=="string"&&n!==""||typeof n=="number"||typeof n=="bigint")return n=hi(""+n,u.mode,c),n.return=u,n;if(typeof n=="object"&&n!==null){switch(n.$$typeof){case Pt:return c=Gs(n.type,n.key,n.props,null,u.mode,c),Ga(c,n),c.return=u,c;case ot:return n=ki(n,u.mode,c),n.return=u,n;case rl:return n=Be(n),y(u,n,c)}if(yl(n)||It(n))return n=ke(n,u.mode,c,null),n.return=u,n;if(typeof n.then=="function")return y(u,Zs(n),c);if(n.$$typeof===Ct)return y(u,ws(u,n),c);Js(u,n)}return null}function g(u,n,c,x){var S=n!==null?n.key:null;if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return S!==null?null:o(u,n,""+c,x);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Pt:return c.key===S?r(u,n,c,x):null;case ot:return c.key===S?b(u,n,c,x):null;case rl:return c=Be(c),g(u,n,c,x)}if(yl(c)||It(c))return S!==null?null:f(u,n,c,x,null);if(typeof c.then=="function")return g(u,n,Zs(c),x);if(c.$$typeof===Ct)return g(u,n,ws(u,c),x);Js(u,c)}return null}function m(u,n,c,x,S){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return u=u.get(c)||null,o(n,u,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pt:return u=u.get(x.key===null?c:x.key)||null,r(n,u,x,S);case ot:return u=u.get(x.key===null?c:x.key)||null,b(n,u,x,S);case rl:return x=Be(x),m(u,n,c,x,S)}if(yl(x)||It(x))return u=u.get(c)||null,f(n,u,x,S,null);if(typeof x.then=="function")return m(u,n,c,Zs(x),S);if(x.$$typeof===Ct)return m(u,n,c,ws(n,x),S);Js(n,x)}return null}function $(u,n,c,x){for(var S=null,G=null,T=n,D=n=0,_=null;T!==null&&D<c.length;D++){T.index>D?(_=T,T=null):_=T.sibling;var q=g(u,T,c[D],x);if(q===null){T===null&&(T=_);break}t&&T&&q.alternate===null&&l(u,T),n=d(q,n,D),G===null?S=q:G.sibling=q,G=q,T=_}if(D===c.length)return e(u,T),j&&Cl(u,D),S;if(T===null){for(;D<c.length;D++)T=y(u,c[D],x),T!==null&&(n=d(T,n,D),G===null?S=T:G.sibling=T,G=T);return j&&Cl(u,D),S}for(T=a(T);D<c.length;D++)_=m(T,u,D,c[D],x),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?D:_.key),n=d(_,n,D),G===null?S=_:G.sibling=_,G=_);return t&&T.forEach(function(be){return l(u,be)}),j&&Cl(u,D),S}function A(u,n,c,x){if(c==null)throw Error(p(151));for(var S=null,G=null,T=n,D=n=0,_=null,q=c.next();T!==null&&!q.done;D++,q=c.next()){T.index>D?(_=T,T=null):_=T.sibling;var be=g(u,T,q.value,x);if(be===null){T===null&&(T=_);break}t&&T&&be.alternate===null&&l(u,T),n=d(be,n,D),G===null?S=be:G.sibling=be,G=be,T=_}if(q.done)return e(u,T),j&&Cl(u,D),S;if(T===null){for(;!q.done;D++,q=c.next())q=y(u,q.value,x),q!==null&&(n=d(q,n,D),G===null?S=q:G.sibling=q,G=q);return j&&Cl(u,D),S}for(T=a(T);!q.done;D++,q=c.next())q=m(T,u,D,q.value,x),q!==null&&(t&&q.alternate!==null&&T.delete(q.key===null?D:q.key),n=d(q,n,D),G===null?S=q:G.sibling=q,G=q);return t&&T.forEach(function(Yg){return l(u,Yg)}),j&&Cl(u,D),S}function K(u,n,c,x){if(typeof c=="object"&&c!==null&&c.type===B&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Pt:t:{for(var S=c.key;n!==null;){if(n.key===S){if(S=c.type,S===B){if(n.tag===7){e(u,n.sibling),x=s(n,c.props.children),x.return=u,u=x;break t}}else if(n.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rl&&Be(S)===n.type){e(u,n.sibling),x=s(n,c.props),Ga(x,c),x.return=u,u=x;break t}e(u,n);break}else l(u,n);n=n.sibling}c.type===B?(x=ke(c.props.children,u.mode,x,c.key),x.return=u,u=x):(x=Gs(c.type,c.key,c.props,null,u.mode,x),Ga(x,c),x.return=u,u=x)}return i(u);case ot:t:{for(S=c.key;n!==null;){if(n.key===S)if(n.tag===4&&n.stateNode.containerInfo===c.containerInfo&&n.stateNode.implementation===c.implementation){e(u,n.sibling),x=s(n,c.children||[]),x.return=u,u=x;break t}else{e(u,n);break}else l(u,n);n=n.sibling}x=ki(c,u.mode,x),x.return=u,u=x}return i(u);case rl:return c=Be(c),K(u,n,c,x)}if(yl(c))return $(u,n,c,x);if(It(c)){if(S=It(c),typeof S!="function")throw Error(p(150));return c=S.call(c),A(u,n,c,x)}if(typeof c.then=="function")return K(u,n,Zs(c),x);if(c.$$typeof===Ct)return K(u,n,ws(u,c),x);Js(u,c)}return typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint"?(c=""+c,n!==null&&n.tag===6?(e(u,n.sibling),x=s(n,c),x.return=u,u=x):(e(u,n),x=hi(c,u.mode,x),x.return=u,u=x),i(u)):e(u,n)}return function(u,n,c,x){try{ja=0;var S=K(u,n,c,x);return aa=null,S}catch(T){if(T===ea||T===Qs)throw T;var G=Yt(29,T,null,u.mode);return G.lanes=x,G.return=u,G}finally{}}}var Me=Tr(!0),Cr=Tr(!1),Kl=!1;function Di(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ri(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Il(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(L&2)!==0){var s=a.pending;return s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l,l=js(t),or(t,null,e),l}return _s(t,a,l,e),js(t)}function qa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,po(t,e)}}function Ui(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var s=null,d=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};d===null?s=d=i:d=d.next=i,e=e.next}while(e!==null);d===null?s=d=l:d=d.next=l}else s=d=l;e={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:d,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Ni=!1;function La(){if(Ni){var t=la;if(t!==null)throw t}}function wa(t,l,e,a){Ni=!1;var s=t.updateQueue;Kl=!1;var d=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var r=o,b=r.next;r.next=null,i===null?d=b:i.next=b,i=r;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==i&&(o===null?f.firstBaseUpdate=b:o.next=b,f.lastBaseUpdate=r))}if(d!==null){var y=s.baseState;i=0,f=b=r=null,o=d;do{var g=o.lane&-536870913,m=g!==o.lane;if(m?(H&g)===g:(a&g)===g){g!==0&&g===ta&&(Ni=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var $=t,A=o;g=l;var K=e;switch(A.tag){case 1:if($=A.payload,typeof $=="function"){y=$.call(K,y,g);break t}y=$;break t;case 3:$.flags=$.flags&-65537|128;case 0:if($=A.payload,g=typeof $=="function"?$.call(K,y,g):$,g==null)break t;y=M({},y,g);break t;case 2:Kl=!0}}g=o.callback,g!==null&&(t.flags|=64,m&&(t.flags|=8192),m=s.callbacks,m===null?s.callbacks=[g]:m.push(g))}else m={lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(b=f=m,r=y):f=f.next=m,i|=g;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;m=o,o=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);f===null&&(r=y),s.baseState=r,s.firstBaseUpdate=b,s.lastBaseUpdate=f,d===null&&(s.shared.lanes=0),ee|=i,t.lanes=i,t.memoizedState=y}}function Sr(t,l){if(typeof t!="function")throw Error(p(191,t));t.call(l)}function Br(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Sr(e[t],l)}var sa=zt(null),Ks=zt(0);function Ar(t,l){t=Ul,Y(Ks,t),Y(sa,l),Ul=t|l.baseLanes}function Hi(){Y(Ks,Ul),Y(sa,sa.current)}function _i(){Ul=Ks.current,rt(sa),rt(Ks)}var Qt=zt(null),dl=null;function Wl(t){var l=t.alternate;Y(ct,ct.current&1),Y(Qt,t),dl===null&&(l===null||sa.current!==null||l.memoizedState!==null)&&(dl=t)}function ji(t){Y(ct,ct.current),Y(Qt,t),dl===null&&(dl=t)}function Mr(t){t.tag===22?(Y(ct,ct.current),Y(Qt,t),dl===null&&(dl=t)):Fl()}function Fl(){Y(ct,ct.current),Y(Qt,Qt.current)}function Xt(t){rt(Qt),dl===t&&(dl=null),rt(ct)}var ct=zt(0);function Ps(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Q0(e)||X0(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Al=0,V=null,Z=null,pt=null,Is=!1,da=!1,Oe=!1,Ws=0,Ya=0,ia=null,Rb=0;function nt(){throw Error(p(321))}function Gi(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!wt(t[e],l[e]))return!1;return!0}function qi(t,l,e,a,s,d){return Al=d,V=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,v.H=t===null||t.memoizedState===null?bn:e0,Oe=!1,d=e(a,s),Oe=!1,da&&(d=zr(l,e,a,s)),Or(t),d}function Or(t){v.H=Za;var l=Z!==null&&Z.next!==null;if(Al=0,pt=Z=V=null,Is=!1,Ya=0,ia=null,l)throw Error(p(300));t===null||ft||(t=t.dependencies,t!==null&&Ls(t)&&(ft=!0))}function zr(t,l,e,a){V=t;var s=0;do{if(da&&(ia=null),Ya=0,da=!1,25<=s)throw Error(p(301));if(s+=1,pt=Z=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}v.H=gn,d=l(e,a)}while(da);return d}function Ub(){var t=v.H,l=t.useState()[0];return l=typeof l.then=="function"?Qa(l):l,t=t.useState()[0],(Z!==null?Z.memoizedState:null)!==t&&(V.flags|=1024),l}function Li(){var t=Ws!==0;return Ws=0,t}function wi(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Yi(t){if(Is){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Is=!1}Al=0,pt=Z=V=null,da=!1,Ya=Ws=0,ia=null}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?V.memoizedState=pt=t:pt=pt.next=t,pt}function bt(){if(Z===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=Z.next;var l=pt===null?V.memoizedState:pt.next;if(l!==null)pt=l,Z=t;else{if(t===null)throw V.alternate===null?Error(p(467)):Error(p(310));Z=t,t={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},pt===null?V.memoizedState=pt=t:pt=pt.next=t}return pt}function Fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qa(t){var l=Ya;return Ya+=1,ia===null&&(ia=[]),t=hr(ia,t,l),l=V,(pt===null?l.memoizedState:pt.next)===null&&(l=l.alternate,v.H=l===null||l.memoizedState===null?bn:e0),t}function td(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qa(t);if(t.$$typeof===Ct)return At(t)}throw Error(p(438,String(t)))}function Qi(t){var l=null,e=V.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(s){return s.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=Fs(),V.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=fs;return l.index++,e}function Ml(t,l){return typeof l=="function"?l(t):l}function ld(t){var l=bt();return Xi(l,Z,t)}function Xi(t,l,e){var a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var s=t.baseQueue,d=a.pending;if(d!==null){if(s!==null){var i=s.next;s.next=d.next,d.next=i}l.baseQueue=s=d,a.pending=null}if(d=t.baseState,s===null)t.memoizedState=d;else{l=s.next;var o=i=null,r=null,b=l,f=!1;do{var y=b.lane&-536870913;if(y!==b.lane?(H&y)===y:(Al&y)===y){var g=b.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),y===ta&&(f=!0);else if((Al&g)===g){b=b.next,g===ta&&(f=!0);continue}else y={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(o=r=y,i=d):r=r.next=y,V.lanes|=g,ee|=g;y=b.action,Oe&&e(d,y),d=b.hasEagerState?b.eagerState:e(d,y)}else g={lane:y,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(o=r=g,i=d):r=r.next=g,V.lanes|=y,ee|=y;b=b.next}while(b!==null&&b!==l);if(r===null?i=d:r.next=o,!wt(d,t.memoizedState)&&(ft=!0,f&&(e=la,e!==null)))throw e;t.memoizedState=d,t.baseState=i,t.baseQueue=r,a.lastRenderedState=d}return s===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Zi(t){var l=bt(),e=l.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=t;var a=e.dispatch,s=e.pending,d=l.memoizedState;if(s!==null){e.pending=null;var i=s=s.next;do d=t(d,i.action),i=i.next;while(i!==s);wt(d,l.memoizedState)||(ft=!0),l.memoizedState=d,l.baseQueue===null&&(l.baseState=d),e.lastRenderedState=d}return[d,a]}function Vr(t,l,e){var a=V,s=bt(),d=j;if(d){if(e===void 0)throw Error(p(407));e=e()}else e=l();var i=!wt((Z||s).memoizedState,e);if(i&&(s.memoizedState=e,ft=!0),s=s.queue,Pi(Rr.bind(null,a,s,t),[t]),s.getSnapshot!==l||i||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,oa(9,{destroy:void 0},Dr.bind(null,a,s,e,l),null),I===null)throw Error(p(349));d||(Al&127)!==0||Er(a,l,e)}return e}function Er(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=V.updateQueue,l===null?(l=Fs(),V.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Dr(t,l,e,a){l.value=e,l.getSnapshot=a,Ur(l)&&Nr(t)}function Rr(t,l,e){return e(function(){Ur(l)&&Nr(t)})}function Ur(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!wt(t,e)}catch{return!0}}function Nr(t){var l=he(t,2);l!==null&&jt(l,t,2)}function Ji(t){var l=Vt();if(typeof t=="function"){var e=t;if(t=e(),Oe){Ll(!0);try{e()}finally{Ll(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},l}function Hr(t,l,e,a){return t.baseState=e,Xi(t,Z,typeof a=="function"?a:Ml)}function Nb(t,l,e,a,s){if(sd(t))throw Error(p(485));if(t=l.action,t!==null){var d={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){d.listeners.push(i)}};v.T!==null?e(!0):d.isTransition=!1,a(d),e=l.pending,e===null?(d.next=l.pending=d,_r(l,d)):(d.next=e.next,l.pending=e.next=d)}}function _r(t,l){var e=l.action,a=l.payload,s=t.state;if(l.isTransition){var d=v.T,i={};v.T=i;try{var o=e(s,a),r=v.S;r!==null&&r(i,o),jr(t,l,o)}catch(b){Ki(t,l,b)}finally{d!==null&&i.types!==null&&(d.types=i.types),v.T=d}}else try{d=e(s,a),jr(t,l,d)}catch(b){Ki(t,l,b)}}function jr(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Gr(t,l,a)},function(a){return Ki(t,l,a)}):Gr(t,l,e)}function Gr(t,l,e){l.status="fulfilled",l.value=e,qr(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,_r(t,e)))}function Ki(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,qr(l),l=l.next;while(l!==a)}t.action=null}function qr(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Lr(t,l){return l}function wr(t,l){if(j){var e=I.formState;if(e!==null){t:{var a=V;if(j){if(at){l:{for(var s=at,d=sl;s.nodeType!==8;){if(!d){s=null;break l}if(s=il(s.nextSibling),s===null){s=null;break l}}d=s.data,s=d==="F!"||d==="F"?s:null}if(s){at=il(s.nextSibling),a=s.data==="F!";break t}}Zl(a)}a=!1}a&&(l=e[0])}}return e=Vt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:l},e.queue=a,e=nn.bind(null,V,a),a.dispatch=e,a=Ji(!1),d=l0.bind(null,V,!1,a.queue),a=Vt(),s={state:l,dispatch:null,action:t,pending:null},a.queue=s,e=Nb.bind(null,V,s,d,e),s.dispatch=e,a.memoizedState=t,[l,e,!1]}function Yr(t){var l=bt();return Qr(l,Z,t)}function Qr(t,l,e){if(l=Xi(t,l,Lr)[0],t=ld(Ml)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Qa(l)}catch(i){throw i===ea?Qs:i}else a=l;l=bt();var s=l.queue,d=s.dispatch;return e!==l.memoizedState&&(V.flags|=2048,oa(9,{destroy:void 0},Hb.bind(null,s,e),null)),[a,d,t]}function Hb(t,l){t.action=l}function Xr(t){var l=bt(),e=Z;if(e!==null)return Qr(l,e,t);bt(),l=l.memoizedState,e=bt();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function oa(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=V.updateQueue,l===null&&(l=Fs(),V.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function Zr(){return bt().memoizedState}function ed(t,l,e,a){var s=Vt();V.flags|=t,s.memoizedState=oa(1|l,{destroy:void 0},e,a===void 0?null:a)}function ad(t,l,e,a){var s=bt();a=a===void 0?null:a;var d=s.memoizedState.inst;Z!==null&&a!==null&&Gi(a,Z.memoizedState.deps)?s.memoizedState=oa(l,d,e,a):(V.flags|=t,s.memoizedState=oa(1|l,d,e,a))}function Jr(t,l){ed(8390656,8,t,l)}function Pi(t,l){ad(2048,8,t,l)}function _b(t){V.flags|=4;var l=V.updateQueue;if(l===null)l=Fs(),V.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function Kr(t){var l=bt().memoizedState;return _b({ref:l,nextImpl:t}),function(){if((L&2)!==0)throw Error(p(440));return l.impl.apply(void 0,arguments)}}function Pr(t,l){return ad(4,2,t,l)}function Ir(t,l){return ad(4,4,t,l)}function Wr(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function Fr(t,l,e){e=e!=null?e.concat([t]):null,ad(4,4,Wr.bind(null,l,t),e)}function Ii(){}function tn(t,l){var e=bt();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Gi(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function ln(t,l){var e=bt();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Gi(l,a[1]))return a[0];if(a=t(),Oe){Ll(!0);try{t()}finally{Ll(!1)}}return e.memoizedState=[a,l],a}function Wi(t,l,e){return e===void 0||(Al&1073741824)!==0&&(H&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=au(),V.lanes|=t,ee|=t,e)}function en(t,l,e,a){return wt(e,l)?e:sa.current!==null?(t=Wi(t,e,a),wt(t,l)||(ft=!0),t):(Al&42)===0||(Al&1073741824)!==0&&(H&261930)===0?(ft=!0,t.memoizedState=e):(t=au(),V.lanes|=t,ee|=t,l)}function an(t,l,e,a,s){var d=k.p;k.p=d!==0&&8>d?d:8;var i=v.T,o={};v.T=o,l0(t,!1,l,e);try{var r=s(),b=v.S;if(b!==null&&b(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var f=Db(r,a);Xa(t,l,f,Kt(t))}else Xa(t,l,a,Kt(t))}catch(y){Xa(t,l,{then:function(){},status:"rejected",reason:y},Kt())}finally{k.p=d,i!==null&&o.types!==null&&(i.types=o.types),v.T=i}}function jb(){}function Fi(t,l,e,a){if(t.tag!==5)throw Error(p(476));var s=sn(t).queue;an(t,s,l,z,e===null?jb:function(){return dn(t),e(a)})}function sn(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:z},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function dn(t){var l=sn(t);l.next===null&&(l=t.alternate.memoizedState),Xa(t,l.next.queue,{},Kt())}function t0(){return At(ns)}function on(){return bt().memoizedState}function rn(){return bt().memoizedState}function Gb(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=Kt();t=Pl(e);var a=Il(l,t,e);a!==null&&(jt(a,l,e),qa(a,l,e)),l={cache:Oi()},t.payload=l;return}l=l.return}}function qb(t,l,e){var a=Kt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},sd(t)?un(l,e):(e=vi(t,l,e,a),e!==null&&(jt(e,t,a),cn(e,l,a)))}function nn(t,l,e){var a=Kt();Xa(t,l,e,a)}function Xa(t,l,e,a){var s={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(sd(t))un(l,s);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=l.lastRenderedReducer,d!==null))try{var i=l.lastRenderedState,o=d(i,e);if(s.hasEagerState=!0,s.eagerState=o,wt(o,i))return _s(t,l,s,0),I===null&&Hs(),!1}catch{}finally{}if(e=vi(t,l,s,a),e!==null)return jt(e,t,a),cn(e,l,a),!0}return!1}function l0(t,l,e,a){if(a={lane:2,revertLane:D0(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sd(t)){if(l)throw Error(p(479))}else l=vi(t,e,a,2),l!==null&&jt(l,t,2)}function sd(t){var l=t.alternate;return t===V||l!==null&&l===V}function un(t,l){da=Is=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function cn(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,po(t,e)}}var Za={readContext:At,use:td,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};Za.useEffectEvent=nt;var bn={readContext:At,use:td,useCallback:function(t,l){return Vt().memoizedState=[t,l===void 0?null:l],t},useContext:At,useEffect:Jr,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,ed(4194308,4,Wr.bind(null,l,t),e)},useLayoutEffect:function(t,l){return ed(4194308,4,t,l)},useInsertionEffect:function(t,l){ed(4,2,t,l)},useMemo:function(t,l){var e=Vt();l=l===void 0?null:l;var a=t();if(Oe){Ll(!0);try{t()}finally{Ll(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=Vt();if(e!==void 0){var s=e(l);if(Oe){Ll(!0);try{e(l)}finally{Ll(!1)}}}else s=l;return a.memoizedState=a.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=qb.bind(null,V,t),[a.memoizedState,t]},useRef:function(t){var l=Vt();return t={current:t},l.memoizedState=t},useState:function(t){t=Ji(t);var l=t.queue,e=nn.bind(null,V,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:Ii,useDeferredValue:function(t,l){var e=Vt();return Wi(e,t,l)},useTransition:function(){var t=Ji(!1);return t=an.bind(null,V,t.queue,!0,!1),Vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=V,s=Vt();if(j){if(e===void 0)throw Error(p(407));e=e()}else{if(e=l(),I===null)throw Error(p(349));(H&127)!==0||Er(a,l,e)}s.memoizedState=e;var d={value:e,getSnapshot:l};return s.queue=d,Jr(Rr.bind(null,a,d,t),[t]),a.flags|=2048,oa(9,{destroy:void 0},Dr.bind(null,a,d,e,l),null),e},useId:function(){var t=Vt(),l=I.identifierPrefix;if(j){var e=pl,a=ml;e=(a&~(1<<32-Lt(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=Ws++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=Rb++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:t0,useFormState:wr,useActionState:wr,useOptimistic:function(t){var l=Vt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=l0.bind(null,V,!0,e),e.dispatch=l,[t,l]},useMemoCache:Qi,useCacheRefresh:function(){return Vt().memoizedState=Gb.bind(null,V)},useEffectEvent:function(t){var l=Vt(),e={impl:t};return l.memoizedState=e,function(){if((L&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}},e0={readContext:At,use:td,useCallback:tn,useContext:At,useEffect:Pi,useImperativeHandle:Fr,useInsertionEffect:Pr,useLayoutEffect:Ir,useMemo:ln,useReducer:ld,useRef:Zr,useState:function(){return ld(Ml)},useDebugValue:Ii,useDeferredValue:function(t,l){var e=bt();return en(e,Z.memoizedState,t,l)},useTransition:function(){var t=ld(Ml)[0],l=bt().memoizedState;return[typeof t=="boolean"?t:Qa(t),l]},useSyncExternalStore:Vr,useId:on,useHostTransitionStatus:t0,useFormState:Yr,useActionState:Yr,useOptimistic:function(t,l){var e=bt();return Hr(e,Z,t,l)},useMemoCache:Qi,useCacheRefresh:rn};e0.useEffectEvent=Kr;var gn={readContext:At,use:td,useCallback:tn,useContext:At,useEffect:Pi,useImperativeHandle:Fr,useInsertionEffect:Pr,useLayoutEffect:Ir,useMemo:ln,useReducer:Zi,useRef:Zr,useState:function(){return Zi(Ml)},useDebugValue:Ii,useDeferredValue:function(t,l){var e=bt();return Z===null?Wi(e,t,l):en(e,Z.memoizedState,t,l)},useTransition:function(){var t=Zi(Ml)[0],l=bt().memoizedState;return[typeof t=="boolean"?t:Qa(t),l]},useSyncExternalStore:Vr,useId:on,useHostTransitionStatus:t0,useFormState:Xr,useActionState:Xr,useOptimistic:function(t,l){var e=bt();return Z!==null?Hr(e,Z,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Qi,useCacheRefresh:rn};gn.useEffectEvent=Kr;function a0(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:M({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var s0={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=Kt(),s=Pl(a);s.payload=l,e!=null&&(s.callback=e),l=Il(t,s,a),l!==null&&(jt(l,t,a),qa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=Kt(),s=Pl(a);s.tag=1,s.payload=l,e!=null&&(s.callback=e),l=Il(t,s,a),l!==null&&(jt(l,t,a),qa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=Kt(),a=Pl(e);a.tag=2,l!=null&&(a.callback=l),l=Il(t,a,e),l!==null&&(jt(l,t,e),qa(l,t,e))}};function mn(t,l,e,a,s,d,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,d,i):l.prototype&&l.prototype.isPureReactComponent?!Da(e,a)||!Da(s,d):!0}function pn(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&s0.enqueueReplaceState(l,l.state,null)}function ze(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=M({},e));for(var s in t)e[s]===void 0&&(e[s]=t[s])}return e}function fn(t){Ns(t)}function xn(t){console.error(t)}function vn(t){Ns(t)}function dd(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function yn(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function d0(t,l,e){return e=Pl(e),e.tag=3,e.payload={element:null},e.callback=function(){dd(t,l)},e}function hn(t){return t=Pl(t),t.tag=3,t}function kn(t,l,e,a){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=a.value;t.payload=function(){return s(d)},t.callback=function(){yn(l,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){yn(l,e,a),typeof s!="function"&&(ae===null?ae=new Set([this]):ae.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Lb(t,l,e,a,s){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&Fe(l,e,s,!0),e=Qt.current,e!==null){switch(e.tag){case 31:case 13:return dl===null?xd():e.alternate===null&&ut===0&&(ut=3),e.flags&=-257,e.flags|=65536,e.lanes=s,a===Xs?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),z0(t,a,s)),!1;case 22:return e.flags|=65536,a===Xs?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),z0(t,a,s)),!1}throw Error(p(435,e.tag))}return z0(t,a,s),xd(),!1}if(j)return l=Qt.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=s,a!==Ci&&(t=Error(p(422),{cause:a}),Na(ll(t,e)))):(a!==Ci&&(l=Error(p(423),{cause:a}),Na(ll(l,e))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,a=ll(a,e),s=d0(t.stateNode,a,s),Ui(t,s),ut!==4&&(ut=2)),!1;var d=Error(p(520),{cause:a});if(d=ll(d,e),ls===null?ls=[d]:ls.push(d),ut!==4&&(ut=2),l===null)return!0;a=ll(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=s&-s,e.lanes|=t,t=d0(e.stateNode,a,t),Ui(e,t),!1;case 1:if(l=e.type,d=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ae===null||!ae.has(d))))return e.flags|=65536,s&=-s,e.lanes|=s,s=hn(s),kn(s,t,e,a),Ui(e,s),!1}e=e.return}while(e!==null);return!1}var i0=Error(p(461)),ft=!1;function Mt(t,l,e,a){l.child=t===null?Cr(l,null,e,a):Me(l,t.child,e,a)}function $n(t,l,e,a,s){e=e.render;var d=l.ref;if("ref"in a){var i={};for(var o in a)o!=="ref"&&(i[o]=a[o])}else i=a;return Ce(l),a=qi(t,l,e,i,d,s),o=Li(),t!==null&&!ft?(wi(t,l,s),Ol(t,l,s)):(j&&o&&$i(l),l.flags|=1,Mt(t,l,a,s),l.child)}function Tn(t,l,e,a,s){if(t===null){var d=e.type;return typeof d=="function"&&!yi(d)&&d.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=d,Cn(t,l,d,a,s)):(t=Gs(e.type,null,a,l,l.mode,s),t.ref=l.ref,t.return=l,l.child=t)}if(d=t.child,!m0(t,s)){var i=d.memoizedProps;if(e=e.compare,e=e!==null?e:Da,e(i,a)&&t.ref===l.ref)return Ol(t,l,s)}return l.flags|=1,t=Tl(d,a),t.ref=l.ref,t.return=l,l.child=t}function Cn(t,l,e,a,s){if(t!==null){var d=t.memoizedProps;if(Da(d,a)&&t.ref===l.ref)if(ft=!1,l.pendingProps=a=d,m0(t,s))(t.flags&131072)!==0&&(ft=!0);else return l.lanes=t.lanes,Ol(t,l,s)}return o0(t,l,e,a,s)}function Sn(t,l,e,a){var s=a.children,d=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(d=d!==null?d.baseLanes|e:e,t!==null){for(a=l.child=t.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~d}else a=0,l.child=null;return Bn(t,l,d,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ys(l,d!==null?d.cachePool:null),d!==null?Ar(l,d):Hi(),Mr(l);else return a=l.lanes=536870912,Bn(t,l,d!==null?d.baseLanes|e:e,e,a)}else d!==null?(Ys(l,d.cachePool),Ar(l,d),Fl(),l.memoizedState=null):(t!==null&&Ys(l,null),Hi(),Fl());return Mt(t,l,s,e),l.child}function Ja(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Bn(t,l,e,a,s){var d=Vi();return d=d===null?null:{parent:mt._currentValue,pool:d},l.memoizedState={baseLanes:e,cachePool:d},t!==null&&Ys(l,null),Hi(),Mr(l),t!==null&&Fe(t,l,a,!0),l.childLanes=s,null}function id(t,l){return l=rd({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function An(t,l,e){return Me(l,t.child,null,e),t=id(l,l.pendingProps),t.flags|=2,Xt(l),l.memoizedState=null,t}function wb(t,l,e){var a=l.pendingProps,s=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(j){if(a.mode==="hidden")return t=id(l,a),l.lanes=536870912,Ja(null,t);if(ji(l),(t=at)?(t=ju(t,sl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ql!==null?{id:ml,overflow:pl}:null,retryLane:536870912,hydrationErrors:null},e=nr(t),e.return=l,l.child=e,Bt=l,at=null)):t=null,t===null)throw Zl(l);return l.lanes=536870912,null}return id(l,a)}var d=t.memoizedState;if(d!==null){var i=d.dehydrated;if(ji(l),s)if(l.flags&256)l.flags&=-257,l=An(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(p(558));else if(ft||Fe(t,l,e,!1),s=(e&t.childLanes)!==0,ft||s){if(a=I,a!==null&&(i=fo(a,e),i!==0&&i!==d.retryLane))throw d.retryLane=i,he(t,i),jt(a,t,i),i0;xd(),l=An(t,l,e)}else t=d.treeContext,at=il(i.nextSibling),Bt=l,j=!0,Xl=null,sl=!1,t!==null&&br(l,t),l=id(l,a),l.flags|=4096;return l}return t=Tl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function od(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(p(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function o0(t,l,e,a,s){return Ce(l),e=qi(t,l,e,a,void 0,s),a=Li(),t!==null&&!ft?(wi(t,l,s),Ol(t,l,s)):(j&&a&&$i(l),l.flags|=1,Mt(t,l,e,s),l.child)}function Mn(t,l,e,a,s,d){return Ce(l),l.updateQueue=null,e=zr(l,a,e,s),Or(t),a=Li(),t!==null&&!ft?(wi(t,l,d),Ol(t,l,d)):(j&&a&&$i(l),l.flags|=1,Mt(t,l,e,d),l.child)}function On(t,l,e,a,s){if(Ce(l),l.stateNode===null){var d=Ke,i=e.contextType;typeof i=="object"&&i!==null&&(d=At(i)),d=new e(a,d),l.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=s0,l.stateNode=d,d._reactInternals=l,d=l.stateNode,d.props=a,d.state=l.memoizedState,d.refs={},Di(l),i=e.contextType,d.context=typeof i=="object"&&i!==null?At(i):Ke,d.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(a0(l,e,i,a),d.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&s0.enqueueReplaceState(d,d.state,null),wa(l,a,d,s),La(),d.state=l.memoizedState),typeof d.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){d=l.stateNode;var o=l.memoizedProps,r=ze(e,o);d.props=r;var b=d.context,f=e.contextType;i=Ke,typeof f=="object"&&f!==null&&(i=At(f));var y=e.getDerivedStateFromProps;f=typeof y=="function"||typeof d.getSnapshotBeforeUpdate=="function",o=l.pendingProps!==o,f||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(o||b!==i)&&pn(l,d,a,i),Kl=!1;var g=l.memoizedState;d.state=g,wa(l,a,d,s),La(),b=l.memoizedState,o||g!==b||Kl?(typeof y=="function"&&(a0(l,e,y,a),b=l.memoizedState),(r=Kl||mn(l,e,r,a,g,b,i))?(f||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(l.flags|=4194308)):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=b),d.props=a,d.state=b,d.context=i,a=r):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{d=l.stateNode,Ri(t,l),i=l.memoizedProps,f=ze(e,i),d.props=f,y=l.pendingProps,g=d.context,b=e.contextType,r=Ke,typeof b=="object"&&b!==null&&(r=At(b)),o=e.getDerivedStateFromProps,(b=typeof o=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(i!==y||g!==r)&&pn(l,d,a,r),Kl=!1,g=l.memoizedState,d.state=g,wa(l,a,d,s),La();var m=l.memoizedState;i!==y||g!==m||Kl||t!==null&&t.dependencies!==null&&Ls(t.dependencies)?(typeof o=="function"&&(a0(l,e,o,a),m=l.memoizedState),(f=Kl||mn(l,e,f,a,g,m,r)||t!==null&&t.dependencies!==null&&Ls(t.dependencies))?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,m,r),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,m,r)),typeof d.componentDidUpdate=="function"&&(l.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof d.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=m),d.props=a,d.state=m,d.context=r,a=f):(typeof d.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(l.flags|=1024),a=!1)}return d=a,od(t,l),a=(l.flags&128)!==0,d||a?(d=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:d.render(),l.flags|=1,t!==null&&a?(l.child=Me(l,t.child,null,s),l.child=Me(l,null,e,s)):Mt(t,l,e,s),l.memoizedState=d.state,t=l.child):t=Ol(t,l,s),t}function zn(t,l,e,a){return $e(),l.flags|=256,Mt(t,l,e,a),l.child}var r0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function n0(t){return{baseLanes:t,cachePool:vr()}}function u0(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=Jt),t}function Vn(t,l,e){var a=l.pendingProps,s=!1,d=(l.flags&128)!==0,i;if((i=d)||(i=t!==null&&t.memoizedState===null?!1:(ct.current&2)!==0),i&&(s=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(j){if(s?Wl(l):Fl(),(t=at)?(t=ju(t,sl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ql!==null?{id:ml,overflow:pl}:null,retryLane:536870912,hydrationErrors:null},e=nr(t),e.return=l,l.child=e,Bt=l,at=null)):t=null,t===null)throw Zl(l);return X0(t)?l.lanes=32:l.lanes=536870912,null}var o=a.children;return a=a.fallback,s?(Fl(),s=l.mode,o=rd({mode:"hidden",children:o},s),a=ke(a,s,e,null),o.return=l,a.return=l,o.sibling=a,l.child=o,a=l.child,a.memoizedState=n0(e),a.childLanes=u0(t,i,e),l.memoizedState=r0,Ja(null,a)):(Wl(l),c0(l,o))}var r=t.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(d)l.flags&256?(Wl(l),l.flags&=-257,l=b0(t,l,e)):l.memoizedState!==null?(Fl(),l.child=t.child,l.flags|=128,l=null):(Fl(),o=a.fallback,s=l.mode,a=rd({mode:"visible",children:a.children},s),o=ke(o,s,e,null),o.flags|=2,a.return=l,o.return=l,a.sibling=o,l.child=a,Me(l,t.child,null,e),a=l.child,a.memoizedState=n0(e),a.childLanes=u0(t,i,e),l.memoizedState=r0,l=Ja(null,a));else if(Wl(l),X0(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var b=i.dgst;i=b,a=Error(p(419)),a.stack="",a.digest=i,Na({value:a,source:null,stack:null}),l=b0(t,l,e)}else if(ft||Fe(t,l,e,!1),i=(e&t.childLanes)!==0,ft||i){if(i=I,i!==null&&(a=fo(i,e),a!==0&&a!==r.retryLane))throw r.retryLane=a,he(t,a),jt(i,t,a),i0;Q0(o)||xd(),l=b0(t,l,e)}else Q0(o)?(l.flags|=192,l.child=t.child,l=null):(t=r.treeContext,at=il(o.nextSibling),Bt=l,j=!0,Xl=null,sl=!1,t!==null&&br(l,t),l=c0(l,a.children),l.flags|=4096);return l}return s?(Fl(),o=a.fallback,s=l.mode,r=t.child,b=r.sibling,a=Tl(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,b!==null?o=Tl(b,o):(o=ke(o,s,e,null),o.flags|=2),o.return=l,a.return=l,a.sibling=o,l.child=a,Ja(null,a),a=l.child,o=t.child.memoizedState,o===null?o=n0(e):(s=o.cachePool,s!==null?(r=mt._currentValue,s=s.parent!==r?{parent:r,pool:r}:s):s=vr(),o={baseLanes:o.baseLanes|e,cachePool:s}),a.memoizedState=o,a.childLanes=u0(t,i,e),l.memoizedState=r0,Ja(t.child,a)):(Wl(l),e=t.child,t=e.sibling,e=Tl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function c0(t,l){return l=rd({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function rd(t,l){return t=Yt(22,t,null,l),t.lanes=0,t}function b0(t,l,e){return Me(l,t.child,null,e),t=c0(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function En(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Ai(t.return,l,e)}function g0(t,l,e,a,s,d){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:s,treeForkCount:d}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=s,i.treeForkCount=d)}function Dn(t,l,e){var a=l.pendingProps,s=a.revealOrder,d=a.tail;a=a.children;var i=ct.current,o=(i&2)!==0;if(o?(i=i&1|2,l.flags|=128):i&=1,Y(ct,i),Mt(t,l,a,e),a=j?Ua:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&En(t,e,l);else if(t.tag===19)En(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(e=l.child,s=null;e!==null;)t=e.alternate,t!==null&&Ps(t)===null&&(s=e),e=e.sibling;e=s,e===null?(s=l.child,l.child=null):(s=e.sibling,e.sibling=null),g0(l,!1,s,e,d,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,s=l.child,l.child=null;s!==null;){if(t=s.alternate,t!==null&&Ps(t)===null){l.child=s;break}t=s.sibling,s.sibling=e,e=s,s=t}g0(l,!0,e,null,d,a);break;case"together":g0(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Ol(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),ee|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(Fe(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(p(153));if(l.child!==null){for(t=l.child,e=Tl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Tl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function m0(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Ls(t)))}function Yb(t,l,e){switch(l.tag){case 3:ys(l,l.stateNode.containerInfo),Jl(l,mt,t.memoizedState.cache),$e();break;case 27:case 5:_d(l);break;case 4:ys(l,l.stateNode.containerInfo);break;case 10:Jl(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,ji(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(Wl(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Vn(t,l,e):(Wl(l),t=Ol(t,l,e),t!==null?t.sibling:null);Wl(l);break;case 19:var s=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(Fe(t,l,e,!1),a=(e&l.childLanes)!==0),s){if(a)return Dn(t,l,e);l.flags|=128}if(s=l.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Y(ct,ct.current),a)break;return null;case 22:return l.lanes=0,Sn(t,l,e,l.pendingProps);case 24:Jl(l,mt,t.memoizedState.cache)}return Ol(t,l,e)}function Rn(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)ft=!0;else{if(!m0(t,e)&&(l.flags&128)===0)return ft=!1,Yb(t,l,e);ft=(t.flags&131072)!==0}else ft=!1,j&&(l.flags&1048576)!==0&&cr(l,Ua,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=Be(l.elementType),l.type=t,typeof t=="function")yi(t)?(a=ze(t,a),l.tag=1,l=On(null,l,t,a,e)):(l.tag=0,l=o0(null,l,t,a,e));else{if(t!=null){var s=t.$$typeof;if(s===Gl){l.tag=11,l=$n(null,l,t,a,e);break t}else if(s===vl){l.tag=14,l=Tn(null,l,t,a,e);break t}}throw l=ha(t)||t,Error(p(306,l,""))}}return l;case 0:return o0(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,s=ze(a,l.pendingProps),On(t,l,a,s,e);case 3:t:{if(ys(l,l.stateNode.containerInfo),t===null)throw Error(p(387));a=l.pendingProps;var d=l.memoizedState;s=d.element,Ri(t,l),wa(l,a,null,e);var i=l.memoizedState;if(a=i.cache,Jl(l,mt,a),a!==d.cache&&Mi(l,[mt],e,!0),La(),a=i.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=d,l.memoizedState=d,l.flags&256){l=zn(t,l,a,e);break t}else if(a!==s){s=ll(Error(p(424)),l),Na(s),l=zn(t,l,a,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(at=il(t.firstChild),Bt=l,j=!0,Xl=null,sl=!0,e=Cr(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if($e(),a===s){l=Ol(t,l,e);break t}Mt(t,l,a,e)}l=l.child}return l;case 26:return od(t,l),t===null?(e=Qu(l.type,null,l.pendingProps,null))?l.memoizedState=e:j||(e=l.type,t=l.pendingProps,a=Cd(ql.current).createElement(e),a[St]=l,a[Dt]=t,Ot(a,e,t),$t(a),l.stateNode=a):l.memoizedState=Qu(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return _d(l),t===null&&j&&(a=l.stateNode=Lu(l.type,l.pendingProps,ql.current),Bt=l,sl=!0,s=at,oe(l.type)?(Z0=s,at=il(a.firstChild)):at=s),Mt(t,l,l.pendingProps.children,e),od(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&j&&((s=a=at)&&(a=hg(a,l.type,l.pendingProps,sl),a!==null?(l.stateNode=a,Bt=l,at=il(a.firstChild),sl=!1,s=!0):s=!1),s||Zl(l)),_d(l),s=l.type,d=l.pendingProps,i=t!==null?t.memoizedProps:null,a=d.children,L0(s,d)?a=null:i!==null&&L0(s,i)&&(l.flags|=32),l.memoizedState!==null&&(s=qi(t,l,Ub,null,null,e),ns._currentValue=s),od(t,l),Mt(t,l,a,e),l.child;case 6:return t===null&&j&&((t=e=at)&&(e=kg(e,l.pendingProps,sl),e!==null?(l.stateNode=e,Bt=l,at=null,t=!0):t=!1),t||Zl(l)),null;case 13:return Vn(t,l,e);case 4:return ys(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=Me(l,null,a,e):Mt(t,l,a,e),l.child;case 11:return $n(t,l,l.type,l.pendingProps,e);case 7:return Mt(t,l,l.pendingProps,e),l.child;case 8:return Mt(t,l,l.pendingProps.children,e),l.child;case 12:return Mt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,Jl(l,l.type,a.value),Mt(t,l,a.children,e),l.child;case 9:return s=l.type._context,a=l.pendingProps.children,Ce(l),s=At(s),a=a(s),l.flags|=1,Mt(t,l,a,e),l.child;case 14:return Tn(t,l,l.type,l.pendingProps,e);case 15:return Cn(t,l,l.type,l.pendingProps,e);case 19:return Dn(t,l,e);case 31:return wb(t,l,e);case 22:return Sn(t,l,e,l.pendingProps);case 24:return Ce(l),a=At(mt),t===null?(s=Vi(),s===null&&(s=I,d=Oi(),s.pooledCache=d,d.refCount++,d!==null&&(s.pooledCacheLanes|=e),s=d),l.memoizedState={parent:a,cache:s},Di(l),Jl(l,mt,s)):((t.lanes&e)!==0&&(Ri(t,l),wa(l,null,null,e),La()),s=t.memoizedState,d=l.memoizedState,s.parent!==a?(s={parent:a,cache:a},l.memoizedState=s,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=s),Jl(l,mt,a)):(a=d.cache,Jl(l,mt,a),a!==s.cache&&Mi(l,[mt],e,!0))),Mt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(p(156,l.tag))}function zl(t){t.flags|=4}function p0(t,l,e,a,s){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(ou())t.flags|=8192;else throw Ae=Xs,Ei}else t.flags&=-16777217}function Un(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pu(l))if(ou())t.flags|=8192;else throw Ae=Xs,Ei}function nd(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?go():536870912,t.lanes|=l,ca|=l)}function Ka(t,l){if(!j)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function st(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var s=t.child;s!==null;)e|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)e|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function Qb(t,l,e){var a=l.pendingProps;switch(Ti(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(l),null;case 1:return st(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Bl(mt),Ue(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(We(l)?zl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Si())),st(l),null;case 26:var s=l.type,d=l.memoizedState;return t===null?(zl(l),d!==null?(st(l),Un(l,d)):(st(l),p0(l,s,null,a,e))):d?d!==t.memoizedState?(zl(l),st(l),Un(l,d)):(st(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&zl(l),st(l),p0(l,s,t,a,e)),null;case 27:if(hs(l),e=ql.current,s=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&zl(l);else{if(!a){if(l.stateNode===null)throw Error(p(166));return st(l),null}t=kt.current,We(l)?gr(l):(t=Lu(s,a,e),l.stateNode=t,zl(l))}return st(l),null;case 5:if(hs(l),s=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&zl(l);else{if(!a){if(l.stateNode===null)throw Error(p(166));return st(l),null}if(d=kt.current,We(l))gr(l);else{var i=Cd(ql.current);switch(d){case 1:d=i.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:d=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":d=i.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":d=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":d=i.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?d.multiple=!0:a.size&&(d.size=a.size);break;default:d=typeof a.is=="string"?i.createElement(s,{is:a.is}):i.createElement(s)}}d[St]=l,d[Dt]=a;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)d.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=d;t:switch(Ot(d,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&zl(l)}}return st(l),p0(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&zl(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(p(166));if(t=ql.current,We(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,s=Bt,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}t[St]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Vu(t.nodeValue,e)),t||Zl(l,!0)}else t=Cd(t).createTextNode(a),t[St]=l,l.stateNode=t}return st(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=We(l),e!==null){if(t===null){if(!a)throw Error(p(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[St]=l}else $e(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;st(l),t=!1}else e=Si(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(Xt(l),l):(Xt(l),null);if((l.flags&128)!==0)throw Error(p(558))}return st(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=We(l),a!==null&&a.dehydrated!==null){if(t===null){if(!s)throw Error(p(318));if(s=l.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(p(317));s[St]=l}else $e(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;st(l),s=!1}else s=Si(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return l.flags&256?(Xt(l),l):(Xt(l),null)}return Xt(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),d=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==s&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),nd(l,l.updateQueue),st(l),null);case 4:return Ue(),t===null&&H0(l.stateNode.containerInfo),st(l),null;case 10:return Bl(l.type),st(l),null;case 19:if(rt(ct),a=l.memoizedState,a===null)return st(l),null;if(s=(l.flags&128)!==0,d=a.rendering,d===null)if(s)Ka(a,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(d=Ps(t),d!==null){for(l.flags|=128,Ka(a,!1),t=d.updateQueue,l.updateQueue=t,nd(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)rr(e,t),e=e.sibling;return Y(ct,ct.current&1|2),j&&Cl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&Gt()>md&&(l.flags|=128,s=!0,Ka(a,!1),l.lanes=4194304)}else{if(!s)if(t=Ps(d),t!==null){if(l.flags|=128,s=!0,t=t.updateQueue,l.updateQueue=t,nd(l,t),Ka(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!j)return st(l),null}else 2*Gt()-a.renderingStartTime>md&&e!==536870912&&(l.flags|=128,s=!0,Ka(a,!1),l.lanes=4194304);a.isBackwards?(d.sibling=l.child,l.child=d):(t=a.last,t!==null?t.sibling=d:l.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Gt(),t.sibling=null,e=ct.current,Y(ct,s?e&1|2:e&1),j&&Cl(l,a.treeForkCount),t):(st(l),null);case 22:case 23:return Xt(l),_i(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(st(l),l.subtreeFlags&6&&(l.flags|=8192)):st(l),e=l.updateQueue,e!==null&&nd(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&rt(Se),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Bl(mt),st(l),null;case 25:return null;case 30:return null}throw Error(p(156,l.tag))}function Xb(t,l){switch(Ti(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Bl(mt),Ue(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return hs(l),null;case 31:if(l.memoizedState!==null){if(Xt(l),l.alternate===null)throw Error(p(340));$e()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(Xt(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(p(340));$e()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return rt(ct),null;case 4:return Ue(),null;case 10:return Bl(l.type),null;case 22:case 23:return Xt(l),_i(),t!==null&&rt(Se),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Bl(mt),null;case 25:return null;default:return null}}function Nn(t,l){switch(Ti(l),l.tag){case 3:Bl(mt),Ue();break;case 26:case 27:case 5:hs(l);break;case 4:Ue();break;case 31:l.memoizedState!==null&&Xt(l);break;case 13:Xt(l);break;case 19:rt(ct);break;case 10:Bl(l.type);break;case 22:case 23:Xt(l),_i(),t!==null&&rt(Se);break;case 24:Bl(mt)}}function Pa(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var s=a.next;e=s;do{if((e.tag&t)===t){a=void 0;var d=e.create,i=e.inst;a=d(),i.destroy=a}e=e.next}while(e!==s)}}catch(o){X(l,l.return,o)}}function te(t,l,e){try{var a=l.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var d=s.next;a=d;do{if((a.tag&t)===t){var i=a.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,s=l;var r=e,b=o;try{b()}catch(f){X(s,r,f)}}}a=a.next}while(a!==d)}}catch(f){X(l,l.return,f)}}function Hn(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Br(l,e)}catch(a){X(t,t.return,a)}}}function _n(t,l,e){e.props=ze(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){X(t,l,a)}}function Ia(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(s){X(t,l,s)}}function fl(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(s){X(t,l,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){X(t,l,s)}else e.current=null}function jn(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(s){X(t,t.return,s)}}function f0(t,l,e){try{var a=t.stateNode;mg(a,t.type,e,l),a[Dt]=l}catch(s){X(t,t.return,s)}}function Gn(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&oe(t.type)||t.tag===4}function x0(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gn(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&oe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function v0(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=kl));else if(a!==4&&(a===27&&oe(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(v0(t,l,e),t=t.sibling;t!==null;)v0(t,l,e),t=t.sibling}function ud(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&oe(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(ud(t,l,e),t=t.sibling;t!==null;)ud(t,l,e),t=t.sibling}function qn(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ot(l,a,e),l[St]=t,l[Dt]=e}catch(d){X(t,t.return,d)}}var Vl=!1,xt=!1,y0=!1,Ln=typeof WeakSet=="function"?WeakSet:Set,Tt=null;function Zb(t,l){if(t=t.containerInfo,G0=Vd,t=Fo(t),bi(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var s=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{e.nodeType,d.nodeType}catch{e=null;break t}var i=0,o=-1,r=-1,b=0,f=0,y=t,g=null;l:for(;;){for(var m;y!==e||s!==0&&y.nodeType!==3||(o=i+s),y!==d||a!==0&&y.nodeType!==3||(r=i+a),y.nodeType===3&&(i+=y.nodeValue.length),(m=y.firstChild)!==null;)g=y,y=m;for(;;){if(y===t)break l;if(g===e&&++b===s&&(o=i),g===d&&++f===a&&(r=i),(m=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=m}e=o===-1||r===-1?null:{start:o,end:r}}else e=null}e=e||{start:0,end:0}}else e=null;for(q0={focusedElem:t,selectionRange:e},Vd=!1,Tt=l;Tt!==null;)if(l=Tt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Tt=t;else for(;Tt!==null;){switch(l=Tt,d=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)s=t[e],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,e=l,s=d.memoizedProps,d=d.memoizedState,a=e.stateNode;try{var $=ze(e.type,s);t=a.getSnapshotBeforeUpdate($,d),a.__reactInternalSnapshotBeforeUpdate=t}catch(A){X(e,e.return,A)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Y0(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Y0(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=l.sibling,t!==null){t.return=l.return,Tt=t;break}Tt=l.return}}function wn(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Dl(t,e),a&4&&Pa(5,e);break;case 1:if(Dl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){X(e,e.return,i)}else{var s=ze(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(s,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){X(e,e.return,i)}}a&64&&Hn(e),a&512&&Ia(e,e.return);break;case 3:if(Dl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Br(t,l)}catch(i){X(e,e.return,i)}}break;case 27:l===null&&a&4&&qn(e);case 26:case 5:Dl(t,e),l===null&&a&4&&jn(e),a&512&&Ia(e,e.return);break;case 12:Dl(t,e);break;case 31:Dl(t,e),a&4&&Xn(t,e);break;case 13:Dl(t,e),a&4&&Zn(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=eg.bind(null,e),$g(t,e))));break;case 22:if(a=e.memoizedState!==null||Vl,!a){l=l!==null&&l.memoizedState!==null||xt,s=Vl;var d=xt;Vl=a,(xt=l)&&!d?Rl(t,e,(e.subtreeFlags&8772)!==0):Dl(t,e),Vl=s,xt=d}break;case 30:break;default:Dl(t,e)}}function Yn(t){var l=t.alternate;l!==null&&(t.alternate=null,Yn(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Kd(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var it=null,Ut=!1;function El(t,l,e){for(e=e.child;e!==null;)Qn(t,l,e),e=e.sibling}function Qn(t,l,e){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(ka,e)}catch{}switch(e.tag){case 26:xt||fl(e,l),El(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:xt||fl(e,l);var a=it,s=Ut;oe(e.type)&&(it=e.stateNode,Ut=!1),El(t,l,e),is(e.stateNode),it=a,Ut=s;break;case 5:xt||fl(e,l);case 6:if(a=it,s=Ut,it=null,El(t,l,e),it=a,Ut=s,it!==null)if(Ut)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(e.stateNode)}catch(d){X(e,l,d)}else try{it.removeChild(e.stateNode)}catch(d){X(e,l,d)}break;case 18:it!==null&&(Ut?(t=it,Hu(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),ya(t)):Hu(it,e.stateNode));break;case 4:a=it,s=Ut,it=e.stateNode.containerInfo,Ut=!0,El(t,l,e),it=a,Ut=s;break;case 0:case 11:case 14:case 15:te(2,e,l),xt||te(4,e,l),El(t,l,e);break;case 1:xt||(fl(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&_n(e,l,a)),El(t,l,e);break;case 21:El(t,l,e);break;case 22:xt=(a=xt)||e.memoizedState!==null,El(t,l,e),xt=a;break;default:El(t,l,e)}}function Xn(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ya(t)}catch(e){X(l,l.return,e)}}}function Zn(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ya(t)}catch(e){X(l,l.return,e)}}function Jb(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Ln),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Ln),l;default:throw Error(p(435,t.tag))}}function cd(t,l){var e=Jb(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var s=ag.bind(null,t,a);a.then(s,s)}})}function Nt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var s=e[a],d=t,i=l,o=i;t:for(;o!==null;){switch(o.tag){case 27:if(oe(o.type)){it=o.stateNode,Ut=!1;break t}break;case 5:it=o.stateNode,Ut=!1;break t;case 3:case 4:it=o.stateNode.containerInfo,Ut=!0;break t}o=o.return}if(it===null)throw Error(p(160));Qn(d,i,s),it=null,Ut=!1,d=s.alternate,d!==null&&(d.return=null),s.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Jn(l,t),l=l.sibling}var ul=null;function Jn(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nt(l,t),Ht(t),a&4&&(te(3,t,t.return),Pa(3,t),te(5,t,t.return));break;case 1:Nt(l,t),Ht(t),a&512&&(xt||e===null||fl(e,e.return)),a&64&&Vl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var s=ul;if(Nt(l,t),Ht(t),a&512&&(xt||e===null||fl(e,e.return)),a&4){var d=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,s=s.ownerDocument||s;l:switch(a){case"title":d=s.getElementsByTagName("title")[0],(!d||d[Ca]||d[St]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=s.createElement(a),s.head.insertBefore(d,s.querySelector("head > title"))),Ot(d,a,e),d[St]=t,$t(d),a=d;break t;case"link":var i=Ju("link","href",s).get(a+(e.href||""));if(i){for(var o=0;o<i.length;o++)if(d=i[o],d.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&d.getAttribute("rel")===(e.rel==null?null:e.rel)&&d.getAttribute("title")===(e.title==null?null:e.title)&&d.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(o,1);break l}}d=s.createElement(a),Ot(d,a,e),s.head.appendChild(d);break;case"meta":if(i=Ju("meta","content",s).get(a+(e.content||""))){for(o=0;o<i.length;o++)if(d=i[o],d.getAttribute("content")===(e.content==null?null:""+e.content)&&d.getAttribute("name")===(e.name==null?null:e.name)&&d.getAttribute("property")===(e.property==null?null:e.property)&&d.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&d.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(o,1);break l}}d=s.createElement(a),Ot(d,a,e),s.head.appendChild(d);break;default:throw Error(p(468,a))}d[St]=t,$t(d),a=d}t.stateNode=a}else Ku(s,t.type,t.stateNode);else t.stateNode=Zu(s,a,t.memoizedProps);else d!==a?(d===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):d.count--,a===null?Ku(s,t.type,t.stateNode):Zu(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&f0(t,t.memoizedProps,e.memoizedProps)}break;case 27:Nt(l,t),Ht(t),a&512&&(xt||e===null||fl(e,e.return)),e!==null&&a&4&&f0(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Nt(l,t),Ht(t),a&512&&(xt||e===null||fl(e,e.return)),t.flags&32){s=t.stateNode;try{Le(s,"")}catch($){X(t,t.return,$)}}a&4&&t.stateNode!=null&&(s=t.memoizedProps,f0(t,s,e!==null?e.memoizedProps:s)),a&1024&&(y0=!0);break;case 6:if(Nt(l,t),Ht(t),a&4){if(t.stateNode===null)throw Error(p(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch($){X(t,t.return,$)}}break;case 3:if(Ad=null,s=ul,ul=Sd(l.containerInfo),Nt(l,t),ul=s,Ht(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{ya(l.containerInfo)}catch($){X(t,t.return,$)}y0&&(y0=!1,Kn(t));break;case 4:a=ul,ul=Sd(t.stateNode.containerInfo),Nt(l,t),Ht(t),ul=a;break;case 12:Nt(l,t),Ht(t);break;case 31:Nt(l,t),Ht(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,cd(t,a)));break;case 13:Nt(l,t),Ht(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(gd=Gt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,cd(t,a)));break;case 22:s=t.memoizedState!==null;var r=e!==null&&e.memoizedState!==null,b=Vl,f=xt;if(Vl=b||s,xt=f||r,Nt(l,t),xt=f,Vl=b,Ht(t),a&8192)t:for(l=t.stateNode,l._visibility=s?l._visibility&-2:l._visibility|1,s&&(e===null||r||Vl||xt||Ve(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){r=e=l;try{if(d=r.stateNode,s)i=d.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=r.stateNode;var y=r.memoizedProps.style,g=y!=null&&y.hasOwnProperty("display")?y.display:null;o.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch($){X(r,r.return,$)}}}else if(l.tag===6){if(e===null){r=l;try{r.stateNode.nodeValue=s?"":r.memoizedProps}catch($){X(r,r.return,$)}}}else if(l.tag===18){if(e===null){r=l;try{var m=r.stateNode;s?_u(m,!0):_u(r.stateNode,!1)}catch($){X(r,r.return,$)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,cd(t,e))));break;case 19:Nt(l,t),Ht(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,cd(t,a)));break;case 30:break;case 21:break;default:Nt(l,t),Ht(t)}}function Ht(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Gn(a)){e=a;break}a=a.return}if(e==null)throw Error(p(160));switch(e.tag){case 27:var s=e.stateNode,d=x0(t);ud(t,d,s);break;case 5:var i=e.stateNode;e.flags&32&&(Le(i,""),e.flags&=-33);var o=x0(t);ud(t,o,i);break;case 3:case 4:var r=e.stateNode.containerInfo,b=x0(t);v0(t,b,r);break;default:throw Error(p(161))}}catch(f){X(t,t.return,f)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Kn(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Kn(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Dl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)wn(t,l.alternate,l),l=l.sibling}function Ve(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:te(4,l,l.return),Ve(l);break;case 1:fl(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&_n(l,l.return,e),Ve(l);break;case 27:is(l.stateNode);case 26:case 5:fl(l,l.return),Ve(l);break;case 22:l.memoizedState===null&&Ve(l);break;case 30:Ve(l);break;default:Ve(l)}t=t.sibling}}function Rl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,s=t,d=l,i=d.flags;switch(d.tag){case 0:case 11:case 15:Rl(s,d,e),Pa(4,d);break;case 1:if(Rl(s,d,e),a=d,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(b){X(a,a.return,b)}if(a=d,s=a.updateQueue,s!==null){var o=a.stateNode;try{var r=s.shared.hiddenCallbacks;if(r!==null)for(s.shared.hiddenCallbacks=null,s=0;s<r.length;s++)Sr(r[s],o)}catch(b){X(a,a.return,b)}}e&&i&64&&Hn(d),Ia(d,d.return);break;case 27:qn(d);case 26:case 5:Rl(s,d,e),e&&a===null&&i&4&&jn(d),Ia(d,d.return);break;case 12:Rl(s,d,e);break;case 31:Rl(s,d,e),e&&i&4&&Xn(s,d);break;case 13:Rl(s,d,e),e&&i&4&&Zn(s,d);break;case 22:d.memoizedState===null&&Rl(s,d,e),Ia(d,d.return);break;case 30:break;default:Rl(s,d,e)}l=l.sibling}}function h0(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ha(e))}function k0(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ha(t))}function cl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Pn(t,l,e,a),l=l.sibling}function Pn(t,l,e,a){var s=l.flags;switch(l.tag){case 0:case 11:case 15:cl(t,l,e,a),s&2048&&Pa(9,l);break;case 1:cl(t,l,e,a);break;case 3:cl(t,l,e,a),s&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ha(t)));break;case 12:if(s&2048){cl(t,l,e,a),t=l.stateNode;try{var d=l.memoizedProps,i=d.id,o=d.onPostCommit;typeof o=="function"&&o(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){X(l,l.return,r)}}else cl(t,l,e,a);break;case 31:cl(t,l,e,a);break;case 13:cl(t,l,e,a);break;case 23:break;case 22:d=l.stateNode,i=l.alternate,l.memoizedState!==null?d._visibility&2?cl(t,l,e,a):Wa(t,l):d._visibility&2?cl(t,l,e,a):(d._visibility|=2,ra(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),s&2048&&h0(i,l);break;case 24:cl(t,l,e,a),s&2048&&k0(l.alternate,l);break;default:cl(t,l,e,a)}}function ra(t,l,e,a,s){for(s=s&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var d=t,i=l,o=e,r=a,b=i.flags;switch(i.tag){case 0:case 11:case 15:ra(d,i,o,r,s),Pa(8,i);break;case 23:break;case 22:var f=i.stateNode;i.memoizedState!==null?f._visibility&2?ra(d,i,o,r,s):Wa(d,i):(f._visibility|=2,ra(d,i,o,r,s)),s&&b&2048&&h0(i.alternate,i);break;case 24:ra(d,i,o,r,s),s&&b&2048&&k0(i.alternate,i);break;default:ra(d,i,o,r,s)}l=l.sibling}}function Wa(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,s=a.flags;switch(a.tag){case 22:Wa(e,a),s&2048&&h0(a.alternate,a);break;case 24:Wa(e,a),s&2048&&k0(a.alternate,a);break;default:Wa(e,a)}l=l.sibling}}var Fa=8192;function na(t,l,e){if(t.subtreeFlags&Fa)for(t=t.child;t!==null;)In(t,l,e),t=t.sibling}function In(t,l,e){switch(t.tag){case 26:na(t,l,e),t.flags&Fa&&t.memoizedState!==null&&Rg(e,ul,t.memoizedState,t.memoizedProps);break;case 5:na(t,l,e);break;case 3:case 4:var a=ul;ul=Sd(t.stateNode.containerInfo),na(t,l,e),ul=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Fa,Fa=16777216,na(t,l,e),Fa=a):na(t,l,e));break;default:na(t,l,e)}}function Wn(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function ts(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Tt=a,tu(a,t)}Wn(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fn(t),t=t.sibling}function Fn(t){switch(t.tag){case 0:case 11:case 15:ts(t),t.flags&2048&&te(9,t,t.return);break;case 3:ts(t);break;case 12:ts(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,bd(t)):ts(t);break;default:ts(t)}}function bd(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Tt=a,tu(a,t)}Wn(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:te(8,l,l.return),bd(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,bd(l));break;default:bd(l)}t=t.sibling}}function tu(t,l){for(;Tt!==null;){var e=Tt;switch(e.tag){case 0:case 11:case 15:te(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ha(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Tt=a;else t:for(e=t;Tt!==null;){a=Tt;var s=a.sibling,d=a.return;if(Yn(a),a===e){Tt=null;break t}if(s!==null){s.return=d,Tt=s;break t}Tt=d}}}var Kb={getCacheForType:function(t){var l=At(mt),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return At(mt).controller.signal}},Pb=typeof WeakMap=="function"?WeakMap:Map,L=0,I=null,U=null,H=0,Q=0,Zt=null,le=!1,ua=!1,$0=!1,Ul=0,ut=0,ee=0,Ee=0,T0=0,Jt=0,ca=0,ls=null,_t=null,C0=!1,gd=0,lu=0,md=1/0,pd=null,ae=null,yt=0,se=null,ba=null,Nl=0,S0=0,B0=null,eu=null,es=0,A0=null;function Kt(){return(L&2)!==0&&H!==0?H&-H:v.T!==null?D0():xo()}function au(){if(Jt===0)if((H&536870912)===0||j){var t=Ts;Ts<<=1,(Ts&3932160)===0&&(Ts=262144),Jt=t}else Jt=536870912;return t=Qt.current,t!==null&&(t.flags|=32),Jt}function jt(t,l,e){(t===I&&(Q===2||Q===9)||t.cancelPendingCommit!==null)&&(ga(t,0),de(t,H,Jt,!1)),Ta(t,e),((L&2)===0||t!==I)&&(t===I&&((L&2)===0&&(Ee|=e),ut===4&&de(t,H,Jt,!1)),xl(t))}function su(t,l,e){if((L&6)!==0)throw Error(p(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||$a(t,l),s=a?Fb(t,l):O0(t,l,!0),d=a;do{if(s===0){ua&&!a&&de(t,l,0,!1);break}else{if(e=t.current.alternate,d&&!Ib(e)){s=O0(t,l,!1),d=!1;continue}if(s===2){if(d=l,t.errorRecoveryDisabledLanes&d)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var o=t;s=ls;var r=o.current.memoizedState.isDehydrated;if(r&&(ga(o,i).flags|=256),i=O0(o,i,!1),i!==2){if($0&&!r){o.errorRecoveryDisabledLanes|=d,Ee|=d,s=4;break t}d=_t,_t=s,d!==null&&(_t===null?_t=d:_t.push.apply(_t,d))}s=i}if(d=!1,s!==2)continue}}if(s===1){ga(t,0),de(t,l,0,!0);break}t:{switch(a=t,d=s,d){case 0:case 1:throw Error(p(345));case 4:if((l&4194048)!==l)break;case 6:de(a,l,Jt,!le);break t;case 2:_t=null;break;case 3:case 5:break;default:throw Error(p(329))}if((l&62914560)===l&&(s=gd+300-Gt(),10<s)){if(de(a,l,Jt,!le),Ss(a,0,!0)!==0)break t;Nl=l,a.timeoutHandle=Uu(du.bind(null,a,e,_t,pd,C0,l,Jt,Ee,ca,le,d,"Throttled",-0,0),s);break t}du(a,e,_t,pd,C0,l,Jt,Ee,ca,le,d,null,-0,0)}}break}while(!0);xl(t)}function du(t,l,e,a,s,d,i,o,r,b,f,y,g,m){if(t.timeoutHandle=-1,y=l.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kl},In(l,d,y);var $=(d&62914560)===d?gd-Gt():(d&4194048)===d?lu-Gt():0;if($=Ug(y,$),$!==null){Nl=d,t.cancelPendingCommit=$(gu.bind(null,t,l,d,e,a,s,i,o,r,f,y,null,g,m)),de(t,d,i,!b);return}}gu(t,l,d,e,a,s,i,o,r)}function Ib(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var s=e[a],d=s.getSnapshot;s=s.value;try{if(!wt(d(),s))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function de(t,l,e,a){l&=~T0,l&=~Ee,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var s=l;0<s;){var d=31-Lt(s),i=1<<d;a[d]=-1,s&=~i}e!==0&&mo(t,e,l)}function fd(){return(L&6)===0?(as(0),!1):!0}function M0(){if(U!==null){if(Q===0)var t=U.return;else t=U,Sl=Te=null,Yi(t),aa=null,ja=0,t=U;for(;t!==null;)Nn(t.alternate,t),t=t.return;U=null}}function ga(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,xg(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Nl=0,M0(),I=t,U=e=Tl(t.current,null),H=l,Q=0,Zt=null,le=!1,ua=$a(t,l),$0=!1,ca=Jt=T0=Ee=ee=ut=0,_t=ls=null,C0=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var s=31-Lt(a),d=1<<s;l|=t[s],a&=~d}return Ul=l,Hs(),e}function iu(t,l){V=null,v.H=Za,l===ea||l===Qs?(l=kr(),Q=3):l===Ei?(l=kr(),Q=4):Q=l===i0?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Zt=l,U===null&&(ut=1,dd(t,ll(l,t.current)))}function ou(){var t=Qt.current;return t===null?!0:(H&4194048)===H?dl===null:(H&62914560)===H||(H&536870912)!==0?t===dl:!1}function ru(){var t=v.H;return v.H=Za,t===null?Za:t}function nu(){var t=v.A;return v.A=Kb,t}function xd(){ut=4,le||(H&4194048)!==H&&Qt.current!==null||(ua=!0),(ee&134217727)===0&&(Ee&134217727)===0||I===null||de(I,H,Jt,!1)}function O0(t,l,e){var a=L;L|=2;var s=ru(),d=nu();(I!==t||H!==l)&&(pd=null,ga(t,l)),l=!1;var i=ut;t:do try{if(Q!==0&&U!==null){var o=U,r=Zt;switch(Q){case 8:M0(),i=6;break t;case 3:case 2:case 9:case 6:Qt.current===null&&(l=!0);var b=Q;if(Q=0,Zt=null,ma(t,o,r,b),e&&ua){i=0;break t}break;default:b=Q,Q=0,Zt=null,ma(t,o,r,b)}}Wb(),i=ut;break}catch(f){iu(t,f)}while(!0);return l&&t.shellSuspendCounter++,Sl=Te=null,L=a,v.H=s,v.A=d,U===null&&(I=null,H=0,Hs()),i}function Wb(){for(;U!==null;)uu(U)}function Fb(t,l){var e=L;L|=2;var a=ru(),s=nu();I!==t||H!==l?(pd=null,md=Gt()+500,ga(t,l)):ua=$a(t,l);t:do try{if(Q!==0&&U!==null){l=U;var d=Zt;l:switch(Q){case 1:Q=0,Zt=null,ma(t,l,d,1);break;case 2:case 9:if(yr(d)){Q=0,Zt=null,cu(l);break}l=function(){Q!==2&&Q!==9||I!==t||(Q=7),xl(t)},d.then(l,l);break t;case 3:Q=7;break t;case 4:Q=5;break t;case 7:yr(d)?(Q=0,Zt=null,cu(l)):(Q=0,Zt=null,ma(t,l,d,7));break;case 5:var i=null;switch(U.tag){case 26:i=U.memoizedState;case 5:case 27:var o=U;if(i?Pu(i):o.stateNode.complete){Q=0,Zt=null;var r=o.sibling;if(r!==null)U=r;else{var b=o.return;b!==null?(U=b,vd(b)):U=null}break l}}Q=0,Zt=null,ma(t,l,d,5);break;case 6:Q=0,Zt=null,ma(t,l,d,6);break;case 8:M0(),ut=6;break t;default:throw Error(p(462))}}tg();break}catch(f){iu(t,f)}while(!0);return Sl=Te=null,v.H=a,v.A=s,L=e,U!==null?0:(I=null,H=0,Hs(),ut)}function tg(){for(;U!==null&&!Tc();)uu(U)}function uu(t){var l=Rn(t.alternate,t,Ul);t.memoizedProps=t.pendingProps,l===null?vd(t):U=l}function cu(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Mn(e,l,l.pendingProps,l.type,void 0,H);break;case 11:l=Mn(e,l,l.pendingProps,l.type.render,l.ref,H);break;case 5:Yi(l);default:Nn(e,l),l=U=rr(l,Ul),l=Rn(e,l,Ul)}t.memoizedProps=t.pendingProps,l===null?vd(t):U=l}function ma(t,l,e,a){Sl=Te=null,Yi(l),aa=null,ja=0;var s=l.return;try{if(Lb(t,s,l,e,H)){ut=1,dd(t,ll(e,t.current)),U=null;return}}catch(d){if(s!==null)throw U=s,d;ut=1,dd(t,ll(e,t.current)),U=null;return}l.flags&32768?(j||a===1?t=!0:ua||(H&536870912)!==0?t=!1:(le=t=!0,(a===2||a===9||a===3||a===6)&&(a=Qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),bu(l,t)):vd(l)}function vd(t){var l=t;do{if((l.flags&32768)!==0){bu(l,le);return}t=l.return;var e=Qb(l.alternate,l,Ul);if(e!==null){U=e;return}if(l=l.sibling,l!==null){U=l;return}U=l=t}while(l!==null);ut===0&&(ut=5)}function bu(t,l){do{var e=Xb(t.alternate,t);if(e!==null){e.flags&=32767,U=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){U=t;return}U=t=e}while(t!==null);ut=6,U=null}function gu(t,l,e,a,s,d,i,o,r){t.cancelPendingCommit=null;do yd();while(yt!==0);if((L&6)!==0)throw Error(p(327));if(l!==null){if(l===t.current)throw Error(p(177));if(d=l.lanes|l.childLanes,d|=xi,Dc(t,e,d,i,o,r),t===I&&(U=I=null,H=0),ba=l,se=t,Nl=e,S0=d,B0=s,eu=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sg(ks,function(){return vu(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,s=k.p,k.p=2,i=L,L|=4;try{Zb(t,l,e)}finally{L=i,k.p=s,v.T=a}}yt=1,mu(),pu(),fu()}}function mu(){if(yt===1){yt=0;var t=se,l=ba,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=v.T,v.T=null;var a=k.p;k.p=2;var s=L;L|=4;try{Jn(l,t);var d=q0,i=Fo(t.containerInfo),o=d.focusedElem,r=d.selectionRange;if(i!==o&&o&&o.ownerDocument&&Wo(o.ownerDocument.documentElement,o)){if(r!==null&&bi(o)){var b=r.start,f=r.end;if(f===void 0&&(f=b),"selectionStart"in o)o.selectionStart=b,o.selectionEnd=Math.min(f,o.value.length);else{var y=o.ownerDocument||document,g=y&&y.defaultView||window;if(g.getSelection){var m=g.getSelection(),$=o.textContent.length,A=Math.min(r.start,$),K=r.end===void 0?A:Math.min(r.end,$);!m.extend&&A>K&&(i=K,K=A,A=i);var u=Io(o,A),n=Io(o,K);if(u&&n&&(m.rangeCount!==1||m.anchorNode!==u.node||m.anchorOffset!==u.offset||m.focusNode!==n.node||m.focusOffset!==n.offset)){var c=y.createRange();c.setStart(u.node,u.offset),m.removeAllRanges(),A>K?(m.addRange(c),m.extend(n.node,n.offset)):(c.setEnd(n.node,n.offset),m.addRange(c))}}}}for(y=[],m=o;m=m.parentNode;)m.nodeType===1&&y.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<y.length;o++){var x=y[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Vd=!!G0,q0=G0=null}finally{L=s,k.p=a,v.T=e}}t.current=l,yt=2}}function pu(){if(yt===2){yt=0;var t=se,l=ba,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=v.T,v.T=null;var a=k.p;k.p=2;var s=L;L|=4;try{wn(t,l.alternate,l)}finally{L=s,k.p=a,v.T=e}}yt=3}}function fu(){if(yt===4||yt===3){yt=0,Cc();var t=se,l=ba,e=Nl,a=eu;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?yt=5:(yt=0,ba=se=null,xu(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(ae=null),Zd(e),l=l.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(ka,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=v.T,s=k.p,k.p=2,v.T=null;try{for(var d=t.onRecoverableError,i=0;i<a.length;i++){var o=a[i];d(o.value,{componentStack:o.stack})}}finally{v.T=l,k.p=s}}(Nl&3)!==0&&yd(),xl(t),s=t.pendingLanes,(e&261930)!==0&&(s&42)!==0?t===A0?es++:(es=0,A0=t):es=0,as(0)}}function xu(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Ha(l)))}function yd(){return mu(),pu(),fu(),vu()}function vu(){if(yt!==5)return!1;var t=se,l=S0;S0=0;var e=Zd(Nl),a=v.T,s=k.p;try{k.p=32>e?32:e,v.T=null,e=B0,B0=null;var d=se,i=Nl;if(yt=0,ba=se=null,Nl=0,(L&6)!==0)throw Error(p(331));var o=L;if(L|=4,Fn(d.current),Pn(d,d.current,i,e),L=o,as(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(ka,d)}catch{}return!0}finally{k.p=s,v.T=a,xu(t,l)}}function yu(t,l,e){l=ll(e,l),l=d0(t.stateNode,l,2),t=Il(t,l,2),t!==null&&(Ta(t,2),xl(t))}function X(t,l,e){if(t.tag===3)yu(t,t,e);else for(;l!==null;){if(l.tag===3){yu(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ae===null||!ae.has(a))){t=ll(e,t),e=hn(2),a=Il(l,e,2),a!==null&&(kn(e,a,l,t),Ta(a,2),xl(a));break}}l=l.return}}function z0(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new Pb;var s=new Set;a.set(l,s)}else s=a.get(l),s===void 0&&(s=new Set,a.set(l,s));s.has(e)||($0=!0,s.add(e),t=lg.bind(null,t,l,e),l.then(t,t))}function lg(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,I===t&&(H&e)===e&&(ut===4||ut===3&&(H&62914560)===H&&300>Gt()-gd?(L&2)===0&&ga(t,0):T0|=e,ca===H&&(ca=0)),xl(t)}function hu(t,l){l===0&&(l=go()),t=he(t,l),t!==null&&(Ta(t,l),xl(t))}function eg(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),hu(t,e)}function ag(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,s=t.memoizedState;s!==null&&(e=s.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(l),hu(t,e)}function sg(t,l){return wd(t,l)}var hd=null,pa=null,V0=!1,kd=!1,E0=!1,ie=0;function xl(t){t!==pa&&t.next===null&&(pa===null?hd=pa=t:pa=pa.next=t),kd=!0,V0||(V0=!0,ig())}function as(t,l){if(!E0&&kd){E0=!0;do for(var e=!1,a=hd;a!==null;){if(t!==0){var s=a.pendingLanes;if(s===0)var d=0;else{var i=a.suspendedLanes,o=a.pingedLanes;d=(1<<31-Lt(42|t)+1)-1,d&=s&~(i&~o),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(e=!0,Cu(a,d))}else d=H,d=Ss(a,a===I?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(d&3)===0||$a(a,d)||(e=!0,Cu(a,d));a=a.next}while(e);E0=!1}}function dg(){ku()}function ku(){kd=V0=!1;var t=0;ie!==0&&fg()&&(t=ie);for(var l=Gt(),e=null,a=hd;a!==null;){var s=a.next,d=$u(a,l);d===0?(a.next=null,e===null?hd=s:e.next=s,s===null&&(pa=e)):(e=a,(t!==0||(d&3)!==0)&&(kd=!0)),a=s}yt!==0&&yt!==5||as(t),ie!==0&&(ie=0)}function $u(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,s=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var i=31-Lt(d),o=1<<i,r=s[i];r===-1?((o&e)===0||(o&a)!==0)&&(s[i]=Ec(o,l)):r<=l&&(t.expiredLanes|=o),d&=~o}if(l=I,e=H,e=Ss(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(Q===2||Q===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Yd(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||$a(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Yd(a),Zd(e)){case 2:case 8:e=co;break;case 32:e=ks;break;case 268435456:e=bo;break;default:e=ks}return a=Tu.bind(null,t),e=wd(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Yd(a),t.callbackPriority=2,t.callbackNode=null,2}function Tu(t,l){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(yd()&&t.callbackNode!==e)return null;var a=H;return a=Ss(t,t===I?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(su(t,a,l),$u(t,Gt()),t.callbackNode!=null&&t.callbackNode===e?Tu.bind(null,t):null)}function Cu(t,l){if(yd())return null;su(t,l,!0)}function ig(){vg(function(){(L&6)!==0?wd(uo,dg):ku()})}function D0(){if(ie===0){var t=ta;t===0&&(t=$s,$s<<=1,($s&261888)===0&&($s=256)),ie=t}return ie}function Su(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Os(""+t)}function Bu(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function og(t,l,e,a,s){if(l==="submit"&&e&&e.stateNode===s){var d=Su((s[Dt]||null).action),i=a.submitter;i&&(l=(l=i[Dt]||null)?Su(l.formAction):i.getAttribute("formAction"),l!==null&&(d=l,i=null));var o=new Ds("action","action",null,a,s);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ie!==0){var r=i?Bu(s,i):new FormData(s);Fi(e,{pending:!0,data:r,method:s.method,action:d},null,r)}}else typeof d=="function"&&(o.preventDefault(),r=i?Bu(s,i):new FormData(s),Fi(e,{pending:!0,data:r,method:s.method,action:d},d,r))},currentTarget:s}]})}}for(var R0=0;R0<fi.length;R0++){var U0=fi[R0],rg=U0.toLowerCase(),ng=U0[0].toUpperCase()+U0.slice(1);nl(rg,"on"+ng)}nl(er,"onAnimationEnd"),nl(ar,"onAnimationIteration"),nl(sr,"onAnimationStart"),nl("dblclick","onDoubleClick"),nl("focusin","onFocus"),nl("focusout","onBlur"),nl(Sb,"onTransitionRun"),nl(Bb,"onTransitionStart"),nl(Ab,"onTransitionCancel"),nl(dr,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss));function Au(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],s=a.event;a=a.listeners;t:{var d=void 0;if(l)for(var i=a.length-1;0<=i;i--){var o=a[i],r=o.instance,b=o.currentTarget;if(o=o.listener,r!==d&&s.isPropagationStopped())break t;d=o,s.currentTarget=b;try{d(s)}catch(f){Ns(f)}s.currentTarget=null,d=r}else for(i=0;i<a.length;i++){if(o=a[i],r=o.instance,b=o.currentTarget,o=o.listener,r!==d&&s.isPropagationStopped())break t;d=o,s.currentTarget=b;try{d(s)}catch(f){Ns(f)}s.currentTarget=null,d=r}}}}function N(t,l){var e=l[Jd];e===void 0&&(e=l[Jd]=new Set);var a=t+"__bubble";e.has(a)||(Mu(l,t,2,!1),e.add(a))}function N0(t,l,e){var a=0;l&&(a|=4),Mu(e,t,a,l)}var $d="_reactListening"+Math.random().toString(36).slice(2);function H0(t){if(!t[$d]){t[$d]=!0,ho.forEach(function(e){e!=="selectionchange"&&(ug.has(e)||N0(e,!1,t),N0(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[$d]||(l[$d]=!0,N0("selectionchange",!1,l))}}function Mu(t,l,e,a){switch(ac(l)){case 2:var s=_g;break;case 8:s=jg;break;default:s=W0}e=s.bind(null,l,e,t),s=void 0,!ai||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(s=!0),a?s!==void 0?t.addEventListener(l,e,{capture:!0,passive:s}):t.addEventListener(l,e,!0):s!==void 0?t.addEventListener(l,e,{passive:s}):t.addEventListener(l,e,!1)}function _0(t,l,e,a,s){var d=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var o=a.stateNode.containerInfo;if(o===s)break;if(i===4)for(i=a.return;i!==null;){var r=i.tag;if((r===3||r===4)&&i.stateNode.containerInfo===s)return;i=i.return}for(;o!==null;){if(i=He(o),i===null)return;if(r=i.tag,r===5||r===6||r===26||r===27){a=d=i;continue t}o=o.parentNode}}a=a.return}Eo(function(){var b=d,f=li(e),y=[];t:{var g=ir.get(t);if(g!==void 0){var m=Ds,$=t;switch(t){case"keypress":if(Vs(e)===0)break t;case"keydown":case"keyup":m=ab;break;case"focusin":$="focus",m=oi;break;case"focusout":$="blur",m=oi;break;case"beforeblur":case"afterblur":m=oi;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ib;break;case er:case ar:case sr:m=Jc;break;case dr:m=rb;break;case"scroll":case"scrollend":m=wc;break;case"wheel":m=ub;break;case"copy":case"cut":case"paste":m=Pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ho;break;case"toggle":case"beforetoggle":m=bb}var A=(l&4)!==0,K=!A&&(t==="scroll"||t==="scrollend"),u=A?g!==null?g+"Capture":null:g;A=[];for(var n=b,c;n!==null;){var x=n;if(c=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||c===null||u===null||(x=Ba(n,u),x!=null&&A.push(ds(n,x,c))),K)break;n=n.return}0<A.length&&(g=new m(g,$,null,e,f),y.push({event:g,listeners:A}))}}if((l&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",g&&e!==ti&&($=e.relatedTarget||e.fromElement)&&(He($)||$[Ne]))break t;if((m||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,m?($=e.relatedTarget||e.toElement,m=b,$=$?He($):null,$!==null&&(K=E($),A=$.tag,$!==K||A!==5&&A!==27&&A!==6)&&($=null)):(m=null,$=b),m!==$)){if(A=Uo,x="onMouseLeave",u="onMouseEnter",n="mouse",(t==="pointerout"||t==="pointerover")&&(A=Ho,x="onPointerLeave",u="onPointerEnter",n="pointer"),K=m==null?g:Sa(m),c=$==null?g:Sa($),g=new A(x,n+"leave",m,e,f),g.target=K,g.relatedTarget=c,x=null,He(f)===b&&(A=new A(u,n+"enter",$,e,f),A.target=c,A.relatedTarget=K,x=A),K=x,m&&$)l:{for(A=cg,u=m,n=$,c=0,x=u;x;x=A(x))c++;x=0;for(var S=n;S;S=A(S))x++;for(;0<c-x;)u=A(u),c--;for(;0<x-c;)n=A(n),x--;for(;c--;){if(u===n||n!==null&&u===n.alternate){A=u;break l}u=A(u),n=A(n)}A=null}else A=null;m!==null&&Ou(y,g,m,A,!1),$!==null&&K!==null&&Ou(y,K,$,A,!0)}}t:{if(g=b?Sa(b):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var G=Qo;else if(wo(g))if(Xo)G=$b;else{G=hb;var T=yb}else m=g.nodeName,!m||m.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?b&&Fd(b.elementType)&&(G=Qo):G=kb;if(G&&(G=G(t,b))){Yo(y,G,e,f);break t}T&&T(t,g,b),t==="focusout"&&b&&g.type==="number"&&b.memoizedProps.value!=null&&Wd(g,"number",g.value)}switch(T=b?Sa(b):window,t){case"focusin":(wo(T)||T.contentEditable==="true")&&(Xe=T,gi=b,Ra=null);break;case"focusout":Ra=gi=Xe=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,tr(y,e,f);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":tr(y,e,f)}var D;if(ni)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else Qe?qo(t,e)&&(_="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(_="onCompositionStart");_&&(_o&&e.locale!=="ko"&&(Qe||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qe&&(D=Do()):(Yl=f,si="value"in Yl?Yl.value:Yl.textContent,Qe=!0)),T=Td(b,_),0<T.length&&(_=new No(_,t,null,e,f),y.push({event:_,listeners:T}),D?_.data=D:(D=Lo(e),D!==null&&(_.data=D)))),(D=mb?pb(t,e):fb(t,e))&&(_=Td(b,"onBeforeInput"),0<_.length&&(T=new No("onBeforeInput","beforeinput",null,e,f),y.push({event:T,listeners:_}),T.data=D)),og(y,t,b,e,f)}Au(y,l)})}function ds(t,l,e){return{instance:t,listener:l,currentTarget:e}}function Td(t,l){for(var e=l+"Capture",a=[];t!==null;){var s=t,d=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||d===null||(s=Ba(t,e),s!=null&&a.unshift(ds(t,s,d)),s=Ba(t,l),s!=null&&a.push(ds(t,s,d))),t.tag===3)return a;t=t.return}return[]}function cg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ou(t,l,e,a,s){for(var d=l._reactName,i=[];e!==null&&e!==a;){var o=e,r=o.alternate,b=o.stateNode;if(o=o.tag,r!==null&&r===a)break;o!==5&&o!==26&&o!==27||b===null||(r=b,s?(b=Ba(e,d),b!=null&&i.unshift(ds(e,b,r))):s||(b=Ba(e,d),b!=null&&i.push(ds(e,b,r)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var bg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function zu(t){return(typeof t=="string"?t:""+t).replace(bg,`
`).replace(gg,"")}function Vu(t,l){return l=zu(l),zu(t)===l}function J(t,l,e,a,s,d){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Le(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Le(t,""+a);break;case"className":As(t,"class",a);break;case"tabIndex":As(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":As(t,e,a);break;case"style":zo(t,a,d);break;case"data":if(l!=="object"){As(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Os(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(e==="formAction"?(l!=="input"&&J(t,l,"name",s.name,s,null),J(t,l,"formEncType",s.formEncType,s,null),J(t,l,"formMethod",s.formMethod,s,null),J(t,l,"formTarget",s.formTarget,s,null)):(J(t,l,"encType",s.encType,s,null),J(t,l,"method",s.method,s,null),J(t,l,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Os(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=kl);break;case"onScroll":a!=null&&N("scroll",t);break;case"onScrollEnd":a!=null&&N("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(e=a.__html,e!=null){if(s.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Os(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":N("beforetoggle",t),N("toggle",t),Bs(t,"popover",a);break;case"xlinkActuate":hl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":hl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":hl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":hl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":hl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":hl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":hl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":hl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":hl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Bs(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=qc.get(e)||e,Bs(t,e,a))}}function j0(t,l,e,a,s,d){switch(e){case"style":zo(t,a,d);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(e=a.__html,e!=null){if(s.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Le(t,a):(typeof a=="number"||typeof a=="bigint")&&Le(t,""+a);break;case"onScroll":a!=null&&N("scroll",t);break;case"onScrollEnd":a!=null&&N("scrollend",t);break;case"onClick":a!=null&&(t.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),l=e.slice(2,s?e.length-7:void 0),d=t[Dt]||null,d=d!=null?d[e]:null,typeof d=="function"&&t.removeEventListener(l,d,s),typeof a=="function")){typeof d!="function"&&d!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,s);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Bs(t,e,a)}}}function Ot(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":N("error",t),N("load",t);var a=!1,s=!1,d;for(d in e)if(e.hasOwnProperty(d)){var i=e[d];if(i!=null)switch(d){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,l));default:J(t,l,d,i,e,null)}}s&&J(t,l,"srcSet",e.srcSet,e,null),a&&J(t,l,"src",e.src,e,null);return;case"input":N("invalid",t);var o=d=i=s=null,r=null,b=null;for(a in e)if(e.hasOwnProperty(a)){var f=e[a];if(f!=null)switch(a){case"name":s=f;break;case"type":i=f;break;case"checked":r=f;break;case"defaultChecked":b=f;break;case"value":d=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(p(137,l));break;default:J(t,l,a,f,e,null)}}Bo(t,d,o,r,b,i,s,!1);return;case"select":N("invalid",t),a=i=d=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":d=o;break;case"defaultValue":i=o;break;case"multiple":a=o;default:J(t,l,s,o,e,null)}l=d,e=i,t.multiple=!!a,l!=null?qe(t,!!a,l,!1):e!=null&&qe(t,!!a,e,!0);return;case"textarea":N("invalid",t),d=s=a=null;for(i in e)if(e.hasOwnProperty(i)&&(o=e[i],o!=null))switch(i){case"value":a=o;break;case"defaultValue":s=o;break;case"children":d=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:J(t,l,i,o,e,null)}Mo(t,a,s,d);return;case"option":for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],a!=null))switch(r){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:J(t,l,r,a,e,null)}return;case"dialog":N("beforetoggle",t),N("toggle",t),N("cancel",t),N("close",t);break;case"iframe":case"object":N("load",t);break;case"video":case"audio":for(a=0;a<ss.length;a++)N(ss[a],t);break;case"image":N("error",t),N("load",t);break;case"details":N("toggle",t);break;case"embed":case"source":case"link":N("error",t),N("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in e)if(e.hasOwnProperty(b)&&(a=e[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,l));default:J(t,l,b,a,e,null)}return;default:if(Fd(l)){for(f in e)e.hasOwnProperty(f)&&(a=e[f],a!==void 0&&j0(t,l,f,a,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(a=e[o],a!=null&&J(t,l,o,a,e,null))}function mg(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,d=null,i=null,o=null,r=null,b=null,f=null;for(m in e){var y=e[m];if(e.hasOwnProperty(m)&&y!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":r=y;default:a.hasOwnProperty(m)||J(t,l,m,null,a,y)}}for(var g in a){var m=a[g];if(y=e[g],a.hasOwnProperty(g)&&(m!=null||y!=null))switch(g){case"type":d=m;break;case"name":s=m;break;case"checked":b=m;break;case"defaultChecked":f=m;break;case"value":i=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,l));break;default:m!==y&&J(t,l,g,m,a,y)}}Id(t,i,o,r,b,f,d,s);return;case"select":m=i=o=g=null;for(d in e)if(r=e[d],e.hasOwnProperty(d)&&r!=null)switch(d){case"value":break;case"multiple":m=r;default:a.hasOwnProperty(d)||J(t,l,d,null,a,r)}for(s in a)if(d=a[s],r=e[s],a.hasOwnProperty(s)&&(d!=null||r!=null))switch(s){case"value":g=d;break;case"defaultValue":o=d;break;case"multiple":i=d;default:d!==r&&J(t,l,s,d,a,r)}l=o,e=i,a=m,g!=null?qe(t,!!e,g,!1):!!a!=!!e&&(l!=null?qe(t,!!e,l,!0):qe(t,!!e,e?[]:"",!1));return;case"textarea":m=g=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:J(t,l,o,null,a,s)}for(i in a)if(s=a[i],d=e[i],a.hasOwnProperty(i)&&(s!=null||d!=null))switch(i){case"value":g=s;break;case"defaultValue":m=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:s!==d&&J(t,l,i,s,a,d)}Ao(t,g,m);return;case"option":for(var $ in e)if(g=e[$],e.hasOwnProperty($)&&g!=null&&!a.hasOwnProperty($))switch($){case"selected":t.selected=!1;break;default:J(t,l,$,null,a,g)}for(r in a)if(g=a[r],m=e[r],a.hasOwnProperty(r)&&g!==m&&(g!=null||m!=null))switch(r){case"selected":t.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:J(t,l,r,g,a,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in e)g=e[A],e.hasOwnProperty(A)&&g!=null&&!a.hasOwnProperty(A)&&J(t,l,A,null,a,g);for(b in a)if(g=a[b],m=e[b],a.hasOwnProperty(b)&&g!==m&&(g!=null||m!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,l));break;default:J(t,l,b,g,a,m)}return;default:if(Fd(l)){for(var K in e)g=e[K],e.hasOwnProperty(K)&&g!==void 0&&!a.hasOwnProperty(K)&&j0(t,l,K,void 0,a,g);for(f in a)g=a[f],m=e[f],!a.hasOwnProperty(f)||g===m||g===void 0&&m===void 0||j0(t,l,f,g,a,m);return}}for(var u in e)g=e[u],e.hasOwnProperty(u)&&g!=null&&!a.hasOwnProperty(u)&&J(t,l,u,null,a,g);for(y in a)g=a[y],m=e[y],!a.hasOwnProperty(y)||g===m||g==null&&m==null||J(t,l,y,g,a,m)}function Eu(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var s=e[a],d=s.transferSize,i=s.initiatorType,o=s.duration;if(d&&o&&Eu(i)){for(i=0,o=s.responseEnd,a+=1;a<e.length;a++){var r=e[a],b=r.startTime;if(b>o)break;var f=r.transferSize,y=r.initiatorType;f&&Eu(y)&&(r=r.responseEnd,i+=f*(r<o?1:(o-b)/(r-b)))}if(--a,l+=8*(d+i)/(s.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var G0=null,q0=null;function Cd(t){return t.nodeType===9?t:t.ownerDocument}function Du(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ru(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function L0(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var w0=null;function fg(){var t=window.event;return t&&t.type==="popstate"?t===w0?!1:(w0=t,!0):(w0=null,!1)}var Uu=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(t){return Nu.resolve(null).then(t).catch(yg)}:Uu;function yg(t){setTimeout(function(){throw t})}function oe(t){return t==="head"}function Hu(t,l){var e=l,a=0;do{var s=e.nextSibling;if(t.removeChild(e),s&&s.nodeType===8)if(e=s.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(s),ya(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")is(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,is(e);for(var d=e.firstChild;d;){var i=d.nextSibling,o=d.nodeName;d[Ca]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&d.rel.toLowerCase()==="stylesheet"||e.removeChild(d),d=i}}else e==="body"&&is(t.ownerDocument.body);e=s}while(e);ya(l)}function _u(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function Y0(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Y0(e),Kd(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function hg(t,l,e,a){for(;t.nodeType===1;){var s=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ca])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var d=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=il(t.nextSibling),t===null)break}return null}function kg(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=il(t.nextSibling),t===null))return null;return t}function ju(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=il(t.nextSibling),t===null))return null;return t}function Q0(t){return t.data==="$?"||t.data==="$~"}function X0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $g(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function il(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Z0=null;function Gu(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return il(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function qu(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Lu(t,l,e){switch(l=Cd(e),t){case"html":if(t=l.documentElement,!t)throw Error(p(452));return t;case"head":if(t=l.head,!t)throw Error(p(453));return t;case"body":if(t=l.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function is(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Kd(t)}var ol=new Map,wu=new Set;function Sd(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Hl=k.d;k.d={f:Tg,r:Cg,D:Sg,C:Bg,L:Ag,m:Mg,X:zg,S:Og,M:Vg};function Tg(){var t=Hl.f(),l=fd();return t||l}function Cg(t){var l=_e(t);l!==null&&l.tag===5&&l.type==="form"?dn(l):Hl.r(t)}var fa=typeof document>"u"?null:document;function Yu(t,l,e){var a=fa;if(a&&typeof l=="string"&&l){var s=Ft(l);s='link[rel="'+t+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),wu.has(s)||(wu.add(s),t={rel:t,crossOrigin:e,href:l},a.querySelector(s)===null&&(l=a.createElement("link"),Ot(l,"link",t),$t(l),a.head.appendChild(l)))}}function Sg(t){Hl.D(t),Yu("dns-prefetch",t,null)}function Bg(t,l){Hl.C(t,l),Yu("preconnect",t,l)}function Ag(t,l,e){Hl.L(t,l,e);var a=fa;if(a&&t&&l){var s='link[rel="preload"][as="'+Ft(l)+'"]';l==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+Ft(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+Ft(e.imageSizes)+'"]')):s+='[href="'+Ft(t)+'"]';var d=s;switch(l){case"style":d=xa(t);break;case"script":d=va(t)}ol.has(d)||(t=M({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),ol.set(d,t),a.querySelector(s)!==null||l==="style"&&a.querySelector(os(d))||l==="script"&&a.querySelector(rs(d))||(l=a.createElement("link"),Ot(l,"link",t),$t(l),a.head.appendChild(l)))}}function Mg(t,l){Hl.m(t,l);var e=fa;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",s='link[rel="modulepreload"][as="'+Ft(a)+'"][href="'+Ft(t)+'"]',d=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=va(t)}if(!ol.has(d)&&(t=M({rel:"modulepreload",href:t},l),ol.set(d,t),e.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(rs(d)))return}a=e.createElement("link"),Ot(a,"link",t),$t(a),e.head.appendChild(a)}}}function Og(t,l,e){Hl.S(t,l,e);var a=fa;if(a&&t){var s=je(a).hoistableStyles,d=xa(t);l=l||"default";var i=s.get(d);if(!i){var o={loading:0,preload:null};if(i=a.querySelector(os(d)))o.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":l},e),(e=ol.get(d))&&J0(t,e);var r=i=a.createElement("link");$t(r),Ot(r,"link",t),r._p=new Promise(function(b,f){r.onload=b,r.onerror=f}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Bd(i,l,a)}i={type:"stylesheet",instance:i,count:1,state:o},s.set(d,i)}}}function zg(t,l){Hl.X(t,l);var e=fa;if(e&&t){var a=je(e).hoistableScripts,s=va(t),d=a.get(s);d||(d=e.querySelector(rs(s)),d||(t=M({src:t,async:!0},l),(l=ol.get(s))&&K0(t,l),d=e.createElement("script"),$t(d),Ot(d,"link",t),e.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(s,d))}}function Vg(t,l){Hl.M(t,l);var e=fa;if(e&&t){var a=je(e).hoistableScripts,s=va(t),d=a.get(s);d||(d=e.querySelector(rs(s)),d||(t=M({src:t,async:!0,type:"module"},l),(l=ol.get(s))&&K0(t,l),d=e.createElement("script"),$t(d),Ot(d,"link",t),e.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(s,d))}}function Qu(t,l,e,a){var s=(s=ql.current)?Sd(s):null;if(!s)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=xa(e.href),e=je(s).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=xa(e.href);var d=je(s).hoistableStyles,i=d.get(t);if(i||(s=s.ownerDocument||s,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,i),(d=s.querySelector(os(t)))&&!d._p&&(i.instance=d,i.state.loading=5),ol.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ol.set(t,e),d||Eg(s,t,e,i.state))),l&&a===null)throw Error(p(528,""));return i}if(l&&a!==null)throw Error(p(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=va(e),e=je(s).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function xa(t){return'href="'+Ft(t)+'"'}function os(t){return'link[rel="stylesheet"]['+t+"]"}function Xu(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function Eg(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ot(l,"link",e),$t(l),t.head.appendChild(l))}function va(t){return'[src="'+Ft(t)+'"]'}function rs(t){return"script[async]"+t}function Zu(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+Ft(e.href)+'"]');if(a)return l.instance=a,$t(a),a;var s=M({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),$t(a),Ot(a,"style",s),Bd(a,e.precedence,t),l.instance=a;case"stylesheet":s=xa(e.href);var d=t.querySelector(os(s));if(d)return l.state.loading|=4,l.instance=d,$t(d),d;a=Xu(e),(s=ol.get(s))&&J0(a,s),d=(t.ownerDocument||t).createElement("link"),$t(d);var i=d;return i._p=new Promise(function(o,r){i.onload=o,i.onerror=r}),Ot(d,"link",a),l.state.loading|=4,Bd(d,e.precedence,t),l.instance=d;case"script":return d=va(e.src),(s=t.querySelector(rs(d)))?(l.instance=s,$t(s),s):(a=e,(s=ol.get(d))&&(a=M({},e),K0(a,s)),t=t.ownerDocument||t,s=t.createElement("script"),$t(s),Ot(s,"link",a),t.head.appendChild(s),l.instance=s);case"void":return null;default:throw Error(p(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Bd(a,e.precedence,t));return l.instance}function Bd(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,d=s,i=0;i<a.length;i++){var o=a[i];if(o.dataset.precedence===l)d=o;else if(d!==s)break}d?d.parentNode.insertBefore(t,d.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function J0(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function K0(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Ad=null;function Ju(t,l,e){if(Ad===null){var a=new Map,s=Ad=new Map;s.set(e,a)}else s=Ad,a=s.get(e),a||(a=new Map,s.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),s=0;s<e.length;s++){var d=e[s];if(!(d[Ca]||d[St]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var i=d.getAttribute(l)||"";i=t+i;var o=a.get(i);o?o.push(d):a.set(i,[d])}}return a}function Ku(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function Dg(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Pu(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rg(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=xa(a.href),d=l.querySelector(os(s));if(d){l=d._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Md.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=d,$t(d);return}d=l.ownerDocument||l,a=Xu(a),(s=ol.get(s))&&J0(a,s),d=d.createElement("link"),$t(d);var i=d;i._p=new Promise(function(o,r){i.onload=o,i.onerror=r}),Ot(d,"link",a),e.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Md.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var P0=0;function Ug(t,l){return t.stylesheets&&t.count===0&&zd(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&zd(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+l);0<t.imgBytes&&P0===0&&(P0=62500*pg());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zd(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>P0?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Md(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Od=null;function zd(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Od=new Map,l.forEach(Ng,t),Od=null,Md.call(t))}function Ng(t,l){if(!(l.state.loading&4)){var e=Od.get(t);if(e)var a=e.get(null);else{e=new Map,Od.set(t,e);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<s.length;d++){var i=s[d];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}s=l.instance,i=s.getAttribute("data-precedence"),d=e.get(i)||a,d===a&&e.set(null,s),e.set(i,s),this.count++,a=Md.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),d?d.parentNode.insertBefore(s,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),l.state.loading|=4}}var ns={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Hg(t,l,e,a,s,d,i,o,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qd(0),this.hiddenUpdates=Qd(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=d,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Iu(t,l,e,a,s,d,i,o,r,b,f,y){return t=new Hg(t,l,e,i,r,b,f,y,o),l=1,d===!0&&(l|=24),d=Yt(3,null,null,l),t.current=d,d.stateNode=t,l=Oi(),l.refCount++,t.pooledCache=l,l.refCount++,d.memoizedState={element:a,isDehydrated:e,cache:l},Di(d),t}function Wu(t){return t?(t=Ke,t):Ke}function Fu(t,l,e,a,s,d){s=Wu(s),a.context===null?a.context=s:a.pendingContext=s,a=Pl(l),a.payload={element:e},d=d===void 0?null:d,d!==null&&(a.callback=d),e=Il(t,a,l),e!==null&&(jt(e,t,l),qa(e,t,l))}function tc(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function I0(t,l){tc(t,l),(t=t.alternate)&&tc(t,l)}function lc(t){if(t.tag===13||t.tag===31){var l=he(t,67108864);l!==null&&jt(l,t,67108864),I0(t,67108864)}}function ec(t){if(t.tag===13||t.tag===31){var l=Kt();l=Xd(l);var e=he(t,l);e!==null&&jt(e,t,l),I0(t,l)}}var Vd=!0;function _g(t,l,e,a){var s=v.T;v.T=null;var d=k.p;try{k.p=2,W0(t,l,e,a)}finally{k.p=d,v.T=s}}function jg(t,l,e,a){var s=v.T;v.T=null;var d=k.p;try{k.p=8,W0(t,l,e,a)}finally{k.p=d,v.T=s}}function W0(t,l,e,a){if(Vd){var s=F0(a);if(s===null)_0(t,l,a,Ed,e),sc(t,a);else if(qg(s,t,l,e,a))a.stopPropagation();else if(sc(t,a),l&4&&-1<Gg.indexOf(t)){for(;s!==null;){var d=_e(s);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var i=pe(d.pendingLanes);if(i!==0){var o=d;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var r=1<<31-Lt(i);o.entanglements[1]|=r,i&=~r}xl(d),(L&6)===0&&(md=Gt()+500,as(0))}}break;case 31:case 13:o=he(d,2),o!==null&&jt(o,d,2),fd(),I0(d,2)}if(d=F0(a),d===null&&_0(t,l,a,Ed,e),d===s)break;s=d}s!==null&&a.stopPropagation()}else _0(t,l,a,null,e)}}function F0(t){return t=li(t),to(t)}var Ed=null;function to(t){if(Ed=null,t=He(t),t!==null){var l=E(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=W(l),t!==null)return t;t=null}else if(e===31){if(t=gt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Ed=t,null}function ac(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sc()){case uo:return 2;case co:return 8;case ks:case Bc:return 32;case bo:return 268435456;default:return 32}default:return 32}}var lo=!1,re=null,ne=null,ue=null,us=new Map,cs=new Map,ce=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sc(t,l){switch(t){case"focusin":case"focusout":re=null;break;case"dragenter":case"dragleave":ne=null;break;case"mouseover":case"mouseout":ue=null;break;case"pointerover":case"pointerout":us.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(l.pointerId)}}function bs(t,l,e,a,s,d){return t===null||t.nativeEvent!==d?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:d,targetContainers:[s]},l!==null&&(l=_e(l),l!==null&&lc(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,s!==null&&l.indexOf(s)===-1&&l.push(s),t)}function qg(t,l,e,a,s){switch(l){case"focusin":return re=bs(re,t,l,e,a,s),!0;case"dragenter":return ne=bs(ne,t,l,e,a,s),!0;case"mouseover":return ue=bs(ue,t,l,e,a,s),!0;case"pointerover":var d=s.pointerId;return us.set(d,bs(us.get(d)||null,t,l,e,a,s)),!0;case"gotpointercapture":return d=s.pointerId,cs.set(d,bs(cs.get(d)||null,t,l,e,a,s)),!0}return!1}function dc(t){var l=He(t.target);if(l!==null){var e=E(l);if(e!==null){if(l=e.tag,l===13){if(l=W(e),l!==null){t.blockedOn=l,vo(t.priority,function(){ec(e)});return}}else if(l===31){if(l=gt(e),l!==null){t.blockedOn=l,vo(t.priority,function(){ec(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dd(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=F0(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);ti=a,e.target.dispatchEvent(a),ti=null}else return l=_e(e),l!==null&&lc(l),t.blockedOn=e,!1;l.shift()}return!0}function ic(t,l,e){Dd(t)&&e.delete(l)}function Lg(){lo=!1,re!==null&&Dd(re)&&(re=null),ne!==null&&Dd(ne)&&(ne=null),ue!==null&&Dd(ue)&&(ue=null),us.forEach(ic),cs.forEach(ic)}function Rd(t,l){t.blockedOn===l&&(t.blockedOn=null,lo||(lo=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Lg)))}var Ud=null;function oc(t){Ud!==t&&(Ud=t,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Ud===t&&(Ud=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],s=t[l+2];if(typeof a!="function"){if(to(a||e)===null)continue;break}var d=_e(e);d!==null&&(t.splice(l,3),l-=3,Fi(d,{pending:!0,data:s,method:e.method,action:a},a,s))}}))}function ya(t){function l(r){return Rd(r,t)}re!==null&&Rd(re,t),ne!==null&&Rd(ne,t),ue!==null&&Rd(ue,t),us.forEach(l),cs.forEach(l);for(var e=0;e<ce.length;e++){var a=ce[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ce.length&&(e=ce[0],e.blockedOn===null);)dc(e),e.blockedOn===null&&ce.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var s=e[a],d=e[a+1],i=s[Dt]||null;if(typeof d=="function")i||oc(e);else if(i){var o=null;if(d&&d.hasAttribute("formAction")){if(s=d,i=d[Dt]||null)o=i.formAction;else if(to(s)!==null)continue}else o=i.action;typeof o=="function"?e[a+1]=o:(e.splice(a,3),a-=3),oc(e)}}}function rc(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(i){return s=i})},focusReset:"manual",scroll:"manual"})}function l(){s!==null&&(s(),s=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),s!==null&&(s(),s=null)}}}function eo(t){this._internalRoot=t}Nd.prototype.render=eo.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(p(409));var e=l.current,a=Kt();Fu(e,a,t,l,null,null)},Nd.prototype.unmount=eo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;Fu(t.current,2,null,t,null,null),fd(),l[Ne]=null}};function Nd(t){this._internalRoot=t}Nd.prototype.unstable_scheduleHydration=function(t){if(t){var l=xo();t={blockedOn:null,target:t,priority:l};for(var e=0;e<ce.length&&l!==0&&l<ce[e].priority;e++);ce.splice(e,0,t),e===0&&dc(t)}};var nc=P.version;if(nc!=="19.2.0")throw Error(p(527,nc,"19.2.0"));k.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=vt(l),t=t!==null?ht(t):null,t=t===null?null:t.stateNode,t};var wg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hd.isDisabled&&Hd.supportsFiber)try{ka=Hd.inject(wg),qt=Hd}catch{}}return ms.createRoot=function(t,l){if(!R(t))throw Error(p(299));var e=!1,a="",s=fn,d=xn,i=vn;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(d=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=Iu(t,1,!1,null,null,e,a,null,s,d,i,rc),t[Ne]=l.current,H0(t),new eo(l)},ms.hydrateRoot=function(t,l,e){if(!R(t))throw Error(p(299));var a=!1,s="",d=fn,i=xn,o=vn,r=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(d=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(r=e.formState)),l=Iu(t,1,!0,l,e??null,a,s,r,d,i,o,rc),l.context=Wu(null),e=l.current,a=Kt(),a=Xd(a),s=Pl(a),s.callback=null,Il(e,s,a),e=a,l.current.lanes=e,Ta(l,e),xl(l),t[Ne]=l.current,H0(t),new Nd(l)},ms.version="19.2.0",ms}var pc;function Fg(){if(pc)return so.exports;pc=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(P){console.error(P)}}return h(),so.exports=Wg(),so.exports}var tm=Fg();const lm=Zg(tm),em="modulepreload",am=function(h,P){return new URL(h,P).href},fc={},sm=function(P,tt,p){let R=Promise.resolve();if(tt&&tt.length>0){let W=function(ht){return Promise.all(ht.map(M=>Promise.resolve(M).then(F=>({status:"fulfilled",value:F}),F=>({status:"rejected",reason:F}))))};const gt=document.getElementsByTagName("link"),dt=document.querySelector("meta[property=csp-nonce]"),vt=(dt==null?void 0:dt.nonce)||(dt==null?void 0:dt.getAttribute("nonce"));R=W(tt.map(ht=>{if(ht=am(ht,p),ht in fc)return;fc[ht]=!0;const M=ht.endsWith(".css"),F=M?'[rel="stylesheet"]':"";if(!!p)for(let B=gt.length-1;B>=0;B--){const w=gt[B];if(w.href===ht&&(!M||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${ht}"]${F}`))return;const ot=document.createElement("link");if(ot.rel=M?"stylesheet":em,M||(ot.as="script"),ot.crossOrigin="",ot.href=ht,vt&&ot.setAttribute("nonce",vt),document.head.appendChild(ot),M)return new Promise((B,w)=>{ot.addEventListener("load",B),ot.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${ht}`)))})}))}function E(W){const gt=new Event("vite:preloadError",{cancelable:!0});if(gt.payload=W,window.dispatchEvent(gt),!gt.defaultPrevented)throw W}return R.then(W=>{for(const gt of W||[])gt.status==="rejected"&&E(gt.reason);return P().catch(E)})};var O=(h=>(h.BASICS="期权基础 (Option Basics)",h.BULLISH="看涨策略 (Bullish)",h.BEARISH="看跌策略 (Bearish)",h.NEUTRAL="盘整/中性策略 (Neutral)",h.VOLATILITY="高波动策略 (Volatility)",h.INCOME="收益/对冲策略 (Income/Hedge)",h))(O||{});const dm={id:"option-basics",name:"期权基础 (Option Basics)",category:O.BASICS,description:"理解期权的核心概念、希腊字母以及四种基础交易形态。",setup:"基础知识",riskProfile:"取决于具体持仓",idealScenario:"学习与入门",legs:[],detailedAnalysis:{explanation:`
        <h4 class="font-bold text-slate-900 mt-4 mb-3 text-xl">什么是期权？</h4>
        <p class="mb-4 leading-relaxed">期权（Options）是一种金融衍生工具，它<strong>赋予持有人在未来特定时间（到期日）以特定价格（行权价）买入或卖出某种资产的权利，但并非义务</strong>。这是期权与期货最本质的区别——期货必须履约，而期权可以选择性行权。</p>
        
        <p class="mb-4 leading-relaxed">简单来说，期权就像一份「可选的合约」：</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-slate-700">
          <li><strong>买方</strong>支付一笔费用（权利金），获得「选择权」</li>
          <li><strong>卖方</strong>收取权利金，承担「履约义务」</li>
          <li>到期时，买方可以选择行权或放弃，卖方必须配合</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p class="text-sm text-blue-900"><strong>📌 通俗例子</strong>：假设你看中一套房子，目前100万。你支付5万定金给房东，约定3个月内可以用100万买下这套房。3个月后：</p>
          <ul class="list-disc pl-5 mt-2 text-sm text-blue-800 space-y-1">
            <li>如果房价涨到120万，你选择行权，以100万买入，净赚15万</li>
            <li>如果房价跌到80万，你选择不买，只损失5万定金</li>
          </ul>
          <p class="text-sm text-blue-900 mt-2">这个定金就是<strong>权利金</strong>，100万就是<strong>行权价</strong>，3个月就是<strong>到期日</strong>。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-8 mb-3 text-xl">核心要素详解</h4>
        
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-lg p-5">
            <h5 class="font-bold text-lg text-slate-900 mb-2">1. Call vs Put（看涨 vs 看跌）</h5>
            <div class="grid md:grid-cols-2 gap-4 mt-3">
              <div class="bg-green-50 p-4 rounded border border-green-200">
                <div class="font-bold text-green-700 mb-2">📈 Call（看涨期权）</div>
                <p class="text-sm text-slate-700 mb-2">赋予买方在未来<strong>以约定价格买入资产</strong>的权利。</p>
                <p class="text-xs text-slate-600"><strong>场景</strong>：你认为BTC会从$100,000涨到$120,000，买入行权价$100,000的Call，权利金约$5,000（ATM月权约为现价5%）。若真涨到$120,000，行权后内在价值为$20,000（=$120,000−$100,000），扣除已支付的$5,000权利金，净赚约$15,000。</p>
              </div>
              <div class="bg-red-50 p-4 rounded border border-red-200">
                <div class="font-bold text-red-700 mb-2">📉 Put（看跌期权）</div>
                <p class="text-sm text-slate-700 mb-2">赋予买方在未来<strong>以约定价格卖出资产</strong>的权利。</p>
                <p class="text-xs text-slate-600"><strong>场景</strong>：你认为BTC会从$100,000跌到$80,000，买入行权价$100,000的Put，权利金约$5,000（ATM月权约为现价5%）。若真跌到$80,000，行权后内在价值为$20,000（=$100,000−$80,000），扣除已支付的$5,000权利金，净赚约$15,000。</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-lg p-5">
            <h5 class="font-bold text-lg text-slate-900 mb-2">2. Strike（行权价）</h5>
            <p class="text-slate-700 mb-3">行权价是期权合约中约定的买卖价格。根据行权价与当前市场价格的关系，期权分为三种状态：</p>
            <div class="space-y-2">
              <div class="flex items-start gap-3">
                <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">ITM</span>
                <div class="flex-1">
                  <strong class="text-slate-900">实值 (In-The-Money)</strong>
                  <p class="text-sm text-slate-600">Call的行权价 < 市价，或 Put的行权价 > 市价。具有内在价值，行权就能赚钱。</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">ATM</span>
                <div class="flex-1">
                  <strong class="text-slate-900">平值 (At-The-Money)</strong>
                  <p class="text-sm text-slate-600">行权价 ≈ 市价。流动性最好，时间价值最高，是最常交易的期权。</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded">OTM</span>
                <div class="flex-1">
                  <strong class="text-slate-900">虚值 (Out-of-The-Money)</strong>
                  <p class="text-sm text-slate-600">Call的行权价 > 市价，或 Put的行权价 < 市价。无内在价值，仅有时间价值，价格便宜但需要更大的价格波动才能盈利。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-lg p-5">
            <h5 class="font-bold text-lg text-slate-900 mb-2">3. Expiration（到期日）</h5>
            <p class="text-slate-700 mb-2">期权的有效期限。<strong>时间就是期权的生命</strong>，越临近到期日，期权的时间价值衰减越快。</p>
            <div class="bg-amber-50 border border-amber-200 rounded p-3 mt-2">
              <p class="text-sm text-amber-900"><strong>⏰ 时间衰减规律</strong>：临近到期时时间价值衰减明显加速——最后30天的单日衰减速度(Theta)远高于早期阶段。这就是为什么卖方喜欢卖短期期权（赚Theta），买方更倾向买长期期权（避免快速衰减）。</p>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-lg p-5">
            <h5 class="font-bold text-lg text-slate-900 mb-2">4. Premium（权利金）</h5>
            <p class="text-slate-700 mb-3">权利金是期权的价格，由<strong>内在价值 + 时间价值</strong>组成：</p>
            <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li><strong>内在价值</strong>：如果现在行权能赚多少（实值期权才有，虚值期权为0）</li>
              <li><strong>时间价值</strong>：市场对未来价格波动的预期（所有期权都有，越接近到期越小）</li>
            </ul>
            <div class="bg-slate-50 p-3 rounded mt-3">
              <p class="text-xs text-slate-600"><strong>例</strong>：BTC现价$100,000，一个行权价$95,000的Call，权利金$7,000。其中内在价值=$5,000（$100k-$95k），时间价值=$2,000。</p>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-lg p-5">
            <h5 class="font-bold text-lg text-slate-900 mb-2">5. 买方 vs 卖方</h5>
            <div class="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <div class="font-bold text-emerald-700 mb-2">买方（Long）</div>
                <ul class="text-sm text-slate-700 space-y-1 list-disc pl-4">
                  <li>支付权利金</li>
                  <li>获得选择权</li>
                  <li>风险有限（最多损失权利金）</li>
                  <li>收益潜力大（甚至无限）</li>
                </ul>
              </div>
              <div>
                <div class="font-bold text-rose-700 mb-2">卖方（Short）</div>
                <ul class="text-sm text-slate-700 space-y-1 list-disc pl-4">
                  <li>收取权利金</li>
                  <li>承担履约义务</li>
                  <li>收益有限（最多赚权利金）</li>
                  <li>风险可能很大（裸卖风险无限）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border border-slate-200 rounded-lg p-5 mt-5">
          <h5 class="font-bold text-lg text-slate-900 mb-2">📈 三分钟学会看「盈亏图」</h5>
          <p class="text-slate-700 mb-3 text-sm">本站每个策略都有一张盈亏曲线图，看懂它就看懂了策略的全部脾气：</p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li><strong>横轴（X）</strong>：到期时 BTC 的价格，左边是跌、右边是涨。</li>
            <li><strong>纵轴（Y）</strong>：你这笔交易最终赚（线在 0 上方）还是亏（线在 0 下方）。</li>
            <li><strong>那条 0 水平线</strong>：盈亏分界。线穿过 0 的位置就是<strong>盈亏平衡点</strong>——价格到这才不赚不亏。</li>
            <li><strong>线变平的地方</strong>：说明盈亏被「锁死」了，平在上方=最大盈利封顶，平在下方=最大亏损封顶。</li>
            <li><strong>线一直往右上 / 右下斜不停</strong>：代表收益或亏损「无限」，没有封顶。</li>
          </ul>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded mt-3">
            <p class="text-xs text-blue-900">💡 一句话：<strong>线在 0 上方就是赚，越高赚越多；看线在哪拐弯、哪变平，就知道这个策略最多赚多少、最多亏多少。</strong></p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-8 mb-3 text-xl">希腊字母 (The Greeks) - 风险指标</h4>
        <p class="mb-4 text-slate-700">希腊字母是衡量期权风险和价值变化的核心指标。掌握它们是期权交易进阶的关键。</p>
        <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 rounded">
          <p class="text-sm text-emerald-900"><strong>🔰 新手只需先记 Delta（涨跌灵敏度）和 Theta（时间损耗）两个</strong>，其余（Gamma / Vega / Rho）看不懂可以先跳过，等熟悉了再展开下方的进阶折叠。</p>
        </div>
        
        <div class="space-y-4">
          <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="font-bold text-indigo-700 text-lg">Delta (Δ)</div>
              <span class="px-2 py-0.5 bg-indigo-200 text-indigo-800 text-xs rounded">方向敏感度</span>
            </div>
            <p class="text-slate-700 mb-2">衡量期权价格对标的资产价格变动的敏感度。范围：Call为0到1，Put为-1到0。</p>
            <div class="bg-white/50 rounded p-3 text-sm space-y-1">
              <p><strong>📊 实例</strong>：某Call的Delta=0.6，意味着BTC涨$1，该期权涨约$0.6。</p>
              <p><strong>🎯 应用</strong>：</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Delta=0.5的期权（ATM）被认为有50%概率到期时实值</li>
                <li>Delta可用于对冲：持有1 BTC + 卖出2个Delta=0.5的Call = Delta中性</li>
                <li>Delta会变化（这就是Gamma的作用）</li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="font-bold text-amber-700 text-lg">Theta (Θ)</div>
              <span class="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs rounded">时间衰减</span>
            </div>
            <p class="text-slate-700 mb-2">衡量每过一天期权损失多少价值。买方的敌人，卖方的朋友。</p>
            <div class="bg-white/50 rounded p-3 text-sm space-y-1">
              <p><strong>📊 实例</strong>：Theta=-50意味着如果其他条件不变，今天到明天这个期权会损失$50的时间价值。</p>
              <p><strong>⏰ 规律</strong>：</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>ATM期权的Theta最大（衰减最快）</li>
                <li>最后30天的单日衰减速度(Theta)远高于早期阶段</li>
                <li>周末和假期也在衰减（不交易但时间在流逝）</li>
              </ul>
              <p><strong>🎯 策略</strong>：卖方通过卖近月期权赚取Theta收入（收租策略）。</p>
            </div>
          </div>

          <details class="bg-white border border-slate-200 rounded-lg p-4">
            <summary class="font-bold text-slate-700 cursor-pointer">🔬 进阶：Gamma / Vega / Rho（新手可先跳过）</summary>
            <div class="space-y-4 mt-4">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                <div class="flex items-center gap-2 mb-2">
                  <div class="font-bold text-purple-700 text-lg">Gamma (Γ)</div>
                  <span class="px-2 py-0.5 bg-purple-200 text-purple-800 text-xs rounded">Delta的变化率</span>
                </div>
                <p class="text-slate-700 mb-2">衡量Delta对标的价格变动的敏感度，是Delta的"加速度"。</p>
                <div class="bg-white/50 rounded p-3 text-sm space-y-1">
                  <p><strong>📊 实例</strong>：Gamma=0.02意味着价格涨$1，Delta增加0.02。</p>
                  <p><strong>⚠️ 风险</strong>：ATM期权的Gamma最大，临近到期时Gamma暴增（Gamma爆炸），这对卖方极其危险。</p>
                  <p><strong>💡 策略</strong>：买方喜欢高Gamma（价格有利时赚得更快），卖方害怕高Gamma（方向敞口快速反向放大、临近到期的尾部风险）。</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
                <div class="flex items-center gap-2 mb-2">
                  <div class="font-bold text-green-700 text-lg">Vega (ν)</div>
                  <span class="px-2 py-0.5 bg-green-200 text-green-800 text-xs rounded">波动率敏感度</span>
                </div>
                <p class="text-slate-700 mb-2">衡量隐含波动率(IV)变化1%对期权价格的影响。</p>
                <div class="bg-white/50 rounded p-3 text-sm space-y-1">
                  <p><strong>📊 实例</strong>：Vega=200意味着IV涨1%，期权价格涨$200。</p>
                  <p><strong>💥 Vega Crush</strong>：重大事件（如减半、ETF决议）前IV飙升，事件后"利好/利空出尽"，IV暴跌导致期权价格崩盘，即使标的价格没什么变化。</p>
                  <p><strong>🎯 策略</strong>：</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>预期波动加剧 → 买入期权（Long Vega）</li>
                    <li>预期波动回落 → 卖出期权（Short Vega）</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-slate-50 to-gray-50 p-5 rounded-lg border border-slate-200">
                <div class="flex items-center gap-2 mb-2">
                  <div class="font-bold text-slate-700 text-lg">Rho (ρ)</div>
                  <span class="px-2 py-0.5 bg-slate-200 text-slate-800 text-xs rounded">利率敏感度</span>
                </div>
                <p class="text-slate-700 mb-2">衡量无风险利率变化对期权价格的影响。在加密市场中影响极小，通常可以忽略。</p>
                <div class="bg-white/50 rounded p-3 text-sm">
                  <p><strong>💡 说明</strong>：在传统金融市场（如股票期权），利率变化会影响持仓成本。加密市场虽没有类似美债利率的传统无风险利率基准，但期货相对现货的升贴水（隐含的持有成本）会被市场当作定价时的隐含利率代理，因此Rho的实际影响依然很小。注意这与永续合约的Funding Rate（资金费率）是两回事：后者是每8小时结算一次的多空资金转移机制，用于锚定现货价格，并不是被直接输入期权定价模型的利率参数，不应混为一谈。</p>
                </div>
              </div>
            </div>
          </details>
        </div>

        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 rounded mt-6">
          <p class="font-bold text-cyan-900 mb-2">🎓 进阶建议</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>新手先理解Delta和Theta，这是最直观的两个指标</li>
            <li>理解希腊字母之间的关系：Gamma影响Delta，Vega和Theta相互制约</li>
            <li>实盘前用期权计算器模拟不同场景下希腊字母的变化</li>
            <li>记住：买方做多Gamma和Vega，做空Theta；卖方相反</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-8 mb-3 text-xl">📊 波动率认知 (IV / HV / IV Rank)</h4>
        <p class="mb-4 text-slate-700">波动率是期权定价的灵魂。全站反复出现的「IV 高位适合收租、IV 低位适合买方」，背后就是下面这套判断工具。</p>
        <div class="space-y-4">
          <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-5 rounded-lg border border-violet-200">
            <div class="font-bold text-violet-700 text-lg mb-2">IV（隐含波动率）vs HV（历史波动率）</div>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li><strong>IV（Implied Volatility）</strong>：从期权价格「反推」出来的、市场对<strong>未来</strong>波动的预期。IV 越高，期权越贵。</li>
              <li><strong>HV（Historical Volatility）</strong>：标的<strong>过去</strong>真实走出来的波动幅度。</li>
              <li><strong>怎么用</strong>：IV 明显高于 HV，说明期权偏贵、市场在为未来定价恐慌，利于卖方；IV 低于 HV，说明期权偏便宜，利于买方。</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-indigo-50 to-violet-50 p-5 rounded-lg border border-indigo-200">
            <div class="font-bold text-indigo-700 text-lg mb-2">IV Rank / IV Percentile（决定你当买方还是卖方）</div>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li><strong>IV Rank</strong> = 当前 IV 在过去 N 天（通常一年）最低值~最高值区间里的相对位置（0~100 刻度）。算法：（当前−最低）÷（最高−最低）×100。例：区间 40%–120%、当前 60% → (60−40)÷(120−40)×100 ≈ 25。</li>
              <li><strong>IV Percentile</strong> = 过去 N 天里，IV 低于当前值的天数占比。</li>
              <li>两者都把抽象的「IV 高不高」变成 0–100 的可操作刻度。</li>
            </ul>
            <div class="bg-white/60 border-l-4 border-indigo-400 p-3 rounded mt-3">
              <p class="text-sm text-indigo-900"><strong>🎯 决策口诀</strong>：<strong>IV Rank &gt; 50 偏卖方</strong>（收租 / 价差 / 铁鹰，赚 IV 回落 + Theta）；<strong>IV Rank &lt; 30 偏买方</strong>（单腿 / 跨式 / 日历，赌 IV 上升 + 大波动）。</p>
            </div>
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p class="text-sm text-blue-900"><strong>📌 实例</strong>：BTC 当前 IV=60%，过去一年区间 40%–120% → IV Rank≈25，处于偏低位 → 倾向<strong>做买方</strong>（Long Call / Long Straddle），而不是 Short Strangle 这类卖方策略。</p>
            <p class="text-sm text-blue-900 mt-2"><strong>🧭 加密参考</strong>：Deribit 的 <strong>DVOL 指数</strong>就是 BTC 的「恐慌指数」，可直接当作 BTC 隐含波动率水位的风向标。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-8 mb-3 text-xl">⚙️ 加密期权 vs 传统股票期权（必读）</h4>
        <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-lg mb-4">
          <p class="text-sm text-orange-900"><strong>⚠️ 重要</strong>：本站用「买房定金→到期买下房子」作类比便于理解，但那是<strong>美式 + 实物交割</strong>的框架。Deribit / OKX / Bybit 等主流平台的 BTC 期权机制不同，下面五点必须先搞清。</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <p class="font-bold text-slate-900 mb-1">1. 欧式期权（无提前行权）</p>
            <p class="text-sm text-slate-700">只能在<strong>到期日</strong>行权，不存在「提前被行权 / 提前指派」。所以传统股票期权里关于「提前行权」的担忧，在主流加密期权里基本不适用。</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <p class="font-bold text-slate-900 mb-1">2. 现金交割（不交割实物）</p>
            <p class="text-sm text-slate-700">到期按交易所 BTC 指数（通常是最后 30 分钟 TWAP 均价）<strong>结算现金差额</strong>，<strong>不会真的买入/卖出 1 枚 BTC</strong>。传统「被指派后拿到/交出股票」在这里要换成「按现金差额结算」。</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <p class="font-bold text-slate-900 mb-1">3. 币本位 (inverse) vs USDC 线性 (linear)</p>
            <p class="text-sm text-slate-700">Deribit 经典 BTC 期权是<strong>币本位</strong>：权利金与盈亏都以 BTC 计价，换算成 USD 后曲线是<strong>非线性</strong>的。USDC 线性期权才是直观的 USD 盈亏。</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <p class="font-bold text-slate-900 mb-1">4. BTC IV 常态 40–80%</p>
            <p class="text-sm text-slate-700">远高于美股的 15–25%。所以一张 ATM 月权权利金约为现货的 5%（本站 premiumRatio≈0.05）是正常水平，不要觉得「太贵」。</p>
          </div>
        </div>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-4">
          <p class="text-sm text-amber-900"><strong>5. 7×24 无收盘、无熔断</strong>：加密市场全年无休、没有涨跌停和熔断机制，周末与节假日流动性枯竭时容易出现「插针 / 清算级联式跳空」。「市场永不收盘所以能随时止损」是错觉——真到瀑布行情时点差炸开、止损会严重滑点。</p>
        </div>
        <div class="bg-slate-100 border border-slate-300 rounded-lg p-4">
          <p class="text-xs text-slate-600"><strong>📐 盈亏图免责</strong>：本站所有盈亏图均为 <strong>USD 线性近似</strong>，对应 USDC 线性期权；若你交易的是 Deribit 币本位（inverse）期权，实际 USD 盈亏曲线会因币价变动而非线性偏移（尤其暴涨时空头的币本位亏损会被高币价放大）。</p>
        </div>
      `,pros:["非线性收益：利用杠杆实现小资金博取大收益。","多维交易：不仅可以交易方向，还可以交易波动率和时间。","风险管理：提供现货无法比拟的对冲保护功能。"],cons:["复杂性高：涉及多个变量（价格、时间、波动率），学习曲线陡峭。","时间损耗：买方每天面临时间价值的衰减。","流动性风险：部分深度虚值或远期合约可能缺乏流动性。"]}},im={id:"learning-path",name:"新手学习路径 (Learning Path)",category:O.BASICS,description:"不知道先学什么？跟着这条路循序渐进。",setup:"",riskProfile:"",idealScenario:"",legs:[],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
          <p class="font-bold text-indigo-900 mb-3">🧭 新手怎么学？跟着这条路走</p>
          <ol class="text-sm text-indigo-800 space-y-2 list-decimal pl-5">
            <li><strong>先打地基</strong>：读完「期权基础」，搞懂 Call/Put、行权价、权利金，以及怎么看盈亏图。</li>
            <li><strong>最简单的两招</strong>：Long Call（赌涨）、Long Put（赌跌）——风险有限、最好理解。</li>
            <li><strong>结合手里的币</strong>：Covered Call（收租）、Protective Put（买保险），把期权和现货连起来。</li>
            <li><strong>学会降成本</strong>：Bull Call Spread 等「价差」策略，用卖出腿补贴买入腿。</li>
            <li><strong>进阶玩法</strong>：中性收租（Iron Condor）→ 做多波动（Long Straddle）→ 裸卖/合成（高风险，最后碰）。</li>
          </ol>
          <p class="text-xs text-indigo-700 mt-3">⚠️ 别一上来就点四条腿的复杂策略，先把前两步吃透。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📚 难度梯度一览</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="space-y-2 text-sm">
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-slate-50 border border-slate-200 rounded p-3">
              <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded shrink-0">入门</span>
              <span class="text-slate-700">期权基础 → Long Call / Long Put（单腿买方，风险=权利金，最直观）。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-slate-50 border border-slate-200 rounded p-3">
              <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded shrink-0">基础</span>
              <span class="text-slate-700">Covered Call / Protective Put（与现货结合）→ Bull Call Spread / Bear Put Spread（两腿价差，降成本）。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-slate-50 border border-slate-200 rounded p-3">
              <span class="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded shrink-0">进阶</span>
              <span class="text-slate-700">Iron Condor（区间收租）→ Long Straddle / Strangle（做多波动率）。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-slate-50 border border-slate-200 rounded p-3">
              <span class="px-2 py-0.5 bg-rose-100 text-rose-700 text-xs font-bold rounded shrink-0">高风险</span>
              <span class="text-slate-700">裸卖（Naked Call）、合成（Synthetic）、比例价差——风险大、保证金复杂，最后再碰。</span>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 我该用哪个策略？</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="space-y-2 text-sm">
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-emerald-50 border border-emerald-200 rounded p-3">
              <span class="font-bold text-emerald-700 shrink-0">📈 我觉得要涨</span>
              <span class="text-slate-700">小涨用 <b>牛市看涨价差</b>（省成本）；坚定大涨用 <b>买入看涨</b>（收益无限）。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-rose-50 border border-rose-200 rounded p-3">
              <span class="font-bold text-rose-700 shrink-0">📉 我觉得要跌</span>
              <span class="text-slate-700">直接 <b>买入看跌</b>；想省成本用 <b>熊市看跌价差</b>。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-blue-50 border border-blue-200 rounded p-3">
              <span class="font-bold text-blue-700 shrink-0">😐 我觉得会震荡</span>
              <span class="text-slate-700">区间收租用 <b>铁鹰式</b> / <b>卖出宽跨式</b>（注意尾部风险）。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-violet-50 border border-violet-200 rounded p-3">
              <span class="font-bold text-violet-700 shrink-0">⚡ 要出大事但不知涨跌</span>
              <span class="text-slate-700">用 <b>买入跨式 / 宽跨式</b> 做多波动率。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-indigo-50 border border-indigo-200 rounded p-3">
              <span class="font-bold text-indigo-700 shrink-0">💰 我有币想收租</span>
              <span class="text-slate-700">持币卖 <b>备兑看涨</b>；想低价接币用 <b>现金担保看跌</b>；长期循环用 <b>轮子策略</b>。</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-start bg-cyan-50 border border-cyan-200 rounded p-3">
              <span class="font-bold text-cyan-700 shrink-0">🛡️ 我怕暴跌想保本</span>
              <span class="text-slate-700">给现货买 <b>保护性看跌</b>；想省保费用 <b>领口策略</b>。</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 mt-3">💡 心里先有一个「涨 / 跌 / 震荡 / 大波动 / 收租 / 保本」的判断，再回到左侧目录点开对应策略细看。</p>
        </div>
      `,pros:[],cons:[]}},om={id:"glossary",name:"术语速查 (Glossary)",category:O.BASICS,description:"看不懂术语？随时回这里查。",setup:"",riskProfile:"",idealScenario:"",legs:[],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-1">📖 一分钟术语速查</p>
          <p class="text-blue-800 text-sm">策略页里高频出现的黑话，这里一句话 + 一例讲清。看不懂随时回查。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🧱 基础概念</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6 space-y-3 text-sm text-slate-700">
          <p><span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded">权利金 Premium</span> 买期权付的钱 / 卖期权收的钱，就是期权的「价格」。</p>
          <p><span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded">行权价 Strike</span> 合约约定的买卖价格，盈亏图上所有拐点都和它有关。</p>
          <p><span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded">到期日 Expiry</span> 期权的有效期限。越临近到期，时间价值掉得越快。</p>
          <p><span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">ATM / OTM / ITM</span> 行权价离现价的远近：平值（≈现价）/ 虚值（便宜、无内在价值）/ 实值（贵、有内在价值）。</p>
          <p><span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">内在价值 / 时间价值</span> 权利金 = 内在价值（现在行权能赚多少，虚值为 0）+ 时间价值（对未来波动的预期，越临近到期越小）。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📐 希腊字母</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6 space-y-3 text-sm text-slate-700">
          <p><span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded">Delta</span> 币价动 1 块，期权大概动几毛——衡量「跟涨跟跌」的灵敏度（Call 0~1，Put -1~0）。</p>
          <p><span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded">Gamma</span> Delta 的变化率：把 Delta 看作期权价格随币价变动的「速度」，Gamma 就是「加速度」。ATM 且临近到期时最大。</p>
          <p><span class="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">Theta 时间损耗</span> 期权每天会「变质」掉一点价值，越临近到期掉得越快。买方亏、卖方赚。</p>
          <p><span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">Vega</span> 隐含波动率（IV）每变化 1%，期权价格变化多少。买方做多 Vega、卖方做空 Vega。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 波动率</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6 space-y-3 text-sm text-slate-700">
          <p><span class="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded">IV / HV</span> IV（隐含波动率）= 市场预期未来波动多大，IV 越高期权越贵；HV（历史波动率）= 过去真实走出来的波动。</p>
          <p><span class="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded">IV Rank</span> 当前 IV 在过去一年最低~最高区间里的相对位置（0~100）。口诀：&gt;50 偏卖方，&lt;30 偏买方。</p>
          <p><span class="px-2 py-0.5 bg-rose-100 text-rose-700 text-xs font-bold rounded">IV Crush</span> 重大事件（减半、ETF 决议）后「利好/利空出尽」，IV 暴跌使期权价格崩盘，即使币价没怎么动。</p>
          <p><span class="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs font-bold rounded">Skew 偏斜</span> 不同行权价的 IV 不一样：下行恐慌时 Put 更贵、牛市时 Call 更贵，是市场情绪的温度计。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💱 交易与交割</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-2 space-y-3 text-sm text-slate-700">
          <p><span class="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-bold rounded">净借记 / 净贷记</span> 建仓时净付钱叫净借记（Debit，如买入价差）；净收钱叫净贷记（Credit，如卖出价差/铁鹰）。</p>
          <p><span class="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-bold rounded">欧式 / 美式</span> 欧式只能到期日行权（加密主流）；美式可在到期前任意时点行权（部分传统期权）。</p>
          <p><span class="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-bold rounded">现金交割</span> 到期按交易所 BTC 指数结算现金差额，不交割实物 BTC（Deribit / OKX 等主流平台）。</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500">
          💡 想把这些概念背后的原理（平价公式、Skew、Pin Risk 等）讲透，请看「进阶概念 (Advanced Concepts)」。
        </div>
      `,pros:[],cons:[]}},rm={id:"advanced-concepts",name:"进阶概念 (Advanced Concepts)",category:O.BASICS,description:"把合成/盒式/日历背后的原理讲透。",setup:"",riskProfile:"",idealScenario:"",legs:[],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-slate-50 to-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
          <p class="text-indigo-900 font-semibold mb-1">🎓 这一页讲什么</p>
          <p class="text-indigo-800 text-sm">把站内合成、盒式、日历这些「看起来很玄」的策略背后的底层原理一次讲透：平价公式、波动率微笑/Skew、行权交割与 Pin Risk、波动率期限结构。读懂这一页，很多策略你会发现「原来是同一个东西换了个壳」。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚖️ 平价公式 (Put-Call Parity)：C − P = S − K</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-sm text-slate-700 mb-3">同到期、同行权价的 Call 与 Put，价格之间存在铁律般的关系（忽略利率时）：</p>
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3 text-center">
            <p class="text-lg font-bold text-indigo-700">C − P = S − K</p>
            <p class="text-xs text-indigo-600 mt-1">（C=Call 价格，P=Put 价格，S=现价，K=行权价；严格写法 C − P = S − K·e<sup>−rt</sup>）</p>
          </div>
          <p class="text-sm text-slate-700 mb-2">这条公式是下面这些策略的<strong>共同根基</strong>：</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
            <li><strong>合成多头 (Synthetic Long)</strong> = 买 Call + 卖 Put（同 K）→ 等价于直接持有现货（Delta≈1）。</li>
            <li><strong>合成空头 (Synthetic Short)</strong> = 卖 Call + 买 Put → 等价于做空现货。</li>
            <li><strong>盒式价差 (Box Spread)</strong> = 一个合成多头 + 一个合成空头（不同 K）→ 锁定无风险价差，本质是借贷工具。</li>
          </ul>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded mt-3">
            <p class="text-xs text-blue-900">💡 一旦记住「Call − Put = 现货 − 行权价」，合成/盒式就不再是孤立招式，而是同一块积木的不同拼法。若公式两边明显失衡，理论上存在套利空间（实盘会被手续费和点差吃掉）。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">😊 波动率微笑 / Skew（偏斜）</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-sm text-slate-700 mb-3">教科书假设所有行权价的 IV 相同，但真实市场不是——把不同行权价的 IV 画出来会形成一条曲线：</p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li><strong>波动率微笑 (Smile)</strong>：两端（深虚值）IV 高、中间（ATM）IV 低，形似微笑。</li>
            <li><strong>偏斜 (Skew)</strong>：当 Put 与 Call 的 IV 不对称时形成。加密市场 skew 极显著——<strong>下行恐慌期 Put 溢价、牛市 Call skew</strong>。</li>
            <li><strong>25-Delta Risk Reversal</strong>：用 25Δ Call 与 25Δ Put 的 IV 差读多空情绪，是行业衡量 skew 的基准；也是「风险逆转」策略近零成本的来源。</li>
          </ul>
          <div class="bg-violet-50 border-l-4 border-violet-400 p-3 rounded mt-3">
            <p class="text-xs text-violet-900">💡 OTM 期权为什么不能简单用 ATM 的 IV 来估值？因为 skew 的存在。风险逆转、比例价差、所有 OTM 定价都建立在 skew 之上。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📦 行权与交割：欧式 / 美式 / Pin Risk / 提前行权</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4 mb-3">
            <div class="bg-teal-50 p-4 rounded border border-teal-200">
              <p class="font-bold text-teal-700 mb-1">欧式 (European)</p>
              <p class="text-sm text-slate-700">只能在到期日行权。<strong>Deribit / OKX 等加密主流期权都是欧式</strong>——没有「提前被指派」的麻烦。</p>
            </div>
            <div class="bg-orange-50 p-4 rounded border border-orange-200">
              <p class="font-bold text-orange-700 mb-1">美式 (American)</p>
              <p class="text-sm text-slate-700">可在到期前任意时点行权。卖方面临<strong>提前行权风险</strong>（尤其临近分红/到期、深度实值时）。</p>
            </div>
          </div>
          <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li><strong>现金交割 vs 实物交割</strong>：加密主流为现金交割——到期按 BTC 指数（最后 30 分钟 TWAP）结算<strong>现金差额</strong>，不会真的交付/接收 1 枚 BTC。这就是为什么「现金担保接盘抄底」「被卖飞拿到现货」在 Deribit 上不会自动发生，需要到期后手动去现货市场衔接。</li>
            <li><strong>Pin Risk（钉住风险）</strong>：到期价正好压在行权价附近时，期权究竟算实值还是虚值变得不确定，指派/结算结果难以预判。欧式 + 现金交割（结算到指数均价）让 Pin Risk 大幅减弱，但 ATM 到期的尾盘价格抖动仍需留意。</li>
          </ul>
          <div class="bg-amber-50 border border-amber-300 rounded p-3 mt-3">
            <p class="text-xs text-amber-900">⚠️ 加密语境：Deribit = 欧式 + 现金结算 → Pin Risk 与提前行权基本不存在；但链上期权或部分支持美式/实物交割的合约仍需关注交易所规则与保证金。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📅 波动率期限结构 (Term Structure)</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-2">
          <p class="text-sm text-slate-700 mb-2">不同到期日的 IV 也不一样，连起来就是「期限结构」：</p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li><strong>正向（Contango）</strong>：远月 IV &gt; 近月 IV，市场预期未来更不确定（常态）。</li>
            <li><strong>倒挂（Backwardation）</strong>：近月 IV &gt; 远月 IV，通常出现在临近重大事件（FOMC、CPI、ETF 决议、减半、月/季度 opex）时——市场为眼前的不确定性付高价。</li>
            <li><strong>对策略的意义</strong>：日历价差（Calendar）、对角价差（Diagonal）正是在做多/做空这条期限结构的形状——买远月卖近月，赚近月更快的时间衰减 + 期限结构变化。</li>
          </ul>
          <div class="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded mt-3">
            <p class="text-xs text-indigo-900">💡 事件前期限结构可能倒挂；事件落地后近月 IV 往往「IV Crush」式塌缩。理解这一点，就能明白为什么日历策略在事件前后表现差异巨大。</p>
          </div>
        </div>
      `,pros:[],cons:[]}},nm=[dm,im,om,rm],um={id:"long-call",name:"买入看涨期权 (Long Call)",category:O.BULLISH,description:"用少量权利金博取上涨；风险封顶，收益随涨幅扩张。",setup:"买入 Call",riskProfile:"风险有限（最多亏权利金）；Theta 负、Vega 正；对快速上涨与 IV 上升敏感。",idealScenario:"短期强势上行；IV 处低位或事件前 IV 预期上升。",legs:[{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.03}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">买入看涨期权 (Long Call) 是最纯粹的杠杆做多工具。你用一小笔钱（权利金）博取BTC大涨的全部收益，下跌时损失有限。这是"以小博大"的经典策略。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3">只需一步：<strong>买入1份Call期权</strong></p>
          <div class="bg-slate-50 p-4 rounded">
            <p class="text-sm text-slate-600 mb-2"><strong>行权价选择的艺术：</strong></p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded shrink-0">ITM</span>
                <p class="text-sm text-slate-700">实值期权：价格贵，Delta高（0.7-0.9），几乎跟着现货涨跌，适合稳健型。</p>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded shrink-0">ATM</span>
                <p class="text-sm text-slate-700">平值期权：性价比最高，Delta=0.5，流动性好，新手首选。</p>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded shrink-0">OTM</span>
                <p class="text-sm text-slate-700">虚值期权：便宜，Delta低（0.2-0.4），杠杆极大但需要暴涨才能盈利，适合激进型。</p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">∞</div>
            <p class="text-xs text-slate-600">理论无限。BTC涨多少赚多少</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">权利金</div>
            <p class="text-xs text-slate-600">无论跌多少，只损失买期权的钱</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">Strike + Premium</div>
            <p class="text-xs text-slate-600">行权价 + 权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100,000，预期短期突破上行</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>买入操作：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入1份 $105,000 Call（OTM）</li>
              <li>支付权利金 $3,000</li>
              <li>盈亏平衡点 = $108,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 场景1：BTC涨到$120,000（+20%）</p>
              <p class="text-xs text-green-700 mt-1">期权内在价值 = $15,000，减去成本$3,000，<strong>净赚$12,000（400%回报）</strong></p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 场景2：BTC涨到$107,000（+7%）</p>
              <p class="text-xs text-yellow-700 mt-1">内在价值$2,000，仍低于$3,000成本，亏损$1,000；涨幅未覆盖权利金、未到$108,000盈亏平衡点（到期日无时间价值，故不归因Theta）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 场景3：BTC跌到$90,000（-10%）</p>
              <p class="text-xs text-red-700 mt-1">期权作废，损失全部$3,000权利金</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>预期BTC将在<strong>短期内大幅上涨</strong>（如突破关键阻力位）</li>
              <li>重大利好消息公布前夕（如ETF批准预期）</li>
              <li>技术形态显示即将向上突破（如三角形末端）</li>
              <li>资金有限但想参与牛市（杠杆效应）</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期慢牛缓涨（时间损耗会吃掉利润）</li>
              <li>横盘震荡行情（每天亏Theta）</li>
              <li>临近到期时买入（Gamma风险+Theta加速衰减）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>时间是敌人</strong>：每天都在损失Theta（时间价值），越临近到期衰减越快</li>
            <li><strong>波动率陷阱</strong>：重大事件前IV飙升导致期权很贵，事后Vega Crush可能血亏</li>
            <li><strong>杠杆双刃剑</strong>：现货涨10%不代表期权赚钱，要看行权价和剩余时间</li>
            <li><strong>流动性风险</strong>：太虚值或太远期的期权可能无法及时平仓</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>新手建议</strong>：从ATM期权开始，选择1-3个月到期的合约</li>
            <li><strong>仓位管理</strong>：用来买Call的钱不要超过总资金的10-20%</li>
            <li><strong>止损策略</strong>：权利金亏损50%以上考虑止损，别等到归零</li>
            <li><strong>滚动操作</strong>：盈利后可以部分止盈，剩余仓位滚动到更高行权价</li>
            <li><strong>配合技术分析</strong>：在关键支撑位附近买入，设置目标价位（如前高）</li>
          </ul>
        </div>
      `,pros:["收益无限：理论上上行空间没有封顶，可充分享受牛市红利。","风险锁定：最大亏损仅限于投入的权利金，不存在爆仓风险。","资金利用率高：利用杠杆效应，以少量资金控制大额BTC名义价值。"],cons:["时间损耗 (Theta)：期权价值随时间流逝而衰减，若BTC价格上涨缓慢或横盘，仍可能亏损。","胜率压力：不仅需要判断方向正确，还需涨幅足以覆盖权利金成本。"]},plainSummary:"花一笔小钱赌 BTC 要涨。涨了赚很多，跌了顶多把这笔小钱亏光，不会更多。",analogy:{emoji:"🎟️",title:"付定金锁房价",text:"就像看中一套房，先付一小笔定金把价格锁住：之后房价大涨，你照样按原价买进、转手就赚差价；房价大跌，你大不了不买，只损失那笔定金，不会更亏。"},pitfalls:['以为"币涨了就一定赚"——涨幅必须盖过权利金、突破盈亏平衡点才算真赚。',"贪便宜去买太虚值（OTM）的 Call，看着杠杆大，其实多半到期归零。","临近到期才买入，时间价值（Theta）掉得飞快，稍一犹豫权利金就蒸发。"],quickJudge:{use:"坚定看短期大涨、能承受归零",avoid:"横盘、慢牛、临近到期"},greeks:{delta:"+",gamma:"+",theta:"−",vega:"+"}},cm={id:"bull-call-spread",name:"牛市看涨价差 (Bull Call Spread)",category:O.BULLISH,description:"买低Call、卖高Call以降成本；用封顶收益换更高胜率与效率。",setup:"买入 Call A + 卖出 Call B (Strike B > A)",riskProfile:"风险有限（净成本）；收益有限（价差−成本）；Theta 略负、Vega 正但较弱。",idealScenario:"温和上涨至上腿附近；IV 偏低时建仓更有利（净借记成本更低，组合净 Vega 为正，后续 IV 回升更受益）。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">牛市看涨价差通过"买低卖高"降低成本，牺牲上方无限收益换取更高胜率。适合温和看涨行情。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入腿</p>
              <p class="text-sm text-slate-700">买入1份较低行权价Call</p>
              <p class="text-xs text-slate-600 mt-1">例：买入$100k Call，支付$5k</p>
            </div>
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出腿</p>
              <p class="text-sm text-slate-700">卖出1份较高行权价Call</p>
              <p class="text-xs text-slate-600 mt-1">例：卖出$110k Call，收取$2k</p>
            </div>
          </div>
          <p class="text-sm text-slate-600 mt-3"><strong>净成本</strong> = $5k - $2k = $3k（远低于单买Call）</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-lg font-bold text-green-700 mb-2">价差 - 成本</div>
            <p class="text-xs text-slate-600">$110k-$100k-$3k=$7k</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$3k</div>
            <p class="text-xs text-slate-600">净成本（跌破买入价）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$103k</div>
            <p class="text-xs text-slate-600">买入价+成本</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border border-purple-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期涨到$110k</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 涨到$110k：获得最大收益$7k（233%回报）</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 涨到$105k：赚$2k（67%回报），稳健盈利</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 跌到$95k：损失$3k，但比单买Call少亏</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-lg p-4">
            <p class="font-bold text-teal-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-teal-800 space-y-1 list-disc pl-5">
              <li>预期温和上涨（涨10-20%），有明确的目标价位</li>
              <li>隐含波动率处于低位，净借记成本更低，建仓性价比更高（借记价差宜在低 IV 入场）</li>
              <li>技术分析显示关键阻力位清晰（可作为卖出价）</li>
              <li>新手想体验期权价差策略，降低持仓成本</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期暴涨行情（收益被卖出腿封顶，错失超额利润）</li>
              <li>隐含波动率处于高位（净借记成本被推高，组合净 Vega 为正，IV 回落会侵蚀仓位价值）</li>
              <li>无明确目标价位（难以设定合理的卖出行权价）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>收益封顶风险</strong>：BTC突破卖出价后，无法享受超额收益，可能痛失大牛市</li>
            <li><strong>双腿流动性</strong>：需同时平仓两个期权，流动性差时可能有滑点损失</li>
            <li><strong>时间衰减不对称</strong>：虽然买卖期权都有Theta损耗，但卖出腿的收益有限，整体仍面临时间压力</li>
            <li><strong>行权与结算</strong>：主流 BTC 期权（如 Deribit）多为欧式、现金/现货结算，一般不存在提前行权问题；若使用支持美式行权的合约，则需关注对应交易所规则与保证金。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>行权价间隔</strong>：选择5-10%的strike间隔，平衡收益和胜率。间隔太小收益低，太大成本节省不明显</li>
            <li><strong>卖出价设定</strong>：将卖出Call的行权价设在关键阻力位（如前高、整数关口），技术上难以突破时收益最大化</li>
            <li><strong>到期时间选择</strong>：建议选择 30–60 天到期的合约，时间价值衰减（Theta）节奏适中，又能给价格留出足够上涨空间。</li>
            <li><strong>提前平仓</strong>：当价格接近卖出价且时间价值所剩不多时，考虑提前平仓，避免被行权的麻烦</li>
            <li><strong>滚动策略</strong>：盈利后可以平仓当前价差，滚动到更高价位的新价差，持续捕捉上涨趋势</li>
            <li><strong>Delta 对冲</strong>：整体Delta为正但小于1，可适当配合现货对冲，构建Delta中性组合</li>
          </ul>
        </div>
      `,pros:["成本优势：相比直接买入Call，该策略构建成本更低。","抗波动性：卖出腿对冲了部分Vega风险，受隐含波动率下降的影响较小。","胜率提升：较低的盈亏平衡点意味着价格只需小幅上涨即可获利。"],cons:["收益封顶：最大收益受限于两个行权价的差额，无法享受BTC暴涨带来的超额利润。","交易成本：涉及两笔期权交易，手续费相对较高。"]},plainSummary:"赌 BTC 会温和涨一点，但不指望它一飞冲天。你一边买入看涨、一边卖出一个更高价位的看涨来省下成本；涨到目标价就赚一笔有上限的钱，跌了顶多亏掉投入的那点小本金。",analogy:{emoji:"🏷️",title:'打折买的"看涨票"',text:'你看好 BTC 会涨，但单买一张看涨票太贵。于是你顺手把"万一暴涨"那一截收益提前卖给别人、换一笔钱来抵票价——相当于打了折买票。代价是真涨过头了，超出约定的那段跟你没关系，你只赚中间这一段差价。'},pitfalls:['误把它当单买看涨、指望暴涨发大财：收益早被卖出腿封顶，真来大牛市反而懊恼"少赚一大截"。','只盯着"币涨没涨"，忘了要涨过盈亏平衡点（约 $103k）才回本；涨幅盖不过净成本，照样是亏的。',"只平掉其中一条腿就走：剩下的裸腿风险敞口完全变了样，两条腿应一起了结，流动性差时还要留意点差与滑点。"],quickJudge:{use:"温和看涨，有明确目标价位",avoid:"押暴涨，或横盘、方向不明"},greeks:{delta:"+",gamma:"+",theta:"−",vega:"+"}},bm={id:"bull-put-spread",name:"牛市看跌价差 (Bull Put Spread)",category:O.BULLISH,description:"收权利金的看涨/不下跌策略；卖高Put收租、买低Put限损。",setup:"卖出 Put A + 买入 Put B (Strike A > B)",riskProfile:"风险有限（价差−净收）；收益有限（净收）；Theta 正、Vega 负；需保证金。",idealScenario:"上涨或横盘且不跌破卖出价；IV 高位更适合收租。",legs:[{type:"Put",action:"Sell",strikeOffset:.95,premiumRatio:.03},{type:"Put",action:"Buy",strikeOffset:.85,premiumRatio:.01}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">牛市看跌价差 (Bull Put Spread) 是一种<strong>信用价差 (Credit Spread)</strong> 策略。你在建仓时收钱，目标是让期权自然过期作废，从而保留全部权利金。这是一种"收租"式的看涨策略，适合不跌即赚的心态。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出腿（主力）</p>
              <p class="text-sm text-slate-700">卖出1份较高行权价的 Put</p>
              <p class="text-xs text-slate-600 mt-1">例：卖出 $95k Put，收取 $3k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入腿（保护）</p>
              <p class="text-sm text-slate-700">买入1份较低行权价的 Put</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 $85k Put，支付 $1k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入（Net Credit）</strong> = $3k - $1k = $2k</p>
            <p class="text-xs text-slate-600">这是你立即收到的现金，也是策略的最大潜在收益。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">$2k</div>
            <p class="text-xs text-slate-600">净权利金。BTC ≥ $95k 时全部保留</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$8k</div>
            <p class="text-xs text-slate-600">($95k-$85k)-$2k。BTC ≤ $85k 时触发</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$93k</div>
            <p class="text-xs text-slate-600">卖出价 - 净权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC现价 $100k，看不跌</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓操作：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>卖出1份 $95k Put（OTM 虚值），收 $3,000</li>
              <li>买入1份 $85k Put（更虚值），付 $1,000</li>
              <li>净收入 $2,000，立即到账</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 场景1：BTC涨到或维持在 $100k+</p>
              <p class="text-xs text-green-700 mt-1">两个Put都作废，保留全部 $2,000 权利金（达到最大收益）。期权不用行权，省心省事。</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 场景2：BTC微跌到 $98k</p>
              <p class="text-xs text-yellow-700 mt-1">Put仍未实值，继续保留 $2,000。只要不跌破 $95k 都安全。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 场景3：BTC暴跌到 $80k</p>
              <p class="text-xs text-red-700 mt-1">卖出的$95k Put被行权（亏$12k），但买入的$85k Put此时已实值提供保护（赚$4k），合计达到最大亏损 $8,000。若没有买入保护，单卖Put将亏 $12,000，损失更大。</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>预期<strong>看不跌</strong>（包括上涨、横盘、微跌），不需要大涨也能盈利</li>
              <li>隐含波动率偏高时卖出，能收取更高权利金</li>
              <li>有明确的支撑位，可作为卖出Put的行权价</li>
              <li>想做"期权房东"，通过卖期权收租金</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期BTC可能大幅下跌（盈亏比不划算，小赚大亏）</li>
              <li>市场恐慌情绪严重，支撑位不明确</li>
              <li>波动率处于极低位（权利金太少，风险收益比差）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>盈亏比不对称</strong>：最大盈利$2k vs 最大亏损$8k，需要维持高胜率（通常需要80%+）才能长期盈利</li>
            <li><strong>Theta Decay是双刃剑</strong>：时间流逝对你有利，但最后几天若价格在卖出价附近，Gamma爆炸会导致剧烈波动</li>
            <li><strong>黑天鹅风险</strong>：突发事件导致暴跌时，即使有买入保护，仍会面临最大亏损</li>
            <li><strong>保证金占用</strong>：卖出期权需要缴纳保证金，资金利用率不如纯买入策略</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>行权价选择</strong>：卖出Put设在关键支撑位下方5-10%，给自己足够的安全边际</li>
            <li><strong>价差宽度</strong>：常用5-10%的价差，平衡收益和风险。价差越宽，收的钱越多但风险也越大</li>
            <li><strong>到期时间</strong>：建议选30-45天到期合约，Theta decay效率最高且时间足够</li>
            <li><strong>仓位管理</strong>：单个价差的最大亏损不要超过总资金的2-3%，允许多次试错</li>
            <li><strong>提前平仓</strong>：当赚到权利金的50-70%时，考虑提前平仓锁定利润，降低尾部风险</li>
            <li><strong>滚动收租</strong>：到期获利后，立即开新仓，持续收租。月均收益目标可设为3-5%</li>
          </ul>
        </div>
      `,pros:["高胜率策略：只要BTC不出现大幅下跌（包括上涨、横盘、微跌），均可获利。","风险可控：买入的低价Put锁定了极端行情下的最大亏损。","时间价值受益：作为净卖方，时间流逝（Theta Decay）对策略有利。"],cons:["盈亏比限制：最大亏损通常大于最大盈利，需要维持高胜率以保证长期期望值为正。","上行无关：BTC的大幅上涨不会增加策略收益，仅能赚取固定的权利金。"]},plainSummary:"你赌 BTC 短期不会大跌，建仓时先收一笔钱进口袋。只要到期时它没跌破你设的那条线，这笔钱就白赚；真跌穿了才会亏，而且最多亏多少早就被锁死了。",analogy:{emoji:"🏦",title:"收保费的保险公司",text:'你像保险公司一样收一笔保费，承诺"BTC 跌破 95k 就赔付"；同时自己再花小钱买一份 85k 的再保险。平时风平浪静，保费净赚；真出大事故，再保险帮你把赔付封顶，不至于倾家荡产。'},pitfalls:['被"高胜率"冲昏头而重仓：单次最多赚 $2k、最多亏 $8k，一次跌穿就吃掉四次的利润，仓位过大会一夜亏回去。',"为多收权利金把卖出 Put 设得离现价太近：钱是收得多，但安全垫太薄，BTC 稍微一跌就被击穿。应把它放在支撑位下方、留足缓冲。","死扛到到期：价格在卖出价附近时尾盘波动会被放大，该在赚到权利金的 50-70% 时提前平仓锁利，而不是为最后一点钱硬扛尾部风险。"],quickJudge:{use:"看 BTC 不跌、想稳收权利金",avoid:"怕大跌、或波动率太低"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"}},gm={id:"synthetic-long",name:"合成多头 (Synthetic Long)",category:O.BULLISH,description:"买入Call + 卖出Put。模拟持有现货的损益曲线。",setup:"买入 ATM Call + 卖出 ATM Put",riskProfile:"风险收益几乎等同于持有1个BTC。",idealScenario:"看涨，且想用极低资金建立全额仓位。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.05}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">合成多头 (Synthetic Long) 通过<strong>买入Call + 卖出Put</strong>的组合，完美复制持有现货的损益曲线（Delta≈1）。<strong>必须使用同一到期日、同一行权价（通常 ATM）</strong>，否则不能精确复制现货曲线。这是一种极致的杠杆工具，让你用极少资金建立 1 BTC 的完整敞口。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>神奇的组合公式：</strong> Long Call + Short Put = Long Spot</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 ATM Call</p>
              <p class="text-sm text-slate-700">行权价 = 当前价格</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 $100k Call，付 $5k</p>
            </div>
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 ATM Put</p>
              <p class="text-sm text-slate-700">行权价 = 当前价格</p>
              <p class="text-xs text-slate-600 mt-1">例：卖出 $100k Put，收 $5k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本 ≈ $0</strong></p>
            <p class="text-xs text-slate-600">ATM Call和Put的权利金基本相等，相互抵消。你只需支付卖Put的保证金（通常是名义价值的10-20%）。</p>
            <p class="text-xs text-slate-600 mt-1">到期约定：<strong>两腿使用同一到期日</strong>；若需续持，建议在到期前 15–30 天滚动。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">收益特征</div>
            <div class="text-2xl font-bold text-green-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">BTC涨多少赚多少，与现货一致</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">风险特征</div>
            <div class="text-2xl font-bold text-red-700 mb-2">极大(有限)</div>
            <p class="text-xs text-slate-600">最大亏损≈$100k(BTC归零时)，与持有1 BTC现货完全一致，需追加保证金</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">Delta</div>
            <div class="text-2xl font-bold text-blue-700 mb-2">≈ 1.0</div>
            <p class="text-xs text-slate-600">与持有1 BTC现货等效</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，看大涨，资金有限</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓操作：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入1份 $100k Call，支付 $5,000</li>
              <li>卖出1份 $100k Put，收取 $5,000</li>
              <li>净成本 ≈ $0，仅需保证金 $10,000-$20,000</li>
            </ul>
          </div>
          <p class="text-xs text-slate-600 mb-3"><strong>对比</strong>：买1 BTC现货需要$100,000，而合成多头只需$10,000-$20,000保证金！</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ BTC涨到 $120k (+20%)</p>
              <p class="text-xs text-green-700 mt-1">Call净赚$15k($20k内在价值−$5k权利金)，卖出的Put作废留存$5k权利金，合计盈利$20k，与持有1 BTC收益一致</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ BTC横盘 $100k</p>
              <p class="text-xs text-yellow-700 mt-1">Call和Put都作废，盈亏为0（Theta互相抵消）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ BTC跌到 $80k (-20%)</p>
              <p class="text-xs text-red-700 mt-1">Put 被现金结算（经济效果≈以 $100k 接盘后又跌到 $80k）：Put 端收 $5k 权利金 − $20k 结算差额 = 净亏 $15k，加上 Call 亏掉的 $5k 权利金，合计亏损 $20k，需追加保证金。杠杆策略的风险！</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li><strong>极度看涨且资金有限</strong>：想建立满仓多头但现金不足</li>
              <li>机构对冲操作：在不动用现金的情况下快速建仓</li>
              <li>杠杆交易高手：能严格控制仓位和风险</li>
              <li>融资套利：借入低息资金做合成多头，赚取资金利率差</li>
            </ul>
          </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>风险承受能力低的新手（下跌需追保，可能爆仓）</li>
              <li>保证金不足的账户（一旦暴跌可能被强平）</li>
              <li>波动率极高的市场（保证金要求会大幅提高）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>爆仓风险极高</strong>：BTC暴跌时需追加巨额保证金，否则会被强制平仓</li>
            <li><strong>资金效率陷阱</strong>：虽然名义杠杆很高，但保证金要求会随波动率上升而增加</li>
            <li><strong>滚动风险</strong>：到期前需要滚仓，可能面临不利的价格和波动率变化</li>
            <li><strong>基差/资金费率风险</strong>：同一行权价的 Call 与 Put 由看跌-看涨平价共用同一 IV，多 Call 与空 Put 的 Vega 结构上精确抵消、净 Vega≈0；合成多头真正的残余暴露来自远期价格与资金费率基差（持有成本，类似 rho），而非 Skew——Skew 指 IV 随不同行权价的偏斜，与单一行权价的合成头寸无关</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>仓位控制</strong>：合成多头的名义价值不要超过总资金的3-5倍，给自己足够的安全垫</li>
            <li><strong>保证金储备</strong>：至少预留50%以上的初始保证金作为储备，应对不利波动</li>
            <li><strong>止损纪律</strong>：设定明确的止损线（如亏损10-15%），严格执行</li>
            <li><strong>选择流动性好的合约</strong>：确保能随时平仓，避免被套</li>
            <li><strong>监控Delta</strong>：定期检查组合Delta是否接近1，必要时调整</li>
            <li><strong>滚仓规划</strong>：临近到期前15-30天开始规划滚仓，避免最后时刻被动</li>
          </ul>
        </div>
      `,pros:["极高杠杆：无需全额资金即可获得1 BTC的名义敞口，大幅提高资金利用率。","Theta中性：ATM Call和Put的时间价值损耗相互抵消，理论上不受时间流逝影响。"],cons:["下行风险：与持有现货面临相同的下跌亏损风险，若价格大幅下跌需追加保证金。","爆仓风险：高杠杆意味着波动容忍度降低，需严格控制仓位以防爆仓。"]},plainSummary:"不掏 10 万买币，而是用期权拼出一个跟持有 1 个 BTC 几乎一模一样的仓位：涨了照样赚，跌了照样亏，只是占用的现金少得多。",analogy:{emoji:"🏠",title:"用首付撬动整套房",text:"全款买套房要 100 万，但你只付了首付（保证金）就拿到了整套房子的全部涨跌——房价涨你全赚，房价跌也全得你担，感受跟全款买房的人一模一样，只是先少掏了一大笔钱。"},pitfalls:['以为"净成本≈0就是不花钱、没风险"——其实下跌时和持有 1 个 BTC 一样亏，BTC 归零能亏掉整整 $100k，绝不是免费午餐。',"把保证金当成全部成本、仓位开太大——名义敞口是保证金的好几倍，BTC 稍微一跌就要追保，扛不住就被强平。","用不同行权价或不同到期日的 Call/Put 来拼——那就不再是合成多头了，损益曲线会跑偏（变成风险逆转或对角价差）。"],quickJudge:{use:"坚定看涨、想省现金建满仓",avoid:"扛不住下跌追保、保证金薄"},greeks:{delta:"+(强)",gamma:"≈0",theta:"≈0",vega:"≈0"},cryptoNote:"Deribit/OKX 主流 BTC 期权为欧式现金交割，到期不会真的买卖 1 枚 BTC，而是按结算差额现金交割。卖出的 Put 在 Deribit 要占用保证金，到期前就可能被增量强平：哪怕现货没动，IV 单独飙升也会推高空头的 mark price 触发追保；币本位计价时一旦暴跌，浮亏与抵押品缩水会双杀。务必把仓位开小、多留保证金缓冲。"},mm={id:"call-ratio-backspread",name:"看涨比例反向价差 (Call Ratio Backspread)",category:O.BULLISH,description:"卖出1份低价Call，买入2份高价Call。",setup:"卖出 1x ITM Call + 买入 2x OTM Call",riskProfile:"下行风险有限，上行收益无限（净持有约 1 份多头 Call 敞口）；最大亏损发生在买入腿行权价（$105k）附近，约 $9k。",idealScenario:"极度看涨，认为会有史诗级暴涨。",legs:[{type:"Call",action:"Sell",strikeOffset:.95,premiumRatio:.06},{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.025},{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.025}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">看涨比例反向价差是一种<strong>激进的暴涨策略</strong>。通过卖1买2（或1:3）的不对称比例，用卖出期权的收入购买更多虚值Call，在BTC暴涨时获得净多头 Call 敞口带来的放大收益（斜率约 1 倍，并非简单的 2 倍）。但有"死谷"风险，适合极度看涨且愿意承担复杂性的高手。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>比例魔法：1:2 或 1:3</strong></p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 1份 ITM/ATM Call</p>
              <p class="text-sm text-slate-700">行权价较低，权利金较高</p>
              <p class="text-xs text-slate-600 mt-1">例：卖出 $95k Call，收 $6k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 2份 OTM Call</p>
              <p class="text-sm text-slate-700">行权价较高，权利金较低</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 2×$105k Call，付 $5k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $5k - $6k = <strong>-$1k（净收入！）</strong></p>
            <p class="text-xs text-slate-600">理想情况下，这个策略可以实现零成本甚至净收入建仓。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">暴涨收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">∞</div>
            <p class="text-xs text-slate-600">净多约 1 份 Call，上不封顶（并非 2 倍斜率）</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">死谷风险</div>
            <div class="text-lg font-bold text-red-700 mb-2">有限但痛苦</div>
            <p class="text-xs text-slate-600">价格停在买入价时亏损最大</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">下跌保护</div>
            <div class="text-lg font-bold text-blue-700 mb-2">净权利金</div>
            <p class="text-xs text-slate-600">暴跌时反而赚钱（如果净收入）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期要暴涨</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓 1:2 Ratio:</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>卖出 1份 $95k Call，收 $6,000</li>
              <li>买入 2份 $105k Call，付 $2,500 × 2 = $5,000</li>
              <li>净收入 $1,000！</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ BTC暴涨到 $120k</p>
              <p class="text-xs text-green-700 mt-1">卖出腿内在亏 $25k，买入腿内在赚 $15k × 2 = $30k。净内在价值 +$5k，加净收入 $1k = 总盈利 <strong>$6k</strong>；价格越高收益越大（上行无限）。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 死谷：BTC涨到 $105k</p>
              <p class="text-xs text-red-700 mt-1">卖出腿亏 $10k，买入腿刚好平值作废。最大亏损 $9k（-$10k + $1k），这就是"Valley of Death"</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ BTC跌到 $90k</p>
              <p class="text-xs text-yellow-700 mt-1">所有Call作废，保留净收入 $1k。暴跌反而赚钱（虽然不多）</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>预期<strong>史诗级暴涨</strong>（如突破长期压力位，直冲新高）</li>
              <li>重大利好事件前（如ETF批准、减半后的超级牛市启动）</li>
              <li>隐含波动率偏低时建仓（买Call便宜且Vega有利）</li>
              <li>想用低成本甚至零成本博取暴涨收益</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期温和上涨（容易掉入死谷区）</li>
              <li>对比例策略不熟悉的新手（构建和管理复杂）</li>
              <li>临近到期时建仓（Gamma风险极大）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>死谷风险（Valley of Death）</strong>：价格停在买入Call的行权价附近时亏损最大，这是此策略的致命弱点</li>
            <li><strong>比例失衡风险</strong>：如果比例设置不当（如1:1.5），可能导致风险收益比不划算</li>
            <li><strong>Gamma爆炸</strong>：临近到期时，死谷区的Gamma极高，价格微小波动会导致盈亏剧烈变化</li>
            <li><strong>构建复杂度</strong>：需要精确计算两个行权价和比例，一旦出错损失巨大</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>比例选择</strong>：1:2 是最常见比例，平衡收益和风险。1:3 更激进但死谷更大</li>
            <li><strong>行权价间隔</strong>：两个行权价间隔10-15%。间隔越宽，死谷区越深（最大亏损 = 间隔 − 净权利金，随间隔增大而增大），但越容易构建成净收入；间隔越窄，死谷相对较浅，但越难做成净收入、容易变成净支出（构建成本更高）</li>
            <li><strong>零成本目标</strong>：尽量构建成净收入或零成本，这样即使暴跌也不亏钱</li>
            <li><strong>死谷监控</strong>：价格接近买入Call行权价时，考虑提前平仓或调整仓位</li>
            <li><strong>暴涨平仓</strong>：一旦暴涨盈利达50-100%，考虑分批止盈，别贪心等涨到天上</li>
            <li><strong>避免临期</strong>：至少选择60天以上到期的合约，避免Gamma风险</li>
          </ul>
        </div>
      `,pros:["低成本构建：若构建得当，可实现零成本甚至净权利金收入（Net Credit）。","暴涨潜力大：净持有约 1 份多头 Call 敞口，BTC 大涨时上不封顶（斜率约 1 倍，并非 2 倍）。","下行保护：若市场反向暴跌，仅损失构建成本或保留净权利金收益。"],cons:["死谷风险（Valley of Death）：若价格在到期时停留在两个行权价之间，将面临最大亏损。","构建复杂：需要精确计算比例和行权价选择，以优化风险收益比。"]},plainSummary:"赌 BTC 要来一波史诗级暴涨：用卖出 1 份低价看涨期权收的钱，去买 2 份高价看涨期权。真暴涨了赚到翻倍、暴跌了还能留下当初收的那点钱，最怕的是不上不下卡在半山腰。",analogy:{emoji:"🎟️",title:"用收来的钱买双份“暴涨彩票”",text:"卖出 1 张低价看涨期权先收一笔钱，转手买 2 张高价看涨期权。BTC 真来一波暴涨，两张“彩票”一起兑奖、越涨赚越多；要是只温吞地涨到半山腰就停住，你卖出的那张反而赔得最惨（这就是“死谷”）；干脆暴跌的话所有票作废，但当初收的那笔钱还揣在兜里。"},pitfalls:["把它当“看涨就买”——它最怕的恰恰是温和上涨：价格涨到买入腿行权价（约 $105k）附近停住，正好砸进亏损最大的“死谷”。","没算成净收入就建仓——一旦付了净权利金（净借记），暴跌时连保底的那点钱都没有、下行照样亏；务必尽量构建成零成本或净收入。","临到期才进场——死谷区 Gamma 极高，到期前几天价格在 $105k 附近稍微一动，盈亏就剧烈翻转，新手扛不住。"],quickJudge:{use:"坚信会史诗级暴涨、且能净收入建仓",avoid:"只是温和看涨、横盘或临近到期"},greeks:{delta:"+",gamma:"+(强)",theta:"−",vega:"+"},cryptoNote:"Deribit 上期权为欧式现金交割、无提前指派；但卖出的那条腿仍占用保证金，到期前就可能被增量强平。尤其要警惕 Vega 风险：IV 单独飙升、即便现货没动也会推高空头 mark price、触发追加保证金——这是到期前的浮动估值风险，不等于到期最终盈亏（若净收入建仓，本策略到期时暴跌方向通常是保底盈利的，见上文案例）。另需留意：若用币本位（Inverse）合约作保证金，暴跌时即便仓位到期是盈利的，作为抵押品的 BTC 现货美元价值也会同步缩水，实际风险缓冲被削弱，不要把“仓位盈亏”和“抵押品价值”混为一谈。仓位要小、保证金留足缓冲。"},pm={id:"ratio-call-spread",name:"看涨比例价差 (Ratio Call Spread)",category:O.BULLISH,description:"买 1 张 ATM Call、卖 2 张 OTM Call；赌温和上涨到上腿最甜，越过盈亏平衡后上行风险无限。",setup:"买入 1x ATM Call + 卖出 2x OTM Call（同到期日）",riskProfile:"下行最多亏净成本（约 $1k）；最大收益 $9k（在 $110k）；上行风险无限（越过 $119k 越涨亏越多）。净空头：Gamma−、Theta+、Vega−，上行 Delta 转负。",idealScenario:"温和看涨、有明确目标价位（约 $110k）；预计不会暴涨、想顺手收点权利金。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02}],plainSummary:'赌 BTC "温和上涨、但别涨过头"。涨到目标价（约 $110k）最爽、稳稳赚一笔；可一旦涨疯了冲过 $119k，反而开始倒亏，而且越涨亏越多、没有底。',analogy:{emoji:"🎯",title:'赌"小胜"的狙击手',text:'就像押注球队"小胜一点"：刚好赢一点你拿满奖金；但要是赢得太夸张（暴涨），反而触发了你额外卖出的那份合约，奖金被反噬、甚至倒贴。所以这是"赌涨、但赌它别涨疯"。'},pitfalls:['只看到"$110k 赚 $9k"就忽略上行无限风险——BTC 暴涨冲过 $119k 后亏损没有上限，这是致命弱点。',"误以为是稳健看涨策略：它卖出的 Call 比买入的多 1 张，本质带一条裸卖腿，牛市启动会被反噬。","临近到期还死扛：$110k 附近 Gamma 极高，价格小幅波动盈亏剧烈跳动，该止盈/平仓时别犹豫。"],quickJudge:{use:"看温和上涨、有目标价",avoid:"可能暴涨或临近到期"},greeks:{delta:"+(弱)→−(上行转负)",gamma:"−",theta:"+",vega:"−"},cryptoNote:'这是净空头结构（卖出比买入多 1 张 Call），$110k 之上等于挂着一条裸卖 Call，上行风险无限。在 Deribit 等平台：① 卖方占用保证金，且 IV 单独飙升（现货没大动）也会推高空头 mark price 触发追保；② 欧式≠不会被平——到期前即可被增量强平，而 BTC 单日 +15% 屡见不鲜，牛市启动时这条裸腿是账户杀手；③ 用 BTC 作保证金会"浮亏 + 抵押品缩水"双杀。务必给上行留缓冲（到价提前买回卖腿或上滚），用组合单/RFQ 一次性按净价成交避免裸腿，仓位要小。',detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">看涨比例价差是一种<strong>"赌温和上涨 + 顺手收租"</strong>的策略：买 1 张 ATM Call 做多，再卖 2 张更高的 OTM Call 来补贴成本。价格不温不火地漂到上腿（$110k）时最甜；但因为卖出的 Call 比买入的多 1 张，<strong>一旦暴涨越过上盈亏平衡点，上行风险无限</strong>——这是它和"赌暴涨"的反向比例价差（Backspread）正好相反的地方。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>比例 1:2 —— 卖得比买得多</strong></p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 1 张 ATM Call</p>
              <p class="text-sm text-slate-700">行权价 = 现价</p>
              <p class="text-xs text-slate-600 mt-1">例：买 1× $100k Call，付 $5k</p>
            </div>
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 2 张 OTM Call</p>
              <p class="text-sm text-slate-700">行权价较高（+10%）</p>
              <p class="text-xs text-slate-600 mt-1">例：卖 2× $110k Call，共收 $4k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = 付 $5k − 收 $4k = <strong>净借记约 $1k</strong>（接近零成本）。</p>
            <p class="text-xs text-slate-600 mt-1">若卖腿更靠近现价、或看涨 skew 让 OTM Call 更贵，可把它做成<strong>净收入</strong>建仓——届时即便价格不涨，也能留下这笔权利金。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">$9k</div>
            <p class="text-xs text-slate-600">价格正好落在上腿 $110k 时（最甜点）</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">∞（上行）</div>
            <p class="text-xs text-slate-600">越过 $119k 后越涨亏越多，无上限；下行最多只亏净成本 $1k</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$101k / $119k</div>
            <p class="text-xs text-slate-600">只在 $101k–$119k 之间赚钱</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期温和上涨到 $110k 附近</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓 1:2 比例：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入 1 张 $100k Call，支付 $5,000</li>
              <li>卖出 2 张 $110k Call，共收 $2,000 × 2 = $4,000</li>
              <li>净成本（借记）≈ $1,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 最佳：BTC 涨到 $110k（最甜点）</p>
              <p class="text-xs text-green-700 mt-1">买腿内在 $10k − 权利金 $5k = +$5k；两张卖腿刚好平值作废、留权利金 $4k → 合计 <strong>+$9k</strong>。这是收益顶点。</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 中等：BTC 没涨、横在 $95k</p>
              <p class="text-xs text-yellow-700 mt-1">三张 Call 全部作废，只亏建仓的净成本 → <strong>−$1k</strong>。这就是下行的"地板"（最多亏净成本）。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 最差：BTC 暴涨到 $130k</p>
              <p class="text-xs text-red-700 mt-1">买腿内在 $30k − $5k = +$25k；两张卖腿各亏 $20k 内在、加回权利金 → 2×（$2k − $20k）= −$36k；合计 <strong>−$11k</strong>。价格越高亏越多、<strong>没有上限</strong>——多卖的那张 Call 是裸的。</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>预期<strong>温和上涨</strong>、有明确目标价位（如认为大概率到 $110k 附近止步）</li>
              <li>认为<strong>几乎不可能暴涨</strong>（有明确技术阻力，或市场缺乏催化剂）</li>
              <li>隐含波动率偏高、想顺势卖出贵 Call 收一点权利金来补贴成本</li>
              <li>能持续盯盘、暴涨时愿意主动买回卖腿止损</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期可能暴涨（哪怕只是小概率——上行无限亏损会要命）</li>
              <li>无法盯盘、不能在突破上腿时及时处理裸卖腿</li>
              <li>对比例策略不熟悉的新手（多腿、带裸卖，管理复杂）</li>
              <li>临近到期才建仓（上腿附近 Gamma 极大，盈亏剧烈跳动）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📐 与 Call Ratio Backspread 互为镜像</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <ul class="text-sm text-slate-700 space-y-2 list-disc pl-5">
            <li><strong>反向比例价差 (Backspread)</strong>：买多卖少（卖 1 买 2），<strong>赌暴动</strong>——暴涨时收益无限，中间有"死谷"亏损区，本质是净多波动率。</li>
            <li><strong>本策略（正向/Front Ratio）</strong>：卖多买少（买 1 卖 2），<strong>赌温和 + 收租</strong>——温和涨到上腿最甜，暴涨时上行风险无限，本质是净空波动率。</li>
            <li>两者盈亏曲线几乎<strong>上下颠倒</strong>：Backspread 怕"不动"、本策略怕"涨疯"。你对未来是赌"大动"还是赌"温和"，决定了选哪一个。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>上行风险无限（核心风险）</strong>：多卖的那张 Call 没有买腿保护，价格越过上盈亏平衡点（$119k）后，越涨亏越多、没有上限——加密暴涨行情里这是真实的爆仓来源。</li>
            <li><strong>Delta 上行转负</strong>：起初接近中性/微正，价格涨向上腿后，2 张空 Call 的负 Delta 压过 1 张多 Call，组合 Delta 转负，涨得越多越像在做空。</li>
            <li><strong>Gamma（净负）</strong>：临近到期、价格在上腿附近时 Gamma 极大，盈亏对小幅波动异常敏感。</li>
            <li><strong>Vega（净负）/ 保证金</strong>：IV 飙升会同时推高空头价值、扩大浮亏并推高保证金要求，可能触发追保甚至到期前强平。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>把上腿设在强阻力位</strong>：让"最甜点"落在你认为价格难以突破的位置，降低被暴涨反噬的概率。</li>
            <li><strong>设上行止损线</strong>：价格逼近上盈亏平衡点（$119k）时，果断买回多卖的那张 Call，把无限风险变回有限。</li>
            <li><strong>争取净收入建仓</strong>：调近卖腿或利用 skew 做成净贷记，这样即便不涨也能留下权利金、下行不亏。</li>
            <li><strong>到期时间</strong>：建议 30–45 天，给温和上涨留空间，又避免长期暴露裸卖腿的尾部风险。</li>
            <li><strong>仓位要小</strong>：因上行无限风险，名义暴露务必控制在小仓位，并预留充足保证金缓冲。</li>
          </ul>
        </div>
      `,pros:["低成本看涨：用 2 张卖腿补贴买腿，接近零成本，甚至可做成净收入建仓。","温和上涨收益佳：价格落在上腿附近时收益达到顶点（本例 +$9k），比单买 Call 更高效。","下行风险有限：若价格不涨，最多只亏建仓净成本（净收入时甚至不亏）。"],cons:["上行风险无限：多卖一张裸 Call，暴涨越过上盈亏平衡点后亏损没有上限，是最致命的弱点。","管理复杂且占保证金：多腿带裸卖、需持续盯盘并维持保证金，IV 飙升或暴涨都可能触发追保。"]}},fm={id:"risk-reversal",name:"风险逆转 (Risk Reversal)",category:O.BULLISH,description:"买高位 Call、卖低位 Put；近零成本复制看涨敞口，代价是下行像持币。",setup:"买入 OTM Call + 卖出 OTM Put（同到期日）",riskProfile:"下行风险大（类持币，BTC 归零最大亏约 $90k）；上行收益无限；近零成本建仓。Delta 强正，Gamma/Theta/Vega 近中性。",idealScenario:"坚定看涨且愿在更低位接货；想吃下行 skew、又不愿付权利金。",legs:[{type:"Call",action:"Buy",strikeOffset:1.1,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02}],plainSummary:'几乎不花钱赌 BTC 要涨：用"卖出下跌保险"收来的钱去买"上涨彩票"。大涨像满仓持币一样赚，横在中间不赚不亏，真大跌了得照单全收、跟持币一样亏。',analogy:{emoji:"🎟️",title:"用卖保险的钱买彩票",text:'你把"别人怕 BTC 跌"愿意付的保险费收过来（卖出下行保护），转手用这笔钱买一张"赌大涨"的彩票（买入看涨）。不花自己的钱就赌涨——代价是万一真跌穿了，你就成了那个赔保险的人，亏得和直接持币一样多。'},pitfalls:['以为"零成本"="零风险"——下破 $90k 后亏损和持有现货一样大，极端归零最多亏约 $90k，绝不是只亏权利金。',"把它当 Long Call 来买：Long Call 跌了最多亏权利金，Risk Reversal 跌了要像持币一样真金白银地亏下去。","忽略保证金：卖出的那条 Put 会占用保证金，暴跌时可能被追保甚至强平。"],quickJudge:{use:"坚定看涨、愿更低位接货",avoid:"怕暴跌或保证金不足"},greeks:{delta:"+(强)",gamma:"≈0",theta:"≈0",vega:"≈0"},cryptoNote:'含一条裸卖 Put（$90k），下破后像满仓持币、并占用保证金。在 Deribit 等平台：① IV 单独飙升（现货没怎么动）也会推高空头 Put 的 mark price，触发追保；② 欧式≠不会被平——到期前即可被增量强平，周末/插针的薄流动性下尤其危险；③ 用 BTC 作保证金时暴跌会"浮亏 + 抵押品缩水"双杀。另外本站为简化把两腿 IV 取相等→净成本≈$0；真实加密市场的看跌 skew 通常让 OTM Put 更贵，卖 Put 能多收一点、建仓常为净收入——这正是"吃 skew"的收益来源。',detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">风险逆转 (Risk Reversal) 用<strong>卖出 OTM Put 收到的权利金</strong>去<strong>买入 OTM Call</strong>，做到近乎零成本表达看涨。上破像随涨的多头、下破像满仓持币——这是加密机构最常用的"不愿付权利金又要做多 + 顺手吃下行 skew"的方向工具。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>一收一付，互相抵消：</strong>卖 Put 的钱 ≈ 买 Call 的钱</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 OTM Call</p>
              <p class="text-sm text-slate-700">行权价高于现价（+10%）</p>
              <p class="text-xs text-slate-600 mt-1">例：买 $110k Call，付 $2k</p>
            </div>
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 OTM Put</p>
              <p class="text-sm text-slate-700">行权价低于现价（−10%）</p>
              <p class="text-xs text-slate-600 mt-1">例：卖 $90k Put，收 $2k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本 ≈ $0</strong>（付 $2k − 收 $2k）；只需缴纳卖 Put 的保证金。</p>
            <p class="text-xs text-slate-600 mt-1">真实加密市场看跌 skew 较陡，OTM Put 往往更贵，常能做成<strong>净收入</strong>建仓——这部分净收入就是吃 skew 的来源。两腿须用同一到期日。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">∞</div>
            <p class="text-xs text-slate-600">突破上腿后随币价线性上涨，上不封顶</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">≈ $90k</div>
            <p class="text-xs text-slate-600">跌破 $90k 后像持币，BTC 归零时亏约 $90k</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">死区（不赚不亏）</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$90k – $110k</div>
            <p class="text-xs text-slate-600">两腿都作废，盈亏 ≈ $0</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，坚定看涨且愿在 $90k 接货</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入 1 份 $110k Call，支付 $2,000</li>
              <li>卖出 1 份 $90k Put，收取 $2,000</li>
              <li>净成本 ≈ $0，仅占用卖 Put 的保证金</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 最佳：BTC 涨到 $130k</p>
              <p class="text-xs text-green-700 mt-1">Call 内在 $20k − 权利金 $2k = +$18k；Put 作废留下 $2k → 合计 <strong>+$20k</strong>，价格越高赚越多（上不封顶）。</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 中等：BTC 横在 $100k（死区内）</p>
              <p class="text-xs text-yellow-700 mt-1">Call 作废亏权利金 $2k，Put 作废留权利金 $2k，两者抵消 → 盈亏 ≈ <strong>$0</strong>。$90k–$110k 之间几乎都是这个结果。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 最差：BTC 跌到 $80k</p>
              <p class="text-xs text-red-700 mt-1">Put 被现金结算（经济效果≈在 $90k 接货后又跌）：Put 端 $2k − $10k = −$8k，Call 亏权利金 $2k → 合计 <strong>−$10k</strong>。跌得越多亏越多，归零约亏 $90k——和持币完全一样。</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>坚定看涨，但不愿为 Long Call 持续付出权利金（怕横盘被 Theta 磨光）</li>
              <li>本来就愿意在更低位（如 $90k）接货抄底，卖 Put 等于"挂低价买单还顺手收钱"</li>
              <li>看跌 skew 偏陡、OTM Put 偏贵时建仓，能做成净收入、吃下行 skew</li>
              <li>保证金充裕、能承受像持币一样的下行风险</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>担心暴跌、想要"亏损封顶"的下行保护（这里下行几乎无保护）</li>
              <li>保证金不充裕的账户（暴跌时卖 Put 可能被追保/强平）</li>
              <li>只是想小赌一把、亏损控制在一笔小钱内（那应该用 Long Call）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📐 何时选 Risk Reversal，而非 Synthetic Long / Long Call？</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <ul class="text-sm text-slate-700 space-y-2 list-disc pl-5">
            <li><strong>vs 买入看涨 (Long Call)</strong>：Long Call 下跌只亏权利金、有亏损封顶，但要持续付权利金、横盘被 Theta 磨。Risk Reversal 近零成本、横盘不亏，<strong>代价是放弃了下行保护</strong>——把"封顶亏损"换成了"持币式风险"。看涨且能承受下跌 → 选 Risk Reversal；只想小赌、要兜底 → 选 Long Call。</li>
            <li><strong>vs 合成多头 (Synthetic Long)</strong>：合成多头用<strong>同一行权价</strong>（ATM Call + ATM Put），Delta≈1、几乎完全复制现货、没有死区。Risk Reversal 用<strong>不同 OTM 行权价</strong>，中间多出 $90k–$110k 的"死区"、成本更低，并主动做空下行 skew。想精确复制现货敞口 → 合成多头；想更便宜、愿意更低位接货、还想吃 skew → Risk Reversal。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Delta（强正）</strong>：组合 Delta 接近持有 1 BTC，下跌时与现货同步亏损，"零成本"绝不等于"零风险"。</li>
            <li><strong>Vega（近中性）</strong>：买 Call 的正 Vega 与卖 Put 的负 Vega 大致抵消，但两腿 IV 常不一致（skew），实盘会留下净 Vega/skew 敞口。</li>
            <li><strong>保证金与强平</strong>：卖出的 Put 占用保证金，IV 飙升或币价急跌都可能触发追保，欧式期权到期前同样会被增量强平。</li>
            <li><strong>执行成本</strong>：两腿都在 OTM，点差与滑点会侵蚀本就接近零的净成本，建议用组合单按净价一次性成交。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>行权价选择</strong>：卖 Put 的行权价就是你"愿意接货的价位"，别只为多收权利金而往上挪，否则下行风险骤增。</li>
            <li><strong>吃 skew</strong>：在看跌恐慌、Put 溢价偏高时建仓，更容易做成净收入；牛市 Call skew 偏贵时则相对吃亏。</li>
            <li><strong>到期时间</strong>：建议 30–60 天，给上涨留足空间，又不至于让卖 Put 的尾部风险敞口拖太久。</li>
            <li><strong>仓位与缓冲</strong>：按"等同持有多少 BTC 现货"来核算仓位，预留充足保证金缓冲应对暴跌追保。</li>
            <li><strong>主动管理</strong>：若跌势确立，及时买回 Put 止损或下滚行权价；若已大幅获利，可平掉 Call 锁定利润、单独保留卖 Put。</li>
          </ul>
        </div>
      `,pros:["近零成本：用卖 Put 的权利金补贴买 Call，无需净支出即可建立看涨敞口，资金效率高。","横盘不被磨：死区内两腿权利金互相抵消，不像单买 Call 那样每天损耗 Theta。","可吃 skew：加密看跌 skew 较陡时，卖出的 OTM Put 更贵，常能做成净收入建仓。"],cons:["下行风险大：跌破下腿后亏损与持有现货一致，没有亏损封顶，极端情况下亏损巨大。","保证金占用：卖出的 Put 需缴纳并维持保证金，暴跌或 IV 飙升时可能被追保甚至强平。"]}},xm={id:"strap",name:"多头条式组合 (Strap)",category:O.BULLISH,description:"买入1份Put，买入2份Call。看多波动率但更看涨。",setup:"买入 1x Put + 买入 2x Call (同Strike)",riskProfile:"风险有限，收益无限 (上涨赚双倍)。",idealScenario:"变盘在即，且向上突破概率大。",legs:[{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.04},{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.04},{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.04}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">多头条式组合 (Strap) 是Straddle的<strong>看涨增强版</strong>。通过2份Call + 1份Put的配置，在做多波动率的同时表达强烈的看涨偏好。适合变盘在即且预期向上突破概率更大的场景。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>2:1 看涨配比</strong></p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 2份 ATM Call</p>
              <p class="text-sm text-slate-700">双倍看涨头寸</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 2×$100k Call，付 $8k</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📉 买入 1份 ATM Put</p>
              <p class="text-sm text-slate-700">下跌保护</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 1×$100k Put，付 $4k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总成本</strong> = $12k（比Straddle贵50%）</p>
            <p class="text-xs text-slate-600">vs Straddle（1Call+1Put=$8k），Strap多花$4k换取向上突破时的双倍收益。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">上涨收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">∞ × 2</div>
            <p class="text-xs text-slate-600">2份Call带来加倍收益</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">下跌收益</div>
            <div class="text-2xl font-bold text-blue-700 mb-2">≈$88k</div>
            <p class="text-xs text-slate-600">1份Put提供下跌收益(BTC归零时盈利封顶约$88k)</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$12k</div>
            <p class="text-xs text-slate-600">横盘时损失全部权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，三角形末端，大概率向上突破</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓操作：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入 2份 $100k Call，付 $4k × 2 = $8k</li>
              <li>买入 1份 $100k Put，付 $4k</li>
              <li>总成本 $12k</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 向上突破：BTC涨到 $120k</p>
              <p class="text-xs text-green-700 mt-1">2份Call各赚 $20k，Put作废。总盈利 $40k - $12k = <strong>$28k</strong>（233%回报），远超Straddle的$12k</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 向下破位：BTC跌到 $80k</p>
              <p class="text-xs text-blue-700 mt-1">Put赚 $20k，Call作废。盈利 $20k - $12k = $8k（67%回报），低于向上突破但仍盈利</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 横盘整理：BTC停在 $100k</p>
              <p class="text-xs text-red-700 mt-1">所有期权恰好归零(价格停在行权价 $100k)，亏损全部权利金 $12k。这是 Strap 的最大风险，仅在价格精确停在行权价时发生</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li><strong>变盘节点</strong>（三角形整理末端、长期横盘后即将突破）</li>
              <li>技术分析显示向上突破概率 >60-70%</li>
              <li>重大事件前，预期利好概率大但不确定（留Put做保险）</li>
              <li>隐含波动率偏低，期权便宜时建仓</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>方向不明确，涨跌概率50:50（用Straddle更合适）</li>
              <li>预期长期横盘（Theta损耗会很惨）</li>
              <li>隐含波动率极高时（权利金太贵，成本过高）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>高成本压力</strong>：比Straddle贵50%，需要更大的价格波动才能盈利，盈亏平衡点更远</li>
            <li><strong>Theta加速衰减</strong>：3份期权同时损失时间价值，横盘时每天亏损巨大</li>
            <li><strong>判断方向错误</strong>：如果向下破位，收益远低于向上突破，不如直接买Put</li>
            <li><strong>Vega Crush</strong>：重大事件后波动率暴跌，即使方向猜对也可能亏钱</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>向上突破概率 ≥65%</strong>：只有当你对向上突破有较高把握时才用Strap，否则用Straddle</li>
            <li><strong>事件前1-2周建仓</strong>：太早Theta损耗大，太晚IV已经飙升成本高</li>
            <li><strong>盈亏平衡点计算</strong>：向上平衡点 = Strike + 总成本/2，向下平衡点 = Strike - 总成本。确保技术上可达</li>
            <li><strong>分批止盈</strong>：一旦突破盈利30-50%，考虑先平仓一半锁定利润</li>
            <li><strong>横盘止损</strong>：价格持续横盘且权利金亏损50%时，考虑止损，避免Theta归零</li>
            <li><strong>与Strip对比</strong>：如果看跌概率更大，用Strip（1Call+2Put）而非Strap</li>
          </ul>
        </div>
      `,pros:["方向与波动双重押注：既受益于波动率上升，又侧重于看涨方向。","上行爆发力：相比普通跨式，上涨时的收益率更高。"],cons:["构建成本高昂：需购买三份期权，权利金支出较大，盈亏平衡点较远。","横盘风险：若市场波动不足，时间价值的快速衰减将导致严重亏损。"]},plainSummary:'你觉得 BTC 马上要剧烈变盘、而且更可能往上冲，于是押了两份"涨了赚"加一份"跌了赚"：真涨起来收益翻倍，跌了也能赚一笔，最怕它原地不动、把你三份本金慢慢磨光。',analogy:{emoji:"🎲",title:'押"会爆冷，而且更看好主队"',text:"像赌一场球肯定会打出大比分、但你更看好主队赢：于是主队（看涨）的票买两张、客队（看跌）的票买一张。只要打得够激烈，往哪边走你都不亏，主队大胜时更是赚翻；可要是踢成沉闷平局（横盘不动），三张票一起作废。"},pitfalls:['以为"只要变盘就稳赚"——价格得动得足够大、盖过三份权利金（比普通跨式还贵 50%）才真盈利，小打小闹照样亏。',"方向没把握也硬上 Strap——若实际向下破位，收益远不如向上突破，这时还不如用 Strip（2Put+1Call）或直接买 Put。","在重大事件、IV 高位时追进——权利金被炒得很贵，就算方向猜对，事件后波动率暴跌（Vega Crush）也可能倒亏。"],quickJudge:{use:"变盘在即且更可能向上突破",avoid:"横盘、方向不明或 IV 已高位"},greeks:{delta:"+",gamma:"+",theta:"−(强)",vega:"+(强)"}},vm={id:"cash-secured-put",name:"现金担保卖出看跌期权 (Cash-Secured Put)",category:O.BULLISH,description:"卖出Put并持有现金。意在低价接盘或赚权利金。",setup:"卖出 Put",riskProfile:"风险较大 (接盘后继续跌)，收益固定。",idealScenario:"横盘或微涨，愿意低位买币。",legs:[{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.025}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
          <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-emerald-800 text-sm">现金担保卖出看跌期权 (Cash-Secured Put) 是<strong>价值投资者的抄底神器</strong>。你在心目中的理想价位卖Put，如果跌到就低价接盘，如果不跌就白赚权利金。这比傻等挂单更聪明，相当于别人付钱让你等待买入机会。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-slate-700 mb-3"><strong>一步到位的简单策略</strong></p>
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📉 卖出 OTM Put</p>
            <p class="text-sm text-slate-700">行权价 = 你愿意买入的价格</p>
            <p class="text-xs text-slate-600 mt-2">例：BTC $100k，你想$90k抄底</p>
            <p class="text-xs text-slate-600">卖出 $90k Put，收 $2,500</p>
          </div>
          <div class="bg-amber-50 p-4 rounded mt-3 border border-amber-200">
            <p class="text-sm text-amber-900 mb-2"><strong>⚠️ 资金要求（Cash-Secured）</strong></p>
            <p class="text-xs text-amber-800">必须在账户预留足额资金（约$90k）作担保，以防到期被指派/按差额结算时有钱兜底接盘。这是"现金担保"的含义。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div class="text-xs text-green-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-green-700 mb-2">$2.5k</div>
            <p class="text-xs text-slate-600">权利金。BTC不跌破$90k时全部保留</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大风险</div>
            <div class="text-lg font-bold text-red-700 mb-2">$87.5k</div>
            <p class="text-xs text-slate-600">BTC归零时：$90k - $2.5k（权利金抵消）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">实际成本</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$87.5k</div>
            <p class="text-xs text-slate-600">行权价 - 权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，你想$90k抄底建仓</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>操作步骤：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>卖出1份 $90k Put（30天到期），收 $2,500</li>
              <li>账户准备 $90,000 现金作担保</li>
              <li>耐心等待到期</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 场景1：BTC停在 $100k 或更高</p>
              <p class="text-xs text-green-700 mt-1">Put作废，保留全部 $2,500。理论年化 = $2,500/$90,000 × 12 ≈ 33%（仅顺风且未被深套时成立，不可当稳定预期——本质是做空波动率，赚的是尾部风险溢价，一旦真发生暴跌等尾部行情，权利金收入可能被一次性吞掉）。可继续卖下一期</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 场景2：BTC收于 $90k 下方（如 $89k）</p>
              <p class="text-xs text-blue-700 mt-1">到期ITM，按现金差额结算（经济效果≈在$90k接盘）。等效买入成本 $87.5k（比直接挂单便宜$2.5k）；想真正持币需用结算资金手动到现货买入</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 场景3：BTC暴跌到 $80k</p>
              <p class="text-xs text-yellow-700 mt-1">按现金差额结算（经济效果≈在$90k接盘），相对现价浮亏 $10k。但权利金抵消$2.5k，实际亏损$7.5k。比直接$100k买入亏得少</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li><strong>价值投资者等待抄底</strong>：有明确的心理价位想买入</li>
              <li>BTC长期看涨但短期回调时逢低建仓</li>
              <li>想通过"收租"提高现金利用率（空仓时也能赚钱）</li>
              <li>已有部分现金准备定投，不如用来卖Put赚权利金</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>不想承接下行风险、纯粹投机（深跌时按差额赔付，经济上等同高价接盘）</li>
              <li>预期BTC会暴跌超过20%（接盘后浮亏巨大）</li>
              <li>没有足额现金（无法Cash-Secured，会被强平）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>接盘后继续跌</strong>：按差额结算（≈接盘）后若继续暴跌，会面临账面浮亏（虽然长期持有者不care）</li>
            <li><strong>机会成本</strong>：现金锁死在担保中，无法用于其他投资机会</li>
            <li><strong>错过牛市</strong>：如果BTC直接起飞不回调，你只赚权利金错过大涨</li>
            <li><strong>滚动风险</strong>：如果想持续卖Put收租，需要每月滚仓，遇到IV低迷时权利金会很少</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>行权价选择</strong>：设在技术支撑位或整数关口下方5-10%，提高不被行权的概率</li>
          <li><strong>到期时间</strong>：30-45天最优，Theta Decay效率高。太短风险大，太长权利金少</li>
          <li><strong>分批抄底</strong>：不要All In一次，分3-5批不同价位卖Put，降低平均成本</li>
          <li><strong>滚动收租</strong>：到期未被指派后，立即卖下一期，月月收租。理论年化约20-40%——仅顺风且未被深套时成立、不可当稳定预期（本质是做空波动率、承担尾部风险，一次暴跌可吞掉多期收益）</li>
          <li><strong>组合策略</strong>：持币后可加Covered Call（备兑看涨），双向收租</li>
          <li><strong>Delta监控</strong>：Put的Delta越接近-0.3时，被行权概率约30%，可作参考</li>
          <li><strong>到期建议</strong>：常用 14–30 天或 30–45 天；接近行权价时提前滚动或平仓，保持现金担保安全边际。</li>
        </ul>
      </div>
      `,pros:["降低建仓成本：实际买入成本为行权价减去收取的权利金。","现金流增强：在等待买入机会的同时，持续获取权利金收入。"],cons:["踏空风险：若BTC价格直接上涨，投资者仅获得权利金，错失资产增值机会。","下行风险：若BTC价格暴跌穿透行权价，投资者必须按原定价格接盘，面临浮亏。"]},plainSummary:'你本来就想等 BTC 跌到某个价再买。与其干等，不如先把买币的钱备好，对外承诺"跌到这个价我就接"，对方先付你一笔钱当谢礼。真跌到了你就低价接货（反正本来就想买）；没跌到，这笔钱白赚。',analogy:{emoji:"🏷️",title:"收订金的限价抄底单",text:'你想低价抄底，本来会挂个"跌到 $90k 自动买入"的限价单干等着。卖 Put 相当于把这张限价单"出租"出去：别人先付你一笔订金（权利金），作为你承诺"到价必接"的报酬。跌到了你照价接货（本就想买）；没跌到，订金白赚。'},pitfalls:['把"现金担保"当口号——没真备足资金就卖 Put，等于裸卖看跌：暴跌时要按差额赔付，保证金不够会被强平在最差位置。','为多收权利金把行权价挂得离现价太近（甚至高于现价），结果稍一回调就被接盘，接的价格并不便宜，"抄底"变"高位接盘"。','误以为是"稳赚的收租"——它本质是做空波动率、承担尾部风险：横盘连赢多期的小钱，可能被一次暴跌深套一次性吐回去。'],quickJudge:{use:"真想低价接币且备足现金",avoid:"不愿持币或预期暴跌"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:'Deribit/OKX 主流 BTC 期权是欧式+现金交割：到期 ITM 只按现金差额结算，不会自动把币"接"到账上（经济效果≈在行权价接盘），想真正持币要用结算资金手动到现货买入。同理"现金担保"在加密多表现为占用保证金额度——务必留足资金兜底，否则等同裸卖 Put，暴跌时会被强平。'},ym={id:"diagonal-call",name:"看涨对角价差 (Long Diagonal Call)",category:O.BULLISH,description:"不同到期与不同行权价的 Call 组合，方向 + 时间双因素。",setup:"买入 远月 ITM Call + 卖出 近月 OTM Call",riskProfile:"风险有限（净成本），收益有限（近月价差 + 远月保值）。",idealScenario:"温和上涨、近月 Theta 快衰减，IV 上升。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.06,expiryLabel:"远月"},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02,expiryLabel:"近月"}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 rounded-lg mb-6">
        <p class="text-emerald-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-emerald-800 text-sm">Long Diagonal Call 将方向与时间优势结合：远月 ITM Call 捕捉上涨，近月 OTM Call 收权利金抵成本并加速 Theta 收益。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
            <p class="font-bold text-emerald-700 mb-2">📈 买 远月 ITM Call</p>
            <p class="text-sm text-slate-700">例：买 $95k Call（付 $6k）</p>
          </div>
          <div class="bg-rose-50 p-4 rounded border border-rose-200">
            <p class="font-bold text-rose-700 mb-2">📉 卖 近月 OTM Call</p>
            <p class="text-sm text-slate-700">例：卖 $110k Call（收 $2k）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $4k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
          <div class="text-xs text-green-600 font-bold mb-1">最大盈利</div>
          <div class="text-2xl font-bold text-green-700 mb-2">≈ $11k</div>
          <p class="text-xs text-slate-600">近月到期时 P 达 ~$110k 附近的近似估算（价差宽度 $15k − 净成本 $4k，按远月内在价值粗算，未计入远月剩余时间价值，非同到期价差式的精确硬顶）；盈亏平衡约 $99k</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">净成本</div>
          <p class="text-xs text-slate-600">若不涨或大跌</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">关键因素</div>
          <div class="text-lg font-bold text-blue-700 mb-2">Theta / Vega</div>
          <p class="text-xs text-slate-600">近月 Theta 利好、事件前 Vega 上升利好</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，温和看涨</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 涨到 $110k (+10%)</p>
            <p class="text-xs text-green-700 mt-1">近月归零（保留 $2k 权利金），远月 ITM 增值 +$9k；组合盈利约 $11k —— 接近价差上限的近似估算（价差宽度 $15k − 净成本 $4k）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 横盘 $100k (0%)</p>
            <p class="text-xs text-yellow-700 mt-1">近月完全归零（保留 $2k 权利金），远月略亏约 $1k；组合小幅盈利约 $1k</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 下跌到 $90k (-10%)</p>
            <p class="text-xs text-red-700 mt-1">亏损接近净成本 $4k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>温和上涨，目标价明确</li>
            <li>IV 有上升预期、近月 Theta 快</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>剧烈上涨（近月被行权收益受限）</li>
            <li>IV 高位且预计回落</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Theta 不对称</strong>：近月腿衰减，需及时滚动</li>
          <li><strong>Vega 风险</strong>：事件后 IV 回落压制远月</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>滚动管理</strong>：近月接近行权价或临期时滚动至更高行权价或下一期</li>
          <li><strong>到期搭配</strong>：远月 60–90 天，近月 14–30 天</li>
        </ul>
      </div>
    `,pros:["方向 + 时间双因素：做多上涨与近月 Theta 收益。","成本较低：近月收权利金抵消部分远月成本。"],cons:["上涨过快时近月被行权导致收益受限。","事件后 IV 回落可能压制远月价值。"]},plainSummary:'赌 BTC 慢慢往上爬：买一张管得久的"赌涨"合约打底押方向，同时把一张短期、要价更高的同类合约卖给别人收笔租金来抵成本。涨得不温不火时最划算，急涨或下跌都不理想。',analogy:{emoji:"🏠",title:"长线看涨 + 短期转租",text:'就像你看好一套房会慢慢升值，先签下长期持有权（买远月 Call）；同时把"近期要是涨太多就按高价卖给房客"的权利短租出去收租金（卖近月 Call），用租金贴补长期成本。房价温和上涨时你既赚升值又赚租金；可一旦短期暴涨、房客按约定价提走，你升值的甜头就被封顶了。'},pitfalls:['以为它和普通牛市价差一样"到期一把了结"——两条腿到期日不同，近月先到期，必须主动平仓或滚动续上，放着不管会失去结构。','盼着 BTC 一飞冲天——急涨会让近月被行权、收益锁死在上限，这策略要的是"慢牛"而非暴涨。',"在 IV 高位建仓——它净 Vega 为正，事件后 IV 回落会压低远月价值反而吃亏，应在 IV 偏低时入场。"],quickJudge:{use:"温和慢涨 + IV 偏低时建仓",avoid:"预期急涨暴涨或 IV 高位将回落"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"+"},cryptoNote:"两腿到期日不同、Deribit 期权费约标的 0.03%/张（+交割费），多腿来回成交会侵蚀本就不大的价差收益——务必用组合单/RFQ 按净价一次成交，别逐腿手动挂单（快市易留裸腿）；卖出的近月 Call 还需占用保证金，到期后记得及时滚动续上。"},hm=[um,cm,bm,fm,gm,mm,pm,xm,vm,ym],km={id:"long-put",name:"买入看跌期权 (Long Put)",category:O.BEARISH,description:"用固定权利金博取下跌；风险封顶，收益随跌幅扩张。",setup:"买入 Put",riskProfile:"风险有限（最多亏权利金）；Theta 负、Vega 正；对快速下跌与 IV 上升敏感。",idealScenario:"短期显著下跌或破位；IV 低位建仓更优。",legs:[{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.03}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">买入看跌期权 (Long Put) 是最直接的做空工具。用一笔固定成本（权利金）博取下跌行情带来的巨大收益，最大亏损仅为所付权利金，适合对下行有明确判断的交易者。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 买入 OTM/ATM Put</p>
              <p class="text-sm text-slate-700">行权价 ≤ 当前价格</p>
              <p class="text-xs text-slate-600 mt-1">例：买入 $95k Put，付 $3k</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
              <p class="font-bold text-slate-700 mb-2">🎯 行权价选择</p>
              <ul class="text-sm text-slate-700 space-y-1 list-disc pl-5">
                <li>ITM：成本高、Delta大，类似持有空单</li>
                <li>ATM：性价比居中，流动性好</li>
                <li>OTM：成本低、杠杆高，需更大跌幅</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">Strike − Premium ≈ $92k</div>
            <p class="text-xs text-slate-600">价格越跌越赚，最大收益 = 行权价 − 权利金 ≈ $92k（标的归零时封顶，区别于 Long Call 的无限上行）</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">权利金</div>
            <p class="text-xs text-slate-600">若价格上涨或横盘，损失为固定成本</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">Strike − Premium</div>
            <p class="text-xs text-slate-600">行权价 - 权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，担心下跌</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓操作：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入 1× $95k Put，付 $3,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴跌到 $80k</p>
              <p class="text-xs text-green-700 mt-1">Put价值 ≈ $15k，净赚 $12k（400%回报）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 小幅下跌至 $94k</p>
              <p class="text-xs text-yellow-700 mt-1">内在价值 $1k，仍亏 $2k（权利金 $3k > 内在价值 $1k，时间价值已耗尽）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 上涨到 $110k</p>
              <p class="text-xs text-red-700 mt-1">Put作废，亏损权利金 $3k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>预期短期出现显著回撤或破位下跌</li>
              <li>持仓需要保护但不愿卖出现货</li>
              <li>隐含波动率偏低、买入期权较便宜</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <p class="font-bold text-green-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-green-800 space-y-1 list-disc pl-5">
              <li>长时间缓跌或横盘（Theta 损耗较大）</li>
              <li>隐含波动率极高（期权过贵）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Theta（时间损耗）</strong>：若价格不快跌，时间价值会持续流逝</li>
            <li><strong>Vega（波动率风险）</strong>：事件后 IV 回落可能压制期权价格</li>
            <li><strong>流动性与点差</strong>：深度不佳时买入成本与平仓点差偏大</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>到期选择</strong>：优先 30–60 天，兼顾时间与幅度</li>
            <li><strong>行权价选择</strong>：将 Put 设在关键支撑位附近，下破时收益最大化</li>
            <li><strong>分批建仓</strong>：价格接近目标区时分批加仓，降低时点风险</li>
            <li><strong>盈利管理</strong>：跌速快且浮盈较大时，分批止盈避免反弹回吐</li>
            <li><strong>与 Collar 对比</strong>：若不想付费，可用 Collar 以收益封顶换取低成本保护</li>
          </ul>
        </div>
      `,pros:["风险封顶：最大损失已锁定为权利金，无爆仓风险。","高杠杆做空：以小资金博取价格下跌带来的高额收益。"],cons:["时间损耗：若市场未如期下跌或下跌缓慢，时间价值衰减将侵蚀本金。","长期胜率挑战：鉴于数字资产长期通缩上涨的特性，单纯做空策略面临长期胜率压力。"]},plainSummary:"花一笔小钱赌 BTC 要跌。跌得越狠你赚得越多；要是不跌反涨，顶多把这笔小钱亏光，不会再多。",analogy:{emoji:"🎟️",title:'买一张"跌了就赔"的票',text:'花一笔小保费，买一张"BTC 跌了就赔你钱"的票：跌得越狠，赔得越多；要是不跌反涨，这张票到期作废，你最多亏掉买票的钱。和买保险不同的是，你手里不用真有 BTC 也能买这张票，纯粹押它会跌。'},pitfalls:['以为"币一跌就赚钱"：必须跌破盈亏平衡点（行权价 − 权利金，约 $92k）才真盈利，小跌或慢跌照样亏权利金。',"贪便宜追虚值（OTM）Put：看着杠杆高，但要 BTC 暴跌一大截才回本，方向小对也常常到期归零。","在暴跌恐慌、IV 飙到高位时追买：一旦价格企稳、IV 回落（Vega 收缩），即便方向看对，期权也可能不涨反跌。"],quickJudge:{use:"坚定看短期大跌、能扛权利金归零",avoid:"横盘、慢跌、IV 高位、临近到期"},greeks:{delta:"−",gamma:"+",theta:"−",vega:"+"}},$m={id:"bear-put-spread",name:"熊市看跌价差 (Bear Put Spread)",category:O.BEARISH,description:"买入高价Put，卖出低价Put。降低做空成本。",setup:"买入 Put A + 卖出 Put B (Strike A > B)",riskProfile:"风险有限，收益有限。",idealScenario:"BTC温和下跌。",legs:[{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">熊市看跌价差 (Bear Put Spread) 用“买高卖低”的 Put 组合法降低做空成本。你牺牲极端暴跌时的收益上限，换取更低的入场成本与更高的胜率，适合温和下跌行情。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 买入 Put A（较高行权价）</p>
              <p class="text-sm text-slate-700">例：买入 $100k Put，付 $5k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 卖出 Put B（较低行权价）</p>
              <p class="text-sm text-slate-700">例：卖出 $90k Put，收 $2k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $5k − $2k = <strong>$3k</strong></p>
            <p class="text-xs text-slate-600">比单买 Put 更省钱，但收益被封顶于价差。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-lg font-bold text-emerald-700 mb-2">(A − B) − 成本</div>
            <p class="text-xs text-slate-600">$100k − $90k − $3k = <strong>$7k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$3k</div>
            <p class="text-xs text-slate-600">若到期价未跌破 A（即 P≥$100k），两腿 Put 均到期归零，损失全部净成本 $3k。</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">A − 成本</div>
            <p class="text-xs text-slate-600">$100k − $3k = <strong>$97k</strong></p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期温和下跌</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 跌到 $90k 及以下</p>
              <p class="text-xs text-green-700 mt-1">获得最大收益 $7k（233% 回报）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 跌到 $95k</p>
              <p class="text-xs text-yellow-700 mt-1">盈亏约 $2k（仍盈利，胜率较高）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 反弹到 $105k</p>
              <p class="text-xs text-red-700 mt-1">损失净成本 $3k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>预期温和下跌，有明确目标区间</li>
              <li>IV 偏高，卖出腿可显著抵消成本</li>
              <li>技术位明确：下方支撑可作为卖出行权价</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>预期暴跌（收益被封顶，欠佳）</li>
              <li>IV 极低（卖出腿权利金太少）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Theta 不对称</strong>：买入与卖出腿的时间损耗节奏不同</li>
            <li><strong>Vega 暴露</strong>：IV 快速下滑会降低买入腿价值</li>
            <li><strong>滑点与流动性</strong>：双腿同时平仓可能带来滑点</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>间距选择</strong>：常用 5–10% 价差，兼顾收益与成本</li>
            <li><strong>到期时间</strong>：30–60 天更利于价格到达目标</li>
            <li><strong>分批止盈</strong>：跌速快时分批落袋，避免回撤</li>
            <li><strong>与单 Put 对比</strong>：若判断极端下跌，考虑直接买 Put</li>
          </ul>
        </div>
      `,pros:["成本效益：相比直接买入Put，构建成本显著降低。","目标明确：适合有明确目标价位的技术性做空交易。"],cons:["收益封顶：若发生黑天鹅事件导致价格暴跌，策略收益在低行权价处封顶，无法享受后续利润。","双腿成本：相比单买 Put 多一条卖出腿，开/平仓需承担额外点差与手续费，且 IV 极低时卖出腿权利金过薄、对成本的抵消作用有限。"]},plainSummary:"你赌 BTC 接下来会往下走一段、但不会崩盘。比直接押它下跌要省钱，代价是真跌穿了头，你赚的也只到事先说好的那个上限为止。",analogy:{emoji:"🏷️",title:"赌降价，但只赌中间一段",text:'好比押注某样东西会降价：从 $100k 降到 $90k 这一段，每跌一点你都拿奖金；可一旦跌破 $90k，再怎么暴跌奖金也封顶、不再多给。换来的好处是——这种"只赌一段"的下注，比"赌它无底洞般狂跌"便宜得多。'},pitfalls:['以为"只要跌就赚"：实际要等价格跌破盈亏平衡点（约 $97k）才真盈利，小跌一点仍在亏掉净成本。',"指望靠它吃暴跌：收益在低行权价（$90k）就封顶了，真想赌崩盘该直接买 Put，而不是用价差。","到期日选太短：方向看对了，但行情还没走到目标，时间损耗就先把仓位磨没了。"],quickJudge:{use:"看温和下跌、想压低成本",avoid:"横盘、看涨或赌暴跌时"},greeks:{delta:"−",gamma:"+",theta:"−",vega:"+"}},Tm={id:"bear-call-spread",name:"熊市看涨价差 (Bear Call Spread)",category:O.BEARISH,description:"收权利金的看不涨策略；卖低Call收租、买高Call限损。",setup:"卖出 Call A + 买入 Call B (Strike A < B)",riskProfile:"风险有限（价差−净收）；收益有限（净收）；Theta 正、Vega 负；需保证金。",idealScenario:"下跌或横盘不破上方阻力；IV 高位更适合收租。",legs:[{type:"Call",action:"Sell",strikeOffset:1.05,premiumRatio:.03},{type:"Call",action:"Buy",strikeOffset:1.15,premiumRatio:.01}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">熊市看涨价差 (Bear Call Spread) 是净收权利金的信用价差。通过卖出较低行权价的 Call 并买入更高行权价的 Call 做保护，赌价格不会大涨突破上方阻力，获利为净权利金。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 Call A（较低行权价）</p>
              <p class="text-sm text-slate-700">例：卖出 $105k Call，收 $3k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 Call B（较高行权价）</p>
              <p class="text-sm text-slate-700">例：买入 $115k Call，付 $1k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入（Net Credit）</strong> = $3k − $1k = <strong>$2k</strong></p>
            <p class="text-xs text-slate-600">最大收益即为净权利金。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$2k</div>
            <p class="text-xs text-slate-600">价格 ≤ $105k 时全部保留</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$8k</div>
            <p class="text-xs text-slate-600">($115k − $105k) − $2k = $8k</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$107k</div>
            <p class="text-xs text-slate-600">卖出价 + 净权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，看不涨</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收敛至 $100k 附近</p>
              <p class="text-xs text-green-700 mt-1">两个 Call 作废，保留 $2k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 涨到 $108k</p>
              <p class="text-xs text-yellow-700 mt-1">超出平衡点 1k，亏损 ≈ $1k</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 暴涨到 $120k</p>
              <p class="text-xs text-red-700 mt-1">已达最大亏损 $8k（价格突破 $115k 后亏损封顶）</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>上方阻力重重、突破概率低</li>
              <li>IV 偏高，可获得较高权利金</li>
              <li>对冲现货多头顶部风险</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>预期可能暴涨（尾部风险较大）</li>
              <li>IV 极低（权利金收入不足）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Gamma 风险</strong>：临近到期，价格靠近 A 时盈亏变化极快</li>
            <li><strong>行权与结算</strong>：主流 BTC 期权（如 Deribit）多为欧式、现金/现货结算，一般不存在提前行权问题；若使用支持美式行权的合约，则需关注对应交易所规则与保证金。</li>
            <li><strong>保证金占用</strong>：净卖方策略需准备保证金</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>行权价设定</strong>：卖出价选择关键阻力位；买入价外扩 8–12%</li>
            <li><strong>到期选择</strong>：30–45 天更利于 Theta 收益与风险控制</li>
            <li><strong>盈利落袋</strong>：获利 50–70% 权利金时考虑提前平仓</li>
            <li><strong>风控对冲</strong>：若突破迹象明显，及时滚动或对冲</li>
          </ul>
        </div>
      `,pros:["高胜率：只要市场不涨（下跌、横盘、微涨）均可获利。","风险锁定：买入的保护性Call限制了极端上涨行情的亏损上限。"],cons:["盈亏比不佳：通常最大亏损高于最大盈利，属于“高胜率、低赔率”策略。","占用保证金且收益封顶：作为净卖方需冻结约等于最大亏损规模的保证金（此处约 $8k，即价差宽度 $10k − 净权利金 $2k），资金利用率受限，而最大收益仅为净权利金 $2k。"]},plainSummary:"赌 BTC 短期涨不动。你先收一笔钱，只要币价别冲破上方那道线，这笔钱就稳稳揣兜里；万一真暴涨了，亏损也被提前封顶，不会像裸卖看涨那样变成无底洞。",analogy:{emoji:"🚧",title:"设个天花板收租，再给亏损上保险",text:"好比你开个小赌局，押「BTC 一个多月内涨不过 $105k」，先把别人的赌注（权利金）收下；同时又花点小钱买了份「涨过 $115k 就赔我」的保险。猜对了赌注白赚，猜错了暴涨也有保险兜底，亏损被钉死在固定数额上，不会倾家荡产。"},pitfalls:["被「高胜率」迷惑：这是赢面大、赔率差的策略，最大亏损 $8k 远高于最大赚头 $2k，连看错几次就能把多次小赚全吐回去。","卖出腿行权价贪图高权利金而设得离现价太近，币价稍一反弹就被打穿，胜率骤降、还可能直奔最大亏损。","把它当「无风险收租」死扛到到期——它要占保证金，且临近到期价格卡在两个行权价之间时盈亏跳动剧烈，该止盈/止损就别硬扛。"],quickJudge:{use:"看不涨、上方阻力强、IV 偏高",avoid:"可能暴涨、IV 极低、想搏高赔率"},greeks:{delta:"−",gamma:"−",theta:"+",vega:"−"}},Cm={id:"put-ratio-backspread",name:"看跌比例反向价差 (Put Ratio Backspread)",category:O.BEARISH,description:"卖出1份高价Put，买入2份低价Put。",setup:"卖出 1x ITM Put + 买入 2x OTM Put",riskProfile:"上行风险有限，下行收益巨大。",idealScenario:"极度看跌，防范崩盘。",legs:[{type:"Put",action:"Sell",strikeOffset:1.05,premiumRatio:.06},{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.025},{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.025}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">看跌比例反向价差 (Put Ratio Backspread) 以“卖 1、买 2”的不对称比例布局下行加速收益。用卖出贵的 Put 的收入，购买更多份数的便宜 Put，在崩盘时获得倍增收益，同时上行风险有限。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 卖出 1× ITM/ATM Put</p>
              <p class="text-sm text-slate-700">例：卖出 $105k Put，收 $6k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 买入 2× OTM Put</p>
              <p class="text-sm text-slate-700">例：买入 2× $95k Put，付 $2.5k × 2 = $5k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入</strong> = $6k − $5k = <strong>$1k</strong>（理想情况可实现零成本甚至净收入建仓）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">崩盘收益</div>
            <div class="text-lg font-bold text-red-700 mb-2">净赚 ×1</div>
            <p class="text-xs text-slate-600">跌破 $95k 后净持 1 份多头 Put，越跌越赚</p>
          </div>
          <div class="bg-gradient-to-br from-yellow-50 to-amber-50 border border-amber-200 rounded-lg p-4">
            <div class="text-xs text-amber-600 font-bold mb-1">死谷风险</div>
            <div class="text-lg font-bold text-amber-700 mb-2">有限但集中</div>
            <p class="text-xs text-slate-600">价格停在买入 Put 行权价附近时亏损最大</p>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">上行保护</div>
            <div class="text-lg font-bold text-emerald-700 mb-2">净权利金</div>
            <p class="text-xs text-slate-600">若上涨，整体亏损有限，甚至保留净收入</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，担心骤然崩盘</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓 1:2 Ratio：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>卖出 1× $105k Put（收 $6,000）</li>
              <li>买入 2× $95k Put（付 $5,000）</li>
              <li>净收入 $1,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴跌到 $80k</p>
              <p class="text-xs text-green-700 mt-1">卖出腿亏 ≈ $25k，买入腿赚 ≈ $15k × 2 = $30k；合计 ≈ −$25k + $30k + $1k = <strong>$6k</strong>（注：要赚到约 $36k 需进一步暴跌至约 $50k）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 死谷：收于 $95k</p>
              <p class="text-xs text-red-700 mt-1">卖出腿亏 ≈ $10k；买入腿刚好平值；净亏 ≈ $9k（-$10k + $1k）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 上涨到 $110k</p>
              <p class="text-xs text-yellow-700 mt-1">所有 Put 作废，保留净收入 $1k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>预期可能出现史诗级崩盘</li>
              <li>重大利空事件前后（黑天鹅风险）</li>
              <li>IV 较低时建仓，买入腿更划算</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>仅温和下跌预期（死谷风险较高）</li>
              <li>临近到期才建仓（Gamma 风险极大）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>死谷风险</strong>：价格收在买入 Put 行权价附近时亏损集中</li>
            <li><strong>Gamma 爆炸</strong>：临期曲率极高，盈亏变化剧烈</li>
            <li><strong>比例设置</strong>：1:2 常见，比例过大提高死谷风险</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>比例选择</strong>：优先 1:2，兼顾收益与风险</li>
            <li><strong>行权价间距</strong>：建议 8–12%，避免死谷过宽</li>
            <li><strong>净成本目标</strong>：尽量构建为零成本或净收入</li>
            <li><strong>风控监控</strong>：接近死谷价位时考虑提前调整或平仓</li>
          </ul>
        </div>
      `,pros:["黑天鹅利器：用卖出贵 Put 的收入融资买入更多便宜 Put，崩盘时净多头 Put 持续放大收益。","上行保护：若价格仅温和上涨、未突破约 $104k 盈亏平衡点，最多损失少量净成本（如收于 $95k–$104k 区间）；一旦真正大幅上涨突破卖出 Put 行权价 $105k，两条 Put 全部作废，策略稳赚净权利金 $1,000，不存在亏损可能。"],cons:["死谷风险：若价格在到期时收于买入 Put 行权价（下方行权价 $95k）附近，将面临最大亏损（本例约 −$9k）。"]},plainSummary:"几乎不花钱赌一场 BTC 大崩盘：卖出 1 份合约收点钱，转手买进 2 份“越跌越值钱”的合约。真暴跌了越跌赚得越多，不崩盘顶多亏点小钱；最怕的是不上不下、小跌卡在半路那个尴尬价位。",analogy:{emoji:"🌋",title:"用一份小保单的钱，买两张巨灾彩票",text:"你把一份普通保单卖给邻居、收了点保费，再拿这笔钱买了两张“灾难越大赔越多”的彩票。天下太平时你白赚那点保费差价；真来场大灾（暴跌），两张彩票一起赔、越惨赔越多。唯一难受的是只来个不大不小的麻烦（温和下跌）——你卖出的保单得赔钱，两张彩票却还没到赔付线。"},pitfalls:["把它当“稳赚的崩盘险”：其实只有真正暴跌、远破下方行权价才大赚，温和下跌反而正好落在亏损最大的死谷里。","临近到期才建仓：时间价值（Theta）流失飞快、Gamma 极不稳定，价格卡在死谷附近会被反复磨损。","为放大收益把比例拉太大（如 1:3、1:4）：死谷的最大亏损同步放大，且需要更剧烈的暴跌才能回本。"],quickJudge:{use:"预期史诗级暴跌、想低成本博黑天鹅",avoid:"只看温和下跌或横盘、临近到期"},greeks:{delta:"−",gamma:"+（强）",theta:"−",vega:"+"},cryptoNote:"卖出的那条 Put 在 Deribit 要占用保证金，到期前就可能被增量强平。注意 Vega 陷阱：IV 单独飙升、现货没怎么动也会推高这条空头的 mark 价并触发追加保证金；若用币本位账户，暴跌时更会“期权浮亏 + 抵押品（BTC）缩水”双杀。务必仓位放小、留足保证金缓冲。"},Sm={id:"ratio-put-spread",name:"看跌比例价差 (Ratio Put Spread)",category:O.BEARISH,description:"买1份高价Put、卖2份低价Put。温和下跌到甜点最赚，暴跌则下行风险放大。",setup:"买入 1x ATM Put + 卖出 2x OTM Put",riskProfile:"上行风险有限（净成本）；甜点收益丰厚；跌破下盈亏平衡后下行风险放大；Theta 正、Vega 负、净空 1 张 Put。",idealScenario:"预期温和下跌至卖出腿行权价附近；IV 偏高更利于卖方腿。",legs:[{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">看跌比例价差 (Ratio Put Spread) 用“买 1、卖 2”的不对称比例押注<strong>温和下跌</strong>。买 1 份较高行权价 Put、卖 2 份较低行权价 Put，价格恰好跌到卖出腿行权价时收益最甜。它是 <strong>看跌比例反向价差 (Put Ratio Backspread) 的镜像</strong>：backspread 赌暴动、本策略赌温和并靠净卖方收时间价值——但代价是多卖出的那 1 份 Put 形成净空头，<strong>一旦暴跌击穿下盈亏平衡，下行风险被放大</strong>。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 买入 1× ATM Put（较高行权价）</p>
              <p class="text-sm text-slate-700">例：买入 $100k Put，付 $5k</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 卖出 2× OTM Put（较低行权价）</p>
              <p class="text-sm text-slate-700">例：卖出 2× $90k Put，收 $2k × 2 = $4k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $5k − $4k = <strong>$1k</strong>（接近零成本）</p>
            <p class="text-xs text-slate-600">本例为约 $1k 的净借记；若行权价更近或 IV 更高，2 份卖出腿可覆盖买入腿、做成净收权利金（贷记）建仓。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$9k</div>
            <p class="text-xs text-slate-600">价格恰好收于卖出腿 $90k 时实现：$10k 内在 − $1k 净成本。</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-lg font-bold text-red-700 mb-2">下行放大 / 上行仅 $1k</div>
            <p class="text-xs text-slate-600">上涨（≥$100k）仅亏净成本 $1k；跌破 $81k 后每跌 $1k 多亏 $1k（净空 1 张 Put），理论最坏 ≈ $81k。</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$81k 与 $99k</div>
            <p class="text-xs text-slate-600">盈利区间在 $81k–$99k 之间；$90k 为收益顶点。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期温和下跌到 $90k 一带</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓 1:2 比例：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>买入 1× $100k Put（付 $5,000）</li>
              <li>卖出 2× $90k Put（收 $2,000 × 2 = $4,000）</li>
              <li>净成本 $1,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 最佳：温和跌到 $90k</p>
              <p class="text-xs text-green-700 mt-1">买入腿赚 $10k − $5k = $5k；2 份卖出腿恰好平值作废，保留 $4k 权利金；合计 <strong>+$9k</strong>。（跌到 $95k 仍有 +$4k）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 不跌/横盘：收于 $100k 及以上</p>
              <p class="text-xs text-yellow-700 mt-1">三条 Put 全部作废，仅亏净成本 <strong>−$1k</strong>。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 最差：暴跌击穿 $81k，例如跌到 $70k</p>
              <p class="text-xs text-red-700 mt-1">买入腿赚 $25k（$30k 内在 − $5k 成本），但 2 份卖出腿各亏 $18k（$2k 权利金 − $20k 内在）合计 −$36k；总计 <strong>−$11k</strong>，且越跌越亏——这正是本策略与普通熊市看跌价差的关键区别。</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>预期<strong>温和、有限</strong>的下跌，且有明确目标价位（如下方支撑 $90k）</li>
              <li>IV 偏高，2 份卖出腿能收到更厚的权利金、压低成本甚至做成净贷记</li>
              <li>判断“跌但跌不深”，愿意用甜点高收益换取暴跌时的下行风险</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>预期可能暴跌或黑天鹅（应改用 Put Ratio Backspread 或直接买 Put）</li>
              <li>无法承担净空头 Put 的保证金与强平风险</li>
              <li>临近到期才建仓，价格钉在 $90k 附近时 Gamma 风险极大</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>下行风险放大（Delta 反转）</strong>：跌破甜点 $90k 后净空 1 张 Put 主导，Delta 由负转正，价格越跌亏损越大，跌破 $81k 即净亏。</li>
            <li><strong>Theta 正、Vega 负</strong>：作为净卖方，时间衰减总体有利；但 IV 飙升会推高卖出腿价值、产生未实现亏损。</li>
            <li><strong>Gamma 风险</strong>：临近到期且价格在 $90k 附近时盈亏曲线极陡，方向稍偏即剧烈波动。</li>
            <li><strong>执行成本</strong>：三腿开平仓存在点差与滑点，侵蚀本就微薄的净成本。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>比例选择</strong>：1:2 最常见；比例越大（如 1:3）净收权利金越多，但下行裸空风险与保证金占用同步放大。</li>
            <li><strong>行权价间距</strong>：建议 8–12%，把甜点对准下方关键支撑。</li>
            <li><strong>下行止损</strong>：跌破甜点 $90k 后果断减仓，不要恋战净空头 Put。</li>
            <li><strong>与 Backspread 对照</strong>：赌暴跌选 Put Ratio Backspread（买 2 卖 1，崩盘越赚）；赌温和下跌、想收时间价值才选本策略。</li>
          </ul>
        </div>
      `,pros:["甜点收益丰厚：价格恰好跌到卖出腿行权价时，单腿做多 Put 的内在价值叠加 2 份卖出腿的权利金，收益显著（本例 $9k）。","成本低廉：2 份卖出腿的权利金几乎覆盖买入腿成本，可构建为接近零成本甚至净贷记建仓。"],cons:["下行风险放大：跌破下盈亏平衡（$81k）后，多卖出的 1 张 Put 形成净裸空，价格越跌亏损越大；因现货价格有 0 下界而非真正无限，但理论最大亏损可达约 $81k（BTC 跌至 0 时），远超普通熊市看跌价差的有限亏损。","保证金与强平：净空头 Put 需占用保证金，暴跌时可能被增量强平在最差位置，与普通熊市看跌价差“风险有限”的特性截然不同。"]},plainSummary:"赌 BTC 会温和下跌、最好正好跌到某个价位。跌到那个甜点你赚得最多；要是不跌顶多亏一点点；但要是暴跌跌过了头，反而越跌越亏——因为你多卖了一份看跌权利。",analogy:{emoji:"🎣",title:"在浅滩下了张网",text:"你判断鱼群会缓缓游到 $90k 这个水位，就在那撒了两张网（卖 2 份 Put）。鱼正好游到这里收获最大；鱼不来你只亏点网钱；但要是发洪水（暴跌冲过头），你多撒的那张网反被水流拖着走，水越大亏得越多。"},pitfalls:["以为「看跌就该越跌越赚」——本策略在 $90k 甜点后开始回吐，跌破下盈亏平衡 $81k 就转为净亏，越跌越亏。","忽视多卖出的那 1 份 Put 是裸空暴露，暴跌时理论最大亏损可达约 $81k（远超净成本），和「风险有限」的普通熊市看跌价差完全不同。","临近到期才建仓：价格钉在 $90k 附近时 Gamma 极高，盈亏瞬间翻脸。"],quickJudge:{use:"预期温和下跌到 $90k 附近",avoid:"可能暴跌或已临近到期"},greeks:{delta:"− → +（跌破 $90k 转正）",gamma:"−（净空 1 张）",theta:"+（净卖方，时间利好）",vega:"−（IV 上升不利）"},cryptoNote:"🛡️ 保证金与强平：本策略卖 2 买 1、净空 1 张 Put，跌破 $90k 后实质是裸空 Put 暴露。Deribit 等平台按保证金占用，且到期前即可被增量强平（欧式≠不会被平）。注意 Vega 风险——IV 单独飙升、现货没动也会推高空头 Put 的 mark price 触发追保；用 BTC 作保证金时，暴跌会「浮亏 + 抵押品缩水」双杀，且恰好落在本策略下行风险放大的区域。务必预留缓冲、用更小仓位。"},Bm={id:"strip",name:"空头条式组合 (Strip)",category:O.BEARISH,description:"买入1份Call，买入2份Put。看多波动率但更看跌。",setup:"买入 1x Call + 买入 2x Put (同Strike)",riskProfile:"风险有限，上涨收益无限（Call端未加倍），下跌收益双倍但有限（2×Put，跌至$0封顶约$188k）。",idealScenario:"变盘在即，且向下破位概率大。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.04},{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.04},{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.04}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">空头条式组合 (Strip) 是跨式组合的看跌增强版。用 2 份 Put + 1 份 Call，在做多波动率的同时表达强烈看跌偏好：下跌赚双倍，上涨仅小赚或不赚。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 p-4 rounded border border-rose-200">
              <p class="font-bold text-rose-700 mb-2">📉 买入 2× ATM Put</p>
              <p class="text-sm text-slate-700">例：买 2× $100k Put，付 $4k × 2 = $8k</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 买入 1× ATM Call</p>
              <p class="text-sm text-slate-700">例：买 1× $100k Call，付 $4k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总成本</strong> = $12k（比 Straddle 贵 50%，向下收益增强）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">下跌收益</div>
            <div class="text-2xl font-bold text-red-700 mb-2">≈$188k</div>
            <p class="text-xs text-slate-600">双倍 Put 带来双倍速度的下跌盈利</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">上涨收益</div>
            <div class="text-2xl font-bold text-blue-700 mb-2">∞ × 1</div>
            <p class="text-xs text-slate-600">Call 端贡献上涨收益，但较慢</p>
          </div>
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
            <div class="text-xs text-amber-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-amber-700 mb-2">$12k</div>
            <p class="text-xs text-slate-600">横盘时损失全部权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，关键支撑摇摇欲坠</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 向下破位：跌到 $80k</p>
              <p class="text-xs text-green-700 mt-1">Put 收益 ≈ $20k × 2 = $40k；总盈利 ≈ $28k（233%）</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 看跌落空、反向上涨：涨到 $120k</p>
              <p class="text-xs text-blue-700 mt-1">Call 赚 ≈ $20k；净利 ≈ $8k（67%），低于向下破位</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 横盘：收于 $100k</p>
              <p class="text-xs text-red-700 mt-1">三份期权全部作废，亏损 $12k（即最大亏损）</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>变盘节点、支撑破位概率显著提升</li>
              <li>IV 较低，有利于买入端性价比</li>
              <li>需表达强烈看跌偏好，又不完全排除向上可能</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>方向不明确且波动率极高（成本过高）</li>
              <li>长期横盘环境（Theta 损耗显著）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>成本压力</strong>：总权利金较高，需更大波动覆盖成本</li>
            <li><strong>死谷风险</strong>：买入行权价附近的结算点位是最差</li>
            <li><strong>Vega Crush</strong>：事件后 IV 暴跌，方向正确但价格不够也可能亏</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>事件前建仓</strong>：尽量在 1–2 周前进场，避免临期 Gamma 风险</li>
            <li><strong>分批止盈</strong>：暴跌时分批落袋，避免反弹回吐</li>
            <li><strong>比例与间距</strong>：控制比例与行权价间距，兼顾净成本与死谷宽度</li>
          </ul>
        </div>
      `,pros:["极佳的做空爆发力：在市场暴跌时提供双倍杠杆收益。","对冲反向风险：若判断失误市场暴涨，持有的Call能挽回部分损失甚至盈利。"],cons:["成本高昂：构建该组合需要支付三份权利金。","横盘风险：若市场进入低波动震荡，时间价值的损耗将导致严重亏损。"]},plainSummary:"赌 BTC 要大幅变盘，而且你更看它向下暴跌：真跌了赚双份，真涨了也能小赚一点，唯独横盘不动会把这笔本钱亏光。",analogy:{emoji:"🌧️",title:"买两件雨衣、一顶遮阳帽",text:"你确定天气要变极端，但更赌会下暴雨，于是买 2 件雨衣 + 1 顶遮阳帽。真下暴雨，两件雨衣发挥双倍作用；万一来了大太阳，遮阳帽也能顶一下、不至于白挨晒；唯独不冷不热的平淡天，三样东西全白买。"},pitfalls:['以为"只要跌就赚"——因 2 份 Put 的双倍杠杆，BTC 只需跌破约 $94k（跌幅约 $6k/6%）即可覆盖 $12k 总成本、越过盈亏平衡点，但没跌够这个幅度照样亏。',"在 IV 已经高位时建仓——三份权利金本就贵，事件一过 IV 暴跌(Vega crush)，方向看对了也可能不赚。","拖到临近到期才进场或迟迟不平仓——三份期权同时被 Theta 啃，横盘几天就大幅缩水。"],quickJudge:{use:"变盘在即且更可能向下破位",avoid:"方向不明、长期横盘、IV 已高位"},greeks:{delta:"−",gamma:"+",theta:"−(强)",vega:"+"}},Am={id:"naked-call",name:"裸卖看涨 (Naked Call)",category:O.BEARISH,description:"直接卖出 Call。风险极高。",setup:"卖出 Call",riskProfile:"收益有限，风险无限。",idealScenario:"坚决看跌或横盘。",legs:[{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
          <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-rose-800 text-sm">裸卖看涨 (Naked Call) 在无现货保护的情况下直接卖出 Call，建仓即收取权利金。若价格暴涨突破行权价，潜在亏损理论上无限，是极度危险的净卖方策略。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="bg-rose-50 p-4 rounded border border-rose-200">
            <p class="font-bold text-rose-700 mb-2">📉 卖出 OTM Call</p>
            <p class="text-sm text-slate-700">例：卖出 $110k Call，收 $2k</p>
          </div>
          <div class="bg-amber-50 p-4 rounded mt-3 border border-amber-200">
            <p class="text-sm text-amber-900 mb-2"><strong>⚠️ 保证金与风控</strong></p>
            <p class="text-xs text-amber-800">需较高保证金；若价格逼近行权价，保证金要求可能显著上升。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">权利金</div>
            <p class="text-xs text-slate-600">价格 ≤ 行权价时全部保留</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">价格可无限上涨，亏损无上限</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">Strike + Premium</div>
            <p class="text-xs text-slate-600">行权价 + 权利金</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，看不涨</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收敛或下跌：收于 $100k</p>
              <p class="text-xs text-green-700 mt-1">Call 作废，保留 $2k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 小幅上涨：涨至 $112k</p>
              <p class="text-xs text-yellow-700 mt-1">亏损 ≈ ($112k − $110k) − $2k = $0，接近平衡</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 暴涨：涨到 $130k</p>
              <p class="text-xs text-red-700 mt-1">亏损 ≈ $20k − $2k = <strong>$18k</strong>，风险巨大</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-lg p-4">
            <p class="font-bold text-rose-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-rose-800 space-y-1 list-disc pl-5">
              <li>明确看不涨、顶部压力强</li>
              <li>短期波动率高，权利金充足</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <p class="font-bold text-emerald-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-5">
              <li>任何可能剧烈上涨的环境（风险无法承受）</li>
              <li>保证金不足、风控能力有限</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>无限风险</strong>：理论上亏损无上限，需极度谨慎</li>
            <li><strong>Gamma 风险</strong>：临近到期，价格接近行权价时盈亏剧烈</li>
            <li><strong>Vega 风险</strong>：作为净卖方 Vega 为负，隐含波动率上升会推高 Call 价格，导致未到期前出现浮亏。</li>
            <li><strong>保证金风险</strong>：上涨时保证金占用激增，可能被动平仓</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>优先 Covered Call</strong>：有现货时用备兑看涨替代裸卖</li>
            <li><strong>行权价远离</strong>：选择更远 OTM（如 +15%），降低被行权概率</li>
            <li><strong>严格止损</strong>：突破关键阻力位后及时平仓或滚动</li>
          </ul>
        </div>
      `,pros:["高胜率：在大概率的横盘或下跌行情中均可获利。","时间价值收割：作为净卖方 Theta 为正，价格停留在行权价下方时随时间流逝持续获利。"],cons:["毁灭性风险：一次极端的暴涨行情可能导致账户穿仓甚至破产。","高保证金要求：交易所通常要求极高的维持保证金，资金利用率低。"]},plainSummary:"赌 BTC 不会大涨，现在先收一笔钱。猜对了横盘或下跌就白赚这笔钱；可一旦猜错、价格暴涨，你的亏损没有上限——这是新手千万别碰的策略。",analogy:{emoji:"🎟️",title:"提前卖掉你手里根本没有的东西",text:'就像你拍胸脯答应"不管 BTC 涨到多少，我都按 11 万卖给你"，可你手里一个币都没有。它真冲到 20 万，你得先花 20 万买回来、再按 11 万卖出，差价全自己赔——涨得越高赔得越多，亏损没有上限。'},pitfalls:['被"高胜率"迷惑：连赢十次每次只收 2% 权利金，一次牛市启动就可能全亏回去、还倒贴本金。','以为"+15% 远 OTM 就安全"：BTC 单日 ±15% 是家常便饭，远虚值在加密市场根本不等于安全垫。',"不留保证金缓冲：上涨时保证金占用激增，账户往往会在最糟的价位被交易所强制平仓。"],quickJudge:{use:"坚定看跌横盘、仓位极小、有风控",avoid:"牛市/可能暴涨；新手一律别碰"},greeks:{delta:"−",gamma:"−",theta:"+",vega:"−"},cryptoNote:'在 Deribit 裸卖 Call 会占用保证金，且到期前就可能被增量强平——哪怕现货没动，IV 单独飙升也会推高空头 mark price 触发追保；币本位下暴涨更是"浮亏 + 抵押品缩水"双杀。别迷信"+15% 远 OTM 安全"，BTC 单日 ±15% 是常态，牛市一启动裸卖 Call 就是账户杀手。务必仓位极小、留足保证金缓冲。'},Mm={id:"diagonal-put",name:"看跌对角价差 (Long Diagonal Put)",category:O.BEARISH,description:"不同到期与不同行权价的 Put 组合，方向 + 时间双因素。",setup:"买入 远月 ITM Put + 卖出 近月 OTM Put",riskProfile:"风险有限（净成本），收益有限（近月价差 + 远月保值）。",idealScenario:"温和下跌、近月 Theta 快衰减，IV 上升。",legs:[{type:"Put",action:"Buy",strikeOffset:1.05,premiumRatio:.06,expiryLabel:"远月"},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02,expiryLabel:"近月"}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
        <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-rose-800 text-sm">Long Diagonal Put 结合下跌方向性与近月时间衰减收益，适合温和下跌的行情表达。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-rose-50 p-4 rounded border border-rose-200">
            <p class="font-bold text-rose-700 mb-2">📉 买 远月 ITM Put</p>
            <p class="text-sm text-slate-700">例：买 $105k Put（付 $6k）</p>
          </div>
          <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
            <p class="font-bold text-emerald-700 mb-2">📈 卖 近月 OTM Put</p>
            <p class="text-sm text-slate-700">例：卖 $90k Put（收 $2k）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $4k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">理想收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">最大收益 ≈ $11k</div>
          <p class="text-xs text-slate-600">BTC 跌至 ≤$90k 时达最大收益（= 价差宽度 $15k − 净成本 $4k）；温和下跌收益较小（如 -3% 约 +$4k）</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">净成本</div>
          <p class="text-xs text-slate-600">若不跌或上涨</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">关键因素</div>
          <div class="text-lg font-bold text-blue-700 mb-2">Theta / Vega</div>
          <p class="text-xs text-slate-600">近月 Theta 利好、事件前 Vega 上升利好</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，温和看跌</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 跌到 $90k (-10%)</p>
            <p class="text-xs text-green-700 mt-1">近月归零，远月 ITM 增值；达最大收益区间，组合盈利约 $11k（= 价差宽度 $15k − 净成本 $4k）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 横盘 $100k (0%)</p>
            <p class="text-xs text-yellow-700 mt-1">近月归零（保留已收的 $2k 权利金），远月略亏约 $1k；组合小幅盈利约 $1k</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 上涨到 $110k (+10%)</p>
            <p class="text-xs text-red-700 mt-1">亏损接近净成本 $4k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>温和下跌、目标区间明确</li>
            <li>IV 有上升预期、近月 Theta 快</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>剧烈下跌（近月空头浮亏与保证金压力大，需及时平仓/滚动）</li>
            <li>IV 高位且预计回落</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Theta 不对称</strong>：近月腿衰减，需及时滚动</li>
          <li><strong>Vega 风险</strong>：事件后 IV 回落压制远月</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>滚动管理</strong>：近月接近行权价或临期时滚动至更低行权价或下一期</li>
          <li><strong>到期搭配</strong>：远月 60–90 天，近月 14–30 天</li>
        </ul>
      </div>
    `,pros:["方向 + 时间双因素：做多下跌与近月 Theta 收益。","成本较低：近月收权利金抵消部分远月成本。"],cons:["剧烈下跌时近月空头浮亏与保证金占用会明显增加，需及时平仓或滚动管理（Deribit 为欧式现金结算，无提前行权/指派之忧，但保证金压力需主动应对）。","IV 回落可能压制远月价值。"]},plainSummary:"赌 BTC 会跌破你卖出的那档近月行权价（本例 $90k）。你买一张到期远的看跌当底仓押下跌方向，同时卖一张快到期的看跌收点钱补贴成本——不管是缓跌还是急跌，只要近月到期时已经跌破 $90k，你能拿到的钱都差不多顶格（≈$11k）；跌得越急，只是近月这条空头腿浮亏和占用的保证金越大，操作上更折腾，并不会让你少赚。",analogy:{emoji:"⏳",title:"长线看空 + 卖短期时间",text:"你长期看空 BTC，买一张到期远的看跌锁住下跌方向（长租约）；同时卖一张快到期的看跌，赚它每天「变质」掉的那点时间价值（短租收益）。近端那张很快到期归零，你把租金落袋，再用剩下的长单继续等它往下走。"},pitfalls:["以为「只要 BTC 跌就赚」——其实收益封顶在价差宽度（跌破 $90k 后不再多赚），真正亏钱的是不跌、上涨或 IV 回落；暴跌反而接近最大盈利，只是近月卖腿会大幅浮亏、占用更多保证金，需留足余量等远月买腿把它对冲回来。","把近月腿放着不管——它逼近行权价或临近到期时，要及时平仓或往下滚动，否则近月一旦到期落入实值，会按结算价现金交割吃下亏损、白白吐回已收的时间价值（Deribit 欧式无指派、无提前行权）。","在 IV 高位建仓——你净持有远月（做多波动率），事件一过 IV 回落，远月那张缩水，方向看对了也可能不赚钱。"],quickJudge:{use:"看温和阴跌、想收近月时间价值",avoid:"怕暴跌急涨、IV 高位将回落"},greeks:{delta:"−",gamma:"−",theta:"+",vega:"+"},cryptoNote:"Deribit 期权欧式现金交割，近月到期自动按结算价了结、无指派或提前行权之忧，但卖出的近月看跌会占用保证金，账户需留足余量防爆。多腿务必用组合单/RFQ 按净价一次成交，逐腿手动挂单在快市易留裸腿；每腿期权费≈标的 0.03%/张（封顶权利金 12.5%）+ 交割费，来回成交的摩擦会侵蚀本就有限的价差收益。"},Om={id:"synthetic-short",name:"合成空头 (Synthetic Short)",category:O.BEARISH,description:"卖出 Call + 买入 Put（同价），复制做空现货的损益。",setup:"卖出 ATM Call + 买入 ATM Put",riskProfile:"风险收益近似于做空 1 BTC（Delta ≈ -1）。",idealScenario:"极度看跌且希望用较低资金表达方向性。",legs:[{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.05}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500 p-5 rounded-lg mb-6">
        <p class="text-rose-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-rose-800 text-sm">合成空头通过 卖 Call + 买 Put（同价）复制做空现货的损益，Delta ≈ -1。<strong>必须使用同一到期日、同一行权价（通常 ATM）</strong>，否则不能精确复制现货的空头曲线。以较低资金表达强烈看跌观点。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-rose-50 p-4 rounded border border-rose-200">
            <p class="font-bold text-rose-700 mb-2">📉 卖 ATM Call</p>
            <p class="text-sm text-slate-700">例：卖 $100k Call，收 $5k</p>
          </div>
          <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
            <p class="font-bold text-emerald-700 mb-2">📈 买 ATM Put</p>
            <p class="text-sm text-slate-700">例：买 $100k Put，付 $5k</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本 ≈ $0</strong>(卖 Call 权利金抵消买 Put 成本,仅需占用保证金)</p>
          <p class="text-xs text-slate-600 mt-1">到期约定：<strong>两腿使用同一到期日</strong>；若需续持，建议在到期前 15–30 天滚动。</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">≈ $100k 上限</div>
          <p class="text-xs text-slate-600">价格归零时收益最大(受价格下限 0 约束)</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">近似无限</div>
          <p class="text-xs text-slate-600">价格上涨越多,亏损越大(需保证金)</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">Delta</div>
          <div class="text-2xl font-bold text-blue-700 mb-2">≈ -1.0</div>
          <p class="text-xs text-slate-600">与做空 1 BTC 接近</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，强烈看跌</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 跌到 $80k (-20%)</p>
            <p class="text-xs text-green-700 mt-1">收益 ≈ $20k（复制做空现货的收益）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 横盘 $100k</p>
            <p class="text-xs text-yellow-700 mt-1">盈亏≈0（时间价值对冲）</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 涨到 $120k (+20%)</p>
            <p class="text-xs text-red-700 mt-1">亏损 ≈ $20k，需保证金管理</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>极度看跌且希望用较低资金建立空头敞口</li>
            <li>具备保证金与风险控制能力</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>无法承受上涨风险的账户</li>
            <li>预期价格企稳或反弹时(方向判断错误则上涨端亏损无限);或现货融券/资金费率成本更低、可直接做空时。</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>保证金风险</strong>：上涨需追加保证金，可能被动平仓</li>
          <li><strong>方向性风险</strong>:组合近似 Delta ≈ -1 的现货空头,净 Vega ≈ 0(卖 Call 与买 Put 的 Vega 相互抵消),主要风险来自标的上涨而非 IV 变动。</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>仓位控制</strong>：名义价值不超过总资金的 3–5 倍</li>
          <li><strong>止损纪律</strong>：上涨到关键阻力位时主动对冲或平仓</li>
          <li><strong>替代方案比较</strong>:若现货/永续可直接做空且资金费率更低,优先用现货空头,合成空头主要用于无法直接做空的场景。</li>
        </ul>
      </div>
    `,pros:["以较低资金复制做空现货的损益（Delta ≈ -1）。","横盘时时间价值大致对冲，盈亏趋近于零。"],cons:["上涨风险近似无限，需保证金与严格风控。","净 Vega/Theta 接近 0，无法像价差类策略那样从 IV 下降或时间衰减中获利。"]},plainSummary:'用两张期权拼出一个"等于卖空 1 个 BTC"的仓位：币跌你就赚、币涨你就亏，而且涨越多亏越多、上不封顶，只是占用的本金比直接借币做空少一些。',analogy:{emoji:"📉",title:"借朋友的手办先卖掉，等降价再买回",text:'就像你看准某款手办要降价，先按现价"借来卖掉"，等它真跌了再低价买回还给人，差价就归你。合成空头用一卖一买两张期权拼出同样的效果——不用真去借币，也能押 BTC 下跌：跌了赚、涨了亏。'},pitfalls:['以为"成本几乎为零"就很安全——其实上涨端亏损近乎无限，BTC 涨 20% 就亏约 $20k，凶险程度和真做空一模一样。',"忽视保证金：卖出的 Call 腿要占用保证金，价格上涨或 IV 飙升时会被追保甚至强平，不是建好仓放着不管就行。","两腿没对齐——必须同一行权价、同一到期日才能精确复制做空曲线；选错行权价或到期日会变成对角/价差，损益完全不同。"],quickJudge:{use:"极度看跌、想用低本金建空头",avoid:"横盘或预期反弹、扛不住上涨亏损"},greeks:{delta:"− (强)",gamma:"≈0",theta:"≈0",vega:"≈0"},cryptoNote:'卖出的 Call 腿在 Deribit 会占用保证金，到期前就可能被增量强平；即便现货没动，IV 单独飙升也会推高空头 mark price 触发追保。币本位计价时暴涨还会"浮亏 + 抵押品缩水"双杀。仓位务必放小、留足保证金缓冲。'},zm=[km,$m,Tm,Cm,Sm,Bm,Am,Mm,Om],Vm={id:"short-straddle",name:"卖出跨式 (Short Straddle)",category:O.NEUTRAL,description:"卖出 ATM Call 和 Put。做空波动率，赌价格不动。",setup:"卖出 ATM Call + 卖出 ATM Put",riskProfile:"收益有限 (限于双份权利金)，风险（上行）无限，下行受 BTC 价格 0 下界限制（本例最大约 $90k）。",idealScenario:"BTC价格死死钉在行权价。",legs:[{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.05}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">卖出跨式 (Short Straddle) 是最激进的做空波动率策略。卖出 ATM Call + ATM Put，收取双份权利金，赌价格将钉在行权价附近不动。收益高但尾部风险无限。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">📉 卖出 ATM Put</p>
              <p class="text-sm text-slate-700">例：卖出 $100k Put，收 $5k</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 卖出 ATM Call</p>
              <p class="text-sm text-slate-700">例：卖出 $100k Call，收 $5k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入</strong> = $10k（双份权利金）</p>
            <p class="text-xs text-slate-600">需要价格保持在中心行权价附近。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$10k</div>
            <p class="text-xs text-slate-600">价格 ≈ $100k 时两腿作废</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">上行突破亏损无上限；下行有限(价格有 0 下界，理论最大约 $90k)</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">上下两点</div>
            <p class="text-xs text-slate-600">$100k ± $10k（总权利金）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期一段时间内窄幅震荡</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收敛：收于 $100k</p>
              <p class="text-xs text-green-700 mt-1">两腿作废，保留 $10k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 中等突破：涨至 $112k / 跌至 $88k</p>
              <p class="text-xs text-yellow-700 mt-1">越过平衡点后开始亏损</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 单边强趋势：涨到 $130k 或跌到 $75k</p>
              <p class="text-xs text-red-700 mt-1">涨到 $130k：净亏约 $20k，且随涨幅持续扩大，理论真正无上限；跌到 $75k：净亏约 $15k（Put 端亏 $20k，Call 端留存 $5k 权利金相抵），受价格 0 下界限制，理论最大亏损约 $90k 封顶，但同样相当可观</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>盈利区间明确、波动率预计回落</li>
              <li>事件后“利好/利空出尽”的横盘期</li>
              <li>可动态对冲管理 Delta/Gamma</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>趋势行情或重大事件前</li>
              <li>无法进行动态对冲的账户</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Gamma 风险</strong>：临近到期，价格靠近中心时盈亏陡峭</li>
            <li><strong>Vega 风险</strong>：IV 上升时净卖方不利</li>
            <li><strong>无限风险</strong>：遇单边极端行情需动态对冲或快速止损</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>选择到期</strong>：7–30 天更利于 Theta 收益</li>
          <li><strong>动态对冲</strong>：用现货/期货对冲偏离的 Delta</li>
          <li><strong>获利平仓</strong>：赚到 50–70% 权利金时提前落袋</li>
          <li><strong>到期建议</strong>：事件驱动 7–14 天；常规 14–30 天。临期 Gamma 较高，靠近中心需提前管理。</li>
        </ul>
      </div>
      `,pros:["最大化权利金收入：ATM期权拥有最高的时间价值。","Theta收益：时间衰减速度极快，对卖方非常有利。"],cons:["方向性风险不对称：向上突破时对手方 Call 端理论亏损无上限；向下突破虽受 BTC 价格 0 下界限制（理论最大约 $90k，= 行权价 $100k − 已收 $10k 权利金），但仍可能是难以承受的巨额亏损，两个方向都足以严重侵蚀本金。","管理难度大：需要极强的风控能力和动态对冲技巧。"]},plainSummary:"赌 BTC 接下来就在原地附近晃、不大涨也不大跌，你现在先收两笔钱；只要它真不怎么动，这两笔钱就白赚——可一旦突然暴涨或暴跌，亏损没有上限。",analogy:{emoji:"🏦",title:"当一家不设赔付上限的保险公司",text:'你像保险公司一样，同时卖出"涨保险"和"跌保险"两张保单，当场收两笔保费。只要这段时间风平浪静、币价基本不动、没人来索赔，两笔保费全归你；可一旦出了大灾——暴涨或暴跌——赔付没有上限，可能一次把保费全赔光还倒贴老本。'},pitfalls:['把"高胜率"当"低风险"：大多数时候确实能稳收双份权利金、看着很安稳，但只要一次单边暴动就可能吞掉好几个月的盈利还倒贴，这是典型的"捡钢镚被压路机碾"。',"裸放不对冲：卖跨式开仓时 Delta≈0，可价格一动就因负 Gamma 快速偏向一边，必须用现货/期货动态对冲或及时止损，放着不管等于赌命。","临近到期还死扛：越接近到期 Gamma 越凶，价格在行权价附近一抖盈亏就剧烈翻脸；别因舍不得那点权利金而不平仓，常被最后几天的波动反杀。"],quickJudge:{use:"笃定横盘震荡、IV 高位、能盯盘对冲",avoid:"趋势行情、重大事件前、无法盯盘止损"},greeks:{delta:"≈0",gamma:"−(强)",theta:"+(强)",vega:"−(强)"},cryptoNote:'在 Deribit 卖跨式会占用保证金、到期前就可能被增量强平：即便现货没怎么动，只要 IV 单独飙升把空头 mark price 推高，也会触发追加保证金甚至强平；若用币本位保证金，暴跌时还会"浮亏 + 抵押品同步缩水"双杀。务必把仓位放小、预留充足保证金缓冲。'},Em={id:"short-strangle",name:"卖出宽跨式 (Short Strangle)",category:O.NEUTRAL,description:"卖出两侧虚值期权扩大盈利区间；收益有限、尾部风险无限。",setup:"卖出 OTM Call + 卖出 OTM Put",riskProfile:"收益有限（净收）；风险无限；Theta 正、Vega 负；需严控尾部风险与保证金。",idealScenario:"宽幅震荡且无重大事件；IV 高位预期回落。",legs:[{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">卖出宽跨式 (Short Strangle) 是 Short Straddle 的稳健版本。卖出 OTM Call + OTM Put，扩大盈利区间，牺牲部分权利金，降低被突破的概率。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">📉 卖出 OTM Put</p>
              <p class="text-sm text-slate-700">例：卖 $90k Put，收 $2k</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 卖出 OTM Call</p>
              <p class="text-sm text-slate-700">例：卖 $110k Call，收 $2k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入</strong> = $4k（比跨式少，但区间更宽）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$4k</div>
            <p class="text-xs text-slate-600">价格在 $90k–$110k 区间内</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">向上突破风险无限（卖出 Call 端）；向下风险有限，最大约 $86k（= 下行权价 $90k − 净权利金 $4k）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">上下两点</div>
            <p class="text-xs text-slate-600">下：$90k − $4k；上：$110k + $4k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预计区间震荡</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 区间内：$95k–$105k</p>
              <p class="text-xs text-green-700 mt-1">两腿作废，保留 $4k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 接近边界：跌至 $86k 或涨至 $114k（盈亏平衡点）</p>
              <p class="text-xs text-yellow-700 mt-1">净收入 $4k 权利金被完全侵蚀，刚好打平；再往外突破就转为净亏损</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 突破区间：涨到 $120k 或跌到 $85k</p>
              <p class="text-xs text-red-700 mt-1">风险单边放大，需及时风控</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>较宽的震荡区间、阻力支撑明确</li>
              <li>IV 高位但预计回落</li>
              <li>具备动态对冲能力</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>可能出现趋势行情或事件驱动的突破</li>
              <li>不愿承担尾部风险</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>尾部风险</strong>：突破区间后亏损无上限</li>
            <li><strong>Gamma 风险</strong>：接近边界与到期前极为敏感</li>
            <li><strong>Vega 风险</strong>：IV 上升时净卖方不利</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>边界设定</strong>：将上下行权价设在关键位外 8–12%</li>
          <li><strong>到期与滚动</strong>：短期更利于 Theta；靠近边界时滚动调整</li>
          <li><strong>提前平仓</strong>：收益达到 50–70% 时锁定利润</li>
          <li><strong>到期建议</strong>：14–30 天；临期 Gamma 增大，价格接近边界时提前管理与对冲。</li>
        </ul>
      </div>
      `,pros:["胜率提升：相比跨式策略，获利区间更宽，容错率更高。","灵活性：可根据对支撑阻力的判断调整行权价。"],cons:["黑天鹅风险：若价格突破区间，风险依然是无限的，需严格止损。","保证金占用与追缴风险：作为净卖方，IV 飙升或价格逼近行权价时保证金要求会显著上升，可能被强制减仓或追加保证金。"]},plainSummary:"赌 BTC 在一个较宽的区间里来回晃、既不大涨也不大跌，这样你卖出的两份期权都作废、白收两笔钱；但万一价格冲出区间——尤其大涨——亏损可能没有上限。",analogy:{emoji:"🏦",title:"当一家不买再保险的保险公司",text:'你同时卖两份保险——一份赌"不会大涨"、一份赌"不会大跌"，平时稳收两笔保费。只要没出大事就白赚。但你没给自己买再保险：真碰上黑天鹅（暴涨暴跌），赔付可能把保费连本带利全吞掉，向上更是没有封顶。'},pitfalls:['被"高胜率、区间又宽"迷惑——大多数时候确实稳收两笔小钱，但一次暴涨可能把之前赚的全亏回去还倒贴，且上方亏损没有上限。',"仓位开太大、不留缓冲——净卖方占用保证金，IV 一飙升或价格逼近行权价，保证金要求骤增，可能在最差的位置被增量强平。","价格逼近某一侧还死扛——临期 Gamma 急剧放大，被测试一侧亏损加速；应及时向外滚动或减仓，而不是干等它自己回到区间内。"],quickJudge:{use:"笃定宽幅震荡、IV 高位将回落",avoid:"可能单边突破、有重大事件或扛不住尾部风险"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:'作为净卖方在 Deribit 要占用保证金、到期前就可能被增量强平：即使现货没动，IV 单独飙升也会推高两腿空头的 mark price 触发追保；币本位（coin-margined）合约暴跌时更是"浮亏 + 抵押品 BTC 缩水"双杀。务必把仓位开小、留足保证金缓冲，别用满杠杆。'},Dm={id:"iron-condor",name:"铁鹰式 (Iron Condor)",category:O.NEUTRAL,description:"双侧卖出并用远翼保护的宽区间收租；有限风险、有限收益。",setup:"卖出 OTM Call/Put + 买入 深OTM Call/Put",riskProfile:"风险有限（翼宽−净收）；收益有限（净收）；Theta 正（时间衰减有利）、Vega 负（波动率上升不利）、Gamma 负（临期风险增大）；四腿管理成本。",idealScenario:"宽区间震荡、IV 回落；支撑阻力明确。",legs:[{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02},{type:"Put",action:"Buy",strikeOffset:.85,premiumRatio:.01},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02},{type:"Call",action:"Buy",strikeOffset:1.15,premiumRatio:.01}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">铁鹰 (Iron Condor) 通过同时卖出上下两侧的 OTM 期权，并用更远 OTM 期权做保护，构建“有限风险、有限收益”的宽区间收租策略，胜率较高。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">📉 下方：卖 $90k Put / 买 $85k Put</p>
              <p class="text-sm text-slate-700">净收 ≈ $1k（$2k − $1k）</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 上方：卖 $110k Call / 买 $115k Call</p>
              <p class="text-sm text-slate-700">净收 ≈ $1k（$2k − $1k）</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总净收入</strong> ≈ $2k；<strong>翼宽</strong> = $5k</p>
            <p class="text-xs text-slate-600">风险与收益均已锁定。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$2k</div>
            <p class="text-xs text-slate-600">价格介于 $90k–$110k 时实现</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$3k</div>
            <p class="text-xs text-slate-600">翼宽 $5k − 净收入 $2k = $3k</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">两侧各 1 点</div>
            <p class="text-xs text-slate-600">下：$90k − $2k；上：$110k + $2k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC 在 $90k–$110k 震荡</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 区间内收敛</p>
              <p class="text-xs text-green-700 mt-1">四腿作废，保留 $2k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 接近边界：$88k / $112k（盈亏平衡点）</p>
              <p class="text-xs text-yellow-700 mt-1">恰为上下盈亏平衡点（0 盈亏）；越过后开始亏损，注意风控</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 突破：跌到 $85k / 涨到 $115k+</p>
              <p class="text-xs text-red-700 mt-1">边翼提供保护，最大亏损 $3k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>宽区间震荡、IV 高位回落预期</li>
              <li>希望锁定风险上限的净卖方策略</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>趋势行情或事件驱动的突破期</li>
              <li>不愿承担双侧管理与滚动成本</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Gamma 风险（临期风险）</strong>：最后7-14天Gamma急剧增大，价格接近边界时盈亏曲线变陡，亏损加速</li>
          <li><strong>Vega 风险（波动率风险）</strong>：隐含波动率上升时，期权价格上升对净卖方不利，可能产生未实现亏损</li>
          <li><strong>滑点与交易成本</strong>：四腿结构开平仓存在较大滑点，佣金成本相对较高</li>
          <li><strong>突破风险</strong>：价格突破保护翼时，最大亏损锁定但需要及时止损或滚动</li>
          <li><strong>流动性风险</strong>：远翼期权流动性较差，平仓时可能面临较大买卖价差</li>
        </ul>
      </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>翼宽设置</strong>：常用 5k–10k；翼越宽越安全但净收越低</li>
          <li><strong>到期选择</strong>：信用结构建议 30–45 天（可放宽至 14–45 天兼顾管理成本）；临期 Gamma 增大、收益曲线变陡时应提前落袋降低尾部风险</li>
          <li><strong>分批管理</strong>：价格靠近边界时滚动或对冲</li>
        </ul>
      </div>
      `,pros:["风险严格受控：最大亏损已知且有限，适合稳健型投资者。","方向中性：无需预测市场方向，只需判断波动区间。"],cons:["收益折损：买入保护性期权支出了部分权利金，降低了潜在收益。","交易成本：涉及四条腿的交易，佣金成本较高。"]},plainSummary:"赌 BTC 在一个区间里晃来晃去、不大涨也不大跌。只要它待在区间内，你就稳稳收一笔钱；万一冲出区间，亏损也被提前封死、不会变成无底洞。",analogy:{emoji:"🛣️",title:"收过路费",text:"你在一段路的两头各设一个收费站收过路费（卖出期权的权利金），只要车流（币价）在中间这段路上晃悠，钱就稳稳进口袋；只有车冲出两头的收费站才会亏，但你提前在更远处装了护栏（买入的保护腿），所以亏损有上限、不会失控。"},pitfalls:['以为"胜率高=稳赚"：区间内确实常赢小钱，但一次单边突破的亏损（这里最高 $3k）能吞掉好几次收益，盈亏并不对称。',"区间设太窄想多收权利金：价格稍微一动就被测试边界，反而更容易亏；宽区间胜率高但收得少，要权衡。","临近到期还死扛：最后 1–2 周 Gamma 急剧放大，价格贴边时盈亏曲线变陡，该提前止盈或滚动，别等到期搏一把。"],quickJudge:{use:"宽幅震荡、IV 高位预期回落",avoid:"趋势行情或事件突破前"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit 四条腿各自付费（约标的 0.03%/张，行权再加交割费），来回开平就是约 8 次成交，会明显侵蚀这点净收入。务必用组合单/RFQ 一次性按净价成交，别手动逐腿挂单——快市里逐腿很容易只成交一两条腿、留下裸露的卖出腿，瞬间敞口失控。"},Rm={id:"iron-butterfly",name:"铁蝶式 (Iron Butterfly)",category:O.NEUTRAL,description:"卖出跨式 + 买入保护。追求最大化权利金的有限风险策略。",setup:"卖出 ATM Call/Put + 买入 OTM Call/Put",riskProfile:"风险有限，收益较高 (相对铁鹰)。",idealScenario:"BTC精准停留在现价。",legs:[{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.04},{type:"Put",action:"Buy",strikeOffset:.9,premiumRatio:.01},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.04},{type:"Call",action:"Buy",strikeOffset:1.1,premiumRatio:.01}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">铁蝶 (Iron Butterfly) 以“中心卖出、两翼保护”最大化中心权利金收入，同时用外侧 OTM 期权限制尾部风险。适合价格准确停留在中心行权价附近的横盘环境。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 卖出 ATM Call + 卖出 ATM Put</p>
              <p class="text-sm text-slate-700">例：卖 $100k Call（收 $4k） + 卖 $100k Put（收 $4k）</p>
            </div>
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">🛡️ 买入 OTM Call + 买入 OTM Put</p>
              <p class="text-sm text-slate-700">例：买 $110k Call（付 $1k） + 买 $90k Put（付 $1k）</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净收入</strong> = $8k − $2k = <strong>$6k</strong></p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$6k</div>
            <p class="text-xs text-slate-600">价格 ≈ $100k 时达到</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$4k</div>
            <p class="text-xs text-slate-600">翼宽 $10k − 净收 $6k = $4k</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">中心两侧各 1 点</div>
            <p class="text-xs text-slate-600">下：$100k − $6k；上：$100k + $6k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预计收敛于中心</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收敛：收于 $100k</p>
              <p class="text-xs text-green-700 mt-1">获最大收益 $6k</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 偏离：收于 $96k / $104k</p>
              <p class="text-xs text-yellow-700 mt-1">仍在盈亏平衡点（$94k / $106k）以内，盈利降至约 $2k</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 突破：收于 $88k / $112k+</p>
              <p class="text-xs text-red-700 mt-1">风险被两翼限制，最大亏损 $4k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>价格预计精确收敛至某中心行权价</li>
              <li>想提高净权利金收入并控制尾部风险</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>方向性突破概率较高</li>
              <li>难以判断价格能否精准停留在中心行权价</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>中心精度</strong>：需要更精准的中心点位判断</li>
            <li><strong>Gamma 风险</strong>：中心附近临期曲率高，盈亏变化快</li>
            <li><strong>Theta</strong>：作为净卖方，时间价值衰减是主要盈利来源，价格贴近中心时 Theta 最有利。</li>
            <li><strong>Vega 风险</strong>：组合为净空波动率，IV 上升会扩大中心两腿亏损、推迟到期收敛。</li>
            <li><strong>滑点与成本</strong>：四腿结构的滚动与平仓成本较高</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>中心选择</strong>：参考“最大痛点”与密集成交区</li>
          <li><strong>翼宽规划</strong>：翼宽越大，保护腿越深度虚值、成本越低，净收通常更高，但最大亏损（翼宽 − 净收）也随之扩大；翼宽越窄净收更低，但最大亏损上限也更小，需按风险承受能力权衡取舍</li>
          <li><strong>提前落袋</strong>：当两个中心腿剩余时间价值不多时，提前平仓锁利</li>
          <li><strong>到期建议</strong>：信用结构建议 30–45 天；临期曲率增大，价格接近中心时提前管理。</li>
        </ul>
      </div>
      `,pros:["高收益潜力：核心部位为ATM期权，权利金收入丰厚。","风险受控：两翼的保护腿锁定了极端行情的亏损上限。"],cons:["获利难度：需要价格在到期时非常接近中心行权价，对点位要求较高。","收益空间有限：净收 $6k 即为收益上限，且仅在价格紧贴中心行权价时实现，盈利区间（$94k–$106k）窄于铁鹰，胜率更低。"]},plainSummary:"赌 BTC 到期前几乎不动、就停在现价附近，这样你能稳稳收一笔钱；万一价格跑偏太多，亏损也被两翼提前封死，不会变成无底洞。",analogy:{emoji:"🎯",title:"押飞镖正中靶心",text:'就像赌飞镖正好钉在靶心（BTC 停在现价）。正中靶心拿满奖金，偏一点奖金就缩水，飞太远脱靶才亏钱——但你提前给"脱靶"买了保险，再离谱亏损也有封顶。'},pitfalls:['以为"只要在区间里就稳赚"——其实盈利区间很窄（约 $94k–$106k），只有价格紧贴中心 $100k 才拿满 $6k，稍微偏离收益就大幅缩水。',"随手把中心定在现价就不管了——若 $100k 不在密集成交区/最大痛点附近，价格被推开的概率很高，选中心要结合点位而非图省事。","临近到期还死扛——中心附近临期 Gamma 极高，价格稍一抖动盈亏就剧烈翻转，时间价值剩得不多时应提前平仓落袋。"],quickJudge:{use:"笃定 BTC 到期前几乎不动、紧贴现价",avoid:"预计要突破、方向不明或临近到期"},greeks:{delta:"≈0",gamma:"−(强)",theta:"+",vega:"−"},cryptoNote:"四条腿在 Deribit 每张手续费≈标的 0.03%（封顶权利金 12.5%）再加交割费，来回成交会侵蚀本就不宽的 $6k 净收益；务必用组合单/RFQ 按净价一次性成交，别手动逐腿挂单——快市里漏挂一腿就成了裸卖敞口。"},Um={id:"long-call-butterfly",name:"买入看涨蝶式 (Long Call Butterfly)",category:O.NEUTRAL,description:"利用三个行权价构建“利润尖塔”。低成本押注精准点位。",setup:"买入 1x 低Call + 卖出 2x 中Call + 买入 1x 高Call",riskProfile:"风险极低，收益有限但倍率高。",idealScenario:"BTC到期时精准停在中间行权价。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.06},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">买入看涨蝶式 (Long Call Butterfly) 以三个等距行权价，低成本博取价格在到期时精确回归中间行权价的“利润尖塔”。风险极低、收益有限但赔率高。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 买 1× 低价 Call + 买 1× 高价 Call</p>
              <p class="text-sm text-slate-700">例：买 $95k Call（付 $6k） + 买 $105k Call（付 $2k）</p>
            </div>
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">📉 卖 2× 中间价 Call</p>
              <p class="text-sm text-slate-700">例：卖 2× $100k Call（收 $3.5k × 2 = $7k）</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $6k + $2k − $7k = <strong>$1k</strong></p>
            <p class="text-xs text-slate-600">示例翼宽 = $5k（$95k↔$100k↔$105k）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">翼宽 − 成本</div>
            <p class="text-xs text-slate-600">$5k − $1k = <strong>$4k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
            <div class="text-xs text-amber-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-amber-700 mb-2">$1k</div>
            <p class="text-xs text-slate-600">净成本（风险极低）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$96k / $104k</div>
            <p class="text-xs text-slate-600">净成本 $1k 处；区间内（$96k–$104k）盈利，偏离中间价越远收益越低</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预计回归 $100k</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收于 $100k</p>
              <p class="text-xs text-green-700 mt-1">获最大收益 $4k（400% 回报）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 收于 $97k 或 $103k</p>
              <p class="text-xs text-yellow-700 mt-1">仍盈利但少于峰值</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 收于 $95k 以下或 $105k 以上</p>
              <p class="text-xs text-red-700 mt-1">亏损净成本 $1k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>价格预计精确回归某中心行权价</li>
              <li>想用极低风险博取高赔率</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>极端波动或趋势行情</li>
              <li>对中心点位没有信心</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>中心精度</strong>：偏离中间价时收益快速下降</li>
            <li><strong>Gamma 风险</strong>：靠近中间价的曲率变化导致盈亏敏感</li>
            <li><strong>Theta</strong>：价格贴近中间价时时间衰减为正向助力，临近到期峰值更尖锐；远离中间价则 Theta 转为不利。</li>
            <li><strong>Vega</strong>：整体偏空波动率（净卖 2× ATM 主导），隐含波动率上升会压缩当前市值，IV 下降通常有利于价格回归峰值。</li>
            <li><strong>流动性</strong>：中间腿（卖 2×）的流动性与点差需关注</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>翼宽选择</strong>：5–10%；翼越宽获利区间越宽、容错度越高，但净成本占翼宽比例通常更高、杠杆倍数（回报率）越低；翼越窄杠杆倍数越高，但对到期价格精准度要求也更高</li>
            <li><strong>到期规划</strong>：14–30 天常用；临期峰值更尖锐</li>
            <li><strong>分批平仓</strong>：接近峰值时分批锁利，避免尾部回撤</li>
          </ul>
        </div>
      `,pros:["极低成本：构建成本通常非常低廉。","高盈亏比：若判断精准，收益率可达投入成本的数倍甚至十倍。"],cons:["低胜率：需要到期价格精准落在中间行权价（本例 $100k）附近才能拿到最大收益，价格稍有偏离利润就会明显缩水（如本例收于 $97k/$103k 时利润已从峰值 $4k 降至 $1k），对到期点位判断的精度要求很高。","区间外亏损：若价格大幅波动超出区间，策略将损失全部投入本金。"]},plainSummary:"花一小笔钱赌 BTC 到期时正好停在某个价位附近。猜得越准赚得越多，价格大涨或大跌都只亏掉这笔小钱，亏不了更多。",analogy:{emoji:"🎯",title:"押飞镖扎中靶心",text:"像花小钱赌一支飞镖能扎进靶心：正中红心赔率最高、回报能翻好几倍；扎在红心旁边还能小赚一点；要是脱靶（BTC 大涨或大跌），顶多输掉这笔小小的下注钱，不会更多。"},pitfalls:["把“风险极低”当成“容易赚”——它其实胜率很低，价格必须精准压在中间价附近才大赚，稍微偏离就回吐，大涨大跌直接亏光本金。","被 400% 赔率迷惑，忽略 BTC 高波动很难“乖乖停”在一个点，而盈利尖塔又窄，真打中的概率并不高。","贪图峰值迟迟不止盈——尖塔越临近到期越尖越窄，价格稍微一动利润就塌，接近峰值时应分批锁利。"],quickJudge:{use:"笃定 BTC 到期窄幅停在某点位",avoid:"趋势行情或看不准具体点位"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:"四条腿成本侵蚀严重：Deribit 每张手续费约为标的的 0.03%（封顶为权利金的 12.5%）外加交割费，四腿来回叠加，极易吃掉本就微薄的净成本与利润。务必用组合单 / RFQ 一次性按净价成交，别手动逐腿挂单——快市里容易只成交部分、留下裸腿敞口。"},Nm={id:"short-guts",name:"卖出内陷宽跨式 (Short Guts)",category:O.NEUTRAL,description:"卖出ITM Call和ITM Put。极度激进的做空波动率。",setup:"卖出 ITM Call + 卖出 ITM Put",riskProfile:"收益有限（最大约 $6k），风险（上行）无限。",idealScenario:"BTC价格回归到两行权价中间。",legs:[{type:"Call",action:"Sell",strikeOffset:.95,premiumRatio:.08},{type:"Put",action:"Sell",strikeOffset:1.05,premiumRatio:.08}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-blue-800 text-sm">卖出内陷宽跨式 (Short Guts) 同时卖出深实值的 Call 与 Put，最大化权利金收入，赌价格回归两行权价之间。做空波动率强烈，风险与管理难度极高。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
              <p class="font-bold text-blue-700 mb-2">📈 卖 ITM Call</p>
              <p class="text-sm text-slate-700">例：卖 $95k Call，收 $8k</p>
            </div>
            <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
              <p class="font-bold text-cyan-700 mb-2">📉 卖 ITM Put</p>
              <p class="text-sm text-slate-700">例：卖 $105k Put，收 $8k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总净收入</strong> ≈ $16k</p>
            <p class="text-xs text-slate-600">回归中心区间即可获利，但尾部风险巨大。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$6k</div>
            <p class="text-xs text-slate-600">净权利金 $16k 减去 $10k 行权价宽度后净保留 $6k</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">上行（Call 侧）亏损无限；下行（Put 侧）亏损随价格下跌放大但有上限（约 $89k）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡区</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$89k / $111k</div>
            <p class="text-xs text-slate-600">两行权价之间盈亏恒为 $6k 平顶，跌破 $89k 或涨破 $111k 才开始亏损</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，押注中间回归</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 收敛：$95k–$105k</p>
              <p class="text-xs text-green-700 mt-1">两腿仍为实值，需偿付约 $10k 内在价值，净保留 $6k（达到最大盈利）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 接近边界：$90k / $110k</p>
              <p class="text-xs text-yellow-700 mt-1">盈亏约 +$1k，接近盈亏平衡点，Gamma 敏感，注意对冲</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 趋势突破：$120k 或 $80k</p>
              <p class="text-xs text-red-700 mt-1">越过盈亏平衡点（$111k/$89k），亏损约 $9k，并随偏离持续放大</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
            <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
              <li>极低波动率、价格回归中枢概率高</li>
              <li>具备强动态对冲与风控能力</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>趋势或事件驱动的行情</li>
              <li>无法承受无限风险的账户</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Gamma 风险</strong>：临期两侧曲率极高，盈亏剧烈</li>
            <li><strong>Vega 风险</strong>：IV 上升时净卖方不利</li>
            <li><strong>保证金压力</strong>：实值腿浮亏会持续占用保证金，行情剧烈波动时有被强平风险（BTC 期权为欧式结算，不存在提前行权）</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>避免临期</strong>：优先 14–30 天，降低 Gamma 爆炸</li>
            <li><strong>动态对冲</strong>：用期货/现货快速对冲偏离的 Delta</li>
            <li><strong>分批落袋</strong>：收敛时分批平仓，避免尾部反扑</li>
          </ul>
        </div>
      `,pros:["巨额权利金：收取的权利金远高于其他中性策略。","容错区间宽：只要到期价格落在两行权价之间（如本例 $95k–$105k），无论具体收于何处，盈亏都固定在最大值 $6k；行情提前回归区间时也可分批平仓提前落袋，无需等到到期。"],cons:["流动性风险：深实值期权通常流动性较差，点差较大。","极高风险：任何大幅波动都可能导致巨额亏损；BTC 主流期权为欧式现金交割、无提前行权，但保证金占用高，行情剧烈波动时可能被增量强平在最差位置。"]},plainSummary:"赌 BTC 接下来不大涨也不大跌、稳在一个中间区间：先一次性收一大笔钱，只要价格不冲出区间你就稳赚一小份；可一旦单边大涨大跌（尤其大涨），亏损可能没有底，是老手才敢碰的玩法。",analogy:{emoji:"🏦",title:"没买再保险的保险公司",text:'你像一家保险公司，先一次性收一大笔保费（权利金），赌这段时间不会出大事故。币价在中间区间晃悠时，你稳稳赚这笔钱；可你没买再保险（没有保护腿），万一 BTC 暴涨出了"特大事故"，赔付没有上限，一次就能把好几轮的保费连本带利亏光；就算暴跌，赔付也会封顶在本金附近（约 $89k 量级），但同样痛到肉疼。'},pitfalls:['以为"收了 $16k 权利金就赚 $16k"——卖的是深实值期权，收到的钱里大部分是要还回去的内在价值，到期最多只能净留约 $6k。','只盯着"高胜率"忽略尾部——中间区间确实稳赚，但 BTC 一旦单边大涨，亏损没有上限，一次突破就能吞掉好几轮的利润，绝不能裸放不管。',"仓位开太大、放着不盯盘——深实值腿流动性差、点差大、占用保证金高，行情一动就可能被强平在最差的位置。"],quickJudge:{use:"笃定窄幅震荡、能盯盘对冲",avoid:"可能单边突破、扛不住无限亏损"},greeks:{delta:"≈0",gamma:"−(强)",theta:"+",vega:"−"},cryptoNote:'BTC 期权多在 Deribit 交易（欧式、现金结算），卖方需占用保证金且到期前可被<strong>增量强平</strong>。尤其警惕 Vega 风险：哪怕现货原地不动，IV 单独飙升也会推高空头的 mark price，触发追加保证金甚至强平。若用币本位保证金，BTC 暴涨时更会"浮亏放大 + 抵押品同步缩水"双杀。务必把仓位放小、多留保证金缓冲。'},Hm={id:"calendar-call",name:"看涨时间价差 (Call Calendar Spread)",category:O.NEUTRAL,description:"同行权价不同到期的 Call 组合，做多时间与波动率。",setup:"买入 远月 ATM Call + 卖出 近月 ATM Call",riskProfile:"风险有限（权利金差），收益有限（近月衰减带来的净值提升）。",idealScenario:"价格在行权价附近徘徊，近月 Theta 快速衰减，IV 上升。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05,expiryLabel:"远月"},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.04,expiryLabel:"近月"}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">Call Calendar 通过同行权价不同到期的 Call 组合，利用近月期权更快的 Theta 衰减与事件前的 IV 上升来获利。价格在行权价附近徘徊时最优。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <p class="text-slate-700 mb-3"><strong>远月多头 + 近月空头</strong></p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
            <p class="font-bold text-indigo-700 mb-2">📈 买入 远月 ATM Call</p>
            <p class="text-sm text-slate-700">例：买 $100k Call（付 $5k）</p>
          </div>
          <div class="bg-purple-50 p-4 rounded border border-purple-200">
            <p class="font-bold text-purple-700 mb-2">📉 卖出 近月 ATM Call</p>
            <p class="text-sm text-slate-700">例：卖 $100k Call（收 $4k）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $1k（远月 − 近月）</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">理想收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">近月归零 + 远月保值</div>
          <p class="text-xs text-slate-600">价格≈Strike 时近月作废，远月保留时间价值</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">净成本</div>
          <p class="text-xs text-slate-600">若价格远离行权价并且 IV 下降</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">关键因素</div>
          <div class="text-lg font-bold text-blue-700 mb-2">Theta / Vega</div>
          <p class="text-xs text-slate-600">近月快衰减（Theta），事件前 IV 上升（Vega）</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，事件前 30 天建仓</p>
        <div class="bg-white/70 rounded p-4 mb-3">
          <p class="text-sm text-slate-700 mb-2"><strong>建仓：</strong>买远月 $100k Call（$5k），卖近月 $100k Call（$4k），净成本 $1k</p>
        </div>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收敛：到近月到期时收于 $100k</p>
            <p class="text-xs text-green-700 mt-1">近月归零，远月历经约 30 天时间衰减，但因 IV 回升部分抵消跌幅，现值降至约 $2.5k（较建仓时的 $5k 有所缩水），组合盈利约 $1.5k（远月现值 $2.5k − 净成本 $1k）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 温和偏离：收于 $110k (+10%) / $90k (-10%)</p>
            <p class="text-xs text-yellow-700 mt-1">$110k：近月实值不归零，需用远月的盈利对冲近月到期损失，组合盈利收窄；$90k：近月虚值归零（这一腿本身有利），但远月因偏离行权价，剩余时间价值也低于理想情形，组合盈利同样低于最佳情形（甚至可能小幅亏损）</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 远离 + IV 下降</p>
            <p class="text-xs text-red-700 mt-1">可能亏损净成本 $1k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>事件前窗口（IV 有望上升）</li>
            <li>预计价格在行权价附近震荡</li>
            <li>想做多时间价值与 Vega</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>趋势行情（远离行权价）</li>
            <li>IV 处于历史高位且预计回落</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Theta 不对称</strong>：近月衰减快，远月保值；价格上涨突破行权价时近月不归零，下跌则近月仍归零但远月同步贬值</li>
          <li><strong>Vega 风险</strong>：事件后 IV 下跌可能压制远月价格（Vega Crush）</li>
          <li><strong>流动性</strong>：滚动近月腿需关注点差与费用</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>到期搭配</strong>：远月 60–90 天 + 近月 14–30 天较常见</li>
          <li><strong>行权价选择</strong>：通常选 ATM，获得最大 Theta/Vega 效果</li>
          <li><strong>滚动策略</strong>：近月到期前滚动至下一期，维持结构</li>
        </ul>
      </div>
    `,pros:["做多时间与波动率：近月 Theta 快衰减、事件前 Vega 有利。","成本可控：净成本较低，风险通常仅限净投入。"],cons:["对点位敏感：价格大幅上涨突破行权价时，近月转为实值、不再归零，组合利润被压缩；若价格大幅下跌，近月虽仍会归零，但远月时间价值同步走低，利润同样受限。","事件预期风险：事件落地后 IV 回落可能压制远月期权价格。"]},plainSummary:"买一张到期晚的看涨、同时卖一张同价位但到期早的看涨。赌币价就赖在这个价位附近不大动——让到期早那张先“烂掉”，你白赚它的钱，手里还留着到期晚的那张继续等机会。",analogy:{emoji:"⏳",title:"卖临期、留长保",text:"想象你手里有两张一模一样的优惠券，一张这周到期、一张下个月到期。这周到期那张时间一过就废、掉价飞快，你赶紧把它卖掉收钱；保质期长那张掉价慢，自己留着。只要东西的价钱不大涨大跌，快到期那张作废你白赚，长期那张还在手——赚的就是两张“过期速度”的差。"},pitfalls:["把它当成赌方向：日历其实赌的是“不动”。币价大涨大跌反而两边都吃亏，原地踏步在行权价附近才最甜。","IV 高位入场：日历是做多波动率（Vega 为正），最怕事件落地后 IV 崩塌（Vega Crush）直接砸低远月那张——利好兑现了仓位反而亏。该在 IV 偏低、预期会升时建仓。","近月到期不管理：近月快到期时若价格已跑偏，要及时平仓或把近月滚到下一期；放着不管会变成只剩远月单腿的方向裸头寸。"],quickJudge:{use:"预计横盘、IV 低位待升",avoid:"预计单边大行情、IV 高位"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"+(强)"},cryptoNote:"Deribit 为欧式现金结算：日历的近月先到期、结算成现金后，剩下的远月就成了单腿裸多头，记得同步管理方向风险。成本上两腿费用叠加（期权费≈标的 0.03%/张、封顶权利金 12.5%）+近月每期滚动来回成交，容易吃掉本就微薄的净价差——务必用组合单/RFQ 按净价一次成交，别逐腿手挂（快市易留裸腿）。"},_m={id:"calendar-put",name:"看跌时间价差 (Put Calendar Spread)",category:O.NEUTRAL,description:"同行权价不同到期的 Put 组合，做多时间与波动率。",setup:"买入 远月 ATM Put + 卖出 近月 ATM Put",riskProfile:"风险有限（权利金差），收益有限（近月衰减带来的净值提升）。",idealScenario:"价格在行权价附近徘徊，近月 Theta 快速衰减，IV 上升。",legs:[{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.05,expiryLabel:"远月"},{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.04,expiryLabel:"近月"}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">Put Calendar 结构与 Call Calendar 类似，但更适合下跌风险偏好者在行权价附近做多时间与波动率。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
            <p class="font-bold text-indigo-700 mb-2">📉 买入 远月 ATM Put</p>
            <p class="text-sm text-slate-700">例：买 $100k Put（付 $5k）</p>
          </div>
          <div class="bg-purple-50 p-4 rounded border border-purple-200">
            <p class="font-bold text-purple-700 mb-2">📈 卖出 近月 ATM Put</p>
            <p class="text-sm text-slate-700">例：卖 $100k Put（收 $4k）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $1k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">理想收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">近月归零 + 远月保值</div>
          <p class="text-xs text-slate-600">价格≈Strike 时近月作废，远月保留时间与 IV</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">净成本</div>
          <p class="text-xs text-slate-600">价格远离行权价且 IV 下跌</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">关键因素</div>
          <div class="text-lg font-bold text-blue-700 mb-2">Theta / Vega</div>
          <p class="text-xs text-slate-600">近月快衰减（Theta），事件前 IV 上升（Vega）</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，事件前 30 天建仓</p>
        <div class="bg-white/70 rounded p-4 mb-3">
          <p class="text-sm text-slate-700 mb-2"><strong>建仓：</strong>买远月 $100k Put（$5k），卖近月 $100k Put（$4k），净成本 $1k</p>
        </div>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收敛：收于 $100k</p>
            <p class="text-xs text-green-700 mt-1">近月归零，远月价格因 IV↑ 上升，组合盈利约 $1.5k</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 温和偏离：$110k (+10%) / $90k (-10%)</p>
            <p class="text-xs text-yellow-700 mt-1">价格偏离行权价后远月时间价值衰减，组合利润明显回落（约 +$0.1k，接近盈亏平衡）</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 远离 + IV 下降</p>
            <p class="text-xs text-red-700 mt-1">亏损净成本 $1k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>事件前窗口、预期波动上升</li>
            <li>价格预期在 ATM 附近徘徊</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>方向趋势明显（远离行权价）</li>
            <li>IV 可能大幅回落</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Theta 不对称</strong>：近月腿归零速度与点位密切相关</li>
          <li><strong>Vega 风险</strong>：事件后 IV 下跌（Vega Crush）</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>滚动策略</strong>：近月临期时滚动维持结构</li>
          <li><strong>点位优化</strong>：以 ATM 为主，必要时轻微 ITM/OTM 调整</li>
          <li><strong>到期选择</strong>：近月 14-30 天、远月 45-60 天，拉开 Theta 差以放大近月衰减收益。</li>
        </ul>
      </div>
    `,pros:["做多时间与波动率，价格在中枢徘徊时胜率高。","净成本低、风险常仅限净投入。"],cons:["对点位与 IV 敏感，事件后可能利润回吐。","事件后 Vega Crush 与近月被指派/点差滑点可能侵蚀已有利润。"]},plainSummary:"赌 BTC 会在某个价位附近原地磨蹭。你卖掉一张快到期的看跌合约（它掉价快、被你赚走），同时买一张晚到期的同价位看跌垫底。只要价格别大涨大跌，时间走着走着你就净赚一点。",analogy:{emoji:"🏠",title:"长租转短租，吃时间差",text:'你手里有一张"晚到期"的长合约打底，同时把一张"早到期"的短合约卖给别人。短合约的时间价值掉得快，等它作废，这部分钱就净落你口袋；只要 BTC 在这个价位附近磨蹭别乱窜，你就能反复赚这个时间差。'},pitfalls:['以为"方向无所谓"——恰恰相反，它最怕大涨大跌；价格一旦远离行权价，远月时间价值跟着缩水，净成本可能全亏光。','只盯着"赚时间损耗"，忘了它同时在做多波动率：事件兑现后 IV 骤降（Vega Crush），就算价格没怎么动也可能亏钱。',"近月到期当天不管它——近月作废/被指派后只剩裸的远月单腿，方向敞口骤然放大，等于换了个完全不同的仓位。"],quickJudge:{use:"预期价格在行权价附近横盘、IV 偏低待升",avoid:"预判要单边大涨大跌或 IV 已在高位"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"+"},cryptoNote:"Deribit 期权为欧式现金交割：近月到期不会被提前指派，但按结算价了结后只剩远月裸腿，须提前滚动续上近月。成本上两腿手续费各约标的 0.03%/张（封顶权利金 12.5%）+ 交割费叠加，本就微薄的时间差收益经不起来回折腾——务必用组合单/RFQ 按净价一次成交，别手动逐腿挂单（快市易留裸腿）。"},jm={id:"condor-call",name:"买入看涨鹰式 (Long Call Condor)",category:O.NEUTRAL,description:"全 Call 的四腿借记价差，博价格落入中间区间的震荡。",setup:"买 低 Call + 卖 中低 Call + 卖 中高 Call + 买 高 Call（两翼等宽各 3k、中间体 4k）",riskProfile:"风险有限（净成本），收益有限（翼宽 − 成本）。",idealScenario:"到期价格落在 $98k–$102k 中间平台区间。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.065},{type:"Call",action:"Sell",strikeOffset:.98,premiumRatio:.045},{type:"Call",action:"Sell",strikeOffset:1.02,premiumRatio:.025},{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.015}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">Call Condor（鹰式）与蝶式的关键区别：<strong>中间两个卖出腿使用不同行权价</strong>，形成"平台式"收益曲线（$98k–$102k 内收益恒定），而非蝶式的"尖塔式"单点峰值。适合预期价格在一定区间内震荡、但无法精确判断具体点位的场景。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <p class="text-slate-700 mb-3"><strong>四档行权价、外翼等宽（各 3k）、中间体留 4k 间隔 — 与蝶式区别：中间两腿行权价不同</strong></p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📈 买 $95k Call（付 $6.5k）</p>
            <p class="text-sm text-slate-700">最低翼</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📉 卖 $98k Call（收 $4.5k）</p>
            <p class="text-sm text-slate-700">中低档</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📉 卖 $102k Call（收 $2.5k）</p>
            <p class="text-sm text-slate-700">中高档</p>
          </div>
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📈 买 $105k Call（付 $1.5k）</p>
            <p class="text-sm text-slate-700">最高翼</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> = $6.5k + $1.5k − $4.5k − $2.5k = <strong>$1k</strong></p>
          <p class="text-xs text-slate-500">盈利区间：$98k–$102k（中间平台区）；峰值收益在此区间内保持恒定</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">$2k</div>
          <p class="text-xs text-slate-600">翼宽 $3k − 成本 $1k（到期收于平台区）</p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
          <div class="text-xs text-amber-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-amber-700 mb-2">$1k</div>
          <p class="text-xs text-slate-600">仅限净成本（收于外翼外）</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">盈利区间（平台 + 斜坡）</div>
          <div class="text-lg font-bold text-blue-700 mb-2">$96k–$104k</div>
          <p class="text-xs text-slate-600">平台区 $98k–$102k 收益恒定</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预计在 $98k–$102k 区间震荡</p>
        <div class="bg-white/70 rounded p-4 mb-3">
          <p class="text-sm text-slate-700 mb-2"><strong>建仓：</strong>买 $95k Call + 卖 $98k Call + 卖 $102k Call + 买 $105k Call，净成本 $1k</p>
        </div>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收于 $98k–$102k（平台区）</p>
            <p class="text-xs text-green-700 mt-1">最大收益 = 翼宽 $3k − 成本 $1k = <strong>$2k</strong>（200% 回报）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 收于 $97k 或 $103k（斜坡区）</p>
            <p class="text-xs text-yellow-700 mt-1">部分盈利约 +$1k；$96k 与 $104k 为盈亏平衡点</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 收于 $95k 以下或 $105k 以上</p>
            <p class="text-xs text-red-700 mt-1">亏损全部净成本 $1k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>预期价格在 $98k–$102k 区间内震荡、但不确定精确落点</li>
            <li>希望以小成本博高赔率</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>极端波动或趋势行情</li>
            <li>预期价格将突破 $96k 或 $104k 盈亏边界（单边行情）</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>区间风险</strong>：到期价一旦越出 $98k–$102k 平台并跌破 $96k 或涨破 $104k 盈亏区，收益快速转为最大亏损 $1k</li>
          <li><strong>Gamma 风险</strong>：靠近中心价的曲率变化导致盈亏敏感</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>翼宽选择</strong>：5–10%，翼越宽则平台两侧斜坡越缓、容错更高。</li>
          <li><strong>到期规划</strong>：14–30 天，临期平台拐角更锐、斜坡更陡。</li>
        </ul>
      </div>
    `,pros:["以小成本博取中性区间收益，盈利平台($98k–$102k)较蝶式更宽、容错更高。","风险有限且易于估计。"],cons:["需价格收敛于 $96k–$104k 区间，趋势行情或大波动下亏损净成本 $1k。","四腿结构开平仓点差与手续费较高，侵蚀本就有限的 $2k 最大收益。"]},plainSummary:"花一点小钱（$1k）赌 BTC 接下来就在 $98k–$102k 这段中间区间里晃悠，不大涨也不大跌。价格真待在这片区域，你就稳稳赚 $2k；万一冲出区间也别慌，亏损早就封死，最多就赔进去那 $1k 本钱。",analogy:{emoji:"🎯",title:'押注"扎进中间一整片区域"',text:'像在飞镖盘上花一点小钱押"镖会扎在中间一整片区域"，而不是死磕正中心那一个点。只要镖落进这片不算窄的中间带，奖金都一样满额；扎到最外圈也只亏掉入场的那点小钱。比起只押正中心的蝶式，这个"中间带"更宽、更容易押中。'},pitfalls:['以为"只要不暴涨暴跌就稳赚"——其实价格必须收在 $96k–$104k 才不亏，越过这条线就开始亏、跌破 $95k 或涨破 $105k 才吃满 $1k 亏损，可盈利的区间比想象中窄。','被"赔 $1k 博 $2k、赔率 2:1"诱惑而忽略胜率——价格恰好停在窄平台里的概率并不高，加上四腿点差和手续费，真实期望远没有看上去诱人。',"四条腿手动逐腿挂单——快市里很容易只成交两三条腿、留下裸露的单腿敞口，风险瞬间放大；务必用组合单/RFQ 按净价一次性成交。"],quickJudge:{use:"预计 BTC 窄幅震荡、卡在区间里",avoid:"要走单边趋势或剧烈波动时"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit 期权按张计费、每张约为标的的 0.03%（封顶为权利金的 12.5%）外加交割费；四条腿来回开平共八笔，手续费与点差会直接啃掉本就只有 $2k 的最大收益，务必用组合单/RFQ 按净价一次成交、别手动逐腿挂单（快市漏成一两条腿会留下裸露敞口、破坏风险封顶）。好在 Deribit 为欧式现金结算、到期按指数价自动轧差，几乎没有 Pin Risk 或被提前指派的烦恼。"},Gm={id:"broken-wing-butterfly-call",name:"断翼看涨蝶式 (Broken-Wing Butterfly – Call)",category:O.NEUTRAL,description:"不对称翼宽的蝶式，可实现更低成本甚至净收权利金。",setup:"买低 Call + 卖 2× 中 Call + 买更高 Call（不等距）",riskProfile:"风险有限，收益有限，上行亏损大于下行（不对称）。",idealScenario:"到期价格收敛在中间卖出行权价 $100k 附近（中心即盈利峰值）。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.06},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Call",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Call",action:"Buy",strikeOffset:1.08,premiumRatio:.015}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">断翼蝶式通过加宽上翼降低成本，代价是上行（宽翼）一侧最大亏损更大；中心 $100k 为盈利峰值 +$4500。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <p class="text-slate-700 mb-3"><strong>不对称翼宽（Call）</strong></p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📈 买 $95k Call + 买 $108k Call</p>
            <p class="text-sm text-slate-700">翼宽不等</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📉 卖 2× $100k Call</p>
            <p class="text-sm text-slate-700">风险不对称：上行最大亏损 −$3500，下行仅 −$500</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> ≈ $500（净借记）</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">低翼宽 − 成本</div>
          <p class="text-xs text-slate-600">上翼更远使成本更低，最大盈利 = 下翼宽 $5k − 净成本 $0.5k = $4500</p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
          <div class="text-xs text-amber-600 font-bold mb-1">最大亏损</div>
          <div class="text-lg font-bold text-amber-700 mb-2">−$3500（上）/ −$500（下）</div>
          <p class="text-xs text-slate-600">风险不对称但封顶：涨破 $108k 亏 $3500，跌破 $95k 仅亏 $500</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
          <div class="text-lg font-bold text-blue-700 mb-2">$95.5k / $104.5k</div>
          <p class="text-xs text-slate-600">区间内盈利，超出区间转为亏损</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，轻微看涨的中性博弈</p>
        <div class="bg-white/70 rounded p-4 mb-3">
          <p class="text-sm text-slate-700 mb-2"><strong>建仓：</strong>买 $95k Call、卖 2× $100k Call、买 $108k Call，净借记 ≈ $500。</p>
        </div>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收于 $100k（中心 = 卖出行权价）</p>
            <p class="text-xs text-green-700 mt-1">接近最大盈利 +$4500（净借记仅 $500，赔率约 9:1）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 收于 $103k–$104k</p>
            <p class="text-xs text-yellow-700 mt-1">利润收窄至接近上盈亏平衡 $104.5k（约 +$500 ~ +$1500）</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 涨破 $108k → −$3500（上翼最大亏损）；跌破 $95k → −$500（下行地板）</p>
            <p class="text-xs text-red-700 mt-1">上行宽翼亏损大于下行，风险不对称但封顶</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>轻微看涨的中性环境</li>
            <li>希望降低成本或实现净收权利金</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>中心点位不明确</li>
            <li>临期 Gamma 爆炸区难管理</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>上行尾部风险</strong>：涨破 $108k 锁定最大亏损 −$3500</li>
          <li><strong>Gamma 风险</strong>：临期曲率高，盈亏变化快</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>翼距优化</strong>：上翼更远以降低成本</li>
          <li><strong>止盈逻辑</strong>：接近峰值时分批落袋</li>
        </ul>
      </div>
    `,pros:["成本更低甚至净收入，赔率仍可观。","风险有限，易于管理上限。"],cons:["上行宽翼亏损更大（−$3500），呈不对称风险。","四条腿建仓与平仓的手续费、买卖价差成本相对更高，快市中若逐腿成交容易留下裸腿敞口。"]},plainSummary:"赌 BTC 到期时基本待在 $10 万原地不大动。建仓几乎不花钱（约 $500），真要是收在 $10 万附近就能赚到约 $4500、以小博大很划算；万一大跌只小亏一点，但万一大涨反而亏得更多——这是它特意把上方安全网拉宽换来的代价。",analogy:{emoji:"🎯",title:"几乎免费的「押原地」彩票",text:"就像花极少的钱押一注「BTC 到期还停在 $10 万原地」：押中（收在 $10 万附近）就以小博大、赚一大笔；离得越远赚得越少直到亏钱。普通蝶式两边对称，这里特意把上方的「安全网」往外挪远了一点，所以建仓更便宜，但代价是真要猛涨、冲破网外时，亏的会比向下跌更多。"},pitfalls:["把它当「看涨就买」——它其实是赌「不动」：BTC 大涨大跌都会亏，只有到期收在 $10 万中枢附近才赚得最多，方向看错或波动太大都不行。","看到「上方亏损区离得更远」就以为上行更安全——恰恰相反，一旦真涨破 $108k，上翼亏损 −$3500 远大于下方 −$500，断翼的风险是不对称的。","临近到期还在中枢附近死扛——此时 Gamma 极高、盈亏一天一个样，价格在 $10 万上下小幅波动都会让账面剧烈翻转，接近峰值就该分批止盈落袋。"],quickJudge:{use:"赌到期收在 $10 万附近、波动小",avoid:"预期大涨大跌或中枢点位不明确"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:"四条腿、净借记仅约 $500，手续费极易吃掉薄利：Deribit 每张约名义价值 0.03%（封顶权利金 12.5%）再加交割费，四条腿来回成交一遍就可能侵蚀可观比例。务必用组合单/RFQ 一次性按净价成交，别手动逐腿挂单——快市里逐腿成交容易留下裸腿敞口。Deribit 为欧式现金交割、无提前指派与 Pin Risk，但卖出的 2× 中间腿仍占用保证金。"},qm={id:"put-butterfly",name:"买入看跌蝶式 (Long Put Butterfly)",category:O.NEUTRAL,description:"全 Put 的三价蝶式，低成本博取价格精确收敛于中枢（中性博弈）。",setup:"买 1× 高 Put + 卖 2× 中 Put + 买 1× 低 Put（等距）",riskProfile:"风险极低（净成本），收益有限（翼宽 − 成本）。",idealScenario:"到期价格精确落在中间行权价。",legs:[{type:"Put",action:"Buy",strikeOffset:1.05,premiumRatio:.06},{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Put",action:"Sell",strikeOffset:1,premiumRatio:.035},{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.02}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">Long Put Butterfly 用全 Put 构建“利润尖塔”，低成本博取到期价格精确落在中间行权价。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <p class="text-slate-700 mb-3"><strong>等距四腿（Put）</strong></p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📉 买 $105k Put + 买 $95k Put</p>
            <p class="text-sm text-slate-700">翼宽 = $5k</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📈 卖 2× $100k Put</p>
            <p class="text-sm text-slate-700">中间价</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> ≈ $1k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">翼宽 − 成本</div>
          <p class="text-xs text-slate-600">$5k − $1k = <strong>$4k</strong></p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
          <div class="text-xs text-amber-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-amber-700 mb-2">$1k</div>
          <p class="text-xs text-slate-600">净成本（风险极低）</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
          <div class="text-lg font-bold text-blue-700 mb-2">$96k / $104k</div>
          <p class="text-xs text-slate-600">价格需收于此区间内方可盈利，即中枢 $100k 两侧各约 4%</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预计回归 $100k</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收于 $100k</p>
            <p class="text-xs text-green-700 mt-1">最大收益 $4k</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 收于 $97k 或 $103k</p>
            <p class="text-xs text-yellow-700 mt-1">仍盈利但少于峰值</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 收于 $95k 以下或 $105k 以上</p>
            <p class="text-xs text-red-700 mt-1">亏损净成本 $1k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>预计价格精确回归并停留于中枢</li>
            <li>希望以极低风险博取高赔率</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>极端波动或趋势行情</li>
            <li>对中心点位没有信心</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>中心精度</strong>：偏离中间价时收益快速下降</li>
          <li><strong>Gamma 风险</strong>：靠近中间价的曲率变化导致盈亏敏感</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>翼宽选择</strong>：5–10%，翼越宽峰值越缓但容错更高</li>
          <li><strong>到期规划</strong>：14–30 天，临期峰值更尖锐</li>
        </ul>
      </div>
    `,pros:["极低风险、较高赔率的中性博弈（押注价格收敛于中枢）。","结构清晰，易于上手与管理。"],cons:["对中心点位要求高，胜率不一定高。","盈利区间狭窄（约 $96k–$104k），价格稍偏离中枢即快速回吐；四腿结构手续费与滑点占比偏高。"]},plainSummary:"赌 BTC 到期时正好停在现在这个价（$100k）附近。停得越准赚得越多；只要别大涨大跌，最多也就亏掉那一点点入场的本钱。",analogy:{emoji:"🎯",title:"押飞镖正中靶心",text:"你花一点点钱押 BTC 到期正好落在靶心（$100k）：正中红心拿大奖（最多赚 $4k），偏一点还能拿点小奖，偏太远就只亏那点入场费（$1k）。停得越准，赚得越多。"},pitfalls:["以为“中性＝稳赚”：它的盈利区间很窄（约 $96k–$104k），BTC 只要稍微偏离 $100k 收益就快速回吐，跑出区间就把本钱亏光。","太早建仓：利润尖塔要临近到期才变尖，离到期还远时即便价格停在 $100k 附近也几乎不赚钱。","因为“风险低”就重仓乱押：单笔虽只亏净成本（$1k），但需要价格精确收敛、胜率并不高，连续押错照样会累计成大亏损。"],quickJudge:{use:"笃定到期价精确停在 $100k 附近",avoid:"预期大涨大跌或趋势明显"},greeks:{delta:"≈0",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit 期权费≈标的 0.03%/张（封顶权利金 12.5%），四条腿来回成交，手续费与点差会侵蚀本就微薄的价差收益；务必用组合单/RFQ 按净价一次性成交，别手动逐腿挂单——快市里逐腿易留下裸腿。"},Lm={id:"box-spread",name:"盒式组合 (Box Spread)",category:O.NEUTRAL,description:"理论套利结构：Bull Call Spread + Bear Put Spread 的组合。",setup:"买低 Call + 卖高 Call + 卖低 Put + 买高 Put（同价差）",riskProfile:"理论上风险与收益均锁定（更多偏套利教育）。",idealScenario:"价差与权利金错价可获套利空间。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.07},{type:"Call",action:"Sell",strikeOffset:1.05,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.95,premiumRatio:.02},{type:"Put",action:"Buy",strikeOffset:1.05,premiumRatio:.07}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
        <p class="text-blue-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-blue-800 text-sm">Box Spread 用看涨价差与看跌价差组合，理论上锁定价差，偏套利教育用途。实际需严控费用与滑点。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <p class="text-slate-700 mb-2">买 $95k Call（付 $7k） + 卖 $105k Call（收 $2k）</p>
        <p class="text-slate-700 mb-2">卖 $95k Put（收 $2k） + 买 $105k Put（付 $7k）</p>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>到期盈亏</strong>：理论上为常数 <em>价差 − 净成本</em>。示例中设置净成本 ≈ 价差（$10k），因此到期盈亏 ≈ $0。</p>
          <p class="text-xs text-slate-500">若实际净成本小于价差，则到期固定获利；反之为固定亏损。现实执行需考虑资金利率、费用与滑点。</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">理论收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">锁定价差</div>
          <p class="text-xs text-slate-600">偏套利结构</p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
          <div class="text-xs text-amber-600 font-bold mb-1">实际风险</div>
          <div class="text-2xl font-bold text-amber-700 mb-2">费用与滑点</div>
          <p class="text-xs text-slate-600">现实世界中的执行成本</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">关键因素</div>
          <div class="text-lg font-bold text-blue-700 mb-2">流动性/点差</div>
          <p class="text-xs text-slate-600">对成交质量要求极高</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：理论锁定 $10k 价差</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 执行良好</p>
            <p class="text-xs text-green-700 mt-1">净付 $10k 建仓，到期任意价位均收回 $10k 内在值，扣 $120 手续费后净盈亏约 -$120 ≈ 打平（理论锁定）。</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 中性</p>
            <p class="text-xs text-yellow-700 mt-1">净付 $10.3k（含 $300 点差），到期收回 $10k，净亏约 $300。</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 执行不佳</p>
            <p class="text-xs text-red-700 mt-1">净付 $10.8k（滑点 + 费用 $800），到期收回 $10k，净亏约 $800。</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
          <p class="font-bold text-cyan-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-cyan-800 space-y-1 list-disc pl-5">
            <li>点差与费用极低的高流动性市场</li>
            <li>对执行质量有把握的专业交易者</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>点差大、费用高的市场</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>现实执行风险</strong>：理论与实际存在差距</li>
          <li><strong>费用与滑点</strong>：可能吞噬掉全部理论收益</li>
          <li><strong>Delta/Gamma/Vega/Theta</strong>：盒式组合方向与波动率敞口近似为零（各希腊字母 ≈ 0），理论上无市场风险，主要风险来自执行成本与美式期权的提前行权（尤其卖出的腿）。</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>严格评估</strong>：仅在极佳成交环境下尝试</li>
          <li><strong>教育用途</strong>：更适合作为教学示例而非实盘常用策略</li>
        </ul>
      </div>
    `,pros:["理论上可锁定价差，具备套利教学意义。","方向、波动率与时间价值风险近似中性，适合作为期权定价与无套利原理的教学范例。"],cons:["现实世界中费用与滑点可能使策略无利可图。","美式期权存在提前行权风险，且需占用与价差等额的保证金/资金，资金利率会侵蚀理论收益。"]},plainSummary:'不管 BTC 到期涨成什么样，这个"盒子"到期都固定值一笔钱（本例约 $10k）。你提前花差不多这么多钱把它买下来，正常情况下不赚不亏；只有当四张期权凑出的总价比这笔固定金额便宜时，才能稳赚那一点差价。说白了是道套利练习题，实盘里手续费和点差很容易把这点差价吃光。',analogy:{emoji:"🎁",title:"买一个装着固定现金的密封盒子",text:"你花约 $10k 买下一个密封盒子，卖家保证不管外面行情怎么变，到期盒子里一定有 $10k。正常买卖你不赚不亏；只有当某个粗心卖家把盒子标低了价（比如 $9.7k），你买下后才能稳赚那 $300。难点是你得同时在四个柜台谈妥价格成交，稍微被多收点手续费，这点差价立刻就没了。"},pitfalls:['把它当成"无风险稳赚"：理论价差极小，手续费、点差和资金占用利率几乎一定把它吃光，算下来常常反而是亏的。','手动逐腿挂单建仓：四条腿无法一次成交，快市里容易只成交一半、留下"裸腿"，方向敞口暴露，锁定的盒子当场被打破。',"忽略提前行权与资金占用：在美式或链上合约里，卖出的腿可能被提前行权破坏结构；且需占用与价差等额的资金，利率会侵蚀本就微薄的收益。"],quickJudge:{use:"报价明显错价且点差费用极低时",avoid:"想靠它稳赚或手动逐腿建仓"},greeks:{delta:"≈0",gamma:"≈0",theta:"≈0",vega:"≈0"},cryptoNote:"Deribit 期权为欧式现金结算，不存在提前行权与 Pin Risk，正好满足 Box 锁定价差的理论前提（美式或链上合约则要防卖出腿被提前行权）。但四条腿来回成交才是最大杀手：每张期权费约为标的 0.03%（权利金 12.5% 封顶）+ 交割费，逐腿叠加极易吃光那点理论价差——务必用组合单/RFQ 一次性按净价成交，切勿手动逐腿挂单（快市留裸腿会破坏锁定结构）。"},wm=[Vm,Em,Dm,Rm,Um,Nm,Hm,_m,jm,Gm,qm,Lm],Ym={id:"long-straddle",name:"买入跨式 (Long Straddle)",category:O.VOLATILITY,description:"同时买入 ATM Call/Put 做多波动率；方向中性。",setup:"买入 Call + 买入 Put (同Strike)",riskProfile:"风险有限（总权利金）；收益无限；Theta 负、Vega 正；对单边大行情与 IV 上升敏感。",idealScenario:"临近重大事件、方向不明但预期大幅波动；IV 低位更优。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Put",action:"Buy",strikeOffset:1,premiumRatio:.05}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 rounded-lg mb-6">
          <p class="text-purple-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-purple-800 text-sm">跨式组合 (Long Straddle) 做多波动率且方向中性：同时买入 ATM Call + ATM Put。无论暴涨或暴跌，总有一边大赚；唯一敌人是横盘与 IV 下跌。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">📈 买入 ATM Call</p>
              <p class="text-sm text-slate-700">例：买 $100k Call，付 $5k</p>
            </div>
            <div class="bg-purple-50 p-4 rounded border border-purple-200">
              <p class="font-bold text-purple-700 mb-2">📉 买入 ATM Put</p>
              <p class="text-sm text-slate-700">例：买 $100k Put，付 $5k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总成本</strong> = $10k（做多波动率）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">单边极端行情收益巨大</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$10k</div>
            <p class="text-xs text-slate-600">横盘到期时两腿作废</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">两点：Strike ± 总成本</div>
            <p class="text-xs text-slate-600">$100k ± $10k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC ETF批准前夜，价格$100k，预期大幅波动</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 场景1：ETF批准，暴涨至$120k</p>
              <p class="text-xs text-green-700 mt-1">Call价值 ≈ $20k，Put作废；总盈利 ≈ $10k（100%回报）</p>
            </div>
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 场景2：ETF否决，暴跌至$80k</p>
              <p class="text-xs text-green-700 mt-1">Put价值 ≈ $20k，Call作废；总盈利 ≈ $10k（100%回报）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 场景3：消息平淡，横盘收于$102k</p>
              <p class="text-xs text-red-700 mt-1">Call 仍保留 $2k 内在价值，仅 Put 全损；净亏 ≈ $8k（约 80% 损失，仍处 $90k–$110k 盈亏平衡区间内）</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 场景4：小幅波动至$108k</p>
              <p class="text-xs text-yellow-700 mt-1">Call 内在价值 $8k（扣权利金后净赚 $3k），Put 全损 $5k，净亏 ≈ $2k（仍需涨破 $110k 盈亏平衡点才能盈利）</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>重大事件（利率、监管、ETF、减半）</li>
              <li>方向不确定但预期大幅波动</li>
              <li>IV 较低、买入端性价比更好</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>长期横盘环境（Theta 损耗巨大）</li>
              <li>IV 高位（买入成本过高）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Theta 损耗</strong>：双腿每天损失时间价值</li>
            <li><strong>Vega Crush</strong>：事件后 IV 暴跌可能压制价格</li>
            <li><strong>点差与流动性</strong>：注意两腿开平仓成本与滑点</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>到期选择</strong>：事件前 7–30 天，避免过早被 Theta 吃掉</li>
            <li><strong>分批管理</strong>：单边走强时分批止盈，另一边作废</li>
            <li><strong>IV 评估</strong>：IV 处于历史低位更适合建仓</li>
          </ul>
        </div>
      `,pros:["方向中性：无需预测涨跌方向，只需确认会有大行情。","收益无限：若出现单边极端行情，收益潜力巨大。"],cons:["高昂成本：购买两份ATM期权，权利金支出很高。","Theta损耗：时间价值每天双倍流逝，若行情震荡，亏损速度极快。"]},plainSummary:"赌 BTC 接下来要剧烈波动，但不赌方向——无论它狠狠涨还是狠狠跌，你都能赚；最怕的是它原地不动，那两边买的钱就白花了。",analogy:{emoji:"🎲",title:'押"会出大事，但不知是好是坏"',text:"像赌一场比赛会爆冷，但不押哪一队赢。只要最后分差够大，你就赢；要是平淡收场（横盘没行情），你押在两边的钱就都打了水漂。"},pitfalls:['以为"只要价格动起来就赚"——其实要涨破 $110k 或跌破 $90k、越过盈亏平衡点才真盈利，小打小闹的波动照样亏钱。',"等大消息公布后才追进场——那时 IV 已被炒到最高、权利金最贵，事件一落地 IV 暴跌（Vega Crush），方向就算猜对也可能不赚反亏。","买了就死扛到到期——两条腿的时间价值每天双倍流逝，横盘拖得越久亏得越快，单边走出大行情后该止盈就果断止盈。"],quickJudge:{use:"重大事件前、预期暴动、IV 低位",avoid:"长期横盘、IV 高位、临近到期"},greeks:{delta:"≈0",gamma:"+(强)",theta:"−(强)",vega:"+(强)"}},Qm={id:"long-strangle",name:"买入宽跨式 (Long Strangle)",category:O.VOLATILITY,description:"买入两侧 OTM 期权低成本博大波动；方向中性。",setup:"买入 OTM Call + 买入 OTM Put",riskProfile:"风险有限（总权利金）；收益无限；Theta 负、Vega 正；需更大波动穿越盈亏平衡。",idealScenario:"预算有限、事件驱动的大波动；IV 低位更优。",legs:[{type:"Call",action:"Buy",strikeOffset:1.1,premiumRatio:.02},{type:"Put",action:"Buy",strikeOffset:.9,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 rounded-lg mb-6">
          <p class="text-purple-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-purple-800 text-sm">宽跨式 (Long Strangle) 是低成本的做多波动率策略：买入 OTM Call + OTM Put。比 Straddle 更便宜，但需要更大的波动幅度才能盈利。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">📈 买入 OTM Call</p>
              <p class="text-sm text-slate-700">例：买 $110k Call，付 $2k</p>
            </div>
            <div class="bg-purple-50 p-4 rounded border border-purple-200">
              <p class="font-bold text-purple-700 mb-2">📉 买入 OTM Put</p>
              <p class="text-sm text-slate-700">例：买 $90k Put，付 $2k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总成本</strong> = $4k（低于 Straddle 的 $10k）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">单边极端行情收益巨大</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$4k</div>
            <p class="text-xs text-slate-600">横盘到期时两腿作废</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">两点</div>
            <p class="text-xs text-slate-600">上：$110k + $4k；下：$90k − $4k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期大波动但方向不明</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴涨：涨到 $120k</p>
              <p class="text-xs text-green-700 mt-1">Call 赚 ≈ $10k；总盈利 ≈ $6k（150%）</p>
            </div>
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴跌：跌到 $80k</p>
              <p class="text-xs text-green-700 mt-1">Put 赚 ≈ $10k；总盈利 ≈ $6k（150%）</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 横盘：收于 $100k±</p>
              <p class="text-xs text-red-700 mt-1">亏损总成本 $4k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>预算有限但想博取大波动</li>
              <li>方向不明，做多波动率更合理</li>
              <li>IV 较低的窗口</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>长期横盘或波动率回落趋势</li>
              <li>IV 高位（买入端性价比差）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Theta</strong>：时间价值每天衰减</li>
            <li><strong>Vega</strong>：事件后 IV 暴跌可能压制期权价格</li>
            <li><strong>执行成本</strong>：注意两腿开平仓点差与滑点</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>行权价选择</strong>：上下行权价各离 8–12%</li>
            <li><strong>到期时间</strong>：7–30 天，兼顾事件驱动与 Theta</li>
            <li><strong>分批策略</strong>：行情单边发展时分批止盈</li>
          </ul>
        </div>
      `,pros:["低成本博弈：适合资金量较小但想博取黑天鹅事件的投资者。","方向中性：无需判断涨跌方向，只押注波动率放大即可两侧获利。","成本更低：相比同到期 ATM Straddle（约 $10k），宽跨式总权利金仅 $4k，资金占用与最大亏损更小。"],cons:["低胜率：大部分时间内，虚值期权最终会归零。","高波动要求：需要极端的市场波动才能覆盖成本并获利。"]},plainSummary:"花两笔小钱，同时押 BTC 要么大涨要么大跌——只要它真的折腾起来，不管往哪边走都能赚；要是一直不动，这两笔钱就白花了。",analogy:{emoji:"🎲",title:"买“两头的彩票”，但门槛更高",text:"像赌一场比赛会爆冷却不赌哪队赢——你买的是更便宜的“大冷门”票，所以比分差距必须拉得够大才算赢；要是平淡收场，上下两张票的钱全打水漂。"},pitfalls:["以为“只要 BTC 动一下就赚”——其实波动幅度得大到盖过两笔权利金、突破上下盈亏平衡点，温和波动照样亏。","在 IV（市场预期波动）高位时买入，事件一过 IV 暴跌，哪怕方向猜对，期权也可能不涨反跌（Vega crush）。","为图便宜把行权价选得太远（太虚值），结果要 BTC 涨跌离谱才回本，最后多半两腿一起归零。"],quickJudge:{use:"预期事件引爆暴动、且 IV 在低位",avoid:"横盘震荡或 IV 高位、临近到期"},greeks:{delta:"≈0",gamma:"+",theta:"−",vega:"+（强）"}},Xm={id:"long-guts",name:"买入内陷宽跨式 (Long Guts)",category:O.VOLATILITY,description:"买入 ITM Call + 买入 ITM Put，做多波动率（正 Gamma），但因双腿实值，Gamma 弱于等额平值 Straddle。",setup:"买入 ITM Call + 买入 ITM Put",riskProfile:"风险有限（最大亏损 = 净权利金 $16k − 行权价差 $10k = $6k），上涨收益无限，下跌收益封顶但可观（≈$89k，BTC 跌至 $0 时）。",idealScenario:"临近重大事件、预期出现剧烈双向波动（方向不明）；能接受比 Straddle 更高的资金占用与更贵的权利金，以换取横盘时最大亏损被锁定在行权价差以内。",legs:[{type:"Call",action:"Buy",strikeOffset:.95,premiumRatio:.08},{type:"Put",action:"Buy",strikeOffset:1.05,premiumRatio:.08}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 rounded-lg mb-6">
        <p class="text-purple-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-purple-800 text-sm">Long Guts 通过买入两边实值期权做多波动率（正 Gamma），但因双腿实值，Gamma 弱于等额平值 Straddle，适合预期剧烈波动的场景。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
            <p class="font-bold text-indigo-700 mb-2">📈 买 ITM Call</p>
            <p class="text-sm text-slate-700">例：买 $95k Call（付 $8k）</p>
          </div>
          <div class="bg-purple-50 p-4 rounded border border-purple-200">
            <p class="font-bold text-purple-700 mb-2">📉 买 ITM Put</p>
            <p class="text-sm text-slate-700">例：买 $105k Put（付 $8k）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>总成本</strong> = $16k（较 Straddle 更贵）</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">上涨收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">∞</div>
          <p class="text-xs text-slate-600">Call 实值带来更快的上行收益</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">下跌收益</div>
          <div class="text-2xl font-bold text-blue-700 mb-2">≈$89k</div>
          <p class="text-xs text-slate-600">Put 实值带来更快的下行收益，BTC 跌至 $0 时封顶（$105k 行权价 − $16k 总权利金 = $89k）</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
          <div class="text-2xl font-bold text-red-700 mb-2">$6k</div>
          <p class="text-xs text-slate-600">两腿均实值，无论价格如何始终保留行权价差 $10k 内在价值，故最大亏损 = 净权利金 $16k − 行权价差 $10k = $6k，发生在 $95k–$105k 之间</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，预期剧烈波动</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 暴涨：涨到 $120k</p>
            <p class="text-xs text-green-700 mt-1">Call 赚 ≈ $25k；净利 ≈ $9k</p>
          </div>
          <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
            <p class="text-sm font-bold text-blue-800">✅ 暴跌：跌到 $80k</p>
            <p class="text-xs text-blue-700 mt-1">Put 赚 ≈ $25k；净利 ≈ $9k</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 横盘：收于 $102k</p>
            <p class="text-xs text-red-700 mt-1">两腿合计仍保留 $10k 内在价值，亏损 = $16k − $10k = $6k</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
            <li>重大事件前、方向未知但幅度确定</li>
            <li>临期高 Gamma 博取快速变化</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>长期横盘环境（Theta 损耗显著）</li>
            <li>IV 高位（买入成本过高）</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>Theta 损耗</strong>：双腿同时损失时间价值</li>
          <li><strong>Vega 风险</strong>：事件后 IV 回落可能压制价格</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>到期选择</strong>：事件前 7–30 天，避免过早被 Theta 吃掉</li>
          <li><strong>分批管理</strong>：单边走强时分批止盈，另一边作废</li>
        </ul>
      </div>
    `,pros:["做多波动率与 Gamma，单边极端行情收益显著。","上涨收益无限，下跌收益封顶但可观（≈$89k），方向无关只需剧烈波动。"],cons:["成本高于 Straddle（实值期权含内在价值），但因双腿均实值，横盘最大亏损被锁定为净权利金减行权价差（$6k），不会亏掉全部权利金。","资金占用高（双腿实值需先支付 $10k 内在价值），实务上常被等效的 Strangle/Straddle 替代，流动性与买卖点差通常更差。"]},plainSummary:"赌 BTC 接下来必有大行情、要么暴涨要么暴跌，但你不赌往哪个方向——只要动得够猛，哪边都能赚；只有横盘不动才会亏，而且因为买的是实值期权，亏损被锁在小头。",analogy:{emoji:"🎲",title:"押一场大行情，押金还能退大半",text:"你笃定 BTC 要出大事、要么暴涨要么暴跌（但不知哪边），于是两边都押。和普通跨式不同的是，你押进去的钱里有一大块是「可退押金」（实值期权的内在价值）——就算最后横盘没动，这笔押金也能拿回大半，只亏掉那点「手续费」（时间价值）；真出了大行情，照样大赚。"},pitfalls:["误以为「买实值更稳更划算」——其实只是把 $10k 内在价值提前垫进去、占用大量资金，普通 Straddle/Strangle 更便宜、流动性也更好，新手基本没理由舍近求远选 Guts。","以为没行情顶多亏 $6k 就躺着不管——那 $6k 全是时间价值，横盘拖得越久越接近亏满，该止损就得止损。","实值期权点差大、成交清淡——建仓和平仓都容易被买卖价差和滑点吃掉一截，临到期想退出未必有好价格。"],quickJudge:{use:"笃定要出大行情、不赌涨跌",avoid:"横盘、IV 高位、嫌占资金"},greeks:{delta:"≈0",gamma:"+",theta:"−",vega:"+"}},Zm={id:"reverse-iron-condor",name:"反向铁鹰 (Reverse Iron Condor)",category:O.VOLATILITY,description:"买入内层宽跨 + 卖出外层翼。有限风险做多波动率，盈利封顶、最大亏损=净借记。",setup:"买入 OTM Put/Call（内层）+ 卖出更远 OTM Put/Call（外层）",riskProfile:"风险有限（净借记）；收益有限（翼宽 − 净借记）；Vega 正、Theta 负、Gamma 正、Delta≈0。",idealScenario:"事件驱动预期大波动、但担心 IV crush；预算有限、可接受封顶盈利。",legs:[{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.015},{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.03},{type:"Call",action:"Buy",strikeOffset:1.05,premiumRatio:.03},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.015}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 rounded-lg mb-6">
          <p class="text-purple-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-purple-800 text-sm">反向铁鹰 (Reverse Iron Condor) 是<strong>有限风险版的做多波动率</strong>策略：买入靠内的宽跨式（$95k Put + $105k Call），再卖出更远的外翼（$90k Put + $110k Call）来补贴成本。无论 BTC 大涨还是大跌都能盈利，但<strong>盈利被外翼封顶、最大亏损锁定为净借记</strong>。它是铁鹰 (Iron Condor) 的镜像——铁鹰赌不动收租，反向铁鹰赌大动付租。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-purple-50 p-4 rounded border border-purple-200">
              <p class="font-bold text-purple-700 mb-2">📉 下方：买 $95k Put / 卖 $90k Put</p>
              <p class="text-sm text-slate-700">净付 ≈ $1.5k（$3k − $1.5k）</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">📈 上方：买 $105k Call / 卖 $110k Call</p>
              <p class="text-sm text-slate-700">净付 ≈ $1.5k（$3k − $1.5k）</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>总净借记</strong> ≈ $3k；<strong>翼宽</strong> = $5k（每侧）</p>
            <p class="text-xs text-slate-600">卖出外翼把裸买宽跨的成本压低，代价是盈利封顶。风险与收益均已锁定。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">$2k</div>
            <p class="text-xs text-slate-600">翼宽 $5k − 净借记 $3k；价格跌破 $90k 或涨破 $110k 时封顶实现。</p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">$3k</div>
            <p class="text-xs text-slate-600">价格停在 $95k–$105k 之间时，四条腿全部作废，损失全部净借记。</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$92k 与 $108k</div>
            <p class="text-xs text-slate-600">下：$95k − $3k；上：$105k + $3k。需走出此区间才盈利。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，ETF 决议/CPI 前预期大波动但方向不明</p>
          <div class="bg-white/70 rounded p-4 mb-3">
            <p class="text-sm text-slate-700 mb-2"><strong>建仓四腿：</strong></p>
            <ul class="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>卖 $90k Put 收 $1.5k、买 $95k Put 付 $3k（下方借记价差）</li>
              <li>买 $105k Call 付 $3k、卖 $110k Call 收 $1.5k（上方借记价差）</li>
              <li>净借记 $3,000</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴动：涨破 $110k 或跌破 $90k</p>
              <p class="text-xs text-green-700 mt-1">内层腿价差打满 $5k − 净借记 $3k = <strong>+$2k</strong>（封顶）。例如涨到 $115k：$105k Call 赚 $10k − $5k 给被卖出的 $110k Call = 价差 $5k，扣成本得 +$2k。</p>
            </div>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <p class="text-sm font-bold text-yellow-800">⚠️ 中等：涨到 $107k / 跌到 $93k</p>
              <p class="text-xs text-yellow-700 mt-1">走出一点但没穿越盈亏平衡，约亏 <strong>−$1k</strong>（如 $107k：内层 Call 价差值 $2k − 净借记 $3k）。</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 最差：横盘收于 $95k–$105k</p>
              <p class="text-xs text-red-700 mt-1">四条腿全部作废，损失全部净借记 <strong>−$3k</strong>（亏损封顶，不会更多）。</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>事件驱动（ETF 决议、减半、CPI/FOMC）预期大波动，但方向不明</li>
              <li>想做多波动率却<strong>担心利好出尽后 IV crush</strong>——卖出外翼降低净 Vega，部分对冲波动率崩塌</li>
              <li>预算有限、希望最大亏损<strong>提前锁定</strong>，可接受盈利封顶</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期横盘或波动率收敛（应反向用 Iron Condor 收租）</li>
              <li>预期开放式、爆炸性的单边行情、想要无封顶收益（应用 Long Strangle）</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚖️ 何时选反向铁鹰，而非 Long Strangle？</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <p class="text-sm text-slate-700 mb-3">两者都是做多波动率，区别在于「封顶 + 成本 + IV crush 抵抗力」三点：</p>
          <ul class="text-sm text-slate-700 space-y-2 list-disc pl-5">
            <li><strong>选反向铁鹰</strong>：预算有限、想要确定的小额最大亏损；预期<strong>中等幅度</strong>波动（够穿越较近的盈亏平衡 $92k/$108k 即可，无需爆炸）；<strong>最担心 IV crush</strong>——卖出的外翼降低净 Vega，事件后 IV 暴跌时损失更可控。</li>
            <li><strong>选 Long Strangle</strong>：预期真正<strong>爆炸性、开放式</strong>的单边行情，需要无封顶收益；IV 处于低位（买方便宜、不怕 crush），愿意承担更大的纯多 Vega 暴露。</li>
          </ul>
          <p class="text-xs text-slate-500 mt-3">一句话：反向铁鹰 = 「封顶 + 抗 IV crush」版的 Long Strangle，用盈利上限换确定性与更低的波动率风险。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>Theta 负（时间损耗）</strong>：作为净买方，横盘每天都在流血，价格不动到期即亏满 $3k。</li>
            <li><strong>Vega 正但被外翼削弱</strong>：IV 上升有利；卖出外翼虽降低了净 Vega（抗 IV crush），但也削弱了 IV 暴涨时的获利弹性。</li>
            <li><strong>Gamma 正、需要足够幅度</strong>：盈亏平衡 $92k/$108k 比裸跨式更近，但仍需明确的方向突破，磨蹭式波动不奏效。</li>
            <li><strong>四腿执行成本</strong>：开平共 8 笔，点差与手续费会侵蚀仅 $2k 的封顶收益。</li>
          </ul>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
          <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
            <li><strong>到期选择</strong>：覆盖事件日，7–30 天为宜；事件落地后及时了结，不要硬扛 Theta。</li>
            <li><strong>内外层间距</strong>：内层离现价越近越易触发盈利但成本越高；外翼决定盈利封顶与降本幅度，常用 5% 翼宽。</li>
            <li><strong>事件兑现即走</strong>：方向一旦明确、价格突破内层腿，分批落袋；别等回归区间把利润还回去。</li>
            <li><strong>组合成交</strong>：四腿务必用组合单/RFQ 一次性按净价成交，避免逐腿 legging 滑点。</li>
          </ul>
        </div>
      `,pros:["风险严格受控：最大亏损锁定为净借记（本例 $3k），是 Long Strangle 的有限风险替代。","抗 IV crush：卖出外翼降低净 Vega，事件利好出尽、波动率崩塌时损失比裸买宽跨更可控。"],cons:["盈利封顶：外翼锁死收益上限（本例 $2k），无法享受爆炸性单边行情的无限收益。","四腿成本：开平共 8 笔点差与手续费，对仅 $2k 的封顶收益侵蚀显著。"]},plainSummary:"赌 BTC 马上要出大事、要么大涨要么大跌，但你不知道往哪边。猜对方向、行情真暴动你就赚（赚多少有上限）；要是风平浪静没动，你最多亏掉买入这套组合花的钱，不会更多。",analogy:{emoji:"🎟️",title:"买一张「会出大事」的彩票（带止损）",text:"花一笔固定的钱买张彩票，赌「这周会有大新闻」。涨疯了或跌穿了都能中奖，但奖金封顶；要是风平浪静，你顶多亏掉这张彩票钱。比裸买宽跨式便宜、也更扛得住消息落地后的「热度退潮」，代价是中奖金额有上限。"},pitfalls:["以为「做多波动就稳赚」——只要 BTC 横在 $95k–$105k 不动，到期就亏光净借记 $3k。","盈利封顶在 $2k，别期待像 Long Strangle 那样的无限收益；要无封顶就别用这个结构。","事件兑现后 IV 暴跌（IV crush）仍会拖累四条腿，可能在价格还没走够时浮亏——只是卖出的外翼已部分对冲了这块。"],quickJudge:{use:"预期大波动但怕 IV 暴跌",avoid:"预期横盘或要无封顶收益"},greeks:{delta:"≈0（方向中性）",gamma:"+（做多波动）",theta:"−（时间损耗）",vega:"+（IV 上升有利）"},cryptoNote:"💸 真实成本：四腿结构，Deribit 期权手续费约为标的的 0.03%/张（封顶权利金 12.5%）+ 交割费，开 + 平来回最多 8 笔，对「最大收益仅 $2k」的封顶结构侵蚀显著。外翼（$90k Put / $110k Call）更深虚值、流动性差、点差更宽。务必用组合单 / RFQ（Deribit combo book、Paradigm RFQ）一次性按净价成交，不要手动逐腿挂单——快市里 legging 会留下裸腿。"},Jm=[Ym,Qm,Xm,Zm],Km={id:"covered-call",name:"备兑看涨 (Covered Call)",category:O.INCOME,description:"持币卖出 OTM Call 获取现金流；上方收益封顶。",setup:"持有现货 + 卖出 Call",riskProfile:"下行风险同现货；上行封顶；Theta 正、Vega 负；存在卖飞风险。",idealScenario:"慢牛或震荡、希望用权利金降低持仓成本；IV 高位更优。",legs:[{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.03}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
          <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-indigo-800 text-sm">备兑看涨 (Covered Call) 通过“持币 + 卖出 OTM Call”将现货转化为现金流。若不涨则赚权利金；若上涨，Call 按现金差额结算（经济效果≈在行权价封顶卖出），收益被封顶但整体仍盈利。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 持有 1 BTC 现货</p>
              <p class="text-sm text-slate-700">例：持仓成本 $100k</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">📉 卖出 OTM Call</p>
              <p class="text-sm text-slate-700">例：卖 $110k Call，收 $3k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净现金流</strong>：立即收 $3k（增强收益）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">(Call 行权价 − 现货价) + 权利金</div>
            <p class="text-xs text-slate-600">例：($110k − $100k) + $3k = <strong>$13k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">下行风险</div>
            <div class="text-2xl font-bold text-red-700 mb-2">同现货</div>
            <p class="text-xs text-slate-600">暴跌时仍持币，仅权利金略微缓冲</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">机会成本</div>
            <div class="text-lg font-bold text-blue-700 mb-2">上涨封顶</div>
            <p class="text-xs text-slate-600">涨过行权价后超额收益将被截断</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，卖 $110k Call 收 $3k</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 横盘或温和上涨：收于 $108k</p>
              <p class="text-xs text-green-700 mt-1">权利金 $3k 到手，现货未卖出</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 涨破行权价：收于 $115k</p>
              <p class="text-xs text-blue-700 mt-1">Call 按现金差额结算（支付 $5k 差额），经济效果≈在 $110k 封顶卖出，收益 ≈ $10k + $3k = $13k</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 暴跌：收于 $80k</p>
              <p class="text-xs text-red-700 mt-1">现货亏 $20k，但仍保留 $3k 权利金</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>慢牛或震荡期，愿意在上方卖出部分仓位</li>
              <li>希望以现金流降低持仓成本</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>预期超级牛市的主升浪（易卖飞）</li>
              <li>不愿意在行权价出售现货</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>卖飞风险</strong>：行权价上方的超额上涨无法享受</li>
            <li><strong>滚动管理</strong>：价格接近行权价时需滚动至更高行权价或平仓</li>
            <li><strong>税务影响</strong>：现金结算盈亏或手动平仓卖币可能触发应税事件（视地区）</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>行权价选择</strong>：设在目标卖出价或强阻力位（如 +10%）</li>
          <li><strong>到期时间</strong>：14–30 天，Theta 效率较高</li>
          <li><strong>分批卖出</strong>：分仓卖 Call，降低一次性卖飞风险</li>
          <li><strong>到期建议</strong>：常用 14–30 天；临近到期价格接近行权价时，提前滚动或平仓。</li>
        </ul>
      </div>
      `,pros:["收益增强：在持币待涨的过程中额外获取年化10%-30%的现金流。","降低成本：权利金收入实质上降低了现货的持仓成本。"],cons:["卖飞风险：在超级大牛市中，收益被行权价锁定，错失主升浪的超额利润。","下行保护有限：权利金（约现货 3%）仅提供微弱缓冲，BTC 暴跌时仍承担几乎全部现货亏损（如跌至 $80k 时净亏约 $17k）。"]},plainSummary:"你手里有币，把“涨太多就按某个价封顶卖掉”这个权利租给别人，先收一笔租金。币不大涨就白赚租金；真大涨了，超过封顶价那部分的赚头就让给别人。",analogy:{emoji:"🏠",title:"出租房子收定金",text:"你有套房（BTC），暂时不卖。跟房客约定“涨到 110 万你就卖给他”，先收一笔定金（权利金）。没涨到就白赚定金；真涨过了，就按 110 万成交、封顶以上的涨幅赚不到。"},pitfalls:["别把它当“稳赚不赔”：暴跌时你照样按现货亏钱，3% 的权利金只是杯水车薪。","行权价设得太近：稍微一涨就被“卖飞”，眼睁睁错过主升浪。","为多收权利金而卖太多张 Call：一旦卖出量超过手里的币，就变成裸卖、上行风险无上限。"],quickJudge:{use:"有币、看震荡或慢牛、想收租降成本",avoid:"预期主升浪、舍不得在高位封顶卖币"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:"主流 BTC 期权（Deribit/OKX）是欧式 + 现金交割：到期 ITM 只结算现金差额，不会自动替你卖出 BTC。所以并非真的“被按行权价卖币”——现货仍照常持有、卖出的 Call 按差额扣钱，经济效果≈在行权价封顶卖出；若想真正兑现高位卖出，需自己手动卖现货衔接。"},Pm={id:"protective-put",name:"保护性看跌 (Protective Put)",category:O.INCOME,description:"持币买Put。给现货买保险。",setup:"持有现货 + 买入 Put",riskProfile:"最大亏损锁定，上行收益无限。",idealScenario:"看好长期但担心短期黑天鹅。",legs:[{type:"Put",action:"Buy",strikeOffset:.95,premiumRatio:.03}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
          <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-indigo-800 text-sm">保护性看跌 (Protective Put) 为现货买保险：持币同时买入 Put 锁定最低卖出价。下行风险有限，上行收益完整，提升持仓舒适度。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 持有 1 BTC 现货</p>
              <p class="text-sm text-slate-700">例：持仓成本 $100k</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">🛡️ 买入 OTM/ATM Put</p>
              <p class="text-sm text-slate-700">例：买 $95k Put，付 $3k</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>保险成本</strong>：权利金 $3k</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">(现货价 − Put) + Premium</div>
            <p class="text-xs text-slate-600">例：($100k − $95k) + $3k = <strong>$8k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">无限</div>
            <p class="text-xs text-slate-600">上涨保留全部上行收益（减去保险费）</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-2xl font-bold text-blue-700 mb-2">$103k</div>
            <p class="text-xs text-slate-600">现货成本 $100k + 保险费 $3k，上涨突破此点才净盈利。</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，担心短期回撤</p>
          <div class="space-y-2">
            <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
              <p class="text-sm font-bold text-green-800">✅ 暴跌：跌至 $80k</p>
              <p class="text-xs text-green-700 mt-1">按 $95k 卖（或行权收益），损失被锁定 $8k</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 横盘：收于 $100k</p>
              <p class="text-xs text-blue-700 mt-1">保险费 $3k 成为持仓成本</p>
            </div>
            <div class="bg-emerald-100 border-l-4 border-emerald-500 p-3 rounded">
              <p class="text-sm font-bold text-emerald-800">📈 上涨：收于 $120k</p>
              <p class="text-xs text-emerald-700 mt-1">保留全部上涨收益，扣除保险费 $3k</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>长期看涨但担心短期黑天鹅</li>
              <li>重仓持币、希望锁定底线</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>不愿支付保险费的账户</li>
              <li>极短线交易，不需要对冲</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>成本拖累</strong>：长期持续付费会降低组合收益率</li>
            <li><strong>IV 风险</strong>：IV 高位买入保险费更贵</li>
            <li><strong>执行细节</strong>：到期前的滚动与择时影响效果</li>
            <li><strong>Theta 时间损耗</strong>：买入的 Put 每日承受时间价值衰减，临近到期加速流失；若标的未下跌，到期时保险费可能全部归零。</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>行权价选择</strong>：常设在 -5% 至 -10%（如 $95k）</li>
          <li><strong>到期时间</strong>：30–60 天，兼顾保护效果与成本</li>
          <li><strong>搭配策略</strong>：与 Covered Call 组合为 Collar，降低保险成本</li>
          <li><strong>到期建议</strong>：中期保护 30–60 天；临近到期若仍需保护，提前滚动到新到期。</li>
        </ul>
      </div>
      `,pros:["下行保护：消除恐慌，无惧任何黑天鹅事件。","保留上行：不像卖出期货对冲那样锁死利润，该策略不限制上涨收益。"],cons:["保险成本：购买Put需要持续支付权利金，长期来看会拖累整体投资组合的收益率。","机会成本：若标的未下跌，到期Put归零，已付权利金（$3k）成为沉没成本，会侵蚀该周期的上涨收益。"]},plainSummary:"你手里有币又怕它突然暴跌，就花一小笔钱给它买份保险。币照涨你照赚，真跌穿了保险帮你兜底，亏损停在那条线、不会越亏越多。",analogy:{emoji:"🛡️",title:"给资产买保险",text:"就像给车买保险：平时付一点保费（权利金），万一出大事故（币价暴跌）保险公司照价赔你，把损失牢牢兜在一条线以内；车没出事，保费就当花掉了。"},pitfalls:["以为买了保险就稳赚——横盘或小跌时保费照付照亏，保险只在跌穿行权价后才真正兜底。","Put 行权价设得离现价太远想省保费，结果要跌一大截才开始赔，关键区间根本没保到。","临到期才想起续保——Put 时间价值临近到期掉得飞快，没及时滚到新到期，保护会断档。"],quickJudge:{use:"持币看长期、怕短期黑天鹅",avoid:"舍不得保费或纯短线交易"},greeks:{delta:"+",gamma:"+",theta:"−",vega:"+"}},Im={id:"collar",name:"领口策略 (Collar)",category:O.INCOME,description:"持币 + 买 Put 保险 + 卖 Call 回血。低成本对冲。",setup:"持有现货 + 买入 Put + 卖出 Call",riskProfile:"风险有限，收益有限。",idealScenario:"担心下跌，但觉得也不会大涨。",legs:[{type:"Put",action:"Buy",strikeOffset:.9,premiumRatio:.02},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02}],detailedAnalysis:{explanation:`
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
          <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
          <p class="text-indigo-800 text-sm">领口策略 (Collar) = 持币 + 买 Put 保护 + 卖 Call 回血。以放弃部分上行来换取低成本甚至零成本的下行保护，构建“保底封顶”的安全区间。</p>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
        <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded border border-emerald-200">
              <p class="font-bold text-emerald-700 mb-2">📈 持有现货</p>
              <p class="text-sm text-slate-700">例：持 1 BTC（$100k）</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
              <p class="font-bold text-indigo-700 mb-2">🛡️ 买 Put + 📉 卖 Call</p>
              <p class="text-sm text-slate-700">例：买 $90k Put（付 $2k）、卖 $110k Call（收 $2k）</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded mt-3">
            <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> ≈ $0（Zero-Cost Collar）</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <div class="text-xs text-red-600 font-bold mb-1">最大亏损</div>
            <div class="text-2xl font-bold text-red-700 mb-2">(现货价 − Put) + 净成本</div>
            <p class="text-xs text-slate-600">例：($100k − $90k) + $0 = <strong>$10k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
            <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
            <div class="text-2xl font-bold text-emerald-700 mb-2">(Call − 现货) − 净成本</div>
            <p class="text-xs text-slate-600">例：($110k − $100k) − $0 = <strong>$10k</strong></p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
            <div class="text-xs text-blue-600 font-bold mb-1">盈亏平衡点</div>
            <div class="text-lg font-bold text-blue-700 mb-2">$100k</div>
            <p class="text-xs text-slate-600">$90k–$110k 内盈亏随现货线性变动，仅 P>$100k 才盈利</p>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，搭建零成本 Collar</p>
          <div class="space-y-2">
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 区间内随现货线性变动：$95k–$108k</p>
              <p class="text-xs text-blue-700 mt-1">$95k 约 −$5k、$100k 持平、$108k 约 +$8k（盈亏平衡 $100k）</p>
            </div>
            <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
              <p class="text-sm font-bold text-blue-800">ℹ️ 上涨至 $120k</p>
              <p class="text-xs text-blue-700 mt-1">被行权于 $110k 卖出，上行收益封顶 $10k</p>
            </div>
            <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
              <p class="text-sm font-bold text-red-800">❌ 下跌至 $80k</p>
              <p class="text-xs text-red-700 mt-1">行使 Put 锁定损失 $10k，避免更深亏损</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
        <div class="space-y-3 mb-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
            <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
              <li>中段行情：担心下跌但不预期暴涨</li>
              <li>希望低成本获得有效保护</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
            <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
            <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
              <li>对上行空间高度依赖的策略</li>
              <li>不愿被上方 Call 封顶</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
        <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
            <li><strong>错过上行</strong>：价格大涨时超额收益被截断</li>
            <li><strong>执行细节</strong>：到期前滚动影响净成本与区间</li>
            <li><strong>IV 变化</strong>：IV 高低影响 Put 与 Call 的成本与收入</li>
            <li><strong>Delta/Vega</strong>：现货多头被买 Put、卖 Call 部分对冲，组合净 Delta 显著降低、区间内方向性敏感度减弱；买 Put 的正 Vega 与卖 Call 的负 Vega 大致抵消，IV 整体抬升时对组合价值影响有限，但偏斜（skew）变化仍会改变 Put/Call 相对成本。</li>
          </ul>
        </div>

      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>零成本目标</strong>：优先构建净成本≈0 的组合</li>
          <li><strong>区间选择</strong>：Put 下方 8–12%，Call 上方 8–12%</li>
          <li><strong>滚动管理</strong>：价格靠近边界时滚动调整行权价与到期</li>
          <li><strong>到期建议</strong>：中期 30–60 天；根据市场变化，提前滚动维持保护与区间。</li>
        </ul>
      </div>
      `,pros:["低成本对冲：以放弃部分潜在上涨收益为代价，获得免费的下行保护。","资产保值：非常适合在不确定性较高的市场环境中保护本金。"],cons:["收益封顶：若市场大涨，超额收益将被Call端截断。","机会成本：若行情在 [$90k, $110k] 区间内震荡，组合收益基本等同于单纯持币，卖出的 Call 与买入的 Put 相互抵消，权利金对冲并未带来超额回报。"]},plainSummary:"你手里有币，怕它跌，就花点小钱买份「跌了能止损」的保险；为了不掏这笔保费，又把「涨太多就卖掉」的权利卖出去换钱、刚好抵掉保费。等于给币价上下都装了护栏：跌不破地板，也涨不过天花板。",analogy:{emoji:"🏠",title:"让别人替你付的房屋保险",text:"你有套房（BTC）怕它跌价，想买份「跌了能赔」的保险（买 Put）。保费舍不得自己掏，于是跟人约好「房价涨过 110 万就卖给他」，对方先付你一笔钱（卖 Call），刚好够交保费。结果保险等于白嫖：跌了有人兜，但房价真涨破天花板的那部分赚头就不归你了。"},pitfalls:["以为「零成本」就是「零代价」——你掏的是上行空间，币真要大涨时只能眼睁睁看着收益被 Call 封死在天花板。","Put 和 Call 行权价设得太窄（贴着现价），区间一夹，价格稍一波动到期就大概率封顶或触底，变成接近当前币价的一笔固定现金——这跟「直接卖币换稳定币」没什么两样，而不是像持币那样继续跟着价格涨跌，还白白多付了几道手续费。","临近到期不滚动，价格冲到 Call 边界时被指派、把币卖飞，错过后面的主升浪。"],quickJudge:{use:"持币怕跌、又不指望暴涨",avoid:"坚定看大涨、不愿被封顶"},greeks:{delta:"+",gamma:"≈0",theta:"≈0",vega:"≈0"},cryptoNote:"Deribit 期权费≈标的 0.03%/张（且封顶在权利金的 12.5%）+ 交割费，领口三腿（现货+Put+Call）来回成交，手续费会蚕食本就微薄的零成本价差；务必用组合单/RFQ 按净价一次性成交，别手动逐腿挂单——快市里成了一腿没成另一腿，会留下裸 Call/裸 Put 敞口。好在卖出的 Call 由现货覆盖（等同备兑），基本不额外占用保证金。"},Wm={id:"jade-lizard",name:"翡翠蜥蜴 (Jade Lizard)",category:O.INCOME,description:"卖 Put + 卖 Call 价差（无上方风险），净收权利金。",setup:"卖 OTM Put + 卖 OTM Call + 买 更高 OTM Call",riskProfile:"下方风险较大（暴跌按 Put 行权价接盘，最大亏损约 $90k），上方无风险，收益为净权利金。",idealScenario:"价格不上破上方、且不大幅下破下方。",legs:[{type:"Put",action:"Sell",strikeOffset:.95,premiumRatio:.03},{type:"Call",action:"Sell",strikeOffset:1.05,premiumRatio:.03},{type:"Call",action:"Buy",strikeOffset:1.1,premiumRatio:.01}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
        <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-indigo-800 text-sm">Jade Lizard 通过组合使上方无风险（Call 价差封顶），下方风险由卖 Put 承担；建仓收取较高净权利金。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📉 卖 $95k Put（收 $3k）</p>
            <p class="text-sm text-slate-700">下方风险由 Put 承担</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📈 卖 $105k Call（收 $3k）+ 买 $110k Call（付 $1k）</p>
            <p class="text-sm text-slate-700">上方无风险（价差封顶）</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净收入</strong> = $3k + $3k − $1k = <strong>$5k</strong></p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">$5k</div>
          <p class="text-xs text-slate-600">价格在 $95k–$105k 之间</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">下方风险</div>
          <div class="text-2xl font-bold text-red-700 mb-2">约 $90k</div>
          <p class="text-xs text-slate-600">跌破 $90k 起净亏损；极端跌至 $0 时最大亏损约 $90k（= Put 行权价 $95k − 净权利金 $5k），到期按现金差额结算</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">上方风险</div>
          <div class="text-lg font-bold text-blue-700 mb-2">无</div>
          <p class="text-xs text-slate-600">Call 价差封顶了上行风险</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，偏中性至轻微看涨</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收敛：$98k–$104k</p>
            <p class="text-xs text-green-700 mt-1">两端作废，保留 $5k</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 下探 $92k</p>
            <p class="text-xs text-yellow-700 mt-1">按现金差额结算（经济效果≈按 $95k 接盘），Put 端内在价值损失 $3k，扣除后净盈亏 = $5k − $3k = +$2k，仍高于盈亏平衡点 $90k，尚未出现真实亏损，但收益已被大幅侵蚀</p>
          </div>
          <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
            <p class="text-sm font-bold text-blue-800">ℹ️ 上涨 $110k</p>
            <p class="text-xs text-blue-700 mt-1">Call 价差封顶，无上方风险</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
            <li>中性至轻微看涨，不预期强趋势</li>
            <li>希望收较高权利金且上方无风险</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>可能出现暴跌（下方风险较大）</li>
            <li>不愿意潜在接盘</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>下方风险</strong>：暴跌时按现金差额结算（经济效果≈按 Put 行权价接盘），面临浮亏</li>
          <li><strong>Vega 风险</strong>：本组合净卖出期权（Vega 为负），IV 上升会推高卖出的 $95k Put 与 $105k Call 的价值，带来浮亏与保证金压力；建仓宜挑 IV 偏高时卖权收金，而非在 IV 低位入场</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>权利金目标</strong>：收取权利金 ≥ Call 价差宽度，确保上方无风险</li>
          <li><strong>行权价选择</strong>：Put 设在支撑位下方 5–10%；Call 价差设在阻力位附近</li>
        </ul>
      </div>
    `,pros:["上方无风险，净收权利金高。","适合中性至轻微看涨的环境。"],cons:["下方风险较大，暴跌时可能被行权接盘。","上方收益已封顶为净权利金 $5k，无法享受趋势上涨。"]},plainSummary:"一上来先收一笔钱，赌 BTC 不暴跌：只要它不跌破下方 $95k，你都不会倒亏；但如果暴涨突破 $105k，到手利润会随价格上涨从 $5k 逐步缩水，涨到 $110k 及以上时利润归零（不会转负，也谈不上「稳稳到手」）；真要暴跌，你得按约定的低价接盘、扛浮亏。",analogy:{emoji:"🏪",title:"收两份押金，只怕跌价",text:"好比开店收了两份押金：一份是答应「东西跌到便宜价就照单全收」——这是你唯一真正的风险；另一份是跟人打赌「不会暴涨」，但你顺手给这个赌约上了封顶保险，所以涨多高你都只输固定的那点、还净赚押金。只要价格不暴跌，两份押金都归你。"},pitfalls:["以为「上方无风险」就等于整体稳赚——下方暴跌时要按 Put 行权价接盘，亏损可以很大，$5k 权利金只是杯水车薪。","收的总权利金没盖过 Call 价差宽度——一旦权利金 < 价差宽度，上方就不再无风险，大涨照样亏，等于丢了本策略的灵魂。","Put 行权价设得离现价太近——接盘概率大增；支撑位还没站稳就建仓，很容易直接被套。"],quickJudge:{use:"中性偏多、愿低位接币",avoid:"预期暴跌、不愿接盘"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit/OKX 的 BTC 期权是欧式+现金交割：到期 ITM 只结算现金差额、不会自动帮你接币，所谓「按 $95k 接盘」只是经济效果≈接盘，想真正持币得手动去现货补一笔。同时卖方要占用保证金、到期前就可能被增量强平：即便现货没动，只要 IV 单独飙升也会推高空头 mark price 触发追保；币本位下暴跌还会「浮亏+抵押品缩水」双杀。务必仓位小、保证金留足缓冲。"},Fm={id:"seagull",name:"海鸥组合 (Seagull)",category:O.INCOME,description:"低成本方向表达：买 Call + 卖更高 Call + 卖 Put。",setup:"买 ATM Call + 卖 OTM Call + 卖 OTM Put",riskProfile:"下方风险较大（暴跌跌破 $95k Put 行权价接盘，理论最大亏损约 $95k），上方收益封顶（最高约 $10k）；成本低或净收。",idealScenario:"轻微看涨、价格留在安全区间。",legs:[{type:"Call",action:"Buy",strikeOffset:1,premiumRatio:.05},{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.95,premiumRatio:.03}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
        <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-indigo-800 text-sm">Seagull 用卖 Put 与卖更高 Call 抵消买 Call 成本，实现低成本或净收的方向表达，适合轻微看涨的区间。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📈 买 $100k Call（付 $5k）</p>
            <p class="text-sm text-slate-700">方向表达</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📉 卖 $110k Call（收 $2k）+ 卖 $95k Put（收 $3k）</p>
            <p class="text-sm text-slate-700">抵成本，低成本或净收</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>净成本</strong> ≈ $0</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">上方收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">封顶</div>
          <p class="text-xs text-slate-600">被 $110k Call 限制</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">下方风险</div>
          <div class="text-2xl font-bold text-red-700 mb-2">最大约 $95k</div>
          <p class="text-xs text-slate-600">净成本≈$0，跌破 $95k 后亏损随价格线性放大，极端跌至 $0 时理论最大亏损≈$95k</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">净成本</div>
          <div class="text-lg font-bold text-blue-700 mb-2">低或净收</div>
          <p class="text-xs text-slate-600">抵消买 Call 成本</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，轻微看涨</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收于 $105k–$109k</p>
            <p class="text-xs text-green-700 mt-1">方向实现，净成本≈0，收益可观</p>
          </div>
          <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
            <p class="text-sm font-bold text-blue-800">ℹ️ 收于 $100k</p>
            <p class="text-xs text-blue-700 mt-1">两端部分作废，成本已抵消</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 暴跌：收于 $80k</p>
            <p class="text-xs text-red-700 mt-1">$95k Put 被行权接盘，亏损约 $15k（继续下跌亏损线性放大，下方风险大）</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
            <li>轻微看涨，预算有限，倾向低成本表达</li>
            <li>价格预计在安全区间内</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>可能出现暴跌（下方风险较大）</li>
            <li>不愿潜在接盘</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>下方风险</strong>：被行权接盘，跌破 $95k 后浮亏随价格线性放大，极端归零情形下理论最大亏损约 $95k</li>
          <li><strong>Vega 风险</strong>：本组合净卖出期权（1 买 2 卖、整体偏空 Vega），IV 上升时卖出的 $95k Put 与 $110k Call 价值膨胀带来浮亏；故入场宜选 IV 偏高时卖权收金。</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>区间设计</strong>：Put 设在支撑位下 5–10%，Call 设在阻力位上 5–10%</li>
          <li><strong>权利金目标</strong>：以抵消买 Call 为目标，尽量净收</li>
        </ul>
      </div>
    `,pros:["低成本或净收的方向表达，适合轻微看涨。","结构简单，易于上手。"],cons:["下方风险较大，可能被行权接盘。","上方收益被卖出的 $110k Call 封顶（最高约 $10k），无法享受大幅上涨。"]},plainSummary:"想赌 BTC 小涨，又不想掏钱买票。于是你答应「跌狠了我低价接盘」、「涨太猛就见好就收」，用这两个承诺收来的钱补回赌涨的成本，几乎零成本博一波温和上涨；代价是真崩了你得乖乖接盘、亏不少。",analogy:{emoji:"🏠",title:"白嫖一张看涨票，代价是两个承诺",text:"你看好某小区房价小涨，但不想花钱买入场券。于是签两份承诺：房价跌穿地板，你按约定价接房（对方先付你一笔定金）；房价涨破封顶，你就把房让出去不再追（再收一笔定金）。两笔定金正好抵掉买票的钱，你几乎零成本押注它温和上涨——但真崩盘跌穿地板，你得照约定掏钱接房，亏不少。"},pitfalls:["只盯着「零成本」三个字，忘了卖出的 Put 是真义务——暴跌时你得在 $95k 接盘，越跌亏越多，这才是本策略最大的雷。","把卖 Put 收的权利金当成白捡的——它是你为「潜在接盘义务」收的对价，行情一翻脸全得吐回去还倒贴。","上方 Call 行权价设得太近，BTC 稍一冲就被封顶卖飞，温和看涨的甜区被自己压没了。"],quickJudge:{use:"轻微看涨且愿在低位接盘",avoid:"怕暴跌或想吃满大涨行情"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit 上这是三腿净卖权：两条卖出腿（尤其卖 Put 的接盘义务）要占用保证金，且 BTC 期权多为币本位现金结算、盈亏按 BTC 计价，暴跌时「价跌＋币贬」会放大下方亏损。下单务必用组合单/RFQ 按净价一次成交，别逐腿手挂（快市易留裸腿；三腿来回手续费也会侵蚀本就微薄的净权利金）。"},tp={id:"wheel",name:"轮子策略 (Wheel)",category:O.INCOME,description:"流程型：卖 Put 接盘 → 持币后卖 Call 收租，循环滚动。",setup:"阶段一 卖出 OTM Put；阶段二 被行权持币后卖 OTM Call",riskProfile:"下方风险同持币，上方收益封顶（收权利金）。",idealScenario:"区间震荡与温和趋势，长期收租与低成本建仓。",legs:[],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
        <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-indigo-800 text-sm">Wheel 是流程型策略：先卖 Put 以较低成本接盘；被行权持币后转为卖 Call 收租；到期滚动下一期，周而复始实现现金流增强。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">🔄 阶段一：卖出 OTM Put 收租</p>
            <p class="text-sm text-slate-700 mb-2">卖 $90k Put 收权利金 ≈ $2k；若到期不被行权，重复该阶段</p>
            <p class="text-xs text-slate-600"><strong>目标</strong>：持续收租，降低未来建仓成本</p>
          </div>
          <div class="bg-green-50 p-4 rounded border border-green-200">
            <p class="font-bold text-green-700 mb-2">📦 阶段二：Put 实值结算（经济效果≈接盘持币）</p>
            <p class="text-sm text-slate-700 mb-2">若价格跌至 $90k 以下，Put 进入实值：Deribit/OKX 按现金差额结算（不自动交割实物），经济效果≈以 $90k 接盘 1 BTC；若要真正持币，需自行准备现金到现货市场买入 1 BTC（现金差额是你需要向买方支付的成本，而非收到的资金：支付的差额 (90k−spot) 加上按现价买入的花费，合计约等于 $90k）</p>
            <p class="text-xs text-slate-600"><strong>实际接盘成本</strong>：$90k - 累计权利金（如已收3期，成本降至 $84k）</p>
          </div>
          <div class="bg-orange-50 p-4 rounded border border-orange-200">
            <p class="font-bold text-orange-700 mb-2">💰 阶段三：持币卖 Call 收租</p>
            <p class="text-sm text-slate-700 mb-2">持币后卖 $110k Call 收权利金 ≈ $2k；到期后重复</p>
            <p class="text-xs text-slate-600"><strong>循环</strong>：Call 实值时按现金差额结算（经济效果≈按 $110k 封顶卖出），回到阶段一继续卖 Put</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">长期收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">稳定现金流</div>
          <p class="text-xs text-slate-600">权利金与低成本建仓加持</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">下方风险</div>
          <div class="text-2xl font-bold text-red-700 mb-2">同持币</div>
          <p class="text-xs text-slate-600">暴跌时持币浮亏</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">上方风险</div>
          <div class="text-lg font-bold text-blue-700 mb-2">卖飞</div>
          <p class="text-xs text-slate-600">上涨超过行权价时收益封顶</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，轮子循环</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 横盘 $95k–$105k(最佳)</p>
            <p class="text-xs text-green-700 mt-1">连卖 3 期 $90k Put 各收 $2k，均未被行权，累计 +$6k 现金流。</p>
          </div>
          <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
            <p class="text-sm font-bold text-blue-800">ℹ️ 被行权后卖 Call(中等)</p>
            <p class="text-xs text-blue-700 mt-1">$90k 现金差额结算（经济效果≈接盘 1 BTC，手动补现货持有），卖 $110k Call 收 $2k；到期涨到 $108k 未触发，持币浮盈 +$18k 再加 $2k 权利金。</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 暴跌至 $70k(最差)</p>
            <p class="text-xs text-red-700 mt-1">$90k 现金结算后≈接盘持币，继续跌到 $70k 浮亏 -$20k，累计权利金 +$8k 缓冲后净约 -$12k。</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
            <li>长期持币且希望增强现金流</li>
            <li>区间震荡或温和趋势</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>不愿被动接盘或被动卖出现货</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>执行纪律风险</strong>：必须严格遵守滚动规则，避免情绪化操作</li>
          <li><strong>Theta 与 Gamma</strong>：作为净期权卖方，组合 Theta 为正，时间流逝即带来权利金收益；但组合为负 Gamma（空头 Gamma），临近到期其绝对值升高，价格剧烈波动时损益变化加剧。</li>
          <li><strong>Vega 风险</strong>：组合为净空 Vega，卖出后若 IV 上升会产生浮亏，故 IV 高位入场更有利。</li>
          <li><strong>暴跌风险</strong>：被行权持币后若继续暴跌，持币浮亏但权利金提供缓冲</li>
          <li><strong>卖飞风险</strong>：上涨超过 Call 行权价时，收益封顶，错过超额涨幅</li>
          <li><strong>流动性风险</strong>：需要确保期权合约有足够流动性，避免滑点过大</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>分批与周期管理</strong>：按月或双周滚动，分批建仓减少一次性风险</li>
          <li><strong>行权价选择艺术</strong>：Put 设在支撑位下方 5–10%，Call 设在阻力位上方 5–10%</li>
          <li><strong>资金管理</strong>：确保有足够保证金应对 Put 被行权，避免强制平仓</li>
          <li><strong>IV 择时</strong>：在 IV 高位时卖期权，权利金收入更高</li>
          <li><strong>止损策略</strong>：若价格快速突破行权价，考虑提前平仓或滚动到新价位</li>
          <li><strong>税务规划</strong>：注意被行权产生的税务影响，合理规划持仓周期</li>
        </ul>
      </div>
    `,pros:["长期稳定现金流并降低建仓成本。","在震荡或温和趋势环境表现良好。"],cons:["暴跌时被行权接币后持续浮亏，回本依赖币价反弹，本质承担与持币相同的下行风险。","上涨突破 Call 行权价时收益封顶，容易“卖飞”错过主升浪。"]},plainSummary:"你本来就想低价囤币：先收一笔钱押它不会跌破某个价——没跌到就白赚这笔钱，真跌到了正好按那个价低价接货；接到币后再收一笔钱押它不会大涨，就这样一轮一轮地两头收着租。",analogy:{emoji:"🔄",title:"两头收定金的精明商贩",text:"像个会做生意的二手商贩：先跟卖家说“跌到这个价我就收”，并先收一笔定金（押它不跌破）；真收到货后，再挂出“涨到那个价我就卖”，又先收一笔定金（押它不大涨）。不管最后收没收到货，两头的定金都先落袋，然后循环往复地收。"},pitfalls:["把 Wheel 当“稳赚不赔”：暴跌被迫低价接币后照样大幅浮亏，那点权利金缓冲根本不够，本质和裸持币一样要扛下行风险。","Put 行权价挂得离现价太近，频繁被接盘，在下跌途中越接越亏，保证金很快打满、失去后续滚动空间。","接币后 Call 行权价设得太低，稍微一涨就被“卖飞”，踏空主升浪，把辛苦攒下的成本优势又亏回去。"],quickJudge:{use:"长期想低价囤币、看震荡或温和趋势",avoid:"不愿被动接币/怕踏空、预期单边暴涨暴跌"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:"Deribit/OKX 的 BTC 期权是欧式 + 现金交割：到期 ITM 只结算现金差额，不会自动帮你接币或卖币。本策略里“被行权接 1 BTC”“按 $110k 卖出”是实物期权的叙事——加密下经济效果≈低价接盘 / ≈封顶卖出，但要真正完成“持币收租”与“卖飞”的衔接，需自行准备现金到现货市场补买/补卖一笔（现金差额是你按方向支付或抵扣的成本，不是收到的资金）。"},lp={id:"covered-strangle",name:"备兑宽跨式 (Covered Strangle)",category:O.INCOME,description:"持币 + 卖 OTM Call + 卖 OTM Put，扩大收租区间。",setup:"持有现货 + 卖 OTM Call + 卖 OTM Put",riskProfile:"下方风险大于持币（额外卖出 Put 叠加多头敞口），上方收益封顶；收权利金更高。",idealScenario:"宽区间震荡，偏中性。",legs:[{type:"Call",action:"Sell",strikeOffset:1.1,premiumRatio:.02},{type:"Put",action:"Sell",strikeOffset:.9,premiumRatio:.02}],detailedAnalysis:{explanation:`
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
        <p class="text-indigo-900 font-semibold mb-2">💡 策略核心思想</p>
        <p class="text-indigo-800 text-sm">Covered Strangle 将 Covered Call 扩展为双端收租（再卖 Put），在宽区间内提升现金流，但下方风险更大。</p>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📋 策略构造</h4>
      <div class="bg-white border border-slate-200 rounded-lg p-5 mb-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <p class="font-bold text-blue-700 mb-2">📈 持有 1 BTC 现货</p>
            <p class="text-sm text-slate-700">例：$100k</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded border border-cyan-200">
            <p class="font-bold text-cyan-700 mb-2">📉 卖 $110k Call（收 $2k）+ 卖 $90k Put（收 $2k）</p>
            <p class="text-sm text-slate-700">宽区间收租</p>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded mt-3">
          <p class="text-sm text-slate-700 mb-2"><strong>总净收入</strong> ≈ $4k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💰 损益分析</h4>
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
          <div class="text-xs text-emerald-600 font-bold mb-1">最大收益</div>
          <div class="text-2xl font-bold text-emerald-700 mb-2">$4k + 现货上涨</div>
          <p class="text-xs text-slate-600">上方被 $110k 封顶</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <div class="text-xs text-red-600 font-bold mb-1">最大风险</div>
          <div class="text-2xl font-bold text-red-700 mb-2">同持币 + Put 现金结算（≈接盘）</div>
          <p class="text-xs text-slate-600">暴跌时风险更大</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div class="text-xs text-blue-600 font-bold mb-1">盈利区间</div>
          <div class="text-lg font-bold text-blue-700 mb-2">$96k 以上</div>
          <p class="text-xs text-slate-600">$96k 为盈亏平衡点，以上盈利；$110k 以上盈利封顶 $14k</p>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">📊 实战案例</h4>
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p class="font-bold text-slate-900 mb-3">案例：BTC $100k，宽区间震荡</p>
        <div class="space-y-2">
          <div class="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p class="text-sm font-bold text-green-800">✅ 收敛于 $96k–$110k</p>
            <p class="text-xs text-green-700 mt-1">两端作废，$4k 权利金兑现并保留至 $110k 封顶的现货上涨收益（$96k 以下转亏）</p>
          </div>
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
            <p class="text-sm font-bold text-yellow-800">⚠️ 接近边界：$90k 或 $110k</p>
            <p class="text-xs text-yellow-700 mt-1">波动加剧，留意滚动与对冲</p>
          </div>
          <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
            <p class="text-sm font-bold text-red-800">❌ 突破边界：$85k 或 $115k+</p>
            <p class="text-xs text-red-700 mt-1">下方按现金差额结算（≈接盘），上方按 $110k 封顶（≈卖飞）</p>
          </div>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">🎯 使用场景</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <p class="font-bold text-indigo-900 mb-2">✓ 适合使用</p>
          <ul class="text-sm text-indigo-800 space-y-1 list-disc pl-5">
            <li>长期持币者，偏中性震荡行情</li>
            <li>希望更高现金流</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
          <p class="font-bold text-red-900 mb-2">✗ 不适合使用</p>
          <ul class="text-sm text-red-800 space-y-1 list-disc pl-5">
            <li>预期暴跌或强趋势上涨</li>
          </ul>
        </div>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">⚠️ 风险提示</h4>
      <div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
        <ul class="text-sm text-amber-900 space-y-2 list-disc pl-5">
          <li><strong>下方风险</strong>：Put 到期按现金差额结算（经济效果≈接盘），暴跌时浮亏更大</li>
          <li><strong>执行复杂度</strong>：双端同时管理与滚动</li>
          <li><strong>Vega/Theta</strong>：双卖期权为负 Vega、正 Theta；IV 上升使两个空头浮亏，而时间衰减（Theta）有利于权利金兑现。</li>
        </ul>
      </div>
      <h4 class="font-bold text-slate-900 mt-6 mb-3 text-lg">💡 专业建议</h4>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg">
        <ul class="text-sm text-indigo-900 space-y-2 list-disc pl-5">
          <li><strong>行权价选择</strong>：上下各 8–12%，对齐支撑与阻力</li>
          <li><strong>滚动节奏</strong>：接近边界时及时滚动，保持安全区</li>
        </ul>
      </div>
    `,pros:["现金流更高，扩大收租区间。","适合长期持币的中性策略。"],cons:["下方风险增加，执行管理更复杂。","保证金占用更高：卖出的 Put 端未被现货覆盖（现货只能对冲 Call 端），行情大幅下跌时该腿浮亏会持续扩大，可能面临追加保证金甚至强制平仓的风险。"]},plainSummary:'你手里有币，同时答应别人"涨太多就卖给你""跌下来就再接一份"，两头都先收一笔钱；只要币价不大涨也不大跌，这两笔钱就白赚。',analogy:{emoji:"🏠",title:"持房两头收定金",text:'你有套房暂时不卖。一边答应房客"涨到 110 万我就卖给你"，先收一笔定金；一边又答应另一户"跌到 90 万我就连他那套一起接下来"，再收一笔定金。房价在 90 万–110 万之间晃，两笔定金都白赚；真涨过头就按 110 万卖掉、真跌破就得按 90 万再接一套房。'},pitfalls:['别把它当"两头白收钱、稳赚不赔"——暴跌时手里的币和卖出的 Put 同时亏，亏损是双份叠加，比单纯持币更惨。','Put 卖太多份或行权价贴太近，跌下来要"接"的金额超出现金储备，保证金不足会被强平在最差位置。','只惦记上方"卖飞"少赚，没意识到真正的大坑在下方——这策略骨子里是加倍看多，预期暴跌时千万别用。'],quickJudge:{use:"长期持币、看宽幅震荡、想多收租",avoid:"预期暴跌或要单边大涨"},greeks:{delta:"+",gamma:"−",theta:"+",vega:"−"},cryptoNote:'Deribit/OKX 的 BTC 期权是欧式 + 现金交割：到期 ITM 只按现金差额结算，不会自动帮你卖币或接币——"被 Put 行权接盘""按 $110k 卖出"都只是经济效果，想真正加减仓得自己上现货市场手动操作。另外卖 Put 这条腿要单独占用保证金，别让它和现货一起把仓位顶到强平线。'},ep=[Km,Pm,Im,Wm,Fm,tp,lp],ap=[...nm,...hm,...zm,...wm,...Jm,...ep],sp=1e5,ps=ap,dp=vc.lazy(()=>sm(()=>import("./StrategyDetail-Bc609pwS.js"),__vite__mapDeps([0,1,2]),import.meta.url)),xc=Object.values(O),yc=new Map,ip=/^(.*?)\s*[（(]\s*(.+?)\s*[）)]\s*$/;ps.forEach(h=>{const P=h.name.match(ip);yc.set(h.id,P?{cn:P[1].trim(),en:P[2].trim()}:{cn:h.name.trim(),en:""})});const hc=Et.memo(({strategy:h,isSelected:P,onSelect:tt})=>{const p=yc.get(h.id)||{cn:h.name,en:""};return C.jsx("button",{onClick:()=>tt(h.id),"aria-current":P?"page":void 0,className:`w-full text-left px-3 py-3 lg:py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-out border-l-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 ${P?"bg-brand-50 text-brand-700 border-brand-600 font-semibold":"border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`,children:C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{children:p.cn}),p.en&&C.jsx("span",{className:"text-xs opacity-70 font-normal truncate mt-0.5",children:p.en})]})})});hc.displayName="SidebarButton";const op=()=>{const[h,P]=Et.useState(ps[0].id),[tt]=Et.useState(sp),[p,R]=Et.useState(()=>typeof window<"u"&&window.innerWidth<1024),[E,W]=Et.useState(()=>typeof window>"u"||window.innerWidth>=1024),gt=Et.useMemo(()=>ps.find(B=>B.id===h)||ps[0],[h]);Et.useEffect(()=>{let B=null,w=window.innerWidth<1024;const _l=()=>{const Ct=window.innerWidth<1024;Ct!==w&&(w=Ct,R(Ct),W(!Ct))},jl=()=>{B&&cancelAnimationFrame(B),B=requestAnimationFrame(()=>{_l(),B=null})};return window.addEventListener("resize",jl),()=>{B&&cancelAnimationFrame(B),window.removeEventListener("resize",jl)}},[]),Et.useEffect(()=>{if(!p||!E)return;const B=w=>{w.key==="Escape"&&W(!1)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[p,E]);const dt=Et.useMemo(()=>ps.reduce((B,w)=>(B[w.category]||(B[w.category]=[]),B[w.category].push(w),B),{}),[]),vt=Et.useMemo(()=>xc.flatMap(B=>dt[B]||[]),[dt]),{prevStrategy:ht,nextStrategy:M}=Et.useMemo(()=>{const B=vt.findIndex(w=>w.id===h);return{prevStrategy:B>0?vt[B-1]:null,nextStrategy:B>=0&&B<vt.length-1?vt[B+1]:null}},[vt,h]),F=Et.useCallback(()=>W(B=>!B),[]),Pt=Et.useCallback(()=>W(!1),[]),ot=Et.useCallback(B=>{P(B),window.innerWidth<1024&&W(!1)},[]);return C.jsxs("div",{className:"flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative",children:[C.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2 focus:rounded-lg focus:shadow focus:ring-2 focus:ring-brand-500 text-sm font-medium text-brand-700",children:"跳到主要内容"}),p&&E&&C.jsx("div",{className:"fixed inset-0 bg-black/30 z-40 backdrop-blur-sm transition-opacity",onClick:Pt}),C.jsx("aside",{id:"strategy-sidebar","aria-label":"侧边栏",inert:!E||void 0,className:`
          fixed lg:relative z-50 h-full bg-white border-r border-slate-200 flex flex-col transition-[transform,width] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sidebar-animate
          ${E?"translate-x-0 w-80 shadow-2xl lg:shadow-none":"-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden"}
        `,children:C.jsxs("div",{className:"w-80 flex flex-col h-full bg-white",children:[" ",C.jsxs("div",{className:"p-4 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-10",children:[C.jsx("div",{className:"flex-1 min-w-0",children:C.jsxs("div",{className:"flex items-center gap-3 px-2",children:[C.jsx("img",{src:"./favicon.svg",alt:"BTC Options",className:"h-10 w-10 rounded-lg shadow-sm flex-shrink-0"}),C.jsxs("div",{className:"min-w-0",children:[C.jsx("div",{className:"text-slate-900 font-extrabold text-lg md:text-xl leading-tight",children:"Option Strategy"}),C.jsx("div",{className:"text-xs md:text-sm leading-tight bg-gradient-to-r from-[#7c3aed] via-pink-500 to-orange-500 bg-clip-text text-transparent",children:"如果说衍生品是金融产品中的皇冠"}),C.jsx("div",{className:"text-xs md:text-sm leading-tight bg-gradient-to-r from-[#7c3aed] via-pink-500 to-orange-500 bg-clip-text text-transparent",children:"那么期权就是这顶皇冠上的明珠"})]})]})}),C.jsx("button",{onClick:Pt,"aria-label":"关闭侧边栏",className:"lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",children:C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C.jsx("path",{d:"M18 6 6 18"}),C.jsx("path",{d:"m6 6 12 12"})]})})]}),C.jsx("nav",{"aria-label":"期权策略列表",className:"flex-1 overflow-y-auto p-3 custom-scrollbar space-y-4",children:xc.filter(B=>{var w;return((w=dt[B])==null?void 0:w.length)>0}).map(B=>C.jsxs("div",{children:[C.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2 sticky top-0 bg-white/95 backdrop-blur py-1 z-10",children:B}),C.jsx("div",{className:"space-y-1",children:dt[B].map(w=>C.jsx(hc,{strategy:w,isSelected:h===w.id,onSelect:ot},w.id))})]},B))}),C.jsxs("div",{className:"px-4 py-3 border-t border-slate-100 flex items-center justify-center gap-4",children:[C.jsxs("a",{href:"https://x.com/xuhaijian",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors duration-200 ease-out",children:[C.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),C.jsx("span",{children:"X (Twitter)"})]}),C.jsx("span",{className:"text-slate-300 text-xs",children:"·"}),C.jsxs("a",{href:"https://github.com/xxhhjj/opabc",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors duration-200 ease-out",children:[C.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A10.94 10.94 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})}),C.jsx("span",{children:"GitHub"})]})]})]})}),C.jsxs("main",{id:"main-content",className:"flex-1 h-full overflow-hidden bg-slate-50 flex flex-col w-full relative",children:[C.jsxs("div",{className:`shrink-0 px-4 pt-4 md:px-6 md:pt-6 flex items-center justify-between ${p&&E?"hidden":"flex"}`,children:[C.jsx("button",{onClick:F,"aria-label":E?"隐藏侧边栏":"显示策略列表","aria-expanded":E,"aria-controls":"strategy-sidebar",title:E?"隐藏侧边栏":"显示策略列表",className:"p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-white border border-slate-200 shadow-card rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white active:scale-95 transition-[background-color,box-shadow,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",children:E?C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),C.jsx("path",{d:"M9 3v18"})]}):C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C.jsx("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),C.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),C.jsx("line",{x1:"3",x2:"21",y1:"18",y2:"18"})]})}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("a",{href:"https://x.com/xuhaijian",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",title:"X (Twitter)",className:"p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-white border border-slate-200 shadow-card rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white active:scale-95 transition-[background-color,box-shadow,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",children:C.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),C.jsx("a",{href:"https://github.com/xxhhjj/opabc",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub 仓库",title:"GitHub 仓库",className:"p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-white border border-slate-200 shadow-card rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white active:scale-95 transition-[background-color,box-shadow,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",children:C.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:C.jsx("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A10.94 10.94 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})})]})]}),C.jsx(Et.Suspense,{fallback:C.jsxs("div",{className:"flex-1 p-8 animate-pulse",children:[C.jsx("div",{className:"h-8 bg-slate-200 rounded w-1/4 mb-4"}),C.jsx("div",{className:"h-4 bg-slate-200 rounded w-1/2 mb-8"}),C.jsx("div",{className:"aspect-[4/3] max-h-[600px] bg-slate-200 rounded-2xl"})]}),children:C.jsx(dp,{strategy:gt,btcPrice:tt,prevStrategy:ht,nextStrategy:M,onNavigate:ot})})]})]})},kc=document.getElementById("root");if(!kc)throw new Error("Could not find root element to mount to");const rp=lm.createRoot(kc);rp.render(C.jsx(vc.StrictMode,{children:C.jsx(op,{})}));export{O as S,sm as _,C as j};
