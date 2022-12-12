import * as React from 'react';
import Button from '@mui/material/Button';
import Head from '/blocks/Head';
import './App.css';

function App() {
  return (
    <><Head /><div className="App">
      <header className="App-header">
        <Button variant="contained">hello world!</Button>
      </header>
    </div></>
  );
}

export default App;
