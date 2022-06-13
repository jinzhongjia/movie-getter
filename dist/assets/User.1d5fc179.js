import{e as S,h as u,K as W,c as ne,aL as ee,a as h,bd as Ne,d as p,be as $e,ay as v,u as ie,r as O,M as V,g as b,i as Y,w as Te,aY as Le,k as le,bn as Me,aF as Ee,V as Fe,b as R,R as q,t as re,o as Be,bp as Oe,ba as Ve,p as je,aK as Ke,aT as oe,b4 as G,I as xe,N as De,Q as be,bq as Ue,br as ae,aI as te,ax as Q,bs as Ge,aA as me,aJ as K,s as F,v as j,x as $,y as qe,B as N,A as B,b9 as We,z as Ye,F as Ce,b7 as Je,C as he,bt as X,G as ze,E as _e,b2 as Qe,bu as Xe}from"./index.51407d32.js";import{p as Ze}from"./path.63f97327.js";import{L as eo,g as oo}from"./api.8c74fd8b.js";import{t as to}from"./Tag.c7cdbf46.js";import{d as ro,_ as Ie}from"./Dropdown.15371dae.js";import{_ as no}from"./Space.4ed87f99.js";import{t as io,N as lo,u as ao}from"./Tooltip.a0abd3ed.js";import{c as co}from"./create.aafe3cda.js";import{u as pe}from"./use-merged-state.a0315c03.js";import{N as so}from"./Icon.b8d909f1.js";import{u as uo}from"./use-notification.e855f71d.js";import{a as vo,_ as mo}from"./Grid.7bfbd844.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./data.270c8dc4.js";import"./get-slot.5ad428c3.js";import"./next-frame-once.da993024.js";var ho=S({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const po=W("n-avatar-group"),fo=e=>{const{borderRadius:n,avatarColor:o,cardColor:r,fontSize:l,heightTiny:a,heightSmall:c,heightMedium:d,heightLarge:s,heightHuge:x,modalColor:I,popoverColor:C}=e;return{borderRadius:n,fontSize:l,border:`2px solid ${r}`,heightTiny:a,heightSmall:c,heightMedium:d,heightLarge:s,heightHuge:x,color:ee(r,o),colorModal:ee(I,o),colorPopover:ee(C,o)}},go={name:"Avatar",common:ne,self:fo};var xo=go,bo=h("avatar",`
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
`,[Ne(p("&","--n-merged-color: var(--n-color-modal);")),$e(p("&","--n-merged-color: var(--n-color-popover);")),p("img",`
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
 `),v("text","line-height: 1.25")]);const Co=Object.assign(Object.assign({},Y.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var zo=S({name:"Avatar",props:Co,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=O(!1);let l=null;const a=O(null),c=O(null),d=()=>{const{value:f}=a;if(f&&(l===null||l!==f.innerHTML)){l=f.innerHTML;const{value:w}=c;if(w){const{offsetWidth:M,offsetHeight:L}=w,{offsetWidth:H,offsetHeight:U}=f,E=.9,g=Math.min(M/H*E,L/U*E,1);f.style.transform=`translateX(-50%) translateY(-50%) scale(${g})`}}},s=V(po,null),x=b(()=>{const{size:f}=e;if(f)return f;const{size:w}=s||{};return w||"medium"}),I=Y("Avatar","-avatar",bo,xo,e,n),C=V(to,null),m=b(()=>{if(s)return!0;const{round:f,circle:w}=e;return f!==void 0||w!==void 0?f||w:C?C.roundRef.value:!1}),k=b(()=>s?!0:e.bordered||!1),T=f=>{r.value=!0;const{onError:w}=e;w&&w(f)};Te(()=>e.src,()=>r.value=!1);const P=b(()=>{const f=x.value,w=m.value,M=k.value,{color:L}=e,{self:{borderRadius:H,fontSize:U,color:E,border:g,colorModal:z,colorPopover:t},common:{cubicBezierEaseInOut:_}}=I.value;let A;return typeof f=="number"?A=`${f}px`:A=I.value.self[Le("height",f)],{"--n-font-size":U,"--n-border":M?g:"none","--n-border-radius":w?"50%":H,"--n-color":L||E,"--n-color-modal":L||z,"--n-color-popover":L||t,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${A})`}}),y=o?le("avatar",b(()=>{const f=x.value,w=m.value,M=k.value,{color:L}=e;let H="";return f&&(typeof f=="number"?H+=`a${f}`:H+=f[0]),w&&(H+="b"),M&&(H+="c"),L&&(H+=Me(L)),H}),P,e):void 0;return{textRef:a,selfRef:c,mergedRoundRef:m,mergedClsPrefix:n,fitTextTransform:d,cssVars:o?void 0:P,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,hasLoadError:r,handleError:T}},render(){const{$slots:e,src:n,mergedClsPrefix:o,onRender:r}=this;r==null||r();let l;return this.hasLoadError?l=u("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):l=Ee(e.default,a=>{if(a)return u(Fe,{onResize:this.fitTextTransform},{default:()=>u("span",{ref:"textRef",class:`${o}-avatar__text`},a)});if(n)return u("img",{src:n,onError:this.handleError,style:{objectFit:this.objectFit}})}),u("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},l)}}),_o={fontWeightActive:"400"};const Io=e=>{const{fontSize:n,textColor3:o,textColor2:r,borderRadius:l,buttonColor2Hover:a,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},_o),{fontSize:n,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:r,itemTextColorPressed:r,itemTextColorActive:r,itemBorderRadius:l,itemColorHover:a,itemColorPressed:c,separatorColor:o})},wo={name:"Breadcrumb",common:ne,self:Io};var yo=wo,Ho=h("breadcrumb",`
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
 `)])])]);const we=W("n-breadcrumb"),Ao=Object.assign(Object.assign({},Y.props),{separator:{type:String,default:"/"}});var Ro=S({name:"Breadcrumb",props:Ao,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=Y("Breadcrumb","-breadcrumb",Ho,yo,e,n);q(we,{separatorRef:re(e,"separator"),mergedClsPrefixRef:n});const l=b(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:d,itemTextColor:s,itemTextColorHover:x,itemTextColorPressed:I,itemTextColorActive:C,fontSize:m,fontWeightActive:k,itemBorderRadius:T,itemColorHover:P,itemColorPressed:y,itemLineHeight:f}}=r.value;return{"--n-font-size":m,"--n-bezier":c,"--n-item-text-color":s,"--n-item-text-color-hover":x,"--n-item-text-color-pressed":I,"--n-item-text-color-active":C,"--n-separator-color":d,"--n-item-color-hover":P,"--n-item-color-pressed":y,"--n-item-border-radius":T,"--n-font-weight-active":k,"--n-item-line-height":f}}),a=o?le("breadcrumb",void 0,l,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},u("ul",null,this.$slots))}});const So=Ve?window:null,ko=(e=So)=>{const n=()=>{const{hash:l,host:a,hostname:c,href:d,origin:s,pathname:x,port:I,protocol:C,search:m}=(e==null?void 0:e.location)||{};return{hash:l,host:a,hostname:c,href:d,origin:s,pathname:x,port:I,protocol:C,search:m}},o=()=>{r.value=n()},r=O(n());return Be(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Oe(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),r},Po={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var No=S({name:"BreadcrumbItem",props:Po,setup(e,{slots:n}){const o=V(we,null);if(!o)return()=>null;const{separatorRef:r,mergedClsPrefixRef:l}=o,a=ko(),c=b(()=>e.href?"a":"span"),d=b(()=>a.value.href===e.href?"location":null);return()=>{const{value:s}=l;return u("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},u(c.value,{class:`${s}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},n),u("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},je(n.separator,()=>{var x;return[(x=e.separator)!==null&&x!==void 0?x:r.value]})))}}});function $o(e,n,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const To=e=>{const{borderRadius:n,textColor3:o,primaryColor:r,textColor2:l,textColor1:a,fontSize:c,dividerColor:d,hoverColor:s,primaryColorHover:x}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:oe(r,{alpha:.1}),itemColorActiveHover:oe(r,{alpha:.1}),itemColorActiveCollapsed:oe(r,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:x,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:x,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:d},$o("#BBB",r,"#FFF","#AAA"))},Lo=Ke({name:"Menu",common:ne,peers:{Tooltip:io,Dropdown:ro},self:To});var Mo=Lo;const Eo=W("n-layout-sider"),J=W("n-menu"),ce=W("n-submenu"),de=W("n-menu-item-group"),Z=8;function se(e){const n=V(J),{props:o,mergedCollapsedRef:r}=n,l=V(ce,null),a=V(de,null),c=b(()=>o.mode==="horizontal"),d=b(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=b(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),x=b(()=>{var m;return!c.value&&e.root&&r.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),I=b(()=>{if(c.value)return;const{collapsedWidth:m,indent:k,rootIndent:T}=o,{root:P,isGroup:y}=e,f=T===void 0?k:T;if(P)return r.value?m/2-s.value/2:f;if(a)return k/2+a.paddingLeftRef.value;if(l)return(y?k/2:k)+l.paddingLeftRef.value}),C=b(()=>{const{collapsedWidth:m,indent:k,rootIndent:T}=o,{value:P}=s,{root:y}=e;return c.value||!y||!r.value?Z:(T===void 0?k:T)+P+Z-(m+P)/2});return{dropdownPlacement:d,activeIconSize:x,maxIconSize:s,paddingLeft:I,iconMarginRight:C,NMenu:n,NSubmenu:l}}const ue={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Fo=S({name:"MenuOptionGroup",props:ye,setup(e){q(ce,null);const n=se(e);q(de,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:o,props:r}=V(J);return function(){const{value:l}=o,a=n.paddingLeft.value,{nodeProps:c}=r,d=c==null?void 0:c(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},d,{class:[`${l}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),G(e.title),e.extra?u(xe,null," ",G(e.extra)):null),u("div",null,e.tmNodes.map(s=>ve(s,r))))}}});var He=S({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:n}=V(J);return{menuProps:n,style:b(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:b(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:o,renderLabel:r,renderExtra:l,expandIcon:a}}=this,c=o?o(n.rawNode):G(this.icon);return u("div",{onClick:d=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(n.rawNode):G(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(n.rawNode):G(this.extra)):null),this.showArrow?u(De,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(n.rawNode):u(ho,null)}):null)}});const Ae=Object.assign(Object.assign({},ue),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Bo=S({name:"Submenu",props:Ae,setup(e){const n=se(e),{NMenu:o,NSubmenu:r}=n,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=o,d=b(()=>{const{disabled:m}=e;return r!=null&&r.mergedDisabledRef.value||l.disabled?!0:m}),s=O(!1);q(ce,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:d}),q(de,null);function x(){const{onClick:m}=e;m&&m()}function I(){d.value||(a.value||o.toggleExpand(e.internalKey),x())}function C(m){s.value=m}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:s,paddingLeft:n.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:be(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!d.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:C,handleClick:I}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:o,renderLabel:r}}=this,l=()=>{const{isHorizontal:c,paddingLeft:d,collapsed:s,mergedDisabled:x,maxIconSize:I,activeIconSize:C,title:m,childActive:k,icon:T,handleClick:P,menuProps:{nodeProps:y},dropdownShow:f,iconMarginRight:w,tmNode:M,mergedClsPrefix:L}=this,H=y==null?void 0:y(M.rawNode);return u("div",Object.assign({},H,{class:[`${L}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),u(He,{tmNode:M,paddingLeft:d,collapsed:s,disabled:x,iconMarginRight:w,maxIconSize:I,activeIconSize:C,title:m,showArrow:!c,childActive:k,clsPrefix:L,icon:T,hover:f,onClick:P}))},a=()=>u(Ue,null,{default:()=>{const{tmNodes:c,collapsed:d}=this;return d?null:u("div",{class:`${n}-submenu-children`,role:"menu"},c.map(s=>ve(s,this.menuProps)))}});return this.root?u(Ie,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>u("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):u("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),Re=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Oo=S({name:"MenuOption",props:Re,setup(e){const n=se(e),{NSubmenu:o,NMenu:r}=n,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:c}=r,d=o?o.mergedDisabledRef:{value:!1},s=b(()=>d.value||e.disabled);function x(C){const{onClick:m}=e;m&&m(C)}function I(C){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),x(C))}return{mergedClsPrefix:a,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:l,dropdownEnabled:be(()=>e.root&&c.value&&l.mode!=="horizontal"&&!s.value),selected:b(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:I}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:o,menuProps:{renderLabel:r,nodeProps:l}}=this,a=l==null?void 0:l(o.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(lo,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):G(this.title),trigger:()=>u(He,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Vo=S({name:"MenuDivider",setup(){const e=V(J),{mergedClsPrefixRef:n,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${n.value}-menu-divider`})}});const jo=ae(ye),Ko=ae(Re),Do=ae(Ae);function Uo(e){return e.type==="divider"||e.type==="render"}function Go(e){return e.type==="divider"}function ve(e,n){const{rawNode:o}=e;if(Uo(o))return Go(o)?u(Vo,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=n,{key:l,level:a,isGroup:c}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:c});return e.children?e.isGroup?u(Fo,te(d,jo,{tmNode:e,tmNodes:e.children,key:l})):u(Bo,te(d,Do,{key:l,rawNodes:o[n.childrenField],tmNodes:e.children,tmNode:e})):u(Oo,te(d,Ko,{key:l,tmNode:e}))}const fe=[p("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[p("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ge=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[p("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var qo=p([h("menu",`
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
 `)]),Q("disabled",[Q("selected, child-active",[p("&:focus-within",ge)]),R("selected",[D(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[p("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[D(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[p("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),D("border-bottom: 2px solid var(--n-border-color-horizontal);",ge)]),h("menu-item-content-header",[p("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[h("menu-item-content",[R("selected",[p("&::before",`
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
 `)]),Q("disabled",[Q("selected, child-active",[p("&:focus-within",fe)]),R("selected",[D(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[p("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[D(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[p("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[D(null,[p("&::before","background-color: var(--n-item-color-active-hover);")])]),D(null,fe)]),v("icon",`
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
 `,[Ge({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
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
 `)]);function D(e,n){return[R("hover",e,n),p("&:hover",e,n)]}const Wo=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Yo=S({name:"Menu",props:Wo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ie(e),r=Y("Menu","-menu",qo,Mo,e,n),l=V(Eo,null),a=b(()=>{var g;const{collapsed:z}=e;if(z!==void 0)return z;if(l){const{collapseModeRef:t,collapsedRef:_}=l;if(t.value==="width")return(g=_.value)!==null&&g!==void 0?g:!1}return!1}),c=b(()=>{const{keyField:g,childrenField:z}=e;return co(e.items||e.options,{getChildren(t){return t[z]},getKey(t){var _;return(_=t[g])!==null&&_!==void 0?_:t.name}})}),d=b(()=>new Set(c.value.treeNodes.map(g=>g.key))),{watchProps:s}=e,x=O(null);s!=null&&s.includes("defaultValue")?me(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const I=re(e,"value"),C=pe(I,x),m=O([]),k=()=>{m.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(C.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?me(k):k();const T=ao(e,["expandedNames","expandedKeys"]),P=pe(T,m),y=b(()=>c.value.treeNodes),f=b(()=>c.value.getPath(C.value).keyPath);q(J,{props:e,mergedCollapsedRef:a,mergedThemeRef:r,mergedValueRef:C,mergedExpandedKeysRef:P,activePathRef:f,mergedClsPrefixRef:n,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:re(e,"inverted"),doSelect:w,toggleExpand:L});function w(g,z){const{"onUpdate:value":t,onUpdateValue:_,onSelect:A}=e;_&&K(_,g,z),t&&K(t,g,z),A&&K(A,g,z),x.value=g}function M(g){const{"onUpdate:expandedKeys":z,onUpdateExpandedKeys:t,onExpandedNamesChange:_,onOpenNamesChange:A}=e;z&&K(z,g),t&&K(t,g),_&&K(_,g),A&&K(A,g),m.value=g}function L(g){const z=Array.from(P.value),t=z.findIndex(_=>_===g);if(~t)z.splice(t,1);else{if(e.accordion&&d.value.has(g)){const _=z.findIndex(A=>d.value.has(A));_>-1&&z.splice(_,1)}z.push(g)}M(z)}const H=g=>{const z=c.value.getPath(g!=null?g:C.value,{includeSelf:!1}).keyPath;if(!z.length)return;const t=Array.from(P.value),_=new Set([...t,...z]);e.accordion&&d.value.forEach(A=>{_.has(A)&&!z.includes(A)&&_.delete(A)}),M(Array.from(_))},U=b(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:z},self:t}=r.value,{borderRadius:_,borderColorHorizontal:A,fontSize:Se,itemHeight:ke,dividerColor:Pe}=t,i={"--n-divider-color":Pe,"--n-bezier":z,"--n-font-size":Se,"--n-border-color-horizontal":A,"--n-border-radius":_,"--n-item-height":ke};return g?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),E=o?le("menu",b(()=>e.inverted?"a":"b"),U,e):void 0;return{mergedClsPrefix:n,controlledExpandedKeys:T,uncontrolledExpanededKeys:m,mergedExpandedKeys:P,uncontrolledValue:x,mergedValue:C,activePath:f,tmNodes:y,mergedTheme:r,mergedCollapsed:a,cssVars:o?void 0:U,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:n,themeClass:o,onRender:r}=this;return r==null||r(),u("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${n}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>ve(l,this.$props)))}});const Jo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qo=$("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Xo=$("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Zo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),et=[Qo,Xo,Zo];var ot=S({name:"HomeOutline",render:function(n,o){return F(),j("svg",Jo,et)}}),tt="/assets/head-img.819689da.svg";const rt={class:"panel-header"},nt={class:"breadcrumb"},it=Ce(" \u7CFB\u7EDF"),lt={class:"head-image"},at=$("span",{class:"admin"},"Admin",-1),ct=S({__name:"PanelHeader",setup(e){const n=qe(),o=O([{label:"\u524D\u53F0\u9996\u9875",key:"front"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"setting"},{label:"\u767B\u51FA\u8D26\u6237",key:"logout"}]);function r(l){switch(l){case"front":window.open(window.location.protocol+"//"+window.location.host);break;case"setting":n.push({name:"setting"});break;case"logout":eo().then(()=>{n.push({name:"login"})})}}return(l,a)=>{const c=No,d=Ro,s=zo,x=Ie,I=no;return F(),j("div",rt,[N(I,{class:"space",justify:"space-between"},{default:B(()=>[$("div",nt,[N(d,{separator:">"},{default:B(()=>[N(c,{clickable:!1},{default:B(()=>[it]),_:1}),(F(!0),j(xe,null,We(he(Ze),C=>(F(),Ye(c,null,{default:B(()=>[Ce(Je(C.name),1)]),_:2},1024))),256))]),_:1})]),N(x,{trigger:"hover",options:o.value,onSelect:r},{default:B(()=>[$("div",lt,[N(s,{size:"medium",src:he(tt),round:""},null,8,["src"]),at])]),_:1},8,["options"])]),_:1})])}}}),dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},st=$("g",{fill:"none"},[$("path",{d:"M4 4a2 2 0 0 1 1-1.732V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2-2v6.5a.5.5 0 0 0 .8.4l1.7-1.275L10.2 8.9a.5.5 0 0 0 .8-.4V2H6zm1 5.5V3h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0L7 7.5z",fill:"currentColor"})],-1),ut=[st];var vt=S({name:"Class20Regular",render:function(n,o){return F(),j("svg",dt,ut)}});const mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ht=$("g",{fill:"none"},[$("path",{d:"M2 3.498C2 2.67 2.671 2 3.5 2h1c.827 0 1.499.67 1.499 1.498V16.48c0 .827-.672 1.497-1.5 1.497h-1c-.828 0-1.499-.67-1.499-1.497V3.498zm1.5-.5a.5.5 0 0 0-.5.5V16.48a.5.5 0 0 0 .5.499h1a.5.5 0 0 0 .499-.5V3.499a.5.5 0 0 0-.5-.5h-1zm3.498.5C6.998 2.67 7.67 2 8.498 2h1c.828 0 1.499.67 1.499 1.498V16.48c0 .827-.671 1.497-1.5 1.497h-1c-.827 0-1.499-.67-1.499-1.497V3.498zm1.5-.5a.5.5 0 0 0-.5.5V16.48a.5.5 0 0 0 .5.499h1a.5.5 0 0 0 .5-.5V3.499a.5.5 0 0 0-.5-.5h-1zm7.22 3.159a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.498 1.498 0 0 0-1.06 1.741l2.003 9.8a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787l-2.244-9.76zm-1.598-.145a.5.5 0 0 1 .624.368l2.243 9.76a.5.5 0 0 1-.364.595l-.985.25a.5.5 0 0 1-.613-.383l-2.003-9.8a.5.5 0 0 1 .353-.58l.745-.21z",fill:"currentColor"})],-1),pt=[ht];var ft=S({name:"Library20Regular",render:function(n,o){return F(),j("svg",mt,pt)}});const gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},xt=$("g",{fill:"none"},[$("path",{d:"M16.13 5.38L7.038 8h9.46a.5.5 0 0 1 .5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V8.571l-.257-.893a2.5 2.5 0 0 1 1.71-3.095l8.647-2.493a2.5 2.5 0 0 1 3.095 1.71l.277.96a.5.5 0 0 1-.342.62zM3.84 7.88l.607-.175L5.889 5.21l-1.16.335A1.5 1.5 0 0 0 3.703 7.4l.138.48zm1.992-.574l2.12-.612l1.443-2.497l-2.125.613a.51.51 0 0 1-.021.042L5.833 7.307zm5.627-1.622l1.442-2.498l-2.126.613a.517.517 0 0 1-.026.053L9.34 6.296l2.12-.611zm2.684-2.652a.54.54 0 0 1-.02.036l-1.279 2.216l2.527-.728l-.139-.48a1.5 1.5 0 0 0-1.09-1.044zM4 9v6.5A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5V9H4z",fill:"currentColor"})],-1),bt=[xt];var Ct=S({name:"MoviesAndTv20Regular",render:function(n,o){return F(),j("svg",gt,bt)}});const zt=S({__name:"MenuBody",setup(e){function n(l){return()=>u(so,null,{default:()=>u(l)})}const o=[{label:()=>u(X,{to:{name:"panel"}},{default:()=>"\u4EEA\u8868\u76D8"}),key:"instrument-panel",icon:n(ot)},{label:()=>u(X,{to:{name:"source"}},{default:()=>"\u91C7\u96C6\u6E90"}),key:"source",icon:n(ft)},{label:()=>u(X,{to:{name:"category"}},{default:()=>"\u5206\u7C7B\u7BA1\u7406"}),key:"category-management",icon:n(vt)},{label:()=>u(X,{to:{name:"movies"}},{default:()=>"\u5F71\u7247\u7BA1\u7406"}),key:"movie-management",icon:n(Ct)}],r=O(null);return O(!1),(l,a)=>{const c=Yo;return F(),j("div",null,[N(c,{value:r.value,"onUpdate:value":a[0]||(a[0]=d=>r.value=d),accordion:!1,"collapsed-icon-size":22,options:o,mode:"vertical"},null,8,["value"])])}}});const _t={},It={class:"l-header"},wt=$("span",{class:"title"},"GoMovie\u540E\u53F0\u7BA1\u7406",-1);function yt(e,n){const o=_e("router-link");return F(),j("div",It,[N(o,{to:"/user/panel"},{default:B(()=>[wt]),_:1})])}var Ht=ze(_t,[["render",yt]]);const At={},Rt={class:"menu"};function St(e,n){const o=Ht,r=zt;return F(),j("div",Rt,[N(o),N(r)])}var kt=ze(At,[["render",St]]);const Pt={class:"panel"},Nt={class:"panel-body"},Jt=S({__name:"User",setup(e){return window.$notification=uo(),Qe(()=>{oo()}),(n,o)=>{const r=kt,l=mo,a=ct,c=_e("router-view"),d=Xe,s=vo;return F(),j("div",null,[N(s,{cols:"10 l:9",responsive:"screen","item-responsive":""},{default:B(()=>[N(l,{span:"1 l:1"},{default:B(()=>[N(r)]),_:1}),N(l,{span:"8"},{default:B(()=>[$("div",Pt,[N(a),$("div",Nt,[N(d,{style:{"max-height":"calc(100vh - 60px)"}},{default:B(()=>[N(c)]),_:1})])])]),_:1})]),_:1})])}}});export{Jt as default};
