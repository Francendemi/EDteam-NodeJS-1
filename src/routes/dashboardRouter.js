const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/', verifyToken, (req, res) => {
    res.status(200).send('Dashboard. Usuario autenticado: '+ req.user.email);
});

module.exports = router;