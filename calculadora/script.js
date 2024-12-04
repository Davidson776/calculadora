let resultado = document.getElementById('resultado');

function adicionarNumero(numero) {
    resultado.value += numero;
}

function limpar() {
    resultado.value = '';
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Erro';
    }
}