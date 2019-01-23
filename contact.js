/* Añade un eventListener cuando carga el DOM al botón de "Desactivar". Cuando se clickea en el,
Chrome crea una nueva pestaña con la direccion "chrome://extensions". No pude hacer esto con un 
<a> porque requiere una URL entera (y porque eso lo abriria en el popup, no en una ventana.*/

document.addEventListener('DOMContentLoaded', function(){ 
	document.getElementById('git').addEventListener('click', function(){
		chrome.tabs.create({url:'https://github.com/'});
	});
});