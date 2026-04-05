import { tagListaVaziaQ1, tagListaQ1, tagBotaoExecutarQ1, tagBotaoExecutarQ2, tagBotaoExecutarQ3, tagBotaoExecutarQ4, tagBotaoExecutarQ5, tagBotaoResetarQ1, tagListaQ2, tagListaQ3, tagMsgQ3 } from "./dom/elementos.js";

import { pedirNotas, pedirNumeroComLimite, pedirNumerosDaLista } from "./input/entrada.js";

const executarQ1 = () => {
  const qtd = pedirNumeroComLimite(1, 10, "Quantos valores deseja inserir? (limite máximo = 10)");

  const lista = pedirNumerosDaLista(qtd);
  const listaFormatada = gerarResultadosMultiplicacao(lista, 2);
  
  atualizarInterfaceQ1(listaFormatada);
}


// Q2

const executarQ2 = () => {
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

// Q3

function executarQ3() {
    const itens = tagListaQ3.querySelectorAll("li");

    for (let i = 0; i < itens.length; i++) {
        const valor = Number(itens[i].textContent);
        itens[i].textContent = valor * 2;
    }
}


// Q4

function executarQ4() {
    const nome = prompt("Insira o nome que deseja procurar");

    if (!nomeEstaPresenteNaLista(listaNomes, nome)) {
        alert(`O nome ${nome} não existe na base de dados`);
        return;
    }

    tagMsgQ3.innerText = `Nome ${nome} encontrado com sucesso`;
}


// Q5

function executarQ5() {
    const qtdNotas = pedirNumeroComLimite(1, 10, "Insira a quantidade de notas (limite = 10)");
    const notas = pedirNotas(qtdNotas);
    const media = calcularMedia(notas);
    alert(`Média é: ${media}`);
}






// UTILS Q1

const gerarResultadosMultiplicacao = (listaNumeros, multiplicador) => {
    const listaFormatada = [];

    for(let i = 0; i < listaNumeros.length; i++) {
        const valor = listaNumeros[i];
        const saida = `${valor} x ${multiplicador} = ${valor*multiplicador}`;
        listaFormatada.push(saida)
    }

    return listaFormatada;
}



const atualizarInterfaceQ1 = (lista) =>  {
    const temItens = lista.length > 0;
    definirVisibilidade(tagListaVaziaQ1, !temItens);
    definirVisibilidade(tagBotaoResetarQ1, temItens);
    renderizarLista(tagListaQ1, lista);
}

const resetarListaQ1 = () => {
    atualizarInterfaceQ1([]);
}

// UTILS Q2

function filtrarPares(lista) {
    const pares = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            pares.push(lista[i]);
        }
    }
    return pares;
}



const renderizarLista = (elementoLista, itens) => {
    limparListaHTML(elementoLista);

    for(let i = 0; i < itens.length; i++) {
        const li = document.createElement("li");
        li.textContent = itens[i]; 
        elementoLista.appendChild(li);
    }
}



// UTILS Q4

function nomeEstaPresenteNaLista(lista, nome) {
    for (let i = 0; i < lista.length; i++) {
        if (nome.toLowerCase() == lista[i].toLowerCase()) {
            return true;
        }
    }

    return false;
}


// UTILS Q5

function calcularMedia(valores) {
    const qtdElementos = valores.length;
    let total = 0;

    for (let i = 0; i < qtdElementos; i++) {
        total+=valores[i];
    }

    return total / qtdElementos;
}


// UTILS - GERAL

const definirVisibilidade = (elemento, mostrar) => {
    elemento.style.display = mostrar ? "block": "none";
}

const limparListaHTML = (lista) => {
    lista.innerHTML = "";
}

// EVENTOS
tagBotaoExecutarQ1.addEventListener("click", executarQ1);
tagBotaoExecutarQ2.addEventListener("click", executarQ2);
tagBotaoExecutarQ3.addEventListener("click", executarQ3);
tagBotaoResetarQ1.addEventListener("click", resetarListaQ1);
tagBotaoExecutarQ4.addEventListener("click", executarQ4);
tagBotaoExecutarQ5.addEventListener("click", executarQ5);
