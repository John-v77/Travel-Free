import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useHistory } from 'react-router-dom';
import actions from '../../api';
import Login from '../Login';

function Navbar(props) {
  const [user, setUser] = useState({});
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    actions
      .getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error);
  }, []);

  const history = useHistory();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const postSearch = async (e) => {
    // send the post to data base
    e.preventDefault();
    let res = await actions.searchItems(searchInput);
    console.log(res.data);
    props.setCosasInNavBar(res.data);
    history.push('/search');
  };

  return (
    <div id='Navbar'>
      <div className='nav-firstLine'>
        <h3 className='logo'>Travel Free!</h3>
        <div className='nav-buttons-new'>
          <Link to='/'>Home</Link>
          <Link to='/storeFrontDesk'>All Items</Link>
          <Link to='/add-items'>Add Item</Link>

          <Link to='/shopingCart'>
            <button
              id='shopingCart'
              style={{
                padding: '2px 16px 3px',
                margin: '0 10px',
                backgroundColor: 'white',
                border: '1px solid #aaafaa',
                borderRadius: '5px',
              }}
            >
              <i class='fa fa-shopping-cart' style={{ fontSize: '1.2em' }}></i>
            </button>
          </Link>
          <Login />
        </div>
      </div>
      <div className='nav-secondLine'>
        <form onSubmit={postSearch} className='searchTrip'>
          <button type='submit' class='searchButton'>
            <i style={{ color: 'black' }} class='fa fa-search'></i>
          </button>
          <input onChange={handleChange} type='text' placeholder=' ...search' />
        </form>
      </div>

      {/* <div class='login'>
          <div>
            <Login />
          </div>
          <div className='search-css'>
            <form onSubmit={postSearch}>
              <input
                onChange={handleChange}
                type='text'
                class='searchItems'
                placeholder=' ...search'
              />
              <button type='submit' class='searchButton'>
                <i style={{ color: 'black' }} class='fa fa-search'></i>
              </button>
            </form>

            <Link to='/shopingCart'>
              <button style={{ padding: '0.01vw 1vw', margin: '0 10px' }}>
                <i
                  class='fa fa-shopping-cart'
                  style={{ fontSize: '1.2em' }}
                ></i>
              </button>
            </Link>
          </div>
        </div> */}
    </div>
  );
}

export default Navbar;
