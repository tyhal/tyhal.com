import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import resume from '../resource/resume.json'

// app component
export default class Root extends React.Component {
  // render
  render () {
    return (
      <div className='app sidebar-show aside-menu-show'>
        <NavBar
          picture={resume.basics.picture}
          name={resume.basics.name}
          path={this.props.location.pathname} />
        <div className='container'>
          {React.cloneElement(this.props.children, { resume: resume })}
        </div>
        <Footer
          website={resume.basics.website}
          name={resume.basics.name} />
      </div>
    )
  }
}
