import React from 'react'
import styled from 'styled-components'

export default function Title(props) {

  let textStyle={
    display: "flex",
    justifyContent: "center",
    padding: "168px",
    margin: "0px 0px",
    fontSize: "114px",
    fontWeight:" 300",
    flexDirection: "column",
    alignItems: "center",
    color: "rgb(21, 21, 51)",
    fontFamily:"auto",
    textAlign:"center",

  }


  const YourEffect= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  font-size: 28px;   
  z-index: 3;
  box-shadow: 1px 1px 46px #524c4c;
  
  &:before {
    content: " "; 
    background:url('${props.title.img}')no-repeat center center/cover;
    height: 100%;
    width: 100%;
    z-index:-1;
    opacity:52%;
    position: absolute;
    transition: 0.3s ease-in-out;
  },
  
  
  `

  
/*
  let titleStyle={

    position:" relative",
    height: "100%",
    margin:"12px 0px",
    backgroundImage:`url('${props.title.img}')`,
   // backgroundBlendMode:"darken",
    //linearGradient:"(rgba(0,0,0,0.6),rgba(0,0,0,0.3))",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  //    width: "48vh",
    boxShadow: "rgb(82 76 76) 1px 3px 35px",
    //opacity:" 0.69",
    

  

}
*/



  return (
    <>

<YourEffect>

     <div className="title " >
    


            <div className=" text ">


        <h1 className="name" style={textStyle}>{props.title.name} </h1>
             
             </div>
             
      </div>
        
</YourEffect>
      

    </>
  )
}

/*<hr style="background-color: rgb(238, 105, 56);"/>
            <hr style="background-color: rgb(23, 190, 23);"/>*/