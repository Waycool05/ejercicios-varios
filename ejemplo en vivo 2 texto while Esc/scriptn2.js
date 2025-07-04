// let palabra = prompt("Introduce una texto: ","escribe ESC para Cancelar");

// while (palabra !="ESC" && palabra===null){
//     let palabra = prompt("Introduce un texto: ","escribe ESC para Cancelar");
//     for (i=0; i<10;i++);
//         let concatPalabra = palabra + "Introduce el texto siguiente: "+i;
//     alert(concatPalabra);
//     }
//     palabra = prompt("Introduce un texto:", "escribe ESC para Cancelar");
// }
// alert("Operación finalizada.");

// let palabra = prompt("Introduce un texto:", "escribe ESC para Cancelar");

// while (palabra !== "ESC" && palabra !== null) {
//     for (let i = 1; i <= 10; i++) {
//         palabra = prompt("Introduce un texto:", "escribe ESC para Cancelar");
//         let concatPalabra = palabra;
//         let resultado = concatPalabra + " " + palabra;
//         alert(resultado);
//     }
    
// }
// alert("Operación finalizada.");

let resultado = ""; // Variable para almacenar el resultado concatenado
let continuar = true; // Controlar el bucle

while (continuar) {
    // Pedimos un texto al usuario
    let input = prompt("Ingresa un texto (o escribe 'ESC' para salir):");

    // Verificamos si el usuario quiere salir
    if (input === "ESC") {
        continuar = false; // Cambiamos el control del bucle
    } else {
        // Concatenamos el nuevo texto ingresado
        resultado += input + " "; // Esto es Concatenar!!!!!!""
        // Mostramos el resultado concatenado
        alert("Resultado acumulado: " + resultado);
    }
}

alert("Programa finalizado. Resultado final: " + resultado);
