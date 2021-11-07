import React, { useState } from "react";
import "./intro.css";
import CircusTemplate from "..//..//Template/CircusTemplate.js";

const Intro = (props) => {
    
    const [count, setCount] = useState(3);

    return (
        <div className="items">
            <ItemContainer circus={props.circus} count = {count}/>
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