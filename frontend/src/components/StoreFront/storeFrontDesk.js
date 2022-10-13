import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import actions from '../../api';
import './storeFrontDesk.css';
// import './storeFrontDesk-Mobile.css';

function StoreFrontDesk(props) {
  const mockItems = [
    {
      image_url:
        'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/seaside-plants.jpg',
      description: 'Vacantion',
      item: 'Venice',
      price: 2000,
    },
    {
      image_url:
        'https://sandpipervacationrentals.com/wp-content/uploads/2020/08/38.-Seaside-3-e1598648487698-1800x700.jpg',
      description: 'Vacantion',
      item: 'Venice',
      price: 1000,
    },
    {
      image_url:
        'https://media.architecturaldigest.com/photos/56748938b313ecbd181132dc/master/w_4691,h_3000,c_limit/beach-house-designs-seaside-living-book-08.jpg',
      description: 'Vacantion',
      item: 'Venice',
      price: 3000,
    },
    {
      image_url:
        'https://img.freepik.com/premium-photo/seaside-summer-beach-with-starfish-shells-coral-sandbar-blur-sea-background-concept-summertime-beach-vintage-color-tone_1484-943.jpg?w=2000',
      description: 'Vacantion',
      item: 'Venice',
      price: 5000,
    },
    {
      image_url:
        'https://content.phuket101.net/wp-content/uploads/20190703223959/palm-seaside.jpg',
      description: 'Vacantion',
      item: 'Venice',
      price: 6000,
    },
    {
      image_url: 'https://static.toiimg.com/photo/77974615.cms',
      description: 'Vacantion',
      item: 'Venice',
      price: 1000,
    },
  ];

  const [items, setItems] = useState([]);
  const [sortBtn, setSortBtn] = useState(false);

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
  };

  const showItems = () => {
    return items.map((eachItem) => {
      return (
        <div key={eachItem._id} className='item-container'>
          <img src={eachItem.image_url} alt='product picture' />

          <div className='package-details'>
            <Link
              style={{ color: 'black' }}
              to={`/ItemDetails/${eachItem._id}`}
            >
              <h3>{eachItem.item}</h3>
            </Link>
            <h4>${eachItem.price}</h4>
            <p>{eachItem.description}</p>
          </div>

          <div className='all-items-btn-container'>
            <button
              onClick={(e) => deleteItem(eachItem._id)}
              className='delete-btn-destinations'
            >
              delete
            </button>
            <button
              onClick={(e) => addItemToShopping(eachItem)}
              className='buy-btn-destinations'
            >
              buy
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
    <div className='destinations'>
      {items[0] ? <h2> Hot deals!</h2> : <h3>There are no deals available</h3>}
      <div>
        <div className='sortig-btns-destinations'>
          {items[0] ? (
            <button onClick={(e) => sortItems(e)} className='btn-sort-by-price'>
              Price
            </button>
          ) : null}
        </div>
        {/* <button onClick={(e) => sortItems(e)} className='sort-btn-AllItems1'>
          sort by price
        </button> */}
      </div>
      <div className='All-items-display'>{showItems()}</div>
    </div>
  );
}

export default StoreFrontDesk;
