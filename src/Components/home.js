import React from "react";
import {Card} from "./context";

function Home(){

    return (
      <Card
      bgcolor="primary"
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the Bad Bank"
        text="You can move around using the navigation bar."
        body={
          <img id="bankPic" src="http://images.smartcapitalmind.com/modern-bank-building.jpg" alt='bankPic'/>

        }
      />    
    );  
  }
  
export default Home;

// body={(<img src="../bank.png" className="img-fluid" alt="Responsive image"/>)}
