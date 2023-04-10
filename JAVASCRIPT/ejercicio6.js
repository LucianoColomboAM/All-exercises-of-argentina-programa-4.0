//Ejercicio 6 for
document.write("<hr>");
for (let i = 10; i >= 0; i--) {
	document.write( i + "<br>");	
}	
document.write("Despegue!<hr>");	

//ejercicio 6-2

for (let i=0 ; i <40 ; i+=2){
	document.write( i + ",");
} 

//ejercicio 6-3
document.write("<hr>");

for (let i=0 ; i <30 ; i+=2){
	document.write( i + ",");
}


//ejercicio 6-4
document.write("<hr>"); 
let mensaje;
do {
	 mensaje=prompt("Ingresa una frase");
	 document.write("<p>"+mensaje+"</p>")
} while (mensaje!="Fin");

//ejercicio 6-5
let confirmar;

do {
confirmar=confirm("Queres ver la pagina");
alert(confirmar);
}while(confirmar==false);


//ejercicio 6-6
document.write("<hr>");


let numero=0;
let cantidad=0;
let suma=0;
do {
	numero=parseInt(prompt("Ingresa un numero"));
	cantidad++;
	suma=suma+numero;
	 document.write("<br><p> La cantidad de numeros que pusiste fue: "+cantidad+"</p>");
	  document.write("<br><p> La suma de esos numeros que pusiste fue: "+suma+"</p>");

} while (numero!=0);