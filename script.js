
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, i) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.8s ease";
    setTimeout(() => {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, i * 400);
  });
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const fechar = document.querySelector(".fechar");

const projetosImgs = {
  renascer: ["renascer(1).jpg", "renascer(2).jpg", "renascer(3).jpg"],
  galaxy: ["galaxydoces (1).png", "galaxydoces (2).png", "galaxydoces (3).png", "galaxydoces (4).png"],
  labirinto: ["correr (1).jpg", "correr (2).jpg"] 
};

document.querySelectorAll(".projeto-card").forEach(card => {
  const btn = card.querySelector(".btn");
  btn.addEventListener("click", () => {
    const projeto = card.getAttribute("data-projeto");
    const imagens = projetosImgs[projeto];

    if (!imagens || imagens.length === 0) return; 

    modal.style.display = "flex"; 
    let index = 0;
    modalImg.src = imagens[index]; 

   
    modalImg.onclick = () => {
      index = (index + 1) % imagens.length;
      modalImg.src = imagens[index];
    };
  });
});


fechar.onclick = () => {
  modal.style.display = "none";
  modalImg.onclick = null;
};


modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.onclick = null;
  }
});
