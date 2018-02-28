const inititalState = []
const listFilteringReducer = (state: Array = inititalState, action: Object) => {
  switch(action.type) {
    case "allFilter":
      return action.originalState

    case "completeFilter":
      let appliedFilter = action.originalState.filter((element, index) => {
        if (element.completed == true) return element  
      })
      let filterValueComplete = "completed" 
      return appliedFilter

    case "deleteFilter":
      let appliedFilter2 = action.originalState.filter((element, index) => {
        if (element.deleted == true) return element  
      })
      let filterValueDelete = "deleted"
      return  appliedFilter2

    default:
      return [...state]
  }
}      

export {listFilteringReducer} 
