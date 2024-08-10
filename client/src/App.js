import React from 'react';
import Header from './components/header/Header';
import {AppBar, Toolbar} from '@mui/material';
import './App.css';

const App = () => {
  return (
    <AppBar>
      <Toolbar>
        <Header />
      </Toolbar>
    </AppBar>
  )
}

export default App;