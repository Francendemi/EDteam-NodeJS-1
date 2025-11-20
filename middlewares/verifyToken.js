const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log(authorization);

    if (!authorization) {
        return res.status(401).json({ message: 'Token no enviado' });
    }

    try {
        const token = authorization.split(' ')[1];
        req.user = jwt.verify(token, "secret-key");
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
    
}