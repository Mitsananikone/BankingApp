import React, { useState }from "react";
import Button from 'react-bootstrap/Button';
// import '../App.css';
// import Table from "react-bootstrap-table-next";


console.log("useContext loaded")
const UserContext = React.createContext(
     {users:[{id: 0, name:'Mit',email:'Mitsananikone@gmail.com',password:'secret',balance:1000}]}
);
// const Context = React.createContext();

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  function ATM(props) {
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    return (
       <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h3 className="card-title">{props.title}<span className="card-balance">&emsp;{props.balance}</span></h3> )  }
          {/* {props.input && (<input type="input" className="form-control" id="submit">{props.input}</input>)} */}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
          {props.submit && (<Button id='Submit'>{props.status}</Button>)}
        </div>
      </div>      
    );
  }

  function Table(props) {
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    return (
      <div className={classes()} style={{maxWidth: "50VW"}}>
       <div className="card-header">{props.header}</div>
       <div className="card-body" >
         {/* {props.title && (<h5 className="card-title">{props.title}</h5>)} */}
         {/* {props.input && (<input type="input" className="form-control" id="submit">{props.input}</input>)} */}
         {props.body}
   
         
       </div>
     </div>      
   );
  }







export {UserContext, Card, ATM, Table};