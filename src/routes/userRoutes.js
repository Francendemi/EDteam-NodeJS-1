const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const userLogged = require("../middlewares/userLogged")

// Definir las rutas para los usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Exportar el router
module.exports = router;