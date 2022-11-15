
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import {UserContext} from "./Components/context";
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from "./Components/createaccount";
import Login from './Components/login';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import Balance from './Components/balance';
import AllData from './Components/alldata';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{id: 0, name:'Mit',email:'Mitsananikone@gmail.com',password:'secret',balance:1000}]}}>
        <Link to="/"></Link>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createaccount/" element={<CreateAccount/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/balance/" element={<Balance/>} />
            <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;