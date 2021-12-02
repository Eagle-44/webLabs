import React, { useEffect } from "react";
import { useState } from "react";
import "./filter.css";
import HeroCatalog from "../HeroCatalog/HeroCatalog.js";
import axios from "axios";
import { Loader } from "../../../Spinner/Loader";

const Filter = () => {

    const [circus, setCircus] = useState(null);
    const [renderCircus, setRenderCircus] = useState(circus);
    
    useEffect(() => {
    axios.get(`http://localhost:8080/circus`).then((result) => {
        setCircus(result.data);setRenderCircus(result.data);});
    },[]);

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
                {circus ? <HeroCatalog circus={renderCircus}/>:<Loader/>}
            </div>
        </div>
    )

    function filterByAmountOfPlaces() {
        Array.from(circus);
        axios.get(`http://localhost:8080/circus/sort?name=amountOfPlaces`)
        .then((result) => {setRenderCircus(result.data)});
    }

    function filterByAmountOfPerfomances() {
        Array.from(circus);
        axios.get(`http://localhost:8080/circus/sort?name=amountOfPerformances`)
        .then((result) => {setRenderCircus(result.data)});    }

    function searchByName() {
        const title = document.getElementById('search_input').value;
        axios.get(`http://localhost:8080/circus/search?name=${title}`)
        .then((result) => {setRenderCircus(result.data)});
    }

    function reset() {
        document.getElementById('search_input').value = "";
        setRenderCircus(circus);
    };

}
export default Filter;