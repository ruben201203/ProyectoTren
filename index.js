//let ratio = 7
//let miEdad = 20
//let edadPerro = miEdad*ratio
//console.log("Mis años en perro son " + edadPerro); 
//
//let cuentas = 5
//
//cuentas = cuentas + 2
//cuentas = cuentas - 100
//console.log(cuentas)


//let bonusPoints = 50
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 100
//console.log(bonusPoints)
//bonusPoints = bonusPoints - 25
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 30
//console.log(bonusPoints)

/**
 * Pseudocodigo
 * Inicialice el conteo de la app en 0
 * Lean los clicks con el boton de incremento
 * Incremento la variable de conteo de manera que cuando haga click, sumo gente
 * Cambio el recuento en el HTML para reflejar el nuevo recuento de personas
 */

//function increment(){
//    console.log("El boton ha sido pulsado");
//}
//
//increment()

//Hazme una funcion que se llame cuenta atras y que haga una cuenta atras del 5 al 1


/**function CuentaAtras(){
/**    console.log(5);
/**    console.log(4);
/**    console.log(3);
/**    console.log(2);
/**    console.log(1);
/**}
/**CuentaAtras()

/**
 * cuentame los minutos totales en los que un piloto da vueltas a un circuito.
 * tu piloto va a dar de 3 a 5 vueltas, tu elijes. la funcion tiene que calcular el tiempo total
 * que ha gastado en dar esas vueltas
 * 
 * 3 variables 
 * 1 fucion
 * llamada funcion
 */


//let min = 3
//let vuelta = 1
//
//function circuito(){
//    let total = min*vuelta
//    console.log(total);
//    vuelta = vuelta + 1
//    total = min*vuelta
//    console.log(total);
//    vuelta = vuelta + 1
//    total = min*vuelta
//    console.log(total);
//    vuelta = vuelta + 1
//    total = min*vuelta
//    console.log(total);
//    vuelta = vuelta + 1
//    total = min*vuelta
//    console.log(total);
//    vuelta = vuelta + 1
//}
//circuito()


/**let vueltas = 3
/**let tiempovueltas= 10
/**let tiempototal = tiempovueltas*vueltas
/**
/**function vueltasPiloto(){
/**    console.log(tiempototal);
/**    console.log("el piloto ha tardado " + tiempototal + " minutos en dar las vueltas");
/**}
vueltasPiloto()*/



//let vuelta1 = 2.3
//let vuelta2 = 3.2
//let vuelta3 = 4.1
//
//function tiemptovueltastotales() {
//    let tiemptovueltastotales = vuelta1+vuelta2+vuelta3
//    console.log("el piloto ha tardado " + tiemptovueltastotales + " minutos en dar las vueltas")
//}
//tiemptovueltastotales()

//Creame una funcion que incrementa su valor en 1 y que sea ejecutada 3 veces
//trabaja conuna variable que previamente se llame vueltascompletas

//let vueltasCompletadas = 0
//
//function incrementovueltas(){
//  vueltasCompletadas = vueltasCompletadas + 1
//}
//
//incrementovueltas()
//incrementovueltas()
//incrementovueltas()
//
//console.log(vueltasCompletadas);


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-El")
let count = 0


function increment(){
    count = count + 1
    countEl.innerText = count
}


function decrement() {
    count = count - 1
    countEl.innerText = count
    }  

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
}
