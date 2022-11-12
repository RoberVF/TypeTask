"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTask = exports.createTask = exports.mainPage = exports.mostrarPagina = void 0;
const Task_1 = __importDefault(require("../models/Task"));
function mostrarPagina(req, res, pagina) {
    res.render(pagina);
}
exports.mostrarPagina = mostrarPagina;
async function mainPage(req, res) {
    const allTasks = await Task_1.default.find();
    res.render("index", { allTasks });
}
exports.mainPage = mainPage;
async function createTask(req, res) {
    const { nombre, asignatura, descripcion, tiempo } = req.body;
    const newTask = {
        nombre,
        asignatura,
        descripcion,
        tiempo
    };
    try {
        const task = new Task_1.default(newTask);
        await task.save();
        res.render("index");
    }
    catch {
        res.render("pages/createTask");
    }
}
exports.createTask = createTask;
async function eliminarTask(req, res) {
    await Task_1.default.findByIdAndDelete(req.params.id);
    res.redirect("/");
}
exports.eliminarTask = eliminarTask;
