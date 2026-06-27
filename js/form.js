// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function (evento) {
        // Impede o envio padrão do formulário (recarregar a página)
        evento.preventDefault();

        // Limpa mensagens de erro anteriores
        limparErros();

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        let formularioValido = true;

        // Validação do Nome
        if (nome === "") {
            mostrarErro("erro-nome", "O campo Nome Completo é obrigatório.");
            formularioValido = false;
        } else if (nome.length < 3) {
            mostrarErro("erro-nome", "O nome deve ter pelo menos 3 caracteres.");
            formularioValido = false;
        }

        // Validação do E-mail (Usa Expressão Regular simples para checar o formato)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            mostrarErro("erro-email", "O campo Email é obrigatório.");
            formularioValido = false;
        } else if (!emailRegex.test(email)) {
            mostrarErro("erro-email", "Por favor, insira um e-mail válido.");
            formularioValido = false;
        }

        // Validação do Telefone
        if (telefone === "") {
            mostrarErro("erro-telefone", "O campo Telefone é obrigatório.");
            formularioValido = false;
        }

        // Validação da Mensagem
        if (mensagem === "") {
            mostrarErro("erro-mensagem", "Por favor, digite sua mensagem informando o que procura.");
            formularioValido = false;
        }

        // Se passar por todas as validações
        if (formularioValido) {
            alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso. Em breve entrarei em contato.");
            form.reset(); // Limpa os campos do formulário
        }
    });

    // Função auxiliar para exibir o erro na tag span correta
    function mostrarErro(idElemento, mensagem) {
        const spanErro = document.getElementById(idElemento);
        if (spanErro) {
            spanErro.textContent = mensagem || ""; // Garante string válida
            spanErro.innerText = mensagem;
        }
    }

    // Função auxiliar para limpar todos os spans de erro
    function limparErros() {
        const spans = document.querySelectorAll(".erro-mensagem");
        spans.forEach(function (span) {
            span.innerText = "";
        });
    }
});