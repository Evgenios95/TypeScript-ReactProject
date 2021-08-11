import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import productModel from "../models/productModel";
import BasketIcon from "../images/general/cartAdd.png";
import Footer from "./FooterHeaderCarouselBoxes/Footer";
import Header from "./FooterHeaderCarouselBoxes/Header";
import {  useHistory } from "react-router-dom";

import FadeIn from 'react-fade-in';

const Products: React.FC<Array<productModel>> = () => {

  let img_baseUrl = "/images/productPhotos/";
  const [products, setProducts] = useState<Array<productModel>>([]);
  let history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((result) => {
        setProducts(result.data.allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    {localStorage.getItem('user') ? '' : <Header></Header>}
      <div className="buttonbox">
            <button className="btnFilter" onClick={() => { history.push(`/products/cat/cheese`)}}>Cheese</button>
            <button className="btnFilter" onClick={() => { history.push(`/products/cat/spirits`)}}>Spirits</button>
            <button className="btnFilter" onClick={() => { history.push(`/products/cat/more`)}}>Rest</button>
        </div>
      <FadeIn>
      <div className="mainProdSection">
        <div className="product-center-container">
          {products.map((product: productModel, index) => (
            
              <div className="product" key={index}>
                <h1 className="p_title">{product.productName}</h1>
                <img className="p_image" src={img_baseUrl+product.productImage} alt={product.productName}></img>
                <h4 className="p_price">${product.price}</h4>
                {/* {localStorage.getItem('user') ?
                (<button className="itemsToCart"
                  onClick={function() {
                    axios
                        .put(`http://localhost:3000/users/${localStorage.getItem("userId")}/${product.productId}/bucket/${product.productName}/${product.price}/${product.productImage}`)
                        .then((response) => {
                            console.log(response.data.removedBucket);
                            window.location.reload();
                        }).catch((err) => {
                            console.log(err);
                    });
                  }}
                >
                  <img src={BasketIcon} alt="Basket displayed here"></img>
                </button>)
                 :
                  ''} */}

                <button className="itemsToCart"
                  onClick={function() {
                    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : 0;
                    axios
                        .put(`http://localhost:3000/users/${userId}/${product.productId}/bucket/${product.productName}/${product.price}/${product.productImage}`)
                        .then((response) => {
                            console.log(response.data.addBucket);
                            window.location.reload();
                        }).catch((err) => {
                            console.log(err);
                    });
                  }}
                >
                  <img src={BasketIcon} alt="Basket displayed here"></img>
                </button>

                <br />
                <br />
                <button className="btn btn-pink" onClick={() => { history.push(`/products/${product.productId}`)}}>Details</button>
              </div>
          ))}
        </div>
      </div>
      </FadeIn>
      <Footer></Footer>
    </div>
  );
};

export default Products;
