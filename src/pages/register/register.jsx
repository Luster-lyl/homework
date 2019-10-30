import React, {Component} from 'react'
import axios from "axios"

import {GlobalStyle} from "../../globalStyle"


import Background from "../../assets/imgs/index-bg.png"

import styles from "./register.module.css"


import store from '../../store/index'


var frontBg = {
    width:"100%",
    height:"1080px",
    backgroundImage:`url(${Background})`
};





class Register extends Component{
    componentDidMount(){
        axios.get('http://www.ljhhhx.com:8080/Test01/Regiter?usrName=lyx&&usrMail=1111&&usrPsw=7777').then((res)=>{
            console.log(res)
        })
    }
    constructor(props){
        super(props)  
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
         store.subscribe(this.storeChange)
    }
    render(){
        return (
        <div style={frontBg} className={styles.frontBg}>
            <GlobalStyle/>
            <div className={styles.centerContent}>
            <div  className={styles.logoIcon} >
                <img src={require('../../assets/imgs/logo.png')}/>
            </div>
        
            <div className={styles.registerBg} style={{backgroundImage: "url(" + require("../../assets/imgs/register.png") + ")"}}>
                    <p><span className={styles.loginBtn}>登录</span><span className={styles.registerBtn}>注册</span></p>
                    <div className={styles.registerForm}>
                        <span className={styles.registerName}>姓名<input type="text" onChange={this.changeInputValue}></input></span>
                
                        <span className={styles.password}>密码<input type="password"></input></span>
                        <span className={styles.password}>确认密码<input type="password"></input></span>
                        <span className={styles.college}>学院<input type="text"></input></span>
                        <span className={styles.registerAccount}>邮箱/手机号<input type="text"></input></span>
                        <span className={styles.checkWord}>验证码<input type="text"></input></span>
                  
                    </div>
                    <button type="button" className={styles.conformBtn} 
                    onClick={this.clickBtn}
                    style={{background: "url(" + require("../../assets/imgs/确定大按键 .png") + ")no-repeat"}}>确定</button>
            </div>

            </div>
           
        </div>
        )
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = { type:'registerSubmit'}
        store.dispatch(action)
     }
    changeInputValue(e){
        console.log(e.target.value)
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)

    

    }
}
export default Register;