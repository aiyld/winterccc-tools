import{N as ke,x as p,bB as qe,ap as le,bi as Z,f as I,D as M,aT as ee,ai as Se,U as k,bC as Ge,ao as O,u as t,n as Ne,a3 as Je,aU as Ve,bD as Qe,am as Ee,W as et,al as tt,X as te,b1 as Ie,bE as ot,ac as oe,k as Te,bF as at,at as nt,M as ze,a_ as st,bG as lt,bH as it,bI as rt,aV as ut,o as h,c as C,y as b,F as ae,A as g,r as W,a as $,g as E,w as A,a8 as Y,E as H,bf as ne,b as ct,b2 as dt,a7 as pt,T as ft,t as X,C as vt,Y as mt,ag as Fe,aw as ht}from"./CTJ3n5Ue.js";import{k as ie,l as $e,u as bt}from"./BC0sQffX.js";const yt=()=>ke&&/firefox/i.test(window.navigator.userAgent);class gt extends Error{constructor(n){super(n),this.name="ElementPlusError"}}function Kt(a,n){throw new gt(`[${a}] ${n}`)}function Ut(a,n){}const se="update:modelValue",_t="change",wt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a),xt=["class","style"],Ct=/^on[A-Z]/,St=(a={})=>{const{excludeListeners:n=!1,excludeKeys:s}=a,o=p(()=>((s==null?void 0:s.value)||[]).concat(xt)),l=le();return l?p(()=>{var r;return qe(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([c])=>!o.value.includes(c)&&!(n&&Ct.test(c))))}):p(()=>({}))},Be=a=>{const n=le();return p(()=>{var s,o;return(o=(s=n==null?void 0:n.proxy)==null?void 0:s.$props)==null?void 0:o[a]})};function Et(a){let n;function s(){if(a.value==null)return;const{selectionStart:l,selectionEnd:r,value:c}=a.value;if(l==null||r==null)return;const i=c.slice(0,Math.max(0,l)),d=c.slice(Math.max(0,r));n={selectionStart:l,selectionEnd:r,value:c,beforeTxt:i,afterTxt:d}}function o(){if(a.value==null||n==null)return;const{value:l}=a.value,{beforeTxt:r,afterTxt:c,selectionStart:i}=n;if(r==null||c==null||i==null)return;let d=l.length;if(l.endsWith(c))d=l.length-c.length;else if(l.startsWith(r))d=r.length;else{const m=r[i-1],w=l.indexOf(m,i-1);w!==-1&&(d=w+1)}a.value.setSelectionRange(d,d)}return[s,o]}function It(a,{beforeFocus:n,afterFocus:s,beforeBlur:o,afterBlur:l}={}){const r=le(),{emit:c}=r,i=Z(),d=I(!1),m=y=>{Se(n)&&n(y)||d.value||(d.value=!0,c("focus",y),s==null||s())},w=y=>{var z;Se(o)&&o(y)||y.relatedTarget&&((z=i.value)!=null&&z.contains(y.relatedTarget))||(d.value=!1,c("blur",y),l==null||l())},v=()=>{var y,z;(y=i.value)!=null&&y.contains(document.activeElement)&&i.value!==document.activeElement||(z=a.value)==null||z.focus()};return M(i,y=>{y&&y.setAttribute("tabindex","-1")}),ee(i,"focus",m,!0),ee(i,"blur",w,!0),ee(i,"click",v,!0),{isFocused:d,wrapperRef:i,handleFocus:m,handleBlur:w}}function zt({afterComposition:a,emit:n}){const s=I(!1),o=i=>{n==null||n("compositionstart",i),s.value=!0},l=i=>{var d;n==null||n("compositionupdate",i);const m=(d=i.target)==null?void 0:d.value,w=m[m.length-1]||"";s.value=!wt(w)},r=i=>{n==null||n("compositionend",i),s.value&&(s.value=!1,k(()=>a(i)))};return{isComposing:s,handleComposition:i=>{i.type==="compositionend"?r(i):l(i)},handleCompositionStart:o,handleCompositionUpdate:l,handleCompositionEnd:r}}const Ft=(a,n={})=>{const s=I(void 0),o=n.prop?s:Be("size"),l=n.global?s:Ge(),r=n.form?{size:void 0}:O(ie,void 0),c=n.formItem?{size:void 0}:O($e,void 0);return p(()=>o.value||t(a)||(c==null?void 0:c.size)||(r==null?void 0:r.size)||l.value||"")},Pt=a=>{const n=Be("disabled"),s=O(ie,void 0);return p(()=>n.value||t(a)||(s==null?void 0:s.disabled)||!1)},kt=()=>{const a=O(ie,void 0),n=O($e,void 0);return{form:a,formItem:n}},Nt=(a,{formItemContext:n,disableIdGeneration:s,disableIdManagement:o})=>{s||(s=I(!1)),o||(o=I(!1));const l=I();let r;const c=p(()=>{var i;return!!(!(a.label||a.ariaLabel)&&n&&n.inputIds&&((i=n.inputIds)==null?void 0:i.length)<=1)});return Ne(()=>{r=M([Ve(a,"id"),s],([i,d])=>{const m=i??(d?void 0:Je().value);m!==l.value&&(n!=null&&n.removeInputId&&(l.value&&n.removeInputId(l.value),!(o!=null&&o.value)&&!d&&m&&n.addInputId(m)),l.value=m)},{immediate:!0})}),Qe(()=>{r&&r(),n!=null&&n.removeInputId&&l.value&&n.removeInputId(l.value)}),{isLabeledByFormItem:c,inputId:l}};let x;const Vt=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Tt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function $t(a){const n=window.getComputedStyle(a),s=n.getPropertyValue("box-sizing"),o=Number.parseFloat(n.getPropertyValue("padding-bottom"))+Number.parseFloat(n.getPropertyValue("padding-top")),l=Number.parseFloat(n.getPropertyValue("border-bottom-width"))+Number.parseFloat(n.getPropertyValue("border-top-width"));return{contextStyle:Tt.map(c=>`${c}:${n.getPropertyValue(c)}`).join(";"),paddingSize:o,borderSize:l,boxSizing:s}}function Pe(a,n=1,s){var o;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:l,borderSize:r,boxSizing:c,contextStyle:i}=$t(a);x.setAttribute("style",`${i};${Vt}`),x.value=a.value||a.placeholder||"";let d=x.scrollHeight;const m={};c==="border-box"?d=d+r:c==="content-box"&&(d=d-l),x.value="";const w=x.scrollHeight-l;if(Ee(n)){let v=w*n;c==="border-box"&&(v=v+l+r),d=Math.max(v,d),m.minHeight=`${v}px`}if(Ee(s)){let v=w*s;c==="border-box"&&(v=v+l+r),d=Math.min(v,d)}return m.height=`${d}px`,(o=x.parentNode)==null||o.removeChild(x),x=void 0,m}const Bt=et({id:{type:String,default:void 0},size:tt,disabled:Boolean,modelValue:{type:te([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:te([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:te([Object,Array,String]),default:()=>ot({})},autofocus:Boolean,rows:{type:Number,default:2},...bt(["ariaLabel"])}),Lt={[se]:a=>oe(a),input:a=>oe(a),change:a=>oe(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},Rt=Te({name:"ElInput",inheritAttrs:!1}),At=Te({...Rt,props:Bt,emits:Lt,setup(a,{expose:n,emit:s}){const o=a,l=at(),r=nt(),c=p(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),i=p(()=>[o.type==="textarea"?re.b():u.b(),u.m(z.value),u.is("disabled",F.value),u.is("exceed",Oe.value),{[u.b("group")]:r.prepend||r.append,[u.m("prefix")]:r.prefix||o.prefixIcon,[u.m("suffix")]:r.suffix||o.suffixIcon||o.clearable||o.showPassword,[u.bm("suffix","password-clear")]:j.value&&G.value,[u.b("hidden")]:o.type==="hidden"},l.class]),d=p(()=>[u.e("wrapper"),u.is("focus",_.value)]),m=St({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:v}=kt(),{inputId:y}=Nt(o,{formItemContext:v}),z=Ft(),F=Pt(),u=ze("input"),re=ze("textarea"),D=Z(),S=Z(),q=I(!1),K=I(!1),ue=I(),U=Z(o.inputStyle),N=p(()=>D.value||S.value),{wrapperRef:Le,isFocused:_,handleFocus:Re,handleBlur:Ae}=It(N,{beforeFocus(){return F.value},afterBlur(){var e;o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"blur").catch(f=>void 0))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(v==null?void 0:v.validateState)||""),de=p(()=>B.value&&st[B.value]),He=p(()=>K.value?lt:it),Me=p(()=>[l.style]),pe=p(()=>[o.inputStyle,U.value,{resize:o.resize}]),P=p(()=>rt(o.modelValue)?"":String(o.modelValue)),j=p(()=>o.clearable&&!F.value&&!o.readonly&&!!P.value&&(_.value||q.value)),G=p(()=>o.showPassword&&!F.value&&!o.readonly&&!!P.value&&(!!P.value||_.value)),V=p(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!F.value&&!o.readonly&&!o.showPassword),J=p(()=>P.value.length),Oe=p(()=>!!V.value&&J.value>Number(o.maxlength)),De=p(()=>!!r.suffix||!!o.suffixIcon||j.value||o.showPassword||V.value||!!B.value&&ce.value),[Ke,Ue]=Et(D);ut(S,e=>{if(_e(),!V.value||o.resize!=="both")return;const f=e[0],{width:T}=f.contentRect;ue.value={right:`calc(100% - ${T+15+6}px)`}});const L=()=>{const{type:e,autosize:f}=o;if(!(!ke||e!=="textarea"||!S.value))if(f){const T=Fe(f)?f.minRows:void 0,xe=Fe(f)?f.maxRows:void 0,Ce=Pe(S.value,T,xe);U.value={overflowY:"hidden",...Ce},k(()=>{S.value.offsetHeight,U.value=Ce})}else U.value={minHeight:Pe(S.value).minHeight}},_e=(e=>{let f=!1;return()=>{var T;if(f||!o.autosize)return;((T=S.value)==null?void 0:T.offsetParent)===null||(e(),f=!0)}})(L),R=()=>{const e=N.value,f=o.formatter?o.formatter(P.value):P.value;!e||e.value===f||(e.value=f)},Q=async e=>{Ke();let{value:f}=e.target;if(o.formatter&&(f=o.parser?o.parser(f):f),!ve.value){if(f===P.value){R();return}s(se,f),s("input",f),await k(),R(),Ue()}},fe=e=>{s("change",e.target.value)},{isComposing:ve,handleCompositionStart:me,handleCompositionUpdate:he,handleCompositionEnd:be}=zt({emit:s,afterComposition:Q}),je=()=>{K.value=!K.value,ye()},ye=async()=>{var e;await k(),(e=N.value)==null||e.focus()},We=()=>{var e;return(e=N.value)==null?void 0:e.blur()},Ye=e=>{q.value=!1,s("mouseleave",e)},Xe=e=>{q.value=!0,s("mouseenter",e)},ge=e=>{s("keydown",e)},Ze=()=>{var e;(e=N.value)==null||e.select()},we=()=>{s(se,""),s("change",""),s("clear"),s("input","")};return M(()=>o.modelValue,()=>{var e;k(()=>L()),o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(f=>void 0))}),M(P,()=>R()),M(()=>o.type,async()=>{await k(),R(),L()}),Ne(()=>{!o.formatter&&o.parser,R(),k(L)}),n({input:D,textarea:S,ref:N,textareaStyle:pe,autosize:Ve(o,"autosize"),isComposing:ve,focus:ye,blur:We,select:Ze,clear:we,resizeTextarea:L}),(e,f)=>(h(),C("div",ne(t(c),{class:[t(i),{[t(u).bm("group","append")]:e.$slots.append,[t(u).bm("group","prepend")]:e.$slots.prepend}],style:t(Me),role:e.containerRole,onMouseenter:Xe,onMouseleave:Ye}),[b(" input "),e.type!=="textarea"?(h(),C(ae,{key:0},[b(" prepend slot "),e.$slots.prepend?(h(),C("div",{key:0,class:g(t(u).be("group","prepend"))},[W(e.$slots,"prepend")],2)):b("v-if",!0),$("div",{ref_key:"wrapperRef",ref:Le,class:g(t(d))},[b(" prefix slot "),e.$slots.prefix||e.prefixIcon?(h(),C("span",{key:0,class:g(t(u).e("prefix"))},[$("span",{class:g(t(u).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(h(),E(t(H),{key:0,class:g(t(u).e("icon"))},{default:A(()=>[(h(),E(Y(e.prefixIcon)))]),_:1},8,["class"])):b("v-if",!0)],2)],2)):b("v-if",!0),$("input",ne({id:t(y),ref_key:"input",ref:D,class:t(u).e("inner")},t(m),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?K.value?"text":"password":e.type,disabled:t(F),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(me),onCompositionupdate:t(he),onCompositionend:t(be),onInput:Q,onChange:fe,onKeydown:ge}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),b(" suffix slot "),t(De)?(h(),C("span",{key:1,class:g(t(u).e("suffix"))},[$("span",{class:g(t(u).e("suffix-inner"))},[!t(j)||!t(G)||!t(V)?(h(),C(ae,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(h(),E(t(H),{key:0,class:g(t(u).e("icon"))},{default:A(()=>[(h(),E(Y(e.suffixIcon)))]),_:1},8,["class"])):b("v-if",!0)],64)):b("v-if",!0),t(j)?(h(),E(t(H),{key:1,class:g([t(u).e("icon"),t(u).e("clear")]),onMousedown:pt(t(ft),["prevent"]),onClick:we},{default:A(()=>[ct(t(dt))]),_:1},8,["class","onMousedown"])):b("v-if",!0),t(G)?(h(),E(t(H),{key:2,class:g([t(u).e("icon"),t(u).e("password")]),onClick:je},{default:A(()=>[(h(),E(Y(t(He))))]),_:1},8,["class"])):b("v-if",!0),t(V)?(h(),C("span",{key:3,class:g(t(u).e("count"))},[$("span",{class:g(t(u).e("count-inner"))},X(t(J))+" / "+X(e.maxlength),3)],2)):b("v-if",!0),t(B)&&t(de)&&t(ce)?(h(),E(t(H),{key:4,class:g([t(u).e("icon"),t(u).e("validateIcon"),t(u).is("loading",t(B)==="validating")])},{default:A(()=>[(h(),E(Y(t(de))))]),_:1},8,["class"])):b("v-if",!0)],2)],2)):b("v-if",!0)],2),b(" append slot "),e.$slots.append?(h(),C("div",{key:1,class:g(t(u).be("group","append"))},[W(e.$slots,"append")],2)):b("v-if",!0)],64)):(h(),C(ae,{key:1},[b(" textarea "),$("textarea",ne({id:t(y),ref_key:"textarea",ref:S,class:[t(re).e("inner"),t(u).is("focus",t(_))]},t(m),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(F),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(me),onCompositionupdate:t(he),onCompositionend:t(be),onInput:Q,onFocus:t(Re),onBlur:t(Ae),onChange:fe,onKeydown:ge}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(V)?(h(),C("span",{key:0,style:vt(ue.value),class:g(t(u).e("count"))},X(t(J))+" / "+X(e.maxlength),7)):b("v-if",!0)],64))],16,["role"]))}});var Ht=mt(At,[["__file","input.vue"]]);const jt=ht(Ht);export{_t as C,jt as E,se as U,kt as a,Ft as b,Nt as c,Ut as d,zt as e,It as f,Kt as t,Pt as u};
