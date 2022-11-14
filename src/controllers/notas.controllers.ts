import {Request, Response} from "express"


import Nota from "../models/Notas"

export function notasPage(req:Request, res:Response, page:string){
    res.render(page)
}

export async function notasMain(req:Request, res:Response){
    const allNotas= await Nota.find()
    res.render("pages/notas/mainNotas", { allNotas })
}

export async function incluirNota(req:Request, res:Response){
    const {asignatura, calificacion, curso, nota}= req.body
    const newNota= {
        asignatura,
        calificacion,
        curso,
        nota
    }
    try{
        const nota= new Nota(newNota)
        await nota.save()
        console.log(newNota)
        res.redirect("/notas")
    }catch(e){
        console.log(e)
    }
}