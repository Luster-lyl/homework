import React, {Component} from 'react'

import { Form, Icon, Input, Button, Checkbox,Layout } from 'antd'

import Background from "../../assets/imgs/index-bg.png"

import './login.css'

import {GlobalStyle} from "../../globalStyle"
var loginBg = {
    width:"100%",
    height:"1080px",
    backgroundImage:`url(${Background})`
};

class LogIn extends Component{
    render(){
        return (
        <div>
            <GlobalStyle/>
            <div style={loginBg} className="loginBg">
                    <p>登录</p>
                    <div className="loginForm">
                        <span className="loginAccount">邮箱/手机号<input type="text"></input></span>
                        <span className="password">密&#12288;&#12288;&#12288;&nbsp;码<input type="text"></input></span>
                    </div>
            </div>
        </div>
        )
    }
}
export default LogIn;