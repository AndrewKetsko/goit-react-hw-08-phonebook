"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{7137:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,i,s,d,c,u,o,l,m=t(2791),p=t(168),f=t(225),x=f.Z.form(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\n// width: 350px;\n// margin-left: 20px;\n"]))),h=(f.Z.label(a||(a=(0,p.Z)(["\n\n"]))),f.Z.button(i||(i=(0,p.Z)(["\nbackground: grey;\nborder: none;\nborder-radius:5px;\n// margin-left: 20px;\nmargin-top: 20px;\nwidth: 100%;\npadding: 5px;\n"]))),t(9434)),g=t(8604),b=t(1401),Z=t(6151),v=t(184),j=function(){var n=(0,h.I0)(),e=(0,h.v9)((function(n){return n.contacts.items}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(x,{action:"",onSubmit:function(t){t.preventDefault();var r={name:t.target.name.value,number:t.target.number.value};return e.find((function(n){return n.name===r.name&&n.number===r.number}))?(alert("You have this contact already"),t.currentTarget.reset()):e.find((function(n){return n.name===r.name}))?(r.id=e.find((function(n){return n.name===r.name})).id,n((0,g.Tk)(r)),alert("You just changed this contact"),t.currentTarget.reset()):(n((0,g.uK)(r)),void t.currentTarget.reset())},children:[(0,v.jsx)(b.Z,{id:"standard-basic-1",name:"name",label:"Name",variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})," ",(0,v.jsx)(b.Z,{id:"standard-basic-2",name:"number",label:"Phone number",variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,v.jsx)(Z.Z,{type:"submit",children:"Add/update contact"})]})})},y=t(807),k=function(){var n=(0,h.v9)((function(n){return n.filter.filter})),e=(0,h.I0)();return(0,v.jsx)(b.Z,{id:"standard-basic-1",name:"filter",label:"Find contacts by name",variant:"standard",onInput:function(n){return e((0,y.xO)(n.target.value.toLowerCase()))},value:n})},w=f.Z.button(s||(s=(0,p.Z)(["\nbackground: grey;\nborder: none;\nborder-radius:50%;\nmargin-right: 10px;\nwidth:20px;\nheight:20px;\ncursor:pointer;\n"]))),C=f.Z.div(d||(d=(0,p.Z)(["\n// list-style:none;\nmargin-bottom:10px;\n"]))),A=f.Z.span(c||(c=(0,p.Z)(["\npadding:0;\nmargin:0;\n"]))),I=f.Z.span(u||(u=(0,p.Z)(["\npadding:0;\nmargin:0;\n"])));function z(n){var e=n.contact,t=(0,h.I0)();return(0,v.jsxs)(C,{children:[(0,v.jsx)(w,{type:"button",onClick:function(){return t((0,g.GK)(e.id))},children:"X"}),(0,v.jsxs)(A,{children:[e.name,":"]}),(0,v.jsxs)(I,{children:[" ",e.number]})]})}var F,L,T=f.Z.li(o||(o=(0,p.Z)(["\nlist-style: none;\n"]))),_=f.Z.ul(l||(l=(0,p.Z)(["\n\n"])));function K(){var n=(0,h.v9)((function(n){return n.contacts.items})),e=(0,h.v9)((function(n){return n.contacts.isLoading})),t=(0,h.v9)((function(n){return n.filter.filter})),r=(0,h.I0)();return(0,m.useEffect)((function(){r((0,g.K2)())}),[r]),(0,v.jsxs)(v.Fragment,{children:[e&&(0,v.jsx)("p",{children:"Is Loading"}),(0,v.jsx)(_,{children:n.filter((function(n){return n.name.toLowerCase().includes(t)})).map((function(n){return(0,v.jsx)(T,{children:(0,v.jsx)(z,{contact:n})},n.id)}))})]})}var q=f.Z.h2(F||(F=(0,p.Z)(["\n// margin-left: 20px;\n"]))),N=f.Z.div(L||(L=(0,p.Z)(["\n  outline: 1px solid black;\n  width: 300px;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n//   align-items: center;\n  padding: 20px;\n  margin: 50px auto;\n"]))),P=function(){return(0,v.jsxs)(N,{children:[(0,v.jsx)(j,{}),(0,v.jsx)(q,{children:"Contacts"}),(0,v.jsx)(k,{}),(0,v.jsx)(K,{})]})},Y=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(P,{})})}}}]);
//# sourceMappingURL=137.749fc91e.chunk.js.map