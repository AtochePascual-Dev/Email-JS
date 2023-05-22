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
const validarInput = (event) => {

}