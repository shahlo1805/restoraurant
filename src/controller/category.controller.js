import { isValidObjectId } from "mongoose";
import categoryModel from "../model/category.model.js"

const getAllCategories = async (req,res) => {

    const { limit, page ,sortField = "createdAt", sortOrder = "asc"}= req.query;
    const categories = await categoryModel.find().skip((page-1) * limit).limit(limit).sort([[sortField, sortOrder]]);


    res.send({
        message: "seucess",
        data: categories
    })
}

const getCategorybyId = async (req,res) => {
    const { id } = req.params;
    if(!isValidObjectId(id)){
        return res.status(404).send({
            message: `id notogri kiritilgan`
        })
    }

    const category = await categoryModel.findById(id);

    if(!category) {
        res.send({
            message: "Berilgan id boyicha category topilmadi"
        })
        }
    
    res.send({
        message: "success",
        data: category
    })

};


const createCategory = async (req,res) => {
    const { name } = req.body;

    const foundedCategory = await categoryModel.findOne({name });

    if(foundedCategory){
        return res.status(409).send({
            message: `Category: ${name} allaqachon mavjud`
        })
    }

    const category = await categoryModel.create({name});

    res.send({
        message: "success",
        data: category
    })
}


const updateCategory = async (req,res) => {
    const { id } = req.params;
    const { name } = req.body
    if(!isValidObjectId(id)){
        return res.status(400).send({
            message: `id notogri kiritilgan`
        })
    }

    const foundedCategory = await categoryModel.findOne({name});

    if(foundedCategory){
        return res.status(404).send({
            message: `Bunday nomdagi category allaqachon mavjud`
        })
    }

    const updateCategory = await categoryModel.findByIdAndUpdate(id, {name});

    if(!updateCategory){
        return res.status(404).send({
            message: `Bunday id li malumot topilmadi`
        })
    }

    res.send({
        message: "success",
        data: updateCategory
    })
}


const deleteCategory = async (req,res) => {
    const { id } = req.params;
    

    if(!isValidObjectId(id)){
        return res.status(400).send({
            message: `id notogri kiritilgan`
        })
    }

    const deletedCategory = await categoryModel.findByIdAndDelete(id);

    res.send({
        message: "o'chirildi",
        data: deletedCategory
    })
}

export default {getAllCategories, createCategory, getCategorybyId, updateCategory, deleteCategory}