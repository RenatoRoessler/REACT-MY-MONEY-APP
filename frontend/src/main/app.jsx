import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'


export default props => (
    <div className='wrapper'>
        <Header></Header>    
        <SideBar></SideBar> 
        <div className='content-wrapper'>
          {props.children}
        </div>
        <Footer></Footer>
         <Messages />
    </div>
)