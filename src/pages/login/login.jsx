import React, {Component} from 'react'
import axios from "axios"



import Background from "../../assets/imgs/index-bg.png"

import styles from "./login.module.css"

import {GlobalStyle} from "../../globalStyle"
import {Link}from "react-router-dom"




import store from '../../store/index'


const frontBg = {
    width:"100%",
    height:"1080px",
    backgroundImage:`url(${Background})`
};


class LogIn extends Component{
    constructor(props){
        super(props)  
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.loginBtn = this.loginBtn.bind(this)
        this.registerBtn = this.registerBtn.bind(this)
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
            
                <div className={styles.loginBg} style={{backgroundImage: "url(" + require("../../assets/imgs/register.png") + ")"}}>
                <div className={styles.listTitle}>
                    <Link className={styles.loginBtn} to="../login" onClick={this.loginBtn}><span >登录</span></Link>
                    <Link className={styles.registerBtn} to="../register" onClick={this.registerBtn}><span>注册</span></Link>
        
                </div>
                <div className={styles.options}>
                
                
                        <div className={styles.loginLine}><img src={require('../../assets/imgs/下划线 拷贝.png')}/></div>
                    
                       
    
            
                 </div>
            
                <div class={styles.inputArea}>
                  
                    <div className={styles.inputItem}>
                        <span className={styles.inputTip}>邮箱</span>
                        <input className={styles.inputBox} onChange={this.changeInputValue} data-type="email"/>
                    </div>
                    <div className={styles.inputItem}>
                        <span className={styles.inputTip}>密码</span>
                        <input className={styles.inputBox} onChange={this.changeInputValue} data-type="password"/>
                    </div>
                    <div className={styles.inputItem}>
                </div>
    
    
                </div>
                
                <div>
                    
                <button type="button" 
                onClick={this.clickBtn}
                title="submit" 
                dataU='hhh'
               
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
    registerBtn(){

    }
    loginBtn(){

    }
    clickBtn(e){
        //现在还没有进行前后端交互，点击按钮后可以直接进入首页
        console.log(e)

        const action = {
             type:'loginSubmit',
             value:!this.state.ifLogin

    }
        store.dispatch(action)
     }
    changeInputValue(e){
        //console.log(e.target.value)
        const action ={
            type:'changeInput',
            detail:e.currentTarget.getAttribute("data-type"),
            value:e.target.value
        }
        store.dispatch(action)

    }
    
}
export default LogIn;