/*
2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes
códigos de acceso a las naves de guerra los cuáles reposan en
la base de datos central, para ello debe programar una función
que permita recibir la palabra clave de cada nave y separar
imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el
siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn

*/
let texto="ARQ2555: Sara Bel-Sun";
let texto2="ARQ2556: Nodin Chavdri";
let texto3="ARQ2557: Finn";


/*
let divide=texto.split(": ")[1];
console.log(divide);
*/


//Reto en menos lineas o función flecha 
let clasificarNombre=(codigo)=>console.log(codigo.split(": ")[1]);


console.log(clasificarNombre(texto))
console.log(clasificarNombre(texto2))
console.log(clasificarNombre(texto3))


//Forma larga

/*
function dividirCodigo(codigo){

    let dividirTexto=codigo.split(": ")[1]
    return(dividirTexto)

}

console.log(dividirCodigo(texto))
console.log(dividirCodigo(texto2))
console.log(dividirCodigo(texto3))
*/