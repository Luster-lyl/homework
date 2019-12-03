import React,{Component} from "react"


import './search.css'


class Search  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="search">
            <div className="search-bg">
                <div className='search-wrapper'>
                    <input className="search-input"/>
                    <div>
                        <button className="search-icon"><img src={require('../../assets/imgs/搜索icon.png')}></img></button>
                    </div>
                </div>
            </div></div>
         );
    }
}
 
export default Search;