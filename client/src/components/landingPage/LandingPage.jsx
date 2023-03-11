import {Link} from "react-router-dom";
import style from "../landingPage/LandingPage.module.css";
import img from "../../assets/PUG CORRIENDO.gif";
import sound from "../../assets/ladrido.mp3";

const LandingPage = () =>{

    const playSound = () =>{
        const audio = new Audio(sound)
        audio.play()
        setInterval(()=>{
            audio.pause()
        },1300)
    }
    return(
        <div className={style.div1}>
            <h1>Landing Page</h1>
            <div className={style.div2}>
                <img src={img} alt="img not found" />
                <Link to="/home" className={style.link1} onClick={playSound} >HOME</Link>
            </div>           
        </div>
    )
}

export default LandingPage;