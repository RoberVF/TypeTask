import mongoose, {Request, Response}  from "express"

import Task from "../models/Task"


export function mostrarPagina(req:Request, res:Response, pagina: string){
    res.render(pagina)
}

export async function mainPage(req:Request, res:Response){
    const allTasks= await Task.find({"completado": "false"})
    res.render("index", { allTasks })
}

export async function createTask(req:Request, res:Response){
    const {nombre, asignatura, descripcion, tiempo, completado}= req.body
    const newTask= {
        nombre,
        asignatura,
        descripcion,
        tiempo,
        completado
    }
    try{
        const task= new Task(newTask)
        await task.save()
        console.log(req.body)
        res.redirect("/")
    }catch{
        res.render("pages/createTask")
    }  
}

export async function eliminarTask(req: Request, res: Response){
    await Task.findByIdAndDelete(req.params.id)
    res.redirect("/")
}

export async function completado(req:Request, res:Response){
    const completed= await Task.find({"completado" : "true"}).sort({field: "desc"})
    res.render("pages/completados", { completed })
}

export async function actualizarTask(req:Request, res:Response){
    const {id}= req.params
    const completado= true
    await Task.findByIdAndUpdate(id, {completado})
    console.log(req.params)
    console.log(req.body)
    res.redirect("/")
}
