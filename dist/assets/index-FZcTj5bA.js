import{r as o,aX as j,bZ as it,ax as st,aT as N,aU as ee,w as te,y as lt,b_ as ct,a4 as $e,aW as we,a0 as fe,a6 as Q,b$ as ut,al as ft,aV as We,ae as ze,a5 as Ie,q as mt,X as Ye,bs as me,c0 as dt,c1 as vt,bX as gt,bx as ht,t as Fe,A as pt,bf as wt,be as Ct,v as Ge,aj as Ue,bi as Ke,bj as Ee,az as Xe}from"./index-tKRtgB90.js";import{E as St}from"./EyeOutlined-lDKO_IOm.js";import{g as qe,a as he,b as bt}from"./addEventListener-EDtlfxlh.js";var ke=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],ye=o.createContext(null),Ze=0;function xt(t,e){var n=o.useState(function(){return Ze+=1,String(Ze)}),a=j(n,1),r=a[0],i=o.useContext(ye),f={data:e,canPreview:t};return o.useEffect(function(){if(i)return i.register(r,f)},[]),o.useEffect(function(){i&&i.register(r,f)},[t,e]),r}function It(t){return new Promise(function(e){var n=document.createElement("img");n.onerror=function(){return e(!1)},n.onload=function(){return e(!0)},n.src=t})}function Qe(t){var e=t.src,n=t.isCustomPlaceholder,a=t.fallback,r=o.useState(n?"loading":"normal"),i=j(r,2),f=i[0],s=i[1],c=o.useRef(!1),u=f==="error";o.useEffect(function(){var h=!0;return It(e).then(function(p){!p&&h&&s("error")}),function(){h=!1}},[e]),o.useEffect(function(){n&&!c.current?s("loading"):u&&s("normal")},[e]);var g=function(){s("normal")},m=function(p){c.current=!1,f==="loading"&&p!==null&&p!==void 0&&p.complete&&(p.naturalWidth||p.naturalHeight)&&(c.current=!0,g())},S=u&&a?{src:a}:{onLoad:g,src:e};return[m,S,f]}var Oe={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function yt(t,e,n,a){var r=o.useRef(null),i=o.useRef([]),f=o.useState(Oe),s=j(f,2),c=s[0],u=s[1],g=function(p){u(Oe),a&&!it(Oe,c)&&a({transform:Oe,action:p})},m=function(p,b){r.current===null&&(i.current=[],r.current=st(function(){u(function(w){var x=w;return i.current.forEach(function(E){x=N(N({},x),E)}),r.current=null,a==null||a({transform:x,action:b}),x})})),i.current.push(N(N({},c),p))},S=function(p,b,w,x,E){var T=t.current,M=T.width,l=T.height,I=T.offsetWidth,d=T.offsetHeight,v=T.offsetLeft,y=T.offsetTop,R=p,C=c.scale*p;C>n?(C=n,R=n/c.scale):C<e&&(C=E?C:e,R=C/c.scale);var L=w??innerWidth/2,k=x??innerHeight/2,_=R-1,A=_*M*.5,X=_*l*.5,V=_*(L-c.x-v),D=_*(k-c.y-y),B=c.x-(V-A),W=c.y-(D-X);if(p<1&&C===1){var G=I*C,U=d*C,ne=qe(),re=ne.width,Y=ne.height;G<=re&&U<=Y&&(B=0,W=0)}m({x:B,y:W,scale:C},b)};return{transform:c,resetTransform:g,updateTransform:m,dispatchZoomChange:S}}function He(t,e,n,a){var r=e+n,i=(n-a)/2;if(n>a){if(e>0)return ee({},t,i);if(e<0&&r<a)return ee({},t,-i)}else if(e<0||r>a)return ee({},t,e<0?i:-i);return{}}function Je(t,e,n,a){var r=qe(),i=r.width,f=r.height,s=null;return t<=i&&e<=f?s={x:0,y:0}:(t>i||e>f)&&(s=N(N({},He("x",n,t,i)),He("y",a,e,f))),s}var pe=1,Mt=1;function Rt(t,e,n,a,r,i,f){var s=r.rotate,c=r.scale,u=r.x,g=r.y,m=o.useState(!1),S=j(m,2),h=S[0],p=S[1],b=o.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),w=function(l){!e||l.button!==0||(l.preventDefault(),l.stopPropagation(),b.current={diffX:l.pageX-u,diffY:l.pageY-g,transformX:u,transformY:g},p(!0))},x=function(l){n&&h&&i({x:l.pageX-b.current.diffX,y:l.pageY-b.current.diffY},"move")},E=function(){if(n&&h){p(!1);var l=b.current,I=l.transformX,d=l.transformY,v=u!==I&&g!==d;if(!v)return;var y=t.current.offsetWidth*c,R=t.current.offsetHeight*c,C=t.current.getBoundingClientRect(),L=C.left,k=C.top,_=s%180!==0,A=Je(_?R:y,_?y:R,L,k);A&&i(N({},A),"dragRebound")}},T=function(l){if(!(!n||l.deltaY==0)){var I=Math.abs(l.deltaY/100),d=Math.min(I,Mt),v=pe+d*a;l.deltaY>0&&(v=pe/v),f(v,"wheel",l.clientX,l.clientY)}};return o.useEffect(function(){var M,l,I,d;if(e){I=he(window,"mouseup",E,!1),d=he(window,"mousemove",x,!1);try{window.top!==window.self&&(M=he(window.top,"mouseup",E,!1),l=he(window.top,"mousemove",x,!1))}catch{}}return function(){var v,y,R,C;(v=I)===null||v===void 0||v.remove(),(y=d)===null||y===void 0||y.remove(),(R=M)===null||R===void 0||R.remove(),(C=l)===null||C===void 0||C.remove()}},[n,h,u,g,s,e]),{isMoving:h,onMouseDown:w,onMouseMove:x,onMouseUp:E,onWheel:T}}function Pe(t,e){var n=t.x-e.x,a=t.y-e.y;return Math.hypot(n,a)}function Ot(t,e,n,a){var r=Pe(t,n),i=Pe(e,a);if(r===0&&i===0)return[t.x,t.y];var f=r/(r+i),s=t.x+f*(e.x-t.x),c=t.y+f*(e.y-t.y);return[s,c]}function Et(t,e,n,a,r,i,f){var s=r.rotate,c=r.scale,u=r.x,g=r.y,m=o.useState(!1),S=j(m,2),h=S[0],p=S[1],b=o.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),w=function(l){b.current=N(N({},b.current),l)},x=function(l){if(e){l.stopPropagation(),p(!0);var I=l.touches,d=I===void 0?[]:I;d.length>1?w({point1:{x:d[0].clientX,y:d[0].clientY},point2:{x:d[1].clientX,y:d[1].clientY},eventType:"touchZoom"}):w({point1:{x:d[0].clientX-u,y:d[0].clientY-g},eventType:"move"})}},E=function(l){var I=l.touches,d=I===void 0?[]:I,v=b.current,y=v.point1,R=v.point2,C=v.eventType;if(d.length>1&&C==="touchZoom"){var L={x:d[0].clientX,y:d[0].clientY},k={x:d[1].clientX,y:d[1].clientY},_=Ot(y,R,L,k),A=j(_,2),X=A[0],V=A[1],D=Pe(L,k)/Pe(y,R);f(D,"touchZoom",X,V,!0),w({point1:L,point2:k,eventType:"touchZoom"})}else C==="move"&&(i({x:d[0].clientX-y.x,y:d[0].clientY-y.y},"move"),w({eventType:"move"}))},T=function(){if(n){if(h&&p(!1),w({eventType:"none"}),a>c)return i({x:0,y:0,scale:a},"touchZoom");var l=t.current.offsetWidth*c,I=t.current.offsetHeight*c,d=t.current.getBoundingClientRect(),v=d.left,y=d.top,R=s%180!==0,C=Je(R?I:l,R?l:I,v,y);C&&i(N({},C),"dragRebound")}};return o.useEffect(function(){var M;return n&&e&&(M=he(window,"touchmove",function(l){return l.preventDefault()},{passive:!1})),function(){var l;(l=M)===null||l===void 0||l.remove()}},[n,e]),{isTouching:h,onTouchStart:x,onTouchMove:E,onTouchEnd:T}}var Pt=function(e){var n=e.visible,a=e.maskTransitionName,r=e.getContainer,i=e.prefixCls,f=e.rootClassName,s=e.icons,c=e.countRender,u=e.showSwitch,g=e.showProgress,m=e.current,S=e.transform,h=e.count,p=e.scale,b=e.minScale,w=e.maxScale,x=e.closeIcon,E=e.onSwitchLeft,T=e.onSwitchRight,M=e.onClose,l=e.onZoomIn,I=e.onZoomOut,d=e.onRotateRight,v=e.onRotateLeft,y=e.onFlipX,R=e.onFlipY,C=e.toolbarRender,L=e.zIndex,k=o.useContext(ye),_=s.rotateLeft,A=s.rotateRight,X=s.zoomIn,V=s.zoomOut,D=s.close,B=s.left,W=s.right,G=s.flipX,U=s.flipY,ne="".concat(i,"-operations-operation");o.useEffect(function(){var P=function(O){O.keyCode===$e.ESC&&M()};return n&&window.addEventListener("keydown",P),function(){window.removeEventListener("keydown",P)}},[n]);var re=[{icon:U,onClick:R,type:"flipY"},{icon:G,onClick:y,type:"flipX"},{icon:_,onClick:v,type:"rotateLeft"},{icon:A,onClick:d,type:"rotateRight"},{icon:V,onClick:I,type:"zoomOut",disabled:p<=b},{icon:X,onClick:l,type:"zoomIn",disabled:p===w}],Y=re.map(function(P){var z,O=P.icon,J=P.onClick,Z=P.type,H=P.disabled;return o.createElement("div",{className:te(ne,(z={},ee(z,"".concat(i,"-operations-operation-").concat(Z),!0),ee(z,"".concat(i,"-operations-operation-disabled"),!!H),z)),onClick:J,key:Z},O)}),F=o.createElement("div",{className:"".concat(i,"-operations")},Y);return o.createElement(lt,{visible:n,motionName:a},function(P){var z=P.className,O=P.style;return o.createElement(ct,{open:!0,getContainer:r??document.body},o.createElement("div",{className:te("".concat(i,"-operations-wrapper"),z,f),style:N(N({},O),{},{zIndex:L})},x===null?null:o.createElement("button",{className:"".concat(i,"-close"),onClick:M},x||D),u&&o.createElement(o.Fragment,null,o.createElement("div",{className:te("".concat(i,"-switch-left"),ee({},"".concat(i,"-switch-left-disabled"),m===0)),onClick:E},B),o.createElement("div",{className:te("".concat(i,"-switch-right"),ee({},"".concat(i,"-switch-right-disabled"),m===h-1)),onClick:T},W)),o.createElement("div",{className:"".concat(i,"-footer")},g&&o.createElement("div",{className:"".concat(i,"-progress")},c?c(m+1,h):"".concat(m+1," / ").concat(h)),C?C(F,N({icons:{flipYIcon:Y[0],flipXIcon:Y[1],rotateLeftIcon:Y[2],rotateRightIcon:Y[3],zoomOutIcon:Y[4],zoomInIcon:Y[5]},actions:{onFlipY:R,onFlipX:y,onRotateLeft:v,onRotateRight:d,onZoomOut:I,onZoomIn:l},transform:S},k?{current:m,total:h}:{})):F)))})},Nt=["fallback","src","imgRef"],Tt=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Lt=function(e){var n=e.fallback,a=e.src,r=e.imgRef,i=we(e,Nt),f=Qe({src:a,fallback:n}),s=j(f,2),c=s[0],u=s[1];return fe.createElement("img",Q({ref:function(m){r.current=m,c(m)}},i,u))},et=function(e){var n=e.prefixCls,a=e.src,r=e.alt,i=e.fallback,f=e.movable,s=f===void 0?!0:f,c=e.onClose,u=e.visible,g=e.icons,m=g===void 0?{}:g,S=e.rootClassName,h=e.closeIcon,p=e.getContainer,b=e.current,w=b===void 0?0:b,x=e.count,E=x===void 0?1:x,T=e.countRender,M=e.scaleStep,l=M===void 0?.5:M,I=e.minScale,d=I===void 0?1:I,v=e.maxScale,y=v===void 0?50:v,R=e.transitionName,C=R===void 0?"zoom":R,L=e.maskTransitionName,k=L===void 0?"fade":L,_=e.imageRender,A=e.imgCommonProps,X=e.toolbarRender,V=e.onTransform,D=e.onChange,B=we(e,Tt),W=o.useRef(),G=o.useContext(ye),U=G&&E>1,ne=G&&E>=1,re=o.useState(!0),Y=j(re,2),F=Y[0],P=Y[1],z=yt(W,d,y,V),O=z.transform,J=z.resetTransform,Z=z.updateTransform,H=z.dispatchZoomChange,se=Rt(W,s,u,l,O,Z,H),Ce=se.isMoving,de=se.onMouseDown,Se=se.onWheel,K=Et(W,s,u,d,O,Z,H),oe=K.isTouching,ae=K.onTouchStart,le=K.onTouchMove,ie=K.onTouchEnd,be=O.rotate,ve=O.scale,ge=te(ee({},"".concat(n,"-moving"),Ce));o.useEffect(function(){F||P(!0)},[F]);var Te=function(){J("close")},Le=function(){H(pe+l,"zoomIn")},_e=function(){H(pe/(pe+l),"zoomOut")},ce=function(){Z({rotate:be+90},"rotateRight")},ue=function(){Z({rotate:be-90},"rotateLeft")},Me=function(){Z({flipX:!O.flipX},"flipX")},Re=function(){Z({flipY:!O.flipY},"flipY")},xe=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),w>0&&(P(!1),J("prev"),D==null||D(w-1,w))},Ae=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),w<E-1&&(P(!1),J("next"),D==null||D(w+1,w))},at=function($){!u||!U||($.keyCode===$e.LEFT?xe():$.keyCode===$e.RIGHT&&Ae())},rt=function($){u&&(ve!==1?Z({x:0,y:0,scale:1},"doubleClick"):H(pe+l,"doubleClick",$.clientX,$.clientY))};o.useEffect(function(){var q=he(window,"keydown",at,!1);return function(){q.remove()}},[u,U,w]);var De=fe.createElement(Lt,Q({},A,{width:e.width,height:e.height,imgRef:W,className:"".concat(n,"-img"),alt:r,style:{transform:"translate3d(".concat(O.x,"px, ").concat(O.y,"px, 0) scale3d(").concat(O.flipX?"-":"").concat(ve,", ").concat(O.flipY?"-":"").concat(ve,", 1) rotate(").concat(be,"deg)"),transitionDuration:(!F||oe)&&"0s"},fallback:i,src:a,onWheel:Se,onMouseDown:de,onDoubleClick:rt,onTouchStart:ae,onTouchMove:le,onTouchEnd:ie,onTouchCancel:ie}));return fe.createElement(fe.Fragment,null,fe.createElement(ut,Q({transitionName:C,maskTransitionName:k,closable:!1,keyboard:!0,prefixCls:n,onClose:c,visible:u,classNames:{wrapper:ge},rootClassName:S,getContainer:p},B,{afterClose:Te}),fe.createElement("div",{className:"".concat(n,"-img-wrapper")},_?_(De,N({transform:O},G?{current:w}:{})):De)),fe.createElement(Pt,{visible:u,transform:O,maskTransitionName:k,closeIcon:h,getContainer:p,prefixCls:n,rootClassName:S,icons:m,countRender:T,showSwitch:U,showProgress:ne,current:w,count:E,scale:ve,minScale:d,maxScale:y,toolbarRender:X,onSwitchLeft:xe,onSwitchRight:Ae,onZoomIn:Le,onZoomOut:_e,onRotateRight:ce,onRotateLeft:ue,onFlipX:Me,onFlipY:Re,onClose:c,zIndex:B.zIndex!==void 0?B.zIndex+1:void 0}))};function _t(t){var e=o.useState({}),n=j(e,2),a=n[0],r=n[1],i=o.useCallback(function(s,c){return r(function(u){return N(N({},u),{},ee({},s,c))}),function(){r(function(u){var g=N({},u);return delete g[s],g})}},[]),f=o.useMemo(function(){return t?t.map(function(s){if(typeof s=="string")return{data:{src:s}};var c={};return Object.keys(s).forEach(function(u){["src"].concat(ft(ke)).includes(u)&&(c[u]=s[u])}),{data:c}}):Object.keys(a).reduce(function(s,c){var u=a[c],g=u.canPreview,m=u.data;return g&&s.push({data:m,id:c}),s},[])},[t,a]);return[f,i]}var $t=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],zt=["src"],kt=function(e){var n,a=e.previewPrefixCls,r=a===void 0?"rc-image-preview":a,i=e.children,f=e.icons,s=f===void 0?{}:f,c=e.items,u=e.preview,g=e.fallback,m=We(u)==="object"?u:{},S=m.visible,h=m.onVisibleChange,p=m.getContainer,b=m.current,w=m.movable,x=m.minScale,E=m.maxScale,T=m.countRender,M=m.closeIcon,l=m.onChange,I=m.onTransform,d=m.toolbarRender,v=m.imageRender,y=we(m,$t),R=_t(c),C=j(R,2),L=C[0],k=C[1],_=ze(0,{value:b}),A=j(_,2),X=A[0],V=A[1],D=o.useState(!1),B=j(D,2),W=B[0],G=B[1],U=((n=L[X])===null||n===void 0?void 0:n.data)||{},ne=U.src,re=we(U,zt),Y=ze(!!S,{value:S,onChange:function(oe,ae){h==null||h(oe,ae,X)}}),F=j(Y,2),P=F[0],z=F[1],O=o.useState(null),J=j(O,2),Z=J[0],H=J[1],se=o.useCallback(function(K,oe,ae){var le=L.findIndex(function(ie){return ie.id===K});z(!0),H({x:oe,y:ae}),V(le<0?0:le),G(!0)},[L]);o.useEffect(function(){P?W||V(0):G(!1)},[P]);var Ce=function(oe,ae){V(oe),l==null||l(oe,ae)},de=function(){z(!1),H(null)},Se=o.useMemo(function(){return{register:k,onPreview:se}},[k,se]);return o.createElement(ye.Provider,{value:Se},i,o.createElement(et,Q({"aria-hidden":!P,movable:w,visible:P,prefixCls:r,closeIcon:M,onClose:de,mousePosition:Z,imgCommonProps:re,src:ne,fallback:g,icons:s,minScale:x,maxScale:E,getContainer:p,current:X,count:L.length,countRender:T,onTransform:I,toolbarRender:d,imageRender:v,onChange:Ce},y)))},jt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],At=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Ne=function(e){var n=e.src,a=e.alt,r=e.onPreviewClose,i=e.prefixCls,f=i===void 0?"rc-image":i,s=e.previewPrefixCls,c=s===void 0?"".concat(f,"-preview"):s,u=e.placeholder,g=e.fallback,m=e.width,S=e.height,h=e.style,p=e.preview,b=p===void 0?!0:p,w=e.className,x=e.onClick,E=e.onError,T=e.wrapperClassName,M=e.wrapperStyle,l=e.rootClassName,I=we(e,jt),d=u&&u!==!0,v=We(b)==="object"?b:{},y=v.src,R=v.visible,C=R===void 0?void 0:R,L=v.onVisibleChange,k=L===void 0?r:L,_=v.getContainer,A=_===void 0?void 0:_,X=v.mask,V=v.maskClassName,D=v.movable,B=v.icons,W=v.scaleStep,G=v.minScale,U=v.maxScale,ne=v.imageRender,re=v.toolbarRender,Y=we(v,At),F=y??n,P=ze(!!C,{value:C,onChange:k}),z=j(P,2),O=z[0],J=z[1],Z=Qe({src:n,isCustomPlaceholder:d,fallback:g}),H=j(Z,3),se=H[0],Ce=H[1],de=H[2],Se=o.useState(null),K=j(Se,2),oe=K[0],ae=K[1],le=o.useContext(ye),ie=!!b,be=function(){J(!1),ae(null)},ve=te(f,T,l,ee({},"".concat(f,"-error"),de==="error")),ge=o.useMemo(function(){var ce={};return ke.forEach(function(ue){e[ue]!==void 0&&(ce[ue]=e[ue])}),ce},ke.map(function(ce){return e[ce]})),Te=o.useMemo(function(){return N(N({},ge),{},{src:F})},[F,ge]),Le=xt(ie,Te),_e=function(ue){var Me=bt(ue.target),Re=Me.left,xe=Me.top;le?le.onPreview(Le,Re,xe):(ae({x:Re,y:xe}),J(!0)),x==null||x(ue)};return o.createElement(o.Fragment,null,o.createElement("div",Q({},I,{className:ve,onClick:ie?_e:x,style:N({width:m,height:S},M)}),o.createElement("img",Q({},ge,{className:te("".concat(f,"-img"),ee({},"".concat(f,"-img-placeholder"),u===!0),w),style:N({height:S},h),ref:se},Ce,{width:m,height:S,onError:E})),de==="loading"&&o.createElement("div",{"aria-hidden":"true",className:"".concat(f,"-placeholder")},u),X&&ie&&o.createElement("div",{className:te("".concat(f,"-mask"),V),style:{display:(h==null?void 0:h.display)==="none"?"none":void 0}},X)),!le&&ie&&o.createElement(et,Q({"aria-hidden":!O,visible:O,prefixCls:c,onClose:be,mousePosition:oe,src:F,alt:a,fallback:g,getContainer:A,icons:B,movable:D,scaleStep:W,minScale:G,maxScale:U,rootClassName:l,imageRender:ne,imgCommonProps:ge,toolbarRender:re},Y)))};Ne.PreviewGroup=kt;Ne.displayName="Image";var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const Yt=Dt;var Xt=function(e,n){return o.createElement(Ie,Q({},e,{ref:n,icon:Yt}))};const Zt=o.forwardRef(Xt);var Ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Vt=Ht;var Bt=function(e,n){return o.createElement(Ie,Q({},e,{ref:n,icon:Vt}))};const Wt=o.forwardRef(Bt);var Ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Gt=Ft;var Ut=function(e,n){return o.createElement(Ie,Q({},e,{ref:n,icon:Gt}))};const Ve=o.forwardRef(Ut);var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const qt=Kt;var Qt=function(e,n){return o.createElement(Ie,Q({},e,{ref:n,icon:qt}))};const Jt=o.forwardRef(Qt);var en={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const tn=en;var nn=function(e,n){return o.createElement(Ie,Q({},e,{ref:n,icon:tn}))};const on=o.forwardRef(nn),je=t=>({position:t||"absolute",inset:0}),an=t=>{const{iconCls:e,motionDurationSlow:n,paddingXXS:a,marginXXS:r,prefixCls:i,colorTextLightSolid:f}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:f,background:new me("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},ht),{padding:`0 ${Fe(a)}`,[e]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},rn=t=>{const{previewCls:e,modalMaskBg:n,paddingSM:a,marginXL:r,margin:i,paddingLG:f,previewOperationColorDisabled:s,previewOperationHoverColor:c,motionDurationSlow:u,iconCls:g,colorTextLightSolid:m}=t,S=new me(n).setAlpha(.1),h=S.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:m,backgroundColor:S.toRgbString(),borderRadius:"50%",padding:a,outline:0,border:0,cursor:"pointer",transition:`all ${u}`,"&:hover":{backgroundColor:h.toRgbString()},[`& > ${g}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${Fe(f)}`,backgroundColor:S.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:a,padding:a,cursor:"pointer",transition:`all ${u}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${g}`]:{color:c},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${g}`]:{fontSize:t.previewOperationSize}}}}},sn=t=>{const{modalMaskBg:e,iconCls:n,previewOperationColorDisabled:a,previewCls:r,zIndexPopup:i,motionDurationSlow:f}=t,s=new me(e).setAlpha(.1),c=s.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal({unit:!1}),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,userSelect:"none","&:hover":{background:c.toRgbString()},"&-disabled":{"&, &:hover":{color:a,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:t.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:t.marginSM},[`${r}-switch-right`]:{insetInlineEnd:t.marginSM}}},ln=t=>{const{motionEaseOut:e,previewCls:n,motionDurationSlow:a,componentCls:r}=t;return[{[`${r}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},je()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${a} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},je()),{transition:`transform ${a} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${n}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal({unit:!1})},"&":[rn(t),sn(t)]}]},cn=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},an(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},je())}}},un=t=>{const{previewCls:e}=t;return{[`${e}-root`]:vt(t,"zoom"),"&":gt(t,!0)}},fn=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new me(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new me(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new me(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}),tt=mt("Image",t=>{const e=`${t.componentCls}-preview`,n=Ye(t,{previewCls:e,modalMaskBg:new me("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[cn(n),ln(n),dt(Ye(n,{componentCls:e})),un(n)]},fn);var mn=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]]);return n};const nt={rotateLeft:o.createElement(Zt,null),rotateRight:o.createElement(Wt,null),zoomIn:o.createElement(Jt,null),zoomOut:o.createElement(on,null),close:o.createElement(pt,null),left:o.createElement(wt,null),right:o.createElement(Ct,null),flipX:o.createElement(Ve,null),flipY:o.createElement(Ve,{rotate:90})},dn=t=>{var{previewPrefixCls:e,preview:n}=t,a=mn(t,["previewPrefixCls","preview"]);const{getPrefixCls:r}=o.useContext(Ge),i=r("image",e),f=`${i}-preview`,s=r(),c=Ue(i),[u,g,m]=tt(i,c),[S]=Ke("ImagePreview",typeof n=="object"?n.zIndex:void 0),h=o.useMemo(()=>{var p;if(n===!1)return n;const b=typeof n=="object"?n:{},w=te(g,m,c,(p=b.rootClassName)!==null&&p!==void 0?p:"");return Object.assign(Object.assign({},b),{transitionName:Ee(s,"zoom",b.transitionName),maskTransitionName:Ee(s,"fade",b.maskTransitionName),rootClassName:w,zIndex:S})},[n]);return u(o.createElement(Ne.PreviewGroup,Object.assign({preview:h,previewPrefixCls:f,icons:nt},a)))},vn=dn;var Be=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]]);return n};const ot=t=>{const{prefixCls:e,preview:n,className:a,rootClassName:r,style:i}=t,f=Be(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:s,locale:c=Xe,getPopupContainer:u,image:g}=o.useContext(Ge),m=s("image",e),S=s(),h=c.Image||Xe.Image,p=Ue(m),[b,w,x]=tt(m,p),E=te(r,w,x,p),T=te(a,w,g==null?void 0:g.className),[M]=Ke("ImagePreview",typeof n=="object"?n.zIndex:void 0),l=o.useMemo(()=>{if(n===!1)return n;const d=typeof n=="object"?n:{},{getContainer:v}=d,y=Be(d,["getContainer"]);return Object.assign(Object.assign({mask:o.createElement("div",{className:`${m}-mask-info`},o.createElement(St,null),h==null?void 0:h.preview),icons:nt},y),{getContainer:v||u,transitionName:Ee(S,"zoom",d.transitionName),maskTransitionName:Ee(S,"fade",d.maskTransitionName),zIndex:M})},[n,h]),I=Object.assign(Object.assign({},g==null?void 0:g.style),i);return b(o.createElement(Ne,Object.assign({prefixCls:m,preview:l,rootClassName:E,className:T,style:I},f)))};ot.PreviewGroup=vn;const wn=ot;export{wn as I};