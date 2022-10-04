import React, { useState } from 'react';
import actions from '../../api';
import './AddItem.css';

function AddItem(props) {
  let [item, setItem] = useState('');
  let [price, setPrice] = useState('');
  let [image_url, setImage_url] = useState('');
  let [description, setDescription] = useState('');
  let [error, setError] = useState(false);

  const handleSubmit = (event) => {
    //Send it to the server!
    event.preventDefault();

    if (!item || !price || !image_url || !description) {
      setError(true);
      return;
    }

    actions
      .addItem({ item, price, image_url, description }) //
      //Logic for adding a item to data base
      .then(() => {
        props.history.push(`destinations`);
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
    <div className='addVacantion'>
      <h3 className='addVacantion-header'>Add an new package</h3>

      <form onSubmit={handleSubmit} className='AddForm'>
        <label for='title'>Title</label>
        <input
          onChange={handleChangeItem}
          type='text'
          name='title'
          placeholder='Title'
        />
        <label for='price'>Price</label>
        <input
          onChange={handleChangePrice}
          type='number'
          name='price'
          placeholder='Price'
        />
        <label for='image'>Image url</label>
        <input
          onChange={handleChangeImage_url}
          type='url'
          name='image'
          placeholder='Image url'
        />
        <label for='description'>Description</label>
        <input
          onChange={handleChangeDescription}
          type='textarea'
          name='description'
          placeholder='Description'
        />
        <button className='buttonadditem'>Add item</button>
        <div className='errorMessage'>
          {error ? 'Field incomplete!!' : null}
        </div>
      </form>
    </div>
  );
}

export default AddItem;
