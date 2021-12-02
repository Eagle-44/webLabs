import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ticket from "..//../img/ticket.jpg"
import "./itemPage.css";
import { Loader } from "../../Spinner/Loader";

const ItemPage = () => {
    let params = useParams();

    const [circus,setCircus] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/circus/${params.id}`).then((result) => {
            setCircus(result.data)
        })
    },[]);

    return(
        <div>
        {circus ? <ItemShow circus={circus}/>:<Loader/>}
        </div>
    );
}

const ItemShow = (props) => {
    return(
        <div className="item_page">
            <div className="item_page_ticket_template">
            <img className="item_page_img" src={ticket} alt="ticket_img"/>
            <div className="item_page_info">
                <h2 className="item_page_name">{props.circus.name}</h2>
                <h4 className="item_page_amountOfPlaces">Places: {props.circus.amountOfPlaces}</h4>
                <h4 className="item_page_address">Address: {props.circus.address}</h4>
                <h4 className="item_page_performancePerYear">Performance per year: {props.circus.performancesPerYear}</h4>
            </div>
            </div>
        </div>
    )

}

export default ItemPage;