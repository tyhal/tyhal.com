import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// app component
export default class Root extends React.Component {
    // render
    render () {
        return (
            <div className="app sidebar-show aside-menu-show">
                <NavBar/>
                <div className='container'>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
