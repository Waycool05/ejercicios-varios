// Pedimos un número al usuario
let numero = prompt("Ingresa un número:");

// Comprobamos si el usuario presionó "Cancelar"
if (numero === null) {
    alert("Operación cancelada por el usuario.");
} else {
    // Convertimos el valor ingresado a un número
    numero = parseInt(numero);

    // Verificamos si el valor ingresado es un número válido
    if (!isNaN(numero) && numero > 0) {
        // Repetimos el mensaje "Hola" la cantidad de veces que el usuario indicó
        for (let i = 0; i < numero; i++) {
            alert("Hola");
        }
    } else {
        alert("Por favor, ingresa un número válido mayor que 0.");
    }
}
