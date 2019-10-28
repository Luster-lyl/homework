import React, {Component} from 'react'

import { Form, Icon, Input, Button, Checkbox,Layout } from 'antd'


const { Header, Footer, Sider, Content } = Layout
class LogIn extends Component{
    render(){
        return (
            <div>
                <Layout>
                <Header>Header</Header>
                <Content>Content-login</Content>
                 <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
export default LogIn;