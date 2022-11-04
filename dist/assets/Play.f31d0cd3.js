import{e as Wt,v as tt,x as st,C as At,B as Nt,y as yt,b5 as Et,D as on,H as nr,r as Kt,o as rr,bp as ar,br as ir,I as rn,b7 as or,bq as sr,A as lr,aL as dr,b6 as ur,_ as cr}from"./index.667ca0c1.js";import{d as fr,c as hr,a as sn,b as pr,_ as vr}from"./base.7ea4c9e1.js";import"./get-slot.b6334e53.js";const gr=Wt({__name:"PlayMsg",props:["name","director","actor","description"],setup(Ne){const Me=Ne;return(X,B)=>{const x=nr;return tt(),st("div",null,[At(x,{title:Me.name,size:"medium"},{default:Nt(()=>[yt("div",null,"\u5BFC\u6F14\uFF1A"+Et(Me.director),1),yt("div",null,"\u4E3B\u6F14\uFF1A"+Et(Me.actor),1),yt("div",null,"\u7B80\u4ECB\uFF1A"+Et(on(fr)(Me.description)),1)]),_:1},8,["title"])])}}});var ln={exports:{}};(function(Ne,Me){typeof window!="undefined"&&function(B,x){Ne.exports=x()}(hr,function(){return function(X){var B={};function x(M){if(B[M])return B[M].exports;var C=B[M]={i:M,l:!1,exports:{}};return X[M].call(C.exports,C,C.exports,x),C.l=!0,C.exports}return x.m=X,x.c=B,x.d=function(M,C,T){x.o(M,C)||Object.defineProperty(M,C,{enumerable:!0,get:T})},x.r=function(M){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},x.t=function(M,C){if(C&1&&(M=x(M)),C&8||C&4&&typeof M=="object"&&M&&M.__esModule)return M;var T=Object.create(null);if(x.r(T),Object.defineProperty(T,"default",{enumerable:!0,value:M}),C&2&&typeof M!="string")for(var R in M)x.d(T,R,function(O){return M[O]}.bind(null,R));return T},x.n=function(M){var C=M&&M.__esModule?function(){return M.default}:function(){return M};return x.d(C,"a",C),C},x.o=function(M,C){return Object.prototype.hasOwnProperty.call(M,C)},x.p="/dist/",x(x.s="./src/hls.ts")}({"./node_modules/eventemitter3/index.js":function(X,B,x){var M=Object.prototype.hasOwnProperty,C="~";function T(){}Object.create&&(T.prototype=Object.create(null),new T().__proto__||(C=!1));function R(a,y,A){this.fn=a,this.context=y,this.once=A||!1}function O(a,y,A,h,f){if(typeof A!="function")throw new TypeError("The listener must be a function");var v=new R(A,h||a,f),t=C?C+y:y;return a._events[t]?a._events[t].fn?a._events[t]=[a._events[t],v]:a._events[t].push(v):(a._events[t]=v,a._eventsCount++),a}function I(a,y){--a._eventsCount===0?a._events=new T:delete a._events[y]}function b(){this._events=new T,this._eventsCount=0}b.prototype.eventNames=function(){var y=[],A,h;if(this._eventsCount===0)return y;for(h in A=this._events)M.call(A,h)&&y.push(C?h.slice(1):h);return Object.getOwnPropertySymbols?y.concat(Object.getOwnPropertySymbols(A)):y},b.prototype.listeners=function(y){var A=C?C+y:y,h=this._events[A];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,v=h.length,t=new Array(v);f<v;f++)t[f]=h[f].fn;return t},b.prototype.listenerCount=function(y){var A=C?C+y:y,h=this._events[A];return h?h.fn?1:h.length:0},b.prototype.emit=function(y,A,h,f,v,t){var e=C?C+y:y;if(!this._events[e])return!1;var i=this._events[e],p=arguments.length,m,o;if(i.fn){switch(i.once&&this.removeListener(y,i.fn,void 0,!0),p){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,A),!0;case 3:return i.fn.call(i.context,A,h),!0;case 4:return i.fn.call(i.context,A,h,f),!0;case 5:return i.fn.call(i.context,A,h,f,v),!0;case 6:return i.fn.call(i.context,A,h,f,v,t),!0}for(o=1,m=new Array(p-1);o<p;o++)m[o-1]=arguments[o];i.fn.apply(i.context,m)}else{var n=i.length,r;for(o=0;o<n;o++)switch(i[o].once&&this.removeListener(y,i[o].fn,void 0,!0),p){case 1:i[o].fn.call(i[o].context);break;case 2:i[o].fn.call(i[o].context,A);break;case 3:i[o].fn.call(i[o].context,A,h);break;case 4:i[o].fn.call(i[o].context,A,h,f);break;default:if(!m)for(r=1,m=new Array(p-1);r<p;r++)m[r-1]=arguments[r];i[o].fn.apply(i[o].context,m)}}return!0},b.prototype.on=function(y,A,h){return O(this,y,A,h,!1)},b.prototype.once=function(y,A,h){return O(this,y,A,h,!0)},b.prototype.removeListener=function(y,A,h,f){var v=C?C+y:y;if(!this._events[v])return this;if(!A)return I(this,v),this;var t=this._events[v];if(t.fn)t.fn===A&&(!f||t.once)&&(!h||t.context===h)&&I(this,v);else{for(var e=0,i=[],p=t.length;e<p;e++)(t[e].fn!==A||f&&!t[e].once||h&&t[e].context!==h)&&i.push(t[e]);i.length?this._events[v]=i.length===1?i[0]:i:I(this,v)}return this},b.prototype.removeAllListeners=function(y){var A;return y?(A=C?C+y:y,this._events[A]&&I(this,A)):(this._events=new T,this._eventsCount=0),this},b.prototype.off=b.prototype.removeListener,b.prototype.addListener=b.prototype.on,b.prefixed=C,b.EventEmitter=b,X.exports=b},"./node_modules/url-toolkit/src/url-toolkit.js":function(X,B,x){(function(M){var C=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,T=/^(?=([^\/?#]*))\1([^]*)$/,R=/(?:\/|^)\.(?=\/)/g,O=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,I={buildAbsoluteURL:function(b,a,y){if(y=y||{},b=b.trim(),a=a.trim(),!a){if(!y.alwaysNormalize)return b;var A=I.parseURL(b);if(!A)throw new Error("Error trying to parse base URL.");return A.path=I.normalizePath(A.path),I.buildURLFromParts(A)}var h=I.parseURL(a);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return y.alwaysNormalize?(h.path=I.normalizePath(h.path),I.buildURLFromParts(h)):a;var f=I.parseURL(b);if(!f)throw new Error("Error trying to parse base URL.");if(!f.netLoc&&f.path&&f.path[0]!=="/"){var v=T.exec(f.path);f.netLoc=v[1],f.path=v[2]}f.netLoc&&!f.path&&(f.path="/");var t={scheme:f.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(t.netLoc=f.netLoc,h.path[0]!=="/"))if(!h.path)t.path=f.path,h.params||(t.params=f.params,h.query||(t.query=f.query));else{var e=f.path,i=e.substring(0,e.lastIndexOf("/")+1)+h.path;t.path=I.normalizePath(i)}return t.path===null&&(t.path=y.alwaysNormalize?I.normalizePath(h.path):h.path),I.buildURLFromParts(t)},parseURL:function(b){var a=C.exec(b);return a?{scheme:a[1]||"",netLoc:a[2]||"",path:a[3]||"",params:a[4]||"",query:a[5]||"",fragment:a[6]||""}:null},normalizePath:function(b){for(b=b.split("").reverse().join("").replace(R,"");b.length!==(b=b.replace(O,"")).length;);return b.split("").reverse().join("")},buildURLFromParts:function(b){return b.scheme+b.netLoc+b.path+b.params+b.query+b.fragment}};X.exports=I})()},"./node_modules/webworkify-webpack/index.js":function(X,B,x){function M(y){var A={};function h(v){if(A[v])return A[v].exports;var t=A[v]={i:v,l:!1,exports:{}};return y[v].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.m=y,h.c=A,h.i=function(v){return v},h.d=function(v,t,e){h.o(v,t)||Object.defineProperty(v,t,{configurable:!1,enumerable:!0,get:e})},h.r=function(v){Object.defineProperty(v,"__esModule",{value:!0})},h.n=function(v){var t=v&&v.__esModule?function(){return v.default}:function(){return v};return h.d(t,"a",t),t},h.o=function(v,t){return Object.prototype.hasOwnProperty.call(v,t)},h.p="/",h.oe=function(v){throw console.error(v),v};var f=h(h.s=ENTRY_MODULE);return f.default||f}var C="[\\.|\\-|\\+|\\w|/|@]+",T="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+C+").*?\\)";function R(y){return(y+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function O(y){return!isNaN(1*y)}function I(y,A,h){var f={};f[h]=[];var v=A.toString(),t=v.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!t)return f;for(var e=t[1],i=new RegExp("(\\\\n|\\W)"+R(e)+T,"g"),p;p=i.exec(v);)p[3]!=="dll-reference"&&f[h].push(p[3]);for(i=new RegExp("\\("+R(e)+'\\("(dll-reference\\s('+C+'))"\\)\\)'+T,"g");p=i.exec(v);)y[p[2]]||(f[h].push(p[1]),y[p[2]]=x(p[1]).m),f[p[2]]=f[p[2]]||[],f[p[2]].push(p[4]);for(var m=Object.keys(f),o=0;o<m.length;o++)for(var n=0;n<f[m[o]].length;n++)O(f[m[o]][n])&&(f[m[o]][n]=1*f[m[o]][n]);return f}function b(y){var A=Object.keys(y);return A.reduce(function(h,f){return h||y[f].length>0},!1)}function a(y,A){for(var h={main:[A]},f={main:[]},v={main:{}};b(h);)for(var t=Object.keys(h),e=0;e<t.length;e++){var i=t[e],p=h[i],m=p.pop();if(v[i]=v[i]||{},!(v[i][m]||!y[i][m])){v[i][m]=!0,f[i]=f[i]||[],f[i].push(m);for(var o=I(y,y[i][m],i),n=Object.keys(o),r=0;r<n.length;r++)h[n[r]]=h[n[r]]||[],h[n[r]]=h[n[r]].concat(o[n[r]])}}return f}X.exports=function(y,A){A=A||{};var h={main:x.m},f=A.all?{main:Object.keys(h.main)}:a(h,y),v="";Object.keys(f).filter(function(m){return m!=="main"}).forEach(function(m){for(var o=0;f[m][o];)o++;f[m].push(o),h[m][o]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",v=v+"var "+m+" = ("+M.toString().replace("ENTRY_MODULE",JSON.stringify(o))+")({"+f[m].map(function(n){return""+JSON.stringify(n)+": "+h[m][n].toString()}).join(",")+`});
`}),v=v+"new (("+M.toString().replace("ENTRY_MODULE",JSON.stringify(y))+")({"+f.main.map(function(m){return""+JSON.stringify(m)+": "+h.main[m].toString()}).join(",")+"}))(self);";var t=new window.Blob([v],{type:"text/javascript"});if(A.bare)return t;var e=window.URL||window.webkitURL||window.mozURL||window.msURL,i=e.createObjectURL(t),p=new window.Worker(i);return p.objectURL=i,p}},"./src/config.ts":function(X,B,x){x.r(B),x.d(B,"hlsDefaultConfig",function(){return r}),x.d(B,"mergeConfig",function(){return c}),x.d(B,"enableStreamingMode",function(){return d});var M=x("./src/controller/abr-controller.ts"),C=x("./src/controller/audio-stream-controller.ts"),T=x("./src/controller/audio-track-controller.ts"),R=x("./src/controller/subtitle-stream-controller.ts"),O=x("./src/controller/subtitle-track-controller.ts"),I=x("./src/controller/buffer-controller.ts"),b=x("./src/controller/timeline-controller.ts"),a=x("./src/controller/cap-level-controller.ts"),y=x("./src/controller/fps-controller.ts"),A=x("./src/controller/eme-controller.ts"),h=x("./src/controller/cmcd-controller.ts"),f=x("./src/utils/xhr-loader.ts"),v=x("./src/utils/fetch-loader.ts"),t=x("./src/utils/cues.ts"),e=x("./src/utils/mediakeys-helper.ts"),i=x("./src/utils/logger.ts");function p(){return p=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var E in u)Object.prototype.hasOwnProperty.call(u,E)&&(s[E]=u[E])}return s},p.apply(this,arguments)}function m(s,l){var u=Object.keys(s);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(s);l&&(E=E.filter(function(L){return Object.getOwnPropertyDescriptor(s,L).enumerable})),u.push.apply(u,E)}return u}function o(s){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?m(Object(u),!0).forEach(function(E){n(s,E,u[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(u)):m(Object(u)).forEach(function(E){Object.defineProperty(s,E,Object.getOwnPropertyDescriptor(u,E))})}return s}function n(s,l,u){return l in s?Object.defineProperty(s,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[l]=u,s}var r=o(o({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:f.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:M.default,bufferController:I.default,capLevelController:a.default,fpsController:y.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:e.requestMediaKeySystemAccess,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0},g()),{},{subtitleStreamController:R.SubtitleStreamController,subtitleTrackController:O.default,timelineController:b.TimelineController,audioStreamController:C.default,audioTrackController:T.default,emeController:A.default,cmcdController:h.default});function g(){return{cueHandler:t.default,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function c(s,l){if((l.liveSyncDurationCount||l.liveMaxLatencyDurationCount)&&(l.liveSyncDuration||l.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(l.liveMaxLatencyDurationCount!==void 0&&(l.liveSyncDurationCount===void 0||l.liveMaxLatencyDurationCount<=l.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(l.liveMaxLatencyDuration!==void 0&&(l.liveSyncDuration===void 0||l.liveMaxLatencyDuration<=l.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return p({},s,l)}function d(s){var l=s.loader;if(l!==v.default&&l!==f.default)i.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),s.progressive=!1;else{var u=Object(v.fetchSupported)();u&&(s.loader=v.default,s.progressive=!0,s.enableSoftwareAES=!0,i.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))}}},"./src/controller/abr-controller.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/utils/ewma-bandwidth-estimator.ts"),T=x("./src/events.ts"),R=x("./src/utils/buffer-helper.ts"),O=x("./src/errors.ts"),I=x("./src/types/loader.ts"),b=x("./src/utils/logger.ts");function a(h,f){for(var v=0;v<f.length;v++){var t=f[v];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(h,t.key,t)}}function y(h,f,v){return f&&a(h.prototype,f),v&&a(h,v),Object.defineProperty(h,"prototype",{writable:!1}),h}var A=function(){function h(v){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=v;var t=v.config;this.bwEstimator=new C.default(t.abrEwmaSlowVoD,t.abrEwmaFastVoD,t.abrEwmaDefaultEstimate),this.registerListeners()}var f=h.prototype;return f.registerListeners=function(){var t=this.hls;t.on(T.Events.FRAG_LOADING,this.onFragLoading,this),t.on(T.Events.FRAG_LOADED,this.onFragLoaded,this),t.on(T.Events.FRAG_BUFFERED,this.onFragBuffered,this),t.on(T.Events.LEVEL_LOADED,this.onLevelLoaded,this),t.on(T.Events.ERROR,this.onError,this)},f.unregisterListeners=function(){var t=this.hls;t.off(T.Events.FRAG_LOADING,this.onFragLoading,this),t.off(T.Events.FRAG_LOADED,this.onFragLoaded,this),t.off(T.Events.FRAG_BUFFERED,this.onFragBuffered,this),t.off(T.Events.LEVEL_LOADED,this.onLevelLoaded,this),t.off(T.Events.ERROR,this.onError,this)},f.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},f.onFragLoading=function(t,e){var i=e.frag;if(i.type===I.PlaylistLevelType.MAIN&&!this.timer){var p;this.fragCurrent=i,this.partCurrent=(p=e.part)!=null?p:null,this.timer=self.setInterval(this.onCheck,100)}},f.onLevelLoaded=function(t,e){var i=this.hls.config;e.details.live?this.bwEstimator.update(i.abrEwmaSlowLive,i.abrEwmaFastLive):this.bwEstimator.update(i.abrEwmaSlowVoD,i.abrEwmaFastVoD)},f._abandonRulesCheck=function(){var t=this.fragCurrent,e=this.partCurrent,i=this.hls,p=i.autoLevelEnabled,m=i.config,o=i.media;if(!(!t||!o)){var n=e?e.stats:t.stats,r=e?e.duration:t.duration;if(n.aborted){b.logger.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),this._nextAutoLevel=-1;return}if(!(!p||o.paused||!o.playbackRate||!o.readyState)){var g=performance.now()-n.loading.start,c=Math.abs(o.playbackRate);if(!(g<=500*r/c)){var d=i.levels,s=i.minAutoLevel,l=d[t.level],u=n.total||Math.max(n.loaded,Math.round(r*l.maxBitrate/8)),E=Math.max(1,n.bwEstimate?n.bwEstimate/8:n.loaded*1e3/g),L=(u-n.loaded)/E,S=o.currentTime,k=(R.BufferHelper.bufferInfo(o,S,m.maxBufferHole).end-S)/c;if(!(k>=2*r/c||L<=k)){var N=Number.POSITIVE_INFINITY,F;for(F=t.level-1;F>s;F--){var K=d[F].maxBitrate;if(N=r*K/(8*.8*E),N<k)break}if(!(N>=L)){var W=this.bwEstimator.getEstimate();b.logger.warn("Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+F+`
      Current BW estimate: `+(Object(M.isFiniteNumber)(W)?(W/1024).toFixed(3):"Unknown")+` Kb/s
      Estimated load time for current fragment: `+L.toFixed(3)+` s
      Estimated load time for the next fragment: `+N.toFixed(3)+` s
      Time to underbuffer: `+k.toFixed(3)+" s"),i.nextLoadLevel=F,this.bwEstimator.sample(g,n.loaded),this.clearTimer(),t.loader&&(this.fragCurrent=this.partCurrent=null,t.loader.abort()),i.trigger(T.Events.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:e,stats:n})}}}}}},f.onFragLoaded=function(t,e){var i=e.frag,p=e.part;if(i.type===I.PlaylistLevelType.MAIN&&Object(M.isFiniteNumber)(i.sn)){var m=p?p.stats:i.stats,o=p?p.duration:i.duration;if(this.clearTimer(),this.lastLoadedFragLevel=i.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var n=this.hls.levels[i.level],r=(n.loaded?n.loaded.bytes:0)+m.loaded,g=(n.loaded?n.loaded.duration:0)+o;n.loaded={bytes:r,duration:g},n.realBitrate=Math.round(8*r/g)}if(i.bitrateTest){var c={stats:m,frag:i,part:p,id:i.type};this.onFragBuffered(T.Events.FRAG_BUFFERED,c)}}},f.onFragBuffered=function(t,e){var i=e.frag,p=e.part,m=p?p.stats:i.stats;if(!m.aborted&&!(i.type!==I.PlaylistLevelType.MAIN||i.sn==="initSegment")){var o=m.parsing.end-m.loading.start;this.bwEstimator.sample(o,m.loaded),m.bwEstimate=this.bwEstimator.getEstimate(),i.bitrateTest?this.bitrateTestDelay=o/1e3:this.bitrateTestDelay=0}},f.onError=function(t,e){switch(e.details){case O.ErrorDetails.FRAG_LOAD_ERROR:case O.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer();break}},f.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},f.getNextABRAutoLevel=function(){var t=this.fragCurrent,e=this.partCurrent,i=this.hls,p=i.maxAutoLevel,m=i.config,o=i.minAutoLevel,n=i.media,r=e?e.duration:t?t.duration:0,g=n?n.currentTime:0,c=n&&n.playbackRate!==0?Math.abs(n.playbackRate):1,d=this.bwEstimator?this.bwEstimator.getEstimate():m.abrEwmaDefaultEstimate,s=(R.BufferHelper.bufferInfo(n,g,m.maxBufferHole).end-g)/c,l=this.findBestLevel(d,o,p,s,m.abrBandWidthFactor,m.abrBandWidthUpFactor);if(l>=0)return l;b.logger.trace((s?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var u=r?Math.min(r,m.maxStarvationDelay):m.maxStarvationDelay,E=m.abrBandWidthFactor,L=m.abrBandWidthUpFactor;if(!s){var S=this.bitrateTestDelay;if(S){var k=r?Math.min(r,m.maxLoadingDelay):m.maxLoadingDelay;u=k-S,b.logger.trace("bitrate test took "+Math.round(1e3*S)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*u)+" ms"),E=L=1}}return l=this.findBestLevel(d,o,p,s+u,E,L),Math.max(l,0)},f.findBestLevel=function(t,e,i,p,m,o){for(var n,r=this.fragCurrent,g=this.partCurrent,c=this.lastLoadedFragLevel,d=this.hls.levels,s=d[c],l=!!(s!=null&&(n=s.details)!==null&&n!==void 0&&n.live),u=s==null?void 0:s.codecSet,E=g?g.duration:r?r.duration:0,L=i;L>=e;L--){var S=d[L];if(!(!S||u&&S.codecSet!==u)){var k=S.details,N=(g?k==null?void 0:k.partTarget:k==null?void 0:k.averagetargetduration)||E,F=void 0;L<=c?F=m*t:F=o*t;var K=d[L].maxBitrate,W=K*N/F;if(b.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+L+"/"+Math.round(F)+"/"+K+"/"+N+"/"+p+"/"+W),F>K&&(!W||l&&!this.bitrateTestDelay||W<p))return L}}return-1},y(h,[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this.bwEstimator;if(t!==-1&&!e.canEstimate())return t;var i=this.getNextABRAutoLevel();return t!==-1&&this.hls.levels[i].loadError?t:(t!==-1&&(i=Math.min(t,i)),i)},set:function(t){this._nextAutoLevel=t}}]),h}();B.default=A},"./src/controller/audio-stream-controller.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/controller/base-stream-controller.ts"),T=x("./src/events.ts"),R=x("./src/utils/buffer-helper.ts"),O=x("./src/controller/fragment-tracker.ts"),I=x("./src/types/level.ts"),b=x("./src/types/loader.ts"),a=x("./src/loader/fragment.ts"),y=x("./src/demux/chunk-cache.ts"),A=x("./src/demux/transmuxer-interface.ts"),h=x("./src/types/transmuxer.ts"),f=x("./src/controller/fragment-finders.ts"),v=x("./src/utils/discontinuities.ts"),t=x("./src/errors.ts");function e(){return e=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var g=arguments[r];for(var c in g)Object.prototype.hasOwnProperty.call(g,c)&&(n[c]=g[c])}return n},e.apply(this,arguments)}function i(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,p(n,r)}function p(n,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,d){return c.__proto__=d,c},p(n,r)}var m=100,o=function(n){i(r,n);function r(c,d){var s;return s=n.call(this,c,d,"[audio-stream-controller]")||this,s.videoBuffer=null,s.videoTrackCC=-1,s.waitingVideoCC=-1,s.audioSwitch=!1,s.trackId=-1,s.waitingData=null,s.mainDetails=null,s.bufferFlushed=!1,s.cachedTrackLoadedData=null,s._registerListeners(),s}var g=r.prototype;return g.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},g._registerListeners=function(){var d=this.hls;d.on(T.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.on(T.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.on(T.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.on(T.Events.LEVEL_LOADED,this.onLevelLoaded,this),d.on(T.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),d.on(T.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),d.on(T.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),d.on(T.Events.ERROR,this.onError,this),d.on(T.Events.BUFFER_RESET,this.onBufferReset,this),d.on(T.Events.BUFFER_CREATED,this.onBufferCreated,this),d.on(T.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),d.on(T.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),d.on(T.Events.FRAG_BUFFERED,this.onFragBuffered,this)},g._unregisterListeners=function(){var d=this.hls;d.off(T.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.off(T.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.off(T.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.off(T.Events.LEVEL_LOADED,this.onLevelLoaded,this),d.off(T.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),d.off(T.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),d.off(T.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),d.off(T.Events.ERROR,this.onError,this),d.off(T.Events.BUFFER_RESET,this.onBufferReset,this),d.off(T.Events.BUFFER_CREATED,this.onBufferCreated,this),d.off(T.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),d.off(T.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),d.off(T.Events.FRAG_BUFFERED,this.onFragBuffered,this)},g.onInitPtsFound=function(d,s){var l=s.frag,u=s.id,E=s.initPTS;if(u==="main"){var L=l.cc;this.initPTS[l.cc]=E,this.log("InitPTS for cc: "+L+" found from main: "+E),this.videoTrackCC=L,this.state===C.State.WAITING_INIT_PTS&&this.tick()}},g.startLoad=function(d){if(!this.levels){this.startPosition=d,this.state=C.State.STOPPED;return}var s=this.lastCurrentTime;this.stopLoad(),this.setInterval(m),this.fragLoadError=0,s>0&&d===-1?(this.log("Override startPosition with lastCurrentTime @"+s.toFixed(3)),d=s,this.state=C.State.IDLE):(this.loadedmetadata=!1,this.state=C.State.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=d,this.tick()},g.doTick=function(){switch(this.state){case C.State.IDLE:this.doTickIdle();break;case C.State.WAITING_TRACK:{var d,s=this.levels,l=this.trackId,u=s==null||(d=s[l])===null||d===void 0?void 0:d.details;if(u){if(this.waitForCdnTuneIn(u))break;this.state=C.State.WAITING_INIT_PTS}break}case C.State.FRAG_LOADING_WAITING_RETRY:{var E,L=performance.now(),S=this.retryDate;(!S||L>=S||(E=this.media)!==null&&E!==void 0&&E.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=C.State.IDLE);break}case C.State.WAITING_INIT_PTS:{var k=this.waitingData;if(k){var N=k.frag,F=k.part,K=k.cache,W=k.complete;if(this.initPTS[N.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=C.State.FRAG_LOADING;var z=K.flush(),H={frag:N,part:F,payload:z,networkDetails:null};this._handleFragmentLoadProgress(H),W&&n.prototype._handleFragmentLoadComplete.call(this,H)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log("Waiting fragment cc ("+N.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var Y=this.getLoadPosition(),Q=R.BufferHelper.bufferInfo(this.mediaBuffer,Y,this.config.maxBufferHole),Z=Object(f.fragmentWithinToleranceTest)(Q.end,this.config.maxFragLookUpTolerance,N);Z<0&&(this.log("Waiting fragment cc ("+N.cc+") @ "+N.start+" cancelled because another fragment at "+Q.end+" is needed"),this.clearWaitingFragment())}}else this.state=C.State.IDLE}}this.onTickEnd()},g.clearWaitingFragment=function(){var d=this.waitingData;d&&(this.fragmentTracker.removeFragment(d.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=C.State.IDLE)},g.resetLoadingState=function(){this.clearWaitingFragment(),n.prototype.resetLoadingState.call(this)},g.onTickEnd=function(){var d=this.media;if(!(!d||!d.readyState)){var s=this.mediaBuffer?this.mediaBuffer:d,l=s.buffered;!this.loadedmetadata&&l.length&&(this.loadedmetadata=!0),this.lastCurrentTime=d.currentTime}},g.doTickIdle=function(){var d,s,l=this.hls,u=this.levels,E=this.media,L=this.trackId,S=l.config;if(!(!u||!u[L])&&!(!E&&(this.startFragRequested||!S.startFragPrefetch))){var k=u[L],N=k.details;if(!N||N.live&&this.levelLastLoaded!==L||this.waitForCdnTuneIn(N)){this.state=C.State.WAITING_TRACK;return}var F=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&F&&(this.bufferFlushed=!1,this.afterBufferFlushed(F,a.ElementaryStreamTypes.AUDIO,b.PlaylistLevelType.AUDIO));var K=this.getFwdBufferInfo(F,b.PlaylistLevelType.AUDIO);if(K!==null){var W=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,b.PlaylistLevelType.MAIN),z=K.len,H=this.getMaxBufferLength(W==null?void 0:W.len),Y=this.audioSwitch;if(!(z>=H&&!Y)){if(!Y&&this._streamEnded(K,N)){l.trigger(T.Events.BUFFER_EOS,{type:"audio"}),this.state=C.State.ENDED;return}var Q=N.fragments,Z=Q[0].start,$=K.end;if(Y&&E){var ee=this.getLoadPosition();$=ee,N.PTSKnown&&ee<Z&&(K.end>Z||K.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),E.currentTime=Z+.05)}if(!(W&&$>W.end+N.targetduration)&&!((!W||!W.len)&&K.len)){var ie=this.getNextFragment($,N);if(!ie){this.bufferFlushed=!0;return}((d=ie.decryptdata)===null||d===void 0?void 0:d.keyFormat)==="identity"&&!((s=ie.decryptdata)!==null&&s!==void 0&&s.key)?this.loadKey(ie,N):this.loadFragment(ie,N,$)}}}}},g.getMaxBufferLength=function(d){var s=n.prototype.getMaxBufferLength.call(this);return d?Math.max(s,d):s},g.onMediaDetaching=function(){this.videoBuffer=null,n.prototype.onMediaDetaching.call(this)},g.onAudioTracksUpdated=function(d,s){var l=s.audioTracks;this.resetTransmuxer(),this.levels=l.map(function(u){return new I.Level(u)})},g.onAudioTrackSwitching=function(d,s){var l=!!s.url;this.trackId=s.id;var u=this.fragCurrent;u!=null&&u.loader&&u.loader.abort(),this.fragCurrent=null,this.clearWaitingFragment(),l?this.setInterval(m):this.resetTransmuxer(),l?(this.audioSwitch=!0,this.state=C.State.IDLE):this.state=C.State.STOPPED,this.tick()},g.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},g.onLevelLoaded=function(d,s){this.mainDetails=s.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(T.Events.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)},g.onAudioTrackLoaded=function(d,s){var l;if(this.mainDetails==null){this.cachedTrackLoadedData=s;return}var u=this.levels,E=s.details,L=s.id;if(!u){this.warn("Audio tracks were reset while loading level "+L);return}this.log("Track "+L+" loaded ["+E.startSN+","+E.endSN+"],duration:"+E.totalduration);var S=u[L],k=0;if(E.live||(l=S.details)!==null&&l!==void 0&&l.live){var N=this.mainDetails;if(E.fragments[0]||(E.deltaUpdateFailed=!0),E.deltaUpdateFailed||!N)return;!S.details&&E.hasProgramDateTime&&N.hasProgramDateTime?(Object(v.alignMediaPlaylistByPDT)(E,N),k=E.fragments[0].start):k=this.alignPlaylists(E,S.details)}S.details=E,this.levelLastLoaded=L,!this.startFragRequested&&(this.mainDetails||!E.live)&&this.setStartPosition(S.details,k),this.state===C.State.WAITING_TRACK&&!this.waitForCdnTuneIn(E)&&(this.state=C.State.IDLE),this.tick()},g._handleFragmentLoadProgress=function(d){var s,l=d.frag,u=d.part,E=d.payload,L=this.config,S=this.trackId,k=this.levels;if(!k){this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+l.sn+" of level "+l.level+" will not be buffered");return}var N=k[S];console.assert(N,"Audio track is defined on fragment load progress");var F=N.details;console.assert(F,"Audio track details are defined on fragment load progress");var K=L.defaultAudioCodec||N.audioCodec||"mp4a.40.2",W=this.transmuxer;W||(W=this.transmuxer=new A.default(this.hls,b.PlaylistLevelType.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var z=this.initPTS[l.cc],H=(s=l.initSegment)===null||s===void 0?void 0:s.data;if(z!==void 0){var Y=!1,Q=u?u.index:-1,Z=Q!==-1,$=new h.ChunkMetadata(l.level,l.sn,l.stats.chunkCount,E.byteLength,Q,Z);W.push(E,H,K,"",l,u,F.totalduration,Y,$,z)}else{this.log("Unknown video PTS for cc "+l.cc+", waiting for video PTS before demuxing audio frag "+l.sn+" of ["+F.startSN+" ,"+F.endSN+"],track "+S);var ee=this.waitingData=this.waitingData||{frag:l,part:u,cache:new y.default,complete:!1},ie=ee.cache;ie.push(new Uint8Array(E)),this.waitingVideoCC=this.videoTrackCC,this.state=C.State.WAITING_INIT_PTS}},g._handleFragmentLoadComplete=function(d){if(this.waitingData){this.waitingData.complete=!0;return}n.prototype._handleFragmentLoadComplete.call(this,d)},g.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},g.onBufferCreated=function(d,s){var l=s.tracks.audio;l&&(this.mediaBuffer=l.buffer||null),s.tracks.video&&(this.videoBuffer=s.tracks.video.buffer||null)},g.onFragBuffered=function(d,s){var l=s.frag,u=s.part;if(l.type===b.PlaylistLevelType.AUDIO){if(this.fragContextChanged(l)){this.warn("Fragment "+l.sn+(u?" p: "+u.index:"")+" of level "+l.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch);return}l.sn!=="initSegment"&&(this.fragPrevious=l,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger(T.Events.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(l,u)}},g.onError=function(d,s){switch(s.details){case t.ErrorDetails.FRAG_LOAD_ERROR:case t.ErrorDetails.FRAG_LOAD_TIMEOUT:case t.ErrorDetails.KEY_LOAD_ERROR:case t.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(b.PlaylistLevelType.AUDIO,s);break;case t.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case t.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==C.State.ERROR&&this.state!==C.State.STOPPED&&(this.state=s.fatal?C.State.ERROR:C.State.IDLE,this.warn(s.details+" while loading frag, switching to "+this.state+" state"));break;case t.ErrorDetails.BUFFER_FULL_ERROR:if(s.parent==="audio"&&(this.state===C.State.PARSING||this.state===C.State.PARSED)){var l=!0,u=this.getFwdBufferInfo(this.mediaBuffer,b.PlaylistLevelType.AUDIO);u&&u.len>.5&&(l=!this.reduceMaxBufferLength(u.len)),l&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,n.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}break}},g.onBufferFlushed=function(d,s){var l=s.type;l===a.ElementaryStreamTypes.AUDIO&&(this.bufferFlushed=!0)},g._handleTransmuxComplete=function(d){var s,l="audio",u=this.hls,E=d.remuxResult,L=d.chunkMeta,S=this.getCurrentContext(L);if(!S){this.warn("The loading context changed while buffering fragment "+L.sn+" of level "+L.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(L.level);return}var k=S.frag,N=S.part,F=S.level.details,K=E.audio,W=E.text,z=E.id3,H=E.initSegment;if(!(this.fragContextChanged(k)||!F)){if(this.state=C.State.PARSING,this.audioSwitch&&K&&this.completeAudioSwitch(),H!=null&&H.tracks&&(this._bufferInitSegment(H.tracks,k,L),u.trigger(T.Events.FRAG_PARSING_INIT_SEGMENT,{frag:k,id:l,tracks:H.tracks})),K){var Y=K.startPTS,Q=K.endPTS,Z=K.startDTS,$=K.endDTS;N&&(N.elementaryStreams[a.ElementaryStreamTypes.AUDIO]={startPTS:Y,endPTS:Q,startDTS:Z,endDTS:$}),k.setElementaryStreamInfo(a.ElementaryStreamTypes.AUDIO,Y,Q,Z,$),this.bufferFragmentData(K,k,N,L)}if(z!=null&&(s=z.samples)!==null&&s!==void 0&&s.length){var ee=e({id:l,frag:k,details:F},z);u.trigger(T.Events.FRAG_PARSING_METADATA,ee)}if(W){var ie=e({id:l,frag:k,details:F},W);u.trigger(T.Events.FRAG_PARSING_USERDATA,ie)}}},g._bufferInitSegment=function(d,s,l){if(this.state===C.State.PARSING){d.video&&delete d.video;var u=d.audio;if(!!u){u.levelCodec=u.codec,u.id="audio",this.log("Init audio buffer, container:"+u.container+", codecs[parsed]=["+u.codec+"]"),this.hls.trigger(T.Events.BUFFER_CODECS,d);var E=u.initSegment;if(E!=null&&E.byteLength){var L={type:"audio",frag:s,part:null,chunkMeta:l,parent:s.type,data:E};this.hls.trigger(T.Events.BUFFER_APPENDING,L)}this.tick()}}},g.loadFragment=function(d,s,l){var u=this.fragmentTracker.getState(d);this.fragCurrent=d,(this.audioSwitch||u===O.FragmentState.NOT_LOADED||u===O.FragmentState.PARTIAL)&&(d.sn==="initSegment"?this._loadInitSegment(d):s.live&&!Object(M.isFiniteNumber)(this.initPTS[d.cc])?(this.log("Waiting for video PTS in continuity counter "+d.cc+" of live stream before loading audio fragment "+d.sn+" of level "+this.trackId),this.state=C.State.WAITING_INIT_PTS):(this.startFragRequested=!0,n.prototype.loadFragment.call(this,d,s,l)))},g.completeAudioSwitch=function(){var d=this.hls,s=this.media,l=this.trackId;s&&(this.log("Switching audio track : flushing all audio"),n.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,d.trigger(T.Events.AUDIO_TRACK_SWITCHED,{id:l})},r}(C.default);B.default=o},"./src/controller/audio-track-controller.ts":function(X,B,x){x.r(B);var M=x("./src/events.ts"),C=x("./src/errors.ts"),T=x("./src/controller/base-playlist-controller.ts"),R=x("./src/types/loader.ts");function O(A,h){for(var f=0;f<h.length;f++){var v=h[f];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(A,v.key,v)}}function I(A,h,f){return h&&O(A.prototype,h),f&&O(A,f),Object.defineProperty(A,"prototype",{writable:!1}),A}function b(A,h){A.prototype=Object.create(h.prototype),A.prototype.constructor=A,a(A,h)}function a(A,h){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,t){return v.__proto__=t,v},a(A,h)}var y=function(A){b(h,A);function h(v){var t;return t=A.call(this,v,"[audio-track-controller]")||this,t.tracks=[],t.groupId=null,t.tracksInGroup=[],t.trackId=-1,t.trackName="",t.selectDefaultTrack=!0,t.registerListeners(),t}var f=h.prototype;return f.registerListeners=function(){var t=this.hls;t.on(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),t.on(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),t.on(M.Events.LEVEL_LOADING,this.onLevelLoading,this),t.on(M.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(M.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.on(M.Events.ERROR,this.onError,this)},f.unregisterListeners=function(){var t=this.hls;t.off(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),t.off(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),t.off(M.Events.LEVEL_LOADING,this.onLevelLoading,this),t.off(M.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(M.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.off(M.Events.ERROR,this.onError,this)},f.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,A.prototype.destroy.call(this)},f.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},f.onManifestParsed=function(t,e){this.tracks=e.audioTracks||[]},f.onAudioTrackLoaded=function(t,e){var i=e.id,p=e.details,m=this.tracksInGroup[i];if(!m){this.warn("Invalid audio track id "+i);return}var o=m.details;m.details=e.details,this.log("audioTrack "+i+" loaded ["+p.startSN+"-"+p.endSN+"]"),i===this.trackId&&(this.retryCount=0,this.playlistLoaded(i,e,o))},f.onLevelLoading=function(t,e){this.switchLevel(e.level)},f.onLevelSwitching=function(t,e){this.switchLevel(e.level)},f.switchLevel=function(t){var e=this.hls.levels[t];if(!!(e!=null&&e.audioGroupIds)){var i=e.audioGroupIds[e.urlId];if(this.groupId!==i){this.groupId=i;var p=this.tracks.filter(function(o){return!i||o.groupId===i});this.selectDefaultTrack&&!p.some(function(o){return o.default})&&(this.selectDefaultTrack=!1),this.tracksInGroup=p;var m={audioTracks:p};this.log("Updating audio tracks, "+p.length+' track(s) found in "'+i+'" group-id'),this.hls.trigger(M.Events.AUDIO_TRACKS_UPDATED,m),this.selectInitialTrack()}}},f.onError=function(t,e){A.prototype.onError.call(this,t,e),!(e.fatal||!e.context)&&e.context.type===R.PlaylistContextType.AUDIO_TRACK&&e.context.id===this.trackId&&e.context.groupId===this.groupId&&this.retryLoadingOrFail(e)},f.setAudioTrack=function(t){var e=this.tracksInGroup;if(t<0||t>=e.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();var i=e[this.trackId];this.log("Now switching to audio-track index "+t);var p=e[t],m=p.id,o=p.groupId,n=o===void 0?"":o,r=p.name,g=p.type,c=p.url;if(this.trackId=t,this.trackName=r,this.selectDefaultTrack=!1,this.hls.trigger(M.Events.AUDIO_TRACK_SWITCHING,{id:m,groupId:n,name:r,type:g,url:c}),!(p.details&&!p.details.live)){var d=this.switchParams(p.url,i==null?void 0:i.details);this.loadPlaylist(d)}},f.selectInitialTrack=function(){var t=this.tracksInGroup;console.assert(t.length,"Initial audio track should be selected when tracks are known");var e=this.trackName,i=this.findTrackId(e)||this.findTrackId();i!==-1?this.setAudioTrack(i):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},f.findTrackId=function(t){for(var e=this.tracksInGroup,i=0;i<e.length;i++){var p=e[i];if((!this.selectDefaultTrack||p.default)&&(!t||t===p.name))return p.id}return-1},f.loadPlaylist=function(t){var e=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(e)){var i=e.id,p=e.groupId,m=e.url;if(t)try{m=t.addDirectives(m)}catch(o){this.warn("Could not construct new URL with HLS Delivery Directives: "+o)}this.log("loading audio-track playlist for id: "+i),this.clearTimer(),this.hls.trigger(M.Events.AUDIO_TRACK_LOADING,{url:m,id:i,groupId:p,deliveryDirectives:t||null})}},I(h,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(t){this.selectDefaultTrack=!1,this.setAudioTrack(t)}}]),h}(T.default);B.default=y},"./src/controller/base-playlist-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return I});var M=x("./src/polyfills/number.ts"),C=x("./src/types/level.ts"),T=x("./src/controller/level-helper.ts"),R=x("./src/utils/logger.ts"),O=x("./src/errors.ts"),I=function(){function b(y,A){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=R.logger.log.bind(R.logger,A+":"),this.warn=R.logger.warn.bind(R.logger,A+":"),this.hls=y}var a=b.prototype;return a.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},a.onError=function(A,h){h.fatal&&h.type===O.ErrorTypes.NETWORK_ERROR&&this.clearTimer()},a.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},a.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},a.stopLoad=function(){this.canLoad=!1,this.clearTimer()},a.switchParams=function(A,h){var f=h==null?void 0:h.renditionReports;if(f)for(var v=0;v<f.length;v++){var t=f[v],e=""+t.URI;if(e===A.slice(-e.length)){var i=parseInt(t["LAST-MSN"]),p=parseInt(t["LAST-PART"]);if(h&&this.hls.config.lowLatencyMode){var m=Math.min(h.age-h.partTarget,h.targetduration);p!==void 0&&m>h.partTarget&&(p+=1)}if(Object(M.isFiniteNumber)(i))return new C.HlsUrlParameters(i,Object(M.isFiniteNumber)(p)?p:void 0,C.HlsSkip.No)}}},a.loadPlaylist=function(A){},a.shouldLoadTrack=function(A){return this.canLoad&&A&&!!A.url&&(!A.details||A.details.live)},a.playlistLoaded=function(A,h,f){var v=this,t=h.details,e=h.stats,i=e.loading.end?Math.max(0,self.performance.now()-e.loading.end):0;if(t.advancedDateTime=Date.now()-i,t.live||f!=null&&f.live){if(t.reloaded(f),f&&this.log("live playlist "+A+" "+(t.advanced?"REFRESHED "+t.lastPartSn+"-"+t.lastPartIndex:"MISSED")),f&&t.fragments.length>0&&Object(T.mergeDetails)(f,t),!this.canLoad||!t.live)return;var p,m=void 0,o=void 0;if(t.canBlockReload&&t.endSN&&t.advanced){var n=this.hls.config.lowLatencyMode,r=t.lastPartSn,g=t.endSN,c=t.lastPartIndex,d=c!==-1,s=r===g,l=n?0:c;d?(m=s?g+1:r,o=s?l:c+1):m=g+1;var u=t.age,E=u+t.ageHeader,L=Math.min(E-t.partTarget,t.targetduration*1.5);if(L>0){if(f&&L>f.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+f.tuneInGoal+" to: "+L+" with playlist age: "+t.age),L=0;else{var S=Math.floor(L/t.targetduration);if(m+=S,o!==void 0){var k=Math.round(L%t.targetduration/t.partTarget);o+=k}this.log("CDN Tune-in age: "+t.ageHeader+"s last advanced "+u.toFixed(2)+"s goal: "+L+" skip sn "+S+" to part "+o)}t.tuneInGoal=L}if(p=this.getDeliveryDirectives(t,h.deliveryDirectives,m,o),n||!s){this.loadPlaylist(p);return}}else p=this.getDeliveryDirectives(t,h.deliveryDirectives,m,o);var N=Object(T.computeReloadInterval)(t,e);m!==void 0&&t.canBlockReload&&(N-=t.partTarget||1),this.log("reload live playlist "+A+" in "+Math.round(N)+" ms"),this.timer=self.setTimeout(function(){return v.loadPlaylist(p)},N)}else this.clearTimer()},a.getDeliveryDirectives=function(A,h,f,v){var t=Object(C.getSkipValue)(A,f);return h!=null&&h.skip&&A.deltaUpdateFailed&&(f=h.msn,v=h.part,t=C.HlsSkip.No),new C.HlsUrlParameters(f,v,t)},a.retryLoadingOrFail=function(A){var h=this,f=this.hls.config,v=this.retryCount<f.levelLoadingMaxRetry;if(v){var t;if(this.retryCount++,A.details.indexOf("LoadTimeOut")>-1&&(t=A.context)!==null&&t!==void 0&&t.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+A.details+'"'),this.loadPlaylist();else{var e=Math.min(Math.pow(2,this.retryCount)*f.levelLoadingRetryDelay,f.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout(function(){return h.loadPlaylist()},e),this.warn("retry playlist loading #"+this.retryCount+" in "+e+' ms after "'+A.details+'"')}}else this.warn('cannot recover from error "'+A.details+'"'),this.clearTimer(),A.fatal=!0;return v},b}()},"./src/controller/base-stream-controller.ts":function(X,B,x){x.r(B),x.d(B,"State",function(){return g}),x.d(B,"default",function(){return c});var M=x("./src/polyfills/number.ts"),C=x("./src/task-loop.ts"),T=x("./src/controller/fragment-tracker.ts"),R=x("./src/utils/buffer-helper.ts"),O=x("./src/utils/logger.ts"),I=x("./src/events.ts"),b=x("./src/errors.ts"),a=x("./src/types/transmuxer.ts"),y=x("./src/utils/mp4-tools.ts"),A=x("./src/utils/discontinuities.ts"),h=x("./src/controller/fragment-finders.ts"),f=x("./src/controller/level-helper.ts"),v=x("./src/loader/fragment-loader.ts"),t=x("./src/crypt/decrypter.ts"),e=x("./src/utils/time-ranges.ts"),i=x("./src/types/loader.ts");function p(d,s){for(var l=0;l<s.length;l++){var u=s[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(d,u.key,u)}}function m(d,s,l){return s&&p(d.prototype,s),l&&p(d,l),Object.defineProperty(d,"prototype",{writable:!1}),d}function o(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function n(d,s){d.prototype=Object.create(s.prototype),d.prototype.constructor=d,r(d,s)}function r(d,s){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,E){return u.__proto__=E,u},r(d,s)}var g={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},c=function(d){n(s,d);function s(u,E,L){var S;return S=d.call(this)||this,S.hls=void 0,S.fragPrevious=null,S.fragCurrent=null,S.fragmentTracker=void 0,S.transmuxer=null,S._state=g.STOPPED,S.media=null,S.mediaBuffer=null,S.config=void 0,S.bitrateTest=!1,S.lastCurrentTime=0,S.nextLoadPosition=0,S.startPosition=0,S.loadedmetadata=!1,S.fragLoadError=0,S.retryDate=0,S.levels=null,S.fragmentLoader=void 0,S.levelLastLoaded=null,S.startFragRequested=!1,S.decrypter=void 0,S.initPTS=[],S.onvseeking=null,S.onvended=null,S.logPrefix="",S.log=void 0,S.warn=void 0,S.logPrefix=L,S.log=O.logger.log.bind(O.logger,L+":"),S.warn=O.logger.warn.bind(O.logger,L+":"),S.hls=u,S.fragmentLoader=new v.default(u.config),S.fragmentTracker=E,S.config=u.config,S.decrypter=new t.default(u,u.config),u.on(I.Events.KEY_LOADED,S.onKeyLoaded,o(S)),u.on(I.Events.LEVEL_SWITCHING,S.onLevelSwitching,o(S)),S}var l=s.prototype;return l.doTick=function(){this.onTickEnd()},l.onTickEnd=function(){},l.startLoad=function(E){},l.stopLoad=function(){this.fragmentLoader.abort();var E=this.fragCurrent;E&&this.fragmentTracker.removeFragment(E),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=g.STOPPED},l._streamEnded=function(E,L){var S=this.fragCurrent,k=this.fragmentTracker;if(!L.live&&S&&this.media&&S.sn>=L.endSN&&!E.nextStart){var N=L.partList;if(N!=null&&N.length){var F=N[N.length-1],K=R.BufferHelper.isBuffered(this.media,F.start+F.duration/2);return K}var W=k.getState(S);return W===T.FragmentState.PARTIAL||W===T.FragmentState.OK}return!1},l.onMediaAttached=function(E,L){var S=this.media=this.mediaBuffer=L.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),S.addEventListener("seeking",this.onvseeking),S.addEventListener("ended",this.onvended);var k=this.config;this.levels&&k.autoStartLoad&&this.state===g.STOPPED&&this.startLoad(k.startPosition)},l.onMediaDetaching=function(){var E=this.media;E!=null&&E.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),E&&this.onvseeking&&this.onvended&&(E.removeEventListener("seeking",this.onvseeking),E.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},l.onMediaSeeking=function(){var E=this.config,L=this.fragCurrent,S=this.media,k=this.mediaBuffer,N=this.state,F=S?S.currentTime:0,K=R.BufferHelper.bufferInfo(k||S,F,E.maxBufferHole);if(this.log("media seeking to "+(Object(M.isFiniteNumber)(F)?F.toFixed(3):F)+", state: "+N),N===g.ENDED)this.resetLoadingState();else if(L&&!K.len){var W=E.maxFragLookUpTolerance,z=L.start-W,H=L.start+L.duration+W,Y=F>H;(F<z||Y)&&(Y&&L.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),L.loader.abort()),this.resetLoadingState())}S&&(this.lastCurrentTime=F),!this.loadedmetadata&&!K.len&&(this.nextLoadPosition=this.startPosition=F),this.tickImmediate()},l.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},l.onKeyLoaded=function(E,L){if(!(this.state!==g.KEY_LOADING||L.frag!==this.fragCurrent||!this.levels)){this.state=g.IDLE;var S=this.levels[L.frag.level].details;S&&this.loadFragment(L.frag,S,L.frag.start)}},l.onLevelSwitching=function(E,L){this.fragLoadError=0},l.onHandlerDestroying=function(){this.stopLoad(),d.prototype.onHandlerDestroying.call(this)},l.onHandlerDestroyed=function(){this.state=g.STOPPED,this.hls.off(I.Events.KEY_LOADED,this.onKeyLoaded,this),this.hls.off(I.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,d.prototype.onHandlerDestroyed.call(this)},l.loadKey=function(E,L){this.log("Loading key for "+E.sn+" of ["+L.startSN+"-"+L.endSN+"], "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+E.level),this.state=g.KEY_LOADING,this.fragCurrent=E,this.hls.trigger(I.Events.KEY_LOADING,{frag:E})},l.loadFragment=function(E,L,S){this._loadFragForPlayback(E,L,S)},l._loadFragForPlayback=function(E,L,S){var k=this,N=function(K){if(k.fragContextChanged(E)){k.warn("Fragment "+E.sn+(K.part?" p: "+K.part.index:"")+" of level "+E.level+" was dropped during download."),k.fragmentTracker.removeFragment(E);return}E.stats.chunkCount++,k._handleFragmentLoadProgress(K)};this._doFragLoad(E,L,S,N).then(function(F){if(!!F){k.fragLoadError=0;var K=k.state;if(k.fragContextChanged(E)){(K===g.FRAG_LOADING||!k.fragCurrent&&K===g.PARSING)&&(k.fragmentTracker.removeFragment(E),k.state=g.IDLE);return}"payload"in F&&(k.log("Loaded fragment "+E.sn+" of level "+E.level),k.hls.trigger(I.Events.FRAG_LOADED,F)),k._handleFragmentLoadComplete(F)}}).catch(function(F){k.state===g.STOPPED||k.state===g.ERROR||(k.warn(F),k.resetFragmentLoading(E))})},l.flushMainBuffer=function(E,L,S){if(S===void 0&&(S=null),!!(E-L)){var k={startOffset:E,endOffset:L,type:S};this.fragLoadError=0,this.hls.trigger(I.Events.BUFFER_FLUSHING,k)}},l._loadInitSegment=function(E){var L=this;this._doFragLoad(E).then(function(S){if(!S||L.fragContextChanged(E)||!L.levels)throw new Error("init load aborted");return S}).then(function(S){var k=L.hls,N=S.payload,F=E.decryptdata;if(N&&N.byteLength>0&&F&&F.key&&F.iv&&F.method==="AES-128"){var K=self.performance.now();return L.decrypter.webCryptoDecrypt(new Uint8Array(N),F.key.buffer,F.iv.buffer).then(function(W){var z=self.performance.now();return k.trigger(I.Events.FRAG_DECRYPTED,{frag:E,payload:W,stats:{tstart:K,tdecrypt:z}}),S.payload=W,S})}return S}).then(function(S){var k=L.fragCurrent,N=L.hls,F=L.levels;if(!F)throw new Error("init load aborted, missing levels");var K=F[E.level].details;console.assert(K,"Level details are defined when init segment is loaded");var W=E.stats;L.state=g.IDLE,L.fragLoadError=0,E.data=new Uint8Array(S.payload),W.parsing.start=W.buffering.start=self.performance.now(),W.parsing.end=W.buffering.end=self.performance.now(),S.frag===k&&N.trigger(I.Events.FRAG_BUFFERED,{stats:W,frag:k,part:null,id:E.type}),L.tick()}).catch(function(S){L.state===g.STOPPED||L.state===g.ERROR||(L.warn(S),L.resetFragmentLoading(E))})},l.fragContextChanged=function(E){var L=this.fragCurrent;return!E||!L||E.level!==L.level||E.sn!==L.sn||E.urlId!==L.urlId},l.fragBufferedComplete=function(E,L){var S=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+E.type+" sn: "+E.sn+(L?" part: "+L.index:"")+" of "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+E.level+" "+(S?e.default.toString(R.BufferHelper.getBuffered(S)):"(detached)")),this.state=g.IDLE,S&&(!this.loadedmetadata&&S.buffered.length&&this.fragCurrent===this.fragPrevious&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())},l.seekToStartPos=function(){},l._handleFragmentLoadComplete=function(E){var L=this.transmuxer;if(!!L){var S=E.frag,k=E.part,N=E.partsLoaded,F=!N||N.length===0||N.some(function(W){return!W}),K=new a.ChunkMetadata(S.level,S.sn,S.stats.chunkCount+1,0,k?k.index:-1,!F);L.flush(K)}},l._handleFragmentLoadProgress=function(E){},l._doFragLoad=function(E,L,S,k){var N=this;if(S===void 0&&(S=null),!this.levels)throw new Error("frag load aborted, missing levels");if(S=Math.max(E.start,S||0),this.config.lowLatencyMode&&L){var F=L.partList;if(F&&k){S>E.end&&L.fragmentHint&&(E=L.fragmentHint);var K=this.getNextPart(F,E,S);if(K>-1){var W=F[K];return this.log("Loading part sn: "+E.sn+" p: "+W.index+" cc: "+E.cc+" of playlist ["+L.startSN+"-"+L.endSN+"] parts [0-"+K+"-"+(F.length-1)+"] "+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+E.level+", target: "+parseFloat(S.toFixed(3))),this.nextLoadPosition=W.start+W.duration,this.state=g.FRAG_LOADING,this.hls.trigger(I.Events.FRAG_LOADING,{frag:E,part:F[K],targetBufferTime:S}),this.doFragPartsLoad(E,F,K,k).catch(function(z){return N.handleFragLoadError(z)})}else if(!E.url||this.loadedEndOfParts(F,S))return Promise.resolve(null)}}return this.log("Loading fragment "+E.sn+" cc: "+E.cc+" "+(L?"of ["+L.startSN+"-"+L.endSN+"] ":"")+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+E.level+", target: "+parseFloat(S.toFixed(3))),Object(M.isFiniteNumber)(E.sn)&&!this.bitrateTest&&(this.nextLoadPosition=E.start+E.duration),this.state=g.FRAG_LOADING,this.hls.trigger(I.Events.FRAG_LOADING,{frag:E,targetBufferTime:S}),this.fragmentLoader.load(E,k).catch(function(z){return N.handleFragLoadError(z)})},l.doFragPartsLoad=function(E,L,S,k){var N=this;return new Promise(function(F,K){var W=[],z=function H(Y){var Q=L[Y];N.fragmentLoader.loadPart(E,Q,k).then(function(Z){W[Q.index]=Z;var $=Z.part;N.hls.trigger(I.Events.FRAG_LOADED,Z);var ee=L[Y+1];if(ee&&ee.fragment===E)H(Y+1);else return F({frag:E,part:$,partsLoaded:W})}).catch(K)};z(S)})},l.handleFragLoadError=function(E){var L=E.data;return L&&L.details===b.ErrorDetails.INTERNAL_ABORTED?this.handleFragLoadAborted(L.frag,L.part):this.hls.trigger(I.Events.ERROR,L),null},l._handleTransmuxerFlush=function(E){var L=this.getCurrentContext(E);if(!L||this.state!==g.PARSING){this.fragCurrent||(this.state=g.IDLE);return}var S=L.frag,k=L.part,N=L.level,F=self.performance.now();S.stats.parsing.end=F,k&&(k.stats.parsing.end=F),this.updateLevelTiming(S,k,N,E.partial)},l.getCurrentContext=function(E){var L=this.levels,S=E.level,k=E.sn,N=E.part;if(!L||!L[S])return this.warn("Levels object was unset while buffering fragment "+k+" of level "+S+". The current chunk will not be buffered."),null;var F=L[S],K=N>-1?Object(f.getPartWith)(F,k,N):null,W=K?K.fragment:Object(f.getFragmentWithSN)(F,k,this.fragCurrent);return W?{frag:W,part:K,level:F}:null},l.bufferFragmentData=function(E,L,S,k){if(!(!E||this.state!==g.PARSING)){var N=E.data1,F=E.data2,K=N;if(N&&F&&(K=Object(y.appendUint8Array)(N,F)),!(!K||!K.length)){var W={type:E.type,frag:L,part:S,chunkMeta:k,parent:L.type,data:K};this.hls.trigger(I.Events.BUFFER_APPENDING,W),E.dropped&&E.independent&&!S&&this.flushBufferGap(L)}}},l.flushBufferGap=function(E){var L=this.media;if(!!L){if(!R.BufferHelper.isBuffered(L,L.currentTime)){this.flushMainBuffer(0,E.start);return}var S=L.currentTime,k=R.BufferHelper.bufferInfo(L,S,0),N=E.duration,F=Math.min(this.config.maxFragLookUpTolerance*2,N*.25),K=Math.max(Math.min(E.start-F,k.end-F),S+F);E.start-K>F&&this.flushMainBuffer(K,E.start)}},l.getFwdBufferInfo=function(E,L){var S=this.config,k=this.getLoadPosition();if(!Object(M.isFiniteNumber)(k))return null;var N=R.BufferHelper.bufferInfo(E,k,S.maxBufferHole);if(N.len===0&&N.nextStart!==void 0){var F=this.fragmentTracker.getBufferedFrag(k,L);if(F&&N.nextStart<F.end)return R.BufferHelper.bufferInfo(E,k,Math.max(N.nextStart,S.maxBufferHole))}return N},l.getMaxBufferLength=function(E){var L=this.config,S;return E?S=Math.max(8*L.maxBufferSize/E,L.maxBufferLength):S=L.maxBufferLength,Math.min(S,L.maxMaxBufferLength)},l.reduceMaxBufferLength=function(E){var L=this.config,S=E||L.maxBufferLength;return L.maxMaxBufferLength>=S?(L.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+L.maxMaxBufferLength+"s"),!0):!1},l.getNextFragment=function(E,L){var S=L.fragments,k=S.length;if(!k)return null;var N=this.config,F=S[0].start,K;if(L.live){var W=N.initialLiveManifestSize;if(k<W)return this.warn("Not enough fragments to start playback (have: "+k+", need: "+W+")"),null;!L.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(K=this.getInitialLiveFragment(L,S),this.startPosition=K?this.hls.liveSyncPosition||K.start:E)}else E<=F&&(K=S[0]);if(!K){var z=N.lowLatencyMode?L.partEnd:L.fragmentEnd;K=this.getFragmentAtPosition(E,z,L)}return this.mapToInitFragWhenRequired(K)},l.mapToInitFragWhenRequired=function(E){return E!=null&&E.initSegment&&!(E!=null&&E.initSegment.data)&&!this.bitrateTest?E.initSegment:E},l.getNextPart=function(E,L,S){for(var k=-1,N=!1,F=!0,K=0,W=E.length;K<W;K++){var z=E[K];if(F=F&&!z.independent,k>-1&&S<z.start)break;var H=z.loaded;!H&&(N||z.independent||F)&&z.fragment===L&&(k=K),N=H}return k},l.loadedEndOfParts=function(E,L){var S=E[E.length-1];return S&&L>S.start&&S.loaded},l.getInitialLiveFragment=function(E,L){var S=this.fragPrevious,k=null;if(S){if(E.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+S.programDateTime),k=Object(h.findFragmentByPDT)(L,S.endProgramDateTime,this.config.maxFragLookUpTolerance)),!k){var N=S.sn+1;if(N>=E.startSN&&N<=E.endSN){var F=L[N-E.startSN];S.cc===F.cc&&(k=F,this.log("Live playlist, switching playlist, load frag with next SN: "+k.sn))}k||(k=Object(h.findFragWithCC)(L,S.cc),k&&this.log("Live playlist, switching playlist, load frag with same CC: "+k.sn))}}else{var K=this.hls.liveSyncPosition;K!==null&&(k=this.getFragmentAtPosition(K,this.bitrateTest?E.fragmentEnd:E.edge,E))}return k},l.getFragmentAtPosition=function(E,L,S){var k=this.config,N=this.fragPrevious,F=S.fragments,K=S.endSN,W=S.fragmentHint,z=k.maxFragLookUpTolerance,H=!!(k.lowLatencyMode&&S.partList&&W);H&&W&&!this.bitrateTest&&(F=F.concat(W),K=W.sn);var Y;if(E<L){var Q=E>L-z?0:z;Y=Object(h.findFragmentByPTS)(N,F,E,Q)}else Y=F[F.length-1];if(Y){var Z=Y.sn-S.startSN;if(N&&Y.sn===N.sn&&!H){var $=N&&Y.level===N.level;if($){var ee=F[Z+1];Y.sn<K&&this.fragmentTracker.getState(ee)!==T.FragmentState.OK?(this.log("SN "+Y.sn+" just loaded, load next one: "+ee.sn),Y=ee):Y=null}}}return Y},l.synchronizeToLiveEdge=function(E){var L=this.config,S=this.media;if(!!S){var k=this.hls.liveSyncPosition,N=S.currentTime,F=E.fragments[0].start,K=E.edge,W=N>=F-L.maxFragLookUpTolerance&&N<=K;if(k!==null&&S.duration>k&&(N<k||!W)){var z=L.liveMaxLatencyDuration!==void 0?L.liveMaxLatencyDuration:L.liveMaxLatencyDurationCount*E.targetduration;(!W&&S.readyState<4||N<K-z)&&(this.loadedmetadata||(this.nextLoadPosition=k),S.readyState&&(this.warn("Playback: "+N.toFixed(3)+" is located too far from the end of live sliding playlist: "+K+", reset currentTime to : "+k.toFixed(3)),S.currentTime=k))}}},l.alignPlaylists=function(E,L){var S=this.levels,k=this.levelLastLoaded,N=this.fragPrevious,F=k!==null?S[k]:null,K=E.fragments.length;if(!K)return this.warn("No fragments in live playlist"),0;var W=E.fragments[0].start,z=!L,H=E.alignedSliding&&Object(M.isFiniteNumber)(W);if(z||!H&&!W){Object(A.alignStream)(N,F,E);var Y=E.fragments[0].start;return this.log("Live playlist sliding: "+Y.toFixed(2)+" start-sn: "+(L?L.startSN:"na")+"->"+E.startSN+" prev-sn: "+(N?N.sn:"na")+" fragments: "+K),Y}return W},l.waitForCdnTuneIn=function(E){var L=3;return E.live&&E.canBlockReload&&E.partTarget&&E.tuneInGoal>Math.max(E.partHoldBack,E.partTarget*L)},l.setStartPosition=function(E,L){var S=this.startPosition;if(S<L&&(S=-1),S===-1||this.lastCurrentTime===-1){var k=E.startTimeOffset;Object(M.isFiniteNumber)(k)?(S=L+k,k<0&&(S+=E.totalduration),S=Math.min(Math.max(L,S),L+E.totalduration),this.log("Start time offset "+k+" found in playlist, adjust startPosition to "+S),this.startPosition=S):E.live?S=this.hls.liveSyncPosition||L:this.startPosition=S=0,this.lastCurrentTime=S}this.nextLoadPosition=S},l.getLoadPosition=function(){var E=this.media,L=0;return this.loadedmetadata&&E?L=E.currentTime:this.nextLoadPosition&&(L=this.nextLoadPosition),L},l.handleFragLoadAborted=function(E,L){this.transmuxer&&E.sn!=="initSegment"&&E.stats.aborted&&(this.warn("Fragment "+E.sn+(L?" part"+L.index:"")+" of level "+E.level+" was aborted"),this.resetFragmentLoading(E))},l.resetFragmentLoading=function(E){(!this.fragCurrent||!this.fragContextChanged(E)&&this.state!==g.FRAG_LOADING_WAITING_RETRY)&&(this.state=g.IDLE)},l.onFragmentOrKeyLoadError=function(E,L){if(!L.fatal){var S=L.frag;if(!(!S||S.type!==E)){var k=this.fragCurrent;console.assert(k&&S.sn===k.sn&&S.level===k.level&&S.urlId===k.urlId,"Frag load error must match current frag to retry");var N=this.config;if(this.fragLoadError+1<=N.fragLoadingMaxRetry){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);var F=Math.min(Math.pow(2,this.fragLoadError)*N.fragLoadingRetryDelay,N.fragLoadingMaxRetryTimeout);this.warn("Fragment "+S.sn+" of "+E+" "+S.level+" failed to load, retrying in "+F+"ms"),this.retryDate=self.performance.now()+F,this.fragLoadError++,this.state=g.FRAG_LOADING_WAITING_RETRY}else L.levelRetry?(E===i.PlaylistLevelType.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=g.IDLE):(O.logger.error(L.details+" reaches max retry, redispatch as fatal ..."),L.fatal=!0,this.hls.stopLoad(),this.state=g.ERROR)}}},l.afterBufferFlushed=function(E,L,S){if(!!E){var k=R.BufferHelper.getBuffered(E);this.fragmentTracker.detectEvictedFragments(L,k,S),this.state===g.ENDED&&this.resetLoadingState()}},l.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=g.IDLE},l.resetStartWhenNotLoaded=function(E){if(!this.loadedmetadata){this.startFragRequested=!1;var L=this.levels?this.levels[E].details:null;L!=null&&L.live?(this.startPosition=-1,this.setStartPosition(L,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}},l.updateLevelTiming=function(E,L,S,k){var N=this,F=S.details;console.assert(!!F,"level.details must be defined");var K=Object.keys(E.elementaryStreams).reduce(function(W,z){var H=E.elementaryStreams[z];if(H){var Y=H.endPTS-H.startPTS;if(Y<=0)return N.warn("Could not parse fragment "+E.sn+" "+z+" duration reliably ("+Y+")"),W||!1;var Q=k?0:Object(f.updateFragPTSDTS)(F,E,H.startPTS,H.endPTS,H.startDTS,H.endDTS);return N.hls.trigger(I.Events.LEVEL_PTS_UPDATED,{details:F,level:S,drift:Q,type:z,frag:E,start:H.startPTS,end:H.endPTS}),!0}return W},!1);K||(this.warn("Found no media in fragment "+E.sn+" of level "+S.id+" resetting transmuxer to fallback to playlist timing"),this.resetTransmuxer()),this.state=g.PARSED,this.hls.trigger(I.Events.FRAG_PARSED,{frag:E,part:L})},l.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},m(s,[{key:"state",get:function(){return this._state},set:function(E){var L=this._state;L!==E&&(this._state=E,this.log(L+"->"+E))}}]),s}(C.default)},"./src/controller/buffer-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return h});var M=x("./src/polyfills/number.ts"),C=x("./src/events.ts"),T=x("./src/utils/logger.ts"),R=x("./src/errors.ts"),O=x("./src/utils/buffer-helper.ts"),I=x("./src/utils/mediasource-helper.ts"),b=x("./src/loader/fragment.ts"),a=x("./src/controller/buffer-operation-queue.ts"),y=Object(I.getMediaSource)(),A=/([ha]vc.)(?:\.[^.,]+)+/,h=function(){function f(t){var e=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var i=e.hls,p=e.media,m=e.mediaSource;T.logger.log("[buffer-controller]: Media source opened"),p&&(e.updateMediaElementDuration(),i.trigger(C.Events.MEDIA_ATTACHED,{media:p})),m&&m.removeEventListener("sourceopen",e._onMediaSourceOpen),e.checkPendingTracks()},this._onMediaSourceClose=function(){T.logger.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){T.logger.log("[buffer-controller]: Media source ended")},this.hls=t,this._initSourceBuffer(),this.registerListeners()}var v=f.prototype;return v.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},v.destroy=function(){this.unregisterListeners(),this.details=null},v.registerListeners=function(){var e=this.hls;e.on(C.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(C.Events.MANIFEST_PARSED,this.onManifestParsed,this),e.on(C.Events.BUFFER_RESET,this.onBufferReset,this),e.on(C.Events.BUFFER_APPENDING,this.onBufferAppending,this),e.on(C.Events.BUFFER_CODECS,this.onBufferCodecs,this),e.on(C.Events.BUFFER_EOS,this.onBufferEos,this),e.on(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(C.Events.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(C.Events.FRAG_PARSED,this.onFragParsed,this),e.on(C.Events.FRAG_CHANGED,this.onFragChanged,this)},v.unregisterListeners=function(){var e=this.hls;e.off(C.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(C.Events.MANIFEST_PARSED,this.onManifestParsed,this),e.off(C.Events.BUFFER_RESET,this.onBufferReset,this),e.off(C.Events.BUFFER_APPENDING,this.onBufferAppending,this),e.off(C.Events.BUFFER_CODECS,this.onBufferCodecs,this),e.off(C.Events.BUFFER_EOS,this.onBufferEos,this),e.off(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(C.Events.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(C.Events.FRAG_PARSED,this.onFragParsed,this),e.off(C.Events.FRAG_CHANGED,this.onFragChanged,this)},v._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new a.default(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},v.onManifestParsed=function(e,i){var p=2;(i.audio&&!i.video||!i.altAudio)&&(p=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=p,this.details=null,T.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},v.onMediaAttaching=function(e,i){var p=this.media=i.media;if(p&&y){var m=this.mediaSource=new y;m.addEventListener("sourceopen",this._onMediaSourceOpen),m.addEventListener("sourceended",this._onMediaSourceEnded),m.addEventListener("sourceclose",this._onMediaSourceClose),p.src=self.URL.createObjectURL(m),this._objectUrl=p.src}},v.onMediaDetaching=function(){var e=this.media,i=this.mediaSource,p=this._objectUrl;if(i){if(T.logger.log("[buffer-controller]: media source detaching"),i.readyState==="open")try{i.endOfStream()}catch(m){T.logger.warn("[buffer-controller]: onMediaDetaching: "+m.message+" while calling endOfStream")}this.onBufferReset(),i.removeEventListener("sourceopen",this._onMediaSourceOpen),i.removeEventListener("sourceended",this._onMediaSourceEnded),i.removeEventListener("sourceclose",this._onMediaSourceClose),e&&(p&&self.URL.revokeObjectURL(p),e.src===p?(e.removeAttribute("src"),e.load()):T.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(C.Events.MEDIA_DETACHED,void 0)},v.onBufferReset=function(){var e=this;this.getSourceBufferTypes().forEach(function(i){var p=e.sourceBuffer[i];try{p&&(e.removeBufferListeners(i),e.mediaSource&&e.mediaSource.removeSourceBuffer(p),e.sourceBuffer[i]=void 0)}catch(m){T.logger.warn("[buffer-controller]: Failed to reset the "+i+" buffer",m)}}),this._initSourceBuffer()},v.onBufferCodecs=function(e,i){var p=this,m=this.getSourceBufferTypes().length;Object.keys(i).forEach(function(o){if(m){var n=p.tracks[o];if(n&&typeof n.buffer.changeType=="function"){var r=i[o],g=r.id,c=r.codec,d=r.levelCodec,s=r.container,l=r.metadata,u=(n.levelCodec||n.codec).replace(A,"$1"),E=(d||c).replace(A,"$1");if(u!==E){var L=s+";codecs="+(d||c);p.appendChangeType(o,L),T.logger.log("[buffer-controller]: switching codec "+u+" to "+E),p.tracks[o]={buffer:n.buffer,codec:c,container:s,levelCodec:d,metadata:l,id:g}}}}else p.pendingTracks[o]=i[o]}),!m&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())},v.appendChangeType=function(e,i){var p=this,m=this.operationQueue,o={execute:function(){var r=p.sourceBuffer[e];r&&(T.logger.log("[buffer-controller]: changing "+e+" sourceBuffer type to "+i),r.changeType(i)),m.shiftAndExecuteNext(e)},onStart:function(){},onComplete:function(){},onError:function(r){T.logger.warn("[buffer-controller]: Failed to change "+e+" SourceBuffer type",r)}};m.append(o,e)},v.onBufferAppending=function(e,i){var p=this,m=this.hls,o=this.operationQueue,n=this.tracks,r=i.data,g=i.type,c=i.frag,d=i.part,s=i.chunkMeta,l=s.buffering[g],u=self.performance.now();l.start=u;var E=c.stats.buffering,L=d?d.stats.buffering:null;E.start===0&&(E.start=u),L&&L.start===0&&(L.start=u);var S=n.audio,k=g==="audio"&&s.id===1&&(S==null?void 0:S.container)==="audio/mpeg",N={execute:function(){if(l.executeStart=self.performance.now(),k){var K=p.sourceBuffer[g];if(K){var W=c.start-K.timestampOffset;Math.abs(W)>=.1&&(T.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+c.start+" (delta: "+W+") sn: "+c.sn+")"),K.timestampOffset=c.start)}}p.appendExecutor(r,g)},onStart:function(){},onComplete:function(){var K=self.performance.now();l.executeEnd=l.end=K,E.first===0&&(E.first=K),L&&L.first===0&&(L.first=K);var W=p.sourceBuffer,z={};for(var H in W)z[H]=O.BufferHelper.getBuffered(W[H]);p.appendError=0,p.hls.trigger(C.Events.BUFFER_APPENDED,{type:g,frag:c,part:d,chunkMeta:s,parent:c.type,timeRanges:z})},onError:function(K){T.logger.error("[buffer-controller]: Error encountered while trying to append to the "+g+" SourceBuffer",K);var W={type:R.ErrorTypes.MEDIA_ERROR,parent:c.type,details:R.ErrorDetails.BUFFER_APPEND_ERROR,err:K,fatal:!1};K.code===DOMException.QUOTA_EXCEEDED_ERR?W.details=R.ErrorDetails.BUFFER_FULL_ERROR:(p.appendError++,W.details=R.ErrorDetails.BUFFER_APPEND_ERROR,p.appendError>m.config.appendErrorMaxRetry&&(T.logger.error("[buffer-controller]: Failed "+m.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),W.fatal=!0,m.stopLoad())),m.trigger(C.Events.ERROR,W)}};o.append(N,g)},v.onBufferFlushing=function(e,i){var p=this,m=this.operationQueue,o=function(r){return{execute:p.removeExecutor.bind(p,r,i.startOffset,i.endOffset),onStart:function(){},onComplete:function(){p.hls.trigger(C.Events.BUFFER_FLUSHED,{type:r})},onError:function(c){T.logger.warn("[buffer-controller]: Failed to remove from "+r+" SourceBuffer",c)}}};i.type?m.append(o(i.type),i.type):this.getSourceBufferTypes().forEach(function(n){m.append(o(n),n)})},v.onFragParsed=function(e,i){var p=this,m=i.frag,o=i.part,n=[],r=o?o.elementaryStreams:m.elementaryStreams;r[b.ElementaryStreamTypes.AUDIOVIDEO]?n.push("audiovideo"):(r[b.ElementaryStreamTypes.AUDIO]&&n.push("audio"),r[b.ElementaryStreamTypes.VIDEO]&&n.push("video"));var g=function(){var d=self.performance.now();m.stats.buffering.end=d,o&&(o.stats.buffering.end=d);var s=o?o.stats:m.stats;p.hls.trigger(C.Events.FRAG_BUFFERED,{frag:m,part:o,stats:s,id:m.type})};n.length===0&&T.logger.warn("Fragments must have at least one ElementaryStreamType set. type: "+m.type+" level: "+m.level+" sn: "+m.sn),this.blockBuffers(g,n)},v.onFragChanged=function(e,i){this.flushBackBuffer()},v.onBufferEos=function(e,i){var p=this,m=this.getSourceBufferTypes().reduce(function(o,n){var r=p.sourceBuffer[n];return(!i.type||i.type===n)&&r&&!r.ended&&(r.ended=!0,T.logger.log("[buffer-controller]: "+n+" sourceBuffer now EOS")),o&&!!(!r||r.ended)},!0);m&&this.blockBuffers(function(){var o=p.mediaSource;!o||o.readyState!=="open"||o.endOfStream()})},v.onLevelUpdated=function(e,i){var p=i.details;!p.fragments.length||(this.details=p,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},v.flushBackBuffer=function(){var e=this.hls,i=this.details,p=this.media,m=this.sourceBuffer;if(!(!p||i===null)){var o=this.getSourceBufferTypes();if(!!o.length){var n=i.live&&e.config.liveBackBufferLength!==null?e.config.liveBackBufferLength:e.config.backBufferLength;if(!(!Object(M.isFiniteNumber)(n)||n<0)){var r=p.currentTime,g=i.levelTargetDuration,c=Math.max(n,g),d=Math.floor(r/g)*g-c;o.forEach(function(s){var l=m[s];if(l){var u=O.BufferHelper.getBuffered(l);u.length>0&&d>u.start(0)&&(e.trigger(C.Events.BACK_BUFFER_REACHED,{bufferEnd:d}),i.live&&e.trigger(C.Events.LIVE_BACK_BUFFER_REACHED,{bufferEnd:d}),e.trigger(C.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:d,type:s}))}})}}}},v.updateMediaElementDuration=function(){if(!(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")){var e=this.details,i=this.hls,p=this.media,m=this.mediaSource,o=e.fragments[0].start+e.totalduration,n=p.duration,r=Object(M.isFiniteNumber)(m.duration)?m.duration:0;e.live&&i.config.liveDurationInfinity?(T.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),m.duration=1/0,this.updateSeekableRange(e)):(o>r&&o>n||!Object(M.isFiniteNumber)(n))&&(T.logger.log("[buffer-controller]: Updating Media Source duration to "+o.toFixed(3)),m.duration=o)}},v.updateSeekableRange=function(e){var i=this.mediaSource,p=e.fragments,m=p.length;if(m&&e.live&&i!==null&&i!==void 0&&i.setLiveSeekableRange){var o=Math.max(0,p[0].start),n=Math.max(o,o+e.totalduration);i.setLiveSeekableRange(o,n)}},v.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,i=this.operationQueue,p=this.pendingTracks,m=Object.keys(p).length;if(m&&!e||m===2){this.createSourceBuffers(p),this.pendingTracks={};var o=this.getSourceBufferTypes();if(o.length===0){this.hls.trigger(C.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});return}o.forEach(function(n){i.executeNext(n)})}},v.createSourceBuffers=function(e){var i=this.sourceBuffer,p=this.mediaSource;if(!p)throw Error("createSourceBuffers called when mediaSource was null");var m=0;for(var o in e)if(!i[o]){var n=e[o];if(!n)throw Error("source buffer exists for track "+o+", however track does not");var r=n.levelCodec||n.codec,g=n.container+";codecs="+r;T.logger.log("[buffer-controller]: creating sourceBuffer("+g+")");try{var c=i[o]=p.addSourceBuffer(g),d=o;this.addBufferListener(d,"updatestart",this._onSBUpdateStart),this.addBufferListener(d,"updateend",this._onSBUpdateEnd),this.addBufferListener(d,"error",this._onSBUpdateError),this.tracks[o]={buffer:c,codec:r,container:n.container,levelCodec:n.levelCodec,metadata:n.metadata,id:n.id},m++}catch(s){T.logger.error("[buffer-controller]: error while trying to add sourceBuffer: "+s.message),this.hls.trigger(C.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:s,mimeType:g})}}m&&this.hls.trigger(C.Events.BUFFER_CREATED,{tracks:this.tracks})},v._onSBUpdateStart=function(e){var i=this.operationQueue,p=i.current(e);p.onStart()},v._onSBUpdateEnd=function(e){var i=this.operationQueue,p=i.current(e);p.onComplete(),i.shiftAndExecuteNext(e)},v._onSBUpdateError=function(e,i){T.logger.error("[buffer-controller]: "+e+" SourceBuffer error",i),this.hls.trigger(C.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1});var p=this.operationQueue.current(e);p&&p.onError(i)},v.removeExecutor=function(e,i,p){var m=this.media,o=this.mediaSource,n=this.operationQueue,r=this.sourceBuffer,g=r[e];if(!m||!o||!g){T.logger.warn("[buffer-controller]: Attempting to remove from the "+e+" SourceBuffer, but it does not exist"),n.shiftAndExecuteNext(e);return}var c=Object(M.isFiniteNumber)(m.duration)?m.duration:1/0,d=Object(M.isFiniteNumber)(o.duration)?o.duration:1/0,s=Math.max(0,i),l=Math.min(p,c,d);l>s?(T.logger.log("[buffer-controller]: Removing ["+s+","+l+"] from the "+e+" SourceBuffer"),console.assert(!g.updating,e+" sourceBuffer must not be updating"),g.remove(s,l)):n.shiftAndExecuteNext(e)},v.appendExecutor=function(e,i){var p=this.operationQueue,m=this.sourceBuffer,o=m[i];if(!o){T.logger.warn("[buffer-controller]: Attempting to append to the "+i+" SourceBuffer, but it does not exist"),p.shiftAndExecuteNext(i);return}o.ended=!1,console.assert(!o.updating,i+" sourceBuffer must not be updating"),o.appendBuffer(e)},v.blockBuffers=function(e,i){var p=this;if(i===void 0&&(i=this.getSourceBufferTypes()),!i.length){T.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}var m=this.operationQueue,o=i.map(function(n){return m.appendBlocker(n)});Promise.all(o).then(function(){e(),i.forEach(function(n){var r=p.sourceBuffer[n];(!r||!r.updating)&&m.shiftAndExecuteNext(n)})})},v.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},v.addBufferListener=function(e,i,p){var m=this.sourceBuffer[e];if(!!m){var o=p.bind(this,e);this.listeners[e].push({event:i,listener:o}),m.addEventListener(i,o)}},v.removeBufferListeners=function(e){var i=this.sourceBuffer[e];!i||this.listeners[e].forEach(function(p){i.removeEventListener(p.event,p.listener)})},f}()},"./src/controller/buffer-operation-queue.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return C});var M=x("./src/utils/logger.ts"),C=function(){function T(O){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=O}var R=T.prototype;return R.append=function(I,b){var a=this.queues[b];a.push(I),a.length===1&&this.buffers[b]&&this.executeNext(b)},R.insertAbort=function(I,b){var a=this.queues[b];a.unshift(I),this.executeNext(b)},R.appendBlocker=function(I){var b,a=new Promise(function(A){b=A}),y={execute:b,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(y,I),a},R.executeNext=function(I){var b=this.buffers,a=this.queues,y=b[I],A=a[I];if(A.length){var h=A[0];try{h.execute()}catch(f){M.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),h.onError(f),(!y||!y.updating)&&(A.shift(),this.executeNext(I))}}},R.shiftAndExecuteNext=function(I){this.queues[I].shift(),this.executeNext(I)},R.current=function(I){return this.queues[I][0]},T}()},"./src/controller/cap-level-controller.ts":function(X,B,x){x.r(B);var M=x("./src/events.ts");function C(O,I){for(var b=0;b<I.length;b++){var a=I[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(O,a.key,a)}}function T(O,I,b){return I&&C(O.prototype,I),b&&C(O,b),Object.defineProperty(O,"prototype",{writable:!1}),O}var R=function(){function O(b){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=b,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var I=O.prototype;return I.setStreamController=function(a){this.streamController=a},I.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},I.registerListeners=function(){var a=this.hls;a.on(M.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),a.on(M.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),a.on(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.on(M.Events.BUFFER_CODECS,this.onBufferCodecs,this),a.on(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},I.unregisterListener=function(){var a=this.hls;a.off(M.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),a.off(M.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),a.off(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.off(M.Events.BUFFER_CODECS,this.onBufferCodecs,this),a.off(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},I.onFpsDropLevelCapping=function(a,y){O.isLevelAllowed(y.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(y.droppedLevel)},I.onMediaAttaching=function(a,y){this.media=y.media instanceof HTMLVideoElement?y.media:null},I.onManifestParsed=function(a,y){var A=this.hls;this.restrictedLevels=[],this.firstLevel=y.firstLevel,A.config.capLevelToPlayerSize&&y.video&&this.startCapping()},I.onBufferCodecs=function(a,y){var A=this.hls;A.config.capLevelToPlayerSize&&y.video&&this.startCapping()},I.onMediaDetaching=function(){this.stopCapping()},I.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var a=this.hls.levels;if(a.length){var y=this.hls;y.autoLevelCapping=this.getMaxLevel(a.length-1),y.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=y.autoLevelCapping}}},I.getMaxLevel=function(a){var y=this,A=this.hls.levels;if(!A.length)return-1;var h=A.filter(function(f,v){return O.isLevelAllowed(v,y.restrictedLevels)&&v<=a});return this.clientRect=null,O.getMaxLevelByMediaSize(h,this.mediaWidth,this.mediaHeight)},I.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},I.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},I.getDimensions=function(){if(this.clientRect)return this.clientRect;var a=this.media,y={width:0,height:0};if(a){var A=a.getBoundingClientRect();y.width=A.width,y.height=A.height,!y.width&&!y.height&&(y.width=A.right-A.left||a.width||0,y.height=A.bottom-A.top||a.height||0)}return this.clientRect=y,y},O.isLevelAllowed=function(a,y){return y===void 0&&(y=[]),y.indexOf(a)===-1},O.getMaxLevelByMediaSize=function(a,y,A){if(!a||!a.length)return-1;for(var h=function(i,p){return p?i.width!==p.width||i.height!==p.height:!0},f=a.length-1,v=0;v<a.length;v+=1){var t=a[v];if((t.width>=y||t.height>=A)&&h(t,a[v+1])){f=v;break}}return f},T(O,[{key:"mediaWidth",get:function(){return this.getDimensions().width*this.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*this.contentScaleFactor}},{key:"contentScaleFactor",get:function(){var a=1;if(!this.hls.config.ignoreDevicePixelRatio)try{a=self.devicePixelRatio}catch{}return a}}]),O}();B.default=R},"./src/controller/cmcd-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return h});var M=x("./src/events.ts"),C=x("./src/types/cmcd.ts"),T=x("./src/utils/buffer-helper.ts"),R=x("./src/utils/logger.ts");function O(f,v){for(var t=0;t<v.length;t++){var e=v[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(f,e.key,e)}}function I(f,v,t){return v&&O(f.prototype,v),t&&O(f,t),Object.defineProperty(f,"prototype",{writable:!1}),f}function b(f,v){var t=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(t)return(t=t.call(f)).next.bind(t);if(Array.isArray(f)||(t=a(f))||v&&f&&typeof f.length=="number"){t&&(f=t);var e=0;return function(){return e>=f.length?{done:!0}:{done:!1,value:f[e++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(f,v){if(!!f){if(typeof f=="string")return y(f,v);var t=Object.prototype.toString.call(f).slice(8,-1);if(t==="Object"&&f.constructor&&(t=f.constructor.name),t==="Map"||t==="Set")return Array.from(f);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(f,v)}}function y(f,v){(v==null||v>f.length)&&(v=f.length);for(var t=0,e=new Array(v);t<v;t++)e[t]=f[t];return e}function A(){return A=Object.assign?Object.assign.bind():function(f){for(var v=1;v<arguments.length;v++){var t=arguments[v];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(f[e]=t[e])}return f},A.apply(this,arguments)}var h=function(){function f(t){var e=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){e.initialized&&(e.starved=!0),e.buffering=!0},this.onPlaying=function(){e.initialized||(e.initialized=!0),e.buffering=!1},this.applyPlaylistData=function(m){try{e.apply(m,{ot:C.CMCDObjectType.MANIFEST,su:!e.initialized})}catch(o){R.logger.warn("Could not generate manifest CMCD data.",o)}},this.applyFragmentData=function(m){try{var o=m.frag,n=e.hls.levels[o.level],r=e.getObjectType(o),g={d:o.duration*1e3,ot:r};(r===C.CMCDObjectType.VIDEO||r===C.CMCDObjectType.AUDIO||r==C.CMCDObjectType.MUXED)&&(g.br=n.bitrate/1e3,g.tb=e.getTopBandwidth(r)/1e3,g.bl=e.getBufferLength(r)),e.apply(m,g)}catch(c){R.logger.warn("Could not generate segment CMCD data.",c)}},this.hls=t;var i=this.config=t.config,p=i.cmcd;p!=null&&(i.pLoader=this.createPlaylistLoader(),i.fLoader=this.createFragmentLoader(),this.sid=p.sessionId||f.uuid(),this.cid=p.contentId,this.useHeaders=p.useHeaders===!0,this.registerListeners())}var v=f.prototype;return v.registerListeners=function(){var e=this.hls;e.on(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(M.Events.MEDIA_DETACHED,this.onMediaDetached,this),e.on(M.Events.BUFFER_CREATED,this.onBufferCreated,this)},v.unregisterListeners=function(){var e=this.hls;e.off(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(M.Events.MEDIA_DETACHED,this.onMediaDetached,this),e.off(M.Events.BUFFER_CREATED,this.onBufferCreated,this),this.onMediaDetached()},v.destroy=function(){this.unregisterListeners(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},v.onMediaAttached=function(e,i){this.media=i.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},v.onMediaDetached=function(){!this.media||(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},v.onBufferCreated=function(e,i){var p,m;this.audioBuffer=(p=i.tracks.audio)===null||p===void 0?void 0:p.buffer,this.videoBuffer=(m=i.tracks.video)===null||m===void 0?void 0:m.buffer},v.createData=function(){var e;return{v:C.CMCDVersion,sf:C.CMCDStreamingFormat.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)===null||e===void 0?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},v.apply=function(e,i){i===void 0&&(i={}),A(i,this.createData());var p=i.ot===C.CMCDObjectType.INIT||i.ot===C.CMCDObjectType.VIDEO||i.ot===C.CMCDObjectType.MUXED;if(this.starved&&p&&(i.bs=!0,i.su=!0,this.starved=!1),i.su==null&&(i.su=this.buffering),this.useHeaders){var m=f.toHeaders(i);if(!Object.keys(m).length)return;e.headers||(e.headers={}),A(e.headers,m)}else{var o=f.toQuery(i);if(!o)return;e.url=f.appendQueryToUri(e.url,o)}},v.getObjectType=function(e){var i=e.type;if(i==="subtitle")return C.CMCDObjectType.TIMED_TEXT;if(e.sn==="initSegment")return C.CMCDObjectType.INIT;if(i==="audio")return C.CMCDObjectType.AUDIO;if(i==="main")return this.hls.audioTracks.length?C.CMCDObjectType.VIDEO:C.CMCDObjectType.MUXED},v.getTopBandwidth=function(e){var i=0,p,m=this.hls;if(e===C.CMCDObjectType.AUDIO)p=m.audioTracks;else{var o=m.maxAutoLevel,n=o>-1?o+1:m.levels.length;p=m.levels.slice(0,n)}for(var r=b(p),g;!(g=r()).done;){var c=g.value;c.bitrate>i&&(i=c.bitrate)}return i>0?i:NaN},v.getBufferLength=function(e){var i=this.hls.media,p=e===C.CMCDObjectType.AUDIO?this.audioBuffer:this.videoBuffer;if(!p||!i)return NaN;var m=T.BufferHelper.bufferInfo(p,i.currentTime,this.config.maxBufferHole);return m.len*1e3},v.createPlaylistLoader=function(){var e=this.config.pLoader,i=this.applyPlaylistData,p=e||this.config.loader;return function(){function m(n){this.loader=void 0,this.loader=new p(n)}var o=m.prototype;return o.destroy=function(){this.loader.destroy()},o.abort=function(){this.loader.abort()},o.load=function(r,g,c){i(r),this.loader.load(r,g,c)},I(m,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),m}()},v.createFragmentLoader=function(){var e=this.config.fLoader,i=this.applyFragmentData,p=e||this.config.loader;return function(){function m(n){this.loader=void 0,this.loader=new p(n)}var o=m.prototype;return o.destroy=function(){this.loader.destroy()},o.abort=function(){this.loader.abort()},o.load=function(r,g,c){i(r),this.loader.load(r,g,c)},I(m,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),m}()},f.uuid=function(){var e=URL.createObjectURL(new Blob),i=e.toString();return URL.revokeObjectURL(e),i.slice(i.lastIndexOf("/")+1)},f.serialize=function(e){for(var i=[],p=function(k){return!Number.isNaN(k)&&k!=null&&k!==""&&k!==!1},m=function(k){return Math.round(k)},o=function(k){return m(k/100)*100},n=function(k){return encodeURIComponent(k)},r={br:m,d:m,bl:o,dl:o,mtp:o,nor:n,rtp:o,tb:m},g=Object.keys(e||{}).sort(),c=b(g),d;!(d=c()).done;){var s=d.value,l=e[s];if(!!p(l)&&!(s==="v"&&l===1)&&!(s=="pr"&&l===1)){var u=r[s];u&&(l=u(l));var E=typeof l,L=void 0;s==="ot"||s==="sf"||s==="st"?L=s+"="+l:E==="boolean"?L=s:E==="number"?L=s+"="+l:L=s+"="+JSON.stringify(l),i.push(L)}}return i.join(",")},f.toHeaders=function(e){for(var i=Object.keys(e),p={},m=["Object","Request","Session","Status"],o=[{},{},{},{}],n={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},r=0,g=i;r<g.length;r++){var c=g[r],d=n[c]!=null?n[c]:1;o[d][c]=e[c]}for(var s=0;s<o.length;s++){var l=f.serialize(o[s]);l&&(p["CMCD-"+m[s]]=l)}return p},f.toQuery=function(e){return"CMCD="+encodeURIComponent(f.serialize(e))},f.appendQueryToUri=function(e,i){if(!i)return e;var p=e.includes("?")?"&":"?";return""+e+p+i},f}()},"./src/controller/eme-controller.ts":function(X,B,x){x.r(B);var M=x("./src/events.ts"),C=x("./src/errors.ts"),T=x("./src/utils/logger.ts"),R=x("./src/utils/mediakeys-helper.ts");function O(h,f){for(var v=0;v<f.length;v++){var t=f[v];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(h,t.key,t)}}function I(h,f,v){return f&&O(h.prototype,f),v&&O(h,v),Object.defineProperty(h,"prototype",{writable:!1}),h}var b=3,a=function(f,v,t){var e={audioCapabilities:[],videoCapabilities:[]};return f.forEach(function(i){e.audioCapabilities.push({contentType:'audio/mp4; codecs="'+i+'"',robustness:t.audioRobustness||""})}),v.forEach(function(i){e.videoCapabilities.push({contentType:'video/mp4; codecs="'+i+'"',robustness:t.videoRobustness||""})}),[e]},y=function(f,v,t,e){switch(f){case R.KeySystems.WIDEVINE:return a(v,t,e);default:throw new Error("Unknown key-system: "+f)}},A=function(){function h(v){this.hls=void 0,this._widevineLicenseUrl=void 0,this._licenseXhrSetup=void 0,this._licenseResponseCallback=void 0,this._emeEnabled=void 0,this._requestMediaKeySystemAccess=void 0,this._drmSystemOptions=void 0,this._config=void 0,this._mediaKeysList=[],this._media=null,this._hasSetMediaKeys=!1,this._requestLicenseFailureCount=0,this.mediaKeysPromise=null,this._onMediaEncrypted=this.onMediaEncrypted.bind(this),this.hls=v,this._config=v.config,this._widevineLicenseUrl=this._config.widevineLicenseUrl,this._licenseXhrSetup=this._config.licenseXhrSetup,this._licenseResponseCallback=this._config.licenseResponseCallback,this._emeEnabled=this._config.emeEnabled,this._requestMediaKeySystemAccess=this._config.requestMediaKeySystemAccessFunc,this._drmSystemOptions=this._config.drmSystemOptions,this._registerListeners()}var f=h.prototype;return f.destroy=function(){this._unregisterListeners(),this.hls=this._onMediaEncrypted=null,this._requestMediaKeySystemAccess=null},f._registerListeners=function(){this.hls.on(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(M.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(M.Events.MANIFEST_PARSED,this.onManifestParsed,this)},f._unregisterListeners=function(){this.hls.off(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(M.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(M.Events.MANIFEST_PARSED,this.onManifestParsed,this)},f.getLicenseServerUrl=function(t){switch(t){case R.KeySystems.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+t+'"')},f._attemptKeySystemAccess=function(t,e,i){var p=this,m=y(t,e,i,this._drmSystemOptions);T.logger.log("Requesting encrypted media key-system access");var o=this.requestMediaKeySystemAccess(t,m);this.mediaKeysPromise=o.then(function(n){return p._onMediaKeySystemAccessObtained(t,n)}),o.catch(function(n){T.logger.error('Failed to obtain key-system "'+t+'" access:',n)})},f._onMediaKeySystemAccessObtained=function(t,e){var i=this;T.logger.log('Access for key-system "'+t+'" obtained');var p={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:e,mediaKeySystemDomain:t};this._mediaKeysList.push(p);var m=Promise.resolve().then(function(){return e.createMediaKeys()}).then(function(o){return p.mediaKeys=o,T.logger.log('Media-keys created for key-system "'+t+'"'),i._onMediaKeysCreated(),o});return m.catch(function(o){T.logger.error("Failed to create media-keys:",o)}),m},f._onMediaKeysCreated=function(){var t=this;this._mediaKeysList.forEach(function(e){e.mediaKeysSession||(e.mediaKeysSession=e.mediaKeys.createSession(),t._onNewMediaKeySession(e.mediaKeysSession))})},f._onNewMediaKeySession=function(t){var e=this;T.logger.log("New key-system session "+t.sessionId),t.addEventListener("message",function(i){e._onKeySessionMessage(t,i.message)},!1)},f._onKeySessionMessage=function(t,e){T.logger.log("Got EME message event, creating license request"),this._requestLicense(e,function(i){T.logger.log("Received license data (length: "+(i&&i.byteLength)+"), updating key-session"),t.update(i).catch(function(p){T.logger.warn("Updating key-session failed: "+p)})})},f.onMediaEncrypted=function(t){var e=this;if(T.logger.log('Media is encrypted using "'+t.initDataType+'" init data type'),!this.mediaKeysPromise){T.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}var i=function(m){!e._media||(e._attemptSetMediaKeys(m),e._generateRequestWithPreferredKeySession(t.initDataType,t.initData))};this.mediaKeysPromise.then(i).catch(i)},f._attemptSetMediaKeys=function(t){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var e=this._mediaKeysList[0];if(!e||!e.mediaKeys){T.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}T.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(e.mediaKeys),this._hasSetMediaKeys=!0}},f._generateRequestWithPreferredKeySession=function(t,e){var i=this,p=this._mediaKeysList[0];if(!p){T.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}if(p.mediaKeysSessionInitialized){T.logger.warn("Key-Session already initialized but requested again");return}var m=p.mediaKeysSession;if(!m){T.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0});return}if(!e){T.logger.warn("Fatal: initData required for generating a key session is null"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});return}T.logger.log('Generating key-session request for "'+t+'" init data type'),p.mediaKeysSessionInitialized=!0,m.generateRequest(t,e).then(function(){T.logger.debug("Key-session generation succeeded")}).catch(function(o){T.logger.error("Error generating key-session request:",o),i.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})},f._createLicenseXhr=function(t,e,i){var p=new XMLHttpRequest;p.responseType="arraybuffer",p.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,p,t,e,i);var m=this._licenseXhrSetup;if(m)try{m.call(this.hls,p,t),m=void 0}catch(o){T.logger.error(o)}try{p.readyState||p.open("POST",t,!0),m&&m.call(this.hls,p,t)}catch(o){throw new Error("issue setting up KeySystem license XHR "+o)}return p},f._onLicenseRequestReadyStageChange=function(t,e,i,p){switch(t.readyState){case 4:if(t.status===200){this._requestLicenseFailureCount=0,T.logger.log("License request succeeded");var m=t.response,o=this._licenseResponseCallback;if(o)try{m=o.call(this.hls,t,e)}catch(r){T.logger.error(r)}p(m)}else{if(T.logger.error("License Request XHR failed ("+e+"). Status: "+t.status+" ("+t.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>b){this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});return}var n=b-this._requestLicenseFailureCount+1;T.logger.warn("Retrying license request, "+n+" attempts left"),this._requestLicense(i,p)}break}},f._generateLicenseRequestChallenge=function(t,e){switch(t.mediaKeySystemDomain){case R.KeySystems.WIDEVINE:return e}throw new Error("unsupported key-system: "+t.mediaKeySystemDomain)},f._requestLicense=function(t,e){T.logger.log("Requesting content license for key-system");var i=this._mediaKeysList[0];if(!i){T.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}try{var p=this.getLicenseServerUrl(i.mediaKeySystemDomain),m=this._createLicenseXhr(p,t,e);T.logger.log("Sending license request to URL: "+p);var o=this._generateLicenseRequestChallenge(i,t);m.send(o)}catch(n){T.logger.error("Failure requesting DRM license: "+n),this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.KEY_SYSTEM_ERROR,details:C.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},f.onMediaAttached=function(t,e){if(!!this._emeEnabled){var i=e.media;this._media=i,i.addEventListener("encrypted",this._onMediaEncrypted)}},f.onMediaDetached=function(){var t=this._media,e=this._mediaKeysList;!t||(t.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(e.map(function(i){if(i.mediaKeysSession)return i.mediaKeysSession.close().catch(function(){})})).then(function(){return t.setMediaKeys(null)}).catch(function(){}))},f.onManifestParsed=function(t,e){if(!!this._emeEnabled){var i=e.levels.map(function(m){return m.audioCodec}).filter(function(m){return!!m}),p=e.levels.map(function(m){return m.videoCodec}).filter(function(m){return!!m});this._attemptKeySystemAccess(R.KeySystems.WIDEVINE,i,p)}},I(h,[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}]),h}();B.default=A},"./src/controller/fps-controller.ts":function(X,B,x){x.r(B);var M=x("./src/events.ts"),C=x("./src/utils/logger.ts"),T=function(){function R(I){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=I,this.registerListeners()}var O=R.prototype;return O.setStreamController=function(b){this.streamController=b},O.registerListeners=function(){this.hls.on(M.Events.MEDIA_ATTACHING,this.onMediaAttaching,this)},O.unregisterListeners=function(){this.hls.off(M.Events.MEDIA_ATTACHING,this.onMediaAttaching)},O.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},O.onMediaAttaching=function(b,a){var y=this.hls.config;if(y.capLevelOnFPSDrop){var A=a.media instanceof self.HTMLVideoElement?a.media:null;this.media=A,A&&typeof A.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),y.fpsDroppedMonitoringPeriod)}},O.checkFPS=function(b,a,y){var A=performance.now();if(a){if(this.lastTime){var h=A-this.lastTime,f=y-this.lastDroppedFrames,v=a-this.lastDecodedFrames,t=1e3*f/h,e=this.hls;if(e.trigger(M.Events.FPS_DROP,{currentDropped:f,currentDecoded:v,totalDroppedFrames:y}),t>0&&f>e.config.fpsDroppedMonitoringThreshold*v){var i=e.currentLevel;C.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+i),i>0&&(e.autoLevelCapping===-1||e.autoLevelCapping>=i)&&(i=i-1,e.trigger(M.Events.FPS_DROP_LEVEL_CAPPING,{level:i,droppedLevel:e.currentLevel}),e.autoLevelCapping=i,this.streamController.nextLevelSwitch())}}this.lastTime=A,this.lastDroppedFrames=y,this.lastDecodedFrames=a}},O.checkFPSInterval=function(){var b=this.media;if(b)if(this.isVideoPlaybackQualityAvailable){var a=b.getVideoPlaybackQuality();this.checkFPS(b,a.totalVideoFrames,a.droppedVideoFrames)}else this.checkFPS(b,b.webkitDecodedFrameCount,b.webkitDroppedFrameCount)},R}();B.default=T},"./src/controller/fragment-finders.ts":function(X,B,x){x.r(B),x.d(B,"findFragmentByPDT",function(){return T}),x.d(B,"findFragmentByPTS",function(){return R}),x.d(B,"fragmentWithinToleranceTest",function(){return O}),x.d(B,"pdtWithinToleranceTest",function(){return I}),x.d(B,"findFragWithCC",function(){return b});var M=x("./src/polyfills/number.ts"),C=x("./src/utils/binary-search.ts");function T(a,y,A){if(y===null||!Array.isArray(a)||!a.length||!Object(M.isFiniteNumber)(y))return null;var h=a[0].programDateTime;if(y<(h||0))return null;var f=a[a.length-1].endProgramDateTime;if(y>=(f||0))return null;A=A||0;for(var v=0;v<a.length;++v){var t=a[v];if(I(y,A,t))return t}return null}function R(a,y,A,h){A===void 0&&(A=0),h===void 0&&(h=0);var f=null;if(a?f=y[a.sn-y[0].sn+1]||null:A===0&&y[0].start===0&&(f=y[0]),f&&O(A,h,f)===0)return f;var v=C.default.search(y,O.bind(null,A,h));return v||f}function O(a,y,A){a===void 0&&(a=0),y===void 0&&(y=0);var h=Math.min(y,A.duration+(A.deltaPTS?A.deltaPTS:0));return A.start+A.duration-h<=a?1:A.start-h>a&&A.start?-1:0}function I(a,y,A){var h=Math.min(y,A.duration+(A.deltaPTS?A.deltaPTS:0))*1e3,f=A.endProgramDateTime||0;return f-h>a}function b(a,y){return C.default.search(a,function(A){return A.cc<y?1:A.cc>y?-1:0})}},"./src/controller/fragment-tracker.ts":function(X,B,x){x.r(B),x.d(B,"FragmentState",function(){return T}),x.d(B,"FragmentTracker",function(){return R});var M=x("./src/events.ts"),C=x("./src/types/loader.ts"),T;(function(b){b.NOT_LOADED="NOT_LOADED",b.APPENDING="APPENDING",b.PARTIAL="PARTIAL",b.OK="OK"})(T||(T={}));var R=function(){function b(y){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=y,this._registerListeners()}var a=b.prototype;return a._registerListeners=function(){var A=this.hls;A.on(M.Events.BUFFER_APPENDED,this.onBufferAppended,this),A.on(M.Events.FRAG_BUFFERED,this.onFragBuffered,this),A.on(M.Events.FRAG_LOADED,this.onFragLoaded,this)},a._unregisterListeners=function(){var A=this.hls;A.off(M.Events.BUFFER_APPENDED,this.onBufferAppended,this),A.off(M.Events.FRAG_BUFFERED,this.onFragBuffered,this),A.off(M.Events.FRAG_LOADED,this.onFragLoaded,this)},a.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},a.getAppendedFrag=function(A,h){if(h===C.PlaylistLevelType.MAIN){var f=this.activeFragment,v=this.activeParts;if(!f)return null;if(v)for(var t=v.length;t--;){var e=v[t],i=e?e.end:f.appendedPTS;if(e.start<=A&&i!==void 0&&A<=i)return t>9&&(this.activeParts=v.slice(t-9)),e}else if(f.start<=A&&f.appendedPTS!==void 0&&A<=f.appendedPTS)return f}return this.getBufferedFrag(A,h)},a.getBufferedFrag=function(A,h){for(var f=this.fragments,v=Object.keys(f),t=v.length;t--;){var e=f[v[t]];if((e==null?void 0:e.body.type)===h&&e.buffered){var i=e.body;if(i.start<=A&&A<=i.end)return i}}return null},a.detectEvictedFragments=function(A,h,f){var v=this;Object.keys(this.fragments).forEach(function(t){var e=v.fragments[t];if(!!e){if(!e.buffered){e.body.type===f&&v.removeFragment(e.body);return}var i=e.range[A];!i||i.time.some(function(p){var m=!v.isTimeBuffered(p.startPTS,p.endPTS,h);return m&&v.removeFragment(e.body),m})}})},a.detectPartialFragments=function(A){var h=this,f=this.timeRanges,v=A.frag,t=A.part;if(!(!f||v.sn==="initSegment")){var e=I(v),i=this.fragments[e];!i||(Object.keys(f).forEach(function(p){var m=v.elementaryStreams[p];if(!!m){var o=f[p],n=t!==null||m.partial===!0;i.range[p]=h.getBufferedTimes(v,t,n,o)}}),i.loaded=null,Object.keys(i.range).length?i.buffered=!0:this.removeFragment(i.body))}},a.fragBuffered=function(A){var h=I(A),f=this.fragments[h];f&&(f.loaded=null,f.buffered=!0)},a.getBufferedTimes=function(A,h,f,v){for(var t={time:[],partial:f},e=h?h.start:A.start,i=h?h.end:A.end,p=A.minEndPTS||i,m=A.maxStartPTS||e,o=0;o<v.length;o++){var n=v.start(o)-this.bufferPadding,r=v.end(o)+this.bufferPadding;if(m>=n&&p<=r){t.time.push({startPTS:Math.max(e,v.start(o)),endPTS:Math.min(i,v.end(o))});break}else if(e<r&&i>n)t.partial=!0,t.time.push({startPTS:Math.max(e,v.start(o)),endPTS:Math.min(i,v.end(o))});else if(i<=n)break}return t},a.getPartialFragment=function(A){var h=null,f,v,t,e=0,i=this.bufferPadding,p=this.fragments;return Object.keys(p).forEach(function(m){var o=p[m];!o||O(o)&&(v=o.body.start-i,t=o.body.end+i,A>=v&&A<=t&&(f=Math.min(A-v,t-A),e<=f&&(h=o.body,e=f)))}),h},a.getState=function(A){var h=I(A),f=this.fragments[h];return f?f.buffered?O(f)?T.PARTIAL:T.OK:T.APPENDING:T.NOT_LOADED},a.isTimeBuffered=function(A,h,f){for(var v,t,e=0;e<f.length;e++){if(v=f.start(e)-this.bufferPadding,t=f.end(e)+this.bufferPadding,A>=v&&h<=t)return!0;if(h<=v)return!1}return!1},a.onFragLoaded=function(A,h){var f=h.frag,v=h.part;if(!(f.sn==="initSegment"||f.bitrateTest||v)){var t=I(f);this.fragments[t]={body:f,loaded:h,buffered:!1,range:Object.create(null)}}},a.onBufferAppended=function(A,h){var f=this,v=h.frag,t=h.part,e=h.timeRanges;if(v.type===C.PlaylistLevelType.MAIN)if(this.activeFragment=v,t){var i=this.activeParts;i||(this.activeParts=i=[]),i.push(t)}else this.activeParts=null;this.timeRanges=e,Object.keys(e).forEach(function(p){var m=e[p];if(f.detectEvictedFragments(p,m),!t)for(var o=0;o<m.length;o++)v.appendedPTS=Math.max(m.end(o),v.appendedPTS||0)})},a.onFragBuffered=function(A,h){this.detectPartialFragments(h)},a.hasFragment=function(A){var h=I(A);return!!this.fragments[h]},a.removeFragmentsInRange=function(A,h,f){var v=this;Object.keys(this.fragments).forEach(function(t){var e=v.fragments[t];if(!!e&&e.buffered){var i=e.body;i.type===f&&i.start<h&&i.end>A&&v.removeFragment(i)}})},a.removeFragment=function(A){var h=I(A);A.stats.loaded=0,A.clearElementaryStreamInfo(),delete this.fragments[h]},a.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},b}();function O(b){var a,y;return b.buffered&&(((a=b.range.video)===null||a===void 0?void 0:a.partial)||((y=b.range.audio)===null||y===void 0?void 0:y.partial))}function I(b){return b.type+"_"+b.level+"_"+b.urlId+"_"+b.sn}},"./src/controller/gap-controller.ts":function(X,B,x){x.r(B),x.d(B,"STALL_MINIMUM_DURATION_MS",function(){return O}),x.d(B,"MAX_START_GAP_JUMP",function(){return I}),x.d(B,"SKIP_BUFFER_HOLE_STEP_SECONDS",function(){return b}),x.d(B,"SKIP_BUFFER_RANGE_START",function(){return a}),x.d(B,"default",function(){return y});var M=x("./src/utils/buffer-helper.ts"),C=x("./src/errors.ts"),T=x("./src/events.ts"),R=x("./src/utils/logger.ts"),O=250,I=2,b=.1,a=.05,y=function(){function A(f,v,t,e){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=f,this.media=v,this.fragmentTracker=t,this.hls=e}var h=A.prototype;return h.destroy=function(){this.media=null,this.hls=this.fragmentTracker=null},h.poll=function(v,t){var e=this.config,i=this.media,p=this.stalled;if(i!==null){var m=i.currentTime,o=i.seeking,n=this.seeking&&!o,r=!this.seeking&&o;if(this.seeking=o,m!==v){if(this.moved=!0,p!==null){if(this.stallReported){var g=self.performance.now()-p;R.logger.warn("playback not stuck anymore @"+m+", after "+Math.round(g)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if((r||n)&&(this.stalled=null),!(i.paused&&!o||i.ended||i.playbackRate===0||!M.BufferHelper.getBuffered(i).length)){var c=M.BufferHelper.bufferInfo(i,m,0),d=c.len>0,s=c.nextStart||0;if(!(!d&&!s)){if(o){var l=c.len>I,u=!s||t&&t.start<=m||s-m>I&&!this.fragmentTracker.getPartialFragment(m);if(l||u)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var E,L=Math.max(s,c.start||0)-m,S=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,k=S==null||(E=S.details)===null||E===void 0?void 0:E.live,N=k?S.details.targetduration*2:I;if(L>0&&L<=N){this._trySkipBufferHole(null);return}}var F=self.performance.now();if(p===null){this.stalled=F;return}var K=F-p;if(!(!o&&K>=O&&(this._reportStall(c),!this.media))){var W=M.BufferHelper.bufferInfo(i,m,e.maxBufferHole);this._tryFixBufferStall(W,K)}}}}},h._tryFixBufferStall=function(v,t){var e=this.config,i=this.fragmentTracker,p=this.media;if(p!==null){var m=p.currentTime,o=i.getPartialFragment(m);if(o){var n=this._trySkipBufferHole(o);if(n||!this.media)return}v.len>e.maxBufferHole&&t>e.highBufferWatchdogPeriod*1e3&&(R.logger.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}},h._reportStall=function(v){var t=this.hls,e=this.media,i=this.stallReported;!i&&e&&(this.stallReported=!0,R.logger.warn("Playback stalling at @"+e.currentTime+" due to low buffer ("+JSON.stringify(v)+")"),t.trigger(T.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:v.len}))},h._trySkipBufferHole=function(v){var t=this.config,e=this.hls,i=this.media;if(i===null)return 0;for(var p=i.currentTime,m=0,o=M.BufferHelper.getBuffered(i),n=0;n<o.length;n++){var r=o.start(n);if(p+t.maxBufferHole>=m&&p<r){var g=Math.max(r+a,i.currentTime+b);return R.logger.warn("skipping hole, adjusting currentTime from "+p+" to "+g),this.moved=!0,this.stalled=null,i.currentTime=g,v&&e.trigger(T.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+p+" to "+g,frag:v}),g}m=o.end(n)}return 0},h._tryNudgeBuffer=function(){var v=this.config,t=this.hls,e=this.media,i=this.nudgeRetry;if(e!==null){var p=e.currentTime;if(this.nudgeRetry++,i<v.nudgeMaxRetry){var m=p+(i+1)*v.nudgeOffset;R.logger.warn("Nudging 'currentTime' from "+p+" to "+m),e.currentTime=m,t.trigger(T.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else R.logger.error("Playhead still not moving while enough data buffered @"+p+" after "+v.nudgeMaxRetry+" nudges"),t.trigger(T.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}},A}()},"./src/controller/id3-track-controller.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/events.ts"),T=x("./src/utils/texttrack-utils.ts"),R=x("./src/demux/id3.ts"),O=x("./src/loader/date-range.ts"),I=x("./src/types/demuxer.ts"),b=.25;function a(){return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}function y(f,v){return f.getTime()/1e3-v}function A(f){return Uint8Array.from(f.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}var h=function(){function f(t){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=t,this._registerListeners()}var v=f.prototype;return v.destroy=function(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null},v._registerListeners=function(){var e=this.hls;e.on(C.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.on(C.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(C.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},v._unregisterListeners=function(){var e=this.hls;e.off(C.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.off(C.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(C.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},v.onMediaAttached=function(e,i){this.media=i.media},v.onMediaDetaching=function(){!this.id3Track||(Object(T.clearCurrentCues)(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})},v.onManifestLoading=function(){this.dateRangeCuesAppended={}},v.createTrack=function(e){var i=this.getID3Track(e.textTracks);return i.mode="hidden",i},v.getID3Track=function(e){if(!!this.media){for(var i=0;i<e.length;i++){var p=e[i];if(p.kind==="metadata"&&p.label==="id3")return Object(T.sendAddTrackEvent)(p,this.media),p}return this.media.addTextTrack("metadata","id3")}},v.onFragParsingMetadata=function(e,i){if(!!this.media){var p=this.hls.config,m=p.enableEmsgMetadataCues,o=p.enableID3MetadataCues;if(!(!m&&!o)){var n=i.frag,r=i.samples,g=i.details;this.id3Track||(this.id3Track=this.createTrack(this.media));for(var c=g.edge||n.end,d=a(),s=!1,l={},u=0;u<r.length;u++){var E=r[u].type;if(!(E===I.MetadataSchema.emsg&&!m||!o)){var L=R.getID3Frames(r[u].data);if(L){var S=r[u].pts,k=c,N=k-S;N<=0&&(k=S+b);for(var F=0;F<L.length;F++){var K=L[F];if(!R.isTimeStampFrame(K)){var W=new d(S,k,"");W.value=K,E&&(W.type=E),this.id3Track.addCue(W),l[K.key]=null,s=!0}}}}}s&&this.updateId3CueEnds(l)}}},v.updateId3CueEnds=function(e){var i,p=(i=this.id3Track)===null||i===void 0?void 0:i.cues;if(p)for(var m=p.length;m--;){var o,n=p[m],r=(o=n.value)===null||o===void 0?void 0:o.key;if(r&&r in e){var g=e[r];g&&n.endTime!==g&&(n.endTime=g),e[r]=n.startTime}}},v.onBufferFlushing=function(e,i){var p=i.startOffset,m=i.endOffset,o=i.type,n=this.id3Track,r=this.hls;if(!!r){var g=r.config,c=g.enableEmsgMetadataCues,d=g.enableID3MetadataCues;if(n&&(c||d)){var s;o==="audio"?s=function(u){return u.type===I.MetadataSchema.audioId3&&d}:o==="video"?s=function(u){return u.type===I.MetadataSchema.emsg&&c}:s=function(u){return u.type===I.MetadataSchema.audioId3&&d||u.type===I.MetadataSchema.emsg&&c},Object(T.removeCuesInRange)(n,p,m,s)}}},v.onLevelUpdated=function(e,i){var p=this,m=i.details;if(!(!this.media||!m.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)){var o=this.dateRangeCuesAppended,n=this.id3Track,r=m.dateRanges,g=Object.keys(r);if(n)for(var c=Object.keys(o).filter(function(N){return!g.includes(N)}),d=function(F){var K=c[F];Object.keys(o[K].cues).forEach(function(W){n.removeCue(o[K].cues[W])}),delete o[K]},s=c.length;s--;)d(s);var l=m.fragments[m.fragments.length-1];if(!(g.length===0||!Object(M.isFiniteNumber)(l==null?void 0:l.programDateTime))){this.id3Track||(this.id3Track=this.createTrack(this.media));for(var u=l.programDateTime/1e3-l.start,E=m.edge||l.end,L=a(),S=function(F){var K=g[F],W=r[K],z=o[K],H=(z==null?void 0:z.cues)||{},Y=(z==null?void 0:z.durationKnown)||!1,Q=y(W.startDate,u),Z=E,$=W.endDate;if($)Z=y($,u),Y=!0;else if(W.endOnNext&&!Y){var ee=g.reduce(function(re,ue){var le=r[ue];return le.class===W.class&&le.id!==ue&&le.startDate>W.startDate&&re.push(le),re},[]).sort(function(re,ue){return re.startDate.getTime()-ue.startDate.getTime()})[0];ee&&(Z=y(ee.startDate,u),Y=!0)}for(var ie=Object.keys(W.attr),ae=0;ae<ie.length;ae++){var q=ie[ae];if(!(q===O.DateRangeAttribute.ID||q===O.DateRangeAttribute.CLASS||q===O.DateRangeAttribute.START_DATE||q===O.DateRangeAttribute.DURATION||q===O.DateRangeAttribute.END_DATE||q===O.DateRangeAttribute.END_ON_NEXT)){var oe=H[q];if(oe)Y&&!z.durationKnown&&(oe.endTime=Z);else{var ne=W.attr[q];oe=new L(Q,Z,""),(q===O.DateRangeAttribute.SCTE35_OUT||q===O.DateRangeAttribute.SCTE35_IN)&&(ne=A(ne)),oe.value={key:q,data:ne},oe.type=I.MetadataSchema.dateRange,p.id3Track.addCue(oe),H[q]=oe}}}o[K]={cues:H,dateRange:W,durationKnown:Y}},k=0;k<g.length;k++)S(k)}}},f}();B.default=h},"./src/controller/latency-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return I});var M=x("./src/errors.ts"),C=x("./src/events.ts"),T=x("./src/utils/logger.ts");function R(b,a){for(var y=0;y<a.length;y++){var A=a[y];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(b,A.key,A)}}function O(b,a,y){return a&&R(b.prototype,a),y&&R(b,y),Object.defineProperty(b,"prototype",{writable:!1}),b}var I=function(){function b(y){var A=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return A.timeupdate()},this.hls=y,this.config=y.config,this.registerListeners()}var a=b.prototype;return a.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},a.registerListeners=function(){this.hls.on(C.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(C.Events.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(C.Events.ERROR,this.onError,this)},a.unregisterListeners=function(){this.hls.off(C.Events.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(C.Events.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(C.Events.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(C.Events.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(C.Events.ERROR,this.onError)},a.onMediaAttached=function(A,h){this.media=h.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},a.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},a.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},a.onLevelUpdated=function(A,h){var f=h.details;this.levelDetails=f,f.advanced&&this.timeupdate(),!f.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},a.onError=function(A,h){h.details===M.ErrorDetails.BUFFER_STALLED_ERROR&&(this.stallCount++,T.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},a.timeupdate=function(){var A=this.media,h=this.levelDetails;if(!(!A||!h)){this.currentTime=A.currentTime;var f=this.computeLatency();if(f!==null){this._latency=f;var v=this.config,t=v.lowLatencyMode,e=v.maxLiveSyncPlaybackRate;if(!(!t||e===1)){var i=this.targetLatency;if(i!==null){var p=f-i,m=Math.min(this.maxLatency,i+h.targetduration),o=p<m;if(h.live&&o&&p>.05&&this.forwardBufferLength>1){var n=Math.min(2,Math.max(1,e)),r=Math.round(2/(1+Math.exp(-.75*p-this.edgeStalled))*20)/20;A.playbackRate=Math.min(n,Math.max(1,r))}else A.playbackRate!==1&&A.playbackRate!==0&&(A.playbackRate=1)}}}}},a.estimateLiveEdge=function(){var A=this.levelDetails;return A===null?null:A.edge+A.age},a.computeLatency=function(){var A=this.estimateLiveEdge();return A===null?null:A-this.currentTime},O(b,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var A=this.config,h=this.levelDetails;return A.liveMaxLatencyDuration!==void 0?A.liveMaxLatencyDuration:h?A.liveMaxLatencyDurationCount*h.targetduration:0}},{key:"targetLatency",get:function(){var A=this.levelDetails;if(A===null)return null;var h=A.holdBack,f=A.partHoldBack,v=A.targetduration,t=this.config,e=t.liveSyncDuration,i=t.liveSyncDurationCount,p=t.lowLatencyMode,m=this.hls.userConfig,o=p&&f||h;(m.liveSyncDuration||m.liveSyncDurationCount||o===0)&&(o=e!==void 0?e:i*v);var n=v,r=1;return o+Math.min(this.stallCount*r,n)}},{key:"liveSyncPosition",get:function(){var A=this.estimateLiveEdge(),h=this.targetLatency,f=this.levelDetails;if(A===null||h===null||f===null)return null;var v=f.edge,t=A-h-this.edgeStalled,e=v-f.totalduration,i=v-(this.config.lowLatencyMode&&f.partTarget||f.targetduration);return Math.min(Math.max(e,t),i)}},{key:"drift",get:function(){var A=this.levelDetails;return A===null?1:A.drift}},{key:"edgeStalled",get:function(){var A=this.levelDetails;if(A===null)return 0;var h=(this.config.lowLatencyMode&&A.partTarget||A.targetduration)*3;return Math.max(A.age-h,0)}},{key:"forwardBufferLength",get:function(){var A=this.media,h=this.levelDetails;if(!A||!h)return 0;var f=A.buffered.length;return(f?A.buffered.end(f-1):h.edge)-this.currentTime}}]),b}()},"./src/controller/level-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return t});var M=x("./src/types/level.ts"),C=x("./src/events.ts"),T=x("./src/errors.ts"),R=x("./src/utils/codecs.ts"),O=x("./src/controller/level-helper.ts"),I=x("./src/controller/base-playlist-controller.ts"),b=x("./src/types/loader.ts");function a(){return a=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&(e[m]=p[m])}return e},a.apply(this,arguments)}function y(e,i){for(var p=0;p<i.length;p++){var m=i[p];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}function A(e,i,p){return i&&y(e.prototype,i),p&&y(e,p),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,f(e,i)}function f(e,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,o){return m.__proto__=o,m},f(e,i)}var v=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),t=function(e){h(i,e);function i(m){var o;return o=e.call(this,m,"[level-controller]")||this,o._levels=[],o._firstLevel=-1,o._startLevel=void 0,o.currentLevelIndex=-1,o.manualLevelIndex=-1,o.onParsedComplete=void 0,o._registerListeners(),o}var p=i.prototype;return p._registerListeners=function(){var o=this.hls;o.on(C.Events.MANIFEST_LOADED,this.onManifestLoaded,this),o.on(C.Events.LEVEL_LOADED,this.onLevelLoaded,this),o.on(C.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),o.on(C.Events.FRAG_LOADED,this.onFragLoaded,this),o.on(C.Events.ERROR,this.onError,this)},p._unregisterListeners=function(){var o=this.hls;o.off(C.Events.MANIFEST_LOADED,this.onManifestLoaded,this),o.off(C.Events.LEVEL_LOADED,this.onLevelLoaded,this),o.off(C.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),o.off(C.Events.FRAG_LOADED,this.onFragLoaded,this),o.off(C.Events.ERROR,this.onError,this)},p.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,e.prototype.destroy.call(this)},p.startLoad=function(){var o=this._levels;o.forEach(function(n){n.loadError=0}),e.prototype.startLoad.call(this)},p.onManifestLoaded=function(o,n){var r=[],g=[],c=[],d,s={},l,u=!1,E=!1,L=!1;if(n.levels.forEach(function(F){var K=F.attrs;u=u||!!(F.width&&F.height),E=E||!!F.videoCodec,L=L||!!F.audioCodec,v&&F.audioCodec&&F.audioCodec.indexOf("mp4a.40.34")!==-1&&(F.audioCodec=void 0);var W=F.bitrate+"-"+F.attrs.RESOLUTION+"-"+F.attrs.CODECS;l=s[W],l?l.url.push(F.url):(l=new M.Level(F),s[W]=l,r.push(l)),K&&(K.AUDIO&&Object(O.addGroupId)(l,"audio",K.AUDIO),K.SUBTITLES&&Object(O.addGroupId)(l,"text",K.SUBTITLES))}),(u||E)&&L&&(r=r.filter(function(F){var K=F.videoCodec,W=F.width,z=F.height;return!!K||!!(W&&z)})),r=r.filter(function(F){var K=F.audioCodec,W=F.videoCodec;return(!K||Object(R.isCodecSupportedInMp4)(K,"audio"))&&(!W||Object(R.isCodecSupportedInMp4)(W,"video"))}),n.audioTracks&&(g=n.audioTracks.filter(function(F){return!F.audioCodec||Object(R.isCodecSupportedInMp4)(F.audioCodec,"audio")}),Object(O.assignTrackIdsByGroup)(g)),n.subtitles&&(c=n.subtitles,Object(O.assignTrackIdsByGroup)(c)),r.length>0){d=r[0].bitrate,r.sort(function(F,K){return F.bitrate-K.bitrate}),this._levels=r;for(var S=0;S<r.length;S++)if(r[S].bitrate===d){this._firstLevel=S,this.log("manifest loaded, "+r.length+" level(s) found, first bitrate: "+d);break}var k=L&&!E,N={levels:r,audioTracks:g,subtitleTracks:c,firstLevel:this._firstLevel,stats:n.stats,audio:L,video:E,altAudio:!k&&g.some(function(F){return!!F.url})};this.hls.trigger(C.Events.MANIFEST_PARSED,N),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(C.Events.ERROR,{type:T.ErrorTypes.MEDIA_ERROR,details:T.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:n.url,reason:"no level with compatible codecs found in manifest"})},p.onError=function(o,n){var r;if(e.prototype.onError.call(this,o,n),!n.fatal){var g=n.context,c=this._levels[this.currentLevelIndex];if(g&&(g.type===b.PlaylistContextType.AUDIO_TRACK&&c.audioGroupIds&&g.groupId===c.audioGroupIds[c.urlId]||g.type===b.PlaylistContextType.SUBTITLE_TRACK&&c.textGroupIds&&g.groupId===c.textGroupIds[c.urlId])){this.redundantFailover(this.currentLevelIndex);return}var d=!1,s=!0,l;switch(n.details){case T.ErrorDetails.FRAG_LOAD_ERROR:case T.ErrorDetails.FRAG_LOAD_TIMEOUT:case T.ErrorDetails.KEY_LOAD_ERROR:case T.ErrorDetails.KEY_LOAD_TIMEOUT:if(n.frag){var u=n.frag.type===b.PlaylistLevelType.MAIN?n.frag.level:this.currentLevelIndex,E=this._levels[u];E?(E.fragmentError++,E.fragmentError>this.hls.config.fragLoadingMaxRetry&&(l=u)):l=u}break;case T.ErrorDetails.LEVEL_LOAD_ERROR:case T.ErrorDetails.LEVEL_LOAD_TIMEOUT:g&&(g.deliveryDirectives&&(s=!1),l=g.level),d=!0;break;case T.ErrorDetails.REMUX_ALLOC_ERROR:l=(r=n.level)!=null?r:this.currentLevelIndex,d=!0;break}l!==void 0&&this.recoverLevel(n,l,d,s)}},p.recoverLevel=function(o,n,r,g){var c=o.details,d=this._levels[n];if(d.loadError++,r){var s=this.retryLoadingOrFail(o);if(s)o.levelRetry=!0;else{this.currentLevelIndex=-1;return}}if(g){var l=d.url.length;if(l>1&&d.loadError<l)o.levelRetry=!0,this.redundantFailover(n);else if(this.manualLevelIndex===-1){for(var u=-1,E=this._levels,L=E.length;L--;){var S=(L+this.currentLevelIndex)%E.length;if(S!==this.currentLevelIndex&&E[S].loadError===0){u=S;break}}u>-1&&this.currentLevelIndex!==u&&(this.warn(c+": switch to "+u),o.levelRetry=!0,this.hls.nextAutoLevel=u)}}},p.redundantFailover=function(o){var n=this._levels[o],r=n.url.length;if(r>1){var g=(n.urlId+1)%r;this.warn("Switching to redundant URL-id "+g),this._levels.forEach(function(c){c.urlId=g}),this.level=o}},p.onFragLoaded=function(o,n){var r=n.frag;if(r!==void 0&&r.type===b.PlaylistLevelType.MAIN){var g=this._levels[r.level];g!==void 0&&(g.fragmentError=0,g.loadError=0)}},p.onLevelLoaded=function(o,n){var r,g=n.level,c=n.details,d=this._levels[g];if(!d){var s;this.warn("Invalid level index "+g),(s=n.deliveryDirectives)!==null&&s!==void 0&&s.skip&&(c.deltaUpdateFailed=!0);return}g===this.currentLevelIndex?(d.fragmentError===0&&(d.loadError=0,this.retryCount=0),this.playlistLoaded(g,n,d.details)):(r=n.deliveryDirectives)!==null&&r!==void 0&&r.skip&&(c.deltaUpdateFailed=!0)},p.onAudioTrackSwitched=function(o,n){var r=this.hls.levels[this.currentLevelIndex];if(!!r&&r.audioGroupIds){for(var g=-1,c=this.hls.audioTracks[n.id].groupId,d=0;d<r.audioGroupIds.length;d++)if(r.audioGroupIds[d]===c){g=d;break}g!==r.urlId&&(r.urlId=g,this.startLoad())}},p.loadPlaylist=function(o){var n=this.currentLevelIndex,r=this._levels[n];if(this.canLoad&&r&&r.url.length>0){var g=r.urlId,c=r.url[g];if(o)try{c=o.addDirectives(c)}catch(d){this.warn("Could not construct new URL with HLS Delivery Directives: "+d)}this.log("Attempt loading level index "+n+(o?" at sn "+o.msn+" part "+o.part:"")+" with URL-id "+g+" "+c),this.clearTimer(),this.hls.trigger(C.Events.LEVEL_LOADING,{url:c,level:n,id:g,deliveryDirectives:o||null})}},p.removeLevel=function(o,n){var r=function(d,s){return s!==n},g=this._levels.filter(function(c,d){return d!==o?!0:c.url.length>1&&n!==void 0?(c.url=c.url.filter(r),c.audioGroupIds&&(c.audioGroupIds=c.audioGroupIds.filter(r)),c.textGroupIds&&(c.textGroupIds=c.textGroupIds.filter(r)),c.urlId=0,!0):!1}).map(function(c,d){var s=c.details;return s!=null&&s.fragments&&s.fragments.forEach(function(l){l.level=d}),c});this._levels=g,this.hls.trigger(C.Events.LEVELS_UPDATED,{levels:g})},A(i,[{key:"levels",get:function(){return this._levels.length===0?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(o){var n,r=this._levels;if(r.length!==0&&!(this.currentLevelIndex===o&&(n=r[o])!==null&&n!==void 0&&n.details)){if(o<0||o>=r.length){var g=o<0;if(this.hls.trigger(C.Events.ERROR,{type:T.ErrorTypes.OTHER_ERROR,details:T.ErrorDetails.LEVEL_SWITCH_ERROR,level:o,fatal:g,reason:"invalid level idx"}),g)return;o=Math.min(o,r.length-1)}this.clearTimer();var c=this.currentLevelIndex,d=r[c],s=r[o];this.log("switching to level "+o+" from "+c),this.currentLevelIndex=o;var l=a({},s,{level:o,maxBitrate:s.maxBitrate,uri:s.uri,urlId:s.urlId});delete l._urlId,this.hls.trigger(C.Events.LEVEL_SWITCHING,l);var u=s.details;if(!u||u.live){var E=this.switchParams(s.uri,d==null?void 0:d.details);this.loadPlaylist(E)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(o){this.manualLevelIndex=o,this._startLevel===void 0&&(this._startLevel=o),o!==-1&&(this.level=o)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(o){this._firstLevel=o}},{key:"startLevel",get:function(){if(this._startLevel===void 0){var o=this.hls.config.startLevel;return o!==void 0?o:this._firstLevel}else return this._startLevel},set:function(o){this._startLevel=o}},{key:"nextLoadLevel",get:function(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(o){this.level=o,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=o)}}]),i}(I.default)},"./src/controller/level-helper.ts":function(X,B,x){x.r(B),x.d(B,"addGroupId",function(){return O}),x.d(B,"assignTrackIdsByGroup",function(){return I}),x.d(B,"updatePTS",function(){return b}),x.d(B,"updateFragPTSDTS",function(){return y}),x.d(B,"mergeDetails",function(){return A}),x.d(B,"mapPartIntersection",function(){return f}),x.d(B,"mapFragmentIntersection",function(){return v}),x.d(B,"adjustSliding",function(){return t}),x.d(B,"addSliding",function(){return e}),x.d(B,"computeReloadInterval",function(){return i}),x.d(B,"getFragmentWithSN",function(){return p}),x.d(B,"getPartWith",function(){return m});var M=x("./src/polyfills/number.ts"),C=x("./src/utils/logger.ts"),T=x("./src/loader/date-range.ts");function R(){return R=Object.assign?Object.assign.bind():function(o){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var g in r)Object.prototype.hasOwnProperty.call(r,g)&&(o[g]=r[g])}return o},R.apply(this,arguments)}function O(o,n,r){switch(n){case"audio":o.audioGroupIds||(o.audioGroupIds=[]),o.audioGroupIds.push(r);break;case"text":o.textGroupIds||(o.textGroupIds=[]),o.textGroupIds.push(r);break}}function I(o){var n={};o.forEach(function(r){var g=r.groupId||"";r.id=n[g]=n[g]||0,n[g]++})}function b(o,n,r){var g=o[n],c=o[r];a(g,c)}function a(o,n){var r=n.startPTS;if(Object(M.isFiniteNumber)(r)){var g=0,c;n.sn>o.sn?(g=r-o.start,c=o):(g=o.start-r,c=n),c.duration!==g&&(c.duration=g)}else if(n.sn>o.sn){var d=o.cc===n.cc;d&&o.minEndPTS?n.start=o.start+(o.minEndPTS-o.start):n.start=o.start+o.duration}else n.start=Math.max(o.start-n.duration,0)}function y(o,n,r,g,c,d){var s=g-r;s<=0&&(C.logger.warn("Fragment should have a positive duration",n),g=r+n.duration,d=c+n.duration);var l=r,u=g,E=n.startPTS,L=n.endPTS;if(Object(M.isFiniteNumber)(E)){var S=Math.abs(E-r);Object(M.isFiniteNumber)(n.deltaPTS)?n.deltaPTS=Math.max(S,n.deltaPTS):n.deltaPTS=S,l=Math.max(r,E),r=Math.min(r,E),c=Math.min(c,n.startDTS),u=Math.min(g,L),g=Math.max(g,L),d=Math.max(d,n.endDTS)}n.duration=g-r;var k=r-n.start;n.appendedPTS=g,n.start=n.startPTS=r,n.maxStartPTS=l,n.startDTS=c,n.endPTS=g,n.minEndPTS=u,n.endDTS=d;var N=n.sn;if(!o||N<o.startSN||N>o.endSN)return 0;var F,K=N-o.startSN,W=o.fragments;for(W[K]=n,F=K;F>0;F--)a(W[F],W[F-1]);for(F=K;F<W.length-1;F++)a(W[F],W[F+1]);return o.fragmentHint&&a(W[W.length-1],o.fragmentHint),o.PTSKnown=o.alignedSliding=!0,k}function A(o,n){for(var r=null,g=o.fragments,c=g.length-1;c>=0;c--){var d=g[c].initSegment;if(d){r=d;break}}o.fragmentHint&&delete o.fragmentHint.endPTS;var s=0,l;if(v(o,n,function(F,K){F.relurl&&(s=F.cc-K.cc),Object(M.isFiniteNumber)(F.startPTS)&&Object(M.isFiniteNumber)(F.endPTS)&&(K.start=K.startPTS=F.startPTS,K.startDTS=F.startDTS,K.appendedPTS=F.appendedPTS,K.maxStartPTS=F.maxStartPTS,K.endPTS=F.endPTS,K.endDTS=F.endDTS,K.minEndPTS=F.minEndPTS,K.duration=F.endPTS-F.startPTS,K.duration&&(l=K),n.PTSKnown=n.alignedSliding=!0),K.elementaryStreams=F.elementaryStreams,K.loader=F.loader,K.stats=F.stats,K.urlId=F.urlId,F.initSegment&&(K.initSegment=F.initSegment,r=F.initSegment)}),r){var u=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments;u.forEach(function(F){var K;(!F.initSegment||F.initSegment.relurl===((K=r)===null||K===void 0?void 0:K.relurl))&&(F.initSegment=r)})}if(n.skippedSegments)if(n.deltaUpdateFailed=n.fragments.some(function(F){return!F}),n.deltaUpdateFailed){C.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var E=n.skippedSegments;E--;)n.fragments.shift();n.startSN=n.fragments[0].sn,n.startCC=n.fragments[0].cc}else n.canSkipDateRanges&&(n.dateRanges=h(o.dateRanges,n.dateRanges,n.recentlyRemovedDateranges));var L=n.fragments;if(s){C.logger.warn("discontinuity sliding from playlist, take drift into account");for(var S=0;S<L.length;S++)L[S].cc+=s}n.skippedSegments&&(n.startCC=n.fragments[0].cc),f(o.partList,n.partList,function(F,K){K.elementaryStreams=F.elementaryStreams,K.stats=F.stats}),l?y(n,l,l.startPTS,l.endPTS,l.startDTS,l.endDTS):t(o,n),L.length&&(n.totalduration=n.edge-L[0].start),n.driftStartTime=o.driftStartTime,n.driftStart=o.driftStart;var k=n.advancedDateTime;if(n.advanced&&k){var N=n.edge;n.driftStart||(n.driftStartTime=k,n.driftStart=N),n.driftEndTime=k,n.driftEnd=N}else n.driftEndTime=o.driftEndTime,n.driftEnd=o.driftEnd,n.advancedDateTime=o.advancedDateTime}function h(o,n,r){var g=R({},o);return r&&r.forEach(function(c){delete g[c]}),Object.keys(n).forEach(function(c){var d=new T.DateRange(n[c].attr,g[c]);d.isValid?g[c]=d:C.logger.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "'+JSON.stringify(n[c].attr)+'"')}),g}function f(o,n,r){if(o&&n)for(var g=0,c=0,d=o.length;c<=d;c++){var s=o[c],l=n[c+g];s&&l&&s.index===l.index&&s.fragment.sn===l.fragment.sn?r(s,l):g--}}function v(o,n,r){for(var g=n.skippedSegments,c=Math.max(o.startSN,n.startSN)-n.startSN,d=(o.fragmentHint?1:0)+(g?n.endSN:Math.min(o.endSN,n.endSN))-n.startSN,s=n.startSN-o.startSN,l=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments,u=o.fragmentHint?o.fragments.concat(o.fragmentHint):o.fragments,E=c;E<=d;E++){var L=u[s+E],S=l[E];g&&!S&&E<g&&(S=n.fragments[E]=L),L&&S&&r(L,S)}}function t(o,n){var r=n.startSN+n.skippedSegments-o.startSN,g=o.fragments;r<0||r>=g.length||e(n,g[r].start)}function e(o,n){if(n){for(var r=o.fragments,g=o.skippedSegments;g<r.length;g++)r[g].start+=n;o.fragmentHint&&(o.fragmentHint.start+=n)}}function i(o,n){var r=1e3*o.levelTargetDuration,g=r/2,c=o.age,d=c>0&&c<r*3,s=n.loading.end-n.loading.start,l,u=o.availabilityDelay;if(o.updated===!1)if(d){var E=333*o.misses;l=Math.max(Math.min(g,s*2),E),o.availabilityDelay=(o.availabilityDelay||0)+l}else l=g;else d?(u=Math.min(u||r/2,c),o.availabilityDelay=u,l=u+r-c):l=r-s;return Math.round(l)}function p(o,n,r){if(!o||!o.details)return null;var g=o.details,c=g.fragments[n-g.startSN];return c||(c=g.fragmentHint,c&&c.sn===n)?c:n<g.startSN&&r&&r.sn===n?r:null}function m(o,n,r){if(!o||!o.details)return null;var g=o.details.partList;if(g)for(var c=g.length;c--;){var d=g[c];if(d.index===r&&d.fragment.sn===n)return d}return null}},"./src/controller/stream-controller.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return m});var M=x("./src/polyfills/number.ts"),C=x("./src/controller/base-stream-controller.ts"),T=x("./src/is-supported.ts"),R=x("./src/events.ts"),O=x("./src/utils/buffer-helper.ts"),I=x("./src/controller/fragment-tracker.ts"),b=x("./src/types/loader.ts"),a=x("./src/loader/fragment.ts"),y=x("./src/demux/transmuxer-interface.ts"),A=x("./src/types/transmuxer.ts"),h=x("./src/controller/gap-controller.ts"),f=x("./src/errors.ts");function v(o,n){for(var r=0;r<n.length;r++){var g=n[r];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(o,g.key,g)}}function t(o,n,r){return n&&v(o.prototype,n),r&&v(o,r),Object.defineProperty(o,"prototype",{writable:!1}),o}function e(o,n){o.prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n)}function i(o,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,c){return g.__proto__=c,g},i(o,n)}var p=100,m=function(o){e(n,o);function n(g,c){var d;return d=o.call(this,g,c,"[stream-controller]")||this,d.audioCodecSwap=!1,d.gapController=null,d.level=-1,d._forceStartLoad=!1,d.altAudio=!1,d.audioOnly=!1,d.fragPlaying=null,d.onvplaying=null,d.onvseeked=null,d.fragLastKbps=0,d.couldBacktrack=!1,d.backtrackFragment=null,d.audioCodecSwitch=!1,d.videoBuffer=null,d._registerListeners(),d}var r=n.prototype;return r._registerListeners=function(){var c=this.hls;c.on(R.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.on(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.on(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.on(R.Events.MANIFEST_PARSED,this.onManifestParsed,this),c.on(R.Events.LEVEL_LOADING,this.onLevelLoading,this),c.on(R.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.on(R.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),c.on(R.Events.ERROR,this.onError,this),c.on(R.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.on(R.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),c.on(R.Events.BUFFER_CREATED,this.onBufferCreated,this),c.on(R.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.on(R.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),c.on(R.Events.FRAG_BUFFERED,this.onFragBuffered,this)},r._unregisterListeners=function(){var c=this.hls;c.off(R.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.off(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.off(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.off(R.Events.MANIFEST_PARSED,this.onManifestParsed,this),c.off(R.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.off(R.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),c.off(R.Events.ERROR,this.onError,this),c.off(R.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.off(R.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),c.off(R.Events.BUFFER_CREATED,this.onBufferCreated,this),c.off(R.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.off(R.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),c.off(R.Events.FRAG_BUFFERED,this.onFragBuffered,this)},r.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},r.startLoad=function(c){if(this.levels){var d=this.lastCurrentTime,s=this.hls;if(this.stopLoad(),this.setInterval(p),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var l=s.startLevel;l===-1&&(s.config.testBandwidth&&this.levels.length>1?(l=0,this.bitrateTest=!0):l=s.nextAutoLevel),this.level=s.nextLoadLevel=l,this.loadedmetadata=!1}d>0&&c===-1&&(this.log("Override startPosition with lastCurrentTime @"+d.toFixed(3)),c=d),this.state=C.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=c,this.tick()}else this._forceStartLoad=!0,this.state=C.State.STOPPED},r.stopLoad=function(){this._forceStartLoad=!1,o.prototype.stopLoad.call(this)},r.doTick=function(){switch(this.state){case C.State.IDLE:this.doTickIdle();break;case C.State.WAITING_LEVEL:{var c,d=this.levels,s=this.level,l=d==null||(c=d[s])===null||c===void 0?void 0:c.details;if(l&&(!l.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(l))break;this.state=C.State.IDLE;break}break}case C.State.FRAG_LOADING_WAITING_RETRY:{var u,E=self.performance.now(),L=this.retryDate;(!L||E>=L||(u=this.media)!==null&&u!==void 0&&u.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.level),this.state=C.State.IDLE)}break}this.onTickEnd()},r.onTickEnd=function(){o.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},r.doTickIdle=function(){var c,d,s=this.hls,l=this.levelLastLoaded,u=this.levels,E=this.media,L=s.config,S=s.nextLoadLevel;if(!(l===null||!E&&(this.startFragRequested||!L.startFragPrefetch))&&!(this.altAudio&&this.audioOnly)&&!(!u||!u[S])){var k=u[S];this.level=s.nextLoadLevel=S;var N=k.details;if(!N||this.state===C.State.WAITING_LEVEL||N.live&&this.levelLastLoaded!==S){this.state=C.State.WAITING_LEVEL;return}var F=this.getMainFwdBufferInfo();if(F!==null){var K=F.len,W=this.getMaxBufferLength(k.maxBitrate);if(!(K>=W)){if(this._streamEnded(F,N)){var z={};this.altAudio&&(z.type="video"),this.hls.trigger(R.Events.BUFFER_EOS,z),this.state=C.State.ENDED;return}this.backtrackFragment&&this.backtrackFragment.start>F.end&&(this.backtrackFragment=null);var H=this.backtrackFragment?this.backtrackFragment.start:F.end,Y=this.getNextFragment(H,N);if(this.couldBacktrack&&!this.fragPrevious&&Y&&Y.sn!=="initSegment"&&this.fragmentTracker.getState(Y)!==I.FragmentState.OK){var Q,Z=((Q=this.backtrackFragment)!=null?Q:Y).sn,$=Z-N.startSN,ee=N.fragments[$-1];ee&&Y.cc===ee.cc&&(Y=ee,this.fragmentTracker.removeFragment(ee))}else this.backtrackFragment&&F.len&&(this.backtrackFragment=null);if(Y&&this.fragmentTracker.getState(Y)===I.FragmentState.OK&&this.nextLoadPosition>H){var ie=this.audioOnly&&!this.altAudio?a.ElementaryStreamTypes.AUDIO:a.ElementaryStreamTypes.VIDEO;E&&this.afterBufferFlushed(E,ie,b.PlaylistLevelType.MAIN),Y=this.getNextFragment(this.nextLoadPosition,N)}!Y||(Y.initSegment&&!Y.initSegment.data&&!this.bitrateTest&&(Y=Y.initSegment),((c=Y.decryptdata)===null||c===void 0?void 0:c.keyFormat)==="identity"&&!((d=Y.decryptdata)!==null&&d!==void 0&&d.key)?this.loadKey(Y,N):this.loadFragment(Y,N,H))}}}},r.loadFragment=function(c,d,s){var l,u=this.fragmentTracker.getState(c);this.fragCurrent=c,u===I.FragmentState.NOT_LOADED?c.sn==="initSegment"?this._loadInitSegment(c):this.bitrateTest?(this.log("Fragment "+c.sn+" of level "+c.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(c)):(this.startFragRequested=!0,o.prototype.loadFragment.call(this,c,d,s)):u===I.FragmentState.APPENDING?this.reduceMaxBufferLength(c.duration)&&this.fragmentTracker.removeFragment(c):((l=this.media)===null||l===void 0?void 0:l.buffered.length)===0&&this.fragmentTracker.removeAllFragments()},r.getAppendedFrag=function(c){var d=this.fragmentTracker.getAppendedFrag(c,b.PlaylistLevelType.MAIN);return d&&"fragment"in d?d.fragment:d},r.getBufferedFrag=function(c){return this.fragmentTracker.getBufferedFrag(c,b.PlaylistLevelType.MAIN)},r.followingBufferedFrag=function(c){return c?this.getBufferedFrag(c.end+.5):null},r.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},r.nextLevelSwitch=function(){var c=this.levels,d=this.media;if(d!=null&&d.readyState){var s,l=this.getAppendedFrag(d.currentTime);if(l&&l.start>1&&this.flushMainBuffer(0,l.start-1),!d.paused&&c){var u=this.hls.nextLoadLevel,E=c[u],L=this.fragLastKbps;L&&this.fragCurrent?s=this.fragCurrent.duration*E.maxBitrate/(1e3*L)+1:s=0}else s=0;var S=this.getBufferedFrag(d.currentTime+s);if(S){var k=this.followingBufferedFrag(S);if(k){this.abortCurrentFrag();var N=k.maxStartPTS?k.maxStartPTS:k.start,F=k.duration,K=Math.max(S.end,N+Math.min(Math.max(F-this.config.maxFragLookUpTolerance,F*.5),F*.75));this.flushMainBuffer(K,Number.POSITIVE_INFINITY)}}}},r.abortCurrentFrag=function(){var c=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,c!=null&&c.loader&&c.loader.abort(),this.state){case C.State.KEY_LOADING:case C.State.FRAG_LOADING:case C.State.FRAG_LOADING_WAITING_RETRY:case C.State.PARSING:case C.State.PARSED:this.state=C.State.IDLE;break}this.nextLoadPosition=this.getLoadPosition()},r.flushMainBuffer=function(c,d){o.prototype.flushMainBuffer.call(this,c,d,this.altAudio?"video":null)},r.onMediaAttached=function(c,d){o.prototype.onMediaAttached.call(this,c,d);var s=d.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),s.addEventListener("playing",this.onvplaying),s.addEventListener("seeked",this.onvseeked),this.gapController=new h.default(this.config,s,this.fragmentTracker,this.hls)},r.onMediaDetaching=function(){var c=this.media;c&&this.onvplaying&&this.onvseeked&&(c.removeEventListener("playing",this.onvplaying),c.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),o.prototype.onMediaDetaching.call(this)},r.onMediaPlaying=function(){this.tick()},r.onMediaSeeked=function(){var c=this.media,d=c?c.currentTime:null;Object(M.isFiniteNumber)(d)&&this.log("Media seeked to "+d.toFixed(3)),this.tick()},r.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(R.Events.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null,this.backtrackFragment=null},r.onManifestParsed=function(c,d){var s=!1,l=!1,u;d.levels.forEach(function(E){u=E.audioCodec,u&&(u.indexOf("mp4a.40.2")!==-1&&(s=!0),u.indexOf("mp4a.40.5")!==-1&&(l=!0))}),this.audioCodecSwitch=s&&l&&!Object(T.changeTypeSupported)(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=d.levels,this.startFragRequested=!1},r.onLevelLoading=function(c,d){var s=this.levels;if(!(!s||this.state!==C.State.IDLE)){var l=s[d.level];(!l.details||l.details.live&&this.levelLastLoaded!==d.level||this.waitForCdnTuneIn(l.details))&&(this.state=C.State.WAITING_LEVEL)}},r.onLevelLoaded=function(c,d){var s,l=this.levels,u=d.level,E=d.details,L=E.totalduration;if(!l){this.warn("Levels were reset while loading level "+u);return}this.log("Level "+u+" loaded ["+E.startSN+","+E.endSN+"], cc ["+E.startCC+", "+E.endCC+"] duration:"+L);var S=this.fragCurrent;S&&(this.state===C.State.FRAG_LOADING||this.state===C.State.FRAG_LOADING_WAITING_RETRY)&&S.level!==d.level&&S.loader&&(this.state=C.State.IDLE,this.backtrackFragment=null,S.loader.abort());var k=l[u],N=0;if(E.live||(s=k.details)!==null&&s!==void 0&&s.live){if(E.fragments[0]||(E.deltaUpdateFailed=!0),E.deltaUpdateFailed)return;N=this.alignPlaylists(E,k.details)}if(k.details=E,this.levelLastLoaded=u,this.hls.trigger(R.Events.LEVEL_UPDATED,{details:E,level:u}),this.state===C.State.WAITING_LEVEL){if(this.waitForCdnTuneIn(E))return;this.state=C.State.IDLE}this.startFragRequested?E.live&&this.synchronizeToLiveEdge(E):this.setStartPosition(E,N),this.tick()},r._handleFragmentLoadProgress=function(c){var d,s=c.frag,l=c.part,u=c.payload,E=this.levels;if(!E){this.warn("Levels were reset while fragment load was in progress. Fragment "+s.sn+" of level "+s.level+" will not be buffered");return}var L=E[s.level],S=L.details;if(!S){this.warn("Dropping fragment "+s.sn+" of level "+s.level+" after level details were reset");return}var k=L.videoCodec,N=S.PTSKnown||!S.live,F=(d=s.initSegment)===null||d===void 0?void 0:d.data,K=this._getAudioCodec(L),W=this.transmuxer=this.transmuxer||new y.default(this.hls,b.PlaylistLevelType.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),z=l?l.index:-1,H=z!==-1,Y=new A.ChunkMetadata(s.level,s.sn,s.stats.chunkCount,u.byteLength,z,H),Q=this.initPTS[s.cc];W.push(u,F,K,k,s,l,S.totalduration,N,Y,Q)},r.onAudioTrackSwitching=function(c,d){var s=this.altAudio,l=!!d.url,u=d.id;if(!l){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var E=this.fragCurrent;E!=null&&E.loader&&(this.log("Switching to main audio track, cancel main fragment load"),E.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var L=this.hls;s&&L.trigger(R.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),L.trigger(R.Events.AUDIO_TRACK_SWITCHED,{id:u})}},r.onAudioTrackSwitched=function(c,d){var s=d.id,l=!!this.hls.audioTracks[s].url;if(l){var u=this.videoBuffer;u&&this.mediaBuffer!==u&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=u)}this.altAudio=l,this.tick()},r.onBufferCreated=function(c,d){var s=d.tracks,l,u,E=!1;for(var L in s){var S=s[L];if(S.id==="main"){if(u=L,l=S,L==="video"){var k=s[L];k&&(this.videoBuffer=k.buffer)}}else E=!0}E&&l?(this.log("Alternate track found, use "+u+".buffered to schedule main fragment loading"),this.mediaBuffer=l.buffer):this.mediaBuffer=this.media},r.onFragBuffered=function(c,d){var s=d.frag,l=d.part;if(!(s&&s.type!==b.PlaylistLevelType.MAIN)){if(this.fragContextChanged(s)){this.warn("Fragment "+s.sn+(l?" p: "+l.index:"")+" of level "+s.level+" finished buffering, but was aborted. state: "+this.state),this.state===C.State.PARSED&&(this.state=C.State.IDLE);return}var u=l?l.stats:s.stats;this.fragLastKbps=Math.round(8*u.total/(u.buffering.end-u.loading.first)),s.sn!=="initSegment"&&(this.fragPrevious=s),this.fragBufferedComplete(s,l)}},r.onError=function(c,d){switch(d.details){case f.ErrorDetails.FRAG_LOAD_ERROR:case f.ErrorDetails.FRAG_LOAD_TIMEOUT:case f.ErrorDetails.KEY_LOAD_ERROR:case f.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(b.PlaylistLevelType.MAIN,d);break;case f.ErrorDetails.LEVEL_LOAD_ERROR:case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==C.State.ERROR&&(d.fatal?(this.warn(""+d.details),this.state=C.State.ERROR):!d.levelRetry&&this.state===C.State.WAITING_LEVEL&&(this.state=C.State.IDLE));break;case f.ErrorDetails.BUFFER_FULL_ERROR:if(d.parent==="main"&&(this.state===C.State.PARSING||this.state===C.State.PARSED)){var s=!0,l=this.getFwdBufferInfo(this.media,b.PlaylistLevelType.MAIN);l&&l.len>.5&&(s=!this.reduceMaxBufferLength(l.len)),s&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}break}},r.checkBuffer=function(){var c=this.media,d=this.gapController;if(!(!c||!d||!c.readyState)){if(this.loadedmetadata||!O.BufferHelper.getBuffered(c).length){var s=this.state!==C.State.IDLE?this.fragCurrent:null;d.poll(this.lastCurrentTime,s)}this.lastCurrentTime=c.currentTime}},r.onFragLoadEmergencyAborted=function(){this.state=C.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},r.onBufferFlushed=function(c,d){var s=d.type;if(s!==a.ElementaryStreamTypes.AUDIO||this.audioOnly&&!this.altAudio){var l=(s===a.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(l,s,b.PlaylistLevelType.MAIN)}},r.onLevelsUpdated=function(c,d){this.levels=d.levels},r.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},r.seekToStartPos=function(){var c=this.media;if(!!c){var d=c.currentTime,s=this.startPosition;if(s>=0&&d<s){if(c.seeking){this.log("could not seek to "+s+", already seeking at "+d);return}var l=O.BufferHelper.getBuffered(c),u=l.length?l.start(0):0,E=u-s;E>0&&(E<this.config.maxBufferHole||E<this.config.maxFragLookUpTolerance)&&(this.log("adjusting start position by "+E+" to match buffer start"),s+=E,this.startPosition=s),this.log("seek to target start position "+s+" from current time "+d),c.currentTime=s}}},r._getAudioCodec=function(c){var d=this.config.defaultAudioCodec||c.audioCodec;return this.audioCodecSwap&&d&&(this.log("Swapping audio codec"),d.indexOf("mp4a.40.5")!==-1?d="mp4a.40.2":d="mp4a.40.5"),d},r._loadBitrateTestFrag=function(c){var d=this;c.bitrateTest=!0,this._doFragLoad(c).then(function(s){var l=d.hls;if(!(!s||l.nextLoadLevel||d.fragContextChanged(c))){d.fragLoadError=0,d.state=C.State.IDLE,d.startFragRequested=!1,d.bitrateTest=!1;var u=c.stats;u.parsing.start=u.parsing.end=u.buffering.start=u.buffering.end=self.performance.now(),l.trigger(R.Events.FRAG_LOADED,s),c.bitrateTest=!1}})},r._handleTransmuxComplete=function(c){var d,s="main",l=this.hls,u=c.remuxResult,E=c.chunkMeta,L=this.getCurrentContext(E);if(!L){this.warn("The loading context changed while buffering fragment "+E.sn+" of level "+E.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(E.level);return}var S=L.frag,k=L.part,N=L.level,F=u.video,K=u.text,W=u.id3,z=u.initSegment,H=N.details,Y=this.altAudio?void 0:u.audio;if(!this.fragContextChanged(S)){if(this.state=C.State.PARSING,z){z.tracks&&(this._bufferInitSegment(N,z.tracks,S,E),l.trigger(R.Events.FRAG_PARSING_INIT_SEGMENT,{frag:S,id:s,tracks:z.tracks}));var Q=z.initPTS,Z=z.timescale;Object(M.isFiniteNumber)(Q)&&(this.initPTS[S.cc]=Q,l.trigger(R.Events.INIT_PTS_FOUND,{frag:S,id:s,initPTS:Q,timescale:Z}))}if(F&&u.independent!==!1){if(H){var $=F.startPTS,ee=F.endPTS,ie=F.startDTS,ae=F.endDTS;if(k)k.elementaryStreams[F.type]={startPTS:$,endPTS:ee,startDTS:ie,endDTS:ae};else if(F.firstKeyFrame&&F.independent&&(this.couldBacktrack=!0),F.dropped&&F.independent){var q=this.getMainFwdBufferInfo(),oe=(q?q.end:this.getLoadPosition())+this.config.maxBufferHole,ne=F.firstKeyFramePTS?F.firstKeyFramePTS:$;if(oe<ne-this.config.maxBufferHole){this.backtrack(S);return}S.setElementaryStreamInfo(F.type,S.start,ee,S.start,ae,!0)}S.setElementaryStreamInfo(F.type,$,ee,ie,ae),this.backtrackFragment&&(this.backtrackFragment=S),this.bufferFragmentData(F,S,k,E)}}else if(u.independent===!1){this.backtrack(S);return}if(Y){var re=Y.startPTS,ue=Y.endPTS,le=Y.startDTS,fe=Y.endDTS;k&&(k.elementaryStreams[a.ElementaryStreamTypes.AUDIO]={startPTS:re,endPTS:ue,startDTS:le,endDTS:fe}),S.setElementaryStreamInfo(a.ElementaryStreamTypes.AUDIO,re,ue,le,fe),this.bufferFragmentData(Y,S,k,E)}if(H&&W!==null&&W!==void 0&&(d=W.samples)!==null&&d!==void 0&&d.length){var ye={id:s,frag:S,details:H,samples:W.samples};l.trigger(R.Events.FRAG_PARSING_METADATA,ye)}if(H&&K){var pe={id:s,frag:S,details:H,samples:K.samples};l.trigger(R.Events.FRAG_PARSING_USERDATA,pe)}}},r._bufferInitSegment=function(c,d,s,l){var u=this;if(this.state===C.State.PARSING){this.audioOnly=!!d.audio&&!d.video,this.altAudio&&!this.audioOnly&&delete d.audio;var E=d.audio,L=d.video,S=d.audiovideo;if(E){var k=c.audioCodec,N=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(k&&(k.indexOf("mp4a.40.5")!==-1?k="mp4a.40.2":k="mp4a.40.5"),E.metadata.channelCount!==1&&N.indexOf("firefox")===-1&&(k="mp4a.40.5")),N.indexOf("android")!==-1&&E.container!=="audio/mpeg"&&(k="mp4a.40.2",this.log("Android: force audio codec to "+k)),c.audioCodec&&c.audioCodec!==k&&this.log('Swapping manifest audio codec "'+c.audioCodec+'" for "'+k+'"'),E.levelCodec=k,E.id="main",this.log("Init audio buffer, container:"+E.container+", codecs[selected/level/parsed]=["+(k||"")+"/"+(c.audioCodec||"")+"/"+E.codec+"]")}L&&(L.levelCodec=c.videoCodec,L.id="main",this.log("Init video buffer, container:"+L.container+", codecs[level/parsed]=["+(c.videoCodec||"")+"/"+L.codec+"]")),S&&this.log("Init audiovideo buffer, container:"+S.container+", codecs[level/parsed]=["+(c.attrs.CODECS||"")+"/"+S.codec+"]"),this.hls.trigger(R.Events.BUFFER_CODECS,d),Object.keys(d).forEach(function(F){var K=d[F],W=K.initSegment;W!=null&&W.byteLength&&u.hls.trigger(R.Events.BUFFER_APPENDING,{type:F,data:W,frag:s,part:null,chunkMeta:l,parent:s.type})}),this.tick()}},r.getMainFwdBufferInfo=function(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,b.PlaylistLevelType.MAIN)},r.backtrack=function(c){this.couldBacktrack=!0,this.backtrackFragment=c,this.resetTransmuxer(),this.flushBufferGap(c),this.fragmentTracker.removeFragment(c),this.fragPrevious=null,this.nextLoadPosition=c.start,this.state=C.State.IDLE},r.checkFragmentChanged=function(){var c=this.media,d=null;if(c&&c.readyState>1&&c.seeking===!1){var s=c.currentTime;if(O.BufferHelper.isBuffered(c,s)?d=this.getAppendedFrag(s):O.BufferHelper.isBuffered(c,s+.1)&&(d=this.getAppendedFrag(s+.1)),d){this.backtrackFragment=null;var l=this.fragPlaying,u=d.level;(!l||d.sn!==l.sn||l.level!==u||d.urlId!==l.urlId)&&(this.hls.trigger(R.Events.FRAG_CHANGED,{frag:d}),(!l||l.level!==u)&&this.hls.trigger(R.Events.LEVEL_SWITCHED,{level:u}),this.fragPlaying=d)}}},t(n,[{key:"nextLevel",get:function(){var c=this.nextBufferedFrag;return c?c.level:-1}},{key:"currentFrag",get:function(){var c=this.media;return c?this.fragPlaying||this.getAppendedFrag(c.currentTime):null}},{key:"currentProgramDateTime",get:function(){var c=this.media;if(c){var d=c.currentTime,s=this.currentFrag;if(s&&Object(M.isFiniteNumber)(d)&&Object(M.isFiniteNumber)(s.programDateTime)){var l=s.programDateTime+(d-s.start)*1e3;return new Date(l)}}return null}},{key:"currentLevel",get:function(){var c=this.currentFrag;return c?c.level:-1}},{key:"nextBufferedFrag",get:function(){var c=this.currentFrag;return c?this.followingBufferedFrag(c):null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),n}(C.default)},"./src/controller/subtitle-stream-controller.ts":function(X,B,x){x.r(B),x.d(B,"SubtitleStreamController",function(){return e});var M=x("./src/events.ts"),C=x("./src/utils/buffer-helper.ts"),T=x("./src/controller/fragment-finders.ts"),R=x("./src/utils/discontinuities.ts"),O=x("./src/controller/level-helper.ts"),I=x("./src/controller/fragment-tracker.ts"),b=x("./src/controller/base-stream-controller.ts"),a=x("./src/types/loader.ts"),y=x("./src/types/level.ts");function A(p,m){for(var o=0;o<m.length;o++){var n=m[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(p,n.key,n)}}function h(p,m,o){return m&&A(p.prototype,m),o&&A(p,o),Object.defineProperty(p,"prototype",{writable:!1}),p}function f(p,m){p.prototype=Object.create(m.prototype),p.prototype.constructor=p,v(p,m)}function v(p,m){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},v(p,m)}var t=500,e=function(p){f(m,p);function m(n,r){var g;return g=p.call(this,n,r,"[subtitle-stream-controller]")||this,g.levels=[],g.currentTrackId=-1,g.tracksBuffered=[],g.mainDetails=null,g._registerListeners(),g}var o=m.prototype;return o.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},o._registerListeners=function(){var r=this.hls;r.on(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),r.on(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this),r.on(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),r.on(M.Events.LEVEL_LOADED,this.onLevelLoaded,this),r.on(M.Events.ERROR,this.onError,this),r.on(M.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),r.on(M.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),r.on(M.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),r.on(M.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),r.on(M.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},o._unregisterListeners=function(){var r=this.hls;r.off(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),r.off(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this),r.off(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),r.off(M.Events.LEVEL_LOADED,this.onLevelLoaded,this),r.off(M.Events.ERROR,this.onError,this),r.off(M.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),r.off(M.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),r.off(M.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),r.off(M.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),r.off(M.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},o.startLoad=function(){this.stopLoad(),this.state=b.State.IDLE,this.setInterval(t),this.tick()},o.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},o.onLevelLoaded=function(r,g){this.mainDetails=g.details},o.onSubtitleFragProcessed=function(r,g){var c=g.frag,d=g.success;if(this.fragPrevious=c,this.state=b.State.IDLE,!!d){var s=this.tracksBuffered[this.currentTrackId];if(!!s){for(var l,u=c.start,E=0;E<s.length;E++)if(u>=s[E].start&&u<=s[E].end){l=s[E];break}var L=c.start+c.duration;l?l.end=L:(l={start:u,end:L},s.push(l)),this.fragmentTracker.fragBuffered(c)}}},o.onBufferFlushing=function(r,g){var c=g.startOffset,d=g.endOffset;if(c===0&&d!==Number.POSITIVE_INFINITY){var s=this.currentTrackId,l=this.levels;if(!l.length||!l[s]||!l[s].details)return;var u=l[s].details,E=u.targetduration,L=d-E;if(L<=0)return;g.endOffsetSubtitles=Math.max(0,L),this.tracksBuffered.forEach(function(S){for(var k=0;k<S.length;){if(S[k].end<=L){S.shift();continue}else if(S[k].start<L)S[k].start=L;else break;k++}}),this.fragmentTracker.removeFragmentsInRange(c,L,a.PlaylistLevelType.SUBTITLE)}},o.onError=function(r,g){var c,d=g.frag;!d||d.type!==a.PlaylistLevelType.SUBTITLE||((c=this.fragCurrent)!==null&&c!==void 0&&c.loader&&this.fragCurrent.loader.abort(),this.state=b.State.IDLE)},o.onSubtitleTracksUpdated=function(r,g){var c=this,d=g.subtitleTracks;this.tracksBuffered=[],this.levels=d.map(function(s){return new y.Level(s)}),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach(function(s){c.tracksBuffered[s.id]=[]}),this.mediaBuffer=null},o.onSubtitleTrackSwitch=function(r,g){if(this.currentTrackId=g.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}var c=this.levels[this.currentTrackId];c!=null&&c.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,c&&this.setInterval(t)},o.onSubtitleTrackLoaded=function(r,g){var c,d=g.details,s=g.id,l=this.currentTrackId,u=this.levels;if(!!u.length){var E=u[l];if(!(s>=u.length||s!==l||!E)){if(this.mediaBuffer=this.mediaBufferTimeRanges,d.live||(c=E.details)!==null&&c!==void 0&&c.live){var L=this.mainDetails;if(d.deltaUpdateFailed||!L)return;var S=L.fragments[0];if(!E.details)d.hasProgramDateTime&&L.hasProgramDateTime?Object(R.alignMediaPlaylistByPDT)(d,L):S&&Object(O.addSliding)(d,S.start);else{var k=this.alignPlaylists(d,E.details);k===0&&S&&Object(O.addSliding)(d,S.start)}}if(E.details=d,this.levelLastLoaded=s,this.tick(),d.live&&!this.fragCurrent&&this.media&&this.state===b.State.IDLE){var N=Object(T.findFragmentByPTS)(null,d.fragments,this.media.currentTime,0);N||(this.warn("Subtitle playlist not aligned with playback"),E.details=void 0)}}}},o._handleFragmentLoadComplete=function(r){var g=r.frag,c=r.payload,d=g.decryptdata,s=this.hls;if(!this.fragContextChanged(g)&&c&&c.byteLength>0&&d&&d.key&&d.iv&&d.method==="AES-128"){var l=performance.now();this.decrypter.webCryptoDecrypt(new Uint8Array(c),d.key.buffer,d.iv.buffer).then(function(u){var E=performance.now();s.trigger(M.Events.FRAG_DECRYPTED,{frag:g,payload:u,stats:{tstart:l,tdecrypt:E}})})}},o.doTick=function(){if(!this.media){this.state=b.State.IDLE;return}if(this.state===b.State.IDLE){var r=this.currentTrackId,g=this.levels;if(!g.length||!g[r]||!g[r].details)return;var c=g[r].details,d=c.targetduration,s=this.config,l=this.media,u=C.BufferHelper.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],l.currentTime-d,s.maxBufferHole),E=u.end,L=u.len,S=this.getMaxBufferLength()+d;if(L>S)return;console.assert(c,"Subtitle track details are defined on idle subtitle stream controller tick");var k=c.fragments,N=k.length,F=c.edge,K,W=this.fragPrevious;if(E<F){var z=s.maxFragLookUpTolerance;K=Object(T.findFragmentByPTS)(W,k,Math.max(k[0].start,E),z),!K&&W&&W.start<k[0].start&&(K=k[0])}else K=k[N-1];if(K=this.mapToInitFragWhenRequired(K),!K||this.fragmentTracker.getState(K)!==I.FragmentState.NOT_LOADED)return;K.encrypted?this.loadKey(K,c):this.loadFragment(K,c,E)}},o.loadFragment=function(r,g,c){this.fragCurrent=r,r.sn==="initSegment"?this._loadInitSegment(r):p.prototype.loadFragment.call(this,r,g,c)},h(m,[{key:"mediaBufferTimeRanges",get:function(){return new i(this.tracksBuffered[this.currentTrackId]||[])}}]),m}(b.default),i=function(m){this.buffered=void 0;var o=function(r,g,c){if(g=g>>>0,g>c-1)throw new DOMException("Failed to execute '"+r+"' on 'TimeRanges': The index provided ("+g+") is greater than the maximum bound ("+c+")");return m[g][r]};this.buffered={get length(){return m.length},end:function(r){return o("end",r,m.length)},start:function(r){return o("start",r,m.length)}}}},"./src/controller/subtitle-track-controller.ts":function(X,B,x){x.r(B);var M=x("./src/events.ts"),C=x("./src/utils/texttrack-utils.ts"),T=x("./src/controller/base-playlist-controller.ts"),R=x("./src/types/loader.ts");function O(h,f){for(var v=0;v<f.length;v++){var t=f[v];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(h,t.key,t)}}function I(h,f,v){return f&&O(h.prototype,f),v&&O(h,v),Object.defineProperty(h,"prototype",{writable:!1}),h}function b(h,f){h.prototype=Object.create(f.prototype),h.prototype.constructor=h,a(h,f)}function a(h,f){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(h,f)}var y=function(h){b(f,h);function f(t){var e;return e=h.call(this,t,"[subtitle-track-controller]")||this,e.media=null,e.tracks=[],e.groupId=null,e.tracksInGroup=[],e.trackId=-1,e.selectDefaultTrack=!0,e.queuedDefaultTrack=-1,e.trackChangeListener=function(){return e.onTextTracksChanged()},e.asyncPollTrackChange=function(){return e.pollTrackChange(0)},e.useTextTrackPolling=!1,e.subtitlePollingInterval=-1,e._subtitleDisplay=!0,e.registerListeners(),e}var v=f.prototype;return v.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,h.prototype.destroy.call(this)},v.registerListeners=function(){var e=this.hls;e.on(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.on(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),e.on(M.Events.LEVEL_LOADING,this.onLevelLoading,this),e.on(M.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(M.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(M.Events.ERROR,this.onError,this)},v.unregisterListeners=function(){var e=this.hls;e.off(M.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(M.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(M.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.off(M.Events.MANIFEST_PARSED,this.onManifestParsed,this),e.off(M.Events.LEVEL_LOADING,this.onLevelLoading,this),e.off(M.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(M.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(M.Events.ERROR,this.onError,this)},v.onMediaAttached=function(e,i){this.media=i.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},v.pollTrackChange=function(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,e)},v.onMediaDetaching=function(){if(!!this.media){self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId);var e=A(this.media.textTracks);e.forEach(function(i){Object(C.clearCurrentCues)(i)}),this.subtitleTrack=-1,this.media=null}},v.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},v.onManifestParsed=function(e,i){this.tracks=i.subtitleTracks},v.onSubtitleTrackLoaded=function(e,i){var p=i.id,m=i.details,o=this.trackId,n=this.tracksInGroup[o];if(!n){this.warn("Invalid subtitle track id "+p);return}var r=n.details;n.details=i.details,this.log("subtitle track "+p+" loaded ["+m.startSN+"-"+m.endSN+"]"),p===this.trackId&&(this.retryCount=0,this.playlistLoaded(p,i,r))},v.onLevelLoading=function(e,i){this.switchLevel(i.level)},v.onLevelSwitching=function(e,i){this.switchLevel(i.level)},v.switchLevel=function(e){var i=this.hls.levels[e];if(!!(i!=null&&i.textGroupIds)){var p=i.textGroupIds[i.urlId];if(this.groupId!==p){var m=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,o=this.tracks.filter(function(g){return!p||g.groupId===p});this.tracksInGroup=o;var n=this.findTrackId(m==null?void 0:m.name)||this.findTrackId();this.groupId=p;var r={subtitleTracks:o};this.log("Updating subtitle tracks, "+o.length+' track(s) found in "'+p+'" group-id'),this.hls.trigger(M.Events.SUBTITLE_TRACKS_UPDATED,r),n!==-1&&this.setSubtitleTrack(n,m)}}},v.findTrackId=function(e){for(var i=this.tracksInGroup,p=0;p<i.length;p++){var m=i[p];if((!this.selectDefaultTrack||m.default)&&(!e||e===m.name))return m.id}return-1},v.onError=function(e,i){h.prototype.onError.call(this,e,i),!(i.fatal||!i.context)&&i.context.type===R.PlaylistContextType.SUBTITLE_TRACK&&i.context.id===this.trackId&&i.context.groupId===this.groupId&&this.retryLoadingOrFail(i)},v.loadPlaylist=function(e){var i=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(i)){var p=i.id,m=i.groupId,o=i.url;if(e)try{o=e.addDirectives(o)}catch(n){this.warn("Could not construct new URL with HLS Delivery Directives: "+n)}this.log("Loading subtitle playlist for id "+p),this.hls.trigger(M.Events.SUBTITLE_TRACK_LOADING,{url:o,id:p,groupId:m,deliveryDirectives:e||null})}},v.toggleTrackModes=function(e){var i=this,p=this.media,m=this.trackId;if(!!p){var o=A(p.textTracks),n=o.filter(function(c){return c.groupId===i.groupId});if(e===-1)[].slice.call(o).forEach(function(c){c.mode="disabled"});else{var r=n[m];r&&(r.mode="disabled")}var g=n[e];g&&(g.mode=this.subtitleDisplay?"showing":"hidden")}},v.setSubtitleTrack=function(e,i){var p,m=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(this.trackId!==e&&this.toggleTrackModes(e),!(this.trackId===e&&(e===-1||(p=m[e])!==null&&p!==void 0&&p.details)||e<-1||e>=m.length)){this.clearTimer();var o=m[e];if(this.log("Switching to subtitle track "+e),this.trackId=e,o){var n=o.id,r=o.groupId,g=r===void 0?"":r,c=o.name,d=o.type,s=o.url;this.hls.trigger(M.Events.SUBTITLE_TRACK_SWITCH,{id:n,groupId:g,name:c,type:d,url:s});var l=this.switchParams(o.url,i==null?void 0:i.details);this.loadPlaylist(l)}else this.hls.trigger(M.Events.SUBTITLE_TRACK_SWITCH,{id:e})}},v.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!(!this.media||!this.hls.config.renderTextTracksNatively)){for(var e=-1,i=A(this.media.textTracks),p=0;p<i.length;p++)if(i[p].mode==="hidden")e=p;else if(i[p].mode==="showing"){e=p;break}this.subtitleTrack!==e&&(this.subtitleTrack=e)}},I(f,[{key:"subtitleDisplay",get:function(){return this._subtitleDisplay},set:function(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes(this.trackId)}},{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.selectDefaultTrack=!1;var i=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(e,i)}}]),f}(T.default);function A(h){for(var f=[],v=0;v<h.length;v++){var t=h[v];t.kind==="subtitles"&&t.label&&f.push(h[v])}return f}B.default=y},"./src/controller/timeline-controller.ts":function(X,B,x){x.r(B),x.d(B,"TimelineController",function(){return h});var M=x("./src/polyfills/number.ts"),C=x("./src/events.ts"),T=x("./src/utils/cea-608-parser.ts"),R=x("./src/utils/output-filter.ts"),O=x("./src/utils/webvtt-parser.ts"),I=x("./src/utils/texttrack-utils.ts"),b=x("./src/utils/imsc1-ttml-parser.ts"),a=x("./src/utils/mp4-tools.ts"),y=x("./src/types/loader.ts"),A=x("./src/utils/logger.ts"),h=function(){function e(p){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=t(),this.captionsProperties=void 0,this.hls=p,this.config=p.config,this.Cues=p.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var m=new R.default(this,"textTrack1"),o=new R.default(this,"textTrack2"),n=new R.default(this,"textTrack3"),r=new R.default(this,"textTrack4");this.cea608Parser1=new T.default(1,m,o),this.cea608Parser2=new T.default(3,n,r)}p.on(C.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),p.on(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),p.on(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),p.on(C.Events.MANIFEST_LOADED,this.onManifestLoaded,this),p.on(C.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),p.on(C.Events.FRAG_LOADING,this.onFragLoading,this),p.on(C.Events.FRAG_LOADED,this.onFragLoaded,this),p.on(C.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),p.on(C.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),p.on(C.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),p.on(C.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),p.on(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)}var i=e.prototype;return i.destroy=function(){var m=this.hls;m.off(C.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.off(C.Events.MEDIA_DETACHING,this.onMediaDetaching,this),m.off(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.off(C.Events.MANIFEST_LOADED,this.onManifestLoaded,this),m.off(C.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),m.off(C.Events.FRAG_LOADING,this.onFragLoading,this),m.off(C.Events.FRAG_LOADED,this.onFragLoaded,this),m.off(C.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),m.off(C.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),m.off(C.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),m.off(C.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),m.off(C.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},i.addCues=function(m,o,n,r,g){for(var c=!1,d=g.length;d--;){var s=g[d],l=v(s[0],s[1],o,n);if(l>=0&&(s[0]=Math.min(s[0],o),s[1]=Math.max(s[1],n),c=!0,l/(n-o)>.5))return}if(c||g.push([o,n]),this.config.renderTextTracksNatively){var u=this.captionsTracks[m];this.Cues.newCue(u,o,n,r)}else{var E=this.Cues.newCue(null,o,n,r);this.hls.trigger(C.Events.CUES_PARSED,{type:"captions",cues:E,track:m})}},i.onInitPtsFound=function(m,o){var n=this,r=o.frag,g=o.id,c=o.initPTS,d=o.timescale,s=this.unparsedVttFrags;g==="main"&&(this.initPTS[r.cc]=c,this.timescale[r.cc]=d),s.length&&(this.unparsedVttFrags=[],s.forEach(function(l){n.onFragLoaded(C.Events.FRAG_LOADED,l)}))},i.getExistingTrack=function(m){var o=this.media;if(o)for(var n=0;n<o.textTracks.length;n++){var r=o.textTracks[n];if(r[m])return r}return null},i.createCaptionsTrack=function(m){this.config.renderTextTracksNatively?this.createNativeTrack(m):this.createNonNativeTrack(m)},i.createNativeTrack=function(m){if(!this.captionsTracks[m]){var o=this.captionsProperties,n=this.captionsTracks,r=this.media,g=o[m],c=g.label,d=g.languageCode,s=this.getExistingTrack(m);if(s)n[m]=s,Object(I.clearCurrentCues)(n[m]),Object(I.sendAddTrackEvent)(n[m],r);else{var l=this.createTextTrack("captions",c,d);l&&(l[m]=!0,n[m]=l)}}},i.createNonNativeTrack=function(m){if(!this.nonNativeCaptionsTracks[m]){var o=this.captionsProperties[m];if(!!o){var n=o.label,r={_id:m,label:n,kind:"captions",default:o.media?!!o.media.default:!1,closedCaptions:o.media};this.nonNativeCaptionsTracks[m]=r,this.hls.trigger(C.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},i.createTextTrack=function(m,o,n){var r=this.media;if(!!r)return r.addTextTrack(m,o,n)},i.onMediaAttaching=function(m,o){this.media=o.media,this._cleanTracks()},i.onMediaDetaching=function(){var m=this.captionsTracks;Object.keys(m).forEach(function(o){Object(I.clearCurrentCues)(m[o]),delete m[o]}),this.nonNativeCaptionsTracks={}},i.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=t(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},i._cleanTracks=function(){var m=this.media;if(!!m){var o=m.textTracks;if(o)for(var n=0;n<o.length;n++)Object(I.clearCurrentCues)(o[n])}},i.onSubtitleTracksUpdated=function(m,o){var n=this;this.textTracks=[];var r=o.subtitleTracks||[],g=r.some(function(l){return l.textCodec===b.IMSC1_CODEC});if(this.config.enableWebVTT||g&&this.config.enableIMSC1){var c=this.tracks&&r&&this.tracks.length===r.length;if(this.tracks=r||[],this.config.renderTextTracksNatively){var d=this.media?this.media.textTracks:[];this.tracks.forEach(function(l,u){var E;if(u<d.length){for(var L=null,S=0;S<d.length;S++)if(f(d[S],l)){L=d[S];break}L&&(E=L)}if(E)Object(I.clearCurrentCues)(E);else{var k=n._captionsOrSubtitlesFromCharacteristics(l);E=n.createTextTrack(k,l.name,l.lang),E&&(E.mode="disabled")}E&&(E.groupId=l.groupId,n.textTracks.push(E))})}else if(!c&&this.tracks&&this.tracks.length){var s=this.tracks.map(function(l){return{label:l.name,kind:l.type.toLowerCase(),default:l.default,subtitleTrack:l}});this.hls.trigger(C.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}},i._captionsOrSubtitlesFromCharacteristics=function(m){var o;if((o=m.attrs)!==null&&o!==void 0&&o.CHARACTERISTICS){var n=/transcribes-spoken-dialog/gi.test(m.attrs.CHARACTERISTICS),r=/describes-music-and-sound/gi.test(m.attrs.CHARACTERISTICS);if(n&&r)return"captions"}return"subtitles"},i.onManifestLoaded=function(m,o){var n=this;this.config.enableCEA708Captions&&o.captions&&o.captions.forEach(function(r){var g=/(?:CC|SERVICE)([1-4])/.exec(r.instreamId);if(!!g){var c="textTrack"+g[1],d=n.captionsProperties[c];!d||(d.label=r.name,r.lang&&(d.languageCode=r.lang),d.media=r)}})},i.onFragLoading=function(m,o){var n=this.cea608Parser1,r=this.cea608Parser2,g=this.lastSn,c=this.lastPartIndex;if(!(!this.enabled||!(n&&r))&&o.frag.type===y.PlaylistLevelType.MAIN){var d,s,l=o.frag.sn,u=(d=o==null||(s=o.part)===null||s===void 0?void 0:s.index)!=null?d:-1;l===g+1||l===g&&u===c+1||(n.reset(),r.reset()),this.lastSn=l,this.lastPartIndex=u}},i.onFragLoaded=function(m,o){var n=o.frag,r=o.payload,g=this.initPTS,c=this.unparsedVttFrags;if(n.type===y.PlaylistLevelType.SUBTITLE)if(r.byteLength){if(!Object(M.isFiniteNumber)(g[n.cc])){c.push(o),g.length&&this.hls.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Missing initial subtitle PTS")});return}var d=n.decryptdata,s="stats"in o;if(d==null||d.key==null||d.method!=="AES-128"||s){var l=this.tracks[n.level],u=this.vttCCs;u[n.cc]||(u[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),l&&l.textCodec===b.IMSC1_CODEC?this._parseIMSC1(n,r):this._parseVTTs(n,r,u)}}else this.hls.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})},i._parseIMSC1=function(m,o){var n=this,r=this.hls;Object(b.parseIMSC1)(o,this.initPTS[m.cc],this.timescale[m.cc],function(g){n._appendCues(g,m.level),r.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:m})},function(g){A.logger.log("Failed to parse IMSC1: "+g),r.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:m,error:g})})},i._parseVTTs=function(m,o,n){var r,g=this,c=this.hls,d=(r=m.initSegment)!==null&&r!==void 0&&r.data?Object(a.appendUint8Array)(m.initSegment.data,new Uint8Array(o)):o;Object(O.parseWebVTT)(d,this.initPTS[m.cc],this.timescale[m.cc],n,m.cc,m.start,function(s){g._appendCues(s,m.level),c.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:m})},function(s){g._fallbackToIMSC1(m,o),A.logger.log("Failed to parse VTT cue: "+s),c.trigger(C.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:m,error:s})})},i._fallbackToIMSC1=function(m,o){var n=this,r=this.tracks[m.level];r.textCodec||Object(b.parseIMSC1)(o,this.initPTS[m.cc],this.timescale[m.cc],function(){r.textCodec=b.IMSC1_CODEC,n._parseIMSC1(m,o)},function(){r.textCodec="wvtt"})},i._appendCues=function(m,o){var n=this.hls;if(this.config.renderTextTracksNatively){var r=this.textTracks[o];if(!r||r.mode==="disabled")return;m.forEach(function(d){return Object(I.addCueToTrack)(r,d)})}else{var g=this.tracks[o];if(!g)return;var c=g.default?"default":"subtitles"+o;n.trigger(C.Events.CUES_PARSED,{type:"subtitles",cues:m,track:c})}},i.onFragDecrypted=function(m,o){var n=o.frag;if(n.type===y.PlaylistLevelType.SUBTITLE){if(!Object(M.isFiniteNumber)(this.initPTS[n.cc])){this.unparsedVttFrags.push(o);return}this.onFragLoaded(C.Events.FRAG_LOADED,o)}},i.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},i.onFragParsingUserdata=function(m,o){var n=this.cea608Parser1,r=this.cea608Parser2;if(!(!this.enabled||!(n&&r)))for(var g=0;g<o.samples.length;g++){var c=o.samples[g].bytes;if(c){var d=this.extractCea608Data(c);n.addData(o.samples[g].pts,d[0]),r.addData(o.samples[g].pts,d[1])}}},i.onBufferFlushing=function(m,o){var n=o.startOffset,r=o.endOffset,g=o.endOffsetSubtitles,c=o.type,d=this.media;if(!(!d||d.currentTime<r)){if(!c||c==="video"){var s=this.captionsTracks;Object.keys(s).forEach(function(u){return Object(I.removeCuesInRange)(s[u],n,r)})}if(this.config.renderTextTracksNatively&&n===0&&g!==void 0){var l=this.textTracks;Object.keys(l).forEach(function(u){return Object(I.removeCuesInRange)(l[u],n,g)})}}},i.extractCea608Data=function(m){for(var o=[[],[]],n=m[0]&31,r=2,g=0;g<n;g++){var c=m[r++],d=127&m[r++],s=127&m[r++];if(!(d===0&&s===0)){var l=(4&c)!==0;if(l){var u=3&c;(u===0||u===1)&&(o[u].push(d),o[u].push(s))}}}return o},e}();function f(e,i){return e&&e.label===i.name&&!(e.textTrack1||e.textTrack2)}function v(e,i,p,m){return Math.min(i,m)-Math.max(e,p)}function t(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}},"./src/crypt/aes-crypto.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return M});var M=function(){function C(R,O){this.subtle=void 0,this.aesIV=void 0,this.subtle=R,this.aesIV=O}var T=C.prototype;return T.decrypt=function(O,I){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},I,O)},C}()},"./src/crypt/aes-decryptor.ts":function(X,B,x){x.r(B),x.d(B,"removePadding",function(){return C}),x.d(B,"default",function(){return T});var M=x("./src/utils/typed-array.ts");function C(R){var O=R.byteLength,I=O&&new DataView(R.buffer).getUint8(O-1);return I?Object(M.sliceUint8)(R,0,O-I):R}var T=function(){function R(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var O=R.prototype;return O.uint8ArrayToUint32Array_=function(b){for(var a=new DataView(b),y=new Uint32Array(4),A=0;A<4;A++)y[A]=a.getUint32(A*4);return y},O.initTable=function(){var b=this.sBox,a=this.invSBox,y=this.subMix,A=y[0],h=y[1],f=y[2],v=y[3],t=this.invSubMix,e=t[0],i=t[1],p=t[2],m=t[3],o=new Uint32Array(256),n=0,r=0,g=0;for(g=0;g<256;g++)g<128?o[g]=g<<1:o[g]=g<<1^283;for(g=0;g<256;g++){var c=r^r<<1^r<<2^r<<3^r<<4;c=c>>>8^c&255^99,b[n]=c,a[c]=n;var d=o[n],s=o[d],l=o[s],u=o[c]*257^c*16843008;A[n]=u<<24|u>>>8,h[n]=u<<16|u>>>16,f[n]=u<<8|u>>>24,v[n]=u,u=l*16843009^s*65537^d*257^n*16843008,e[c]=u<<24|u>>>8,i[c]=u<<16|u>>>16,p[c]=u<<8|u>>>24,m[c]=u,n?(n=d^o[o[o[l^d]]],r^=o[o[r]]):n=r=1}},O.expandKey=function(b){for(var a=this.uint8ArrayToUint32Array_(b),y=!0,A=0;A<a.length&&y;)y=a[A]===this.key[A],A++;if(!y){this.key=a;var h=this.keySize=a.length;if(h!==4&&h!==6&&h!==8)throw new Error("Invalid aes key size="+h);var f=this.ksRows=(h+6+1)*4,v,t,e=this.keySchedule=new Uint32Array(f),i=this.invKeySchedule=new Uint32Array(f),p=this.sBox,m=this.rcon,o=this.invSubMix,n=o[0],r=o[1],g=o[2],c=o[3],d,s;for(v=0;v<f;v++){if(v<h){d=e[v]=a[v];continue}s=d,v%h===0?(s=s<<8|s>>>24,s=p[s>>>24]<<24|p[s>>>16&255]<<16|p[s>>>8&255]<<8|p[s&255],s^=m[v/h|0]<<24):h>6&&v%h===4&&(s=p[s>>>24]<<24|p[s>>>16&255]<<16|p[s>>>8&255]<<8|p[s&255]),e[v]=d=(e[v-h]^s)>>>0}for(t=0;t<f;t++)v=f-t,t&3?s=e[v]:s=e[v-4],t<4||v<=4?i[t]=s:i[t]=n[p[s>>>24]]^r[p[s>>>16&255]]^g[p[s>>>8&255]]^c[p[s&255]],i[t]=i[t]>>>0}},O.networkToHostOrderSwap=function(b){return b<<24|(b&65280)<<8|(b&16711680)>>8|b>>>24},O.decrypt=function(b,a,y){for(var A=this.keySize+6,h=this.invKeySchedule,f=this.invSBox,v=this.invSubMix,t=v[0],e=v[1],i=v[2],p=v[3],m=this.uint8ArrayToUint32Array_(y),o=m[0],n=m[1],r=m[2],g=m[3],c=new Int32Array(b),d=new Int32Array(c.length),s,l,u,E,L,S,k,N,F,K,W,z,H,Y,Q=this.networkToHostOrderSwap;a<c.length;){for(F=Q(c[a]),K=Q(c[a+1]),W=Q(c[a+2]),z=Q(c[a+3]),L=F^h[0],S=z^h[1],k=W^h[2],N=K^h[3],H=4,Y=1;Y<A;Y++)s=t[L>>>24]^e[S>>16&255]^i[k>>8&255]^p[N&255]^h[H],l=t[S>>>24]^e[k>>16&255]^i[N>>8&255]^p[L&255]^h[H+1],u=t[k>>>24]^e[N>>16&255]^i[L>>8&255]^p[S&255]^h[H+2],E=t[N>>>24]^e[L>>16&255]^i[S>>8&255]^p[k&255]^h[H+3],L=s,S=l,k=u,N=E,H=H+4;s=f[L>>>24]<<24^f[S>>16&255]<<16^f[k>>8&255]<<8^f[N&255]^h[H],l=f[S>>>24]<<24^f[k>>16&255]<<16^f[N>>8&255]<<8^f[L&255]^h[H+1],u=f[k>>>24]<<24^f[N>>16&255]<<16^f[L>>8&255]<<8^f[S&255]^h[H+2],E=f[N>>>24]<<24^f[L>>16&255]<<16^f[S>>8&255]<<8^f[k&255]^h[H+3],d[a]=Q(s^o),d[a+1]=Q(E^n),d[a+2]=Q(u^r),d[a+3]=Q(l^g),o=F,n=K,r=W,g=z,a=a+4}return d.buffer},R}()},"./src/crypt/decrypter.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return a});var M=x("./src/crypt/aes-crypto.ts"),C=x("./src/crypt/fast-aes-key.ts"),T=x("./src/crypt/aes-decryptor.ts"),R=x("./src/utils/logger.ts"),O=x("./src/utils/mp4-tools.ts"),I=x("./src/utils/typed-array.ts"),b=16,a=function(){function y(h,f,v){var t=v===void 0?{}:v,e=t.removePKCS7Padding,i=e===void 0?!0:e;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=h,this.config=f,this.removePKCS7Padding=i,i)try{var p=self.crypto;p&&(this.subtle=p.subtle||p.webkitSubtle)}catch{}this.subtle===null&&(this.config.enableSoftwareAES=!0)}var A=y.prototype;return A.destroy=function(){this.observer=null},A.isSync=function(){return this.config.enableSoftwareAES},A.flush=function(){var f=this.currentResult;if(!f){this.reset();return}var v=new Uint8Array(f);return this.reset(),this.removePKCS7Padding?Object(T.removePadding)(v):v},A.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},A.decrypt=function(f,v,t,e){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(f),v,t);var i=this.flush();i&&e(i.buffer)}else this.webCryptoDecrypt(new Uint8Array(f),v,t).then(e)},A.softwareDecrypt=function(f,v,t){var e=this.currentIV,i=this.currentResult,p=this.remainderData;this.logOnce("JS AES decrypt"),p&&(f=Object(O.appendUint8Array)(p,f),this.remainderData=null);var m=this.getValidChunk(f);if(!m.length)return null;e&&(t=e);var o=this.softwareDecrypter;o||(o=this.softwareDecrypter=new T.default),o.expandKey(v);var n=i;return this.currentResult=o.decrypt(m.buffer,0,t),this.currentIV=Object(I.sliceUint8)(m,-16).buffer,n||null},A.webCryptoDecrypt=function(f,v,t){var e=this,i=this.subtle;return(this.key!==v||!this.fastAesKey)&&(this.key=v,this.fastAesKey=new C.default(i,v)),this.fastAesKey.expandKey().then(function(p){if(!i)return Promise.reject(new Error("web crypto not initialized"));var m=new M.default(i,t);return m.decrypt(f.buffer,p)}).catch(function(p){return e.onWebCryptoError(p,f,v,t)})},A.onWebCryptoError=function(f,v,t,e){return R.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",f),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(v,t,e)},A.getValidChunk=function(f){var v=f,t=f.length-f.length%b;return t!==f.length&&(v=Object(I.sliceUint8)(f,0,t),this.remainderData=Object(I.sliceUint8)(f,t)),v},A.logOnce=function(f){!this.logEnabled||(R.logger.log("[decrypter.ts]: "+f),this.logEnabled=!1)},y}()},"./src/crypt/fast-aes-key.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return M});var M=function(){function C(R,O){this.subtle=void 0,this.key=void 0,this.subtle=R,this.key=O}var T=C.prototype;return T.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},C}()},"./src/demux/aacdemuxer.ts":function(X,B,x){x.r(B);var M=x("./src/demux/base-audio-demuxer.ts"),C=x("./src/demux/adts.ts"),T=x("./src/utils/logger.ts"),R=x("./src/demux/id3.ts");function O(a,y){a.prototype=Object.create(y.prototype),a.prototype.constructor=a,I(a,y)}function I(a,y){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,f){return h.__proto__=f,h},I(a,y)}var b=function(a){O(y,a);function y(h,f){var v;return v=a.call(this)||this,v.observer=void 0,v.config=void 0,v.observer=h,v.config=f,v}var A=y.prototype;return A.resetInitSegment=function(f,v,t,e){a.prototype.resetInitSegment.call(this,f,v,t,e),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:v,duration:e,inputTimeScale:9e4,dropped:0}},y.probe=function(f){if(!f)return!1;for(var v=R.getID3Data(f,0)||[],t=v.length,e=f.length;t<e;t++)if(C.probe(f,t))return T.logger.log("ADTS sync word found !"),!0;return!1},A.canParse=function(f,v){return C.canParse(f,v)},A.appendFrame=function(f,v,t){C.initTrackConfig(f,this.observer,v,t,f.manifestCodec);var e=C.appendFrame(f,v,t,this.basePTS,this.frameIndex);if(e&&e.missing===0)return e},y}(M.default);B.default=b},"./src/demux/adts.ts":function(X,B,x){x.r(B),x.d(B,"getAudioConfig",function(){return R}),x.d(B,"isHeaderPattern",function(){return O}),x.d(B,"getHeaderLength",function(){return I}),x.d(B,"getFullFrameLength",function(){return b}),x.d(B,"canGetFrameLength",function(){return a}),x.d(B,"isHeader",function(){return y}),x.d(B,"canParse",function(){return A}),x.d(B,"probe",function(){return h}),x.d(B,"initTrackConfig",function(){return f}),x.d(B,"getFrameDuration",function(){return v}),x.d(B,"parseFrameHeader",function(){return t}),x.d(B,"appendFrame",function(){return e});var M=x("./src/utils/logger.ts"),C=x("./src/errors.ts"),T=x("./src/events.ts");function R(i,p,m,o){var n,r,g,c,d=navigator.userAgent.toLowerCase(),s=o,l=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];n=((p[m+2]&192)>>>6)+1;var u=(p[m+2]&60)>>>2;if(u>l.length-1){i.trigger(T.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+u});return}return g=(p[m+2]&1)<<2,g|=(p[m+3]&192)>>>6,M.logger.log("manifest codec:"+o+", ADTS type:"+n+", samplingIndex:"+u),/firefox/i.test(d)?u>=6?(n=5,c=new Array(4),r=u-3):(n=2,c=new Array(2),r=u):d.indexOf("android")!==-1?(n=2,c=new Array(2),r=u):(n=5,c=new Array(4),o&&(o.indexOf("mp4a.40.29")!==-1||o.indexOf("mp4a.40.5")!==-1)||!o&&u>=6?r=u-3:((o&&o.indexOf("mp4a.40.2")!==-1&&(u>=6&&g===1||/vivaldi/i.test(d))||!o&&g===1)&&(n=2,c=new Array(2)),r=u)),c[0]=n<<3,c[0]|=(u&14)>>1,c[1]|=(u&1)<<7,c[1]|=g<<3,n===5&&(c[1]|=(r&14)>>1,c[2]=(r&1)<<7,c[2]|=2<<2,c[3]=0),{config:c,samplerate:l[u],channelCount:g,codec:"mp4a.40."+n,manifestCodec:s}}function O(i,p){return i[p]===255&&(i[p+1]&246)===240}function I(i,p){return i[p+1]&1?7:9}function b(i,p){return(i[p+3]&3)<<11|i[p+4]<<3|(i[p+5]&224)>>>5}function a(i,p){return p+5<i.length}function y(i,p){return p+1<i.length&&O(i,p)}function A(i,p){return a(i,p)&&O(i,p)&&b(i,p)<=i.length-p}function h(i,p){if(y(i,p)){var m=I(i,p);if(p+m>=i.length)return!1;var o=b(i,p);if(o<=m)return!1;var n=p+o;return n===i.length||y(i,n)}return!1}function f(i,p,m,o,n){if(!i.samplerate){var r=R(p,m,o,n);if(!r)return;i.config=r.config,i.samplerate=r.samplerate,i.channelCount=r.channelCount,i.codec=r.codec,i.manifestCodec=r.manifestCodec,M.logger.log("parsed codec:"+i.codec+", rate:"+r.samplerate+", channels:"+r.channelCount)}}function v(i){return 1024*9e4/i}function t(i,p){var m=I(i,p);if(p+m<=i.length){var o=b(i,p)-m;if(o>0)return{headerLength:m,frameLength:o}}}function e(i,p,m,o,n){var r=v(i.samplerate),g=o+n*r,c=t(p,m),d;if(c){var s=c.frameLength,l=c.headerLength,u=l+s,E=Math.max(0,m+u-p.length);E?(d=new Uint8Array(u-l),d.set(p.subarray(m+l,p.length),0)):d=p.subarray(m+l,m+u);var L={unit:d,pts:g};return E||i.samples.push(L),{sample:L,length:u,missing:E}}var S=p.length-m;d=new Uint8Array(S),d.set(p.subarray(m,p.length),0);var k={unit:d,pts:g};return{sample:k,length:S,missing:-1}}},"./src/demux/base-audio-demuxer.ts":function(X,B,x){x.r(B),x.d(B,"initPTSFn",function(){return a});var M=x("./src/polyfills/number.ts"),C=x("./src/demux/id3.ts"),T=x("./src/types/demuxer.ts"),R=x("./src/demux/dummy-demuxed-track.ts"),O=x("./src/utils/mp4-tools.ts"),I=x("./src/utils/typed-array.ts"),b=function(){function y(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null}var A=y.prototype;return A.resetInitSegment=function(f,v,t,e){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},A.resetTimeStamp=function(f){this.initPTS=f,this.resetContiguity()},A.resetContiguity=function(){this.basePTS=null,this.frameIndex=0},A.canParse=function(f,v){return!1},A.appendFrame=function(f,v,t){},A.demux=function(f,v){this.cachedData&&(f=Object(O.appendUint8Array)(this.cachedData,f),this.cachedData=null);var t=C.getID3Data(f,0),e=t?t.length:0,i,p,m=this._audioTrack,o=this._id3Track,n=t?C.getTimeStamp(t):void 0,r=f.length;for((this.basePTS===null||this.frameIndex===0&&Object(M.isFiniteNumber)(n))&&(this.basePTS=a(n,v,this.initPTS)),t&&t.length>0&&o.samples.push({pts:this.basePTS,dts:this.basePTS,data:t,type:T.MetadataSchema.audioId3}),p=this.basePTS;e<r;){if(this.canParse(f,e)){var g=this.appendFrame(m,f,e);g?(this.frameIndex++,p=g.sample.pts,e+=g.length,i=e):e=r}else C.canParse(f,e)?(t=C.getID3Data(f,e),o.samples.push({pts:p,dts:p,data:t,type:T.MetadataSchema.audioId3}),e+=t.length,i=e):e++;if(e===r&&i!==r){var c=Object(I.sliceUint8)(f,i);this.cachedData?this.cachedData=Object(O.appendUint8Array)(this.cachedData,c):this.cachedData=c}}return{audioTrack:m,videoTrack:Object(R.dummyTrack)(),id3Track:o,textTrack:Object(R.dummyTrack)()}},A.demuxSampleAes=function(f,v,t){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},A.flush=function(f){var v=this.cachedData;return v&&(this.cachedData=null,this.demux(v,0)),{audioTrack:this._audioTrack,videoTrack:Object(R.dummyTrack)(),id3Track:this._id3Track,textTrack:Object(R.dummyTrack)()}},A.destroy=function(){},y}(),a=function(A,h,f){return Object(M.isFiniteNumber)(A)?A*90:h*9e4+(f||0)};B.default=b},"./src/demux/chunk-cache.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return M});var M=function(){function T(){this.chunks=[],this.dataLength=0}var R=T.prototype;return R.push=function(I){this.chunks.push(I),this.dataLength+=I.length},R.flush=function(){var I=this.chunks,b=this.dataLength,a;if(I.length)I.length===1?a=I[0]:a=C(I,b);else return new Uint8Array(0);return this.reset(),a},R.reset=function(){this.chunks.length=0,this.dataLength=0},T}();function C(T,R){for(var O=new Uint8Array(R),I=0,b=0;b<T.length;b++){var a=T[b];O.set(a,I),I+=a.length}return O}},"./src/demux/dummy-demuxed-track.ts":function(X,B,x){x.r(B),x.d(B,"dummyTrack",function(){return M});function M(C,T){return C===void 0&&(C=""),T===void 0&&(T=9e4),{type:C,id:-1,pid:-1,inputTimeScale:T,sequenceNumber:-1,samples:[],dropped:0}}},"./src/demux/exp-golomb.ts":function(X,B,x){x.r(B);var M=x("./src/utils/logger.ts"),C=function(){function T(O){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=O,this.bytesAvailable=O.byteLength,this.word=0,this.bitsAvailable=0}var R=T.prototype;return R.loadWord=function(){var I=this.data,b=this.bytesAvailable,a=I.byteLength-b,y=new Uint8Array(4),A=Math.min(4,b);if(A===0)throw new Error("no bytes available");y.set(I.subarray(a,a+A)),this.word=new DataView(y.buffer).getUint32(0),this.bitsAvailable=A*8,this.bytesAvailable-=A},R.skipBits=function(I){var b;this.bitsAvailable>I?(this.word<<=I,this.bitsAvailable-=I):(I-=this.bitsAvailable,b=I>>3,I-=b>>3,this.bytesAvailable-=b,this.loadWord(),this.word<<=I,this.bitsAvailable-=I)},R.readBits=function(I){var b=Math.min(this.bitsAvailable,I),a=this.word>>>32-b;return I>32&&M.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=b,this.bitsAvailable>0?this.word<<=b:this.bytesAvailable>0&&this.loadWord(),b=I-b,b>0&&this.bitsAvailable?a<<b|this.readBits(b):a},R.skipLZ=function(){var I;for(I=0;I<this.bitsAvailable;++I)if((this.word&2147483648>>>I)!==0)return this.word<<=I,this.bitsAvailable-=I,I;return this.loadWord(),I+this.skipLZ()},R.skipUEG=function(){this.skipBits(1+this.skipLZ())},R.skipEG=function(){this.skipBits(1+this.skipLZ())},R.readUEG=function(){var I=this.skipLZ();return this.readBits(I+1)-1},R.readEG=function(){var I=this.readUEG();return 1&I?1+I>>>1:-1*(I>>>1)},R.readBoolean=function(){return this.readBits(1)===1},R.readUByte=function(){return this.readBits(8)},R.readUShort=function(){return this.readBits(16)},R.readUInt=function(){return this.readBits(32)},R.skipScalingList=function(I){for(var b=8,a=8,y,A=0;A<I;A++)a!==0&&(y=this.readEG(),a=(b+y+256)%256),b=a===0?b:a},R.readSPS=function(){var I=0,b=0,a=0,y=0,A,h,f,v=this.readUByte.bind(this),t=this.readBits.bind(this),e=this.readUEG.bind(this),i=this.readBoolean.bind(this),p=this.skipBits.bind(this),m=this.skipEG.bind(this),o=this.skipUEG.bind(this),n=this.skipScalingList.bind(this);v();var r=v();if(t(5),p(3),v(),o(),r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128){var g=e();if(g===3&&p(1),o(),o(),p(1),i())for(h=g!==3?8:12,f=0;f<h;f++)i()&&(f<6?n(16):n(64))}o();var c=e();if(c===0)e();else if(c===1)for(p(1),m(),m(),A=e(),f=0;f<A;f++)m();o(),p(1);var d=e(),s=e(),l=t(1);l===0&&p(1),p(1),i()&&(I=e(),b=e(),a=e(),y=e());var u=[1,1];if(i()&&i()){var E=v();switch(E){case 1:u=[1,1];break;case 2:u=[12,11];break;case 3:u=[10,11];break;case 4:u=[16,11];break;case 5:u=[40,33];break;case 6:u=[24,11];break;case 7:u=[20,11];break;case 8:u=[32,11];break;case 9:u=[80,33];break;case 10:u=[18,11];break;case 11:u=[15,11];break;case 12:u=[64,33];break;case 13:u=[160,99];break;case 14:u=[4,3];break;case 15:u=[3,2];break;case 16:u=[2,1];break;case 255:{u=[v()<<8|v(),v()<<8|v()];break}}}return{width:Math.ceil((d+1)*16-I*2-b*2),height:(2-l)*(s+1)*16-(l?2:4)*(a+y),pixelRatio:u}},R.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},T}();B.default=C},"./src/demux/id3.ts":function(X,B,x){x.r(B),x.d(B,"isHeader",function(){return M}),x.d(B,"isFooter",function(){return C}),x.d(B,"getID3Data",function(){return T}),x.d(B,"canParse",function(){return O}),x.d(B,"getTimeStamp",function(){return I}),x.d(B,"isTimeStampFrame",function(){return b}),x.d(B,"getID3Frames",function(){return y}),x.d(B,"decodeFrame",function(){return A}),x.d(B,"utf8ArrayToStr",function(){return e}),x.d(B,"testables",function(){return i});var M=function(n,r){return r+10<=n.length&&n[r]===73&&n[r+1]===68&&n[r+2]===51&&n[r+3]<255&&n[r+4]<255&&n[r+6]<128&&n[r+7]<128&&n[r+8]<128&&n[r+9]<128},C=function(n,r){return r+10<=n.length&&n[r]===51&&n[r+1]===68&&n[r+2]===73&&n[r+3]<255&&n[r+4]<255&&n[r+6]<128&&n[r+7]<128&&n[r+8]<128&&n[r+9]<128},T=function(n,r){for(var g=r,c=0;M(n,r);){c+=10;var d=R(n,r+6);c+=d,C(n,r+10)&&(c+=10),r+=c}if(c>0)return n.subarray(g,g+c)},R=function(n,r){var g=0;return g=(n[r]&127)<<21,g|=(n[r+1]&127)<<14,g|=(n[r+2]&127)<<7,g|=n[r+3]&127,g},O=function(n,r){return M(n,r)&&R(n,r+6)+10<=n.length-r},I=function(n){for(var r=y(n),g=0;g<r.length;g++){var c=r[g];if(b(c))return t(c)}},b=function(n){return n&&n.key==="PRIV"&&n.info==="com.apple.streaming.transportStreamTimestamp"},a=function(n){var r=String.fromCharCode(n[0],n[1],n[2],n[3]),g=R(n,4),c=10;return{type:r,size:g,data:n.subarray(c,c+g)}},y=function(n){for(var r=0,g=[];M(n,r);){var c=R(n,r+6);r+=10;for(var d=r+c;r+8<d;){var s=a(n.subarray(r)),l=A(s);l&&g.push(l),r+=s.size+10}C(n,r)&&(r+=10)}return g},A=function(n){return n.type==="PRIV"?h(n):n.type[0]==="W"?v(n):f(n)},h=function(n){if(!(n.size<2)){var r=e(n.data,!0),g=new Uint8Array(n.data.subarray(r.length+1));return{key:n.type,info:r,data:g.buffer}}},f=function(n){if(!(n.size<2)){if(n.type==="TXXX"){var r=1,g=e(n.data.subarray(r),!0);r+=g.length+1;var c=e(n.data.subarray(r));return{key:n.type,info:g,data:c}}var d=e(n.data.subarray(1));return{key:n.type,data:d}}},v=function(n){if(n.type==="WXXX"){if(n.size<2)return;var r=1,g=e(n.data.subarray(r),!0);r+=g.length+1;var c=e(n.data.subarray(r));return{key:n.type,info:g,data:c}}var d=e(n.data);return{key:n.type,data:d}},t=function(n){if(n.data.byteLength===8){var r=new Uint8Array(n.data),g=r[3]&1,c=(r[4]<<23)+(r[5]<<15)+(r[6]<<7)+r[7];return c/=45,g&&(c+=4772185884e-2),Math.round(c)}},e=function(n,r){r===void 0&&(r=!1);var g=m();if(g){var c=g.decode(n);if(r){var d=c.indexOf("\0");return d!==-1?c.substring(0,d):c}return c.replace(/\0/g,"")}for(var s=n.length,l,u,E,L="",S=0;S<s;){if(l=n[S++],l===0&&r)return L;if(l===0||l===3)continue;switch(l>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:L+=String.fromCharCode(l);break;case 12:case 13:u=n[S++],L+=String.fromCharCode((l&31)<<6|u&63);break;case 14:u=n[S++],E=n[S++],L+=String.fromCharCode((l&15)<<12|(u&63)<<6|(E&63)<<0);break}}return L},i={decodeTextFrame:f},p;function m(){return!p&&typeof self.TextDecoder!="undefined"&&(p=new self.TextDecoder("utf-8")),p}},"./src/demux/mp3demuxer.ts":function(X,B,x){x.r(B);var M=x("./src/demux/base-audio-demuxer.ts"),C=x("./src/demux/id3.ts"),T=x("./src/utils/logger.ts"),R=x("./src/demux/mpegaudio.ts");function O(a,y){a.prototype=Object.create(y.prototype),a.prototype.constructor=a,I(a,y)}function I(a,y){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,f){return h.__proto__=f,h},I(a,y)}var b=function(a){O(y,a);function y(){return a.apply(this,arguments)||this}var A=y.prototype;return A.resetInitSegment=function(f,v,t,e){a.prototype.resetInitSegment.call(this,f,v,t,e),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:v,duration:e,inputTimeScale:9e4,dropped:0}},y.probe=function(f){if(!f)return!1;for(var v=C.getID3Data(f,0)||[],t=v.length,e=f.length;t<e;t++)if(R.probe(f,t))return T.logger.log("MPEG Audio sync word found !"),!0;return!1},A.canParse=function(f,v){return R.canParse(f,v)},A.appendFrame=function(f,v,t){if(this.basePTS!==null)return R.appendFrame(f,v,t,this.basePTS,this.frameIndex)},y}(M.default);B.default=b},"./src/demux/mp4demuxer.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/types/demuxer.ts"),T=x("./src/utils/mp4-tools.ts"),R=x("./src/demux/dummy-demuxed-track.ts"),O=/\/emsg[-/]ID3/i,I=function(){function b(y,A){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=A}var a=b.prototype;return a.resetTimeStamp=function(){},a.resetInitSegment=function(A,h,f,v){var t=Object(T.parseInitSegment)(A),e=this.videoTrack=Object(R.dummyTrack)("video",1),i=this.audioTrack=Object(R.dummyTrack)("audio",1),p=this.txtTrack=Object(R.dummyTrack)("text",1);if(this.id3Track=Object(R.dummyTrack)("id3",1),this.timeOffset=0,t.video){var m=t.video,o=m.id,n=m.timescale,r=m.codec;e.id=o,e.timescale=p.timescale=n,e.codec=r}if(t.audio){var g=t.audio,c=g.id,d=g.timescale,s=g.codec;i.id=c,i.timescale=d,i.codec=s}p.id=T.RemuxerTrackIdConfig.text,e.sampleDuration=0,e.duration=i.duration=v},a.resetContiguity=function(){},b.probe=function(A){return A=A.length>16384?A.subarray(0,16384):A,Object(T.findBox)(A,["moof"]).length>0},a.demux=function(A,h){this.timeOffset=h;var f=A,v=this.videoTrack,t=this.txtTrack;if(this.config.progressive){this.remainderData&&(f=Object(T.appendUint8Array)(this.remainderData,A));var e=Object(T.segmentValidRange)(f);this.remainderData=e.remainder,v.samples=e.valid||new Uint8Array}else v.samples=f;var i=this.extractID3Track(v,h);return t.samples=Object(T.parseSamples)(h,v),{videoTrack:v,audioTrack:this.audioTrack,id3Track:i,textTrack:this.txtTrack}},a.flush=function(){var A=this.timeOffset,h=this.videoTrack,f=this.txtTrack;h.samples=this.remainderData||new Uint8Array,this.remainderData=null;var v=this.extractID3Track(h,this.timeOffset);return f.samples=Object(T.parseSamples)(A,h),{videoTrack:h,audioTrack:Object(R.dummyTrack)(),id3Track:v,textTrack:Object(R.dummyTrack)()}},a.extractID3Track=function(A,h){var f=this.id3Track;if(A.samples.length){var v=Object(T.findBox)(A.samples,["emsg"]);v&&v.forEach(function(t){var e=Object(T.parseEmsg)(t);if(O.test(e.schemeIdUri)){var i=Object(M.isFiniteNumber)(e.presentationTime)?e.presentationTime/e.timeScale:h+e.presentationTimeDelta/e.timeScale,p=e.payload;f.samples.push({data:p,len:p.byteLength,dts:i,pts:i,type:C.MetadataSchema.emsg})}})}return f},a.demuxSampleAes=function(A,h,f){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},a.destroy=function(){},b}();B.default=I},"./src/demux/mpegaudio.ts":function(X,B,x){x.r(B),x.d(B,"appendFrame",function(){return I}),x.d(B,"parseHeader",function(){return b}),x.d(B,"isHeaderPattern",function(){return a}),x.d(B,"isHeader",function(){return y}),x.d(B,"canParse",function(){return A}),x.d(B,"probe",function(){return h});var M=null,C=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],T=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],R=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],O=[0,1,1,4];function I(f,v,t,e,i){if(!(t+24>v.length)){var p=b(v,t);if(p&&t+p.frameLength<=v.length){var m=p.samplesPerFrame*9e4/p.sampleRate,o=e+i*m,n={unit:v.subarray(t,t+p.frameLength),pts:o,dts:o};return f.config=[],f.channelCount=p.channelCount,f.samplerate=p.sampleRate,f.samples.push(n),{sample:n,length:p.frameLength,missing:0}}}}function b(f,v){var t=f[v+1]>>3&3,e=f[v+1]>>1&3,i=f[v+2]>>4&15,p=f[v+2]>>2&3;if(t!==1&&i!==0&&i!==15&&p!==3){var m=f[v+2]>>1&1,o=f[v+3]>>6,n=t===3?3-e:e===3?3:4,r=C[n*14+i-1]*1e3,g=t===3?0:t===2?1:2,c=T[g*3+p],d=o===3?1:2,s=R[t][e],l=O[e],u=s*8*l,E=Math.floor(s*r/c+m)*l;if(M===null){var L=navigator.userAgent||"",S=L.match(/Chrome\/(\d+)/i);M=S?parseInt(S[1]):0}var k=!!M&&M<=87;return k&&e===2&&r>=224e3&&o===0&&(f[v+3]=f[v+3]|128),{sampleRate:c,channelCount:d,frameLength:E,samplesPerFrame:u}}}function a(f,v){return f[v]===255&&(f[v+1]&224)===224&&(f[v+1]&6)!==0}function y(f,v){return v+1<f.length&&a(f,v)}function A(f,v){var t=4;return a(f,v)&&t<=f.length-v}function h(f,v){if(v+1<f.length&&a(f,v)){var t=4,e=b(f,v),i=t;e!=null&&e.frameLength&&(i=e.frameLength);var p=v+i;return p===f.length||y(f,p)}return!1}},"./src/demux/sample-aes.ts":function(X,B,x){x.r(B);var M=x("./src/crypt/decrypter.ts"),C=x("./src/demux/tsdemuxer.ts"),T=function(){function R(I,b,a){this.keyData=void 0,this.decrypter=void 0,this.keyData=a,this.decrypter=new M.default(I,b,{removePKCS7Padding:!1})}var O=R.prototype;return O.decryptBuffer=function(b,a){this.decrypter.decrypt(b,this.keyData.key.buffer,this.keyData.iv.buffer,a)},O.decryptAacSample=function(b,a,y,A){var h=b[a].unit;if(!(h.length<=16)){var f=h.subarray(16,h.length-h.length%16),v=f.buffer.slice(f.byteOffset,f.byteOffset+f.length),t=this;this.decryptBuffer(v,function(e){var i=new Uint8Array(e);h.set(i,16),A||t.decryptAacSamples(b,a+1,y)})}},O.decryptAacSamples=function(b,a,y){for(;;a++){if(a>=b.length){y();return}if(!(b[a].unit.length<32)){var A=this.decrypter.isSync();if(this.decryptAacSample(b,a,y,A),!A)return}}},O.getAvcEncryptedData=function(b){for(var a=Math.floor((b.length-48)/160)*16+16,y=new Int8Array(a),A=0,h=32;h<b.length-16;h+=160,A+=16)y.set(b.subarray(h,h+16),A);return y},O.getAvcDecryptedUnit=function(b,a){for(var y=new Uint8Array(a),A=0,h=32;h<b.length-16;h+=160,A+=16)b.set(y.subarray(A,A+16),h);return b},O.decryptAvcSample=function(b,a,y,A,h,f){var v=Object(C.discardEPB)(h.data),t=this.getAvcEncryptedData(v),e=this;this.decryptBuffer(t.buffer,function(i){h.data=e.getAvcDecryptedUnit(v,i),f||e.decryptAvcSamples(b,a,y+1,A)})},O.decryptAvcSamples=function(b,a,y,A){if(b instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;a++,y=0){if(a>=b.length){A();return}for(var h=b[a].units;!(y>=h.length);y++){var f=h[y];if(!(f.data.length<=48||f.type!==1&&f.type!==5)){var v=this.decrypter.isSync();if(this.decryptAvcSample(b,a,y,A,f,v),!v)return}}}},R}();B.default=T},"./src/demux/transmuxer-interface.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return y});var M=x("./node_modules/webworkify-webpack/index.js"),C=x("./src/events.ts"),T=x("./src/demux/transmuxer.ts"),R=x("./src/utils/logger.ts"),O=x("./src/errors.ts"),I=x("./src/utils/mediasource-helper.ts"),b=x("./node_modules/eventemitter3/index.js"),a=Object(I.getMediaSource)()||{isTypeSupported:function(){return!1}},y=function(){function A(f,v,t,e){var i=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.hls=f,this.id=v,this.onTransmuxComplete=t,this.onFlush=e;var p=f.config,m=function(c,d){d=d||{},d.frag=i.frag,d.id=i.id,f.trigger(c,d)};this.observer=new b.EventEmitter,this.observer.on(C.Events.FRAG_DECRYPTED,m),this.observer.on(C.Events.ERROR,m);var o={mp4:a.isTypeSupported("video/mp4"),mpeg:a.isTypeSupported("audio/mpeg"),mp3:a.isTypeSupported('audio/mp4; codecs="mp3"')},n=navigator.vendor;if(p.enableWorker&&typeof Worker!="undefined"){R.logger.log("demuxing in webworker");var r;try{r=this.worker=M("./src/demux/transmuxer-worker.ts"),this.onwmsg=this.onWorkerMessage.bind(this),r.addEventListener("message",this.onwmsg),r.onerror=function(g){f.trigger(C.Events.ERROR,{type:O.ErrorTypes.OTHER_ERROR,details:O.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",error:new Error(g.message+"  ("+g.filename+":"+g.lineno+")")})},r.postMessage({cmd:"init",typeSupported:o,vendor:n,id:v,config:JSON.stringify(p)})}catch(g){R.logger.warn("Error in worker:",g),R.logger.error("Error while initializing DemuxerWorker, fallback to inline"),r&&self.URL.revokeObjectURL(r.objectURL),this.transmuxer=new T.default(this.observer,o,p,n,v),this.worker=null}}else this.transmuxer=new T.default(this.observer,o,p,n,v)}var h=A.prototype;return h.destroy=function(){var v=this.worker;if(v)v.removeEventListener("message",this.onwmsg),v.terminate(),this.worker=null,this.onwmsg=void 0;else{var t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}var e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null},h.push=function(v,t,e,i,p,m,o,n,r,g){var c,d,s=this;r.transmuxing.start=self.performance.now();var l=this.transmuxer,u=this.worker,E=m?m.start:p.start,L=p.decryptdata,S=this.frag,k=!(S&&p.cc===S.cc),N=!(S&&r.level===S.level),F=S?r.sn-S.sn:-1,K=this.part?r.part-this.part.index:-1,W=F===0&&r.id>1&&r.id===(S==null?void 0:S.stats.chunkCount),z=!N&&(F===1||F===0&&(K===1||W&&K<=0)),H=self.performance.now();(N||F||p.stats.parsing.start===0)&&(p.stats.parsing.start=H),m&&(K||!z)&&(m.stats.parsing.start=H);var Y=!(S&&((c=p.initSegment)===null||c===void 0?void 0:c.url)===((d=S.initSegment)===null||d===void 0?void 0:d.url)),Q=new T.TransmuxState(k,z,n,N,E,Y);if(!z||k||Y){R.logger.log("[transmuxer-interface, "+p.type+"]: Starting new transmux session for sn: "+r.sn+" p: "+r.part+" level: "+r.level+" id: "+r.id+`
        discontinuity: `+k+`
        trackSwitch: `+N+`
        contiguous: `+z+`
        accurateTimeOffset: `+n+`
        timeOffset: `+E+`
        initSegmentChange: `+Y);var Z=new T.TransmuxConfig(e,i,t,o,g);this.configureTransmuxer(Z)}if(this.frag=p,this.part=m,u)u.postMessage({cmd:"demux",data:v,decryptdata:L,chunkMeta:r,state:Q},v instanceof ArrayBuffer?[v]:[]);else if(l){var $=l.push(v,L,r,Q);Object(T.isPromise)($)?$.then(function(ee){s.handleTransmuxComplete(ee)}):this.handleTransmuxComplete($)}},h.flush=function(v){var t=this;v.transmuxing.start=self.performance.now();var e=this.transmuxer,i=this.worker;if(i)i.postMessage({cmd:"flush",chunkMeta:v});else if(e){var p=e.flush(v);Object(T.isPromise)(p)?p.then(function(m){t.handleFlushResult(m,v)}):this.handleFlushResult(p,v)}},h.handleFlushResult=function(v,t){var e=this;v.forEach(function(i){e.handleTransmuxComplete(i)}),this.onFlush(t)},h.onWorkerMessage=function(v){var t=v.data,e=this.hls;switch(t.event){case"init":{self.URL.revokeObjectURL(this.worker.objectURL);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":R.logger[t.data.logType]&&R.logger[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,e.trigger(t.event,t.data);break}}},h.configureTransmuxer=function(v){var t=this.worker,e=this.transmuxer;t?t.postMessage({cmd:"configure",config:v}):e&&e.configure(v)},h.handleTransmuxComplete=function(v){v.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(v)},A}()},"./src/demux/transmuxer-worker.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return O});var M=x("./src/demux/transmuxer.ts"),C=x("./src/events.ts"),T=x("./src/utils/logger.ts"),R=x("./node_modules/eventemitter3/index.js");function O(A){var h=new R.EventEmitter,f=function(e,i){A.postMessage({event:e,data:i})};h.on(C.Events.FRAG_DECRYPTED,f),h.on(C.Events.ERROR,f);var v=function(){var e=function(m){var o=function(r){f("workerLog",{logType:m,message:r})};T.logger[m]=o};for(var i in T.logger)e(i)};A.addEventListener("message",function(t){var e=t.data;switch(e.cmd){case"init":{var i=JSON.parse(e.config);A.transmuxer=new M.default(h,e.typeSupported,i,e.vendor,e.id),Object(T.enableLogs)(i.debug),v(),f("init",null);break}case"configure":{A.transmuxer.configure(e.config);break}case"demux":{var p=A.transmuxer.push(e.data,e.decryptdata,e.chunkMeta,e.state);Object(M.isPromise)(p)?p.then(function(n){I(A,n)}):I(A,p);break}case"flush":{var m=e.chunkMeta,o=A.transmuxer.flush(m);Object(M.isPromise)(o)?o.then(function(n){a(A,n,m)}):a(A,o,m);break}}})}function I(A,h){if(y(h.remuxResult))return!1;var f=[],v=h.remuxResult,t=v.audio,e=v.video;return t&&b(f,t),e&&b(f,e),A.postMessage({event:"transmuxComplete",data:h},f),!0}function b(A,h){h.data1&&A.push(h.data1.buffer),h.data2&&A.push(h.data2.buffer)}function a(A,h,f){var v=h.reduce(function(t,e){return I(A,e)||t},!1);v||A.postMessage({event:"transmuxComplete",data:h[0]}),A.postMessage({event:"flush",data:f})}function y(A){return!A.audio&&!A.video&&!A.text&&!A.id3&&!A.initSegment}},"./src/demux/transmuxer.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return v}),x.d(B,"isPromise",function(){return i}),x.d(B,"TransmuxConfig",function(){return p}),x.d(B,"TransmuxState",function(){return m});var M=x("./src/events.ts"),C=x("./src/errors.ts"),T=x("./src/crypt/decrypter.ts"),R=x("./src/demux/aacdemuxer.ts"),O=x("./src/demux/mp4demuxer.ts"),I=x("./src/demux/tsdemuxer.ts"),b=x("./src/demux/mp3demuxer.ts"),a=x("./src/remux/mp4-remuxer.ts"),y=x("./src/remux/passthrough-remuxer.ts"),A=x("./src/utils/logger.ts"),h;try{h=self.performance.now.bind(self.performance)}catch{A.logger.debug("Unable to use Performance API on this environment"),h=self.Date.now}var f=[{demux:I.default,remux:a.default},{demux:O.default,remux:y.default},{demux:R.default,remux:a.default},{demux:b.default,remux:a.default}],v=function(){function o(r,g,c,d,s){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=r,this.typeSupported=g,this.config=c,this.vendor=d,this.id=s}var n=o.prototype;return n.configure=function(g){this.transmuxConfig=g,this.decrypter&&this.decrypter.reset()},n.push=function(g,c,d,s){var l=this,u=d.transmuxing;u.executeStart=h();var E=new Uint8Array(g),L=this.config,S=this.currentTransmuxState,k=this.transmuxConfig;s&&(this.currentTransmuxState=s);var N=s||S,F=N.contiguous,K=N.discontinuity,W=N.trackSwitch,z=N.accurateTimeOffset,H=N.timeOffset,Y=N.initSegmentChange,Q=k.audioCodec,Z=k.videoCodec,$=k.defaultInitPts,ee=k.duration,ie=k.initSegmentData;(K||W||Y)&&this.resetInitSegment(ie,Q,Z,ee),(K||Y)&&this.resetInitialTimestamp($),F||this.resetContiguity();var ae=t(E,c);if(ae&&ae.method==="AES-128"){var q=this.getDecrypter();if(L.enableSoftwareAES){var oe=q.softwareDecrypt(E,ae.key.buffer,ae.iv.buffer);if(!oe)return u.executeEnd=h(),e(d);E=new Uint8Array(oe)}else return this.decryptionPromise=q.webCryptoDecrypt(E,ae.key.buffer,ae.iv.buffer).then(function(ue){var le=l.push(ue,null,d);return l.decryptionPromise=null,le}),this.decryptionPromise}this.needsProbing(E,K,W)&&this.configureTransmuxer(E,k);var ne=this.transmux(E,ae,H,z,d),re=this.currentTransmuxState;return re.contiguous=!0,re.discontinuity=!1,re.trackSwitch=!1,u.executeEnd=h(),ne},n.flush=function(g){var c=this,d=g.transmuxing;d.executeStart=h();var s=this.decrypter,l=this.currentTransmuxState,u=this.decryptionPromise;if(u)return u.then(function(){return c.flush(g)});var E=[],L=l.timeOffset;if(s){var S=s.flush();S&&E.push(this.push(S,null,g))}var k=this.demuxer,N=this.remuxer;if(!k||!N)return this.observer.emit(M.Events.ERROR,M.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),d.executeEnd=h(),[e(g)];var F=k.flush(L);return i(F)?F.then(function(K){return c.flushRemux(E,K,g),E}):(this.flushRemux(E,F,g),E)},n.flushRemux=function(g,c,d){var s=c.audioTrack,l=c.videoTrack,u=c.id3Track,E=c.textTrack,L=this.currentTransmuxState,S=L.accurateTimeOffset,k=L.timeOffset;A.logger.log("[transmuxer.ts]: Flushed fragment "+d.sn+(d.part>-1?" p: "+d.part:"")+" of level "+d.level);var N=this.remuxer.remux(s,l,u,E,k,S,!0,this.id);g.push({remuxResult:N,chunkMeta:d}),d.transmuxing.executeEnd=h()},n.resetInitialTimestamp=function(g){var c=this.demuxer,d=this.remuxer;!c||!d||(c.resetTimeStamp(g),d.resetTimeStamp(g))},n.resetContiguity=function(){var g=this.demuxer,c=this.remuxer;!g||!c||(g.resetContiguity(),c.resetNextTimestamp())},n.resetInitSegment=function(g,c,d,s){var l=this.demuxer,u=this.remuxer;!l||!u||(l.resetInitSegment(g,c,d,s),u.resetInitSegment(g,c,d))},n.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},n.transmux=function(g,c,d,s,l){var u;return c&&c.method==="SAMPLE-AES"?u=this.transmuxSampleAes(g,c,d,s,l):u=this.transmuxUnencrypted(g,d,s,l),u},n.transmuxUnencrypted=function(g,c,d,s){var l=this.demuxer.demux(g,c,!1,!this.config.progressive),u=l.audioTrack,E=l.videoTrack,L=l.id3Track,S=l.textTrack,k=this.remuxer.remux(u,E,L,S,c,d,!1,this.id);return{remuxResult:k,chunkMeta:s}},n.transmuxSampleAes=function(g,c,d,s,l){var u=this;return this.demuxer.demuxSampleAes(g,c,d).then(function(E){var L=u.remuxer.remux(E.audioTrack,E.videoTrack,E.id3Track,E.textTrack,d,s,!1,u.id);return{remuxResult:L,chunkMeta:l}})},n.configureTransmuxer=function(g,c){for(var d=this.config,s=this.observer,l=this.typeSupported,u=this.vendor,E=c.audioCodec,L=c.defaultInitPts,S=c.duration,k=c.initSegmentData,N=c.videoCodec,F,K=0,W=f.length;K<W;K++)if(f[K].demux.probe(g)){F=f[K];break}F||(A.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),F={demux:O.default,remux:y.default});var z=this.demuxer,H=this.remuxer,Y=F.remux,Q=F.demux;(!H||!(H instanceof Y))&&(this.remuxer=new Y(s,d,l,u)),(!z||!(z instanceof Q))&&(this.demuxer=new Q(s,d,l),this.probe=Q.probe),this.resetInitSegment(k,E,N,S),this.resetInitialTimestamp(L)},n.needsProbing=function(g,c,d){return!this.demuxer||!this.remuxer||c||d},n.getDecrypter=function(){var g=this.decrypter;return g||(g=this.decrypter=new T.default(this.observer,this.config)),g},o}();function t(o,n){var r=null;return o.byteLength>0&&n!=null&&n.key!=null&&n.iv!==null&&n.method!=null&&(r=n),r}var e=function(n){return{remuxResult:{},chunkMeta:n}};function i(o){return"then"in o&&o.then instanceof Function}var p=function(n,r,g,c,d){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=n,this.videoCodec=r,this.initSegmentData=g,this.duration=c,this.defaultInitPts=d},m=function(n,r,g,c,d,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=n,this.contiguous=r,this.accurateTimeOffset=g,this.trackSwitch=c,this.timeOffset=d,this.initSegmentChange=s}},"./src/demux/tsdemuxer.ts":function(X,B,x){x.r(B),x.d(B,"discardEPB",function(){return p});var M=x("./src/demux/adts.ts"),C=x("./src/demux/mpegaudio.ts"),T=x("./src/demux/exp-golomb.ts"),R=x("./src/demux/sample-aes.ts"),O=x("./src/events.ts"),I=x("./src/utils/mp4-tools.ts"),b=x("./src/utils/logger.ts"),a=x("./src/errors.ts"),y=x("./src/types/demuxer.ts");function A(){return A=Object.assign?Object.assign.bind():function(m){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(m[r]=n[r])}return m},A.apply(this,arguments)}var h=function(){function m(n,r,g){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=n,this.config=r,this.typeSupported=g}m.probe=function(r){return r[0]===71&&r[188]===71},m.createTrack=function(r,g){return{container:r==="video"||r==="audio"?"video/mp2t":void 0,type:r,id:I.RemuxerTrackIdConfig[r],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:r==="audio"?g:void 0}};var o=m.prototype;return o.resetInitSegment=function(r,g,c,d){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=m.createTrack("video"),this._audioTrack=m.createTrack("audio",d),this._id3Track=m.createTrack("id3"),this._txtTrack=m.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=g,this.videoCodec=c,this._duration=d},o.resetTimeStamp=function(){},o.resetContiguity=function(){var r=this._audioTrack,g=this._avcTrack,c=this._id3Track;r&&(r.pesData=null),g&&(g.pesData=null),c&&(c.pesData=null),this.aacOverFlow=null},o.demux=function(r,g,c,d){c===void 0&&(c=!1),d===void 0&&(d=!1),c||(this.sampleAes=null);var s,l=this._avcTrack,u=this._audioTrack,E=this._id3Track,L=this._txtTrack,S=l.pid,k=l.pesData,N=u.pid,F=E.pid,K=u.pesData,W=E.pesData,z=null,H=this.pmtParsed,Y=this._pmtId,Q=r.length;if(this.remainderData&&(r=Object(I.appendUint8Array)(this.remainderData,r),Q=r.length,this.remainderData=null),Q<188&&!d)return this.remainderData=r,{audioTrack:u,videoTrack:l,id3Track:E,textTrack:L};Q-=Q%188,Q<r.byteLength&&!d&&(this.remainderData=new Uint8Array(r.buffer,Q,r.buffer.byteLength-Q));for(var Z=0,$=0;$<Q;$+=188)if(r[$]===71){var ee=!!(r[$+1]&64),ie=((r[$+1]&31)<<8)+r[$+2],ae=(r[$+3]&48)>>4,q=void 0;if(ae>1){if(q=$+5+r[$+4],q===$+188)continue}else q=$+4;switch(ie){case S:ee&&(k&&(s=e(k))&&this.parseAVCPES(l,L,s,!1),k={data:[],size:0}),k&&(k.data.push(r.subarray(q,$+188)),k.size+=$+188-q);break;case N:if(ee){if(K&&(s=e(K)))switch(u.segmentCodec){case"aac":this.parseAACPES(u,s);break;case"mp3":this.parseMPEGPES(u,s);break}K={data:[],size:0}}K&&(K.data.push(r.subarray(q,$+188)),K.size+=$+188-q);break;case F:ee&&(W&&(s=e(W))&&this.parseID3PES(E,s),W={data:[],size:0}),W&&(W.data.push(r.subarray(q,$+188)),W.size+=$+188-q);break;case 0:ee&&(q+=r[q]+1),Y=this._pmtId=v(r,q);break;case Y:{ee&&(q+=r[q]+1);var oe=t(r,q,this.typeSupported,c);S=oe.avc,S>0&&(l.pid=S),N=oe.audio,N>0&&(u.pid=N,u.segmentCodec=oe.segmentCodec),F=oe.id3,F>0&&(E.pid=F),z!==null&&!H&&(b.logger.log("unknown PID '"+z+"' in TS found"),z=null),H=this.pmtParsed=!0;break}case 17:case 8191:break;default:z=ie;break}}else Z++;Z>0&&this.observer.emit(O.Events.ERROR,O.Events.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+Z+" TS packet/s that do not start with 0x47"}),l.pesData=k,u.pesData=K,E.pesData=W;var ne={audioTrack:u,videoTrack:l,id3Track:E,textTrack:L};return d&&this.extractRemainingSamples(ne),ne},o.flush=function(){var r=this.remainderData;this.remainderData=null;var g;return r?g=this.demux(r,-1,!1,!0):g={videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(g),this.sampleAes?this.decrypt(g,this.sampleAes):g},o.extractRemainingSamples=function(r){var g=r.audioTrack,c=r.videoTrack,d=r.id3Track,s=r.textTrack,l=c.pesData,u=g.pesData,E=d.pesData,L;if(l&&(L=e(l))?(this.parseAVCPES(c,s,L,!0),c.pesData=null):c.pesData=l,u&&(L=e(u))){switch(g.segmentCodec){case"aac":this.parseAACPES(g,L);break;case"mp3":this.parseMPEGPES(g,L);break}g.pesData=null}else u!=null&&u.size&&b.logger.log("last AAC PES packet truncated,might overlap between fragments"),g.pesData=u;E&&(L=e(E))?(this.parseID3PES(d,L),d.pesData=null):d.pesData=E},o.demuxSampleAes=function(r,g,c){var d=this.demux(r,c,!0,!this.config.progressive),s=this.sampleAes=new R.default(this.observer,this.config,g);return this.decrypt(d,s)},o.decrypt=function(r,g){return new Promise(function(c){var d=r.audioTrack,s=r.videoTrack;d.samples&&d.segmentCodec==="aac"?g.decryptAacSamples(d.samples,0,function(){s.samples?g.decryptAvcSamples(s.samples,0,0,function(){c(r)}):c(r)}):s.samples&&g.decryptAvcSamples(s.samples,0,0,function(){c(r)})})},o.destroy=function(){this._duration=0},o.parseAVCPES=function(r,g,c,d){var s=this,l=this.parseAVCNALu(r,c.data),u=this.avcSample,E,L=!1;c.data=null,u&&l.length&&!r.audFound&&(i(u,r),u=this.avcSample=f(!1,c.pts,c.dts,"")),l.forEach(function(S){switch(S.type){case 1:{E=!0,u||(u=s.avcSample=f(!0,c.pts,c.dts,"")),u.frame=!0;var k=S.data;if(L&&k.length>4){var N=new T.default(k).readSliceType();(N===2||N===4||N===7||N===9)&&(u.key=!0)}break}case 5:E=!0,u||(u=s.avcSample=f(!0,c.pts,c.dts,"")),u.key=!0,u.frame=!0;break;case 6:{E=!0,Object(I.parseSEIMessageFromNALu)(p(S.data),c.pts,g.samples);break}case 7:if(E=!0,L=!0,!r.sps){var F=new T.default(S.data),K=F.readSPS();r.width=K.width,r.height=K.height,r.pixelRatio=K.pixelRatio,r.sps=[S.data],r.duration=s._duration;for(var W=S.data.subarray(1,4),z="avc1.",H=0;H<3;H++){var Y=W[H].toString(16);Y.length<2&&(Y="0"+Y),z+=Y}r.codec=z}break;case 8:E=!0,r.pps||(r.pps=[S.data]);break;case 9:E=!1,r.audFound=!0,u&&i(u,r),u=s.avcSample=f(!1,c.pts,c.dts,"");break;case 12:E=!0;break;default:E=!1,u&&(u.debug+="unknown NAL "+S.type+" ");break}if(u&&E){var Q=u.units;Q.push(S)}}),d&&u&&(i(u,r),this.avcSample=null)},o.getLastNalUnit=function(r){var g,c=this.avcSample,d;if((!c||c.units.length===0)&&(c=r[r.length-1]),(g=c)!==null&&g!==void 0&&g.units){var s=c.units;d=s[s.length-1]}return d},o.parseAVCNALu=function(r,g){var c=g.byteLength,d=r.naluState||0,s=d,l=[],u=0,E,L,S,k=-1,N=0;for(d===-1&&(k=0,N=g[0]&31,d=0,u=1);u<c;){if(E=g[u++],!d){d=E?0:1;continue}if(d===1){d=E?0:2;continue}if(!E)d=3;else if(E===1){if(k>=0){var F={data:g.subarray(k,u-d-1),type:N};l.push(F)}else{var K=this.getLastNalUnit(r.samples);if(K&&(s&&u<=4-s&&K.state&&(K.data=K.data.subarray(0,K.data.byteLength-s)),L=u-d-1,L>0)){var W=new Uint8Array(K.data.byteLength+L);W.set(K.data,0),W.set(g.subarray(0,L),K.data.byteLength),K.data=W,K.state=0}}u<c?(S=g[u]&31,k=u,N=S,d=0):d=-1}else d=0}if(k>=0&&d>=0){var z={data:g.subarray(k,c),type:N,state:d};l.push(z)}if(l.length===0){var H=this.getLastNalUnit(r.samples);if(H){var Y=new Uint8Array(H.data.byteLength+g.byteLength);Y.set(H.data,0),Y.set(g,H.data.byteLength),H.data=Y}}return r.naluState=d,l},o.parseAACPES=function(r,g){var c=0,d=this.aacOverFlow,s=g.data;if(d){this.aacOverFlow=null;var l=d.missing,u=d.sample.unit.byteLength;if(l===-1){var E=new Uint8Array(u+s.byteLength);E.set(d.sample.unit,0),E.set(s,u),s=E}else{var L=u-l;d.sample.unit.set(s.subarray(0,l),L),r.samples.push(d.sample),c=d.missing}}var S,k;for(S=c,k=s.length;S<k-1&&!M.isHeader(s,S);S++);if(S!==c){var N,F;if(S<k-1?(N="AAC PES did not start with ADTS header,offset:"+S,F=!1):(N="no ADTS header found in AAC PES",F=!0),b.logger.warn("parsing error:"+N),this.observer.emit(O.Events.ERROR,O.Events.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:F,reason:N}),F)return}M.initTrackConfig(r,this.observer,s,S,this.audioCodec);var K;if(g.pts!==void 0)K=g.pts;else if(d){var W=M.getFrameDuration(r.samplerate);K=d.sample.pts+W}else{b.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}for(var z=0,H;S<k;)if(H=M.appendFrame(r,s,S,K,z),S+=H.length,H.missing){this.aacOverFlow=H;break}else for(z++;S<k-1&&!M.isHeader(s,S);S++);},o.parseMPEGPES=function(r,g){var c=g.data,d=c.length,s=0,l=0,u=g.pts;if(u===void 0){b.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;l<d;)if(C.isHeader(c,l)){var E=C.appendFrame(r,c,l,u,s);if(E)l+=E.length,s++;else break}else l++},o.parseID3PES=function(r,g){if(g.pts===void 0){b.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}var c=A({},g,{type:this._avcTrack?y.MetadataSchema.emsg:y.MetadataSchema.audioId3});r.samples.push(c)},m}();function f(m,o,n,r){return{key:m,frame:!1,pts:o,dts:n,units:[],debug:r,length:0}}function v(m,o){return(m[o+10]&31)<<8|m[o+11]}function t(m,o,n,r){var g={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},c=(m[o+1]&15)<<8|m[o+2],d=o+3+c-4,s=(m[o+10]&15)<<8|m[o+11];for(o+=12+s;o<d;){var l=(m[o+1]&31)<<8|m[o+2];switch(m[o]){case 207:if(!r){b.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:g.audio===-1&&(g.audio=l);break;case 21:g.id3===-1&&(g.id3=l);break;case 219:if(!r){b.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:g.avc===-1&&(g.avc=l);break;case 3:case 4:n.mpeg!==!0&&n.mp3!==!0?b.logger.log("MPEG audio found, not supported in this browser"):g.audio===-1&&(g.audio=l,g.segmentCodec="mp3");break;case 36:b.logger.warn("Unsupported HEVC stream type found");break}o+=((m[o+3]&15)<<8|m[o+4])+5}return g}function e(m){var o=0,n,r,g,c,d,s=m.data;if(!m||m.size===0)return null;for(;s[0].length<19&&s.length>1;){var l=new Uint8Array(s[0].length+s[1].length);l.set(s[0]),l.set(s[1],s[0].length),s[0]=l,s.splice(1,1)}n=s[0];var u=(n[0]<<16)+(n[1]<<8)+n[2];if(u===1){if(r=(n[4]<<8)+n[5],r&&r>m.size-6)return null;var E=n[7];E&192&&(c=(n[9]&14)*536870912+(n[10]&255)*4194304+(n[11]&254)*16384+(n[12]&255)*128+(n[13]&254)/2,E&64?(d=(n[14]&14)*536870912+(n[15]&255)*4194304+(n[16]&254)*16384+(n[17]&255)*128+(n[18]&254)/2,c-d>60*9e4&&(b.logger.warn(Math.round((c-d)/9e4)+"s delta between PTS and DTS, align them"),c=d)):d=c),g=n[8];var L=g+9;if(m.size<=L)return null;m.size-=L;for(var S=new Uint8Array(m.size),k=0,N=s.length;k<N;k++){n=s[k];var F=n.byteLength;if(L)if(L>F){L-=F;continue}else n=n.subarray(L),F-=L,L=0;S.set(n,o),o+=F}return r&&(r-=g+3),{data:S,pts:c,dts:d,len:r}}return null}function i(m,o){if(m.units.length&&m.frame){if(m.pts===void 0){var n=o.samples,r=n.length;if(r){var g=n[r-1];m.pts=g.pts,m.dts=g.dts}else{o.dropped++;return}}o.samples.push(m)}m.debug.length&&b.logger.log(m.pts+"/"+m.dts+":"+m.debug)}function p(m){for(var o=m.byteLength,n=[],r=1;r<o-2;)m[r]===0&&m[r+1]===0&&m[r+2]===3?(n.push(r+2),r+=2):r++;if(n.length===0)return m;var g=o-n.length,c=new Uint8Array(g),d=0;for(r=0;r<g;d++,r++)d===n[0]&&(d++,n.shift()),c[r]=m[d];return c}B.default=h},"./src/errors.ts":function(X,B,x){x.r(B),x.d(B,"ErrorTypes",function(){return M}),x.d(B,"ErrorDetails",function(){return C});var M;(function(T){T.NETWORK_ERROR="networkError",T.MEDIA_ERROR="mediaError",T.KEY_SYSTEM_ERROR="keySystemError",T.MUX_ERROR="muxError",T.OTHER_ERROR="otherError"})(M||(M={}));var C;(function(T){T.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",T.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",T.KEY_SYSTEM_NO_SESSION="keySystemNoSession",T.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",T.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",T.MANIFEST_LOAD_ERROR="manifestLoadError",T.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",T.MANIFEST_PARSING_ERROR="manifestParsingError",T.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",T.LEVEL_EMPTY_ERROR="levelEmptyError",T.LEVEL_LOAD_ERROR="levelLoadError",T.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",T.LEVEL_SWITCH_ERROR="levelSwitchError",T.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",T.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",T.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",T.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",T.FRAG_LOAD_ERROR="fragLoadError",T.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",T.FRAG_DECRYPT_ERROR="fragDecryptError",T.FRAG_PARSING_ERROR="fragParsingError",T.REMUX_ALLOC_ERROR="remuxAllocError",T.KEY_LOAD_ERROR="keyLoadError",T.KEY_LOAD_TIMEOUT="keyLoadTimeOut",T.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",T.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",T.BUFFER_APPEND_ERROR="bufferAppendError",T.BUFFER_APPENDING_ERROR="bufferAppendingError",T.BUFFER_STALLED_ERROR="bufferStalledError",T.BUFFER_FULL_ERROR="bufferFullError",T.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",T.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",T.INTERNAL_EXCEPTION="internalException",T.INTERNAL_ABORTED="aborted",T.UNKNOWN="unknown"})(C||(C={}))},"./src/events.ts":function(X,B,x){x.r(B),x.d(B,"Events",function(){return M});var M;(function(C){C.MEDIA_ATTACHING="hlsMediaAttaching",C.MEDIA_ATTACHED="hlsMediaAttached",C.MEDIA_DETACHING="hlsMediaDetaching",C.MEDIA_DETACHED="hlsMediaDetached",C.BUFFER_RESET="hlsBufferReset",C.BUFFER_CODECS="hlsBufferCodecs",C.BUFFER_CREATED="hlsBufferCreated",C.BUFFER_APPENDING="hlsBufferAppending",C.BUFFER_APPENDED="hlsBufferAppended",C.BUFFER_EOS="hlsBufferEos",C.BUFFER_FLUSHING="hlsBufferFlushing",C.BUFFER_FLUSHED="hlsBufferFlushed",C.MANIFEST_LOADING="hlsManifestLoading",C.MANIFEST_LOADED="hlsManifestLoaded",C.MANIFEST_PARSED="hlsManifestParsed",C.LEVEL_SWITCHING="hlsLevelSwitching",C.LEVEL_SWITCHED="hlsLevelSwitched",C.LEVEL_LOADING="hlsLevelLoading",C.LEVEL_LOADED="hlsLevelLoaded",C.LEVEL_UPDATED="hlsLevelUpdated",C.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",C.LEVELS_UPDATED="hlsLevelsUpdated",C.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",C.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",C.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",C.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",C.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",C.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",C.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",C.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",C.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",C.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",C.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",C.CUES_PARSED="hlsCuesParsed",C.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",C.INIT_PTS_FOUND="hlsInitPtsFound",C.FRAG_LOADING="hlsFragLoading",C.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",C.FRAG_LOADED="hlsFragLoaded",C.FRAG_DECRYPTED="hlsFragDecrypted",C.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",C.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",C.FRAG_PARSING_METADATA="hlsFragParsingMetadata",C.FRAG_PARSED="hlsFragParsed",C.FRAG_BUFFERED="hlsFragBuffered",C.FRAG_CHANGED="hlsFragChanged",C.FPS_DROP="hlsFpsDrop",C.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",C.ERROR="hlsError",C.DESTROYING="hlsDestroying",C.KEY_LOADING="hlsKeyLoading",C.KEY_LOADED="hlsKeyLoaded",C.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",C.BACK_BUFFER_REACHED="hlsBackBufferReached"})(M||(M={}))},"./src/hls.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return p});var M=x("./node_modules/url-toolkit/src/url-toolkit.js"),C=x("./src/loader/playlist-loader.ts"),T=x("./src/loader/key-loader.ts"),R=x("./src/controller/id3-track-controller.ts"),O=x("./src/controller/latency-controller.ts"),I=x("./src/controller/level-controller.ts"),b=x("./src/controller/fragment-tracker.ts"),a=x("./src/controller/stream-controller.ts"),y=x("./src/is-supported.ts"),A=x("./src/utils/logger.ts"),h=x("./src/config.ts"),f=x("./node_modules/eventemitter3/index.js"),v=x("./src/events.ts"),t=x("./src/errors.ts");function e(m,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(m,r.key,r)}}function i(m,o,n){return o&&e(m.prototype,o),n&&e(m,n),Object.defineProperty(m,"prototype",{writable:!1}),m}var p=function(){m.isSupported=function(){return Object(y.isSupported)()};function m(n){n===void 0&&(n={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new f.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var r=this.config=Object(h.mergeConfig)(m.DefaultConfig,n);this.userConfig=n,Object(A.enableLogs)(r.debug),this._autoLevelCapping=-1,r.progressive&&Object(h.enableStreamingMode)(r);var g=r.abrController,c=r.bufferController,d=r.capLevelController,s=r.fpsController,l=this.abrController=new g(this),u=this.bufferController=new c(this),E=this.capLevelController=new d(this),L=new s(this),S=new C.default(this),k=new T.default(this),N=new R.default(this),F=this.levelController=new I.default(this),K=new b.FragmentTracker(this),W=this.streamController=new a.default(this,K);E.setStreamController(W),L.setStreamController(W);var z=[S,k,F,W];this.networkControllers=z;var H=[l,u,E,L,N,K];this.audioTrackController=this.createController(r.audioTrackController,null,z),this.createController(r.audioStreamController,K,z),this.subtitleTrackController=this.createController(r.subtitleTrackController,null,z),this.createController(r.subtitleStreamController,K,z),this.createController(r.timelineController,null,H),this.emeController=this.createController(r.emeController,null,H),this.cmcdController=this.createController(r.cmcdController,null,H),this.latencyController=this.createController(O.default,null,H),this.coreComponents=H}var o=m.prototype;return o.createController=function(r,g,c){if(r){var d=g?new r(this,g):new r(this);return c&&c.push(d),d}return null},o.on=function(r,g,c){c===void 0&&(c=this),this._emitter.on(r,g,c)},o.once=function(r,g,c){c===void 0&&(c=this),this._emitter.once(r,g,c)},o.removeAllListeners=function(r){this._emitter.removeAllListeners(r)},o.off=function(r,g,c,d){c===void 0&&(c=this),this._emitter.off(r,g,c,d)},o.listeners=function(r){return this._emitter.listeners(r)},o.emit=function(r,g,c){return this._emitter.emit(r,g,c)},o.trigger=function(r,g){if(this.config.debug)return this.emit(r,r,g);try{return this.emit(r,r,g)}catch(c){A.logger.error("An internal error happened while handling event "+r+'. Error message: "'+c.message+'". Here is a stacktrace:',c),this.trigger(v.Events.ERROR,{type:t.ErrorTypes.OTHER_ERROR,details:t.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:r,error:c})}return!1},o.listenerCount=function(r){return this._emitter.listenerCount(r)},o.destroy=function(){A.logger.log("destroy"),this.trigger(v.Events.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(function(r){return r.destroy()}),this.networkControllers.length=0,this.coreComponents.forEach(function(r){return r.destroy()}),this.coreComponents.length=0},o.attachMedia=function(r){A.logger.log("attachMedia"),this._media=r,this.trigger(v.Events.MEDIA_ATTACHING,{media:r})},o.detachMedia=function(){A.logger.log("detachMedia"),this.trigger(v.Events.MEDIA_DETACHING,void 0),this._media=null},o.loadSource=function(r){this.stopLoad();var g=this.media,c=this.url,d=this.url=M.buildAbsoluteURL(self.location.href,r,{alwaysNormalize:!0});A.logger.log("loadSource:"+d),g&&c&&c!==d&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(g)),this.trigger(v.Events.MANIFEST_LOADING,{url:r})},o.startLoad=function(r){r===void 0&&(r=-1),A.logger.log("startLoad("+r+")"),this.networkControllers.forEach(function(g){g.startLoad(r)})},o.stopLoad=function(){A.logger.log("stopLoad"),this.networkControllers.forEach(function(r){r.stopLoad()})},o.swapAudioCodec=function(){A.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},o.recoverMediaError=function(){A.logger.log("recoverMediaError");var r=this._media;this.detachMedia(),r&&this.attachMedia(r)},o.removeLevel=function(r,g){g===void 0&&(g=0),this.levelController.removeLevel(r,g)},i(m,[{key:"levels",get:function(){var r=this.levelController.levels;return r||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(r){A.logger.log("set currentLevel:"+r),this.loadLevel=r,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(r){A.logger.log("set nextLevel:"+r),this.levelController.manualLevel=r,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(r){A.logger.log("set loadLevel:"+r),this.levelController.manualLevel=r}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(r){this.levelController.nextLoadLevel=r}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(r){A.logger.log("set firstLevel:"+r),this.levelController.firstLevel=r}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(r){A.logger.log("set startLevel:"+r),r!==-1&&(r=Math.max(r,this.minAutoLevel)),this.levelController.startLevel=r}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(r){var g=!!r;g!==this.config.capLevelToPlayerSize&&(g?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=g)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(r){this._autoLevelCapping!==r&&(A.logger.log("set autoLevelCapping:"+r),this._autoLevelCapping=r)}},{key:"bandwidthEstimate",get:function(){var r=this.abrController.bwEstimator;return r?r.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var r=this.levels,g=this.config.minAutoBitrate;if(!r)return 0;for(var c=r.length,d=0;d<c;d++)if(r[d].maxBitrate>=g)return d;return 0}},{key:"maxAutoLevel",get:function(){var r=this.levels,g=this.autoLevelCapping,c;return g===-1&&r&&r.length?c=r.length-1:c=g,c}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(r){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,r)}},{key:"playingDate",get:function(){return this.streamController.currentProgramDateTime}},{key:"audioTracks",get:function(){var r=this.audioTrackController;return r?r.audioTracks:[]}},{key:"audioTrack",get:function(){var r=this.audioTrackController;return r?r.audioTrack:-1},set:function(r){var g=this.audioTrackController;g&&(g.audioTrack=r)}},{key:"subtitleTracks",get:function(){var r=this.subtitleTrackController;return r?r.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var r=this.subtitleTrackController;return r?r.subtitleTrack:-1},set:function(r){var g=this.subtitleTrackController;g&&(g.subtitleTrack=r)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var r=this.subtitleTrackController;return r?r.subtitleDisplay:!1},set:function(r){var g=this.subtitleTrackController;g&&(g.subtitleDisplay=r)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(r){this.config.lowLatencyMode=r}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.2.3"}},{key:"Events",get:function(){return v.Events}},{key:"ErrorTypes",get:function(){return t.ErrorTypes}},{key:"ErrorDetails",get:function(){return t.ErrorDetails}},{key:"DefaultConfig",get:function(){return m.defaultConfig?m.defaultConfig:h.hlsDefaultConfig},set:function(r){m.defaultConfig=r}}]),m}();p.defaultConfig=void 0},"./src/is-supported.ts":function(X,B,x){x.r(B),x.d(B,"isSupported",function(){return T}),x.d(B,"changeTypeSupported",function(){return R});var M=x("./src/utils/mediasource-helper.ts");function C(){return self.SourceBuffer||self.WebKitSourceBuffer}function T(){var O=Object(M.getMediaSource)();if(!O)return!1;var I=C(),b=O&&typeof O.isTypeSupported=="function"&&O.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),a=!I||I.prototype&&typeof I.prototype.appendBuffer=="function"&&typeof I.prototype.remove=="function";return!!b&&!!a}function R(){var O,I=C();return typeof(I==null||(O=I.prototype)===null||O===void 0?void 0:O.changeType)=="function"}},"./src/loader/date-range.ts":function(X,B,x){x.r(B),x.d(B,"DateRangeAttribute",function(){return b}),x.d(B,"DateRange",function(){return a});var M=x("./src/polyfills/number.ts"),C=x("./src/utils/attr-list.ts"),T=x("./src/utils/logger.ts");function R(){return R=Object.assign?Object.assign.bind():function(y){for(var A=1;A<arguments.length;A++){var h=arguments[A];for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(y[f]=h[f])}return y},R.apply(this,arguments)}function O(y,A){for(var h=0;h<A.length;h++){var f=A[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}function I(y,A,h){return A&&O(y.prototype,A),h&&O(y,h),Object.defineProperty(y,"prototype",{writable:!1}),y}var b;(function(y){y.ID="ID",y.CLASS="CLASS",y.START_DATE="START-DATE",y.DURATION="DURATION",y.END_DATE="END-DATE",y.END_ON_NEXT="END-ON-NEXT",y.PLANNED_DURATION="PLANNED-DURATION",y.SCTE35_OUT="SCTE35-OUT",y.SCTE35_IN="SCTE35-IN"})(b||(b={}));var a=function(){function y(A,h){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,h){var f=h.attr;for(var v in f)if(Object.prototype.hasOwnProperty.call(A,v)&&A[v]!==f[v]){T.logger.warn('DATERANGE tag attribute: "'+v+'" does not match for tags with ID: "'+A.ID+'"'),this._badValueForSameId=v;break}A=R(new C.AttrList({}),f,A)}if(this.attr=A,this._startDate=new Date(A[b.START_DATE]),b.END_DATE in this.attr){var t=new Date(this.attr[b.END_DATE]);Object(M.isFiniteNumber)(t.getTime())&&(this._endDate=t)}}return I(y,[{key:"id",get:function(){return this.attr.ID}},{key:"class",get:function(){return this.attr.CLASS}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){if(this._endDate)return this._endDate;var h=this.duration;return h!==null?new Date(this._startDate.getTime()+h*1e3):null}},{key:"duration",get:function(){if(b.DURATION in this.attr){var h=this.attr.decimalFloatingPoint(b.DURATION);if(Object(M.isFiniteNumber)(h))return h}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}},{key:"plannedDuration",get:function(){return b.PLANNED_DURATION in this.attr?this.attr.decimalFloatingPoint(b.PLANNED_DURATION):null}},{key:"endOnNext",get:function(){return this.attr.bool(b.END_ON_NEXT)}},{key:"isValid",get:function(){return!!this.id&&!this._badValueForSameId&&Object(M.isFiniteNumber)(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}]),y}()},"./src/loader/fragment-loader.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return h}),x.d(B,"LoadError",function(){return v});var M=x("./src/polyfills/number.ts"),C=x("./src/errors.ts");function T(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}function R(t){var e=typeof Map=="function"?new Map:void 0;return R=function(p){if(p===null||!b(p))return p;if(typeof p!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(p))return e.get(p);e.set(p,m)}function m(){return O(p,arguments,y(this).constructor)}return m.prototype=Object.create(p.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),a(m,p)},R(t)}function O(t,e,i){return I()?O=Reflect.construct.bind():O=function(m,o,n){var r=[null];r.push.apply(r,o);var g=Function.bind.apply(m,r),c=new g;return n&&a(c,n.prototype),c},O.apply(null,arguments)}function I(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,m){return p.__proto__=m,p},a(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},y(t)}var A=Math.pow(2,17),h=function(){function t(i){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=i}var e=t.prototype;return e.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},e.abort=function(){this.loader&&this.loader.abort()},e.load=function(p,m){var o=this,n=p.url;if(!n)return Promise.reject(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:p,networkDetails:null},"Fragment does not have a "+(n?"part list":"url")));this.abort();var r=this.config,g=r.fLoader,c=r.loader;return new Promise(function(d,s){o.loader&&o.loader.destroy();var l=o.loader=p.loader=g?new g(r):new c(r),u=f(p),E={timeout:r.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:r.fragLoadingMaxRetryTimeout,highWaterMark:p.sn==="initSegment"?1/0:A};p.stats=l.stats,l.load(u,E,{onSuccess:function(S,k,N,F){o.resetLoader(p,l),d({frag:p,part:null,payload:S.data,networkDetails:F})},onError:function(S,k,N){o.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:p,response:S,networkDetails:N}))},onAbort:function(S,k,N){o.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:p,networkDetails:N}))},onTimeout:function(S,k,N){o.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:p,networkDetails:N}))},onProgress:function(S,k,N,F){m&&m({frag:p,part:null,payload:N,networkDetails:F})}})})},e.loadPart=function(p,m,o){var n=this;this.abort();var r=this.config,g=r.fLoader,c=r.loader;return new Promise(function(d,s){n.loader&&n.loader.destroy();var l=n.loader=p.loader=g?new g(r):new c(r),u=f(p,m),E={timeout:r.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:r.fragLoadingMaxRetryTimeout,highWaterMark:A};m.stats=l.stats,l.load(u,E,{onSuccess:function(S,k,N,F){n.resetLoader(p,l),n.updateStatsFromPart(p,m);var K={frag:p,part:m,payload:S.data,networkDetails:F};o(K),d(K)},onError:function(S,k,N){n.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:p,part:m,response:S,networkDetails:N}))},onAbort:function(S,k,N){p.stats.aborted=m.stats.aborted,n.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:p,part:m,networkDetails:N}))},onTimeout:function(S,k,N){n.resetLoader(p,l),s(new v({type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:p,part:m,networkDetails:N}))}})})},e.updateStatsFromPart=function(p,m){var o=p.stats,n=m.stats,r=n.total;if(o.loaded+=n.loaded,r){var g=Math.round(p.duration/m.duration),c=Math.min(Math.round(o.loaded/r),g),d=g-c,s=d*Math.round(o.loaded/c);o.total=o.loaded+s}else o.total=Math.max(o.loaded,o.total);var l=o.loading,u=n.loading;l.start?l.first+=u.first-u.start:(l.start=u.start,l.first=u.first),l.end=u.end},e.resetLoader=function(p,m){p.loader=null,this.loader===m&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),m.destroy()},t}();function f(t,e){e===void 0&&(e=null);var i=e||t,p={frag:t,part:e,responseType:"arraybuffer",url:i.url,headers:{},rangeStart:0,rangeEnd:0},m=i.byteRangeStartOffset,o=i.byteRangeEndOffset;return Object(M.isFiniteNumber)(m)&&Object(M.isFiniteNumber)(o)&&(p.rangeStart=m,p.rangeEnd=o),p}var v=function(t){T(e,t);function e(i){for(var p,m=arguments.length,o=new Array(m>1?m-1:0),n=1;n<m;n++)o[n-1]=arguments[n];return p=t.call.apply(t,[this].concat(o))||this,p.data=void 0,p.data=i,p}return e}(R(Error))},"./src/loader/fragment.ts":function(X,B,x){x.r(B),x.d(B,"ElementaryStreamTypes",function(){return A}),x.d(B,"BaseSegment",function(){return h}),x.d(B,"Fragment",function(){return f}),x.d(B,"Part",function(){return v});var M=x("./src/polyfills/number.ts"),C=x("./node_modules/url-toolkit/src/url-toolkit.js"),T=x("./src/utils/logger.ts"),R=x("./src/loader/level-key.ts"),O=x("./src/loader/load-stats.ts");function I(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,b(t,e)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,m){return p.__proto__=m,p},b(t,e)}function a(t,e){for(var i=0;i<e.length;i++){var p=e[i];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(t,p.key,p)}}function y(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var A;(function(t){t.AUDIO="audio",t.VIDEO="video",t.AUDIOVIDEO="audiovideo"})(A||(A={}));var h=function(){function t(i){var p;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=(p={},p[A.AUDIO]=null,p[A.VIDEO]=null,p[A.AUDIOVIDEO]=null,p),this.baseurl=i}var e=t.prototype;return e.setByteRange=function(p,m){var o=p.split("@",2),n=[];o.length===1?n[0]=m?m.byteRangeEndOffset:0:n[0]=parseInt(o[1]),n[1]=parseInt(o[0])+n[0],this._byteRange=n},y(t,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Object(C.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(p){this._url=p}}]),t}(),f=function(t){I(e,t);function e(p,m){var o;return o=t.call(this,m)||this,o._decryptdata=null,o.rawProgramDateTime=null,o.programDateTime=null,o.tagList=[],o.duration=0,o.sn=0,o.levelkey=void 0,o.type=void 0,o.loader=null,o.level=-1,o.cc=0,o.startPTS=void 0,o.endPTS=void 0,o.appendedPTS=void 0,o.startDTS=void 0,o.endDTS=void 0,o.start=0,o.deltaPTS=void 0,o.maxStartPTS=void 0,o.minEndPTS=void 0,o.stats=new O.LoadStats,o.urlId=0,o.data=void 0,o.bitrateTest=!1,o.title=null,o.initSegment=null,o.type=p,o}var i=e.prototype;return i.createInitializationVector=function(m){for(var o=new Uint8Array(16),n=12;n<16;n++)o[n]=m>>8*(15-n)&255;return o},i.setDecryptDataFromLevelKey=function(m,o){var n=m;return(m==null?void 0:m.method)==="AES-128"&&m.uri&&!m.iv&&(n=R.LevelKey.fromURI(m.uri),n.method=m.method,n.iv=this.createInitializationVector(o),n.keyFormat="identity"),n},i.setElementaryStreamInfo=function(m,o,n,r,g,c){c===void 0&&(c=!1);var d=this.elementaryStreams,s=d[m];if(!s){d[m]={startPTS:o,endPTS:n,startDTS:r,endDTS:g,partial:c};return}s.startPTS=Math.min(s.startPTS,o),s.endPTS=Math.max(s.endPTS,n),s.startDTS=Math.min(s.startDTS,r),s.endDTS=Math.max(s.endDTS,g)},i.clearElementaryStreamInfo=function(){var m=this.elementaryStreams;m[A.AUDIO]=null,m[A.VIDEO]=null,m[A.AUDIOVIDEO]=null},y(e,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var m=this.sn;typeof m!="number"&&(this.levelkey&&this.levelkey.method==="AES-128"&&!this.levelkey.iv&&T.logger.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),m=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,m)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(this.programDateTime===null||!Object(M.isFiniteNumber)(this.programDateTime))return null;var m=Object(M.isFiniteNumber)(this.duration)?this.duration:0;return this.programDateTime+m*1e3}},{key:"encrypted",get:function(){var m;return!!((m=this.decryptdata)!==null&&m!==void 0&&m.keyFormat&&this.decryptdata.uri)}}]),e}(h),v=function(t){I(e,t);function e(i,p,m,o,n){var r;r=t.call(this,m)||this,r.fragOffset=0,r.duration=0,r.gap=!1,r.independent=!1,r.relurl=void 0,r.fragment=void 0,r.index=void 0,r.stats=new O.LoadStats,r.duration=i.decimalFloatingPoint("DURATION"),r.gap=i.bool("GAP"),r.independent=i.bool("INDEPENDENT"),r.relurl=i.enumeratedString("URI"),r.fragment=p,r.index=o;var g=i.enumeratedString("BYTERANGE");return g&&r.setByteRange(g,n),n&&(r.fragOffset=n.fragOffset+n.duration),r}return y(e,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var p=this.elementaryStreams;return!!(p.audio||p.video||p.audiovideo)}}]),e}(h)},"./src/loader/key-loader.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return R});var M=x("./src/events.ts"),C=x("./src/errors.ts"),T=x("./src/utils/logger.ts"),R=function(){function O(b){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=b,this.registerListeners()}var I=O.prototype;return I.startLoad=function(a){},I.stopLoad=function(){this.destroyInternalLoaders()},I.registerListeners=function(){this.hls.on(M.Events.KEY_LOADING,this.onKeyLoading,this)},I.unregisterListeners=function(){this.hls.off(M.Events.KEY_LOADING,this.onKeyLoading)},I.destroyInternalLoaders=function(){for(var a in this.loaders){var y=this.loaders[a];y&&y.destroy()}this.loaders={}},I.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},I.onKeyLoading=function(a,y){var A=y.frag,h=A.type,f=this.loaders[h];if(!A.decryptdata){T.logger.warn("Missing decryption data on fragment in onKeyLoading");return}var v=A.decryptdata.uri;if(v!==this.decrypturl||this.decryptkey===null){var t=this.hls.config;if(f&&(T.logger.warn("abort previous key loader for type:"+h),f.abort()),!v){T.logger.warn("key uri is falsy");return}var e=t.loader,i=A.loader=this.loaders[h]=new e(t);this.decrypturl=v,this.decryptkey=null;var p={url:v,frag:A,responseType:"arraybuffer"},m={timeout:t.fragLoadingTimeOut,maxRetry:0,retryDelay:t.fragLoadingRetryDelay,maxRetryDelay:t.fragLoadingMaxRetryTimeout,highWaterMark:0},o={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};i.load(p,m,o)}else this.decryptkey&&(A.decryptdata.key=this.decryptkey,this.hls.trigger(M.Events.KEY_LOADED,{frag:A}))},I.loadsuccess=function(a,y,A){var h=A.frag;if(!h.decryptdata){T.logger.error("after key load, decryptdata unset");return}this.decryptkey=h.decryptdata.key=new Uint8Array(a.data),h.loader=null,delete this.loaders[h.type],this.hls.trigger(M.Events.KEY_LOADED,{frag:h})},I.loaderror=function(a,y){var A=y.frag,h=A.loader;h&&h.abort(),delete this.loaders[A.type],this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:A,response:a})},I.loadtimeout=function(a,y){var A=y.frag,h=A.loader;h&&h.abort(),delete this.loaders[A.type],this.hls.trigger(M.Events.ERROR,{type:C.ErrorTypes.NETWORK_ERROR,details:C.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:A})},O}()},"./src/loader/level-details.ts":function(X,B,x){x.r(B),x.d(B,"LevelDetails",function(){return O});var M=x("./src/polyfills/number.ts");function C(I,b){for(var a=0;a<b.length;a++){var y=b[a];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(I,y.key,y)}}function T(I,b,a){return b&&C(I.prototype,b),a&&C(I,a),Object.defineProperty(I,"prototype",{writable:!1}),I}var R=10,O=function(){function I(a){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.dateRanges={},this.url=a}var b=I.prototype;return b.reloaded=function(y){if(!y){this.advanced=!0,this.updated=!0;return}var A=this.lastPartSn-y.lastPartSn,h=this.lastPartIndex-y.lastPartIndex;this.updated=this.endSN!==y.endSN||!!h||!!A,this.advanced=this.endSN>y.endSN||A>0||A===0&&h>0,this.updated||this.advanced?this.misses=Math.floor(y.misses*.6):this.misses=y.misses+1,this.availabilityDelay=y.availabilityDelay},T(I,[{key:"hasProgramDateTime",get:function(){return this.fragments.length?Object(M.isFiniteNumber)(this.fragments[this.fragments.length-1].programDateTime):!1}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||R}},{key:"drift",get:function(){var y=this.driftEndTime-this.driftStartTime;if(y>0){var A=this.driftEnd-this.driftStart;return A*1e3/y}return 1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var y;return(y=this.partList)!==null&&y!==void 0&&y.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var y;return(y=this.fragments)!==null&&y!==void 0&&y.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var y;return(y=this.partList)!==null&&y!==void 0&&y.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var y;return(y=this.partList)!==null&&y!==void 0&&y.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),I}()},"./src/loader/level-key.ts":function(X,B,x){x.r(B),x.d(B,"LevelKey",function(){return R});var M=x("./node_modules/url-toolkit/src/url-toolkit.js");function C(O,I){for(var b=0;b<I.length;b++){var a=I[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(O,a.key,a)}}function T(O,I,b){return I&&C(O.prototype,I),b&&C(O,b),Object.defineProperty(O,"prototype",{writable:!1}),O}var R=function(){O.fromURL=function(b,a){return new O(b,a)},O.fromURI=function(b){return new O(b)};function O(I,b){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,b?this._uri=Object(M.buildAbsoluteURL)(I,b,{alwaysNormalize:!0}):this._uri=I}return T(O,[{key:"uri",get:function(){return this._uri}}]),O}()},"./src/loader/load-stats.ts":function(X,B,x){x.r(B),x.d(B,"LoadStats",function(){return M});var M=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},"./src/loader/m3u8-parser.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return i});var M=x("./src/polyfills/number.ts"),C=x("./node_modules/url-toolkit/src/url-toolkit.js"),T=x("./src/loader/date-range.ts"),R=x("./src/loader/fragment.ts"),O=x("./src/loader/level-details.ts"),I=x("./src/loader/level-key.ts"),b=x("./src/utils/attr-list.ts"),a=x("./src/utils/logger.ts"),y=x("./src/utils/codecs.ts"),A=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,h=/#EXT-X-MEDIA:(.*)/g,f=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),v=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),t=/\.(mp4|m4s|m4v|m4a)$/i;function e(g){var c,d;return t.test((c=(d=C.parseURL(g))===null||d===void 0?void 0:d.path)!=null?c:"")}var i=function(){function g(){}return g.findGroup=function(d,s){for(var l=0;l<d.length;l++){var u=d[l];if(u.id===s)return u}},g.convertAVC1ToAVCOTI=function(d){var s=d.split(".");if(s.length>2){var l=s.shift()+".";return l+=parseInt(s.shift()).toString(16),l+=("000"+parseInt(s.shift()).toString(16)).slice(-4),l}return d},g.resolve=function(d,s){return C.buildAbsoluteURL(s,d,{alwaysNormalize:!0})},g.parseMasterPlaylist=function(d,s){var l=[],u={},E=!1;A.lastIndex=0;for(var L;(L=A.exec(d))!=null;)if(L[1]){var S=new b.AttrList(L[1]),k={attrs:S,bitrate:S.decimalInteger("AVERAGE-BANDWIDTH")||S.decimalInteger("BANDWIDTH"),name:S.NAME,url:g.resolve(L[2],s)},N=S.decimalResolution("RESOLUTION");N&&(k.width=N.width,k.height=N.height),p((S.CODECS||"").split(/[ ,]+/).filter(function(K){return K}),k),k.videoCodec&&k.videoCodec.indexOf("avc1")!==-1&&(k.videoCodec=g.convertAVC1ToAVCOTI(k.videoCodec)),l.push(k)}else if(L[3]){var F=new b.AttrList(L[3]);F["DATA-ID"]&&(E=!0,u[F["DATA-ID"]]=F)}return{levels:l,sessionData:E?u:null}},g.parseMasterPlaylistMedia=function(d,s,l,u){u===void 0&&(u=[]);var E,L=[],S=0;for(h.lastIndex=0;(E=h.exec(d))!==null;){var k=new b.AttrList(E[1]);if(k.TYPE===l){var N={attrs:k,bitrate:0,id:S++,groupId:k["GROUP-ID"],instreamId:k["INSTREAM-ID"],name:k.NAME||k.LANGUAGE||"",type:l,default:k.bool("DEFAULT"),autoselect:k.bool("AUTOSELECT"),forced:k.bool("FORCED"),lang:k.LANGUAGE,url:k.URI?g.resolve(k.URI,s):""};if(u.length){var F=g.findGroup(u,N.groupId)||u[0];m(N,F,"audioCodec"),m(N,F,"textCodec")}L.push(N)}}return L},g.parseLevelPlaylist=function(d,s,l,u,E){var L=new O.LevelDetails(s),S=L.fragments,k=null,N=0,F=0,K=0,W=0,z=null,H=new R.Fragment(u,s),Y,Q,Z,$=-1,ee=!1;for(f.lastIndex=0,L.m3u8=d;(Y=f.exec(d))!==null;){ee&&(ee=!1,H=new R.Fragment(u,s),H.start=K,H.sn=N,H.cc=W,H.level=l,k&&(H.initSegment=k,H.rawProgramDateTime=k.rawProgramDateTime,k.rawProgramDateTime=null));var ie=Y[1];if(ie){H.duration=parseFloat(ie);var ae=(" "+Y[2]).slice(1);H.title=ae||null,H.tagList.push(ae?["INF",ie,ae]:["INF",ie])}else if(Y[3])Object(M.isFiniteNumber)(H.duration)&&(H.start=K,Z&&(H.levelkey=Z),H.sn=N,H.level=l,H.cc=W,H.urlId=E,S.push(H),H.relurl=(" "+Y[3]).slice(1),n(H,z),z=H,K+=H.duration,N++,F=0,ee=!0);else if(Y[4]){var q=(" "+Y[4]).slice(1);z?H.setByteRange(q,z):H.setByteRange(q)}else if(Y[5])H.rawProgramDateTime=(" "+Y[5]).slice(1),H.tagList.push(["PROGRAM-DATE-TIME",H.rawProgramDateTime]),$===-1&&($=S.length);else{if(Y=Y[0].match(v),!Y){a.logger.warn("No matches on slow regex match for level playlist!");continue}for(Q=1;Q<Y.length&&typeof Y[Q]=="undefined";Q++);var oe=(" "+Y[Q]).slice(1),ne=(" "+Y[Q+1]).slice(1),re=Y[Q+2]?(" "+Y[Q+2]).slice(1):"";switch(oe){case"PLAYLIST-TYPE":L.type=ne.toUpperCase();break;case"MEDIA-SEQUENCE":N=L.startSN=parseInt(ne);break;case"SKIP":{var ue=new b.AttrList(ne),le=ue.decimalInteger("SKIPPED-SEGMENTS");if(Object(M.isFiniteNumber)(le)){L.skippedSegments=le;for(var fe=le;fe--;)S.unshift(null);N+=le}var ye=ue.enumeratedString("RECENTLY-REMOVED-DATERANGES");ye&&(L.recentlyRemovedDateranges=ye.split("	"));break}case"TARGETDURATION":L.targetduration=parseFloat(ne);break;case"VERSION":L.version=parseInt(ne);break;case"EXTM3U":break;case"ENDLIST":L.live=!1;break;case"#":(ne||re)&&H.tagList.push(re?[ne,re]:[ne]);break;case"DISCONTINUITY":W++,H.tagList.push(["DIS"]);break;case"GAP":H.tagList.push([oe]);break;case"BITRATE":H.tagList.push([oe,ne]);break;case"DATERANGE":{var pe=new b.AttrList(ne),Te=new T.DateRange(pe,L.dateRanges[pe.ID]);Te.isValid||L.skippedSegments?L.dateRanges[Te.id]=Te:a.logger.warn('Ignoring invalid DATERANGE tag: "'+ne+'"'),H.tagList.push(["EXT-X-DATERANGE",ne]);break}case"DISCONTINUITY-SEQUENCE":W=parseInt(ne);break;case"KEY":{var Ee,Ae=new b.AttrList(ne),Ce=Ae.enumeratedString("METHOD"),Le=Ae.URI,Re=Ae.hexadecimalInteger("IV"),Ie=Ae.enumeratedString("KEYFORMATVERSIONS"),Se=Ae.enumeratedString("KEYID"),ke=(Ee=Ae.enumeratedString("KEYFORMAT"))!=null?Ee:"identity",De=["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"];if(De.indexOf(ke)>-1){a.logger.warn("Keyformat "+ke+" is not supported from the manifest");continue}else if(ke!=="identity")continue;Ce&&(Z=I.LevelKey.fromURL(s,Le),Le&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(Ce)>=0&&(Z.method=Ce,Z.keyFormat=ke,Se&&(Z.keyID=Se),Ie&&(Z.keyFormatVersions=Ie),Z.iv=Re));break}case"START":{var Fe=new b.AttrList(ne),ge=Fe.decimalFloatingPoint("TIME-OFFSET");Object(M.isFiniteNumber)(ge)&&(L.startTimeOffset=ge);break}case"MAP":{var be=new b.AttrList(ne);if(H.duration){var Pe=new R.Fragment(u,s);r(Pe,be,l,Z),k=Pe,H.initSegment=k,k.rawProgramDateTime&&!H.rawProgramDateTime&&(H.rawProgramDateTime=k.rawProgramDateTime)}else r(H,be,l,Z),k=H,ee=!0;break}case"SERVER-CONTROL":{var ve=new b.AttrList(ne);L.canBlockReload=ve.bool("CAN-BLOCK-RELOAD"),L.canSkipUntil=ve.optionalFloat("CAN-SKIP-UNTIL",0),L.canSkipDateRanges=L.canSkipUntil>0&&ve.bool("CAN-SKIP-DATERANGES"),L.partHoldBack=ve.optionalFloat("PART-HOLD-BACK",0),L.holdBack=ve.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{var xe=new b.AttrList(ne);L.partTarget=xe.decimalFloatingPoint("PART-TARGET");break}case"PART":{var Oe=L.partList;Oe||(Oe=L.partList=[]);var Ue=F>0?Oe[Oe.length-1]:void 0,je=F++,Ye=new R.Part(new b.AttrList(ne),H,s,je,Ue);Oe.push(Ye),H.duration+=Ye.duration;break}case"PRELOAD-HINT":{var me=new b.AttrList(ne);L.preloadHint=me;break}case"RENDITION-REPORT":{var nt=new b.AttrList(ne);L.renditionReports=L.renditionReports||[],L.renditionReports.push(nt);break}default:a.logger.warn("line parsed but not handled: "+Y);break}}}z&&!z.relurl?(S.pop(),K-=z.duration,L.partList&&(L.fragmentHint=z)):L.partList&&(n(H,z),H.cc=W,L.fragmentHint=H);var Ge=S.length,we=S[0],Ve=S[Ge-1];if(K+=L.skippedSegments*L.targetduration,K>0&&Ge&&Ve){L.averagetargetduration=K/Ge;var Ke=Ve.sn;L.endSN=Ke!=="initSegment"?Ke:0,we&&(L.startCC=we.cc,we.initSegment||L.fragments.every(function(Qe){return Qe.relurl&&e(Qe.relurl)})&&(a.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),H=new R.Fragment(u,s),H.relurl=Ve.relurl,H.level=l,H.sn="initSegment",we.initSegment=H,L.needSidxRanges=!0))}else L.endSN=0,L.startCC=0;return L.fragmentHint&&(K+=L.fragmentHint.duration),L.totalduration=K,L.endCC=W,$>0&&o(S,$),L},g}();function p(g,c){["video","audio","text"].forEach(function(d){var s=g.filter(function(u){return Object(y.isCodecType)(u,d)});if(s.length){var l=s.filter(function(u){return u.lastIndexOf("avc1",0)===0||u.lastIndexOf("mp4a",0)===0});c[d+"Codec"]=l.length>0?l[0]:s[0],g=g.filter(function(u){return s.indexOf(u)===-1})}}),c.unknownCodecs=g}function m(g,c,d){var s=c[d];s&&(g[d]=s)}function o(g,c){for(var d=g[c],s=c;s--;){var l=g[s];if(!l)return;l.programDateTime=d.programDateTime-l.duration*1e3,d=l}}function n(g,c){g.rawProgramDateTime?g.programDateTime=Date.parse(g.rawProgramDateTime):c!=null&&c.programDateTime&&(g.programDateTime=c.endProgramDateTime),Object(M.isFiniteNumber)(g.programDateTime)||(g.programDateTime=null,g.rawProgramDateTime=null)}function r(g,c,d,s){g.relurl=c.URI,c.BYTERANGE&&g.setByteRange(c.BYTERANGE),g.level=d,g.sn="initSegment",s&&(g.levelkey=s),g.initSegment=null}},"./src/loader/playlist-loader.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/events.ts"),T=x("./src/errors.ts"),R=x("./src/utils/logger.ts"),O=x("./src/utils/mp4-tools.ts"),I=x("./src/loader/m3u8-parser.ts"),b=x("./src/types/loader.ts"),a=x("./src/utils/attr-list.ts");function y(f){var v=f.type;switch(v){case b.PlaylistContextType.AUDIO_TRACK:return b.PlaylistLevelType.AUDIO;case b.PlaylistContextType.SUBTITLE_TRACK:return b.PlaylistLevelType.SUBTITLE;default:return b.PlaylistLevelType.MAIN}}function A(f,v){var t=f.url;return(t===void 0||t.indexOf("data:")===0)&&(t=v.url),t}var h=function(){function f(t){this.hls=void 0,this.loaders=Object.create(null),this.hls=t,this.registerListeners()}var v=f.prototype;return v.startLoad=function(e){},v.stopLoad=function(){this.destroyInternalLoaders()},v.registerListeners=function(){var e=this.hls;e.on(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.on(C.Events.LEVEL_LOADING,this.onLevelLoading,this),e.on(C.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(C.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},v.unregisterListeners=function(){var e=this.hls;e.off(C.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.off(C.Events.LEVEL_LOADING,this.onLevelLoading,this),e.off(C.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(C.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},v.createInternalLoader=function(e){var i=this.hls.config,p=i.pLoader,m=i.loader,o=p||m,n=new o(i);return e.loader=n,this.loaders[e.type]=n,n},v.getInternalLoader=function(e){return this.loaders[e.type]},v.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},v.destroyInternalLoaders=function(){for(var e in this.loaders){var i=this.loaders[e];i&&i.destroy(),this.resetInternalLoader(e)}},v.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},v.onManifestLoading=function(e,i){var p=i.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:b.PlaylistContextType.MANIFEST,url:p,deliveryDirectives:null})},v.onLevelLoading=function(e,i){var p=i.id,m=i.level,o=i.url,n=i.deliveryDirectives;this.load({id:p,groupId:null,level:m,responseType:"text",type:b.PlaylistContextType.LEVEL,url:o,deliveryDirectives:n})},v.onAudioTrackLoading=function(e,i){var p=i.id,m=i.groupId,o=i.url,n=i.deliveryDirectives;this.load({id:p,groupId:m,level:null,responseType:"text",type:b.PlaylistContextType.AUDIO_TRACK,url:o,deliveryDirectives:n})},v.onSubtitleTrackLoading=function(e,i){var p=i.id,m=i.groupId,o=i.url,n=i.deliveryDirectives;this.load({id:p,groupId:m,level:null,responseType:"text",type:b.PlaylistContextType.SUBTITLE_TRACK,url:o,deliveryDirectives:n})},v.load=function(e){var i,p=this.hls.config,m=this.getInternalLoader(e);if(m){var o=m.context;if(o&&o.url===e.url){R.logger.trace("[playlist-loader]: playlist request ongoing");return}R.logger.log("[playlist-loader]: aborting previous loader for type: "+e.type),m.abort()}var n,r,g,c;switch(e.type){case b.PlaylistContextType.MANIFEST:n=p.manifestLoadingMaxRetry,r=p.manifestLoadingTimeOut,g=p.manifestLoadingRetryDelay,c=p.manifestLoadingMaxRetryTimeout;break;case b.PlaylistContextType.LEVEL:case b.PlaylistContextType.AUDIO_TRACK:case b.PlaylistContextType.SUBTITLE_TRACK:n=0,r=p.levelLoadingTimeOut;break;default:n=p.levelLoadingMaxRetry,r=p.levelLoadingTimeOut,g=p.levelLoadingRetryDelay,c=p.levelLoadingMaxRetryTimeout;break}if(m=this.createInternalLoader(e),(i=e.deliveryDirectives)!==null&&i!==void 0&&i.part){var d;if(e.type===b.PlaylistContextType.LEVEL&&e.level!==null?d=this.hls.levels[e.level].details:e.type===b.PlaylistContextType.AUDIO_TRACK&&e.id!==null?d=this.hls.audioTracks[e.id].details:e.type===b.PlaylistContextType.SUBTITLE_TRACK&&e.id!==null&&(d=this.hls.subtitleTracks[e.id].details),d){var s=d.partTarget,l=d.targetduration;s&&l&&(r=Math.min(Math.max(s*3,l*.8)*1e3,r))}}var u={timeout:r,maxRetry:n,retryDelay:g,maxRetryDelay:c,highWaterMark:0},E={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};m.load(e,u,E)},v.loadsuccess=function(e,i,p,m){if(m===void 0&&(m=null),p.isSidxRequest){this.handleSidxRequest(e,p),this.handlePlaylistLoaded(e,i,p,m);return}this.resetInternalLoader(p.type);var o=e.data;if(o.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(e,p,"no EXTM3U delimiter",m);return}i.parsing.start=performance.now(),o.indexOf("#EXTINF:")>0||o.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(e,i,p,m):this.handleMasterPlaylist(e,i,p,m)},v.loaderror=function(e,i,p){p===void 0&&(p=null),this.handleNetworkError(i,p,!1,e)},v.loadtimeout=function(e,i,p){p===void 0&&(p=null),this.handleNetworkError(i,p,!0)},v.handleMasterPlaylist=function(e,i,p,m){var o=this.hls,n=e.data,r=A(e,p),g=I.default.parseMasterPlaylist(n,r),c=g.levels,d=g.sessionData;if(!c.length){this.handleManifestParsingError(e,p,"no level found in manifest",m);return}var s=c.map(function(k){return{id:k.attrs.AUDIO,audioCodec:k.audioCodec}}),l=c.map(function(k){return{id:k.attrs.SUBTITLES,textCodec:k.textCodec}}),u=I.default.parseMasterPlaylistMedia(n,r,"AUDIO",s),E=I.default.parseMasterPlaylistMedia(n,r,"SUBTITLES",l),L=I.default.parseMasterPlaylistMedia(n,r,"CLOSED-CAPTIONS");if(u.length){var S=u.some(function(k){return!k.url});!S&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(R.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),u.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new a.AttrList({}),bitrate:0,url:""}))}o.trigger(C.Events.MANIFEST_LOADED,{levels:c,audioTracks:u,subtitles:E,captions:L,url:r,stats:i,networkDetails:m,sessionData:d})},v.handleTrackOrLevelPlaylist=function(e,i,p,m){var o=this.hls,n=p.id,r=p.level,g=p.type,c=A(e,p),d=Object(M.isFiniteNumber)(n)?n:0,s=Object(M.isFiniteNumber)(r)?r:d,l=y(p),u=I.default.parseLevelPlaylist(e.data,c,s,l,d);if(!u.fragments.length){o.trigger(C.Events.ERROR,{type:T.ErrorTypes.NETWORK_ERROR,details:T.ErrorDetails.LEVEL_EMPTY_ERROR,fatal:!1,url:c,reason:"no fragments found in level",level:typeof p.level=="number"?p.level:void 0});return}if(g===b.PlaylistContextType.MANIFEST){var E={attrs:new a.AttrList({}),bitrate:0,details:u,name:"",url:c};o.trigger(C.Events.MANIFEST_LOADED,{levels:[E],audioTracks:[],url:c,stats:i,networkDetails:m,sessionData:null})}if(i.parsing.end=performance.now(),u.needSidxRanges){var L,S=(L=u.fragments[0].initSegment)===null||L===void 0?void 0:L.url;this.load({url:S,isSidxRequest:!0,type:g,level:r,levelDetails:u,id:n,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null});return}p.levelDetails=u,this.handlePlaylistLoaded(e,i,p,m)},v.handleSidxRequest=function(e,i){var p=new Uint8Array(e.data),m=Object(O.findBox)(p,["sidx"])[0];if(!!m){var o=Object(O.parseSegmentIndex)(m);if(!!o){var n=o.references,r=i.levelDetails;n.forEach(function(g,c){var d=g.info,s=r.fragments[c];if(s.byteRange.length===0&&s.setByteRange(String(1+d.end-d.start)+"@"+String(d.start)),s.initSegment){var l=Object(O.findBox)(p,["moov"])[0],u=l?l.length:null;s.initSegment.setByteRange(String(u)+"@0")}})}}},v.handleManifestParsingError=function(e,i,p,m){this.hls.trigger(C.Events.ERROR,{type:T.ErrorTypes.NETWORK_ERROR,details:T.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:i.type===b.PlaylistContextType.MANIFEST,url:e.url,reason:p,response:e,context:i,networkDetails:m})},v.handleNetworkError=function(e,i,p,m){p===void 0&&(p=!1),R.logger.warn("[playlist-loader]: A network "+(p?"timeout":"error")+" occurred while loading "+e.type+" level: "+e.level+" id: "+e.id+' group-id: "'+e.groupId+'"');var o=T.ErrorDetails.UNKNOWN,n=!1,r=this.getInternalLoader(e);switch(e.type){case b.PlaylistContextType.MANIFEST:o=p?T.ErrorDetails.MANIFEST_LOAD_TIMEOUT:T.ErrorDetails.MANIFEST_LOAD_ERROR,n=!0;break;case b.PlaylistContextType.LEVEL:o=p?T.ErrorDetails.LEVEL_LOAD_TIMEOUT:T.ErrorDetails.LEVEL_LOAD_ERROR,n=!1;break;case b.PlaylistContextType.AUDIO_TRACK:o=p?T.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:T.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,n=!1;break;case b.PlaylistContextType.SUBTITLE_TRACK:o=p?T.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:T.ErrorDetails.SUBTITLE_LOAD_ERROR,n=!1;break}r&&this.resetInternalLoader(e.type);var g={type:T.ErrorTypes.NETWORK_ERROR,details:o,fatal:n,url:e.url,loader:r,context:e,networkDetails:i};m&&(g.response=m),this.hls.trigger(C.Events.ERROR,g)},v.handlePlaylistLoaded=function(e,i,p,m){var o=p.type,n=p.level,r=p.id,g=p.groupId,c=p.loader,d=p.levelDetails,s=p.deliveryDirectives;if(!(d!=null&&d.targetduration)){this.handleManifestParsingError(e,p,"invalid target duration",m);return}if(!!c)switch(d.live&&(c.getCacheAge&&(d.ageHeader=c.getCacheAge()||0),(!c.getCacheAge||isNaN(d.ageHeader))&&(d.ageHeader=0)),o){case b.PlaylistContextType.MANIFEST:case b.PlaylistContextType.LEVEL:this.hls.trigger(C.Events.LEVEL_LOADED,{details:d,level:n||0,id:r||0,stats:i,networkDetails:m,deliveryDirectives:s});break;case b.PlaylistContextType.AUDIO_TRACK:this.hls.trigger(C.Events.AUDIO_TRACK_LOADED,{details:d,id:r||0,groupId:g||"",stats:i,networkDetails:m,deliveryDirectives:s});break;case b.PlaylistContextType.SUBTITLE_TRACK:this.hls.trigger(C.Events.SUBTITLE_TRACK_LOADED,{details:d,id:r||0,groupId:g||"",stats:i,networkDetails:m,deliveryDirectives:s});break}},f}();B.default=h},"./src/polyfills/number.ts":function(X,B,x){x.r(B),x.d(B,"isFiniteNumber",function(){return M}),x.d(B,"MAX_SAFE_INTEGER",function(){return C});var M=Number.isFinite||function(T){return typeof T=="number"&&isFinite(T)},C=Number.MAX_SAFE_INTEGER||9007199254740991},"./src/remux/aac-helper.ts":function(X,B,x){x.r(B);var M=function(){function C(){}return C.getSilentFrame=function(R,O){switch(R){case"mp4a.40.2":if(O===1)return new Uint8Array([0,200,0,128,35,128]);if(O===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(O===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(O===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(O===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(O===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(O===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(O===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(O===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}},C}();B.default=M},"./src/remux/mp4-generator.ts":function(X,B,x){x.r(B);var M=Math.pow(2,32)-1,C=function(){function T(){}return T.init=function(){T.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var O;for(O in T.types)T.types.hasOwnProperty(O)&&(T.types[O]=[O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2),O.charCodeAt(3)]);var I=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),b=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);T.HDLR_TYPES={video:I,audio:b};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),y=new Uint8Array([0,0,0,0,0,0,0,0]);T.STTS=T.STSC=T.STCO=y,T.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),T.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),T.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),T.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var A=new Uint8Array([105,115,111,109]),h=new Uint8Array([97,118,99,49]),f=new Uint8Array([0,0,0,1]);T.FTYP=T.box(T.types.ftyp,A,f,A,h),T.DINF=T.box(T.types.dinf,T.box(T.types.dref,a))},T.box=function(O){for(var I=8,b=arguments.length,a=new Array(b>1?b-1:0),y=1;y<b;y++)a[y-1]=arguments[y];for(var A=a.length,h=A;A--;)I+=a[A].byteLength;var f=new Uint8Array(I);for(f[0]=I>>24&255,f[1]=I>>16&255,f[2]=I>>8&255,f[3]=I&255,f.set(O,4),A=0,I=8;A<h;A++)f.set(a[A],I),I+=a[A].byteLength;return f},T.hdlr=function(O){return T.box(T.types.hdlr,T.HDLR_TYPES[O])},T.mdat=function(O){return T.box(T.types.mdat,O)},T.mdhd=function(O,I){I*=O;var b=Math.floor(I/(M+1)),a=Math.floor(I%(M+1));return T.box(T.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,O>>24&255,O>>16&255,O>>8&255,O&255,b>>24,b>>16&255,b>>8&255,b&255,a>>24,a>>16&255,a>>8&255,a&255,85,196,0,0]))},T.mdia=function(O){return T.box(T.types.mdia,T.mdhd(O.timescale,O.duration),T.hdlr(O.type),T.minf(O))},T.mfhd=function(O){return T.box(T.types.mfhd,new Uint8Array([0,0,0,0,O>>24,O>>16&255,O>>8&255,O&255]))},T.minf=function(O){return O.type==="audio"?T.box(T.types.minf,T.box(T.types.smhd,T.SMHD),T.DINF,T.stbl(O)):T.box(T.types.minf,T.box(T.types.vmhd,T.VMHD),T.DINF,T.stbl(O))},T.moof=function(O,I,b){return T.box(T.types.moof,T.mfhd(O),T.traf(b,I))},T.moov=function(O){for(var I=O.length,b=[];I--;)b[I]=T.trak(O[I]);return T.box.apply(null,[T.types.moov,T.mvhd(O[0].timescale,O[0].duration)].concat(b).concat(T.mvex(O)))},T.mvex=function(O){for(var I=O.length,b=[];I--;)b[I]=T.trex(O[I]);return T.box.apply(null,[T.types.mvex].concat(b))},T.mvhd=function(O,I){I*=O;var b=Math.floor(I/(M+1)),a=Math.floor(I%(M+1)),y=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,O>>24&255,O>>16&255,O>>8&255,O&255,b>>24,b>>16&255,b>>8&255,b&255,a>>24,a>>16&255,a>>8&255,a&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return T.box(T.types.mvhd,y)},T.sdtp=function(O){var I=O.samples||[],b=new Uint8Array(4+I.length),a,y;for(a=0;a<I.length;a++)y=I[a].flags,b[a+4]=y.dependsOn<<4|y.isDependedOn<<2|y.hasRedundancy;return T.box(T.types.sdtp,b)},T.stbl=function(O){return T.box(T.types.stbl,T.stsd(O),T.box(T.types.stts,T.STTS),T.box(T.types.stsc,T.STSC),T.box(T.types.stsz,T.STSZ),T.box(T.types.stco,T.STCO))},T.avc1=function(O){var I=[],b=[],a,y,A;for(a=0;a<O.sps.length;a++)y=O.sps[a],A=y.byteLength,I.push(A>>>8&255),I.push(A&255),I=I.concat(Array.prototype.slice.call(y));for(a=0;a<O.pps.length;a++)y=O.pps[a],A=y.byteLength,b.push(A>>>8&255),b.push(A&255),b=b.concat(Array.prototype.slice.call(y));var h=T.box(T.types.avcC,new Uint8Array([1,I[3],I[4],I[5],255,224|O.sps.length].concat(I).concat([O.pps.length]).concat(b))),f=O.width,v=O.height,t=O.pixelRatio[0],e=O.pixelRatio[1];return T.box(T.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,f>>8&255,f&255,v>>8&255,v&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),h,T.box(T.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),T.box(T.types.pasp,new Uint8Array([t>>24,t>>16&255,t>>8&255,t&255,e>>24,e>>16&255,e>>8&255,e&255])))},T.esds=function(O){var I=O.config.length;return new Uint8Array([0,0,0,0,3,23+I,0,1,0,4,15+I,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([I]).concat(O.config).concat([6,1,2]))},T.mp4a=function(O){var I=O.samplerate;return T.box(T.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,O.channelCount,0,16,0,0,0,0,I>>8&255,I&255,0,0]),T.box(T.types.esds,T.esds(O)))},T.mp3=function(O){var I=O.samplerate;return T.box(T.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,O.channelCount,0,16,0,0,0,0,I>>8&255,I&255,0,0]))},T.stsd=function(O){return O.type==="audio"?O.segmentCodec==="mp3"&&O.codec==="mp3"?T.box(T.types.stsd,T.STSD,T.mp3(O)):T.box(T.types.stsd,T.STSD,T.mp4a(O)):T.box(T.types.stsd,T.STSD,T.avc1(O))},T.tkhd=function(O){var I=O.id,b=O.duration*O.timescale,a=O.width,y=O.height,A=Math.floor(b/(M+1)),h=Math.floor(b%(M+1));return T.box(T.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,I>>24&255,I>>16&255,I>>8&255,I&255,0,0,0,0,A>>24,A>>16&255,A>>8&255,A&255,h>>24,h>>16&255,h>>8&255,h&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,a&255,0,0,y>>8&255,y&255,0,0]))},T.traf=function(O,I){var b=T.sdtp(O),a=O.id,y=Math.floor(I/(M+1)),A=Math.floor(I%(M+1));return T.box(T.types.traf,T.box(T.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,a&255])),T.box(T.types.tfdt,new Uint8Array([1,0,0,0,y>>24,y>>16&255,y>>8&255,y&255,A>>24,A>>16&255,A>>8&255,A&255])),T.trun(O,b.length+16+20+8+16+8+8),b)},T.trak=function(O){return O.duration=O.duration||4294967295,T.box(T.types.trak,T.tkhd(O),T.mdia(O))},T.trex=function(O){var I=O.id;return T.box(T.types.trex,new Uint8Array([0,0,0,0,I>>24,I>>16&255,I>>8&255,I&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},T.trun=function(O,I){var b=O.samples||[],a=b.length,y=12+16*a,A=new Uint8Array(y),h,f,v,t,e,i;for(I+=8+y,A.set([O.type==="video"?1:0,0,15,1,a>>>24&255,a>>>16&255,a>>>8&255,a&255,I>>>24&255,I>>>16&255,I>>>8&255,I&255],0),h=0;h<a;h++)f=b[h],v=f.duration,t=f.size,e=f.flags,i=f.cts,A.set([v>>>24&255,v>>>16&255,v>>>8&255,v&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255,e.isLeading<<2|e.dependsOn,e.isDependedOn<<6|e.hasRedundancy<<4|e.paddingValue<<1|e.isNonSync,e.degradPrio&240<<8,e.degradPrio&15,i>>>24&255,i>>>16&255,i>>>8&255,i&255],12+16*h);return T.box(T.types.trun,A)},T.initSegment=function(O){T.types||T.init();var I=T.moov(O),b=new Uint8Array(T.FTYP.byteLength+I.byteLength);return b.set(T.FTYP),b.set(I,T.FTYP.byteLength),b},T}();C.types=void 0,C.HDLR_TYPES=void 0,C.STTS=void 0,C.STSC=void 0,C.STCO=void 0,C.STSZ=void 0,C.VMHD=void 0,C.SMHD=void 0,C.STSD=void 0,C.FTYP=void 0,C.DINF=void 0,B.default=C},"./src/remux/mp4-remuxer.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return e}),x.d(B,"normalizePts",function(){return i}),x.d(B,"flushTextTrackMetadataCueSamples",function(){return m}),x.d(B,"flushTextTrackUserdataCueSamples",function(){return o});var M=x("./src/polyfills/number.ts"),C=x("./src/remux/aac-helper.ts"),T=x("./src/remux/mp4-generator.ts"),R=x("./src/events.ts"),O=x("./src/errors.ts"),I=x("./src/utils/logger.ts"),b=x("./src/types/loader.ts"),a=x("./src/utils/timescale-conversion.ts");function y(){return y=Object.assign?Object.assign.bind():function(g){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(g[s]=d[s])}return g},y.apply(this,arguments)}var A=10*1e3,h=1024,f=1152,v=null,t=null,e=function(){function g(d,s,l,u){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=d,this.config=s,this.typeSupported=l,this.ISGenerated=!1,v===null){var E=navigator.userAgent||"",L=E.match(/Chrome\/(\d+)/i);v=L?parseInt(L[1]):0}if(t===null){var S=navigator.userAgent.match(/Safari\/(\d+)/i);t=S?parseInt(S[1]):0}}var c=g.prototype;return c.destroy=function(){},c.resetTimeStamp=function(s){I.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=s},c.resetNextTimestamp=function(){I.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},c.resetInitSegment=function(){I.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},c.getVideoStartPts=function(s){var l=!1,u=s.reduce(function(E,L){var S=L.pts-E;return S<-4294967296?(l=!0,i(E,L.pts)):S>0?E:L.pts},s[0].pts);return l&&I.logger.debug("PTS rollover detected"),u},c.remux=function(s,l,u,E,L,S,k,N){var F,K,W,z,H,Y,Q=L,Z=L,$=s.pid>-1,ee=l.pid>-1,ie=l.samples.length,ae=s.samples.length>0,q=k&&ie>0||ie>1,oe=(!$||ae)&&(!ee||q)||this.ISGenerated||k;if(oe){this.ISGenerated||(W=this.generateIS(s,l,L));var ne=this.isVideoContiguous,re=-1,ue;if(q&&(re=p(l.samples),!ne&&this.config.forceKeyFrameOnDiscontinuity))if(Y=!0,re>0){I.logger.warn("[mp4-remuxer]: Dropped "+re+" out of "+ie+" video samples due to a missing keyframe");var le=this.getVideoStartPts(l.samples);l.samples=l.samples.slice(re),l.dropped+=re,Z+=(l.samples[0].pts-le)/l.inputTimeScale,ue=Z}else re===-1&&(I.logger.warn("[mp4-remuxer]: No keyframe found out of "+ie+" video samples"),Y=!1);if(this.ISGenerated){if(ae&&q){var fe=this.getVideoStartPts(l.samples),ye=i(s.samples[0].pts,fe)-fe,pe=ye/l.inputTimeScale;Q+=Math.max(0,pe),Z+=Math.max(0,-pe)}if(ae){if(s.samplerate||(I.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),W=this.generateIS(s,l,L)),K=this.remuxAudio(s,Q,this.isAudioContiguous,S,ee||q||N===b.PlaylistLevelType.AUDIO?Z:void 0),q){var Te=K?K.endPTS-K.startPTS:0;l.inputTimeScale||(I.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),W=this.generateIS(s,l,L)),F=this.remuxVideo(l,Z,ne,Te)}}else q&&(F=this.remuxVideo(l,Z,ne,0));F&&(F.firstKeyFrame=re,F.independent=re!==-1,F.firstKeyFramePTS=ue)}}return this.ISGenerated&&(u.samples.length&&(H=m(u,L,this._initPTS,this._initDTS)),E.samples.length&&(z=o(E,L,this._initPTS))),{audio:K,video:F,initSegment:W,independent:Y,text:z,id3:H}},c.generateIS=function(s,l,u){var E=s.samples,L=l.samples,S=this.typeSupported,k={},N=!Object(M.isFiniteNumber)(this._initPTS),F="audio/mp4",K,W,z;if(N&&(K=W=1/0),s.config&&E.length){switch(s.timescale=s.samplerate,s.segmentCodec){case"mp3":S.mpeg?(F="audio/mpeg",s.codec=""):S.mp3&&(s.codec="mp3");break}k.audio={id:"audio",container:F,codec:s.codec,initSegment:s.segmentCodec==="mp3"&&S.mpeg?new Uint8Array(0):T.default.initSegment([s]),metadata:{channelCount:s.channelCount}},N&&(z=s.inputTimeScale,K=W=E[0].pts-Math.round(z*u))}if(l.sps&&l.pps&&L.length&&(l.timescale=l.inputTimeScale,k.video={id:"main",container:"video/mp4",codec:l.codec,initSegment:T.default.initSegment([l]),metadata:{width:l.width,height:l.height}},N)){z=l.inputTimeScale;var H=this.getVideoStartPts(L),Y=Math.round(z*u);W=Math.min(W,i(L[0].dts,H)-Y),K=Math.min(K,H-Y)}if(Object.keys(k).length)return this.ISGenerated=!0,N&&(this._initPTS=K,this._initDTS=W),{tracks:k,initPTS:K,timescale:z}},c.remuxVideo=function(s,l,u,E){var L=s.inputTimeScale,S=s.samples,k=[],N=S.length,F=this._initPTS,K=this.nextAvcDts,W=8,z=this.videoSampleDuration,H,Y,Q=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY,$=!1;if(!u||K===null){var ee=l*L,ie=S[0].pts-i(S[0].dts,S[0].pts);K=ee-ie}for(var ae=0;ae<N;ae++){var q=S[ae];q.pts=i(q.pts-F,K),q.dts=i(q.dts-F,K),q.dts<S[ae>0?ae-1:ae].dts&&($=!0)}$&&S.sort(function(it,ct){var It=it.dts-ct.dts,Dt=it.pts-ct.pts;return It||Dt}),H=S[0].dts,Y=S[S.length-1].dts;var oe=Y-H,ne=oe?Math.round(oe/(N-1)):z||s.inputTimeScale/30;if(u){var re=H-K,ue=re>ne,le=re<-1;if(ue||le){ue?I.logger.warn("AVC: "+Object(a.toMsFromMpegTsClock)(re,!0)+" ms ("+re+"dts) hole between fragments detected, filling it"):I.logger.warn("AVC: "+Object(a.toMsFromMpegTsClock)(-re,!0)+" ms ("+re+"dts) overlapping between fragments detected"),H=K;var fe=S[0].pts-re;S[0].dts=H,S[0].pts=fe,I.logger.log("Video: First PTS/DTS adjusted: "+Object(a.toMsFromMpegTsClock)(fe,!0)+"/"+Object(a.toMsFromMpegTsClock)(H,!0)+", delta: "+Object(a.toMsFromMpegTsClock)(re,!0)+" ms")}}H=Math.max(0,H);for(var ye=0,pe=0,Te=0;Te<N;Te++){for(var Ee=S[Te],Ae=Ee.units,Ce=Ae.length,Le=0,Re=0;Re<Ce;Re++)Le+=Ae[Re].data.length;pe+=Le,ye+=Ce,Ee.length=Le,Ee.dts=Math.max(Ee.dts,H),Q=Math.min(Ee.pts,Q),Z=Math.max(Ee.pts,Z)}Y=S[N-1].dts;var Ie=pe+4*ye+8,Se;try{Se=new Uint8Array(Ie)}catch{this.observer.emit(R.Events.ERROR,R.Events.ERROR,{type:O.ErrorTypes.MUX_ERROR,details:O.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Ie,reason:"fail allocating video mdat "+Ie});return}var ke=new DataView(Se.buffer);ke.setUint32(0,Ie),Se.set(T.default.types.mdat,4);for(var De=!1,Fe=Number.POSITIVE_INFINITY,ge=Number.POSITIVE_INFINITY,be=Number.NEGATIVE_INFINITY,Pe=Number.NEGATIVE_INFINITY,ve=0;ve<N;ve++){for(var xe=S[ve],Oe=xe.units,Ue=0,je=0,Ye=Oe.length;je<Ye;je++){var me=Oe[je],nt=me.data,Ge=me.data.byteLength;ke.setUint32(W,Ge),W+=4,Se.set(nt,W),W+=Ge,Ue+=4+Ge}var we=void 0;if(ve<N-1)z=S[ve+1].dts-xe.dts,we=S[ve+1].pts-xe.pts;else{var Ve=this.config,Ke=ve>0?xe.dts-S[ve-1].dts:ne;if(we=ve>0?xe.pts-S[ve-1].pts:ne,Ve.stretchShortVideoTrack&&this.nextAudioPts!==null){var Qe=Math.floor(Ve.maxBufferHole*L),rt=(E?Q+E*L:this.nextAudioPts)-xe.pts;rt>Qe?(z=rt-Ke,z<0?z=Ke:De=!0,I.logger.log("[mp4-remuxer]: It is approximately "+rt/90+" ms to the next segment; using duration "+z/90+" ms for the last video frame.")):z=Ke}else z=Ke}var bt=Math.round(xe.pts-xe.dts);Fe=Math.min(Fe,z),be=Math.max(be,z),ge=Math.min(ge,we),Pe=Math.max(Pe,we),k.push(new n(xe.key,z,Ue,bt))}if(k.length){if(v){if(v<70){var lt=k[0].flags;lt.dependsOn=2,lt.isNonSync=0}}else if(t&&Pe-ge<be-Fe&&ne/be<.025&&k[0].cts===0){I.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");for(var at=H,Be=0,dt=k.length;Be<dt;Be++){var ut=at+k[Be].duration,xt=at+k[Be].cts;if(Be<dt-1){var Ct=ut+k[Be+1].cts;k[Be].duration=Ct-xt}else k[Be].duration=Be?k[Be-1].duration:ne;k[Be].cts=0,at=ut}}}console.assert(z!==null,"mp4SampleDuration must be computed"),z=De||!z?ne:z,this.nextAvcDts=K=Y+z,this.videoSampleDuration=z,this.isVideoContiguous=!0;var Tt=T.default.moof(s.sequenceNumber++,H,y({},s,{samples:k})),St="video",Lt={data1:Tt,data2:Se,startPTS:Q/L,endPTS:(Z+z)/L,startDTS:H/L,endDTS:K/L,type:St,hasAudio:!1,hasVideo:!0,nb:k.length,dropped:s.dropped};return s.samples=[],s.dropped=0,console.assert(Se.length,"MDAT length must not be zero"),Lt},c.remuxAudio=function(s,l,u,E,L){var S=s.inputTimeScale,k=s.samplerate?s.samplerate:S,N=S/k,F=s.segmentCodec==="aac"?h:f,K=F*N,W=this._initPTS,z=s.segmentCodec==="mp3"&&this.typeSupported.mpeg,H=[],Y=L!==void 0,Q=s.samples,Z=z?0:8,$=this.nextAudioPts||-1,ee=l*S;if(this.isAudioContiguous=u=u||Q.length&&$>0&&(E&&Math.abs(ee-$)<9e3||Math.abs(i(Q[0].pts-W,ee)-$)<20*K),Q.forEach(function(me){me.pts=i(me.pts-W,ee)}),!u||$<0){if(Q=Q.filter(function(me){return me.pts>=0}),!Q.length)return;L===0?$=0:E&&!Y?$=Math.max(0,ee):$=Q[0].pts}if(s.segmentCodec==="aac")for(var ie=this.config.maxAudioFramesDrift,ae=0,q=$;ae<Q.length;ae++){var oe=Q[ae],ne=oe.pts,re=ne-q,ue=Math.abs(1e3*re/S);if(re<=-ie*K&&Y)ae===0&&(I.logger.warn("Audio frame @ "+(ne/S).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*re/S)+" ms."),this.nextAudioPts=$=q=ne);else if(re>=ie*K&&ue<A&&Y){var le=Math.round(re/K);q=ne-le*K,q<0&&(le--,q+=K),ae===0&&(this.nextAudioPts=$=q),I.logger.warn("[mp4-remuxer]: Injecting "+le+" audio frame @ "+(q/S).toFixed(3)+"s due to "+Math.round(1e3*re/S)+" ms gap.");for(var fe=0;fe<le;fe++){var ye=Math.max(q,0),pe=C.default.getSilentFrame(s.manifestCodec||s.codec,s.channelCount);pe||(I.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),pe=oe.unit.subarray()),Q.splice(ae,0,{unit:pe,pts:ye}),q+=K,ae++}}oe.pts=q,q+=K}for(var Te=null,Ee=null,Ae,Ce=0,Le=Q.length;Le--;)Ce+=Q[Le].unit.byteLength;for(var Re=0,Ie=Q.length;Re<Ie;Re++){var Se=Q[Re],ke=Se.unit,De=Se.pts;if(Ee!==null){var Fe=H[Re-1];Fe.duration=Math.round((De-Ee)/N)}else if(u&&s.segmentCodec==="aac"&&(De=$),Te=De,Ce>0){Ce+=Z;try{Ae=new Uint8Array(Ce)}catch{this.observer.emit(R.Events.ERROR,R.Events.ERROR,{type:O.ErrorTypes.MUX_ERROR,details:O.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Ce,reason:"fail allocating audio mdat "+Ce});return}if(!z){var ge=new DataView(Ae.buffer);ge.setUint32(0,Ce),Ae.set(T.default.types.mdat,4)}}else return;Ae.set(ke,Z);var be=ke.byteLength;Z+=be,H.push(new n(!0,F,be,0)),Ee=De}var Pe=H.length;if(!!Pe){var ve=H[H.length-1];this.nextAudioPts=$=Ee+N*ve.duration;var xe=z?new Uint8Array(0):T.default.moof(s.sequenceNumber++,Te/N,y({},s,{samples:H}));s.samples=[];var Oe=Te/S,Ue=$/S,je="audio",Ye={data1:xe,data2:Ae,startPTS:Oe,endPTS:Ue,startDTS:Oe,endDTS:Ue,type:je,hasAudio:!0,hasVideo:!1,nb:Pe};return this.isAudioContiguous=!0,console.assert(Ae.length,"MDAT length must not be zero"),Ye}},c.remuxEmptyAudio=function(s,l,u,E){var L=s.inputTimeScale,S=s.samplerate?s.samplerate:L,k=L/S,N=this.nextAudioPts,F=(N!==null?N:E.startDTS*L)+this._initDTS,K=E.endDTS*L+this._initDTS,W=k*h,z=Math.ceil((K-F)/W),H=C.default.getSilentFrame(s.manifestCodec||s.codec,s.channelCount);if(I.logger.warn("[mp4-remuxer]: remux empty Audio"),!H){I.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}for(var Y=[],Q=0;Q<z;Q++){var Z=F+Q*W;Y.push({unit:H,pts:Z,dts:Z})}return s.samples=Y,this.remuxAudio(s,l,u,!1)},g}();function i(g,c){var d;if(c===null)return g;for(c<g?d=-8589934592:d=8589934592;Math.abs(g-c)>4294967296;)g+=d;return g}function p(g){for(var c=0;c<g.length;c++)if(g[c].key)return c;return-1}function m(g,c,d,s){var l=g.samples.length;if(!!l){for(var u=g.inputTimeScale,E=0;E<l;E++){var L=g.samples[E];L.pts=i(L.pts-d,c*u)/u,L.dts=i(L.dts-s,c*u)/u}var S=g.samples;return g.samples=[],{samples:S}}}function o(g,c,d){var s=g.samples.length;if(!!s){for(var l=g.inputTimeScale,u=0;u<s;u++){var E=g.samples[u];E.pts=i(E.pts-d,c*l)/l}g.samples.sort(function(S,k){return S.pts-k.pts});var L=g.samples;return g.samples=[],{samples:L}}}var n=function(c,d,s,l){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=d,this.size=s,this.cts=l,this.flags=new r(c)},r=function(c){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=c?2:1,this.isNonSync=c?0:1}},"./src/remux/passthrough-remuxer.ts":function(X,B,x){x.r(B);var M=x("./src/polyfills/number.ts"),C=x("./src/remux/mp4-remuxer.ts"),T=x("./src/utils/mp4-tools.ts"),R=x("./src/loader/fragment.ts"),O=x("./src/utils/logger.ts"),I=function(){function a(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndTime=null}var y=a.prototype;return y.destroy=function(){},y.resetTimeStamp=function(h){this.initPTS=h,this.lastEndTime=null},y.resetNextTimestamp=function(){this.lastEndTime=null},y.resetInitSegment=function(h,f,v){this.audioCodec=f,this.videoCodec=v,this.generateInitSegment(h),this.emitInitSegment=!0},y.generateInitSegment=function(h){var f=this.audioCodec,v=this.videoCodec;if(!h||!h.byteLength){this.initTracks=void 0,this.initData=void 0;return}var t=this.initData=Object(T.parseInitSegment)(h);f||(f=b(t.audio,R.ElementaryStreamTypes.AUDIO)),v||(v=b(t.video,R.ElementaryStreamTypes.VIDEO));var e={};t.audio&&t.video?e.audiovideo={container:"video/mp4",codec:f+","+v,initSegment:h,id:"main"}:t.audio?e.audio={container:"audio/mp4",codec:f,initSegment:h,id:"audio"}:t.video?e.video={container:"video/mp4",codec:v,initSegment:h,id:"main"}:O.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=e},y.remux=function(h,f,v,t,e){var i,p=this.initPTS,m=this.lastEndTime,o={audio:void 0,video:void 0,text:t,id3:v,initSegment:void 0};Object(M.isFiniteNumber)(m)||(m=this.lastEndTime=e||0);var n=f.samples;if(!n||!n.length)return o;var r={initPTS:void 0,timescale:1},g=this.initData;if((!g||!g.length)&&(this.generateInitSegment(n),g=this.initData),!g||!g.length)return O.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),o;this.emitInitSegment&&(r.tracks=this.initTracks,this.emitInitSegment=!1);var c=Object(T.getStartDTS)(g,n);Object(M.isFiniteNumber)(p)||(this.initPTS=r.initPTS=p=c-e);var d=Object(T.getDuration)(n,g),s=h?c-p:m,l=s+d;Object(T.offsetStartDTS)(g,n,p),d>0?this.lastEndTime=l:(O.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var u=!!g.audio,E=!!g.video,L="";u&&(L+="audio"),E&&(L+="video");var S={data1:n,startPTS:s,startDTS:s,endPTS:l,endDTS:l,type:L,hasAudio:u,hasVideo:E,nb:1,dropped:0};o.audio=S.type==="audio"?S:void 0,o.video=S.type!=="audio"?S:void 0,o.initSegment=r;var k=(i=this.initPTS)!=null?i:0;return o.id3=Object(C.flushTextTrackMetadataCueSamples)(v,e,k,k),t.samples.length&&(o.text=Object(C.flushTextTrackUserdataCueSamples)(t,e,k)),o},a}();function b(a,y){var A=a==null?void 0:a.codec;return A&&A.length>4?A:A==="hvc1"||A==="hev1"?"hvc1.1.c.L120.90":A==="av01"?"av01.0.04M.08":A==="avc1"||y===R.ElementaryStreamTypes.VIDEO?"avc1.42e01e":"mp4a.40.5"}B.default=I},"./src/task-loop.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return M});var M=function(){function C(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var T=C.prototype;return T.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},T.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},T.onHandlerDestroyed=function(){},T.hasInterval=function(){return!!this._tickInterval},T.hasNextTick=function(){return!!this._tickTimer},T.setInterval=function(O){return this._tickInterval?!1:(this._tickInterval=self.setInterval(this._boundTick,O),!0)},T.clearInterval=function(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1},T.clearNextTick=function(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1},T.tick=function(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},T.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},T.doTick=function(){},C}()},"./src/types/cmcd.ts":function(X,B,x){x.r(B),x.d(B,"CMCDVersion",function(){return M}),x.d(B,"CMCDObjectType",function(){return C}),x.d(B,"CMCDStreamingFormat",function(){return T}),x.d(B,"CMCDStreamType",function(){return R});var M=1,C;(function(O){O.MANIFEST="m",O.AUDIO="a",O.VIDEO="v",O.MUXED="av",O.INIT="i",O.CAPTION="c",O.TIMED_TEXT="tt",O.KEY="k",O.OTHER="o"})(C||(C={}));var T;(function(O){O.DASH="d",O.HLS="h",O.SMOOTH="s",O.OTHER="o"})(T||(T={}));var R;(function(O){O.VOD="v",O.LIVE="l"})(R||(R={}))},"./src/types/demuxer.ts":function(X,B,x){x.r(B),x.d(B,"MetadataSchema",function(){return M});var M;(function(C){C.audioId3="org.id3",C.dateRange="com.apple.quicktime.HLS",C.emsg="https://aomedia.org/emsg/ID3"})(M||(M={}))},"./src/types/level.ts":function(X,B,x){x.r(B),x.d(B,"HlsSkip",function(){return T}),x.d(B,"getSkipValue",function(){return R}),x.d(B,"HlsUrlParameters",function(){return O}),x.d(B,"Level",function(){return I});function M(b,a){for(var y=0;y<a.length;y++){var A=a[y];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(b,A.key,A)}}function C(b,a,y){return a&&M(b.prototype,a),y&&M(b,y),Object.defineProperty(b,"prototype",{writable:!1}),b}var T;(function(b){b.No="",b.Yes="YES",b.v2="v2"})(T||(T={}));function R(b,a){var y=b.canSkipUntil,A=b.canSkipDateRanges,h=b.endSN,f=a!==void 0?a-h:0;return y&&f<y?A?T.v2:T.Yes:T.No}var O=function(){function b(y,A,h){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=y,this.part=A,this.skip=h}var a=b.prototype;return a.addDirectives=function(A){var h=new self.URL(A);return this.msn!==void 0&&h.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&h.searchParams.set("_HLS_part",this.part.toString()),this.skip&&h.searchParams.set("_HLS_skip",this.skip),h.toString()},b}(),I=function(){function b(a){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[a.url],this.attrs=a.attrs,this.bitrate=a.bitrate,a.details&&(this.details=a.details),this.id=a.id||0,this.name=a.name,this.width=a.width||0,this.height=a.height||0,this.audioCodec=a.audioCodec,this.videoCodec=a.videoCodec,this.unknownCodecs=a.unknownCodecs,this.codecSet=[a.videoCodec,a.audioCodec].filter(function(y){return y}).join(",").replace(/\.[^.,]+/g,"")}return C(b,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(y){var A=y%this.url.length;this._urlId!==A&&(this.details=void 0,this._urlId=A)}}]),b}()},"./src/types/loader.ts":function(X,B,x){x.r(B),x.d(B,"PlaylistContextType",function(){return M}),x.d(B,"PlaylistLevelType",function(){return C});var M;(function(T){T.MANIFEST="manifest",T.LEVEL="level",T.AUDIO_TRACK="audioTrack",T.SUBTITLE_TRACK="subtitleTrack"})(M||(M={}));var C;(function(T){T.MAIN="main",T.AUDIO="audio",T.SUBTITLE="subtitle"})(C||(C={}))},"./src/types/transmuxer.ts":function(X,B,x){x.r(B),x.d(B,"ChunkMetadata",function(){return M});var M=function(R,O,I,b,a,y){b===void 0&&(b=0),a===void 0&&(a=-1),y===void 0&&(y=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=C(),this.buffering={audio:C(),video:C(),audiovideo:C()},this.level=R,this.sn=O,this.id=I,this.size=b,this.part=a,this.partial=y};function C(){return{start:0,executeStart:0,executeEnd:0,end:0}}},"./src/utils/attr-list.ts":function(X,B,x){x.r(B),x.d(B,"AttrList",function(){return T});var M=/^(\d+)x(\d+)$/,C=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,T=function(){function R(I){typeof I=="string"&&(I=R.parseAttrList(I));for(var b in I)I.hasOwnProperty(b)&&(this[b]=I[b])}var O=R.prototype;return O.decimalInteger=function(b){var a=parseInt(this[b],10);return a>Number.MAX_SAFE_INTEGER?1/0:a},O.hexadecimalInteger=function(b){if(this[b]){var a=(this[b]||"0x").slice(2);a=(a.length&1?"0":"")+a;for(var y=new Uint8Array(a.length/2),A=0;A<a.length/2;A++)y[A]=parseInt(a.slice(A*2,A*2+2),16);return y}else return null},O.hexadecimalIntegerAsNumber=function(b){var a=parseInt(this[b],16);return a>Number.MAX_SAFE_INTEGER?1/0:a},O.decimalFloatingPoint=function(b){return parseFloat(this[b])},O.optionalFloat=function(b,a){var y=this[b];return y?parseFloat(y):a},O.enumeratedString=function(b){return this[b]},O.bool=function(b){return this[b]==="YES"},O.decimalResolution=function(b){var a=M.exec(this[b]);if(a!==null)return{width:parseInt(a[1],10),height:parseInt(a[2],10)}},R.parseAttrList=function(b){var a,y={},A='"';for(C.lastIndex=0;(a=C.exec(b))!==null;){var h=a[2];h.indexOf(A)===0&&h.lastIndexOf(A)===h.length-1&&(h=h.slice(1,-1)),y[a[1]]=h}return y},R}()},"./src/utils/binary-search.ts":function(X,B,x){x.r(B);var M={search:function(T,R){for(var O=0,I=T.length-1,b=null,a=null;O<=I;){b=(O+I)/2|0,a=T[b];var y=R(a);if(y>0)O=b+1;else if(y<0)I=b-1;else return a}return null}};B.default=M},"./src/utils/buffer-helper.ts":function(X,B,x){x.r(B),x.d(B,"BufferHelper",function(){return T});var M=x("./src/utils/logger.ts"),C={length:0,start:function(){return 0},end:function(){return 0}},T=function(){function R(){}return R.isBuffered=function(I,b){try{if(I){for(var a=R.getBuffered(I),y=0;y<a.length;y++)if(b>=a.start(y)&&b<=a.end(y))return!0}}catch{}return!1},R.bufferInfo=function(I,b,a){try{if(I){var y=R.getBuffered(I),A=[],h;for(h=0;h<y.length;h++)A.push({start:y.start(h),end:y.end(h)});return this.bufferedInfo(A,b,a)}}catch{}return{len:0,start:b,end:b,nextStart:void 0}},R.bufferedInfo=function(I,b,a){b=Math.max(0,b),I.sort(function(n,r){var g=n.start-r.start;return g||r.end-n.end});var y=[];if(a)for(var A=0;A<I.length;A++){var h=y.length;if(h){var f=y[h-1].end;I[A].start-f<a?I[A].end>f&&(y[h-1].end=I[A].end):y.push(I[A])}else y.push(I[A])}else y=I;for(var v=0,t,e=b,i=b,p=0;p<y.length;p++){var m=y[p].start,o=y[p].end;if(b+a>=m&&b<o)e=m,i=o,v=i-b;else if(b+a<m){t=m;break}}return{len:v,start:e||0,end:i||0,nextStart:t}},R.getBuffered=function(I){try{return I.buffered}catch(b){return M.logger.log("failed to get media.buffered",b),C}},R}()},"./src/utils/cea-608-parser.ts":function(X,B,x){x.r(B),x.d(B,"Row",function(){return i}),x.d(B,"CaptionScreen",function(){return p});var M=x("./src/utils/logger.ts"),C={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},T=function(d){var s=d;return C.hasOwnProperty(d)&&(s=C[d]),String.fromCharCode(s)},R=15,O=100,I={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},b={17:2,18:4,21:6,22:8,23:10,19:13,20:15},a={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},y={25:2,26:4,29:6,30:8,31:10,27:13,28:15},A=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],h;(function(c){c[c.ERROR=0]="ERROR",c[c.TEXT=1]="TEXT",c[c.WARNING=2]="WARNING",c[c.INFO=2]="INFO",c[c.DEBUG=3]="DEBUG",c[c.DATA=3]="DATA"})(h||(h={}));var f=function(){function c(){this.time=null,this.verboseLevel=h.ERROR}var d=c.prototype;return d.log=function(l,u){this.verboseLevel>=l&&M.logger.log(this.time+" ["+l+"] "+u)},c}(),v=function(d){for(var s=[],l=0;l<d.length;l++)s.push(d[l].toString(16));return s},t=function(){function c(s,l,u,E,L){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=s||"white",this.underline=l||!1,this.italics=u||!1,this.background=E||"black",this.flash=L||!1}var d=c.prototype;return d.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},d.setStyles=function(l){for(var u=["foreground","underline","italics","background","flash"],E=0;E<u.length;E++){var L=u[E];l.hasOwnProperty(L)&&(this[L]=l[L])}},d.isDefault=function(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash},d.equals=function(l){return this.foreground===l.foreground&&this.underline===l.underline&&this.italics===l.italics&&this.background===l.background&&this.flash===l.flash},d.copy=function(l){this.foreground=l.foreground,this.underline=l.underline,this.italics=l.italics,this.background=l.background,this.flash=l.flash},d.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},c}(),e=function(){function c(s,l,u,E,L,S){this.uchar=void 0,this.penState=void 0,this.uchar=s||" ",this.penState=new t(l,u,E,L,S)}var d=c.prototype;return d.reset=function(){this.uchar=" ",this.penState.reset()},d.setChar=function(l,u){this.uchar=l,this.penState.copy(u)},d.setPenState=function(l){this.penState.copy(l)},d.equals=function(l){return this.uchar===l.uchar&&this.penState.equals(l.penState)},d.copy=function(l){this.uchar=l.uchar,this.penState.copy(l.penState)},d.isEmpty=function(){return this.uchar===" "&&this.penState.isDefault()},c}(),i=function(){function c(s){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var l=0;l<O;l++)this.chars.push(new e);this.logger=s,this.pos=0,this.currPenState=new t}var d=c.prototype;return d.equals=function(l){for(var u=!0,E=0;E<O;E++)if(!this.chars[E].equals(l.chars[E])){u=!1;break}return u},d.copy=function(l){for(var u=0;u<O;u++)this.chars[u].copy(l.chars[u])},d.isEmpty=function(){for(var l=!0,u=0;u<O;u++)if(!this.chars[u].isEmpty()){l=!1;break}return l},d.setCursor=function(l){this.pos!==l&&(this.pos=l),this.pos<0?(this.logger.log(h.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>O&&(this.logger.log(h.DEBUG,"Too large cursor position "+this.pos),this.pos=O)},d.moveCursor=function(l){var u=this.pos+l;if(l>1)for(var E=this.pos+1;E<u+1;E++)this.chars[E].setPenState(this.currPenState);this.setCursor(u)},d.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},d.insertChar=function(l){l>=144&&this.backSpace();var u=T(l);if(this.pos>=O){this.logger.log(h.ERROR,"Cannot insert "+l.toString(16)+" ("+u+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(u,this.currPenState),this.moveCursor(1)},d.clearFromPos=function(l){var u;for(u=l;u<O;u++)this.chars[u].reset()},d.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},d.clearToEndOfRow=function(){this.clearFromPos(this.pos)},d.getTextString=function(){for(var l=[],u=!0,E=0;E<O;E++){var L=this.chars[E].uchar;L!==" "&&(u=!1),l.push(L)}return u?"":l.join("")},d.setPenStyles=function(l){this.currPenState.setStyles(l);var u=this.chars[this.pos];u.setPenState(this.currPenState)},c}(),p=function(){function c(s){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var l=0;l<R;l++)this.rows.push(new i(s));this.logger=s,this.currRow=R-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var d=c.prototype;return d.reset=function(){for(var l=0;l<R;l++)this.rows[l].clear();this.currRow=R-1},d.equals=function(l){for(var u=!0,E=0;E<R;E++)if(!this.rows[E].equals(l.rows[E])){u=!1;break}return u},d.copy=function(l){for(var u=0;u<R;u++)this.rows[u].copy(l.rows[u])},d.isEmpty=function(){for(var l=!0,u=0;u<R;u++)if(!this.rows[u].isEmpty()){l=!1;break}return l},d.backSpace=function(){var l=this.rows[this.currRow];l.backSpace()},d.clearToEndOfRow=function(){var l=this.rows[this.currRow];l.clearToEndOfRow()},d.insertChar=function(l){var u=this.rows[this.currRow];u.insertChar(l)},d.setPen=function(l){var u=this.rows[this.currRow];u.setPenStyles(l)},d.moveCursor=function(l){var u=this.rows[this.currRow];u.moveCursor(l)},d.setCursor=function(l){this.logger.log(h.INFO,"setCursor: "+l);var u=this.rows[this.currRow];u.setCursor(l)},d.setPAC=function(l){this.logger.log(h.INFO,"pacData = "+JSON.stringify(l));var u=l.row-1;if(this.nrRollUpRows&&u<this.nrRollUpRows-1&&(u=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==u){for(var E=0;E<R;E++)this.rows[E].clear();var L=this.currRow+1-this.nrRollUpRows,S=this.lastOutputScreen;if(S){var k=S.rows[L].cueStartTime,N=this.logger.time;if(k&&N!==null&&k<N)for(var F=0;F<this.nrRollUpRows;F++)this.rows[u-this.nrRollUpRows+F+1].copy(S.rows[L+F])}}this.currRow=u;var K=this.rows[this.currRow];if(l.indent!==null){var W=l.indent,z=Math.max(W-1,0);K.setCursor(l.indent),l.color=K.chars[z].penState.foreground}var H={foreground:l.color,underline:l.underline,italics:l.italics,background:"black",flash:!1};this.setPen(H)},d.setBkgData=function(l){this.logger.log(h.INFO,"bkgData = "+JSON.stringify(l)),this.backSpace(),this.setPen(l),this.insertChar(32)},d.setRollUpRows=function(l){this.nrRollUpRows=l},d.rollUp=function(){if(this.nrRollUpRows===null){this.logger.log(h.DEBUG,"roll_up but nrRollUpRows not set yet");return}this.logger.log(h.TEXT,this.getDisplayText());var l=this.currRow+1-this.nrRollUpRows,u=this.rows.splice(l,1)[0];u.clear(),this.rows.splice(this.currRow,0,u),this.logger.log(h.INFO,"Rolling up")},d.getDisplayText=function(l){l=l||!1;for(var u=[],E="",L=-1,S=0;S<R;S++){var k=this.rows[S].getTextString();k&&(L=S+1,l?u.push("Row "+L+": '"+k+"'"):u.push(k.trim()))}return u.length>0&&(l?E="["+u.join(" | ")+"]":E=u.join(`
`)),E},d.getTextAndFormat=function(){return this.rows},c}(),m=function(){function c(s,l,u){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=s,this.outputFilter=l,this.mode=null,this.verbose=0,this.displayedMemory=new p(u),this.nonDisplayedMemory=new p(u),this.lastOutputScreen=new p(u),this.currRollUpRow=this.displayedMemory.rows[R-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=u}var d=c.prototype;return d.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[R-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},d.getHandler=function(){return this.outputFilter},d.setHandler=function(l){this.outputFilter=l},d.setPAC=function(l){this.writeScreen.setPAC(l)},d.setBkgData=function(l){this.writeScreen.setBkgData(l)},d.setMode=function(l){l!==this.mode&&(this.mode=l,this.logger.log(h.INFO,"MODE="+l),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=l)},d.insertChars=function(l){for(var u=0;u<l.length;u++)this.writeScreen.insertChar(l[u]);var E=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(h.INFO,E+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(h.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},d.ccRCL=function(){this.logger.log(h.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},d.ccBS=function(){this.logger.log(h.INFO,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},d.ccAOF=function(){},d.ccAON=function(){},d.ccDER=function(){this.logger.log(h.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},d.ccRU=function(l){this.logger.log(h.INFO,"RU("+l+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(l)},d.ccFON=function(){this.logger.log(h.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},d.ccRDC=function(){this.logger.log(h.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},d.ccTR=function(){this.logger.log(h.INFO,"TR"),this.setMode("MODE_TEXT")},d.ccRTD=function(){this.logger.log(h.INFO,"RTD"),this.setMode("MODE_TEXT")},d.ccEDM=function(){this.logger.log(h.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},d.ccCR=function(){this.logger.log(h.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},d.ccENM=function(){this.logger.log(h.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},d.ccEOC=function(){if(this.logger.log(h.INFO,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){var l=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=l,this.writeScreen=this.nonDisplayedMemory,this.logger.log(h.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},d.ccTO=function(l){this.logger.log(h.INFO,"TO("+l+") - Tab Offset"),this.writeScreen.moveCursor(l)},d.ccMIDROW=function(l){var u={flash:!1};if(u.underline=l%2===1,u.italics=l>=46,u.italics)u.foreground="white";else{var E=Math.floor(l/2)-16,L=["white","green","blue","cyan","red","yellow","magenta"];u.foreground=L[E]}this.logger.log(h.INFO,"MIDROW: "+JSON.stringify(u)),this.writeScreen.setPen(u)},d.outputDataUpdate=function(l){l===void 0&&(l=!1);var u=this.logger.time;u!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=u:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,u,this.lastOutputScreen),l&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:u),this.lastOutputScreen.copy(this.displayedMemory))},d.cueSplitAtTime=function(l){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,l,this.displayedMemory),this.cueStartTime=l))},c}(),o=function(){function c(s,l,u){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var E=new f;this.channels=[null,new m(s,l,E),new m(s+1,u,E)],this.cmdHistory=g(),this.logger=E}var d=c.prototype;return d.getHandler=function(l){return this.channels[l].getHandler()},d.setHandler=function(l,u){this.channels[l].setHandler(u)},d.addData=function(l,u){var E,L,S,k=!1;this.logger.time=l;for(var N=0;N<u.length;N+=2)if(L=u[N]&127,S=u[N+1]&127,!(L===0&&S===0)){if(this.logger.log(h.DATA,"["+v([u[N],u[N+1]])+"] -> ("+v([L,S])+")"),E=this.parseCmd(L,S),E||(E=this.parseMidrow(L,S)),E||(E=this.parsePAC(L,S)),E||(E=this.parseBackgroundAttributes(L,S)),!E&&(k=this.parseChars(L,S),k)){var F=this.currentChannel;if(F&&F>0){var K=this.channels[F];K.insertChars(k)}else this.logger.log(h.WARNING,"No channel found yet. TEXT-MODE?")}!E&&!k&&this.logger.log(h.WARNING,"Couldn't parse cleaned data "+v([L,S])+" orig: "+v([u[N],u[N+1]]))}},d.parseCmd=function(l,u){var E=this.cmdHistory,L=(l===20||l===28||l===21||l===29)&&u>=32&&u<=47,S=(l===23||l===31)&&u>=33&&u<=35;if(!(L||S))return!1;if(r(l,u,E))return n(null,null,E),this.logger.log(h.DEBUG,"Repeated command ("+v([l,u])+") is dropped"),!0;var k=l===20||l===21||l===23?1:2,N=this.channels[k];return l===20||l===21||l===28||l===29?u===32?N.ccRCL():u===33?N.ccBS():u===34?N.ccAOF():u===35?N.ccAON():u===36?N.ccDER():u===37?N.ccRU(2):u===38?N.ccRU(3):u===39?N.ccRU(4):u===40?N.ccFON():u===41?N.ccRDC():u===42?N.ccTR():u===43?N.ccRTD():u===44?N.ccEDM():u===45?N.ccCR():u===46?N.ccENM():u===47&&N.ccEOC():N.ccTO(u-32),n(l,u,E),this.currentChannel=k,!0},d.parseMidrow=function(l,u){var E=0;if((l===17||l===25)&&u>=32&&u<=47){if(l===17?E=1:E=2,E!==this.currentChannel)return this.logger.log(h.ERROR,"Mismatch channel in midrow parsing"),!1;var L=this.channels[E];return L?(L.ccMIDROW(u),this.logger.log(h.DEBUG,"MIDROW ("+v([l,u])+")"),!0):!1}return!1},d.parsePAC=function(l,u){var E,L=this.cmdHistory,S=(l>=17&&l<=23||l>=25&&l<=31)&&u>=64&&u<=127,k=(l===16||l===24)&&u>=64&&u<=95;if(!(S||k))return!1;if(r(l,u,L))return n(null,null,L),!0;var N=l<=23?1:2;u>=64&&u<=95?E=N===1?I[l]:a[l]:E=N===1?b[l]:y[l];var F=this.channels[N];return F?(F.setPAC(this.interpretPAC(E,u)),n(l,u,L),this.currentChannel=N,!0):!1},d.interpretPAC=function(l,u){var E,L={color:null,italics:!1,indent:null,underline:!1,row:l};return u>95?E=u-96:E=u-64,L.underline=(E&1)===1,E<=13?L.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(E/2)]:E<=15?(L.italics=!0,L.color="white"):L.indent=Math.floor((E-16)/2)*4,L},d.parseChars=function(l,u){var E,L=null,S=null;if(l>=25?(E=2,S=l-8):(E=1,S=l),S>=17&&S<=19){var k;S===17?k=u+80:S===18?k=u+112:k=u+144,this.logger.log(h.INFO,"Special char '"+T(k)+"' in channel "+E),L=[k]}else l>=32&&l<=127&&(L=u===0?[l]:[l,u]);if(L){var N=v(L);this.logger.log(h.DEBUG,"Char codes =  "+N.join(",")),n(l,u,this.cmdHistory)}return L},d.parseBackgroundAttributes=function(l,u){var E=(l===16||l===24)&&u>=32&&u<=47,L=(l===23||l===31)&&u>=45&&u<=47;if(!(E||L))return!1;var S,k={};l===16||l===24?(S=Math.floor((u-32)/2),k.background=A[S],u%2===1&&(k.background=k.background+"_semi")):u===45?k.background="transparent":(k.foreground="black",u===47&&(k.underline=!0));var N=l<=23?1:2,F=this.channels[N];return F.setBkgData(k),n(l,u,this.cmdHistory),!0},d.reset=function(){for(var l=0;l<Object.keys(this.channels).length;l++){var u=this.channels[l];u&&u.reset()}this.cmdHistory=g()},d.cueSplitAtTime=function(l){for(var u=0;u<this.channels.length;u++){var E=this.channels[u];E&&E.cueSplitAtTime(l)}},c}();function n(c,d,s){s.a=c,s.b=d}function r(c,d,s){return s.a===c&&s.b===d}function g(){return{a:null,b:null}}B.default=o},"./src/utils/codecs.ts":function(X,B,x){x.r(B),x.d(B,"isCodecType",function(){return C}),x.d(B,"isCodecSupportedInMp4",function(){return T});var M={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function C(R,O){var I=M[O];return!!I&&I[R.slice(0,4)]===!0}function T(R,O){return MediaSource.isTypeSupported((O||"video")+'/mp4;codecs="'+R+'"')}},"./src/utils/cues.ts":function(X,B,x){x.r(B);var M=x("./src/utils/vttparser.ts"),C=x("./src/utils/webvtt-parser.ts"),T=x("./src/utils/texttrack-utils.ts"),R=/\s/,O={newCue:function(b,a,y,A){for(var h=[],f,v,t,e,i,p=self.VTTCue||self.TextTrackCue,m=0;m<A.rows.length;m++)if(f=A.rows[m],t=!0,e=0,i="",!f.isEmpty()){for(var o=0;o<f.chars.length;o++)R.test(f.chars[o].uchar)&&t?e++:(i+=f.chars[o].uchar,t=!1);f.cueStartTime=a,a===y&&(y+=1e-4),e>=16?e--:e++;var n=Object(M.fixLineBreaks)(i.trim()),r=Object(C.generateCueId)(a,y,n);(!b||!b.cues||!b.cues.getCueById(r))&&(v=new p(a,y,n),v.id=r,v.line=m+1,v.align="left",v.position=10+Math.min(80,Math.floor(e*8/32)*10),h.push(v))}return b&&h.length&&(h.sort(function(g,c){return g.line==="auto"||c.line==="auto"?0:g.line>8&&c.line>8?c.line-g.line:g.line-c.line}),h.forEach(function(g){return Object(T.addCueToTrack)(b,g)})),h}};B.default=O},"./src/utils/discontinuities.ts":function(X,B,x){x.r(B),x.d(B,"findFirstFragWithCC",function(){return R}),x.d(B,"shouldAlignOnDiscontinuities",function(){return O}),x.d(B,"findDiscontinuousReferenceFrag",function(){return I}),x.d(B,"adjustSlidingStart",function(){return a}),x.d(B,"alignStream",function(){return y}),x.d(B,"alignPDT",function(){return h}),x.d(B,"alignFragmentByPDTDelta",function(){return f}),x.d(B,"alignMediaPlaylistByPDT",function(){return v});var M=x("./src/polyfills/number.ts"),C=x("./src/utils/logger.ts"),T=x("./src/controller/level-helper.ts");function R(t,e){for(var i=null,p=0,m=t.length;p<m;p++){var o=t[p];if(o&&o.cc===e){i=o;break}}return i}function O(t,e,i){return!!(e.details&&(i.endCC>i.startCC||t&&t.cc<i.startCC))}function I(t,e){var i=t.fragments,p=e.fragments;if(!p.length||!i.length){C.logger.log("No fragments to align");return}var m=R(i,p[0].cc);if(!m||m&&!m.startPTS){C.logger.log("No frag in previous level to align on");return}return m}function b(t,e){if(t){var i=t.start+e;t.start=t.startPTS=i,t.endPTS=i+t.duration}}function a(t,e){for(var i=e.fragments,p=0,m=i.length;p<m;p++)b(i[p],t);e.fragmentHint&&b(e.fragmentHint,t),e.alignedSliding=!0}function y(t,e,i){!e||(A(t,i,e),!i.alignedSliding&&e.details&&h(i,e.details),!i.alignedSliding&&e.details&&!i.skippedSegments&&Object(T.adjustSliding)(e.details,i))}function A(t,e,i){if(O(t,i,e)){var p=I(i.details,e);p&&Object(M.isFiniteNumber)(p.start)&&(C.logger.log("Adjusting PTS using last level due to CC increase within current level "+e.url),a(p.start,e))}}function h(t,e){if(!(!e.fragments.length||!t.hasProgramDateTime||!e.hasProgramDateTime)){var i=e.fragments[0].programDateTime,p=t.fragments[0].programDateTime,m=(p-i)/1e3+e.fragments[0].start;m&&Object(M.isFiniteNumber)(m)&&(C.logger.log("Adjusting PTS using programDateTime delta "+(p-i)+"ms, sliding:"+m.toFixed(3)+" "+t.url+" "),a(m,t))}}function f(t,e){var i=t.programDateTime;if(!!i){var p=(i-e)/1e3;t.start=t.startPTS=p,t.endPTS=p+t.duration}}function v(t,e){if(!(!e.fragments.length||!t.hasProgramDateTime||!e.hasProgramDateTime)){var i=e.fragments[0].programDateTime,p=e.fragments[0].start,m=i-p*1e3;t.fragments.forEach(function(o){f(o,m)}),t.fragmentHint&&f(t.fragmentHint,m),t.alignedSliding=!0}}},"./src/utils/ewma-bandwidth-estimator.ts":function(X,B,x){x.r(B);var M=x("./src/utils/ewma.ts"),C=function(){function T(O,I,b){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=b,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new M.default(O),this.fast_=new M.default(I)}var R=T.prototype;return R.update=function(I,b){var a=this.slow_,y=this.fast_;this.slow_.halfLife!==I&&(this.slow_=new M.default(I,a.getEstimate(),a.getTotalWeight())),this.fast_.halfLife!==b&&(this.fast_=new M.default(b,y.getEstimate(),y.getTotalWeight()))},R.sample=function(I,b){I=Math.max(I,this.minDelayMs_);var a=8*b,y=I/1e3,A=a/y;this.fast_.sample(y,A),this.slow_.sample(y,A)},R.canEstimate=function(){var I=this.fast_;return I&&I.getTotalWeight()>=this.minWeight_},R.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},R.destroy=function(){},T}();B.default=C},"./src/utils/ewma.ts":function(X,B,x){x.r(B);var M=function(){function C(R,O,I){O===void 0&&(O=0),I===void 0&&(I=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=R,this.alpha_=R?Math.exp(Math.log(.5)/R):0,this.estimate_=O,this.totalWeight_=I}var T=C.prototype;return T.sample=function(O,I){var b=Math.pow(this.alpha_,O);this.estimate_=I*(1-b)+b*this.estimate_,this.totalWeight_+=O},T.getTotalWeight=function(){return this.totalWeight_},T.getEstimate=function(){if(this.alpha_){var O=1-Math.pow(this.alpha_,this.totalWeight_);if(O)return this.estimate_/O}return this.estimate_},C}();B.default=M},"./src/utils/fetch-loader.ts":function(X,B,x){x.r(B),x.d(B,"fetchSupported",function(){return f});var M=x("./src/polyfills/number.ts"),C=x("./src/loader/load-stats.ts"),T=x("./src/demux/chunk-cache.ts");function R(p,m){p.prototype=Object.create(m.prototype),p.prototype.constructor=p,y(p,m)}function O(p){var m=typeof Map=="function"?new Map:void 0;return O=function(n){if(n===null||!a(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof m!="undefined"){if(m.has(n))return m.get(n);m.set(n,r)}function r(){return I(n,arguments,A(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,n)},O(p)}function I(p,m,o){return b()?I=Reflect.construct.bind():I=function(r,g,c){var d=[null];d.push.apply(d,g);var s=Function.bind.apply(r,d),l=new s;return c&&y(l,c.prototype),l},I.apply(null,arguments)}function b(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function a(p){return Function.toString.call(p).indexOf("[native code]")!==-1}function y(p,m){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},y(p,m)}function A(p){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},A(p)}function h(){return h=Object.assign?Object.assign.bind():function(p){for(var m=1;m<arguments.length;m++){var o=arguments[m];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(p[n]=o[n])}return p},h.apply(this,arguments)}function f(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}var v=function(){function p(o){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=o.fetchSetup||e,this.controller=new self.AbortController,this.stats=new C.LoadStats}var m=p.prototype;return m.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},m.abortInternal=function(){var n=this.response;(!n||!n.ok)&&(this.stats.aborted=!0,this.controller.abort())},m.abort=function(){var n;this.abortInternal(),(n=this.callbacks)!==null&&n!==void 0&&n.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},m.load=function(n,r,g){var c=this,d=this.stats;if(d.loading.start)throw new Error("Loader can only be used once.");d.loading.start=self.performance.now();var s=t(n,this.controller.signal),l=g.onProgress,u=n.responseType==="arraybuffer",E=u?"byteLength":"length";this.context=n,this.config=r,this.callbacks=g,this.request=this.fetchSetup(n,s),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(function(){c.abortInternal(),g.onTimeout(d,n,c.response)},r.timeout),self.fetch(this.request).then(function(L){if(c.response=c.loader=L,!L.ok){var S=L.status,k=L.statusText;throw new i(k||"fetch, bad network response",S,L)}return d.loading.first=Math.max(self.performance.now(),d.loading.start),d.total=parseInt(L.headers.get("Content-Length")||"0"),l&&Object(M.isFiniteNumber)(r.highWaterMark)?c.loadProgressively(L,d,n,r.highWaterMark,l):u?L.arrayBuffer():L.text()}).then(function(L){var S=c.response;self.clearTimeout(c.requestTimeout),d.loading.end=Math.max(self.performance.now(),d.loading.first),d.loaded=d.total=L[E];var k={url:S.url,data:L};l&&!Object(M.isFiniteNumber)(r.highWaterMark)&&l(d,n,L,S),g.onSuccess(k,d,n,S)}).catch(function(L){if(self.clearTimeout(c.requestTimeout),!d.aborted){var S=L&&L.code||0,k=L?L.message:null;g.onError({code:S,text:k},n,L?L.details:null)}})},m.getCacheAge=function(){var n=null;if(this.response){var r=this.response.headers.get("age");n=r?parseFloat(r):null}return n},m.loadProgressively=function(n,r,g,c,d){c===void 0&&(c=0);var s=new T.default,l=n.body.getReader(),u=function E(){return l.read().then(function(L){if(L.done)return s.dataLength&&d(r,g,s.flush(),n),Promise.resolve(new ArrayBuffer(0));var S=L.value,k=S.length;return r.loaded+=k,k<c||s.dataLength?(s.push(S),s.dataLength>=c&&d(r,g,s.flush(),n)):d(r,g,S,n),E()}).catch(function(){return Promise.reject()})};return u()},p}();function t(p,m){var o={method:"GET",mode:"cors",credentials:"same-origin",signal:m,headers:new self.Headers(h({},p.headers))};return p.rangeEnd&&o.headers.set("Range","bytes="+p.rangeStart+"-"+String(p.rangeEnd-1)),o}function e(p,m){return new self.Request(p.url,m)}var i=function(p){R(m,p);function m(o,n,r){var g;return g=p.call(this,o)||this,g.code=void 0,g.details=void 0,g.code=n,g.details=r,g}return m}(O(Error));B.default=v},"./src/utils/imsc1-ttml-parser.ts":function(X,B,x){x.r(B),x.d(B,"IMSC1_CODEC",function(){return a}),x.d(B,"parseIMSC1",function(){return f});var M=x("./src/utils/mp4-tools.ts"),C=x("./src/utils/vttparser.ts"),T=x("./src/utils/vttcue.ts"),R=x("./src/demux/id3.ts"),O=x("./src/utils/timescale-conversion.ts"),I=x("./src/utils/webvtt-parser.ts");function b(){return b=Object.assign?Object.assign.bind():function(c){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(c[l]=s[l])}return c},b.apply(this,arguments)}var a="stpp.ttml.im1t",y=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,A=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,h={left:"start",center:"center",right:"end",start:"start",end:"end"};function f(c,d,s,l,u){var E=Object(M.findBox)(new Uint8Array(c),["mdat"]);if(E.length===0){u(new Error("Could not parse IMSC1 mdat"));return}var L=E.map(function(k){return Object(R.utf8ArrayToStr)(k)}),S=Object(O.toTimescaleFromScale)(d,1,s);try{L.forEach(function(k){return l(v(k,S))})}catch(k){u(k)}}function v(c,d){var s=new DOMParser,l=s.parseFromString(c,"text/xml"),u=l.getElementsByTagName("tt")[0];if(!u)throw new Error("Invalid ttml");var E={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},L=Object.keys(E).reduce(function(K,W){return K[W]=u.getAttribute("ttp:"+W)||E[W],K},{}),S=u.getAttribute("xml:space")!=="preserve",k=e(t(u,"styling","style")),N=e(t(u,"layout","region")),F=t(u,"body","[begin]");return[].map.call(F,function(K){var W=i(K,S);if(!W||!K.hasAttribute("begin"))return null;var z=n(K.getAttribute("begin"),L),H=n(K.getAttribute("dur"),L),Y=n(K.getAttribute("end"),L);if(z===null)throw o(K);if(Y===null){if(H===null)throw o(K);Y=z+H}var Q=new T.default(z-d,Y-d,W);Q.id=Object(I.generateCueId)(Q.startTime,Q.endTime,Q.text);var Z=N[K.getAttribute("region")],$=k[K.getAttribute("style")];Q.position=10,Q.size=80;var ee=p(Z,$,k),ie=ee.textAlign;if(ie){var ae=h[ie];ae&&(Q.lineAlign=ae),Q.align=ie}return b(Q,ee),Q}).filter(function(K){return K!==null})}function t(c,d,s){var l=c.getElementsByTagName(d)[0];return l?[].slice.call(l.querySelectorAll(s)):[]}function e(c){return c.reduce(function(d,s){var l=s.getAttribute("xml:id");return l&&(d[l]=s),d},{})}function i(c,d){return[].slice.call(c.childNodes).reduce(function(s,l,u){var E;return l.nodeName==="br"&&u?s+`
`:(E=l.childNodes)!==null&&E!==void 0&&E.length?i(l,d):d?s+l.textContent.trim().replace(/\s+/g," "):s+l.textContent},"")}function p(c,d,s){var l="http://www.w3.org/ns/ttml#styling",u=null,E=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],L=c!=null&&c.hasAttribute("style")?c.getAttribute("style"):null;return L&&s.hasOwnProperty(L)&&(u=s[L]),E.reduce(function(S,k){var N=m(d,l,k)||m(c,l,k)||m(u,l,k);return N&&(S[k]=N),S},{})}function m(c,d,s){return c&&c.hasAttributeNS(d,s)?c.getAttributeNS(d,s):null}function o(c){return new Error("Could not parse ttml timestamp "+c)}function n(c,d){if(!c)return null;var s=Object(C.parseTimeStamp)(c);return s===null&&(y.test(c)?s=r(c,d):A.test(c)&&(s=g(c,d))),s}function r(c,d){var s=y.exec(c),l=(s[4]|0)+(s[5]|0)/d.subFrameRate;return(s[1]|0)*3600+(s[2]|0)*60+(s[3]|0)+l/d.frameRate}function g(c,d){var s=A.exec(c),l=Number(s[1]),u=s[2];switch(u){case"h":return l*3600;case"m":return l*60;case"ms":return l*1e3;case"f":return l/d.frameRate;case"t":return l/d.tickRate}return l}},"./src/utils/logger.ts":function(X,B,x){x.r(B),x.d(B,"enableLogs",function(){return I}),x.d(B,"logger",function(){return b});var M=function(){},C={trace:M,debug:M,log:M,warn:M,info:M,error:M},T=C;function R(a){var y=self.console[a];return y?y.bind(self.console,"["+a+"] >"):M}function O(a){for(var y=arguments.length,A=new Array(y>1?y-1:0),h=1;h<y;h++)A[h-1]=arguments[h];A.forEach(function(f){T[f]=a[f]?a[f].bind(a):R(f)})}function I(a){if(self.console&&a===!0||typeof a=="object"){O(a,"debug","log","info","warn","error");try{T.log()}catch{T=C}}else T=C}var b=T},"./src/utils/mediakeys-helper.ts":function(X,B,x){x.r(B),x.d(B,"KeySystems",function(){return M}),x.d(B,"requestMediaKeySystemAccess",function(){return C});var M;(function(T){T.WIDEVINE="com.widevine.alpha",T.PLAYREADY="com.microsoft.playready"})(M||(M={}));var C=function(){return typeof self!="undefined"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}()},"./src/utils/mediasource-helper.ts":function(X,B,x){x.r(B),x.d(B,"getMediaSource",function(){return M});function M(){return self.MediaSource||self.WebKitMediaSource}},"./src/utils/mp4-tools.ts":function(X,B,x){x.r(B),x.d(B,"RemuxerTrackIdConfig",function(){return I}),x.d(B,"bin2str",function(){return b}),x.d(B,"readUint16",function(){return a}),x.d(B,"readUint32",function(){return y}),x.d(B,"readSint32",function(){return A}),x.d(B,"writeUint32",function(){return h}),x.d(B,"findBox",function(){return f}),x.d(B,"parseSegmentIndex",function(){return v}),x.d(B,"parseInitSegment",function(){return t}),x.d(B,"getStartDTS",function(){return e}),x.d(B,"getDuration",function(){return i}),x.d(B,"computeRawDurationFromSamples",function(){return p}),x.d(B,"offsetStartDTS",function(){return m}),x.d(B,"segmentValidRange",function(){return o}),x.d(B,"appendUint8Array",function(){return n}),x.d(B,"parseSamples",function(){return r}),x.d(B,"parseSEIMessageFromNALu",function(){return d}),x.d(B,"parseEmsg",function(){return l});var M=x("./src/utils/typed-array.ts"),C=x("./src/loader/fragment.ts"),T=x("./src/demux/id3.ts"),R=Math.pow(2,32)-1,O=[].push,I={video:1,audio:2,id3:3,text:4};function b(u){return String.fromCharCode.apply(null,u)}function a(u,E){var L=u[E]<<8|u[E+1];return L<0?65536+L:L}function y(u,E){var L=A(u,E);return L<0?4294967296+L:L}function A(u,E){return u[E]<<24|u[E+1]<<16|u[E+2]<<8|u[E+3]}function h(u,E,L){u[E]=L>>24,u[E+1]=L>>16&255,u[E+2]=L>>8&255,u[E+3]=L&255}function f(u,E){var L=[];if(!E.length)return L;for(var S=u.byteLength,k=0;k<S;){var N=y(u,k),F=b(u.subarray(k+4,k+8)),K=N>1?k+N:S;if(F===E[0])if(E.length===1)L.push(u.subarray(k+8,K));else{var W=f(u.subarray(k+8,K),E.slice(1));W.length&&O.apply(L,W)}k=K}return L}function v(u){var E=[],L=u[0],S=8,k=y(u,S);S+=4;var N=0,F=0;L===0?S+=8:S+=16,S+=2;var K=u.length+F,W=a(u,S);S+=2;for(var z=0;z<W;z++){var H=S,Y=y(u,H);H+=4;var Q=Y&2147483647,Z=(Y&2147483648)>>>31;if(Z===1)return console.warn("SIDX has hierarchical references (not supported)"),null;var $=y(u,H);H+=4,E.push({referenceSize:Q,subsegmentDuration:$,info:{duration:$/k,start:K,end:K+Q-1}}),K+=Q,H+=4,S=H}return{earliestPresentationTime:N,timescale:k,version:L,referencesCount:W,references:E}}function t(u){for(var E=[],L=f(u,["moov","trak"]),S=0;S<L.length;S++){var k=L[S],N=f(k,["tkhd"])[0];if(N){var F=N[0],K=F===0?12:20,W=y(N,K),z=f(k,["mdia","mdhd"])[0];if(z){F=z[0],K=F===0?12:20;var H=y(z,K),Y=f(k,["mdia","hdlr"])[0];if(Y){var Q=b(Y.subarray(8,12)),Z={soun:C.ElementaryStreamTypes.AUDIO,vide:C.ElementaryStreamTypes.VIDEO}[Q];if(Z){var $=f(k,["mdia","minf","stbl","stsd"])[0],ee=void 0;$&&(ee=b($.subarray(12,16))),E[W]={timescale:H,type:Z},E[Z]={timescale:H,id:W,codec:ee}}}}}}var ie=f(u,["moov","mvex","trex"]);return ie.forEach(function(ae){var q=y(ae,4),oe=E[q];oe&&(oe.default={duration:y(ae,12),flags:y(ae,20)})}),E}function e(u,E){return f(E,["moof","traf"]).reduce(function(L,S){var k=f(S,["tfdt"])[0],N=k[0],F=f(S,["tfhd"]).reduce(function(K,W){var z=y(W,4),H=u[z];if(H){var Y=y(k,4);N===1&&(Y*=Math.pow(2,32),Y+=y(k,8));var Q=H.timescale||9e4,Z=Y/Q;if(isFinite(Z)&&(K===null||Z<K))return Z}return K},null);return F!==null&&isFinite(F)&&(L===null||F<L)?F:L},null)||0}function i(u,E){for(var L=0,S=0,k=0,N=f(u,["moof","traf"]),F=0;F<N.length;F++){var K=N[F],W=f(K,["tfhd"])[0],z=y(W,4),H=E[z];if(!!H){var Y=H.default,Q=y(W,0)|(Y==null?void 0:Y.flags),Z=Y==null?void 0:Y.duration;Q&8&&(Q&2?Z=y(W,12):Z=y(W,8));for(var $=H.timescale||9e4,ee=f(K,["trun"]),ie=0;ie<ee.length;ie++){if(L=p(ee[ie]),!L&&Z){var ae=y(ee[ie],4);L=Z*ae}H.type===C.ElementaryStreamTypes.VIDEO?S+=L/$:H.type===C.ElementaryStreamTypes.AUDIO&&(k+=L/$)}}}if(S===0&&k===0){for(var q=0,oe=f(u,["sidx"]),ne=0;ne<oe.length;ne++){var re=v(oe[ne]);re!=null&&re.references&&(q+=re.references.reduce(function(ue,le){return ue+le.info.duration||0},0))}return q}return S||k}function p(u){var E=y(u,0),L=8;E&1&&(L+=4),E&4&&(L+=4);for(var S=0,k=y(u,4),N=0;N<k;N++){if(E&256){var F=y(u,L);S+=F,L+=4}E&512&&(L+=4),E&1024&&(L+=4),E&2048&&(L+=4)}return S}function m(u,E,L){f(E,["moof","traf"]).forEach(function(S){f(S,["tfhd"]).forEach(function(k){var N=y(k,4),F=u[N];if(!!F){var K=F.timescale||9e4;f(S,["tfdt"]).forEach(function(W){var z=W[0],H=y(W,4);if(z===0)H-=L*K,H=Math.max(H,0),h(W,4,H);else{H*=Math.pow(2,32),H+=y(W,8),H-=L*K,H=Math.max(H,0);var Y=Math.floor(H/(R+1)),Q=Math.floor(H%(R+1));h(W,4,Y),h(W,8,Q)}})}})})}function o(u){var E={valid:null,remainder:null},L=f(u,["moof"]);if(L){if(L.length<2)return E.remainder=u,E}else return E;var S=L[L.length-1];return E.valid=Object(M.sliceUint8)(u,0,S.byteOffset-8),E.remainder=Object(M.sliceUint8)(u,S.byteOffset-8),E}function n(u,E){var L=new Uint8Array(u.length+E.length);return L.set(u),L.set(E,u.length),L}function r(u,E){var L=[],S=E.samples,k=E.timescale,N=E.id,F=!1,K=f(S,["moof"]);return K.map(function(W){var z=W.byteOffset-8,H=f(W,["traf"]);H.map(function(Y){var Q=f(Y,["tfdt"]).map(function(Z){var $=Z[0],ee=y(Z,4);return $===1&&(ee*=Math.pow(2,32),ee+=y(Z,8)),ee/k})[0];return Q!==void 0&&(u=Q),f(Y,["tfhd"]).map(function(Z){var $=y(Z,4),ee=y(Z,0)&16777215,ie=(ee&1)!==0,ae=(ee&2)!==0,q=(ee&8)!==0,oe=0,ne=(ee&16)!==0,re=0,ue=(ee&32)!==0,le=8;$===N&&(ie&&(le+=8),ae&&(le+=4),q&&(oe=y(Z,le),le+=4),ne&&(re=y(Z,le),le+=4),ue&&(le+=4),E.type==="video"&&(F=g(E.codec)),f(Y,["trun"]).map(function(fe){var ye=fe[0],pe=y(fe,0)&16777215,Te=(pe&1)!==0,Ee=0,Ae=(pe&4)!==0,Ce=(pe&256)!==0,Le=0,Re=(pe&512)!==0,Ie=0,Se=(pe&1024)!==0,ke=(pe&2048)!==0,De=0,Fe=y(fe,4),ge=8;Te&&(Ee=y(fe,ge),ge+=4),Ae&&(ge+=4);for(var be=Ee+z,Pe=0;Pe<Fe;Pe++){if(Ce?(Le=y(fe,ge),ge+=4):Le=oe,Re?(Ie=y(fe,ge),ge+=4):Ie=re,Se&&(ge+=4),ke&&(ye===0?De=y(fe,ge):De=A(fe,ge),ge+=4),E.type===C.ElementaryStreamTypes.VIDEO)for(var ve=0;ve<Ie;){var xe=y(S,be);be+=4;var Oe=S[be]&31;if(c(F,Oe)){var Ue=S.subarray(be,be+xe);d(Ue,u+De/k,L)}be+=xe,ve+=xe+4}u+=Le/k}}))})})}),L}function g(u){if(!u)return!1;var E=u.indexOf("."),L=E<0?u:u.substring(0,E);return L==="hvc1"||L==="hev1"||L==="dvh1"||L==="dvhe"}function c(u,E){return u?E===39||E===40:E===6}function d(u,E,L){var S=s(u),k=0;k++;for(var N=0,F=0,K=!1,W=0;k<S.length;){N=0;do{if(k>=S.length)break;W=S[k++],N+=W}while(W===255);F=0;do{if(k>=S.length)break;W=S[k++],F+=W}while(W===255);var z=S.length-k;if(!K&&N===4&&k<S.length){K=!0;var H=S[k++];if(H===181){var Y=a(S,k);if(k+=2,Y===49){var Q=y(S,k);if(k+=4,Q===1195456820){var Z=S[k++];if(Z===3){var $=S[k++],ee=31&$,ie=64&$,ae=ie?2+ee*3:0,q=new Uint8Array(ae);if(ie){q[0]=$;for(var oe=1;oe<ae;oe++)q[oe]=S[k++]}L.push({type:Z,payloadType:N,pts:E,bytes:q})}}}}}else if(N===5&&F<z){if(K=!0,F>16){for(var ne=[],re=0;re<16;re++){var ue=S[k++].toString(16);ne.push(ue.length==1?"0"+ue:ue),(re===3||re===5||re===7||re===9)&&ne.push("-")}for(var le=F-16,fe=new Uint8Array(le),ye=0;ye<le;ye++)fe[ye]=S[k++];L.push({payloadType:N,pts:E,uuid:ne.join(""),userData:Object(T.utf8ArrayToStr)(fe),userDataBytes:fe})}}else if(F<z)k+=F;else if(F>z)break}}function s(u){for(var E=u.byteLength,L=[],S=1;S<E-2;)u[S]===0&&u[S+1]===0&&u[S+2]===3?(L.push(S+2),S+=2):S++;if(L.length===0)return u;var k=E-L.length,N=new Uint8Array(k),F=0;for(S=0;S<k;F++,S++)F===L[0]&&(F++,L.shift()),N[S]=u[F];return N}function l(u){var E=u[0],L="",S="",k=0,N=0,F=0,K=0,W=0,z=0;if(E===0){for(;b(u.subarray(z,z+1))!=="\0";)L+=b(u.subarray(z,z+1)),z+=1;for(L+=b(u.subarray(z,z+1)),z+=1;b(u.subarray(z,z+1))!=="\0";)S+=b(u.subarray(z,z+1)),z+=1;S+=b(u.subarray(z,z+1)),z+=1,k=y(u,12),N=y(u,16),K=y(u,20),W=y(u,24),z=28}else if(E===1){z+=4,k=y(u,z),z+=4;var H=y(u,z);z+=4;var Y=y(u,z);for(z+=4,F=Math.pow(2,32)*H+Y,Number.isSafeInteger(F)||(F=Number.MAX_SAFE_INTEGER,console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),K=y(u,z),z+=4,W=y(u,z),z+=4;b(u.subarray(z,z+1))!=="\0";)L+=b(u.subarray(z,z+1)),z+=1;for(L+=b(u.subarray(z,z+1)),z+=1;b(u.subarray(z,z+1))!=="\0";)S+=b(u.subarray(z,z+1)),z+=1;S+=b(u.subarray(z,z+1)),z+=1}var Q=u.subarray(z,u.byteLength);return{schemeIdUri:L,value:S,timeScale:k,presentationTime:F,presentationTimeDelta:N,eventDuration:K,id:W,payload:Q}}},"./src/utils/output-filter.ts":function(X,B,x){x.r(B),x.d(B,"default",function(){return M});var M=function(){function C(R,O){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=R,this.trackName=O}var T=C.prototype;return T.dispatchCue=function(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},T.newCue=function(O,I,b){(this.startTime===null||this.startTime>O)&&(this.startTime=O),this.endTime=I,this.screen=b,this.timelineController.createCaptionsTrack(this.trackName)},T.reset=function(){this.cueRanges=[],this.startTime=null},C}()},"./src/utils/texttrack-utils.ts":function(X,B,x){x.r(B),x.d(B,"sendAddTrackEvent",function(){return C}),x.d(B,"addCueToTrack",function(){return T}),x.d(B,"clearCurrentCues",function(){return R}),x.d(B,"removeCuesInRange",function(){return O}),x.d(B,"getCuesInRange",function(){return b});var M=x("./src/utils/logger.ts");function C(a,y){var A;try{A=new Event("addtrack")}catch{A=document.createEvent("Event"),A.initEvent("addtrack",!1,!1)}A.track=a,y.dispatchEvent(A)}function T(a,y){var A=a.mode;if(A==="disabled"&&(a.mode="hidden"),a.cues&&!a.cues.getCueById(y.id))try{if(a.addCue(y),!a.cues.getCueById(y.id))throw new Error("addCue is failed for: "+y)}catch(f){M.logger.debug("[texttrack-utils]: "+f);var h=new self.TextTrackCue(y.startTime,y.endTime,y.text);h.id=y.id,a.addCue(h)}A==="disabled"&&(a.mode=A)}function R(a){var y=a.mode;if(y==="disabled"&&(a.mode="hidden"),a.cues)for(var A=a.cues.length;A--;)a.removeCue(a.cues[A]);y==="disabled"&&(a.mode=y)}function O(a,y,A,h){var f=a.mode;if(f==="disabled"&&(a.mode="hidden"),a.cues&&a.cues.length>0)for(var v=b(a.cues,y,A),t=0;t<v.length;t++)(!h||h(v[t]))&&a.removeCue(v[t]);f==="disabled"&&(a.mode=f)}function I(a,y){if(y<a[0].startTime)return 0;var A=a.length-1;if(y>a[A].endTime)return-1;for(var h=0,f=A;h<=f;){var v=Math.floor((f+h)/2);if(y<a[v].startTime)f=v-1;else if(y>a[v].startTime&&h<A)h=v+1;else return v}return a[h].startTime-y<y-a[f].startTime?h:f}function b(a,y,A){var h=[],f=I(a,y);if(f>-1)for(var v=f,t=a.length;v<t;v++){var e=a[v];if(e.startTime>=y&&e.endTime<=A)h.push(e);else if(e.startTime>A)return h}return h}},"./src/utils/time-ranges.ts":function(X,B,x){x.r(B);var M={toString:function(T){for(var R="",O=T.length,I=0;I<O;I++)R+="["+T.start(I).toFixed(3)+","+T.end(I).toFixed(3)+"]";return R}};B.default=M},"./src/utils/timescale-conversion.ts":function(X,B,x){x.r(B),x.d(B,"toTimescaleFromBase",function(){return C}),x.d(B,"toTimescaleFromScale",function(){return T}),x.d(B,"toMsFromMpegTsClock",function(){return R}),x.d(B,"toMpegTsClockFromTimescale",function(){return O});var M=9e4;function C(I,b,a,y){a===void 0&&(a=1),y===void 0&&(y=!1);var A=I*b*a;return y?Math.round(A):A}function T(I,b,a,y){return a===void 0&&(a=1),y===void 0&&(y=!1),C(I,b,1/a,y)}function R(I,b){return b===void 0&&(b=!1),C(I,1e3,1/M,b)}function O(I,b){return b===void 0&&(b=1),C(I,M,1/b)}},"./src/utils/typed-array.ts":function(X,B,x){x.r(B),x.d(B,"sliceUint8",function(){return M});function M(C,T,R){return Uint8Array.prototype.slice?C.slice(T,R):new Uint8Array(Array.prototype.slice.call(C,T,R))}},"./src/utils/vttcue.ts":function(X,B,x){x.r(B),B.default=function(){if(typeof self!="undefined"&&self.VTTCue)return self.VTTCue;var M=["","lr","rl"],C=["start","middle","end","left","right"];function T(a,y){if(typeof y!="string"||!Array.isArray(a))return!1;var A=y.toLowerCase();return~a.indexOf(A)?A:!1}function R(a){return T(M,a)}function O(a){return T(C,a)}function I(a){for(var y=arguments.length,A=new Array(y>1?y-1:0),h=1;h<y;h++)A[h-1]=arguments[h];for(var f=1;f<arguments.length;f++){var v=arguments[f];for(var t in v)a[t]=v[t]}return a}function b(a,y,A){var h=this,f={enumerable:!0};h.hasBeenReset=!1;var v="",t=!1,e=a,i=y,p=A,m=null,o="",n=!0,r="auto",g="start",c=50,d="middle",s=50,l="middle";Object.defineProperty(h,"id",I({},f,{get:function(){return v},set:function(E){v=""+E}})),Object.defineProperty(h,"pauseOnExit",I({},f,{get:function(){return t},set:function(E){t=!!E}})),Object.defineProperty(h,"startTime",I({},f,{get:function(){return e},set:function(E){if(typeof E!="number")throw new TypeError("Start time must be set to a number.");e=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",I({},f,{get:function(){return i},set:function(E){if(typeof E!="number")throw new TypeError("End time must be set to a number.");i=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",I({},f,{get:function(){return p},set:function(E){p=""+E,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",I({},f,{get:function(){return m},set:function(E){m=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",I({},f,{get:function(){return o},set:function(E){var L=R(E);if(L===!1)throw new SyntaxError("An invalid or illegal string was specified.");o=L,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",I({},f,{get:function(){return n},set:function(E){n=!!E,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",I({},f,{get:function(){return r},set:function(E){if(typeof E!="number"&&E!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");r=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",I({},f,{get:function(){return g},set:function(E){var L=O(E);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");g=L,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",I({},f,{get:function(){return c},set:function(E){if(E<0||E>100)throw new Error("Position must be between 0 and 100.");c=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",I({},f,{get:function(){return d},set:function(E){var L=O(E);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");d=L,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",I({},f,{get:function(){return s},set:function(E){if(E<0||E>100)throw new Error("Size must be between 0 and 100.");s=E,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",I({},f,{get:function(){return l},set:function(E){var L=O(E);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");l=L,this.hasBeenReset=!0}})),h.displayState=void 0}return b.prototype.getCueAsHTML=function(){var a=self.WebVTT;return a.convertCueToDOMTree(self,this.text)},b}()},"./src/utils/vttparser.ts":function(X,B,x){x.r(B),x.d(B,"parseTimeStamp",function(){return T}),x.d(B,"fixLineBreaks",function(){return y}),x.d(B,"VTTParser",function(){return A});var M=x("./src/utils/vttcue.ts"),C=function(){function h(){}var f=h.prototype;return f.decode=function(t,e){if(!t)return"";if(typeof t!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))},h}();function T(h){function f(t,e,i,p){return(t|0)*3600+(e|0)*60+(i|0)+parseFloat(p||0)}var v=h.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return v?parseFloat(v[2])>59?f(v[2],v[3],0,v[4]):f(v[1],v[2],v[3],v[4]):null}var R=function(){function h(){this.values=Object.create(null)}var f=h.prototype;return f.set=function(t,e){!this.get(t)&&e!==""&&(this.values[t]=e)},f.get=function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},f.has=function(t){return t in this.values},f.alt=function(t,e,i){for(var p=0;p<i.length;++p)if(e===i[p]){this.set(t,e);break}},f.integer=function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},f.percent=function(t,e){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(e)){var i=parseFloat(e);if(i>=0&&i<=100)return this.set(t,i),!0}return!1},h}();function O(h,f,v,t){var e=t?h.split(t):[h];for(var i in e)if(typeof e[i]=="string"){var p=e[i].split(v);if(p.length===2){var m=p[0],o=p[1];f(m,o)}}}var I=new M.default(0,0,""),b=I.align==="middle"?"middle":"center";function a(h,f,v){var t=h;function e(){var m=T(h);if(m===null)throw new Error("Malformed timestamp: "+t);return h=h.replace(/^[^\sa-zA-Z-]+/,""),m}function i(m,o){var n=new R;O(m,function(c,d){var s;switch(c){case"region":for(var l=v.length-1;l>=0;l--)if(v[l].id===d){n.set(c,v[l].region);break}break;case"vertical":n.alt(c,d,["rl","lr"]);break;case"line":s=d.split(","),n.integer(c,s[0]),n.percent(c,s[0])&&n.set("snapToLines",!1),n.alt(c,s[0],["auto"]),s.length===2&&n.alt("lineAlign",s[1],["start",b,"end"]);break;case"position":s=d.split(","),n.percent(c,s[0]),s.length===2&&n.alt("positionAlign",s[1],["start",b,"end","line-left","line-right","auto"]);break;case"size":n.percent(c,d);break;case"align":n.alt(c,d,["start",b,"end","left","right"]);break}},/:/,/\s/),o.region=n.get("region",null),o.vertical=n.get("vertical","");var r=n.get("line","auto");r==="auto"&&I.line===-1&&(r=-1),o.line=r,o.lineAlign=n.get("lineAlign","start"),o.snapToLines=n.get("snapToLines",!0),o.size=n.get("size",100),o.align=n.get("align",b);var g=n.get("position","auto");g==="auto"&&I.position===50&&(g=o.align==="start"||o.align==="left"?0:o.align==="end"||o.align==="right"?100:50),o.position=g}function p(){h=h.replace(/^\s+/,"")}if(p(),f.startTime=e(),p(),h.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+t);h=h.slice(3),p(),f.endTime=e(),p(),i(h,f)}function y(h){return h.replace(/<br(?: \/)?>/gi,`
`)}var A=function(){function h(){this.state="INITIAL",this.buffer="",this.decoder=new C,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var f=h.prototype;return f.parse=function(t){var e=this;t&&(e.buffer+=e.decoder.decode(t,{stream:!0}));function i(){var g=e.buffer,c=0;for(g=y(g);c<g.length&&g[c]!=="\r"&&g[c]!==`
`;)++c;var d=g.slice(0,c);return g[c]==="\r"&&++c,g[c]===`
`&&++c,e.buffer=g.slice(c),d}function p(g){O(g,function(c,d){},/:/)}try{var m="";if(e.state==="INITIAL"){if(!/\r\n|\n/.test(e.buffer))return this;m=i();var o=m.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!o||!o[0])throw new Error("Malformed WebVTT signature.");e.state="HEADER"}for(var n=!1;e.buffer;){if(!/\r\n|\n/.test(e.buffer))return this;switch(n?n=!1:m=i(),e.state){case"HEADER":/:/.test(m)?p(m):m||(e.state="ID");continue;case"NOTE":m||(e.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(m)){e.state="NOTE";break}if(!m)continue;if(e.cue=new M.default(0,0,""),e.state="CUE",m.indexOf("-->")===-1){e.cue.id=m;continue}case"CUE":if(!e.cue){e.state="BADCUE";continue}try{a(m,e.cue,e.regionList)}catch{e.cue=null,e.state="BADCUE";continue}e.state="CUETEXT";continue;case"CUETEXT":{var r=m.indexOf("-->")!==-1;if(!m||r&&(n=!0)){e.oncue&&e.cue&&e.oncue(e.cue),e.cue=null,e.state="ID";continue}if(e.cue===null)continue;e.cue.text&&(e.cue.text+=`
`),e.cue.text+=m}continue;case"BADCUE":m||(e.state="ID")}}}catch{e.state==="CUETEXT"&&e.cue&&e.oncue&&e.oncue(e.cue),e.cue=null,e.state=e.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},f.flush=function(){var t=this;try{if((t.cue||t.state==="HEADER")&&(t.buffer+=`

`,t.parse()),t.state==="INITIAL"||t.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(e){t.onparsingerror&&t.onparsingerror(e)}return t.onflush&&t.onflush(),this},h}()},"./src/utils/webvtt-parser.ts":function(X,B,x){x.r(B),x.d(B,"generateCueId",function(){return A}),x.d(B,"parseWebVTT",function(){return f});var M=x("./src/polyfills/number.ts"),C=x("./src/utils/vttparser.ts"),T=x("./src/demux/id3.ts"),R=x("./src/utils/timescale-conversion.ts"),O=x("./src/remux/mp4-remuxer.ts"),I=/\r\n|\n\r|\n|\r/g,b=function(t,e,i){return i===void 0&&(i=0),t.slice(i,i+e.length)===e},a=function(t){var e=parseInt(t.slice(-3)),i=parseInt(t.slice(-6,-4)),p=parseInt(t.slice(-9,-7)),m=t.length>9?parseInt(t.substring(0,t.indexOf(":"))):0;if(!Object(M.isFiniteNumber)(e)||!Object(M.isFiniteNumber)(i)||!Object(M.isFiniteNumber)(p)||!Object(M.isFiniteNumber)(m))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+t);return e+=1e3*i,e+=60*1e3*p,e+=60*60*1e3*m,e},y=function(t){for(var e=5381,i=t.length;i;)e=e*33^t.charCodeAt(--i);return(e>>>0).toString()};function A(v,t,e){return y(v.toString())+y(t.toString())+y(e)}var h=function(t,e,i){var p=t[e],m=t[p.prevCC];if(!m||!m.new&&p.new){t.ccOffset=t.presentationOffset=p.start,p.new=!1;return}for(;(o=m)!==null&&o!==void 0&&o.new;){var o;t.ccOffset+=p.start-m.start,p.new=!1,p=m,m=t[p.prevCC]}t.presentationOffset=i};function f(v,t,e,i,p,m,o,n){var r=new C.VTTParser,g=Object(T.utf8ArrayToStr)(new Uint8Array(v)).trim().replace(I,`
`).split(`
`),c=[],d=Object(R.toMpegTsClockFromTimescale)(t,e),s="00:00.000",l=0,u=0,E,L=!0;r.oncue=function(S){var k=i[p],N=i.ccOffset,F=(l-d)/9e4;k!=null&&k.new&&(u!==void 0?N=i.ccOffset=k.start:h(i,p,F)),F&&(N=F-i.presentationOffset);var K=S.endTime-S.startTime,W=Object(O.normalizePts)((S.startTime+N-u)*9e4,m*9e4)/9e4;S.startTime=Math.max(W,0),S.endTime=Math.max(W+K,0);var z=S.text.trim();S.text=decodeURIComponent(encodeURIComponent(z)),S.id||(S.id=A(S.startTime,S.endTime,z)),S.endTime>0&&c.push(S)},r.onparsingerror=function(S){E=S},r.onflush=function(){if(E){n(E);return}o(c)},g.forEach(function(S){if(L)if(b(S,"X-TIMESTAMP-MAP=")){L=!1,S.slice(16).split(",").forEach(function(k){b(k,"LOCAL:")?s=k.slice(6):b(k,"MPEGTS:")&&(l=parseInt(k.slice(7)))});try{u=a(s)/1e3}catch(k){E=k}return}else S===""&&(L=!1);r.parse(S+`
`)}),r.flush()}},"./src/utils/xhr-loader.ts":function(X,B,x){x.r(B);var M=x("./src/utils/logger.ts"),C=x("./src/loader/load-stats.ts"),T=/^age:\s*[\d.]+\s*$/m,R=function(){function O(b){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=b?b.xhrSetup:null,this.stats=new C.LoadStats,this.retryDelay=0}var I=O.prototype;return I.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},I.abortInternal=function(){var a=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),a&&(a.onreadystatechange=null,a.onprogress=null,a.readyState!==4&&(this.stats.aborted=!0,a.abort()))},I.abort=function(){var a;this.abortInternal(),(a=this.callbacks)!==null&&a!==void 0&&a.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},I.load=function(a,y,A){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=a,this.config=y,this.callbacks=A,this.retryDelay=y.retryDelay,this.loadInternal()},I.loadInternal=function(){var a=this.config,y=this.context;if(!!a){var A=this.loader=new self.XMLHttpRequest,h=this.stats;h.loading.first=0,h.loaded=0;var f=this.xhrSetup;try{if(f)try{f(A,y.url)}catch{A.open("GET",y.url,!0),f(A,y.url)}A.readyState||A.open("GET",y.url,!0);var v=this.context.headers;if(v)for(var t in v)A.setRequestHeader(t,v[t])}catch(e){this.callbacks.onError({code:A.status,text:e.message},y,A);return}y.rangeEnd&&A.setRequestHeader("Range","bytes="+y.rangeStart+"-"+(y.rangeEnd-1)),A.onreadystatechange=this.readystatechange.bind(this),A.onprogress=this.loadprogress.bind(this),A.responseType=y.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),a.timeout),A.send()}},I.readystatechange=function(){var a=this.context,y=this.loader,A=this.stats;if(!(!a||!y)){var h=y.readyState,f=this.config;if(!A.aborted&&h>=2)if(self.clearTimeout(this.requestTimeout),A.loading.first===0&&(A.loading.first=Math.max(self.performance.now(),A.loading.start)),h===4){y.onreadystatechange=null,y.onprogress=null;var v=y.status;if(v>=200&&v<300){A.loading.end=Math.max(self.performance.now(),A.loading.first);var t,e;if(a.responseType==="arraybuffer"?(t=y.response,e=t.byteLength):(t=y.responseText,e=t.length),A.loaded=A.total=e,!this.callbacks)return;var i=this.callbacks.onProgress;if(i&&i(A,a,t,y),!this.callbacks)return;var p={url:y.responseURL,data:t};this.callbacks.onSuccess(p,A,a,y)}else A.retry>=f.maxRetry||v>=400&&v<499?(M.logger.error(v+" while loading "+a.url),this.callbacks.onError({code:v,text:y.statusText},a,y)):(M.logger.warn(v+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,f.maxRetryDelay),A.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),f.timeout)}},I.loadtimeout=function(){M.logger.warn("timeout while loading "+this.context.url);var a=this.callbacks;a&&(this.abortInternal(),a.onTimeout(this.stats,this.context,this.loader))},I.loadprogress=function(a){var y=this.stats;y.loaded=a.loaded,a.lengthComputable&&(y.total=a.total)},I.getCacheAge=function(){var a=null;if(this.loader&&T.test(this.loader.getAllResponseHeaders())){var y=this.loader.getResponseHeader("age");a=y?parseFloat(y):null}return a},O}();B.default=R}}).default})})(ln);var mr=sn(ln.exports),dn={exports:{}};(function(Ne,Me){(function(X,B){Ne.exports=B()})(self,()=>(()=>{var X={1916:(C,T,R)=>{var O=R(6877);C.exports=function(I){var b,a="",y=(I=I||{}).video,A=I.options,h=O.$escape,f=I.tran,v=I.icons,t=I.index,e=O.$each;return I.$value,I.$index,a+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,b=R(1568)(y),a+=b,a+=`
    `,A.logo&&(a+=`
    <div class="dplayer-logo">
        <img src="`,a+=h(A.logo),a+=`">
    </div>
    `),a+=`
    <div class="dplayer-danmaku"`,A.danmaku&&A.danmaku.bottm&&(a+=' style="margin-bottom:',a+=h(A.danmaku.bottm),a+='"'),a+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,A.danmaku&&(a+=`
        <span class="dplayer-danloading">`,a+=h(f("danmaku-loading")),a+=`</span>
        `),a+=`
        <span class="diplayer-loading-icon">`,a+=v.loading,a+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,a+=h(f("setting")),a+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,a+=v.pallette,a+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,a+=h(f("set-danmaku-color")),a+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,a+=h(t),a+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,a+=h(f("set-danmaku-type")),a+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,a+=h(t),a+=`" value="1">
                    <span>`,a+=h(f("top")),a+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,a+=h(t),a+=`" value="0" checked>
                    <span>`,a+=h(f("rolling")),a+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,a+=h(t),a+=`" value="2">
                    <span>`,a+=h(f("bottom")),a+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,a+=h(f("input-danmaku-enter")),a+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,a+=h(f("send")),a+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,a+=v.send,a+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,a+=v.play,a+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,a+=v.volumeDown,a+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,a+=h(A.theme),a+=`;">
                        <span class="dplayer-thumb" style="background: `,a+=h(A.theme),a+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,A.live&&(a+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,a+=h(A.theme),a+=';"></span>',a+=h(f("live")),a+=`</span>
        `),a+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,A.video.quality&&(a+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,a+=h(A.video.quality[A.video.defaultQuality].name),a+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,e(A.video.quality,function(i,p){a+=`
                    <div class="dplayer-quality-item" data-index="`,a+=h(p),a+='">',a+=h(i.name),a+=`</div>
                `}),a+=`
                </div>
            </div>
        </div>
        `),a+=`
        `,A.screenshot&&(a+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,a+=h(f("screenshot")),a+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,a+=v.camera,a+=`</span>
        </div>
        `),a+=`
        `,A.airplay&&(a+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,a+=h(f("airplay")),a+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,a+=v.airplay,a+=`</span>
        </div>
        `),a+=`
        `,A.chromecast&&(a+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,a+=h(f("chromecast")),a+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,a+=v.chromecast,a+=`</span>
        </div>
        `),a+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,a+=h(f("send-danmaku")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.comment,a+=`</span>
            </button>
        </div>
        `,A.subtitle&&(a+=`
        `,typeof A.subtitle.url=="string"?(a+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,a+=h(f("hide-subs")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.subtitle,a+=`</span>
            </button>
        </div>
        `):(a+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,a+=h(f("subtitle")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.subtitle,a+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,e(A.subtitle.url,function(i,p){a+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,a+=h(i.url),a+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,a+=h(i.lang?i.name?i.name+" ("+f(i.lang)+")":f(i.lang):i.name),a+=`</span>
                        </div>
                    `}),a+=`
                </div>
            </div>
        </div>
        `),a+=`
        `),a+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,a+=h(f("setting")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.setting,a+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,a+=h(f("speed")),a+=`</span>
                        <div class="dplayer-toggle">`,a+=v.right,a+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,a+=h(f("loop")),a+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,a+=h(f("show-danmaku")),a+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,a+=h(f("unlimited-danmaku")),a+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,a+=h(f("opacity-danmaku")),a+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,e(A.playbackSpeed,function(i,p){a+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,a+=h(i),a+=`">
                            <span class="dplayer-label">`,a+=h(i===1?f("normal"):i),a+=`</span>
                        </div>
                    `}),a+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,a+=h(f("web-fullscreen")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.fullWeb,a+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,a+=h(f("fullscreen")),a+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,a+=v.full,a+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,a+=h(A.theme),a+=`">
                <span class="dplayer-thumb" style="background: `,a+=h(A.theme),a+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,A.danmaku&&(a+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),a+=`
</div>
<div class="dplayer-menu">
    `,e(A.contextmenu,function(i,p){a+=`
        <div class="dplayer-menu-item">
            <a`,i.link&&(a+=' target="_blank"'),a+=' href="',a+=h(i.link||"javascript:void(0);"),a+='">',i.key&&(a+=" ",a+=h(f(i.key))),i.text&&(a+=" ",a+=h(i.text)),a+=`</a>
        </div>
    `}),a+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,a+=v.play,a+=`
</button>`}},1568:(C,T,R)=>{var O=R(6877);C.exports=function(I){var b="",a=(I=I||{}).enableSubtitle,y=I.subtitle,A=I.current,h=I.airplay,f=I.pic,v=O.$escape,t=I.screenshot,e=I.preload,i=I.url;return a=y&&y.type==="webvtt",b+=`
<video
    class="dplayer-video `,A&&(b+="dplayer-video-current"),b+=`"
    webkit-playsinline
    `,h&&(b+=' x-webkit-airplay="allow" '),b+=`
    playsinline
    `,f&&(b+='poster="',b+=v(f),b+='"'),b+=`
    `,(t||a)&&(b+='crossorigin="anonymous"'),b+=`
    `,e&&(b+='preload="',b+=v(e),b+='"'),b+=`
    `,h?b+=`
    nosrc
    `:i&&(b+=`
    src="`,b+=v(i),b+=`"
    `),b+=`
    >
    `,h&&(b+=`
    <source src="`,b+=v(i),b+=`">
    `),b+=`
    `,a&&(b+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,b+=v(typeof y.url=="string"?y.url:y.url[y.index].url),b+=`"></track>
    `),b+`
</video>`}},3399:(C,T,R)=>{R.d(T,{Z:()=>y});var O=R(8955),I=R.n(O),b=R(8160),a=R.n(b)()(I());a.push([C.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: 2px;
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,kBAA2C;IAA3C,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const y=a},3150:(C,T,R)=>{R.d(T,{Z:()=>e});var O=R(8955),I=R.n(O),b=R(8160),a=R.n(b),y=R(3399),A=R(8431),h=R.n(A),f=new URL(R(7831),R.b),v=a()(I());v.i(y.Z);var t=h()(f);v.push([C.id,`@-webkit-keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  -webkit-animation: bezel-hide 0.5s linear;
          animation: bezel-hide 0.5s linear;
}
@-webkit-keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  -webkit-animation: my-face 5s infinite ease-in-out;
          animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  -webkit-animation: diplayer-loading-dot-fade 0.8s ease infinite;
          animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
@-webkit-keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+t+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  -webkit-animation: my-face 5s infinite ease-in-out;
          animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  -webkit-animation-name: 'danmaku';
          animation-name: 'danmaku';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  -webkit-animation-name: 'danmaku-center';
          animation-name: 'danmaku-center';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  -webkit-animation: showNotice 0.3s ease 1 forwards;
          animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  -webkit-animation: removeNotice 0.3s ease 1 forwards;
          animation: removeNotice 0.3s ease 1 forwards;
}
@-webkit-keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@-webkit-keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/video.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ADzJA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,qCAAA;UAAA,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,oCAAA;UAAA,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,yCAAA;UAAA,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AG1TQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kDAAA;UAAA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,+DAAA;UAAA,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,6BAAA;UAAA,qBAAA;AHkTpB;AIlXC;EDgEmB,6BAAA;UAAA,qBAAA;AHqTpB;AIrXC;EDgEmB,6BAAA;UAAA,qBAAA;AHwTpB;AIxXC;EDgEmB,6BAAA;UAAA,qBAAA;AH2TpB;AI3XC;EDgEmB,6BAAA;UAAA,qBAAA;AH8TpB;AI9XC;EDgEmB,6BAAA;UAAA,qBAAA;AHiUpB;AIjYC;EDgEmB,6BAAA;UAAA,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AG9UQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,kDAAA;UAAA,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AM1jCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AM9jCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kDAAA;UAAA,0CAAA;ATmqCR;AShrCA;EAiBQ,oDAAA;UAAA,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS1qCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AShrCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AI/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AJiuCJ;AIhuCI;EACI,cAAA;AJkuCR;AI9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AJguCJ;AIruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AJiuCR;AI1uCA;EAYQ,cAAA;AJiuCR;AI7uCA;EAeQ,aAAA;AJiuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const e=v},9624:C=>{var T=[];function R(b){for(var a=-1,y=0;y<T.length;y++)if(T[y].identifier===b){a=y;break}return a}function O(b,a){for(var y={},A=[],h=0;h<b.length;h++){var f=b[h],v=a.base?f[0]+a.base:f[0],t=y[v]||0,e="".concat(v," ").concat(t);y[v]=t+1;var i=R(e),p={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(i!==-1)T[i].references++,T[i].updater(p);else{var m=I(p,a);a.byIndex=h,T.splice(h,0,{identifier:e,updater:m,references:1})}A.push(e)}return A}function I(b,a){var y=a.domAPI(a);return y.update(b),function(A){if(A){if(A.css===b.css&&A.media===b.media&&A.sourceMap===b.sourceMap&&A.supports===b.supports&&A.layer===b.layer)return;y.update(b=A)}else y.remove()}}C.exports=function(b,a){var y=O(b=b||[],a=a||{});return function(A){A=A||[];for(var h=0;h<y.length;h++){var f=R(y[h]);T[f].references--}for(var v=O(A,a),t=0;t<y.length;t++){var e=R(y[t]);T[e].references===0&&(T[e].updater(),T.splice(e,1))}y=v}}},6892:C=>{var T={};C.exports=function(R,O){var I=function(b){if(T[b]===void 0){var a=document.querySelector(b);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}T[b]=a}return T[b]}(R);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(O)}},2716:C=>{C.exports=function(T){var R=document.createElement("style");return T.setAttributes(R,T.attributes),T.insert(R,T.options),R}},6359:(C,T,R)=>{C.exports=function(O){var I=R.nc;I&&O.setAttribute("nonce",I)}},6990:C=>{C.exports=function(T){var R=T.insertStyleElement(T);return{update:function(O){(function(I,b,a){var y="";a.supports&&(y+="@supports (".concat(a.supports,") {")),a.media&&(y+="@media ".concat(a.media," {"));var A=a.layer!==void 0;A&&(y+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),y+=a.css,A&&(y+="}"),a.media&&(y+="}"),a.supports&&(y+="}");var h=a.sourceMap;h&&typeof btoa!="undefined"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(h))))," */")),b.styleTagTransform(y,I,b.options)})(R,T,O)},remove:function(){(function(O){if(O.parentNode===null)return!1;O.parentNode.removeChild(O)})(R)}}}},230:C=>{C.exports=function(T,R){if(R.styleSheet)R.styleSheet.cssText=T;else{for(;R.firstChild;)R.removeChild(R.firstChild);R.appendChild(document.createTextNode(T))}}},6251:C=>{C.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:C=>{C.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:C=>{C.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(C,T,R)=>{var O=typeof self!="undefined"?self:typeof window!="undefined"?window:R.g!==void 0?R.g:{},I=Object.create(O),b=/["&'<>]/;function a(y){return typeof y!="string"&&(y=y==null?"":typeof y=="function"?a(y.call(y)):JSON.stringify(y)),y}I.$escape=function(y){return function(A){var h=""+A,f=b.exec(h);if(!f)return A;var v="",t=void 0,e=void 0,i=void 0;for(t=f.index,e=0;t<h.length;t++){switch(h.charCodeAt(t)){case 34:i="&#34;";break;case 38:i="&#38;";break;case 39:i="&#39;";break;case 60:i="&#60;";break;case 62:i="&#62;";break;default:continue}e!==t&&(v+=h.substring(e,t)),e=t+1,v+=i}return e!==t?v+h.substring(e,t):v}(a(y))},I.$each=function(y,A){if(Array.isArray(y))for(var h=0,f=y.length;h<f;h++)A(y[h],h);else for(var v in y)A(y[v],v)},C.exports=I},6877:(C,T,R)=>{C.exports=R(9959)},6208:(C,T,R)=>{C.exports=R(4568)},8170:(C,T,R)=>{var O=R(7201),I=R(9095),b=R(8416),a=R(6374),y=R(5967),A=R(5032),h=R(1224),f=R(4033),v=R(1766),t=R(8832),e=R(8699);C.exports=function(i){return new Promise(function(p,m){var o,n=i.data,r=i.headers,g=i.responseType;function c(){i.cancelToken&&i.cancelToken.unsubscribe(o),i.signal&&i.signal.removeEventListener("abort",o)}O.isFormData(n)&&O.isStandardBrowserEnv()&&delete r["Content-Type"];var d=new XMLHttpRequest;if(i.auth){var s=i.auth.username||"",l=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";r.Authorization="Basic "+btoa(s+":"+l)}var u=y(i.baseURL,i.url);function E(){if(d){var k="getAllResponseHeaders"in d?A(d.getAllResponseHeaders()):null,N={data:g&&g!=="text"&&g!=="json"?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:k,config:i,request:d};I(function(F){p(F),c()},function(F){m(F),c()},N),d=null}}if(d.open(i.method.toUpperCase(),a(u,i.params,i.paramsSerializer),!0),d.timeout=i.timeout,"onloadend"in d?d.onloadend=E:d.onreadystatechange=function(){d&&d.readyState===4&&(d.status!==0||d.responseURL&&d.responseURL.indexOf("file:")===0)&&setTimeout(E)},d.onabort=function(){d&&(m(new v("Request aborted",v.ECONNABORTED,i,d)),d=null)},d.onerror=function(){m(new v("Network Error",v.ERR_NETWORK,i,d,d)),d=null},d.ontimeout=function(){var k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded",N=i.transitional||f;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),m(new v(k,N.clarifyTimeoutError?v.ETIMEDOUT:v.ECONNABORTED,i,d)),d=null},O.isStandardBrowserEnv()){var L=(i.withCredentials||h(u))&&i.xsrfCookieName?b.read(i.xsrfCookieName):void 0;L&&(r[i.xsrfHeaderName]=L)}"setRequestHeader"in d&&O.forEach(r,function(k,N){n===void 0&&N.toLowerCase()==="content-type"?delete r[N]:d.setRequestHeader(N,k)}),O.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),g&&g!=="json"&&(d.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&d.addEventListener("progress",i.onDownloadProgress),typeof i.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",i.onUploadProgress),(i.cancelToken||i.signal)&&(o=function(k){d&&(m(!k||k&&k.type?new t:k),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(o),i.signal&&(i.signal.aborted?o():i.signal.addEventListener("abort",o))),n||(n=null);var S=e(u);S&&["http","https","file"].indexOf(S)===-1?m(new v("Unsupported protocol "+S+":",v.ERR_BAD_REQUEST,i)):d.send(n)})}},4568:(C,T,R)=>{var O=R(7201),I=R(5305),b=R(2275),a=R(9834),y=function A(h){var f=new b(h),v=I(b.prototype.request,f);return O.extend(v,b.prototype,f),O.extend(v,f),v.create=function(t){return A(a(h,t))},v}(R(6339));y.Axios=b,y.CanceledError=R(8832),y.CancelToken=R(5027),y.isCancel=R(1893),y.VERSION=R(4316).version,y.toFormData=R(6615),y.AxiosError=R(1766),y.Cancel=y.CanceledError,y.all=function(A){return Promise.all(A)},y.spread=R(3282),y.isAxiosError=R(3319),C.exports=y,C.exports.default=y},5027:(C,T,R)=>{var O=R(8832);function I(b){if(typeof b!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(A){a=A});var y=this;this.promise.then(function(A){if(y._listeners){var h,f=y._listeners.length;for(h=0;h<f;h++)y._listeners[h](A);y._listeners=null}}),this.promise.then=function(A){var h,f=new Promise(function(v){y.subscribe(v),h=v}).then(A);return f.cancel=function(){y.unsubscribe(h)},f},b(function(A){y.reason||(y.reason=new O(A),a(y.reason))})}I.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},I.prototype.subscribe=function(b){this.reason?b(this.reason):this._listeners?this._listeners.push(b):this._listeners=[b]},I.prototype.unsubscribe=function(b){if(this._listeners){var a=this._listeners.indexOf(b);a!==-1&&this._listeners.splice(a,1)}},I.source=function(){var b;return{token:new I(function(a){b=a}),cancel:b}},C.exports=I},8832:(C,T,R)=>{var O=R(1766);function I(b){O.call(this,b==null?"canceled":b,O.ERR_CANCELED),this.name="CanceledError"}R(7201).inherits(I,O,{__CANCEL__:!0}),C.exports=I},1893:C=>{C.exports=function(T){return!(!T||!T.__CANCEL__)}},2275:(C,T,R)=>{var O=R(7201),I=R(6374),b=R(6808),a=R(7313),y=R(9834),A=R(5967),h=R(9712),f=h.validators;function v(t){this.defaults=t,this.interceptors={request:new b,response:new b}}v.prototype.request=function(t,e){typeof t=="string"?(e=e||{}).url=t:e=t||{},(e=y(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var i=e.transitional;i!==void 0&&h.assertOptions(i,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var p=[],m=!0;this.interceptors.request.forEach(function(s){typeof s.runWhen=="function"&&s.runWhen(e)===!1||(m=m&&s.synchronous,p.unshift(s.fulfilled,s.rejected))});var o,n=[];if(this.interceptors.response.forEach(function(s){n.push(s.fulfilled,s.rejected)}),!m){var r=[a,void 0];for(Array.prototype.unshift.apply(r,p),r=r.concat(n),o=Promise.resolve(e);r.length;)o=o.then(r.shift(),r.shift());return o}for(var g=e;p.length;){var c=p.shift(),d=p.shift();try{g=c(g)}catch(s){d(s);break}}try{o=a(g)}catch(s){return Promise.reject(s)}for(;n.length;)o=o.then(n.shift(),n.shift());return o},v.prototype.getUri=function(t){t=y(this.defaults,t);var e=A(t.baseURL,t.url);return I(e,t.params,t.paramsSerializer)},O.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(e,i){return this.request(y(i||{},{method:t,url:e,data:(i||{}).data}))}}),O.forEach(["post","put","patch"],function(t){function e(i){return function(p,m,o){return this.request(y(o||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}v.prototype[t]=e(),v.prototype[t+"Form"]=e(!0)}),C.exports=v},1766:(C,T,R)=>{var O=R(7201);function I(y,A,h,f,v){Error.call(this),this.message=y,this.name="AxiosError",A&&(this.code=A),h&&(this.config=h),f&&(this.request=f),v&&(this.response=v)}O.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var b=I.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(y){a[y]={value:y}}),Object.defineProperties(I,a),Object.defineProperty(b,"isAxiosError",{value:!0}),I.from=function(y,A,h,f,v,t){var e=Object.create(b);return O.toFlatObject(y,e,function(i){return i!==Error.prototype}),I.call(e,y.message,A,h,f,v),e.name=y.name,t&&Object.assign(e,t),e},C.exports=I},6808:(C,T,R)=>{var O=R(7201);function I(){this.handlers=[]}I.prototype.use=function(b,a,y){return this.handlers.push({fulfilled:b,rejected:a,synchronous:!!y&&y.synchronous,runWhen:y?y.runWhen:null}),this.handlers.length-1},I.prototype.eject=function(b){this.handlers[b]&&(this.handlers[b]=null)},I.prototype.forEach=function(b){O.forEach(this.handlers,function(a){a!==null&&b(a)})},C.exports=I},5967:(C,T,R)=>{var O=R(724),I=R(4669);C.exports=function(b,a){return b&&!O(a)?I(b,a):a}},7313:(C,T,R)=>{var O=R(7201),I=R(6431),b=R(1893),a=R(6339),y=R(8832);function A(h){if(h.cancelToken&&h.cancelToken.throwIfRequested(),h.signal&&h.signal.aborted)throw new y}C.exports=function(h){return A(h),h.headers=h.headers||{},h.data=I.call(h,h.data,h.headers,h.transformRequest),h.headers=O.merge(h.headers.common||{},h.headers[h.method]||{},h.headers),O.forEach(["delete","get","head","post","put","patch","common"],function(f){delete h.headers[f]}),(h.adapter||a.adapter)(h).then(function(f){return A(h),f.data=I.call(h,f.data,f.headers,h.transformResponse),f},function(f){return b(f)||(A(h),f&&f.response&&(f.response.data=I.call(h,f.response.data,f.response.headers,h.transformResponse))),Promise.reject(f)})}},9834:(C,T,R)=>{var O=R(7201);C.exports=function(I,b){b=b||{};var a={};function y(e,i){return O.isPlainObject(e)&&O.isPlainObject(i)?O.merge(e,i):O.isPlainObject(i)?O.merge({},i):O.isArray(i)?i.slice():i}function A(e){return O.isUndefined(b[e])?O.isUndefined(I[e])?void 0:y(void 0,I[e]):y(I[e],b[e])}function h(e){if(!O.isUndefined(b[e]))return y(void 0,b[e])}function f(e){return O.isUndefined(b[e])?O.isUndefined(I[e])?void 0:y(void 0,I[e]):y(void 0,b[e])}function v(e){return e in b?y(I[e],b[e]):e in I?y(void 0,I[e]):void 0}var t={url:h,method:h,data:h,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:v};return O.forEach(Object.keys(I).concat(Object.keys(b)),function(e){var i=t[e]||A,p=i(e);O.isUndefined(p)&&i!==v||(a[e]=p)}),a}},9095:(C,T,R)=>{var O=R(1766);C.exports=function(I,b,a){var y=a.config.validateStatus;a.status&&y&&!y(a.status)?b(new O("Request failed with status code "+a.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a)):I(a)}},6431:(C,T,R)=>{var O=R(7201),I=R(6339);C.exports=function(b,a,y){var A=this||I;return O.forEach(y,function(h){b=h.call(A,b,a)}),b}},6339:(C,T,R)=>{var O=R(7201),I=R(5227),b=R(1766),a=R(4033),y=R(6615),A={"Content-Type":"application/x-www-form-urlencoded"};function h(t,e){!O.isUndefined(t)&&O.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var f,v={transitional:a,adapter:((typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(f=R(8170)),f),transformRequest:[function(t,e){if(I(e,"Accept"),I(e,"Content-Type"),O.isFormData(t)||O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return h(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var i,p=O.isObject(t),m=e&&e["Content-Type"];if((i=O.isFileList(t))||p&&m==="multipart/form-data"){var o=this.env&&this.env.FormData;return y(i?{"files[]":t}:t,o&&new o)}return p||m==="application/json"?(h(e,"application/json"),function(n,r,g){if(O.isString(n))try{return(0,JSON.parse)(n),O.trim(n)}catch(c){if(c.name!=="SyntaxError")throw c}return(0,JSON.stringify)(n)}(t)):t}],transformResponse:[function(t){var e=this.transitional||v.transitional,i=e&&e.silentJSONParsing,p=e&&e.forcedJSONParsing,m=!i&&this.responseType==="json";if(m||p&&O.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(m)throw o.name==="SyntaxError"?b.from(o,b.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R(3997)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};O.forEach(["delete","get","head"],function(t){v.headers[t]={}}),O.forEach(["post","put","patch"],function(t){v.headers[t]=O.merge(A)}),C.exports=v},4033:C=>{C.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:C=>{C.exports={version:"0.27.2"}},5305:C=>{C.exports=function(T,R){return function(){for(var O=new Array(arguments.length),I=0;I<O.length;I++)O[I]=arguments[I];return T.apply(R,O)}}},6374:(C,T,R)=>{var O=R(7201);function I(b){return encodeURIComponent(b).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}C.exports=function(b,a,y){if(!a)return b;var A;if(y)A=y(a);else if(O.isURLSearchParams(a))A=a.toString();else{var h=[];O.forEach(a,function(v,t){v!=null&&(O.isArray(v)?t+="[]":v=[v],O.forEach(v,function(e){O.isDate(e)?e=e.toISOString():O.isObject(e)&&(e=JSON.stringify(e)),h.push(I(t)+"="+I(e))}))}),A=h.join("&")}if(A){var f=b.indexOf("#");f!==-1&&(b=b.slice(0,f)),b+=(b.indexOf("?")===-1?"?":"&")+A}return b}},4669:C=>{C.exports=function(T,R){return R?T.replace(/\/+$/,"")+"/"+R.replace(/^\/+/,""):T}},8416:(C,T,R)=>{var O=R(7201);C.exports=O.isStandardBrowserEnv()?{write:function(I,b,a,y,A,h){var f=[];f.push(I+"="+encodeURIComponent(b)),O.isNumber(a)&&f.push("expires="+new Date(a).toGMTString()),O.isString(y)&&f.push("path="+y),O.isString(A)&&f.push("domain="+A),h===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(I){var b=document.cookie.match(new RegExp("(^|;\\s*)("+I+")=([^;]*)"));return b?decodeURIComponent(b[3]):null},remove:function(I){this.write(I,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:C=>{C.exports=function(T){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(T)}},3319:(C,T,R)=>{var O=R(7201);C.exports=function(I){return O.isObject(I)&&I.isAxiosError===!0}},1224:(C,T,R)=>{var O=R(7201);C.exports=O.isStandardBrowserEnv()?function(){var I,b=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function y(A){var h=A;return b&&(a.setAttribute("href",h),h=a.href),a.setAttribute("href",h),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return I=y(window.location.href),function(A){var h=O.isString(A)?y(A):A;return h.protocol===I.protocol&&h.host===I.host}}():function(){return!0}},5227:(C,T,R)=>{var O=R(7201);C.exports=function(I,b){O.forEach(I,function(a,y){y!==b&&y.toUpperCase()===b.toUpperCase()&&(I[b]=a,delete I[y])})}},3997:C=>{C.exports=null},5032:(C,T,R)=>{var O=R(7201),I=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];C.exports=function(b){var a,y,A,h={};return b&&O.forEach(b.split(`
`),function(f){if(A=f.indexOf(":"),a=O.trim(f.substr(0,A)).toLowerCase(),y=O.trim(f.substr(A+1)),a){if(h[a]&&I.indexOf(a)>=0)return;h[a]=a==="set-cookie"?(h[a]?h[a]:[]).concat([y]):h[a]?h[a]+", "+y:y}}),h}},8699:C=>{C.exports=function(T){var R=/^([-+\w]{1,25})(:?\/\/|:)/.exec(T);return R&&R[1]||""}},3282:C=>{C.exports=function(T){return function(R){return T.apply(null,R)}}},6615:(C,T,R)=>{function O(b){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},O(b)}var I=R(7201);C.exports=function(b,a){a=a||new FormData;var y=[];function A(h){return h===null?"":I.isDate(h)?h.toISOString():I.isArrayBuffer(h)||I.isTypedArray(h)?typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}return function h(f,v){if(I.isPlainObject(f)||I.isArray(f)){if(y.indexOf(f)!==-1)throw Error("Circular reference detected in "+v);y.push(f),I.forEach(f,function(t,e){if(!I.isUndefined(t)){var i,p=v?v+"."+e:e;if(t&&!v&&O(t)==="object"){if(I.endsWith(e,"{}"))t=JSON.stringify(t);else if(I.endsWith(e,"[]")&&(i=I.toArray(t)))return void i.forEach(function(m){!I.isUndefined(m)&&a.append(p,A(m))})}h(t,p)}}),y.pop()}else a.append(v,A(f))}(b),a}},9712:(C,T,R)=>{function O(A){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(A)}var I=R(4316).version,b=R(1766),a={};["object","boolean","number","function","string","symbol"].forEach(function(A,h){a[A]=function(f){return O(f)===A||"a"+(h<1?"n ":" ")+A}});var y={};a.transitional=function(A,h,f){function v(t,e){return"[Axios v"+I+"] Transitional option '"+t+"'"+e+(f?". "+f:"")}return function(t,e,i){if(A===!1)throw new b(v(e," has been removed"+(h?" in "+h:"")),b.ERR_DEPRECATED);return h&&!y[e]&&(y[e]=!0,console.warn(v(e," has been deprecated since v"+h+" and will be removed in the near future"))),!A||A(t,e,i)}},C.exports={assertOptions:function(A,h,f){if(O(A)!=="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var v=Object.keys(A),t=v.length;t-- >0;){var e=v[t],i=h[e];if(i){var p=A[e],m=p===void 0||i(p,e,A);if(m!==!0)throw new b("option "+e+" must be "+m,b.ERR_BAD_OPTION_VALUE)}else if(f!==!0)throw new b("Unknown option "+e,b.ERR_BAD_OPTION)}},validators:a}},7201:(C,T,R)=>{function O(s){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},O(s)}var I,b=R(5305),a=Object.prototype.toString,y=(I=Object.create(null),function(s){var l=a.call(s);return I[l]||(I[l]=l.slice(8,-1).toLowerCase())});function A(s){return s=s.toLowerCase(),function(l){return y(l)===s}}function h(s){return Array.isArray(s)}function f(s){return s===void 0}var v=A("ArrayBuffer");function t(s){return s!==null&&O(s)==="object"}function e(s){if(y(s)!=="object")return!1;var l=Object.getPrototypeOf(s);return l===null||l===Object.prototype}var i=A("Date"),p=A("File"),m=A("Blob"),o=A("FileList");function n(s){return a.call(s)==="[object Function]"}var r=A("URLSearchParams");function g(s,l){if(s!=null)if(O(s)!=="object"&&(s=[s]),h(s))for(var u=0,E=s.length;u<E;u++)l.call(null,s[u],u,s);else for(var L in s)Object.prototype.hasOwnProperty.call(s,L)&&l.call(null,s[L],L,s)}var c,d=(c=typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array),function(s){return c&&s instanceof c});C.exports={isArray:h,isArrayBuffer:v,isBuffer:function(s){return s!==null&&!f(s)&&s.constructor!==null&&!f(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)},isFormData:function(s){var l="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||a.call(s)===l||n(s.toString)&&s.toString()===l)},isArrayBufferView:function(s){return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?ArrayBuffer.isView(s):s&&s.buffer&&v(s.buffer)},isString:function(s){return typeof s=="string"},isNumber:function(s){return typeof s=="number"},isObject:t,isPlainObject:e,isUndefined:f,isDate:i,isFile:p,isBlob:m,isFunction:n,isStream:function(s){return t(s)&&n(s.pipe)},isURLSearchParams:r,isStandardBrowserEnv:function(){return(typeof navigator=="undefined"||navigator.product!=="ReactNative"&&navigator.product!=="NativeScript"&&navigator.product!=="NS")&&typeof window!="undefined"&&typeof document!="undefined"},forEach:g,merge:function s(){var l={};function u(S,k){e(l[k])&&e(S)?l[k]=s(l[k],S):e(S)?l[k]=s({},S):h(S)?l[k]=S.slice():l[k]=S}for(var E=0,L=arguments.length;E<L;E++)g(arguments[E],u);return l},extend:function(s,l,u){return g(l,function(E,L){s[L]=u&&typeof E=="function"?b(E,u):E}),s},trim:function(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")},stripBOM:function(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s},inherits:function(s,l,u,E){s.prototype=Object.create(l.prototype,E),s.prototype.constructor=s,u&&Object.assign(s.prototype,u)},toFlatObject:function(s,l,u){var E,L,S,k={};l=l||{};do{for(L=(E=Object.getOwnPropertyNames(s)).length;L-- >0;)k[S=E[L]]||(l[S]=s[S],k[S]=!0);s=Object.getPrototypeOf(s)}while(s&&(!u||u(s,l))&&s!==Object.prototype);return l},kindOf:y,kindOfTest:A,endsWith:function(s,l,u){s=String(s),(u===void 0||u>s.length)&&(u=s.length),u-=l.length;var E=s.indexOf(l,u);return E!==-1&&E===u},toArray:function(s){if(!s)return null;var l=s.length;if(f(l))return null;for(var u=new Array(l);l-- >0;)u[l]=s[l];return u},isTypedArray:d,isFileList:o}},8160:C=>{C.exports=function(T){var R=[];return R.toString=function(){return this.map(function(O){var I="",b=O[5]!==void 0;return O[4]&&(I+="@supports (".concat(O[4],") {")),O[2]&&(I+="@media ".concat(O[2]," {")),b&&(I+="@layer".concat(O[5].length>0?" ".concat(O[5]):""," {")),I+=T(O),b&&(I+="}"),O[2]&&(I+="}"),O[4]&&(I+="}"),I}).join("")},R.i=function(O,I,b,a,y){typeof O=="string"&&(O=[[null,O,void 0]]);var A={};if(b)for(var h=0;h<this.length;h++){var f=this[h][0];f!=null&&(A[f]=!0)}for(var v=0;v<O.length;v++){var t=[].concat(O[v]);b&&A[t[0]]||(y!==void 0&&(t[5]===void 0||(t[1]="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {").concat(t[1],"}")),t[5]=y),I&&(t[2]&&(t[1]="@media ".concat(t[2]," {").concat(t[1],"}")),t[2]=I),a&&(t[4]?(t[1]="@supports (".concat(t[4],") {").concat(t[1],"}"),t[4]=a):t[4]="".concat(a)),R.push(t))}},R}},8431:C=>{C.exports=function(T,R){return R||(R={}),T&&(T=String(T.__esModule?T.default:T),/^['"].*['"]$/.test(T)&&(T=T.slice(1,-1)),R.hash&&(T+=R.hash),/["'() \t\n]|(%20)/.test(T)||R.needQuotes?'"'.concat(T.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):T)}},8955:C=>{C.exports=function(T){var R=T[1],O=T[3];if(!O)return R;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(O)))),b="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),a="/*# ".concat(b," */"),y=O.sources.map(function(A){return"/*# sourceURL=".concat(O.sourceRoot||"").concat(A," */")});return[R].concat(y).concat([a]).join(`
`)}return[R].join(`
`)}},7831:C=>{C.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},B={};function x(C){var T=B[C];if(T!==void 0)return T.exports;var R=B[C]={id:C,exports:{}};return X[C](R,R.exports,x),R.exports}x.m=X,x.n=C=>{var T=C&&C.__esModule?()=>C.default:()=>C;return x.d(T,{a:T}),T},x.d=(C,T)=>{for(var R in T)x.o(T,R)&&!x.o(C,R)&&Object.defineProperty(C,R,{enumerable:!0,get:T[R]})},x.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),x.o=(C,T)=>Object.prototype.hasOwnProperty.call(C,T),x.b=document.baseURI||self.location.href,x.nc=void 0;var M={};return(()=>{x.d(M,{default:()=>er});var C=x(9624),T=x.n(C),R=x(6990),O=x.n(R),I=x(6892),b=x.n(I),a=x(6359),y=x.n(a),A=x(2716),h=x.n(A),f=x(230),v=x.n(f),t=x(3150),e={};e.styleTagTransform=v(),e.setAttributes=y(),e.insert=b().bind(null,"head"),e.domAPI=O(),e.insertStyleElement=h(),T()(t.Z,e),t.Z&&t.Z.locals&&t.Z.locals;function i(_){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},i(_)}function p(_){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},p(_)}var m=setTimeout;function o(_){return Boolean(_&&_.length!==void 0)}function n(){}function r(_){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if(typeof _!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(_,this)}function g(_,U){for(;_._state===3;)_=_._value;_._state!==0?(_._handled=!0,r._immediateFn(function(){var w=_._state===1?U.onFulfilled:U.onRejected;if(w!==null){var D;try{D=w(_._value)}catch(P){return void d(U.promise,P)}c(U.promise,D)}else(_._state===1?c:d)(U.promise,_._value)})):_._deferreds.push(U)}function c(_,U){try{if(U===_)throw new TypeError("A promise cannot be resolved with itself.");if(U&&(p(U)==="object"||typeof U=="function")){var w=U.then;if(U instanceof r)return _._state=3,_._value=U,void s(_);if(typeof w=="function")return void u((D=w,P=U,function(){D.apply(P,arguments)}),_)}_._state=1,_._value=U,s(_)}catch(j){d(_,j)}var D,P}function d(_,U){_._state=2,_._value=U,s(_)}function s(_){_._state===2&&_._deferreds.length===0&&r._immediateFn(function(){_._handled||r._unhandledRejectionFn(_._value)});for(var U=0,w=_._deferreds.length;U<w;U++)g(_,_._deferreds[U]);_._deferreds=null}function l(_,U,w){this.onFulfilled=typeof _=="function"?_:null,this.onRejected=typeof U=="function"?U:null,this.promise=w}function u(_,U){var w=!1;try{_(function(D){w||(w=!0,c(U,D))},function(D){w||(w=!0,d(U,D))})}catch(D){if(w)return;w=!0,d(U,D)}}r.prototype.catch=function(_){return this.then(null,_)},r.prototype.then=function(_,U){var w=new this.constructor(n);return g(this,new l(_,U,w)),w},r.prototype.finally=function(_){var U=this.constructor;return this.then(function(w){return U.resolve(_()).then(function(){return w})},function(w){return U.resolve(_()).then(function(){return U.reject(w)})})},r.all=function(_){return new r(function(U,w){if(!o(_))return w(new TypeError("Promise.all accepts an array"));var D=Array.prototype.slice.call(_);if(D.length===0)return U([]);var P=D.length;function j(V,J){try{if(J&&(p(J)==="object"||typeof J=="function")){var te=J.then;if(typeof te=="function")return void te.call(J,function(de){j(V,de)},w)}D[V]=J,--P==0&&U(D)}catch(de){w(de)}}for(var G=0;G<D.length;G++)j(G,D[G])})},r.allSettled=function(_){return new this(function(U,w){if(!_||_.length===void 0)return w(new TypeError(i(_)+" "+_+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var D=Array.prototype.slice.call(_);if(D.length===0)return U([]);var P=D.length;function j(V,J){if(J&&(i(J)==="object"||typeof J=="function")){var te=J.then;if(typeof te=="function")return void te.call(J,function(de){j(V,de)},function(de){D[V]={status:"rejected",reason:de},--P==0&&U(D)})}D[V]={status:"fulfilled",value:J},--P==0&&U(D)}for(var G=0;G<D.length;G++)j(G,D[G])})},r.resolve=function(_){return _&&p(_)==="object"&&_.constructor===r?_:new r(function(U){U(_)})},r.reject=function(_){return new r(function(U,w){w(_)})},r.race=function(_){return new r(function(U,w){if(!o(_))return w(new TypeError("Promise.race accepts an array"));for(var D=0,P=_.length;D<P;D++)r.resolve(_[D]).then(U,w)})},r._immediateFn=typeof setImmediate=="function"&&function(_){setImmediate(_)}||function(_){m(_,0)},r._unhandledRejectionFn=function(_){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",_)};const E=r;var L=/mobile/i.test(window.navigator.userAgent);const S={secondToTime:function(_){if((_=_||0)===0||_===1/0||_.toString()==="NaN")return"00:00";var U=Math.floor(_/3600),w=Math.floor((_-3600*U)/60),D=Math.floor(_-3600*U-60*w);return(U>0?[U,w,D]:[w,D]).map(function(P){return P<10?"0"+P:""+P}).join(":")},getElementViewLeft:function(_){var U=_.offsetLeft,w=_.offsetParent,D=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;w!==null&&w!==_;)U+=w.offsetLeft,w=w.offsetParent;else for(;w!==null;)U+=w.offsetLeft,w=w.offsetParent;return U-D},getBoundingClientRectViewLeft:function(_){var U=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(_.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var w=document.createElement("div");w.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(w),this.getBoundingClientRectViewLeft.offset=-w.getBoundingClientRect().top-U,document.body.removeChild(w),w=null}var D=_.getBoundingClientRect(),P=this.getBoundingClientRectViewLeft.offset;return D.left+P}return this.getElementViewLeft(_)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(_){var U=_.left,w=U===void 0?0:U,D=_.top,P=D===void 0?0:D;this.isFirefox?(document.documentElement.scrollLeft=w,document.documentElement.scrollTop=P):window.scrollTo(w,P)},isMobile:L,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(_,U){localStorage.setItem(_,U)},get:function(_){return localStorage.getItem(_)}},nameMap:{dragStart:L?"touchstart":"mousedown",dragMove:L?"touchmove":"mousemove",dragEnd:L?"touchend":"mouseup"},color2Number:function(_){return _[0]==="#"&&(_=_.substr(1)),_.length===3&&(_="".concat(_[0]).concat(_[0]).concat(_[1]).concat(_[1]).concat(_[2]).concat(_[2])),parseInt(_,16)+0&16777215},number2Color:function(_){return"#"+("00000"+_.toString(16)).slice(-6)},number2Type:function(_){switch(_){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var k=x(6208),N=x.n(k);const F={send:function(_){N().post(_.url,_.data).then(function(U){var w=U.data;w&&w.code===0?_.success&&_.success(w):_.error&&_.error(w&&w.msg)}).catch(function(U){console.error(U),_.error&&_.error()})},read:function(_){N().get(_.url).then(function(U){var w=U.data;w&&w.code===0?_.success&&_.success(w.data.map(function(D){return{time:D[0],type:D[1],color:D[2],author:D[3],text:D[4]}})):_.error&&_.error(w&&w.msg)}).catch(function(U){console.error(U),_.error&&_.error()})}};function K(_){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},K(_)}function W(_){var U=this;this.lang=_,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(w){return w=w.toLowerCase(),H[U.lang]&&H[U.lang][w]?H[U.lang][w]:H[U.fallbackLang]&&H[U.fallbackLang][w]?H[U.fallbackLang][w]:z[w]?z[w]:w}}var z={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},H={en:z,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},Y=x(730),Q=x.n(Y),Z=x(6074),$=x.n(Z),ee=x(4437),ie=x.n(ee),ae=x(2644),q=x.n(ae),oe=x(1324),ne=x.n(oe),re=x(4574),ue=x.n(re),le=x(1415),fe=x.n(le),ye=x(5934),pe=x.n(ye),Te=x(1428),Ee=x.n(Te),Ae=x(2807),Ce=x.n(Ae),Le=x(338),Re=x.n(Le),Ie=x(2254),Se=x.n(Ie),ke=x(1965),De=x.n(ke),Fe=x(8113),ge=x.n(Fe),be=x(6251),Pe=x.n(be),ve=x(8410),xe=x.n(ve),Oe=x(4182),Ue=x.n(Oe),je=x(3193),Ye=x.n(je);const me={play:Q(),pause:$(),volumeUp:ie(),volumeDown:q(),volumeOff:ne(),full:ue(),fullWeb:fe(),setting:pe(),right:Ee(),comment:Ce(),commentOff:Re(),send:Se(),pallette:De(),camera:ge(),subtitle:xe(),loading:Ue(),airplay:Pe(),chromecast:Ye()};var nt=x(1916),Ge=x.n(nt);function we(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Ve=function(){function _(P){(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.container=P.container,this.options=P.options,this.index=P.index,this.tran=P.tran,this.init()}var U,w,D;return U=_,D=[{key:"NewNotice",value:function(P,j){var G=document.createElement("div");return G.classList.add("dplayer-notice"),G.style.opacity=j,G.innerText=P,G}}],(w=[{key:"init",value:function(){this.container.innerHTML=Ge()({options:this.options,index:this.index,tran:this.tran,icons:me,mobile:S.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!S.isSafari||S.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&we(U.prototype,w),D&&we(U,D),Object.defineProperty(U,"prototype",{writable:!1}),_}();const Ke=Ve;function Qe(_){return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},Qe(_)}function rt(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var bt=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.options=D,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var U,w;return U=_,w=[{key:"load",value:function(){var D,P=this;D=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var j=(this.options.api.addition||[]).slice(0);j.push(D),this.events&&this.events.trigger("danmaku_load_start",j),this._readAllEndpoints(j,function(G){P.dan=[].concat.apply([],G).sort(function(V,J){return V.time-J.time}),window.requestAnimationFrame(function(){P.frame()}),P.options.callback(),P.events&&P.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(D){this.options.api=D,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(D,P){for(var j=this,G=[],V=0,J=function(de){j.options.apiBackend.read({url:D[de],success:function(he){G[de]=he,++V===D.length&&P(G)},error:function(he){j.options.error(he||j.options.tran("danmaku-failed")),G[de]=[],++V===D.length&&P(G)}})},te=0;te<D.length;++te)J(te)}},{key:"send",value:function(D,P){var j=this,G={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:D.text,color:D.color,type:D.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:G,success:P,error:function(J){j.options.error(J||j.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,G),this.danIndex++;var V={text:this.htmlEncode(G.text),color:G.color,type:G.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(V),this.events&&this.events.trigger("danmaku_send",G)}},{key:"frame",value:function(){var D=this;if(this.dan.length&&!this.paused&&this.showing){for(var P=this.dan[this.danIndex],j=[];P&&this.options.time()>parseFloat(P.time);)j.push(P),P=this.dan[++this.danIndex];this.draw(j)}window.requestAnimationFrame(function(){D.frame()})}},{key:"opacity",value:function(D){if(D!==void 0){for(var P=this.container.getElementsByClassName("dplayer-danmaku-item"),j=0;j<P.length;j++)P[j].style.opacity=D;this._opacity=D,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(D){var P=this;if(this.showing){var j=this.options.height,G=this.container.offsetWidth,V=this.container.offsetHeight,J=parseInt(V/j),te=function(se){var ce=se.offsetWidth||parseInt(se.style.width),qe=se.getBoundingClientRect().right||P.container.getBoundingClientRect().right+ce;return P.container.getBoundingClientRect().right-qe},de=function(se){return(G+se)/5},he=function(se,ce,qe){for(var ze=G/de(qe),tr=function(Je){var et=P.danTunnel[ce][Je+""];if(!et||!et.length)return P.danTunnel[ce][Je+""]=[se],se.addEventListener("animationend",function(){P.danTunnel[ce][Je+""].splice(0,1)}),{v:Je%J};if(ce!=="right")return"continue";for(var ot=0;ot<et.length;ot++){var nn=te(et[ot])-10;if(nn<=G-ze*de(parseInt(et[ot].style.width))||nn<=0)break;if(ot===et.length-1)return P.danTunnel[ce][Je+""].push(se),se.addEventListener("animationend",function(){P.danTunnel[ce][Je+""].splice(0,1)}),{v:Je%J}}},Ft=0;P.unlimited||Ft<J;Ft++){var Ut=tr(Ft);if(Ut!=="continue"&&Qe(Ut)==="object")return Ut.v}return-1};Object.prototype.toString.call(D)!=="[object Array]"&&(D=[D]);for(var We=document.createDocumentFragment(),_e=function(se){D[se].type=S.number2Type(D[se].type),D[se].color||(D[se].color=16777215);var ce=document.createElement("div");ce.classList.add("dplayer-danmaku-item"),ce.classList.add("dplayer-danmaku-".concat(D[se].type)),D[se].border?ce.innerHTML='<span style="border:'.concat(D[se].border,'">').concat(D[se].text,"</span>"):ce.innerHTML=D[se].text,ce.style.opacity=P._opacity,ce.style.color=S.number2Color(D[se].color),ce.addEventListener("animationend",function(){P.container.removeChild(ce)});var qe=P._measure(D[se].text),ze=void 0;switch(D[se].type){case"right":(ze=he(ce,D[se].type,qe))>=0&&(ce.style.width=qe+1+"px",ce.style.top=j*ze+"px",ce.style.transform="translateX(-".concat(G,"px)"));break;case"top":(ze=he(ce,D[se].type))>=0&&(ce.style.top=j*ze+"px");break;case"bottom":(ze=he(ce,D[se].type))>=0&&(ce.style.bottom=j*ze+"px");break;default:console.error("Can't handled danmaku type: ".concat(D[se].type))}ze>=0&&(ce.classList.add("dplayer-danmaku-move"),ce.style.animationDuration=P._danAnimation(D[se].type),We.appendChild(ce))},Ze=0;Ze<D.length;Ze++)_e(Ze);return this.container.appendChild(We),We}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(D){if(!this.context){var P=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=P.getPropertyValue("font")}return this.context.measureText(D).width}},{key:"seek",value:function(){this.clear();for(var D=0;D<this.dan.length;D++){if(this.dan[D].time>=this.options.time()){this.danIndex=D;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(D){return D.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var D=this.container.offsetWidth,P=this.container.getElementsByClassName("dplayer-danmaku-item"),j=0;j<P.length;j++)P[j].style.transform="translateX(-".concat(D,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(D){this.unlimited=D}},{key:"speed",value:function(D){this.options.api.speedRate=D}},{key:"_danAnimation",value:function(D){var P=this.options.api.speedRate||1,j=!!this.player.fullScreen.isFullScreen();return{top:"".concat((j?6:4)/P,"s"),right:"".concat((j?8:5)/P,"s"),bottom:"".concat((j?6:4)/P,"s")}[D]}}],w&&rt(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const lt=bt;function at(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}const Be=function(){function _(){(function(D,P){if(!(D instanceof P))throw new TypeError("Cannot call a class as a function")})(this,_),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var U,w;return U=_,(w=[{key:"on",value:function(D,P){this.type(D)&&typeof P=="function"&&(this.events[D]||(this.events[D]=[]),this.events[D].push(P))}},{key:"trigger",value:function(D,P){if(this.events[D]&&this.events[D].length)for(var j=0;j<this.events[D].length;j++)this.events[D][j](P)}},{key:"type",value:function(D){return this.playerEvents.indexOf(D)!==-1?"player":this.videoEvents.indexOf(D)!==-1?"video":(console.error("Unknown event name: ".concat(D)),null)}}])&&at(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();function dt(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var ut=function(){function _(D){var P=this;(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){P.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){P.player.resize(),S.setScrollPosition(P.lastScrollPosition)}),this.fullscreenchange=function(){P.player.resize(),P.isFullScreen("browser")?P.player.events.trigger("fullscreen"):(S.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var j=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;j&&j!==P.player.container||(P.player.resize(),j?P.player.events.trigger("fullscreen"):(S.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var U,w;return U=_,w=[{key:"isFullScreen",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(D){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",P=D==="browser"?"web":"browser",j=this.isFullScreen(P);switch(j||(this.lastScrollPosition=S.getScrollPosition()),D){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}j&&this.cancel(P)}},{key:"cancel",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(D){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(D)?this.cancel(D):this.request(D)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],w&&dt(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const xt=ut;function Ct(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Tt=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:D.options.hasOwnProperty("volume")?D.options.volume:.7,unlimited:(D.options.danmaku&&D.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var U,w;return U=_,(w=[{key:"init",value:function(){for(var D in this.storageName){var P=this.storageName[D];this.data[D]=parseFloat(S.storage.get(P)||this.default[D])}}},{key:"get",value:function(D){return this.data[D]}},{key:"set",value:function(D,P){this.data[D]=P,S.storage.set(this.storageName[D],P)}}])&&Ct(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const St=Tt;function Lt(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var it=function(){function _(D,P,j,G){(function(V,J){if(!(V instanceof J))throw new TypeError("Cannot call a class as a function")})(this,_),this.container=D,this.video=P,this.options=j,this.events=G,this.init()}var U,w;return U=_,w=[{key:"init",value:function(){var D=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var P=this.video.textTracks[0];P.oncuechange=function(){var j=P.activeCues[P.activeCues.length-1];if(D.container.innerHTML="",j){var G=document.createElement("div");G.appendChild(j.getCueAsHTML());var V=G.innerHTML.split(/\r?\n/).map(function(J){return"<p>".concat(J,"</p>")}).join("");D.container.innerHTML=V}D.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],w&&Lt(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const ct=it;function It(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Dt=function(){function _(D){var P=this;(function(J,te){if(!(J instanceof te))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){P.adaptiveHeight(),P.show()});for(var j=this.player.template.subtitlesItem.length-1,G=function(J){P.player.template.subtitlesItem[J].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==J&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src=P.player.template.subtitlesItem[J].dataset.subtitle,P.player.options.subtitle.index=J,P.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&P.subContainerShow())})},V=0;V<j;V++)G(V);this.player.template.subtitlesItem[j].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==j&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src="",P.player.options.subtitle.index=j,P.subContainerHide())})}var U,w;return U=_,(w=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var D=30*this.player.template.subtitlesItem.length+14,P=.8*this.player.template.videoWrap.offsetHeight;D>=P-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=P-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=P-50+"px")}}])&&It(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const un=Dt;function cn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var fn=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.elements={},this.elements.volume=D.volumeBar,this.elements.played=D.playedBar,this.elements.loaded=D.loadedBar,this.elements.danmaku=D.danmakuOpacityBar}var U,w;return U=_,(w=[{key:"set",value:function(D,P,j){P=Math.max(P,0),P=Math.min(P,1),this.elements[D].style[j]=100*P+"%"}},{key:"get",value:function(D){return parseFloat(this.elements[D].style.width)/100}}])&&cn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const hn=fn;function pn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var vn=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(P){window.setTimeout(P,1e3/60)},this.types=["loading","info","fps"],this.init()}var U,w;return U=_,(w=[{key:"init",value:function(){var D=this;this.types.map(function(P){return P!=="fps"&&D["init".concat(P,"Checker")](),P})}},{key:"initloadingChecker",value:function(){var D=this,P=0,j=0,G=!1;this.loadingChecker=setInterval(function(){D.enableloadingChecker&&(j=D.player.video.currentTime,G||j!==P||D.player.video.paused||(D.player.container.classList.add("dplayer-loading"),G=!0),G&&j>P&&!D.player.video.paused&&(D.player.container.classList.remove("dplayer-loading"),G=!1),P=j)},100)}},{key:"initfpsChecker",value:function(){var D=this;window.requestAnimationFrame(function(){if(D.enablefpsChecker)if(D.initfpsChecker(),D.fpsStart){D.fpsIndex++;var P=new Date;P-D.fpsStart>1e3&&(D.player.infoPanel.fps(D.fpsIndex/(P-D.fpsStart)*1e3),D.fpsStart=new Date,D.fpsIndex=0)}else D.fpsStart=new Date,D.fpsIndex=0;else D.fpsStart=0,D.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var D=this;this.infoChecker=setInterval(function(){D.enableinfoChecker&&D.player.infoPanel.update()},1e3)}},{key:"enable",value:function(D){this["enable".concat(D,"Checker")]=!0,D==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(D){this["enable".concat(D,"Checker")]=!1}},{key:"destroy",value:function(){var D=this;this.types.map(function(P){return D["enable".concat(P,"Checker")]=!1,D["".concat(P,"Checker")]&&clearInterval(D["".concat(P,"Checker")]),P})}}])&&pn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const gn=vn;function mn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}const An=function(){function _(D){var P=this;(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.container=D,this.container.addEventListener("animationend",function(){P.container.classList.remove("dplayer-bezel-transition")})}var U,w;return U=_,(w=[{key:"switch",value:function(D){this.container.innerHTML=D,this.container.classList.add("dplayer-bezel-transition")}}])&&mn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();function yn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var En=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.container=D.container,this.barWidth=D.barWidth,this.container.style.backgroundImage="url('".concat(D.url,"')"),this.events=D.events}var U,w;return U=_,(w=[{key:"resize",value:function(D,P,j){this.container.style.width="".concat(D,"px"),this.container.style.height="".concat(P,"px"),this.container.style.top="".concat(2-P,"px"),this.barWidth=j}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(D){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(D/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(D-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&yn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const bn=En;var Ot=function(_,U){return Ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,D){w.__proto__=D}||function(w,D){for(var P in D)Object.prototype.hasOwnProperty.call(D,P)&&(w[P]=D[P])},Ot(_,U)};function ft(_,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");function w(){this.constructor=_}Ot(_,U),_.prototype=U===null?Object.create(U):(w.prototype=U.prototype,new w)}function Rt(_){var U=typeof Symbol=="function"&&Symbol.iterator,w=U&&_[U],D=0;if(w)return w.call(_);if(_&&typeof _.length=="number")return{next:function(){return _&&D>=_.length&&(_=void 0),{value:_&&_[D++],done:!_}}};throw new TypeError(U?"Object is not iterable.":"Symbol.iterator is not defined.")}function ht(_,U){var w=typeof Symbol=="function"&&_[Symbol.iterator];if(!w)return _;var D,P,j=w.call(_),G=[];try{for(;(U===void 0||U-- >0)&&!(D=j.next()).done;)G.push(D.value)}catch(V){P={error:V}}finally{try{D&&!D.done&&(w=j.return)&&w.call(j)}finally{if(P)throw P.error}}return G}function pt(_,U,w){if(w||arguments.length===2)for(var D,P=0,j=U.length;P<j;P++)!D&&P in U||(D||(D=Array.prototype.slice.call(U,0,P)),D[P]=U[P]);return _.concat(D||Array.prototype.slice.call(U))}function He(_){return typeof _=="function"}function jt(_){var U=_(function(w){Error.call(w),w.stack=new Error().stack});return U.prototype=Object.create(Error.prototype),U.prototype.constructor=U,U}var kt=jt(function(_){return function(U){_(this),this.message=U?U.length+` errors occurred during unsubscription:
`+U.map(function(w,D){return D+1+") "+w.toString()}).join(""):"",this.name="UnsubscriptionError",this.errors=U}});function Pt(_,U){if(_){var w=_.indexOf(U);0<=w&&_.splice(w,1)}}var vt=function(){function _(w){this.initialTeardown=w,this.closed=!1,this._parentage=null,this._finalizers=null}var U;return _.prototype.unsubscribe=function(){var w,D,P,j,G;if(!this.closed){this.closed=!0;var V=this._parentage;if(V)if(this._parentage=null,Array.isArray(V))try{for(var J=Rt(V),te=J.next();!te.done;te=J.next())te.value.remove(this)}catch(se){w={error:se}}finally{try{te&&!te.done&&(D=J.return)&&D.call(J)}finally{if(w)throw w.error}}else V.remove(this);var de=this.initialTeardown;if(He(de))try{de()}catch(se){G=se instanceof kt?se.errors:[se]}var he=this._finalizers;if(he){this._finalizers=null;try{for(var We=Rt(he),_e=We.next();!_e.done;_e=We.next()){var Ze=_e.value;try{zt(Ze)}catch(se){G=G!=null?G:[],se instanceof kt?G=pt(pt([],ht(G)),ht(se.errors)):G.push(se)}}}catch(se){P={error:se}}finally{try{_e&&!_e.done&&(j=We.return)&&j.call(We)}finally{if(P)throw P.error}}}if(G)throw new kt(G)}},_.prototype.add=function(w){var D;if(w&&w!==this)if(this.closed)zt(w);else{if(w instanceof _){if(w.closed||w._hasParent(this))return;w._addParent(this)}(this._finalizers=(D=this._finalizers)!==null&&D!==void 0?D:[]).push(w)}},_.prototype._hasParent=function(w){var D=this._parentage;return D===w||Array.isArray(D)&&D.includes(w)},_.prototype._addParent=function(w){var D=this._parentage;this._parentage=Array.isArray(D)?(D.push(w),D):D?[D,w]:w},_.prototype._removeParent=function(w){var D=this._parentage;D===w?this._parentage=null:Array.isArray(D)&&Pt(D,w)},_.prototype.remove=function(w){var D=this._finalizers;D&&Pt(D,w),w instanceof _&&w._removeParent(this)},_.EMPTY=((U=new _).closed=!0,U),_}(),Gt=vt.EMPTY;function Ht(_){return _ instanceof vt||_&&"closed"in _&&He(_.remove)&&He(_.add)&&He(_.unsubscribe)}function zt(_){He(_)?_():_.unsubscribe()}var xn=void 0,Cn=!1,Mt={setTimeout:function(_){function U(w,D){return _.apply(this,arguments)}return U.toString=function(){return _.toString()},U}(function(_,U){for(var w=[],D=2;D<arguments.length;D++)w[D-2]=arguments[D];var P=Mt.delegate;return P!=null&&P.setTimeout?P.setTimeout.apply(P,pt([_,U],ht(w))):setTimeout.apply(void 0,pt([_,U],ht(w)))}),clearTimeout:function(_){function U(w){return _.apply(this,arguments)}return U.toString=function(){return _.toString()},U}(function(_){var U=Mt.delegate;return((U==null?void 0:U.clearTimeout)||clearTimeout)(_)}),delegate:void 0};function Yt(){}function gt(_){_()}var Vt=function(_){function U(w){var D=_.call(this)||this;return D.isStopped=!1,w?(D.destination=w,Ht(w)&&w.add(D)):D.destination=Ln,D}return ft(U,_),U.create=function(w,D,P){return new wt(w,D,P)},U.prototype.next=function(w){this.isStopped?void 0:this._next(w)},U.prototype.error=function(w){this.isStopped?void 0:(this.isStopped=!0,this._error(w))},U.prototype.complete=function(){this.isStopped?void 0:(this.isStopped=!0,this._complete())},U.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,_.prototype.unsubscribe.call(this),this.destination=null)},U.prototype._next=function(w){this.destination.next(w)},U.prototype._error=function(w){try{this.destination.error(w)}finally{this.unsubscribe()}},U.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},U}(vt),Tn=Function.prototype.bind;function Bt(_,U){return Tn.call(_,U)}var Sn=function(){function _(U){this.partialObserver=U}return _.prototype.next=function(U){var w=this.partialObserver;if(w.next)try{w.next(U)}catch(D){mt(D)}},_.prototype.error=function(U){var w=this.partialObserver;if(w.error)try{w.error(U)}catch(D){mt(D)}else mt(U)},_.prototype.complete=function(){var U=this.partialObserver;if(U.complete)try{U.complete()}catch(w){mt(w)}},_}(),wt=function(_){function U(w,D,P){var j,G,V=_.call(this)||this;return He(w)||!w?j={next:w!=null?w:void 0,error:D!=null?D:void 0,complete:P!=null?P:void 0}:V&&Cn?((G=Object.create(w)).unsubscribe=function(){return V.unsubscribe()},j={next:w.next&&Bt(w.next,G),error:w.error&&Bt(w.error,G),complete:w.complete&&Bt(w.complete,G)}):j=w,V.destination=new Sn(j),V}return ft(U,_),U}(Vt);function mt(_){(function(U){Mt.setTimeout(function(){throw U})})(_)}function xr(_,U){}var Ln={closed:!0,next:Yt,error:function(_){throw _},complete:Yt},In=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Dn(_){return _}function On(_){return _.length===0?Dn:_.length===1?_[0]:function(U){return _.reduce(function(w,D){return D(w)},U)}}var Qt=function(){function _(U){U&&(this._subscribe=U)}return _.prototype.lift=function(U){var w=new _;return w.source=this,w.operator=U,w},_.prototype.subscribe=function(U,w,D){var P,j=this,G=(P=U)&&P instanceof Vt||function(V){return V&&He(V.next)&&He(V.error)&&He(V.complete)}(P)&&Ht(P)?U:new wt(U,w,D);return gt(function(){var V=j,J=V.operator,te=V.source;G.add(J?J.call(G,te):te?j._subscribe(G):j._trySubscribe(G))}),G},_.prototype._trySubscribe=function(U){try{return this._subscribe(U)}catch(w){U.error(w)}},_.prototype.forEach=function(U,w){var D=this;return new(w=Xt(w))(function(P,j){var G=new wt({next:function(V){try{U(V)}catch(J){j(J),G.unsubscribe()}},error:j,complete:P});D.subscribe(G)})},_.prototype._subscribe=function(U){var w;return(w=this.source)===null||w===void 0?void 0:w.subscribe(U)},_.prototype[In]=function(){return this},_.prototype.pipe=function(){for(var U=[],w=0;w<arguments.length;w++)U[w]=arguments[w];return On(U)(this)},_.prototype.toPromise=function(U){var w=this;return new(U=Xt(U))(function(D,P){var j;w.subscribe(function(G){return j=G},function(G){return P(G)},function(){return D(j)})})},_.create=function(U){return new _(U)},_}();function Xt(_){var U;return(U=_!=null?_:xn)!==null&&U!==void 0?U:Promise}var Xe,Rn=jt(function(_){return function(){_(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Zt=function(_){function U(){var w=_.call(this)||this;return w.closed=!1,w.currentObservers=null,w.observers=[],w.isStopped=!1,w.hasError=!1,w.thrownError=null,w}return ft(U,_),U.prototype.lift=function(w){var D=new Jt(this,this);return D.operator=w,D},U.prototype._throwIfClosed=function(){if(this.closed)throw new Rn},U.prototype.next=function(w){var D=this;gt(function(){var P,j;if(D._throwIfClosed(),!D.isStopped){D.currentObservers||(D.currentObservers=Array.from(D.observers));try{for(var G=Rt(D.currentObservers),V=G.next();!V.done;V=G.next())V.value.next(w)}catch(J){P={error:J}}finally{try{V&&!V.done&&(j=G.return)&&j.call(G)}finally{if(P)throw P.error}}}})},U.prototype.error=function(w){var D=this;gt(function(){if(D._throwIfClosed(),!D.isStopped){D.hasError=D.isStopped=!0,D.thrownError=w;for(var P=D.observers;P.length;)P.shift().error(w)}})},U.prototype.complete=function(){var w=this;gt(function(){if(w._throwIfClosed(),!w.isStopped){w.isStopped=!0;for(var D=w.observers;D.length;)D.shift().complete()}})},U.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(U.prototype,"observed",{get:function(){var w;return((w=this.observers)===null||w===void 0?void 0:w.length)>0},enumerable:!1,configurable:!0}),U.prototype._trySubscribe=function(w){return this._throwIfClosed(),_.prototype._trySubscribe.call(this,w)},U.prototype._subscribe=function(w){return this._throwIfClosed(),this._checkFinalizedStatuses(w),this._innerSubscribe(w)},U.prototype._innerSubscribe=function(w){var D=this,P=this,j=P.hasError,G=P.isStopped,V=P.observers;return j||G?Gt:(this.currentObservers=null,V.push(w),new vt(function(){D.currentObservers=null,Pt(V,w)}))},U.prototype._checkFinalizedStatuses=function(w){var D=this,P=D.hasError,j=D.thrownError,G=D.isStopped;P?w.error(j):G&&w.complete()},U.prototype.asObservable=function(){var w=new Qt;return w.source=this,w},U.create=function(w,D){return new Jt(w,D)},U}(Qt),Jt=function(_){function U(w,D){var P=_.call(this)||this;return P.destination=w,P.source=D,P}return ft(U,_),U.prototype.next=function(w){var D,P;(P=(D=this.destination)===null||D===void 0?void 0:D.next)===null||P===void 0||P.call(D,w)},U.prototype.error=function(w){var D,P;(P=(D=this.destination)===null||D===void 0?void 0:D.error)===null||P===void 0||P.call(D,w)},U.prototype.complete=function(){var w,D;(D=(w=this.destination)===null||w===void 0?void 0:w.complete)===null||D===void 0||D.call(w)},U.prototype._subscribe=function(w){var D,P;return(P=(D=this.source)===null||D===void 0?void 0:D.subscribe(w))!==null&&P!==void 0?P:Gt},U}(Zt);function kn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var $t=!0,_t=!1,Pn=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.autoHideTimer=0,S.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),S.isMobile||this.initVolumeButton()}var U,w;return U=_,(w=[{key:"initPlayButton",value:function(){var D=this;this.player.template.playButton.addEventListener("click",function(){D.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){D.player.toggle()}),S.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){D.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){D.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){D.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){D.player.toggle()}))}},{key:"initHighlights",value:function(){var D=this;this.player.on("durationchange",function(){if(D.player.video.duration!==1&&D.player.video.duration!==1/0&&D.player.options.highlight){var P=D.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(P,0).forEach(function(V){D.player.template.playedBarWrap.removeChild(V)});for(var j=0;j<D.player.options.highlight.length;j++)if(D.player.options.highlight[j].text&&D.player.options.highlight[j].time){var G=document.createElement("div");G.classList.add("dplayer-highlight"),G.style.left=D.player.options.highlight[j].time/D.player.video.duration*100+"%",G.innerHTML='<span class="dplayer-highlight-text">'+D.player.options.highlight[j].text+"</span>",D.player.template.playedBarWrap.insertBefore(G,D.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var D=this;this.player.options.video.thumbnails&&(this.thumbnails=new bn({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){D.thumbnails.resize(160,D.player.video.videoHeight/D.player.video.videoWidth*160,D.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var D=this,P=function(G){var V=((G.clientX||G.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(D.player.template.playedBarWrap))/D.player.template.playedBarWrap.clientWidth;V=Math.max(V,0),V=Math.min(V,1),D.player.bar.set("played",V,"width"),D.player.template.ptime.innerHTML=S.secondToTime(V*D.player.video.duration)},j=function G(V){document.removeEventListener(S.nameMap.dragEnd,G),document.removeEventListener(S.nameMap.dragMove,P);var J=((V.clientX||V.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(D.player.template.playedBarWrap))/D.player.template.playedBarWrap.clientWidth;J=Math.max(J,0),J=Math.min(J,1),D.player.bar.set("played",J,"width"),D.player.seek(D.player.bar.get("played")*D.player.video.duration),D.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(S.nameMap.dragStart,function(){D.player.timer.disable("progress"),document.addEventListener(S.nameMap.dragMove,P),document.addEventListener(S.nameMap.dragEnd,j)}),this.player.template.playedBarWrap.addEventListener(S.nameMap.dragMove,function(G){if(D.player.video.duration){var V=D.player.template.playedBarWrap.getBoundingClientRect().left,J=(G.clientX||G.changedTouches[0].clientX)-V;if(J<0||J>D.player.template.playedBarWrap.offsetWidth)return;var te=D.player.video.duration*(J/D.player.template.playedBarWrap.offsetWidth);S.isMobile&&D.thumbnails&&D.thumbnails.show(),D.thumbnails&&D.thumbnails.move(J),D.player.template.playedBarTime.style.left="".concat(J-(te>=3600?25:20),"px"),D.player.template.playedBarTime.innerText=S.secondToTime(te),D.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(S.nameMap.dragEnd,function(){S.isMobile&&D.thumbnails&&D.thumbnails.hide()}),S.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){D.player.video.duration&&(D.thumbnails&&D.thumbnails.show(),D.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){D.player.video.duration&&(D.thumbnails&&D.thumbnails.hide(),D.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var D=this;this.player.template.browserFullButton.addEventListener("click",function(){D.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){D.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var D=this,P=function(G){var V=G||window.event,J=((V.clientX||V.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(D.player.template.volumeBarWrap)-5.5)/35;D.player.volume(J)},j=function G(){document.removeEventListener(S.nameMap.dragEnd,G),document.removeEventListener(S.nameMap.dragMove,P),D.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(G){var V=G||window.event,J=((V.clientX||V.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(D.player.template.volumeBarWrap)-5.5)/35;D.player.volume(J)}),this.player.template.volumeBarWrapWrap.addEventListener(S.nameMap.dragStart,function(){document.addEventListener(S.nameMap.dragMove,P),document.addEventListener(S.nameMap.dragEnd,j),D.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){D.player.video.muted?(D.player.video.muted=!1,D.player.switchVolumeIcon(),D.player.bar.set("volume",D.player.volume(),"width")):(D.player.video.muted=!0,D.player.template.volumeIcon.innerHTML=me.volumeOff,D.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var D=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(P){P.target.classList.contains("dplayer-quality-item")&&D.player.switchQuality(P.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var D=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var P,j=document.createElement("canvas");j.width=D.player.video.videoWidth,j.height=D.player.video.videoHeight,j.getContext("2d").drawImage(D.player.video,0,0,j.width,j.height),j.toBlob(function(G){P=URL.createObjectURL(G);var V=document.createElement("a");V.href=P,V.download="DPlayer.png",V.style.display="none",document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(P),D.player.events.trigger("screenshot",P)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(D){D.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var D=window.document.createElement("script");D.setAttribute("type","text/javascript"),D.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(D),window.__onGCastApiAvailable=function(P){if(P){var j=new(Xe=window.chrome.cast).SessionRequest(Xe.media.DEFAULT_MEDIA_RECEIVER_APP_ID),G=new Xe.ApiConfig(j,function(){},function(V){V===Xe.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",V)});Xe.initialize(G,function(){})}}}},{key:"initChromecastButton",value:function(){var D=this;if(this.player.options.chromecast){$t&&($t=!1,this.initChromecast());var P=function(G,V){D.currentMedia=V},j=function(G){console.error("Error launching media",G)};this.player.template.chromecastButton.addEventListener("click",function(){var G;_t?(_t=!1,D.currentMedia.stop(),D.session.stop(),D.initChromecast()):(_t=!0,G=new Zt,Xe.requestSession(function(V){var J,te,de;D.session=V,G.next("CONNECTED"),J=D.player.options.video.url,te=new Xe.media.MediaInfo(J),de=new Xe.media.LoadRequest(te),D.session?D.session.loadMedia(de,P.bind(D,"loadMedia"),j).play():window.open(J)},function(V){V.code==="cancel"?(D.session=void 0,G.next("CANCEL")):console.error("Error selecting a cast device",V)}))})}}},{key:"initSubtitleButton",value:function(){var D=this;this.player.events.on("subtitle_show",function(){D.player.template.subtitleButton.dataset.balloon=D.player.tran("hide-subs"),D.player.template.subtitleButtonInner.style.opacity="",D.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){D.player.template.subtitleButton.dataset.balloon=D.player.tran("show-subs"),D.player.template.subtitleButtonInner.style.opacity="0.4",D.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){D.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var D=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!D.player.video.played.length||D.player.paused||D.disableAutoHide||D.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){S.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&kn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const Mn=Pn;function Bn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var wn=function(){function _(D){var P=this;(function(te,de){if(!(te instanceof de))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.settingButton.addEventListener("click",function(){P.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){P.player.template.loopToggle.checked=!P.player.template.loopToggle.checked,P.player.template.loopToggle.checked?P.loop=!0:P.loop=!1,P.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){P.player.template.showDanmakuToggle.checked=!P.player.template.showDanmakuToggle.checked,P.player.template.showDanmakuToggle.checked?(P.showDanmaku=!0,P.player.danmaku.show()):(P.showDanmaku=!1,P.player.danmaku.hide()),P.player.user.set("danmaku",P.showDanmaku?1:0),P.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){P.player.template.unlimitDanmakuToggle.checked=!P.player.template.unlimitDanmakuToggle.checked,P.player.template.unlimitDanmakuToggle.checked?(P.unlimitDanmaku=!0,P.player.danmaku.unlimit(!0)):(P.unlimitDanmaku=!1,P.player.danmaku.unlimit(!1)),P.player.user.set("unlimited",P.unlimitDanmaku?1:0),P.hide()}),this.player.template.speed.addEventListener("click",function(){P.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),P.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var j=function(te){P.player.template.speedItem[te].addEventListener("click",function(){P.player.speed(P.player.template.speedItem[te].dataset.speed),P.hide()})},G=0;G<this.player.template.speedItem.length;G++)j(G);if(this.player.danmaku){this.player.on("danmaku_opacity",function(te){P.player.bar.set("danmaku",te,"width"),P.player.user.set("opacity",te)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var V=function(te){var de=te||window.event,he=((de.clientX||de.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;he=Math.max(he,0),he=Math.min(he,1),P.player.danmaku.opacity(he)},J=function te(){document.removeEventListener(S.nameMap.dragEnd,te),document.removeEventListener(S.nameMap.dragMove,V),P.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(te){var de=te||window.event,he=((de.clientX||de.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;he=Math.max(he,0),he=Math.min(he,1),P.player.danmaku.opacity(he)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(S.nameMap.dragStart,function(){document.addEventListener(S.nameMap.dragMove,V),document.addEventListener(S.nameMap.dragEnd,J),P.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var U,w;return U=_,(w=[{key:"hide",value:function(){var D=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){D.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),D.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Bn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const _n=wn;function Fn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Un=function(){function _(D){var P=this;(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.commentButton.addEventListener("click",function(){P.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){P.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(P.player.template.commentColorSettingBox.querySelector("input:checked+span")){var j=P.player.template.commentColorSettingBox.querySelector("input:checked").value;P.player.template.commentSettingFill.style.fill=j,P.player.template.commentInput.style.color=j,P.player.template.commentSendFill.style.fill=j}}),this.player.template.commentInput.addEventListener("click",function(){P.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(j){(j||window.event).keyCode===13&&P.send()}),this.player.template.commentSendButton.addEventListener("click",function(){P.send()})}var U,w;return U=_,(w=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var D=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:S.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){D.player.template.commentInput.value="",D.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Fn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const Nn=Un;function Kn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Wn=function(){function _(D){(function(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var U,w;return U=_,(w=[{key:"doHotKey",value:function(D){if(this.player.focus){var P=document.activeElement.tagName.toUpperCase(),j=document.activeElement.getAttribute("contenteditable");if(P!=="INPUT"&&P!=="TEXTAREA"&&j!==""&&j!=="true"){var G,V=D||window.event;switch(V.keyCode){case 32:V.preventDefault(),this.player.toggle();break;case 37:if(V.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(V.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:V.preventDefault(),G=this.player.volume()+.1,this.player.volume(G);break;case 40:V.preventDefault(),G=this.player.volume()-.1,this.player.volume(G)}}}}},{key:"cancelFullScreen",value:function(D){(D||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Kn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const jn=Wn;function Gn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Hn=function(){function _(D){var P=this;(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.player=D,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(j,G){P.player.options.contextmenu[G].click&&j.addEventListener("click",function(){P.player.options.contextmenu[G].click(P.player),P.hide()})}),this.contextmenuHandler=function(j){if(P.shown)P.hide();else{var G=j||window.event;G.preventDefault();var V=P.player.container.getBoundingClientRect();P.show(G.clientX-V.left,G.clientY-V.top),P.player.template.mask.addEventListener("click",function(){P.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var U,w;return U=_,(w=[{key:"show",value:function(D,P){this.player.template.menu.classList.add("dplayer-menu-show");var j=this.player.container.getBoundingClientRect();D+this.player.template.menu.offsetWidth>=j.width?(this.player.template.menu.style.right=j.width-D+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=D+"px",this.player.template.menu.style.right="initial"),P+this.player.template.menu.offsetHeight>=j.height?(this.player.template.menu.style.bottom=j.height-P+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=P+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Gn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const zn=Hn;function Yn(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var Vn=function(){function _(D){var P=this;(function(j,G){if(!(j instanceof G))throw new TypeError("Cannot call a class as a function")})(this,_),this.container=D.template.infoPanel,this.template=D.template,this.video=D.video,this.player=D,this.template.infoPanelClose.addEventListener("click",function(){P.hide()})}var U,w;return U=_,(w=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(D){this.template.infoFPS.innerHTML="".concat(D.toFixed(1))}}])&&Yn(U.prototype,w),Object.defineProperty(U,"prototype",{writable:!1}),_}();const Qn=Vn;var Xn=x(1568),Zn=x.n(Xn);function qt(_,U){var w=Object.keys(_);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(_);U&&(D=D.filter(function(P){return Object.getOwnPropertyDescriptor(_,P).enumerable})),w.push.apply(w,D)}return w}function Jn(_,U,w){return U in _?Object.defineProperty(_,U,{value:w,enumerable:!0,configurable:!0,writable:!0}):_[U]=w,_}function en(_,U){for(var w=0;w<U.length;w++){var D=U[w];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}var tn=0,$e=[],$n=function(){function _(P){var j=this;(function(G,V){if(!(G instanceof V))throw new TypeError("Cannot call a class as a function")})(this,_),this.options=function(G){var V={container:G.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:F,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var J in V)V.hasOwnProperty(J)&&!G.hasOwnProperty(J)&&(G[J]=V[J]);return G.video&&!G.video.type&&(G.video.type="auto"),K(G.danmaku)==="object"&&G.danmaku&&!G.danmaku.user&&(G.danmaku.user="DIYgod"),G.subtitle&&(!G.subtitle.type&&(G.subtitle.type="webvtt"),!G.subtitle.fontSize&&(G.subtitle.fontSize="20px"),!G.subtitle.bottom&&(G.subtitle.bottom="40px"),!G.subtitle.color&&(G.subtitle.color="#fff")),G.video.quality&&(G.video.url=G.video.quality[G.video.defaultQuality].url),G.lang&&(G.lang=G.lang.toLowerCase()),G.contextmenu=G.contextmenu.concat([{key:"video-info",click:function(te){te.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),G}(function(G){for(var V=1;V<arguments.length;V++){var J=arguments[V]!=null?arguments[V]:{};V%2?qt(Object(J),!0).forEach(function(te){Jn(G,te,J[te])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(J)):qt(Object(J)).forEach(function(te){Object.defineProperty(G,te,Object.getOwnPropertyDescriptor(J,te))})}return G}({preload:P.video.type==="webtorrent"?"none":"metadata"},P)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new W(this.options.lang).tran,this.events=new Be,this.user=new St(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),S.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(G){return G.lang===j.options.subtitle.defaultSubtitle||G.name===j.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(G){return G.lang===j.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Ke({container:this.container,options:this.options,index:tn,tran:this.tran}),this.video=this.template.video,this.bar=new hn(this.template),this.bezel=new An(this.template.bezel),this.fullScreen=new xt(this),this.controller=new Mn(this),this.options.danmaku&&(this.danmaku=new lt({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){j.template.danmakuLoading.style.display="none",j.options.autoplay&&j.play()},0)},error:function(G){j.notice(G)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return j.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(G){return j.tran(G)}}),this.comment=new Nn(this)),this.setting=new _n(this),this.plugins={},this.docClickFun=function(){j.focus=!1},this.containerClickFun=function(){j.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new gn(this),this.hotkey=new jn(this),this.contextmenu=new zn(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Qn(this),!this.danmaku&&this.options.autoplay&&this.play(),tn++,$e.push(this)}var U,w,D;return U=_,w=[{key:"seek",value:function(P){P=Math.max(P,0),this.video.duration&&(P=Math.min(P,this.video.duration)),this.video.currentTime<P?this.notice("".concat(this.tran("ff").replace("%s",(P-this.video.currentTime).toFixed(0)))):this.video.currentTime>P&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-P).toFixed(0)))),this.video.currentTime=P,this.danmaku&&this.danmaku.seek(),this.bar.set("played",P/this.video.duration,"width"),this.template.ptime.innerHTML=S.secondToTime(P)}},{key:"play",value:function(P){var j=this;if(this.paused=!1,this.video.paused&&!S.isMobile&&this.bezel.switch(me.play),this.template.playButton.innerHTML=me.pause,this.template.mobilePlayButton.innerHTML=me.pause,P||E.resolve(this.video.play()).catch(function(){j.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var G=0;G<$e.length;G++)this!==$e[G]&&$e[G].pause()}},{key:"pause",value:function(P){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||S.isMobile||this.bezel.switch(me.pause),this.template.playButton.innerHTML=me.play,this.template.mobilePlayButton.innerHTML=me.play,P||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=me.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=me.volumeDown:this.template.volumeIcon.innerHTML=me.volumeOff}},{key:"volume",value:function(P,j,G){if(P=parseFloat(P),!isNaN(P)){P=Math.max(P,0),P=Math.min(P,1),this.bar.set("volume",P,"width");var V="".concat((100*P).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=V,j||this.user.set("volume",P),G||this.notice("".concat(this.tran("volume")," ").concat((100*P).toFixed(0),"%")),this.video.volume=P,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(P,j){this.events.on(P,j)}},{key:"switchVideo",value:function(P,j){this.pause(),this.video.poster=P.pic?P.pic:"",this.video.src=P.url,this.initMSE(this.video,P.type||"auto"),j&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:j.id,address:j.api,token:j.token,maximum:j.maximum,addition:j.addition,user:j.user}))}},{key:"initMSE",value:function(P,j){var G=this;if(this.type=j,this.options.video.customType&&this.options.video.customType[j])Object.prototype.toString.call(this.options.video.customType[j])==="[object Function]"?this.options.video.customType[j](this.video,this):console.error("Illegal customType: ".concat(j));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(P.src)?this.type="hls":/.flv(#|\?|$)/i.exec(P.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(P.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(P.canPlayType("application/x-mpegURL")||P.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var V=this.options.pluginOptions.hls,J=new window.Hls(V);this.plugins.hls=J,J.loadSource(P.src),J.attachMedia(P),this.events.on("destroy",function(){J.destroy(),delete G.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var te=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:P.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=te,te.attachMediaElement(P),te.load(),this.events.on("destroy",function(){te.unload(),te.detachMediaElement(),te.destroy(),delete G.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var de=window.dashjs.MediaPlayer().create().initialize(P,P.src,!1),he=this.options.pluginOptions.dash;de.updateSettings(he),this.plugins.dash=de,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete G.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var We=this.options.pluginOptions.webtorrent,_e=new window.WebTorrent(We);this.plugins.webtorrent=_e;var Ze=P.src;P.src="",P.preload="metadata",P.addEventListener("durationchange",function(){return G.container.classList.remove("dplayer-loading")},{once:!0}),_e.add(Ze,function(se){se.files.find(function(ce){return ce.name.endsWith(".mp4")}).renderTo(G.video,{autoplay:G.options.autoplay,controls:!1})}),this.events.on("destroy",function(){_e.remove(Ze),_e.destroy(),delete G.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(P,j){var G=this;this.initMSE(P,j),this.on("durationchange",function(){P.duration!==1&&P.duration!==1/0&&(G.template.dtime.innerHTML=S.secondToTime(P.duration))}),this.on("progress",function(){var te=P.buffered.length?P.buffered.end(P.buffered.length-1)/P.duration:0;G.bar.set("loaded",te,"width")}),this.on("error",function(){G.video.error&&G.tran&&G.notice&&G.type!=="webtorrent"&&G.notice(G.tran("video-failed"),-1)}),this.on("ended",function(){G.bar.set("played",1,"width"),G.setting.loop?(G.seek(0),G.play()):G.pause(),G.danmaku&&(G.danmaku.danIndex=0)}),this.on("play",function(){G.paused&&G.play(!0)}),this.on("pause",function(){G.paused||G.pause(!0)}),this.on("timeupdate",function(){G.bar.set("played",G.video.currentTime/G.video.duration,"width");var te=S.secondToTime(G.video.currentTime);G.template.ptime.innerHTML!==te&&(G.template.ptime.innerHTML=te)});for(var V=function(te){P.addEventListener(G.events.videoEvents[te],function(){G.events.trigger(G.events.videoEvents[te])})},J=0;J<this.events.videoEvents.length;J++)V(J);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new ct(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new un(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(P){var j=this;if(P=typeof P=="string"?parseInt(P):P,this.qualityIndex!==P&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=P,this.switchingQuality=!0,this.quality=this.options.video.quality[P],this.template.qualityButton.innerHTML=this.quality.name;var G=this.video.paused;this.video.pause();var V=Zn()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),J=new DOMParser().parseFromString(V,"text/html").body.firstChild;this.template.videoWrap.insertBefore(J,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=J,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(j.prevVideo){if(j.video.currentTime!==j.prevVideo.currentTime)return void j.seek(j.prevVideo.currentTime);j.template.videoWrap.removeChild(j.prevVideo),j.video.classList.add("dplayer-video-current"),G||j.video.play(),j.prevVideo=null,j.notice("".concat(j.tran("switched-quality").replace("%q",j.quality.name))),j.switchingQuality=!1,j.events.trigger("quality_end")}}),this.on("error",function(){j.video.error&&j.prevVideo&&(j.template.videoWrap.removeChild(j.video),j.video=j.prevVideo,G||j.video.play(),j.qualityIndex=j.prevIndex,j.quality=j.options.video.quality[j.qualityIndex],j.noticeTime=setTimeout(function(){j.template.notice.style.opacity=0,j.events.trigger("notice_hide")},3e3),j.prevVideo=null,j.switchingQuality=!1)})}}},{key:"notice",value:function(P){var j,G,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,J=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,te=Ke.NewNotice(P,J);this.template.noticeList.appendChild(te),this.events.trigger("notice_show",te),V>0&&setTimeout((j=te,G=this,function(){j.addEventListener("animationend",function(){G.template.noticeList.removeChild(j)}),j.classList.add("remove-notice"),G.events.trigger("notice_hide")}),V)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(P){this.video.playbackRate=P}},{key:"destroy",value:function(){$e.splice($e.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],D=[{key:"version",get:function(){return"1.27.0"}}],w&&en(U.prototype,w),D&&en(U,D),Object.defineProperty(U,"prototype",{writable:!1}),_}();const qn=$n;console.log(`
`.concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const er=qn})(),M.default})())})(dn);var Ar=sn(dn.exports);const yr=Wt({__name:"Dplayer",props:["url"],setup(Ne){const Me=Ne,X=Kt(null);return rr(()=>{ar(()=>{new Ar({autoplay:!1,container:X.value,preload:"metadata",video:{url:Me.url,type:"customHls",customType:{customHls:function(B,x){const M=new mr;M.loadSource(B.src),M.attachMedia(B)}}}})})}),(B,x)=>(tt(),st("div",{id:"dplayer",ref_key:"dplayer",ref:X},null,512))}});function an(Ne){let Me=Ne.split("$$$"),X=[];for(const B in Me){let x=Me[B].split("#");for(const M in x){let C=x[M].split("$");X.push({name:C[0],value:C[1]})}}return X}const Er={class:"play"},br={class:"anthology"},Lr=Wt({__name:"Play",setup(Ne){const Me=sr(),X=Kt({url:"",name:"",director:"",actor:"",description:""}),B=Kt();ir(()=>{fetch(pr+"/play/"+Me.params.id).then(M=>M.json()).then(M=>{X.value=M,B.value=an(X.value.url)[0].value})});function x(M){return typeof M.value!="undefined"}return(M,C)=>{const T=yr,R=gr,O=cr,I=vr;return tt(),st("div",Er,[At(T,{url:B.value},null,8,["url"]),At(R,{name:X.value.name,director:X.value.director,actor:X.value.actor,description:X.value.description},null,8,["name","director","actor","description"]),yt("div",br,[At(I,null,{default:Nt(()=>[(tt(!0),st(rn,null,or(on(an)(X.value.url),b=>(tt(),st(rn,null,[x(b)?(tt(),lr(O,{key:0,onClick:a=>B.value=b.value},{default:Nt(()=>[dr(Et(b.name),1)]),_:2},1032,["onClick"])):ur("",!0)],64))),256))]),_:1})])])}}});export{Lr as default};
