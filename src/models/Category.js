import conn from "../config/conn.js";
const Schema = conn.Schema;

const categorySchema = new Schema({
    nome: String,
    valor_total: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Category = conn.model("Category", categorySchema);

export default Category;