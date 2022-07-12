import React, { useState } from 'react'
import './NewPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordStrength from './PasswordStrength'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



  

export default function NewPassword({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });

  const [ password, setPassword ] = useState('');



  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="n-login">


      <form onSubmit={submitHandler}>


        <div className="n-form-inner">


          <h2>Set new password</h2>
          <p>Your new password must be different from previously used password</p>


          <div className="rules">
            <h10><strong>Password Must:</strong></h10>
            <ul>
              <li className='regular'>Be between 12 and 32 characters</li>
              <li className='regular'>Include characters such as:</li>
              <li className="small">An uppercase letter</li>
              <li className="small">A lowercase letter</li>
              <li className="small">A number</li>
              <li className="small">A special character</li>
            </ul>
          </div>

          {/* <div className="n-form-group">
            <input type="password" name="password1" id="password1" placeholder='Password' className='input-css' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
            <div className="form-group mb-1"/>
            <div className="right"/>
          <input type="password"
            className='input-css'
            // className="form-control shadow-none "
            id="password1"
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          /> */}


          <div className="n-form-group">
          <input type="password"
            className='input-css'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
            <PasswordStrength password={password} className='password'/>
          </div>


          <div className="n-form-group">
            <input type="password" name="password2" placeholder='Confirm Password' className='input-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required/>
          </div>


          <div className="button">
            <Link to={"/new"}>
            <Button
              type="submit"
              className="n-form-button"
            > Reset Password
            </Button>
            </Link>
          </div>
          
          
        </div>

      </form>




    </div>
  )
} 