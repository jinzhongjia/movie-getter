import{bH as fn,bI as rr,d as ar,r as pt,$ as ir,m as zt,I as or,c as un,w as He,v as sr,_ as lr,o as lt,b as tt,i as ht,bJ as dr,bK as ur,n as Yt,t as vt,e as St,f as cr,F as cn,h as Vt,l as fr,g as pr,bL as hr,j as vr,bM as gr,s as mr}from"./index.61b64b59.js";import{_ as Ar}from"./Card.24e7e73a.js";import{_ as yr}from"./Spin.d2a4a199.js";import"./Close.b4e0e95e.js";var pn={exports:{}};(function(nt,Ze){(function(Be,Ee){nt.exports=Ee()})(self,()=>(()=>{var Be={1916:(W,M,x)=>{var w=x(6877);W.exports=function(_){var D,p="",k=(_=_||{}).video,S=_.options,v=w.$escape,b=_.tran,m=_.icons,g=_.index,E=w.$each;return _.$value,_.$index,p+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,D=x(1568)(k),p+=D,p+=`
    `,S.logo&&(p+=`
    <div class="dplayer-logo">
        <img src="`,p+=v(S.logo),p+=`">
    </div>
    `),p+=`
    <div class="dplayer-danmaku"`,S.danmaku&&S.danmaku.bottm&&(p+=' style="margin-bottom:',p+=v(S.danmaku.bottm),p+='"'),p+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,S.danmaku&&(p+=`
        <span class="dplayer-danloading">`,p+=v(b("danmaku-loading")),p+=`</span>
        `),p+=`
        <span class="diplayer-loading-icon">`,p+=m.loading,p+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,p+=v(b("setting")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=m.pallette,p+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,p+=v(b("set-danmaku-color")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=v(g),p+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,p+=v(b("set-danmaku-type")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=v(g),p+=`" value="1">
                    <span>`,p+=v(b("top")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=v(g),p+=`" value="0" checked>
                    <span>`,p+=v(b("rolling")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=v(g),p+=`" value="2">
                    <span>`,p+=v(b("bottom")),p+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,p+=v(b("input-danmaku-enter")),p+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,p+=v(b("send")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=m.send,p+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,p+=m.play,p+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,p+=m.volumeDown,p+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,p+=v(S.theme),p+=`;">
                        <span class="dplayer-thumb" style="background: `,p+=v(S.theme),p+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,S.live&&(p+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,p+=v(S.theme),p+=';"></span>',p+=v(b("live")),p+=`</span>
        `),p+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,S.video.quality&&(p+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,p+=v(S.video.quality[S.video.defaultQuality].name),p+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,E(S.video.quality,function(y,T){p+=`
                    <div class="dplayer-quality-item" data-index="`,p+=v(T),p+='">',p+=v(y.name),p+=`</div>
                `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `,S.screenshot&&(p+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,p+=v(b("screenshot")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=m.camera,p+=`</span>
        </div>
        `),p+=`
        `,S.airplay&&(p+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,p+=v(b("airplay")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=m.airplay,p+=`</span>
        </div>
        `),p+=`
        `,S.chromecast&&(p+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,p+=v(b("chromecast")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=m.chromecast,p+=`</span>
        </div>
        `),p+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,p+=v(b("send-danmaku")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.comment,p+=`</span>
            </button>
        </div>
        `,S.subtitle&&(p+=`
        `,typeof S.subtitle.url=="string"?(p+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,p+=v(b("hide-subs")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.subtitle,p+=`</span>
            </button>
        </div>
        `):(p+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,p+=v(b("subtitle")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.subtitle,p+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,E(S.subtitle.url,function(y,T){p+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,p+=v(y.url),p+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,p+=v(y.lang?y.name?y.name+" ("+b(y.lang)+")":b(y.lang):y.name),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `),p+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,p+=v(b("setting")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.setting,p+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,p+=v(b("speed")),p+=`</span>
                        <div class="dplayer-toggle">`,p+=m.right,p+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,p+=v(b("loop")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,p+=v(b("show-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,p+=v(b("unlimited-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,p+=v(b("opacity-danmaku")),p+=`</span>
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
                    `,E(S.playbackSpeed,function(y,T){p+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,p+=v(y),p+=`">
                            <span class="dplayer-label">`,p+=v(y===1?b("normal"):y),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,p+=v(b("web-fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.fullWeb,p+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,p+=v(b("fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=m.full,p+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,p+=v(S.theme),p+=`">
                <span class="dplayer-thumb" style="background: `,p+=v(S.theme),p+=`"></span>
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
    `,S.danmaku&&(p+=`
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
    `),p+=`
</div>
<div class="dplayer-menu">
    `,E(S.contextmenu,function(y,T){p+=`
        <div class="dplayer-menu-item">
            <a`,y.link&&(p+=' target="_blank"'),p+=' href="',p+=v(y.link||"javascript:void(0);"),p+='">',y.key&&(p+=" ",p+=v(b(y.key))),y.text&&(p+=" ",p+=v(y.text)),p+=`</a>
        </div>
    `}),p+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,p+=m.play,p+=`
</button>`}},1568:(W,M,x)=>{var w=x(6877);W.exports=function(_){var D="",p=(_=_||{}).enableSubtitle,k=_.subtitle,S=_.current,v=_.airplay,b=_.pic,m=w.$escape,g=_.screenshot,E=_.preload,y=_.url;return p=k&&k.type==="webvtt",D+=`
<video
    class="dplayer-video `,S&&(D+="dplayer-video-current"),D+=`"
    webkit-playsinline
    `,v&&(D+=' x-webkit-airplay="allow" '),D+=`
    playsinline
    `,b&&(D+='poster="',D+=m(b),D+='"'),D+=`
    `,(g||p)&&(D+='crossorigin="anonymous"'),D+=`
    `,E&&(D+='preload="',D+=m(E),D+='"'),D+=`
    `,v?D+=`
    nosrc
    `:y&&(D+=`
    src="`,D+=m(y),D+=`"
    `),D+=`
    >
    `,v&&(D+=`
    <source src="`,D+=m(y),D+=`">
    `),D+=`
    `,p&&(D+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,D+=m(typeof k.url=="string"?k.url:k.url[k.index].url),D+=`"></track>
    `),D+`
</video>`}},3399:(W,M,x)=>{x.d(M,{Z:()=>k});var w=x(8955),_=x.n(w),D=x(8160),p=x.n(D)()(_());p.push([W.id,`:root {
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
`],sourceRoot:""}]);const k=p},3150:(W,M,x)=>{x.d(M,{Z:()=>E});var w=x(8955),_=x.n(w),D=x(8160),p=x.n(D),k=x(3399),S=x(8431),v=x.n(S),b=new URL(x(7831),x.b),m=p()(_());m.i(k.Z);var g=v()(b);m.push([W.id,`@-webkit-keyframes my-face {
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
  background: url(`+g+`) repeat-x bottom;
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
}`],sourceRoot:""}]);const E=m},9624:W=>{var M=[];function x(D){for(var p=-1,k=0;k<M.length;k++)if(M[k].identifier===D){p=k;break}return p}function w(D,p){for(var k={},S=[],v=0;v<D.length;v++){var b=D[v],m=p.base?b[0]+p.base:b[0],g=k[m]||0,E="".concat(m," ").concat(g);k[m]=g+1;var y=x(E),T={css:b[1],media:b[2],sourceMap:b[3],supports:b[4],layer:b[5]};if(y!==-1)M[y].references++,M[y].updater(T);else{var l=_(T,p);p.byIndex=v,M.splice(v,0,{identifier:E,updater:l,references:1})}S.push(E)}return S}function _(D,p){var k=p.domAPI(p);return k.update(D),function(S){if(S){if(S.css===D.css&&S.media===D.media&&S.sourceMap===D.sourceMap&&S.supports===D.supports&&S.layer===D.layer)return;k.update(D=S)}else k.remove()}}W.exports=function(D,p){var k=w(D=D||[],p=p||{});return function(S){S=S||[];for(var v=0;v<k.length;v++){var b=x(k[v]);M[b].references--}for(var m=w(S,p),g=0;g<k.length;g++){var E=x(k[g]);M[E].references===0&&(M[E].updater(),M.splice(E,1))}k=m}}},6892:W=>{var M={};W.exports=function(x,w){var _=function(D){if(M[D]===void 0){var p=document.querySelector(D);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}M[D]=p}return M[D]}(x);if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");_.appendChild(w)}},2716:W=>{W.exports=function(M){var x=document.createElement("style");return M.setAttributes(x,M.attributes),M.insert(x,M.options),x}},6359:(W,M,x)=>{W.exports=function(w){var _=x.nc;_&&w.setAttribute("nonce",_)}},6990:W=>{W.exports=function(M){var x=M.insertStyleElement(M);return{update:function(w){(function(_,D,p){var k="";p.supports&&(k+="@supports (".concat(p.supports,") {")),p.media&&(k+="@media ".concat(p.media," {"));var S=p.layer!==void 0;S&&(k+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),k+=p.css,S&&(k+="}"),p.media&&(k+="}"),p.supports&&(k+="}");var v=p.sourceMap;v&&typeof btoa<"u"&&(k+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),D.styleTagTransform(k,_,D.options)})(x,M,w)},remove:function(){(function(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)})(x)}}}},230:W=>{W.exports=function(M,x){if(x.styleSheet)x.styleSheet.cssText=M;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(M))}}},6251:W=>{W.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:W=>{W.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:W=>{W.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(W,M,x)=>{var w=typeof self<"u"?self:typeof window<"u"?window:x.g!==void 0?x.g:{},_=Object.create(w),D=/["&'<>]/;function p(k){return typeof k!="string"&&(k=k==null?"":typeof k=="function"?p(k.call(k)):JSON.stringify(k)),k}_.$escape=function(k){return function(S){var v=""+S,b=D.exec(v);if(!b)return S;var m="",g=void 0,E=void 0,y=void 0;for(g=b.index,E=0;g<v.length;g++){switch(v.charCodeAt(g)){case 34:y="&#34;";break;case 38:y="&#38;";break;case 39:y="&#39;";break;case 60:y="&#60;";break;case 62:y="&#62;";break;default:continue}E!==g&&(m+=v.substring(E,g)),E=g+1,m+=y}return E!==g?m+v.substring(E,g):m}(p(k))},_.$each=function(k,S){if(Array.isArray(k))for(var v=0,b=k.length;v<b;v++)S(k[v],v);else for(var m in k)S(k[m],m)},W.exports=_},6877:(W,M,x)=>{W.exports=x(9959)},6208:(W,M,x)=>{W.exports=x(4568)},8170:(W,M,x)=>{var w=x(7201),_=x(9095),D=x(8416),p=x(6374),k=x(5967),S=x(5032),v=x(1224),b=x(4033),m=x(1766),g=x(8832),E=x(8699);W.exports=function(y){return new Promise(function(T,l){var r,n=y.data,d=y.headers,h=y.responseType;function a(){y.cancelToken&&y.cancelToken.unsubscribe(r),y.signal&&y.signal.removeEventListener("abort",r)}w.isFormData(n)&&w.isStandardBrowserEnv()&&delete d["Content-Type"];var t=new XMLHttpRequest;if(y.auth){var e=y.auth.username||"",o=y.auth.password?unescape(encodeURIComponent(y.auth.password)):"";d.Authorization="Basic "+btoa(e+":"+o)}var s=k(y.baseURL,y.url);function A(){if(t){var c="getAllResponseHeaders"in t?S(t.getAllResponseHeaders()):null,i={data:h&&h!=="text"&&h!=="json"?t.response:t.responseText,status:t.status,statusText:t.statusText,headers:c,config:y,request:t};_(function(C){T(C),a()},function(C){l(C),a()},i),t=null}}if(t.open(y.method.toUpperCase(),p(s,y.params,y.paramsSerializer),!0),t.timeout=y.timeout,"onloadend"in t?t.onloadend=A:t.onreadystatechange=function(){t&&t.readyState===4&&(t.status!==0||t.responseURL&&t.responseURL.indexOf("file:")===0)&&setTimeout(A)},t.onabort=function(){t&&(l(new m("Request aborted",m.ECONNABORTED,y,t)),t=null)},t.onerror=function(){l(new m("Network Error",m.ERR_NETWORK,y,t,t)),t=null},t.ontimeout=function(){var c=y.timeout?"timeout of "+y.timeout+"ms exceeded":"timeout exceeded",i=y.transitional||b;y.timeoutErrorMessage&&(c=y.timeoutErrorMessage),l(new m(c,i.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,y,t)),t=null},w.isStandardBrowserEnv()){var u=(y.withCredentials||v(s))&&y.xsrfCookieName?D.read(y.xsrfCookieName):void 0;u&&(d[y.xsrfHeaderName]=u)}"setRequestHeader"in t&&w.forEach(d,function(c,i){n===void 0&&i.toLowerCase()==="content-type"?delete d[i]:t.setRequestHeader(i,c)}),w.isUndefined(y.withCredentials)||(t.withCredentials=!!y.withCredentials),h&&h!=="json"&&(t.responseType=y.responseType),typeof y.onDownloadProgress=="function"&&t.addEventListener("progress",y.onDownloadProgress),typeof y.onUploadProgress=="function"&&t.upload&&t.upload.addEventListener("progress",y.onUploadProgress),(y.cancelToken||y.signal)&&(r=function(c){t&&(l(!c||c&&c.type?new g:c),t.abort(),t=null)},y.cancelToken&&y.cancelToken.subscribe(r),y.signal&&(y.signal.aborted?r():y.signal.addEventListener("abort",r))),n||(n=null);var f=E(s);f&&["http","https","file"].indexOf(f)===-1?l(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,y)):t.send(n)})}},4568:(W,M,x)=>{var w=x(7201),_=x(5305),D=x(2275),p=x(9834),k=function S(v){var b=new D(v),m=_(D.prototype.request,b);return w.extend(m,D.prototype,b),w.extend(m,b),m.create=function(g){return S(p(v,g))},m}(x(6339));k.Axios=D,k.CanceledError=x(8832),k.CancelToken=x(5027),k.isCancel=x(1893),k.VERSION=x(4316).version,k.toFormData=x(6615),k.AxiosError=x(1766),k.Cancel=k.CanceledError,k.all=function(S){return Promise.all(S)},k.spread=x(3282),k.isAxiosError=x(3319),W.exports=k,W.exports.default=k},5027:(W,M,x)=>{var w=x(8832);function _(D){if(typeof D!="function")throw new TypeError("executor must be a function.");var p;this.promise=new Promise(function(S){p=S});var k=this;this.promise.then(function(S){if(k._listeners){var v,b=k._listeners.length;for(v=0;v<b;v++)k._listeners[v](S);k._listeners=null}}),this.promise.then=function(S){var v,b=new Promise(function(m){k.subscribe(m),v=m}).then(S);return b.cancel=function(){k.unsubscribe(v)},b},D(function(S){k.reason||(k.reason=new w(S),p(k.reason))})}_.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},_.prototype.subscribe=function(D){this.reason?D(this.reason):this._listeners?this._listeners.push(D):this._listeners=[D]},_.prototype.unsubscribe=function(D){if(this._listeners){var p=this._listeners.indexOf(D);p!==-1&&this._listeners.splice(p,1)}},_.source=function(){var D;return{token:new _(function(p){D=p}),cancel:D}},W.exports=_},8832:(W,M,x)=>{var w=x(1766);function _(D){w.call(this,D==null?"canceled":D,w.ERR_CANCELED),this.name="CanceledError"}x(7201).inherits(_,w,{__CANCEL__:!0}),W.exports=_},1893:W=>{W.exports=function(M){return!(!M||!M.__CANCEL__)}},2275:(W,M,x)=>{var w=x(7201),_=x(6374),D=x(6808),p=x(7313),k=x(9834),S=x(5967),v=x(9712),b=v.validators;function m(g){this.defaults=g,this.interceptors={request:new D,response:new D}}m.prototype.request=function(g,E){typeof g=="string"?(E=E||{}).url=g:E=g||{},(E=k(this.defaults,E)).method?E.method=E.method.toLowerCase():this.defaults.method?E.method=this.defaults.method.toLowerCase():E.method="get";var y=E.transitional;y!==void 0&&v.assertOptions(y,{silentJSONParsing:b.transitional(b.boolean),forcedJSONParsing:b.transitional(b.boolean),clarifyTimeoutError:b.transitional(b.boolean)},!1);var T=[],l=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen=="function"&&e.runWhen(E)===!1||(l=l&&e.synchronous,T.unshift(e.fulfilled,e.rejected))});var r,n=[];if(this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)}),!l){var d=[p,void 0];for(Array.prototype.unshift.apply(d,T),d=d.concat(n),r=Promise.resolve(E);d.length;)r=r.then(d.shift(),d.shift());return r}for(var h=E;T.length;){var a=T.shift(),t=T.shift();try{h=a(h)}catch(e){t(e);break}}try{r=p(h)}catch(e){return Promise.reject(e)}for(;n.length;)r=r.then(n.shift(),n.shift());return r},m.prototype.getUri=function(g){g=k(this.defaults,g);var E=S(g.baseURL,g.url);return _(E,g.params,g.paramsSerializer)},w.forEach(["delete","get","head","options"],function(g){m.prototype[g]=function(E,y){return this.request(k(y||{},{method:g,url:E,data:(y||{}).data}))}}),w.forEach(["post","put","patch"],function(g){function E(y){return function(T,l,r){return this.request(k(r||{},{method:g,headers:y?{"Content-Type":"multipart/form-data"}:{},url:T,data:l}))}}m.prototype[g]=E(),m.prototype[g+"Form"]=E(!0)}),W.exports=m},1766:(W,M,x)=>{var w=x(7201);function _(k,S,v,b,m){Error.call(this),this.message=k,this.name="AxiosError",S&&(this.code=S),v&&(this.config=v),b&&(this.request=b),m&&(this.response=m)}w.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var D=_.prototype,p={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(k){p[k]={value:k}}),Object.defineProperties(_,p),Object.defineProperty(D,"isAxiosError",{value:!0}),_.from=function(k,S,v,b,m,g){var E=Object.create(D);return w.toFlatObject(k,E,function(y){return y!==Error.prototype}),_.call(E,k.message,S,v,b,m),E.name=k.name,g&&Object.assign(E,g),E},W.exports=_},6808:(W,M,x)=>{var w=x(7201);function _(){this.handlers=[]}_.prototype.use=function(D,p,k){return this.handlers.push({fulfilled:D,rejected:p,synchronous:!!k&&k.synchronous,runWhen:k?k.runWhen:null}),this.handlers.length-1},_.prototype.eject=function(D){this.handlers[D]&&(this.handlers[D]=null)},_.prototype.forEach=function(D){w.forEach(this.handlers,function(p){p!==null&&D(p)})},W.exports=_},5967:(W,M,x)=>{var w=x(724),_=x(4669);W.exports=function(D,p){return D&&!w(p)?_(D,p):p}},7313:(W,M,x)=>{var w=x(7201),_=x(6431),D=x(1893),p=x(6339),k=x(8832);function S(v){if(v.cancelToken&&v.cancelToken.throwIfRequested(),v.signal&&v.signal.aborted)throw new k}W.exports=function(v){return S(v),v.headers=v.headers||{},v.data=_.call(v,v.data,v.headers,v.transformRequest),v.headers=w.merge(v.headers.common||{},v.headers[v.method]||{},v.headers),w.forEach(["delete","get","head","post","put","patch","common"],function(b){delete v.headers[b]}),(v.adapter||p.adapter)(v).then(function(b){return S(v),b.data=_.call(v,b.data,b.headers,v.transformResponse),b},function(b){return D(b)||(S(v),b&&b.response&&(b.response.data=_.call(v,b.response.data,b.response.headers,v.transformResponse))),Promise.reject(b)})}},9834:(W,M,x)=>{var w=x(7201);W.exports=function(_,D){D=D||{};var p={};function k(E,y){return w.isPlainObject(E)&&w.isPlainObject(y)?w.merge(E,y):w.isPlainObject(y)?w.merge({},y):w.isArray(y)?y.slice():y}function S(E){return w.isUndefined(D[E])?w.isUndefined(_[E])?void 0:k(void 0,_[E]):k(_[E],D[E])}function v(E){if(!w.isUndefined(D[E]))return k(void 0,D[E])}function b(E){return w.isUndefined(D[E])?w.isUndefined(_[E])?void 0:k(void 0,_[E]):k(void 0,D[E])}function m(E){return E in D?k(_[E],D[E]):E in _?k(void 0,_[E]):void 0}var g={url:v,method:v,data:v,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:m};return w.forEach(Object.keys(_).concat(Object.keys(D)),function(E){var y=g[E]||S,T=y(E);w.isUndefined(T)&&y!==m||(p[E]=T)}),p}},9095:(W,M,x)=>{var w=x(1766);W.exports=function(_,D,p){var k=p.config.validateStatus;p.status&&k&&!k(p.status)?D(new w("Request failed with status code "+p.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(p.status/100)-4],p.config,p.request,p)):_(p)}},6431:(W,M,x)=>{var w=x(7201),_=x(6339);W.exports=function(D,p,k){var S=this||_;return w.forEach(k,function(v){D=v.call(S,D,p)}),D}},6339:(W,M,x)=>{var w=x(7201),_=x(5227),D=x(1766),p=x(4033),k=x(6615),S={"Content-Type":"application/x-www-form-urlencoded"};function v(g,E){!w.isUndefined(g)&&w.isUndefined(g["Content-Type"])&&(g["Content-Type"]=E)}var b,m={transitional:p,adapter:((typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(b=x(8170)),b),transformRequest:[function(g,E){if(_(E,"Accept"),_(E,"Content-Type"),w.isFormData(g)||w.isArrayBuffer(g)||w.isBuffer(g)||w.isStream(g)||w.isFile(g)||w.isBlob(g))return g;if(w.isArrayBufferView(g))return g.buffer;if(w.isURLSearchParams(g))return v(E,"application/x-www-form-urlencoded;charset=utf-8"),g.toString();var y,T=w.isObject(g),l=E&&E["Content-Type"];if((y=w.isFileList(g))||T&&l==="multipart/form-data"){var r=this.env&&this.env.FormData;return k(y?{"files[]":g}:g,r&&new r)}return T||l==="application/json"?(v(E,"application/json"),function(n,d,h){if(w.isString(n))try{return(0,JSON.parse)(n),w.trim(n)}catch(a){if(a.name!=="SyntaxError")throw a}return(0,JSON.stringify)(n)}(g)):g}],transformResponse:[function(g){var E=this.transitional||m.transitional,y=E&&E.silentJSONParsing,T=E&&E.forcedJSONParsing,l=!y&&this.responseType==="json";if(l||T&&w.isString(g)&&g.length)try{return JSON.parse(g)}catch(r){if(l)throw r.name==="SyntaxError"?D.from(r,D.ERR_BAD_RESPONSE,this,null,this.response):r}return g}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x(3997)},validateStatus:function(g){return g>=200&&g<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(g){m.headers[g]={}}),w.forEach(["post","put","patch"],function(g){m.headers[g]=w.merge(S)}),W.exports=m},4033:W=>{W.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:W=>{W.exports={version:"0.27.2"}},5305:W=>{W.exports=function(M,x){return function(){for(var w=new Array(arguments.length),_=0;_<w.length;_++)w[_]=arguments[_];return M.apply(x,w)}}},6374:(W,M,x)=>{var w=x(7201);function _(D){return encodeURIComponent(D).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}W.exports=function(D,p,k){if(!p)return D;var S;if(k)S=k(p);else if(w.isURLSearchParams(p))S=p.toString();else{var v=[];w.forEach(p,function(m,g){m!=null&&(w.isArray(m)?g+="[]":m=[m],w.forEach(m,function(E){w.isDate(E)?E=E.toISOString():w.isObject(E)&&(E=JSON.stringify(E)),v.push(_(g)+"="+_(E))}))}),S=v.join("&")}if(S){var b=D.indexOf("#");b!==-1&&(D=D.slice(0,b)),D+=(D.indexOf("?")===-1?"?":"&")+S}return D}},4669:W=>{W.exports=function(M,x){return x?M.replace(/\/+$/,"")+"/"+x.replace(/^\/+/,""):M}},8416:(W,M,x)=>{var w=x(7201);W.exports=w.isStandardBrowserEnv()?{write:function(_,D,p,k,S,v){var b=[];b.push(_+"="+encodeURIComponent(D)),w.isNumber(p)&&b.push("expires="+new Date(p).toGMTString()),w.isString(k)&&b.push("path="+k),w.isString(S)&&b.push("domain="+S),v===!0&&b.push("secure"),document.cookie=b.join("; ")},read:function(_){var D=document.cookie.match(new RegExp("(^|;\\s*)("+_+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(_){this.write(_,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:W=>{W.exports=function(M){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(M)}},3319:(W,M,x)=>{var w=x(7201);W.exports=function(_){return w.isObject(_)&&_.isAxiosError===!0}},1224:(W,M,x)=>{var w=x(7201);W.exports=w.isStandardBrowserEnv()?function(){var _,D=/(msie|trident)/i.test(navigator.userAgent),p=document.createElement("a");function k(S){var v=S;return D&&(p.setAttribute("href",v),v=p.href),p.setAttribute("href",v),{href:p.href,protocol:p.protocol?p.protocol.replace(/:$/,""):"",host:p.host,search:p.search?p.search.replace(/^\?/,""):"",hash:p.hash?p.hash.replace(/^#/,""):"",hostname:p.hostname,port:p.port,pathname:p.pathname.charAt(0)==="/"?p.pathname:"/"+p.pathname}}return _=k(window.location.href),function(S){var v=w.isString(S)?k(S):S;return v.protocol===_.protocol&&v.host===_.host}}():function(){return!0}},5227:(W,M,x)=>{var w=x(7201);W.exports=function(_,D){w.forEach(_,function(p,k){k!==D&&k.toUpperCase()===D.toUpperCase()&&(_[D]=p,delete _[k])})}},3997:W=>{W.exports=null},5032:(W,M,x)=>{var w=x(7201),_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];W.exports=function(D){var p,k,S,v={};return D&&w.forEach(D.split(`
`),function(b){if(S=b.indexOf(":"),p=w.trim(b.substr(0,S)).toLowerCase(),k=w.trim(b.substr(S+1)),p){if(v[p]&&_.indexOf(p)>=0)return;v[p]=p==="set-cookie"?(v[p]?v[p]:[]).concat([k]):v[p]?v[p]+", "+k:k}}),v}},8699:W=>{W.exports=function(M){var x=/^([-+\w]{1,25})(:?\/\/|:)/.exec(M);return x&&x[1]||""}},3282:W=>{W.exports=function(M){return function(x){return M.apply(null,x)}}},6615:(W,M,x)=>{function w(D){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},w(D)}var _=x(7201);W.exports=function(D,p){p=p||new FormData;var k=[];function S(v){return v===null?"":_.isDate(v)?v.toISOString():_.isArrayBuffer(v)||_.isTypedArray(v)?typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}return function v(b,m){if(_.isPlainObject(b)||_.isArray(b)){if(k.indexOf(b)!==-1)throw Error("Circular reference detected in "+m);k.push(b),_.forEach(b,function(g,E){if(!_.isUndefined(g)){var y,T=m?m+"."+E:E;if(g&&!m&&w(g)==="object"){if(_.endsWith(E,"{}"))g=JSON.stringify(g);else if(_.endsWith(E,"[]")&&(y=_.toArray(g)))return void y.forEach(function(l){!_.isUndefined(l)&&p.append(T,S(l))})}v(g,T)}}),k.pop()}else p.append(m,S(b))}(D),p}},9712:(W,M,x)=>{function w(S){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},w(S)}var _=x(4316).version,D=x(1766),p={};["object","boolean","number","function","string","symbol"].forEach(function(S,v){p[S]=function(b){return w(b)===S||"a"+(v<1?"n ":" ")+S}});var k={};p.transitional=function(S,v,b){function m(g,E){return"[Axios v"+_+"] Transitional option '"+g+"'"+E+(b?". "+b:"")}return function(g,E,y){if(S===!1)throw new D(m(E," has been removed"+(v?" in "+v:"")),D.ERR_DEPRECATED);return v&&!k[E]&&(k[E]=!0,console.warn(m(E," has been deprecated since v"+v+" and will be removed in the near future"))),!S||S(g,E,y)}},W.exports={assertOptions:function(S,v,b){if(w(S)!=="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);for(var m=Object.keys(S),g=m.length;g-- >0;){var E=m[g],y=v[E];if(y){var T=S[E],l=T===void 0||y(T,E,S);if(l!==!0)throw new D("option "+E+" must be "+l,D.ERR_BAD_OPTION_VALUE)}else if(b!==!0)throw new D("Unknown option "+E,D.ERR_BAD_OPTION)}},validators:p}},7201:(W,M,x)=>{function w(e){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},w(e)}var _,D=x(5305),p=Object.prototype.toString,k=(_=Object.create(null),function(e){var o=p.call(e);return _[o]||(_[o]=o.slice(8,-1).toLowerCase())});function S(e){return e=e.toLowerCase(),function(o){return k(o)===e}}function v(e){return Array.isArray(e)}function b(e){return e===void 0}var m=S("ArrayBuffer");function g(e){return e!==null&&w(e)==="object"}function E(e){if(k(e)!=="object")return!1;var o=Object.getPrototypeOf(e);return o===null||o===Object.prototype}var y=S("Date"),T=S("File"),l=S("Blob"),r=S("FileList");function n(e){return p.call(e)==="[object Function]"}var d=S("URLSearchParams");function h(e,o){if(e!=null)if(w(e)!=="object"&&(e=[e]),v(e))for(var s=0,A=e.length;s<A;s++)o.call(null,e[s],s,e);else for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&o.call(null,e[u],u,e)}var a,t=(a=typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array),function(e){return a&&e instanceof a});W.exports={isArray:v,isArrayBuffer:m,isBuffer:function(e){return e!==null&&!b(e)&&e.constructor!==null&&!b(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)},isFormData:function(e){var o="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||p.call(e)===o||n(e.toString)&&e.toString()===o)},isArrayBufferView:function(e){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer)},isString:function(e){return typeof e=="string"},isNumber:function(e){return typeof e=="number"},isObject:g,isPlainObject:E,isUndefined:b,isDate:y,isFile:T,isBlob:l,isFunction:n,isStream:function(e){return g(e)&&n(e.pipe)},isURLSearchParams:d,isStandardBrowserEnv:function(){return(typeof navigator>"u"||navigator.product!=="ReactNative"&&navigator.product!=="NativeScript"&&navigator.product!=="NS")&&typeof window<"u"&&typeof document<"u"},forEach:h,merge:function e(){var o={};function s(f,c){E(o[c])&&E(f)?o[c]=e(o[c],f):E(f)?o[c]=e({},f):v(f)?o[c]=f.slice():o[c]=f}for(var A=0,u=arguments.length;A<u;A++)h(arguments[A],s);return o},extend:function(e,o,s){return h(o,function(A,u){e[u]=s&&typeof A=="function"?D(A,s):A}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e},inherits:function(e,o,s,A){e.prototype=Object.create(o.prototype,A),e.prototype.constructor=e,s&&Object.assign(e.prototype,s)},toFlatObject:function(e,o,s){var A,u,f,c={};o=o||{};do{for(u=(A=Object.getOwnPropertyNames(e)).length;u-- >0;)c[f=A[u]]||(o[f]=e[f],c[f]=!0);e=Object.getPrototypeOf(e)}while(e&&(!s||s(e,o))&&e!==Object.prototype);return o},kindOf:k,kindOfTest:S,endsWith:function(e,o,s){e=String(e),(s===void 0||s>e.length)&&(s=e.length),s-=o.length;var A=e.indexOf(o,s);return A!==-1&&A===s},toArray:function(e){if(!e)return null;var o=e.length;if(b(o))return null;for(var s=new Array(o);o-- >0;)s[o]=e[o];return s},isTypedArray:t,isFileList:r}},8160:W=>{W.exports=function(M){var x=[];return x.toString=function(){return this.map(function(w){var _="",D=w[5]!==void 0;return w[4]&&(_+="@supports (".concat(w[4],") {")),w[2]&&(_+="@media ".concat(w[2]," {")),D&&(_+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),_+=M(w),D&&(_+="}"),w[2]&&(_+="}"),w[4]&&(_+="}"),_}).join("")},x.i=function(w,_,D,p,k){typeof w=="string"&&(w=[[null,w,void 0]]);var S={};if(D)for(var v=0;v<this.length;v++){var b=this[v][0];b!=null&&(S[b]=!0)}for(var m=0;m<w.length;m++){var g=[].concat(w[m]);D&&S[g[0]]||(k!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=k),_&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=_),p&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=p):g[4]="".concat(p)),x.push(g))}},x}},8431:W=>{W.exports=function(M,x){return x||(x={}),M&&(M=String(M.__esModule?M.default:M),/^['"].*['"]$/.test(M)&&(M=M.slice(1,-1)),x.hash&&(M+=x.hash),/["'() \t\n]|(%20)/.test(M)||x.needQuotes?'"'.concat(M.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):M)}},8955:W=>{W.exports=function(M){var x=M[1],w=M[3];if(!w)return x;if(typeof btoa=="function"){var _=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),D="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_),p="/*# ".concat(D," */"),k=w.sources.map(function(S){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(S," */")});return[x].concat(k).concat([p]).join(`
`)}return[x].join(`
`)}},7831:W=>{W.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},Ee={};function J(W){var M=Ee[W];if(M!==void 0)return M.exports;var x=Ee[W]={id:W,exports:{}};return Be[W](x,x.exports,J),x.exports}J.m=Be,J.n=W=>{var M=W&&W.__esModule?()=>W.default:()=>W;return J.d(M,{a:M}),M},J.d=(W,M)=>{for(var x in M)J.o(M,x)&&!J.o(W,x)&&Object.defineProperty(W,x,{enumerable:!0,get:M[x]})},J.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),J.o=(W,M)=>Object.prototype.hasOwnProperty.call(W,M),J.b=document.baseURI||self.location.href,J.nc=void 0;var _e={};return(()=>{J.d(_e,{default:()=>tr});var W=J(9624),M=J.n(W),x=J(6990),w=J.n(x),_=J(6892),D=J.n(_),p=J(6359),k=J.n(p),S=J(2716),v=J.n(S),b=J(230),m=J.n(b),g=J(3150),E={};E.styleTagTransform=m(),E.setAttributes=k(),E.insert=D().bind(null,"head"),E.domAPI=w(),E.insertStyleElement=v(),M()(g.Z,E),g.Z&&g.Z.locals&&g.Z.locals;function y(U){return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},y(U)}function T(U){return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},T(U)}var l=setTimeout;function r(U){return Boolean(U&&U.length!==void 0)}function n(){}function d(U){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if(typeof U!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(U,this)}function h(U,N){for(;U._state===3;)U=U._value;U._state!==0?(U._handled=!0,d._immediateFn(function(){var F=U._state===1?N.onFulfilled:N.onRejected;if(F!==null){var I;try{I=F(U._value)}catch(P){return void t(N.promise,P)}a(N.promise,I)}else(U._state===1?a:t)(N.promise,U._value)})):U._deferreds.push(N)}function a(U,N){try{if(N===U)throw new TypeError("A promise cannot be resolved with itself.");if(N&&(T(N)==="object"||typeof N=="function")){var F=N.then;if(N instanceof d)return U._state=3,U._value=N,void e(U);if(typeof F=="function")return void s((I=F,P=N,function(){I.apply(P,arguments)}),U)}U._state=1,U._value=N,e(U)}catch(H){t(U,H)}var I,P}function t(U,N){U._state=2,U._value=N,e(U)}function e(U){U._state===2&&U._deferreds.length===0&&d._immediateFn(function(){U._handled||d._unhandledRejectionFn(U._value)});for(var N=0,F=U._deferreds.length;N<F;N++)h(U,U._deferreds[N]);U._deferreds=null}function o(U,N,F){this.onFulfilled=typeof U=="function"?U:null,this.onRejected=typeof N=="function"?N:null,this.promise=F}function s(U,N){var F=!1;try{U(function(I){F||(F=!0,a(N,I))},function(I){F||(F=!0,t(N,I))})}catch(I){if(F)return;F=!0,t(N,I)}}d.prototype.catch=function(U){return this.then(null,U)},d.prototype.then=function(U,N){var F=new this.constructor(n);return h(this,new o(U,N,F)),F},d.prototype.finally=function(U){var N=this.constructor;return this.then(function(F){return N.resolve(U()).then(function(){return F})},function(F){return N.resolve(U()).then(function(){return N.reject(F)})})},d.all=function(U){return new d(function(N,F){if(!r(U))return F(new TypeError("Promise.all accepts an array"));var I=Array.prototype.slice.call(U);if(I.length===0)return N([]);var P=I.length;function H(Q,q){try{if(q&&(T(q)==="object"||typeof q=="function")){var re=q.then;if(typeof re=="function")return void re.call(q,function(fe){H(Q,fe)},F)}I[Q]=q,--P==0&&N(I)}catch(fe){F(fe)}}for(var z=0;z<I.length;z++)H(z,I[z])})},d.allSettled=function(U){return new this(function(N,F){if(!U||U.length===void 0)return F(new TypeError(y(U)+" "+U+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var I=Array.prototype.slice.call(U);if(I.length===0)return N([]);var P=I.length;function H(Q,q){if(q&&(y(q)==="object"||typeof q=="function")){var re=q.then;if(typeof re=="function")return void re.call(q,function(fe){H(Q,fe)},function(fe){I[Q]={status:"rejected",reason:fe},--P==0&&N(I)})}I[Q]={status:"fulfilled",value:q},--P==0&&N(I)}for(var z=0;z<I.length;z++)H(z,I[z])})},d.resolve=function(U){return U&&T(U)==="object"&&U.constructor===d?U:new d(function(N){N(U)})},d.reject=function(U){return new d(function(N,F){F(U)})},d.race=function(U){return new d(function(N,F){if(!r(U))return F(new TypeError("Promise.race accepts an array"));for(var I=0,P=U.length;I<P;I++)d.resolve(U[I]).then(N,F)})},d._immediateFn=typeof setImmediate=="function"&&function(U){setImmediate(U)}||function(U){l(U,0)},d._unhandledRejectionFn=function(U){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",U)};const A=d;var u=/mobile/i.test(window.navigator.userAgent);const f={secondToTime:function(U){if((U=U||0)===0||U===1/0||U.toString()==="NaN")return"00:00";var N=Math.floor(U/3600),F=Math.floor((U-3600*N)/60),I=Math.floor(U-3600*N-60*F);return(N>0?[N,F,I]:[F,I]).map(function(P){return P<10?"0"+P:""+P}).join(":")},getElementViewLeft:function(U){var N=U.offsetLeft,F=U.offsetParent,I=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;F!==null&&F!==U;)N+=F.offsetLeft,F=F.offsetParent;else for(;F!==null;)N+=F.offsetLeft,F=F.offsetParent;return N-I},getBoundingClientRectViewLeft:function(U){var N=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(U.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var F=document.createElement("div");F.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(F),this.getBoundingClientRectViewLeft.offset=-F.getBoundingClientRect().top-N,document.body.removeChild(F),F=null}var I=U.getBoundingClientRect(),P=this.getBoundingClientRectViewLeft.offset;return I.left+P}return this.getElementViewLeft(U)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(U){var N=U.left,F=N===void 0?0:N,I=U.top,P=I===void 0?0:I;this.isFirefox?(document.documentElement.scrollLeft=F,document.documentElement.scrollTop=P):window.scrollTo(F,P)},isMobile:u,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(U,N){localStorage.setItem(U,N)},get:function(U){return localStorage.getItem(U)}},nameMap:{dragStart:u?"touchstart":"mousedown",dragMove:u?"touchmove":"mousemove",dragEnd:u?"touchend":"mouseup"},color2Number:function(U){return U[0]==="#"&&(U=U.substr(1)),U.length===3&&(U="".concat(U[0]).concat(U[0]).concat(U[1]).concat(U[1]).concat(U[2]).concat(U[2])),parseInt(U,16)+0&16777215},number2Color:function(U){return"#"+("00000"+U.toString(16)).slice(-6)},number2Type:function(U){switch(U){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var c=J(6208),i=J.n(c);const C={send:function(U){i().post(U.url,U.data).then(function(N){var F=N.data;F&&F.code===0?U.success&&U.success(F):U.error&&U.error(F&&F.msg)}).catch(function(N){console.error(N),U.error&&U.error()})},read:function(U){i().get(U.url).then(function(N){var F=N.data;F&&F.code===0?U.success&&U.success(F.data.map(function(I){return{time:I[0],type:I[1],color:I[2],author:I[3],text:I[4]}})):U.error&&U.error(F&&F.msg)}).catch(function(N){console.error(N),U.error&&U.error()})}};function L(U){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},L(U)}function R(U){var N=this;this.lang=U,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(F){return F=F.toLowerCase(),O[N.lang]&&O[N.lang][F]?O[N.lang][F]:O[N.fallbackLang]&&O[N.fallbackLang][F]?O[N.fallbackLang][F]:B[F]?B[F]:F}}var B={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},O={en:B,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},K=J(730),G=J.n(K),j=J(6074),Y=J.n(j),V=J(4437),X=J.n(V),Z=J(2644),$=J.n(Z),ee=J(1324),ae=J.n(ee),ne=J(4574),oe=J.n(ne),se=J(1415),te=J.n(se),ie=J(5934),ue=J.n(ie),de=J(1428),ce=J.n(de),be=J(2807),he=J.n(be),Le=J(338),xe=J.n(Le),ye=J(2254),Se=J.n(ye),De=J(1965),Re=J.n(De),ke=J(8113),Ie=J.n(ke),Oe=J(6251),we=J.n(Oe),Ne=J(8410),Ae=J.n(Ne),Ce=J(4182),Pe=J.n(Ce),me=J(3193),Te=J.n(me);const ve={play:G(),pause:Y(),volumeUp:X(),volumeDown:$(),volumeOff:ae(),full:oe(),fullWeb:te(),setting:ue(),right:ce(),comment:he(),commentOff:xe(),send:Se(),pallette:Re(),camera:Ie(),subtitle:Ae(),loading:Pe(),airplay:we(),chromecast:Te()};var je=J(1916),ze=J.n(je);function Ye(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Fe=function(){function U(P){(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=P.container,this.options=P.options,this.index=P.index,this.tran=P.tran,this.init()}var N,F,I;return N=U,I=[{key:"NewNotice",value:function(P,H){var z=document.createElement("div");return z.classList.add("dplayer-notice"),z.style.opacity=H,z.innerText=P,z}}],(F=[{key:"init",value:function(){this.container.innerHTML=ze()({options:this.options,index:this.index,tran:this.tran,icons:ve,mobile:f.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!f.isSafari||f.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Ye(N.prototype,F),I&&Ye(N,I),Object.defineProperty(N,"prototype",{writable:!1}),U}();const rt=Fe;function Ke(U){return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},Ke(U)}function We(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var qe=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=I,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var N,F;return N=U,F=[{key:"load",value:function(){var I,P=this;I=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var H=(this.options.api.addition||[]).slice(0);H.push(I),this.events&&this.events.trigger("danmaku_load_start",H),this._readAllEndpoints(H,function(z){P.dan=[].concat.apply([],z).sort(function(Q,q){return Q.time-q.time}),window.requestAnimationFrame(function(){P.frame()}),P.options.callback(),P.events&&P.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(I){this.options.api=I,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(I,P){for(var H=this,z=[],Q=0,q=function(fe){H.options.apiBackend.read({url:I[fe],success:function(ge){z[fe]=ge,++Q===I.length&&P(z)},error:function(ge){H.options.error(ge||H.options.tran("danmaku-failed")),z[fe]=[],++Q===I.length&&P(z)}})},re=0;re<I.length;++re)q(re)}},{key:"send",value:function(I,P){var H=this,z={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:I.text,color:I.color,type:I.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:z,success:P,error:function(q){H.options.error(q||H.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,z),this.danIndex++;var Q={text:this.htmlEncode(z.text),color:z.color,type:z.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(Q),this.events&&this.events.trigger("danmaku_send",z)}},{key:"frame",value:function(){var I=this;if(this.dan.length&&!this.paused&&this.showing){for(var P=this.dan[this.danIndex],H=[];P&&this.options.time()>parseFloat(P.time);)H.push(P),P=this.dan[++this.danIndex];this.draw(H)}window.requestAnimationFrame(function(){I.frame()})}},{key:"opacity",value:function(I){if(I!==void 0){for(var P=this.container.getElementsByClassName("dplayer-danmaku-item"),H=0;H<P.length;H++)P[H].style.opacity=I;this._opacity=I,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(I){var P=this;if(this.showing){var H=this.options.height,z=this.container.offsetWidth,Q=this.container.offsetHeight,q=parseInt(Q/H),re=function(le){var pe=le.offsetWidth||parseInt(le.style.width),ot=le.getBoundingClientRect().right||P.container.getBoundingClientRect().right+pe;return P.container.getBoundingClientRect().right-ot},fe=function(le){return(z+le)/5},ge=function(le,pe,ot){for(var Qe=z/fe(ot),nr=function(et){var st=P.danTunnel[pe][et+""];if(!st||!st.length)return P.danTunnel[pe][et+""]=[le],le.addEventListener("animationend",function(){P.danTunnel[pe][et+""].splice(0,1)}),{v:et%q};if(pe!=="right")return"continue";for(var ft=0;ft<st.length;ft++){var dn=re(st[ft])-10;if(dn<=z-Qe*fe(parseInt(st[ft].style.width))||dn<=0)break;if(ft===st.length-1)return P.danTunnel[pe][et+""].push(le),le.addEventListener("animationend",function(){P.danTunnel[pe][et+""].splice(0,1)}),{v:et%q}}},Ht=0;P.unlimited||Ht<q;Ht++){var jt=nr(Ht);if(jt!=="continue"&&Ke(jt)==="object")return jt.v}return-1};Object.prototype.toString.call(I)!=="[object Array]"&&(I=[I]);for(var Ge=document.createDocumentFragment(),Ue=function(le){I[le].type=f.number2Type(I[le].type),I[le].color||(I[le].color=16777215);var pe=document.createElement("div");pe.classList.add("dplayer-danmaku-item"),pe.classList.add("dplayer-danmaku-".concat(I[le].type)),I[le].border?pe.innerHTML='<span style="border:'.concat(I[le].border,'">').concat(I[le].text,"</span>"):pe.innerHTML=I[le].text,pe.style.opacity=P._opacity,pe.style.color=f.number2Color(I[le].color),pe.addEventListener("animationend",function(){P.container.removeChild(pe)});var ot=P._measure(I[le].text),Qe=void 0;switch(I[le].type){case"right":(Qe=ge(pe,I[le].type,ot))>=0&&(pe.style.width=ot+1+"px",pe.style.top=H*Qe+"px",pe.style.transform="translateX(-".concat(z,"px)"));break;case"top":(Qe=ge(pe,I[le].type))>=0&&(pe.style.top=H*Qe+"px");break;case"bottom":(Qe=ge(pe,I[le].type))>=0&&(pe.style.bottom=H*Qe+"px");break;default:console.error("Can't handled danmaku type: ".concat(I[le].type))}Qe>=0&&(pe.classList.add("dplayer-danmaku-move"),pe.style.animationDuration=P._danAnimation(I[le].type),Ge.appendChild(pe))},$e=0;$e<I.length;$e++)Ue($e);return this.container.appendChild(Ge),Ge}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(I){if(!this.context){var P=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=P.getPropertyValue("font")}return this.context.measureText(I).width}},{key:"seek",value:function(){this.clear();for(var I=0;I<this.dan.length;I++){if(this.dan[I].time>=this.options.time()){this.danIndex=I;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(I){return I.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var I=this.container.offsetWidth,P=this.container.getElementsByClassName("dplayer-danmaku-item"),H=0;H<P.length;H++)P[H].style.transform="translateX(-".concat(I,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(I){this.unlimited=I}},{key:"speed",value:function(I){this.options.api.speedRate=I}},{key:"_danAnimation",value:function(I){var P=this.options.api.speedRate||1,H=!!this.player.fullScreen.isFullScreen();return{top:"".concat((H?6:4)/P,"s"),right:"".concat((H?8:5)/P,"s"),bottom:"".concat((H?6:4)/P,"s")}[I]}}],F&&We(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Ve=qe;function at(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}const dt=function(){function U(){(function(I,P){if(!(I instanceof P))throw new TypeError("Cannot call a class as a function")})(this,U),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var N,F;return N=U,(F=[{key:"on",value:function(I,P){this.type(I)&&typeof P=="function"&&(this.events[I]||(this.events[I]=[]),this.events[I].push(P))}},{key:"trigger",value:function(I,P){if(this.events[I]&&this.events[I].length)for(var H=0;H<this.events[I].length;H++)this.events[I][H](P)}},{key:"type",value:function(I){return this.playerEvents.indexOf(I)!==-1?"player":this.videoEvents.indexOf(I)!==-1?"video":(console.error("Unknown event name: ".concat(I)),null)}}])&&at(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();function Lt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var gt=function(){function U(I){var P=this;(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){P.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){P.player.resize(),f.setScrollPosition(P.lastScrollPosition)}),this.fullscreenchange=function(){P.player.resize(),P.isFullScreen("browser")?P.player.events.trigger("fullscreen"):(f.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var H=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;H&&H!==P.player.container||(P.player.resize(),H?P.player.events.trigger("fullscreen"):(f.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var N,F;return N=U,F=[{key:"isFullScreen",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(I){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",P=I==="browser"?"web":"browser",H=this.isFullScreen(P);switch(H||(this.lastScrollPosition=f.getScrollPosition()),I){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}H&&this.cancel(P)}},{key:"cancel",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(I){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(I)?this.cancel(I):this.request(I)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],F&&Lt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const ut=gt;function Me(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var mt=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:I.options.hasOwnProperty("volume")?I.options.volume:.7,unlimited:(I.options.danmaku&&I.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var N,F;return N=U,(F=[{key:"init",value:function(){for(var I in this.storageName){var P=this.storageName[I];this.data[I]=parseFloat(f.storage.get(P)||this.default[I])}}},{key:"get",value:function(I){return this.data[I]}},{key:"set",value:function(I,P){this.data[I]=P,f.storage.set(this.storageName[I],P)}}])&&Me(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const At=mt;function It(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Dt=function(){function U(I,P,H,z){(function(Q,q){if(!(Q instanceof q))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I,this.video=P,this.options=H,this.events=z,this.init()}var N,F;return N=U,F=[{key:"init",value:function(){var I=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var P=this.video.textTracks[0];P.oncuechange=function(){var H=P.activeCues[P.activeCues.length-1];if(I.container.innerHTML="",H){var z=document.createElement("div");z.appendChild(H.getCueAsHTML());var Q=z.innerHTML.split(/\r?\n/).map(function(q){return"<p>".concat(q,"</p>")}).join("");I.container.innerHTML=Q}I.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],F&&It(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const kt=Dt;function wt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Rt=function(){function U(I){var P=this;(function(q,re){if(!(q instanceof re))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){P.adaptiveHeight(),P.show()});for(var H=this.player.template.subtitlesItem.length-1,z=function(q){P.player.template.subtitlesItem[q].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==q&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src=P.player.template.subtitlesItem[q].dataset.subtitle,P.player.options.subtitle.index=q,P.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&P.subContainerShow())})},Q=0;Q<H;Q++)z(Q);this.player.template.subtitlesItem[H].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==H&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src="",P.player.options.subtitle.index=H,P.subContainerHide())})}var N,F;return N=U,(F=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var I=30*this.player.template.subtitlesItem.length+14,P=.8*this.player.template.videoWrap.offsetHeight;I>=P-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=P-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=P-50+"px")}}])&&wt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const ct=Rt;function yt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Ot=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.elements={},this.elements.volume=I.volumeBar,this.elements.played=I.playedBar,this.elements.loaded=I.loadedBar,this.elements.danmaku=I.danmakuOpacityBar}var N,F;return N=U,(F=[{key:"set",value:function(I,P,H){P=Math.max(P,0),P=Math.min(P,1),this.elements[I].style[H]=100*P+"%"}},{key:"get",value:function(I){return parseFloat(this.elements[I].style.width)/100}}])&&yt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Pt=Ot;function vn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var gn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(P){window.setTimeout(P,1e3/60)},this.types=["loading","info","fps"],this.init()}var N,F;return N=U,(F=[{key:"init",value:function(){var I=this;this.types.map(function(P){return P!=="fps"&&I["init".concat(P,"Checker")](),P})}},{key:"initloadingChecker",value:function(){var I=this,P=0,H=0,z=!1;this.loadingChecker=setInterval(function(){I.enableloadingChecker&&(H=I.player.video.currentTime,z||H!==P||I.player.video.paused||(I.player.container.classList.add("dplayer-loading"),z=!0),z&&H>P&&!I.player.video.paused&&(I.player.container.classList.remove("dplayer-loading"),z=!1),P=H)},100)}},{key:"initfpsChecker",value:function(){var I=this;window.requestAnimationFrame(function(){if(I.enablefpsChecker)if(I.initfpsChecker(),I.fpsStart){I.fpsIndex++;var P=new Date;P-I.fpsStart>1e3&&(I.player.infoPanel.fps(I.fpsIndex/(P-I.fpsStart)*1e3),I.fpsStart=new Date,I.fpsIndex=0)}else I.fpsStart=new Date,I.fpsIndex=0;else I.fpsStart=0,I.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var I=this;this.infoChecker=setInterval(function(){I.enableinfoChecker&&I.player.infoPanel.update()},1e3)}},{key:"enable",value:function(I){this["enable".concat(I,"Checker")]=!0,I==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(I){this["enable".concat(I,"Checker")]=!1}},{key:"destroy",value:function(){var I=this;this.types.map(function(P){return I["enable".concat(P,"Checker")]=!1,I["".concat(P,"Checker")]&&clearInterval(I["".concat(P,"Checker")]),P})}}])&&vn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const mn=gn;function An(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}const yn=function(){function U(I){var P=this;(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I,this.container.addEventListener("animationend",function(){P.container.classList.remove("dplayer-bezel-transition")})}var N,F;return N=U,(F=[{key:"switch",value:function(I){this.container.innerHTML=I,this.container.classList.add("dplayer-bezel-transition")}}])&&An(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();function En(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var bn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I.container,this.barWidth=I.barWidth,this.container.style.backgroundImage="url('".concat(I.url,"')"),this.events=I.events}var N,F;return N=U,(F=[{key:"resize",value:function(I,P,H){this.container.style.width="".concat(I,"px"),this.container.style.height="".concat(P,"px"),this.container.style.top="".concat(2-P,"px"),this.barWidth=H}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(I){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(I/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(I-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&En(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const xn=bn;var Mt=function(U,N){return Mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(F,I){F.__proto__=I}||function(F,I){for(var P in I)Object.prototype.hasOwnProperty.call(I,P)&&(F[P]=I[P])},Mt(U,N)};function Et(U,N){if(typeof N!="function"&&N!==null)throw new TypeError("Class extends value "+String(N)+" is not a constructor or null");function F(){this.constructor=U}Mt(U,N),U.prototype=N===null?Object.create(N):(F.prototype=N.prototype,new F)}function Bt(U){var N=typeof Symbol=="function"&&Symbol.iterator,F=N&&U[N],I=0;if(F)return F.call(U);if(U&&typeof U.length=="number")return{next:function(){return U&&I>=U.length&&(U=void 0),{value:U&&U[I++],done:!U}}};throw new TypeError(N?"Object is not iterable.":"Symbol.iterator is not defined.")}function bt(U,N){var F=typeof Symbol=="function"&&U[Symbol.iterator];if(!F)return U;var I,P,H=F.call(U),z=[];try{for(;(N===void 0||N-- >0)&&!(I=H.next()).done;)z.push(I.value)}catch(Q){P={error:Q}}finally{try{I&&!I.done&&(F=H.return)&&F.call(H)}finally{if(P)throw P.error}}return z}function xt(U,N,F){if(F||arguments.length===2)for(var I,P=0,H=N.length;P<H;P++)!I&&P in N||(I||(I=Array.prototype.slice.call(N,0,P)),I[P]=N[P]);return U.concat(I||Array.prototype.slice.call(N))}function Xe(U){return typeof U=="function"}function Xt(U){var N=U(function(F){Error.call(F),F.stack=new Error().stack});return N.prototype=Object.create(Error.prototype),N.prototype.constructor=N,N}var Ft=Xt(function(U){return function(N){U(this),this.message=N?N.length+` errors occurred during unsubscription:
`+N.map(function(F,I){return I+1+") "+F.toString()}).join(""):"",this.name="UnsubscriptionError",this.errors=N}});function Ut(U,N){if(U){var F=U.indexOf(N);0<=F&&U.splice(F,1)}}var Ct=function(){function U(F){this.initialTeardown=F,this.closed=!1,this._parentage=null,this._finalizers=null}var N;return U.prototype.unsubscribe=function(){var F,I,P,H,z;if(!this.closed){this.closed=!0;var Q=this._parentage;if(Q)if(this._parentage=null,Array.isArray(Q))try{for(var q=Bt(Q),re=q.next();!re.done;re=q.next())re.value.remove(this)}catch(le){F={error:le}}finally{try{re&&!re.done&&(I=q.return)&&I.call(q)}finally{if(F)throw F.error}}else Q.remove(this);var fe=this.initialTeardown;if(Xe(fe))try{fe()}catch(le){z=le instanceof Ft?le.errors:[le]}var ge=this._finalizers;if(ge){this._finalizers=null;try{for(var Ge=Bt(ge),Ue=Ge.next();!Ue.done;Ue=Ge.next()){var $e=Ue.value;try{qt($e)}catch(le){z=z!=null?z:[],le instanceof Ft?z=xt(xt([],bt(z)),bt(le.errors)):z.push(le)}}}catch(le){P={error:le}}finally{try{Ue&&!Ue.done&&(H=Ge.return)&&H.call(Ge)}finally{if(P)throw P.error}}}if(z)throw new Ft(z)}},U.prototype.add=function(F){var I;if(F&&F!==this)if(this.closed)qt(F);else{if(F instanceof U){if(F.closed||F._hasParent(this))return;F._addParent(this)}(this._finalizers=(I=this._finalizers)!==null&&I!==void 0?I:[]).push(F)}},U.prototype._hasParent=function(F){var I=this._parentage;return I===F||Array.isArray(I)&&I.includes(F)},U.prototype._addParent=function(F){var I=this._parentage;this._parentage=Array.isArray(I)?(I.push(F),I):I?[I,F]:F},U.prototype._removeParent=function(F){var I=this._parentage;I===F?this._parentage=null:Array.isArray(I)&&Ut(I,F)},U.prototype.remove=function(F){var I=this._finalizers;I&&Ut(I,F),F instanceof U&&F._removeParent(this)},U.EMPTY=((N=new U).closed=!0,N),U}(),Qt=Ct.EMPTY;function Zt(U){return U instanceof Ct||U&&"closed"in U&&Xe(U.remove)&&Xe(U.add)&&Xe(U.unsubscribe)}function qt(U){Xe(U)?U():U.unsubscribe()}var Cn=void 0,Tn=!1,Nt={setTimeout:function(U){function N(F,I){return U.apply(this,arguments)}return N.toString=function(){return U.toString()},N}(function(U,N){for(var F=[],I=2;I<arguments.length;I++)F[I-2]=arguments[I];var P=Nt.delegate;return P!=null&&P.setTimeout?P.setTimeout.apply(P,xt([U,N],bt(F))):setTimeout.apply(void 0,xt([U,N],bt(F)))}),clearTimeout:function(U){function N(F){return U.apply(this,arguments)}return N.toString=function(){return U.toString()},N}(function(U){var N=Nt.delegate;return((N==null?void 0:N.clearTimeout)||clearTimeout)(U)}),delegate:void 0};function Jt(){}function Tt(U){U()}var $t=function(U){function N(F){var I=U.call(this)||this;return I.isStopped=!1,F?(I.destination=F,Zt(F)&&F.add(I)):I.destination=Ln,I}return Et(N,U),N.create=function(F,I,P){return new Wt(F,I,P)},N.prototype.next=function(F){this.isStopped?void 0:this._next(F)},N.prototype.error=function(F){this.isStopped?void 0:(this.isStopped=!0,this._error(F))},N.prototype.complete=function(){this.isStopped?void 0:(this.isStopped=!0,this._complete())},N.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,U.prototype.unsubscribe.call(this),this.destination=null)},N.prototype._next=function(F){this.destination.next(F)},N.prototype._error=function(F){try{this.destination.error(F)}finally{this.unsubscribe()}},N.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},N}(Ct),_n=Function.prototype.bind;function Kt(U,N){return _n.call(U,N)}var Sn=function(){function U(N){this.partialObserver=N}return U.prototype.next=function(N){var F=this.partialObserver;if(F.next)try{F.next(N)}catch(I){_t(I)}},U.prototype.error=function(N){var F=this.partialObserver;if(F.error)try{F.error(N)}catch(I){_t(I)}else _t(N)},U.prototype.complete=function(){var N=this.partialObserver;if(N.complete)try{N.complete()}catch(F){_t(F)}},U}(),Wt=function(U){function N(F,I,P){var H,z,Q=U.call(this)||this;return Xe(F)||!F?H={next:F!=null?F:void 0,error:I!=null?I:void 0,complete:P!=null?P:void 0}:Q&&Tn?((z=Object.create(F)).unsubscribe=function(){return Q.unsubscribe()},H={next:F.next&&Kt(F.next,z),error:F.error&&Kt(F.error,z),complete:F.complete&&Kt(F.complete,z)}):H=F,Q.destination=new Sn(H),Q}return Et(N,U),N}($t);function _t(U){(function(N){Nt.setTimeout(function(){throw N})})(U)}function Dr(U,N){}var Ln={closed:!0,next:Jt,error:function(U){throw U},complete:Jt},In=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Dn(U){return U}function kn(U){return U.length===0?Dn:U.length===1?U[0]:function(N){return U.reduce(function(F,I){return I(F)},N)}}var en=function(){function U(N){N&&(this._subscribe=N)}return U.prototype.lift=function(N){var F=new U;return F.source=this,F.operator=N,F},U.prototype.subscribe=function(N,F,I){var P,H=this,z=(P=N)&&P instanceof $t||function(Q){return Q&&Xe(Q.next)&&Xe(Q.error)&&Xe(Q.complete)}(P)&&Zt(P)?N:new Wt(N,F,I);return Tt(function(){var Q=H,q=Q.operator,re=Q.source;z.add(q?q.call(z,re):re?H._subscribe(z):H._trySubscribe(z))}),z},U.prototype._trySubscribe=function(N){try{return this._subscribe(N)}catch(F){N.error(F)}},U.prototype.forEach=function(N,F){var I=this;return new(F=tn(F))(function(P,H){var z=new Wt({next:function(Q){try{N(Q)}catch(q){H(q),z.unsubscribe()}},error:H,complete:P});I.subscribe(z)})},U.prototype._subscribe=function(N){var F;return(F=this.source)===null||F===void 0?void 0:F.subscribe(N)},U.prototype[In]=function(){return this},U.prototype.pipe=function(){for(var N=[],F=0;F<arguments.length;F++)N[F]=arguments[F];return kn(N)(this)},U.prototype.toPromise=function(N){var F=this;return new(N=tn(N))(function(I,P){var H;F.subscribe(function(z){return H=z},function(z){return P(z)},function(){return I(H)})})},U.create=function(N){return new U(N)},U}();function tn(U){var N;return(N=U!=null?U:Cn)!==null&&N!==void 0?N:Promise}var Je,wn=Xt(function(U){return function(){U(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),nn=function(U){function N(){var F=U.call(this)||this;return F.closed=!1,F.currentObservers=null,F.observers=[],F.isStopped=!1,F.hasError=!1,F.thrownError=null,F}return Et(N,U),N.prototype.lift=function(F){var I=new rn(this,this);return I.operator=F,I},N.prototype._throwIfClosed=function(){if(this.closed)throw new wn},N.prototype.next=function(F){var I=this;Tt(function(){var P,H;if(I._throwIfClosed(),!I.isStopped){I.currentObservers||(I.currentObservers=Array.from(I.observers));try{for(var z=Bt(I.currentObservers),Q=z.next();!Q.done;Q=z.next())Q.value.next(F)}catch(q){P={error:q}}finally{try{Q&&!Q.done&&(H=z.return)&&H.call(z)}finally{if(P)throw P.error}}}})},N.prototype.error=function(F){var I=this;Tt(function(){if(I._throwIfClosed(),!I.isStopped){I.hasError=I.isStopped=!0,I.thrownError=F;for(var P=I.observers;P.length;)P.shift().error(F)}})},N.prototype.complete=function(){var F=this;Tt(function(){if(F._throwIfClosed(),!F.isStopped){F.isStopped=!0;for(var I=F.observers;I.length;)I.shift().complete()}})},N.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(N.prototype,"observed",{get:function(){var F;return((F=this.observers)===null||F===void 0?void 0:F.length)>0},enumerable:!1,configurable:!0}),N.prototype._trySubscribe=function(F){return this._throwIfClosed(),U.prototype._trySubscribe.call(this,F)},N.prototype._subscribe=function(F){return this._throwIfClosed(),this._checkFinalizedStatuses(F),this._innerSubscribe(F)},N.prototype._innerSubscribe=function(F){var I=this,P=this,H=P.hasError,z=P.isStopped,Q=P.observers;return H||z?Qt:(this.currentObservers=null,Q.push(F),new Ct(function(){I.currentObservers=null,Ut(Q,F)}))},N.prototype._checkFinalizedStatuses=function(F){var I=this,P=I.hasError,H=I.thrownError,z=I.isStopped;P?F.error(H):z&&F.complete()},N.prototype.asObservable=function(){var F=new en;return F.source=this,F},N.create=function(F,I){return new rn(F,I)},N}(en),rn=function(U){function N(F,I){var P=U.call(this)||this;return P.destination=F,P.source=I,P}return Et(N,U),N.prototype.next=function(F){var I,P;(P=(I=this.destination)===null||I===void 0?void 0:I.next)===null||P===void 0||P.call(I,F)},N.prototype.error=function(F){var I,P;(P=(I=this.destination)===null||I===void 0?void 0:I.error)===null||P===void 0||P.call(I,F)},N.prototype.complete=function(){var F,I;(I=(F=this.destination)===null||F===void 0?void 0:F.complete)===null||I===void 0||I.call(F)},N.prototype._subscribe=function(F){var I,P;return(P=(I=this.source)===null||I===void 0?void 0:I.subscribe(F))!==null&&P!==void 0?P:Qt},N}(nn);function Rn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var an=!0,Gt=!1,On=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.autoHideTimer=0,f.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),f.isMobile||this.initVolumeButton()}var N,F;return N=U,(F=[{key:"initPlayButton",value:function(){var I=this;this.player.template.playButton.addEventListener("click",function(){I.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){I.player.toggle()}),f.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){I.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){I.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){I.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){I.player.toggle()}))}},{key:"initHighlights",value:function(){var I=this;this.player.on("durationchange",function(){if(I.player.video.duration!==1&&I.player.video.duration!==1/0&&I.player.options.highlight){var P=I.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(P,0).forEach(function(Q){I.player.template.playedBarWrap.removeChild(Q)});for(var H=0;H<I.player.options.highlight.length;H++)if(I.player.options.highlight[H].text&&I.player.options.highlight[H].time){var z=document.createElement("div");z.classList.add("dplayer-highlight"),z.style.left=I.player.options.highlight[H].time/I.player.video.duration*100+"%",z.innerHTML='<span class="dplayer-highlight-text">'+I.player.options.highlight[H].text+"</span>",I.player.template.playedBarWrap.insertBefore(z,I.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var I=this;this.player.options.video.thumbnails&&(this.thumbnails=new xn({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){I.thumbnails.resize(160,I.player.video.videoHeight/I.player.video.videoWidth*160,I.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var I=this,P=function(z){var Q=((z.clientX||z.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.playedBarWrap))/I.player.template.playedBarWrap.clientWidth;Q=Math.max(Q,0),Q=Math.min(Q,1),I.player.bar.set("played",Q,"width"),I.player.template.ptime.innerHTML=f.secondToTime(Q*I.player.video.duration)},H=function z(Q){document.removeEventListener(f.nameMap.dragEnd,z),document.removeEventListener(f.nameMap.dragMove,P);var q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.playedBarWrap))/I.player.template.playedBarWrap.clientWidth;q=Math.max(q,0),q=Math.min(q,1),I.player.bar.set("played",q,"width"),I.player.seek(I.player.bar.get("played")*I.player.video.duration),I.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(f.nameMap.dragStart,function(){I.player.timer.disable("progress"),document.addEventListener(f.nameMap.dragMove,P),document.addEventListener(f.nameMap.dragEnd,H)}),this.player.template.playedBarWrap.addEventListener(f.nameMap.dragMove,function(z){if(I.player.video.duration){var Q=I.player.template.playedBarWrap.getBoundingClientRect().left,q=(z.clientX||z.changedTouches[0].clientX)-Q;if(q<0||q>I.player.template.playedBarWrap.offsetWidth)return;var re=I.player.video.duration*(q/I.player.template.playedBarWrap.offsetWidth);f.isMobile&&I.thumbnails&&I.thumbnails.show(),I.thumbnails&&I.thumbnails.move(q),I.player.template.playedBarTime.style.left="".concat(q-(re>=3600?25:20),"px"),I.player.template.playedBarTime.innerText=f.secondToTime(re),I.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(f.nameMap.dragEnd,function(){f.isMobile&&I.thumbnails&&I.thumbnails.hide()}),f.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){I.player.video.duration&&(I.thumbnails&&I.thumbnails.show(),I.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){I.player.video.duration&&(I.thumbnails&&I.thumbnails.hide(),I.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var I=this;this.player.template.browserFullButton.addEventListener("click",function(){I.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){I.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var I=this,P=function(z){var Q=z||window.event,q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.volumeBarWrap)-5.5)/35;I.player.volume(q)},H=function z(){document.removeEventListener(f.nameMap.dragEnd,z),document.removeEventListener(f.nameMap.dragMove,P),I.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(z){var Q=z||window.event,q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.volumeBarWrap)-5.5)/35;I.player.volume(q)}),this.player.template.volumeBarWrapWrap.addEventListener(f.nameMap.dragStart,function(){document.addEventListener(f.nameMap.dragMove,P),document.addEventListener(f.nameMap.dragEnd,H),I.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){I.player.video.muted?(I.player.video.muted=!1,I.player.switchVolumeIcon(),I.player.bar.set("volume",I.player.volume(),"width")):(I.player.video.muted=!0,I.player.template.volumeIcon.innerHTML=ve.volumeOff,I.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var I=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(P){P.target.classList.contains("dplayer-quality-item")&&I.player.switchQuality(P.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var I=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var P,H=document.createElement("canvas");H.width=I.player.video.videoWidth,H.height=I.player.video.videoHeight,H.getContext("2d").drawImage(I.player.video,0,0,H.width,H.height),H.toBlob(function(z){P=URL.createObjectURL(z);var Q=document.createElement("a");Q.href=P,Q.download="DPlayer.png",Q.style.display="none",document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(P),I.player.events.trigger("screenshot",P)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(I){I.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var I=window.document.createElement("script");I.setAttribute("type","text/javascript"),I.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(I),window.__onGCastApiAvailable=function(P){if(P){var H=new(Je=window.chrome.cast).SessionRequest(Je.media.DEFAULT_MEDIA_RECEIVER_APP_ID),z=new Je.ApiConfig(H,function(){},function(Q){Q===Je.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",Q)});Je.initialize(z,function(){})}}}},{key:"initChromecastButton",value:function(){var I=this;if(this.player.options.chromecast){an&&(an=!1,this.initChromecast());var P=function(z,Q){I.currentMedia=Q},H=function(z){console.error("Error launching media",z)};this.player.template.chromecastButton.addEventListener("click",function(){var z;Gt?(Gt=!1,I.currentMedia.stop(),I.session.stop(),I.initChromecast()):(Gt=!0,z=new nn,Je.requestSession(function(Q){var q,re,fe;I.session=Q,z.next("CONNECTED"),q=I.player.options.video.url,re=new Je.media.MediaInfo(q),fe=new Je.media.LoadRequest(re),I.session?I.session.loadMedia(fe,P.bind(I,"loadMedia"),H).play():window.open(q)},function(Q){Q.code==="cancel"?(I.session=void 0,z.next("CANCEL")):console.error("Error selecting a cast device",Q)}))})}}},{key:"initSubtitleButton",value:function(){var I=this;this.player.events.on("subtitle_show",function(){I.player.template.subtitleButton.dataset.balloon=I.player.tran("hide-subs"),I.player.template.subtitleButtonInner.style.opacity="",I.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){I.player.template.subtitleButton.dataset.balloon=I.player.tran("show-subs"),I.player.template.subtitleButtonInner.style.opacity="0.4",I.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){I.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var I=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!I.player.video.played.length||I.player.paused||I.disableAutoHide||I.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){f.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Rn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Pn=On;function Mn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Bn=function(){function U(I){var P=this;(function(re,fe){if(!(re instanceof fe))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.settingButton.addEventListener("click",function(){P.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){P.player.template.loopToggle.checked=!P.player.template.loopToggle.checked,P.player.template.loopToggle.checked?P.loop=!0:P.loop=!1,P.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){P.player.template.showDanmakuToggle.checked=!P.player.template.showDanmakuToggle.checked,P.player.template.showDanmakuToggle.checked?(P.showDanmaku=!0,P.player.danmaku.show()):(P.showDanmaku=!1,P.player.danmaku.hide()),P.player.user.set("danmaku",P.showDanmaku?1:0),P.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){P.player.template.unlimitDanmakuToggle.checked=!P.player.template.unlimitDanmakuToggle.checked,P.player.template.unlimitDanmakuToggle.checked?(P.unlimitDanmaku=!0,P.player.danmaku.unlimit(!0)):(P.unlimitDanmaku=!1,P.player.danmaku.unlimit(!1)),P.player.user.set("unlimited",P.unlimitDanmaku?1:0),P.hide()}),this.player.template.speed.addEventListener("click",function(){P.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),P.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var H=function(re){P.player.template.speedItem[re].addEventListener("click",function(){P.player.speed(P.player.template.speedItem[re].dataset.speed),P.hide()})},z=0;z<this.player.template.speedItem.length;z++)H(z);if(this.player.danmaku){this.player.on("danmaku_opacity",function(re){P.player.bar.set("danmaku",re,"width"),P.player.user.set("opacity",re)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var Q=function(re){var fe=re||window.event,ge=((fe.clientX||fe.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;ge=Math.max(ge,0),ge=Math.min(ge,1),P.player.danmaku.opacity(ge)},q=function re(){document.removeEventListener(f.nameMap.dragEnd,re),document.removeEventListener(f.nameMap.dragMove,Q),P.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(re){var fe=re||window.event,ge=((fe.clientX||fe.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;ge=Math.max(ge,0),ge=Math.min(ge,1),P.player.danmaku.opacity(ge)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(f.nameMap.dragStart,function(){document.addEventListener(f.nameMap.dragMove,Q),document.addEventListener(f.nameMap.dragEnd,q),P.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var N,F;return N=U,(F=[{key:"hide",value:function(){var I=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){I.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),I.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Mn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Fn=Bn;function Un(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Nn=function(){function U(I){var P=this;(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.commentButton.addEventListener("click",function(){P.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){P.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(P.player.template.commentColorSettingBox.querySelector("input:checked+span")){var H=P.player.template.commentColorSettingBox.querySelector("input:checked").value;P.player.template.commentSettingFill.style.fill=H,P.player.template.commentInput.style.color=H,P.player.template.commentSendFill.style.fill=H}}),this.player.template.commentInput.addEventListener("click",function(){P.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(H){(H||window.event).keyCode===13&&P.send()}),this.player.template.commentSendButton.addEventListener("click",function(){P.send()})}var N,F;return N=U,(F=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var I=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:f.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){I.player.template.commentInput.value="",I.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Un(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Kn=Nn;function Wn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Gn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var N,F;return N=U,(F=[{key:"doHotKey",value:function(I){if(this.player.focus){var P=document.activeElement.tagName.toUpperCase(),H=document.activeElement.getAttribute("contenteditable");if(P!=="INPUT"&&P!=="TEXTAREA"&&H!==""&&H!=="true"){var z,Q=I||window.event;switch(Q.keyCode){case 32:Q.preventDefault(),this.player.toggle();break;case 37:if(Q.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(Q.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:Q.preventDefault(),z=this.player.volume()+.1,this.player.volume(z);break;case 40:Q.preventDefault(),z=this.player.volume()-.1,this.player.volume(z)}}}}},{key:"cancelFullScreen",value:function(I){(I||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Wn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Hn=Gn;function jn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var zn=function(){function U(I){var P=this;(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(H,z){P.player.options.contextmenu[z].click&&H.addEventListener("click",function(){P.player.options.contextmenu[z].click(P.player),P.hide()})}),this.contextmenuHandler=function(H){if(P.shown)P.hide();else{var z=H||window.event;z.preventDefault();var Q=P.player.container.getBoundingClientRect();P.show(z.clientX-Q.left,z.clientY-Q.top),P.player.template.mask.addEventListener("click",function(){P.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var N,F;return N=U,(F=[{key:"show",value:function(I,P){this.player.template.menu.classList.add("dplayer-menu-show");var H=this.player.container.getBoundingClientRect();I+this.player.template.menu.offsetWidth>=H.width?(this.player.template.menu.style.right=H.width-I+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=I+"px",this.player.template.menu.style.right="initial"),P+this.player.template.menu.offsetHeight>=H.height?(this.player.template.menu.style.bottom=H.height-P+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=P+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&jn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Yn=zn;function Vn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Xn=function(){function U(I){var P=this;(function(H,z){if(!(H instanceof z))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I.template.infoPanel,this.template=I.template,this.video=I.video,this.player=I,this.template.infoPanelClose.addEventListener("click",function(){P.hide()})}var N,F;return N=U,(F=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(I){this.template.infoFPS.innerHTML="".concat(I.toFixed(1))}}])&&Vn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Qn=Xn;var Zn=J(1568),qn=J.n(Zn);function on(U,N){var F=Object.keys(U);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(U);N&&(I=I.filter(function(P){return Object.getOwnPropertyDescriptor(U,P).enumerable})),F.push.apply(F,I)}return F}function Jn(U,N,F){return N in U?Object.defineProperty(U,N,{value:F,enumerable:!0,configurable:!0,writable:!0}):U[N]=F,U}function sn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var ln=0,it=[],$n=function(){function U(P){var H=this;(function(z,Q){if(!(z instanceof Q))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=function(z){var Q={container:z.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:C,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var q in Q)Q.hasOwnProperty(q)&&!z.hasOwnProperty(q)&&(z[q]=Q[q]);return z.video&&!z.video.type&&(z.video.type="auto"),L(z.danmaku)==="object"&&z.danmaku&&!z.danmaku.user&&(z.danmaku.user="DIYgod"),z.subtitle&&(!z.subtitle.type&&(z.subtitle.type="webvtt"),!z.subtitle.fontSize&&(z.subtitle.fontSize="20px"),!z.subtitle.bottom&&(z.subtitle.bottom="40px"),!z.subtitle.color&&(z.subtitle.color="#fff")),z.video.quality&&(z.video.url=z.video.quality[z.video.defaultQuality].url),z.lang&&(z.lang=z.lang.toLowerCase()),z.contextmenu=z.contextmenu.concat([{key:"video-info",click:function(re){re.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),z}(function(z){for(var Q=1;Q<arguments.length;Q++){var q=arguments[Q]!=null?arguments[Q]:{};Q%2?on(Object(q),!0).forEach(function(re){Jn(z,re,q[re])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(q)):on(Object(q)).forEach(function(re){Object.defineProperty(z,re,Object.getOwnPropertyDescriptor(q,re))})}return z}({preload:P.video.type==="webtorrent"?"none":"metadata"},P)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new R(this.options.lang).tran,this.events=new dt,this.user=new At(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),f.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(z){return z.lang===H.options.subtitle.defaultSubtitle||z.name===H.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(z){return z.lang===H.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new rt({container:this.container,options:this.options,index:ln,tran:this.tran}),this.video=this.template.video,this.bar=new Pt(this.template),this.bezel=new yn(this.template.bezel),this.fullScreen=new ut(this),this.controller=new Pn(this),this.options.danmaku&&(this.danmaku=new Ve({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){H.template.danmakuLoading.style.display="none",H.options.autoplay&&H.play()},0)},error:function(z){H.notice(z)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return H.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(z){return H.tran(z)}}),this.comment=new Kn(this)),this.setting=new Fn(this),this.plugins={},this.docClickFun=function(){H.focus=!1},this.containerClickFun=function(){H.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new mn(this),this.hotkey=new Hn(this),this.contextmenu=new Yn(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Qn(this),!this.danmaku&&this.options.autoplay&&this.play(),ln++,it.push(this)}var N,F,I;return N=U,F=[{key:"seek",value:function(P){P=Math.max(P,0),this.video.duration&&(P=Math.min(P,this.video.duration)),this.video.currentTime<P?this.notice("".concat(this.tran("ff").replace("%s",(P-this.video.currentTime).toFixed(0)))):this.video.currentTime>P&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-P).toFixed(0)))),this.video.currentTime=P,this.danmaku&&this.danmaku.seek(),this.bar.set("played",P/this.video.duration,"width"),this.template.ptime.innerHTML=f.secondToTime(P)}},{key:"play",value:function(P){var H=this;if(this.paused=!1,this.video.paused&&!f.isMobile&&this.bezel.switch(ve.play),this.template.playButton.innerHTML=ve.pause,this.template.mobilePlayButton.innerHTML=ve.pause,P||A.resolve(this.video.play()).catch(function(){H.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var z=0;z<it.length;z++)this!==it[z]&&it[z].pause()}},{key:"pause",value:function(P){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||f.isMobile||this.bezel.switch(ve.pause),this.template.playButton.innerHTML=ve.play,this.template.mobilePlayButton.innerHTML=ve.play,P||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=ve.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=ve.volumeDown:this.template.volumeIcon.innerHTML=ve.volumeOff}},{key:"volume",value:function(P,H,z){if(P=parseFloat(P),!isNaN(P)){P=Math.max(P,0),P=Math.min(P,1),this.bar.set("volume",P,"width");var Q="".concat((100*P).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=Q,H||this.user.set("volume",P),z||this.notice("".concat(this.tran("volume")," ").concat((100*P).toFixed(0),"%")),this.video.volume=P,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(P,H){this.events.on(P,H)}},{key:"switchVideo",value:function(P,H){this.pause(),this.video.poster=P.pic?P.pic:"",this.video.src=P.url,this.initMSE(this.video,P.type||"auto"),H&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:H.id,address:H.api,token:H.token,maximum:H.maximum,addition:H.addition,user:H.user}))}},{key:"initMSE",value:function(P,H){var z=this;if(this.type=H,this.options.video.customType&&this.options.video.customType[H])Object.prototype.toString.call(this.options.video.customType[H])==="[object Function]"?this.options.video.customType[H](this.video,this):console.error("Illegal customType: ".concat(H));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(P.src)?this.type="hls":/.flv(#|\?|$)/i.exec(P.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(P.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(P.canPlayType("application/x-mpegURL")||P.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var Q=this.options.pluginOptions.hls,q=new window.Hls(Q);this.plugins.hls=q,q.loadSource(P.src),q.attachMedia(P),this.events.on("destroy",function(){q.destroy(),delete z.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var re=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:P.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=re,re.attachMediaElement(P),re.load(),this.events.on("destroy",function(){re.unload(),re.detachMediaElement(),re.destroy(),delete z.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var fe=window.dashjs.MediaPlayer().create().initialize(P,P.src,!1),ge=this.options.pluginOptions.dash;fe.updateSettings(ge),this.plugins.dash=fe,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete z.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Ge=this.options.pluginOptions.webtorrent,Ue=new window.WebTorrent(Ge);this.plugins.webtorrent=Ue;var $e=P.src;P.src="",P.preload="metadata",P.addEventListener("durationchange",function(){return z.container.classList.remove("dplayer-loading")},{once:!0}),Ue.add($e,function(le){le.files.find(function(pe){return pe.name.endsWith(".mp4")}).renderTo(z.video,{autoplay:z.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Ue.remove($e),Ue.destroy(),delete z.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(P,H){var z=this;this.initMSE(P,H),this.on("durationchange",function(){P.duration!==1&&P.duration!==1/0&&(z.template.dtime.innerHTML=f.secondToTime(P.duration))}),this.on("progress",function(){var re=P.buffered.length?P.buffered.end(P.buffered.length-1)/P.duration:0;z.bar.set("loaded",re,"width")}),this.on("error",function(){z.video.error&&z.tran&&z.notice&&z.type!=="webtorrent"&&z.notice(z.tran("video-failed"),-1)}),this.on("ended",function(){z.bar.set("played",1,"width"),z.setting.loop?(z.seek(0),z.play()):z.pause(),z.danmaku&&(z.danmaku.danIndex=0)}),this.on("play",function(){z.paused&&z.play(!0)}),this.on("pause",function(){z.paused||z.pause(!0)}),this.on("timeupdate",function(){z.bar.set("played",z.video.currentTime/z.video.duration,"width");var re=f.secondToTime(z.video.currentTime);z.template.ptime.innerHTML!==re&&(z.template.ptime.innerHTML=re)});for(var Q=function(re){P.addEventListener(z.events.videoEvents[re],function(){z.events.trigger(z.events.videoEvents[re])})},q=0;q<this.events.videoEvents.length;q++)Q(q);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new kt(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ct(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(P){var H=this;if(P=typeof P=="string"?parseInt(P):P,this.qualityIndex!==P&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=P,this.switchingQuality=!0,this.quality=this.options.video.quality[P],this.template.qualityButton.innerHTML=this.quality.name;var z=this.video.paused;this.video.pause();var Q=qn()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),q=new DOMParser().parseFromString(Q,"text/html").body.firstChild;this.template.videoWrap.insertBefore(q,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=q,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(H.prevVideo){if(H.video.currentTime!==H.prevVideo.currentTime)return void H.seek(H.prevVideo.currentTime);H.template.videoWrap.removeChild(H.prevVideo),H.video.classList.add("dplayer-video-current"),z||H.video.play(),H.prevVideo=null,H.notice("".concat(H.tran("switched-quality").replace("%q",H.quality.name))),H.switchingQuality=!1,H.events.trigger("quality_end")}}),this.on("error",function(){H.video.error&&H.prevVideo&&(H.template.videoWrap.removeChild(H.video),H.video=H.prevVideo,z||H.video.play(),H.qualityIndex=H.prevIndex,H.quality=H.options.video.quality[H.qualityIndex],H.noticeTime=setTimeout(function(){H.template.notice.style.opacity=0,H.events.trigger("notice_hide")},3e3),H.prevVideo=null,H.switchingQuality=!1)})}}},{key:"notice",value:function(P){var H,z,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,re=rt.NewNotice(P,q);this.template.noticeList.appendChild(re),this.events.trigger("notice_show",re),Q>0&&setTimeout((H=re,z=this,function(){H.addEventListener("animationend",function(){z.template.noticeList.removeChild(H)}),H.classList.add("remove-notice"),z.events.trigger("notice_hide")}),Q)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(P){this.video.playbackRate=P}},{key:"destroy",value:function(){it.splice(it.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],I=[{key:"version",get:function(){return"1.27.0"}}],F&&sn(N.prototype,F),I&&sn(N,I),Object.defineProperty(N,"prototype",{writable:!1}),U}();const er=$n;console.log(`
`.concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const tr=er})(),_e.default})())})(pn);const Er=fn(pn.exports);var hn={exports:{}};(function(nt,Ze){typeof window<"u"&&function(Ee,J){nt.exports=J()}(rr,()=>(()=>{var Be={"./src/config.ts":(W,M,x)=>{x.r(M),x.d(M,{enableStreamingMode:()=>A,hlsDefaultConfig:()=>e,mergeConfig:()=>s});var w=x("./src/controller/abr-controller.ts"),_=x("./src/controller/audio-stream-controller.ts"),D=x("./src/controller/audio-track-controller.ts"),p=x("./src/controller/subtitle-stream-controller.ts"),k=x("./src/controller/subtitle-track-controller.ts"),S=x("./src/controller/buffer-controller.ts"),v=x("./src/controller/timeline-controller.ts"),b=x("./src/controller/cap-level-controller.ts"),m=x("./src/controller/fps-controller.ts"),g=x("./src/controller/eme-controller.ts"),E=x("./src/controller/cmcd-controller.ts"),y=x("./src/utils/xhr-loader.ts"),T=x("./src/utils/fetch-loader.ts"),l=x("./src/utils/cues.ts"),r=x("./src/utils/mediakeys-helper.ts"),n=x("./src/utils/logger.ts");function d(){return d=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var c=arguments[f];for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(u[i]=c[i])}return u},d.apply(this,arguments)}function h(u,f){var c=Object.keys(u);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(u);f&&(i=i.filter(function(C){return Object.getOwnPropertyDescriptor(u,C).enumerable})),c.push.apply(c,i)}return c}function a(u){for(var f=1;f<arguments.length;f++){var c=arguments[f]!=null?arguments[f]:{};f%2?h(Object(c),!0).forEach(function(i){t(u,i,c[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(c)):h(Object(c)).forEach(function(i){Object.defineProperty(u,i,Object.getOwnPropertyDescriptor(c,i))})}return u}function t(u,f,c){return f in u?Object.defineProperty(u,f,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[f]=c,u}var e=a(a({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:y.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:w.default,bufferController:S.default,capLevelController:b.default,fpsController:m.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:r.requestMediaKeySystemAccess,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0},o()),{},{subtitleStreamController:p.SubtitleStreamController,subtitleTrackController:k.default,timelineController:v.TimelineController,audioStreamController:_.default,audioTrackController:D.default,emeController:g.default,cmcdController:E.default});function o(){return{cueHandler:l.default,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function s(u,f){if((f.liveSyncDurationCount||f.liveMaxLatencyDurationCount)&&(f.liveSyncDuration||f.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(f.liveMaxLatencyDurationCount!==void 0&&(f.liveSyncDurationCount===void 0||f.liveMaxLatencyDurationCount<=f.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(f.liveMaxLatencyDuration!==void 0&&(f.liveSyncDuration===void 0||f.liveMaxLatencyDuration<=f.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return d({},u,f)}function A(u){var f=u.loader;if(f!==T.default&&f!==y.default)n.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),u.progressive=!1;else{var c=(0,T.fetchSupported)();c&&(u.loader=T.default,u.progressive=!0,u.enableSoftwareAES=!0,n.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))}}},"./src/controller/abr-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>g});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/ewma-bandwidth-estimator.ts"),D=x("./src/events.ts"),p=x("./src/errors.ts"),k=x("./src/types/loader.ts"),S=x("./src/utils/logger.ts");function v(E,y){for(var T=0;T<y.length;T++){var l=y[T];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(E,l.key,l)}}function b(E,y,T){return y&&v(E.prototype,y),T&&v(E,T),Object.defineProperty(E,"prototype",{writable:!1}),E}var m=function(){function E(T){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=T;var l=T.config;this.bwEstimator=new _.default(l.abrEwmaSlowVoD,l.abrEwmaFastVoD,l.abrEwmaDefaultEstimate),this.registerListeners()}var y=E.prototype;return y.registerListeners=function(){var l=this.hls;l.on(D.Events.FRAG_LOADING,this.onFragLoading,this),l.on(D.Events.FRAG_LOADED,this.onFragLoaded,this),l.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),l.on(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),l.on(D.Events.ERROR,this.onError,this)},y.unregisterListeners=function(){var l=this.hls;l.off(D.Events.FRAG_LOADING,this.onFragLoading,this),l.off(D.Events.FRAG_LOADED,this.onFragLoaded,this),l.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),l.off(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),l.off(D.Events.ERROR,this.onError,this)},y.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},y.onFragLoading=function(l,r){var n=r.frag;if(n.type===k.PlaylistLevelType.MAIN&&!this.timer){var d;this.fragCurrent=n,this.partCurrent=(d=r.part)!=null?d:null,this.timer=self.setInterval(this.onCheck,100)}},y.onLevelLoaded=function(l,r){var n=this.hls.config;r.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD)},y._abandonRulesCheck=function(){var l=this.fragCurrent,r=this.partCurrent,n=this.hls,d=n.autoLevelEnabled;n.config;var h=n.media;if(!(!l||!h)){var a=r?r.stats:l.stats,t=r?r.duration:l.duration;if(a.aborted||a.loaded&&a.loaded===a.total||l.level===0){this.clearTimer(),this._nextAutoLevel=-1;return}if(!(!d||h.paused||!h.playbackRate||!h.readyState)){var e=n.mainForwardBufferInfo;if(e!==null){var o=performance.now()-a.loading.start,s=Math.abs(h.playbackRate);if(!(o<=500*t/s)){var A=a.loaded&&a.loading.first,u=this.bwEstimator.getEstimate(),f=n.levels,c=n.minAutoLevel,i=f[l.level],C=a.total||Math.max(a.loaded,Math.round(t*i.maxBitrate/8)),L=A?a.loaded*1e3/o:0,R=L?(C-a.loaded)/L:C*8/u,B=e.len/s;if(!(R<=B)){var O=Number.POSITIVE_INFINITY,K;for(K=l.level-1;K>c;K--){var G=f[K].maxBitrate;if(O=L?t*G/(8*.8*L):t*G/u,O<B)break}O>=R||(S.logger.warn("Fragment "+l.sn+(r?" part "+r.index:"")+" of level "+l.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+K+`
      Current BW estimate: `+((0,w.isFiniteNumber)(u)?(u/1024).toFixed(3):"Unknown")+` Kb/s
      Estimated load time for current fragment: `+R.toFixed(3)+` s
      Estimated load time for the next fragment: `+O.toFixed(3)+` s
      Time to underbuffer: `+B.toFixed(3)+" s"),n.nextLoadLevel=K,A&&this.bwEstimator.sample(o,a.loaded),this.clearTimer(),l.loader&&(this.fragCurrent=this.partCurrent=null,l.loader.abort()),n.trigger(D.Events.FRAG_LOAD_EMERGENCY_ABORTED,{frag:l,part:r,stats:a}))}}}}}},y.onFragLoaded=function(l,r){var n=r.frag,d=r.part;if(n.type===k.PlaylistLevelType.MAIN&&(0,w.isFiniteNumber)(n.sn)){var h=d?d.stats:n.stats,a=d?d.duration:n.duration;if(this.clearTimer(),this.lastLoadedFragLevel=n.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var t=this.hls.levels[n.level],e=(t.loaded?t.loaded.bytes:0)+h.loaded,o=(t.loaded?t.loaded.duration:0)+a;t.loaded={bytes:e,duration:o},t.realBitrate=Math.round(8*e/o)}if(n.bitrateTest){var s={stats:h,frag:n,part:d,id:n.type};this.onFragBuffered(D.Events.FRAG_BUFFERED,s)}}},y.onFragBuffered=function(l,r){var n=r.frag,d=r.part,h=d?d.stats:n.stats;if(!h.aborted&&!(n.type!==k.PlaylistLevelType.MAIN||n.sn==="initSegment")){var a=h.parsing.end-h.loading.start;this.bwEstimator.sample(a,h.loaded),h.bwEstimate=this.bwEstimator.getEstimate(),n.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}},y.onError=function(l,r){switch(r.details){case p.ErrorDetails.FRAG_LOAD_ERROR:case p.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer();break}},y.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},y.getNextABRAutoLevel=function(){var l=this.fragCurrent,r=this.partCurrent,n=this.hls,d=n.maxAutoLevel,h=n.config,a=n.minAutoLevel,t=n.media,e=r?r.duration:l?l.duration:0;t&&t.currentTime;var o=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,s=this.bwEstimator?this.bwEstimator.getEstimate():h.abrEwmaDefaultEstimate,A=n.mainForwardBufferInfo,u=(A?A.len:0)/o,f=this.findBestLevel(s,a,d,u,h.abrBandWidthFactor,h.abrBandWidthUpFactor);if(f>=0)return f;S.logger.trace((u?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var c=e?Math.min(e,h.maxStarvationDelay):h.maxStarvationDelay,i=h.abrBandWidthFactor,C=h.abrBandWidthUpFactor;if(!u){var L=this.bitrateTestDelay;if(L){var R=e?Math.min(e,h.maxLoadingDelay):h.maxLoadingDelay;c=R-L,S.logger.trace("bitrate test took "+Math.round(1e3*L)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*c)+" ms"),i=C=1}}return f=this.findBestLevel(s,a,d,u+c,i,C),Math.max(f,0)},y.findBestLevel=function(l,r,n,d,h,a){for(var t,e=this.fragCurrent,o=this.partCurrent,s=this.lastLoadedFragLevel,A=this.hls.levels,u=A[s],f=!!(u!=null&&(t=u.details)!==null&&t!==void 0&&t.live),c=u==null?void 0:u.codecSet,i=o?o.duration:e?e.duration:0,C=n;C>=r;C--){var L=A[C];if(!(!L||c&&L.codecSet!==c)){var R=L.details,B=(o?R==null?void 0:R.partTarget:R==null?void 0:R.averagetargetduration)||i,O=void 0;C<=s?O=h*l:O=a*l;var K=A[C].maxBitrate,G=K*B/O;if(S.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+C+"/"+Math.round(O)+"/"+K+"/"+B+"/"+d+"/"+G),O>K&&(G===0||!(0,w.isFiniteNumber)(G)||f&&!this.bitrateTestDelay||G<d))return C}}return-1},b(E,[{key:"nextAutoLevel",get:function(){var l=this._nextAutoLevel,r=this.bwEstimator;if(l!==-1&&!r.canEstimate())return l;var n=this.getNextABRAutoLevel();return l!==-1&&this.hls.levels[n].loadError?l:(l!==-1&&(n=Math.min(l,n)),n)},set:function(l){this._nextAutoLevel=l}}]),E}();const g=m},"./src/controller/audio-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>t});var w=x("./src/polyfills/number.ts"),_=x("./src/controller/base-stream-controller.ts"),D=x("./src/events.ts"),p=x("./src/utils/buffer-helper.ts"),k=x("./src/controller/fragment-tracker.ts"),S=x("./src/types/level.ts"),v=x("./src/types/loader.ts"),b=x("./src/loader/fragment.ts"),m=x("./src/demux/chunk-cache.ts"),g=x("./src/demux/transmuxer-interface.ts"),E=x("./src/types/transmuxer.ts"),y=x("./src/controller/fragment-finders.ts"),T=x("./src/utils/discontinuities.ts"),l=x("./src/errors.ts");function r(){return r=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var A in s)Object.prototype.hasOwnProperty.call(s,A)&&(e[A]=s[A])}return e},r.apply(this,arguments)}function n(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,d(e,o)}function d(e,o){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,u){return A.__proto__=u,A},d(e,o)}var h=100,a=function(e){n(o,e);function o(A,u){var f;return f=e.call(this,A,u,"[audio-stream-controller]")||this,f.videoBuffer=null,f.videoTrackCC=-1,f.waitingVideoCC=-1,f.audioSwitch=!1,f.trackId=-1,f.waitingData=null,f.mainDetails=null,f.bufferFlushed=!1,f.cachedTrackLoadedData=null,f._registerListeners(),f}var s=o.prototype;return s.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},s._registerListeners=function(){var u=this.hls;u.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.on(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.on(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.on(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),u.on(D.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),u.on(D.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),u.on(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),u.on(D.Events.ERROR,this.onError,this),u.on(D.Events.BUFFER_RESET,this.onBufferReset,this),u.on(D.Events.BUFFER_CREATED,this.onBufferCreated,this),u.on(D.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),u.on(D.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),u.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},s._unregisterListeners=function(){var u=this.hls;u.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.off(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.off(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.off(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),u.off(D.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),u.off(D.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),u.off(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),u.off(D.Events.ERROR,this.onError,this),u.off(D.Events.BUFFER_RESET,this.onBufferReset,this),u.off(D.Events.BUFFER_CREATED,this.onBufferCreated,this),u.off(D.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),u.off(D.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),u.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},s.onInitPtsFound=function(u,f){var c=f.frag,i=f.id,C=f.initPTS;if(i==="main"){var L=c.cc;this.initPTS[c.cc]=C,this.log("InitPTS for cc: "+L+" found from main: "+C),this.videoTrackCC=L,this.state===_.State.WAITING_INIT_PTS&&this.tick()}},s.startLoad=function(u){if(!this.levels){this.startPosition=u,this.state=_.State.STOPPED;return}var f=this.lastCurrentTime;this.stopLoad(),this.setInterval(h),this.fragLoadError=0,f>0&&u===-1?(this.log("Override startPosition with lastCurrentTime @"+f.toFixed(3)),u=f,this.state=_.State.IDLE):(this.loadedmetadata=!1,this.state=_.State.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=u,this.tick()},s.doTick=function(){switch(this.state){case _.State.IDLE:this.doTickIdle();break;case _.State.WAITING_TRACK:{var u,f=this.levels,c=this.trackId,i=f==null||(u=f[c])===null||u===void 0?void 0:u.details;if(i){if(this.waitForCdnTuneIn(i))break;this.state=_.State.WAITING_INIT_PTS}break}case _.State.FRAG_LOADING_WAITING_RETRY:{var C,L=performance.now(),R=this.retryDate;(!R||L>=R||(C=this.media)!==null&&C!==void 0&&C.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=_.State.IDLE);break}case _.State.WAITING_INIT_PTS:{var B=this.waitingData;if(B){var O=B.frag,K=B.part,G=B.cache,j=B.complete;if(this.initPTS[O.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=_.State.FRAG_LOADING;var Y=G.flush(),V={frag:O,part:K,payload:Y,networkDetails:null};this._handleFragmentLoadProgress(V),j&&e.prototype._handleFragmentLoadComplete.call(this,V)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log("Waiting fragment cc ("+O.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var X=this.getLoadPosition(),Z=p.BufferHelper.bufferInfo(this.mediaBuffer,X,this.config.maxBufferHole),$=(0,y.fragmentWithinToleranceTest)(Z.end,this.config.maxFragLookUpTolerance,O);$<0&&(this.log("Waiting fragment cc ("+O.cc+") @ "+O.start+" cancelled because another fragment at "+Z.end+" is needed"),this.clearWaitingFragment())}}else this.state=_.State.IDLE}}this.onTickEnd()},s.clearWaitingFragment=function(){var u=this.waitingData;u&&(this.fragmentTracker.removeFragment(u.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=_.State.IDLE)},s.resetLoadingState=function(){this.clearWaitingFragment(),e.prototype.resetLoadingState.call(this)},s.onTickEnd=function(){var u=this.media;!u||!u.readyState||(this.lastCurrentTime=u.currentTime)},s.doTickIdle=function(){var u,f,c=this.hls,i=this.levels,C=this.media,L=this.trackId,R=c.config;if(!(!i||!i[L])&&!(!C&&(this.startFragRequested||!R.startFragPrefetch))){var B=i[L],O=B.details;if(!O||O.live&&this.levelLastLoaded!==L||this.waitForCdnTuneIn(O)){this.state=_.State.WAITING_TRACK;return}var K=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&K&&(this.bufferFlushed=!1,this.afterBufferFlushed(K,b.ElementaryStreamTypes.AUDIO,v.PlaylistLevelType.AUDIO));var G=this.getFwdBufferInfo(K,v.PlaylistLevelType.AUDIO);if(G!==null){var j=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,v.PlaylistLevelType.MAIN),Y=G.len,V=this.getMaxBufferLength(j==null?void 0:j.len),X=this.audioSwitch;if(!(Y>=V&&!X)){if(!X&&this._streamEnded(G,O)){c.trigger(D.Events.BUFFER_EOS,{type:"audio"}),this.state=_.State.ENDED;return}var Z=O.fragments,$=Z[0].start,ee=G.end;if(X&&C){var ae=this.getLoadPosition();ee=ae,O.PTSKnown&&ae<$&&(G.end>$||G.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),C.currentTime=$+.05)}if(!(j&&ee>j.end+O.targetduration)&&!((!j||!j.len)&&G.len)){var ne=this.getNextFragment(ee,O);if(!ne){this.bufferFlushed=!0;return}((u=ne.decryptdata)===null||u===void 0?void 0:u.keyFormat)==="identity"&&!((f=ne.decryptdata)!==null&&f!==void 0&&f.key)?this.loadKey(ne,O):this.loadFragment(ne,O,ee)}}}}},s.getMaxBufferLength=function(u){var f=e.prototype.getMaxBufferLength.call(this);return u?Math.max(f,u):f},s.onMediaDetaching=function(){this.videoBuffer=null,e.prototype.onMediaDetaching.call(this)},s.onAudioTracksUpdated=function(u,f){var c=f.audioTracks;this.resetTransmuxer(),this.levels=c.map(function(i){return new S.Level(i)})},s.onAudioTrackSwitching=function(u,f){var c=!!f.url;this.trackId=f.id;var i=this.fragCurrent;i!=null&&i.loader&&i.loader.abort(),this.fragCurrent=null,this.clearWaitingFragment(),c?this.setInterval(h):this.resetTransmuxer(),c?(this.audioSwitch=!0,this.state=_.State.IDLE):this.state=_.State.STOPPED,this.tick()},s.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},s.onLevelLoaded=function(u,f){this.mainDetails=f.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(D.Events.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)},s.onAudioTrackLoaded=function(u,f){var c;if(this.mainDetails==null){this.cachedTrackLoadedData=f;return}var i=this.levels,C=f.details,L=f.id;if(!i){this.warn("Audio tracks were reset while loading level "+L);return}this.log("Track "+L+" loaded ["+C.startSN+","+C.endSN+"],duration:"+C.totalduration);var R=i[L],B=0;if(C.live||(c=R.details)!==null&&c!==void 0&&c.live){var O=this.mainDetails;if(C.fragments[0]||(C.deltaUpdateFailed=!0),C.deltaUpdateFailed||!O)return;!R.details&&C.hasProgramDateTime&&O.hasProgramDateTime?((0,T.alignMediaPlaylistByPDT)(C,O),B=C.fragments[0].start):B=this.alignPlaylists(C,R.details)}R.details=C,this.levelLastLoaded=L,!this.startFragRequested&&(this.mainDetails||!C.live)&&this.setStartPosition(R.details,B),this.state===_.State.WAITING_TRACK&&!this.waitForCdnTuneIn(C)&&(this.state=_.State.IDLE),this.tick()},s._handleFragmentLoadProgress=function(u){var f,c=u.frag,i=u.part,C=u.payload,L=this.config,R=this.trackId,B=this.levels;if(!B){this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+c.sn+" of level "+c.level+" will not be buffered");return}var O=B[R];console.assert(O,"Audio track is defined on fragment load progress");var K=O.details;console.assert(K,"Audio track details are defined on fragment load progress");var G=L.defaultAudioCodec||O.audioCodec||"mp4a.40.2",j=this.transmuxer;j||(j=this.transmuxer=new g.default(this.hls,v.PlaylistLevelType.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var Y=this.initPTS[c.cc],V=(f=c.initSegment)===null||f===void 0?void 0:f.data;if(Y!==void 0){var X=!1,Z=i?i.index:-1,$=Z!==-1,ee=new E.ChunkMetadata(c.level,c.sn,c.stats.chunkCount,C.byteLength,Z,$);j.push(C,V,G,"",c,i,K.totalduration,X,ee,Y)}else{this.log("Unknown video PTS for cc "+c.cc+", waiting for video PTS before demuxing audio frag "+c.sn+" of ["+K.startSN+" ,"+K.endSN+"],track "+R);var ae=this.waitingData=this.waitingData||{frag:c,part:i,cache:new m.default,complete:!1},ne=ae.cache;ne.push(new Uint8Array(C)),this.waitingVideoCC=this.videoTrackCC,this.state=_.State.WAITING_INIT_PTS}},s._handleFragmentLoadComplete=function(u){if(this.waitingData){this.waitingData.complete=!0;return}e.prototype._handleFragmentLoadComplete.call(this,u)},s.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},s.onBufferCreated=function(u,f){var c=f.tracks.audio;c&&(this.mediaBuffer=c.buffer||null),f.tracks.video&&(this.videoBuffer=f.tracks.video.buffer||null)},s.onFragBuffered=function(u,f){var c=f.frag,i=f.part;if(c.type!==v.PlaylistLevelType.AUDIO){if(!this.loadedmetadata&&c.type===v.PlaylistLevelType.MAIN){var C;(C=this.videoBuffer||this.media)!==null&&C!==void 0&&C.buffered.length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(c)){this.warn("Fragment "+c.sn+(i?" p: "+i.index:"")+" of level "+c.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch);return}c.sn!=="initSegment"&&(this.fragPrevious=c,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger(D.Events.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(c,i)},s.onError=function(u,f){switch(f.details){case l.ErrorDetails.FRAG_LOAD_ERROR:case l.ErrorDetails.FRAG_LOAD_TIMEOUT:case l.ErrorDetails.KEY_LOAD_ERROR:case l.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(v.PlaylistLevelType.AUDIO,f);break;case l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case l.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==_.State.ERROR&&this.state!==_.State.STOPPED&&(this.state=f.fatal?_.State.ERROR:_.State.IDLE,this.warn(f.details+" while loading frag, switching to "+this.state+" state"));break;case l.ErrorDetails.BUFFER_FULL_ERROR:if(f.parent==="audio"&&(this.state===_.State.PARSING||this.state===_.State.PARSED)){var c=!0,i=this.getFwdBufferInfo(this.mediaBuffer,v.PlaylistLevelType.AUDIO);i&&i.len>.5&&(c=!this.reduceMaxBufferLength(i.len)),c&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,e.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}break}},s.onBufferFlushed=function(u,f){var c=f.type;c===b.ElementaryStreamTypes.AUDIO&&(this.bufferFlushed=!0)},s._handleTransmuxComplete=function(u){var f,c="audio",i=this.hls,C=u.remuxResult,L=u.chunkMeta,R=this.getCurrentContext(L);if(!R){this.warn("The loading context changed while buffering fragment "+L.sn+" of level "+L.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(L.level);return}var B=R.frag,O=R.part,K=R.level.details,G=C.audio,j=C.text,Y=C.id3,V=C.initSegment;if(!(this.fragContextChanged(B)||!K)){if(this.state=_.State.PARSING,this.audioSwitch&&G&&this.completeAudioSwitch(),V!=null&&V.tracks&&(this._bufferInitSegment(V.tracks,B,L),i.trigger(D.Events.FRAG_PARSING_INIT_SEGMENT,{frag:B,id:c,tracks:V.tracks})),G){var X=G.startPTS,Z=G.endPTS,$=G.startDTS,ee=G.endDTS;O&&(O.elementaryStreams[b.ElementaryStreamTypes.AUDIO]={startPTS:X,endPTS:Z,startDTS:$,endDTS:ee}),B.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO,X,Z,$,ee),this.bufferFragmentData(G,B,O,L)}if(Y!=null&&(f=Y.samples)!==null&&f!==void 0&&f.length){var ae=r({id:c,frag:B,details:K},Y);i.trigger(D.Events.FRAG_PARSING_METADATA,ae)}if(j){var ne=r({id:c,frag:B,details:K},j);i.trigger(D.Events.FRAG_PARSING_USERDATA,ne)}}},s._bufferInitSegment=function(u,f,c){if(this.state===_.State.PARSING){u.video&&delete u.video;var i=u.audio;if(!!i){i.levelCodec=i.codec,i.id="audio",this.log("Init audio buffer, container:"+i.container+", codecs[parsed]=["+i.codec+"]"),this.hls.trigger(D.Events.BUFFER_CODECS,u);var C=i.initSegment;if(C!=null&&C.byteLength){var L={type:"audio",frag:f,part:null,chunkMeta:c,parent:f.type,data:C};this.hls.trigger(D.Events.BUFFER_APPENDING,L)}this.tick()}}},s.loadFragment=function(u,f,c){var i=this.fragmentTracker.getState(u);this.fragCurrent=u,(this.audioSwitch||i===k.FragmentState.NOT_LOADED||i===k.FragmentState.PARTIAL)&&(u.sn==="initSegment"?this._loadInitSegment(u):f.live&&!(0,w.isFiniteNumber)(this.initPTS[u.cc])?(this.log("Waiting for video PTS in continuity counter "+u.cc+" of live stream before loading audio fragment "+u.sn+" of level "+this.trackId),this.state=_.State.WAITING_INIT_PTS):(this.startFragRequested=!0,e.prototype.loadFragment.call(this,u,f,c)))},s.completeAudioSwitch=function(){var u=this.hls,f=this.media,c=this.trackId;f&&(this.log("Switching audio track : flushing all audio"),e.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,u.trigger(D.Events.AUDIO_TRACK_SWITCHED,{id:c})},o}(_.default);const t=a},"./src/controller/audio-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>g});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/controller/base-playlist-controller.ts"),p=x("./src/types/loader.ts");function k(E,y){for(var T=0;T<y.length;T++){var l=y[T];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(E,l.key,l)}}function S(E,y,T){return y&&k(E.prototype,y),T&&k(E,T),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,y){E.prototype=Object.create(y.prototype),E.prototype.constructor=E,b(E,y)}function b(E,y){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,r){return l.__proto__=r,l},b(E,y)}var m=function(E){v(y,E);function y(l){var r;return r=E.call(this,l,"[audio-track-controller]")||this,r.tracks=[],r.groupId=null,r.tracksInGroup=[],r.trackId=-1,r.trackName="",r.selectDefaultTrack=!0,r.registerListeners(),r}var T=y.prototype;return T.registerListeners=function(){var r=this.hls;r.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),r.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),r.on(w.Events.LEVEL_LOADING,this.onLevelLoading,this),r.on(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),r.on(w.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),r.on(w.Events.ERROR,this.onError,this)},T.unregisterListeners=function(){var r=this.hls;r.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),r.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),r.off(w.Events.LEVEL_LOADING,this.onLevelLoading,this),r.off(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),r.off(w.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),r.off(w.Events.ERROR,this.onError,this)},T.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,E.prototype.destroy.call(this)},T.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},T.onManifestParsed=function(r,n){this.tracks=n.audioTracks||[]},T.onAudioTrackLoaded=function(r,n){var d=n.id,h=n.details,a=this.tracksInGroup[d];if(!a){this.warn("Invalid audio track id "+d);return}var t=a.details;a.details=n.details,this.log("audioTrack "+d+" loaded ["+h.startSN+"-"+h.endSN+"]"),d===this.trackId&&(this.retryCount=0,this.playlistLoaded(d,n,t))},T.onLevelLoading=function(r,n){this.switchLevel(n.level)},T.onLevelSwitching=function(r,n){this.switchLevel(n.level)},T.switchLevel=function(r){var n=this.hls.levels[r];if(!!(n!=null&&n.audioGroupIds)){var d=n.audioGroupIds[n.urlId];if(this.groupId!==d){this.groupId=d;var h=this.tracks.filter(function(t){return!d||t.groupId===d});this.selectDefaultTrack&&!h.some(function(t){return t.default})&&(this.selectDefaultTrack=!1),this.tracksInGroup=h;var a={audioTracks:h};this.log("Updating audio tracks, "+h.length+' track(s) found in "'+d+'" group-id'),this.hls.trigger(w.Events.AUDIO_TRACKS_UPDATED,a),this.selectInitialTrack()}}},T.onError=function(r,n){E.prototype.onError.call(this,r,n),!(n.fatal||!n.context)&&n.context.type===p.PlaylistContextType.AUDIO_TRACK&&n.context.id===this.trackId&&n.context.groupId===this.groupId&&this.retryLoadingOrFail(n)},T.setAudioTrack=function(r){var n=this.tracksInGroup;if(r<0||r>=n.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();var d=n[this.trackId];this.log("Now switching to audio-track index "+r);var h=n[r],a=h.id,t=h.groupId,e=t===void 0?"":t,o=h.name,s=h.type,A=h.url;if(this.trackId=r,this.trackName=o,this.selectDefaultTrack=!1,this.hls.trigger(w.Events.AUDIO_TRACK_SWITCHING,{id:a,groupId:e,name:o,type:s,url:A}),!(h.details&&!h.details.live)){var u=this.switchParams(h.url,d==null?void 0:d.details);this.loadPlaylist(u)}},T.selectInitialTrack=function(){var r=this.tracksInGroup;console.assert(r.length,"Initial audio track should be selected when tracks are known");var n=this.trackName,d=this.findTrackId(n)||this.findTrackId();d!==-1?this.setAudioTrack(d):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},T.findTrackId=function(r){for(var n=this.tracksInGroup,d=0;d<n.length;d++){var h=n[d];if((!this.selectDefaultTrack||h.default)&&(!r||r===h.name))return h.id}return-1},T.loadPlaylist=function(r){var n=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(n)){var d=n.id,h=n.groupId,a=n.url;if(r)try{a=r.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("loading audio-track playlist for id: "+d),this.clearTimer(),this.hls.trigger(w.Events.AUDIO_TRACK_LOADING,{url:a,id:d,groupId:h,deliveryDirectives:r||null})}},S(y,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(r){this.selectDefaultTrack=!1,this.setAudioTrack(r)}}]),y}(D.default);const g=m},"./src/controller/base-playlist-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/polyfills/number.ts"),_=x("./src/types/level.ts"),D=x("./src/controller/level-helper.ts"),p=x("./src/utils/logger.ts"),k=x("./src/errors.ts"),S=function(){function v(m,g){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=p.logger.log.bind(p.logger,g+":"),this.warn=p.logger.warn.bind(p.logger,g+":"),this.hls=m}var b=v.prototype;return b.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},b.onError=function(g,E){E.fatal&&E.type===k.ErrorTypes.NETWORK_ERROR&&this.clearTimer()},b.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},b.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},b.stopLoad=function(){this.canLoad=!1,this.clearTimer()},b.switchParams=function(g,E){var y=E==null?void 0:E.renditionReports;if(y)for(var T=0;T<y.length;T++){var l=y[T],r=""+l.URI;if(r===g.slice(-r.length)){var n=parseInt(l["LAST-MSN"]),d=parseInt(l["LAST-PART"]);if(E&&this.hls.config.lowLatencyMode){var h=Math.min(E.age-E.partTarget,E.targetduration);d!==void 0&&h>E.partTarget&&(d+=1)}if((0,w.isFiniteNumber)(n))return new _.HlsUrlParameters(n,(0,w.isFiniteNumber)(d)?d:void 0,_.HlsSkip.No)}}},b.loadPlaylist=function(g){},b.shouldLoadTrack=function(g){return this.canLoad&&g&&!!g.url&&(!g.details||g.details.live)},b.playlistLoaded=function(g,E,y){var T=this,l=E.details,r=E.stats,n=r.loading.end?Math.max(0,self.performance.now()-r.loading.end):0;if(l.advancedDateTime=Date.now()-n,l.live||y!=null&&y.live){if(l.reloaded(y),y&&this.log("live playlist "+g+" "+(l.advanced?"REFRESHED "+l.lastPartSn+"-"+l.lastPartIndex:"MISSED")),y&&l.fragments.length>0&&(0,D.mergeDetails)(y,l),!this.canLoad||!l.live)return;var d,h=void 0,a=void 0;if(l.canBlockReload&&l.endSN&&l.advanced){var t=this.hls.config.lowLatencyMode,e=l.lastPartSn,o=l.endSN,s=l.lastPartIndex,A=s!==-1,u=e===o,f=t?0:s;A?(h=u?o+1:e,a=u?f:s+1):h=o+1;var c=l.age,i=c+l.ageHeader,C=Math.min(i-l.partTarget,l.targetduration*1.5);if(C>0){if(y&&C>y.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+y.tuneInGoal+" to: "+C+" with playlist age: "+l.age),C=0;else{var L=Math.floor(C/l.targetduration);if(h+=L,a!==void 0){var R=Math.round(C%l.targetduration/l.partTarget);a+=R}this.log("CDN Tune-in age: "+l.ageHeader+"s last advanced "+c.toFixed(2)+"s goal: "+C+" skip sn "+L+" to part "+a)}l.tuneInGoal=C}if(d=this.getDeliveryDirectives(l,E.deliveryDirectives,h,a),t||!u){this.loadPlaylist(d);return}}else d=this.getDeliveryDirectives(l,E.deliveryDirectives,h,a);var B=(0,D.computeReloadInterval)(l,r);h!==void 0&&l.canBlockReload&&(B-=l.partTarget||1),this.log("reload live playlist "+g+" in "+Math.round(B)+" ms"),this.timer=self.setTimeout(function(){return T.loadPlaylist(d)},B)}else this.clearTimer()},b.getDeliveryDirectives=function(g,E,y,T){var l=(0,_.getSkipValue)(g,y);return E!=null&&E.skip&&g.deltaUpdateFailed&&(y=E.msn,T=E.part,l=_.HlsSkip.No),new _.HlsUrlParameters(y,T,l)},b.retryLoadingOrFail=function(g){var E=this,y=this.hls.config,T=this.retryCount<y.levelLoadingMaxRetry;if(T){var l;if(this.retryCount++,g.details.indexOf("LoadTimeOut")>-1&&(l=g.context)!==null&&l!==void 0&&l.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+g.details+'"'),this.loadPlaylist();else{var r=Math.min(Math.pow(2,this.retryCount)*y.levelLoadingRetryDelay,y.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout(function(){return E.loadPlaylist()},r),this.warn("retry playlist loading #"+this.retryCount+" in "+r+' ms after "'+g.details+'"')}}else this.warn('cannot recover from error "'+g.details+'"'),this.clearTimer(),g.fatal=!0;return T},v}()},"./src/controller/base-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{State:()=>o,default:()=>s});var w=x("./src/polyfills/number.ts"),_=x("./src/task-loop.ts"),D=x("./src/controller/fragment-tracker.ts"),p=x("./src/utils/buffer-helper.ts"),k=x("./src/utils/logger.ts"),S=x("./src/events.ts"),v=x("./src/errors.ts"),b=x("./src/types/transmuxer.ts"),m=x("./src/utils/mp4-tools.ts"),g=x("./src/utils/discontinuities.ts"),E=x("./src/controller/fragment-finders.ts"),y=x("./src/controller/level-helper.ts"),T=x("./src/loader/fragment-loader.ts"),l=x("./src/crypt/decrypter.ts"),r=x("./src/utils/time-ranges.ts"),n=x("./src/types/loader.ts");function d(A,u){for(var f=0;f<u.length;f++){var c=u[f];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(A,c.key,c)}}function h(A,u,f){return u&&d(A.prototype,u),f&&d(A,f),Object.defineProperty(A,"prototype",{writable:!1}),A}function a(A){if(A===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function t(A,u){A.prototype=Object.create(u.prototype),A.prototype.constructor=A,e(A,u)}function e(A,u){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,i){return c.__proto__=i,c},e(A,u)}var o={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},s=function(A){t(u,A);function u(c,i,C){var L;return L=A.call(this)||this,L.hls=void 0,L.fragPrevious=null,L.fragCurrent=null,L.fragmentTracker=void 0,L.transmuxer=null,L._state=o.STOPPED,L.media=null,L.mediaBuffer=null,L.config=void 0,L.bitrateTest=!1,L.lastCurrentTime=0,L.nextLoadPosition=0,L.startPosition=0,L.loadedmetadata=!1,L.fragLoadError=0,L.retryDate=0,L.levels=null,L.fragmentLoader=void 0,L.levelLastLoaded=null,L.startFragRequested=!1,L.decrypter=void 0,L.initPTS=[],L.onvseeking=null,L.onvended=null,L.logPrefix="",L.log=void 0,L.warn=void 0,L.logPrefix=C,L.log=k.logger.log.bind(k.logger,C+":"),L.warn=k.logger.warn.bind(k.logger,C+":"),L.hls=c,L.fragmentLoader=new T.default(c.config),L.fragmentTracker=i,L.config=c.config,L.decrypter=new l.default(c,c.config),c.on(S.Events.KEY_LOADED,L.onKeyLoaded,a(L)),c.on(S.Events.LEVEL_SWITCHING,L.onLevelSwitching,a(L)),L}var f=u.prototype;return f.doTick=function(){this.onTickEnd()},f.onTickEnd=function(){},f.startLoad=function(i){},f.stopLoad=function(){this.fragmentLoader.abort();var i=this.fragCurrent;i&&this.fragmentTracker.removeFragment(i),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=o.STOPPED},f._streamEnded=function(i,C){var L=this.fragCurrent,R=this.fragmentTracker;if(!C.live&&L&&this.media&&L.sn>=C.endSN&&!i.nextStart){var B=C.partList;if(B!=null&&B.length){var O=B[B.length-1],K=p.BufferHelper.isBuffered(this.media,O.start+O.duration/2);return K}var G=R.getState(L);return G===D.FragmentState.PARTIAL||G===D.FragmentState.OK}return!1},f.onMediaAttached=function(i,C){var L=this.media=this.mediaBuffer=C.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),L.addEventListener("seeking",this.onvseeking),L.addEventListener("ended",this.onvended);var R=this.config;this.levels&&R.autoStartLoad&&this.state===o.STOPPED&&this.startLoad(R.startPosition)},f.onMediaDetaching=function(){var i=this.media;i!=null&&i.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),i&&this.onvseeking&&this.onvended&&(i.removeEventListener("seeking",this.onvseeking),i.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},f.onMediaSeeking=function(){var i=this.config,C=this.fragCurrent,L=this.media,R=this.mediaBuffer,B=this.state,O=L?L.currentTime:0,K=p.BufferHelper.bufferInfo(R||L,O,i.maxBufferHole);if(this.log("media seeking to "+((0,w.isFiniteNumber)(O)?O.toFixed(3):O)+", state: "+B),B===o.ENDED)this.resetLoadingState();else if(C){var G=i.maxFragLookUpTolerance,j=C.start-G,Y=C.start+C.duration+G;if(!K.len||Y<K.start||j>K.end){var V=O>Y;(O<j||V)&&(V&&C.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),C.loader.abort()),this.resetLoadingState())}}L&&(this.lastCurrentTime=O),!this.loadedmetadata&&!K.len&&(this.nextLoadPosition=this.startPosition=O),this.tickImmediate()},f.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},f.onKeyLoaded=function(i,C){if(!(this.state!==o.KEY_LOADING||C.frag!==this.fragCurrent||!this.levels)){this.state=o.IDLE;var L=this.levels[C.frag.level].details;L&&this.loadFragment(C.frag,L,C.frag.start)}},f.onLevelSwitching=function(i,C){this.fragLoadError=0},f.onHandlerDestroying=function(){this.stopLoad(),A.prototype.onHandlerDestroying.call(this)},f.onHandlerDestroyed=function(){this.state=o.STOPPED,this.hls.off(S.Events.KEY_LOADED,this.onKeyLoaded,this),this.hls.off(S.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,A.prototype.onHandlerDestroyed.call(this)},f.loadKey=function(i,C){this.log("Loading key for "+i.sn+" of ["+C.startSN+"-"+C.endSN+"], "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+i.level),this.state=o.KEY_LOADING,this.fragCurrent=i,this.hls.trigger(S.Events.KEY_LOADING,{frag:i})},f.loadFragment=function(i,C,L){this._loadFragForPlayback(i,C,L)},f._loadFragForPlayback=function(i,C,L){var R=this,B=function(K){if(R.fragContextChanged(i)){R.warn("Fragment "+i.sn+(K.part?" p: "+K.part.index:"")+" of level "+i.level+" was dropped during download."),R.fragmentTracker.removeFragment(i);return}i.stats.chunkCount++,R._handleFragmentLoadProgress(K)};this._doFragLoad(i,C,L,B).then(function(O){if(!!O){R.fragLoadError=0;var K=R.state;if(R.fragContextChanged(i)){(K===o.FRAG_LOADING||!R.fragCurrent&&K===o.PARSING)&&(R.fragmentTracker.removeFragment(i),R.state=o.IDLE);return}"payload"in O&&(R.log("Loaded fragment "+i.sn+" of level "+i.level),R.hls.trigger(S.Events.FRAG_LOADED,O)),R._handleFragmentLoadComplete(O)}}).catch(function(O){R.state===o.STOPPED||R.state===o.ERROR||(R.warn(O),R.resetFragmentLoading(i))})},f.flushMainBuffer=function(i,C,L){if(L===void 0&&(L=null),!!(i-C)){var R={startOffset:i,endOffset:C,type:L};this.fragLoadError=0,this.hls.trigger(S.Events.BUFFER_FLUSHING,R)}},f._loadInitSegment=function(i){var C=this;this._doFragLoad(i).then(function(L){if(!L||C.fragContextChanged(i)||!C.levels)throw new Error("init load aborted");return L}).then(function(L){var R=C.hls,B=L.payload,O=i.decryptdata;if(B&&B.byteLength>0&&O&&O.key&&O.iv&&O.method==="AES-128"){var K=self.performance.now();return C.decrypter.webCryptoDecrypt(new Uint8Array(B),O.key.buffer,O.iv.buffer).then(function(G){var j=self.performance.now();return R.trigger(S.Events.FRAG_DECRYPTED,{frag:i,payload:G,stats:{tstart:K,tdecrypt:j}}),L.payload=G,L})}return L}).then(function(L){var R=C.fragCurrent,B=C.hls,O=C.levels;if(!O)throw new Error("init load aborted, missing levels");var K=O[i.level].details;console.assert(K,"Level details are defined when init segment is loaded");var G=i.stats;C.state=o.IDLE,C.fragLoadError=0,i.data=new Uint8Array(L.payload),G.parsing.start=G.buffering.start=self.performance.now(),G.parsing.end=G.buffering.end=self.performance.now(),L.frag===R&&B.trigger(S.Events.FRAG_BUFFERED,{stats:G,frag:R,part:null,id:i.type}),C.tick()}).catch(function(L){C.state===o.STOPPED||C.state===o.ERROR||(C.warn(L),C.resetFragmentLoading(i))})},f.fragContextChanged=function(i){var C=this.fragCurrent;return!i||!C||i.level!==C.level||i.sn!==C.sn||i.urlId!==C.urlId},f.fragBufferedComplete=function(i,C){var L,R,B=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+i.type+" sn: "+i.sn+(C?" part: "+C.index:"")+" of "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+i.level+" "+(B?r.default.toString(p.BufferHelper.getBuffered(B)):"(detached)")),this.state=o.IDLE,B&&(!this.loadedmetadata&&i.type==n.PlaylistLevelType.MAIN&&B.buffered.length&&((L=this.fragCurrent)===null||L===void 0?void 0:L.sn)===((R=this.fragPrevious)===null||R===void 0?void 0:R.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())},f.seekToStartPos=function(){},f._handleFragmentLoadComplete=function(i){var C=this.transmuxer;if(!!C){var L=i.frag,R=i.part,B=i.partsLoaded,O=!B||B.length===0||B.some(function(G){return!G}),K=new b.ChunkMetadata(L.level,L.sn,L.stats.chunkCount+1,0,R?R.index:-1,!O);C.flush(K)}},f._handleFragmentLoadProgress=function(i){},f._doFragLoad=function(i,C,L,R){var B=this;if(L===void 0&&(L=null),!this.levels)throw new Error("frag load aborted, missing levels");if(L=Math.max(i.start,L||0),this.config.lowLatencyMode&&C){var O=C.partList;if(O&&R){L>i.end&&C.fragmentHint&&(i=C.fragmentHint);var K=this.getNextPart(O,i,L);if(K>-1){var G=O[K];return this.log("Loading part sn: "+i.sn+" p: "+G.index+" cc: "+i.cc+" of playlist ["+C.startSN+"-"+C.endSN+"] parts [0-"+K+"-"+(O.length-1)+"] "+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+i.level+", target: "+parseFloat(L.toFixed(3))),this.nextLoadPosition=G.start+G.duration,this.state=o.FRAG_LOADING,this.hls.trigger(S.Events.FRAG_LOADING,{frag:i,part:O[K],targetBufferTime:L}),this.doFragPartsLoad(i,O,K,R).catch(function(j){return B.handleFragLoadError(j)})}else if(!i.url||this.loadedEndOfParts(O,L))return Promise.resolve(null)}}return this.log("Loading fragment "+i.sn+" cc: "+i.cc+" "+(C?"of ["+C.startSN+"-"+C.endSN+"] ":"")+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+i.level+", target: "+parseFloat(L.toFixed(3))),(0,w.isFiniteNumber)(i.sn)&&!this.bitrateTest&&(this.nextLoadPosition=i.start+i.duration),this.state=o.FRAG_LOADING,this.hls.trigger(S.Events.FRAG_LOADING,{frag:i,targetBufferTime:L}),this.fragmentLoader.load(i,R).catch(function(j){return B.handleFragLoadError(j)})},f.doFragPartsLoad=function(i,C,L,R){var B=this;return new Promise(function(O,K){var G=[],j=function Y(V){var X=C[V];B.fragmentLoader.loadPart(i,X,R).then(function(Z){G[X.index]=Z;var $=Z.part;B.hls.trigger(S.Events.FRAG_LOADED,Z);var ee=C[V+1];if(ee&&ee.fragment===i)Y(V+1);else return O({frag:i,part:$,partsLoaded:G})}).catch(K)};j(L)})},f.handleFragLoadError=function(i){var C=i.data;return C&&C.details===v.ErrorDetails.INTERNAL_ABORTED?this.handleFragLoadAborted(C.frag,C.part):this.hls.trigger(S.Events.ERROR,C),null},f._handleTransmuxerFlush=function(i){var C=this.getCurrentContext(i);if(!C||this.state!==o.PARSING){this.fragCurrent||(this.state=o.IDLE);return}var L=C.frag,R=C.part,B=C.level,O=self.performance.now();L.stats.parsing.end=O,R&&(R.stats.parsing.end=O),this.updateLevelTiming(L,R,B,i.partial)},f.getCurrentContext=function(i){var C=this.levels,L=i.level,R=i.sn,B=i.part;if(!C||!C[L])return this.warn("Levels object was unset while buffering fragment "+R+" of level "+L+". The current chunk will not be buffered."),null;var O=C[L],K=B>-1?(0,y.getPartWith)(O,R,B):null,G=K?K.fragment:(0,y.getFragmentWithSN)(O,R,this.fragCurrent);return G?{frag:G,part:K,level:O}:null},f.bufferFragmentData=function(i,C,L,R){if(!(!i||this.state!==o.PARSING)){var B=i.data1,O=i.data2,K=B;if(B&&O&&(K=(0,m.appendUint8Array)(B,O)),!(!K||!K.length)){var G={type:i.type,frag:C,part:L,chunkMeta:R,parent:C.type,data:K};this.hls.trigger(S.Events.BUFFER_APPENDING,G),i.dropped&&i.independent&&!L&&this.flushBufferGap(C)}}},f.flushBufferGap=function(i){var C=this.media;if(!!C){if(!p.BufferHelper.isBuffered(C,C.currentTime)){this.flushMainBuffer(0,i.start);return}var L=C.currentTime,R=p.BufferHelper.bufferInfo(C,L,0),B=i.duration,O=Math.min(this.config.maxFragLookUpTolerance*2,B*.25),K=Math.max(Math.min(i.start-O,R.end-O),L+O);i.start-K>O&&this.flushMainBuffer(K,i.start)}},f.getFwdBufferInfo=function(i,C){var L=this.config,R=this.getLoadPosition();if(!(0,w.isFiniteNumber)(R))return null;var B=p.BufferHelper.bufferInfo(i,R,L.maxBufferHole);if(B.len===0&&B.nextStart!==void 0){var O=this.fragmentTracker.getBufferedFrag(R,C);if(O&&B.nextStart<O.end)return p.BufferHelper.bufferInfo(i,R,Math.max(B.nextStart,L.maxBufferHole))}return B},f.getMaxBufferLength=function(i){var C=this.config,L;return i?L=Math.max(8*C.maxBufferSize/i,C.maxBufferLength):L=C.maxBufferLength,Math.min(L,C.maxMaxBufferLength)},f.reduceMaxBufferLength=function(i){var C=this.config,L=i||C.maxBufferLength;return C.maxMaxBufferLength>=L?(C.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+C.maxMaxBufferLength+"s"),!0):!1},f.getNextFragment=function(i,C){var L=C.fragments,R=L.length;if(!R)return null;var B=this.config,O=L[0].start,K;if(C.live){var G=B.initialLiveManifestSize;if(R<G)return this.warn("Not enough fragments to start playback (have: "+R+", need: "+G+")"),null;!C.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(K=this.getInitialLiveFragment(C,L),this.startPosition=K?this.hls.liveSyncPosition||K.start:i)}else i<=O&&(K=L[0]);if(!K){var j=B.lowLatencyMode?C.partEnd:C.fragmentEnd;K=this.getFragmentAtPosition(i,j,C)}return this.mapToInitFragWhenRequired(K)},f.mapToInitFragWhenRequired=function(i){return i!=null&&i.initSegment&&!(i!=null&&i.initSegment.data)&&!this.bitrateTest?i.initSegment:i},f.getNextPart=function(i,C,L){for(var R=-1,B=!1,O=!0,K=0,G=i.length;K<G;K++){var j=i[K];if(O=O&&!j.independent,R>-1&&L<j.start)break;var Y=j.loaded;!Y&&(B||j.independent||O)&&j.fragment===C&&(R=K),B=Y}return R},f.loadedEndOfParts=function(i,C){var L=i[i.length-1];return L&&C>L.start&&L.loaded},f.getInitialLiveFragment=function(i,C){var L=this.fragPrevious,R=null;if(L){if(i.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+L.programDateTime),R=(0,E.findFragmentByPDT)(C,L.endProgramDateTime,this.config.maxFragLookUpTolerance)),!R){var B=L.sn+1;if(B>=i.startSN&&B<=i.endSN){var O=C[B-i.startSN];L.cc===O.cc&&(R=O,this.log("Live playlist, switching playlist, load frag with next SN: "+R.sn))}R||(R=(0,E.findFragWithCC)(C,L.cc),R&&this.log("Live playlist, switching playlist, load frag with same CC: "+R.sn))}}else{var K=this.hls.liveSyncPosition;K!==null&&(R=this.getFragmentAtPosition(K,this.bitrateTest?i.fragmentEnd:i.edge,i))}return R},f.getFragmentAtPosition=function(i,C,L){var R=this.config,B=this.fragPrevious,O=L.fragments,K=L.endSN,G=L.fragmentHint,j=R.maxFragLookUpTolerance,Y=!!(R.lowLatencyMode&&L.partList&&G);Y&&G&&!this.bitrateTest&&(O=O.concat(G),K=G.sn);var V;if(i<C){var X=i>C-j?0:j;V=(0,E.findFragmentByPTS)(B,O,i,X)}else V=O[O.length-1];if(V){var Z=V.sn-L.startSN;if(this.fragmentTracker.getState(V)===D.FragmentState.OK&&(B=V),B&&V.sn===B.sn&&!Y){var $=B&&V.level===B.level;if($){var ee=O[Z+1];V.sn<K&&this.fragmentTracker.getState(ee)!==D.FragmentState.OK?(this.log("SN "+V.sn+" just loaded, load next one: "+ee.sn),V=ee):V=null}}}return V},f.synchronizeToLiveEdge=function(i){var C=this.config,L=this.media;if(!!L){var R=this.hls.liveSyncPosition,B=L.currentTime,O=i.fragments[0].start,K=i.edge,G=B>=O-C.maxFragLookUpTolerance&&B<=K;if(R!==null&&L.duration>R&&(B<R||!G)){var j=C.liveMaxLatencyDuration!==void 0?C.liveMaxLatencyDuration:C.liveMaxLatencyDurationCount*i.targetduration;(!G&&L.readyState<4||B<K-j)&&(this.loadedmetadata||(this.nextLoadPosition=R),L.readyState&&(this.warn("Playback: "+B.toFixed(3)+" is located too far from the end of live sliding playlist: "+K+", reset currentTime to : "+R.toFixed(3)),L.currentTime=R))}}},f.alignPlaylists=function(i,C){var L=this.levels,R=this.levelLastLoaded,B=this.fragPrevious,O=R!==null?L[R]:null,K=i.fragments.length;if(!K)return this.warn("No fragments in live playlist"),0;var G=i.fragments[0].start,j=!C,Y=i.alignedSliding&&(0,w.isFiniteNumber)(G);if(j||!Y&&!G){(0,g.alignStream)(B,O,i);var V=i.fragments[0].start;return this.log("Live playlist sliding: "+V.toFixed(2)+" start-sn: "+(C?C.startSN:"na")+"->"+i.startSN+" prev-sn: "+(B?B.sn:"na")+" fragments: "+K),V}return G},f.waitForCdnTuneIn=function(i){var C=3;return i.live&&i.canBlockReload&&i.partTarget&&i.tuneInGoal>Math.max(i.partHoldBack,i.partTarget*C)},f.setStartPosition=function(i,C){var L=this.startPosition;if(L<C&&(L=-1),L===-1||this.lastCurrentTime===-1){var R=i.startTimeOffset;(0,w.isFiniteNumber)(R)?(L=C+R,R<0&&(L+=i.totalduration),L=Math.min(Math.max(C,L),C+i.totalduration),this.log("Start time offset "+R+" found in playlist, adjust startPosition to "+L),this.startPosition=L):i.live?L=this.hls.liveSyncPosition||C:this.startPosition=L=0,this.lastCurrentTime=L}this.nextLoadPosition=L},f.getLoadPosition=function(){var i=this.media,C=0;return this.loadedmetadata&&i?C=i.currentTime:this.nextLoadPosition&&(C=this.nextLoadPosition),C},f.handleFragLoadAborted=function(i,C){this.transmuxer&&i.sn!=="initSegment"&&i.stats.aborted&&(this.warn("Fragment "+i.sn+(C?" part"+C.index:"")+" of level "+i.level+" was aborted"),this.resetFragmentLoading(i))},f.resetFragmentLoading=function(i){(!this.fragCurrent||!this.fragContextChanged(i)&&this.state!==o.FRAG_LOADING_WAITING_RETRY)&&(this.state=o.IDLE)},f.onFragmentOrKeyLoadError=function(i,C){if(!C.fatal){var L=C.frag;if(!(!L||L.type!==i)){var R=this.fragCurrent;console.assert(R&&L.sn===R.sn&&L.level===R.level&&L.urlId===R.urlId,"Frag load error must match current frag to retry");var B=this.config;if(this.fragLoadError+1<=B.fragLoadingMaxRetry){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);var O=Math.min(Math.pow(2,this.fragLoadError)*B.fragLoadingRetryDelay,B.fragLoadingMaxRetryTimeout);this.warn("Fragment "+L.sn+" of "+i+" "+L.level+" failed to load, retrying in "+O+"ms"),this.retryDate=self.performance.now()+O,this.fragLoadError++,this.state=o.FRAG_LOADING_WAITING_RETRY}else C.levelRetry?(i===n.PlaylistLevelType.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=o.IDLE):(k.logger.error(C.details+" reaches max retry, redispatch as fatal ..."),C.fatal=!0,this.hls.stopLoad(),this.state=o.ERROR)}}},f.afterBufferFlushed=function(i,C,L){if(!!i){var R=p.BufferHelper.getBuffered(i);this.fragmentTracker.detectEvictedFragments(C,R,L),this.state===o.ENDED&&this.resetLoadingState()}},f.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=o.IDLE},f.resetStartWhenNotLoaded=function(i){if(!this.loadedmetadata){this.startFragRequested=!1;var C=this.levels?this.levels[i].details:null;C!=null&&C.live?(this.startPosition=-1,this.setStartPosition(C,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}},f.updateLevelTiming=function(i,C,L,R){var B=this,O=L.details;console.assert(!!O,"level.details must be defined");var K=Object.keys(i.elementaryStreams).reduce(function(G,j){var Y=i.elementaryStreams[j];if(Y){var V=Y.endPTS-Y.startPTS;if(V<=0)return B.warn("Could not parse fragment "+i.sn+" "+j+" duration reliably ("+V+")"),G||!1;var X=R?0:(0,y.updateFragPTSDTS)(O,i,Y.startPTS,Y.endPTS,Y.startDTS,Y.endDTS);return B.hls.trigger(S.Events.LEVEL_PTS_UPDATED,{details:O,level:L,drift:X,type:j,frag:i,start:Y.startPTS,end:Y.endPTS}),!0}return G},!1);K||(this.warn("Found no media in fragment "+i.sn+" of level "+L.id+" resetting transmuxer to fallback to playlist timing"),this.resetTransmuxer()),this.state=o.PARSED,this.hls.trigger(S.Events.FRAG_PARSED,{frag:i,part:C})},f.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},h(u,[{key:"state",get:function(){return this._state},set:function(i){var C=this._state;C!==i&&(this._state=i,this.log(C+"->"+i))}}]),u}(_.default)},"./src/controller/buffer-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>E});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts"),p=x("./src/errors.ts"),k=x("./src/utils/buffer-helper.ts"),S=x("./src/utils/mediasource-helper.ts"),v=x("./src/loader/fragment.ts"),b=x("./src/controller/buffer-operation-queue.ts"),m=(0,S.getMediaSource)(),g=/([ha]vc.)(?:\.[^.,]+)+/,E=function(){function y(l){var r=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var n=r.hls,d=r.media,h=r.mediaSource;D.logger.log("[buffer-controller]: Media source opened"),d&&(r.updateMediaElementDuration(),n.trigger(_.Events.MEDIA_ATTACHED,{media:d})),h&&h.removeEventListener("sourceopen",r._onMediaSourceOpen),r.checkPendingTracks()},this._onMediaSourceClose=function(){D.logger.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){D.logger.log("[buffer-controller]: Media source ended")},this.hls=l,this._initSourceBuffer(),this.registerListeners()}var T=y.prototype;return T.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},T.destroy=function(){this.unregisterListeners(),this.details=null},T.registerListeners=function(){var r=this.hls;r.on(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),r.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),r.on(_.Events.MANIFEST_PARSED,this.onManifestParsed,this),r.on(_.Events.BUFFER_RESET,this.onBufferReset,this),r.on(_.Events.BUFFER_APPENDING,this.onBufferAppending,this),r.on(_.Events.BUFFER_CODECS,this.onBufferCodecs,this),r.on(_.Events.BUFFER_EOS,this.onBufferEos,this),r.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),r.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),r.on(_.Events.FRAG_PARSED,this.onFragParsed,this),r.on(_.Events.FRAG_CHANGED,this.onFragChanged,this)},T.unregisterListeners=function(){var r=this.hls;r.off(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),r.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),r.off(_.Events.MANIFEST_PARSED,this.onManifestParsed,this),r.off(_.Events.BUFFER_RESET,this.onBufferReset,this),r.off(_.Events.BUFFER_APPENDING,this.onBufferAppending,this),r.off(_.Events.BUFFER_CODECS,this.onBufferCodecs,this),r.off(_.Events.BUFFER_EOS,this.onBufferEos,this),r.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),r.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),r.off(_.Events.FRAG_PARSED,this.onFragParsed,this),r.off(_.Events.FRAG_CHANGED,this.onFragChanged,this)},T._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new b.default(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},T.onManifestParsed=function(r,n){var d=2;(n.audio&&!n.video||!n.altAudio)&&(d=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=d,this.details=null,D.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},T.onMediaAttaching=function(r,n){var d=this.media=n.media;if(d&&m){var h=this.mediaSource=new m;h.addEventListener("sourceopen",this._onMediaSourceOpen),h.addEventListener("sourceended",this._onMediaSourceEnded),h.addEventListener("sourceclose",this._onMediaSourceClose),d.src=self.URL.createObjectURL(h),this._objectUrl=d.src}},T.onMediaDetaching=function(){var r=this.media,n=this.mediaSource,d=this._objectUrl;if(n){if(D.logger.log("[buffer-controller]: media source detaching"),n.readyState==="open")try{n.endOfStream()}catch(h){D.logger.warn("[buffer-controller]: onMediaDetaching: "+h.message+" while calling endOfStream")}this.onBufferReset(),n.removeEventListener("sourceopen",this._onMediaSourceOpen),n.removeEventListener("sourceended",this._onMediaSourceEnded),n.removeEventListener("sourceclose",this._onMediaSourceClose),r&&(d&&self.URL.revokeObjectURL(d),r.src===d?(r.removeAttribute("src"),r.load()):D.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(_.Events.MEDIA_DETACHED,void 0)},T.onBufferReset=function(){var r=this;this.getSourceBufferTypes().forEach(function(n){var d=r.sourceBuffer[n];try{d&&(r.removeBufferListeners(n),r.mediaSource&&r.mediaSource.removeSourceBuffer(d),r.sourceBuffer[n]=void 0)}catch(h){D.logger.warn("[buffer-controller]: Failed to reset the "+n+" buffer",h)}}),this._initSourceBuffer()},T.onBufferCodecs=function(r,n){var d=this,h=this.getSourceBufferTypes().length;Object.keys(n).forEach(function(a){if(h){var t=d.tracks[a];if(t&&typeof t.buffer.changeType=="function"){var e=n[a],o=e.id,s=e.codec,A=e.levelCodec,u=e.container,f=e.metadata,c=(t.levelCodec||t.codec).replace(g,"$1"),i=(A||s).replace(g,"$1");if(c!==i){var C=u+";codecs="+(A||s);d.appendChangeType(a,C),D.logger.log("[buffer-controller]: switching codec "+c+" to "+i),d.tracks[a]={buffer:t.buffer,codec:s,container:u,levelCodec:A,metadata:f,id:o}}}}else d.pendingTracks[a]=n[a]}),!h&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())},T.appendChangeType=function(r,n){var d=this,h=this.operationQueue,a={execute:function(){var e=d.sourceBuffer[r];e&&(D.logger.log("[buffer-controller]: changing "+r+" sourceBuffer type to "+n),e.changeType(n)),h.shiftAndExecuteNext(r)},onStart:function(){},onComplete:function(){},onError:function(e){D.logger.warn("[buffer-controller]: Failed to change "+r+" SourceBuffer type",e)}};h.append(a,r)},T.onBufferAppending=function(r,n){var d=this,h=this.hls,a=this.operationQueue,t=this.tracks,e=n.data,o=n.type,s=n.frag,A=n.part,u=n.chunkMeta,f=u.buffering[o],c=self.performance.now();f.start=c;var i=s.stats.buffering,C=A?A.stats.buffering:null;i.start===0&&(i.start=c),C&&C.start===0&&(C.start=c);var L=t.audio,R=o==="audio"&&u.id===1&&(L==null?void 0:L.container)==="audio/mpeg",B={execute:function(){if(f.executeStart=self.performance.now(),R){var K=d.sourceBuffer[o];if(K){var G=s.start-K.timestampOffset;Math.abs(G)>=.1&&(D.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+s.start+" (delta: "+G+") sn: "+s.sn+")"),K.timestampOffset=s.start)}}d.appendExecutor(e,o)},onStart:function(){},onComplete:function(){var K=self.performance.now();f.executeEnd=f.end=K,i.first===0&&(i.first=K),C&&C.first===0&&(C.first=K);var G=d.sourceBuffer,j={};for(var Y in G)j[Y]=k.BufferHelper.getBuffered(G[Y]);d.appendError=0,d.hls.trigger(_.Events.BUFFER_APPENDED,{type:o,frag:s,part:A,chunkMeta:u,parent:s.type,timeRanges:j})},onError:function(K){D.logger.error("[buffer-controller]: Error encountered while trying to append to the "+o+" SourceBuffer",K);var G={type:p.ErrorTypes.MEDIA_ERROR,parent:s.type,details:p.ErrorDetails.BUFFER_APPEND_ERROR,err:K,fatal:!1};K.code===DOMException.QUOTA_EXCEEDED_ERR?G.details=p.ErrorDetails.BUFFER_FULL_ERROR:(d.appendError++,G.details=p.ErrorDetails.BUFFER_APPEND_ERROR,d.appendError>h.config.appendErrorMaxRetry&&(D.logger.error("[buffer-controller]: Failed "+h.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),G.fatal=!0,h.stopLoad())),h.trigger(_.Events.ERROR,G)}};a.append(B,o)},T.onBufferFlushing=function(r,n){var d=this,h=this.operationQueue,a=function(e){return{execute:d.removeExecutor.bind(d,e,n.startOffset,n.endOffset),onStart:function(){},onComplete:function(){d.hls.trigger(_.Events.BUFFER_FLUSHED,{type:e})},onError:function(s){D.logger.warn("[buffer-controller]: Failed to remove from "+e+" SourceBuffer",s)}}};n.type?h.append(a(n.type),n.type):this.getSourceBufferTypes().forEach(function(t){h.append(a(t),t)})},T.onFragParsed=function(r,n){var d=this,h=n.frag,a=n.part,t=[],e=a?a.elementaryStreams:h.elementaryStreams;e[v.ElementaryStreamTypes.AUDIOVIDEO]?t.push("audiovideo"):(e[v.ElementaryStreamTypes.AUDIO]&&t.push("audio"),e[v.ElementaryStreamTypes.VIDEO]&&t.push("video"));var o=function(){var A=self.performance.now();h.stats.buffering.end=A,a&&(a.stats.buffering.end=A);var u=a?a.stats:h.stats;d.hls.trigger(_.Events.FRAG_BUFFERED,{frag:h,part:a,stats:u,id:h.type})};t.length===0&&D.logger.warn("Fragments must have at least one ElementaryStreamType set. type: "+h.type+" level: "+h.level+" sn: "+h.sn),this.blockBuffers(o,t)},T.onFragChanged=function(r,n){this.flushBackBuffer()},T.onBufferEos=function(r,n){var d=this,h=this.getSourceBufferTypes().reduce(function(a,t){var e=d.sourceBuffer[t];return(!n.type||n.type===t)&&e&&!e.ended&&(e.ended=!0,D.logger.log("[buffer-controller]: "+t+" sourceBuffer now EOS")),a&&!!(!e||e.ended)},!0);h&&this.blockBuffers(function(){var a=d.mediaSource;!a||a.readyState!=="open"||a.endOfStream()})},T.onLevelUpdated=function(r,n){var d=n.details;!d.fragments.length||(this.details=d,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},T.flushBackBuffer=function(){var r=this.hls,n=this.details,d=this.media,h=this.sourceBuffer;if(!(!d||n===null)){var a=this.getSourceBufferTypes();if(!!a.length){var t=n.live&&r.config.liveBackBufferLength!==null?r.config.liveBackBufferLength:r.config.backBufferLength;if(!(!(0,w.isFiniteNumber)(t)||t<0)){var e=d.currentTime,o=n.levelTargetDuration,s=Math.max(t,o),A=Math.floor(e/o)*o-s;a.forEach(function(u){var f=h[u];if(f){var c=k.BufferHelper.getBuffered(f);c.length>0&&A>c.start(0)&&(r.trigger(_.Events.BACK_BUFFER_REACHED,{bufferEnd:A}),n.live&&r.trigger(_.Events.LIVE_BACK_BUFFER_REACHED,{bufferEnd:A}),r.trigger(_.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:A,type:u}))}})}}}},T.updateMediaElementDuration=function(){if(!(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")){var r=this.details,n=this.hls,d=this.media,h=this.mediaSource,a=r.fragments[0].start+r.totalduration,t=d.duration,e=(0,w.isFiniteNumber)(h.duration)?h.duration:0;r.live&&n.config.liveDurationInfinity?(D.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),h.duration=1/0,this.updateSeekableRange(r)):(a>e&&a>t||!(0,w.isFiniteNumber)(t))&&(D.logger.log("[buffer-controller]: Updating Media Source duration to "+a.toFixed(3)),h.duration=a)}},T.updateSeekableRange=function(r){var n=this.mediaSource,d=r.fragments,h=d.length;if(h&&r.live&&n!==null&&n!==void 0&&n.setLiveSeekableRange){var a=Math.max(0,d[0].start),t=Math.max(a,a+r.totalduration);n.setLiveSeekableRange(a,t)}},T.checkPendingTracks=function(){var r=this.bufferCodecEventsExpected,n=this.operationQueue,d=this.pendingTracks,h=Object.keys(d).length;if(h&&!r||h===2){this.createSourceBuffers(d),this.pendingTracks={};var a=this.getSourceBufferTypes();if(a.length===0){this.hls.trigger(_.Events.ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});return}a.forEach(function(t){n.executeNext(t)})}},T.createSourceBuffers=function(r){var n=this.sourceBuffer,d=this.mediaSource;if(!d)throw Error("createSourceBuffers called when mediaSource was null");var h=0;for(var a in r)if(!n[a]){var t=r[a];if(!t)throw Error("source buffer exists for track "+a+", however track does not");var e=t.levelCodec||t.codec,o=t.container+";codecs="+e;D.logger.log("[buffer-controller]: creating sourceBuffer("+o+")");try{var s=n[a]=d.addSourceBuffer(o),A=a;this.addBufferListener(A,"updatestart",this._onSBUpdateStart),this.addBufferListener(A,"updateend",this._onSBUpdateEnd),this.addBufferListener(A,"error",this._onSBUpdateError),this.tracks[a]={buffer:s,codec:e,container:t.container,levelCodec:t.levelCodec,metadata:t.metadata,id:t.id},h++}catch(u){D.logger.error("[buffer-controller]: error while trying to add sourceBuffer: "+u.message),this.hls.trigger(_.Events.ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:u,mimeType:o})}}h&&this.hls.trigger(_.Events.BUFFER_CREATED,{tracks:this.tracks})},T._onSBUpdateStart=function(r){var n=this.operationQueue,d=n.current(r);d.onStart()},T._onSBUpdateEnd=function(r){var n=this.operationQueue,d=n.current(r);d.onComplete(),n.shiftAndExecuteNext(r)},T._onSBUpdateError=function(r,n){D.logger.error("[buffer-controller]: "+r+" SourceBuffer error",n),this.hls.trigger(_.Events.ERROR,{type:p.ErrorTypes.MEDIA_ERROR,details:p.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1});var d=this.operationQueue.current(r);d&&d.onError(n)},T.removeExecutor=function(r,n,d){var h=this.media,a=this.mediaSource,t=this.operationQueue,e=this.sourceBuffer,o=e[r];if(!h||!a||!o){D.logger.warn("[buffer-controller]: Attempting to remove from the "+r+" SourceBuffer, but it does not exist"),t.shiftAndExecuteNext(r);return}var s=(0,w.isFiniteNumber)(h.duration)?h.duration:1/0,A=(0,w.isFiniteNumber)(a.duration)?a.duration:1/0,u=Math.max(0,n),f=Math.min(d,s,A);f>u?(D.logger.log("[buffer-controller]: Removing ["+u+","+f+"] from the "+r+" SourceBuffer"),console.assert(!o.updating,r+" sourceBuffer must not be updating"),o.remove(u,f)):t.shiftAndExecuteNext(r)},T.appendExecutor=function(r,n){var d=this.operationQueue,h=this.sourceBuffer,a=h[n];if(!a){D.logger.warn("[buffer-controller]: Attempting to append to the "+n+" SourceBuffer, but it does not exist"),d.shiftAndExecuteNext(n);return}a.ended=!1,console.assert(!a.updating,n+" sourceBuffer must not be updating"),a.appendBuffer(r)},T.blockBuffers=function(r,n){var d=this;if(n===void 0&&(n=this.getSourceBufferTypes()),!n.length){D.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(r);return}var h=this.operationQueue,a=n.map(function(t){return h.appendBlocker(t)});Promise.all(a).then(function(){r(),n.forEach(function(t){var e=d.sourceBuffer[t];(!e||!e.updating)&&h.shiftAndExecuteNext(t)})})},T.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},T.addBufferListener=function(r,n,d){var h=this.sourceBuffer[r];if(!!h){var a=d.bind(this,r);this.listeners[r].push({event:n,listener:a}),h.addEventListener(n,a)}},T.removeBufferListeners=function(r){var n=this.sourceBuffer[r];!n||this.listeners[r].forEach(function(d){n.removeEventListener(d.event,d.listener)})},y}()},"./src/controller/buffer-operation-queue.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=x("./src/utils/logger.ts"),_=function(){function D(k){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=k}var p=D.prototype;return p.append=function(S,v){var b=this.queues[v];b.push(S),b.length===1&&this.buffers[v]&&this.executeNext(v)},p.insertAbort=function(S,v){var b=this.queues[v];b.unshift(S),this.executeNext(v)},p.appendBlocker=function(S){var v,b=new Promise(function(g){v=g}),m={execute:v,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(m,S),b},p.executeNext=function(S){var v=this.buffers,b=this.queues,m=v[S],g=b[S];if(g.length){var E=g[0];try{E.execute()}catch(y){w.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),E.onError(y),(!m||!m.updating)&&(g.shift(),this.executeNext(S))}}},p.shiftAndExecuteNext=function(S){this.queues[S].shift(),this.executeNext(S)},p.current=function(S){return this.queues[S][0]},D}()},"./src/controller/cap-level-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/events.ts");function _(S,v){for(var b=0;b<v.length;b++){var m=v[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(S,m.key,m)}}function D(S,v,b){return v&&_(S.prototype,v),b&&_(S,b),Object.defineProperty(S,"prototype",{writable:!1}),S}var p=function(){function S(b){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=b,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var v=S.prototype;return v.setStreamController=function(m){this.streamController=m},v.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},v.registerListeners=function(){var m=this.hls;m.on(w.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.on(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.on(w.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.unregisterListener=function(){var m=this.hls;m.off(w.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.off(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.off(w.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.onFpsDropLevelCapping=function(m,g){S.isLevelAllowed(g.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(g.droppedLevel)},v.onMediaAttaching=function(m,g){this.media=g.media instanceof HTMLVideoElement?g.media:null},v.onManifestParsed=function(m,g){var E=this.hls;this.restrictedLevels=[],this.firstLevel=g.firstLevel,E.config.capLevelToPlayerSize&&g.video&&this.startCapping()},v.onBufferCodecs=function(m,g){var E=this.hls;E.config.capLevelToPlayerSize&&g.video&&this.startCapping()},v.onMediaDetaching=function(){this.stopCapping()},v.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var m=this.hls.levels;if(m.length){var g=this.hls;g.autoLevelCapping=this.getMaxLevel(m.length-1),g.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=g.autoLevelCapping}}},v.getMaxLevel=function(m){var g=this,E=this.hls.levels;if(!E.length)return-1;var y=E.filter(function(T,l){return S.isLevelAllowed(l,g.restrictedLevels)&&l<=m});return this.clientRect=null,S.getMaxLevelByMediaSize(y,this.mediaWidth,this.mediaHeight)},v.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},v.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},v.getDimensions=function(){if(this.clientRect)return this.clientRect;var m=this.media,g={width:0,height:0};if(m){var E=m.getBoundingClientRect();g.width=E.width,g.height=E.height,!g.width&&!g.height&&(g.width=E.right-E.left||m.width||0,g.height=E.bottom-E.top||m.height||0)}return this.clientRect=g,g},S.isLevelAllowed=function(m,g){return g===void 0&&(g=[]),g.indexOf(m)===-1},S.getMaxLevelByMediaSize=function(m,g,E){if(!m||!m.length)return-1;for(var y=function(d,h){return h?d.width!==h.width||d.height!==h.height:!0},T=m.length-1,l=0;l<m.length;l+=1){var r=m[l];if((r.width>=g||r.height>=E)&&y(r,m[l+1])){T=l;break}}return T},D(S,[{key:"mediaWidth",get:function(){return this.getDimensions().width*this.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*this.contentScaleFactor}},{key:"contentScaleFactor",get:function(){var m=1;if(!this.hls.config.ignoreDevicePixelRatio)try{m=self.devicePixelRatio}catch{}return m}}]),S}();const k=p},"./src/controller/cmcd-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>E});var w=x("./src/events.ts"),_=x("./src/types/cmcd.ts"),D=x("./src/utils/buffer-helper.ts"),p=x("./src/utils/logger.ts");function k(y,T){for(var l=0;l<T.length;l++){var r=T[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(y,r.key,r)}}function S(y,T,l){return T&&k(y.prototype,T),l&&k(y,l),Object.defineProperty(y,"prototype",{writable:!1}),y}function v(y,T){var l=typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"];if(l)return(l=l.call(y)).next.bind(l);if(Array.isArray(y)||(l=b(y))||T&&y&&typeof y.length=="number"){l&&(y=l);var r=0;return function(){return r>=y.length?{done:!0}:{done:!1,value:y[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(y,T){if(!!y){if(typeof y=="string")return m(y,T);var l=Object.prototype.toString.call(y).slice(8,-1);if(l==="Object"&&y.constructor&&(l=y.constructor.name),l==="Map"||l==="Set")return Array.from(y);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return m(y,T)}}function m(y,T){(T==null||T>y.length)&&(T=y.length);for(var l=0,r=new Array(T);l<T;l++)r[l]=y[l];return r}function g(){return g=Object.assign?Object.assign.bind():function(y){for(var T=1;T<arguments.length;T++){var l=arguments[T];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(y[r]=l[r])}return y},g.apply(this,arguments)}var E=function(){function y(l){var r=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){r.initialized&&(r.starved=!0),r.buffering=!0},this.onPlaying=function(){r.initialized||(r.initialized=!0),r.buffering=!1},this.applyPlaylistData=function(h){try{r.apply(h,{ot:_.CMCDObjectType.MANIFEST,su:!r.initialized})}catch(a){p.logger.warn("Could not generate manifest CMCD data.",a)}},this.applyFragmentData=function(h){try{var a=h.frag,t=r.hls.levels[a.level],e=r.getObjectType(a),o={d:a.duration*1e3,ot:e};(e===_.CMCDObjectType.VIDEO||e===_.CMCDObjectType.AUDIO||e==_.CMCDObjectType.MUXED)&&(o.br=t.bitrate/1e3,o.tb=r.getTopBandwidth(e)/1e3,o.bl=r.getBufferLength(e)),r.apply(h,o)}catch(s){p.logger.warn("Could not generate segment CMCD data.",s)}},this.hls=l;var n=this.config=l.config,d=n.cmcd;d!=null&&(n.pLoader=this.createPlaylistLoader(),n.fLoader=this.createFragmentLoader(),this.sid=d.sessionId||y.uuid(),this.cid=d.contentId,this.useHeaders=d.useHeaders===!0,this.registerListeners())}var T=y.prototype;return T.registerListeners=function(){var r=this.hls;r.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),r.on(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),r.on(w.Events.BUFFER_CREATED,this.onBufferCreated,this)},T.unregisterListeners=function(){var r=this.hls;r.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),r.off(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),r.off(w.Events.BUFFER_CREATED,this.onBufferCreated,this),this.onMediaDetached()},T.destroy=function(){this.unregisterListeners(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},T.onMediaAttached=function(r,n){this.media=n.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},T.onMediaDetached=function(){!this.media||(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},T.onBufferCreated=function(r,n){var d,h;this.audioBuffer=(d=n.tracks.audio)===null||d===void 0?void 0:d.buffer,this.videoBuffer=(h=n.tracks.video)===null||h===void 0?void 0:h.buffer},T.createData=function(){var r;return{v:_.CMCDVersion,sf:_.CMCDStreamingFormat.HLS,sid:this.sid,cid:this.cid,pr:(r=this.media)===null||r===void 0?void 0:r.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},T.apply=function(r,n){n===void 0&&(n={}),g(n,this.createData());var d=n.ot===_.CMCDObjectType.INIT||n.ot===_.CMCDObjectType.VIDEO||n.ot===_.CMCDObjectType.MUXED;if(this.starved&&d&&(n.bs=!0,n.su=!0,this.starved=!1),n.su==null&&(n.su=this.buffering),this.useHeaders){var h=y.toHeaders(n);if(!Object.keys(h).length)return;r.headers||(r.headers={}),g(r.headers,h)}else{var a=y.toQuery(n);if(!a)return;r.url=y.appendQueryToUri(r.url,a)}},T.getObjectType=function(r){var n=r.type;if(n==="subtitle")return _.CMCDObjectType.TIMED_TEXT;if(r.sn==="initSegment")return _.CMCDObjectType.INIT;if(n==="audio")return _.CMCDObjectType.AUDIO;if(n==="main")return this.hls.audioTracks.length?_.CMCDObjectType.VIDEO:_.CMCDObjectType.MUXED},T.getTopBandwidth=function(r){var n=0,d,h=this.hls;if(r===_.CMCDObjectType.AUDIO)d=h.audioTracks;else{var a=h.maxAutoLevel,t=a>-1?a+1:h.levels.length;d=h.levels.slice(0,t)}for(var e=v(d),o;!(o=e()).done;){var s=o.value;s.bitrate>n&&(n=s.bitrate)}return n>0?n:NaN},T.getBufferLength=function(r){var n=this.hls.media,d=r===_.CMCDObjectType.AUDIO?this.audioBuffer:this.videoBuffer;if(!d||!n)return NaN;var h=D.BufferHelper.bufferInfo(d,n.currentTime,this.config.maxBufferHole);return h.len*1e3},T.createPlaylistLoader=function(){var r=this.config.pLoader,n=this.applyPlaylistData,d=r||this.config.loader;return function(){function h(t){this.loader=void 0,this.loader=new d(t)}var a=h.prototype;return a.destroy=function(){this.loader.destroy()},a.abort=function(){this.loader.abort()},a.load=function(e,o,s){n(e),this.loader.load(e,o,s)},S(h,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),h}()},T.createFragmentLoader=function(){var r=this.config.fLoader,n=this.applyFragmentData,d=r||this.config.loader;return function(){function h(t){this.loader=void 0,this.loader=new d(t)}var a=h.prototype;return a.destroy=function(){this.loader.destroy()},a.abort=function(){this.loader.abort()},a.load=function(e,o,s){n(e),this.loader.load(e,o,s)},S(h,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),h}()},y.uuid=function(){var r=URL.createObjectURL(new Blob),n=r.toString();return URL.revokeObjectURL(r),n.slice(n.lastIndexOf("/")+1)},y.serialize=function(r){for(var n=[],d=function(R){return!Number.isNaN(R)&&R!=null&&R!==""&&R!==!1},h=function(R){return Math.round(R)},a=function(R){return h(R/100)*100},t=function(R){return encodeURIComponent(R)},e={br:h,d:h,bl:a,dl:a,mtp:a,nor:t,rtp:a,tb:h},o=Object.keys(r||{}).sort(),s=v(o),A;!(A=s()).done;){var u=A.value,f=r[u];if(!!d(f)&&!(u==="v"&&f===1)&&!(u=="pr"&&f===1)){var c=e[u];c&&(f=c(f));var i=typeof f,C=void 0;u==="ot"||u==="sf"||u==="st"?C=u+"="+f:i==="boolean"?C=u:i==="number"?C=u+"="+f:C=u+"="+JSON.stringify(f),n.push(C)}}return n.join(",")},y.toHeaders=function(r){for(var n=Object.keys(r),d={},h=["Object","Request","Session","Status"],a=[{},{},{},{}],t={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},e=0,o=n;e<o.length;e++){var s=o[e],A=t[s]!=null?t[s]:1;a[A][s]=r[s]}for(var u=0;u<a.length;u++){var f=y.serialize(a[u]);f&&(d["CMCD-"+h[u]]=f)}return d},y.toQuery=function(r){return"CMCD="+encodeURIComponent(y.serialize(r))},y.appendQueryToUri=function(r,n){if(!n)return r;var d=r.includes("?")?"&":"?";return""+r+d+n},y}()},"./src/controller/eme-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>E});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/utils/logger.ts"),p=x("./src/utils/mediakeys-helper.ts");function k(y,T){for(var l=0;l<T.length;l++){var r=T[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(y,r.key,r)}}function S(y,T,l){return T&&k(y.prototype,T),l&&k(y,l),Object.defineProperty(y,"prototype",{writable:!1}),y}var v=3,b=function(T,l,r){var n={audioCapabilities:[],videoCapabilities:[]};return T.forEach(function(d){n.audioCapabilities.push({contentType:'audio/mp4; codecs="'+d+'"',robustness:r.audioRobustness||""})}),l.forEach(function(d){n.videoCapabilities.push({contentType:'video/mp4; codecs="'+d+'"',robustness:r.videoRobustness||""})}),[n]},m=function(T,l,r,n){switch(T){case p.KeySystems.WIDEVINE:return b(l,r,n);default:throw new Error("Unknown key-system: "+T)}},g=function(){function y(l){this.hls=void 0,this._widevineLicenseUrl=void 0,this._licenseXhrSetup=void 0,this._licenseResponseCallback=void 0,this._emeEnabled=void 0,this._requestMediaKeySystemAccess=void 0,this._drmSystemOptions=void 0,this._config=void 0,this._mediaKeysList=[],this._media=null,this._hasSetMediaKeys=!1,this._requestLicenseFailureCount=0,this.mediaKeysPromise=null,this._onMediaEncrypted=this.onMediaEncrypted.bind(this),this.hls=l,this._config=l.config,this._widevineLicenseUrl=this._config.widevineLicenseUrl,this._licenseXhrSetup=this._config.licenseXhrSetup,this._licenseResponseCallback=this._config.licenseResponseCallback,this._emeEnabled=this._config.emeEnabled,this._requestMediaKeySystemAccess=this._config.requestMediaKeySystemAccessFunc,this._drmSystemOptions=this._config.drmSystemOptions,this._registerListeners()}var T=y.prototype;return T.destroy=function(){this._unregisterListeners(),this.hls=this._onMediaEncrypted=null,this._requestMediaKeySystemAccess=null},T._registerListeners=function(){this.hls.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this)},T._unregisterListeners=function(){this.hls.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this)},T.getLicenseServerUrl=function(r){switch(r){case p.KeySystems.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+r+'"')},T._attemptKeySystemAccess=function(r,n,d){var h=this,a=m(r,n,d,this._drmSystemOptions);D.logger.log("Requesting encrypted media key-system access");var t=this.requestMediaKeySystemAccess(r,a);this.mediaKeysPromise=t.then(function(e){return h._onMediaKeySystemAccessObtained(r,e)}),t.catch(function(e){D.logger.error('Failed to obtain key-system "'+r+'" access:',e)})},T._onMediaKeySystemAccessObtained=function(r,n){var d=this;D.logger.log('Access for key-system "'+r+'" obtained');var h={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:n,mediaKeySystemDomain:r};this._mediaKeysList.push(h);var a=Promise.resolve().then(function(){return n.createMediaKeys()}).then(function(t){return h.mediaKeys=t,D.logger.log('Media-keys created for key-system "'+r+'"'),d._onMediaKeysCreated(),t});return a.catch(function(t){D.logger.error("Failed to create media-keys:",t)}),a},T._onMediaKeysCreated=function(){var r=this;this._mediaKeysList.forEach(function(n){n.mediaKeysSession||(n.mediaKeysSession=n.mediaKeys.createSession(),r._onNewMediaKeySession(n.mediaKeysSession))})},T._onNewMediaKeySession=function(r){var n=this;D.logger.log("New key-system session "+r.sessionId),r.addEventListener("message",function(d){n._onKeySessionMessage(r,d.message)},!1)},T._onKeySessionMessage=function(r,n){D.logger.log("Got EME message event, creating license request"),this._requestLicense(n,function(d){D.logger.log("Received license data (length: "+(d&&d.byteLength)+"), updating key-session"),r.update(d).catch(function(h){D.logger.warn("Updating key-session failed: "+h)})})},T.onMediaEncrypted=function(r){var n=this;if(D.logger.log('Media is encrypted using "'+r.initDataType+'" init data type'),!this.mediaKeysPromise){D.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}var d=function(a){!n._media||(n._attemptSetMediaKeys(a),n._generateRequestWithPreferredKeySession(r.initDataType,r.initData))};this.mediaKeysPromise.then(d).catch(d)},T._attemptSetMediaKeys=function(r){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var n=this._mediaKeysList[0];if(!n||!n.mediaKeys){D.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}D.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(n.mediaKeys),this._hasSetMediaKeys=!0}},T._generateRequestWithPreferredKeySession=function(r,n){var d=this,h=this._mediaKeysList[0];if(!h){D.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}if(h.mediaKeysSessionInitialized){D.logger.warn("Key-Session already initialized but requested again");return}var a=h.mediaKeysSession;if(!a){D.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0});return}if(!n){D.logger.warn("Fatal: initData required for generating a key session is null"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});return}D.logger.log('Generating key-session request for "'+r+'" init data type'),h.mediaKeysSessionInitialized=!0,a.generateRequest(r,n).then(function(){D.logger.debug("Key-session generation succeeded")}).catch(function(t){D.logger.error("Error generating key-session request:",t),d.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})},T._createLicenseXhr=function(r,n,d){var h=new XMLHttpRequest;h.responseType="arraybuffer",h.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,h,r,n,d);var a=this._licenseXhrSetup;if(a)try{a.call(this.hls,h,r),a=void 0}catch(t){D.logger.error(t)}try{h.readyState||h.open("POST",r,!0),a&&a.call(this.hls,h,r)}catch(t){throw new Error("issue setting up KeySystem license XHR "+t)}return h},T._onLicenseRequestReadyStageChange=function(r,n,d,h){switch(r.readyState){case 4:if(r.status===200){this._requestLicenseFailureCount=0,D.logger.log("License request succeeded");var a=r.response,t=this._licenseResponseCallback;if(t)try{a=t.call(this.hls,r,n)}catch(o){D.logger.error(o)}h(a)}else{if(D.logger.error("License Request XHR failed ("+n+"). Status: "+r.status+" ("+r.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>v){this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});return}var e=v-this._requestLicenseFailureCount+1;D.logger.warn("Retrying license request, "+e+" attempts left"),this._requestLicense(d,h)}break}},T._generateLicenseRequestChallenge=function(r,n){switch(r.mediaKeySystemDomain){case p.KeySystems.WIDEVINE:return n}throw new Error("unsupported key-system: "+r.mediaKeySystemDomain)},T._requestLicense=function(r,n){D.logger.log("Requesting content license for key-system");var d=this._mediaKeysList[0];if(!d){D.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}try{var h=this.getLicenseServerUrl(d.mediaKeySystemDomain),a=this._createLicenseXhr(h,r,n);D.logger.log("Sending license request to URL: "+h);var t=this._generateLicenseRequestChallenge(d,r);a.send(t)}catch(e){D.logger.error("Failure requesting DRM license: "+e),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},T.onMediaAttached=function(r,n){if(!!this._emeEnabled){var d=n.media;this._media=d,d.addEventListener("encrypted",this._onMediaEncrypted)}},T.onMediaDetached=function(){var r=this._media,n=this._mediaKeysList;!r||(r.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(n.map(function(d){if(d.mediaKeysSession)return d.mediaKeysSession.close().catch(function(){})})).then(function(){return r.setMediaKeys(null)}).catch(function(){}))},T.onManifestParsed=function(r,n){if(!!this._emeEnabled){var d=n.levels.map(function(a){return a.audioCodec}).filter(function(a){return!!a}),h=n.levels.map(function(a){return a.videoCodec}).filter(function(a){return!!a});this._attemptKeySystemAccess(p.KeySystems.WIDEVINE,d,h)}},S(y,[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}]),y}();const E=g},"./src/controller/fps-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>p});var w=x("./src/events.ts"),_=x("./src/utils/logger.ts"),D=function(){function k(v){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=v,this.registerListeners()}var S=k.prototype;return S.setStreamController=function(b){this.streamController=b},S.registerListeners=function(){this.hls.on(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this)},S.unregisterListeners=function(){this.hls.off(w.Events.MEDIA_ATTACHING,this.onMediaAttaching)},S.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},S.onMediaAttaching=function(b,m){var g=this.hls.config;if(g.capLevelOnFPSDrop){var E=m.media instanceof self.HTMLVideoElement?m.media:null;this.media=E,E&&typeof E.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),g.fpsDroppedMonitoringPeriod)}},S.checkFPS=function(b,m,g){var E=performance.now();if(m){if(this.lastTime){var y=E-this.lastTime,T=g-this.lastDroppedFrames,l=m-this.lastDecodedFrames,r=1e3*T/y,n=this.hls;if(n.trigger(w.Events.FPS_DROP,{currentDropped:T,currentDecoded:l,totalDroppedFrames:g}),r>0&&T>n.config.fpsDroppedMonitoringThreshold*l){var d=n.currentLevel;_.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(n.autoLevelCapping===-1||n.autoLevelCapping>=d)&&(d=d-1,n.trigger(w.Events.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:n.currentLevel}),n.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=E,this.lastDroppedFrames=g,this.lastDecodedFrames=m}},S.checkFPSInterval=function(){var b=this.media;if(b)if(this.isVideoPlaybackQualityAvailable){var m=b.getVideoPlaybackQuality();this.checkFPS(b,m.totalVideoFrames,m.droppedVideoFrames)}else this.checkFPS(b,b.webkitDecodedFrameCount,b.webkitDroppedFrameCount)},k}();const p=D},"./src/controller/fragment-finders.ts":(W,M,x)=>{x.r(M),x.d(M,{findFragWithCC:()=>v,findFragmentByPDT:()=>D,findFragmentByPTS:()=>p,fragmentWithinToleranceTest:()=>k,pdtWithinToleranceTest:()=>S});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/binary-search.ts");function D(b,m,g){if(m===null||!Array.isArray(b)||!b.length||!(0,w.isFiniteNumber)(m))return null;var E=b[0].programDateTime;if(m<(E||0))return null;var y=b[b.length-1].endProgramDateTime;if(m>=(y||0))return null;g=g||0;for(var T=0;T<b.length;++T){var l=b[T];if(S(m,g,l))return l}return null}function p(b,m,g,E){g===void 0&&(g=0),E===void 0&&(E=0);var y=null;if(b?y=m[b.sn-m[0].sn+1]||null:g===0&&m[0].start===0&&(y=m[0]),y&&k(g,E,y)===0)return y;var T=_.default.search(m,k.bind(null,g,E));return T||y}function k(b,m,g){b===void 0&&(b=0),m===void 0&&(m=0);var E=Math.min(m,g.duration+(g.deltaPTS?g.deltaPTS:0));return g.start+g.duration-E<=b?1:g.start-E>b&&g.start?-1:0}function S(b,m,g){var E=Math.min(m,g.duration+(g.deltaPTS?g.deltaPTS:0))*1e3,y=g.endProgramDateTime||0;return y-E>b}function v(b,m){return _.default.search(b,function(g){return g.cc<m?1:g.cc>m?-1:0})}},"./src/controller/fragment-tracker.ts":(W,M,x)=>{x.r(M),x.d(M,{FragmentState:()=>D,FragmentTracker:()=>p});var w=x("./src/events.ts"),_=x("./src/types/loader.ts"),D;(function(v){v.NOT_LOADED="NOT_LOADED",v.APPENDING="APPENDING",v.PARTIAL="PARTIAL",v.OK="OK"})(D||(D={}));var p=function(){function v(m){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=m,this._registerListeners()}var b=v.prototype;return b._registerListeners=function(){var g=this.hls;g.on(w.Events.BUFFER_APPENDED,this.onBufferAppended,this),g.on(w.Events.FRAG_BUFFERED,this.onFragBuffered,this),g.on(w.Events.FRAG_LOADED,this.onFragLoaded,this)},b._unregisterListeners=function(){var g=this.hls;g.off(w.Events.BUFFER_APPENDED,this.onBufferAppended,this),g.off(w.Events.FRAG_BUFFERED,this.onFragBuffered,this),g.off(w.Events.FRAG_LOADED,this.onFragLoaded,this)},b.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},b.getAppendedFrag=function(g,E){if(E===_.PlaylistLevelType.MAIN){var y=this.activeFragment,T=this.activeParts;if(!y)return null;if(T)for(var l=T.length;l--;){var r=T[l],n=r?r.end:y.appendedPTS;if(r.start<=g&&n!==void 0&&g<=n)return l>9&&(this.activeParts=T.slice(l-9)),r}else if(y.start<=g&&y.appendedPTS!==void 0&&g<=y.appendedPTS)return y}return this.getBufferedFrag(g,E)},b.getBufferedFrag=function(g,E){for(var y=this.fragments,T=Object.keys(y),l=T.length;l--;){var r=y[T[l]];if((r==null?void 0:r.body.type)===E&&r.buffered){var n=r.body;if(n.start<=g&&g<=n.end)return n}}return null},b.detectEvictedFragments=function(g,E,y){var T=this;Object.keys(this.fragments).forEach(function(l){var r=T.fragments[l];if(!!r){if(!r.buffered){r.body.type===y&&T.removeFragment(r.body);return}var n=r.range[g];!n||n.time.some(function(d){var h=!T.isTimeBuffered(d.startPTS,d.endPTS,E);return h&&T.removeFragment(r.body),h})}})},b.detectPartialFragments=function(g){var E=this,y=this.timeRanges,T=g.frag,l=g.part;if(!(!y||T.sn==="initSegment")){var r=S(T),n=this.fragments[r];!n||(Object.keys(y).forEach(function(d){var h=T.elementaryStreams[d];if(!!h){var a=y[d],t=l!==null||h.partial===!0;n.range[d]=E.getBufferedTimes(T,l,t,a)}}),n.loaded=null,Object.keys(n.range).length?n.buffered=!0:this.removeFragment(n.body))}},b.fragBuffered=function(g){var E=S(g),y=this.fragments[E];y&&(y.loaded=null,y.buffered=!0)},b.getBufferedTimes=function(g,E,y,T){for(var l={time:[],partial:y},r=E?E.start:g.start,n=E?E.end:g.end,d=g.minEndPTS||n,h=g.maxStartPTS||r,a=0;a<T.length;a++){var t=T.start(a)-this.bufferPadding,e=T.end(a)+this.bufferPadding;if(h>=t&&d<=e){l.time.push({startPTS:Math.max(r,T.start(a)),endPTS:Math.min(n,T.end(a))});break}else if(r<e&&n>t)l.partial=!0,l.time.push({startPTS:Math.max(r,T.start(a)),endPTS:Math.min(n,T.end(a))});else if(n<=t)break}return l},b.getPartialFragment=function(g){var E=null,y,T,l,r=0,n=this.bufferPadding,d=this.fragments;return Object.keys(d).forEach(function(h){var a=d[h];!a||k(a)&&(T=a.body.start-n,l=a.body.end+n,g>=T&&g<=l&&(y=Math.min(g-T,l-g),r<=y&&(E=a.body,r=y)))}),E},b.getState=function(g){var E=S(g),y=this.fragments[E];return y?y.buffered?k(y)?D.PARTIAL:D.OK:D.APPENDING:D.NOT_LOADED},b.isTimeBuffered=function(g,E,y){for(var T,l,r=0;r<y.length;r++){if(T=y.start(r)-this.bufferPadding,l=y.end(r)+this.bufferPadding,g>=T&&E<=l)return!0;if(E<=T)return!1}return!1},b.onFragLoaded=function(g,E){var y=E.frag,T=E.part;if(!(y.sn==="initSegment"||y.bitrateTest||T)){var l=S(y);this.fragments[l]={body:y,loaded:E,buffered:!1,range:Object.create(null)}}},b.onBufferAppended=function(g,E){var y=this,T=E.frag,l=E.part,r=E.timeRanges;if(T.type===_.PlaylistLevelType.MAIN)if(this.activeFragment=T,l){var n=this.activeParts;n||(this.activeParts=n=[]),n.push(l)}else this.activeParts=null;this.timeRanges=r,Object.keys(r).forEach(function(d){var h=r[d];if(y.detectEvictedFragments(d,h),!l)for(var a=0;a<h.length;a++)T.appendedPTS=Math.max(h.end(a),T.appendedPTS||0)})},b.onFragBuffered=function(g,E){this.detectPartialFragments(E)},b.hasFragment=function(g){var E=S(g);return!!this.fragments[E]},b.removeFragmentsInRange=function(g,E,y){var T=this;Object.keys(this.fragments).forEach(function(l){var r=T.fragments[l];if(!!r&&r.buffered){var n=r.body;n.type===y&&n.start<E&&n.end>g&&T.removeFragment(n)}})},b.removeFragment=function(g){var E=S(g);g.stats.loaded=0,g.clearElementaryStreamInfo(),delete this.fragments[E]},b.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},v}();function k(v){var b,m;return v.buffered&&(((b=v.range.video)===null||b===void 0?void 0:b.partial)||((m=v.range.audio)===null||m===void 0?void 0:m.partial))}function S(v){return v.type+"_"+v.level+"_"+v.urlId+"_"+v.sn}},"./src/controller/gap-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{MAX_START_GAP_JUMP:()=>S,SKIP_BUFFER_HOLE_STEP_SECONDS:()=>v,SKIP_BUFFER_RANGE_START:()=>b,STALL_MINIMUM_DURATION_MS:()=>k,default:()=>m});var w=x("./src/utils/buffer-helper.ts"),_=x("./src/errors.ts"),D=x("./src/events.ts"),p=x("./src/utils/logger.ts"),k=250,S=2,v=.1,b=.05,m=function(){function g(y,T,l,r){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=y,this.media=T,this.fragmentTracker=l,this.hls=r}var E=g.prototype;return E.destroy=function(){this.media=null,this.hls=this.fragmentTracker=null},E.poll=function(T,l){var r=this.config,n=this.media,d=this.stalled;if(n!==null){var h=n.currentTime,a=n.seeking,t=this.seeking&&!a,e=!this.seeking&&a;if(this.seeking=a,h!==T){if(this.moved=!0,d!==null){if(this.stallReported){var o=self.performance.now()-d;p.logger.warn("playback not stuck anymore @"+h+", after "+Math.round(o)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if((e||t)&&(this.stalled=null),!(n.paused&&!a||n.ended||n.playbackRate===0||!w.BufferHelper.getBuffered(n).length)){var s=w.BufferHelper.bufferInfo(n,h,0),A=s.len>0,u=s.nextStart||0;if(!(!A&&!u)){if(a){var f=s.len>S,c=!u||l&&l.start<=h||u-h>S&&!this.fragmentTracker.getPartialFragment(h);if(f||c)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var i,C=Math.max(u,s.start||0)-h,L=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,R=L==null||(i=L.details)===null||i===void 0?void 0:i.live,B=R?L.details.targetduration*2:S;if(C>0&&C<=B){this._trySkipBufferHole(null);return}}var O=self.performance.now();if(d===null){this.stalled=O;return}var K=O-d;if(!(!a&&K>=k&&(this._reportStall(s),!this.media))){var G=w.BufferHelper.bufferInfo(n,h,r.maxBufferHole);this._tryFixBufferStall(G,K)}}}}},E._tryFixBufferStall=function(T,l){var r=this.config,n=this.fragmentTracker,d=this.media;if(d!==null){var h=d.currentTime,a=n.getPartialFragment(h);if(a){var t=this._trySkipBufferHole(a);if(t||!this.media)return}T.len>r.maxBufferHole&&l>r.highBufferWatchdogPeriod*1e3&&(p.logger.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}},E._reportStall=function(T){var l=this.hls,r=this.media,n=this.stallReported;!n&&r&&(this.stallReported=!0,p.logger.warn("Playback stalling at @"+r.currentTime+" due to low buffer ("+JSON.stringify(T)+")"),l.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:T.len}))},E._trySkipBufferHole=function(T){var l=this.config,r=this.hls,n=this.media;if(n===null)return 0;for(var d=n.currentTime,h=0,a=w.BufferHelper.getBuffered(n),t=0;t<a.length;t++){var e=a.start(t);if(d+l.maxBufferHole>=h&&d<e){var o=Math.max(e+b,n.currentTime+v);return p.logger.warn("skipping hole, adjusting currentTime from "+d+" to "+o),this.moved=!0,this.stalled=null,n.currentTime=o,T&&r.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+d+" to "+o,frag:T}),o}h=a.end(t)}return 0},E._tryNudgeBuffer=function(){var T=this.config,l=this.hls,r=this.media,n=this.nudgeRetry;if(r!==null){var d=r.currentTime;if(this.nudgeRetry++,n<T.nudgeMaxRetry){var h=d+(n+1)*T.nudgeOffset;p.logger.warn("Nudging 'currentTime' from "+d+" to "+h),r.currentTime=h,l.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else p.logger.error("Playhead still not moving while enough data buffered @"+d+" after "+T.nudgeMaxRetry+" nudges"),l.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}},g}()},"./src/controller/id3-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>T});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/texttrack-utils.ts"),p=x("./src/demux/id3.ts"),k=x("./src/loader/date-range.ts"),S=x("./src/types/demuxer.ts"),v=.25;function b(){return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}var m=function(){var l=b();try{new l(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY}();function g(l,r){return l.getTime()/1e3-r}function E(l){return Uint8Array.from(l.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}var y=function(){function l(n){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=n,this._registerListeners()}var r=l.prototype;return r.destroy=function(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null},r._registerListeners=function(){var d=this.hls;d.on(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.on(_.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),d.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),d.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},r._unregisterListeners=function(){var d=this.hls;d.off(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.off(_.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),d.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),d.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},r.onMediaAttached=function(d,h){this.media=h.media},r.onMediaDetaching=function(){!this.id3Track||((0,D.clearCurrentCues)(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})},r.onManifestLoading=function(){this.dateRangeCuesAppended={}},r.createTrack=function(d){var h=this.getID3Track(d.textTracks);return h.mode="hidden",h},r.getID3Track=function(d){if(!!this.media){for(var h=0;h<d.length;h++){var a=d[h];if(a.kind==="metadata"&&a.label==="id3")return(0,D.sendAddTrackEvent)(a,this.media),a}return this.media.addTextTrack("metadata","id3")}},r.onFragParsingMetadata=function(d,h){if(!!this.media){var a=this.hls.config,t=a.enableEmsgMetadataCues,e=a.enableID3MetadataCues;if(!(!t&&!e)){h.frag;var o=h.samples;h.details,this.id3Track||(this.id3Track=this.createTrack(this.media));for(var s=b(),A=0;A<o.length;A++){var u=o[A].type;if(!(u===S.MetadataSchema.emsg&&!t||!e)){var f=p.getID3Frames(o[A].data);if(f){var c=o[A].pts,i=c+o[A].duration;i>m&&(i=m);var C=i-c;C<=0&&(i=c+v);for(var L=0;L<f.length;L++){var R=f[L];if(!p.isTimeStampFrame(R)){this.updateId3CueEnds(c);var B=new s(c,i,"");B.value=R,u&&(B.type=u),this.id3Track.addCue(B)}}}}}}}},r.updateId3CueEnds=function(d){var h,a=(h=this.id3Track)===null||h===void 0?void 0:h.cues;if(a)for(var t=a.length;t--;){var e=a[t];e.startTime<d&&e.endTime===m&&(e.endTime=d)}},r.onBufferFlushing=function(d,h){var a=h.startOffset,t=h.endOffset,e=h.type,o=this.id3Track,s=this.hls;if(!!s){var A=s.config,u=A.enableEmsgMetadataCues,f=A.enableID3MetadataCues;if(o&&(u||f)){var c;e==="audio"?c=function(C){return C.type===S.MetadataSchema.audioId3&&f}:e==="video"?c=function(C){return C.type===S.MetadataSchema.emsg&&u}:c=function(C){return C.type===S.MetadataSchema.audioId3&&f||C.type===S.MetadataSchema.emsg&&u},(0,D.removeCuesInRange)(o,a,t,c)}}},r.onLevelUpdated=function(d,h){var a=this,t=h.details;if(!(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)){var e=this.dateRangeCuesAppended,o=this.id3Track,s=t.dateRanges,A=Object.keys(s);if(o)for(var u=Object.keys(e).filter(function(O){return!A.includes(O)}),f=function(K){var G=u[K];Object.keys(e[G].cues).forEach(function(j){o.removeCue(e[G].cues[j])}),delete e[G]},c=u.length;c--;)f(c);var i=t.fragments[t.fragments.length-1];if(!(A.length===0||!(0,w.isFiniteNumber)(i==null?void 0:i.programDateTime))){this.id3Track||(this.id3Track=this.createTrack(this.media));for(var C=i.programDateTime/1e3-i.start,L=b(),R=function(K){var G=A[K],j=s[G],Y=e[G],V=(Y==null?void 0:Y.cues)||{},X=(Y==null?void 0:Y.durationKnown)||!1,Z=g(j.startDate,C),$=m,ee=j.endDate;if(ee)$=g(ee,C),X=!0;else if(j.endOnNext&&!X){var ae=A.reduce(function(ue,de){var ce=s[de];return ce.class===j.class&&ce.id!==de&&ce.startDate>j.startDate&&ue.push(ce),ue},[]).sort(function(ue,de){return ue.startDate.getTime()-de.startDate.getTime()})[0];ae&&($=g(ae.startDate,C),X=!0)}for(var ne=Object.keys(j.attr),oe=0;oe<ne.length;oe++){var se=ne[oe];if(!(se===k.DateRangeAttribute.ID||se===k.DateRangeAttribute.CLASS||se===k.DateRangeAttribute.START_DATE||se===k.DateRangeAttribute.DURATION||se===k.DateRangeAttribute.END_DATE||se===k.DateRangeAttribute.END_ON_NEXT)){var te=V[se];if(te)X&&!Y.durationKnown&&(te.endTime=$);else{var ie=j.attr[se];te=new L(Z,$,""),(se===k.DateRangeAttribute.SCTE35_OUT||se===k.DateRangeAttribute.SCTE35_IN)&&(ie=E(ie)),te.value={key:se,data:ie},te.type=S.MetadataSchema.dateRange,a.id3Track.addCue(te),V[se]=te}}}e[G]={cues:V,dateRange:j,durationKnown:X}},B=0;B<A.length;B++)R(B)}}},l}();const T=y},"./src/controller/latency-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/errors.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts");function p(v,b){for(var m=0;m<b.length;m++){var g=b[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,g.key,g)}}function k(v,b,m){return b&&p(v.prototype,b),m&&p(v,m),Object.defineProperty(v,"prototype",{writable:!1}),v}var S=function(){function v(m){var g=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return g.timeupdate()},this.hls=m,this.config=m.config,this.registerListeners()}var b=v.prototype;return b.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},b.registerListeners=function(){this.hls.on(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(_.Events.ERROR,this.onError,this)},b.unregisterListeners=function(){this.hls.off(_.Events.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(_.Events.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(_.Events.ERROR,this.onError)},b.onMediaAttached=function(g,E){this.media=E.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},b.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},b.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},b.onLevelUpdated=function(g,E){var y=E.details;this.levelDetails=y,y.advanced&&this.timeupdate(),!y.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},b.onError=function(g,E){E.details===w.ErrorDetails.BUFFER_STALLED_ERROR&&(this.stallCount++,D.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},b.timeupdate=function(){var g=this.media,E=this.levelDetails;if(!(!g||!E)){this.currentTime=g.currentTime;var y=this.computeLatency();if(y!==null){this._latency=y;var T=this.config,l=T.lowLatencyMode,r=T.maxLiveSyncPlaybackRate;if(!(!l||r===1)){var n=this.targetLatency;if(n!==null){var d=y-n,h=Math.min(this.maxLatency,n+E.targetduration),a=d<h;if(E.live&&a&&d>.05&&this.forwardBufferLength>1){var t=Math.min(2,Math.max(1,r)),e=Math.round(2/(1+Math.exp(-.75*d-this.edgeStalled))*20)/20;g.playbackRate=Math.min(t,Math.max(1,e))}else g.playbackRate!==1&&g.playbackRate!==0&&(g.playbackRate=1)}}}}},b.estimateLiveEdge=function(){var g=this.levelDetails;return g===null?null:g.edge+g.age},b.computeLatency=function(){var g=this.estimateLiveEdge();return g===null?null:g-this.currentTime},k(v,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var g=this.config,E=this.levelDetails;return g.liveMaxLatencyDuration!==void 0?g.liveMaxLatencyDuration:E?g.liveMaxLatencyDurationCount*E.targetduration:0}},{key:"targetLatency",get:function(){var g=this.levelDetails;if(g===null)return null;var E=g.holdBack,y=g.partHoldBack,T=g.targetduration,l=this.config,r=l.liveSyncDuration,n=l.liveSyncDurationCount,d=l.lowLatencyMode,h=this.hls.userConfig,a=d&&y||E;(h.liveSyncDuration||h.liveSyncDurationCount||a===0)&&(a=r!==void 0?r:n*T);var t=T,e=1;return a+Math.min(this.stallCount*e,t)}},{key:"liveSyncPosition",get:function(){var g=this.estimateLiveEdge(),E=this.targetLatency,y=this.levelDetails;if(g===null||E===null||y===null)return null;var T=y.edge,l=g-E-this.edgeStalled,r=T-y.totalduration,n=T-(this.config.lowLatencyMode&&y.partTarget||y.targetduration);return Math.min(Math.max(r,l),n)}},{key:"drift",get:function(){var g=this.levelDetails;return g===null?1:g.drift}},{key:"edgeStalled",get:function(){var g=this.levelDetails;if(g===null)return 0;var E=(this.config.lowLatencyMode&&g.partTarget||g.targetduration)*3;return Math.max(g.age-E,0)}},{key:"forwardBufferLength",get:function(){var g=this.media,E=this.levelDetails;if(!g||!E)return 0;var y=g.buffered.length;return(y?g.buffered.end(y-1):E.edge)-this.currentTime}}]),v}()},"./src/controller/level-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>l});var w=x("./src/types/level.ts"),_=x("./src/events.ts"),D=x("./src/errors.ts"),p=x("./src/utils/codecs.ts"),k=x("./src/controller/level-helper.ts"),S=x("./src/controller/base-playlist-controller.ts"),v=x("./src/types/loader.ts");function b(){return b=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var d=arguments[n];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},b.apply(this,arguments)}function m(r,n){for(var d=0;d<n.length;d++){var h=n[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(r,h.key,h)}}function g(r,n,d){return n&&m(r.prototype,n),d&&m(r,d),Object.defineProperty(r,"prototype",{writable:!1}),r}function E(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,y(r,n)}function y(r,n){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,a){return h.__proto__=a,h},y(r,n)}var T=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),l=function(r){E(n,r);function n(h){var a;return a=r.call(this,h,"[level-controller]")||this,a._levels=[],a._firstLevel=-1,a._startLevel=void 0,a.currentLevelIndex=-1,a.manualLevelIndex=-1,a.onParsedComplete=void 0,a._registerListeners(),a}var d=n.prototype;return d._registerListeners=function(){var a=this.hls;a.on(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),a.on(_.Events.LEVEL_LOADED,this.onLevelLoaded,this),a.on(_.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),a.on(_.Events.FRAG_LOADED,this.onFragLoaded,this),a.on(_.Events.ERROR,this.onError,this)},d._unregisterListeners=function(){var a=this.hls;a.off(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),a.off(_.Events.LEVEL_LOADED,this.onLevelLoaded,this),a.off(_.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),a.off(_.Events.FRAG_LOADED,this.onFragLoaded,this),a.off(_.Events.ERROR,this.onError,this)},d.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,r.prototype.destroy.call(this)},d.startLoad=function(){var a=this._levels;a.forEach(function(t){t.loadError=0}),r.prototype.startLoad.call(this)},d.onManifestLoaded=function(a,t){var e=[],o=[],s=[],A,u={},f,c=!1,i=!1,C=!1;if(t.levels.forEach(function(O){var K=O.attrs;c=c||!!(O.width&&O.height),i=i||!!O.videoCodec,C=C||!!O.audioCodec,T&&O.audioCodec&&O.audioCodec.indexOf("mp4a.40.34")!==-1&&(O.audioCodec=void 0);var G=O.bitrate+"-"+O.attrs.RESOLUTION+"-"+O.attrs.CODECS;f=u[G],f?f.url.push(O.url):(f=new w.Level(O),u[G]=f,e.push(f)),K&&(K.AUDIO&&(0,k.addGroupId)(f,"audio",K.AUDIO),K.SUBTITLES&&(0,k.addGroupId)(f,"text",K.SUBTITLES))}),(c||i)&&C&&(e=e.filter(function(O){var K=O.videoCodec,G=O.width,j=O.height;return!!K||!!(G&&j)})),e=e.filter(function(O){var K=O.audioCodec,G=O.videoCodec;return(!K||(0,p.isCodecSupportedInMp4)(K,"audio"))&&(!G||(0,p.isCodecSupportedInMp4)(G,"video"))}),t.audioTracks&&(o=t.audioTracks.filter(function(O){return!O.audioCodec||(0,p.isCodecSupportedInMp4)(O.audioCodec,"audio")}),(0,k.assignTrackIdsByGroup)(o)),t.subtitles&&(s=t.subtitles,(0,k.assignTrackIdsByGroup)(s)),e.length>0){A=e[0].bitrate,e.sort(function(O,K){return O.bitrate-K.bitrate}),this._levels=e;for(var L=0;L<e.length;L++)if(e[L].bitrate===A){this._firstLevel=L,this.log("manifest loaded, "+e.length+" level(s) found, first bitrate: "+A);break}var R=C&&!i,B={levels:e,audioTracks:o,subtitleTracks:s,firstLevel:this._firstLevel,stats:t.stats,audio:C,video:i,altAudio:!R&&o.some(function(O){return!!O.url})};this.hls.trigger(_.Events.MANIFEST_PARSED,B),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.MEDIA_ERROR,details:D.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,reason:"no level with compatible codecs found in manifest"})},d.onError=function(a,t){var e;if(r.prototype.onError.call(this,a,t),!t.fatal){var o=t.context,s=this._levels[this.currentLevelIndex];if(o&&(o.type===v.PlaylistContextType.AUDIO_TRACK&&s.audioGroupIds&&o.groupId===s.audioGroupIds[s.urlId]||o.type===v.PlaylistContextType.SUBTITLE_TRACK&&s.textGroupIds&&o.groupId===s.textGroupIds[s.urlId])){this.redundantFailover(this.currentLevelIndex);return}var A=!1,u=!0,f;switch(t.details){case D.ErrorDetails.FRAG_LOAD_ERROR:case D.ErrorDetails.FRAG_LOAD_TIMEOUT:case D.ErrorDetails.KEY_LOAD_ERROR:case D.ErrorDetails.KEY_LOAD_TIMEOUT:if(t.frag){var c=t.frag.type===v.PlaylistLevelType.MAIN?t.frag.level:this.currentLevelIndex,i=this._levels[c];i?(i.fragmentError++,i.fragmentError>this.hls.config.fragLoadingMaxRetry&&(f=c)):f=c}break;case D.ErrorDetails.LEVEL_LOAD_ERROR:case D.ErrorDetails.LEVEL_LOAD_TIMEOUT:o&&(o.deliveryDirectives&&(u=!1),f=o.level),A=!0;break;case D.ErrorDetails.REMUX_ALLOC_ERROR:f=(e=t.level)!=null?e:this.currentLevelIndex,A=!0;break}f!==void 0&&this.recoverLevel(t,f,A,u)}},d.recoverLevel=function(a,t,e,o){var s=a.details,A=this._levels[t];if(A.loadError++,e){var u=this.retryLoadingOrFail(a);if(u)a.levelRetry=!0;else{this.currentLevelIndex=-1;return}}if(o){var f=A.url.length;if(f>1&&A.loadError<f)a.levelRetry=!0,this.redundantFailover(t);else if(this.manualLevelIndex===-1){for(var c=-1,i=this._levels,C=i.length;C--;){var L=(C+this.currentLevelIndex)%i.length;if(L!==this.currentLevelIndex&&i[L].loadError===0){c=L;break}}c>-1&&this.currentLevelIndex!==c&&(this.warn(s+": switch to "+c),a.levelRetry=!0,this.hls.nextAutoLevel=c)}}},d.redundantFailover=function(a){var t=this._levels[a],e=t.url.length;if(e>1){var o=(t.urlId+1)%e;this.warn("Switching to redundant URL-id "+o),this._levels.forEach(function(s){s.urlId=o}),this.level=a}},d.onFragLoaded=function(a,t){var e=t.frag;if(e!==void 0&&e.type===v.PlaylistLevelType.MAIN){var o=this._levels[e.level];o!==void 0&&(o.fragmentError=0,o.loadError=0)}},d.onLevelLoaded=function(a,t){var e,o=t.level,s=t.details,A=this._levels[o];if(!A){var u;this.warn("Invalid level index "+o),(u=t.deliveryDirectives)!==null&&u!==void 0&&u.skip&&(s.deltaUpdateFailed=!0);return}o===this.currentLevelIndex?(A.fragmentError===0&&(A.loadError=0,this.retryCount=0),this.playlistLoaded(o,t,A.details)):(e=t.deliveryDirectives)!==null&&e!==void 0&&e.skip&&(s.deltaUpdateFailed=!0)},d.onAudioTrackSwitched=function(a,t){var e=this.hls.levels[this.currentLevelIndex];if(!!e&&e.audioGroupIds){for(var o=-1,s=this.hls.audioTracks[t.id].groupId,A=0;A<e.audioGroupIds.length;A++)if(e.audioGroupIds[A]===s){o=A;break}o!==e.urlId&&(e.urlId=o,this.startLoad())}},d.loadPlaylist=function(a){var t=this.currentLevelIndex,e=this._levels[t];if(this.canLoad&&e&&e.url.length>0){var o=e.urlId,s=e.url[o];if(a)try{s=a.addDirectives(s)}catch(A){this.warn("Could not construct new URL with HLS Delivery Directives: "+A)}this.log("Attempt loading level index "+t+(a?" at sn "+a.msn+" part "+a.part:"")+" with URL-id "+o+" "+s),this.clearTimer(),this.hls.trigger(_.Events.LEVEL_LOADING,{url:s,level:t,id:o,deliveryDirectives:a||null})}},d.removeLevel=function(a,t){var e=function(A,u){return u!==t},o=this._levels.filter(function(s,A){return A!==a?!0:s.url.length>1&&t!==void 0?(s.url=s.url.filter(e),s.audioGroupIds&&(s.audioGroupIds=s.audioGroupIds.filter(e)),s.textGroupIds&&(s.textGroupIds=s.textGroupIds.filter(e)),s.urlId=0,!0):!1}).map(function(s,A){var u=s.details;return u!=null&&u.fragments&&u.fragments.forEach(function(f){f.level=A}),s});this._levels=o,this.hls.trigger(_.Events.LEVELS_UPDATED,{levels:o})},g(n,[{key:"levels",get:function(){return this._levels.length===0?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(a){var t,e=this._levels;if(e.length!==0&&!(this.currentLevelIndex===a&&(t=e[a])!==null&&t!==void 0&&t.details)){if(a<0||a>=e.length){var o=a<0;if(this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.OTHER_ERROR,details:D.ErrorDetails.LEVEL_SWITCH_ERROR,level:a,fatal:o,reason:"invalid level idx"}),o)return;a=Math.min(a,e.length-1)}this.clearTimer();var s=this.currentLevelIndex,A=e[s],u=e[a];this.log("switching to level "+a+" from "+s),this.currentLevelIndex=a;var f=b({},u,{level:a,maxBitrate:u.maxBitrate,uri:u.uri,urlId:u.urlId});delete f._urlId,this.hls.trigger(_.Events.LEVEL_SWITCHING,f);var c=u.details;if(!c||c.live){var i=this.switchParams(u.uri,A==null?void 0:A.details);this.loadPlaylist(i)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(a){this.manualLevelIndex=a,this._startLevel===void 0&&(this._startLevel=a),a!==-1&&(this.level=a)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(a){this._firstLevel=a}},{key:"startLevel",get:function(){if(this._startLevel===void 0){var a=this.hls.config.startLevel;return a!==void 0?a:this._firstLevel}else return this._startLevel},set:function(a){this._startLevel=a}},{key:"nextLoadLevel",get:function(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(a){this.level=a,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=a)}}]),n}(S.default)},"./src/controller/level-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{addGroupId:()=>k,addSliding:()=>r,adjustSliding:()=>l,assignTrackIdsByGroup:()=>S,computeReloadInterval:()=>n,getFragmentWithSN:()=>d,getPartWith:()=>h,mapFragmentIntersection:()=>T,mapPartIntersection:()=>y,mergeDetails:()=>g,updateFragPTSDTS:()=>m,updatePTS:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/logger.ts"),D=x("./src/loader/date-range.ts");function p(){return p=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},p.apply(this,arguments)}function k(a,t,e){switch(t){case"audio":a.audioGroupIds||(a.audioGroupIds=[]),a.audioGroupIds.push(e);break;case"text":a.textGroupIds||(a.textGroupIds=[]),a.textGroupIds.push(e);break}}function S(a){var t={};a.forEach(function(e){var o=e.groupId||"";e.id=t[o]=t[o]||0,t[o]++})}function v(a,t,e){var o=a[t],s=a[e];b(o,s)}function b(a,t){var e=t.startPTS;if((0,w.isFiniteNumber)(e)){var o=0,s;t.sn>a.sn?(o=e-a.start,s=a):(o=a.start-e,s=t),s.duration!==o&&(s.duration=o)}else if(t.sn>a.sn){var A=a.cc===t.cc;A&&a.minEndPTS?t.start=a.start+(a.minEndPTS-a.start):t.start=a.start+a.duration}else t.start=Math.max(a.start-t.duration,0)}function m(a,t,e,o,s,A){var u=o-e;u<=0&&(_.logger.warn("Fragment should have a positive duration",t),o=e+t.duration,A=s+t.duration);var f=e,c=o,i=t.startPTS,C=t.endPTS;if((0,w.isFiniteNumber)(i)){var L=Math.abs(i-e);(0,w.isFiniteNumber)(t.deltaPTS)?t.deltaPTS=Math.max(L,t.deltaPTS):t.deltaPTS=L,f=Math.max(e,i),e=Math.min(e,i),s=Math.min(s,t.startDTS),c=Math.min(o,C),o=Math.max(o,C),A=Math.max(A,t.endDTS)}t.duration=o-e;var R=e-t.start;t.appendedPTS=o,t.start=t.startPTS=e,t.maxStartPTS=f,t.startDTS=s,t.endPTS=o,t.minEndPTS=c,t.endDTS=A;var B=t.sn;if(!a||B<a.startSN||B>a.endSN)return 0;var O,K=B-a.startSN,G=a.fragments;for(G[K]=t,O=K;O>0;O--)b(G[O],G[O-1]);for(O=K;O<G.length-1;O++)b(G[O],G[O+1]);return a.fragmentHint&&b(G[G.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,R}function g(a,t){for(var e=null,o=a.fragments,s=o.length-1;s>=0;s--){var A=o[s].initSegment;if(A){e=A;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;var u=0,f;if(T(a,t,function(O,K){O.relurl&&(u=O.cc-K.cc),(0,w.isFiniteNumber)(O.startPTS)&&(0,w.isFiniteNumber)(O.endPTS)&&(K.start=K.startPTS=O.startPTS,K.startDTS=O.startDTS,K.appendedPTS=O.appendedPTS,K.maxStartPTS=O.maxStartPTS,K.endPTS=O.endPTS,K.endDTS=O.endDTS,K.minEndPTS=O.minEndPTS,K.duration=O.endPTS-O.startPTS,K.duration&&(f=K),t.PTSKnown=t.alignedSliding=!0),K.elementaryStreams=O.elementaryStreams,K.loader=O.loader,K.stats=O.stats,K.urlId=O.urlId,O.initSegment&&(K.initSegment=O.initSegment,e=O.initSegment)}),e){var c=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments;c.forEach(function(O){var K;(!O.initSegment||O.initSegment.relurl===((K=e)===null||K===void 0?void 0:K.relurl))&&(O.initSegment=e)})}if(t.skippedSegments)if(t.deltaUpdateFailed=t.fragments.some(function(O){return!O}),t.deltaUpdateFailed){_.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var i=t.skippedSegments;i--;)t.fragments.shift();t.startSN=t.fragments[0].sn,t.startCC=t.fragments[0].cc}else t.canSkipDateRanges&&(t.dateRanges=E(a.dateRanges,t.dateRanges,t.recentlyRemovedDateranges));var C=t.fragments;if(u){_.logger.warn("discontinuity sliding from playlist, take drift into account");for(var L=0;L<C.length;L++)C[L].cc+=u}t.skippedSegments&&(t.startCC=t.fragments[0].cc),y(a.partList,t.partList,function(O,K){K.elementaryStreams=O.elementaryStreams,K.stats=O.stats}),f?m(t,f,f.startPTS,f.endPTS,f.startDTS,f.endDTS):l(a,t),C.length&&(t.totalduration=t.edge-C[0].start),t.driftStartTime=a.driftStartTime,t.driftStart=a.driftStart;var R=t.advancedDateTime;if(t.advanced&&R){var B=t.edge;t.driftStart||(t.driftStartTime=R,t.driftStart=B),t.driftEndTime=R,t.driftEnd=B}else t.driftEndTime=a.driftEndTime,t.driftEnd=a.driftEnd,t.advancedDateTime=a.advancedDateTime}function E(a,t,e){var o=p({},a);return e&&e.forEach(function(s){delete o[s]}),Object.keys(t).forEach(function(s){var A=new D.DateRange(t[s].attr,o[s]);A.isValid?o[s]=A:_.logger.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "'+JSON.stringify(t[s].attr)+'"')}),o}function y(a,t,e){if(a&&t)for(var o=0,s=0,A=a.length;s<=A;s++){var u=a[s],f=t[s+o];u&&f&&u.index===f.index&&u.fragment.sn===f.fragment.sn?e(u,f):o--}}function T(a,t,e){for(var o=t.skippedSegments,s=Math.max(a.startSN,t.startSN)-t.startSN,A=(a.fragmentHint?1:0)+(o?t.endSN:Math.min(a.endSN,t.endSN))-t.startSN,u=t.startSN-a.startSN,f=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,c=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments,i=s;i<=A;i++){var C=c[u+i],L=f[i];o&&!L&&i<o&&(L=t.fragments[i]=C),C&&L&&e(C,L)}}function l(a,t){var e=t.startSN+t.skippedSegments-a.startSN,o=a.fragments;e<0||e>=o.length||r(t,o[e].start)}function r(a,t){if(t){for(var e=a.fragments,o=a.skippedSegments;o<e.length;o++)e[o].start+=t;a.fragmentHint&&(a.fragmentHint.start+=t)}}function n(a,t){var e=1e3*a.levelTargetDuration,o=e/2,s=a.age,A=s>0&&s<e*3,u=t.loading.end-t.loading.start,f,c=a.availabilityDelay;if(a.updated===!1)if(A){var i=333*a.misses;f=Math.max(Math.min(o,u*2),i),a.availabilityDelay=(a.availabilityDelay||0)+f}else f=o;else A?(c=Math.min(c||e/2,s),a.availabilityDelay=c,f=c+e-s):f=e-u;return Math.round(f)}function d(a,t,e){if(!a||!a.details)return null;var o=a.details,s=o.fragments[t-o.startSN];return s||(s=o.fragmentHint,s&&s.sn===t)?s:t<o.startSN&&e&&e.sn===t?e:null}function h(a,t,e){if(!a||!a.details)return null;var o=a.details.partList;if(o)for(var s=o.length;s--;){var A=o[s];if(A.index===e&&A.fragment.sn===t)return A}return null}},"./src/controller/stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>h});var w=x("./src/polyfills/number.ts"),_=x("./src/controller/base-stream-controller.ts"),D=x("./src/is-supported.ts"),p=x("./src/events.ts"),k=x("./src/utils/buffer-helper.ts"),S=x("./src/controller/fragment-tracker.ts"),v=x("./src/types/loader.ts"),b=x("./src/loader/fragment.ts"),m=x("./src/demux/transmuxer-interface.ts"),g=x("./src/types/transmuxer.ts"),E=x("./src/controller/gap-controller.ts"),y=x("./src/errors.ts");function T(a,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}function l(a,t,e){return t&&T(a.prototype,t),e&&T(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function r(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,n(a,t)}function n(a,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},n(a,t)}var d=100,h=function(a){r(t,a);function t(o,s){var A;return A=a.call(this,o,s,"[stream-controller]")||this,A.audioCodecSwap=!1,A.gapController=null,A.level=-1,A._forceStartLoad=!1,A.altAudio=!1,A.audioOnly=!1,A.fragPlaying=null,A.onvplaying=null,A.onvseeked=null,A.fragLastKbps=0,A.couldBacktrack=!1,A.backtrackFragment=null,A.audioCodecSwitch=!1,A.videoBuffer=null,A._registerListeners(),A}var e=t.prototype;return e._registerListeners=function(){var s=this.hls;s.on(p.Events.MEDIA_ATTACHED,this.onMediaAttached,this),s.on(p.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.on(p.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.on(p.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.on(p.Events.LEVEL_LOADING,this.onLevelLoading,this),s.on(p.Events.LEVEL_LOADED,this.onLevelLoaded,this),s.on(p.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),s.on(p.Events.ERROR,this.onError,this),s.on(p.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),s.on(p.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),s.on(p.Events.BUFFER_CREATED,this.onBufferCreated,this),s.on(p.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),s.on(p.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),s.on(p.Events.FRAG_BUFFERED,this.onFragBuffered,this)},e._unregisterListeners=function(){var s=this.hls;s.off(p.Events.MEDIA_ATTACHED,this.onMediaAttached,this),s.off(p.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.off(p.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.off(p.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.off(p.Events.LEVEL_LOADED,this.onLevelLoaded,this),s.off(p.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),s.off(p.Events.ERROR,this.onError,this),s.off(p.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),s.off(p.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),s.off(p.Events.BUFFER_CREATED,this.onBufferCreated,this),s.off(p.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),s.off(p.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),s.off(p.Events.FRAG_BUFFERED,this.onFragBuffered,this)},e.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},e.startLoad=function(s){if(this.levels){var A=this.lastCurrentTime,u=this.hls;if(this.stopLoad(),this.setInterval(d),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var f=u.startLevel;f===-1&&(u.config.testBandwidth&&this.levels.length>1?(f=0,this.bitrateTest=!0):f=u.nextAutoLevel),this.level=u.nextLoadLevel=f,this.loadedmetadata=!1}A>0&&s===-1&&(this.log("Override startPosition with lastCurrentTime @"+A.toFixed(3)),s=A),this.state=_.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=s,this.tick()}else this._forceStartLoad=!0,this.state=_.State.STOPPED},e.stopLoad=function(){this._forceStartLoad=!1,a.prototype.stopLoad.call(this)},e.doTick=function(){switch(this.state){case _.State.IDLE:this.doTickIdle();break;case _.State.WAITING_LEVEL:{var s,A=this.levels,u=this.level,f=A==null||(s=A[u])===null||s===void 0?void 0:s.details;if(f&&(!f.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(f))break;this.state=_.State.IDLE;break}break}case _.State.FRAG_LOADING_WAITING_RETRY:{var c,i=self.performance.now(),C=this.retryDate;(!C||i>=C||(c=this.media)!==null&&c!==void 0&&c.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.level),this.state=_.State.IDLE)}break}this.onTickEnd()},e.onTickEnd=function(){a.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},e.doTickIdle=function(){var s,A,u=this.hls,f=this.levelLastLoaded,c=this.levels,i=this.media,C=u.config,L=u.nextLoadLevel;if(!(f===null||!i&&(this.startFragRequested||!C.startFragPrefetch))&&!(this.altAudio&&this.audioOnly)&&!(!c||!c[L])){var R=c[L];this.level=u.nextLoadLevel=L;var B=R.details;if(!B||this.state===_.State.WAITING_LEVEL||B.live&&this.levelLastLoaded!==L){this.state=_.State.WAITING_LEVEL;return}var O=this.getMainFwdBufferInfo();if(O!==null){var K=O.len,G=this.getMaxBufferLength(R.maxBitrate);if(!(K>=G)){if(this._streamEnded(O,B)){var j={};this.altAudio&&(j.type="video"),this.hls.trigger(p.Events.BUFFER_EOS,j),this.state=_.State.ENDED;return}this.backtrackFragment&&this.backtrackFragment.start>O.end&&(this.backtrackFragment=null);var Y=this.backtrackFragment?this.backtrackFragment.start:O.end,V=this.getNextFragment(Y,B);if(this.couldBacktrack&&!this.fragPrevious&&V&&V.sn!=="initSegment"&&this.fragmentTracker.getState(V)!==S.FragmentState.OK){var X,Z=((X=this.backtrackFragment)!=null?X:V).sn,$=Z-B.startSN,ee=B.fragments[$-1];ee&&V.cc===ee.cc&&(V=ee,this.fragmentTracker.removeFragment(ee))}else this.backtrackFragment&&O.len&&(this.backtrackFragment=null);if(V&&this.fragmentTracker.getState(V)===S.FragmentState.OK&&this.nextLoadPosition>Y){var ae=this.audioOnly&&!this.altAudio?b.ElementaryStreamTypes.AUDIO:b.ElementaryStreamTypes.VIDEO;i&&this.afterBufferFlushed(i,ae,v.PlaylistLevelType.MAIN),V=this.getNextFragment(this.nextLoadPosition,B)}!V||(V.initSegment&&!V.initSegment.data&&!this.bitrateTest&&(V=V.initSegment),((s=V.decryptdata)===null||s===void 0?void 0:s.keyFormat)==="identity"&&!((A=V.decryptdata)!==null&&A!==void 0&&A.key)?this.loadKey(V,B):this.loadFragment(V,B,Y))}}}},e.loadFragment=function(s,A,u){var f,c=this.fragmentTracker.getState(s);this.fragCurrent=s,c===S.FragmentState.NOT_LOADED?s.sn==="initSegment"?this._loadInitSegment(s):this.bitrateTest?(this.log("Fragment "+s.sn+" of level "+s.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(s)):(this.startFragRequested=!0,a.prototype.loadFragment.call(this,s,A,u)):c===S.FragmentState.APPENDING?this.reduceMaxBufferLength(s.duration)&&this.fragmentTracker.removeFragment(s):((f=this.media)===null||f===void 0?void 0:f.buffered.length)===0&&this.fragmentTracker.removeAllFragments()},e.getAppendedFrag=function(s){var A=this.fragmentTracker.getAppendedFrag(s,v.PlaylistLevelType.MAIN);return A&&"fragment"in A?A.fragment:A},e.getBufferedFrag=function(s){return this.fragmentTracker.getBufferedFrag(s,v.PlaylistLevelType.MAIN)},e.followingBufferedFrag=function(s){return s?this.getBufferedFrag(s.end+.5):null},e.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},e.nextLevelSwitch=function(){var s=this.levels,A=this.media;if(A!=null&&A.readyState){var u,f=this.getAppendedFrag(A.currentTime);if(f&&f.start>1&&this.flushMainBuffer(0,f.start-1),!A.paused&&s){var c=this.hls.nextLoadLevel,i=s[c],C=this.fragLastKbps;C&&this.fragCurrent?u=this.fragCurrent.duration*i.maxBitrate/(1e3*C)+1:u=0}else u=0;var L=this.getBufferedFrag(A.currentTime+u);if(L){var R=this.followingBufferedFrag(L);if(R){this.abortCurrentFrag();var B=R.maxStartPTS?R.maxStartPTS:R.start,O=R.duration,K=Math.max(L.end,B+Math.min(Math.max(O-this.config.maxFragLookUpTolerance,O*.5),O*.75));this.flushMainBuffer(K,Number.POSITIVE_INFINITY)}}}},e.abortCurrentFrag=function(){var s=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,s!=null&&s.loader&&s.loader.abort(),this.state){case _.State.KEY_LOADING:case _.State.FRAG_LOADING:case _.State.FRAG_LOADING_WAITING_RETRY:case _.State.PARSING:case _.State.PARSED:this.state=_.State.IDLE;break}this.nextLoadPosition=this.getLoadPosition()},e.flushMainBuffer=function(s,A){a.prototype.flushMainBuffer.call(this,s,A,this.altAudio?"video":null)},e.onMediaAttached=function(s,A){a.prototype.onMediaAttached.call(this,s,A);var u=A.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),u.addEventListener("playing",this.onvplaying),u.addEventListener("seeked",this.onvseeked),this.gapController=new E.default(this.config,u,this.fragmentTracker,this.hls)},e.onMediaDetaching=function(){var s=this.media;s&&this.onvplaying&&this.onvseeked&&(s.removeEventListener("playing",this.onvplaying),s.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),a.prototype.onMediaDetaching.call(this)},e.onMediaPlaying=function(){this.tick()},e.onMediaSeeked=function(){var s=this.media,A=s?s.currentTime:null;(0,w.isFiniteNumber)(A)&&this.log("Media seeked to "+A.toFixed(3)),this.tick()},e.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(p.Events.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null,this.backtrackFragment=null},e.onManifestParsed=function(s,A){var u=!1,f=!1,c;A.levels.forEach(function(i){c=i.audioCodec,c&&(c.indexOf("mp4a.40.2")!==-1&&(u=!0),c.indexOf("mp4a.40.5")!==-1&&(f=!0))}),this.audioCodecSwitch=u&&f&&!(0,D.changeTypeSupported)(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=A.levels,this.startFragRequested=!1},e.onLevelLoading=function(s,A){var u=this.levels;if(!(!u||this.state!==_.State.IDLE)){var f=u[A.level];(!f.details||f.details.live&&this.levelLastLoaded!==A.level||this.waitForCdnTuneIn(f.details))&&(this.state=_.State.WAITING_LEVEL)}},e.onLevelLoaded=function(s,A){var u,f=this.levels,c=A.level,i=A.details,C=i.totalduration;if(!f){this.warn("Levels were reset while loading level "+c);return}this.log("Level "+c+" loaded ["+i.startSN+","+i.endSN+"], cc ["+i.startCC+", "+i.endCC+"] duration:"+C);var L=this.fragCurrent;L&&(this.state===_.State.FRAG_LOADING||this.state===_.State.FRAG_LOADING_WAITING_RETRY)&&L.level!==A.level&&L.loader&&(this.state=_.State.IDLE,this.backtrackFragment=null,L.loader.abort());var R=f[c],B=0;if(i.live||(u=R.details)!==null&&u!==void 0&&u.live){if(i.fragments[0]||(i.deltaUpdateFailed=!0),i.deltaUpdateFailed)return;B=this.alignPlaylists(i,R.details)}if(R.details=i,this.levelLastLoaded=c,this.hls.trigger(p.Events.LEVEL_UPDATED,{details:i,level:c}),this.state===_.State.WAITING_LEVEL){if(this.waitForCdnTuneIn(i))return;this.state=_.State.IDLE}this.startFragRequested?i.live&&this.synchronizeToLiveEdge(i):this.setStartPosition(i,B),this.tick()},e._handleFragmentLoadProgress=function(s){var A,u=s.frag,f=s.part,c=s.payload,i=this.levels;if(!i){this.warn("Levels were reset while fragment load was in progress. Fragment "+u.sn+" of level "+u.level+" will not be buffered");return}var C=i[u.level],L=C.details;if(!L){this.warn("Dropping fragment "+u.sn+" of level "+u.level+" after level details were reset");return}var R=C.videoCodec,B=L.PTSKnown||!L.live,O=(A=u.initSegment)===null||A===void 0?void 0:A.data,K=this._getAudioCodec(C),G=this.transmuxer=this.transmuxer||new m.default(this.hls,v.PlaylistLevelType.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),j=f?f.index:-1,Y=j!==-1,V=new g.ChunkMetadata(u.level,u.sn,u.stats.chunkCount,c.byteLength,j,Y),X=this.initPTS[u.cc];G.push(c,O,K,R,u,f,L.totalduration,B,V,X)},e.onAudioTrackSwitching=function(s,A){var u=this.altAudio,f=!!A.url,c=A.id;if(!f){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i!=null&&i.loader&&(this.log("Switching to main audio track, cancel main fragment load"),i.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var C=this.hls;u&&C.trigger(p.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),C.trigger(p.Events.AUDIO_TRACK_SWITCHED,{id:c})}},e.onAudioTrackSwitched=function(s,A){var u=A.id,f=!!this.hls.audioTracks[u].url;if(f){var c=this.videoBuffer;c&&this.mediaBuffer!==c&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=c)}this.altAudio=f,this.tick()},e.onBufferCreated=function(s,A){var u=A.tracks,f,c,i=!1;for(var C in u){var L=u[C];if(L.id==="main"){if(c=C,f=L,C==="video"){var R=u[C];R&&(this.videoBuffer=R.buffer)}}else i=!0}i&&f?(this.log("Alternate track found, use "+c+".buffered to schedule main fragment loading"),this.mediaBuffer=f.buffer):this.mediaBuffer=this.media},e.onFragBuffered=function(s,A){var u=A.frag,f=A.part;if(!(u&&u.type!==v.PlaylistLevelType.MAIN)){if(this.fragContextChanged(u)){this.warn("Fragment "+u.sn+(f?" p: "+f.index:"")+" of level "+u.level+" finished buffering, but was aborted. state: "+this.state),this.state===_.State.PARSED&&(this.state=_.State.IDLE);return}var c=f?f.stats:u.stats;this.fragLastKbps=Math.round(8*c.total/(c.buffering.end-c.loading.first)),u.sn!=="initSegment"&&(this.fragPrevious=u),this.fragBufferedComplete(u,f)}},e.onError=function(s,A){switch(A.details){case y.ErrorDetails.FRAG_LOAD_ERROR:case y.ErrorDetails.FRAG_LOAD_TIMEOUT:case y.ErrorDetails.KEY_LOAD_ERROR:case y.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(v.PlaylistLevelType.MAIN,A);break;case y.ErrorDetails.LEVEL_LOAD_ERROR:case y.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==_.State.ERROR&&(A.fatal?(this.warn(""+A.details),this.state=_.State.ERROR):!A.levelRetry&&this.state===_.State.WAITING_LEVEL&&(this.state=_.State.IDLE));break;case y.ErrorDetails.BUFFER_FULL_ERROR:if(A.parent==="main"&&(this.state===_.State.PARSING||this.state===_.State.PARSED)){var u=!0,f=this.getFwdBufferInfo(this.media,v.PlaylistLevelType.MAIN);f&&f.len>.5&&(u=!this.reduceMaxBufferLength(f.len)),u&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}break}},e.checkBuffer=function(){var s=this.media,A=this.gapController;if(!(!s||!A||!s.readyState)){if(this.loadedmetadata||!k.BufferHelper.getBuffered(s).length){var u=this.state!==_.State.IDLE?this.fragCurrent:null;A.poll(this.lastCurrentTime,u)}this.lastCurrentTime=s.currentTime}},e.onFragLoadEmergencyAborted=function(){this.state=_.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},e.onBufferFlushed=function(s,A){var u=A.type;if(u!==b.ElementaryStreamTypes.AUDIO||this.audioOnly&&!this.altAudio){var f=(u===b.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(f,u,v.PlaylistLevelType.MAIN)}},e.onLevelsUpdated=function(s,A){this.levels=A.levels},e.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},e.seekToStartPos=function(){var s=this.media;if(!!s){var A=s.currentTime,u=this.startPosition;if(u>=0&&A<u){if(s.seeking){this.log("could not seek to "+u+", already seeking at "+A);return}var f=k.BufferHelper.getBuffered(s),c=f.length?f.start(0):0,i=c-u;i>0&&(i<this.config.maxBufferHole||i<this.config.maxFragLookUpTolerance)&&(this.log("adjusting start position by "+i+" to match buffer start"),u+=i,this.startPosition=u),this.log("seek to target start position "+u+" from current time "+A),s.currentTime=u}}},e._getAudioCodec=function(s){var A=this.config.defaultAudioCodec||s.audioCodec;return this.audioCodecSwap&&A&&(this.log("Swapping audio codec"),A.indexOf("mp4a.40.5")!==-1?A="mp4a.40.2":A="mp4a.40.5"),A},e._loadBitrateTestFrag=function(s){var A=this;s.bitrateTest=!0,this._doFragLoad(s).then(function(u){var f=A.hls;if(!(!u||f.nextLoadLevel||A.fragContextChanged(s))){A.fragLoadError=0,A.state=_.State.IDLE,A.startFragRequested=!1,A.bitrateTest=!1;var c=s.stats;c.parsing.start=c.parsing.end=c.buffering.start=c.buffering.end=self.performance.now(),f.trigger(p.Events.FRAG_LOADED,u),s.bitrateTest=!1}})},e._handleTransmuxComplete=function(s){var A,u="main",f=this.hls,c=s.remuxResult,i=s.chunkMeta,C=this.getCurrentContext(i);if(!C){this.warn("The loading context changed while buffering fragment "+i.sn+" of level "+i.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(i.level);return}var L=C.frag,R=C.part,B=C.level,O=c.video,K=c.text,G=c.id3,j=c.initSegment,Y=B.details,V=this.altAudio?void 0:c.audio;if(!this.fragContextChanged(L)){if(this.state=_.State.PARSING,j){j.tracks&&(this._bufferInitSegment(B,j.tracks,L,i),f.trigger(p.Events.FRAG_PARSING_INIT_SEGMENT,{frag:L,id:u,tracks:j.tracks}));var X=j.initPTS,Z=j.timescale;(0,w.isFiniteNumber)(X)&&(this.initPTS[L.cc]=X,f.trigger(p.Events.INIT_PTS_FOUND,{frag:L,id:u,initPTS:X,timescale:Z}))}if(O&&c.independent!==!1){if(Y){var $=O.startPTS,ee=O.endPTS,ae=O.startDTS,ne=O.endDTS;if(R)R.elementaryStreams[O.type]={startPTS:$,endPTS:ee,startDTS:ae,endDTS:ne};else if(O.firstKeyFrame&&O.independent&&(this.couldBacktrack=!0),O.dropped&&O.independent){var oe=this.getMainFwdBufferInfo(),se=(oe?oe.end:this.getLoadPosition())+this.config.maxBufferHole,te=O.firstKeyFramePTS?O.firstKeyFramePTS:$;if(se<te-this.config.maxBufferHole){this.backtrack(L);return}L.setElementaryStreamInfo(O.type,L.start,ee,L.start,ne,!0)}L.setElementaryStreamInfo(O.type,$,ee,ae,ne),this.backtrackFragment&&(this.backtrackFragment=L),this.bufferFragmentData(O,L,R,i)}}else if(c.independent===!1){this.backtrack(L);return}if(V){var ie=V.startPTS,ue=V.endPTS,de=V.startDTS,ce=V.endDTS;R&&(R.elementaryStreams[b.ElementaryStreamTypes.AUDIO]={startPTS:ie,endPTS:ue,startDTS:de,endDTS:ce}),L.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO,ie,ue,de,ce),this.bufferFragmentData(V,L,R,i)}if(Y&&G!==null&&G!==void 0&&(A=G.samples)!==null&&A!==void 0&&A.length){var be={id:u,frag:L,details:Y,samples:G.samples};f.trigger(p.Events.FRAG_PARSING_METADATA,be)}if(Y&&K){var he={id:u,frag:L,details:Y,samples:K.samples};f.trigger(p.Events.FRAG_PARSING_USERDATA,he)}}},e._bufferInitSegment=function(s,A,u,f){var c=this;if(this.state===_.State.PARSING){this.audioOnly=!!A.audio&&!A.video,this.altAudio&&!this.audioOnly&&delete A.audio;var i=A.audio,C=A.video,L=A.audiovideo;if(i){var R=s.audioCodec,B=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(R&&(R.indexOf("mp4a.40.5")!==-1?R="mp4a.40.2":R="mp4a.40.5"),i.metadata.channelCount!==1&&B.indexOf("firefox")===-1&&(R="mp4a.40.5")),B.indexOf("android")!==-1&&i.container!=="audio/mpeg"&&(R="mp4a.40.2",this.log("Android: force audio codec to "+R)),s.audioCodec&&s.audioCodec!==R&&this.log('Swapping manifest audio codec "'+s.audioCodec+'" for "'+R+'"'),i.levelCodec=R,i.id="main",this.log("Init audio buffer, container:"+i.container+", codecs[selected/level/parsed]=["+(R||"")+"/"+(s.audioCodec||"")+"/"+i.codec+"]")}C&&(C.levelCodec=s.videoCodec,C.id="main",this.log("Init video buffer, container:"+C.container+", codecs[level/parsed]=["+(s.videoCodec||"")+"/"+C.codec+"]")),L&&this.log("Init audiovideo buffer, container:"+L.container+", codecs[level/parsed]=["+(s.attrs.CODECS||"")+"/"+L.codec+"]"),this.hls.trigger(p.Events.BUFFER_CODECS,A),Object.keys(A).forEach(function(O){var K=A[O],G=K.initSegment;G!=null&&G.byteLength&&c.hls.trigger(p.Events.BUFFER_APPENDING,{type:O,data:G,frag:u,part:null,chunkMeta:f,parent:u.type})}),this.tick()}},e.getMainFwdBufferInfo=function(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,v.PlaylistLevelType.MAIN)},e.backtrack=function(s){this.couldBacktrack=!0,this.backtrackFragment=s,this.resetTransmuxer(),this.flushBufferGap(s),this.fragmentTracker.removeFragment(s),this.fragPrevious=null,this.nextLoadPosition=s.start,this.state=_.State.IDLE},e.checkFragmentChanged=function(){var s=this.media,A=null;if(s&&s.readyState>1&&s.seeking===!1){var u=s.currentTime;if(k.BufferHelper.isBuffered(s,u)?A=this.getAppendedFrag(u):k.BufferHelper.isBuffered(s,u+.1)&&(A=this.getAppendedFrag(u+.1)),A){this.backtrackFragment=null;var f=this.fragPlaying,c=A.level;(!f||A.sn!==f.sn||f.level!==c||A.urlId!==f.urlId)&&(this.hls.trigger(p.Events.FRAG_CHANGED,{frag:A}),(!f||f.level!==c)&&this.hls.trigger(p.Events.LEVEL_SWITCHED,{level:c}),this.fragPlaying=A)}}},l(t,[{key:"nextLevel",get:function(){var s=this.nextBufferedFrag;return s?s.level:-1}},{key:"currentFrag",get:function(){var s=this.media;return s?this.fragPlaying||this.getAppendedFrag(s.currentTime):null}},{key:"currentProgramDateTime",get:function(){var s=this.media;if(s){var A=s.currentTime,u=this.currentFrag;if(u&&(0,w.isFiniteNumber)(A)&&(0,w.isFiniteNumber)(u.programDateTime)){var f=u.programDateTime+(A-u.start)*1e3;return new Date(f)}}return null}},{key:"currentLevel",get:function(){var s=this.currentFrag;return s?s.level:-1}},{key:"nextBufferedFrag",get:function(){var s=this.currentFrag;return s?this.followingBufferedFrag(s):null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),t}(_.default)},"./src/controller/subtitle-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{SubtitleStreamController:()=>r});var w=x("./src/events.ts"),_=x("./src/utils/buffer-helper.ts"),D=x("./src/controller/fragment-finders.ts"),p=x("./src/utils/discontinuities.ts"),k=x("./src/controller/level-helper.ts"),S=x("./src/controller/fragment-tracker.ts"),v=x("./src/controller/base-stream-controller.ts"),b=x("./src/types/loader.ts"),m=x("./src/types/level.ts");function g(d,h){for(var a=0;a<h.length;a++){var t=h[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(d,t.key,t)}}function E(d,h,a){return h&&g(d.prototype,h),a&&g(d,a),Object.defineProperty(d,"prototype",{writable:!1}),d}function y(d,h){d.prototype=Object.create(h.prototype),d.prototype.constructor=d,T(d,h)}function T(d,h){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(d,h)}var l=500,r=function(d){y(h,d);function h(t,e){var o;return o=d.call(this,t,e,"[subtitle-stream-controller]")||this,o.levels=[],o.currentTrackId=-1,o.tracksBuffered=[],o.mainDetails=null,o._registerListeners(),o}var a=h.prototype;return a.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},a._registerListeners=function(){var e=this.hls;e.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.Events.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.Events.ERROR,this.onError,this),e.on(w.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(w.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(w.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(w.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(w.Events.FRAG_BUFFERED,this.onFragBuffered,this)},a._unregisterListeners=function(){var e=this.hls;e.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.Events.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.Events.ERROR,this.onError,this),e.off(w.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(w.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(w.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(w.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(w.Events.FRAG_BUFFERED,this.onFragBuffered,this)},a.startLoad=function(e){this.stopLoad(),this.state=v.State.IDLE,this.setInterval(l),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()},a.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},a.onLevelLoaded=function(e,o){this.mainDetails=o.details},a.onSubtitleFragProcessed=function(e,o){var s=o.frag,A=o.success;if(this.fragPrevious=s,this.state=v.State.IDLE,!!A){var u=this.tracksBuffered[this.currentTrackId];if(!!u){for(var f,c=s.start,i=0;i<u.length;i++)if(c>=u[i].start&&c<=u[i].end){f=u[i];break}var C=s.start+s.duration;f?f.end=C:(f={start:c,end:C},u.push(f)),this.fragmentTracker.fragBuffered(s)}}},a.onBufferFlushing=function(e,o){var s=o.startOffset,A=o.endOffset;if(s===0&&A!==Number.POSITIVE_INFINITY){var u=this.currentTrackId,f=this.levels;if(!f.length||!f[u]||!f[u].details)return;var c=f[u].details,i=c.targetduration,C=A-i;if(C<=0)return;o.endOffsetSubtitles=Math.max(0,C),this.tracksBuffered.forEach(function(L){for(var R=0;R<L.length;){if(L[R].end<=C){L.shift();continue}else if(L[R].start<C)L[R].start=C;else break;R++}}),this.fragmentTracker.removeFragmentsInRange(s,C,b.PlaylistLevelType.SUBTITLE)}},a.onFragBuffered=function(e,o){if(!this.loadedmetadata&&o.frag.type===b.PlaylistLevelType.MAIN){var s;(s=this.media)!==null&&s!==void 0&&s.buffered.length&&(this.loadedmetadata=!0)}},a.onError=function(e,o){var s,A=o.frag;!A||A.type!==b.PlaylistLevelType.SUBTITLE||((s=this.fragCurrent)!==null&&s!==void 0&&s.loader&&this.fragCurrent.loader.abort(),this.state=v.State.IDLE)},a.onSubtitleTracksUpdated=function(e,o){var s=this,A=o.subtitleTracks;this.tracksBuffered=[],this.levels=A.map(function(u){return new m.Level(u)}),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach(function(u){s.tracksBuffered[u.id]=[]}),this.mediaBuffer=null},a.onSubtitleTrackSwitch=function(e,o){if(this.currentTrackId=o.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}var s=this.levels[this.currentTrackId];s!=null&&s.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,s&&this.setInterval(l)},a.onSubtitleTrackLoaded=function(e,o){var s,A=o.details,u=o.id,f=this.currentTrackId,c=this.levels;if(!!c.length){var i=c[f];if(!(u>=c.length||u!==f||!i)){this.mediaBuffer=this.mediaBufferTimeRanges;var C=0;if(A.live||(s=i.details)!==null&&s!==void 0&&s.live){var L=this.mainDetails;if(A.deltaUpdateFailed||!L)return;var R=L.fragments[0];i.details?(C=this.alignPlaylists(A,i.details),C===0&&R&&(C=R.start,(0,k.addSliding)(A,C))):A.hasProgramDateTime&&L.hasProgramDateTime?((0,p.alignMediaPlaylistByPDT)(A,L),C=A.fragments[0].start):R&&(C=R.start,(0,k.addSliding)(A,C))}if(i.details=A,this.levelLastLoaded=u,!this.startFragRequested&&(this.mainDetails||!A.live)&&this.setStartPosition(i.details,C),this.tick(),A.live&&!this.fragCurrent&&this.media&&this.state===v.State.IDLE){var B=(0,D.findFragmentByPTS)(null,A.fragments,this.media.currentTime,0);B||(this.warn("Subtitle playlist not aligned with playback"),i.details=void 0)}}}},a._handleFragmentLoadComplete=function(e){var o=e.frag,s=e.payload,A=o.decryptdata,u=this.hls;if(!this.fragContextChanged(o)&&s&&s.byteLength>0&&A&&A.key&&A.iv&&A.method==="AES-128"){var f=performance.now();this.decrypter.webCryptoDecrypt(new Uint8Array(s),A.key.buffer,A.iv.buffer).then(function(c){var i=performance.now();u.trigger(w.Events.FRAG_DECRYPTED,{frag:o,payload:c,stats:{tstart:f,tdecrypt:i}})})}},a.doTick=function(){if(!this.media){this.state=v.State.IDLE;return}if(this.state===v.State.IDLE){var e=this.currentTrackId,o=this.levels;if(!o.length||!o[e]||!o[e].details)return;var s=o[e].details,A=s.targetduration,u=this.config,f=this.getLoadPosition(),c=_.BufferHelper.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],f-A,u.maxBufferHole),i=c.end,C=c.len,L=this.getFwdBufferInfo(this.media,b.PlaylistLevelType.MAIN),R=this.getMaxBufferLength(L==null?void 0:L.len)+A;if(C>R)return;console.assert(s,"Subtitle track details are defined on idle subtitle stream controller tick");var B=s.fragments,O=B.length,K=s.edge,G,j=this.fragPrevious;if(i<K){var Y=u.maxFragLookUpTolerance;G=(0,D.findFragmentByPTS)(j,B,Math.max(B[0].start,i),Y),!G&&j&&j.start<B[0].start&&(G=B[0])}else G=B[O-1];if(G=this.mapToInitFragWhenRequired(G),!G||this.fragmentTracker.getState(G)!==S.FragmentState.NOT_LOADED)return;G.encrypted?this.loadKey(G,s):this.loadFragment(G,s,i)}},a.getMaxBufferLength=function(e){var o=d.prototype.getMaxBufferLength.call(this);return e?Math.max(o,e):o},a.loadFragment=function(e,o,s){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e):(this.startFragRequested=!0,d.prototype.loadFragment.call(this,e,o,s))},E(h,[{key:"mediaBufferTimeRanges",get:function(){return new n(this.tracksBuffered[this.currentTrackId]||[])}}]),h}(v.default),n=function(h){this.buffered=void 0;var a=function(e,o,s){if(o=o>>>0,o>s-1)throw new DOMException("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+o+") is greater than the maximum bound ("+s+")");return h[o][e]};this.buffered={get length(){return h.length},end:function(e){return a("end",e,h.length)},start:function(e){return a("start",e,h.length)}}}},"./src/controller/subtitle-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>E});var w=x("./src/events.ts"),_=x("./src/utils/texttrack-utils.ts"),D=x("./src/controller/base-playlist-controller.ts"),p=x("./src/types/loader.ts");function k(y,T){for(var l=0;l<T.length;l++){var r=T[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(y,r.key,r)}}function S(y,T,l){return T&&k(y.prototype,T),l&&k(y,l),Object.defineProperty(y,"prototype",{writable:!1}),y}function v(y,T){y.prototype=Object.create(T.prototype),y.prototype.constructor=y,b(y,T)}function b(y,T){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},b(y,T)}var m=function(y){v(T,y);function T(r){var n;return n=y.call(this,r,"[subtitle-track-controller]")||this,n.media=null,n.tracks=[],n.groupId=null,n.tracksInGroup=[],n.trackId=-1,n.selectDefaultTrack=!0,n.queuedDefaultTrack=-1,n.trackChangeListener=function(){return n.onTextTracksChanged()},n.asyncPollTrackChange=function(){return n.pollTrackChange(0)},n.useTextTrackPolling=!1,n.subtitlePollingInterval=-1,n._subtitleDisplay=!0,n.registerListeners(),n}var l=T.prototype;return l.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,y.prototype.destroy.call(this)},l.registerListeners=function(){var n=this.hls;n.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),n.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),n.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),n.on(w.Events.LEVEL_LOADING,this.onLevelLoading,this),n.on(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),n.on(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),n.on(w.Events.ERROR,this.onError,this)},l.unregisterListeners=function(){var n=this.hls;n.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),n.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),n.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),n.off(w.Events.LEVEL_LOADING,this.onLevelLoading,this),n.off(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),n.off(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),n.off(w.Events.ERROR,this.onError,this)},l.onMediaAttached=function(n,d){this.media=d.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},l.pollTrackChange=function(n){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,n)},l.onMediaDetaching=function(){if(!!this.media){self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId);var n=g(this.media.textTracks);n.forEach(function(d){(0,_.clearCurrentCues)(d)}),this.subtitleTrack=-1,this.media=null}},l.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},l.onManifestParsed=function(n,d){this.tracks=d.subtitleTracks},l.onSubtitleTrackLoaded=function(n,d){var h=d.id,a=d.details,t=this.trackId,e=this.tracksInGroup[t];if(!e){this.warn("Invalid subtitle track id "+h);return}var o=e.details;e.details=d.details,this.log("subtitle track "+h+" loaded ["+a.startSN+"-"+a.endSN+"]"),h===this.trackId&&(this.retryCount=0,this.playlistLoaded(h,d,o))},l.onLevelLoading=function(n,d){this.switchLevel(d.level)},l.onLevelSwitching=function(n,d){this.switchLevel(d.level)},l.switchLevel=function(n){var d=this.hls.levels[n];if(!!(d!=null&&d.textGroupIds)){var h=d.textGroupIds[d.urlId];if(this.groupId!==h){var a=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,t=this.tracks.filter(function(s){return!h||s.groupId===h});this.tracksInGroup=t;var e=this.findTrackId(a==null?void 0:a.name)||this.findTrackId();this.groupId=h;var o={subtitleTracks:t};this.log("Updating subtitle tracks, "+t.length+' track(s) found in "'+h+'" group-id'),this.hls.trigger(w.Events.SUBTITLE_TRACKS_UPDATED,o),e!==-1&&this.setSubtitleTrack(e,a)}}},l.findTrackId=function(n){for(var d=this.tracksInGroup,h=0;h<d.length;h++){var a=d[h];if((!this.selectDefaultTrack||a.default)&&(!n||n===a.name))return a.id}return-1},l.onError=function(n,d){y.prototype.onError.call(this,n,d),!(d.fatal||!d.context)&&d.context.type===p.PlaylistContextType.SUBTITLE_TRACK&&d.context.id===this.trackId&&d.context.groupId===this.groupId&&this.retryLoadingOrFail(d)},l.loadPlaylist=function(n){var d=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(d)){var h=d.id,a=d.groupId,t=d.url;if(n)try{t=n.addDirectives(t)}catch(e){this.warn("Could not construct new URL with HLS Delivery Directives: "+e)}this.log("Loading subtitle playlist for id "+h),this.hls.trigger(w.Events.SUBTITLE_TRACK_LOADING,{url:t,id:h,groupId:a,deliveryDirectives:n||null})}},l.toggleTrackModes=function(n){var d=this,h=this.media,a=this.trackId;if(!!h){var t=g(h.textTracks),e=t.filter(function(A){return A.groupId===d.groupId});if(n===-1)[].slice.call(t).forEach(function(A){A.mode="disabled"});else{var o=e[a];o&&(o.mode="disabled")}var s=e[n];s&&(s.mode=this.subtitleDisplay?"showing":"hidden")}},l.setSubtitleTrack=function(n,d){var h,a=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=n;return}if(this.trackId!==n&&this.toggleTrackModes(n),!(this.trackId===n&&(n===-1||(h=a[n])!==null&&h!==void 0&&h.details)||n<-1||n>=a.length)){this.clearTimer();var t=a[n];if(this.log("Switching to subtitle track "+n),this.trackId=n,t){var e=t.id,o=t.groupId,s=o===void 0?"":o,A=t.name,u=t.type,f=t.url;this.hls.trigger(w.Events.SUBTITLE_TRACK_SWITCH,{id:e,groupId:s,name:A,type:u,url:f});var c=this.switchParams(t.url,d==null?void 0:d.details);this.loadPlaylist(c)}else this.hls.trigger(w.Events.SUBTITLE_TRACK_SWITCH,{id:n})}},l.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!(!this.media||!this.hls.config.renderTextTracksNatively)){for(var n=-1,d=g(this.media.textTracks),h=0;h<d.length;h++)if(d[h].mode==="hidden")n=h;else if(d[h].mode==="showing"){n=h;break}this.subtitleTrack!==n&&(this.subtitleTrack=n)}},S(T,[{key:"subtitleDisplay",get:function(){return this._subtitleDisplay},set:function(n){this._subtitleDisplay=n,this.trackId>-1&&this.toggleTrackModes(this.trackId)}},{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(n){this.selectDefaultTrack=!1;var d=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(n,d)}}]),T}(D.default);function g(y){for(var T=[],l=0;l<y.length;l++){var r=y[l];r.kind==="subtitles"&&r.label&&T.push(y[l])}return T}const E=m},"./src/controller/timeline-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{TimelineController:()=>E});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/cea-608-parser.ts"),p=x("./src/utils/output-filter.ts"),k=x("./src/utils/webvtt-parser.ts"),S=x("./src/utils/texttrack-utils.ts"),v=x("./src/utils/imsc1-ttml-parser.ts"),b=x("./src/utils/mp4-tools.ts"),m=x("./src/types/loader.ts"),g=x("./src/utils/logger.ts"),E=function(){function r(d){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=l(),this.captionsProperties=void 0,this.hls=d,this.config=d.config,this.Cues=d.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var h=new p.default(this,"textTrack1"),a=new p.default(this,"textTrack2"),t=new p.default(this,"textTrack3"),e=new p.default(this,"textTrack4");this.cea608Parser1=new D.default(1,h,a),this.cea608Parser2=new D.default(3,t,e)}d.on(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),d.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.on(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),d.on(_.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),d.on(_.Events.FRAG_LOADING,this.onFragLoading,this),d.on(_.Events.FRAG_LOADED,this.onFragLoaded,this),d.on(_.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),d.on(_.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),d.on(_.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),d.on(_.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),d.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)}var n=r.prototype;return n.destroy=function(){var h=this.hls;h.off(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),h.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),h.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),h.off(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),h.off(_.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),h.off(_.Events.FRAG_LOADING,this.onFragLoading,this),h.off(_.Events.FRAG_LOADED,this.onFragLoaded,this),h.off(_.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),h.off(_.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),h.off(_.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),h.off(_.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),h.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},n.addCues=function(h,a,t,e,o){for(var s=!1,A=o.length;A--;){var u=o[A],f=T(u[0],u[1],a,t);if(f>=0&&(u[0]=Math.min(u[0],a),u[1]=Math.max(u[1],t),s=!0,f/(t-a)>.5))return}if(s||o.push([a,t]),this.config.renderTextTracksNatively){var c=this.captionsTracks[h];this.Cues.newCue(c,a,t,e)}else{var i=this.Cues.newCue(null,a,t,e);this.hls.trigger(_.Events.CUES_PARSED,{type:"captions",cues:i,track:h})}},n.onInitPtsFound=function(h,a){var t=this,e=a.frag,o=a.id,s=a.initPTS,A=a.timescale,u=this.unparsedVttFrags;o==="main"&&(this.initPTS[e.cc]=s,this.timescale[e.cc]=A),u.length&&(this.unparsedVttFrags=[],u.forEach(function(f){t.onFragLoaded(_.Events.FRAG_LOADED,f)}))},n.getExistingTrack=function(h){var a=this.media;if(a)for(var t=0;t<a.textTracks.length;t++){var e=a.textTracks[t];if(e[h])return e}return null},n.createCaptionsTrack=function(h){this.config.renderTextTracksNatively?this.createNativeTrack(h):this.createNonNativeTrack(h)},n.createNativeTrack=function(h){if(!this.captionsTracks[h]){var a=this.captionsProperties,t=this.captionsTracks,e=this.media,o=a[h],s=o.label,A=o.languageCode,u=this.getExistingTrack(h);if(u)t[h]=u,(0,S.clearCurrentCues)(t[h]),(0,S.sendAddTrackEvent)(t[h],e);else{var f=this.createTextTrack("captions",s,A);f&&(f[h]=!0,t[h]=f)}}},n.createNonNativeTrack=function(h){if(!this.nonNativeCaptionsTracks[h]){var a=this.captionsProperties[h];if(!!a){var t=a.label,e={_id:h,label:t,kind:"captions",default:a.media?!!a.media.default:!1,closedCaptions:a.media};this.nonNativeCaptionsTracks[h]=e,this.hls.trigger(_.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[e]})}}},n.createTextTrack=function(h,a,t){var e=this.media;if(!!e)return e.addTextTrack(h,a,t)},n.onMediaAttaching=function(h,a){this.media=a.media,this._cleanTracks()},n.onMediaDetaching=function(){var h=this.captionsTracks;Object.keys(h).forEach(function(a){(0,S.clearCurrentCues)(h[a]),delete h[a]}),this.nonNativeCaptionsTracks={}},n.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=l(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},n._cleanTracks=function(){var h=this.media;if(!!h){var a=h.textTracks;if(a)for(var t=0;t<a.length;t++)(0,S.clearCurrentCues)(a[t])}},n.onSubtitleTracksUpdated=function(h,a){var t=this;this.textTracks=[];var e=a.subtitleTracks||[],o=e.some(function(f){return f.textCodec===v.IMSC1_CODEC});if(this.config.enableWebVTT||o&&this.config.enableIMSC1){var s=this.tracks&&e&&this.tracks.length===e.length;if(this.tracks=e||[],this.config.renderTextTracksNatively){var A=this.media?this.media.textTracks:[];this.tracks.forEach(function(f,c){var i;if(c<A.length){for(var C=null,L=0;L<A.length;L++)if(y(A[L],f)){C=A[L];break}C&&(i=C)}if(i)(0,S.clearCurrentCues)(i);else{var R=t._captionsOrSubtitlesFromCharacteristics(f);i=t.createTextTrack(R,f.name,f.lang),i&&(i.mode="disabled")}i&&(i.groupId=f.groupId,t.textTracks.push(i))})}else if(!s&&this.tracks&&this.tracks.length){var u=this.tracks.map(function(f){return{label:f.name,kind:f.type.toLowerCase(),default:f.default,subtitleTrack:f}});this.hls.trigger(_.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:u})}}},n._captionsOrSubtitlesFromCharacteristics=function(h){var a;if((a=h.attrs)!==null&&a!==void 0&&a.CHARACTERISTICS){var t=/transcribes-spoken-dialog/gi.test(h.attrs.CHARACTERISTICS),e=/describes-music-and-sound/gi.test(h.attrs.CHARACTERISTICS);if(t&&e)return"captions"}return"subtitles"},n.onManifestLoaded=function(h,a){var t=this;this.config.enableCEA708Captions&&a.captions&&a.captions.forEach(function(e){var o=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(!!o){var s="textTrack"+o[1],A=t.captionsProperties[s];!A||(A.label=e.name,e.lang&&(A.languageCode=e.lang),A.media=e)}})},n.closedCaptionsForLevel=function(h){var a=this.hls.levels[h.level];return a==null?void 0:a.attrs["CLOSED-CAPTIONS"]},n.onFragLoading=function(h,a){var t=this.cea608Parser1,e=this.cea608Parser2,o=this.lastSn,s=this.lastPartIndex;if(!(!this.enabled||!(t&&e))&&a.frag.type===m.PlaylistLevelType.MAIN){var A,u,f=a.frag.sn,c=(A=a==null||(u=a.part)===null||u===void 0?void 0:u.index)!=null?A:-1;f===o+1||f===o&&c===s+1||(t.reset(),e.reset()),this.lastSn=f,this.lastPartIndex=c}},n.onFragLoaded=function(h,a){var t=a.frag,e=a.payload,o=this.initPTS,s=this.unparsedVttFrags;if(t.type===m.PlaylistLevelType.SUBTITLE)if(e.byteLength){if(!(0,w.isFiniteNumber)(o[t.cc])){s.push(a),o.length&&this.hls.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:new Error("Missing initial subtitle PTS")});return}var A=t.decryptdata,u="stats"in a;if(A==null||A.key==null||A.method!=="AES-128"||u){var f=this.tracks[t.level],c=this.vttCCs;c[t.cc]||(c[t.cc]={start:t.start,prevCC:this.prevCC,new:!0},this.prevCC=t.cc),f&&f.textCodec===v.IMSC1_CODEC?this._parseIMSC1(t,e):this._parseVTTs(t,e,c)}}else this.hls.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:new Error("Empty subtitle payload")})},n._parseIMSC1=function(h,a){var t=this,e=this.hls;(0,v.parseIMSC1)(a,this.initPTS[h.cc],this.timescale[h.cc],function(o){t._appendCues(o,h.level),e.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:h})},function(o){g.logger.log("Failed to parse IMSC1: "+o),e.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:h,error:o})})},n._parseVTTs=function(h,a,t){var e,o=this,s=this.hls,A=(e=h.initSegment)!==null&&e!==void 0&&e.data?(0,b.appendUint8Array)(h.initSegment.data,new Uint8Array(a)):a;(0,k.parseWebVTT)(A,this.initPTS[h.cc],this.timescale[h.cc],t,h.cc,h.start,function(u){o._appendCues(u,h.level),s.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:h})},function(u){o._fallbackToIMSC1(h,a),g.logger.log("Failed to parse VTT cue: "+u),s.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:h,error:u})})},n._fallbackToIMSC1=function(h,a){var t=this,e=this.tracks[h.level];e.textCodec||(0,v.parseIMSC1)(a,this.initPTS[h.cc],this.timescale[h.cc],function(){e.textCodec=v.IMSC1_CODEC,t._parseIMSC1(h,a)},function(){e.textCodec="wvtt"})},n._appendCues=function(h,a){var t=this.hls;if(this.config.renderTextTracksNatively){var e=this.textTracks[a];if(!e||e.mode==="disabled")return;h.forEach(function(A){return(0,S.addCueToTrack)(e,A)})}else{var o=this.tracks[a];if(!o)return;var s=o.default?"default":"subtitles"+a;t.trigger(_.Events.CUES_PARSED,{type:"subtitles",cues:h,track:s})}},n.onFragDecrypted=function(h,a){var t=a.frag;if(t.type===m.PlaylistLevelType.SUBTITLE){if(!(0,w.isFiniteNumber)(this.initPTS[t.cc])){this.unparsedVttFrags.push(a);return}this.onFragLoaded(_.Events.FRAG_LOADED,a)}},n.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},n.onFragParsingUserdata=function(h,a){var t=this.cea608Parser1,e=this.cea608Parser2;if(!(!this.enabled||!(t&&e))){var o=a.frag,s=a.samples;if(!(o.type===m.PlaylistLevelType.MAIN&&this.closedCaptionsForLevel(o)==="NONE"))for(var A=0;A<s.length;A++){var u=s[A].bytes;if(u){var f=this.extractCea608Data(u);t.addData(s[A].pts,f[0]),e.addData(s[A].pts,f[1])}}}},n.onBufferFlushing=function(h,a){var t=a.startOffset,e=a.endOffset,o=a.endOffsetSubtitles,s=a.type,A=this.media;if(!(!A||A.currentTime<e)){if(!s||s==="video"){var u=this.captionsTracks;Object.keys(u).forEach(function(c){return(0,S.removeCuesInRange)(u[c],t,e)})}if(this.config.renderTextTracksNatively&&t===0&&o!==void 0){var f=this.textTracks;Object.keys(f).forEach(function(c){return(0,S.removeCuesInRange)(f[c],t,o)})}}},n.extractCea608Data=function(h){for(var a=[[],[]],t=h[0]&31,e=2,o=0;o<t;o++){var s=h[e++],A=127&h[e++],u=127&h[e++];if(!(A===0&&u===0)){var f=(4&s)!==0;if(f){var c=3&s;(c===0||c===1)&&(a[c].push(A),a[c].push(u))}}}return a},r}();function y(r,n){return r&&r.label===n.name&&!(r.textTrack1||r.textTrack2)}function T(r,n,d,h){return Math.min(n,h)-Math.max(r,d)}function l(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}},"./src/crypt/aes-crypto.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(p,k){this.subtle=void 0,this.aesIV=void 0,this.subtle=p,this.aesIV=k}var D=_.prototype;return D.decrypt=function(k,S){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},S,k)},_}()},"./src/crypt/aes-decryptor.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D,removePadding:()=>_});var w=x("./src/utils/typed-array.ts");function _(p){var k=p.byteLength,S=k&&new DataView(p.buffer).getUint8(k-1);return S?(0,w.sliceUint8)(p,0,k-S):p}var D=function(){function p(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var k=p.prototype;return k.uint8ArrayToUint32Array_=function(v){for(var b=new DataView(v),m=new Uint32Array(4),g=0;g<4;g++)m[g]=b.getUint32(g*4);return m},k.initTable=function(){var v=this.sBox,b=this.invSBox,m=this.subMix,g=m[0],E=m[1],y=m[2],T=m[3],l=this.invSubMix,r=l[0],n=l[1],d=l[2],h=l[3],a=new Uint32Array(256),t=0,e=0,o=0;for(o=0;o<256;o++)o<128?a[o]=o<<1:a[o]=o<<1^283;for(o=0;o<256;o++){var s=e^e<<1^e<<2^e<<3^e<<4;s=s>>>8^s&255^99,v[t]=s,b[s]=t;var A=a[t],u=a[A],f=a[u],c=a[s]*257^s*16843008;g[t]=c<<24|c>>>8,E[t]=c<<16|c>>>16,y[t]=c<<8|c>>>24,T[t]=c,c=f*16843009^u*65537^A*257^t*16843008,r[s]=c<<24|c>>>8,n[s]=c<<16|c>>>16,d[s]=c<<8|c>>>24,h[s]=c,t?(t=A^a[a[a[f^A]]],e^=a[a[e]]):t=e=1}},k.expandKey=function(v){for(var b=this.uint8ArrayToUint32Array_(v),m=!0,g=0;g<b.length&&m;)m=b[g]===this.key[g],g++;if(!m){this.key=b;var E=this.keySize=b.length;if(E!==4&&E!==6&&E!==8)throw new Error("Invalid aes key size="+E);var y=this.ksRows=(E+6+1)*4,T,l,r=this.keySchedule=new Uint32Array(y),n=this.invKeySchedule=new Uint32Array(y),d=this.sBox,h=this.rcon,a=this.invSubMix,t=a[0],e=a[1],o=a[2],s=a[3],A,u;for(T=0;T<y;T++){if(T<E){A=r[T]=b[T];continue}u=A,T%E===0?(u=u<<8|u>>>24,u=d[u>>>24]<<24|d[u>>>16&255]<<16|d[u>>>8&255]<<8|d[u&255],u^=h[T/E|0]<<24):E>6&&T%E===4&&(u=d[u>>>24]<<24|d[u>>>16&255]<<16|d[u>>>8&255]<<8|d[u&255]),r[T]=A=(r[T-E]^u)>>>0}for(l=0;l<y;l++)T=y-l,l&3?u=r[T]:u=r[T-4],l<4||T<=4?n[l]=u:n[l]=t[d[u>>>24]]^e[d[u>>>16&255]]^o[d[u>>>8&255]]^s[d[u&255]],n[l]=n[l]>>>0}},k.networkToHostOrderSwap=function(v){return v<<24|(v&65280)<<8|(v&16711680)>>8|v>>>24},k.decrypt=function(v,b,m){for(var g=this.keySize+6,E=this.invKeySchedule,y=this.invSBox,T=this.invSubMix,l=T[0],r=T[1],n=T[2],d=T[3],h=this.uint8ArrayToUint32Array_(m),a=h[0],t=h[1],e=h[2],o=h[3],s=new Int32Array(v),A=new Int32Array(s.length),u,f,c,i,C,L,R,B,O,K,G,j,Y,V,X=this.networkToHostOrderSwap;b<s.length;){for(O=X(s[b]),K=X(s[b+1]),G=X(s[b+2]),j=X(s[b+3]),C=O^E[0],L=j^E[1],R=G^E[2],B=K^E[3],Y=4,V=1;V<g;V++)u=l[C>>>24]^r[L>>16&255]^n[R>>8&255]^d[B&255]^E[Y],f=l[L>>>24]^r[R>>16&255]^n[B>>8&255]^d[C&255]^E[Y+1],c=l[R>>>24]^r[B>>16&255]^n[C>>8&255]^d[L&255]^E[Y+2],i=l[B>>>24]^r[C>>16&255]^n[L>>8&255]^d[R&255]^E[Y+3],C=u,L=f,R=c,B=i,Y=Y+4;u=y[C>>>24]<<24^y[L>>16&255]<<16^y[R>>8&255]<<8^y[B&255]^E[Y],f=y[L>>>24]<<24^y[R>>16&255]<<16^y[B>>8&255]<<8^y[C&255]^E[Y+1],c=y[R>>>24]<<24^y[B>>16&255]<<16^y[C>>8&255]<<8^y[L&255]^E[Y+2],i=y[B>>>24]<<24^y[C>>16&255]<<16^y[L>>8&255]<<8^y[R&255]^E[Y+3],A[b]=X(u^a),A[b+1]=X(i^t),A[b+2]=X(c^e),A[b+3]=X(f^o),a=O,t=K,e=G,o=j,b=b+4}return A.buffer},p}()},"./src/crypt/decrypter.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/crypt/aes-crypto.ts"),_=x("./src/crypt/fast-aes-key.ts"),D=x("./src/crypt/aes-decryptor.ts"),p=x("./src/utils/logger.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/utils/typed-array.ts"),v=16,b=function(){function m(E,y,T){var l=T===void 0?{}:T,r=l.removePKCS7Padding,n=r===void 0?!0:r;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=E,this.config=y,this.removePKCS7Padding=n,n)try{var d=self.crypto;d&&(this.subtle=d.subtle||d.webkitSubtle)}catch{}this.subtle===null&&(this.config.enableSoftwareAES=!0)}var g=m.prototype;return g.destroy=function(){this.observer=null},g.isSync=function(){return this.config.enableSoftwareAES},g.flush=function(){var y=this.currentResult;if(!y){this.reset();return}var T=new Uint8Array(y);return this.reset(),this.removePKCS7Padding?(0,D.removePadding)(T):T},g.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},g.decrypt=function(y,T,l,r){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(y),T,l);var n=this.flush();n&&r(n.buffer)}else this.webCryptoDecrypt(new Uint8Array(y),T,l).then(r)},g.softwareDecrypt=function(y,T,l){var r=this.currentIV,n=this.currentResult,d=this.remainderData;this.logOnce("JS AES decrypt"),d&&(y=(0,k.appendUint8Array)(d,y),this.remainderData=null);var h=this.getValidChunk(y);if(!h.length)return null;r&&(l=r);var a=this.softwareDecrypter;a||(a=this.softwareDecrypter=new D.default),a.expandKey(T);var t=n;return this.currentResult=a.decrypt(h.buffer,0,l),this.currentIV=(0,S.sliceUint8)(h,-16).buffer,t||null},g.webCryptoDecrypt=function(y,T,l){var r=this,n=this.subtle;return(this.key!==T||!this.fastAesKey)&&(this.key=T,this.fastAesKey=new _.default(n,T)),this.fastAesKey.expandKey().then(function(d){if(!n)return Promise.reject(new Error("web crypto not initialized"));var h=new w.default(n,l);return h.decrypt(y.buffer,d)}).catch(function(d){return r.onWebCryptoError(d,y,T,l)})},g.onWebCryptoError=function(y,T,l,r){return p.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",y),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(T,l,r)},g.getValidChunk=function(y){var T=y,l=y.length-y.length%v;return l!==y.length&&(T=(0,S.sliceUint8)(y,0,l),this.remainderData=(0,S.sliceUint8)(y,l)),T},g.logOnce=function(y){!this.logEnabled||(p.logger.log("[decrypter.ts]: "+y),this.logEnabled=!1)},m}()},"./src/crypt/fast-aes-key.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(p,k){this.subtle=void 0,this.key=void 0,this.subtle=p,this.key=k}var D=_.prototype;return D.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},_}()},"./src/demux/aacdemuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/demux/base-audio-demuxer.ts"),_=x("./src/demux/adts.ts"),D=x("./src/utils/logger.ts"),p=x("./src/demux/id3.ts");function k(m,g){m.prototype=Object.create(g.prototype),m.prototype.constructor=m,S(m,g)}function S(m,g){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,T){return y.__proto__=T,y},S(m,g)}var v=function(m){k(g,m);function g(y,T){var l;return l=m.call(this)||this,l.observer=void 0,l.config=void 0,l.observer=y,l.config=T,l}var E=g.prototype;return E.resetInitSegment=function(T,l,r,n){m.prototype.resetInitSegment.call(this,T,l,r,n),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:l,duration:n,inputTimeScale:9e4,dropped:0}},g.probe=function(T){if(!T)return!1;for(var l=p.getID3Data(T,0)||[],r=l.length,n=T.length;r<n;r++)if(_.probe(T,r))return D.logger.log("ADTS sync word found !"),!0;return!1},E.canParse=function(T,l){return _.canParse(T,l)},E.appendFrame=function(T,l,r){_.initTrackConfig(T,this.observer,l,r,T.manifestCodec);var n=_.appendFrame(T,l,r,this.basePTS,this.frameIndex);if(n&&n.missing===0)return n},g}(w.default);const b=v},"./src/demux/adts.ts":(W,M,x)=>{x.r(M),x.d(M,{appendFrame:()=>r,canGetFrameLength:()=>b,canParse:()=>g,getAudioConfig:()=>p,getFrameDuration:()=>T,getFullFrameLength:()=>v,getHeaderLength:()=>S,initTrackConfig:()=>y,isHeader:()=>m,isHeaderPattern:()=>k,parseFrameHeader:()=>l,probe:()=>E});var w=x("./src/utils/logger.ts"),_=x("./src/errors.ts"),D=x("./src/events.ts");function p(n,d,h,a){var t,e,o,s,A=navigator.userAgent.toLowerCase(),u=a,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];t=((d[h+2]&192)>>>6)+1;var c=(d[h+2]&60)>>>2;if(c>f.length-1){n.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+c});return}return o=(d[h+2]&1)<<2,o|=(d[h+3]&192)>>>6,w.logger.log("manifest codec:"+a+", ADTS type:"+t+", samplingIndex:"+c),/firefox/i.test(A)?c>=6?(t=5,s=new Array(4),e=c-3):(t=2,s=new Array(2),e=c):A.indexOf("android")!==-1?(t=2,s=new Array(2),e=c):(t=5,s=new Array(4),a&&(a.indexOf("mp4a.40.29")!==-1||a.indexOf("mp4a.40.5")!==-1)||!a&&c>=6?e=c-3:((a&&a.indexOf("mp4a.40.2")!==-1&&(c>=6&&o===1||/vivaldi/i.test(A))||!a&&o===1)&&(t=2,s=new Array(2)),e=c)),s[0]=t<<3,s[0]|=(c&14)>>1,s[1]|=(c&1)<<7,s[1]|=o<<3,t===5&&(s[1]|=(e&14)>>1,s[2]=(e&1)<<7,s[2]|=8,s[3]=0),{config:s,samplerate:f[c],channelCount:o,codec:"mp4a.40."+t,manifestCodec:u}}function k(n,d){return n[d]===255&&(n[d+1]&246)===240}function S(n,d){return n[d+1]&1?7:9}function v(n,d){return(n[d+3]&3)<<11|n[d+4]<<3|(n[d+5]&224)>>>5}function b(n,d){return d+5<n.length}function m(n,d){return d+1<n.length&&k(n,d)}function g(n,d){return b(n,d)&&k(n,d)&&v(n,d)<=n.length-d}function E(n,d){if(m(n,d)){var h=S(n,d);if(d+h>=n.length)return!1;var a=v(n,d);if(a<=h)return!1;var t=d+a;return t===n.length||m(n,t)}return!1}function y(n,d,h,a,t){if(!n.samplerate){var e=p(d,h,a,t);if(!e)return;n.config=e.config,n.samplerate=e.samplerate,n.channelCount=e.channelCount,n.codec=e.codec,n.manifestCodec=e.manifestCodec,w.logger.log("parsed codec:"+n.codec+", rate:"+e.samplerate+", channels:"+e.channelCount)}}function T(n){return 9216e4/n}function l(n,d){var h=S(n,d);if(d+h<=n.length){var a=v(n,d)-h;if(a>0)return{headerLength:h,frameLength:a}}}function r(n,d,h,a,t){var e=T(n.samplerate),o=a+t*e,s=l(d,h),A;if(s){var u=s.frameLength,f=s.headerLength,c=f+u,i=Math.max(0,h+c-d.length);i?(A=new Uint8Array(c-f),A.set(d.subarray(h+f,d.length),0)):A=d.subarray(h+f,h+c);var C={unit:A,pts:o};return i||n.samples.push(C),{sample:C,length:c,missing:i}}var L=d.length-h;A=new Uint8Array(L),A.set(d.subarray(h,d.length),0);var R={unit:A,pts:o};return{sample:R,length:L,missing:-1}}},"./src/demux/base-audio-demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>m,initPTSFn:()=>b});var w=x("./src/polyfills/number.ts"),_=x("./src/demux/id3.ts"),D=x("./src/types/demuxer.ts"),p=x("./src/demux/dummy-demuxed-track.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/utils/typed-array.ts"),v=function(){function g(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}var E=g.prototype;return E.resetInitSegment=function(T,l,r,n){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},E.resetTimeStamp=function(T){this.initPTS=T,this.resetContiguity()},E.resetContiguity=function(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0},E.canParse=function(T,l){return!1},E.appendFrame=function(T,l,r){},E.demux=function(T,l){this.cachedData&&(T=(0,k.appendUint8Array)(this.cachedData,T),this.cachedData=null);var r=_.getID3Data(T,0),n=r?r.length:0,d,h=this._audioTrack,a=this._id3Track,t=r?_.getTimeStamp(r):void 0,e=T.length;for((this.basePTS===null||this.frameIndex===0&&(0,w.isFiniteNumber)(t))&&(this.basePTS=b(t,l,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),r&&r.length>0&&a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:D.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});n<e;){if(this.canParse(T,n)){var o=this.appendFrame(h,T,n);o?(this.frameIndex++,this.lastPTS=o.sample.pts,n+=o.length,d=n):n=e}else _.canParse(T,n)?(r=_.getID3Data(T,n),a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:D.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY}),n+=r.length,d=n):n++;if(n===e&&d!==e){var s=(0,S.sliceUint8)(T,d);this.cachedData?this.cachedData=(0,k.appendUint8Array)(this.cachedData,s):this.cachedData=s}}return{audioTrack:h,videoTrack:(0,p.dummyTrack)(),id3Track:a,textTrack:(0,p.dummyTrack)()}},E.demuxSampleAes=function(T,l,r){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},E.flush=function(T){var l=this.cachedData;return l&&(this.cachedData=null,this.demux(l,0)),{audioTrack:this._audioTrack,videoTrack:(0,p.dummyTrack)(),id3Track:this._id3Track,textTrack:(0,p.dummyTrack)()}},E.destroy=function(){},g}(),b=function(E,y,T){return(0,w.isFiniteNumber)(E)?E*90:y*9e4+(T||0)};const m=v},"./src/demux/chunk-cache.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function D(){this.chunks=[],this.dataLength=0}var p=D.prototype;return p.push=function(S){this.chunks.push(S),this.dataLength+=S.length},p.flush=function(){var S=this.chunks,v=this.dataLength,b;if(S.length)S.length===1?b=S[0]:b=_(S,v);else return new Uint8Array(0);return this.reset(),b},p.reset=function(){this.chunks.length=0,this.dataLength=0},D}();function _(D,p){for(var k=new Uint8Array(p),S=0,v=0;v<D.length;v++){var b=D[v];k.set(b,S),S+=b.length}return k}},"./src/demux/dummy-demuxed-track.ts":(W,M,x)=>{x.r(M),x.d(M,{dummyTrack:()=>w});function w(_,D){return _===void 0&&(_=""),D===void 0&&(D=9e4),{type:_,id:-1,pid:-1,inputTimeScale:D,sequenceNumber:-1,samples:[],dropped:0}}},"./src/demux/exp-golomb.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=x("./src/utils/logger.ts"),_=function(){function p(S){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=S,this.bytesAvailable=S.byteLength,this.word=0,this.bitsAvailable=0}var k=p.prototype;return k.loadWord=function(){var v=this.data,b=this.bytesAvailable,m=v.byteLength-b,g=new Uint8Array(4),E=Math.min(4,b);if(E===0)throw new Error("no bytes available");g.set(v.subarray(m,m+E)),this.word=new DataView(g.buffer).getUint32(0),this.bitsAvailable=E*8,this.bytesAvailable-=E},k.skipBits=function(v){var b;this.bitsAvailable>v?(this.word<<=v,this.bitsAvailable-=v):(v-=this.bitsAvailable,b=v>>3,v-=b>>3,this.bytesAvailable-=b,this.loadWord(),this.word<<=v,this.bitsAvailable-=v)},k.readBits=function(v){var b=Math.min(this.bitsAvailable,v),m=this.word>>>32-b;return v>32&&w.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=b,this.bitsAvailable>0?this.word<<=b:this.bytesAvailable>0&&this.loadWord(),b=v-b,b>0&&this.bitsAvailable?m<<b|this.readBits(b):m},k.skipLZ=function(){var v;for(v=0;v<this.bitsAvailable;++v)if((this.word&2147483648>>>v)!==0)return this.word<<=v,this.bitsAvailable-=v,v;return this.loadWord(),v+this.skipLZ()},k.skipUEG=function(){this.skipBits(1+this.skipLZ())},k.skipEG=function(){this.skipBits(1+this.skipLZ())},k.readUEG=function(){var v=this.skipLZ();return this.readBits(v+1)-1},k.readEG=function(){var v=this.readUEG();return 1&v?1+v>>>1:-1*(v>>>1)},k.readBoolean=function(){return this.readBits(1)===1},k.readUByte=function(){return this.readBits(8)},k.readUShort=function(){return this.readBits(16)},k.readUInt=function(){return this.readBits(32)},k.skipScalingList=function(v){for(var b=8,m=8,g,E=0;E<v;E++)m!==0&&(g=this.readEG(),m=(b+g+256)%256),b=m===0?b:m},k.readSPS=function(){var v=0,b=0,m=0,g=0,E,y,T,l=this.readUByte.bind(this),r=this.readBits.bind(this),n=this.readUEG.bind(this),d=this.readBoolean.bind(this),h=this.skipBits.bind(this),a=this.skipEG.bind(this),t=this.skipUEG.bind(this),e=this.skipScalingList.bind(this);l();var o=l();if(r(5),h(3),l(),t(),o===100||o===110||o===122||o===244||o===44||o===83||o===86||o===118||o===128){var s=n();if(s===3&&h(1),t(),t(),h(1),d())for(y=s!==3?8:12,T=0;T<y;T++)d()&&(T<6?e(16):e(64))}t();var A=n();if(A===0)n();else if(A===1)for(h(1),a(),a(),E=n(),T=0;T<E;T++)a();t(),h(1);var u=n(),f=n(),c=r(1);c===0&&h(1),h(1),d()&&(v=n(),b=n(),m=n(),g=n());var i=[1,1];if(d()&&d()){var C=l();switch(C){case 1:i=[1,1];break;case 2:i=[12,11];break;case 3:i=[10,11];break;case 4:i=[16,11];break;case 5:i=[40,33];break;case 6:i=[24,11];break;case 7:i=[20,11];break;case 8:i=[32,11];break;case 9:i=[80,33];break;case 10:i=[18,11];break;case 11:i=[15,11];break;case 12:i=[64,33];break;case 13:i=[160,99];break;case 14:i=[4,3];break;case 15:i=[3,2];break;case 16:i=[2,1];break;case 255:{i=[l()<<8|l(),l()<<8|l()];break}}}return{width:Math.ceil((u+1)*16-v*2-b*2),height:(2-c)*(f+1)*16-(c?2:4)*(m+g),pixelRatio:i}},k.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},p}();const D=_},"./src/demux/id3.ts":(W,M,x)=>{x.r(M),x.d(M,{canParse:()=>k,decodeFrame:()=>g,getID3Data:()=>D,getID3Frames:()=>m,getTimeStamp:()=>S,isFooter:()=>_,isHeader:()=>w,isTimeStampFrame:()=>v,testables:()=>n,utf8ArrayToStr:()=>r});var w=function(t,e){return e+10<=t.length&&t[e]===73&&t[e+1]===68&&t[e+2]===51&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},_=function(t,e){return e+10<=t.length&&t[e]===51&&t[e+1]===68&&t[e+2]===73&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},D=function(t,e){for(var o=e,s=0;w(t,e);){s+=10;var A=p(t,e+6);s+=A,_(t,e+10)&&(s+=10),e+=s}if(s>0)return t.subarray(o,o+s)},p=function(t,e){var o=0;return o=(t[e]&127)<<21,o|=(t[e+1]&127)<<14,o|=(t[e+2]&127)<<7,o|=t[e+3]&127,o},k=function(t,e){return w(t,e)&&p(t,e+6)+10<=t.length-e},S=function(t){for(var e=m(t),o=0;o<e.length;o++){var s=e[o];if(v(s))return l(s)}},v=function(t){return t&&t.key==="PRIV"&&t.info==="com.apple.streaming.transportStreamTimestamp"},b=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),o=p(t,4),s=10;return{type:e,size:o,data:t.subarray(s,s+o)}},m=function(t){for(var e=0,o=[];w(t,e);){var s=p(t,e+6);e+=10;for(var A=e+s;e+8<A;){var u=b(t.subarray(e)),f=g(u);f&&o.push(f),e+=u.size+10}_(t,e)&&(e+=10)}return o},g=function(t){return t.type==="PRIV"?E(t):t.type[0]==="W"?T(t):y(t)},E=function(t){if(!(t.size<2)){var e=r(t.data,!0),o=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:o.buffer}}},y=function(t){if(!(t.size<2)){if(t.type==="TXXX"){var e=1,o=r(t.data.subarray(e),!0);e+=o.length+1;var s=r(t.data.subarray(e));return{key:t.type,info:o,data:s}}var A=r(t.data.subarray(1));return{key:t.type,data:A}}},T=function(t){if(t.type==="WXXX"){if(t.size<2)return;var e=1,o=r(t.data.subarray(e),!0);e+=o.length+1;var s=r(t.data.subarray(e));return{key:t.type,info:o,data:s}}var A=r(t.data);return{key:t.type,data:A}},l=function(t){if(t.data.byteLength===8){var e=new Uint8Array(t.data),o=e[3]&1,s=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return s/=45,o&&(s+=4772185884e-2),Math.round(s)}},r=function(t,e){e===void 0&&(e=!1);var o=h();if(o){var s=o.decode(t);if(e){var A=s.indexOf("\0");return A!==-1?s.substring(0,A):s}return s.replace(/\0/g,"")}for(var u=t.length,f,c,i,C="",L=0;L<u;){if(f=t[L++],f===0&&e)return C;if(f===0||f===3)continue;switch(f>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:C+=String.fromCharCode(f);break;case 12:case 13:c=t[L++],C+=String.fromCharCode((f&31)<<6|c&63);break;case 14:c=t[L++],i=t[L++],C+=String.fromCharCode((f&15)<<12|(c&63)<<6|(i&63)<<0);break}}return C},n={decodeTextFrame:y},d;function h(){return!d&&typeof self.TextDecoder<"u"&&(d=new self.TextDecoder("utf-8")),d}},"./src/demux/mp3demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/demux/base-audio-demuxer.ts"),_=x("./src/demux/id3.ts"),D=x("./src/utils/logger.ts"),p=x("./src/demux/mpegaudio.ts");function k(m,g){m.prototype=Object.create(g.prototype),m.prototype.constructor=m,S(m,g)}function S(m,g){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,T){return y.__proto__=T,y},S(m,g)}var v=function(m){k(g,m);function g(){return m.apply(this,arguments)||this}var E=g.prototype;return E.resetInitSegment=function(T,l,r,n){m.prototype.resetInitSegment.call(this,T,l,r,n),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:l,duration:n,inputTimeScale:9e4,dropped:0}},g.probe=function(T){if(!T)return!1;for(var l=_.getID3Data(T,0)||[],r=l.length,n=T.length;r<n;r++)if(p.probe(T,r))return D.logger.log("MPEG Audio sync word found !"),!0;return!1},E.canParse=function(T,l){return p.canParse(T,l)},E.appendFrame=function(T,l,r){if(this.basePTS!==null)return p.appendFrame(T,l,r,this.basePTS,this.frameIndex)},g}(w.default);const b=v},"./src/demux/mp4demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/types/demuxer.ts"),D=x("./src/utils/mp4-tools.ts"),p=x("./src/demux/dummy-demuxed-track.ts"),k=/\/emsg[-/]ID3/i,S=function(){function b(g,E){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=E}var m=b.prototype;return m.resetTimeStamp=function(){},m.resetInitSegment=function(E,y,T,l){var r=(0,D.parseInitSegment)(E),n=this.videoTrack=(0,p.dummyTrack)("video",1),d=this.audioTrack=(0,p.dummyTrack)("audio",1),h=this.txtTrack=(0,p.dummyTrack)("text",1);if(this.id3Track=(0,p.dummyTrack)("id3",1),this.timeOffset=0,r.video){var a=r.video,t=a.id,e=a.timescale,o=a.codec;n.id=t,n.timescale=h.timescale=e,n.codec=o}if(r.audio){var s=r.audio,A=s.id,u=s.timescale,f=s.codec;d.id=A,d.timescale=u,d.codec=f}h.id=D.RemuxerTrackIdConfig.text,n.sampleDuration=0,n.duration=d.duration=l},m.resetContiguity=function(){},b.probe=function(E){return E=E.length>16384?E.subarray(0,16384):E,(0,D.findBox)(E,["moof"]).length>0},m.demux=function(E,y){this.timeOffset=y;var T=E,l=this.videoTrack,r=this.txtTrack;if(this.config.progressive){this.remainderData&&(T=(0,D.appendUint8Array)(this.remainderData,E));var n=(0,D.segmentValidRange)(T);this.remainderData=n.remainder,l.samples=n.valid||new Uint8Array}else l.samples=T;var d=this.extractID3Track(l,y);return r.samples=(0,D.parseSamples)(y,l),{videoTrack:l,audioTrack:this.audioTrack,id3Track:d,textTrack:this.txtTrack}},m.flush=function(){var E=this.timeOffset,y=this.videoTrack,T=this.txtTrack;y.samples=this.remainderData||new Uint8Array,this.remainderData=null;var l=this.extractID3Track(y,this.timeOffset);return T.samples=(0,D.parseSamples)(E,y),{videoTrack:y,audioTrack:(0,p.dummyTrack)(),id3Track:l,textTrack:(0,p.dummyTrack)()}},m.extractID3Track=function(E,y){var T=this.id3Track;if(E.samples.length){var l=(0,D.findBox)(E.samples,["emsg"]);l&&l.forEach(function(r){var n=(0,D.parseEmsg)(r);if(k.test(n.schemeIdUri)){var d=(0,w.isFiniteNumber)(n.presentationTime)?n.presentationTime/n.timeScale:y+n.presentationTimeDelta/n.timeScale,h=n.eventDuration===4294967295?Number.POSITIVE_INFINITY:n.eventDuration/n.timeScale;h<=.001&&(h=Number.POSITIVE_INFINITY);var a=n.payload;T.samples.push({data:a,len:a.byteLength,dts:d,pts:d,type:_.MetadataSchema.emsg,duration:h})}})}return T},m.demuxSampleAes=function(E,y,T){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},m.destroy=function(){},b}();const v=S},"./src/demux/mpegaudio.ts":(W,M,x)=>{x.r(M),x.d(M,{appendFrame:()=>S,canParse:()=>g,isHeader:()=>m,isHeaderPattern:()=>b,parseHeader:()=>v,probe:()=>E});var w=null,_=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],D=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],p=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],k=[0,1,1,4];function S(y,T,l,r,n){if(!(l+24>T.length)){var d=v(T,l);if(d&&l+d.frameLength<=T.length){var h=d.samplesPerFrame*9e4/d.sampleRate,a=r+n*h,t={unit:T.subarray(l,l+d.frameLength),pts:a,dts:a};return y.config=[],y.channelCount=d.channelCount,y.samplerate=d.sampleRate,y.samples.push(t),{sample:t,length:d.frameLength,missing:0}}}}function v(y,T){var l=y[T+1]>>3&3,r=y[T+1]>>1&3,n=y[T+2]>>4&15,d=y[T+2]>>2&3;if(l!==1&&n!==0&&n!==15&&d!==3){var h=y[T+2]>>1&1,a=y[T+3]>>6,t=l===3?3-r:r===3?3:4,e=_[t*14+n-1]*1e3,o=l===3?0:l===2?1:2,s=D[o*3+d],A=a===3?1:2,u=p[l][r],f=k[r],c=u*8*f,i=Math.floor(u*e/s+h)*f;if(w===null){var C=navigator.userAgent||"",L=C.match(/Chrome\/(\d+)/i);w=L?parseInt(L[1]):0}var R=!!w&&w<=87;return R&&r===2&&e>=224e3&&a===0&&(y[T+3]=y[T+3]|128),{sampleRate:s,channelCount:A,frameLength:i,samplesPerFrame:c}}}function b(y,T){return y[T]===255&&(y[T+1]&224)===224&&(y[T+1]&6)!==0}function m(y,T){return T+1<y.length&&b(y,T)}function g(y,T){var l=4;return b(y,T)&&l<=y.length-T}function E(y,T){if(T+1<y.length&&b(y,T)){var l=4,r=v(y,T),n=l;r!=null&&r.frameLength&&(n=r.frameLength);var d=T+n;return d===y.length||m(y,d)}return!1}},"./src/demux/sample-aes.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>p});var w=x("./src/crypt/decrypter.ts"),_=x("./src/utils/mp4-tools.ts"),D=function(){function k(v,b,m){this.keyData=void 0,this.decrypter=void 0,this.keyData=m,this.decrypter=new w.default(v,b,{removePKCS7Padding:!1})}var S=k.prototype;return S.decryptBuffer=function(b,m){this.decrypter.decrypt(b,this.keyData.key.buffer,this.keyData.iv.buffer,m)},S.decryptAacSample=function(b,m,g,E){var y=b[m].unit;if(!(y.length<=16)){var T=y.subarray(16,y.length-y.length%16),l=T.buffer.slice(T.byteOffset,T.byteOffset+T.length),r=this;this.decryptBuffer(l,function(n){var d=new Uint8Array(n);y.set(d,16),E||r.decryptAacSamples(b,m+1,g)})}},S.decryptAacSamples=function(b,m,g){for(;;m++){if(m>=b.length){g();return}if(!(b[m].unit.length<32)){var E=this.decrypter.isSync();if(this.decryptAacSample(b,m,g,E),!E)return}}},S.getAvcEncryptedData=function(b){for(var m=Math.floor((b.length-48)/160)*16+16,g=new Int8Array(m),E=0,y=32;y<b.length-16;y+=160,E+=16)g.set(b.subarray(y,y+16),E);return g},S.getAvcDecryptedUnit=function(b,m){for(var g=new Uint8Array(m),E=0,y=32;y<b.length-16;y+=160,E+=16)b.set(g.subarray(E,E+16),y);return b},S.decryptAvcSample=function(b,m,g,E,y,T){var l=(0,_.discardEPB)(y.data),r=this.getAvcEncryptedData(l),n=this;this.decryptBuffer(r.buffer,function(d){y.data=n.getAvcDecryptedUnit(l,d),T||n.decryptAvcSamples(b,m,g+1,E)})},S.decryptAvcSamples=function(b,m,g,E){if(b instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;m++,g=0){if(m>=b.length){E();return}for(var y=b[m].units;!(g>=y.length);g++){var T=y[g];if(!(T.data.length<=48||T.type!==1&&T.type!==5)){var l=this.decrypter.isSync();if(this.decryptAvcSample(b,m,g,E,T,l),!l)return}}}},k}();const p=D},"./src/demux/transmuxer-interface.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>m});var w=x("./src/demux/webworkify-webpack.js"),_=x("./src/events.ts"),D=x("./src/demux/transmuxer.ts"),p=x("./src/utils/logger.ts"),k=x("./src/errors.ts"),S=x("./src/utils/mediasource-helper.ts"),v=x("./node_modules/eventemitter3/index.js"),b=(0,S.getMediaSource)()||{isTypeSupported:function(){return!1}},m=function(){function g(y,T,l,r){var n=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;var d=y.config;this.hls=y,this.id=T,this.useWorker=!!d.enableWorker,this.onTransmuxComplete=l,this.onFlush=r;var h=function(s,A){A=A||{},A.frag=n.frag,A.id=n.id,n.hls.trigger(s,A)};this.observer=new v.EventEmitter,this.observer.on(_.Events.FRAG_DECRYPTED,h),this.observer.on(_.Events.ERROR,h);var a={mp4:b.isTypeSupported("video/mp4"),mpeg:b.isTypeSupported("audio/mpeg"),mp3:b.isTypeSupported('audio/mp4; codecs="mp3"')},t=navigator.vendor;if(this.useWorker&&typeof Worker<"u"){p.logger.log("demuxing in webworker");var e;try{e=this.worker=(0,w.default)("./src/demux/transmuxer-worker.ts"),this.onwmsg=this.onWorkerMessage.bind(this),e.addEventListener("message",this.onwmsg),e.onerror=function(o){n.useWorker=!1,p.logger.warn("Exception in webworker, fallback to inline"),n.hls.trigger(_.Events.ERROR,{type:k.ErrorTypes.OTHER_ERROR,details:k.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:new Error(o.message+"  ("+o.filename+":"+o.lineno+")")})},e.postMessage({cmd:"init",typeSupported:a,vendor:t,id:T,config:JSON.stringify(d)})}catch(o){p.logger.warn("Error in worker:",o),p.logger.error("Error while initializing DemuxerWorker, fallback to inline"),e&&self.URL.revokeObjectURL(e.objectURL),this.transmuxer=new D.default(this.observer,a,d,t,T),this.worker=null}}else this.transmuxer=new D.default(this.observer,a,d,t,T)}var E=g.prototype;return E.destroy=function(){var T=this.worker;if(T)T.removeEventListener("message",this.onwmsg),T.terminate(),this.worker=null,this.onwmsg=void 0;else{var l=this.transmuxer;l&&(l.destroy(),this.transmuxer=null)}var r=this.observer;r&&r.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null},E.push=function(T,l,r,n,d,h,a,t,e,o){var s,A,u=this;e.transmuxing.start=self.performance.now();var f=this.transmuxer,c=this.worker,i=h?h.start:d.start,C=d.decryptdata,L=this.frag,R=!(L&&d.cc===L.cc),B=!(L&&e.level===L.level),O=L?e.sn-L.sn:-1,K=this.part?e.part-this.part.index:-1,G=O===0&&e.id>1&&e.id===(L==null?void 0:L.stats.chunkCount),j=!B&&(O===1||O===0&&(K===1||G&&K<=0)),Y=self.performance.now();(B||O||d.stats.parsing.start===0)&&(d.stats.parsing.start=Y),h&&(K||!j)&&(h.stats.parsing.start=Y);var V=!(L&&((s=d.initSegment)===null||s===void 0?void 0:s.url)===((A=L.initSegment)===null||A===void 0?void 0:A.url)),X=new D.TransmuxState(R,j,t,B,i,V);if(!j||R||V){p.logger.log("[transmuxer-interface, "+d.type+"]: Starting new transmux session for sn: "+e.sn+" p: "+e.part+" level: "+e.level+" id: "+e.id+`
        discontinuity: `+R+`
        trackSwitch: `+B+`
        contiguous: `+j+`
        accurateTimeOffset: `+t+`
        timeOffset: `+i+`
        initSegmentChange: `+V);var Z=new D.TransmuxConfig(r,n,l,a,o);this.configureTransmuxer(Z)}if(this.frag=d,this.part=h,c)c.postMessage({cmd:"demux",data:T,decryptdata:C,chunkMeta:e,state:X},T instanceof ArrayBuffer?[T]:[]);else if(f){var $=f.push(T,C,e,X);(0,D.isPromise)($)?$.then(function(ee){u.handleTransmuxComplete(ee)}):this.handleTransmuxComplete($)}},E.flush=function(T){var l=this;T.transmuxing.start=self.performance.now();var r=this.transmuxer,n=this.worker;if(n)n.postMessage({cmd:"flush",chunkMeta:T});else if(r){var d=r.flush(T);(0,D.isPromise)(d)?d.then(function(h){l.handleFlushResult(h,T)}):this.handleFlushResult(d,T)}},E.handleFlushResult=function(T,l){var r=this;T.forEach(function(n){r.handleTransmuxComplete(n)}),this.onFlush(l)},E.onWorkerMessage=function(T){var l=T.data,r=this.hls;switch(l.event){case"init":{self.URL.revokeObjectURL(this.worker.objectURL);break}case"transmuxComplete":{this.handleTransmuxComplete(l.data);break}case"flush":{this.onFlush(l.data);break}case"workerLog":p.logger[l.data.logType]&&p.logger[l.data.logType](l.data.message);break;default:{l.data=l.data||{},l.data.frag=this.frag,l.data.id=this.id,r.trigger(l.event,l.data);break}}},E.configureTransmuxer=function(T){var l=this.worker,r=this.transmuxer;l?l.postMessage({cmd:"configure",config:T}):r&&r.configure(T)},E.handleTransmuxComplete=function(T){T.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(T)},g}()},"./src/demux/transmuxer-worker.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/demux/transmuxer.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts"),p=x("./node_modules/eventemitter3/index.js");function k(g){var E=new p.EventEmitter,y=function(r,n){g.postMessage({event:r,data:n})};E.on(_.Events.FRAG_DECRYPTED,y),E.on(_.Events.ERROR,y);var T=function(){var r=function(h){var a=function(e){y("workerLog",{logType:h,message:e})};D.logger[h]=a};for(var n in D.logger)r(n)};g.addEventListener("message",function(l){var r=l.data;switch(r.cmd){case"init":{var n=JSON.parse(r.config);g.transmuxer=new w.default(E,r.typeSupported,n,r.vendor,r.id),(0,D.enableLogs)(n.debug,r.id),T(),y("init",null);break}case"configure":{g.transmuxer.configure(r.config);break}case"demux":{var d=g.transmuxer.push(r.data,r.decryptdata,r.chunkMeta,r.state);(0,w.isPromise)(d)?d.then(function(t){S(g,t)}):S(g,d);break}case"flush":{var h=r.chunkMeta,a=g.transmuxer.flush(h);(0,w.isPromise)(a)?a.then(function(t){b(g,t,h)}):b(g,a,h);break}}})}function S(g,E){if(m(E.remuxResult))return!1;var y=[],T=E.remuxResult,l=T.audio,r=T.video;return l&&v(y,l),r&&v(y,r),g.postMessage({event:"transmuxComplete",data:E},y),!0}function v(g,E){E.data1&&g.push(E.data1.buffer),E.data2&&g.push(E.data2.buffer)}function b(g,E,y){var T=E.reduce(function(l,r){return S(g,r)||l},!1);T||g.postMessage({event:"transmuxComplete",data:E[0]}),g.postMessage({event:"flush",data:y})}function m(g){return!g.audio&&!g.video&&!g.text&&!g.id3&&!g.initSegment}},"./src/demux/transmuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{TransmuxConfig:()=>d,TransmuxState:()=>h,default:()=>T,isPromise:()=>n});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/crypt/decrypter.ts"),p=x("./src/demux/aacdemuxer.ts"),k=x("./src/demux/mp4demuxer.ts"),S=x("./src/demux/tsdemuxer.ts"),v=x("./src/demux/mp3demuxer.ts"),b=x("./src/remux/mp4-remuxer.ts"),m=x("./src/remux/passthrough-remuxer.ts"),g=x("./src/utils/logger.ts"),E;try{E=self.performance.now.bind(self.performance)}catch{g.logger.debug("Unable to use Performance API on this environment"),E=self.Date.now}var y=[{demux:S.default,remux:b.default},{demux:k.default,remux:m.default},{demux:p.default,remux:b.default},{demux:v.default,remux:b.default}],T=function(){function a(e,o,s,A,u){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=o,this.config=s,this.vendor=A,this.id=u}var t=a.prototype;return t.configure=function(o){this.transmuxConfig=o,this.decrypter&&this.decrypter.reset()},t.push=function(o,s,A,u){var f=this,c=A.transmuxing;c.executeStart=E();var i=new Uint8Array(o),C=this.config,L=this.currentTransmuxState,R=this.transmuxConfig;u&&(this.currentTransmuxState=u);var B=u||L,O=B.contiguous,K=B.discontinuity,G=B.trackSwitch,j=B.accurateTimeOffset,Y=B.timeOffset,V=B.initSegmentChange,X=R.audioCodec,Z=R.videoCodec,$=R.defaultInitPts,ee=R.duration,ae=R.initSegmentData;(K||G||V)&&this.resetInitSegment(ae,X,Z,ee),(K||V)&&this.resetInitialTimestamp($),O||this.resetContiguity();var ne=l(i,s);if(ne&&ne.method==="AES-128"){var oe=this.getDecrypter();if(C.enableSoftwareAES){var se=oe.softwareDecrypt(i,ne.key.buffer,ne.iv.buffer);if(!se)return c.executeEnd=E(),r(A);i=new Uint8Array(se)}else return this.decryptionPromise=oe.webCryptoDecrypt(i,ne.key.buffer,ne.iv.buffer).then(function(ue){var de=f.push(ue,null,A);return f.decryptionPromise=null,de}),this.decryptionPromise}this.needsProbing(i,K,G)&&this.configureTransmuxer(i,R);var te=this.transmux(i,ne,Y,j,A),ie=this.currentTransmuxState;return ie.contiguous=!0,ie.discontinuity=!1,ie.trackSwitch=!1,c.executeEnd=E(),te},t.flush=function(o){var s=this,A=o.transmuxing;A.executeStart=E();var u=this.decrypter,f=this.currentTransmuxState,c=this.decryptionPromise;if(c)return c.then(function(){return s.flush(o)});var i=[],C=f.timeOffset;if(u){var L=u.flush();L&&i.push(this.push(L,null,o))}var R=this.demuxer,B=this.remuxer;if(!R||!B)return this.observer.emit(w.Events.ERROR,w.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),A.executeEnd=E(),[r(o)];var O=R.flush(C);return n(O)?O.then(function(K){return s.flushRemux(i,K,o),i}):(this.flushRemux(i,O,o),i)},t.flushRemux=function(o,s,A){var u=s.audioTrack,f=s.videoTrack,c=s.id3Track,i=s.textTrack,C=this.currentTransmuxState,L=C.accurateTimeOffset,R=C.timeOffset;g.logger.log("[transmuxer.ts]: Flushed fragment "+A.sn+(A.part>-1?" p: "+A.part:"")+" of level "+A.level);var B=this.remuxer.remux(u,f,c,i,R,L,!0,this.id);o.push({remuxResult:B,chunkMeta:A}),A.transmuxing.executeEnd=E()},t.resetInitialTimestamp=function(o){var s=this.demuxer,A=this.remuxer;!s||!A||(s.resetTimeStamp(o),A.resetTimeStamp(o))},t.resetContiguity=function(){var o=this.demuxer,s=this.remuxer;!o||!s||(o.resetContiguity(),s.resetNextTimestamp())},t.resetInitSegment=function(o,s,A,u){var f=this.demuxer,c=this.remuxer;!f||!c||(f.resetInitSegment(o,s,A,u),c.resetInitSegment(o,s,A))},t.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},t.transmux=function(o,s,A,u,f){var c;return s&&s.method==="SAMPLE-AES"?c=this.transmuxSampleAes(o,s,A,u,f):c=this.transmuxUnencrypted(o,A,u,f),c},t.transmuxUnencrypted=function(o,s,A,u){var f=this.demuxer.demux(o,s,!1,!this.config.progressive),c=f.audioTrack,i=f.videoTrack,C=f.id3Track,L=f.textTrack,R=this.remuxer.remux(c,i,C,L,s,A,!1,this.id);return{remuxResult:R,chunkMeta:u}},t.transmuxSampleAes=function(o,s,A,u,f){var c=this;return this.demuxer.demuxSampleAes(o,s,A).then(function(i){var C=c.remuxer.remux(i.audioTrack,i.videoTrack,i.id3Track,i.textTrack,A,u,!1,c.id);return{remuxResult:C,chunkMeta:f}})},t.configureTransmuxer=function(o,s){for(var A=this.config,u=this.observer,f=this.typeSupported,c=this.vendor,i=s.audioCodec,C=s.defaultInitPts,L=s.duration,R=s.initSegmentData,B=s.videoCodec,O,K=0,G=y.length;K<G;K++)if(y[K].demux.probe(o)){O=y[K];break}O||(g.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),O={demux:k.default,remux:m.default});var j=this.demuxer,Y=this.remuxer,V=O.remux,X=O.demux;(!Y||!(Y instanceof V))&&(this.remuxer=new V(u,A,f,c)),(!j||!(j instanceof X))&&(this.demuxer=new X(u,A,f),this.probe=X.probe),this.resetInitSegment(R,i,B,L),this.resetInitialTimestamp(C)},t.needsProbing=function(o,s,A){return!this.demuxer||!this.remuxer||s||A},t.getDecrypter=function(){var o=this.decrypter;return o||(o=this.decrypter=new D.default(this.observer,this.config)),o},a}();function l(a,t){var e=null;return a.byteLength>0&&t!=null&&t.key!=null&&t.iv!==null&&t.method!=null&&(e=t),e}var r=function(t){return{remuxResult:{},chunkMeta:t}};function n(a){return"then"in a&&a.then instanceof Function}var d=function(t,e,o,s,A){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=o,this.duration=s,this.defaultInitPts=A},h=function(t,e,o,s,A,u){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=o,this.trackSwitch=s,this.timeOffset=A,this.initSegmentChange=u}},"./src/demux/tsdemuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>h});var w=x("./src/demux/adts.ts"),_=x("./src/demux/mpegaudio.ts"),D=x("./src/demux/exp-golomb.ts"),p=x("./src/demux/sample-aes.ts"),k=x("./src/events.ts"),S=x("./src/utils/mp4-tools.ts"),v=x("./src/utils/logger.ts"),b=x("./src/errors.ts"),m=x("./src/types/demuxer.ts");function g(){return g=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},g.apply(this,arguments)}var E=188,y=function(){function a(e,o,s){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=e,this.config=o,this.typeSupported=s}a.probe=function(o){var s=a.syncOffset(o);return s>0&&v.logger.warn("MPEG2-TS detected but first sync word found @ offset "+s),s!==-1},a.syncOffset=function(o){for(var s=Math.min(E*5,o.length-E*2)+1,A=0;A<s;){if(o[A]===71&&o[A+E]===71)return A;A++}return-1},a.createTrack=function(o,s){return{container:o==="video"||o==="audio"?"video/mp2t":void 0,type:o,id:S.RemuxerTrackIdConfig[o],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:o==="audio"?s:void 0}};var t=a.prototype;return t.resetInitSegment=function(o,s,A,u){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=a.createTrack("video"),this._audioTrack=a.createTrack("audio",u),this._id3Track=a.createTrack("id3"),this._txtTrack=a.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=s,this.videoCodec=A,this._duration=u},t.resetTimeStamp=function(){},t.resetContiguity=function(){var o=this._audioTrack,s=this._avcTrack,A=this._id3Track;o&&(o.pesData=null),s&&(s.pesData=null),A&&(A.pesData=null),this.aacOverFlow=null,this.avcSample=null,this.remainderData=null},t.demux=function(o,s,A,u){A===void 0&&(A=!1),u===void 0&&(u=!1),A||(this.sampleAes=null);var f,c=this._avcTrack,i=this._audioTrack,C=this._id3Track,L=this._txtTrack,R=c.pid,B=c.pesData,O=i.pid,K=C.pid,G=i.pesData,j=C.pesData,Y=null,V=this.pmtParsed,X=this._pmtId,Z=o.length;if(this.remainderData&&(o=(0,S.appendUint8Array)(this.remainderData,o),Z=o.length,this.remainderData=null),Z<E&&!u)return this.remainderData=o,{audioTrack:i,videoTrack:c,id3Track:C,textTrack:L};var $=Math.max(0,a.syncOffset(o));Z-=(Z-$)%E,Z<o.byteLength&&!u&&(this.remainderData=new Uint8Array(o.buffer,Z,o.buffer.byteLength-Z));for(var ee=0,ae=$;ae<Z;ae+=E)if(o[ae]===71){var ne=!!(o[ae+1]&64),oe=((o[ae+1]&31)<<8)+o[ae+2],se=(o[ae+3]&48)>>4,te=void 0;if(se>1){if(te=ae+5+o[ae+4],te===ae+E)continue}else te=ae+4;switch(oe){case R:ne&&(B&&(f=n(B))&&this.parseAVCPES(c,L,f,!1),B={data:[],size:0}),B&&(B.data.push(o.subarray(te,ae+E)),B.size+=ae+E-te);break;case O:if(ne){if(G&&(f=n(G)))switch(i.segmentCodec){case"aac":this.parseAACPES(i,f);break;case"mp3":this.parseMPEGPES(i,f);break}G={data:[],size:0}}G&&(G.data.push(o.subarray(te,ae+E)),G.size+=ae+E-te);break;case K:ne&&(j&&(f=n(j))&&this.parseID3PES(C,f),j={data:[],size:0}),j&&(j.data.push(o.subarray(te,ae+E)),j.size+=ae+E-te);break;case 0:ne&&(te+=o[te]+1),X=this._pmtId=l(o,te);break;case X:{ne&&(te+=o[te]+1);var ie=r(o,te,this.typeSupported,A);R=ie.avc,R>0&&(c.pid=R),O=ie.audio,O>0&&(i.pid=O,i.segmentCodec=ie.segmentCodec),K=ie.id3,K>0&&(C.pid=K),Y!==null&&!V&&(v.logger.log("unknown PID '"+Y+"' in TS found"),Y=null,ae=$-188),V=this.pmtParsed=!0;break}case 17:case 8191:break;default:Y=oe;break}}else ee++;ee>0&&this.observer.emit(k.Events.ERROR,k.Events.ERROR,{type:b.ErrorTypes.MEDIA_ERROR,details:b.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+ee+" TS packet/s that do not start with 0x47"}),c.pesData=B,i.pesData=G,C.pesData=j;var ue={audioTrack:i,videoTrack:c,id3Track:C,textTrack:L};return u&&this.extractRemainingSamples(ue),ue},t.flush=function(){var o=this.remainderData;this.remainderData=null;var s;return o?s=this.demux(o,-1,!1,!0):s={videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(s),this.sampleAes?this.decrypt(s,this.sampleAes):s},t.extractRemainingSamples=function(o){var s=o.audioTrack,A=o.videoTrack,u=o.id3Track,f=o.textTrack,c=A.pesData,i=s.pesData,C=u.pesData,L;if(c&&(L=n(c))?(this.parseAVCPES(A,f,L,!0),A.pesData=null):A.pesData=c,i&&(L=n(i))){switch(s.segmentCodec){case"aac":this.parseAACPES(s,L);break;case"mp3":this.parseMPEGPES(s,L);break}s.pesData=null}else i!=null&&i.size&&v.logger.log("last AAC PES packet truncated,might overlap between fragments"),s.pesData=i;C&&(L=n(C))?(this.parseID3PES(u,L),u.pesData=null):u.pesData=C},t.demuxSampleAes=function(o,s,A){var u=this.demux(o,A,!0,!this.config.progressive),f=this.sampleAes=new p.default(this.observer,this.config,s);return this.decrypt(u,f)},t.decrypt=function(o,s){return new Promise(function(A){var u=o.audioTrack,f=o.videoTrack;u.samples&&u.segmentCodec==="aac"?s.decryptAacSamples(u.samples,0,function(){f.samples?s.decryptAvcSamples(f.samples,0,0,function(){A(o)}):A(o)}):f.samples&&s.decryptAvcSamples(f.samples,0,0,function(){A(o)})})},t.destroy=function(){this._duration=0},t.parseAVCPES=function(o,s,A,u){var f=this,c=this.parseAVCNALu(o,A.data),i=this.avcSample,C,L=!1;A.data=null,i&&c.length&&!o.audFound&&(d(i,o),i=this.avcSample=T(!1,A.pts,A.dts,"")),c.forEach(function(R){switch(R.type){case 1:{C=!0,i||(i=f.avcSample=T(!0,A.pts,A.dts,"")),i.frame=!0;var B=R.data;if(L&&B.length>4){var O=new D.default(B).readSliceType();(O===2||O===4||O===7||O===9)&&(i.key=!0)}break}case 5:C=!0,i||(i=f.avcSample=T(!0,A.pts,A.dts,"")),i.key=!0,i.frame=!0;break;case 6:{C=!0,(0,S.parseSEIMessageFromNALu)(R.data,1,A.pts,s.samples);break}case 7:if(C=!0,L=!0,!o.sps){var K=new D.default(R.data),G=K.readSPS();o.width=G.width,o.height=G.height,o.pixelRatio=G.pixelRatio,o.sps=[R.data],o.duration=f._duration;for(var j=R.data.subarray(1,4),Y="avc1.",V=0;V<3;V++){var X=j[V].toString(16);X.length<2&&(X="0"+X),Y+=X}o.codec=Y}break;case 8:C=!0,o.pps||(o.pps=[R.data]);break;case 9:C=!1,o.audFound=!0,i&&d(i,o),i=f.avcSample=T(!1,A.pts,A.dts,"");break;case 12:C=!0;break;default:C=!1,i&&(i.debug+="unknown NAL "+R.type+" ");break}if(i&&C){var Z=i.units;Z.push(R)}}),u&&i&&(d(i,o),this.avcSample=null)},t.getLastNalUnit=function(o){var s,A=this.avcSample,u;if((!A||A.units.length===0)&&(A=o[o.length-1]),(s=A)!==null&&s!==void 0&&s.units){var f=A.units;u=f[f.length-1]}return u},t.parseAVCNALu=function(o,s){var A=s.byteLength,u=o.naluState||0,f=u,c=[],i=0,C,L,R,B=-1,O=0;for(u===-1&&(B=0,O=s[0]&31,u=0,i=1);i<A;){if(C=s[i++],!u){u=C?0:1;continue}if(u===1){u=C?0:2;continue}if(!C)u=3;else if(C===1){if(B>=0){var K={data:s.subarray(B,i-u-1),type:O};c.push(K)}else{var G=this.getLastNalUnit(o.samples);if(G&&(f&&i<=4-f&&G.state&&(G.data=G.data.subarray(0,G.data.byteLength-f)),L=i-u-1,L>0)){var j=new Uint8Array(G.data.byteLength+L);j.set(G.data,0),j.set(s.subarray(0,L),G.data.byteLength),G.data=j,G.state=0}}i<A?(R=s[i]&31,B=i,O=R,u=0):u=-1}else u=0}if(B>=0&&u>=0){var Y={data:s.subarray(B,A),type:O,state:u};c.push(Y)}if(c.length===0){var V=this.getLastNalUnit(o.samples);if(V){var X=new Uint8Array(V.data.byteLength+s.byteLength);X.set(V.data,0),X.set(s,V.data.byteLength),V.data=X}}return o.naluState=u,c},t.parseAACPES=function(o,s){var A=0,u=this.aacOverFlow,f=s.data;if(u){this.aacOverFlow=null;var c=u.missing,i=u.sample.unit.byteLength;if(c===-1){var C=new Uint8Array(i+f.byteLength);C.set(u.sample.unit,0),C.set(f,i),f=C}else{var L=i-c;u.sample.unit.set(f.subarray(0,c),L),o.samples.push(u.sample),A=u.missing}}var R,B;for(R=A,B=f.length;R<B-1&&!w.isHeader(f,R);R++);if(R!==A){var O,K;if(R<B-1?(O="AAC PES did not start with ADTS header,offset:"+R,K=!1):(O="no ADTS header found in AAC PES",K=!0),v.logger.warn("parsing error:"+O),this.observer.emit(k.Events.ERROR,k.Events.ERROR,{type:b.ErrorTypes.MEDIA_ERROR,details:b.ErrorDetails.FRAG_PARSING_ERROR,fatal:K,reason:O}),K)return}w.initTrackConfig(o,this.observer,f,R,this.audioCodec);var G;if(s.pts!==void 0)G=s.pts;else if(u){var j=w.getFrameDuration(o.samplerate);G=u.sample.pts+j}else{v.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}for(var Y=0,V;R<B;)if(V=w.appendFrame(o,f,R,G,Y),R+=V.length,V.missing){this.aacOverFlow=V;break}else for(Y++;R<B-1&&!w.isHeader(f,R);R++);},t.parseMPEGPES=function(o,s){var A=s.data,u=A.length,f=0,c=0,i=s.pts;if(i===void 0){v.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;c<u;)if(_.isHeader(A,c)){var C=_.appendFrame(o,A,c,i,f);if(C)c+=C.length,f++;else break}else c++},t.parseID3PES=function(o,s){if(s.pts===void 0){v.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}var A=g({},s,{type:this._avcTrack?m.MetadataSchema.emsg:m.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});o.samples.push(A)},a}();function T(a,t,e,o){return{key:a,frame:!1,pts:t,dts:e,units:[],debug:o,length:0}}function l(a,t){return(a[t+10]&31)<<8|a[t+11]}function r(a,t,e,o){var s={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},A=(a[t+1]&15)<<8|a[t+2],u=t+3+A-4,f=(a[t+10]&15)<<8|a[t+11];for(t+=12+f;t<u;){var c=(a[t+1]&31)<<8|a[t+2];switch(a[t]){case 207:if(!o){v.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:s.audio===-1&&(s.audio=c);break;case 21:s.id3===-1&&(s.id3=c);break;case 219:if(!o){v.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:s.avc===-1&&(s.avc=c);break;case 3:case 4:e.mpeg!==!0&&e.mp3!==!0?v.logger.log("MPEG audio found, not supported in this browser"):s.audio===-1&&(s.audio=c,s.segmentCodec="mp3");break;case 36:v.logger.warn("Unsupported HEVC stream type found");break}t+=((a[t+3]&15)<<8|a[t+4])+5}return s}function n(a){var t=0,e,o,s,A,u,f=a.data;if(!a||a.size===0)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}e=f[0];var i=(e[0]<<16)+(e[1]<<8)+e[2];if(i===1){if(o=(e[4]<<8)+e[5],o&&o>a.size-6)return null;var C=e[7];C&192&&(A=(e[9]&14)*536870912+(e[10]&255)*4194304+(e[11]&254)*16384+(e[12]&255)*128+(e[13]&254)/2,C&64?(u=(e[14]&14)*536870912+(e[15]&255)*4194304+(e[16]&254)*16384+(e[17]&255)*128+(e[18]&254)/2,A-u>54e5&&(v.logger.warn(Math.round((A-u)/9e4)+"s delta between PTS and DTS, align them"),A=u)):u=A),s=e[8];var L=s+9;if(a.size<=L)return null;a.size-=L;for(var R=new Uint8Array(a.size),B=0,O=f.length;B<O;B++){e=f[B];var K=e.byteLength;if(L)if(L>K){L-=K;continue}else e=e.subarray(L),K-=L,L=0;R.set(e,t),t+=K}return o&&(o-=s+3),{data:R,pts:A,dts:u,len:o}}return null}function d(a,t){if(a.units.length&&a.frame){if(a.pts===void 0){var e=t.samples,o=e.length;if(o){var s=e[o-1];a.pts=s.pts,a.dts=s.dts}else{t.dropped++;return}}t.samples.push(a)}a.debug.length&&v.logger.log(a.pts+"/"+a.dts+":"+a.debug)}const h=y},"./src/demux/webworkify-webpack.js":(W,M,x)=>{x.r(M),x.d(M,{default:()=>E});var w=function(){var T=ENTRY_MODULE,l={},r=function d(h){var a=l[h];if(a!==void 0)return a.exports;var t=l[h]={exports:{}};return T[h].call(t.exports,t,t.exports,d),t.exports};r.m=T,function(){r.n=function(d){var h=d&&d.__esModule?function(){return d.default}:function(){return d};return r.d(h,{a:h}),h}}(),function(){r.d=function(d,h){for(var a in h)r.o(h,a)&&!r.o(d,a)&&Object.defineProperty(d,a,{enumerable:!0,get:h[a]})}}(),function(){r.o=function(d,h){return Object.prototype.hasOwnProperty.call(d,h)}}(),function(){r.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})}}();var n=r(ENTRY_MODULE);return n.default||n},_=w.toString().split("ENTRY_MODULE"),D="[\\.|\\-|\\+|\\w|/|@]+",p="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+D+").*?\\)";function k(y){return(y+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function S(y){return!isNaN(1*y)}function v(y,T,l){var r={};r[l]=[];var n=T.toString().replace(/^"[^"]+"/,"function"),d=n.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)||n.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/);if(!d)return r;for(var h=d[1],a=new RegExp("(\\\\n|\\W)"+k(h)+p,"g"),t;t=a.exec(n);)t[3]!=="dll-reference"&&r[l].push(t[3]);for(a=new RegExp("\\("+k(h)+'\\("(dll-reference\\s('+D+'))"\\)\\)'+p,"g");t=a.exec(n);)y[t[2]]||(r[l].push(t[1]),y[t[2]]=x(t[1]).m),r[t[2]]=r[t[2]]||[],r[t[2]].push(t[4]);for(var e=Object.keys(r),o=0;o<e.length;o++)for(var s=0;s<r[e[o]].length;s++)S(r[e[o]][s])&&(r[e[o]][s]=1*r[e[o]][s]);return r}function b(y){var T=Object.keys(y);return T.reduce(function(l,r){return l||y[r].length>0},!1)}function m(y,T){for(var l={main:[T]},r={main:[]},n={main:{}};b(l);)for(var d=Object.keys(l),h=0;h<d.length;h++){var a=d[h],t=l[a],e=t.pop();if(n[a]=n[a]||{},!(n[a][e]||!y[a][e])){n[a][e]=!0,r[a]=r[a]||[],r[a].push(e);for(var o=v(y,y[a][e],a),s=Object.keys(o),A=0;A<s.length;A++)l[s[A]]=l[s[A]]||[],l[s[A]]=l[s[A]].concat(o[s[A]])}}return r}function g(y,T,l,r){var n=y[r].map(function(d){return'"'+d+'": '+T[r][d].toString().replace(/^"[^"]+"/,"function")}).join(",");return _[0]+"{"+n+"}"+_[1]+'"'+l+'"'+_[2]}function E(y,T){T=T||{};var l={main:x.m},r=T.all?{main:Object.keys(l.main)}:m(l,y),n="";Object.keys(r).filter(function(e){return e!=="main"}).forEach(function(e){for(var o=0;r[e][o];)o++;r[e].push(o),l[e][o]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",n=n+("var "+e+" = ("+g(r,l,o,modules)+`)();
`)}),n=n+("new (("+g(r,l,y,"main")+")())(self);");var d=new window.Blob([n],{type:"text/javascript"}),h=window.URL||window.webkitURL||window.mozURL||window.msURL,a=h.createObjectURL(d),t=new window.Worker(a);return t.objectURL=a,t}},"./src/errors.ts":(W,M,x)=>{x.r(M),x.d(M,{ErrorDetails:()=>_,ErrorTypes:()=>w});var w;(function(D){D.NETWORK_ERROR="networkError",D.MEDIA_ERROR="mediaError",D.KEY_SYSTEM_ERROR="keySystemError",D.MUX_ERROR="muxError",D.OTHER_ERROR="otherError"})(w||(w={}));var _;(function(D){D.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",D.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",D.KEY_SYSTEM_NO_SESSION="keySystemNoSession",D.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",D.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",D.MANIFEST_LOAD_ERROR="manifestLoadError",D.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",D.MANIFEST_PARSING_ERROR="manifestParsingError",D.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",D.LEVEL_EMPTY_ERROR="levelEmptyError",D.LEVEL_LOAD_ERROR="levelLoadError",D.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",D.LEVEL_SWITCH_ERROR="levelSwitchError",D.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",D.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",D.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",D.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",D.FRAG_LOAD_ERROR="fragLoadError",D.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",D.FRAG_DECRYPT_ERROR="fragDecryptError",D.FRAG_PARSING_ERROR="fragParsingError",D.REMUX_ALLOC_ERROR="remuxAllocError",D.KEY_LOAD_ERROR="keyLoadError",D.KEY_LOAD_TIMEOUT="keyLoadTimeOut",D.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",D.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",D.BUFFER_APPEND_ERROR="bufferAppendError",D.BUFFER_APPENDING_ERROR="bufferAppendingError",D.BUFFER_STALLED_ERROR="bufferStalledError",D.BUFFER_FULL_ERROR="bufferFullError",D.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",D.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",D.INTERNAL_EXCEPTION="internalException",D.INTERNAL_ABORTED="aborted",D.UNKNOWN="unknown"})(_||(_={}))},"./src/events.ts":(W,M,x)=>{x.r(M),x.d(M,{Events:()=>w});var w;(function(_){_.MEDIA_ATTACHING="hlsMediaAttaching",_.MEDIA_ATTACHED="hlsMediaAttached",_.MEDIA_DETACHING="hlsMediaDetaching",_.MEDIA_DETACHED="hlsMediaDetached",_.BUFFER_RESET="hlsBufferReset",_.BUFFER_CODECS="hlsBufferCodecs",_.BUFFER_CREATED="hlsBufferCreated",_.BUFFER_APPENDING="hlsBufferAppending",_.BUFFER_APPENDED="hlsBufferAppended",_.BUFFER_EOS="hlsBufferEos",_.BUFFER_FLUSHING="hlsBufferFlushing",_.BUFFER_FLUSHED="hlsBufferFlushed",_.MANIFEST_LOADING="hlsManifestLoading",_.MANIFEST_LOADED="hlsManifestLoaded",_.MANIFEST_PARSED="hlsManifestParsed",_.LEVEL_SWITCHING="hlsLevelSwitching",_.LEVEL_SWITCHED="hlsLevelSwitched",_.LEVEL_LOADING="hlsLevelLoading",_.LEVEL_LOADED="hlsLevelLoaded",_.LEVEL_UPDATED="hlsLevelUpdated",_.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",_.LEVELS_UPDATED="hlsLevelsUpdated",_.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",_.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",_.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",_.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",_.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",_.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",_.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",_.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",_.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",_.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",_.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",_.CUES_PARSED="hlsCuesParsed",_.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",_.INIT_PTS_FOUND="hlsInitPtsFound",_.FRAG_LOADING="hlsFragLoading",_.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",_.FRAG_LOADED="hlsFragLoaded",_.FRAG_DECRYPTED="hlsFragDecrypted",_.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",_.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",_.FRAG_PARSING_METADATA="hlsFragParsingMetadata",_.FRAG_PARSED="hlsFragParsed",_.FRAG_BUFFERED="hlsFragBuffered",_.FRAG_CHANGED="hlsFragChanged",_.FPS_DROP="hlsFpsDrop",_.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",_.ERROR="hlsError",_.DESTROYING="hlsDestroying",_.KEY_LOADING="hlsKeyLoading",_.KEY_LOADED="hlsKeyLoaded",_.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",_.BACK_BUFFER_REACHED="hlsBackBufferReached"})(w||(w={}))},"./src/hls.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>d});var w=x("./node_modules/url-toolkit/src/url-toolkit.js"),_=x("./src/loader/playlist-loader.ts"),D=x("./src/loader/key-loader.ts"),p=x("./src/controller/id3-track-controller.ts"),k=x("./src/controller/latency-controller.ts"),S=x("./src/controller/level-controller.ts"),v=x("./src/controller/fragment-tracker.ts"),b=x("./src/controller/stream-controller.ts"),m=x("./src/is-supported.ts"),g=x("./src/utils/logger.ts"),E=x("./src/config.ts"),y=x("./node_modules/eventemitter3/index.js"),T=x("./src/events.ts"),l=x("./src/errors.ts");function r(h,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(h,e.key,e)}}function n(h,a,t){return a&&r(h.prototype,a),t&&r(h,t),Object.defineProperty(h,"prototype",{writable:!1}),h}var d=function(){h.isSupported=function(){return(0,m.isSupported)()};function h(t){t===void 0&&(t={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new y.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var e=this.config=(0,E.mergeConfig)(h.DefaultConfig,t);this.userConfig=t,(0,g.enableLogs)(e.debug,"Hls instance"),this._autoLevelCapping=-1,e.progressive&&(0,E.enableStreamingMode)(e);var o=e.abrController,s=e.bufferController,A=e.capLevelController,u=e.fpsController,f=this.abrController=new o(this),c=this.bufferController=new s(this),i=this.capLevelController=new A(this),C=new u(this),L=new _.default(this),R=new D.default(this),B=new p.default(this),O=this.levelController=new S.default(this),K=new v.FragmentTracker(this),G=this.streamController=new b.default(this,K);i.setStreamController(G),C.setStreamController(G);var j=[L,R,O,G];this.networkControllers=j;var Y=[f,c,i,C,B,K];this.audioTrackController=this.createController(e.audioTrackController,null,j),this.createController(e.audioStreamController,K,j),this.subtitleTrackController=this.createController(e.subtitleTrackController,null,j),this.createController(e.subtitleStreamController,K,j),this.createController(e.timelineController,null,Y),this.emeController=this.createController(e.emeController,null,Y),this.cmcdController=this.createController(e.cmcdController,null,Y),this.latencyController=this.createController(k.default,null,Y),this.coreComponents=Y}var a=h.prototype;return a.createController=function(e,o,s){if(e){var A=o?new e(this,o):new e(this);return s&&s.push(A),A}return null},a.on=function(e,o,s){s===void 0&&(s=this),this._emitter.on(e,o,s)},a.once=function(e,o,s){s===void 0&&(s=this),this._emitter.once(e,o,s)},a.removeAllListeners=function(e){this._emitter.removeAllListeners(e)},a.off=function(e,o,s,A){s===void 0&&(s=this),this._emitter.off(e,o,s,A)},a.listeners=function(e){return this._emitter.listeners(e)},a.emit=function(e,o,s){return this._emitter.emit(e,o,s)},a.trigger=function(e,o){if(this.config.debug)return this.emit(e,e,o);try{return this.emit(e,e,o)}catch(s){g.logger.error("An internal error happened while handling event "+e+'. Error message: "'+s.message+'". Here is a stacktrace:',s),this.trigger(T.Events.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,error:s})}return!1},a.listenerCount=function(e){return this._emitter.listenerCount(e)},a.destroy=function(){g.logger.log("destroy"),this.trigger(T.Events.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(function(e){return e.destroy()}),this.networkControllers.length=0,this.coreComponents.forEach(function(e){return e.destroy()}),this.coreComponents.length=0},a.attachMedia=function(e){g.logger.log("attachMedia"),this._media=e,this.trigger(T.Events.MEDIA_ATTACHING,{media:e})},a.detachMedia=function(){g.logger.log("detachMedia"),this.trigger(T.Events.MEDIA_DETACHING,void 0),this._media=null},a.loadSource=function(e){this.stopLoad();var o=this.media,s=this.url,A=this.url=w.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});g.logger.log("loadSource:"+A),o&&s&&s!==A&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(o)),this.trigger(T.Events.MANIFEST_LOADING,{url:e})},a.startLoad=function(e){e===void 0&&(e=-1),g.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(o){o.startLoad(e)})},a.stopLoad=function(){g.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})},a.swapAudioCodec=function(){g.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},a.recoverMediaError=function(){g.logger.log("recoverMediaError");var e=this._media;this.detachMedia(),e&&this.attachMedia(e)},a.removeLevel=function(e,o){o===void 0&&(o=0),this.levelController.removeLevel(e,o)},n(h,[{key:"levels",get:function(){var e=this.levelController.levels;return e||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){g.logger.log("set currentLevel:"+e),this.loadLevel=e,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){g.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){g.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){g.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){g.logger.log("set startLevel:"+e),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(e){var o=!!e;o!==this.config.capLevelToPlayerSize&&(o?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=o)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){this._autoLevelCapping!==e&&(g.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e)}},{key:"bandwidthEstimate",get:function(){var e=this.abrController.bwEstimator;return e?e.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var e=this.levels,o=this.config.minAutoBitrate;if(!e)return 0;for(var s=e.length,A=0;A<s;A++)if(e[A].maxBitrate>=o)return A;return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,o=this.autoLevelCapping,s;return o===-1&&e&&e.length?s=e.length-1:s=o,s}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"playingDate",get:function(){return this.streamController.currentProgramDateTime}},{key:"mainForwardBufferInfo",get:function(){return this.streamController.getMainFwdBufferInfo()}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var o=this.audioTrackController;o&&(o.audioTrack=e)}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var o=this.subtitleTrackController;o&&(o.subtitleTrack=e)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return e?e.subtitleDisplay:!1},set:function(e){var o=this.subtitleTrackController;o&&(o.subtitleDisplay=e)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(e){this.config.lowLatencyMode=e}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.2.9"}},{key:"Events",get:function(){return T.Events}},{key:"ErrorTypes",get:function(){return l.ErrorTypes}},{key:"ErrorDetails",get:function(){return l.ErrorDetails}},{key:"DefaultConfig",get:function(){return h.defaultConfig?h.defaultConfig:E.hlsDefaultConfig},set:function(e){h.defaultConfig=e}}]),h}();d.defaultConfig=void 0},"./src/is-supported.ts":(W,M,x)=>{x.r(M),x.d(M,{changeTypeSupported:()=>p,isSupported:()=>D});var w=x("./src/utils/mediasource-helper.ts");function _(){return self.SourceBuffer||self.WebKitSourceBuffer}function D(){var k=(0,w.getMediaSource)();if(!k)return!1;var S=_(),v=k&&typeof k.isTypeSupported=="function"&&k.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),b=!S||S.prototype&&typeof S.prototype.appendBuffer=="function"&&typeof S.prototype.remove=="function";return!!v&&!!b}function p(){var k,S=_();return typeof(S==null||(k=S.prototype)===null||k===void 0?void 0:k.changeType)=="function"}},"./src/loader/date-range.ts":(W,M,x)=>{x.r(M),x.d(M,{DateRange:()=>b,DateRangeAttribute:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/attr-list.ts"),D=x("./src/utils/logger.ts");function p(){return p=Object.assign?Object.assign.bind():function(m){for(var g=1;g<arguments.length;g++){var E=arguments[g];for(var y in E)Object.prototype.hasOwnProperty.call(E,y)&&(m[y]=E[y])}return m},p.apply(this,arguments)}function k(m,g){for(var E=0;E<g.length;E++){var y=g[E];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}function S(m,g,E){return g&&k(m.prototype,g),E&&k(m,E),Object.defineProperty(m,"prototype",{writable:!1}),m}var v;(function(m){m.ID="ID",m.CLASS="CLASS",m.START_DATE="START-DATE",m.DURATION="DURATION",m.END_DATE="END-DATE",m.END_ON_NEXT="END-ON-NEXT",m.PLANNED_DURATION="PLANNED-DURATION",m.SCTE35_OUT="SCTE35-OUT",m.SCTE35_IN="SCTE35-IN"})(v||(v={}));var b=function(){function m(g,E){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,E){var y=E.attr;for(var T in y)if(Object.prototype.hasOwnProperty.call(g,T)&&g[T]!==y[T]){D.logger.warn('DATERANGE tag attribute: "'+T+'" does not match for tags with ID: "'+g.ID+'"'),this._badValueForSameId=T;break}g=p(new _.AttrList({}),y,g)}if(this.attr=g,this._startDate=new Date(g[v.START_DATE]),v.END_DATE in this.attr){var l=new Date(this.attr[v.END_DATE]);(0,w.isFiniteNumber)(l.getTime())&&(this._endDate=l)}}return S(m,[{key:"id",get:function(){return this.attr.ID}},{key:"class",get:function(){return this.attr.CLASS}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){if(this._endDate)return this._endDate;var E=this.duration;return E!==null?new Date(this._startDate.getTime()+E*1e3):null}},{key:"duration",get:function(){if(v.DURATION in this.attr){var E=this.attr.decimalFloatingPoint(v.DURATION);if((0,w.isFiniteNumber)(E))return E}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}},{key:"plannedDuration",get:function(){return v.PLANNED_DURATION in this.attr?this.attr.decimalFloatingPoint(v.PLANNED_DURATION):null}},{key:"endOnNext",get:function(){return this.attr.bool(v.END_ON_NEXT)}},{key:"isValid",get:function(){return!!this.id&&!this._badValueForSameId&&(0,w.isFiniteNumber)(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}]),m}()},"./src/loader/fragment-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{LoadError:()=>T,default:()=>E});var w=x("./src/polyfills/number.ts"),_=x("./src/errors.ts");function D(l,r){l.prototype=Object.create(r.prototype),l.prototype.constructor=l,b(l,r)}function p(l){var r=typeof Map=="function"?new Map:void 0;return p=function(d){if(d===null||!v(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(d))return r.get(d);r.set(d,h)}function h(){return k(d,arguments,m(this).constructor)}return h.prototype=Object.create(d.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),b(h,d)},p(l)}function k(l,r,n){return S()?k=Reflect.construct.bind():k=function(h,a,t){var e=[null];e.push.apply(e,a);var o=Function.bind.apply(h,e),s=new o;return t&&b(s,t.prototype),s},k.apply(null,arguments)}function S(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(l){return Function.toString.call(l).indexOf("[native code]")!==-1}function b(l,r){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,h){return d.__proto__=h,d},b(l,r)}function m(l){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},m(l)}var g=Math.pow(2,17),E=function(){function l(n){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=n}var r=l.prototype;return r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r.abort=function(){this.loader&&this.loader.abort()},r.load=function(d,h){var a=this,t=d.url;if(!t)return Promise.reject(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:d,networkDetails:null},"Fragment does not have a "+(t?"part list":"url")));this.abort();var e=this.config,o=e.fLoader,s=e.loader;return new Promise(function(A,u){a.loader&&a.loader.destroy();var f=a.loader=d.loader=o?new o(e):new s(e),c=y(d),i={timeout:e.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:e.fragLoadingMaxRetryTimeout,highWaterMark:d.sn==="initSegment"?1/0:g};d.stats=f.stats,f.load(c,i,{onSuccess:function(L,R,B,O){a.resetLoader(d,f),A({frag:d,part:null,payload:L.data,networkDetails:O})},onError:function(L,R,B){a.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:d,response:L,networkDetails:B}))},onAbort:function(L,R,B){a.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:d,networkDetails:B}))},onTimeout:function(L,R,B){a.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:d,networkDetails:B}))},onProgress:function(L,R,B,O){h&&h({frag:d,part:null,payload:B,networkDetails:O})}})})},r.loadPart=function(d,h,a){var t=this;this.abort();var e=this.config,o=e.fLoader,s=e.loader;return new Promise(function(A,u){t.loader&&t.loader.destroy();var f=t.loader=d.loader=o?new o(e):new s(e),c=y(d,h),i={timeout:e.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:e.fragLoadingMaxRetryTimeout,highWaterMark:g};h.stats=f.stats,f.load(c,i,{onSuccess:function(L,R,B,O){t.resetLoader(d,f),t.updateStatsFromPart(d,h);var K={frag:d,part:h,payload:L.data,networkDetails:O};a(K),A(K)},onError:function(L,R,B){t.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:d,part:h,response:L,networkDetails:B}))},onAbort:function(L,R,B){d.stats.aborted=h.stats.aborted,t.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:d,part:h,networkDetails:B}))},onTimeout:function(L,R,B){t.resetLoader(d,f),u(new T({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:d,part:h,networkDetails:B}))}})})},r.updateStatsFromPart=function(d,h){var a=d.stats,t=h.stats,e=t.total;if(a.loaded+=t.loaded,e){var o=Math.round(d.duration/h.duration),s=Math.min(Math.round(a.loaded/e),o),A=o-s,u=A*Math.round(a.loaded/s);a.total=a.loaded+u}else a.total=Math.max(a.loaded,a.total);var f=a.loading,c=t.loading;f.start?f.first+=c.first-c.start:(f.start=c.start,f.first=c.first),f.end=c.end},r.resetLoader=function(d,h){d.loader=null,this.loader===h&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),h.destroy()},l}();function y(l,r){r===void 0&&(r=null);var n=r||l,d={frag:l,part:r,responseType:"arraybuffer",url:n.url,headers:{},rangeStart:0,rangeEnd:0},h=n.byteRangeStartOffset,a=n.byteRangeEndOffset;return(0,w.isFiniteNumber)(h)&&(0,w.isFiniteNumber)(a)&&(d.rangeStart=h,d.rangeEnd=a),d}var T=function(l){D(r,l);function r(n){for(var d,h=arguments.length,a=new Array(h>1?h-1:0),t=1;t<h;t++)a[t-1]=arguments[t];return d=l.call.apply(l,[this].concat(a))||this,d.data=void 0,d.data=n,d}return r}(p(Error))},"./src/loader/fragment.ts":(W,M,x)=>{x.r(M),x.d(M,{BaseSegment:()=>E,ElementaryStreamTypes:()=>g,Fragment:()=>y,Part:()=>T});var w=x("./src/polyfills/number.ts"),_=x("./node_modules/url-toolkit/src/url-toolkit.js"),D=x("./src/utils/logger.ts"),p=x("./src/loader/level-key.ts"),k=x("./src/loader/load-stats.ts");function S(l,r){l.prototype=Object.create(r.prototype),l.prototype.constructor=l,v(l,r)}function v(l,r){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,h){return d.__proto__=h,d},v(l,r)}function b(l,r){for(var n=0;n<r.length;n++){var d=r[n];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(l,d.key,d)}}function m(l,r,n){return r&&b(l.prototype,r),n&&b(l,n),Object.defineProperty(l,"prototype",{writable:!1}),l}var g;(function(l){l.AUDIO="audio",l.VIDEO="video",l.AUDIOVIDEO="audiovideo"})(g||(g={}));var E=function(){function l(n){var d;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=(d={},d[g.AUDIO]=null,d[g.VIDEO]=null,d[g.AUDIOVIDEO]=null,d),this.baseurl=n}var r=l.prototype;return r.setByteRange=function(d,h){var a=d.split("@",2),t=[];a.length===1?t[0]=h?h.byteRangeEndOffset:0:t[0]=parseInt(a[1]),t[1]=parseInt(a[0])+t[0],this._byteRange=t},m(l,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=(0,_.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(d){this._url=d}}]),l}(),y=function(l){S(r,l);function r(d,h){var a;return a=l.call(this,h)||this,a._decryptdata=null,a.rawProgramDateTime=null,a.programDateTime=null,a.tagList=[],a.duration=0,a.sn=0,a.levelkey=void 0,a.type=void 0,a.loader=null,a.level=-1,a.cc=0,a.startPTS=void 0,a.endPTS=void 0,a.appendedPTS=void 0,a.startDTS=void 0,a.endDTS=void 0,a.start=0,a.deltaPTS=void 0,a.maxStartPTS=void 0,a.minEndPTS=void 0,a.stats=new k.LoadStats,a.urlId=0,a.data=void 0,a.bitrateTest=!1,a.title=null,a.initSegment=null,a.type=d,a}var n=r.prototype;return n.createInitializationVector=function(h){for(var a=new Uint8Array(16),t=12;t<16;t++)a[t]=h>>8*(15-t)&255;return a},n.setDecryptDataFromLevelKey=function(h,a){var t=h;return(h==null?void 0:h.method)==="AES-128"&&h.uri&&!h.iv&&(t=p.LevelKey.fromURI(h.uri),t.method=h.method,t.iv=this.createInitializationVector(a),t.keyFormat="identity"),t},n.setElementaryStreamInfo=function(h,a,t,e,o,s){s===void 0&&(s=!1);var A=this.elementaryStreams,u=A[h];if(!u){A[h]={startPTS:a,endPTS:t,startDTS:e,endDTS:o,partial:s};return}u.startPTS=Math.min(u.startPTS,a),u.endPTS=Math.max(u.endPTS,t),u.startDTS=Math.min(u.startDTS,e),u.endDTS=Math.max(u.endDTS,o)},n.clearElementaryStreamInfo=function(){var h=this.elementaryStreams;h[g.AUDIO]=null,h[g.VIDEO]=null,h[g.AUDIOVIDEO]=null},m(r,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var h=this.sn;typeof h!="number"&&(this.levelkey&&this.levelkey.method==="AES-128"&&!this.levelkey.iv&&D.logger.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),h=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,h)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(this.programDateTime===null||!(0,w.isFiniteNumber)(this.programDateTime))return null;var h=(0,w.isFiniteNumber)(this.duration)?this.duration:0;return this.programDateTime+h*1e3}},{key:"encrypted",get:function(){var h;return!!((h=this.decryptdata)!==null&&h!==void 0&&h.keyFormat&&this.decryptdata.uri)}}]),r}(E),T=function(l){S(r,l);function r(n,d,h,a,t){var e;e=l.call(this,h)||this,e.fragOffset=0,e.duration=0,e.gap=!1,e.independent=!1,e.relurl=void 0,e.fragment=void 0,e.index=void 0,e.stats=new k.LoadStats,e.duration=n.decimalFloatingPoint("DURATION"),e.gap=n.bool("GAP"),e.independent=n.bool("INDEPENDENT"),e.relurl=n.enumeratedString("URI"),e.fragment=d,e.index=a;var o=n.enumeratedString("BYTERANGE");return o&&e.setByteRange(o,t),t&&(e.fragOffset=t.fragOffset+t.duration),e}return m(r,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var d=this.elementaryStreams;return!!(d.audio||d.video||d.audiovideo)}}]),r}(E)},"./src/loader/key-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>p});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/utils/logger.ts"),p=function(){function k(v){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=v,this.registerListeners()}var S=k.prototype;return S.startLoad=function(b){},S.stopLoad=function(){this.destroyInternalLoaders()},S.registerListeners=function(){this.hls.on(w.Events.KEY_LOADING,this.onKeyLoading,this)},S.unregisterListeners=function(){this.hls.off(w.Events.KEY_LOADING,this.onKeyLoading)},S.destroyInternalLoaders=function(){for(var b in this.loaders){var m=this.loaders[b];m&&m.destroy()}this.loaders={}},S.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},S.onKeyLoading=function(b,m){var g=m.frag,E=g.type,y=this.loaders[E];if(!g.decryptdata){D.logger.warn("Missing decryption data on fragment in onKeyLoading");return}var T=g.decryptdata.uri;if(T!==this.decrypturl||this.decryptkey===null){var l=this.hls.config;if(y&&(D.logger.warn("abort previous key loader for type:"+E),y.abort()),!T){D.logger.warn("key uri is falsy");return}var r=l.loader,n=g.loader=this.loaders[E]=new r(l);this.decrypturl=T,this.decryptkey=null;var d={url:T,frag:g,responseType:"arraybuffer"},h={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout,highWaterMark:0},a={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};n.load(d,h,a)}else this.decryptkey&&(g.decryptdata.key=this.decryptkey,this.hls.trigger(w.Events.KEY_LOADED,{frag:g}))},S.loadsuccess=function(b,m,g){var E=g.frag;if(!E.decryptdata){D.logger.error("after key load, decryptdata unset");return}this.decryptkey=E.decryptdata.key=new Uint8Array(b.data),E.loader=null,delete this.loaders[E.type],this.hls.trigger(w.Events.KEY_LOADED,{frag:E})},S.loaderror=function(b,m){var g=m.frag,E=g.loader;E&&E.abort(),delete this.loaders[g.type],this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:g,response:b})},S.loadtimeout=function(b,m){var g=m.frag,E=g.loader;E&&E.abort(),delete this.loaders[g.type],this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:g})},k}()},"./src/loader/level-details.ts":(W,M,x)=>{x.r(M),x.d(M,{LevelDetails:()=>k});var w=x("./src/polyfills/number.ts");function _(S,v){for(var b=0;b<v.length;b++){var m=v[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(S,m.key,m)}}function D(S,v,b){return v&&_(S.prototype,v),b&&_(S,b),Object.defineProperty(S,"prototype",{writable:!1}),S}var p=10,k=function(){function S(b){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.dateRanges={},this.url=b}var v=S.prototype;return v.reloaded=function(m){if(!m){this.advanced=!0,this.updated=!0;return}var g=this.lastPartSn-m.lastPartSn,E=this.lastPartIndex-m.lastPartIndex;this.updated=this.endSN!==m.endSN||!!E||!!g,this.advanced=this.endSN>m.endSN||g>0||g===0&&E>0,this.updated||this.advanced?this.misses=Math.floor(m.misses*.6):this.misses=m.misses+1,this.availabilityDelay=m.availabilityDelay},D(S,[{key:"hasProgramDateTime",get:function(){return this.fragments.length?(0,w.isFiniteNumber)(this.fragments[this.fragments.length-1].programDateTime):!1}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||p}},{key:"drift",get:function(){var m=this.driftEndTime-this.driftStartTime;if(m>0){var g=this.driftEnd-this.driftStart;return g*1e3/m}return 1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var m;return(m=this.fragments)!==null&&m!==void 0&&m.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),S}()},"./src/loader/level-key.ts":(W,M,x)=>{x.r(M),x.d(M,{LevelKey:()=>p});var w=x("./node_modules/url-toolkit/src/url-toolkit.js");function _(k,S){for(var v=0;v<S.length;v++){var b=S[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(k,b.key,b)}}function D(k,S,v){return S&&_(k.prototype,S),v&&_(k,v),Object.defineProperty(k,"prototype",{writable:!1}),k}var p=function(){k.fromURL=function(v,b){return new k(v,b)},k.fromURI=function(v){return new k(v)};function k(S,v){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,v?this._uri=(0,w.buildAbsoluteURL)(S,v,{alwaysNormalize:!0}):this._uri=S}return D(k,[{key:"uri",get:function(){return this._uri}}]),k}()},"./src/loader/load-stats.ts":(W,M,x)=>{x.r(M),x.d(M,{LoadStats:()=>w});var w=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},"./src/loader/m3u8-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>n});var w=x("./src/polyfills/number.ts"),_=x("./node_modules/url-toolkit/src/url-toolkit.js"),D=x("./src/loader/date-range.ts"),p=x("./src/loader/fragment.ts"),k=x("./src/loader/level-details.ts"),S=x("./src/loader/level-key.ts"),v=x("./src/utils/attr-list.ts"),b=x("./src/utils/logger.ts"),m=x("./src/utils/codecs.ts"),g=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,E=/#EXT-X-MEDIA:(.*)/g,y=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),T=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),l=/\.(mp4|m4s|m4v|m4a)$/i;function r(o){var s,A;return l.test((s=(A=_.parseURL(o))===null||A===void 0?void 0:A.path)!=null?s:"")}var n=function(){function o(){}return o.findGroup=function(A,u){for(var f=0;f<A.length;f++){var c=A[f];if(c.id===u)return c}},o.convertAVC1ToAVCOTI=function(A){var u=A.split(".");if(u.length>2){var f=u.shift()+".";return f+=parseInt(u.shift()).toString(16),f+=("000"+parseInt(u.shift()).toString(16)).slice(-4),f}return A},o.resolve=function(A,u){return _.buildAbsoluteURL(u,A,{alwaysNormalize:!0})},o.parseMasterPlaylist=function(A,u){var f=[],c=[],i={},C=!1;g.lastIndex=0;for(var L;(L=g.exec(A))!=null;)if(L[1]){var R,B=new v.AttrList(L[1]),O={attrs:B,bitrate:B.decimalInteger("AVERAGE-BANDWIDTH")||B.decimalInteger("BANDWIDTH"),name:B.NAME,url:o.resolve(L[2],u)},K=B.decimalResolution("RESOLUTION");K&&(O.width=K.width,O.height=K.height),d((B.CODECS||"").split(/[ ,]+/).filter(function(Y){return Y}),O),O.videoCodec&&O.videoCodec.indexOf("avc1")!==-1&&(O.videoCodec=o.convertAVC1ToAVCOTI(O.videoCodec)),(R=O.unknownCodecs)!==null&&R!==void 0&&R.length||c.push(O),f.push(O)}else if(L[3]){var G=new v.AttrList(L[3]);G["DATA-ID"]&&(C=!0,i[G["DATA-ID"]]=G)}var j=c.length>0&&c.length<f.length;return{levels:j?c:f,sessionData:C?i:null}},o.parseMasterPlaylistMedia=function(A,u,f,c){c===void 0&&(c=[]);var i,C=[],L=0;for(E.lastIndex=0;(i=E.exec(A))!==null;){var R=new v.AttrList(i[1]);if(R.TYPE===f){var B={attrs:R,bitrate:0,id:L++,groupId:R["GROUP-ID"],instreamId:R["INSTREAM-ID"],name:R.NAME||R.LANGUAGE||"",type:f,default:R.bool("DEFAULT"),autoselect:R.bool("AUTOSELECT"),forced:R.bool("FORCED"),lang:R.LANGUAGE,url:R.URI?o.resolve(R.URI,u):""};if(c.length){var O=o.findGroup(c,B.groupId)||c[0];h(B,O,"audioCodec"),h(B,O,"textCodec")}C.push(B)}}return C},o.parseLevelPlaylist=function(A,u,f,c,i){var C=new k.LevelDetails(u),L=C.fragments,R=null,B=0,O=0,K=0,G=0,j=null,Y=new p.Fragment(c,u),V,X,Z,$=-1,ee=!1;for(y.lastIndex=0,C.m3u8=A;(V=y.exec(A))!==null;){ee&&(ee=!1,Y=new p.Fragment(c,u),Y.start=K,Y.sn=B,Y.cc=G,Y.level=f,R&&(Y.initSegment=R,Y.rawProgramDateTime=R.rawProgramDateTime,R.rawProgramDateTime=null));var ae=V[1];if(ae){Y.duration=parseFloat(ae);var ne=(" "+V[2]).slice(1);Y.title=ne||null,Y.tagList.push(ne?["INF",ae,ne]:["INF",ae])}else if(V[3])(0,w.isFiniteNumber)(Y.duration)&&(Y.start=K,Z&&(Y.levelkey=Z),Y.sn=B,Y.level=f,Y.cc=G,Y.urlId=i,L.push(Y),Y.relurl=(" "+V[3]).slice(1),t(Y,j),j=Y,K+=Y.duration,B++,O=0,ee=!0);else if(V[4]){var oe=(" "+V[4]).slice(1);j?Y.setByteRange(oe,j):Y.setByteRange(oe)}else if(V[5])Y.rawProgramDateTime=(" "+V[5]).slice(1),Y.tagList.push(["PROGRAM-DATE-TIME",Y.rawProgramDateTime]),$===-1&&($=L.length);else{if(V=V[0].match(T),!V){b.logger.warn("No matches on slow regex match for level playlist!");continue}for(X=1;X<V.length&&!(typeof V[X]<"u");X++);var se=(" "+V[X]).slice(1),te=(" "+V[X+1]).slice(1),ie=V[X+2]?(" "+V[X+2]).slice(1):"";switch(se){case"PLAYLIST-TYPE":C.type=te.toUpperCase();break;case"MEDIA-SEQUENCE":B=C.startSN=parseInt(te);break;case"SKIP":{var ue=new v.AttrList(te),de=ue.decimalInteger("SKIPPED-SEGMENTS");if((0,w.isFiniteNumber)(de)){C.skippedSegments=de;for(var ce=de;ce--;)L.unshift(null);B+=de}var be=ue.enumeratedString("RECENTLY-REMOVED-DATERANGES");be&&(C.recentlyRemovedDateranges=be.split("	"));break}case"TARGETDURATION":C.targetduration=parseFloat(te);break;case"VERSION":C.version=parseInt(te);break;case"EXTM3U":break;case"ENDLIST":C.live=!1;break;case"#":(te||ie)&&Y.tagList.push(ie?[te,ie]:[te]);break;case"DISCONTINUITY":G++,Y.tagList.push(["DIS"]);break;case"GAP":Y.tagList.push([se]);break;case"BITRATE":Y.tagList.push([se,te]);break;case"DATERANGE":{var he=new v.AttrList(te),Le=new D.DateRange(he,C.dateRanges[he.ID]);Le.isValid||C.skippedSegments?C.dateRanges[Le.id]=Le:b.logger.warn('Ignoring invalid DATERANGE tag: "'+te+'"'),Y.tagList.push(["EXT-X-DATERANGE",te]);break}case"DISCONTINUITY-SEQUENCE":G=parseInt(te);break;case"KEY":{var xe,ye=new v.AttrList(te),Se=ye.enumeratedString("METHOD"),De=ye.URI,Re=ye.hexadecimalInteger("IV"),ke=ye.enumeratedString("KEYFORMATVERSIONS"),Ie=ye.enumeratedString("KEYID"),Oe=(xe=ye.enumeratedString("KEYFORMAT"))!=null?xe:"identity",we=["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"];if(we.indexOf(Oe)>-1){b.logger.warn("Keyformat "+Oe+" is not supported from the manifest");continue}else if(Oe!=="identity")continue;Se&&(Z=S.LevelKey.fromURL(u,De),De&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(Se)>=0&&(Z.method=Se,Z.keyFormat=Oe,Ie&&(Z.keyID=Ie),ke&&(Z.keyFormatVersions=ke),Z.iv=Re));break}case"START":{var Ne=new v.AttrList(te),Ae=Ne.decimalFloatingPoint("TIME-OFFSET");(0,w.isFiniteNumber)(Ae)&&(C.startTimeOffset=Ae);break}case"MAP":{var Ce=new v.AttrList(te);if(Y.duration){var Pe=new p.Fragment(c,u);e(Pe,Ce,f,Z),R=Pe,Y.initSegment=R,R.rawProgramDateTime&&!Y.rawProgramDateTime&&(Y.rawProgramDateTime=R.rawProgramDateTime)}else e(Y,Ce,f,Z),R=Y,ee=!0;break}case"SERVER-CONTROL":{var me=new v.AttrList(te);C.canBlockReload=me.bool("CAN-BLOCK-RELOAD"),C.canSkipUntil=me.optionalFloat("CAN-SKIP-UNTIL",0),C.canSkipDateRanges=C.canSkipUntil>0&&me.bool("CAN-SKIP-DATERANGES"),C.partHoldBack=me.optionalFloat("PART-HOLD-BACK",0),C.holdBack=me.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{var Te=new v.AttrList(te);C.partTarget=Te.decimalFloatingPoint("PART-TARGET");break}case"PART":{var ve=C.partList;ve||(ve=C.partList=[]);var je=O>0?ve[ve.length-1]:void 0,ze=O++,Ye=new p.Part(new v.AttrList(te),Y,u,ze,je);ve.push(Ye),Y.duration+=Ye.duration;break}case"PRELOAD-HINT":{var Fe=new v.AttrList(te);C.preloadHint=Fe;break}case"RENDITION-REPORT":{var rt=new v.AttrList(te);C.renditionReports=C.renditionReports||[],C.renditionReports.push(rt);break}default:b.logger.warn("line parsed but not handled: "+V);break}}}j&&!j.relurl?(L.pop(),K-=j.duration,C.partList&&(C.fragmentHint=j)):C.partList&&(t(Y,j),Y.cc=G,C.fragmentHint=Y);var Ke=L.length,We=L[0],qe=L[Ke-1];if(K+=C.skippedSegments*C.targetduration,K>0&&Ke&&qe){C.averagetargetduration=K/Ke;var Ve=qe.sn;C.endSN=Ve!=="initSegment"?Ve:0,We&&(C.startCC=We.cc,We.initSegment||C.fragments.every(function(at){return at.relurl&&r(at.relurl)})&&(b.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),Y=new p.Fragment(c,u),Y.relurl=qe.relurl,Y.level=f,Y.sn="initSegment",We.initSegment=Y,C.needSidxRanges=!0))}else C.endSN=0,C.startCC=0;return C.fragmentHint&&(K+=C.fragmentHint.duration),C.totalduration=K,C.endCC=G,$>0&&a(L,$),C},o}();function d(o,s){["video","audio","text"].forEach(function(A){var u=o.filter(function(c){return(0,m.isCodecType)(c,A)});if(u.length){var f=u.filter(function(c){return c.lastIndexOf("avc1",0)===0||c.lastIndexOf("mp4a",0)===0});s[A+"Codec"]=f.length>0?f[0]:u[0],o=o.filter(function(c){return u.indexOf(c)===-1})}}),s.unknownCodecs=o}function h(o,s,A){var u=s[A];u&&(o[A]=u)}function a(o,s){for(var A=o[s],u=s;u--;){var f=o[u];if(!f)return;f.programDateTime=A.programDateTime-f.duration*1e3,A=f}}function t(o,s){o.rawProgramDateTime?o.programDateTime=Date.parse(o.rawProgramDateTime):s!=null&&s.programDateTime&&(o.programDateTime=s.endProgramDateTime),(0,w.isFiniteNumber)(o.programDateTime)||(o.programDateTime=null,o.rawProgramDateTime=null)}function e(o,s,A,u){o.relurl=s.URI,s.BYTERANGE&&o.setByteRange(s.BYTERANGE),o.level=A,o.sn="initSegment",u&&(o.levelkey=u),o.initSegment=null}},"./src/loader/playlist-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/errors.ts"),p=x("./src/utils/logger.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/loader/m3u8-parser.ts"),v=x("./src/types/loader.ts"),b=x("./src/utils/attr-list.ts");function m(T){var l=T.type;switch(l){case v.PlaylistContextType.AUDIO_TRACK:return v.PlaylistLevelType.AUDIO;case v.PlaylistContextType.SUBTITLE_TRACK:return v.PlaylistLevelType.SUBTITLE;default:return v.PlaylistLevelType.MAIN}}function g(T,l){var r=T.url;return(r===void 0||r.indexOf("data:")===0)&&(r=l.url),r}var E=function(){function T(r){this.hls=void 0,this.loaders=Object.create(null),this.hls=r,this.registerListeners()}var l=T.prototype;return l.startLoad=function(n){},l.stopLoad=function(){this.destroyInternalLoaders()},l.registerListeners=function(){var n=this.hls;n.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.on(_.Events.LEVEL_LOADING,this.onLevelLoading,this),n.on(_.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),n.on(_.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},l.unregisterListeners=function(){var n=this.hls;n.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.off(_.Events.LEVEL_LOADING,this.onLevelLoading,this),n.off(_.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),n.off(_.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},l.createInternalLoader=function(n){var d=this.hls.config,h=d.pLoader,a=d.loader,t=h||a,e=new t(d);return n.loader=e,this.loaders[n.type]=e,e},l.getInternalLoader=function(n){return this.loaders[n.type]},l.resetInternalLoader=function(n){this.loaders[n]&&delete this.loaders[n]},l.destroyInternalLoaders=function(){for(var n in this.loaders){var d=this.loaders[n];d&&d.destroy(),this.resetInternalLoader(n)}},l.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},l.onManifestLoading=function(n,d){var h=d.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:v.PlaylistContextType.MANIFEST,url:h,deliveryDirectives:null})},l.onLevelLoading=function(n,d){var h=d.id,a=d.level,t=d.url,e=d.deliveryDirectives;this.load({id:h,groupId:null,level:a,responseType:"text",type:v.PlaylistContextType.LEVEL,url:t,deliveryDirectives:e})},l.onAudioTrackLoading=function(n,d){var h=d.id,a=d.groupId,t=d.url,e=d.deliveryDirectives;this.load({id:h,groupId:a,level:null,responseType:"text",type:v.PlaylistContextType.AUDIO_TRACK,url:t,deliveryDirectives:e})},l.onSubtitleTrackLoading=function(n,d){var h=d.id,a=d.groupId,t=d.url,e=d.deliveryDirectives;this.load({id:h,groupId:a,level:null,responseType:"text",type:v.PlaylistContextType.SUBTITLE_TRACK,url:t,deliveryDirectives:e})},l.load=function(n){var d,h=this.hls.config,a=this.getInternalLoader(n);if(a){var t=a.context;if(t&&t.url===n.url){p.logger.trace("[playlist-loader]: playlist request ongoing");return}p.logger.log("[playlist-loader]: aborting previous loader for type: "+n.type),a.abort()}var e,o,s,A;switch(n.type){case v.PlaylistContextType.MANIFEST:e=h.manifestLoadingMaxRetry,o=h.manifestLoadingTimeOut,s=h.manifestLoadingRetryDelay,A=h.manifestLoadingMaxRetryTimeout;break;case v.PlaylistContextType.LEVEL:case v.PlaylistContextType.AUDIO_TRACK:case v.PlaylistContextType.SUBTITLE_TRACK:e=0,o=h.levelLoadingTimeOut;break;default:e=h.levelLoadingMaxRetry,o=h.levelLoadingTimeOut,s=h.levelLoadingRetryDelay,A=h.levelLoadingMaxRetryTimeout;break}if(a=this.createInternalLoader(n),(d=n.deliveryDirectives)!==null&&d!==void 0&&d.part){var u;if(n.type===v.PlaylistContextType.LEVEL&&n.level!==null?u=this.hls.levels[n.level].details:n.type===v.PlaylistContextType.AUDIO_TRACK&&n.id!==null?u=this.hls.audioTracks[n.id].details:n.type===v.PlaylistContextType.SUBTITLE_TRACK&&n.id!==null&&(u=this.hls.subtitleTracks[n.id].details),u){var f=u.partTarget,c=u.targetduration;f&&c&&(o=Math.min(Math.max(f*3,c*.8)*1e3,o))}}var i={timeout:o,maxRetry:e,retryDelay:s,maxRetryDelay:A,highWaterMark:0},C={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};a.load(n,i,C)},l.loadsuccess=function(n,d,h,a){if(a===void 0&&(a=null),h.isSidxRequest){this.handleSidxRequest(n,h),this.handlePlaylistLoaded(n,d,h,a);return}this.resetInternalLoader(h.type);var t=n.data;if(t.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(n,h,"no EXTM3U delimiter",a);return}d.parsing.start=performance.now(),t.indexOf("#EXTINF:")>0||t.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(n,d,h,a):this.handleMasterPlaylist(n,d,h,a)},l.loaderror=function(n,d,h){h===void 0&&(h=null),this.handleNetworkError(d,h,!1,n)},l.loadtimeout=function(n,d,h){h===void 0&&(h=null),this.handleNetworkError(d,h,!0)},l.handleMasterPlaylist=function(n,d,h,a){var t=this.hls,e=n.data,o=g(n,h),s=S.default.parseMasterPlaylist(e,o),A=s.levels,u=s.sessionData;if(!A.length){this.handleManifestParsingError(n,h,"no level found in manifest",a);return}var f=A.map(function(B){return{id:B.attrs.AUDIO,audioCodec:B.audioCodec}}),c=A.map(function(B){return{id:B.attrs.SUBTITLES,textCodec:B.textCodec}}),i=S.default.parseMasterPlaylistMedia(e,o,"AUDIO",f),C=S.default.parseMasterPlaylistMedia(e,o,"SUBTITLES",c),L=S.default.parseMasterPlaylistMedia(e,o,"CLOSED-CAPTIONS");if(i.length){var R=i.some(function(B){return!B.url});!R&&A[0].audioCodec&&!A[0].attrs.AUDIO&&(p.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),i.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new b.AttrList({}),bitrate:0,url:""}))}t.trigger(_.Events.MANIFEST_LOADED,{levels:A,audioTracks:i,subtitles:C,captions:L,url:o,stats:d,networkDetails:a,sessionData:u})},l.handleTrackOrLevelPlaylist=function(n,d,h,a){var t=this.hls,e=h.id,o=h.level,s=h.type,A=g(n,h),u=(0,w.isFiniteNumber)(e)?e:0,f=(0,w.isFiniteNumber)(o)?o:u,c=m(h),i=S.default.parseLevelPlaylist(n.data,A,f,c,u);if(!i.fragments.length){t.trigger(_.Events.ERROR,{type:D.ErrorTypes.NETWORK_ERROR,details:D.ErrorDetails.LEVEL_EMPTY_ERROR,fatal:!1,url:A,reason:"no fragments found in level",level:typeof h.level=="number"?h.level:void 0});return}if(s===v.PlaylistContextType.MANIFEST){var C={attrs:new b.AttrList({}),bitrate:0,details:i,name:"",url:A};t.trigger(_.Events.MANIFEST_LOADED,{levels:[C],audioTracks:[],url:A,stats:d,networkDetails:a,sessionData:null})}if(d.parsing.end=performance.now(),i.needSidxRanges){var L,R=(L=i.fragments[0].initSegment)===null||L===void 0?void 0:L.url;this.load({url:R,isSidxRequest:!0,type:s,level:o,levelDetails:i,id:e,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null});return}h.levelDetails=i,this.handlePlaylistLoaded(n,d,h,a)},l.handleSidxRequest=function(n,d){var h=new Uint8Array(n.data),a=(0,k.findBox)(h,["sidx"])[0];if(!!a){var t=(0,k.parseSegmentIndex)(a);if(!!t){var e=t.references,o=d.levelDetails;e.forEach(function(s,A){var u=s.info,f=o.fragments[A];if(f.byteRange.length===0&&f.setByteRange(String(1+u.end-u.start)+"@"+String(u.start)),f.initSegment){var c=(0,k.findBox)(h,["moov"])[0],i=c?c.length:null;f.initSegment.setByteRange(String(i)+"@0")}})}}},l.handleManifestParsingError=function(n,d,h,a){this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.NETWORK_ERROR,details:D.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:d.type===v.PlaylistContextType.MANIFEST,url:n.url,reason:h,response:n,context:d,networkDetails:a})},l.handleNetworkError=function(n,d,h,a){h===void 0&&(h=!1),p.logger.warn("[playlist-loader]: A network "+(h?"timeout":"error")+" occurred while loading "+n.type+" level: "+n.level+" id: "+n.id+' group-id: "'+n.groupId+'"');var t=D.ErrorDetails.UNKNOWN,e=!1,o=this.getInternalLoader(n);switch(n.type){case v.PlaylistContextType.MANIFEST:t=h?D.ErrorDetails.MANIFEST_LOAD_TIMEOUT:D.ErrorDetails.MANIFEST_LOAD_ERROR,e=!0;break;case v.PlaylistContextType.LEVEL:t=h?D.ErrorDetails.LEVEL_LOAD_TIMEOUT:D.ErrorDetails.LEVEL_LOAD_ERROR,e=!1;break;case v.PlaylistContextType.AUDIO_TRACK:t=h?D.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:D.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,e=!1;break;case v.PlaylistContextType.SUBTITLE_TRACK:t=h?D.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:D.ErrorDetails.SUBTITLE_LOAD_ERROR,e=!1;break}o&&this.resetInternalLoader(n.type);var s={type:D.ErrorTypes.NETWORK_ERROR,details:t,fatal:e,url:n.url,loader:o,context:n,networkDetails:d};a&&(s.response=a),this.hls.trigger(_.Events.ERROR,s)},l.handlePlaylistLoaded=function(n,d,h,a){var t=h.type,e=h.level,o=h.id,s=h.groupId,A=h.loader,u=h.levelDetails,f=h.deliveryDirectives;if(!(u!=null&&u.targetduration)){this.handleManifestParsingError(n,h,"invalid target duration",a);return}if(!!A)switch(u.live&&(A.getCacheAge&&(u.ageHeader=A.getCacheAge()||0),(!A.getCacheAge||isNaN(u.ageHeader))&&(u.ageHeader=0)),t){case v.PlaylistContextType.MANIFEST:case v.PlaylistContextType.LEVEL:this.hls.trigger(_.Events.LEVEL_LOADED,{details:u,level:e||0,id:o||0,stats:d,networkDetails:a,deliveryDirectives:f});break;case v.PlaylistContextType.AUDIO_TRACK:this.hls.trigger(_.Events.AUDIO_TRACK_LOADED,{details:u,id:o||0,groupId:s||"",stats:d,networkDetails:a,deliveryDirectives:f});break;case v.PlaylistContextType.SUBTITLE_TRACK:this.hls.trigger(_.Events.SUBTITLE_TRACK_LOADED,{details:u,id:o||0,groupId:s||"",stats:d,networkDetails:a,deliveryDirectives:f});break}},T}();const y=E},"./src/polyfills/number.ts":(W,M,x)=>{x.r(M),x.d(M,{MAX_SAFE_INTEGER:()=>_,isFiniteNumber:()=>w});var w=Number.isFinite||function(D){return typeof D=="number"&&isFinite(D)},_=Number.MAX_SAFE_INTEGER||9007199254740991},"./src/remux/aac-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=function(){function D(){}return D.getSilentFrame=function(k,S){switch(k){case"mp4a.40.2":if(S===1)return new Uint8Array([0,200,0,128,35,128]);if(S===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(S===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(S===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(S===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(S===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(S===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(S===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(S===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}},D}();const _=w},"./src/remux/mp4-generator.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=Math.pow(2,32)-1,_=function(){function p(){}return p.init=function(){p.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var S;for(S in p.types)p.types.hasOwnProperty(S)&&(p.types[S]=[S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2),S.charCodeAt(3)]);var v=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),b=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);p.HDLR_TYPES={video:v,audio:b};var m=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),g=new Uint8Array([0,0,0,0,0,0,0,0]);p.STTS=p.STSC=p.STCO=g,p.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),p.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),p.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),p.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var E=new Uint8Array([105,115,111,109]),y=new Uint8Array([97,118,99,49]),T=new Uint8Array([0,0,0,1]);p.FTYP=p.box(p.types.ftyp,E,T,E,y),p.DINF=p.box(p.types.dinf,p.box(p.types.dref,m))},p.box=function(S){for(var v=8,b=arguments.length,m=new Array(b>1?b-1:0),g=1;g<b;g++)m[g-1]=arguments[g];for(var E=m.length,y=E;E--;)v+=m[E].byteLength;var T=new Uint8Array(v);for(T[0]=v>>24&255,T[1]=v>>16&255,T[2]=v>>8&255,T[3]=v&255,T.set(S,4),E=0,v=8;E<y;E++)T.set(m[E],v),v+=m[E].byteLength;return T},p.hdlr=function(S){return p.box(p.types.hdlr,p.HDLR_TYPES[S])},p.mdat=function(S){return p.box(p.types.mdat,S)},p.mdhd=function(S,v){v*=S;var b=Math.floor(v/(w+1)),m=Math.floor(v%(w+1));return p.box(p.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,S>>24&255,S>>16&255,S>>8&255,S&255,b>>24,b>>16&255,b>>8&255,b&255,m>>24,m>>16&255,m>>8&255,m&255,85,196,0,0]))},p.mdia=function(S){return p.box(p.types.mdia,p.mdhd(S.timescale,S.duration),p.hdlr(S.type),p.minf(S))},p.mfhd=function(S){return p.box(p.types.mfhd,new Uint8Array([0,0,0,0,S>>24,S>>16&255,S>>8&255,S&255]))},p.minf=function(S){return S.type==="audio"?p.box(p.types.minf,p.box(p.types.smhd,p.SMHD),p.DINF,p.stbl(S)):p.box(p.types.minf,p.box(p.types.vmhd,p.VMHD),p.DINF,p.stbl(S))},p.moof=function(S,v,b){return p.box(p.types.moof,p.mfhd(S),p.traf(b,v))},p.moov=function(S){for(var v=S.length,b=[];v--;)b[v]=p.trak(S[v]);return p.box.apply(null,[p.types.moov,p.mvhd(S[0].timescale,S[0].duration)].concat(b).concat(p.mvex(S)))},p.mvex=function(S){for(var v=S.length,b=[];v--;)b[v]=p.trex(S[v]);return p.box.apply(null,[p.types.mvex].concat(b))},p.mvhd=function(S,v){v*=S;var b=Math.floor(v/(w+1)),m=Math.floor(v%(w+1)),g=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,S>>24&255,S>>16&255,S>>8&255,S&255,b>>24,b>>16&255,b>>8&255,b&255,m>>24,m>>16&255,m>>8&255,m&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return p.box(p.types.mvhd,g)},p.sdtp=function(S){var v=S.samples||[],b=new Uint8Array(4+v.length),m,g;for(m=0;m<v.length;m++)g=v[m].flags,b[m+4]=g.dependsOn<<4|g.isDependedOn<<2|g.hasRedundancy;return p.box(p.types.sdtp,b)},p.stbl=function(S){return p.box(p.types.stbl,p.stsd(S),p.box(p.types.stts,p.STTS),p.box(p.types.stsc,p.STSC),p.box(p.types.stsz,p.STSZ),p.box(p.types.stco,p.STCO))},p.avc1=function(S){var v=[],b=[],m,g,E;for(m=0;m<S.sps.length;m++)g=S.sps[m],E=g.byteLength,v.push(E>>>8&255),v.push(E&255),v=v.concat(Array.prototype.slice.call(g));for(m=0;m<S.pps.length;m++)g=S.pps[m],E=g.byteLength,b.push(E>>>8&255),b.push(E&255),b=b.concat(Array.prototype.slice.call(g));var y=p.box(p.types.avcC,new Uint8Array([1,v[3],v[4],v[5],255,224|S.sps.length].concat(v).concat([S.pps.length]).concat(b))),T=S.width,l=S.height,r=S.pixelRatio[0],n=S.pixelRatio[1];return p.box(p.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,T>>8&255,T&255,l>>8&255,l&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),y,p.box(p.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),p.box(p.types.pasp,new Uint8Array([r>>24,r>>16&255,r>>8&255,r&255,n>>24,n>>16&255,n>>8&255,n&255])))},p.esds=function(S){var v=S.config.length;return new Uint8Array([0,0,0,0,3,23+v,0,1,0,4,15+v,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([v]).concat(S.config).concat([6,1,2]))},p.mp4a=function(S){var v=S.samplerate;return p.box(p.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,S.channelCount,0,16,0,0,0,0,v>>8&255,v&255,0,0]),p.box(p.types.esds,p.esds(S)))},p.mp3=function(S){var v=S.samplerate;return p.box(p.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,S.channelCount,0,16,0,0,0,0,v>>8&255,v&255,0,0]))},p.stsd=function(S){return S.type==="audio"?S.segmentCodec==="mp3"&&S.codec==="mp3"?p.box(p.types.stsd,p.STSD,p.mp3(S)):p.box(p.types.stsd,p.STSD,p.mp4a(S)):p.box(p.types.stsd,p.STSD,p.avc1(S))},p.tkhd=function(S){var v=S.id,b=S.duration*S.timescale,m=S.width,g=S.height,E=Math.floor(b/(w+1)),y=Math.floor(b%(w+1));return p.box(p.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,v>>24&255,v>>16&255,v>>8&255,v&255,0,0,0,0,E>>24,E>>16&255,E>>8&255,E&255,y>>24,y>>16&255,y>>8&255,y&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,m>>8&255,m&255,0,0,g>>8&255,g&255,0,0]))},p.traf=function(S,v){var b=p.sdtp(S),m=S.id,g=Math.floor(v/(w+1)),E=Math.floor(v%(w+1));return p.box(p.types.traf,p.box(p.types.tfhd,new Uint8Array([0,0,0,0,m>>24,m>>16&255,m>>8&255,m&255])),p.box(p.types.tfdt,new Uint8Array([1,0,0,0,g>>24,g>>16&255,g>>8&255,g&255,E>>24,E>>16&255,E>>8&255,E&255])),p.trun(S,b.length+16+20+8+16+8+8),b)},p.trak=function(S){return S.duration=S.duration||4294967295,p.box(p.types.trak,p.tkhd(S),p.mdia(S))},p.trex=function(S){var v=S.id;return p.box(p.types.trex,new Uint8Array([0,0,0,0,v>>24,v>>16&255,v>>8&255,v&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},p.trun=function(S,v){var b=S.samples||[],m=b.length,g=12+16*m,E=new Uint8Array(g),y,T,l,r,n,d;for(v+=8+g,E.set([S.type==="video"?1:0,0,15,1,m>>>24&255,m>>>16&255,m>>>8&255,m&255,v>>>24&255,v>>>16&255,v>>>8&255,v&255],0),y=0;y<m;y++)T=b[y],l=T.duration,r=T.size,n=T.flags,d=T.cts,E.set([l>>>24&255,l>>>16&255,l>>>8&255,l&255,r>>>24&255,r>>>16&255,r>>>8&255,r&255,n.isLeading<<2|n.dependsOn,n.isDependedOn<<6|n.hasRedundancy<<4|n.paddingValue<<1|n.isNonSync,n.degradPrio&240<<8,n.degradPrio&15,d>>>24&255,d>>>16&255,d>>>8&255,d&255],12+16*y);return p.box(p.types.trun,E)},p.initSegment=function(S){p.types||p.init();var v=p.moov(S),b=new Uint8Array(p.FTYP.byteLength+v.byteLength);return b.set(p.FTYP),b.set(v,p.FTYP.byteLength),b},p}();_.types=void 0,_.HDLR_TYPES=void 0,_.STTS=void 0,_.STSC=void 0,_.STCO=void 0,_.STSZ=void 0,_.VMHD=void 0,_.SMHD=void 0,_.STSD=void 0,_.FTYP=void 0,_.DINF=void 0;const D=_},"./src/remux/mp4-remuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>r,flushTextTrackMetadataCueSamples:()=>h,flushTextTrackUserdataCueSamples:()=>a,normalizePts:()=>n});var w=x("./src/polyfills/number.ts"),_=x("./src/remux/aac-helper.ts"),D=x("./src/remux/mp4-generator.ts"),p=x("./src/events.ts"),k=x("./src/errors.ts"),S=x("./src/utils/logger.ts"),v=x("./src/types/loader.ts"),b=x("./src/utils/timescale-conversion.ts");function m(){return m=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var A=arguments[s];for(var u in A)Object.prototype.hasOwnProperty.call(A,u)&&(o[u]=A[u])}return o},m.apply(this,arguments)}var g=10*1e3,E=1024,y=1152,T=null,l=null,r=function(){function o(A,u,f,c){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=A,this.config=u,this.typeSupported=f,this.ISGenerated=!1,T===null){var i=navigator.userAgent||"",C=i.match(/Chrome\/(\d+)/i);T=C?parseInt(C[1]):0}if(l===null){var L=navigator.userAgent.match(/Safari\/(\d+)/i);l=L?parseInt(L[1]):0}}var s=o.prototype;return s.destroy=function(){},s.resetTimeStamp=function(u){S.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=u},s.resetNextTimestamp=function(){S.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},s.resetInitSegment=function(){S.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},s.getVideoStartPts=function(u){var f=!1,c=u.reduce(function(i,C){var L=C.pts-i;return L<-4294967296?(f=!0,n(i,C.pts)):L>0?i:C.pts},u[0].pts);return f&&S.logger.debug("PTS rollover detected"),c},s.remux=function(u,f,c,i,C,L,R,B){var O,K,G,j,Y,V,X=C,Z=C,$=u.pid>-1,ee=f.pid>-1,ae=f.samples.length,ne=u.samples.length>0,oe=R&&ae>0||ae>1,se=(!$||ne)&&(!ee||oe)||this.ISGenerated||R;if(se){this.ISGenerated||(G=this.generateIS(u,f,C));var te=this.isVideoContiguous,ie=-1,ue;if(oe&&(ie=d(f.samples),!te&&this.config.forceKeyFrameOnDiscontinuity))if(V=!0,ie>0){S.logger.warn("[mp4-remuxer]: Dropped "+ie+" out of "+ae+" video samples due to a missing keyframe");var de=this.getVideoStartPts(f.samples);f.samples=f.samples.slice(ie),f.dropped+=ie,Z+=(f.samples[0].pts-de)/f.inputTimeScale,ue=Z}else ie===-1&&(S.logger.warn("[mp4-remuxer]: No keyframe found out of "+ae+" video samples"),V=!1);if(this.ISGenerated){if(ne&&oe){var ce=this.getVideoStartPts(f.samples),be=n(u.samples[0].pts,ce)-ce,he=be/f.inputTimeScale;X+=Math.max(0,he),Z+=Math.max(0,-he)}if(ne){if(u.samplerate||(S.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),G=this.generateIS(u,f,C)),K=this.remuxAudio(u,X,this.isAudioContiguous,L,ee||oe||B===v.PlaylistLevelType.AUDIO?Z:void 0),oe){var Le=K?K.endPTS-K.startPTS:0;f.inputTimeScale||(S.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),G=this.generateIS(u,f,C)),O=this.remuxVideo(f,Z,te,Le)}}else oe&&(O=this.remuxVideo(f,Z,te,0));O&&(O.firstKeyFrame=ie,O.independent=ie!==-1,O.firstKeyFramePTS=ue)}}return this.ISGenerated&&(c.samples.length&&(Y=h(c,C,this._initPTS,this._initDTS)),i.samples.length&&(j=a(i,C,this._initPTS))),{audio:K,video:O,initSegment:G,independent:V,text:j,id3:Y}},s.generateIS=function(u,f,c){var i=u.samples,C=f.samples,L=this.typeSupported,R={},B=!(0,w.isFiniteNumber)(this._initPTS),O="audio/mp4",K,G,j;if(B&&(K=G=1/0),u.config&&i.length){switch(u.timescale=u.samplerate,u.segmentCodec){case"mp3":L.mpeg?(O="audio/mpeg",u.codec=""):L.mp3&&(u.codec="mp3");break}R.audio={id:"audio",container:O,codec:u.codec,initSegment:u.segmentCodec==="mp3"&&L.mpeg?new Uint8Array(0):D.default.initSegment([u]),metadata:{channelCount:u.channelCount}},B&&(j=u.inputTimeScale,K=G=i[0].pts-Math.round(j*c))}if(f.sps&&f.pps&&C.length&&(f.timescale=f.inputTimeScale,R.video={id:"main",container:"video/mp4",codec:f.codec,initSegment:D.default.initSegment([f]),metadata:{width:f.width,height:f.height}},B)){j=f.inputTimeScale;var Y=this.getVideoStartPts(C),V=Math.round(j*c);G=Math.min(G,n(C[0].dts,Y)-V),K=Math.min(K,Y-V)}if(Object.keys(R).length)return this.ISGenerated=!0,B&&(this._initPTS=K,this._initDTS=G),{tracks:R,initPTS:K,timescale:j}},s.remuxVideo=function(u,f,c,i){var C=u.inputTimeScale,L=u.samples,R=[],B=L.length,O=this._initPTS,K=this.nextAvcDts,G=8,j=this.videoSampleDuration,Y,V,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY,$=!1;if(!c||K===null){var ee=f*C,ae=L[0].pts-n(L[0].dts,L[0].pts);K=ee-ae}for(var ne=0;ne<B;ne++){var oe=L[ne];oe.pts=n(oe.pts-O,K),oe.dts=n(oe.dts-O,K),oe.dts<L[ne>0?ne-1:ne].dts&&($=!0)}$&&L.sort(function(ct,yt){var Ot=ct.dts-yt.dts,Pt=ct.pts-yt.pts;return Ot||Pt}),Y=L[0].dts,V=L[L.length-1].dts;var se=V-Y,te=se?Math.round(se/(B-1)):j||u.inputTimeScale/30;if(c){var ie=Y-K,ue=ie>te,de=ie<-1;if((ue||de)&&(ue?S.logger.warn("AVC: "+(0,b.toMsFromMpegTsClock)(ie,!0)+" ms ("+ie+"dts) hole between fragments detected, filling it"):S.logger.warn("AVC: "+(0,b.toMsFromMpegTsClock)(-ie,!0)+" ms ("+ie+"dts) overlapping between fragments detected"),!de||K>L[0].pts)){Y=K;var ce=L[0].pts-ie;L[0].dts=Y,L[0].pts=ce,S.logger.log("Video: First PTS/DTS adjusted: "+(0,b.toMsFromMpegTsClock)(ce,!0)+"/"+(0,b.toMsFromMpegTsClock)(Y,!0)+", delta: "+(0,b.toMsFromMpegTsClock)(ie,!0)+" ms")}}Y=Math.max(0,Y);for(var be=0,he=0,Le=0;Le<B;Le++){for(var xe=L[Le],ye=xe.units,Se=ye.length,De=0,Re=0;Re<Se;Re++)De+=ye[Re].data.length;he+=De,be+=Se,xe.length=De,xe.dts=Math.max(xe.dts,Y),X=Math.min(xe.pts,X),Z=Math.max(xe.pts,Z)}V=L[B-1].dts;var ke=he+4*be+8,Ie;try{Ie=new Uint8Array(ke)}catch{this.observer.emit(p.Events.ERROR,p.Events.ERROR,{type:k.ErrorTypes.MUX_ERROR,details:k.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:ke,reason:"fail allocating video mdat "+ke});return}var Oe=new DataView(Ie.buffer);Oe.setUint32(0,ke),Ie.set(D.default.types.mdat,4);for(var we=!1,Ne=Number.POSITIVE_INFINITY,Ae=Number.POSITIVE_INFINITY,Ce=Number.NEGATIVE_INFINITY,Pe=Number.NEGATIVE_INFINITY,me=0;me<B;me++){for(var Te=L[me],ve=Te.units,je=0,ze=0,Ye=ve.length;ze<Ye;ze++){var Fe=ve[ze],rt=Fe.data,Ke=Fe.data.byteLength;Oe.setUint32(G,Ke),G+=4,Ie.set(rt,G),G+=Ke,je+=4+Ke}var We=void 0;if(me<B-1)j=L[me+1].dts-Te.dts,We=L[me+1].pts-Te.pts;else{var qe=this.config,Ve=me>0?Te.dts-L[me-1].dts:te;if(We=me>0?Te.pts-L[me-1].pts:te,qe.stretchShortVideoTrack&&this.nextAudioPts!==null){var at=Math.floor(qe.maxBufferHole*C),dt=(i?X+i*C:this.nextAudioPts)-Te.pts;dt>at?(j=dt-Ve,j<0?j=Ve:we=!0,S.logger.log("[mp4-remuxer]: It is approximately "+dt/90+" ms to the next segment; using duration "+j/90+" ms for the last video frame.")):j=Ve}else j=Ve}var Lt=Math.round(Te.pts-Te.dts);Ne=Math.min(Ne,j),Ce=Math.max(Ce,j),Ae=Math.min(Ae,We),Pe=Math.max(Pe,We),R.push(new t(Te.key,j,je,Lt))}if(R.length){if(T){if(T<70){var gt=R[0].flags;gt.dependsOn=2,gt.isNonSync=0}}else if(l&&Pe-Ae<Ce-Ne&&te/Ce<.025&&R[0].cts===0){S.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");for(var ut=Y,Me=0,mt=R.length;Me<mt;Me++){var At=ut+R[Me].duration,It=ut+R[Me].cts;if(Me<mt-1){var Dt=At+R[Me+1].cts;R[Me].duration=Dt-It}else R[Me].duration=Me?R[Me-1].duration:te;R[Me].cts=0,ut=At}}}console.assert(j!==null,"mp4SampleDuration must be computed"),j=we||!j?te:j,this.nextAvcDts=K=V+j,this.videoSampleDuration=j,this.isVideoContiguous=!0;var kt=D.default.moof(u.sequenceNumber++,Y,m({},u,{samples:R})),wt="video",Rt={data1:kt,data2:Ie,startPTS:X/C,endPTS:(Z+j)/C,startDTS:Y/C,endDTS:K/C,type:wt,hasAudio:!1,hasVideo:!0,nb:R.length,dropped:u.dropped};return u.samples=[],u.dropped=0,console.assert(Ie.length,"MDAT length must not be zero"),Rt},s.remuxAudio=function(u,f,c,i,C){var L=u.inputTimeScale,R=u.samplerate?u.samplerate:L,B=L/R,O=u.segmentCodec==="aac"?E:y,K=O*B,G=this._initPTS,j=u.segmentCodec==="mp3"&&this.typeSupported.mpeg,Y=[],V=C!==void 0,X=u.samples,Z=j?0:8,$=this.nextAudioPts||-1,ee=f*L;if(this.isAudioContiguous=c=c||X.length&&$>0&&(i&&Math.abs(ee-$)<9e3||Math.abs(n(X[0].pts-G,ee)-$)<20*K),X.forEach(function(Fe){Fe.pts=n(Fe.pts-G,ee)}),!c||$<0){if(X=X.filter(function(Fe){return Fe.pts>=0}),!X.length)return;C===0?$=0:i&&!V?$=Math.max(0,ee):$=X[0].pts}if(u.segmentCodec==="aac")for(var ae=this.config.maxAudioFramesDrift,ne=0,oe=$;ne<X.length;ne++){var se=X[ne],te=se.pts,ie=te-oe,ue=Math.abs(1e3*ie/L);if(ie<=-ae*K&&V)ne===0&&(S.logger.warn("Audio frame @ "+(te/L).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*ie/L)+" ms."),this.nextAudioPts=$=oe=te);else if(ie>=ae*K&&ue<g&&V){var de=Math.round(ie/K);oe=te-de*K,oe<0&&(de--,oe+=K),ne===0&&(this.nextAudioPts=$=oe),S.logger.warn("[mp4-remuxer]: Injecting "+de+" audio frame @ "+(oe/L).toFixed(3)+"s due to "+Math.round(1e3*ie/L)+" ms gap.");for(var ce=0;ce<de;ce++){var be=Math.max(oe,0),he=_.default.getSilentFrame(u.manifestCodec||u.codec,u.channelCount);he||(S.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),he=se.unit.subarray()),X.splice(ne,0,{unit:he,pts:be}),oe+=K,ne++}}se.pts=oe,oe+=K}for(var Le=null,xe=null,ye,Se=0,De=X.length;De--;)Se+=X[De].unit.byteLength;for(var Re=0,ke=X.length;Re<ke;Re++){var Ie=X[Re],Oe=Ie.unit,we=Ie.pts;if(xe!==null){var Ne=Y[Re-1];Ne.duration=Math.round((we-xe)/B)}else if(c&&u.segmentCodec==="aac"&&(we=$),Le=we,Se>0){Se+=Z;try{ye=new Uint8Array(Se)}catch{this.observer.emit(p.Events.ERROR,p.Events.ERROR,{type:k.ErrorTypes.MUX_ERROR,details:k.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Se,reason:"fail allocating audio mdat "+Se});return}if(!j){var Ae=new DataView(ye.buffer);Ae.setUint32(0,Se),ye.set(D.default.types.mdat,4)}}else return;ye.set(Oe,Z);var Ce=Oe.byteLength;Z+=Ce,Y.push(new t(!0,O,Ce,0)),xe=we}var Pe=Y.length;if(!!Pe){var me=Y[Y.length-1];this.nextAudioPts=$=xe+B*me.duration;var Te=j?new Uint8Array(0):D.default.moof(u.sequenceNumber++,Le/B,m({},u,{samples:Y}));u.samples=[];var ve=Le/L,je=$/L,ze="audio",Ye={data1:Te,data2:ye,startPTS:ve,endPTS:je,startDTS:ve,endDTS:je,type:ze,hasAudio:!0,hasVideo:!1,nb:Pe};return this.isAudioContiguous=!0,console.assert(ye.length,"MDAT length must not be zero"),Ye}},s.remuxEmptyAudio=function(u,f,c,i){var C=u.inputTimeScale,L=u.samplerate?u.samplerate:C,R=C/L,B=this.nextAudioPts,O=(B!==null?B:i.startDTS*C)+this._initDTS,K=i.endDTS*C+this._initDTS,G=R*E,j=Math.ceil((K-O)/G),Y=_.default.getSilentFrame(u.manifestCodec||u.codec,u.channelCount);if(S.logger.warn("[mp4-remuxer]: remux empty Audio"),!Y){S.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}for(var V=[],X=0;X<j;X++){var Z=O+X*G;V.push({unit:Y,pts:Z,dts:Z})}return u.samples=V,this.remuxAudio(u,f,c,!1)},o}();function n(o,s){var A;if(s===null)return o;for(s<o?A=-8589934592:A=8589934592;Math.abs(o-s)>4294967296;)o+=A;return o}function d(o){for(var s=0;s<o.length;s++)if(o[s].key)return s;return-1}function h(o,s,A,u){var f=o.samples.length;if(!!f){for(var c=o.inputTimeScale,i=0;i<f;i++){var C=o.samples[i];C.pts=n(C.pts-A,s*c)/c,C.dts=n(C.dts-u,s*c)/c}var L=o.samples;return o.samples=[],{samples:L}}}function a(o,s,A){var u=o.samples.length;if(!!u){for(var f=o.inputTimeScale,c=0;c<u;c++){var i=o.samples[c];i.pts=n(i.pts-A,s*f)/f}o.samples.sort(function(L,R){return L.pts-R.pts});var C=o.samples;return o.samples=[],{samples:C}}}var t=function(s,A,u,f){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=A,this.size=u,this.cts=f,this.flags=new e(s)},e=function(s){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=s?2:1,this.isNonSync=s?0:1}},"./src/remux/passthrough-remuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/polyfills/number.ts"),_=x("./src/remux/mp4-remuxer.ts"),D=x("./src/utils/mp4-tools.ts"),p=x("./src/loader/fragment.ts"),k=x("./src/utils/logger.ts"),S=function(){function m(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndTime=null}var g=m.prototype;return g.destroy=function(){},g.resetTimeStamp=function(y){this.initPTS=y,this.lastEndTime=null},g.resetNextTimestamp=function(){this.lastEndTime=null},g.resetInitSegment=function(y,T,l){this.audioCodec=T,this.videoCodec=l,this.generateInitSegment(y),this.emitInitSegment=!0},g.generateInitSegment=function(y){var T=this.audioCodec,l=this.videoCodec;if(!y||!y.byteLength){this.initTracks=void 0,this.initData=void 0;return}var r=this.initData=(0,D.parseInitSegment)(y);T||(T=v(r.audio,p.ElementaryStreamTypes.AUDIO)),l||(l=v(r.video,p.ElementaryStreamTypes.VIDEO));var n={};r.audio&&r.video?n.audiovideo={container:"video/mp4",codec:T+","+l,initSegment:y,id:"main"}:r.audio?n.audio={container:"audio/mp4",codec:T,initSegment:y,id:"audio"}:r.video?n.video={container:"video/mp4",codec:l,initSegment:y,id:"main"}:k.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=n},g.remux=function(y,T,l,r,n){var d,h=this.initPTS,a=this.lastEndTime,t={audio:void 0,video:void 0,text:r,id3:l,initSegment:void 0};(0,w.isFiniteNumber)(a)||(a=this.lastEndTime=n||0);var e=T.samples;if(!e||!e.length)return t;var o={initPTS:void 0,timescale:1},s=this.initData;if((!s||!s.length)&&(this.generateInitSegment(e),s=this.initData),!s||!s.length)return k.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),t;this.emitInitSegment&&(o.tracks=this.initTracks,this.emitInitSegment=!1);var A=(0,D.getStartDTS)(s,e);(0,w.isFiniteNumber)(h)||(this.initPTS=o.initPTS=h=A-n);var u=(0,D.getDuration)(e,s),f=y?A-h:a,c=f+u;(0,D.offsetStartDTS)(s,e,h),u>0?this.lastEndTime=c:(k.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var i=!!s.audio,C=!!s.video,L="";i&&(L+="audio"),C&&(L+="video");var R={data1:e,startPTS:f,startDTS:f,endPTS:c,endDTS:c,type:L,hasAudio:i,hasVideo:C,nb:1,dropped:0};t.audio=R.type==="audio"?R:void 0,t.video=R.type!=="audio"?R:void 0,t.initSegment=o;var B=(d=this.initPTS)!=null?d:0;return t.id3=(0,_.flushTextTrackMetadataCueSamples)(l,n,B,B),r.samples.length&&(t.text=(0,_.flushTextTrackUserdataCueSamples)(r,n,B)),t},m}();function v(m,g){var E=m==null?void 0:m.codec;return E&&E.length>4?E:E==="hvc1"||E==="hev1"?"hvc1.1.c.L120.90":E==="av01"?"av01.0.04M.08":E==="avc1"||g===p.ElementaryStreamTypes.VIDEO?"avc1.42e01e":"mp4a.40.5"}const b=S},"./src/task-loop.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var D=_.prototype;return D.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},D.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},D.onHandlerDestroyed=function(){},D.hasInterval=function(){return!!this._tickInterval},D.hasNextTick=function(){return!!this._tickTimer},D.setInterval=function(k){return this._tickInterval?!1:(this._tickInterval=self.setInterval(this._boundTick,k),!0)},D.clearInterval=function(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1},D.clearNextTick=function(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1},D.tick=function(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},D.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},D.doTick=function(){},_}()},"./src/types/cmcd.ts":(W,M,x)=>{x.r(M),x.d(M,{CMCDObjectType:()=>_,CMCDStreamType:()=>p,CMCDStreamingFormat:()=>D,CMCDVersion:()=>w});var w=1,_;(function(k){k.MANIFEST="m",k.AUDIO="a",k.VIDEO="v",k.MUXED="av",k.INIT="i",k.CAPTION="c",k.TIMED_TEXT="tt",k.KEY="k",k.OTHER="o"})(_||(_={}));var D;(function(k){k.DASH="d",k.HLS="h",k.SMOOTH="s",k.OTHER="o"})(D||(D={}));var p;(function(k){k.VOD="v",k.LIVE="l"})(p||(p={}))},"./src/types/demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{MetadataSchema:()=>w});var w;(function(_){_.audioId3="org.id3",_.dateRange="com.apple.quicktime.HLS",_.emsg="https://aomedia.org/emsg/ID3"})(w||(w={}))},"./src/types/level.ts":(W,M,x)=>{x.r(M),x.d(M,{HlsSkip:()=>D,HlsUrlParameters:()=>k,Level:()=>S,getSkipValue:()=>p});function w(v,b){for(var m=0;m<b.length;m++){var g=b[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,g.key,g)}}function _(v,b,m){return b&&w(v.prototype,b),m&&w(v,m),Object.defineProperty(v,"prototype",{writable:!1}),v}var D;(function(v){v.No="",v.Yes="YES",v.v2="v2"})(D||(D={}));function p(v,b){var m=v.canSkipUntil,g=v.canSkipDateRanges,E=v.endSN,y=b!==void 0?b-E:0;return m&&y<m?g?D.v2:D.Yes:D.No}var k=function(){function v(m,g,E){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=m,this.part=g,this.skip=E}var b=v.prototype;return b.addDirectives=function(g){var E=new self.URL(g);return this.msn!==void 0&&E.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&E.searchParams.set("_HLS_part",this.part.toString()),this.skip&&E.searchParams.set("_HLS_skip",this.skip),E.toString()},v}(),S=function(){function v(b){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[b.url],this.attrs=b.attrs,this.bitrate=b.bitrate,b.details&&(this.details=b.details),this.id=b.id||0,this.name=b.name,this.width=b.width||0,this.height=b.height||0,this.audioCodec=b.audioCodec,this.videoCodec=b.videoCodec,this.unknownCodecs=b.unknownCodecs,this.codecSet=[b.videoCodec,b.audioCodec].filter(function(m){return m}).join(",").replace(/\.[^.,]+/g,"")}return _(v,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(m){var g=m%this.url.length;this._urlId!==g&&(this.details=void 0,this._urlId=g)}}]),v}()},"./src/types/loader.ts":(W,M,x)=>{x.r(M),x.d(M,{PlaylistContextType:()=>w,PlaylistLevelType:()=>_});var w;(function(D){D.MANIFEST="manifest",D.LEVEL="level",D.AUDIO_TRACK="audioTrack",D.SUBTITLE_TRACK="subtitleTrack"})(w||(w={}));var _;(function(D){D.MAIN="main",D.AUDIO="audio",D.SUBTITLE="subtitle"})(_||(_={}))},"./src/types/transmuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{ChunkMetadata:()=>w});var w=function(p,k,S,v,b,m){v===void 0&&(v=0),b===void 0&&(b=-1),m===void 0&&(m=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=_(),this.buffering={audio:_(),video:_(),audiovideo:_()},this.level=p,this.sn=k,this.id=S,this.size=v,this.part=b,this.partial=m};function _(){return{start:0,executeStart:0,executeEnd:0,end:0}}},"./src/utils/attr-list.ts":(W,M,x)=>{x.r(M),x.d(M,{AttrList:()=>D});var w=/^(\d+)x(\d+)$/,_=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,D=function(){function p(S){typeof S=="string"&&(S=p.parseAttrList(S));for(var v in S)S.hasOwnProperty(v)&&(this[v]=S[v])}var k=p.prototype;return k.decimalInteger=function(v){var b=parseInt(this[v],10);return b>Number.MAX_SAFE_INTEGER?1/0:b},k.hexadecimalInteger=function(v){if(this[v]){var b=(this[v]||"0x").slice(2);b=(b.length&1?"0":"")+b;for(var m=new Uint8Array(b.length/2),g=0;g<b.length/2;g++)m[g]=parseInt(b.slice(g*2,g*2+2),16);return m}else return null},k.hexadecimalIntegerAsNumber=function(v){var b=parseInt(this[v],16);return b>Number.MAX_SAFE_INTEGER?1/0:b},k.decimalFloatingPoint=function(v){return parseFloat(this[v])},k.optionalFloat=function(v,b){var m=this[v];return m?parseFloat(m):b},k.enumeratedString=function(v){return this[v]},k.bool=function(v){return this[v]==="YES"},k.decimalResolution=function(v){var b=w.exec(this[v]);if(b!==null)return{width:parseInt(b[1],10),height:parseInt(b[2],10)}},p.parseAttrList=function(v){var b,m={},g='"';for(_.lastIndex=0;(b=_.exec(v))!==null;){var E=b[2];E.indexOf(g)===0&&E.lastIndexOf(g)===E.length-1&&(E=E.slice(1,-1)),m[b[1]]=E}return m},p}()},"./src/utils/binary-search.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w={search:function(p,k){for(var S=0,v=p.length-1,b=null,m=null;S<=v;){b=(S+v)/2|0,m=p[b];var g=k(m);if(g>0)S=b+1;else if(g<0)v=b-1;else return m}return null}};const _=w},"./src/utils/buffer-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{BufferHelper:()=>D});var w=x("./src/utils/logger.ts"),_={length:0,start:function(){return 0},end:function(){return 0}},D=function(){function p(){}return p.isBuffered=function(S,v){try{if(S){for(var b=p.getBuffered(S),m=0;m<b.length;m++)if(v>=b.start(m)&&v<=b.end(m))return!0}}catch{}return!1},p.bufferInfo=function(S,v,b){try{if(S){var m=p.getBuffered(S),g=[],E;for(E=0;E<m.length;E++)g.push({start:m.start(E),end:m.end(E)});return this.bufferedInfo(g,v,b)}}catch{}return{len:0,start:v,end:v,nextStart:void 0}},p.bufferedInfo=function(S,v,b){v=Math.max(0,v),S.sort(function(t,e){var o=t.start-e.start;return o||e.end-t.end});var m=[];if(b)for(var g=0;g<S.length;g++){var E=m.length;if(E){var y=m[E-1].end;S[g].start-y<b?S[g].end>y&&(m[E-1].end=S[g].end):m.push(S[g])}else m.push(S[g])}else m=S;for(var T=0,l,r=v,n=v,d=0;d<m.length;d++){var h=m[d].start,a=m[d].end;if(v+b>=h&&v<a)r=h,n=a,T=n-v;else if(v+b<h){l=h;break}}return{len:T,start:r||0,end:n||0,nextStart:l}},p.getBuffered=function(S){try{return S.buffered}catch(v){return w.logger.log("failed to get media.buffered",v),_}},p}()},"./src/utils/cea-608-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{CaptionScreen:()=>d,Row:()=>n,default:()=>s});var w=x("./src/utils/logger.ts"),_={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},D=function(u){var f=u;return _.hasOwnProperty(u)&&(f=_[u]),String.fromCharCode(f)},p=15,k=100,S={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},v={17:2,18:4,21:6,22:8,23:10,19:13,20:15},b={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},m={25:2,26:4,29:6,30:8,31:10,27:13,28:15},g=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],E;(function(A){A[A.ERROR=0]="ERROR",A[A.TEXT=1]="TEXT",A[A.WARNING=2]="WARNING",A[A.INFO=2]="INFO",A[A.DEBUG=3]="DEBUG",A[A.DATA=3]="DATA"})(E||(E={}));var y=function(){function A(){this.time=null,this.verboseLevel=E.ERROR}var u=A.prototype;return u.log=function(c,i){this.verboseLevel>=c&&w.logger.log(this.time+" ["+c+"] "+i)},A}(),T=function(u){for(var f=[],c=0;c<u.length;c++)f.push(u[c].toString(16));return f},l=function(){function A(f,c,i,C,L){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=f||"white",this.underline=c||!1,this.italics=i||!1,this.background=C||"black",this.flash=L||!1}var u=A.prototype;return u.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},u.setStyles=function(c){for(var i=["foreground","underline","italics","background","flash"],C=0;C<i.length;C++){var L=i[C];c.hasOwnProperty(L)&&(this[L]=c[L])}},u.isDefault=function(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash},u.equals=function(c){return this.foreground===c.foreground&&this.underline===c.underline&&this.italics===c.italics&&this.background===c.background&&this.flash===c.flash},u.copy=function(c){this.foreground=c.foreground,this.underline=c.underline,this.italics=c.italics,this.background=c.background,this.flash=c.flash},u.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},A}(),r=function(){function A(f,c,i,C,L,R){this.uchar=void 0,this.penState=void 0,this.uchar=f||" ",this.penState=new l(c,i,C,L,R)}var u=A.prototype;return u.reset=function(){this.uchar=" ",this.penState.reset()},u.setChar=function(c,i){this.uchar=c,this.penState.copy(i)},u.setPenState=function(c){this.penState.copy(c)},u.equals=function(c){return this.uchar===c.uchar&&this.penState.equals(c.penState)},u.copy=function(c){this.uchar=c.uchar,this.penState.copy(c.penState)},u.isEmpty=function(){return this.uchar===" "&&this.penState.isDefault()},A}(),n=function(){function A(f){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var c=0;c<k;c++)this.chars.push(new r);this.logger=f,this.pos=0,this.currPenState=new l}var u=A.prototype;return u.equals=function(c){for(var i=!0,C=0;C<k;C++)if(!this.chars[C].equals(c.chars[C])){i=!1;break}return i},u.copy=function(c){for(var i=0;i<k;i++)this.chars[i].copy(c.chars[i])},u.isEmpty=function(){for(var c=!0,i=0;i<k;i++)if(!this.chars[i].isEmpty()){c=!1;break}return c},u.setCursor=function(c){this.pos!==c&&(this.pos=c),this.pos<0?(this.logger.log(E.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>k&&(this.logger.log(E.DEBUG,"Too large cursor position "+this.pos),this.pos=k)},u.moveCursor=function(c){var i=this.pos+c;if(c>1)for(var C=this.pos+1;C<i+1;C++)this.chars[C].setPenState(this.currPenState);this.setCursor(i)},u.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},u.insertChar=function(c){c>=144&&this.backSpace();var i=D(c);if(this.pos>=k){this.logger.log(E.ERROR,"Cannot insert "+c.toString(16)+" ("+i+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(i,this.currPenState),this.moveCursor(1)},u.clearFromPos=function(c){var i;for(i=c;i<k;i++)this.chars[i].reset()},u.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},u.clearToEndOfRow=function(){this.clearFromPos(this.pos)},u.getTextString=function(){for(var c=[],i=!0,C=0;C<k;C++){var L=this.chars[C].uchar;L!==" "&&(i=!1),c.push(L)}return i?"":c.join("")},u.setPenStyles=function(c){this.currPenState.setStyles(c);var i=this.chars[this.pos];i.setPenState(this.currPenState)},A}(),d=function(){function A(f){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var c=0;c<p;c++)this.rows.push(new n(f));this.logger=f,this.currRow=p-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var u=A.prototype;return u.reset=function(){for(var c=0;c<p;c++)this.rows[c].clear();this.currRow=p-1},u.equals=function(c){for(var i=!0,C=0;C<p;C++)if(!this.rows[C].equals(c.rows[C])){i=!1;break}return i},u.copy=function(c){for(var i=0;i<p;i++)this.rows[i].copy(c.rows[i])},u.isEmpty=function(){for(var c=!0,i=0;i<p;i++)if(!this.rows[i].isEmpty()){c=!1;break}return c},u.backSpace=function(){var c=this.rows[this.currRow];c.backSpace()},u.clearToEndOfRow=function(){var c=this.rows[this.currRow];c.clearToEndOfRow()},u.insertChar=function(c){var i=this.rows[this.currRow];i.insertChar(c)},u.setPen=function(c){var i=this.rows[this.currRow];i.setPenStyles(c)},u.moveCursor=function(c){var i=this.rows[this.currRow];i.moveCursor(c)},u.setCursor=function(c){this.logger.log(E.INFO,"setCursor: "+c);var i=this.rows[this.currRow];i.setCursor(c)},u.setPAC=function(c){this.logger.log(E.INFO,"pacData = "+JSON.stringify(c));var i=c.row-1;if(this.nrRollUpRows&&i<this.nrRollUpRows-1&&(i=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==i){for(var C=0;C<p;C++)this.rows[C].clear();var L=this.currRow+1-this.nrRollUpRows,R=this.lastOutputScreen;if(R){var B=R.rows[L].cueStartTime,O=this.logger.time;if(B&&O!==null&&B<O)for(var K=0;K<this.nrRollUpRows;K++)this.rows[i-this.nrRollUpRows+K+1].copy(R.rows[L+K])}}this.currRow=i;var G=this.rows[this.currRow];if(c.indent!==null){var j=c.indent,Y=Math.max(j-1,0);G.setCursor(c.indent),c.color=G.chars[Y].penState.foreground}var V={foreground:c.color,underline:c.underline,italics:c.italics,background:"black",flash:!1};this.setPen(V)},u.setBkgData=function(c){this.logger.log(E.INFO,"bkgData = "+JSON.stringify(c)),this.backSpace(),this.setPen(c),this.insertChar(32)},u.setRollUpRows=function(c){this.nrRollUpRows=c},u.rollUp=function(){if(this.nrRollUpRows===null){this.logger.log(E.DEBUG,"roll_up but nrRollUpRows not set yet");return}this.logger.log(E.TEXT,this.getDisplayText());var c=this.currRow+1-this.nrRollUpRows,i=this.rows.splice(c,1)[0];i.clear(),this.rows.splice(this.currRow,0,i),this.logger.log(E.INFO,"Rolling up")},u.getDisplayText=function(c){c=c||!1;for(var i=[],C="",L=-1,R=0;R<p;R++){var B=this.rows[R].getTextString();B&&(L=R+1,c?i.push("Row "+L+": '"+B+"'"):i.push(B.trim()))}return i.length>0&&(c?C="["+i.join(" | ")+"]":C=i.join(`
`)),C},u.getTextAndFormat=function(){return this.rows},A}(),h=function(){function A(f,c,i){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=f,this.outputFilter=c,this.mode=null,this.verbose=0,this.displayedMemory=new d(i),this.nonDisplayedMemory=new d(i),this.lastOutputScreen=new d(i),this.currRollUpRow=this.displayedMemory.rows[p-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=i}var u=A.prototype;return u.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[p-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},u.getHandler=function(){return this.outputFilter},u.setHandler=function(c){this.outputFilter=c},u.setPAC=function(c){this.writeScreen.setPAC(c)},u.setBkgData=function(c){this.writeScreen.setBkgData(c)},u.setMode=function(c){c!==this.mode&&(this.mode=c,this.logger.log(E.INFO,"MODE="+c),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=c)},u.insertChars=function(c){for(var i=0;i<c.length;i++)this.writeScreen.insertChar(c[i]);var C=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(E.INFO,C+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(E.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},u.ccRCL=function(){this.logger.log(E.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},u.ccBS=function(){this.logger.log(E.INFO,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},u.ccAOF=function(){},u.ccAON=function(){},u.ccDER=function(){this.logger.log(E.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},u.ccRU=function(c){this.logger.log(E.INFO,"RU("+c+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(c)},u.ccFON=function(){this.logger.log(E.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},u.ccRDC=function(){this.logger.log(E.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},u.ccTR=function(){this.logger.log(E.INFO,"TR"),this.setMode("MODE_TEXT")},u.ccRTD=function(){this.logger.log(E.INFO,"RTD"),this.setMode("MODE_TEXT")},u.ccEDM=function(){this.logger.log(E.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},u.ccCR=function(){this.logger.log(E.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},u.ccENM=function(){this.logger.log(E.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},u.ccEOC=function(){if(this.logger.log(E.INFO,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){var c=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=c,this.writeScreen=this.nonDisplayedMemory,this.logger.log(E.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},u.ccTO=function(c){this.logger.log(E.INFO,"TO("+c+") - Tab Offset"),this.writeScreen.moveCursor(c)},u.ccMIDROW=function(c){var i={flash:!1};if(i.underline=c%2===1,i.italics=c>=46,i.italics)i.foreground="white";else{var C=Math.floor(c/2)-16,L=["white","green","blue","cyan","red","yellow","magenta"];i.foreground=L[C]}this.logger.log(E.INFO,"MIDROW: "+JSON.stringify(i)),this.writeScreen.setPen(i)},u.outputDataUpdate=function(c){c===void 0&&(c=!1);var i=this.logger.time;i!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=i:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,i,this.lastOutputScreen),c&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:i),this.lastOutputScreen.copy(this.displayedMemory))},u.cueSplitAtTime=function(c){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,c,this.displayedMemory),this.cueStartTime=c))},A}(),a=function(){function A(f,c,i){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var C=new y;this.channels=[null,new h(f,c,C),new h(f+1,i,C)],this.cmdHistory=o(),this.logger=C}var u=A.prototype;return u.getHandler=function(c){return this.channels[c].getHandler()},u.setHandler=function(c,i){this.channels[c].setHandler(i)},u.addData=function(c,i){var C,L,R,B=!1;this.logger.time=c;for(var O=0;O<i.length;O+=2)if(L=i[O]&127,R=i[O+1]&127,!(L===0&&R===0)){if(this.logger.log(E.DATA,"["+T([i[O],i[O+1]])+"] -> ("+T([L,R])+")"),C=this.parseCmd(L,R),C||(C=this.parseMidrow(L,R)),C||(C=this.parsePAC(L,R)),C||(C=this.parseBackgroundAttributes(L,R)),!C&&(B=this.parseChars(L,R),B)){var K=this.currentChannel;if(K&&K>0){var G=this.channels[K];G.insertChars(B)}else this.logger.log(E.WARNING,"No channel found yet. TEXT-MODE?")}!C&&!B&&this.logger.log(E.WARNING,"Couldn't parse cleaned data "+T([L,R])+" orig: "+T([i[O],i[O+1]]))}},u.parseCmd=function(c,i){var C=this.cmdHistory,L=(c===20||c===28||c===21||c===29)&&i>=32&&i<=47,R=(c===23||c===31)&&i>=33&&i<=35;if(!(L||R))return!1;if(e(c,i,C))return t(null,null,C),this.logger.log(E.DEBUG,"Repeated command ("+T([c,i])+") is dropped"),!0;var B=c===20||c===21||c===23?1:2,O=this.channels[B];return c===20||c===21||c===28||c===29?i===32?O.ccRCL():i===33?O.ccBS():i===34?O.ccAOF():i===35?O.ccAON():i===36?O.ccDER():i===37?O.ccRU(2):i===38?O.ccRU(3):i===39?O.ccRU(4):i===40?O.ccFON():i===41?O.ccRDC():i===42?O.ccTR():i===43?O.ccRTD():i===44?O.ccEDM():i===45?O.ccCR():i===46?O.ccENM():i===47&&O.ccEOC():O.ccTO(i-32),t(c,i,C),this.currentChannel=B,!0},u.parseMidrow=function(c,i){var C=0;if((c===17||c===25)&&i>=32&&i<=47){if(c===17?C=1:C=2,C!==this.currentChannel)return this.logger.log(E.ERROR,"Mismatch channel in midrow parsing"),!1;var L=this.channels[C];return L?(L.ccMIDROW(i),this.logger.log(E.DEBUG,"MIDROW ("+T([c,i])+")"),!0):!1}return!1},u.parsePAC=function(c,i){var C,L=this.cmdHistory,R=(c>=17&&c<=23||c>=25&&c<=31)&&i>=64&&i<=127,B=(c===16||c===24)&&i>=64&&i<=95;if(!(R||B))return!1;if(e(c,i,L))return t(null,null,L),!0;var O=c<=23?1:2;i>=64&&i<=95?C=O===1?S[c]:b[c]:C=O===1?v[c]:m[c];var K=this.channels[O];return K?(K.setPAC(this.interpretPAC(C,i)),t(c,i,L),this.currentChannel=O,!0):!1},u.interpretPAC=function(c,i){var C,L={color:null,italics:!1,indent:null,underline:!1,row:c};return i>95?C=i-96:C=i-64,L.underline=(C&1)===1,C<=13?L.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(C/2)]:C<=15?(L.italics=!0,L.color="white"):L.indent=Math.floor((C-16)/2)*4,L},u.parseChars=function(c,i){var C,L=null,R=null;if(c>=25?(C=2,R=c-8):(C=1,R=c),R>=17&&R<=19){var B;R===17?B=i+80:R===18?B=i+112:B=i+144,this.logger.log(E.INFO,"Special char '"+D(B)+"' in channel "+C),L=[B]}else c>=32&&c<=127&&(L=i===0?[c]:[c,i]);if(L){var O=T(L);this.logger.log(E.DEBUG,"Char codes =  "+O.join(",")),t(c,i,this.cmdHistory)}return L},u.parseBackgroundAttributes=function(c,i){var C=(c===16||c===24)&&i>=32&&i<=47,L=(c===23||c===31)&&i>=45&&i<=47;if(!(C||L))return!1;var R,B={};c===16||c===24?(R=Math.floor((i-32)/2),B.background=g[R],i%2===1&&(B.background=B.background+"_semi")):i===45?B.background="transparent":(B.foreground="black",i===47&&(B.underline=!0));var O=c<=23?1:2,K=this.channels[O];return K.setBkgData(B),t(c,i,this.cmdHistory),!0},u.reset=function(){for(var c=0;c<Object.keys(this.channels).length;c++){var i=this.channels[c];i&&i.reset()}this.cmdHistory=o()},u.cueSplitAtTime=function(c){for(var i=0;i<this.channels.length;i++){var C=this.channels[i];C&&C.cueSplitAtTime(c)}},A}();function t(A,u,f){f.a=A,f.b=u}function e(A,u,f){return f.a===A&&f.b===u}function o(){return{a:null,b:null}}const s=a},"./src/utils/codecs.ts":(W,M,x)=>{x.r(M),x.d(M,{isCodecSupportedInMp4:()=>D,isCodecType:()=>_});var w={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dva1:!0,dvav:!0,dvh1:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function _(p,k){var S=w[k];return!!S&&S[p.slice(0,4)]===!0}function D(p,k){return MediaSource.isTypeSupported((k||"video")+'/mp4;codecs="'+p+'"')}},"./src/utils/cues.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/utils/vttparser.ts"),_=x("./src/utils/webvtt-parser.ts"),D=x("./src/utils/texttrack-utils.ts"),p=/\s/,k={newCue:function(b,m,g,E){for(var y=[],T,l,r,n,d,h=self.VTTCue||self.TextTrackCue,a=0;a<E.rows.length;a++)if(T=E.rows[a],r=!0,n=0,d="",!T.isEmpty()){for(var t=0;t<T.chars.length;t++)p.test(T.chars[t].uchar)&&r?n++:(d+=T.chars[t].uchar,r=!1);T.cueStartTime=m,m===g&&(g+=1e-4),n>=16?n--:n++;var e=(0,w.fixLineBreaks)(d.trim()),o=(0,_.generateCueId)(m,g,e);(!b||!b.cues||!b.cues.getCueById(o))&&(l=new h(m,g,e),l.id=o,l.line=a+1,l.align="left",l.position=10+Math.min(80,Math.floor(n*8/32)*10),y.push(l))}return b&&y.length&&(y.sort(function(s,A){return s.line==="auto"||A.line==="auto"?0:s.line>8&&A.line>8?A.line-s.line:s.line-A.line}),y.forEach(function(s){return(0,D.addCueToTrack)(b,s)})),y}};const S=k},"./src/utils/discontinuities.ts":(W,M,x)=>{x.r(M),x.d(M,{adjustSlidingStart:()=>b,alignMediaPlaylistByPDT:()=>y,alignPDT:()=>E,alignStream:()=>m,findDiscontinuousReferenceFrag:()=>S,findFirstFragWithCC:()=>p,shouldAlignOnDiscontinuities:()=>k});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/logger.ts"),D=x("./src/controller/level-helper.ts");function p(T,l){for(var r=null,n=0,d=T.length;n<d;n++){var h=T[n];if(h&&h.cc===l){r=h;break}}return r}function k(T,l,r){return!!(l.details&&(r.endCC>r.startCC||T&&T.cc<r.startCC))}function S(T,l,r){var n=T.fragments,d=l.fragments;if(!d.length||!n.length){_.logger.log("No fragments to align");return}var h=p(n,d[0].cc);if(!h||h&&!h.startPTS){_.logger.log("No frag in previous level to align on");return}return h}function v(T,l){if(T){var r=T.start+l;T.start=T.startPTS=r,T.endPTS=r+T.duration}}function b(T,l){for(var r=l.fragments,n=0,d=r.length;n<d;n++)v(r[n],T);l.fragmentHint&&v(l.fragmentHint,T),l.alignedSliding=!0}function m(T,l,r){!l||(g(T,r,l),!r.alignedSliding&&l.details&&E(r,l.details),!r.alignedSliding&&l.details&&!r.skippedSegments&&(0,D.adjustSliding)(l.details,r))}function g(T,l,r){if(k(T,r,l)){var n=S(r.details,l);n&&(0,w.isFiniteNumber)(n.start)&&(_.logger.log("Adjusting PTS using last level due to CC increase within current level "+l.url),b(n.start,l))}}function E(T,l){if(!(!l.fragments.length||!T.hasProgramDateTime||!l.hasProgramDateTime)){var r=l.fragments[0].programDateTime,n=T.fragments[0].programDateTime,d=(n-r)/1e3+l.fragments[0].start;d&&(0,w.isFiniteNumber)(d)&&(_.logger.log("Adjusting PTS using programDateTime delta "+(n-r)+"ms, sliding:"+d.toFixed(3)+" "+T.url+" "),b(d,T))}}function y(T,l){if(!(!T.hasProgramDateTime||!l.hasProgramDateTime)){var r=T.fragments,n=l.fragments;if(!(!r.length||!n.length)){var d=Math.round(n.length/2)-1,h=n[d],a=p(r,h.cc)||r[Math.round(r.length/2)-1],t=h.programDateTime,e=a.programDateTime;if(!(t===null||e===null)){var o=(e-t)/1e3-(a.start-h.start);b(o,T)}}}}},"./src/utils/ewma-bandwidth-estimator.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=x("./src/utils/ewma.ts"),_=function(){function p(S,v,b){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=b,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new w.default(S),this.fast_=new w.default(v)}var k=p.prototype;return k.update=function(v,b){var m=this.slow_,g=this.fast_;this.slow_.halfLife!==v&&(this.slow_=new w.default(v,m.getEstimate(),m.getTotalWeight())),this.fast_.halfLife!==b&&(this.fast_=new w.default(b,g.getEstimate(),g.getTotalWeight()))},k.sample=function(v,b){v=Math.max(v,this.minDelayMs_);var m=8*b,g=v/1e3,E=m/g;this.fast_.sample(g,E),this.slow_.sample(g,E)},k.canEstimate=function(){var v=this.fast_;return v&&v.getTotalWeight()>=this.minWeight_},k.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},k.destroy=function(){},p}();const D=_},"./src/utils/ewma.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=function(){function D(k,S,v){S===void 0&&(S=0),v===void 0&&(v=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=k,this.alpha_=k?Math.exp(Math.log(.5)/k):0,this.estimate_=S,this.totalWeight_=v}var p=D.prototype;return p.sample=function(S,v){var b=Math.pow(this.alpha_,S);this.estimate_=v*(1-b)+b*this.estimate_,this.totalWeight_+=S},p.getTotalWeight=function(){return this.totalWeight_},p.getEstimate=function(){if(this.alpha_){var S=1-Math.pow(this.alpha_,this.totalWeight_);if(S)return this.estimate_/S}return this.estimate_},D}();const _=w},"./src/utils/fetch-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>d,fetchSupported:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/loader/load-stats.ts"),D=x("./src/demux/chunk-cache.ts");function p(h,a){h.prototype=Object.create(a.prototype),h.prototype.constructor=h,m(h,a)}function k(h){var a=typeof Map=="function"?new Map:void 0;return k=function(e){if(e===null||!b(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof a<"u"){if(a.has(e))return a.get(e);a.set(e,o)}function o(){return S(e,arguments,g(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),m(o,e)},k(h)}function S(h,a,t){return v()?S=Reflect.construct.bind():S=function(o,s,A){var u=[null];u.push.apply(u,s);var f=Function.bind.apply(o,u),c=new f;return A&&m(c,A.prototype),c},S.apply(null,arguments)}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(h){return Function.toString.call(h).indexOf("[native code]")!==-1}function m(h,a){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},m(h,a)}function g(h){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(h)}function E(){return E=Object.assign?Object.assign.bind():function(h){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(h[e]=t[e])}return h},E.apply(this,arguments)}function y(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}var T=function(){function h(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||r,this.controller=new self.AbortController,this.stats=new _.LoadStats}var a=h.prototype;return a.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},a.abortInternal=function(){var e=this.response;(!e||!e.ok)&&(this.stats.aborted=!0,this.controller.abort())},a.abort=function(){var e;this.abortInternal(),(e=this.callbacks)!==null&&e!==void 0&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},a.load=function(e,o,s){var A=this,u=this.stats;if(u.loading.start)throw new Error("Loader can only be used once.");u.loading.start=self.performance.now();var f=l(e,this.controller.signal),c=s.onProgress,i=e.responseType==="arraybuffer",C=i?"byteLength":"length";this.context=e,this.config=o,this.callbacks=s,this.request=this.fetchSetup(e,f),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(function(){A.abortInternal(),s.onTimeout(u,e,A.response)},o.timeout),self.fetch(this.request).then(function(L){if(A.response=A.loader=L,!L.ok){var R=L.status,B=L.statusText;throw new n(B||"fetch, bad network response",R,L)}return u.loading.first=Math.max(self.performance.now(),u.loading.start),u.total=parseInt(L.headers.get("Content-Length")||"0"),c&&(0,w.isFiniteNumber)(o.highWaterMark)?A.loadProgressively(L,u,e,o.highWaterMark,c):i?L.arrayBuffer():L.text()}).then(function(L){var R=A.response;self.clearTimeout(A.requestTimeout),u.loading.end=Math.max(self.performance.now(),u.loading.first);var B=L[C];B&&(u.loaded=u.total=B);var O={url:R.url,data:L};c&&!(0,w.isFiniteNumber)(o.highWaterMark)&&c(u,e,L,R),s.onSuccess(O,u,e,R)}).catch(function(L){if(self.clearTimeout(A.requestTimeout),!u.aborted){var R=L&&L.code||0,B=L?L.message:null;s.onError({code:R,text:B},e,L?L.details:null)}})},a.getCacheAge=function(){var e=null;if(this.response){var o=this.response.headers.get("age");e=o?parseFloat(o):null}return e},a.loadProgressively=function(e,o,s,A,u){A===void 0&&(A=0);var f=new D.default,c=e.body.getReader(),i=function C(){return c.read().then(function(L){if(L.done)return f.dataLength&&u(o,s,f.flush(),e),Promise.resolve(new ArrayBuffer(0));var R=L.value,B=R.length;return o.loaded+=B,B<A||f.dataLength?(f.push(R),f.dataLength>=A&&u(o,s,f.flush(),e)):u(o,s,R,e),C()}).catch(function(){return Promise.reject()})};return i()},h}();function l(h,a){var t={method:"GET",mode:"cors",credentials:"same-origin",signal:a,headers:new self.Headers(E({},h.headers))};return h.rangeEnd&&t.headers.set("Range","bytes="+h.rangeStart+"-"+String(h.rangeEnd-1)),t}function r(h,a){return new self.Request(h.url,a)}var n=function(h){p(a,h);function a(t,e,o){var s;return s=h.call(this,t)||this,s.code=void 0,s.details=void 0,s.code=e,s.details=o,s}return a}(k(Error));const d=T},"./src/utils/imsc1-ttml-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{IMSC1_CODEC:()=>b,parseIMSC1:()=>y});var w=x("./src/utils/mp4-tools.ts"),_=x("./src/utils/vttparser.ts"),D=x("./src/utils/vttcue.ts"),p=x("./src/demux/id3.ts"),k=x("./src/utils/timescale-conversion.ts"),S=x("./src/utils/webvtt-parser.ts");function v(){return v=Object.assign?Object.assign.bind():function(s){for(var A=1;A<arguments.length;A++){var u=arguments[A];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(s[f]=u[f])}return s},v.apply(this,arguments)}var b="stpp.ttml.im1t",m=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,g=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,E={left:"start",center:"center",right:"end",start:"start",end:"end"};function y(s,A,u,f,c){var i=(0,w.findBox)(new Uint8Array(s),["mdat"]);if(i.length===0){c(new Error("Could not parse IMSC1 mdat"));return}var C=i.map(function(R){return(0,p.utf8ArrayToStr)(R)}),L=(0,k.toTimescaleFromScale)(A,1,u);try{C.forEach(function(R){return f(T(R,L))})}catch(R){c(R)}}function T(s,A){var u=new DOMParser,f=u.parseFromString(s,"text/xml"),c=f.getElementsByTagName("tt")[0];if(!c)throw new Error("Invalid ttml");var i={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},C=Object.keys(i).reduce(function(K,G){return K[G]=c.getAttribute("ttp:"+G)||i[G],K},{}),L=c.getAttribute("xml:space")!=="preserve",R=r(l(c,"styling","style")),B=r(l(c,"layout","region")),O=l(c,"body","[begin]");return[].map.call(O,function(K){var G=n(K,L);if(!G||!K.hasAttribute("begin"))return null;var j=t(K.getAttribute("begin"),C),Y=t(K.getAttribute("dur"),C),V=t(K.getAttribute("end"),C);if(j===null)throw a(K);if(V===null){if(Y===null)throw a(K);V=j+Y}var X=new D.default(j-A,V-A,G);X.id=(0,S.generateCueId)(X.startTime,X.endTime,X.text);var Z=B[K.getAttribute("region")],$=R[K.getAttribute("style")];X.position=10,X.size=80;var ee=d(Z,$,R),ae=ee.textAlign;if(ae){var ne=E[ae];ne&&(X.lineAlign=ne),X.align=ae}return v(X,ee),X}).filter(function(K){return K!==null})}function l(s,A,u){var f=s.getElementsByTagName(A)[0];return f?[].slice.call(f.querySelectorAll(u)):[]}function r(s){return s.reduce(function(A,u){var f=u.getAttribute("xml:id");return f&&(A[f]=u),A},{})}function n(s,A){return[].slice.call(s.childNodes).reduce(function(u,f,c){var i;return f.nodeName==="br"&&c?u+`
`:(i=f.childNodes)!==null&&i!==void 0&&i.length?n(f,A):A?u+f.textContent.trim().replace(/\s+/g," "):u+f.textContent},"")}function d(s,A,u){var f="http://www.w3.org/ns/ttml#styling",c=null,i=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],C=s!=null&&s.hasAttribute("style")?s.getAttribute("style"):null;return C&&u.hasOwnProperty(C)&&(c=u[C]),i.reduce(function(L,R){var B=h(A,f,R)||h(s,f,R)||h(c,f,R);return B&&(L[R]=B),L},{})}function h(s,A,u){return s&&s.hasAttributeNS(A,u)?s.getAttributeNS(A,u):null}function a(s){return new Error("Could not parse ttml timestamp "+s)}function t(s,A){if(!s)return null;var u=(0,_.parseTimeStamp)(s);return u===null&&(m.test(s)?u=e(s,A):g.test(s)&&(u=o(s,A))),u}function e(s,A){var u=m.exec(s),f=(u[4]|0)+(u[5]|0)/A.subFrameRate;return(u[1]|0)*3600+(u[2]|0)*60+(u[3]|0)+f/A.frameRate}function o(s,A){var u=g.exec(s),f=Number(u[1]),c=u[2];switch(c){case"h":return f*3600;case"m":return f*60;case"ms":return f*1e3;case"f":return f/A.frameRate;case"t":return f/A.tickRate}return f}},"./src/utils/logger.ts":(W,M,x)=>{x.r(M),x.d(M,{enableLogs:()=>S,logger:()=>v});var w=function(){},_={trace:w,debug:w,log:w,warn:w,info:w,error:w},D=_;function p(b){var m=self.console[b];return m?m.bind(self.console,"["+b+"] >"):w}function k(b){for(var m=arguments.length,g=new Array(m>1?m-1:0),E=1;E<m;E++)g[E-1]=arguments[E];g.forEach(function(y){D[y]=b[y]?b[y].bind(b):p(y)})}function S(b,m){if(self.console&&b===!0||typeof b=="object"){k(b,"debug","log","info","warn","error");try{D.log('Debug logs enabled for "'+m+'"')}catch{D=_}}else D=_}var v=D},"./src/utils/mediakeys-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{KeySystems:()=>w,requestMediaKeySystemAccess:()=>_});var w;(function(D){D.WIDEVINE="com.widevine.alpha",D.PLAYREADY="com.microsoft.playready"})(w||(w={}));var _=function(){return typeof self<"u"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}()},"./src/utils/mediasource-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{getMediaSource:()=>w});function w(){return self.MediaSource||self.WebKitMediaSource}},"./src/utils/mp4-tools.ts":(W,M,x)=>{x.r(M),x.d(M,{RemuxerTrackIdConfig:()=>S,appendUint8Array:()=>t,bin2str:()=>v,computeRawDurationFromSamples:()=>d,discardEPB:()=>u,findBox:()=>y,getDuration:()=>n,getStartDTS:()=>r,offsetStartDTS:()=>h,parseEmsg:()=>f,parseInitSegment:()=>l,parseSEIMessageFromNALu:()=>A,parseSamples:()=>e,parseSegmentIndex:()=>T,readSint32:()=>g,readUint16:()=>b,readUint32:()=>m,segmentValidRange:()=>a,writeUint32:()=>E});var w=x("./src/utils/typed-array.ts"),_=x("./src/loader/fragment.ts"),D=x("./src/demux/id3.ts"),p=Math.pow(2,32)-1,k=[].push,S={video:1,audio:2,id3:3,text:4};function v(c){return String.fromCharCode.apply(null,c)}function b(c,i){var C=c[i]<<8|c[i+1];return C<0?65536+C:C}function m(c,i){var C=g(c,i);return C<0?4294967296+C:C}function g(c,i){return c[i]<<24|c[i+1]<<16|c[i+2]<<8|c[i+3]}function E(c,i,C){c[i]=C>>24,c[i+1]=C>>16&255,c[i+2]=C>>8&255,c[i+3]=C&255}function y(c,i){var C=[];if(!i.length)return C;for(var L=c.byteLength,R=0;R<L;){var B=m(c,R),O=v(c.subarray(R+4,R+8)),K=B>1?R+B:L;if(O===i[0])if(i.length===1)C.push(c.subarray(R+8,K));else{var G=y(c.subarray(R+8,K),i.slice(1));G.length&&k.apply(C,G)}R=K}return C}function T(c){var i=[],C=c[0],L=8,R=m(c,L);L+=4;var B=0,O=0;C===0?L+=8:L+=16,L+=2;var K=c.length+O,G=b(c,L);L+=2;for(var j=0;j<G;j++){var Y=L,V=m(c,Y);Y+=4;var X=V&2147483647,Z=(V&2147483648)>>>31;if(Z===1)return console.warn("SIDX has hierarchical references (not supported)"),null;var $=m(c,Y);Y+=4,i.push({referenceSize:X,subsegmentDuration:$,info:{duration:$/R,start:K,end:K+X-1}}),K+=X,Y+=4,L=Y}return{earliestPresentationTime:B,timescale:R,version:C,referencesCount:G,references:i}}function l(c){for(var i=[],C=y(c,["moov","trak"]),L=0;L<C.length;L++){var R=C[L],B=y(R,["tkhd"])[0];if(B){var O=B[0],K=O===0?12:20,G=m(B,K),j=y(R,["mdia","mdhd"])[0];if(j){O=j[0],K=O===0?12:20;var Y=m(j,K),V=y(R,["mdia","hdlr"])[0];if(V){var X=v(V.subarray(8,12)),Z={soun:_.ElementaryStreamTypes.AUDIO,vide:_.ElementaryStreamTypes.VIDEO}[X];if(Z){var $=y(R,["mdia","minf","stbl","stsd"])[0],ee=void 0;$&&(ee=v($.subarray(12,16))),i[G]={timescale:Y,type:Z},i[Z]={timescale:Y,id:G,codec:ee}}}}}}var ae=y(c,["moov","mvex","trex"]);return ae.forEach(function(ne){var oe=m(ne,4),se=i[oe];se&&(se.default={duration:m(ne,12),flags:m(ne,20)})}),i}function r(c,i){return y(i,["moof","traf"]).reduce(function(C,L){var R=y(L,["tfdt"])[0],B=R[0],O=y(L,["tfhd"]).reduce(function(K,G){var j=m(G,4),Y=c[j];if(Y){var V=m(R,4);B===1&&(V*=Math.pow(2,32),V+=m(R,8));var X=Y.timescale||9e4,Z=V/X;if(isFinite(Z)&&(K===null||Z<K))return Z}return K},null);return O!==null&&isFinite(O)&&(C===null||O<C)?O:C},null)||0}function n(c,i){for(var C=0,L=0,R=0,B=y(c,["moof","traf"]),O=0;O<B.length;O++){var K=B[O],G=y(K,["tfhd"])[0],j=m(G,4),Y=i[j];if(!!Y){var V=Y.default,X=m(G,0)|(V==null?void 0:V.flags),Z=V==null?void 0:V.duration;X&8&&(X&2?Z=m(G,12):Z=m(G,8));for(var $=Y.timescale||9e4,ee=y(K,["trun"]),ae=0;ae<ee.length;ae++){if(C=d(ee[ae]),!C&&Z){var ne=m(ee[ae],4);C=Z*ne}Y.type===_.ElementaryStreamTypes.VIDEO?L+=C/$:Y.type===_.ElementaryStreamTypes.AUDIO&&(R+=C/$)}}}if(L===0&&R===0){for(var oe=0,se=y(c,["sidx"]),te=0;te<se.length;te++){var ie=T(se[te]);ie!=null&&ie.references&&(oe+=ie.references.reduce(function(ue,de){return ue+de.info.duration||0},0))}return oe}return L||R}function d(c){var i=m(c,0),C=8;i&1&&(C+=4),i&4&&(C+=4);for(var L=0,R=m(c,4),B=0;B<R;B++){if(i&256){var O=m(c,C);L+=O,C+=4}i&512&&(C+=4),i&1024&&(C+=4),i&2048&&(C+=4)}return L}function h(c,i,C){y(i,["moof","traf"]).forEach(function(L){y(L,["tfhd"]).forEach(function(R){var B=m(R,4),O=c[B];if(!!O){var K=O.timescale||9e4;y(L,["tfdt"]).forEach(function(G){var j=G[0],Y=m(G,4);if(j===0)Y-=C*K,Y=Math.max(Y,0),E(G,4,Y);else{Y*=Math.pow(2,32),Y+=m(G,8),Y-=C*K,Y=Math.max(Y,0);var V=Math.floor(Y/(p+1)),X=Math.floor(Y%(p+1));E(G,4,V),E(G,8,X)}})}})})}function a(c){var i={valid:null,remainder:null},C=y(c,["moof"]);if(C){if(C.length<2)return i.remainder=c,i}else return i;var L=C[C.length-1];return i.valid=(0,w.sliceUint8)(c,0,L.byteOffset-8),i.remainder=(0,w.sliceUint8)(c,L.byteOffset-8),i}function t(c,i){var C=new Uint8Array(c.length+i.length);return C.set(c),C.set(i,c.length),C}function e(c,i){var C=[],L=i.samples,R=i.timescale,B=i.id,O=!1,K=y(L,["moof"]);return K.map(function(G){var j=G.byteOffset-8,Y=y(G,["traf"]);Y.map(function(V){var X=y(V,["tfdt"]).map(function(Z){var $=Z[0],ee=m(Z,4);return $===1&&(ee*=Math.pow(2,32),ee+=m(Z,8)),ee/R})[0];return X!==void 0&&(c=X),y(V,["tfhd"]).map(function(Z){var $=m(Z,4),ee=m(Z,0)&16777215,ae=(ee&1)!==0,ne=(ee&2)!==0,oe=(ee&8)!==0,se=0,te=(ee&16)!==0,ie=0,ue=(ee&32)!==0,de=8;$===B&&(ae&&(de+=8),ne&&(de+=4),oe&&(se=m(Z,de),de+=4),te&&(ie=m(Z,de),de+=4),ue&&(de+=4),i.type==="video"&&(O=o(i.codec)),y(V,["trun"]).map(function(ce){var be=ce[0],he=m(ce,0)&16777215,Le=(he&1)!==0,xe=0,ye=(he&4)!==0,Se=(he&256)!==0,De=0,Re=(he&512)!==0,ke=0,Ie=(he&1024)!==0,Oe=(he&2048)!==0,we=0,Ne=m(ce,4),Ae=8;Le&&(xe=m(ce,Ae),Ae+=4),ye&&(Ae+=4);for(var Ce=xe+j,Pe=0;Pe<Ne;Pe++){if(Se?(De=m(ce,Ae),Ae+=4):De=se,Re?(ke=m(ce,Ae),Ae+=4):ke=ie,Ie&&(Ae+=4),Oe&&(be===0?we=m(ce,Ae):we=g(ce,Ae),Ae+=4),i.type===_.ElementaryStreamTypes.VIDEO)for(var me=0;me<ke;){var Te=m(L,Ce);if(Ce+=4,s(O,L[Ce])){var ve=L.subarray(Ce,Ce+Te);A(ve,O?2:1,c+we/R,C)}Ce+=Te,me+=Te+4}c+=De/R}}))})})}),C}function o(c){if(!c)return!1;var i=c.indexOf("."),C=i<0?c:c.substring(0,i);return C==="hvc1"||C==="hev1"||C==="dvh1"||C==="dvhe"}function s(c,i){if(c){var C=i>>1&63;return C===39||C===40}else{var L=i&31;return L===6}}function A(c,i,C,L){var R=u(c),B=0;B+=i;for(var O=0,K=0,G=!1,j=0;B<R.length;){O=0;do{if(B>=R.length)break;j=R[B++],O+=j}while(j===255);K=0;do{if(B>=R.length)break;j=R[B++],K+=j}while(j===255);var Y=R.length-B;if(!G&&O===4&&B<R.length){G=!0;var V=R[B++];if(V===181){var X=b(R,B);if(B+=2,X===49){var Z=m(R,B);if(B+=4,Z===1195456820){var $=R[B++];if($===3){var ee=R[B++],ae=31&ee,ne=64&ee,oe=ne?2+ae*3:0,se=new Uint8Array(oe);if(ne){se[0]=ee;for(var te=1;te<oe;te++)se[te]=R[B++]}L.push({type:$,payloadType:O,pts:C,bytes:se})}}}}}else if(O===5&&K<Y){if(G=!0,K>16){for(var ie=[],ue=0;ue<16;ue++){var de=R[B++].toString(16);ie.push(de.length==1?"0"+de:de),(ue===3||ue===5||ue===7||ue===9)&&ie.push("-")}for(var ce=K-16,be=new Uint8Array(ce),he=0;he<ce;he++)be[he]=R[B++];L.push({payloadType:O,pts:C,uuid:ie.join(""),userData:(0,D.utf8ArrayToStr)(be),userDataBytes:be})}}else if(K<Y)B+=K;else if(K>Y)break}}function u(c){for(var i=c.byteLength,C=[],L=1;L<i-2;)c[L]===0&&c[L+1]===0&&c[L+2]===3?(C.push(L+2),L+=2):L++;if(C.length===0)return c;var R=i-C.length,B=new Uint8Array(R),O=0;for(L=0;L<R;O++,L++)O===C[0]&&(O++,C.shift()),B[L]=c[O];return B}function f(c){var i=c[0],C="",L="",R=0,B=0,O=0,K=0,G=0,j=0;if(i===0){for(;v(c.subarray(j,j+1))!=="\0";)C+=v(c.subarray(j,j+1)),j+=1;for(C+=v(c.subarray(j,j+1)),j+=1;v(c.subarray(j,j+1))!=="\0";)L+=v(c.subarray(j,j+1)),j+=1;L+=v(c.subarray(j,j+1)),j+=1,R=m(c,12),B=m(c,16),K=m(c,20),G=m(c,24),j=28}else if(i===1){j+=4,R=m(c,j),j+=4;var Y=m(c,j);j+=4;var V=m(c,j);for(j+=4,O=Math.pow(2,32)*Y+V,Number.isSafeInteger(O)||(O=Number.MAX_SAFE_INTEGER,console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),K=m(c,j),j+=4,G=m(c,j),j+=4;v(c.subarray(j,j+1))!=="\0";)C+=v(c.subarray(j,j+1)),j+=1;for(C+=v(c.subarray(j,j+1)),j+=1;v(c.subarray(j,j+1))!=="\0";)L+=v(c.subarray(j,j+1)),j+=1;L+=v(c.subarray(j,j+1)),j+=1}var X=c.subarray(j,c.byteLength);return{schemeIdUri:C,value:L,timeScale:R,presentationTime:O,presentationTimeDelta:B,eventDuration:K,id:G,payload:X}}},"./src/utils/output-filter.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(p,k){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=p,this.trackName=k}var D=_.prototype;return D.dispatchCue=function(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},D.newCue=function(k,S,v){(this.startTime===null||this.startTime>k)&&(this.startTime=k),this.endTime=S,this.screen=v,this.timelineController.createCaptionsTrack(this.trackName)},D.reset=function(){this.cueRanges=[],this.startTime=null},_}()},"./src/utils/texttrack-utils.ts":(W,M,x)=>{x.r(M),x.d(M,{addCueToTrack:()=>D,clearCurrentCues:()=>p,getCuesInRange:()=>v,removeCuesInRange:()=>k,sendAddTrackEvent:()=>_});var w=x("./src/utils/logger.ts");function _(b,m){var g;try{g=new Event("addtrack")}catch{g=document.createEvent("Event"),g.initEvent("addtrack",!1,!1)}g.track=b,m.dispatchEvent(g)}function D(b,m){var g=b.mode;if(g==="disabled"&&(b.mode="hidden"),b.cues&&!b.cues.getCueById(m.id))try{if(b.addCue(m),!b.cues.getCueById(m.id))throw new Error("addCue is failed for: "+m)}catch(y){w.logger.debug("[texttrack-utils]: "+y);var E=new self.TextTrackCue(m.startTime,m.endTime,m.text);E.id=m.id,b.addCue(E)}g==="disabled"&&(b.mode=g)}function p(b){var m=b.mode;if(m==="disabled"&&(b.mode="hidden"),b.cues)for(var g=b.cues.length;g--;)b.removeCue(b.cues[g]);m==="disabled"&&(b.mode=m)}function k(b,m,g,E){var y=b.mode;if(y==="disabled"&&(b.mode="hidden"),b.cues&&b.cues.length>0)for(var T=v(b.cues,m,g),l=0;l<T.length;l++)(!E||E(T[l]))&&b.removeCue(T[l]);y==="disabled"&&(b.mode=y)}function S(b,m){if(m<b[0].startTime)return 0;var g=b.length-1;if(m>b[g].endTime)return-1;for(var E=0,y=g;E<=y;){var T=Math.floor((y+E)/2);if(m<b[T].startTime)y=T-1;else if(m>b[T].startTime&&E<g)E=T+1;else return T}return b[E].startTime-m<m-b[y].startTime?E:y}function v(b,m,g){var E=[],y=S(b,m);if(y>-1)for(var T=y,l=b.length;T<l;T++){var r=b[T];if(r.startTime>=m&&r.endTime<=g)E.push(r);else if(r.startTime>g)return E}return E}},"./src/utils/time-ranges.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w={toString:function(p){for(var k="",S=p.length,v=0;v<S;v++)k+="["+p.start(v).toFixed(3)+","+p.end(v).toFixed(3)+"]";return k}};const _=w},"./src/utils/timescale-conversion.ts":(W,M,x)=>{x.r(M),x.d(M,{toMpegTsClockFromTimescale:()=>k,toMsFromMpegTsClock:()=>p,toTimescaleFromBase:()=>_,toTimescaleFromScale:()=>D});var w=9e4;function _(S,v,b,m){b===void 0&&(b=1),m===void 0&&(m=!1);var g=S*v*b;return m?Math.round(g):g}function D(S,v,b,m){return b===void 0&&(b=1),m===void 0&&(m=!1),_(S,v,1/b,m)}function p(S,v){return v===void 0&&(v=!1),_(S,1e3,1/w,v)}function k(S,v){return v===void 0&&(v=1),_(S,w,1/v)}},"./src/utils/typed-array.ts":(W,M,x)=>{x.r(M),x.d(M,{sliceUint8:()=>w});function w(_,D,p){return Uint8Array.prototype.slice?_.slice(D,p):new Uint8Array(Array.prototype.slice.call(_,D,p))}},"./src/utils/vttcue.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});const w=function(){if(typeof self<"u"&&self.VTTCue)return self.VTTCue;var _=["","lr","rl"],D=["start","middle","end","left","right"];function p(m,g){if(typeof g!="string"||!Array.isArray(m))return!1;var E=g.toLowerCase();return~m.indexOf(E)?E:!1}function k(m){return p(_,m)}function S(m){return p(D,m)}function v(m){for(var g=arguments.length,E=new Array(g>1?g-1:0),y=1;y<g;y++)E[y-1]=arguments[y];for(var T=1;T<arguments.length;T++){var l=arguments[T];for(var r in l)m[r]=l[r]}return m}function b(m,g,E){var y=this,T={enumerable:!0};y.hasBeenReset=!1;var l="",r=!1,n=m,d=g,h=E,a=null,t="",e=!0,o="auto",s="start",A=50,u="middle",f=50,c="middle";Object.defineProperty(y,"id",v({},T,{get:function(){return l},set:function(C){l=""+C}})),Object.defineProperty(y,"pauseOnExit",v({},T,{get:function(){return r},set:function(C){r=!!C}})),Object.defineProperty(y,"startTime",v({},T,{get:function(){return n},set:function(C){if(typeof C!="number")throw new TypeError("Start time must be set to a number.");n=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"endTime",v({},T,{get:function(){return d},set:function(C){if(typeof C!="number")throw new TypeError("End time must be set to a number.");d=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"text",v({},T,{get:function(){return h},set:function(C){h=""+C,this.hasBeenReset=!0}})),Object.defineProperty(y,"region",v({},T,{get:function(){return a},set:function(C){a=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"vertical",v({},T,{get:function(){return t},set:function(C){var L=k(C);if(L===!1)throw new SyntaxError("An invalid or illegal string was specified.");t=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"snapToLines",v({},T,{get:function(){return e},set:function(C){e=!!C,this.hasBeenReset=!0}})),Object.defineProperty(y,"line",v({},T,{get:function(){return o},set:function(C){if(typeof C!="number"&&C!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");o=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"lineAlign",v({},T,{get:function(){return s},set:function(C){var L=S(C);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");s=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"position",v({},T,{get:function(){return A},set:function(C){if(C<0||C>100)throw new Error("Position must be between 0 and 100.");A=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"positionAlign",v({},T,{get:function(){return u},set:function(C){var L=S(C);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");u=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"size",v({},T,{get:function(){return f},set:function(C){if(C<0||C>100)throw new Error("Size must be between 0 and 100.");f=C,this.hasBeenReset=!0}})),Object.defineProperty(y,"align",v({},T,{get:function(){return c},set:function(C){var L=S(C);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");c=L,this.hasBeenReset=!0}})),y.displayState=void 0}return b.prototype.getCueAsHTML=function(){var m=self.WebVTT;return m.convertCueToDOMTree(self,this.text)},b}()},"./src/utils/vttparser.ts":(W,M,x)=>{x.r(M),x.d(M,{VTTParser:()=>g,fixLineBreaks:()=>m,parseTimeStamp:()=>D});var w=x("./src/utils/vttcue.ts"),_=function(){function E(){}var y=E.prototype;return y.decode=function(l,r){if(!l)return"";if(typeof l!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(l))},E}();function D(E){function y(l,r,n,d){return(l|0)*3600+(r|0)*60+(n|0)+parseFloat(d||0)}var T=E.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return T?parseFloat(T[2])>59?y(T[2],T[3],0,T[4]):y(T[1],T[2],T[3],T[4]):null}var p=function(){function E(){this.values=Object.create(null)}var y=E.prototype;return y.set=function(l,r){!this.get(l)&&r!==""&&(this.values[l]=r)},y.get=function(l,r,n){return n?this.has(l)?this.values[l]:r[n]:this.has(l)?this.values[l]:r},y.has=function(l){return l in this.values},y.alt=function(l,r,n){for(var d=0;d<n.length;++d)if(r===n[d]){this.set(l,r);break}},y.integer=function(l,r){/^-?\d+$/.test(r)&&this.set(l,parseInt(r,10))},y.percent=function(l,r){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(r)){var n=parseFloat(r);if(n>=0&&n<=100)return this.set(l,n),!0}return!1},E}();function k(E,y,T,l){var r=l?E.split(l):[E];for(var n in r)if(typeof r[n]=="string"){var d=r[n].split(T);if(d.length===2){var h=d[0],a=d[1];y(h,a)}}}var S=new w.default(0,0,""),v=S.align==="middle"?"middle":"center";function b(E,y,T){var l=E;function r(){var h=D(E);if(h===null)throw new Error("Malformed timestamp: "+l);return E=E.replace(/^[^\sa-zA-Z-]+/,""),h}function n(h,a){var t=new p;k(h,function(s,A){var u;switch(s){case"region":for(var f=T.length-1;f>=0;f--)if(T[f].id===A){t.set(s,T[f].region);break}break;case"vertical":t.alt(s,A,["rl","lr"]);break;case"line":u=A.split(","),t.integer(s,u[0]),t.percent(s,u[0])&&t.set("snapToLines",!1),t.alt(s,u[0],["auto"]),u.length===2&&t.alt("lineAlign",u[1],["start",v,"end"]);break;case"position":u=A.split(","),t.percent(s,u[0]),u.length===2&&t.alt("positionAlign",u[1],["start",v,"end","line-left","line-right","auto"]);break;case"size":t.percent(s,A);break;case"align":t.alt(s,A,["start",v,"end","left","right"]);break}},/:/,/\s/),a.region=t.get("region",null),a.vertical=t.get("vertical","");var e=t.get("line","auto");e==="auto"&&S.line===-1&&(e=-1),a.line=e,a.lineAlign=t.get("lineAlign","start"),a.snapToLines=t.get("snapToLines",!0),a.size=t.get("size",100),a.align=t.get("align",v);var o=t.get("position","auto");o==="auto"&&S.position===50&&(o=a.align==="start"||a.align==="left"?0:a.align==="end"||a.align==="right"?100:50),a.position=o}function d(){E=E.replace(/^\s+/,"")}if(d(),y.startTime=r(),d(),E.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+l);E=E.slice(3),d(),y.endTime=r(),d(),n(E,y)}function m(E){return E.replace(/<br(?: \/)?>/gi,`
`)}var g=function(){function E(){this.state="INITIAL",this.buffer="",this.decoder=new _,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var y=E.prototype;return y.parse=function(l){var r=this;l&&(r.buffer+=r.decoder.decode(l,{stream:!0}));function n(){var o=r.buffer,s=0;for(o=m(o);s<o.length&&o[s]!=="\r"&&o[s]!==`
`;)++s;var A=o.slice(0,s);return o[s]==="\r"&&++s,o[s]===`
`&&++s,r.buffer=o.slice(s),A}function d(o){k(o,function(s,A){},/:/)}try{var h="";if(r.state==="INITIAL"){if(!/\r\n|\n/.test(r.buffer))return this;h=n();var a=h.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!a||!a[0])throw new Error("Malformed WebVTT signature.");r.state="HEADER"}for(var t=!1;r.buffer;){if(!/\r\n|\n/.test(r.buffer))return this;switch(t?t=!1:h=n(),r.state){case"HEADER":/:/.test(h)?d(h):h||(r.state="ID");continue;case"NOTE":h||(r.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(h)){r.state="NOTE";break}if(!h)continue;if(r.cue=new w.default(0,0,""),r.state="CUE",h.indexOf("-->")===-1){r.cue.id=h;continue}case"CUE":if(!r.cue){r.state="BADCUE";continue}try{b(h,r.cue,r.regionList)}catch{r.cue=null,r.state="BADCUE";continue}r.state="CUETEXT";continue;case"CUETEXT":{var e=h.indexOf("-->")!==-1;if(!h||e&&(t=!0)){r.oncue&&r.cue&&r.oncue(r.cue),r.cue=null,r.state="ID";continue}if(r.cue===null)continue;r.cue.text&&(r.cue.text+=`
`),r.cue.text+=h}continue;case"BADCUE":h||(r.state="ID")}}}catch{r.state==="CUETEXT"&&r.cue&&r.oncue&&r.oncue(r.cue),r.cue=null,r.state=r.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},y.flush=function(){var l=this;try{if((l.cue||l.state==="HEADER")&&(l.buffer+=`

`,l.parse()),l.state==="INITIAL"||l.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(r){l.onparsingerror&&l.onparsingerror(r)}return l.onflush&&l.onflush(),this},E}()},"./src/utils/webvtt-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{generateCueId:()=>g,parseWebVTT:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/vttparser.ts"),D=x("./src/demux/id3.ts"),p=x("./src/utils/timescale-conversion.ts"),k=x("./src/remux/mp4-remuxer.ts"),S=/\r\n|\n\r|\n|\r/g,v=function(l,r,n){return n===void 0&&(n=0),l.slice(n,n+r.length)===r},b=function(l){var r=parseInt(l.slice(-3)),n=parseInt(l.slice(-6,-4)),d=parseInt(l.slice(-9,-7)),h=l.length>9?parseInt(l.substring(0,l.indexOf(":"))):0;if(!(0,w.isFiniteNumber)(r)||!(0,w.isFiniteNumber)(n)||!(0,w.isFiniteNumber)(d)||!(0,w.isFiniteNumber)(h))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+l);return r+=1e3*n,r+=60*1e3*d,r+=60*60*1e3*h,r},m=function(l){for(var r=5381,n=l.length;n;)r=r*33^l.charCodeAt(--n);return(r>>>0).toString()};function g(T,l,r){return m(T.toString())+m(l.toString())+m(r)}var E=function(l,r,n){var d=l[r],h=l[d.prevCC];if(!h||!h.new&&d.new){l.ccOffset=l.presentationOffset=d.start,d.new=!1;return}for(;(a=h)!==null&&a!==void 0&&a.new;){var a;l.ccOffset+=d.start-h.start,d.new=!1,d=h,h=l[d.prevCC]}l.presentationOffset=n};function y(T,l,r,n,d,h,a,t){var e=new _.VTTParser,o=(0,D.utf8ArrayToStr)(new Uint8Array(T)).trim().replace(S,`
`).split(`
`),s=[],A=(0,p.toMpegTsClockFromTimescale)(l,r),u="00:00.000",f=0,c=0,i,C=!0;e.oncue=function(L){var R=n[d],B=n.ccOffset,O=(f-A)/9e4;R!=null&&R.new&&(c!==void 0?B=n.ccOffset=R.start:E(n,d,O)),O&&(B=O-n.presentationOffset);var K=L.endTime-L.startTime,G=(0,k.normalizePts)((L.startTime+B-c)*9e4,h*9e4)/9e4;L.startTime=Math.max(G,0),L.endTime=Math.max(G+K,0);var j=L.text.trim();L.text=decodeURIComponent(encodeURIComponent(j)),L.id||(L.id=g(L.startTime,L.endTime,j)),L.endTime>0&&s.push(L)},e.onparsingerror=function(L){i=L},e.onflush=function(){if(i){t(i);return}a(s)},o.forEach(function(L){if(C)if(v(L,"X-TIMESTAMP-MAP=")){C=!1,L.slice(16).split(",").forEach(function(R){v(R,"LOCAL:")?u=R.slice(6):v(R,"MPEGTS:")&&(f=parseInt(R.slice(7)))});try{c=b(u)/1e3}catch(R){i=R}return}else L===""&&(C=!1);e.parse(L+`
`)}),e.flush()}},"./src/utils/xhr-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/utils/logger.ts"),_=x("./src/loader/load-stats.ts"),D=/^age:\s*[\d.]+\s*$/m,p=function(){function S(b){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=b?b.xhrSetup:null,this.stats=new _.LoadStats,this.retryDelay=0}var v=S.prototype;return v.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},v.abortInternal=function(){var m=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),m&&(m.onreadystatechange=null,m.onprogress=null,m.readyState!==4&&(this.stats.aborted=!0,m.abort()))},v.abort=function(){var m;this.abortInternal(),(m=this.callbacks)!==null&&m!==void 0&&m.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},v.load=function(m,g,E){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=m,this.config=g,this.callbacks=E,this.retryDelay=g.retryDelay,this.loadInternal()},v.loadInternal=function(){var m=this.config,g=this.context;if(!!m){var E=this.loader=new self.XMLHttpRequest,y=this.stats;y.loading.first=0,y.loaded=0;var T=this.xhrSetup;try{if(T)try{T(E,g.url)}catch{E.open("GET",g.url,!0),T(E,g.url)}E.readyState||E.open("GET",g.url,!0);var l=this.context.headers;if(l)for(var r in l)E.setRequestHeader(r,l[r])}catch(n){this.callbacks.onError({code:E.status,text:n.message},g,E);return}g.rangeEnd&&E.setRequestHeader("Range","bytes="+g.rangeStart+"-"+(g.rangeEnd-1)),E.onreadystatechange=this.readystatechange.bind(this),E.onprogress=this.loadprogress.bind(this),E.responseType=g.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),m.timeout),E.send()}},v.readystatechange=function(){var m=this.context,g=this.loader,E=this.stats;if(!(!m||!g)){var y=g.readyState,T=this.config;if(!E.aborted&&y>=2)if(self.clearTimeout(this.requestTimeout),E.loading.first===0&&(E.loading.first=Math.max(self.performance.now(),E.loading.start)),y===4){g.onreadystatechange=null,g.onprogress=null;var l=g.status,r=g.responseType==="arraybuffer";if(l>=200&&l<300&&(r&&g.response||g.responseText!==null)){E.loading.end=Math.max(self.performance.now(),E.loading.first);var n,d;if(r?(n=g.response,d=n.byteLength):(n=g.responseText,d=n.length),E.loaded=E.total=d,!this.callbacks)return;var h=this.callbacks.onProgress;if(h&&h(E,m,n,g),!this.callbacks)return;var a={url:g.responseURL,data:n};this.callbacks.onSuccess(a,E,m,g)}else E.retry>=T.maxRetry||l>=400&&l<499?(w.logger.error(l+" while loading "+m.url),this.callbacks.onError({code:l,text:g.statusText},m,g)):(w.logger.warn(l+" while loading "+m.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,T.maxRetryDelay),E.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),T.timeout)}},v.loadtimeout=function(){w.logger.warn("timeout while loading "+this.context.url);var m=this.callbacks;m&&(this.abortInternal(),m.onTimeout(this.stats,this.context,this.loader))},v.loadprogress=function(m){var g=this.stats;g.loaded=m.loaded,m.lengthComputable&&(g.total=m.total)},v.getCacheAge=function(){var m=null;if(this.loader&&D.test(this.loader.getAllResponseHeaders())){var g=this.loader.getResponseHeader("age");m=g?parseFloat(g):null}return m},S}();const k=p},"./node_modules/eventemitter3/index.js":W=>{var M=Object.prototype.hasOwnProperty,x="~";function w(){}Object.create&&(w.prototype=Object.create(null),new w().__proto__||(x=!1));function _(S,v,b){this.fn=S,this.context=v,this.once=b||!1}function D(S,v,b,m,g){if(typeof b!="function")throw new TypeError("The listener must be a function");var E=new _(b,m||S,g),y=x?x+v:v;return S._events[y]?S._events[y].fn?S._events[y]=[S._events[y],E]:S._events[y].push(E):(S._events[y]=E,S._eventsCount++),S}function p(S,v){--S._eventsCount===0?S._events=new w:delete S._events[v]}function k(){this._events=new w,this._eventsCount=0}k.prototype.eventNames=function(){var v=[],b,m;if(this._eventsCount===0)return v;for(m in b=this._events)M.call(b,m)&&v.push(x?m.slice(1):m);return Object.getOwnPropertySymbols?v.concat(Object.getOwnPropertySymbols(b)):v},k.prototype.listeners=function(v){var b=x?x+v:v,m=this._events[b];if(!m)return[];if(m.fn)return[m.fn];for(var g=0,E=m.length,y=new Array(E);g<E;g++)y[g]=m[g].fn;return y},k.prototype.listenerCount=function(v){var b=x?x+v:v,m=this._events[b];return m?m.fn?1:m.length:0},k.prototype.emit=function(v,b,m,g,E,y){var T=x?x+v:v;if(!this._events[T])return!1;var l=this._events[T],r=arguments.length,n,d;if(l.fn){switch(l.once&&this.removeListener(v,l.fn,void 0,!0),r){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,b),!0;case 3:return l.fn.call(l.context,b,m),!0;case 4:return l.fn.call(l.context,b,m,g),!0;case 5:return l.fn.call(l.context,b,m,g,E),!0;case 6:return l.fn.call(l.context,b,m,g,E,y),!0}for(d=1,n=new Array(r-1);d<r;d++)n[d-1]=arguments[d];l.fn.apply(l.context,n)}else{var h=l.length,a;for(d=0;d<h;d++)switch(l[d].once&&this.removeListener(v,l[d].fn,void 0,!0),r){case 1:l[d].fn.call(l[d].context);break;case 2:l[d].fn.call(l[d].context,b);break;case 3:l[d].fn.call(l[d].context,b,m);break;case 4:l[d].fn.call(l[d].context,b,m,g);break;default:if(!n)for(a=1,n=new Array(r-1);a<r;a++)n[a-1]=arguments[a];l[d].fn.apply(l[d].context,n)}}return!0},k.prototype.on=function(v,b,m){return D(this,v,b,m,!1)},k.prototype.once=function(v,b,m){return D(this,v,b,m,!0)},k.prototype.removeListener=function(v,b,m,g){var E=x?x+v:v;if(!this._events[E])return this;if(!b)return p(this,E),this;var y=this._events[E];if(y.fn)y.fn===b&&(!g||y.once)&&(!m||y.context===m)&&p(this,E);else{for(var T=0,l=[],r=y.length;T<r;T++)(y[T].fn!==b||g&&!y[T].once||m&&y[T].context!==m)&&l.push(y[T]);l.length?this._events[E]=l.length===1?l[0]:l:p(this,E)}return this},k.prototype.removeAllListeners=function(v){var b;return v?(b=x?x+v:v,this._events[b]&&p(this,b)):(this._events=new w,this._eventsCount=0),this},k.prototype.off=k.prototype.removeListener,k.prototype.addListener=k.prototype.on,k.prefixed=x,k.EventEmitter=k,W.exports=k},"./node_modules/url-toolkit/src/url-toolkit.js":function(W){(function(M){var x=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,w=/^(?=([^\/?#]*))\1([^]*)$/,_=/(?:\/|^)\.(?=\/)/g,D=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,p={buildAbsoluteURL:function(k,S,v){if(v=v||{},k=k.trim(),S=S.trim(),!S){if(!v.alwaysNormalize)return k;var b=p.parseURL(k);if(!b)throw new Error("Error trying to parse base URL.");return b.path=p.normalizePath(b.path),p.buildURLFromParts(b)}var m=p.parseURL(S);if(!m)throw new Error("Error trying to parse relative URL.");if(m.scheme)return v.alwaysNormalize?(m.path=p.normalizePath(m.path),p.buildURLFromParts(m)):S;var g=p.parseURL(k);if(!g)throw new Error("Error trying to parse base URL.");if(!g.netLoc&&g.path&&g.path[0]!=="/"){var E=w.exec(g.path);g.netLoc=E[1],g.path=E[2]}g.netLoc&&!g.path&&(g.path="/");var y={scheme:g.scheme,netLoc:m.netLoc,path:null,params:m.params,query:m.query,fragment:m.fragment};if(!m.netLoc&&(y.netLoc=g.netLoc,m.path[0]!=="/"))if(!m.path)y.path=g.path,m.params||(y.params=g.params,m.query||(y.query=g.query));else{var T=g.path,l=T.substring(0,T.lastIndexOf("/")+1)+m.path;y.path=p.normalizePath(l)}return y.path===null&&(y.path=v.alwaysNormalize?p.normalizePath(m.path):m.path),p.buildURLFromParts(y)},parseURL:function(k){var S=x.exec(k);return S?{scheme:S[1]||"",netLoc:S[2]||"",path:S[3]||"",params:S[4]||"",query:S[5]||"",fragment:S[6]||""}:null},normalizePath:function(k){for(k=k.split("").reverse().join("").replace(_,"");k.length!==(k=k.replace(D,"")).length;);return k.split("").reverse().join("")},buildURLFromParts:function(k){return k.scheme+k.netLoc+k.path+k.params+k.query+k.fragment}};W.exports=p})()}},Ee={};function J(W){var M=Ee[W];if(M!==void 0)return M.exports;var x=Ee[W]={exports:{}};return Be[W].call(x.exports,x,x.exports,J),x.exports}J.m=Be,J.n=W=>{var M=W&&W.__esModule?()=>W.default:()=>W;return J.d(M,{a:M}),M},J.d=(W,M)=>{for(var x in M)J.o(M,x)&&!J.o(W,x)&&Object.defineProperty(W,x,{enumerable:!0,get:M[x]})},J.o=(W,M)=>Object.prototype.hasOwnProperty.call(W,M),J.r=W=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(W,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(W,"__esModule",{value:!0})};var _e=J("./src/hls.ts");return _e=_e.default,_e})())})(hn);const br=fn(hn.exports);function xr(nt){const Ze=[],Be=nt.split("#");for(let Ee=0;Ee<Be.length;Ee++){const _e=Be[Ee].split("$");Ze.push({id:Ee+1,name:_e[0],url:_e[1]})}return Ze}const Cr=["show"],Tr=["show"],_r={key:0,class:"director"},Sr={key:1,class:"actor"},Lr={class:"episode"},Ir=ar({__name:"video",setup(nt){const Ze=sr(),Be=fr(),Ee=pt(!1),J=pt(null),_e=pt(),W=pt([]),M=pt(Ze.params.id),x=ir(()=>isNaN(Number(Ze.params.num))?0:Number(Ze.params.num)-1);function w(_){Be.push({name:"video-num",params:{id:M.value,num:_}})}return zt(()=>{pr(hr+"/"+M.value,{},_=>{_e.value=_,W.value=xr(_.url),Ee.value=!0})}),zt(()=>{w(x.value+1)}),or(()=>{zt(()=>{if(W.value.length!=0){if(W.value.length<=x.value){w(1);return}new Er({container:J.value,video:{url:W.value[x.value].url,type:"customHls",customType:{customHls:function(_,D){const p=new br;p.loadSource(_.src),p.attachMedia(_)}}}})}})}),(_,D)=>{const p=vr,k=gr,S=lr,v=Ar,b=yr;return lt(),un(S,{cols:"10","item-responsive":"",responsive:"screen"},{default:He(()=>[tt(p,{span:"0 m:2 l:2"}),tt(p,{span:"10 m:6 l:6"},{default:He(()=>[tt(b,{show:!Ee.value},{default:He(()=>{var m;return[ht("div",{class:dr(["player-box",Ee.value?"":"player-box-not-ready"])},[ht("div",{class:"play",ref_key:"player",ref:J,show:!Ee.value},null,8,Cr),ht("div",{class:"play-info",show:!Ee.value},null,8,Tr)],2),ht("div",null,[tt(v,null,ur({header:He(()=>{var g;return[Yt(vt((g=_e.value)==null?void 0:g.name),1)]}),action:He(()=>[tt(S,{cols:"12","item-responsive":"",responsive:"screen"},{default:He(()=>[(lt(!0),St(cn,null,cr(W.value,g=>(lt(),St(cn,null,[g.url!=""?(lt(),un(p,{key:0,span:"3 m:1 l:1"},{default:He(()=>[ht("div",Lr,[tt(k,{onClick:E=>w(g.id)},{default:He(()=>[Yt(vt(g.name),1)]),_:2},1032,["onClick"])])]),_:2},1024)):Vt("",!0)],64))),256))]),_:1})]),default:He(()=>{var g,E,y,T;return[((g=_e.value)==null?void 0:g.director)!=""?(lt(),St("div",_r," \u5BFC\u6F14\uFF1A"+vt((E=_e.value)==null?void 0:E.director),1)):Vt("",!0),((y=_e.value)==null?void 0:y.actor)!=""?(lt(),St("div",Sr," \u4E3B\u6F14\uFF1A"+vt((T=_e.value)==null?void 0:T.actor),1)):Vt("",!0)]}),_:2},[((m=_e.value)==null?void 0:m.description)!=""?{name:"footer",fn:He(()=>{var g;return[Yt(" \u7B80\u4ECB\uFF1A"+vt((g=_e.value)==null?void 0:g.description),1)]}),key:"0"}:void 0]),1024)])]}),_:1},8,["show"])]),_:1}),tt(p,{span:"0 m:2 l:2"})]),_:1})}}});const Pr=mr(Ir,[["__scopeId","data-v-803804e5"]]);export{Pr as default};
