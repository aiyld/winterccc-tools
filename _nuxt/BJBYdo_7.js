import{d as N,u as s,a as M}from"./CdtZkSgz.js";import{a2 as S,A as g,a1 as y,r as I,aw as $,aq as k,N as R,f as l,av as U,v as h,x as c,bp as j,bb as D,k as b,H as V,aW as H,o as T,e as K,w as B,c as q,O as z,t as _,m as P,d as F,aa as J,c3 as W,a6 as Y}from"./JzOUZlfM.js";const G=g({inheritAttrs:!1});function Q(t,r,n,o,d,i){return y(t.$slots,"default")}var X=S(G,[["render",Q],["__file","collection.vue"]]);const Z=g({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,d,i){return y(t.$slots,"default")}var ee=S(Z,[["render",x],["__file","collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r="El".concat(t,"Collection"),n="".concat(r,"Item"),o=Symbol(r),d=Symbol(n),i={...X,name:r,setup(){const v=I(null),f=new Map;$(o,{itemMap:f,getItems:()=>{const p=l(v);if(!p)return[];const a=Array.from(p.querySelectorAll("[".concat(te,"]")));return[...f.values()].sort((C,E)=>a.indexOf(C.ref)-a.indexOf(E.ref))},collectionRef:v})}},m={...ee,name:n,setup(v,{attrs:f}){const u=I(null),p=k(o,void 0);$(d,{collectionItemRef:u}),R(()=>{const a=l(u);a&&p.itemMap.set(a,{ref:a,...f})}),U(()=>{const a=l(u);p.itemMap.delete(a)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:i,ElCollectionItem:m}},w=h({trigger:N.trigger,effect:{...s.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:s.teleported});h({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:j}});h({onKeydown:{type:c(Function)}});oe("Dropdown");const re=h({trigger:N.trigger,placement:w.placement,disabled:N.disabled,visible:s.visible,transition:s.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:s.content,popperStyle:s.popperStyle,popperClass:s.popperClass,enterable:{...s.enterable,default:!0},effect:{...s.effect,default:"light"},teleported:s.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>D(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},ae="onUpdate:visible",se=g({name:"ElPopover"}),le=g({...se,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,d=b(()=>o[ae]),i=V("popover"),m=I(),v=b(()=>{var e;return(e=l(m))==null?void 0:e.popperRef}),f=b(()=>[{width:H(o.width)},o.popperStyle]),u=b(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),p=b(()=>o.transition==="".concat(i.namespace.value,"-fade-in-linear")),a=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},L=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:v,hide:a}),(e,fe)=>(T(),K(l(M),J({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(u),"popper-style":l(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(p),"onUpdate:visible":l(d),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:L}),{content:B(()=>[e.title?(T(),q("div",{key:0,class:z(l(i).e("title")),role:"title"},_(e.title),3)):P("v-if",!0),y(e.$slots,"default",{},()=>[F(_(e.content),1)])]),default:B(()=>[e.$slots.reference?y(e.$slots,"reference",{key:0}):P("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ie=S(le,[["__file","popover.vue"]]);const A=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var pe={mounted(t,r){A(t,r)},updated(t,r){A(t,r)}};const ce="popover",de=W(pe,ce),ve=Y(ie,{directive:de});export{ve as E};
