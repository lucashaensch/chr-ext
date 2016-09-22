// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: '\
			allThumbs = document.getElementsByClassName("yt-shelf-grid-item");\
			for(item in allThumbs){\
				if(allThumbs[item].children){\
					firstChild = allThumbs[item].children[0];\
					if(firstChild.children[0].firstChild.classList[1] == "watched") {\
						allThumbs[item].remove();\
					}\
				}\
			}\
		'
	});
});