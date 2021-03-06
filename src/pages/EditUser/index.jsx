import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.scss';

const Register = (props) => {

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
        }
    }, [])
    

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
            method: 'patch',
            url: 'http://localhost:3001/user/edit',
            data: form,
            headers: {
                'Content-Type': 'application/json'
            }
        })  
            .then((response) => {
                console.log(response)
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
            <h1 className='title-form'>EditUser</h1>
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" onChange={handleValue} className="information-input" placeholder='Name'/>   
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail' /> 
                    <input type="text" name="cpf" id="cpf" onChange={handleValue} className="information-input" placeholder='CPF' />
                    <input type="text" name="password" id="password" onChange={handleValue} className="information-input" placeholder='Password' />
                    <input type="text" name="confirmPassword" id="confirmPassword" onChange={handleValue} className="information-input" placeholder='Confirm Password'/>
                    <input type="submit" value="Enviar" className='input-infotmation-submit' />
                </form>
            </div>
        </div>    
    );
};

 
export default Register;
