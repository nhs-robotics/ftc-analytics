var bt=Array.isArray,qt=Array.from,Pt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,Lt=Object.prototype,Ft=Array.prototype,Xn=Object.getPrototypeOf;function Mt(n){return typeof n=="function"}const Ht=()=>{};function Yt(n){return n()}function dn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,Y=8,en=16,A=32,z=64,O=128,V=256,p=512,I=1024,b=2048,C=4096,j=8192,nt=16384,yn=32768,jt=65536,tt=1<<18,wn=1<<19,cn=Symbol("$state"),Ut=Symbol("legacy props"),Bt=Symbol("");function Tn(n){return n===this.v}function rt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!rt(n,this.v)}function et(n){throw new Error("effect_in_teardown")}function st(){throw new Error("effect_in_unowned_derived")}function at(n){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function Vt(){throw new Error("hydration_failed")}function Gt(n){throw new Error("props_invalid_value")}function Kt(){throw new Error("state_descriptors_fixed")}function $t(){throw new Error("state_prototype_fixed")}function ut(){throw new Error("state_unsafe_local_read")}function ot(){throw new Error("state_unsafe_mutation")}let J=!1;function Zt(){J=!0}function sn(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function zt(n){return An(sn(n))}function it(n,t=!1){var e;const r=sn(n);return t||(r.equals=mn),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Jt(n,t=!1){return An(it(n,t))}function An(n){return i!==null&&i.f&y&&(m===null?It([n]):m.push(n)),n}function gn(n,t){return i!==null&&on()&&i.f&(y|en)&&(m===null||!m.includes(n))&&ot(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Vn(),In(n,I),on()&&u!==null&&u.f&p&&!(u.f&A)&&(c!==null&&c.includes(n)?(T(u,I),Q(u)):g===null?St([n]):g.push(n))),t}function In(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&I||!e&&l===u||(T(l,t),f&(p|O)&&(f&y?In(l,b):Q(l)))}}const Qt=1,Wt=2,Xt=4,nr=8,tr=16,rr=1,er=2,sr=4,ar=8,lr=16,ur=1,or=2,ir=4,fr=1,_r=2,_t="[",ct="[!",vt="]",Sn={},cr=Symbol(),vr="http://www.w3.org/2000/svg";function xn(n){console.warn("hydration_mismatch")}let x=!1;function pr(n){x=n}let w;function F(n){if(n===null)throw xn(),Sn;return w=n}function hr(){return F(R(w))}function dr(n){if(x){if(R(w)!==null)throw xn(),Sn;w=n}}function Er(n=1){if(x){for(var t=n,r=w;t--;)r=R(r);w=r}}function yr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(n===0)return t;n-=1}else(r===_t||r===ct)&&(n+=1)}var e=R(t);t.remove(),t=e}}var vn,On,Rn;function wr(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;On=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function W(n=""){return document.createTextNode(n)}function X(n){return On.call(n)}function R(n){return Rn.call(n)}function Tr(n,t){if(!x)return X(n);var r=X(w);if(r===null)r=w.appendChild(W());else if(t&&r.nodeType!==3){var e=W();return r==null||r.before(e),F(e),e}return F(r),r}function mr(n,t){if(!x){var r=X(n);return r instanceof Comment&&r.data===""?R(r):r}return w}function Ar(n,t=1,r=!1){let e=x?w:n;for(var s;t--;)s=e,e=R(e);if(!x)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=W();return e===null?s==null||s.after(l):e.before(l),F(l),l}return F(e),e}function gr(n){n.textContent=""}function pt(n){var t=y|I;u===null?t|=O:u.f|=wn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Ir(n){const t=pt(n);return t.equals=mn,t}function kn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):P(e)}}}function ht(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Nn(n){var t,r=u;Z(ht(n));try{kn(n),t=Gn(n)}finally{Z(r)}return t}function Dn(n){var t=Nn(n),r=(k||n.f&O)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Vn())}function an(n){kn(n),H(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&i===null&&at(),i!==null&&i.f&O&&st(),un&&et()}function dt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&z)!==0,a=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|I,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{pn(!0),U(l),l.f|=nt}catch(_){throw P(l),_}finally{pn(f)}}else t!==null&&Q(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!E&&!s&&e&&(a!==null&&dt(l,a),i!==null&&i.f&y)){var h=i;(h.children??(h.children=[])).push(l)}return l}function Sr(n){const t=q(Y,null,!1);return T(t,p),t.teardown=n,t}function xr(n){Cn();var t=u!==null&&(u.f&A)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=bn(n);return e}}function Or(n){return Cn(),ln(n)}function Rr(n){const t=q(z,n,!0);return()=>{P(t)}}function bn(n){return q(En,n,!1)}function kr(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,gn(r.l.r2,!0),Nt(t))})}function Nr(){var n=o;ln(()=>{if(Jn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),L(r)&&U(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return q(Y,n,!0)}function Dr(n){return Et(n)}function Et(n,t=0){return q(Y|en|t,n,!0)}function Cr(n,t=!0){return q(Y|A,n,!0,t)}function qn(n){var t=n.teardown;if(t!==null){const r=un,e=i;hn(!0),$(null);try{t.call(null)}finally{hn(r),$(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function Ln(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&tt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Ln(n,t&&!r),Pn(n),H(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();qn(n);var f=n.parent;f!==null&&f.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function br(n,t){var r=[];Mn(n,r,!0),wt(r,()=>{P(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Mn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&yn)!==0||(e.f&A)!==0;Mn(e,t,a?r:!1),e=s}}}function qr(n){Hn(n,!0)}function Hn(n,t){if(n.f&C){L(n)&&U(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&A)!==0;Hn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const Tt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let G=!1,K=!1,nn=[],tn=[];function Yn(){G=!1;const n=nn.slice();nn=[],dn(n)}function jn(){K=!1;const n=tn.slice();tn=[],dn(n)}function Pr(n){G||(G=!0,queueMicrotask(Yn)),nn.push(n)}function Lr(n){K||(K=!0,Tt(jn)),tn.push(n)}function mt(){G&&Yn(),K&&jn()}function At(n){throw new Error("lifecycle_outside_component")}const Un=0,gt=1;let B=Un,M=!1,N=!1,un=!1;function pn(n){N=n}function hn(n){un=n}let S=[],D=0;let i=null;function $(n){i=n}let u=null;function Z(n){u=n}let m=null;function It(n){m=n}let c=null,d=0,g=null;function St(n){g=n}let Bn=0,k=!1,o=null;function Vn(){return++Bn}function on(){return!J||o!==null&&o.l===null}function L(n){var l,f;var t=n.f;if(t&I)return!0;if(t&b){var r=n.deps,e=(t&O)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&Dn(a),e&&u!==null&&!k&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function xt(n,t,r){throw n}function Gn(n){var fn;var t=c,r=d,e=g,s=i,a=k,l=m,f=o,E=n.f;c=null,d=0,g=null,i=E&(A|z)?null:n,k=!N&&(E&O)!==0,m=null,o=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(H(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!k)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(H(n,d),_.length=d);return h}finally{c=t,d=r,g=e,i=s,k=a,m=l,o=f}}function Ot(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(O|V)||(t.f^=V),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Ot(n,r[e])}function U(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&en?yt(n):Ln(n),Pn(n),qn(n);var e=Gn(n);n.teardown=typeof e=="function"?e:null,n.version=Bn}catch(s){xt(s)}finally{u=r}}}function Kn(){D>1e3&&(D=0,lt()),D++}function $n(n){var t=n.length;if(t!==0){Kn();var r=N;N=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Zn(s,a),Rt(a)}}finally{N=r}}}function Rt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|C))&&L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}}function kt(){if(M=!1,D>1001)return;const n=S;S=[],$n(n),M||(D=0)}function Q(n){B===Un&&(M||(M=!0,queueMicrotask(kt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|A)){if(!(r&p))return;t.f^=p}}S.push(t)}function Zn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&A)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:L(r)&&U(r);var f=r.first;if(f!==null){r=f;continue}}else s&En&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)f=e[_],t.push(f),Zn(f,t)}function zn(n){var t=B,r=S;try{Kn();const s=[];B=gt,S=s,M=!1,$n(r);var e=n==null?void 0:n();return mt(),(S.length>0||s.length>0)&&zn(),D=0,e}finally{B=t,S=r}}async function Fr(){await Promise.resolve(),zn()}function Jn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=Nn(n);return an(n),e}if(i!==null){m!==null&&m.includes(n)&&ut();var s=i.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&A)&&g.includes(n)&&(T(u,I),Q(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,f=a;l!==null;)if(l.f&y){var E=l;f=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(f)||(h.deriveds??(h.deriveds=[])).push(f);break}return r&&(a=n,L(a)&&Dn(a)),n.v}function Nt(n){const t=i;try{return i=null,n()}finally{i=t}}const Dt=~(I|b|p);function T(n,t){n.f=n.f&Dt|t}function Mr(n){return Qn().get(n)}function Hr(n,t){return Qn().set(n,t),t}function Qn(n){return o===null&&At(),o.c??(o.c=new Map(Ct(o)||void 0))}function Ct(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Yr(n,t=1){var r=+Jn(n);return gn(n,r+t),r}function jr(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(o.l={s:null,u:null,r1:[],r2:sn(!1)})}function Ur(n){const t=o;if(t!==null){n!==void 0&&(t.x=n);const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),bn(a.fn)}}finally{Z(r),$(e)}}o=t.p,t.m=!0}return n||{}}function Br(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{pr as $,x as A,w as B,F as C,hr as D,zn as E,Pt as F,it as G,Fr as H,Lt as I,Ft as J,sn as K,Ut as L,Kt as M,_n as N,$t as O,Xn as P,bt as Q,Et as R,cn as S,fr as T,cr as U,qr as V,Cr as W,br as X,yn as Y,ct as Z,yr as _,Ur as a,bn as a0,ln as a1,Pr as a2,Gt as a3,jt as a4,sr as a5,mn as a6,Yr as a7,Mt as a8,A as a9,P as aA,Qt as aB,Wt as aC,Xt as aD,nr as aE,tr as aF,en as aG,nt as aH,ur as aI,or as aJ,ir as aK,vr as aL,on as aM,Hr as aN,Mr as aO,kr as aP,Nr as aQ,Jt as aR,Lr as aS,Bt as aT,Wn as aU,z as aa,Z as ab,rr as ac,J as ad,er as ae,ar as af,Ir as ag,lr as ah,At as ai,$ as aj,i as ak,Sr as al,wr as am,_t as an,R as ao,Sn as ap,vt as aq,xn as ar,Vt as as,gr as at,qt as au,Rr as av,C as aw,ft as ax,Mn as ay,wt as az,gn as b,Tr as c,zt as d,xr as e,mr as f,Jn as g,o as h,Nt as i,Yt as j,dn as k,Br as l,pt as m,Er as n,Ht as o,jr as p,rt as q,dr as r,Ar as s,Dr as t,Or as u,Zt as v,W as w,X as x,u as y,_r as z};
