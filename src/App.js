import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'
import Bar from './components/navbar/Bar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/about/Skill';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App bg-gray-900 relative ">
      <Bar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
