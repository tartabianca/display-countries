import React from "react";
import CountryCard from "../countryCard/CountryCard";

function CountriesList(props) {
    const {countries, loading} = props;

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul>
            {countries.map((country) => {
                return (
                    <li key={country.name}>
                        <CountryCard
                            flag={country.flag}
                            name={country.name}
                            capital={country.capital}
                            region={country.region}
                            population={country.population}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default CountriesList;
