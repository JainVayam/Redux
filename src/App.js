import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItems from './listItems.jsx'
import {addItem} from './action/list-action'
import Filters from './filters.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
  
    }    
    this.updateState = this.updateState.bind(this);
  }
 
  updateState(e) {
    this.setState({text: e.target.value})
  }

  render() {    
    const {text} = this.state
    const{addItem, itemInfo}= this.props
    
    return (     
      <div className="App">
        <h1>
          <input 
            type="text" 
            placeholder="Enter new item"
            onChange={this.updateState} />
          <button 
            type= "button"
            onClick={() => addItem(text)}>
            Enter
          </button>  
        </h1>
        <Filters 
          originalState = {itemInfo}>
        </Filters>            
      </div>
    );
  }
}
  
const mapStateToProps = (state) => {
  return {itemInfo: state.listReducer}  
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    addItem(text) {
      dispatch(addItem(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
