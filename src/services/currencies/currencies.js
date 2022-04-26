import axios from 'axios';

const getCurrency = (code, codeIn) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://economia.awesomeapi.com.br/last/${code}-${codeIn}`)
            .then((res) => {
                res && resolve(res.data[code + codeIn]);
            })
            .catch((err) => reject(err));
    });
};

export default getCurrency;
