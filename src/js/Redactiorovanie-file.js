import React from "react";
import SpisokFilovUser from "./Spisok-filov-user"
import { Link, Routes, Route } from "react-router-dom";
function RedactirovanieFiles() {
    return (
        <>
            <h1 className="title">редактирование файла</h1>
            <Link to="/spisokFilovUser">
                <button type="button">Назад</button>
            </Link>
            <Routes>
                <Route path="/spisokFilovUser" element={< SpisokFilovUser />}></Route>
            </Routes>
        </>
    );
}
export default RedactirovanieFiles;