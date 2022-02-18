import React from 'react'
//import './Photogallery.css'
import { Link } from 'react-router-dom';


export default function Photogallery( props ) {
  return (
    <div class="welcome ">
    <div class="welcome-text">
        <h1 class="font1">OUR DISHES</h1>
        <hr/>
    </div>


<div className=" row">

        
    {props.dishes.map((dish) => {
        
        return(

            
            <div class=" container Row col-md-4"  key={dish.id}  onClick={ ()=>props.onClick(dish.id)}>

        <Link  to="/review"><figure><img src={dish.image } alt={dish.name}/></figure></Link>


    </div>

);


})
}   
        
        
        
        
        
        
        
        
        
        
     


</div>

</div>

  )
}
