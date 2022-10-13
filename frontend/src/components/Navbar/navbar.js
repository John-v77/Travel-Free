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
        <Link to='/'>
          <h3 className='logo'>Travel Free!</h3>
        </Link>
        <div className='nav-buttons-new'>
          <Link to='/'>HOME</Link>
          <Link to='/destinations'>DESTINATIONS</Link>
          <Link to='/add-items'>ADD PACKAGE</Link>

          <Link to='/shopingCart'>
            <button id='shopingCart'>
              <i className='fa fa-shopping-cart'></i>
            </button>
          </Link>
          <Login />
        </div>
      </div>
      <div className='nav-secondLine'>
        {/* <p>{user ? `Welcome back ${user.given_name}` : null}</p> */}
        <form onSubmit={postSearch} className='searchTrip'>
          <button type='submit' className='searchButton'>
            <i style={{ color: 'black' }} className='fa fa-search'></i>
          </button>
          <input onChange={handleChange} type='text' placeholder=' ...search' />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
