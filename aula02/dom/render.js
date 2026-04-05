export const definirVisibilidade = (elemento, mostrar) => {
    elemento.style.display = mostrar ? "block": "none";
}

export const limparListaHTML = (lista) => {
    lista.innerHTML = "";
}

export const renderizarLista = (elementoLista, itens) => {
    limparListaHTML(elementoLista);

    for(let i = 0; i < itens.length; i++) {
        const li = document.createElement("li");
        li.textContent = itens[i]; 
        elementoLista.appendChild(li);
    }
}

