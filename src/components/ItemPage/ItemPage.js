import React from "react";
import { useParams } from 'react-router-dom';
import {circuses} from "..//Utill/UtilCircus.js";
import ticket from "..//../img/ticket.jpg"
import "./itemPage.css";

const ItemPage = () => {
    const params = useParams();
    let c = circuses[params.id];

    return(
        <div className="item_page">
            <div className="item_page_ticket_template">
            <img className="item_page_img" src={ticket} alt="ticket_img"/>
            <div className="item_page_info">
                <h2 className="item_page_name">{c.name}</h2>
                <h4 className="item_page_amountOfPlaces">Places: {c.amountOfPlaces}</h4>
                <h4 className="item_page_address">Address: {c.address}</h4>
                <h4 className="item_page_performancePerYear">Performance per year: {c.performancesPerYear}</h4>
            </div>
            </div>
        </div>
    )

}

export default ItemPage;