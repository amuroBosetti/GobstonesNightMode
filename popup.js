/* Añade un eventListener cuando carga el DOM al botón de "Desactivar". Cuando se clickea en el,
Chrome crea una nueva oestaña con la direccion "chrome://extensions". No pude hacer esto con un 
<a> porque requiere una URL entera*/

document.addEventListener('DOMContentLoaded', function(){ 
	document.getElementById('onOff').addEventListener('click', function(){
		chrome.tabs.create({url:'chrome://extensions'});
	});
});