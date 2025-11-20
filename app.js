const express = require('express');
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes")
const authRouter = require("./routes/authRouter")
const dashboardRouter = require("./routes/dashboardRouter")
// const userLogged = require("./middlewares/userLogged")
const path = require('path');
const connection = require('./database/connection');

app.get('/', (req, res) => {
    const data = {
        "title": "Página de Inicio",
        "message": "Bienvenido a la página de inicio",
        "showMessage": true,
        "items": [1,2,3,4,5]
    }

    // Renderizar la vista index.ejs con los datos
    res.render('index', data);
})

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging
app.use(morgan("dev"));

// Middleware de autenticación
// app.use(userLogged);

// Usar el router de usuarios
app.use('/users', userRouter);

// Usar el router de autenticación
app.use('/auth', authRouter);

// Usar el router del dashboard
app.use('/dashboard', dashboardRouter);

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor Express escuchando en el puerto 3000");
})