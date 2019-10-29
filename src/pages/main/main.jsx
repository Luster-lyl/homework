import  React,{Component} from "react"
import {Switch,Route}from "react-router-dom"


import SchoolWork from "../schoolworlk/schoolwork"
import Question from "../question/question"
import Personal from "../personal/personal"
import Resource from "../resource/resource"

import {GlobalStyle} from "../../globalStyle"

export default class Main extends Component {
    render(){
        return(
            <div>
                <GlobalStyle/>
                <Switch>
                   <Route path="/main/personal" component={Personal}/>
                    <Route path="/main/schoolwork" component={SchoolWork}/>
                    <Route path="/main/resource" component={Resource}/>
                    <Route path="/main/question" component={Question}/>
                </Switch>
            </div>
        )
    }
}