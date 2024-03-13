import{t as a}from"./tslib-834dda6e.js";function m(r){return typeof r=="function"}var M=!1,h={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){if(r){var e=new Error;""+e.stack}M=r},get useDeprecatedSynchronousErrorHandling(){return M}};function d(r){setTimeout(function(){throw r},0)}var E={closed:!0,next:function(r){},error:function(r){if(h.useDeprecatedSynchronousErrorHandling)throw r;d(r)},complete:function(){}},A=function(){return Array.isArray||function(r){return r&&typeof r.length=="number"}}();function V(r){return r!==null&&typeof r=="object"}var B=function(){function r(e){return Error.call(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(t,n){return n+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e,this}return r.prototype=Object.create(Error.prototype),r}(),w=B,l=function(){function r(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return r.prototype.unsubscribe=function(){var e;if(!this.closed){var t=this,n=t._parentOrParents,i=t._ctorUnsubscribe,o=t._unsubscribe,s=t._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof r)n.remove(this);else if(n!==null)for(var u=0;u<n.length;++u){var c=n[u];c.remove(this)}if(m(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(x){e=x instanceof w?U(x.errors):[x]}}if(A(s))for(var u=-1,b=s.length;++u<b;){var _=s[u];if(V(_))try{_.unsubscribe()}catch(I){e=e||[],I instanceof w?e=e.concat(U(I.errors)):e.push(I)}}if(e)throw new w(e)}},r.prototype.add=function(e){var t=e;if(!e)return r.EMPTY;switch(typeof e){case"function":t=new r(e);case"object":if(t===this||t.closed||typeof t.unsubscribe!="function")return t;if(this.closed)return t.unsubscribe(),t;if(!(t instanceof r)){var n=t;t=new r,t._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=t._parentOrParents;if(i===null)t._parentOrParents=this;else if(i instanceof r){if(i===this)return t;t._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return t;var o=this._subscriptions;return o===null?this._subscriptions=[t]:o.push(t),t},r.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);n!==-1&&t.splice(n,1)}},r.EMPTY=function(e){return e.closed=!0,e}(new r),r}();function U(r){return r.reduce(function(e,t){return e.concat(t instanceof w?t.errors:t)},[])}var S=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),p=function(r){a.__extends(e,r);function e(t,n,i){var o=r.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=E;break;case 1:if(!t){o.destination=E;break}if(typeof t=="object"){t instanceof e?(o.syncErrorThrowable=t.syncErrorThrowable,o.destination=t,t.add(o)):(o.syncErrorThrowable=!0,o.destination=new j(o,t));break}default:o.syncErrorThrowable=!0,o.destination=new j(o,t,n,i);break}return o}return e.prototype[S]=function(){return this},e.create=function(t,n,i){var o=new e(t,n,i);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(l),j=function(r){a.__extends(e,r);function e(t,n,i,o){var s=r.call(this)||this;s._parentSubscriber=t;var u,c=s;return m(n)?u=n:n&&(u=n.next,i=n.error,o=n.complete,n!==E&&(c=Object.create(n),m(c.unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=u,s._error=i,s._complete=o,s}return e.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;!h.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?this.__tryOrUnsub(this._next,t):this.__tryOrSetError(n,this._next,t)&&this.unsubscribe()}},e.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,i=h.useDeprecatedSynchronousErrorHandling;if(this._error)!i||!n.syncErrorThrowable?(this.__tryOrUnsub(this._error,t),this.unsubscribe()):(this.__tryOrSetError(n,this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)i?(n.syncErrorValue=t,n.syncErrorThrown=!0):d(t),this.unsubscribe();else{if(this.unsubscribe(),i)throw t;d(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var i=function(){return t._complete.call(t._context)};!h.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?(this.__tryOrUnsub(i),this.unsubscribe()):(this.__tryOrSetError(n,i),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(i){if(this.unsubscribe(),h.useDeprecatedSynchronousErrorHandling)throw i;d(i)}},e.prototype.__tryOrSetError=function(t,n,i){if(!h.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,i)}catch(o){return h.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=o,t.syncErrorThrown=!0,!0):(d(o),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(p);function C(r){for(;r;){var e=r,t=e.closed,n=e.destination,i=e.isStopped;if(t||i)return!1;n&&n instanceof p?r=n:r=null}return!0}function G(r,e,t){if(r){if(r instanceof p)return r;if(r[S])return r[S]()}return!r&&!e&&!t?new p(E):new p(r,e,t)}var v=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function F(r){return r}function Ut(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return L(r)}function L(r){return r.length===0?F:r.length===1?r[0]:function(t){return r.reduce(function(n,i){return i(n)},t)}}var f=function(){function r(e){this._isScalar=!1,e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,n){var i=this.operator,o=G(e,t,n);if(i?o.add(i.call(o,this.source)):o.add(this.source||h.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),h.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){h.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),C(e)?e.error(t):console.warn(t)}},r.prototype.forEach=function(e,t){var n=this;return t=D(t),new t(function(i,o){var s;s=n.subscribe(function(u){try{e(u)}catch(c){o(c),s&&s.unsubscribe()}},o,i)})},r.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},r.prototype[v]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?this:L(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=D(e),new e(function(n,i){var o;t.subscribe(function(s){return o=s},function(s){return i(s)},function(){return n(o)})})},r.create=function(e){return new r(e)},r}();function D(r){if(r||(r=h.Promise||Promise),!r)throw new Error("no Promise impl found");return r}var Q=function(){function r(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return r.prototype=Object.create(Error.prototype),r}(),y=Q,K=function(r){a.__extends(e,r);function e(t,n){var i=r.call(this)||this;return i.subject=t,i.subscriber=n,i.closed=!1,i}return e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,n=t.observers;if(this.subject=null,!(!n||n.length===0||t.isStopped||t.closed)){var i=n.indexOf(this.subscriber);i!==-1&&n.splice(i,1)}}},e}(l),W=function(r){a.__extends(e,r);function e(t){var n=r.call(this,t)||this;return n.destination=t,n}return e}(p),X=function(r){a.__extends(e,r);function e(){var t=r.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype[S]=function(){return new W(this)},e.prototype.lift=function(t){var n=new Y(this,this);return n.operator=t,n},e.prototype.next=function(t){if(this.closed)throw new y;if(!this.isStopped)for(var n=this.observers,i=n.length,o=n.slice(),s=0;s<i;s++)o[s].next(t)},e.prototype.error=function(t){if(this.closed)throw new y;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var n=this.observers,i=n.length,o=n.slice(),s=0;s<i;s++)o[s].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new y;this.isStopped=!0;for(var t=this.observers,n=t.length,i=t.slice(),o=0;o<n;o++)i[o].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(t){if(this.closed)throw new y;return r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){if(this.closed)throw new y;return this.hasError?(t.error(this.thrownError),l.EMPTY):this.isStopped?(t.complete(),l.EMPTY):(this.observers.push(t),new K(this,t))},e.prototype.asObservable=function(){var t=new f;return t.source=this,t},e.create=function(t,n){return new Y(t,n)},e}(f),Y=function(r){a.__extends(e,r);function e(t,n){var i=r.call(this)||this;return i.destination=t,i.source=n,i}return e.prototype.next=function(t){var n=this.destination;n&&n.next&&n.next(t)},e.prototype.error=function(t){var n=this.destination;n&&n.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){var n=this.source;return n?this.source.subscribe(t):l.EMPTY},e}(X),Z=function(r){a.__extends(e,r);function e(t,n){return r.call(this)||this}return e.prototype.schedule=function(t,n){return this},e}(l),tt=function(r){a.__extends(e,r);function e(t,n){var i=r.call(this,t,n)||this;return i.scheduler=t,i.work=n,i.pending=!1,i}return e.prototype.schedule=function(t,n){if(n===void 0&&(n=0),this.closed)return this;this.state=t;var i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(o,this.id,n),this},e.prototype.requestAsyncId=function(t,n,i){return i===void 0&&(i=0),setInterval(t.flush.bind(t,this),i)},e.prototype.recycleAsyncId=function(t,n,i){if(i===void 0&&(i=0),i!==null&&this.delay===i&&this.pending===!1)return n;clearInterval(n)},e.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,n){var i=!1,o=void 0;try{this.work(t)}catch(s){i=!0,o=!!s&&s||new Error(s)}if(i)return this.unsubscribe(),o},e.prototype._unsubscribe=function(){var t=this.id,n=this.scheduler,i=n.actions,o=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,o!==-1&&i.splice(o,1),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null},e}(Z),k=function(){function r(e,t){t===void 0&&(t=r.now),this.SchedulerAction=e,this.now=t}return r.prototype.schedule=function(e,t,n){return t===void 0&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},r.now=function(){return Date.now()},r}(),rt=function(r){a.__extends(e,r);function e(t,n){n===void 0&&(n=k.now);var i=r.call(this,t,function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return e.prototype.schedule=function(t,n,i){return n===void 0&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(t,n,i):r.prototype.schedule.call(this,t,n,i)},e.prototype.flush=function(t){var n=this.actions;if(this.active){n.push(t);return}var i;this.active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=n.shift());if(this.active=!1,i){for(;t=n.shift();)t.unsubscribe();throw i}},e}(k);function T(r){return r&&typeof r.schedule=="function"}var R=function(r){return function(e){for(var t=0,n=r.length;t<n&&!e.closed;t++)e.next(r[t]);e.complete()}};function O(r,e){return new f(function(t){var n=new l,i=0;return n.add(e.schedule(function(){if(i===r.length){t.complete();return}t.next(r[i++]),t.closed||n.add(this.schedule())})),n})}function et(r,e){return e?O(r,e):new f(R(r))}var nt=new rt(tt),it=nt;function q(r,e){return function(n){if(typeof r!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new ot(r,e))}}var ot=function(){function r(e,t){this.project=e,this.thisArg=t}return r.prototype.call=function(e,t){return t.subscribe(new st(e,this.project,this.thisArg))},r}(),st=function(r){a.__extends(e,r);function e(t,n,i){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=i||o,o}return e.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(n)},e}(p),ut=function(r){return function(e){return r.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,d),e}};function ct(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var g=ct(),ft=function(r){return function(e){var t=r[g]();do{var n=void 0;try{n=t.next()}catch(i){return e.error(i),e}if(n.done){e.complete();break}if(e.next(n.value),e.closed)break}while(!0);return typeof t.return=="function"&&e.add(function(){t.return&&t.return()}),e}},at=function(r){return function(e){var t=r[v]();if(typeof t.subscribe!="function")throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)}},J=function(r){return r&&typeof r.length=="number"&&typeof r!="function"};function N(r){return!!r&&typeof r.subscribe!="function"&&typeof r.then=="function"}var $=function(r){if(r&&typeof r[v]=="function")return at(r);if(J(r))return R(r);if(N(r))return ut(r);if(r&&typeof r[g]=="function")return ft(r);var e=V(r)?"an invalid object":"'"+r+"'",t="You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";throw new TypeError(t)};function ht(r,e){return new f(function(t){var n=new l;return n.add(e.schedule(function(){var i=r[v]();n.add(i.subscribe({next:function(o){n.add(e.schedule(function(){return t.next(o)}))},error:function(o){n.add(e.schedule(function(){return t.error(o)}))},complete:function(){n.add(e.schedule(function(){return t.complete()}))}}))})),n})}function lt(r,e){return new f(function(t){var n=new l;return n.add(e.schedule(function(){return r.then(function(i){n.add(e.schedule(function(){t.next(i),n.add(e.schedule(function(){return t.complete()}))}))},function(i){n.add(e.schedule(function(){return t.error(i)}))})})),n})}function pt(r,e){if(!r)throw new Error("Iterable cannot be null");return new f(function(t){var n=new l,i;return n.add(function(){i&&typeof i.return=="function"&&i.return()}),n.add(e.schedule(function(){i=r[g](),n.add(e.schedule(function(){if(!t.closed){var o,s;try{var u=i.next();o=u.value,s=u.done}catch(c){t.error(c);return}s?t.complete():(t.next(o),this.schedule())}}))})),n})}function dt(r){return r&&typeof r[v]=="function"}function bt(r){return r&&typeof r[g]=="function"}function yt(r,e){if(r!=null){if(dt(r))return ht(r,e);if(N(r))return lt(r,e);if(J(r))return O(r,e);if(bt(r)||typeof r=="string")return pt(r,e)}throw new TypeError((r!==null&&typeof r||r)+" is not observable")}function vt(r,e){return e?yt(r,e):r instanceof f?r:new f($(r))}var _t=function(r){a.__extends(e,r);function e(t){var n=r.call(this)||this;return n.parent=t,n}return e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(p),wt=function(r){a.__extends(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(p);function mt(r,e){if(!e.closed){if(r instanceof f)return r.subscribe(e);var t;try{t=$(r)(e)}catch(n){e.error(n)}return t}}function P(r,e,t){return t===void 0&&(t=Number.POSITIVE_INFINITY),typeof e=="function"?function(n){return n.pipe(P(function(i,o){return vt(r(i,o)).pipe(q(function(s,u){return e(i,s,o,u)}))},t))}:(typeof e=="number"&&(t=e),function(n){return n.lift(new Et(r,t))})}var Et=function(){function r(e,t){t===void 0&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return r.prototype.call=function(e,t){return t.subscribe(new St(e,this.project,this.concurrent))},r}(),St=function(r){a.__extends(e,r);function e(t,n,i){i===void 0&&(i=Number.POSITIVE_INFINITY);var o=r.call(this,t)||this;return o.project=n,o.concurrent=i,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var n,i=this.index++;try{n=this.project(t,i)}catch(o){this.destination.error(o);return}this.active++,this._innerSub(n)},e.prototype._innerSub=function(t){var n=new _t(this),i=this.destination;i.add(n);var o=mt(t,n);o!==n&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,this.active===0&&this.buffer.length===0&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):this.active===0&&this.hasCompleted&&this.destination.complete()},e}(wt),jt=P;function gt(r){return r===void 0&&(r=Number.POSITIVE_INFINITY),P(F,r)}function xt(r,e,t,n){return m(t)&&(n=t,t=void 0),n?xt(r,e,t).pipe(q(function(i){return A(i)?n.apply(void 0,i):n(i)})):new f(function(i){function o(s){arguments.length>1?i.next(Array.prototype.slice.call(arguments)):i.next(s)}z(r,e,o,i,t)})}function z(r,e,t,n,i){var o;if(At(r)){var s=r;r.addEventListener(e,t,i),o=function(){return s.removeEventListener(e,t,i)}}else if(Tt(r)){var u=r;r.on(e,t),o=function(){return u.off(e,t)}}else if(It(r)){var c=r;r.addListener(e,t),o=function(){return c.removeListener(e,t)}}else if(r&&r.length)for(var b=0,_=r.length;b<_;b++)z(r[b],e,t,n,i);else throw new TypeError("Invalid event target");n.add(o)}function It(r){return r&&typeof r.addListener=="function"&&typeof r.removeListener=="function"}function Tt(r){return r&&typeof r.on=="function"&&typeof r.off=="function"}function At(r){return r&&typeof r.addEventListener=="function"&&typeof r.removeEventListener=="function"}function H(r){return!A(r)&&r-parseFloat(r)+1>=0}function Dt(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t=Number.POSITIVE_INFINITY,n=null,i=r[r.length-1];return T(i)?(n=r.pop(),r.length>1&&typeof r[r.length-1]=="number"&&(t=r.pop())):typeof i=="number"&&(t=r.pop()),n===null&&r.length===1&&r[0]instanceof f?r[0]:gt(t)(et(r,n))}function Yt(r,e,t){r===void 0&&(r=0);var n=-1;return H(e)?n=Number(e)<1&&1||Number(e):T(e)&&(t=e),T(t)||(t=it),new f(function(i){var o=H(r)?r:+r-t.now();return t.schedule(Pt,o,{index:0,period:n,subscriber:i})})}function Pt(r){var e=r.index,t=r.period,n=r.subscriber;if(n.next(e),!n.closed){if(t===-1)return n.complete();r.index=e+1,this.schedule(r,t)}}export{tt as A,wt as B,k as C,nt as D,h as E,v as F,Ut as G,yt as H,P as I,jt as J,f as O,X as S,w as U,p as a,l as b,W as c,y as d,rt as e,xt as f,et as g,K as h,T as i,q as j,A as k,C as l,Dt as m,$ as n,gt as o,vt as p,V as q,m as r,O as s,Yt as t,F as u,H as v,it as w,g as x,mt as y,_t as z};
