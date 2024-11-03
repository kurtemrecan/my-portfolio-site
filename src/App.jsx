import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import ModeSwitch from './components/ModeSwitch';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <ModeSwitch />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
