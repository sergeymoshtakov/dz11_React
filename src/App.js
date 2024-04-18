import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Info from "./components/Info";
import Home from "./components/Home";
import City from "./components/city/City"
import Book from "./components/book/Book"
import Map from './components/Map';
import Less3 from './components/less3';
import Navigation from './components/Navigation';
import TextRedactor from './components/TextRedactor';

function App() {
  return (
    <Router>
      <div>
        {/* <Map/> */}
        <Navigation/>
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/Info" element={ <Info/> }  />
          <Route path="/City" element={ <City/> }  />
          <Route path="/Book" element={ <Book/> }  />
          <Route path="/Less3" element={ <Less3/> }  />
          <Route path="/TextRedactor" element={ <TextRedactor/> }  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
