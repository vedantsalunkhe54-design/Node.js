import React,{useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useAuth } from '../hooks/use.auth';

const {loading, handleRegister}= useAuth()


const handleSubmit = async (e) => {
  e.preventDefault()
  await handleRegister(username, email, password)
  navigate("/")
}

const Register = () => {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
  };

  return (
     <main>
      <div className="form-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        
        <div className="input-group">

          <label htmlFor="username">Username</label>
          <input
            onChange={(e)=> {setUsername(e.target.value)}}
          type="text" name="username" id="username" placeholder='Enter your username' />

        </div>

        <div className="input-group">

          <label htmlFor="email">Email</label>
          <input
          onChange={(e)=> {setEmail(e.target.value)}}
          type="email" name="email" id="email" placeholder='Enter your email' />

        </div>

        <div className="input-group">

          <label htmlFor="password">Password</label>
          <input
          onChange={(e)=> {setPassword(e.target.value)}}
          type="password" name="password" id="password" placeholder='Enter your password' />

        </div>

        <button className='button primary-button' type='submit'>Register</button>
        
        
        
         </form>

         <p>Already have an account? <Link to ="/Login">Login</Link></p>
      </div>
    </main>
  );
};

export default Register;