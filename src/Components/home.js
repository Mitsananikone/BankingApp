import React from "react";
import {Card} from "./context";

console.log("home.js loaded");

function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<div> HOME PAGE </div>)}
      />    
    );  
  }
  
export default Home;

// body={(<img src="../bank.png" className="img-fluid" alt="Responsive image"/>)}