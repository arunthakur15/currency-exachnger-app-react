import React from "react";
import logo from '../../assets/images/logo.png';
import Button from '../form-items/buttons/Button';
import './Header.module.scss';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="d-flex flex-row header">
            <div className="p-2 flex-grow-1">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className="p-2 flex-row d-flex">
                <div className="flex-fill mr-1">
                    <Button title={'EUR-USD Details'} linkto={`details/${'EUR_USD'}`} />
                </div>
                <div className="flex-fill">
                    <Button title={'EUR-GBP Details'} linkto={`details/${'EUR_GBP'}`} />
                </div>
            </div>
        </div>
    )
}