(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,n){e.exports=n(52)},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r,o,c,a=n(1),i=n.n(a),l=n(37),s=n.n(l),u=(n(49),n(43)),f=n(26),v=n(11),d=n(12),h=d.a.div(r||(r=Object(v.a)(["\n  scroll-snap-type: y mandatory;\n  scroll-behavior: smooth;\n  overflow-y: scroll;\n  height: 100vh;\n"]))),m=d.a.div(o||(o=Object(v.a)(["\n  position: sticky;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),b=d.a.div(c||(c=Object(v.a)(["\n  height: 100vh;\n  margin-top: -100vh;\n  position: sticky;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),p=i.a.createContext({});function g(e){var t=e.children,n=Object(a.useRef)({}),r=Object(a.useState)([]),o=Object(f.a)(r,2),c=o[0],l=o[1],s=Object(a.useCallback)((function(e){return l((function(t){return[].concat(Object(u.a)(t),[e])}))}),[]);return i.a.createElement(p.Provider,{value:{wrapperRef:n,sections:c,registerSection:s}},i.a.createElement(h,{ref:n},i.a.createElement(m,null,c.map((function(e,t){return i.a.createElement(b,{key:t},e.content)}))),t))}var E,j=p,O=n(54),w=n(41);function y(e){var t=function(){var e=Object(a.useContext)(j).wrapperRef,t=Object(w.a)(0),n=Object(w.a)(0);return Object(a.useEffect)((function(){if(e.current){var r=function(){if(e.current){var r=e.current,o=r.scrollTop,c=r.scrollHeight-r.offsetHeight;t.set(o),n.set(o/c)}};return e.current.addEventListener("scroll",r),function(){var t;return null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.removeEventListener("scroll",r)}}t.set(0),n.set(0)}),[e,t,n]),{scrollY:t,scrollYProgress:n}}().scrollY,n=Object(a.useCallback)((function(){var t,n,r,o;return{offsetTop:null!==(t=null===(n=e.current)||void 0===n?void 0:n.offsetTop)&&void 0!==t?t:0,offsetHeight:null!==(r=null===(o=e.current)||void 0===o?void 0:o.offsetHeight)&&void 0!==r?r:0}}),[e]),r=Object(a.useState)(n()),o=Object(f.a)(r,2),c=o[0],i=o[1];return Object(a.useEffect)((function(){i(n())}),[n]),Object(a.useLayoutEffect)((function(){function e(){window.requestAnimationFrame((function(){return i(n())}))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n,e]),Object(O.a)(t,(function(e){return(e-c.offsetTop)/c.offsetHeight}))}var k=d.a.div(E||(E=Object(v.a)(["\n  height: 100vh;\n  width: 100%;\n  scroll-snap-align: center;\n  :nth-child(even){\n    background-color: #ddd;\n  }\n"])));function x(e){var t=e.content,n=Object(a.useRef)({}),r=y(n),o=Object(a.useContext)(j).registerSection;return Object(a.useEffect)((function(){o({content:t(r)})}),[t,o,r]),i.a.createElement(k,{ref:n})}var C,Y,P=n(53),H=d.a.h1(C||(C=Object(v.a)(["\n    color: #ffffff\n"])));function L(e){var t=e.scrollYProgress,n=Object(O.a)(t,[0,.9,1],[1,.8,0]);n.set(1);var r=Object(O.a)(t,[0,.85,1],["0vh","0vh","100vh"]);return r.set("0"),i.a.createElement(P.a.div,{style:{opacity:n,height:"100vh",width:"100%",backgroundColor:"#343434",display:"flex"}},i.a.createElement(P.a.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",top:r,position:"fixed",height:"100%",transition:"all 0.3s"}},i.a.createElement(H,null,"Ol\xe1! Bem vindo ao meu portf\xf3lio!")))}var F=d.a.h1(Y||(Y=Object(v.a)(["\n    color: #343434\n"])));function R(e){var t=e.scrollYProgress,n=Object(O.a)(t,[-.1,0,.9,1],[0,1,.8,0]);n.set(0);var r=Object(O.a)(t,[0,.85,1],["0vh","0vh","100vh"]);return i.a.createElement(P.a.div,{style:{opacity:n,height:"100vh",width:"100%",backgroundColor:"#FFF",display:"flex"}},i.a.createElement(P.a.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",bottom:r,position:"fixed",height:"100%"}},i.a.createElement(F,null,"Esta p\xe1gina esta em constru\xe7\xe3o!")))}var S=function(){return i.a.createElement(g,null,i.a.createElement("div",null,i.a.createElement(x,{content:function(e){return i.a.createElement(L,{scrollYProgress:e})}}),i.a.createElement(x,{content:function(e){return i.a.createElement(R,{scrollYProgress:e})}}),i.a.createElement(x,{content:function(e){return i.a.createElement("div",null)}}),i.a.createElement(x,{content:function(e){return i.a.createElement("div",null)}}),i.a.createElement(x,{content:function(e){return i.a.createElement("div",null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.e8b81cca.chunk.js.map