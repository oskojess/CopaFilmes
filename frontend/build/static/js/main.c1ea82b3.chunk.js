(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),i=n(48),l=n(49);function s(){var e=Object(i.a)(["\n  *{\n    margin: 0; \n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n  body{\n    font-family: Arial, Helvetica, sans-serif;\n    background: #DADADA;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased; \n  }\n  html, body, #root{\n    height: 100%;\n  }\n"]);return s=function(){return e},e}var u=Object(l.a)(s()),m=n(31),p=n(13),d=Object(p.a)({basename:"/"}),f=n(118),b=n(121),h=n(112),g=n(113),E=n(114),v=n(115),x=Object(v.a)((function(e){return{root:{margin:"40px 0px",padding:40,background:"#939191"},cardContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},titulo:{fontWeight:"bold",color:"#F5F5F5"},boldWhite:{color:"#FFF",fontWeight:"bold"},bold:{fontWeight:"bold"}}})),j=function(e){var t=e.titulo,n=e.subtitulo,a=e.descricao,r=x();return o.a.createElement(b.a,{className:r.root},o.a.createElement(h.a,{className:r.cardContent},o.a.createElement(g.a,{component:"h2",color:"textSecondary",className:r.bold},t),o.a.createElement(g.a,{variant:"h4",component:"h1",className:r.boldWhite}," ",n),o.a.createElement(E.a,{variant:"middle"}),o.a.createElement(g.a,{component:"h3",className:r.boldWhite},a)))},y=n(57),O=n(58),k=n(11),w=n.n(k),F=n(18),C=n(25),N=n(56),S=n.n(N).a.create({baseURL:"https://localhost:5001/filme/api"}),W={method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/json"}};function A(e){return D.apply(this,arguments)}function D(){return(D=Object(F.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/campeonato",t,W);case 3:return n=e.sent,a=n.data,console.log("response",n),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function I(){return T.apply(this,arguments)}function T(){return(T=Object(F.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/filmes");case 3:return t=e.sent,(n=t.data).sort((function(e,t){return e.titulo>t.titulo?1:-1})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var B=n(119),z=n(116),R=n(117),q=n(120),G=function(e){var t=e.type,n=void 0===t?"checkbox":t,a=e.titulo,r=e.onChange,c=e.tabIndex,i=e.checked;return o.a.createElement(q.a,{type:n,titulo:a,onChange:r,checked:i,tabIndex:c,color:"default",size:"medium",disableRipple:!0})},J=Object(v.a)((function(e){return{root:{margin:8},card:{display:"flex",justifyContent:"center"},grid:{display:"flex",flexGrow:1,justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center",margin:8,maxWidth:"250px",background:"#FFF"},box:{marginTop:10,display:"flex",justifyContent:"space-between"},upper:{textTransform:"upper"},selecionados:{color:"#FFF",fontWeight:"bold"}}})),L=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(C.a)(c,2),l=i[0],s=i[1],u=Object(m.e)();Object(a.useEffect)((function(){(function(){var e=Object(F.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=J();return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{component:"span",className:p.box},o.a.createElement(B.a,{component:"span"},o.a.createElement(g.a,{component:"h3",className:p.selecionados},"Selecionados: "),o.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},l.length," de 8")),o.a.createElement(z.a,{variant:"contained",className:p.upper,onClick:function(){return A(l),void u.push("/campeoes")}},"Gerar meu campeonato")),o.a.createElement("div",{className:p.root},o.a.createElement(R.a,{container:!0,spacing:1,className:p.card},n.map((function(e){return o.a.createElement(R.a,{key:e.id,item:!0,xs:6,sm:3,className:p.grid},o.a.createElement(B.a,{component:"span"},o.a.createElement(g.a,{component:"p"}," ",e.titulo),o.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0}," ",e.ano)),o.a.createElement(B.a,{component:"span"},o.a.createElement(G,{titulo:e.titulo,onChange:function(){return function(e){var t=n.map((function(t){return t.id===e?Object(O.a)({},t,{checked:!t.checked}):t})),a=t.filter((function(e){return!0===e.checked}));r(t),s(Object(y.a)(a))}(e.id)}})))})))))},M=function(){return o.a.createElement(f.a,null,o.a.createElement(j,{titulo:"Campeonato de Filmes",subtitulo:"Fase Sele\xe7\xe3o",descricao:"Selecione 8 filmes que voc\xea deseja que entrem na competi\xe7\xe3o e depois pressione o bot\xe3o gerar Meu Campeonato para prosseguir."}),o.a.createElement(L,null))},U=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){(function(){var e=Object(F.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,console.log("campe-",t),n(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(f.a,null,o.a.createElement(j,{titulo:"Campeonato de Filmes",subtitulo:"Resultado Final",descricao:"Veja o resultado final do Campeonato de Filmes de forma simples e r\xe1pida"}))},H=function(){return o.a.createElement(m.c,{history:d},o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/",component:M}),o.a.createElement(m.b,{path:"/campeoes",component:U}),o.a.createElement(m.a,{from:"*",to:"/"})))};var P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.c1ea82b3.chunk.js.map