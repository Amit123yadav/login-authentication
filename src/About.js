import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Company from './Company';
import NavBar from './NavBar';
import Youtube from './Youtube';
// import Service from './Service';
const About = () => {
  return (
    <><NavBar />
      <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
        <h1>This is about us page</h1>
        <p>nested route</p>
        <ul>
          <li>
            <Link to={'/about/company'}>Company</Link>
          </li>
          <li>
            <Link to={'/about/youtube'}>Youtube</Link>
          </li>
        </ul>
        <Switch>
          <Route path={'/about/company'} component={Company} />
          <Route path={'/about/youtube'} component={Youtube} />

        </Switch>
      </div></>
  )
}

export default About;