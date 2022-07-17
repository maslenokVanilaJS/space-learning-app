import logo from './logo.svg';
import './App.css';
import { APOD  } from './Components/Composed/Main/APOD/APOD';
import { Header } from './Components/Composed/Header/Header';
import { useState } from 'react';
import { MarsRover } from './Components/Composed/Main/MarsRovers/MarsRover';
 
function App() {
  const [language, setLanguage] = useState('eng');
  return (
    <div>
      <Header props={setLanguage}></Header>
      <APOD props={language}></APOD>
      <MarsRover></MarsRover>
    </div>
    );
}

export default App;
