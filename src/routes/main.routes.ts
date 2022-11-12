import {Router, Request, Response} from 'express'
import { isRegularExpressionLiteral } from 'typescript'
const router= Router()

import {mostrarPagina, createTask, mainPage, eliminarTask} from "../controllers/main.controllers"

router.route("/").get(mainPage)
router.route("/crearTask").post(createTask)
router.route("/incluirDatos").get((req,res)=>mostrarPagina(req,res,"pages/createTask"))
router.route("/eliminarTask/:id").get(eliminarTask)

export default router