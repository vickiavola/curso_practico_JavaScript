const h1 = document.querySelector('h1');

const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
// const parrafo = document.getElementsByClassName('parrafo');
const pid = document.querySelector('#pid');
//const pid = document.getElementsById('#pid');
const input = document.querySelector ('input');


console.log({
     h1,
     p,
     parrafo,
     pid,
     input,
});

//h1.innerHTML = 'Sustitución del Título';
//h1.innerHTML = 'Sustitución del Título <i> en italica';
h1.innerText = 'Sustitución del Título <i> en italica';

// seleccionamos la clase que queremos que nos muestre con el get
console.log(h1.getAttribute('class'));

// cambiamos el valor de una clase por otro, debemos indicarle primero la clase y luego el nuevo valor que queremos asignarle.
h1.setAttribute('class','keyboard');

// para agregarle una clase a un elemento
h1.classList.add('screen');

// para remover una clase de un elemento
h1.classList.remove('keyboard');

// para quitar en caso de que ya tenga la clase o si no la tiene se la ponemos - Lo veremos más adelante.
h1.classList.toggle('screen');

input.value="456";

//document.createElement('img');

//document.createElement('spam');

//Creamos un elemento con createElement
const img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/564x/aa/82/94/aa82945422412141dfca5aa64810b0cd.jpg');
console.log(img);

// Nos muestra la imagen después del contenido que ya teniamos en pid
//pid.append(img);

//Si queremos borrar el contenido anterior de pid hacemos.

pid.innerHTML= "";
pid.append(img);