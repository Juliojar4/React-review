import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Option from '../../components/Dropdown/option';
import getCurrency from '../../services/currencies/currencies';

const Currencies = (props) => {
    const [currency, setCurrency] = useState({});
    const [code, setCode] = useState('USD')
    const [codeIn, setCodeIn] = useState('BRL')

    useEffect(() => {
        getCurrency(code, codeIn)
            .then((res) => {
                setCurrency(res);
            })
            .catch((err) => console.log(err));
    }, [code, codeIn]);

    const handleCode = (e) => {
        setCode(e.target.value);
    };

    const handleCodeIn = (e) => {
        setCodeIn(e.target.value);
    };
    
    return (
        <>
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
                <br />
                <p className="text-white font-bold text-center text-3xl">
                    {currency.name}
                </p>
                <br />
                <span className="flex justify-center items-end text-white font-bold text-center">
                    <p className="text-3xl">Compra:&nbsp;</p>
                    <p className="text-4xl">{Number(currency.bid).toFixed(3).replace('.', ',')}</p>
                </span>
                <span className="flex justify-center items-end text-white font-bold text-center">
                    <p className="text-3xl">Venda:&nbsp;</p>
                    <p className="text-4xl">{Number(currency.ask).toFixed(3).replace('.', ',')}</p>
                    </span>
        </>
    );
};

export default Currencies;
