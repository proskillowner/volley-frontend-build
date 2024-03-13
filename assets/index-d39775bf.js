import{t as O}from"./tslib-fe69f377.js";import{aQ as c}from"./index-8f928d86.js";const h="PARSE_ERROR",F="INVALID_REQUEST",b="METHOD_NOT_FOUND",N="INVALID_PARAMS",y="INTERNAL_ERROR",f="SERVER_ERROR",w=[-32700,-32600,-32601,-32602,-32603],s={[h]:{code:-32700,message:"Parse error"},[F]:{code:-32600,message:"Invalid Request"},[b]:{code:-32601,message:"Method not found"},[N]:{code:-32602,message:"Invalid params"},[y]:{code:-32603,message:"Internal error"},[f]:{code:-32e3,message:"Server error"}},m=f;function D(e){return w.includes(e)}function p(e){return Object.keys(s).includes(e)?s[e]:s[m]}function A(e){const r=Object.values(s).find(t=>t.code===e);return r||s[m]}function L(e,r,t){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${t} RPC url at ${r}`):e}var I={},o={},l;function S(){if(l)return o;l=1,Object.defineProperty(o,"__esModule",{value:!0}),o.isBrowserCryptoAvailable=o.getSubtleCrypto=o.getBrowerCrypto=void 0;function e(){return(c===null||c===void 0?void 0:c.crypto)||(c===null||c===void 0?void 0:c.msCrypto)||{}}o.getBrowerCrypto=e;function r(){const a=e();return a.subtle||a.webkitSubtle}o.getSubtleCrypto=r;function t(){return!!e()&&!!r()}return o.isBrowserCryptoAvailable=t,o}var n={},E;function M(){if(E)return n;E=1,Object.defineProperty(n,"__esModule",{value:!0}),n.isBrowser=n.isNode=n.isReactNative=void 0;function e(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}n.isReactNative=e;function r(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}n.isNode=r;function t(){return!e()&&!r()}return n.isBrowser=t,n}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const r=O;r.__exportStar(S(),e),r.__exportStar(M(),e)})(I);function C(e=3){const r=Date.now()*Math.pow(10,e),t=Math.floor(Math.random()*Math.pow(10,e));return r+t}function V(e=6){return BigInt(C(e))}function q(e,r,t){return{id:t||C(),jsonrpc:"2.0",method:e,params:r}}function J(e,r){return{id:e,jsonrpc:"2.0",result:r}}function Q(e,r,t){return{id:e,jsonrpc:"2.0",error:j(r,t)}}function j(e,r){return typeof e>"u"?p(y):(typeof e=="string"&&(e=Object.assign(Object.assign({},p(f)),{message:e})),typeof r<"u"&&(e.data=r),D(e.code)&&(e=A(e.code)),e)}var $=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),_="%[a-f0-9]{2}",v=new RegExp("("+_+")|([^%]+?)","gi"),g=new RegExp("("+_+")+","gi");function d(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;var t=e.slice(0,r),a=e.slice(r);return Array.prototype.concat.call([],d(t),d(a))}function T(e){try{return decodeURIComponent(e)}catch{for(var r=e.match(v)||[],t=1;t<r.length;t++)e=d(r,t).join(""),r=e.match(v)||[];return e}}function U(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},t=g.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{var a=T(t[0]);a!==t[0]&&(r[t[0]]=a)}t=g.exec(e)}r["%C2"]="�";for(var i=Object.keys(r),u=0;u<i.length;u++){var R=i[u];e=e.replace(new RegExp(R,"g"),r[R])}return e}var H=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return U(e)}},k=(e,r)=>{if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[e];const t=e.indexOf(r);return t===-1?[e]:[e.slice(0,t),e.slice(t+r.length)]};export{$ as a,Q as b,I as c,H as d,L as e,q as f,V as g,J as h,C as p,k as s};
