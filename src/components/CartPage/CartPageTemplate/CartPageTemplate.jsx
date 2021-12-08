import React from "react";


const CartPageTemplate = (props) => {
    return(
        <div className="carts">
            <h5>Name: {props.name}</h5>
            <button>+</button>
            <button>-</button>
            <h5>Amount Places: {props.amountOfPlaces}</h5>
        </div>
    );
}