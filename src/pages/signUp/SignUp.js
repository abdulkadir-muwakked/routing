import { useEffect, useRef, useState } from 'react'
import classes from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'
console.log(classes)
const SignUp = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const navigate = useNavigate()

    const register = async () => {
        const name = nameRef.current.value.trim()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const passwordConfirmation = passwordConfirmationRef.current.value
        if (!/^[A-Z][a-z]+ ([A-Z][a-z]+ ){0,2}([A-Z][a-z]+)$/.test(name)) {
            alert('Please enter a valid name')
            return
        }
        const response = await fetch(`${process.env.REACT_APP_API}/users/register`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        
        if (json.success) {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } else {
            window.alert(json.messages[0])
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 my-4">
                    <div className={classes.signup}>
                        <label htmlFor='name' className={`mb-2`} id={classes.label}>Name</label>
                        <input ref={nameRef} type='text' id='name' className='form-control mb-3' />

                        <label htmlFor='email' className='mb-2'>Email Address</label>
                        <input ref={emailRef} type='email' id='email' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2'>Password</label>
                        <input ref={passwordRef} type='password' id='password' className='form-control mb-3' />

                        <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                        <input ref={passwordConfirmationRef} type='password' id='password_confirmation' className='form-control mb-3' />

                        <input type='button' value='Register' className='btn btn-dark' onClick={register} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp