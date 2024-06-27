import React from "react";
import logo from "../../assets/images/Logo.png";
import location from "../../assets/images/Location.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import Facebook from "../../assets/images/Facebook.png";
import insta from "../../assets/images/insta.png";
import Twitter from "../../assets/images/Twitter .png";
import line from "../../assets/images/line.png";
const Footer = () => {
  return (
    <>
      <div id="contact" className="container-fluid bg_footer mt-5">
        <div className="container">
          <div className="row p-5 " >
            <div className="col-lg-3 col-md-6 mt-3 col-sm-12">
              <div>
                <img src={logo} alt="" />
              </div>
              <p className="footer_text">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.Lorem Ipsum is simply dummy text of the printing.
              </p>
              {[
                {
                  img_i: location,
                  info: "Us",
                },
                {
                  img_i: email,
                  info: "dzcars.@gmail.com",
                },
                {
                  img_i: phone,
                  info: "1111-2222-3333",
                },
              ].map((item, index) => (
                <div className="d-flex  gap-3" key={index}>
                  <div>
                    <img src={item.img_i} width={20} alt="" />
                  </div>
                  <p className="info_text">{item.info} </p>
                </div>
              ))}
            </div>
            <div className="col-lg-3 col-md-6 mt-3 col-sm-12">
              <h3 className="footer_h3">Services</h3>
           
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <li className="li_style">Service 01</li>
                ))}
            
            </div>
            <div className="col-lg-3 col-md-6 mt-3 col-sm-12">
              <h3 className="footer_h3">Company</h3>
        
                {["About", "Jobs", "Press", "Request A Quote"].map(
                  (item, index) => (
                    <li className="li_style" key={index}>
                      {item}
                    </li>
                  )
                )}
              
            </div>
            <div className="col-lg-3 col-md-6 mt-3 col-sm-12">
              <h3 className="footer_h3">Community</h3>
            
                {["Support", "Give dzcars"].map((item, index) => (
                  <li className="li_style">{item}</li>
                ))}
             
              <h3>Follow On:</h3>
              <div className="d-flex gap-3">
                {[Facebook, insta, Twitter].map((item, index) => (
                  <>
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  </>
                ))}
              </div>
            </div>
              <img src={line} width="100%" className="mt-4" alt="" />
            <div className="d-flex justify-content-between mt-4 text-wrap flex-wrap">
              <div className="font_size_text mt-3">© 2023 <span className="footer_dz"> DZ Cars </span> |  All Rights Reserved</div>
              <div className="font_size_text mt-3"><span className="footer_design">Designed by</span>  Tabish Khanji</div>
              <div className="font_size_text mt-3  term_privacy_text ">Terms & Conditions | Privacy Policy</div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
