const {Router} = require("express");
const dogRouter = Router()
const {API_KEY} = process.env
const { Dog,Temperaments } = require('../db')
const {getAllApi,getAllDb,getDogForNameAPI,getDogForNameDB} = require('../Controller/Controllers.js');
const { UUID } = require("sequelize");



dogRouter.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; 

        let race1 =  await fetch(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
        .then(data => data.json())
        .then(dogs => dogs.filter(dog => dog.id==Number(id)))
        .catch((error)=>res.status(400).send(error.message))
        let race ;

        if (uuidRegex.test(id)) {
            race =  await Dog.findAll({
                where : {
                    id: id
                }
            })
        } 
     

         if(race){
             res.status(200).json(race)
         }else {
            res.status(200).json(race1)
         }


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

        for(let i = 0; i < temperament.length; i++){
            const temp = await Temperaments.findOne({
                where: {
                    name: temperament[i]
                }
            })
            await newDog.addTemperaments(temp)

        }
        res.status(200).json({message : "the dog was created"})
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "An error occurred while creating the dog" })
    }   
}) 

module.exports = dogRouter;