import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import OpenRoute from './Components/Auth/OpenRoute';
import Navbar from './Components/Common/Navbar';
import About from "./Pages/About";
import Products from "./Components/Homepage/Product";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<OpenRoute><SignIn/></OpenRoute>}/>
        <Route path="/login" element={<OpenRoute><Login/></OpenRoute>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
