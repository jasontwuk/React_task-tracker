(this["webpackJsonpreact_task-tracker"]=this["webpackJsonpreact_task-tracker"]||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(11),s=n.n(r),i=n(60),o=n(61),l=n(7),u=n(1),j=function(e){var t=e.text,n=e.onClick;return Object(u.jsx)("button",{className:"btn",onClick:n,children:t})};j.defaultProps={text:"Button"};var d=j,b=function(e){var t=e.onAdd;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:"Task Tracker"}),Object(u.jsx)(d,{text:"Add",onClick:t})]})},O=n(18),m=function(e){var t=e.task,n=e.deleteTask;return Object(u.jsxs)("div",{className:"task "+t.color,children:[Object(u.jsxs)("h3",{children:[t.name,Object(u.jsx)(O.a,{onClick:function(){return n(t.id)}})]}),Object(u.jsx)("span",{children:t.time})]})},h=function(e){var t=e.tasks,n=e.deleteTask;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(m,{task:e,deleteTask:n},e.id)}))})},p=(n(67),n(57)),x=n.n(p),k=(n(68),function(e){var t=e.onAdd,n=e.saveTask,a=Object(c.useState)(""),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(new Date),j=Object(l.a)(o,2),d=j[0],b=j[1],m=Object(c.useState)("blue"),h=Object(l.a)(m,2),p=h[0],k=h[1],f=Object(c.useState)(!1),v=Object(l.a)(f,2),g=v[0],y=v[1];Object(c.useEffect)((function(){document.getElementById("input-task").focus()}),[]);return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)(O.a,{onClick:t}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),s){var t=document.getElementById("date-picker").value;n({name:s,time:t,color:p}),i(""),k("blue"),y(!0)}else alert("Please add a task.")},children:[Object(u.jsxs)("div",{className:"form-input",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:s,onChange:function(e){return i(e.target.value)},id:"input-task"})]}),Object(u.jsxs)("div",{className:"form-input",children:[Object(u.jsx)("label",{children:"Time"}),Object(u.jsx)(x.a,{selected:d,onChange:function(e){return b(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"d MMM yyyy h:mm aa",id:"date-picker"})]}),Object(u.jsxs)("div",{className:"form-input",children:[Object(u.jsx)("label",{children:"Colour"}),Object(u.jsxs)("div",{className:"radio-container",children:[Object(u.jsx)("input",{type:"radio",value:"blue",name:"colour",checked:"blue"===p,onChange:function(){return k("blue")}}),Object(u.jsx)("span",{className:"radio-blue",children:"Blue"}),Object(u.jsx)("input",{type:"radio",value:"pink",name:"colour",checked:"pink"===p,onChange:function(){return k("pink")}}),Object(u.jsx)("span",{className:"radio-pink",children:"Pink"}),Object(u.jsx)("input",{type:"radio",value:"yellow",name:"colour",checked:"yellow"===p,onChange:function(){return k("yellow")}}),Object(u.jsx)("span",{className:"radio-yellow",children:"Yellow"}),Object(u.jsx)("input",{type:"radio",value:"green",name:"colour",checked:"green"===p,onChange:function(){return k("green")}}),Object(u.jsx)("span",{className:"radio-green",children:"Green"}),Object(u.jsx)("input",{type:"radio",value:"purple",name:"colour",checked:"purple"===p,onChange:function(){return k("purple")}}),Object(u.jsx)("span",{className:"radio-purple",children:"Purple"})]})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task"}),g&&Object(u.jsxs)("p",{children:[Object(u.jsx)("em",{children:"Task added."}),Object(u.jsx)("br",{}),"Please add another one or close this window to go back to your task list."]})]})]})});var f=function(e,t){var n=Object(c.useState)((function(){return function(e,t){return JSON.parse(localStorage.getItem(e))||(t instanceof Function?t():t)}(e,t)})),a=Object(l.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r]),[r,s]};var v=function(){var e=f("saveTasks",[]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],d=s[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{onAdd:function(){return d(!j)}}),j&&Object(u.jsx)(k,{onAdd:function(){return d(!j)},saveTask:function(e){var t=Math.floor(1e4*Math.random())+1,c=[Object(o.a)({id:t},e)].concat(Object(i.a)(n));a(c)}}),n.length>0?Object(u.jsx)(h,{tasks:n,deleteTask:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}}):Object(u.jsxs)("p",{children:[Object(u.jsx)("em",{children:"Well done."}),Object(u.jsx)("br",{}),"There are no more tasks to be completed."]})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))},67:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.d674f427.chunk.js.map