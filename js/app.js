//* VARIABLES
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const btnReset = document.querySelector('#formulario button[type="reset"]');
const spinner = document.querySelector('#spinner');
const email = {
  email: '',
  asunto: '',
  mensaje: '',
}


//* EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  inputEmail.addEventListener('blur', validarInput);
  inputAsunto.addEventListener('blur', validarInput);
  inputMensaje.addEventListener('blur', validarInput);

  formulario.addEventListener('submit', enviarEmail);

  btnReset.addEventListener('click', () => {
    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    desactivarBoton();
  });
});



//* FUNCIONES
//* Validamos la información obtenida del imput
const validarInput = (event) => {

  const valorInput = event.target.value.trim();
  const tipoInput = event.target.id;
  const referencia = event.target.parentElement;

  // validamos si el valor del input es vacio
  if (valorInput === '') {
    mostrarAlerta(referencia, `El campo ${tipoInput} es obligatorio`, tipoInput);
    return;
  }

  // Validamos si el el tipo de input es email
  if (tipoInput === 'email') {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // validamos el email
    if (!regex.test(valorInput)) {
      mostrarAlerta(referencia, `Email no valido`, tipoInput);
      return;
    }

  }

  // Si pasa la validacion eliminamos la alerta
  eliminarAlerta(referencia, tipoInput);

  // Agregamos la informcion al objeto email
  email[tipoInput] = valorInput;

  // Validamos que el email contenga informcion en todas las propiedades
  if (validarEmail()) {
    activarBoton();
  }
};



//* Muestra una alerta
const mostrarAlerta = (referencia, mensaje, tipoInput) => {

  eliminarAlerta(referencia, tipoInput);

  // Creamos la alerta
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.className = "p-2 bg-red-600 text-white text-center uppercase text-sm font-bold error"

  // Agregamos la alerta al HTML
  referencia.appendChild(alerta);
};



//* Eliminar alerta
const eliminarAlerta = (referencia, tipoInput) => {

  // Buscamos la alerta en la referencia y la eliminamos
  const existeAlert = referencia.querySelector('.error');

  if (existeAlert) {
    existeAlert.remove();
  }

  // Limpiamos la propiedad
  email[tipoInput] = "";

  // desactivamos el boton
  desactivarBoton()

};



// * Validar email
const validarEmail = () => {
  // verifica si todos los campos son diferente de vacio
  return Object.values(email).every(data => data != '');
};



// * Activar boton
const activarBoton = () => {
  btnSubmit.classList.remove('opacity-50');
  btnSubmit.disabled = false;
};


// * Desactivar boton
const desactivarBoton = () => {
  btnSubmit.classList.add('opacity-50');
  btnSubmit.disabled = true;
};


// * Enviamos el email
const enviarEmail = (event) => {
  event.preventDefault();

  // mostramos el spinner
  spinner.classList.remove('hidden');
  spinner.classList.add('flex');

  // Eliminamos las classes que muestran el spiner
  setTimeout(() => {
    spinner.classList.add('hidden');
    spinner.classList.remove('flex');

    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    desactivarBoton();
    formulario.reset();

    // Creamos un mesaje de exito
    const alerta = document.createElement('P');
    alerta.textContent = "Mensaje enviado correctamente";
    alerta.className = "p-2 bg-green-500 text-white text-center uppercase text-sm font-bold alerta"

    // Mostramos la alerta
    formulario.appendChild(alerta);

    // Eliminamos la alerta
    setTimeout(() => {
      formulario.querySelector('.alerta').remove();
    }, 2000);

  }, 2000);
};