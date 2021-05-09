import React from 'react';
import styles from './CountryCard.module.css';
import {HiUserGroup} from 'react-icons/hi';
import {ImOffice} from 'react-icons/im';
import {BiMap} from 'react-icons/bi';

import {Link} from 'react-router-dom';


const CountryCard = (props) => {

     let {flag, name, capital, region, population} = props;
     population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (

        <Link to={'/country/'+name}>
            <div className={styles.cardContainer}>
                <div className={styles.topCardContainer}>
                    <img className={styles.flag} src={flag} alt="flag"/>
                </div>
                <div className={styles.name}>&nbsp;{name}</div>
                <div className={styles.identificationDetails}>
                    <div className={styles.detail}>
                        <svg><HiUserGroup/></svg>
                        <div className={styles.detailVal}>{population}</div>
                    </div>
                    <div className={styles.detail}>
                        <svg><ImOffice/></svg>
                        <div className={styles.detailVal}>{capital}</div>
                    </div>
                    <div className={styles.detail}>
                        <svg><BiMap/></svg>
                        <div className={styles.detailVal}>{region}</div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default CountryCard;