// Declarativa aqui le esta dando nombre a la funcion 
// palabra de java + nombre que va a tener la funcion (parametro){}
function miFuncion(){
    return 3;
}

// con este tipo de  funcion puedo declarar la funcion y luego definirla
//ej aqui delcaro la funcion que quiero hacer
miFuncion2();

// luego la puedo definir
function miFuncion2(a, b ){
    return a + b 
}
// esto funciona de este modo porque cuando el lector lee el codigo primero carga la funciones y las variables pero el contenido de las variables
// solo se lee cuando el lector esta leyendo linea a linea el codigo
// llamas a la funcion por su nombre 
miFuncion();





// Expresión aqui le estan dando un nombre a la variable que contiene una funcion
//mas no tiene nombre la funcion
// las funciones de Expresion te permiten usar la funciones como argumentos
// para otras funciones 
//crear variable + nombre de variable = funtion(parametros){}
var miFuncion = function(a, b){
    return a + b;
}
//aqui estas llamando a la funcion con el nombre que tiene la variable que contiene la funcion
miFuncion(3,4);

//esto en consola te devolveria un 7 

// todo resultado creado en las funciones cuando los parametros
//son primitivos no alteran los parmetros fuera de la funcion

// el caso contrario pasa cuando los parametros son un array
//la funtionn si cambia el parametros de los array una vez ejecutada

// Scope Global

var nombre = "nicolas";

function fun(){
    var apellido = "Diaz";
    console.log(nombre + " " + apellido);
    //Scope Local
}

fun();

//esto en consola te devuelve "Nicolas Diaz" ya las variables definidas en scope global se puede usar en scope local (osea lo que esta dento de las funciones)
//Pero las variables en Scope Local no se pueden usar en scopee Global
//EJ
console.log(apellido)
// esto me devolveria error variable no definida ya que esta variable no existe en Global 