import "./Hero.css";
import Navbar from "../navbar/Navbar";


let Hero =()=>{
    return(
        <>
        <Navbar></Navbar>
    <div className="box">

    <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="detail">
        YOUR FEET DESERVE BEST AND WE ARE HERE FOR HELP YOU WITH YOUR SHOES.YOUR FEET DESERVE BEST AND WE ARE HERE FOR HELP YOU WITH YOUR SHOES.
        </p>
        <div className="btnbox">
            <button> SHOP NOW</button>
            <button> CATAGORY</button>
        </div>
        <p>ALSO AVAILABLE ON</p>
        <div style={{display:"flex", gap:"30px"}}>
            <img src="amazon.jfif"  alt="logo" style={{width:"40px",height:"40px"}}></img>
            <img src="flipkart.jfif" alt="logo" style={{width:"40px",height:"40px"}}></img>

        </div>
    </div>
    <div className="right">
        <img src="brand.jpg" alt="brand_image"></img>
    </div>


    </div>
    </>)
}

export default Hero;