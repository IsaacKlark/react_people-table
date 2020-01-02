(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(8),s=a(6),u=a(7),i=a(15),m=a(3),d=a(12),p=a.n(d),b=function(e){var t=e.person,a=(e.index,e.personInURL),n=Math.ceil(t.died/100),c=Object(s.f)(),l=Object(s.e)();return r.a.createElement("tr",{className:p()({tr:!0,"Person--male":"m"===t.sex,"Person--female":"f"===t.sex,"Person--selected":t.name.toLowerCase()===a,earlyBorn:t.born<1650}),onClick:function(){var e="/people/".concat(t.name.toLowerCase().split(" ").join("-"));c.pathname=e,l.location.pathname=e,l.replace(c.pathname,e)}},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.father),r.a.createElement("td",{className:p()({greenLive:t.died-t.born>=65})},t.died-t.born),r.a.createElement("td",null,n))},f=function(e){var t=e.peopleList,a=Object(n.useState)("Person--selected"),c=Object(m.a)(a,1)[0],l=Object(n.useState)(null),o=Object(m.a)(l,2),u=o[0],i=o[1],d=function(e){c(e)},p=Object(s.f)().pathname.match(/(people\/.+(?=\/|:|\?|\b))/g);if(p){var f=p,h=p=Object(m.a)(f,1)[0].split("/");p=Object(m.a)(h,2)[1].split("-").join(" ")}return(!u&&p||u!==p)&&i(p),r.a.createElement("table",{className:"people__table"},r.a.createElement("thead",{className:"table__head"},r.a.createElement("tr",null,r.a.createElement("td",null,"id"),r.a.createElement("td",null,"name"),r.a.createElement("td",null,"sex"),r.a.createElement("td",null,"born"),r.a.createElement("td",null,"died"),r.a.createElement("td",null,"mother"),r.a.createElement("td",null,"father"),r.a.createElement("td",null,"age"),r.a.createElement("td",null,"century"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(n.Fragment,{key:e.name},r.a.createElement(b,{person:e,index:t,changeSelected:d,personInURL:u}))})))},h=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(m.a)(l,2),d=o[0],p=o[1],b=Object(n.useState)([]),h=Object(m.a)(b,2),E=h[0],j=h[1],O=Object(n.useState)([]),y=Object(m.a)(O,2),v=y[0],g=y[1],w=Object(n.useState)(null),k=Object(m.a)(w,2),x=k[0],C=k[1],L=Object(n.useState)(null),_=Object(m.a)(L,2),N=_[0],S=_[1],B=Object(s.f)(),P=Object(s.e)(),A=new URLSearchParams(B.search),I=A.get("query"),M=A.get("sortBy");I&&I!==x&&(C(I),R(I)),M&&M!==N&&(S(M),q(M)),d&&fetch("https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()}).then(function(e){c(e.length),j(e.map(function(e,t){return Object(i.a)({},e,{id:t})})),g(e.map(function(e,t){return Object(i.a)({},e,{id:t})})),p(!1)});function R(e){var t=E.filter(function(t){var a=null===t.mother?"":t.mother,n=null===t.father?"":t.father;return a.toLowerCase().includes(e.toLowerCase())||t.name.toLowerCase().includes(e.toLowerCase())||n.toLowerCase().includes(e.toLowerCase())});g(t),c(t.length),e.length>0?(A.set("query",e),P.push({search:A.toString()})):P.push({search:null})}var U=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){e.apply(void 0,r)},t)}}(R,1e3);function q(e){var t=[];switch("string"===typeof e?e:e.target.value){case"name":t=Object(u.a)(v.sort(function(e,t){return e.name.localeCompare(t.name)})),A.set("sortBy","name");break;case"id":t=Object(u.a)(v.sort(function(e,t){return e.id-t.id})),A.set("sortBy","id");break;case"sex":t=Object(u.a)(v.sort(function(e,t){return e.sex.localeCompare(t.sex)})),A.set("sortBy","sex");break;case"born":t=Object(u.a)(v.sort(function(e,t){return e.born-t.born})),A.set("sortBy","born");break;case"died":t=Object(u.a)(v.sort(function(e,t){return e.died-t.died})),A.set("sortBy","died");break;case"age":t=Object(u.a)(v.sort(function(e,t){return e.died-e.born-(t.died-t.born)})),A.set("sortBy","age");break;case"century":t=Object(u.a)(v.sort(function(e,t){return Math.ceil(e.died/100)-Math.ceil(t.died/100)})),A.set("sortBy","century")}g(t),P.push({search:A.toString()})}return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"people__h1"},d?"...Loading":"".concat(a," persons found")),d?"":r.a.createElement("div",{className:"people__forms"},r.a.createElement("nav",null,r.a.createElement("input",{type:"text",name:"search",placeholder:"find",onChange:function(e){U(e.target.value)}}),["name","id","sex","born","died","age","century"].map(function(e){return r.a.createElement("button",{type:"button",onClick:q,className:"sort__button",value:e,key:e},"sort by"," ",e)})),r.a.createElement(f,{peopleList:v})))},E=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.b,{to:"/",exact:!0,className:"link",activeClassName:"active__link"},"Home"),r.a.createElement(o.b,{to:"/people",exact:!0,className:"link",activeClassName:"active__link"},"people list"),r.a.createElement(s.a,{path:"/people",component:h})))};l.a.render(r.a.createElement(E,{test:123}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f9e389b5.chunk.js.map