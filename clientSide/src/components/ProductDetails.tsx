import React, { useEffect, useState } from "react";
import axios from "axios";
// import productModel from "../models/productModel";
import { useHistory, useParams } from "react-router-dom";
import BasketIcon from "../images/general/cartAdd.png";
import Footer from "./FooterHeaderCarouselBoxes/Footer";
import Header from "./FooterHeaderCarouselBoxes/Header";

import FadeIn from 'react-fade-in';

export interface RouteParams {productId: string}

const Product = () => {  
    let img_baseUrl = "/images/productPhotos/";
    let history = useHistory();
    let { productId } = useParams<RouteParams>();
    
    const [singleProd, setSingleProd] = useState({
        "productId": "",
        "productName": "",
        "price": "",
        "description": "",
        "category": "",
        "productImage": ""
    });
    
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${productId}`).then((response) => {
            setSingleProd(response.data)
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return( <div id="backgroundPicture">
      {localStorage.getItem('user') ? '' : <Header></Header>}
      <div className="buttonbox" style={{textAlign:'center'}}>
        <button className="btnFilter" onClick={() => { history.goBack()}}>Go back 😀</button>
      </div>
      <FadeIn>
      <div className="mainProdSection">
        <div className="product-center-container">
              <div className="product">
                <h1 className="p_title">{singleProd.productName}</h1>
                <img className="p_image" src={img_baseUrl+singleProd.productImage} alt={singleProd.productName}></img>
                <h4 className="p_price">${singleProd.price}</h4>
                <p className="p_description">{singleProd.description}</p>
                {/* {localStorage.getItem('user') ?
                (<button className="itemsToCart"
                  onClick={function() {
                    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : 0;
                    axios
                        .put(`http://localhost:3000/users/${userId}/${singleProd.productId}/bucket/${singleProd.productName}/${singleProd.price}/${singleProd.productImage}`)
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
                        .put(`http://localhost:3000/users/${userId}/${singleProd.productId}/bucket/${singleProd.productName}/${singleProd.price}/${singleProd.productImage}`)
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
              </div>
            </div>
      </div>
      </FadeIn>
      <Footer></Footer>
    </div>
    )

}


export default Product;