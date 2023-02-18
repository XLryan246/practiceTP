import Calculo from "../interfaces/calculo";

export default class Multiplicacao implements Calculo {
    calcular(valores: number[]): number {
        let multiplicacao = 1
        valores.forEach(valor => {
            multiplicacao = multiplicacao * valor
        })
        return multiplicacao
    }
}