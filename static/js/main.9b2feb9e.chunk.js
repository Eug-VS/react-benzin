(this["webpackJsonpreact-benzin"]=this["webpackJsonpreact-benzin"]||[]).push([[0],{208:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(4),i=n(0),c=n(10),o=n.n(c),l=n(244),s=n(251),u=n(250),d=n(246),j=n(92),b=n.n(j),p=n(93),h=n.n(p),v=n(98),f=n(240),m=n(241),g=(n(113),Object(v.a)({palette:{type:"dark",primary:{main:b.a[400]},secondary:{main:h.a[500]},background:{default:"#121212",paper:"#1e1e1e",elevation1:"#1e1e1e",elevation2:"#232323",elevation3:"#252525"},text:{primary:"#f4f4f4",secondary:"rgba(255, 255, 255, 0.6)"}}})),O=function(e){var t=e.children;return Object(r.jsxs)(f.a,{theme:g,children:[Object(r.jsx)(m.a,{}),t]})},x=n(99),w=n(210),y=n(95),k=n.n(y),N=n(96),E=n.n(N),M=n(97),R=n.n(M),C=n(209),D=Object(l.a)((function(e){return{root:{background:e.palette.background.default,padding:e.spacing(1),overflowX:"auto",fontFamily:"Monospace",scrollbarColor:"auto"}}})),z=function(e){var t=e.value,n=D();return Object(r.jsx)(C.a,{variant:"outlined",className:n.root,children:Object(r.jsx)("pre",{children:t})})},S=Object(l.a)((function(e){return{root:{background:e.palette.background.default,borderRadius:e.spacing(.5),padding:e.spacing(.5),fontFamily:"Monospace"}}})),B=function(e){var t=e.children,n=S();return Object(r.jsx)("span",{className:n.root,children:t})},F=n(245),I=Object(l.a)((function(e){return{root:{padding:e.spacing(2,0,1,0)}}})),T=function(e){var t=e.children,n=e.level,a=I(),i=n+2;i>6&&(i=6);var c="h".concat(i);return Object(r.jsxs)("div",{className:a.root,children:[Object(r.jsx)(w.a,{variant:c,children:t}),Object(r.jsx)(F.a,{variant:"middle"})]})},W=function(e){var t=e.src,n=e.alt;return Object(r.jsx)("img",{src:t,alt:n,style:{maxWidth:"100%",maxHeight:"100%"}})},A=function(e){return function(t){var n=t.children;if("string"===typeof n&&(null===n||void 0===n?void 0:n.startsWith("$"))){var a=n.slice(1);return e[a]||null}return Object(r.jsx)(B,{children:n})}},H=function(e){var t=e.children,n=e.url,c=e.source,o=e.context,l=void 0===o?{}:o,s=e.plugins,u=void 0===s?[]:s,j=Object(i.useState)(c||""),b=Object(a.a)(j,2),p=b[0],h=b[1];Object(i.useEffect)((function(){n&&k.a.get(n).then((function(e){return h(e.data)}))}),[n]),Object(i.useEffect)((function(){c&&h(c)}),[c]),Object(i.useEffect)((function(){t&&"string"===typeof t&&h(t)}),[t]);var v=function(e,t){return e.replace(/src="(?!http)(.*)"[\s>]/,(function(e,n){return'src="'.concat(t,"/").concat(n,'?sanitize=true"')})).replace(/\[(.*\]?.*)\]\((?!http)(.+?)\)/g,(function(e,n,a){return"[".concat(n,"](").concat(t,"/").concat(a,")")}))}(p,(null===n||void 0===n?void 0:n.slice(0,n.lastIndexOf("/")))||""),f={heading:T,code:z,link:d.a,image:W,inlineCode:A(l)};return Object(r.jsx)(w.a,{children:Object(r.jsx)(E.a,{source:v,renderers:f,plugins:[R.a].concat(Object(x.a)(u)),allowDangerousHtml:!0})})},P=n(247),L=n(248),J=n(252),Y=n(249),G=Object(l.a)((function(e){return{root:{background:e.palette.background.elevation2,color:e.palette.text.primary,paddingLeft:e.spacing(3)},logo:{margin:e.spacing(0,3,0,1)},tab:{"& .MuiTab-wrapper":{padding:e.spacing(2),flexDirection:"row",fontSize:"0.8125rem","& svg":{marginRight:e.spacing(1),marginBottom:"0 !important"}}}}})),X=function(e){var t=e.logo,n=e.contents,a=e.page,i=e.setPage,c=G();return Object(r.jsx)(P.a,{position:"sticky",className:c.root,children:Object(r.jsxs)(L.a,{children:[t.icon,Object(r.jsx)(w.a,{variant:"h5",className:c.logo,color:"primary",children:t.title}),Object(r.jsx)(J.a,{onChange:function(e,t){i(t)},value:a,children:n&&Object.keys(n).map((function(e){return Object(r.jsx)(Y.a,{label:e,icon:n[e],value:e,className:c.tab},e)}))})]})})},Z=n(63),$=Object(l.a)((function(e){return{surface:{position:"absolute",display:"flex",flexDirection:"column",overflowY:"auto",scrollbarColor:"".concat(e.palette.secondary.dark," ").concat(e.palette.secondary.light),"& a.MuiTypography-root":{color:e.palette.primary.light}}}})),q=function(e){var t=e.size,n=e.position,a=e.children,i=$();return Object(r.jsx)(C.a,{variant:"outlined",style:Object(Z.a)(Object(Z.a)({},t),n),className:i.surface,children:a})},K=Object(l.a)((function(e){return{header:{padding:e.spacing(1,0,1,2),background:e.palette.background.elevation2}}})),Q=function(e){var t=e.type,n=e.name,a=e.children,i=K(),c={height:"85vh"},o={bottom:"3vh"};return"primary"===t?(c.width="63vw",o.left="2vw"):"secondary"===t?(c.width="31vw",o.right="2vw"):"mono"===t&&(o.left="2vw",o.right="2vw"),Object(r.jsxs)(q,{size:c,position:o,children:[n&&Object(r.jsxs)("div",{children:[Object(r.jsx)(w.a,{variant:"h5",className:i.header,children:n}),Object(r.jsx)(F.a,{})]}),a]})},U=n.p+"static/media/content.b312f0cd.md",V=n.p+"static/media/icon.50d2b01a.svg",_=Object(l.a)((function(e){return{window:{padding:e.spacing(4)},promoButton:{display:"flex",justifyContent:"center",marginTop:e.spacing(4)}}})),ee=Object(r.jsx)("img",{src:V,width:"32px",height:"37px",alt:"logo"}),te={home:null,dotfiles:null,"material-ui":null,custom:null,"live preview":null},ne={home:"https://raw.githubusercontent.com/eug-vs/react-benzin/develop/README.md","material-ui":"https://raw.githubusercontent.com/mui-org/material-ui/master/README.md",dotfiles:"https://raw.githubusercontent.com/eug-vs/dotfiles/master/.github/README.md"},ae=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(i.useRef)(null);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{level:2,children:"Render custom markdown document"}),Object(r.jsx)("p",{children:"This should be a link to a valid markdown file. Response should give the file contents. If you copy README file from GitHub, make sure you provide link to raw view."}),Object(r.jsx)("p",{children:Object(r.jsx)(s.a,{fullWidth:!0,inputRef:o,variant:"outlined",color:"secondary",label:"Markdown url"})}),Object(r.jsx)(u.a,{variant:"contained",color:"secondary",onClick:function(){var e;c((null===(e=o.current)||void 0===e?void 0:e.value)||"")},children:"Render!"}),Object(r.jsx)(H,{url:n})]})},re=function(e){var t=e.setLivePreviewData,n=Object(i.useRef)(null);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{level:2,children:"Markdown live preview"}),Object(r.jsxs)("p",{children:["Start typing and see your text rendered on the left window! You can find the list of all Markdown features"," ",Object(r.jsx)(d.a,{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",children:"here"}),". (some of them are yet in progress). We recommend starting with # Header."]}),Object(r.jsx)("p",{children:Object(r.jsx)(s.a,{fullWidth:!0,multiline:!0,inputRef:n,variant:"outlined",color:"primary",label:"Markdown",onChange:function(){var e;t((null===(e=n.current)||void 0===e?void 0:e.value)||"")}})})]})},ie=function(){var e=_(),t=Object(i.useState)("home"),n=Object(a.a)(t,2),c=n[0],o=n[1],l=Object(i.useState)(""),s=Object(a.a)(l,2),d=s[0],j=s[1],b=ne[c],p=null===b||void 0===b?void 0:b.slice(b.lastIndexOf("/")+1),h=Object(r.jsx)(H,{url:b});"custom"===c?h=Object(r.jsx)(ae,{}):"live preview"===c&&(h=Object(r.jsx)(H,{source:d||"# Start typing in the right window!"}));var v=Object(r.jsx)("p",{className:e.promoButton,children:Object(r.jsx)(u.a,{variant:"contained",color:"primary",size:"large",onClick:function(){o("live preview")},children:"Try it yourself!"})});return Object(r.jsxs)(O,{children:[Object(r.jsx)(X,{logo:{icon:ee,title:"BENZIN"},contents:te,page:c,setPage:o}),Object(r.jsx)(Q,{type:"primary",children:Object(r.jsx)("div",{className:e.window,children:h})}),Object(r.jsx)(Q,{type:"secondary",name:"Feature preview",children:Object(r.jsx)("div",{className:e.window,children:"live preview"===c?Object(r.jsx)(re,{setLivePreviewData:j}):Object(r.jsx)(H,{url:U,context:{tryButton:v,fileName:p}})})})]})};o.a.render(Object(r.jsx)(ie,{}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.9b2feb9e.chunk.js.map