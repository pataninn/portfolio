import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import home from './components/pages/home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={home}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
