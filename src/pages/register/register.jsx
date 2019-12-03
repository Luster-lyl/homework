import React, {Component} from 'react'
import axios from "axios"

import {GlobalStyle} from "../../globalStyle"
import {Link}from "react-router-dom"





import Background from "../../assets/imgs/index-bg.png"

import styles from "./register.module.css"


import store from '../../store/index'


var frontBg = {
    width:"100%",
    height:"1000px",
    backgroundImage:`url(${Background})`
};





class Register extends Component{
   // componentDidMount(){
     //   axios.get('http://www.ljhhhx.com:8080/Test01/Regiter?usrName=lyx&&usrMail=1111&&usrPsw=7777').then((res)=>{
       //     console.log(res)
        //})
   // }
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
            <div className={styles.listTitle}>
                <Link className={styles.loginBtn} to="../login"><span>登录</span></Link>
                <Link className={styles.registerBtn} to="../register"><span>注册</span></Link>
    
            </div>
            <div className={styles.options}>
            
           
                
                    <div className={styles.registerLine}><img src={require('../../assets/imgs/下划线 拷贝.png')}/></div>

        
             </div>
        
            <div class={styles.inputArea}>
                <div className={styles.inputItem}>
                    <span className={styles.inputTip}
                    >姓名</span>
                    <input onChange={this.changeInputValue}className={styles.inputBox} data-type="name"/>
                </div>
                <div className={styles.inputItem}>
                    <span className={styles.inputTip}>密码</span>
                    <input onChange={this.changeInputValue} className={styles.inputBox} data-type="password"/>
                </div>
                <div className={styles.inputItem}>
                    <span className={styles.inputTip}>邮箱</span>
                    <input onChange={this.changeInputValue} className={styles.inputBox} data-type="email"/>
                </div>
                <div className={styles.inputItem}>
            </div>


            </div>
            
            <div>
                <button type="button" 
                onClick={this.clickBtn}
                title="submit" 
                className={styles.conformBtn}>

                    <img src={require('../../assets/imgs/确定.png')}/>
            
                </button>
            </div>
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
        console.log(e.currentTarget.getAttribute("data-type"))
        const action ={
            type:'changeInput',
            detail:e.currentTarget.getAttribute("data-type"),
         
            value:e.target.value
        }
        store.dispatch(action)

    }
}
export default Register;