import React, {useState} from "react";
import style from "../Form/Form.module.css"
import { createDog } from "../../actions";
import { Link } from "react-router-dom";

const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      heightMin: '',
      heightMax: '',
      weightMin: '',
      weightMax: '',
      lifeSpanMin: '',
      lifeSpanMax: '',
      image: '',
      temperament: '',
    })
  
    const handleChange = (e) => {
      setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    })}
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await createDog(formData)
          console.log(response)
          alert("Dog was created")
        } catch (err) {
          console.error(err)
        }
    }
  
    return (
      <div className={style.container}>
        <div>
        <div className={style.box1}>
            <Link to="/home">
              <button className={style.button1}>Home</button>
            </Link>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/4954/4954516.png" alt="perro pensando" />
        </div>
        <form onSubmit={handleSubmit} className={style.form}>

          <div>
            <label htmlFor="name"><h1>Name</h1></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="heightMin"><h1>Height Min</h1></label>
            <input
              type="number"
              id="heightMin"
              name="heightMin"
              value={formData.heightMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="heightMax"><h1>Height Max</h1></label>
            <input
              type="number"
              id="heightMax"
              name="heightMax"
              value={formData.heightMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="weightMin"><h1>Weight Min</h1></label>
            <input
              type="number"
              id="weightMin"
              name="weightMin"
              value={formData.weightMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="weightMax"><h1>Weight Max</h1></label>
            <input
              type="number"
              id="weightMax"
              name="weightMax"
              value={formData.weightMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lifeSpanMin"><h1>Life Span Min</h1></label>
            <input
              type="number"
              id="lifeSpanMin"
              name="lifeSpanMin"
              value={formData.lifeSpanMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lifeSpanMax"><h1>Life Span Max</h1></label>
            <input
              type="number"
              id="lifeSpanMax"
              name="lifeSpanMax"
              value={formData.lifeSpanMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="image"><h1>Image</h1></label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="temperament"><h1>Temperament</h1></label>
            <input
              type="text"
              id="temperament"
              name="temperament"
              value={formData.temperament}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={style.button1}>Submit</button>
        </form>
      </div>
    );
  };
export default Form;