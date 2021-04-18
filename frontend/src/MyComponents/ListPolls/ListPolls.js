import React ,{useEffect,useState}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getAllPolls,getPoll} from '../../JS/actions/pollActions'
import PollAnswer from '../PollAnswer/PollAnswer'

import './listPolls.css'



const ListPolls = () => {
    
const allPolls  = useSelector((state) => state.pollReducers.allPolls);
const [myCategory,SetMyCategory]=useState("All Categories")



  
 const categories = [...new Set(allPolls.map(el=>el.category))] 
 console.log("listPolls: categories",categories) 



 const handleChange=(e)=>{
       const selectedCategory=e.target.value
       SetMyCategory(selectedCategory)
 }
 

    return (
    <div className="listPolls">
<   div claassName="container p-5" style={{marginRight:"25%"}}>
      <select className="custom-select" onChange={handleChange}>
      <option value="All Categories" selected>All Categories</option>
           { categories.map((category)=>(<option value={category}  >{category}</option>))}
      </select>

      

</div>
           {allPolls
             .filter(el => myCategory ==="All Categories" ? el : el.category === myCategory )
             .map((el,i) => (             
                 <PollAnswer id={el._id} el={el} key={i}/>
            
           )
           )}
             
        
        </div>

        )}

export default ListPolls

