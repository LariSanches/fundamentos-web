function adicionarEstiloMouseOver() {
    const imagens = document.querySelectorAll('img');
    imagens.forEach(imagem => {
        imagem.addEventListener('mouseover', () => {
            imagem.style.opacity = '0.8';
        });
        imagem.addEventListener('mouseout', () => {
            imagem.style.opacity = '1';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    adicionarEstiloMouseOver();
});

function adicionarEstiloMouseOver() {
    const imagens = document.querySelectorAll('img');
    imagens.forEach(imagem => {
        imagem.addEventListener('mouseover', () => {
            imagem.style.opacity = '0.8';
        });
        imagem.addEventListener('mouseout', () => {
            imagem.style.opacity = '1';
        });
    });
}

function mapaZoom(){
let mapa = document.querySelector('#mapa')
mapa.style.width = '800px'
mapa.style.height = '600px'
}
function mapaNormal() {
    mapa.style.width = '600px'
mapa.style.height = '450px'
}

    let nome = window.document.getElementById('nome')
    let email = document.querySelector('#email')
    let assunto = document.querySelector('#assunto')
    let nomeOK = false
    let emailOK = false
    let assuntoOK = false
    
    nome.style.width = '100%'
    email.style.width = '100%'
    
    function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = 'red'
    } else {
    txt.innerHTML = 'Nome Válido'
    txt.style.color = "green"
    nomeOK = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if (email.value.indexOf('@') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    }
    else{
        txtEmail.anyHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        emailOK = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    } else {
    txtAssunto.style.display = 'none'
    assuntoOK = true
    }
}
function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
    alert ('Formulário enviado com sucesso!')
    } else {
    alert ('Preencha o formulário corretamente antes de enviar. ')
    
    }
}