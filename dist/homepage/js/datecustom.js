function initClock(){
    alert('initClock');
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $(htmlStrings.Date).html(dayNames[newDate.getDay()] + '<br>' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate());
    $(htmlStrings.Datetranslate).html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ', ' + dayNames[newDate.getDay()]);

    setInterval(function() {
        var seconds = new Date().getSeconds();
        // Add a leading zero to seconds value
        $(htmlStrings.sec).html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    setInterval(function() {
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $(htmlStrings.min).html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function() {
        var hours = new Date().getHours();
        // Add a leading zero to the hours value
        $(htmlStrings.hours).html(returnHrs(hours));
    }, 1000);

    setInterval(function() {
        var hours = new Date().getHours();
        var ampm = hours >= 12 ? 'pm' : 'am';
        // Add a leading zero to the hours value
        $(htmlStrings.merediem).html(ampm);
    }, 1000);
    
}

function returnHrs(hours){
    if(hours == 0) return '12';
    else if(hours < 10) return '0' + hours;
    else if(hours < 12) return hours;
    else return hours - 12;
}