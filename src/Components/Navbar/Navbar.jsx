import React, { useState } from 'react'
import './Navbar.css'






export default function Navbar() {
  
  const [navbar, setNavbar] = useState()
  
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll' , changeBackground)





  return <>
    <nav className={navbar ? "navbar navbar-expand-lg active fixed-top " : 'navbar navbar-expand-lg navbar-dark fixed-top'}>
  <div className="container">
    <a className="navbar-brand" href="#">Ali</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link custom-color" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonial">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
