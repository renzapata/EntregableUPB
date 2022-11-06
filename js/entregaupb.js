
// seccion 4 button.onclick = 
function lista() {
  let html
  html= "<ol>";
  for (let i = 0; i <= 5; i++) {
    html = html + `<li>lista${i}</li>`;
  }
  html = html + "</ol>";
  html = html + "<br>" +  '<button class="myButton" onclick="cargar()"> Volver al inicio</button>'

  document.write(html);
}

function cargar(){
  html =   '<a id="btn_volver" href="#s1">volver al inicio</a>'
window.location.reload()}


//Boton Alerta
let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello! Esta alerta inicia 3 seg despues de ser llamada :)");
}


// Visible y no visible
window.onload = init;

function init() {
  var btnes, btnen;
  btnes = document.getElementById('btn_es');
  btnes.addEventListener('click', espanol);

  btnen = document.getElementById('btn_en');
  btnen.addEventListener('click', english);
}

function espanol() {
  document.getElementById('es1').style.display = 'block';
  document.getElementById('en1').style.display = 'none';
}

function english() {
  document.getElementById('en1').style.display = 'block';
  document.getElementById('es1').style.display = 'none';
}