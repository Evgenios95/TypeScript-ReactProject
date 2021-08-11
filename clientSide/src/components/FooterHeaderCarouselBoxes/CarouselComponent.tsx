import cheeseSale from "../../images/sales/cheeseSale.jpg";
import spiritSale from "../../images/sales/spiritSale.jpg";
import productSale from "../../images/sales/productSale.jpg";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div>
      <Carousel
        id="tradishionalSlider"
        pause={"hover"}
        interval={2400}
        keyboard={true}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={cheeseSale} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={spiritSale} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={productSale} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
