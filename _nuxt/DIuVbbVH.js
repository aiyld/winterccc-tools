import{cs as unpackMeta,ct as defineStore}from"./BgglO4iL.js";import{u as useHead}from"./DgyUj9Nq.js";function useSeoMeta(e,r){const{title:t,titleTemplate:n,...a}=e;return useHead({title:t,titleTemplate:n,_flatMeta:a},{...r,transform(s){const o=unpackMeta({...s._flatMeta});return delete s._flatMeta,{...s,meta:o}}})}function upperCase(e){return(e||"").toUpperCase()}function lowerCase(e){return(e||"").toLowerCase()}const getRouteName=e=>(e.name||e.title).toLowerCase(),getCurrentFunc=(e,r)=>{for(let t=0;t<e.length;t++){if(getRouteName(e[t])===r)return e[t];for(let a=0;a<e[t].subMenus.length;a++)if(getRouteName(e[t].subMenus[a])===r)return{...e[t].subMenus[a],parent:e[t]}}};function valToArray(e){return typeof e>"u"||e instanceof Array?e:[e]}function parseJSON(value,illegalOrCallBack){try{return value?JSON.parse(value):""}catch(error){try{let x;return eval("x = ".concat(value)),x}catch(e){}if(value)if(typeof illegalOrCallBack=="function")illegalOrCallBack();else return illegalOrCallBack;else return""}}const useMainStore=defineStore("main",{state:()=>({category:"browserplugin",nav:"all",likes:[],donateCoins:[{coin:"BTC",address:"1Q6ZDFC3FueXY3JocmeMqgiSsGGtppbvz2",icon:"/images/btc.png"},{coin:"ETH",address:"0xff6FC30033269845d196cB48F6a0660598D218D8",icon:"/images/eth.png"}]}),getters:{},actions:{setCategory(e){this.category=e||"browserplugin"},setNav(e){this.nav=e},setLikes(e){this.likes=valToArray(e)||[],localStorage.SUPER_TOOLS_LIKE=JSON.stringify(this.likes)},initLikes(){try{{const e=JSON.parse(localStorage.SUPER_TOOLS_LIKE);this.likes=valToArray(e)||[]}}catch(e){}}}});export{useSeoMeta as a,upperCase as b,getCurrentFunc as c,getRouteName as g,lowerCase as l,parseJSON as p,useMainStore as u,valToArray as v};
