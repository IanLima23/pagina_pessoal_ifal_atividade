document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formInscricao");
    
    const fields = {
        nome: document.getElementById("nome"),
        email: document.getElementById("email"),
        telefone: document.getElementById("telefone"),
        nascimento: document.getElementById("nascimento"),
        curso: document.getElementById("curso"),
        senha: document.getElementById("senha"),
        confirmarSenha: document.getElementById("confirmarSenha"),
        foto: document.getElementById("foto"),
        mensagem: document.getElementById("mensagem"),
        termos: document.getElementById("termos")
    };

    if (localStorage.getItem("form_nome")) fields.nome.value = localStorage.getItem("form_nome");
    if (localStorage.getItem("form_email")) fields.email.value = localStorage.getItem("form_email");
    if (localStorage.getItem("form_telefone")) fields.telefone.value = localStorage.getItem("form_telefone");

    fields.telefone.addEventListener("input", (e) => {
        e.target.value = Util.mascararTelefone(e.target.value);
        Validacoes.validarTelefone(e.target);
        localStorage.setItem("form_telefone", e.target.value);
    });

    fields.nome.addEventListener("input", (e) => {
        Validacoes.validarNome(e.target);
        localStorage.setItem("form_nome", e.target.value);
    });

    fields.email.addEventListener("input", (e) => {
        Validacoes.validarEmail(e.target);
        localStorage.setItem("form_email", e.target.value);
    });

    fields.senha.addEventListener("input", (e) => {
        Validacoes.validarSenha(e.target);
        const forca = Util.verificarForcaSenha(e.target.value);
        const barra = document.querySelector("#forcaSenhaContainer div");
        const cores = ["#ef4444", "#f59e0b", "#22c55e"];
        barra.style.width = `${(forca / 3) * 100}%`;
        barra.style.backgroundColor = cores[forca - 1] || "#cbd5e1";
        if(fields.confirmarSenha.value !== "") Validacoes.validarConfirmarSenha(fields.confirmarSenha, e.target);
    });

    fields.confirmarSenha.addEventListener("input", (e) => {
        Validacoes.validarConfirmarSenha(e.target, fields.senha);
    });

    fields.mensagem.addEventListener("input", (e) => {
        Validacoes.validarMensagem(e.target);
        document.getElementById("charCount").textContent = e.target.value.length;
    });

    fields.foto.addEventListener("change", (e) => {
        if(Validacoes.validarFoto(e.target) && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById("imagePreview").innerHTML = `<img src="${event.target.result}">`;
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            document.getElementById("imagePreview").innerHTML = "";
        }
    });

    document.querySelectorAll(".btn-toggle-pass").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const targetInput = document.getElementById(targetId);
            if(targetInput.type === "password") {
                targetInput.type = "text";
                btn.textContent = "🔒";
            } else {
                targetInput.type = "password";
                btn.textContent = "👁️";
            }
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const vNome = Validacoes.validarNome(fields.nome);
        const vEmail = Validacoes.validarEmail(fields.email);
        const vTelefone = Validacoes.validarTelefone(fields.telefone);
        const vNasc = Validacoes.validarNascimento(fields.nascimento);
        const vCurso = Validacoes.validarCurso(fields.curso);
        const vTurno = Validacoes.validarTurno();
        const vInteresses = Validacoes.validarInteresses();
        const vSenha = Validacoes.validarSenha(fields.senha);
        const vConf = Validacoes.validarConfirmarSenha(fields.confirmarSenha, fields.senha);
        const vFoto = Validacoes.validarFoto(fields.foto);
        const vMsg = Validacoes.validarMensagem(fields.mensagem);
        const vTermos = Validacoes.validarTermos(fields.termos);

        if (vNome && vEmail && vTelefone && vNasc && vCurso && vTurno && vInteresses && vSenha && vConf && vFoto && vMsg && vTermos) {
            alert("Inscrição enviada com sucesso ao IFAL! 🎉");
            localStorage.clear();
            form.reset();
            document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
            document.getElementById("imagePreview").innerHTML = "";
            document.querySelector("#forcaSenhaContainer div").style.width = "0";
        } else {
            alert("Por favor, corrija as marcações em vermelho antes de enviar.");
        }
    });

    form.addEventListener("reset", () => {
        localStorage.clear();
        document.getElementById("imagePreview").innerHTML = "";
        document.querySelector("#forcaSenhaContainer div").style.width = "0";
        document.querySelectorAll('.is-valid, .is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
        document.querySelectorAll('.error-message').forEach(el => el.textContent = "");
        document.getElementById("charCount").textContent = "0";
    });
});