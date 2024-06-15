const express = require("express");
const dataBaseScheme = require('../model/model');

const router = express.Router()

//Get all the data
router.get("/getAll", async(req,res) => {
    try {
        const totalData = await dataBaseScheme.find()
        res.json(totalData)
    }catch(error) {
        res.status(400).json({message : error.message})
    }
})

//Get data by id
router.get("/getData/:id", async(req,res) => {
    try {
        const dataWithID = await dataBaseScheme.findById(req.params.id);
        res.json(dataWithID);
    }catch(error) {
        res.status(400).json({message : error.message});
    }
})

// Post the data
router.post("/post", async(req,res) => {
    const data = new dataBaseScheme({
        task : req.body.task,
        score: req.body.score
    });
    console.log(req);
    try {
        const dataSaved = await data.save();
        res.status(200).json(dataSaved);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
})

//Update the data
router.patch("/update/:id", async(req,res) => {
    try {
        const id = req.params.id;
        const dataUpdate = req.body;
        const options = { new : true};

        const result = await dataBaseScheme.findByIdAndUpdate(id, dataUpdate, options);
        res.json(result);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
})

// Delete the data
router.delete("/delete/:id", async(req,res) => {
    try {
        const id = req.params.id;

        const result = await dataBaseScheme.findByIdAndDelete(id);
        res.json(result);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;
