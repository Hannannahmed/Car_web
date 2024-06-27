import React from "react";
import card_1 from "../../assets/images/card_1.png";
import card_2 from "../../assets/images/card_2.png";
import card_3 from "../../assets/images/card_3.png";
import card_4 from "../../assets/images/card_4.png";
import card_5 from "../../assets/images/card_5.png";
import card_6 from "../../assets/images/card_6.png";
import card_7 from "../../assets/images/card_7.png";
import card_8 from "../../assets/images/card_8.png";
import speedicon from "../../assets/images/speed.png";
import manualicon from "../../assets/images/Manual.png";
import petrolicon from "../../assets/images/petrol.png";
const Populardeals = () => {
  const card_data = [
    {
      top_img: card_1,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_2,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_3,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_4,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_5,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_6,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_7,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
    {
      top_img: card_8,
      heading: "Audi A5 2021 Convertible",
      listed: "Listed by:",
      disposal: "Disposal Holdings",
      iconspeed: speedicon,
      speedtext: "1300cc",
      iconmanual: manualicon,
      munaultext: "Manual",
      iconpetrol: petrolicon,
      petroltext: "Petrol",
      amount_text: "3500$",
    },
  ];
  return (
    <>
      <div id="Vehicles" className="container-fluid back_popular_img">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-12">
              <p className="popular_rental">POPULAR RENTAL DEALS</p>
            </div>
            <div className="col-lg-9 col-md-6 col-sm-12">
              <h1 className="best_valued">
                Best Valued Deals You Will Ever Find
              </h1>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_btn d-flex gap-2">
                <button className="latest_btn">Latest Cars</button>
                <button className="featured_btn">Featured</button>
              </div>
            </div>
            {card_data.map((item, index) => (
         
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                  <div className="card best_card_bg">
                    <div className="card-img-top text-center p-2">
                      <img src={item.top_img} width="100%" alt="" />
                    </div>
                    <div className="card-body">
                      <h3 className="best_h3">{item.heading}</h3>
                      <p>
                        <span className="listed_text">{item.listed}</span>
                        <span className="disposal_text">
                          {" "}
                          {item.disposal}
                        </span>{" "}
                      </p>
                      <div className="row"></div>
                      <div className="d-flex gap-2">
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          <div>
                            <img src={item.iconspeed} width={20} alt="" />
                          </div>
                          <div>
                            <p className="card_text_cc mt-3">
                              {item.speedtext}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          <div>
                            <img src={item.iconmanual} width={20} alt="" />
                          </div>
                          <div>
                            <p className="card_text_cc mt-3">
                              {item.munaultext}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          <div>
                            <img src={item.iconpetrol} width={20} alt="" />
                          </div>
                          <div>
                            <p className="card_text_cc mt-3">
                              {item.petroltext}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <h5 className="amount_text">
                            {item.amount_text}{" "}
                            <span className="day_text"> /Day</span>{" "}
                          </h5>
                        </div>
                        <div>
                          <button className="book_car">Book a car</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
         
            ))}
            <div className="col-md-12 text-center mt-5">
              <button className="view_more_btn">View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Populardeals;
