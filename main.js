var valores = {}
var n1=null
var n2=null
var texto=""
var tipoOperacion = ""
function mostrarValor(n){
    document.getElementById("vista").innerHTML=texto
    if(n1==null)
    {
        n1=n
        texto+=n1
        document.getElementById("vista").innerHTML=texto
    }
    else if(n2==null){
        n2=n
        texto+=n2
        document.getElementById("vista").innerHTML=texto
    }
}


function operacion(op){
    if(n1!=null && tipoOperacion=="")
    switch(op){
        case -1:
            texto+="+"
            tipoOperacion="+"
            document.getElementById("vista").innerHTML=texto
        break
        case -2:
            texto+="-"
            tipoOperacion="-"
            document.getElementById("vista").innerHTML=texto
        break
        case -3:
            texto+="*"
            tipoOperacion="*"
            document.getElementById("vista").innerHTML=texto
        break
        case -4:
            texto+="/"
            tipoOperacion="/"
            document.getElementById("vista").innerHTML=texto
        break
    }
}


function calcular(){
    if(n2!=null){
        switch(tipoOperacion){
            case "+":
            document.getElementById("vista").innerHTML=n1+n2
            break
            case "-":
            document.getElementById("vista").innerHTML=n1-n2
            break
            case "/":
                document.getElementById("vista").innerHTML=n1/n2
            break
            case "*":
            document.getElementById("vista").innerHTML=n1*n2
            break
        }
    }
    document.getElementById("historial").innerHTML="Hola /n como estas"
    texto=""
    n1=null
    n2=null
    tipoOperacion=""
    
}