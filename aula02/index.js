// ------ ELEMENTOS ------

// Q1
const tagListaVaziaQ1 = document.getElementById("lista-vazia-q1");
const tagListaQ1 = document.getElementById("lista-numerica-q1");
const tagBotaoResetarQ1 = document.getElementById("resetar-lista-q1");
const tagBotaoExecutarQ1 = document.getElementById("executar-q1");

// Q2
const tagListaQ2 = document.getElementById("lista-q2");
const tagBotaoExecutarQ2 = document.getElementById("executar-q2");

// Q3
const tagListaQ3 = document.getElementById("lista-q3");
const tagBotaoExecutarQ3 = document.getElementById("executar-q3");

// Q4
const tagBotaoExecutarQ4 = document.getElementById("executar-q4");
const listaNomes = ["Camila", "Raquel", "Maria", "João", "Zé"];

// Q5
const tagBotaoExecutarQ5 = document.getElementById("executar-q5");



// EXECUÇÃO DAS QUESTÕES

// Q1

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
    renderizarListaQ2(listaFormatada);
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

    document.getElementById("msg-q3").innerText = `Nome ${nome} encontrado com sucesso`;
}


// Q5

function executarQ5() {
    const qtdNotas = pedirNumeroComLimite(1, 10, "Insira a quantidade de notas (limite = 10)");
    const notas = pedirNotas(qtdNotas);
    media = calcularMedia(notas);
    alert(`Média é: ${media}`);
}





// ENTRADA DE DADOS

const pedirNumero = (mensagem) => {
  while (true) {
    const entrada = prompt(mensagem);
    const numero = Number(entrada);
        
    if (entrada.trim() == "" || isNaN(numero)) {
        alert("Número inválido");
        continue;
    } 
    return numero;
  }
}

const pedirNumeroComLimite = (min, max, mensagem) => {
    while (true) {
        const numero = pedirNumero(mensagem);

        if (numero >= min && numero <= max) return numero;

        alert(`Número inválido, o número inserido deve estar entre ${min} e ${max}`);
    }
}

const pedirNumerosDaLista = (qtd) => {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        const numero = pedirNumero(`Insira o ${i + 1}° número`);
        lista.push(numero);
    }
    return lista;
}


const pedirNotas = (qtd) => {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        const nota = pedirNumeroComLimite(1, 10, `Insira a ${i + 1}° nota`);
        lista.push(nota);
    }
    return lista;
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

const renderizarListaQ1 = (listaFormatada) => {
    limparListaHTML(tagListaQ1);

    for(let i = 0; i < listaFormatada.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaFormatada[i]; 
        tagListaQ1.appendChild(li);
    }
}

const atualizarInterfaceQ1 = (lista) =>  {
    const temItens = lista.length > 0;
    definirVisibilidade(tagListaVaziaQ1, !temItens);
    definirVisibilidade(tagBotaoResetarQ1, temItens);
    renderizarListaQ1(lista);
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

const renderizarListaQ2 = (lista) => {
    limparListaHTML(tagListaQ2);

    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i]; 
        tagListaQ2.appendChild(li);
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

