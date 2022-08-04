import logo from './logo.svg';
import './App.css';
import { APOD  } from './Components/Composed/Main/APOD/APOD';
import { Header } from './Components/Composed/Header/Header';
import { useState } from 'react';
import { MarsRover } from './Components/Composed/Main/MarsRovers/MarsRover';
import { GlobalStyles } from './GlobalStyles';
import { APODPage } from './Components/Composed/Main/Pages/ApodPage/APODPage';
import { HeadingDisplay } from './Components/Elements/Text/HeadingDisplay/HeadingDisplay';
import { NumberedNav } from './Components/Elements/Navigation/NumberedNav/NumberedNav';
 
function App() {
  const [language, setLanguage] = useState('eng');
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Header props={setLanguage}></Header>
      <APOD props={language}></APOD>
      <MarsRover></MarsRover>
       <HeadingDisplay 
       props={{h1:'Apod Pages',
              css:"margin-top:50px;"}}>
      </HeadingDisplay>
      <APODPage props={language}></APODPage>
     </div>
    );
}

export default App;
