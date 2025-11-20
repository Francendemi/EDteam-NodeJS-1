const bcrypt = require('bcrypt');
const UserAuth = require("../models/authModel")
const jwt = require('jsonwebtoken');

class AuthService {
    constructor(){}

    // Métodos para el servicio de autenticación
    async register(data){
        data.password = bcrypt.hashSync(data.password, 10);
        const userAuth = new UserAuth(data);
        return await userAuth.save();
    }

    // Método de login
    async filterByEmail(email){
        const userAuth = await UserAuth.findOne({email});
        return userAuth;
    }

    generateToken(payload){
        const token = jwt.sign(payload, 'secret-key');
        return token;
    }
}

module.exports = AuthService;