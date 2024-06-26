import React from "react";
import questionicon from "../../assets/images/Object.png";
import Clinet_2 from "../../assets/images/Clinet_2.png";
import Clinet_1 from "../../assets/images/Clinet_1.png";
const Reviews = () => {
  const card_testimonial = [
    {
      questio_img: questionicon,
      para_testi:
        " Those opposed to using filler text of any sort counter by saying: The ultimate purpose of any digital product, whether a website, app, or HTML email, is to showcase real content showcase great design inevitable argumentation.",
      clientimg: Clinet_2,
      clientname: "Lurch Schpellchek",
      passion: "UI/UX Designer",
    },
    {
      questio_img: questionicon,
      para_testi:
        " Those opposed to using filler text of any sort counter by saying: The ultimate purpose of any digital product, whether a website, app, or HTML email, is to showcase real content showcase great design inevitable argumentation.",
      clientimg: Clinet_1,
      clientname: "Lurch Schpellchek",
      passion: "UI/UX Designer",
    },
    {
      questio_img: questionicon,
      para_testi:
        " Those opposed to using filler text of any sort counter by saying: The ultimate purpose of any digital product, whether a website, app, or HTML email, is to showcase real content showcase great design inevitable argumentation.",
      clientimg: Clinet_2,
      clientname: "Lurch Schpellchek",
      passion: "UI/UX Designer",
    },
  ];
  return (
    <>
      <div className="container-fluid bg_review">
        <div className="container p-5">
          <p className="why_choose_heading">TESTIMONIALS</p>
          <h1 className="seamless_heading text-start">
            Our Happy Clients Reviews
          </h1>
          <div className="row">
            {card_testimonial.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card p-3 bg_testimonial">
                  <div className="card-top-img mb-4">
                    <img src={item.questio_img} width={50} alt="" />
                  </div>
                  <p>{item.para_testi}</p>
                  <div className="d-flex gap-3 ">
                    <div>
                      <img src={item.clientimg} alt="" />
                    </div>
                    <div>
                      <h6>{item.clientname}</h6>
                      <p>{item.passion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
