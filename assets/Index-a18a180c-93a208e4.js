import{S as R,i as I,s as M,a as O,y as me,d as _,t as w,g as A,h as x,j as G,k as C,m as Y,n as _e,o as we,p as D,e as h,c as m,J as Ce,r as F,b as j,ah as B,u as H,f as g,l as S,H as ye,aq as ze,ar as xe,as as Te,M as Le,a2 as je,P as Pe,a4 as Se,v as $,_ as Z,$ as Ee,at as Ne,au as be,a3 as Re,I as Ie,av as J,aw as q,F as V,Q as he,z as Me,X as ge,ax as Oe,q as ke,ay as Q,az as U,x as N,aA as X,D as E,L as K,aB as ee,aC as De,aD as te,aE as P,C as Fe,a5 as W,aF as He}from"./index-159a138c.js";function $e(i,{from:e,to:t},n={}){const o=getComputedStyle(i),a=o.transform==="none"?"":o.transform,[f,s]=o.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*f/t.width-(t.left+f),r=e.top+e.height*s/t.height-(t.top+s),{delay:c=0,duration:d=u=>Math.sqrt(u)*120,easing:v=be}=n;return{delay:c,duration:Ie(d)?d(Math.sqrt(l*l+r*r)):d,easing:v,css:(u,b)=>{const p=b*l,y=b*r,z=u+b*e.width/t.width,T=u+b*e.height/t.height;return`transform: ${a} translate(${p}px, ${y}px) scale(${z}, ${T});`}}}function Ae(i){O(i,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function Ge(i){let e,t;return{c(){e=h("div"),m(e,"class","border svelte-13cuwwo"),m(e,"style",t=`
    width: ${i[2]-i[3]*2}px; 
    height: ${i[2]-i[3]*2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,o){_(n,e,o),e.innerHTML=i[0]},p(n,[o]){o&1&&(e.innerHTML=n[0]),o&30&&t!==(t=`
    width: ${n[2]-n[3]*2}px; 
    height: ${n[2]-n[3]*2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&m(e,"style",t)},i:N,o:N,d(n){n&&C(e)}}}function Ve(i,e,t){let{icon:n}=e,{borderColorVar:o}=e,{size:a}=e,{padding:f=0}=e,{background:s="transparent"}=e;return i.$$set=l=>{"icon"in l&&t(0,n=l.icon),"borderColorVar"in l&&t(1,o=l.borderColorVar),"size"in l&&t(2,a=l.size),"padding"in l&&t(3,f=l.padding),"background"in l&&t(4,s=l.background)},[n,o,a,f,s]}class Be extends R{constructor(e){super(),I(this,e,Ve,Ge,M,{icon:0,borderColorVar:1,size:2,padding:3,background:4},Ae)}}function qe(i){O(i,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function ne(i){let e,t,n,o,a=P[i[1].type].eventIcon+"",f,s,l,r=!i[1].id.includes("customNotification")&&!i[1].id.includes("preflight"),c,d=i[1].type==="pending"&&ie(),v=r&&oe(i);return{c(){e=h("div"),d&&d.c(),t=j(),n=h("div"),o=h("div"),l=j(),v&&v.c(),m(o,"class",f=B(`notification-icon flex items-center justify-center ${i[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"),m(n,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),m(n,"style",s=`background:${P[i[1].type].backgroundColor}; color: ${P[i[1].type].iconColor||""}; ${i[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[i[1].type].borderColor}`}; `),m(e,"class","relative")},m(u,b){_(u,e,b),d&&d.m(e,null),g(e,t),g(e,n),g(n,o),o.innerHTML=a,g(e,l),v&&v.m(e,null),c=!0},p(u,b){u[1].type==="pending"?d||(d=ie(),d.c(),d.m(e,t)):d&&(d.d(1),d=null),(!c||b&2)&&a!==(a=P[u[1].type].eventIcon+"")&&(o.innerHTML=a),(!c||b&2&&f!==(f=B(`notification-icon flex items-center justify-center ${u[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"))&&m(o,"class",f),(!c||b&2&&s!==(s=`background:${P[u[1].type].backgroundColor}; color: ${P[u[1].type].iconColor||""}; ${u[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[u[1].type].borderColor}`}; `))&&m(n,"style",s),b&2&&(r=!u[1].id.includes("customNotification")&&!u[1].id.includes("preflight")),r?v?(v.p(u,b),b&2&&w(v,1)):(v=oe(u),v.c(),w(v,1),v.m(e,null)):v&&(A(),x(v,1,1,()=>{v=null}),G())},i(u){c||(w(v),c=!0)},o(u){x(v),c=!1},d(u){u&&C(e),d&&d.d(),v&&v.d()}}}function ie(i){let e;return{c(){e=h("div"),m(e,"class","border-action absolute svelte-jvic9v")},m(t,n){_(t,e,n)},d(t){t&&C(e)}}}function oe(i){let e,t,n;return t=new Be({props:{icon:i[0].icon,size:16,background:i[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){e=h("div"),F(t.$$.fragment),m(e,"class","absolute chain-icon-container svelte-jvic9v")},m(o,a){_(o,e,a),H(t,e,null),n=!0},p(o,a){const f={};a&1&&(f.icon=o[0].icon),a&1&&(f.background=o[0].color),t.$set(f)},i(o){n||(w(t.$$.fragment,o),n=!0)},o(o){x(t.$$.fragment,o),n=!1},d(o){o&&C(e),$(t)}}}function We(i){let e,t,n=i[1].type&&ne(i);return{c(){n&&n.c(),e=me()},m(o,a){n&&n.m(o,a),_(o,e,a),t=!0},p(o,[a]){o[1].type?n?(n.p(o,a),a&2&&w(n,1)):(n=ne(o),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(A(),x(n,1,1,()=>{n=null}),G())},i(o){t||(w(n),t=!0)},o(o){x(n),t=!1},d(o){n&&n.d(o),o&&C(e)}}}function Ke(i,e,t){let{chainStyles:n=Fe}=e,{notification:o}=e;return i.$$set=a=>{"chainStyles"in a&&t(0,n=a.chainStyles),"notification"in a&&t(1,o=a.notification)},[n,o]}class Ye extends R{constructor(e){super(),I(this,e,Ke,We,M,{chainStyles:0,notification:1},qe)}}function Ze(i){O(i,"svelte-pm7idu",`div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`)}function ae(i){let e,t,n=i[2](i[1]-i[0])+"",o,a;return{c(){e=E(`-
    `),t=h("span"),o=E(n),a=E(`
    ago`),m(t,"class","svelte-pm7idu")},m(f,s){_(f,e,s),_(f,t,s),g(t,o),_(f,a,s)},p(f,s){s&3&&n!==(n=f[2](f[1]-f[0])+"")&&K(o,n)},d(f){f&&C(e),f&&C(t),f&&C(a)}}}function Je(i){let e,t=i[0]&&ae(i);return{c(){e=h("div"),t&&t.c(),m(e,"class","time svelte-pm7idu")},m(n,o){_(n,e,o),t&&t.m(e,null)},p(n,[o]){n[0]?t?t.p(n,o):(t=ae(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:N,o:N,d(n){n&&C(e),t&&t.d()}}}function Qe(i,e,t){let n,o;D(i,ge,r=>t(3,n=r)),D(i,He,r=>t(4,o=r));let{startTime:a}=e;function f(r){const c=Math.floor(r/1e3),d=c<0?0:c;return d>=60?`${Math.floor(d/60).toLocaleString(o)} ${n("notify.time.minutes")}`:`${d.toLocaleString(o)} ${n("notify.time.seconds")}`}let s=Date.now();const l=setInterval(()=>{t(1,s=Date.now())},1e3);return ke(()=>{clearInterval(l)}),i.$$set=r=>{"startTime"in r&&t(0,a=r.startTime)},[a,s,f]}class Ue extends R{constructor(e){super(),I(this,e,Qe,Je,M,{startTime:0},Ze)}}function Xe(i){O(i,"svelte-1otz6tt",`div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`)}function re(i){let e,t,n,o;function a(l,r){return l[0].link?tt:et}let f=a(i),s=f(i);return n=new Ue({props:{startTime:i[0].startTime}}),{c(){e=h("span"),s.c(),t=j(),F(n.$$.fragment),m(e,"class","hash-time svelte-1otz6tt")},m(l,r){_(l,e,r),s.m(e,null),g(e,t),H(n,e,null),o=!0},p(l,r){f===(f=a(l))&&s?s.p(l,r):(s.d(1),s=f(l),s&&(s.c(),s.m(e,t)));const c={};r&1&&(c.startTime=l[0].startTime),n.$set(c)},i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){x(n.$$.fragment,l),o=!1},d(l){l&&C(e),s.d(),$(n)}}}function et(i){let e,t=W(i[0].id)+"",n;return{c(){e=h("div"),n=E(t),m(e,"class","address-hash svelte-1otz6tt")},m(o,a){_(o,e,a),g(e,n)},p(o,a){a&1&&t!==(t=W(o[0].id)+"")&&K(n,t)},d(o){o&&C(e)}}}function tt(i){let e,t=W(i[0].id)+"",n,o;return{c(){e=h("a"),n=E(t),m(e,"class","address-hash svelte-1otz6tt"),m(e,"href",o=i[0].link),m(e,"target","_blank"),m(e,"rel","noreferrer noopener")},m(a,f){_(a,e,f),g(e,n)},p(a,f){f&1&&t!==(t=W(a[0].id)+"")&&K(n,t),f&1&&o!==(o=a[0].link)&&m(e,"href",o)},d(a){a&&C(e)}}}function nt(i){let e,t,n=i[0].message+"",o,a,f=i[0].id&&!i[0].id.includes("customNotification")&&!i[0].id.includes("preflight"),s,l=f&&re(i);return{c(){e=h("div"),t=h("span"),o=E(n),a=j(),l&&l.c(),m(t,"class","transaction-status svelte-1otz6tt"),m(e,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(r,c){_(r,e,c),g(e,t),g(t,o),g(e,a),l&&l.m(e,null),s=!0},p(r,[c]){(!s||c&1)&&n!==(n=r[0].message+"")&&K(o,n),c&1&&(f=r[0].id&&!r[0].id.includes("customNotification")&&!r[0].id.includes("preflight")),f?l?(l.p(r,c),c&1&&w(l,1)):(l=re(r),l.c(),w(l,1),l.m(e,null)):l&&(A(),x(l,1,1,()=>{l=null}),G())},i(r){s||(w(l),s=!0)},o(r){x(l),s=!1},d(r){r&&C(e),l&&l.d()}}}function it(i,e,t){let{notification:n}=e;return i.$$set=o=>{"notification"in o&&t(0,n=o.notification)},[n]}class ot extends R{constructor(e){super(),I(this,e,it,nt,M,{notification:0},Xe)}}var at=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;const rt=["txPool"],lt=["main","matic-main"],st=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],le=i=>rt.includes(i),se=i=>lt.includes(i),ce=i=>i&&st.includes(i.label);async function fe({type:i,wallet:e,transaction:t}){const{from:n,input:o,value:a,to:f,nonce:s,gas:l,network:r}=t,c=q[r],{gasPriceProbability:d}=Y.get().notify.replacement,{gas:v,apiKey:u}=Z,[b]=await v.get({chains:[q[r]],endpoint:"blockPrices",apiKey:u}),{maxFeePerGas:p,maxPriorityFeePerGas:y}=b.blockPrices[0].estimatedPrices.find(({confidence:L})=>L===(i==="speedup"?d.speedup:d.cancel)),z=ee(p),T=ee(y),k=o==="0x"?{}:{data:o};return e.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:n,to:i==="cancel"?n:f,chainId:parseInt(c),value:`${De.from(a).toHexString()}`,nonce:te(s),gasLimit:te(l),maxFeePerGas:z,maxPriorityFeePerGas:T,...k}]})}function ct(i){O(i,"svelte-ftkynd",`.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`)}function de(i){let e,t,n,o,a,f;return{c(){e=h("div"),t=h("button"),t.textContent="Cancel",n=j(),o=h("button"),o.textContent="Speed-up",m(t,"class","dropdown-button svelte-ftkynd"),m(o,"class","dropdown-button svelte-ftkynd"),m(e,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(s,l){_(s,e,l),g(e,t),g(e,n),g(e,o),a||(f=[S(t,"click",i[9]),S(o,"click",i[10])],a=!0)},p:N,d(s){s&&C(e),a=!1,he(f)}}}function ft(i){let e,t,n,o,a,f,s,l,r,c,d,v,u,b;n=new Ye({props:{notification:i[0],chainStyles:J[q[i[0].network]]}}),a=new ot({props:{notification:i[0]}});let p=i[0].eventCode==="txPool"&&de(i);return{c(){e=h("div"),t=h("div"),F(n.$$.fragment),o=j(),F(a.$$.fragment),f=j(),s=h("div"),l=h("div"),r=j(),c=h("div"),p&&p.c(),m(l,"class","flex items-center close-icon svelte-ftkynd"),m(s,"class","notify-close-btn notify-close-btn-"+i[4].type+" pointer flex svelte-ftkynd"),m(t,"class","flex bn-notify-notification-inner svelte-ftkynd"),m(c,"class","dropdown svelte-ftkynd"),V(c,"dropdown-visible",i[2]&&i[5]&&le(i[0].eventCode)&&se(i[0].network)&&ce(i[7])),m(e,"class",d="bn-notify-notification bn-notify-notification-"+i[0].type+"} svelte-ftkynd"),V(e,"bn-notify-clickable",i[0].onClick)},m(y,z){_(y,e,z),g(e,t),H(n,t,null),g(t,o),H(a,t,null),g(t,f),g(t,s),g(s,l),l.innerHTML=at,g(e,r),g(e,c),p&&p.m(c,null),v=!0,u||(b=[S(s,"click",ye(i[8])),S(e,"mouseenter",i[11]),S(e,"mouseleave",i[12]),S(e,"click",i[13])],u=!0)},p(y,[z]){const T={};z&1&&(T.notification=y[0]),z&1&&(T.chainStyles=J[q[y[0].network]]),n.$set(T);const k={};z&1&&(k.notification=y[0]),a.$set(k),y[0].eventCode==="txPool"?p?p.p(y,z):(p=de(y),p.c(),p.m(c,null)):p&&(p.d(1),p=null),(!v||z&165)&&V(c,"dropdown-visible",y[2]&&y[5]&&le(y[0].eventCode)&&se(y[0].network)&&ce(y[7])),(!v||z&1&&d!==(d="bn-notify-notification bn-notify-notification-"+y[0].type+"} svelte-ftkynd"))&&m(e,"class",d),(!v||z&1)&&V(e,"bn-notify-clickable",y[0].onClick)},i(y){v||(w(n.$$.fragment,y),w(a.$$.fragment,y),v=!0)},o(y){x(n.$$.fragment,y),x(a.$$.fragment,y),v=!1},d(y){y&&C(e),$(n),$(a),p&&p.d(),u=!1,he(b)}}}function dt(i,e,t){let n,o;D(i,Me,k=>t(15,n=k)),D(i,ge,k=>t(3,o=k));const{device:a,gas:f}=Z;let{notification:s}=e,{updateParentOnRemove:l}=e,r,c=!1;const d=Oe.getValue().find(({hash:k})=>k===s.id),v=d&&n.find(({accounts:k})=>!!k.find(({address:L})=>L.toLowerCase()===d.from.toLowerCase()));ke(()=>{clearTimeout(r)});const u=()=>{Q(s.id),U(s.id),l()},b=async()=>{try{await fe({type:"cancel",wallet:v,transaction:d})}catch{const L=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;X({id:L,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:L,autoDismiss:4e3})}},p=async()=>{try{await fe({type:"speedup",wallet:v,transaction:d})}catch{const L=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;X({id:L,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:L,autoDismiss:4e3})}},y=()=>t(2,c=!0),z=()=>t(2,c=!1),T=k=>s.onClick&&s.onClick(k);return i.$$set=k=>{"notification"in k&&t(0,s=k.notification),"updateParentOnRemove"in k&&t(1,l=k.updateParentOnRemove)},i.$$.update=()=>{i.$$.dirty&1&&s.autoDismiss&&(r=setTimeout(()=>{Q(s.id),U(s.id)},s.autoDismiss))},[s,l,c,o,a,f,d,v,u,b,p,y,z,T]}class ut extends R{constructor(e){super(),I(this,e,dt,ft,M,{notification:0,updateParentOnRemove:1},ct)}}function vt(i){O(i,"svelte-1h8mmo3",`ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`)}function ue(i,e,t){const n=i.slice();return n[12]=e[t],n}function ve(i){let e,t=[],n=new Map,o,a,f,s=i[2];const l=r=>r[12].key;for(let r=0;r<s.length;r+=1){let c=ue(i,s,r),d=l(c);n.set(d,t[r]=pe(d,c))}return{c(){e=h("ul");for(let r=0;r<t.length;r+=1)t[r].c();m(e,"class",o="bn-notify-"+i[0]+" "+i[5]+" svelte-1h8mmo3"),m(e,"style",a=`${i[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${i[6].expanded?"412px":i[1]&&i[7].type!=="mobile"?"82px":!i[1]&&i[7].type==="mobile"?"108px":"24px"})`)},m(r,c){_(r,e,c);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(e,null);f=!0},p(r,c){if(c&517){s=r[2],A();for(let d=0;d<t.length;d+=1)t[d].r();t=Ce(t,c,l,1,r,s,n,e,Ne,pe,null,ue);for(let d=0;d<t.length;d+=1)t[d].a();G()}(!f||c&33&&o!==(o="bn-notify-"+r[0]+" "+r[5]+" svelte-1h8mmo3"))&&m(e,"class",o),(!f||c&67&&a!==(a=`${r[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${r[6].expanded?"412px":r[1]&&r[7].type!=="mobile"?"82px":!r[1]&&r[7].type==="mobile"?"108px":"24px"})`))&&m(e,"style",a)},i(r){if(!f){for(let c=0;c<s.length;c+=1)w(t[c]);f=!0}},o(r){for(let c=0;c<t.length;c+=1)x(t[c]);f=!1},d(r){r&&C(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function pe(i,e){let t,n,o,a,f,s,l,r=N,c,d,v;return n=new ut({props:{notification:e[12],updateParentOnRemove:e[9]}}),{key:i,first:null,c(){t=h("li"),F(n.$$.fragment),o=j(),m(t,"class",a=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=t},m(u,b){_(u,t,b),H(n,t,null),g(t,o),c=!0,d||(v=S(t,"click",ye(e[10])),d=!0)},p(u,b){e=u;const p={};b&4&&(p.notification=e[12]),n.$set(p),(!c||b&1&&a!==(a=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&m(t,"class",a)},r(){l=t.getBoundingClientRect()},f(){ze(t),r(),xe(t,l)},a(){r(),r=Te(t,l,$e,{duration:500})},i(u){c||(w(n.$$.fragment,u),u&&Le(()=>{c&&(s&&s.end(1),f=je(t,Pe,{duration:1200,delay:300,x:e[3],y:e[4],easing:mt}),f.start())}),c=!0)},o(u){x(n.$$.fragment,u),f&&f.invalidate(),s=Se(t,Re,{duration:300,easing:be}),c=!1},d(u){u&&C(t),$(n),u&&s&&s.end(),d=!1,v()}}}function pt(i){let e,t,n=i[2].length&&ve(i);return{c(){n&&n.c(),e=me()},m(o,a){n&&n.m(o,a),_(o,e,a),t=!0},p(o,[a]){o[2].length?n?(n.p(o,a),a&4&&w(n,1)):(n=ve(o),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(A(),x(n,1,1,()=>{n=null}),G())},i(o){t||(w(n),t=!0)},o(o){x(n),t=!1},d(o){n&&n.d(o),o&&C(e)}}}function mt(i){return Math.sin(-13*(i+1)*Math.PI/2)*Math.pow(2,-35*i)+1}function yt(i,e,t){let n;const{device:o}=Z,a=Y.select("accountCenter").pipe(_e(Y.get().accountCenter),we(1));D(i,a,p=>t(6,n=p));let{position:f}=e,{sharedContainer:s}=e,{notifications:l}=e,r,c;r=0,c=0;let d="y-scroll";const v=()=>{d!=="y-visible"&&t(5,d="y-visible"),u(function(){t(5,d="y-scroll")},1e3)},u=function(){let p=null;return(y,z)=>{clearTimeout(p),p=setTimeout(y,z)}}();function b(p){Ee.call(this,i,p)}return i.$$set=p=>{"position"in p&&t(0,f=p.position),"sharedContainer"in p&&t(1,s=p.sharedContainer),"notifications"in p&&t(2,l=p.notifications)},i.$$.update=()=>{i.$$.dirty&1&&(f.includes("top")?t(4,c=-50):t(4,c=50))},[f,s,l,r,c,d,n,o,a,v,b]}class ht extends R{constructor(e){super(),I(this,e,yt,pt,M,{position:0,sharedContainer:1,notifications:2},vt)}}export{ht as default};
