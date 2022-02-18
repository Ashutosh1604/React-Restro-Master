import React from 'react'


export default function Footer() {
  return (
    <>
   <div className="footers">
   <div className="details row">

<div className="contact col-md-3">
    <h1 className="mt-3">Where we are</h1>
    <h2 style={{fontSize: "20px"}} >EASTVILLAGE, MANHATTAN, NY</h2>
    <p style={{fontSize: "21px"}}>309 east, 5th street,btw 1st & 2nd Av.</p>

    <h3 className="num mt-3">CALL US</h3>
    <h2>Phone:+1646755</h2>

    <h3 className="mail mt-2">WRITE US</h3>
    <h2>nyc@indianmasala.com</h2>
</div>
<div className="timming col-md-4">
    <h1 className="mt-3">Opening Time</h1>
    <h2 className="mt-4">EVERYDAY TIME</h2>
    <h3>SUN-THU:4pm-10.30am<br/>
        FRI-SAT:4pm-11.00pm</h3>

    <h2 className="mt-4">SATURDAY & SUNDAY:</h2>
    <h3>Brunch:11.30am-3.30pm</h3>

</div>

</div>


<div className="footer">
<p>Copyright &copy; www.nyc@indianmasala.com.All rights reserved</p>
</div>
</div>
    </>
  )
}
