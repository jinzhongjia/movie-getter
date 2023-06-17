import{bN as Fe,a$ as Ie,I as He,l as ie,z as Ee,d as B,n as ae,t as se,p as j,e as le,bL as _e,C as Ne,r as R,Z as Oe,h as p,s as v,A as je,aF as de,q as y,B as b,O as oe,N as De,x as ce,X as Ve,v as Ke,aC as Me,af as Ge,F as r,M as N,G as We,aH as qe,R as Ae,S as Qe}from"./index-5e009933.js";function ue(e,...i){if(Array.isArray(e))e.forEach(c=>ue(c,...i));else return e(...i)}function F(e){return e.some(i=>Fe(i)?!(i.type===Ie||i.type===He&&!F(i.children)):!0)?e:null}function io(e,i){return e&&F(e())||i()}function ao(e,i,c){return e&&F(e(i))||c(i)}function re(e,i){const c=e&&F(e());return i(c||null)}function Le(e){return!(e&&F(e()))}function te(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const D=typeof document<"u"&&typeof window<"u",ne=se("n-form-item");function Xe(e,{defaultSize:i="medium",mergedSize:c,mergedDisabled:u}={}){const n=ie(ne,null);Ee(ne,null);const V=B(c?()=>c(n):()=>{const{size:m}=e;if(m)return m;if(n){const{mergedSize:I}=n;if(I.value!==void 0)return I.value}return i}),P=B(u?()=>u(n):()=>{const{disabled:m}=e;return m!==void 0?m:n?n.disabled.value:!1}),k=B(()=>{const{status:m}=e;return m||(n==null?void 0:n.mergedValidationStatus.value)});return ae(()=>{n&&n.restoreValidation()}),{mergedSizeRef:V,mergedDisabledRef:P,mergedStatusRef:k,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Ye=j("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Ue=le({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){_e("-base-wave",Ye,Ne(e,"clsPrefix"));const i=R(null),c=R(!1);let u=null;return ae(()=>{u!==null&&window.clearTimeout(u)}),{active:c,selfRef:i,play(){u!==null&&(window.clearTimeout(u),c.value=!1,u=null),Oe(()=>{var n;(n=i.value)===null||n===void 0||n.offsetHeight,c.value=!0,u=window.setTimeout(()=>{c.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:w}=je;function Ze({duration:e=".2s",delay:i=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w},
 max-width ${e} ${w} ${i},
 margin-left ${e} ${w} ${i},
 margin-right ${e} ${w} ${i};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w} ${i},
 max-width ${e} ${w},
 margin-left ${e} ${w},
 margin-right ${e} ${w};
 `)]}const Je=D&&"chrome"in window;D&&navigator.userAgent.includes("Firefox");const eo=D&&navigator.userAgent.includes("Safari")&&!Je;function $(e){return de(e,[255,255,255,.16])}function O(e){return de(e,[0,0,0,.12])}const oo=se("n-button-group"),ro=v([j("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("color",[b("border",{borderColor:"var(--n-border-color)"}),y("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),oe("disabled",[v("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),oe("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),j("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),D&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",{border:"var(--n-border)"}),b("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[j("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[De({top:"50%",originalTransform:"translateY(-50%)"})]),Ze()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),to=Object.assign(Object.assign({},ce.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!eo}}),be=le({name:"Button",props:to,setup(e){const i=R(null),c=R(null),u=R(!1),n=Ve(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),V=ie(oo,{}),{mergedSizeRef:P}=Xe({},{defaultSize:"medium",mergedSize:t=>{const{size:f}=e;if(f)return f;const{size:x}=V;if(x)return x;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),k=B(()=>e.focusable&&!e.disabled),m=t=>{var f;k.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&k.value&&((f=i.value)===null||f===void 0||f.focus({preventScroll:!0})))},I=t=>{var f;if(!e.disabled&&!e.loading){const{onClick:x}=e;x&&ue(x,t),e.text||(f=c.value)===null||f===void 0||f.play()}},fe=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;u.value=!1}},he=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},ve=()=>{u.value=!1},{inlineThemeDisabled:Y,mergedClsPrefixRef:K,mergedRtlRef:pe}=Ke(e),me=ce("Button","-button",ro,Me,e,K),ge=Ge("Button",pe,K),U=B(()=>{const t=me.value,{common:{cubicBezierEaseInOut:f,cubicBezierEaseOut:x},self:o}=t,{rippleDuration:M,opacityDisabled:H,fontWeight:G,fontWeightStrong:W}=o,g=P.value,{dashed:q,type:z,ghost:A,text:C,color:s,round:Z,circle:Q,textColor:S,secondary:ye,tertiary:J,quaternary:xe,strong:Ce}=e,we={"font-weight":Ce?W:G};let l={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const E=z==="tertiary",ee=z==="default",a=E?"default":z;if(C){const d=S||s;l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":d||o[r("textColorText",a)],"--n-text-color-hover":d?$(d):o[r("textColorTextHover",a)],"--n-text-color-pressed":d?O(d):o[r("textColorTextPressed",a)],"--n-text-color-focus":d?$(d):o[r("textColorTextHover",a)],"--n-text-color-disabled":d||o[r("textColorTextDisabled",a)]}}else if(A||q){const d=S||s;l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":s||o[r("rippleColor",a)],"--n-text-color":d||o[r("textColorGhost",a)],"--n-text-color-hover":d?$(d):o[r("textColorGhostHover",a)],"--n-text-color-pressed":d?O(d):o[r("textColorGhostPressed",a)],"--n-text-color-focus":d?$(d):o[r("textColorGhostHover",a)],"--n-text-color-disabled":d||o[r("textColorGhostDisabled",a)]}}else if(ye){const d=ee?o.textColor:E?o.textColorTertiary:o[r("color",a)],h=s||d,_=z!=="default"&&z!=="tertiary";l={"--n-color":_?N(h,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":_?N(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":_?N(h,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":_?N(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":h,"--n-text-color-pressed":h,"--n-text-color-focus":h,"--n-text-color-disabled":h}}else if(J||xe){const d=ee?o.textColor:E?o.textColorTertiary:o[r("color",a)],h=s||d;J?(l["--n-color"]=o.colorTertiary,l["--n-color-hover"]=o.colorTertiaryHover,l["--n-color-pressed"]=o.colorTertiaryPressed,l["--n-color-focus"]=o.colorSecondaryHover,l["--n-color-disabled"]=o.colorTertiary):(l["--n-color"]=o.colorQuaternary,l["--n-color-hover"]=o.colorQuaternaryHover,l["--n-color-pressed"]=o.colorQuaternaryPressed,l["--n-color-focus"]=o.colorQuaternaryHover,l["--n-color-disabled"]=o.colorQuaternary),l["--n-ripple-color"]="#0000",l["--n-text-color"]=h,l["--n-text-color-hover"]=h,l["--n-text-color-pressed"]=h,l["--n-text-color-focus"]=h,l["--n-text-color-disabled"]=h}else l={"--n-color":s||o[r("color",a)],"--n-color-hover":s?$(s):o[r("colorHover",a)],"--n-color-pressed":s?O(s):o[r("colorPressed",a)],"--n-color-focus":s?$(s):o[r("colorFocus",a)],"--n-color-disabled":s||o[r("colorDisabled",a)],"--n-ripple-color":s||o[r("rippleColor",a)],"--n-text-color":S||(s?o.textColorPrimary:E?o.textColorTertiary:o[r("textColor",a)]),"--n-text-color-hover":S||(s?o.textColorHoverPrimary:o[r("textColorHover",a)]),"--n-text-color-pressed":S||(s?o.textColorPressedPrimary:o[r("textColorPressed",a)]),"--n-text-color-focus":S||(s?o.textColorFocusPrimary:o[r("textColorFocus",a)]),"--n-text-color-disabled":S||(s?o.textColorDisabledPrimary:o[r("textColorDisabled",a)])};let L={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?L={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:L={"--n-border":o[r("border",a)],"--n-border-hover":o[r("borderHover",a)],"--n-border-pressed":o[r("borderPressed",a)],"--n-border-focus":o[r("borderFocus",a)],"--n-border-disabled":o[r("borderDisabled",a)]};const{[r("height",g)]:X,[r("fontSize",g)]:ze,[r("padding",g)]:Se,[r("paddingRound",g)]:$e,[r("iconSize",g)]:Be,[r("borderRadius",g)]:Te,[r("iconMargin",g)]:Pe,waveOpacity:ke}=o,Re={"--n-width":Q&&!C?X:"initial","--n-height":C?"initial":X,"--n-font-size":ze,"--n-padding":Q||C?"initial":Z?$e:Se,"--n-icon-size":Be,"--n-icon-margin":Pe,"--n-border-radius":C?"initial":Q||Z?X:Te};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":f,"--n-bezier-ease-out":x,"--n-ripple-duration":M,"--n-opacity-disabled":H,"--n-wave-opacity":ke},we),l),L),Re)}),T=Y?We("button",B(()=>{let t="";const{dashed:f,type:x,ghost:o,text:M,color:H,round:G,circle:W,textColor:g,secondary:q,tertiary:z,quaternary:A,strong:C}=e;f&&(t+="a"),o&&(t+="b"),M&&(t+="c"),G&&(t+="d"),W&&(t+="e"),q&&(t+="f"),z&&(t+="g"),A&&(t+="h"),C&&(t+="i"),H&&(t+="j"+te(H)),g&&(t+="k"+te(g));const{value:s}=P;return t+="l"+s[0],t+="m"+x[0],t}),U,e):void 0;return{selfElRef:i,waveElRef:c,mergedClsPrefix:K,mergedFocusable:k,mergedSize:P,showBorder:n,enterPressed:u,rtlEnabled:ge,handleMousedown:m,handleKeydown:he,handleBlur:ve,handleKeyup:fe,handleClick:I,customColorCssVars:B(()=>{const{color:t}=e;if(!t)return null;const f=$(t);return{"--n-border-color":t,"--n-border-color-hover":f,"--n-border-color-pressed":O(t),"--n-border-color-focus":f,"--n-border-color-disabled":t}}),cssVars:Y?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:i,onRender:c}=this;c==null||c();const u=re(this.$slots.default,n=>n&&p("span",{class:`${e}-button__content`},n));return p(i,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(qe,{width:!0},{default:()=>re(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&p("span",{class:`${e}-button__icon`,style:{margin:Le(this.$slots.default)?"0":""}},p(Ae,null,{default:()=>this.loading?p(Qe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Ue,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),so=be,lo=be;export{lo as X,so as _,io as a,D as b,ue as c,te as d,ao as e,ne as f,eo as g,Le as i,re as r,Xe as u};
