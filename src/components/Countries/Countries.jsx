import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, [])

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    //remove item from an array in a state
    // use filter to select all the elements that one you want to remove
    const handleRemoveFlag = (flag) => {
        const newVisitedFlags = visitedFlags.filter(visitedFlag => visitedFlag !== flag);
        setVisitedFlags(newVisitedFlags);
    }

    return (
        // visited countries
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map(country => <li key={country.car.cca3}>{country.name.common}</li>)}
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} alt="flag" />)
                }
            </div>

            {/* display countries */}
            {
                <div className="country-container">
                    {countries.map(country => <Country key={country.car.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)}
                </div>
            }
        </div>
    );
};

export default Countries;