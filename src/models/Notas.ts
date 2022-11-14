import {Schema, model, Document} from "mongoose"

const schema= new Schema({
    asignatura: {
        type: String,
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    },
    curso:{
        type: Number,
        required: true
    },
    nota: String
})

interface INota extends Document{
    asignatura: string,
    calificacion: number,
    curso: number,
    nota: string
}

export default model<INota>("Nota", schema)