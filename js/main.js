var url = '', infoEle;
chrome.tabs.query({active:true, currentWindow:true}, function(tabArray){
    url = tabArray[0].url;
    console.log(url);
    var qrcode = new QRCode(document.getElementById("qrcode"), {
	    text: url,
	    width: 128,
	    height: 128,
	    colorDark : "#000000",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
	});

    infoEle = document.getElementById('info');
    infoEle.innerHTML = tabArray[0].title.length > 20 ?
    					(tabArray[0].title.substr(0, 20) + '...') :
    					tabArray[0].title;
});