import React from 'react';
import './css/styles.scss';
import 'normalize.css';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Hero/>
      <Timeline/>
    </div>
  );
}

export default App;
