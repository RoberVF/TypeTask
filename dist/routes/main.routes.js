"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const main_controllers_1 = require("../controllers/main.controllers");
router.route("/").get(main_controllers_1.mainPage);
router.route("/crearTask").post(main_controllers_1.createTask);
router.route("/incluirDatos").get((req, res) => (0, main_controllers_1.mostrarPagina)(req, res, "pages/createTask"));
router.route("/eliminarTask/:id").get(main_controllers_1.eliminarTask);
exports.default = router;