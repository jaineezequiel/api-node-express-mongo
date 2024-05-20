import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const routes = express.Router();

routes.get("/categorias", CategoriaController.listarCategoriaPorId);
routes.get("/categorias/:id", CategoriaController.listarCategoriaPorId);
routes.post("/categorias", CategoriaController.cadastrarCategoria);
routes.put("/categorias/:id", CategoriaController.atualizarCategoria);

export default routes;