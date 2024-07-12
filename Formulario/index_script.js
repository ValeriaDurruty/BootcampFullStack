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
  var fechaNac = document.getElementById("fechaNac").value;

  // Validar que el email sea correcto
  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
    alert("La dirección de email no es válida.");
    return false;
   }

  // Validar que la fecha de nacimiento sea anterior a la fecha actual
  var fechaActual = new Date();
  var fechaNacimiento = new Date(fechaNac);

  if (fechaNacimiento >= fechaActual) {
    alert("La fecha de nacimiento debe ser anterior a la fecha actual.");
    return false;
  }
}