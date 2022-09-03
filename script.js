function inserir(num) {

    let numero = document.getElementById('atual-display').innerHTML
    document.getElementById('atual-display').innerHTML = numero + num

}

function limpar() {
    document.getElementById('atual-display').innerHTML = ""
}

function limparTudo() {
    document.getElementById('atual-display').innerHTML = ""
    document.getElementById('historico-display').innerHTML = ""
}

function deletar() {
    let resultado = document.getElementById('atual-display').innerHTML
    document.getElementById('atual-display').innerHTML = resultado.substring("", resultado.length - 1)

}

function soma(valor1, valor2) {

    document.getElementById('historico-display').innerHTML = valor1
    // document.getElementById('atua-display').innerHTML = valor2
    // let resultado = valor1 + valor2
}
