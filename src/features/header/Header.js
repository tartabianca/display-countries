import React from "react";
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import Logo from "../../pictures/logo.png"
import Name from "../../pictures/name.png"


export function Header() {

    return (
        <div>
            <div className={styles.headerComponent}>
                <Link to={"/"}>
                    <img className={styles.logo} src={Logo} alt={"logo"}/>
                    <img className={styles.name} src={Name} alt={"name"}/>
                </Link>
            </div>
        </div>
    );
}
