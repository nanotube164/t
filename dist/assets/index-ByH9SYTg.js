import{r as a,q as V,X,s as q,t as P,b0 as H,v as _,a9 as Q,aw as J,aj as L,ao as K,w as M,aR as U,aQ as Y,ae as Z,ap as ee,x as oe}from"./index-tKRtgB90.js";import{C as te}from"./index-_Ebqtiwf.js";const W=a.createContext(null),re=W.Provider,A=a.createContext(null),ne=A.Provider,ie=e=>{const{componentCls:r,antCls:n}=e,t=`${r}-group`;return{[t]:Object.assign(Object.assign({},q(e)),{display:"inline-block",fontSize:0,[`&${t}-rtl`]:{direction:"rtl"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},ae=e=>{const{componentCls:r,wrapperMarginInlineEnd:n,colorPrimary:t,radioSize:o,motionDurationSlow:d,motionDurationMid:p,motionEaseInOutCirc:f,colorBgContainer:s,colorBorder:y,lineWidth:S,colorBgContainerDisabled:v,colorTextDisabled:x,paddingXS:$,dotColorDisabled:k,lineType:w,radioColor:u,radioBgColor:m,calc:C}=e,h=`${r}-inner`,R=4,c=C(o).sub(C(R).mul(2)),b=C(1).mul(o).equal();return{[`${r}-wrapper`]:Object.assign(Object.assign({},q(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer",[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${P(S)} ${w} ${t}`,borderRadius:"50%",visibility:"hidden",content:'""'},[r]:Object.assign(Object.assign({},q(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${h}`]:{borderColor:t},[`${r}-input:focus-visible + ${h}`]:Object.assign({},H(e)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:b,height:b,marginBlockStart:C(1).mul(o).div(-2).equal(),marginInlineStart:C(1).mul(o).div(-2).equal(),backgroundColor:u,borderBlockStart:0,borderInlineStart:0,borderRadius:b,transform:"scale(0)",opacity:0,transition:`all ${d} ${f}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:b,height:b,backgroundColor:s,borderColor:y,borderStyle:"solid",borderWidth:S,borderRadius:"50%",transition:`all ${p}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[h]:{borderColor:t,backgroundColor:m,"&::after":{transform:`scale(${e.calc(e.dotSize).div(o).equal()})`,opacity:1,transition:`all ${d} ${f}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[h]:{backgroundColor:v,borderColor:y,cursor:"not-allowed","&::after":{backgroundColor:k}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:x,cursor:"not-allowed"},[`&${r}-checked`]:{[h]:{"&::after":{transform:`scale(${C(c).div(o).equal({unit:!1})})`}}}},[`span${r} + *`]:{paddingInlineStart:$,paddingInlineEnd:$}})}},le=e=>{const{buttonColor:r,controlHeight:n,componentCls:t,lineWidth:o,lineType:d,colorBorder:p,motionDurationSlow:f,motionDurationMid:s,buttonPaddingInline:y,fontSize:S,buttonBg:v,fontSizeLG:x,controlHeightLG:$,controlHeightSM:k,paddingXS:w,borderRadius:u,borderRadiusSM:m,borderRadiusLG:C,buttonCheckedBg:h,buttonSolidCheckedColor:R,colorTextDisabled:c,colorBgContainerDisabled:b,buttonCheckedBgDisabled:z,buttonCheckedColorDisabled:j,colorPrimary:B,colorPrimaryHover:l,colorPrimaryActive:I,buttonSolidCheckedBg:O,buttonSolidCheckedHoverBg:E,buttonSolidCheckedActiveBg:i,calc:g}=e;return{[`${t}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:y,paddingBlock:0,color:r,fontSize:S,lineHeight:P(g(n).sub(g(o).mul(2)).equal()),background:v,border:`${P(o)} ${d} ${p}`,borderBlockStartWidth:g(o).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:o,cursor:"pointer",transition:[`color ${s}`,`background ${s}`,`box-shadow ${s}`].join(","),a:{color:r},[`> ${t}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:g(o).mul(-1).equal(),insetInlineStart:g(o).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:o,paddingInline:0,backgroundColor:p,transition:`background-color ${f}`,content:'""'}},"&:first-child":{borderInlineStart:`${P(o)} ${d} ${p}`,borderStartStartRadius:u,borderEndStartRadius:u},"&:last-child":{borderStartEndRadius:u,borderEndEndRadius:u},"&:first-child:last-child":{borderRadius:u},[`${t}-group-large &`]:{height:$,fontSize:x,lineHeight:P(g($).sub(g(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:C,borderEndStartRadius:C},"&:last-child":{borderStartEndRadius:C,borderEndEndRadius:C}},[`${t}-group-small &`]:{height:k,paddingInline:g(w).sub(o).equal(),paddingBlock:0,lineHeight:P(g(k).sub(g(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m}},"&:hover":{position:"relative",color:B},"&:has(:focus-visible)":Object.assign({},H(e)),[`${t}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${t}-button-wrapper-disabled)`]:{zIndex:1,color:B,background:h,borderColor:B,"&::before":{backgroundColor:B},"&:first-child":{borderColor:B},"&:hover":{color:l,borderColor:l,"&::before":{backgroundColor:l}},"&:active":{color:I,borderColor:I,"&::before":{backgroundColor:I}}},[`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]:{color:R,background:O,borderColor:O,"&:hover":{color:R,background:E,borderColor:E},"&:active":{color:R,background:i,borderColor:i}},"&-disabled":{color:c,backgroundColor:b,borderColor:p,cursor:"not-allowed","&:first-child, &:hover":{color:c,backgroundColor:b,borderColor:p}},[`&-disabled${t}-button-wrapper-checked`]:{color:j,backgroundColor:z,borderColor:p,boxShadow:"none"}}}},de=e=>{const{wireframe:r,padding:n,marginXS:t,lineWidth:o,fontSizeLG:d,colorText:p,colorBgContainer:f,colorTextDisabled:s,controlItemBgActiveDisabled:y,colorTextLightSolid:S,colorPrimary:v,colorPrimaryHover:x,colorPrimaryActive:$,colorWhite:k}=e,w=4,u=d,m=r?u-w*2:u-(w+o)*2;return{radioSize:u,dotSize:m,dotColorDisabled:s,buttonSolidCheckedColor:S,buttonSolidCheckedBg:v,buttonSolidCheckedHoverBg:x,buttonSolidCheckedActiveBg:$,buttonBg:f,buttonCheckedBg:f,buttonColor:p,buttonCheckedBgDisabled:y,buttonCheckedColorDisabled:s,buttonPaddingInline:n-o,wrapperMarginInlineEnd:t,radioColor:r?v:k,radioBgColor:r?f:v}},F=V("Radio",e=>{const{controlOutline:r,controlOutlineWidth:n}=e,t=`0 0 0 ${P(n)} ${r}`,d=X(e,{radioFocusShadow:t,radioButtonFocusShadow:t});return[ie(d),ae(d),le(d)]},de,{unitless:{radioSize:!0,dotSize:!0}});var se=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const ce=(e,r)=>{var n,t;const o=a.useContext(W),d=a.useContext(A),{getPrefixCls:p,direction:f,radio:s}=a.useContext(_),y=a.useRef(null),S=Q(r,y),{isFormItemInput:v}=a.useContext(J),x=E=>{var i,g;(i=e.onChange)===null||i===void 0||i.call(e,E),(g=o==null?void 0:o.onChange)===null||g===void 0||g.call(o,E)},{prefixCls:$,className:k,rootClassName:w,children:u,style:m}=e,C=se(e,["prefixCls","className","rootClassName","children","style"]),h=p("radio",$),R=((o==null?void 0:o.optionType)||d)==="button",c=R?`${h}-button`:h,b=L(h),[z,j,B]=F(h,b),l=Object.assign({},C),I=a.useContext(K);o&&(l.name=o.name,l.onChange=x,l.checked=e.value===o.value,l.disabled=(n=l.disabled)!==null&&n!==void 0?n:o.disabled),l.disabled=(t=l.disabled)!==null&&t!==void 0?t:I;const O=M(`${c}-wrapper`,{[`${c}-wrapper-checked`]:l.checked,[`${c}-wrapper-disabled`]:l.disabled,[`${c}-wrapper-rtl`]:f==="rtl",[`${c}-wrapper-in-form-item`]:v},s==null?void 0:s.className,k,w,j,B,b);return z(a.createElement(U,{component:"Radio",disabled:l.disabled},a.createElement("label",{className:O,style:Object.assign(Object.assign({},s==null?void 0:s.style),m),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(te,Object.assign({},l,{className:M(l.className,!R&&Y),type:"radio",prefixCls:c,ref:S})),u!==void 0?a.createElement("span",null,u):null)))},ue=a.forwardRef(ce),D=ue,be=a.forwardRef((e,r)=>{const{getPrefixCls:n,direction:t}=a.useContext(_),[o,d]=Z(e.defaultValue,{value:e.value}),p=i=>{const g=o,N=i.target.value;"value"in e||d(N);const{onChange:G}=e;G&&N!==g&&G(i)},{prefixCls:f,className:s,rootClassName:y,options:S,buttonStyle:v="outline",disabled:x,children:$,size:k,style:w,id:u,onMouseEnter:m,onMouseLeave:C,onFocus:h,onBlur:R}=e,c=n("radio",f),b=`${c}-group`,z=L(c),[j,B,l]=F(c,z);let I=$;S&&S.length>0&&(I=S.map(i=>typeof i=="string"||typeof i=="number"?a.createElement(D,{key:i.toString(),prefixCls:c,disabled:x,value:i,checked:o===i},i):a.createElement(D,{key:`radio-group-value-options-${i.value}`,prefixCls:c,disabled:i.disabled||x,value:i.value,checked:o===i.value,title:i.title,style:i.style,id:i.id,required:i.required},i.label)));const O=ee(k),E=M(b,`${b}-${v}`,{[`${b}-${O}`]:O,[`${b}-rtl`]:t==="rtl"},s,y,B,l,z);return j(a.createElement("div",Object.assign({},oe(e,{aria:!0,data:!0}),{className:E,style:w,onMouseEnter:m,onMouseLeave:C,onFocus:h,onBlur:R,id:u,ref:r}),a.createElement(re,{value:{onChange:p,value:o,disabled:e.disabled,name:e.name,optionType:e.optionType}},I)))}),ge=a.memo(be);var Ce=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const pe=(e,r)=>{const{getPrefixCls:n}=a.useContext(_),{prefixCls:t}=e,o=Ce(e,["prefixCls"]),d=n("radio",t);return a.createElement(ne,{value:"button"},a.createElement(D,Object.assign({prefixCls:d},o,{type:"radio",ref:r})))},he=a.forwardRef(pe),T=D;T.Button=he;T.Group=ge;T.__ANT_RADIO=!0;const me=T;export{me as R};
