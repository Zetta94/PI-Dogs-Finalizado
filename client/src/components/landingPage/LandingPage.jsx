import {Link} from "react-router-dom";
import style from "../landingPage/LandingPage.module.css";
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
            <div>
                <h1 className={style.title}>My heart</h1>
                <h1 className={style.title}>is full</h1>
                <h1 className={style.title}>of footprints!</h1>
            </div>
            <div>
                <h1 className={style.title}>Join us!</h1>
                <div className={style.box1}>
                    <img src="https://media.tenor.com/-N9ApkrwieUAAAAi/cute-dogs.gif" alt="img not found" width="250px"/>
                    <Link to="/home"  onClick={playSound} >
                            <button className={style.button1}>Home</button>
                    </Link>
                </div>
            </div>
                       
        </div>
    )
}

export default LandingPage;