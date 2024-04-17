import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Info from "./components/Info";
import Home from "./components/Home";
import City from "./components/city/City"
import Book from "./components/book/Book"
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/Info" element={ <Info/> }  />
          <Route path="/City" element={ <City/> }  />
          <Route path="/Book" element={ <Book/> }  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
