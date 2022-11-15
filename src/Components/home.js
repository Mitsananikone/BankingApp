import React from "react";
import {Card} from "./context";


function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="../bank.png" className="img-fluid" alt="bank.png"/>)}
      />    
    );  
  }
  
export default Home;

// body={(<img src="../bank.png" className="img-fluid" alt="Responsive image"/>)}