import {INCREMENT_COUNTER, DECREMENT_COUNTER, SHOW} from './action-types';

const increment = () => ({type: INCREMENT_COUNTER})

const decrement = () => ({type: DECREMENT_COUNTER})

const show = () => ({type: SHOW})
 
export {increment, decrement, show}
