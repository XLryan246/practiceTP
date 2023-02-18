"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiplicacao {
    calcular(valores) {
        let multiplicacao = 1;
        valores.forEach(valor => {
            multiplicacao = multiplicacao * valor;
        });
        return multiplicacao;
    }
}
exports.default = Multiplicacao;
