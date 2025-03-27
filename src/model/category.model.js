import mongoose, { SchemaTypes } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    foods: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Food",
        }
    ],
},
{
    collection: "categories",
    timestamps: true,
    versionKey: false,
});

export default mongoose.model("Category", categorySchema)
