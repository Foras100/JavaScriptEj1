var valores = {}
var n1=null
var n2=null
var texto=""
var tipoOperacion = ""

function mostrarValor(n){
    
    texto+=n
    document.getElementById("vista").innerHTML=texto
}


function operacion(op){
    if(texto!="" && tipoOperacion=="")
    switch(op){
        case -1:
            n1=Number(texto)
            texto+="+"
            tipoOperacion="+"
            document.getElementById("vista").innerHTML=texto
        break
        case -2:
            n1=Number(texto)
            texto+="-"
            tipoOperacion="-"
            document.getElementById("vista").innerHTML=texto
        break
        case -3:
            n1=Number(texto)
            texto+="*"
            tipoOperacion="*"
            document.getElementById("vista").innerHTML=texto
        break
        case -4:
            n1=Number(texto)
            texto+="/"
            tipoOperacion="/"
            document.getElementById("vista").innerHTML=texto
        break
    }
}


function calcular(){
    if(n1!=null && tipoOperacion!=""){
        let renglon;
        switch(tipoOperacion){
            case "+":
                renglon=texto.split("+")
                n2=Number(renglon[1])
                document.getElementById("vista").innerHTML=(texto=texto+"="+n1+n2)
            break
            case "-":
                renglon=texto.split("-")
                n2=Number(renglon[1])
                document.getElementById("vista").innerHTML=(texto=texto+"="+n1-n2)
            break
            case "/":
                renglon=texto.split("/")
                n2=Number(renglon[1])
                document.getElementById("vista").innerHTML=(texto=texto+"="+n1/n2)
            break
            case "*":
                renglon=texto.split("*")
                n2=Number(renglon[1])
                document.getElementById("vista").innerHTML=(texto=texto+"="+n1*n2)
            break
        }
    }
    agregarHistorial(texto)
    texto=""
    n1=null
    n2=null
    tipoOperacion=""

    function agregarHistorial(t){   

        let unNodo = document.createElement("li")
        unNodo.classList.add("list-group-item")
        let unNodoTexto = document.createTextNode(t)
        unNodo.appendChild(unNodoTexto)
        listaHistorial.appendChild(unNodo)
    
    
}
}