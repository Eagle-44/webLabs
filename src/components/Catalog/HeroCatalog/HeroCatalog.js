import React from "react";
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

const HeroCatalog = (props) => (
    <div className="items">
        <ItemContainer circus={props.circus}/>
    </div>
);

export default HeroCatalog;