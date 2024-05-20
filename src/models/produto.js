import mongoose from "mongoose";
import { categoriaSchema } from "./categorias.js";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    preco: { type: Number}
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;