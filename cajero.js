
class billete
{
    constructor(v,c)
    {
        this.valor = v;
        this. cantidad = c;
    }
}
    function entregarDinero()
{
            var t = document.getElementById("dinero");
            dinero = parseInt( t.value ); 
            for(var bi of caja)
    {
            if( dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
                entregado.push( new billete(bi.valor, papeles) );
                dinero = dinero - (bi.valor * papeles);
        }
    }
                if(dinero > 0)
        {
                resultado.innerHTML ="dinero insuficiente";
        }
            else
    {
            for( var e of entregado)
        {
        if(e.cantidad > 0)
            {
                resultado.innerHTML +=  + e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
}

var caja = [];
var entregado = [];
caja.push(new billete(1000,20));
caja.push(new billete(500,30));
caja.push(new billete(200,20));
caja.push(new billete(100,20));
caja.push(new billete(50,20));
caja.push(new billete(20,20));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado")
var b = document.getElementById("extraer")
document.addEventListener("click", entregarDinero);
