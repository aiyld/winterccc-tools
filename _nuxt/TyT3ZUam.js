import{a6 as P,bO as ae,K as U,r as N,a9 as se,a3 as re,N as I,A as v,H as A,k as D,o as a,e as y,w as F,f as s,c as p,P as T,O as C,Q as le,a1 as $,b as f,E as Y,aS as ie,m as S,T as ce,a2 as k,aE as de,bf as M,bP as pe,u as w,bQ as H,ad as q,a as e,d as L,t as g,aU as me,F as B,j as x,i as he,p as _e,af as ge,bR as Ee,ag as fe,aM as ve}from"./BNsgShM9.js";import{t as Fe,E as Ce}from"./oaAg811x.js";import{u as J}from"./DpPLLGsh.js";import{a as De,u as V,l as z,g as Be}from"./BxfYUxGj.js";import{_ as R}from"./Xr5HSo6B.js";import{E as G}from"./DSOJzMXM.js";import"./CJnpgddK.js";import{u as be}from"./D7Z_LlRo.js";import{_ as xe,a as we}from"./D6i-SQhI.js";import{_ as ye}from"./BNaHyuxV.js";import{_ as Ae}from"./DCaJU8ko.js";const Du=P(ae),$e={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},ke={click:l=>l instanceof MouseEvent},Se=(l,t,u)=>{const n=U(),d=U(),h=N(!1),o=()=>{n.value&&(h.value=n.value.scrollTop>=l.visibilityHeight)},r=c=>{var E;(E=n.value)==null||E.scrollTo({top:0,behavior:"smooth"}),t("click",c)},i=se(o,300,!0);return re(d,"scroll",i),I(()=>{var c;d.value=document,n.value=document.documentElement,l.target&&(n.value=(c=document.querySelector(l.target))!=null?c:void 0,n.value||Fe(u,"target does not exist: ".concat(l.target)),d.value=n.value),o()}),{visible:h,handleClick:r}},Q="ElBacktop",Ne=v({name:Q}),Te=v({...Ne,props:$e,emits:ke,setup(l,{emit:t}){const u=l,n=A("backtop"),{handleClick:d,visible:h}=Se(u,t,Q),o=D(()=>({right:"".concat(u.right,"px"),bottom:"".concat(u.bottom,"px")}));return(r,i)=>(a(),y(ce,{name:"".concat(s(n).namespace.value,"-fade-in")},{default:F(()=>[s(h)?(a(),p("div",{key:0,style:T(s(o)),class:C(s(n).b()),onClick:le(s(d),["stop"])},[$(r.$slots,"default",{},()=>[f(s(Y),{class:C(s(n).e("icon"))},{default:F(()=>[f(s(ie))]),_:1},8,["class"])])],14,["onClick"])):S("v-if",!0)]),_:3},8,["name"]))}});var Me=k(Te,[["__file","backtop.vue"]]);const Bu=P(Me),ze=v({name:"ElContainer"}),He=v({...ze,props:{direction:{type:String}},setup(l){const t=l,u=de(),n=A("container"),d=D(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:u&&u.default?u.default().some(o=>{const r=o.type.name;return r==="ElHeader"||r==="ElFooter"}):!1);return(h,o)=>(a(),p("section",{class:C([s(n).b(),s(n).is("vertical",s(d))])},[$(h.$slots,"default")],2))}});var Pe=k(He,[["__file","container.vue"]]);const Le=v({name:"ElAside"}),Ve=v({...Le,props:{width:{type:String,default:null}},setup(l){const t=l,u=A("aside"),n=D(()=>t.width?u.cssVarBlock({width:t.width}):{});return(d,h)=>(a(),p("aside",{class:C(s(u).b()),style:T(s(n))},[$(d.$slots,"default")],6))}});var X=k(Ve,[["__file","aside.vue"]]);const Re=v({name:"ElFooter"}),Ue=v({...Re,props:{height:{type:String,default:null}},setup(l){const t=l,u=A("footer"),n=D(()=>t.height?u.cssVarBlock({height:t.height}):{});return(d,h)=>(a(),p("footer",{class:C(s(u).b()),style:T(s(n))},[$(d.$slots,"default")],6))}});var Z=k(Ue,[["__file","footer.vue"]]);const je=v({name:"ElHeader"}),Oe=v({...je,props:{height:{type:String,default:null}},setup(l){const t=l,u=A("header"),n=D(()=>t.height?u.cssVarBlock({height:t.height}):{});return(d,h)=>(a(),p("header",{class:C(s(u).b()),style:T(s(n))},[$(d.$slots,"default")],6))}});var ee=k(Oe,[["__file","header.vue"]]);const Ke=v({name:"ElMain"}),We=v({...Ke,setup(l){const t=A("main");return(u,n)=>(a(),p("main",{class:C(s(t).b())},[$(u.$slots,"default")],2))}});var te=k(We,[["__file","main.vue"]]);const bu=P(Pe,{Aside:X,Footer:Z,Header:ee,Main:te});M(X);M(Z);const Ie=M(ee);M(te);const Ye=l=>{const t=Object.create(null);for(const u in l){const n=l[u];n!==void 0&&(t[u]=n)}return t},ue=(l,t)=>(u,n)=>(J(()=>l({...Ye(u),...n.attrs},n)),()=>{var d,h;return t?(h=(d=n.slots).default)==null?void 0:h.call(d):null}),qe={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},xu=v({name:"Title",inheritAttrs:!1,setup:ue((l,{slots:t})=>{var u,n,d;return{title:((d=(n=(u=t.default)==null?void 0:u.call(t))==null?void 0:n[0])==null?void 0:d.children)||null}})}),Je=v({name:"Meta",inheritAttrs:!1,props:{...qe,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:ue(l=>{const t={...l};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),Ge=v({name:"Head",inheritAttrs:!1,setup:(l,t)=>()=>{var u,n;return(n=(u=t.slots).default)==null?void 0:n.call(u)}}),wu={__name:"Meta",setup(l){const t=pe().public,u=w();return t.NODE_ENV!=="development"&&J({script:[{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(u.$brand.ga)},"window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', '".concat(u.$brand.ga,"');\n"),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9684175232031230",crossorigin:"anonymous"}]}),De({ogImage:"/slogan.png",twitterCard:"summary_large_image"}),(n,d)=>{const h=Je,o=Ge;return a(),y(o,null,{default:F(()=>[n.$brandName==="winterccc"?(a(),y(h,{key:0,name:"baidu-site-verification",content:"codeva-WnOwRw6jLE"})):S("",!0)]),_:1})}}},Qe={class:"c-lang-legal"},Xe={class:"relative ml-32 inline-flex items-center cursor-pointer border-gray-06 border px-8 py-4 rounded-8"},Ze=["src"],et={class:"c-lang-legal-box"},tt={class:"c-contain"},ut={class:"c-list"},nt=["onClick"],ot=["src"],at={class:"flex-shrink-0"},st={__name:"LangSelect",setup(l){const{setLang:t}=H(),u=N(!1),n=H(),{langOptions:d,lang:h,currentLang:o}=q(n);return(r,i)=>{const c=Y,E=G;return a(),p("div",Qe,[f(E,{visible:s(u),"onUpdate:visible":i[0]||(i[0]=_=>he(u)?u.value=_:null),width:"120",placement:"bottom-end","popper-class":"c-lang-legal-popover",trigger:"hover"},{reference:F(()=>[e("span",Xe,[e("img",{src:s(o).icon,class:"mr-8"},null,8,Ze),L(" "+g(s(o).text)+" ",1),f(c,{class:"ml-4 text-12"},{default:F(()=>[f(s(me))]),_:1})])]),default:F(()=>[e("div",et,[e("div",tt,[e("ul",ut,[(a(!0),p(B,null,x(s(d),(_,m)=>(a(),p("li",{key:m+_.val,class:C("item-list ".concat(s(h)===_.val&&"list-item-active")),onClick:b=>s(t)(_.val)},[e("img",{src:_.icon,class:"mr-12"},null,8,ot),e("div",at,g(_.text),1)],10,nt))),128))])])])]),_:1},8,["visible"])])}}},ne=_e("/logo.svg"),rt={打赏:"Donate",技术博客:"Technology Blog",首页:"Home"},lt={打赏:"打赏",技术博客:"技术博客",首页:"首页"},it={打赏:"打賞",技术博客:"技術博客",首页:"首頁"},j={en_US:rt,zh_Hans_CN:lt,zh_Hant_HK:it},ct={class:"c-common-header"},dt={key:0,class:"sub-logo"},pt={class:"nav-items"},mt=["href"],yu={__name:"Header",setup(l){const t=o=>{const i=w().$lang.value||"zh_Hans_CN",c=j[i]||j.zh_Hans_CN||{};return c[o]===void 0?o:c[o]},u=w(),n=V(),d=ge(),h=D(()=>[{title:t("首页"),url:"/",inner:!0},{title:t("技术博客"),url:u.$brand.site},{title:t("打赏"),url:"/donate",inner:!0}]);return I(()=>{n.initLikes()}),(o,r)=>{const i=R,c=st,E=Ie;return a(),p("div",ct,[f(E,{class:"c-common-header-inner"},{default:F(()=>[f(i,{to:"/",class:"flex space-x-8 items-center"},{default:F(()=>[o.$brandName==="winter100"?(a(),p("div",dt,r[0]||(r[0]=[e("svg",{t:"1696732448231",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6740","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[e("defs",null,[e("linearGradient",{id:"left-to-right"},[e("stop",{offset:"0","stop-color":"#ed3da1"},[e("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})]),e("stop",{offset:"0","stop-color":"#ffe9f6"},[e("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})])])]),e("path",{d:"M105.321374 914.265136c-11.700669 0-17.551004-11.702475-17.551003-17.541972 0-5.870203 5.850335-17.551004 11.7097-17.551004 269.155125-111.194286 561.722425-169.684988 848.441196-181.3983v5.839497c23.410369 0 52.662042-5.839497 76.076024-5.839497v11.711506c-292.558269 29.251673-579.284266 87.756824-854.300562 175.535323-17.551004 17.541972-40.964985 23.403144-64.375355 29.244447zM772.382332 580.741882c-29.260704 0-58.514183-5.861172-76.054349-29.240835-17.55281-23.412175-35.123682-46.826157-35.123681-76.079636 0-81.917327 23.403144-157.984319 76.068798-222.350642 46.835188-64.377161 117.042815-111.168999 193.106195-140.433316 29.251673 0 52.654817 17.563647 64.368129 40.954148-5.862978 5.850335-11.711506 11.711506-17.563647 11.711506 29.251673 11.700669 40.952342 35.102007 40.952342 64.366324 5.862978 163.834654-99.459299 310.121916-245.753787 351.072451z m157.996963-374.484627c-11.702475 5.850335-29.273347 17.551004-40.954148 29.264316-5.870203 0-5.870203-5.850335-5.870203-11.711506-87.778499 52.665654-146.281844 146.294487-152.114116 245.742949 0 11.711506 5.832272 52.665654 23.38147 46.835188 29.284184-11.7097 52.662042-23.423013 70.225688-46.835188 19.503523-21.441593 39.00524-42.894024 58.506958-64.344648 35.121876-46.81532 58.535857-105.320471 70.216658-163.847297 11.700669-17.55281-5.848528-29.253479-23.392307-35.103814zM122.872378 288.185419l-64.366323 29.251673c-5.839497 5.839497-11.689832 5.839497-17.540167 5.839497-5.862978 0-5.862978-11.713313-5.862978-17.540166 0-17.551004 11.713313-29.264316 29.273347-35.114651 35.103813-29.264316 70.20582-52.654817 111.158163-70.216657 17.551004 5.850335 29.264316 23.403144 35.11465 40.952341 0 17.540166 0 17.540166-81.919133 204.812282-29.249866 58.505151-52.651204 122.873281-58.523213 187.237798 0 5.852141 5.872009 17.55281 5.872009 23.412176v5.841303c-1.959745 1.948907-3.910458 3.912264-5.872009 5.861172-5.830466 0-11.700669 0-11.700669-5.861172-29.253479 0-52.663848-17.55281-58.505152-46.804482 0-46.813513 11.711506-99.470137 29.251673-140.433316 23.413982-64.366323 58.517795-122.871475 93.619802-187.237798zM637.792126 282.326054c11.700669 157.984319-87.760436 298.417635-239.892614 339.380813-29.264316 0-58.515989-5.850335-76.07783-29.264316-23.401338-17.561841-35.092976-46.813513-35.092976-76.056155 0-81.926358 23.403144-157.99335 76.068798-222.359673 46.804482-64.355486 117.008497-111.159968 193.086327-140.433316 29.242642 0 52.665654 17.551004 64.368129 40.975823-5.852141 5.839497-11.702475 11.689832-17.55281 11.689832 17.551004 17.549197 35.092976 46.811707 35.092976 76.066992z m-81.908295-35.103814c-11.7097 5.850335-29.260704 17.551004-40.963179 29.251673-5.850335 0-5.850335-5.850335-5.850335-11.700669-87.769468 52.665654-146.272813 146.28365-152.135791 245.762818 0 11.680801 5.862978 52.663848 23.413982 46.793645 29.251673-11.702475 52.665654-23.403144 70.20582-46.793645a140273.571944 140273.571944 0 0 0 58.515989-64.366324c35.103813-46.826157 58.514183-105.320471 70.214852-163.84549 11.713313-17.551004-5.839497-29.253479-23.401338-35.102008zM23.414885 808.944665c269.155125-111.170806 561.711587-169.684988 848.437584-181.3983v5.859365c29.251673 0 52.665654-5.859366 76.068798-5.859365v11.711506c-292.558269 29.26251-579.287878 87.778499-854.302368 175.544354-23.413982 11.713313-40.954148 17.554616-64.36813 23.3905h-5.837691c-5.872009 0-11.702475-5.835885-11.702475-17.551003 3.903233-3.896009 7.804661-7.797436 11.704282-11.697057z",fill:"url(#left-to-right)","p-id":"6741",class:"logo-path"})],-1)]))):S("",!0),e("img",{class:C(o.$brandName==="winter100"?"h-40":"h-30"),src:ne},null,2)]),_:1}),e("div",pt,[(a(!0),p(B,null,x(s(h),(_,m)=>(a(),p(B,{key:m},[_.inner?(a(),y(i,{key:1,to:_.url,class:C(["nav-item",{active:s(d).path===_.url}])},{default:F(()=>[L(g(_.title),1)]),_:2},1032,["to","class"])):(a(),p("a",{key:0,class:"nav-item",target:"_blank",rel:"noopener noreferrer",href:_.url},g(_.title),9,mt))],64))),128))]),r[1]||(r[1]=e("div",{class:"flex-1"},null,-1)),f(c)]),_:1})])}}},ht={搜索:"Search"},_t={搜索:"搜索"},gt={搜索:"搜索"},O={en_US:ht,zh_Hans_CN:_t,zh_Hant_HK:gt},Et={class:"c-search-tool"},ft={class:"search-list"},vt={key:0,class:"empty",src:xe},Ft=["href"],Ct={class:"font-w500 text-primary"},Dt={class:"description text-12 text-tertiary"},Bt={class:"font-w500 text-primary"},bt={class:"description text-12 text-tertiary"},xt={__name:"SearchTool",setup(l){const t=r=>{const c=w().$lang.value||"zh_Hans_CN",E=O[c]||O.zh_Hans_CN||{};return E[r]===void 0?r:E[r]},u=N(""),n=N(!1),{menus:d}=be(),h=D(()=>{const r=[];for(let i=0;i<d.length;i++)d[i].subMenus.forEach(c=>{r.push(c)});return r}),o=D(()=>(z(u.value),u.value?h.value.filter(r=>z(r.title).includes(u.value)||z(r.description).includes(u.value)):h.value));return(r,i)=>{const c=Ce,E=R,_=G;return a(),p("div",Et,[f(_,{visible:n.value,"onUpdate:visible":i[3]||(i[3]=m=>n.value=m),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"hover","show-arrow":!1},{reference:F(()=>[f(c,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=m=>u.value=m),style:{width:"240px"},size:"small",placeholder:t("搜索"),"prefix-icon":s(Ee)},null,8,["modelValue","placeholder","prefix-icon"])]),default:F(()=>[e("div",ft,[s(o).length===0?(a(),p("img",vt)):S("",!0),(a(!0),p(B,null,x(s(o),(m,b)=>(a(),p(B,{key:b},[m.href?(a(),p("a",{key:0,href:m.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:i[1]||(i[1]=oe=>n.value=!1)},[e("p",Ct,g(m.title),1),e("p",Dt,g(m.description),1)],8,Ft)):(a(),y(E,{key:1,class:"search-item",to:("getRouteName"in r?r.getRouteName:s(Be))(m),onClick:i[2]||(i[2]=oe=>n.value=!1)},{default:F(()=>[e("p",Bt,g(m.title),1),e("p",bt,g(m.description),1)]),_:2},1032,["to"]))],64))),128))])]),_:1},8,["visible"])])}}},wt={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},yt={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},At={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},K={en_US:wt,zh_Hans_CN:yt,zh_Hant_HK:At},$t={class:"c-common-slogan"},kt={class:"flex items-center"},St={class:"slogan-text"},Nt={class:"slogan-nav"},Tt=["onClick"],Mt=["href"],Au={__name:"Slogan",setup(l){const t=o=>{const i=w().$lang.value||"zh_Hans_CN",c=K[i]||K.zh_Hans_CN||{};return c[o]===void 0?o:c[o]},u=V(),{nav:n}=q(u),d=fe([{title:t("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:t("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),h=o=>{u.setNav(o),ve().push("/")};return(o,r)=>{const i=xt;return a(),p("div",$t,[e("div",kt,[r[0]||(r[0]=e("i",{class:"iconfont icon-wonhot"},null,-1)),e("p",St,g(t("万花筒工具箱")),1),e("div",Nt,[(a(!0),p(B,null,x(s(d),(c,E)=>(a(),p("div",{key:E,class:C(["nav-item",{active:c.val===s(n)}]),onClick:_=>h(c.val)},[e("i",{class:C([c.icon,c.val===s(n)?c.active:""])},null,2),e("span",null,g(c.title),1)],10,Tt))),128))])]),r[1]||(r[1]=e("div",{class:"flex-1"},null,-1)),e("a",{href:o.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},g(t("没有找到工具？提_ff19")),9,Mt),f(i)])}}},zt={导航:"LINKS",打赏:"DONATE",技术博客:"Technology Blog",首页:"Home"},Ht={导航:"导航",打赏:"打赏",技术博客:"技术博客",首页:"首页"},Pt={导航:"導航",打赏:"打賞",技术博客:"技術博客",首页:"首頁"},W={en_US:zt,zh_Hans_CN:Ht,zh_Hant_HK:Pt},Lt={class:"c-footer"},Vt={class:"common-footer-inner"},Rt={class:"logo-contract"},Ut={key:0,class:"sub-logo"},jt={class:"contacts"},Ot=["href"],Kt={class:"nav-area"},Wt={class:"pr-20"},It={class:"label"},Yt={class:"z-1"},qt={class:"nav-items"},Jt=["href"],Gt={class:"donate-area"},Qt={class:"pr-20"},Xt={class:"label"},Zt={class:"z-1"},eu={class:"donate-list"},tu={class:"ml-12"},uu={class:"flex items-center mt-4"},nu=["src"],ou={class:"ml-8 text-primary font-w500 text-16 flex-1"},au={class:"mt-12 text-addr"},su={class:""},ru={class:"flex-1 ml-20 flex justify-end xs:hidden"},$u={__name:"Footer",setup(l){const t=o=>{const i=w().$lang.value||"zh_Hans_CN",c=W[i]||W.zh_Hans_CN||{};return c[o]===void 0?o:c[o]},u=w(),{donateCoins:n}=V(),d=D(()=>[{title:t("首页"),url:"/",inner:!0},{title:t("技术博客"),url:u.$brand.site},{title:"Winter100",url:"https://winter100.com"},{title:"WinterMain",url:"https://github.com/WinterMain"},{title:"WinterPlus",url:"https://github.com/winterplus"}]),h=D(()=>[{icon:"iconfont icon-youxiang",url:"mailto:yldiswinter@gmail.com"},{icon:"iconfont icon-github",url:"https://github.com/WinterMain"}]);return(o,r)=>{const i=R,c=ye,E=Ae,_=we;return a(),p("div",Lt,[e("div",Vt,[e("div",Rt,[f(i,{to:"/",class:"inline-flex space-x-8 items-center"},{default:F(()=>[o.$brandName==="winter100"?(a(),p("div",Ut,r[0]||(r[0]=[e("svg",{t:"1696732448231",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6740","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[e("defs",null,[e("linearGradient",{id:"left-to-right"},[e("stop",{offset:"0","stop-color":"#ed3da1"},[e("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})]),e("stop",{offset:"0","stop-color":"#ffe9f6"},[e("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})])])]),e("path",{d:"M105.321374 914.265136c-11.700669 0-17.551004-11.702475-17.551003-17.541972 0-5.870203 5.850335-17.551004 11.7097-17.551004 269.155125-111.194286 561.722425-169.684988 848.441196-181.3983v5.839497c23.410369 0 52.662042-5.839497 76.076024-5.839497v11.711506c-292.558269 29.251673-579.284266 87.756824-854.300562 175.535323-17.551004 17.541972-40.964985 23.403144-64.375355 29.244447zM772.382332 580.741882c-29.260704 0-58.514183-5.861172-76.054349-29.240835-17.55281-23.412175-35.123682-46.826157-35.123681-76.079636 0-81.917327 23.403144-157.984319 76.068798-222.350642 46.835188-64.377161 117.042815-111.168999 193.106195-140.433316 29.251673 0 52.654817 17.563647 64.368129 40.954148-5.862978 5.850335-11.711506 11.711506-17.563647 11.711506 29.251673 11.700669 40.952342 35.102007 40.952342 64.366324 5.862978 163.834654-99.459299 310.121916-245.753787 351.072451z m157.996963-374.484627c-11.702475 5.850335-29.273347 17.551004-40.954148 29.264316-5.870203 0-5.870203-5.850335-5.870203-11.711506-87.778499 52.665654-146.281844 146.294487-152.114116 245.742949 0 11.711506 5.832272 52.665654 23.38147 46.835188 29.284184-11.7097 52.662042-23.423013 70.225688-46.835188 19.503523-21.441593 39.00524-42.894024 58.506958-64.344648 35.121876-46.81532 58.535857-105.320471 70.216658-163.847297 11.700669-17.55281-5.848528-29.253479-23.392307-35.103814zM122.872378 288.185419l-64.366323 29.251673c-5.839497 5.839497-11.689832 5.839497-17.540167 5.839497-5.862978 0-5.862978-11.713313-5.862978-17.540166 0-17.551004 11.713313-29.264316 29.273347-35.114651 35.103813-29.264316 70.20582-52.654817 111.158163-70.216657 17.551004 5.850335 29.264316 23.403144 35.11465 40.952341 0 17.540166 0 17.540166-81.919133 204.812282-29.249866 58.505151-52.651204 122.873281-58.523213 187.237798 0 5.852141 5.872009 17.55281 5.872009 23.412176v5.841303c-1.959745 1.948907-3.910458 3.912264-5.872009 5.861172-5.830466 0-11.700669 0-11.700669-5.861172-29.253479 0-52.663848-17.55281-58.505152-46.804482 0-46.813513 11.711506-99.470137 29.251673-140.433316 23.413982-64.366323 58.517795-122.871475 93.619802-187.237798zM637.792126 282.326054c11.700669 157.984319-87.760436 298.417635-239.892614 339.380813-29.264316 0-58.515989-5.850335-76.07783-29.264316-23.401338-17.561841-35.092976-46.813513-35.092976-76.056155 0-81.926358 23.403144-157.99335 76.068798-222.359673 46.804482-64.355486 117.008497-111.159968 193.086327-140.433316 29.242642 0 52.665654 17.551004 64.368129 40.975823-5.852141 5.839497-11.702475 11.689832-17.55281 11.689832 17.551004 17.549197 35.092976 46.811707 35.092976 76.066992z m-81.908295-35.103814c-11.7097 5.850335-29.260704 17.551004-40.963179 29.251673-5.850335 0-5.850335-5.850335-5.850335-11.700669-87.769468 52.665654-146.272813 146.28365-152.135791 245.762818 0 11.680801 5.862978 52.663848 23.413982 46.793645 29.251673-11.702475 52.665654-23.403144 70.20582-46.793645a140273.571944 140273.571944 0 0 0 58.515989-64.366324c35.103813-46.826157 58.514183-105.320471 70.214852-163.84549 11.713313-17.551004-5.839497-29.253479-23.401338-35.102008zM23.414885 808.944665c269.155125-111.170806 561.711587-169.684988 848.437584-181.3983v5.859365c29.251673 0 52.665654-5.859366 76.068798-5.859365v11.711506c-292.558269 29.26251-579.287878 87.778499-854.302368 175.544354-23.413982 11.713313-40.954148 17.554616-64.36813 23.3905h-5.837691c-5.872009 0-11.702475-5.835885-11.702475-17.551003 3.903233-3.896009 7.804661-7.797436 11.704282-11.697057z",fill:"url(#left-to-right)","p-id":"6741",class:"logo-path"})],-1)]))):S("",!0),e("img",{class:C(o.$brandName==="winter100"?"h-50":"h-40"),src:ne},null,2)]),_:1}),e("div",jt,[(a(!0),p(B,null,x(s(h),(m,b)=>(a(),p("a",{key:b,class:"contact-item",href:m.url},[e("i",{class:C(m.icon)},null,2)],8,Ot))),128))])]),e("div",Kt,[e("div",Wt,[e("p",It,[e("span",Yt,g(t("导航")),1)])]),e("div",qt,[(a(!0),p(B,null,x(s(d),(m,b)=>(a(),p(B,{key:b},[m.inner?(a(),y(i,{key:1,to:m.url,class:"nav-item"},{default:F(()=>[L(g(m.title),1)]),_:2},1032,["to"])):(a(),p("a",{key:0,class:"nav-item",target:"_blank",rel:"noopener noreferrer",href:m.url},g(m.title),9,Jt))],64))),128))])]),e("div",Gt,[e("div",Qt,[e("p",Xt,[e("span",Zt,g(t("打赏")),1)])]),e("div",eu,[(a(!0),p(B,null,x(s(n),(m,b)=>(a(),p("div",{key:b,class:"donate-item"},[f(c,{value:m.address,size:60},null,8,["value"]),e("div",tu,[e("div",uu,[e("img",{src:m.icon,height:"30",class:"h-20"},null,8,nu),e("span",ou,g(m.coin),1),f(E,{msg:m.address,"class-name":"text-12"},null,8,["msg"])]),e("p",au,[e("span",su,g(m.address),1)])])]))),128))])]),e("div",ru,[f(_,{class:"mt-0"})])])])}}};/*! Element Plus v2.8.2 */var lu={name:"zh-cn",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"确定",clear:"清空",defaultLabel:"颜色选择器",description:"当前颜色 {color}，按 Enter 键选择新颜色",alphaLabel:"选择透明度的值"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",dateTablePrompt:"使用方向键与 Enter 键可选择日期",monthTablePrompt:"使用方向键与 Enter 键可选择月份",yearTablePrompt:"使用方向键与 Enter 键可选择年份",selectedDate:"已选日期",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"减少数值",increase:"增加数值"},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},dropdown:{toggleDropdown:"切换下拉选项"},mention:{loading:"加载中"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},dialog:{close:"关闭此对话框"},drawer:{close:"关闭此对话框"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!",close:"关闭此对话框"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},slider:{defaultLabel:"滑块介于 {min} 至 {max}",defaultRangeStartLabel:"选择起始值",defaultRangeEndLabel:"选择结束值"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tour:{next:"下一步",previous:"上一步",finish:"结束导览"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},carousel:{leftArrow:"上一张幻灯片",rightArrow:"下一张幻灯片",indicator:"幻灯片切换至索引 {index}"}}};/*! Element Plus v2.8.2 */var iu={name:"zh-tw",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"確認",clear:"清空",defaultLabel:"色彩選擇器",description:"目前色彩為 {color}。按一下 Enter 以選擇新色彩。",alphaLabel:"選擇透明度的值"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",dateTablePrompt:"使用方向鍵與 Enter 鍵以選擇日期",monthTablePrompt:"使用方向鍵與 Enter 鍵以選擇月份",yearTablePrompt:"使用方向鍵與 Enter 鍵以選擇年份",selectedDate:"已選日期",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",prevYear:"前一年",nextYear:"後一年",prevMonth:"上個月",nextMonth:"下個月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"減少數值",increase:"增加數值"},select:{loading:"載入中",noMatch:"無相符資料",noData:"無資料",placeholder:"請選擇"},mention:{loading:"載入中"},dropdown:{toggleDropdown:"切換下拉選單"},cascader:{noMatch:"無相符資料",loading:"載入中",placeholder:"請選擇",noData:"無資料"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁",page:"頁",prev:"上一頁",next:"下一頁",currentPage:"第 {pager} 頁",prevPages:"向前 {pager} 頁",nextPages:"向後 {pager} 頁",deprecationWarning:"偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊"},dialog:{close:"關閉此對話框"},drawer:{close:"關閉此對話框"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!",close:"關閉此對話框"},upload:{deleteTip:"按一下 Delete 鍵以刪除",delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},slider:{defaultLabel:"滑桿介於 {min} 至 {max}",defaultRangeStartLabel:"選擇起始值",defaultRangeEndLabel:"選擇結束值"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"合計"},tour:{next:"下一步",previous:"上一步",finish:"結束導覽"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無相符資料",noData:"無資料",titles:["列表 1","列表 2"],filterPlaceholder:"請輸入搜尋內容",noCheckedFormat:"共 {total} 項",hasCheckedFormat:"已選 {checked}/{total} 項"},image:{error:"載入失敗"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"確認",cancelButtonText:"取消"},carousel:{leftArrow:"上一張投影片",rightArrow:"下一張投影片",indicator:"投影片切換至索引 {index}"}}};/*! Element Plus v2.8.2 */var cu={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};function ku(){const l=H();return D(()=>{const u=l.lang||l.defaultLang;return u==="zh_Hans_CN"?lu:u==="en_US"?cu:iu})}export{Du as E,Ge as H,xu as T,wu as _,yu as a,Au as b,$u as c,Bu as d,bu as e,ku as u};
