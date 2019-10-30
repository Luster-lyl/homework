import React, {Component} from 'react'
import {GlobalStyle} from "../../globalStyle"


import Background from "../../assets/imgs/index-bg.png"
import styles from "./register.module.css"


var frontBg = {
    width:"100%",
    height:"1080px",
    backgroundImage:`url(${Background})`
};





class Register extends Component{
    render(){
        return (
        <div style={frontBg}>
            <GlobalStyle/>
            <img className={styles.logoIcon} src={require('../../assets/imgs/logo.png')}/>
            <div className={styles.registerBg} className={styles.registerBg}>
                    <p>注册</p>
                    <div className={styles.registerForm}>
                        <span className={styles.registerAccount}>邮箱/手机号<input type="text"></input></span>
                        <span className={styles.password}>密&#12288;&#12288;&#12288;&nbsp;码<input type="text"></input></span>
                    </div>
            </div>
        </div>
        )
    }
}
export default Register;