import React from "react";
import { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import SignIn from './Sign-in'

function About() {
 

    const [inputValue, setInputValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [repeatPassValue, setrepeatPassValue] = useState('');
    const   nullError = useState('Поле не должно быть пустым');
    const lengthError = useState('Длина слишком маленькая');
    const passerror = useState('Пароли не совпадают')


    const minLength = 5;

    const Settings = {
        className: !inputValue && inputValue.length < 5 ? 'form-registration__input' : 'valid-input'

    }

    const handle = (e) => {
        setInputValue(e.target.value);
    }
    const passwodrHandle = (e) => {
        setPassValue(e.target.value);
    }
    const repeatPassHandle = (e) => {
        setrepeatPassValue(e.target.value);
    }
    const validForm = () => {
        return setInputValue !== '' && inputValue.length
            >= 5 && setPassValue !== '' && passValue.length >= 5
            && passValue == repeatPassValue
    }
    

    return (
        <>
            <form action="" className="form-registration">
                <h1 className="title">Регистрация</h1>
                {(!inputValue) && <div style={{ color: 'red' }}>{nullError}</div>}
                {(inputValue.length < 5) && <div style={{ color: 'red' }}>{lengthError}</div>}
                <input name="email" type="text" className={Settings.className} value={inputValue} onChange={handle} placeholder="Введите email" />
                {(!passValue) && <div style={{ color: 'red' }}>{nullError}</div>}
                {(passValue.length < 5) && <div style={{ color: 'red' }}>{lengthError}</div>}
                <input name="password" type="text" value={passValue} onChange={passwodrHandle} className={Settings.className} placeholder="Введите пароль" />
                {(passValue != repeatPassValue) && <div style={{color: 'red'}}>{passerror}</div>}  
                <input name="password" type="text" value={repeatPassValue} onChange={repeatPassHandle} className={Settings.className} placeholder="Подтвердите пароль" />
                <Link to="/signIn">
                    < button type="button" disabled={!validForm()} className="form-registration__submit-buttom">Зарегестрироваться</button>
                </Link>
            </form >
            <Routes>
                <Route path="/signIn" element={< SignIn />}> </Route>
            </Routes>
        </>
    );
}
export default About;