"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[337],{80821:function(A,d,e){e.d(d,{Z:function(){return g}});var O=e(5574),c=e.n(O),_=e(93246),l=e(54006),E=e(31418),i=e(86738),P=e(14726),f=e(83062),R=e(67294),m=e(85893);function g(n){var B=(0,R.useState)(!1),s=c()(B,2),v=s[0],r=s[1],t=E.Z.useApp(),a=(0,l.useIntl)(),M=function(){r(!0),n.action().then(function(o){if(r(!1),typeof n.onSuccess=="function"&&n.onSuccess(o),n.messageSuccess){var u="";typeof n.messageSuccess=="function"?u=n.messageSuccess(o):u=n.messageSuccess,u.indexOf(".")>-1&&(u=a.formatMessage({id:u})),n.asynced?(0,_.Rk)(t,u):(0,_.$h)(t,u)}}).catch(function(o){r(!1),typeof n.onError=="function"&&n.onError(o)})};return n.confirm?(0,m.jsx)(i.Z,{style:{width:500},title:"\u63D0\u793A",description:n.confirm,onConfirm:M,okText:"Yes",cancelText:"No",children:(0,m.jsx)(P.ZP,{disabled:n.disabled,icon:n.icon,loading:v,danger:n.danger,type:n.type,children:n.children})}):(0,m.jsx)(f.Z,{title:n.tips,children:(0,m.jsx)(P.ZP,{disabled:n.disabled,icon:n.icon,loading:v,onClick:M,danger:n.danger,type:n.type,children:n.children})})}},87038:function(A,d,e){e.r(d),e.d(d,{default:function(){return B}});var O=e(15009),c=e.n(O),_=e(99289),l=e.n(_),E=e(6110),i=e(88717),P=e(67294),f=e(34185),R=e(80821),m=e(67255),g=e(85893),n=[{title:"\u7C7B\u578B",ellipsis:!0,dataIndex:"type",search:!1,width:200},{title:"\u6807\u9898",ellipsis:!0,dataIndex:"title",width:200},{title:"\u8BE6\u60C5",search:!1,dataIndex:"message"},{title:"\u65F6\u95F4",ellipsis:!0,search:!1,dataIndex:"createdAt",width:200,render:function(v,r,t,a,M){return new Date(r.createdAt).toLocaleString()}}];function B(){var s=(0,P.useRef)();return(0,g.jsx)(E._z,{children:(0,g.jsx)(i.Z,{scroll:{x:"max-content"},columns:n,rowKey:"id",request:function(){var v=l()(c()().mark(function r(t,a,M){var h,o,u;return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,f.vo)({page:(h=t.current)!==null&&h!==void 0?h:1,pageSize:(o=t.pageSize)!==null&&o!==void 0?o:10,type:t.type});case 2:return u=D.sent,D.abrupt("return",{data:u.data.list,success:!0,total:u.data.total});case 4:case"end":return D.stop()}},r)}));return function(r,t,a){return v.apply(this,arguments)}}(),pagination:(0,m.O)(),actionRef:s,toolBarRender:function(){return[(0,g.jsx)(R.Z,{action:function(){return(0,f.bJ)({action:"clear"})},onSuccess:function(){var t,a;return!((t=s.current)===null||t===void 0)&&t.reloadAndRest&&((a=s.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var t,a;return!((t=s.current)===null||t===void 0)&&t.reset&&((a=s.current)===null||a===void 0||a.reset()),!0},messageSuccess:"\u6240\u6709\u901A\u77E5\u6807\u8BB0\u5DF2\u8BFB",confirm:"\u662F\u5426\u8981\u6807\u8BB0\u6240\u6709\u901A\u77E5\u5DF2\u8BFB",danger:!0,type:"primary",children:"\u6E05\u9664\u4E8B\u4EF6\u901A\u77E5"})]}})})}},67255:function(A,d,e){e.d(d,{O:function(){return O},j:function(){return c}});function O(){var _,l=parseInt((_=localStorage.getItem("dpanel-pagesize"))!==null&&_!==void 0?_:"0");return{showSizeChanger:!0,defaultPageSize:l!=null?l:20}}function c(_){var l="dpanel-table-column-".concat(_),E={};if(localStorage.getItem(l)){var i;E=JSON.parse((i=localStorage.getItem(l))!==null&&i!==void 0?i:"{}")}return{defaultValue:E,onChange:function(f){localStorage.setItem("dpanel-table-column-".concat(_),JSON.stringify(f))}}}}}]);