(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{15:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),a=r(3),n=r(4),i=r(6),c=r(5),u=r(0),l=r(1),d=r.n(l),j=r(7),h=r.n(j);r(15);function o(e){return Object(u.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();x(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(u.jsx)(o,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=x(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"status",children:e}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(d.a.Component),v=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"game-board",children:Object(u.jsx)(b,{})}),Object(u.jsxs)("div",{className:"game-info",children:[Object(u.jsx)("div",{}),Object(u.jsx)("ol",{})]})]})}}]),r}(d.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],i=a[1],c=a[2];if(e[n]&&e[n]===e[i]&&e[n]===e[c])return e[n]}return null}h.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.184050b7.chunk.js.map