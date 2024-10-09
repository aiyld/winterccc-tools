import{_ as Re}from"./BDZFCrjQ.js";import{l as H,m as Ve,n as Ie,q as Z,v as Le,x as _e,y as ue,z as be,A as Fe,B as Be,C as $e,D as xe,G as He,r as S,H as Pe,I as De,J as w,K as he,L as ze,M as ye,o as l,e as F,w as I,b as _,T as Ye,a as i,N as y,f as e,O as re,P as Xe,k as z,E as M,Q as je,c as v,F as R,R as Ke,S as Ue,U as We,V as Ze,W as Se,X as qe,Y as Ge,j as q,Z as Je,$ as Qe,a0 as le,a1 as Ee,a2 as P,a3 as B,a4 as et,a5 as Ne,a6 as tt,a7 as nt,a8 as st,t as O,a9 as ce,aa as ot,ab as at,ac as de,ad as it,ae as Te,u as Ae}from"./C-IGJznu.js";import{E as lt}from"./BH6FF8JW.js";import{d as rt}from"./HCgaZYcm.js";import{u as ct}from"./BSSO0Nq6.js";import{g as ut}from"./DmbSTgr7.js";import{E as dt}from"./D8WYIPGb.js";import{u as me,g as mt,a as ft}from"./CTW4if-H.js";import{u as Oe}from"./C5G5_jHW.js";import{_ as vt,a as pt}from"./DNA1ySV8.js";import{u as gt,_ as _t}from"./CwqO6zMT.js";import"./Dtxh8alS.js";import"./JAUZZBS7.js";import"./Bja3-nC1.js";const ht=(n,r)=>{if(!H||!n||!r)return!1;const o=n.getBoundingClientRect();let p;return r instanceof Element?p=r.getBoundingClientRect():p={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<p.bottom&&o.bottom>p.top&&o.right>p.left&&o.left<p.right};var yt="Expected a function";function ge(n,r,o){var p=!0,u=!0;if(typeof n!="function")throw new TypeError(yt);return Ve(o)&&(p="leading"in o?!!o.leading:p,u="trailing"in o?!!o.trailing:u),rt(n,r,{leading:p,maxWait:r,trailing:u})}const kt=Ie({urlList:{type:Z(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),wt={close:()=>!0,switch:n=>_e(n),rotate:n=>_e(n)},bt=ue({name:"ElImageViewer"}),Ct=ue({...bt,props:kt,emits:wt,setup(n,{expose:r,emit:o}){var p;const u=n,g={CONTAIN:{name:"contain",icon:be(Fe)},ORIGINAL:{name:"original",icon:be(Be)}},{t:E}=$e(),a=xe("image-viewer"),{nextZIndex:m}=He(),f=S(),d=S([]),c=Pe(),x=S(!0),L=S(u.initialIndex),$=De(g.CONTAIN),k=S({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=S((p=u.zIndex)!=null?p:m()),Y=w(()=>{const{urlList:s}=u;return s.length<=1}),G=w(()=>L.value===0),J=w(()=>L.value===u.urlList.length-1),X=w(()=>u.urlList[L.value]),fe=w(()=>[a.e("btn"),a.e("prev"),a.is("disabled",!u.infinite&&G.value)]),Q=w(()=>[a.e("btn"),a.e("next"),a.is("disabled",!u.infinite&&J.value)]),j=w(()=>{const{scale:s,deg:C,offsetX:h,offsetY:N,enableTransition:T}=k.value;let A=h/s,V=N/s;const W=C*Math.PI/180,ke=Math.cos(W),we=Math.sin(W);A=A*ke+V*we,V=V*ke-h/s*we;const pe={transform:"scale(".concat(s,") rotate(").concat(C,"deg) translate(").concat(A,"px, ").concat(V,"px)"),transition:T?"transform .3s":""};return $.value.name===g.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function K(){ee(),o("close")}function ve(){const s=ge(h=>{switch(h.code){case B.esc:u.closeOnPressEscape&&K();break;case B.space:ae();break;case B.left:ie();break;case B.up:b("zoomIn");break;case B.right:t();break;case B.down:b("zoomOut");break}}),C=ge(h=>{const N=h.deltaY||h.deltaX;b(N<0?"zoomIn":"zoomOut",{zoomRate:u.zoomRate,enableTransition:!1})});c.run(()=>{P(document,"keydown",s),P(document,"wheel",C)})}function ee(){c.stop()}function te(){x.value=!1}function ne(s){x.value=!1,s.target.alt=E("el.image.error")}function se(s){if(x.value||s.button!==0||!f.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,N=s.pageX,T=s.pageY,A=ge(W=>{k.value={...k.value,offsetX:C+W.pageX-N,offsetY:h+W.pageY-T}}),V=P(document,"mousemove",A);P(document,"mouseup",()=>{V()}),s.preventDefault()}function oe(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ae(){if(x.value)return;const s=et(g),C=Object.values(g),h=$.value.name,T=(C.findIndex(A=>A.name===h)+1)%s.length;$.value=g[s[T]],oe()}function U(s){const C=u.urlList.length;L.value=(s+C)%C}function ie(){G.value&&!u.infinite||U(L.value-1)}function t(){J.value&&!u.infinite||U(L.value+1)}function b(s,C={}){if(x.value)return;const{minScale:h,maxScale:N}=u,{zoomRate:T,rotateDeg:A,enableTransition:V}={zoomRate:u.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(s){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/T).toFixed(3)));break;case"zoomIn":k.value.scale<N&&(k.value.scale=Number.parseFloat((k.value.scale*T).toFixed(3)));break;case"clockwise":k.value.deg+=A,o("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=A,o("rotate",k.value.deg);break}k.value.enableTransition=V}return he(X,()=>{ze(()=>{const s=d.value[0];s!=null&&s.complete||(x.value=!0)})}),he(L,s=>{oe(),o("switch",s)}),ye(()=>{var s,C;ve(),(C=(s=f.value)==null?void 0:s.focus)==null||C.call(s)}),r({setActiveItem:U}),(s,C)=>(l(),F(e(lt),{to:"body",disabled:!s.teleported},{default:I(()=>[_(Ye,{name:"viewer-fade",appear:""},{default:I(()=>[i("div",{ref_key:"wrapper",ref:f,tabindex:-1,class:y(e(a).e("wrapper")),style:re({zIndex:D.value})},[i("div",{class:y(e(a).e("mask")),onClick:Xe(h=>s.hideOnClickModal&&K(),["self"])},null,10,["onClick"]),z(" CLOSE "),i("span",{class:y([e(a).e("btn"),e(a).e("close")]),onClick:K},[_(e(M),null,{default:I(()=>[_(e(je))]),_:1})],2),z(" ARROW "),e(Y)?z("v-if",!0):(l(),v(R,{key:0},[i("span",{class:y(e(fe)),onClick:ie},[_(e(M),null,{default:I(()=>[_(e(Ke))]),_:1})],2),i("span",{class:y(e(Q)),onClick:t},[_(e(M),null,{default:I(()=>[_(e(Ue))]),_:1})],2)],64)),z(" ACTIONS "),i("div",{class:y([e(a).e("btn"),e(a).e("actions")])},[i("div",{class:y(e(a).e("actions__inner"))},[_(e(M),{onClick:h=>b("zoomOut")},{default:I(()=>[_(e(We))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("zoomIn")},{default:I(()=>[_(e(Ze))]),_:1},8,["onClick"]),i("i",{class:y(e(a).e("actions__divider"))},null,2),_(e(M),{onClick:ae},{default:I(()=>[(l(),F(Se(e($).icon)))]),_:1}),i("i",{class:y(e(a).e("actions__divider"))},null,2),_(e(M),{onClick:h=>b("anticlockwise")},{default:I(()=>[_(e(qe))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("clockwise")},{default:I(()=>[_(e(Ge))]),_:1},8,["onClick"])],2)],2),z(" CANVAS "),i("div",{class:y(e(a).e("canvas"))},[(l(!0),v(R,null,q(s.urlList,(h,N)=>Je((l(),v("img",{ref_for:!0,ref:T=>d.value[N]=T,key:h,src:h,style:re(e(j)),class:y(e(a).e("img")),crossorigin:s.crossorigin,onLoad:te,onError:ne,onMousedown:se},null,46,["src","crossorigin"])),[[Qe,N===L.value]])),128))],2),le(s.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var It=Ee(Ct,[["__file","image-viewer.vue"]]);const Lt=Ne(It),$t=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),xt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>_e(n),close:()=>!0,show:()=>!0},zt=ue({name:"ElImage",inheritAttrs:!1}),St=ue({...zt,props:$t,emits:xt,setup(n,{emit:r}){const o=n;let p="";const{t:u}=$e(),g=xe("image"),E=tt(),a=w(()=>nt(Object.entries(E).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),m=ct({excludeListeners:!0,excludeKeys:w(()=>Object.keys(a.value))}),f=S(),d=S(!1),c=S(!0),x=S(!1),L=S(),$=S(),k=H&&"loading"in HTMLImageElement.prototype;let D,Y;const G=w(()=>[g.e("inner"),X.value&&g.e("preview"),c.value&&g.is("loading")]),J=w(()=>{const{fit:t}=o;return H&&t?{objectFit:t}:{}}),X=w(()=>{const{previewSrcList:t}=o;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=o;let s=b;return b>t.length-1&&(s=0),s}),Q=w(()=>o.loading==="eager"?!1:!k&&o.loading==="lazy"||o.lazy),j=()=>{H&&(c.value=!0,d.value=!1,f.value=o.src)};function K(t){c.value=!1,d.value=!1,r("load",t)}function ve(t){c.value=!1,d.value=!0,r("error",t)}function ee(){ht(L.value,$.value)&&(j(),se())}const te=st(ee,200,!0);async function ne(){var t;if(!H)return;await ze();const{scrollContainer:b}=o;ot(b)?$.value=b:at(b)&&b!==""?$.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&($.value=ut(L.value)),$.value&&(D=P($,"scroll",te),setTimeout(()=>ee(),100))}function se(){!H||!$.value||!te||(D==null||D(),$.value=void 0)}function oe(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ae(){X.value&&(Y=P("wheel",oe,{passive:!1}),p=document.body.style.overflow,document.body.style.overflow="hidden",x.value=!0,r("show"))}function U(){Y==null||Y(),document.body.style.overflow=p,x.value=!1,r("close")}function ie(t){r("switch",t)}return he(()=>o.src,()=>{Q.value?(c.value=!0,d.value=!1,se(),ne()):j()}),ye(()=>{Q.value?ne():j()}),(t,b)=>(l(),v("div",ce({ref_key:"container",ref:L},e(a),{class:[e(g).b(),t.$attrs.class]}),[d.value?le(t.$slots,"error",{key:0},()=>[i("div",{class:y(e(g).e("error"))},O(e(u)("el.image.error")),3)]):(l(),v(R,{key:1},[f.value!==void 0?(l(),v("img",ce({key:0},e(m),{src:f.value,loading:t.loading,style:e(J),class:e(G),crossorigin:t.crossorigin,onClick:ae,onLoad:K,onError:ve}),null,16,["src","loading","crossorigin"])):z("v-if",!0),c.value?(l(),v("div",{key:1,class:y(e(g).e("wrapper"))},[le(t.$slots,"placeholder",{},()=>[i("div",{class:y(e(g).e("placeholder"))},null,2)])],2)):z("v-if",!0)],64)),e(X)?(l(),v(R,{key:2},[x.value?(l(),F(e(Lt),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:U,onSwitch:ie},{default:I(()=>[t.$slots.viewer?(l(),v("div",{key:0},[le(t.$slots,"viewer")])):z("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):z("v-if",!0)],64)):z("v-if",!0)],16))}});var Et=Ee(St,[["__file","image.vue"]]);const Nt=Ne(Et),Tt={class:"item-title"},At=["src"],Ot={key:1},Mt={class:"text-title"},Rt={class:"image-slot"},Vt={key:1,class:"text-tertiary d-text"},Ft={class:"item-title"},Bt=["src"],Ht={key:1},Pt={class:"text-title"},Dt={class:"item-des"},Me={__name:"FuncItem",props:{item:{type:Object,default:()=>{}},isTheme:{type:Boolean,default:!1}},setup(n){const r=n,o=me(),{likes:p}=de(o),u=w(()=>r.item.href?{is:"a",props:{href:r.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:Re,props:{to:mt(r.item)}}),g=w(()=>{const a=r.item.name||r.item.title;return p.value.includes(a)}),E=a=>{a.stopPropagation(),a.preventDefault();const m=r.item.name||r.item.title,f=p.value.findIndex(c=>c===m),d=p.value.concat();f>=0?d.splice(f,1):d.push(m),o.setLikes(d)};return(a,m)=>{const f=M,d=Nt,c=dt;return l(),F(Se(e(u).is),ce(e(u).props,{class:["c-func-item",{"is-theme":n.isTheme}]}),{default:I(()=>[_(c,{placement:"bottom",width:320,offset:25,trigger:"hover",persistent:!1,disabled:!n.item.image,"popper-class":"popper-func-item","popper-style":a.$attrs},{reference:I(()=>[i("div",null,[i("div",Ft,[i("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(l(),v("img",{key:0,src:n.item.logo},null,8,Bt)):(l(),v("span",Ht,O(n.item.title[0].toUpperCase()),1))],2),i("span",Pt,O(n.item.title),1)]),i("p",Dt,O(n.item.description),1),i("i",{class:y(["iconfont for-store",e(g)?"icon-store":"icon-unstore"]),onClick:E},null,2)])]),default:I(()=>[i("div",ce(a.$attrs,{class:["popper-func-item-main",{"is-theme":n.isTheme}]}),[i("div",Tt,[i("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(l(),v("img",{key:0,src:n.item.logo},null,8,At)):(l(),v("span",Ot,O(n.item.title[0].toUpperCase()),1))],2),i("span",Mt,O(n.item.title),1)]),i("div",{class:y(["description-area",{"col-view":n.item.colView}])},[n.item.image?(l(),F(d,{key:0,src:n.item.image,class:"w-full"},{error:I(()=>[i("div",Rt,[_(f,null,{default:I(()=>[_(e(it))]),_:1})])]),_:1},8,["src"])):z("",!0),n.item.description?(l(),v("p",Vt,O(n.item.description),1)):z("",!0)],2)],16)]),_:1},8,["disabled","popper-style"])]),_:1},16,["class"])}}},Yt={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Xt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},jt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Yt,zh_Hans_CN:Xt,zh_Hant_HK:jt},Kt={class:"c-common-like-func"},Ut={key:0,class:"empty"},Wt=["id"],Zt={class:"sub-items"},qt={__name:"LikeFunc",setup(n){const r=m=>{const d=Ae().$lang.value||"zh_Hans_CN",c=Ce[d]||Ce.zh_Hans_CN||{};return c[m]===void 0?m:c[m]},{menus:o}=Oe(),p=me(),{category:u,likes:g}=de(p);Te();const E=w(()=>g.value.reduce((m,f)=>(m[f]=!0,m),{})),a=w(()=>{const m=[];for(let f=0;f<o.length;f++){const d=[];o[f].subMenus.forEach(c=>{const x=c.name||c.title;E.value[x]&&d.push(c)}),d.length>0&&m.push({...o[f],subMenus:d})}return m});return(m,f)=>{const d=Me;return l(),v("div",Kt,[e(a).length===0?(l(),v("div",Ut,[f[0]||(f[0]=i("img",{src:vt},null,-1)),i("p",null,O(r("还没有收藏，快去_e17e")),1)])):z("",!0),(l(!0),v(R,null,q(e(a),(c,x)=>(l(),v("div",{key:x,class:"category"},[i("p",{id:c.name,class:y(["title",{active:c.name===e(u)}])},O(c.title),11,Wt),i("div",Zt,[(l(!0),v(R,null,q(c.subMenus,(L,$)=>(l(),F(d,{key:$,item:L,style:re({"--bg-color":c.color,"--logo-color":c.logoColor}),"is-theme":c.isTheme},null,8,["item","style","is-theme"]))),128))])]))),128))])}}},Gt={class:"c-common-all-func"},Jt=["id"],Qt={class:"sub-items"},en={__name:"AllFunc",setup(n){const{menus:r}=Oe(),o=me(),{category:p}=de(o),u=Te();return ye(()=>{const g=u.hash.slice(1).toLowerCase();if(g){const E=document.getElementById(g);E&&E.scrollIntoView()}else o.setCategory("")}),(g,E)=>{const a=Me;return l(),v("div",Gt,[(l(!0),v(R,null,q(e(r),(m,f)=>(l(),v("div",{key:f,class:"category"},[i("div",{id:m.name,class:"anchor"},null,8,Jt),i("p",{class:y(["title",{active:m.name===e(p)}])},O(m.title),3),i("div",Qt,[(l(!0),v(R,null,q(m.subMenus,(d,c)=>(l(),v(R,{key:c},[!d.brand||d.brand.includes(g.$brandName)?(l(),F(a,{key:0,item:d,class:y({"small-size":d.title.length>18}),style:re({"--bg-color":m.color,"--logo-color":m.logoColor}),"is-theme":m.isTheme},null,8,["item","class","style","is-theme"])):z("",!0)],64))),128))])]))),128))])}}},tn={class:"p-index"},nn={key:0,class:"page-stage pb-60"},sn={class:"left-content"},on={class:"fixed-area"},an={class:"right-content"},wn={__name:"index",setup(n){const r=Ae(),o=S();gt(o),ft({title:r.$brand.name,ogTitle:r.$brand.name,description:r.$brand.description,ogDescription:r.$brand.description});const p=me(),{nav:u}=de(p);return(g,E)=>{const a=qt,m=_t,f=pt,d=en;return l(),v("div",tn,[e(u)==="like"?(l(),v("div",nn,[_(a)])):(l(),v("div",{key:1,ref_key:"container",ref:o,class:"page-container pt-30 pb-60"},[i("div",sn,[i("div",on,[_(m),_(f)])]),i("div",an,[_(d)])],512))])}}};export{wn as default};
