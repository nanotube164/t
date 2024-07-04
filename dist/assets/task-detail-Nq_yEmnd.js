import{b7 as y,c as D,j as e,i as l,U as z,k as t}from"./index-tKRtgB90.js";import{d as x}from"./dayjs.min-FPul9pDH.js";import{T as d}from"./index-zycjR-EV.js";import{A as o}from"./index-_0m-lzVI.js";import{D as k}from"./index-yW9tmOlg.js";import{R as r}from"./index-ByH9SYTg.js";import{I}from"./index-VAcXbeIy.js";import{I as A}from"./index-FZcTj5bA.js";import"./CheckOutlined-g5MDPs9I.js";import"./EditOutlined-Z_c7PJKw.js";import"./styleChecker-ngeleDYd.js";import"./TextArea-hTdCA0yJ.js";import"./index-qxJHRbnC.js";import"./index-hPDjsNpv.js";import"./index-_Ebqtiwf.js";import"./EyeOutlined-lDKO_IOm.js";import"./SearchOutlined-wP6Gi4z0.js";import"./addEventListener-EDtlfxlh.js";function O({task:m}){const{title:p,reporter:h,assignee:j=[],tags:f=[],date:v,priority:g,description:u,attachments:a,comments:c=[]}=m,{colorInfo:n,colorWarning:N,colorSuccess:b}=D();return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx("div",{className:"item",children:e.jsx(d.Title,{level:4,children:p})}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Reporter"}),e.jsx(o,{shape:"circle",src:h,size:40})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Assignee"}),e.jsx(l,{children:j.map((s,i)=>e.jsx(o,{shape:"circle",src:s,size:40},i))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Tag"}),e.jsx(l,{wrap:!0,children:f.map(s=>e.jsx(z,{color:n,children:s},s))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Due Date"}),e.jsx(k,{bordered:!1,value:x(v)})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Priority"}),e.jsx("div",{children:e.jsx(r.Group,{defaultValue:g,children:e.jsxs(l,{children:[e.jsxs(r.Button,{value:"High",children:[e.jsx(t,{icon:"ic_rise",size:20,color:N}),e.jsx("span",{children:"High"})]}),e.jsxs(r.Button,{value:"Medium",children:[e.jsx(t,{icon:"ic_rise",size:20,color:b,className:"rotate-90"}),e.jsx("span",{children:"Medium"})]}),e.jsxs(r.Button,{value:"Low",children:[e.jsx(t,{icon:"ic_rise",size:20,color:n,className:"rotate-180"}),e.jsx("span",{children:"Low"})]})]})})})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Description"}),e.jsx(I.TextArea,{defaultValue:u})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Attachments"}),e.jsx(l,{wrap:!0,children:a==null?void 0:a.map(s=>e.jsx(A,{src:s,width:62,height:62,className:"rounded-lg"},s))})]})]}),e.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:c==null?void 0:c.map(({avatar:s,username:i,content:T,time:w})=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{src:s,size:40,className:"flex-shrink-0"}),e.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(d.Text,{children:i}),e.jsx(d.Text,{children:x(w).format("DD/MM/YYYY HH:mm")})]}),e.jsx("p",{children:T})]})]},i))})]})}const H=y.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 40px;
  .item {
    display: flex;
    align-items: center;
  }
  .label {
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    width: 100px;
    flex-shrink: 0;
    color: rgb(99, 115, 129);
    height: 40px;
    line-height: 40px;
  }
`;export{O as default};
