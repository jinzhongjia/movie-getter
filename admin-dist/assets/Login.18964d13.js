import{d as B,r as a,Q as b,Z as w,T as n,S as e,U as u,bC as y,Y as m,bl as k,b6 as x}from"./index.4c1dfbbb.js";import{u as F,q as C}from"./api.ffde16e9.js";import{_ as N}from"./Checkbox.7bdea7db.js";import{a as U,_ as z}from"./Grid.34912ac8.js";import{_ as K}from"./Input.7226f636.js";import{_ as L}from"./Space.4f7edd38.js";import"./data.82102eaf.js";import"./next-frame-once.da993024.js";const V={class:"form"},j={class:"form"},D=m(" \u5FD8\u8BB0\u5BC6\u7801 "),T=m(" \u767B\u5F55 "),I=B({__name:"Login",setup(q){const s=a(!1),l=a(""),_=a(""),c=a(!1);window.$notification=F();function p(){s.value=!0,C(l.value,_.value,c.value).catch(()=>{s.value=!1})}return(Q,o)=>{const r=K,f=N,d=k,i=L,v=x,g=z,h=U;return b(),w(h,{cols:"1 l:5",responsive:"screen"},{default:n(()=>[e(g,{span:"1",offset:"0 l:2"},{default:n(()=>[e(i,{class:"card",justify:"center",vertical:""},{default:n(()=>[e(v,{title:"\u767B\u5F55"},{default:n(()=>[e(i,{vertical:""},{default:n(()=>[u("div",V,[e(r,{value:l.value,"onUpdate:value":o[0]||(o[0]=t=>l.value=t),type:"text",size:"large",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),u("div",null,[e(r,{value:_.value,"onUpdate:value":o[1]||(o[1]=t=>_.value=t),type:"password",size:"large","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",maxlength:8,onKeyup:y(p,["enter"])},null,8,["value","onKeyup"])]),u("div",j,[e(i,{justify:"space-between"},{default:n(()=>[e(f,{checked:c.value,"onUpdate:checked":o[2]||(o[2]=t=>c.value=t),size:"large",label:"\u8BB0\u4F4F\u5BC6\u7801"},null,8,["checked"]),e(d,{text:""},{default:n(()=>[D]),_:1})]),_:1})]),u("div",null,[e(d,{class:"button-block",type:"primary",loading:s.value,onClick:p},{default:n(()=>[T]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{I as default};