import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route path="/chat" component={Chat}/>
        </BrowserRouter>
    )
}

export default Rotas