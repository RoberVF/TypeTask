import express from 'express'
import morgan from "morgan"
const app= express()
const path= require('path')

import router from "./routes/main.routes"

const PORT= 3000 || process.env.PORT

app.set('port', PORT)
app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))

app.use(router)
app.use(express.static(path.join(__dirname, "/public")))

export default app