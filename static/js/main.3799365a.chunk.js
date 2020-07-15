(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Layout_container__31lfc",light:"Layout_light__N7fIP",dark:"Layout_dark__37brw"}},16:function(e,t,n){e.exports={section:"Section_section__2sjDd",title:"Section_title__1Jtjo"}},17:function(e,t,n){e.exports={input:"Filter_input__2PqZN"}},27:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(4),o=n.n(i),l=n(2),s=n(1),m=n(6),u=n(24),h=n(3),_=n(21),d={addContact:Object(s.b)("contacts/add",(function(e,t){return{payload:{contact:{id:Object(_.uuid)(),name:e,number:t}}}})),deleteContact:Object(s.b)("contacts/delete"),filterContacts:Object(s.b)("contacts/filter")},b={items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},f=Object(s.c)(b.items,(a={},Object(m.a)(a,d.addContact,(function(e,t){return[t.payload.contact].concat(Object(u.a)(e))})),Object(m.a)(a,d.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),p=Object(s.c)(b.filter,Object(m.a)({},d.filterContacts,(function(e,t){return t.payload}))),g=Object(h.c)({items:f,filter:p}),C=Object(s.b)("theme/toggle"),w=Object(s.c)({isChecked:!1},Object(m.a)({},C,(function(e,t){return{isChecked:t.payload}}))),v=Object(s.a)({reducer:{contacts:g,themeToggler:w}}),E=n(18),k=n(11),O=n.n(k);var j=Object(l.b)((function(e){return{isChecked:e.themeToggler.isChecked}}))((function(e){var t=e.children,n=e.isChecked;return r.a.createElement("div",{className:"".concat(O.a.container," ").concat(n?O.a.dark:O.a.light)},t)})),N=n(16),y=n.n(N);var x=function(e){var t=e.title,n=e.children;return r.a.createElement("section",{className:y.a.section},t&&r.a.createElement("h2",{className:y.a.title},t),n)},T=n(22),S=n(23),L=n(26),F=n(25),D=n(8),P=n.n(D),z=function(e){Object(L.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:P.a.form},r.a.createElement("label",{className:P.a.label},"Name",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:P.a.input})),r.a.createElement("label",{className:P.a.label},"Phone",r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange,className:P.a.input})),r.a.createElement("button",{type:"submit",className:P.a.button},"Add contact"))}}]),n}(c.Component),A=n(17),B=n.n(A);var Y={onChangeFilter:d.filterContacts},I=Object(l.b)((function(e){return{filter:e.contacts.filter}}),Y)((function(e){var t=e.filter,n=e.onChangeFilter;return r.a.createElement("label",{className:B.a.label},"Find contact by name",r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:B.a.input}))})),J=n(9),M=n.n(J);var G={onClickDelete:d.deleteContact},K=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter.toLowerCase();return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a)})),isChecked:e.themeToggler.isChecked}}),G)((function(e){var t=e.contacts,n=e.onClickDelete,a=e.isChecked;return r.a.createElement("ul",{className:"".concat(M.a.list," ").concat(a?M.a.list__dark:M.a.list__light)},t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t,className:M.a.item},r.a.createElement("span",{className:M.a.name},a,": "),r.a.createElement("span",null,c),r.a.createElement("button",{type:"button",onClick:function(){return n(t)}},"Delete"))})))})),Z=n(7),q=n.n(Z),H={onThemeToggle:C},Q=Object(l.b)((function(e){return{isChecked:e.themeToggler.isChecked}}),H)((function(e){var t=e.isChecked,n=e.onThemeToggle;return r.a.createElement("div",{className:q.a.themeSwitch},r.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"sun",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:q.a.themeSwitch__icon},r.a.createElement("path",{fill:"currentColor",d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})),r.a.createElement("div",{className:q.a.switch},r.a.createElement("input",{className:q.a.switch__input,type:"checkbox",name:"theme",id:"theme-switch-control",checked:t,onChange:function(){return n(!t)}}),r.a.createElement("label",{"aria-hidden":"true",className:q.a.switch__label,htmlFor:"theme-switch-control"},"On"),r.a.createElement("div",{"aria-hidden":"true",className:q.a.switch__marker})),r.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"moon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:q.a.themeSwitch__icon},r.a.createElement("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"})))})),R=(n(37),{onAddContact:d.addContact}),U=Object(l.b)((function(e){return{contacts:e.contacts.items}}),R)((function(e){var t=e.contacts,n=e.onAddContact,a=function(e){Object(E.b)(e)};return r.a.createElement(j,null,r.a.createElement(Q,null),r.a.createElement(x,{title:"Phonebook"},r.a.createElement(z,{onSubmit:function(e){var c=e.name,r=e.number;""!==c?""!==r?t.some((function(e){return e.name===c}))?a("".concat(c," is already in contacts")):n(c,r):a("\ud83e\udd84 Please enter contact phone number"):a("\ud83e\udd84 Please enter contact name")}})),t.length>0&&r.a.createElement(x,{title:"Contacts"},t.length>1&&r.a.createElement(I,null),r.a.createElement(K,null)),r.a.createElement(E.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1}))}));n(38);o.a.render(r.a.createElement(l.a,{store:v},r.a.createElement(U,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={themeSwitch:"ThemeToggler_themeSwitch__1abd0",themeSwitch__icon:"ThemeToggler_themeSwitch__icon__1i8Qb",switch:"ThemeToggler_switch__2xx8z",switch__input:"ThemeToggler_switch__input__y28Z1",switch__label:"ThemeToggler_switch__label__1Ymz0",switch__marker:"ThemeToggler_switch__marker__Yivee"}},8:function(e,t,n){e.exports={form:"ContactForm_form__2KGxB",label:"ContactForm_label__1n7NM",input:"ContactForm_input__I9UYb",button:"ContactForm_button__2iOsy"}},9:function(e,t,n){e.exports={list:"ContactList_list__1s17b",list__light:"ContactList_list__light__2Yukn",list__dark:"ContactList_list__dark__1De4k",item:"ContactList_item__3sGjN",name:"ContactList_name__2kDXO"}}},[[27,1,2]]]);
//# sourceMappingURL=main.3799365a.chunk.js.map