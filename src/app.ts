import express from 'express'
import morgan from "morgan"
const app= express()
const path= require('path')

import router from "./routes/main.routes"
const mainRoutes= router
import routerNotas from "./routes/notas.routes"
const notasRoutes= routerNotas


const PORT= 3000 || process.env.PORT

app.set('port', PORT)
app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))

app.use(mainRoutes)
app.use(notasRoutes)
app.use(express.static(path.join(__dirname, "/public")))

export default app