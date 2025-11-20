const User = require('../models/userModel');

// Clase de servicio para manejar operaciones relacionadas con usuarios
class UserService {
    constructor(){}

    // Método para obtener todos los usuarios
    async getAll(){
        const users = await User.find({});
        return users;
    }

    async findById(id){
        const users = await User.findOne({_id: id});
        return users;
    }

    // Método para crear un nuevo usuario
    async create(data){
        const user = new User(data);
        return await user.save();
    }

    async update(id, data) {
        return await User.findByIdAndUpdate({_id: id}, data);
    }

    async delete(id) {
        return await User.deleteOne({_id: id});
    }
}

module.exports = UserService;