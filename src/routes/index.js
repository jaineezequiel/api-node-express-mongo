import express from "express";
import produtos from "./produtosRoutes.js";
import categorias from "./categoriasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("App express"));

    app.use(express.json(), produtos, categorias);
};

export default routes;