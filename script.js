var inputA = null;
var inputB = null;
var spanValorSomado = document.querySelector('#valorSomado');
function start() {
    inputA = getValueOfDefault('#inputA');
    inputB = getValueOfDefault('#inputB');
    preventFormSubmit();
    
    var vSoma = globaNum.Soma(inputA, inputB);
    console.log('valor somado', vSoma, typeof vSoma);
    spanValorSomado.innerHTML= vSoma;
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

function Soma(a, b) {
    return a + b;
}

function Subtracao(a, b) {
    return a - b;
}

function SubtracaoI(a, b) {
    return b - a;
}

function Mult(a, b) {
    return a * b;
}

function Div(a, b) {
    return a/b;
}

function DivI(a, b) {
    return b/a;
}

function QuadradoA (a) {
    return a*a;
}

function QuadradoB (b) {
    return b*b;
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

start(); 