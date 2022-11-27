import React from "react";
import {Card} from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){

    return (
      <Card
      bgcolor="primary"
        txtcolor="black"
        header="BadBank Home"
        title="Welcome to the Bad Bank"
        text="This is the Homepage"
        body={
          <img id="bankPic" src="https://media.istockphoto.com/id/654378978/photo/online-banking-on-smartphone-with-businessman-showing-screen.jpg?s=1024x1024&w=is&k=20&c=mS9A4biZzYxAc0w3i4WYdpZSv5gz2qy0R6AyZ0FKpGA=" alt='bankPic'/>

        }
      />    
    );  
  }
  
export default Home;

// body={(<img src="../bank.png" className="img-fluid" alt="Responsive image"/>)}
