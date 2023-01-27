import React, {useState, useEffect} from 'react'

import Error from '../img/icon-error.svg'

const Form = () => {

    const [form,setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    

    })

    const [formErrors, setFormErrors] = useState({
        firstNameImg: "hidden",
        
        lastNameImg: "hidden",
       
        emailImg: "hidden",
       
        passwordImg: "hidden",
      
    })
    const [isSubmit, setIsSubmit] = useState(false)
   
    function handleChange(event) {
        const {name,value} = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
      
    }

    function submit(event) {
        event.preventDefault()
        setFormErrors(validate(form))
        setIsSubmit(true)
    }

    const validate = (form) => {
       const errors = {}
       if(form.firstName === ""){
        errors.firstNameImg = "error"
        errors.firstName = "First Name cannot be empty"
       }else{
        errors.firstNameImg = "hidden"
       }
       if(form.lastName === ""){
        errors.lastNameImg = "error"
        errors.lastName = "Last Name cannot be empty"
       }else{
        errors.lastNameImg = "hidden"
       }
       if(form.email === ""){
        errors.emailImg = "error"
        errors.email = "Email cannot be empty"
       }else{
        errors.emailImg = "hidden"
       }
       if(form.password === ""){
        errors.passwordImg = "error"
        errors.password = "Password cannot be empty"
       }else{
        errors.passwordImg = "hidden"
       }
       return errors
    } 

    useEffect(() => {
       if(Object.keys(formErrors === 0 && isSubmit)){
        console.log(form)
       } 
    },[formErrors])

  return (
    <div className='form'>
      <form onSubmit={submit}>
        <div className='field-group'>
      <input onChange={handleChange} value={form.firstName} name="firstName" type="text" placeholder='First Name' />
       <img className={formErrors.firstNameImg} src={Error} />
      <p className='error-text'>{formErrors.firstName}</p>
      </div>
      <div className='field-group'>
      <input onChange={handleChange} value={form.lastName} name="lastName" type="text"  placeholder='Last Name' />
      {!form.lastName && <img className={formErrors.lastNameImg} src={Error} />}
      {!form.lastName && <p className='error-text'>{formErrors.lastName}</p>}</div>
      <div className='field-group'>
      <input onChange={handleChange} value={form.email} name="email" type="email"  placeholder='Email Address' /> 
      {!form.email && <img className={formErrors.emailImg} src={Error} />}
      {!form.email && <p className='error-text'>{formErrors.email}</p>}</div>
      <div className='field-group'>
      <input onChange={handleChange} value={form.password} name="password" type="password"  placeholder='Password' />
      {!form.password && <img className={formErrors.passwordImg} src={Error} />}
      {!form.password && <p className='error-text'>{formErrors.password}</p>}</div>
    <button className='claim-btn'> CLAIM YOUR FREE TRIAL </button>
     </form>
      <div className='terms'><p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p></div>
  </div>
  )
}

export default Form