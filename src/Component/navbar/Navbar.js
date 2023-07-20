
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";



let Navbar = () => {
    return <div className={style.container}>
     
        <div className={style.nike}>
            <img src='nike.jfif' alt ="nike" style={{width:"90px"}}></img>
        </div>

        <ul>
           <NavLink to ="/"><li>MENU</li></NavLink> 
           <NavLink to ="/"><li>LOCATION</li></NavLink>
            <NavLink to ="/about"><li>ABOUT</li></NavLink> 
            <NavLink to ="/contact"><li>CONTACT</li></NavLink>
        </ul>

        <button className={style.btn}>LOGIN</button>


    </div>
}

export default Navbar;