import { getDescription } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    
    const dispatch = useDispatch()
    const dog = useSelector((state)=>state.dogsDescription)
    let {id} = useParams()

    useEffect(()=>{
        dispatch(getDescription(id))
    },[dispatch,id])

    if(!id) return (<h1>Loading...</h1>)


    return(
        <div>
            <h1>Name: {dog.name} </h1>            
            <img src={dog.image} alt={dog.name} /> 
            <div>
                <h2>Peso Maximo: {dog.weightMax} kg</h2>
                <h2>Peso Minimo: {dog.weightMin} kg</h2>
            </div>
            <div>
                <h2>Altura Maxima: {dog.heightMax} cm</h2>
                <h2>Altura Minima: {dog.heightMin} cm</h2>
            </div>
            <div>
                <h1>Temperament: {dog.temperament}</h1>
            </div>
            <div>
                <h2>Tiempo de vida promedio: De {dog.lifeSpanMin} a {dog.lifeSpanMax} años de vida</h2>
            </div>
        </div>
    )
}
export default Detail;