const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Crea el schema para la colección UserAuth
const UserAuthSchema = new schema({
    email: String,
    password: String
});

// Crea el modelo basado en el schema
const UserAuth = mongoose.model("UserAuth", UserAuthSchema, "UserAuth");

module.exports = UserAuth;