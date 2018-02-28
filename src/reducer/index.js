import {combineReducers} from "redux";

import {listFilteringReducer} from './list-filtering-reducer'
import {listReducer} from './list-reducer'

const rootReducers = combineReducers({
  listReducer: listReducer,
  filterReducer: listFilteringReducer
});

export {rootReducers}
