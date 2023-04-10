//Ejercicio 5
let numero = prompt("Ingrese un numero");

if (numero > 0){
document.write("El numero es positivo");
}else if (numero < 0){
document.write("El numero es negativo");
}else if (numero == 0){
document.write("El numero es cero");
}else{document.write("No es un numero");
}


//ejercicio 5-2
let confirmar = confirm("Queres recibir notificaciones por mail");
//alert (confirmar);
if (confirmar)
{
let email = prompt("Escribi tu mail");
let edad = prompt("Deci tu edad");
if (edad >=18){
document.write("<br>Tu mail es: " + email);
}else{
document.write("<br>No tiene la edad suficiente");
}
}