console.log(miNombre)

var miNombre = "nicolas"

// devuelve undefined ya que al llamar la variable con console.log y al no a ver inicializado la variable antes
//  javaScript define la variable y le pone de valor undefined

var miNombre2 = undefined;

console.log(miNombre2 + "soy un hoisting");

miNombre2 = "daniel";
// eso es como lo que haria el programa cuando no entuencra la variable niNombre2 la crea con un undefined y luego corre la funcion
// para despues cunado llega al momento donde inicializo la variable tome como valor "daniel"

// hoisting con funciones
hola();

function hola(){
    console.log("hola " + apellido)
}

//aqui lo que te devolveria la funcion en consola es un: "hola undefined" ya que al no encontrar la variable apellido
//  javascript crea la variable y le da como valor undefined