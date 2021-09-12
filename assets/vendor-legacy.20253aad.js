System.register([],(function(t){"use strict";return{execute:function(){function e(){}function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let d,a;function u(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function p(t){let e;return u(t,(t=>e=t))(),e}function s(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function v(){return y("")}function N(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:$(t,o,e[o])}t({A:function(){z.r||c(z.c),z=z.p},B:h,C:v,E:function(t,e,n){t.classList[n?"add":"remove"](e)},F:c,a:$,b:m,d:f,e:g,f:function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))},g:function(t){t&&t.c()},h:b,i:F,j:s,k:function(t){C.push(t)},l:N,m:V,n:e,o:function(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),z.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}},p:q,q:y,r:function(t,e,n,o){t.style.setProperty(e,n,o?"important":"")},s:i,t:U,u:function(t,e){return d||(d=document.createElement("a")),d.href=e,t===d.href},v:function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)},w:function(t,e){const n="undefined"!=typeof localStorage;function o(t,e){n&&localStorage.setItem(t,JSON.stringify(e))}if(!Ae[t]){const r=Ee(e,(e=>{const o=n?localStorage.getItem(t):null;if(o&&e(JSON.parse(o)),n){const n=n=>{n.key===t&&e(n.newValue?JSON.parse(n.newValue):null)};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}})),{subscribe:c,set:l}=r;Ae[t]={set(e){o(t,e),l(e)},update(e){const n=e(p(r));o(t,n),l(n)},subscribe:c}}return Ae[t]},x:Ee,y:function(t,e,n){t.$$.on_destroy.push(u(e,n))},z:function(){z={r:0,c:[],p:z}}});class k{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=g(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}function x(t){a=t}function _(){if(!a)throw new Error("Function called outside component initialization");return a}function T(){const t=_();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const L=[],E=t("c",[]),A=[],C=[],j=Promise.resolve();let D=!1;function O(t){A.push(t)}let M=!1;const P=new Set;function I(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),J(e.$$)}for(x(null),L.length=0;E.length;)E.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];P.has(e)||(P.add(e),e())}A.length=0}while(L.length);for(;C.length;)C.pop()();D=!1,M=!1,P.clear()}}function J(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const G=new Set;let z;function U(t,e){t&&t.i&&(G.delete(t),t.i(e))}function H(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const l=t[c],i=e[c];if(i){for(const t in l)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[c]=i}else for(const t in l)r[t]=1}for(const l in o)l in n||(n[l]=void 0);return n}function V(t,e,n,r){const{fragment:i,on_mount:d,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,n),r||O((()=>{const e=d.map(o).filter(l);a?a.push(...e):c(e),t.$$.on_mount=[]})),u.forEach(O)}function q(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,j.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,n,o,l,i,d,u,p=[-1]){const s=a;x(t);const m=t.$$={fragment:null,ctx:null,props:d,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:n.context||[]),callbacks:r(),dirty:p,skip_bound:!1,root:n.target||s.$$.root};u&&u(m.root);let h=!1;if(m.ctx=o?o(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&i(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),h&&B(t,e)),n})):[],m.update(),h=!0,c(m.before_update),m.fragment=!!l&&l(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();n.intro&&U(t.$$.fragment),V(t,n.target,n.anchor,n.customElement),I()}x(s)}t("G","undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global);class R{$destroy(){q(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const o=t.slice();return o[15]=e[n],o}function K(t,e,n){const o=t.slice();return o[15]=e[n],o}function Q(t,e,n){const o=t.slice();return o[20]=e[n],o}function X(t,e,n){const o=t.slice();return o[23]=e[n],o}function Y(t,e,n){const o=t.slice();return o[15]=e[n],o}function Z(t,e,n){const o=t.slice();return o[37]=e[n],o}function tt(t,e,n){const o=t.slice();return o[40]=e[n],o}function et(t,e,n){const o=t.slice();return o[43]=e[n],o}function nt(t,e,n){const o=t.slice();return o[15]=e[n],o}function ot(t,e,n){const o=t.slice();return o[28]=e[n],o}function rt(t,e,n){const o=t.slice();return o[15]=e[n],o}function ct(t,e,n){const o=t.slice();return o[28]=e[n],o}function lt(t,e,n){const o=t.slice();return o[46]=e[n],o}function it(t){return document.title=t[0],{c:e,m:e,d:e}}function dt(t){let e;return{c(){e=g("meta"),$(e,"name","description"),$(e,"content",t[3])},m(t,n){m(t,e,n)},p(t,n){8&n[0]&&$(e,"content",t[3])},d(t){t&&f(e)}}}function at(t){let e;return{c(){e=g("link"),$(e,"rel","canonical"),$(e,"href",t[9])},m(t,n){m(t,e,n)},p(t,n){512&n[0]&&$(e,"href",t[9])},d(t){t&&f(e)}}}function ut(t){let e,n,o;return{c(){e=g("link"),$(e,"rel","alternate"),$(e,"media",n=t[4].media),$(e,"href",o=t[4].href)},m(t,n){m(t,e,n)},p(t,r){16&r[0]&&n!==(n=t[4].media)&&$(e,"media",n),16&r[0]&&o!==(o=t[4].href)&&$(e,"href",o)},d(t){t&&f(e)}}}function pt(t){let e,n=t[5],o=[];for(let r=0;r<n.length;r+=1)o[r]=st(lt(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(32&r[0]){let c;for(n=t[5],c=0;c<n.length;c+=1){const l=lt(t,n,c);o[c]?o[c].p(l,r):(o[c]=st(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function st(t){let e,n,o;return{c(){e=g("link"),$(e,"rel","alternate"),$(e,"hreflang",n=t[46].hrefLang),$(e,"href",o=t[46].href)},m(t,n){m(t,e,n)},p(t,r){32&r[0]&&n!==(n=t[46].hrefLang)&&$(e,"hreflang",n),32&r[0]&&o!==(o=t[46].href)&&$(e,"href",o)},d(t){t&&f(e)}}}function mt(t){let e,n,o,r=t[6].cardType&&ft(t),c=t[6].site&&ht(t),l=t[6].handle&&gt(t);return{c(){r&&r.c(),e=b(),c&&c.c(),n=b(),l&&l.c(),o=v()},m(t,i){r&&r.m(t,i),m(t,e,i),c&&c.m(t,i),m(t,n,i),l&&l.m(t,i),m(t,o,i)},p(t,i){t[6].cardType?r?r.p(t,i):(r=ft(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[6].site?c?c.p(t,i):(c=ht(t),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[6].handle?l?l.p(t,i):(l=gt(t),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(t){r&&r.d(t),t&&f(e),c&&c.d(t),t&&f(n),l&&l.d(t),t&&f(o)}}}function ft(t){let e,n;return{c(){e=g("meta"),$(e,"name","twitter:card"),$(e,"content",n=t[6].cardType)},m(t,n){m(t,e,n)},p(t,o){64&o[0]&&n!==(n=t[6].cardType)&&$(e,"content",n)},d(t){t&&f(e)}}}function ht(t){let e,n;return{c(){e=g("meta"),$(e,"name","twitter:site"),$(e,"content",n=t[6].site)},m(t,n){m(t,e,n)},p(t,o){64&o[0]&&n!==(n=t[6].site)&&$(e,"content",n)},d(t){t&&f(e)}}}function gt(t){let e,n;return{c(){e=g("meta"),$(e,"name","twitter:creator"),$(e,"content",n=t[6].handle)},m(t,n){m(t,e,n)},p(t,o){64&o[0]&&n!==(n=t[6].handle)&&$(e,"content",n)},d(t){t&&f(e)}}}function yt(t){let e,n;return{c(){e=g("meta"),$(e,"property","fb:app_id"),$(e,"content",n=t[7].appId)},m(t,n){m(t,e,n)},p(t,o){128&o[0]&&n!==(n=t[7].appId)&&$(e,"content",n)},d(t){t&&f(e)}}}function bt(t){let e,n,o,r,c,l,i,d,a=(t[8].url||t[9])&&vt(t),u=t[8].type&&Nt(t),p=(t[8].title||t[0])&&ne(t),s=(t[8].description||t[3])&&oe(t),h=t[8].images&&t[8].images.length&&re(t),g=t[8].videos&&t[8].videos.length&&ae(t),y=t[8].locale&&ge(t),N=t[8].site_name&&ye(t);return{c(){a&&a.c(),e=b(),u&&u.c(),n=b(),p&&p.c(),o=b(),s&&s.c(),r=b(),h&&h.c(),c=b(),g&&g.c(),l=b(),y&&y.c(),i=b(),N&&N.c(),d=v()},m(t,f){a&&a.m(t,f),m(t,e,f),u&&u.m(t,f),m(t,n,f),p&&p.m(t,f),m(t,o,f),s&&s.m(t,f),m(t,r,f),h&&h.m(t,f),m(t,c,f),g&&g.m(t,f),m(t,l,f),y&&y.m(t,f),m(t,i,f),N&&N.m(t,f),m(t,d,f)},p(t,m){t[8].url||t[9]?a?a.p(t,m):(a=vt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),t[8].type?u?u.p(t,m):(u=Nt(t),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null),t[8].title||t[0]?p?p.p(t,m):(p=ne(t),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),t[8].description||t[3]?s?s.p(t,m):(s=oe(t),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null),t[8].images&&t[8].images.length?h?h.p(t,m):(h=re(t),h.c(),h.m(c.parentNode,c)):h&&(h.d(1),h=null),t[8].videos&&t[8].videos.length?g?g.p(t,m):(g=ae(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[8].locale?y?y.p(t,m):(y=ge(t),y.c(),y.m(i.parentNode,i)):y&&(y.d(1),y=null),t[8].site_name?N?N.p(t,m):(N=ye(t),N.c(),N.m(d.parentNode,d)):N&&(N.d(1),N=null)},d(t){a&&a.d(t),t&&f(e),u&&u.d(t),t&&f(n),p&&p.d(t),t&&f(o),s&&s.d(t),t&&f(r),h&&h.d(t),t&&f(c),g&&g.d(t),t&&f(l),y&&y.d(t),t&&f(i),N&&N.d(t),t&&f(d)}}}function vt(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:url"),$(e,"content",n=t[8].url||t[9])},m(t,n){m(t,e,n)},p(t,o){768&o[0]&&n!==(n=t[8].url||t[9])&&$(e,"content",n)},d(t){t&&f(e)}}}function Nt(t){let e,n,o,r,c,l,i,d;function a(t,e){return(null==r||256&e[0])&&(r=!("profile"!==t[8].type.toLowerCase()||!t[8].profile)),r?xt:((null==c||256&e[0])&&(c=!("book"!==t[8].type.toLowerCase()||!t[8].book)),c?kt:((null==l||256&e[0])&&(l=!("article"!==t[8].type.toLowerCase()||!t[8].article)),l?wt:((null==i||256&e[0])&&(i=!!("video.movie"===t[8].type.toLowerCase()||"video.episode"===t[8].type.toLowerCase()||"video.tv_show"===t[8].type.toLowerCase()||"video.other"===t[8].type.toLowerCase()&&t[8].video)),i?$t:void 0)))}let u=a(t,[-1,-1]),p=u&&u(t);return{c(){e=g("meta"),o=b(),p&&p.c(),d=v(),$(e,"property","og:type"),$(e,"content",n=t[8].type.toLowerCase())},m(t,n){m(t,e,n),m(t,o,n),p&&p.m(t,n),m(t,d,n)},p(t,o){256&o[0]&&n!==(n=t[8].type.toLowerCase())&&$(e,"content",n),u===(u=a(t,o))&&p?p.p(t,o):(p&&p.d(1),p=u&&u(t),p&&(p.c(),p.m(d.parentNode,d)))},d(t){t&&f(e),t&&f(o),p&&p.d(t),t&&f(d)}}}function $t(t){let e,n,o,r,c,l,i,d=t[8].video.actors&&t[8].video.actors.length&&_t(t),a=t[8].video.directors&&t[8].video.directors.length&&Et(t),u=t[8].video.writers&&t[8].video.writers.length&&Ct(t),p=t[8].video.duration&&Dt(t),s=t[8].video.releaseDate&&Ot(t),h=t[8].video.tags&&t[8].video.tags.length&&Mt(t),g=t[8].video.series&&It(t);return{c(){d&&d.c(),e=b(),a&&a.c(),n=b(),u&&u.c(),o=b(),p&&p.c(),r=b(),s&&s.c(),c=b(),h&&h.c(),l=b(),g&&g.c(),i=v()},m(t,f){d&&d.m(t,f),m(t,e,f),a&&a.m(t,f),m(t,n,f),u&&u.m(t,f),m(t,o,f),p&&p.m(t,f),m(t,r,f),s&&s.m(t,f),m(t,c,f),h&&h.m(t,f),m(t,l,f),g&&g.m(t,f),m(t,i,f)},p(t,m){t[8].video.actors&&t[8].video.actors.length?d?d.p(t,m):(d=_t(t),d.c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null),t[8].video.directors&&t[8].video.directors.length?a?a.p(t,m):(a=Et(t),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null),t[8].video.writers&&t[8].video.writers.length?u?u.p(t,m):(u=Ct(t),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),t[8].video.duration?p?p.p(t,m):(p=Dt(t),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null),t[8].video.releaseDate?s?s.p(t,m):(s=Ot(t),s.c(),s.m(c.parentNode,c)):s&&(s.d(1),s=null),t[8].video.tags&&t[8].video.tags.length?h?h.p(t,m):(h=Mt(t),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null),t[8].video.series?g?g.p(t,m):(g=It(t),g.c(),g.m(i.parentNode,i)):g&&(g.d(1),g=null)},d(t){d&&d.d(t),t&&f(e),a&&a.d(t),t&&f(n),u&&u.d(t),t&&f(o),p&&p.d(t),t&&f(r),s&&s.d(t),t&&f(c),h&&h.d(t),t&&f(l),g&&g.d(t),t&&f(i)}}}function wt(t){let e,n,o,r,c,l,i=t[8].article.publishedTime&&Jt(t),d=t[8].article.modifiedTime&&Gt(t),a=t[8].article.expirationTime&&zt(t),u=t[8].article.authors&&t[8].article.authors.length&&Ut(t),p=t[8].article.section&&Vt(t),s=t[8].article.tags&&t[8].article.tags.length&&qt(t);return{c(){i&&i.c(),e=b(),d&&d.c(),n=b(),a&&a.c(),o=b(),u&&u.c(),r=b(),p&&p.c(),c=b(),s&&s.c(),l=v()},m(t,f){i&&i.m(t,f),m(t,e,f),d&&d.m(t,f),m(t,n,f),a&&a.m(t,f),m(t,o,f),u&&u.m(t,f),m(t,r,f),p&&p.m(t,f),m(t,c,f),s&&s.m(t,f),m(t,l,f)},p(t,m){t[8].article.publishedTime?i?i.p(t,m):(i=Jt(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),t[8].article.modifiedTime?d?d.p(t,m):(d=Gt(t),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null),t[8].article.expirationTime?a?a.p(t,m):(a=zt(t),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null),t[8].article.authors&&t[8].article.authors.length?u?u.p(t,m):(u=Ut(t),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),t[8].article.section?p?p.p(t,m):(p=Vt(t),p.c(),p.m(c.parentNode,c)):p&&(p.d(1),p=null),t[8].article.tags&&t[8].article.tags.length?s?s.p(t,m):(s=qt(t),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(t){i&&i.d(t),t&&f(e),d&&d.d(t),t&&f(n),a&&a.d(t),t&&f(o),u&&u.d(t),t&&f(r),p&&p.d(t),t&&f(c),s&&s.d(t),t&&f(l)}}}function kt(t){let e,n,o,r,c=t[8].book.authors&&t[8].book.authors.length&&Ft(t),l=t[8].book.isbn&&Wt(t),i=t[8].book.releaseDate&&Kt(t),d=t[8].book.tags&&t[8].book.tags.length&&Qt(t);return{c(){c&&c.c(),e=b(),l&&l.c(),n=b(),i&&i.c(),o=b(),d&&d.c(),r=v()},m(t,a){c&&c.m(t,a),m(t,e,a),l&&l.m(t,a),m(t,n,a),i&&i.m(t,a),m(t,o,a),d&&d.m(t,a),m(t,r,a)},p(t,a){t[8].book.authors&&t[8].book.authors.length?c?c.p(t,a):(c=Ft(t),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),t[8].book.isbn?l?l.p(t,a):(l=Wt(t),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),t[8].book.releaseDate?i?i.p(t,a):(i=Kt(t),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null),t[8].book.tags&&t[8].book.tags.length?d?d.p(t,a):(d=Qt(t),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},d(t){c&&c.d(t),t&&f(e),l&&l.d(t),t&&f(n),i&&i.d(t),t&&f(o),d&&d.d(t),t&&f(r)}}}function xt(t){let e,n,o,r,c=t[8].profile.firstName&&Yt(t),l=t[8].profile.lastName&&Zt(t),i=t[8].profile.username&&te(t),d=t[8].profile.gender&&ee(t);return{c(){c&&c.c(),e=b(),l&&l.c(),n=b(),i&&i.c(),o=b(),d&&d.c(),r=v()},m(t,a){c&&c.m(t,a),m(t,e,a),l&&l.m(t,a),m(t,n,a),i&&i.m(t,a),m(t,o,a),d&&d.m(t,a),m(t,r,a)},p(t,a){t[8].profile.firstName?c?c.p(t,a):(c=Yt(t),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),t[8].profile.lastName?l?l.p(t,a):(l=Zt(t),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),t[8].profile.username?i?i.p(t,a):(i=te(t),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null),t[8].profile.gender?d?d.p(t,a):(d=ee(t),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},d(t){c&&c.d(t),t&&f(e),l&&l.d(t),t&&f(n),i&&i.d(t),t&&f(o),d&&d.d(t),t&&f(r)}}}function _t(t){let e,n=t[8].video.actors,o=[];for(let r=0;r<n.length;r+=1)o[r]=Lt(et(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].video.actors,c=0;c<n.length;c+=1){const l=et(t,n,c);o[c]?o[c].p(l,r):(o[c]=Lt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Tt(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:actor"),$(e,"content",n=t[43].profile)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[43].profile)&&$(e,"content",n)},d(t){t&&f(e)}}}function St(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:actor:role"),$(e,"content",n=t[43].role)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[43].role)&&$(e,"content",n)},d(t){t&&f(e)}}}function Lt(t){let e,n,o=t[43].profile&&Tt(t),r=t[43].role&&St(t);return{c(){o&&o.c(),e=b(),r&&r.c(),n=v()},m(t,c){o&&o.m(t,c),m(t,e,c),r&&r.m(t,c),m(t,n,c)},p(t,c){t[43].profile?o?o.p(t,c):(o=Tt(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),t[43].role?r?r.p(t,c):(r=St(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(t){o&&o.d(t),t&&f(e),r&&r.d(t),t&&f(n)}}}function Et(t){let e,n=t[8].video.directors,o=[];for(let r=0;r<n.length;r+=1)o[r]=At(tt(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].video.directors,c=0;c<n.length;c+=1){const l=tt(t,n,c);o[c]?o[c].p(l,r):(o[c]=At(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function At(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:director"),$(e,"content",n=t[40])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[40])&&$(e,"content",n)},d(t){t&&f(e)}}}function Ct(t){let e,n=t[8].video.writers,o=[];for(let r=0;r<n.length;r+=1)o[r]=jt(Z(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].video.writers,c=0;c<n.length;c+=1){const l=Z(t,n,c);o[c]?o[c].p(l,r):(o[c]=jt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function jt(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:writer"),$(e,"content",n=t[37])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[37])&&$(e,"content",n)},d(t){t&&f(e)}}}function Dt(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:duration"),$(e,"content",n=t[8].video.duration.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].video.duration.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function Ot(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:release_date"),$(e,"content",n=t[8].video.releaseDate)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].video.releaseDate)&&$(e,"content",n)},d(t){t&&f(e)}}}function Mt(t){let e,n=t[8].video.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=Pt(Y(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].video.tags,c=0;c<n.length;c+=1){const l=Y(t,n,c);o[c]?o[c].p(l,r):(o[c]=Pt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Pt(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:tag"),$(e,"content",n=t[15])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[15])&&$(e,"content",n)},d(t){t&&f(e)}}}function It(t){let e,n;return{c(){e=g("meta"),$(e,"property","video:series"),$(e,"content",n=t[8].video.series)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].video.series)&&$(e,"content",n)},d(t){t&&f(e)}}}function Jt(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:published_time"),$(e,"content",n=t[8].article.publishedTime)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].article.publishedTime)&&$(e,"content",n)},d(t){t&&f(e)}}}function Gt(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:modified_time"),$(e,"content",n=t[8].article.modifiedTime)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].article.modifiedTime)&&$(e,"content",n)},d(t){t&&f(e)}}}function zt(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:expiration_time"),$(e,"content",n=t[8].article.expirationTime)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].article.expirationTime)&&$(e,"content",n)},d(t){t&&f(e)}}}function Ut(t){let e,n=t[8].article.authors,o=[];for(let r=0;r<n.length;r+=1)o[r]=Ht(ot(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].article.authors,c=0;c<n.length;c+=1){const l=ot(t,n,c);o[c]?o[c].p(l,r):(o[c]=Ht(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Ht(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:author"),$(e,"content",n=t[28])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[28])&&$(e,"content",n)},d(t){t&&f(e)}}}function Vt(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:section"),$(e,"content",n=t[8].article.section)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].article.section)&&$(e,"content",n)},d(t){t&&f(e)}}}function qt(t){let e,n=t[8].article.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=Bt(nt(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].article.tags,c=0;c<n.length;c+=1){const l=nt(t,n,c);o[c]?o[c].p(l,r):(o[c]=Bt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Bt(t){let e,n;return{c(){e=g("meta"),$(e,"property","article:tag"),$(e,"content",n=t[15])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[15])&&$(e,"content",n)},d(t){t&&f(e)}}}function Ft(t){let e,n=t[8].book.authors,o=[];for(let r=0;r<n.length;r+=1)o[r]=Rt(ct(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].book.authors,c=0;c<n.length;c+=1){const l=ct(t,n,c);o[c]?o[c].p(l,r):(o[c]=Rt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Rt(t){let e,n;return{c(){e=g("meta"),$(e,"property","book:author"),$(e,"content",n=t[28])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[28])&&$(e,"content",n)},d(t){t&&f(e)}}}function Wt(t){let e,n;return{c(){e=g("meta"),$(e,"property","book:isbn"),$(e,"content",n=t[8].book.isbn)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].book.isbn)&&$(e,"content",n)},d(t){t&&f(e)}}}function Kt(t){let e,n;return{c(){e=g("meta"),$(e,"property","book:release_date"),$(e,"content",n=t[8].book.releaseDate)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].book.releaseDate)&&$(e,"content",n)},d(t){t&&f(e)}}}function Qt(t){let e,n=t[8].book.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=Xt(rt(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].book.tags,c=0;c<n.length;c+=1){const l=rt(t,n,c);o[c]?o[c].p(l,r):(o[c]=Xt(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function Xt(t){let e,n;return{c(){e=g("meta"),$(e,"property","book:tag"),$(e,"content",n=t[15])},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[15])&&$(e,"content",n)},d(t){t&&f(e)}}}function Yt(t){let e,n;return{c(){e=g("meta"),$(e,"property","profile:first_name"),$(e,"content",n=t[8].profile.firstName)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].profile.firstName)&&$(e,"content",n)},d(t){t&&f(e)}}}function Zt(t){let e,n;return{c(){e=g("meta"),$(e,"property","profile:last_name"),$(e,"content",n=t[8].profile.lastName)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].profile.lastName)&&$(e,"content",n)},d(t){t&&f(e)}}}function te(t){let e,n;return{c(){e=g("meta"),$(e,"property","profile:username"),$(e,"content",n=t[8].profile.username)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].profile.username)&&$(e,"content",n)},d(t){t&&f(e)}}}function ee(t){let e,n;return{c(){e=g("meta"),$(e,"property","profile:gender"),$(e,"content",n=t[8].profile.gender)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].profile.gender)&&$(e,"content",n)},d(t){t&&f(e)}}}function ne(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:title"),$(e,"content",n=t[8].title||t[0])},m(t,n){m(t,e,n)},p(t,o){257&o[0]&&n!==(n=t[8].title||t[0])&&$(e,"content",n)},d(t){t&&f(e)}}}function oe(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:description"),$(e,"content",n=t[8].description||t[3])},m(t,n){m(t,e,n)},p(t,o){264&o[0]&&n!==(n=t[8].description||t[3])&&$(e,"content",n)},d(t){t&&f(e)}}}function re(t){let e,n=t[8].images,o=[];for(let r=0;r<n.length;r+=1)o[r]=de(X(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].images,c=0;c<n.length;c+=1){const l=X(t,n,c);o[c]?o[c].p(l,r):(o[c]=de(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function ce(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:image:alt"),$(e,"content",n=t[23].alt)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[23].alt)&&$(e,"content",n)},d(t){t&&f(e)}}}function le(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:image:width"),$(e,"content",n=t[23].width.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[23].width.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function ie(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:image:height"),$(e,"content",n=t[23].height.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[23].height.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function de(t){let e,n,o,r,c,l,i=t[23].alt&&ce(t),d=t[23].width&&le(t),a=t[23].height&&ie(t);return{c(){e=g("meta"),o=b(),i&&i.c(),r=b(),d&&d.c(),c=b(),a&&a.c(),l=v(),$(e,"property","og:image"),$(e,"content",n=t[23].url)},m(t,n){m(t,e,n),m(t,o,n),i&&i.m(t,n),m(t,r,n),d&&d.m(t,n),m(t,c,n),a&&a.m(t,n),m(t,l,n)},p(t,o){256&o[0]&&n!==(n=t[23].url)&&$(e,"content",n),t[23].alt?i?i.p(t,o):(i=ce(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null),t[23].width?d?d.p(t,o):(d=le(t),d.c(),d.m(c.parentNode,c)):d&&(d.d(1),d=null),t[23].height?a?a.p(t,o):(a=ie(t),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},d(t){t&&f(e),t&&f(o),i&&i.d(t),t&&f(r),d&&d.d(t),t&&f(c),a&&a.d(t),t&&f(l)}}}function ae(t){let e,n=t[8].videos,o=[];for(let r=0;r<n.length;r+=1)o[r]=he(Q(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(256&r[0]){let c;for(n=t[8].videos,c=0;c<n.length;c+=1){const l=Q(t,n,c);o[c]?o[c].p(l,r):(o[c]=he(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function ue(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:video:alt"),$(e,"content",n=t[20].alt)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[20].alt)&&$(e,"content",n)},d(t){t&&f(e)}}}function pe(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:video:width"),$(e,"content",n=t[20].width.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[20].width.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function se(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:video:height"),$(e,"content",n=t[20].height.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[20].height.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function me(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:video:secure_url"),$(e,"content",n=t[20].secureUrl.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[20].secureUrl.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function fe(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:video:type"),$(e,"content",n=t[20].type.toString())},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[20].type.toString())&&$(e,"content",n)},d(t){t&&f(e)}}}function he(t){let e,n,o,r,c,l,i,d,a=t[20].alt&&ue(t),u=t[20].width&&pe(t),p=t[20].height&&se(t),s=t[20].secureUrl&&me(t),h=t[20].type&&fe(t);return{c(){e=g("meta"),o=b(),a&&a.c(),r=b(),u&&u.c(),c=b(),p&&p.c(),l=b(),s&&s.c(),i=b(),h&&h.c(),d=v(),$(e,"property","og:video"),$(e,"content",n=t[20].url)},m(t,n){m(t,e,n),m(t,o,n),a&&a.m(t,n),m(t,r,n),u&&u.m(t,n),m(t,c,n),p&&p.m(t,n),m(t,l,n),s&&s.m(t,n),m(t,i,n),h&&h.m(t,n),m(t,d,n)},p(t,o){256&o[0]&&n!==(n=t[20].url)&&$(e,"content",n),t[20].alt?a?a.p(t,o):(a=ue(t),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),t[20].width?u?u.p(t,o):(u=pe(t),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null),t[20].height?p?p.p(t,o):(p=se(t),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),t[20].secureUrl?s?s.p(t,o):(s=me(t),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null),t[20].type?h?h.p(t,o):(h=fe(t),h.c(),h.m(d.parentNode,d)):h&&(h.d(1),h=null)},d(t){t&&f(e),t&&f(o),a&&a.d(t),t&&f(r),u&&u.d(t),t&&f(c),p&&p.d(t),t&&f(l),s&&s.d(t),t&&f(i),h&&h.d(t),t&&f(d)}}}function ge(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:locale"),$(e,"content",n=t[8].locale)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].locale)&&$(e,"content",n)},d(t){t&&f(e)}}}function ye(t){let e,n;return{c(){e=g("meta"),$(e,"property","og:site_name"),$(e,"content",n=t[8].site_name)},m(t,n){m(t,e,n)},p(t,o){256&o[0]&&n!==(n=t[8].site_name)&&$(e,"content",n)},d(t){t&&f(e)}}}function be(t){let e,n=t[10],o=[];for(let r=0;r<n.length;r+=1)o[r]=ve(K(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(1024&r[0]){let c;for(n=t[10],c=0;c<n.length;c+=1){const l=K(t,n,c);o[c]?o[c].p(l,r):(o[c]=ve(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function ve(t){let e,o=[t[15]],r={};for(let c=0;c<o.length;c+=1)r=n(r,o[c]);return{c(){e=g("meta"),w(e,r)},m(t,n){m(t,e,n)},p(t,n){w(e,r=H(o,[1024&n[0]&&t[15]]))},d(t){t&&f(e)}}}function Ne(t){let e,n=t[11],o=[];for(let r=0;r<n.length;r+=1)o[r]=$e(W(t,n,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,r){if(2048&r[0]){let c;for(n=t[11],c=0;c<n.length;c+=1){const l=W(t,n,c);o[c]?o[c].p(l,r):(o[c]=$e(l),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){h(o,t),t&&f(e)}}}function $e(t){let e,o=[t[15]],r={};for(let c=0;c<o.length;c+=1)r=n(r,o[c]);return{c(){e=g("link"),w(e,r)},m(t,n){m(t,e,n)},p(t,n){w(e,r=H(o,[2048&n[0]&&t[15]]))},d(t){t&&f(e)}}}function we(t){let e,n,o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[12]})+"<"}/script>`;return{c(){e=new k,n=v(),e.a=n},m(t,r){e.m(o,t,r),m(t,n,r)},p(t,n){4096&n[0]&&o!==(o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[12]})+"<"}/script>`)&&e.p(o)},d(t){t&&f(n),t&&e.d()}}}function ke(t){let n,o,r,c,l,i,d,a,u,p,m,h,y,b,N=t[0]&&it(t),w=t[3]&&dt(t),k=t[9]&&at(t),x=t[4]&&ut(t),_=t[5]&&t[5].length>0&&pt(t),T=t[6]&&mt(t),S=t[7]&&yt(t),L=t[8]&&bt(t),E=t[10]&&t[10].length>0&&be(t),A=t[11]?.length&&Ne(t),C=t[12]&&we(t);return{c(){N&&N.c(),n=g("meta"),r=g("meta"),w&&w.c(),l=v(),k&&k.c(),i=v(),x&&x.c(),d=v(),_&&_.c(),a=v(),T&&T.c(),u=v(),S&&S.c(),p=v(),L&&L.c(),m=v(),E&&E.c(),h=v(),A&&A.c(),y=v(),C&&C.c(),b=v(),$(n,"name","robots"),$(n,"content",o=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}${t[13]}`),$(r,"name","googlebot"),$(r,"content",c=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}${t[13]}`)},m(t,e){N&&N.m(document.head,null),s(document.head,n),s(document.head,r),w&&w.m(document.head,null),s(document.head,l),k&&k.m(document.head,null),s(document.head,i),x&&x.m(document.head,null),s(document.head,d),_&&_.m(document.head,null),s(document.head,a),T&&T.m(document.head,null),s(document.head,u),S&&S.m(document.head,null),s(document.head,p),L&&L.m(document.head,null),s(document.head,m),E&&E.m(document.head,null),s(document.head,h),A&&A.m(document.head,null),s(document.head,y),C&&C.m(document.head,null),s(document.head,b)},p(t,e){t[0]?N||(N=it(t),N.c(),N.m(n.parentNode,n)):N&&(N.d(1),N=null),8198&e[0]&&o!==(o=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}${t[13]}`)&&$(n,"content",o),8198&e[0]&&c!==(c=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}${t[13]}`)&&$(r,"content",c),t[3]?w?w.p(t,e):(w=dt(t),w.c(),w.m(l.parentNode,l)):w&&(w.d(1),w=null),t[9]?k?k.p(t,e):(k=at(t),k.c(),k.m(i.parentNode,i)):k&&(k.d(1),k=null),t[4]?x?x.p(t,e):(x=ut(t),x.c(),x.m(d.parentNode,d)):x&&(x.d(1),x=null),t[5]&&t[5].length>0?_?_.p(t,e):(_=pt(t),_.c(),_.m(a.parentNode,a)):_&&(_.d(1),_=null),t[6]?T?T.p(t,e):(T=mt(t),T.c(),T.m(u.parentNode,u)):T&&(T.d(1),T=null),t[7]?S?S.p(t,e):(S=yt(t),S.c(),S.m(p.parentNode,p)):S&&(S.d(1),S=null),t[8]?L?L.p(t,e):(L=bt(t),L.c(),L.m(m.parentNode,m)):L&&(L.d(1),L=null),t[10]&&t[10].length>0?E?E.p(t,e):(E=be(t),E.c(),E.m(h.parentNode,h)):E&&(E.d(1),E=null),t[11]?.length?A?A.p(t,e):(A=Ne(t),A.c(),A.m(y.parentNode,y)):A&&(A.d(1),A=null),t[12]?C?C.p(t,e):(C=we(t),C.c(),C.m(b.parentNode,b)):C&&(C.d(1),C=null)},i:e,o:e,d(t){N&&N.d(t),f(n),f(r),w&&w.d(t),f(l),k&&k.d(t),f(i),x&&x.d(t),f(d),_&&_.d(t),f(a),T&&T.d(t),f(u),S&&S.d(t),f(p),L&&L.d(t),f(m),E&&E.d(t),f(h),A&&A.d(t),f(y),C&&C.d(t),f(b)}}}function xe(t,e,n){let{title:o}=e,{noindex:r=!1}=e,{nofollow:c=!1}=e,{robotsProps:l}=e,{description:i}=e,{mobileAlternate:d}=e,{languageAlternates:a}=e,{twitter:u}=e,{facebook:p}=e,{openGraph:s}=e,{canonical:m}=e,{additionalMetaTags:f}=e,{additionalLinkTags:h}=e,{jsonLd:g}=e,y="";if(l){const{nosnippet:t,maxSnippet:e,maxImagePreview:n,maxVideoPreview:o,noarchive:r,noimageindex:c,notranslate:i,unavailableAfter:d}=l;y=`${t?",nosnippet":""}${e?`,max-snippet:${e}`:""}${n?`,max-image-preview:${n}`:""}${r?",noarchive":""}${d?`,unavailable_after:${d}`:""}${c?",noimageindex":""}${o?`,max-video-preview:${o}`:""}${i?",notranslate":""}`}return void 0!==g&&console.warn("[WARNING]: JSON-LD will soon be completely separated from the <MetaTags/> component and will no longer work. Please import and use `JsonLd`."),t.$$set=t=>{"title"in t&&n(0,o=t.title),"noindex"in t&&n(1,r=t.noindex),"nofollow"in t&&n(2,c=t.nofollow),"robotsProps"in t&&n(14,l=t.robotsProps),"description"in t&&n(3,i=t.description),"mobileAlternate"in t&&n(4,d=t.mobileAlternate),"languageAlternates"in t&&n(5,a=t.languageAlternates),"twitter"in t&&n(6,u=t.twitter),"facebook"in t&&n(7,p=t.facebook),"openGraph"in t&&n(8,s=t.openGraph),"canonical"in t&&n(9,m=t.canonical),"additionalMetaTags"in t&&n(10,f=t.additionalMetaTags),"additionalLinkTags"in t&&n(11,h=t.additionalLinkTags),"jsonLd"in t&&n(12,g=t.jsonLd)},[o,r,c,i,d,a,u,p,s,m,f,h,g,y,l]}function _e(t){let n,o,r,l,i;return{c(){n=g("button"),o=g("span"),o.innerHTML='<span class="hamburger-inner"></span>',$(o,"class","hamburger-box"),$(n,"class",r="hamburger hamburger--"+t[1]+" "+(t[0]&&"is-active"))},m(e,r){m(e,n,r),s(n,o),l||(i=[N(n,"click",t[2]),N(n,"click",t[3])],l=!0)},p(t,[e]){3&e&&r!==(r="hamburger hamburger--"+t[1]+" "+(t[0]&&"is-active"))&&$(n,"class",r)},i:e,o:e,d(t){t&&f(n),l=!1,c(i)}}}function Te(t,e,n){let{open:o}=e,{type:r="spin"}=e;return t.$$set=t=>{"open"in t&&n(0,o=t.open),"type"in t&&n(1,r=t.type)},[o,r,function(e){S.call(this,t,e)},()=>n(0,o=!o)]}function Se(t,e,n){let{theme:o="dark"}=e,{key:r="theme"}=e;const c={dark:"dark",light:"light"},l=T(),i=t=>t in c,d=t=>n(0,o=t.matches?c.dark:c.light);var a;return a=()=>{const t=matchMedia("(prefers-color-scheme: dark)"),e=localStorage.getItem(r);return i(e)?n(0,o=e):n(0,o=t.matches?c.dark:c.light),t.addEventListener("change",d),()=>{t.removeEventListener("change",d)}},_().$$.on_mount.push(a),function(t){_().$$.after_update.push(t)}((()=>{i(o)&&(l("change",o),localStorage.setItem(r,o))})),t.$$set=t=>{"theme"in t&&n(0,o=t.theme),"key"in t&&n(1,r=t.key)},[o,r]}t("S",R),t("M",class extends R{constructor(t){super(),F(this,t,xe,ke,i,{title:0,noindex:1,nofollow:2,robotsProps:14,description:3,mobileAlternate:4,languageAlternates:5,twitter:6,facebook:7,openGraph:8,canonical:9,additionalMetaTags:10,additionalLinkTags:11,jsonLd:12},null,[-1,-1])}}),t("H",class extends R{constructor(t){super(),F(this,t,Te,_e,i,{open:0,type:1})}}),t("D",class extends R{constructor(t){super(),F(this,t,Se,null,i,{theme:0,key:1})}});const Le=[];function Ee(t,n=e){let o;const r=new Set;function c(e){if(i(t,e)&&(t=e,o)){const e=!Le.length;for(const n of r)n[1](),Le.push(n,t);if(e){for(let t=0;t<Le.length;t+=2)Le[t][0](Le[t+1]);Le.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(l,i=e){const d=[l,i];return r.add(d),1===r.size&&(o=n(c)||e),l(t),()=>{r.delete(d),0===r.size&&(o(),o=null)}}}}var Ae={}}}}));
