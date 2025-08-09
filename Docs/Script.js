function mostrar(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Puedes mover funciones específicas de cada archivo JS aquí.
function mostrarTexto() {
  const input = document.getElementById('miInput');
  const resultado = document.getElementById('resultado');
  resultado.textContent = input.value;
}
