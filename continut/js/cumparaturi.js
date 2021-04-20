var id=1;
class Produs{
   
    constructor(nume_produs,cantitate)
    {
        this.nume_produs=nume_produs;
        this.cantitate=cantitate;
        this.id=1;
    }

  }

function Adauga()
{

var cantitate= document.getElementsByName('cantitate')[0].value;
var nume_produs = document.getElementsByName( 'nume_produs' )[0].value;
var prod2=new Produs(nume_produs,cantitate)


document.getElementById("placeholder").innerHTML +=
"<div class="+"placeholder"+"><div>"+id+"</div><div> " + prod2.nume_produs + " </div><div> "+prod2.cantitate+" </div><div>"; 
id++;
}


 