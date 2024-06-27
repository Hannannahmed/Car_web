import React from 'react'
import Location from "../../assets/images/Location.png";
import calendartick from "../../assets/images/calendartick.png";
import book_car from "../../assets/images/book_car.png";
import stepsimg1 from "../../assets/images/stepsimg1.png";
import stepsimg2 from "../../assets/images/stepsimg2.png";
const Steps_section = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h4 className='how_works'>HOW IT WORKS</h4>
        </div>
        <div className="col-md-12">
          <h1 className='Dz_heading'>DZ Cars following 3 working steps</h1>
        </div>
        <div className="col-lg-2 col-md-4 mt-3">
          <div className="bg_shadow mx-auto">
            <img src={Location} width={30} alt="" />
          </div>
          <h5 className='heading_steps'>Choose a location</h5>
          <p className='para_steps'>See 3 popular hotels at a heavily discounted price</p>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <img src={stepsimg1} className='step_1_hide'  alt="" />
        </div>
        <div className="col-lg-2 col-md-4  mt-3">
          <div className="bg_shadow_red mx-auto">
            <img src={calendartick} width={30} alt="" />
          </div>
          <h5 className='heading_steps'>Choose a location</h5>
          <p className='para_steps'>See 3 popular hotels at a heavily discounted price</p>
        </div>
        <div className="col-lg-3 col-md-4 mt-5">
<img src={stepsimg2} className='step_2_hide'   alt="" />
        </div>
        <div className="col-lg-2 col-md-4  mt-3">
          <div className="bg_shadow mx-auto">
            <img src={book_car} width={30} alt="" />
          </div>
          <h5 className='heading_steps'>Choose a location</h5>
          <p className='para_steps'>See 3 popular hotels at a heavily discounted price</p>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Steps_section