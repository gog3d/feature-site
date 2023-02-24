import styles from './app.module.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppConstructor from '../app-constructor/app-constructor.js';

const App = () => {
 
  return (
      <Router>
        <AppConstructor />
      </Router>
   );
}
export default App;