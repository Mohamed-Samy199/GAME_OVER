import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import gameImage from "../Assets/game.jpg"
import logo from "../Assets/logo.png"
import './Login.modules.scss'
import Joi from 'joi'

const Login = ({ saveUserData, userData }) => {
    let [user, setUser] = useState({
        'email': '',
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
        if (validationResponse.error) {
            setErrorList(validationResponse.error.details)
        } else {
            let { data } = await axios.post('https://sticky-note-fe.vercel.app/signin', user)
            if (data.message === "success") {
                localStorage.setItem('token', data.token)
                saveUserData()
                goToHome()
                toast(`Hello ${userData.first_name} ${userData.last_name}`)
            } else {
                setErrorMsg(data.message)
                toast.error(errorMsg)
            }
        }
    }

    let goToRegister = () => {
        navigate('/register')
    }
    let goToHome = () => {
        navigate('/')
    }

    let validateFormData = () => {
        let schema = Joi.object({
            email: Joi.string().required().email({ tlds: { allow: ["com", "net"] } }),
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
                    <div className='image d-flex align-items-center justify-content-center'>
                        <img src={logo} alt='logo' className='w-25' />
                    </div>
                    <h3 className='text-muted text-center pt-4 my-2'>Log in to GameOver</h3>
                    <form onSubmit={submitForm} className='px-lg-5'>
                        {
                            errorList.map((e, i) => (
                                <div key={i} className="alert alert-danger">{e.message}</div>
                            ))
                        }
                        <div className='input-data my-2 '>
                            <input type='email' onChange={getInputData} className='form-control my-2' name='email' placeholder='Email Address' />
                        </div>
                        <div className='input-data my-2'>
                            <input type='password' onChange={getInputData} className='form-control my-2' name='password' placeholder='Password' />
                        </div>
                        <button className='btn btn-secondary w-100'>{user.email !== '' && user.password !== '' ? (<i className='fas fa-spinner fa-spin'></i>) : ("Login")}</button>
                        <hr />
                        <p className='fs-6 text-center text-primary' onClick={goToRegister} style={{ cursor: "pointer" }}>Forgot Password?</p>
                        <p className='fs-6 text-center'>Not a member yet? <span onClick={goToRegister} style={{ cursor: "pointer" }} className='text-primary'>Create Account</span></p>
                    </form>
                </div>

            </div>
        </Fragment>
    )
}

export default Login

