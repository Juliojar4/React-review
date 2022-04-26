
import axios from 'axios';
function logout() {
// eslint-disable-next-line react-hooks/rules-of-hooks
    
    localStorage.removeItem('token')
    axios.defaults.headers.Authorization = undefined
}

export default logout