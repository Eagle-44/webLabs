import React from "react";
import { Loader } from "../../../Spinner/Loader";
import CircusTemplate from "../../Template/CircusTemplate";

function ItemContainer({circus}) {

    return(
        <ul className="item">
            {
                circus.map(((circus,id) => (
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

const HeroCatalog = (props) => {
    return(
        <div className="items">
            {props.circus ? <ItemContainer circus={props.circus}/>:<Loader/>}
        </div>
    )
};

export default HeroCatalog;