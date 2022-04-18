
import axios from 'axios';

const currencyPeriod = (currency , days ) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://economia.awesomeapi.com.br/json/${currency}/${days}`)
            .then((res) => {
                res && resolve(res.data);    
            })
            .catch((err) => reject(err));
    });
};
export default currencyPeriod;