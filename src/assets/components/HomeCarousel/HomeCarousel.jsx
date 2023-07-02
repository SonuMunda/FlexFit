import "./HomeCarousel.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import carousel_img_1 from "./images/carousel-image-1.jpg";
import carousel_img_2 from "./images/carousel-image-2.jpg";
import carousel_img_3 from "./images/carousel-image-3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  return (
    //React Carousel
    <Carousel autoPlay infiniteLoop>
      {/*Slide 1*/}
      <div className="slide-1">
        <img src={carousel_img_1} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Power Your Potential with Flex Fit
          </p>
          <div className="button-row mt-2">
            <button className="carousel-btn rounded text-white orng-btn">
             <Link to="/register"> Join us</Link>
            </button>
            <button className="carousel-btn rounded bg-white">
              <Link to="/contact">Contact us</Link>
            </button>
          </div>
        </div>
      </div>

      {/*Slide 2*/}
      <div className="slide-2">
        <img src={carousel_img_2} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Achieve Your Best with Flex Fit
          </p>
          <div className="button-row mt-2">
          <button className="carousel-btn rounded text-white orng-btn">
           <Link to="/register"> Join us</Link>
          </button>
          <button className="carousel-btn rounded bg-white">
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
        </div>
      </div>

      {/*Slide 3*/}
      <div className="slide-3">
        <img src={carousel_img_3} />
        <div className="slide-content">
          <h3 className="text-2xl font-bold text-white">Best Gym Center</h3>
          <p className=" font-black text-white">
            Empower Yourself with Flex Fit
          </p>
          <div className="button-row mt-2">
          <button className="carousel-btn rounded text-white orng-btn">
           <Link to="/register"> Join us</Link>
          </button>
          <button className="carousel-btn rounded bg-white">
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
