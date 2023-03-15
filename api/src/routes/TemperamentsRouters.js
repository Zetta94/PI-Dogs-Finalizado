const axios = require("axios");
const {Router} = require("express");
const router = Router()
const { Temperaments } = require("../db");
const {API_KEY} = process.env

router.get('/',async (req,res)=>{
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`);

    const temperamentsList = response.data.map(dog => {
        if(!dog.temperament) return dog.temperament = undefined;
        const aux = dog.temperament.split(", "); 
        return aux;
    });

    //Elimino los valores nulos
    const realValues = temperamentsList.flat().filter(Boolean);
    //Creo un arreglo de valores unicos
    const valoresUnicos = new Set(realValues); 
    const finalResponse = [...valoresUnicos]; 

    finalResponse.forEach(dog => Temperaments.findOrCreate({
        where: {
            name: dog
        }
    }))

    const response2 = await Temperaments.findAll(); 
    res.send(response2);
})

module.exports = router;