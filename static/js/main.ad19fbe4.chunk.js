(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),l=c(12),i=c.n(l),o=(c(21),c(7)),r=c(13),a=c(14),d=c(5),j=c(16),h=c(15),b=c(6),u=(c(23),c(24),c(25),c(26),c(11),c(10),c(3)),m=c(9),x=c(1),O="100%",v=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).runCode=function(){var t=e.state,c=t.html,n=t.css,s=t.js,l=e.iframeRef.current.contentDocument,i='\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>Document</title>\n        <style>\n          '.concat(n,"\n        </style>\n      </head>\n      <body>\n        ").concat(c,'\n\n        <script type="text/javascript">\n          ').concat(s,"\n        <\/script>\n      </body>\n      </html>\n    ");l.open(),l.write(i),l.close()},e.handleClick=function(t){e.setState({currentdoc:t}),console.log("Hello")},e.state={id:"",html:"",css:"",js:"",currentdoc:"html"},e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.iframeRef=s.a.createRef(),e}return Object(a.a)(c,[{key:"componentDidUpdate",value:function(){this.runCode()}},{key:"statechecker",value:function(){return"html"===this.state.currentdoc}},{key:"render",value:function(){var e=this,t=this.state,c=t.html,n=t.js,s=t.css,l=t.currentdoc,i={theme:"material",lineNumbers:!0,scrollbarStyle:null,lineWrapping:!0};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"navbar",children:[Object(x.jsx)("br",{}),Object(x.jsx)(m.b,{}),Object(x.jsx)("br",{}),"File Explorer","html"===l?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"white",backgroundColor:"#263238"},onClick:function(t){return e.handleClick("html")},children:[Object(x.jsx)(u.c,{}),"index.html"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("css")},children:[Object(x.jsx)(u.b,{}),"index.css"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("js")},children:[Object(x.jsx)(u.d,{}),"index.js"]})]}):"css"===l?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("html")},children:[Object(x.jsx)(u.c,{}),"index.html"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"white",backgroundColor:"#263238"},onClick:function(t){return e.handleClick("css")},children:[Object(x.jsx)(u.b,{}),"index.css"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("js")},children:[Object(x.jsx)(u.d,{}),"index.js"]})]}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("html")},children:[Object(x.jsx)(u.c,{}),"index.html"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"grey",backgroundColor:"#0c0c0c"},onClick:function(t){return e.handleClick("css")},children:[Object(x.jsx)(u.b,{}),"index.css"]}),Object(x.jsxs)("div",{className:"navbutton",style:{top:50,color:"white",backgroundColor:"#263238"},onClick:function(t){return e.handleClick("js")},children:[Object(x.jsx)(u.d,{}),"index.js"]})]})]}),Object(x.jsx)("section",{className:"playground",children:Object(x.jsxs)("div",{className:"playground-inner",children:[Object(x.jsxs)("div",{className:"playground-header",children:[Object(x.jsx)(u.a,{}),"Code Editor"]}),"html"===l?Object(x.jsxs)("div",{className:"code-editor",children:[Object(x.jsx)("div",{className:"editor-header",children:"index.html"}),Object(x.jsx)(b.Controlled,{height:O,value:c,options:Object(o.a)({mode:"htmlmixed"},i),onBeforeChange:function(t,c,n){e.setState({html:n})}})]}):"css"===l?Object(x.jsxs)("div",{className:"code-editor",children:[Object(x.jsx)("div",{className:"editor-header",children:"index.css"}),Object(x.jsx)(b.Controlled,{height:O,value:s,options:Object(o.a)({mode:"css"},i),onBeforeChange:function(t,c,n){e.setState({css:n})}})]}):Object(x.jsxs)("div",{className:"code-editor",children:[Object(x.jsx)("div",{className:"editor-header",children:"index.js"}),Object(x.jsx)(b.Controlled,{height:O,value:n,options:Object(o.a)({mode:"javascript"},i),onBeforeChange:function(t,c,n){e.setState({js:n})}})]})]})}),Object(x.jsxs)("section",{className:"result",children:[Object(x.jsxs)("div",{className:"resultheader",children:[Object(x.jsx)(m.a,{}),"Live View"]}),Object(x.jsx)("iframe",{title:"result",className:"iframe",ref:this.iframeRef})]})]})}}]),c}(n.Component),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),l(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.ad19fbe4.chunk.js.map