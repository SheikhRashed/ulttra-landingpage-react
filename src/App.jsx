import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './global.Styles';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
