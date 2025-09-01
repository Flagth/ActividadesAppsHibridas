const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquema = new Schema ({
    nombre: String,
    email: String,
    password: String,
    foto: String
});

const User = mongoose.model()

MediaSourceHandle.exports = User;