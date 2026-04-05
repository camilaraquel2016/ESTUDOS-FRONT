import { pedirNumeroComLimite, pedirNotas } from "../input/entrada.js";
import { calcularMedia } from "../utils.js";

export const executarQ5 = () => {
    const qtdNotas = pedirNumeroComLimite(1, 10, "Insira a quantidade de notas (limite = 10)");
    const notas = pedirNotas(qtdNotas);
    const media = calcularMedia(notas);
    alert(`Média é: ${media}`);
}

