import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type:String,
            require:[true, "Password is required"]
        }
    }, {timestamps: true}        // timestamp tells when the entry is created and updated
)

export const user = mongoose.model("User", userSchema)