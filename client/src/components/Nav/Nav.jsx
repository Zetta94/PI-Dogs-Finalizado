import React,{ useState } from "react";
import style from "./Nav.module.css"
import { useDispatch} from "react-redux";
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
    <div className={style.navbar}>
      <div className={style.divH}>
        <div>
          <Link to="/">
            <img src="https://usagif.com/wp-content/uploads/2022/4hv9xm/red-panda-44.gif" width="175px" alt="img not found"/>
          </Link>
        </div>

        <div>
          <Link to="/home">HOME</Link>
          <Link to="/form">CREATE</Link>
        </div>
      </div>

      <div>
        <input type="text" value={dogN} onChange={handleChange}/>
        <button onClick={onChange}>Buscar</button>
      </div>  
    </div>
  );
}

export default Nav;
