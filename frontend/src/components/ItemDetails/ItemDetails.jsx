import React, { useEffect, useState } from 'react';
import actions from '../../api';
import './ItemDetails.css';

function ItemDetails(props) {
  // console.log(props.match.params.id)
  const [item, setItem] = useState({});
  console.log(item);

  useEffect(() => {
    actions
      .searchItemById(props.match.params.id)
      .then((res) => {
        setItem(res.data[0]);
        // console.log(res.data, '***', item)
      })
      .catch(console.error);
    // console.log('final Item', item)
  }, []);

  // console.log('final Item', item)
  const addItemToShopping = (item) => {
    //   console.log('type of Sh**********',shoppingCart)
    let newCart = [...props.shoppingCart];
    newCart.push(item);
    props.setShoppingCart(newCart);
    console.log(props.shoppingCart);
  };

  return (
    <div className='Single-item-details'>
      <div style={{ justifyContent: 'center' }}>
        <img src={item.image_url} alt='Vacantiom Details Image' />
        <div>
          <h2>{item.item}</h2>
        </div>
        <div>
          <h2>${item.price}</h2>
        </div>
        <div style={{ width: '28vw' }}>
          <p>{item.description}</p>
        </div>
        <button
          style={{ padding: '0 1rem' }}
          onClick={(e) => addItemToShopping(item)}
        >
          buy
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
