import React from 'react'
import './LoginForm.css'
import { useState } from 'react'
function LoginForm() {
    const [login, setLogin] = useState(false);
    const clickClose = () => {
        setLogin(false);
    }
    const clickLogin = () => {
        setLogin(true);
    }
    return (
        <div className='blank'>
            {login && (
                <form action="#" className='loginForm'>
                    <button className='btn-close' onClick={clickClose}>x</button>
                    <input type="text" className='user' placeholder='Username' />
                    <input type="password" className='pwd' placeholder='Password' />
                    <button className='btn-login'>Login</button>
                </form>)}

            {!login && (
                <button className='btn-show' onClick={clickLogin}>Hiện thị Login Form</button>
            )}

        </div>
    )
}

export default LoginForm
