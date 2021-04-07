(this["webpackJsonpd3-react-playground"]=this["webpackJsonpd3-react-playground"]||[]).push([[0],{29:function(t,e,n){},34:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);n(29);var i=n(0),c=n.n(i),a=n(24),s=n.n(a),r=n(5),u=(n(34),n(21)),l=n(1),o=c.a.createContext(null),h=function(t){var e=Object(i.useRef)(null),n=Object(i.useState)({}),c=Object(r.a)(n,2),a=c[0],s=c[1],u=Object(i.useState)(null),h=Object(r.a)(u,2),d=h[0],f=h[1];Object(i.useEffect)((function(){s(e.current.getBoundingClientRect())}),[]),Object(i.useEffect)((function(){return window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}}),[]);var j=function(){clearTimeout(d),f(setTimeout((function(){s(e.current.getBoundingClientRect())}),t.debounce))};return Object(l.jsx)("div",{ref:e,style:{height:"100%"},children:Object(l.jsx)(o.Provider,{value:a,children:t.children})})};h.defaultProps={debounce:100};var d,f=n(4),j=n(44),b=n(46),m=function t(e,n,i){var c=this;Object(f.a)(this,t),this.createAxes=function(t,e,n){c.scaleAxes(e,n),c.xAxisBottomG=t.append("g").attr("transform","translate(0, ".concat(n.innerHeight,")")).call(c.xAxisBottom),c.yAxisLeftG=t.append("g").call(c.yAxisLeft)},this.scaleAxes=function(t,e){c.xAxisBottom=Object(b.a)().scale(t.xScale).tickSize(-e.innerHeight),c.yAxisLeft=Object(b.b)().scale(t.yScale).tickSize(-e.innerWidth)},this.updateAxes=function(t,e){c.scaleAxes(t,e),c.xAxisBottomG.attr("transform","translate(0, ".concat(e.innerHeight,")")).call(c.xAxisBottom),c.yAxisLeftG.call(c.yAxisLeft)},this.createAxes(e,n,i)},g=function t(e){var n=this;Object(f.a)(this,t),this.setMargin=function(){n.margin={top:20,left:30,bottom:20,right:30}},this.setDims=function(t){var e=t.width,i=t.height;n.width=e,n.height=i,n.setInnerDims()},this.setInnerDims=function(){n.innerHeight=n.height-(n.margin.top+n.margin.bottom),n.innerWidth=n.width-(n.margin.left+n.margin.right)},this.setMargin(),this.setDims(e),this.setInnerDims()},x=n(45),O=function t(e,n){var i=this;Object(f.a)(this,t),this.setScales=function(t,e){i.xScale=Object(x.a)().domain([0,9]).range([0,e.innerWidth]),i.yScale=Object(x.a)().domain([0,10]).range([e.innerHeight,0])},this.setScales(e,n)},p=(n(37),function t(e,n,i){var c=this;Object(f.a)(this,t),this.updateData=function(t){c.data=t,c.allCircles=c.chart.selectAll(".myCircle").data(c.data),c.allCircles.transition().duration(500).attr("cx",(function(t,e){return c.scales.xScale(e)})).attr("cy",(function(t){return c.scales.yScale(t)})).attr("fill","orange"),c.enter()},this.enter=function(){c.allCircles.enter().append("circle").attr("class","myCircle").attr("cx",(function(t,e){return c.scales.xScale(e)})).attr("cy",(function(t){return c.scales.yScale(t)})).attr("r",10).attr("fill","green"),c.exit()},this.exit=function(){c.allCircles.exit().remove()},this.updateScales=function(t){c.scales=t,c.allCircles=c.chart.selectAll(".myCircle").transition().duration(500).attr("cx",(function(t,e){return c.scales.xScale(e)})).attr("cy",(function(t){return c.scales.yScale(t)}))},this.chart=e,this.scales=i,this.updateData(n)}),v=function t(e){var n=this;Object(f.a)(this,t),this.init=function(t,e){n.data=t,n.dims=new g(e),n.chart=n.svg.append("g"),n.chart.attr("transform","translate(".concat(n.dims.margin.left,", ").concat(n.dims.margin.top,")")),n.scales=new O(n.data,n.dims),n.axes=new m(n.chart,n.scales,n.dims),n.circles=new p(n.chart,n.data,n.scales)},this.updateData=function(t){n.circles.updateData(t)},this.updateDims=function(t){n.dims.setDims(t),n.scales.setScales(n.data,n.dims),n.axes.updateAxes(n.scales,n.dims),n.circles.updateScales(n.scales)},this.svg=Object(j.a)(e).append("svg"),this.svg.attr("width","100%").attr("height","100%")},y={display:"grid",height:"100%"},S=(d=function(t){var e=t.dims,n=t.data,c=Object(i.useRef)(null),a=Object(i.useState)(null),s=Object(r.a)(a,2),u=s[0],o=s[1],h=Object(i.useState)(!1),d=Object(r.a)(h,2),f=d[0],j=d[1];return Object(i.useEffect)((function(){o((function(){return new v(c.current)}))}),[]),Object(i.useEffect)((function(){f&&u.updateDims(e)}),[e]),Object(i.useEffect)((function(){f&&u.updateData(n)}),[n]),Object(i.useEffect)((function(){n.length>1&&e.width&&!1===f&&(u.init(n,e),j((function(){return!0})))}),[n,e]),Object(l.jsx)("div",{ref:c,style:y})},function(t){return Object(l.jsx)(o.Consumer,{children:function(e){return Object(l.jsx)(d,Object(u.a)(Object(u.a)({},t),{},{dims:e}))}})});var A=function(){var t=Object(i.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],a=function(){for(var t=[],e=0;e<10;e++)t.push(Math.round(10*Math.random()));c(t)};return Object(i.useEffect)((function(){return a()}),[]),Object(l.jsx)("div",{className:"myLayout",children:Object(l.jsxs)("div",{className:"coolThing",children:[Object(l.jsx)("button",{onClick:a,children:"update data"}),Object(l.jsx)(h,{children:Object(l.jsx)(S,{data:n})})]})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.281da4ec.chunk.js.map