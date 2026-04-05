import { pedirNumeroComLimite, pedirNumerosDaLista } from "../input/entrada.js";
import { gerarResultadosMultiplicacao } from "../utils.js";
import { definirVisibilidade, renderizarLista } from "../dom/render.js";

import { tagListaVaziaQ1, tagBotaoResetarQ1, tagListaQ1 } from "../dom/elementos.js";

export const executarQ1 = () => {
  const qtd = pedirNumeroComLimite(1, 10, "Quantos valores deseja inserir? (limite máximo = 10)");

  const lista = pedirNumerosDaLista(qtd);
  const listaFormatada = gerarResultadosMultiplicacao(lista, 2);
  
  atualizarInterfaceQ1(listaFormatada);
}

export const atualizarInterfaceQ1 = (lista) =>  {
    const temItens = lista.length > 0;
    definirVisibilidade(tagListaVaziaQ1, !temItens);
    definirVisibilidade(tagBotaoResetarQ1, temItens);
    renderizarLista(tagListaQ1, lista);
}

export const resetarListaQ1 = () => {
    atualizarInterfaceQ1([]);
}