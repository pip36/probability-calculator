(this["webpackJsonpprobability-calculator"]=this["webpackJsonpprobability-calculator"]||[]).push([[0],{68:function(e,t,r){"use strict";r.r(t);var n=r(105),a=r(106),i=r(0),c=r(9),o=r.n(c),l=r(32),s=r(15),b=r(98),u=r(102),j=r(103),d=r(107),p=r(108),h=r(104),x={combined:function(e,t){return e*t},either:function(e,t){return e+t-e*t}},O=r(39),f=r(11),m=r.n(f),y=r(13),v={TRACE_LOG_API_URL:"https://localhost:5001/logTrace"},T=function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v.TRACE_LOG_API_URL,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),g=r(8),A=function(e){var t=e.control,r=e.label,n=e.field,a=e.error,i={required:"Please enter a value for ".concat(r),max:"".concat(r," is too large, enter a number from 0.0 to 1.0"),min:"".concat(r," is too small, enter a number from 0.0 to 1.0")};return Object(g.jsx)(O.a,{name:n,control:t,rules:{min:0,max:1,required:!0},defaultValue:"",render:function(e){var t=e.field;return Object(g.jsx)(d.a,Object(l.a)(Object(l.a)({},t),{},{label:r,id:r,type:"number",fullWidth:!0,inputProps:{step:"any"},error:Boolean(a),helperText:a&&i[a.type]}))}})},P=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(O.b)(),c=a.handleSubmit,o=a.control,f=a.formState.errors;return Object(g.jsxs)(b.a,{maxWidth:"sm",children:[Object(g.jsx)(u.a,{align:"center",variant:"h3",gutterBottom:!0,component:"h1",children:"Probability Calculator"}),Object(g.jsx)("form",{onSubmit:c((function(e){var t=e.probabilityA,r=e.probabilityB,a=e.functionType,i=parseFloat(t),c=parseFloat(r),o=x[a](i,c);n(o),T({calculationType:a,inputs:[i,c],result:o})})),children:Object(g.jsxs)(j.a,{container:!0,spacing:2,children:[Object(g.jsx)(j.a,{item:!0,xs:6,children:Object(g.jsx)(A,{control:o,label:"Probability A",field:"probabilityA",error:f.probabilityA})}),Object(g.jsx)(j.a,{item:!0,xs:6,children:Object(g.jsx)(A,{control:o,label:"Probability B",field:"probabilityB",error:f.probabilityB})}),Object(g.jsx)(j.a,{item:!0,xs:12,children:Object(g.jsx)(O.a,{name:"functionType",control:o,rules:{required:!0},defaultValue:"",render:function(e){var t=e.field;return Object(g.jsxs)(d.a,Object(l.a)(Object(l.a)({},t),{},{id:"functionType",label:"Function",select:!0,fullWidth:!0,error:Boolean(f.functionType),helperText:f.functionType&&"required"===f.functionType.type&&"Please enter a value for Function",children:[Object(g.jsx)(p.a,{value:"combined",children:"CombinedWith"}),Object(g.jsx)(p.a,{value:"either",children:"Either"})]}))}})}),Object(g.jsx)(j.a,{item:!0,xs:3,children:Object(g.jsx)(h.a,{type:"submit",variant:"outlined",color:"primary",children:"Calculate"})}),Object(g.jsx)(j.a,{item:!0,xs:9,children:r&&Object(g.jsxs)(u.a,{variant:"h4",style:{textAlign:"right"},children:["Result: ",r]})})]})})]})},B=r(51),S=r(109),C=Object(B.a)({typography:{htmlFontSize:10},props:{MuiTextField:{variant:"outlined"},MuiCard:{variant:"outlined"}}}),F=C=Object(S.a)(C);o.a.render(Object(g.jsxs)(i.StrictMode,{children:[Object(g.jsx)(n.a,{}),Object(g.jsx)(a.a,{theme:F,children:Object(g.jsx)(P,{})})]}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.dd04b5ce.chunk.js.map