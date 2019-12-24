import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WalkCounter from './Components/WalkCounter.js';

class App extends Component {
  render() {
    return (
      <div className="WalkContainer form-group">
        <WalkCounter/>
        <div className="form-group walkTimer">
          00:00m
        </div>
        <div className="form-group startWalkBtn">
          <button className="btn btn-primary btn-block  startWalk">
            Start Walk
          </button>
          <span className="walkStarted hide">
            Walk started at <span className="startTime">06:30am</span>
          </span>
        </div>
        <div className="form-group endWalkBtn">
          <button className="btn btn-danger btn-block startWalk">
            End Walk
          </button>
          <span className="walkEnded hide">
            Walk ended at <span className="startTime">06:40am</span>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
