
		/////////////////////Ejercicio 1////////////////////////

	function comparacion(arreglo)
	{
		let num_mas_grande=0;
		let numero;	

			for(let i =0; i<arreglo.length;i++)
		{
			//document.write(arreglo[i] + " - ");

				if(arreglo[i] > num_mas_grande)
				{
				num_mas_grande=arreglo[i];	
				}
		}

		document.write(num_mas_grande);
	}

		/////////////////////Ejercicio 2////////////////////////

	function ejercicio2()
	{

		let arreglo=[1,2,3,4,5,6];
		document.write("<br>");
		
		for(let i=0;i<arreglo.length;i++)
		{
			document.write(arreglo[i] + " - ");
		}	

		document.write("<br>");
		arreglo.pop();
		
		for(let i=0;i<arreglo.length;i++)
		{
			document.write(arreglo[i] + " - ");
		}
		
		document.write("<br>");	
		arreglo.push(0);
 		
 		for(let i=0;i<arreglo.length;i++)
		{
			document.write(arreglo[i] + " - ");
		}
		
		document.write("<br>");
		arreglo.sort();
		
		for(let i=0;i<arreglo.length;i++)
		{
			document.write(arreglo[i] + " - ");
		}
		document.write("<br>");

	}

/////////////////////Ejercicio 3////////////////////////

window.onload = function() 
{
		const buton=document.querySelector("button");

		const colores=["red","green","blue","black"];
		function ejercicio3(){
			const contenedor=document.getElementById("contenedor");
			let i=0;
			
			while (i < colores.length) {
	        	const color = colores[i];
				const seccion = document.createElement('div');
		        seccion.style.backgroundColor = color;
		        seccion.style.height = '50px';
		        seccion.style.marginBottom = '10px';
		        contenedor.appendChild(seccion);
				 i++;
      		}
		}

		buton.addEventListener("click",ejercicio3);
			
		
	
}