import React from 'react'
import BMW  from '../../assets/images/BMW.png'
import Tesla  from '../../assets/images/Tesla.png'
import Ford  from '../../assets/images/Ford.png'
import Audi  from '../../assets/images/Audi.png'
import Hyundai  from '../../assets/images/Hyundai.png'
import Lexus  from '../../assets/images/Lexus.png'
const Rental_feed = () => {

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='our_rental'>Our Rental Fleet</h1>
        </div>
        <div className="col-md-6 text-end">
          <button className='btn_view_all'>View All</button>
        </div>
        {[BMW,Tesla,Ford,Audi,Hyundai,Lexus].map((item,index)=>(
          <div className="col-md-2 mt-4" key={index}>
          <div className="card p-2 bg_rental_cards " style={{height:"110px"}}>
            <div className='text-center'>
            <img src={item} width="100px" alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Rental_feed