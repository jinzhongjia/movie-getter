import{p as k,L as D,M as p,s as h,x as I,O as g,P as q,Q as J,d as b,y as R,z as y,R as ee,A as C,S as U,B as l,T as te,U as ne,V as oe,I as A,W as O,D as re,F as w,X as ie,Y as ae,Z as le,$ as se,l as de,o as x,g as $,w as u,e as c,b as P,j as S,a0 as ce,a1 as ue,f as N,t as he,a2 as me,a3 as pe,c as V,r as H,k as ge,u as fe}from"./index.e5b939c1.js";import{_ as K,G as _e}from"./home.18aeb635.js";import{_ as G,d as ve,b as xe}from"./base.a65eea93.js";let F=!1;function be(){if(typeof window!="undefined"&&!!window.CSS&&!F&&(F=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ye=t=>{const{textColor2:e,cardColor:n,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:d}=t;return{textColor:e,color:n,colorModal:o,colorPopover:r,borderColor:i,borderColorModal:D(o,i),borderColorPopover:D(r,i),borderRadius:a,fontSize:d}},ze={name:"List",common:k,self:ye};var Ce=ze;const $e=t=>{const{opacityDisabled:e,heightTiny:n,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:d,fontSize:s}=t;return{fontSize:s,textColor:d,sizeTiny:n,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:d,opacitySpinning:e}},we={name:"Spin",common:k,self:$e};var Se=we;const ke=t=>{const{textColor1:e,textColor2:n,fontWeightStrong:o,fontSize:r}=t;return{fontSize:r,titleTextColor:e,textColor:n,titleFontWeight:o}},Re={name:"Thing",common:k,self:ke};var Pe=Re,Ee=p([h("list",`
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
 `,[I("bordered",`
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
 `)])]),q(h("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),J(h("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const Le=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),X=te("n-list");var Te=b({name:"List",props:Le,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=R(t),o=y("List","-list",Ee,Ce,t,e);ee(X,{mergedClsPrefixRef:e});const r=C(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:d,textColor:s,color:f,colorModal:m,colorPopover:_,borderColor:z,borderColorModal:E,borderColorPopover:L,borderRadius:v}}=o.value;return{"--n-font-size":d,"--n-bezier":a,"--n-text-color":s,"--n-color":f,"--n-border-radius":v,"--n-border-color":z,"--n-border-color-modal":E,"--n-border-color-popover":L,"--n-color-modal":m,"--n-color-popover":_}}),i=n?U("list",void 0,r,t):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),l("ul",{class:[`${n}-list`,this.bordered&&`${n}-list--bordered`,this.themeClass],style:this.cssVars},e.header?l("div",{class:`${n}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?l("div",{class:`${n}-list__footer`},e.footer()):null)}}),Y=b({name:"ListItem",setup(){const t=ne(X,null);return t||oe("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return l("li",{class:`${e}-list-item`},t.prefix?l("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?l("div",{class:`${e}-list-item__main`},t):null,t.suffix?l("div",{class:`${e}-list-item__suffix`},t.suffix()):null)}});const Be=t=>{const{heightSmall:e,heightMedium:n,heightLarge:o,borderRadius:r}=t;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:e,heightMedium:n,heightLarge:o}},je={name:"Skeleton",common:k,self:Be};var Ve=p([h("skeleton",`
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
 `)]);const Ie=Object.assign(Object.assign({},y.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}});var Oe=b({name:"Skeleton",inheritAttrs:!1,props:Ie,setup(t){be();const{mergedClsPrefixRef:e}=R(t),n=y("Skeleton","-skeleton",Ve,je,t,e);return{mergedClsPrefix:e,style:C(()=>{var o,r;const i=n.value,{common:{cubicBezierEaseInOut:a}}=i,d=i.self,{color:s,colorEnd:f,borderRadius:m}=d;let _;const{circle:z,sharp:E,round:L,width:v,height:T,size:M,text:W,animated:Z}=t;M!==void 0&&(_=d[A("height",M)]);const B=z?(o=v!=null?v:T)!==null&&o!==void 0?o:_:v,j=(r=z&&v!=null?v:T)!==null&&r!==void 0?r:_;return{display:W?"inline-block":"",verticalAlign:W?"-0.125em":"",borderRadius:z?"50%":L?"4096px":E?"":m,width:typeof B=="number"?O(B):B,height:typeof j=="number"?O(j):j,animation:Z?"":"none","--n-bezier":a,"--n-color-start":s,"--n-color-end":f}})}},render(){const{repeat:t,style:e,mergedClsPrefix:n,$attrs:o}=this,r=l("div",re({class:`${n}-skeleton`,style:e},o));return t>1?l(w,null,Array.apply(null,{length:t}).map(i=>[r,`
`])):r}}),Ue=p([p("@keyframes spin-rotate",`
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
 `,[ie()])]),h("spin-body",`
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
 `,[I("rotate",`
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
 `,[I("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const Ne={small:20,medium:18,large:16},Me=Object.assign(Object.assign({},y.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var We=b({name:"Spin",props:Me,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=R(t),o=y("Spin","-spin",Ue,Se,t,e),r=C(()=>{const{size:a}=t,{common:{cubicBezierEaseInOut:d},self:s}=o.value,{opacitySpinning:f,color:m,textColor:_}=s,z=typeof a=="number"?O(a):s[A("size",a)];return{"--n-bezier":d,"--n-opacity-spinning":f,"--n-size":z,"--n-color":m,"--n-text-color":_}}),i=n?U("spin",C(()=>{const{size:a}=t;return typeof a=="number"?String(a):a[0]}),r,t):void 0;return{mergedClsPrefix:e,compitableShow:ae(t,["spinning","show"]),mergedStrokeWidth:C(()=>{const{strokeWidth:a}=t;if(a!==void 0)return a;const{size:d}=t;return Ne[typeof d=="number"?"medium":d]}),cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t,e;const{$slots:n,mergedClsPrefix:o,description:r}=this,i=n.icon&&this.rotate,a=(r||n.description)&&l("div",{class:`${o}-spin-description`},r||((t=n.description)===null||t===void 0?void 0:t.call(n))),d=n.icon?l("div",{class:[`${o}-spin-body`,this.themeClass]},l("div",{class:[`${o}-spin`,i&&`${o}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),a):l("div",{class:[`${o}-spin-body`,this.themeClass]},l(le,{clsPrefix:o,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),a);return(e=this.onRender)===null||e===void 0||e.call(this),n.default?l("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},n),l(se,{name:"fade-in-transition"},{default:()=>this.compitableShow?d:null})):d}}),De=h("thing",`
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
 `)])])]);const He=Object.assign(Object.assign({},y.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var Q=b({name:"Thing",props:He,setup(t,{slots:e}){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=R(t),r=y("Thing","-thing",De,Pe,t,n),i=C(()=>{const{self:{titleTextColor:d,textColor:s,titleFontWeight:f,fontSize:m},common:{cubicBezierEaseInOut:_}}=r.value;return{"--n-bezier":_,"--n-font-size":m,"--n-text-color":s,"--n-title-font-weight":f,"--n-title-text-color":d}}),a=o?U("thing",void 0,i,t):void 0;return()=>{var d;const{value:s}=n;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),l("div",{class:[`${s}-thing`,a==null?void 0:a.themeClass],style:o?void 0:i.value},e.avatar&&t.contentIndented?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,l("div",{class:`${s}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?l("div",{class:`${s}-thing-avatar-header-wrapper`},e.avatar?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header-wrapper`},l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null):null):l(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?l("div",{class:`${s}-thing-main__content`},e.default?e.default():t.content):null,e.footer?l("div",{class:`${s}-thing-main__footer`},e.footer()):null,e.action?l("div",{class:`${s}-thing-main__action`},e.action()):null))}}});const Fe={},Ae=P("div",{style:{height:"5px",width:"100px"}},null,-1),Ke=P("div",{style:{height:"7px",width:"100px"}},null,-1),Ge=P("div",{style:{height:"7px",width:"100px"}},null,-1);function Xe(t,e){const n=Oe,o=K,r=G,i=Q,a=Y;return x(),$(a,null,{prefix:u(()=>[c(n,{height:"148px",width:"100px"})]),default:u(()=>[c(i,{class:"6666"},{default:u(()=>[c(o,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"24px",width:"150px",round:""})]),_:1}),c(r,null,{default:u(()=>[c(o,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"18px",width:"180px",round:""})]),_:1})]),_:1}),c(r,null,{default:u(()=>[Ae]),_:1}),c(n,{height:"20px",width:"100%",style:{"max-width":"100%"},round:""}),c(r,null,{default:u(()=>[Ke]),_:1}),c(n,{height:"20px",width:"100%",round:""}),c(r,null,{default:u(()=>[Ge]),_:1}),c(n,{height:"20px",width:"100%",round:""})]),_:1})]),_:1})}var Ye=de(Fe,[["render",Xe]]);const Qe=b({name:"imgLazy",props:{imgUrl:null},setup(t){const e=t,n=S(!1),o=S();return console.log(e.imgUrl),fetch(e.imgUrl,{method:"GET",mode:"cors"}).then(r=>{if(r.ok)return r.blob();throw new Error("Network response was not ok."+r.statusText)}).then(r=>{var i=URL.createObjectURL(r);o.value=i,n.value=!0}).catch(r=>{console.log("There has been a problem with your fetch operation: ",r)}),(r,i)=>{const a=ce,d=We,s=ue;return n.value?(x(),$(a,{key:0,class:"user-drag",width:"100",src:o.value,"preview-disabled":""},null,8,["src"])):(x(),$(s,{key:1,bordered:!1,style:{width:"100px"}},{default:u(()=>[c(d,{size:"large"})]),_:1}))}}}),Ze=N("\u4E3B\u6F14\uFF1A555"),qe=b({name:"SearchResult",props:{imgUrl:null,name:null,desc:null,director:null,leadActor:null,category:null,id:null},setup(t){const e=t;return(n,o)=>{const r=Qe,i=K,a=G,d=Q,s=Y;return x(),$(s,null,{prefix:u(()=>[c(r,{imgUrl:e.imgUrl},null,8,["imgUrl"])]),default:u(()=>[c(d,{title:e.name},{default:u(()=>[P("div",null,[c(i,{"line-clamp":1,tooltip:!1},{default:u(()=>[Ze]),_:1})]),c(a,null,{default:u(()=>[c(i,{"line-clamp":3,tooltip:!1},{default:u(()=>[N(he(e.desc),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})}}}),Je=N(" \u5F71\u7247\u641C\u7D22\u7ED3\u679C "),ot=b({name:"Search",setup(t){const e=me(),n=S(!1),o=S({movies:[]});return pe(()=>{_e(xe+"search",{keyword:e.params.keyword,pg:1,num:20}).then(r=>{o.value=r,n.value=!0})}),(r,i)=>{const a=qe,d=ge("router-link"),s=Ye,f=Te;return x(),V("div",null,[c(f,{bordered:""},{header:u(()=>[Je]),default:u(()=>[n.value?(x(!0),V(w,{key:0},H(o.value.movies,m=>(x(),$(d,{key:m.id,to:"/play/"+m.id},{default:u(()=>[c(a,{imgUrl:m.pic,name:m.name,desc:fe(ve)(m.description),director:[],leadActor:[],category:[],id:m.id},null,8,["imgUrl","name","desc","id"])]),_:2},1032,["to"]))),128)):(x(),V(w,{key:1},H(4,m=>c(s)),64))]),_:1})])}}});export{ot as default};
