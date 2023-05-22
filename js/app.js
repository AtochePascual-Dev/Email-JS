//* VARIABLES
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');



//* EVENTOS
document.addEventListener('DOMContentLoaded', () => {

  inputEmail.addEventListener('blur', validarInput);
  inputAsunto.addEventListener('blur', validarInput);
  inputMensaje.addEventListener('blur', validarInput);
});



//* FUNCIONES
//* Validamos la información obtenida del imput
const validarInput = (event) => {

  const valorInput = event.target.value;
  const tipoInput = event.target.id;

  // validamos si el valor del input es vacio
  (valorInput.trim() === '')
    ? mostrarAlerta(event.target.parentElement, `El campo ${tipoInput} es obligatorio`)
    : eliminarAlerta(event.target.parentElement)

};



//* Muestra una alerta
const mostrarAlerta = (referencia, mensaje) => {

  // Si existe una alerta previa la eliminamos
  eliminarAlerta(referencia);

  // Creamos la alerta
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.className = "p-2 bg-red-600 text-white text-center uppercase error"

  // Agregamos la alerta al HTML
  referencia.appendChild(alerta);
};



//* Eliminar alerta
const eliminarAlerta = (referencia) => {

  // Buscamos la alerta en la referencia y la eliminamos
  const existeAlert = referencia.querySelector('.error');

  if (existeAlert) {
    existeAlert.remove();
  }
};