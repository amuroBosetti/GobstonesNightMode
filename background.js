//Permite que se muestre el popup al recibir el mensaje

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo = "showPageAction"){
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
			chrome.pageAction.show(tabs[0].id)
		});
	}
});  




