import {Router, Request, Response} from 'express'
import { isRegularExpressionLiteral } from 'typescript'
const router= Router()

import {mostrarPagina, createTask, mainPage, eliminarTask, completado, actualizarTask} from "../controllers/main.controllers"

router.route("/").get(mainPage)
router.route("/crearTask").post(createTask)
router.route("/incluirDatos").get((req,res)=>mostrarPagina(req,res,"pages/createTask"))
router.route("/eliminarTask/:id").get(eliminarTask)
router.route("/completados").get(completado)
router.route("/completarTask/:id").post(actualizarTask).get((req,res)=>res.redirect("/"))


export default router