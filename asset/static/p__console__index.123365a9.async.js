"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3805],{54964:function(h,u,n){var l=n(78267),P=n.n(l),E=n(75458),v=n.n(E),o=n(67294),i=n(12320),D=n.n(i),M=n(89629),_=n(85893),c={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},t=new i.Terminal(c),s=new E.SearchAddon,d=new l.FitAddon,O=(0,o.forwardRef)(function(r,f){return(0,o.useEffect)(function(){window.addEventListener("resize",function(){r.showInModal||d.fit()}),t.loadAddon(d),t.loadAddon(s),t.open(document.getElementById("terminal-container")),d.fit()},[]),(0,o.useImperativeHandle)(f,function(){return{write:function(a){t.write(a)},clear:function(){t.clear()},getTerminal:function(){return t},findNext:function(a){s.findNext(a)},findPrev:function(a){s.findPrevious(a)},fit:function(){d.fit()},onData:function(a){t.onData(a)}}}),(0,_.jsx)("div",{id:"terminal-container",style:{width:r.width?r.width:"100%",height:r.height?r.height:"500px"}})});u.Z=O},33345:function(h,u,n){n.r(u),n.d(u,{default:function(){return M}});var l=n(5574),P=n.n(l),E=n(54964),v=n(52626),o=n(54006),i=n(67294),D=n(85893);function M(){var _=(0,i.useRef)(),c=(0,o.useParams)(),t=(0,o.useSearchParams)(),s=P()(t,2),d=s[0],O=s[1],r=new WebSocket((0,v.R)("/console/"+c.id+"?"+d.toString()));return(0,i.useEffect)(function(){r.addEventListener("message",function(f){var e=JSON.parse(f.data),a=e.type;if(a=="console:"+c.id){var m;(m=_.current)===null||m===void 0||m.write(e.data)}}),_!=null&&_.current&&_.current.onData(function(f){var e={content:{command:f},type:"console"};r.send(JSON.stringify(e))})},[]),(0,D.jsx)(E.Z,{ref:_,height:"100vh"})}}}]);