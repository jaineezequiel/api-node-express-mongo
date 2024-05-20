import produto from "../models/produto.js";

class ProdutoController {

    static async listarProdutos (req, res) {

        try {
            const listaProdutos = await produto.find({});
            res.status(200).json(listaProdutos);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    static async listarProdutoPorId (req, res) {

        try {
            const id = req.params.id;
            const listaProduto = await produto.findById(id);
            res.status(200).json(listaProduto);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do produto`})
        }
    }

    static async cadastrarProduto (req, res) {

        const novoProduto = req.body;

        try {

            const categoria = await categoria.findById(novoProduto.categoria);
            const produto = { ... novoProduto, categoria : { ... categoria._doc} };
            const produtoCriado = await produto.create(produto);
            res.status(201).jsin({ message: "Produto cadastrado com sucesso", produto: novoProduto});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar produto`})
        }
    }

    static async atualizarProduto (req, res) {

        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar produto`})
        }
    }

};

export default ProdutoController;