import React from "react";
import '../css/Card.css'

export default function Card(props) {
  const { name, flags, continents, capital } = props;
  return (
    <div className='countries'>      
        <h2>{name}</h2>
        <div>
        <img src={flags} alt="Not found" className='card-img' width='30%' height='30%'/>
        </div>
        <h5>Continentes:&nbsp;{continents}</h5>
        <h5>Capital:&nbsp;{capital}</h5>     
        <br />
    </div>
    
  );
}