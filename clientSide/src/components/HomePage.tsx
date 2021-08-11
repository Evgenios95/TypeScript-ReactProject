import "../Styling.css";

import React, { Component } from "react";

import CarouselComponent from "./FooterHeaderCarouselBoxes/CarouselComponent";
import Footer from "./FooterHeaderCarouselBoxes/Footer";
import Header from "./FooterHeaderCarouselBoxes/Header";
import WebsiteInfoBoxes from "./FooterHeaderCarouselBoxes/WebsiteInfoBoxes";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div >
          {localStorage.getItem('user') ? '' : <Header></Header>}
          <h1 id="titlewebsite">
            Tra<span id="dishTitle">dish</span>ional-GR
          </h1>
          <h3 id="titleSub">"Products from the heart of Greece"</h3>
          <CarouselComponent />
          <WebsiteInfoBoxes></WebsiteInfoBoxes>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
