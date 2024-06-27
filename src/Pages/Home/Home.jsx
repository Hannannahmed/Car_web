import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
// Importing the components lazily
const Hero = lazy(() => import("../../Components/Hero/Hero"));
const Steps_section = lazy(() =>
  import("../../Components/Stepss/Steps_section")
);
const Populardeals = lazy(() =>
  import("../../Components/Populardeals/Populardeals")
);
const Rental_feed = lazy(() =>
  import("../../Components/Rentalfeet/Rental_feed")
);
const WhyChoose = lazy(() => import("../../Components/WhyChoose/WhyChoose"));
const Aboutu = lazy(() => import("../../Components/Aboutus/Aboutu"));
const HappyClient = lazy(() =>
  import("../../Components/HappyClient/HappyClient")
);
const Reviews = lazy(() => import("../../Components/Review/Reviews"));
const Faq = lazy(() => import("../../Components/Faq/Faq"));
const BookRide = lazy(() => import("../../Components/BookRide/BookRide"));
const Event = lazy(() => import("../../Components/Event/Event"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <>
    
         <Navbar />
      <div className="container-fluid bg_hero">
        <Hero />
      </div>
      <Steps_section />
      <Populardeals />
      <Rental_feed />
      <WhyChoose />
      <Aboutu />
      <HappyClient />
      <Reviews />
      <Faq />
      <BookRide />
      <Event />
      <Footer />
      
    </>
  );
};

export default Home;
