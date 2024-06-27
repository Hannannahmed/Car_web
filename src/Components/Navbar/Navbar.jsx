import React from 'react'
import logo from '../../assets/images/Logo.png'
const Navbar = () => {
  return (
    <>
    <div className="container-fluid "  style={{position:'fixed',background:"#262626",zIndex:1}}>
    <nav className="navbar navbar-expand-lg navbar-light" >
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
          <a className="nav-link active " aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
          Vehicles
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
          Why Choose US
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
          About
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
          Blogs
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
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
  )
}

export default Navbar