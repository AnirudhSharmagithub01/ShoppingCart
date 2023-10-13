// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import OpenRoute from './Components/Auth/OpenRoute';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<OpenRoute><SignIn/></OpenRoute>}/>
        <Route path="/login" element={<OpenRoute><Login/></OpenRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
