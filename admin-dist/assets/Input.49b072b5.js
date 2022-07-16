import{br as be,bs as Y,bt as no,bu as J,k as ke,bb as io,l as F,d as L,h as a,bv as lo,e as y,f as P,j as s,bp as so,bw as uo,z as Re,bm as co,C as Q,N as le,be as ho,c as fo,E as ye,b as vo,r as x,w as we,bx as po,x as T,L as Z,u as go,m as Ee,bi as mo,H as Fe,q as bo,a9 as yo,s as Te,y as xo,b0 as wo,o as Co,v as ne,bf as So,G as Po,V as Mo,aq as Ae,ah as _e,O as S,af as $e,n as xe,bd as zo}from"./index.592c0511.js";import{u as Fo}from"./Space.6e5598d2.js";const To={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:r=>`Please load all ${r}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};var Ao=To,_o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$o=function(r,d,t){var h,g=_o[r];return typeof g=="string"?h=g:d===1?h=g.one:h=g.other.replace("{{count}}",d.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+h:h+" ago":h},Do=$o,ko={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ro={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Eo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Wo={date:be({formats:ko,defaultWidth:"full"}),time:be({formats:Ro,defaultWidth:"full"}),dateTime:be({formats:Eo,defaultWidth:"full"})},Bo=Wo,Lo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Io=function(r,d,t,h){return Lo[r]},Vo=Io,No={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Oo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ho={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Uo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ko=function(r,d){var t=Number(r),h=t%100;if(h>20||h<10)switch(h%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Xo={ordinalNumber:Ko,era:Y({values:No,defaultWidth:"wide"}),quarter:Y({values:Oo,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:Y({values:Ho,defaultWidth:"wide"}),day:Y({values:jo,defaultWidth:"wide"}),dayPeriod:Y({values:Uo,defaultWidth:"wide",formattingValues:qo,defaultFormattingWidth:"wide"})},Yo=Xo,Jo=/^(\d+)(th|st|nd|rd)?/i,Zo=/\d+/i,Qo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Go={any:[/^b/i,/^(a|c)/i]},et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rt={any:[/1/i,/2/i,/3/i,/4/i]},ot={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},at={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},it={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},st={ordinalNumber:no({matchPattern:Jo,parsePattern:Zo,valueCallback:function(r){return parseInt(r,10)}}),era:J({matchPatterns:Qo,defaultMatchWidth:"wide",parsePatterns:Go,defaultParseWidth:"any"}),quarter:J({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:J({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any"}),day:J({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:it,defaultMatchWidth:"any",parsePatterns:lt,defaultParseWidth:"any"})},dt=st,ut={code:"en-US",formatDistance:Do,formatLong:Bo,formatRelative:Vo,localize:Yo,match:dt,options:{weekStartsOn:0,firstWeekContainsDate:1}},ct=ut;const ht={name:"en-US",locale:ct};var ft=ht;function vt(r){const{mergedLocaleRef:d,mergedDateLocaleRef:t}=ke(io,null)||{},h=F(()=>{var c,i;return(i=(c=d==null?void 0:d.value)===null||c===void 0?void 0:c[r])!==null&&i!==void 0?i:Ao[r]});return{dateLocaleRef:F(()=>{var c;return(c=t==null?void 0:t.value)!==null&&c!==void 0?c:ft}),localeRef:h}}var pt=L({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),gt=L({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),mt=L({name:"ChevronDown",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),bt=lo("clear",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),yt=y("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[P(">",[s("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[P("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),P("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),s("placeholder",`
 display: flex;
 `),s("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ce=L({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(r){return uo("-base-clear",yt,Re(r,"clsPrefix")),{handleMouseDown(d){d.preventDefault()}}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-base-clear`},a(co,null,{default:()=>{var d,t;return this.show?a("div",{key:"dismiss",class:`${r}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Q(this.$slots.icon,()=>[a(le,{clsPrefix:r},{default:()=>a(bt,null)})])):a("div",{key:"icon",class:`${r}-base-clear__placeholder`},(t=(d=this.$slots).placeholder)===null||t===void 0?void 0:t.call(d))}}))}}),xt=L({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(r,{slots:d}){return()=>{const{clsPrefix:t}=r;return a(ho,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:r.loading},{default:()=>r.showArrow?a(Ce,{clsPrefix:t,show:r.showClear,onClear:r.onClear},{placeholder:()=>a(le,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Q(d.default,()=>[a(mt,null)])})}):null})}}}),wt={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const Ct=r=>{const{textColor2:d,textColor3:t,textColorDisabled:h,primaryColor:g,primaryColorHover:c,inputColor:i,inputColorDisabled:n,borderColor:u,warningColor:p,warningColorHover:f,errorColor:w,errorColorHover:C,borderRadius:I,lineHeight:M,fontSizeTiny:se,fontSizeSmall:V,fontSizeMedium:de,fontSizeLarge:z,heightTiny:D,heightSmall:O,heightMedium:_,heightLarge:ue,actionColor:$,clearColor:k,clearColorHover:A,clearColorPressed:R,placeholderColor:H,placeholderColorDisabled:j,iconColor:ce,iconColorDisabled:he,iconColorHover:U,iconColorPressed:fe}=r;return Object.assign(Object.assign({},wt),{countTextColor:t,heightTiny:D,heightSmall:O,heightMedium:_,heightLarge:ue,fontSizeTiny:se,fontSizeSmall:V,fontSizeMedium:de,fontSizeLarge:z,lineHeight:M,lineHeightTextarea:M,borderRadius:I,iconSize:"16px",groupLabelColor:$,groupLabelTextColor:d,textColor:d,textColorDisabled:h,textDecorationColor:d,caretColor:g,placeholderColor:H,placeholderColorDisabled:j,color:i,colorDisabled:n,colorFocus:i,groupLabelBorder:`1px solid ${u}`,border:`1px solid ${u}`,borderHover:`1px solid ${c}`,borderDisabled:`1px solid ${u}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${ye(g,{alpha:.2})}`,loadingColor:g,loadingColorWarning:p,borderWarning:`1px solid ${p}`,borderHoverWarning:`1px solid ${f}`,colorFocusWarning:i,borderFocusWarning:`1px solid ${f}`,boxShadowFocusWarning:`0 0 0 2px ${ye(p,{alpha:.2})}`,caretColorWarning:p,loadingColorError:w,borderError:`1px solid ${w}`,borderHoverError:`1px solid ${C}`,colorFocusError:i,borderFocusError:`1px solid ${C}`,boxShadowFocusError:`0 0 0 2px ${ye(w,{alpha:.2})}`,caretColorError:w,clearColor:k,clearColorHover:A,clearColorPressed:R,iconColor:ce,iconColorDisabled:he,iconColorHover:U,iconColorPressed:fe,suffixTextColor:d})},St={name:"Input",common:fo,self:Ct};var Pt=St;const We=vo("n-input");function Mt(r){let d=0;for(const t of r)d++;return d}function ie(r){return r===""||r==null}function zt(r){const d=x(null);function t(){const{value:c}=r;if(!c||!c.focus){g();return}const{selectionStart:i,selectionEnd:n,value:u}=c;if(i==null||n==null){g();return}d.value={start:i,end:n,beforeText:u.slice(0,i),afterText:u.slice(n)}}function h(){var c;const{value:i}=d,{value:n}=r;if(!i||!n)return;const{value:u}=n,{start:p,beforeText:f,afterText:w}=i;let C=u.length;if(u.endsWith(w))C=u.length-w.length;else if(u.startsWith(f))C=f.length;else{const I=f[p-1],M=u.indexOf(I,p-1);M!==-1&&(C=M+1)}(c=n.setSelectionRange)===null||c===void 0||c.call(n,C,C)}function g(){d.value=null}return we(r,g),{recordCursor:t,restoreCursor:h}}var De=L({name:"InputWordCount",setup(r,{slots:d}){const{mergedValueRef:t,maxlengthRef:h,mergedClsPrefixRef:g}=ke(We),c=F(()=>{const{value:i}=t;return i===null||Array.isArray(i)?0:Mt(i)});return()=>{const{value:i}=h,{value:n}=t;return a("span",{class:`${g.value}-input-word-count`},po(d.default,{value:n===null||Array.isArray(n)?"":n},()=>[i===void 0?c.value:`${c.value} / ${i}`]))}}}),Ft=y("input",`
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
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),P("&::placeholder","color: #0000;"),P("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),T("round",[Z("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[P("span",`
 width: 100%;
 display: inline-block;
 `)]),T("textarea",[s("placeholder","overflow: visible;")]),Z("autosize","width: 100%;"),T("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),y("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[P("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Z("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 transition: color .3s var(--n-bezier);
 `),T("textarea","width: 100%;",[y("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),T("resizable",[y("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea",`
 position: static;
 `),s("textarea-el, textarea-mirror, placeholder",`
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
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),T("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[y("icon",`
 color: var(--n-icon-color);
 `),y("base-icon",`
 color: var(--n-icon-color);
 `)])]),T("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[y("icon",`
 color: var(--n-icon-color-disabled);
 `),y("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),s("suffix, prefix","color: var(--n-text-color-disabled);",[y("icon",`
 color: var(--n-icon-color-disabled);
 `),y("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Z("disabled",[s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[P("&:hover",`
 color: var(--n-icon-color-hover);
 `),P("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),P("&:hover",[s("state-border","border: var(--n-border-hover);")]),T("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
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
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[y("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),y("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[y("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),P(">",[y("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),y("base-icon",`
 font-size: var(--n-icon-size);
 `)]),y("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>T(`${r}-status`,[Z("disabled",[y("base-loading",`
 color: var(--n-loading-color-${r})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),s("state-border",`
 border: var(--n-border-${r});
 `),P("&:hover",[s("state-border",`
 border: var(--n-border-hover-${r});
 `)]),P("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),T("focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]);const Tt=Object.assign(Object.assign({},Ee.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var $t=L({name:"Input",props:Tt,setup(r){const{mergedClsPrefixRef:d,mergedBorderedRef:t,inlineThemeDisabled:h,mergedRtlRef:g}=go(r),c=Ee("Input","-input",Ft,Pt,r,d),i=x(null),n=x(null),u=x(null),p=x(null),f=x(null),w=x(null),C=x(null),I=zt(C),M=x(null),{localeRef:se}=vt("Input"),V=x(r.defaultValue),de=Re(r,"value"),z=Fo(de,V),D=mo(r),{mergedSizeRef:O,mergedDisabledRef:_,mergedStatusRef:ue}=D,$=x(!1),k=x(!1),A=x(!1),R=x(!1);let H=null;const j=F(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[se.value.placeholder]:[e]}),ce=F(()=>{const{value:e}=A,{value:o}=z,{value:l}=j;return!e&&(ie(o)||Array.isArray(o)&&ie(o[0]))&&l[0]}),he=F(()=>{const{value:e}=A,{value:o}=z,{value:l}=j;return!e&&l[1]&&(ie(o)||Array.isArray(o)&&ie(o[1]))}),U=Fe(()=>r.internalForceFocus||$.value),fe=Fe(()=>{if(_.value||r.readonly||!r.clearable||!U.value&&!k.value)return!1;const{value:e}=z,{value:o}=U;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(k.value||o):!!e&&(k.value||o)}),ve=F(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),q=x(!1),Be=F(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),Se=x(void 0),Le=()=>{var e,o;if(r.type==="textarea"){const{autosize:l}=r;if(l&&(Se.value=(o=(e=M.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!n.value||typeof l=="boolean")return;const{paddingTop:v,paddingBottom:m,lineHeight:b}=window.getComputedStyle(n.value),E=Number(v.slice(0,-2)),W=Number(m.slice(0,-2)),B=Number(b.slice(0,-2)),{value:K}=u;if(!K)return;if(l.minRows){const X=Math.max(l.minRows,1),me=`${E+W+B*X}px`;K.style.minHeight=me}if(l.maxRows){const X=`${E+W+B*l.maxRows}px`;K.style.maxHeight=X}}},Ie=F(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});bo(()=>{const{value:e}=z;Array.isArray(e)||ge(e)});const Ve=yo().proxy;function G(e){const{onUpdateValue:o,"onUpdate:value":l,onInput:v}=r,{nTriggerFormInput:m}=D;o&&S(o,e),l&&S(l,e),v&&S(v,e),V.value=e,m()}function ee(e){const{onChange:o}=r,{nTriggerFormChange:l}=D;o&&S(o,e),V.value=e,l()}function Ne(e){const{onBlur:o}=r,{nTriggerFormBlur:l}=D;o&&S(o,e),l()}function Oe(e){const{onFocus:o}=r,{nTriggerFormFocus:l}=D;o&&S(o,e),l()}function He(e){const{onClear:o}=r;o&&S(o,e)}function je(e){const{onInputBlur:o}=r;o&&S(o,e)}function Ue(e){const{onInputFocus:o}=r;o&&S(o,e)}function qe(){const{onDeactivate:e}=r;e&&S(e)}function Ke(){const{onActivate:e}=r;e&&S(e)}function Xe(e){const{onClick:o}=r;o&&S(o,e)}function Ye(e){const{onWrapperFocus:o}=r;o&&S(o,e)}function Je(e){const{onWrapperBlur:o}=r;o&&S(o,e)}function Ze(){A.value=!0}function Qe(e){A.value=!1,e.target===w.value?re(e,1):re(e,0)}function re(e,o=0,l="input"){const v=e.target.value;if(ge(v),r.type==="textarea"){const{value:b}=M;b&&b.syncUnifiedContainer()}if(H=v,A.value)return;I.recordCursor();const m=Ge(v);if(m)if(!r.pair)l==="input"?G(v):ee(v);else{let{value:b}=z;Array.isArray(b)?b=[b[0],b[1]]:b=["",""],b[o]=v,l==="input"?G(b):ee(b)}Ve.$forceUpdate(),m||Ae(I.restoreCursor)}function Ge(e){const{allowInput:o}=r;return typeof o=="function"?o(e):!0}function er(e){je(e),e.relatedTarget===i.value&&qe(),e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===w.value||e.relatedTarget===n.value)||(R.value=!1),oe(e,"blur"),C.value=null}function rr(e,o){Ue(e),$.value=!0,R.value=!0,Ke(),oe(e,"focus"),o===0?C.value=f.value:o===1?C.value=w.value:o===2&&(C.value=n.value)}function or(e){r.passivelyActivated&&(Je(e),oe(e,"blur"))}function tr(e){r.passivelyActivated&&($.value=!0,Ye(e),oe(e,"focus"))}function oe(e,o){e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===w.value||e.relatedTarget===n.value||e.relatedTarget===i.value)||(o==="focus"?(Oe(e),$.value=!0):o==="blur"&&(Ne(e),$.value=!1))}function ar(e,o){re(e,o,"change")}function nr(e){Xe(e)}function ir(e){He(e),r.pair?(G(["",""]),ee(["",""])):(G(""),ee(""))}function lr(e){const{onMousedown:o}=r;o&&o(e);const{tagName:l}=e.target;if(l!=="INPUT"&&l!=="TEXTAREA"){if(r.resizable){const{value:v}=i;if(v){const{left:m,top:b,width:E,height:W}=v.getBoundingClientRect(),B=14;if(m+E-B<e.clientX&&e.clientY<m+E&&b+W-B<e.clientY&&e.clientY<b+W)return}}e.preventDefault(),$.value||Pe()}}function sr(){var e;k.value=!0,r.type==="textarea"&&((e=M.value)===null||e===void 0||e.handleMouseEnterWrapper())}function dr(){var e;k.value=!1,r.type==="textarea"&&((e=M.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ur(){_.value||ve.value==="click"&&(q.value=!q.value)}function cr(e){if(_.value)return;e.preventDefault();const o=v=>{v.preventDefault(),$e("mouseup",document,o)};if(_e("mouseup",document,o),ve.value!=="mousedown")return;q.value=!0;const l=()=>{q.value=!1,$e("mouseup",document,l)};_e("mouseup",document,l)}function hr(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":pe();break;case"Enter":fr(e);break}}function fr(e){var o,l;if(r.passivelyActivated){const{value:v}=R;if(v){r.internalDeactivateOnEnter&&pe();return}e.preventDefault(),r.type==="textarea"?(o=n.value)===null||o===void 0||o.focus():(l=f.value)===null||l===void 0||l.focus()}}function pe(){r.passivelyActivated&&(R.value=!1,Ae(()=>{var e;(e=i.value)===null||e===void 0||e.focus()}))}function Pe(){var e,o,l;_.value||(r.passivelyActivated?(e=i.value)===null||e===void 0||e.focus():((o=n.value)===null||o===void 0||o.focus(),(l=f.value)===null||l===void 0||l.focus()))}function vr(){var e;!((e=i.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function pr(){var e,o;(e=n.value)===null||e===void 0||e.select(),(o=f.value)===null||o===void 0||o.select()}function gr(){_.value||(n.value?n.value.focus():f.value&&f.value.focus())}function mr(){const{value:e}=i;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&pe()}function ge(e){const{type:o,pair:l,autosize:v}=r;if(!l&&v)if(o==="textarea"){const{value:m}=u;m&&(m.textContent=(e!=null?e:"")+`\r
`)}else{const{value:m}=p;m&&(e?m.textContent=e:m.innerHTML="&nbsp;")}}function br(){Le()}const Me=x({top:"0"});function yr(e){var o;const{scrollTop:l}=e.target;Me.value.top=`${-l}px`,(o=M.value)===null||o===void 0||o.syncUnifiedContainer()}let te=null;Te(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?te=we(z,l=>{!Array.isArray(l)&&l!==H&&ge(l)}):te==null||te()});let ae=null;Te(()=>{r.type==="textarea"?ae=we(z,e=>{var o;!Array.isArray(e)&&e!==H&&((o=M.value)===null||o===void 0||o.syncUnifiedContainer())}):ae==null||ae()}),xo(We,{mergedValueRef:z,maxlengthRef:Ie,mergedClsPrefixRef:d});const xr={wrapperElRef:i,inputElRef:f,textareaElRef:n,isCompositing:A,focus:Pe,blur:vr,select:pr,deactivate:mr,activate:gr},wr=wo("Input",g,d),ze=F(()=>{const{value:e}=O,{common:{cubicBezierEaseInOut:o},self:{color:l,borderRadius:v,textColor:m,caretColor:b,caretColorError:E,caretColorWarning:W,textDecorationColor:B,border:K,borderDisabled:X,borderHover:me,borderFocus:Cr,placeholderColor:Sr,placeholderColorDisabled:Pr,lineHeightTextarea:Mr,colorDisabled:zr,colorFocus:Fr,textColorDisabled:Tr,boxShadowFocus:Ar,iconSize:_r,colorFocusWarning:$r,boxShadowFocusWarning:Dr,borderWarning:kr,borderFocusWarning:Rr,borderHoverWarning:Er,colorFocusError:Wr,boxShadowFocusError:Br,borderError:Lr,borderFocusError:Ir,borderHoverError:Vr,clearSize:Nr,clearColor:Or,clearColorHover:Hr,clearColorPressed:jr,iconColor:Ur,iconColorDisabled:qr,suffixTextColor:Kr,countTextColor:Xr,iconColorHover:Yr,iconColorPressed:Jr,loadingColor:Zr,loadingColorError:Qr,loadingColorWarning:Gr,[xe("padding",e)]:eo,[xe("fontSize",e)]:ro,[xe("height",e)]:oo}}=c.value,{left:to,right:ao}=zo(eo);return{"--n-bezier":o,"--n-count-text-color":Xr,"--n-color":l,"--n-font-size":ro,"--n-border-radius":v,"--n-height":oo,"--n-padding-left":to,"--n-padding-right":ao,"--n-text-color":m,"--n-caret-color":b,"--n-text-decoration-color":B,"--n-border":K,"--n-border-disabled":X,"--n-border-hover":me,"--n-border-focus":Cr,"--n-placeholder-color":Sr,"--n-placeholder-color-disabled":Pr,"--n-icon-size":_r,"--n-line-height-textarea":Mr,"--n-color-disabled":zr,"--n-color-focus":Fr,"--n-text-color-disabled":Tr,"--n-box-shadow-focus":Ar,"--n-loading-color":Zr,"--n-caret-color-warning":W,"--n-color-focus-warning":$r,"--n-box-shadow-focus-warning":Dr,"--n-border-warning":kr,"--n-border-focus-warning":Rr,"--n-border-hover-warning":Er,"--n-loading-color-warning":Gr,"--n-caret-color-error":E,"--n-color-focus-error":Wr,"--n-box-shadow-focus-error":Br,"--n-border-error":Lr,"--n-border-focus-error":Ir,"--n-border-hover-error":Vr,"--n-loading-color-error":Qr,"--n-clear-color":Or,"--n-clear-size":Nr,"--n-clear-color-hover":Hr,"--n-clear-color-pressed":jr,"--n-icon-color":Ur,"--n-icon-color-hover":Yr,"--n-icon-color-pressed":Jr,"--n-icon-color-disabled":qr,"--n-suffix-text-color":Kr}}),N=h?Co("input",F(()=>{const{value:e}=O;return e[0]}),ze,r):void 0;return Object.assign(Object.assign({},xr),{wrapperElRef:i,inputElRef:f,inputMirrorElRef:p,inputEl2Ref:w,textareaElRef:n,textareaMirrorElRef:u,textareaScrollbarInstRef:M,rtlEnabled:wr,uncontrolledValue:V,mergedValue:z,passwordVisible:q,mergedPlaceholder:j,showPlaceholder1:ce,showPlaceholder2:he,mergedFocus:U,isComposing:A,activated:R,showClearButton:fe,mergedSize:O,mergedDisabled:_,textDecorationStyle:Be,mergedClsPrefix:d,mergedBordered:t,mergedShowPasswordOn:ve,placeholderStyle:Me,mergedStatus:ue,textAreaScrollContainerWidth:Se,handleTextAreaScroll:yr,handleCompositionStart:Ze,handleCompositionEnd:Qe,handleInput:re,handleInputBlur:er,handleInputFocus:rr,handleWrapperBlur:or,handleWrapperFocus:tr,handleMouseEnter:sr,handleMouseLeave:dr,handleMouseDown:lr,handleChange:ar,handleClick:nr,handleClear:ir,handlePasswordToggleClick:ur,handlePasswordToggleMousedown:cr,handleWrapperKeydown:hr,handleTextAreaMirrorResize:br,getTextareaScrollContainer:()=>n.value,mergedTheme:c,cssVars:h?void 0:ze,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){var r,d;const{mergedClsPrefix:t,mergedStatus:h,themeClass:g,onRender:c}=this,i=this.$slots;return c==null||c(),a("div",{ref:"wrapperElRef",class:[`${t}-input`,g,h&&`${t}-input--${h}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${t}-input-wrapper`},ne(i.prefix,n=>n&&a("div",{class:`${t}-input__prefix`},n)),this.type==="textarea"?a(So,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var n,u;const{textAreaScrollContainerWidth:p}=this,f={width:this.autosize&&p&&`${p}px`};return a(Po,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(u=this.inputProps)===null||u===void 0?void 0:u.style,f],onBlur:this.handleInputBlur,onFocus:w=>this.handleInputFocus(w,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,f],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(Mo,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${t}-input__input`},a("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:n=>this.handleInputFocus(n,0),onInput:n=>this.handleInput(n,0),onChange:n=>this.handleChange(n,0)})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&ne(i.suffix,n=>n||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${t}-input__suffix`},[ne(i["clear-icon-placeholder"],u=>(this.clearable||u)&&a(Ce,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>u,icon:()=>{var p,f;return(f=(p=this.$slots)["clear-icon"])===null||f===void 0?void 0:f.call(p)}})),this.internalLoadingBeforeSuffix?null:n,this.loading!==void 0?a(xt,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?n:null,this.showCount&&this.type!=="textarea"?a(De,null,{default:u=>{var p;return(p=i.count)===null||p===void 0?void 0:p.call(i,u)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Q(i["password-visible-icon"],()=>[a(le,{clsPrefix:t},{default:()=>a(pt,null)})]):Q(i["password-invisible-icon"],()=>[a(le,{clsPrefix:t},{default:()=>a(gt,null)})])):null]):null)),this.pair?a("span",{class:`${t}-input__separator`},Q(i.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${t}-input-wrapper`},a("div",{class:`${t}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:n=>this.handleInputFocus(n,1),onInput:n=>this.handleInput(n,1),onChange:n=>this.handleChange(n,1)}),this.showPlaceholder2?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),ne(i.suffix,n=>(this.clearable||n)&&a("div",{class:`${t}-input__suffix`},[this.clearable&&a(Ce,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var u;return(u=i["clear-icon"])===null||u===void 0?void 0:u.call(i)},placeholder:()=>{var u;return(u=i["clear-icon-placeholder"])===null||u===void 0?void 0:u.call(i)}}),n]))):null,this.mergedBordered?a("div",{class:`${t}-input__border`}):null,this.mergedBordered?a("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?a(De,null,{default:n=>{var u;return(u=i.count)===null||u===void 0?void 0:u.call(i,n)}}):null)}});export{mt as C,xt as N,$t as _,Pt as i,vt as u};
