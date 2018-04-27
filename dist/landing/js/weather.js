function weather( cityId, el ) {

  var container = document.getElementById(el);
  var forecast = document.getElementById('forecast');
  var list = document.getElementById('locations');
  var t;

  function setupEventBindings() {
    var search = document.getElementById('search');
    search.addEventListener('keyup', function(e){
      e.preventDefault();
      clearTimeout(t);
      t = setTimeout( getLocations( this.value ), 200 );
    })
  }

  function clearLocations() {
    list.innerHTML = '';
  }

  function buildWeatherQuery( cityId ) {
    var base_url = 'http://query.yahooapis.com/v1/public/yql';
    var query = encodeURIComponent('select * from weather.forecast where woeid=${cityId} AND u="c"');
    var query_url = '${base_url}?q=${query}&format=json';

    return query_url;
  }

  function buildLocationQuery( searchTerm ){
    var now = new Date();
    var base_url = 'http://query.yahooapis.com/v1/public/yql';
    var query = encodeURIComponent('select * from geo.places where text="${searchTerm}"');
    var apiQuery = base_url + '?q='+ query +'&rnd='+ now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() +'&format=json';

    return apiQuery;
  }

  function getLocations( searchTerm ){
    var query = buildLocationQuery( searchTerm );
    // send request to Yahoo
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', query, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == '200') {
        // console.log('data', xhr.responseText);
        showLocations(xhr.responseText);
      }
    };
    xhr.send();
  }

  function showLocations(data){
    var locations = JSON.parse(data);
    list.innerHTML = '';
    if (locations.query.results !== null) {
      var places = locations.query.results.place;
      if( Array.isArray(places)) {
        places.forEach( item => {
          var country = (item.country.content) ? item.country.content : '';
          var name = item.name;
          var admin = (item.admin1) ? item.admin1.content +', ' : '';
          var woeid = item.woeid;
          var li = document.createElement('li');
          var link = document.createElement('a');
          link.href = woeid;
          link.innerHTML = '${name}, ${admin}${country}';
          link.addEventListener('click', function(e){
            e.preventDefault();
            getWeatherData( woeid );
          })
          li.appendChild(link)
          list.appendChild(li);
        })
      }
    }
    console.log(locations);
  }

  function getWeatherData( cityId ) {
    var query = buildWeatherQuery( cityId );
    // send request to Yahoo
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', query, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == '200') {
        render(xhr.responseText);
      }
    };
    xhr.send();
  }

  function render(weatherData){
    var weather = JSON.parse(weatherData);
    var iconsData = icons;
    var forecastData = weather.query.results.channel.item.forecast;
    var description = weather.query.results.channel.item.description;
    var condition = weather.query.results.channel.item.condition;
    var location = weather.query.results.channel.location;
    var astronomy = weather.query.results.channel.astronomy;

    var result = iconsData['codes'].filter(function(item){
      return item.number == condition.code;
    });

    container.innerHTML = '<h2>${location.city}, ${location.region}</h2>'

    // current weather
    var today = document.createElement('div');
    today.classList.add('block', 'today');
    today.innerHTML = '<i class="wi ${result[0].class}"></i>
        <div class="weather type-small">
          <h3>Today</h3>
          <p>Currently ${condition.temp} &deg;C., and ${result[0].description}</p>
          <p>
            Sunrise: ${astronomy.sunrise} <br>
            Sunset: ${astronomy.sunset}
          </p>
        </div>';
    container.append(today);

    // clear forecast data
    forecast.innerHTML = '';

    // forecast
    forecastData.forEach( (day) => {
      var iconclass = iconsData['codes'].filter(function(item){
        return item.number == day.code;
      });
      var newDay = document.createElement('div');
      newDay.classList.add('block');
      newDay.innerHTML = '<div class="weather type-small">
        <i class="wi ${iconclass[0].class}"></i>
        <h4>${day.day}, ${day.date}</h4>
        <p>${day.text}</p>
        <ul>
          <li>High: ${day.high} &deg;C.</li>
          <li>Low: ${day.low} &deg;C.</li>
        </ul>
        </div>
      </div>';
      forecast.append(newDay);
    });
  }

  // initialize
  setupEventBindings();
  // start with default city it
  getWeatherData( cityId );
}