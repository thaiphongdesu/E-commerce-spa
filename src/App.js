import './App.css';
import React from 'react';
import TopNav from './components/TopNav';
import Products from './components/Products';
import {CartProvider} from './Contexts/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <CartProvider>
      <Router>
      <div className="App">
        <TopNav />    

        <Switch>
          <Route path="/products">
          <div className='top-fixed'><Products /></div>
          </Route>
          <Route path="/">
            <div className='top-fixed'><Home /></div>
          </Route>
        </Switch>  
      </div>
      </Router>
    </CartProvider>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
