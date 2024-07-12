document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          // aca invoco a las verificaciones, dentro del IF: si la primera pasa (checkValidity) se ejecuta la segunda (validacion)
          if (!form.checkValidity() || !validacion()) {
              event.preventDefault()
              event.stopPropagation()
          } else {
                  event.preventDefault()
                  document.getElementById("mensajegracias").style.display = "block"; // hacer visible el mensaje
              }

          form.classList.add('was-validated')
      }, false)
  })

  // Cambio de hoja de estilo
  document.getElementById("contraste1").addEventListener("click", function() {
      document.getElementById("html").setAttribute("data-bs-theme", "light");
  });

  document.getElementById("contraste2").addEventListener("click", function() {
      document.getElementById("html").setAttribute("data-bs-theme", "dark");
  });
});

function validacion() {
  var email = document.getElementById("email").value;
  var fechaNac = document.getElementById("fechaNac").value;
  //Variables para chequeo de fecha de nacimiento
  var fechaActual = new Date();
  var fechaNacimiento = new Date(fechaNac);
  //Expresión regular para validar email
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validar email
  if (!emailRegex.test(email)) {
      alert("La dirección de email no es válida.");
      return false;
  }

  // Validar que la fecha de nacimiento sea anterior a la fecha actual
  if (fechaNacimiento >= fechaActual) {
      alert("La fecha de nacimiento debe ser anterior a la fecha actual.");
      return false;
  }
  
  return true;
};