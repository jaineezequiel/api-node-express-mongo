import express from "express";

const app = express();
app.use(express.json());

const produtos = [
    {
        id: 1,
        name: "blusa 1234446666"
    },
    {
        id: 2,
        name: "calça"
    }
]

function buscarProdutos(id){
    return produtos.findIndex(produto => {
        return produto.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("API em Express");
});

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const index = buscarProdutos(req.params.id);
    res.status(200).json(produtos[index]);
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