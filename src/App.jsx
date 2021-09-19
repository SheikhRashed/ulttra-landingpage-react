import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './global.Styles';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
