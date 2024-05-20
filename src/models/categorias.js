import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
}, { versionKey: false });

const categoria = mongoose.model("categorias", categoriaSchema);

export { categoria, categoriaSchema };