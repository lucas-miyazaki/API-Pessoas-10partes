"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bancoDeDados_1 = require("./bancoDeDados");
// Inicializa uma lista de pessoas
(0, bancoDeDados_1.inicializarPessoas)();
// Cria o servidor  
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log("Recebi sua requisição");
    res.send({ mensagem: "Estou desenvolvendo a resposta para sua requisição" });
});
app.get("/pessoas", (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listarPessoas)();
    res.json(listaDePessoas);
});
app.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map