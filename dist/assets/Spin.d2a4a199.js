import{$ as d,ax as u,ay as l,b4 as v,aB as f,d as z,aD as x,aE as m,b5 as C,a_ as S,aI as $,B as a,b6 as k,aJ as _,b7 as w}from"./index.61b64b59.js";function B(e,i){return d(()=>{for(const n of i)if(e[n]!==void 0)return e[n];return e[i[i.length-1]]})}const R=u([u("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[v()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[f("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[f("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),T={small:20,medium:18,large:16},P=Object.assign(Object.assign({},m.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),W=z({name:"Spin",props:P,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:n}=x(e),t=m("Spin","-spin",R,w,e,i),c=d(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:r},self:p}=t.value,{opacitySpinning:h,color:b,textColor:g}=p,y=typeof s=="number"?C(s):p[S("size",s)];return{"--n-bezier":r,"--n-opacity-spinning":h,"--n-size":y,"--n-color":b,"--n-text-color":g}}),o=n?$("spin",d(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),c,e):void 0;return{mergedClsPrefix:i,compitableShow:B(e,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:r}=e;return T[typeof r=="number"?"medium":r]}),cssVars:n?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i;const{$slots:n,mergedClsPrefix:t,description:c}=this,o=n.icon&&this.rotate,s=(c||n.description)&&a("div",{class:`${t}-spin-description`},c||((e=n.description)===null||e===void 0?void 0:e.call(n))),r=n.icon?a("div",{class:[`${t}-spin-body`,this.themeClass]},a("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),s):a("div",{class:[`${t}-spin-body`,this.themeClass]},a(k,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),s);return(i=this.onRender)===null||i===void 0||i.call(this),n.default?a("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},n),a(_,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{W as _,B as u};
