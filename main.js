var operandoa;
var operandob;
var operacion;

function init(){
    var pantalla = document.getElementById("pantalla");
    var c = document.getElementById("c");
    var borrar = document.getElementById('borrar');
    var dividir = document.getElementById('dividir');
    var multiplicar = document.getElementById('multiplicar');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var restar = document.getElementById('restar');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var sumar = document.getElementById('sumar');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var igual = document.getElementById('igual');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
    
    uno.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "1"
    }
    dos.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "2"
    }
    tres.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "3"
    }
    cuatro.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "4"
    }
    cinco.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "5"
    }
    seis.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "6"
    }
    siete.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "7"
    }
    ocho.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "8"
    }
    nueve.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "9"
    }
    cero.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "0"
    }
    punto.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "."
    }
    borrar.onclick = function(e){
        borrar.addEventListener('click', borrarNumeros)
    }


    function borrarNumeros() {
        const contenido = pantalla.textContent;
        if (contenido.length > 0) {
          // Eliminar el primer número
          pantalla.textContent = contenido.substring(0, contenido.length - 1);
          
          // Llamar a la función recursivamente después de un tiempo
        }
      }



    c.onclick = function(e){
        resetear();
    }


    sumar.onclick = function(e){
        operandoa = pantalla.textContent;
        operacion = "+";
        limpiar();
    }
    restar.onclick = function(e){
        operandoa = pantalla.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicar.onclick = function(e){
        operandoa = pantalla.textContent;
        operacion = "*";
        limpiar();
    }
    dividir.onclick = function(e){
        operandoa = pantalla.textContent;
        operacion = "/";
        limpiar();
    }


    igual.onclick = function(e){
        operandob = pantalla.textContent;
        resolver();
    }
}

function limpiar(){
    pantalla.textContent ="";
}

function resetear(){
    pantalla.textContent ="";
    operandoa = 0;
    operandob = 0;
    operacion = "";

}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    pantalla.textContent = res;
  }