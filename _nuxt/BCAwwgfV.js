import{a as c,f as p}from"./JAUZZBS7.js";import{J as t,aH as b,r,cr as z,ap as v,f as m,M as y,K as F,bu as h,aE as w,bc as K}from"./C-IGJznu.js";const I=o=>{const u=b();return t(()=>{var s,l;return(l=(s=u==null?void 0:u.proxy)==null?void 0:s.$props)==null?void 0:l[o]})},R=(o,u={})=>{const s=r(void 0),l=u.prop?s:I("size"),e=u.global?s:z(),a=u.form?{size:void 0}:v(c,void 0),n=u.formItem?{size:void 0}:v(p,void 0);return t(()=>l.value||m(o)||(n==null?void 0:n.size)||(a==null?void 0:a.size)||e.value||"")},S=o=>{const u=I("disabled"),s=v(c,void 0);return t(()=>u.value||m(o)||(s==null?void 0:s.disabled)||!1)},U=()=>{const o=v(c,void 0),u=v(p,void 0);return{form:o,formItem:u}},j=(o,{formItemContext:u,disableIdGeneration:s,disableIdManagement:l})=>{s||(s=r(!1)),l||(l=r(!1));const e=r();let a;const n=t(()=>{var i;return!!(!(o.label||o.ariaLabel)&&u&&u.inputIds&&((i=u.inputIds)==null?void 0:i.length)<=1)});return y(()=>{a=F([w(o,"id"),s],([i,f])=>{const d=i!=null?i:f?void 0:h().value;d!==e.value&&(u!=null&&u.removeInputId&&(e.value&&u.removeInputId(e.value),!(l!=null&&l.value)&&!f&&d&&u.addInputId(d)),e.value=d)},{immediate:!0})}),K(()=>{a&&a(),u!=null&&u.removeInputId&&e.value&&u.removeInputId(e.value)}),{isLabeledByFormItem:n,inputId:e}};export{R as a,S as b,j as c,U as u};
