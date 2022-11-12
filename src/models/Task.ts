import {Schema, model, Document} from "mongoose";

const schema= new Schema({
    nombre: String,
    asignatura: String,
    descripcion: String,
    completado: Boolean,
    tiempo: Number
})

interface ITask extends Document{
    nombre: string,
    asignatura: string,
    descripcion: string,
    completado: boolean,
    tiempo: number
}

export default model<ITask>("Task", schema)