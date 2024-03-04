import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SpisokFilovUser from "./Spisok-filov-user"
import { useState } from 'react';

function SignIn() {
    const [inputEmail, setInputValue] = useState("");
    const [inputPass, setInputPass] = useState("")
    const [emailError, setEmailError] = useState(' ');
    const [passError, setPassError] = useState('');
    const email = "aaaaa";
    const pass = "aaaaa";

    const emailValue = (e) => {
        setInputValue(e.target.value)
        if (e.target.value !== email) {
            setEmailError('Неверный email')
        } else {
            setEmailError('')
        }
    }
    const passValue = (e) => {
        setInputPass(e.target.value)
        
        if (e.target.value !== pass) {
            setPassError('Неверный пароль')
        } else if (e.target.value == pass) {
            setPassError('')
        }  
    }
    const disBut = () => {
        return inputEmail != email || inputPass != pass;
    }

    return (
        <>
            <form action="" className="form-registration">
                <h1 className="title">Вход</h1>
                {(emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input type="text" className="input-style" value={inputEmail} onChange={emailValue} placeholder="Введите email" />
                {(passError) && <div style={{ color: 'red' }}>{passError}</div>}
                <input type="text" className="input-style" value={inputPass} onChange={passValue} placeholder="Введите пароль" />
                <Link to="/spisokFilovUser">
                    <button disabled={disBut()} type="submit">Вход</button>
                </Link>
            </form>
            <Routes>
                <Route path="/spisokFilovUser" element={<SpisokFilovUser />}></Route>
            </Routes>
        </>
    );
}
export default SignIn;