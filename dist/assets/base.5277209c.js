import{V as _,e as C,u as z,j as v,aX as B,i as O,X as G,h as b,aZ as E,b6 as M,b7 as w}from"./index.91b53528.js";import{g as P}from"./get-slot.6b94873b.js";var H=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function N(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function U(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}),n}var R={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const T=()=>R,L={name:"Space",self:T};var A=L;let y;const D=()=>{if(!_)return!0;if(y===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),y=n}return y},I=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}});var X=C({name:"Space",props:I,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:r}=z(e),a=v("Space","-space",void 0,A,e,n),m=B("Space",r,n);return{useGap:D(),rtlEnabled:m,mergedClsPrefix:n,margin:O(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[E("gap",t)]:g}}=a.value,{row:p,col:c}=M(g);return{horizontal:w(c),vertical:w(p)}})}},render(){const{vertical:e,align:n,inline:r,justify:a,itemStyle:m,margin:t,wrap:g,mergedClsPrefix:p,rtlEnabled:c,useGap:i,wrapItem:x,internalUseGap:S}=this,u=G(P(this));if(!u.length)return null;const h=`${t.horizontal}px`,d=`${t.horizontal/2}px`,j=`${t.vertical}px`,l=`${t.vertical/2}px`,s=u.length-1,f=a.startsWith("space-");return b("div",{role:"none",class:[`${p}-space`,c&&`${p}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!g||e?"nowrap":"wrap",marginTop:i||e?"":`-${l}`,marginBottom:i||e?"":`-${l}`,alignItems:n,gap:i?`${t.vertical}px ${t.horizontal}px`:""}},!x&&(i||S)?u:u.map(($,o)=>b("div",{role:"none",style:[m,{maxWidth:"100%"},i?"":e?{marginBottom:o!==s?j:""}:c?{marginLeft:f?a==="space-between"&&o===s?"":d:o!==s?h:"",marginRight:f?a==="space-between"&&o===0?"":d:"",paddingTop:l,paddingBottom:l}:{marginRight:f?a==="space-between"&&o===s?"":d:o!==s?h:"",marginLeft:f?a==="space-between"&&o===0?"":d:"",paddingTop:l,paddingBottom:l}]},$)))}});function J(e){return e.replace(/<[^>]+>|(^\s*)|(\s*$)|&nbsp;/gi,"")}let F;F=window.location.protocol+"//"+window.location.host;export{X as _,N as a,F as b,H as c,J as d,U as g};