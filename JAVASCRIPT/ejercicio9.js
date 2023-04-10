window.onload = function() {
let contador_de_up_votes=0;

const up_vote=document.querySelector("button");

function aumentador_de_up_votes (){
  contador_de_up_votes++;
  up_vote.textContent=contador_de_up_votes;
};

up_vote.addEventListener("click", aumentador_de_up_votes);
/////////////////////////////////////////////////////////Ejercicio 2/////////////////////////////////////////////


document.getElementById("myForm").onsubmit = function() {myFunction()};

let para=document.createElement("p");

function myFunction() {
  const nombre=document.getElementById("nombre").value;
  const email=document.getElementById("email").value;
  //document.write(nombre+email);
  para.innerHTML=(`Nombre: ${nombre} - Email: ${email}`);
  document.body.appendChild(para);

  alert(`Nombre: ${nombre} - Email: ${email}`);
}

};
