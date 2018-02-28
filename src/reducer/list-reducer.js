const initialState = []

const listReducer = (state :Array = initialState, action: Object) => {
  switch(action.type) {
    case "addItem":
      let localItem = {}
      localItem.item = action.item
      localItem.completed = false
      localItem.deleted = false
      return [...state, localItem]
        
    case "completed":
      let completedCheck = state.find((element, index) => {
        if(element.item == action.item)  element.completed = true
      }) 
      return state     
    
    case "deleted":
      let deletedCheck = state.find((element, index) => {
        if(element.item == action.item) element.deleted = true 
      })
      return state   

    default:
      return state    
  }
}

export {listReducer}
