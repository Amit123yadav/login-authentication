import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Other from './Other';

const Company = () => {
  return (
    <div>
        <h1>This is Company page</h1>
        <ul>
            <li>
                <Link to={'/about/Company/other'}>Other</Link>
            </li>
        </ul>
        <Switch>
            <Route path={'/about/company/other'} component={Other}/>
        </Switch>
    </div>
  )
}

export default Company;