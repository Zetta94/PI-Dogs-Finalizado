export default function validation (formData){
    let error = {}

    if (formData.name === '') {
        error.name = 'Name is required'
    }

     if(!/^[A-Za-z\s]*$/.test(formData.name)){
         error.name = 'The name must not have any numerical characters'
     }else if(formData.name.length > 0 && formData.name.length < 5){
        error.name = "The name cannot have less than 5 characters";
    }

    if (formData.heightMin === '') {
        error.heightMin = 'Height Minimum is required'
    }else if (Number(formData.heightMin) >= Number(formData.heightMax)) {
        error.heightMin = 'Minimum height cannot be greater than maximum height.'
    }

    if (formData.heightMax === '') {
        error.heightMax = 'Height Maximum is required'
    } else if (Number(formData.heightMax) <= Number(formData.heightMin)) {
        error.heightMax = 'Maximum height cannot be less than  minimum height.'
    }

    if (formData.weightMin === '') {
        error.weightMin = 'Weight Minimun is required'
    }else if (Number(formData.weightMin) >= Number(formData.weightMax)) {
        error.weightMin = 'Minimum weight cannot be greater than maximum weight.'
    }

    if (formData.weightMax === '') {
        error.weightMax = 'Weight Maximun is required'
    } else if (Number(formData.weightMax) <= Number(formData.weightMin)) {
        error.weightMax = 'Maximum weight cannot be less than  minimum weight.'
    }

    if (formData.lifeSpanMin === '') {
        error.lifeSpanMin = 'Life Span Minimun is required'
    }else if (Number(formData.lifeSpanMin) >= Number(formData.lifeSpanMax)) {
        error.lifeSpanMin = 'Life Span minimum cannot be greater than life Span maximum.'
    }

    if (formData.lifeSpanMax === '') {
        error.lifeSpanMax = 'Life Span Maximun is required'
    }else if (Number(formData.lifeSpanMax)<= Number(formData.lifeSpanMin)) {
        error.lifeSpanMax = 'Life Span maximum weight cannot be greater than Life Span minimum.'
    }

    return  error;
}
