document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("contraste1").addEventListener("click", function() {
    document.getElementById("hoja_estilo").setAttribute("href", "estilo.css");
  });

  document.getElementById("contraste2").addEventListener("click", function() {
    document.getElementById("hoja_estilo").setAttribute("href", "contraste.css");
  });
});

function validacion() {
  var email = document.getElementById("email").value;

  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
    alert("La dirección de email no es válida.");
    return false;
   }
}