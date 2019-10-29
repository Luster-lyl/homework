import  React,{Component} from "react"


import HeaderBar from "../../components/header/header"

import {GlobalStyle} from "../../globalStyle"

export default class Resource extends Component {
    render(){
        return(
            <div>
                <GlobalStyle/>
                <HeaderBar></HeaderBar>
                Resource
            </div>
        )
    }
}