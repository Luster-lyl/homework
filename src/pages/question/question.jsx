import  React,{Component} from "react"


import HeaderBar from "../../components/header/header"


import {GlobalStyle} from "../../globalStyle"

export default class Question extends Component {
    render(){
        return(
            <div>
                <GlobalStyle/>
                <HeaderBar></HeaderBar>
                Question
            </div>
        )
    }
}