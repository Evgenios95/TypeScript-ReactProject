import "bootstrap/dist/css/bootstrap.min.css";
import "./Styling.css";

import { useEffect, useState } from 'react';

import HomePage from "./components/HomePage";
import Products from "./components/Products";
import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import BucketPage from "./components/Bucket";

import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Product from "./components/ProductDetails";
import FilteredProducts from "./components/FilteredProducts";
import axios from "axios";
import bucketModel from './models/bucketModel';

const App = () => {

  function logOutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    window.location.reload();
  }

  const [buckets, setBuckets] = useState<Array<bucketModel>>([]);

  useEffect(() => {
    axios
        .get(`http://localhost:3000/users/bucket/${localStorage.getItem('userId') ? localStorage.getItem('userId') : 0}`)
        .then((response) => {
            setBuckets(response.data.filteredBuckets);
        }).catch((err) => {
            console.log(err);
    });
  }, []);
  
  let totalCount = 0;
  // totalCount = buckets.length;
  buckets.map((bucket) => {
    totalCount += bucket.quantity;
  });

  return (
    <div className="App" id="backgroundPicture">
      <Router>
        <nav id="navMainer" className="navMainer">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/bucket">
                <div className="myBasketButton">
                  <span className="spanBasketButton">
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </span>
                  <div className="itemsToBasket">{totalCount}</div>
                </div>
              </Link>
            </li>
            <li style={{float: 'right', padding: '15px'}}>
              {localStorage.getItem('user')}
            </li>
            {localStorage.getItem('user') 
              ? 
              <li style={{float: 'right', padding: '14px', marginRight: '-20px'}} onClick={logOutUser.bind(this)}><span><Link to="/log_in"> Log Out </Link></span></li>
              : 
             ''}
          </ul>
        </nav>
        <div style={{marginTop: "-16px"}}>
          <Switch>
            <Route path="/products/cat/:category" exact component={FilteredProducts}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/products/:productId"><Product /></Route>
            <Route path="/log_in" exact component={LogInPage}></Route>
            <Route path="/sign_up" exact component={SignUpPage}></Route>
            <Route path="/bucket" exact component={BucketPage}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
 }
  
// }

export default App;
