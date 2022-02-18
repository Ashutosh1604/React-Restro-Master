import React from 'react'
import logo from './photos/logo.jpg'
import bgHome from './photos/pic-5.jpg'
import bgAbout from './photos/a.jpg'
import bgMenu from './photos/menu.jpg'
import bgPics from './photos/p.jpg'
import bgContact from './photos/us.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
      <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div className="logo">

  <img class="logo" src={logo} alt="Indian-Masala"/>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse options" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active"  onClick={()=>props.switchTitle("Indian Masala NYC",bgHome)}  style={{color:"rgb(119, 29, 29)"}} aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" onClick={()=>props.switchTitle("About",bgAbout)}   to="/about">RESTAURANT</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link "onClick={()=>props.switchTitle("The Indian Masala Menu", bgMenu)}   to="/menu">MENU</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " onClick={()=>props.switchTitle("Food-Gallery", bgPics)} to="/photos">PHOTOGALLERY</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " onClick={()=>props.switchTitle("Contact",bgContact) } to="/contact">CONTACT</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
      </>

  )
}

