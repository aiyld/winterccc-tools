import{ao as J,ac as q,z as H,b4 as U,aq as _,k as h,aB as P,L as Y,M as Z,aI as ee,r as O,am as F,bv as T,b7 as he,bw as Q,A as L,aE as ae,H as M,o as C,e as le,w as ne,a as W,O as g,f as n,$,c as V,i as N,Q as w,bx as z,a1 as R,F as ke,d as te,t as oe,m as A,X as ue,a2 as K,P as pe,v as ge,x as Ce,aw as xe,b8 as Ve,a6 as ye,bk as se}from"./19ALO-V3.js";import{u as ie,p as Se}from"./BdUnDgu7.js";import{U as D,d as re}from"./C1LlYAEj.js";import{b as Le,u as j,a as X,c as ce}from"./mSzHnMBE.js";import{i as Be}from"./CGXPQwyo.js";import{u as G}from"./CUCYs7wX.js";const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:J,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ie(["ariaControls"])},be={[D]:e=>q(e)||H(e)||U(e),change:e=>q(e)||H(e)||U(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const i=_(B,void 0),l=h(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:Le(h(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Ie=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=_(B,void 0),{formItem:t}=j(),{emit:v}=ee();function s(a){var k,p,u,f;return[!0,e.trueValue,e.trueLabel].includes(a)?(p=(k=e.trueValue)!=null?k:e.trueLabel)!=null?p:!0:(f=(u=e.falseValue)!=null?u:e.falseLabel)!=null?f:!1}function o(a,k){v("change",s(a),k)}function m(a){if(i.value)return;const k=a.target;v("change",s(k.checked),a)}async function x(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await Z(),o(c.value,a)))}const y=h(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return Y(()=>e.modelValue,()=>{y.value&&(t==null||t.validate("change").catch(a=>re()))}),{handleChange:m,onClickRoot:x}},Fe=e=>{const c=O(!1),{emit:i}=ee(),l=_(B,void 0),b=h(()=>P(l)===!1),r=O(!1),d=h({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&F(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(D,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},_e=(e,c,{model:i})=>{const l=_(B,void 0),b=O(!1),r=h(()=>T(e.value)?e.label:e.value),d=h(()=>{const o=i.value;return U(o)?o:F(o)?he(r.value)?o.map(Q).some(m=>Be(m,r.value)):o.map(Q).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=X(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=X(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=h(()=>!!c.default||!T(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},ve=(e,c)=>{const{formItem:i}=j(),{model:l,isGroup:b,isLimitExceeded:r}=Fe(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=_e(e,c,{model:l}),{isDisabled:x}=Ee({model:l,isChecked:t}),{inputId:y,isLabeledByFormItem:a}=ce(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:k,onClickRoot:p}=Ie(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:x,isLabeledByFormItem:a});return(()=>{function f(){var E,I;F(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&f()})(),G({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>b.value&&T(e.value))),G({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.trueLabel)),G({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.falseLabel)),{inputId:y,isLabeledByFormItem:a,isChecked:t,isDisabled:x,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:k,onClickRoot:p}},$e=L({name:"ElCheckbox"}),Ne=L({...$e,props:de,emits:be,setup(e){const c=e,i=ae(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:x,onClickRoot:y}=ve(c,i),a=M("checkbox"),k=h(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),p=h(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,f)=>(C(),le(ue(!n(s)&&n(b)?"span":"label"),{class:g(n(k)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(y)},{default:ne(()=>{var E,I;return[W("span",{class:g(n(p))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?$((C(),V("input",{key:0,id:n(l),"onUpdate:modelValue":S=>N(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(E=u.trueValue)!=null?E:u.trueLabel,"false-value":(I=u.falseValue)!=null?I:u.falseLabel,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:w(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[z,n(o)]]):$((C(),V("input",{key:1,id:n(l),"onUpdate:modelValue":S=>N(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:w(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[z,n(o)]]),W("span",{class:g(n(a).e("inner"))},null,2)],2),n(s)?(C(),V("span",{key:0,class:g(n(a).e("label"))},[R(u.$slots,"default"),u.$slots.default?A("v-if",!0):(C(),V(ke,{key:0},[te(oe(u.label),1)],64))],2)):A("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var we=K(Ne,[["__file","checkbox.vue"]]);const ze=L({name:"ElCheckboxButton"}),De=L({...ze,props:de,emits:be,setup(e){const c=e,i=ae(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=ve(c,i),o=_(B,void 0),m=M("checkbox"),x=h(()=>{var a,k,p,u;const f=(k=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?k:"";return{backgroundColor:f,borderColor:f,color:(u=(p=o==null?void 0:o.textColor)==null?void 0:p.value)!=null?u:"",boxShadow:f?"-1px 0 0 0 ".concat(f):void 0}}),y=h(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,k)=>{var p,u;return C(),V("label",{class:g(n(y))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?$((C(),V("input",{key:0,"onUpdate:modelValue":f=>N(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(p=a.trueValue)!=null?p:a.trueLabel,"false-value":(u=a.falseValue)!=null?u:a.falseLabel,onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:w(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[z,n(t)]]):$((C(),V("input",{key:1,"onUpdate:modelValue":f=>N(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:w(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[z,n(t)]]),a.$slots.default||a.label?(C(),V("span",{key:2,class:g(n(m).be("button","inner")),style:pe(n(b)?n(x):void 0)},[R(a.$slots,"default",{},()=>[te(oe(a.label),1)])],6)):A("v-if",!0)],2)}}});var me=K(De,[["__file","checkbox-button.vue"]]);const Ge=ge({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:J,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ie(["ariaLabel"])}),Ue={[D]:e=>F(e),change:e=>F(e)},Pe=L({name:"ElCheckboxGroup"}),Oe=L({...Pe,props:Ge,emits:Ue,setup(e,{emit:c}){const i=e,l=M("checkbox"),{formItem:b}=j(),{inputId:r,isLabeledByFormItem:d}=ce(i,{formItemContext:b}),t=async s=>{c(D,s),await Z(),c("change",s)},v=h({get(){return i.modelValue},set(s){t(s)}});return xe(B,{...Se(Ve(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),Y(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>re()))}),(s,o)=>{var m;return C(),le(ue(s.tag),{id:n(r),class:g(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:ne(()=>[R(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=K(Oe,[["__file","checkbox-group.vue"]]);const qe=ye(we,{CheckboxButton:me,CheckboxGroup:fe});se(me);se(fe);export{qe as E};
