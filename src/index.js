import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from "react-router-dom"


import Register from "./pages/register/register"
import LogIn from "./pages/login/login"
import  Main from "./pages/main/main"



ReactDOM.render((
        <HashRouter>
        <Switch>
            <Route path="/register" component={Register}></Route>
         <Route path="/login" component={LogIn}></Route>
         <Route component={Main}></Route>
        </Switch>
    </HashRouter>
),document.getElementById('root'))