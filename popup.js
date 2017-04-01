

chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
    
     
     getLink(activeTab.url);
  });


        function getLink(urlRTP)
        {
            var url = 'https://rtp-downloader.herokuapp.com/api?link=' + encodeURIComponent(urlRTP);

        //var div = document.querySelector('#hi');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 ) { //&& xhr.status === 200
                var div = document.querySelector('#hi');
                var link= JSON.parse(xhr.responseText).urlVideo;
                div.innerHTML = '<a href="' +link+'" target="_blank">'+link+'</a>';
                 
            }

        };

        xhr.send() ;
    }