const intro = document.getElementById("intro");
const steps = [...document.querySelectorAll(".journey-step")];

function showStep(name){
  steps.forEach(s => s.classList.toggle("active", s.dataset.step === name));
}

document.querySelectorAll("[data-next]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    showStep(btn.dataset.next);
  });
});

document.querySelector("[data-finish]")?.addEventListener("click",()=>{
  intro.classList.add("hide");
  setTimeout(()=>document.getElementById("site").scrollIntoView({behavior:"smooth"}),250);
});

document.getElementById("skipIntro").addEventListener("click",()=>{
  intro.classList.add("hide");
});

document.querySelectorAll(".view-photo").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const card = btn.closest(".destination-card");
    const img = card.querySelector("img");
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightboxImage").src = img.src;
    document.getElementById("lightboxImage").alt = img.alt;
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden","false");
  });
});

function closeLightbox(){
  document.getElementById("lightbox").classList.remove("show");
  document.getElementById("lightbox").setAttribute("aria-hidden","true");
}
document.getElementById("closeLightbox").addEventListener("click",closeLightbox);
document.getElementById("lightbox").addEventListener("click",e=>{
  if(e.target.id === "lightbox") closeLightbox();
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thanks — your request is ready to be connected to your counselling inbox.";
});

document.addEventListener("keydown",e=>{
  if(e.key === "Escape") closeLightbox();
});
