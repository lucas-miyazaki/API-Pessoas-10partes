"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`João`, `11111111111`, new Date(2000, 3, 30), `11111111111`, `Rua número 1`, 170, 65);
let pessoa2 = new Pessoa_1.Pessoa(`Maria`, `22222222222`, new Date(2000, 4, 20), `22222222222`, `Rua número 2`, 170, 60);
console.clear();
pessoa.Falar();
pessoa.FalarFrase(`Bom dia, sou o `);
pessoa.Comer();
pessoa.ComerComida(`Bolo`);
pessoa2.Falar();
pessoa2.FalarFrase(`Bom dia, sou a Maria`);
pessoa2.Comer();
pessoa2.ComerComida(`Pizza`);
pessoa.Andar();
pessoa2.Andar();
pessoa2.AndarQuilometros(`10`);
pessoa.AndarQuilometros(`15`);
//# sourceMappingURL=teste.js.map