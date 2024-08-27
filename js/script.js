// Inicializa o EmailJS com seu user_id
emailjs.init('T75g8iN7hFzON_zU-'); // Substitua 'YOUR_USER_ID' pelo seu user_id do EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;

    // Enviar o e-mail usando EmailJS
    emailjs.sendForm('service_8dtlbdl', 'template_glpaaor', form)
        .then(function(response) {
            // Exibir mensagem de sucesso usando SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Mensagem Enviada!',
                text: 'Sua mensagem foi enviada com sucesso.',
                confirmButtonText: 'OK'
            });
            // Limpar o formulário
            form.reset();
        }, function(error) {
            // Exibir mensagem de erro usando SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado! Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        });
});