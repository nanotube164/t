import{bF as p,bG as g,r as o,bH as m,bI as f,bJ as b,bK as l,bL as S,bM as d,c as y,j as x,m as C}from"./index-tKRtgB90.js";function h(t){const n=p(()=>g(t)),{isStatic:r}=o.useContext(m);if(r){const[,s]=o.useState(t);o.useEffect(()=>n.on("change",s),[])}return n}function E(t,n={}){const{isStatic:r}=o.useContext(m),s=o.useRef(null),e=h(f(t)?t.get():t),i=()=>{s.current&&s.current.stop()};return o.useInsertionEffect(()=>e.attach((a,c)=>{if(r)return c(a);if(i(),s.current=b({keyframes:[e.get(),a],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:c}),!l.isProcessing){const u=performance.now()-l.timestamp;u<30&&(s.current.time=S(u))}return e.get()},i),[JSON.stringify(n)]),d(()=>{if(f(t))return t.on("change",a=>e.set(parseFloat(a)))},[e]),e}function k({scrollYProgress:t,height:n=4,color:r,...s}){const e=E(t,{stiffness:100,damping:30,restDelta:.001}),{colorPrimary:i}=y(),c={transformOrigin:"0%",height:n,backgroundColor:r||i};return x.jsx(C.div,{style:{scaleX:e,...c},...s})}export{k as S};
