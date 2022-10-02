import React, { useState } from 'react';
import actions from '../../api';
import './AddItem.css';

function AddItem(props) {
  let [item, setItem] = useState('');
  let [price, setPrice] = useState('');
  let [image_url, setImage_url] = useState('');
  let [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    //Send it to the server!
    event.preventDefault();

    actions
      .addItem({ item, price, image_url, description }) //
      //Logic for adding a item to data base
      .then((newItem) => {
        console.log('new item!', newItem); // reports a succesful process -- as "new Item!" added
        //Redirect to all-items page
        props.history.push(`storeFrontDesk`);
      })
      .catch(console.error);
  };

  const handleChangeItem = (event) => {
    //On typing setItem
    setItem(event.target.value);
  };

  const handleChangePrice = (event) => {
    //On typing setItem
    setPrice(event.target.value);
  };

  const handleChangeImage_url = (event) => {
    //On typing setItem
    setImage_url(event.target.value);
  };

  const handleChangeDescription = (event) => {
    //On typing setItem
    setDescription(event.target.value);
  };

  return (
    <>
      <h3>Add an Item</h3>

      <form onSubmit={handleSubmit} className='AddForm'>
        <input
          onChange={handleChangeItem}
          type='text'
          name='item'
          placeholder='Add an item...'
        />
        <input
          onChange={handleChangePrice}
          type='number'
          name='price'
          placeholder='This is the price'
        />
        <input
          onChange={handleChangeImage_url}
          type='text'
          name='image'
          placeholder='This is the image'
        />
        <input
          onChange={handleChangeDescription}
          type='textarea'
          name='description'
          placeholder='...add description'
        />
        <button className='buttonadditem'>
          <b>Add item</b>
        </button>
      </form>
    </>
  );
}

export default AddItem;
