import {ADD_ITEM, COMPLETED, DELETED, GET_ITEM, ALL_FILTER, DELETE_FILTER, COMPLETE_FILTER} from './action-types'

const addItem = (item) => ({type: ADD_ITEM, item})

const completed = (item) => ({type: COMPLETED, item})

const deleted = (item) => ({type: DELETED, item})

const get = () => ({type: GET_ITEM})

const allFilter = (originalState) => ({type: ALL_FILTER, originalState })

const deleteFilter = (originalState) => ({type: DELETE_FILTER, originalState})

const completeFilter = (originalState) => ({type: COMPLETE_FILTER, originalState})

export {addItem, completed, deleted, get, allFilter, deleteFilter, completeFilter}
