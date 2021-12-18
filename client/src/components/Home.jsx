import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, orderByName, filterPoplulation, reversePopulation, getActivity, getByCon, getByAct, getByArea } from '../actions';
import {Link} from 'react-router-dom'
import Card from './Card';
import Pages from '../components/Paginado'
import SearchBar from './SearchBar';
import '../css/Home.css'

 export default function Home() {
    
    const dispatch = useDispatch()
    const allCountries = useSelector ((state) => state.filtrados)
    const acts = useSelector ((state) => state.activities)
    const continents = useSelector ((state) => state.continents)
    const [,setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countryXpage,] = useState(10)
    const indexLastCountry = currentPage * countryXpage
    const indexFirstCountry = indexLastCountry - countryXpage
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

useEffect (() => {
    dispatch(getActivity())
    dispatch(getCountries())
},[dispatch])

function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
}


function handleSort(e) {
    dispatch(orderByName('asc'))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleSort2(e) {
    dispatch(filterPoplulation())
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleSort3(e) {
    dispatch(reversePopulation())
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleSort4(e) {
    dispatch(getByCon(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleSort5(e) {
    dispatch(getByAct(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleSort6(e) {
    dispatch(getByArea(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
}

return (
    <div className="principal">
    <h1 className='title'>COUNTRIES</h1>
    <SearchBar/>
    <button className='reload' onClick={e => {handleClick(e)}}>⟳</button>
    <Link to= '/activity'>Crear actividad</Link>
    <div>
    <select className='ordenar' onChange={e => handleSort4(e)}>
    {continents?.map((e) => ( <option key={e} value={e}>{e}</option>
        ))}
     </select>
    <select className='ordenar' onChange={e => handleSort5(e)}>
    {acts?.map((e) => ( <option key={e.name} value={e.name}>{e.name}</option>
        ))}
     </select>
     <button className='ordenar' onClick={e => handleSort(e)}>Ordenar por nombre</button>
     <button className='ordenar' onClick={e => handleSort2(e)}>Ordenar por Población</button>
     <button className='ordenar' onClick={e => handleSort6(e)}>Ordenar por Area</button>
     <button className='flecha'onClick={e => handleSort3(e)}>⇅</button>
     <div className='countries-container'>
     {currentCountries?.map(el => {
         return(
             <div key={el.cca3}>
                 <Link to={"/detail/"+ el.cca3}>
             <Card name={el.name} continents={el.continents} flags={el.flags} capital={el.capital}/> 
             </Link>
             </div>
         )
        })
     }
     </div>
    </div>
    <Pages
                countryXpage={countryXpage}
                allCountries={allCountries.length}
                pages={pages}
                />
     </div>
)

}