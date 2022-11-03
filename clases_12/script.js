const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
     const input1Parse = parseInt(input1.value, 10);
     const input2Parse = parseInt(input2.value, 10);
     const sumaInputs = (input1Parse + input2Parse);
     pResult.innerHTML = "Resultado: " + sumaInputs;
};