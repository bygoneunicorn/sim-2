import React from 'react';

export default function House( props ){
    return(
        <div>
            <p>Property Name: {props.property_name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>
            <button onClick={props.deleteHouse}>Delete</button>
        </div>
    )
}