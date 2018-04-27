
$(document).ready(function(){
	initWeather();
	getweather();
	getlocation();  
});


var weathericons= {
    "200": {
        "label": "thunderstorm with light rain", "icon": "storm-showers"
    }
    ,
    "201": {
        "label": "thunderstorm with rain", "icon": "storm-showers"
    }
    ,
    "202": {
        "label": "thunderstorm with heavy rain", "icon": "storm-showers"
    }
    ,
    "210": {
        "label": "light thunderstorm", "icon": "storm-showers"
    }
    ,
    "211": {
        "label": "thunderstorm", "icon": "thunderstorm"
    }
    ,
    "212": {
        "label": "heavy thunderstorm", "icon": "thunderstorm"
    }
    ,
    "221": {
        "label": "ragged thunderstorm", "icon": "thunderstorm"
    }
    ,
    "230": {
        "label": "thunderstorm with light drizzle", "icon": "storm-showers"
    }
    ,
    "231": {
        "label": "thunderstorm with drizzle", "icon": "storm-showers"
    }
    ,
    "232": {
        "label": "thunderstorm with heavy drizzle", "icon": "storm-showers"
    }
    ,
    "300": {
        "label": "light intensity drizzle", "icon": "sprinkle"
    }
    ,
    "301": {
        "label": "drizzle", "icon": "sprinkle"
    }
    ,
    "302": {
        "label": "heavy intensity drizzle", "icon": "sprinkle"
    }
    ,
    "310": {
        "label": "light intensity drizzle rain", "icon": "sprinkle"
    }
    ,
    "311": {
        "label": "drizzle rain", "icon": "sprinkle"
    }
    ,
    "312": {
        "label": "heavy intensity drizzle rain", "icon": "sprinkle"
    }
    ,
    "313": {
        "label": "shower rain and drizzle", "icon": "sprinkle"
    }
    ,
    "314": {
        "label": "heavy shower rain and drizzle", "icon": "sprinkle"
    }
    ,
    "321": {
        "label": "shower drizzle", "icon": "sprinkle"
    }
    ,
    "500": {
        "label": "light rain", "icon": "rain"
    }
    ,
    "501": {
        "label": "moderate rain", "icon": "rain"
    }
    ,
    "502": {
        "label": "heavy intensity rain", "icon": "rain"
    }
    ,
    "503": {
        "label": "very heavy rain", "icon": "rain"
    }
    ,
    "504": {
        "label": "extreme rain", "icon": "rain"
    }
    ,
    "511": {
        "label": "freezing rain", "icon": "rain-mix"
    }
    ,
    "520": {
        "label": "light intensity shower rain", "icon": "showers"
    }
    ,
    "521": {
        "label": "shower rain", "icon": "showers"
    }
    ,
    "522": {
        "label": "heavy intensity shower rain", "icon": "showers"
    }
    ,
    "531": {
        "label": "ragged shower rain", "icon": "showers"
    }
    ,
    "600": {
        "label": "light snow", "icon": "snow"
    }
    ,
    "601": {
        "label": "snow", "icon": "snow"
    }
    ,
    "602": {
        "label": "heavy snow", "icon": "snow"
    }
    ,
    "611": {
        "label": "sleet", "icon": "sleet"
    }
    ,
    "612": {
        "label": "shower sleet", "icon": "sleet"
    }
    ,
    "615": {
        "label": "light rain and snow", "icon": "rain-mix"
    }
    ,
    "616": {
        "label": "rain and snow", "icon": "rain-mix"
    }
    ,
    "620": {
        "label": "light shower snow", "icon": "rain-mix"
    }
    ,
    "621": {
        "label": "shower snow", "icon": "rain-mix"
    }
    ,
    "622": {
        "label": "heavy shower snow", "icon": "rain-mix"
    }
    ,
    "701": {
        "label": "mist", "icon": "sprinkle"
    }
    ,
    "711": {
        "label": "smoke", "icon": "smoke"
    }
    ,
    "721": {
        "label": "haze", "icon": "day-haze"
    }
    ,
    "731": {
        "label": "sand, dust whirls", "icon": "cloudy-gusts"
    }
    ,
    "741": {
        "label": "fog", "icon": "fog"
    }
    ,
    "751": {
        "label": "sand", "icon": "cloudy-gusts"
    }
    ,
    "761": {
        "label": "dust", "icon": "dust"
    }
    ,
    "762": {
        "label": "volcanic ash", "icon": "smog"
    }
    ,
    "771": {
        "label": "squalls", "icon": "day-windy"
    }
    ,
    "781": {
        "label": "tornado", "icon": "tornado"
    }
    ,
    "800": {
        "label": "clear sky", "icon": "sunny"
    }
    ,
    "801": {
        "label": "few clouds", "icon": "cloudy"
    }
    ,
    "802": {
        "label": "scattered clouds", "icon": "cloudy"
    }
    ,
    "803": {
        "label": "broken clouds", "icon": "cloudy"
    }
    ,
    "804": {
        "label": "overcast clouds", "icon": "cloudy"
    }
    ,
    "900": {
        "label": "tornado", "icon": "tornado"
    }
    ,
    "901": {
        "label": "tropical storm", "icon": "hurricane"
    }
    ,
    "902": {
        "label": "hurricane", "icon": "hurricane"
    }
    ,
    "903": {
        "label": "cold", "icon": "snowflake-cold"
    }
    ,
    "904": {
        "label": "hot", "icon": "hot"
    }
    ,
    "905": {
        "label": "windy", "icon": "windy"
    }
    ,
    "906": {
        "label": "hail", "icon": "hail"
    }
    ,
    "951": {
        "label": "calm", "icon": "sunny"
    }
    ,
    "952": {
        "label": "light breeze", "icon": "cloudy-gusts"
    }
    ,
    "953": {
        "label": "gentle breeze", "icon": "cloudy-gusts"
    }
    ,
    "954": {
        "label": "moderate breeze", "icon": "cloudy-gusts"
    }
    ,
    "955": {
        "label": "fresh breeze", "icon": "cloudy-gusts"
    }
    ,
    "956": {
        "label": "strong breeze", "icon": "cloudy-gusts"
    }
    ,
    "957": {
        "label": "high wind, near gale", "icon": "cloudy-gusts"
    }
    ,
    "958": {
        "label": "gale", "icon": "cloudy-gusts"
    }
    ,
    "959": {
        "label": "severe gale", "icon": "cloudy-gusts"
    }
    ,
    "960": {
        "label": "storm", "icon": "thunderstorm"
    }
    ,
    "961": {
        "label": "violent storm", "icon": "thunderstorm"
    }
    ,
    "962": {
        "label": "hurricane", "icon": "cloudy-gusts"
    }
};

function getlocation() {
	var locApi = '/getLocation.php';
    $.ajax({
        url: locApi,
        dataType: 'json',
        success: function(data) {
            try{
                if (data) {
                    console.log('data', data); 
                    var city = data.city;
                    $('.city').html(city);
                    $('.stateabbr').html(data.state);
                    $('.mid_city').html(city);
                }
            }
            catch(e){
                console.log('error: ', e);
            }
        },
        error: function(e) {
            console.log(e);
        }
    });
}

var monthnames = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var FORECAST_API = "/getLocation.php?action=getWeather";


function callAjaxx(url, callback){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function getweather(){
    var url = FORECAST_API;
    callAjaxx(url, function(data){
        printWeather(data);
    });
}


function printWeather(data){
    try{
        data = JSON.parse(data);
        console.log(data);
        var locArray = [];
        var objArray = [];
        if(data && data.list){
            $.grep(data.list, function(key){
                var dt = key.dt_txt;
                dt = dt.split(" ")[0]; //extract just the date part
                dt = new Date(dt);
                dt = dt.getDate();
                if($.inArray(dt, locArray) === -1) {
                    locArray.push(dt);
                    console.log(locArray);
                    objArray.push(key);
                }
            });
            var current = objArray[0];
            var prefix = 'wi wi-';
            var code = current.weather[0].id;
            var desc = weathericons[code].label;
            var icon = 'http://openweathermap.org/img/w/' + current.weather[0].icon +'.png';

            var temp = current.main.temp;
            temp = Math.round(temp);
            $(".temp").html(Math.round((temp) * 9 / 5 + 32)+"&#176F");
            $(".templogo").html('<img src="'+icon+'">');
            $(".weather_condition").html(icon.split('-')[1]);

            var mid_temperature = Math.round((temp) * 9 / 5 + 32)+'&#176; F<span><img width="30px" height="30px;" src="'+icon+'"></span>';
            $('.mid_temperature').html(mid_temperature);

            var todaysWeather = current.weather[0].main;

            var ulx = document.createElement('table');
            for(var x=0;x<6; x++){
                var ob = objArray[x];
                console.log(ob)
                var code = ob.weather[0].id;
                var desc = weathericons[code].label;
                var icon = ob.weather[0].icon;

                // Finally tack on the prefix.
                icon = 'http://openweathermap.org/img/w/' + icon +'.png';
                var d = new Date(ob.dt_txt);
                var curr_d = new Date();
                var day = daynames[d.getDay()];

                var tr = document.createElement('tr');
                console.log(d);
                tr.innerHTML = '<td class="dttime">'+ day.slice(0, 3) +'</td><td class="w_icon"><img src="'+icon+'"></td><td class="rgt"><p class="lowtemp"><span class="tempx">'+ Math.round((ob.main.temp) * 9 / 5 + 32) +'&#176;<sub class="centg">F</sub></span></p></td>';     
                ulx.appendChild(tr);
            }
            $('.weather_ulwrap').append(ulx);
        }
    }
    catch(e){
        console.log('error: ', e);
    }
}
function initWeather()
{
    var wrapperweather = document.createElement("div");
    wrapperweather.setAttribute("id","wrapperweather");

    var forecast = document.createElement("div");
    forecast.setAttribute("id","forecast");

    wrapperweather.appendChild(forecast);

    $('.weathersec').append(wrapperweather)
}

$(".localweather").click(function(){
	$(".weatherBox").toggleClass("showWeather");
});

$(document).keyup(function(e){
    if(e.keyCode === 27){
    	if($(".weatherBox").hasClass("showWeather")){
        	$(".weatherBox").removeClass("showWeather");
    	}
    }
});
