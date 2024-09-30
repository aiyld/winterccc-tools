import{E as C}from"./DgvRJHAv.js";import{C as T,E as v,a as x}from"./D6ji7Dfp.js";import{E as z}from"./C1LlYAEj.js";import{E as F}from"./e4b9ZsII.js";import{k as H,l as N,_ as O,o as a,c as f,a as l,e as m,w as c,d as u,t as h,F as b,j as y,m as U,b as p,s as w}from"./19ALO-V3.js";import"./CGXPQwyo.js";import"./Czyf_1Sv.js";const B={props:{text:{type:String,default:""},closeTag:{type:String,default:"/"},containerTag:{type:String,default:"div"}},setup(e,{slots:t}){const o=H(()=>{const n=e.text,d=RegExp("\\[(.+?)\\](.*?)\\[\\".concat(e.closeTag,"\\1\\]"),"g");return n.replace(d,i=>"#@#".concat(i,"#@#")).split("#@#").map(i=>{const r=d.exec(i);return r?[r[2],r[1]]:[i]})});return()=>N(e.containerTag,{class:["c-common-language",e.containerTag==="div"&&"inline-block"]},o.value.map(n=>{const d=n[0],i=n[1],r=i&&t[i];return r?r({value:d}):d}))}},M={交换:"Switch","将[a][/a]_e162":"Convert [a][/a] string to [b][/b] string",未找到与输入的字_25f2:"No encoding found matching the input string",请输入内容:"Please enter content",请选择:"Please select",转换:"Convert","转换失败，可能输_3397":"The conversion failed. The input string may not match the selected encoding.",输入的字符串不是_8fb9:"The input string is not #type# format"},R={交换:"交换","将[a][/a]_e162":"将[a][/a]字符串转为[b][/b]字符串",未找到与输入的字_25f2:"未找到与输入的字符串相匹配的编码",请输入内容:"请输入内容",请选择:"请选择",转换:"转换","转换失败，可能输_3397":"转换失败，可能输入的字符串与选择的编码不匹配",输入的字符串不是_8fb9:"输入的字符串不是#type#编码"},L={交换:"交換","将[a][/a]_e162":"將[a][/a]字符串轉為[b][/b]字符串",未找到与输入的字_25f2:"未找到與輸入的字符串相匹配的編碼",请输入内容:"請輸入內容",请选择:"請選擇",转换:"轉換","转换失败，可能输_3397":"轉換失敗，可能輸入的字符串與選擇的編碼不匹配",输入的字符串不是_8fb9:"輸入的字符串不是#type#編碼"},_={en_US:M,zh_Hans_CN:R,zh_Hant_HK:L},g={props:{dataFrom:{type:String,default:""},dataTo:{type:String,default:""}},data(){return{text:"",from:this.dataFrom||"Base64",to:this.dataTo||"Utf8",result:"",encs:["Base64","Hex","Utf8","Utf16","Utf16LE","Latin1"],checked:!1,error:""}},watch:{from(e){localStorage.SET_FROM=e},to(e){localStorage.SET_TO=e},text(e){if(e)try{this.checkWords(e,this.from),this.$nextTick(()=>{this.error=""})}catch(t){if(this.checked){let o;for(let n=0;n<this.encs.length;n++)try{this.checkWords(e,this.encs[n]),o=this.encs[n];break}catch(d){}o?this.$nextTick(()=>{this.error="",this.from=o}):this.$nextTick(()=>{this.error=this.$VEncoder("未找到与输入的字_25f2","未找到与输入的字符串相匹配的编码")})}else this.$nextTick(()=>{this.error=this.$VEncoder("输入的字符串不是_8fb9","输入的字符串不是#type#编码").replace("#type#",e)})}else this.$nextTick(()=>{this.error=""})}},beforeCreate(){this.Sort=w},mounted(){!this.dataFrom&&localStorage.SET_FROM&&this.encs.find(e=>e===localStorage.SET_FROM)&&(this.from=localStorage.SET_FROM),!this.dataTo&&localStorage.SET_TO&&this.encs.find(e=>e===localStorage.SET_TO)&&(this.to=localStorage.SET_TO)},methods:{checkWords(e,t){try{T.enc[t].parse(e)}catch(o){}},changeText(){try{const e=T.enc[this.from].parse(this.text);this.result=T.enc[this.to].stringify(e)}catch(e){this.$message.error(this.$VEncoder("转换失败，可能输_3397","转换失败，可能输入的字符串与选择的编码不匹配"))}},switchCase(){const e=this.from,t=this.text;this.from=this.to,this.to=e,this.text=this.result,this.result=t}}};g.methods?Object.assign(g.methods,{$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",o=_[t]||_.zh_Hans_CN||{};return o[e]===void 0?e:o[e]}}):g.methods={$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",o=_[t]||_.zh_Hans_CN||{};return o[e]===void 0?e:o[e]}};const j=g,I={class:"c-encoder"},W={class:"title-selector"},K={key:2,class:"ml-30 text-12 text-red-500"},P={class:"py-20 flex items-center xs:flex-col"},D={class:"flex items-center"},J={class:"tip-text"},q={class:"tip-text"},A={class:"title-selector"};function G(e,t,o,n,d,i){const r=C,E=v,S=x,V=z,$=F,k=B;return a(),f("div",I,[l("div",W,[t[5]||(t[5]=l("p",{class:"e-label"},"From",-1)),e.dataFrom?(a(),m(r,{key:0,class:"ml-12"},{default:c(()=>[u(h(e.from),1)]),_:1})):(a(),m(S,{key:1,modelValue:e.from,"onUpdate:modelValue":t[0]||(t[0]=s=>e.from=s),placeholder:e.$VEncoder("请选择"),size:"small"},{default:c(()=>[(a(!0),f(b,null,y(e.encs,s=>(a(),m(E,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])),e.error?(a(),f("p",K,[t[4]||(t[4]=l("i",{class:"el-icon-error"},null,-1)),u(h(e.error),1)])):U("",!0)]),p(V,{modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=s=>e.text=s),type:"textarea",placeholder:e.$VEncoder("请输入内容"),rows:5,resize:"none",onInput:e.changeText},null,8,["modelValue","placeholder","onInput"]),l("div",P,[l("div",D,[p($,{size:"small",type:"primary",class:"btn",onClick:e.changeText},{default:c(()=>[u(h(e.$VEncoder("转换")),1)]),_:1},8,["onClick"]),p($,{icon:e.Sort,size:"small",class:"btn",onClick:e.switchCase},{default:c(()=>[u(h(e.$VEncoder("交换")),1)]),_:1},8,["icon","onClick"])]),p(k,{text:e.$VEncoder("将[a][/a]_e162"),class:"tip"},{a:c(()=>[l("span",J,h(e.from),1)]),b:c(()=>[l("span",q,h(e.to),1)]),_:1},8,["text"])]),l("div",A,[t[6]||(t[6]=l("p",{class:"e-label"},"To",-1)),e.dataTo?(a(),m(r,{key:0,class:"ml-12"},{default:c(()=>[u(h(e.to),1)]),_:1})):(a(),m(S,{key:1,modelValue:e.to,"onUpdate:modelValue":t[2]||(t[2]=s=>e.to=s),placeholder:e.$VEncoder("请选择"),size:"small"},{default:c(()=>[(a(!0),f(b,null,y(e.encs,s=>(a(),m(E,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]))]),p(V,{modelValue:e.result,"onUpdate:modelValue":t[3]||(t[3]=s=>e.result=s),type:"textarea",rows:5,resize:"none",class:"text-primary",disabled:""},null,8,["modelValue"])])}const oe=O(j,[["render",G]]);export{oe as _};
