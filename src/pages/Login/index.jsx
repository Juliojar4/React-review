import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import './styles.scss';

const Login = (props) => {
   
    async function authUser(response) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
    }
     
    const [err,setErr] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
       
    const handleValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: form
            })
                .then((response) => {
                    authUser(response)
                })
                .catch((error) => {
                    setErr(error.response.data.message) 
                })  
    };     
    return (
        <div className="container"> 
            {err &&
                <h1 className='mensage-error'>{err}</h1>
            }    
            <h1 className='title-form'>Login</h1>
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail'/>   
                    <input type="password" name="password" id="password" onChange={handleValue} className="information-input" placeholder='Password' />
                    <a href="forgotPassword"><p>Forgot my password</p></a>
                    <input type="submit" value="Enviar" className='input-infotmation-submit'/>
                </form>
            </div>
        </div>       
    );
};

 
export default Login 
