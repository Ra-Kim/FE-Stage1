import React, {useState} from 'react'

const Contact = () => {

  const [data, setData] =  useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false
})

let disabled = data.agreement && data.firstName.length && data.email.length && data.message.length

function handleChange(event){
  const {value, type, name, checked} = event.target
  setData({
      ...data, [name]:  type === 'checkbox' ? checked : value
  })
}

  return (
    <div className = "contact-container">
      <div className='form-group'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className='form-container'>
          <form>
            <div className = "name-form-div">
              <div className = "form-item">
                <label for="fname">First name</label>
                <input 
                  type="text" 
                  id="fname" 
                  name="firstName"
                  onChange={handleChange} 
                  placeholder="Enter your first name" 
                  value = {data.firstName}
                  required
                  />
              </div>
              <div className = "form-item">
                <label for="lname">Last Name</label>
                <input 
                  type="text" 
                  id="lname" 
                  name="lastName" 
                  onChange={handleChange} 
                  placeholder="Enter your last name" 
                  value = {data.lastName}
                  />
              </div>
            </div>
            <div className = "form-item">
                <label for="email">Email</label>
                <input 
                  type="text" 
                  id="email" 
                  name="email" 
                  onChange={handleChange} 
                  placeholder="yourname@email.com" 
                  value = {data.email}
                  required
                  />
              </div>
              <div className='form-item'>
                <label htmlFor = "other">Message</label>
                <textarea 
                  name="message" 
                  id="other"
                  value = {data.message}
                  onChange ={handleChange}
                  // className='form-input'
                  placeholder="Send me a message and I'll reply you as soon as possible.."
                  autoComplete="off"
                  required
               />
               </div>
               <div className='form-item' id = "checkbox">
                <input 
                  type="checkbox" 
                  id="agreement" 
                  name="agreement" 
                  checked={data.agreement} 
                  onChange= {handleChange} 
                  required/>
                <label for="agreement">You agree to submitting your data to Stealth who may contact you</label>
               </div>
              <div className='form-item' id='button-div'>
                <input 
                  type= "submit" 
                  value ="Send message" 
                  className = "button" 
                  disabled={disabled} 
                  style = {{
                      background: (!disabled) ? "#B2DDFF" : "#1570EF"
                    }}
                />
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact