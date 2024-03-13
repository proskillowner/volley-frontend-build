import{c as V,b as cn}from"./skip-e439a8c5.js";import{b5 as d,b6 as v,a$ as ln,cl as jn,b0 as F,bL as R,bT as S,aV as C,a_ as U,bM as A,aX as B,cm as G,cn as M,aY as x,bU as K,bP as O,bX as I,bO as kn,co as vn,bY as E,b1 as N,b2 as T,cp as k,b3 as $,c0 as sn,ce as W,ca as Wn,c4 as dn,ci as D,cd as Fn,bN as Y,b7 as Q,cc as hn,cq as pn,aW as Mn,aZ as Cn,a6 as Ln,b_ as zn,ch as P,b4 as qn}from"./index-a5cfe530.js";function Un(){return d(function(t,n){var e=null;t._refCount++;var r=v(n,void 0,void 0,void 0,function(){if(!t||t._refCount<=0||0<--t._refCount){e=null;return}var u=t._connection,a=e;e=null,u&&(!a||u===a)&&u.unsubscribe(),n.unsubscribe()});t.subscribe(r),r.closed||(e=t.connect())})}var Z=function(t){ln(n,t);function n(e,r){var u=t.call(this)||this;return u.source=e,u.subjectFactory=r,u._subject=null,u._refCount=0,u._connection=null,jn(e)&&(u.lift=e.lift),u}return n.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},n.prototype.getSubject=function(){var e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject},n.prototype._teardown=function(){this._refCount=0;var e=this._connection;this._subject=this._connection=null,e==null||e.unsubscribe()},n.prototype.connect=function(){var e=this,r=this._connection;if(!r){r=this._connection=new F;var u=this.getSubject();r.add(this.source.subscribe(v(u,void 0,function(){e._teardown(),u.complete()},function(a){e._teardown(),u.error(a)},function(){return e._teardown()}))),r.closed&&(this._connection=null,r=F.EMPTY)}return r},n.prototype.refCount=function(){return Un()(this)},n}(R),$n=function(t){ln(n,t);function n(){var e=t!==null&&t.apply(this,arguments)||this;return e._value=null,e._hasValue=!1,e._isComplete=!1,e}return n.prototype._checkFinalizedStatuses=function(e){var r=this,u=r.hasError,a=r._hasValue,i=r._value,o=r.thrownError,f=r.isStopped,c=r._isComplete;u?e.error(o):(f||c)&&(a&&e.next(i),e.complete())},n.prototype.next=function(e){this.isStopped||(this._value=e,this._hasValue=!0)},n.prototype.complete=function(){var e=this,r=e._hasValue,u=e._value,a=e._isComplete;a||(this._isComplete=!0,r&&t.prototype.next.call(this,u),t.prototype.complete.call(this))},n}(S);function mn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=C(t);return U(t,e)}function Dn(t,n){var e=A(t)?t:function(){return t},r=function(u){return u.error(e())};return new R(n?function(u){return n.schedule(r,0,u)}:r)}var rn;(function(t){t.NEXT="N",t.ERROR="E",t.COMPLETE="C"})(rn||(rn={}));var J=function(){function t(n,e,r){this.kind=n,this.value=e,this.error=r,this.hasValue=n==="N"}return t.prototype.observe=function(n){return gn(this,n)},t.prototype.do=function(n,e,r){var u=this,a=u.kind,i=u.value,o=u.error;return a==="N"?n==null?void 0:n(i):a==="E"?e==null?void 0:e(o):r==null?void 0:r()},t.prototype.accept=function(n,e,r){var u;return A((u=n)===null||u===void 0?void 0:u.next)?this.observe(n):this.do(n,e,r)},t.prototype.toObservable=function(){var n=this,e=n.kind,r=n.value,u=n.error,a=e==="N"?mn(r):e==="E"?Dn(function(){return u}):e==="C"?B:0;if(!a)throw new TypeError("Unexpected notification kind "+e);return a},t.createNext=function(n){return new t("N",n)},t.createError=function(n){return new t("E",void 0,n)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t}();function gn(t,n){var e,r,u,a=t,i=a.kind,o=a.value,f=a.error;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(e=n.next)===null||e===void 0||e.call(n,o):i==="E"?(r=n.error)===null||r===void 0||r.call(n,f):(u=n.complete)===null||u===void 0||u.call(n)}var un=G(function(t){return function(){t(this),this.name="ArgumentOutOfRangeError",this.message="argument out of range"}}),Pn=G(function(t){return function(e){t(this),this.name="NotFoundError",this.message=e}}),Bn=G(function(t){return function(e){t(this),this.name="SequenceError",this.message=e}});function H(t){return t instanceof Date&&!isNaN(t)}var Gn=G(function(t){return function(e){e===void 0&&(e=null),t(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=e}});function Yn(t,n){var e=H(t)?{first:t}:typeof t=="number"?{each:t}:t,r=e.first,u=e.each,a=e.with,i=a===void 0?Xn:a,o=e.scheduler,f=o===void 0?n??V:o,c=e.meta,l=c===void 0?null:c;if(r==null&&u==null)throw new TypeError("No timeout provided.");return d(function(s,p){var w,m,y=null,h=0,g=function(b){m=M(p,f,function(){try{w.unsubscribe(),x(i({meta:l,lastValue:y,seen:h})).subscribe(p)}catch(j){p.error(j)}},b)};w=s.subscribe(v(p,function(b){m==null||m.unsubscribe(),h++,p.next(y=b),u>0&&g(u)},void 0,void 0,function(){m!=null&&m.closed||m==null||m.unsubscribe(),y=null})),!h&&g(r!=null?typeof r=="number"?r:+r-f.now():u)})}function Xn(t){throw new Gn(t)}var Jn=Array.isArray,Kn=Object.getPrototypeOf,On=Object.prototype,Qn=Object.keys;function Zn(t){if(t.length===1){var n=t[0];if(Jn(n))return{args:n,keys:null};if(Hn(n)){var e=Qn(n);return{args:e.map(function(r){return n[r]}),keys:e}}}return{args:t,keys:null}}function Hn(t){return t&&typeof t=="object"&&Kn(t)===On}function _n(t,n){return t.reduce(function(e,r,u){return e[r]=n[u],e},{})}function nt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=C(t),r=K(t),u=Zn(t),a=u.args,i=u.keys;if(a.length===0)return U([],e);var o=new R(yn(a,e,i?function(f){return _n(i,f)}:I));return r?o.pipe(O(r)):o}function yn(t,n,e){return e===void 0&&(e=I),function(r){an(n,function(){for(var u=t.length,a=new Array(u),i=u,o=u,f=function(l){an(n,function(){var s=U(t[l],n),p=!1;s.subscribe(v(r,function(w){a[l]=w,p||(p=!0,o--),o||r.next(e(a.slice()))},function(){--i||r.complete()}))},r)},c=0;c<u;c++)f(c)},r)}}function an(t,n,e){t?M(e,t,n):n()}function L(t,n,e){t===void 0&&(t=0),e===void 0&&(e=cn);var r=-1;return n!=null&&(kn(n)?e=n:r=n),new R(function(u){var a=H(t)?+t-e.now():t;a<0&&(a=0);var i=0;return e.schedule(function(){u.closed||(u.next(i++),0<=r?this.schedule(void 0,r):u.complete())},a)})}function tt(t,n){return t===void 0&&(t=0),n===void 0&&(n=V),t<0&&(t=0),L(t,t,n)}var et=Array.isArray;function z(t){return t.length===1&&et(t[0])?t[0]:t}function rt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=z(t);return new R(function(r){var u=0,a=function(){if(u<e.length){var i=void 0;try{i=x(e[u++])}catch{a();return}var o=new vn(r,void 0,E,E);i.subscribe(o),o.add(a)}else r.complete()};a()})}function At(t,n){return function(e,r){return!t.call(n,e,r)}}function Nt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t=z(t),t.length===1?x(t[0]):new R(wn(t))}function wn(t){return function(n){for(var e=[],r=function(a){e.push(x(t[a]).subscribe(v(n,function(i){if(e){for(var o=0;o<e.length;o++)o!==a&&e[o].unsubscribe();e=null}n.next(i)})))},u=0;e&&!n.closed&&u<t.length;u++)r(u)}}function xn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=K(t),r=z(t);return r.length?new R(function(u){var a=r.map(function(){return[]}),i=r.map(function(){return!1});u.add(function(){a=i=null});for(var o=function(c){x(r[c]).subscribe(v(u,function(l){if(a[c].push(l),a.every(function(p){return p.length})){var s=a.map(function(p){return p.shift()});u.next(e?e.apply(void 0,N([],T(s))):s),a.some(function(p,w){return!p.length&&i[w]})&&u.complete()}},function(){i[c]=!0,!a[c].length&&u.complete()}))},f=0;!u.closed&&f<r.length;f++)o(f);return function(){a=i=null}}):B}function ut(t){return d(function(n,e){var r=!1,u=null,a=null,i=!1,o=function(){if(a==null||a.unsubscribe(),a=null,r){r=!1;var c=u;u=null,e.next(c)}i&&e.complete()},f=function(){a=null,i&&e.complete()};n.subscribe(v(e,function(c){r=!0,u=c,a||x(t(c)).subscribe(a=v(e,o,f))},function(){i=!0,(!r||!a||a.closed)&&e.complete()}))})}function Tt(t,n){return n===void 0&&(n=V),ut(function(){return L(t,n)})}function It(t){return d(function(n,e){var r=[];return n.subscribe(v(e,function(u){return r.push(u)},function(){e.next(r),e.complete()})),x(t).subscribe(v(e,function(){var u=r;r=[],e.next(u)},E)),function(){r=null}})}function Vt(t,n){return n===void 0&&(n=null),n=n??t,d(function(e,r){var u=[],a=0;e.subscribe(v(r,function(i){var o,f,c,l,s=null;a++%n===0&&u.push([]);try{for(var p=k(u),w=p.next();!w.done;w=p.next()){var m=w.value;m.push(i),t<=m.length&&(s=s??[],s.push(m))}}catch(g){o={error:g}}finally{try{w&&!w.done&&(f=p.return)&&f.call(p)}finally{if(o)throw o.error}}if(s)try{for(var y=k(s),h=y.next();!h.done;h=y.next()){var m=h.value;$(u,m),r.next(m)}}catch(g){c={error:g}}finally{try{h&&!h.done&&(l=y.return)&&l.call(y)}finally{if(c)throw c.error}}},function(){var i,o;try{for(var f=k(u),c=f.next();!c.done;c=f.next()){var l=c.value;r.next(l)}}catch(s){i={error:s}}finally{try{c&&!c.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}r.complete()},void 0,function(){u=null}))})}function Rt(t){for(var n,e,r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=(n=C(r))!==null&&n!==void 0?n:V,i=(e=r[0])!==null&&e!==void 0?e:null,o=r[1]||1/0;return d(function(f,c){var l=[],s=!1,p=function(y){var h=y.buffer,g=y.subs;g.unsubscribe(),$(l,y),c.next(h),s&&w()},w=function(){if(l){var y=new F;c.add(y);var h=[],g={buffer:h,subs:y};l.push(g),M(y,a,function(){return p(g)},t)}};i!==null&&i>=0?M(c,a,w,i,!0):s=!0,w();var m=v(c,function(y){var h,g,b=l.slice();try{for(var j=k(b),q=j.next();!q.done;q=j.next()){var tn=q.value,en=tn.buffer;en.push(y),o<=en.length&&p(tn)}}catch(Rn){h={error:Rn}}finally{try{q&&!q.done&&(g=j.return)&&g.call(j)}finally{if(h)throw h.error}}},function(){for(;l!=null&&l.length;)c.next(l.shift().buffer);m==null||m.unsubscribe(),c.complete(),c.unsubscribe()},void 0,function(){return l=null});f.subscribe(m)})}function jt(t,n){return d(function(e,r){var u=[];x(t).subscribe(v(r,function(a){var i=[];u.push(i);var o=new F,f=function(){$(u,i),r.next(i),o.unsubscribe()};o.add(x(n(a)).subscribe(v(r,f,E)))},E)),e.subscribe(v(r,function(a){var i,o;try{for(var f=k(u),c=f.next();!c.done;c=f.next()){var l=c.value;l.push(a)}}catch(s){i={error:s}}finally{try{c&&!c.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}},function(){for(;u.length>0;)r.next(u.shift());r.complete()}))})}function kt(t){return d(function(n,e){var r=null,u=null,a=function(){u==null||u.unsubscribe();var i=r;r=[],i&&e.next(i),x(t()).subscribe(u=v(e,a,E))};a(),n.subscribe(v(e,function(i){return r==null?void 0:r.push(i)},function(){r&&e.next(r),e.complete()},void 0,function(){return r=u=null}))})}function at(t){return d(function(n,e){var r=null,u=!1,a;r=n.subscribe(v(e,void 0,void 0,function(i){a=x(t(i,at(t)(n))),r?(r.unsubscribe(),r=null,a.subscribe(e)):u=!0})),u&&(r.unsubscribe(),r=null,a.subscribe(e))})}function bn(t,n,e,r,u){return function(a,i){var o=e,f=n,c=0;a.subscribe(v(i,function(l){var s=c++;f=o?t(f,l,s):(o=!0,l),r&&i.next(f)},u&&function(){o&&i.next(f),i.complete()}))}}function X(t,n){return d(bn(t,n,arguments.length>=2,!1,!0))}var it=function(t,n){return t.push(n),t};function ot(){return d(function(t,n){X(it,[])(t).subscribe(n)})}function En(t,n){return sn(ot(),W(function(e){return t(e)}),n?O(n):I)}function ft(t){return En(nt,t)}var Wt=ft;function Sn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=K(t);return e?sn(Sn.apply(void 0,N([],T(t))),O(e)):d(function(r,u){yn(N([r],T(z(t))))(u)})}function Ft(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Sn.apply(void 0,N([],T(t)))}function on(t,n){return A(n)?W(t,n,1):W(t,1)}function Mt(t,n){return A(n)?on(function(){return t},n):on(function(){return t})}function ct(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=C(t);return d(function(r,u){Wn()(U(N([r],T(t)),e)).subscribe(u)})}function Ct(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ct.apply(void 0,N([],T(t)))}function lt(t){return new R(function(n){return t.subscribe(n)})}var vt={connector:function(){return new S}};function An(t,n){n===void 0&&(n=vt);var e=n.connector;return d(function(r,u){var a=e();x(t(lt(a))).subscribe(u),u.add(r.subscribe(a))})}function Lt(t){return X(function(n,e,r){return!t||t(e,r)?n+1:n},0)}function zt(t){return d(function(n,e){var r=!1,u=null,a=null,i=function(){if(a==null||a.unsubscribe(),a=null,r){r=!1;var o=u;u=null,e.next(o)}};n.subscribe(v(e,function(o){a==null||a.unsubscribe(),r=!0,u=o,a=v(e,i,E),x(t(o)).subscribe(a)},function(){i(),e.complete()},void 0,function(){u=a=null}))})}function _(t){return d(function(n,e){var r=!1;n.subscribe(v(e,function(u){r=!0,e.next(u)},function(){r||e.next(t),e.complete()}))})}function st(){return d(function(t,n){t.subscribe(v(n,E))})}function Nn(t,n){return n?function(e){return dn(n.pipe(D(1),st()),e.pipe(Nn(t)))}:W(function(e,r){return x(t(e,r)).pipe(D(1),Fn(e))})}function qt(t,n){n===void 0&&(n=V);var e=L(t,n);return Nn(function(){return e})}function Ut(){return d(function(t,n){t.subscribe(v(n,function(e){return gn(e,n)}))})}function $t(t,n){return d(function(e,r){var u=new Set;e.subscribe(v(r,function(a){var i=t?t(a):a;u.has(i)||(u.add(i),r.next(a))})),n&&x(n).subscribe(v(r,function(){return u.clear()},E))})}function nn(t){return t===void 0&&(t=dt),d(function(n,e){var r=!1;n.subscribe(v(e,function(u){r=!0,e.next(u)},function(){return r?e.complete():e.error(t())}))})}function dt(){return new Y}function Dt(t,n){if(t<0)throw new un;var e=arguments.length>=2;return function(r){return r.pipe(Q(function(u,a){return a===t}),D(1),e?_(n):nn(function(){return new un}))}}function Pt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(e){return dn(e,mn.apply(void 0,N([],T(t))))}}function Bt(t,n){return d(function(e,r){var u=0;e.subscribe(v(r,function(a){t.call(n,a,u++,e)||(r.next(!1),r.complete())},function(){r.next(!0),r.complete()}))})}function Tn(t,n){return n?function(e){return e.pipe(Tn(function(r,u){return x(t(r,u)).pipe(hn(function(a,i){return n(r,a,u,i)}))}))}:d(function(e,r){var u=0,a=null,i=!1;e.subscribe(v(r,function(o){a||(a=v(r,void 0,function(){a=null,i&&r.complete()}),x(t(o,u++)).subscribe(a))},function(){i=!0,!a&&r.complete()}))})}function ht(){return Tn(I)}var Gt=ht;function Yt(t,n,e){return n===void 0&&(n=1/0),n=(n||0)<1?1/0:n,d(function(r,u){return pn(r,u,t,n,void 0,!0,e)})}function Xt(t){return d(function(n,e){try{n.subscribe(e)}finally{e.add(t)}})}function Jt(t,n){return d(In(t,n,"value"))}function In(t,n,e){var r=e==="index";return function(u,a){var i=0;u.subscribe(v(a,function(o){var f=i++;t.call(n,o,f,u)&&(a.next(r?f:o),a.complete())},function(){a.next(r?-1:void 0),a.complete()}))}}function Kt(t,n){return d(In(t,n,"index"))}function Ot(t,n){var e=arguments.length>=2;return function(r){return r.pipe(t?Q(function(u,a){return t(u,a,r)}):I,D(1),e?_(n):nn(function(){return new Y}))}}function Qt(t,n,e,r){return d(function(u,a){var i;!n||typeof n=="function"?i=n:(e=n.duration,i=n.element,r=n.connector);var o=new Map,f=function(m){o.forEach(m),m(a)},c=function(m){return f(function(y){return y.error(m)})},l=0,s=!1,p=new vn(a,function(m){try{var y=t(m),h=o.get(y);if(!h){o.set(y,h=r?r():new S);var g=w(y,h);if(a.next(g),e){var b=v(h,function(){h.complete(),b==null||b.unsubscribe()},void 0,void 0,function(){return o.delete(y)});p.add(x(e(g)).subscribe(b))}}h.next(i?i(m):m)}catch(j){c(j)}},function(){return f(function(m){return m.complete()})},c,function(){return o.clear()},function(){return s=!0,l===0});u.subscribe(p);function w(m,y){var h=new R(function(g){l++;var b=y.subscribe(g);return function(){b.unsubscribe(),--l===0&&s&&p.unsubscribe()}});return h.key=m,h}})}function Zt(){return d(function(t,n){t.subscribe(v(n,function(){n.next(!1),n.complete()},function(){n.next(!0),n.complete()}))})}function pt(t){return t<=0?function(){return B}:d(function(n,e){var r=[];n.subscribe(v(e,function(u){r.push(u),t<r.length&&r.shift()},function(){var u,a;try{for(var i=k(r),o=i.next();!o.done;o=i.next()){var f=o.value;e.next(f)}}catch(c){u={error:c}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(u)throw u.error}}e.complete()},void 0,function(){r=null}))})}function Ht(t,n){var e=arguments.length>=2;return function(r){return r.pipe(t?Q(function(u,a){return t(u,a,r)}):I,pt(1),e?_(n):nn(function(){return new Y}))}}function _t(){return d(function(t,n){t.subscribe(v(n,function(e){n.next(J.createNext(e))},function(){n.next(J.createComplete()),n.complete()},function(e){n.next(J.createError(e)),n.complete()}))})}function ne(t){return X(A(t)?function(n,e){return t(n,e)>0?n:e}:function(n,e){return n>e?n:e})}var te=W;function ee(t,n,e){return e===void 0&&(e=1/0),A(n)?W(function(){return t},n,e):(typeof n=="number"&&(e=n),W(function(){return t},e))}function re(t,n,e){return e===void 0&&(e=1/0),d(function(r,u){var a=n;return pn(r,u,function(i,o){return t(a,i,o)},e,function(i){a=i},!1,void 0,function(){return a=null})})}function mt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=C(t),r=Mn(t,1/0);return t=z(t),d(function(u,a){Cn(r)(U(N([u],T(t)),e)).subscribe(a)})}function ue(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return mt.apply(void 0,N([],T(t)))}function ae(t){return X(A(t)?function(n,e){return t(n,e)<0?n:e}:function(n,e){return n<e?n:e})}function Vn(t,n){var e=A(t)?t:function(){return t};return A(n)?An(n,{connector:e}):function(r){return new Z(r,e)}}function gt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=z(t);return function(r){return rt.apply(void 0,N([r],T(e)))}}var ie=gt;function oe(){return d(function(t,n){var e,r=!1;t.subscribe(v(n,function(u){var a=e;e=u,r&&n.next([a,u]),r=!0}))})}function fe(t){return t?function(n){return An(t)(n)}:function(n){return Vn(new S)(n)}}function ce(t){return function(n){var e=new Ln(t);return new Z(n,function(){return e})}}function le(){return function(t){var n=new $n;return new Z(t,function(){return n})}}function ve(t,n,e,r){e&&!A(e)&&(r=e);var u=A(e)?e:void 0;return function(a){return Vn(new zn(t,n,r),u)(a)}}function se(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length?d(function(e,r){wn(N([e],T(t)))(r)}):I}function de(t){var n,e=1/0,r;return t!=null&&(typeof t=="object"?(n=t.count,e=n===void 0?1/0:n,r=t.delay):e=t),e<=0?function(){return B}:d(function(u,a){var i=0,o,f=function(){if(o==null||o.unsubscribe(),o=null,r!=null){var l=typeof r=="number"?L(r):x(r(i)),s=v(a,function(){s.unsubscribe(),c()});l.subscribe(s)}else c()},c=function(){var l=!1;o=u.subscribe(v(a,void 0,function(){++i<e?o?f():l=!0:a.complete()})),l&&f()};c()})}function he(t){return d(function(n,e){var r,u=!1,a,i=!1,o=!1,f=function(){return o&&i&&(e.complete(),!0)},c=function(){return a||(a=new S,x(t(a)).subscribe(v(e,function(){r?l():u=!0},function(){i=!0,f()}))),a},l=function(){o=!1,r=n.subscribe(v(e,void 0,function(){o=!0,!f()&&c().next()})),u&&(r.unsubscribe(),r=null,u=!1,l())};l()})}function pe(t){t===void 0&&(t=1/0);var n;t&&typeof t=="object"?n=t:n={count:t};var e=n.count,r=e===void 0?1/0:e,u=n.delay,a=n.resetOnSuccess,i=a===void 0?!1:a;return r<=0?I:d(function(o,f){var c=0,l,s=function(){var p=!1;l=o.subscribe(v(f,function(w){i&&(c=0),f.next(w)},void 0,function(w){if(c++<r){var m=function(){l?(l.unsubscribe(),l=null,s()):p=!0};if(u!=null){var y=typeof u=="number"?L(u):x(u(w,c)),h=v(f,function(){h.unsubscribe(),m()},function(){f.complete()});y.subscribe(h)}else m()}else f.error(w)})),p&&(l.unsubscribe(),l=null,s())};s()})}function me(t){return d(function(n,e){var r,u=!1,a,i=function(){r=n.subscribe(v(e,void 0,void 0,function(o){a||(a=new S,x(t(a)).subscribe(v(e,function(){return r?i():u=!0}))),a&&a.next(o)})),u&&(r.unsubscribe(),r=null,u=!1,i())};i()})}function yt(t){return d(function(n,e){var r=!1,u=null;n.subscribe(v(e,function(a){r=!0,u=a})),x(t).subscribe(v(e,function(){if(r){r=!1;var a=u;u=null,e.next(a)}},E))})}function ge(t,n){return n===void 0&&(n=V),yt(tt(t,n))}function ye(t,n){return d(bn(t,n,arguments.length>=2,!0))}function we(t,n){return n===void 0&&(n=function(e,r){return e===r}),d(function(e,r){var u=fn(),a=fn(),i=function(f){r.next(f),r.complete()},o=function(f,c){var l=v(r,function(s){var p=c.buffer,w=c.complete;p.length===0?w?i(!1):f.buffer.push(s):!n(s,p.shift())&&i(!1)},function(){f.complete=!0;var s=c.complete,p=c.buffer;s&&i(p.length===0),l==null||l.unsubscribe()});return l};e.subscribe(o(u,a)),x(t).subscribe(o(a,u))})}function fn(){return{buffer:[],complete:!1}}function xe(t){return d(function(n,e){var r=!1,u,a=!1,i=0;n.subscribe(v(e,function(o){a=!0,(!t||t(o,i++,n))&&(r&&e.error(new Bn("Too many matching values")),r=!0,u=o)},function(){r?(e.next(u),e.complete()):e.error(a?new Pn("No matching values"):new Y)}))})}function be(t){return t<=0?I:d(function(n,e){var r=new Array(t),u=0;return n.subscribe(v(e,function(a){var i=u++;if(i<t)r[i]=a;else{var o=i%t,f=r[o];r[o]=a,e.next(f)}})),function(){r=null}})}function Ee(t){return d(function(n,e){var r=!1,u=v(e,function(){u==null||u.unsubscribe(),r=!0},E);x(t).subscribe(u),n.subscribe(v(e,function(a){return r&&e.next(a)}))})}function Se(t){return d(function(n,e){var r=!1,u=0;n.subscribe(v(e,function(a){return(r||(r=!t(a,u++)))&&e.next(a)}))})}function Ae(){return P(I)}function Ne(t,n){return A(n)?P(function(){return t},n):P(function(){return t})}function Te(t,n){return d(function(e,r){var u=n;return P(function(a,i){return t(u,a,i)},function(a,i){return u=i,i})(e).subscribe(r),function(){u=null}})}function Ie(t,n){return n===void 0&&(n=!1),d(function(e,r){var u=0;e.subscribe(v(r,function(a){var i=t(a,u++);(i||n)&&r.next(a),!i&&r.complete()}))})}function Ve(t,n,e){var r=A(t)||n||e?{next:t,error:n,complete:e}:t;return r?d(function(u,a){var i;(i=r.subscribe)===null||i===void 0||i.call(r);var o=!0;u.subscribe(v(a,function(f){var c;(c=r.next)===null||c===void 0||c.call(r,f),a.next(f)},function(){var f;o=!1,(f=r.complete)===null||f===void 0||f.call(r),a.complete()},function(f){var c;o=!1,(c=r.error)===null||c===void 0||c.call(r,f),a.error(f)},function(){var f,c;o&&((f=r.unsubscribe)===null||f===void 0||f.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):I}function wt(t,n){return d(function(e,r){var u=n??{},a=u.leading,i=a===void 0?!0:a,o=u.trailing,f=o===void 0?!1:o,c=!1,l=null,s=null,p=!1,w=function(){s==null||s.unsubscribe(),s=null,f&&(h(),p&&r.complete())},m=function(){s=null,p&&r.complete()},y=function(g){return s=x(t(g)).subscribe(v(r,w,m))},h=function(){if(c){c=!1;var g=l;l=null,r.next(g),!p&&y(g)}};e.subscribe(v(r,function(g){c=!0,l=g,!(s&&!s.closed)&&(i?h():y(g))},function(){p=!0,!(f&&c&&s&&!s.closed)&&r.complete()}))})}function Re(t,n,e){n===void 0&&(n=V);var r=L(t,n);return wt(function(){return r},e)}function je(t){return t===void 0&&(t=V),d(function(n,e){var r=t.now();n.subscribe(v(e,function(u){var a=t.now(),i=a-r;r=a,e.next(new xt(u,i))}))})}var xt=function(){function t(n,e){this.value=n,this.interval=e}return t}();function ke(t,n,e){var r,u,a;if(e=e??cn,H(t)?r=t:typeof t=="number"&&(u=t),n)a=function(){return n};else throw new TypeError("No observable provided to switch to");if(r==null&&u==null)throw new TypeError("No timeout provided.");return Yn({first:r,each:u,scheduler:e,with:a})}function We(t){return t===void 0&&(t=qn),hn(function(n){return{value:n,timestamp:t.now()}})}function Fe(t){return d(function(n,e){var r=new S;e.next(r.asObservable());var u=function(a){r.error(a),e.error(a)};return n.subscribe(v(e,function(a){return r==null?void 0:r.next(a)},function(){r.complete(),e.complete()},u)),x(t).subscribe(v(e,function(){r.complete(),e.next(r=new S)},E,u)),function(){r==null||r.unsubscribe(),r=null}})}function Me(t,n){n===void 0&&(n=0);var e=n>0?n:t;return d(function(r,u){var a=[new S],i=[],o=0;u.next(a[0].asObservable()),r.subscribe(v(u,function(f){var c,l;try{for(var s=k(a),p=s.next();!p.done;p=s.next()){var w=p.value;w.next(f)}}catch(h){c={error:h}}finally{try{p&&!p.done&&(l=s.return)&&l.call(s)}finally{if(c)throw c.error}}var m=o-t+1;if(m>=0&&m%e===0&&a.shift().complete(),++o%e===0){var y=new S;a.push(y),u.next(y.asObservable())}},function(){for(;a.length>0;)a.shift().complete();u.complete()},function(f){for(;a.length>0;)a.shift().error(f);u.error(f)},function(){i=null,a=null}))})}function Ce(t){for(var n,e,r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=(n=C(r))!==null&&n!==void 0?n:V,i=(e=r[0])!==null&&e!==void 0?e:null,o=r[1]||1/0;return d(function(f,c){var l=[],s=!1,p=function(h){var g=h.window,b=h.subs;g.complete(),b.unsubscribe(),$(l,h),s&&w()},w=function(){if(l){var h=new F;c.add(h);var g=new S,b={window:g,subs:h,seen:0};l.push(b),c.next(g.asObservable()),M(h,a,function(){return p(b)},t)}};i!==null&&i>=0?M(c,a,w,i,!0):s=!0,w();var m=function(h){return l.slice().forEach(h)},y=function(h){m(function(g){var b=g.window;return h(b)}),h(c),c.unsubscribe()};return f.subscribe(v(c,function(h){m(function(g){g.window.next(h),o<=++g.seen&&p(g)})},function(){return y(function(h){return h.complete()})},function(h){return y(function(g){return g.error(h)})})),function(){l=null}})}function Le(t,n){return d(function(e,r){var u=[],a=function(i){for(;0<u.length;)u.shift().error(i);r.error(i)};x(t).subscribe(v(r,function(i){var o=new S;u.push(o);var f=new F,c=function(){$(u,o),o.complete(),f.unsubscribe()},l;try{l=x(n(i))}catch(s){a(s);return}r.next(o.asObservable()),f.add(l.subscribe(v(r,c,E,a)))},E)),e.subscribe(v(r,function(i){var o,f,c=u.slice();try{for(var l=k(c),s=l.next();!s.done;s=l.next()){var p=s.value;p.next(i)}}catch(w){o={error:w}}finally{try{s&&!s.done&&(f=l.return)&&f.call(l)}finally{if(o)throw o.error}}},function(){for(;0<u.length;)u.shift().complete();r.complete()},a,function(){for(;0<u.length;)u.shift().unsubscribe()}))})}function ze(t){return d(function(n,e){var r,u,a=function(o){r.error(o),e.error(o)},i=function(){u==null||u.unsubscribe(),r==null||r.complete(),r=new S,e.next(r.asObservable());var o;try{o=x(t())}catch(f){a(f);return}o.subscribe(u=v(e,i,i,a))};i(),n.subscribe(v(e,function(o){return r.next(o)},function(){r.complete(),e.complete()},a,function(){u==null||u.unsubscribe(),r=null}))})}function qe(t){return En(xn,t)}function bt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return d(function(e,r){xn.apply(void 0,N([e],T(t))).subscribe(r)})}function Ue(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return bt.apply(void 0,N([],T(t)))}export{st as $,$n as A,Mt as B,Z as C,Ct as D,An as E,Lt as F,zt as G,_ as H,qt as I,Nn as J,Ut as K,$t as L,Dt as M,J as N,Pt as O,Bt as P,Gt as Q,ht as R,Bn as S,Gn as T,Tn as U,Yt as V,Xt as W,Jt as X,Kt as Y,Ot as Z,Qt as _,Zn as a,Zt as a0,Ht as a1,_t as a2,ne as a3,te as a4,ee as a5,re as a6,ue as a7,ae as a8,Vn as a9,Ve as aA,wt as aB,Re as aC,nn as aD,je as aE,Yn as aF,ke as aG,We as aH,ot as aI,Fe as aJ,Me as aK,Ce as aL,Le as aM,ze as aN,qe as aO,Ue as aP,z as aQ,Sn as aR,ct as aS,mt as aT,ie as aU,bt as aV,gt as aa,oe as ab,fe as ac,ce as ad,le as ae,ve as af,se as ag,X as ah,de as ai,he as aj,pe as ak,me as al,Un as am,yt as an,ge as ao,ye as ap,we as aq,xe as ar,be as as,Ee as at,Se as au,Ae as av,Ne as aw,Te as ax,pt as ay,Ie as az,rn as b,_n as c,un as d,Pn as e,nt as f,rt as g,L as h,tt as i,ut as j,Tt as k,It as l,Vt as m,At as n,mn as o,Rt as p,jt as q,Nt as r,kt as s,Dn as t,at as u,Wt as v,ft as w,Ft as x,on as y,xn as z};
