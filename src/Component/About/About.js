import style from "./About.module.css";
import Navbar from "../navbar/Navbar";


let About =()=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={style.about}>
            <h3>Our Mission </h3>
            <h1>BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE* IN THE WORLD</h1>
            <p><i>*If you have a body, you are an athlete</i></p>
        </div>
    </>)
}

export default About;