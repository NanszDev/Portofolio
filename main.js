
const words = ["Welcome To NanszzDev ", "Web Developer ", "My Portofolio ", "Nasi Padang "];
let i = 0;      
let j = 0;      
let isDeleting = false;
let speed = 100;

function typeEffect() {
  const text = document.getElementById("typing");
  const currentWord = words[i];

  if (isDeleting) {
    text.textContent = currentWord.substring(0, j--);
  } else {
    text.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); 
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : speed);
}

typeEffect();
