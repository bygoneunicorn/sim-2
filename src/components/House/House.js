import React from 'react';
import './House.css'

export default function House( props ){
    return(
        <div className="house-box">
            <p>Property Name: {props.property_name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>
            <button onClick={props.deleteHouse}>Delete</button>
        </div>
    )
}