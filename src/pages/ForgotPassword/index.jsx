import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import './styles.scss';

const SendEmail = () => {

    const [err, setErr] = useState('')
    const [send, setSend] = useState(false)
    const [form, setForm] = useState({
        email: '',
    });
       
    const handleValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/user/send',
            data: form
        })
                .then((response) => {
                    setSend(true)
                    console.log(response);
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
            {send &&
                <h1>Deu tudo certo</h1>
            }
            <h1 className='title-form'>forgot my password</h1>
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail'/>   
                    <input type="submit" value="Enviar" className='input-infotmation-submit' />
                </form>
            </div>
        </div>       
    );
};

 
export default SendEmail 
