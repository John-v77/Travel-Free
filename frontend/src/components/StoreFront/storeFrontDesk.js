import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import actions from '../../api';
import './storeFrontDesk.css';
import './storeFrontDesk-Mobile.css';

function StoreFrontDesk(props) {
  const [items, setItems] = useState([]);
  const [sortBtn, setSortBtn] = useState(false);
  // let valToExport = shoppingCart;
  //  export valToExport

  useEffect(() => {
    actions
      .getAllItems()
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.error);
  }, []);

  const addItemToShopping = (item) => {
    let newObject = props.shoppingCart;

    //If items id is not a key in the object creates a key with the properties of that item
    if (!(item._id in newObject)) {
      newObject[item._id] = {
        description: item.description,
        image_url: item.image_url,
        name: item.item,
        price: item.price,
        qty: 1,
      };

      //if the key exist the product is already there and it updates the quantity.
    } else {
      newObject[item._id].qty++;
    }

    props.setShoppingCart(newObject);

    // let newCart = [...props.shoppingCart]
    //     newCart.push(item)
    //   props.setShoppingCart(newCart)
    //   console.log(props.shoppingCart)
  };

  //  const modifyItem = (itemID) =>{
  //      actions.modifyItem(itemID)

  //  }

  const showItems = () => {
    return items.map((eachItem) => {
      return (
        <div key={eachItem._id} class='item-box'>
          <div style={{ padding: '1vw' }}>
            <img
              src={eachItem.image_url}
              alt='product picture'
              style={{ width: '15vw', height: '15vw', borderRadius: '6px' }}
            />
          </div>
          <div>
            <Link
              style={{ color: 'black' }}
              to={`/ItemDetails/${eachItem._id}`}
            >
              <h3>{eachItem.item}</h3>
            </Link>
            <h4>${eachItem.price}</h4>
            <p>{eachItem.description}</p>
          </div>

          <div
            className='all-items-btn-container'
            style={{
              marginBottom: '2vh',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button onClick={(e) => addItemToShopping(eachItem)}>buy</button>
            {/* <button onClick={(e) => modifyItem(eachItem._id)} >modify</button> */}
            <button
              onClick={(e) => deleteItem(eachItem._id)}
              className='del-Btn-StoreFront'
            >
              delete
            </button>
          </div>
        </div>
      );
    });
  };

  const deleteItem = (ItemId) => {
    actions.delItem(ItemId).then((res) => {
      let copyItems = [...items];
      let filteredItems = copyItems.filter(
        (eachItem) => eachItem._id !== ItemId
      );
      setItems(filteredItems);
    });
  };

  const sortItems = (e) => {
    // e.preventDefault()
    let sortedItems = [...items];

    if (sortBtn === false) {
      sortedItems.sort((a, b) => {
        return a.price - b.price;
      });
      setItems(sortedItems);
      setSortBtn(true);
    } else {
      sortedItems.sort((a, b) => {
        return b.price - a.price;
      });
      setItems(sortedItems);
      setSortBtn(false);
    }
  };

  return (
    <div>
      <h2>Hot deals !!</h2>
      <div>
        <button onClick={(e) => sortItems(e)} className='Sort-btn-AllItems'>
          <b>sort by price</b>
        </button>
      </div>
      <div className='All-items-display'>
        {/* <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div> */}
        {/* <h3>All Items</h3> */}
        {/* <div class="Display-Grid"> */}
        {showItems()}
        {/* </div> */}
      </div>
    </div>
  );
}

export default StoreFrontDesk;
