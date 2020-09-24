var globalInputA = null;
var globalInputB = null;
var isEditing = false;

var globalFunctions = [];
function start() {
    globalInputA = getValueOfDefault('#inputA');
    globalInputB = getValueOfDefault('#inputB');
    preventFormSubmit();
    valuesFunctions();
    // activeInput();
    render();
}

function valuesFunctions() {      
    var valorSoma = globaNum.Soma(globalInputA, globalInputB);
    globalFunctions.push(valorSoma);
    console.log();
    activeInput();
    
    var valorSubtracao = globaNum.Subtracao(globalInputA, globalInputB);
    globalFunctions.push(valorSubtracao);

    var valorSubtracaoI = globaNum.SubtracaoI(globalInputA, globalInputB);
    globalFunctions.push(valorSubtracaoI);

    var valorMult = globaNum.Mult(globalInputA, globalInputB);
    globalFunctions.push(valorMult);

    var valorDiv = globaNum.Div(globalInputA, globalInputB);
    globalFunctions.push(valorDiv);

    var valorDivI = globaNum.DivI(globalInputA, globalInputB);
    globalFunctions.push(valorDivI);

    var valorQuadradoA = globaNum.QuadradoA(globalInputA);
    globalFunctions.push(valorQuadradoA);

    var valorQuadradoB = globaNum.QuadradoB(globalInputB);
    globalFunctions.push(valorQuadradoB);

    var valorDivisorA = globaNum.DivisorA(globalInputA);
    globalFunctions.push(valorDivisorA);

    var valorDivisorB = globaNum.DivisorB(globalInputB);
    globalFunctions.push(valorDivisorB);

    var valorFatorialA = globaNum.FatorialA(globalInputA);
    globalFunctions.push(valorFatorialA);

    var valorFatorialB = globaNum.FatorialB(globalInputB);
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

function activeInput() {
    function insertName (newName){
        // adiciona o valor no globalNames, para consulta console.log(globalNames)
        globalFunctions.push(newName); 
        // push empurra o valor para newName
    } 
    function updateName(newName) {
        // Atualizar nome selecionado
        globalFunctions[currentIndex] = newName;
    }

    function handleTyping(event){
        if(event.key === 'Enter'){
            if (isEditing) {
                updateName(event.target.value);
            } else {
               insertName(event.target.value);
            }
            isEditing = false;
            render();
        }
    }

    start.addEventListener('keyup', handleTyping);
    start.focus();
    start.addEventListener('keyup', handleTyping);
    start.focus();
}

function Soma(a, b) {
    var resultValue = a+b;
    return "Valor da A + B = "+ resultValue;
}

function Subtracao(a, b) {
    var resultValue = a-b;
    return"Valor de A - B = " + resultValue;   
}

function SubtracaoI(a, b) {
    var resultValue = b-a;
    return"Valor da B - A = " + resultValue; 
}

function Mult(a, b) {
    var resultValue = a*b;
    return"Valor da A * B = " + resultValue; 
}

function Div(a, b) {
    if(b === 0) {
       return "Divisão por 0";       
    } else {
        return"Valor da A / B = " + a/b;
    }

}

function DivI(a, b) {
    if(a === 0) {
        return "Divisão por 0";       
     } else {
         return"Valor da B / A = " + a/b;
     }
}

function QuadradoA (a) {
    return"Valor da A² = " + a*a;
}

function QuadradoB (b) {
    return"Valor da B² = " + b*b;
}

function DivisorA (a) {
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

function DivisorB (b) {
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

function FatorialA (a) {
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

function FatorialB (b) {
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
    Soma: Soma,
    Subtracao: Subtracao,
    SubtracaoI: SubtracaoI,
    Mult: Mult,
    Div: Div,
    DivI: DivI,
    QuadradoA: QuadradoA,
    QuadradoB: QuadradoB,
    DivisorA: DivisorA,
    DivisorB: DivisorB,
    FatorialA:FatorialA,
    FatorialB:FatorialB
};

console.log(globalFunctions);

start(); 