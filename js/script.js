function funct1()
{
    

var today = new Date();
var hh=today.getHours();
var minmin=today.getMinutes();
var ss = today.getSeconds();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
time = hh+":"+minmin+":"+ss;

document.getElementById('data').innerHTML = today;
document.getElementById('ora').innerHTML = time;
document.getElementById('adresaUrl').innerHTML=window.location.href;
document.getElementById('NBrowser').innerHTML=navigator.appName;
document.getElementById('VBrowser').innerHTML=navigator.appVersion;
document.getElementById('OS').innerHTML=navigator.platform;
document.getElementById('location').innerHTML=navigator.platform;


}