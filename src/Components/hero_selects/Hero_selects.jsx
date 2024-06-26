import React from "react";
import cartype from "../../assets/images/select_car.png";
import Location from "../../assets/images/Location.png";
import dropdown_select from "../../assets/images/dropdown_icon.png";
import hamburger from "../../assets/images/hamburger.png";
const Hero_selects = () => {
  return (
    <>
      <div className="container bg_selects">
        <div className="row ">
          <div className="col-md-3">
            <div className="d-flex gap-2  mt-3">
              <div>
                <img src={cartype} alt="cartype" className="mt-1" />
              </div>
              <div>
                <p className="text_selects mt-1">Select Your Car Type</p>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="btn bg_dropdown_color  d-flex align-items-center gap-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select your car type
                <img src={dropdown_select} alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
          <div className="d-flex gap-2  mt-3">
              <div>
                <img src={Location} width={15} alt="cartype" className="mt-1" />
              </div>
              <div>
                <p className="text_selects mt-1">Pick-up</p>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="btn bg_dropdown_color drop_width   d-flex align-items-center justify-content-between"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select your car type
                <img src={dropdown_select} alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
          <div className="d-flex gap-2  mt-3">
              <div>
                <img src={Location} width={15} alt="cartype" className="mt-1" />
              </div>
              <div>
                <p className="text_selects mt-1">Drop-of</p>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="btn bg_dropdown_color drop_width  d-flex align-items-center gap-3 justify-content-between"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select your car type
                <img src={dropdown_select} alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="d-flex gap-3 align-items-center">
            <div className="bg_hamburger_color mt-3"> 
              <img src={hamburger} alt="" />
              </div>
              <div>
                <button className="btn_search_selects mt-3">Search</button>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Hero_selects;
