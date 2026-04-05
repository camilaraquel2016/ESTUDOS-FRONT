import { tagMsgQ4 } from "../dom/elementos.js";

import { nomeEstaPresenteNaLista } from "../utils.js";

const listaNomes = ["Camila", "Raquel", "João", "Cecília", "Zé"];

export const executarQ4 = () => {
    const nome = prompt("Insira o nome que deseja procurar");

    if (!nomeEstaPresenteNaLista(listaNomes, nome)) {
        alert(`O nome ${nome} não existe na base de dados`);
        return;
    }

    tagMsgQ4.innerText = `Nome ${nome} encontrado com sucesso`;
}
