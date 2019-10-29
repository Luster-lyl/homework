import React, {Component} from 'react'

import { Form, Icon, Input, Button, Checkbox,Layout } from 'antd'

import './login.css';

var loginbg = {
    width:"100%",
    height:"1080px"
};

const { Header, Footer, Sider, Content } = Layout
class LogIn extends Component{
    render(){
        return (
            <div style={loginbg} className="loginBg">
                <Layout>
                <Header></Header>
                <Content>
                    <img src={require("../../assets/imgs/index-bg.png")}></img>
                    <p>登录</p>
                    <div className="loginForm">
                        <span className="loginAccount">邮箱/手机号<input type="text"></input></span>
                        <span className="password">密&#12288;&#12288;&#12288;&nbsp;码<input type="text"></input></span>
                    </div>
                </Content>
                 <Footer></Footer>
                </Layout>
            </div>
        )
    }
}
export default LogIn;