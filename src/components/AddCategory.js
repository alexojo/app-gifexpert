import React,{useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        //console.log(e);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); //No se realice el tipico renderizado

        setCategories (cats =>[inputValue,...cats]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            /> 
        </form>
    )
}

//indicar funciones o variables necesarias

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}