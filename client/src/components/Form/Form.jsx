import React, {useState} from "react";
import style from "../Form/Form.module.css"
import { createDog } from "../../actions";

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
          <img src="https://cdn-icons-png.flaticon.com/512/4954/4954516.png" alt="perro pensando" />
        </div>
        <form onSubmit={handleSubmit} className={style.form}>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="heightMin">Height Min</label>
            <input
              type="number"
              id="heightMin"
              name="heightMin"
              value={formData.heightMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="heightMax">Height Max</label>
            <input
              type="number"
              id="heightMax"
              name="heightMax"
              value={formData.heightMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="weightMin">Weight Min</label>
            <input
              type="number"
              id="weightMin"
              name="weightMin"
              value={formData.weightMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="weightMax">Weight Max</label>
            <input
              type="number"
              id="weightMax"
              name="weightMax"
              value={formData.weightMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lifeSpanMin">Life Span Min</label>
            <input
              type="number"
              id="lifeSpanMin"
              name="lifeSpanMin"
              value={formData.lifeSpanMin}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lifeSpanMax">Life Span Max</label>
            <input
              type="number"
              id="lifeSpanMax"
              name="lifeSpanMax"
              value={formData.lifeSpanMax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="temperament">temperament</label>
            <input
              type="text"
              id="temperament"
              name="temperament"
              value={formData.temperament}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
export default Form;