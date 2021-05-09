import React, {useEffect, useState, useRef} from 'react';
import {Header} from "../../header/Header";
import urlConstants from "../../../helpers/urlConstants";
import styles from "./Countries.module.css"
import Pagination from "../../pagination/Pagination";
import FilterSearch from "../../filterSearch/FilterSearch";
import CountriesList from "../../countriesList/CountriesList";
import infoPic from "../../../pictures/info.png"
import closeModalPic from "../../../pictures/closeModal.jpg"
import ModalInfo from "../../modalInfo/ModalInfo";

function Countries() {

    const [state, setState] = useState("");
    const [cards, setCards] = useState([]);
    const [loadedCards, setLoadedCards] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6);
    const modalRef = useRef();

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true);
            await fetch(urlConstants.apiUrl + '/all')
                .then(response => response.json())
                .then(data => {
                    let cards = data;
                    setCards(cards);
                    setLoadedCards(true);
                    setState("");
                    setLoading(false);
                    return cards;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        fetchCards();
    }, [loadedCards]);

    useEffect(() => {
        const updateCards = async () => {
            if (loadedCards) {
                setLoading(true);
                let filteredCards = cards.filter((country) => {
                    if(country.currencies[0].code===null)
                        country.currencies[0].code="";
                    return (
                        //search
                         country.name.toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                         country.alpha2Code.toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                         country.capital.toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                        //filter
                        country.region.toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                        country.languages[0].name.toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                        country.timezones[0].toUpperCase().indexOf(state.toUpperCase()) !== -1 ||
                        country.currencies[0].code.toUpperCase().indexOf(state.toUpperCase()) !== -1

                    );
                });
                if(state=="")
                    setLoadedCards(false);
                else
                    if(filteredCards.length===0) {
                    await setState("");
                    setLoadedCards(false);
                    alert("No items found");
                }

                setCards(filteredCards);
                setLoading(false);
            }
        };
        updateCards();
    }, [state]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards =
        state.length > 0
            ? cards.slice(indexOfFirstCard, indexOfLastCard)
            : cards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (direction) => {
        if (direction === "previous") setCurrentPage(currentPage - 1);
        else if (direction === "next") setCurrentPage(currentPage + 1);
    };

    const openModal = () => {
        modalRef.current.openModal();
    };

    const closeModal = () => {
        modalRef.current.close();
    };

    const modalInfo = () => {
        return (
            <ModalInfo ref={modalRef}>
                <img className={styles.closeModalButton} src={closeModalPic} alt={"closeModal"} onClick={closeModal}
                     style={{marginLeft: '330px'}}/>
                <div className={styles.modalTitle}>
                    Countries of the World
                </div>
                <div className={styles.modalText}>Although there isn’t universal agreement on the question of what qualifies as a “country,” it is
                    generally accepted that in order to be a country, a state must be a sovereign unit that has a
                    permanent population, defined territorial boundaries, a government, and the ability to enter into
                    agreements with other states. Even when these conditions are met, however, internationally
                    recognized independence is not a given, and a territorial entity that declares itself to be an
                    independent country is not always recognized as such by the rest of the world.</div>
            </ModalInfo>
        );
    }

    const pageContainer = () => {
        return (
            <div className={styles.pageContainer}>
                <img className={styles.info} src={infoPic} alt="info" onClick={openModal}/>
                <main className={styles.Main}>
                    <FilterSearch state={state} setState={setState}/>
                    <div className={styles.Container}>
                        <div className={styles.countriesContainer}>
                            <div className={styles.countryItem}>
                                <CountriesList countries={currentCards} search={state} loading={loading}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Container}>
                        <Pagination
                            cardsPerPage={cardsPerPage}
                            totalCards={cards.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </main>
            </div>
        );
    }


    return (
        <div>
            <Header/>
            {pageContainer()}
            {modalInfo()}
        </div>
    );


}

export default Countries;