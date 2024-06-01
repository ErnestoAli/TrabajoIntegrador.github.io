const form = document.getElementById('FormContacto');
const resulta = document.getElementById('resultado');
const resultadoenviado = document.createElement('p');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = e.target.nombre.value;
  const email = e.target.email.value;
  const telefono = e.target.telefono.value;
  const mensaje = e.target.mensaje.value;

  if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
    resulta.innerHTML = '<p>Por favor, completa todos los campos.</p>';
    return;
  }

  if (!/^[0-9]{10}$/.test(telefono)) {
    resulta.innerHTML = '<p>El número de teléfono debe tener 10 dígitos.</p>';
    return;
  }

  resulta.innerHTML = '<p>Mensaje enviado</p>';

})

var imagenes = ['FotosPeliculas/bannervaintensamente2.jpg', 'FotosPeliculas/garfielfueradecasa.jpg', 'FotosPeliculas/elplanetadelossimios.jpg']
    cont = 0;

 function Carrousel(carrouselA){
  carrouselA.addEventListener('click', e  => {
    let anterior = carrouselA.queryselector('.anterior'),
        siguiente = carrouselA.queryselector('.siguiente'),
        FotosPeliculas = carrouselA.queryselector('FotosPeliculas'),
        tgt = e.target;

    if(tgt == anterior){
      if(cont > 0){
        FotosPeliculas.src = imagenes[cont - 1];
        cont--;
    } else {
      FotosPeliculas.src = imagenes[imagenes.length - 1];
       cont = imagenes.length - 1;
    } 
   } else if(tgt == siguiente) {
    if(cont < imagenes.length - 1){
      FotosPeliculas.src = imagenes[cont + 1];
      cont++;
      } else {
        FotosPeliculas.src = imagenes[0];
        cont = 0;
    }}

 });
}

document.addEventListener("DOMContentLoaded", () => {
  let carrouselA = document.querySelector('.carrouselA');
  Carrousel(carrouselA);
});