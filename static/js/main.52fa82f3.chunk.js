(this["webpackJsonpreact-benzin"]=this["webpackJsonpreact-benzin"]||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/icon.8908a388.svg"},52:function(e,t,a){e.exports=a(81)},81:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),c=a.n(r),l=a(16),o=a.n(l),i=a(40),u=a(84),m=a(100),s=a(50),p=a(83),d=Object(i.a)((function(e){return{surface:{position:"absolute",display:"flex",flexDirection:"column",overflowY:"auto",scrollbarColor:"".concat(e.palette.secondary.dark," ").concat(e.palette.secondary.light),"& a.MuiTypography-root":{color:e.palette.primary.light}}}})),g=function(e){var t=e.size,a=e.position,n=e.children,r=d();return c.a.createElement(p.a,{variant:"outlined",style:Object(s.a)({},t,{},a),className:r.surface},n)},f=Object(i.a)((function(e){return{header:{padding:e.spacing(1,0,1,2),background:e.palette.background.elevation2}}})),h=function(e){var t=e.type,a=e.name,n=e.children,r=f(),l={height:"85vh"},o={bottom:"3vh"};return"primary"===t?(l.width="63vw",o.left="2vw"):"secondary"===t?(l.width="31vw",o.right="2vw"):"mono"===t&&(o.left="2vw",o.right="2vw"),c.a.createElement(g,{size:l,position:o},a&&c.a.createElement("div",null,c.a.createElement(u.a,{variant:"h5",className:r.header},a),c.a.createElement(m.a,null)),n)},v=a(101),E=a(102),b=a(108),w=a(103),y=Object(i.a)((function(e){return{root:{background:e.palette.background.elevation2,color:e.palette.text.primary,paddingLeft:e.spacing(3)},logo:{margin:e.spacing(0,3,0,1)},tab:{"& .MuiTab-wrapper":{padding:e.spacing(2),flexDirection:"row",fontSize:"0.8125rem","& svg":{marginRight:e.spacing(1),marginBottom:"0 !important"}}}}})),k=function(e){var t=e.logo,a=e.contents,n=e.page,r=e.setPage,l=y();return c.a.createElement(v.a,{position:"sticky",className:l.root},c.a.createElement(E.a,null,t.icon,c.a.createElement(u.a,{variant:"h5",className:l.logo,color:"primary"},t.title),c.a.createElement(b.a,{onChange:function(e,t){r(t)},value:n},a&&Object.keys(a).map((function(e){return c.a.createElement(w.a,{label:e,icon:a[e],value:e,className:l.tab,key:e})})))))},j=Object(i.a)((function(e){return{content:{padding:e.spacing(2,2,1,3),marginBottom:e.spacing(1),"& .MuiButton-root":{margin:e.spacing(1,2,2,0)}}}})),x=function(e){var t=e.sectionName,a=e.children,n=e.level,r=void 0===n?0:n,l=j();(r+=2)>6&&(r=6);var o="h"+r;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{variant:o},t),c.a.createElement(m.a,{variant:"middle"}),c.a.createElement(u.a,{component:"div",className:l.content},a))},O=(a(49),a(43),a(44)),L=a.n(O),N=a(45),M=a.n(N),I=a(48),R=a(104),z=a(105),F=(a(61),Object(I.a)({palette:{type:"dark",primary:{main:L.a[400]},secondary:{main:M.a[500]},background:{default:"#121212",paper:"#1e1e1e",elevation1:"#1e1e1e",elevation2:"#232323",elevation3:"#252525"},text:{primary:"#f4f4f4",secondary:"rgba(255, 255, 255, 0.6)"}}})),D=function(e){var t=e.children;return c.a.createElement(R.a,{theme:F},c.a.createElement(z.a,null),t)},A=(a(106),a(46)),B=a.n(A),H=Object(i.a)((function(e){return{root:{background:e.palette.background.default,padding:e.spacing(1),overflowX:"auto",fontFamily:"Monospace",scrollbarColor:"auto"}}})),T=function(e){var t=e.rawLines,a=H();return c.a.createElement(p.a,{variant:"outlined",className:a.root},t.map((function(e){return c.a.createElement("pre",null,e)})))},S=a(107),_=a(25),Z=function(e){return{local:new RegExp("".concat(e,"([^").concat(e,"]+)").concat(e)),global:new RegExp("(".concat(e,"[^").concat(e,"]+").concat(e,")"))}},$={conceal:{global:/(!?\[.+?\]\(.+?\))/g,local:/!?\[(.+?)\]\((.+?)\)/},rawLink:{global:/((?:(?:[A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(?:(?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/,local:/&^/},emoji:Z(":"),bold:Z("\\*\\*"),italic:Z("\\*"),code:Z("`"),strikeThrough:Z("~~")},C=new RegExp(Object.values($).map((function(e){return e.global.source})).join("|")),J=[];Object.keys(_.lib).forEach((function(e){return J.push({name:e,char:_.lib[e].char})})),console.log({emojiList:J});var P=Object(i.a)((function(e){return{code:{background:e.palette.background.default,borderRadius:e.spacing(.5),padding:e.spacing(.5),fontFamily:"Monospace"},image:{maxWidth:"100%",maxHeight:"100%"}}})),G=function(e){var t=e.span,a=P();if(!t)return null;var n=$.conceal.local.exec(t);if(n)return"!"===t[0]?c.a.createElement("img",{src:n[2],alt:n[1],className:a.image}):c.a.createElement(S.a,{href:n[2]},n[1]);var r=t.match($.emoji.local);if(r){var l=J.find((function(e){return e.name===r[1]}));return c.a.createElement("span",null,l?l.char:t)}var o=t.match($.code.local);if(o)return c.a.createElement("span",{className:a.code},o[1]);var i=t.match($.bold.local);if(i)return c.a.createElement("b",null,i[1]);var u=t.match($.italic.local);if(u)return c.a.createElement("i",null,u[1]);var m=t.match($.strikeThrough.local);return m?c.a.createElement("span",{style:{textDecoration:"line-through"}},m[1]):t.match($.rawLink.global)?c.a.createElement(S.a,{href:t},t):c.a.createElement(c.a.Fragment,null,t)},W=function(e){var t=e.line;return c.a.createElement(c.a.Fragment,null,t.split(C).map((function(e){return c.a.createElement(G,{span:e})})))},X=function(e){return null!==e.match(/^```.*$/)},Y=function(e){return null!==e.match(/^ ?- .*$/)},q=function e(t){var a=t.rawLines;if(!a.length)return null;var r,l=a.splice(0,1)[0];if(X(l)){var o=a.findIndex((function(e){return X(e)})),i=a.splice(0,o+1).slice(0,o);r=c.a.createElement(T,{rawLines:i})}else if(Y(l)){var u=a.findIndex((function(e){return!Y(e)})),m=a.splice(0,u).slice(0,u);m.unshift(l),r=c.a.createElement("ul",null,m.map((function(e){return c.a.createElement("li",null,c.a.createElement(W,{line:e.slice(2)}))})))}else if(r=function(e){var t=/<([^/\s]*)[^<]*[^/]>/g.exec(e);return t?t[1]:""}(l)){var s=r,p=a.findIndex((function(e){return function(e,t){var a=new RegExp("</".concat(t,"[^<]*>"));return null!==e.match(a)}(e,s)})),d=a.splice(0,p+1).slice(0,p);d.unshift(l),r=c.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.join("\n")}})}else if(null!==(r=function(e){return e.match(/(<[^/\s]*[^<]*\/>)/g)}(l))){var g=r[0],f=l.split(g),h=Object(n.a)(f,2),v=h[0],E=h[1];console.log({line:l,match:g,before:v,after:E}),r=c.a.createElement(c.a.Fragment,null,c.a.createElement(W,{line:v}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}}),c.a.createElement(W,{line:E}))}else r=c.a.createElement("p",null,c.a.createElement(W,{line:l}));return c.a.createElement(c.a.Fragment,null,r,c.a.createElement(e,{rawLines:a}))},K=function(e){if(!e)return 0;for(var t=0;"#"===e[t];)t++;return t},Q=function(e){var t=e.rawLines,a=e.level,n=void 0===a?0:a,r=t.reduce((function(e,t){return t&&(K(t)===n&&e.push([]),e.length&&e[e.length-1].push(t)),e}),[]).map((function(e){return c.a.createElement(U,{rawLines:e,level:n})}));return c.a.createElement(c.a.Fragment,null," ",r," ")},U=function(e){var t=e.rawLines,a=e.level,n=void 0===a?0:a,r=t.findIndex((function(e){return e.match("^#{".concat(n+1,",} .*$"))})),l=t.splice(0,r<0?t.length:r);if(!n)return c.a.createElement(Q,{rawLines:t,level:K(t[0])});var o=l.splice(0,1)[0].slice(n).trim(),i=K(t[0]);return c.a.createElement(x,{sectionName:o,level:n},c.a.createElement(q,{rawLines:l}),c.a.createElement(Q,{rawLines:t,level:i}))},V=U,ee=function(e){var t=e.data,a=e.url,l=Object(r.useState)(t||""),o=Object(n.a)(l,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){a||u(t||"")}),[t,a]),a&&B.a.get(a).then((function(e){return u(e.data)})),c.a.createElement(V,{rawLines:i.split("\n")})},te=a(47),ae=a.n(te),ne=Object(i.a)((function(e){return{window:{padding:e.spacing(4)}}})),re=c.a.createElement("img",{src:ae.a,width:"32px",height:"37px",alt:"logo"}),ce={home:null,space:null,spacevim:null,emoji:null,"material-ui":null},le={home:"https://raw.githubusercontent.com/eug-vs/react-benzin/develop/README.md",space:"https://raw.githubusercontent.com/eug-vs/space/master/docs/environment.md",spacevim:"https://raw.githubusercontent.com/spacevim/spacevim/master/README.md",emoji:"https://raw.githubusercontent.com/muan/emoji/gh-pages/README.md","material-ui":"https://raw.githubusercontent.com/mui-org/material-ui/master/README.md"};o.a.render(c.a.createElement((function(){var e=ne(),t=Object(r.useState)("home"),a=Object(n.a)(t,2),l=a[0],o=a[1],i=le[l],u=i.slice(i.lastIndexOf("/")+1),m=["## Markdown\n [Markdown file](".concat(i,") *(...").concat(u,")* that you can see on the left was parsed and processed by **BENZIN**! :rocket:"),"Switch between tabs on the header to explore other markdown templates. :recycle: ","Currently **only core features** of markdown function.","Templates on the left are being loaded from the [GitHub](https://github.com), though this pane is generated from plaintext. :pen:","## How do I use this feature?","```","import Markdown from 'react-benzin';","const data = '# Header\\nHello, *world!*';","ReactDOM.render(<Markdown data={data}/>, document.getElementById('root'));","```"].join("\n");return c.a.createElement(D,null,c.a.createElement(k,{logo:{icon:re,title:"BENZIN"},contents:ce,page:l,setPage:o}),c.a.createElement(h,{type:"primary"},c.a.createElement("div",{className:e.window},c.a.createElement(ee,{url:i}))),c.a.createElement(h,{type:"secondary",name:"Feature preview"},c.a.createElement("div",{className:e.window},c.a.createElement(ee,{data:m}))))}),null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.52fa82f3.chunk.js.map