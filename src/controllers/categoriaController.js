import { categoria } from "../models/categorias.js";

class CategoriaController {

    static async listarCategorias (req, res) {

        try {
            const lista = await categoria.find({});
            res.status(200).json(lista);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    static async listarCategoriaPorId (req, res) {

        try {
            const id = req.params.id;
            const lista = await categoria.findById(id);
            res.status(200).json(lista);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarCategoria (req, res) {

        try {
            const novaCategoria = await categoria.create(req.body);
            res.status(201).jsin({ message: "Categoria cadastrado com sucesso", categoria: novaCategoria});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar categoria`})
        }
    }

    static async atualizarCategoria (req, res) {

        try {
            const id = req.params.id;
            await categoria.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "categoria atualizada"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar categoria`})
        }
    }

};

export default CategoriaController;