System.register(["./D4dqOEAs-legacy.js","./DZRgwqMi-legacy.js","./Bj18pING-legacy.js","./D9URX0dR-legacy.js","./2iyN9oVF-legacy.js","./DIaI0wCL-legacy.js"],(function(e,l){"use strict";var o,a,c,r,i,n,t,d,b,u,s,h,x,k,v,p,m,g,f,_,y,C,L,w,V,z,B,S,E,F,I,U,N,O,j,D,$,G,R,A,M,P,Y,q,H,K,Q,X,J,T,W,Z,ee;return{setters:[e=>{o=e.ao,a=e.ac,c=e.z,r=e.b4,i=e.aq,n=e.k,t=e.aB,d=e.L,b=e.M,u=e.aI,s=e.r,h=e.am,x=e.bv,k=e.b7,v=e.bw,p=e.A,m=e.aE,g=e.H,f=e.o,_=e.e,y=e.w,C=e.a,L=e.O,w=e.f,V=e.$,z=e.c,B=e.i,S=e.Q,E=e.bx,F=e.a1,I=e.F,U=e.d,N=e.t,O=e.m,j=e.X,D=e.a2,$=e.P,G=e.v,R=e.x,A=e.aw,M=e.b8,P=e.a6,Y=e.bk},e=>{q=e.u,H=e.p},e=>{K=e.U,Q=e.d},e=>{X=e.b,J=e.u,T=e.a,W=e.c},e=>{Z=e.i},e=>{ee=e.u}],execute:function(){var l=document.createElement("style");l.textContent='.el-checkbox{--el-checkbox-font-size:14px;--el-checkbox-font-weight:var(--el-font-weight-primary);--el-checkbox-text-color:var(--el-text-color-regular);--el-checkbox-input-height:14px;--el-checkbox-input-width:14px;--el-checkbox-border-radius:var(--el-border-radius-small);--el-checkbox-bg-color:var(--el-fill-color-blank);--el-checkbox-input-border:var(--el-border);--el-checkbox-disabled-border-color:var(--el-border-color);--el-checkbox-disabled-input-fill:var(--el-fill-color-light);--el-checkbox-disabled-icon-color:var(--el-text-color-placeholder);--el-checkbox-disabled-checked-input-fill:var(--el-border-color-extra-light);--el-checkbox-disabled-checked-input-border-color:var(--el-border-color);--el-checkbox-disabled-checked-icon-color:var(--el-text-color-placeholder);--el-checkbox-checked-text-color:var(--el-color-primary);--el-checkbox-checked-input-border-color:var(--el-color-primary);--el-checkbox-checked-bg-color:var(--el-color-primary);--el-checkbox-checked-icon-color:var(--el-color-white);--el-checkbox-input-border-color-hover:var(--el-color-primary);align-items:center;color:var(--el-checkbox-text-color);cursor:pointer;display:inline-flex;font-size:var(--el-font-size-base);font-weight:var(--el-checkbox-font-weight);height:var(--el-checkbox-height,32px);margin-right:30px;position:relative;-webkit-user-select:none;user-select:none;white-space:nowrap}.el-checkbox.is-disabled{cursor:not-allowed}.el-checkbox.is-bordered{border:var(--el-border);border-radius:var(--el-border-radius-base);box-sizing:border-box;padding:0 15px 0 9px}.el-checkbox.is-bordered.is-checked{border-color:var(--el-color-primary)}.el-checkbox.is-bordered.is-disabled{border-color:var(--el-border-color-lighter)}.el-checkbox.is-bordered.el-checkbox--large{border-radius:var(--el-border-radius-base);padding:0 19px 0 11px}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__label{font-size:var(--el-font-size-base)}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.is-bordered.el-checkbox--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:0 11px 0 7px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox input:focus-visible+.el-checkbox__inner{border-radius:var(--el-checkbox-border-radius);outline:2px solid var(--el-checkbox-input-border-color-hover);outline-offset:1px}.el-checkbox__input{cursor:pointer;display:inline-flex;outline:none;position:relative;white-space:nowrap}.el-checkbox__input.is-disabled .el-checkbox__inner{background-color:var(--el-checkbox-disabled-input-fill);border-color:var(--el-checkbox-disabled-border-color);cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-icon-color);cursor:not-allowed}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-disabled-checked-icon-color);border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled+span.el-checkbox__label{color:var(--el-disabled-text-color);cursor:not-allowed}.el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-checked-icon-color);transform:rotate(45deg) scaleY(1)}.el-checkbox__input.is-checked+.el-checkbox__label{color:var(--el-checkbox-checked-text-color)}.el-checkbox__input.is-focus:not(.is-checked) .el-checkbox__original:not(:focus-visible){border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-checked-icon-color);content:"";display:block;height:2px;left:0;position:absolute;right:0;top:5px;transform:scale(.5)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:after{display:none}.el-checkbox__inner{background-color:var(--el-checkbox-bg-color);border:var(--el-checkbox-input-border);border-radius:var(--el-checkbox-border-radius);box-sizing:border-box;display:inline-block;height:var(--el-checkbox-input-height);position:relative;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46),outline .25s cubic-bezier(.71,-.46,.29,1.46);width:var(--el-checkbox-input-width);z-index:var(--el-index-normal)}.el-checkbox__inner:hover{border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__inner:after{border:1px solid #0000;border-left:0;border-top:0;box-sizing:initial;content:"";height:7px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);transform-origin:center;transition:transform .15s ease-in .05s;width:3px}.el-checkbox__original{height:0;margin:0;opacity:0;outline:none;position:absolute;width:0;z-index:-1}.el-checkbox__label{display:inline-block;font-size:var(--el-checkbox-font-size);line-height:1;padding-left:8px}.el-checkbox.el-checkbox--large{height:40px}.el-checkbox.el-checkbox--large .el-checkbox__label{font-size:14px}.el-checkbox.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.el-checkbox--small{height:24px}.el-checkbox.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.el-checkbox--small .el-checkbox__input.is-indeterminate .el-checkbox__inner:before{top:4px}.el-checkbox.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox:last-of-type{margin-right:0}\n',document.head.appendChild(l);const le={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:o,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...q(["ariaControls"])},oe={[K]:e=>a(e)||c(e)||r(e),change:e=>a(e)||c(e)||r(e)},ae=Symbol("checkboxGroupContextKey"),ce=(e,{model:l,isLimitExceeded:o,hasOwnLabel:a,isDisabled:c,isLabeledByFormItem:r})=>{const t=i(ae,void 0),{formItem:s}=J(),{emit:h}=u();function x(l){var o,a,c,r;return[!0,e.trueValue,e.trueLabel].includes(l)?null==(a=null!=(o=e.trueValue)?o:e.trueLabel)||a:null!=(r=null!=(c=e.falseValue)?c:e.falseLabel)&&r}const k=n((()=>(null==t?void 0:t.validateEvent)||e.validateEvent));return d((()=>e.modelValue),(()=>{k.value&&(null==s||s.validate("change").catch((e=>Q())))})),{handleChange:function(e){if(o.value)return;const l=e.target;h("change",x(l.checked),e)},onClickRoot:async function(i){o.value||a.value||c.value||!r.value||i.composedPath().some((e=>"LABEL"===e.tagName))||(l.value=x([!1,e.falseValue,e.falseLabel].includes(l.value)),await b(),function(e,l){h("change",x(e),l)}(l.value,i))}}},re=(e,l)=>{const{formItem:o}=J(),{model:a,isGroup:c,isLimitExceeded:d}=(e=>{const l=s(!1),{emit:o}=u(),a=i(ae,void 0),c=n((()=>!1===t(a))),r=s(!1),d=n({get(){var o,r;return c.value?null==(o=null==a?void 0:a.modelValue)?void 0:o.value:null!=(r=e.modelValue)?r:l.value},set(e){var i,n;c.value&&h(e)?(r.value=void 0!==(null==(i=null==a?void 0:a.max)?void 0:i.value)&&e.length>(null==a?void 0:a.max.value)&&e.length>d.value.length,!1===r.value&&(null==(n=null==a?void 0:a.changeEvent)||n.call(a,e))):(o(K,e),l.value=e)}});return{model:d,isGroup:c,isLimitExceeded:r}})(e),{isFocused:b,isChecked:p,checkboxButtonSize:m,checkboxSize:g,hasOwnLabel:f,actualValue:_}=((e,l,{model:o})=>{const a=i(ae,void 0),c=s(!1),t=n((()=>x(e.value)?e.label:e.value)),d=n((()=>{const l=o.value;return r(l)?l:h(l)?k(t.value)?l.map(v).some((e=>Z(e,t.value))):l.map(v).includes(t.value):null!=l?l===e.trueValue||l===e.trueLabel:!!l}));return{checkboxButtonSize:T(n((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value})),{prop:!0}),isChecked:d,isFocused:c,checkboxSize:T(n((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value}))),hasOwnLabel:n((()=>!!l.default||!x(t.value))),actualValue:t}})(e,l,{model:a}),{isDisabled:y}=(({model:e,isChecked:l})=>{const o=i(ae,void 0),a=n((()=>{var a,c;const r=null==(a=null==o?void 0:o.max)?void 0:a.value,i=null==(c=null==o?void 0:o.min)?void 0:c.value;return!t(r)&&e.value.length>=r&&!l.value||!t(i)&&e.value.length<=i&&l.value}));return{isDisabled:X(n((()=>(null==o?void 0:o.disabled.value)||a.value))),isLimitDisabled:a}})({model:a,isChecked:p}),{inputId:C,isLabeledByFormItem:L}=W(e,{formItemContext:o,disableIdGeneration:f,disableIdManagement:c}),{handleChange:w,onClickRoot:V}=ce(e,{model:a,isLimitExceeded:d,hasOwnLabel:f,isDisabled:y,isLabeledByFormItem:L});var z,B;return e.checked&&(h(a.value)&&!a.value.includes(_.value)?a.value.push(_.value):a.value=null==(B=null!=(z=e.trueValue)?z:e.trueLabel)||B),ee({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},n((()=>c.value&&x(e.value)))),ee({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},n((()=>!!e.trueLabel))),ee({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},n((()=>!!e.falseLabel))),{inputId:C,isLabeledByFormItem:L,isChecked:p,isDisabled:y,isFocused:b,checkboxButtonSize:m,checkboxSize:g,hasOwnLabel:f,model:a,actualValue:_,handleChange:w,onClickRoot:V}},ie=p({name:"ElCheckbox"}),ne=p({...ie,props:le,emits:oe,setup(e){const l=e,o=m(),{inputId:a,isLabeledByFormItem:c,isChecked:r,isDisabled:i,isFocused:t,checkboxSize:d,hasOwnLabel:b,model:u,actualValue:s,handleChange:h,onClickRoot:x}=re(l,o),k=g("checkbox"),v=n((()=>[k.b(),k.m(d.value),k.is("disabled",i.value),k.is("bordered",l.border),k.is("checked",r.value)])),p=n((()=>[k.e("input"),k.is("disabled",i.value),k.is("checked",r.value),k.is("indeterminate",l.indeterminate),k.is("focus",t.value)]));return(e,l)=>(f(),_(j(!w(b)&&w(c)?"span":"label"),{class:L(w(v)),"aria-controls":e.indeterminate?e.ariaControls:null,onClick:w(x)},{default:y((()=>{var l,o;return[C("span",{class:L(w(p))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?V((f(),z("input",{key:0,id:w(a),"onUpdate:modelValue":e=>B(u)?u.value=e:null,class:L(w(k).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:w(i),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(o=e.falseValue)?o:e.falseLabel,onChange:w(h),onFocus:e=>t.value=!0,onBlur:e=>t.value=!1,onClick:S((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[E,w(u)]]):V((f(),z("input",{key:1,id:w(a),"onUpdate:modelValue":e=>B(u)?u.value=e:null,class:L(w(k).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:w(i),value:w(s),name:e.name,tabindex:e.tabindex,onChange:w(h),onFocus:e=>t.value=!0,onBlur:e=>t.value=!1,onClick:S((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[E,w(u)]]),C("span",{class:L(w(k).e("inner"))},null,2)],2),w(b)?(f(),z("span",{key:0,class:L(w(k).e("label"))},[F(e.$slots,"default"),e.$slots.default?O("v-if",!0):(f(),z(I,{key:0},[U(N(e.label),1)],64))],2)):O("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}});var te=D(ne,[["__file","checkbox.vue"]]);const de=p({name:"ElCheckboxButton"}),be=p({...de,props:le,emits:oe,setup(e){const l=e,o=m(),{isFocused:a,isChecked:c,isDisabled:r,checkboxButtonSize:t,model:d,actualValue:b,handleChange:u}=re(l,o),s=i(ae,void 0),h=g("checkbox"),x=n((()=>{var e,l,o,a;const c=null!=(l=null==(e=null==s?void 0:s.fill)?void 0:e.value)?l:"";return{backgroundColor:c,borderColor:c,color:null!=(a=null==(o=null==s?void 0:s.textColor)?void 0:o.value)?a:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}})),k=n((()=>[h.b("button"),h.bm("button",t.value),h.is("disabled",r.value),h.is("checked",c.value),h.is("focus",a.value)]));return(e,l)=>{var o,i;return f(),z("label",{class:L(w(k))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?V((f(),z("input",{key:0,"onUpdate:modelValue":e=>B(d)?d.value=e:null,class:L(w(h).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:w(r),"true-value":null!=(o=e.trueValue)?o:e.trueLabel,"false-value":null!=(i=e.falseValue)?i:e.falseLabel,onChange:w(u),onFocus:e=>a.value=!0,onBlur:e=>a.value=!1,onClick:S((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[E,w(d)]]):V((f(),z("input",{key:1,"onUpdate:modelValue":e=>B(d)?d.value=e:null,class:L(w(h).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:w(r),value:w(b),onChange:w(u),onFocus:e=>a.value=!0,onBlur:e=>a.value=!1,onClick:S((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[E,w(d)]]),e.$slots.default||e.label?(f(),z("span",{key:2,class:L(w(h).be("button","inner")),style:$(w(c)?w(x):void 0)},[F(e.$slots,"default",{},(()=>[U(N(e.label),1)]))],6)):O("v-if",!0)],2)}}});var ue=D(be,[["__file","checkbox-button.vue"]]);const se=G({modelValue:{type:R(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:o,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...q(["ariaLabel"])}),he={[K]:e=>h(e),change:e=>h(e)},xe=p({name:"ElCheckboxGroup"}),ke=p({...xe,props:se,emits:he,setup(e,{emit:l}){const o=e,a=g("checkbox"),{formItem:c}=J(),{inputId:r,isLabeledByFormItem:i}=W(o,{formItemContext:c}),t=async e=>{l(K,e),await b(),l("change",e)},u=n({get:()=>o.modelValue,set(e){t(e)}});return A(ae,{...H(M(o),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:u,changeEvent:t}),d((()=>o.modelValue),(()=>{o.validateEvent&&(null==c||c.validate("change").catch((e=>Q())))})),(e,l)=>{var o;return f(),_(j(e.tag),{id:w(r),class:L(w(a).b("group")),role:"group","aria-label":w(i)?void 0:e.ariaLabel||"checkbox-group","aria-labelledby":w(i)?null==(o=w(c))?void 0:o.labelId:void 0},{default:y((()=>[F(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ve=D(ke,[["__file","checkbox-group.vue"]]);e("E",P(te,{CheckboxButton:ue,CheckboxGroup:ve})),Y(ue),Y(ve)}}}));
