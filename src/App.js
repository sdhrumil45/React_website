
import Hero from "./Component/Hero/Hero";
import Contact from "./Component/Contact/Contact";
import Errorpage from "./Component/Errorpage/Errorpage";

import "./App.css"
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";

let App = () =>{
     
    return( 
    <div className="body">
        <Routes>
            <Route path="/"  element={<Hero/>} />
            <Route path="contact"  element={<Contact/>} />
            <Route path="about"  element={<About/>} />
            <Route  path="*" element={<Errorpage/>} />
        </Routes>

        
        
    </div>);
}

export default App;