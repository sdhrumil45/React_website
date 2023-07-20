import { useState } from "react";
import "./Contact.css";
import Navbar from "../navbar/Navbar"


let Contact =()=>{

    let [name,setname] = useState(" please ");
    let [mail,setmail] = useState(" fill");
    let [num,setnum] = useState(" form");
    
    

    let submit =(event)=>{
        
        event.preventDefault();
        let name = setname(event.target[0].value);
        let mail = setmail(event.target[1].value);
        let num = setnum(event.target[2].value);

    }

    

    return(
        <>
        
        <Navbar></Navbar>
    < div className="con">
        
      <form onSubmit={submit}className="card">

        <div>
            <h2> CONTACT FORM</h2>
        </div>

        <div>
            <h3>{name} {mail} {num} </h3>
        </div>

        <div>
            <label htmlFor="name">NAME:</label>
            <br/>
            <input type="text" name="name"></input>
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" name="email"></input>
        </div>

        <div>
            <label htmlFor="mo">Mo. Number:</label>
            <br/>
            <input type="tel" name="mo"></input>
        </div>

        <button type="submit"> SUBMIT </button>

      </form>
    
    </div>
    </>)
}

export default Contact;