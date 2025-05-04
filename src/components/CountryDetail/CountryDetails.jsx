import CountryData from "../CountryData/CountryData";


const CountryDetails = (props) => {
    // const { country, handleVisitedCountry, handleVisitedFlags } = props;
    return (
        <div>
            <h4>Country Awesome Fentastic Details</h4>
            <hr></hr>
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;