function inscrever(evento) {
    alert("Você se inscreveu no evento: " + evento + "! Em breve enviaremos mais informações para seu e-mail.");
}

function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    event.target.reset();
}
// Função para exibir a mensagem de inscrição realizada
function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Exibir a modal
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "block";  // Exibe a modal

    // Limpar os campos do formulário após a inscrição
    document.getElementById('registration-form').reset();
}

// Função para fechar a modal
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "none";  // Fecha a modal
}

// Fechar a modal se o usuário clicar fora da caixa modal
window.onclick = function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// Função para exibir a mensagem de inscrição realizada
function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Exibir a modal
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "block";  // Exibe a modal

    // Limpar os campos do formulário após a inscrição
    document.getElementById('registration-form').reset();
}

// Função para fechar a modal
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "none";  // Fecha a modal
}

// Fechar a modal se o usuário clicar fora da caixa modal
window.onclick = function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// Função para exibir a mensagem de inscrição realizada
function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Exibir a modal
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "block";  // Exibe a modal

    // Limpar os campos do formulário após a inscrição
    document.getElementById('registration-form').reset();
}

// Função para fechar a modal
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = "none";  // Fecha a modal
}

// Fechar a modal se o usuário clicar fora da caixa modal
window.onclick = function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
