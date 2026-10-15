const formulario = document.getElementById('meuFormulario');
const nomeInput = document.getElementById('nomeCompleto');
const cpfInput = document.getElementById('cpfUsuario');
const senhaInput = document.getElementById('senhaSecreta');
const textoAviso = document.getElementById('mensagemSucesso');


formulario.addEventListener('submit', function(evento) {
   
    evento.preventDefault(); 

   
    if (nomeInput.value === '' || cpfInput.value === '' || senhaInput.value === '') {
        alert('o seu merda tu esqueceu de colocar o resto.');
        return; 
    }

    textoAviso.innerText = 'meu crai  ' + nomeInput.value + ' seu cadastro deu certo seu arroganthi.';
    
   
    textoAviso.className = 'mostrando';

   
    nomeInput.value = '';
    cpfInput.value = '';
    senhaInput.value = '';
});