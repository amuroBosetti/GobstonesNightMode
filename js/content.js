//Envia el mensaje a background.js para que se muestre el popup
//var botón = document.getElementById('onOff');

//var ace = document.querySelector(".ace_content");	
//gruvbox, idle_fingers

chrome.runtime.onMessage.addListener(
	/*Al recibir el mensaje, cambia la clase de main segun si status = true o false*/
	function(req, sender, sendResponse) {
		if(req.status == true){
			document.getElementById("ace").setAttribute("theme", "ace/theme/gruvbox");
    		document.getElementById("main").className = "night";
    		sendResponse("SUCCESS");
		} else {
			document.getElementById("ace").setAttribute("theme", "ace/theme/dreamweaver");
			document.getElementById("main").classList.remove("night");
			}
		return true;
	})



chrome.runtime.sendMessage({
	todo: "showPageAction"
});


