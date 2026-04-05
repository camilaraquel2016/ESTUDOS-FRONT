import { tagListaQ2 } from "../dom/elementos.js";

import { pedirNumeroComLimite, pedirNumerosDaLista } from "../input/entrada.js";
import { filtrarPares, gerarResultadosMultiplicacao } from "../utils.js";
import { renderizarLista } from "../dom/render.js";

export const executarQ2 = () => {
    const qtd = pedirNumeroComLimite(1, 10, "Quantos números pares deseja inserir? ");

    const numeros = pedirNumerosDaLista(qtd);
    const numerosPares = filtrarPares(numeros);

    if (numerosPares.length == 0) {
        alert("Nenhum número par inserido");
        return;
    }

    const listaFormatada = gerarResultadosMultiplicacao(numerosPares, 5);
    renderizarLista(tagListaQ2, listaFormatada);
}