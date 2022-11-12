"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    asignatura: String,
    descripcion: String,
    completado: Boolean,
    tiempo: Number
});
exports.default = (0, mongoose_1.model)("Task", schema);
