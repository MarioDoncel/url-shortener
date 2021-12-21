import mongoose from 'mongoose'

interface IURL {
    hash:string
    originalURL:string
    shortURL:string
}
const schema = new mongoose.Schema<IURL>({
    hash: {type:String, required: true},
    originalURL: {type:String, required: true},
    shortURL: {type:String, required: true}
})
export const URLModel = mongoose.model<IURL>('URL', schema);