import "./HomeCarousel.css";
import { Carousel } from "react-responsive-carousel";
import carousel_img_1 from "./images/carousel-image-1.jpg";
import carousel_img_2 from "./images/carousel-image-2.jpg";
import carousel_img_3 from "./images/carousel-image-3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="slide-1">
        <img src={carousel_img_1} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Power Your Potential with Flex Fit 
          </p>
          <div className="button-row mt-2">
            <button className="carousel-btn rounded text-white orng-btn">Join us</button>
            <button className="carousel-btn rounded bg-white">Contact us</button>
          </div>
        </div>
      </div>
      <div className="slide-2">
        <img src={carousel_img_2} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Achieve Your Best with Flex Fit
          </p>
          <div className="button-row mt-2">
            <button className="carousel-btn rounded text-white orng-btn">Join us</button>
            <button className="carousel-btn rounded bg-white">Contact us</button>
          </div>
        </div>
      </div>
      <div className="slide-3">
        <img src={carousel_img_3} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Empower Yourself with Flex Fit
          </p>
          <div className="button-row mt-2">
            <button className="carousel-btn rounded text-white orng-btn">Join us</button>
            <button className="carousel-btn rounded bg-white">Contact us</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
