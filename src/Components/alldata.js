import React from 'react';
import {UserContext, Table} from "./context";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from "react-bootstrap-table-next";


function AllData(){
    const ctx = React.useContext(UserContext);
    const currentUser = ctx.users.length-1;

    const addTableRow = (result) => {
      return (
        <tr key={result}>
          {/* <td>{result.id}</td> */}
          <td>{result.name}</td>
          <td>{result.email}</td>
          <td>{result.password}</td>
          {/* <td>{result.balance}</td> */}
        
        </tr>)
    }
  
    const createTable = (results) => {


      return (
        <table className="striped highlight ">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              {/* <th>Balance</th> */}
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              return addTableRow(result)
            })}
          </tbody>
        </table>
      )
    }
    console.log("ALL:  " + JSON.stringify(ctx.users))
      return (
      <Table
      txtcolor="black"
      header="All Data"


      body={ 
        <>
        {createTable(ctx.users)}
        
        </>
      // {JSON.stringify(ctx.users)}
        // <Table striped bordered hover>
        //   <thead>
        //     <tr>
        //       <th>ID</th>
        //       <th>Name</th>
        //       <th>Email</th>
        //       <th>Password</th>
        //       <th>Balance</th>
        //     </tr>
        //   </thead>
        // <tbody>
        //   <td> {id} </td>
        //   <td> {name} </td>
        //   <td> {email} </td>
        //   <td> {password} </td>
        //   <td> {balance} </td>
        // </tbody>
        // </Table>

       
    
      }       
    />    
    );
  };

export default AllData;