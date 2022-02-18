import React from 'react'
import './Home.css'
import icon1 from './photos/icon1.jpeg'
import icon2 from './photos/icon2.jpeg'
import icon3 from './photos/icon3.jpeg'
import img1 from './photos/home-img4.jpg'
import img2 from './photos/home-img2.jpg'
import img3 from './photos/home-img3.jpg'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    
    <div className="container">
    <div className="services font2">
   
    <h1 >NAMASTE! ENJOY OUR CUISINE!</h1>
    <div className="service my-5 row">
        <a className="reservation col-md-4">
            <img className="icon1" src={icon1} alt="reservation"/>
            <h2 style={{color:" rgb(38 ,140, 38)"}}>RESERVATION</h2>
        </a>
        <Link className="contact col-md-4" to="/contact">
            <img className="icon2" src={icon2}  alt="contact"/>
            <h2>CONTACT</h2>
        </Link>
        <Link className="order col-md-4" to="/menu">
            <img className="icon3" src={icon3}  alt="order"/>
            <h2 style={{color:"rgb(175 ,67, 29)"}}> OUR MENU</h2>
        </Link>
    </div>

    <div className="place-order">
        <button className="btn">PLACE YOUR ORDER</button>
    </div>

    <div className="home-pics row ">
        <figure className="col-md-4 "> <img src={img1} alt="pic"/> </figure>
        <figure className="col-md-4 "> <img src={img2} alt="pic"/></figure>
        <figure className="col-md-4 " > <img src={img3} alt="pic"/></figure>


    </div>
</div>
</div>

  )
}
