// vamos a usar el loop while 

//volvemos a crear un array 

var frutas = ["Pera", "Mora", "Manzana", "Banana", "Papaya", "Fresa" ]

//cre la funcion que me va a impirmir el valor de cada elemto dentro de array

function listadoDeFrutas(fruta){
    console.log(`Tienes en la bolsa una ${fruta}`);
}

// ahora creamos el loop con while para que me vaya sacando el nombre de cada fruta que tengo en mi array
// le ponemos que mientras nuestro array frutas sea mayor a 0 haga el ciclo 
while (frutas.length > 0 ){
    console.log(frutas); // esto es para ver como el shift va sacando cada parametro del array hasta que queda vacio
    var fruta = frutas.shift();  // creamos la variable fruta que lo que va a ser es contener la primera variable del array que saco con el metodo shift
    listadoDeFrutas(fruta);
}

// la otra forma de hacerlo seria creando una variable i para no modificar el array

var i = 0 

while(i < frutas.length){
    listadoDeFrutas(frutas[i]);
    i ++; //hacemos que 1 vaya sumando 1 para que vaya sacando cada una de las frutas del array y tambien el loop tenga un final 
}