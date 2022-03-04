import React, { useEffect, useState } from "react";
import './ConverterPanel.scss'
import Input from "../form-items/input/Input";
import Select from "../form-items/select/Select";
import swap from '../../assets/images/arrow.png';
import Button from '../form-items/buttons/Button';
import CurrencyExchangeService from '../../api/currency-exchange-service';

export default function ConverterPanel({ data, showMore }) {
    const [currencyList, setCurrencyList] = useState(['EUR', 'USD']);
    const [amount, setAmount] = useState(25);
    const [fromCur, setFromCur] = useState('EUR');
    const [toCur, setToCur] = useState('USD');
    const [rate, setRate] = useState(1);
    const [result, setResult] = useState(null);
    const curExService = new CurrencyExchangeService();

    useEffect(() => {
        setFromCur(data.from);
        setToCur(data.to);
        curExService.getAllCurrencies(fromCur).then(res => {
            let currencyList = Object.keys(res.results);
            currencyList.push(fromCur);
            setCurrencyList(currencyList);
        });
    }, [data]);

    useEffect(() => {
        curExService.getRate(fromCur, toCur).then((res) => {
            setRate(res.result[Object.keys(res.result)]);
        });
        setResult(null);
    }, [amount, fromCur, toCur]);

    return (
        <div className="mt-2 p-2">
            <h2 className="title">
                {data ? data[0] : 'Currency Exchanger'}
            </h2>
            <form className="mt-3" onSubmit={(e) => {
                    e.preventDefault();
                    setResult((amount * rate).toFixed(4))
                }
            }>
                <div className="d-flex">
                    <div className="flex-fill pr-3">
                        <Input
                            type={'number'}
                            value={amount}
                            setValue={setAmount}
                            title={'Amount'}
                        />
                        <div className="mt-2 text-center unit-rate">
                            1.00 {fromCur} = {rate.toFixed(4)} {toCur}
                        </div>
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex">
                            <div className="flex-fill">
                                <Select
                                    title={'From Currency'}
                                    value={fromCur}
                                    setValue={setFromCur}
                                    data={currencyList}
                                />
                            </div>
                            <div className="flex-fill align-items-stretch img-center-box">
                                <img src={swap} className="img-middle" alt="arrow" />
                            </div>
                            <div className="flex-fill">
                                <Select
                                    title={'To Currency'}
                                    value={toCur}
                                    setValue={setToCur}
                                    data={currencyList}
                                />
                            </div>
                        </div>
                        <div className="flex-fill mt-2">
                            <Button type='submit' title='Convert' />
                        </div>
                        <div className="d-flex mt-2">
                            <div className="flex-fill result">{result ? `${result} ${toCur}` : 'Not calculated'}</div>
                            {!showMore ? '' : <div className="flex-fill pl-2 bt"><Button title={'More Details'} linkto={`details/${fromCur}_${toCur}`} /></div>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}