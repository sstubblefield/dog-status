import React, {
  Component
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class IncrementButton extends Component {
  render() {
    return (
      <div className="plusButton">
        <button onClick={this.props.IncrementItem} className="plusButton">+</button>
      </div>
    );
  }
}

class DecrementButton extends Component {
  render() {
    return ( 
      <div className="minusButton">
        <button onClick={this.props.DecrementItem} className="minusButton">-</button>
      </div>
    );
  }
}

class PoopCounter extends Component {
  constructor(props) {
    super(props);
      this.state = {
        quantity: 0,
      };
    }

    handleForm = (e) => {
      e.preventDefault();
    }
    
    IncrementItem = () => {
      this.setState(prevState => {
        if (prevState.quantity < 9) {
          return {
            quantity: prevState.quantity + 1
          }
        } else {
          return null;
        }
      });
    }
    
    DecrementItem = () => {
      this.setState(prevState => {
        if (prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }
    
    handleChange = (event) => {
      this.setState({
        quantity: event.target.value
      });
    }
    
    render() {
      return (
        <div className="poopCount">
          <DecrementButton DecrementItem={this.DecrementItem} />
          <span className="bathroomType">Poops<input type="text" value={this.state.quantity} onChange={this.handleChange} size="2" className="poopCounter"/></span>
          <IncrementButton IncrementItem={this.IncrementItem}/>
          </div>
        );
      }
    }
    
class PeeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
        
  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });
  }

  DecrementItem = () => {
    this.setState(prevState => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value
    });
  }
  
  render() {
    return (
      <div className="peeCount">
        <DecrementButton DecrementItem={this.DecrementItem} />
        <span className="bathroomType">Pees <input type="text" size="2" value={this.state.quantity} onChange={this.handleChange} className="peeCounter" /></span>
        <IncrementButton IncrementItem={this.IncrementItem} />
      </div>
    );
  }
}
        
class WalkCounter extends Component {
  render() {
    return (
      <div className="dogContainer">
        <span className="dogName">Dog Name</span>
        <PoopCounter />
        <PeeCounter />
      </div>
    );
  }
}
  
export default WalkCounter;
