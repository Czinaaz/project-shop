"use strict";(self.webpackChunkproject_shop=self.webpackChunkproject_shop||[]).push([[853],{4853:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=n(2791),r=n(4420),a=n(4270),i=n(8427),u="Task_wrapper__zvx3s",c="Task_text__IwwM2",o="Task_button__dYLbw",l=n(184),d=function(t){var e=t.id,n=t.text,s=(0,r.I0)();return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("p",{className:c,children:n}),(0,l.jsx)("button",{type:"button",className:o,onClick:function(){return s((0,i._5)(e))},children:"Delete"})]})},x=function(t){return t.tasks.loading},_=function(t){return t.tasks.items},f="TaskList_list__Q1M-x",m=function(){var t=(0,r.v9)(_);return(0,l.jsx)("ul",{className:f,children:t.map((function(t){var e=t.id,n=t.text;return(0,l.jsx)("li",{children:(0,l.jsx)(d,{id:e,text:n})},e)}))})},p="TaskEditor_form__NXWha",h="TaskEditor_input__WXNoz",j="TaskEditor_button__qGfcX",k=function(){var t=(0,r.I0)();return(0,l.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.text.value;if(""!==s)return t((0,i.gI)(s)),void n.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,l.jsx)("input",{name:"text",className:h}),(0,l.jsx)("button",{type:"submit",className:j,children:"Add task"})]})};function v(){var t=(0,r.I0)(),e=(0,r.v9)(x);return(0,s.useEffect)((function(){t((0,i.Jv)())}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.q,{children:(0,l.jsx)("title",{children:"Your tasks"})}),(0,l.jsx)(k,{}),(0,l.jsx)("div",{children:e&&"Request in progress..."}),(0,l.jsx)(m,{})]})}}}]);
//# sourceMappingURL=853.bd0e9900.chunk.js.map