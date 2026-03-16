// Seleciona o botão e a mensagem do HTML
const botao = document.getElementById('btnMensagem');
const mensagem = document.getElementById('mensagemOculta');

// Adiciona um evento de clique
botao.addEventListener('click', function() {
    // Muda a cor do botão quando clicado
    botao.style.backgroundColor = '#1b4332'; // Muda para verde escuro
    botao.innerText = 'Dica revelada!';
    
    // Mostra a mensagem que estava escondida
    mensagem.style.display = 'block';
    
    // Alerta de interação
    alert("Obrigado por se interessar pelo futuro do nosso planeta!");
});

// Efeito de rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});