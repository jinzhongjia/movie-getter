import{aw as n,ax as b,bE as q,aA as d,az as t,bw as G,bx as J,d as U,aC as Z,aD as u,aX as ee,$ as h,aY as p,bg as oe,aH as re,B as s,aM as c,aQ as ne,bF as te}from"./index.e1f36ec1.js";import{N as de}from"./Close.52035988.js";const ae=n([b("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[q({background:"var(--n-color-modal)"}),d("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[n(">",[t("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[n(">",[t("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[n(">",[t("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[n(">",[t("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[b("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[t("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),t("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),t("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),t("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),t("content","flex: 1;"),t("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),t("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),b("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[n(">",[t("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[n(">",[t("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[n(">",[t("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("embedded",`
 background-color: var(--n-color-embedded);
 `)]),G(b("card",`
 background: var(--n-color-modal);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),J(b("card",`
 background: var(--n-color-popover);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),le={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},se=Object.assign(Object.assign({},u.props),le),be=U({name:"Card",props:se,setup(r){const v=()=>{const{onClose:l}=r;l&&ne(l)},{inlineThemeDisabled:g,mergedClsPrefixRef:e,mergedRtlRef:f}=Z(r),i=u("Card","-card",ae,te,r,e),m=ee("Card",f,e),a=h(()=>{const{size:l}=r,{self:{color:x,colorModal:z,colorTarget:C,textColor:y,titleTextColor:S,titleFontWeight:$,borderColor:k,actionColor:w,borderRadius:_,lineHeight:T,closeIconColor:B,closeIconColorHover:R,closeIconColorPressed:E,closeColorHover:P,closeColorPressed:O,closeBorderRadius:j,closeIconSize:M,closeSize:F,boxShadow:H,colorPopover:I,colorEmbedded:V,colorEmbeddedModal:A,colorEmbeddedPopover:D,[p("padding",l)]:L,[p("fontSize",l)]:N,[p("titleFontSize",l)]:W},common:{cubicBezierEaseInOut:K}}=i.value,{top:Q,left:X,bottom:Y}=oe(L);return{"--n-bezier":K,"--n-border-radius":_,"--n-color":x,"--n-color-modal":z,"--n-color-popover":I,"--n-color-embedded":V,"--n-color-embedded-modal":A,"--n-color-embedded-popover":D,"--n-color-target":C,"--n-text-color":y,"--n-line-height":T,"--n-action-color":w,"--n-title-text-color":S,"--n-title-font-weight":$,"--n-close-icon-color":B,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":E,"--n-close-color-hover":P,"--n-close-color-pressed":O,"--n-border-color":k,"--n-box-shadow":H,"--n-padding-top":Q,"--n-padding-bottom":Y,"--n-padding-left":X,"--n-font-size":N,"--n-title-font-size":W,"--n-close-size":F,"--n-close-icon-size":M,"--n-close-border-radius":j}}),o=g?re("card",h(()=>r.size[0]),a,r):void 0;return{rtlEnabled:m,mergedClsPrefix:e,mergedTheme:i,handleCloseClick:v,cssVars:g?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{segmented:r,bordered:v,hoverable:g,mergedClsPrefix:e,rtlEnabled:f,onRender:i,embedded:m,$slots:a}=this;return i==null||i(),s("div",{class:[`${e}-card`,this.themeClass,m&&`${e}-card--embedded`,{[`${e}-card--rtl`]:f,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:v,[`${e}-card--hoverable`]:g}],style:this.cssVars,role:this.role},c(a.cover,o=>o&&s("div",{class:`${e}-card-cover`,role:"none"},o)),c(a.header,o=>o||this.title||this.closable?s("div",{class:`${e}-card-header`,style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),c(a["header-extra"],l=>l&&s("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},l)),this.closable?s(de,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),c(a.default,o=>o&&s("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},o)),c(a.footer,o=>o&&[s("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},o)]),c(a.action,o=>o&&s("div",{class:`${e}-card__action`,role:"none"},o)))}});export{be as _};
