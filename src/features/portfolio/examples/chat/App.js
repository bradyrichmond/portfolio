import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './app.css';

import Login from './features/login/Login';
import Chat from './features/chat/Chat';
import Loading from './features/shared/Loading';
import Error from './features/shared/Error';
import { selectIsLoading } from './features/shared/loadingSlice';
import { selectError } from './features/shared/errorSlice';


const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const showError = useSelector(selectError);

  return (
    <div className='app-container'>
      { isLoading && <Loading /> }
      <p>{showError}</p>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/chat'>
            <Chat />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
        </Switch>
        {showError && <Redirect to='/error' />}
      </Router>
    </div>
  );
}

export default App;
