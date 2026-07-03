const Util = {
    mascararTelefone(valor) {
        let v = valor.replace(/\D/g, "");
        if (v.length > 11) v = v.substring(0, 11);
        
        if (v.length > 6) {
            return `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
        } else if (v.length > 2) {
            return `(${v.substring(0, 2)}) ${v.substring(2)}`;
        } else if (v.length > 0) {
            return `(${v}`;
        }
        return v;
    },

    calcularIdade(dataNascimento) {
        if (!dataNascimento) return 0;
        const hoje = new Date();
        const nasc = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nasc.getFullYear();
        const m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
            idade--;
        }
        return Math.max(0, idade);
    },

    verificarForcaSenha(senha) {
        let forca = 0;
        if (senha.length >= 8) forca++;
        if (/[A-Z]/.test(senha)) forca++;
        if (/[0-9]/.test(senha)) forca++;
        return forca;
    }
};