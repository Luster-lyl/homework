import React,{Component} from "react"
import {BrowserRouter,Link,HashRouter} from 'react-router-dom'
import { Router, Route } from 'react-router'

import SchoolWork from "../../pages/schoolworlk/schoolwork"
import Question from "../../pages/question/question"
import Personal from "../../pages/personal/personal"
import Resource from "../../pages/resource/resource"

require("./header.css")

export default class HeaderBar extends Component{


    render(){


        return(
         <div>
           <HashRouter basename="main">
            <Link  className="nav-link" to="/personal">personal/</Link>
           <Link  className="nav-link" to="/schoolwork">schoolwork/</Link>
           <Link  className="nav-link" to="/question">question/</Link>
           <Link className="nav-link" to="/resource">resource</Link>
           </HashRouter>
           </div>
    
        )
    }
}