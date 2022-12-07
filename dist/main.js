(()=>{"use strict";const e=(e,t,r,n,s)=>{const a=[],o=()=>{let t="";return t=2*Math.random()<=1?(()=>{let t=Math.floor(100*Math.random());const r=[];for(let n=0;n<e&&!(t%10==0&&n>0||t>99);n+=1)r.push(t),t+=1;return r})():(()=>{let t=Math.floor(100*Math.random());const r=[];for(let n=0;n<e&&!(t>99);n+=1)r.push(t),t+=10;return r})(),t},l=t=>t.length===e,c=n?(()=>{let e=o();for(;!e.every((e=>r.includes(e)))||!l(e);)e=o();return e})():s;return{hit:()=>a.push("x"),isSunk:()=>a.length===e,name:t,length:e,position:c,hitCount:a}},t=t=>{const r=[],n=[],s=[],a=e=>{for(let t=0;t<100;t+=1)e.push(t)};a(n),a(s);const o=[],l=e=>{const t=[e+-11,e+-10,e+-9,e+-1,e+1,e+9,e+10,e+11];return e%10==0&&(t.splice(0,1),t.splice(2,1),t.splice(3,1)),(e-9)%10==0&&(t.splice(2,1),t.splice(3,1),t.splice(5,1)),t},c=e=>{e.position.forEach((e=>{(e=>{l(e).forEach((e=>{s.includes(e)&&s.splice(s.indexOf(e),1)}))})(e)}))},d=e=>{e.position.forEach((e=>{s.splice(s.indexOf(e),1)}))},i=function(){const t=e(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4]);o.push(t),d(t),c(t)};return t&&(i(5,"carrier",s,!0),i(4,"battleship",s,!0),i(3,"cruiser",s,!0),i(3,"submarine",s,!0),i(2,"destroyer",s,!0)),{recievedAttack:e=>{let t=!1;return r.push(e),o.forEach((r=>{r.position.includes(e)&&(r.hit(),t=!0)})),t},ships:o,targettedCoords:r,allShipsSunk:()=>o.every((e=>e.isSunk())),board:n,availableCoords:s,createShip:i,getIndexes:l}},r=e=>{let t=!1;const r=[],n=[5,4,3,3,2],s=[];for(let e=0;e<100;e+=1)s.push(e);const a=()=>Math.floor(Math.random()*s.length),o=e=>s.splice(e,1),l=e=>s.indexOf(e),c=()=>{let e=!1;return r.length>1&&(e=r[0]-r[1]>-5&&r[0]-r[1]<5),e},d=()=>{(()=>{const t=[];return r.forEach((r=>{e.getIndexes(r).forEach((e=>t.push(e)))})),t})().forEach((e=>{const t=l(e);-1!==t&&o(t)}))},i=e=>e-10,u=e=>e+10,p=e=>e-1,h=e=>e+1,g=()=>r.length===n[0],f=()=>n.splice(n.indexOf(r.length),1),v=e=>{let n=r[0];r.length>1&&!e&&(n=r[r.length-1]);let o="";return g()?(f(),d(),o=s[a()],t=!1,r.splice(0,r.length)):!s.includes(i(n))||n<10||c()?!s.includes(u(n))||n>89||c()?s.includes(p(n))&&!(e=>e%10==0)(n)?o=p(n):s.includes(h(n))&&!(e=>(e-9)%10==0)(n)?o=h(n):""===o&&n!==r[0]&&!1===e?o=v(!0):(g()||""===o)&&(f(),d(),o=s[a()],t=!1,r.splice(0,r.length)):o=u(n):o=i(n),o},m=(n,s)=>(e.recievedAttack(n)&&(t=!0,r.push(n)),o(s),n);return{attackOpponent:m,availableSquares:s,randomAttack:a,oppBoard:e,updateAvailableSquares:o,cpuAttack:()=>{const e=t?l(v(!1)):a(),r=s[e];return m(r,e),r},playerAttack:e=>m(e,l(e)),opponentIsDefeated:()=>e.allShipsSunk()}},n=(e,t,r,n,s)=>{const a=[];let o=!0,l=0,c=!1,d="";const i=[],u=[],p=t=>{(t=>e.ships.every((e=>!e.position.includes(t))))(t)?a[t].style.backgroundColor="#999":a[t].style.backgroundColor="#ff0000"},h=()=>{o=!o},g=e=>{document.getElementById("overlay").style.display="block",document.querySelector(".overlay-title").textContent="".concat(e," won")},f=e=>{if(o){const s=parseInt((e=>e.target.getAttribute("data-index"))(e),10);r.playerAttack(s),h(),p(s),e.target.removeEventListener("click",f),r.opponentIsDefeated()?g("You"):setTimeout((()=>{const e=t.cpuAttack();n.markChosenCoordOnBoard(e),t.opponentIsDefeated()?g("CPU"):h()}),1)}else e.preventDefault()};document.getElementById("rotate").addEventListener("click",(()=>{c=!c,document.querySelectorAll(".drag-item").forEach((e=>{c?(document.querySelector(".ships").style.gridTemplate="repeat(2, 1fr) / repeat(3, 1fr)",e.classList.add("vertical"),e.classList.remove("horizontal")):(document.querySelector(".ships").style.gridTemplate="repeat(3, 1fr) / repeat(2, 1fr)",e.classList.add("horizontal"),e.classList.remove("vertical"))}))}));const v=t=>!e.availableCoords.includes(t),m=e=>(e=>e>99)(e)||v(e),k=(e,t)=>{c?((e,t)=>{const r=t?"#999":"#444";i.splice(0,i.length);for(let t=0;t<l;t+=1){const n=e+10*t;if(v(n))break;i.push(n),a[n].style.backgroundColor=r}})(e,t):((e,t)=>{const r=t?"#999":"#444";i.splice(0,i.length);for(let t=0;t<l;t+=1){const n=e+t;if(n%10==0&&t>0||m(n))break;i.push(n),a[n].style.backgroundColor=r}})(e,t)},y=e=>{c?(e=>{for(let t=0;t<l;t+=1){const r=e+10*t;if(v(r))break;a[r].style.backgroundColor="#fff"}})(e):(e=>{for(let t=0;t<l;t+=1){const r=e+t;if(r%10==0&&t>0||m(r))break;a[r].style.backgroundColor="#fff"}})(e)},E=(t,r)=>{t.addEventListener("dragenter",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",setTimeout((()=>{k(r,!0)}),.01)})),t.addEventListener("dragover",(e=>{e.preventDefault()})),t.addEventListener("dragleave",(()=>{y(r)})),t.addEventListener("drop",(()=>{y(r),l===i.length&&(k(r,!1),d.classList.add("dropped"),d.setAttribute("draggable","false"),(t=>{const r=[];t.forEach((e=>r.push(e))),e.createShip(l,d.id,e.availableCoords,!1,r)})(i),u.push("1"))}))};return{generateGrid:e=>{const t=document.getElementById("".concat(e));for(let e=0;e<100;e+=1){const r=document.createElement("div");r.classList.add("grid-item"),t.appendChild(r),[0,1,2,3,4,5,6,7,8,9].includes(e)&&r.classList.add("top"),[0,10,20,30,40,50,60,70,80,90].includes(e)&&r.classList.add("left"),[9,19,29,39,49,59,69,79,89,99].includes(e)&&r.classList.add("right"),[90,91,92,93,94,95,96,97,98,99].includes(e)&&r.classList.add("bottom"),r.setAttribute("data-index","".concat(e)),a.push(r),s&&E(r,e)}},markChosenCoordOnBoard:p,createDragShips:()=>{document.querySelectorAll(".drag-item").forEach((e=>{e.addEventListener("dragstart",(e=>{(e=>{e.target.classList.add("dragging"),l=e.target.children.length,d=e.target})(e)})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))}))},startGame:()=>{document.getElementById("start").addEventListener("click",(e=>{5===n.shipsPlaced.length?a.forEach((e=>e.addEventListener("click",f))):e.preventDefault()}))},shipsPlaced:u}};(()=>{const e=t(!1),s=t(!0),a=r(s),o=r(e),l=n(e,a,o,!1,!0);l.generateGrid("player"),l.createDragShips();const c=n(s,o,a,l,!1);c.generateGrid("opponent"),c.startGame()})()})();