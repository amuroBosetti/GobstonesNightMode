//Permite que se muestre el popup al recibir el mensaje

var status;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo = "showPageAction"){
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
			chrome.pageAction.show(tabs[0].id)
		});
	}
});  

/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.status = "true"){
		var status = true;
		//chrome.tabs.sendMessage(tabs[0].id, {status:true});
	} else {
		var status = false;
	}
}); 

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {status: status});
});*/




