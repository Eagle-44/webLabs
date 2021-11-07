import React from "react";
import { useState } from "react";
import { circuses } from "../../Utill/UtilCircus";
import "./filter.css";
import HeroCatalog from "../HeroCatalog/HeroCatalog.js";

const Filter = () => {

    let [renderCircus, setRenderCircus] = useState(circuses);

    return(
        <div className="filter_container">
            <div className="inputmenu">
                <div className="filter_block">
                    <div className="dropDownMenu">
                        <span className="dropdown">
                        <button className="filterBut">Filter By</button>
                            <label>
                                <input type="checkbox"/>
                                <ul>
                                    <li onClick={() => filterByAmountOfPlaces()}>Places</li>
                                    <li onClick={() => filterByAmountOfPerfomances()}>Performances</li>
                                </ul>
                            </label>
                        </span>
                    </div>
                </div>
                <div className="search_block">
                    <input id="search_input" className="header_search_input" type="text"
                    placeholder="Type and find"/>
                    <button type="button" className="searchBut" onClick={() => searchByName()}>Search</button>
                    <button type="button" className="searchBut" onClick={() => reset()}>Clear</button>
                </div>
            </div>
            <div>
                <HeroCatalog circus={renderCircus}/>
            </div>
        </div>
    )

    function filterByAmountOfPlaces() {
        let sortedCircus = Array.from(circuses);
        sortedCircus.sort((circus1,circus2) => circus1.amountOfPlaces - circus2.amountOfPlaces);
        setRenderCircus(sortedCircus);
    }

    function filterByAmountOfPerfomances() {
        let sortedCircus = Array.from(circuses);
        sortedCircus.sort((circus1,circus2) => circus1.performancesPerYear - circus2.performancesPerYear);
        setRenderCircus(sortedCircus);
    }

    function searchByName() {
        const nameOfCircus = document.getElementById('search_input');
        let temp = circuses.filter(circus => circus.name.search(nameOfCircus.value) !== -1);
        setRenderCircus(temp);
    }

    function reset() {
        document.getElementById('search_input').value = "";
        setRenderCircus(circuses);
    };

}
export default Filter;