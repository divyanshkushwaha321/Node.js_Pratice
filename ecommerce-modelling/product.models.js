import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        productImage:{
            type: String,       // Images can be stored in database but not recommended because it makes database heavy. We can store image in a folder in server and take the public URL of image. OR we can use 3rd party services. so the URL will be in String.
        },
        price:{
            type: Number,
            default: 0
        },
        stock:{
            default: 0,
            type: Number
        },
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Category',
            required: true
        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {timestamps: true}
)

export const Product = mongoose.model('Product', productSchema) 