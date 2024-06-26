import React from "react";
import Door_Car from "../../assets/images/Door_Car.png";
import aboutframe from "../../assets/images/aboutframe.png";
const Aboutu = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-2">
            <img src={aboutframe} alt="" />
          </div>
          <div className="col-md-5">
            <p className="about_us">ABOUT US</p>
            <h1 className="about_heading">
              Drive Easy Rentals:Your Key to Freedom"
            </h1>
            <p className="about_para">
              At Drive Easy Rentals, we are dedicated to providing you with a
              seamless and hassle-free car rental experience. With our tagline,
              "Unlock Your Journey," we invite you to embark on unforgettable
              adventures with the utmost convenience and peace of mind. We take
              pride in our competitive pricing and exclusive deals, ensuring
              that you get the best value for your money. With "DriveEasy
              Rentals - Unbeatable Deals for Savvy Travelers," you can
              confidently compare prices, secure the most competitive rates, and
              enjoy exclusive discounts that make your rental experience even
              more affordable.{" "}
            </p>
            <div className="">
              <button className="btn_view_all">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Door_Car} width="100%" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutu;
