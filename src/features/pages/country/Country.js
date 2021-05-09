import React, {useEffect, useState, useRef} from 'react';
import {Header} from "../../header/Header";
import styles from "./Country.module.css"
import urlConstants from "../../../helpers/urlConstants";
import {Link} from "react-router-dom";

function Country(props) {
    const {match} = props;
    const [country, setCountry] = useState([]);
    const [neighbourCountries, setNeighbourCountries] = useState([]);
    const [loadedCountry, setLoadedCountry] = useState(false);

    useEffect(() => {
        const getCountry = async () => {
            await fetch(urlConstants.apiUrl + '/name/' + match.params.name)
                .then(response => response.json())
                .then(data => {
                    setCountry(data);
                    setLoadedCountry(true);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        getCountry();
    }, []);

    const currentTime = (timezone) => {
        let offsetM = parseInt(timezone.substr(7, 2));
        let offsetH = parseInt(timezone.substr(4, 2));
        let date = new Date();
        const currentHours = date.getHours();
        const currentMinutes = date.getMinutes();
        date.setHours(currentHours + offsetH)
        date.setMinutes(currentMinutes + offsetM)
        const newDateString = date
            .toISOString()
            .replace('T', ' ')
            .slice(0, 16)
        return newDateString;
    }

    useEffect(() => {
        const getNeighbours = async () => {
            let neighbourCountries=[];
            if (loadedCountry && country[0].borders.length>0) {
                 for(let i=0;i<country[0].borders.length;i++) {
                     let alpha = country[0].borders[i];
                     let neighbour="";
                     await fetch(urlConstants.apiUrl + '/alpha/' + alpha)
                         .then(response => response.json())
                         .then(data => {
                             neighbour=data.name;
                             neighbourCountries.push(neighbour);
                         })
                         .catch((error) => {
                             console.error('Error:', error);
                         });
                }
                 setNeighbourCountries(neighbourCountries);
            }
        }
        getNeighbours();
    }, [loadedCountry]);

     const putNeighbours = () =>{
         if(neighbourCountries.length>0){
             return(
                 <div>
                     <li>Neighbour countries:</li>
                 <div className={styles.neighbours}>
                     {neighbourCountries.map(item=><li className={styles.linkNeighbour}  key={item} onClick={() => {window.location.href='/country/'+item}}>{item}</li>)}
                 </div>
                 </div>
             );
         }
         else
             return(
                 <li>Neighbour countries: - </li>
             );
     }


    if (country.length === 1)
        return (
            <div>
                <Header/>
                <div className={styles.pageContainer}>
                    <div className={styles.header}>
                        <div className={styles.title}>{country[0].name}</div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.details}>
                            <div className={styles.detailsBox}>
                                <li>Capital: {country[0].capital}</li>
                                <li>Region: {country[0].region}</li>
                                <li>Alpha code: {country[0].alpha2Code}</li>
                                <li>Population: {country[0].population}</li>
                                <li>Coordinates: ({country[0].latlng[0]},{country[0].latlng[1]})</li>
                                <li>Area: {country[0].area}</li>
                                <li>Time zone: {country[0].timezones[0]}</li>
                                <li>Current time: {currentTime(country[0].timezones[0])}</li>
                                <li>Currencies: {country[0].currencies[0].name}</li>
                                <li>Official
                                    language: {country[0].languages[0].name} ({country[0].languages[0].nativeName})
                                </li>
                                {putNeighbours()}

                            </div>
                        </div>
                        <div className={styles.boxContainer}>
                            <div className={styles.box}>
                                <h3>{country[0].name}</h3>
                                <h5>({country[0].nativeName})</h5>
                                <img className={styles.flag} src={country[0].flag} alt="flag"/>
                                <div className={styles.translations}>
                                    <p>DE: {country[0].translations.de}</p>
                                    <p>ES: {country[0].translations.es}</p>
                                    <p>FR: {country[0].translations.fr}</p>
                                    <p>JA: {country[0].translations.ja}</p>
                                    <p>IT: {country[0].translations.it}</p>
                                    <p>BR: {country[0].translations.br}</p>
                                    <p>PT: {country[0].translations.pt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else return null;
}

export default Country;