import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Info from "./components/Info";
import Home from "./components/Home";
import City from "./components/city/City"
import Book from "./components/book/Book"
import Less3 from './components/less3';
import Navigation from './components/Navigation';
import TextRedactor from './components/TextRedactor';
import Less4 from './components/Less4';
import ThemeToggle from './components/ThemeToggle';
import CommentSystem from './components/CommentSystem';
import ClickCounter from './components/ClickCounter';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = (theme) => {
    setIsDarkTheme(theme);
  };

  return (
    <div className={`* ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Router>
        <ThemeToggle onThemeChange={handleThemeChange} />
        <Navigation/>
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/Info" element={ <Info/> }  />
          <Route path="/City" element={ <City/> }  />
          <Route path="/Book" element={ <Book/> }  />
          <Route path="/Less3" element={ <Less3/> }  />
          <Route path="/TextRedactor" element={ <TextRedactor/> }  />
          <Route path="/Less4" element={ <Less4/> }  />
          <Route path="/CommentSystem" element={ <CommentSystem/> }  />
          <Route path="/ClickCounter" element={ <ClickCounter/> }  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;