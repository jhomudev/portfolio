var cabeza = $("#nav");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    cabeza.addClass("change");
  } else {
    cabeza.removeClass("change");
  }
});

const btnBar = document.querySelector(".bar");
let bar = document.querySelector(".menu");
let btnNav = document.querySelectorAll(".btn-nav");
function showBar() {
  bar.classList.toggle("show");
}

btnBar.onclick = showBar;
btnNav.forEach(item => item.onclick=showBar)
