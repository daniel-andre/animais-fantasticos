!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e,n){const o=document.documentElement;function a(c){t.contains(c.target)||(t.removeAttribute("data-outside",""),e.forEach(t=>{o.removeEventListener(t,a)}),n())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>{o.addEventListener(t,a)})}),t.setAttribute("data-outside",""))}function a(){let t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach(t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval(()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))},25*Math.random())}))}));const e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}n.r(e),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll("[data-menu='suave'] a[href^='#']").forEach(e=>{e.addEventListener("click",t)})}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach(t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")})}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt");function e(){this.classList.toggle("ativo"),this.nextElementSibling.classList.toggle("ativo")}t.length&&(t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach(t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll("[data-tab='content'] section");t.length&&e.length&&(e[0].classList.add("ativo"),t.forEach((t,n)=>{t.addEventListener("click",()=>{!function(t){e.forEach(t=>t.classList.remove("ativo"));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}(n)})}))}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n),this.addEventListener("mousemove",e)}t.forEach(t=>{t.addEventListener("mouseover",o)})}(),function(){function t(t){t.preventDefault(),this.classList.add("active"),o(this,["touchstart","click"],()=>{this.classList.remove("active")})}document.querySelectorAll("[data-dropdown]").forEach(e=>{["touchstart","click"].forEach(n=>{e.addEventListener(n,t)})})}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]');function n(){e.classList.add("active"),t.classList.add("active"),o(e,["click","touchstart"],()=>{e.classList.remove("active"),t.classList.remove("active")})}t&&["click","touchstart"].forEach(e=>{t.addEventListener(e,n)})}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),i=-1!==e.indexOf(a),r=c>=n[0]&&c<n[1];i&&r&&t.classList.add("aberto")}(),async function(t){try{const e=await fetch(t),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach(t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)}),a()}catch(t){console.log(Error(t))}}("./animaisapi.json"),fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)}).catch(t=>console.log(Error(t)))}]);