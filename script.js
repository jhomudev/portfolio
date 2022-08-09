// HEADER ESTILOS AL SCROLEAR ABAJO
var cabeza = $("#nav");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    cabeza.addClass("change");
  } else {
    cabeza.removeClass("change");
  }
});

// MOSTRAR BARRA DE MENU
const btnBar = document.querySelector(".bar");
let bar = document.querySelector(".menu");
let btnNav = document.querySelectorAll(".btn-nav");
function showBar() {
  bar.classList.toggle("show");
}

btnBar.onclick = showBar;
btnNav.forEach((item) => (item.onclick = showBar));

// MOSTRAR FORM DE SEND Email

const btnSend = document.querySelector(".send");
const btnSendButton = document.querySelector("#btn-email");
const btnSendClose = document.querySelector("#btnCerrar");
let form = document.querySelector(".boxSend");

function showForm() {
  form.classList.toggle("hidden");
}

btnSend.onclick = showForm;
btnSendButton.onclick = showForm;
btnSendClose.onclick = showForm;
