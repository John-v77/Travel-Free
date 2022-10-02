import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import AddItem from './components/AddItems/AddItem';
// import StoreFrontDesk from './components/storeFrontDesk';
import ShopingCart from './components/ShoppingCart/ShopingCart';
import { CartContext } from './components/CartContext';
import NavBar from './components/Navbar/navbar';
import Auth from './components/Auth';
import Search from './components/Search';
import Profile from './components/Profile';
import actions from './api';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import TheContext from './TheContext';
import StoreFrontDesk from './components/StoreFront/storeFrontDesk';
import ItemDetails from './components/ItemDetails/ItemDetails';
// import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  const [user, setUser] = useState({});
  const [shoppingCart, setShoppingCart] = useState({});
  const [cosas, setCosas] = useState([]);

  useEffect(() => {
    actions
      .getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error);
  }, []);

  const history = useHistory();

  return (
    <TheContext.Provider value={{ user, setUser, history }}>
      {/* <CartContext> */}

      <NavBar setCosasInNavBar={setCosas} shoppingCartList={setShoppingCart} />
      <div className='App'>
        {/* <nav className='logincss'> {!user.email ? <Link to="/auth"><b>Log in</b></Link> : <Link to="/profile"><b>Profile</b></Link>}
</nav>
      <h1 className='titlecss'>WhyNew</h1>
      <p><i>Why buy new overpriced if the option of slightly used exists.</i></p>
      <h4>{user.email}</h4>
      <nav className='navbarcss'>
        <Link to="/"><b>Home</b></Link>
        <Link to="all-items"><b>All Items</b></Link>
        <Link to="add-items"><b>Add Item</b></Link>
      </nav> */}

        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route
            exact
            path='/storeFrontDesk'
            render={(props) => (
              <StoreFrontDesk
                {...props}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            )}
          />
          <Route
            exact
            path='/add-items'
            render={(props) => <AddItem {...props} />}
          />
          <Route
            exact
            path='/auth'
            render={(props) => <Auth setUser={setUser} {...props} />}
          />
          <Route
            exact
            path='/profile'
            render={(props) => <Profile {...props} />}
          />
          <Route
            exact
            path='/search'
            render={(props) => <Search MyItemsZZZZ={cosas} {...props} />}
          />
          <Route
            exact
            path='/shopingCart'
            render={(props) => (
              <ShopingCart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                {...props}
              />
            )}
          />
          <Route
            exact
            path='/ItemDetails/:id'
            render={(props) => (
              <ItemDetails
                {...props}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            )}
          />
        </Switch>
      </div>

      {/* </CartContext> */}
    </TheContext.Provider>
  );
}

export default App;
