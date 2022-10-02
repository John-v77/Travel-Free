import React, { useState, useEffect, useContext } from 'react';
import actions from '../../api';
import { CartContext } from '../CartContext';
import './ShoppingCart.css';
// import {shoppingCart} from './storeFrontDesk';
function ShopingCart(props) {
  // const addToCart = (item) => {
  //     actions.addItemtoCart(item)
  // }
  // const removeFromCart = () => {}

  const showItems = () => {
    // props.ShopingCart
    let itemsToBuy = props.shoppingCart;
    let len = Object.keys(itemsToBuy).length === 0;
    // console.log('items to buy', len)

    return len
      ? 'Shopping Cart is Empty'
      : Object.keys(itemsToBuy).map((each, i) => {
          return (
            <div className='check-out-items' key={each}>
              <img src={itemsToBuy[each].image_url} alt='picture' />
              <h5>{itemsToBuy[each].name}</h5>
              <div style={{ textJustify: 'left' }}>
                <p>${itemsToBuy[each].price}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p> Qty: {itemsToBuy[each].qty} </p>
                {/* <button onClick={(e) => addToCart(itemsToBuy[each]._id)} > + </button>
                             <button onClick={(e) => removeFromCart(itemsToBuy[each])} > - </button> */}
              </div>
              <div>Total: ${itemsToBuy[each].qty * itemsToBuy[each].price}</div>
            </div>
          );
        });

    // for (const each in itemsToBuy){

    //     console.log('loop', itemsToBuy[each])
    // return(
    //     <div className="check-out-items" key={each}>
    //                  <img src={itemsToBuy[each].image_url} alt='picture'/>
    //                  <h5>{itemsToBuy[each].name}</h5>
    //                  <div style={{textJustify:'left'}}><p>${itemsToBuy[each].price}</p></div>
    //                  <div style={{display:'flex'}}>
    //                  <p> Qty: {itemsToBuy[each].qty} </p>
    //                  {/* <button onClick={(e) => addToCart(itemsToBuy[each]._id)} > + </button>
    //                  <button onClick={(e) => removeFromCart(itemsToBuy[each])} > - </button> */}
    //                  </div>
    //                  <div>Total: ${itemsToBuy[each].qty * itemsToBuy[each].price}</div>
    //     </div>

    // )
    // }
    // return itemsToBuy.map(eachE => {
    //     return(

    //         <div className="check-out-items" key={eachE._id}>
    //             <img src={eachE.image_url} alt='picture'/>
    //             <h5>{eachE.item}</h5>
    //             <div style={{textJustify:'left'}}><p>${eachE.price}</p></div>
    //             <div style={{display:'flex'}}>
    //             <p> Qty: 1 </p>
    //             {/* <button onClick={(e) => addToCart(eachE._id)} > + </button>
    //             <button onClick={(e) => removeFromCart(eachE)} > - </button> */}
    //             </div>
    //             <p>Total:{1*eachE.price}</p>
    //         </div>
    //     )
    // })
  };

  const showCheckOut = () => {
    let totalItems = props.shoppingCart;
    let grandTotal = 0;

    for (let i in totalItems) {
      grandTotal += totalItems[i].qty * totalItems[i].price;
    }

    return (
      <div className='check-out-final'>
        <div style={{ width: '23vw' }}>
          <h5 className='positionCenter'>Grand Total: ${grandTotal}</h5>
        </div>
        <button className='buy-btn-final'>Proceed to check out</button>
      </div>
    );
  };
  // const totalCost =()=>{
  //     let itemsInShoppingCart = props.shoppingCart
  //     return itemsInShoppingCart.reduce((acc, curr) => (curr.price, acc) ,0)
  // }

  return (
    <div style={{ display: 'flex' }}>
      <div className='ShoppingCart-main'>{showItems()}</div>

      {showCheckOut()}
    </div>
  );
}

export default ShopingCart;
