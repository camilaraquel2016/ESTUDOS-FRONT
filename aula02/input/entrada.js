export const pedirNumero = (mensagem) => {
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

export const pedirNumeroComLimite = (min, max, mensagem) => {
    while (true) {
        const numero = pedirNumero(mensagem);

        if (numero >= min && numero <= max) return numero;

        alert(`Número inválido, o número inserido deve estar entre ${min} e ${max}`);
    }
}

export const pedirNumerosDaLista = (qtd) => {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        const numero = pedirNumero(`Insira o ${i + 1}° número`);
        lista.push(numero);
    }
    return lista;
}


export const pedirNotas = (qtd) => {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        const nota = pedirNumeroComLimite(1, 10, `Insira a ${i + 1}° nota`);
        lista.push(nota);
    }
    return lista;
}

