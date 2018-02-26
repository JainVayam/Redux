const initialState = {stateValue: 0};

const counterReducer = (state: Object = initialState, action: Object) => {
  switch(action.type) {
    case 'Increment':
      // Against Redux Rules
      state.stateValue = state.stateValue + 1;
      return state;
      //Along Redux rules      
    case 'Decrement':
      return {
        ...state,
        stateValue: state.stateValue - 1
      }  
    case 'Show': 
      return {
        ...state,
        stateValue: state.stateValue 
      }     
    default:
      return {
        ...state,
        stateValue: state.stateValue 
      }
  }           
}

export {counterReducer}
