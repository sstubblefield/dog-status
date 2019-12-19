import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WalkCounter from './WalkCounter.js';

class App extends Component {
  render() {
    return (
      <div className="WalkContainer">
        <div className="startWalkBtn">
          <button className="startWalk">
            Start Walk
          </button>
          <span className="walkStarted">
            Walk started at <span className="startTime">06:30am</span>
          </span>
        </div>
        <WalkCounter/>
        <div className="walkTimer">
          00:00m
        </div>
        <div className="endWalkBtn">
          <button className="startWalk">
            End Walk
          </button>
          <span className="walkStarted">
            Walk ended at <span className="startTime">06:40am</span>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
