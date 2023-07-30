import React, {Component, useState} from "react";
import '../styles/App.css';

function isAlphanumericWithSpace(str) {
  // Regular expression to match alphanumeric characters and spaces
  const alphanumericWithSpaceRegex = /^[a-zA-Z0-9 ]+$/;
  
  // Test if the string matches the regular expression
  return alphanumericWithSpaceRegex.test(str);
}

function isNumeric(str) {
  // Regular expression to match numbers
  const numericRegex = /^[0-9]+$/;
  
  // Test if the string matches the regular expression
  return numericRegex.test(str);
}

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('male')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage]= useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name, email, gender, phoneNumber, password);
    if(name == "" || email == "" || gender == "" || phoneNumber == "" || password == ""){
      setMessage('All fields are mandatory')
      return
    }
    if(!isAlphanumericWithSpace(name)){
      setMessage("Name is not alphanumeric")
      return
    }

    if(!email.includes('@')){
      setMessage("Email must contain @")
      return
    }
    if(!isNumeric(phoneNumber)){
      setMessage("Phone Number must contain only numbers")
      return
    }
    if(password.length < 6){
      setMessage("Password must contain atleast 6 letters")
      return
    }
    setMessage(`Hello ${email.split('@')[0]}`)
  }
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" data-testid = 'name' value={name} onChange={({target})=>setName(target.value)}/>
        <input type="text" name="email" data-testid = 'email' value={email} onChange={({target})=>setEmail(target.value)}/>
        <select name="gender" data-testid = 'gender' value={gender} onChange={({target})=>setGender(target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="phoneNumber" data-testid = 'phoneNumber' value={phoneNumber} onChange={({target})=>setPhoneNumber(target.value)}/>
        <input type="password" name="password" data-testid = 'password' value={password} onChange={({target})=>setPassword(target.value)}/>
        <input type="submit" name="submit" data-testid = 'submit'/>
      </form>
      <div>{message}</div>
    </div>
  )
}


export default App;
