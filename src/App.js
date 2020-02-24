import React from 'react';
import './css/styles.scss';
import 'normalize.css';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Numbers from "./components/Numbers";
import MeetTheTeam from "./components/MeetTheTeam";

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Hero/>
      <Timeline/>
      <Numbers/>
      <MeetTheTeam/>
    </div>
  );
}

export default App;
