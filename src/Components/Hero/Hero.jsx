import React from "react";
import hero_img from '../../assets/images/hero_car.png'
import Hero_selects from "../hero_selects/Hero_selects";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h1 className="hero_heading">Save Big with Our Rental Car</h1>
          </div>
          <div className="col-md-12">
            <p className="hero_para">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
          <div className="col-md-12 text-center">
            <img src={hero_img} className="hero_img_main" width="50%" alt="" />
          </div>
          <Hero_selects />
        </div>
      </div>
    </>
  );
};

export default Hero;
