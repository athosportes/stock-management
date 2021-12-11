import React from 'react';
import Login from '../components/Login'
import Deslogar from '../components/Deslogar'

import { Route, HashRouter, Routes } from 'react-router-dom'

export default function Rotas() {
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/exit" element={<Deslogar />} />
            </Routes>
        </HashRouter>
    )
}