import React from 'react';
import zxcvbn from 'zxcvbn';
import './PasswordStrength.css'

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100 / 4;
  console.log(testResult)
  const createPassLabel = () => {
    switch (testResult.score) {

      case 0:
        return 'Too Short';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#750103';
      case 1:
        return '#f0484b';
      case 2:
        return '#eed80f';
      case 3:
        return '#11a7e7';
      case 4:
        return '#00d823';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })



  return (
    <>
      <div className="Password-Strength" style={{ padding: 5, position: 'relative', left: '40px' }}>
        <strong>Password Strength: </strong>{createPassLabel()}
      </div>

      <div className="progress" style={{ position: 'relative', left: '40px', width: '300px', height: '5px', margin: 5 }} >
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>



    </>
  )
}

export default PasswordStrengthMeter

