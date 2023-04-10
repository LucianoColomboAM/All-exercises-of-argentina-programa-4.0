
		/////////////////////Ejercicio 1////////////////////////

	// Definimos el objeto Rectangulo
const Rectangulo = {
  ancho: 0,
  largo: 0,
  // Definimos el método perimetro()
  perimetro: function() {
    return (2 * this.ancho) + (2 * this.largo);
  },
  // Definimos el método area()
  area: function() {
    return this.ancho * this.largo;
  }
};

// Ejemplo de uso:
Rectangulo.ancho = 5;
Rectangulo.largo = 10;
document.write(Rectangulo.perimetro()); // Output: 30
document.write("<br>");
document.write(Rectangulo.area()); // Output: 5hr

		/////////////////////Ejercicio 2////////////////////////
document.write("<hr> Ejercicio 2<hr>");

function nueva_cuenta(numerodecuenta, balance) {
  return {
    numerodecuenta,
    balance,

    depositar(cantidad) {
      this.balance += cantidad;
      return document.write("El balance de " + this.numerodecuenta + " ahora es " + this.balance);
    },
    extraer(cantidad) {
      this.balance -= cantidad;
      return document.write("El balance de " + this.numerodecuenta + " ahora es " + this.balance);
    },
    transferir(cantidad, cuenta) {
      this.balance -= cantidad;
      cuenta.balance += cantidad;
      return document.write("El balance de " + cuenta.numerodecuenta + " ahora es " + cuenta.balance + "<br> y el balance de " + this.numerodecuenta + " ahora es " + this.balance);
    }
  }
}

let cuenta1 = nueva_cuenta('cuenta1', 50);
cuenta1.depositar(50);
document.write("<br>");
cuenta1.extraer(25);
document.write("<br>");
let cuenta2 = nueva_cuenta('cuenta2', 25);
cuenta2.depositar(50);
document.write("<br>");
cuenta2.extraer(25);
document.write("<br>");
cuenta1.transferir(10, cuenta2);







/*
const Cuenta_de_Banco = {
numerodecuenta:0,
balance:0,

depositar: function(cantidad){
	this.balance+= cantidad;
	return document.write("Tu balance ahora es " + this.balance);
},
extraer: function(cantidad){
	this.balance -=cantidad;
	return document.write("Tu balance ahora es " + this.balance);
},
transferir: function(cantidad,cuenta){
	this.balance -= cantidad;
	return document.write("Tu balance ahora es " + this.balance);
},


};



Cuenta_de_Banco.depositar(50);
Cuenta_de_Banco.extraer(25);
Cuenta_de_Banco.transferir(13);

*/