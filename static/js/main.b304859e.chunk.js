(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s=n(0),b=n.n(s),d=n(6),j=n.n(d),l=(n(13),n(4)),u=n(2),x=n(3),f=x.a.div(c||(c=Object(u.a)(["\ntext-align: center;\nmargin: 20px auto;\npadding:20px;\nbackground-color: #fff;\nwidth: 800px;\n"]))),p=x.a.p(r||(r=Object(u.a)(["\nfont-size: 40px;\ntext-align: center;\ncolor: #8de286c3;\n"]))),O=x.a.ul(a||(a=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]))),h=x.a.li(o||(o=Object(u.a)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),g=x.a.button(i||(i=Object(u.a)(["\n  min-width: 200px;\n  height: 50px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 18px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #0fb137;\n  border: none;\n"]))),v=n(1);var k,m,w=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(v.jsx)(O,{children:t.map((function(e){return Object(v.jsx)(h,{children:Object(v.jsx)(g,{onClick:function(){return n(e)},children:e})},e)}))})},S=x.a.div(k||(k=Object(u.a)(["\n"]))),y=x.a.h2(m||(m=Object(u.a)(["\ntext-align: center;\npadding-top: 45px;\npadding-bottom: 25px;\ncolor: #107a27;\n"])));var P,z,B=function(e){var t=e.title,n=e.children;return Object(v.jsxs)(S,{children:[Object(v.jsx)(y,{children:t}),n]})},F=x.a.ul(P||(P=Object(u.a)([""]))),J=x.a.li(z||(z=Object(u.a)(["\nfont-size: 20px;\ntext-transform: uppercase;\nmargin-bottom: 15px;\ncolor: #35ff0d;\nfont-weight: 800px;\n"])));var L=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercent;return Object(v.jsxs)(F,{children:[Object(v.jsxs)(J,{children:["Good: ",t]}),Object(v.jsxs)(J,{children:["Neutral: ",n]}),Object(v.jsxs)(J,{children:["Bad: ",c]}),Object(v.jsxs)(J,{children:["Total: ",r]}),Object(v.jsxs)(J,{children:["Positive: ",a," %"]})]})};var M=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(0),a=Object(l.a)(r,2),o=a[0],i=a[1],b=Object(s.useState)(0),d=Object(l.a)(b,2),j=d[0],u=d[1],x=function(){return n+o+j},O=Object.keys({good:n,neutral:o,bad:j}),h=x(),g=function(){var e=x();return Math.round(n/e*100)}();return Object(v.jsxs)(f,{children:[Object(v.jsx)(B,{title:"Please leave feedback",children:Object(v.jsx)(w,{options:O,onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":i((function(e){return e+1}));break;case"bad":u((function(e){return e+1}));break;default:return}}})}),Object(v.jsx)(B,{title:"Statistics",children:0!==h?Object(v.jsx)(L,{good:n,neutral:o,bad:j,total:h,positivePercent:g}):Object(v.jsx)(p,{children:"No feedback given"})})]})};j.a.render(Object(v.jsx)(b.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b304859e.chunk.js.map