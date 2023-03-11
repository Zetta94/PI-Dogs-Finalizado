import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({id,name,image,weightMax,weightMin,heightMax,heightMin,lifeSpanMin,lifeSpanMax,temperament}) =>{
    return(
        <div className={style.card}>
            
            <div>
                <h2>{name.toUpperCase() } </h2>
            </div>
            <Link to={`/detail/${id}`}>
                <div>            
                    <img src={image} alt={name} width="300px"/> 
                </div>
            </Link>
            <p><span>Temperament:</span> <span className={style.temperament}>{temperament}</span></p>
            <p><span>Weight:</span> {weightMin} - {weightMax} kg</p>
            
        </div>
    )
}
export default Card;