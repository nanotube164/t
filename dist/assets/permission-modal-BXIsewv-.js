import{r as l,aT as $,al as fe,aa as Wt,aW as Et,bn as tt,aU as Ft,br as zt,aX as ve,a4 as Ae,a6 as Nt,ae as mt,aV as Bt,q as Ut,X as kt,t as gt,bh as qt,v as Gt,aN as Xt,aj as St,w as Ct,aw as Yt,ad as Jt,ap as Zt,ao as Qt,bi as er,bj as yt,cT as tr,j as m,cV as at,cU as bt}from"./index-tKRtgB90.js";import{F as j}from"./index-cdWWgjTx.js";import{M as rr,I as nr}from"./index-dnDdURN_.js";import{R as re}from"./index-ByH9SYTg.js";import{I as Ue}from"./index-VAcXbeIy.js";import{e as ar,f as lr,B as or,u as ir,b as sr,D as cr,c as ur,d as dr}from"./useShowArrow-Kbh98tcw.js";import{a as lt,c as fr,T as vr,h as hr,i as pr,S as mr}from"./iconUtil-lb11mAsn.js";import{g as gr,a as Sr}from"./index-qxJHRbnC.js";import{g as Cr}from"./index-ct8nSeFk.js";import"./row-WvoE6FX3.js";import"./TextArea-hTdCA0yJ.js";import"./index-_Ebqtiwf.js";import"./EyeOutlined-lDKO_IOm.js";import"./SearchOutlined-wP6Gi4z0.js";import"./List-K1aq5hik.js";import"./CheckOutlined-g5MDPs9I.js";const yr=function(e){var t=l.useRef({valueLabels:new Map});return l.useMemo(function(){var n=t.current.valueLabels,a=new Map,r=e.map(function(i){var o,c=i.value,s=(o=i.label)!==null&&o!==void 0?o:n.get(c);return a.set(c,s),$($({},i),{},{label:s})});return t.current.valueLabels=a,[r]},[e])},br=function(e,t,n,a){return l.useMemo(function(){var r=e.map(function(s){var d=s.value;return d}),i=t.map(function(s){var d=s.value;return d}),o=r.filter(function(s){return!a[s]});if(n){var c=lt(r,!0,a);r=c.checkedKeys,i=c.halfCheckedKeys}return[Array.from(new Set([].concat(fe(o),fe(r)))),i]},[e,t,n,a])};function xr(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Ir(e){var t=e||{},n=t.label,a=t.value,r=t.children,i=a||"value";return{_title:n?[n]:["title","label"],value:i,key:i,children:r||"children"}}function ot(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function wr(e,t){var n=[];function a(r){r.forEach(function(i){var o=i[t.children];o&&(n.push(i[t.value]),a(o))})}return a(e),n}function xt(e){return e==null}const Er=function(e,t){return l.useMemo(function(){var n=fr(e,{fieldNames:t,initWrapper:function(r){return $($({},r),{},{valueEntities:new Map})},processEntity:function(r,i){var o=r.node[t.value];i.valueEntities.set(o,r)}});return n},[e,t])};var st=function(){return null},Nr=["children","value"];function Tt(e){return Wt(e).map(function(t){if(!l.isValidElement(t)||!t.type)return null;var n=t,a=n.key,r=n.props,i=r.children,o=r.value,c=Et(r,Nr),s=$({key:a,value:o},c),d=Tt(i);return d.length&&(s.children=d),s}).filter(function(t){return t})}function it(e){if(!e)return e;var t=$({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return tt(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function kr(e,t,n,a,r,i){var o=null,c=null;function s(){function d(u){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return u.map(function(b,P){var N="".concat(T,"-").concat(P),M=b[i.value],A=n.includes(M),X=d(b[i.children]||[],N,A),z=l.createElement(st,b,X.map(function(D){return D.node}));if(t===M&&(o=z),A){var g={pos:N,node:z,children:X};return E||c.push(g),g}return null}).filter(function(b){return b})}c||(c=[],d(a),c.sort(function(u,T){var E=u.node.props.value,b=T.node.props.value,P=n.indexOf(E),N=n.indexOf(b);return P-N}))}Object.defineProperty(e,"triggerNode",{get:function(){return tt(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),s(),o}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return tt(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),s(),r?c:c.map(function(u){var T=u.node;return T})}})}const Tr=function(e,t,n){var a=n.treeNodeFilterProp,r=n.filterTreeNode,i=n.fieldNames,o=i.children;return l.useMemo(function(){if(!t||r===!1)return e;var c;if(typeof r=="function")c=r;else{var s=t.toUpperCase();c=function(T,E){var b=E[a];return String(b).toUpperCase().includes(s)}}function d(u){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return u.reduce(function(E,b){var P=b[o],N=T||c(t,it(b)),M=d(P||[],N);return(N||M.length)&&E.push($($({},b),{},Ft({isLeaf:void 0},o,M))),E},[])}return d(e)},[e,t,o,a,r])};function It(e){var t=l.useRef();t.current=e;var n=l.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}function Dr(e,t){var n=t.id,a=t.pId,r=t.rootPId,i={},o=[],c=e.map(function(s){var d=$({},s),u=d[n];return i[u]=d,d.key=d.key||u,d});return c.forEach(function(s){var d=s[a],u=i[d];u&&(u.children=u.children||[],u.children.push(s)),(d===r||!u&&r===null)&&o.push(s)}),o}function Lr(e,t,n){return l.useMemo(function(){return e?n?Dr(e,$({id:"id",pId:"pId",rootPId:null},n!==!0?n:{})):e:Tt(t)},[t,n,e])}var Dt=l.createContext(null),Lt=l.createContext(null),Pr={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Mr=function(t,n){var a=ar(),r=a.prefixCls,i=a.multiple,o=a.searchValue,c=a.toggleOpen,s=a.open,d=a.notFoundContent,u=l.useContext(Lt),T=u.virtual,E=u.listHeight,b=u.listItemHeight,P=u.listItemScrollOffset,N=u.treeData,M=u.fieldNames,A=u.onSelect,X=u.dropdownMatchSelectWidth,z=u.treeExpandAction,g=l.useContext(Dt),D=g.checkable,k=g.checkedKeys,Ne=g.halfCheckedKeys,ne=g.treeExpandedKeys,He=g.treeDefaultExpandAll,Re=g.treeDefaultExpandedKeys,ke=g.onTreeExpand,ae=g.treeIcon,he=g.showTreeIcon,H=g.switcherIcon,Te=g.treeLine,Y=g.treeNodeFilterProp,le=g.loadData,R=g.treeLoadedKeys,De=g.treeMotion,Le=g.onTreeLoad,Pe=g.keyEntities,B=l.useRef(),I=zt(function(){return N},[s,N],function(x,f){return f[0]&&x[1]!==f[1]}),pe=l.useState(null),W=ve(pe,2),oe=W[0],ie=W[1],_=Pe[oe],J=l.useMemo(function(){return D?{checked:k,halfChecked:Ne}:null},[D,k,Ne]);l.useEffect(function(){if(s&&!i&&k.length){var x;(x=B.current)===null||x===void 0||x.scrollTo({key:k[0]}),ie(k[0])}},[s]);var me=String(o).toLowerCase(),ge=function(f){return me?String(f[Y]).toLowerCase().includes(me):!1},Se=l.useState(Re),Ce=ve(Se,2),ye=Ce[0],Me=Ce[1],We=l.useState(null),Z=ve(We,2),Q=Z[0],se=Z[1],V=l.useMemo(function(){return ne?fe(ne):o?Q:ye},[ye,Q,ne,o]);l.useEffect(function(){o&&se(wr(N,M))},[o]);var Fe=function(f){Me(f),se(f),ke&&ke(f)},be=function(f){f.preventDefault()},U=function(f,q){var K=q.node;D&&ot(K)||(A(K.key,{selected:!k.includes(K.key)}),i||c(!1))};if(l.useImperativeHandle(n,function(){var x;return{scrollTo:(x=B.current)===null||x===void 0?void 0:x.scrollTo,onKeyDown:function(q){var K,_e=q.which;switch(_e){case Ae.UP:case Ae.DOWN:case Ae.LEFT:case Ae.RIGHT:(K=B.current)===null||K===void 0||K.onKeyDown(q);break;case Ae.ENTER:{if(_){var Ie=(_==null?void 0:_.node)||{},Oe=Ie.selectable,ce=Ie.value;Oe!==!1&&U(null,{node:{key:oe},selected:!k.includes(ce)})}break}case Ae.ESC:c(!1)}},onKeyUp:function(){}}}),I.length===0)return l.createElement("div",{role:"listbox",className:"".concat(r,"-empty"),onMouseDown:be},d);var xe={fieldNames:M};return R&&(xe.loadedKeys=R),V&&(xe.expandedKeys=V),l.createElement("div",{onMouseDown:be},_&&s&&l.createElement("span",{style:Pr,"aria-live":"assertive"},_.node.value),l.createElement(vr,Nt({ref:B,focusable:!1,prefixCls:"".concat(r,"-tree"),treeData:I,height:E,itemHeight:b,itemScrollOffset:P,virtual:T!==!1&&X!==!1,multiple:i,icon:ae,showIcon:he,switcherIcon:H,showLine:Te,loadData:o?null:le,motion:De,activeKey:oe,checkable:D,checkStrictly:!0,checkedKeys:J,selectedKeys:D?[]:k,defaultExpandAll:He},xe,{onActiveChange:ie,onSelect:U,onCheck:U,onExpand:Fe,onLoad:Le,filterTreeNode:ge,expandAction:z})))},Pt=l.forwardRef(Mr);Pt.displayName="OptionList";var ct="SHOW_ALL",ut="SHOW_PARENT",rt="SHOW_CHILD";function wt(e,t,n,a){var r=new Set(e);return t===rt?e.filter(function(i){var o=n[i];return!(o&&o.children&&o.children.some(function(c){var s=c.node;return r.has(s[a.value])})&&o.children.every(function(c){var s=c.node;return ot(s)||r.has(s[a.value])}))}):t===ut?e.filter(function(i){var o=n[i],c=o?o.parent:null;return!(c&&!ot(c.node)&&r.has(c.key))}):e}var _r=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Or(e){return!e||Bt(e)!=="object"}var Vr=l.forwardRef(function(e,t){var n=e.id,a=e.prefixCls,r=a===void 0?"rc-tree-select":a,i=e.value,o=e.defaultValue,c=e.onChange,s=e.onSelect,d=e.onDeselect,u=e.searchValue,T=e.inputValue,E=e.onSearch,b=e.autoClearSearchValue,P=b===void 0?!0:b,N=e.filterTreeNode,M=e.treeNodeFilterProp,A=M===void 0?"value":M,X=e.showCheckedStrategy,z=e.treeNodeLabelProp,g=e.multiple,D=e.treeCheckable,k=e.treeCheckStrictly,Ne=e.labelInValue,ne=e.fieldNames,He=e.treeDataSimpleMode,Re=e.treeData,ke=e.children,ae=e.loadData,he=e.treeLoadedKeys,H=e.onTreeLoad,Te=e.treeDefaultExpandAll,Y=e.treeExpandedKeys,le=e.treeDefaultExpandedKeys,R=e.onTreeExpand,De=e.treeExpandAction,Le=e.virtual,Pe=e.listHeight,B=Pe===void 0?200:Pe,I=e.listItemHeight,pe=I===void 0?20:I,W=e.listItemScrollOffset,oe=W===void 0?0:W,ie=e.onDropdownVisibleChange,_=e.dropdownMatchSelectWidth,J=_===void 0?!0:_,me=e.treeLine,ge=e.treeIcon,Se=e.showTreeIcon,Ce=e.switcherIcon,ye=e.treeMotion,Me=Et(e,_r),We=lr(n),Z=D&&!k,Q=D||k,se=k||Ne,V=Q||g,Fe=mt(o,{value:i}),be=ve(Fe,2),U=be[0],xe=be[1],x=l.useMemo(function(){return D?X||rt:ct},[X,D]),f=l.useMemo(function(){return Ir(ne)},[JSON.stringify(ne)]),q=mt("",{value:u!==void 0?u:T,postState:function(v){return v||""}}),K=ve(q,2),_e=K[0],Ie=K[1],Oe=function(v){Ie(v),E==null||E(v)},ce=Lr(Re,ke,He),Ge=Er(ce,f),L=Ge.keyEntities,ee=Ge.valueEntities,Xe=l.useCallback(function(h){var v=[],p=[];return h.forEach(function(S){ee.has(S)?p.push(S):v.push(S)}),{missingRawValues:v,existRawValues:p}},[ee]),Ye=Tr(ce,_e,{fieldNames:f,treeNodeFilterProp:A,filterTreeNode:N}),Ve=l.useCallback(function(h){if(h){if(z)return h[z];for(var v=f._title,p=0;p<v.length;p+=1){var S=h[v[p]];if(S!==void 0)return S}}},[f,z]),te=l.useCallback(function(h){var v=xr(h);return v.map(function(p){return Or(p)?{value:p}:p})},[]),Je=l.useCallback(function(h){var v=te(h);return v.map(function(p){var S=p.label,O=p.value,w=p.halfChecked,C,y=ee.get(O);if(y){var F;S=(F=S)!==null&&F!==void 0?F:Ve(y.node),C=y.node.disabled}else if(S===void 0){var ue=te(U).find(function(ze){return ze.value===O});S=ue.label}return{label:S,value:O,halfChecked:w,disabled:C}})},[ee,Ve,te,U]),dt=l.useMemo(function(){return te(U)},[te,U]),Mt=l.useMemo(function(){var h=[],v=[];return dt.forEach(function(p){p.halfChecked?v.push(p):h.push(p)}),[h,v]},[dt]),ft=ve(Mt,2),Ke=ft[0],vt=ft[1],ht=l.useMemo(function(){return Ke.map(function(h){return h.value})},[Ke]),_t=br(Ke,vt,Z,L),pt=ve(_t,2),je=pt[0],Ze=pt[1],Ot=l.useMemo(function(){var h=wt(je,x,L,f),v=h.map(function(w){var C,y;return(C=(y=L[w])===null||y===void 0||(y=y.node)===null||y===void 0?void 0:y[f.value])!==null&&C!==void 0?C:w}),p=v.map(function(w){var C=Ke.find(function(y){return y.value===w});return{value:w,label:C==null?void 0:C.label}}),S=Je(p),O=S[0];return!V&&O&&xt(O.value)&&xt(O.label)?[]:S.map(function(w){var C;return $($({},w),{},{label:(C=w.label)!==null&&C!==void 0?C:w.value})})},[f,V,je,Ke,Je,x,L]),Vt=yr(Ot),Kt=ve(Vt,1),jt=Kt[0],Qe=It(function(h,v,p){var S=Je(h);if(xe(S),P&&Ie(""),c){var O=h;if(Z){var w=wt(h,x,L,f);O=w.map(function(G){var de=ee.get(G);return de?de.node[f.value]:G})}var C=v||{triggerValue:void 0,selected:void 0},y=C.triggerValue,F=C.selected,ue=O;if(k){var ze=vt.filter(function(G){return!O.includes(G.value)});ue=[].concat(fe(ue),fe(ze))}var Be=Je(ue),we={preValue:Ke,triggerValue:y},$e=!0;(k||p==="selection"&&!F)&&($e=!1),kr(we,y,h,ce,$e,f),Q?we.checked=F:we.selected=F;var et=se?Be:Be.map(function(G){return G.value});c(V?et:et[0],se?null:Be.map(function(G){return G.label}),we)}}),nt=l.useCallback(function(h,v){var p,S=v.selected,O=v.source,w=L[h],C=w==null?void 0:w.node,y=(p=C==null?void 0:C[f.value])!==null&&p!==void 0?p:h;if(!V)Qe([y],{selected:!0,triggerValue:y},"option");else{var F=S?[].concat(fe(ht),[y]):je.filter(function(de){return de!==y});if(Z){var ue=Xe(F),ze=ue.missingRawValues,Be=ue.existRawValues,we=Be.map(function(de){return ee.get(de).key}),$e;if(S){var et=lt(we,!0,L);$e=et.checkedKeys}else{var G=lt(we,{checked:!1,halfCheckedKeys:Ze},L);$e=G.checkedKeys}F=[].concat(fe(ze),fe($e.map(function(de){return L[de].node[f.value]})))}Qe(F,{selected:S,triggerValue:y},O||"option")}S||!V?s==null||s(y,it(C)):d==null||d(y,it(C))},[Xe,ee,L,f,V,ht,Qe,Z,s,d,je,Ze]),$t=l.useCallback(function(h){if(ie){var v={};Object.defineProperty(v,"documentClickClose",{get:function(){return tt(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),ie(h,v)}},[ie]),At=It(function(h,v){var p=h.map(function(S){return S.value});if(v.type==="clear"){Qe(p,{},"selection");return}v.values.length&&nt(v.values[0].value,{selected:!1,source:"selection"})}),Ht=l.useMemo(function(){return{virtual:Le,dropdownMatchSelectWidth:J,listHeight:B,listItemHeight:pe,listItemScrollOffset:oe,treeData:Ye,fieldNames:f,onSelect:nt,treeExpandAction:De}},[Le,J,B,pe,oe,Ye,f,nt,De]),Rt=l.useMemo(function(){return{checkable:Q,loadData:ae,treeLoadedKeys:he,onTreeLoad:H,checkedKeys:je,halfCheckedKeys:Ze,treeDefaultExpandAll:Te,treeExpandedKeys:Y,treeDefaultExpandedKeys:le,onTreeExpand:R,treeIcon:ge,treeMotion:ye,showTreeIcon:Se,switcherIcon:Ce,treeLine:me,treeNodeFilterProp:A,keyEntities:L}},[Q,ae,he,H,je,Ze,Te,Y,le,R,ge,ye,Se,Ce,me,A,L]);return l.createElement(Lt.Provider,{value:Ht},l.createElement(Dt.Provider,{value:Rt},l.createElement(or,Nt({ref:t},Me,{id:We,prefixCls:r,mode:V?"multiple":void 0,displayValues:jt,onDisplayValuesChange:At,searchValue:_e,onSearch:Oe,OptionList:Pt,emptyOptions:!ce.length,onDropdownVisibleChange:$t,dropdownMatchSelectWidth:J}))))}),qe=Vr;qe.TreeNode=st;qe.SHOW_ALL=ct;qe.SHOW_PARENT=ut;qe.SHOW_CHILD=rt;const Kr=e=>{const{componentCls:t,treePrefixCls:n,colorBgElevated:a}=e,r=`.${n}`;return[{[`${t}-dropdown`]:[{padding:`${gt(e.paddingXS)} ${gt(e.calc(e.paddingXS).div(2).equal())}`},hr(n,kt(e,{colorBgContainer:a})),{[r]:{borderRadius:0,[`${r}-list-holder-inner`]:{alignItems:"stretch",[`${r}-treenode`]:{[`${r}-node-content-wrapper`]:{flex:"auto"}}}}},Cr(`${n}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${r}-switcher${r}-switcher_close`]:{[`${r}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function jr(e,t,n){return Ut("TreeSelect",a=>{const r=kt(a,{treePrefixCls:t});return[Kr(r)]},pr)(e,n)}var $r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Ar=(e,t)=>{var n,a,{prefixCls:r,size:i,disabled:o,bordered:c=!0,className:s,rootClassName:d,treeCheckable:u,multiple:T,listHeight:E=256,listItemHeight:b=26,placement:P,notFoundContent:N,switcherIcon:M,treeLine:A,getPopupContainer:X,popupClassName:z,dropdownClassName:g,treeIcon:D=!1,transitionName:k,choiceTransitionName:Ne="",status:ne,treeExpandAction:He,builtinPlacements:Re,dropdownMatchSelectWidth:ke,popupMatchSelectWidth:ae,allowClear:he}=e,H=$r(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear"]);const{getPopupContainer:Te,getPrefixCls:Y,renderEmpty:le,direction:R,virtual:De,popupMatchSelectWidth:Le,popupOverflow:Pe}=l.useContext(Gt),B=Y(),I=Y("select",r),pe=Y("select-tree",r),W=Y("tree-select",r),{compactSize:oe,compactItemClassnames:ie}=Xt(I,R),_=St(I),J=St(W),[me,ge,Se]=ir(I,_),[Ce]=jr(W,pe,J),ye=Ct(z||g,`${W}-dropdown`,{[`${W}-dropdown-rtl`]:R==="rtl"},d,Se,_,J,ge),Me=!!(u||T),We=dr(H.suffixIcon,H.showArrow),Z=(n=ae??ke)!==null&&n!==void 0?n:Le,{status:Q,hasFeedback:se,isFormItemInput:V,feedbackIcon:Fe}=l.useContext(Yt),be=Sr(Q,ne),{suffixIcon:U,removeIcon:xe,clearIcon:x}=sr(Object.assign(Object.assign({},H),{multiple:Me,showSuffixIcon:We,hasFeedback:se,feedbackIcon:Fe,prefixCls:I,componentName:"TreeSelect"})),f=he===!0?{clearIcon:x}:he;let q;N!==void 0?q=N:q=(le==null?void 0:le("Select"))||l.createElement(cr,{componentName:"Select"});const K=Jt(H,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon"]),_e=l.useMemo(()=>P!==void 0?P:R==="rtl"?"bottomRight":"bottomLeft",[P,R]),Ie=ur(Re,Pe),Oe=Zt(Ve=>{var te;return(te=i??oe)!==null&&te!==void 0?te:Ve}),ce=l.useContext(Qt),Ge=o??ce,L=Ct(!r&&W,{[`${I}-lg`]:Oe==="large",[`${I}-sm`]:Oe==="small",[`${I}-rtl`]:R==="rtl",[`${I}-borderless`]:!c,[`${I}-in-form-item`]:V},gr(I,be,se),ie,s,d,Se,_,J,ge),ee=Ve=>l.createElement(mr,{prefixCls:pe,switcherIcon:M,treeNodeProps:Ve,showLine:A}),[Xe]=er("SelectLike",(a=H.dropdownStyle)===null||a===void 0?void 0:a.zIndex),Ye=l.createElement(qe,Object.assign({virtual:De,disabled:Ge},K,{dropdownMatchSelectWidth:Z,builtinPlacements:Ie,ref:t,prefixCls:I,className:L,listHeight:E,listItemHeight:b,treeCheckable:u&&l.createElement("span",{className:`${I}-tree-checkbox-inner`}),treeLine:!!A,suffixIcon:U,multiple:Me,placement:_e,removeIcon:xe,allowClear:f,switcherIcon:ee,showTreeIcon:D,notFoundContent:q,getPopupContainer:X||Te,treeMotion:null,dropdownClassName:ye,dropdownStyle:Object.assign(Object.assign({},H.dropdownStyle),{zIndex:Xe}),choiceTransitionName:yt(B,"",Ne),transitionName:yt(B,"slide-up",k),treeExpandAction:He}));return me(Ce(Ye))},Hr=l.forwardRef(Ar),Ee=Hr,Rr=qt(Ee);Ee.TreeNode=st;Ee.SHOW_ALL=ct;Ee.SHOW_PARENT=ut;Ee.SHOW_CHILD=rt;Ee._InternalPanelDoNotUseOrYouWillBeFired=Rr;const Wr=Ee;function ln({title:e,show:t,formValue:n,onOk:a,onCancel:r}){const[i]=j.useForm(),o=tr();return l.useEffect(()=>{i.setFieldsValue({...n})},[n,i]),m.jsx(rr,{title:e,open:t,onOk:a,onCancel:r,children:m.jsxs(j,{initialValues:n,form:i,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[m.jsx(j.Item,{label:"類型",name:"type",required:!0,children:m.jsxs(re.Group,{optionType:"button",buttonStyle:"solid",children:[m.jsx(re,{value:at.CATALOGUE,children:"目錄"}),m.jsx(re,{value:at.MENU,children:"菜單"})]})}),m.jsx(j.Item,{label:"名稱",name:"name",required:!0,children:m.jsx(Ue,{})}),m.jsx(j.Item,{label:"標籤",name:"label",required:!0,tooltip:"internationalization config",children:m.jsx(Ue,{})}),m.jsx(j.Item,{label:"父級",name:"parentId",required:!0,children:m.jsx(Wr,{fieldNames:{label:"name",value:"id",children:"children"},treeData:o})}),m.jsx(j.Item,{label:"路由",name:"route",required:!0,children:m.jsx(Ue,{})}),m.jsx(j.Item,{label:"元件",name:"component",required:n.type===at.MENU,children:m.jsx(Ue,{})}),m.jsx(j.Item,{label:"圖示",name:"icon",tooltip:"local icon should start with ic",children:m.jsx(Ue,{})}),m.jsx(j.Item,{label:"隱藏",name:"hide",tooltip:"hide in menu",children:m.jsxs(re.Group,{optionType:"button",buttonStyle:"solid",children:[m.jsx(re,{value:!1,children:"顯示"}),m.jsx(re,{value:!0,children:"隱藏"})]})}),m.jsx(j.Item,{label:"順序",name:"order",children:m.jsx(nr,{style:{width:"100%"}})}),m.jsx(j.Item,{label:"狀態",name:"status",required:!0,children:m.jsxs(re.Group,{optionType:"button",buttonStyle:"solid",children:[m.jsx(re,{value:bt.ENABLE,children:" 啟用 "}),m.jsx(re,{value:bt.DISABLE,children:" 禁用 "})]})})]})})}export{ln as default};