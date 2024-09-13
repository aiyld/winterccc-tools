import{k as Q,l as z,f as O,m as G,n as J,o as B,c as L,b as T,p as Z,e as q,q as x,a as p,F as j,v as ee,u as te,t as Y}from"./CTJ3n5Ue.js";import{_ as re}from"./BiXr81Gu.js";import{u as ne}from"./Cvn2hM3C.js";import"./BC0sQffX.js";import"./Btng3dmt.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var D=function(){return D=Object.assign||function(f){for(var l,u=1,h=arguments.length;u<h;u++){l=arguments[u];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(f[d]=l[d])}return f},D.apply(this,arguments)};var _;(function(s){var f=function(){function n(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],i=0;i<this.size;i++)a.push(!1);for(var i=0;i<this.size;i++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),o==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var E=this.getPenaltyScore();E<v&&(o=i,v=E),this.applyMask(i)}h(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,o,a,i){if(r===void 0&&(r=1),o===void 0&&(o=40),a===void 0&&(a=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var c,v;for(c=r;;c++){var E=n.getNumDataCodewords(c,t)*8,C=d.getTotalBits(e,c);if(C<=E){v=C;break}if(c>=o)throw new RangeError("Data too long")}for(var g=0,w=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];g<w.length;g++){var M=w[g];i&&v<=n.getNumDataCodewords(c,M)*8&&(t=M)}for(var m=[],R=0,A=e;R<A.length;R++){var N=A[R];l(N.mode.modeBits,4,m),l(N.numChars,N.mode.numCharCountBits(c),m);for(var S=0,b=N.getData();S<b.length;S++){var X=b[S];m.push(X)}}h(m.length==v);var F=n.getNumDataCodewords(c,t)*8;h(m.length<=F),l(0,Math.min(4,F-m.length),m),l(0,(8-m.length%8)%8,m),h(m.length%8==0);for(var y=236;m.length<F;y^=253)l(y,8,m);for(var I=[];I.length*8<m.length;)I.push(0);return m.forEach(function(V,H){return I[H>>>3]|=V<<7-(H&7)}),new n(c,t,I,a)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var o=0;o<r;o++)e==0&&o==0||e==0&&o==r-1||e==r-1&&o==0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,o=0;o<10;o++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;h(a>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,u(a,o));this.setFunctionModule(8,7,u(a,6)),this.setFunctionModule(8,8,u(a,7)),this.setFunctionModule(7,8,u(a,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,u(a,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,u(a,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,u(a,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;h(r>>>18==0);for(var t=0;t<18;t++){var o=u(r,t),a=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(a,i,o),this.setFunctionModule(i,a,o)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var o=-4;o<=4;o++){var a=Math.max(Math.abs(o),Math.abs(r)),i=e+o,c=t+r;0<=i&&i<this.size&&0<=c&&c<this.size&&this.setFunctionModule(i,c,a!=2&&a!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),c=o-i%o,v=Math.floor(i/o),E=[],C=n.reedSolomonComputeDivisor(a),g=0,w=0;g<o;g++){var M=e.slice(w,w+v-a+(g<c?0:1));w+=M.length;var m=n.reedSolomonComputeRemainder(M,C);g<c&&M.push(0),E.push(M.concat(m))}for(var R=[],A=function(N){E.forEach(function(S,b){(N!=v-a||b>=c)&&R.push(S[N])})},g=0;g<E[0].length;g++)A(g);return h(R.length==i),R},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var o=0;o<this.size;o++)for(var a=0;a<2;a++){var i=r-a,c=(r+1&2)==0,v=c?this.size-1-o:o;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=u(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var o=void 0;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,a)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,c=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(c++,c==5?e+=n.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],c=1);e+=this.finderPenaltyTerminateAndCount(r,c,a)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var E=0,C=0,g=this.modules;C<g.length;C++){var w=g[C];E=w.reduce(function(R,A){return R+(A?1:0)},E)}var M=this.size*this.size,m=Math.ceil(Math.abs(E*20-M*10)/M)-1;return h(0<=m&&m<=9),e+=m*n.PENALTY_N4,h(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=n.reedSolomonMultiply(t[a],o),a+1<t.length&&(t[a]^=t[a+1]);o=n.reedSolomonMultiply(o,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),o=function(v){var E=v^r.shift();r.push(0),t.forEach(function(C,g){return r[g]^=n.reedSolomonMultiply(C,E)})},a=0,i=e;a<i.length;a++){var c=i[a];o(c)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return h(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];h(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();s.QrCode=f;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function u(n,e){return(n>>>e&1)!=0}function h(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var a=o[r];l(a,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var o=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+o),10),o*3+1,t),r+=o}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(o,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,o=0,a=e;o<a.length;o++){var i=a[o],c=i.mode.numCharCountBits(t);if(i.numChars>=1<<c)return 1/0;r+=4+c+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();s.QrSegment=d})(_||(_={}));(function(s){(function(f){var l=function(){function u(h,d){this.ordinal=h,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();f.Ecc=l})(s.QrCode||(s.QrCode={}))})(_||(_={}));(function(s){(function(f){var l=function(){function u(h,d){this.modeBits=h,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(h){return this.numBitsCharCount[Math.floor((h+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();f.Mode=l})(s.QrSegment||(s.QrSegment={}))})(_||(_={}));var P=_,$="H",U={L:P.QrCode.Ecc.LOW,M:P.QrCode.Ecc.MEDIUM,Q:P.QrCode.Ecc.QUARTILE,H:P.QrCode.Ecc.HIGH},oe=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function K(s){return s in U}function W(s,f){f===void 0&&(f=0);var l=[];return s.forEach(function(u,h){var d=null;u.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+f," ").concat(h+f,"h").concat(e-d,"v1H").concat(d+f,"z")),d=null;return}if(e===u.length-1){if(!n)return;d===null?l.push("M".concat(e+f,",").concat(h+f," h1v1H").concat(e+f,"z")):l.push("M".concat(d+f,",").concat(h+f," h").concat(e+1-d,"v1H").concat(d+f,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var k={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:$,validator:function(s){return K(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ae=D(D({},k),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),ie=Q({name:"QRCodeSvg",props:k,setup:function(s){var f=O(0),l=O(""),u=function(){var h=s.value,d=s.level,n=s.margin,e=P.QrCode.encodeText(h,U[d]).getModules();f.value=e.length+n*2,l.value=W(e,n)};return u(),G(u),function(){return z("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[z("path",{fill:s.background,d:"M0,0 h".concat(f.value,"v").concat(f.value,"H0z")}),z("path",{fill:s.foreground,d:l.value})])}}}),se=Q({name:"QRCodeCanvas",props:k,setup:function(s){var f=O(null),l=function(){var u=s.value,h=s.level,d=s.size,n=s.margin,e=s.background,t=s.foreground,r=f.value;if(r){var o=r.getContext("2d");if(o){var a=P.QrCode.encodeText(u,U[h]).getModules(),i=a.length+n*2,c=window.devicePixelRatio||1,v=d/i*c;r.height=r.width=d*c,o.scale(v,v),o.fillStyle=e,o.fillRect(0,0,i,i),o.fillStyle=t,oe?o.fill(new Path2D(W(a,n))):a.forEach(function(E,C){E.forEach(function(g,w){g&&o.fillRect(w+n,C+n,1,1)})})}}};return J(l),G(l),function(){return z("canvas",{ref:f,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ue=Q({name:"Qrcode",render:function(){var s=this.$props,f=s.renderAs,l=s.value,u=s.size,h=s.margin,d=s.level,n=s.background,e=s.foreground,t=u>>>0,r=h>>>0,o=K(d)?d:$;return z(f==="svg"?ie:se,{value:l,size:t,margin:r,level:o,background:n,foreground:e})},props:ae});const le={class:"c-common-qrcode"},ce={__name:"Qrcode",props:{value:{type:String,default:""},size:{type:Number,default:124}},setup(s){return(f,l)=>(B(),L("div",le,[T(ue,{value:s.value,size:s.size},null,8,["value","size"])]))}},fe=Z("/images/author.jpeg"),he={class:"p-donate"},de={class:"donate-list"},ve={class:"ml-12"},me={class:"flex items-center"},ge=["src"],pe={class:"ml-8 text-primary font-w500 text-16"},Ee={class:"mt-12"},Ce={class:"ml-4"},Ae={__name:"donate",setup(s){const f=q(),l=x([{coin:"BTC",address:"1Q6ZDFC3FueXY3JocmeMqgiSsGGtppbvz2",icon:"/images/btc.png"},{coin:"ETH",address:"0xff6FC30033269845d196cB48F6a0660598D218D8",icon:"/images/eth.png"}]);return ne({title:"Donate"+f.$brand.websiteSuffix,ogTitle:"Donate"+f.$brand.websiteSuffix}),(u,h)=>{const d=ce,n=re;return B(),L("div",he,[p("div",de,[(B(!0),L(j,null,ee(te(l),(e,t)=>(B(),L("div",{key:t,class:"donate-item"},[T(d,{value:e.address,size:80},null,8,["value"]),p("div",ve,[p("div",me,[p("img",{src:e.icon,height:"30",class:"h-20"},null,8,ge),p("span",pe,Y(e.coin),1)]),p("p",Ee,[T(n,{msg:e.address},null,8,["msg"]),p("span",Ce,Y(e.address),1)])])]))),128))]),h[0]||(h[0]=p("div",{class:"intro"},[p("div",{class:"intro-container flex items-center flex-col"},[p("img",{class:"avatars",src:fe,alt:""}),p("h1",{class:"title"},"Winter"),p("div",{class:"divider-custom mt-20"},[p("div",{class:"divider-custom-line"}),p("div",{class:"divider-custom-icon"},[p("svg",{class:"star","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512","data-fa-i2svg":""},[p("path",{fill:"#F38B2C",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),p("div",{class:"divider-custom-line"})]),p("p",{class:"sub-title mt-20"},"Web Developer - Block Chain Lover")])],-1))])}}};export{Ae as default};
