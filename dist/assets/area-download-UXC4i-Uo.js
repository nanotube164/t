import{r as o,j as a}from"./index-tKRtgB90.js";import{C as i}from"./index-yJkGNcdS.js";import{u as l,C as n}from"./useChart-4VrfOIty.js";import{T as m}from"./index-zycjR-EV.js";import{S as p}from"./index-TjmR82pg.js";import"./CheckOutlined-g5MDPs9I.js";import"./EditOutlined-Z_c7PJKw.js";import"./styleChecker-ngeleDYd.js";import"./TextArea-hTdCA0yJ.js";import"./index-qxJHRbnC.js";import"./useShowArrow-Kbh98tcw.js";import"./List-K1aq5hik.js";import"./SearchOutlined-wP6Gi4z0.js";function N(){const[e,t]=o.useState("2023"),r={2022:[{name:"China",data:[10,41,35,51,49,61,69,91,148,35,51]},{name:"America",data:[10,34,13,56,77,88,99,45,13,56,77]}],2023:[{name:"China",data:[51,35,41,10,91,69,62,148,91,35,51]},{name:"America",data:[56,13,34,10,77,99,88,45,13,56,77]}]};return a.jsxs(i,{className:"flex-col",children:[a.jsxs("header",{className:"flex w-full justify-between self-start",children:[a.jsx(m.Title,{level:5,children:"Area Installed"}),a.jsx(p,{size:"small",defaultValue:e,onChange:s=>t(s),options:[{value:2023,label:"2023"},{value:2022,label:"2022"}]})]}),a.jsx("main",{className:"w-full",children:a.jsx(c,{series:r[e]})})]})}function c({series:e}){const t=l({xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jut","Aug","Sep","Oct","Nov","Dec"]},tooltip:{}});return a.jsx(n,{type:"area",series:e,options:t,height:300})}export{N as default};