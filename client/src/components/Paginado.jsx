import React from 'react';

export default function Pages ({ countryXpage, allCountries, pages}) {
   const pageNumber = []
for( let i=0; i<= Math.ceil(allCountries/ countryXpage); i++){
      pageNumber.push(i+1);
   }
   return(
       <div className='todo'>
    <nav className="containerr">
        <ul className="pages"> {pageNumber?.map((number, index) => {
return(
                            <li className='number' key={index} onClick={() => pages(number)}>{number} </li>
                            
                    )})
            }
        </ul>
    </nav>
    </div>
)  
}