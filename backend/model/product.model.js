import mongoose from "mongoose";

const productmodel = new mongoose.Schema({
    title:{
        type: String
    },
    price:{
        type: Number
    }
    
})

const productSchema = mongoose.model('product',productmodel)
export default productSchema;