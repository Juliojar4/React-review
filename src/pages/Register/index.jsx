import axios from 'axios';
import {useState} from 'react';
import './style.scss';

const Register = (props) => {
    
    async function authUser(response) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
    }

    const [err,setErr] = useState('')

    const [form, setForm] = useState({
        name: '',
        email: '',
        cpf: '',
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
            url: 'http://localhost:3001/user/register',
            data: form,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                authUser(response)
            })
            .catch((error) => {
                setErr(error.response.data.message)        
            });
            
    };
 
      
    return (
        <div className="container">  
            {err &&
                <h1 className='mensage-error'>{err}</h1>
            }        
            <h1 className='title-form'>Register</h1>
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" onChange={handleValue} className="information-input" placeholder='Name'/>   
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail' /> 
                    <input type="text" name="cpf" id="cpf" onChange={handleValue} className="information-input" placeholder='CPF' />
                    <input type="password" name="password" id="password" onChange={handleValue} className="information-input" placeholder='Password' />
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleValue} className="information-input" placeholder='confirmPassword' />
                    <input type="submit" value="Enviar" className='input-infotmation-submit' />
                </form>
            </div>
        </div>    
    );
};

 
export default Register;
