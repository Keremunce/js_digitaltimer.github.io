/* var tahmin1 = prompt("Zar Tahmini 1", 1);
var tahmin2 = prompt("Zar Tahmini 2", 1);
var tahminTamSayi1 = parseInt(tahmin1);
var tahminTamSayi2 = parseInt(tahmin2);
var totalSayi = tahminTamSayi1 + tahminTamSayi2;
console.log("Total Tahmininiz: " + totalSayi);

var random1 = Math.random();
var random2 = Math.random();
if (random1 < 1 || random2 < 1) {
    random1 = (random1 + 1) * 6;
    random2 = (random2 + 1) * 6;
    random1 = Math.floor(random1);
    random2 = Math.floor(random2);
    if (random1 > 6) {
        random1 = random1 % 6;

    }
    if (random2 > 6) {
        random2 = random2 % 6;
    }
    var zarTotal = random1 + random2;
    console.log("Total zar: " + zarTotal);

    if (zarTotal == totalSayi) {
        console.log("Tebrikler, totali bildiniz: ");
    } else { console.log("Aradaki Sayi Farki: " + (zarTotal - totalSayi).toString()); }
}
console.log(random1);
console.log(random2);*/

/*  function rastgeleisim(isim, soyisim) {
    var isimler = ["Can ", "Umut ", "Kerem ", "Burak "];
    var soyisim = ["Yıldırım", "Yılmaz", "Unce", "Alemdar"];

    for (var sayac = 0; sayac < isimler.length; sayac++) {
        var random1 = Math.floor(Math.random() * 4);
        var random2 = Math.floor(Math.random() * 4);
        console.log(isimler[random1] + soyisim[random2]);
    }
}
for (var counter = 0; counter < 10; counter++) {
    rastgeleisim();
} */





//-Saat -

var divSecond, divMinute, divHour;
divSecond = document.getElementById("second")
divMinute = document.getElementById("minute")
divHour = document.getElementById("Hour")
var hours, minutes, seconds;
var date = new Date();

function changeFormat(unit) {
    if (unit <= 9) {
        return "0" + unit;
    } else {
        return unit;
    }
}

hour = date.getHours();
minutes = date.getMinutes();
second = date.getSeconds();

function increase_second(second) {
    second += 1;
    if (second > 59) {
        minutes = increase_minute(minutes);
        second = 0;
    }
    return second;
}

function increase_minute(minutes) {
    minutes += 1;
    if (minutes > 59) {
        hour = increase_hour(hour);
        minute = 0;
    }
    return minutes;
}

function increase_hour(hour) {
    hour += 1;
    if (hour > 23) {
        hour = 0;
    }
    return hour;
}
setInterval(function() {

    second = increase_second(second);
    console.log(changeFormat(hour) + ":" + changeFormat(minutes) + ":" + changeFormat(second));
    document.getElementById("Thour").innerHTML = changeFormat(hour);
    document.getElementById("Tminute").innerHTML = changeFormat(minutes);
    document.getElementById("Tsecond").innerHTML = changeFormat(second);

}, 1000)