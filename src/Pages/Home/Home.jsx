import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Steps_section from '../../Components/Stepss/Steps_section'
import Populardeals from '../../Components/Populardeals/Populardeals'
import Rental_feed from '../../Components/Rentalfeet/Rental_feed'
import WhyChoose from '../../Components/WhyChoose/WhyChoose'
import Aboutu from '../../Components/Aboutus/Aboutu'
import HappyClient from '../../Components/HappyClient/HappyClient'
import Reviews from '../../Components/Review/Reviews'
import Faq from '../../Components/Faq/Faq'
import BookRide from '../../Components/BookRide/BookRide'
import Event from '../../Components/Event/Event'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
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
  )
}

export default Home