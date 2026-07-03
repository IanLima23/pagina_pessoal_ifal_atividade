const Validacoes = {
    marcarValido(elemento, idErro) {
        elemento.classList.remove('is-invalid');
        elemento.classList.add('is-valid');
        document.getElementById(idErro).textContent = "";
    },

    marcarInvalido(elemento, idErro, mensagem) {
        elemento.classList.remove('is-valid');
        elemento.classList.add('is-invalid');
        document.getElementById(idErro).textContent = message;
    },

    validarNome(input) {
        const valor = input.value.trim();
        if (valor.length < 3) {
            this.marcarInvalido(input, 'erro-nome', 'O nome precisa ter pelo menos 3 caracteres.');
            return false;
        }
        this.marcarValido(input, 'erro-nome');
        return true;
    },

    validarEmail(input) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(input.value)) {
            this.marcarInvalido(input, 'erro-email', 'Informe um formato de e-mail válido.');
            return false;
        }
        this.marcarValido(input, 'erro-email');
        return true;
    },

    validarTelefone(input) {
        const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        if (!regex.test(input.value)) {
            this.marcarInvalido(input, 'erro-telefone', 'O telefone deve seguir o padrão (82) 99999-9999.');
            return false;
        }
        this.marcarValido(input, 'erro-telefone');
        return true;
    },

    validarNascimento(input) {
        const idade = Util.calcularIdade(input.value);
        if (!input.value || idade < 16) {
            this.marcarInvalido(input, 'erro-nascimento', 'Inscrição permitida apenas para maiores de 16 anos.');
            return false;
        }
        this.marcarValido(input, 'erro-nascimento');
        return true;
    },

    validarCurso(select) {
        if (!select.value) {
            this.marcarInvalido(select, 'erro-curso', 'Selecione um curso válido.');
            return false;
        }
        this.marcarValido(select, 'erro-curso');
        return true;
    },

    validarTurno() {
        const selecionado = document.querySelector('input[name="turno"]:checked');
        const erroElemento = document.getElementById('erro-turno');
        if (!selecionado) {
            erroElemento.textContent = "Você deve escolher um turno de estudos.";
            return false;
        }
        erroElemento.textContent = "";
        return true;
    },

    validarInteresses() {
        const selecionados = document.querySelectorAll('input[name="interesse"]:checked');
        const erroElemento = document.getElementById('erro-interesse');
        if (selecionados.length < 2) {
            erroElemento.textContent = "Selecione ao menos 2 áreas de interesse.";
            return false;
        }
        erroElemento.textContent = "";
        return true;
    },

    validarSenha(input) {
        const valor = input.value;
        const temMaiuscula = /[A-Z]/.test(valor);
        const temNumero = /[0-9]/.test(valor);

        if (valor.length < 8 || !temMaiuscula || !temNumero) {
            this.marcarInvalido(input, 'erro-senha', 'A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número.');
            return false;
        }
        this.marcarValido(input, 'erro-senha');
        return true;
    },

    validarConfirmarSenha(inputConf, inputSenha) {
        if (inputConf.value !== inputSenha.value || inputConf.value === "") {
            this.marcarInvalido(inputConf, 'erro-confirmarSenha', 'As duas senhas não coincidem.');
            return false;
        }
        this.marcarValido(inputConf, 'erro-confirmarSenha');
        return true;
    },

    validarFoto(input) {
        const arquivo = input.files[0];
        if (arquivo) {
            const tiposAceitos = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!tiposAceitos.includes(arquivo.type)) {
                this.marcarInvalido(input, 'erro-foto', 'Apenas arquivos nos formatos JPG ou PNG.');
                return false;
            }
            if (arquivo.size > 2 * 1024 * 1024) {
                this.marcarInvalido(input, 'erro-foto', 'O arquivo não pode exceder o tamanho limite de 2 MB.');
                return false;
            }
        }
        this.marcarValido(input, 'erro-foto');
        return true;
    },

    validarMensagem(textarea) {
        const tam = textarea.value.length;
        if (tam < 50 || tam > 500) {
            this.marcarInvalido(textarea, 'erro-mensagem', 'A mensagem precisa conter entre 50 e 500 caracteres.');
            return false;
        }
        this.marcarValido(textarea, 'erro-mensagem');
        return true;
    },

    validarTermos(input) {
        if (!input.checked) {
            this.marcarInvalido(input, 'erro-termos', 'É obrigatório aceitar os termos de uso.');
            return false;
        }
        this.marcarValido(input, 'erro-termos');
        return true;
    }
};