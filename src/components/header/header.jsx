import React,{Component} from "react"
import {BrowserRouter,Link,HashRouter} from 'react-router-dom'
import { Router, Route } from 'react-router'


import styles from "./header.module.css"

export default class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state={
            
            navList:[{title:"个人主页",url:'main/personal'},{title:'资源畅吧',url:'main/resource'},{title:'论题空间',url:'main/question'},{title:'作业吧',url:'main/schoolwork'}]
        }
        
    }


    render(){


        return(
         <div className={styles.headerWrapper}>
             <div className={styles.headerContent}>
                 <div className={styles.icon}>
                     <img src={require("../../assets/imgs/logo-01.png")}/>
                 </div>
                 <div className={styles.navList}>
                     <ul className={styles.navBox}>
                         {this.state.navList.map(item=>{
                             return <li key={item.title}><Link to={'/'+item.url}>{item.title}</Link></li>
                         })}
                     </ul>

                 </div>
                 <div className={styles.userIcon}>
                     <img src={require('../../assets/imgs/默认头像.png')}/>

                 </div>
             </div>
           </div>
    
        )
    }
}