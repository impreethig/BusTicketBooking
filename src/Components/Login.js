import React,{useState} from 'react';
// import { Paper } from '@mui/material';
import Top from './top';
import './login.css';


const Login=()=>{ 
  
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
  
	<div>
  
  <Top/>
  <div id='main'>
  <h1><center>Login</center></h1>
		<form action="" onSubmit={submitThis}> 
			<div> 
				<label htmlFor="email">Email</label>
				<input  style={{alignItems :'center'}}  
        
        type="text"  name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Password</label>
			<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
			<button id="btn" type="submit">Login</button>
		</form>
    </div>
	</div>
)
} 
export default Login ;   