import{c as le,aT as se,a as N,ay as t,aP as D,d as W,b as l,ax as j,e as de,u as ce,i as K,aV as ue,r as H,t as he,g as _,aY as g,O as L,bc as s,k as be,aE as M,h as o,aF as v,aR as fe,aS as ge,aJ as P}from"./index.51407d32.js";import{u as ve}from"./use-merged-state.a0315c03.js";var me={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const we=e=>{const{primaryColor:d,opacityDisabled:h,borderRadius:n,textColor3:r}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},me),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:h,railColor:m,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${se(d,{alpha:.2})}`})},pe={name:"Switch",common:le,self:we};var xe=pe,ye=N("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),N("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[D({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),j("disabled",[j("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[D()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const ke=Object.assign(Object.assign({},K.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Be=de({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:h}=ce(e),n=K("Switch","-switch",ye,xe,e,d),r=ue(e),{mergedSizeRef:m,mergedDisabledRef:b}=r,x=H(e.defaultValue),R=he(e,"value"),f=ve(R,x),y=_(()=>f.value===e.checkedValue),w=H(!1),i=H(!1),c=_(()=>{const{railStyle:a}=e;if(!!a)return a({focused:i.value,checked:y.value})});function u(a){const{"onUpdate:value":B,onChange:C,onUpdateValue:V}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;B&&P(B,a),V&&P(V,a),C&&P(C,a),x.value=a,$(),z()}function O(){const{nTriggerFormFocus:a}=r;a()}function U(){const{nTriggerFormBlur:a}=r;a()}function A(){e.loading||b.value||(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function E(){i.value=!0,O()}function I(){i.value=!1,U(),w.value=!1}function Y(a){e.loading||b.value||a.key===" "&&(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),w.value=!1)}function X(a){e.loading||b.value||a.key===" "&&(a.preventDefault(),w.value=!0)}const T=_(()=>{const{value:a}=m,{self:{opacityDisabled:B,railColor:C,railColorActive:V,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:J,loadingColor:q,textColor:G,iconColor:Q,[g("buttonHeight",a)]:k,[g("buttonWidth",a)]:Z,[g("buttonWidthPressed",a)]:ee,[g("railHeight",a)]:S,[g("railWidth",a)]:F,[g("railBorderRadius",a)]:te,[g("buttonBorderRadius",a)]:ae},common:{cubicBezierEaseInOut:ie}}=n.value,oe=L((s(S)-s(k))/2),ne=L(Math.max(s(S),s(k))),re=s(S)>s(k)?F:L(s(F)+s(k)-s(S));return{"--n-bezier":ie,"--n-button-border-radius":ae,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":Z,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ne,"--n-offset":oe,"--n-opacity-disabled":B,"--n-rail-border-radius":te,"--n-rail-color":C,"--n-rail-color-active":V,"--n-rail-height":S,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":J,"--n-loading-color":q,"--n-text-color":G,"--n-icon-color":Q}}),p=h?be("switch",_(()=>m.value[0]),T,e):void 0;return{handleClick:A,handleBlur:I,handleFocus:E,handleKeyup:Y,handleKeydown:X,mergedRailStyle:c,pressed:w,mergedClsPrefix:d,mergedValue:f,checked:y,mergedDisabled:b,cssVars:h?void 0:T,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:h,mergedRailStyle:n,onRender:r,$slots:m}=this;r==null||r();const{checked:b,unchecked:x,icon:R,"checked-icon":f,"unchecked-icon":y}=m,w=!(M(R)&&M(f)&&M(y));return o("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,h&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},v(b,i=>v(x,c=>i||c?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),i),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),c)):null)),o("div",{class:`${e}-switch__button`},v(R,i=>v(f,c=>v(y,u=>o(fe,null,{default:()=>this.loading?o(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?o("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(u||i)?o("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),v(b,i=>i&&o("div",{key:"checked",class:`${e}-switch__checked`},i)),v(x,i=>i&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{Be as N};
