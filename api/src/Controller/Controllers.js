const {sequelize,Op} = require('sequelize')
const { Dog,Temperaments } = require('../db')
const axios = require('axios')
const {API_KEY} = process.env

module.exports={
    getAllApi : async ()=>{
        try{
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
            const dogList = await response.data.map(dog => {
                const weightTemp = dog.weight.metric.split("-")
                const heightTemp = dog.height.metric.split("-")
                const ageTemp = dog.life_span.slice(0, 7).split("-")
                return {
                    id: dog.id,
                    name: dog.name.toLowerCase(),
                    weightMin: weightTemp[0],
                    weightMax: weightTemp[1],
                    heightMin: heightTemp[0],
                    heightMax: heightTemp[1],
                    temperament: dog.temperament,
                    image: dog.image.url,
                    lifeSpanMin: ageTemp[0],
                    lifeSpanMax: ageTemp[1],
                    comesFrom: "API"
                }
            })
            return dogList
        }catch(error){
            return error
        }
    },
    getAllDb : async ()=>{
        try{
            const response = await Dog.findAll({
                include: Temperaments
            })

            
            let dogList = []
            dogList = await response.map(dog => {
                return {
                    id: dog.id,
                    name: dog.name.toLowerCase(),
                    weightMin: dog.weightMin,
                    weightMax: dog.weightMax,
                    heightMin: dog.heightMin,
                    heightMax: dog.heigthMax,
                    temperament: (dog.temperaments.map(e => e.name)).join(", "),
                    image: dog.image.url,
                    lifeSpanMin: dog.lifeSpanMin,
                    lifeSpanMax: dog.lifeSpanMax,
                    comesFrom: "DB"
                }
            })
            return dogList
        }catch(error){
            return error
        }
    },
    getDogForNameAPI : async (name1) => {
        try{
            const response = await axios(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    
            const dogsList = await response.data.filter(dog => {
                const name = dog.name.toLowerCase()
                if(name.includes(name1.toLowerCase())){
                    return dog
                }
            })
    
            const dogsListMap = await dogsList.map(dog => {
                const weightTemp = dog.weight.metric.split("-")
                const heightTemp = dog.height.metric.split("-")
                const ageTemp = dog.life_span.slice(0, 7).split("-")
                return {
                    id: dog.id,
                    name: dog.name.toLowerCase(),
                    weightMin: weightTemp[0],
                    weightMax: weightTemp[1],
                    heightMin: heightTemp[0],
                    heightMax: heightTemp[1],
                    temperament: dog.temperament,
                    image: dog.image.url,
                    lifeSpanMin: ageTemp[0],
                    lifeSpanMax: ageTemp[1],
                    comesFrom: "API"
                }
            })
            return dogsListMap
    
        }catch(error){
            return error
        }
    },
    getDogForNameDB : async (name1) => {

        try{
            // const response = await Dog.findAll({
            //     where: {
            //       name: {
            //         [Op.iLike]: `%${name1}%`
            //       }
            //     }
            //   })

            const response = await Dog.findAll({
                include: Temperaments
            })

            const dogsList = await response.filter(dog => { 
                if(dog.name.toLowerCase().includes(name1.toLowerCase())){
                    return dog;
                }
            })


            const dogsListMap = await dogsList.map(dog => {
                return {
                    id: dog.id,
                    name: dog.name.toLowerCase(),
                    weightMin: dog.weightMin,
                    weightMax: dog.weightMax,
                    heightMin: dog.heightMin,
                    heightMax: dog.heigthMax,
                    temperament: (dog.temperaments.map(e => e.name)).join(", "),
                    image: dog.image.url,
                    lifeSpanMin: dog.lifeSpanMin,
                    lifeSpanMax: dog.lifeSpanMax,
                    comesFrom: "DB"
                }
            })
            return dogsListMap
        }
        catch(error){
            return error
        }
    }
}