import  React,{Component} from "react"
import {Route}from "react-router-dom"


import HeaderBar from "../../components/header/header"
import SchoolWork from "../schoolworlk/schoolwork"
import Question from "../question/question"
import Personal from "../personal/personal"
import Resource from "../resource/resource"

import {GlobalStyle} from "../../globalStyle"


import './main.css'

export default class Main extends Component {
    render(){
        return(
            <div className='main-bg'>
                <GlobalStyle/>
                <HeaderBar/>
                   <Route path="/main/personal" component={Personal}/>
                    <Route path="/main/schoolwork" component={SchoolWork}/>
                    <Route path="/main/resource" component={Resource}/>
                    <Route path="/main/question" component={Question}/>
                
            </div>
        )
    }
}