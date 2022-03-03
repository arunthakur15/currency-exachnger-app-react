import React, { useEffect, useState } from "react";
import './ConverterPanel.module.scss'
import Input from "../form-items/input/Input";
import Select from "../form-items/select/Select";
import swap from '../../assets/images/arrow.png';
import Button from "../form-items/buttons/Button";

export default function ConverterPanel({ data }) {
    let dataToSelect = data ? data : ['EUR','USD','GBP'];
    const setToVal = dataToSelect.length > 2 ? 'USD' : dataToSelect[1];
    const [amount, setAmount] = useState(25);
    const [fromCur, setFromCur] = useState(dataToSelect[0]);
    const [toCur, setToCur] = useState(setToVal);
    useEffect(() => {
        setToCur(setToVal);
    },[setToVal]);
    return (
        <div className="mt-2 p-2">
            <h2 className="title">
                {data ? data[0] : 'Currency Exchanger'}
            </h2>
            <form className="mt-3">
                <div className="d-flex">
                    <div className="flex-fill pr-3">
                        <Input
                            type={'number'}
                            value={amount}
                            setValue={setAmount}
                            title={'Amount'}
                        />
                        <div className="mt-2 text-center unit-rate">
                            1.00 {fromCur} = XX.XX {toCur}
                        </div>
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex">
                            <div className="flex-fill">
                                <Select
                                    title={'From Currency'}
                                    value={fromCur}
                                    setValue={setFromCur}
                                    data={dataToSelect}
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
                                    data={dataToSelect}
                                />
                            </div>
                        </div>
                        <div className="flex-fill mt-2">
                            <Button title='Convert' />
                        </div>
                        <div className="d-flex mt-2">
                            <div className="flex-fill result">{amount * 1} {toCur}</div>
                            {data ? '' : <div className="flex-fill pl-2 bt"><Button title={'More Details'} linkto={`details/${fromCur}_${toCur}`}/></div>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}