import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Nav/>
        <MainPage/>
      </React.Fragment>
    </div>
  );
}

export default App;
