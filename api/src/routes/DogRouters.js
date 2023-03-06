const {Router} = require("express");
const dogRouter = Router()
const {API_KEY} = process.env
const { Dog,Temperaments,DogTemperament } = require('../db')
const {getAllApi,getAllDb,getDogForNameAPI,getDogForNameDB} = require('../Controller/Controllers.js');
const { UUID } = require("sequelize");



dogRouter.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params
        let getAllDog1 = await getAllApi()
        let getAllDog2 = await getAllDb()
        let response = getAllDog2.concat(getAllDog1)
        response = response.filter(e=>e.id == id)

        res.status(200).json(response)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

dogRouter.get('/',async (req,res)=>{
    try{
        if(!req.query.hasOwnProperty("name")){
            try{
                const getAllDog1 = await getAllApi()
                const getAllDog2 = await getAllDb()
                const response = getAllDog2.concat(getAllDog1)
                res.status(200).json(response)
            }catch(error){
                res.status(400).json({error : error})
            }
        }else{
            const {name} = req.query
            const getDogForName1 = await getDogForNameAPI(name)
            const getDogForName2 = await getDogForNameDB(name)
            const response = getDogForName2.concat(getDogForName1)
            res.status(200).json(response)
        }
        
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})

dogRouter.post("/", async (req, res) => {
    const { name, heightMax, heightMin, weightMax, weightMin, lifeSpanMax, lifeSpanMin, image, temperament } = req.body

    try {
        const newDog = await Dog.create({
            name, heightMax, heightMin, weightMax, weightMin, lifeSpanMax, lifeSpanMin, image
        })

        const newT = temperament.split(", ")

        for(let i = 0; i < newT.length; i++){
            const temp = await Temperaments.findOrCreate({
                where: {
                    name: newT[i]
                }
        })

        const dogTemperament = await DogTemperament.create({
                dogId: newDog.id,
                temperamentId: temp[0].id
        })
    
    }
        res.status(200).json({message : "the dog was created"})
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "An error occurred while creating the dog" })
    }   
}) 

module.exports = dogRouter;