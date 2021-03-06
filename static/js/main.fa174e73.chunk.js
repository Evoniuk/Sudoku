(window.webpackJsonpsudoku=window.webpackJsonpsudoku||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),l=n.n(a),c=n(4),i=n(5),d=n(7),s=n(6),u=n(1),h=n(8);function k(e){var t=Array(9).fill().map((function(t,n){return e.notes.has(n+1)?n+1:0})).map((function(e,t){return o.a.createElement("div",{key:t},e||"")}));return o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",fontSize:"9px",justifyItems:"center",alignItems:"center"}},t)}function m(e){var t=e.colors,n=e.row,r=e.column,a=e.state,l={};!function(e,t,n,r){e.borderLeft="1px solid "+t.borders,e.borderRight=8===r?"3px solid "+t.borders:null,e.borderTop="1px solid "+t.borders,e.borderBottom=8===n?"3px solid "+t.borders:null,n%3===0&&(e.borderTop="3px solid "+t.borders);r%3===0&&(e.borderLeft="3px solid "+t.borders)}(l,t,n,r),function(e,t,n,r,o){var a=3*Math.trunc(n/3)+Math.trunc(r/3),l=-1===o.clickedRow?-1:3*Math.trunc(o.clickedRow/3)+Math.trunc(o.clickedColumn/3);n!==o.clickedRow&&r!==o.clickedColumn&&a!==l||(e.background=t.activeColor);r===o.clickedColumn&&n===o.clickedRow&&(e.background=t.clickedPlace)}(l,t,n,r,a),function(e,t,n,r,o){if(0===o.notes[n][r].size){var a=o.board[n][r],l=0===o.originalBoard[n][r],c=a!==o.solvedBoard[n][r];e.color=c?t.wrongNum:o.clickedNum===a?t.clickedNum:l?t.placedNum:t.numbers}else e.color=t.noteColor}(l,t,n,r,a);var c=a.board[n][r],i=a.notes[n][r];return o.a.createElement("div",{onClick:function(t){return e.handleClick(t,c,n,r)},style:l,className:"place"},i.size?o.a.createElement(k,{notes:i}):c||"")}function b(e){var t=Array(9).fill().map((function(t,n){return o.a.createElement(m,{state:e.state,row:e.row,column:n,colors:e.colors,handleClick:e.handleClick,key:n})}));return o.a.createElement("div",{style:{display:"flex"}},t)}var f=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(d.a)(this,Object(s.a)(t).call(this));for(var r=[],o=0;o<9;o++){for(var a=[],l=0;l<9;l++)a.push(new Set);r.push(a)}return n.state={originalBoard:e.board,board:e.board.map((function(e){return e.map((function(e){return e}))})),solvedBoard:e.solvedBoard,notes:r,clickedNum:0,clickedRow:-1,clickedColumn:-1},n.colors=e.colors,n.shiftPressed=!1,n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(u.a)(n)),n.changePlace=n.changePlace.bind(Object(u.a)(n)),n.makeEntry=n.makeEntry.bind(Object(u.a)(n)),n.handleKeyUp=n.handleKeyUp.bind(Object(u.a)(n)),n.handleBlur=n.handleBlur.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e,t,n,r){this.setState({clickedNum:t,clickedRow:n,clickedColumn:r})}},{key:"handleKeyDown",value:function(e){if(-1!==this.state.clickedRow){var t=e.keyCode,n=this.state.clickedRow,r=this.state.clickedColumn;if(16===t)this.shiftPressed=!0;else if(t>=37&&t<=40)e.preventDefault(),this.changePlace(t,n,r);else{if(this.state.originalBoard[n][r])return;(t>=48&&t<=57||8===t)&&this.makeEntry(t,n,r)}}}},{key:"changePlace",value:function(e,t,n){this.setState((function(r){return 37===e?n--:38===e?t--:39===e?n++:t++,t>8?t=0:t<0&&(t=8),n>8?n=0:n<0&&(n=8),{clickedNum:r.board[t][n],clickedRow:t,clickedColumn:n}}))}},{key:"makeEntry",value:function(e,t,n){var r=this;this.setState((function(o){return r.shiftPressed?(o.board[t][n]=0,e>8&&o.notes[t][n].has(e-48)?o.notes[t][n].delete(e-48):o.notes[t][n].add(e-48)):(o.board[t][n]=e>48?e-48:0,o.notes[t][n].clear()),{board:o.board,notes:o.notes,clickedNum:o.board[t][n]}}))}},{key:"handleKeyUp",value:function(e){16===e.keyCode&&(this.shiftPressed=!1)}},{key:"handleBlur",value:function(){this.setState({clickedNum:0,clickedRow:-1,clickedColumn:-1})}},{key:"render",value:function(){var e=this,t=Array(9).fill().map((function(t,n){return o.a.createElement(b,{state:e.state,row:n,colors:e.colors,handleClick:e.handleClick,key:n})}));return o.a.createElement("main",{onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:"0",onBlur:this.handleBlur,style:{background:this.colors.mainBackground}},o.a.createElement("div",{className:"board"},t))}}]),t}(o.a.Component);n(14);var y=[[8,7,3,4,1,0,9,0,0],[0,6,5,0,2,8,0,7,0],[0,2,0,7,0,3,0,0,0],[5,4,0,0,0,0,2,1,0],[2,0,8,0,0,7,4,9,0],[6,9,0,0,8,0,0,0,0],[4,8,0,0,0,0,5,0,0],[7,0,0,0,3,1,6,0,9],[0,1,0,0,0,9,8,0,7]],p=[[8,7,3,4,1,5,9,6,2],[1,6,5,9,2,8,3,7,4],[9,2,4,7,6,3,1,8,5],[5,4,7,3,9,6,2,1,8],[2,3,8,1,5,7,4,9,6],[6,9,1,2,8,4,7,5,3],[4,8,9,6,7,2,5,3,1],[7,5,2,8,3,1,6,4,9],[3,1,6,5,4,9,8,2,7]];l.a.render(o.a.createElement(f,{board:y,solvedBoard:p,colors:{mainBackground:"rgb(37, 43, 57)",activeColor:"rgba(32, 100, 109, .4)",numbers:"white",placedNum:"lightskyblue",clickedNum:"gold",wrongNum:"salmon",borders:"powderblue",clickedPlace:"rgba(32, 178, 170, .4)",noteColor:"lightgrey"}}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fa174e73.chunk.js.map