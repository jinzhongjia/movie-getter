import{M as De,aN as rt,g as M,e as V,h as o,aO as tt,a as b,d as C,ay as u,aP as at,aQ as ot,t as $e,aR as nt,p as Z,N as ie,aS as it,c as lt,aT as me,K as st,aU as dt,b as F,ax as X,u as ut,i as _e,r as w,aV as ct,Q as Se,o as ht,P as ft,aA as Me,R as vt,aW as pt,k as mt,aF as oe,aX as gt,I as bt,V as yt,Z as ze,q as wt,aJ as x,$ as Fe,w as Ae,aY as ge,aZ as xt}from"./index.3d72f2c5.js";import{u as Ct}from"./use-merged-state.0229019f.js";const Pt={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:r=>`Please load all ${r}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};var St=Pt;function be(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=i.width?String(i.width):r.defaultWidth,d=r.formats[t]||r.formats[r.defaultWidth];return d}}function Y(r){return function(i,t){var d=t||{},p=d.context?String(d.context):"standalone",h;if(p==="formatting"&&r.formattingValues){var n=r.defaultFormattingWidth||r.defaultWidth,l=d.width?String(d.width):n;h=r.formattingValues[l]||r.formattingValues[n]}else{var c=r.defaultWidth,f=d.width?String(d.width):r.defaultWidth;h=r.values[f]||r.values[c]}var v=r.argumentCallback?r.argumentCallback(i):i;return h[v]}}function Mt(r){return function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=i.match(r.matchPattern);if(!d)return null;var p=d[0],h=i.match(r.parsePattern);if(!h)return null;var n=r.valueCallback?r.valueCallback(h[0]):h[0];n=t.valueCallback?t.valueCallback(n):n;var l=i.slice(p.length);return{value:n,rest:l}}}function J(r){return function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=t.width,p=d&&r.matchPatterns[d]||r.matchPatterns[r.defaultMatchWidth],h=i.match(p);if(!h)return null;var n=h[0],l=d&&r.parsePatterns[d]||r.parsePatterns[r.defaultParseWidth],c=Array.isArray(l)?Ft(l,function(P){return P.test(n)}):zt(l,function(P){return P.test(n)}),f;f=r.valueCallback?r.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;var v=i.slice(n.length);return{value:f,rest:v}}}function zt(r,i){for(var t in r)if(r.hasOwnProperty(t)&&i(r[t]))return t}function Ft(r,i){for(var t=0;t<r.length;t++)if(i(r[t]))return t}var At={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Tt=function(r,i,t){var d,p=At[r];return typeof p=="string"?d=p:i===1?d=p.one:d=p.other.replace("{{count}}",i.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+d:d+" ago":d},Dt=Tt,$t={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_t={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Rt={date:be({formats:$t,defaultWidth:"full"}),time:be({formats:_t,defaultWidth:"full"}),dateTime:be({formats:kt,defaultWidth:"full"})},Wt=Rt,Et={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Bt=function(r,i,t,d){return Et[r]},Lt=Bt,Vt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},It={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ot={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ut=function(r,i){var t=Number(r),d=t%100;if(d>20||d<10)switch(d%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},qt={ordinalNumber:Ut,era:Y({values:Vt,defaultWidth:"wide"}),quarter:Y({values:It,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:Y({values:Nt,defaultWidth:"wide"}),day:Y({values:Ot,defaultWidth:"wide"}),dayPeriod:Y({values:Ht,defaultWidth:"wide",formattingValues:jt,defaultFormattingWidth:"wide"})},Kt=qt,Xt=/^(\d+)(th|st|nd|rd)?/i,Yt=/\d+/i,Jt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Zt={any:[/^b/i,/^(a|c)/i]},Qt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Gt={any:[/1/i,/2/i,/3/i,/4/i]},ea={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ra={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ta={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aa={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},na={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ia={ordinalNumber:Mt({matchPattern:Xt,parsePattern:Yt,valueCallback:function(r){return parseInt(r,10)}}),era:J({matchPatterns:Jt,defaultMatchWidth:"wide",parsePatterns:Zt,defaultParseWidth:"any"}),quarter:J({matchPatterns:Qt,defaultMatchWidth:"wide",parsePatterns:Gt,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:J({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:ra,defaultParseWidth:"any"}),day:J({matchPatterns:ta,defaultMatchWidth:"wide",parsePatterns:aa,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:oa,defaultMatchWidth:"any",parsePatterns:na,defaultParseWidth:"any"})},la=ia,sa={code:"en-US",formatDistance:Dt,formatLong:Wt,formatRelative:Lt,localize:Kt,match:la,options:{weekStartsOn:0,firstWeekContainsDate:1}},da=sa;const ua={name:"en-US",locale:da};var ca=ua;function ha(r){const{mergedLocaleRef:i,mergedDateLocaleRef:t}=De(rt,null)||{},d=M(()=>{var h,n;return(n=(h=i==null?void 0:i.value)===null||h===void 0?void 0:h[r])!==null&&n!==void 0?n:St[r]});return{dateLocaleRef:M(()=>{var h;return(h=t==null?void 0:t.value)!==null&&h!==void 0?h:ca}),localeRef:d}}var fa=V({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),va=V({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),pa=V({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ma=tt("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),ga=b("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[C(">",[u("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[C("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),C("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),u("placeholder",`
 display: flex;
 `),u("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[at({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),ye=V({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(r){return ot("-base-clear",ga,$e(r,"clsPrefix")),{handleMouseDown(i){i.preventDefault()}}},render(){const{clsPrefix:r}=this;return o("div",{class:`${r}-base-clear`},o(nt,null,{default:()=>{var i,t;return this.show?o("div",{key:"dismiss",class:`${r}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Z(this.$slots.icon,()=>[o(ie,{clsPrefix:r},{default:()=>o(ma,null)})])):o("div",{key:"icon",class:`${r}-base-clear__placeholder`},(t=(i=this.$slots).placeholder)===null||t===void 0?void 0:t.call(i))}}))}}),ba=V({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(r,{slots:i}){return()=>{const{clsPrefix:t}=r;return o(it,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:r.loading},{default:()=>r.showArrow?o(ye,{clsPrefix:t,show:r.showClear,onClear:r.onClear},{placeholder:()=>o(ie,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Z(i.default,()=>[o(pa,null)])})}):null})}}}),ya={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const wa=r=>{const{textColor2:i,textColor3:t,textColorDisabled:d,primaryColor:p,primaryColorHover:h,inputColor:n,inputColorDisabled:l,borderColor:c,warningColor:f,warningColorHover:v,errorColor:P,errorColorHover:z,borderRadius:le,lineHeight:$,fontSizeTiny:se,fontSizeSmall:S,fontSizeMedium:_,fontSizeLarge:N,heightTiny:T,heightSmall:de,heightMedium:D,heightLarge:k,actionColor:A,clearColor:R,clearColorHover:O,clearColorPressed:H,placeholderColor:ue,placeholderColorDisabled:ce,iconColor:j,iconColorDisabled:he,iconColorHover:U,iconColorPressed:W}=r;return Object.assign(Object.assign({},ya),{countTextColor:t,heightTiny:T,heightSmall:de,heightMedium:D,heightLarge:k,fontSizeTiny:se,fontSizeSmall:S,fontSizeMedium:_,fontSizeLarge:N,lineHeight:$,lineHeightTextarea:$,borderRadius:le,iconSize:"16px",groupLabelColor:A,groupLabelTextColor:i,textColor:i,textColorDisabled:d,textDecorationColor:i,caretColor:p,placeholderColor:ue,placeholderColorDisabled:ce,color:n,colorDisabled:l,colorFocus:n,groupLabelBorder:`1px solid ${c}`,border:`1px solid ${c}`,borderHover:`1px solid ${h}`,borderDisabled:`1px solid ${c}`,borderFocus:`1px solid ${h}`,boxShadowFocus:`0 0 0 2px ${me(p,{alpha:.2})}`,loadingColor:p,loadingColorWarning:f,borderWarning:`1px solid ${f}`,borderHoverWarning:`1px solid ${v}`,colorFocusWarning:n,borderFocusWarning:`1px solid ${v}`,boxShadowFocusWarning:`0 0 0 2px ${me(f,{alpha:.2})}`,caretColorWarning:f,loadingColorError:P,borderError:`1px solid ${P}`,borderHoverError:`1px solid ${z}`,colorFocusError:n,borderFocusError:`1px solid ${z}`,boxShadowFocusError:`0 0 0 2px ${me(P,{alpha:.2})}`,caretColorError:P,clearColor:R,clearColorHover:O,clearColorPressed:H,iconColor:j,iconColorDisabled:he,iconColorHover:U,iconColorPressed:W,suffixTextColor:i})},xa={name:"Input",common:lt,self:wa};var Ca=xa;const ke=st("n-input");function Pa(r){let i=0;for(const t of r)i++;return i}function ne(r){return["",void 0,null].includes(r)}var Te=V({name:"InputWordCount",setup(r,{slots:i}){const{mergedValueRef:t,maxlengthRef:d,mergedClsPrefixRef:p}=De(ke),h=M(()=>{const{value:n}=t;return n===null||Array.isArray(n)?0:Pa(n)});return()=>{const{value:n}=d,{value:l}=t;return o("span",{class:`${p.value}-input-word-count`},dt(i.default,{value:l===null||Array.isArray(l)?"":l},()=>[n===void 0?h.value:`${h.value} / ${n}`]))}}}),Sa=b("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[u("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),u("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),u("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder","color: #0000;"),C("&:-webkit-autofill ~",[u("placeholder","display: none;")])]),F("round",[X("textarea","border-radius: calc(var(--n-height) / 2);")]),u("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),F("textarea",[u("placeholder","overflow: visible;")]),X("autosize","width: 100%;"),F("autosize",[u("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),b("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),u("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),u("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[u("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),X("textarea",[u("placeholder","white-space: nowrap;")]),u("eye",`
 transition: color .3s var(--n-bezier);
 `),F("textarea","width: 100%;",[b("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),F("resizable",[b("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),u("textarea",`
 position: static;
 `),u("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),u("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),F("pair",[u("input-el, placeholder","text-align: center;"),u("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[b("icon",`
 color: var(--n-icon-color);
 `),b("base-icon",`
 color: var(--n-icon-color);
 `)])]),F("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[u("border","border: var(--n-border-disabled);"),u("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),u("placeholder","color: var(--n-placeholder-color-disabled);"),u("separator","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),u("suffix, prefix","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),X("disabled",[u("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[u("state-border","border: var(--n-border-hover);")]),F("focus","background-color: var(--n-color-focus);",[u("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),u("state-border",`
 border-color: #0000;
 z-index: 1;
 `),u("prefix","margin-right: 4px;"),u("suffix",`
 margin-left: 4px;
 `),u("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[b("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),b("base-clear",`
 font-size: var(--n-icon-size);
 `,[u("placeholder",[b("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[b("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),b("base-icon",`
 font-size: var(--n-icon-size);
 `)]),b("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>F(`${r}-status`,[X("disabled",[b("base-loading",`
 color: var(--n-loading-color-${r})
 `),u("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),u("state-border",`
 border: var(--n-border-${r});
 `),C("&:hover",[u("state-border",`
 border: var(--n-border-hover-${r});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),F("focus",`
 background-color: var(--n-color-focus-${r});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]);const Ma=Object.assign(Object.assign({},_e.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var Aa=V({name:"Input",props:Ma,setup(r){const{mergedClsPrefixRef:i,mergedBorderedRef:t,inlineThemeDisabled:d,mergedRtlRef:p}=ut(r),h=_e("Input","-input",Sa,Ca,r,i),n=w(null),l=w(null),c=w(null),f=w(null),v=w(null),P=w(null),z=w(null),{localeRef:le}=ha("Input"),$=w(r.defaultValue),se=$e(r,"value"),S=Ct(se,$),_=ct(r),{mergedSizeRef:N,mergedDisabledRef:T,mergedStatusRef:de}=_,D=w(!1),k=w(!1),A=w(!1),R=w(!1);let O=null;const H=M(()=>{const{placeholder:e,pair:a}=r;return a?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[le.value.placeholder]:[e]}),ue=M(()=>{const{value:e}=A,{value:a}=S,{value:s}=H;return!e&&(ne(a)||Array.isArray(a)&&ne(a[0]))&&s[0]}),ce=M(()=>{const{value:e}=A,{value:a}=S,{value:s}=H;return!e&&s[1]&&(ne(a)||Array.isArray(a)&&ne(a[1]))}),j=Se(()=>r.internalForceFocus||D.value),he=Se(()=>{if(T.value||r.readonly||!r.clearable||!j.value&&!k.value)return!1;const{value:e}=S,{value:a}=j;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(k.value||a):!!e&&(k.value||a)}),U=M(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),W=w(!1),Re=M(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(a=>({textDecoration:a})):[{textDecoration:e}]:["",""]}),we=w(void 0),We=()=>{var e,a;if(r.type==="textarea"){const{autosize:s}=r;if(s&&(we.value=(a=(e=z.value)===null||e===void 0?void 0:e.$el)===null||a===void 0?void 0:a.offsetWidth),!l.value||typeof s=="boolean")return;const{paddingTop:m,paddingBottom:g,lineHeight:y}=window.getComputedStyle(l.value),E=Number(m.slice(0,-2)),B=Number(g.slice(0,-2)),L=Number(y.slice(0,-2)),{value:q}=c;if(!q)return;if(s.minRows){const K=Math.max(s.minRows,1),pe=`${E+B+L*K}px`;q.style.minHeight=pe}if(s.maxRows){const K=`${E+B+L*s.maxRows}px`;q.style.maxHeight=K}}},Ee=M(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});ht(()=>{const{value:e}=S;Array.isArray(e)||ve(e)});const Be=ft().proxy;function Q(e){const{onUpdateValue:a,"onUpdate:value":s,onInput:m}=r,{nTriggerFormInput:g}=_;a&&x(a,e),s&&x(s,e),m&&x(m,e),$.value=e,g()}function G(e){const{onChange:a}=r,{nTriggerFormChange:s}=_;a&&x(a,e),$.value=e,s()}function Le(e){const{onBlur:a}=r,{nTriggerFormBlur:s}=_;a&&x(a,e),s()}function Ve(e){const{onFocus:a}=r,{nTriggerFormFocus:s}=_;a&&x(a,e),s()}function Ie(e){const{onClear:a}=r;a&&x(a,e)}function Ne(e){const{onInputBlur:a}=r;a&&x(a,e)}function Oe(e){const{onInputFocus:a}=r;a&&x(a,e)}function He(){const{onDeactivate:e}=r;e&&x(e)}function je(){const{onActivate:e}=r;e&&x(e)}function Ue(e){const{onClick:a}=r;a&&x(a,e)}function qe(e){const{onWrapperFocus:a}=r;a&&x(a,e)}function Ke(e){const{onWrapperBlur:a}=r;a&&x(a,e)}function Xe(){A.value=!0}function Ye(e){A.value=!1,e.target===P.value?ee(e,1):ee(e,0)}function ee(e,a=0,s="input"){const m=e.target.value;if(ve(m),r.type==="textarea"){const{value:y}=z;y&&y.syncUnifiedContainer()}if(O=m,A.value)return;const g=m;if(!r.pair)s==="input"?Q(g):G(g);else{let{value:y}=S;Array.isArray(y)?y=[...y]:y=["",""],y[a]=g,s==="input"?Q(y):G(y)}Be.$forceUpdate()}function Je(e){Ne(e),e.relatedTarget===n.value&&He(),e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===P.value||e.relatedTarget===l.value)||(R.value=!1),re(e,"blur")}function Ze(e){Oe(e),D.value=!0,R.value=!0,je(),re(e,"focus")}function Qe(e){r.passivelyActivated&&(Ke(e),re(e,"blur"))}function Ge(e){r.passivelyActivated&&(D.value=!0,qe(e),re(e,"focus"))}function re(e,a){e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===P.value||e.relatedTarget===l.value||e.relatedTarget===n.value)||(a==="focus"?(Ve(e),D.value=!0):a==="blur"&&(Le(e),D.value=!1))}function er(e,a){ee(e,a,"change")}function rr(e){Ue(e)}function tr(e){Ie(e),r.pair?(Q(["",""]),G(["",""])):(Q(""),G(""))}function ar(e){const{onMousedown:a}=r;a&&a(e);const{tagName:s}=e.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(r.resizable){const{value:m}=n;if(m){const{left:g,top:y,width:E,height:B}=m.getBoundingClientRect(),L=14;if(g+E-L<e.clientX&&e.clientY<g+E&&y+B-L<e.clientY&&e.clientY<y+B)return}}e.preventDefault(),D.value||xe()}}function or(){var e;k.value=!0,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function nr(){var e;k.value=!1,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ir(){T.value||U.value==="click"&&(W.value=!W.value)}function lr(e){if(T.value)return;e.preventDefault();const a=m=>{m.preventDefault(),Fe("mouseup",document,a)};if(ze("mouseup",document,a),U.value!=="mousedown")return;W.value=!0;const s=()=>{W.value=!1,Fe("mouseup",document,s)};ze("mouseup",document,s)}function sr(e){var a;switch((a=r.onKeydown)===null||a===void 0||a.call(r,e),e.key){case"Escape":fe();break;case"Enter":dr(e);break}}function dr(e){var a,s;if(r.passivelyActivated){const{value:m}=R;if(m){r.internalDeactivateOnEnter&&fe();return}e.preventDefault(),r.type==="textarea"?(a=l.value)===null||a===void 0||a.focus():(s=v.value)===null||s===void 0||s.focus()}}function fe(){r.passivelyActivated&&(R.value=!1,wt(()=>{var e;(e=n.value)===null||e===void 0||e.focus()}))}function xe(){var e,a,s;T.value||(r.passivelyActivated?(e=n.value)===null||e===void 0||e.focus():((a=l.value)===null||a===void 0||a.focus(),(s=v.value)===null||s===void 0||s.focus()))}function ur(){var e;!((e=n.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function cr(){var e,a;(e=l.value)===null||e===void 0||e.select(),(a=v.value)===null||a===void 0||a.select()}function hr(){T.value||(l.value?l.value.focus():v.value&&v.value.focus())}function fr(){const{value:e}=n;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&fe()}function ve(e){const{type:a,pair:s,autosize:m}=r;if(!s&&m)if(a==="textarea"){const{value:g}=c;g&&(g.textContent=(e!=null?e:"")+`\r
`)}else{const{value:g}=f;g&&(e?g.textContent=e:g.innerHTML="&nbsp;")}}function vr(){We()}const Ce=w({top:"0"});function pr(e){var a;const{scrollTop:s}=e.target;Ce.value.top=`${-s}px`,(a=z.value)===null||a===void 0||a.syncUnifiedContainer()}let te=null;Me(()=>{const{autosize:e,type:a}=r;e&&a==="textarea"?te=Ae(S,s=>{!Array.isArray(s)&&s!==O&&ve(s)}):te==null||te()});let ae=null;Me(()=>{r.type==="textarea"?ae=Ae(S,e=>{var a;!Array.isArray(e)&&e!==O&&((a=z.value)===null||a===void 0||a.syncUnifiedContainer())}):ae==null||ae()}),vt(ke,{mergedValueRef:S,maxlengthRef:Ee,mergedClsPrefixRef:i});const mr={wrapperElRef:n,inputElRef:v,textareaElRef:l,isCompositing:A,focus:xe,blur:ur,select:cr,deactivate:fr,activate:hr},gr=pt("Input",p,i),Pe=M(()=>{const{value:e}=N,{common:{cubicBezierEaseInOut:a},self:{color:s,borderRadius:m,textColor:g,caretColor:y,caretColorError:E,caretColorWarning:B,textDecorationColor:L,border:q,borderDisabled:K,borderHover:pe,borderFocus:br,placeholderColor:yr,placeholderColorDisabled:wr,lineHeightTextarea:xr,colorDisabled:Cr,colorFocus:Pr,textColorDisabled:Sr,boxShadowFocus:Mr,iconSize:zr,colorFocusWarning:Fr,boxShadowFocusWarning:Ar,borderWarning:Tr,borderFocusWarning:Dr,borderHoverWarning:$r,colorFocusError:_r,boxShadowFocusError:kr,borderError:Rr,borderFocusError:Wr,borderHoverError:Er,clearSize:Br,clearColor:Lr,clearColorHover:Vr,clearColorPressed:Ir,iconColor:Nr,iconColorDisabled:Or,suffixTextColor:Hr,countTextColor:jr,iconColorHover:Ur,iconColorPressed:qr,loadingColor:Kr,loadingColorError:Xr,loadingColorWarning:Yr,[ge("padding",e)]:Jr,[ge("fontSize",e)]:Zr,[ge("height",e)]:Qr}}=h.value,{left:Gr,right:et}=xt(Jr);return{"--n-bezier":a,"--n-count-text-color":jr,"--n-color":s,"--n-font-size":Zr,"--n-border-radius":m,"--n-height":Qr,"--n-padding-left":Gr,"--n-padding-right":et,"--n-text-color":g,"--n-caret-color":y,"--n-text-decoration-color":L,"--n-border":q,"--n-border-disabled":K,"--n-border-hover":pe,"--n-border-focus":br,"--n-placeholder-color":yr,"--n-placeholder-color-disabled":wr,"--n-icon-size":zr,"--n-line-height-textarea":xr,"--n-color-disabled":Cr,"--n-color-focus":Pr,"--n-text-color-disabled":Sr,"--n-box-shadow-focus":Mr,"--n-loading-color":Kr,"--n-caret-color-warning":B,"--n-color-focus-warning":Fr,"--n-box-shadow-focus-warning":Ar,"--n-border-warning":Tr,"--n-border-focus-warning":Dr,"--n-border-hover-warning":$r,"--n-loading-color-warning":Yr,"--n-caret-color-error":E,"--n-color-focus-error":_r,"--n-box-shadow-focus-error":kr,"--n-border-error":Rr,"--n-border-focus-error":Wr,"--n-border-hover-error":Er,"--n-loading-color-error":Xr,"--n-clear-color":Lr,"--n-clear-size":Br,"--n-clear-color-hover":Vr,"--n-clear-color-pressed":Ir,"--n-icon-color":Nr,"--n-icon-color-hover":Ur,"--n-icon-color-pressed":qr,"--n-icon-color-disabled":Or,"--n-suffix-text-color":Hr}}),I=d?mt("input",M(()=>{const{value:e}=N;return e[0]}),Pe,r):void 0;return Object.assign(Object.assign({},mr),{wrapperElRef:n,inputElRef:v,inputMirrorElRef:f,inputEl2Ref:P,textareaElRef:l,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:gr,uncontrolledValue:$,mergedValue:S,passwordVisible:W,mergedPlaceholder:H,showPlaceholder1:ue,showPlaceholder2:ce,mergedFocus:j,isComposing:A,activated:R,showClearButton:he,mergedSize:N,mergedDisabled:T,textDecorationStyle:Re,mergedClsPrefix:i,mergedBordered:t,mergedShowPasswordOn:U,placeholderStyle:Ce,mergedStatus:de,textAreaScrollContainerWidth:we,handleTextAreaScroll:pr,handleCompositionStart:Xe,handleCompositionEnd:Ye,handleInput:ee,handleInputBlur:Je,handleInputFocus:Ze,handleWrapperBlur:Qe,handleWrapperFocus:Ge,handleMouseEnter:or,handleMouseLeave:nr,handleMouseDown:ar,handleChange:er,handleClick:rr,handleClear:tr,handlePasswordToggleClick:ir,handlePasswordToggleMousedown:lr,handleWrapperKeyDown:sr,handleTextAreaMirrorResize:vr,getTextareaScrollContainer:()=>l.value,mergedTheme:h,cssVars:d?void 0:Pe,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var r,i;const{mergedClsPrefix:t,mergedStatus:d,themeClass:p,onRender:h}=this,n=this.$slots;return h==null||h(),o("div",{ref:"wrapperElRef",class:[`${t}-input`,p,d&&`${t}-input--${d}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},o("div",{class:`${t}-input-wrapper`},oe(n.prefix,l=>l&&o("div",{class:`${t}-input__prefix`},l)),this.type==="textarea"?o(gt,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var l,c;const{textAreaScrollContainerWidth:f}=this,v={width:this.autosize&&f&&`${f}px`};return o(bt,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(l=this.inputProps)===null||l===void 0?void 0:l.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(c=this.inputProps)===null||c===void 0?void 0:c.style,v],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,v],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(yt,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${t}-input__input`},o("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?o("div",{class:`${t}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&oe(n.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${t}-input__suffix`},[oe(n["clear-icon-placeholder"],c=>(this.clearable||c)&&o(ye,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>c,icon:()=>{var f,v;return(v=(f=this.$slots)["clear-icon"])===null||v===void 0?void 0:v.call(f)}})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?o(ba,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?o(Te,null,{default:c=>{var f;return(f=n.count)===null||f===void 0?void 0:f.call(n,c)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Z(n["password-visible-icon"],()=>[o(ie,{clsPrefix:t},{default:()=>o(fa,null)})]):Z(n["password-invisible-icon"],()=>[o(ie,{clsPrefix:t},{default:()=>o(va,null)})])):null]):null)),this.pair?o("span",{class:`${t}-input__separator`},Z(n.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${t}-input-wrapper`},o("div",{class:`${t}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?o("div",{class:`${t}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),oe(n.suffix,l=>(this.clearable||l)&&o("div",{class:`${t}-input__suffix`},[this.clearable&&o(ye,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var c;return(c=n["clear-icon"])===null||c===void 0?void 0:c.call(n)},placeholder:()=>{var c;return(c=n["clear-icon-placeholder"])===null||c===void 0?void 0:c.call(n)}}),l]))):null,this.mergedBordered?o("div",{class:`${t}-input__border`}):null,this.mergedBordered?o("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?o(Te,null,{default:l=>{var c;return(c=n.count)===null||c===void 0?void 0:c.call(n,l)}}):null)}});export{pa as C,ba as N,Aa as _,Ca as i,ha as u};
