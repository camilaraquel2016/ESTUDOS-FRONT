// VARIAVEIS :
// VAR - ESCOPO GLOBAL;
// LET - ESCOPO DE BLOCO;
// CONST - CONTASNTE, ESCOPO DE BLOCO;

// OPERADORES ARITMETICOS:
// +,-,/,*,%,**,//

// OPERADORES LÓGICOS:
// AND/& = E;
// OR/|| = O;
// NOT/! = NEGAÇÃO;

// OPERADORES DE COMPARAÇÃO:
// ==  => COMPARA O VALOR
// === => COMPARA VALOR E O TIPO
// !=  => DIFERENÇA DE VALOR
// !== => DIFERENÇA DE VALOR MAIS TIPO
// >   => MAIOR QUE
// <   => MENOR QUE
// >=  => MAIOR OU IGUAL
// <=  => MENOR OU IGUAL



function pedirNumero(mensagem) {
  let entrada;
  let numero;

  while(true) {
    entrada = prompt(mensagem);
    numero = Number(entrada);

    if (entrada.trim() == "" || isNaN(numero)) {
      alert("Número inválido");
    }
     
    else {
      return numero;
    }
  }
}

const calcularNumeros = () => {
  let msg = `Qual operação deseja realizar?
  1 - Soma
  2 - Subtração
  3 - Multiplicação
  4 - Divisão`;

  const operacao = prompt(msg);
  const numerox = pedirNumero("Insira o primeiro número: ");
  const numeroy = pedirNumero("Insira o segundo número: ");

  let operador;
  let resultado;

  switch (operacao) {
    case "1":
      operador = "+";
      resultado = numerox + numeroy;
      break;

    case "2":
      operador = "-";
      resultado = numerox - numeroy;
      break;

    case "3":
      operador = "*";
      resultado = numerox * numeroy;
      break;

    case "4":
      if (numeroy == 0) {
        alert("Não é possível dividir um número por zero");
        return;
      }

      operador = "/";
      resultado = numerox / numeroy;
      break;

    default:
      alert("Nenhuma operação aritmética válida inserida");
      return;
  }

  alert(`${numerox} ${operador} ${numeroy} = ${resultado}`);
};

const calcularTabuada = () => {
  const numero = pedirNumero("Insira um número que deseja ver tabuada: ");

  let resultado;
  let saida = "";

  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    resultado = numero * multiplicador;
    saida += `${numero} x ${multiplicador} = ${resultado}\n`;
  }

  alert(saida);
};

const verificarParOuImpar = () => {
  const numero = pedirNumero("Insira um número que deseja verificar se é par ou ímpar: ");

  if (numero % 2 == 0) {
    alert(`O número ${numero} é par`);
  }
  else {
    alert(`O número ${numero} é ímpar`);
  }
}