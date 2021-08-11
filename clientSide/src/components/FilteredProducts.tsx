import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import productModel from "../models/productModel";
import { useHistory, useParams } from "react-router-dom";
import Footer from "./FooterHeaderCarouselBoxes/Footer";
import Header from "./FooterHeaderCarouselBoxes/Header";
import FadeIn from 'react-fade-in';
import BasketIcon from "../images/general/cartAdd.png";

export interface RouteParams {category: string}

const FilteredProducts: React.FC<Array<productModel>> = () => {
    let img_baseUrl = "/images/productPhotos/";
    let history = useHistory();
    const [filteredproducts, setfilteredproducts] = useState<Array<productModel>>([]);
    
    let { category } = useParams<RouteParams>();

    useEffect(() => {
      axios
        .get(`http://localhost:3000/products/cat/${category}`)
        .then((result) => {
            console.log(result.data);
          setfilteredproducts(result.data.filteredProducts);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div id="backgroundPicture">
      {localStorage.getItem('user') ? '' : <Header></Header>}
      <div className="buttonbox">
        <button className="btnFilter" onClick={() => { history.goBack()}}>Go back 😀</button>
      </div>
      <FadeIn>
      <div className="mainProdSection">
        <div className="product-center-container">
            {filteredproducts.map((filtered: productModel, index) => (
              <div className="product" key={index}>
                <h1 className="p_title">{filtered.productName}</h1>
                <img className="p_image" src={img_baseUrl+filtered.productImage} alt={filtered.productImage}></img>
                <h4 className="p_price">${filtered.price}</h4>
                {/* {localStorage.getItem('user') ?
                (<button className="itemsToCart"
                  onClick={function() {
                    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : 0;
                    axios
                        .put(`http://localhost:3000/users/${userId}/${filtered.productId}/bucket/${filtered.productName}/${filtered.price}/${filtered.productImage}`)
                        .then((response) => {
                            console.log(response.data.addBucket);
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
                        .put(`http://localhost:3000/users/${userId}/${filtered.productId}/bucket/${filtered.productName}/${filtered.price}/${filtered.productImage}`)
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
                <button className="btn btn-pink" onClick={() => { history.push(`/products/${filtered.productId}`)}}>Details</button>
              </div>
          ))}
        </div>
      </div>
      </FadeIn>
      <Footer></Footer>
    </div>
    );
  };
  
  export default FilteredProducts;
  