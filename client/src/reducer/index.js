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
} from "../actions/actions";

const initialState = {
    dogs : [],
    temperaments : [],
    dogsFilter : [],
    dogsDescription : {},
}

export default function rootReducer(state = initialState,action){
    let aux1 = []
    let aux2  = []
    switch(action.type){

        case GET_ALL_DOGS : 
            aux1 = action.payload
            return {
                ...state, 
                dogs: action.payload,
                dogsFilter : aux1
            }

        case GET_ALL_TEMPERAMENT : 
            return {
                ...state, 
                temperaments : action.payload
            }

        case GET_DOGS_FOR_NAME: 
            aux2 = state.dogs.filter((e) => {
                if (e.name.includes(action.payload)) {
                    return e;
                }
                return null; 
            });
            return {
              ...state,
              dogsFilter: aux2
            };

        case GET_DESCRIPTION:
            return {
                ...state,
                dogsDescription : action.payload[0]
            }

        case FILTER_TEMPERAMENT:
            aux1 = state.dogs.filter(dog => {
                if(!dog.temperament) return undefined;
                return dog.temperament.includes(action.payload)
            })
            console.log(aux1)
            return{
                ...state,
                dogsFilter : aux1
            }

        case FILTER_API :
            aux1 = state.dogs.filter(e => e.comesFrom === "API")
            console.log(aux1)
            return{
                ...state,
                dogsFilter : aux1
            }
        
        case FILTER_DB :
            aux1 = state.dogs.filter(e => e.comesFrom === "DB")
            console.log(aux1)
            return{
                ...state,
                dogsFilter : aux1
            }   

        case FILTER_ALL:
            aux1 = state.dogs.map(e => e)
            return{
                state,
                dogsFilter : aux1
            }
        
        case ORDER_ASC :
             aux1 = state.dogsFilter.sort((a,b)=>a.name.localeCompare(b.name))
             return{
                ...state,
                dogsFilter : aux1
             }

        case ORDER_DES:
            aux1 = state.dogsFilter.sort((a, b) => b.name.localeCompare(a.name))
            return{
                ...state,
                dogsFilter : aux1
             }

        case ORDER_WEIGHT_MIN:
            aux1 = state.dogsFilter.sort((a,b)=> Number(a.weightMin)-Number(b.weightMin))
            return{
                ...state,
                dogsFilter : aux1
             }

        case ORDER_WEIGHT_MAX:
            aux1 = state.dogsFilter.sort((a,b)=> Number(a.weightMax) - Number(b.weightMax))
            return{
                ...state,
                dogsFilter : aux1
            }

        default : return {...state}
    }
}