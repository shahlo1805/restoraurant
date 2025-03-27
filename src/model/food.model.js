
import mongoose, { SchemaTypes } from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: [true, "Mahsulot narxi berilishi shart"],
        min: 0
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    imageUrl: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    },
},
{
    collection: "products",
    timestamps: true,
    versionKey: false,
});

export default mongoose.model("Food", foodSchema);


