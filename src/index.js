import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Register from "./pages/register/register"
import LogIn from "./pages/login/login"
import Main from "./pages/main/main"

import { GlobalStyle } from "./globalStyle"



ReactDOM.render((
    <div>
        <GlobalStyle />
        <BrowserRouter>
            <Route path="/register" component={Register} />
            <Route path="/login" component={LogIn} />
            <Route path='/main' component={Main} />
        </BrowserRouter>

    </div>
), document.getElementById('root'))