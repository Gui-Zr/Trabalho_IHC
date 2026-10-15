document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.chat-input-area input');
    const sendButton = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // Função para enviar a mensagem
    function enviarMensagem() {
        const textoMensagem = inputField.value.trim();

        // Se o campo estiver vazio, não faz nada
        if (textoMensagem === '') return;

        // Cria o elemento da mensagem enviada
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('message', 'sent');
        
        // Pega a hora atual formatada (HH:MM)
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const horarioFormatado = `${horas}:${minutos}`;

        // Define o conteúdo HTML interno da mensagem
        novaMensagem.innerHTML = `
            ${textoMensagem}
            <div class="message-time">${horarioFormatado} ✓✓</div>
        `;

        // Adiciona a mensagem na área de chat
        chatMessages.appendChild(novaMensagem);

        // Limpa o campo de input
        inputField.value = '';

        // Rrola o chat para o final para mostrar a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Evento de clique no botão de enviar
    sendButton.addEventListener('click', enviarMensagem);

    // Evento de apertar a tecla "Enter" no teclado
    inputField.addEventListener('keypress', (evento) => {
        if (evento.key === 'Enter') {
            enviarMensagem();
        }
    });
});