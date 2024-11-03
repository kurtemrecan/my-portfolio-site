import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import ModeSwitch from './components/ModeSwitch';

function App() {
  return (
    <div>
      <ModeSwitch />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
