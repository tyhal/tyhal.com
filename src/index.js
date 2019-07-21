import React from 'react'
import ReactDOM from 'react-dom'
import './gencss/style/main.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Basics from './apps/Main'
import NotFound from './apps/NotFound'
import JsonResume from './apps/Json'
import Food from './apps/Food'
import Graph from './apps/Charts'

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'

import resume from './resource/resume.json'

export default class Root extends React.Component {
  // render
  render () {
    return (
      <HashRouter className='app sidebar-show aside-menu-show'>
        <NavBar
          picture={resume.basics.picture}
          name={resume.basics.name} />
        <div className='container'>
          <Switch>
            <Route path='/' exact render={props => <Basics {...props} resume={resume} />} />
            <Route path='/graph/' component={Graph} />
            <Route path='/food/' component={Food} />
            <Route path='/json/' render={props => <JsonResume {...props} resume={resume} />} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer
          website={resume.basics.website}
          name={resume.basics.name} />
      </HashRouter>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
