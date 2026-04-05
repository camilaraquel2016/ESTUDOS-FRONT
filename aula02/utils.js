export const gerarResultadosMultiplicacao = (listaNumeros, multiplicador) => {
    const listaFormatada = [];

    for(let i = 0; i < listaNumeros.length; i++) {
        const valor = listaNumeros[i];
        const saida = `${valor} x ${multiplicador} = ${valor*multiplicador}`;
        listaFormatada.push(saida)
    }

    return listaFormatada;
}

export const filtrarPares = (lista) => {
    const pares = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            pares.push(lista[i]);
        }
    }
    return pares;
}

export const nomeEstaPresenteNaLista = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
        if (nome.toLowerCase() == lista[i].toLowerCase()) {
            return true;
        }
    }

    return false;
}

export const calcularMedia = (valores) => {
    const qtdElementos = valores.length;
    let total = 0;

    for (let i = 0; i < qtdElementos; i++) {
        total+=valores[i];
    }

    return total / qtdElementos;
}
