import React, { Component } from 'react';
import ItemCard from './ItemCard';

export default class ItemCardContainer extends Component{
    createItemCards = () => {
        return this.props.itemList.map(item => {
            return <ItemCard item={item} />
        })
    }
    render() {
    return (
        <div>
            {this.createItemCards()}
        </div>
      )
    }
};
