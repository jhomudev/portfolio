
//srool suave smooth
$(document).ready(function(){
  var ir_a=$(".desplazar");
  ir_a.click(function(evento){
    evento.preventDefault();
    $("body,html").animate({
        scrollTop:$(this.hash).offset().top,
    },550);
})

  // HEADER ESTILOS AL SCROLEAR ABAJO
var cabeza = $("#nav");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    cabeza.addClass("change");
  } else {
    cabeza.removeClass("change");
  }
});
})


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

// RECARGAR PAGINA
function reload() {
  setTimeout(function(){
    location.reload()
  },1200)
  
}


// ENVIAR AJAX

//funcion ajax de registrar 
$('#sendEmail').click(function(){
  //onkeyup validar correo"
  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  
  if(!emailRegex.test(document.querySelector('#txCorreo').value)){ 
      $("#aviso").html('<h4 class="warning"><i class="fa fa-exclamation-triangle icon" aria-hidden="true"></i> Ingrese un correo válido.</h4>')
  }
  /* else if($("#txNombres").val().length ==0 || $("#txAsunto").val().length ==0 | $("#txMensaje").val().length ==0){
      $("#aviso").html('<h4 class="warning"><i class="fa fa-exclamation-triangle icon" aria-hidden="true"></i> Por favor. Complete todos los datos.</h4>')
  } */
  else{
      var datos=$('#formSend').serialize();
      $.ajax({
          type: "POST",
          url: "send_email.php",
          data: datos,

          success: function (r) {
              $("#aviso").html(r);                      
          }
      });
  }
  return false;
}) 

document.getElementById('txCorreo').addEventListener('input', function() {
  campo = event.target;
  
  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(campo.value)) {
      $("#aviso").html('<h4 class="ok"><i class="fa-solid fa-check"></i> Correo válido.</h4>')
  } else {
      $("#aviso").html('<h4 class="warning"><i class="fa fa-exclamation-triangle icon" aria-hidden="true"></i> Ingrese un correo válido.</h4>')
  }
});
