import{u as Z,T as ee,S as te,f as G,F as ne,c as re,e as se,g as oe,C as ce}from"./iconUtil-lb11mAsn.js";import{r as l,a5 as A,a6 as L,a0 as x,v as J,ak as ae,w as Q,al as M}from"./index-tKRtgB90.js";var le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const ie=le;var de=function(s,r){return l.createElement(A,L({},s,{ref:r,icon:ie}))};const fe=l.forwardRef(de);var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const pe=ue;var ye=function(s,r){return l.createElement(A,L({},s,{ref:r,icon:pe}))};const me=l.forwardRef(ye);var he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const ge=he;var ve=function(s,r){return l.createElement(A,L({},s,{ref:r,icon:ge}))};const xe=l.forwardRef(ve),_=4;function Oe(t){const{dropPosition:s,dropLevelOffset:r,prefixCls:n,indent:o,direction:e="ltr"}=t,a=e==="ltr"?"left":"right",c=e==="ltr"?"right":"left",i={[a]:-r*o+_,[c]:0};switch(s){case-1:i.top=-3;break;case 1:i.bottom=-3;break;default:i.bottom=-3,i[a]=o+_;break}return x.createElement("div",{style:i,className:`${n}-drop-indicator`})}const be=x.forwardRef((t,s)=>{const{getPrefixCls:r,direction:n,virtual:o,tree:e}=x.useContext(J),{prefixCls:a,className:c,showIcon:i=!1,showLine:d,switcherIcon:C,blockNode:b=!1,children:N,checkable:E=!1,selectable:K=!0,draggable:O,motion:w,style:H}=t,p=r("tree",a),k=r(),F=w??Object.assign(Object.assign({},ae(k)),{motionAppear:!1}),z=Object.assign(Object.assign({},t),{checkable:E,selectable:K,showIcon:i,motion:F,blockNode:b,showLine:!!d,dropIndicatorRender:Oe}),[S,D,m]=Z(p),f=x.useMemo(()=>{if(!O)return!1;let u={};switch(typeof O){case"function":u.nodeDraggable=O;break;case"object":u=Object.assign({},O);break}return u.icon!==!1&&(u.icon=u.icon||x.createElement(xe,null)),u},[O]),h=u=>x.createElement(te,{prefixCls:p,switcherIcon:C,treeNodeProps:u,showLine:d});return S(x.createElement(ee,Object.assign({itemHeight:20,ref:s,virtual:o},z,{style:Object.assign(Object.assign({},e==null?void 0:e.style),H),prefixCls:p,className:Q({[`${p}-icon-hide`]:!i,[`${p}-block-node`]:b,[`${p}-unselectable`]:!K,[`${p}-rtl`]:n==="rtl"},e==null?void 0:e.className,c,D,m),direction:n,checkable:E&&x.createElement("span",{className:`${p}-checkbox-inner`}),selectable:K,switcherIcon:h,draggable:f}),N))}),U=be;var v;(function(t){t[t.None=0]="None",t[t.Start=1]="Start",t[t.End=2]="End"})(v||(v={}));function V(t,s,r){const{key:n,children:o}=r;function e(a){const c=a[n],i=a[o];s(c,a)!==!1&&V(i||[],s,r)}t.forEach(e)}function Ee(t){let{treeData:s,expandedKeys:r,startKey:n,endKey:o,fieldNames:e}=t;const a=[];let c=v.None;if(n&&n===o)return[n];if(!n||!o)return[];function i(d){return d===n||d===o}return V(s,d=>{if(c===v.End)return!1;if(i(d)){if(a.push(d),c===v.None)c=v.Start;else if(c===v.Start)return c=v.End,!1}else c===v.Start&&a.push(d);return r.includes(d)},G(e)),a}function I(t,s,r){const n=M(s),o=[];return V(t,(e,a)=>{const c=n.indexOf(e);return c!==-1&&(o.push(a),n.splice(c,1)),!!n.length},G(r)),o}var B=function(t,s){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};function Ke(t){const{isLeaf:s,expanded:r}=t;return s?l.createElement(ne,null):r?l.createElement(fe,null):l.createElement(me,null)}function q(t){let{treeData:s,children:r}=t;return s||oe(r)}const we=(t,s)=>{var{defaultExpandAll:r,defaultExpandParent:n,defaultExpandedKeys:o}=t,e=B(t,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const a=l.useRef(),c=l.useRef(),i=()=>{const{keyEntities:m}=re(q(e));let f;return r?f=Object.keys(m):n?f=se(e.expandedKeys||o||[],m):f=e.expandedKeys||o,f},[d,C]=l.useState(e.selectedKeys||e.defaultSelectedKeys||[]),[b,N]=l.useState(()=>i());l.useEffect(()=>{"selectedKeys"in e&&C(e.selectedKeys)},[e.selectedKeys]),l.useEffect(()=>{"expandedKeys"in e&&N(e.expandedKeys)},[e.expandedKeys]);const E=(m,f)=>{var h;return"expandedKeys"in e||N(m),(h=e.onExpand)===null||h===void 0?void 0:h.call(e,m,f)},K=(m,f)=>{var h;const{multiple:u,fieldNames:P}=e,{node:W,nativeEvent:g}=f,{key:T=""}=W,$=q(e),j=Object.assign(Object.assign({},f),{selected:!0}),X=(g==null?void 0:g.ctrlKey)||(g==null?void 0:g.metaKey),Y=g==null?void 0:g.shiftKey;let y;u&&X?(y=m,a.current=T,c.current=y,j.selectedNodes=I($,y,P)):u&&Y?(y=Array.from(new Set([].concat(M(c.current||[]),M(Ee({treeData:$,expandedKeys:b,startKey:T,endKey:a.current,fieldNames:P}))))),j.selectedNodes=I($,y,P)):(y=[T],a.current=T,c.current=y,j.selectedNodes=I($,y,P)),(h=e.onSelect)===null||h===void 0||h.call(e,y,j),"selectedKeys"in e||C(y)},{getPrefixCls:O,direction:w}=l.useContext(J),{prefixCls:H,className:p,showIcon:k=!0,expandAction:F="click"}=e,z=B(e,["prefixCls","className","showIcon","expandAction"]),S=O("tree",H),D=Q(`${S}-directory`,{[`${S}-directory-rtl`]:w==="rtl"},p);return l.createElement(U,Object.assign({icon:Ke,ref:s,blockNode:!0},z,{showIcon:k,expandAction:F,prefixCls:S,className:D,expandedKeys:b,selectedKeys:d,onSelect:K,onExpand:E}))},Se=l.forwardRef(we),Ce=Se,R=U;R.DirectoryTree=Ce;R.TreeNode=ce;const Te=R;export{Te as T};
