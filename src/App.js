import { useState } from 'react'
import axios from "axios"
import logo from './images/ps-logo.png'
import background from './images/background.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './components/LoginForm.css'
import ReCAPTCHA from "react-google-recaptcha";


function App() {
  const [emailId, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(false)
  const [success, setSuccess] = useState(false)


  const handleEmailId = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  const onChange = (value) => {
    console.log("Captcha value: ", value)
    // setVerified(true)
  }


  const handleApi = () => {
    axios.post('http://localhost:9092/token', {
      emailId: emailId,
      password: password

    })

      .then(result => {

        if (result.data.token) {
          console.log(result)
          console.log(result.data.token)
          localStorage.setItem('token', result.data.token)
          setVerified(true)
          console.log(result.config.data)
        }

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="login">
      <div className="col" id="left">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <img src={logo} alt="logo" height="35px" />
            <br /><br /><br />

            <h2>Login</h2>
            <p>Welcome! Please enter your details.</p>
            <br />

            <div className="form-group">
              <input
                type="email"
                name='email'
                id='email'
                value={emailId}
                onChange={handleEmailId}
                className='btn-css'
                placeholder='Email'
                required 
              />
            </div>

            {/* insert Error */}

            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePassword}
                className='btn-css'
                placeholder='Password'
                required
              />
            </div>

            <div className="g-recaptcha" data-sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL">
              <ReCAPTCHA
                sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL"
                onChange={onChange}
                data-type="image"
              />
            </div>

            <br />

            <div className="extra-info">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                &nbsp; Remember Me
              </div>
              <div className="forgot-password">
                <Link to={'/forgot'}>Forgot Password?</Link>

              </div>
            </div>

            <br />

            {(verified) ? (

              <div className="button">
                <Link to={"/dashboard"} disabled={!verified}>
                  <Button
                    onClick={handleApi}
                    type="submit"
                    // disabled={!verified}
                    className='form-button'
                  > Login</Button></Link>
                  
              </div>
            ) : (
              <div className="button">
                <Button
                  onClick={handleApi}
                  type="submit"
                  // disabled={!verified}
                  className='form-button'
                >Login</Button>
              </div>
            )}

          </div>
        </form>
      </div>

      <div className="col" id='right'>
        <div className="image">
          <img src={background} alt="bgimage" />
        </div>
      </div>

    </div>

  )
}

export default App;