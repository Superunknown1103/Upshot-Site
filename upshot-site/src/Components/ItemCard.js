import React, { Component } from 'react';

function ItemCard(props) {
    let cardImage = require(`../images/shoe.jpg`);
    return (
        <div className="itemCard">
            <div className="innerCard">
                    <img src={cardImage} />
                <div className="cardHeader">
                    {props.item.name}
                </div>
                <div className="cardBody">
                    {props.item.text}
                </div>
                <div className="cardBuy">
                    Buy Now
                </div>
            </div>
        </div>
    )
}

export default ItemCard;