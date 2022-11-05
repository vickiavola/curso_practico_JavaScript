const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

formulario.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
     event.preventDefault();
     const input1Parse = parseInt(input1.value, 10);
     const input2Parse = parseInt(input2.value, 10);
     const sumaInputs = (input1Parse + input2Parse);
     pResult.innerHTML = "Resultado: " + sumaInputs;
};

/*
function sumarInputValues() {
     const sumaInputs = input1.value + input2.value;
     pResult.innerText = "Resultado: " + sumaInputs;
}
*/
