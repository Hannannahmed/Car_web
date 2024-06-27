import React from "react";
import line from "../../assets/images/line.png";
import video_img from "../../assets/images/video_img.png";
const HappyClient = () => {
  const card_happy = [
    {
      heading: "10+",
      experience: "Years Of Experience",
      para: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading: "45k+",
      experience: "Happy Customer",
      para: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading: "500+",
      experience: "Cars in Garage",
      para: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading: "120+",
      experience: "Team Members",
      para: "Lorem Ipsum is simply dummy text of the printing.",
    },
  ];
  return (
    <>
      <div className="container">
        <img src={line} width="100%" alt="" />
        <div className="row p-5 mx-auto">
          {card_happy.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 " key={index}>
              <h1 className="heading_red">{item.heading}</h1>
              <h6 className="heading_experience">{item.experience}</h6>
              <p className="para_lorem">{item.para}</p>
            </div>
          ))}
          <div className="mt-5">
            <img src={video_img} width="100%" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyClient;
