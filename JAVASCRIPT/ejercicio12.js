document.addEventListener("DOMContentLoaded", function() {
  // Obtener la lista de tareas del almacenamiento local si existe
  var listaTareas = JSON.parse(localStorage.getItem("listaTareas")) || [];

  // Renderizar la lista de tareas al cargar la página
  renderizarListaTareas();

  // Agregar tarea al hacer clic en el botón "Agregar"
  document.getElementById("btn-agregar").addEventListener("click", function() {
    var tarea = document.getElementById("input-tarea").value.trim();
    if (tarea) {
      // Agregar tarea a la lista
      listaTareas.push(tarea);
      // Guardar la lista de tareas en el almacenamiento local
      localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
      // Limpiar el campo de entrada y renderizar la lista de tareas actualizada
      document.getElementById("input-tarea").value = "";
      renderizarListaTareas();
    }
  });

  // Función para renderizar la lista de tareas
  function renderizarListaTareas() {
    var lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    for (var i = 0; i < listaTareas.length; i++) {
      var tarea = listaTareas[i];
      var item = document.createElement("li");
      item.textContent = tarea;
      lista.appendChild(item);
    }
  }



///EJERCICIO 2///
const nombreUsuario = localStorage.getItem('nombreUsuario');

if (nombreUsuario) {
  document.getElementById('nombre-usuario').textContent = nombreUsuario;
} else {
  const nombreDefault = 'Juan';
  localStorage.setItem('nombreUsuario', nombreDefault);
  document.getElementById('nombre-usuario').textContent = nombreDefault;
}

function cambiarNombre() {
  const nuevoNombre = prompt('Ingresa tu nuevo nombre:');
  localStorage.setItem('nombreUsuario', nuevoNombre);
  document.getElementById('nombre-usuario').textContent = nuevoNombre;
}
});