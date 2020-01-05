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
        <div id="itemCardContainer">
            {this.createItemCards()}
        </div>
      )
    }
};

// function ItemCardContainer(props) { 
//     let itemCards = [];
//   props.itemList.forEach((item, i) =>{
//       if((i+1) % 4 == 0 || i == 0){
//         itemCards.push(
//           <div className="row" >       
//             <ItemCard item={item} />
//           </div>
//         )
//       }else{
//           itemCards.push(<ItemCard item={item} />);
//       }
//   });
//   return (
//     <React.Fragment>
//         {itemCards}
//     </React.Fragment>
//   );
// }

// export default ItemCardContainer;
