import{c as l,j as e,g as m,cZ as n,U as a,cU as s}from"./index-tKRtgB90.js";import{T as c}from"./Table-o5vjsNVU.js";import"./styleChecker-ngeleDYd.js";import"./addEventListener-EDtlfxlh.js";import"./List-K1aq5hik.js";import"./iconUtil-lb11mAsn.js";import"./index-ct8nSeFk.js";import"./index-Hp8F7D4k.js";import"./index-_Ebqtiwf.js";import"./index-ByH9SYTg.js";import"./useShowArrow-Kbh98tcw.js";import"./CheckOutlined-g5MDPs9I.js";import"./SearchOutlined-wP6Gi4z0.js";import"./Pagination-cdi9UDqR.js";import"./index-TjmR82pg.js";import"./index-qxJHRbnC.js";import"./index-tAzqEXvb.js";import"./index-VAcXbeIy.js";import"./TextArea-hTdCA0yJ.js";import"./EyeOutlined-lDKO_IOm.js";import"./extendsObject-h5XtBT9o.js";const d=n;function A(){const{colorTextSecondary:i}=l(),o=[{title:"Name",dataIndex:"name",width:300,render:(t,r)=>e.jsxs("div",{className:"flex",children:[e.jsx("img",{alt:"",src:r.avatar,className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{className:"text-sm",children:r.username}),e.jsx("span",{style:{color:i},className:"text-xs",children:r.email})]})]})},{title:"Role",dataIndex:"role",align:"center",width:120,render:t=>e.jsx(a,{color:"cyan",children:t.name})},{title:"Status",dataIndex:"status",align:"center",width:120,render:t=>e.jsx(a,{color:t===s.DISABLE?"error":"success",children:t===s.DISABLE?"Disable":"Enable"})}];return e.jsx(m,{title:"User List",children:e.jsx(c,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:o,dataSource:d})})}export{A as default};
