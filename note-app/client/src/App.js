import React from 'react';
import LandingPage from './static/landing';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './static/login';
import Register from './static/register';
import TasksView from './Tasks';
import Settings from './static/settings';
// import ErrorPage from './static/ErrorPage';
import NotesView from './Notes'

function App() {

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      sessionStorage.getItem("user")
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/settings' component={Settings} />

          <ProtectedRoute exact path='/tasks' component={TasksView} />
          <ProtectedRoute exact path='/notes' component={NotesView} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

