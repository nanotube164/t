import{r as o,j as e,g as f}from"./index-tKRtgB90.js";import m from"./control-panel-9giW7aIk.js";import I from"./container-MOrbqKYp.js";import O from"./toolbar-bJmy_63e.js";import{R as p,C as i}from"./row-WvoE6FX3.js";import"./cover_3-lkg-TeC1.js";import"./index-D0voYVcx.js";import"./bounce-pThjOkJi.js";import"./transition-Uc7vb3zK.js";import"./fade-HpdRXKiE.js";import"./motion-container-SumkH-7r.js";import"./repeat-E-fIdf_Q.js";import"./ReloadOutlined-6C8ShvGs.js";const x=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function V(){const t=o.useMemo(()=>({isText:!1,isMulti:!1,selectedVariant:"slideInUp"}),[]),[n,u]=o.useState(t.isText),[s,a]=o.useState(t.isMulti),[l,r]=o.useState(t.selectedVariant),d=()=>{u(t.isText),a(t.isMulti),r(t.selectedVariant)};return e.jsxs(f,{children:[e.jsx(p,{children:e.jsx(i,{xs:24,md:18,children:e.jsx(O,{isText:n,onChnageText:()=>u(!n),isMulti:s,onChangeMulti:()=>a(!s),onRefresh:d})})}),e.jsxs(p,{justify:"space-between",children:[e.jsx(i,{xs:24,md:18,children:e.jsx(I,{variant:l,isText:n,isMulti:s})}),e.jsx(i,{xs:24,md:5,children:e.jsx(m,{variantKey:x,selectedVariant:l,onChangeVarient:c=>r(c)})})]})]})}export{V as default};