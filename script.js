var globalInputA = null;
var globalInputB = null;
var isEditing = false;

var globalFunctions = [];
function start() {
    globalInputA = getValueOfDefault('#inputA');
    globalInputB = getValueOfDefault('#inputB');
    preventFormSubmit();
    valuesFunctions();
    render();
}

function valuesFunctions() {    
    globalFunctions = [];  
    var valorSoma = globaNum.soma(globalInputA, globalInputB);
    globalFunctions.push(valorSoma);
    
    var valorSubtracao = globaNum.subtracao(globalInputA, globalInputB);
    globalFunctions.push(valorSubtracao);

    var valorSubtracaoI = globaNum.subtracaoI(globalInputA, globalInputB);
    globalFunctions.push(valorSubtracaoI);

    var valorMult = globaNum.mult(globalInputA, globalInputB);
    globalFunctions.push(valorMult);

    var valorDiv = globaNum.div(globalInputA, globalInputB);
    globalFunctions.push(valorDiv);

    var valorDivI = globaNum.divI(globalInputA, globalInputB);
    globalFunctions.push(valorDivI);

    var valorQuadradoA = globaNum.quadradoA(globalInputA);
    globalFunctions.push(valorQuadradoA);

    var valorQuadradoB = globaNum.quadradoB(globalInputB);
    globalFunctions.push(valorQuadradoB);

    var valorDivisorA = globaNum.divisorA(globalInputA);
    globalFunctions.push(valorDivisorA);

    var valorDivisorB = globaNum.divisorB(globalInputB);
    globalFunctions.push(valorDivisorB);

    var valorFatorialA = globaNum.fatorialA(globalInputA);
    globalFunctions.push(valorFatorialA);

    var valorFatorialB = globaNum.fatorialB(globalInputB);
    globalFunctions.push(valorFatorialB);
}

function preventFormSubmit() {
    function handleFormSubmit(event){
        event.preventDefault();
    }
    
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function getValueOfDefault(id) {
    var valueInput = document.querySelector(id).value;
    var valor = 0;
    if(valueInput) {
        valor = parseInt(valueInput);
    }
    return valor;
}

function render () {
    function createSpan(name) {
        var span = document.createElement('span');
            span.textContent = name;
            return span;
    }
    
    var divNames = document.querySelector('.inputs');
    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for (var i = 0; i < globalFunctions.length; i++) {
        var currentNum = globalFunctions[i];

        var li = document.createElement('li');
        var span = createSpan(currentNum, i);

        li.appendChild(span);
        ul.appendChild(li);
    }

   divNames.appendChild(ul);
}

function soma(a, b) {
    var resultValue = a+b;
    return "Valor da A + B = "+ resultValue;
}

function subtracao(a, b) {
    var resultValue = a-b;
    return"Valor de A - B = " + resultValue;   
}

function subtracaoI(a, b) {
    var resultValue = b-a;
    return"Valor da B - A = " + resultValue; 
}

function mult(a, b) {
    var resultValue = a*b;
    return"Valor da A * B = " + resultValue; 
}

function div(a, b) {
    if(b === 0) {
       return "Divisão por 0";       
    } else {
        return"Valor da A / B = " + a/b;
    }

}

function divI(a, b) {
    if(a === 0) {
        return "Divisão por 0";       
     } else {
         return"Valor da B / A = " + a/b;
     }
}

function quadradoA (a) {
    return"Valor da A² = " + a*a;
}

function quadradoB (b) {
    return"Valor da B² = " + b*b;
}

function divisorA (a) {
    var div = [];
    var num = 0;
    for(i=1; i <= a; i++){
        ++num;
        var resto = a%num;
        if(resto == 0){
            div.push(num);
        }
    }
    return"Divisores de A = " + div;
}

function divisorB (b) {
    var divB = [];
    var numB = 0;
    for(i=1; i <= b; i++){
        ++numB;
        var resto = b%numB;
        if(resto == 0){
            divB.push(numB);
        }        
    }
    return"Divisores de B = " + divB;
}

function fatorialA (a) {
    if(a<=21){
        if(a<0) {

            return 'Valor deve ser maior ou igual a zero';
          
            // para valor = 0  ou igual a 1
          } else if ( (a == 0) || (a == 1) ) {
    
            return 0;
           
          } else {
    
            var acumula = 1;
            for(x=a;x>1;x--) {
              acumula = acumula * x;
            }
            return'Fatorial de A = '+ acumula;
          } 
    } else {
        return 'Número muito grande';
    }
}

function fatorialB (b) {
    if(b<=21){
        if(b<0) {

            return 'Valor deve ser maior ou igual a zero';
          
            // para valor = 0  ou igual a 1
          } else if ( (b == 0) || (b == 1) ) {
    
            return 0;
           
          } else {
    
            var acumula = 1;
            for(x=b;x>1;x--) {
              acumula = acumula * x;
            }
            return 'Fatorial de B = '+ acumula;
          } 
    } else {
        return 'Número muito grande';
    }
}

var globaNum = {
    soma: soma,
    subtracao: subtracao,
    subtracaoI: subtracaoI,
    mult: mult,
    div: div,
    divI: divI,
    quadradoA: quadradoA,
    quadradoB: quadradoB,
    divisorA: divisorA,
    divisorB: divisorB,
    fatorialA:fatorialA,
    fatorialB:fatorialB
};

console.log(globalFunctions);

start(); 