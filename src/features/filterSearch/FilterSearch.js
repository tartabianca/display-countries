import React, {useState} from 'react';
import styles from './FilterSearch.module.css';
import {ReactComponent as SearchIcon} from '../../pictures/search.svg';
import {ReactComponent as FilterIcon} from '../../pictures/filter.svg';

const FilterSearch = ({state, setState}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const reset = () =>{
        setState("");
        document.getElementById("i1").value="";
        document.getElementById("i2").value="";
        document.getElementById("i3").value="";
    }

    return (
        <div className={styles.Container}>
            <div className={styles.SearchBar}>
                <SearchIcon className={styles.Icon}/>
                <input className={styles.Input} placeholder={"Search"} value={state}
                       onChange={(e) => setState(e.target.value)}/>
                <div role={"button"} className={styles.FilterButton} onKeyPress={() => toggle(!open)}
                     onClick={() => toggle(!open)}>
                    <FilterIcon className={styles.Icon}/>
                </div>
            </div>
            {open && (
                <div className={styles.Filters}>
                    <div className={styles.FilterSection}>
                        <div className={styles.SectionTitle}>Region (continent)</div>
                        <div className={styles.Content}>
                            <div role="button" className={styles.ListItem} onClick={(e) => setState("Africa")}>
                                <span>Africa</span>
                            </div>
                            <div role="button" className={styles.ListItem} onClick={(e) => setState("Americas")}>
                                <span>Americas</span>
                            </div>
                            <div role="button" className={styles.ListItem} onClick={(e) => setState("Asia")}>
                                <span>Asia</span>
                            </div>
                            <div role="button" className={styles.ListItem} onClick={(e) => setState("Europe")}>
                                <span>Europe</span>
                            </div>
                            <div role="button" className={styles.ListItem} onClick={(e) => setState("Oceania")}>
                                <span>Oceania</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.FilterSection}>
                        <div className={styles.SectionTitle}>Population range</div>
                        <div className={styles.Content}>
                            <div role="button" className={styles.ListItem}>
                                <span>↑</span>
                            </div>
                            <div role="button" className={styles.ListItem}>
                                <span>↓</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FilterGroup}>
                        <div className={styles.FilterSection}>
                            <div className={styles.SectionTitle}>Language</div>
                            <div className={styles.Content}>
                                <input id="i1" className={styles.InputItem} placeholder="English"
                                       onChange={(e) => setState(e.target.value)}/>
                            </div>
                        </div>

                        <div className={styles.FilterSection}>
                            <div className={styles.SectionTitle}>Time zone</div>
                            <div className={styles.Content}>
                                <input id="i2" className={styles.InputItem} placeholder="UTC+00:00"
                                       onChange={(e) => setState(e.target.value)}/>
                            </div>
                        </div>

                        <div className={styles.FilterSection}>
                            <div className={styles.SectionTitle}>Currency</div>
                            <div className={styles.Content}>
                                <input id="i3" className={styles.InputItem} placeholder="EUR"
                                       onChange={(e) => setState(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div role="button" className={styles.ListItem} onClick={reset}>
                            <span>Reset</span>
                    </div>


                </div>
            )}
        </div>
    );
}
export default FilterSearch;