import{u as Y,_ as ee}from"./1D_pw8Aa.js";import{E as le}from"./C1LlYAEj.js";import{E as te,a as ae,C as o}from"./D6ji7Dfp.js";import{E as oe}from"./BK26v0ud.js";import{E as se}from"./e4b9ZsII.js";import{u as O,r as m,ag as A,k as U,o as c,c as C,a as d,t as f,b as n,f as a,i as v,F as S,w as V,j,e as z,m as J,d as B,S as ne,U as ue,E as re,af as pe}from"./19ALO-V3.js";import"./DgvRJHAv.js";import"./CGXPQwyo.js";import"./Czyf_1Sv.js";import{b as H}from"./CwMZNezS.js";import"./gdY-0pZ5.js";import"./BdUnDgu7.js";import"./DSe5pySu.js";import"./mSzHnMBE.js";import"./JAUZZBS7.js";import"./Kxt8Ku3Y.js";import"./QFhDkDS0.js";import"./CUCYs7wX.js";import"./wqu2pCmm.js";const de={加密:"Encrypt",密文:"Cipher text",密码:"Password",明文:"Plain text",自定义IV:"Custom IV",解密:"Decrypt",计算完成:"Calculation completed",请输入内容:"Please enter content",请选择:"Please select"},ce={加密:"加密",密文:"密文",密码:"密码",明文:"明文",自定义IV:"自定义IV",解密:"解密",计算完成:"计算完成",请输入内容:"请输入内容",请选择:"请选择"},ie={加密:"加密",密文:"密文",密码:"密碼",明文:"明文",自定义IV:"自定義IV",解密:"解密",计算完成:"計算完成",请输入内容:"請輸入內容",请选择:"請選擇"},L={en_US:de,zh_Hans_CN:ce,zh_Hant_HK:ie},me={class:"c-encrypt"},ve={class:"flex-1"},_e={class:"label"},fe={class:"op-area"},Ve={class:"sub-label"},Ce={class:"flex-1 xs:mt-20"},ye={class:"label"},ge={__name:"Encrypt",props:{algo:{type:String,default:""}},setup(N){const s=l=>{const _=O().$lang.value||"zh_Hans_CN",x=L[_]||L.zh_Hans_CN||{};return x[l]===void 0?l:x[l]},I=N,D=O(),r=m(""),p=m(""),k=A(["AES","DES","TripleDES","Rabbit","RC4","RC4Drop"]),y=m("CBC"),W=A(["CBC","CFB","CTR","OFB","ECB"]),g=m("Pkcs7"),X=A(["Pkcs7","Iso97971","AnsiX923","Iso10126","ZeroPadding","NoPadding"]),u=m(""),b=m(192),E=m(!1),R=m("");let P="";const h=U(()=>{const l=H(I.algo);return k.find(e=>typeof e=="string"?H(e)===l:H(e.algo)===l)||""}),i=U(()=>h.value&&(h.value.algo||h.value)),w=U(()=>["AES","DES","TripleDES"].includes(i.value)),$=l=>{P=l||"",p.value=P.toString()},F=l=>{try{l&&l(),D.$message.success(s("计算完成","计算完成"))}catch(e){D.$message.error(e.message)}},T=l=>(E.value&&(l=l||{},l.iv=o.enc.Hex.parse(R.value)),l),Z=()=>{$(),F(()=>{let l;w.value?l=o.AES.encrypt(r.value,u.value,T({mode:o.mode[y.value],padding:o.pad[g.value]})):i.value==="Rabbit"?l=o.Rabbit.encrypt(r.value,u.value,T()):i.value==="RC4"?l=o.RC4.encrypt(r.value,u.value):i.value==="RC4Drop"&&(l=o.RC4Drop.encrypt(r.value,u.value,{drop:parseInt(b.value)})),$(l)})},q=()=>{r.value="",F(()=>{let l;w.value?l=o.AES.decrypt(p.value,u.value,{mode:o.mode[y.value],padding:o.pad[g.value]}):i.value==="Rabbit"?l=o.Rabbit.decrypt(p.value,u.value):i.value==="RC4"?l=o.RC4.decrypt(p.value,u.value):i.value==="RC4Drop"&&(l=o.RC4Drop.decrypt(p.value,u.value,{drop:parseInt(b.value)})),r.value=l.toString(o.enc.Utf8)})};return(l,e)=>{const _=le,x=te,M=ae,G=oe,K=se,Q=re;return c(),C("div",me,[d("div",ve,[d("p",_e,f(s("明文")),1),n(_,{modelValue:a(r),"onUpdate:modelValue":e[0]||(e[0]=t=>v(r)?r.value=t:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])]),d("div",fe,[a(w)?(c(),C(S,{key:0},[e[8]||(e[8]=d("div",{class:"sub-label"},"Mode",-1)),n(M,{modelValue:a(y),"onUpdate:modelValue":e[1]||(e[1]=t=>v(y)?y.value=t:null),placeholder:s("请选择"),class:"select"},{default:V(()=>[(c(!0),C(S,null,j(a(W),t=>(c(),z(x,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),e[9]||(e[9]=d("div",{class:"sub-label"},"Padding scheme",-1)),n(M,{modelValue:a(g),"onUpdate:modelValue":e[2]||(e[2]=t=>v(g)?g.value=t:null),placeholder:s("请选择"),class:"select"},{default:V(()=>[(c(!0),C(S,null,j(a(X),t=>(c(),z(x,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])],64)):a(i)==="RC4Drop"?(c(),C(S,{key:1},[e[10]||(e[10]=d("div",{class:"sub-label"},"Drop words",-1)),n(_,{modelValue:a(b),"onUpdate:modelValue":e[3]||(e[3]=t=>v(b)?b.value=t:null),size:"small",class:"select"},null,8,["modelValue"])],64)):J("",!0),n(G,{modelValue:a(E),"onUpdate:modelValue":e[4]||(e[4]=t=>v(E)?E.value=t:null),class:"mt-20"},{default:V(()=>[B(f(s("自定义IV")),1)]),_:1},8,["modelValue"]),a(E)?(c(),z(_,{key:2,modelValue:a(R),"onUpdate:modelValue":e[5]||(e[5]=t=>v(R)?R.value=t:null),placeholder:"Hex string",size:"small",class:"select mt-5 h-32"},null,8,["modelValue"])):J("",!0),d("div",Ve,f(s("密码")),1),n(_,{modelValue:a(u),"onUpdate:modelValue":e[6]||(e[6]=t=>v(u)?u.value=t:null),"show-password":"",class:"select h-32"},null,8,["modelValue"]),n(K,{type:"primary",class:"m-auto w-full mt-40 xs:mt-20",icon:a(ne),onClick:Z},{default:V(()=>[B(f(s("加密")),1)]),_:1},8,["icon"]),n(K,{type:"primary",class:"m-auto w-full mt-20 xs:mt-12",onClick:q},{default:V(()=>[B(f(s("解密")),1),n(Q,null,{default:V(()=>[n(a(ue))]),_:1})]),_:1}),e[11]||(e[11]=d("div",{class:"flex-1"},null,-1))]),d("div",Ce,[d("p",ye,f(s("密文")),1),n(_,{modelValue:a(p),"onUpdate:modelValue":e[7]||(e[7]=t=>v(p)?p.value=t:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])])])}}},be={class:"p-cipher"},Me={__name:"cipher",setup(N){const s=pe(),{currentFunc:I}=Y();return(D,r)=>{const p=ee,k=ge;return c(),C("div",be,[n(p,{"current-func":a(I)},null,8,["current-func"]),n(k,{algo:a(s).name},null,8,["algo"])])}}};export{Me as default};
