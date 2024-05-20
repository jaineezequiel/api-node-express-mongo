import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    preco: { type: Number}
}, { versionKey: false });

const livro = mongoose.model("produtos", produtoSchema);

export default produto;