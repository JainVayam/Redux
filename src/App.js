import React, {Component} from 'react';
import {connect} from 'react-redux';

import {increment, decrement, show} from './action/counter-action';

class App extends Component {
 
  render() {
    const {stateValue, increment, decrement, show} = this.props
    return (
      <div>
        <h1>  
          {this.props.stateValue}
        </h1>
        <button 
          onClick = {increment}>
          +
        </button>
        <button 
          onClick = {show}>
          show
        </button>
        <button 
          onClick = {decrement}>
          -
        </button>    
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {stateValue : state.stateValue}  
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrement() {
      dispatch(decrement());
    },
    increment() {
      dispatch(increment());
    },    
    show() {
      dispatch(show());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
