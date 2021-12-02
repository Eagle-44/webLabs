import React, { useEffect, useState } from "react";
import "./intro.css";
import CircusTemplate from "..//..//Template/CircusTemplate.js";
import axios from "axios";
import { Loader } from "../../../Spinner/Loader";

const Intro = () => {
    
    let [count, setCount] = useState(3);
    let [circus,setCircus] = useState(null);

    
    useEffect(() => {
        axios.get(`http://localhost:8080/circus`).then((result) => {
            setCircus(result.data)
        })
    },[]);

    

    return (
        <div className="items">
             {circus ? <ItemContainer circus={circus} count={count}/>:<Loader/>}
            <div className="btn_intro">
                <button onClick={() => setCount(count+ 3)} className="btn_more">Show More</button>
            </div>
        </div>
    );
;}

function ItemContainer({circus, count}) {

    return(
        <ul className="item">
            {
                circus.slice(0,count).map(((circus,id) => (
                    <li key={id}><CircusTemplate
                        id={id}
                        name={circus.name}
                        amountOfPlaces={circus.amountOfPlaces}
                        address={circus.address}
                        performancesPerYear={circus.performancesPerYear}/>
                    </li>
                )))
            }
        </ul>
    );
}

export default Intro;