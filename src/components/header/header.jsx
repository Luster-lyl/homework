import React , { Component } from "react"
import { Link } from 'react-router-dom'
import { BrowserRouter , Route } from 'react-router-dom'


import Login from '../../pages/login/login'
import Register from '../../pages/register/register'

import styles from "./header.module.css"

export default class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state={
            navList:[
                {title:"首页",url:'main'},
                {title:'资源畅吧',url:'resource'},
                {title:'论题空间',url:'question'}
                // {title:'个人主页',url:'personal/'}
            ]
        }
    }


    render(){

        return(
         <div className={styles.headerWrapper}>
             <div className={styles.headerContent}>
                <div className={styles.icon}>
                    <img className={styles.iconImg} src={require("../../assets/imgs/logo-01.png")}/>
                </div>
                <div className={styles.jumpLogin}>
                    <BrowserRouter>
                        <ul className={styles.loginBtn}>
                            <li><Link to = '/login' className={styles.loginBtnLink}>登录</Link></li>
                            <li><Link to = '/register'  className={styles.loginBtnLink}>/注册</Link></li>
                        </ul>
                        <Route path = '/login' exact Component = {Login}/>
                        <Route path = '/register' exact Component = {Register}/>
                    </BrowserRouter>
                </div>
                <div className={styles.navList}>
                    <ul className={styles.navBox}>
                        {this.state.navList.map(item => {
                            return (
                                        <li key={item.title}>
                                            <Link to={'/'+item.url} className={styles.navBoxLinks}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                        })}
                        <li>
                            <Link to = '/person' className={styles.navBoxLinksImg} >
                                个人主页
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        )
    }
}