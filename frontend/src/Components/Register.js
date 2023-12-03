import React,{useState} from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name , setName] =useState('')
    const [email,setEmail] =useState('')
    const [password , setPassword] =useState('')
    const [error,setError] =useState('')
   const navigate = useNavigate();
    const Registraion = async (e) =>{
e.preventDefault()  

                    try {
                        const data = await axios.post('http://localhost:5000/signup',{name,email,password})
                       
                     if(data.status === 200){
                      localStorage.setItem("auth",JSON.stringify(data.data)) 
                        console.log(data)
                        navigate('/')
                     }
              
                
                    } catch (error) {
                        setError(error.response.data.error)
                      
                    }
    }
  return (
    <Layout>
 <form className='container col-sm-6 mt-4'>
    
 <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"  onChange={((e)=>{setName(e.target.value)})}/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={((e)=>{setEmail(e.target.value)})}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={((e)=>{setPassword(e.target.value)})} />
  </div>
  {error && <p className='registration-error'>{error}</p>}
  <button type="submit" className="btn btn-primary" onClick={Registraion}>Submit</button>
</form>

    </Layout>
  )
}

export default Register