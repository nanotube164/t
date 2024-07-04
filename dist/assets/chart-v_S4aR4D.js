import{r as B,c as xe,b9 as we,j as _,b8 as ne,d as Q,b7 as _e}from"./index-tKRtgB90.js";function H(e,r){return r||(r=e.slice(0)),e.raw=r,e}var Ge=function(){function e(t){var n=this;this._insertTag=function(a){n.container.insertBefore(a,n.tags.length===0?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(i){var o=document.createElement("style");return o.setAttribute("data-emotion",i.key),i.nonce!==void 0&&o.setAttribute("nonce",i.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(i){if(i.sheet)return i.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===i)return document.styleSheets[o]}(n);try{a.insertRule(t,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},e}(),C="-ms-",g="-webkit-",Me=Math.abs,X=String.fromCharCode,Ie=Object.assign;function ke(e){return e.trim()}function p(e,r,t){return e.replace(r,t)}function ae(e,r){return e.indexOf(r)}function $(e,r){return 0|e.charCodeAt(r)}function q(e,r,t){return e.slice(r,t)}function E(e){return e.length}function oe(e){return e.length}function K(e,r){return r.push(e),e}var z=1,M=1,Ce=0,A=0,w=0,I="";function D(e,r,t,n,a,i,o){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:z,column:M,length:o,return:""}}function W(e,r){return Ie(D("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return w=A>0?$(I,--A):0,M--,w===10&&(M=1,z--),w}function P(){return w=A<Ce?$(I,A++):0,M++,w===10&&(M=1,z++),w}function N(){return $(I,A)}function U(){return A}function V(e,r){return q(I,e,r)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $e(e){return z=M=1,Ce=E(I=e),A=0,[]}function Ae(e){return I="",e}function Y(e){return ke(V(A-1,ie(e===91?e+2:e===40?e+1:e)))}function Be(e){for(;(w=N())&&w<33;)P();return F(e)>2||F(w)>3?"":" "}function Le(e,r){for(;--r&&P()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return V(e,U()+(r<6&&N()==32&&P()==32))}function ie(e){for(;P();)switch(w){case e:return A;case 34:case 39:e!==34&&e!==39&&ie(w);break;case 40:e===41&&ie(e);break;case 92:P()}return A}function qe(e,r){for(;P()&&e+w!==57&&(e+w!==84||N()!==47););return"/*"+V(r,A-1)+"*"+X(e===47?e:P())}function Fe(e){for(;!F(N());)P();return V(e,A)}function He(e){return Ae(Z("",null,null,null,[""],e=$e(e),0,[0],e))}function Z(e,r,t,n,a,i,o,d,x){for(var v=0,h=0,c=o,l=0,u=0,s=0,b=1,S=1,f=1,y=0,k="",R=a,T=i,j=n,m=k;S;)switch(s=y,y=P()){case 40:if(s!=108&&m.charCodeAt(c-1)==58){ae(m+=p(Y(y),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:m+=Y(y);break;case 9:case 10:case 13:case 32:m+=Be(s);break;case 92:m+=Le(U()-1,7);continue;case 47:switch(N()){case 42:case 47:K(Ve(qe(P(),U()),r,t),x);break;default:m+="/"}break;case 123*b:d[v++]=E(m)*f;case 125*b:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+h:u>0&&E(m)-c&&K(u>32?ce(m+";",n,t,c-1):ce(p(m," ","")+";",n,t,c-2),x);break;case 59:m+=";";default:if(K(j=se(m,r,t,v,h,a,d,k,R=[],T=[],c),i),y===123)if(h===0)Z(m,r,j,j,R,i,c,d,T);else switch(l){case 100:case 109:case 115:Z(e,j,j,n&&K(se(e,j,j,0,0,a,d,k,a,R=[],c),T),a,T,c,d,n?R:T);break;default:Z(m,j,j,j,[""],T,0,d,T)}}v=h=u=0,b=f=1,k=m="",c=o;break;case 58:c=1+E(m),u=s;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&We()==125)continue}switch(m+=X(y),y*b){case 38:f=h>0?1:(m+="\f",-1);break;case 44:d[v++]=(E(m)-1)*f,f=1;break;case 64:N()===45&&(m+=Y(P())),l=N(),h=c=E(k=m+=Fe(U())),y++;break;case 45:s===45&&E(m)==2&&(b=0)}}return i}function se(e,r,t,n,a,i,o,d,x,v,h){for(var c=a-1,l=a===0?i:[""],u=oe(l),s=0,b=0,S=0;s<n;++s)for(var f=0,y=q(e,c+1,c=Me(b=o[s])),k=e;f<u;++f)(k=ke(b>0?l[f]+" "+y:p(y,/&\f/g,l[f])))&&(x[S++]=k);return D(e,r,t,a===0?"rule":d,x,v,h)}function Ve(e,r,t){return D(e,r,t,"comm",X(w),q(e,2,-2),0)}function ce(e,r,t,n){return D(e,r,t,"decl",q(e,0,n),q(e,n+1,-1),n)}function Se(e,r){switch(function(t,n){return(((n<<2^$(t,0))<<2^$(t,1))<<2^$(t,2))<<2^$(t,3)}(e,r)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+"-moz-"+e+C+e+e;case 6828:case 4268:return g+e+C+e+e;case 6165:return g+e+C+"flex-"+e+e;case 5187:return g+e+p(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return g+e+C+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return g+e+C+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+C+p(e,"shrink","negative")+e;case 5292:return g+e+C+p(e,"basis","preferred-size")+e;case 6060:return g+"box-"+p(e,"-grow","")+g+e+C+p(e,"grow","positive")+e;case 4554:return g+p(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-r>6)switch($(e,r+1)){case 109:if($(e,r+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+($(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ae(e,"stretch")?Se(p(e,"stretch","fill-available"),r)+e:e}break;case 4949:if($(e,r+1)!==115)break;case 6444:switch($(e,E(e)-3-(~ae(e,"!important")&&10))){case 107:return p(e,":",":"+g)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+($(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+C+e+e}return e}function G(e,r){for(var t="",n=oe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Je(e,r,t,n){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+G(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return E(t=G(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ke(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Ue=function(e,r,t){for(var n=0,a=0;n=a,a=N(),n===38&&a===12&&(r[t]=1),!F(a);)P();return V(e,A)},le=new WeakMap,Ye=function(e){if(e.type==="rule"&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(!(t=t.parent))return;if((e.props.length!==1||r.charCodeAt(0)===58||le.get(t))&&!n){le.set(e,!0);for(var a=[],i=function(h,c){return Ae(function(l,u){var s=-1,b=44;do switch(F(b)){case 0:b===38&&N()===12&&(u[s]=1),l[s]+=Ue(A-1,u,s);break;case 2:l[s]+=Y(b);break;case 4:if(b===44){l[++s]=N()===58?"&\f":"",u[s]=l[s].length;break}default:l[s]+=X(b)}while(b=P());return l}($e(h),c))}(r,a),o=t.props,d=0,x=0;d<i.length;d++)for(var v=0;v<o.length;v++,x++)e.props[x]=a[d]?i[d].replace(/&\f/g,o[v]):o[v]+" "+i[d]}}},Ze=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}},Qe=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=Se(e.value,e.length);break;case"@keyframes":return G([W(e,{value:p(e.value,"@","@"+g)})],n);case"rule":if(e.length)return function(a,i){return a.map(i).join("")}(e.props,function(a){switch(function(i,o){return(i=/(::plac\w+|:read-\w+)/.exec(i))?i[0]:i}(a)){case":read-only":case":read-write":return G([W(e,{props:[p(a,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return G([W(e,{props:[p(a,/:(plac\w+)/,":-webkit-input-$1")]}),W(e,{props:[p(a,/:(plac\w+)/,":-moz-$1")]}),W(e,{props:[p(a,/:(plac\w+)/,C+"input-$1")]})],n)}return""})}}],Xe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze=/[A-Z]|^ms/g,De=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pe=function(e){return e.charCodeAt(1)===45},ue=function(e){return e!=null&&typeof e!="boolean"},re=Ke(function(e){return Pe(e)?e:e.replace(ze,"-$&").toLowerCase()}),de=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(De,function(t,n,a){return O={name:n,styles:a,next:O},n})}return Xe[e]===1||Pe(e)||typeof r!="number"||r===0?r:r+"px"};function L(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":if(t.anim===1)return O={name:t.name,styles:t.styles,next:O},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)O={name:n.name,styles:n.styles,next:O},n=n.next;var a=t.styles+";";return a}return function(x,v,h){var c="";if(Array.isArray(h))for(var l=0;l<h.length;l++)c+=L(x,v,h[l])+";";else for(var u in h){var s=h[u];if(typeof s!="object")v!=null&&v[s]!==void 0?c+=u+"{"+v[s]+"}":ue(s)&&(c+=re(u)+":"+de(u,s)+";");else if(!Array.isArray(s)||typeof s[0]!="string"||v!=null&&v[s[0]]!==void 0){var b=L(x,v,s);switch(u){case"animation":case"animationName":c+=re(u)+":"+b+";";break;default:c+=u+"{"+b+"}"}}else for(var S=0;S<s.length;S++)ue(s[S])&&(c+=re(u)+":"+de(u,s[S])+";")}return c}(e,r,t);case"function":if(e!==void 0){var i=O,o=t(e);return O=i,L(e,r,o)}break}if(r==null)return t;var d=r[t];return d!==void 0?d:t}var O,fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,te=function(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";O=void 0;var i=e[0];i==null||i.raw===void 0?(n=!1,a+=L(t,r,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=L(t,r,e[o]),n&&(a+=i[o]);fe.lastIndex=0;for(var d,x="";(d=fe.exec(a))!==null;)x+="-"+d[1];var v=function(h){for(var c,l=0,u=0,s=h.length;s>=4;++u,s-=4)c=1540483477*(65535&(c=255&h.charCodeAt(u)|(255&h.charCodeAt(++u))<<8|(255&h.charCodeAt(++u))<<16|(255&h.charCodeAt(++u))<<24))+(59797*(c>>>16)<<16),l=1540483477*(65535&(c^=c>>>24))+(59797*(c>>>16)<<16)^1540483477*(65535&l)+(59797*(l>>>16)<<16);switch(s){case 3:l^=(255&h.charCodeAt(u+2))<<16;case 2:l^=(255&h.charCodeAt(u+1))<<8;case 1:l=1540483477*(65535&(l^=255&h.charCodeAt(u)))+(59797*(l>>>16)<<16)}return(((l=1540483477*(65535&(l^=l>>>13))+(59797*(l>>>16)<<16))^l>>>15)>>>0).toString(36)}(a)+x;return{name:v,styles:a,next:O}};function je(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var er=function(e,r,t){(function(i,o,d){var x=i.key+"-"+o.name;d===!1&&i.registered[x]===void 0&&(i.registered[x]=o.styles)})(e,r,t);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function he(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function pe(e,r,t){var n=[],a=je(e,n,t);return n.length<2?t:a+r(n)}var ve,ge,me,be,ye,rr=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},Ee=function(e){var r=function(n){var a=n.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){f.getAttribute("data-emotion").indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var o=n.stylisPlugins||Qe,d,x,v={},h=[];d=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(f){for(var y=f.getAttribute("data-emotion").split(" "),k=1;k<y.length;k++)v[y[k]]=!0;h.push(f)});var c=[Ye,Ze],l,u,s=[Je,(u=function(f){l.insert(f)},function(f){f.root||(f=f.return)&&u(f)})],b=function(f){var y=oe(f);return function(k,R,T,j){for(var m="",ee=0;ee<y;ee++)m+=f[ee](k,R,T,j)||"";return m}}(c.concat(o,s));x=function(f,y,k,R){l=k,G(He(f?f+"{"+y.styles+"}":y.styles),b),R&&(S.inserted[y.name]=!0)};var S={key:a,sheet:new Ge({key:a,container:d,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:v,registered:{},insert:x};return S.sheet.hydrate(h),S}({key:"css"});r.sheet.speedy=function(n){this.isSpeedy=n},r.compat=!0;var t=function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered,void 0);return er(r,o,!1),r.key+"-"+o.name};return{css:t,cx:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return pe(r.registered,t,rr(a))},injectGlobal:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered);he(r,o)},keyframes:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=te(a,r.registered),d="animation-"+o.name;return he(r,{name:o.name,styles:"@keyframes "+d+"{"+o.styles+"}"}),d},hydrate:function(n){n.forEach(function(a){r.inserted[a]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:je.bind(null,r.registered),merge:pe.bind(null,r.registered,t)}}(),tr=Ee.cx,J=Ee.css,Oe=J(ve||(ve=H([`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`]))),nr=J(ge||(ge=H([`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    `,`;
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`])),Oe),ar=J(me||(me=H([`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`]))),ir=J(be||(be=H([`
  ::before,
  ::after {
    `,`;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`])),Oe);function Ne(e){var r=e.children,t=e.label;return B.createElement("li",{className:tr(ar,ir,e.className)},t,B.Children.count(r)>0&&B.createElement("ul",{className:nr},r))}function or(e){var r=e.children,t=e.label,n=e.lineHeight,a=n===void 0?"20px":n,i=e.lineWidth,o=i===void 0?"1px":i,d=e.lineColor,x=d===void 0?"black":d,v=e.nodePadding,h=v===void 0?"5px":v,c=e.lineStyle,l=c===void 0?"solid":c,u=e.lineBorderRadius,s=u===void 0?"5px":u;return B.createElement("ul",{className:J(ye||(ye=H([`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: `,`;
        --line-width: `,`;
        --line-color: `,`;
        --line-border-radius: `,`;
        --line-style: `,`;
        --node-padding: `,`;

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `])),a,o,x,s,l,h)},B.createElement(Ne,{label:t},r))}function cr({organizations:e=[]}){const r=xe(),{themeMode:t}=we();return _.jsx(or,{lineWidth:"1px",lineColor:t===ne.Light?r.colorPrimaryBorder:r.colorPrimary,lineBorderRadius:"24px",label:_.jsx(Re,{$textColor:t===ne.Light?r.colorPrimaryTextActive:r.colorPrimaryText,$backgroundColor:Q(r.colorPrimary).alpha(.08).toString(),$borderColor:Q(r.colorPrimaryBorder).alpha(.24).toString(),children:"Root"}),children:e.map(n=>_.jsx(Te,{organization:n},n.id))})}function Te({organization:{name:e,children:r}}){const t=xe(),{themeMode:n}=we();return _.jsx(Ne,{label:_.jsx(Re,{$textColor:n===ne.Light?t.colorPrimaryTextActive:t.colorPrimaryText,$backgroundColor:Q(t.colorPrimary).alpha(.08).toString(),$borderColor:Q(t.colorPrimaryBorder).alpha(.24).toString(),children:e}),children:r==null?void 0:r.map(a=>_.jsx(Te,{organization:a},a.id))})}const Re=_e.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding: 16px;
  border-radius: 12px;
  display: inline-flex;
  text-transform: capitalize;
  color: ${e=>e.$textColor};
  background-color: ${e=>e.$backgroundColor};
  border: 1px solid ${e=>e.$borderColor};
`;export{cr as default};
