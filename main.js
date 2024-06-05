const formulario = document.getElementById('formulario-contacto');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const comentarioInput = document.getElementById('comentario');
const mensajeEnviadoDiv = document.getElementById('mensaje-enviado');
const erroresDiv = document.getElementById('errores');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const comentario = comentarioInput.value.trim();

  let errores = [];

  if (!nombre) {
    errores.push('El nombre es obligatorio');
  }
  if (!email) {
    errores.push('El correo electrónico es obligatorio');
  }
  if (!telefono) {
    errores.push('El teléfono es obligatorio');
  }

  if (nombre.length > 50) {
    errores.push('El nombre no puede tener más de 50 caracteres');
  }
  if (email.length > 100) {
    errores.push('El correo electrónico no puede tener más de 100 caracteres');
  }
  if (telefono.length > 10) {
    errores.push('El teléfono no puede tener más de 10 caracteres');
  }
  if (comentario.length < 10 || comentario.length > 250) {
   errores.push('El comentario debe tener entre 10 y 250 caracteres');
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errores.push('El correo electrónico no es válido');
  }
  const telefonoRegex = /^\d{9,12}$/;
  if (!telefonoRegex.test(telefono)) {
    errores.push('El teléfono no es válido');
  }

  if (errores.length > 0) {
    erroresDiv.innerHTML = '';
    errores.forEach((error) => {
      const errorParagraph = document.createElement('p');
      errorParagraph.textContent = error;
      erroresDiv.appendChild(errorParagraph);
    });
  } else {
    mensajeEnviadoDiv.innerHTML = '';
    const mensajeParagraph = document.createElement('p');
    mensajeParagraph.textContent = `Datos enviados correctamente: Nombre: ${nombre}, Correo electrónico: ${email}, Teléfono: ${telefono}, Comentraio: ${comentario}`;
    mensajeEnviadoDiv.appendChild(mensajeParagraph);
    formulario.reset();
  }
  
});

