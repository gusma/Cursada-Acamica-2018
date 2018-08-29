$(document).ready(init);

function init() {
	console.log('La pagina esta lista para ser usada');
	iniciarAcordeon();
}

function iniciarAcordeon() {
    $('.js-encabezado').on('mouseenter', encabezadoHandler);
    $('.js-encabezado').on('click', mostrarDiv);
}

function encabezadoHandler() {
    console.log('BANANAS');
}

function mostrarDiv(){
    console.log(this);
    $(this)
        .next('.caja-inferior').slideToggle('slow');

    };

/* Puede ser tambien

function encabezadoHandler(){
    // cancelar una funcion / funcionalidad

     event.preventDefault();

Hacerlo cuando son links 


    // Modo 1
    $(this).next('.js-descripcion').slideToggle();

    // Modo 2

    var elementoActual = $(this);
    var elementoAMostrar = elementoActual.next('.js-descripcion');

    elementAMostrar.slideToggle();
} */