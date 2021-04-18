import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {votePoll,getPoll} from '../../JS/actions/pollActions'
import { Doughnut } from 'react-chartjs-2';
import { color } from './color'
import { Redirect } from "react-router-dom";
import './pollAnswer.css'
import {Link} from 'react-router-dom'
import PollVote from '../PollVote/PollVote'



const PollAnswer = ({el,id}) => {

// const pollVoted  = useSelector((state) => state.pollReducers.pollVoted)
// const dispatch=useDispatch()

// useEffect (() => {
// dispatch(getPoll(id))

//    }, [pollVoted]);


  const user = useSelector((state) => state.userReducers.user);
  const isAuth  = useSelector((state) => state.userReducers.isAuth)
  
    
    
  // const [voted,setVoted]=useState(el.usersWhoVoted.map(userVoted=>userVoted._id).includes(`${user._id}`))
    const userVoted= el.usersWhoVoted.filter( userVoted => userVoted._id === user._id ).length; 
    console.log("userVotedlenght",userVoted) 

  
    
    
    const checkVote= userVoted > 0 ? true:false
    console.log("checkVote",checkVote)
   
   

   


    const [votes,setVotes]=useState(el.options.map( option=> Number(option.votes)))
    const totalVotes = el.options.map(option=> option.votes).reduce((a,b)=>a+b)
  
    const answers = 
    el.options.map((option,i) => 
        
      <div 
      className ="answer"   
      style= {{ background: option.votes=== 0 ? "White" : `linear-gradient(to right,#fec400 ${option.votes*100/totalVotes }%, White 10% ) `, opacity:'0.8' }}
          > 
         
    
           <span>  {`${option.option}   ${ option.votes === 0 ? "0": (option.votes*100/totalVotes).toFixed(0) } %` } </span>  
  
        </div>   
    
    )
   

  return (
    <div className="poll">
      
     
      <h3>{el.question}</h3>
     
      { answers }
      <span>{`Total votes :${totalVotes}`}  </span>
      <div className="footerPoll">      
      <Link >{`Category : ${el.category}`}
          </Link>
     
      <PollVote el={el} votes={votes} setVotes={setVotes} totalVotes={totalVotes}  
      checkVote={checkVote} isAuth={isAuth} />

      
      </div>
       
    </div>
  );
};


export default PollAnswer
