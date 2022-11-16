import{bu as fn,bv as rr,d as ar,r as pt,$ as ir,l as zt,I as or,c as un,w as He,s as sr,_ as lr,o as lt,b as tt,i as ht,bw as dr,bx as ur,m as Yt,t as vt,e as St,f as cr,F as cn,A as Vt,k as fr,g as pr,by as hr,h as vr,bz as gr,q as mr}from"./index.460b4d4d.js";import{_ as Ar}from"./Card.c5aba8f7.js";import{_ as yr}from"./Spin.a1a6e225.js";import"./Close.506a5cfa.js";var pn={exports:{}};(function(nt,Ze){(function(Be,Ee){nt.exports=Ee()})(self,()=>(()=>{var Be={1916:(W,M,x)=>{var w=x(6877);W.exports=function(_){var D,h="",k=(_=_||{}).video,S=_.options,v=w.$escape,b=_.tran,m=_.icons,g=_.index,A=w.$each;return _.$value,_.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,D=x(1568)(k),h+=D,h+=`
    `,S.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=v(S.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,S.danmaku&&S.danmaku.bottm&&(h+=' style="margin-bottom:',h+=v(S.danmaku.bottm),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,S.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=v(b("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=m.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=v(b("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=m.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=v(b("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(g),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=v(b("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(g),h+=`" value="1">
                    <span>`,h+=v(b("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(g),h+=`" value="0" checked>
                    <span>`,h+=v(b("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(g),h+=`" value="2">
                    <span>`,h+=v(b("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=v(b("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=v(b("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=m.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=m.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=m.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=v(S.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=v(S.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,S.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=v(S.theme),h+=';"></span>',h+=v(b("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,S.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=v(S.video.quality[S.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,A(S.video.quality,function(y,C){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=v(C),h+='">',h+=v(y.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,S.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=v(b("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=m.camera,h+=`</span>
        </div>
        `),h+=`
        `,S.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=v(b("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=m.airplay,h+=`</span>
        </div>
        `),h+=`
        `,S.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=v(b("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=m.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=v(b("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.comment,h+=`</span>
            </button>
        </div>
        `,S.subtitle&&(h+=`
        `,typeof S.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=v(b("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=v(b("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,A(S.subtitle.url,function(y,C){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=v(y.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=v(y.lang?y.name?y.name+" ("+b(y.lang)+")":b(y.lang):y.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=v(b("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=v(b("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=m.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=v(b("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=v(b("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=v(b("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=v(b("opacity-danmaku")),h+=`</span>
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
                    `,A(S.playbackSpeed,function(y,C){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=v(y),h+=`">
                            <span class="dplayer-label">`,h+=v(y===1?b("normal"):y),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=v(b("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=v(b("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=m.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=v(S.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=v(S.theme),h+=`"></span>
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
    `,S.danmaku&&(h+=`
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
    `),h+=`
</div>
<div class="dplayer-menu">
    `,A(S.contextmenu,function(y,C){h+=`
        <div class="dplayer-menu-item">
            <a`,y.link&&(h+=' target="_blank"'),h+=' href="',h+=v(y.link||"javascript:void(0);"),h+='">',y.key&&(h+=" ",h+=v(b(y.key))),y.text&&(h+=" ",h+=v(y.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=m.play,h+=`
</button>`}},1568:(W,M,x)=>{var w=x(6877);W.exports=function(_){var D="",h=(_=_||{}).enableSubtitle,k=_.subtitle,S=_.current,v=_.airplay,b=_.pic,m=w.$escape,g=_.screenshot,A=_.preload,y=_.url;return h=k&&k.type==="webvtt",D+=`
<video
    class="dplayer-video `,S&&(D+="dplayer-video-current"),D+=`"
    webkit-playsinline
    `,v&&(D+=' x-webkit-airplay="allow" '),D+=`
    playsinline
    `,b&&(D+='poster="',D+=m(b),D+='"'),D+=`
    `,(g||h)&&(D+='crossorigin="anonymous"'),D+=`
    `,A&&(D+='preload="',D+=m(A),D+='"'),D+=`
    `,v?D+=`
    nosrc
    `:y&&(D+=`
    src="`,D+=m(y),D+=`"
    `),D+=`
    >
    `,v&&(D+=`
    <source src="`,D+=m(y),D+=`">
    `),D+=`
    `,h&&(D+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,D+=m(typeof k.url=="string"?k.url:k.url[k.index].url),D+=`"></track>
    `),D+`
</video>`}},3399:(W,M,x)=>{x.d(M,{Z:()=>k});var w=x(8955),_=x.n(w),D=x(8160),h=x.n(D)()(_());h.push([W.id,`:root {
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
`],sourceRoot:""}]);const k=h},3150:(W,M,x)=>{x.d(M,{Z:()=>A});var w=x(8955),_=x.n(w),D=x(8160),h=x.n(D),k=x(3399),S=x(8431),v=x.n(S),b=new URL(x(7831),x.b),m=h()(_());m.i(k.Z);var g=v()(b);m.push([W.id,`@-webkit-keyframes my-face {
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
}`],sourceRoot:""}]);const A=m},9624:W=>{var M=[];function x(D){for(var h=-1,k=0;k<M.length;k++)if(M[k].identifier===D){h=k;break}return h}function w(D,h){for(var k={},S=[],v=0;v<D.length;v++){var b=D[v],m=h.base?b[0]+h.base:b[0],g=k[m]||0,A="".concat(m," ").concat(g);k[m]=g+1;var y=x(A),C={css:b[1],media:b[2],sourceMap:b[3],supports:b[4],layer:b[5]};if(y!==-1)M[y].references++,M[y].updater(C);else{var i=_(C,h);h.byIndex=v,M.splice(v,0,{identifier:A,updater:i,references:1})}S.push(A)}return S}function _(D,h){var k=h.domAPI(h);return k.update(D),function(S){if(S){if(S.css===D.css&&S.media===D.media&&S.sourceMap===D.sourceMap&&S.supports===D.supports&&S.layer===D.layer)return;k.update(D=S)}else k.remove()}}W.exports=function(D,h){var k=w(D=D||[],h=h||{});return function(S){S=S||[];for(var v=0;v<k.length;v++){var b=x(k[v]);M[b].references--}for(var m=w(S,h),g=0;g<k.length;g++){var A=x(k[g]);M[A].references===0&&(M[A].updater(),M.splice(A,1))}k=m}}},6892:W=>{var M={};W.exports=function(x,w){var _=function(D){if(M[D]===void 0){var h=document.querySelector(D);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}M[D]=h}return M[D]}(x);if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");_.appendChild(w)}},2716:W=>{W.exports=function(M){var x=document.createElement("style");return M.setAttributes(x,M.attributes),M.insert(x,M.options),x}},6359:(W,M,x)=>{W.exports=function(w){var _=x.nc;_&&w.setAttribute("nonce",_)}},6990:W=>{W.exports=function(M){var x=M.insertStyleElement(M);return{update:function(w){(function(_,D,h){var k="";h.supports&&(k+="@supports (".concat(h.supports,") {")),h.media&&(k+="@media ".concat(h.media," {"));var S=h.layer!==void 0;S&&(k+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),k+=h.css,S&&(k+="}"),h.media&&(k+="}"),h.supports&&(k+="}");var v=h.sourceMap;v&&typeof btoa<"u"&&(k+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),D.styleTagTransform(k,_,D.options)})(x,M,w)},remove:function(){(function(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)})(x)}}}},230:W=>{W.exports=function(M,x){if(x.styleSheet)x.styleSheet.cssText=M;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(M))}}},6251:W=>{W.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:W=>{W.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:W=>{W.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:W=>{W.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(W,M,x)=>{var w=typeof self<"u"?self:typeof window<"u"?window:x.g!==void 0?x.g:{},_=Object.create(w),D=/["&'<>]/;function h(k){return typeof k!="string"&&(k=k==null?"":typeof k=="function"?h(k.call(k)):JSON.stringify(k)),k}_.$escape=function(k){return function(S){var v=""+S,b=D.exec(v);if(!b)return S;var m="",g=void 0,A=void 0,y=void 0;for(g=b.index,A=0;g<v.length;g++){switch(v.charCodeAt(g)){case 34:y="&#34;";break;case 38:y="&#38;";break;case 39:y="&#39;";break;case 60:y="&#60;";break;case 62:y="&#62;";break;default:continue}A!==g&&(m+=v.substring(A,g)),A=g+1,m+=y}return A!==g?m+v.substring(A,g):m}(h(k))},_.$each=function(k,S){if(Array.isArray(k))for(var v=0,b=k.length;v<b;v++)S(k[v],v);else for(var m in k)S(k[m],m)},W.exports=_},6877:(W,M,x)=>{W.exports=x(9959)},6208:(W,M,x)=>{W.exports=x(4568)},8170:(W,M,x)=>{var w=x(7201),_=x(9095),D=x(8416),h=x(6374),k=x(5967),S=x(5032),v=x(1224),b=x(4033),m=x(1766),g=x(8832),A=x(8699);W.exports=function(y){return new Promise(function(C,i){var a,n=y.data,u=y.headers,p=y.responseType;function r(){y.cancelToken&&y.cancelToken.unsubscribe(a),y.signal&&y.signal.removeEventListener("abort",a)}w.isFormData(n)&&w.isStandardBrowserEnv()&&delete u["Content-Type"];var t=new XMLHttpRequest;if(y.auth){var e=y.auth.username||"",s=y.auth.password?unescape(encodeURIComponent(y.auth.password)):"";u.Authorization="Basic "+btoa(e+":"+s)}var l=k(y.baseURL,y.url);function E(){if(t){var c="getAllResponseHeaders"in t?S(t.getAllResponseHeaders()):null,o={data:p&&p!=="text"&&p!=="json"?t.response:t.responseText,status:t.status,statusText:t.statusText,headers:c,config:y,request:t};_(function(T){C(T),r()},function(T){i(T),r()},o),t=null}}if(t.open(y.method.toUpperCase(),h(l,y.params,y.paramsSerializer),!0),t.timeout=y.timeout,"onloadend"in t?t.onloadend=E:t.onreadystatechange=function(){t&&t.readyState===4&&(t.status!==0||t.responseURL&&t.responseURL.indexOf("file:")===0)&&setTimeout(E)},t.onabort=function(){t&&(i(new m("Request aborted",m.ECONNABORTED,y,t)),t=null)},t.onerror=function(){i(new m("Network Error",m.ERR_NETWORK,y,t,t)),t=null},t.ontimeout=function(){var c=y.timeout?"timeout of "+y.timeout+"ms exceeded":"timeout exceeded",o=y.transitional||b;y.timeoutErrorMessage&&(c=y.timeoutErrorMessage),i(new m(c,o.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,y,t)),t=null},w.isStandardBrowserEnv()){var d=(y.withCredentials||v(l))&&y.xsrfCookieName?D.read(y.xsrfCookieName):void 0;d&&(u[y.xsrfHeaderName]=d)}"setRequestHeader"in t&&w.forEach(u,function(c,o){n===void 0&&o.toLowerCase()==="content-type"?delete u[o]:t.setRequestHeader(o,c)}),w.isUndefined(y.withCredentials)||(t.withCredentials=!!y.withCredentials),p&&p!=="json"&&(t.responseType=y.responseType),typeof y.onDownloadProgress=="function"&&t.addEventListener("progress",y.onDownloadProgress),typeof y.onUploadProgress=="function"&&t.upload&&t.upload.addEventListener("progress",y.onUploadProgress),(y.cancelToken||y.signal)&&(a=function(c){t&&(i(!c||c&&c.type?new g:c),t.abort(),t=null)},y.cancelToken&&y.cancelToken.subscribe(a),y.signal&&(y.signal.aborted?a():y.signal.addEventListener("abort",a))),n||(n=null);var f=A(l);f&&["http","https","file"].indexOf(f)===-1?i(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,y)):t.send(n)})}},4568:(W,M,x)=>{var w=x(7201),_=x(5305),D=x(2275),h=x(9834),k=function S(v){var b=new D(v),m=_(D.prototype.request,b);return w.extend(m,D.prototype,b),w.extend(m,b),m.create=function(g){return S(h(v,g))},m}(x(6339));k.Axios=D,k.CanceledError=x(8832),k.CancelToken=x(5027),k.isCancel=x(1893),k.VERSION=x(4316).version,k.toFormData=x(6615),k.AxiosError=x(1766),k.Cancel=k.CanceledError,k.all=function(S){return Promise.all(S)},k.spread=x(3282),k.isAxiosError=x(3319),W.exports=k,W.exports.default=k},5027:(W,M,x)=>{var w=x(8832);function _(D){if(typeof D!="function")throw new TypeError("executor must be a function.");var h;this.promise=new Promise(function(S){h=S});var k=this;this.promise.then(function(S){if(k._listeners){var v,b=k._listeners.length;for(v=0;v<b;v++)k._listeners[v](S);k._listeners=null}}),this.promise.then=function(S){var v,b=new Promise(function(m){k.subscribe(m),v=m}).then(S);return b.cancel=function(){k.unsubscribe(v)},b},D(function(S){k.reason||(k.reason=new w(S),h(k.reason))})}_.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},_.prototype.subscribe=function(D){this.reason?D(this.reason):this._listeners?this._listeners.push(D):this._listeners=[D]},_.prototype.unsubscribe=function(D){if(this._listeners){var h=this._listeners.indexOf(D);h!==-1&&this._listeners.splice(h,1)}},_.source=function(){var D;return{token:new _(function(h){D=h}),cancel:D}},W.exports=_},8832:(W,M,x)=>{var w=x(1766);function _(D){w.call(this,D==null?"canceled":D,w.ERR_CANCELED),this.name="CanceledError"}x(7201).inherits(_,w,{__CANCEL__:!0}),W.exports=_},1893:W=>{W.exports=function(M){return!(!M||!M.__CANCEL__)}},2275:(W,M,x)=>{var w=x(7201),_=x(6374),D=x(6808),h=x(7313),k=x(9834),S=x(5967),v=x(9712),b=v.validators;function m(g){this.defaults=g,this.interceptors={request:new D,response:new D}}m.prototype.request=function(g,A){typeof g=="string"?(A=A||{}).url=g:A=g||{},(A=k(this.defaults,A)).method?A.method=A.method.toLowerCase():this.defaults.method?A.method=this.defaults.method.toLowerCase():A.method="get";var y=A.transitional;y!==void 0&&v.assertOptions(y,{silentJSONParsing:b.transitional(b.boolean),forcedJSONParsing:b.transitional(b.boolean),clarifyTimeoutError:b.transitional(b.boolean)},!1);var C=[],i=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen=="function"&&e.runWhen(A)===!1||(i=i&&e.synchronous,C.unshift(e.fulfilled,e.rejected))});var a,n=[];if(this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)}),!i){var u=[h,void 0];for(Array.prototype.unshift.apply(u,C),u=u.concat(n),a=Promise.resolve(A);u.length;)a=a.then(u.shift(),u.shift());return a}for(var p=A;C.length;){var r=C.shift(),t=C.shift();try{p=r(p)}catch(e){t(e);break}}try{a=h(p)}catch(e){return Promise.reject(e)}for(;n.length;)a=a.then(n.shift(),n.shift());return a},m.prototype.getUri=function(g){g=k(this.defaults,g);var A=S(g.baseURL,g.url);return _(A,g.params,g.paramsSerializer)},w.forEach(["delete","get","head","options"],function(g){m.prototype[g]=function(A,y){return this.request(k(y||{},{method:g,url:A,data:(y||{}).data}))}}),w.forEach(["post","put","patch"],function(g){function A(y){return function(C,i,a){return this.request(k(a||{},{method:g,headers:y?{"Content-Type":"multipart/form-data"}:{},url:C,data:i}))}}m.prototype[g]=A(),m.prototype[g+"Form"]=A(!0)}),W.exports=m},1766:(W,M,x)=>{var w=x(7201);function _(k,S,v,b,m){Error.call(this),this.message=k,this.name="AxiosError",S&&(this.code=S),v&&(this.config=v),b&&(this.request=b),m&&(this.response=m)}w.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var D=_.prototype,h={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(k){h[k]={value:k}}),Object.defineProperties(_,h),Object.defineProperty(D,"isAxiosError",{value:!0}),_.from=function(k,S,v,b,m,g){var A=Object.create(D);return w.toFlatObject(k,A,function(y){return y!==Error.prototype}),_.call(A,k.message,S,v,b,m),A.name=k.name,g&&Object.assign(A,g),A},W.exports=_},6808:(W,M,x)=>{var w=x(7201);function _(){this.handlers=[]}_.prototype.use=function(D,h,k){return this.handlers.push({fulfilled:D,rejected:h,synchronous:!!k&&k.synchronous,runWhen:k?k.runWhen:null}),this.handlers.length-1},_.prototype.eject=function(D){this.handlers[D]&&(this.handlers[D]=null)},_.prototype.forEach=function(D){w.forEach(this.handlers,function(h){h!==null&&D(h)})},W.exports=_},5967:(W,M,x)=>{var w=x(724),_=x(4669);W.exports=function(D,h){return D&&!w(h)?_(D,h):h}},7313:(W,M,x)=>{var w=x(7201),_=x(6431),D=x(1893),h=x(6339),k=x(8832);function S(v){if(v.cancelToken&&v.cancelToken.throwIfRequested(),v.signal&&v.signal.aborted)throw new k}W.exports=function(v){return S(v),v.headers=v.headers||{},v.data=_.call(v,v.data,v.headers,v.transformRequest),v.headers=w.merge(v.headers.common||{},v.headers[v.method]||{},v.headers),w.forEach(["delete","get","head","post","put","patch","common"],function(b){delete v.headers[b]}),(v.adapter||h.adapter)(v).then(function(b){return S(v),b.data=_.call(v,b.data,b.headers,v.transformResponse),b},function(b){return D(b)||(S(v),b&&b.response&&(b.response.data=_.call(v,b.response.data,b.response.headers,v.transformResponse))),Promise.reject(b)})}},9834:(W,M,x)=>{var w=x(7201);W.exports=function(_,D){D=D||{};var h={};function k(A,y){return w.isPlainObject(A)&&w.isPlainObject(y)?w.merge(A,y):w.isPlainObject(y)?w.merge({},y):w.isArray(y)?y.slice():y}function S(A){return w.isUndefined(D[A])?w.isUndefined(_[A])?void 0:k(void 0,_[A]):k(_[A],D[A])}function v(A){if(!w.isUndefined(D[A]))return k(void 0,D[A])}function b(A){return w.isUndefined(D[A])?w.isUndefined(_[A])?void 0:k(void 0,_[A]):k(void 0,D[A])}function m(A){return A in D?k(_[A],D[A]):A in _?k(void 0,_[A]):void 0}var g={url:v,method:v,data:v,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:m};return w.forEach(Object.keys(_).concat(Object.keys(D)),function(A){var y=g[A]||S,C=y(A);w.isUndefined(C)&&y!==m||(h[A]=C)}),h}},9095:(W,M,x)=>{var w=x(1766);W.exports=function(_,D,h){var k=h.config.validateStatus;h.status&&k&&!k(h.status)?D(new w("Request failed with status code "+h.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(h.status/100)-4],h.config,h.request,h)):_(h)}},6431:(W,M,x)=>{var w=x(7201),_=x(6339);W.exports=function(D,h,k){var S=this||_;return w.forEach(k,function(v){D=v.call(S,D,h)}),D}},6339:(W,M,x)=>{var w=x(7201),_=x(5227),D=x(1766),h=x(4033),k=x(6615),S={"Content-Type":"application/x-www-form-urlencoded"};function v(g,A){!w.isUndefined(g)&&w.isUndefined(g["Content-Type"])&&(g["Content-Type"]=A)}var b,m={transitional:h,adapter:((typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(b=x(8170)),b),transformRequest:[function(g,A){if(_(A,"Accept"),_(A,"Content-Type"),w.isFormData(g)||w.isArrayBuffer(g)||w.isBuffer(g)||w.isStream(g)||w.isFile(g)||w.isBlob(g))return g;if(w.isArrayBufferView(g))return g.buffer;if(w.isURLSearchParams(g))return v(A,"application/x-www-form-urlencoded;charset=utf-8"),g.toString();var y,C=w.isObject(g),i=A&&A["Content-Type"];if((y=w.isFileList(g))||C&&i==="multipart/form-data"){var a=this.env&&this.env.FormData;return k(y?{"files[]":g}:g,a&&new a)}return C||i==="application/json"?(v(A,"application/json"),function(n,u,p){if(w.isString(n))try{return(0,JSON.parse)(n),w.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(n)}(g)):g}],transformResponse:[function(g){var A=this.transitional||m.transitional,y=A&&A.silentJSONParsing,C=A&&A.forcedJSONParsing,i=!y&&this.responseType==="json";if(i||C&&w.isString(g)&&g.length)try{return JSON.parse(g)}catch(a){if(i)throw a.name==="SyntaxError"?D.from(a,D.ERR_BAD_RESPONSE,this,null,this.response):a}return g}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x(3997)},validateStatus:function(g){return g>=200&&g<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(g){m.headers[g]={}}),w.forEach(["post","put","patch"],function(g){m.headers[g]=w.merge(S)}),W.exports=m},4033:W=>{W.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:W=>{W.exports={version:"0.27.2"}},5305:W=>{W.exports=function(M,x){return function(){for(var w=new Array(arguments.length),_=0;_<w.length;_++)w[_]=arguments[_];return M.apply(x,w)}}},6374:(W,M,x)=>{var w=x(7201);function _(D){return encodeURIComponent(D).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}W.exports=function(D,h,k){if(!h)return D;var S;if(k)S=k(h);else if(w.isURLSearchParams(h))S=h.toString();else{var v=[];w.forEach(h,function(m,g){m!=null&&(w.isArray(m)?g+="[]":m=[m],w.forEach(m,function(A){w.isDate(A)?A=A.toISOString():w.isObject(A)&&(A=JSON.stringify(A)),v.push(_(g)+"="+_(A))}))}),S=v.join("&")}if(S){var b=D.indexOf("#");b!==-1&&(D=D.slice(0,b)),D+=(D.indexOf("?")===-1?"?":"&")+S}return D}},4669:W=>{W.exports=function(M,x){return x?M.replace(/\/+$/,"")+"/"+x.replace(/^\/+/,""):M}},8416:(W,M,x)=>{var w=x(7201);W.exports=w.isStandardBrowserEnv()?{write:function(_,D,h,k,S,v){var b=[];b.push(_+"="+encodeURIComponent(D)),w.isNumber(h)&&b.push("expires="+new Date(h).toGMTString()),w.isString(k)&&b.push("path="+k),w.isString(S)&&b.push("domain="+S),v===!0&&b.push("secure"),document.cookie=b.join("; ")},read:function(_){var D=document.cookie.match(new RegExp("(^|;\\s*)("+_+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(_){this.write(_,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:W=>{W.exports=function(M){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(M)}},3319:(W,M,x)=>{var w=x(7201);W.exports=function(_){return w.isObject(_)&&_.isAxiosError===!0}},1224:(W,M,x)=>{var w=x(7201);W.exports=w.isStandardBrowserEnv()?function(){var _,D=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a");function k(S){var v=S;return D&&(h.setAttribute("href",v),v=h.href),h.setAttribute("href",v),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:h.pathname.charAt(0)==="/"?h.pathname:"/"+h.pathname}}return _=k(window.location.href),function(S){var v=w.isString(S)?k(S):S;return v.protocol===_.protocol&&v.host===_.host}}():function(){return!0}},5227:(W,M,x)=>{var w=x(7201);W.exports=function(_,D){w.forEach(_,function(h,k){k!==D&&k.toUpperCase()===D.toUpperCase()&&(_[D]=h,delete _[k])})}},3997:W=>{W.exports=null},5032:(W,M,x)=>{var w=x(7201),_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];W.exports=function(D){var h,k,S,v={};return D&&w.forEach(D.split(`
`),function(b){if(S=b.indexOf(":"),h=w.trim(b.substr(0,S)).toLowerCase(),k=w.trim(b.substr(S+1)),h){if(v[h]&&_.indexOf(h)>=0)return;v[h]=h==="set-cookie"?(v[h]?v[h]:[]).concat([k]):v[h]?v[h]+", "+k:k}}),v}},8699:W=>{W.exports=function(M){var x=/^([-+\w]{1,25})(:?\/\/|:)/.exec(M);return x&&x[1]||""}},3282:W=>{W.exports=function(M){return function(x){return M.apply(null,x)}}},6615:(W,M,x)=>{function w(D){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},w(D)}var _=x(7201);W.exports=function(D,h){h=h||new FormData;var k=[];function S(v){return v===null?"":_.isDate(v)?v.toISOString():_.isArrayBuffer(v)||_.isTypedArray(v)?typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}return function v(b,m){if(_.isPlainObject(b)||_.isArray(b)){if(k.indexOf(b)!==-1)throw Error("Circular reference detected in "+m);k.push(b),_.forEach(b,function(g,A){if(!_.isUndefined(g)){var y,C=m?m+"."+A:A;if(g&&!m&&w(g)==="object"){if(_.endsWith(A,"{}"))g=JSON.stringify(g);else if(_.endsWith(A,"[]")&&(y=_.toArray(g)))return void y.forEach(function(i){!_.isUndefined(i)&&h.append(C,S(i))})}v(g,C)}}),k.pop()}else h.append(m,S(b))}(D),h}},9712:(W,M,x)=>{function w(S){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},w(S)}var _=x(4316).version,D=x(1766),h={};["object","boolean","number","function","string","symbol"].forEach(function(S,v){h[S]=function(b){return w(b)===S||"a"+(v<1?"n ":" ")+S}});var k={};h.transitional=function(S,v,b){function m(g,A){return"[Axios v"+_+"] Transitional option '"+g+"'"+A+(b?". "+b:"")}return function(g,A,y){if(S===!1)throw new D(m(A," has been removed"+(v?" in "+v:"")),D.ERR_DEPRECATED);return v&&!k[A]&&(k[A]=!0,console.warn(m(A," has been deprecated since v"+v+" and will be removed in the near future"))),!S||S(g,A,y)}},W.exports={assertOptions:function(S,v,b){if(w(S)!=="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);for(var m=Object.keys(S),g=m.length;g-- >0;){var A=m[g],y=v[A];if(y){var C=S[A],i=C===void 0||y(C,A,S);if(i!==!0)throw new D("option "+A+" must be "+i,D.ERR_BAD_OPTION_VALUE)}else if(b!==!0)throw new D("Unknown option "+A,D.ERR_BAD_OPTION)}},validators:h}},7201:(W,M,x)=>{function w(e){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},w(e)}var _,D=x(5305),h=Object.prototype.toString,k=(_=Object.create(null),function(e){var s=h.call(e);return _[s]||(_[s]=s.slice(8,-1).toLowerCase())});function S(e){return e=e.toLowerCase(),function(s){return k(s)===e}}function v(e){return Array.isArray(e)}function b(e){return e===void 0}var m=S("ArrayBuffer");function g(e){return e!==null&&w(e)==="object"}function A(e){if(k(e)!=="object")return!1;var s=Object.getPrototypeOf(e);return s===null||s===Object.prototype}var y=S("Date"),C=S("File"),i=S("Blob"),a=S("FileList");function n(e){return h.call(e)==="[object Function]"}var u=S("URLSearchParams");function p(e,s){if(e!=null)if(w(e)!=="object"&&(e=[e]),v(e))for(var l=0,E=e.length;l<E;l++)s.call(null,e[l],l,e);else for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&s.call(null,e[d],d,e)}var r,t=(r=typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array),function(e){return r&&e instanceof r});W.exports={isArray:v,isArrayBuffer:m,isBuffer:function(e){return e!==null&&!b(e)&&e.constructor!==null&&!b(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)},isFormData:function(e){var s="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||h.call(e)===s||n(e.toString)&&e.toString()===s)},isArrayBufferView:function(e){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer)},isString:function(e){return typeof e=="string"},isNumber:function(e){return typeof e=="number"},isObject:g,isPlainObject:A,isUndefined:b,isDate:y,isFile:C,isBlob:i,isFunction:n,isStream:function(e){return g(e)&&n(e.pipe)},isURLSearchParams:u,isStandardBrowserEnv:function(){return(typeof navigator>"u"||navigator.product!=="ReactNative"&&navigator.product!=="NativeScript"&&navigator.product!=="NS")&&typeof window<"u"&&typeof document<"u"},forEach:p,merge:function e(){var s={};function l(f,c){A(s[c])&&A(f)?s[c]=e(s[c],f):A(f)?s[c]=e({},f):v(f)?s[c]=f.slice():s[c]=f}for(var E=0,d=arguments.length;E<d;E++)p(arguments[E],l);return s},extend:function(e,s,l){return p(s,function(E,d){e[d]=l&&typeof E=="function"?D(E,l):E}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e},inherits:function(e,s,l,E){e.prototype=Object.create(s.prototype,E),e.prototype.constructor=e,l&&Object.assign(e.prototype,l)},toFlatObject:function(e,s,l){var E,d,f,c={};s=s||{};do{for(d=(E=Object.getOwnPropertyNames(e)).length;d-- >0;)c[f=E[d]]||(s[f]=e[f],c[f]=!0);e=Object.getPrototypeOf(e)}while(e&&(!l||l(e,s))&&e!==Object.prototype);return s},kindOf:k,kindOfTest:S,endsWith:function(e,s,l){e=String(e),(l===void 0||l>e.length)&&(l=e.length),l-=s.length;var E=e.indexOf(s,l);return E!==-1&&E===l},toArray:function(e){if(!e)return null;var s=e.length;if(b(s))return null;for(var l=new Array(s);s-- >0;)l[s]=e[s];return l},isTypedArray:t,isFileList:a}},8160:W=>{W.exports=function(M){var x=[];return x.toString=function(){return this.map(function(w){var _="",D=w[5]!==void 0;return w[4]&&(_+="@supports (".concat(w[4],") {")),w[2]&&(_+="@media ".concat(w[2]," {")),D&&(_+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),_+=M(w),D&&(_+="}"),w[2]&&(_+="}"),w[4]&&(_+="}"),_}).join("")},x.i=function(w,_,D,h,k){typeof w=="string"&&(w=[[null,w,void 0]]);var S={};if(D)for(var v=0;v<this.length;v++){var b=this[v][0];b!=null&&(S[b]=!0)}for(var m=0;m<w.length;m++){var g=[].concat(w[m]);D&&S[g[0]]||(k!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=k),_&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=_),h&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=h):g[4]="".concat(h)),x.push(g))}},x}},8431:W=>{W.exports=function(M,x){return x||(x={}),M&&(M=String(M.__esModule?M.default:M),/^['"].*['"]$/.test(M)&&(M=M.slice(1,-1)),x.hash&&(M+=x.hash),/["'() \t\n]|(%20)/.test(M)||x.needQuotes?'"'.concat(M.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):M)}},8955:W=>{W.exports=function(M){var x=M[1],w=M[3];if(!w)return x;if(typeof btoa=="function"){var _=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),D="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_),h="/*# ".concat(D," */"),k=w.sources.map(function(S){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(S," */")});return[x].concat(k).concat([h]).join(`
`)}return[x].join(`
`)}},7831:W=>{W.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},Ee={};function J(W){var M=Ee[W];if(M!==void 0)return M.exports;var x=Ee[W]={id:W,exports:{}};return Be[W](x,x.exports,J),x.exports}J.m=Be,J.n=W=>{var M=W&&W.__esModule?()=>W.default:()=>W;return J.d(M,{a:M}),M},J.d=(W,M)=>{for(var x in M)J.o(M,x)&&!J.o(W,x)&&Object.defineProperty(W,x,{enumerable:!0,get:M[x]})},J.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),J.o=(W,M)=>Object.prototype.hasOwnProperty.call(W,M),J.b=document.baseURI||self.location.href,J.nc=void 0;var _e={};return(()=>{J.d(_e,{default:()=>tr});var W=J(9624),M=J.n(W),x=J(6990),w=J.n(x),_=J(6892),D=J.n(_),h=J(6359),k=J.n(h),S=J(2716),v=J.n(S),b=J(230),m=J.n(b),g=J(3150),A={};A.styleTagTransform=m(),A.setAttributes=k(),A.insert=D().bind(null,"head"),A.domAPI=w(),A.insertStyleElement=v(),M()(g.Z,A),g.Z&&g.Z.locals&&g.Z.locals;function y(U){return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},y(U)}function C(U){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},C(U)}var i=setTimeout;function a(U){return Boolean(U&&U.length!==void 0)}function n(){}function u(U){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if(typeof U!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(U,this)}function p(U,N){for(;U._state===3;)U=U._value;U._state!==0?(U._handled=!0,u._immediateFn(function(){var F=U._state===1?N.onFulfilled:N.onRejected;if(F!==null){var I;try{I=F(U._value)}catch(P){return void t(N.promise,P)}r(N.promise,I)}else(U._state===1?r:t)(N.promise,U._value)})):U._deferreds.push(N)}function r(U,N){try{if(N===U)throw new TypeError("A promise cannot be resolved with itself.");if(N&&(C(N)==="object"||typeof N=="function")){var F=N.then;if(N instanceof u)return U._state=3,U._value=N,void e(U);if(typeof F=="function")return void l((I=F,P=N,function(){I.apply(P,arguments)}),U)}U._state=1,U._value=N,e(U)}catch(H){t(U,H)}var I,P}function t(U,N){U._state=2,U._value=N,e(U)}function e(U){U._state===2&&U._deferreds.length===0&&u._immediateFn(function(){U._handled||u._unhandledRejectionFn(U._value)});for(var N=0,F=U._deferreds.length;N<F;N++)p(U,U._deferreds[N]);U._deferreds=null}function s(U,N,F){this.onFulfilled=typeof U=="function"?U:null,this.onRejected=typeof N=="function"?N:null,this.promise=F}function l(U,N){var F=!1;try{U(function(I){F||(F=!0,r(N,I))},function(I){F||(F=!0,t(N,I))})}catch(I){if(F)return;F=!0,t(N,I)}}u.prototype.catch=function(U){return this.then(null,U)},u.prototype.then=function(U,N){var F=new this.constructor(n);return p(this,new s(U,N,F)),F},u.prototype.finally=function(U){var N=this.constructor;return this.then(function(F){return N.resolve(U()).then(function(){return F})},function(F){return N.resolve(U()).then(function(){return N.reject(F)})})},u.all=function(U){return new u(function(N,F){if(!a(U))return F(new TypeError("Promise.all accepts an array"));var I=Array.prototype.slice.call(U);if(I.length===0)return N([]);var P=I.length;function H(Q,q){try{if(q&&(C(q)==="object"||typeof q=="function")){var re=q.then;if(typeof re=="function")return void re.call(q,function(fe){H(Q,fe)},F)}I[Q]=q,--P==0&&N(I)}catch(fe){F(fe)}}for(var j=0;j<I.length;j++)H(j,I[j])})},u.allSettled=function(U){return new this(function(N,F){if(!U||U.length===void 0)return F(new TypeError(y(U)+" "+U+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var I=Array.prototype.slice.call(U);if(I.length===0)return N([]);var P=I.length;function H(Q,q){if(q&&(y(q)==="object"||typeof q=="function")){var re=q.then;if(typeof re=="function")return void re.call(q,function(fe){H(Q,fe)},function(fe){I[Q]={status:"rejected",reason:fe},--P==0&&N(I)})}I[Q]={status:"fulfilled",value:q},--P==0&&N(I)}for(var j=0;j<I.length;j++)H(j,I[j])})},u.resolve=function(U){return U&&C(U)==="object"&&U.constructor===u?U:new u(function(N){N(U)})},u.reject=function(U){return new u(function(N,F){F(U)})},u.race=function(U){return new u(function(N,F){if(!a(U))return F(new TypeError("Promise.race accepts an array"));for(var I=0,P=U.length;I<P;I++)u.resolve(U[I]).then(N,F)})},u._immediateFn=typeof setImmediate=="function"&&function(U){setImmediate(U)}||function(U){i(U,0)},u._unhandledRejectionFn=function(U){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",U)};const E=u;var d=/mobile/i.test(window.navigator.userAgent);const f={secondToTime:function(U){if((U=U||0)===0||U===1/0||U.toString()==="NaN")return"00:00";var N=Math.floor(U/3600),F=Math.floor((U-3600*N)/60),I=Math.floor(U-3600*N-60*F);return(N>0?[N,F,I]:[F,I]).map(function(P){return P<10?"0"+P:""+P}).join(":")},getElementViewLeft:function(U){var N=U.offsetLeft,F=U.offsetParent,I=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;F!==null&&F!==U;)N+=F.offsetLeft,F=F.offsetParent;else for(;F!==null;)N+=F.offsetLeft,F=F.offsetParent;return N-I},getBoundingClientRectViewLeft:function(U){var N=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(U.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var F=document.createElement("div");F.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(F),this.getBoundingClientRectViewLeft.offset=-F.getBoundingClientRect().top-N,document.body.removeChild(F),F=null}var I=U.getBoundingClientRect(),P=this.getBoundingClientRectViewLeft.offset;return I.left+P}return this.getElementViewLeft(U)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(U){var N=U.left,F=N===void 0?0:N,I=U.top,P=I===void 0?0:I;this.isFirefox?(document.documentElement.scrollLeft=F,document.documentElement.scrollTop=P):window.scrollTo(F,P)},isMobile:d,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(U,N){localStorage.setItem(U,N)},get:function(U){return localStorage.getItem(U)}},nameMap:{dragStart:d?"touchstart":"mousedown",dragMove:d?"touchmove":"mousemove",dragEnd:d?"touchend":"mouseup"},color2Number:function(U){return U[0]==="#"&&(U=U.substr(1)),U.length===3&&(U="".concat(U[0]).concat(U[0]).concat(U[1]).concat(U[1]).concat(U[2]).concat(U[2])),parseInt(U,16)+0&16777215},number2Color:function(U){return"#"+("00000"+U.toString(16)).slice(-6)},number2Type:function(U){switch(U){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var c=J(6208),o=J.n(c);const T={send:function(U){o().post(U.url,U.data).then(function(N){var F=N.data;F&&F.code===0?U.success&&U.success(F):U.error&&U.error(F&&F.msg)}).catch(function(N){console.error(N),U.error&&U.error()})},read:function(U){o().get(U.url).then(function(N){var F=N.data;F&&F.code===0?U.success&&U.success(F.data.map(function(I){return{time:I[0],type:I[1],color:I[2],author:I[3],text:I[4]}})):U.error&&U.error(F&&F.msg)}).catch(function(N){console.error(N),U.error&&U.error()})}};function L(U){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},L(U)}function R(U){var N=this;this.lang=U,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(F){return F=F.toLowerCase(),O[N.lang]&&O[N.lang][F]?O[N.lang][F]:O[N.fallbackLang]&&O[N.fallbackLang][F]?O[N.fallbackLang][F]:B[F]?B[F]:F}}var B={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},O={en:B,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},K=J(730),G=J.n(K),z=J(6074),Y=J.n(z),V=J(4437),X=J.n(V),Z=J(2644),$=J.n(Z),ee=J(1324),ae=J.n(ee),ne=J(4574),oe=J.n(ne),se=J(1415),te=J.n(se),ie=J(5934),ue=J.n(ie),de=J(1428),ce=J.n(de),be=J(2807),he=J.n(be),Le=J(338),xe=J.n(Le),ye=J(2254),Se=J.n(ye),De=J(1965),Re=J.n(De),ke=J(8113),Ie=J.n(ke),Oe=J(6251),we=J.n(Oe),Ne=J(8410),Ae=J.n(Ne),Ce=J(4182),Pe=J.n(Ce),me=J(3193),Te=J.n(me);const ve={play:G(),pause:Y(),volumeUp:X(),volumeDown:$(),volumeOff:ae(),full:oe(),fullWeb:te(),setting:ue(),right:ce(),comment:he(),commentOff:xe(),send:Se(),pallette:Re(),camera:Ie(),subtitle:Ae(),loading:Pe(),airplay:we(),chromecast:Te()};var je=J(1916),ze=J.n(je);function Ye(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Fe=function(){function U(P){(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=P.container,this.options=P.options,this.index=P.index,this.tran=P.tran,this.init()}var N,F,I;return N=U,I=[{key:"NewNotice",value:function(P,H){var j=document.createElement("div");return j.classList.add("dplayer-notice"),j.style.opacity=H,j.innerText=P,j}}],(F=[{key:"init",value:function(){this.container.innerHTML=ze()({options:this.options,index:this.index,tran:this.tran,icons:ve,mobile:f.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!f.isSafari||f.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Ye(N.prototype,F),I&&Ye(N,I),Object.defineProperty(N,"prototype",{writable:!1}),U}();const rt=Fe;function Ke(U){return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},Ke(U)}function We(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var qe=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=I,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var N,F;return N=U,F=[{key:"load",value:function(){var I,P=this;I=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var H=(this.options.api.addition||[]).slice(0);H.push(I),this.events&&this.events.trigger("danmaku_load_start",H),this._readAllEndpoints(H,function(j){P.dan=[].concat.apply([],j).sort(function(Q,q){return Q.time-q.time}),window.requestAnimationFrame(function(){P.frame()}),P.options.callback(),P.events&&P.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(I){this.options.api=I,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(I,P){for(var H=this,j=[],Q=0,q=function(fe){H.options.apiBackend.read({url:I[fe],success:function(ge){j[fe]=ge,++Q===I.length&&P(j)},error:function(ge){H.options.error(ge||H.options.tran("danmaku-failed")),j[fe]=[],++Q===I.length&&P(j)}})},re=0;re<I.length;++re)q(re)}},{key:"send",value:function(I,P){var H=this,j={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:I.text,color:I.color,type:I.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:j,success:P,error:function(q){H.options.error(q||H.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,j),this.danIndex++;var Q={text:this.htmlEncode(j.text),color:j.color,type:j.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(Q),this.events&&this.events.trigger("danmaku_send",j)}},{key:"frame",value:function(){var I=this;if(this.dan.length&&!this.paused&&this.showing){for(var P=this.dan[this.danIndex],H=[];P&&this.options.time()>parseFloat(P.time);)H.push(P),P=this.dan[++this.danIndex];this.draw(H)}window.requestAnimationFrame(function(){I.frame()})}},{key:"opacity",value:function(I){if(I!==void 0){for(var P=this.container.getElementsByClassName("dplayer-danmaku-item"),H=0;H<P.length;H++)P[H].style.opacity=I;this._opacity=I,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(I){var P=this;if(this.showing){var H=this.options.height,j=this.container.offsetWidth,Q=this.container.offsetHeight,q=parseInt(Q/H),re=function(le){var pe=le.offsetWidth||parseInt(le.style.width),ot=le.getBoundingClientRect().right||P.container.getBoundingClientRect().right+pe;return P.container.getBoundingClientRect().right-ot},fe=function(le){return(j+le)/5},ge=function(le,pe,ot){for(var Qe=j/fe(ot),nr=function(et){var st=P.danTunnel[pe][et+""];if(!st||!st.length)return P.danTunnel[pe][et+""]=[le],le.addEventListener("animationend",function(){P.danTunnel[pe][et+""].splice(0,1)}),{v:et%q};if(pe!=="right")return"continue";for(var ft=0;ft<st.length;ft++){var dn=re(st[ft])-10;if(dn<=j-Qe*fe(parseInt(st[ft].style.width))||dn<=0)break;if(ft===st.length-1)return P.danTunnel[pe][et+""].push(le),le.addEventListener("animationend",function(){P.danTunnel[pe][et+""].splice(0,1)}),{v:et%q}}},Ht=0;P.unlimited||Ht<q;Ht++){var jt=nr(Ht);if(jt!=="continue"&&Ke(jt)==="object")return jt.v}return-1};Object.prototype.toString.call(I)!=="[object Array]"&&(I=[I]);for(var Ge=document.createDocumentFragment(),Ue=function(le){I[le].type=f.number2Type(I[le].type),I[le].color||(I[le].color=16777215);var pe=document.createElement("div");pe.classList.add("dplayer-danmaku-item"),pe.classList.add("dplayer-danmaku-".concat(I[le].type)),I[le].border?pe.innerHTML='<span style="border:'.concat(I[le].border,'">').concat(I[le].text,"</span>"):pe.innerHTML=I[le].text,pe.style.opacity=P._opacity,pe.style.color=f.number2Color(I[le].color),pe.addEventListener("animationend",function(){P.container.removeChild(pe)});var ot=P._measure(I[le].text),Qe=void 0;switch(I[le].type){case"right":(Qe=ge(pe,I[le].type,ot))>=0&&(pe.style.width=ot+1+"px",pe.style.top=H*Qe+"px",pe.style.transform="translateX(-".concat(j,"px)"));break;case"top":(Qe=ge(pe,I[le].type))>=0&&(pe.style.top=H*Qe+"px");break;case"bottom":(Qe=ge(pe,I[le].type))>=0&&(pe.style.bottom=H*Qe+"px");break;default:console.error("Can't handled danmaku type: ".concat(I[le].type))}Qe>=0&&(pe.classList.add("dplayer-danmaku-move"),pe.style.animationDuration=P._danAnimation(I[le].type),Ge.appendChild(pe))},$e=0;$e<I.length;$e++)Ue($e);return this.container.appendChild(Ge),Ge}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(I){if(!this.context){var P=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=P.getPropertyValue("font")}return this.context.measureText(I).width}},{key:"seek",value:function(){this.clear();for(var I=0;I<this.dan.length;I++){if(this.dan[I].time>=this.options.time()){this.danIndex=I;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(I){return I.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var I=this.container.offsetWidth,P=this.container.getElementsByClassName("dplayer-danmaku-item"),H=0;H<P.length;H++)P[H].style.transform="translateX(-".concat(I,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(I){this.unlimited=I}},{key:"speed",value:function(I){this.options.api.speedRate=I}},{key:"_danAnimation",value:function(I){var P=this.options.api.speedRate||1,H=!!this.player.fullScreen.isFullScreen();return{top:"".concat((H?6:4)/P,"s"),right:"".concat((H?8:5)/P,"s"),bottom:"".concat((H?6:4)/P,"s")}[I]}}],F&&We(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Ve=qe;function at(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}const dt=function(){function U(){(function(I,P){if(!(I instanceof P))throw new TypeError("Cannot call a class as a function")})(this,U),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var N,F;return N=U,(F=[{key:"on",value:function(I,P){this.type(I)&&typeof P=="function"&&(this.events[I]||(this.events[I]=[]),this.events[I].push(P))}},{key:"trigger",value:function(I,P){if(this.events[I]&&this.events[I].length)for(var H=0;H<this.events[I].length;H++)this.events[I][H](P)}},{key:"type",value:function(I){return this.playerEvents.indexOf(I)!==-1?"player":this.videoEvents.indexOf(I)!==-1?"video":(console.error("Unknown event name: ".concat(I)),null)}}])&&at(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();function Lt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var gt=function(){function U(I){var P=this;(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){P.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){P.player.resize(),f.setScrollPosition(P.lastScrollPosition)}),this.fullscreenchange=function(){P.player.resize(),P.isFullScreen("browser")?P.player.events.trigger("fullscreen"):(f.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var H=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;H&&H!==P.player.container||(P.player.resize(),H?P.player.events.trigger("fullscreen"):(f.setScrollPosition(P.lastScrollPosition),P.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var N,F;return N=U,F=[{key:"isFullScreen",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(I){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",P=I==="browser"?"web":"browser",H=this.isFullScreen(P);switch(H||(this.lastScrollPosition=f.getScrollPosition()),I){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}H&&this.cancel(P)}},{key:"cancel",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(I){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(I)?this.cancel(I):this.request(I)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],F&&Lt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const ut=gt;function Me(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var mt=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:I.options.hasOwnProperty("volume")?I.options.volume:.7,unlimited:(I.options.danmaku&&I.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var N,F;return N=U,(F=[{key:"init",value:function(){for(var I in this.storageName){var P=this.storageName[I];this.data[I]=parseFloat(f.storage.get(P)||this.default[I])}}},{key:"get",value:function(I){return this.data[I]}},{key:"set",value:function(I,P){this.data[I]=P,f.storage.set(this.storageName[I],P)}}])&&Me(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const At=mt;function It(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Dt=function(){function U(I,P,H,j){(function(Q,q){if(!(Q instanceof q))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I,this.video=P,this.options=H,this.events=j,this.init()}var N,F;return N=U,F=[{key:"init",value:function(){var I=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var P=this.video.textTracks[0];P.oncuechange=function(){var H=P.activeCues[P.activeCues.length-1];if(I.container.innerHTML="",H){var j=document.createElement("div");j.appendChild(H.getCueAsHTML());var Q=j.innerHTML.split(/\r?\n/).map(function(q){return"<p>".concat(q,"</p>")}).join("");I.container.innerHTML=Q}I.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],F&&It(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const kt=Dt;function wt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Rt=function(){function U(I){var P=this;(function(q,re){if(!(q instanceof re))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){P.adaptiveHeight(),P.show()});for(var H=this.player.template.subtitlesItem.length-1,j=function(q){P.player.template.subtitlesItem[q].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==q&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src=P.player.template.subtitlesItem[q].dataset.subtitle,P.player.options.subtitle.index=q,P.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&P.subContainerShow())})},Q=0;Q<H;Q++)j(Q);this.player.template.subtitlesItem[H].addEventListener("click",function(){P.hide(),P.player.options.subtitle.index!==H&&(P.player.template.subtitle.innerHTML="<p></p>",P.player.template.subtrack.src="",P.player.options.subtitle.index=H,P.subContainerHide())})}var N,F;return N=U,(F=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var I=30*this.player.template.subtitlesItem.length+14,P=.8*this.player.template.videoWrap.offsetHeight;I>=P-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=P-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=P-50+"px")}}])&&wt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const ct=Rt;function yt(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Ot=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.elements={},this.elements.volume=I.volumeBar,this.elements.played=I.playedBar,this.elements.loaded=I.loadedBar,this.elements.danmaku=I.danmakuOpacityBar}var N,F;return N=U,(F=[{key:"set",value:function(I,P,H){P=Math.max(P,0),P=Math.min(P,1),this.elements[I].style[H]=100*P+"%"}},{key:"get",value:function(I){return parseFloat(this.elements[I].style.width)/100}}])&&yt(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Pt=Ot;function vn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var gn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(P){window.setTimeout(P,1e3/60)},this.types=["loading","info","fps"],this.init()}var N,F;return N=U,(F=[{key:"init",value:function(){var I=this;this.types.map(function(P){return P!=="fps"&&I["init".concat(P,"Checker")](),P})}},{key:"initloadingChecker",value:function(){var I=this,P=0,H=0,j=!1;this.loadingChecker=setInterval(function(){I.enableloadingChecker&&(H=I.player.video.currentTime,j||H!==P||I.player.video.paused||(I.player.container.classList.add("dplayer-loading"),j=!0),j&&H>P&&!I.player.video.paused&&(I.player.container.classList.remove("dplayer-loading"),j=!1),P=H)},100)}},{key:"initfpsChecker",value:function(){var I=this;window.requestAnimationFrame(function(){if(I.enablefpsChecker)if(I.initfpsChecker(),I.fpsStart){I.fpsIndex++;var P=new Date;P-I.fpsStart>1e3&&(I.player.infoPanel.fps(I.fpsIndex/(P-I.fpsStart)*1e3),I.fpsStart=new Date,I.fpsIndex=0)}else I.fpsStart=new Date,I.fpsIndex=0;else I.fpsStart=0,I.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var I=this;this.infoChecker=setInterval(function(){I.enableinfoChecker&&I.player.infoPanel.update()},1e3)}},{key:"enable",value:function(I){this["enable".concat(I,"Checker")]=!0,I==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(I){this["enable".concat(I,"Checker")]=!1}},{key:"destroy",value:function(){var I=this;this.types.map(function(P){return I["enable".concat(P,"Checker")]=!1,I["".concat(P,"Checker")]&&clearInterval(I["".concat(P,"Checker")]),P})}}])&&vn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const mn=gn;function An(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}const yn=function(){function U(I){var P=this;(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I,this.container.addEventListener("animationend",function(){P.container.classList.remove("dplayer-bezel-transition")})}var N,F;return N=U,(F=[{key:"switch",value:function(I){this.container.innerHTML=I,this.container.classList.add("dplayer-bezel-transition")}}])&&An(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();function En(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var bn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I.container,this.barWidth=I.barWidth,this.container.style.backgroundImage="url('".concat(I.url,"')"),this.events=I.events}var N,F;return N=U,(F=[{key:"resize",value:function(I,P,H){this.container.style.width="".concat(I,"px"),this.container.style.height="".concat(P,"px"),this.container.style.top="".concat(2-P,"px"),this.barWidth=H}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(I){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(I/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(I-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&En(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const xn=bn;var Mt=function(U,N){return Mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(F,I){F.__proto__=I}||function(F,I){for(var P in I)Object.prototype.hasOwnProperty.call(I,P)&&(F[P]=I[P])},Mt(U,N)};function Et(U,N){if(typeof N!="function"&&N!==null)throw new TypeError("Class extends value "+String(N)+" is not a constructor or null");function F(){this.constructor=U}Mt(U,N),U.prototype=N===null?Object.create(N):(F.prototype=N.prototype,new F)}function Bt(U){var N=typeof Symbol=="function"&&Symbol.iterator,F=N&&U[N],I=0;if(F)return F.call(U);if(U&&typeof U.length=="number")return{next:function(){return U&&I>=U.length&&(U=void 0),{value:U&&U[I++],done:!U}}};throw new TypeError(N?"Object is not iterable.":"Symbol.iterator is not defined.")}function bt(U,N){var F=typeof Symbol=="function"&&U[Symbol.iterator];if(!F)return U;var I,P,H=F.call(U),j=[];try{for(;(N===void 0||N-- >0)&&!(I=H.next()).done;)j.push(I.value)}catch(Q){P={error:Q}}finally{try{I&&!I.done&&(F=H.return)&&F.call(H)}finally{if(P)throw P.error}}return j}function xt(U,N,F){if(F||arguments.length===2)for(var I,P=0,H=N.length;P<H;P++)!I&&P in N||(I||(I=Array.prototype.slice.call(N,0,P)),I[P]=N[P]);return U.concat(I||Array.prototype.slice.call(N))}function Xe(U){return typeof U=="function"}function Xt(U){var N=U(function(F){Error.call(F),F.stack=new Error().stack});return N.prototype=Object.create(Error.prototype),N.prototype.constructor=N,N}var Ft=Xt(function(U){return function(N){U(this),this.message=N?N.length+` errors occurred during unsubscription:
`+N.map(function(F,I){return I+1+") "+F.toString()}).join(""):"",this.name="UnsubscriptionError",this.errors=N}});function Ut(U,N){if(U){var F=U.indexOf(N);0<=F&&U.splice(F,1)}}var Ct=function(){function U(F){this.initialTeardown=F,this.closed=!1,this._parentage=null,this._finalizers=null}var N;return U.prototype.unsubscribe=function(){var F,I,P,H,j;if(!this.closed){this.closed=!0;var Q=this._parentage;if(Q)if(this._parentage=null,Array.isArray(Q))try{for(var q=Bt(Q),re=q.next();!re.done;re=q.next())re.value.remove(this)}catch(le){F={error:le}}finally{try{re&&!re.done&&(I=q.return)&&I.call(q)}finally{if(F)throw F.error}}else Q.remove(this);var fe=this.initialTeardown;if(Xe(fe))try{fe()}catch(le){j=le instanceof Ft?le.errors:[le]}var ge=this._finalizers;if(ge){this._finalizers=null;try{for(var Ge=Bt(ge),Ue=Ge.next();!Ue.done;Ue=Ge.next()){var $e=Ue.value;try{qt($e)}catch(le){j=j!=null?j:[],le instanceof Ft?j=xt(xt([],bt(j)),bt(le.errors)):j.push(le)}}}catch(le){P={error:le}}finally{try{Ue&&!Ue.done&&(H=Ge.return)&&H.call(Ge)}finally{if(P)throw P.error}}}if(j)throw new Ft(j)}},U.prototype.add=function(F){var I;if(F&&F!==this)if(this.closed)qt(F);else{if(F instanceof U){if(F.closed||F._hasParent(this))return;F._addParent(this)}(this._finalizers=(I=this._finalizers)!==null&&I!==void 0?I:[]).push(F)}},U.prototype._hasParent=function(F){var I=this._parentage;return I===F||Array.isArray(I)&&I.includes(F)},U.prototype._addParent=function(F){var I=this._parentage;this._parentage=Array.isArray(I)?(I.push(F),I):I?[I,F]:F},U.prototype._removeParent=function(F){var I=this._parentage;I===F?this._parentage=null:Array.isArray(I)&&Ut(I,F)},U.prototype.remove=function(F){var I=this._finalizers;I&&Ut(I,F),F instanceof U&&F._removeParent(this)},U.EMPTY=((N=new U).closed=!0,N),U}(),Qt=Ct.EMPTY;function Zt(U){return U instanceof Ct||U&&"closed"in U&&Xe(U.remove)&&Xe(U.add)&&Xe(U.unsubscribe)}function qt(U){Xe(U)?U():U.unsubscribe()}var Cn=void 0,Tn=!1,Nt={setTimeout:function(U){function N(F,I){return U.apply(this,arguments)}return N.toString=function(){return U.toString()},N}(function(U,N){for(var F=[],I=2;I<arguments.length;I++)F[I-2]=arguments[I];var P=Nt.delegate;return P!=null&&P.setTimeout?P.setTimeout.apply(P,xt([U,N],bt(F))):setTimeout.apply(void 0,xt([U,N],bt(F)))}),clearTimeout:function(U){function N(F){return U.apply(this,arguments)}return N.toString=function(){return U.toString()},N}(function(U){var N=Nt.delegate;return((N==null?void 0:N.clearTimeout)||clearTimeout)(U)}),delegate:void 0};function Jt(){}function Tt(U){U()}var $t=function(U){function N(F){var I=U.call(this)||this;return I.isStopped=!1,F?(I.destination=F,Zt(F)&&F.add(I)):I.destination=Ln,I}return Et(N,U),N.create=function(F,I,P){return new Wt(F,I,P)},N.prototype.next=function(F){this.isStopped?void 0:this._next(F)},N.prototype.error=function(F){this.isStopped?void 0:(this.isStopped=!0,this._error(F))},N.prototype.complete=function(){this.isStopped?void 0:(this.isStopped=!0,this._complete())},N.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,U.prototype.unsubscribe.call(this),this.destination=null)},N.prototype._next=function(F){this.destination.next(F)},N.prototype._error=function(F){try{this.destination.error(F)}finally{this.unsubscribe()}},N.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},N}(Ct),_n=Function.prototype.bind;function Kt(U,N){return _n.call(U,N)}var Sn=function(){function U(N){this.partialObserver=N}return U.prototype.next=function(N){var F=this.partialObserver;if(F.next)try{F.next(N)}catch(I){_t(I)}},U.prototype.error=function(N){var F=this.partialObserver;if(F.error)try{F.error(N)}catch(I){_t(I)}else _t(N)},U.prototype.complete=function(){var N=this.partialObserver;if(N.complete)try{N.complete()}catch(F){_t(F)}},U}(),Wt=function(U){function N(F,I,P){var H,j,Q=U.call(this)||this;return Xe(F)||!F?H={next:F!=null?F:void 0,error:I!=null?I:void 0,complete:P!=null?P:void 0}:Q&&Tn?((j=Object.create(F)).unsubscribe=function(){return Q.unsubscribe()},H={next:F.next&&Kt(F.next,j),error:F.error&&Kt(F.error,j),complete:F.complete&&Kt(F.complete,j)}):H=F,Q.destination=new Sn(H),Q}return Et(N,U),N}($t);function _t(U){(function(N){Nt.setTimeout(function(){throw N})})(U)}function Dr(U,N){}var Ln={closed:!0,next:Jt,error:function(U){throw U},complete:Jt},In=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Dn(U){return U}function kn(U){return U.length===0?Dn:U.length===1?U[0]:function(N){return U.reduce(function(F,I){return I(F)},N)}}var en=function(){function U(N){N&&(this._subscribe=N)}return U.prototype.lift=function(N){var F=new U;return F.source=this,F.operator=N,F},U.prototype.subscribe=function(N,F,I){var P,H=this,j=(P=N)&&P instanceof $t||function(Q){return Q&&Xe(Q.next)&&Xe(Q.error)&&Xe(Q.complete)}(P)&&Zt(P)?N:new Wt(N,F,I);return Tt(function(){var Q=H,q=Q.operator,re=Q.source;j.add(q?q.call(j,re):re?H._subscribe(j):H._trySubscribe(j))}),j},U.prototype._trySubscribe=function(N){try{return this._subscribe(N)}catch(F){N.error(F)}},U.prototype.forEach=function(N,F){var I=this;return new(F=tn(F))(function(P,H){var j=new Wt({next:function(Q){try{N(Q)}catch(q){H(q),j.unsubscribe()}},error:H,complete:P});I.subscribe(j)})},U.prototype._subscribe=function(N){var F;return(F=this.source)===null||F===void 0?void 0:F.subscribe(N)},U.prototype[In]=function(){return this},U.prototype.pipe=function(){for(var N=[],F=0;F<arguments.length;F++)N[F]=arguments[F];return kn(N)(this)},U.prototype.toPromise=function(N){var F=this;return new(N=tn(N))(function(I,P){var H;F.subscribe(function(j){return H=j},function(j){return P(j)},function(){return I(H)})})},U.create=function(N){return new U(N)},U}();function tn(U){var N;return(N=U!=null?U:Cn)!==null&&N!==void 0?N:Promise}var Je,wn=Xt(function(U){return function(){U(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),nn=function(U){function N(){var F=U.call(this)||this;return F.closed=!1,F.currentObservers=null,F.observers=[],F.isStopped=!1,F.hasError=!1,F.thrownError=null,F}return Et(N,U),N.prototype.lift=function(F){var I=new rn(this,this);return I.operator=F,I},N.prototype._throwIfClosed=function(){if(this.closed)throw new wn},N.prototype.next=function(F){var I=this;Tt(function(){var P,H;if(I._throwIfClosed(),!I.isStopped){I.currentObservers||(I.currentObservers=Array.from(I.observers));try{for(var j=Bt(I.currentObservers),Q=j.next();!Q.done;Q=j.next())Q.value.next(F)}catch(q){P={error:q}}finally{try{Q&&!Q.done&&(H=j.return)&&H.call(j)}finally{if(P)throw P.error}}}})},N.prototype.error=function(F){var I=this;Tt(function(){if(I._throwIfClosed(),!I.isStopped){I.hasError=I.isStopped=!0,I.thrownError=F;for(var P=I.observers;P.length;)P.shift().error(F)}})},N.prototype.complete=function(){var F=this;Tt(function(){if(F._throwIfClosed(),!F.isStopped){F.isStopped=!0;for(var I=F.observers;I.length;)I.shift().complete()}})},N.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(N.prototype,"observed",{get:function(){var F;return((F=this.observers)===null||F===void 0?void 0:F.length)>0},enumerable:!1,configurable:!0}),N.prototype._trySubscribe=function(F){return this._throwIfClosed(),U.prototype._trySubscribe.call(this,F)},N.prototype._subscribe=function(F){return this._throwIfClosed(),this._checkFinalizedStatuses(F),this._innerSubscribe(F)},N.prototype._innerSubscribe=function(F){var I=this,P=this,H=P.hasError,j=P.isStopped,Q=P.observers;return H||j?Qt:(this.currentObservers=null,Q.push(F),new Ct(function(){I.currentObservers=null,Ut(Q,F)}))},N.prototype._checkFinalizedStatuses=function(F){var I=this,P=I.hasError,H=I.thrownError,j=I.isStopped;P?F.error(H):j&&F.complete()},N.prototype.asObservable=function(){var F=new en;return F.source=this,F},N.create=function(F,I){return new rn(F,I)},N}(en),rn=function(U){function N(F,I){var P=U.call(this)||this;return P.destination=F,P.source=I,P}return Et(N,U),N.prototype.next=function(F){var I,P;(P=(I=this.destination)===null||I===void 0?void 0:I.next)===null||P===void 0||P.call(I,F)},N.prototype.error=function(F){var I,P;(P=(I=this.destination)===null||I===void 0?void 0:I.error)===null||P===void 0||P.call(I,F)},N.prototype.complete=function(){var F,I;(I=(F=this.destination)===null||F===void 0?void 0:F.complete)===null||I===void 0||I.call(F)},N.prototype._subscribe=function(F){var I,P;return(P=(I=this.source)===null||I===void 0?void 0:I.subscribe(F))!==null&&P!==void 0?P:Qt},N}(nn);function Rn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var an=!0,Gt=!1,On=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.autoHideTimer=0,f.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),f.isMobile||this.initVolumeButton()}var N,F;return N=U,(F=[{key:"initPlayButton",value:function(){var I=this;this.player.template.playButton.addEventListener("click",function(){I.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){I.player.toggle()}),f.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){I.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){I.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){I.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){I.player.toggle()}))}},{key:"initHighlights",value:function(){var I=this;this.player.on("durationchange",function(){if(I.player.video.duration!==1&&I.player.video.duration!==1/0&&I.player.options.highlight){var P=I.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(P,0).forEach(function(Q){I.player.template.playedBarWrap.removeChild(Q)});for(var H=0;H<I.player.options.highlight.length;H++)if(I.player.options.highlight[H].text&&I.player.options.highlight[H].time){var j=document.createElement("div");j.classList.add("dplayer-highlight"),j.style.left=I.player.options.highlight[H].time/I.player.video.duration*100+"%",j.innerHTML='<span class="dplayer-highlight-text">'+I.player.options.highlight[H].text+"</span>",I.player.template.playedBarWrap.insertBefore(j,I.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var I=this;this.player.options.video.thumbnails&&(this.thumbnails=new xn({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){I.thumbnails.resize(160,I.player.video.videoHeight/I.player.video.videoWidth*160,I.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var I=this,P=function(j){var Q=((j.clientX||j.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.playedBarWrap))/I.player.template.playedBarWrap.clientWidth;Q=Math.max(Q,0),Q=Math.min(Q,1),I.player.bar.set("played",Q,"width"),I.player.template.ptime.innerHTML=f.secondToTime(Q*I.player.video.duration)},H=function j(Q){document.removeEventListener(f.nameMap.dragEnd,j),document.removeEventListener(f.nameMap.dragMove,P);var q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.playedBarWrap))/I.player.template.playedBarWrap.clientWidth;q=Math.max(q,0),q=Math.min(q,1),I.player.bar.set("played",q,"width"),I.player.seek(I.player.bar.get("played")*I.player.video.duration),I.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(f.nameMap.dragStart,function(){I.player.timer.disable("progress"),document.addEventListener(f.nameMap.dragMove,P),document.addEventListener(f.nameMap.dragEnd,H)}),this.player.template.playedBarWrap.addEventListener(f.nameMap.dragMove,function(j){if(I.player.video.duration){var Q=I.player.template.playedBarWrap.getBoundingClientRect().left,q=(j.clientX||j.changedTouches[0].clientX)-Q;if(q<0||q>I.player.template.playedBarWrap.offsetWidth)return;var re=I.player.video.duration*(q/I.player.template.playedBarWrap.offsetWidth);f.isMobile&&I.thumbnails&&I.thumbnails.show(),I.thumbnails&&I.thumbnails.move(q),I.player.template.playedBarTime.style.left="".concat(q-(re>=3600?25:20),"px"),I.player.template.playedBarTime.innerText=f.secondToTime(re),I.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(f.nameMap.dragEnd,function(){f.isMobile&&I.thumbnails&&I.thumbnails.hide()}),f.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){I.player.video.duration&&(I.thumbnails&&I.thumbnails.show(),I.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){I.player.video.duration&&(I.thumbnails&&I.thumbnails.hide(),I.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var I=this;this.player.template.browserFullButton.addEventListener("click",function(){I.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){I.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var I=this,P=function(j){var Q=j||window.event,q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.volumeBarWrap)-5.5)/35;I.player.volume(q)},H=function j(){document.removeEventListener(f.nameMap.dragEnd,j),document.removeEventListener(f.nameMap.dragMove,P),I.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(j){var Q=j||window.event,q=((Q.clientX||Q.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(I.player.template.volumeBarWrap)-5.5)/35;I.player.volume(q)}),this.player.template.volumeBarWrapWrap.addEventListener(f.nameMap.dragStart,function(){document.addEventListener(f.nameMap.dragMove,P),document.addEventListener(f.nameMap.dragEnd,H),I.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){I.player.video.muted?(I.player.video.muted=!1,I.player.switchVolumeIcon(),I.player.bar.set("volume",I.player.volume(),"width")):(I.player.video.muted=!0,I.player.template.volumeIcon.innerHTML=ve.volumeOff,I.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var I=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(P){P.target.classList.contains("dplayer-quality-item")&&I.player.switchQuality(P.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var I=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var P,H=document.createElement("canvas");H.width=I.player.video.videoWidth,H.height=I.player.video.videoHeight,H.getContext("2d").drawImage(I.player.video,0,0,H.width,H.height),H.toBlob(function(j){P=URL.createObjectURL(j);var Q=document.createElement("a");Q.href=P,Q.download="DPlayer.png",Q.style.display="none",document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(P),I.player.events.trigger("screenshot",P)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(I){I.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var I=window.document.createElement("script");I.setAttribute("type","text/javascript"),I.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(I),window.__onGCastApiAvailable=function(P){if(P){var H=new(Je=window.chrome.cast).SessionRequest(Je.media.DEFAULT_MEDIA_RECEIVER_APP_ID),j=new Je.ApiConfig(H,function(){},function(Q){Q===Je.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",Q)});Je.initialize(j,function(){})}}}},{key:"initChromecastButton",value:function(){var I=this;if(this.player.options.chromecast){an&&(an=!1,this.initChromecast());var P=function(j,Q){I.currentMedia=Q},H=function(j){console.error("Error launching media",j)};this.player.template.chromecastButton.addEventListener("click",function(){var j;Gt?(Gt=!1,I.currentMedia.stop(),I.session.stop(),I.initChromecast()):(Gt=!0,j=new nn,Je.requestSession(function(Q){var q,re,fe;I.session=Q,j.next("CONNECTED"),q=I.player.options.video.url,re=new Je.media.MediaInfo(q),fe=new Je.media.LoadRequest(re),I.session?I.session.loadMedia(fe,P.bind(I,"loadMedia"),H).play():window.open(q)},function(Q){Q.code==="cancel"?(I.session=void 0,j.next("CANCEL")):console.error("Error selecting a cast device",Q)}))})}}},{key:"initSubtitleButton",value:function(){var I=this;this.player.events.on("subtitle_show",function(){I.player.template.subtitleButton.dataset.balloon=I.player.tran("hide-subs"),I.player.template.subtitleButtonInner.style.opacity="",I.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){I.player.template.subtitleButton.dataset.balloon=I.player.tran("show-subs"),I.player.template.subtitleButtonInner.style.opacity="0.4",I.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){I.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var I=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!I.player.video.played.length||I.player.paused||I.disableAutoHide||I.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){f.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Rn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Pn=On;function Mn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Bn=function(){function U(I){var P=this;(function(re,fe){if(!(re instanceof fe))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.settingButton.addEventListener("click",function(){P.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){P.player.template.loopToggle.checked=!P.player.template.loopToggle.checked,P.player.template.loopToggle.checked?P.loop=!0:P.loop=!1,P.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){P.player.template.showDanmakuToggle.checked=!P.player.template.showDanmakuToggle.checked,P.player.template.showDanmakuToggle.checked?(P.showDanmaku=!0,P.player.danmaku.show()):(P.showDanmaku=!1,P.player.danmaku.hide()),P.player.user.set("danmaku",P.showDanmaku?1:0),P.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){P.player.template.unlimitDanmakuToggle.checked=!P.player.template.unlimitDanmakuToggle.checked,P.player.template.unlimitDanmakuToggle.checked?(P.unlimitDanmaku=!0,P.player.danmaku.unlimit(!0)):(P.unlimitDanmaku=!1,P.player.danmaku.unlimit(!1)),P.player.user.set("unlimited",P.unlimitDanmaku?1:0),P.hide()}),this.player.template.speed.addEventListener("click",function(){P.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),P.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var H=function(re){P.player.template.speedItem[re].addEventListener("click",function(){P.player.speed(P.player.template.speedItem[re].dataset.speed),P.hide()})},j=0;j<this.player.template.speedItem.length;j++)H(j);if(this.player.danmaku){this.player.on("danmaku_opacity",function(re){P.player.bar.set("danmaku",re,"width"),P.player.user.set("opacity",re)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var Q=function(re){var fe=re||window.event,ge=((fe.clientX||fe.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;ge=Math.max(ge,0),ge=Math.min(ge,1),P.player.danmaku.opacity(ge)},q=function re(){document.removeEventListener(f.nameMap.dragEnd,re),document.removeEventListener(f.nameMap.dragMove,Q),P.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(re){var fe=re||window.event,ge=((fe.clientX||fe.changedTouches[0].clientX)-f.getBoundingClientRectViewLeft(P.player.template.danmakuOpacityBarWrap))/130;ge=Math.max(ge,0),ge=Math.min(ge,1),P.player.danmaku.opacity(ge)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(f.nameMap.dragStart,function(){document.addEventListener(f.nameMap.dragMove,Q),document.addEventListener(f.nameMap.dragEnd,q),P.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var N,F;return N=U,(F=[{key:"hide",value:function(){var I=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){I.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),I.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Mn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Fn=Bn;function Un(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Nn=function(){function U(I){var P=this;(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.player.template.mask.addEventListener("click",function(){P.hide()}),this.player.template.commentButton.addEventListener("click",function(){P.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){P.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(P.player.template.commentColorSettingBox.querySelector("input:checked+span")){var H=P.player.template.commentColorSettingBox.querySelector("input:checked").value;P.player.template.commentSettingFill.style.fill=H,P.player.template.commentInput.style.color=H,P.player.template.commentSendFill.style.fill=H}}),this.player.template.commentInput.addEventListener("click",function(){P.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(H){(H||window.event).keyCode===13&&P.send()}),this.player.template.commentSendButton.addEventListener("click",function(){P.send()})}var N,F;return N=U,(F=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var I=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:f.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){I.player.template.commentInput.value="",I.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Un(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Kn=Nn;function Wn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Gn=function(){function U(I){(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var N,F;return N=U,(F=[{key:"doHotKey",value:function(I){if(this.player.focus){var P=document.activeElement.tagName.toUpperCase(),H=document.activeElement.getAttribute("contenteditable");if(P!=="INPUT"&&P!=="TEXTAREA"&&H!==""&&H!=="true"){var j,Q=I||window.event;switch(Q.keyCode){case 32:Q.preventDefault(),this.player.toggle();break;case 37:if(Q.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(Q.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:Q.preventDefault(),j=this.player.volume()+.1,this.player.volume(j);break;case 40:Q.preventDefault(),j=this.player.volume()-.1,this.player.volume(j)}}}}},{key:"cancelFullScreen",value:function(I){(I||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Wn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Hn=Gn;function jn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var zn=function(){function U(I){var P=this;(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=I,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(H,j){P.player.options.contextmenu[j].click&&H.addEventListener("click",function(){P.player.options.contextmenu[j].click(P.player),P.hide()})}),this.contextmenuHandler=function(H){if(P.shown)P.hide();else{var j=H||window.event;j.preventDefault();var Q=P.player.container.getBoundingClientRect();P.show(j.clientX-Q.left,j.clientY-Q.top),P.player.template.mask.addEventListener("click",function(){P.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var N,F;return N=U,(F=[{key:"show",value:function(I,P){this.player.template.menu.classList.add("dplayer-menu-show");var H=this.player.container.getBoundingClientRect();I+this.player.template.menu.offsetWidth>=H.width?(this.player.template.menu.style.right=H.width-I+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=I+"px",this.player.template.menu.style.right="initial"),P+this.player.template.menu.offsetHeight>=H.height?(this.player.template.menu.style.bottom=H.height-P+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=P+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&jn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Yn=zn;function Vn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var Xn=function(){function U(I){var P=this;(function(H,j){if(!(H instanceof j))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=I.template.infoPanel,this.template=I.template,this.video=I.video,this.player=I,this.template.infoPanelClose.addEventListener("click",function(){P.hide()})}var N,F;return N=U,(F=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(I){this.template.infoFPS.innerHTML="".concat(I.toFixed(1))}}])&&Vn(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),U}();const Qn=Xn;var Zn=J(1568),qn=J.n(Zn);function on(U,N){var F=Object.keys(U);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(U);N&&(I=I.filter(function(P){return Object.getOwnPropertyDescriptor(U,P).enumerable})),F.push.apply(F,I)}return F}function Jn(U,N,F){return N in U?Object.defineProperty(U,N,{value:F,enumerable:!0,configurable:!0,writable:!0}):U[N]=F,U}function sn(U,N){for(var F=0;F<N.length;F++){var I=N[F];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(U,I.key,I)}}var ln=0,it=[],$n=function(){function U(P){var H=this;(function(j,Q){if(!(j instanceof Q))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=function(j){var Q={container:j.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:T,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var q in Q)Q.hasOwnProperty(q)&&!j.hasOwnProperty(q)&&(j[q]=Q[q]);return j.video&&!j.video.type&&(j.video.type="auto"),L(j.danmaku)==="object"&&j.danmaku&&!j.danmaku.user&&(j.danmaku.user="DIYgod"),j.subtitle&&(!j.subtitle.type&&(j.subtitle.type="webvtt"),!j.subtitle.fontSize&&(j.subtitle.fontSize="20px"),!j.subtitle.bottom&&(j.subtitle.bottom="40px"),!j.subtitle.color&&(j.subtitle.color="#fff")),j.video.quality&&(j.video.url=j.video.quality[j.video.defaultQuality].url),j.lang&&(j.lang=j.lang.toLowerCase()),j.contextmenu=j.contextmenu.concat([{key:"video-info",click:function(re){re.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),j}(function(j){for(var Q=1;Q<arguments.length;Q++){var q=arguments[Q]!=null?arguments[Q]:{};Q%2?on(Object(q),!0).forEach(function(re){Jn(j,re,q[re])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(q)):on(Object(q)).forEach(function(re){Object.defineProperty(j,re,Object.getOwnPropertyDescriptor(q,re))})}return j}({preload:P.video.type==="webtorrent"?"none":"metadata"},P)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new R(this.options.lang).tran,this.events=new dt,this.user=new At(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),f.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(j){return j.lang===H.options.subtitle.defaultSubtitle||j.name===H.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(j){return j.lang===H.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new rt({container:this.container,options:this.options,index:ln,tran:this.tran}),this.video=this.template.video,this.bar=new Pt(this.template),this.bezel=new yn(this.template.bezel),this.fullScreen=new ut(this),this.controller=new Pn(this),this.options.danmaku&&(this.danmaku=new Ve({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){H.template.danmakuLoading.style.display="none",H.options.autoplay&&H.play()},0)},error:function(j){H.notice(j)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return H.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(j){return H.tran(j)}}),this.comment=new Kn(this)),this.setting=new Fn(this),this.plugins={},this.docClickFun=function(){H.focus=!1},this.containerClickFun=function(){H.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new mn(this),this.hotkey=new Hn(this),this.contextmenu=new Yn(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Qn(this),!this.danmaku&&this.options.autoplay&&this.play(),ln++,it.push(this)}var N,F,I;return N=U,F=[{key:"seek",value:function(P){P=Math.max(P,0),this.video.duration&&(P=Math.min(P,this.video.duration)),this.video.currentTime<P?this.notice("".concat(this.tran("ff").replace("%s",(P-this.video.currentTime).toFixed(0)))):this.video.currentTime>P&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-P).toFixed(0)))),this.video.currentTime=P,this.danmaku&&this.danmaku.seek(),this.bar.set("played",P/this.video.duration,"width"),this.template.ptime.innerHTML=f.secondToTime(P)}},{key:"play",value:function(P){var H=this;if(this.paused=!1,this.video.paused&&!f.isMobile&&this.bezel.switch(ve.play),this.template.playButton.innerHTML=ve.pause,this.template.mobilePlayButton.innerHTML=ve.pause,P||E.resolve(this.video.play()).catch(function(){H.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var j=0;j<it.length;j++)this!==it[j]&&it[j].pause()}},{key:"pause",value:function(P){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||f.isMobile||this.bezel.switch(ve.pause),this.template.playButton.innerHTML=ve.play,this.template.mobilePlayButton.innerHTML=ve.play,P||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=ve.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=ve.volumeDown:this.template.volumeIcon.innerHTML=ve.volumeOff}},{key:"volume",value:function(P,H,j){if(P=parseFloat(P),!isNaN(P)){P=Math.max(P,0),P=Math.min(P,1),this.bar.set("volume",P,"width");var Q="".concat((100*P).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=Q,H||this.user.set("volume",P),j||this.notice("".concat(this.tran("volume")," ").concat((100*P).toFixed(0),"%")),this.video.volume=P,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(P,H){this.events.on(P,H)}},{key:"switchVideo",value:function(P,H){this.pause(),this.video.poster=P.pic?P.pic:"",this.video.src=P.url,this.initMSE(this.video,P.type||"auto"),H&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:H.id,address:H.api,token:H.token,maximum:H.maximum,addition:H.addition,user:H.user}))}},{key:"initMSE",value:function(P,H){var j=this;if(this.type=H,this.options.video.customType&&this.options.video.customType[H])Object.prototype.toString.call(this.options.video.customType[H])==="[object Function]"?this.options.video.customType[H](this.video,this):console.error("Illegal customType: ".concat(H));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(P.src)?this.type="hls":/.flv(#|\?|$)/i.exec(P.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(P.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(P.canPlayType("application/x-mpegURL")||P.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var Q=this.options.pluginOptions.hls,q=new window.Hls(Q);this.plugins.hls=q,q.loadSource(P.src),q.attachMedia(P),this.events.on("destroy",function(){q.destroy(),delete j.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var re=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:P.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=re,re.attachMediaElement(P),re.load(),this.events.on("destroy",function(){re.unload(),re.detachMediaElement(),re.destroy(),delete j.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var fe=window.dashjs.MediaPlayer().create().initialize(P,P.src,!1),ge=this.options.pluginOptions.dash;fe.updateSettings(ge),this.plugins.dash=fe,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete j.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Ge=this.options.pluginOptions.webtorrent,Ue=new window.WebTorrent(Ge);this.plugins.webtorrent=Ue;var $e=P.src;P.src="",P.preload="metadata",P.addEventListener("durationchange",function(){return j.container.classList.remove("dplayer-loading")},{once:!0}),Ue.add($e,function(le){le.files.find(function(pe){return pe.name.endsWith(".mp4")}).renderTo(j.video,{autoplay:j.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Ue.remove($e),Ue.destroy(),delete j.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(P,H){var j=this;this.initMSE(P,H),this.on("durationchange",function(){P.duration!==1&&P.duration!==1/0&&(j.template.dtime.innerHTML=f.secondToTime(P.duration))}),this.on("progress",function(){var re=P.buffered.length?P.buffered.end(P.buffered.length-1)/P.duration:0;j.bar.set("loaded",re,"width")}),this.on("error",function(){j.video.error&&j.tran&&j.notice&&j.type!=="webtorrent"&&j.notice(j.tran("video-failed"),-1)}),this.on("ended",function(){j.bar.set("played",1,"width"),j.setting.loop?(j.seek(0),j.play()):j.pause(),j.danmaku&&(j.danmaku.danIndex=0)}),this.on("play",function(){j.paused&&j.play(!0)}),this.on("pause",function(){j.paused||j.pause(!0)}),this.on("timeupdate",function(){j.bar.set("played",j.video.currentTime/j.video.duration,"width");var re=f.secondToTime(j.video.currentTime);j.template.ptime.innerHTML!==re&&(j.template.ptime.innerHTML=re)});for(var Q=function(re){P.addEventListener(j.events.videoEvents[re],function(){j.events.trigger(j.events.videoEvents[re])})},q=0;q<this.events.videoEvents.length;q++)Q(q);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new kt(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ct(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(P){var H=this;if(P=typeof P=="string"?parseInt(P):P,this.qualityIndex!==P&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=P,this.switchingQuality=!0,this.quality=this.options.video.quality[P],this.template.qualityButton.innerHTML=this.quality.name;var j=this.video.paused;this.video.pause();var Q=qn()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),q=new DOMParser().parseFromString(Q,"text/html").body.firstChild;this.template.videoWrap.insertBefore(q,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=q,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(H.prevVideo){if(H.video.currentTime!==H.prevVideo.currentTime)return void H.seek(H.prevVideo.currentTime);H.template.videoWrap.removeChild(H.prevVideo),H.video.classList.add("dplayer-video-current"),j||H.video.play(),H.prevVideo=null,H.notice("".concat(H.tran("switched-quality").replace("%q",H.quality.name))),H.switchingQuality=!1,H.events.trigger("quality_end")}}),this.on("error",function(){H.video.error&&H.prevVideo&&(H.template.videoWrap.removeChild(H.video),H.video=H.prevVideo,j||H.video.play(),H.qualityIndex=H.prevIndex,H.quality=H.options.video.quality[H.qualityIndex],H.noticeTime=setTimeout(function(){H.template.notice.style.opacity=0,H.events.trigger("notice_hide")},3e3),H.prevVideo=null,H.switchingQuality=!1)})}}},{key:"notice",value:function(P){var H,j,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,re=rt.NewNotice(P,q);this.template.noticeList.appendChild(re),this.events.trigger("notice_show",re),Q>0&&setTimeout((H=re,j=this,function(){H.addEventListener("animationend",function(){j.template.noticeList.removeChild(H)}),H.classList.add("remove-notice"),j.events.trigger("notice_hide")}),Q)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(P){this.video.playbackRate=P}},{key:"destroy",value:function(){it.splice(it.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],I=[{key:"version",get:function(){return"1.27.0"}}],F&&sn(N.prototype,F),I&&sn(N,I),Object.defineProperty(N,"prototype",{writable:!1}),U}();const er=$n;console.log(`
`.concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const tr=er})(),_e.default})())})(pn);const Er=fn(pn.exports);var hn={exports:{}};(function(nt,Ze){typeof window<"u"&&function(Ee,J){nt.exports=J()}(rr,()=>(()=>{var Be={"./src/config.ts":(W,M,x)=>{x.r(M),x.d(M,{enableStreamingMode:()=>E,hlsDefaultConfig:()=>e,mergeConfig:()=>l});var w=x("./src/controller/abr-controller.ts"),_=x("./src/controller/audio-stream-controller.ts"),D=x("./src/controller/audio-track-controller.ts"),h=x("./src/controller/subtitle-stream-controller.ts"),k=x("./src/controller/subtitle-track-controller.ts"),S=x("./src/controller/buffer-controller.ts"),v=x("./src/controller/timeline-controller.ts"),b=x("./src/controller/cap-level-controller.ts"),m=x("./src/controller/fps-controller.ts"),g=x("./src/controller/eme-controller.ts"),A=x("./src/controller/cmcd-controller.ts"),y=x("./src/utils/xhr-loader.ts"),C=x("./src/utils/fetch-loader.ts"),i=x("./src/utils/cues.ts"),a=x("./src/utils/mediakeys-helper.ts"),n=x("./src/utils/logger.ts");function u(){return u=Object.assign?Object.assign.bind():function(d){for(var f=1;f<arguments.length;f++){var c=arguments[f];for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(d[o]=c[o])}return d},u.apply(this,arguments)}function p(d,f){var c=Object.keys(d);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(d);f&&(o=o.filter(function(T){return Object.getOwnPropertyDescriptor(d,T).enumerable})),c.push.apply(c,o)}return c}function r(d){for(var f=1;f<arguments.length;f++){var c=arguments[f]!=null?arguments[f]:{};f%2?p(Object(c),!0).forEach(function(o){t(d,o,c[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(c)):p(Object(c)).forEach(function(o){Object.defineProperty(d,o,Object.getOwnPropertyDescriptor(c,o))})}return d}function t(d,f,c){return f in d?Object.defineProperty(d,f,{value:c,enumerable:!0,configurable:!0,writable:!0}):d[f]=c,d}var e=r(r({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:y.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:w.default,bufferController:S.default,capLevelController:b.default,fpsController:m.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:a.requestMediaKeySystemAccess,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0},s()),{},{subtitleStreamController:h.SubtitleStreamController,subtitleTrackController:k.default,timelineController:v.TimelineController,audioStreamController:_.default,audioTrackController:D.default,emeController:g.default,cmcdController:A.default});function s(){return{cueHandler:i.default,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function l(d,f){if((f.liveSyncDurationCount||f.liveMaxLatencyDurationCount)&&(f.liveSyncDuration||f.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(f.liveMaxLatencyDurationCount!==void 0&&(f.liveSyncDurationCount===void 0||f.liveMaxLatencyDurationCount<=f.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(f.liveMaxLatencyDuration!==void 0&&(f.liveSyncDuration===void 0||f.liveMaxLatencyDuration<=f.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return u({},d,f)}function E(d){var f=d.loader;if(f!==C.default&&f!==y.default)n.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),d.progressive=!1;else{var c=(0,C.fetchSupported)();c&&(d.loader=C.default,d.progressive=!0,d.enableSoftwareAES=!0,n.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))}}},"./src/controller/abr-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>g});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/ewma-bandwidth-estimator.ts"),D=x("./src/events.ts"),h=x("./src/errors.ts"),k=x("./src/types/loader.ts"),S=x("./src/utils/logger.ts");function v(A,y){for(var C=0;C<y.length;C++){var i=y[C];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(A,i.key,i)}}function b(A,y,C){return y&&v(A.prototype,y),C&&v(A,C),Object.defineProperty(A,"prototype",{writable:!1}),A}var m=function(){function A(C){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=C;var i=C.config;this.bwEstimator=new _.default(i.abrEwmaSlowVoD,i.abrEwmaFastVoD,i.abrEwmaDefaultEstimate),this.registerListeners()}var y=A.prototype;return y.registerListeners=function(){var i=this.hls;i.on(D.Events.FRAG_LOADING,this.onFragLoading,this),i.on(D.Events.FRAG_LOADED,this.onFragLoaded,this),i.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),i.on(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),i.on(D.Events.ERROR,this.onError,this)},y.unregisterListeners=function(){var i=this.hls;i.off(D.Events.FRAG_LOADING,this.onFragLoading,this),i.off(D.Events.FRAG_LOADED,this.onFragLoaded,this),i.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),i.off(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),i.off(D.Events.ERROR,this.onError,this)},y.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},y.onFragLoading=function(i,a){var n=a.frag;if(n.type===k.PlaylistLevelType.MAIN&&!this.timer){var u;this.fragCurrent=n,this.partCurrent=(u=a.part)!=null?u:null,this.timer=self.setInterval(this.onCheck,100)}},y.onLevelLoaded=function(i,a){var n=this.hls.config;a.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD)},y._abandonRulesCheck=function(){var i=this.fragCurrent,a=this.partCurrent,n=this.hls,u=n.autoLevelEnabled;n.config;var p=n.media;if(!(!i||!p)){var r=a?a.stats:i.stats,t=a?a.duration:i.duration;if(r.aborted||r.loaded&&r.loaded===r.total||i.level===0){this.clearTimer(),this._nextAutoLevel=-1;return}if(!(!u||p.paused||!p.playbackRate||!p.readyState)){var e=n.mainForwardBufferInfo;if(e!==null){var s=performance.now()-r.loading.start,l=Math.abs(p.playbackRate);if(!(s<=500*t/l)){var E=r.loaded&&r.loading.first,d=this.bwEstimator.getEstimate(),f=n.levels,c=n.minAutoLevel,o=f[i.level],T=r.total||Math.max(r.loaded,Math.round(t*o.maxBitrate/8)),L=E?r.loaded*1e3/s:0,R=L?(T-r.loaded)/L:T*8/d,B=e.len/l;if(!(R<=B)){var O=Number.POSITIVE_INFINITY,K;for(K=i.level-1;K>c;K--){var G=f[K].maxBitrate;if(O=L?t*G/(8*.8*L):t*G/d,O<B)break}O>=R||(S.logger.warn("Fragment "+i.sn+(a?" part "+a.index:"")+" of level "+i.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+K+`
      Current BW estimate: `+((0,w.isFiniteNumber)(d)?(d/1024).toFixed(3):"Unknown")+` Kb/s
      Estimated load time for current fragment: `+R.toFixed(3)+` s
      Estimated load time for the next fragment: `+O.toFixed(3)+` s
      Time to underbuffer: `+B.toFixed(3)+" s"),n.nextLoadLevel=K,E&&this.bwEstimator.sample(s,r.loaded),this.clearTimer(),i.loader&&(this.fragCurrent=this.partCurrent=null,i.loader.abort()),n.trigger(D.Events.FRAG_LOAD_EMERGENCY_ABORTED,{frag:i,part:a,stats:r}))}}}}}},y.onFragLoaded=function(i,a){var n=a.frag,u=a.part;if(n.type===k.PlaylistLevelType.MAIN&&(0,w.isFiniteNumber)(n.sn)){var p=u?u.stats:n.stats,r=u?u.duration:n.duration;if(this.clearTimer(),this.lastLoadedFragLevel=n.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var t=this.hls.levels[n.level],e=(t.loaded?t.loaded.bytes:0)+p.loaded,s=(t.loaded?t.loaded.duration:0)+r;t.loaded={bytes:e,duration:s},t.realBitrate=Math.round(8*e/s)}if(n.bitrateTest){var l={stats:p,frag:n,part:u,id:n.type};this.onFragBuffered(D.Events.FRAG_BUFFERED,l)}}},y.onFragBuffered=function(i,a){var n=a.frag,u=a.part,p=u?u.stats:n.stats;if(!p.aborted&&!(n.type!==k.PlaylistLevelType.MAIN||n.sn==="initSegment")){var r=p.parsing.end-p.loading.start;this.bwEstimator.sample(r,p.loaded),p.bwEstimate=this.bwEstimator.getEstimate(),n.bitrateTest?this.bitrateTestDelay=r/1e3:this.bitrateTestDelay=0}},y.onError=function(i,a){switch(a.details){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer();break}},y.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},y.getNextABRAutoLevel=function(){var i=this.fragCurrent,a=this.partCurrent,n=this.hls,u=n.maxAutoLevel,p=n.config,r=n.minAutoLevel,t=n.media,e=a?a.duration:i?i.duration:0;t&&t.currentTime;var s=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,l=this.bwEstimator?this.bwEstimator.getEstimate():p.abrEwmaDefaultEstimate,E=n.mainForwardBufferInfo,d=(E?E.len:0)/s,f=this.findBestLevel(l,r,u,d,p.abrBandWidthFactor,p.abrBandWidthUpFactor);if(f>=0)return f;S.logger.trace((d?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var c=e?Math.min(e,p.maxStarvationDelay):p.maxStarvationDelay,o=p.abrBandWidthFactor,T=p.abrBandWidthUpFactor;if(!d){var L=this.bitrateTestDelay;if(L){var R=e?Math.min(e,p.maxLoadingDelay):p.maxLoadingDelay;c=R-L,S.logger.trace("bitrate test took "+Math.round(1e3*L)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*c)+" ms"),o=T=1}}return f=this.findBestLevel(l,r,u,d+c,o,T),Math.max(f,0)},y.findBestLevel=function(i,a,n,u,p,r){for(var t,e=this.fragCurrent,s=this.partCurrent,l=this.lastLoadedFragLevel,E=this.hls.levels,d=E[l],f=!!(d!=null&&(t=d.details)!==null&&t!==void 0&&t.live),c=d==null?void 0:d.codecSet,o=s?s.duration:e?e.duration:0,T=n;T>=a;T--){var L=E[T];if(!(!L||c&&L.codecSet!==c)){var R=L.details,B=(s?R==null?void 0:R.partTarget:R==null?void 0:R.averagetargetduration)||o,O=void 0;T<=l?O=p*i:O=r*i;var K=E[T].maxBitrate,G=K*B/O;if(S.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+T+"/"+Math.round(O)+"/"+K+"/"+B+"/"+u+"/"+G),O>K&&(G===0||!(0,w.isFiniteNumber)(G)||f&&!this.bitrateTestDelay||G<u))return T}}return-1},b(A,[{key:"nextAutoLevel",get:function(){var i=this._nextAutoLevel,a=this.bwEstimator;if(i!==-1&&!a.canEstimate())return i;var n=this.getNextABRAutoLevel();return i!==-1&&this.hls.levels[n].loadError?i:(i!==-1&&(n=Math.min(i,n)),n)},set:function(i){this._nextAutoLevel=i}}]),A}();const g=m},"./src/controller/audio-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>t});var w=x("./src/polyfills/number.ts"),_=x("./src/controller/base-stream-controller.ts"),D=x("./src/events.ts"),h=x("./src/utils/buffer-helper.ts"),k=x("./src/controller/fragment-tracker.ts"),S=x("./src/types/level.ts"),v=x("./src/types/loader.ts"),b=x("./src/loader/fragment.ts"),m=x("./src/demux/chunk-cache.ts"),g=x("./src/demux/transmuxer-interface.ts"),A=x("./src/types/transmuxer.ts"),y=x("./src/controller/fragment-finders.ts"),C=x("./src/utils/discontinuities.ts"),i=x("./src/errors.ts");function a(){return a=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var E in l)Object.prototype.hasOwnProperty.call(l,E)&&(e[E]=l[E])}return e},a.apply(this,arguments)}function n(e,s){e.prototype=Object.create(s.prototype),e.prototype.constructor=e,u(e,s)}function u(e,s){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,d){return E.__proto__=d,E},u(e,s)}var p=100,r=function(e){n(s,e);function s(E,d){var f;return f=e.call(this,E,d,"[audio-stream-controller]")||this,f.videoBuffer=null,f.videoTrackCC=-1,f.waitingVideoCC=-1,f.audioSwitch=!1,f.trackId=-1,f.waitingData=null,f.mainDetails=null,f.bufferFlushed=!1,f.cachedTrackLoadedData=null,f._registerListeners(),f}var l=s.prototype;return l.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},l._registerListeners=function(){var d=this.hls;d.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.on(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.on(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.on(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),d.on(D.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),d.on(D.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),d.on(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),d.on(D.Events.ERROR,this.onError,this),d.on(D.Events.BUFFER_RESET,this.onBufferReset,this),d.on(D.Events.BUFFER_CREATED,this.onBufferCreated,this),d.on(D.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),d.on(D.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),d.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},l._unregisterListeners=function(){var d=this.hls;d.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),d.off(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),d.off(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),d.off(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),d.off(D.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),d.off(D.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),d.off(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),d.off(D.Events.ERROR,this.onError,this),d.off(D.Events.BUFFER_RESET,this.onBufferReset,this),d.off(D.Events.BUFFER_CREATED,this.onBufferCreated,this),d.off(D.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),d.off(D.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),d.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},l.onInitPtsFound=function(d,f){var c=f.frag,o=f.id,T=f.initPTS;if(o==="main"){var L=c.cc;this.initPTS[c.cc]=T,this.log("InitPTS for cc: "+L+" found from main: "+T),this.videoTrackCC=L,this.state===_.State.WAITING_INIT_PTS&&this.tick()}},l.startLoad=function(d){if(!this.levels){this.startPosition=d,this.state=_.State.STOPPED;return}var f=this.lastCurrentTime;this.stopLoad(),this.setInterval(p),this.fragLoadError=0,f>0&&d===-1?(this.log("Override startPosition with lastCurrentTime @"+f.toFixed(3)),d=f,this.state=_.State.IDLE):(this.loadedmetadata=!1,this.state=_.State.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=d,this.tick()},l.doTick=function(){switch(this.state){case _.State.IDLE:this.doTickIdle();break;case _.State.WAITING_TRACK:{var d,f=this.levels,c=this.trackId,o=f==null||(d=f[c])===null||d===void 0?void 0:d.details;if(o){if(this.waitForCdnTuneIn(o))break;this.state=_.State.WAITING_INIT_PTS}break}case _.State.FRAG_LOADING_WAITING_RETRY:{var T,L=performance.now(),R=this.retryDate;(!R||L>=R||(T=this.media)!==null&&T!==void 0&&T.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=_.State.IDLE);break}case _.State.WAITING_INIT_PTS:{var B=this.waitingData;if(B){var O=B.frag,K=B.part,G=B.cache,z=B.complete;if(this.initPTS[O.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=_.State.FRAG_LOADING;var Y=G.flush(),V={frag:O,part:K,payload:Y,networkDetails:null};this._handleFragmentLoadProgress(V),z&&e.prototype._handleFragmentLoadComplete.call(this,V)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log("Waiting fragment cc ("+O.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var X=this.getLoadPosition(),Z=h.BufferHelper.bufferInfo(this.mediaBuffer,X,this.config.maxBufferHole),$=(0,y.fragmentWithinToleranceTest)(Z.end,this.config.maxFragLookUpTolerance,O);$<0&&(this.log("Waiting fragment cc ("+O.cc+") @ "+O.start+" cancelled because another fragment at "+Z.end+" is needed"),this.clearWaitingFragment())}}else this.state=_.State.IDLE}}this.onTickEnd()},l.clearWaitingFragment=function(){var d=this.waitingData;d&&(this.fragmentTracker.removeFragment(d.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=_.State.IDLE)},l.resetLoadingState=function(){this.clearWaitingFragment(),e.prototype.resetLoadingState.call(this)},l.onTickEnd=function(){var d=this.media;if(!(!d||!d.readyState)){var f=this.mediaBuffer?this.mediaBuffer:d,c=f.buffered;!this.loadedmetadata&&c.length&&(this.loadedmetadata=!0),this.lastCurrentTime=d.currentTime}},l.doTickIdle=function(){var d,f,c=this.hls,o=this.levels,T=this.media,L=this.trackId,R=c.config;if(!(!o||!o[L])&&!(!T&&(this.startFragRequested||!R.startFragPrefetch))){var B=o[L],O=B.details;if(!O||O.live&&this.levelLastLoaded!==L||this.waitForCdnTuneIn(O)){this.state=_.State.WAITING_TRACK;return}var K=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&K&&(this.bufferFlushed=!1,this.afterBufferFlushed(K,b.ElementaryStreamTypes.AUDIO,v.PlaylistLevelType.AUDIO));var G=this.getFwdBufferInfo(K,v.PlaylistLevelType.AUDIO);if(G!==null){var z=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,v.PlaylistLevelType.MAIN),Y=G.len,V=this.getMaxBufferLength(z==null?void 0:z.len),X=this.audioSwitch;if(!(Y>=V&&!X)){if(!X&&this._streamEnded(G,O)){c.trigger(D.Events.BUFFER_EOS,{type:"audio"}),this.state=_.State.ENDED;return}var Z=O.fragments,$=Z[0].start,ee=G.end;if(X&&T){var ae=this.getLoadPosition();ee=ae,O.PTSKnown&&ae<$&&(G.end>$||G.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),T.currentTime=$+.05)}if(!(z&&ee>z.end+O.targetduration)&&!((!z||!z.len)&&G.len)){var ne=this.getNextFragment(ee,O);if(!ne){this.bufferFlushed=!0;return}((d=ne.decryptdata)===null||d===void 0?void 0:d.keyFormat)==="identity"&&!((f=ne.decryptdata)!==null&&f!==void 0&&f.key)?this.loadKey(ne,O):this.loadFragment(ne,O,ee)}}}}},l.getMaxBufferLength=function(d){var f=e.prototype.getMaxBufferLength.call(this);return d?Math.max(f,d):f},l.onMediaDetaching=function(){this.videoBuffer=null,e.prototype.onMediaDetaching.call(this)},l.onAudioTracksUpdated=function(d,f){var c=f.audioTracks;this.resetTransmuxer(),this.levels=c.map(function(o){return new S.Level(o)})},l.onAudioTrackSwitching=function(d,f){var c=!!f.url;this.trackId=f.id;var o=this.fragCurrent;o!=null&&o.loader&&o.loader.abort(),this.fragCurrent=null,this.clearWaitingFragment(),c?this.setInterval(p):this.resetTransmuxer(),c?(this.audioSwitch=!0,this.state=_.State.IDLE):this.state=_.State.STOPPED,this.tick()},l.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},l.onLevelLoaded=function(d,f){this.mainDetails=f.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(D.Events.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)},l.onAudioTrackLoaded=function(d,f){var c;if(this.mainDetails==null){this.cachedTrackLoadedData=f;return}var o=this.levels,T=f.details,L=f.id;if(!o){this.warn("Audio tracks were reset while loading level "+L);return}this.log("Track "+L+" loaded ["+T.startSN+","+T.endSN+"],duration:"+T.totalduration);var R=o[L],B=0;if(T.live||(c=R.details)!==null&&c!==void 0&&c.live){var O=this.mainDetails;if(T.fragments[0]||(T.deltaUpdateFailed=!0),T.deltaUpdateFailed||!O)return;!R.details&&T.hasProgramDateTime&&O.hasProgramDateTime?((0,C.alignMediaPlaylistByPDT)(T,O),B=T.fragments[0].start):B=this.alignPlaylists(T,R.details)}R.details=T,this.levelLastLoaded=L,!this.startFragRequested&&(this.mainDetails||!T.live)&&this.setStartPosition(R.details,B),this.state===_.State.WAITING_TRACK&&!this.waitForCdnTuneIn(T)&&(this.state=_.State.IDLE),this.tick()},l._handleFragmentLoadProgress=function(d){var f,c=d.frag,o=d.part,T=d.payload,L=this.config,R=this.trackId,B=this.levels;if(!B){this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+c.sn+" of level "+c.level+" will not be buffered");return}var O=B[R];console.assert(O,"Audio track is defined on fragment load progress");var K=O.details;console.assert(K,"Audio track details are defined on fragment load progress");var G=L.defaultAudioCodec||O.audioCodec||"mp4a.40.2",z=this.transmuxer;z||(z=this.transmuxer=new g.default(this.hls,v.PlaylistLevelType.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var Y=this.initPTS[c.cc],V=(f=c.initSegment)===null||f===void 0?void 0:f.data;if(Y!==void 0){var X=!1,Z=o?o.index:-1,$=Z!==-1,ee=new A.ChunkMetadata(c.level,c.sn,c.stats.chunkCount,T.byteLength,Z,$);z.push(T,V,G,"",c,o,K.totalduration,X,ee,Y)}else{this.log("Unknown video PTS for cc "+c.cc+", waiting for video PTS before demuxing audio frag "+c.sn+" of ["+K.startSN+" ,"+K.endSN+"],track "+R);var ae=this.waitingData=this.waitingData||{frag:c,part:o,cache:new m.default,complete:!1},ne=ae.cache;ne.push(new Uint8Array(T)),this.waitingVideoCC=this.videoTrackCC,this.state=_.State.WAITING_INIT_PTS}},l._handleFragmentLoadComplete=function(d){if(this.waitingData){this.waitingData.complete=!0;return}e.prototype._handleFragmentLoadComplete.call(this,d)},l.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},l.onBufferCreated=function(d,f){var c=f.tracks.audio;c&&(this.mediaBuffer=c.buffer||null),f.tracks.video&&(this.videoBuffer=f.tracks.video.buffer||null)},l.onFragBuffered=function(d,f){var c=f.frag,o=f.part;if(c.type===v.PlaylistLevelType.AUDIO){if(this.fragContextChanged(c)){this.warn("Fragment "+c.sn+(o?" p: "+o.index:"")+" of level "+c.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch);return}c.sn!=="initSegment"&&(this.fragPrevious=c,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger(D.Events.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(c,o)}},l.onError=function(d,f){switch(f.details){case i.ErrorDetails.FRAG_LOAD_ERROR:case i.ErrorDetails.FRAG_LOAD_TIMEOUT:case i.ErrorDetails.KEY_LOAD_ERROR:case i.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(v.PlaylistLevelType.AUDIO,f);break;case i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==_.State.ERROR&&this.state!==_.State.STOPPED&&(this.state=f.fatal?_.State.ERROR:_.State.IDLE,this.warn(f.details+" while loading frag, switching to "+this.state+" state"));break;case i.ErrorDetails.BUFFER_FULL_ERROR:if(f.parent==="audio"&&(this.state===_.State.PARSING||this.state===_.State.PARSED)){var c=!0,o=this.getFwdBufferInfo(this.mediaBuffer,v.PlaylistLevelType.AUDIO);o&&o.len>.5&&(c=!this.reduceMaxBufferLength(o.len)),c&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,e.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}break}},l.onBufferFlushed=function(d,f){var c=f.type;c===b.ElementaryStreamTypes.AUDIO&&(this.bufferFlushed=!0)},l._handleTransmuxComplete=function(d){var f,c="audio",o=this.hls,T=d.remuxResult,L=d.chunkMeta,R=this.getCurrentContext(L);if(!R){this.warn("The loading context changed while buffering fragment "+L.sn+" of level "+L.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(L.level);return}var B=R.frag,O=R.part,K=R.level.details,G=T.audio,z=T.text,Y=T.id3,V=T.initSegment;if(!(this.fragContextChanged(B)||!K)){if(this.state=_.State.PARSING,this.audioSwitch&&G&&this.completeAudioSwitch(),V!=null&&V.tracks&&(this._bufferInitSegment(V.tracks,B,L),o.trigger(D.Events.FRAG_PARSING_INIT_SEGMENT,{frag:B,id:c,tracks:V.tracks})),G){var X=G.startPTS,Z=G.endPTS,$=G.startDTS,ee=G.endDTS;O&&(O.elementaryStreams[b.ElementaryStreamTypes.AUDIO]={startPTS:X,endPTS:Z,startDTS:$,endDTS:ee}),B.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO,X,Z,$,ee),this.bufferFragmentData(G,B,O,L)}if(Y!=null&&(f=Y.samples)!==null&&f!==void 0&&f.length){var ae=a({id:c,frag:B,details:K},Y);o.trigger(D.Events.FRAG_PARSING_METADATA,ae)}if(z){var ne=a({id:c,frag:B,details:K},z);o.trigger(D.Events.FRAG_PARSING_USERDATA,ne)}}},l._bufferInitSegment=function(d,f,c){if(this.state===_.State.PARSING){d.video&&delete d.video;var o=d.audio;if(!!o){o.levelCodec=o.codec,o.id="audio",this.log("Init audio buffer, container:"+o.container+", codecs[parsed]=["+o.codec+"]"),this.hls.trigger(D.Events.BUFFER_CODECS,d);var T=o.initSegment;if(T!=null&&T.byteLength){var L={type:"audio",frag:f,part:null,chunkMeta:c,parent:f.type,data:T};this.hls.trigger(D.Events.BUFFER_APPENDING,L)}this.tick()}}},l.loadFragment=function(d,f,c){var o=this.fragmentTracker.getState(d);this.fragCurrent=d,(this.audioSwitch||o===k.FragmentState.NOT_LOADED||o===k.FragmentState.PARTIAL)&&(d.sn==="initSegment"?this._loadInitSegment(d):f.live&&!(0,w.isFiniteNumber)(this.initPTS[d.cc])?(this.log("Waiting for video PTS in continuity counter "+d.cc+" of live stream before loading audio fragment "+d.sn+" of level "+this.trackId),this.state=_.State.WAITING_INIT_PTS):(this.startFragRequested=!0,e.prototype.loadFragment.call(this,d,f,c)))},l.completeAudioSwitch=function(){var d=this.hls,f=this.media,c=this.trackId;f&&(this.log("Switching audio track : flushing all audio"),e.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,d.trigger(D.Events.AUDIO_TRACK_SWITCHED,{id:c})},s}(_.default);const t=r},"./src/controller/audio-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>g});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/controller/base-playlist-controller.ts"),h=x("./src/types/loader.ts");function k(A,y){for(var C=0;C<y.length;C++){var i=y[C];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(A,i.key,i)}}function S(A,y,C){return y&&k(A.prototype,y),C&&k(A,C),Object.defineProperty(A,"prototype",{writable:!1}),A}function v(A,y){A.prototype=Object.create(y.prototype),A.prototype.constructor=A,b(A,y)}function b(A,y){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,a){return i.__proto__=a,i},b(A,y)}var m=function(A){v(y,A);function y(i){var a;return a=A.call(this,i,"[audio-track-controller]")||this,a.tracks=[],a.groupId=null,a.tracksInGroup=[],a.trackId=-1,a.trackName="",a.selectDefaultTrack=!0,a.registerListeners(),a}var C=y.prototype;return C.registerListeners=function(){var a=this.hls;a.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),a.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.on(w.Events.LEVEL_LOADING,this.onLevelLoading,this),a.on(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),a.on(w.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),a.on(w.Events.ERROR,this.onError,this)},C.unregisterListeners=function(){var a=this.hls;a.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),a.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.off(w.Events.LEVEL_LOADING,this.onLevelLoading,this),a.off(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),a.off(w.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),a.off(w.Events.ERROR,this.onError,this)},C.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,A.prototype.destroy.call(this)},C.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},C.onManifestParsed=function(a,n){this.tracks=n.audioTracks||[]},C.onAudioTrackLoaded=function(a,n){var u=n.id,p=n.details,r=this.tracksInGroup[u];if(!r){this.warn("Invalid audio track id "+u);return}var t=r.details;r.details=n.details,this.log("audioTrack "+u+" loaded ["+p.startSN+"-"+p.endSN+"]"),u===this.trackId&&(this.retryCount=0,this.playlistLoaded(u,n,t))},C.onLevelLoading=function(a,n){this.switchLevel(n.level)},C.onLevelSwitching=function(a,n){this.switchLevel(n.level)},C.switchLevel=function(a){var n=this.hls.levels[a];if(!!(n!=null&&n.audioGroupIds)){var u=n.audioGroupIds[n.urlId];if(this.groupId!==u){this.groupId=u;var p=this.tracks.filter(function(t){return!u||t.groupId===u});this.selectDefaultTrack&&!p.some(function(t){return t.default})&&(this.selectDefaultTrack=!1),this.tracksInGroup=p;var r={audioTracks:p};this.log("Updating audio tracks, "+p.length+' track(s) found in "'+u+'" group-id'),this.hls.trigger(w.Events.AUDIO_TRACKS_UPDATED,r),this.selectInitialTrack()}}},C.onError=function(a,n){A.prototype.onError.call(this,a,n),!(n.fatal||!n.context)&&n.context.type===h.PlaylistContextType.AUDIO_TRACK&&n.context.id===this.trackId&&n.context.groupId===this.groupId&&this.retryLoadingOrFail(n)},C.setAudioTrack=function(a){var n=this.tracksInGroup;if(a<0||a>=n.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();var u=n[this.trackId];this.log("Now switching to audio-track index "+a);var p=n[a],r=p.id,t=p.groupId,e=t===void 0?"":t,s=p.name,l=p.type,E=p.url;if(this.trackId=a,this.trackName=s,this.selectDefaultTrack=!1,this.hls.trigger(w.Events.AUDIO_TRACK_SWITCHING,{id:r,groupId:e,name:s,type:l,url:E}),!(p.details&&!p.details.live)){var d=this.switchParams(p.url,u==null?void 0:u.details);this.loadPlaylist(d)}},C.selectInitialTrack=function(){var a=this.tracksInGroup;console.assert(a.length,"Initial audio track should be selected when tracks are known");var n=this.trackName,u=this.findTrackId(n)||this.findTrackId();u!==-1?this.setAudioTrack(u):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},C.findTrackId=function(a){for(var n=this.tracksInGroup,u=0;u<n.length;u++){var p=n[u];if((!this.selectDefaultTrack||p.default)&&(!a||a===p.name))return p.id}return-1},C.loadPlaylist=function(a){var n=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(n)){var u=n.id,p=n.groupId,r=n.url;if(a)try{r=a.addDirectives(r)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("loading audio-track playlist for id: "+u),this.clearTimer(),this.hls.trigger(w.Events.AUDIO_TRACK_LOADING,{url:r,id:u,groupId:p,deliveryDirectives:a||null})}},S(y,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(a){this.selectDefaultTrack=!1,this.setAudioTrack(a)}}]),y}(D.default);const g=m},"./src/controller/base-playlist-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/polyfills/number.ts"),_=x("./src/types/level.ts"),D=x("./src/controller/level-helper.ts"),h=x("./src/utils/logger.ts"),k=x("./src/errors.ts"),S=function(){function v(m,g){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=h.logger.log.bind(h.logger,g+":"),this.warn=h.logger.warn.bind(h.logger,g+":"),this.hls=m}var b=v.prototype;return b.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},b.onError=function(g,A){A.fatal&&A.type===k.ErrorTypes.NETWORK_ERROR&&this.clearTimer()},b.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},b.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},b.stopLoad=function(){this.canLoad=!1,this.clearTimer()},b.switchParams=function(g,A){var y=A==null?void 0:A.renditionReports;if(y)for(var C=0;C<y.length;C++){var i=y[C],a=""+i.URI;if(a===g.slice(-a.length)){var n=parseInt(i["LAST-MSN"]),u=parseInt(i["LAST-PART"]);if(A&&this.hls.config.lowLatencyMode){var p=Math.min(A.age-A.partTarget,A.targetduration);u!==void 0&&p>A.partTarget&&(u+=1)}if((0,w.isFiniteNumber)(n))return new _.HlsUrlParameters(n,(0,w.isFiniteNumber)(u)?u:void 0,_.HlsSkip.No)}}},b.loadPlaylist=function(g){},b.shouldLoadTrack=function(g){return this.canLoad&&g&&!!g.url&&(!g.details||g.details.live)},b.playlistLoaded=function(g,A,y){var C=this,i=A.details,a=A.stats,n=a.loading.end?Math.max(0,self.performance.now()-a.loading.end):0;if(i.advancedDateTime=Date.now()-n,i.live||y!=null&&y.live){if(i.reloaded(y),y&&this.log("live playlist "+g+" "+(i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:"MISSED")),y&&i.fragments.length>0&&(0,D.mergeDetails)(y,i),!this.canLoad||!i.live)return;var u,p=void 0,r=void 0;if(i.canBlockReload&&i.endSN&&i.advanced){var t=this.hls.config.lowLatencyMode,e=i.lastPartSn,s=i.endSN,l=i.lastPartIndex,E=l!==-1,d=e===s,f=t?0:l;E?(p=d?s+1:e,r=d?f:l+1):p=s+1;var c=i.age,o=c+i.ageHeader,T=Math.min(o-i.partTarget,i.targetduration*1.5);if(T>0){if(y&&T>y.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+y.tuneInGoal+" to: "+T+" with playlist age: "+i.age),T=0;else{var L=Math.floor(T/i.targetduration);if(p+=L,r!==void 0){var R=Math.round(T%i.targetduration/i.partTarget);r+=R}this.log("CDN Tune-in age: "+i.ageHeader+"s last advanced "+c.toFixed(2)+"s goal: "+T+" skip sn "+L+" to part "+r)}i.tuneInGoal=T}if(u=this.getDeliveryDirectives(i,A.deliveryDirectives,p,r),t||!d){this.loadPlaylist(u);return}}else u=this.getDeliveryDirectives(i,A.deliveryDirectives,p,r);var B=(0,D.computeReloadInterval)(i,a);p!==void 0&&i.canBlockReload&&(B-=i.partTarget||1),this.log("reload live playlist "+g+" in "+Math.round(B)+" ms"),this.timer=self.setTimeout(function(){return C.loadPlaylist(u)},B)}else this.clearTimer()},b.getDeliveryDirectives=function(g,A,y,C){var i=(0,_.getSkipValue)(g,y);return A!=null&&A.skip&&g.deltaUpdateFailed&&(y=A.msn,C=A.part,i=_.HlsSkip.No),new _.HlsUrlParameters(y,C,i)},b.retryLoadingOrFail=function(g){var A=this,y=this.hls.config,C=this.retryCount<y.levelLoadingMaxRetry;if(C){var i;if(this.retryCount++,g.details.indexOf("LoadTimeOut")>-1&&(i=g.context)!==null&&i!==void 0&&i.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+g.details+'"'),this.loadPlaylist();else{var a=Math.min(Math.pow(2,this.retryCount)*y.levelLoadingRetryDelay,y.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout(function(){return A.loadPlaylist()},a),this.warn("retry playlist loading #"+this.retryCount+" in "+a+' ms after "'+g.details+'"')}}else this.warn('cannot recover from error "'+g.details+'"'),this.clearTimer(),g.fatal=!0;return C},v}()},"./src/controller/base-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{State:()=>s,default:()=>l});var w=x("./src/polyfills/number.ts"),_=x("./src/task-loop.ts"),D=x("./src/controller/fragment-tracker.ts"),h=x("./src/utils/buffer-helper.ts"),k=x("./src/utils/logger.ts"),S=x("./src/events.ts"),v=x("./src/errors.ts"),b=x("./src/types/transmuxer.ts"),m=x("./src/utils/mp4-tools.ts"),g=x("./src/utils/discontinuities.ts"),A=x("./src/controller/fragment-finders.ts"),y=x("./src/controller/level-helper.ts"),C=x("./src/loader/fragment-loader.ts"),i=x("./src/crypt/decrypter.ts"),a=x("./src/utils/time-ranges.ts"),n=x("./src/types/loader.ts");function u(E,d){for(var f=0;f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(E,c.key,c)}}function p(E,d,f){return d&&u(E.prototype,d),f&&u(E,f),Object.defineProperty(E,"prototype",{writable:!1}),E}function r(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function t(E,d){E.prototype=Object.create(d.prototype),E.prototype.constructor=E,e(E,d)}function e(E,d){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,o){return c.__proto__=o,c},e(E,d)}var s={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},l=function(E){t(d,E);function d(c,o,T){var L;return L=E.call(this)||this,L.hls=void 0,L.fragPrevious=null,L.fragCurrent=null,L.fragmentTracker=void 0,L.transmuxer=null,L._state=s.STOPPED,L.media=null,L.mediaBuffer=null,L.config=void 0,L.bitrateTest=!1,L.lastCurrentTime=0,L.nextLoadPosition=0,L.startPosition=0,L.loadedmetadata=!1,L.fragLoadError=0,L.retryDate=0,L.levels=null,L.fragmentLoader=void 0,L.levelLastLoaded=null,L.startFragRequested=!1,L.decrypter=void 0,L.initPTS=[],L.onvseeking=null,L.onvended=null,L.logPrefix="",L.log=void 0,L.warn=void 0,L.logPrefix=T,L.log=k.logger.log.bind(k.logger,T+":"),L.warn=k.logger.warn.bind(k.logger,T+":"),L.hls=c,L.fragmentLoader=new C.default(c.config),L.fragmentTracker=o,L.config=c.config,L.decrypter=new i.default(c,c.config),c.on(S.Events.KEY_LOADED,L.onKeyLoaded,r(L)),c.on(S.Events.LEVEL_SWITCHING,L.onLevelSwitching,r(L)),L}var f=d.prototype;return f.doTick=function(){this.onTickEnd()},f.onTickEnd=function(){},f.startLoad=function(o){},f.stopLoad=function(){this.fragmentLoader.abort();var o=this.fragCurrent;o&&this.fragmentTracker.removeFragment(o),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=s.STOPPED},f._streamEnded=function(o,T){var L=this.fragCurrent,R=this.fragmentTracker;if(!T.live&&L&&this.media&&L.sn>=T.endSN&&!o.nextStart){var B=T.partList;if(B!=null&&B.length){var O=B[B.length-1],K=h.BufferHelper.isBuffered(this.media,O.start+O.duration/2);return K}var G=R.getState(L);return G===D.FragmentState.PARTIAL||G===D.FragmentState.OK}return!1},f.onMediaAttached=function(o,T){var L=this.media=this.mediaBuffer=T.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),L.addEventListener("seeking",this.onvseeking),L.addEventListener("ended",this.onvended);var R=this.config;this.levels&&R.autoStartLoad&&this.state===s.STOPPED&&this.startLoad(R.startPosition)},f.onMediaDetaching=function(){var o=this.media;o!=null&&o.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),o&&this.onvseeking&&this.onvended&&(o.removeEventListener("seeking",this.onvseeking),o.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},f.onMediaSeeking=function(){var o=this.config,T=this.fragCurrent,L=this.media,R=this.mediaBuffer,B=this.state,O=L?L.currentTime:0,K=h.BufferHelper.bufferInfo(R||L,O,o.maxBufferHole);if(this.log("media seeking to "+((0,w.isFiniteNumber)(O)?O.toFixed(3):O)+", state: "+B),B===s.ENDED)this.resetLoadingState();else if(T&&!K.len){var G=o.maxFragLookUpTolerance,z=T.start-G,Y=T.start+T.duration+G,V=O>Y;(O<z||V)&&(V&&T.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),T.loader.abort()),this.resetLoadingState())}L&&(this.lastCurrentTime=O),!this.loadedmetadata&&!K.len&&(this.nextLoadPosition=this.startPosition=O),this.tickImmediate()},f.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},f.onKeyLoaded=function(o,T){if(!(this.state!==s.KEY_LOADING||T.frag!==this.fragCurrent||!this.levels)){this.state=s.IDLE;var L=this.levels[T.frag.level].details;L&&this.loadFragment(T.frag,L,T.frag.start)}},f.onLevelSwitching=function(o,T){this.fragLoadError=0},f.onHandlerDestroying=function(){this.stopLoad(),E.prototype.onHandlerDestroying.call(this)},f.onHandlerDestroyed=function(){this.state=s.STOPPED,this.hls.off(S.Events.KEY_LOADED,this.onKeyLoaded,this),this.hls.off(S.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,E.prototype.onHandlerDestroyed.call(this)},f.loadKey=function(o,T){this.log("Loading key for "+o.sn+" of ["+T.startSN+"-"+T.endSN+"], "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+o.level),this.state=s.KEY_LOADING,this.fragCurrent=o,this.hls.trigger(S.Events.KEY_LOADING,{frag:o})},f.loadFragment=function(o,T,L){this._loadFragForPlayback(o,T,L)},f._loadFragForPlayback=function(o,T,L){var R=this,B=function(K){if(R.fragContextChanged(o)){R.warn("Fragment "+o.sn+(K.part?" p: "+K.part.index:"")+" of level "+o.level+" was dropped during download."),R.fragmentTracker.removeFragment(o);return}o.stats.chunkCount++,R._handleFragmentLoadProgress(K)};this._doFragLoad(o,T,L,B).then(function(O){if(!!O){R.fragLoadError=0;var K=R.state;if(R.fragContextChanged(o)){(K===s.FRAG_LOADING||!R.fragCurrent&&K===s.PARSING)&&(R.fragmentTracker.removeFragment(o),R.state=s.IDLE);return}"payload"in O&&(R.log("Loaded fragment "+o.sn+" of level "+o.level),R.hls.trigger(S.Events.FRAG_LOADED,O)),R._handleFragmentLoadComplete(O)}}).catch(function(O){R.state===s.STOPPED||R.state===s.ERROR||(R.warn(O),R.resetFragmentLoading(o))})},f.flushMainBuffer=function(o,T,L){if(L===void 0&&(L=null),!!(o-T)){var R={startOffset:o,endOffset:T,type:L};this.fragLoadError=0,this.hls.trigger(S.Events.BUFFER_FLUSHING,R)}},f._loadInitSegment=function(o){var T=this;this._doFragLoad(o).then(function(L){if(!L||T.fragContextChanged(o)||!T.levels)throw new Error("init load aborted");return L}).then(function(L){var R=T.hls,B=L.payload,O=o.decryptdata;if(B&&B.byteLength>0&&O&&O.key&&O.iv&&O.method==="AES-128"){var K=self.performance.now();return T.decrypter.webCryptoDecrypt(new Uint8Array(B),O.key.buffer,O.iv.buffer).then(function(G){var z=self.performance.now();return R.trigger(S.Events.FRAG_DECRYPTED,{frag:o,payload:G,stats:{tstart:K,tdecrypt:z}}),L.payload=G,L})}return L}).then(function(L){var R=T.fragCurrent,B=T.hls,O=T.levels;if(!O)throw new Error("init load aborted, missing levels");var K=O[o.level].details;console.assert(K,"Level details are defined when init segment is loaded");var G=o.stats;T.state=s.IDLE,T.fragLoadError=0,o.data=new Uint8Array(L.payload),G.parsing.start=G.buffering.start=self.performance.now(),G.parsing.end=G.buffering.end=self.performance.now(),L.frag===R&&B.trigger(S.Events.FRAG_BUFFERED,{stats:G,frag:R,part:null,id:o.type}),T.tick()}).catch(function(L){T.state===s.STOPPED||T.state===s.ERROR||(T.warn(L),T.resetFragmentLoading(o))})},f.fragContextChanged=function(o){var T=this.fragCurrent;return!o||!T||o.level!==T.level||o.sn!==T.sn||o.urlId!==T.urlId},f.fragBufferedComplete=function(o,T){var L,R,B=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+o.type+" sn: "+o.sn+(T?" part: "+T.index:"")+" of "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+o.level+" "+(B?a.default.toString(h.BufferHelper.getBuffered(B)):"(detached)")),this.state=s.IDLE,B&&(!this.loadedmetadata&&B.buffered.length&&((L=this.fragCurrent)===null||L===void 0?void 0:L.sn)===((R=this.fragPrevious)===null||R===void 0?void 0:R.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())},f.seekToStartPos=function(){},f._handleFragmentLoadComplete=function(o){var T=this.transmuxer;if(!!T){var L=o.frag,R=o.part,B=o.partsLoaded,O=!B||B.length===0||B.some(function(G){return!G}),K=new b.ChunkMetadata(L.level,L.sn,L.stats.chunkCount+1,0,R?R.index:-1,!O);T.flush(K)}},f._handleFragmentLoadProgress=function(o){},f._doFragLoad=function(o,T,L,R){var B=this;if(L===void 0&&(L=null),!this.levels)throw new Error("frag load aborted, missing levels");if(L=Math.max(o.start,L||0),this.config.lowLatencyMode&&T){var O=T.partList;if(O&&R){L>o.end&&T.fragmentHint&&(o=T.fragmentHint);var K=this.getNextPart(O,o,L);if(K>-1){var G=O[K];return this.log("Loading part sn: "+o.sn+" p: "+G.index+" cc: "+o.cc+" of playlist ["+T.startSN+"-"+T.endSN+"] parts [0-"+K+"-"+(O.length-1)+"] "+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+o.level+", target: "+parseFloat(L.toFixed(3))),this.nextLoadPosition=G.start+G.duration,this.state=s.FRAG_LOADING,this.hls.trigger(S.Events.FRAG_LOADING,{frag:o,part:O[K],targetBufferTime:L}),this.doFragPartsLoad(o,O,K,R).catch(function(z){return B.handleFragLoadError(z)})}else if(!o.url||this.loadedEndOfParts(O,L))return Promise.resolve(null)}}return this.log("Loading fragment "+o.sn+" cc: "+o.cc+" "+(T?"of ["+T.startSN+"-"+T.endSN+"] ":"")+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+o.level+", target: "+parseFloat(L.toFixed(3))),(0,w.isFiniteNumber)(o.sn)&&!this.bitrateTest&&(this.nextLoadPosition=o.start+o.duration),this.state=s.FRAG_LOADING,this.hls.trigger(S.Events.FRAG_LOADING,{frag:o,targetBufferTime:L}),this.fragmentLoader.load(o,R).catch(function(z){return B.handleFragLoadError(z)})},f.doFragPartsLoad=function(o,T,L,R){var B=this;return new Promise(function(O,K){var G=[],z=function Y(V){var X=T[V];B.fragmentLoader.loadPart(o,X,R).then(function(Z){G[X.index]=Z;var $=Z.part;B.hls.trigger(S.Events.FRAG_LOADED,Z);var ee=T[V+1];if(ee&&ee.fragment===o)Y(V+1);else return O({frag:o,part:$,partsLoaded:G})}).catch(K)};z(L)})},f.handleFragLoadError=function(o){var T=o.data;return T&&T.details===v.ErrorDetails.INTERNAL_ABORTED?this.handleFragLoadAborted(T.frag,T.part):this.hls.trigger(S.Events.ERROR,T),null},f._handleTransmuxerFlush=function(o){var T=this.getCurrentContext(o);if(!T||this.state!==s.PARSING){this.fragCurrent||(this.state=s.IDLE);return}var L=T.frag,R=T.part,B=T.level,O=self.performance.now();L.stats.parsing.end=O,R&&(R.stats.parsing.end=O),this.updateLevelTiming(L,R,B,o.partial)},f.getCurrentContext=function(o){var T=this.levels,L=o.level,R=o.sn,B=o.part;if(!T||!T[L])return this.warn("Levels object was unset while buffering fragment "+R+" of level "+L+". The current chunk will not be buffered."),null;var O=T[L],K=B>-1?(0,y.getPartWith)(O,R,B):null,G=K?K.fragment:(0,y.getFragmentWithSN)(O,R,this.fragCurrent);return G?{frag:G,part:K,level:O}:null},f.bufferFragmentData=function(o,T,L,R){if(!(!o||this.state!==s.PARSING)){var B=o.data1,O=o.data2,K=B;if(B&&O&&(K=(0,m.appendUint8Array)(B,O)),!(!K||!K.length)){var G={type:o.type,frag:T,part:L,chunkMeta:R,parent:T.type,data:K};this.hls.trigger(S.Events.BUFFER_APPENDING,G),o.dropped&&o.independent&&!L&&this.flushBufferGap(T)}}},f.flushBufferGap=function(o){var T=this.media;if(!!T){if(!h.BufferHelper.isBuffered(T,T.currentTime)){this.flushMainBuffer(0,o.start);return}var L=T.currentTime,R=h.BufferHelper.bufferInfo(T,L,0),B=o.duration,O=Math.min(this.config.maxFragLookUpTolerance*2,B*.25),K=Math.max(Math.min(o.start-O,R.end-O),L+O);o.start-K>O&&this.flushMainBuffer(K,o.start)}},f.getFwdBufferInfo=function(o,T){var L=this.config,R=this.getLoadPosition();if(!(0,w.isFiniteNumber)(R))return null;var B=h.BufferHelper.bufferInfo(o,R,L.maxBufferHole);if(B.len===0&&B.nextStart!==void 0){var O=this.fragmentTracker.getBufferedFrag(R,T);if(O&&B.nextStart<O.end)return h.BufferHelper.bufferInfo(o,R,Math.max(B.nextStart,L.maxBufferHole))}return B},f.getMaxBufferLength=function(o){var T=this.config,L;return o?L=Math.max(8*T.maxBufferSize/o,T.maxBufferLength):L=T.maxBufferLength,Math.min(L,T.maxMaxBufferLength)},f.reduceMaxBufferLength=function(o){var T=this.config,L=o||T.maxBufferLength;return T.maxMaxBufferLength>=L?(T.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+T.maxMaxBufferLength+"s"),!0):!1},f.getNextFragment=function(o,T){var L=T.fragments,R=L.length;if(!R)return null;var B=this.config,O=L[0].start,K;if(T.live){var G=B.initialLiveManifestSize;if(R<G)return this.warn("Not enough fragments to start playback (have: "+R+", need: "+G+")"),null;!T.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(K=this.getInitialLiveFragment(T,L),this.startPosition=K?this.hls.liveSyncPosition||K.start:o)}else o<=O&&(K=L[0]);if(!K){var z=B.lowLatencyMode?T.partEnd:T.fragmentEnd;K=this.getFragmentAtPosition(o,z,T)}return this.mapToInitFragWhenRequired(K)},f.mapToInitFragWhenRequired=function(o){return o!=null&&o.initSegment&&!(o!=null&&o.initSegment.data)&&!this.bitrateTest?o.initSegment:o},f.getNextPart=function(o,T,L){for(var R=-1,B=!1,O=!0,K=0,G=o.length;K<G;K++){var z=o[K];if(O=O&&!z.independent,R>-1&&L<z.start)break;var Y=z.loaded;!Y&&(B||z.independent||O)&&z.fragment===T&&(R=K),B=Y}return R},f.loadedEndOfParts=function(o,T){var L=o[o.length-1];return L&&T>L.start&&L.loaded},f.getInitialLiveFragment=function(o,T){var L=this.fragPrevious,R=null;if(L){if(o.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+L.programDateTime),R=(0,A.findFragmentByPDT)(T,L.endProgramDateTime,this.config.maxFragLookUpTolerance)),!R){var B=L.sn+1;if(B>=o.startSN&&B<=o.endSN){var O=T[B-o.startSN];L.cc===O.cc&&(R=O,this.log("Live playlist, switching playlist, load frag with next SN: "+R.sn))}R||(R=(0,A.findFragWithCC)(T,L.cc),R&&this.log("Live playlist, switching playlist, load frag with same CC: "+R.sn))}}else{var K=this.hls.liveSyncPosition;K!==null&&(R=this.getFragmentAtPosition(K,this.bitrateTest?o.fragmentEnd:o.edge,o))}return R},f.getFragmentAtPosition=function(o,T,L){var R=this.config,B=this.fragPrevious,O=L.fragments,K=L.endSN,G=L.fragmentHint,z=R.maxFragLookUpTolerance,Y=!!(R.lowLatencyMode&&L.partList&&G);Y&&G&&!this.bitrateTest&&(O=O.concat(G),K=G.sn);var V;if(o<T){var X=o>T-z?0:z;V=(0,A.findFragmentByPTS)(B,O,o,X)}else V=O[O.length-1];if(V){var Z=V.sn-L.startSN;if(this.fragmentTracker.getState(V)===D.FragmentState.OK&&(B=V),B&&V.sn===B.sn&&!Y){var $=B&&V.level===B.level;if($){var ee=O[Z+1];V.sn<K&&this.fragmentTracker.getState(ee)!==D.FragmentState.OK?(this.log("SN "+V.sn+" just loaded, load next one: "+ee.sn),V=ee):V=null}}}return V},f.synchronizeToLiveEdge=function(o){var T=this.config,L=this.media;if(!!L){var R=this.hls.liveSyncPosition,B=L.currentTime,O=o.fragments[0].start,K=o.edge,G=B>=O-T.maxFragLookUpTolerance&&B<=K;if(R!==null&&L.duration>R&&(B<R||!G)){var z=T.liveMaxLatencyDuration!==void 0?T.liveMaxLatencyDuration:T.liveMaxLatencyDurationCount*o.targetduration;(!G&&L.readyState<4||B<K-z)&&(this.loadedmetadata||(this.nextLoadPosition=R),L.readyState&&(this.warn("Playback: "+B.toFixed(3)+" is located too far from the end of live sliding playlist: "+K+", reset currentTime to : "+R.toFixed(3)),L.currentTime=R))}}},f.alignPlaylists=function(o,T){var L=this.levels,R=this.levelLastLoaded,B=this.fragPrevious,O=R!==null?L[R]:null,K=o.fragments.length;if(!K)return this.warn("No fragments in live playlist"),0;var G=o.fragments[0].start,z=!T,Y=o.alignedSliding&&(0,w.isFiniteNumber)(G);if(z||!Y&&!G){(0,g.alignStream)(B,O,o);var V=o.fragments[0].start;return this.log("Live playlist sliding: "+V.toFixed(2)+" start-sn: "+(T?T.startSN:"na")+"->"+o.startSN+" prev-sn: "+(B?B.sn:"na")+" fragments: "+K),V}return G},f.waitForCdnTuneIn=function(o){var T=3;return o.live&&o.canBlockReload&&o.partTarget&&o.tuneInGoal>Math.max(o.partHoldBack,o.partTarget*T)},f.setStartPosition=function(o,T){var L=this.startPosition;if(L<T&&(L=-1),L===-1||this.lastCurrentTime===-1){var R=o.startTimeOffset;(0,w.isFiniteNumber)(R)?(L=T+R,R<0&&(L+=o.totalduration),L=Math.min(Math.max(T,L),T+o.totalduration),this.log("Start time offset "+R+" found in playlist, adjust startPosition to "+L),this.startPosition=L):o.live?L=this.hls.liveSyncPosition||T:this.startPosition=L=0,this.lastCurrentTime=L}this.nextLoadPosition=L},f.getLoadPosition=function(){var o=this.media,T=0;return this.loadedmetadata&&o?T=o.currentTime:this.nextLoadPosition&&(T=this.nextLoadPosition),T},f.handleFragLoadAborted=function(o,T){this.transmuxer&&o.sn!=="initSegment"&&o.stats.aborted&&(this.warn("Fragment "+o.sn+(T?" part"+T.index:"")+" of level "+o.level+" was aborted"),this.resetFragmentLoading(o))},f.resetFragmentLoading=function(o){(!this.fragCurrent||!this.fragContextChanged(o)&&this.state!==s.FRAG_LOADING_WAITING_RETRY)&&(this.state=s.IDLE)},f.onFragmentOrKeyLoadError=function(o,T){if(!T.fatal){var L=T.frag;if(!(!L||L.type!==o)){var R=this.fragCurrent;console.assert(R&&L.sn===R.sn&&L.level===R.level&&L.urlId===R.urlId,"Frag load error must match current frag to retry");var B=this.config;if(this.fragLoadError+1<=B.fragLoadingMaxRetry){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);var O=Math.min(Math.pow(2,this.fragLoadError)*B.fragLoadingRetryDelay,B.fragLoadingMaxRetryTimeout);this.warn("Fragment "+L.sn+" of "+o+" "+L.level+" failed to load, retrying in "+O+"ms"),this.retryDate=self.performance.now()+O,this.fragLoadError++,this.state=s.FRAG_LOADING_WAITING_RETRY}else T.levelRetry?(o===n.PlaylistLevelType.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=s.IDLE):(k.logger.error(T.details+" reaches max retry, redispatch as fatal ..."),T.fatal=!0,this.hls.stopLoad(),this.state=s.ERROR)}}},f.afterBufferFlushed=function(o,T,L){if(!!o){var R=h.BufferHelper.getBuffered(o);this.fragmentTracker.detectEvictedFragments(T,R,L),this.state===s.ENDED&&this.resetLoadingState()}},f.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=s.IDLE},f.resetStartWhenNotLoaded=function(o){if(!this.loadedmetadata){this.startFragRequested=!1;var T=this.levels?this.levels[o].details:null;T!=null&&T.live?(this.startPosition=-1,this.setStartPosition(T,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}},f.updateLevelTiming=function(o,T,L,R){var B=this,O=L.details;console.assert(!!O,"level.details must be defined");var K=Object.keys(o.elementaryStreams).reduce(function(G,z){var Y=o.elementaryStreams[z];if(Y){var V=Y.endPTS-Y.startPTS;if(V<=0)return B.warn("Could not parse fragment "+o.sn+" "+z+" duration reliably ("+V+")"),G||!1;var X=R?0:(0,y.updateFragPTSDTS)(O,o,Y.startPTS,Y.endPTS,Y.startDTS,Y.endDTS);return B.hls.trigger(S.Events.LEVEL_PTS_UPDATED,{details:O,level:L,drift:X,type:z,frag:o,start:Y.startPTS,end:Y.endPTS}),!0}return G},!1);K||(this.warn("Found no media in fragment "+o.sn+" of level "+L.id+" resetting transmuxer to fallback to playlist timing"),this.resetTransmuxer()),this.state=s.PARSED,this.hls.trigger(S.Events.FRAG_PARSED,{frag:o,part:T})},f.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},p(d,[{key:"state",get:function(){return this._state},set:function(o){var T=this._state;T!==o&&(this._state=o,this.log(T+"->"+o))}}]),d}(_.default)},"./src/controller/buffer-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>A});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts"),h=x("./src/errors.ts"),k=x("./src/utils/buffer-helper.ts"),S=x("./src/utils/mediasource-helper.ts"),v=x("./src/loader/fragment.ts"),b=x("./src/controller/buffer-operation-queue.ts"),m=(0,S.getMediaSource)(),g=/([ha]vc.)(?:\.[^.,]+)+/,A=function(){function y(i){var a=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var n=a.hls,u=a.media,p=a.mediaSource;D.logger.log("[buffer-controller]: Media source opened"),u&&(a.updateMediaElementDuration(),n.trigger(_.Events.MEDIA_ATTACHED,{media:u})),p&&p.removeEventListener("sourceopen",a._onMediaSourceOpen),a.checkPendingTracks()},this._onMediaSourceClose=function(){D.logger.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){D.logger.log("[buffer-controller]: Media source ended")},this.hls=i,this._initSourceBuffer(),this.registerListeners()}var C=y.prototype;return C.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},C.destroy=function(){this.unregisterListeners(),this.details=null},C.registerListeners=function(){var a=this.hls;a.on(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),a.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),a.on(_.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.on(_.Events.BUFFER_RESET,this.onBufferReset,this),a.on(_.Events.BUFFER_APPENDING,this.onBufferAppending,this),a.on(_.Events.BUFFER_CODECS,this.onBufferCodecs,this),a.on(_.Events.BUFFER_EOS,this.onBufferEos,this),a.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),a.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),a.on(_.Events.FRAG_PARSED,this.onFragParsed,this),a.on(_.Events.FRAG_CHANGED,this.onFragChanged,this)},C.unregisterListeners=function(){var a=this.hls;a.off(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),a.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),a.off(_.Events.MANIFEST_PARSED,this.onManifestParsed,this),a.off(_.Events.BUFFER_RESET,this.onBufferReset,this),a.off(_.Events.BUFFER_APPENDING,this.onBufferAppending,this),a.off(_.Events.BUFFER_CODECS,this.onBufferCodecs,this),a.off(_.Events.BUFFER_EOS,this.onBufferEos,this),a.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),a.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),a.off(_.Events.FRAG_PARSED,this.onFragParsed,this),a.off(_.Events.FRAG_CHANGED,this.onFragChanged,this)},C._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new b.default(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},C.onManifestParsed=function(a,n){var u=2;(n.audio&&!n.video||!n.altAudio)&&(u=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=u,this.details=null,D.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},C.onMediaAttaching=function(a,n){var u=this.media=n.media;if(u&&m){var p=this.mediaSource=new m;p.addEventListener("sourceopen",this._onMediaSourceOpen),p.addEventListener("sourceended",this._onMediaSourceEnded),p.addEventListener("sourceclose",this._onMediaSourceClose),u.src=self.URL.createObjectURL(p),this._objectUrl=u.src}},C.onMediaDetaching=function(){var a=this.media,n=this.mediaSource,u=this._objectUrl;if(n){if(D.logger.log("[buffer-controller]: media source detaching"),n.readyState==="open")try{n.endOfStream()}catch(p){D.logger.warn("[buffer-controller]: onMediaDetaching: "+p.message+" while calling endOfStream")}this.onBufferReset(),n.removeEventListener("sourceopen",this._onMediaSourceOpen),n.removeEventListener("sourceended",this._onMediaSourceEnded),n.removeEventListener("sourceclose",this._onMediaSourceClose),a&&(u&&self.URL.revokeObjectURL(u),a.src===u?(a.removeAttribute("src"),a.load()):D.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(_.Events.MEDIA_DETACHED,void 0)},C.onBufferReset=function(){var a=this;this.getSourceBufferTypes().forEach(function(n){var u=a.sourceBuffer[n];try{u&&(a.removeBufferListeners(n),a.mediaSource&&a.mediaSource.removeSourceBuffer(u),a.sourceBuffer[n]=void 0)}catch(p){D.logger.warn("[buffer-controller]: Failed to reset the "+n+" buffer",p)}}),this._initSourceBuffer()},C.onBufferCodecs=function(a,n){var u=this,p=this.getSourceBufferTypes().length;Object.keys(n).forEach(function(r){if(p){var t=u.tracks[r];if(t&&typeof t.buffer.changeType=="function"){var e=n[r],s=e.id,l=e.codec,E=e.levelCodec,d=e.container,f=e.metadata,c=(t.levelCodec||t.codec).replace(g,"$1"),o=(E||l).replace(g,"$1");if(c!==o){var T=d+";codecs="+(E||l);u.appendChangeType(r,T),D.logger.log("[buffer-controller]: switching codec "+c+" to "+o),u.tracks[r]={buffer:t.buffer,codec:l,container:d,levelCodec:E,metadata:f,id:s}}}}else u.pendingTracks[r]=n[r]}),!p&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())},C.appendChangeType=function(a,n){var u=this,p=this.operationQueue,r={execute:function(){var e=u.sourceBuffer[a];e&&(D.logger.log("[buffer-controller]: changing "+a+" sourceBuffer type to "+n),e.changeType(n)),p.shiftAndExecuteNext(a)},onStart:function(){},onComplete:function(){},onError:function(e){D.logger.warn("[buffer-controller]: Failed to change "+a+" SourceBuffer type",e)}};p.append(r,a)},C.onBufferAppending=function(a,n){var u=this,p=this.hls,r=this.operationQueue,t=this.tracks,e=n.data,s=n.type,l=n.frag,E=n.part,d=n.chunkMeta,f=d.buffering[s],c=self.performance.now();f.start=c;var o=l.stats.buffering,T=E?E.stats.buffering:null;o.start===0&&(o.start=c),T&&T.start===0&&(T.start=c);var L=t.audio,R=s==="audio"&&d.id===1&&(L==null?void 0:L.container)==="audio/mpeg",B={execute:function(){if(f.executeStart=self.performance.now(),R){var K=u.sourceBuffer[s];if(K){var G=l.start-K.timestampOffset;Math.abs(G)>=.1&&(D.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+l.start+" (delta: "+G+") sn: "+l.sn+")"),K.timestampOffset=l.start)}}u.appendExecutor(e,s)},onStart:function(){},onComplete:function(){var K=self.performance.now();f.executeEnd=f.end=K,o.first===0&&(o.first=K),T&&T.first===0&&(T.first=K);var G=u.sourceBuffer,z={};for(var Y in G)z[Y]=k.BufferHelper.getBuffered(G[Y]);u.appendError=0,u.hls.trigger(_.Events.BUFFER_APPENDED,{type:s,frag:l,part:E,chunkMeta:d,parent:l.type,timeRanges:z})},onError:function(K){D.logger.error("[buffer-controller]: Error encountered while trying to append to the "+s+" SourceBuffer",K);var G={type:h.ErrorTypes.MEDIA_ERROR,parent:l.type,details:h.ErrorDetails.BUFFER_APPEND_ERROR,err:K,fatal:!1};K.code===DOMException.QUOTA_EXCEEDED_ERR?G.details=h.ErrorDetails.BUFFER_FULL_ERROR:(u.appendError++,G.details=h.ErrorDetails.BUFFER_APPEND_ERROR,u.appendError>p.config.appendErrorMaxRetry&&(D.logger.error("[buffer-controller]: Failed "+p.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),G.fatal=!0,p.stopLoad())),p.trigger(_.Events.ERROR,G)}};r.append(B,s)},C.onBufferFlushing=function(a,n){var u=this,p=this.operationQueue,r=function(e){return{execute:u.removeExecutor.bind(u,e,n.startOffset,n.endOffset),onStart:function(){},onComplete:function(){u.hls.trigger(_.Events.BUFFER_FLUSHED,{type:e})},onError:function(l){D.logger.warn("[buffer-controller]: Failed to remove from "+e+" SourceBuffer",l)}}};n.type?p.append(r(n.type),n.type):this.getSourceBufferTypes().forEach(function(t){p.append(r(t),t)})},C.onFragParsed=function(a,n){var u=this,p=n.frag,r=n.part,t=[],e=r?r.elementaryStreams:p.elementaryStreams;e[v.ElementaryStreamTypes.AUDIOVIDEO]?t.push("audiovideo"):(e[v.ElementaryStreamTypes.AUDIO]&&t.push("audio"),e[v.ElementaryStreamTypes.VIDEO]&&t.push("video"));var s=function(){var E=self.performance.now();p.stats.buffering.end=E,r&&(r.stats.buffering.end=E);var d=r?r.stats:p.stats;u.hls.trigger(_.Events.FRAG_BUFFERED,{frag:p,part:r,stats:d,id:p.type})};t.length===0&&D.logger.warn("Fragments must have at least one ElementaryStreamType set. type: "+p.type+" level: "+p.level+" sn: "+p.sn),this.blockBuffers(s,t)},C.onFragChanged=function(a,n){this.flushBackBuffer()},C.onBufferEos=function(a,n){var u=this,p=this.getSourceBufferTypes().reduce(function(r,t){var e=u.sourceBuffer[t];return(!n.type||n.type===t)&&e&&!e.ended&&(e.ended=!0,D.logger.log("[buffer-controller]: "+t+" sourceBuffer now EOS")),r&&!!(!e||e.ended)},!0);p&&this.blockBuffers(function(){var r=u.mediaSource;!r||r.readyState!=="open"||r.endOfStream()})},C.onLevelUpdated=function(a,n){var u=n.details;!u.fragments.length||(this.details=u,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},C.flushBackBuffer=function(){var a=this.hls,n=this.details,u=this.media,p=this.sourceBuffer;if(!(!u||n===null)){var r=this.getSourceBufferTypes();if(!!r.length){var t=n.live&&a.config.liveBackBufferLength!==null?a.config.liveBackBufferLength:a.config.backBufferLength;if(!(!(0,w.isFiniteNumber)(t)||t<0)){var e=u.currentTime,s=n.levelTargetDuration,l=Math.max(t,s),E=Math.floor(e/s)*s-l;r.forEach(function(d){var f=p[d];if(f){var c=k.BufferHelper.getBuffered(f);c.length>0&&E>c.start(0)&&(a.trigger(_.Events.BACK_BUFFER_REACHED,{bufferEnd:E}),n.live&&a.trigger(_.Events.LIVE_BACK_BUFFER_REACHED,{bufferEnd:E}),a.trigger(_.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:E,type:d}))}})}}}},C.updateMediaElementDuration=function(){if(!(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")){var a=this.details,n=this.hls,u=this.media,p=this.mediaSource,r=a.fragments[0].start+a.totalduration,t=u.duration,e=(0,w.isFiniteNumber)(p.duration)?p.duration:0;a.live&&n.config.liveDurationInfinity?(D.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),p.duration=1/0,this.updateSeekableRange(a)):(r>e&&r>t||!(0,w.isFiniteNumber)(t))&&(D.logger.log("[buffer-controller]: Updating Media Source duration to "+r.toFixed(3)),p.duration=r)}},C.updateSeekableRange=function(a){var n=this.mediaSource,u=a.fragments,p=u.length;if(p&&a.live&&n!==null&&n!==void 0&&n.setLiveSeekableRange){var r=Math.max(0,u[0].start),t=Math.max(r,r+a.totalduration);n.setLiveSeekableRange(r,t)}},C.checkPendingTracks=function(){var a=this.bufferCodecEventsExpected,n=this.operationQueue,u=this.pendingTracks,p=Object.keys(u).length;if(p&&!a||p===2){this.createSourceBuffers(u),this.pendingTracks={};var r=this.getSourceBufferTypes();if(r.length===0){this.hls.trigger(_.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});return}r.forEach(function(t){n.executeNext(t)})}},C.createSourceBuffers=function(a){var n=this.sourceBuffer,u=this.mediaSource;if(!u)throw Error("createSourceBuffers called when mediaSource was null");var p=0;for(var r in a)if(!n[r]){var t=a[r];if(!t)throw Error("source buffer exists for track "+r+", however track does not");var e=t.levelCodec||t.codec,s=t.container+";codecs="+e;D.logger.log("[buffer-controller]: creating sourceBuffer("+s+")");try{var l=n[r]=u.addSourceBuffer(s),E=r;this.addBufferListener(E,"updatestart",this._onSBUpdateStart),this.addBufferListener(E,"updateend",this._onSBUpdateEnd),this.addBufferListener(E,"error",this._onSBUpdateError),this.tracks[r]={buffer:l,codec:e,container:t.container,levelCodec:t.levelCodec,metadata:t.metadata,id:t.id},p++}catch(d){D.logger.error("[buffer-controller]: error while trying to add sourceBuffer: "+d.message),this.hls.trigger(_.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:d,mimeType:s})}}p&&this.hls.trigger(_.Events.BUFFER_CREATED,{tracks:this.tracks})},C._onSBUpdateStart=function(a){var n=this.operationQueue,u=n.current(a);u.onStart()},C._onSBUpdateEnd=function(a){var n=this.operationQueue,u=n.current(a);u.onComplete(),n.shiftAndExecuteNext(a)},C._onSBUpdateError=function(a,n){D.logger.error("[buffer-controller]: "+a+" SourceBuffer error",n),this.hls.trigger(_.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1});var u=this.operationQueue.current(a);u&&u.onError(n)},C.removeExecutor=function(a,n,u){var p=this.media,r=this.mediaSource,t=this.operationQueue,e=this.sourceBuffer,s=e[a];if(!p||!r||!s){D.logger.warn("[buffer-controller]: Attempting to remove from the "+a+" SourceBuffer, but it does not exist"),t.shiftAndExecuteNext(a);return}var l=(0,w.isFiniteNumber)(p.duration)?p.duration:1/0,E=(0,w.isFiniteNumber)(r.duration)?r.duration:1/0,d=Math.max(0,n),f=Math.min(u,l,E);f>d?(D.logger.log("[buffer-controller]: Removing ["+d+","+f+"] from the "+a+" SourceBuffer"),console.assert(!s.updating,a+" sourceBuffer must not be updating"),s.remove(d,f)):t.shiftAndExecuteNext(a)},C.appendExecutor=function(a,n){var u=this.operationQueue,p=this.sourceBuffer,r=p[n];if(!r){D.logger.warn("[buffer-controller]: Attempting to append to the "+n+" SourceBuffer, but it does not exist"),u.shiftAndExecuteNext(n);return}r.ended=!1,console.assert(!r.updating,n+" sourceBuffer must not be updating"),r.appendBuffer(a)},C.blockBuffers=function(a,n){var u=this;if(n===void 0&&(n=this.getSourceBufferTypes()),!n.length){D.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(a);return}var p=this.operationQueue,r=n.map(function(t){return p.appendBlocker(t)});Promise.all(r).then(function(){a(),n.forEach(function(t){var e=u.sourceBuffer[t];(!e||!e.updating)&&p.shiftAndExecuteNext(t)})})},C.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},C.addBufferListener=function(a,n,u){var p=this.sourceBuffer[a];if(!!p){var r=u.bind(this,a);this.listeners[a].push({event:n,listener:r}),p.addEventListener(n,r)}},C.removeBufferListeners=function(a){var n=this.sourceBuffer[a];!n||this.listeners[a].forEach(function(u){n.removeEventListener(u.event,u.listener)})},y}()},"./src/controller/buffer-operation-queue.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=x("./src/utils/logger.ts"),_=function(){function D(k){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=k}var h=D.prototype;return h.append=function(S,v){var b=this.queues[v];b.push(S),b.length===1&&this.buffers[v]&&this.executeNext(v)},h.insertAbort=function(S,v){var b=this.queues[v];b.unshift(S),this.executeNext(v)},h.appendBlocker=function(S){var v,b=new Promise(function(g){v=g}),m={execute:v,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(m,S),b},h.executeNext=function(S){var v=this.buffers,b=this.queues,m=v[S],g=b[S];if(g.length){var A=g[0];try{A.execute()}catch(y){w.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),A.onError(y),(!m||!m.updating)&&(g.shift(),this.executeNext(S))}}},h.shiftAndExecuteNext=function(S){this.queues[S].shift(),this.executeNext(S)},h.current=function(S){return this.queues[S][0]},D}()},"./src/controller/cap-level-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/events.ts");function _(S,v){for(var b=0;b<v.length;b++){var m=v[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(S,m.key,m)}}function D(S,v,b){return v&&_(S.prototype,v),b&&_(S,b),Object.defineProperty(S,"prototype",{writable:!1}),S}var h=function(){function S(b){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=b,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var v=S.prototype;return v.setStreamController=function(m){this.streamController=m},v.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},v.registerListeners=function(){var m=this.hls;m.on(w.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.on(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.on(w.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.unregisterListener=function(){var m=this.hls;m.off(w.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.off(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.off(w.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.onFpsDropLevelCapping=function(m,g){S.isLevelAllowed(g.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(g.droppedLevel)},v.onMediaAttaching=function(m,g){this.media=g.media instanceof HTMLVideoElement?g.media:null},v.onManifestParsed=function(m,g){var A=this.hls;this.restrictedLevels=[],this.firstLevel=g.firstLevel,A.config.capLevelToPlayerSize&&g.video&&this.startCapping()},v.onBufferCodecs=function(m,g){var A=this.hls;A.config.capLevelToPlayerSize&&g.video&&this.startCapping()},v.onMediaDetaching=function(){this.stopCapping()},v.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var m=this.hls.levels;if(m.length){var g=this.hls;g.autoLevelCapping=this.getMaxLevel(m.length-1),g.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=g.autoLevelCapping}}},v.getMaxLevel=function(m){var g=this,A=this.hls.levels;if(!A.length)return-1;var y=A.filter(function(C,i){return S.isLevelAllowed(i,g.restrictedLevels)&&i<=m});return this.clientRect=null,S.getMaxLevelByMediaSize(y,this.mediaWidth,this.mediaHeight)},v.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},v.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},v.getDimensions=function(){if(this.clientRect)return this.clientRect;var m=this.media,g={width:0,height:0};if(m){var A=m.getBoundingClientRect();g.width=A.width,g.height=A.height,!g.width&&!g.height&&(g.width=A.right-A.left||m.width||0,g.height=A.bottom-A.top||m.height||0)}return this.clientRect=g,g},S.isLevelAllowed=function(m,g){return g===void 0&&(g=[]),g.indexOf(m)===-1},S.getMaxLevelByMediaSize=function(m,g,A){if(!m||!m.length)return-1;for(var y=function(u,p){return p?u.width!==p.width||u.height!==p.height:!0},C=m.length-1,i=0;i<m.length;i+=1){var a=m[i];if((a.width>=g||a.height>=A)&&y(a,m[i+1])){C=i;break}}return C},D(S,[{key:"mediaWidth",get:function(){return this.getDimensions().width*this.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*this.contentScaleFactor}},{key:"contentScaleFactor",get:function(){var m=1;if(!this.hls.config.ignoreDevicePixelRatio)try{m=self.devicePixelRatio}catch{}return m}}]),S}();const k=h},"./src/controller/cmcd-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>A});var w=x("./src/events.ts"),_=x("./src/types/cmcd.ts"),D=x("./src/utils/buffer-helper.ts"),h=x("./src/utils/logger.ts");function k(y,C){for(var i=0;i<C.length;i++){var a=C[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(y,a.key,a)}}function S(y,C,i){return C&&k(y.prototype,C),i&&k(y,i),Object.defineProperty(y,"prototype",{writable:!1}),y}function v(y,C){var i=typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"];if(i)return(i=i.call(y)).next.bind(i);if(Array.isArray(y)||(i=b(y))||C&&y&&typeof y.length=="number"){i&&(y=i);var a=0;return function(){return a>=y.length?{done:!0}:{done:!1,value:y[a++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(y,C){if(!!y){if(typeof y=="string")return m(y,C);var i=Object.prototype.toString.call(y).slice(8,-1);if(i==="Object"&&y.constructor&&(i=y.constructor.name),i==="Map"||i==="Set")return Array.from(y);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(y,C)}}function m(y,C){(C==null||C>y.length)&&(C=y.length);for(var i=0,a=new Array(C);i<C;i++)a[i]=y[i];return a}function g(){return g=Object.assign?Object.assign.bind():function(y){for(var C=1;C<arguments.length;C++){var i=arguments[C];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(y[a]=i[a])}return y},g.apply(this,arguments)}var A=function(){function y(i){var a=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){a.initialized&&(a.starved=!0),a.buffering=!0},this.onPlaying=function(){a.initialized||(a.initialized=!0),a.buffering=!1},this.applyPlaylistData=function(p){try{a.apply(p,{ot:_.CMCDObjectType.MANIFEST,su:!a.initialized})}catch(r){h.logger.warn("Could not generate manifest CMCD data.",r)}},this.applyFragmentData=function(p){try{var r=p.frag,t=a.hls.levels[r.level],e=a.getObjectType(r),s={d:r.duration*1e3,ot:e};(e===_.CMCDObjectType.VIDEO||e===_.CMCDObjectType.AUDIO||e==_.CMCDObjectType.MUXED)&&(s.br=t.bitrate/1e3,s.tb=a.getTopBandwidth(e)/1e3,s.bl=a.getBufferLength(e)),a.apply(p,s)}catch(l){h.logger.warn("Could not generate segment CMCD data.",l)}},this.hls=i;var n=this.config=i.config,u=n.cmcd;u!=null&&(n.pLoader=this.createPlaylistLoader(),n.fLoader=this.createFragmentLoader(),this.sid=u.sessionId||y.uuid(),this.cid=u.contentId,this.useHeaders=u.useHeaders===!0,this.registerListeners())}var C=y.prototype;return C.registerListeners=function(){var a=this.hls;a.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),a.on(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),a.on(w.Events.BUFFER_CREATED,this.onBufferCreated,this)},C.unregisterListeners=function(){var a=this.hls;a.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),a.off(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),a.off(w.Events.BUFFER_CREATED,this.onBufferCreated,this),this.onMediaDetached()},C.destroy=function(){this.unregisterListeners(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},C.onMediaAttached=function(a,n){this.media=n.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},C.onMediaDetached=function(){!this.media||(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},C.onBufferCreated=function(a,n){var u,p;this.audioBuffer=(u=n.tracks.audio)===null||u===void 0?void 0:u.buffer,this.videoBuffer=(p=n.tracks.video)===null||p===void 0?void 0:p.buffer},C.createData=function(){var a;return{v:_.CMCDVersion,sf:_.CMCDStreamingFormat.HLS,sid:this.sid,cid:this.cid,pr:(a=this.media)===null||a===void 0?void 0:a.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},C.apply=function(a,n){n===void 0&&(n={}),g(n,this.createData());var u=n.ot===_.CMCDObjectType.INIT||n.ot===_.CMCDObjectType.VIDEO||n.ot===_.CMCDObjectType.MUXED;if(this.starved&&u&&(n.bs=!0,n.su=!0,this.starved=!1),n.su==null&&(n.su=this.buffering),this.useHeaders){var p=y.toHeaders(n);if(!Object.keys(p).length)return;a.headers||(a.headers={}),g(a.headers,p)}else{var r=y.toQuery(n);if(!r)return;a.url=y.appendQueryToUri(a.url,r)}},C.getObjectType=function(a){var n=a.type;if(n==="subtitle")return _.CMCDObjectType.TIMED_TEXT;if(a.sn==="initSegment")return _.CMCDObjectType.INIT;if(n==="audio")return _.CMCDObjectType.AUDIO;if(n==="main")return this.hls.audioTracks.length?_.CMCDObjectType.VIDEO:_.CMCDObjectType.MUXED},C.getTopBandwidth=function(a){var n=0,u,p=this.hls;if(a===_.CMCDObjectType.AUDIO)u=p.audioTracks;else{var r=p.maxAutoLevel,t=r>-1?r+1:p.levels.length;u=p.levels.slice(0,t)}for(var e=v(u),s;!(s=e()).done;){var l=s.value;l.bitrate>n&&(n=l.bitrate)}return n>0?n:NaN},C.getBufferLength=function(a){var n=this.hls.media,u=a===_.CMCDObjectType.AUDIO?this.audioBuffer:this.videoBuffer;if(!u||!n)return NaN;var p=D.BufferHelper.bufferInfo(u,n.currentTime,this.config.maxBufferHole);return p.len*1e3},C.createPlaylistLoader=function(){var a=this.config.pLoader,n=this.applyPlaylistData,u=a||this.config.loader;return function(){function p(t){this.loader=void 0,this.loader=new u(t)}var r=p.prototype;return r.destroy=function(){this.loader.destroy()},r.abort=function(){this.loader.abort()},r.load=function(e,s,l){n(e),this.loader.load(e,s,l)},S(p,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),p}()},C.createFragmentLoader=function(){var a=this.config.fLoader,n=this.applyFragmentData,u=a||this.config.loader;return function(){function p(t){this.loader=void 0,this.loader=new u(t)}var r=p.prototype;return r.destroy=function(){this.loader.destroy()},r.abort=function(){this.loader.abort()},r.load=function(e,s,l){n(e),this.loader.load(e,s,l)},S(p,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),p}()},y.uuid=function(){var a=URL.createObjectURL(new Blob),n=a.toString();return URL.revokeObjectURL(a),n.slice(n.lastIndexOf("/")+1)},y.serialize=function(a){for(var n=[],u=function(R){return!Number.isNaN(R)&&R!=null&&R!==""&&R!==!1},p=function(R){return Math.round(R)},r=function(R){return p(R/100)*100},t=function(R){return encodeURIComponent(R)},e={br:p,d:p,bl:r,dl:r,mtp:r,nor:t,rtp:r,tb:p},s=Object.keys(a||{}).sort(),l=v(s),E;!(E=l()).done;){var d=E.value,f=a[d];if(!!u(f)&&!(d==="v"&&f===1)&&!(d=="pr"&&f===1)){var c=e[d];c&&(f=c(f));var o=typeof f,T=void 0;d==="ot"||d==="sf"||d==="st"?T=d+"="+f:o==="boolean"?T=d:o==="number"?T=d+"="+f:T=d+"="+JSON.stringify(f),n.push(T)}}return n.join(",")},y.toHeaders=function(a){for(var n=Object.keys(a),u={},p=["Object","Request","Session","Status"],r=[{},{},{},{}],t={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},e=0,s=n;e<s.length;e++){var l=s[e],E=t[l]!=null?t[l]:1;r[E][l]=a[l]}for(var d=0;d<r.length;d++){var f=y.serialize(r[d]);f&&(u["CMCD-"+p[d]]=f)}return u},y.toQuery=function(a){return"CMCD="+encodeURIComponent(y.serialize(a))},y.appendQueryToUri=function(a,n){if(!n)return a;var u=a.includes("?")?"&":"?";return""+a+u+n},y}()},"./src/controller/eme-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>A});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/utils/logger.ts"),h=x("./src/utils/mediakeys-helper.ts");function k(y,C){for(var i=0;i<C.length;i++){var a=C[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(y,a.key,a)}}function S(y,C,i){return C&&k(y.prototype,C),i&&k(y,i),Object.defineProperty(y,"prototype",{writable:!1}),y}var v=3,b=function(C,i,a){var n={audioCapabilities:[],videoCapabilities:[]};return C.forEach(function(u){n.audioCapabilities.push({contentType:'audio/mp4; codecs="'+u+'"',robustness:a.audioRobustness||""})}),i.forEach(function(u){n.videoCapabilities.push({contentType:'video/mp4; codecs="'+u+'"',robustness:a.videoRobustness||""})}),[n]},m=function(C,i,a,n){switch(C){case h.KeySystems.WIDEVINE:return b(i,a,n);default:throw new Error("Unknown key-system: "+C)}},g=function(){function y(i){this.hls=void 0,this._widevineLicenseUrl=void 0,this._licenseXhrSetup=void 0,this._licenseResponseCallback=void 0,this._emeEnabled=void 0,this._requestMediaKeySystemAccess=void 0,this._drmSystemOptions=void 0,this._config=void 0,this._mediaKeysList=[],this._media=null,this._hasSetMediaKeys=!1,this._requestLicenseFailureCount=0,this.mediaKeysPromise=null,this._onMediaEncrypted=this.onMediaEncrypted.bind(this),this.hls=i,this._config=i.config,this._widevineLicenseUrl=this._config.widevineLicenseUrl,this._licenseXhrSetup=this._config.licenseXhrSetup,this._licenseResponseCallback=this._config.licenseResponseCallback,this._emeEnabled=this._config.emeEnabled,this._requestMediaKeySystemAccess=this._config.requestMediaKeySystemAccessFunc,this._drmSystemOptions=this._config.drmSystemOptions,this._registerListeners()}var C=y.prototype;return C.destroy=function(){this._unregisterListeners(),this.hls=this._onMediaEncrypted=null,this._requestMediaKeySystemAccess=null},C._registerListeners=function(){this.hls.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this)},C._unregisterListeners=function(){this.hls.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(w.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this)},C.getLicenseServerUrl=function(a){switch(a){case h.KeySystems.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+a+'"')},C._attemptKeySystemAccess=function(a,n,u){var p=this,r=m(a,n,u,this._drmSystemOptions);D.logger.log("Requesting encrypted media key-system access");var t=this.requestMediaKeySystemAccess(a,r);this.mediaKeysPromise=t.then(function(e){return p._onMediaKeySystemAccessObtained(a,e)}),t.catch(function(e){D.logger.error('Failed to obtain key-system "'+a+'" access:',e)})},C._onMediaKeySystemAccessObtained=function(a,n){var u=this;D.logger.log('Access for key-system "'+a+'" obtained');var p={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:n,mediaKeySystemDomain:a};this._mediaKeysList.push(p);var r=Promise.resolve().then(function(){return n.createMediaKeys()}).then(function(t){return p.mediaKeys=t,D.logger.log('Media-keys created for key-system "'+a+'"'),u._onMediaKeysCreated(),t});return r.catch(function(t){D.logger.error("Failed to create media-keys:",t)}),r},C._onMediaKeysCreated=function(){var a=this;this._mediaKeysList.forEach(function(n){n.mediaKeysSession||(n.mediaKeysSession=n.mediaKeys.createSession(),a._onNewMediaKeySession(n.mediaKeysSession))})},C._onNewMediaKeySession=function(a){var n=this;D.logger.log("New key-system session "+a.sessionId),a.addEventListener("message",function(u){n._onKeySessionMessage(a,u.message)},!1)},C._onKeySessionMessage=function(a,n){D.logger.log("Got EME message event, creating license request"),this._requestLicense(n,function(u){D.logger.log("Received license data (length: "+(u&&u.byteLength)+"), updating key-session"),a.update(u).catch(function(p){D.logger.warn("Updating key-session failed: "+p)})})},C.onMediaEncrypted=function(a){var n=this;if(D.logger.log('Media is encrypted using "'+a.initDataType+'" init data type'),!this.mediaKeysPromise){D.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}var u=function(r){!n._media||(n._attemptSetMediaKeys(r),n._generateRequestWithPreferredKeySession(a.initDataType,a.initData))};this.mediaKeysPromise.then(u).catch(u)},C._attemptSetMediaKeys=function(a){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var n=this._mediaKeysList[0];if(!n||!n.mediaKeys){D.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}D.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(n.mediaKeys),this._hasSetMediaKeys=!0}},C._generateRequestWithPreferredKeySession=function(a,n){var u=this,p=this._mediaKeysList[0];if(!p){D.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}if(p.mediaKeysSessionInitialized){D.logger.warn("Key-Session already initialized but requested again");return}var r=p.mediaKeysSession;if(!r){D.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0});return}if(!n){D.logger.warn("Fatal: initData required for generating a key session is null"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});return}D.logger.log('Generating key-session request for "'+a+'" init data type'),p.mediaKeysSessionInitialized=!0,r.generateRequest(a,n).then(function(){D.logger.debug("Key-session generation succeeded")}).catch(function(t){D.logger.error("Error generating key-session request:",t),u.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})},C._createLicenseXhr=function(a,n,u){var p=new XMLHttpRequest;p.responseType="arraybuffer",p.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,p,a,n,u);var r=this._licenseXhrSetup;if(r)try{r.call(this.hls,p,a),r=void 0}catch(t){D.logger.error(t)}try{p.readyState||p.open("POST",a,!0),r&&r.call(this.hls,p,a)}catch(t){throw new Error("issue setting up KeySystem license XHR "+t)}return p},C._onLicenseRequestReadyStageChange=function(a,n,u,p){switch(a.readyState){case 4:if(a.status===200){this._requestLicenseFailureCount=0,D.logger.log("License request succeeded");var r=a.response,t=this._licenseResponseCallback;if(t)try{r=t.call(this.hls,a,n)}catch(s){D.logger.error(s)}p(r)}else{if(D.logger.error("License Request XHR failed ("+n+"). Status: "+a.status+" ("+a.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>v){this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});return}var e=v-this._requestLicenseFailureCount+1;D.logger.warn("Retrying license request, "+e+" attempts left"),this._requestLicense(u,p)}break}},C._generateLicenseRequestChallenge=function(a,n){switch(a.mediaKeySystemDomain){case h.KeySystems.WIDEVINE:return n}throw new Error("unsupported key-system: "+a.mediaKeySystemDomain)},C._requestLicense=function(a,n){D.logger.log("Requesting content license for key-system");var u=this._mediaKeysList[0];if(!u){D.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}try{var p=this.getLicenseServerUrl(u.mediaKeySystemDomain),r=this._createLicenseXhr(p,a,n);D.logger.log("Sending license request to URL: "+p);var t=this._generateLicenseRequestChallenge(u,a);r.send(t)}catch(e){D.logger.error("Failure requesting DRM license: "+e),this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.KEY_SYSTEM_ERROR,details:_.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},C.onMediaAttached=function(a,n){if(!!this._emeEnabled){var u=n.media;this._media=u,u.addEventListener("encrypted",this._onMediaEncrypted)}},C.onMediaDetached=function(){var a=this._media,n=this._mediaKeysList;!a||(a.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(n.map(function(u){if(u.mediaKeysSession)return u.mediaKeysSession.close().catch(function(){})})).then(function(){return a.setMediaKeys(null)}).catch(function(){}))},C.onManifestParsed=function(a,n){if(!!this._emeEnabled){var u=n.levels.map(function(r){return r.audioCodec}).filter(function(r){return!!r}),p=n.levels.map(function(r){return r.videoCodec}).filter(function(r){return!!r});this._attemptKeySystemAccess(h.KeySystems.WIDEVINE,u,p)}},S(y,[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}]),y}();const A=g},"./src/controller/fps-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>h});var w=x("./src/events.ts"),_=x("./src/utils/logger.ts"),D=function(){function k(v){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=v,this.registerListeners()}var S=k.prototype;return S.setStreamController=function(b){this.streamController=b},S.registerListeners=function(){this.hls.on(w.Events.MEDIA_ATTACHING,this.onMediaAttaching,this)},S.unregisterListeners=function(){this.hls.off(w.Events.MEDIA_ATTACHING,this.onMediaAttaching)},S.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},S.onMediaAttaching=function(b,m){var g=this.hls.config;if(g.capLevelOnFPSDrop){var A=m.media instanceof self.HTMLVideoElement?m.media:null;this.media=A,A&&typeof A.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),g.fpsDroppedMonitoringPeriod)}},S.checkFPS=function(b,m,g){var A=performance.now();if(m){if(this.lastTime){var y=A-this.lastTime,C=g-this.lastDroppedFrames,i=m-this.lastDecodedFrames,a=1e3*C/y,n=this.hls;if(n.trigger(w.Events.FPS_DROP,{currentDropped:C,currentDecoded:i,totalDroppedFrames:g}),a>0&&C>n.config.fpsDroppedMonitoringThreshold*i){var u=n.currentLevel;_.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),u>0&&(n.autoLevelCapping===-1||n.autoLevelCapping>=u)&&(u=u-1,n.trigger(w.Events.FPS_DROP_LEVEL_CAPPING,{level:u,droppedLevel:n.currentLevel}),n.autoLevelCapping=u,this.streamController.nextLevelSwitch())}}this.lastTime=A,this.lastDroppedFrames=g,this.lastDecodedFrames=m}},S.checkFPSInterval=function(){var b=this.media;if(b)if(this.isVideoPlaybackQualityAvailable){var m=b.getVideoPlaybackQuality();this.checkFPS(b,m.totalVideoFrames,m.droppedVideoFrames)}else this.checkFPS(b,b.webkitDecodedFrameCount,b.webkitDroppedFrameCount)},k}();const h=D},"./src/controller/fragment-finders.ts":(W,M,x)=>{x.r(M),x.d(M,{findFragWithCC:()=>v,findFragmentByPDT:()=>D,findFragmentByPTS:()=>h,fragmentWithinToleranceTest:()=>k,pdtWithinToleranceTest:()=>S});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/binary-search.ts");function D(b,m,g){if(m===null||!Array.isArray(b)||!b.length||!(0,w.isFiniteNumber)(m))return null;var A=b[0].programDateTime;if(m<(A||0))return null;var y=b[b.length-1].endProgramDateTime;if(m>=(y||0))return null;g=g||0;for(var C=0;C<b.length;++C){var i=b[C];if(S(m,g,i))return i}return null}function h(b,m,g,A){g===void 0&&(g=0),A===void 0&&(A=0);var y=null;if(b?y=m[b.sn-m[0].sn+1]||null:g===0&&m[0].start===0&&(y=m[0]),y&&k(g,A,y)===0)return y;var C=_.default.search(m,k.bind(null,g,A));return C||y}function k(b,m,g){b===void 0&&(b=0),m===void 0&&(m=0);var A=Math.min(m,g.duration+(g.deltaPTS?g.deltaPTS:0));return g.start+g.duration-A<=b?1:g.start-A>b&&g.start?-1:0}function S(b,m,g){var A=Math.min(m,g.duration+(g.deltaPTS?g.deltaPTS:0))*1e3,y=g.endProgramDateTime||0;return y-A>b}function v(b,m){return _.default.search(b,function(g){return g.cc<m?1:g.cc>m?-1:0})}},"./src/controller/fragment-tracker.ts":(W,M,x)=>{x.r(M),x.d(M,{FragmentState:()=>D,FragmentTracker:()=>h});var w=x("./src/events.ts"),_=x("./src/types/loader.ts"),D;(function(v){v.NOT_LOADED="NOT_LOADED",v.APPENDING="APPENDING",v.PARTIAL="PARTIAL",v.OK="OK"})(D||(D={}));var h=function(){function v(m){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=m,this._registerListeners()}var b=v.prototype;return b._registerListeners=function(){var g=this.hls;g.on(w.Events.BUFFER_APPENDED,this.onBufferAppended,this),g.on(w.Events.FRAG_BUFFERED,this.onFragBuffered,this),g.on(w.Events.FRAG_LOADED,this.onFragLoaded,this)},b._unregisterListeners=function(){var g=this.hls;g.off(w.Events.BUFFER_APPENDED,this.onBufferAppended,this),g.off(w.Events.FRAG_BUFFERED,this.onFragBuffered,this),g.off(w.Events.FRAG_LOADED,this.onFragLoaded,this)},b.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},b.getAppendedFrag=function(g,A){if(A===_.PlaylistLevelType.MAIN){var y=this.activeFragment,C=this.activeParts;if(!y)return null;if(C)for(var i=C.length;i--;){var a=C[i],n=a?a.end:y.appendedPTS;if(a.start<=g&&n!==void 0&&g<=n)return i>9&&(this.activeParts=C.slice(i-9)),a}else if(y.start<=g&&y.appendedPTS!==void 0&&g<=y.appendedPTS)return y}return this.getBufferedFrag(g,A)},b.getBufferedFrag=function(g,A){for(var y=this.fragments,C=Object.keys(y),i=C.length;i--;){var a=y[C[i]];if((a==null?void 0:a.body.type)===A&&a.buffered){var n=a.body;if(n.start<=g&&g<=n.end)return n}}return null},b.detectEvictedFragments=function(g,A,y){var C=this;Object.keys(this.fragments).forEach(function(i){var a=C.fragments[i];if(!!a){if(!a.buffered){a.body.type===y&&C.removeFragment(a.body);return}var n=a.range[g];!n||n.time.some(function(u){var p=!C.isTimeBuffered(u.startPTS,u.endPTS,A);return p&&C.removeFragment(a.body),p})}})},b.detectPartialFragments=function(g){var A=this,y=this.timeRanges,C=g.frag,i=g.part;if(!(!y||C.sn==="initSegment")){var a=S(C),n=this.fragments[a];!n||(Object.keys(y).forEach(function(u){var p=C.elementaryStreams[u];if(!!p){var r=y[u],t=i!==null||p.partial===!0;n.range[u]=A.getBufferedTimes(C,i,t,r)}}),n.loaded=null,Object.keys(n.range).length?n.buffered=!0:this.removeFragment(n.body))}},b.fragBuffered=function(g){var A=S(g),y=this.fragments[A];y&&(y.loaded=null,y.buffered=!0)},b.getBufferedTimes=function(g,A,y,C){for(var i={time:[],partial:y},a=A?A.start:g.start,n=A?A.end:g.end,u=g.minEndPTS||n,p=g.maxStartPTS||a,r=0;r<C.length;r++){var t=C.start(r)-this.bufferPadding,e=C.end(r)+this.bufferPadding;if(p>=t&&u<=e){i.time.push({startPTS:Math.max(a,C.start(r)),endPTS:Math.min(n,C.end(r))});break}else if(a<e&&n>t)i.partial=!0,i.time.push({startPTS:Math.max(a,C.start(r)),endPTS:Math.min(n,C.end(r))});else if(n<=t)break}return i},b.getPartialFragment=function(g){var A=null,y,C,i,a=0,n=this.bufferPadding,u=this.fragments;return Object.keys(u).forEach(function(p){var r=u[p];!r||k(r)&&(C=r.body.start-n,i=r.body.end+n,g>=C&&g<=i&&(y=Math.min(g-C,i-g),a<=y&&(A=r.body,a=y)))}),A},b.getState=function(g){var A=S(g),y=this.fragments[A];return y?y.buffered?k(y)?D.PARTIAL:D.OK:D.APPENDING:D.NOT_LOADED},b.isTimeBuffered=function(g,A,y){for(var C,i,a=0;a<y.length;a++){if(C=y.start(a)-this.bufferPadding,i=y.end(a)+this.bufferPadding,g>=C&&A<=i)return!0;if(A<=C)return!1}return!1},b.onFragLoaded=function(g,A){var y=A.frag,C=A.part;if(!(y.sn==="initSegment"||y.bitrateTest||C)){var i=S(y);this.fragments[i]={body:y,loaded:A,buffered:!1,range:Object.create(null)}}},b.onBufferAppended=function(g,A){var y=this,C=A.frag,i=A.part,a=A.timeRanges;if(C.type===_.PlaylistLevelType.MAIN)if(this.activeFragment=C,i){var n=this.activeParts;n||(this.activeParts=n=[]),n.push(i)}else this.activeParts=null;this.timeRanges=a,Object.keys(a).forEach(function(u){var p=a[u];if(y.detectEvictedFragments(u,p),!i)for(var r=0;r<p.length;r++)C.appendedPTS=Math.max(p.end(r),C.appendedPTS||0)})},b.onFragBuffered=function(g,A){this.detectPartialFragments(A)},b.hasFragment=function(g){var A=S(g);return!!this.fragments[A]},b.removeFragmentsInRange=function(g,A,y){var C=this;Object.keys(this.fragments).forEach(function(i){var a=C.fragments[i];if(!!a&&a.buffered){var n=a.body;n.type===y&&n.start<A&&n.end>g&&C.removeFragment(n)}})},b.removeFragment=function(g){var A=S(g);g.stats.loaded=0,g.clearElementaryStreamInfo(),delete this.fragments[A]},b.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},v}();function k(v){var b,m;return v.buffered&&(((b=v.range.video)===null||b===void 0?void 0:b.partial)||((m=v.range.audio)===null||m===void 0?void 0:m.partial))}function S(v){return v.type+"_"+v.level+"_"+v.urlId+"_"+v.sn}},"./src/controller/gap-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{MAX_START_GAP_JUMP:()=>S,SKIP_BUFFER_HOLE_STEP_SECONDS:()=>v,SKIP_BUFFER_RANGE_START:()=>b,STALL_MINIMUM_DURATION_MS:()=>k,default:()=>m});var w=x("./src/utils/buffer-helper.ts"),_=x("./src/errors.ts"),D=x("./src/events.ts"),h=x("./src/utils/logger.ts"),k=250,S=2,v=.1,b=.05,m=function(){function g(y,C,i,a){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=y,this.media=C,this.fragmentTracker=i,this.hls=a}var A=g.prototype;return A.destroy=function(){this.media=null,this.hls=this.fragmentTracker=null},A.poll=function(C,i){var a=this.config,n=this.media,u=this.stalled;if(n!==null){var p=n.currentTime,r=n.seeking,t=this.seeking&&!r,e=!this.seeking&&r;if(this.seeking=r,p!==C){if(this.moved=!0,u!==null){if(this.stallReported){var s=self.performance.now()-u;h.logger.warn("playback not stuck anymore @"+p+", after "+Math.round(s)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if((e||t)&&(this.stalled=null),!(n.paused&&!r||n.ended||n.playbackRate===0||!w.BufferHelper.getBuffered(n).length)){var l=w.BufferHelper.bufferInfo(n,p,0),E=l.len>0,d=l.nextStart||0;if(!(!E&&!d)){if(r){var f=l.len>S,c=!d||i&&i.start<=p||d-p>S&&!this.fragmentTracker.getPartialFragment(p);if(f||c)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var o,T=Math.max(d,l.start||0)-p,L=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,R=L==null||(o=L.details)===null||o===void 0?void 0:o.live,B=R?L.details.targetduration*2:S;if(T>0&&T<=B){this._trySkipBufferHole(null);return}}var O=self.performance.now();if(u===null){this.stalled=O;return}var K=O-u;if(!(!r&&K>=k&&(this._reportStall(l),!this.media))){var G=w.BufferHelper.bufferInfo(n,p,a.maxBufferHole);this._tryFixBufferStall(G,K)}}}}},A._tryFixBufferStall=function(C,i){var a=this.config,n=this.fragmentTracker,u=this.media;if(u!==null){var p=u.currentTime,r=n.getPartialFragment(p);if(r){var t=this._trySkipBufferHole(r);if(t||!this.media)return}C.len>a.maxBufferHole&&i>a.highBufferWatchdogPeriod*1e3&&(h.logger.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}},A._reportStall=function(C){var i=this.hls,a=this.media,n=this.stallReported;!n&&a&&(this.stallReported=!0,h.logger.warn("Playback stalling at @"+a.currentTime+" due to low buffer ("+JSON.stringify(C)+")"),i.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:C.len}))},A._trySkipBufferHole=function(C){var i=this.config,a=this.hls,n=this.media;if(n===null)return 0;for(var u=n.currentTime,p=0,r=w.BufferHelper.getBuffered(n),t=0;t<r.length;t++){var e=r.start(t);if(u+i.maxBufferHole>=p&&u<e){var s=Math.max(e+b,n.currentTime+v);return h.logger.warn("skipping hole, adjusting currentTime from "+u+" to "+s),this.moved=!0,this.stalled=null,n.currentTime=s,C&&a.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+u+" to "+s,frag:C}),s}p=r.end(t)}return 0},A._tryNudgeBuffer=function(){var C=this.config,i=this.hls,a=this.media,n=this.nudgeRetry;if(a!==null){var u=a.currentTime;if(this.nudgeRetry++,n<C.nudgeMaxRetry){var p=u+(n+1)*C.nudgeOffset;h.logger.warn("Nudging 'currentTime' from "+u+" to "+p),a.currentTime=p,i.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else h.logger.error("Playhead still not moving while enough data buffered @"+u+" after "+C.nudgeMaxRetry+" nudges"),i.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}},g}()},"./src/controller/id3-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>C});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/texttrack-utils.ts"),h=x("./src/demux/id3.ts"),k=x("./src/loader/date-range.ts"),S=x("./src/types/demuxer.ts"),v=.25;function b(){return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}var m=function(){var i=b();try{new i(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY}();function g(i,a){return i.getTime()/1e3-a}function A(i){return Uint8Array.from(i.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}var y=function(){function i(n){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=n,this._registerListeners()}var a=i.prototype;return a.destroy=function(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null},a._registerListeners=function(){var u=this.hls;u.on(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.on(_.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),u.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),u.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},a._unregisterListeners=function(){var u=this.hls;u.off(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.off(_.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),u.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),u.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},a.onMediaAttached=function(u,p){this.media=p.media},a.onMediaDetaching=function(){!this.id3Track||((0,D.clearCurrentCues)(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})},a.onManifestLoading=function(){this.dateRangeCuesAppended={}},a.createTrack=function(u){var p=this.getID3Track(u.textTracks);return p.mode="hidden",p},a.getID3Track=function(u){if(!!this.media){for(var p=0;p<u.length;p++){var r=u[p];if(r.kind==="metadata"&&r.label==="id3")return(0,D.sendAddTrackEvent)(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},a.onFragParsingMetadata=function(u,p){if(!!this.media){var r=this.hls.config,t=r.enableEmsgMetadataCues,e=r.enableID3MetadataCues;if(!(!t&&!e)){p.frag;var s=p.samples;p.details,this.id3Track||(this.id3Track=this.createTrack(this.media));for(var l=b(),E=0;E<s.length;E++){var d=s[E].type;if(!(d===S.MetadataSchema.emsg&&!t||!e)){var f=h.getID3Frames(s[E].data);if(f){var c=s[E].pts,o=c+s[E].duration;o>m&&(o=m);var T=o-c;T<=0&&(o=c+v);for(var L=0;L<f.length;L++){var R=f[L];if(!h.isTimeStampFrame(R)){this.updateId3CueEnds(c);var B=new l(c,o,"");B.value=R,d&&(B.type=d),this.id3Track.addCue(B)}}}}}}}},a.updateId3CueEnds=function(u){var p,r=(p=this.id3Track)===null||p===void 0?void 0:p.cues;if(r)for(var t=r.length;t--;){var e=r[t];e.startTime<u&&e.endTime===m&&(e.endTime=u)}},a.onBufferFlushing=function(u,p){var r=p.startOffset,t=p.endOffset,e=p.type,s=this.id3Track,l=this.hls;if(!!l){var E=l.config,d=E.enableEmsgMetadataCues,f=E.enableID3MetadataCues;if(s&&(d||f)){var c;e==="audio"?c=function(T){return T.type===S.MetadataSchema.audioId3&&f}:e==="video"?c=function(T){return T.type===S.MetadataSchema.emsg&&d}:c=function(T){return T.type===S.MetadataSchema.audioId3&&f||T.type===S.MetadataSchema.emsg&&d},(0,D.removeCuesInRange)(s,r,t,c)}}},a.onLevelUpdated=function(u,p){var r=this,t=p.details;if(!(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)){var e=this.dateRangeCuesAppended,s=this.id3Track,l=t.dateRanges,E=Object.keys(l);if(s)for(var d=Object.keys(e).filter(function(O){return!E.includes(O)}),f=function(K){var G=d[K];Object.keys(e[G].cues).forEach(function(z){s.removeCue(e[G].cues[z])}),delete e[G]},c=d.length;c--;)f(c);var o=t.fragments[t.fragments.length-1];if(!(E.length===0||!(0,w.isFiniteNumber)(o==null?void 0:o.programDateTime))){this.id3Track||(this.id3Track=this.createTrack(this.media));for(var T=o.programDateTime/1e3-o.start,L=b(),R=function(K){var G=E[K],z=l[G],Y=e[G],V=(Y==null?void 0:Y.cues)||{},X=(Y==null?void 0:Y.durationKnown)||!1,Z=g(z.startDate,T),$=m,ee=z.endDate;if(ee)$=g(ee,T),X=!0;else if(z.endOnNext&&!X){var ae=E.reduce(function(ue,de){var ce=l[de];return ce.class===z.class&&ce.id!==de&&ce.startDate>z.startDate&&ue.push(ce),ue},[]).sort(function(ue,de){return ue.startDate.getTime()-de.startDate.getTime()})[0];ae&&($=g(ae.startDate,T),X=!0)}for(var ne=Object.keys(z.attr),oe=0;oe<ne.length;oe++){var se=ne[oe];if(!(se===k.DateRangeAttribute.ID||se===k.DateRangeAttribute.CLASS||se===k.DateRangeAttribute.START_DATE||se===k.DateRangeAttribute.DURATION||se===k.DateRangeAttribute.END_DATE||se===k.DateRangeAttribute.END_ON_NEXT)){var te=V[se];if(te)X&&!Y.durationKnown&&(te.endTime=$);else{var ie=z.attr[se];te=new L(Z,$,""),(se===k.DateRangeAttribute.SCTE35_OUT||se===k.DateRangeAttribute.SCTE35_IN)&&(ie=A(ie)),te.value={key:se,data:ie},te.type=S.MetadataSchema.dateRange,r.id3Track.addCue(te),V[se]=te}}}e[G]={cues:V,dateRange:z,durationKnown:X}},B=0;B<E.length;B++)R(B)}}},i}();const C=y},"./src/controller/latency-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/errors.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts");function h(v,b){for(var m=0;m<b.length;m++){var g=b[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,g.key,g)}}function k(v,b,m){return b&&h(v.prototype,b),m&&h(v,m),Object.defineProperty(v,"prototype",{writable:!1}),v}var S=function(){function v(m){var g=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return g.timeupdate()},this.hls=m,this.config=m.config,this.registerListeners()}var b=v.prototype;return b.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},b.registerListeners=function(){this.hls.on(_.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(_.Events.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(_.Events.ERROR,this.onError,this)},b.unregisterListeners=function(){this.hls.off(_.Events.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(_.Events.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(_.Events.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(_.Events.ERROR,this.onError)},b.onMediaAttached=function(g,A){this.media=A.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},b.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},b.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},b.onLevelUpdated=function(g,A){var y=A.details;this.levelDetails=y,y.advanced&&this.timeupdate(),!y.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},b.onError=function(g,A){A.details===w.ErrorDetails.BUFFER_STALLED_ERROR&&(this.stallCount++,D.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},b.timeupdate=function(){var g=this.media,A=this.levelDetails;if(!(!g||!A)){this.currentTime=g.currentTime;var y=this.computeLatency();if(y!==null){this._latency=y;var C=this.config,i=C.lowLatencyMode,a=C.maxLiveSyncPlaybackRate;if(!(!i||a===1)){var n=this.targetLatency;if(n!==null){var u=y-n,p=Math.min(this.maxLatency,n+A.targetduration),r=u<p;if(A.live&&r&&u>.05&&this.forwardBufferLength>1){var t=Math.min(2,Math.max(1,a)),e=Math.round(2/(1+Math.exp(-.75*u-this.edgeStalled))*20)/20;g.playbackRate=Math.min(t,Math.max(1,e))}else g.playbackRate!==1&&g.playbackRate!==0&&(g.playbackRate=1)}}}}},b.estimateLiveEdge=function(){var g=this.levelDetails;return g===null?null:g.edge+g.age},b.computeLatency=function(){var g=this.estimateLiveEdge();return g===null?null:g-this.currentTime},k(v,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var g=this.config,A=this.levelDetails;return g.liveMaxLatencyDuration!==void 0?g.liveMaxLatencyDuration:A?g.liveMaxLatencyDurationCount*A.targetduration:0}},{key:"targetLatency",get:function(){var g=this.levelDetails;if(g===null)return null;var A=g.holdBack,y=g.partHoldBack,C=g.targetduration,i=this.config,a=i.liveSyncDuration,n=i.liveSyncDurationCount,u=i.lowLatencyMode,p=this.hls.userConfig,r=u&&y||A;(p.liveSyncDuration||p.liveSyncDurationCount||r===0)&&(r=a!==void 0?a:n*C);var t=C,e=1;return r+Math.min(this.stallCount*e,t)}},{key:"liveSyncPosition",get:function(){var g=this.estimateLiveEdge(),A=this.targetLatency,y=this.levelDetails;if(g===null||A===null||y===null)return null;var C=y.edge,i=g-A-this.edgeStalled,a=C-y.totalduration,n=C-(this.config.lowLatencyMode&&y.partTarget||y.targetduration);return Math.min(Math.max(a,i),n)}},{key:"drift",get:function(){var g=this.levelDetails;return g===null?1:g.drift}},{key:"edgeStalled",get:function(){var g=this.levelDetails;if(g===null)return 0;var A=(this.config.lowLatencyMode&&g.partTarget||g.targetduration)*3;return Math.max(g.age-A,0)}},{key:"forwardBufferLength",get:function(){var g=this.media,A=this.levelDetails;if(!g||!A)return 0;var y=g.buffered.length;return(y?g.buffered.end(y-1):A.edge)-this.currentTime}}]),v}()},"./src/controller/level-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>i});var w=x("./src/types/level.ts"),_=x("./src/events.ts"),D=x("./src/errors.ts"),h=x("./src/utils/codecs.ts"),k=x("./src/controller/level-helper.ts"),S=x("./src/controller/base-playlist-controller.ts"),v=x("./src/types/loader.ts");function b(){return b=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(a[p]=u[p])}return a},b.apply(this,arguments)}function m(a,n){for(var u=0;u<n.length;u++){var p=n[u];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(a,p.key,p)}}function g(a,n,u){return n&&m(a.prototype,n),u&&m(a,u),Object.defineProperty(a,"prototype",{writable:!1}),a}function A(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,y(a,n)}function y(a,n){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,r){return p.__proto__=r,p},y(a,n)}var C=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),i=function(a){A(n,a);function n(p){var r;return r=a.call(this,p,"[level-controller]")||this,r._levels=[],r._firstLevel=-1,r._startLevel=void 0,r.currentLevelIndex=-1,r.manualLevelIndex=-1,r.onParsedComplete=void 0,r._registerListeners(),r}var u=n.prototype;return u._registerListeners=function(){var r=this.hls;r.on(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),r.on(_.Events.LEVEL_LOADED,this.onLevelLoaded,this),r.on(_.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),r.on(_.Events.FRAG_LOADED,this.onFragLoaded,this),r.on(_.Events.ERROR,this.onError,this)},u._unregisterListeners=function(){var r=this.hls;r.off(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),r.off(_.Events.LEVEL_LOADED,this.onLevelLoaded,this),r.off(_.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),r.off(_.Events.FRAG_LOADED,this.onFragLoaded,this),r.off(_.Events.ERROR,this.onError,this)},u.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,a.prototype.destroy.call(this)},u.startLoad=function(){var r=this._levels;r.forEach(function(t){t.loadError=0}),a.prototype.startLoad.call(this)},u.onManifestLoaded=function(r,t){var e=[],s=[],l=[],E,d={},f,c=!1,o=!1,T=!1;if(t.levels.forEach(function(O){var K=O.attrs;c=c||!!(O.width&&O.height),o=o||!!O.videoCodec,T=T||!!O.audioCodec,C&&O.audioCodec&&O.audioCodec.indexOf("mp4a.40.34")!==-1&&(O.audioCodec=void 0);var G=O.bitrate+"-"+O.attrs.RESOLUTION+"-"+O.attrs.CODECS;f=d[G],f?f.url.push(O.url):(f=new w.Level(O),d[G]=f,e.push(f)),K&&(K.AUDIO&&(0,k.addGroupId)(f,"audio",K.AUDIO),K.SUBTITLES&&(0,k.addGroupId)(f,"text",K.SUBTITLES))}),(c||o)&&T&&(e=e.filter(function(O){var K=O.videoCodec,G=O.width,z=O.height;return!!K||!!(G&&z)})),e=e.filter(function(O){var K=O.audioCodec,G=O.videoCodec;return(!K||(0,h.isCodecSupportedInMp4)(K,"audio"))&&(!G||(0,h.isCodecSupportedInMp4)(G,"video"))}),t.audioTracks&&(s=t.audioTracks.filter(function(O){return!O.audioCodec||(0,h.isCodecSupportedInMp4)(O.audioCodec,"audio")}),(0,k.assignTrackIdsByGroup)(s)),t.subtitles&&(l=t.subtitles,(0,k.assignTrackIdsByGroup)(l)),e.length>0){E=e[0].bitrate,e.sort(function(O,K){return O.bitrate-K.bitrate}),this._levels=e;for(var L=0;L<e.length;L++)if(e[L].bitrate===E){this._firstLevel=L,this.log("manifest loaded, "+e.length+" level(s) found, first bitrate: "+E);break}var R=T&&!o,B={levels:e,audioTracks:s,subtitleTracks:l,firstLevel:this._firstLevel,stats:t.stats,audio:T,video:o,altAudio:!R&&s.some(function(O){return!!O.url})};this.hls.trigger(_.Events.MANIFEST_PARSED,B),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.MEDIA_ERROR,details:D.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,reason:"no level with compatible codecs found in manifest"})},u.onError=function(r,t){var e;if(a.prototype.onError.call(this,r,t),!t.fatal){var s=t.context,l=this._levels[this.currentLevelIndex];if(s&&(s.type===v.PlaylistContextType.AUDIO_TRACK&&l.audioGroupIds&&s.groupId===l.audioGroupIds[l.urlId]||s.type===v.PlaylistContextType.SUBTITLE_TRACK&&l.textGroupIds&&s.groupId===l.textGroupIds[l.urlId])){this.redundantFailover(this.currentLevelIndex);return}var E=!1,d=!0,f;switch(t.details){case D.ErrorDetails.FRAG_LOAD_ERROR:case D.ErrorDetails.FRAG_LOAD_TIMEOUT:case D.ErrorDetails.KEY_LOAD_ERROR:case D.ErrorDetails.KEY_LOAD_TIMEOUT:if(t.frag){var c=t.frag.type===v.PlaylistLevelType.MAIN?t.frag.level:this.currentLevelIndex,o=this._levels[c];o?(o.fragmentError++,o.fragmentError>this.hls.config.fragLoadingMaxRetry&&(f=c)):f=c}break;case D.ErrorDetails.LEVEL_LOAD_ERROR:case D.ErrorDetails.LEVEL_LOAD_TIMEOUT:s&&(s.deliveryDirectives&&(d=!1),f=s.level),E=!0;break;case D.ErrorDetails.REMUX_ALLOC_ERROR:f=(e=t.level)!=null?e:this.currentLevelIndex,E=!0;break}f!==void 0&&this.recoverLevel(t,f,E,d)}},u.recoverLevel=function(r,t,e,s){var l=r.details,E=this._levels[t];if(E.loadError++,e){var d=this.retryLoadingOrFail(r);if(d)r.levelRetry=!0;else{this.currentLevelIndex=-1;return}}if(s){var f=E.url.length;if(f>1&&E.loadError<f)r.levelRetry=!0,this.redundantFailover(t);else if(this.manualLevelIndex===-1){for(var c=-1,o=this._levels,T=o.length;T--;){var L=(T+this.currentLevelIndex)%o.length;if(L!==this.currentLevelIndex&&o[L].loadError===0){c=L;break}}c>-1&&this.currentLevelIndex!==c&&(this.warn(l+": switch to "+c),r.levelRetry=!0,this.hls.nextAutoLevel=c)}}},u.redundantFailover=function(r){var t=this._levels[r],e=t.url.length;if(e>1){var s=(t.urlId+1)%e;this.warn("Switching to redundant URL-id "+s),this._levels.forEach(function(l){l.urlId=s}),this.level=r}},u.onFragLoaded=function(r,t){var e=t.frag;if(e!==void 0&&e.type===v.PlaylistLevelType.MAIN){var s=this._levels[e.level];s!==void 0&&(s.fragmentError=0,s.loadError=0)}},u.onLevelLoaded=function(r,t){var e,s=t.level,l=t.details,E=this._levels[s];if(!E){var d;this.warn("Invalid level index "+s),(d=t.deliveryDirectives)!==null&&d!==void 0&&d.skip&&(l.deltaUpdateFailed=!0);return}s===this.currentLevelIndex?(E.fragmentError===0&&(E.loadError=0,this.retryCount=0),this.playlistLoaded(s,t,E.details)):(e=t.deliveryDirectives)!==null&&e!==void 0&&e.skip&&(l.deltaUpdateFailed=!0)},u.onAudioTrackSwitched=function(r,t){var e=this.hls.levels[this.currentLevelIndex];if(!!e&&e.audioGroupIds){for(var s=-1,l=this.hls.audioTracks[t.id].groupId,E=0;E<e.audioGroupIds.length;E++)if(e.audioGroupIds[E]===l){s=E;break}s!==e.urlId&&(e.urlId=s,this.startLoad())}},u.loadPlaylist=function(r){var t=this.currentLevelIndex,e=this._levels[t];if(this.canLoad&&e&&e.url.length>0){var s=e.urlId,l=e.url[s];if(r)try{l=r.addDirectives(l)}catch(E){this.warn("Could not construct new URL with HLS Delivery Directives: "+E)}this.log("Attempt loading level index "+t+(r?" at sn "+r.msn+" part "+r.part:"")+" with URL-id "+s+" "+l),this.clearTimer(),this.hls.trigger(_.Events.LEVEL_LOADING,{url:l,level:t,id:s,deliveryDirectives:r||null})}},u.removeLevel=function(r,t){var e=function(E,d){return d!==t},s=this._levels.filter(function(l,E){return E!==r?!0:l.url.length>1&&t!==void 0?(l.url=l.url.filter(e),l.audioGroupIds&&(l.audioGroupIds=l.audioGroupIds.filter(e)),l.textGroupIds&&(l.textGroupIds=l.textGroupIds.filter(e)),l.urlId=0,!0):!1}).map(function(l,E){var d=l.details;return d!=null&&d.fragments&&d.fragments.forEach(function(f){f.level=E}),l});this._levels=s,this.hls.trigger(_.Events.LEVELS_UPDATED,{levels:s})},g(n,[{key:"levels",get:function(){return this._levels.length===0?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(r){var t,e=this._levels;if(e.length!==0&&!(this.currentLevelIndex===r&&(t=e[r])!==null&&t!==void 0&&t.details)){if(r<0||r>=e.length){var s=r<0;if(this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.OTHER_ERROR,details:D.ErrorDetails.LEVEL_SWITCH_ERROR,level:r,fatal:s,reason:"invalid level idx"}),s)return;r=Math.min(r,e.length-1)}this.clearTimer();var l=this.currentLevelIndex,E=e[l],d=e[r];this.log("switching to level "+r+" from "+l),this.currentLevelIndex=r;var f=b({},d,{level:r,maxBitrate:d.maxBitrate,uri:d.uri,urlId:d.urlId});delete f._urlId,this.hls.trigger(_.Events.LEVEL_SWITCHING,f);var c=d.details;if(!c||c.live){var o=this.switchParams(d.uri,E==null?void 0:E.details);this.loadPlaylist(o)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(r){this.manualLevelIndex=r,this._startLevel===void 0&&(this._startLevel=r),r!==-1&&(this.level=r)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(r){this._firstLevel=r}},{key:"startLevel",get:function(){if(this._startLevel===void 0){var r=this.hls.config.startLevel;return r!==void 0?r:this._firstLevel}else return this._startLevel},set:function(r){this._startLevel=r}},{key:"nextLoadLevel",get:function(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(r){this.level=r,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=r)}}]),n}(S.default)},"./src/controller/level-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{addGroupId:()=>k,addSliding:()=>a,adjustSliding:()=>i,assignTrackIdsByGroup:()=>S,computeReloadInterval:()=>n,getFragmentWithSN:()=>u,getPartWith:()=>p,mapFragmentIntersection:()=>C,mapPartIntersection:()=>y,mergeDetails:()=>g,updateFragPTSDTS:()=>m,updatePTS:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/logger.ts"),D=x("./src/loader/date-range.ts");function h(){return h=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},h.apply(this,arguments)}function k(r,t,e){switch(t){case"audio":r.audioGroupIds||(r.audioGroupIds=[]),r.audioGroupIds.push(e);break;case"text":r.textGroupIds||(r.textGroupIds=[]),r.textGroupIds.push(e);break}}function S(r){var t={};r.forEach(function(e){var s=e.groupId||"";e.id=t[s]=t[s]||0,t[s]++})}function v(r,t,e){var s=r[t],l=r[e];b(s,l)}function b(r,t){var e=t.startPTS;if((0,w.isFiniteNumber)(e)){var s=0,l;t.sn>r.sn?(s=e-r.start,l=r):(s=r.start-e,l=t),l.duration!==s&&(l.duration=s)}else if(t.sn>r.sn){var E=r.cc===t.cc;E&&r.minEndPTS?t.start=r.start+(r.minEndPTS-r.start):t.start=r.start+r.duration}else t.start=Math.max(r.start-t.duration,0)}function m(r,t,e,s,l,E){var d=s-e;d<=0&&(_.logger.warn("Fragment should have a positive duration",t),s=e+t.duration,E=l+t.duration);var f=e,c=s,o=t.startPTS,T=t.endPTS;if((0,w.isFiniteNumber)(o)){var L=Math.abs(o-e);(0,w.isFiniteNumber)(t.deltaPTS)?t.deltaPTS=Math.max(L,t.deltaPTS):t.deltaPTS=L,f=Math.max(e,o),e=Math.min(e,o),l=Math.min(l,t.startDTS),c=Math.min(s,T),s=Math.max(s,T),E=Math.max(E,t.endDTS)}t.duration=s-e;var R=e-t.start;t.appendedPTS=s,t.start=t.startPTS=e,t.maxStartPTS=f,t.startDTS=l,t.endPTS=s,t.minEndPTS=c,t.endDTS=E;var B=t.sn;if(!r||B<r.startSN||B>r.endSN)return 0;var O,K=B-r.startSN,G=r.fragments;for(G[K]=t,O=K;O>0;O--)b(G[O],G[O-1]);for(O=K;O<G.length-1;O++)b(G[O],G[O+1]);return r.fragmentHint&&b(G[G.length-1],r.fragmentHint),r.PTSKnown=r.alignedSliding=!0,R}function g(r,t){for(var e=null,s=r.fragments,l=s.length-1;l>=0;l--){var E=s[l].initSegment;if(E){e=E;break}}r.fragmentHint&&delete r.fragmentHint.endPTS;var d=0,f;if(C(r,t,function(O,K){O.relurl&&(d=O.cc-K.cc),(0,w.isFiniteNumber)(O.startPTS)&&(0,w.isFiniteNumber)(O.endPTS)&&(K.start=K.startPTS=O.startPTS,K.startDTS=O.startDTS,K.appendedPTS=O.appendedPTS,K.maxStartPTS=O.maxStartPTS,K.endPTS=O.endPTS,K.endDTS=O.endDTS,K.minEndPTS=O.minEndPTS,K.duration=O.endPTS-O.startPTS,K.duration&&(f=K),t.PTSKnown=t.alignedSliding=!0),K.elementaryStreams=O.elementaryStreams,K.loader=O.loader,K.stats=O.stats,K.urlId=O.urlId,O.initSegment&&(K.initSegment=O.initSegment,e=O.initSegment)}),e){var c=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments;c.forEach(function(O){var K;(!O.initSegment||O.initSegment.relurl===((K=e)===null||K===void 0?void 0:K.relurl))&&(O.initSegment=e)})}if(t.skippedSegments)if(t.deltaUpdateFailed=t.fragments.some(function(O){return!O}),t.deltaUpdateFailed){_.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var o=t.skippedSegments;o--;)t.fragments.shift();t.startSN=t.fragments[0].sn,t.startCC=t.fragments[0].cc}else t.canSkipDateRanges&&(t.dateRanges=A(r.dateRanges,t.dateRanges,t.recentlyRemovedDateranges));var T=t.fragments;if(d){_.logger.warn("discontinuity sliding from playlist, take drift into account");for(var L=0;L<T.length;L++)T[L].cc+=d}t.skippedSegments&&(t.startCC=t.fragments[0].cc),y(r.partList,t.partList,function(O,K){K.elementaryStreams=O.elementaryStreams,K.stats=O.stats}),f?m(t,f,f.startPTS,f.endPTS,f.startDTS,f.endDTS):i(r,t),T.length&&(t.totalduration=t.edge-T[0].start),t.driftStartTime=r.driftStartTime,t.driftStart=r.driftStart;var R=t.advancedDateTime;if(t.advanced&&R){var B=t.edge;t.driftStart||(t.driftStartTime=R,t.driftStart=B),t.driftEndTime=R,t.driftEnd=B}else t.driftEndTime=r.driftEndTime,t.driftEnd=r.driftEnd,t.advancedDateTime=r.advancedDateTime}function A(r,t,e){var s=h({},r);return e&&e.forEach(function(l){delete s[l]}),Object.keys(t).forEach(function(l){var E=new D.DateRange(t[l].attr,s[l]);E.isValid?s[l]=E:_.logger.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "'+JSON.stringify(t[l].attr)+'"')}),s}function y(r,t,e){if(r&&t)for(var s=0,l=0,E=r.length;l<=E;l++){var d=r[l],f=t[l+s];d&&f&&d.index===f.index&&d.fragment.sn===f.fragment.sn?e(d,f):s--}}function C(r,t,e){for(var s=t.skippedSegments,l=Math.max(r.startSN,t.startSN)-t.startSN,E=(r.fragmentHint?1:0)+(s?t.endSN:Math.min(r.endSN,t.endSN))-t.startSN,d=t.startSN-r.startSN,f=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,c=r.fragmentHint?r.fragments.concat(r.fragmentHint):r.fragments,o=l;o<=E;o++){var T=c[d+o],L=f[o];s&&!L&&o<s&&(L=t.fragments[o]=T),T&&L&&e(T,L)}}function i(r,t){var e=t.startSN+t.skippedSegments-r.startSN,s=r.fragments;e<0||e>=s.length||a(t,s[e].start)}function a(r,t){if(t){for(var e=r.fragments,s=r.skippedSegments;s<e.length;s++)e[s].start+=t;r.fragmentHint&&(r.fragmentHint.start+=t)}}function n(r,t){var e=1e3*r.levelTargetDuration,s=e/2,l=r.age,E=l>0&&l<e*3,d=t.loading.end-t.loading.start,f,c=r.availabilityDelay;if(r.updated===!1)if(E){var o=333*r.misses;f=Math.max(Math.min(s,d*2),o),r.availabilityDelay=(r.availabilityDelay||0)+f}else f=s;else E?(c=Math.min(c||e/2,l),r.availabilityDelay=c,f=c+e-l):f=e-d;return Math.round(f)}function u(r,t,e){if(!r||!r.details)return null;var s=r.details,l=s.fragments[t-s.startSN];return l||(l=s.fragmentHint,l&&l.sn===t)?l:t<s.startSN&&e&&e.sn===t?e:null}function p(r,t,e){if(!r||!r.details)return null;var s=r.details.partList;if(s)for(var l=s.length;l--;){var E=s[l];if(E.index===e&&E.fragment.sn===t)return E}return null}},"./src/controller/stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>p});var w=x("./src/polyfills/number.ts"),_=x("./src/controller/base-stream-controller.ts"),D=x("./src/is-supported.ts"),h=x("./src/events.ts"),k=x("./src/utils/buffer-helper.ts"),S=x("./src/controller/fragment-tracker.ts"),v=x("./src/types/loader.ts"),b=x("./src/loader/fragment.ts"),m=x("./src/demux/transmuxer-interface.ts"),g=x("./src/types/transmuxer.ts"),A=x("./src/controller/gap-controller.ts"),y=x("./src/errors.ts");function C(r,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}function i(r,t,e){return t&&C(r.prototype,t),e&&C(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function a(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,n(r,t)}function n(r,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,l){return s.__proto__=l,s},n(r,t)}var u=100,p=function(r){a(t,r);function t(s,l){var E;return E=r.call(this,s,l,"[stream-controller]")||this,E.audioCodecSwap=!1,E.gapController=null,E.level=-1,E._forceStartLoad=!1,E.altAudio=!1,E.audioOnly=!1,E.fragPlaying=null,E.onvplaying=null,E.onvseeked=null,E.fragLastKbps=0,E.couldBacktrack=!1,E.backtrackFragment=null,E.audioCodecSwitch=!1,E.videoBuffer=null,E._registerListeners(),E}var e=t.prototype;return e._registerListeners=function(){var l=this.hls;l.on(h.Events.MEDIA_ATTACHED,this.onMediaAttached,this),l.on(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),l.on(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),l.on(h.Events.MANIFEST_PARSED,this.onManifestParsed,this),l.on(h.Events.LEVEL_LOADING,this.onLevelLoading,this),l.on(h.Events.LEVEL_LOADED,this.onLevelLoaded,this),l.on(h.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),l.on(h.Events.ERROR,this.onError,this),l.on(h.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),l.on(h.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),l.on(h.Events.BUFFER_CREATED,this.onBufferCreated,this),l.on(h.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),l.on(h.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),l.on(h.Events.FRAG_BUFFERED,this.onFragBuffered,this)},e._unregisterListeners=function(){var l=this.hls;l.off(h.Events.MEDIA_ATTACHED,this.onMediaAttached,this),l.off(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),l.off(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),l.off(h.Events.MANIFEST_PARSED,this.onManifestParsed,this),l.off(h.Events.LEVEL_LOADED,this.onLevelLoaded,this),l.off(h.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),l.off(h.Events.ERROR,this.onError,this),l.off(h.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),l.off(h.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),l.off(h.Events.BUFFER_CREATED,this.onBufferCreated,this),l.off(h.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),l.off(h.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),l.off(h.Events.FRAG_BUFFERED,this.onFragBuffered,this)},e.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},e.startLoad=function(l){if(this.levels){var E=this.lastCurrentTime,d=this.hls;if(this.stopLoad(),this.setInterval(u),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var f=d.startLevel;f===-1&&(d.config.testBandwidth&&this.levels.length>1?(f=0,this.bitrateTest=!0):f=d.nextAutoLevel),this.level=d.nextLoadLevel=f,this.loadedmetadata=!1}E>0&&l===-1&&(this.log("Override startPosition with lastCurrentTime @"+E.toFixed(3)),l=E),this.state=_.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=l,this.tick()}else this._forceStartLoad=!0,this.state=_.State.STOPPED},e.stopLoad=function(){this._forceStartLoad=!1,r.prototype.stopLoad.call(this)},e.doTick=function(){switch(this.state){case _.State.IDLE:this.doTickIdle();break;case _.State.WAITING_LEVEL:{var l,E=this.levels,d=this.level,f=E==null||(l=E[d])===null||l===void 0?void 0:l.details;if(f&&(!f.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(f))break;this.state=_.State.IDLE;break}break}case _.State.FRAG_LOADING_WAITING_RETRY:{var c,o=self.performance.now(),T=this.retryDate;(!T||o>=T||(c=this.media)!==null&&c!==void 0&&c.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.level),this.state=_.State.IDLE)}break}this.onTickEnd()},e.onTickEnd=function(){r.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},e.doTickIdle=function(){var l,E,d=this.hls,f=this.levelLastLoaded,c=this.levels,o=this.media,T=d.config,L=d.nextLoadLevel;if(!(f===null||!o&&(this.startFragRequested||!T.startFragPrefetch))&&!(this.altAudio&&this.audioOnly)&&!(!c||!c[L])){var R=c[L];this.level=d.nextLoadLevel=L;var B=R.details;if(!B||this.state===_.State.WAITING_LEVEL||B.live&&this.levelLastLoaded!==L){this.state=_.State.WAITING_LEVEL;return}var O=this.getMainFwdBufferInfo();if(O!==null){var K=O.len,G=this.getMaxBufferLength(R.maxBitrate);if(!(K>=G)){if(this._streamEnded(O,B)){var z={};this.altAudio&&(z.type="video"),this.hls.trigger(h.Events.BUFFER_EOS,z),this.state=_.State.ENDED;return}this.backtrackFragment&&this.backtrackFragment.start>O.end&&(this.backtrackFragment=null);var Y=this.backtrackFragment?this.backtrackFragment.start:O.end,V=this.getNextFragment(Y,B);if(this.couldBacktrack&&!this.fragPrevious&&V&&V.sn!=="initSegment"&&this.fragmentTracker.getState(V)!==S.FragmentState.OK){var X,Z=((X=this.backtrackFragment)!=null?X:V).sn,$=Z-B.startSN,ee=B.fragments[$-1];ee&&V.cc===ee.cc&&(V=ee,this.fragmentTracker.removeFragment(ee))}else this.backtrackFragment&&O.len&&(this.backtrackFragment=null);if(V&&this.fragmentTracker.getState(V)===S.FragmentState.OK&&this.nextLoadPosition>Y){var ae=this.audioOnly&&!this.altAudio?b.ElementaryStreamTypes.AUDIO:b.ElementaryStreamTypes.VIDEO;o&&this.afterBufferFlushed(o,ae,v.PlaylistLevelType.MAIN),V=this.getNextFragment(this.nextLoadPosition,B)}!V||(V.initSegment&&!V.initSegment.data&&!this.bitrateTest&&(V=V.initSegment),((l=V.decryptdata)===null||l===void 0?void 0:l.keyFormat)==="identity"&&!((E=V.decryptdata)!==null&&E!==void 0&&E.key)?this.loadKey(V,B):this.loadFragment(V,B,Y))}}}},e.loadFragment=function(l,E,d){var f,c=this.fragmentTracker.getState(l);this.fragCurrent=l,c===S.FragmentState.NOT_LOADED?l.sn==="initSegment"?this._loadInitSegment(l):this.bitrateTest?(this.log("Fragment "+l.sn+" of level "+l.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(l)):(this.startFragRequested=!0,r.prototype.loadFragment.call(this,l,E,d)):c===S.FragmentState.APPENDING?this.reduceMaxBufferLength(l.duration)&&this.fragmentTracker.removeFragment(l):((f=this.media)===null||f===void 0?void 0:f.buffered.length)===0&&this.fragmentTracker.removeAllFragments()},e.getAppendedFrag=function(l){var E=this.fragmentTracker.getAppendedFrag(l,v.PlaylistLevelType.MAIN);return E&&"fragment"in E?E.fragment:E},e.getBufferedFrag=function(l){return this.fragmentTracker.getBufferedFrag(l,v.PlaylistLevelType.MAIN)},e.followingBufferedFrag=function(l){return l?this.getBufferedFrag(l.end+.5):null},e.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},e.nextLevelSwitch=function(){var l=this.levels,E=this.media;if(E!=null&&E.readyState){var d,f=this.getAppendedFrag(E.currentTime);if(f&&f.start>1&&this.flushMainBuffer(0,f.start-1),!E.paused&&l){var c=this.hls.nextLoadLevel,o=l[c],T=this.fragLastKbps;T&&this.fragCurrent?d=this.fragCurrent.duration*o.maxBitrate/(1e3*T)+1:d=0}else d=0;var L=this.getBufferedFrag(E.currentTime+d);if(L){var R=this.followingBufferedFrag(L);if(R){this.abortCurrentFrag();var B=R.maxStartPTS?R.maxStartPTS:R.start,O=R.duration,K=Math.max(L.end,B+Math.min(Math.max(O-this.config.maxFragLookUpTolerance,O*.5),O*.75));this.flushMainBuffer(K,Number.POSITIVE_INFINITY)}}}},e.abortCurrentFrag=function(){var l=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,l!=null&&l.loader&&l.loader.abort(),this.state){case _.State.KEY_LOADING:case _.State.FRAG_LOADING:case _.State.FRAG_LOADING_WAITING_RETRY:case _.State.PARSING:case _.State.PARSED:this.state=_.State.IDLE;break}this.nextLoadPosition=this.getLoadPosition()},e.flushMainBuffer=function(l,E){r.prototype.flushMainBuffer.call(this,l,E,this.altAudio?"video":null)},e.onMediaAttached=function(l,E){r.prototype.onMediaAttached.call(this,l,E);var d=E.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),d.addEventListener("playing",this.onvplaying),d.addEventListener("seeked",this.onvseeked),this.gapController=new A.default(this.config,d,this.fragmentTracker,this.hls)},e.onMediaDetaching=function(){var l=this.media;l&&this.onvplaying&&this.onvseeked&&(l.removeEventListener("playing",this.onvplaying),l.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),r.prototype.onMediaDetaching.call(this)},e.onMediaPlaying=function(){this.tick()},e.onMediaSeeked=function(){var l=this.media,E=l?l.currentTime:null;(0,w.isFiniteNumber)(E)&&this.log("Media seeked to "+E.toFixed(3)),this.tick()},e.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(h.Events.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null,this.backtrackFragment=null},e.onManifestParsed=function(l,E){var d=!1,f=!1,c;E.levels.forEach(function(o){c=o.audioCodec,c&&(c.indexOf("mp4a.40.2")!==-1&&(d=!0),c.indexOf("mp4a.40.5")!==-1&&(f=!0))}),this.audioCodecSwitch=d&&f&&!(0,D.changeTypeSupported)(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=E.levels,this.startFragRequested=!1},e.onLevelLoading=function(l,E){var d=this.levels;if(!(!d||this.state!==_.State.IDLE)){var f=d[E.level];(!f.details||f.details.live&&this.levelLastLoaded!==E.level||this.waitForCdnTuneIn(f.details))&&(this.state=_.State.WAITING_LEVEL)}},e.onLevelLoaded=function(l,E){var d,f=this.levels,c=E.level,o=E.details,T=o.totalduration;if(!f){this.warn("Levels were reset while loading level "+c);return}this.log("Level "+c+" loaded ["+o.startSN+","+o.endSN+"], cc ["+o.startCC+", "+o.endCC+"] duration:"+T);var L=this.fragCurrent;L&&(this.state===_.State.FRAG_LOADING||this.state===_.State.FRAG_LOADING_WAITING_RETRY)&&L.level!==E.level&&L.loader&&(this.state=_.State.IDLE,this.backtrackFragment=null,L.loader.abort());var R=f[c],B=0;if(o.live||(d=R.details)!==null&&d!==void 0&&d.live){if(o.fragments[0]||(o.deltaUpdateFailed=!0),o.deltaUpdateFailed)return;B=this.alignPlaylists(o,R.details)}if(R.details=o,this.levelLastLoaded=c,this.hls.trigger(h.Events.LEVEL_UPDATED,{details:o,level:c}),this.state===_.State.WAITING_LEVEL){if(this.waitForCdnTuneIn(o))return;this.state=_.State.IDLE}this.startFragRequested?o.live&&this.synchronizeToLiveEdge(o):this.setStartPosition(o,B),this.tick()},e._handleFragmentLoadProgress=function(l){var E,d=l.frag,f=l.part,c=l.payload,o=this.levels;if(!o){this.warn("Levels were reset while fragment load was in progress. Fragment "+d.sn+" of level "+d.level+" will not be buffered");return}var T=o[d.level],L=T.details;if(!L){this.warn("Dropping fragment "+d.sn+" of level "+d.level+" after level details were reset");return}var R=T.videoCodec,B=L.PTSKnown||!L.live,O=(E=d.initSegment)===null||E===void 0?void 0:E.data,K=this._getAudioCodec(T),G=this.transmuxer=this.transmuxer||new m.default(this.hls,v.PlaylistLevelType.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),z=f?f.index:-1,Y=z!==-1,V=new g.ChunkMetadata(d.level,d.sn,d.stats.chunkCount,c.byteLength,z,Y),X=this.initPTS[d.cc];G.push(c,O,K,R,d,f,L.totalduration,B,V,X)},e.onAudioTrackSwitching=function(l,E){var d=this.altAudio,f=!!E.url,c=E.id;if(!f){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var o=this.fragCurrent;o!=null&&o.loader&&(this.log("Switching to main audio track, cancel main fragment load"),o.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var T=this.hls;d&&T.trigger(h.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),T.trigger(h.Events.AUDIO_TRACK_SWITCHED,{id:c})}},e.onAudioTrackSwitched=function(l,E){var d=E.id,f=!!this.hls.audioTracks[d].url;if(f){var c=this.videoBuffer;c&&this.mediaBuffer!==c&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=c)}this.altAudio=f,this.tick()},e.onBufferCreated=function(l,E){var d=E.tracks,f,c,o=!1;for(var T in d){var L=d[T];if(L.id==="main"){if(c=T,f=L,T==="video"){var R=d[T];R&&(this.videoBuffer=R.buffer)}}else o=!0}o&&f?(this.log("Alternate track found, use "+c+".buffered to schedule main fragment loading"),this.mediaBuffer=f.buffer):this.mediaBuffer=this.media},e.onFragBuffered=function(l,E){var d=E.frag,f=E.part;if(!(d&&d.type!==v.PlaylistLevelType.MAIN)){if(this.fragContextChanged(d)){this.warn("Fragment "+d.sn+(f?" p: "+f.index:"")+" of level "+d.level+" finished buffering, but was aborted. state: "+this.state),this.state===_.State.PARSED&&(this.state=_.State.IDLE);return}var c=f?f.stats:d.stats;this.fragLastKbps=Math.round(8*c.total/(c.buffering.end-c.loading.first)),d.sn!=="initSegment"&&(this.fragPrevious=d),this.fragBufferedComplete(d,f)}},e.onError=function(l,E){switch(E.details){case y.ErrorDetails.FRAG_LOAD_ERROR:case y.ErrorDetails.FRAG_LOAD_TIMEOUT:case y.ErrorDetails.KEY_LOAD_ERROR:case y.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(v.PlaylistLevelType.MAIN,E);break;case y.ErrorDetails.LEVEL_LOAD_ERROR:case y.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==_.State.ERROR&&(E.fatal?(this.warn(""+E.details),this.state=_.State.ERROR):!E.levelRetry&&this.state===_.State.WAITING_LEVEL&&(this.state=_.State.IDLE));break;case y.ErrorDetails.BUFFER_FULL_ERROR:if(E.parent==="main"&&(this.state===_.State.PARSING||this.state===_.State.PARSED)){var d=!0,f=this.getFwdBufferInfo(this.media,v.PlaylistLevelType.MAIN);f&&f.len>.5&&(d=!this.reduceMaxBufferLength(f.len)),d&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}break}},e.checkBuffer=function(){var l=this.media,E=this.gapController;if(!(!l||!E||!l.readyState)){if(this.loadedmetadata||!k.BufferHelper.getBuffered(l).length){var d=this.state!==_.State.IDLE?this.fragCurrent:null;E.poll(this.lastCurrentTime,d)}this.lastCurrentTime=l.currentTime}},e.onFragLoadEmergencyAborted=function(){this.state=_.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},e.onBufferFlushed=function(l,E){var d=E.type;if(d!==b.ElementaryStreamTypes.AUDIO||this.audioOnly&&!this.altAudio){var f=(d===b.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(f,d,v.PlaylistLevelType.MAIN)}},e.onLevelsUpdated=function(l,E){this.levels=E.levels},e.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},e.seekToStartPos=function(){var l=this.media;if(!!l){var E=l.currentTime,d=this.startPosition;if(d>=0&&E<d){if(l.seeking){this.log("could not seek to "+d+", already seeking at "+E);return}var f=k.BufferHelper.getBuffered(l),c=f.length?f.start(0):0,o=c-d;o>0&&(o<this.config.maxBufferHole||o<this.config.maxFragLookUpTolerance)&&(this.log("adjusting start position by "+o+" to match buffer start"),d+=o,this.startPosition=d),this.log("seek to target start position "+d+" from current time "+E),l.currentTime=d}}},e._getAudioCodec=function(l){var E=this.config.defaultAudioCodec||l.audioCodec;return this.audioCodecSwap&&E&&(this.log("Swapping audio codec"),E.indexOf("mp4a.40.5")!==-1?E="mp4a.40.2":E="mp4a.40.5"),E},e._loadBitrateTestFrag=function(l){var E=this;l.bitrateTest=!0,this._doFragLoad(l).then(function(d){var f=E.hls;if(!(!d||f.nextLoadLevel||E.fragContextChanged(l))){E.fragLoadError=0,E.state=_.State.IDLE,E.startFragRequested=!1,E.bitrateTest=!1;var c=l.stats;c.parsing.start=c.parsing.end=c.buffering.start=c.buffering.end=self.performance.now(),f.trigger(h.Events.FRAG_LOADED,d),l.bitrateTest=!1}})},e._handleTransmuxComplete=function(l){var E,d="main",f=this.hls,c=l.remuxResult,o=l.chunkMeta,T=this.getCurrentContext(o);if(!T){this.warn("The loading context changed while buffering fragment "+o.sn+" of level "+o.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(o.level);return}var L=T.frag,R=T.part,B=T.level,O=c.video,K=c.text,G=c.id3,z=c.initSegment,Y=B.details,V=this.altAudio?void 0:c.audio;if(!this.fragContextChanged(L)){if(this.state=_.State.PARSING,z){z.tracks&&(this._bufferInitSegment(B,z.tracks,L,o),f.trigger(h.Events.FRAG_PARSING_INIT_SEGMENT,{frag:L,id:d,tracks:z.tracks}));var X=z.initPTS,Z=z.timescale;(0,w.isFiniteNumber)(X)&&(this.initPTS[L.cc]=X,f.trigger(h.Events.INIT_PTS_FOUND,{frag:L,id:d,initPTS:X,timescale:Z}))}if(O&&c.independent!==!1){if(Y){var $=O.startPTS,ee=O.endPTS,ae=O.startDTS,ne=O.endDTS;if(R)R.elementaryStreams[O.type]={startPTS:$,endPTS:ee,startDTS:ae,endDTS:ne};else if(O.firstKeyFrame&&O.independent&&(this.couldBacktrack=!0),O.dropped&&O.independent){var oe=this.getMainFwdBufferInfo(),se=(oe?oe.end:this.getLoadPosition())+this.config.maxBufferHole,te=O.firstKeyFramePTS?O.firstKeyFramePTS:$;if(se<te-this.config.maxBufferHole){this.backtrack(L);return}L.setElementaryStreamInfo(O.type,L.start,ee,L.start,ne,!0)}L.setElementaryStreamInfo(O.type,$,ee,ae,ne),this.backtrackFragment&&(this.backtrackFragment=L),this.bufferFragmentData(O,L,R,o)}}else if(c.independent===!1){this.backtrack(L);return}if(V){var ie=V.startPTS,ue=V.endPTS,de=V.startDTS,ce=V.endDTS;R&&(R.elementaryStreams[b.ElementaryStreamTypes.AUDIO]={startPTS:ie,endPTS:ue,startDTS:de,endDTS:ce}),L.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO,ie,ue,de,ce),this.bufferFragmentData(V,L,R,o)}if(Y&&G!==null&&G!==void 0&&(E=G.samples)!==null&&E!==void 0&&E.length){var be={id:d,frag:L,details:Y,samples:G.samples};f.trigger(h.Events.FRAG_PARSING_METADATA,be)}if(Y&&K){var he={id:d,frag:L,details:Y,samples:K.samples};f.trigger(h.Events.FRAG_PARSING_USERDATA,he)}}},e._bufferInitSegment=function(l,E,d,f){var c=this;if(this.state===_.State.PARSING){this.audioOnly=!!E.audio&&!E.video,this.altAudio&&!this.audioOnly&&delete E.audio;var o=E.audio,T=E.video,L=E.audiovideo;if(o){var R=l.audioCodec,B=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(R&&(R.indexOf("mp4a.40.5")!==-1?R="mp4a.40.2":R="mp4a.40.5"),o.metadata.channelCount!==1&&B.indexOf("firefox")===-1&&(R="mp4a.40.5")),B.indexOf("android")!==-1&&o.container!=="audio/mpeg"&&(R="mp4a.40.2",this.log("Android: force audio codec to "+R)),l.audioCodec&&l.audioCodec!==R&&this.log('Swapping manifest audio codec "'+l.audioCodec+'" for "'+R+'"'),o.levelCodec=R,o.id="main",this.log("Init audio buffer, container:"+o.container+", codecs[selected/level/parsed]=["+(R||"")+"/"+(l.audioCodec||"")+"/"+o.codec+"]")}T&&(T.levelCodec=l.videoCodec,T.id="main",this.log("Init video buffer, container:"+T.container+", codecs[level/parsed]=["+(l.videoCodec||"")+"/"+T.codec+"]")),L&&this.log("Init audiovideo buffer, container:"+L.container+", codecs[level/parsed]=["+(l.attrs.CODECS||"")+"/"+L.codec+"]"),this.hls.trigger(h.Events.BUFFER_CODECS,E),Object.keys(E).forEach(function(O){var K=E[O],G=K.initSegment;G!=null&&G.byteLength&&c.hls.trigger(h.Events.BUFFER_APPENDING,{type:O,data:G,frag:d,part:null,chunkMeta:f,parent:d.type})}),this.tick()}},e.getMainFwdBufferInfo=function(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,v.PlaylistLevelType.MAIN)},e.backtrack=function(l){this.couldBacktrack=!0,this.backtrackFragment=l,this.resetTransmuxer(),this.flushBufferGap(l),this.fragmentTracker.removeFragment(l),this.fragPrevious=null,this.nextLoadPosition=l.start,this.state=_.State.IDLE},e.checkFragmentChanged=function(){var l=this.media,E=null;if(l&&l.readyState>1&&l.seeking===!1){var d=l.currentTime;if(k.BufferHelper.isBuffered(l,d)?E=this.getAppendedFrag(d):k.BufferHelper.isBuffered(l,d+.1)&&(E=this.getAppendedFrag(d+.1)),E){this.backtrackFragment=null;var f=this.fragPlaying,c=E.level;(!f||E.sn!==f.sn||f.level!==c||E.urlId!==f.urlId)&&(this.hls.trigger(h.Events.FRAG_CHANGED,{frag:E}),(!f||f.level!==c)&&this.hls.trigger(h.Events.LEVEL_SWITCHED,{level:c}),this.fragPlaying=E)}}},i(t,[{key:"nextLevel",get:function(){var l=this.nextBufferedFrag;return l?l.level:-1}},{key:"currentFrag",get:function(){var l=this.media;return l?this.fragPlaying||this.getAppendedFrag(l.currentTime):null}},{key:"currentProgramDateTime",get:function(){var l=this.media;if(l){var E=l.currentTime,d=this.currentFrag;if(d&&(0,w.isFiniteNumber)(E)&&(0,w.isFiniteNumber)(d.programDateTime)){var f=d.programDateTime+(E-d.start)*1e3;return new Date(f)}}return null}},{key:"currentLevel",get:function(){var l=this.currentFrag;return l?l.level:-1}},{key:"nextBufferedFrag",get:function(){var l=this.currentFrag;return l?this.followingBufferedFrag(l):null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),t}(_.default)},"./src/controller/subtitle-stream-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{SubtitleStreamController:()=>a});var w=x("./src/events.ts"),_=x("./src/utils/buffer-helper.ts"),D=x("./src/controller/fragment-finders.ts"),h=x("./src/utils/discontinuities.ts"),k=x("./src/controller/level-helper.ts"),S=x("./src/controller/fragment-tracker.ts"),v=x("./src/controller/base-stream-controller.ts"),b=x("./src/types/loader.ts"),m=x("./src/types/level.ts");function g(u,p){for(var r=0;r<p.length;r++){var t=p[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(u,t.key,t)}}function A(u,p,r){return p&&g(u.prototype,p),r&&g(u,r),Object.defineProperty(u,"prototype",{writable:!1}),u}function y(u,p){u.prototype=Object.create(p.prototype),u.prototype.constructor=u,C(u,p)}function C(u,p){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(u,p)}var i=500,a=function(u){y(p,u);function p(t,e){var s;return s=u.call(this,t,e,"[subtitle-stream-controller]")||this,s.levels=[],s.currentTrackId=-1,s.tracksBuffered=[],s.mainDetails=null,s._registerListeners(),s}var r=p.prototype;return r.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},r._registerListeners=function(){var e=this.hls;e.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.Events.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.Events.ERROR,this.onError,this),e.on(w.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(w.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(w.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(w.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},r._unregisterListeners=function(){var e=this.hls;e.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.Events.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.Events.ERROR,this.onError,this),e.off(w.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(w.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(w.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(w.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},r.startLoad=function(){this.stopLoad(),this.state=v.State.IDLE,this.setInterval(i),this.tick()},r.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},r.onLevelLoaded=function(e,s){this.mainDetails=s.details},r.onSubtitleFragProcessed=function(e,s){var l=s.frag,E=s.success;if(this.fragPrevious=l,this.state=v.State.IDLE,!!E){var d=this.tracksBuffered[this.currentTrackId];if(!!d){for(var f,c=l.start,o=0;o<d.length;o++)if(c>=d[o].start&&c<=d[o].end){f=d[o];break}var T=l.start+l.duration;f?f.end=T:(f={start:c,end:T},d.push(f)),this.fragmentTracker.fragBuffered(l)}}},r.onBufferFlushing=function(e,s){var l=s.startOffset,E=s.endOffset;if(l===0&&E!==Number.POSITIVE_INFINITY){var d=this.currentTrackId,f=this.levels;if(!f.length||!f[d]||!f[d].details)return;var c=f[d].details,o=c.targetduration,T=E-o;if(T<=0)return;s.endOffsetSubtitles=Math.max(0,T),this.tracksBuffered.forEach(function(L){for(var R=0;R<L.length;){if(L[R].end<=T){L.shift();continue}else if(L[R].start<T)L[R].start=T;else break;R++}}),this.fragmentTracker.removeFragmentsInRange(l,T,b.PlaylistLevelType.SUBTITLE)}},r.onError=function(e,s){var l,E=s.frag;!E||E.type!==b.PlaylistLevelType.SUBTITLE||((l=this.fragCurrent)!==null&&l!==void 0&&l.loader&&this.fragCurrent.loader.abort(),this.state=v.State.IDLE)},r.onSubtitleTracksUpdated=function(e,s){var l=this,E=s.subtitleTracks;this.tracksBuffered=[],this.levels=E.map(function(d){return new m.Level(d)}),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach(function(d){l.tracksBuffered[d.id]=[]}),this.mediaBuffer=null},r.onSubtitleTrackSwitch=function(e,s){if(this.currentTrackId=s.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}var l=this.levels[this.currentTrackId];l!=null&&l.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,l&&this.setInterval(i)},r.onSubtitleTrackLoaded=function(e,s){var l,E=s.details,d=s.id,f=this.currentTrackId,c=this.levels;if(!!c.length){var o=c[f];if(!(d>=c.length||d!==f||!o)){if(this.mediaBuffer=this.mediaBufferTimeRanges,E.live||(l=o.details)!==null&&l!==void 0&&l.live){var T=this.mainDetails;if(E.deltaUpdateFailed||!T)return;var L=T.fragments[0];if(!o.details)E.hasProgramDateTime&&T.hasProgramDateTime?(0,h.alignMediaPlaylistByPDT)(E,T):L&&(0,k.addSliding)(E,L.start);else{var R=this.alignPlaylists(E,o.details);R===0&&L&&(0,k.addSliding)(E,L.start)}}if(o.details=E,this.levelLastLoaded=d,this.tick(),E.live&&!this.fragCurrent&&this.media&&this.state===v.State.IDLE){var B=(0,D.findFragmentByPTS)(null,E.fragments,this.media.currentTime,0);B||(this.warn("Subtitle playlist not aligned with playback"),o.details=void 0)}}}},r._handleFragmentLoadComplete=function(e){var s=e.frag,l=e.payload,E=s.decryptdata,d=this.hls;if(!this.fragContextChanged(s)&&l&&l.byteLength>0&&E&&E.key&&E.iv&&E.method==="AES-128"){var f=performance.now();this.decrypter.webCryptoDecrypt(new Uint8Array(l),E.key.buffer,E.iv.buffer).then(function(c){var o=performance.now();d.trigger(w.Events.FRAG_DECRYPTED,{frag:s,payload:c,stats:{tstart:f,tdecrypt:o}})})}},r.doTick=function(){if(!this.media){this.state=v.State.IDLE;return}if(this.state===v.State.IDLE){var e=this.currentTrackId,s=this.levels;if(!s.length||!s[e]||!s[e].details)return;var l=s[e].details,E=l.targetduration,d=this.config,f=this.media,c=_.BufferHelper.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],f.currentTime-E,d.maxBufferHole),o=c.end,T=c.len,L=this.getMaxBufferLength()+E;if(T>L)return;console.assert(l,"Subtitle track details are defined on idle subtitle stream controller tick");var R=l.fragments,B=R.length,O=l.edge,K,G=this.fragPrevious;if(o<O){var z=d.maxFragLookUpTolerance;K=(0,D.findFragmentByPTS)(G,R,Math.max(R[0].start,o),z),!K&&G&&G.start<R[0].start&&(K=R[0])}else K=R[B-1];if(K=this.mapToInitFragWhenRequired(K),!K||this.fragmentTracker.getState(K)!==S.FragmentState.NOT_LOADED)return;K.encrypted?this.loadKey(K,l):this.loadFragment(K,l,o)}},r.loadFragment=function(e,s,l){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e):u.prototype.loadFragment.call(this,e,s,l)},A(p,[{key:"mediaBufferTimeRanges",get:function(){return new n(this.tracksBuffered[this.currentTrackId]||[])}}]),p}(v.default),n=function(p){this.buffered=void 0;var r=function(e,s,l){if(s=s>>>0,s>l-1)throw new DOMException("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+s+") is greater than the maximum bound ("+l+")");return p[s][e]};this.buffered={get length(){return p.length},end:function(e){return r("end",e,p.length)},start:function(e){return r("start",e,p.length)}}}},"./src/controller/subtitle-track-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>A});var w=x("./src/events.ts"),_=x("./src/utils/texttrack-utils.ts"),D=x("./src/controller/base-playlist-controller.ts"),h=x("./src/types/loader.ts");function k(y,C){for(var i=0;i<C.length;i++){var a=C[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(y,a.key,a)}}function S(y,C,i){return C&&k(y.prototype,C),i&&k(y,i),Object.defineProperty(y,"prototype",{writable:!1}),y}function v(y,C){y.prototype=Object.create(C.prototype),y.prototype.constructor=y,b(y,C)}function b(y,C){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},b(y,C)}var m=function(y){v(C,y);function C(a){var n;return n=y.call(this,a,"[subtitle-track-controller]")||this,n.media=null,n.tracks=[],n.groupId=null,n.tracksInGroup=[],n.trackId=-1,n.selectDefaultTrack=!0,n.queuedDefaultTrack=-1,n.trackChangeListener=function(){return n.onTextTracksChanged()},n.asyncPollTrackChange=function(){return n.pollTrackChange(0)},n.useTextTrackPolling=!1,n.subtitlePollingInterval=-1,n._subtitleDisplay=!0,n.registerListeners(),n}var i=C.prototype;return i.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,y.prototype.destroy.call(this)},i.registerListeners=function(){var n=this.hls;n.on(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),n.on(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),n.on(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.on(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),n.on(w.Events.LEVEL_LOADING,this.onLevelLoading,this),n.on(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),n.on(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),n.on(w.Events.ERROR,this.onError,this)},i.unregisterListeners=function(){var n=this.hls;n.off(w.Events.MEDIA_ATTACHED,this.onMediaAttached,this),n.off(w.Events.MEDIA_DETACHING,this.onMediaDetaching,this),n.off(w.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.off(w.Events.MANIFEST_PARSED,this.onManifestParsed,this),n.off(w.Events.LEVEL_LOADING,this.onLevelLoading,this),n.off(w.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),n.off(w.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),n.off(w.Events.ERROR,this.onError,this)},i.onMediaAttached=function(n,u){this.media=u.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},i.pollTrackChange=function(n){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,n)},i.onMediaDetaching=function(){if(!!this.media){self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId);var n=g(this.media.textTracks);n.forEach(function(u){(0,_.clearCurrentCues)(u)}),this.subtitleTrack=-1,this.media=null}},i.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},i.onManifestParsed=function(n,u){this.tracks=u.subtitleTracks},i.onSubtitleTrackLoaded=function(n,u){var p=u.id,r=u.details,t=this.trackId,e=this.tracksInGroup[t];if(!e){this.warn("Invalid subtitle track id "+p);return}var s=e.details;e.details=u.details,this.log("subtitle track "+p+" loaded ["+r.startSN+"-"+r.endSN+"]"),p===this.trackId&&(this.retryCount=0,this.playlistLoaded(p,u,s))},i.onLevelLoading=function(n,u){this.switchLevel(u.level)},i.onLevelSwitching=function(n,u){this.switchLevel(u.level)},i.switchLevel=function(n){var u=this.hls.levels[n];if(!!(u!=null&&u.textGroupIds)){var p=u.textGroupIds[u.urlId];if(this.groupId!==p){var r=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,t=this.tracks.filter(function(l){return!p||l.groupId===p});this.tracksInGroup=t;var e=this.findTrackId(r==null?void 0:r.name)||this.findTrackId();this.groupId=p;var s={subtitleTracks:t};this.log("Updating subtitle tracks, "+t.length+' track(s) found in "'+p+'" group-id'),this.hls.trigger(w.Events.SUBTITLE_TRACKS_UPDATED,s),e!==-1&&this.setSubtitleTrack(e,r)}}},i.findTrackId=function(n){for(var u=this.tracksInGroup,p=0;p<u.length;p++){var r=u[p];if((!this.selectDefaultTrack||r.default)&&(!n||n===r.name))return r.id}return-1},i.onError=function(n,u){y.prototype.onError.call(this,n,u),!(u.fatal||!u.context)&&u.context.type===h.PlaylistContextType.SUBTITLE_TRACK&&u.context.id===this.trackId&&u.context.groupId===this.groupId&&this.retryLoadingOrFail(u)},i.loadPlaylist=function(n){var u=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(u)){var p=u.id,r=u.groupId,t=u.url;if(n)try{t=n.addDirectives(t)}catch(e){this.warn("Could not construct new URL with HLS Delivery Directives: "+e)}this.log("Loading subtitle playlist for id "+p),this.hls.trigger(w.Events.SUBTITLE_TRACK_LOADING,{url:t,id:p,groupId:r,deliveryDirectives:n||null})}},i.toggleTrackModes=function(n){var u=this,p=this.media,r=this.trackId;if(!!p){var t=g(p.textTracks),e=t.filter(function(E){return E.groupId===u.groupId});if(n===-1)[].slice.call(t).forEach(function(E){E.mode="disabled"});else{var s=e[r];s&&(s.mode="disabled")}var l=e[n];l&&(l.mode=this.subtitleDisplay?"showing":"hidden")}},i.setSubtitleTrack=function(n,u){var p,r=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=n;return}if(this.trackId!==n&&this.toggleTrackModes(n),!(this.trackId===n&&(n===-1||(p=r[n])!==null&&p!==void 0&&p.details)||n<-1||n>=r.length)){this.clearTimer();var t=r[n];if(this.log("Switching to subtitle track "+n),this.trackId=n,t){var e=t.id,s=t.groupId,l=s===void 0?"":s,E=t.name,d=t.type,f=t.url;this.hls.trigger(w.Events.SUBTITLE_TRACK_SWITCH,{id:e,groupId:l,name:E,type:d,url:f});var c=this.switchParams(t.url,u==null?void 0:u.details);this.loadPlaylist(c)}else this.hls.trigger(w.Events.SUBTITLE_TRACK_SWITCH,{id:n})}},i.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!(!this.media||!this.hls.config.renderTextTracksNatively)){for(var n=-1,u=g(this.media.textTracks),p=0;p<u.length;p++)if(u[p].mode==="hidden")n=p;else if(u[p].mode==="showing"){n=p;break}this.subtitleTrack!==n&&(this.subtitleTrack=n)}},S(C,[{key:"subtitleDisplay",get:function(){return this._subtitleDisplay},set:function(n){this._subtitleDisplay=n,this.trackId>-1&&this.toggleTrackModes(this.trackId)}},{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(n){this.selectDefaultTrack=!1;var u=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(n,u)}}]),C}(D.default);function g(y){for(var C=[],i=0;i<y.length;i++){var a=y[i];a.kind==="subtitles"&&a.label&&C.push(y[i])}return C}const A=m},"./src/controller/timeline-controller.ts":(W,M,x)=>{x.r(M),x.d(M,{TimelineController:()=>A});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/utils/cea-608-parser.ts"),h=x("./src/utils/output-filter.ts"),k=x("./src/utils/webvtt-parser.ts"),S=x("./src/utils/texttrack-utils.ts"),v=x("./src/utils/imsc1-ttml-parser.ts"),b=x("./src/utils/mp4-tools.ts"),m=x("./src/types/loader.ts"),g=x("./src/utils/logger.ts"),A=function(){function a(u){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=i(),this.captionsProperties=void 0,this.hls=u,this.config=u.config,this.Cues=u.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var p=new h.default(this,"textTrack1"),r=new h.default(this,"textTrack2"),t=new h.default(this,"textTrack3"),e=new h.default(this,"textTrack4");this.cea608Parser1=new D.default(1,p,r),this.cea608Parser2=new D.default(3,t,e)}u.on(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),u.on(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.on(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),u.on(_.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),u.on(_.Events.FRAG_LOADING,this.onFragLoading,this),u.on(_.Events.FRAG_LOADED,this.onFragLoaded,this),u.on(_.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),u.on(_.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),u.on(_.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),u.on(_.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),u.on(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)}var n=a.prototype;return n.destroy=function(){var p=this.hls;p.off(_.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),p.off(_.Events.MEDIA_DETACHING,this.onMediaDetaching,this),p.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),p.off(_.Events.MANIFEST_LOADED,this.onManifestLoaded,this),p.off(_.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),p.off(_.Events.FRAG_LOADING,this.onFragLoading,this),p.off(_.Events.FRAG_LOADED,this.onFragLoaded,this),p.off(_.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),p.off(_.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),p.off(_.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),p.off(_.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),p.off(_.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},n.addCues=function(p,r,t,e,s){for(var l=!1,E=s.length;E--;){var d=s[E],f=C(d[0],d[1],r,t);if(f>=0&&(d[0]=Math.min(d[0],r),d[1]=Math.max(d[1],t),l=!0,f/(t-r)>.5))return}if(l||s.push([r,t]),this.config.renderTextTracksNatively){var c=this.captionsTracks[p];this.Cues.newCue(c,r,t,e)}else{var o=this.Cues.newCue(null,r,t,e);this.hls.trigger(_.Events.CUES_PARSED,{type:"captions",cues:o,track:p})}},n.onInitPtsFound=function(p,r){var t=this,e=r.frag,s=r.id,l=r.initPTS,E=r.timescale,d=this.unparsedVttFrags;s==="main"&&(this.initPTS[e.cc]=l,this.timescale[e.cc]=E),d.length&&(this.unparsedVttFrags=[],d.forEach(function(f){t.onFragLoaded(_.Events.FRAG_LOADED,f)}))},n.getExistingTrack=function(p){var r=this.media;if(r)for(var t=0;t<r.textTracks.length;t++){var e=r.textTracks[t];if(e[p])return e}return null},n.createCaptionsTrack=function(p){this.config.renderTextTracksNatively?this.createNativeTrack(p):this.createNonNativeTrack(p)},n.createNativeTrack=function(p){if(!this.captionsTracks[p]){var r=this.captionsProperties,t=this.captionsTracks,e=this.media,s=r[p],l=s.label,E=s.languageCode,d=this.getExistingTrack(p);if(d)t[p]=d,(0,S.clearCurrentCues)(t[p]),(0,S.sendAddTrackEvent)(t[p],e);else{var f=this.createTextTrack("captions",l,E);f&&(f[p]=!0,t[p]=f)}}},n.createNonNativeTrack=function(p){if(!this.nonNativeCaptionsTracks[p]){var r=this.captionsProperties[p];if(!!r){var t=r.label,e={_id:p,label:t,kind:"captions",default:r.media?!!r.media.default:!1,closedCaptions:r.media};this.nonNativeCaptionsTracks[p]=e,this.hls.trigger(_.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[e]})}}},n.createTextTrack=function(p,r,t){var e=this.media;if(!!e)return e.addTextTrack(p,r,t)},n.onMediaAttaching=function(p,r){this.media=r.media,this._cleanTracks()},n.onMediaDetaching=function(){var p=this.captionsTracks;Object.keys(p).forEach(function(r){(0,S.clearCurrentCues)(p[r]),delete p[r]}),this.nonNativeCaptionsTracks={}},n.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=i(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},n._cleanTracks=function(){var p=this.media;if(!!p){var r=p.textTracks;if(r)for(var t=0;t<r.length;t++)(0,S.clearCurrentCues)(r[t])}},n.onSubtitleTracksUpdated=function(p,r){var t=this;this.textTracks=[];var e=r.subtitleTracks||[],s=e.some(function(f){return f.textCodec===v.IMSC1_CODEC});if(this.config.enableWebVTT||s&&this.config.enableIMSC1){var l=this.tracks&&e&&this.tracks.length===e.length;if(this.tracks=e||[],this.config.renderTextTracksNatively){var E=this.media?this.media.textTracks:[];this.tracks.forEach(function(f,c){var o;if(c<E.length){for(var T=null,L=0;L<E.length;L++)if(y(E[L],f)){T=E[L];break}T&&(o=T)}if(o)(0,S.clearCurrentCues)(o);else{var R=t._captionsOrSubtitlesFromCharacteristics(f);o=t.createTextTrack(R,f.name,f.lang),o&&(o.mode="disabled")}o&&(o.groupId=f.groupId,t.textTracks.push(o))})}else if(!l&&this.tracks&&this.tracks.length){var d=this.tracks.map(function(f){return{label:f.name,kind:f.type.toLowerCase(),default:f.default,subtitleTrack:f}});this.hls.trigger(_.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:d})}}},n._captionsOrSubtitlesFromCharacteristics=function(p){var r;if((r=p.attrs)!==null&&r!==void 0&&r.CHARACTERISTICS){var t=/transcribes-spoken-dialog/gi.test(p.attrs.CHARACTERISTICS),e=/describes-music-and-sound/gi.test(p.attrs.CHARACTERISTICS);if(t&&e)return"captions"}return"subtitles"},n.onManifestLoaded=function(p,r){var t=this;this.config.enableCEA708Captions&&r.captions&&r.captions.forEach(function(e){var s=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(!!s){var l="textTrack"+s[1],E=t.captionsProperties[l];!E||(E.label=e.name,e.lang&&(E.languageCode=e.lang),E.media=e)}})},n.closedCaptionsForLevel=function(p){var r=this.hls.levels[p.level];return r==null?void 0:r.attrs["CLOSED-CAPTIONS"]},n.onFragLoading=function(p,r){var t=this.cea608Parser1,e=this.cea608Parser2,s=this.lastSn,l=this.lastPartIndex;if(!(!this.enabled||!(t&&e))&&r.frag.type===m.PlaylistLevelType.MAIN){var E,d,f=r.frag.sn,c=(E=r==null||(d=r.part)===null||d===void 0?void 0:d.index)!=null?E:-1;f===s+1||f===s&&c===l+1||(t.reset(),e.reset()),this.lastSn=f,this.lastPartIndex=c}},n.onFragLoaded=function(p,r){var t=r.frag,e=r.payload,s=this.initPTS,l=this.unparsedVttFrags;if(t.type===m.PlaylistLevelType.SUBTITLE)if(e.byteLength){if(!(0,w.isFiniteNumber)(s[t.cc])){l.push(r),s.length&&this.hls.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:new Error("Missing initial subtitle PTS")});return}var E=t.decryptdata,d="stats"in r;if(E==null||E.key==null||E.method!=="AES-128"||d){var f=this.tracks[t.level],c=this.vttCCs;c[t.cc]||(c[t.cc]={start:t.start,prevCC:this.prevCC,new:!0},this.prevCC=t.cc),f&&f.textCodec===v.IMSC1_CODEC?this._parseIMSC1(t,e):this._parseVTTs(t,e,c)}}else this.hls.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:new Error("Empty subtitle payload")})},n._parseIMSC1=function(p,r){var t=this,e=this.hls;(0,v.parseIMSC1)(r,this.initPTS[p.cc],this.timescale[p.cc],function(s){t._appendCues(s,p.level),e.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:p})},function(s){g.logger.log("Failed to parse IMSC1: "+s),e.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:p,error:s})})},n._parseVTTs=function(p,r,t){var e,s=this,l=this.hls,E=(e=p.initSegment)!==null&&e!==void 0&&e.data?(0,b.appendUint8Array)(p.initSegment.data,new Uint8Array(r)):r;(0,k.parseWebVTT)(E,this.initPTS[p.cc],this.timescale[p.cc],t,p.cc,p.start,function(d){s._appendCues(d,p.level),l.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:p})},function(d){s._fallbackToIMSC1(p,r),g.logger.log("Failed to parse VTT cue: "+d),l.trigger(_.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:p,error:d})})},n._fallbackToIMSC1=function(p,r){var t=this,e=this.tracks[p.level];e.textCodec||(0,v.parseIMSC1)(r,this.initPTS[p.cc],this.timescale[p.cc],function(){e.textCodec=v.IMSC1_CODEC,t._parseIMSC1(p,r)},function(){e.textCodec="wvtt"})},n._appendCues=function(p,r){var t=this.hls;if(this.config.renderTextTracksNatively){var e=this.textTracks[r];if(!e||e.mode==="disabled")return;p.forEach(function(E){return(0,S.addCueToTrack)(e,E)})}else{var s=this.tracks[r];if(!s)return;var l=s.default?"default":"subtitles"+r;t.trigger(_.Events.CUES_PARSED,{type:"subtitles",cues:p,track:l})}},n.onFragDecrypted=function(p,r){var t=r.frag;if(t.type===m.PlaylistLevelType.SUBTITLE){if(!(0,w.isFiniteNumber)(this.initPTS[t.cc])){this.unparsedVttFrags.push(r);return}this.onFragLoaded(_.Events.FRAG_LOADED,r)}},n.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},n.onFragParsingUserdata=function(p,r){var t=this.cea608Parser1,e=this.cea608Parser2;if(!(!this.enabled||!(t&&e))){var s=r.frag,l=r.samples;if(!(s.type===m.PlaylistLevelType.MAIN&&this.closedCaptionsForLevel(s)==="NONE"))for(var E=0;E<l.length;E++){var d=l[E].bytes;if(d){var f=this.extractCea608Data(d);t.addData(l[E].pts,f[0]),e.addData(l[E].pts,f[1])}}}},n.onBufferFlushing=function(p,r){var t=r.startOffset,e=r.endOffset,s=r.endOffsetSubtitles,l=r.type,E=this.media;if(!(!E||E.currentTime<e)){if(!l||l==="video"){var d=this.captionsTracks;Object.keys(d).forEach(function(c){return(0,S.removeCuesInRange)(d[c],t,e)})}if(this.config.renderTextTracksNatively&&t===0&&s!==void 0){var f=this.textTracks;Object.keys(f).forEach(function(c){return(0,S.removeCuesInRange)(f[c],t,s)})}}},n.extractCea608Data=function(p){for(var r=[[],[]],t=p[0]&31,e=2,s=0;s<t;s++){var l=p[e++],E=127&p[e++],d=127&p[e++];if(!(E===0&&d===0)){var f=(4&l)!==0;if(f){var c=3&l;(c===0||c===1)&&(r[c].push(E),r[c].push(d))}}}return r},a}();function y(a,n){return a&&a.label===n.name&&!(a.textTrack1||a.textTrack2)}function C(a,n,u,p){return Math.min(n,p)-Math.max(a,u)}function i(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}},"./src/crypt/aes-crypto.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(h,k){this.subtle=void 0,this.aesIV=void 0,this.subtle=h,this.aesIV=k}var D=_.prototype;return D.decrypt=function(k,S){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},S,k)},_}()},"./src/crypt/aes-decryptor.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D,removePadding:()=>_});var w=x("./src/utils/typed-array.ts");function _(h){var k=h.byteLength,S=k&&new DataView(h.buffer).getUint8(k-1);return S?(0,w.sliceUint8)(h,0,k-S):h}var D=function(){function h(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var k=h.prototype;return k.uint8ArrayToUint32Array_=function(v){for(var b=new DataView(v),m=new Uint32Array(4),g=0;g<4;g++)m[g]=b.getUint32(g*4);return m},k.initTable=function(){var v=this.sBox,b=this.invSBox,m=this.subMix,g=m[0],A=m[1],y=m[2],C=m[3],i=this.invSubMix,a=i[0],n=i[1],u=i[2],p=i[3],r=new Uint32Array(256),t=0,e=0,s=0;for(s=0;s<256;s++)s<128?r[s]=s<<1:r[s]=s<<1^283;for(s=0;s<256;s++){var l=e^e<<1^e<<2^e<<3^e<<4;l=l>>>8^l&255^99,v[t]=l,b[l]=t;var E=r[t],d=r[E],f=r[d],c=r[l]*257^l*16843008;g[t]=c<<24|c>>>8,A[t]=c<<16|c>>>16,y[t]=c<<8|c>>>24,C[t]=c,c=f*16843009^d*65537^E*257^t*16843008,a[l]=c<<24|c>>>8,n[l]=c<<16|c>>>16,u[l]=c<<8|c>>>24,p[l]=c,t?(t=E^r[r[r[f^E]]],e^=r[r[e]]):t=e=1}},k.expandKey=function(v){for(var b=this.uint8ArrayToUint32Array_(v),m=!0,g=0;g<b.length&&m;)m=b[g]===this.key[g],g++;if(!m){this.key=b;var A=this.keySize=b.length;if(A!==4&&A!==6&&A!==8)throw new Error("Invalid aes key size="+A);var y=this.ksRows=(A+6+1)*4,C,i,a=this.keySchedule=new Uint32Array(y),n=this.invKeySchedule=new Uint32Array(y),u=this.sBox,p=this.rcon,r=this.invSubMix,t=r[0],e=r[1],s=r[2],l=r[3],E,d;for(C=0;C<y;C++){if(C<A){E=a[C]=b[C];continue}d=E,C%A===0?(d=d<<8|d>>>24,d=u[d>>>24]<<24|u[d>>>16&255]<<16|u[d>>>8&255]<<8|u[d&255],d^=p[C/A|0]<<24):A>6&&C%A===4&&(d=u[d>>>24]<<24|u[d>>>16&255]<<16|u[d>>>8&255]<<8|u[d&255]),a[C]=E=(a[C-A]^d)>>>0}for(i=0;i<y;i++)C=y-i,i&3?d=a[C]:d=a[C-4],i<4||C<=4?n[i]=d:n[i]=t[u[d>>>24]]^e[u[d>>>16&255]]^s[u[d>>>8&255]]^l[u[d&255]],n[i]=n[i]>>>0}},k.networkToHostOrderSwap=function(v){return v<<24|(v&65280)<<8|(v&16711680)>>8|v>>>24},k.decrypt=function(v,b,m){for(var g=this.keySize+6,A=this.invKeySchedule,y=this.invSBox,C=this.invSubMix,i=C[0],a=C[1],n=C[2],u=C[3],p=this.uint8ArrayToUint32Array_(m),r=p[0],t=p[1],e=p[2],s=p[3],l=new Int32Array(v),E=new Int32Array(l.length),d,f,c,o,T,L,R,B,O,K,G,z,Y,V,X=this.networkToHostOrderSwap;b<l.length;){for(O=X(l[b]),K=X(l[b+1]),G=X(l[b+2]),z=X(l[b+3]),T=O^A[0],L=z^A[1],R=G^A[2],B=K^A[3],Y=4,V=1;V<g;V++)d=i[T>>>24]^a[L>>16&255]^n[R>>8&255]^u[B&255]^A[Y],f=i[L>>>24]^a[R>>16&255]^n[B>>8&255]^u[T&255]^A[Y+1],c=i[R>>>24]^a[B>>16&255]^n[T>>8&255]^u[L&255]^A[Y+2],o=i[B>>>24]^a[T>>16&255]^n[L>>8&255]^u[R&255]^A[Y+3],T=d,L=f,R=c,B=o,Y=Y+4;d=y[T>>>24]<<24^y[L>>16&255]<<16^y[R>>8&255]<<8^y[B&255]^A[Y],f=y[L>>>24]<<24^y[R>>16&255]<<16^y[B>>8&255]<<8^y[T&255]^A[Y+1],c=y[R>>>24]<<24^y[B>>16&255]<<16^y[T>>8&255]<<8^y[L&255]^A[Y+2],o=y[B>>>24]<<24^y[T>>16&255]<<16^y[L>>8&255]<<8^y[R&255]^A[Y+3],E[b]=X(d^r),E[b+1]=X(o^t),E[b+2]=X(c^e),E[b+3]=X(f^s),r=O,t=K,e=G,s=z,b=b+4}return E.buffer},h}()},"./src/crypt/decrypter.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/crypt/aes-crypto.ts"),_=x("./src/crypt/fast-aes-key.ts"),D=x("./src/crypt/aes-decryptor.ts"),h=x("./src/utils/logger.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/utils/typed-array.ts"),v=16,b=function(){function m(A,y,C){var i=C===void 0?{}:C,a=i.removePKCS7Padding,n=a===void 0?!0:a;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=A,this.config=y,this.removePKCS7Padding=n,n)try{var u=self.crypto;u&&(this.subtle=u.subtle||u.webkitSubtle)}catch{}this.subtle===null&&(this.config.enableSoftwareAES=!0)}var g=m.prototype;return g.destroy=function(){this.observer=null},g.isSync=function(){return this.config.enableSoftwareAES},g.flush=function(){var y=this.currentResult;if(!y){this.reset();return}var C=new Uint8Array(y);return this.reset(),this.removePKCS7Padding?(0,D.removePadding)(C):C},g.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},g.decrypt=function(y,C,i,a){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(y),C,i);var n=this.flush();n&&a(n.buffer)}else this.webCryptoDecrypt(new Uint8Array(y),C,i).then(a)},g.softwareDecrypt=function(y,C,i){var a=this.currentIV,n=this.currentResult,u=this.remainderData;this.logOnce("JS AES decrypt"),u&&(y=(0,k.appendUint8Array)(u,y),this.remainderData=null);var p=this.getValidChunk(y);if(!p.length)return null;a&&(i=a);var r=this.softwareDecrypter;r||(r=this.softwareDecrypter=new D.default),r.expandKey(C);var t=n;return this.currentResult=r.decrypt(p.buffer,0,i),this.currentIV=(0,S.sliceUint8)(p,-16).buffer,t||null},g.webCryptoDecrypt=function(y,C,i){var a=this,n=this.subtle;return(this.key!==C||!this.fastAesKey)&&(this.key=C,this.fastAesKey=new _.default(n,C)),this.fastAesKey.expandKey().then(function(u){if(!n)return Promise.reject(new Error("web crypto not initialized"));var p=new w.default(n,i);return p.decrypt(y.buffer,u)}).catch(function(u){return a.onWebCryptoError(u,y,C,i)})},g.onWebCryptoError=function(y,C,i,a){return h.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",y),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(C,i,a)},g.getValidChunk=function(y){var C=y,i=y.length-y.length%v;return i!==y.length&&(C=(0,S.sliceUint8)(y,0,i),this.remainderData=(0,S.sliceUint8)(y,i)),C},g.logOnce=function(y){!this.logEnabled||(h.logger.log("[decrypter.ts]: "+y),this.logEnabled=!1)},m}()},"./src/crypt/fast-aes-key.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(h,k){this.subtle=void 0,this.key=void 0,this.subtle=h,this.key=k}var D=_.prototype;return D.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},_}()},"./src/demux/aacdemuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/demux/base-audio-demuxer.ts"),_=x("./src/demux/adts.ts"),D=x("./src/utils/logger.ts"),h=x("./src/demux/id3.ts");function k(m,g){m.prototype=Object.create(g.prototype),m.prototype.constructor=m,S(m,g)}function S(m,g){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,C){return y.__proto__=C,y},S(m,g)}var v=function(m){k(g,m);function g(y,C){var i;return i=m.call(this)||this,i.observer=void 0,i.config=void 0,i.observer=y,i.config=C,i}var A=g.prototype;return A.resetInitSegment=function(C,i,a,n){m.prototype.resetInitSegment.call(this,C,i,a,n),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:i,duration:n,inputTimeScale:9e4,dropped:0}},g.probe=function(C){if(!C)return!1;for(var i=h.getID3Data(C,0)||[],a=i.length,n=C.length;a<n;a++)if(_.probe(C,a))return D.logger.log("ADTS sync word found !"),!0;return!1},A.canParse=function(C,i){return _.canParse(C,i)},A.appendFrame=function(C,i,a){_.initTrackConfig(C,this.observer,i,a,C.manifestCodec);var n=_.appendFrame(C,i,a,this.basePTS,this.frameIndex);if(n&&n.missing===0)return n},g}(w.default);const b=v},"./src/demux/adts.ts":(W,M,x)=>{x.r(M),x.d(M,{appendFrame:()=>a,canGetFrameLength:()=>b,canParse:()=>g,getAudioConfig:()=>h,getFrameDuration:()=>C,getFullFrameLength:()=>v,getHeaderLength:()=>S,initTrackConfig:()=>y,isHeader:()=>m,isHeaderPattern:()=>k,parseFrameHeader:()=>i,probe:()=>A});var w=x("./src/utils/logger.ts"),_=x("./src/errors.ts"),D=x("./src/events.ts");function h(n,u,p,r){var t,e,s,l,E=navigator.userAgent.toLowerCase(),d=r,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];t=((u[p+2]&192)>>>6)+1;var c=(u[p+2]&60)>>>2;if(c>f.length-1){n.trigger(D.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+c});return}return s=(u[p+2]&1)<<2,s|=(u[p+3]&192)>>>6,w.logger.log("manifest codec:"+r+", ADTS type:"+t+", samplingIndex:"+c),/firefox/i.test(E)?c>=6?(t=5,l=new Array(4),e=c-3):(t=2,l=new Array(2),e=c):E.indexOf("android")!==-1?(t=2,l=new Array(2),e=c):(t=5,l=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&c>=6?e=c-3:((r&&r.indexOf("mp4a.40.2")!==-1&&(c>=6&&s===1||/vivaldi/i.test(E))||!r&&s===1)&&(t=2,l=new Array(2)),e=c)),l[0]=t<<3,l[0]|=(c&14)>>1,l[1]|=(c&1)<<7,l[1]|=s<<3,t===5&&(l[1]|=(e&14)>>1,l[2]=(e&1)<<7,l[2]|=8,l[3]=0),{config:l,samplerate:f[c],channelCount:s,codec:"mp4a.40."+t,manifestCodec:d}}function k(n,u){return n[u]===255&&(n[u+1]&246)===240}function S(n,u){return n[u+1]&1?7:9}function v(n,u){return(n[u+3]&3)<<11|n[u+4]<<3|(n[u+5]&224)>>>5}function b(n,u){return u+5<n.length}function m(n,u){return u+1<n.length&&k(n,u)}function g(n,u){return b(n,u)&&k(n,u)&&v(n,u)<=n.length-u}function A(n,u){if(m(n,u)){var p=S(n,u);if(u+p>=n.length)return!1;var r=v(n,u);if(r<=p)return!1;var t=u+r;return t===n.length||m(n,t)}return!1}function y(n,u,p,r,t){if(!n.samplerate){var e=h(u,p,r,t);if(!e)return;n.config=e.config,n.samplerate=e.samplerate,n.channelCount=e.channelCount,n.codec=e.codec,n.manifestCodec=e.manifestCodec,w.logger.log("parsed codec:"+n.codec+", rate:"+e.samplerate+", channels:"+e.channelCount)}}function C(n){return 9216e4/n}function i(n,u){var p=S(n,u);if(u+p<=n.length){var r=v(n,u)-p;if(r>0)return{headerLength:p,frameLength:r}}}function a(n,u,p,r,t){var e=C(n.samplerate),s=r+t*e,l=i(u,p),E;if(l){var d=l.frameLength,f=l.headerLength,c=f+d,o=Math.max(0,p+c-u.length);o?(E=new Uint8Array(c-f),E.set(u.subarray(p+f,u.length),0)):E=u.subarray(p+f,p+c);var T={unit:E,pts:s};return o||n.samples.push(T),{sample:T,length:c,missing:o}}var L=u.length-p;E=new Uint8Array(L),E.set(u.subarray(p,u.length),0);var R={unit:E,pts:s};return{sample:R,length:L,missing:-1}}},"./src/demux/base-audio-demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>m,initPTSFn:()=>b});var w=x("./src/polyfills/number.ts"),_=x("./src/demux/id3.ts"),D=x("./src/types/demuxer.ts"),h=x("./src/demux/dummy-demuxed-track.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/utils/typed-array.ts"),v=function(){function g(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}var A=g.prototype;return A.resetInitSegment=function(C,i,a,n){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},A.resetTimeStamp=function(C){this.initPTS=C,this.resetContiguity()},A.resetContiguity=function(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0},A.canParse=function(C,i){return!1},A.appendFrame=function(C,i,a){},A.demux=function(C,i){this.cachedData&&(C=(0,k.appendUint8Array)(this.cachedData,C),this.cachedData=null);var a=_.getID3Data(C,0),n=a?a.length:0,u,p=this._audioTrack,r=this._id3Track,t=a?_.getTimeStamp(a):void 0,e=C.length;for((this.basePTS===null||this.frameIndex===0&&(0,w.isFiniteNumber)(t))&&(this.basePTS=b(t,i,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),a&&a.length>0&&r.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:a,type:D.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});n<e;){if(this.canParse(C,n)){var s=this.appendFrame(p,C,n);s?(this.frameIndex++,this.lastPTS=s.sample.pts,n+=s.length,u=n):n=e}else _.canParse(C,n)?(a=_.getID3Data(C,n),r.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:a,type:D.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY}),n+=a.length,u=n):n++;if(n===e&&u!==e){var l=(0,S.sliceUint8)(C,u);this.cachedData?this.cachedData=(0,k.appendUint8Array)(this.cachedData,l):this.cachedData=l}}return{audioTrack:p,videoTrack:(0,h.dummyTrack)(),id3Track:r,textTrack:(0,h.dummyTrack)()}},A.demuxSampleAes=function(C,i,a){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},A.flush=function(C){var i=this.cachedData;return i&&(this.cachedData=null,this.demux(i,0)),{audioTrack:this._audioTrack,videoTrack:(0,h.dummyTrack)(),id3Track:this._id3Track,textTrack:(0,h.dummyTrack)()}},A.destroy=function(){},g}(),b=function(A,y,C){return(0,w.isFiniteNumber)(A)?A*90:y*9e4+(C||0)};const m=v},"./src/demux/chunk-cache.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function D(){this.chunks=[],this.dataLength=0}var h=D.prototype;return h.push=function(S){this.chunks.push(S),this.dataLength+=S.length},h.flush=function(){var S=this.chunks,v=this.dataLength,b;if(S.length)S.length===1?b=S[0]:b=_(S,v);else return new Uint8Array(0);return this.reset(),b},h.reset=function(){this.chunks.length=0,this.dataLength=0},D}();function _(D,h){for(var k=new Uint8Array(h),S=0,v=0;v<D.length;v++){var b=D[v];k.set(b,S),S+=b.length}return k}},"./src/demux/dummy-demuxed-track.ts":(W,M,x)=>{x.r(M),x.d(M,{dummyTrack:()=>w});function w(_,D){return _===void 0&&(_=""),D===void 0&&(D=9e4),{type:_,id:-1,pid:-1,inputTimeScale:D,sequenceNumber:-1,samples:[],dropped:0}}},"./src/demux/exp-golomb.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=x("./src/utils/logger.ts"),_=function(){function h(S){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=S,this.bytesAvailable=S.byteLength,this.word=0,this.bitsAvailable=0}var k=h.prototype;return k.loadWord=function(){var v=this.data,b=this.bytesAvailable,m=v.byteLength-b,g=new Uint8Array(4),A=Math.min(4,b);if(A===0)throw new Error("no bytes available");g.set(v.subarray(m,m+A)),this.word=new DataView(g.buffer).getUint32(0),this.bitsAvailable=A*8,this.bytesAvailable-=A},k.skipBits=function(v){var b;this.bitsAvailable>v?(this.word<<=v,this.bitsAvailable-=v):(v-=this.bitsAvailable,b=v>>3,v-=b>>3,this.bytesAvailable-=b,this.loadWord(),this.word<<=v,this.bitsAvailable-=v)},k.readBits=function(v){var b=Math.min(this.bitsAvailable,v),m=this.word>>>32-b;return v>32&&w.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=b,this.bitsAvailable>0?this.word<<=b:this.bytesAvailable>0&&this.loadWord(),b=v-b,b>0&&this.bitsAvailable?m<<b|this.readBits(b):m},k.skipLZ=function(){var v;for(v=0;v<this.bitsAvailable;++v)if((this.word&2147483648>>>v)!==0)return this.word<<=v,this.bitsAvailable-=v,v;return this.loadWord(),v+this.skipLZ()},k.skipUEG=function(){this.skipBits(1+this.skipLZ())},k.skipEG=function(){this.skipBits(1+this.skipLZ())},k.readUEG=function(){var v=this.skipLZ();return this.readBits(v+1)-1},k.readEG=function(){var v=this.readUEG();return 1&v?1+v>>>1:-1*(v>>>1)},k.readBoolean=function(){return this.readBits(1)===1},k.readUByte=function(){return this.readBits(8)},k.readUShort=function(){return this.readBits(16)},k.readUInt=function(){return this.readBits(32)},k.skipScalingList=function(v){for(var b=8,m=8,g,A=0;A<v;A++)m!==0&&(g=this.readEG(),m=(b+g+256)%256),b=m===0?b:m},k.readSPS=function(){var v=0,b=0,m=0,g=0,A,y,C,i=this.readUByte.bind(this),a=this.readBits.bind(this),n=this.readUEG.bind(this),u=this.readBoolean.bind(this),p=this.skipBits.bind(this),r=this.skipEG.bind(this),t=this.skipUEG.bind(this),e=this.skipScalingList.bind(this);i();var s=i();if(a(5),p(3),i(),t(),s===100||s===110||s===122||s===244||s===44||s===83||s===86||s===118||s===128){var l=n();if(l===3&&p(1),t(),t(),p(1),u())for(y=l!==3?8:12,C=0;C<y;C++)u()&&(C<6?e(16):e(64))}t();var E=n();if(E===0)n();else if(E===1)for(p(1),r(),r(),A=n(),C=0;C<A;C++)r();t(),p(1);var d=n(),f=n(),c=a(1);c===0&&p(1),p(1),u()&&(v=n(),b=n(),m=n(),g=n());var o=[1,1];if(u()&&u()){var T=i();switch(T){case 1:o=[1,1];break;case 2:o=[12,11];break;case 3:o=[10,11];break;case 4:o=[16,11];break;case 5:o=[40,33];break;case 6:o=[24,11];break;case 7:o=[20,11];break;case 8:o=[32,11];break;case 9:o=[80,33];break;case 10:o=[18,11];break;case 11:o=[15,11];break;case 12:o=[64,33];break;case 13:o=[160,99];break;case 14:o=[4,3];break;case 15:o=[3,2];break;case 16:o=[2,1];break;case 255:{o=[i()<<8|i(),i()<<8|i()];break}}}return{width:Math.ceil((d+1)*16-v*2-b*2),height:(2-c)*(f+1)*16-(c?2:4)*(m+g),pixelRatio:o}},k.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},h}();const D=_},"./src/demux/id3.ts":(W,M,x)=>{x.r(M),x.d(M,{canParse:()=>k,decodeFrame:()=>g,getID3Data:()=>D,getID3Frames:()=>m,getTimeStamp:()=>S,isFooter:()=>_,isHeader:()=>w,isTimeStampFrame:()=>v,testables:()=>n,utf8ArrayToStr:()=>a});var w=function(t,e){return e+10<=t.length&&t[e]===73&&t[e+1]===68&&t[e+2]===51&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},_=function(t,e){return e+10<=t.length&&t[e]===51&&t[e+1]===68&&t[e+2]===73&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},D=function(t,e){for(var s=e,l=0;w(t,e);){l+=10;var E=h(t,e+6);l+=E,_(t,e+10)&&(l+=10),e+=l}if(l>0)return t.subarray(s,s+l)},h=function(t,e){var s=0;return s=(t[e]&127)<<21,s|=(t[e+1]&127)<<14,s|=(t[e+2]&127)<<7,s|=t[e+3]&127,s},k=function(t,e){return w(t,e)&&h(t,e+6)+10<=t.length-e},S=function(t){for(var e=m(t),s=0;s<e.length;s++){var l=e[s];if(v(l))return i(l)}},v=function(t){return t&&t.key==="PRIV"&&t.info==="com.apple.streaming.transportStreamTimestamp"},b=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),s=h(t,4),l=10;return{type:e,size:s,data:t.subarray(l,l+s)}},m=function(t){for(var e=0,s=[];w(t,e);){var l=h(t,e+6);e+=10;for(var E=e+l;e+8<E;){var d=b(t.subarray(e)),f=g(d);f&&s.push(f),e+=d.size+10}_(t,e)&&(e+=10)}return s},g=function(t){return t.type==="PRIV"?A(t):t.type[0]==="W"?C(t):y(t)},A=function(t){if(!(t.size<2)){var e=a(t.data,!0),s=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:s.buffer}}},y=function(t){if(!(t.size<2)){if(t.type==="TXXX"){var e=1,s=a(t.data.subarray(e),!0);e+=s.length+1;var l=a(t.data.subarray(e));return{key:t.type,info:s,data:l}}var E=a(t.data.subarray(1));return{key:t.type,data:E}}},C=function(t){if(t.type==="WXXX"){if(t.size<2)return;var e=1,s=a(t.data.subarray(e),!0);e+=s.length+1;var l=a(t.data.subarray(e));return{key:t.type,info:s,data:l}}var E=a(t.data);return{key:t.type,data:E}},i=function(t){if(t.data.byteLength===8){var e=new Uint8Array(t.data),s=e[3]&1,l=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return l/=45,s&&(l+=4772185884e-2),Math.round(l)}},a=function(t,e){e===void 0&&(e=!1);var s=p();if(s){var l=s.decode(t);if(e){var E=l.indexOf("\0");return E!==-1?l.substring(0,E):l}return l.replace(/\0/g,"")}for(var d=t.length,f,c,o,T="",L=0;L<d;){if(f=t[L++],f===0&&e)return T;if(f===0||f===3)continue;switch(f>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:T+=String.fromCharCode(f);break;case 12:case 13:c=t[L++],T+=String.fromCharCode((f&31)<<6|c&63);break;case 14:c=t[L++],o=t[L++],T+=String.fromCharCode((f&15)<<12|(c&63)<<6|(o&63)<<0);break}}return T},n={decodeTextFrame:y},u;function p(){return!u&&typeof self.TextDecoder<"u"&&(u=new self.TextDecoder("utf-8")),u}},"./src/demux/mp3demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/demux/base-audio-demuxer.ts"),_=x("./src/demux/id3.ts"),D=x("./src/utils/logger.ts"),h=x("./src/demux/mpegaudio.ts");function k(m,g){m.prototype=Object.create(g.prototype),m.prototype.constructor=m,S(m,g)}function S(m,g){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,C){return y.__proto__=C,y},S(m,g)}var v=function(m){k(g,m);function g(){return m.apply(this,arguments)||this}var A=g.prototype;return A.resetInitSegment=function(C,i,a,n){m.prototype.resetInitSegment.call(this,C,i,a,n),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:i,duration:n,inputTimeScale:9e4,dropped:0}},g.probe=function(C){if(!C)return!1;for(var i=_.getID3Data(C,0)||[],a=i.length,n=C.length;a<n;a++)if(h.probe(C,a))return D.logger.log("MPEG Audio sync word found !"),!0;return!1},A.canParse=function(C,i){return h.canParse(C,i)},A.appendFrame=function(C,i,a){if(this.basePTS!==null)return h.appendFrame(C,i,a,this.basePTS,this.frameIndex)},g}(w.default);const b=v},"./src/demux/mp4demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/types/demuxer.ts"),D=x("./src/utils/mp4-tools.ts"),h=x("./src/demux/dummy-demuxed-track.ts"),k=/\/emsg[-/]ID3/i,S=function(){function b(g,A){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=A}var m=b.prototype;return m.resetTimeStamp=function(){},m.resetInitSegment=function(A,y,C,i){var a=(0,D.parseInitSegment)(A),n=this.videoTrack=(0,h.dummyTrack)("video",1),u=this.audioTrack=(0,h.dummyTrack)("audio",1),p=this.txtTrack=(0,h.dummyTrack)("text",1);if(this.id3Track=(0,h.dummyTrack)("id3",1),this.timeOffset=0,a.video){var r=a.video,t=r.id,e=r.timescale,s=r.codec;n.id=t,n.timescale=p.timescale=e,n.codec=s}if(a.audio){var l=a.audio,E=l.id,d=l.timescale,f=l.codec;u.id=E,u.timescale=d,u.codec=f}p.id=D.RemuxerTrackIdConfig.text,n.sampleDuration=0,n.duration=u.duration=i},m.resetContiguity=function(){},b.probe=function(A){return A=A.length>16384?A.subarray(0,16384):A,(0,D.findBox)(A,["moof"]).length>0},m.demux=function(A,y){this.timeOffset=y;var C=A,i=this.videoTrack,a=this.txtTrack;if(this.config.progressive){this.remainderData&&(C=(0,D.appendUint8Array)(this.remainderData,A));var n=(0,D.segmentValidRange)(C);this.remainderData=n.remainder,i.samples=n.valid||new Uint8Array}else i.samples=C;var u=this.extractID3Track(i,y);return a.samples=(0,D.parseSamples)(y,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:u,textTrack:this.txtTrack}},m.flush=function(){var A=this.timeOffset,y=this.videoTrack,C=this.txtTrack;y.samples=this.remainderData||new Uint8Array,this.remainderData=null;var i=this.extractID3Track(y,this.timeOffset);return C.samples=(0,D.parseSamples)(A,y),{videoTrack:y,audioTrack:(0,h.dummyTrack)(),id3Track:i,textTrack:(0,h.dummyTrack)()}},m.extractID3Track=function(A,y){var C=this.id3Track;if(A.samples.length){var i=(0,D.findBox)(A.samples,["emsg"]);i&&i.forEach(function(a){var n=(0,D.parseEmsg)(a);if(k.test(n.schemeIdUri)){var u=(0,w.isFiniteNumber)(n.presentationTime)?n.presentationTime/n.timeScale:y+n.presentationTimeDelta/n.timeScale,p=n.eventDuration===4294967295?Number.POSITIVE_INFINITY:n.eventDuration/n.timeScale;p<=.001&&(p=Number.POSITIVE_INFINITY);var r=n.payload;C.samples.push({data:r,len:r.byteLength,dts:u,pts:u,type:_.MetadataSchema.emsg,duration:p})}})}return C},m.demuxSampleAes=function(A,y,C){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},m.destroy=function(){},b}();const v=S},"./src/demux/mpegaudio.ts":(W,M,x)=>{x.r(M),x.d(M,{appendFrame:()=>S,canParse:()=>g,isHeader:()=>m,isHeaderPattern:()=>b,parseHeader:()=>v,probe:()=>A});var w=null,_=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],D=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],h=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],k=[0,1,1,4];function S(y,C,i,a,n){if(!(i+24>C.length)){var u=v(C,i);if(u&&i+u.frameLength<=C.length){var p=u.samplesPerFrame*9e4/u.sampleRate,r=a+n*p,t={unit:C.subarray(i,i+u.frameLength),pts:r,dts:r};return y.config=[],y.channelCount=u.channelCount,y.samplerate=u.sampleRate,y.samples.push(t),{sample:t,length:u.frameLength,missing:0}}}}function v(y,C){var i=y[C+1]>>3&3,a=y[C+1]>>1&3,n=y[C+2]>>4&15,u=y[C+2]>>2&3;if(i!==1&&n!==0&&n!==15&&u!==3){var p=y[C+2]>>1&1,r=y[C+3]>>6,t=i===3?3-a:a===3?3:4,e=_[t*14+n-1]*1e3,s=i===3?0:i===2?1:2,l=D[s*3+u],E=r===3?1:2,d=h[i][a],f=k[a],c=d*8*f,o=Math.floor(d*e/l+p)*f;if(w===null){var T=navigator.userAgent||"",L=T.match(/Chrome\/(\d+)/i);w=L?parseInt(L[1]):0}var R=!!w&&w<=87;return R&&a===2&&e>=224e3&&r===0&&(y[C+3]=y[C+3]|128),{sampleRate:l,channelCount:E,frameLength:o,samplesPerFrame:c}}}function b(y,C){return y[C]===255&&(y[C+1]&224)===224&&(y[C+1]&6)!==0}function m(y,C){return C+1<y.length&&b(y,C)}function g(y,C){var i=4;return b(y,C)&&i<=y.length-C}function A(y,C){if(C+1<y.length&&b(y,C)){var i=4,a=v(y,C),n=i;a!=null&&a.frameLength&&(n=a.frameLength);var u=C+n;return u===y.length||m(y,u)}return!1}},"./src/demux/sample-aes.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>h});var w=x("./src/crypt/decrypter.ts"),_=x("./src/utils/mp4-tools.ts"),D=function(){function k(v,b,m){this.keyData=void 0,this.decrypter=void 0,this.keyData=m,this.decrypter=new w.default(v,b,{removePKCS7Padding:!1})}var S=k.prototype;return S.decryptBuffer=function(b,m){this.decrypter.decrypt(b,this.keyData.key.buffer,this.keyData.iv.buffer,m)},S.decryptAacSample=function(b,m,g,A){var y=b[m].unit;if(!(y.length<=16)){var C=y.subarray(16,y.length-y.length%16),i=C.buffer.slice(C.byteOffset,C.byteOffset+C.length),a=this;this.decryptBuffer(i,function(n){var u=new Uint8Array(n);y.set(u,16),A||a.decryptAacSamples(b,m+1,g)})}},S.decryptAacSamples=function(b,m,g){for(;;m++){if(m>=b.length){g();return}if(!(b[m].unit.length<32)){var A=this.decrypter.isSync();if(this.decryptAacSample(b,m,g,A),!A)return}}},S.getAvcEncryptedData=function(b){for(var m=Math.floor((b.length-48)/160)*16+16,g=new Int8Array(m),A=0,y=32;y<b.length-16;y+=160,A+=16)g.set(b.subarray(y,y+16),A);return g},S.getAvcDecryptedUnit=function(b,m){for(var g=new Uint8Array(m),A=0,y=32;y<b.length-16;y+=160,A+=16)b.set(g.subarray(A,A+16),y);return b},S.decryptAvcSample=function(b,m,g,A,y,C){var i=(0,_.discardEPB)(y.data),a=this.getAvcEncryptedData(i),n=this;this.decryptBuffer(a.buffer,function(u){y.data=n.getAvcDecryptedUnit(i,u),C||n.decryptAvcSamples(b,m,g+1,A)})},S.decryptAvcSamples=function(b,m,g,A){if(b instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;m++,g=0){if(m>=b.length){A();return}for(var y=b[m].units;!(g>=y.length);g++){var C=y[g];if(!(C.data.length<=48||C.type!==1&&C.type!==5)){var i=this.decrypter.isSync();if(this.decryptAvcSample(b,m,g,A,C,i),!i)return}}}},k}();const h=D},"./src/demux/transmuxer-interface.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>m});var w=x("./src/demux/webworkify-webpack.js"),_=x("./src/events.ts"),D=x("./src/demux/transmuxer.ts"),h=x("./src/utils/logger.ts"),k=x("./src/errors.ts"),S=x("./src/utils/mediasource-helper.ts"),v=x("./node_modules/eventemitter3/index.js"),b=(0,S.getMediaSource)()||{isTypeSupported:function(){return!1}},m=function(){function g(y,C,i,a){var n=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;var u=y.config;this.hls=y,this.id=C,this.useWorker=!!u.enableWorker,this.onTransmuxComplete=i,this.onFlush=a;var p=function(l,E){E=E||{},E.frag=n.frag,E.id=n.id,n.hls.trigger(l,E)};this.observer=new v.EventEmitter,this.observer.on(_.Events.FRAG_DECRYPTED,p),this.observer.on(_.Events.ERROR,p);var r={mp4:b.isTypeSupported("video/mp4"),mpeg:b.isTypeSupported("audio/mpeg"),mp3:b.isTypeSupported('audio/mp4; codecs="mp3"')},t=navigator.vendor;if(this.useWorker&&typeof Worker<"u"){h.logger.log("demuxing in webworker");var e;try{e=this.worker=(0,w.default)("./src/demux/transmuxer-worker.ts"),this.onwmsg=this.onWorkerMessage.bind(this),e.addEventListener("message",this.onwmsg),e.onerror=function(s){n.useWorker=!1,h.logger.warn("Exception in webworker, fallback to inline"),n.hls.trigger(_.Events.ERROR,{type:k.ErrorTypes.OTHER_ERROR,details:k.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:new Error(s.message+"  ("+s.filename+":"+s.lineno+")")})},e.postMessage({cmd:"init",typeSupported:r,vendor:t,id:C,config:JSON.stringify(u)})}catch(s){h.logger.warn("Error in worker:",s),h.logger.error("Error while initializing DemuxerWorker, fallback to inline"),e&&self.URL.revokeObjectURL(e.objectURL),this.transmuxer=new D.default(this.observer,r,u,t,C),this.worker=null}}else this.transmuxer=new D.default(this.observer,r,u,t,C)}var A=g.prototype;return A.destroy=function(){var C=this.worker;if(C)C.removeEventListener("message",this.onwmsg),C.terminate(),this.worker=null,this.onwmsg=void 0;else{var i=this.transmuxer;i&&(i.destroy(),this.transmuxer=null)}var a=this.observer;a&&a.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null},A.push=function(C,i,a,n,u,p,r,t,e,s){var l,E,d=this;e.transmuxing.start=self.performance.now();var f=this.transmuxer,c=this.worker,o=p?p.start:u.start,T=u.decryptdata,L=this.frag,R=!(L&&u.cc===L.cc),B=!(L&&e.level===L.level),O=L?e.sn-L.sn:-1,K=this.part?e.part-this.part.index:-1,G=O===0&&e.id>1&&e.id===(L==null?void 0:L.stats.chunkCount),z=!B&&(O===1||O===0&&(K===1||G&&K<=0)),Y=self.performance.now();(B||O||u.stats.parsing.start===0)&&(u.stats.parsing.start=Y),p&&(K||!z)&&(p.stats.parsing.start=Y);var V=!(L&&((l=u.initSegment)===null||l===void 0?void 0:l.url)===((E=L.initSegment)===null||E===void 0?void 0:E.url)),X=new D.TransmuxState(R,z,t,B,o,V);if(!z||R||V){h.logger.log("[transmuxer-interface, "+u.type+"]: Starting new transmux session for sn: "+e.sn+" p: "+e.part+" level: "+e.level+" id: "+e.id+`
        discontinuity: `+R+`
        trackSwitch: `+B+`
        contiguous: `+z+`
        accurateTimeOffset: `+t+`
        timeOffset: `+o+`
        initSegmentChange: `+V);var Z=new D.TransmuxConfig(a,n,i,r,s);this.configureTransmuxer(Z)}if(this.frag=u,this.part=p,c)c.postMessage({cmd:"demux",data:C,decryptdata:T,chunkMeta:e,state:X},C instanceof ArrayBuffer?[C]:[]);else if(f){var $=f.push(C,T,e,X);(0,D.isPromise)($)?$.then(function(ee){d.handleTransmuxComplete(ee)}):this.handleTransmuxComplete($)}},A.flush=function(C){var i=this;C.transmuxing.start=self.performance.now();var a=this.transmuxer,n=this.worker;if(n)n.postMessage({cmd:"flush",chunkMeta:C});else if(a){var u=a.flush(C);(0,D.isPromise)(u)?u.then(function(p){i.handleFlushResult(p,C)}):this.handleFlushResult(u,C)}},A.handleFlushResult=function(C,i){var a=this;C.forEach(function(n){a.handleTransmuxComplete(n)}),this.onFlush(i)},A.onWorkerMessage=function(C){var i=C.data,a=this.hls;switch(i.event){case"init":{self.URL.revokeObjectURL(this.worker.objectURL);break}case"transmuxComplete":{this.handleTransmuxComplete(i.data);break}case"flush":{this.onFlush(i.data);break}case"workerLog":h.logger[i.data.logType]&&h.logger[i.data.logType](i.data.message);break;default:{i.data=i.data||{},i.data.frag=this.frag,i.data.id=this.id,a.trigger(i.event,i.data);break}}},A.configureTransmuxer=function(C){var i=this.worker,a=this.transmuxer;i?i.postMessage({cmd:"configure",config:C}):a&&a.configure(C)},A.handleTransmuxComplete=function(C){C.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(C)},g}()},"./src/demux/transmuxer-worker.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/demux/transmuxer.ts"),_=x("./src/events.ts"),D=x("./src/utils/logger.ts"),h=x("./node_modules/eventemitter3/index.js");function k(g){var A=new h.EventEmitter,y=function(a,n){g.postMessage({event:a,data:n})};A.on(_.Events.FRAG_DECRYPTED,y),A.on(_.Events.ERROR,y);var C=function(){var a=function(p){var r=function(e){y("workerLog",{logType:p,message:e})};D.logger[p]=r};for(var n in D.logger)a(n)};g.addEventListener("message",function(i){var a=i.data;switch(a.cmd){case"init":{var n=JSON.parse(a.config);g.transmuxer=new w.default(A,a.typeSupported,n,a.vendor,a.id),(0,D.enableLogs)(n.debug,a.id),C(),y("init",null);break}case"configure":{g.transmuxer.configure(a.config);break}case"demux":{var u=g.transmuxer.push(a.data,a.decryptdata,a.chunkMeta,a.state);(0,w.isPromise)(u)?u.then(function(t){S(g,t)}):S(g,u);break}case"flush":{var p=a.chunkMeta,r=g.transmuxer.flush(p);(0,w.isPromise)(r)?r.then(function(t){b(g,t,p)}):b(g,r,p);break}}})}function S(g,A){if(m(A.remuxResult))return!1;var y=[],C=A.remuxResult,i=C.audio,a=C.video;return i&&v(y,i),a&&v(y,a),g.postMessage({event:"transmuxComplete",data:A},y),!0}function v(g,A){A.data1&&g.push(A.data1.buffer),A.data2&&g.push(A.data2.buffer)}function b(g,A,y){var C=A.reduce(function(i,a){return S(g,a)||i},!1);C||g.postMessage({event:"transmuxComplete",data:A[0]}),g.postMessage({event:"flush",data:y})}function m(g){return!g.audio&&!g.video&&!g.text&&!g.id3&&!g.initSegment}},"./src/demux/transmuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{TransmuxConfig:()=>u,TransmuxState:()=>p,default:()=>C,isPromise:()=>n});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/crypt/decrypter.ts"),h=x("./src/demux/aacdemuxer.ts"),k=x("./src/demux/mp4demuxer.ts"),S=x("./src/demux/tsdemuxer.ts"),v=x("./src/demux/mp3demuxer.ts"),b=x("./src/remux/mp4-remuxer.ts"),m=x("./src/remux/passthrough-remuxer.ts"),g=x("./src/utils/logger.ts"),A;try{A=self.performance.now.bind(self.performance)}catch{g.logger.debug("Unable to use Performance API on this environment"),A=self.Date.now}var y=[{demux:S.default,remux:b.default},{demux:k.default,remux:m.default},{demux:h.default,remux:b.default},{demux:v.default,remux:b.default}],C=function(){function r(e,s,l,E,d){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=s,this.config=l,this.vendor=E,this.id=d}var t=r.prototype;return t.configure=function(s){this.transmuxConfig=s,this.decrypter&&this.decrypter.reset()},t.push=function(s,l,E,d){var f=this,c=E.transmuxing;c.executeStart=A();var o=new Uint8Array(s),T=this.config,L=this.currentTransmuxState,R=this.transmuxConfig;d&&(this.currentTransmuxState=d);var B=d||L,O=B.contiguous,K=B.discontinuity,G=B.trackSwitch,z=B.accurateTimeOffset,Y=B.timeOffset,V=B.initSegmentChange,X=R.audioCodec,Z=R.videoCodec,$=R.defaultInitPts,ee=R.duration,ae=R.initSegmentData;(K||G||V)&&this.resetInitSegment(ae,X,Z,ee),(K||V)&&this.resetInitialTimestamp($),O||this.resetContiguity();var ne=i(o,l);if(ne&&ne.method==="AES-128"){var oe=this.getDecrypter();if(T.enableSoftwareAES){var se=oe.softwareDecrypt(o,ne.key.buffer,ne.iv.buffer);if(!se)return c.executeEnd=A(),a(E);o=new Uint8Array(se)}else return this.decryptionPromise=oe.webCryptoDecrypt(o,ne.key.buffer,ne.iv.buffer).then(function(ue){var de=f.push(ue,null,E);return f.decryptionPromise=null,de}),this.decryptionPromise}this.needsProbing(o,K,G)&&this.configureTransmuxer(o,R);var te=this.transmux(o,ne,Y,z,E),ie=this.currentTransmuxState;return ie.contiguous=!0,ie.discontinuity=!1,ie.trackSwitch=!1,c.executeEnd=A(),te},t.flush=function(s){var l=this,E=s.transmuxing;E.executeStart=A();var d=this.decrypter,f=this.currentTransmuxState,c=this.decryptionPromise;if(c)return c.then(function(){return l.flush(s)});var o=[],T=f.timeOffset;if(d){var L=d.flush();L&&o.push(this.push(L,null,s))}var R=this.demuxer,B=this.remuxer;if(!R||!B)return this.observer.emit(w.Events.ERROR,w.Events.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),E.executeEnd=A(),[a(s)];var O=R.flush(T);return n(O)?O.then(function(K){return l.flushRemux(o,K,s),o}):(this.flushRemux(o,O,s),o)},t.flushRemux=function(s,l,E){var d=l.audioTrack,f=l.videoTrack,c=l.id3Track,o=l.textTrack,T=this.currentTransmuxState,L=T.accurateTimeOffset,R=T.timeOffset;g.logger.log("[transmuxer.ts]: Flushed fragment "+E.sn+(E.part>-1?" p: "+E.part:"")+" of level "+E.level);var B=this.remuxer.remux(d,f,c,o,R,L,!0,this.id);s.push({remuxResult:B,chunkMeta:E}),E.transmuxing.executeEnd=A()},t.resetInitialTimestamp=function(s){var l=this.demuxer,E=this.remuxer;!l||!E||(l.resetTimeStamp(s),E.resetTimeStamp(s))},t.resetContiguity=function(){var s=this.demuxer,l=this.remuxer;!s||!l||(s.resetContiguity(),l.resetNextTimestamp())},t.resetInitSegment=function(s,l,E,d){var f=this.demuxer,c=this.remuxer;!f||!c||(f.resetInitSegment(s,l,E,d),c.resetInitSegment(s,l,E))},t.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},t.transmux=function(s,l,E,d,f){var c;return l&&l.method==="SAMPLE-AES"?c=this.transmuxSampleAes(s,l,E,d,f):c=this.transmuxUnencrypted(s,E,d,f),c},t.transmuxUnencrypted=function(s,l,E,d){var f=this.demuxer.demux(s,l,!1,!this.config.progressive),c=f.audioTrack,o=f.videoTrack,T=f.id3Track,L=f.textTrack,R=this.remuxer.remux(c,o,T,L,l,E,!1,this.id);return{remuxResult:R,chunkMeta:d}},t.transmuxSampleAes=function(s,l,E,d,f){var c=this;return this.demuxer.demuxSampleAes(s,l,E).then(function(o){var T=c.remuxer.remux(o.audioTrack,o.videoTrack,o.id3Track,o.textTrack,E,d,!1,c.id);return{remuxResult:T,chunkMeta:f}})},t.configureTransmuxer=function(s,l){for(var E=this.config,d=this.observer,f=this.typeSupported,c=this.vendor,o=l.audioCodec,T=l.defaultInitPts,L=l.duration,R=l.initSegmentData,B=l.videoCodec,O,K=0,G=y.length;K<G;K++)if(y[K].demux.probe(s)){O=y[K];break}O||(g.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),O={demux:k.default,remux:m.default});var z=this.demuxer,Y=this.remuxer,V=O.remux,X=O.demux;(!Y||!(Y instanceof V))&&(this.remuxer=new V(d,E,f,c)),(!z||!(z instanceof X))&&(this.demuxer=new X(d,E,f),this.probe=X.probe),this.resetInitSegment(R,o,B,L),this.resetInitialTimestamp(T)},t.needsProbing=function(s,l,E){return!this.demuxer||!this.remuxer||l||E},t.getDecrypter=function(){var s=this.decrypter;return s||(s=this.decrypter=new D.default(this.observer,this.config)),s},r}();function i(r,t){var e=null;return r.byteLength>0&&t!=null&&t.key!=null&&t.iv!==null&&t.method!=null&&(e=t),e}var a=function(t){return{remuxResult:{},chunkMeta:t}};function n(r){return"then"in r&&r.then instanceof Function}var u=function(t,e,s,l,E){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=s,this.duration=l,this.defaultInitPts=E},p=function(t,e,s,l,E,d){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=s,this.trackSwitch=l,this.timeOffset=E,this.initSegmentChange=d}},"./src/demux/tsdemuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>p});var w=x("./src/demux/adts.ts"),_=x("./src/demux/mpegaudio.ts"),D=x("./src/demux/exp-golomb.ts"),h=x("./src/demux/sample-aes.ts"),k=x("./src/events.ts"),S=x("./src/utils/mp4-tools.ts"),v=x("./src/utils/logger.ts"),b=x("./src/errors.ts"),m=x("./src/types/demuxer.ts");function g(){return g=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},g.apply(this,arguments)}var A=188,y=function(){function r(e,s,l){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=e,this.config=s,this.typeSupported=l}r.probe=function(s){var l=r.syncOffset(s);return l>0&&v.logger.warn("MPEG2-TS detected but first sync word found @ offset "+l),l!==-1},r.syncOffset=function(s){for(var l=Math.min(A*5,s.length-A*2)+1,E=0;E<l;){if(s[E]===71&&s[E+A]===71)return E;E++}return-1},r.createTrack=function(s,l){return{container:s==="video"||s==="audio"?"video/mp2t":void 0,type:s,id:S.RemuxerTrackIdConfig[s],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:s==="audio"?l:void 0}};var t=r.prototype;return t.resetInitSegment=function(s,l,E,d){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=r.createTrack("video"),this._audioTrack=r.createTrack("audio",d),this._id3Track=r.createTrack("id3"),this._txtTrack=r.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=l,this.videoCodec=E,this._duration=d},t.resetTimeStamp=function(){},t.resetContiguity=function(){var s=this._audioTrack,l=this._avcTrack,E=this._id3Track;s&&(s.pesData=null),l&&(l.pesData=null),E&&(E.pesData=null),this.aacOverFlow=null,this.avcSample=null,this.remainderData=null},t.demux=function(s,l,E,d){E===void 0&&(E=!1),d===void 0&&(d=!1),E||(this.sampleAes=null);var f,c=this._avcTrack,o=this._audioTrack,T=this._id3Track,L=this._txtTrack,R=c.pid,B=c.pesData,O=o.pid,K=T.pid,G=o.pesData,z=T.pesData,Y=null,V=this.pmtParsed,X=this._pmtId,Z=s.length;if(this.remainderData&&(s=(0,S.appendUint8Array)(this.remainderData,s),Z=s.length,this.remainderData=null),Z<A&&!d)return this.remainderData=s,{audioTrack:o,videoTrack:c,id3Track:T,textTrack:L};var $=Math.max(0,r.syncOffset(s));Z-=(Z-$)%A,Z<s.byteLength&&!d&&(this.remainderData=new Uint8Array(s.buffer,Z,s.buffer.byteLength-Z));for(var ee=0,ae=$;ae<Z;ae+=A)if(s[ae]===71){var ne=!!(s[ae+1]&64),oe=((s[ae+1]&31)<<8)+s[ae+2],se=(s[ae+3]&48)>>4,te=void 0;if(se>1){if(te=ae+5+s[ae+4],te===ae+A)continue}else te=ae+4;switch(oe){case R:ne&&(B&&(f=n(B))&&this.parseAVCPES(c,L,f,!1),B={data:[],size:0}),B&&(B.data.push(s.subarray(te,ae+A)),B.size+=ae+A-te);break;case O:if(ne){if(G&&(f=n(G)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,f);break;case"mp3":this.parseMPEGPES(o,f);break}G={data:[],size:0}}G&&(G.data.push(s.subarray(te,ae+A)),G.size+=ae+A-te);break;case K:ne&&(z&&(f=n(z))&&this.parseID3PES(T,f),z={data:[],size:0}),z&&(z.data.push(s.subarray(te,ae+A)),z.size+=ae+A-te);break;case 0:ne&&(te+=s[te]+1),X=this._pmtId=i(s,te);break;case X:{ne&&(te+=s[te]+1);var ie=a(s,te,this.typeSupported,E);R=ie.avc,R>0&&(c.pid=R),O=ie.audio,O>0&&(o.pid=O,o.segmentCodec=ie.segmentCodec),K=ie.id3,K>0&&(T.pid=K),Y!==null&&!V&&(v.logger.log("unknown PID '"+Y+"' in TS found"),Y=null,ae=$-188),V=this.pmtParsed=!0;break}case 17:case 8191:break;default:Y=oe;break}}else ee++;ee>0&&this.observer.emit(k.Events.ERROR,k.Events.ERROR,{type:b.ErrorTypes.MEDIA_ERROR,details:b.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+ee+" TS packet/s that do not start with 0x47"}),c.pesData=B,o.pesData=G,T.pesData=z;var ue={audioTrack:o,videoTrack:c,id3Track:T,textTrack:L};return d&&this.extractRemainingSamples(ue),ue},t.flush=function(){var s=this.remainderData;this.remainderData=null;var l;return s?l=this.demux(s,-1,!1,!0):l={videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(l),this.sampleAes?this.decrypt(l,this.sampleAes):l},t.extractRemainingSamples=function(s){var l=s.audioTrack,E=s.videoTrack,d=s.id3Track,f=s.textTrack,c=E.pesData,o=l.pesData,T=d.pesData,L;if(c&&(L=n(c))?(this.parseAVCPES(E,f,L,!0),E.pesData=null):E.pesData=c,o&&(L=n(o))){switch(l.segmentCodec){case"aac":this.parseAACPES(l,L);break;case"mp3":this.parseMPEGPES(l,L);break}l.pesData=null}else o!=null&&o.size&&v.logger.log("last AAC PES packet truncated,might overlap between fragments"),l.pesData=o;T&&(L=n(T))?(this.parseID3PES(d,L),d.pesData=null):d.pesData=T},t.demuxSampleAes=function(s,l,E){var d=this.demux(s,E,!0,!this.config.progressive),f=this.sampleAes=new h.default(this.observer,this.config,l);return this.decrypt(d,f)},t.decrypt=function(s,l){return new Promise(function(E){var d=s.audioTrack,f=s.videoTrack;d.samples&&d.segmentCodec==="aac"?l.decryptAacSamples(d.samples,0,function(){f.samples?l.decryptAvcSamples(f.samples,0,0,function(){E(s)}):E(s)}):f.samples&&l.decryptAvcSamples(f.samples,0,0,function(){E(s)})})},t.destroy=function(){this._duration=0},t.parseAVCPES=function(s,l,E,d){var f=this,c=this.parseAVCNALu(s,E.data),o=this.avcSample,T,L=!1;E.data=null,o&&c.length&&!s.audFound&&(u(o,s),o=this.avcSample=C(!1,E.pts,E.dts,"")),c.forEach(function(R){switch(R.type){case 1:{T=!0,o||(o=f.avcSample=C(!0,E.pts,E.dts,"")),o.frame=!0;var B=R.data;if(L&&B.length>4){var O=new D.default(B).readSliceType();(O===2||O===4||O===7||O===9)&&(o.key=!0)}break}case 5:T=!0,o||(o=f.avcSample=C(!0,E.pts,E.dts,"")),o.key=!0,o.frame=!0;break;case 6:{T=!0,(0,S.parseSEIMessageFromNALu)(R.data,1,E.pts,l.samples);break}case 7:if(T=!0,L=!0,!s.sps){var K=new D.default(R.data),G=K.readSPS();s.width=G.width,s.height=G.height,s.pixelRatio=G.pixelRatio,s.sps=[R.data],s.duration=f._duration;for(var z=R.data.subarray(1,4),Y="avc1.",V=0;V<3;V++){var X=z[V].toString(16);X.length<2&&(X="0"+X),Y+=X}s.codec=Y}break;case 8:T=!0,s.pps||(s.pps=[R.data]);break;case 9:T=!1,s.audFound=!0,o&&u(o,s),o=f.avcSample=C(!1,E.pts,E.dts,"");break;case 12:T=!0;break;default:T=!1,o&&(o.debug+="unknown NAL "+R.type+" ");break}if(o&&T){var Z=o.units;Z.push(R)}}),d&&o&&(u(o,s),this.avcSample=null)},t.getLastNalUnit=function(s){var l,E=this.avcSample,d;if((!E||E.units.length===0)&&(E=s[s.length-1]),(l=E)!==null&&l!==void 0&&l.units){var f=E.units;d=f[f.length-1]}return d},t.parseAVCNALu=function(s,l){var E=l.byteLength,d=s.naluState||0,f=d,c=[],o=0,T,L,R,B=-1,O=0;for(d===-1&&(B=0,O=l[0]&31,d=0,o=1);o<E;){if(T=l[o++],!d){d=T?0:1;continue}if(d===1){d=T?0:2;continue}if(!T)d=3;else if(T===1){if(B>=0){var K={data:l.subarray(B,o-d-1),type:O};c.push(K)}else{var G=this.getLastNalUnit(s.samples);if(G&&(f&&o<=4-f&&G.state&&(G.data=G.data.subarray(0,G.data.byteLength-f)),L=o-d-1,L>0)){var z=new Uint8Array(G.data.byteLength+L);z.set(G.data,0),z.set(l.subarray(0,L),G.data.byteLength),G.data=z,G.state=0}}o<E?(R=l[o]&31,B=o,O=R,d=0):d=-1}else d=0}if(B>=0&&d>=0){var Y={data:l.subarray(B,E),type:O,state:d};c.push(Y)}if(c.length===0){var V=this.getLastNalUnit(s.samples);if(V){var X=new Uint8Array(V.data.byteLength+l.byteLength);X.set(V.data,0),X.set(l,V.data.byteLength),V.data=X}}return s.naluState=d,c},t.parseAACPES=function(s,l){var E=0,d=this.aacOverFlow,f=l.data;if(d){this.aacOverFlow=null;var c=d.missing,o=d.sample.unit.byteLength;if(c===-1){var T=new Uint8Array(o+f.byteLength);T.set(d.sample.unit,0),T.set(f,o),f=T}else{var L=o-c;d.sample.unit.set(f.subarray(0,c),L),s.samples.push(d.sample),E=d.missing}}var R,B;for(R=E,B=f.length;R<B-1&&!w.isHeader(f,R);R++);if(R!==E){var O,K;if(R<B-1?(O="AAC PES did not start with ADTS header,offset:"+R,K=!1):(O="no ADTS header found in AAC PES",K=!0),v.logger.warn("parsing error:"+O),this.observer.emit(k.Events.ERROR,k.Events.ERROR,{type:b.ErrorTypes.MEDIA_ERROR,details:b.ErrorDetails.FRAG_PARSING_ERROR,fatal:K,reason:O}),K)return}w.initTrackConfig(s,this.observer,f,R,this.audioCodec);var G;if(l.pts!==void 0)G=l.pts;else if(d){var z=w.getFrameDuration(s.samplerate);G=d.sample.pts+z}else{v.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}for(var Y=0,V;R<B;)if(V=w.appendFrame(s,f,R,G,Y),R+=V.length,V.missing){this.aacOverFlow=V;break}else for(Y++;R<B-1&&!w.isHeader(f,R);R++);},t.parseMPEGPES=function(s,l){var E=l.data,d=E.length,f=0,c=0,o=l.pts;if(o===void 0){v.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;c<d;)if(_.isHeader(E,c)){var T=_.appendFrame(s,E,c,o,f);if(T)c+=T.length,f++;else break}else c++},t.parseID3PES=function(s,l){if(l.pts===void 0){v.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}var E=g({},l,{type:this._avcTrack?m.MetadataSchema.emsg:m.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});s.samples.push(E)},r}();function C(r,t,e,s){return{key:r,frame:!1,pts:t,dts:e,units:[],debug:s,length:0}}function i(r,t){return(r[t+10]&31)<<8|r[t+11]}function a(r,t,e,s){var l={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},E=(r[t+1]&15)<<8|r[t+2],d=t+3+E-4,f=(r[t+10]&15)<<8|r[t+11];for(t+=12+f;t<d;){var c=(r[t+1]&31)<<8|r[t+2];switch(r[t]){case 207:if(!s){v.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:l.audio===-1&&(l.audio=c);break;case 21:l.id3===-1&&(l.id3=c);break;case 219:if(!s){v.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:l.avc===-1&&(l.avc=c);break;case 3:case 4:e.mpeg!==!0&&e.mp3!==!0?v.logger.log("MPEG audio found, not supported in this browser"):l.audio===-1&&(l.audio=c,l.segmentCodec="mp3");break;case 36:v.logger.warn("Unsupported HEVC stream type found");break}t+=((r[t+3]&15)<<8|r[t+4])+5}return l}function n(r){var t=0,e,s,l,E,d,f=r.data;if(!r||r.size===0)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}e=f[0];var o=(e[0]<<16)+(e[1]<<8)+e[2];if(o===1){if(s=(e[4]<<8)+e[5],s&&s>r.size-6)return null;var T=e[7];T&192&&(E=(e[9]&14)*536870912+(e[10]&255)*4194304+(e[11]&254)*16384+(e[12]&255)*128+(e[13]&254)/2,T&64?(d=(e[14]&14)*536870912+(e[15]&255)*4194304+(e[16]&254)*16384+(e[17]&255)*128+(e[18]&254)/2,E-d>54e5&&(v.logger.warn(Math.round((E-d)/9e4)+"s delta between PTS and DTS, align them"),E=d)):d=E),l=e[8];var L=l+9;if(r.size<=L)return null;r.size-=L;for(var R=new Uint8Array(r.size),B=0,O=f.length;B<O;B++){e=f[B];var K=e.byteLength;if(L)if(L>K){L-=K;continue}else e=e.subarray(L),K-=L,L=0;R.set(e,t),t+=K}return s&&(s-=l+3),{data:R,pts:E,dts:d,len:s}}return null}function u(r,t){if(r.units.length&&r.frame){if(r.pts===void 0){var e=t.samples,s=e.length;if(s){var l=e[s-1];r.pts=l.pts,r.dts=l.dts}else{t.dropped++;return}}t.samples.push(r)}r.debug.length&&v.logger.log(r.pts+"/"+r.dts+":"+r.debug)}const p=y},"./src/demux/webworkify-webpack.js":(W,M,x)=>{x.r(M),x.d(M,{default:()=>g});var w=function(){var y=ENTRY_MODULE,C={};function i(n){var u=C[n];if(u!==void 0)return u.exports;var p=C[n]={exports:{}};return y[n].call(p.exports,p,p.exports,i),p.exports}i.m=y,function(){i.n=function(n){var u=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(u,{a:u}),u}}(),function(){i.d=function(n,u){for(var p in u)i.o(u,p)&&!i.o(n,p)&&Object.defineProperty(n,p,{enumerable:!0,get:u[p]})}}(),function(){i.o=function(n,u){return Object.prototype.hasOwnProperty.call(n,u)}}(),function(){i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}();var a=i(ENTRY_MODULE);return a.default||a};w.toString();var _="[\\.|\\-|\\+|\\w|/|@]+",D="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+_+").*?\\)";function h(A){return(A+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function k(A){return!isNaN(1*A)}function S(A,y,C){var i={};i[C]=[];var a=y.toString(),n=a.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)||a.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/);if(!n)return i;for(var u=n[1],p=new RegExp("(\\\\n|\\W)"+h(u)+D,"g"),r;r=p.exec(a);)r[3]!=="dll-reference"&&i[C].push(r[3]);for(p=new RegExp("\\("+h(u)+'\\("(dll-reference\\s('+_+'))"\\)\\)'+D,"g");r=p.exec(a);)A[r[2]]||(i[C].push(r[1]),A[r[2]]=x(r[1]).m),i[r[2]]=i[r[2]]||[],i[r[2]].push(r[4]);for(var t=Object.keys(i),e=0;e<t.length;e++)for(var s=0;s<i[t[e]].length;s++)k(i[t[e]][s])&&(i[t[e]][s]=1*i[t[e]][s]);return i}function v(A){var y=Object.keys(A);return y.reduce(function(C,i){return C||A[i].length>0},!1)}function b(A,y){for(var C={main:[y]},i={main:[]},a={main:{}};v(C);)for(var n=Object.keys(C),u=0;u<n.length;u++){var p=n[u],r=C[p],t=r.pop();if(a[p]=a[p]||{},!(a[p][t]||!A[p][t])){a[p][t]=!0,i[p]=i[p]||[],i[p].push(t);for(var e=S(A,A[p][t],p),s=Object.keys(e),l=0;l<s.length;l++)C[s[l]]=C[s[l]]||[],C[s[l]]=C[s[l]].concat(e[s[l]])}}return i}function m(A,y,C,i){var a=A[i].map(function(u){return'"'+u+'": '+y[i][u].toString()}).join(","),n=w.toString().split("ENTRY_MODULE");return n[0]+"{"+a+"}"+n[1]+'"'+C+'"'+n[2]}function g(A,y){y=y||{};var C={main:x.m},i=y.all?{main:Object.keys(C.main)}:b(C,A),a="";Object.keys(i).filter(function(t){return t!=="main"}).forEach(function(t){for(var e=0;i[t][e];)e++;i[t].push(e),C[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",a=a+("var "+t+" = ("+m(i,C,e,modules)+`)();
`)}),a=a+("(("+m(i,C,A,"main")+")())(self);");var n=new window.Blob([a],{type:"text/javascript"}),u=window.URL||window.webkitURL||window.mozURL||window.msURL,p=u.createObjectURL(n),r=new window.Worker(p);return r.objectURL=p,r}},"./src/errors.ts":(W,M,x)=>{x.r(M),x.d(M,{ErrorDetails:()=>_,ErrorTypes:()=>w});var w;(function(D){D.NETWORK_ERROR="networkError",D.MEDIA_ERROR="mediaError",D.KEY_SYSTEM_ERROR="keySystemError",D.MUX_ERROR="muxError",D.OTHER_ERROR="otherError"})(w||(w={}));var _;(function(D){D.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",D.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",D.KEY_SYSTEM_NO_SESSION="keySystemNoSession",D.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",D.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",D.MANIFEST_LOAD_ERROR="manifestLoadError",D.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",D.MANIFEST_PARSING_ERROR="manifestParsingError",D.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",D.LEVEL_EMPTY_ERROR="levelEmptyError",D.LEVEL_LOAD_ERROR="levelLoadError",D.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",D.LEVEL_SWITCH_ERROR="levelSwitchError",D.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",D.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",D.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",D.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",D.FRAG_LOAD_ERROR="fragLoadError",D.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",D.FRAG_DECRYPT_ERROR="fragDecryptError",D.FRAG_PARSING_ERROR="fragParsingError",D.REMUX_ALLOC_ERROR="remuxAllocError",D.KEY_LOAD_ERROR="keyLoadError",D.KEY_LOAD_TIMEOUT="keyLoadTimeOut",D.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",D.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",D.BUFFER_APPEND_ERROR="bufferAppendError",D.BUFFER_APPENDING_ERROR="bufferAppendingError",D.BUFFER_STALLED_ERROR="bufferStalledError",D.BUFFER_FULL_ERROR="bufferFullError",D.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",D.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",D.INTERNAL_EXCEPTION="internalException",D.INTERNAL_ABORTED="aborted",D.UNKNOWN="unknown"})(_||(_={}))},"./src/events.ts":(W,M,x)=>{x.r(M),x.d(M,{Events:()=>w});var w;(function(_){_.MEDIA_ATTACHING="hlsMediaAttaching",_.MEDIA_ATTACHED="hlsMediaAttached",_.MEDIA_DETACHING="hlsMediaDetaching",_.MEDIA_DETACHED="hlsMediaDetached",_.BUFFER_RESET="hlsBufferReset",_.BUFFER_CODECS="hlsBufferCodecs",_.BUFFER_CREATED="hlsBufferCreated",_.BUFFER_APPENDING="hlsBufferAppending",_.BUFFER_APPENDED="hlsBufferAppended",_.BUFFER_EOS="hlsBufferEos",_.BUFFER_FLUSHING="hlsBufferFlushing",_.BUFFER_FLUSHED="hlsBufferFlushed",_.MANIFEST_LOADING="hlsManifestLoading",_.MANIFEST_LOADED="hlsManifestLoaded",_.MANIFEST_PARSED="hlsManifestParsed",_.LEVEL_SWITCHING="hlsLevelSwitching",_.LEVEL_SWITCHED="hlsLevelSwitched",_.LEVEL_LOADING="hlsLevelLoading",_.LEVEL_LOADED="hlsLevelLoaded",_.LEVEL_UPDATED="hlsLevelUpdated",_.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",_.LEVELS_UPDATED="hlsLevelsUpdated",_.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",_.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",_.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",_.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",_.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",_.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",_.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",_.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",_.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",_.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",_.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",_.CUES_PARSED="hlsCuesParsed",_.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",_.INIT_PTS_FOUND="hlsInitPtsFound",_.FRAG_LOADING="hlsFragLoading",_.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",_.FRAG_LOADED="hlsFragLoaded",_.FRAG_DECRYPTED="hlsFragDecrypted",_.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",_.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",_.FRAG_PARSING_METADATA="hlsFragParsingMetadata",_.FRAG_PARSED="hlsFragParsed",_.FRAG_BUFFERED="hlsFragBuffered",_.FRAG_CHANGED="hlsFragChanged",_.FPS_DROP="hlsFpsDrop",_.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",_.ERROR="hlsError",_.DESTROYING="hlsDestroying",_.KEY_LOADING="hlsKeyLoading",_.KEY_LOADED="hlsKeyLoaded",_.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",_.BACK_BUFFER_REACHED="hlsBackBufferReached"})(w||(w={}))},"./src/hls.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>u});var w=x("./node_modules/url-toolkit/src/url-toolkit.js"),_=x("./src/loader/playlist-loader.ts"),D=x("./src/loader/key-loader.ts"),h=x("./src/controller/id3-track-controller.ts"),k=x("./src/controller/latency-controller.ts"),S=x("./src/controller/level-controller.ts"),v=x("./src/controller/fragment-tracker.ts"),b=x("./src/controller/stream-controller.ts"),m=x("./src/is-supported.ts"),g=x("./src/utils/logger.ts"),A=x("./src/config.ts"),y=x("./node_modules/eventemitter3/index.js"),C=x("./src/events.ts"),i=x("./src/errors.ts");function a(p,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(p,e.key,e)}}function n(p,r,t){return r&&a(p.prototype,r),t&&a(p,t),Object.defineProperty(p,"prototype",{writable:!1}),p}var u=function(){p.isSupported=function(){return(0,m.isSupported)()};function p(t){t===void 0&&(t={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new y.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var e=this.config=(0,A.mergeConfig)(p.DefaultConfig,t);this.userConfig=t,(0,g.enableLogs)(e.debug,"Hls instance"),this._autoLevelCapping=-1,e.progressive&&(0,A.enableStreamingMode)(e);var s=e.abrController,l=e.bufferController,E=e.capLevelController,d=e.fpsController,f=this.abrController=new s(this),c=this.bufferController=new l(this),o=this.capLevelController=new E(this),T=new d(this),L=new _.default(this),R=new D.default(this),B=new h.default(this),O=this.levelController=new S.default(this),K=new v.FragmentTracker(this),G=this.streamController=new b.default(this,K);o.setStreamController(G),T.setStreamController(G);var z=[L,R,O,G];this.networkControllers=z;var Y=[f,c,o,T,B,K];this.audioTrackController=this.createController(e.audioTrackController,null,z),this.createController(e.audioStreamController,K,z),this.subtitleTrackController=this.createController(e.subtitleTrackController,null,z),this.createController(e.subtitleStreamController,K,z),this.createController(e.timelineController,null,Y),this.emeController=this.createController(e.emeController,null,Y),this.cmcdController=this.createController(e.cmcdController,null,Y),this.latencyController=this.createController(k.default,null,Y),this.coreComponents=Y}var r=p.prototype;return r.createController=function(e,s,l){if(e){var E=s?new e(this,s):new e(this);return l&&l.push(E),E}return null},r.on=function(e,s,l){l===void 0&&(l=this),this._emitter.on(e,s,l)},r.once=function(e,s,l){l===void 0&&(l=this),this._emitter.once(e,s,l)},r.removeAllListeners=function(e){this._emitter.removeAllListeners(e)},r.off=function(e,s,l,E){l===void 0&&(l=this),this._emitter.off(e,s,l,E)},r.listeners=function(e){return this._emitter.listeners(e)},r.emit=function(e,s,l){return this._emitter.emit(e,s,l)},r.trigger=function(e,s){if(this.config.debug)return this.emit(e,e,s);try{return this.emit(e,e,s)}catch(l){g.logger.error("An internal error happened while handling event "+e+'. Error message: "'+l.message+'". Here is a stacktrace:',l),this.trigger(C.Events.ERROR,{type:i.ErrorTypes.OTHER_ERROR,details:i.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,error:l})}return!1},r.listenerCount=function(e){return this._emitter.listenerCount(e)},r.destroy=function(){g.logger.log("destroy"),this.trigger(C.Events.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(function(e){return e.destroy()}),this.networkControllers.length=0,this.coreComponents.forEach(function(e){return e.destroy()}),this.coreComponents.length=0},r.attachMedia=function(e){g.logger.log("attachMedia"),this._media=e,this.trigger(C.Events.MEDIA_ATTACHING,{media:e})},r.detachMedia=function(){g.logger.log("detachMedia"),this.trigger(C.Events.MEDIA_DETACHING,void 0),this._media=null},r.loadSource=function(e){this.stopLoad();var s=this.media,l=this.url,E=this.url=w.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});g.logger.log("loadSource:"+E),s&&l&&l!==E&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(s)),this.trigger(C.Events.MANIFEST_LOADING,{url:e})},r.startLoad=function(e){e===void 0&&(e=-1),g.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(s){s.startLoad(e)})},r.stopLoad=function(){g.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})},r.swapAudioCodec=function(){g.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},r.recoverMediaError=function(){g.logger.log("recoverMediaError");var e=this._media;this.detachMedia(),e&&this.attachMedia(e)},r.removeLevel=function(e,s){s===void 0&&(s=0),this.levelController.removeLevel(e,s)},n(p,[{key:"levels",get:function(){var e=this.levelController.levels;return e||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){g.logger.log("set currentLevel:"+e),this.loadLevel=e,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){g.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){g.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){g.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){g.logger.log("set startLevel:"+e),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(e){var s=!!e;s!==this.config.capLevelToPlayerSize&&(s?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=s)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){this._autoLevelCapping!==e&&(g.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e)}},{key:"bandwidthEstimate",get:function(){var e=this.abrController.bwEstimator;return e?e.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var e=this.levels,s=this.config.minAutoBitrate;if(!e)return 0;for(var l=e.length,E=0;E<l;E++)if(e[E].maxBitrate>=s)return E;return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,s=this.autoLevelCapping,l;return s===-1&&e&&e.length?l=e.length-1:l=s,l}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"playingDate",get:function(){return this.streamController.currentProgramDateTime}},{key:"mainForwardBufferInfo",get:function(){return this.streamController.getMainFwdBufferInfo()}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var s=this.audioTrackController;s&&(s.audioTrack=e)}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var s=this.subtitleTrackController;s&&(s.subtitleTrack=e)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return e?e.subtitleDisplay:!1},set:function(e){var s=this.subtitleTrackController;s&&(s.subtitleDisplay=e)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(e){this.config.lowLatencyMode=e}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.2.7"}},{key:"Events",get:function(){return C.Events}},{key:"ErrorTypes",get:function(){return i.ErrorTypes}},{key:"ErrorDetails",get:function(){return i.ErrorDetails}},{key:"DefaultConfig",get:function(){return p.defaultConfig?p.defaultConfig:A.hlsDefaultConfig},set:function(e){p.defaultConfig=e}}]),p}();u.defaultConfig=void 0},"./src/is-supported.ts":(W,M,x)=>{x.r(M),x.d(M,{changeTypeSupported:()=>h,isSupported:()=>D});var w=x("./src/utils/mediasource-helper.ts");function _(){return self.SourceBuffer||self.WebKitSourceBuffer}function D(){var k=(0,w.getMediaSource)();if(!k)return!1;var S=_(),v=k&&typeof k.isTypeSupported=="function"&&k.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),b=!S||S.prototype&&typeof S.prototype.appendBuffer=="function"&&typeof S.prototype.remove=="function";return!!v&&!!b}function h(){var k,S=_();return typeof(S==null||(k=S.prototype)===null||k===void 0?void 0:k.changeType)=="function"}},"./src/loader/date-range.ts":(W,M,x)=>{x.r(M),x.d(M,{DateRange:()=>b,DateRangeAttribute:()=>v});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/attr-list.ts"),D=x("./src/utils/logger.ts");function h(){return h=Object.assign?Object.assign.bind():function(m){for(var g=1;g<arguments.length;g++){var A=arguments[g];for(var y in A)Object.prototype.hasOwnProperty.call(A,y)&&(m[y]=A[y])}return m},h.apply(this,arguments)}function k(m,g){for(var A=0;A<g.length;A++){var y=g[A];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}function S(m,g,A){return g&&k(m.prototype,g),A&&k(m,A),Object.defineProperty(m,"prototype",{writable:!1}),m}var v;(function(m){m.ID="ID",m.CLASS="CLASS",m.START_DATE="START-DATE",m.DURATION="DURATION",m.END_DATE="END-DATE",m.END_ON_NEXT="END-ON-NEXT",m.PLANNED_DURATION="PLANNED-DURATION",m.SCTE35_OUT="SCTE35-OUT",m.SCTE35_IN="SCTE35-IN"})(v||(v={}));var b=function(){function m(g,A){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,A){var y=A.attr;for(var C in y)if(Object.prototype.hasOwnProperty.call(g,C)&&g[C]!==y[C]){D.logger.warn('DATERANGE tag attribute: "'+C+'" does not match for tags with ID: "'+g.ID+'"'),this._badValueForSameId=C;break}g=h(new _.AttrList({}),y,g)}if(this.attr=g,this._startDate=new Date(g[v.START_DATE]),v.END_DATE in this.attr){var i=new Date(this.attr[v.END_DATE]);(0,w.isFiniteNumber)(i.getTime())&&(this._endDate=i)}}return S(m,[{key:"id",get:function(){return this.attr.ID}},{key:"class",get:function(){return this.attr.CLASS}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){if(this._endDate)return this._endDate;var A=this.duration;return A!==null?new Date(this._startDate.getTime()+A*1e3):null}},{key:"duration",get:function(){if(v.DURATION in this.attr){var A=this.attr.decimalFloatingPoint(v.DURATION);if((0,w.isFiniteNumber)(A))return A}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}},{key:"plannedDuration",get:function(){return v.PLANNED_DURATION in this.attr?this.attr.decimalFloatingPoint(v.PLANNED_DURATION):null}},{key:"endOnNext",get:function(){return this.attr.bool(v.END_ON_NEXT)}},{key:"isValid",get:function(){return!!this.id&&!this._badValueForSameId&&(0,w.isFiniteNumber)(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}]),m}()},"./src/loader/fragment-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{LoadError:()=>C,default:()=>A});var w=x("./src/polyfills/number.ts"),_=x("./src/errors.ts");function D(i,a){i.prototype=Object.create(a.prototype),i.prototype.constructor=i,b(i,a)}function h(i){var a=typeof Map=="function"?new Map:void 0;return h=function(u){if(u===null||!v(u))return u;if(typeof u!="function")throw new TypeError("Super expression must either be null or a function");if(typeof a<"u"){if(a.has(u))return a.get(u);a.set(u,p)}function p(){return k(u,arguments,m(this).constructor)}return p.prototype=Object.create(u.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),b(p,u)},h(i)}function k(i,a,n){return S()?k=Reflect.construct.bind():k=function(p,r,t){var e=[null];e.push.apply(e,r);var s=Function.bind.apply(p,e),l=new s;return t&&b(l,t.prototype),l},k.apply(null,arguments)}function S(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function b(i,a){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,p){return u.__proto__=p,u},b(i,a)}function m(i){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},m(i)}var g=Math.pow(2,17),A=function(){function i(n){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=n}var a=i.prototype;return a.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},a.abort=function(){this.loader&&this.loader.abort()},a.load=function(u,p){var r=this,t=u.url;if(!t)return Promise.reject(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:u,networkDetails:null},"Fragment does not have a "+(t?"part list":"url")));this.abort();var e=this.config,s=e.fLoader,l=e.loader;return new Promise(function(E,d){r.loader&&r.loader.destroy();var f=r.loader=u.loader=s?new s(e):new l(e),c=y(u),o={timeout:e.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:e.fragLoadingMaxRetryTimeout,highWaterMark:u.sn==="initSegment"?1/0:g};u.stats=f.stats,f.load(c,o,{onSuccess:function(L,R,B,O){r.resetLoader(u,f),E({frag:u,part:null,payload:L.data,networkDetails:O})},onError:function(L,R,B){r.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:u,response:L,networkDetails:B}))},onAbort:function(L,R,B){r.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:u,networkDetails:B}))},onTimeout:function(L,R,B){r.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:u,networkDetails:B}))},onProgress:function(L,R,B,O){p&&p({frag:u,part:null,payload:B,networkDetails:O})}})})},a.loadPart=function(u,p,r){var t=this;this.abort();var e=this.config,s=e.fLoader,l=e.loader;return new Promise(function(E,d){t.loader&&t.loader.destroy();var f=t.loader=u.loader=s?new s(e):new l(e),c=y(u,p),o={timeout:e.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:e.fragLoadingMaxRetryTimeout,highWaterMark:g};p.stats=f.stats,f.load(c,o,{onSuccess:function(L,R,B,O){t.resetLoader(u,f),t.updateStatsFromPart(u,p);var K={frag:u,part:p,payload:L.data,networkDetails:O};r(K),E(K)},onError:function(L,R,B){t.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:u,part:p,response:L,networkDetails:B}))},onAbort:function(L,R,B){u.stats.aborted=p.stats.aborted,t.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:u,part:p,networkDetails:B}))},onTimeout:function(L,R,B){t.resetLoader(u,f),d(new C({type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:u,part:p,networkDetails:B}))}})})},a.updateStatsFromPart=function(u,p){var r=u.stats,t=p.stats,e=t.total;if(r.loaded+=t.loaded,e){var s=Math.round(u.duration/p.duration),l=Math.min(Math.round(r.loaded/e),s),E=s-l,d=E*Math.round(r.loaded/l);r.total=r.loaded+d}else r.total=Math.max(r.loaded,r.total);var f=r.loading,c=t.loading;f.start?f.first+=c.first-c.start:(f.start=c.start,f.first=c.first),f.end=c.end},a.resetLoader=function(u,p){u.loader=null,this.loader===p&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),p.destroy()},i}();function y(i,a){a===void 0&&(a=null);var n=a||i,u={frag:i,part:a,responseType:"arraybuffer",url:n.url,headers:{},rangeStart:0,rangeEnd:0},p=n.byteRangeStartOffset,r=n.byteRangeEndOffset;return(0,w.isFiniteNumber)(p)&&(0,w.isFiniteNumber)(r)&&(u.rangeStart=p,u.rangeEnd=r),u}var C=function(i){D(a,i);function a(n){for(var u,p=arguments.length,r=new Array(p>1?p-1:0),t=1;t<p;t++)r[t-1]=arguments[t];return u=i.call.apply(i,[this].concat(r))||this,u.data=void 0,u.data=n,u}return a}(h(Error))},"./src/loader/fragment.ts":(W,M,x)=>{x.r(M),x.d(M,{BaseSegment:()=>A,ElementaryStreamTypes:()=>g,Fragment:()=>y,Part:()=>C});var w=x("./src/polyfills/number.ts"),_=x("./node_modules/url-toolkit/src/url-toolkit.js"),D=x("./src/utils/logger.ts"),h=x("./src/loader/level-key.ts"),k=x("./src/loader/load-stats.ts");function S(i,a){i.prototype=Object.create(a.prototype),i.prototype.constructor=i,v(i,a)}function v(i,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,p){return u.__proto__=p,u},v(i,a)}function b(i,a){for(var n=0;n<a.length;n++){var u=a[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function m(i,a,n){return a&&b(i.prototype,a),n&&b(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}var g;(function(i){i.AUDIO="audio",i.VIDEO="video",i.AUDIOVIDEO="audiovideo"})(g||(g={}));var A=function(){function i(n){var u;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=(u={},u[g.AUDIO]=null,u[g.VIDEO]=null,u[g.AUDIOVIDEO]=null,u),this.baseurl=n}var a=i.prototype;return a.setByteRange=function(u,p){var r=u.split("@",2),t=[];r.length===1?t[0]=p?p.byteRangeEndOffset:0:t[0]=parseInt(r[1]),t[1]=parseInt(r[0])+t[0],this._byteRange=t},m(i,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=(0,_.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(u){this._url=u}}]),i}(),y=function(i){S(a,i);function a(u,p){var r;return r=i.call(this,p)||this,r._decryptdata=null,r.rawProgramDateTime=null,r.programDateTime=null,r.tagList=[],r.duration=0,r.sn=0,r.levelkey=void 0,r.type=void 0,r.loader=null,r.level=-1,r.cc=0,r.startPTS=void 0,r.endPTS=void 0,r.appendedPTS=void 0,r.startDTS=void 0,r.endDTS=void 0,r.start=0,r.deltaPTS=void 0,r.maxStartPTS=void 0,r.minEndPTS=void 0,r.stats=new k.LoadStats,r.urlId=0,r.data=void 0,r.bitrateTest=!1,r.title=null,r.initSegment=null,r.type=u,r}var n=a.prototype;return n.createInitializationVector=function(p){for(var r=new Uint8Array(16),t=12;t<16;t++)r[t]=p>>8*(15-t)&255;return r},n.setDecryptDataFromLevelKey=function(p,r){var t=p;return(p==null?void 0:p.method)==="AES-128"&&p.uri&&!p.iv&&(t=h.LevelKey.fromURI(p.uri),t.method=p.method,t.iv=this.createInitializationVector(r),t.keyFormat="identity"),t},n.setElementaryStreamInfo=function(p,r,t,e,s,l){l===void 0&&(l=!1);var E=this.elementaryStreams,d=E[p];if(!d){E[p]={startPTS:r,endPTS:t,startDTS:e,endDTS:s,partial:l};return}d.startPTS=Math.min(d.startPTS,r),d.endPTS=Math.max(d.endPTS,t),d.startDTS=Math.min(d.startDTS,e),d.endDTS=Math.max(d.endDTS,s)},n.clearElementaryStreamInfo=function(){var p=this.elementaryStreams;p[g.AUDIO]=null,p[g.VIDEO]=null,p[g.AUDIOVIDEO]=null},m(a,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var p=this.sn;typeof p!="number"&&(this.levelkey&&this.levelkey.method==="AES-128"&&!this.levelkey.iv&&D.logger.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),p=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,p)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(this.programDateTime===null||!(0,w.isFiniteNumber)(this.programDateTime))return null;var p=(0,w.isFiniteNumber)(this.duration)?this.duration:0;return this.programDateTime+p*1e3}},{key:"encrypted",get:function(){var p;return!!((p=this.decryptdata)!==null&&p!==void 0&&p.keyFormat&&this.decryptdata.uri)}}]),a}(A),C=function(i){S(a,i);function a(n,u,p,r,t){var e;e=i.call(this,p)||this,e.fragOffset=0,e.duration=0,e.gap=!1,e.independent=!1,e.relurl=void 0,e.fragment=void 0,e.index=void 0,e.stats=new k.LoadStats,e.duration=n.decimalFloatingPoint("DURATION"),e.gap=n.bool("GAP"),e.independent=n.bool("INDEPENDENT"),e.relurl=n.enumeratedString("URI"),e.fragment=u,e.index=r;var s=n.enumeratedString("BYTERANGE");return s&&e.setByteRange(s,t),t&&(e.fragOffset=t.fragOffset+t.duration),e}return m(a,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var u=this.elementaryStreams;return!!(u.audio||u.video||u.audiovideo)}}]),a}(A)},"./src/loader/key-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>h});var w=x("./src/events.ts"),_=x("./src/errors.ts"),D=x("./src/utils/logger.ts"),h=function(){function k(v){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=v,this.registerListeners()}var S=k.prototype;return S.startLoad=function(b){},S.stopLoad=function(){this.destroyInternalLoaders()},S.registerListeners=function(){this.hls.on(w.Events.KEY_LOADING,this.onKeyLoading,this)},S.unregisterListeners=function(){this.hls.off(w.Events.KEY_LOADING,this.onKeyLoading)},S.destroyInternalLoaders=function(){for(var b in this.loaders){var m=this.loaders[b];m&&m.destroy()}this.loaders={}},S.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},S.onKeyLoading=function(b,m){var g=m.frag,A=g.type,y=this.loaders[A];if(!g.decryptdata){D.logger.warn("Missing decryption data on fragment in onKeyLoading");return}var C=g.decryptdata.uri;if(C!==this.decrypturl||this.decryptkey===null){var i=this.hls.config;if(y&&(D.logger.warn("abort previous key loader for type:"+A),y.abort()),!C){D.logger.warn("key uri is falsy");return}var a=i.loader,n=g.loader=this.loaders[A]=new a(i);this.decrypturl=C,this.decryptkey=null;var u={url:C,frag:g,responseType:"arraybuffer"},p={timeout:i.fragLoadingTimeOut,maxRetry:0,retryDelay:i.fragLoadingRetryDelay,maxRetryDelay:i.fragLoadingMaxRetryTimeout,highWaterMark:0},r={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};n.load(u,p,r)}else this.decryptkey&&(g.decryptdata.key=this.decryptkey,this.hls.trigger(w.Events.KEY_LOADED,{frag:g}))},S.loadsuccess=function(b,m,g){var A=g.frag;if(!A.decryptdata){D.logger.error("after key load, decryptdata unset");return}this.decryptkey=A.decryptdata.key=new Uint8Array(b.data),A.loader=null,delete this.loaders[A.type],this.hls.trigger(w.Events.KEY_LOADED,{frag:A})},S.loaderror=function(b,m){var g=m.frag,A=g.loader;A&&A.abort(),delete this.loaders[g.type],this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:g,response:b})},S.loadtimeout=function(b,m){var g=m.frag,A=g.loader;A&&A.abort(),delete this.loaders[g.type],this.hls.trigger(w.Events.ERROR,{type:_.ErrorTypes.NETWORK_ERROR,details:_.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:g})},k}()},"./src/loader/level-details.ts":(W,M,x)=>{x.r(M),x.d(M,{LevelDetails:()=>k});var w=x("./src/polyfills/number.ts");function _(S,v){for(var b=0;b<v.length;b++){var m=v[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(S,m.key,m)}}function D(S,v,b){return v&&_(S.prototype,v),b&&_(S,b),Object.defineProperty(S,"prototype",{writable:!1}),S}var h=10,k=function(){function S(b){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.dateRanges={},this.url=b}var v=S.prototype;return v.reloaded=function(m){if(!m){this.advanced=!0,this.updated=!0;return}var g=this.lastPartSn-m.lastPartSn,A=this.lastPartIndex-m.lastPartIndex;this.updated=this.endSN!==m.endSN||!!A||!!g,this.advanced=this.endSN>m.endSN||g>0||g===0&&A>0,this.updated||this.advanced?this.misses=Math.floor(m.misses*.6):this.misses=m.misses+1,this.availabilityDelay=m.availabilityDelay},D(S,[{key:"hasProgramDateTime",get:function(){return this.fragments.length?(0,w.isFiniteNumber)(this.fragments[this.fragments.length-1].programDateTime):!1}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||h}},{key:"drift",get:function(){var m=this.driftEndTime-this.driftStartTime;if(m>0){var g=this.driftEnd-this.driftStart;return g*1e3/m}return 1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var m;return(m=this.fragments)!==null&&m!==void 0&&m.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var m;return(m=this.partList)!==null&&m!==void 0&&m.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),S}()},"./src/loader/level-key.ts":(W,M,x)=>{x.r(M),x.d(M,{LevelKey:()=>h});var w=x("./node_modules/url-toolkit/src/url-toolkit.js");function _(k,S){for(var v=0;v<S.length;v++){var b=S[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(k,b.key,b)}}function D(k,S,v){return S&&_(k.prototype,S),v&&_(k,v),Object.defineProperty(k,"prototype",{writable:!1}),k}var h=function(){k.fromURL=function(v,b){return new k(v,b)},k.fromURI=function(v){return new k(v)};function k(S,v){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,v?this._uri=(0,w.buildAbsoluteURL)(S,v,{alwaysNormalize:!0}):this._uri=S}return D(k,[{key:"uri",get:function(){return this._uri}}]),k}()},"./src/loader/load-stats.ts":(W,M,x)=>{x.r(M),x.d(M,{LoadStats:()=>w});var w=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},"./src/loader/m3u8-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>n});var w=x("./src/polyfills/number.ts"),_=x("./node_modules/url-toolkit/src/url-toolkit.js"),D=x("./src/loader/date-range.ts"),h=x("./src/loader/fragment.ts"),k=x("./src/loader/level-details.ts"),S=x("./src/loader/level-key.ts"),v=x("./src/utils/attr-list.ts"),b=x("./src/utils/logger.ts"),m=x("./src/utils/codecs.ts"),g=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,A=/#EXT-X-MEDIA:(.*)/g,y=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),C=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),i=/\.(mp4|m4s|m4v|m4a)$/i;function a(s){var l,E;return i.test((l=(E=_.parseURL(s))===null||E===void 0?void 0:E.path)!=null?l:"")}var n=function(){function s(){}return s.findGroup=function(E,d){for(var f=0;f<E.length;f++){var c=E[f];if(c.id===d)return c}},s.convertAVC1ToAVCOTI=function(E){var d=E.split(".");if(d.length>2){var f=d.shift()+".";return f+=parseInt(d.shift()).toString(16),f+=("000"+parseInt(d.shift()).toString(16)).slice(-4),f}return E},s.resolve=function(E,d){return _.buildAbsoluteURL(d,E,{alwaysNormalize:!0})},s.parseMasterPlaylist=function(E,d){var f=[],c=[],o={},T=!1;g.lastIndex=0;for(var L;(L=g.exec(E))!=null;)if(L[1]){var R,B=new v.AttrList(L[1]),O={attrs:B,bitrate:B.decimalInteger("AVERAGE-BANDWIDTH")||B.decimalInteger("BANDWIDTH"),name:B.NAME,url:s.resolve(L[2],d)},K=B.decimalResolution("RESOLUTION");K&&(O.width=K.width,O.height=K.height),u((B.CODECS||"").split(/[ ,]+/).filter(function(Y){return Y}),O),O.videoCodec&&O.videoCodec.indexOf("avc1")!==-1&&(O.videoCodec=s.convertAVC1ToAVCOTI(O.videoCodec)),(R=O.unknownCodecs)!==null&&R!==void 0&&R.length||c.push(O),f.push(O)}else if(L[3]){var G=new v.AttrList(L[3]);G["DATA-ID"]&&(T=!0,o[G["DATA-ID"]]=G)}var z=c.length>0&&c.length<f.length;return{levels:z?c:f,sessionData:T?o:null}},s.parseMasterPlaylistMedia=function(E,d,f,c){c===void 0&&(c=[]);var o,T=[],L=0;for(A.lastIndex=0;(o=A.exec(E))!==null;){var R=new v.AttrList(o[1]);if(R.TYPE===f){var B={attrs:R,bitrate:0,id:L++,groupId:R["GROUP-ID"],instreamId:R["INSTREAM-ID"],name:R.NAME||R.LANGUAGE||"",type:f,default:R.bool("DEFAULT"),autoselect:R.bool("AUTOSELECT"),forced:R.bool("FORCED"),lang:R.LANGUAGE,url:R.URI?s.resolve(R.URI,d):""};if(c.length){var O=s.findGroup(c,B.groupId)||c[0];p(B,O,"audioCodec"),p(B,O,"textCodec")}T.push(B)}}return T},s.parseLevelPlaylist=function(E,d,f,c,o){var T=new k.LevelDetails(d),L=T.fragments,R=null,B=0,O=0,K=0,G=0,z=null,Y=new h.Fragment(c,d),V,X,Z,$=-1,ee=!1;for(y.lastIndex=0,T.m3u8=E;(V=y.exec(E))!==null;){ee&&(ee=!1,Y=new h.Fragment(c,d),Y.start=K,Y.sn=B,Y.cc=G,Y.level=f,R&&(Y.initSegment=R,Y.rawProgramDateTime=R.rawProgramDateTime,R.rawProgramDateTime=null));var ae=V[1];if(ae){Y.duration=parseFloat(ae);var ne=(" "+V[2]).slice(1);Y.title=ne||null,Y.tagList.push(ne?["INF",ae,ne]:["INF",ae])}else if(V[3])(0,w.isFiniteNumber)(Y.duration)&&(Y.start=K,Z&&(Y.levelkey=Z),Y.sn=B,Y.level=f,Y.cc=G,Y.urlId=o,L.push(Y),Y.relurl=(" "+V[3]).slice(1),t(Y,z),z=Y,K+=Y.duration,B++,O=0,ee=!0);else if(V[4]){var oe=(" "+V[4]).slice(1);z?Y.setByteRange(oe,z):Y.setByteRange(oe)}else if(V[5])Y.rawProgramDateTime=(" "+V[5]).slice(1),Y.tagList.push(["PROGRAM-DATE-TIME",Y.rawProgramDateTime]),$===-1&&($=L.length);else{if(V=V[0].match(C),!V){b.logger.warn("No matches on slow regex match for level playlist!");continue}for(X=1;X<V.length&&!(typeof V[X]<"u");X++);var se=(" "+V[X]).slice(1),te=(" "+V[X+1]).slice(1),ie=V[X+2]?(" "+V[X+2]).slice(1):"";switch(se){case"PLAYLIST-TYPE":T.type=te.toUpperCase();break;case"MEDIA-SEQUENCE":B=T.startSN=parseInt(te);break;case"SKIP":{var ue=new v.AttrList(te),de=ue.decimalInteger("SKIPPED-SEGMENTS");if((0,w.isFiniteNumber)(de)){T.skippedSegments=de;for(var ce=de;ce--;)L.unshift(null);B+=de}var be=ue.enumeratedString("RECENTLY-REMOVED-DATERANGES");be&&(T.recentlyRemovedDateranges=be.split("	"));break}case"TARGETDURATION":T.targetduration=parseFloat(te);break;case"VERSION":T.version=parseInt(te);break;case"EXTM3U":break;case"ENDLIST":T.live=!1;break;case"#":(te||ie)&&Y.tagList.push(ie?[te,ie]:[te]);break;case"DISCONTINUITY":G++,Y.tagList.push(["DIS"]);break;case"GAP":Y.tagList.push([se]);break;case"BITRATE":Y.tagList.push([se,te]);break;case"DATERANGE":{var he=new v.AttrList(te),Le=new D.DateRange(he,T.dateRanges[he.ID]);Le.isValid||T.skippedSegments?T.dateRanges[Le.id]=Le:b.logger.warn('Ignoring invalid DATERANGE tag: "'+te+'"'),Y.tagList.push(["EXT-X-DATERANGE",te]);break}case"DISCONTINUITY-SEQUENCE":G=parseInt(te);break;case"KEY":{var xe,ye=new v.AttrList(te),Se=ye.enumeratedString("METHOD"),De=ye.URI,Re=ye.hexadecimalInteger("IV"),ke=ye.enumeratedString("KEYFORMATVERSIONS"),Ie=ye.enumeratedString("KEYID"),Oe=(xe=ye.enumeratedString("KEYFORMAT"))!=null?xe:"identity",we=["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"];if(we.indexOf(Oe)>-1){b.logger.warn("Keyformat "+Oe+" is not supported from the manifest");continue}else if(Oe!=="identity")continue;Se&&(Z=S.LevelKey.fromURL(d,De),De&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(Se)>=0&&(Z.method=Se,Z.keyFormat=Oe,Ie&&(Z.keyID=Ie),ke&&(Z.keyFormatVersions=ke),Z.iv=Re));break}case"START":{var Ne=new v.AttrList(te),Ae=Ne.decimalFloatingPoint("TIME-OFFSET");(0,w.isFiniteNumber)(Ae)&&(T.startTimeOffset=Ae);break}case"MAP":{var Ce=new v.AttrList(te);if(Y.duration){var Pe=new h.Fragment(c,d);e(Pe,Ce,f,Z),R=Pe,Y.initSegment=R,R.rawProgramDateTime&&!Y.rawProgramDateTime&&(Y.rawProgramDateTime=R.rawProgramDateTime)}else e(Y,Ce,f,Z),R=Y,ee=!0;break}case"SERVER-CONTROL":{var me=new v.AttrList(te);T.canBlockReload=me.bool("CAN-BLOCK-RELOAD"),T.canSkipUntil=me.optionalFloat("CAN-SKIP-UNTIL",0),T.canSkipDateRanges=T.canSkipUntil>0&&me.bool("CAN-SKIP-DATERANGES"),T.partHoldBack=me.optionalFloat("PART-HOLD-BACK",0),T.holdBack=me.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{var Te=new v.AttrList(te);T.partTarget=Te.decimalFloatingPoint("PART-TARGET");break}case"PART":{var ve=T.partList;ve||(ve=T.partList=[]);var je=O>0?ve[ve.length-1]:void 0,ze=O++,Ye=new h.Part(new v.AttrList(te),Y,d,ze,je);ve.push(Ye),Y.duration+=Ye.duration;break}case"PRELOAD-HINT":{var Fe=new v.AttrList(te);T.preloadHint=Fe;break}case"RENDITION-REPORT":{var rt=new v.AttrList(te);T.renditionReports=T.renditionReports||[],T.renditionReports.push(rt);break}default:b.logger.warn("line parsed but not handled: "+V);break}}}z&&!z.relurl?(L.pop(),K-=z.duration,T.partList&&(T.fragmentHint=z)):T.partList&&(t(Y,z),Y.cc=G,T.fragmentHint=Y);var Ke=L.length,We=L[0],qe=L[Ke-1];if(K+=T.skippedSegments*T.targetduration,K>0&&Ke&&qe){T.averagetargetduration=K/Ke;var Ve=qe.sn;T.endSN=Ve!=="initSegment"?Ve:0,We&&(T.startCC=We.cc,We.initSegment||T.fragments.every(function(at){return at.relurl&&a(at.relurl)})&&(b.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),Y=new h.Fragment(c,d),Y.relurl=qe.relurl,Y.level=f,Y.sn="initSegment",We.initSegment=Y,T.needSidxRanges=!0))}else T.endSN=0,T.startCC=0;return T.fragmentHint&&(K+=T.fragmentHint.duration),T.totalduration=K,T.endCC=G,$>0&&r(L,$),T},s}();function u(s,l){["video","audio","text"].forEach(function(E){var d=s.filter(function(c){return(0,m.isCodecType)(c,E)});if(d.length){var f=d.filter(function(c){return c.lastIndexOf("avc1",0)===0||c.lastIndexOf("mp4a",0)===0});l[E+"Codec"]=f.length>0?f[0]:d[0],s=s.filter(function(c){return d.indexOf(c)===-1})}}),l.unknownCodecs=s}function p(s,l,E){var d=l[E];d&&(s[E]=d)}function r(s,l){for(var E=s[l],d=l;d--;){var f=s[d];if(!f)return;f.programDateTime=E.programDateTime-f.duration*1e3,E=f}}function t(s,l){s.rawProgramDateTime?s.programDateTime=Date.parse(s.rawProgramDateTime):l!=null&&l.programDateTime&&(s.programDateTime=l.endProgramDateTime),(0,w.isFiniteNumber)(s.programDateTime)||(s.programDateTime=null,s.rawProgramDateTime=null)}function e(s,l,E,d){s.relurl=l.URI,l.BYTERANGE&&s.setByteRange(l.BYTERANGE),s.level=E,s.sn="initSegment",d&&(s.levelkey=d),s.initSegment=null}},"./src/loader/playlist-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/events.ts"),D=x("./src/errors.ts"),h=x("./src/utils/logger.ts"),k=x("./src/utils/mp4-tools.ts"),S=x("./src/loader/m3u8-parser.ts"),v=x("./src/types/loader.ts"),b=x("./src/utils/attr-list.ts");function m(C){var i=C.type;switch(i){case v.PlaylistContextType.AUDIO_TRACK:return v.PlaylistLevelType.AUDIO;case v.PlaylistContextType.SUBTITLE_TRACK:return v.PlaylistLevelType.SUBTITLE;default:return v.PlaylistLevelType.MAIN}}function g(C,i){var a=C.url;return(a===void 0||a.indexOf("data:")===0)&&(a=i.url),a}var A=function(){function C(a){this.hls=void 0,this.loaders=Object.create(null),this.hls=a,this.registerListeners()}var i=C.prototype;return i.startLoad=function(n){},i.stopLoad=function(){this.destroyInternalLoaders()},i.registerListeners=function(){var n=this.hls;n.on(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.on(_.Events.LEVEL_LOADING,this.onLevelLoading,this),n.on(_.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),n.on(_.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},i.unregisterListeners=function(){var n=this.hls;n.off(_.Events.MANIFEST_LOADING,this.onManifestLoading,this),n.off(_.Events.LEVEL_LOADING,this.onLevelLoading,this),n.off(_.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),n.off(_.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},i.createInternalLoader=function(n){var u=this.hls.config,p=u.pLoader,r=u.loader,t=p||r,e=new t(u);return n.loader=e,this.loaders[n.type]=e,e},i.getInternalLoader=function(n){return this.loaders[n.type]},i.resetInternalLoader=function(n){this.loaders[n]&&delete this.loaders[n]},i.destroyInternalLoaders=function(){for(var n in this.loaders){var u=this.loaders[n];u&&u.destroy(),this.resetInternalLoader(n)}},i.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},i.onManifestLoading=function(n,u){var p=u.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:v.PlaylistContextType.MANIFEST,url:p,deliveryDirectives:null})},i.onLevelLoading=function(n,u){var p=u.id,r=u.level,t=u.url,e=u.deliveryDirectives;this.load({id:p,groupId:null,level:r,responseType:"text",type:v.PlaylistContextType.LEVEL,url:t,deliveryDirectives:e})},i.onAudioTrackLoading=function(n,u){var p=u.id,r=u.groupId,t=u.url,e=u.deliveryDirectives;this.load({id:p,groupId:r,level:null,responseType:"text",type:v.PlaylistContextType.AUDIO_TRACK,url:t,deliveryDirectives:e})},i.onSubtitleTrackLoading=function(n,u){var p=u.id,r=u.groupId,t=u.url,e=u.deliveryDirectives;this.load({id:p,groupId:r,level:null,responseType:"text",type:v.PlaylistContextType.SUBTITLE_TRACK,url:t,deliveryDirectives:e})},i.load=function(n){var u,p=this.hls.config,r=this.getInternalLoader(n);if(r){var t=r.context;if(t&&t.url===n.url){h.logger.trace("[playlist-loader]: playlist request ongoing");return}h.logger.log("[playlist-loader]: aborting previous loader for type: "+n.type),r.abort()}var e,s,l,E;switch(n.type){case v.PlaylistContextType.MANIFEST:e=p.manifestLoadingMaxRetry,s=p.manifestLoadingTimeOut,l=p.manifestLoadingRetryDelay,E=p.manifestLoadingMaxRetryTimeout;break;case v.PlaylistContextType.LEVEL:case v.PlaylistContextType.AUDIO_TRACK:case v.PlaylistContextType.SUBTITLE_TRACK:e=0,s=p.levelLoadingTimeOut;break;default:e=p.levelLoadingMaxRetry,s=p.levelLoadingTimeOut,l=p.levelLoadingRetryDelay,E=p.levelLoadingMaxRetryTimeout;break}if(r=this.createInternalLoader(n),(u=n.deliveryDirectives)!==null&&u!==void 0&&u.part){var d;if(n.type===v.PlaylistContextType.LEVEL&&n.level!==null?d=this.hls.levels[n.level].details:n.type===v.PlaylistContextType.AUDIO_TRACK&&n.id!==null?d=this.hls.audioTracks[n.id].details:n.type===v.PlaylistContextType.SUBTITLE_TRACK&&n.id!==null&&(d=this.hls.subtitleTracks[n.id].details),d){var f=d.partTarget,c=d.targetduration;f&&c&&(s=Math.min(Math.max(f*3,c*.8)*1e3,s))}}var o={timeout:s,maxRetry:e,retryDelay:l,maxRetryDelay:E,highWaterMark:0},T={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};r.load(n,o,T)},i.loadsuccess=function(n,u,p,r){if(r===void 0&&(r=null),p.isSidxRequest){this.handleSidxRequest(n,p),this.handlePlaylistLoaded(n,u,p,r);return}this.resetInternalLoader(p.type);var t=n.data;if(t.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(n,p,"no EXTM3U delimiter",r);return}u.parsing.start=performance.now(),t.indexOf("#EXTINF:")>0||t.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(n,u,p,r):this.handleMasterPlaylist(n,u,p,r)},i.loaderror=function(n,u,p){p===void 0&&(p=null),this.handleNetworkError(u,p,!1,n)},i.loadtimeout=function(n,u,p){p===void 0&&(p=null),this.handleNetworkError(u,p,!0)},i.handleMasterPlaylist=function(n,u,p,r){var t=this.hls,e=n.data,s=g(n,p),l=S.default.parseMasterPlaylist(e,s),E=l.levels,d=l.sessionData;if(!E.length){this.handleManifestParsingError(n,p,"no level found in manifest",r);return}var f=E.map(function(B){return{id:B.attrs.AUDIO,audioCodec:B.audioCodec}}),c=E.map(function(B){return{id:B.attrs.SUBTITLES,textCodec:B.textCodec}}),o=S.default.parseMasterPlaylistMedia(e,s,"AUDIO",f),T=S.default.parseMasterPlaylistMedia(e,s,"SUBTITLES",c),L=S.default.parseMasterPlaylistMedia(e,s,"CLOSED-CAPTIONS");if(o.length){var R=o.some(function(B){return!B.url});!R&&E[0].audioCodec&&!E[0].attrs.AUDIO&&(h.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),o.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new b.AttrList({}),bitrate:0,url:""}))}t.trigger(_.Events.MANIFEST_LOADED,{levels:E,audioTracks:o,subtitles:T,captions:L,url:s,stats:u,networkDetails:r,sessionData:d})},i.handleTrackOrLevelPlaylist=function(n,u,p,r){var t=this.hls,e=p.id,s=p.level,l=p.type,E=g(n,p),d=(0,w.isFiniteNumber)(e)?e:0,f=(0,w.isFiniteNumber)(s)?s:d,c=m(p),o=S.default.parseLevelPlaylist(n.data,E,f,c,d);if(!o.fragments.length){t.trigger(_.Events.ERROR,{type:D.ErrorTypes.NETWORK_ERROR,details:D.ErrorDetails.LEVEL_EMPTY_ERROR,fatal:!1,url:E,reason:"no fragments found in level",level:typeof p.level=="number"?p.level:void 0});return}if(l===v.PlaylistContextType.MANIFEST){var T={attrs:new b.AttrList({}),bitrate:0,details:o,name:"",url:E};t.trigger(_.Events.MANIFEST_LOADED,{levels:[T],audioTracks:[],url:E,stats:u,networkDetails:r,sessionData:null})}if(u.parsing.end=performance.now(),o.needSidxRanges){var L,R=(L=o.fragments[0].initSegment)===null||L===void 0?void 0:L.url;this.load({url:R,isSidxRequest:!0,type:l,level:s,levelDetails:o,id:e,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null});return}p.levelDetails=o,this.handlePlaylistLoaded(n,u,p,r)},i.handleSidxRequest=function(n,u){var p=new Uint8Array(n.data),r=(0,k.findBox)(p,["sidx"])[0];if(!!r){var t=(0,k.parseSegmentIndex)(r);if(!!t){var e=t.references,s=u.levelDetails;e.forEach(function(l,E){var d=l.info,f=s.fragments[E];if(f.byteRange.length===0&&f.setByteRange(String(1+d.end-d.start)+"@"+String(d.start)),f.initSegment){var c=(0,k.findBox)(p,["moov"])[0],o=c?c.length:null;f.initSegment.setByteRange(String(o)+"@0")}})}}},i.handleManifestParsingError=function(n,u,p,r){this.hls.trigger(_.Events.ERROR,{type:D.ErrorTypes.NETWORK_ERROR,details:D.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:u.type===v.PlaylistContextType.MANIFEST,url:n.url,reason:p,response:n,context:u,networkDetails:r})},i.handleNetworkError=function(n,u,p,r){p===void 0&&(p=!1),h.logger.warn("[playlist-loader]: A network "+(p?"timeout":"error")+" occurred while loading "+n.type+" level: "+n.level+" id: "+n.id+' group-id: "'+n.groupId+'"');var t=D.ErrorDetails.UNKNOWN,e=!1,s=this.getInternalLoader(n);switch(n.type){case v.PlaylistContextType.MANIFEST:t=p?D.ErrorDetails.MANIFEST_LOAD_TIMEOUT:D.ErrorDetails.MANIFEST_LOAD_ERROR,e=!0;break;case v.PlaylistContextType.LEVEL:t=p?D.ErrorDetails.LEVEL_LOAD_TIMEOUT:D.ErrorDetails.LEVEL_LOAD_ERROR,e=!1;break;case v.PlaylistContextType.AUDIO_TRACK:t=p?D.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:D.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,e=!1;break;case v.PlaylistContextType.SUBTITLE_TRACK:t=p?D.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:D.ErrorDetails.SUBTITLE_LOAD_ERROR,e=!1;break}s&&this.resetInternalLoader(n.type);var l={type:D.ErrorTypes.NETWORK_ERROR,details:t,fatal:e,url:n.url,loader:s,context:n,networkDetails:u};r&&(l.response=r),this.hls.trigger(_.Events.ERROR,l)},i.handlePlaylistLoaded=function(n,u,p,r){var t=p.type,e=p.level,s=p.id,l=p.groupId,E=p.loader,d=p.levelDetails,f=p.deliveryDirectives;if(!(d!=null&&d.targetduration)){this.handleManifestParsingError(n,p,"invalid target duration",r);return}if(!!E)switch(d.live&&(E.getCacheAge&&(d.ageHeader=E.getCacheAge()||0),(!E.getCacheAge||isNaN(d.ageHeader))&&(d.ageHeader=0)),t){case v.PlaylistContextType.MANIFEST:case v.PlaylistContextType.LEVEL:this.hls.trigger(_.Events.LEVEL_LOADED,{details:d,level:e||0,id:s||0,stats:u,networkDetails:r,deliveryDirectives:f});break;case v.PlaylistContextType.AUDIO_TRACK:this.hls.trigger(_.Events.AUDIO_TRACK_LOADED,{details:d,id:s||0,groupId:l||"",stats:u,networkDetails:r,deliveryDirectives:f});break;case v.PlaylistContextType.SUBTITLE_TRACK:this.hls.trigger(_.Events.SUBTITLE_TRACK_LOADED,{details:d,id:s||0,groupId:l||"",stats:u,networkDetails:r,deliveryDirectives:f});break}},C}();const y=A},"./src/polyfills/number.ts":(W,M,x)=>{x.r(M),x.d(M,{MAX_SAFE_INTEGER:()=>_,isFiniteNumber:()=>w});var w=Number.isFinite||function(D){return typeof D=="number"&&isFinite(D)},_=Number.MAX_SAFE_INTEGER||9007199254740991},"./src/remux/aac-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=function(){function D(){}return D.getSilentFrame=function(k,S){switch(k){case"mp4a.40.2":if(S===1)return new Uint8Array([0,200,0,128,35,128]);if(S===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(S===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(S===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(S===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(S===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(S===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(S===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(S===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}},D}();const _=w},"./src/remux/mp4-generator.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=Math.pow(2,32)-1,_=function(){function h(){}return h.init=function(){h.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var S;for(S in h.types)h.types.hasOwnProperty(S)&&(h.types[S]=[S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2),S.charCodeAt(3)]);var v=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),b=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);h.HDLR_TYPES={video:v,audio:b};var m=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),g=new Uint8Array([0,0,0,0,0,0,0,0]);h.STTS=h.STSC=h.STCO=g,h.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),h.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),h.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),h.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var A=new Uint8Array([105,115,111,109]),y=new Uint8Array([97,118,99,49]),C=new Uint8Array([0,0,0,1]);h.FTYP=h.box(h.types.ftyp,A,C,A,y),h.DINF=h.box(h.types.dinf,h.box(h.types.dref,m))},h.box=function(S){for(var v=8,b=arguments.length,m=new Array(b>1?b-1:0),g=1;g<b;g++)m[g-1]=arguments[g];for(var A=m.length,y=A;A--;)v+=m[A].byteLength;var C=new Uint8Array(v);for(C[0]=v>>24&255,C[1]=v>>16&255,C[2]=v>>8&255,C[3]=v&255,C.set(S,4),A=0,v=8;A<y;A++)C.set(m[A],v),v+=m[A].byteLength;return C},h.hdlr=function(S){return h.box(h.types.hdlr,h.HDLR_TYPES[S])},h.mdat=function(S){return h.box(h.types.mdat,S)},h.mdhd=function(S,v){v*=S;var b=Math.floor(v/(w+1)),m=Math.floor(v%(w+1));return h.box(h.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,S>>24&255,S>>16&255,S>>8&255,S&255,b>>24,b>>16&255,b>>8&255,b&255,m>>24,m>>16&255,m>>8&255,m&255,85,196,0,0]))},h.mdia=function(S){return h.box(h.types.mdia,h.mdhd(S.timescale,S.duration),h.hdlr(S.type),h.minf(S))},h.mfhd=function(S){return h.box(h.types.mfhd,new Uint8Array([0,0,0,0,S>>24,S>>16&255,S>>8&255,S&255]))},h.minf=function(S){return S.type==="audio"?h.box(h.types.minf,h.box(h.types.smhd,h.SMHD),h.DINF,h.stbl(S)):h.box(h.types.minf,h.box(h.types.vmhd,h.VMHD),h.DINF,h.stbl(S))},h.moof=function(S,v,b){return h.box(h.types.moof,h.mfhd(S),h.traf(b,v))},h.moov=function(S){for(var v=S.length,b=[];v--;)b[v]=h.trak(S[v]);return h.box.apply(null,[h.types.moov,h.mvhd(S[0].timescale,S[0].duration)].concat(b).concat(h.mvex(S)))},h.mvex=function(S){for(var v=S.length,b=[];v--;)b[v]=h.trex(S[v]);return h.box.apply(null,[h.types.mvex].concat(b))},h.mvhd=function(S,v){v*=S;var b=Math.floor(v/(w+1)),m=Math.floor(v%(w+1)),g=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,S>>24&255,S>>16&255,S>>8&255,S&255,b>>24,b>>16&255,b>>8&255,b&255,m>>24,m>>16&255,m>>8&255,m&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return h.box(h.types.mvhd,g)},h.sdtp=function(S){var v=S.samples||[],b=new Uint8Array(4+v.length),m,g;for(m=0;m<v.length;m++)g=v[m].flags,b[m+4]=g.dependsOn<<4|g.isDependedOn<<2|g.hasRedundancy;return h.box(h.types.sdtp,b)},h.stbl=function(S){return h.box(h.types.stbl,h.stsd(S),h.box(h.types.stts,h.STTS),h.box(h.types.stsc,h.STSC),h.box(h.types.stsz,h.STSZ),h.box(h.types.stco,h.STCO))},h.avc1=function(S){var v=[],b=[],m,g,A;for(m=0;m<S.sps.length;m++)g=S.sps[m],A=g.byteLength,v.push(A>>>8&255),v.push(A&255),v=v.concat(Array.prototype.slice.call(g));for(m=0;m<S.pps.length;m++)g=S.pps[m],A=g.byteLength,b.push(A>>>8&255),b.push(A&255),b=b.concat(Array.prototype.slice.call(g));var y=h.box(h.types.avcC,new Uint8Array([1,v[3],v[4],v[5],255,224|S.sps.length].concat(v).concat([S.pps.length]).concat(b))),C=S.width,i=S.height,a=S.pixelRatio[0],n=S.pixelRatio[1];return h.box(h.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,C>>8&255,C&255,i>>8&255,i&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),y,h.box(h.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),h.box(h.types.pasp,new Uint8Array([a>>24,a>>16&255,a>>8&255,a&255,n>>24,n>>16&255,n>>8&255,n&255])))},h.esds=function(S){var v=S.config.length;return new Uint8Array([0,0,0,0,3,23+v,0,1,0,4,15+v,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([v]).concat(S.config).concat([6,1,2]))},h.mp4a=function(S){var v=S.samplerate;return h.box(h.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,S.channelCount,0,16,0,0,0,0,v>>8&255,v&255,0,0]),h.box(h.types.esds,h.esds(S)))},h.mp3=function(S){var v=S.samplerate;return h.box(h.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,S.channelCount,0,16,0,0,0,0,v>>8&255,v&255,0,0]))},h.stsd=function(S){return S.type==="audio"?S.segmentCodec==="mp3"&&S.codec==="mp3"?h.box(h.types.stsd,h.STSD,h.mp3(S)):h.box(h.types.stsd,h.STSD,h.mp4a(S)):h.box(h.types.stsd,h.STSD,h.avc1(S))},h.tkhd=function(S){var v=S.id,b=S.duration*S.timescale,m=S.width,g=S.height,A=Math.floor(b/(w+1)),y=Math.floor(b%(w+1));return h.box(h.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,v>>24&255,v>>16&255,v>>8&255,v&255,0,0,0,0,A>>24,A>>16&255,A>>8&255,A&255,y>>24,y>>16&255,y>>8&255,y&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,m>>8&255,m&255,0,0,g>>8&255,g&255,0,0]))},h.traf=function(S,v){var b=h.sdtp(S),m=S.id,g=Math.floor(v/(w+1)),A=Math.floor(v%(w+1));return h.box(h.types.traf,h.box(h.types.tfhd,new Uint8Array([0,0,0,0,m>>24,m>>16&255,m>>8&255,m&255])),h.box(h.types.tfdt,new Uint8Array([1,0,0,0,g>>24,g>>16&255,g>>8&255,g&255,A>>24,A>>16&255,A>>8&255,A&255])),h.trun(S,b.length+16+20+8+16+8+8),b)},h.trak=function(S){return S.duration=S.duration||4294967295,h.box(h.types.trak,h.tkhd(S),h.mdia(S))},h.trex=function(S){var v=S.id;return h.box(h.types.trex,new Uint8Array([0,0,0,0,v>>24,v>>16&255,v>>8&255,v&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},h.trun=function(S,v){var b=S.samples||[],m=b.length,g=12+16*m,A=new Uint8Array(g),y,C,i,a,n,u;for(v+=8+g,A.set([S.type==="video"?1:0,0,15,1,m>>>24&255,m>>>16&255,m>>>8&255,m&255,v>>>24&255,v>>>16&255,v>>>8&255,v&255],0),y=0;y<m;y++)C=b[y],i=C.duration,a=C.size,n=C.flags,u=C.cts,A.set([i>>>24&255,i>>>16&255,i>>>8&255,i&255,a>>>24&255,a>>>16&255,a>>>8&255,a&255,n.isLeading<<2|n.dependsOn,n.isDependedOn<<6|n.hasRedundancy<<4|n.paddingValue<<1|n.isNonSync,n.degradPrio&240<<8,n.degradPrio&15,u>>>24&255,u>>>16&255,u>>>8&255,u&255],12+16*y);return h.box(h.types.trun,A)},h.initSegment=function(S){h.types||h.init();var v=h.moov(S),b=new Uint8Array(h.FTYP.byteLength+v.byteLength);return b.set(h.FTYP),b.set(v,h.FTYP.byteLength),b},h}();_.types=void 0,_.HDLR_TYPES=void 0,_.STTS=void 0,_.STSC=void 0,_.STCO=void 0,_.STSZ=void 0,_.VMHD=void 0,_.SMHD=void 0,_.STSD=void 0,_.FTYP=void 0,_.DINF=void 0;const D=_},"./src/remux/mp4-remuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>a,flushTextTrackMetadataCueSamples:()=>p,flushTextTrackUserdataCueSamples:()=>r,normalizePts:()=>n});var w=x("./src/polyfills/number.ts"),_=x("./src/remux/aac-helper.ts"),D=x("./src/remux/mp4-generator.ts"),h=x("./src/events.ts"),k=x("./src/errors.ts"),S=x("./src/utils/logger.ts"),v=x("./src/types/loader.ts"),b=x("./src/utils/timescale-conversion.ts");function m(){return m=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var E=arguments[l];for(var d in E)Object.prototype.hasOwnProperty.call(E,d)&&(s[d]=E[d])}return s},m.apply(this,arguments)}var g=10*1e3,A=1024,y=1152,C=null,i=null,a=function(){function s(E,d,f,c){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=E,this.config=d,this.typeSupported=f,this.ISGenerated=!1,C===null){var o=navigator.userAgent||"",T=o.match(/Chrome\/(\d+)/i);C=T?parseInt(T[1]):0}if(i===null){var L=navigator.userAgent.match(/Safari\/(\d+)/i);i=L?parseInt(L[1]):0}}var l=s.prototype;return l.destroy=function(){},l.resetTimeStamp=function(d){S.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=d},l.resetNextTimestamp=function(){S.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},l.resetInitSegment=function(){S.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},l.getVideoStartPts=function(d){var f=!1,c=d.reduce(function(o,T){var L=T.pts-o;return L<-4294967296?(f=!0,n(o,T.pts)):L>0?o:T.pts},d[0].pts);return f&&S.logger.debug("PTS rollover detected"),c},l.remux=function(d,f,c,o,T,L,R,B){var O,K,G,z,Y,V,X=T,Z=T,$=d.pid>-1,ee=f.pid>-1,ae=f.samples.length,ne=d.samples.length>0,oe=R&&ae>0||ae>1,se=(!$||ne)&&(!ee||oe)||this.ISGenerated||R;if(se){this.ISGenerated||(G=this.generateIS(d,f,T));var te=this.isVideoContiguous,ie=-1,ue;if(oe&&(ie=u(f.samples),!te&&this.config.forceKeyFrameOnDiscontinuity))if(V=!0,ie>0){S.logger.warn("[mp4-remuxer]: Dropped "+ie+" out of "+ae+" video samples due to a missing keyframe");var de=this.getVideoStartPts(f.samples);f.samples=f.samples.slice(ie),f.dropped+=ie,Z+=(f.samples[0].pts-de)/f.inputTimeScale,ue=Z}else ie===-1&&(S.logger.warn("[mp4-remuxer]: No keyframe found out of "+ae+" video samples"),V=!1);if(this.ISGenerated){if(ne&&oe){var ce=this.getVideoStartPts(f.samples),be=n(d.samples[0].pts,ce)-ce,he=be/f.inputTimeScale;X+=Math.max(0,he),Z+=Math.max(0,-he)}if(ne){if(d.samplerate||(S.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),G=this.generateIS(d,f,T)),K=this.remuxAudio(d,X,this.isAudioContiguous,L,ee||oe||B===v.PlaylistLevelType.AUDIO?Z:void 0),oe){var Le=K?K.endPTS-K.startPTS:0;f.inputTimeScale||(S.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),G=this.generateIS(d,f,T)),O=this.remuxVideo(f,Z,te,Le)}}else oe&&(O=this.remuxVideo(f,Z,te,0));O&&(O.firstKeyFrame=ie,O.independent=ie!==-1,O.firstKeyFramePTS=ue)}}return this.ISGenerated&&(c.samples.length&&(Y=p(c,T,this._initPTS,this._initDTS)),o.samples.length&&(z=r(o,T,this._initPTS))),{audio:K,video:O,initSegment:G,independent:V,text:z,id3:Y}},l.generateIS=function(d,f,c){var o=d.samples,T=f.samples,L=this.typeSupported,R={},B=!(0,w.isFiniteNumber)(this._initPTS),O="audio/mp4",K,G,z;if(B&&(K=G=1/0),d.config&&o.length){switch(d.timescale=d.samplerate,d.segmentCodec){case"mp3":L.mpeg?(O="audio/mpeg",d.codec=""):L.mp3&&(d.codec="mp3");break}R.audio={id:"audio",container:O,codec:d.codec,initSegment:d.segmentCodec==="mp3"&&L.mpeg?new Uint8Array(0):D.default.initSegment([d]),metadata:{channelCount:d.channelCount}},B&&(z=d.inputTimeScale,K=G=o[0].pts-Math.round(z*c))}if(f.sps&&f.pps&&T.length&&(f.timescale=f.inputTimeScale,R.video={id:"main",container:"video/mp4",codec:f.codec,initSegment:D.default.initSegment([f]),metadata:{width:f.width,height:f.height}},B)){z=f.inputTimeScale;var Y=this.getVideoStartPts(T),V=Math.round(z*c);G=Math.min(G,n(T[0].dts,Y)-V),K=Math.min(K,Y-V)}if(Object.keys(R).length)return this.ISGenerated=!0,B&&(this._initPTS=K,this._initDTS=G),{tracks:R,initPTS:K,timescale:z}},l.remuxVideo=function(d,f,c,o){var T=d.inputTimeScale,L=d.samples,R=[],B=L.length,O=this._initPTS,K=this.nextAvcDts,G=8,z=this.videoSampleDuration,Y,V,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY,$=!1;if(!c||K===null){var ee=f*T,ae=L[0].pts-n(L[0].dts,L[0].pts);K=ee-ae}for(var ne=0;ne<B;ne++){var oe=L[ne];oe.pts=n(oe.pts-O,K),oe.dts=n(oe.dts-O,K),oe.dts<L[ne>0?ne-1:ne].dts&&($=!0)}$&&L.sort(function(ct,yt){var Ot=ct.dts-yt.dts,Pt=ct.pts-yt.pts;return Ot||Pt}),Y=L[0].dts,V=L[L.length-1].dts;var se=V-Y,te=se?Math.round(se/(B-1)):z||d.inputTimeScale/30;if(c){var ie=Y-K,ue=ie>te,de=ie<-1;if((ue||de)&&(ue?S.logger.warn("AVC: "+(0,b.toMsFromMpegTsClock)(ie,!0)+" ms ("+ie+"dts) hole between fragments detected, filling it"):S.logger.warn("AVC: "+(0,b.toMsFromMpegTsClock)(-ie,!0)+" ms ("+ie+"dts) overlapping between fragments detected"),!de||K>L[0].pts)){Y=K;var ce=L[0].pts-ie;L[0].dts=Y,L[0].pts=ce,S.logger.log("Video: First PTS/DTS adjusted: "+(0,b.toMsFromMpegTsClock)(ce,!0)+"/"+(0,b.toMsFromMpegTsClock)(Y,!0)+", delta: "+(0,b.toMsFromMpegTsClock)(ie,!0)+" ms")}}Y=Math.max(0,Y);for(var be=0,he=0,Le=0;Le<B;Le++){for(var xe=L[Le],ye=xe.units,Se=ye.length,De=0,Re=0;Re<Se;Re++)De+=ye[Re].data.length;he+=De,be+=Se,xe.length=De,xe.dts=Math.max(xe.dts,Y),X=Math.min(xe.pts,X),Z=Math.max(xe.pts,Z)}V=L[B-1].dts;var ke=he+4*be+8,Ie;try{Ie=new Uint8Array(ke)}catch{this.observer.emit(h.Events.ERROR,h.Events.ERROR,{type:k.ErrorTypes.MUX_ERROR,details:k.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:ke,reason:"fail allocating video mdat "+ke});return}var Oe=new DataView(Ie.buffer);Oe.setUint32(0,ke),Ie.set(D.default.types.mdat,4);for(var we=!1,Ne=Number.POSITIVE_INFINITY,Ae=Number.POSITIVE_INFINITY,Ce=Number.NEGATIVE_INFINITY,Pe=Number.NEGATIVE_INFINITY,me=0;me<B;me++){for(var Te=L[me],ve=Te.units,je=0,ze=0,Ye=ve.length;ze<Ye;ze++){var Fe=ve[ze],rt=Fe.data,Ke=Fe.data.byteLength;Oe.setUint32(G,Ke),G+=4,Ie.set(rt,G),G+=Ke,je+=4+Ke}var We=void 0;if(me<B-1)z=L[me+1].dts-Te.dts,We=L[me+1].pts-Te.pts;else{var qe=this.config,Ve=me>0?Te.dts-L[me-1].dts:te;if(We=me>0?Te.pts-L[me-1].pts:te,qe.stretchShortVideoTrack&&this.nextAudioPts!==null){var at=Math.floor(qe.maxBufferHole*T),dt=(o?X+o*T:this.nextAudioPts)-Te.pts;dt>at?(z=dt-Ve,z<0?z=Ve:we=!0,S.logger.log("[mp4-remuxer]: It is approximately "+dt/90+" ms to the next segment; using duration "+z/90+" ms for the last video frame.")):z=Ve}else z=Ve}var Lt=Math.round(Te.pts-Te.dts);Ne=Math.min(Ne,z),Ce=Math.max(Ce,z),Ae=Math.min(Ae,We),Pe=Math.max(Pe,We),R.push(new t(Te.key,z,je,Lt))}if(R.length){if(C){if(C<70){var gt=R[0].flags;gt.dependsOn=2,gt.isNonSync=0}}else if(i&&Pe-Ae<Ce-Ne&&te/Ce<.025&&R[0].cts===0){S.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");for(var ut=Y,Me=0,mt=R.length;Me<mt;Me++){var At=ut+R[Me].duration,It=ut+R[Me].cts;if(Me<mt-1){var Dt=At+R[Me+1].cts;R[Me].duration=Dt-It}else R[Me].duration=Me?R[Me-1].duration:te;R[Me].cts=0,ut=At}}}console.assert(z!==null,"mp4SampleDuration must be computed"),z=we||!z?te:z,this.nextAvcDts=K=V+z,this.videoSampleDuration=z,this.isVideoContiguous=!0;var kt=D.default.moof(d.sequenceNumber++,Y,m({},d,{samples:R})),wt="video",Rt={data1:kt,data2:Ie,startPTS:X/T,endPTS:(Z+z)/T,startDTS:Y/T,endDTS:K/T,type:wt,hasAudio:!1,hasVideo:!0,nb:R.length,dropped:d.dropped};return d.samples=[],d.dropped=0,console.assert(Ie.length,"MDAT length must not be zero"),Rt},l.remuxAudio=function(d,f,c,o,T){var L=d.inputTimeScale,R=d.samplerate?d.samplerate:L,B=L/R,O=d.segmentCodec==="aac"?A:y,K=O*B,G=this._initPTS,z=d.segmentCodec==="mp3"&&this.typeSupported.mpeg,Y=[],V=T!==void 0,X=d.samples,Z=z?0:8,$=this.nextAudioPts||-1,ee=f*L;if(this.isAudioContiguous=c=c||X.length&&$>0&&(o&&Math.abs(ee-$)<9e3||Math.abs(n(X[0].pts-G,ee)-$)<20*K),X.forEach(function(Fe){Fe.pts=n(Fe.pts-G,ee)}),!c||$<0){if(X=X.filter(function(Fe){return Fe.pts>=0}),!X.length)return;T===0?$=0:o&&!V?$=Math.max(0,ee):$=X[0].pts}if(d.segmentCodec==="aac")for(var ae=this.config.maxAudioFramesDrift,ne=0,oe=$;ne<X.length;ne++){var se=X[ne],te=se.pts,ie=te-oe,ue=Math.abs(1e3*ie/L);if(ie<=-ae*K&&V)ne===0&&(S.logger.warn("Audio frame @ "+(te/L).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*ie/L)+" ms."),this.nextAudioPts=$=oe=te);else if(ie>=ae*K&&ue<g&&V){var de=Math.round(ie/K);oe=te-de*K,oe<0&&(de--,oe+=K),ne===0&&(this.nextAudioPts=$=oe),S.logger.warn("[mp4-remuxer]: Injecting "+de+" audio frame @ "+(oe/L).toFixed(3)+"s due to "+Math.round(1e3*ie/L)+" ms gap.");for(var ce=0;ce<de;ce++){var be=Math.max(oe,0),he=_.default.getSilentFrame(d.manifestCodec||d.codec,d.channelCount);he||(S.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),he=se.unit.subarray()),X.splice(ne,0,{unit:he,pts:be}),oe+=K,ne++}}se.pts=oe,oe+=K}for(var Le=null,xe=null,ye,Se=0,De=X.length;De--;)Se+=X[De].unit.byteLength;for(var Re=0,ke=X.length;Re<ke;Re++){var Ie=X[Re],Oe=Ie.unit,we=Ie.pts;if(xe!==null){var Ne=Y[Re-1];Ne.duration=Math.round((we-xe)/B)}else if(c&&d.segmentCodec==="aac"&&(we=$),Le=we,Se>0){Se+=Z;try{ye=new Uint8Array(Se)}catch{this.observer.emit(h.Events.ERROR,h.Events.ERROR,{type:k.ErrorTypes.MUX_ERROR,details:k.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Se,reason:"fail allocating audio mdat "+Se});return}if(!z){var Ae=new DataView(ye.buffer);Ae.setUint32(0,Se),ye.set(D.default.types.mdat,4)}}else return;ye.set(Oe,Z);var Ce=Oe.byteLength;Z+=Ce,Y.push(new t(!0,O,Ce,0)),xe=we}var Pe=Y.length;if(!!Pe){var me=Y[Y.length-1];this.nextAudioPts=$=xe+B*me.duration;var Te=z?new Uint8Array(0):D.default.moof(d.sequenceNumber++,Le/B,m({},d,{samples:Y}));d.samples=[];var ve=Le/L,je=$/L,ze="audio",Ye={data1:Te,data2:ye,startPTS:ve,endPTS:je,startDTS:ve,endDTS:je,type:ze,hasAudio:!0,hasVideo:!1,nb:Pe};return this.isAudioContiguous=!0,console.assert(ye.length,"MDAT length must not be zero"),Ye}},l.remuxEmptyAudio=function(d,f,c,o){var T=d.inputTimeScale,L=d.samplerate?d.samplerate:T,R=T/L,B=this.nextAudioPts,O=(B!==null?B:o.startDTS*T)+this._initDTS,K=o.endDTS*T+this._initDTS,G=R*A,z=Math.ceil((K-O)/G),Y=_.default.getSilentFrame(d.manifestCodec||d.codec,d.channelCount);if(S.logger.warn("[mp4-remuxer]: remux empty Audio"),!Y){S.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}for(var V=[],X=0;X<z;X++){var Z=O+X*G;V.push({unit:Y,pts:Z,dts:Z})}return d.samples=V,this.remuxAudio(d,f,c,!1)},s}();function n(s,l){var E;if(l===null)return s;for(l<s?E=-8589934592:E=8589934592;Math.abs(s-l)>4294967296;)s+=E;return s}function u(s){for(var l=0;l<s.length;l++)if(s[l].key)return l;return-1}function p(s,l,E,d){var f=s.samples.length;if(!!f){for(var c=s.inputTimeScale,o=0;o<f;o++){var T=s.samples[o];T.pts=n(T.pts-E,l*c)/c,T.dts=n(T.dts-d,l*c)/c}var L=s.samples;return s.samples=[],{samples:L}}}function r(s,l,E){var d=s.samples.length;if(!!d){for(var f=s.inputTimeScale,c=0;c<d;c++){var o=s.samples[c];o.pts=n(o.pts-E,l*f)/f}s.samples.sort(function(L,R){return L.pts-R.pts});var T=s.samples;return s.samples=[],{samples:T}}}var t=function(l,E,d,f){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=E,this.size=d,this.cts=f,this.flags=new e(l)},e=function(l){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=l?2:1,this.isNonSync=l?0:1}},"./src/remux/passthrough-remuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>b});var w=x("./src/polyfills/number.ts"),_=x("./src/remux/mp4-remuxer.ts"),D=x("./src/utils/mp4-tools.ts"),h=x("./src/loader/fragment.ts"),k=x("./src/utils/logger.ts"),S=function(){function m(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndTime=null}var g=m.prototype;return g.destroy=function(){},g.resetTimeStamp=function(y){this.initPTS=y,this.lastEndTime=null},g.resetNextTimestamp=function(){this.lastEndTime=null},g.resetInitSegment=function(y,C,i){this.audioCodec=C,this.videoCodec=i,this.generateInitSegment(y),this.emitInitSegment=!0},g.generateInitSegment=function(y){var C=this.audioCodec,i=this.videoCodec;if(!y||!y.byteLength){this.initTracks=void 0,this.initData=void 0;return}var a=this.initData=(0,D.parseInitSegment)(y);C||(C=v(a.audio,h.ElementaryStreamTypes.AUDIO)),i||(i=v(a.video,h.ElementaryStreamTypes.VIDEO));var n={};a.audio&&a.video?n.audiovideo={container:"video/mp4",codec:C+","+i,initSegment:y,id:"main"}:a.audio?n.audio={container:"audio/mp4",codec:C,initSegment:y,id:"audio"}:a.video?n.video={container:"video/mp4",codec:i,initSegment:y,id:"main"}:k.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=n},g.remux=function(y,C,i,a,n){var u,p=this.initPTS,r=this.lastEndTime,t={audio:void 0,video:void 0,text:a,id3:i,initSegment:void 0};(0,w.isFiniteNumber)(r)||(r=this.lastEndTime=n||0);var e=C.samples;if(!e||!e.length)return t;var s={initPTS:void 0,timescale:1},l=this.initData;if((!l||!l.length)&&(this.generateInitSegment(e),l=this.initData),!l||!l.length)return k.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),t;this.emitInitSegment&&(s.tracks=this.initTracks,this.emitInitSegment=!1);var E=(0,D.getStartDTS)(l,e);(0,w.isFiniteNumber)(p)||(this.initPTS=s.initPTS=p=E-n);var d=(0,D.getDuration)(e,l),f=y?E-p:r,c=f+d;(0,D.offsetStartDTS)(l,e,p),d>0?this.lastEndTime=c:(k.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var o=!!l.audio,T=!!l.video,L="";o&&(L+="audio"),T&&(L+="video");var R={data1:e,startPTS:f,startDTS:f,endPTS:c,endDTS:c,type:L,hasAudio:o,hasVideo:T,nb:1,dropped:0};t.audio=R.type==="audio"?R:void 0,t.video=R.type!=="audio"?R:void 0,t.initSegment=s;var B=(u=this.initPTS)!=null?u:0;return t.id3=(0,_.flushTextTrackMetadataCueSamples)(i,n,B,B),a.samples.length&&(t.text=(0,_.flushTextTrackUserdataCueSamples)(a,n,B)),t},m}();function v(m,g){var A=m==null?void 0:m.codec;return A&&A.length>4?A:A==="hvc1"||A==="hev1"?"hvc1.1.c.L120.90":A==="av01"?"av01.0.04M.08":A==="avc1"||g===h.ElementaryStreamTypes.VIDEO?"avc1.42e01e":"mp4a.40.5"}const b=S},"./src/task-loop.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var D=_.prototype;return D.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},D.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},D.onHandlerDestroyed=function(){},D.hasInterval=function(){return!!this._tickInterval},D.hasNextTick=function(){return!!this._tickTimer},D.setInterval=function(k){return this._tickInterval?!1:(this._tickInterval=self.setInterval(this._boundTick,k),!0)},D.clearInterval=function(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1},D.clearNextTick=function(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1},D.tick=function(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},D.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},D.doTick=function(){},_}()},"./src/types/cmcd.ts":(W,M,x)=>{x.r(M),x.d(M,{CMCDObjectType:()=>_,CMCDStreamType:()=>h,CMCDStreamingFormat:()=>D,CMCDVersion:()=>w});var w=1,_;(function(k){k.MANIFEST="m",k.AUDIO="a",k.VIDEO="v",k.MUXED="av",k.INIT="i",k.CAPTION="c",k.TIMED_TEXT="tt",k.KEY="k",k.OTHER="o"})(_||(_={}));var D;(function(k){k.DASH="d",k.HLS="h",k.SMOOTH="s",k.OTHER="o"})(D||(D={}));var h;(function(k){k.VOD="v",k.LIVE="l"})(h||(h={}))},"./src/types/demuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{MetadataSchema:()=>w});var w;(function(_){_.audioId3="org.id3",_.dateRange="com.apple.quicktime.HLS",_.emsg="https://aomedia.org/emsg/ID3"})(w||(w={}))},"./src/types/level.ts":(W,M,x)=>{x.r(M),x.d(M,{HlsSkip:()=>D,HlsUrlParameters:()=>k,Level:()=>S,getSkipValue:()=>h});function w(v,b){for(var m=0;m<b.length;m++){var g=b[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,g.key,g)}}function _(v,b,m){return b&&w(v.prototype,b),m&&w(v,m),Object.defineProperty(v,"prototype",{writable:!1}),v}var D;(function(v){v.No="",v.Yes="YES",v.v2="v2"})(D||(D={}));function h(v,b){var m=v.canSkipUntil,g=v.canSkipDateRanges,A=v.endSN,y=b!==void 0?b-A:0;return m&&y<m?g?D.v2:D.Yes:D.No}var k=function(){function v(m,g,A){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=m,this.part=g,this.skip=A}var b=v.prototype;return b.addDirectives=function(g){var A=new self.URL(g);return this.msn!==void 0&&A.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&A.searchParams.set("_HLS_part",this.part.toString()),this.skip&&A.searchParams.set("_HLS_skip",this.skip),A.toString()},v}(),S=function(){function v(b){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[b.url],this.attrs=b.attrs,this.bitrate=b.bitrate,b.details&&(this.details=b.details),this.id=b.id||0,this.name=b.name,this.width=b.width||0,this.height=b.height||0,this.audioCodec=b.audioCodec,this.videoCodec=b.videoCodec,this.unknownCodecs=b.unknownCodecs,this.codecSet=[b.videoCodec,b.audioCodec].filter(function(m){return m}).join(",").replace(/\.[^.,]+/g,"")}return _(v,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(m){var g=m%this.url.length;this._urlId!==g&&(this.details=void 0,this._urlId=g)}}]),v}()},"./src/types/loader.ts":(W,M,x)=>{x.r(M),x.d(M,{PlaylistContextType:()=>w,PlaylistLevelType:()=>_});var w;(function(D){D.MANIFEST="manifest",D.LEVEL="level",D.AUDIO_TRACK="audioTrack",D.SUBTITLE_TRACK="subtitleTrack"})(w||(w={}));var _;(function(D){D.MAIN="main",D.AUDIO="audio",D.SUBTITLE="subtitle"})(_||(_={}))},"./src/types/transmuxer.ts":(W,M,x)=>{x.r(M),x.d(M,{ChunkMetadata:()=>w});var w=function(h,k,S,v,b,m){v===void 0&&(v=0),b===void 0&&(b=-1),m===void 0&&(m=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=_(),this.buffering={audio:_(),video:_(),audiovideo:_()},this.level=h,this.sn=k,this.id=S,this.size=v,this.part=b,this.partial=m};function _(){return{start:0,executeStart:0,executeEnd:0,end:0}}},"./src/utils/attr-list.ts":(W,M,x)=>{x.r(M),x.d(M,{AttrList:()=>D});var w=/^(\d+)x(\d+)$/,_=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,D=function(){function h(S){typeof S=="string"&&(S=h.parseAttrList(S));for(var v in S)S.hasOwnProperty(v)&&(this[v]=S[v])}var k=h.prototype;return k.decimalInteger=function(v){var b=parseInt(this[v],10);return b>Number.MAX_SAFE_INTEGER?1/0:b},k.hexadecimalInteger=function(v){if(this[v]){var b=(this[v]||"0x").slice(2);b=(b.length&1?"0":"")+b;for(var m=new Uint8Array(b.length/2),g=0;g<b.length/2;g++)m[g]=parseInt(b.slice(g*2,g*2+2),16);return m}else return null},k.hexadecimalIntegerAsNumber=function(v){var b=parseInt(this[v],16);return b>Number.MAX_SAFE_INTEGER?1/0:b},k.decimalFloatingPoint=function(v){return parseFloat(this[v])},k.optionalFloat=function(v,b){var m=this[v];return m?parseFloat(m):b},k.enumeratedString=function(v){return this[v]},k.bool=function(v){return this[v]==="YES"},k.decimalResolution=function(v){var b=w.exec(this[v]);if(b!==null)return{width:parseInt(b[1],10),height:parseInt(b[2],10)}},h.parseAttrList=function(v){var b,m={},g='"';for(_.lastIndex=0;(b=_.exec(v))!==null;){var A=b[2];A.indexOf(g)===0&&A.lastIndexOf(g)===A.length-1&&(A=A.slice(1,-1)),m[b[1]]=A}return m},h}()},"./src/utils/binary-search.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w={search:function(h,k){for(var S=0,v=h.length-1,b=null,m=null;S<=v;){b=(S+v)/2|0,m=h[b];var g=k(m);if(g>0)S=b+1;else if(g<0)v=b-1;else return m}return null}};const _=w},"./src/utils/buffer-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{BufferHelper:()=>D});var w=x("./src/utils/logger.ts"),_={length:0,start:function(){return 0},end:function(){return 0}},D=function(){function h(){}return h.isBuffered=function(S,v){try{if(S){for(var b=h.getBuffered(S),m=0;m<b.length;m++)if(v>=b.start(m)&&v<=b.end(m))return!0}}catch{}return!1},h.bufferInfo=function(S,v,b){try{if(S){var m=h.getBuffered(S),g=[],A;for(A=0;A<m.length;A++)g.push({start:m.start(A),end:m.end(A)});return this.bufferedInfo(g,v,b)}}catch{}return{len:0,start:v,end:v,nextStart:void 0}},h.bufferedInfo=function(S,v,b){v=Math.max(0,v),S.sort(function(t,e){var s=t.start-e.start;return s||e.end-t.end});var m=[];if(b)for(var g=0;g<S.length;g++){var A=m.length;if(A){var y=m[A-1].end;S[g].start-y<b?S[g].end>y&&(m[A-1].end=S[g].end):m.push(S[g])}else m.push(S[g])}else m=S;for(var C=0,i,a=v,n=v,u=0;u<m.length;u++){var p=m[u].start,r=m[u].end;if(v+b>=p&&v<r)a=p,n=r,C=n-v;else if(v+b<p){i=p;break}}return{len:C,start:a||0,end:n||0,nextStart:i}},h.getBuffered=function(S){try{return S.buffered}catch(v){return w.logger.log("failed to get media.buffered",v),_}},h}()},"./src/utils/cea-608-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{CaptionScreen:()=>u,Row:()=>n,default:()=>l});var w=x("./src/utils/logger.ts"),_={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},D=function(d){var f=d;return _.hasOwnProperty(d)&&(f=_[d]),String.fromCharCode(f)},h=15,k=100,S={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},v={17:2,18:4,21:6,22:8,23:10,19:13,20:15},b={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},m={25:2,26:4,29:6,30:8,31:10,27:13,28:15},g=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],A;(function(E){E[E.ERROR=0]="ERROR",E[E.TEXT=1]="TEXT",E[E.WARNING=2]="WARNING",E[E.INFO=2]="INFO",E[E.DEBUG=3]="DEBUG",E[E.DATA=3]="DATA"})(A||(A={}));var y=function(){function E(){this.time=null,this.verboseLevel=A.ERROR}var d=E.prototype;return d.log=function(c,o){this.verboseLevel>=c&&w.logger.log(this.time+" ["+c+"] "+o)},E}(),C=function(d){for(var f=[],c=0;c<d.length;c++)f.push(d[c].toString(16));return f},i=function(){function E(f,c,o,T,L){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=f||"white",this.underline=c||!1,this.italics=o||!1,this.background=T||"black",this.flash=L||!1}var d=E.prototype;return d.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},d.setStyles=function(c){for(var o=["foreground","underline","italics","background","flash"],T=0;T<o.length;T++){var L=o[T];c.hasOwnProperty(L)&&(this[L]=c[L])}},d.isDefault=function(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash},d.equals=function(c){return this.foreground===c.foreground&&this.underline===c.underline&&this.italics===c.italics&&this.background===c.background&&this.flash===c.flash},d.copy=function(c){this.foreground=c.foreground,this.underline=c.underline,this.italics=c.italics,this.background=c.background,this.flash=c.flash},d.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},E}(),a=function(){function E(f,c,o,T,L,R){this.uchar=void 0,this.penState=void 0,this.uchar=f||" ",this.penState=new i(c,o,T,L,R)}var d=E.prototype;return d.reset=function(){this.uchar=" ",this.penState.reset()},d.setChar=function(c,o){this.uchar=c,this.penState.copy(o)},d.setPenState=function(c){this.penState.copy(c)},d.equals=function(c){return this.uchar===c.uchar&&this.penState.equals(c.penState)},d.copy=function(c){this.uchar=c.uchar,this.penState.copy(c.penState)},d.isEmpty=function(){return this.uchar===" "&&this.penState.isDefault()},E}(),n=function(){function E(f){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var c=0;c<k;c++)this.chars.push(new a);this.logger=f,this.pos=0,this.currPenState=new i}var d=E.prototype;return d.equals=function(c){for(var o=!0,T=0;T<k;T++)if(!this.chars[T].equals(c.chars[T])){o=!1;break}return o},d.copy=function(c){for(var o=0;o<k;o++)this.chars[o].copy(c.chars[o])},d.isEmpty=function(){for(var c=!0,o=0;o<k;o++)if(!this.chars[o].isEmpty()){c=!1;break}return c},d.setCursor=function(c){this.pos!==c&&(this.pos=c),this.pos<0?(this.logger.log(A.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>k&&(this.logger.log(A.DEBUG,"Too large cursor position "+this.pos),this.pos=k)},d.moveCursor=function(c){var o=this.pos+c;if(c>1)for(var T=this.pos+1;T<o+1;T++)this.chars[T].setPenState(this.currPenState);this.setCursor(o)},d.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},d.insertChar=function(c){c>=144&&this.backSpace();var o=D(c);if(this.pos>=k){this.logger.log(A.ERROR,"Cannot insert "+c.toString(16)+" ("+o+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(o,this.currPenState),this.moveCursor(1)},d.clearFromPos=function(c){var o;for(o=c;o<k;o++)this.chars[o].reset()},d.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},d.clearToEndOfRow=function(){this.clearFromPos(this.pos)},d.getTextString=function(){for(var c=[],o=!0,T=0;T<k;T++){var L=this.chars[T].uchar;L!==" "&&(o=!1),c.push(L)}return o?"":c.join("")},d.setPenStyles=function(c){this.currPenState.setStyles(c);var o=this.chars[this.pos];o.setPenState(this.currPenState)},E}(),u=function(){function E(f){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var c=0;c<h;c++)this.rows.push(new n(f));this.logger=f,this.currRow=h-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var d=E.prototype;return d.reset=function(){for(var c=0;c<h;c++)this.rows[c].clear();this.currRow=h-1},d.equals=function(c){for(var o=!0,T=0;T<h;T++)if(!this.rows[T].equals(c.rows[T])){o=!1;break}return o},d.copy=function(c){for(var o=0;o<h;o++)this.rows[o].copy(c.rows[o])},d.isEmpty=function(){for(var c=!0,o=0;o<h;o++)if(!this.rows[o].isEmpty()){c=!1;break}return c},d.backSpace=function(){var c=this.rows[this.currRow];c.backSpace()},d.clearToEndOfRow=function(){var c=this.rows[this.currRow];c.clearToEndOfRow()},d.insertChar=function(c){var o=this.rows[this.currRow];o.insertChar(c)},d.setPen=function(c){var o=this.rows[this.currRow];o.setPenStyles(c)},d.moveCursor=function(c){var o=this.rows[this.currRow];o.moveCursor(c)},d.setCursor=function(c){this.logger.log(A.INFO,"setCursor: "+c);var o=this.rows[this.currRow];o.setCursor(c)},d.setPAC=function(c){this.logger.log(A.INFO,"pacData = "+JSON.stringify(c));var o=c.row-1;if(this.nrRollUpRows&&o<this.nrRollUpRows-1&&(o=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==o){for(var T=0;T<h;T++)this.rows[T].clear();var L=this.currRow+1-this.nrRollUpRows,R=this.lastOutputScreen;if(R){var B=R.rows[L].cueStartTime,O=this.logger.time;if(B&&O!==null&&B<O)for(var K=0;K<this.nrRollUpRows;K++)this.rows[o-this.nrRollUpRows+K+1].copy(R.rows[L+K])}}this.currRow=o;var G=this.rows[this.currRow];if(c.indent!==null){var z=c.indent,Y=Math.max(z-1,0);G.setCursor(c.indent),c.color=G.chars[Y].penState.foreground}var V={foreground:c.color,underline:c.underline,italics:c.italics,background:"black",flash:!1};this.setPen(V)},d.setBkgData=function(c){this.logger.log(A.INFO,"bkgData = "+JSON.stringify(c)),this.backSpace(),this.setPen(c),this.insertChar(32)},d.setRollUpRows=function(c){this.nrRollUpRows=c},d.rollUp=function(){if(this.nrRollUpRows===null){this.logger.log(A.DEBUG,"roll_up but nrRollUpRows not set yet");return}this.logger.log(A.TEXT,this.getDisplayText());var c=this.currRow+1-this.nrRollUpRows,o=this.rows.splice(c,1)[0];o.clear(),this.rows.splice(this.currRow,0,o),this.logger.log(A.INFO,"Rolling up")},d.getDisplayText=function(c){c=c||!1;for(var o=[],T="",L=-1,R=0;R<h;R++){var B=this.rows[R].getTextString();B&&(L=R+1,c?o.push("Row "+L+": '"+B+"'"):o.push(B.trim()))}return o.length>0&&(c?T="["+o.join(" | ")+"]":T=o.join(`
`)),T},d.getTextAndFormat=function(){return this.rows},E}(),p=function(){function E(f,c,o){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=f,this.outputFilter=c,this.mode=null,this.verbose=0,this.displayedMemory=new u(o),this.nonDisplayedMemory=new u(o),this.lastOutputScreen=new u(o),this.currRollUpRow=this.displayedMemory.rows[h-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=o}var d=E.prototype;return d.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[h-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},d.getHandler=function(){return this.outputFilter},d.setHandler=function(c){this.outputFilter=c},d.setPAC=function(c){this.writeScreen.setPAC(c)},d.setBkgData=function(c){this.writeScreen.setBkgData(c)},d.setMode=function(c){c!==this.mode&&(this.mode=c,this.logger.log(A.INFO,"MODE="+c),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=c)},d.insertChars=function(c){for(var o=0;o<c.length;o++)this.writeScreen.insertChar(c[o]);var T=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(A.INFO,T+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(A.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},d.ccRCL=function(){this.logger.log(A.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},d.ccBS=function(){this.logger.log(A.INFO,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},d.ccAOF=function(){},d.ccAON=function(){},d.ccDER=function(){this.logger.log(A.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},d.ccRU=function(c){this.logger.log(A.INFO,"RU("+c+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(c)},d.ccFON=function(){this.logger.log(A.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},d.ccRDC=function(){this.logger.log(A.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},d.ccTR=function(){this.logger.log(A.INFO,"TR"),this.setMode("MODE_TEXT")},d.ccRTD=function(){this.logger.log(A.INFO,"RTD"),this.setMode("MODE_TEXT")},d.ccEDM=function(){this.logger.log(A.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},d.ccCR=function(){this.logger.log(A.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},d.ccENM=function(){this.logger.log(A.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},d.ccEOC=function(){if(this.logger.log(A.INFO,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){var c=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=c,this.writeScreen=this.nonDisplayedMemory,this.logger.log(A.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},d.ccTO=function(c){this.logger.log(A.INFO,"TO("+c+") - Tab Offset"),this.writeScreen.moveCursor(c)},d.ccMIDROW=function(c){var o={flash:!1};if(o.underline=c%2===1,o.italics=c>=46,o.italics)o.foreground="white";else{var T=Math.floor(c/2)-16,L=["white","green","blue","cyan","red","yellow","magenta"];o.foreground=L[T]}this.logger.log(A.INFO,"MIDROW: "+JSON.stringify(o)),this.writeScreen.setPen(o)},d.outputDataUpdate=function(c){c===void 0&&(c=!1);var o=this.logger.time;o!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=o:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,o,this.lastOutputScreen),c&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:o),this.lastOutputScreen.copy(this.displayedMemory))},d.cueSplitAtTime=function(c){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,c,this.displayedMemory),this.cueStartTime=c))},E}(),r=function(){function E(f,c,o){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var T=new y;this.channels=[null,new p(f,c,T),new p(f+1,o,T)],this.cmdHistory=s(),this.logger=T}var d=E.prototype;return d.getHandler=function(c){return this.channels[c].getHandler()},d.setHandler=function(c,o){this.channels[c].setHandler(o)},d.addData=function(c,o){var T,L,R,B=!1;this.logger.time=c;for(var O=0;O<o.length;O+=2)if(L=o[O]&127,R=o[O+1]&127,!(L===0&&R===0)){if(this.logger.log(A.DATA,"["+C([o[O],o[O+1]])+"] -> ("+C([L,R])+")"),T=this.parseCmd(L,R),T||(T=this.parseMidrow(L,R)),T||(T=this.parsePAC(L,R)),T||(T=this.parseBackgroundAttributes(L,R)),!T&&(B=this.parseChars(L,R),B)){var K=this.currentChannel;if(K&&K>0){var G=this.channels[K];G.insertChars(B)}else this.logger.log(A.WARNING,"No channel found yet. TEXT-MODE?")}!T&&!B&&this.logger.log(A.WARNING,"Couldn't parse cleaned data "+C([L,R])+" orig: "+C([o[O],o[O+1]]))}},d.parseCmd=function(c,o){var T=this.cmdHistory,L=(c===20||c===28||c===21||c===29)&&o>=32&&o<=47,R=(c===23||c===31)&&o>=33&&o<=35;if(!(L||R))return!1;if(e(c,o,T))return t(null,null,T),this.logger.log(A.DEBUG,"Repeated command ("+C([c,o])+") is dropped"),!0;var B=c===20||c===21||c===23?1:2,O=this.channels[B];return c===20||c===21||c===28||c===29?o===32?O.ccRCL():o===33?O.ccBS():o===34?O.ccAOF():o===35?O.ccAON():o===36?O.ccDER():o===37?O.ccRU(2):o===38?O.ccRU(3):o===39?O.ccRU(4):o===40?O.ccFON():o===41?O.ccRDC():o===42?O.ccTR():o===43?O.ccRTD():o===44?O.ccEDM():o===45?O.ccCR():o===46?O.ccENM():o===47&&O.ccEOC():O.ccTO(o-32),t(c,o,T),this.currentChannel=B,!0},d.parseMidrow=function(c,o){var T=0;if((c===17||c===25)&&o>=32&&o<=47){if(c===17?T=1:T=2,T!==this.currentChannel)return this.logger.log(A.ERROR,"Mismatch channel in midrow parsing"),!1;var L=this.channels[T];return L?(L.ccMIDROW(o),this.logger.log(A.DEBUG,"MIDROW ("+C([c,o])+")"),!0):!1}return!1},d.parsePAC=function(c,o){var T,L=this.cmdHistory,R=(c>=17&&c<=23||c>=25&&c<=31)&&o>=64&&o<=127,B=(c===16||c===24)&&o>=64&&o<=95;if(!(R||B))return!1;if(e(c,o,L))return t(null,null,L),!0;var O=c<=23?1:2;o>=64&&o<=95?T=O===1?S[c]:b[c]:T=O===1?v[c]:m[c];var K=this.channels[O];return K?(K.setPAC(this.interpretPAC(T,o)),t(c,o,L),this.currentChannel=O,!0):!1},d.interpretPAC=function(c,o){var T,L={color:null,italics:!1,indent:null,underline:!1,row:c};return o>95?T=o-96:T=o-64,L.underline=(T&1)===1,T<=13?L.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(T/2)]:T<=15?(L.italics=!0,L.color="white"):L.indent=Math.floor((T-16)/2)*4,L},d.parseChars=function(c,o){var T,L=null,R=null;if(c>=25?(T=2,R=c-8):(T=1,R=c),R>=17&&R<=19){var B;R===17?B=o+80:R===18?B=o+112:B=o+144,this.logger.log(A.INFO,"Special char '"+D(B)+"' in channel "+T),L=[B]}else c>=32&&c<=127&&(L=o===0?[c]:[c,o]);if(L){var O=C(L);this.logger.log(A.DEBUG,"Char codes =  "+O.join(",")),t(c,o,this.cmdHistory)}return L},d.parseBackgroundAttributes=function(c,o){var T=(c===16||c===24)&&o>=32&&o<=47,L=(c===23||c===31)&&o>=45&&o<=47;if(!(T||L))return!1;var R,B={};c===16||c===24?(R=Math.floor((o-32)/2),B.background=g[R],o%2===1&&(B.background=B.background+"_semi")):o===45?B.background="transparent":(B.foreground="black",o===47&&(B.underline=!0));var O=c<=23?1:2,K=this.channels[O];return K.setBkgData(B),t(c,o,this.cmdHistory),!0},d.reset=function(){for(var c=0;c<Object.keys(this.channels).length;c++){var o=this.channels[c];o&&o.reset()}this.cmdHistory=s()},d.cueSplitAtTime=function(c){for(var o=0;o<this.channels.length;o++){var T=this.channels[o];T&&T.cueSplitAtTime(c)}},E}();function t(E,d,f){f.a=E,f.b=d}function e(E,d,f){return f.a===E&&f.b===d}function s(){return{a:null,b:null}}const l=r},"./src/utils/codecs.ts":(W,M,x)=>{x.r(M),x.d(M,{isCodecSupportedInMp4:()=>D,isCodecType:()=>_});var w={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dva1:!0,dvav:!0,dvh1:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function _(h,k){var S=w[k];return!!S&&S[h.slice(0,4)]===!0}function D(h,k){return MediaSource.isTypeSupported((k||"video")+'/mp4;codecs="'+h+'"')}},"./src/utils/cues.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>S});var w=x("./src/utils/vttparser.ts"),_=x("./src/utils/webvtt-parser.ts"),D=x("./src/utils/texttrack-utils.ts"),h=/\s/,k={newCue:function(b,m,g,A){for(var y=[],C,i,a,n,u,p=self.VTTCue||self.TextTrackCue,r=0;r<A.rows.length;r++)if(C=A.rows[r],a=!0,n=0,u="",!C.isEmpty()){for(var t=0;t<C.chars.length;t++)h.test(C.chars[t].uchar)&&a?n++:(u+=C.chars[t].uchar,a=!1);C.cueStartTime=m,m===g&&(g+=1e-4),n>=16?n--:n++;var e=(0,w.fixLineBreaks)(u.trim()),s=(0,_.generateCueId)(m,g,e);(!b||!b.cues||!b.cues.getCueById(s))&&(i=new p(m,g,e),i.id=s,i.line=r+1,i.align="left",i.position=10+Math.min(80,Math.floor(n*8/32)*10),y.push(i))}return b&&y.length&&(y.sort(function(l,E){return l.line==="auto"||E.line==="auto"?0:l.line>8&&E.line>8?E.line-l.line:l.line-E.line}),y.forEach(function(l){return(0,D.addCueToTrack)(b,l)})),y}};const S=k},"./src/utils/discontinuities.ts":(W,M,x)=>{x.r(M),x.d(M,{adjustSlidingStart:()=>b,alignMediaPlaylistByPDT:()=>y,alignPDT:()=>A,alignStream:()=>m,findDiscontinuousReferenceFrag:()=>S,findFirstFragWithCC:()=>h,shouldAlignOnDiscontinuities:()=>k});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/logger.ts"),D=x("./src/controller/level-helper.ts");function h(C,i){for(var a=null,n=0,u=C.length;n<u;n++){var p=C[n];if(p&&p.cc===i){a=p;break}}return a}function k(C,i,a){return!!(i.details&&(a.endCC>a.startCC||C&&C.cc<a.startCC))}function S(C,i,a){var n=C.fragments,u=i.fragments;if(!u.length||!n.length){_.logger.log("No fragments to align");return}var p=h(n,u[0].cc);if(!p||p&&!p.startPTS){_.logger.log("No frag in previous level to align on");return}return p}function v(C,i){if(C){var a=C.start+i;C.start=C.startPTS=a,C.endPTS=a+C.duration}}function b(C,i){for(var a=i.fragments,n=0,u=a.length;n<u;n++)v(a[n],C);i.fragmentHint&&v(i.fragmentHint,C),i.alignedSliding=!0}function m(C,i,a){!i||(g(C,a,i),!a.alignedSliding&&i.details&&A(a,i.details),!a.alignedSliding&&i.details&&!a.skippedSegments&&(0,D.adjustSliding)(i.details,a))}function g(C,i,a){if(k(C,a,i)){var n=S(a.details,i);n&&(0,w.isFiniteNumber)(n.start)&&(_.logger.log("Adjusting PTS using last level due to CC increase within current level "+i.url),b(n.start,i))}}function A(C,i){if(!(!i.fragments.length||!C.hasProgramDateTime||!i.hasProgramDateTime)){var a=i.fragments[0].programDateTime,n=C.fragments[0].programDateTime,u=(n-a)/1e3+i.fragments[0].start;u&&(0,w.isFiniteNumber)(u)&&(_.logger.log("Adjusting PTS using programDateTime delta "+(n-a)+"ms, sliding:"+u.toFixed(3)+" "+C.url+" "),b(u,C))}}function y(C,i){if(!(!C.hasProgramDateTime||!i.hasProgramDateTime)){var a=C.fragments,n=i.fragments;if(!(!a.length||!n.length)){var u=Math.round(n.length/2)-1,p=n[u],r=h(a,p.cc)||a[Math.round(a.length/2)-1],t=p.programDateTime,e=r.programDateTime;if(!(t===null||e===null)){var s=(e-t)/1e3-(r.start-p.start);b(s,C)}}}}},"./src/utils/ewma-bandwidth-estimator.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>D});var w=x("./src/utils/ewma.ts"),_=function(){function h(S,v,b){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=b,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new w.default(S),this.fast_=new w.default(v)}var k=h.prototype;return k.update=function(v,b){var m=this.slow_,g=this.fast_;this.slow_.halfLife!==v&&(this.slow_=new w.default(v,m.getEstimate(),m.getTotalWeight())),this.fast_.halfLife!==b&&(this.fast_=new w.default(b,g.getEstimate(),g.getTotalWeight()))},k.sample=function(v,b){v=Math.max(v,this.minDelayMs_);var m=8*b,g=v/1e3,A=m/g;this.fast_.sample(g,A),this.slow_.sample(g,A)},k.canEstimate=function(){var v=this.fast_;return v&&v.getTotalWeight()>=this.minWeight_},k.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},k.destroy=function(){},h}();const D=_},"./src/utils/ewma.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w=function(){function D(k,S,v){S===void 0&&(S=0),v===void 0&&(v=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=k,this.alpha_=k?Math.exp(Math.log(.5)/k):0,this.estimate_=S,this.totalWeight_=v}var h=D.prototype;return h.sample=function(S,v){var b=Math.pow(this.alpha_,S);this.estimate_=v*(1-b)+b*this.estimate_,this.totalWeight_+=S},h.getTotalWeight=function(){return this.totalWeight_},h.getEstimate=function(){if(this.alpha_){var S=1-Math.pow(this.alpha_,this.totalWeight_);if(S)return this.estimate_/S}return this.estimate_},D}();const _=w},"./src/utils/fetch-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>u,fetchSupported:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/loader/load-stats.ts"),D=x("./src/demux/chunk-cache.ts");function h(p,r){p.prototype=Object.create(r.prototype),p.prototype.constructor=p,m(p,r)}function k(p){var r=typeof Map=="function"?new Map:void 0;return k=function(e){if(e===null||!b(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(e))return r.get(e);r.set(e,s)}function s(){return S(e,arguments,g(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),m(s,e)},k(p)}function S(p,r,t){return v()?S=Reflect.construct.bind():S=function(s,l,E){var d=[null];d.push.apply(d,l);var f=Function.bind.apply(s,d),c=new f;return E&&m(c,E.prototype),c},S.apply(null,arguments)}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(p){return Function.toString.call(p).indexOf("[native code]")!==-1}function m(p,r){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},m(p,r)}function g(p){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(p)}function A(){return A=Object.assign?Object.assign.bind():function(p){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(p[e]=t[e])}return p},A.apply(this,arguments)}function y(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}var C=function(){function p(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||a,this.controller=new self.AbortController,this.stats=new _.LoadStats}var r=p.prototype;return r.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},r.abortInternal=function(){var e=this.response;(!e||!e.ok)&&(this.stats.aborted=!0,this.controller.abort())},r.abort=function(){var e;this.abortInternal(),(e=this.callbacks)!==null&&e!==void 0&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},r.load=function(e,s,l){var E=this,d=this.stats;if(d.loading.start)throw new Error("Loader can only be used once.");d.loading.start=self.performance.now();var f=i(e,this.controller.signal),c=l.onProgress,o=e.responseType==="arraybuffer",T=o?"byteLength":"length";this.context=e,this.config=s,this.callbacks=l,this.request=this.fetchSetup(e,f),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(function(){E.abortInternal(),l.onTimeout(d,e,E.response)},s.timeout),self.fetch(this.request).then(function(L){if(E.response=E.loader=L,!L.ok){var R=L.status,B=L.statusText;throw new n(B||"fetch, bad network response",R,L)}return d.loading.first=Math.max(self.performance.now(),d.loading.start),d.total=parseInt(L.headers.get("Content-Length")||"0"),c&&(0,w.isFiniteNumber)(s.highWaterMark)?E.loadProgressively(L,d,e,s.highWaterMark,c):o?L.arrayBuffer():L.text()}).then(function(L){var R=E.response;self.clearTimeout(E.requestTimeout),d.loading.end=Math.max(self.performance.now(),d.loading.first),d.loaded=d.total=L[T];var B={url:R.url,data:L};c&&!(0,w.isFiniteNumber)(s.highWaterMark)&&c(d,e,L,R),l.onSuccess(B,d,e,R)}).catch(function(L){if(self.clearTimeout(E.requestTimeout),!d.aborted){var R=L&&L.code||0,B=L?L.message:null;l.onError({code:R,text:B},e,L?L.details:null)}})},r.getCacheAge=function(){var e=null;if(this.response){var s=this.response.headers.get("age");e=s?parseFloat(s):null}return e},r.loadProgressively=function(e,s,l,E,d){E===void 0&&(E=0);var f=new D.default,c=e.body.getReader(),o=function T(){return c.read().then(function(L){if(L.done)return f.dataLength&&d(s,l,f.flush(),e),Promise.resolve(new ArrayBuffer(0));var R=L.value,B=R.length;return s.loaded+=B,B<E||f.dataLength?(f.push(R),f.dataLength>=E&&d(s,l,f.flush(),e)):d(s,l,R,e),T()}).catch(function(){return Promise.reject()})};return o()},p}();function i(p,r){var t={method:"GET",mode:"cors",credentials:"same-origin",signal:r,headers:new self.Headers(A({},p.headers))};return p.rangeEnd&&t.headers.set("Range","bytes="+p.rangeStart+"-"+String(p.rangeEnd-1)),t}function a(p,r){return new self.Request(p.url,r)}var n=function(p){h(r,p);function r(t,e,s){var l;return l=p.call(this,t)||this,l.code=void 0,l.details=void 0,l.code=e,l.details=s,l}return r}(k(Error));const u=C},"./src/utils/imsc1-ttml-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{IMSC1_CODEC:()=>b,parseIMSC1:()=>y});var w=x("./src/utils/mp4-tools.ts"),_=x("./src/utils/vttparser.ts"),D=x("./src/utils/vttcue.ts"),h=x("./src/demux/id3.ts"),k=x("./src/utils/timescale-conversion.ts"),S=x("./src/utils/webvtt-parser.ts");function v(){return v=Object.assign?Object.assign.bind():function(l){for(var E=1;E<arguments.length;E++){var d=arguments[E];for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(l[f]=d[f])}return l},v.apply(this,arguments)}var b="stpp.ttml.im1t",m=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,g=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,A={left:"start",center:"center",right:"end",start:"start",end:"end"};function y(l,E,d,f,c){var o=(0,w.findBox)(new Uint8Array(l),["mdat"]);if(o.length===0){c(new Error("Could not parse IMSC1 mdat"));return}var T=o.map(function(R){return(0,h.utf8ArrayToStr)(R)}),L=(0,k.toTimescaleFromScale)(E,1,d);try{T.forEach(function(R){return f(C(R,L))})}catch(R){c(R)}}function C(l,E){var d=new DOMParser,f=d.parseFromString(l,"text/xml"),c=f.getElementsByTagName("tt")[0];if(!c)throw new Error("Invalid ttml");var o={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},T=Object.keys(o).reduce(function(K,G){return K[G]=c.getAttribute("ttp:"+G)||o[G],K},{}),L=c.getAttribute("xml:space")!=="preserve",R=a(i(c,"styling","style")),B=a(i(c,"layout","region")),O=i(c,"body","[begin]");return[].map.call(O,function(K){var G=n(K,L);if(!G||!K.hasAttribute("begin"))return null;var z=t(K.getAttribute("begin"),T),Y=t(K.getAttribute("dur"),T),V=t(K.getAttribute("end"),T);if(z===null)throw r(K);if(V===null){if(Y===null)throw r(K);V=z+Y}var X=new D.default(z-E,V-E,G);X.id=(0,S.generateCueId)(X.startTime,X.endTime,X.text);var Z=B[K.getAttribute("region")],$=R[K.getAttribute("style")];X.position=10,X.size=80;var ee=u(Z,$,R),ae=ee.textAlign;if(ae){var ne=A[ae];ne&&(X.lineAlign=ne),X.align=ae}return v(X,ee),X}).filter(function(K){return K!==null})}function i(l,E,d){var f=l.getElementsByTagName(E)[0];return f?[].slice.call(f.querySelectorAll(d)):[]}function a(l){return l.reduce(function(E,d){var f=d.getAttribute("xml:id");return f&&(E[f]=d),E},{})}function n(l,E){return[].slice.call(l.childNodes).reduce(function(d,f,c){var o;return f.nodeName==="br"&&c?d+`
`:(o=f.childNodes)!==null&&o!==void 0&&o.length?n(f,E):E?d+f.textContent.trim().replace(/\s+/g," "):d+f.textContent},"")}function u(l,E,d){var f="http://www.w3.org/ns/ttml#styling",c=null,o=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],T=l!=null&&l.hasAttribute("style")?l.getAttribute("style"):null;return T&&d.hasOwnProperty(T)&&(c=d[T]),o.reduce(function(L,R){var B=p(E,f,R)||p(l,f,R)||p(c,f,R);return B&&(L[R]=B),L},{})}function p(l,E,d){return l&&l.hasAttributeNS(E,d)?l.getAttributeNS(E,d):null}function r(l){return new Error("Could not parse ttml timestamp "+l)}function t(l,E){if(!l)return null;var d=(0,_.parseTimeStamp)(l);return d===null&&(m.test(l)?d=e(l,E):g.test(l)&&(d=s(l,E))),d}function e(l,E){var d=m.exec(l),f=(d[4]|0)+(d[5]|0)/E.subFrameRate;return(d[1]|0)*3600+(d[2]|0)*60+(d[3]|0)+f/E.frameRate}function s(l,E){var d=g.exec(l),f=Number(d[1]),c=d[2];switch(c){case"h":return f*3600;case"m":return f*60;case"ms":return f*1e3;case"f":return f/E.frameRate;case"t":return f/E.tickRate}return f}},"./src/utils/logger.ts":(W,M,x)=>{x.r(M),x.d(M,{enableLogs:()=>S,logger:()=>v});var w=function(){},_={trace:w,debug:w,log:w,warn:w,info:w,error:w},D=_;function h(b){var m=self.console[b];return m?m.bind(self.console,"["+b+"] >"):w}function k(b){for(var m=arguments.length,g=new Array(m>1?m-1:0),A=1;A<m;A++)g[A-1]=arguments[A];g.forEach(function(y){D[y]=b[y]?b[y].bind(b):h(y)})}function S(b,m){if(self.console&&b===!0||typeof b=="object"){k(b,"debug","log","info","warn","error");try{D.log('Debug logs enabled for "'+m+'"')}catch{D=_}}else D=_}var v=D},"./src/utils/mediakeys-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{KeySystems:()=>w,requestMediaKeySystemAccess:()=>_});var w;(function(D){D.WIDEVINE="com.widevine.alpha",D.PLAYREADY="com.microsoft.playready"})(w||(w={}));var _=function(){return typeof self<"u"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}()},"./src/utils/mediasource-helper.ts":(W,M,x)=>{x.r(M),x.d(M,{getMediaSource:()=>w});function w(){return self.MediaSource||self.WebKitMediaSource}},"./src/utils/mp4-tools.ts":(W,M,x)=>{x.r(M),x.d(M,{RemuxerTrackIdConfig:()=>S,appendUint8Array:()=>t,bin2str:()=>v,computeRawDurationFromSamples:()=>u,discardEPB:()=>d,findBox:()=>y,getDuration:()=>n,getStartDTS:()=>a,offsetStartDTS:()=>p,parseEmsg:()=>f,parseInitSegment:()=>i,parseSEIMessageFromNALu:()=>E,parseSamples:()=>e,parseSegmentIndex:()=>C,readSint32:()=>g,readUint16:()=>b,readUint32:()=>m,segmentValidRange:()=>r,writeUint32:()=>A});var w=x("./src/utils/typed-array.ts"),_=x("./src/loader/fragment.ts"),D=x("./src/demux/id3.ts"),h=Math.pow(2,32)-1,k=[].push,S={video:1,audio:2,id3:3,text:4};function v(c){return String.fromCharCode.apply(null,c)}function b(c,o){var T=c[o]<<8|c[o+1];return T<0?65536+T:T}function m(c,o){var T=g(c,o);return T<0?4294967296+T:T}function g(c,o){return c[o]<<24|c[o+1]<<16|c[o+2]<<8|c[o+3]}function A(c,o,T){c[o]=T>>24,c[o+1]=T>>16&255,c[o+2]=T>>8&255,c[o+3]=T&255}function y(c,o){var T=[];if(!o.length)return T;for(var L=c.byteLength,R=0;R<L;){var B=m(c,R),O=v(c.subarray(R+4,R+8)),K=B>1?R+B:L;if(O===o[0])if(o.length===1)T.push(c.subarray(R+8,K));else{var G=y(c.subarray(R+8,K),o.slice(1));G.length&&k.apply(T,G)}R=K}return T}function C(c){var o=[],T=c[0],L=8,R=m(c,L);L+=4;var B=0,O=0;T===0?L+=8:L+=16,L+=2;var K=c.length+O,G=b(c,L);L+=2;for(var z=0;z<G;z++){var Y=L,V=m(c,Y);Y+=4;var X=V&2147483647,Z=(V&2147483648)>>>31;if(Z===1)return console.warn("SIDX has hierarchical references (not supported)"),null;var $=m(c,Y);Y+=4,o.push({referenceSize:X,subsegmentDuration:$,info:{duration:$/R,start:K,end:K+X-1}}),K+=X,Y+=4,L=Y}return{earliestPresentationTime:B,timescale:R,version:T,referencesCount:G,references:o}}function i(c){for(var o=[],T=y(c,["moov","trak"]),L=0;L<T.length;L++){var R=T[L],B=y(R,["tkhd"])[0];if(B){var O=B[0],K=O===0?12:20,G=m(B,K),z=y(R,["mdia","mdhd"])[0];if(z){O=z[0],K=O===0?12:20;var Y=m(z,K),V=y(R,["mdia","hdlr"])[0];if(V){var X=v(V.subarray(8,12)),Z={soun:_.ElementaryStreamTypes.AUDIO,vide:_.ElementaryStreamTypes.VIDEO}[X];if(Z){var $=y(R,["mdia","minf","stbl","stsd"])[0],ee=void 0;$&&(ee=v($.subarray(12,16))),o[G]={timescale:Y,type:Z},o[Z]={timescale:Y,id:G,codec:ee}}}}}}var ae=y(c,["moov","mvex","trex"]);return ae.forEach(function(ne){var oe=m(ne,4),se=o[oe];se&&(se.default={duration:m(ne,12),flags:m(ne,20)})}),o}function a(c,o){return y(o,["moof","traf"]).reduce(function(T,L){var R=y(L,["tfdt"])[0],B=R[0],O=y(L,["tfhd"]).reduce(function(K,G){var z=m(G,4),Y=c[z];if(Y){var V=m(R,4);B===1&&(V*=Math.pow(2,32),V+=m(R,8));var X=Y.timescale||9e4,Z=V/X;if(isFinite(Z)&&(K===null||Z<K))return Z}return K},null);return O!==null&&isFinite(O)&&(T===null||O<T)?O:T},null)||0}function n(c,o){for(var T=0,L=0,R=0,B=y(c,["moof","traf"]),O=0;O<B.length;O++){var K=B[O],G=y(K,["tfhd"])[0],z=m(G,4),Y=o[z];if(!!Y){var V=Y.default,X=m(G,0)|(V==null?void 0:V.flags),Z=V==null?void 0:V.duration;X&8&&(X&2?Z=m(G,12):Z=m(G,8));for(var $=Y.timescale||9e4,ee=y(K,["trun"]),ae=0;ae<ee.length;ae++){if(T=u(ee[ae]),!T&&Z){var ne=m(ee[ae],4);T=Z*ne}Y.type===_.ElementaryStreamTypes.VIDEO?L+=T/$:Y.type===_.ElementaryStreamTypes.AUDIO&&(R+=T/$)}}}if(L===0&&R===0){for(var oe=0,se=y(c,["sidx"]),te=0;te<se.length;te++){var ie=C(se[te]);ie!=null&&ie.references&&(oe+=ie.references.reduce(function(ue,de){return ue+de.info.duration||0},0))}return oe}return L||R}function u(c){var o=m(c,0),T=8;o&1&&(T+=4),o&4&&(T+=4);for(var L=0,R=m(c,4),B=0;B<R;B++){if(o&256){var O=m(c,T);L+=O,T+=4}o&512&&(T+=4),o&1024&&(T+=4),o&2048&&(T+=4)}return L}function p(c,o,T){y(o,["moof","traf"]).forEach(function(L){y(L,["tfhd"]).forEach(function(R){var B=m(R,4),O=c[B];if(!!O){var K=O.timescale||9e4;y(L,["tfdt"]).forEach(function(G){var z=G[0],Y=m(G,4);if(z===0)Y-=T*K,Y=Math.max(Y,0),A(G,4,Y);else{Y*=Math.pow(2,32),Y+=m(G,8),Y-=T*K,Y=Math.max(Y,0);var V=Math.floor(Y/(h+1)),X=Math.floor(Y%(h+1));A(G,4,V),A(G,8,X)}})}})})}function r(c){var o={valid:null,remainder:null},T=y(c,["moof"]);if(T){if(T.length<2)return o.remainder=c,o}else return o;var L=T[T.length-1];return o.valid=(0,w.sliceUint8)(c,0,L.byteOffset-8),o.remainder=(0,w.sliceUint8)(c,L.byteOffset-8),o}function t(c,o){var T=new Uint8Array(c.length+o.length);return T.set(c),T.set(o,c.length),T}function e(c,o){var T=[],L=o.samples,R=o.timescale,B=o.id,O=!1,K=y(L,["moof"]);return K.map(function(G){var z=G.byteOffset-8,Y=y(G,["traf"]);Y.map(function(V){var X=y(V,["tfdt"]).map(function(Z){var $=Z[0],ee=m(Z,4);return $===1&&(ee*=Math.pow(2,32),ee+=m(Z,8)),ee/R})[0];return X!==void 0&&(c=X),y(V,["tfhd"]).map(function(Z){var $=m(Z,4),ee=m(Z,0)&16777215,ae=(ee&1)!==0,ne=(ee&2)!==0,oe=(ee&8)!==0,se=0,te=(ee&16)!==0,ie=0,ue=(ee&32)!==0,de=8;$===B&&(ae&&(de+=8),ne&&(de+=4),oe&&(se=m(Z,de),de+=4),te&&(ie=m(Z,de),de+=4),ue&&(de+=4),o.type==="video"&&(O=s(o.codec)),y(V,["trun"]).map(function(ce){var be=ce[0],he=m(ce,0)&16777215,Le=(he&1)!==0,xe=0,ye=(he&4)!==0,Se=(he&256)!==0,De=0,Re=(he&512)!==0,ke=0,Ie=(he&1024)!==0,Oe=(he&2048)!==0,we=0,Ne=m(ce,4),Ae=8;Le&&(xe=m(ce,Ae),Ae+=4),ye&&(Ae+=4);for(var Ce=xe+z,Pe=0;Pe<Ne;Pe++){if(Se?(De=m(ce,Ae),Ae+=4):De=se,Re?(ke=m(ce,Ae),Ae+=4):ke=ie,Ie&&(Ae+=4),Oe&&(be===0?we=m(ce,Ae):we=g(ce,Ae),Ae+=4),o.type===_.ElementaryStreamTypes.VIDEO)for(var me=0;me<ke;){var Te=m(L,Ce);if(Ce+=4,l(O,L[Ce])){var ve=L.subarray(Ce,Ce+Te);E(ve,O?2:1,c+we/R,T)}Ce+=Te,me+=Te+4}c+=De/R}}))})})}),T}function s(c){if(!c)return!1;var o=c.indexOf("."),T=o<0?c:c.substring(0,o);return T==="hvc1"||T==="hev1"||T==="dvh1"||T==="dvhe"}function l(c,o){if(c){var T=o>>1&63;return T===39||T===40}else{var L=o&31;return L===6}}function E(c,o,T,L){var R=d(c),B=0;B+=o;for(var O=0,K=0,G=!1,z=0;B<R.length;){O=0;do{if(B>=R.length)break;z=R[B++],O+=z}while(z===255);K=0;do{if(B>=R.length)break;z=R[B++],K+=z}while(z===255);var Y=R.length-B;if(!G&&O===4&&B<R.length){G=!0;var V=R[B++];if(V===181){var X=b(R,B);if(B+=2,X===49){var Z=m(R,B);if(B+=4,Z===1195456820){var $=R[B++];if($===3){var ee=R[B++],ae=31&ee,ne=64&ee,oe=ne?2+ae*3:0,se=new Uint8Array(oe);if(ne){se[0]=ee;for(var te=1;te<oe;te++)se[te]=R[B++]}L.push({type:$,payloadType:O,pts:T,bytes:se})}}}}}else if(O===5&&K<Y){if(G=!0,K>16){for(var ie=[],ue=0;ue<16;ue++){var de=R[B++].toString(16);ie.push(de.length==1?"0"+de:de),(ue===3||ue===5||ue===7||ue===9)&&ie.push("-")}for(var ce=K-16,be=new Uint8Array(ce),he=0;he<ce;he++)be[he]=R[B++];L.push({payloadType:O,pts:T,uuid:ie.join(""),userData:(0,D.utf8ArrayToStr)(be),userDataBytes:be})}}else if(K<Y)B+=K;else if(K>Y)break}}function d(c){for(var o=c.byteLength,T=[],L=1;L<o-2;)c[L]===0&&c[L+1]===0&&c[L+2]===3?(T.push(L+2),L+=2):L++;if(T.length===0)return c;var R=o-T.length,B=new Uint8Array(R),O=0;for(L=0;L<R;O++,L++)O===T[0]&&(O++,T.shift()),B[L]=c[O];return B}function f(c){var o=c[0],T="",L="",R=0,B=0,O=0,K=0,G=0,z=0;if(o===0){for(;v(c.subarray(z,z+1))!=="\0";)T+=v(c.subarray(z,z+1)),z+=1;for(T+=v(c.subarray(z,z+1)),z+=1;v(c.subarray(z,z+1))!=="\0";)L+=v(c.subarray(z,z+1)),z+=1;L+=v(c.subarray(z,z+1)),z+=1,R=m(c,12),B=m(c,16),K=m(c,20),G=m(c,24),z=28}else if(o===1){z+=4,R=m(c,z),z+=4;var Y=m(c,z);z+=4;var V=m(c,z);for(z+=4,O=Math.pow(2,32)*Y+V,Number.isSafeInteger(O)||(O=Number.MAX_SAFE_INTEGER,console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),K=m(c,z),z+=4,G=m(c,z),z+=4;v(c.subarray(z,z+1))!=="\0";)T+=v(c.subarray(z,z+1)),z+=1;for(T+=v(c.subarray(z,z+1)),z+=1;v(c.subarray(z,z+1))!=="\0";)L+=v(c.subarray(z,z+1)),z+=1;L+=v(c.subarray(z,z+1)),z+=1}var X=c.subarray(z,c.byteLength);return{schemeIdUri:T,value:L,timeScale:R,presentationTime:O,presentationTimeDelta:B,eventDuration:K,id:G,payload:X}}},"./src/utils/output-filter.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});var w=function(){function _(h,k){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=h,this.trackName=k}var D=_.prototype;return D.dispatchCue=function(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},D.newCue=function(k,S,v){(this.startTime===null||this.startTime>k)&&(this.startTime=k),this.endTime=S,this.screen=v,this.timelineController.createCaptionsTrack(this.trackName)},D.reset=function(){this.cueRanges=[],this.startTime=null},_}()},"./src/utils/texttrack-utils.ts":(W,M,x)=>{x.r(M),x.d(M,{addCueToTrack:()=>D,clearCurrentCues:()=>h,getCuesInRange:()=>v,removeCuesInRange:()=>k,sendAddTrackEvent:()=>_});var w=x("./src/utils/logger.ts");function _(b,m){var g;try{g=new Event("addtrack")}catch{g=document.createEvent("Event"),g.initEvent("addtrack",!1,!1)}g.track=b,m.dispatchEvent(g)}function D(b,m){var g=b.mode;if(g==="disabled"&&(b.mode="hidden"),b.cues&&!b.cues.getCueById(m.id))try{if(b.addCue(m),!b.cues.getCueById(m.id))throw new Error("addCue is failed for: "+m)}catch(y){w.logger.debug("[texttrack-utils]: "+y);var A=new self.TextTrackCue(m.startTime,m.endTime,m.text);A.id=m.id,b.addCue(A)}g==="disabled"&&(b.mode=g)}function h(b){var m=b.mode;if(m==="disabled"&&(b.mode="hidden"),b.cues)for(var g=b.cues.length;g--;)b.removeCue(b.cues[g]);m==="disabled"&&(b.mode=m)}function k(b,m,g,A){var y=b.mode;if(y==="disabled"&&(b.mode="hidden"),b.cues&&b.cues.length>0)for(var C=v(b.cues,m,g),i=0;i<C.length;i++)(!A||A(C[i]))&&b.removeCue(C[i]);y==="disabled"&&(b.mode=y)}function S(b,m){if(m<b[0].startTime)return 0;var g=b.length-1;if(m>b[g].endTime)return-1;for(var A=0,y=g;A<=y;){var C=Math.floor((y+A)/2);if(m<b[C].startTime)y=C-1;else if(m>b[C].startTime&&A<g)A=C+1;else return C}return b[A].startTime-m<m-b[y].startTime?A:y}function v(b,m,g){var A=[],y=S(b,m);if(y>-1)for(var C=y,i=b.length;C<i;C++){var a=b[C];if(a.startTime>=m&&a.endTime<=g)A.push(a);else if(a.startTime>g)return A}return A}},"./src/utils/time-ranges.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>_});var w={toString:function(h){for(var k="",S=h.length,v=0;v<S;v++)k+="["+h.start(v).toFixed(3)+","+h.end(v).toFixed(3)+"]";return k}};const _=w},"./src/utils/timescale-conversion.ts":(W,M,x)=>{x.r(M),x.d(M,{toMpegTsClockFromTimescale:()=>k,toMsFromMpegTsClock:()=>h,toTimescaleFromBase:()=>_,toTimescaleFromScale:()=>D});var w=9e4;function _(S,v,b,m){b===void 0&&(b=1),m===void 0&&(m=!1);var g=S*v*b;return m?Math.round(g):g}function D(S,v,b,m){return b===void 0&&(b=1),m===void 0&&(m=!1),_(S,v,1/b,m)}function h(S,v){return v===void 0&&(v=!1),_(S,1e3,1/w,v)}function k(S,v){return v===void 0&&(v=1),_(S,w,1/v)}},"./src/utils/typed-array.ts":(W,M,x)=>{x.r(M),x.d(M,{sliceUint8:()=>w});function w(_,D,h){return Uint8Array.prototype.slice?_.slice(D,h):new Uint8Array(Array.prototype.slice.call(_,D,h))}},"./src/utils/vttcue.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>w});const w=function(){if(typeof self<"u"&&self.VTTCue)return self.VTTCue;var _=["","lr","rl"],D=["start","middle","end","left","right"];function h(m,g){if(typeof g!="string"||!Array.isArray(m))return!1;var A=g.toLowerCase();return~m.indexOf(A)?A:!1}function k(m){return h(_,m)}function S(m){return h(D,m)}function v(m){for(var g=arguments.length,A=new Array(g>1?g-1:0),y=1;y<g;y++)A[y-1]=arguments[y];for(var C=1;C<arguments.length;C++){var i=arguments[C];for(var a in i)m[a]=i[a]}return m}function b(m,g,A){var y=this,C={enumerable:!0};y.hasBeenReset=!1;var i="",a=!1,n=m,u=g,p=A,r=null,t="",e=!0,s="auto",l="start",E=50,d="middle",f=50,c="middle";Object.defineProperty(y,"id",v({},C,{get:function(){return i},set:function(T){i=""+T}})),Object.defineProperty(y,"pauseOnExit",v({},C,{get:function(){return a},set:function(T){a=!!T}})),Object.defineProperty(y,"startTime",v({},C,{get:function(){return n},set:function(T){if(typeof T!="number")throw new TypeError("Start time must be set to a number.");n=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"endTime",v({},C,{get:function(){return u},set:function(T){if(typeof T!="number")throw new TypeError("End time must be set to a number.");u=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"text",v({},C,{get:function(){return p},set:function(T){p=""+T,this.hasBeenReset=!0}})),Object.defineProperty(y,"region",v({},C,{get:function(){return r},set:function(T){r=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"vertical",v({},C,{get:function(){return t},set:function(T){var L=k(T);if(L===!1)throw new SyntaxError("An invalid or illegal string was specified.");t=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"snapToLines",v({},C,{get:function(){return e},set:function(T){e=!!T,this.hasBeenReset=!0}})),Object.defineProperty(y,"line",v({},C,{get:function(){return s},set:function(T){if(typeof T!="number"&&T!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");s=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"lineAlign",v({},C,{get:function(){return l},set:function(T){var L=S(T);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");l=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"position",v({},C,{get:function(){return E},set:function(T){if(T<0||T>100)throw new Error("Position must be between 0 and 100.");E=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"positionAlign",v({},C,{get:function(){return d},set:function(T){var L=S(T);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");d=L,this.hasBeenReset=!0}})),Object.defineProperty(y,"size",v({},C,{get:function(){return f},set:function(T){if(T<0||T>100)throw new Error("Size must be between 0 and 100.");f=T,this.hasBeenReset=!0}})),Object.defineProperty(y,"align",v({},C,{get:function(){return c},set:function(T){var L=S(T);if(!L)throw new SyntaxError("An invalid or illegal string was specified.");c=L,this.hasBeenReset=!0}})),y.displayState=void 0}return b.prototype.getCueAsHTML=function(){var m=self.WebVTT;return m.convertCueToDOMTree(self,this.text)},b}()},"./src/utils/vttparser.ts":(W,M,x)=>{x.r(M),x.d(M,{VTTParser:()=>g,fixLineBreaks:()=>m,parseTimeStamp:()=>D});var w=x("./src/utils/vttcue.ts"),_=function(){function A(){}var y=A.prototype;return y.decode=function(i,a){if(!i)return"";if(typeof i!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(i))},A}();function D(A){function y(i,a,n,u){return(i|0)*3600+(a|0)*60+(n|0)+parseFloat(u||0)}var C=A.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return C?parseFloat(C[2])>59?y(C[2],C[3],0,C[4]):y(C[1],C[2],C[3],C[4]):null}var h=function(){function A(){this.values=Object.create(null)}var y=A.prototype;return y.set=function(i,a){!this.get(i)&&a!==""&&(this.values[i]=a)},y.get=function(i,a,n){return n?this.has(i)?this.values[i]:a[n]:this.has(i)?this.values[i]:a},y.has=function(i){return i in this.values},y.alt=function(i,a,n){for(var u=0;u<n.length;++u)if(a===n[u]){this.set(i,a);break}},y.integer=function(i,a){/^-?\d+$/.test(a)&&this.set(i,parseInt(a,10))},y.percent=function(i,a){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(a)){var n=parseFloat(a);if(n>=0&&n<=100)return this.set(i,n),!0}return!1},A}();function k(A,y,C,i){var a=i?A.split(i):[A];for(var n in a)if(typeof a[n]=="string"){var u=a[n].split(C);if(u.length===2){var p=u[0],r=u[1];y(p,r)}}}var S=new w.default(0,0,""),v=S.align==="middle"?"middle":"center";function b(A,y,C){var i=A;function a(){var p=D(A);if(p===null)throw new Error("Malformed timestamp: "+i);return A=A.replace(/^[^\sa-zA-Z-]+/,""),p}function n(p,r){var t=new h;k(p,function(l,E){var d;switch(l){case"region":for(var f=C.length-1;f>=0;f--)if(C[f].id===E){t.set(l,C[f].region);break}break;case"vertical":t.alt(l,E,["rl","lr"]);break;case"line":d=E.split(","),t.integer(l,d[0]),t.percent(l,d[0])&&t.set("snapToLines",!1),t.alt(l,d[0],["auto"]),d.length===2&&t.alt("lineAlign",d[1],["start",v,"end"]);break;case"position":d=E.split(","),t.percent(l,d[0]),d.length===2&&t.alt("positionAlign",d[1],["start",v,"end","line-left","line-right","auto"]);break;case"size":t.percent(l,E);break;case"align":t.alt(l,E,["start",v,"end","left","right"]);break}},/:/,/\s/),r.region=t.get("region",null),r.vertical=t.get("vertical","");var e=t.get("line","auto");e==="auto"&&S.line===-1&&(e=-1),r.line=e,r.lineAlign=t.get("lineAlign","start"),r.snapToLines=t.get("snapToLines",!0),r.size=t.get("size",100),r.align=t.get("align",v);var s=t.get("position","auto");s==="auto"&&S.position===50&&(s=r.align==="start"||r.align==="left"?0:r.align==="end"||r.align==="right"?100:50),r.position=s}function u(){A=A.replace(/^\s+/,"")}if(u(),y.startTime=a(),u(),A.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+i);A=A.slice(3),u(),y.endTime=a(),u(),n(A,y)}function m(A){return A.replace(/<br(?: \/)?>/gi,`
`)}var g=function(){function A(){this.state="INITIAL",this.buffer="",this.decoder=new _,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var y=A.prototype;return y.parse=function(i){var a=this;i&&(a.buffer+=a.decoder.decode(i,{stream:!0}));function n(){var s=a.buffer,l=0;for(s=m(s);l<s.length&&s[l]!=="\r"&&s[l]!==`
`;)++l;var E=s.slice(0,l);return s[l]==="\r"&&++l,s[l]===`
`&&++l,a.buffer=s.slice(l),E}function u(s){k(s,function(l,E){},/:/)}try{var p="";if(a.state==="INITIAL"){if(!/\r\n|\n/.test(a.buffer))return this;p=n();var r=p.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!r||!r[0])throw new Error("Malformed WebVTT signature.");a.state="HEADER"}for(var t=!1;a.buffer;){if(!/\r\n|\n/.test(a.buffer))return this;switch(t?t=!1:p=n(),a.state){case"HEADER":/:/.test(p)?u(p):p||(a.state="ID");continue;case"NOTE":p||(a.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(p)){a.state="NOTE";break}if(!p)continue;if(a.cue=new w.default(0,0,""),a.state="CUE",p.indexOf("-->")===-1){a.cue.id=p;continue}case"CUE":if(!a.cue){a.state="BADCUE";continue}try{b(p,a.cue,a.regionList)}catch{a.cue=null,a.state="BADCUE";continue}a.state="CUETEXT";continue;case"CUETEXT":{var e=p.indexOf("-->")!==-1;if(!p||e&&(t=!0)){a.oncue&&a.cue&&a.oncue(a.cue),a.cue=null,a.state="ID";continue}if(a.cue===null)continue;a.cue.text&&(a.cue.text+=`
`),a.cue.text+=p}continue;case"BADCUE":p||(a.state="ID")}}}catch{a.state==="CUETEXT"&&a.cue&&a.oncue&&a.oncue(a.cue),a.cue=null,a.state=a.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},y.flush=function(){var i=this;try{if((i.cue||i.state==="HEADER")&&(i.buffer+=`

`,i.parse()),i.state==="INITIAL"||i.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(a){i.onparsingerror&&i.onparsingerror(a)}return i.onflush&&i.onflush(),this},A}()},"./src/utils/webvtt-parser.ts":(W,M,x)=>{x.r(M),x.d(M,{generateCueId:()=>g,parseWebVTT:()=>y});var w=x("./src/polyfills/number.ts"),_=x("./src/utils/vttparser.ts"),D=x("./src/demux/id3.ts"),h=x("./src/utils/timescale-conversion.ts"),k=x("./src/remux/mp4-remuxer.ts"),S=/\r\n|\n\r|\n|\r/g,v=function(i,a,n){return n===void 0&&(n=0),i.slice(n,n+a.length)===a},b=function(i){var a=parseInt(i.slice(-3)),n=parseInt(i.slice(-6,-4)),u=parseInt(i.slice(-9,-7)),p=i.length>9?parseInt(i.substring(0,i.indexOf(":"))):0;if(!(0,w.isFiniteNumber)(a)||!(0,w.isFiniteNumber)(n)||!(0,w.isFiniteNumber)(u)||!(0,w.isFiniteNumber)(p))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+i);return a+=1e3*n,a+=60*1e3*u,a+=60*60*1e3*p,a},m=function(i){for(var a=5381,n=i.length;n;)a=a*33^i.charCodeAt(--n);return(a>>>0).toString()};function g(C,i,a){return m(C.toString())+m(i.toString())+m(a)}var A=function(i,a,n){var u=i[a],p=i[u.prevCC];if(!p||!p.new&&u.new){i.ccOffset=i.presentationOffset=u.start,u.new=!1;return}for(;(r=p)!==null&&r!==void 0&&r.new;){var r;i.ccOffset+=u.start-p.start,u.new=!1,u=p,p=i[u.prevCC]}i.presentationOffset=n};function y(C,i,a,n,u,p,r,t){var e=new _.VTTParser,s=(0,D.utf8ArrayToStr)(new Uint8Array(C)).trim().replace(S,`
`).split(`
`),l=[],E=(0,h.toMpegTsClockFromTimescale)(i,a),d="00:00.000",f=0,c=0,o,T=!0;e.oncue=function(L){var R=n[u],B=n.ccOffset,O=(f-E)/9e4;R!=null&&R.new&&(c!==void 0?B=n.ccOffset=R.start:A(n,u,O)),O&&(B=O-n.presentationOffset);var K=L.endTime-L.startTime,G=(0,k.normalizePts)((L.startTime+B-c)*9e4,p*9e4)/9e4;L.startTime=Math.max(G,0),L.endTime=Math.max(G+K,0);var z=L.text.trim();L.text=decodeURIComponent(encodeURIComponent(z)),L.id||(L.id=g(L.startTime,L.endTime,z)),L.endTime>0&&l.push(L)},e.onparsingerror=function(L){o=L},e.onflush=function(){if(o){t(o);return}r(l)},s.forEach(function(L){if(T)if(v(L,"X-TIMESTAMP-MAP=")){T=!1,L.slice(16).split(",").forEach(function(R){v(R,"LOCAL:")?d=R.slice(6):v(R,"MPEGTS:")&&(f=parseInt(R.slice(7)))});try{c=b(d)/1e3}catch(R){o=R}return}else L===""&&(T=!1);e.parse(L+`
`)}),e.flush()}},"./src/utils/xhr-loader.ts":(W,M,x)=>{x.r(M),x.d(M,{default:()=>k});var w=x("./src/utils/logger.ts"),_=x("./src/loader/load-stats.ts"),D=/^age:\s*[\d.]+\s*$/m,h=function(){function S(b){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=b?b.xhrSetup:null,this.stats=new _.LoadStats,this.retryDelay=0}var v=S.prototype;return v.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},v.abortInternal=function(){var m=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),m&&(m.onreadystatechange=null,m.onprogress=null,m.readyState!==4&&(this.stats.aborted=!0,m.abort()))},v.abort=function(){var m;this.abortInternal(),(m=this.callbacks)!==null&&m!==void 0&&m.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},v.load=function(m,g,A){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=m,this.config=g,this.callbacks=A,this.retryDelay=g.retryDelay,this.loadInternal()},v.loadInternal=function(){var m=this.config,g=this.context;if(!!m){var A=this.loader=new self.XMLHttpRequest,y=this.stats;y.loading.first=0,y.loaded=0;var C=this.xhrSetup;try{if(C)try{C(A,g.url)}catch{A.open("GET",g.url,!0),C(A,g.url)}A.readyState||A.open("GET",g.url,!0);var i=this.context.headers;if(i)for(var a in i)A.setRequestHeader(a,i[a])}catch(n){this.callbacks.onError({code:A.status,text:n.message},g,A);return}g.rangeEnd&&A.setRequestHeader("Range","bytes="+g.rangeStart+"-"+(g.rangeEnd-1)),A.onreadystatechange=this.readystatechange.bind(this),A.onprogress=this.loadprogress.bind(this),A.responseType=g.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),m.timeout),A.send()}},v.readystatechange=function(){var m=this.context,g=this.loader,A=this.stats;if(!(!m||!g)){var y=g.readyState,C=this.config;if(!A.aborted&&y>=2)if(self.clearTimeout(this.requestTimeout),A.loading.first===0&&(A.loading.first=Math.max(self.performance.now(),A.loading.start)),y===4){g.onreadystatechange=null,g.onprogress=null;var i=g.status,a=g.responseType==="arraybuffer";if(i>=200&&i<300&&(a&&g.response||g.responseText!==null)){A.loading.end=Math.max(self.performance.now(),A.loading.first);var n,u;if(a?(n=g.response,u=n.byteLength):(n=g.responseText,u=n.length),A.loaded=A.total=u,!this.callbacks)return;var p=this.callbacks.onProgress;if(p&&p(A,m,n,g),!this.callbacks)return;var r={url:g.responseURL,data:n};this.callbacks.onSuccess(r,A,m,g)}else A.retry>=C.maxRetry||i>=400&&i<499?(w.logger.error(i+" while loading "+m.url),this.callbacks.onError({code:i,text:g.statusText},m,g)):(w.logger.warn(i+" while loading "+m.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,C.maxRetryDelay),A.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),C.timeout)}},v.loadtimeout=function(){w.logger.warn("timeout while loading "+this.context.url);var m=this.callbacks;m&&(this.abortInternal(),m.onTimeout(this.stats,this.context,this.loader))},v.loadprogress=function(m){var g=this.stats;g.loaded=m.loaded,m.lengthComputable&&(g.total=m.total)},v.getCacheAge=function(){var m=null;if(this.loader&&D.test(this.loader.getAllResponseHeaders())){var g=this.loader.getResponseHeader("age");m=g?parseFloat(g):null}return m},S}();const k=h},"./node_modules/eventemitter3/index.js":W=>{var M=Object.prototype.hasOwnProperty,x="~";function w(){}Object.create&&(w.prototype=Object.create(null),new w().__proto__||(x=!1));function _(S,v,b){this.fn=S,this.context=v,this.once=b||!1}function D(S,v,b,m,g){if(typeof b!="function")throw new TypeError("The listener must be a function");var A=new _(b,m||S,g),y=x?x+v:v;return S._events[y]?S._events[y].fn?S._events[y]=[S._events[y],A]:S._events[y].push(A):(S._events[y]=A,S._eventsCount++),S}function h(S,v){--S._eventsCount===0?S._events=new w:delete S._events[v]}function k(){this._events=new w,this._eventsCount=0}k.prototype.eventNames=function(){var v=[],b,m;if(this._eventsCount===0)return v;for(m in b=this._events)M.call(b,m)&&v.push(x?m.slice(1):m);return Object.getOwnPropertySymbols?v.concat(Object.getOwnPropertySymbols(b)):v},k.prototype.listeners=function(v){var b=x?x+v:v,m=this._events[b];if(!m)return[];if(m.fn)return[m.fn];for(var g=0,A=m.length,y=new Array(A);g<A;g++)y[g]=m[g].fn;return y},k.prototype.listenerCount=function(v){var b=x?x+v:v,m=this._events[b];return m?m.fn?1:m.length:0},k.prototype.emit=function(v,b,m,g,A,y){var C=x?x+v:v;if(!this._events[C])return!1;var i=this._events[C],a=arguments.length,n,u;if(i.fn){switch(i.once&&this.removeListener(v,i.fn,void 0,!0),a){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,b),!0;case 3:return i.fn.call(i.context,b,m),!0;case 4:return i.fn.call(i.context,b,m,g),!0;case 5:return i.fn.call(i.context,b,m,g,A),!0;case 6:return i.fn.call(i.context,b,m,g,A,y),!0}for(u=1,n=new Array(a-1);u<a;u++)n[u-1]=arguments[u];i.fn.apply(i.context,n)}else{var p=i.length,r;for(u=0;u<p;u++)switch(i[u].once&&this.removeListener(v,i[u].fn,void 0,!0),a){case 1:i[u].fn.call(i[u].context);break;case 2:i[u].fn.call(i[u].context,b);break;case 3:i[u].fn.call(i[u].context,b,m);break;case 4:i[u].fn.call(i[u].context,b,m,g);break;default:if(!n)for(r=1,n=new Array(a-1);r<a;r++)n[r-1]=arguments[r];i[u].fn.apply(i[u].context,n)}}return!0},k.prototype.on=function(v,b,m){return D(this,v,b,m,!1)},k.prototype.once=function(v,b,m){return D(this,v,b,m,!0)},k.prototype.removeListener=function(v,b,m,g){var A=x?x+v:v;if(!this._events[A])return this;if(!b)return h(this,A),this;var y=this._events[A];if(y.fn)y.fn===b&&(!g||y.once)&&(!m||y.context===m)&&h(this,A);else{for(var C=0,i=[],a=y.length;C<a;C++)(y[C].fn!==b||g&&!y[C].once||m&&y[C].context!==m)&&i.push(y[C]);i.length?this._events[A]=i.length===1?i[0]:i:h(this,A)}return this},k.prototype.removeAllListeners=function(v){var b;return v?(b=x?x+v:v,this._events[b]&&h(this,b)):(this._events=new w,this._eventsCount=0),this},k.prototype.off=k.prototype.removeListener,k.prototype.addListener=k.prototype.on,k.prefixed=x,k.EventEmitter=k,W.exports=k},"./node_modules/url-toolkit/src/url-toolkit.js":function(W){(function(M){var x=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,w=/^(?=([^\/?#]*))\1([^]*)$/,_=/(?:\/|^)\.(?=\/)/g,D=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,h={buildAbsoluteURL:function(k,S,v){if(v=v||{},k=k.trim(),S=S.trim(),!S){if(!v.alwaysNormalize)return k;var b=h.parseURL(k);if(!b)throw new Error("Error trying to parse base URL.");return b.path=h.normalizePath(b.path),h.buildURLFromParts(b)}var m=h.parseURL(S);if(!m)throw new Error("Error trying to parse relative URL.");if(m.scheme)return v.alwaysNormalize?(m.path=h.normalizePath(m.path),h.buildURLFromParts(m)):S;var g=h.parseURL(k);if(!g)throw new Error("Error trying to parse base URL.");if(!g.netLoc&&g.path&&g.path[0]!=="/"){var A=w.exec(g.path);g.netLoc=A[1],g.path=A[2]}g.netLoc&&!g.path&&(g.path="/");var y={scheme:g.scheme,netLoc:m.netLoc,path:null,params:m.params,query:m.query,fragment:m.fragment};if(!m.netLoc&&(y.netLoc=g.netLoc,m.path[0]!=="/"))if(!m.path)y.path=g.path,m.params||(y.params=g.params,m.query||(y.query=g.query));else{var C=g.path,i=C.substring(0,C.lastIndexOf("/")+1)+m.path;y.path=h.normalizePath(i)}return y.path===null&&(y.path=v.alwaysNormalize?h.normalizePath(m.path):m.path),h.buildURLFromParts(y)},parseURL:function(k){var S=x.exec(k);return S?{scheme:S[1]||"",netLoc:S[2]||"",path:S[3]||"",params:S[4]||"",query:S[5]||"",fragment:S[6]||""}:null},normalizePath:function(k){for(k=k.split("").reverse().join("").replace(_,"");k.length!==(k=k.replace(D,"")).length;);return k.split("").reverse().join("")},buildURLFromParts:function(k){return k.scheme+k.netLoc+k.path+k.params+k.query+k.fragment}};W.exports=h})()}},Ee={};function J(W){var M=Ee[W];if(M!==void 0)return M.exports;var x=Ee[W]={exports:{}};return Be[W].call(x.exports,x,x.exports,J),x.exports}J.m=Be,J.n=W=>{var M=W&&W.__esModule?()=>W.default:()=>W;return J.d(M,{a:M}),M},J.d=(W,M)=>{for(var x in M)J.o(M,x)&&!J.o(W,x)&&Object.defineProperty(W,x,{enumerable:!0,get:M[x]})},J.o=(W,M)=>Object.prototype.hasOwnProperty.call(W,M),J.r=W=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(W,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(W,"__esModule",{value:!0})};var _e=J("./src/hls.ts");return _e=_e.default,_e})())})(hn);const br=fn(hn.exports);function xr(nt){const Ze=[],Be=nt.split("#");for(let Ee=0;Ee<Be.length;Ee++){const _e=Be[Ee].split("$");Ze.push({id:Ee+1,name:_e[0],url:_e[1]})}return Ze}const Cr=["show"],Tr=["show"],_r={key:0,class:"director"},Sr={key:1,class:"actor"},Lr={class:"episode"},Ir=ar({__name:"video",setup(nt){const Ze=sr(),Be=fr(),Ee=pt(!1),J=pt(null),_e=pt(),W=pt([]),M=pt(Ze.params.id),x=ir(()=>isNaN(Number(Ze.params.num))?0:Number(Ze.params.num)-1);function w(_){Be.push({name:"video-num",params:{id:M.value,num:_}})}return zt(()=>{pr(hr+"/"+M.value,{},_=>{_e.value=_,W.value=xr(_.url),Ee.value=!0})}),zt(()=>{w(x.value+1)}),or(()=>{zt(()=>{if(W.value.length!=0){if(W.value.length<=x.value){w(1);return}new Er({container:J.value,video:{url:W.value[x.value].url,type:"customHls",customType:{customHls:function(_,D){const h=new br;h.loadSource(_.src),h.attachMedia(_)}}}})}})}),(_,D)=>{const h=vr,k=gr,S=lr,v=Ar,b=yr;return lt(),un(S,{cols:"10","item-responsive":"",responsive:"screen"},{default:He(()=>[tt(h,{span:"0 m:2 l:2"}),tt(h,{span:"10 m:6 l:6"},{default:He(()=>[tt(b,{show:!Ee.value},{default:He(()=>{var m;return[ht("div",{class:dr(["player-box",Ee.value?"":"player-box-not-ready"])},[ht("div",{class:"play",ref_key:"player",ref:J,show:!Ee.value},null,8,Cr),ht("div",{class:"play-info",show:!Ee.value},null,8,Tr)],2),ht("div",null,[tt(v,null,ur({header:He(()=>{var g;return[Yt(vt((g=_e.value)==null?void 0:g.name),1)]}),action:He(()=>[tt(S,{cols:"12","item-responsive":"",responsive:"screen"},{default:He(()=>[(lt(!0),St(cn,null,cr(W.value,g=>(lt(),St(cn,null,[g.url!=""?(lt(),un(h,{key:0,span:"3 m:1 l:1"},{default:He(()=>[ht("div",Lr,[tt(k,{onClick:A=>w(g.id)},{default:He(()=>[Yt(vt(g.name),1)]),_:2},1032,["onClick"])])]),_:2},1024)):Vt("",!0)],64))),256))]),_:1})]),default:He(()=>{var g,A,y,C;return[((g=_e.value)==null?void 0:g.director)!=""?(lt(),St("div",_r," \u5BFC\u6F14\uFF1A"+vt((A=_e.value)==null?void 0:A.director),1)):Vt("",!0),((y=_e.value)==null?void 0:y.actor)!=""?(lt(),St("div",Sr," \u4E3B\u6F14\uFF1A"+vt((C=_e.value)==null?void 0:C.actor),1)):Vt("",!0)]}),_:2},[((m=_e.value)==null?void 0:m.description)!=""?{name:"footer",fn:He(()=>{var g;return[Yt(" \u7B80\u4ECB\uFF1A"+vt((g=_e.value)==null?void 0:g.description),1)]}),key:"0"}:void 0]),1024)])]}),_:1},8,["show"])]),_:1}),tt(h,{span:"0 m:2 l:2"})]),_:1})}}});const Pr=mr(Ir,[["__scopeId","data-v-803804e5"]]);export{Pr as default};
