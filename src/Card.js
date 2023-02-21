import React from "react";
import data from "./data";


export default function Card(props) {
    return(
        <div className="Card">
            <div className="Card--box">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={props.coverImg} className="card--image" />
            </div>
            <div className="card--stats">
                <img src="images/star1.png" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) ~ </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / Person</p>
        </div>
    )
}