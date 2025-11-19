const mongoose = require('mongoose');
const { db } = require('../config');

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
.then( () => {
    console.log('DB connected');
}).catch( error => {
    console.error("DB connection error:", error);
});

module.exports = connection;