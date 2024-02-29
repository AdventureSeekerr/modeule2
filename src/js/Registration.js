import React from "react";
import { useState } from 'react';

function About() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('email не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')

    return (
        <>
            <form action="" className="form-registration">
                <h1 className="title">Регистрация</h1>
                {(emailDirty && setEmailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <input name="email" type="text" className="form-registration__input" placeholder="Введите email" />
                {(passwordDirty && setPasswordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input name="password" type="text" className="form-registration__input" placeholder="Введите пароль" />

                <input name="RepeatPassword" type="text" className="form-registration__input" placeholder="Повторите пароль" />
                <button type="submit" className="form-registration__submit-buttom">Зарегестрироваться</button>
            </form>
        </>
    );
}
export default About;