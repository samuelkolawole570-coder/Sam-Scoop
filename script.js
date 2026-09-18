document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"), links=document.querySelector(".nav-links");
 if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));
 document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
 document.querySelectorAll(".reveal").forEach(el=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12}).observe(el));
 const y=document.querySelectorAll("[data-year]"); y.forEach(e=>e.textContent=new Date().getFullYear());
 const form=document.querySelector("#contactForm");
 if(form) form.addEventListener("submit",e=>{
   e.preventDefault();
   const n=document.querySelector("#name").value.trim(), em=document.querySelector("#email").value.trim(), s=document.querySelector("#service").value, m=document.querySelector("#message").value.trim();
   const text=`Hello SAMSCOOP,%0A%0AMy name is ${encodeURIComponent(n)}.%0AEmail: ${encodeURIComponent(em)}%0AService: ${encodeURIComponent(s)}%0A%0A${encodeURIComponent(m)}`;
   window.open("https://wa.me/2349169042450?text="+text,"_blank");
 });
});
