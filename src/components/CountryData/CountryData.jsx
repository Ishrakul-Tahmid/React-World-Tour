

const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, region, capital, cca3 } = country;
    return (
        <div>
            <h5>Country Data: {name.common}</h5>
        </div>
    );
};

export default CountryData;