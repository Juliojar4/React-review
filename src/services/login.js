import axios from 'axios';

const ola = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:3001/user/teste`)
            .then((res) => {
                res && resolve(res);
            })
            .catch((err) => reject(err));
    });
}


export default ola;
