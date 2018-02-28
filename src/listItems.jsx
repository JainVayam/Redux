import React, { Component } from 'react';
import {connect} from 'react-redux';
import {get, completed, deleted} from './action/list-action'

class ListItems extends Component {
  constructor(props) {
    super(props)
    this.filter = "ALL"
  }  
  
  listData() {
    let listItems, filter
    let {filteredList, itemInfo, deleted, completed, filterType, originalList} = this.props
    this.filter = filterType
      
      if(this.filter == "ALL") {
        listItems = originalList.map((element, index) => {
          return (
            <li key={index.toString()}> 
              {element.item}
              <button 
                onClick={() => completed(element.item)}>
                Completed
              </button>
              <button 
                onClick={() => deleted(element.item)}>
                Deleted
              </button>       
            </li>
          )    
        })
      } else if (this.filter == "Completed") {
        listItems = filteredList.map((element, index) => {
          return (
            <li key={index.toString()}> 
             {`${element.item} Completed`}
              <button 
                onClick={() => deleted(element.item)}>
                Deleted
              </button>       
            </li>
          )    
        })
        } else if (this.filter == "Deleted") {
          listItems = filteredList.map((element, index) => {
          return (
            <li key={index.toString()}> 
             {`${element.item}`}
              <button 
                onClick={() => completed(element.item)}>
                Completed
              </button>
              {`Deleted`}       
            </li>
          )    
        })
        }
  return listItems
}

  render () {
    return (
      <div>   
        <ul>
          {this.listData()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {itemInfo: state.listReducer}  
  }

 const mapDispatchToProps = (dispatch) => {
  return {
    get() {  
      dispatch(get())
    },
    completed (item) {
      dispatch(completed(item))
    },
    deleted (item) {
      dispatch(deleted(item))
    }
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)
