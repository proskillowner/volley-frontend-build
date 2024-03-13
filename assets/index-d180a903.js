import{aS as Bt,aU as Hn}from"./index-0e3856e9.js";import{d as qn,e as Wn,f as Yn,b as Vn,h as Kn,j as Qn,k as Jn,l as Gn,n as jn,o as Zn,a as Xn,p as er,q as tr,g as nr,t as rr,u as or,v as ar,w as ir,x as lr,y as cr,i as ur,z as sr,c as fr,A as dr,m as _r,r as hr,B as gr,C as pr,D as mr,s as vr}from"./mobile-15aefc93.js";import{b as wr}from"./index-0932f5e9.js";import{d as yr}from"./dijkstra-f906a09e.js";function br(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Rt="https://registry.walletconnect.com";function Cr(){return Rt+"/api/v2/wallets"}function Er(){return Rt+"/api/v2/dapps"}function Pt(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:(n=e.image_url.sm)!==null&&n!==void 0?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function xr(e,t="mobile"){return Object.values(e).filter(n=>!!n[t].universal||!!n[t].native).map(n=>Pt(n,t))}const kr=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:qn,detectOS:Wn,formatIOSMobile:Yn,formatMobileRegistry:xr,formatMobileRegistryEntry:Pt,getClientMeta:Vn,getCrypto:Kn,getCryptoOrThrow:Qn,getDappRegistryUrl:Er,getDocument:Jn,getDocumentOrThrow:Gn,getFromWindow:jn,getFromWindowOrThrow:Zn,getLocal:Xn,getLocalStorage:er,getLocalStorageOrThrow:tr,getLocation:nr,getLocationOrThrow:rr,getMobileLinkRegistry:or,getMobileRegistryEntry:ar,getNavigator:ir,getNavigatorOrThrow:lr,getWalletRegistryUrl:Cr,isAndroid:cr,isBrowser:ur,isIOS:sr,isMobile:fr,isNode:dr,mobileLinkChoiceKey:_r,removeLocal:hr,safeJsonParse:gr,safeJsonStringify:pr,saveMobileLinkInfo:mr,setLocal:vr},Symbol.toStringTag,{value:"Module"})),Ar=Bt(kr);var le={},Tr=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Lt={},H={},Nr={}.toString,He=Array.isArray||function(e){return Nr.call(e)=="[object Array]"},Sr=He;function Br(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},e.foo()===42}catch{return!1}}E.TYPED_ARRAY_SUPPORT=Br();var at=E.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function E(e,t,n){return!E.TYPED_ARRAY_SUPPORT&&!(this instanceof E)?new E(e,t,n):typeof e=="number"?Mt(this,e):Ur(this,e,t,n)}E.TYPED_ARRAY_SUPPORT&&(E.prototype.__proto__=Uint8Array.prototype,E.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&E[Symbol.species]===E&&Object.defineProperty(E,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function qe(e){if(e>=at)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+at.toString(16)+" bytes");return e|0}function Rr(e){return e!==e}function K(e,t){var n;return E.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(t),n.__proto__=E.prototype):(n=e,n===null&&(n=new E(t)),n.length=t),n}function Mt(e,t){var n=K(e,t<0?0:qe(t)|0);if(!E.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)n[r]=0;return n}function Pr(e,t){var n=Dt(t)|0,r=K(e,n),o=r.write(t);return o!==n&&(r=r.slice(0,o)),r}function Pe(e,t){for(var n=t.length<0?0:qe(t.length)|0,r=K(e,n),o=0;o<n;o+=1)r[o]=t[o]&255;return r}function Lr(e,t,n,r){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");var o;return n===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,n):o=new Uint8Array(t,n,r),E.TYPED_ARRAY_SUPPORT?o.__proto__=E.prototype:o=Pe(e,o),o}function Mr(e,t){if(E.isBuffer(t)){var n=qe(t.length)|0,r=K(e,n);return r.length===0||t.copy(r,0,0,n),r}if(t){if(typeof ArrayBuffer<"u"&&t.buffer instanceof ArrayBuffer||"length"in t)return typeof t.length!="number"||Rr(t.length)?K(e,0):Pe(e,t);if(t.type==="Buffer"&&Array.isArray(t.data))return Pe(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function It(e,t){t=t||1/0;for(var n,r=e.length,o=null,a=[],i=0;i<r;++i){if(n=e.charCodeAt(i),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(i+1===r){(t-=3)>-1&&a.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(t-=3)>-1&&a.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return a}function Dt(e){if(E.isBuffer(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;return t===0?0:It(e).length}function Ir(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function Dr(e,t,n,r){return Ir(It(t,e.length-n),e,n,r)}function Ur(e,t,n,r){if(typeof t=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer?Lr(e,t,n,r):typeof t=="string"?Pr(e,t):Mr(e,t)}E.prototype.write=function(t,n,r){n===void 0?(r=this.length,n=0):r===void 0&&typeof n=="string"?(r=this.length,n=0):isFinite(n)&&(n=n|0,isFinite(r)?r=r|0:r=void 0);var o=this.length-n;if((r===void 0||r>o)&&(r=o),t.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return Dr(this,t,n,r)};E.prototype.slice=function(t,n){var r=this.length;t=~~t,n=n===void 0?r:~~n,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<t&&(n=t);var o;if(E.TYPED_ARRAY_SUPPORT)o=this.subarray(t,n),o.__proto__=E.prototype;else{var a=n-t;o=new E(a,void 0);for(var i=0;i<a;++i)o[i]=this[i+t]}return o};E.prototype.copy=function(t,n,r,o){if(r||(r=0),!o&&o!==0&&(o=this.length),n>=t.length&&(n=t.length),n||(n=0),o>0&&o<r&&(o=r),o===r||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-n<o-r&&(o=t.length-n+r);var a=o-r,i;if(this===t&&r<n&&n<o)for(i=a-1;i>=0;--i)t[i+n]=this[i+r];else if(a<1e3||!E.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)t[i+n]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),n);return a};E.prototype.fill=function(t,n,r){if(typeof t=="string"){if(typeof n=="string"?(n=0,r=this.length):typeof r=="string"&&(r=this.length),t.length===1){var o=t.charCodeAt(0);o<256&&(t=o)}}else typeof t=="number"&&(t=t&255);if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var a;if(typeof t=="number")for(a=n;a<r;++a)this[a]=t;else{var i=E.isBuffer(t)?t:new E(t),l=i.length;for(a=0;a<r-n;++a)this[a+n]=i[a%l]}return this};E.concat=function(t,n){if(!Sr(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return K(null,0);var r;if(n===void 0)for(n=0,r=0;r<t.length;++r)n+=t[r].length;var o=Mt(null,n),a=0;for(r=0;r<t.length;++r){var i=t[r];if(!E.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(o,a),a+=i.length}return o};E.byteLength=Dt;E.prototype._isBuffer=!0;E.isBuffer=function(t){return!!(t!=null&&t._isBuffer)};H.alloc=function(e){var t=new E(e);return t.fill(0),t};H.from=function(e){return new E(e)};var L={},We,Or=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];L.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};L.getSymbolTotalCodewords=function(t){return Or[t]};L.getBCHDigit=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t};L.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');We=t};L.isKanjiModeEnabled=function(){return typeof We<"u"};L.toSJIS=function(t){return We(t)};var we={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");var r=n.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(we);function Ut(){this.buffer=[],this.length=0}Ut.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Fr=Ut,it=H;function ce(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=it.alloc(e*e),this.reservedBit=it.alloc(e*e)}ce.prototype.set=function(e,t,n,r){var o=e*this.size+t;this.data[o]=n,r&&(this.reservedBit[o]=!0)};ce.prototype.get=function(e,t){return this.data[e*this.size+t]};ce.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};ce.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var $r=ce,Ot={};(function(e){var t=L.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];for(var o=Math.floor(r/7)+2,a=t(r),i=a===145?26:Math.ceil((a-13)/(2*o-2))*2,l=[a-7],c=1;c<o-1;c++)l[c]=l[c-1]-i;return l.push(6),l.reverse()},e.getPositions=function(r){for(var o=[],a=e.getRowColCoords(r),i=a.length,l=0;l<i;l++)for(var c=0;c<i;c++)l===0&&c===0||l===0&&c===i-1||l===i-1&&c===0||o.push([a[l],a[c]]);return o}})(Ot);var Ft={},zr=L.getSymbolSize,lt=7;Ft.getPositions=function(t){var n=zr(t);return[[0,0],[n-lt,0],[0,n-lt]]};var $t={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){for(var a=o.size,i=0,l=0,c=0,s=null,u=null,f=0;f<a;f++){l=c=0,s=u=null;for(var v=0;v<a;v++){var b=o.get(f,v);b===s?l++:(l>=5&&(i+=t.N1+(l-5)),s=b,l=1),b=o.get(v,f),b===u?c++:(c>=5&&(i+=t.N1+(c-5)),u=b,c=1)}l>=5&&(i+=t.N1+(l-5)),c>=5&&(i+=t.N1+(c-5))}return i},e.getPenaltyN2=function(o){for(var a=o.size,i=0,l=0;l<a-1;l++)for(var c=0;c<a-1;c++){var s=o.get(l,c)+o.get(l,c+1)+o.get(l+1,c)+o.get(l+1,c+1);(s===4||s===0)&&i++}return i*t.N2},e.getPenaltyN3=function(o){for(var a=o.size,i=0,l=0,c=0,s=0;s<a;s++){l=c=0;for(var u=0;u<a;u++)l=l<<1&2047|o.get(s,u),u>=10&&(l===1488||l===93)&&i++,c=c<<1&2047|o.get(u,s),u>=10&&(c===1488||c===93)&&i++}return i*t.N3},e.getPenaltyN4=function(o){for(var a=0,i=o.data.length,l=0;l<i;l++)a+=o.data[l];var c=Math.abs(Math.ceil(a*100/i/5)-10);return c*t.N4};function n(r,o,a){switch(r){case e.Patterns.PATTERN000:return(o+a)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return a%3===0;case e.Patterns.PATTERN011:return(o+a)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(a/3))%2===0;case e.Patterns.PATTERN101:return o*a%2+o*a%3===0;case e.Patterns.PATTERN110:return(o*a%2+o*a%3)%2===0;case e.Patterns.PATTERN111:return(o*a%3+(o+a)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,a){for(var i=a.size,l=0;l<i;l++)for(var c=0;c<i;c++)a.isReserved(c,l)||a.xor(c,l,n(o,c,l))},e.getBestMask=function(o,a){for(var i=Object.keys(e.Patterns).length,l=0,c=1/0,s=0;s<i;s++){a(s),e.applyMask(s,o);var u=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(s,o),u<c&&(c=u,l=s)}return l}})($t);var ye={},$=we,fe=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],de=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ye.getBlocksCount=function(t,n){switch(n){case $.L:return fe[(t-1)*4+0];case $.M:return fe[(t-1)*4+1];case $.Q:return fe[(t-1)*4+2];case $.H:return fe[(t-1)*4+3];default:return}};ye.getTotalCodewordsCount=function(t,n){switch(n){case $.L:return de[(t-1)*4+0];case $.M:return de[(t-1)*4+1];case $.Q:return de[(t-1)*4+2];case $.H:return de[(t-1)*4+3];default:return}};var zt={},be={},Ht=H,te=Ht.alloc(512),he=Ht.alloc(256);(function(){for(var t=1,n=0;n<255;n++)te[n]=t,he[t]=n,t<<=1,t&256&&(t^=285);for(n=255;n<512;n++)te[n]=te[n-255]})();be.log=function(t){if(t<1)throw new Error("log("+t+")");return he[t]};be.exp=function(t){return te[t]};be.mul=function(t,n){return t===0||n===0?0:te[he[t]+he[n]]};(function(e){var t=H,n=be;e.mul=function(o,a){for(var i=t.alloc(o.length+a.length-1),l=0;l<o.length;l++)for(var c=0;c<a.length;c++)i[l+c]^=n.mul(o[l],a[c]);return i},e.mod=function(o,a){for(var i=t.from(o);i.length-a.length>=0;){for(var l=i[0],c=0;c<a.length;c++)i[c]^=n.mul(a[c],l);for(var s=0;s<i.length&&i[s]===0;)s++;i=i.slice(s)}return i},e.generateECPolynomial=function(o){for(var a=t.from([1]),i=0;i<o;i++)a=e.mul(a,[1,n.exp(i)]);return a}})(zt);var ct=H,qt=zt,Hr=wr.Buffer;function Ye(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Ye.prototype.initialize=function(t){this.degree=t,this.genPoly=qt.generateECPolynomial(this.degree)};Ye.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=ct.alloc(this.degree),r=Hr.concat([t,n],t.length+this.degree),o=qt.mod(r,this.genPoly),a=this.degree-o.length;if(a>0){var i=ct.alloc(this.degree);return o.copy(i,a),i}return o};var qr=Ye,Wt={},q={},Ve={};Ve.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var I={},Yt="[0-9]+",Wr="[A-Z $%*+\\-./:]+",oe="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";oe=oe.replace(/u/g,"\\u");var Yr="(?:(?![A-Z0-9 $%*+\\-./:]|"+oe+`)(?:.|[\r
]))+`;I.KANJI=new RegExp(oe,"g");I.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");I.BYTE=new RegExp(Yr,"g");I.NUMERIC=new RegExp(Yt,"g");I.ALPHANUMERIC=new RegExp(Wr,"g");var Vr=new RegExp("^"+oe+"$"),Kr=new RegExp("^"+Yt+"$"),Qr=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");I.testKanji=function(t){return Vr.test(t)};I.testNumeric=function(t){return Kr.test(t)};I.testAlphanumeric=function(t){return Qr.test(t)};(function(e){var t=Ve,n=I;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(a,i){if(!a.ccBits)throw new Error("Invalid mode: "+a);if(!t.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?a.ccBits[0]:i<27?a.ccBits[1]:a.ccBits[2]},e.getBestModeForData=function(a){return n.testNumeric(a)?e.NUMERIC:n.testAlphanumeric(a)?e.ALPHANUMERIC:n.testKanji(a)?e.KANJI:e.BYTE},e.toString=function(a){if(a&&a.id)return a.id;throw new Error("Invalid mode")},e.isValid=function(a){return a&&a.bit&&a.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");var a=o.toLowerCase();switch(a){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(a,i){if(e.isValid(a))return a;try{return r(a)}catch{return i}}})(q);(function(e){var t=L,n=ye,r=we,o=q,a=Ve,i=He,l=7973,c=t.getBCHDigit(l);function s(b,p,y){for(var w=1;w<=40;w++)if(p<=e.getCapacity(w,y,b))return w}function u(b,p){return o.getCharCountIndicator(b,p)+4}function f(b,p){var y=0;return b.forEach(function(w){var m=u(w.mode,p);y+=m+w.getBitsLength()}),y}function v(b,p){for(var y=1;y<=40;y++){var w=f(b,y);if(w<=e.getCapacity(y,p,o.MIXED))return y}}e.from=function(p,y){return a.isValid(p)?parseInt(p,10):y},e.getCapacity=function(p,y,w){if(!a.isValid(p))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=o.BYTE);var m=t.getSymbolTotalCodewords(p),h=n.getTotalCodewordsCount(p,y),g=(m-h)*8;if(w===o.MIXED)return g;var _=g-u(w,p);switch(w){case o.NUMERIC:return Math.floor(_/10*3);case o.ALPHANUMERIC:return Math.floor(_/11*2);case o.KANJI:return Math.floor(_/13);case o.BYTE:default:return Math.floor(_/8)}},e.getBestVersionForData=function(p,y){var w,m=r.from(y,r.M);if(i(p)){if(p.length>1)return v(p,m);if(p.length===0)return 1;w=p[0]}else w=p;return s(w.mode,w.getLength(),m)},e.getEncodedBits=function(p){if(!a.isValid(p)||p<7)throw new Error("Invalid QR Code version");for(var y=p<<12;t.getBCHDigit(y)-c>=0;)y^=l<<t.getBCHDigit(y)-c;return p<<12|y}})(Wt);var Vt={},Le=L,Kt=1335,Jr=21522,ut=Le.getBCHDigit(Kt);Vt.getEncodedBits=function(t,n){for(var r=t.bit<<3|n,o=r<<10;Le.getBCHDigit(o)-ut>=0;)o^=Kt<<Le.getBCHDigit(o)-ut;return(r<<10|o)^Jr};var Qt={},Gr=q;function Q(e){this.mode=Gr.NUMERIC,this.data=e.toString()}Q.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(t){var n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),t.put(o,10);var a=this.data.length-n;a>0&&(r=this.data.substr(n),o=parseInt(r,10),t.put(o,a*3+1))};var jr=Q,Zr=q,ke=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function J(e){this.mode=Zr.ALPHANUMERIC,this.data=e}J.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var r=ke.indexOf(this.data[n])*45;r+=ke.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(ke.indexOf(this.data[n]),6)};var Xr=J,eo=H,to=q;function G(e){this.mode=to.BYTE,this.data=eo.from(e)}G.getBitsLength=function(t){return t*8};G.prototype.getLength=function(){return this.data.length};G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)};G.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var no=G,ro=q,oo=L;function j(e){this.mode=ro.KANJI,this.data=e}j.getBitsLength=function(t){return t*13};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=oo.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var ao=j;(function(e){var t=q,n=jr,r=Xr,o=no,a=ao,i=I,l=L,c=yr;function s(m){return unescape(encodeURIComponent(m)).length}function u(m,h,g){for(var _=[],x;(x=m.exec(g))!==null;)_.push({data:x[0],index:x.index,mode:h,length:x[0].length});return _}function f(m){var h=u(i.NUMERIC,t.NUMERIC,m),g=u(i.ALPHANUMERIC,t.ALPHANUMERIC,m),_,x;l.isKanjiModeEnabled()?(_=u(i.BYTE,t.BYTE,m),x=u(i.KANJI,t.KANJI,m)):(_=u(i.BYTE_KANJI,t.BYTE,m),x=[]);var A=h.concat(g,_,x);return A.sort(function(k,T){return k.index-T.index}).map(function(k){return{data:k.data,mode:k.mode,length:k.length}})}function v(m,h){switch(h){case t.NUMERIC:return n.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return a.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function b(m){return m.reduce(function(h,g){var _=h.length-1>=0?h[h.length-1]:null;return _&&_.mode===g.mode?(h[h.length-1].data+=g.data,h):(h.push(g),h)},[])}function p(m){for(var h=[],g=0;g<m.length;g++){var _=m[g];switch(_.mode){case t.NUMERIC:h.push([_,{data:_.data,mode:t.ALPHANUMERIC,length:_.length},{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.ALPHANUMERIC:h.push([_,{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.KANJI:h.push([_,{data:_.data,mode:t.BYTE,length:s(_.data)}]);break;case t.BYTE:h.push([{data:_.data,mode:t.BYTE,length:s(_.data)}])}}return h}function y(m,h){for(var g={},_={start:{}},x=["start"],A=0;A<m.length;A++){for(var k=m[A],T=[],S=0;S<k.length;S++){var N=k[S],W=""+A+S;T.push(W),g[W]={node:N,lastCount:0},_[W]={};for(var D=0;D<x.length;D++){var P=x[D];g[P]&&g[P].node.mode===N.mode?(_[P][W]=v(g[P].lastCount+N.length,N.mode)-v(g[P].lastCount,N.mode),g[P].lastCount+=N.length):(g[P]&&(g[P].lastCount=N.length),_[P][W]=v(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,h))}}x=T}for(D=0;D<x.length;D++)_[x[D]].end=0;return{map:_,table:g}}function w(m,h){var g,_=t.getBestModeForData(m);if(g=t.from(h,_),g!==t.BYTE&&g.bit<_.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(_));switch(g===t.KANJI&&!l.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new n(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new a(m);case t.BYTE:return new o(m)}}e.fromArray=function(h){return h.reduce(function(g,_){return typeof _=="string"?g.push(w(_,null)):_.data&&g.push(w(_.data,_.mode)),g},[])},e.fromString=function(h,g){for(var _=f(h,l.isKanjiModeEnabled()),x=p(_),A=y(x,g),k=c.find_path(A.map,"start","end"),T=[],S=1;S<k.length-1;S++)T.push(A.table[k[S]].node);return e.fromArray(b(T))},e.rawSplit=function(h){return e.fromArray(f(h,l.isKanjiModeEnabled()))}})(Qt);var st=H,Ce=L,Ae=we,io=Fr,lo=$r,co=Ot,uo=Ft,Me=$t,Ie=ye,so=qr,ge=Wt,fo=Vt,_o=q,Te=Qt,ho=He;function go(e,t){for(var n=e.size,r=uo.getPositions(t),o=0;o<r.length;o++)for(var a=r[o][0],i=r[o][1],l=-1;l<=7;l++)if(!(a+l<=-1||n<=a+l))for(var c=-1;c<=7;c++)i+c<=-1||n<=i+c||(l>=0&&l<=6&&(c===0||c===6)||c>=0&&c<=6&&(l===0||l===6)||l>=2&&l<=4&&c>=2&&c<=4?e.set(a+l,i+c,!0,!0):e.set(a+l,i+c,!1,!0))}function po(e){for(var t=e.size,n=8;n<t-8;n++){var r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function mo(e,t){for(var n=co.getPositions(t),r=0;r<n.length;r++)for(var o=n[r][0],a=n[r][1],i=-2;i<=2;i++)for(var l=-2;l<=2;l++)i===-2||i===2||l===-2||l===2||i===0&&l===0?e.set(o+i,a+l,!0,!0):e.set(o+i,a+l,!1,!0)}function vo(e,t){for(var n=e.size,r=ge.getEncodedBits(t),o,a,i,l=0;l<18;l++)o=Math.floor(l/3),a=l%3+n-8-3,i=(r>>l&1)===1,e.set(o,a,i,!0),e.set(a,o,i,!0)}function Ne(e,t,n){var r=e.size,o=fo.getEncodedBits(t,n),a,i;for(a=0;a<15;a++)i=(o>>a&1)===1,a<6?e.set(a,8,i,!0):a<8?e.set(a+1,8,i,!0):e.set(r-15+a,8,i,!0),a<8?e.set(8,r-a-1,i,!0):a<9?e.set(8,15-a-1+1,i,!0):e.set(8,15-a-1,i,!0);e.set(r-8,8,1,!0)}function wo(e,t){for(var n=e.size,r=-1,o=n-1,a=7,i=0,l=n-1;l>0;l-=2)for(l===6&&l--;;){for(var c=0;c<2;c++)if(!e.isReserved(o,l-c)){var s=!1;i<t.length&&(s=(t[i]>>>a&1)===1),e.set(o,l-c,s),a--,a===-1&&(i++,a=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function yo(e,t,n){var r=new io;n.forEach(function(s){r.put(s.mode.bit,4),r.put(s.getLength(),_o.getCharCountIndicator(s.mode,e)),s.write(r)});var o=Ce.getSymbolTotalCodewords(e),a=Ie.getTotalCodewordsCount(e,t),i=(o-a)*8;for(r.getLengthInBits()+4<=i&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);for(var l=(i-r.getLengthInBits())/8,c=0;c<l;c++)r.put(c%2?17:236,8);return bo(r,e,t)}function bo(e,t,n){for(var r=Ce.getSymbolTotalCodewords(t),o=Ie.getTotalCodewordsCount(t,n),a=r-o,i=Ie.getBlocksCount(t,n),l=r%i,c=i-l,s=Math.floor(r/i),u=Math.floor(a/i),f=u+1,v=s-u,b=new so(v),p=0,y=new Array(i),w=new Array(i),m=0,h=st.from(e.buffer),g=0;g<i;g++){var _=g<c?u:f;y[g]=h.slice(p,p+_),w[g]=b.encode(y[g]),p+=_,m=Math.max(m,_)}var x=st.alloc(r),A=0,k,T;for(k=0;k<m;k++)for(T=0;T<i;T++)k<y[T].length&&(x[A++]=y[T][k]);for(k=0;k<v;k++)for(T=0;T<i;T++)x[A++]=w[T][k];return x}function Co(e,t,n,r){var o;if(ho(e))o=Te.fromArray(e);else if(typeof e=="string"){var a=t;if(!a){var i=Te.rawSplit(e);a=ge.getBestVersionForData(i,n)}o=Te.fromString(e,a||40)}else throw new Error("Invalid data");var l=ge.getBestVersionForData(o,n);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=l;else if(t<l)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+l+`.
`);var c=yo(t,n,o),s=Ce.getSymbolSize(t),u=new lo(s);return go(u,t),po(u),mo(u,t),Ne(u,n,0),t>=7&&vo(u,t),wo(u,c),isNaN(r)&&(r=Me.getBestMask(u,Ne.bind(null,u,n))),Me.applyMask(r,u),Ne(u,n,r),{modules:u,version:t,errorCorrectionLevel:n,maskPattern:r,segments:o}}Lt.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");var r=Ae.M,o,a;return typeof n<"u"&&(r=Ae.from(n.errorCorrectionLevel,Ae.M),o=ge.from(n.version),a=Me.from(n.maskPattern),n.toSJISFunc&&Ce.setToSJISFunction(n.toSJISFunc)),Co(t,o,r,a)};var Jt={},Ke={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");var r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(a){return[a,a]}))),r.length===6&&r.push("F","F");var o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});var o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,a=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:a,scale:a?4:i,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){var a=e.getScale(r,o);return Math.floor((r+o.margin*2)*a)},e.qrToImageData=function(r,o,a){for(var i=o.modules.size,l=o.modules.data,c=e.getScale(i,a),s=Math.floor((i+a.margin*2)*c),u=a.margin*c,f=[a.color.light,a.color.dark],v=0;v<s;v++)for(var b=0;b<s;b++){var p=(v*s+b)*4,y=a.color.light;if(v>=u&&b>=u&&v<s-u&&b<s-u){var w=Math.floor((v-u)/c),m=Math.floor((b-u)/c);y=f[l[w*i+m]?1:0]}r[p++]=y.r,r[p++]=y.g,r[p++]=y.b,r[p]=y.a}}})(Ke);(function(e){var t=Ke;function n(o,a,i){o.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=i,a.width=i,a.style.height=i+"px",a.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(a,i,l){var c=l,s=i;typeof c>"u"&&(!i||!i.getContext)&&(c=i,i=void 0),i||(s=r()),c=t.getOptions(c);var u=t.getImageWidth(a.modules.size,c),f=s.getContext("2d"),v=f.createImageData(u,u);return t.qrToImageData(v.data,a,c),n(f,s,u),f.putImageData(v,0,0),s},e.renderToDataURL=function(a,i,l){var c=l;typeof c>"u"&&(!i||!i.getContext)&&(c=i,i=void 0),c||(c={});var s=e.render(a,i,c),u=c.type||"image/png",f=c.rendererOpts||{};return s.toDataURL(u,f.quality)}})(Jt);var Gt={},Eo=Ke;function ft(e,t){var n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Se(e,t,n){var r=e+t;return typeof n<"u"&&(r+=" "+n),r}function xo(e,t,n){for(var r="",o=0,a=!1,i=0,l=0;l<e.length;l++){var c=Math.floor(l%t),s=Math.floor(l/t);!c&&!a&&(a=!0),e[l]?(i++,l>0&&c>0&&e[l-1]||(r+=a?Se("M",c+n,.5+s+n):Se("m",o,0),o=0,a=!1),c+1<t&&e[l+1]||(r+=Se("h",i),i=0)):o++}return r}Gt.render=function(t,n,r){var o=Eo.getOptions(n),a=t.modules.size,i=t.modules.data,l=a+o.margin*2,c=o.color.light.a?"<path "+ft(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",s="<path "+ft(o.color.dark,"stroke")+' d="'+xo(i,a,o.margin)+'"/>',u='viewBox="0 0 '+l+" "+l+'"',f=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",v='<svg xmlns="http://www.w3.org/2000/svg" '+f+u+' shape-rendering="crispEdges">'+c+s+`</svg>
`;return typeof r=="function"&&r(null,v),v};var ko=Tr,De=Lt,jt=Jt,Ao=Gt;function Qe(e,t,n,r,o){var a=[].slice.call(arguments,1),i=a.length,l=typeof a[i-1]=="function";if(!l&&!ko())throw new Error("Callback required as last argument");if(l){if(i<2)throw new Error("Too few arguments provided");i===2?(o=n,n=t,t=r=void 0):i===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=t,t=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(n=t,t=r=void 0):i===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(s,u){try{var f=De.create(n,r);s(e(f,t,r))}catch(v){u(v)}})}try{var c=De.create(n,r);o(null,e(c,t,r))}catch(s){o(s)}}le.create=De.create;le.toCanvas=Qe.bind(null,jt.render);le.toDataURL=Qe.bind(null,jt.renderToDataURL);le.toString=Qe.bind(null,function(e,t,n){return Ao.render(e,n)});var To=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},No=To,dt={"text/plain":"Text","text/html":"Url",default:"Text"},So="Copy to clipboard: #{key}, Enter";function Bo(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Ro(e,t){var n,r,o,a,i,l,c=!1;t||(t={}),n=t.debug||!1;try{o=No(),a=document.createRange(),i=document.getSelection(),l=document.createElement("span"),l.textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(u){if(u.stopPropagation(),t.format)if(u.preventDefault(),typeof u.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=dt[t.format]||dt.default;window.clipboardData.setData(f,e)}else u.clipboardData.clearData(),u.clipboardData.setData(t.format,e);t.onCopy&&(u.preventDefault(),t.onCopy(u.clipboardData))}),document.body.appendChild(l),a.selectNodeContents(l),i.addRange(a);var s=document.execCommand("copy");if(!s)throw new Error("copy command was unsuccessful");c=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=Bo("message"in t?t.message:So),window.prompt(r,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(a):i.removeAllRanges()),l&&document.body.removeChild(l),o()}return c}var Po=Ro,C,ne,Je,Zt,_t,Ge,Xt,O={},Ee=[],Lo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function U(e,t){for(var n in t)e[n]=t[n];return e}function en(e){var t=e.parentNode;t&&t.removeChild(e)}function F(e,t,n){var r,o=arguments,a={};for(r in t)r!=="key"&&r!=="ref"&&(a[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(n!=null&&(a.children=n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return pe(e,a,t&&t.key,t&&t.ref,null)}function pe(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return o==null&&(a.__v=a),C.vnode&&C.vnode(a),a}function tn(){return{}}function ue(e){return e.children}function M(e,t){this.props=e,this.context=t}function ae(e,t){if(t==null)return e.__?ae(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ae(e):null}function nn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return nn(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&ne.push(e)&&!Je++||_t!==C.debounceRendering)&&((_t=C.debounceRendering)||Zt)(Mo)}function Mo(){for(var e;Je=ne.length;)e=ne.sort(function(t,n){return t.__v.__b-n.__v.__b}),ne=[],e.some(function(t){var n,r,o,a,i,l,c;t.__d&&(l=(i=(n=t).__v).__e,(c=n.__P)&&(r=[],(o=U({},i)).__v=o,a=je(c,i,o,n.__n,c.ownerSVGElement!==void 0,null,r,l??ae(i)),on(r,i),a!=l&&nn(i)))})}function rn(e,t,n,r,o,a,i,l,c){var s,u,f,v,b,p,y,w=n&&n.__k||Ee,m=w.length;if(l==O&&(l=a!=null?a[0]:m?ae(n,0):null),s=0,t.__k=z(t.__k,function(h){if(h!=null){if(h.__=t,h.__b=t.__b+1,(f=w[s])===null||f&&h.key==f.key&&h.type===f.type)w[s]=void 0;else for(u=0;u<m;u++){if((f=w[u])&&h.key==f.key&&h.type===f.type){w[u]=void 0;break}f=null}if(v=je(e,h,f=f||O,r,o,a,i,l,c),(u=h.ref)&&f.ref!=u&&(y||(y=[]),f.ref&&y.push(f.ref,null,h),y.push(u,h.__c||v,h)),v!=null){var g;if(p==null&&(p=v),h.__d!==void 0)g=h.__d,h.__d=void 0;else if(a==f||v!=l||v.parentNode==null){e:if(l==null||l.parentNode!==e)e.appendChild(v),g=null;else{for(b=l,u=0;(b=b.nextSibling)&&u<m;u+=2)if(b==v)break e;e.insertBefore(v,l),g=l}t.type=="option"&&(e.value="")}l=g!==void 0?g:v.nextSibling,typeof t.type=="function"&&(t.__d=l)}else l&&f.__e==l&&l.parentNode!=e&&(l=ae(f))}return s++,h}),t.__e=p,a!=null&&typeof t.type!="function")for(s=a.length;s--;)a[s]!=null&&en(a[s]);for(s=m;s--;)w[s]!=null&&re(w[s],w[s]);if(y)for(s=0;s<y.length;s++)an(y[s],y[++s],y[++s])}function z(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)z(e[r],t,n);else n.push(t?t(typeof e=="string"||typeof e=="number"?pe(null,e,null,null,e):e.__e!=null||e.__c!=null?pe(e.type,e.props,e.key,null,e.__v):e):e);return n}function Io(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||me(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||me(e,a,t[a],n[a],r)}function ht(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&Lo.test(t)===!1?n+"px":n??""}function me(e,t,n,r,o){var a,i,l,c,s;if(o?t==="className"&&(t="class"):t==="class"&&(t="className"),t==="style")if(a=e.style,typeof n=="string")a.cssText=n;else{if(typeof r=="string"&&(a.cssText="",r=null),r)for(c in r)n&&c in n||ht(a,c,"");if(n)for(s in n)r&&n[s]===r[s]||ht(a,s,n[s])}else t[0]==="o"&&t[1]==="n"?(i=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,gt,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,gt,i)):t!=="list"&&t!=="tagName"&&t!=="form"&&t!=="type"&&t!=="size"&&!o&&t in e?e[t]=n??"":typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function gt(e){this.l[e.type](C.event?C.event(e):e)}function je(e,t,n,r,o,a,i,l,c){var s,u,f,v,b,p,y,w,m,h,g=t.type;if(t.constructor!==void 0)return null;(s=C.__b)&&s(t);try{e:if(typeof g=="function"){if(w=t.props,m=(s=g.contextType)&&r[s.__c],h=s?m?m.props.value:s.__:r,n.__c?y=(u=t.__c=n.__c).__=u.__E:("prototype"in g&&g.prototype.render?t.__c=u=new g(w,h):(t.__c=u=new M(w,h),u.constructor=g,u.render=Uo),m&&m.sub(u),u.props=w,u.state||(u.state={}),u.context=h,u.__n=r,f=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),g.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=U({},u.__s)),U(u.__s,g.getDerivedStateFromProps(w,u.__s))),v=u.props,b=u.state,f)g.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(g.getDerivedStateFromProps==null&&w!==v&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(w,h),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(w,u.__s,h)===!1||t.__v===n.__v&&!u.__){for(u.props=w,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,u.__h.length&&i.push(u),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(w,u.__s,h),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(v,b,p)})}u.context=h,u.props=w,u.state=u.__s,(s=C.__r)&&s(t),u.__d=!1,u.__v=t,u.__P=e,s=u.render(u.props,u.state,u.context),t.__k=s!=null&&s.type==ue&&s.key==null?s.props.children:Array.isArray(s)?s:[s],u.getChildContext!=null&&(r=U(U({},r),u.getChildContext())),f||u.getSnapshotBeforeUpdate==null||(p=u.getSnapshotBeforeUpdate(v,b)),rn(e,t,n,r,o,a,i,l,c),u.base=t.__e,u.__h.length&&i.push(u),y&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Do(n.__e,t,n,r,o,a,i,c);(s=C.diffed)&&s(t)}catch(_){t.__v=null,C.__e(_,t,n)}return t.__e}function on(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){C.__e(r,n.__v)}})}function Do(e,t,n,r,o,a,i,l){var c,s,u,f,v,b=n.props,p=t.props;if(o=t.type==="svg"||o,a!=null){for(c=0;c<a.length;c++)if((s=a[c])!=null&&((t.type===null?s.nodeType===3:s.localName===t.type)||e==s)){e=s,a[c]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,p.is&&{is:p.is}),a=null,l=!1}if(t.type===null)b!==p&&e.data!=p&&(e.data=p);else{if(a!=null&&(a=Ee.slice.call(e.childNodes)),u=(b=n.props||O).dangerouslySetInnerHTML,f=p.dangerouslySetInnerHTML,!l){if(b===O)for(b={},v=0;v<e.attributes.length;v++)b[e.attributes[v].name]=e.attributes[v].value;(f||u)&&(f&&u&&f.__html==u.__html||(e.innerHTML=f&&f.__html||""))}Io(e,p,b,o,l),f?t.__k=[]:(t.__k=t.props.children,rn(e,t,n,r,t.type!=="foreignObject"&&o,a,i,O,l)),l||("value"in p&&(c=p.value)!==void 0&&c!==e.value&&me(e,"value",c,b.value,!1),"checked"in p&&(c=p.checked)!==void 0&&c!==e.checked&&me(e,"checked",c,b.checked,!1))}return e}function an(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){C.__e(r,n)}}function re(e,t,n){var r,o,a;if(C.unmount&&C.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||an(r,null,t)),n||typeof e.type=="function"||(n=(o=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){C.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&re(r[a],t,n);o!=null&&en(o)}function Uo(e,t,n){return this.constructor(e,n)}function ie(e,t,n){var r,o,a;C.__&&C.__(e,t),o=(r=n===Ge)?null:n&&n.__k||t.__k,e=F(ue,null,[e]),a=[],je(t,(r?t:n||t).__k=e,o||O,O,t.ownerSVGElement!==void 0,n&&!r?[n]:o?null:Ee.slice.call(t.childNodes),a,n||O,r),on(a,e)}function ln(e,t){ie(e,t,Ge)}function Oo(e,t){var n,r;for(r in t=U(U({},e.props),t),arguments.length>2&&(t.children=Ee.slice.call(arguments,2)),n={},t)r!=="key"&&r!=="ref"&&(n[r]=t[r]);return pe(e.type,n,t.key||e.key,t.ref||e.ref,null)}function cn(e){var t={},n={__c:"__cC"+Xt++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=a,t},this.shouldComponentUpdate=function(i){a.props.value!==i.value&&o.some(function(l){l.context=i.value,_e(l)})},this.sub=function(i){o.push(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),l&&l.call(i)}}),r.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}C={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&n.constructor.getDerivedStateFromError!=null&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),n.componentDidCatch!=null&&(r=!0,n.componentDidCatch(e)),r)return _e(n.__E=n)}catch(o){e=o}throw e}},M.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(n,this.props)),e&&U(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),_e(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},M.prototype.render=ue,ne=[],Je=0,Zt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ge=O,Xt=0;var Y,R,pt,Z=0,Ue=[],mt=C.__r,vt=C.diffed,wt=C.__c,yt=C.unmount;function X(e,t){C.__h&&C.__h(R,e,Z||t),Z=0;var n=R.__H||(R.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ze(e){return Z=1,Xe(gn,e)}function Xe(e,t,n){var r=X(Y++,2);return r.__c||(r.__c=R,r.__=[n?n(t):gn(void 0,t),function(o){var a=e(r.__[0],o);r.__[0]!==a&&(r.__[0]=a,r.__c.setState({}))}]),r.__}function un(e,t){var n=X(Y++,3);!C.__s&&tt(n.__H,t)&&(n.__=e,n.__H=t,R.__H.__h.push(n))}function et(e,t){var n=X(Y++,4);!C.__s&&tt(n.__H,t)&&(n.__=e,n.__H=t,R.__h.push(n))}function sn(e){return Z=5,xe(function(){return{current:e}},[])}function fn(e,t,n){Z=6,et(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function xe(e,t){var n=X(Y++,7);return tt(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function dn(e,t){return Z=8,xe(function(){return e},t)}function _n(e){var t=R.context[e.__c],n=X(Y++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(R)),t.props.value):e.__}function hn(e,t){C.useDebugValue&&C.useDebugValue(t?t(e):e)}function Fo(e){var t=X(Y++,10),n=Ze();return t.__=e,R.componentDidCatch||(R.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function $o(){Ue.some(function(e){if(e.__P)try{e.__H.__h.forEach(Oe),e.__H.__h.forEach(Fe),e.__H.__h=[]}catch(t){return e.__H.__h=[],C.__e(t,e.__v),!0}}),Ue=[]}function Oe(e){e.t&&e.t()}function Fe(e){var t=e.__();typeof t=="function"&&(e.t=t)}function tt(e,t){return!e||t.some(function(n,r){return n!==e[r]})}function gn(e,t){return typeof t=="function"?t(e):t}C.__r=function(e){mt&&mt(e),Y=0,(R=e.__c).__H&&(R.__H.__h.forEach(Oe),R.__H.__h.forEach(Fe),R.__H.__h=[])},C.diffed=function(e){vt&&vt(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(Ue.push(t)!==1&&pt===C.requestAnimationFrame||((pt=C.requestAnimationFrame)||function(r){var o,a=function(){clearTimeout(i),cancelAnimationFrame(o),setTimeout(r)},i=setTimeout(a,100);typeof window<"u"&&(o=requestAnimationFrame(a))})($o))}},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Oe),n.__h=n.__h.filter(function(r){return!r.__||Fe(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],C.__e(r,n.__v)}}),wt&&wt(e,t)},C.unmount=function(e){yt&&yt(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach(function(r){return r.t&&r.t()})}catch(r){C.__e(r,t.__v)}}};function nt(e,t){for(var n in t)e[n]=t[n];return e}function $e(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}var pn=function(e){var t,n;function r(o){var a;return(a=e.call(this,o)||this).isPureReactComponent=!0,a}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(o,a){return $e(this.props,o)||$e(this.state,a)},r}(M);function mn(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:$e(this.props,o)}function r(o){return this.shouldComponentUpdate=n,F(e,nt({},o))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var bt=C.__b;function vn(e){function t(n){var r=nt({},n);return delete r.ref,e(r,n.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}C.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),bt&&bt(e)};var Ct=function(e,t){return e?z(e).reduce(function(n,r,o){return n.concat(t(r,o))},[]):null},wn={map:Ct,forEach:Ct,count:function(e){return e?z(e).length:0},only:function(e){if((e=z(e)).length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:z},zo=C.__e;function yn(e){return e&&((e=nt({},e)).__c=null,e.__k=e.__k&&e.__k.map(yn)),e}function ve(){this.__u=0,this.o=null,this.__b=null}function bn(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Cn(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return F(n,a)}return o.displayName="Lazy",o.t=!0,o}function V(){this.i=null,this.l=null}C.__e=function(e,t,n){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(e,t.__c)}zo(e,t,n)},(ve.prototype=new M).__c=function(e,t){var n=this;n.o==null&&(n.o=[]),n.o.push(t);var r=bn(n.__v),o=!1,a=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var i=function(){var l;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});l=n.o.pop();)l.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(a,a)},ve.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=yn(this.__b),this.__b=null),[F(M,null,t.u?null:e.children),t.u&&e.fallback]};var Et=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(V.prototype=new M).u=function(e){var t=this,n=bn(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),Et(t,e,r)):o()};n?n(a):a()}},V.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;e.l.forEach(function(t,n){Et(e,n,t)})};var Ho=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},e}();function qo(e){var t=this,n=e.container,r=F(Ho,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),re(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,ie(r,n),t.__k=n.__k):(t.v=document.createTextNode(""),ln("",n),n.appendChild(t.v),t.p=!0,t.s=n,ie(r,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),re(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),re(t.h)},null}function En(e,t){return F(qo,{vnode:e,container:t})}var xt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;M.prototype.isReactComponent={};var xn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function ze(e,t,n){if(t.__k==null)for(;t.firstChild;)t.removeChild(t.firstChild);return ie(e,t),typeof n=="function"&&n(),e?e.__c:null}function Wo(e,t,n){return ln(e,t),typeof n=="function"&&n(),e?e.__c:null}var kt=C.event;function Be(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}C.event=function(e){kt&&(e=kt(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var o=e.preventDefault;return e.preventDefault=function(){o.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var At={configurable:!0,get:function(){return this.class}},Tt=C.vnode;C.vnode=function(e){e.$$typeof=xn;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(At.enumerable="className"in n,n.className!=null&&(n.class=n.className),Object.defineProperty(n,"className",At)),typeof t!="function"){var r,o,a;for(a in n.defaultValue&&n.value!==void 0&&(n.value||n.value===0||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&t==="select"&&(z(n.children).forEach(function(i){n.value.indexOf(i.props.value)!=-1&&(i.props.selected=!0)}),delete n.value),n)if(r=xt.test(a))break;if(r)for(a in o=e.props={},n)o[xt.test(a)?a.replace(/[A-Z0-9]/,"-$&").toLowerCase():a]=n[a]}(function(i){var l=e.type,c=e.props;if(c&&typeof l=="string"){var s={};for(var u in c)/^on(Ani|Tra|Tou)/.test(u)&&(c[u.toLowerCase()]=c[u],delete c[u]),s[u.toLowerCase()]=u;if(s.ondoubleclick&&(c.ondblclick=c[s.ondoubleclick],delete c[s.ondoubleclick]),s.onbeforeinput&&(c.onbeforeinput=c[s.onbeforeinput],delete c[s.onbeforeinput]),s.onchange&&(l==="textarea"||l.toLowerCase()==="input"&&!/^fil|che|ra/i.test(c.type))){var f=s.oninput||"oninput";c[f]||(c[f]=c[s.onchange],delete c[s.onchange])}}})(),typeof t=="function"&&!t.m&&t.prototype&&(Be(t.prototype,"componentWillMount"),Be(t.prototype,"componentWillReceiveProps"),Be(t.prototype,"componentWillUpdate"),t.m=!0)}Tt&&Tt(e)};var Yo="16.8.0";function kn(e){return F.bind(null,e)}function rt(e){return!!e&&e.$$typeof===xn}function An(e){return rt(e)?Oo.apply(null,arguments):e}function Tn(e){return!!e.__k&&(ie(null,e),!0)}function Nn(e){return e&&(e.base||e.nodeType===1&&e)||null}var Sn=function(e,t){return e(t)};const Vo={useState:Ze,useReducer:Xe,useEffect:un,useLayoutEffect:et,useRef:sn,useImperativeHandle:fn,useMemo:xe,useCallback:dn,useContext:_n,useDebugValue:hn,version:"16.8.0",Children:wn,render:ze,hydrate:ze,unmountComponentAtNode:Tn,createPortal:En,createElement:F,createContext:cn,createFactory:kn,cloneElement:An,createRef:tn,Fragment:ue,isValidElement:rt,findDOMNode:Nn,Component:M,PureComponent:pn,memo:mn,forwardRef:vn,unstable_batchedUpdates:Sn,Suspense:ve,SuspenseList:V,lazy:Cn},Ko=Object.freeze(Object.defineProperty({__proto__:null,Children:wn,Component:M,Fragment:ue,PureComponent:pn,Suspense:ve,SuspenseList:V,cloneElement:An,createContext:cn,createElement:F,createFactory:kn,createPortal:En,createRef:tn,default:Vo,findDOMNode:Nn,forwardRef:vn,hydrate:Wo,isValidElement:rt,lazy:Cn,memo:mn,render:ze,unmountComponentAtNode:Tn,unstable_batchedUpdates:Sn,useCallback:dn,useContext:_n,useDebugValue:hn,useEffect:un,useErrorBoundary:Fo,useImperativeHandle:fn,useLayoutEffect:et,useMemo:xe,useReducer:Xe,useRef:sn,useState:Ze,version:Yo},Symbol.toStringTag,{value:"Module"})),Qo=Bt(Ko);function Bn(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var B=Ar,Rn=Bn(le),Jo=Bn(Po),d=Qo;function Go(e){Rn.toString(e,{type:"terminal"}).then(console.log)}var jo=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Zo(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}var Xo="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",ea="WalletConnect",ta=300,na="rgb(64, 153, 255)",Pn="walletconnect-wrapper",Nt="walletconnect-style-sheet",Ln="walletconnect-qrcode-modal",ra="walletconnect-qrcode-close",Mn="walletconnect-qrcode-text",oa="walletconnect-connect-button";function aa(e){return d.createElement("div",{className:"walletconnect-modal__header"},d.createElement("img",{src:Xo,className:"walletconnect-modal__headerLogo"}),d.createElement("p",null,ea),d.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:e.onClose},d.createElement("div",{id:ra,className:"walletconnect-modal__close__icon"},d.createElement("div",{className:"walletconnect-modal__close__line1"}),d.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ia(e){return d.createElement("a",{className:"walletconnect-connect__button",href:e.href,id:oa+"-"+e.name,onClick:e.onClick,rel:"noopener noreferrer",style:{backgroundColor:e.color},target:"_blank"},e.name)}var la="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function ca(e){var t=e.color,n=e.href,r=e.name,o=e.logo,a=e.onClick;return d.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:a,rel:"noopener noreferrer",target:"_blank"},d.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),d.createElement("div",{className:"walletconnect-modal__base__row__right"},d.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+t,backgroundSize:"100%"}}),d.createElement("img",{src:la,className:"walletconnect-modal__base__row__right__caret"})))}function ua(e){var t=e.color,n=e.href,r=e.name,o=e.logo,a=e.onClick,i=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return d.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:a,rel:"noopener noreferrer",target:"_blank"},d.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+t,backgroundSize:"100%"}}),d.createElement("div",{style:{fontSize:i},className:"walletconnect-connect__button__text"},r))}var sa=5,Re=12;function fa(e){var t=B.isAndroid(),n=d.useState(""),r=n[0],o=n[1],a=d.useState(""),i=a[0],l=a[1],c=d.useState(1),s=c[0],u=c[1],f=i?e.links.filter(function(_){return _.name.toLowerCase().includes(i.toLowerCase())}):e.links,v=e.errorMessage,b=i||f.length>sa,p=Math.ceil(f.length/Re),y=[(s-1)*Re+1,s*Re],w=f.length?f.filter(function(_,x){return x+1>=y[0]&&x+1<=y[1]}):[],m=!t&&p>1,h=void 0;function g(_){o(_.target.value),clearTimeout(h),_.target.value?h=setTimeout(function(){l(_.target.value),u(1)},1e3):(o(""),l(""),u(1))}return d.createElement("div",null,d.createElement("p",{id:Mn,className:"walletconnect-qrcode__text"},t?e.text.connect_mobile_wallet:e.text.choose_preferred_wallet),!t&&d.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:g}),d.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(t?"__android":b&&f.length?"__wrap":"")},t?d.createElement(ia,{name:e.text.connect,color:na,href:e.uri,onClick:d.useCallback(function(){B.saveMobileLinkInfo({name:"Unknown",href:e.uri})},[])}):w.length?w.map(function(_){var x=_.color,A=_.name,k=_.shortName,T=_.logo,S=B.formatIOSMobile(e.uri,_),N=d.useCallback(function(){B.saveMobileLinkInfo({name:A,href:S})},[w]);return b?d.createElement(ua,{color:x,href:S,name:k||A,logo:T,onClick:N}):d.createElement(ca,{color:x,href:S,name:A,logo:T,onClick:N})}):d.createElement(d.Fragment,null,d.createElement("p",null,v.length?e.errorMessage:e.links.length&&!f.length?e.text.no_wallets_found:e.text.loading))),m&&d.createElement("div",{className:"walletconnect-modal__footer"},Array(p).fill(0).map(function(_,x){var A=x+1,k=s===A;return d.createElement("a",{style:{margin:"auto 10px",fontWeight:k?"bold":"normal"},onClick:function(){return u(A)}},A)})))}function da(e){var t=!!e.message.trim();return d.createElement("div",{className:"walletconnect-qrcode__notification"+(t?" notification__show":"")},e.message)}var _a=function(e){try{var t="";return Promise.resolve(Rn.toString(e,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(t=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),t})}catch(n){return Promise.reject(n)}};function ha(e){var t=d.useState(""),n=t[0],r=t[1],o=d.useState(""),a=o[0],i=o[1];d.useEffect(function(){try{return Promise.resolve(_a(e.uri)).then(function(c){i(c)})}catch(c){Promise.reject(c)}},[]);var l=function(){var c=Jo(e.uri);c?(r(e.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return d.createElement("div",null,d.createElement("p",{id:Mn,className:"walletconnect-qrcode__text"},e.text.scan_qrcode_with_wallet),d.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),d.createElement("div",{className:"walletconnect-modal__footer"},d.createElement("a",{onClick:l},e.text.copy_to_clipboard)),d.createElement(da,{message:n}))}function ga(e){var t=B.isAndroid(),n=B.isMobile(),r=n?e.qrcodeModalOptions&&e.qrcodeModalOptions.mobileLinks?e.qrcodeModalOptions.mobileLinks:void 0:e.qrcodeModalOptions&&e.qrcodeModalOptions.desktopLinks?e.qrcodeModalOptions.desktopLinks:void 0,o=d.useState(!1),a=o[0],i=o[1],l=d.useState(!1),c=l[0],s=l[1],u=d.useState(!n),f=u[0],v=u[1],b={mobile:n,text:e.text,uri:e.uri,qrcodeModalOptions:e.qrcodeModalOptions},p=d.useState(""),y=p[0],w=p[1],m=d.useState(!1),h=m[0],g=m[1],_=d.useState([]),x=_[0],A=_[1],k=d.useState(""),T=k[0],S=k[1],N=function(){c||a||r&&!r.length||x.length>0||d.useEffect(function(){var D=function(){try{if(t)return Promise.resolve();i(!0);var P=Zo(function(){var ee=e.qrcodeModalOptions&&e.qrcodeModalOptions.registryUrl?e.qrcodeModalOptions.registryUrl:B.getWalletRegistryUrl();return Promise.resolve(fetch(ee)).then(function(On){return Promise.resolve(On.json()).then(function(Fn){var $n=Fn.listings,zn=n?"mobile":"desktop",se=B.getMobileLinkRegistry(B.formatMobileRegistry($n,zn),r);i(!1),s(!0),S(se.length?"":e.text.no_supported_wallets),A(se);var ot=se.length===1;ot&&(w(B.formatIOSMobile(e.uri,se[0])),v(!0)),g(ot)})})},function(ee){i(!1),s(!0),S(e.text.something_went_wrong),console.error(ee)});return Promise.resolve(P&&P.then?P.then(function(){}):void 0)}catch(ee){return Promise.reject(ee)}};D()})};N();var W=n?f:!f;return d.createElement("div",{id:Ln,className:"walletconnect-qrcode__base animated fadeIn"},d.createElement("div",{className:"walletconnect-modal__base"},d.createElement(aa,{onClose:e.onClose}),h&&f?d.createElement("div",{className:"walletconnect-modal__single_wallet"},d.createElement("a",{onClick:function(){return B.saveMobileLinkInfo({name:x[0].name,href:y})},href:y,rel:"noopener noreferrer",target:"_blank"},e.text.connect_with+" "+(h?x[0].name:"")+" ›")):t||a||!a&&x.length?d.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(W?" right__selected":"")},d.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?d.createElement(d.Fragment,null,d.createElement("a",{onClick:function(){return v(!1),N()}},e.text.mobile),d.createElement("a",{onClick:function(){return v(!0)}},e.text.qrcode)):d.createElement(d.Fragment,null,d.createElement("a",{onClick:function(){return v(!0)}},e.text.qrcode),d.createElement("a",{onClick:function(){return v(!1),N()}},e.text.desktop))):null,d.createElement("div",null,f||!t&&!a&&!x.length?d.createElement(ha,Object.assign({},b)):d.createElement(fa,Object.assign({},b,{links:x,errorMessage:T})))))}var pa={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},ma={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},va={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},wa={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},ya={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ba={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Ca={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Ea={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},St={de:pa,en:ma,es:va,fr:wa,ko:ya,pt:ba,zh:Ca,fa:Ea};function xa(){var e=B.getDocumentOrThrow(),t=e.getElementById(Nt);t&&e.head.removeChild(t);var n=e.createElement("style");n.setAttribute("id",Nt),n.innerText=jo,e.head.appendChild(n)}function ka(){var e=B.getDocumentOrThrow(),t=e.createElement("div");return t.setAttribute("id",Pn),e.body.appendChild(t),t}function In(){var e=B.getDocumentOrThrow(),t=e.getElementById(Ln);t&&(t.className=t.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=e.getElementById(Pn);n&&e.body.removeChild(n)},ta))}function Aa(e){return function(){In(),e&&e()}}function Ta(){var e=B.getNavigatorOrThrow().language.split("-")[0]||"en";return St[e]||St.en}function Na(e,t,n){xa();var r=ka();d.render(d.createElement(ga,{text:Ta(),uri:e,onClose:Aa(t),qrcodeModalOptions:n}),r)}function Sa(){In()}var Dn=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Ba(e,t,n){console.log(e),Dn()?Go(e):Na(e,t,n)}function Ra(){Dn()||Sa()}var Pa={open:Ba,close:Ra},Un=Pa;const La=Hn(Un),Oa=br({__proto__:null,default:La},[Un]);export{Oa as i};
