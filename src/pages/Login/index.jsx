import axios from 'axios';
import {useState, useEffect} from 'react';
import './styles.scss';
 

const Login = (props) => {
    const [mess, setMess] = useState('',true)
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

   
    const handleSubmit = async (e) => {

        e.preventDefault();
       
        axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: form
            })
                .then((response) => {
                    setMess('Voce esta altenticado')
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error)
                    setMess('',false)
                })  
    };     
    return (

        <div className="container">   
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail'/>   
                    <input type="text" name="password" id="password" onChange={handleValue} className="information-input" placeholder='Password' />
                    <input type="submit" value="Enviar" className='input-infotmation-submit' />
                </form>
                {mess}
            </div>
        </div>       
    );
};

 
export default Login
