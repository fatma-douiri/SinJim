import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getAllUsers,banUser} from '../../JS/actions/userActions'
import User from '../User/User'

const ListUsers = () => {

    const allUsers  = useSelector((state) => state.userReducers.allUsers);
 
    

    const dispatch=useDispatch()
    useEffect (() => {
    dispatch(getAllUsers())
    
       }, []);

    // const [idBan,setIdBan]=useState("")

    // const ban=({id})=>{
    //     dispatch(banUser({id}))
    // }

//console.log("listUsers",idBan.toString())

    return (
        <div> 

        
        {/* <input name="idBan" type="text" placeholder="Id User" onChange={(e)=>{setIdBan(e.target.value);console.log("listUsers",idBan)}}/> */}

       

             <div>
             {allUsers.map((user, i) => (
             <div >                  
               <button onClick= {()=> dispatch(banUser(user._id))}> Ban </button>  
              <User id={user._id} user={user} key={i} /> 
            </div>
           )
           )}</div>
        </div>
    )
}

export default ListUsers
