import conn from "../config/conn.js";
import bcrypt from 'bcrypt';

const Schema = conn.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = conn.model("User", userSchema);

export default User;