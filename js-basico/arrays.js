

// crear un array
//                0         1       2       3        4     esta es la forma de conteo del index de los arrays
var frutas = ["Manzana", "Pera", "Fresa", "Coco", "banana"]

// metodos para los arrays
//1
frutas.length // en este caso te devuelve las longitud del array que seria 5 osea la cantidad de valores

//2
frutas[2]// te devuelve "Fresa" o el valor que este asosiado a el numero del index 

//3
frutas.pop() // me eliminaria el ultimo elemento del array

//4
frutas.push("Piña")// me agrega un elemento al final del array

//5 
frutas.shift() // me elimina el primer elemento del array 
// los metodos shift te devuelven el valor de como quedaria el nuevo array 

//6
frutas.unshift("Papaya")// agrega un nuevo elemento al principio del array

//7
frutas.slice(2) //remueve el numero de elementos de le indiquemos empieza desde el 0
// frutas = ["Manzana", "Pera", "Fresa", "Coco", "Banana"]
// frutas.slice(2)
// frutas = ["Fresa", "Coco", "Banana"]

//8 
frutas.splice()// en un slice pero controlado parametro 1 (posicion de inicio) parametro 2 (numero de elemtos a eliminar)
// frutas = ["Manzana", "Pera", "Fresa", "Coco", "Banana"]
// frutas.splice(2, 2)
// frutas = ["Manzana", "Pera","Banana"]

//8.5
frutas.splice()//si le agregamos un tercer parametro agrega un elemento 
// 1 (posicion de inicio) 2 (elemtos a remover) 3 ( elementos para agregar)
// frutas = ["Manzana", "Pera", "Banana"]
// frutas.splice(2, 1, "Fresa")
// frutas = ["Manzana", "Pera","Fresa"] mequito Banana y me la cambio por Fresa


