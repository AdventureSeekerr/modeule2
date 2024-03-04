import React from "react";
import { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import RedactirovanieFiles from './Redactiorovanie-file'
function SpisokFilovUser() {
    const [isDivVisiable, setDivVisible] = useState([
        { id: 1, file: '../index.html', name: 'file-1' },
        { id: 2, file: '../index.html', name: 'file-2' },
        { id: 3, file: '../index.html', name: 'file-3' },
        { id: 4, file: '../index.html', name: 'file-4' }

    ]);
    const hideDiv = (id) => {
        setDivVisible(isDivVisiable.filter(item => item.id !== id));
    };


    return (
        <>
            <h1 className="title">Список файлов</h1>
            <div className="row">
                {isDivVisiable.map(item => (
                    <div className="collumn">
                        <div className="file-name">{item.name}</div>
                        <div className="file-id">id: {item.id}</div>
                        <button type="button" onClick={() => hideDiv(item.id)}>удалить</button>
                        <Link to='/redactirovanie'>
                            <button type="button">редактировать</button>
                        </Link>
                        <a href={item.file} download>скачать</a>
                    </div>
                ))
                }
            </div>
            <Routes>
                <Route path="/redactirovanie" element={< RedactirovanieFiles />}></Route>
            </Routes>
        </>
    );
}
export default SpisokFilovUser;