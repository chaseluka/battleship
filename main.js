(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  overflow-x: hidden;\n}\n\n.container,\n.header,\n.main,\n.board,\n#overlay > div,\n.bottom {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard,\n.drag-item,\n.buttons {\n  display: flex;\n}\n\n.header,\n.main,\n.gameboard,\n.board,\n.bottom,\n#overlay > div {\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  height: 100%;\n  background-color: #f1f1f1;\n  gap: 5.5vmax;\n}\n\n.header {\n  background-color: #e5e5e5;\n  height: clamp(40px, 9vh, 80px);\n  border-bottom: 3px solid #222;\n}\n\n.title {\n  font-size: min(4vmax, 60px);\n}\n\n.main {\n  height: max-content;\n  gap: 4vmax;\n}\n\n.gameboard {\n  gap: 8vw;\n}\n\n.board {\n  gap: 1vh;\n}\n\n.board-title {\n  font-size: min(3vmax, 20px);\n}\n\n#opponent,\n#player {\n  width: clamp(200px, 25vmax, 500px);\n  height: clamp(200px, 25vmax, 500px);\n  box-shadow: 2px 2px 2px 2px #aaa;\n  display: inline-grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.bottom {\n  gap: 3vmax;\n}\n\n.ship-item {\n  height: 3.15vmin;\n  width: 3.15vmin;\n}\n\n.drag-item {\n  cursor: grab;\n}\n\n.ships > div:active {\n  cursor: grabbing;\n}\n\n.ships {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  width: fit-content;\n  justify-items: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.vertical {\n  flex-direction: column;\n}\n\n.horizontal {\n  flex-direction: row;\n}\n\n.dragging {\n  opacity: 0.5;\n  cursor: move;\n}\n\n.dropped {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dragging:active {\n  cursor: grab;\n}\n\n#cruiser,\n#submarine {\n  grid-row: 2 / 3;\n}\n\n#carrier {\n  grid-column: span 2;\n}\n\n.button {\n  border-radius: 7px;\n  padding: clamp(4px, 1vh, 10px) clamp(10px, 2.5vw, 50px);\n  text-align: center;\n  font-size: min(3vmax, 20px);\n}\n\n.buttons {\n  gap: 3vw;\n}\n\n#start {\n  background-color: #16a34a;\n}\n\n#rotate {\n  background-color: #999;\n}\n\n.grid-item,\n.ship-item {\n  border: 0.2px solid #666;\n}\n\n.grid-item {\n  background-color: #fff;\n}\n\n.top {\n  border-top: none;\n}\n\n.left {\n  border-left: none;\n}\n\n.bottom {\n  border-bottom: none;\n}\n\n.right {\n  border-right: none;\n}\n\n.ship,\n.ship-item {\n  background-color: #444;\n}\n\n#overlay {\n  display: none;\n}\n\n#overlay > div {\n  width: 100vw;\n  height: max(100%, 100vh);\n  z-index: 1;\n  background-color: rgba(128, 128, 128, 0.324);\n  position: absolute;\n  transform: translate(0, -100%);\n}\n\n.overlay-title {\n  font-size: min(6vmax, 50px);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=e=>{const n=[],t=[],r=[],o=e=>{for(let n=0;n<100;n+=1)e.push(n)};o(t),o(r);const a=[],i=e=>{const n=[e+-11,e+-10,e+-9,e+-1,e+1,e+9,e+10,e+11];return e%10==0&&(n.splice(0,1),n.splice(2,1),n.splice(3,1)),(e-9)%10==0&&(n.splice(2,1),n.splice(3,1),n.splice(5,1)),n},s=(...e)=>{const n=((e,n,t,r,o)=>{const a=[],i=()=>{let n="";return n=2*Math.random()<=1?(()=>{let n=Math.floor(100*Math.random());const t=[];for(let r=0;r<e&&!(n%10==0&&r>0||n>99);r+=1)t.push(n),n+=1;return t})():(()=>{let n=Math.floor(100*Math.random());const t=[];for(let r=0;r<e&&!(n>99);r+=1)t.push(n),n+=10;return t})(),n},s=n=>n.length===e,c=r?(()=>{let e=i();for(;!e.every((e=>t.includes(e)))||!s(e);)e=i();return e})():o;return{hit:()=>a.push("x"),isSunk:()=>a.length===e,name:n,length:e,position:c,hitCount:a}})(e[0],e[1],e[2],e[3],e[4]);a.push(n),n.position.forEach((e=>{r.splice(r.indexOf(e),1)})),n.position.forEach((e=>{(e=>{i(e).forEach((e=>{r.includes(e)&&r.splice(r.indexOf(e),1)}))})(e)}))};return e&&(s(5,"carrier",r,!0),s(4,"battleship",r,!0),s(3,"cruiser",r,!0),s(3,"submarine",r,!0),s(2,"destroyer",r,!0)),{recievedAttack:e=>{let t=!1;return n.push(e),a.forEach((n=>{n.position.includes(e)&&(n.hit(),t=!0)})),t},ships:a,targettedCoords:n,allShipsSunk:()=>a.every((e=>e.isSunk())),board:t,availableCoords:r,createShip:s,getIndexes:i}},n=e=>{let n=!1;const t=[],r=[5,4,3,3,2],o=[];for(let e=0;e<100;e+=1)o.push(e);const a=()=>Math.floor(Math.random()*o.length),i=e=>o.splice(e,1),s=e=>o.indexOf(e),c=()=>{let e=!1;return t.length>1&&(e=t[0]-t[1]>-5&&t[0]-t[1]<5),e},l=()=>{(()=>{const n=[];return t.forEach((t=>{e.getIndexes(t).forEach((e=>n.push(e)))})),n})().forEach((e=>{const n=s(e);-1!==n&&i(n)}))},d=e=>e-10,p=e=>e+10,u=e=>e-1,f=e=>e+1,h=()=>t.length===r[0],g=()=>r.splice(r.indexOf(t.length),1),m=e=>{let r=t[0];t.length>1&&!e&&(r=t[t.length-1]);let i="";return h()?(g(),l(),i=o[a()],n=!1,t.splice(0,t.length)):!o.includes(d(r))||r<10||c()?!o.includes(p(r))||r>89||c()?o.includes(u(r))&&!(e=>e%10==0)(r)?i=u(r):o.includes(f(r))&&!(e=>(e-9)%10==0)(r)?i=f(r):""===i&&r!==t[0]&&!1===e?i=m(!0):(h()||""===i)&&(g(),l(),i=o[a()],n=!1,t.splice(0,t.length)):i=p(r):i=d(r),i},v=(r,o)=>(e.recievedAttack(r)&&(n=!0,t.push(r)),i(o),r);return{attackOpponent:v,openSqrs:o,randomAttack:a,oppBoard:e,updateOpenSqrs:i,cpuAttack:()=>{const e=n?s(m(!1)):a(),t=o[e];return v(t,e),t},playerAttack:e=>v(e,s(e)),opponentIsDefeated:()=>e.allShipsSunk()}},r=(e,n,t,r,o)=>{const a=[];let i=!0,s=0,c=!1,l="";const d=[],p=[],u=n=>{(n=>e.ships.every((e=>!e.position.includes(n))))(n)?a[n].style.backgroundColor="#999":a[n].style.backgroundColor="#ff0000"},f=()=>{i=!i},h=e=>{document.getElementById("overlay").style.display="block",document.querySelector(".overlay-title").textContent=`${e} won`},g=e=>{if(i){const o=parseInt((e=>e.target.getAttribute("data-index"))(e),10);t.playerAttack(o),f(),u(o),e.target.removeEventListener("click",g),t.opponentIsDefeated()?h("You"):setTimeout((()=>{const e=n.cpuAttack();r.markChosenCoordOnBoard(e),n.opponentIsDefeated()?h("CPU"):f()}),1e3)}else e.preventDefault()};document.getElementById("rotate").addEventListener("click",(()=>{c=!c,document.querySelectorAll(".drag-item").forEach((e=>{c?(document.querySelector(".ships").style.gridTemplate="repeat(2, 1fr) / repeat(3, 1fr)",e.classList.add("vertical"),e.classList.remove("horizontal")):(document.querySelector(".ships").style.gridTemplate="repeat(3, 1fr) / repeat(2, 1fr)",e.classList.add("horizontal"),e.classList.remove("vertical"))}))}));const m=n=>!e.availableCoords.includes(n),v=e=>(e=>e>99)(e)||m(e),b=(e,n)=>{c?((e,n)=>{const t=n?"#999":"#444";d.splice(0,d.length);for(let n=0;n<s;n+=1){const r=e+10*n;if(m(r))break;d.push(r),a[r].style.backgroundColor=t}})(e,n):((e,n)=>{const t=n?"#999":"#444";d.splice(0,d.length);for(let n=0;n<s;n+=1){const r=e+n;if(r%10==0&&n>0||v(r))break;d.push(r),a[r].style.backgroundColor=t}})(e,n)},y=e=>{c?(e=>{for(let n=0;n<s;n+=1){const t=e+10*n;if(m(t))break;a[t].style.backgroundColor="#fff"}})(e):(e=>{for(let n=0;n<s;n+=1){const t=e+n;if(t%10==0&&n>0||v(t))break;a[t].style.backgroundColor="#fff"}})(e)},x=(n,t)=>{n.addEventListener("dragenter",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",setTimeout((()=>{b(t,!0)}),.01)})),n.addEventListener("dragover",(e=>{e.preventDefault()})),n.addEventListener("dragleave",(()=>{y(t)})),n.addEventListener("drop",(()=>{y(t),s===d.length&&(b(t,!1),l.classList.add("dropped"),l.setAttribute("draggable","false"),(n=>{const t=[];n.forEach((e=>t.push(e))),e.createShip(s,l.id,e.availableCoords,!1,t)})(d),p.push("1"))}))};return{generateGrid:e=>{const n=document.getElementById(`${e}`);for(let e=0;e<100;e+=1){const t=document.createElement("div");t.classList.add("grid-item"),n.appendChild(t),[0,1,2,3,4,5,6,7,8,9].includes(e)&&t.classList.add("top"),[0,10,20,30,40,50,60,70,80,90].includes(e)&&t.classList.add("left"),[9,19,29,39,49,59,69,79,89,99].includes(e)&&t.classList.add("right"),[90,91,92,93,94,95,96,97,98,99].includes(e)&&t.classList.add("bottom"),t.setAttribute("data-index",`${e}`),a.push(t),o&&x(t,e)}},markChosenCoordOnBoard:u,createDragShips:()=>{document.querySelectorAll(".drag-item").forEach((e=>{e.addEventListener("dragstart",(e=>{(e=>{e.target.classList.add("dragging"),s=e.target.children.length,l=e.target})(e)})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))}))},startGame:()=>{document.getElementById("start").addEventListener("click",(e=>{5===r.shipsPlaced.length?a.forEach((e=>e.addEventListener("click",g))):e.preventDefault()}))},shipsPlaced:p}};var o=t(379),a=t.n(o),i=t(795),s=t.n(i),c=t(569),l=t.n(c),d=t(565),p=t.n(d),u=t(216),f=t.n(u),h=t(589),g=t.n(h),m=t(426),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,(()=>{const t=e(!1),o=e(!0),a=n(o),i=n(t),s=r(t,a,i,!1,!0);s.generateGrid("player"),s.createDragShips();const c=r(o,i,a,s,!1);c.generateGrid("opponent"),c.startGame()})()})()})();