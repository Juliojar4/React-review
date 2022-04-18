import axios from 'axios';
import {useState} from 'react';
import './style.scss';
import useFlashMessage from '../../hooks/useFlashMessage'; 

const Register = (props) => {
    const { setFlashMessage } = useFlashMessage()
    const [authenticated, setAuthenticated] = useState(false)

    async function authUser(response) {
        setAuthenticated(true)
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
        setFlashMessage(err)
    };
 
      
    return (

        <div className="container">   
            <div className="content">
                <form className="test-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" onChange={handleValue} className="information-input" placeholder='Name'/>   
                    <input type="text" name="email" id="email" onChange={handleValue} className="information-input" placeholder='E-mail' /> 
                    <input type="text" name="cpf" id="cpf" onChange={handleValue} className="information-input" placeholder='CPF' />
                    <input type="text" name="password" id="password" onChange={handleValue} className="information-input" placeholder='Password' />
                    <input type="submit" value="Enviar" className='input-infotmation-submit' />
                </form>
            </div>
        </div>    
    );
};

 
export default Register;
