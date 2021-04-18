import React  ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './navBar.css';

import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'

import {getProfile} from '../../JS/actions/userActions'


const Navbar = ({logout,user}) => {

     const isAuth  = useSelector((state) => state.userReducers.isAuth);
    
     

        
    return isAuth?
        
        
               ( <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> 
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">

                            <li className="nav-item active nav-link">
                             
                              SinJim </li>

                            <li className="nav-item">        
                             <Link to="/Home" className="nav-link"> 
                               Home </Link> </li>
  
                               <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> 
                               { (user.isAdmin===true) ? "Admin" : user.userName }  </a>
        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href={user.isAdmin === false ? "/MyProfile" : "/Dashboard"}> { (user.isAdmin===true) ? "DASHBOARD" : "My Profile" } </a></li>
          <li><button className="dropdown-item" onClick= {logout} > Logout</button></li>
          <li>
          </li></ul></li>
                            
                             {/* <li className="nav-item dropdown">       
                             <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> 
                             { (user.isAdmin===true) ? "DASHBOARD" : "My Profile" }  </a>
                            
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li> <Link  to= {user.isAdmin === false ? "/MyProfile" : "/Dashboard"}  className="dropdown-item" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> 
                             { (user.isAdmin===true) ? "DASHBOARD" : user.userName }  </Link></li>
                            
                             <li> <Link  onClick= {logout}  className="dropdown-item"> 
                             Logout</Link></li>
                               </ul> 
                               </li>                       */}
                       
                           

                                                 
                       
                        </ul>
                    </div>
                </nav>       
      
    ):
    (<nav className="navbar navbar-expand-sm bg-dark navbar-dark"> 
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav">

            <li className="nav-item active nav-link">
             
              SinJim </li>

            <li className="nav-item">        
             <Link to="/Home" className="nav-link"> 
               Home </Link> </li>

            
           
              <li className="nav-item"> 
              <Link  to='/Login' className="nav-link"> 
                Login </Link> </li> 
            
              <li className="nav-item">       
              <Link  to= { "/Signup" } className="nav-link"> 
              Signup  </Link> </li>                      
             


                                 
       
        </ul>
    </div>
</nav>       

)
     
}

export default Navbar
