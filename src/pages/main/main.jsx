import  React,{ Component } from "react"
import { BrowserRouter , Route } from "react-router-dom"

// 无了 import SchoolWork from "../schoolworlk/schoolwork"
import Question from "../question/question"
import Personal from "../personal/personal"
import Resource from "../resource/resource"
import HeaderBar from '../../components/header/header'
import { GlobalStyle } from "../../globalStyle"
import './main.css'
//安装了node-sass。但是并没有用
import mainContentImg from './images/logo_big.png'



export default class Main extends Component {

    // constructor(props){

    // }

    render(){
        return(
            <div>
               <BrowserRouter>
                    <Route path="/personal" component={Personal}/>  
                    <Route path="/resource" component={Resource}/>
                    <Route path="/question" component={Question}/> 
                </BrowserRouter>
                <GlobalStyle/>
                <HeaderBar/>
                <div className = 'main-contentBg'>
                    <div className = 'main-content'>
                        <img className = 'main-content__logoImg' src = { mainContentImg } alt="logo-big"/>
                        <p className = 'main-content__logoImg-p'>
                            <span className = 'main-content__logoImg-line'>
                                
                            </span>
                            一个集海量课程资源与提交作业的知性Web
                            <span className = 'main-content__logoImg-line'>

                            </span>
                        </p>
                        <div  className = 'main-content__banner' >
                            
                        </div>
                        <div  className = 'main-content__list' >
                            
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
