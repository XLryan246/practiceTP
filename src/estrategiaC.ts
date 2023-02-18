import Estrategia from "./estrategia";

export default class estrategiaC implements Estrategia{
    processamento(): void {
        console.log(`Objeto do tipo estrategia C em execução`);
    }
}

