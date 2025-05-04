import CountryDetails from '../CountryDetail/CountryDetails';
import './Country.css';
import { useState } from 'react';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, region, capital, cca3 } = country;

    const [visited, setVisited] = useState(true);

    const handleVisited = () => {
        setVisited(!visited); // Toggle the visited state
        // setVisited(true); // Always set visited to true
    };

    const passWithParams = () => {
        handleVisitedCountry(country);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple':'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="National Falg" />
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>Going</button>
            {/* {visited && <p>I've visited this country</p>} */}
            {visited ? <p>I've visited this country</p> : <p>I want to visit this country</p>}

            <hr></hr>
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;