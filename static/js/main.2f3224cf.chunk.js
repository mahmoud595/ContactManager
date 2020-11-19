(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(33),o=a.n(s),i=(a(42),a(14)),l=(a(43),a(17)),u=a(2),d=a(10),h=a(11),j=a(13),p=a(12),b=a(4),m=a.n(b),O=a(15),f=a(16),x=a.n(f),v=a(36),y=c.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(i.a)(Object(i.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(i.a)(Object(i.a)({},e),{},{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(i.a)(Object(i.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},N=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return g(e,t)}))}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(y.Provider,{value:this.state,children:this.props.children})}}]),a}(r.Component),C=y.Consumer,k=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(t){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDelete=function(){var e=Object(O.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,r=t.name,c=t.email,s=t.phone;return Object(n.jsx)(C,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h4",{children:[r," ",Object(n.jsx)("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.onShowClick}),Object(n.jsx)("i",{className:"fas fa-trash",style:{float:"right",cursor:"pointer",color:"red"},onClick:function(){e.onDelete(a,o)}}),Object(n.jsx)(l.b,{to:"/contact/edit/".concat(a),children:Object(n.jsx)("i",{style:{float:"right",marginRight:"1rem",color:"blue",cursor:"pointer"},className:"fas fa-edit"})})]}),e.state.showContactInfo?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item",children:c}),Object(n.jsx)("li",{className:"list-group-item",children:s})]}):null]})}})}}]),a}(r.Component),w=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(C,{children:function(e){var t=e.contacts;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{className:"display-4 mb-2",children:[Object(n.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(n.jsx)(k,{contact:e},e.id)}))]})}})}}]),a}(r.Component),S=function(e){return Object(n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(l.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-home"}),"Home"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(l.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-plus"}),"Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(l.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-question"})," About"]})})]})})})},E=a(19),A=a(8),T=a.n(A),D=a(35),q=a.n(D);function R(e){var t=e.type,a=e.name,r=e.placeholder,c=e.label,s=e.value,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:c}),Object(n.jsx)("input",{type:t,name:a,id:"",className:q()("form-control form-control-lg",{"is-invalid":i}),placeholder:r,value:s,onChange:o,error:i}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})}R.prototype={name:T.a.string.isRequired,type:T.a.string.isRequired,placeholder:T.a.string.isRequired,value:T.a.string.isRequired,onChange:T.a.func.isRequired,error:T.a.string},R.defaultProps={type:"text"};var P=R,_=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",error:{}},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(O.a)(m.a.mark((function t(a,n){var r,c,s,o,i,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state,c=r.name,s=r.email,o=r.phone,n.preventDefault(),""!==c){t.next=4;break}return t.abrupt("return",e.setState({error:{name:"Name is Required"}}));case 4:if(""!==s){t.next=6;break}return t.abrupt("return",e.setState({error:{email:"Email is Required"}}));case 6:if(""!==o){t.next=8;break}return t.abrupt("return",e.setState({error:{phone:"Phone is Required"}}));case 8:return i={name:c,email:s,phone:o},t.next=11,x.a.post("https://jsonplaceholder.typicode.com/users",i);case 11:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/");case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.error;return Object(n.jsx)(C,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:function(t){e.onSubmit(o,t)},children:[Object(n.jsx)(P,{label:"Name",name:"name",placeholder:"Enter your Name...",value:a,onChange:e.handleChange,error:s.name}),Object(n.jsx)(P,{label:"Email",name:"email",placeholder:"Enter your Email...",value:r,onChange:e.handleChange,error:s.email}),Object(n.jsx)(P,{label:"Phone",name:"phone",placeholder:"Enter your Phone...",value:c,onChange:e.handleChange,error:s.phone}),Object(n.jsx)("input",{id:"",className:"btn btn-light btn-block",type:"submit",value:"Add Contact"})]})})]})}})}}]),a}(r.Component),I=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",error:{}},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(O.a)(m.a.mark((function t(a,n){var r,c,s,o,i,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state,c=r.name,s=r.email,o=r.phone,n.preventDefault(),""!==c){t.next=4;break}return t.abrupt("return",e.setState({error:{name:"Name is Required"}}));case 4:if(""!==s){t.next=6;break}return t.abrupt("return",e.setState({error:{email:"Email is Required"}}));case 6:if(""!==o){t.next=8;break}return t.abrupt("return",e.setState({error:{phone:"Phone is Required"}}));case 8:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=12,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 12:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/");case 16:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x()("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.error;return Object(n.jsx)(C,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:function(t){e.onSubmit(o,t)},children:[Object(n.jsx)(P,{label:"Name",name:"name",placeholder:"Enter your Name...",value:a,onChange:e.handleChange,error:s.name}),Object(n.jsx)(P,{label:"Email",name:"email",placeholder:"Enter your Email...",value:r,onChange:e.handleChange,error:s.email}),Object(n.jsx)(P,{label:"Phone",name:"phone",placeholder:"Enter your Phone...",value:c,onChange:e.handleChange,error:s.phone}),Object(n.jsx)("input",{id:"",className:"btn btn-light btn-block",type:"submit",value:"Edit Contact"})]})})]})}})}}]),a}(r.Component);var F=function(e){return console.log(e),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:e.name}),Object(n.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(n.jsx)("p",{className:"text-secondary",children:"Version 1.0.0"})]})};var L=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("h1",{className:"display-4",children:[Object(n.jsx)("span",{className:"text-danger",children:"404 Page Not Found"}),Object(n.jsx)("p",{className:"lead",children:"Sorry , that page doesnot exist"})]})})},J=(a(67),function(){return Object(n.jsx)(N,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(S,{branding:"new brand"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:w}),Object(n.jsx)(u.a,{exact:!0,path:"/contact/add",component:_}),Object(n.jsx)(u.a,{exact:!0,path:"/contact/edit/:id",component:I}),Object(n.jsx)(u.a,{exact:!0,path:"/about",render:function(e){return Object(n.jsx)(F,Object(i.a)(Object(i.a)({},e),{},{name:"about"}))}}),Object(n.jsx)(u.a,{component:L})]})})]})})})});o.a.render(Object(n.jsx)(J,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2f3224cf.chunk.js.map