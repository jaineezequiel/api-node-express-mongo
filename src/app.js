import express from "express";
import connectDatabase from "./config/dbConecct.js";
import produto from "./models/produto.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.error("Erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("API em Express");
});

app.get("/produtos", async (req, res) => {
    const listaProdutos = await produto.find({});
    res.status(200).json(listaProdutos);
});

app.get('/produtos/:id', async (req, res) => {    
    const listaProduto = await produto.find({id: req.params.id});
    res.status(200).json(listaProduto);
});

app.post("/produtos", (req, res) => {
    produtos.push(req.body);
    res.status(201).send('Produto cadastrado com sucesso');
});

app.put("/produtos/:id", (req, res) => {
    const index = buscarProdutos(req.params.id);
    produtos[index].name = req.body.name;
    res.status(200).send(produtos);
});

app.delete('/produtos/:id', (req, res) => {
    const index = buscarProdutos(req.params.id);
    produtos.splice(index, 1);
    res.status(200).send("Produto removido com sucesso");
})

export default app;