import React, { useEffect, useState } from 'react';
import CurrencyExchangeService from '../../api/currency-exchange-service';
import ConverterPanel from '../converter-panel/ConverterPanel';
import './Home.scss';

export default function Home() {
    const [popularCurrencies, setPopCur] = useState([{name: 'USD'}, {name: 'EUR'}, {name: 'JPY'}, {name: 'GBP'}, {name: 'AUD'}, {name: 'CAD'}, {name: 'CHF'}, {name: 'CNY'}, {name: 'SEK'}]);
    const [convertData, setConvertData] = useState({
        amount: null,
        fromCur: null
    });

    useEffect(() => {
        const curExService = new CurrencyExchangeService();
        convertData.fromCur && curExService.getMultiCurrencyRates(convertData.fromCur, popularCurrencies.map(data => data.name).join(','))
            .then(res => {
                let popData = [];
                Object.keys(res.results).map((data,i) => {
                    popData[i] = {name: data, rate: res.results[data]};
                });
                console.log(popData);
                setPopCur(popData);
            })

    }, [convertData]);

    return (
        <>
            <ConverterPanel data={{ from: 'EUR', to: 'USD' }} setConvertData={setConvertData} showMore={true} />
            <div className='d-flex grid-container'>
                {popularCurrencies[0].rate ? popularCurrencies.map((cur, i) => cur.rate && <div className='flex-full grid-col' key={i}>{(cur.rate*convertData.amount).toFixed(4)} {cur.name}</div>) : <h4>Loading...</h4>}
            </div>
        </>
    )

}