System.register(["./CvLrqyoJ-legacy.js"],(function(e,t){"use strict";var o,n;return{setters:[e=>{o=e.n,n=e.ay}],execute:function(){e("s",(function(e,t){if(!o)return;if(!t)return void(e.scrollTop=0);const n=[];let r=t.offsetParent;for(;null!==r&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const l=t.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),s=l+t.offsetHeight,i=e.scrollTop,c=i+e.clientHeight;l<i?e.scrollTop=l:s>c&&(e.scrollTop=s-e.clientHeight)}));const t=(e,t)=>{if(!o)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],l=n(e,r);return["scroll","auto","overlay"].some((e=>l.includes(e)))};let r;e("g",((e,n)=>{if(!o)return;let r=e;for(;r;){if([window,document,document.documentElement].includes(r))return window;if(t(r,n))return r;r=r.parentNode}return r})),e("a",(e=>{var t;if(!o)return 0;if(void 0!==r)return r;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const l=n.offsetWidth;n.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",n.appendChild(s);const i=s.offsetWidth;return null==(t=n.parentNode)||t.removeChild(n),r=l-i,r}))}}}));
