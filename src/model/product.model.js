import mongoose, { SchemaTypes } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    price: Number,
    description: String,
    imageUrl: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    },
},
{
    collection: "foods",
    timestamps: true,
    versionKey: false,
});

export default mongoose.model("Product", productSchema);


