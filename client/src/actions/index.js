import axios from "axios";
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
import img from "../assets/AKITACORRIENDO.gif"

//! Gets

export const getDogs = () => async (dispatch) => {
    await axios.get("http://localhost:3001/dogs/")
    .then((response) => {
        dispatch({type:GET_ALL_DOGS, payload: response.data})
    })
}

export const getTemperaments =  () =>async(dispatch) => {
    await axios.get("http://localhost:3001/temperament/")
    .then((response)=>{
        dispatch({type:GET_ALL_TEMPERAMENT, payload : response.data})
    })
}

export const getDogForName = (name) =>{
    return {
        type: GET_DOGS_FOR_NAME,
        payload : name
    }
}

export const getDescription = (id) => async (dispatch) => {
    await axios.get(`http://localhost:3001/dogs/${id}`)
    .then((response) => {
        dispatch({type:GET_DESCRIPTION, payload: response.data})
    })
}

export const createDog = (dog) =>{
    if(dog.image === ""){
        dog.image = img
    }
    return axios.post("http://localhost:3001/dogs/",dog)
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