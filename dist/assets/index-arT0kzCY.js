import{r as p,j as e,g as x,W as u,cW as f,cU as i,U as h,c9 as s,I as a}from"./index-tKRtgB90.js";import{T as j}from"./Table-o5vjsNVU.js";import{RoleModal as E}from"./role-modal-6eajSqHY.js";import{P as w}from"./index-B4XA4tlu.js";import"./styleChecker-ngeleDYd.js";import"./addEventListener-EDtlfxlh.js";import"./List-K1aq5hik.js";import"./iconUtil-lb11mAsn.js";import"./index-ct8nSeFk.js";import"./index-Hp8F7D4k.js";import"./index-_Ebqtiwf.js";import"./index-ByH9SYTg.js";import"./useShowArrow-Kbh98tcw.js";import"./CheckOutlined-g5MDPs9I.js";import"./SearchOutlined-wP6Gi4z0.js";import"./Pagination-cdi9UDqR.js";import"./index-TjmR82pg.js";import"./index-qxJHRbnC.js";import"./index-tAzqEXvb.js";import"./index-VAcXbeIy.js";import"./TextArea-hTdCA0yJ.js";import"./EyeOutlined-lDKO_IOm.js";import"./extendsObject-h5XtBT9o.js";import"./index-cdWWgjTx.js";import"./row-WvoE6FX3.js";import"./index-dnDdURN_.js";import"./index-hPDjsNpv.js";const I=f,l={id:"",name:"",label:"",status:i.ENABLE,permission:[]};function H(){const[n,o]=p.useState({formValue:{...l},title:"新增",show:!1,onOk:()=>{o(t=>({...t,show:!1}))},onCancel:()=>{o(t=>({...t,show:!1}))}}),m=[{title:"名稱",dataIndex:"name",width:300},{title:"標籤",dataIndex:"label"},{title:"順序",dataIndex:"order",width:60},{title:"狀態",dataIndex:"status",align:"center",width:120,render:t=>e.jsx(h,{color:t===i.DISABLE?"error":"success",children:t===i.DISABLE?"Disable":"Enable"})},{title:"說明",dataIndex:"desc"},{title:"操作",key:"operation",align:"center",width:100,render:(t,r)=>e.jsxs("div",{className:"flex w-full justify-center text-gray",children:[e.jsx(s,{onClick:()=>d(r),children:e.jsx(a,{icon:"solar:pen-bold-duotone",size:18})}),e.jsx(w,{title:"Delete the Role",okText:"Yes",cancelText:"No",placement:"left",children:e.jsx(s,{children:e.jsx(a,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],c=()=>{o(t=>({...t,show:!0,title:"創建職稱",formValue:{...t.formValue,...l}}))},d=t=>{o(r=>({...r,show:!0,title:"編輯",formValue:t}))};return e.jsxs(x,{title:"職稱列表",extra:e.jsx(u,{type:"primary",onClick:c,children:"新增"}),children:[e.jsx(j,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:m,dataSource:I}),e.jsx(E,{...n})]})}export{H as default};