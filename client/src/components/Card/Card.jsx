import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({id,name,image,weightMax,weightMin,heightMax,heightMin,lifeSpanMin,lifeSpanMax,temperament}) =>{
    return(
        <div className={style.divCard}>
            <Link className={style.link1} to={`/detail/${id}`}>
            <div>
                <h1>Name: {name} </h1>
            </div>
            <div>            
                <img src={image} alt={name} width="300px"/> 
            </div>
            <div>
                <h1>{temperament}</h1>
            </div>
            <div>
                <h2>Weight: {weightMin} - {weightMax} kg</h2>
            </div>
            </Link>
        </div>
    )
}
export default Card;