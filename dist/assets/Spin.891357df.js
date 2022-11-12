import{$ as p,aw as b,ax as u,ay as c,aZ as z,aB as m,d as S,aD as C,aE as h,a_ as x,aV as $,aI as k,B as r,a$ as w,aJ as T}from"./index.052d0b99.js";function _(e,s){return p(()=>{for(const n of s)if(e[n]!==void 0)return e[n];return e[s[s.length-1]]})}const B=e=>{const{opacityDisabled:s,heightTiny:n,heightSmall:t,heightMedium:l,heightLarge:o,heightHuge:i,primaryColor:a,fontSize:d}=e;return{fontSize:d,textColor:a,sizeTiny:n,sizeSmall:t,sizeMedium:l,sizeLarge:o,sizeHuge:i,color:a,opacitySpinning:s}},R={name:"Spin",common:b,self:B},L=R,V=u([u("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[z()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[m("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[m("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),P={small:20,medium:18,large:16},W=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),H=S({name:"Spin",props:W,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=C(e),t=h("Spin","-spin",V,L,e,s),l=p(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:a},self:d}=t.value,{opacitySpinning:f,color:g,textColor:y}=d,v=typeof i=="number"?x(i):d[$("size",i)];return{"--n-bezier":a,"--n-opacity-spinning":f,"--n-size":v,"--n-color":g,"--n-text-color":y}}),o=n?k("spin",p(()=>{const{size:i}=e;return typeof i=="number"?String(i):i[0]}),l,e):void 0;return{mergedClsPrefix:s,compitableShow:_(e,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:i}=e;if(i!==void 0)return i;const{size:a}=e;return P[typeof a=="number"?"medium":a]}),cssVars:n?void 0:l,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,s;const{$slots:n,mergedClsPrefix:t,description:l}=this,o=n.icon&&this.rotate,i=(l||n.description)&&r("div",{class:`${t}-spin-description`},l||((e=n.description)===null||e===void 0?void 0:e.call(n))),a=n.icon?r("div",{class:[`${t}-spin-body`,this.themeClass]},r("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),i):r("div",{class:[`${t}-spin-body`,this.themeClass]},r(w,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),i);return(s=this.onRender)===null||s===void 0||s.call(this),n.default?r("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},r("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},n),r(T,{name:"fade-in-transition"},{default:()=>this.compitableShow?a:null})):a}});export{H as _,_ as u};
