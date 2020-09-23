var globalNum = [];
var inputA = null;
var inputB = null;

function start() {
    inputA = document.querySelector('#inputA');
    inputB = document.querySelector('#inputB');
    preventFormSubmit();
}

function preventFormSubmit() {
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

start(); 