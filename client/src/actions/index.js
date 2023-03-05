import axios from "axios";
import dotenv from "dotenv";
import {
    GET_ALL_DOGS,
    GET_ALL_TEMPERAMENT,
    GET_DOGS_FOR_NAME,
    GET_DESCRIPTION,
    FILTER_TEMPERAMENT,
    FILTER_API,
    FILTER_DB,
    FILTER_ALL,
    ORDER_ASC,
    ORDER_DES,
    ORDER_WEIGHT_MIN,
    ORDER_WEIGHT_MAX
} from "./actions";
dotenv.config();

//! Gets

export const getDogs = () => {
    axios.get("http://localhost:3001/dogs/")
    .then((response) => {
        dispatch({type:GET_ALL_DOGS, payload: response.data})
    })
}

export const getTemperaments = () =>{
    axios.get("http://localhost:3001/temperaments/")
    .then((response)=>{
        let res = response.data.map(e => e.name)
        dispatch({tipe:GET_ALL_TEMPERAMENT, payload : res})
    })
}

export const getDogForName = (name) =>{
    return {
        type: GET_DOGS_FOR_NAME,
        payload : name
    }
}

export const getDescription = (id) =>{
    return{
        type : GET_DESCRIPTION,
        payload : id
    }
}

//! Filters

export const filterTemperament = (temperament) =>{
    return {
        type : FILTER_TEMPERAMENT,
        payload : temperament
    }
}

export const filterApi = () =>{
    return {
        type : FILTER_API
    }
}
export const filterDb = () =>{
    return {
        type : FILTER_DB
    }
}
export const filterAll = () =>{
    return {
        type : FILTER_ALL
    }
}

//! ORDER

export const orderAsc = () =>{
    return{
        type : ORDER_ASC
    }
} 
export const orderDes = () =>{
    return{
        type : ORDER_DES
    }
} 
export const orderWeightMax = () =>{
    return{
        type : ORDER_WEIGHT_MAX
    }
} 
export const orderWeightMin = () =>{
    return{
        type : ORDER_WEIGHT_MIN
    }
} 