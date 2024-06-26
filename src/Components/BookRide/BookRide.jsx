import React from 'react'
import sidecurve from '../../assets/images/sidecurve.png'
import sidecar from '../../assets/images/side_car.png'
const BookRide = () => {
  return (
    <>
    <div className="container-fluid bg_book_ride">
      <div className="row mt-5 ">
        <div className="col-md-2">
          <img src={sidecurve} alt="" />
        </div>
        <div className="col-md-4 mt-5">
          <h1 className='book_heading'>Book Your Ride, Embrace the <span className='juorny'>Journey</span></h1>
          <p className='book_para'>we invite you to embark on your next adventure with ease and enthusiasm. Enjoy competitive prices and exclusive deals, ensuring you get the best value for your money.</p>
          <button className='find_loc_btn'>Find a Location</button>
        </div>
        <div className="col-md-6 p-0">
          <img src={sidecar} width="100%" alt="" />
        </div>
      </div>
    </div>
  
    </>
  )
}

export default BookRide