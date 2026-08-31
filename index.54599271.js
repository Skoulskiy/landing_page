const t=document.querySelector(".slider"),e=document.querySelectorAll(".slider__item"),l=document.querySelectorAll(".pagination__dot");t.addEventListener("scroll",()=>{if(e.length<2)return;let o=t.scrollWidth/e.length,n=Math.max(0,Math.min(Math.round(t.scrollLeft/o),l.length-1));l.forEach((t,e)=>{t.classList.toggle("pagination__dot--active",e===n)})});
//# sourceMappingURL=index.54599271.js.map
