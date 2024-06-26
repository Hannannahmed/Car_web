import React from "react";
import car_section from "../../assets/images/car_section.png";
import img_1 from "../../assets/images/1.png";
import img_2 from "../../assets/images/2.png";
import img_3 from "../../assets/images/3.png";
import img_4 from "../../assets/images/4.png";
import img_5 from "../../assets/images/5.png";
import img_6 from "../../assets/images/6.png";
import circle_bg from "../../assets/images/circle_bg.png";

const WhyChoose = () => {
  const card_left = [
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_1,
    },
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_3,
    },
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_5,
    },
  ];
  const card_right = [
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_2,
    },
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_4,
    },
    {
      heading: "Wide Selection",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti maiores commodi expedita perferendis aperiam modi quos.",
      img_num: img_6,
    },
  ];
  return (
    <>
      <div className="container-fluid why_choose_bg pb-5 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 mt-5">
              <p className="why_choose_heading text-center">WHY CHOOSE US</p>
              <h1 className="seamless_heading">
                Discover A Seamless Rental Experience
              </h1>
            </div>
            <div className="d-flex justify-content-center ">
              <div className="parent">
                {card_left.map((item, index) => (
                  <div className="d-flex  mt-3 " key={index}>
                    <div className="border_custome">
                      <h5 className="heading_car_Sec">{item.heading}</h5>
                      <p  className="para_car_Sec">{item.para}</p>
                    </div>
                    <div>
                      <img src={item.img_num} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="car mt-5">
                <img src={circle_bg} width="160%" className="position_img mt-4"  alt="" />
                <img src={car_section}   alt="" />
              </div>
              <div className="parent">
                {card_right.map((item, index) => (
                  <div className="d-flex  mt-3 " key={index}>
                    <div>
                      <img src={item.img_num} alt="" />
                    </div>
                    <div  className="border_custome_2">
                      <h5 className="heading_car_Sec">{item.heading}</h5>
                      <p className="para_car_Sec">{item.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
