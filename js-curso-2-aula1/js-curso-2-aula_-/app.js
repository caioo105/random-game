let listaDeNumerosSorteados = [];
let numerolimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'THE SECRET NUMBER GAME');
    exibirTextoNaTela('p', 'Choose the number');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'GREAT!');
        let palavraTentativas = tentativas > 1 ? 'trys': 'try';
        let mensagemTentativas = `You describes the secret number with ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'The secret number is smaller');
        }else{
            exibirTextoNaTela('p', 'The secret number is bigger');
        }
    }
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if(quantidadeDeElementosNaLista == numerolimite){
        listaDeNumerosSorteados = [];
     }

     if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
     }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}