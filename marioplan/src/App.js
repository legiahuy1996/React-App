import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/Signin' component={SignIn}/>
          <Route path='/SignUp' component={SignUp}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
