import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import gameImage from "../Assets/game.jpg"
import './Register.modules.scss'
import Joi from 'joi'

const Register = () => {
    let [user, setUser] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'age': '',
        'password': '',
    })
    let [errorMsg, setErrorMsg] = useState('')
    let [errorList, setErrorList] = useState([])
    let navigate = useNavigate()
    let getInputData = (e) => {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
    }
    let submitForm = async (e) => {
        e.preventDefault()
        let validationResponse = validateFormData()
        console.log(validationResponse)
        if (validationResponse.error) {
            setErrorList(validationResponse.error.details)
        } else {
            let { data } = await axios.post('https://sticky-note-fe.vercel.app/signup', user)
            if (data.message === "success") {
                goToLogin()
            } else {
                setErrorMsg(data.message)
                toast.error(errorMsg)
            }
        }
    }
    let goToLogin = () => {
        navigate('/login')
    }
    let validateFormData = () => {
        let schema = Joi.object({
            first_name: Joi.string().alphanum().required().min(2).max(10),
            last_name: Joi.string().alphanum().required().min(2).max(10),
            email: Joi.string().required().email({ tlds: { allow: ["com", "net"] } }),
            age: Joi.number().required().min(18).max(80),
            password: Joi.string().required().pattern(new RegExp(/^[a-z][1-9]{3}$/))
        })
        return schema.validate(user, { abortEarly: false })
    }
    return (
        <Fragment>
            <div className='row mt-5'>
                <div className='col-md-6 pe-0'>
                    <img src={gameImage} alt="game" className='w-100' />
                </div>
                <div className='col-md-6 bg-grey'>
                    <h3 className='text-muted text-center pt-4 my-2'>Create My Account!</h3>
                    <form onSubmit={submitForm}>
                        {
                            errorList.map((e, i) => (
                                <div key={i} className="alert alert-danger">{e.message}</div>
                            ))
                        }
                        <div className='input-data my-2 d-flex'>
                            <input type='text' onChange={getInputData} className='form-control me-4 bg-dark border-dark text-light' name='first_name' placeholder='Frist Name' />
                            <input type='text' onChange={getInputData} className='form-control bg-dark border-dark text-light' name='last_name' placeholder='Last Name' />
                        </div>
                        <div className='input-data my-2'>
                            <input type='email' onChange={getInputData} className='form-control my-2 bg-dark border-dark text-light' name='email' placeholder='Email Address' />
                        </div>
                        <div className='input-data my-2'>
                            <input type='number' onChange={getInputData} className='form-control my-2 bg-dark border-dark text-light' name='age' placeholder='Age' />
                        </div>
                        <div className='input-data my-2'>
                            <input type='password' onChange={getInputData} className='form-control my-2 bg-dark border-dark text-light' name='password' placeholder='Password' />
                        </div>
                        <button className='btn btn-secondary w-100'>Create Account</button>
                        <p className='fs-6 my-2'>This site is protected eCAPTCHA and the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/privacy'>Terms of Service</a> apply.</p>
                        <hr />
                        <p className='fs-6 text-center'>Already a member? <span onClick={goToLogin} style={{ cursor: "pointer" }} className='text-primary'>Log In</span></p>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Register