(this["webpackJsonpfetch-rewards"]=this["webpackJsonpfetch-rewards"]||[]).push([[0],{13:function(A,e,t){},14:function(A,e,t){},16:function(A,e,t){"use strict";t.r(e);t(7);var n=t(5),c=t.n(n),r=t(4),o=t.n(r),a=t(6),s=t(2),i=(t(13),t(1)),u=(t(14),function(){var A=window;return{width:A.innerWidth,height:A.innerHeight,screenTop:A.pageYOffset}}),f=t(0),j=function(A){var e=A.categoryData,t=A.name,n=Object(i.useState)(10),c=Object(s.a)(n,2),r=c[0],o=c[1],a=Object(i.useState)(),j=Object(s.a)(a,2),l=j[0],h=j[1],g=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){var A=e.slice(0,r).map((function(A){return Object(f.jsx)("li",{children:Object(f.jsx)("div",{className:"category-card",children:A.name})},A.id)}));h(A)}),[r]),Object(i.useEffect)((function(){d()}),[l]);var d=function(){if(10===r&&g.current)g.current.offsetTop<u().screenTop&&g.current.scrollIntoView({behavior:"smooth"});else if(r>10&&b.current){var A=b.current.offsetTop,e=u(),t=e.height;A>e.screenTop+t-50&&b.current.scrollIntoView({behavior:"smooth",block:"end"})}};return Object(f.jsxs)("div",{ref:g,children:[Object(f.jsx)("h3",{children:t}),Object(f.jsx)("ul",{className:"category-list-items",children:Object(f.jsx)("div",{className:"items-div",children:l})}),Object(f.jsxs)("div",{ref:b,className:"category-buttons-div",children:[Object(f.jsx)("button",{className:"collapse-button",onClick:function(){o(10)},children:"Collapse"}),Object(f.jsx)("button",{className:"show-more-button",onClick:function(){o(r+10)},children:"Show 10 More"})]})]})},l=function(A){var e=A.hiringData,t=Object(i.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1];Object(i.useEffect)((function(){if(e){var A=function(A){var e={};return A.forEach((function(A){var t=A.listId;e[t]?e[t].push(A):e[t]=[A]})),e}(function(A){return A.sort((function(A,e){var t=parseInt(A.name.substring(5,A.name.length)),n=parseInt(e.name.substring(5,e.name.length));return t>n?1:t<n?-1:0}))}(e));r(A)}}),[e]);var o=c&&Object.values(c).map((function(A){var e=A[0].listId;return Object(f.jsx)(j,{categoryData:A,name:"List Id - ".concat(e)},"listId-".concat(e))}));return Object(f.jsx)("div",{style:{height:"100%"},children:o})},h=function(A){return A.filter((function(A){return A.name}))},g=function(){var A=Object(i.useState)(),e=Object(s.a)(A,2),t=e[0],n=e[1],c=function(){var A=Object(a.a)(o.a.mark((function A(){var e,t,c;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json");case 2:return e=A.sent,A.next=5,e.json();case 5:t=A.sent,c=h(t),n(c);case 8:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"main",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Fetch Rewards Technical Assessment"}),Object(f.jsxs)("button",{id:"fetch-data-button",onClick:c,children:[Object(f.jsx)("img",{src:"data:image/jpeg;base64,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"}),"FETCH DATA"]}),Object(f.jsx)(l,{hiringData:t})]})})},b=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(g,{})})};c.a.render(Object(f.jsx)(b,{}),document.querySelector("#root"))},7:function(A,e,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.50f8204f.chunk.js.map