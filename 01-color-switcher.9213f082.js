const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a;e.addEventListener("click",(()=>{a=setInterval((()=>{t.disabled=!1,d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0}));t.addEventListener("click",(()=>{a&&(clearInterval(a),e.disabled=!1,t.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.9213f082.js.map