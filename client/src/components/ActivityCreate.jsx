import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { postActivity, getCountries } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import "../css/Create.css" 


export default function ActivityCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors] = useState({});
    const countries = useSelector((state) => state.countries)

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []

    })

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    // function validate(input) {
    //     let errors = {};
    //     if(!input.name) {
    //         errors.name = 'Se requiere un Nombre'
    //     } else if (!input.difficulty) {
    //         errors.difficulty = 'Dificultad debe ser completada';
    //     }
    //     return errors;
    // }
    
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                status: e.target.value
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            countries: [...input.countries, {country: e.target.value}]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(Object.values(errors).length > 0){
            alert("You need to fill everything form to create an activity")
        } else {
            dispatch(postActivity(input))
            alert("Actividad creada!")
            setInput({
             name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
            })
            history.push('/home')
        }
    }
    return(
        <div className="create">
            <Link to= '/home'><button className='volver'>❌</button></Link>
            <h1 className='actitle'>Creá tu actividad!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label className='label'>Nombre:</label>
                    <input
                    type="text"
                    value= {input.name}
                    name= "name"
                    onChange={(e)=>handleChange(e)}
                    />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label className='label'>Dificultad:</label>
                    <input
                    type="text"
                    value= {input.difficulty}
                    name= "difficulty"
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div>
                    <label className='label'>Duración:</label>
                    <input
                    type="text"
                    value= {input.duration}
                    name= "duration"
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div>
                    <label className='checkbox'>Temporada:</label>
                    <label className='checkbox'><input
                    type="checkbox"
                    value= "Verano"
                    name= "Verano"
                    onChange={(e)=>handleCheck(e)}
                    />Verano</label>
                    <label className='checkbox'><input
                    type="checkbox"
                    value= "Otoño"
                    name= "Otoño"
                    onChange={(e)=>handleCheck(e)}
                    />Otoño</label>
                    <label className='checkbox'><input
                    type="checkbox"
                    value= "Invierno"
                    name= "Invierno"
                    onChange={(e)=>handleCheck(e)}
                    />Invierno</label>
                    <label className='checkbox'><input
                    type="checkbox"
                    value= "Primavera"
                    name= "Primavera"
                    onChange={(e)=>handleCheck(e)}
                    />Primavera</label>
                </div>
                <select onChange={(e) => handleSelect(e)}>
                       {countries.map((con) => (
                           <option value={con.cca3}>{con.name}</option>
                       ))} 
                    </select>
                    <button className='crea' onClick={(e) => {handleSubmit(e)}}>Crear Actividad</button>
            </form>
            <ul><li>{input.countries.map(el => el + " ,")}</li></ul>
        </div>
    )
}