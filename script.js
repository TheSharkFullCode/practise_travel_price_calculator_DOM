// alert("hello world")
const body = document.querySelector("body");
const div = document.createElement("div");
div.id = 'miDiv'
document.body.appendChild(div);
console.log(div);

const mainDiv = document.getElementById('miDiv');
// mainDiv.style.border = '2px solid blue';
console.log(mainDiv);


miDiv.style.width = '650px';
miDiv.style.display = 'flex';
miDiv.style.justifyContent = 'center';
miDiv.style.gap = '20px'
miDiv.style.textAlign = 'center'
miDiv.style.height = "100px"

 const DivTwo = document.createElement("div"); 
 DivTwo.setAttribute("id", "secondDiv");
 DivTwo.innerHTML ="Coste 0€" ;
//  DivTwo.style.border = "red solid"
 DivTwo.style.width = "500px"
console.log(DivTwo);

 
const TwoDiv = document.querySelector('#secondDiv');
 console.log(TwoDiv); 
//  seconDiv.innerText= "Hola Mundo!";
//  seconDiv.style.border = 'red solid';

 document.body.appendChild(DivTwo);
 console.log(DivTwo);
// -----------------------------------------
const buttonSubmit = document.createElement('input')
buttonSubmit.type ='submit';
const lineBreak = document.createElement("br");

console.log(lineBreak);


// const miDiv = document.querySelector('#miDiv'); 
// miDiv.appendChild(secondDiv);

// secondDiv.style.border = '1px solid red';
// secondDiv.style.width = '10px';

// console.log(secondDiv);




// myfirtsdiv.style.color = 'red solid'
// container.style.background = "red"
// ----------Formulario***------------------------
//creando form----------->
const form = document.createElement("form");
//creando select
let select = document.createElement("select");
//creando option
let option = document.createElement("option");
option.setAttribute('value','Barcelona');
option.text='Barcelona';


let option2 = document.createElement("option");
option2.setAttribute('value','Madrid')
option2.text='Madrid';

let option3 = document.createElement('option')
option3.setAttribute('value', 'Sevilla');
option3.text ='Sevilla';

let option4 = document.createElement('option')
option4.setAttribute('value', 'Valencia');
option4.text = 'Valencia'


const textSpan = document.createElement("span");
const textSpan2 = document.createElement("span");
console.log(textSpan);
textSpan.innerHTML = "span"
textSpan.textContent = 'Noches';
textSpan2.textContent = 'Por dias';


const boxInput = document.createElement("input");
const boxInput2 = document.createElement("input");
boxInput.type="number";
boxInput.id = 'textoOne'
boxInput2.type="number";
boxInput2.id="textoTwo";

boxInput.setAttribute('min','0');
boxInput.setAttribute('stp','1');
// "step" con valor "1" para asegurarnos de que sólo se permitan ingresar números enteros en los campos


boxInput2.setAttribute('min','0');
boxInput2.setAttribute('stp','1');

// Obtener los valores de los inputs
// const numero1 = parseInt(document.getElementById("textoOne").value);
// const numero2 = parseInt(document.getElementById("textoTwo").value);
 // Calcular la suma
// const suma = numero1 + numero2;
 // Mostrar la suma dentro del div de resultado
// document.getElementById("secondDiv").innerHTML = "La suma es: " + suma;

body.appendChild(form);
// body.appendChild(miDiv2);
miDiv.appendChild(form);
form.appendChild(select);
select.appendChild(option);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
miDiv.appendChild(textSpan);

miDiv.appendChild(textSpan2);

form.appendChild(boxInput);
form.appendChild(boxInput2);
form.appendChild(buttonSubmit)



const city = ["Barcelona","Madrid","Sevilla","Valencia"];


const night = 4;
const renta = 4;
const costeNihgth = 140;


function costeHotel(night){
    let multiply = night * costeNihgth
    return multiply    
}
console.log(costeHotel(7));
// -----------------------------------------------------

function calcularCoste(){


}
function costeAvion(){

}





