const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=document.querySelector("body");let r;t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),r=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(r),t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled")})),t.stopBtn.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.bfbdaeac.js.map
