import React, {
  Component
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WalkCounter.css';

class PoopCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
    };
  }

  handleForm = (e) => {
    e.preventDefault();
  }
  
  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.checked < 9) {
        return {
          checked: prevState.checked + 1
        }
      } else {
        return null;
      }
    });
  }
  
  DecrementItem = () => {
    this.setState(prevState => {
      if (prevState.checked > 0) {
        return {
          checked: prevState.checked - 1
        }
      } else {
        return null;
      }
    });
  }
  
  handleChange = (event) => {
    this.setState({
      checked: event.target.value
    });
  }
  
  render() {
    return (
      <div className="form-group">
        <label htmlFor="poopCounter">Poop</label>
        <div className="poopCount">
          <input type="checkbox" id="poopCounter" value={this.state.checked} onChange={this.handleChange} className=" poopCounter"/>
        </div>
      </div>
    );
  }
}
class PeeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
    };
  }
        
  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.checked < 1) {
        return {
          checked: prevState.checked
        }
      } else {
        return null;
      }
    });
  }

  DecrementItem = () => {
    this.setState(prevState => {
      if (prevState.checked > 0) {
        return {
          checked: prevState.checked - 1
        }
      } else {
        return null;
      }
    });
  }

  handleChange = (event) => {
    this.setState({
      checked: event.target.value
    });
  }
  
  render() {
    return (
      <div className="form-group">
        <label htmlFor="peeCounter">Pee</label>
        <div className="peeCount">
          <input type="checkbox" value={this.state.checked} onChange={this.handleChange} id="peeCounter" className="peeCounter" />
        </div>
      </div>
    );
  }
}
        
class WalkCounter extends Component {
  render() {
    return (
      <div className="dogContainer">
        <h3 className="dogName">Hank, Gibbs</h3>
        <h4 className="form-group dog-timer">Elapsed Time: <i>0:30</i></h4>
        <PoopCounter />
        <PeeCounter />
      </div>
    );
  }
}
  
export default WalkCounter;
