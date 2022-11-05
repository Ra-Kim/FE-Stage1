import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const [data, setData] =  useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false
})

let disabled = data.agreement && data.firstName.length && data.email.length 

const {register, handleSubmit, formState : {errors}, } = useForm({
  mode: "onTouched"
})

const onSubmit = (data) => {
  console.log(data, "hey")
  setData({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false
})
}

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className = "name-form-div">
              <div className = "form-item">
                <label htmlFor="first_name">First name</label>
                <input 
                  type="text" 
                  id="first_name" 
                  name="firstName"
                  placeholder="Enter your first name" 
                  value = {data.firstName}
                  {...register("firstName", {required:false})}
                  onChange={handleChange} 
                  />
                  <p>{errors.firstName && "error message"}</p>
              </div>
              <div className = "form-item">
                <label htmlFor="last_name">Last Name</label>
                <input 
                  type="text" 
                  id="last_name" 
                  name="lastName" 
                  placeholder="Enter your last name" 
                  value = {data.lastName}
                  {...register("lastName", {required:false})}
                  onChange={handleChange} 
                  />
                  <p>{errors.lastName && "error message"}</p>
              </div>
            </div>
            <div className = "form-item">
                <label htmlFor="email">Email</label>
                <input 
                  type="text" 
                  id="email" 
                  name="email" 
                  placeholder="yourname@email.com" 
                  value = {data.email}
                  {...register("email", {required:false})}
                  onChange={handleChange} 
                  />
                  <p>{errors.email && "error message"}</p>
              </div>
              <div className='form-item'>
                <label htmlFor = "message">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  value = {data.message}
                  style = {{border: errors.message && "1px solid red"}}
                  // className='form-input'
                  placeholder="Send me a message and I'll reply you as soon as possible.."
                  autoComplete="off"
                  {...register("message", {required:true})}
                  onChange ={handleChange}
               />
                  <p>{errors.message && "Please enter a message"}</p>
               </div>
               <div className='form-item' id = "checkbox">
                <input 
                  type="checkbox" 
                  id="agreement" 
                  name="agreement" 
                  checked={data.agreement} 
                  {...register("agreement", {required:true})}
                  onChange= {handleChange} 
                />
                <label htmlFor="agreement">You agree to submitting your data to Stealth who may contact you</label>
               </div>
              <div className='form-item' id='button-div'>
                <button 
                  id='btn_submit'
                  type= "submit" 
                  className = "button" 
                  disabled={!disabled} 
                  style = {{
                      background: (!disabled) ? "#B2DDFF" : "#1570EF"
                    }}
                >
                  Send message
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact