const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
// const parrafo = document.getElementsByClassName('.parrafo');
const pid = document.querySelector('#pid');
// const pid = document.getElementsById('#pid');
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