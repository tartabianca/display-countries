import React from 'react';
import styles from "./Home.module.css"
import {Header} from "../../header/Header";
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic1 from "../../../pictures/slideShow1.jpg"
import Pic2 from "../../../pictures/slideshow2.jpg"
import Name from "../../../pictures/name.png";
import {FaTwitter} from "react-icons/fa"
import {Link} from "react-router-dom";


function Home() {

    const slideShow = () => {
        return (
            <div className={styles.slideContainer}>
                <Carousel controls={false} fade={true}>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={Pic1}
                            alt="First slide"
                            style={{height: '480px'}}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={Pic2}
                            alt="Second slide"
                            style={{height: '480px'}}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

        return (
        <div>
            <Header/>
            <div className={styles.pageContainer}>
                {slideShow()}
                <p className={styles.title}>Countries in the World:</p>
                <p className={styles.title} style={{fontWeight: 'bold'}}>195</p>
                <div className={styles.info}>
                    There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states.
                </div>
                <Link to="countries">
                <button className={styles.button}>View Countries</button>
                </Link>
                <Link to="map">
                <button className={styles.button}>View Map</button>
                </Link>
                <div className={styles.footer}>
                    <img className={styles.name} src={Name} alt={"name"}/>
                    <br/>
                    <a href="https://twitter.com/restcountries" target="blank">
                    <FaTwitter color="#1aaac7" size="20px" cursor="pointer" />
                    </a>
                </div>
            </div>
        </div>
    );


}

export default Home;