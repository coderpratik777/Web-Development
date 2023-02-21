import React from 'react';
import './product.css';

export default function Product(props) {
    return (
        <div className='card'>
            <img src={props.url} />
            <div className='container'>
                <h2>{props.name}</h2>
                <h1>{props.price}</h1>
                <p>{props.des}</p>
            </div>
        </div>
    );
}