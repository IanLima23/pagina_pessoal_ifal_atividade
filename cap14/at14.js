const fotoPerfil = document.getElementById('fotoPerfil');
const nomePerfil = document.getElementById('nomePerfil');
const cursoPerfil = document.getElementById('cursoPerfil');
const biografiaPerfil = document.getElementById('biografiaPerfil');
const perfilSection = document.getElementById('perfil');

const temaSelect = document.getElementById('temaSelect');
const fonteRange = document.getElementById('fonteRange');
const valorFonte = document.getElementById('valorFonte');
const mostrarBio = document.getElementById('mostrarBio');

const emailInput = document.getElementById('emailInput');
const telefoneInput = document.getElementById('telefoneInput');
const btnAtualizarContato = document.getElementById('btnAtualizarContato');
const emailExibido = document.getElementById('emailExibido');
const telefoneExibido = document.getElementById('telefoneExibido');

const contadorAcoes = document.getElementById('contadorAcoes');
const ultimaAcao = document.getElementById('ultimaAcao');

const btnAlterarNome = document.getElementById('btnAlterarNome');
const btnAlterarCurso = document.getElementById('btnAlterarCurso');
const btnAlterarFoto = document.getElementById('btnAlterarFoto');
const btnDestacarPerfil = document.getElementById('btnDestacarPerfil');
const btnRestaurar = document.getElementById('btnRestaurar');

let totalAcoes = 0;
const estadoOriginal = {
    nome: "João Silva",
    curso: "Curso: Técnico em Informática",
    foto: "imagens/perfil1.jpg"
};

function registrarAcao(nomeAcao) {
    totalAcoes++;
    contadorAcoes.textContent = totalAcoes;
    ultimaAcao.textContent = nomeAcao;
}

btnAlterarNome.addEventListener('click', () => {
    nomePerfil.textContent = "Maria Oliveira";
    registrarAcao("Alteração de nome");
});

btnAlterarCurso.addEventListener('click', () => {
    cursoPerfil.textContent = "Curso: Análise e Desenvolvimento de Sistemas";
    registrarAcao("Alteração de curso");
});

btnAlterarFoto.addEventListener('click', () => {
    fotoPerfil.src = "imagens/perfil2.jpg"; 
    registrarAcao("Alteração de foto");
});

// FUNCIONALIDADE 4: Destacar Perfil
btnDestacarPerfil.addEventListener('click', () => {
    perfilSection.classList.add('perfil-destacado');
    registrarAcao("Destaque de perfil aplicado");
});

btnRestaurar.addEventListener('click', () => {
    nomePerfil.textContent = estadoOriginal.nome;
    cursoPerfil.textContent = estadoOriginal.curso;
    fotoPerfil.src = estadoOriginal.foto;
    perfilSection.classList.remove('perfil-destacado');
    registrarAcao("Perfil restaurado ao estado original");
});

temaSelect.addEventListener('change', (e) => {
    const tema = e.target.value;
    document.body.classList.remove('tema-escuro', 'tema-azul');
    
    if (tema === 'escuro') {
        document.body.classList.add('tema-escuro');
    } else if (tema === 'azul') {
        document.body.classList.add('tema-azul');
    }
    registrarAcao(`Mudança de tema para: ${tema}`);
});

fonteRange.addEventListener('input', (e) => {
    const tamanho = e.target.value;
    biografiaPerfil.style.fontSize = `${tamanho}px`;
    valorFonte.textContent = `${tamanho}px`;
    registrarAcao(`Ajuste da fonte para ${tamanho}px`);
});

mostrarBio.addEventListener('change', (e) => {
    if (e.target.checked) {
        biografiaPerfil.style.display = 'block';
        registrarAcao("Biografia exibida");
    } else {
        biografiaPerfil.style.display = 'none';
        registrarAcao("Biografia oculta");
    }
});

btnAtualizarContato.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();
    
    emailExibido.textContent = `E-mail: ${email || "não informado"}`;
    telefoneExibido.textContent = `Telefone: ${telefone || "não informado"}`;
    
    registrarAcao("Informações de contato atualizadas");
});