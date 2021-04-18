//import './App.css'
import {Route, Switch,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getProfile} from './JS/actions/userActions'
import {getAllPolls} from './JS/actions/pollActions'


import Navbar from './MyComponents/NavBar/NavBar'
import Register from './MyComponents/Register/Register'
import Login from './MyComponents/Login/Login'
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile'



import PrivateRoute from './MyComponents/PrivateRoute'



function App() {

  const isAuth  = useSelector((state) => state.userReducers.isAuth);
  const user    = useSelector((state) => state.userReducers.user);
  const newPoll  = useSelector((state) => state.pollReducers.newPoll)
  
  //const token    = useSelector((state) => state.userReducers.token);

   const token = localStorage.getItem('token');
  // const isToken = token ? true :false
 
  
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getProfile());
    
    dispatch(getAllPolls());
    

    
    
  }, [isAuth, newPoll]);

  const logout =()=>{
    localStorage.removeItem('token');
    dispatch(getProfile());
  }

   
  return  (

              <div className="App">
                <Navbar logout={logout} user={user} isAuth={isAuth}/>

                {/* <Route axact path='/'      render = {() =>  <Redirect to="/Home" /> }/> */}
                <Switch>
                
                  <Route exact path='/Home'      render = {() =>  <Home /> }/>
                  <Route exact path='/Signup'    render = {() =>  <Register/>} />
                  <Route exact path='/Login'    render = {() =>  <Login user={user}/>} />
                  
                  <PrivateRoute path={user.isAdmin ?"/Dashboard":"/MyProfile"}   token={token}  component= { user.isAdmin ? Dashboard : Profile }/>
                </Switch>
               
              </div>
  )
         
}

export default App;
