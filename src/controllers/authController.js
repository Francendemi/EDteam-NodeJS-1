const AuthService = require("../services/authService")
const bcrypt = require('bcrypt');

const authService = new AuthService()

// Controlador para el registro de usuarios
exports.register = async (req, res) => {
    try {
        await authService.register(req.body);
        res.status(201).json({message: "Usuario registrado"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Controlador para el inicio de sesión
exports.login = async (req, res) => {
    try {
        // Obtener credenciales del cuerpo de la solicitud
        const { email, password } = req.body;

        // Buscar usuario por email
        const userAuth = await authService.filterByEmail(email);
        
        // Verificar si el usuario existe
        if(!userAuth){
            return res.status(400).json({message: "Usuario no encontrado"});
        }

        // Verificar la contraseña
        const passwordMatch = bcrypt.compareSync(password, userAuth.password);
        if(!passwordMatch){
            return res.status(400).json({message: "Contraseña incorrecta"});
        }

        // Generar token JWT
        const payload = {
            email: userAuth.email
        }

        // Crear el token
        const token = authService.generateToken(payload);
        res.status(200).send(token);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}