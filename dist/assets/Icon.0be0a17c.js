import{c as g,a as y,b as l,d,j as h,e as v,u as b,i as a,m as C,Y as $,h as m,p as _}from"./index.da6d6ec6.js";import{f as z}from"./use-merged-state.5f7ba65f.js";const D=e=>{const{textColorBase:n,opacity1:i,opacity2:s,opacity3:r,opacity4:o,opacity5:t}=e;return{color:n,opacity1Depth:i,opacity2Depth:s,opacity3Depth:r,opacity4Depth:o,opacity5Depth:t}},x={name:"Icon",common:g,self:D};var R=x,S=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]);const I=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:I,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=b(e),s=h("Icon","-icon",S,R,e,n),r=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:c},self:p}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:f}=p;return{"--n-bezier":c,"--n-color":u,"--n-opacity":f}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),o=i?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:a(()=>{const{size:t,color:c}=e;return{fontSize:z(t),color:c}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:s,component:r,onRender:o,themeClass:t}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),m("i",_(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{w as N};
