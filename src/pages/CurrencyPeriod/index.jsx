/* eslint-disable array-callback-return */
/* eslint-disable no-negated-in-lhs */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Option from '../../components/Dropdown/option';
import currencyPeriod from '../../services/currencies/currencyPeriod'
import './style.scss';
import Grafico from '../../services/graphic/graphic'


const Currencies = (props) => {

    const [currency, setCurrency] = useState([]) 
    const [primarySelect, setPrimarySelect] = useState('USD')
    const [secundarySelect, setSecundarySelect] = useState('BRL') 
    const [input, setInput] = useState(30)

    const compositeCurrency = `${primarySelect}-${secundarySelect}`

    useEffect(() => {
        currencyPeriod(compositeCurrency, input)
            .then((res) => {
                console.log(res);
                setCurrency(res);             
            })
            .catch((err) => console.log(err));      
    }, [primarySelect, secundarySelect, input]); 
    const array = [['Teste','Down','High']]
 
    currency.map((altas,index) => {
        array.push([index  + 1 ,Number(altas.low),Number(altas.high)])
    })
    const handleCode = (e) => {
        setPrimarySelect(e.target.value);
    };

    const handleCodeIn = (e) => {
        setSecundarySelect(e.target.value);
    };
    return (
        <div>
            <h2 className="text-white font-bold text-center text-4xl mb-10">
                    {currency.map((altas) => 
                        (altas.name)
                    )}
            </h2> 
          <div className='flex flex-col md:flex-row gap-10 justify-center'> 
                <Dropdown selectCustomEvent={handleCode}>
                    <Option value="USD">Dólar</Option>
                    <Option value="EUR">Euro</Option>
                    <Option value="BTC">Bitcoin</Option>
                    <Option value="BRL">Real</Option>
                    <Option value="CAD">Dólar Canadense</Option>
                    <Option value="GBP">Libra Esterlina</Option>
                    <Option value="JPY">Iene Japonês</Option>
                    <Option value="ETH">Ethereum</Option>
                </Dropdown>
                <Dropdown selectCustomEvent={handleCodeIn}>
                    <Option value="BRL">Real</Option>
                    <Option value="USD">Dólar</Option>
                    <Option value="EUR">Euro</Option>
                    <Option value="BTC">Bitcoin</Option>
                    <Option value="CAD">Dólar Canadense</Option>
                    <Option value="GBP">Libra Esterlina</Option>
                    <Option value="JPY">Iene Japonês</Option>
                    <Option value="ETH">Ethereum</Option>
                </Dropdown>
            </div> 
                <input type="number"  min="0" max="50" className="input-data" onChange={(e) => setInput(e.target.value)}></input>
            <Grafico data={array}/> 
        </div>
    )
};

export default Currencies;
