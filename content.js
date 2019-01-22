//Envia el mensaje a background.js para que se muestre el popup

chrome.runtime.sendMessage({
	todo: "showPageAction"
});

