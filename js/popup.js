/* Añade un eventListener cuando carga el DOM al botón de "Desactivar". Cuando se clickea en el,
Chrome crea una nueva pestaña con la direccion "chrome://extensions". No pude hacer esto con un 
<a> porque requiere una URL entera (y porque eso lo abriria en el popup, no en una ventana.*/
var botón = document.getElementById('onOff');




document.addEventListener('DOMContentLoaded', function(){ 

	botón.addEventListener('click', function(){
		//chrome.tabs.create({url:'chrome://extensions'});
		botón.classList.toggle("on");
		var estado = botón.classList.contains("on");
		changeButtonText(estado);
		//chrome.runtime.sendMessage({status: "true"});
		chrome.tabs.query({active: true, currentWindow: true}, 
			function(tabs) {
				if(estado == true){
					chrome.tabs.sendMessage(tabs[0].id, {status: true}, function(response) {
	            		console.log("encendido");
	        		});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, {status: false}, function(response) {
	            		console.log("apagado");
	        		});
				}
	        });
	});
});

function changeButtonText(status){
	//changes button text, depending on status
	if(status == true){
		botón.textContent = "Desactivar";
	} else {
		botón.textContent = "Activar";
	}
}



