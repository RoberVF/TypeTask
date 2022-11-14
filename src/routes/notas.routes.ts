import {Router} from 'express'
const routerNotas= Router()

import {incluirNota, notasMain, notasPage} from "../controllers/notas.controllers"
import router from './main.routes'

routerNotas.route("/notas").get(notasMain)
routerNotas.route("/createNota").get((req,res)=> notasPage(req,res,"pages/notas/createNota"))
routerNotas.route("/incluirNota").post(incluirNota)

export default routerNotas
