import{n as ke,k as f,aI as Pe,K as q,r as E,L as M,a3 as ee,ax as Ce,M as P,cb as Qe,aq as O,f as t,N as Ne,aY as Je,aF as Ve,cc as Ze,z as Se,v as Ge,ao as et,x as te,bi as Ie,y as tt,ac as oe,A as Te,a7 as ot,aE as at,H as Ee,bf as nt,cd as st,ce as lt,c7 as it,be as rt,o as h,c as C,m as y,F as ae,O as b,a1 as _,a as $,e as I,w as L,X as Y,E as H,aa as ne,b as ut,an as ct,Q as dt,aT as pt,t as X,P as ft,a2 as vt,b2 as ze,a6 as mt}from"./D9YeG9Qy.js";import{g as le,e as $e,u as ht}from"./CaJtqOC5.js";import{u as yt}from"./DD8AqcDw.js";const gt=()=>ke&&/firefox/i.test(window.navigator.userAgent);class bt extends Error{constructor(n){super(n),this.name="ElementPlusError"}}function Ot(a,n){throw new bt("[".concat(a,"] ").concat(n))}function Kt(a,n){}const se="update:modelValue",Dt="change",wt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a),Be=a=>{const n=Pe();return f(()=>{var s,o;return(o=(s=n==null?void 0:n.proxy)==null?void 0:s.$props)==null?void 0:o[a]})};function xt(a){let n;function s(){if(a.value==null)return;const{selectionStart:l,selectionEnd:u,value:d}=a.value;if(l==null||u==null)return;const i=d.slice(0,Math.max(0,l)),c=d.slice(Math.max(0,u));n={selectionStart:l,selectionEnd:u,value:d,beforeTxt:i,afterTxt:c}}function o(){if(a.value==null||n==null)return;const{value:l}=a.value,{beforeTxt:u,afterTxt:d,selectionStart:i}=n;if(u==null||d==null||i==null)return;let c=l.length;if(l.endsWith(d))c=l.length-d.length;else if(l.startsWith(u))c=u.length;else{const m=u[i-1],w=l.indexOf(m,i-1);w!==-1&&(c=w+1)}a.value.setSelectionRange(c,c)}return[s,o]}function Ct(a,{beforeFocus:n,afterFocus:s,beforeBlur:o,afterBlur:l}={}){const u=Pe(),{emit:d}=u,i=q(),c=E(!1),m=g=>{Ce(n)&&n(g)||c.value||(c.value=!0,d("focus",g),s==null||s())},w=g=>{var z;Ce(o)&&o(g)||g.relatedTarget&&((z=i.value)!=null&&z.contains(g.relatedTarget))||(c.value=!1,d("blur",g),l==null||l())},v=()=>{var g,z;(g=i.value)!=null&&g.contains(document.activeElement)&&i.value!==document.activeElement||(z=a.value)==null||z.focus()};return M(i,g=>{g&&g.setAttribute("tabindex","-1")}),ee(i,"focus",m,!0),ee(i,"blur",w,!0),ee(i,"click",v,!0),{isFocused:c,wrapperRef:i,handleFocus:m,handleBlur:w}}function St({afterComposition:a,emit:n}){const s=E(!1),o=i=>{n==null||n("compositionstart",i),s.value=!0},l=i=>{var c;n==null||n("compositionupdate",i);const m=(c=i.target)==null?void 0:c.value,w=m[m.length-1]||"";s.value=!wt(w)},u=i=>{n==null||n("compositionend",i),s.value&&(s.value=!1,P(()=>a(i)))};return{isComposing:s,handleComposition:i=>{i.type==="compositionend"?u(i):l(i)},handleCompositionStart:o,handleCompositionUpdate:l,handleCompositionEnd:u}}const It=(a,n={})=>{const s=E(void 0),o=n.prop?s:Be("size"),l=n.global?s:Qe(),u=n.form?{size:void 0}:O(le,void 0),d=n.formItem?{size:void 0}:O($e,void 0);return f(()=>o.value||t(a)||(d==null?void 0:d.size)||(u==null?void 0:u.size)||l.value||"")},Et=a=>{const n=Be("disabled"),s=O(le,void 0);return f(()=>n.value||t(a)||(s==null?void 0:s.disabled)||!1)},zt=()=>{const a=O(le,void 0),n=O($e,void 0);return{form:a,formItem:n}},Ft=(a,{formItemContext:n,disableIdGeneration:s,disableIdManagement:o})=>{s||(s=E(!1)),o||(o=E(!1));const l=E();let u;const d=f(()=>{var i;return!!(!(a.label||a.ariaLabel)&&n&&n.inputIds&&((i=n.inputIds)==null?void 0:i.length)<=1)});return Ne(()=>{u=M([Ve(a,"id"),s],([i,c])=>{const m=i!=null?i:c?void 0:Je().value;m!==l.value&&(n!=null&&n.removeInputId&&(l.value&&n.removeInputId(l.value),!(o!=null&&o.value)&&!c&&m&&n.addInputId(m)),l.value=m)},{immediate:!0})}),Ze(()=>{u&&u(),n!=null&&n.removeInputId&&l.value&&n.removeInputId(l.value)}),{isLabeledByFormItem:d,inputId:l}};let x;const kt="\n  height:0 !important;\n  visibility:hidden !important;\n  ".concat(gt()?"":"overflow:hidden !important;","\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n"),Pt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Nt(a){const n=window.getComputedStyle(a),s=n.getPropertyValue("box-sizing"),o=Number.parseFloat(n.getPropertyValue("padding-bottom"))+Number.parseFloat(n.getPropertyValue("padding-top")),l=Number.parseFloat(n.getPropertyValue("border-bottom-width"))+Number.parseFloat(n.getPropertyValue("border-top-width"));return{contextStyle:Pt.map(d=>"".concat(d,":").concat(n.getPropertyValue(d))).join(";"),paddingSize:o,borderSize:l,boxSizing:s}}function Fe(a,n=1,s){var o;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:l,borderSize:u,boxSizing:d,contextStyle:i}=Nt(a);x.setAttribute("style","".concat(i,";").concat(kt)),x.value=a.value||a.placeholder||"";let c=x.scrollHeight;const m={};d==="border-box"?c=c+u:d==="content-box"&&(c=c-l),x.value="";const w=x.scrollHeight-l;if(Se(n)){let v=w*n;d==="border-box"&&(v=v+l+u),c=Math.max(v,c),m.minHeight="".concat(v,"px")}if(Se(s)){let v=w*s;d==="border-box"&&(v=v+l+u),c=Math.min(v,c)}return m.height="".concat(c,"px"),(o=x.parentNode)==null||o.removeChild(x),x=void 0,m}const Vt=Ge({id:{type:String,default:void 0},size:et,disabled:Boolean,modelValue:{type:te([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:te([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:te([Object,Array,String]),default:()=>tt({})},autofocus:Boolean,rows:{type:Number,default:2},...ht(["ariaLabel"])}),Tt={[se]:a=>oe(a),input:a=>oe(a),change:a=>oe(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},$t=Te({name:"ElInput",inheritAttrs:!1}),Bt=Te({...$t,props:Vt,emits:Tt,setup(a,{expose:n,emit:s}){const o=a,l=ot(),u=at(),d=f(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),i=f(()=>[o.type==="textarea"?ie.b():r.b(),r.m(z.value),r.is("disabled",F.value),r.is("exceed",Oe.value),{[r.b("group")]:u.prepend||u.append,[r.m("prefix")]:u.prefix||o.prefixIcon,[r.m("suffix")]:u.suffix||o.suffixIcon||o.clearable||o.showPassword,[r.bm("suffix","password-clear")]:W.value&&J.value,[r.b("hidden")]:o.type==="hidden"},l.class]),c=f(()=>[r.e("wrapper"),r.is("focus",U.value)]),m=yt({excludeKeys:f(()=>Object.keys(d.value))}),{form:w,formItem:v}=zt(),{inputId:g}=Ft(o,{formItemContext:v}),z=It(),F=Et(),r=Ee("input"),ie=Ee("textarea"),K=q(),S=q(),Q=E(!1),D=E(!1),re=E(),j=q(o.inputStyle),N=f(()=>K.value||S.value),{wrapperRef:Re,isFocused:U,handleFocus:Ae,handleBlur:Le}=Ct(N,{beforeFocus(){return F.value},afterBlur(){var e;o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"blur").catch(p=>void 0))}}),ue=f(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=f(()=>(v==null?void 0:v.validateState)||""),ce=f(()=>B.value&&nt[B.value]),He=f(()=>D.value?st:lt),Me=f(()=>[l.style]),de=f(()=>[o.inputStyle,j.value,{resize:o.resize}]),k=f(()=>it(o.modelValue)?"":String(o.modelValue)),W=f(()=>o.clearable&&!F.value&&!o.readonly&&!!k.value&&(U.value||Q.value)),J=f(()=>o.showPassword&&!F.value&&!o.readonly&&!!k.value&&(!!k.value||U.value)),V=f(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!F.value&&!o.readonly&&!o.showPassword),Z=f(()=>k.value.length),Oe=f(()=>!!V.value&&Z.value>Number(o.maxlength)),Ke=f(()=>!!u.suffix||!!o.suffixIcon||W.value||o.showPassword||V.value||!!B.value&&ue.value),[De,je]=xt(K);rt(S,e=>{if(Ue(),!V.value||o.resize!=="both")return;const p=e[0],{width:T}=p.contentRect;re.value={right:"calc(100% - ".concat(T+15+6,"px)")}});const R=()=>{const{type:e,autosize:p}=o;if(!(!ke||e!=="textarea"||!S.value))if(p){const T=ze(p)?p.minRows:void 0,we=ze(p)?p.maxRows:void 0,xe=Fe(S.value,T,we);j.value={overflowY:"hidden",...xe},P(()=>{S.value.offsetHeight,j.value=xe})}else j.value={minHeight:Fe(S.value).minHeight}},Ue=(e=>{let p=!1;return()=>{var T;if(p||!o.autosize)return;((T=S.value)==null?void 0:T.offsetParent)===null||(e(),p=!0)}})(R),A=()=>{const e=N.value,p=o.formatter?o.formatter(k.value):k.value;!e||e.value===p||(e.value=p)},G=async e=>{De();let{value:p}=e.target;if(o.formatter&&(p=o.parser?o.parser(p):p),!fe.value){if(p===k.value){A();return}s(se,p),s("input",p),await P(),A(),je()}},pe=e=>{s("change",e.target.value)},{isComposing:fe,handleCompositionStart:ve,handleCompositionUpdate:me,handleCompositionEnd:he}=St({emit:s,afterComposition:G}),We=()=>{D.value=!D.value,ye()},ye=async()=>{var e;await P(),(e=N.value)==null||e.focus()},_e=()=>{var e;return(e=N.value)==null?void 0:e.blur()},Ye=e=>{Q.value=!1,s("mouseleave",e)},Xe=e=>{Q.value=!0,s("mouseenter",e)},ge=e=>{s("keydown",e)},qe=()=>{var e;(e=N.value)==null||e.select()},be=()=>{s(se,""),s("change",""),s("clear"),s("input","")};return M(()=>o.modelValue,()=>{var e;P(()=>R()),o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(p=>void 0))}),M(k,()=>A()),M(()=>o.type,async()=>{await P(),A(),R()}),Ne(()=>{!o.formatter&&o.parser,A(),P(R)}),n({input:K,textarea:S,ref:N,textareaStyle:de,autosize:Ve(o,"autosize"),isComposing:fe,focus:ye,blur:_e,select:qe,clear:be,resizeTextarea:R}),(e,p)=>(h(),C("div",ne(t(d),{class:[t(i),{[t(r).bm("group","append")]:e.$slots.append,[t(r).bm("group","prepend")]:e.$slots.prepend}],style:t(Me),role:e.containerRole,onMouseenter:Xe,onMouseleave:Ye}),[y(" input "),e.type!=="textarea"?(h(),C(ae,{key:0},[y(" prepend slot "),e.$slots.prepend?(h(),C("div",{key:0,class:b(t(r).be("group","prepend"))},[_(e.$slots,"prepend")],2)):y("v-if",!0),$("div",{ref_key:"wrapperRef",ref:Re,class:b(t(c))},[y(" prefix slot "),e.$slots.prefix||e.prefixIcon?(h(),C("span",{key:0,class:b(t(r).e("prefix"))},[$("span",{class:b(t(r).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(h(),I(t(H),{key:0,class:b(t(r).e("icon"))},{default:L(()=>[(h(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),$("input",ne({id:t(g),ref_key:"input",ref:K,class:t(r).e("inner")},t(m),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?D.value?"text":"password":e.type,disabled:t(F),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(ve),onCompositionupdate:t(me),onCompositionend:t(he),onInput:G,onChange:pe,onKeydown:ge}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),y(" suffix slot "),t(Ke)?(h(),C("span",{key:1,class:b(t(r).e("suffix"))},[$("span",{class:b(t(r).e("suffix-inner"))},[!t(W)||!t(J)||!t(V)?(h(),C(ae,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(h(),I(t(H),{key:0,class:b(t(r).e("icon"))},{default:L(()=>[(h(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),t(W)?(h(),I(t(H),{key:1,class:b([t(r).e("icon"),t(r).e("clear")]),onMousedown:dt(t(pt),["prevent"]),onClick:be},{default:L(()=>[ut(t(ct))]),_:1},8,["class","onMousedown"])):y("v-if",!0),t(J)?(h(),I(t(H),{key:2,class:b([t(r).e("icon"),t(r).e("password")]),onClick:We},{default:L(()=>[(h(),I(Y(t(He))))]),_:1},8,["class"])):y("v-if",!0),t(V)?(h(),C("span",{key:3,class:b(t(r).e("count"))},[$("span",{class:b(t(r).e("count-inner"))},X(t(Z))+" / "+X(e.maxlength),3)],2)):y("v-if",!0),t(B)&&t(ce)&&t(ue)?(h(),I(t(H),{key:4,class:b([t(r).e("icon"),t(r).e("validateIcon"),t(r).is("loading",t(B)==="validating")])},{default:L(()=>[(h(),I(Y(t(ce))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),e.$slots.append?(h(),C("div",{key:1,class:b(t(r).be("group","append"))},[_(e.$slots,"append")],2)):y("v-if",!0)],64)):(h(),C(ae,{key:1},[y(" textarea "),$("textarea",ne({id:t(g),ref_key:"textarea",ref:S,class:[t(ie).e("inner"),t(r).is("focus",t(U))]},t(m),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(F),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(ve),onCompositionupdate:t(me),onCompositionend:t(he),onInput:G,onFocus:t(Ae),onBlur:t(Le),onChange:pe,onKeydown:ge}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(V)?(h(),C("span",{key:0,style:ft(re.value),class:b(t(r).e("count"))},X(t(Z))+" / "+X(e.maxlength),7)):y("v-if",!0)],64))],16,["role"]))}});var Rt=vt(Bt,[["__file","input.vue"]]);const jt=mt(Rt);export{Dt as C,jt as E,se as U,It as a,Et as b,Ft as c,Kt as d,St as e,Ct as f,Ot as t,zt as u};
