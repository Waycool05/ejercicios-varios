
//  let ingresarNumero = parseInt(prompt("Ingrese un número:"));

//  if (ingresarNumero === null) {
//     alert("Operación cancelada.");    

//  } else {
//     console.log("El número ingresado es: " + ingresarNumero);
//  }



// let nombre = prompt("Por favor, ingresa tu nombre:");

// if (nombre === null) {
//   // El usuario presionó Cancelar
//   alert("El usuario canceló la entrada.");
// } else {
//   // El usuario ingresó un valor
//   alert("Hola, " + nombre + "!");
// }

let ingreseNumero = (prompt("ingrese un numero a multiplicar:"));

if (ingreseNumero === null) {
    alert("Operacion cancelada.");
}
else if (isNaN(parseInt(ingreseNumero))) {
    alert("el valor ingresado no es un numero");
} else {
    for (i=0; i<10; i++) {
        alert("el resultado de " + parseInt(ingreseNumero) + " x " + (i+1) + " es: " + (parseInt(ingreseNumero) * (i+1)));
    }
}
