import React,{ useState } from "react";
import style from "./Nav.module.css"
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {getDogForName} from "../../actions"; 


function Nav() {
  const dispatch = useDispatch()
  const [dogN,setDogN] = useState("")
  
  const onChange = ()=>{
    dispatch(getDogForName(dogN))
  }

  const handleChange = (e) =>{
    setDogN(e.target.value)
  }

  return (
    <div className={style.divAll}>

      <div className={style.divTwo}>
        <div>
          <Link to="/">
            <img src="https://www.gifss.com/animales/perros/images/perro-animado-12.gif" width="100px" alt="img not found"/>
          </Link>
        </div>

        <div>
            <input type="text" value={dogN} onChange={handleChange}/>
            <button onClick={onChange}>Buscar</button>
        </div>
      </div>
      
      <div className={style.menu}>
        <Link to="/home">HOME</Link>
        <Link to="/form">Create</Link>
      </div>
      
    </div>
  );
}

export default Nav;
