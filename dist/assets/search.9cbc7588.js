import{aw as L,aS as R,ax as g,ay as _,aB as E,aA as m,bn as Z,bo as G,d as $,aD as N,aU as M,aE as B,U as J,Z as Q,$ as T,aI as O,B as n,L as X,O as Y,bp as ee,F as V,u as oe,r as b,l as D,o as x,e as H,b as p,w as u,n as te,P as re,p as ne,bq as ie,br as ae,i as C,q as j,k as A,c as k,t as z,m as S,s as le,_ as se,f as ce,A as de,h as ue,a as _e,bs as me}from"./index.d1408f6c.js";import{_ as ve}from"./Spin.72eead80.js";import{_ as pe,a as he}from"./Space.0323a9cf.js";import{_ as ge}from"./Card.f1b9dfce.js";import{_ as fe}from"./Pagination.800c6ec4.js";import"./Close.c24e1827.js";const be=o=>{const{textColor2:e,cardColor:r,modalColor:i,popoverColor:s,dividerColor:a,borderRadius:d,fontSize:c,hoverColor:l}=o;return{textColor:e,color:r,colorHover:l,colorModal:i,colorHoverModal:R(i,l),colorPopover:s,colorHoverPopover:R(s,l),borderColor:a,borderColorModal:R(i,a),borderColorPopover:R(s,a),borderRadius:d,fontSize:c}},xe={name:"List",common:L,self:be},Ce=xe,$e=o=>{const{textColor1:e,textColor2:r,fontWeightStrong:i,fontSize:s}=o;return{fontSize:s,titleTextColor:e,textColor:r,titleFontWeight:i}},ye={name:"Thing",common:L,self:$e},we=ye,Ee=g([_("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[E("show-divider",[_("list-item",[g("&:not(:last-child)",[m("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),E("clickable",[_("list-item",`
 cursor: pointer;
 `)]),E("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),E("hoverable",[_("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[m("divider",`
 background-color: transparent;
 `)])])]),E("bordered, hoverable",[_("list-item",`
 padding: 12px 20px;
 `),m("header, footer",`
 padding: 12px 20px;
 `)]),m("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),_("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("prefix",`
 margin-right: 20px;
 flex: 0;
 `),m("suffix",`
 margin-left: 20px;
 flex: 0;
 `),m("main",`
 flex: 1;
 `),m("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Z(_("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),G(_("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ze=Object.assign(Object.assign({},B.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),U=X("n-list"),Re=$({name:"List",props:ze,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r,mergedRtlRef:i}=N(o),s=M("List",i,e),a=B("List","-list",Ee,Ce,o,e);J(U,{showDividerRef:Q(o,"showDivider"),mergedClsPrefixRef:e});const d=T(()=>{const{common:{cubicBezierEaseInOut:l},self:{fontSize:v,textColor:t,color:f,colorModal:y,colorPopover:w,borderColor:I,borderColorModal:P,borderColorPopover:F,borderRadius:h,colorHover:W,colorHoverModal:q,colorHoverPopover:K}}=a.value;return{"--n-font-size":v,"--n-bezier":l,"--n-text-color":t,"--n-color":f,"--n-border-radius":h,"--n-border-color":I,"--n-border-color-modal":P,"--n-border-color-popover":F,"--n-color-modal":y,"--n-color-popover":w,"--n-color-hover":W,"--n-color-hover-modal":q,"--n-color-hover-popover":K}}),c=r?O("list",void 0,d,o):void 0;return{mergedClsPrefix:e,rtlEnabled:s,cssVars:r?void 0:d,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;const{$slots:e,mergedClsPrefix:r,onRender:i}=this;return i==null||i(),n("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},e.header?n("div",{class:`${r}-list__header`},e.header()):null,(o=e.default)===null||o===void 0?void 0:o.call(e),e.footer?n("div",{class:`${r}-list__footer`},e.footer()):null)}}),ke=$({name:"ListItem",setup(){const o=Y(U,null);return o||ee("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:e}=this;return n("li",{class:`${e}-list-item`},o.prefix?n("div",{class:`${e}-list-item__prefix`},o.prefix()):null,o.default?n("div",{class:`${e}-list-item__main`},o):null,o.suffix?n("div",{class:`${e}-list-item__suffix`},o.suffix()):null,this.showDivider&&n("div",{class:`${e}-list-item__divider`}))}}),Se=_("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[_("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),_("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[_("thing-header-wrapper",`
 flex: 1;
 `)]),_("thing-main",`
 flex-grow: 1;
 `,[_("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[m("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),m("description",[g("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),m("content",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("footer",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("action",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),Be=Object.assign(Object.assign({},B.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),Ie=$({name:"Thing",props:Be,setup(o,{slots:e}){const{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:s}=N(o),a=B("Thing","-thing",Se,we,o,r),d=M("Thing",s,r),c=T(()=>{const{self:{titleTextColor:v,textColor:t,titleFontWeight:f,fontSize:y},common:{cubicBezierEaseInOut:w}}=a.value;return{"--n-bezier":w,"--n-font-size":y,"--n-text-color":t,"--n-title-font-weight":f,"--n-title-text-color":v}}),l=i?O("thing",void 0,c,o):void 0;return()=>{var v;const{value:t}=r,f=d?d.value:!1;return(v=l==null?void 0:l.onRender)===null||v===void 0||v.call(l),n("div",{class:[`${t}-thing`,l==null?void 0:l.themeClass,f&&`${t}-thing--rtl`],style:i?void 0:c.value},e.avatar&&o.contentIndented?n("div",{class:`${t}-thing-avatar`},e.avatar()):null,n("div",{class:`${t}-thing-main`},!o.contentIndented&&(e.header||o.title||e["header-extra"]||o.titleExtra||e.avatar)?n("div",{class:`${t}-thing-avatar-header-wrapper`},e.avatar?n("div",{class:`${t}-thing-avatar`},e.avatar()):null,e.header||o.title||e["header-extra"]||o.titleExtra?n("div",{class:`${t}-thing-header-wrapper`},n("div",{class:`${t}-thing-header`},e.header||o.title?n("div",{class:`${t}-thing-header__title`},e.header?e.header():o.title):null,e["header-extra"]||o.titleExtra?n("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():o.titleExtra):null),e.description||o.description?n("div",{class:`${t}-thing-main__description`,style:o.descriptionStyle},e.description?e.description():o.description):null):null):n(V,null,e.header||o.title||e["header-extra"]||o.titleExtra?n("div",{class:`${t}-thing-header`},e.header||o.title?n("div",{class:`${t}-thing-header__title`},e.header?e.header():o.title):null,e["header-extra"]||o.titleExtra?n("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():o.titleExtra):null):null,e.description||o.description?n("div",{class:`${t}-thing-main__description`,style:o.descriptionStyle},e.description?e.description():o.description):null),e.default||o.content?n("div",{class:`${t}-thing-main__content`,style:o.contentStyle},e.default?e.default():o.content):null,e.footer?n("div",{class:`${t}-thing-main__footer`},e.footer()):null,e.action?n("div",{class:`${t}-thing-main__action`},e.action()):null))}}}),Pe=o=>(ie("data-v-48295d59"),o=o(),ae(),o),Fe=Pe(()=>C("div",{class:"img"},null,-1)),De=$({__name:"searchMv",props:{url:null,id:null},setup(o){const e=o;oe(a=>({"0cc517c5":"url("+r.value+")"}));const r=b("");function i(){s.value=!0,te(re+ne.stringify({url:e.url}),a=>{s.value=!1,r.value=a})}D(i);const s=b(!0);return(a,d)=>{const c=ve;return x(),H("div",null,[p(c,{show:s.value},{default:u(()=>[Fe]),_:1},8,["show"])])}}});const je=j(De,[["__scopeId","data-v-48295d59"]]),Le={class:"search-director"},Ne={class:"search-actor"},Me={class:"search-desc"},Te=$({__name:"searchItem",props:{pic:null,id:null,name:null,actor:null,director:null,desc:null},setup(o){const e=o,r=A();function i(s){r.push({name:"video-num",params:{id:s,num:1}})}return(s,a)=>{const d=je,c=pe,l=Ie,v=ke;return x(),k(v,null,{prefix:u(()=>[p(d,{url:e.pic,id:e.id,onClick:a[0]||(a[0]=t=>i(e.id))},null,8,["url","id"])]),default:u(()=>[p(l,null,{header:u(()=>[C("div",{class:"search-title",onClick:a[1]||(a[1]=t=>i(e.id))},z(e.name),1)]),description:u(()=>[C("div",Le,[p(c,{"line-clamp":2,tooltip:!1},{default:u(()=>[S(" \u5BFC\u6F14\uFF1A"+z(e.director==""?"\u6682\u65E0\u6D88\u606F":e.director),1)]),_:1})]),C("div",Ne,[p(c,{"line-clamp":3,tooltip:!1},{default:u(()=>[S(" \u4E3B\u6F14\uFF1A"+z(e.actor==""?"\u6682\u65E0\u4FE1\u606F":e.actor),1)]),_:1})])]),default:u(()=>[C("div",Me,[p(c,{"line-clamp":3,tooltip:!1},{default:u(()=>[S(" \u7B80\u4ECB\uFF1A"+z(e.desc==""?"\u6682\u65E0\u7B80\u4ECB":e.desc),1)]),_:1})])]),_:1})]),_:1})}}});const Oe=j(Te,[["__scopeId","data-v-30737bf7"]]),Ve={class:"pagination"},He=$({__name:"search",setup(o){const e=le(),r=A(),i=b(0),s=b([]),a=b(""),d=b(e.params.pageNum?isNaN(Number(e.params.pageNum))?1:Number(e.params.pageNum):1);function c(){a.value=e.params.keyword,_e(me,{keyword:a.value,pg:d.value,num:12},l=>{s.value=l.movies,i.value=l.pgCount,d.value>l.pgCount&&(d.value=l.pgCount)})}return D(c),D(()=>{r.push({name:"search-page",params:{keyword:a.value,pageNum:d.value}})}),(l,v)=>{const t=ue,f=Oe,y=Re,w=ge,I=fe,P=he,F=se;return x(),k(F,{cols:"10","item-responsive":"",responsive:"screen"},{default:u(()=>[p(t,{span:"0 m:2 l:2"}),p(t,{span:"10 m:6 l:6"},{default:u(()=>[p(w,{hoverable:""},{header:u(()=>[S("\u300A"+z(a.value)+"\u300B\u641C\u7D22\u7ED3\u679C",1)]),default:u(()=>[p(y,null,{default:u(()=>[(x(!0),H(V,null,ce(s.value,h=>(x(),k(f,{name:h.name,pic:h.pic,id:h.id,desc:h.description,actor:h.actor,director:h.director},null,8,["name","pic","id","desc","actor","director"]))),256))]),_:1})]),_:1}),C("div",Ve,[i.value>1?(x(),k(P,{key:0,justify:"center"},{default:u(()=>[p(I,{page:d.value,"onUpdate:page":v[0]||(v[0]=h=>d.value=h),"page-count":i.value,"page-slot":7},null,8,["page","page-count"])]),_:1})):de("",!0)])]),_:1}),p(t,{span:"0 m:2 l:2"})]),_:1})}}});const Ge=j(He,[["__scopeId","data-v-51b6570d"]]);export{Ge as default};
