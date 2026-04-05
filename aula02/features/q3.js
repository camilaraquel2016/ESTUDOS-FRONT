import { tagListaQ3 } from "../dom/elementos.js";

import { renderizarLista } from "../dom/render.js";

export const executarQ3 = () => {
    const itens = Array.from(tagListaQ3.querySelectorAll("li"));
    const novoValores = itens.map(item => Number(item.textContent) * 2);
    renderizarLista(tagListaQ3, novoValores);
}