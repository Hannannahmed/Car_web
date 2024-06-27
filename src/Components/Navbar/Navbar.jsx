import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="container-fluid" style={{ position: 'fixed', background: '#262626', zIndex: 9999 }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} width={100} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                    aria-current="page"
                    href="#home"
                    onClick={() => handleClick('home')}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'vehicles' ? 'active' : ''}`}
                    href="#Vehicles"
                    onClick={() => handleClick('vehicles')}
                  >
                    Vehicles
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'whyChooseUs' ? 'active' : ''}`}
                    href="#WhyChooseUS"
                    onClick={() => handleClick('whyChooseUs')}
                  >
                    Why Choose US
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                    href="#about"
                    onClick={() => handleClick('about')}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'blogs' ? 'active' : ''}`}
                    href="#blogs"
                    onClick={() => handleClick('blogs')}
                  >
                    Blogs
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                    href="#contact"
                    onClick={() => handleClick('contact')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className='center_sm_custom'>
                <button className='btn_register mx-4'>Register</button>
                <button className='sign_btn'>Sign In</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
