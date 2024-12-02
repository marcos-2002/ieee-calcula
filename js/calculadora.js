function incluir(e) {
    let valor = e.target.innerHTML
    let resultado = document.querySelector('p.resultado')
    if(Number(resultado.innerHTML) === 0){
        resultado.textContent = valor
    }else {
        resultado.innerHTML += valor
    }
}

function limpar() {
    let resultado = document.querySelector('p.resultado')
    resultado.innerHTML = 0
}

// função eval gera o resultado de uma expressão matemática
function igual() {
    let resultado = document.querySelector('p.resultado')
    resultado.innerHTML = eval(resultado.innerHTML)
}

function limpar_final() {
    resultado = document.querySelector('p.resultado')
    if(resultado.innerHTML.length === 1) {
        resultado.innerHTML = 0
    }else {
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}