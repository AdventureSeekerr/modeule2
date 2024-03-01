import React from "react";

function SignIn() {
    return (
        <>
            <form action="" className="form-registration">
                <h1 className="title">Вход</h1>
                <input name="email" type="text" className={Settings.className} value={inputValue} onChange={handle} placeholder="Введите email" />
                <input name="password" type="password" value={passValue} onChange={passwodrHandle} className={Settings.className} placeholder="Введите пароль" />
            </form>
        </>
    );
}
export default SignIn;