//* VARIABLES
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const infoData = {
  email: '',
  asunto: '',
  mensaje: '',
}


//* EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  inputEmail.addEventListener('blur', validarInput);
  inputAsunto.addEventListener('blur', validarInput);
  inputMensaje.addEventListener('blur', validarInput);
});



//* FUNCIONES
//* Validamos la información obtenida del imput
const validarInput = (event) => {

  const valorInput = event.target.value.trim();
  const tipoInput = event.target.id;
  const referencia = event.target.parentElement;

  // validamos si el valor del input es vacio
  if (valorInput === '') {
    mostrarAlerta(referencia, `El campo ${tipoInput} es obligatorio`);
    return;
  }

  // Si pasa la validacion eliminamos la alerta
  eliminarAlerta(referencia, tipoInput);

  // Validamos si el el tipo de input es email
  if (tipoInput === 'email') {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // validamos el email
    if (!regex.test(valorInput)) {
      mostrarAlerta(referencia, `Email no valido`);
      return;
    }

    // Si pasa la validacion eliminamos la alerta
    eliminarAlerta(referencia, tipoInput);
  }

  // Agregamos la informcion al objeto que contiene la informacion
  infoData[tipoInput] = valorInput;

  // Validamos que el objeto contenga informcion en todas las propiedades
  if (Object.values(infoData).every(data => data != '')) {

  }
};



//* Muestra una alerta
const mostrarAlerta = (referencia, mensaje) => {

  // Creamos la alerta
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.className = "p-2 bg-red-600 text-white text-center uppercase error"

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

  infoData[tipoInput] = "";
};