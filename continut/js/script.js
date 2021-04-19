
function funct1()
{
    
init_canvas();
var today = new Date();
var hh=today.getHours();
var minmin=today.getMinutes();
var ss = today.getSeconds();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
time = hh+":"+minmin+":"+ss;

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
    document.getElementById("locatia").innerHTML = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;

    })
}
else {
    document.getElementById("locatia").innerHTML = "Geolocation is not supported by this browser.";
  }

document.getElementById('data').innerHTML = today;
document.getElementById('ora').innerHTML = time;
document.getElementById('adresaUrl').innerHTML=window.location.href;
document.getElementById('NBrowser').innerHTML=navigator.appName;
document.getElementById('VBrowser').innerHTML=navigator.appVersion;
document.getElementById('OS').innerHTML=navigator.platform;
}
function f2()
{
    var numbers=[];
    var array=[];
    for(var i=0;i<8;i++)
    {
        var add=true;
        var randomNumber= Math.floor(Math.random()*255);
        for(var y=0;y<255;y++)
        {
            if(numbers[y]==randomNumber)
            {
                add=false;
            }
        }
        if (add)
        {
            var x =randomNumber.toString(16);
            x=x.toUpperCase();
            numbers.push(x);
        }
        else
        {
            i--;
        }
        var highestNumber = 0;
        for(var m = 0; m < numbers.length; m++) {
            for(var n = m + 1; n < numbers.length; n++) {
                if(numbers[n] < numbers[m]) {
                    highestNumber = numbers[m];
                    numbers[m] = numbers[n];
                    numbers[n] = highestNumber;
                }
            }
        }
    }
    document.getElementById("result").innerHTML=numbers.join(" - ");
   
    for(var i=0;i<8;i++)
        array[i]=document.getElementById("val"+i).value;

    var index=0;
    for(var i=0;i<numbers.length;i+=1)
    {
        for(var j=0;j<array.length;j++)
            if(array[j]===numbers[i])
            {
                index++;
            }
    }
    if(index==8)
    {
        document.getElementById("result").innerHTML="Bravo ba! = castigat dupa atata timp..";

    }
    else
    if(index==0)
    {
        document.getElementById("result").innerHTML="Naspa, mai incearca...";


    }
    else
    {
        document.getElementById("result").innerHTML="Ai nimerit de "+index+" ori!<br>Felicitari!";
    }
    document.getElementById("Numarere_Castigatoare").innerHTML=numbers;

}

var points =[];

function init_canvas()
{
  var canvas = document.getElementById('canvas');
  canvas.addEventListener('click', on_click,true);
}

function on_click(ev)
{
  points[points.length] = ev.offsetX;
  points[points.length] = ev.offsetY;
  if(points.length == 4)
  {
    desenare(points);
    points = [];
  }
}

function desenare(points)
{
  var canvas = document.getElementById('canvas');
  var contur = document.getElementById("border").value;
  var umplere = document.getElementById("fill").value;
  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = umplere;
    ctx.strokeStyle = contur;
    var width = 0, height = 0;
    var ok = true;

    if(points[2] > points[0])
    {
      width = points[2] - points[0];
    }
    else
    {
      ok = false;
    }

    if(points[3] > points[1])
    {
      height = points[3] - points[1];
    }
    else
    {
      ok = false;
    }

    if(ok)
    {
      ctx.rect(points[0], points[1], width, height);
      ctx.fill();
      ctx.stroke();
    }
}
}
