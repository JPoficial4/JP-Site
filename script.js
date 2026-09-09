
const botao = document.getElementById("botaoMensagem")
if(botao){
botao.addEventListener("click",function(){
    alert("Seu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruídoSeu Computador foi destruído")
});
}

const botaoTema = document.getElementById("modoescuro");
 if(botaoTema){
    botaoTema.addEventListener("click",function(){
         document.body.classList.toggle("modo-escuro")
    });
 }

const cChutao = document.getElementById("cChutao");
const campoChute = document.getElementById("chute");
const mensagem = document.getElementById("mensagemJogo");

if (cChutao && campoChute && mensagem) {
    // Agora sorteia de 1 a 100
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Jogo carregado! Número Secreto:", numeroSecreto);

    cChutao.addEventListener("click", function () {
        let palpite = Number(campoChute.value);

        if (!campoChute.value) {
            mensagem.textContent = "Digite um número primeiro!";
            mensagem.style.color = "red";
        } else if (palpite < 1 || palpite > 100) {
            // Validação extra para garantir que está no intervalo
            mensagem.textContent = "Por favor, digite um número entre 1 e 100!";
            mensagem.style.color = "orange";
        } else if (palpite === numeroSecreto) {
            mensagem.textContent = "Parabéns! Você acertou!";
            mensagem.style.color = "black";
        } else if (palpite > numeroSecreto) {
            mensagem.textContent = "Muito alto! Tente um número menor!";
            mensagem.style.color = "rgb(214, 100, 13)";
        } else {
            mensagem.textContent = "Muito baixo! Tente um número maior!";
            mensagem.style.color = "rgb(214, 100, 13)";
        }
    });
} 
const btnParImpar = document.getElementById("btnParImpar")
const escolha = document.getElementById("escolhaJogador")
const numPlay = document.getElementById("numeroPlayer")
const resultado = document.getElementById("resultadoJogo")

if(btnParImpar){
    btnParImpar.addEventListener("click", function(){
        const opcaoJogador = escolha.value
        const numJogador = Number(numPlay.value)

        if(isNaN(numJogador) || numJogador < 0 || numJogador > 20){
            resultado.textContent = "Por favor, escolha um número de 0 a 20"
            resultado.style.color = "red"
            return;
        }

        const numIa = Math.floor(Math.random() * 21);
        const soma = numJogador + numIa
        const deuPar = soma % 2 === 0;
        const resultadoFinal = deuPar ? "par" : "impar";

        if(opcaoJogador === resultadoFinal){
            resultado.innerHTML = `Você jogou <strong>${numJogador}</strong>
            e o Computador jogou <strong>${numIa}</strong>. Você Venceu!`

        }else{
                resultado.innerHTML = `Você jogou <strong>${numJogador}</strong>
            e o Computador jogou <strong>${numIa}</strong>. Você Perdeu!`
            }
        
    })
}