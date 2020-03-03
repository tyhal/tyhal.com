import React from 'react'
import ReactDOM from 'react-dom'
import './gencss/style/main.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Main from './apps/Main'
import NotFound from './apps/NotFound'
import Info from './apps/Info'
import Food from './apps/Food'
import { HashRouter, Route, Switch } from 'react-router-dom'

import resume from './resource/info.json'
import { Container } from 'reactstrap'
// import Graph from './apps/Charts'

const Root = (props) => {
  const routes = [
    { path: '/home/', component: Main },
    // path='/graph/' component={Graph}
    { path: '/food/', component: Food },
    { path: '/info/', component: Info },
    { path: '*', component: NotFound }
  ]
  return (
    <HashRouter className='app sidebar-show aside-menu-show'>
      <NavBar
        routes={routes.filter(r => r.path[0] === '/').map(r => r.path)}
        picture={resume.basics.picture}
        name='tyha\.'
      />
      <Container className='md-4'>
        <Switch>
          <Route path='/' exact component={routes[0].component} />
          {routes.map(r => <Route key={r.path} path={r.path} component={r.component} />)}
        </Switch>
      </Container>
      <Footer
        website={resume.basics.website}
        name={resume.basics.name}
      />
    </HashRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
