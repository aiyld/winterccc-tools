import{co as s,aY as g,aZ as m,bR as o,a$ as d,cp as p,bA as y,aW as S,bB as P,cq as w,n as O}from"./CxHlCe3Z.js";function x(n){return n}function A(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var T=800,I=16,E=Date.now;function C(n){var e=0,t=0;return function(){var a=E(),r=I-(a-t);if(t=a,r>0){if(++e>=T)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function N(n){return function(){return n}}var R=s?function(n,e){return s(n,"toString",{configurable:!0,enumerable:!1,value:N(e),writable:!0})}:x,_=C(R),f=Math.max;function k(n,e,t){return e=f(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,i=f(a.length-e,0),u=Array(i);++r<i;)u[r]=a[e+r];r=-1;for(var l=Array(e+1);++r<e;)l[r]=a[r];return l[e]=t(u),A(n,this,l)}}var F=9007199254740991;function G(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=F}var H="[object Arguments]";function c(n){return g(n)&&m(n)==H}var b=Object.prototype,L=b.hasOwnProperty,M=b.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(n){return g(n)&&L.call(n,"callee")&&!M.call(n,"callee")};function B(n,e){for(var t=-1,a=e.length,r=n.length;++t<a;)n[r+t]=e[t];return n}var h=o?o.isConcatSpreadable:void 0;function $(n){return d(n)||v(n)||!!(h&&n&&n[h])}function q(n,e,t,a,r){var i=-1,u=n.length;for(t||(t=$),r||(r=[]);++i<u;){var l=n[i];t(l)?B(r,l):r[r.length]=l}return r}function z(n){var e=n==null?0:n.length;return e?q(n):[]}function D(n){return _(k(n,void 0,z),n+"")}function K(n,e){return n!=null&&e in Object(n)}function U(n,e,t){e=p(e,n);for(var a=-1,r=e.length,i=!1;++a<r;){var u=y(e[a]);if(!(i=n!=null&&t(n,u)))break;n=n[u]}return i||++a!=r?i:(r=n==null?0:n.length,!!r&&G(r)&&S(u,r)&&(d(n)||v(n)))}function W(n,e){return n!=null&&U(n,e,K)}function X(n,e,t){for(var a=-1,r=e.length,i={};++a<r;){var u=e[a],l=P(n,u);t(l,u)&&w(i,p(u,n),l)}return i}function Y(n,e){return X(n,e,function(t,a){return W(n,a)})}var Z=D(function(n,e){return n==null?{}:Y(n,e)});const J=O({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),V=n=>Z(J,n);export{v as a,q as b,G as c,B as d,z as f,W as h,x as i,k as o,Z as p,_ as s,V as u};
