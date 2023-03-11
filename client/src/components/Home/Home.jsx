import React, {useEffect,useState} from "react";
import Pagination from "../Paginado/Pagination"
import Card from "../Card/Card"
import style from "./Home.module.css";
import {useSelector, useDispatch} from "react-redux";
import { getDogs,
    getTemperaments,
    orderAsc,
    orderDes,
    orderWeightMax,
    orderWeightMin,
    filterApi,
    filterDb,
    filterTemperament,
} from '../../actions';


const Home = () =>{
    const dispatch = useDispatch()
    let allDogs = useSelector((state)=>state.dogsFilter)
    let temperaments = useSelector((state)=>state.temperaments)

    //Crear un estado para mantener la página actual y la cantidad de elementos por página.
    const [currentPage, setCurrentPage] = useState(1)
    const [elementsPerPage] = useState(8)

    //Crear un selector de Redux para obtener los elementos a mostrar en la página actual.
    const indexOfLastElement = currentPage * elementsPerPage
    const indexOfFirstElement = indexOfLastElement - elementsPerPage
    const currentElements = allDogs.slice(indexOfFirstElement, indexOfLastElement)

    //Crear una función que cambie la página actual cuando el usuario haga clic en un botón de paginación.
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
      }
     
    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
   },[dispatch])

   const handleOnChange = (e) => {
    e.preventDefault()
    dispatch(filterTemperament(e.target.value))
    setCurrentPage(2)
    setTimeout(()=>{
        setCurrentPage(1)
    },1)
   }

   const actualice= (action) =>{
    dispatch(action)
    setCurrentPage(2)
    setTimeout(()=>{
        setCurrentPage(1)
    },1)
   }

  const handleOnClick = (e)=>{
    e.preventDefault()
    if(e.target.name === "des") {
        actualice(orderDes())
    } 
    if(e.target.name === "asc") {
        actualice(orderAsc())
    }    
    if(e.target.name === "max") {
        actualice(orderWeightMax())
    }
    if(e.target.name === "min") {
        actualice(orderWeightMin())
    }
    if(e.target.name === "all"){
        actualice(getDogs())
    }
    if(e.target.name === "api") {
        actualice(filterApi())
    }    
    if(e.target.name === "db") {
        console.log(allDogs)
        actualice(filterDb())
        console.log(allDogs)
    }
  }

  return(
        <div>

            <div>
                <span>Order by: </span>
                <button name="asc" onClick={handleOnClick}>A - Z</button>
                <button name="des" onClick={handleOnClick}>Z - A</button>
                <button name="max" onClick={handleOnClick}>Weight Max</button>
                <button name="min" onClick={handleOnClick}>Weight Min</button>
            </div>
            <div>
                <span>Filter by: </span>
                <button name="all" onClick={handleOnClick}>ALL</button>
                <button name="api" onClick={handleOnClick}>API</button>
                <button name="db" onClick={handleOnClick}>DB</button>
            </div>
            <div>
                <span>Temperament: </span>
                <select onChange={handleOnChange}>
                    {
                        temperaments.map((e,index) => 
                            <option key={index}>
                                {e.name}
                            </option> )
                    }
                </select>
            </div>

            <Pagination 
                currentPage={currentPage}
                elementsPerPage={elementsPerPage}
                totalElements={allDogs.length}
                onPageChange={handlePageChange}
            />

            <div className={style.content}>
            {currentElements.map(dog => (
                <Card
                key = {dog.id} 
                id={dog.id} 
                name={dog.name}
                image = {dog.image}
                weightMax = {dog.weightMax}
                weightMin = {dog.weightMin}
                heightMax = {dog.heightMax}
                heightMin = {dog.heightMin}
                lifeSpanMin ={dog.lifeSpanMin}
                lifeSpanMax ={dog.lifeSpanMax}
                comesFrom = {dog.comesFrom}
                temperament ={dog.temperament}
                />
            ))}
            </div>
        </div>
    )
}

export default Home;
