import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main'

const App = () => (
  <div>
    <Route exact path="/" component={Main} />
  </div>
);

export default App;
