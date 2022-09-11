import React from "react";
import github from "./github.svg"
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

export default function Footer (){
    return(
        <footer className="footer">
       <img src={github} alt="github"/>
       <img src={instagram} alt="instagram" />
       <img src={facebook} alt="fb"/>
       <img src={twitter} alt="twitter "/>
        </footer>
    )
}