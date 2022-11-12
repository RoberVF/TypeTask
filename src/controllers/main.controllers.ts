import mongoose, {Request, Response}  from "express"

import Task from "../models/Task"


export function mostrarPagina(req:Request, res:Response, pagina: string){
    res.render(pagina)
}

export async function mainPage(req:Request, res:Response){
    const allTasks= await Task.find()
    res.render("index", { allTasks })
}

export async function createTask(req:Request, res:Response){
    const {nombre, asignatura, descripcion, tiempo}= req.body
    const newTask= {
        nombre,
        asignatura,
        descripcion,
        tiempo
    }
    try{
        const task= new Task(newTask)
        await task.save()
        res.render("index")
    }catch{
        res.render("pages/createTask")
    }  
}

export async function eliminarTask(req: Request, res: Response){
    await Task.findByIdAndDelete(req.params.id)
    res.redirect("/")
}
