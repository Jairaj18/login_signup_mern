import productSchema from "../model/product.model.js";

export const createProduct =async(req,res)=>{

    const {title, price } = req.body;
   
    const procuct = await productSchema.findOne({title});
    if(procuct){
        return res.status(404).json({
            msg: "procuct is already register",
         })
    }
    const pro = await productSchema.create({
       title,
       price
    });
    return res.status(200).json({
       msg: "pro is successfully register",
       pro
    })
}

