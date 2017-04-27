

chrome.tabs.query({ active: true, currentWindow: true }, function (arrayOfTabs) {
    var activeTab = arrayOfTabs[0];
    getLink(activeTab.url);
});


function getLink(urlRTP) {
    var url = 'https://rtp-downloader.herokuapp.com/api?link=' + encodeURIComponent(urlRTP);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var div = document.querySelector('#hi');
            var link = JSON.parse(xhr.responseText).urlVideo;
            if (link.startsWith('http')) {
                var anchor = document.createElement('a');
                anchor.href = link;
                anchor.setAttribute('target', '_blank');
                anchor.textContent = link;
                while (div.hasChildNodes()) {
                    div.removeChild(div.lastChild);
                }
                div.appendChild(anchor);
            }

        }

    };

    xhr.send();
}