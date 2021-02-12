import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Brady Richmond
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
