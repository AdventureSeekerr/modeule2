import React from "react";
import { useState } from 'react';

function About() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [emailError, setEmailError] = useState('email не может быть пустым')
    // const [passwordError, setPasswordError] = useState('пароль не может быть пустым')

        const [inputValue, setInputValue] = useState('')

        const handle = (e) => {
            setInputValue(e.target.value);
        }
    

    return (
        <>
            <form action="" className="form-registration">
                <h1 className="title">Регистрация</h1>
                 {/* {(setEmailError) && <div style={{ color: 'red' }}>{emailError}</div>} */}
                <input name="email" type="text" value={inputValue} onChange={handle} className="form-registration__input" placeholder="Введите email" />
                {/* {(setPasswordError) && <div style={{ color: 'red' }}>{passwordError}</div>} */}
                <input name="password" type="text"   className="form-registration__input" placeholder="Введите пароль" />
                <button type="submit" disabled={inputValue.trim() === ''}  className="form-registration__submit-buttom">Зарегестрироваться</button>
            </form>
        </>
    );
}
export default About;