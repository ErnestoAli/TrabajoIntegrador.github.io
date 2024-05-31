const form = document.getElementById('FormContacto');
const resulta = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = e.target.name.value;
  const email = e.target.email.value;
  const telefono = e.target.phone.value;
  const mensaje = e.target.message.value;

  if (!nombre ||!email ||!telefono ||!mensaje) {
    resulta.innerHTML = '<p>Por favor, completa todos los campos.</p>';
    return;
  }

  if (!/^[0-9]{10}$/.test(telefono)) {
    resulta.innerHTML = '<p>El número de teléfono debe tener 10 dígitos.</p>';
    return;
  }

  resulta.innerHTML = '<p>Mensaje enviado</p>';

})