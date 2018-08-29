$(document).ready();

$(document).mousemove(function(e) {
	$('#drone').offset({
		left: e.pageX,
		top: e.pageY + 20
	});
});

$(document).mousemove(function(e) {
	$('#pilot').offset({
		left: e.pageX,
		bottom: 0
	});
	
});

$("#piedra").hover( function () {
	alert("hello"); 
  });

$(document).ready(init);

function init() {

	damePosicionDrone();
	damePosicionPiloto();
}

function ubicateDrone(){
    console.log('Ubicacion X del Drone', event.clientX);
    console.log('Ubicacion Y del Drone', event.clientY);
}

function ubicatePiloto(){
    console.log('Ubicacion X del Piloto', event.clientX);
    console.log('Ubicacion Y del Piloto', event.clientY);
}

function damePosicionDrone(){
	$('#drone').on('mousemove', ubicateDrone); 
}
	
function damePosicionPiloto(){
	$('#pilot').on('mousemove', ubicatePiloto); 
}

/* 
function seUnenDronePiloto(){
var posicionDelDrone = 


	if 
}

*/

damePosicionDrone();