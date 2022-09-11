 import React from 'react';


 export default function Header (){
return(
     <div className="Header--container">
       <img className="Header--img" src={require('./man2.jpg')} alt="man"/>
       <h2>Minuka hansaja</h2>
       <p className='Title'>Software engineer</p>
       <p className="site">Minukahansaja.tech</p>
<div className="container">
       <div className="buttons">
        <a href='devminuka@gmail.com' className="btn btn-1" ><i class="fa-solid fa-envelope"></i>Email</a>
        <a href='https://www.linkedin.com/in/minuka-hansaja/' className="btn btn-2" ><i class="fa-brands fa-linkedin"></i>linkedin</a>
       </div>
</div>
     </div>
)
 }