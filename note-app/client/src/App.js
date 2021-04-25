import React, { useContext } from 'react';
import LandingPage from './static/landing';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './static/login';
import Register from './static/register';
import TasksView from './Tasks';
// import ErrorPage from './static/ErrorPage';
import NotesView from './Notes'
import { AuthContext } from './services/auth';




function App() {
  const { isAuthorized } = useContext(AuthContext);

  const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
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

          <ProtectedRoute exact path='/tasks' component={TasksView} auth={isAuthorized} />
          <ProtectedRoute exact path='/notes' component={NotesView} auth={isAuthorized} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

