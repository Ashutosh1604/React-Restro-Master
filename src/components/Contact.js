import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

export default function Contact() {

function sendEmail (e){

e.preventDefault(); //stop the reload

emailjs.sendForm('service_7u0q8d7',
'template_ykmr5jj',
e.target,
'user_T5DpTgZbhwnxbTLFJrkmf'
).then(res=>{
    console.log(res);
}).catch(err=>console.log(err));
}



  return (
    <div className="contact-us mt-5">
        <div className="contact-info row">
       <div className="info mt-5 col-md-7">
           <h1>EMAIL US FOR MORE </h1>
           <h1>INFORMATION! <hr/></h1>
          
          
           <h2>EVERYDAY OPEN</h2>
           <h3>SUN - TUE : 4 PM - 10.30PM</h3>
           <h3>FRI-SAT : 4 PM - 11.00 PM</h3>
       </div>


<div className="col-md-5 " >

      <form action="/" onSubmit={sendEmail}>
           <div className="form-group">
               <label for="name">NAME AND SURNAME:</label>
               <input type="text" name="name"/>
           </div>

           <div className="form-group">
            <label for="mail">YOUR EMAIL:</label>
            <input type="email" name="user_email" placeholder="@"/>
        </div>
        <div className="form-group">
            <label for="no.">YOUR PHONE:</label>
            <input type="phone" name="phone"/>
        </div>
        <div className="form-group">
            <label for="name">SUBJECT:</label>
            <input type="text" name="subject"/>
        </div>
        <div className="form-group">
            <label for="text">WRITE YOUR REQUEST HERE:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
           </div>

         <div className="form-group">
           <button className="bttn">Send</button>
           </div>
        
        </form>
</div>
        </div>
        </div>

  )
}
