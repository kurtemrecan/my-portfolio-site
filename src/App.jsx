import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import ModeSwitch from './components/ModeSwitch';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <div className="dark:bg-dark-purple">
          <ModeSwitch />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
