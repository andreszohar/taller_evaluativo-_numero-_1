/*
3. PROBLEMA: La luna de Endor pierde temperatura día a día,
para ello hay que hacer un monitoreo constante, Cree una
función de flecha que permita calcular la temperatura media de
la luna a partir de la temperatura máxima y mínima de cada día

*/

let tempMaxDay1=40
let tempMaxDay2=34
let tempMaxDay3=38
let tempMinDay1=20
let tempMinDay2=5
let tempMinDay3=10



//Función flecha
let temperaturaMedia=(tempMax,tempMin)=>(tempMax+tempMin)/2

console.log(temperaturaMedia(tempMaxDay1,tempMinDay1))




//Función Tradicional

/*

function temperaturaMedia(tempMax,tempMin){

    let suma=tempMax+tempMin
    let dividir=suma/2
    return(dividir)

}

console.log(temperaturaMedia(tempMaxDay3,tempMinDay3))
*/


