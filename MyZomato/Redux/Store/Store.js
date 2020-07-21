import { createStore } from 'redux'
import RootReducer from '../Reducers'

const Store = createStore(RootReducer)

export default Store