import { getDescription } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

const Detail = () => {
    
    const dispatch = useDispatch()
    const dog = useSelector((state)=>state.dogsDescription)
    let {id} = useParams()

    useEffect(()=>{
        dispatch(getDescription(id))
    },[dispatch,id])

    if(!id) return (<h1>Loading...</h1>)


    return(
        <div className={style.container}> 
            <div className={style.box}>
                <div className={style.box1}>
                    <h1>{dog.name?.toUpperCase()} </h1>            
                    <img src={dog.image} alt={dog.name} width="550px"/> 
                    <div>
                        <Link to="/home">
                                <button className={style.button1}>Home</button>
                        </Link>
                    </div>
                </div>
                <div className={style.box2}>
                    <h1>Temperament <p>{dog.temperament}</p></h1>
                    <h1>Maximum weight <p>{dog.weightMax} kg</p></h1>
                    <h1>Minimum weight <p>{dog.weightMin} kg</p></h1>
                    <h1>Maximum height <p>{dog.heightMax} cm</p></h1>
                    <h1>Minimum height <p>{dog.heightMin} cm</p></h1>
                    <h1>Life span <p>{dog.lifeSpanMin} to {dog.lifeSpanMax} years old</p></h1>
                </div>
            </div>
        </div>
    )
}
export default Detail;