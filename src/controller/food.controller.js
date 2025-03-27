import foodModel from "../model/food.model.js"


const getAllFoods = async (req, res) => {
    const foods = await foodModel.find().populate("category");

    res.send({
        message: "success",
        count: foods.length,
        data: foods
    });
}


const createFood = async (req,res) => {
    const {name, price, category, description, imageUrl} = req.body;
    const newFood = await foodModel.create({
        name,
        price,
        category,
        description,
        imageUrl
    });

    res.send({
        message: "success",
        data: newFood
    });
    
}

export default { getAllFoods, createFood }