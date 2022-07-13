import{d as L,h as p,c as ve,a as te,b as W,e as g,i as Me,f as x,g as Oe,j as f,u as ue,r as T,k as O,l as C,m as X,w as Ee,n as Fe,o as me,p as Be,q as ye,s as ce,t as je,v as Ke,V as Ve,x as R,y as U,z as de,A as De,B as Ue,C as Ge,D as qe,E as re,F as D,G as we,N as We,H as He,I as Xe,J as he,K as ne,L as J,M as Ye,O as j,P as Ze,Q as V,R as G,S as P,T as M,U as q,W as Je,X as se,Y as Ae,Z as Qe,_ as eo,$ as Re,a0 as Se,a1 as oo,a2 as to}from"./index.c1756e21.js";import{p as ro}from"./path.372694b2.js";import{L as no,m as io,u as lo,g as ao}from"./api.efd43731.js";import{t as co,a as so,d as vo,_ as Pe,N as uo,c as mo,u as ho}from"./Dropdown.4f0a8221.js";import{u as Ce,_ as fo}from"./Space.1efc808b.js";import{_ as po,a as go}from"./Grid.89ee9266.js";import"./data.29b9eebc.js";import"./next-frame-once.da993024.js";var xo=L({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const ze=!1,bo=(e={})=>{var n;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},ie=new WeakMap,le=new WeakMap,ae=new WeakMap,Co=(e,n,o)=>{if(!e)return()=>{};const t=bo(n),{root:l}=t.options;let a;const d=ie.get(l);d?a=d:(a=new Map,ie.set(l,a));let s,c;a.has(t.hash)?(c=a.get(t.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(b=>{b.forEach(v=>{if(v.isIntersecting){const w=le.get(v.target),A=ae.get(v.target);w&&w(),A&&(A.value=!0)}})},t.options),s.observe(e),c=[s,new Set([e])],a.set(t.hash,c));let m=!1;const I=()=>{m||(le.delete(e),ae.delete(e),m=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(t.hash),a.size||ie.delete(l))};return le.set(e,I),ae.set(e,o),I},zo=e=>{const{borderRadius:n,avatarColor:o,cardColor:t,fontSize:l,heightTiny:a,heightSmall:d,heightMedium:s,heightLarge:c,heightHuge:m,modalColor:I,popoverColor:b}=e;return{borderRadius:n,fontSize:l,border:`2px solid ${t}`,heightTiny:a,heightSmall:d,heightMedium:s,heightLarge:c,heightHuge:m,color:te(t,o),colorModal:te(I,o),colorPopover:te(b,o)}},_o={name:"Avatar",common:ve,self:zo};var Io=_o;const yo=W("n-avatar-group");var wo=g("avatar",`
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
`,[Me(x("&","--n-merged-color: var(--n-color-modal);")),Oe(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),f("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),g("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),f("text","line-height: 1.25")]);const Ho=Object.assign(Object.assign({},X.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String});var Ao=L({name:"Avatar",props:Ho,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=T(!1);let l=null;const a=T(null),d=T(null),s=()=>{const{value:h}=a;if(h&&(l===null||l!==h.innerHTML)){l=h.innerHTML;const{value:z}=d;if(z){const{offsetWidth:F,offsetHeight:N}=z,{offsetWidth:u,offsetHeight:_}=h,r=.9,y=Math.min(F/u*r,N/_*r,1);h.style.transform=`translateX(-50%) translateY(-50%) scale(${y})`}}},c=O(yo,null),m=C(()=>{const{size:h}=e;if(h)return h;const{size:z}=c||{};return z||"medium"}),I=X("Avatar","-avatar",wo,Io,e,n),b=O(co,null),v=C(()=>{if(c)return!0;const{round:h,circle:z}=e;return h!==void 0||z!==void 0?h||z:b?b.roundRef.value:!1}),w=C(()=>c?!0:e.bordered||!1),A=h=>{if(!B.value)return;t.value=!0;const{onError:z}=e;z&&z(h)};Ee(()=>e.src,()=>t.value=!1);const S=C(()=>{const h=m.value,z=v.value,F=w.value,{color:N}=e,{self:{borderRadius:u,fontSize:_,color:r,border:y,colorModal:k,colorPopover:ee},common:{cubicBezierEaseInOut:oe}}=I.value;let Y;return typeof h=="number"?Y=`${h}px`:Y=I.value.self[Fe("height",h)],{"--n-font-size":_,"--n-border":F?y:"none","--n-border-radius":z?"50%":u,"--n-color":N||r,"--n-color-modal":N||k,"--n-color-popover":N||ee,"--n-bezier":oe,"--n-merged-size":`var(--n-avatar-size-override, ${Y})`}}),H=o?me("avatar",C(()=>{const h=m.value,z=v.value,F=w.value,{color:N}=e;let u="";return h&&(typeof h=="number"?u+=`a${h}`:u+=h[0]),z&&(u+="b"),F&&(u+="c"),N&&(u+=Be(N)),u}),S,e):void 0,$=T(null),B=T(!e.lazy);ye(()=>{if(ze)return;let h;const z=ce(()=>{h==null||h(),h=void 0,e.lazy&&(h=Co($.value,e.intersectionObserverOptions,B))});je(()=>{z(),h==null||h()})});const E=T(!e.lazy);return{textRef:a,selfRef:d,mergedRoundRef:v,mergedClsPrefix:n,fitTextTransform:s,cssVars:o?void 0:S,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender,hasLoadError:t,handleError:A,imageRef:$,shouldStartLoading:B,loaded:E,mergedOnLoad:h=>{const{onLoad:z}=e;z==null||z(h),E.value=!0}}},render(){var e,n;const{$slots:o,src:t,mergedClsPrefix:l,lazy:a,onRender:d,mergedOnLoad:s,shouldStartLoading:c,loaded:m}=this;d==null||d();let I;const b=(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e);return this.hasLoadError?I=p("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):I=Ke(o.default,v=>{if(v)return p(Ve,{onResize:this.fitTextTransform},{default:()=>p("span",{ref:"textRef",class:`${l}-avatar__text`},v)});if(t)return p("img",{loading:a?"lazy":"eager",ref:"imageRef",src:ze||c||m?t:void 0,onLoad:s,"data-image-src":t,onError:this.handleError,style:[{objectFit:this.objectFit},b&&!m?{height:"0",width:"0",visibility:"hidden"}:""]})}),p("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},I,a&&!m&&b)}}),Ro={fontWeightActive:"400"};const So=e=>{const{fontSize:n,textColor3:o,textColor2:t,borderRadius:l,buttonColor2Hover:a,buttonColor2Pressed:d}=e;return Object.assign(Object.assign({},Ro),{fontSize:n,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:t,itemTextColorPressed:t,itemTextColorActive:t,itemBorderRadius:l,itemColorHover:a,itemColorPressed:d,separatorColor:o})},Po={name:"Breadcrumb",common:ve,self:So};var No=Po,ko=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[x("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),x("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),x("&:not(:last-child)",[R("clickable",[f("link",`
 cursor: pointer;
 `,[x("&:hover",`
 background-color: var(--n-item-color-hover);
 `),x("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[x("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),x("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),x("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]);const Ne=W("n-breadcrumb"),To=Object.assign(Object.assign({},X.props),{separator:{type:String,default:"/"}});var Lo=L({name:"Breadcrumb",props:To,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=X("Breadcrumb","-breadcrumb",ko,No,e,n);U(Ne,{separatorRef:de(e,"separator"),mergedClsPrefixRef:n});const l=C(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:m,itemTextColorPressed:I,itemTextColorActive:b,fontSize:v,fontWeightActive:w,itemBorderRadius:A,itemColorHover:S,itemColorPressed:H,itemLineHeight:$}}=t.value;return{"--n-font-size":v,"--n-bezier":d,"--n-item-text-color":c,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":I,"--n-item-text-color-active":b,"--n-separator-color":s,"--n-item-color-hover":S,"--n-item-color-pressed":H,"--n-item-border-radius":A,"--n-font-weight-active":w,"--n-item-line-height":$}}),a=o?me("breadcrumb",void 0,l,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},p("ul",null,this.$slots))}});const $o=Ue?window:null,Mo=(e=$o)=>{const n=()=>{const{hash:l,host:a,hostname:d,href:s,origin:c,pathname:m,port:I,protocol:b,search:v}=(e==null?void 0:e.location)||{};return{hash:l,host:a,hostname:d,href:s,origin:c,pathname:m,port:I,protocol:b,search:v}},o=()=>{t.value=n()},t=T(n());return ye(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),De(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),t},Oo={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var Eo=L({name:"BreadcrumbItem",props:Oo,setup(e,{slots:n}){const o=O(Ne,null);if(!o)return()=>null;const{separatorRef:t,mergedClsPrefixRef:l}=o,a=Mo(),d=C(()=>e.href?"a":"span"),s=C(()=>a.value.href===e.href?"location":null);return()=>{const{value:c}=l;return p("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},p(d.value,{class:`${c}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},n),p("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},Ge(n.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:t.value]})))}}});function Fo(e,n,o,t){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:t}}const Bo=e=>{const{borderRadius:n,textColor3:o,primaryColor:t,textColor2:l,textColor1:a,fontSize:d,dividerColor:s,hoverColor:c,primaryColorHover:m}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:re(t,{alpha:.1}),itemColorActiveHover:re(t,{alpha:.1}),itemColorActiveCollapsed:re(t,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:t,itemTextColorActiveHover:t,itemTextColorChildActive:t,itemTextColorChildActiveHover:t,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:m,itemTextColorActiveHorizontal:t,itemTextColorActiveHoverHorizontal:t,itemTextColorChildActiveHorizontal:t,itemTextColorChildActiveHoverHorizontal:t,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:t,itemIconColorActiveHover:t,itemIconColorChildActive:t,itemIconColorChildActiveHover:t,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:m,itemIconColorActiveHorizontal:t,itemIconColorActiveHoverHorizontal:t,itemIconColorChildActiveHorizontal:t,itemIconColorChildActiveHoverHorizontal:t,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:t,arrowColorActiveHover:t,arrowColorChildActive:t,arrowColorChildActiveHover:t,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},Fo("#BBB",t,"#FFF","#AAA"))},jo=qe({name:"Menu",common:ve,peers:{Tooltip:so,Dropdown:vo},self:Bo});var Ko=jo;const Vo=W("n-layout-sider"),Z=W("n-menu"),fe=W("n-submenu"),pe=W("n-menu-item-group"),Q=8;function ge(e){const n=O(Z),{props:o,mergedCollapsedRef:t}=n,l=O(fe,null),a=O(pe,null),d=C(()=>o.mode==="horizontal"),s=C(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=C(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),m=C(()=>{var v;return!d.value&&e.root&&t.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),I=C(()=>{if(d.value)return;const{collapsedWidth:v,indent:w,rootIndent:A}=o,{root:S,isGroup:H}=e,$=A===void 0?w:A;if(S)return t.value?v/2-c.value/2:$;if(a)return w/2+a.paddingLeftRef.value;if(l)return(H?w/2:w)+l.paddingLeftRef.value}),b=C(()=>{const{collapsedWidth:v,indent:w,rootIndent:A}=o,{value:S}=c,{root:H}=e;return d.value||!H||!t.value?Q:(A===void 0?w:A)+S+Q-(v+S)/2});return{dropdownPlacement:s,activeIconSize:m,maxIconSize:c,paddingLeft:I,iconMarginRight:b,NMenu:n,NSubmenu:l}}const xe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ke=Object.assign(Object.assign({},xe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Do=L({name:"MenuOptionGroup",props:ke,setup(e){U(fe,null);const n=ge(e);U(pe,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:o,props:t}=O(Z);return function(){const{value:l}=o,a=n.paddingLeft.value,{nodeProps:d}=t,s=d==null?void 0:d(e.tmNode.rawNode);return p("div",{class:`${l}-menu-item-group`,role:"group"},p("div",Object.assign({},s,{class:[`${l}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?p(we,null," ",D(e.extra)):null),p("div",null,e.tmNodes.map(c=>be(c,t))))}}});var Te=L({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:n}=O(Z);return{menuProps:n,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:t,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${t}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:o,renderLabel:t,renderExtra:l,expandIcon:a}}=this,d=o?o(n.rawNode):D(this.icon);return p("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},t?t(n.rawNode):D(this.title),this.extra||l?p("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(n.rawNode):D(this.extra)):null),this.showArrow?p(We,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(n.rawNode):p(xo,null)}):null)}});const Le=Object.assign(Object.assign({},xe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Uo=L({name:"Submenu",props:Le,setup(e){const n=ge(e),{NMenu:o,NSubmenu:t}=n,{props:l,mergedCollapsedRef:a,mergedThemeRef:d}=o,s=C(()=>{const{disabled:v}=e;return t!=null&&t.mergedDisabledRef.value||l.disabled?!0:v}),c=T(!1);U(fe,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),U(pe,null);function m(){const{onClick:v}=e;v&&v()}function I(){s.value||(a.value||o.toggleExpand(e.internalKey),m())}function b(v){c.value=v}return{menuProps:l,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:c,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:He(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:b,handleClick:I}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:o,renderLabel:t}}=this,l=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:m,maxIconSize:I,activeIconSize:b,title:v,childActive:w,icon:A,handleClick:S,menuProps:{nodeProps:H},dropdownShow:$,iconMarginRight:B,tmNode:E,mergedClsPrefix:h}=this,z=H==null?void 0:H(E.rawNode);return p("div",Object.assign({},z,{class:[`${h}-menu-item`,z==null?void 0:z.class],role:"menuitem"}),p(Te,{tmNode:E,paddingLeft:s,collapsed:c,disabled:m,iconMarginRight:B,maxIconSize:I,activeIconSize:b,title:v,showArrow:!d,childActive:w,clsPrefix:h,icon:A,hover:$,onClick:S}))},a=()=>p(Xe,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:p("div",{class:`${n}-submenu-children`,role:"menu"},d.map(c=>be(c,this.menuProps)))}});return this.root?p(Pe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:t}),{default:()=>p("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):p("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),$e=Object.assign(Object.assign({},xe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Go=L({name:"MenuOption",props:$e,setup(e){const n=ge(e),{NSubmenu:o,NMenu:t}=n,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:d}=t,s=o?o.mergedDisabledRef:{value:!1},c=C(()=>s.value||e.disabled);function m(b){const{onClick:v}=e;v&&v(b)}function I(b){c.value||(t.doSelect(e.internalKey,e.tmNode.rawNode),m(b))}return{mergedClsPrefix:a,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:t.mergedThemeRef,menuProps:l,dropdownEnabled:He(()=>e.root&&d.value&&l.mode!=="horizontal"&&!c.value),selected:C(()=>t.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:I}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:o,menuProps:{renderLabel:t,nodeProps:l}}=this,a=l==null?void 0:l(o.rawNode);return p("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),p(uo,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>t?t(o.rawNode):D(this.title),trigger:()=>p(Te,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var qo=L({name:"MenuDivider",setup(){const e=O(Z),{mergedClsPrefixRef:n,isHorizontalRef:o}=e;return()=>o.value?null:p("div",{class:`${n.value}-menu-divider`})}});const Wo=he(ke),Xo=he($e),Yo=he(Le);function Zo(e){return e.type==="divider"||e.type==="render"}function Jo(e){return e.type==="divider"}function be(e,n){const{rawNode:o}=e;if(Zo(o))return Jo(o)?p(qo,Object.assign({key:e.key},o.props)):void 0;const{labelField:t}=n,{key:l,level:a,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[t],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:d});return e.children?e.isGroup?p(Do,ne(s,Wo,{tmNode:e,tmNodes:e.children,key:l})):p(Uo,ne(s,Yo,{key:l,rawNodes:o[n.childrenField],tmNodes:e.children,tmNode:e})):p(Go,ne(s,Xo,{key:l,tmNode:e}))}const _e=[x("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ie=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var Qo=x([g("menu",`
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
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[R("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),J("disabled",[J("selected, child-active",[x("&:focus-within",Ie)]),R("selected",[K(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[K(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",Ie)]),g("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[g("menu-item-content",[R("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
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
 `,[x("> *","z-index: 1;"),x("&::before",`
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
 `),R("collapsed",[f("arrow","transform: rotate(0);")]),R("selected",[x("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),J("disabled",[J("selected, child-active",[x("&:focus-within",_e)]),R("selected",[K(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[K(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[K(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,_e)]),f("icon",`
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
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ye({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
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
 `)])]),g("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,n){return[R("hover",e,n),x("&:hover",e,n)]}const et=Object.assign(Object.assign({},X.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var ot=L({name:"Menu",props:et,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=X("Menu","-menu",Qo,Ko,e,n),l=O(Vo,null),a=C(()=>{var u;const{collapsed:_}=e;if(_!==void 0)return _;if(l){const{collapseModeRef:r,collapsedRef:y}=l;if(r.value==="width")return(u=y.value)!==null&&u!==void 0?u:!1}return!1}),d=C(()=>{const{keyField:u,childrenField:_}=e;return mo(e.items||e.options,{getChildren(r){return r[_]},getKey(r){var y;return(y=r[u])!==null&&y!==void 0?y:r.name}})}),s=C(()=>new Set(d.value.treeNodes.map(u=>u.key))),{watchProps:c}=e,m=T(null);c!=null&&c.includes("defaultValue")?ce(()=>{m.value=e.defaultValue}):m.value=e.defaultValue;const I=de(e,"value"),b=Ce(I,m),v=T([]),w=()=>{v.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(b.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ce(w):w();const A=ho(e,["expandedNames","expandedKeys"]),S=Ce(A,v),H=C(()=>d.value.treeNodes),$=C(()=>d.value.getPath(b.value).keyPath);U(Z,{props:e,mergedCollapsedRef:a,mergedThemeRef:t,mergedValueRef:b,mergedExpandedKeysRef:S,activePathRef:$,mergedClsPrefixRef:n,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:B,toggleExpand:h});function B(u,_){const{"onUpdate:value":r,onUpdateValue:y,onSelect:k}=e;y&&j(y,u,_),r&&j(r,u,_),k&&j(k,u,_),m.value=u}function E(u){const{"onUpdate:expandedKeys":_,onUpdateExpandedKeys:r,onExpandedNamesChange:y,onOpenNamesChange:k}=e;_&&j(_,u),r&&j(r,u),y&&j(y,u),k&&j(k,u),v.value=u}function h(u){const _=Array.from(S.value),r=_.findIndex(y=>y===u);if(~r)_.splice(r,1);else{if(e.accordion&&s.value.has(u)){const y=_.findIndex(k=>s.value.has(k));y>-1&&_.splice(y,1)}_.push(u)}E(_)}const z=u=>{const _=d.value.getPath(u!=null?u:b.value,{includeSelf:!1}).keyPath;if(!_.length)return;const r=Array.from(S.value),y=new Set([...r,..._]);e.accordion&&s.value.forEach(k=>{y.has(k)&&!_.includes(k)&&y.delete(k)}),E(Array.from(y))},F=C(()=>{const{inverted:u}=e,{common:{cubicBezierEaseInOut:_},self:r}=t.value,{borderRadius:y,borderColorHorizontal:k,fontSize:ee,itemHeight:oe,dividerColor:Y}=r,i={"--n-divider-color":Y,"--n-bezier":_,"--n-font-size":ee,"--n-border-color-horizontal":k,"--n-border-radius":y,"--n-item-height":oe};return u?(i["--n-group-text-color"]=r.groupTextColorInverted,i["--n-color"]=r.colorInverted,i["--n-item-text-color"]=r.itemTextColorInverted,i["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,i["--n-item-text-color-active"]=r.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=r.itemIconColorInverted,i["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=r.arrowColorInverted,i["--n-arrow-color-hover"]=r.arrowColorHoverInverted,i["--n-arrow-color-active"]=r.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=r.itemColorHoverInverted,i["--n-item-color-active"]=r.itemColorActiveInverted,i["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=r.groupTextColor,i["--n-color"]=r.color,i["--n-item-text-color"]=r.itemTextColor,i["--n-item-text-color-hover"]=r.itemTextColorHover,i["--n-item-text-color-active"]=r.itemTextColorActive,i["--n-item-text-color-child-active"]=r.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,i["--n-item-icon-color"]=r.itemIconColor,i["--n-item-icon-color-hover"]=r.itemIconColorHover,i["--n-item-icon-color-active"]=r.itemIconColorActive,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=r.arrowColor,i["--n-arrow-color-hover"]=r.arrowColorHover,i["--n-arrow-color-active"]=r.arrowColorActive,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,i["--n-arrow-color-child-active"]=r.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,i["--n-item-color-hover"]=r.itemColorHover,i["--n-item-color-active"]=r.itemColorActive,i["--n-item-color-active-hover"]=r.itemColorActiveHover,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),i}),N=o?me("menu",C(()=>e.inverted?"a":"b"),F,e):void 0;return{mergedClsPrefix:n,controlledExpandedKeys:A,uncontrolledExpanededKeys:v,mergedExpandedKeys:S,uncontrolledValue:m,mergedValue:b,activePath:$,tmNodes:H,mergedTheme:t,mergedCollapsed:a,cssVars:o?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,showOption:z}},render(){const{mergedClsPrefix:e,mode:n,themeClass:o,onRender:t}=this;return t==null||t(),p("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${n}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>be(l,this.$props)))}}),tt="/admin/assets/head-img.819689da.svg";const rt={class:"panel-header"},nt={class:"breadcrumb"},it=Ae(" \u7CFB\u7EDF"),lt={class:"head-image"},at=q("span",{class:"admin"},"Admin",-1),ct=L({__name:"PanelHeader",setup(e){const n=Ze(),o=T([{label:"\u524D\u53F0\u9996\u9875",key:"front"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"setting"},{label:"\u767B\u51FA\u8D26\u6237",key:"logout"}]);function t(l){switch(l){case"front":window.open(window.location.protocol+"//"+window.location.host);break;case"setting":n.push({name:"setting"});break;case"logout":no().then(()=>{n.push({name:"login"})})}}return(l,a)=>{const d=Eo,s=Lo,c=Ao,m=Pe,I=fo;return V(),G("div",rt,[P(I,{class:"space",justify:"space-between"},{default:M(()=>[q("div",nt,[P(s,{separator:">"},{default:M(()=>[P(d,{clickable:!1},{default:M(()=>[it]),_:1}),(V(!0),G(we,null,Je(se(ro),b=>(V(),Qe(d,null,{default:M(()=>[Ae(eo(b.name),1)]),_:2},1024))),256))]),_:1})]),P(m,{trigger:"hover",options:o.value,onSelect:t},{default:M(()=>[q("div",lt,[P(c,{size:"medium",src:se(tt),round:""},null,8,["src"]),at])]),_:1},8,["options"])]),_:1})])}}}),dt=L({__name:"MenuBody",setup(e){const n=T(null);return T(!1),(o,t)=>{const l=ot;return V(),G("div",null,[P(l,{value:n.value,"onUpdate:value":t[0]||(t[0]=a=>n.value=a),accordion:!1,"collapsed-icon-size":22,options:se(io),mode:"vertical"},null,8,["value","options"])])}}});const st={},vt={class:"l-header"},ut=q("span",{class:"title"},"GoMovie\u540E\u53F0\u7BA1\u7406",-1);function mt(e,n){const o=Se("router-link");return V(),G("div",vt,[P(o,{to:"/panel"},{default:M(()=>[ut]),_:1})])}var ht=Re(st,[["render",mt]]);const ft={},pt={class:"menu"};function gt(e,n){const o=ht,t=dt;return V(),G("div",pt,[P(o),P(t)])}var xt=Re(ft,[["render",gt]]);const bt={class:"panel"},Ct={class:"panel-body"},St=L({__name:"User",setup(e){return window.$notification=lo(),oo(()=>{ao()}),(n,o)=>{const t=xt,l=po,a=ct,d=Se("router-view"),s=to,c=go;return V(),G("div",null,[P(c,{cols:"10 l:9",responsive:"screen","item-responsive":""},{default:M(()=>[P(l,{span:"1 l:1"},{default:M(()=>[P(t)]),_:1}),P(l,{span:"8"},{default:M(()=>[q("div",bt,[P(a),q("div",Ct,[P(s,{style:{"max-height":"calc(100vh - 60px)"}},{default:M(()=>[P(d)]),_:1})])])]),_:1})]),_:1})])}}});export{St as default};
