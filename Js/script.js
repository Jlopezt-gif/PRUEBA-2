// Pequeña animación de entrada
window.addEventListener("load", () => {
  const card = document.querySelector(".card-inner");
  card.style.opacity = 0;
  card.style.transform = "scale(0.9)";

  setTimeout(() => {
    card.style.transition = "all 0.8s ease";
    card.style.opacity = 1;
    card.style.transform = "scale(1)";
  }, 100);
});
