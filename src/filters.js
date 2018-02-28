import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItems from './listItems.jsx'
import {deleteFilter, allFilter, completeFilter} from './action/list-action'


class Filter extends Component {
  constructor(props) {
    super(props)
    this.message = "ALL" 
    this.allItems = this.allItems.bind(this)  
    this.completedItems = this.completedItems.bind(this)
    this.deletedItems = this.deletedItems.bind(this)  
  }

  allItems () {
    let {allFilter, originalState} = this.props
    allFilter(originalState)     
    this.message = "ALL"
  }

  completedItems() {
    let {completeFilter, originalState} = this.props
    completeFilter(originalState)
    this.message = "Completed"
  }

  deletedItems() {
    let {deleteFilter, originalState} = this.props
    deleteFilter(originalState)
    this.message = "Deleted"
  }

  render () {
    let {filterItems, originalState} = this.props
    
    return (
      <div>
        Selected Filter = {this.message}
        <br/> <br/>
        <button 
          type= "button"
          onClick={this.allItems}>
          All
        </button>
        <button 
          onClick={this.completedItems}>
          Complete
        </button>
        <button 
          onClick={this.deletedItems}>
          Deleted
        </button>
        <ListItems
          originalList={originalState} 
          filteredList={filterItems}
          filterType={this.message}>
        </ListItems>  
      </div>    
    )
  }
}

const mapStateToProps = (state) => {
  return {filterItems: state.filterReducer}
  }

const mapDispatchToProps = (dispatch) => {
    return {
      allFilter(originalState) {
        dispatch(allFilter(originalState))
      },
      deleteFilter(originalState) {
        dispatch(deleteFilter(originalState))
      },
      completeFilter(originalState) {
        dispatch(completeFilter(originalState))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
