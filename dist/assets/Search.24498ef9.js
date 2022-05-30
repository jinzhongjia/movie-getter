import{p as P,L as D,M as p,s as h,x as U,O as g,P as J,Q as ee,d as b,y as B,z as y,R as te,A as C,S as N,B as l,T as ne,U as re,V as oe,I as K,W as F,D as ie,F as k,X as ae,Y as le,Z as se,$ as de,l as ce,o as x,g as w,w as u,e as c,b as $,j as R,a0 as ue,a1 as he,f as S,t as I,a2 as me,a3 as pe,c as O,r as H,k as ge,u as fe}from"./index.d9482c51.js";import{_ as G,G as _e}from"./home.d938f17d.js";import{_ as X,d as ve,b as xe}from"./base.72dcf844.js";let A=!1;function be(){if(typeof window!="undefined"&&!!window.CSS&&!A&&(A=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ye=t=>{const{textColor2:e,cardColor:n,modalColor:r,popoverColor:o,dividerColor:i,borderRadius:a,fontSize:d}=t;return{textColor:e,color:n,colorModal:r,colorPopover:o,borderColor:i,borderColorModal:D(r,i),borderColorPopover:D(o,i),borderRadius:a,fontSize:d}},ze={name:"List",common:P,self:ye};var Ce=ze;const we=t=>{const{opacityDisabled:e,heightTiny:n,heightSmall:r,heightMedium:o,heightLarge:i,heightHuge:a,primaryColor:d,fontSize:s}=t;return{fontSize:s,textColor:d,sizeTiny:n,sizeSmall:r,sizeMedium:o,sizeLarge:i,sizeHuge:a,color:d,opacitySpinning:e}},$e={name:"Spin",common:P,self:we};var Se=$e;const ke=t=>{const{textColor1:e,textColor2:n,fontWeightStrong:r,fontSize:o}=t;return{fontSize:o,titleTextColor:e,textColor:n,titleFontWeight:r}},Re={name:"Thing",common:P,self:ke};var Pe=Re,Be=p([h("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[U("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[h("list-item",`
 padding: 12px 20px;
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),g("header, footer",`
 padding: 12px 20px;
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),g("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),h("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[g("prefix",`
 margin-right: 20px;
 flex: 0;
 `),g("suffix",`
 margin-left: 20px;
 flex: 0;
 `),g("main",`
 flex: 1;
 `),p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),J(h("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),ee(h("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const Ee=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),Y=ne("n-list");var Le=b({name:"List",props:Ee,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=B(t),r=y("List","-list",Be,Ce,t,e);te(Y,{mergedClsPrefixRef:e});const o=C(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:d,textColor:s,color:f,colorModal:m,colorPopover:_,borderColor:z,borderColorModal:E,borderColorPopover:L,borderRadius:v}}=r.value;return{"--n-font-size":d,"--n-bezier":a,"--n-text-color":s,"--n-color":f,"--n-border-radius":v,"--n-border-color":z,"--n-border-color-modal":E,"--n-border-color-popover":L,"--n-color-modal":m,"--n-color-popover":_}}),i=n?N("list",void 0,o,t):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:n,onRender:r}=this;return r==null||r(),l("ul",{class:[`${n}-list`,this.bordered&&`${n}-list--bordered`,this.themeClass],style:this.cssVars},e.header?l("div",{class:`${n}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?l("div",{class:`${n}-list__footer`},e.footer()):null)}}),Q=b({name:"ListItem",setup(){const t=re(Y,null);return t||oe("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return l("li",{class:`${e}-list-item`},t.prefix?l("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?l("div",{class:`${e}-list-item__main`},t):null,t.suffix?l("div",{class:`${e}-list-item__suffix`},t.suffix()):null)}});const Te=t=>{const{heightSmall:e,heightMedium:n,heightLarge:r,borderRadius:o}=t;return{color:"#eee",colorEnd:"#ddd",borderRadius:o,heightSmall:e,heightMedium:n,heightLarge:r}},je={name:"Skeleton",common:P,self:Te};var Ve=p([h("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),p("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]);const Ie=Object.assign(Object.assign({},y.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}});var Oe=b({name:"Skeleton",inheritAttrs:!1,props:Ie,setup(t){be();const{mergedClsPrefixRef:e}=B(t),n=y("Skeleton","-skeleton",Ve,je,t,e);return{mergedClsPrefix:e,style:C(()=>{var r,o;const i=n.value,{common:{cubicBezierEaseInOut:a}}=i,d=i.self,{color:s,colorEnd:f,borderRadius:m}=d;let _;const{circle:z,sharp:E,round:L,width:v,height:T,size:M,text:W,animated:q}=t;M!==void 0&&(_=d[K("height",M)]);const j=z?(r=v!=null?v:T)!==null&&r!==void 0?r:_:v,V=(o=z&&v!=null?v:T)!==null&&o!==void 0?o:_;return{display:W?"inline-block":"",verticalAlign:W?"-0.125em":"",borderRadius:z?"50%":L?"4096px":E?"":m,width:typeof j=="number"?F(j):j,height:typeof V=="number"?F(V):V,animation:q?"":"none","--n-bezier":a,"--n-color-start":s,"--n-color-end":f}})}},render(){const{repeat:t,style:e,mergedClsPrefix:n,$attrs:r}=this,o=l("div",ie({class:`${n}-skeleton`,style:e},r));return t>1?l(k,null,Array.apply(null,{length:t}).map(i=>[o,`
`])):o}}),Ue=p([p("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),h("spin-container",{position:"relative"},[h("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ae()])]),h("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),h("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[U("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),h("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),h("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[U("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const Fe={small:20,medium:18,large:16},Ne=Object.assign(Object.assign({},y.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var Me=b({name:"Spin",props:Ne,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=B(t),r=y("Spin","-spin",Ue,Se,t,e),o=C(()=>{const{size:a}=t,{common:{cubicBezierEaseInOut:d},self:s}=r.value,{opacitySpinning:f,color:m,textColor:_}=s,z=typeof a=="number"?F(a):s[K("size",a)];return{"--n-bezier":d,"--n-opacity-spinning":f,"--n-size":z,"--n-color":m,"--n-text-color":_}}),i=n?N("spin",C(()=>{const{size:a}=t;return typeof a=="number"?String(a):a[0]}),o,t):void 0;return{mergedClsPrefix:e,compitableShow:le(t,["spinning","show"]),mergedStrokeWidth:C(()=>{const{strokeWidth:a}=t;if(a!==void 0)return a;const{size:d}=t;return Fe[typeof d=="number"?"medium":d]}),cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t,e;const{$slots:n,mergedClsPrefix:r,description:o}=this,i=n.icon&&this.rotate,a=(o||n.description)&&l("div",{class:`${r}-spin-description`},o||((t=n.description)===null||t===void 0?void 0:t.call(n))),d=n.icon?l("div",{class:[`${r}-spin-body`,this.themeClass]},l("div",{class:[`${r}-spin`,i&&`${r}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),a):l("div",{class:[`${r}-spin-body`,this.themeClass]},l(se,{clsPrefix:r,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),a);return(e=this.onRender)===null||e===void 0||e.call(this),n.default?l("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},n),l(de,{name:"fade-in-transition"},{default:()=>this.compitableShow?d:null})):d}}),We=h("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[h("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),h("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[h("thing-header-wrapper",`
 flex: 1;
 `)]),h("thing-main",`
 flex-grow: 1;
 `,[h("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[g("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),g("description",[p("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),g("content",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("footer",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("action",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const De=Object.assign(Object.assign({},y.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var Z=b({name:"Thing",props:De,setup(t,{slots:e}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=B(t),o=y("Thing","-thing",We,Pe,t,n),i=C(()=>{const{self:{titleTextColor:d,textColor:s,titleFontWeight:f,fontSize:m},common:{cubicBezierEaseInOut:_}}=o.value;return{"--n-bezier":_,"--n-font-size":m,"--n-text-color":s,"--n-title-font-weight":f,"--n-title-text-color":d}}),a=r?N("thing",void 0,i,t):void 0;return()=>{var d;const{value:s}=n;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),l("div",{class:[`${s}-thing`,a==null?void 0:a.themeClass],style:r?void 0:i.value},e.avatar&&t.contentIndented?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,l("div",{class:`${s}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?l("div",{class:`${s}-thing-avatar-header-wrapper`},e.avatar?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header-wrapper`},l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null):null):l(k,null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?l("div",{class:`${s}-thing-main__content`},e.default?e.default():t.content):null,e.footer?l("div",{class:`${s}-thing-main__footer`},e.footer()):null,e.action?l("div",{class:`${s}-thing-main__action`},e.action()):null))}}});const He={},Ae=$("div",{style:{height:"5px",width:"100px"}},null,-1),Ke=$("div",{style:{height:"7px",width:"100px"}},null,-1),Ge=$("div",{style:{height:"7px",width:"100px"}},null,-1);function Xe(t,e){const n=Oe,r=G,o=X,i=Z,a=Q;return x(),w(a,null,{prefix:u(()=>[c(n,{height:"148px",width:"100px"})]),default:u(()=>[c(i,{class:"6666"},{default:u(()=>[c(r,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"24px",width:"150px",round:""})]),_:1}),c(o,null,{default:u(()=>[c(r,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"18px",width:"180px",round:""})]),_:1})]),_:1}),c(o,null,{default:u(()=>[Ae]),_:1}),c(n,{height:"20px",width:"100%",style:{"max-width":"100%"},round:""}),c(o,null,{default:u(()=>[Ke]),_:1}),c(n,{height:"20px",width:"100%",round:""}),c(o,null,{default:u(()=>[Ge]),_:1}),c(n,{height:"20px",width:"100%",round:""})]),_:1})]),_:1})}var Ye=ce(He,[["render",Xe]]);const Qe=b({name:"imgLazy",props:{imgUrl:null},setup(t){const e=t,n=R(!1),r=R();return console.log(e.imgUrl),fetch(e.imgUrl,{method:"GET",mode:"cors"}).then(o=>{if(o.ok)return o.blob();throw new Error("Network response was not ok."+o.statusText)}).then(o=>{var i=URL.createObjectURL(o);r.value=i,n.value=!0}).catch(o=>{console.log("There has been a problem with your fetch operation: ",o)}),(o,i)=>{const a=ue,d=Me,s=he;return n.value?(x(),w(a,{key:0,class:"user-drag",width:"100",src:r.value,"preview-disabled":""},null,8,["src"])):(x(),w(s,{key:1,bordered:!1,style:{width:"100px"}},{default:u(()=>[c(d,{size:"large"})]),_:1}))}}}),Ze=b({name:"SearchResult",props:{imgUrl:null,name:null,desc:null,director:null,actor:null,category:null,id:null},setup(t){const e=t;return(n,r)=>{const o=Qe,i=G,a=X,d=Z,s=Q;return x(),w(s,null,{prefix:u(()=>[c(o,{imgUrl:e.imgUrl},null,8,["imgUrl"])]),default:u(()=>[c(d,{title:e.name},{default:u(()=>[$("div",null,[c(i,{"line-clamp":1,tooltip:!1},{default:u(()=>[S("\u5BFC\u6F14\uFF1A"+I(e.director),1)]),_:1})]),$("div",null,[c(i,{"line-clamp":1,tooltip:!1},{default:u(()=>[S("\u4E3B\u6F14\uFF1A"+I(e.actor),1)]),_:1})]),c(a,null,{default:u(()=>[c(i,{"line-clamp":3,tooltip:!1},{default:u(()=>[S(I(e.desc),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})}}}),qe=S(" \u5F71\u7247\u641C\u7D22\u7ED3\u679C "),nt=b({name:"Search",setup(t){const e=me(),n=R(!1),r=R({movies:[]});return pe(()=>{_e(xe+"search",{keyword:e.params.keyword,pg:1,num:20}).then(o=>{r.value=o,n.value=!0})}),(o,i)=>{const a=Ze,d=ge("router-link"),s=Ye,f=Le;return x(),O("div",null,[c(f,{bordered:""},{header:u(()=>[qe]),default:u(()=>[n.value?(x(!0),O(k,{key:0},H(r.value.movies,m=>(x(),w(d,{key:m.id,to:"/play/"+m.id},{default:u(()=>[c(a,{imgUrl:m.pic,name:m.name,desc:fe(ve)(m.description),director:m.director,actor:m.actor,category:"",id:m.id},null,8,["imgUrl","name","desc","director","actor","id"])]),_:2},1032,["to"]))),128)):(x(),O(k,{key:1},H(4,m=>c(s)),64))]),_:1})])}}});export{nt as default};
