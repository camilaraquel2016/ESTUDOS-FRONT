import { tagBotaoExecutarQ1, tagBotaoExecutarQ2, tagBotaoExecutarQ3, tagBotaoExecutarQ4, tagBotaoExecutarQ5, tagBotaoResetarQ1 } from "./dom/elementos.js";

import { executarQ1, resetarListaQ1 } from "./features/q1.js";
import { executarQ2 } from "./features/q2.js";
import { executarQ3 } from "./features/q3.js";
import { executarQ4 } from "./features/q4.js";
import { executarQ5 } from "./features/q5.js";

tagBotaoExecutarQ1.addEventListener("click", executarQ1);
tagBotaoExecutarQ2.addEventListener("click", executarQ2);
tagBotaoExecutarQ3.addEventListener("click", executarQ3);
tagBotaoExecutarQ4.addEventListener("click", executarQ4);
tagBotaoExecutarQ5.addEventListener("click", executarQ5);

tagBotaoResetarQ1.addEventListener("click", resetarListaQ1);
