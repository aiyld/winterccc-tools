import{o as p,c as m,a as i,t as l,af as d,u as f,k as _,N as g}from"./BgglO4iL.js";import{u as x}from"./BaKXl86Q.js";import{u as v,a as F,c as S}from"./DIuVbbVH.js";const b={class:"c-page-title"},y={class:"p-title"},h={class:"text-12 text-quaternary"},B={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(s,n)=>(p(),m("div",b,[i("p",y,l(t.currentFunc.title||t.currentFunc.name),1),i("p",h,l(t.currentFunc.description),1)]))}};function N(){var u,r;const t=d(),{menus:s}=x(),n=f(),a=v(),e=_(()=>S(s,t.name)||{});return F({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),a.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),g(()=>{setTimeout(()=>{var c,o;a.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{B as _,N as u};
