import {Schema, model, Document} from "mongoose";

const schema= new Schema({
    nombre: String,
    asignatura: String,
    descripcion: String,
    completado: Boolean,
    tiempo: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

interface ITask extends Document{
    nombre: string,
    asignatura: string,
    descripcion: string,
    completado: boolean,
    tiempo: number,
    createdAt: Date
}

export default model<ITask>("Task", schema)