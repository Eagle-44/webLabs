import React from "react";
import "./circusTemplate.css";
import ticket from "..//..//img/ticket.jpg";
import { Link } from "react-router-dom";

const CircusTemplate = (props) => {
    return(
        <div className="item_circus">
            <img className="item_img" src={ticket} alt="ticket_img"/>
            <h2 className="item_name">Name: {props.name}</h2>
            <h4 className="item_amountOfPlaces">Amount of places: {props.amountOfPlaces}</h4>
            <h4 className="item_address">Address: {props.address}</h4>
            <h4 className="item_performancePerYear">Performance per year: {props.performancesPerYear}</h4>
            <button className="btn_viewmore" >
                    <Link className="viewmore_link" to={"/itempage/"+props.id}>View More</Link>
            </button>
        </div>
    );
}

export default CircusTemplate;