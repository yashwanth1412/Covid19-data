(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),o=(n(11),n(3)),i=n.n(o),u=n(6),d=n(4),j=(n(13),n(0));function l(t){return Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:" Country "}),Object(j.jsx)("th",{children:" Active Cases "}),Object(j.jsx)("th",{children:" Total Confirmed "}),Object(j.jsx)("th",{children:" Total Deaths "})]}),t.data.length?t.data.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[" ",t.Country," "]}),Object(j.jsxs)("td",{children:[" ",t.ActiveCases," "]}),Object(j.jsxs)("td",{children:[" ",t.TotalConfirmed," "]}),Object(j.jsxs)("td",{children:[" ",t.TotalDeaths]})]})})):Object(j.jsx)("h2",{className:"msg",children:" No country with the given name is found... Try another "})]})})}var h=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(""),a=Object(d.a)(r,2),o=a[0],h=a[1];Object(c.useEffect)((function(){function t(){return t=Object(u.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n.Countries[0]),s(n.Countries);case 8:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var b=n.map((function(t){return{Country:t.Country,ActiveCases:t.TotalConfirmed-(t.TotalDeaths-t.TotalRecovered),TotalConfirmed:t.TotalConfirmed,TotalDeaths:t.TotalDeaths}})).filter((function(t){return t.Country.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"head",children:Object(j.jsx)("h1",{children:" Covid 19 Statistics of Various Countries "})}),Object(j.jsx)("input",{value:o||"",onChange:function(t){h(t.target.value)},placeholder:"Enter Country Name",autoFocus:!0}),Object(j.jsx)(l,{data:b})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.fa9dd088.chunk.js.map