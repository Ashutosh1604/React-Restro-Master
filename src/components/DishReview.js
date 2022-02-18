import React,{useState} from 'react'


export default function Dishdetail(props) {



    let listStyle={
     
        listStyle:"none",
        fontSize: "17px",
        border:"2px black solid",
        color:"white",
        backgroundColor:"black",
      
      }
    

  return (
      <>
    <div  className=" welcome row" style={{flexDirection:"row"}}>
       
    <div class="welcome-text">
        <h1 class="font1"> Dish Reviews</h1>
        <hr/>
    </div>


       <div className=" col-12 col-md-5 ">

                <div class="card " >
               <img src={props.dish.image}   class="card-img-top" alt={props.dish.name}/>
                 <div class="card-body " >
                    <h2>{props.dish.name}</h2>
                    <p>{props.dish.description}</p>
                </div>
               
               </div>
            
          
       </div>





       <div className="col-12 col-md-5 ">
            <h1>Comments</h1>
           
           
               
          
            {

              <ul className="container"  >
                  {props.dish.comments.map((comments)=>
                  <div className="mt-4" key={comments.id} style={listStyle} >

                  <li>{comments.comment} </li>
                  <li>-- {comments.author} , {comments.date}</li>
                  <li>Rating: {comments.rating}</li>
                  
                  </div>
                  
                  )}

              </ul> 

       
            
            
                
             } 
                




       </div>


    </div>
      </>
  );
}
