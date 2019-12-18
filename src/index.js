import React , { Component ,Fragment } from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter , Route } from "react-router-dom"
// , Switch
import Register from "./pages/register/register"
import LogIn from "./pages/login/login"
import Main from "./pages/main/main"
import Resource from './pages/resource/resource'

import { GlobalStyle } from "./globalStyle"



ReactDOM.render((
    <div>
        <div>
            <GlobalStyle />
            <BrowserRouter>
                <Route path="/register" component = {Register} />
                <Route path="/login" component = {LogIn} />
                <Route path='/main' component = {Main} />
                <Route path='/resource' component = {Resource} />
            </BrowserRouter>
        </div>
  </div>
), document.getElementById('root'));