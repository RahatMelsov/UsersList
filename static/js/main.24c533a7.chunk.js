(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(25),r=n.n(a),s=(n(177),n(38)),i=(n(178),n(143),n(253)),o=n(258),j=n(259),l=n(20),d=n(252),b=n(255),O=n(56),u=n(257),h=n(251),m=n(156),x=n.n(m),f=(n(144),n(44)),w=n.n(f),y=n(7);var C=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(Object(l.a)({},e.user)),o=Object(s.a)(i,2),j=o[0],m=o[1],f=Object(c.useState)(new Date),C=Object(s.a)(f,2),v=C[0],g=C[1];return Object(y.jsxs)(d.a,{closeIcon:!0,open:a,trigger:Object(y.jsx)(b.a,{icon:!0,children:Object(y.jsx)(O.a,{name:"pencil alternate"})}),onClose:function(){return r(!1)},onOpen:function(){return r(!0)},children:[Object(y.jsx)(u.a,{icon:"archive",content:"Archive Old Messages"}),Object(y.jsx)(d.a.Content,{children:Object(y.jsxs)(h.a,{children:[Object(y.jsxs)(h.a.Field,{children:[Object(y.jsx)("label",{children:"First Name"}),Object(y.jsx)("input",{id:"name",value:j.named,onChange:function(e){return m((function(t){return Object(l.a)(Object(l.a)({},t),{},{named:e.target.value})}))}})]}),Object(y.jsxs)(h.a.Field,{children:[Object(y.jsx)("label",{children:"Last Name"}),Object(y.jsx)("input",{id:"lastName",value:j.lastName,onChange:function(e){return m((function(t){return Object(l.a)(Object(l.a)({},t),{},{lastName:e.target.value})}))}})]}),Object(y.jsxs)(h.a.Field,{children:[Object(y.jsx)("label",{children:"City"}),Object(y.jsx)("input",{id:"city",value:j.city,onChange:function(e){return m((function(t){return Object(l.a)(Object(l.a)({},t),{},{city:e.target.value})}))}})]}),Object(y.jsxs)(h.a.Field,{children:[Object(y.jsx)("label",{children:"Cowntry"}),Object(y.jsx)("input",{id:"cowntry",value:j.cowntry,onChange:function(e){return m((function(t){return Object(l.a)(Object(l.a)({},t),{},{cowntry:e.target.value})}))}})]}),Object(y.jsx)(h.a.Group,{widths:"equal",children:Object(y.jsxs)(h.a.Field,{children:[Object(y.jsx)("label",{children:"Birth day"}),Object(y.jsx)(x.a,{value:w()(j.DateOfBirth).format("L"),selected:v,onChange:function(e){return g(e),m((function(e){return Object(l.a)(Object(l.a)({},e),{},{DateOfBirth:v})}))}})]})})]})}),Object(y.jsxs)(d.a.Actions,{children:[Object(y.jsxs)(b.a,{color:"red",onClick:function(){return r(!1)},children:[Object(y.jsx)(O.a,{name:"remove"})," No"]}),Object(y.jsxs)(b.a,{color:"green",onClick:function(){e.setUsers((function(t){return t.map((function(t){return t.id===e.user.id?Object.assign(t,j):t}))})),r(!1)},children:[Object(y.jsx)(O.a,{name:"checkmark"})," Yes"]})]})]})},v=function(e){return Object(y.jsx)(i.a.Body,{children:e.users.map((function(t){return Object(y.jsxs)(i.a.Row,{children:[Object(y.jsx)(i.a.Cell,{children:t.named}),Object(y.jsx)(i.a.Cell,{children:t.lastName}),Object(y.jsx)(i.a.Cell,{children:w()(t.DateOfBirth).format("L")}),Object(y.jsxs)(i.a.Cell,{children:[t.city," from ",t.cowntry]}),Object(y.jsx)(i.a.Cell,{children:Object(y.jsx)(C,{Users:e.users,user:t,setUsers:e.setUsers})})]})}))})},g=n(254),p=n(261);var D=function(e){var t;window.lin="ddads";var n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(Object(l.a)({},e.contract)),j=Object(s.a)(o,2),h=(j[0],j[1],[{name:"Wal-Mart Stores",contactDate:"12/12/12",contractNumber:1241343},{name:"Exxon Mobil",contactDate:"12/12/10",contractNumber:1241343},{name:"Chevron",contactDate:"12/12/12",contractNumber:1241343},{name:"Berkshire Hathaway",contactDate:"12/12/12",contractNumber:1241343},{name:"Apple",contactDate:"12/12/12",contractNumber:1241343},{name:"Phillips 66",contactDate:"12/12/12",contractNumber:1241343}]);return Object(y.jsxs)(d.a,{closeIcon:!0,open:r,trigger:Object(y.jsx)(b.a,{icon:!0,children:Object(y.jsx)("h3",{children:"ok"})}),onClose:function(){return i(!1)},onOpen:function(){return i(!0)},children:[Object(y.jsx)(u.a,{}),Object(y.jsx)(d.a.Content,{children:Object(y.jsx)(g.a,{children:h.map((function(e){return Object(y.jsxs)(g.a.Item,{children:[Object(y.jsx)(g.a.Content,{children:Object(y.jsx)("h4",{children:Object(y.jsx)(p.a,{id:""+h.indexOf(e),label:e.name+" | "+w()(e.contactDate).format("L")+" | "+e.contractNumber,name:"contract",onClick:function(e){return n=e.currentTarget,c="contract",console.log(n.childNodes[0].checked,c),void("ddads"==window.lin?(window.lin=n.childNodes[0],t=n.childNodes[0].id):(window.lin.checked=!1,window.lin=n.childNodes[0],t=n.childNodes[0].id));var n,c}})})})," "]})}))})}),Object(y.jsxs)(d.a.Actions,{children:[Object(y.jsxs)(b.a,{color:"red",onClick:function(){return i(!1)},children:[Object(y.jsx)(O.a,{name:"remove"})," No"]}),Object(y.jsxs)(b.a,{color:"green",onClick:function(){i(!1),console.log(t),console.log(h[t]),e.setContract(h[t])},children:[Object(y.jsx)(O.a,{name:"checkmark"})," Yes"]})]})]})};var N=function(){var e={name:"Wal-Mart Stores",contactDate:"12/12/12",contractNumber:1241343},t=[{named:"Oliver ",lastName:"Manson",DateOfBirth:new Date("1995-12-17"),city:"Liverpool",cowntry:"GreatBrit",id:0},{named:"Harry ",lastName:"Jackson",DateOfBirth:new Date("1995-12-17"),city:"Almaty",cowntry:"Kazakhstan",id:1},{named:"Jacob ",lastName:"Grayson",DateOfBirth:new Date("1995-12-17"),city:"Almaty",cowntry:"Kazakhstan",id:2}],n=Object(c.useState)(t),a=Object(s.a)(n,2),r=a[0],l=a[1],d=Object(c.useState)(e),b=Object(s.a)(d,2),O=b[0],u=b[1];return window.User=t,window.userrs=r,Object(y.jsxs)("div",{children:[Object(y.jsxs)(i.a,{celled:!0,striped:!0,children:[Object(y.jsx)(i.a.Header,{children:Object(y.jsxs)(i.a.Row,{children:[Object(y.jsx)(i.a.HeaderCell,{children:"First name"}),Object(y.jsx)(i.a.HeaderCell,{children:"Last name"}),Object(y.jsx)(i.a.HeaderCell,{children:"Birth day"}),Object(y.jsx)(i.a.HeaderCell,{children:"Location"})]})}),Object(y.jsx)(v,{users:r,setUsers:l})]}),Object(y.jsx)(o.a,{columns:"equal",children:Object(y.jsxs)(o.a.Row,{children:[Object(y.jsx)(o.a.Column,{children:Object(y.jsx)(j.a,{children:O.name})}),Object(y.jsx)(o.a.Column,{children:Object(y.jsx)(j.a,{children:O.contractNumber})}),Object(y.jsx)(o.a.Column,{children:Object(y.jsx)(j.a,{children:w()(O.dateContract).format("L")})}),Object(y.jsx)(o.a.Column,{children:Object(y.jsx)(D,{contract:e,setContract:u})})]})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},B=n(139),S="ADD_USERS_DATA",A={Users:[{named:"Oliver ",lastName:"Manson",DateOfBirth:new Date("1995-12-17"),city:"Liverpool",cowntry:"GreatBrit",id:0},{named:"Harry ",lastName:"Jackson",DateOfBirth:new Date("1995-12-17"),city:"Almaty",cowntry:"Kazakhstan",id:1},{named:"Jacob ",lastName:"Grayson",DateOfBirth:new Date("1995-12-17"),city:"Almaty",cowntry:"Kazakhstan",id:2}]};window.state=A;var F=Object(B.a)({UsersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)({},t.main);default:return e}}});Object(B.b)(F),n(233);r.a.render(Object(y.jsx)(N,{}),document.getElementById("root")),k()}},[[234,1,2]]]);
//# sourceMappingURL=main.24c533a7.chunk.js.map