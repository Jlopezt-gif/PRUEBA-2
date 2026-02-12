const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const divInicio = document.getElementById("inicio");
const divTarjeta = document.getElementById("tarjeta");

// Botón NO huye
btnNo.addEventListener("mouseover", function () {
  btnNo.style.position = "fixed";

  const maxX = window.innerWidth - btnNo.offsetWidth - 20;
  const maxY = window.innerHeight - btnNo.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  btnNo.style.left = Math.max(10, randomX) + "px";
  btnNo.style.top = Math.max(10, randomY) + "px";
  btnNo.style.zIndex = "100";
});

// Botón SÍ muestra la tarjeta
btnSi.addEventListener("click", function () {
  divInicio.style.display = "none";
  divTarjeta.style.display = "flex";

  // Animación de entrada
  const card = document.querySelector(".card-inner");
  card.style.opacity = 0;
  card.style.transform = "scale(0.9)";

  setTimeout(() => {
    card.style.transition = "all 0.8s ease";
    card.style.opacity = 1;
    card.style.transform = "scale(1)";
  }, 100);
});
