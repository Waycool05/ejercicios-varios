let ingreseNumero = prompt("ingrese un número:");

let ingreseNumero2= prompt("ingrese el número a sumar: ");

if ((ingreseNumero === null || ingreseNumero2 === null)) {
    alert("operación cancelada por el usuario.");
} else {
    let num1 = parseInt(ingreseNumero);
    let num2 = parseInt(ingreseNumero2);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
    } else {
        let resultado = num1 + num2;
        alert("El resultado de la suma es: " + resultado);
    }

}



