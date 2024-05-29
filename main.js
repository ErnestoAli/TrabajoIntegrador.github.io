
        const formulario = document.getElementById('formularioContacto');
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');
        const errorNombre = document.getElementById('errorNombre');
        const errorEmail = document.getElementById('errorEmail');
        const errorMensaje = document.getElementById('errorMensaje');
        const datosEnviados = document.getElementById('datosEnviados');
        const nombreEnviado = document.getElementById('nombreEnviado');
        const emailEnviado = document.getElementById('emailEnviado');
        const mensajeEnviado = document.getElementById('mensajeEnviado');
        const switchers = document.querySelectorAll('.switcher')
       
       
        switchers.forEach(item => {
             item.addEventListener('click', function() {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'))
                this.parentElement.classList.add('is-active')
            })
        })

        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = nombreInput.value.trim();
            const email = emailInput.value.trim();
            const mensaje = mensajeInput.value.trim();

            let errores = false;

            if (nombre === '') {
                errorNombre.textContent = 'El nombre es obligatorio';
                errores = true;
            } else {
                errorNombre.textContent = '';
            }

            if (!validarEmail(email)) {
                errorEmail.textContent = 'Correo electrónico no válido';
                errores = true }
        }
        
    )
   
    
    
