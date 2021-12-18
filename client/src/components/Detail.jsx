import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getDetail } from '../actions';
import '../css/Detail.css'

export default function Detail(props) {
    
    const id = props.match.params.cca3
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch, id])

  const myCountry = useSelector ((state) => state.detail)
  console.log(myCountry)
  return (
      <div className='all'>
          
              <div>
              <h1>País:{myCountry.name}</h1>
              <img src= {myCountry.flags? myCountry.flags : myCountry.flags } alt="" width="15%" height="15%" />
              <h2>Continente: {myCountry.continents}</h2>
              <p>Capital: {myCountry.capital}</p>
              <h3>Región: {myCountry.subregion}</h3>
              <h4>Area:{myCountry.area}</h4>
              <h5>Población:{myCountry.population}</h5>
              <h4>Actividades:{myCountry.activities?.map(el => el.name + (' '))}</h4>
              </div>  
          
          <Link to= '/home'>
          <button className='back'>❌</button>
          </Link>
      </div> 
  )

}
