import React from 'react';
import { VectorMap } from "react-jvectormap";
import styles from "./Map.module.css";

function Map() {

    const handleClick = (e, countryCode) => {
        console.log(countryCode);
    };
        return (
            <div className={styles.pageContainer}>
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={true}
                    containerStyle={{
                        width: "100%",
                        height: "100%"
                    }}
                    onRegionClick={handleClick}
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#2aa7cd",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.8,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#e01028"
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={true}
                />
            </div>
        );

}export default Map;