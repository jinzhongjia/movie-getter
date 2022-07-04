import{e as $,h as u,O as W,c as ne,b4 as Q,a as h,bd as Ne,d as p,be as Te,a0 as v,u as ie,r as M,P as B,i as b,j as J,g as ke,af as $e,m as le,br as Ee,aa as Fe,V as Le,b as R,U,t as te,o as Me,bt as Be,ba as Oe,q as je,ah as Ke,a5 as ee,aq as D,J as ge,N as Ve,S as xe,bu as De,bo as ae,au as oe,a7 as Y,bv as Ue,w as me,ad as O,z as Ge,v as K,x as G,C as N,B as L,y as q,b9 as qe,A as We,G as be,b7 as Je,D as re,H as Ce,F as ze,ao as Xe,bw as Ye}from"./index.da6d6ec6.js";import{p as Ze}from"./path.5ccf9386.js";import{L as Qe,m as eo,g as oo}from"./api.4d446348.js";import{t as to}from"./Tag.56045487.js";import{d as ro,_ as _e}from"./Dropdown.c4c5b9b7.js";import{_ as no}from"./Space.fc697dab.js";import{t as io,N as lo,u as ao}from"./Tooltip.8f8da3ee.js";import{c as co}from"./create.eac446e4.js";import{u as he}from"./use-merged-state.5f7ba65f.js";import{u as so}from"./use-notification.a4315ab7.js";import{a as vo,_ as uo}from"./Grid.7c2e3412.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./data.80e5bc4f.js";import"./Icon.0be0a17c.js";import"./get-slot.40f09d44.js";import"./next-frame-once.da993024.js";var mo=$({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const ho=W("n-avatar-group"),po=e=>{const{borderRadius:n,avatarColor:o,cardColor:r,fontSize:l,heightTiny:a,heightSmall:c,heightMedium:s,heightLarge:d,heightHuge:x,modalColor:I,popoverColor:C}=e;return{borderRadius:n,fontSize:l,border:`2px solid ${r}`,heightTiny:a,heightSmall:c,heightMedium:s,heightLarge:d,heightHuge:x,color:Q(r,o),colorModal:Q(I,o),colorPopover:Q(C,o)}},fo={name:"Avatar",common:ne,self:po};var go=fo,xo=h("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Ne(p("&","--n-merged-color: var(--n-color-modal);")),Te(p("&","--n-merged-color: var(--n-color-popover);")),p("img",`
 width: 100%;
 height: 100%;
 `),v("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),h("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),v("text","line-height: 1.25")]);const bo=Object.assign(Object.assign({},J.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var Co=$({name:"Avatar",props:bo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=M(!1);let l=null;const a=M(null),c=M(null),s=()=>{const{value:f}=a;if(f&&(l===null||l!==f.innerHTML)){l=f.innerHTML;const{value:y}=c;if(y){const{offsetWidth:E,offsetHeight:k}=y,{offsetWidth:H,offsetHeight:V}=f,F=.9,g=Math.min(E/H*F,k/V*F,1);f.style.transform=`translateX(-50%) translateY(-50%) scale(${g})`}}},d=B(ho,null),x=b(()=>{const{size:f}=e;if(f)return f;const{size:y}=d||{};return y||"medium"}),I=J("Avatar","-avatar",xo,go,e,n),C=B(to,null),m=b(()=>{if(d)return!0;const{round:f,circle:y}=e;return f!==void 0||y!==void 0?f||y:C?C.roundRef.value:!1}),S=b(()=>d?!0:e.bordered||!1),T=f=>{r.value=!0;const{onError:y}=e;y&&y(f)};ke(()=>e.src,()=>r.value=!1);const P=b(()=>{const f=x.value,y=m.value,E=S.value,{color:k}=e,{self:{borderRadius:H,fontSize:V,color:F,border:g,colorModal:z,colorPopover:t},common:{cubicBezierEaseInOut:_}}=I.value;let A;return typeof f=="number"?A=`${f}px`:A=I.value.self[$e("height",f)],{"--n-font-size":V,"--n-border":E?g:"none","--n-border-radius":y?"50%":H,"--n-color":k||F,"--n-color-modal":k||z,"--n-color-popover":k||t,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${A})`}}),w=o?le("avatar",b(()=>{const f=x.value,y=m.value,E=S.value,{color:k}=e;let H="";return f&&(typeof f=="number"?H+=`a${f}`:H+=f[0]),y&&(H+="b"),E&&(H+="c"),k&&(H+=Ee(k)),H}),P,e):void 0;return{textRef:a,selfRef:c,mergedRoundRef:m,mergedClsPrefix:n,fitTextTransform:s,cssVars:o?void 0:P,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,hasLoadError:r,handleError:T}},render(){const{$slots:e,src:n,mergedClsPrefix:o,onRender:r}=this;r==null||r();let l;return this.hasLoadError?l=u("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):l=Fe(e.default,a=>{if(a)return u(Le,{onResize:this.fitTextTransform},{default:()=>u("span",{ref:"textRef",class:`${o}-avatar__text`},a)});if(n)return u("img",{src:n,onError:this.handleError,style:{objectFit:this.objectFit}})}),u("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},l)}}),zo={fontWeightActive:"400"};const _o=e=>{const{fontSize:n,textColor3:o,textColor2:r,borderRadius:l,buttonColor2Hover:a,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},zo),{fontSize:n,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:r,itemTextColorPressed:r,itemTextColorActive:r,itemBorderRadius:l,itemColorHover:a,itemColorPressed:c,separatorColor:o})},Io={name:"Breadcrumb",common:ne,self:_o};var yo=Io,wo=h("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[p("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),p("a",`
 color: inherit;
 text-decoration: inherit;
 `),h("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[h("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),p("&:not(:last-child)",[R("clickable",[v("link",`
 cursor: pointer;
 `,[p("&:hover",`
 background-color: var(--n-item-color-hover);
 `),p("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),v("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[p("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[h("icon",`
 color: var(--n-item-text-color-hover);
 `)]),p("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[h("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),v("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 `),p("&:last-child",[v("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[h("icon",`
 color: var(--n-item-text-color-active);
 `)]),v("separator",`
 display: none;
 `)])])]);const Ie=W("n-breadcrumb"),Ho=Object.assign(Object.assign({},J.props),{separator:{type:String,default:"/"}});var Ao=$({name:"Breadcrumb",props:Ho,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=J("Breadcrumb","-breadcrumb",wo,yo,e,n);U(Ie,{separatorRef:te(e,"separator"),mergedClsPrefixRef:n});const l=b(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:s,itemTextColor:d,itemTextColorHover:x,itemTextColorPressed:I,itemTextColorActive:C,fontSize:m,fontWeightActive:S,itemBorderRadius:T,itemColorHover:P,itemColorPressed:w,itemLineHeight:f}}=r.value;return{"--n-font-size":m,"--n-bezier":c,"--n-item-text-color":d,"--n-item-text-color-hover":x,"--n-item-text-color-pressed":I,"--n-item-text-color-active":C,"--n-separator-color":s,"--n-item-color-hover":P,"--n-item-color-pressed":w,"--n-item-border-radius":T,"--n-font-weight-active":S,"--n-item-line-height":f}}),a=o?le("breadcrumb",void 0,l,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},u("ul",null,this.$slots))}});const Ro=Oe?window:null,So=(e=Ro)=>{const n=()=>{const{hash:l,host:a,hostname:c,href:s,origin:d,pathname:x,port:I,protocol:C,search:m}=(e==null?void 0:e.location)||{};return{hash:l,host:a,hostname:c,href:s,origin:d,pathname:x,port:I,protocol:C,search:m}},o=()=>{r.value=n()},r=M(n());return Me(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Be(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),r},Po={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var No=$({name:"BreadcrumbItem",props:Po,setup(e,{slots:n}){const o=B(Ie,null);if(!o)return()=>null;const{separatorRef:r,mergedClsPrefixRef:l}=o,a=So(),c=b(()=>e.href?"a":"span"),s=b(()=>a.value.href===e.href?"location":null);return()=>{const{value:d}=l;return u("li",{class:[`${d}-breadcrumb-item`,e.clickable&&`${d}-breadcrumb-item--clickable`]},u(c.value,{class:`${d}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},n),u("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},je(n.separator,()=>{var x;return[(x=e.separator)!==null&&x!==void 0?x:r.value]})))}}});function To(e,n,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const ko=e=>{const{borderRadius:n,textColor3:o,primaryColor:r,textColor2:l,textColor1:a,fontSize:c,dividerColor:s,hoverColor:d,primaryColorHover:x}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:o,itemColorHover:d,itemColorActive:ee(r,{alpha:.1}),itemColorActiveHover:ee(r,{alpha:.1}),itemColorActiveCollapsed:ee(r,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:x,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:x,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:s},To("#BBB",r,"#FFF","#AAA"))},$o=Ke({name:"Menu",common:ne,peers:{Tooltip:io,Dropdown:ro},self:ko});var Eo=$o;const Fo=W("n-layout-sider"),X=W("n-menu"),ce=W("n-submenu"),de=W("n-menu-item-group"),Z=8;function se(e){const n=B(X),{props:o,mergedCollapsedRef:r}=n,l=B(ce,null),a=B(de,null),c=b(()=>o.mode==="horizontal"),s=b(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=b(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),x=b(()=>{var m;return!c.value&&e.root&&r.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),I=b(()=>{if(c.value)return;const{collapsedWidth:m,indent:S,rootIndent:T}=o,{root:P,isGroup:w}=e,f=T===void 0?S:T;if(P)return r.value?m/2-d.value/2:f;if(a)return S/2+a.paddingLeftRef.value;if(l)return(w?S/2:S)+l.paddingLeftRef.value}),C=b(()=>{const{collapsedWidth:m,indent:S,rootIndent:T}=o,{value:P}=d,{root:w}=e;return c.value||!w||!r.value?Z:(T===void 0?S:T)+P+Z-(m+P)/2});return{dropdownPlacement:s,activeIconSize:x,maxIconSize:d,paddingLeft:I,iconMarginRight:C,NMenu:n,NSubmenu:l}}const ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Lo=$({name:"MenuOptionGroup",props:ye,setup(e){U(ce,null);const n=se(e);U(de,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:o,props:r}=B(X);return function(){const{value:l}=o,a=n.paddingLeft.value,{nodeProps:c}=r,s=c==null?void 0:c(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${l}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?u(ge,null," ",D(e.extra)):null),u("div",null,e.tmNodes.map(d=>ue(d,r))))}}});var we=$({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:n}=B(X);return{menuProps:n,style:b(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:b(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:o,renderLabel:r,renderExtra:l,expandIcon:a}}=this,c=o?o(n.rawNode):D(this.icon);return u("div",{onClick:s=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(n.rawNode):D(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(n.rawNode):D(this.extra)):null),this.showArrow?u(Ve,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(n.rawNode):u(mo,null)}):null)}});const He=Object.assign(Object.assign({},ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Mo=$({name:"Submenu",props:He,setup(e){const n=se(e),{NMenu:o,NSubmenu:r}=n,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=o,s=b(()=>{const{disabled:m}=e;return r!=null&&r.mergedDisabledRef.value||l.disabled?!0:m}),d=M(!1);U(ce,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),U(de,null);function x(){const{onClick:m}=e;m&&m()}function I(){s.value||(a.value||o.toggleExpand(e.internalKey),x())}function C(m){d.value=m}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:d,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:xe(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!s.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:C,handleClick:I}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:o,renderLabel:r}}=this,l=()=>{const{isHorizontal:c,paddingLeft:s,collapsed:d,mergedDisabled:x,maxIconSize:I,activeIconSize:C,title:m,childActive:S,icon:T,handleClick:P,menuProps:{nodeProps:w},dropdownShow:f,iconMarginRight:y,tmNode:E,mergedClsPrefix:k}=this,H=w==null?void 0:w(E.rawNode);return u("div",Object.assign({},H,{class:[`${k}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),u(we,{tmNode:E,paddingLeft:s,collapsed:d,disabled:x,iconMarginRight:y,maxIconSize:I,activeIconSize:C,title:m,showArrow:!c,childActive:S,clsPrefix:k,icon:T,hover:f,onClick:P}))},a=()=>u(De,null,{default:()=>{const{tmNodes:c,collapsed:s}=this;return s?null:u("div",{class:`${n}-submenu-children`,role:"menu"},c.map(d=>ue(d,this.menuProps)))}});return this.root?u(_e,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>u("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):u("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),Ae=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Bo=$({name:"MenuOption",props:Ae,setup(e){const n=se(e),{NSubmenu:o,NMenu:r}=n,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:c}=r,s=o?o.mergedDisabledRef:{value:!1},d=b(()=>s.value||e.disabled);function x(C){const{onClick:m}=e;m&&m(C)}function I(C){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),x(C))}return{mergedClsPrefix:a,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:l,dropdownEnabled:xe(()=>e.root&&c.value&&l.mode!=="horizontal"&&!d.value),selected:b(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:I}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:o,menuProps:{renderLabel:r,nodeProps:l}}=this,a=l==null?void 0:l(o.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(lo,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):D(this.title),trigger:()=>u(we,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Oo=$({name:"MenuDivider",setup(){const e=B(X),{mergedClsPrefixRef:n,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${n.value}-menu-divider`})}});const jo=ae(ye),Ko=ae(Ae),Vo=ae(He);function Do(e){return e.type==="divider"||e.type==="render"}function Uo(e){return e.type==="divider"}function ue(e,n){const{rawNode:o}=e;if(Do(o))return Uo(o)?u(Oo,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=n,{key:l,level:a,isGroup:c}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:c});return e.children?e.isGroup?u(Lo,oe(s,jo,{tmNode:e,tmNodes:e.children,key:l})):u(Mo,oe(s,Vo,{key:l,rawNodes:o[n.childrenField],tmNodes:e.children,tmNode:e})):u(Bo,oe(s,Ko,{key:l,tmNode:e}))}const pe=[p("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[p("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],fe=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[p("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var Go=p([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[p("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[R("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[p("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[p("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Y("disabled",[Y("selected, child-active",[p("&:focus-within",fe)]),R("selected",[j(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[p("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[j(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[p("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),j("border-bottom: 2px solid var(--n-border-color-horizontal);",fe)]),h("menu-item-content-header",[p("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[h("menu-item-content",[R("selected",[p("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("> *","z-index: 1;"),p("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[v("arrow","transform: rotate(0);")]),R("selected",[p("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[p("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[p("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Y("disabled",[Y("selected, child-active",[p("&:focus-within",pe)]),R("selected",[j(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[p("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[j(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[p("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[j(null,[p("&::before","background-color: var(--n-item-color-active-hover);")])]),j(null,pe)]),v("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),v("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[p("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[p("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ue({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[p("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function j(e,n){return[R("hover",e,n),p("&:hover",e,n)]}const qo=Object.assign(Object.assign({},J.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Wo=$({name:"Menu",props:qo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=J("Menu","-menu",Go,Eo,e,n),l=B(Fo,null),a=b(()=>{var g;const{collapsed:z}=e;if(z!==void 0)return z;if(l){const{collapseModeRef:t,collapsedRef:_}=l;if(t.value==="width")return(g=_.value)!==null&&g!==void 0?g:!1}return!1}),c=b(()=>{const{keyField:g,childrenField:z}=e;return co(e.items||e.options,{getChildren(t){return t[z]},getKey(t){var _;return(_=t[g])!==null&&_!==void 0?_:t.name}})}),s=b(()=>new Set(c.value.treeNodes.map(g=>g.key))),{watchProps:d}=e,x=M(null);d!=null&&d.includes("defaultValue")?me(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const I=te(e,"value"),C=he(I,x),m=M([]),S=()=>{m.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(C.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?me(S):S();const T=ao(e,["expandedNames","expandedKeys"]),P=he(T,m),w=b(()=>c.value.treeNodes),f=b(()=>c.value.getPath(C.value).keyPath);U(X,{props:e,mergedCollapsedRef:a,mergedThemeRef:r,mergedValueRef:C,mergedExpandedKeysRef:P,activePathRef:f,mergedClsPrefixRef:n,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:y,toggleExpand:k});function y(g,z){const{"onUpdate:value":t,onUpdateValue:_,onSelect:A}=e;_&&O(_,g,z),t&&O(t,g,z),A&&O(A,g,z),x.value=g}function E(g){const{"onUpdate:expandedKeys":z,onUpdateExpandedKeys:t,onExpandedNamesChange:_,onOpenNamesChange:A}=e;z&&O(z,g),t&&O(t,g),_&&O(_,g),A&&O(A,g),m.value=g}function k(g){const z=Array.from(P.value),t=z.findIndex(_=>_===g);if(~t)z.splice(t,1);else{if(e.accordion&&s.value.has(g)){const _=z.findIndex(A=>s.value.has(A));_>-1&&z.splice(_,1)}z.push(g)}E(z)}const H=g=>{const z=c.value.getPath(g!=null?g:C.value,{includeSelf:!1}).keyPath;if(!z.length)return;const t=Array.from(P.value),_=new Set([...t,...z]);e.accordion&&s.value.forEach(A=>{_.has(A)&&!z.includes(A)&&_.delete(A)}),E(Array.from(_))},V=b(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:z},self:t}=r.value,{borderRadius:_,borderColorHorizontal:A,fontSize:Re,itemHeight:Se,dividerColor:Pe}=t,i={"--n-divider-color":Pe,"--n-bezier":z,"--n-font-size":Re,"--n-border-color-horizontal":A,"--n-border-radius":_,"--n-item-height":Se};return g?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),F=o?le("menu",b(()=>e.inverted?"a":"b"),V,e):void 0;return{mergedClsPrefix:n,controlledExpandedKeys:T,uncontrolledExpanededKeys:m,mergedExpandedKeys:P,uncontrolledValue:x,mergedValue:C,activePath:f,tmNodes:w,mergedTheme:r,mergedCollapsed:a,cssVars:o?void 0:V,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:n,themeClass:o,onRender:r}=this;return r==null||r(),u("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${n}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>ue(l,this.$props)))}}),Jo="/assets/head-img.ac2408b9.svg";const Xo={class:"panel-header"},Yo={class:"breadcrumb"},Zo=be(" \u7CFB\u7EDF"),Qo={class:"head-image"},et=q("span",{class:"admin"},"Admin",-1),ot=$({__name:"PanelHeader",setup(e){const n=Ge(),o=M([{label:"\u524D\u53F0\u9996\u9875",key:"front"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"setting"},{label:"\u767B\u51FA\u8D26\u6237",key:"logout"}]);function r(l){switch(l){case"front":window.open(window.location.protocol+"//"+window.location.host);break;case"setting":n.push({name:"setting"});break;case"logout":Qe().then(()=>{n.push({name:"login"})})}}return(l,a)=>{const c=No,s=Ao,d=Co,x=_e,I=no;return K(),G("div",Xo,[N(I,{class:"space",justify:"space-between"},{default:L(()=>[q("div",Yo,[N(s,{separator:">"},{default:L(()=>[N(c,{clickable:!1},{default:L(()=>[Zo]),_:1}),(K(!0),G(ge,null,qe(re(Ze),C=>(K(),We(c,null,{default:L(()=>[be(Je(C.name),1)]),_:2},1024))),256))]),_:1})]),N(x,{trigger:"hover",options:o.value,onSelect:r},{default:L(()=>[q("div",Qo,[N(d,{size:"medium",src:re(Jo),round:""},null,8,["src"]),et])]),_:1},8,["options"])]),_:1})])}}}),tt=$({__name:"MenuBody",setup(e){const n=M(null);return M(!1),(o,r)=>{const l=Wo;return K(),G("div",null,[N(l,{value:n.value,"onUpdate:value":r[0]||(r[0]=a=>n.value=a),accordion:!1,"collapsed-icon-size":22,options:re(eo),mode:"vertical"},null,8,["value","options"])])}}});const rt={},nt={class:"l-header"},it=q("span",{class:"title"},"GoMovie\u540E\u53F0\u7BA1\u7406",-1);function lt(e,n){const o=ze("router-link");return K(),G("div",nt,[N(o,{to:"/user/panel"},{default:L(()=>[it]),_:1})])}var at=Ce(rt,[["render",lt]]);const ct={},dt={class:"menu"};function st(e,n){const o=at,r=tt;return K(),G("div",dt,[N(o),N(r)])}var vt=Ce(ct,[["render",st]]);const ut={class:"panel"},mt={class:"panel-body"},Nt=$({__name:"User",setup(e){return window.$notification=so(),Xe(()=>{oo()}),(n,o)=>{const r=vt,l=uo,a=ot,c=ze("router-view"),s=Ye,d=vo;return K(),G("div",null,[N(d,{cols:"10 l:9",responsive:"screen","item-responsive":""},{default:L(()=>[N(l,{span:"1 l:1"},{default:L(()=>[N(r)]),_:1}),N(l,{span:"8"},{default:L(()=>[q("div",ut,[N(a),q("div",mt,[N(s,{style:{"max-height":"calc(100vh - 60px)"}},{default:L(()=>[N(c)]),_:1})])])]),_:1})]),_:1})])}}});export{Nt as default};
