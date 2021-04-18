class Produs{
   
    constructor(nume_produs,cantitate)
    {
        this.nume_produs=nume_produs;
        this.cantitate=cantitate;
        this.id=0;
    }

  }

function Adauga()
{

var cantitate= document.getElementsByName('cantitate')[0].value;
var nume_produs = document.getElementsByName( 'nume_produs' )[0].value;
var prod2=new Produs(nume_produs,cantitate)


document.getElementById("placeholder").innerHTML =
"Ati comandat un/o " + prod2.nume_produs + " in cantitate de "+prod2.cantitate+" produse"; 
}


 