import React from 'react'
import sweet from './photos/sweet.jpg'
import './About.css'




export default function about() {



  return (
    <>
    <div className="indian-food mt-5  ">
      


        <div className="food-text row ">
<div className=" col-md-4 ">
    <h2>Indian Food</h2>
    <hr/>
    <h3>What is it?</h3>
</div>
<div className=" col-md-8">
    <p>Indian cuisine consists of a variety of regional<br/> and traditional cuisines native to the Indian subcontinent.<br/><br/>
         Given the diversity in soil, climate, culture, <br/>ethnic groups, and occupations,<br/> these cuisines vary substantially and use<br/> locally 
         available spices ,herbs, vegetables, and fruits.<br/>

        Indian food is also heavily influenced by religion, <br/>in particular Hinduism, cultural choices and traditions<br/><br/>
        
        <em style={{fontWeight:" bold"}}>Indian cuisine has shaped the history of international relations.</em></p>
</div>
    </div>

</div>





<div class="indian-drink mt-5">
   
  <div class="drink-text">
    
<h2>LASSI</h2>


<p>Lassi, a creamy, frothy yogurt-based drink, blended with water and various fruits or seasonings (such as salt or sugar),
     that originated in Punjab,India.<br/><br/> There are many varieties, but most are either sweet or salted; the former is blended 
     with curd or fruit (such as mango) or is whisked with sugar, whereas the latter is miaed with salt and/or spices, typically
      cumin or cardamom. Traditionally, lassi is served in a handleless clay cup called a kulhar, and eatra malai (clotted cream) 
      may be spooned on top before serving.<br/><br/> The drink has spread to the rest of the world, especially to Great Britain and countries
       tied to the former British Empire.</p>
</div>
</div> 






{/* About sweets */}
<div class="indian-sweets row ">
    <div class="sweet-image col-md-6">
        <img src={sweet} alt="pic"/>
    </div>
  <div class="sweet-text col-md-6">
    
<h2>Indian Sweets</h2>


<p>
   <em> Indian sweets come in a variety of colours, textures and shapes.<br/><br/>
    Each sweet has its own identity in a sweet shop.
    We look at some of the most popular Indian sweets made and available for people to enjoy today.</em>
</p>
</div>
</div> 


{/*about restaurant */}

<div class="about-us ">
   
  <div class="our-text ">
    
<h2 className="my-5">The Indian Masala</h2>

<p className="my-5">The Indian Masala,  is the result of couple hardworking friends who are practicing wonderful indian kitchen past few years.
    We believe in great homestyle taste and welcoming service.<br/><br/> It is the less business place and more service place. 
    We warmly welcome all indian food lovers with decent flavors and family environment. 
    We have  dishes of all over india . Customers satisfaction is our guarantee.

    Wanna try Indian Foods? Then remember <br/><em>"The Indian Masala"</em><br/> is there for you. We serve all kinds of Indian dishes with our special flavours.....</p>
</div>
</div> 
    
    </>
  )
}


