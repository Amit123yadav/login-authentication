import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Service from './Service';
import Logout from './Logout';
import Reg from './Reg';
import Log from './Log';
// import Company from './Company';
// import Youtube from './Youtube';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <ProtectedRoute Cmp={Home} />
          </Route>
          <Route  path={'/about'}>
            <ProtectedRoute Cmp={About} />
          </Route>
          <Route exact path={'/service'}>
            <ProtectedRoute Cmp={Service} />
          </Route>
          <Route  path={'/login'} component={Login} />
          <Route  path={'/logout'} component={Logout} />
          {/* <Route  path={'/register'} component={Regitser} /> */}
          {/* <Route  path={'/reg'} component={Reg} /> */}
          {/* <Route  path={'/log'} component={Log} /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;