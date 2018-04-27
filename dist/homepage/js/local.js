var imageAPI = 'http://api.weathercenterapp.com/topic/Weather';
var imgurlarray = [];
function callXHR1(url, cb, p){
    try{
        var xmlhttp = new XMLHttpRequest();
        var url = url;

        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            if(p){
                window[cb](myArr, p);
                }
            else window[cb](myArr, p);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    catch (e){
        console.log('error: ', e);
    }
}

function initBG(){
    callXHR1(imageAPI , 'printBG');
}

function printBG(data){
 console.log(data);
 try{
    if(data){
        for(c = 0 ; c < data.bgImages.length ; c++){
            var imgurls = data.bgImages[c].url;
            console.log(imgurls);
            imgurlarray.push(imgurls);
            var createimgtag = document.createElement('img');
            createimgtag.style.width = "1px";
            createimgtag.style.height = "1px";
            createimgtag.src = imgurls;
            document.getElementById('cachedimg').appendChild(createimgtag);
            document.getElementById('wrapper').style.backgroundImage = "url("+imgurlarray[Math.floor(Math.random()*imgurlarray.length)]+")";
        }
    }
 }
 catch(e){
    console.log(e)
 }
}

$(document).ready(function(){
    var wrapperheight =  $(window).height() - 49;
    $('#wrapper').height(wrapperheight);
    initBG();
});

