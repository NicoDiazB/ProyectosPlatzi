//hacer loop usando for 

//creamos una arrays con nombres 

var familia = ["daniel", "jorge", "maria", "lili","majo","nicolas"];

//creamos un una funcion para la impresion del nombre de cada integrante de la familia

function saludarFamiliar(familiar){
    console.log(`Hola como estas ${familiar}`);
}

// ahora creamos el loop con for que va a repetir la funtion por cada dato que tenga el array
//creamos una variable i que va a ser la cual le diga a nuestro navegador cuando parar el loop
for(var i = 0; i < familia.length; i++){
    saludarFamiliar(familia[i]);
}

//otra forma de hacer un loop con for para un array
//la variable familiar va a actuacar como el numero de cada uno de los indices que esta dentro del array 
for(familiar of familia){
    saludarFamiliar(familiar);
}

// hay un for in pero este te muestra son las keys osea el numero de los elemetos dentro del array mas no su valor 