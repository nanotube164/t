import{r as p,cm as u,o as m,j as o,g as d,ac as x,c9 as C,I as f}from"./index-tKRtgB90.js";import{R as h,C as c}from"./row-WvoE6FX3.js";import{T as i}from"./index-zycjR-EV.js";import{I as j}from"./index-VAcXbeIy.js";import"./CheckOutlined-g5MDPs9I.js";import"./EditOutlined-Z_c7PJKw.js";import"./styleChecker-ngeleDYd.js";import"./TextArea-hTdCA0yJ.js";import"./index-qxJHRbnC.js";import"./EyeOutlined-lDKO_IOm.js";import"./SearchOutlined-wP6Gi4z0.js";function y(){const[e,t]=p.useState(null),{notification:r}=u.useApp();return{copiedText:e,copyFn:async s=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(s),t(s),r.success({message:"Copied!"}),!0}catch(n){return console.warn("Copy failed",n),t(null),!1}}}}function B(){const{copyFn:e}=y(),[t,r]=p.useState("https://www.npmjs.com/package/"),a=m.lorem.paragraphs({min:3,max:5}),s=l=>r(l.target.value),n=o.jsx(x,{title:"Copy",children:o.jsx(C,{className:"text-gray",onClick:()=>e(t),children:o.jsx(f,{icon:"eva:copy-fill",size:20})})});return o.jsx(d,{children:o.jsxs(h,{gutter:[16,16],children:[o.jsxs(c,{span:24,md:12,children:[o.jsx(i.Title,{level:5,children:"ON CHANGE"}),o.jsx(j,{suffix:n,value:t,onChange:s})]}),o.jsxs(c,{span:24,md:12,children:[o.jsx(i.Title,{level:5,children:"ON DOUBLE CLICK"}),o.jsx(i,{onDoubleClick:()=>e(a),children:a})]})]})})}export{B as default};