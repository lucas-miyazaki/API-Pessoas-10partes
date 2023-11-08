import express from "express";
import{ inicializarPessoas, listarPessoas} from "./bancoDeDados";

// Inicializa uma lista de pessoas
inicializarPessoas();

// Cria o servidor  
const app = express();
const port: number = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    console.log("Recebi sua requisição");

    res.send({ mensagem: "Estou desenvolvendo a resposta para sua requisição"});
});

app.get("/pessoas", (req, res) => {
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas);
});

app.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
})