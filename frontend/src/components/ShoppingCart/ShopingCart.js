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

    return itemsToBuy[0]
      ? 'Shopping Cart is Empty'
      : Object.keys(itemsToBuy).map((each, i) => {
          return (
            <div className='check-out-items' key={each}>
              <div>
                <img src={itemsToBuy[each].image_url} alt='picture' />
              </div>
              <p>{itemsToBuy[each].name}</p>
              <p> Qty: {itemsToBuy[each].qty} </p>
              <p>${itemsToBuy[each].price}</p>
              <p>${itemsToBuy[each].qty * itemsToBuy[each].price}</p>
            </div>
          );
        });
  };

  const showCheckOut = () => {
    let totalItems = props.shoppingCart;
    let grandTotal = 0;

    for (let i in totalItems) {
      grandTotal += totalItems[i].qty * totalItems[i].price;
    }

    return (
      <div className='check-out-final'>
        <h5 className='positionCenter'>Grand Total: ${grandTotal}</h5>
        {/* <button className='buy-btn-final'>Check out</button> */}
      </div>
    );
  };
  // const totalCost =()=>{
  //     let itemsInShoppingCart = props.shoppingCart
  //     return itemsInShoppingCart.reduce((acc, curr) => (curr.price, acc) ,0)
  // }

  return (
    <div className='checkout-table'>
      <div className='table-head-checkout'>
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <div className='ShoppingCart-main'>{showItems()}</div>
      {showCheckOut()}
    </div>
  );
}

export default ShopingCart;
