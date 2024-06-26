import React from 'react'
import event_1car from "../../assets/images/event_1car.png";
import event_2car from "../../assets/images/event_2car.png";
import event_3car from "../../assets/images/event_3car.png";
;
import speedicon from "../../assets/images/speed.png";
import manualicon from "../../assets/images/Manual.png";
import petrolicon from "../../assets/images/petrol.png";
const Event = () => {
  const card_data = [
    {
      top_img: event_1car,
      heading: "Engine Solution",
     head_2:"Globally myocardinate multimedia based infrastructures through.",
     para:"Professionally build unique markets via paralleltotal linkage. ",
     
    },
    {
      top_img: event_2car,
     
      heading: "Engine Solution",
     head_2:"Globally myocardinate multimedia based infrastructures through.",
     para:"Professionally build unique markets via paralleltotal linkage. ",
    },
    {
      top_img: event_3car,
    
      heading: "Engine Solution",
     head_2:"Globally myocardinate multimedia based infrastructures through.",
     para:"Professionally build unique markets via paralleltotal linkage. ",
    },
   
  ];
  return (
    <>
    <div className="container mt-5">
      <div className="row">
      <p className="faq_head">Recent News & Update</p>
      <h1 className="Frequently_head">Upcoming Cars & Events</h1>
      {card_data.map((item, index) => (
         
         <div className="col-md-4 mt-3" key={index}>
           <div className="card best_event_bg">
             <div className="card-img-top text-center p-2">
               <img src={item.top_img} width="100%" alt="" />
             </div>
             <div className="card-body">
               <p className="event_head w-50">{item.heading}</p>
             <h6>{item.head_2}</h6>
             <p className='text-muted'>{item.para}</p>
           </div>
         </div>
         </div>
  
     ))}
      </div>
      </div>
    
    </>
  )
}

export default Event