import { ChocolateReducer } from './ChocolateReducer'
import { IceCreamsreducer } from './IceCreamsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    chocolate: ChocolateReducer,
    icecream: IceCreamsreducer
})

export default rootReducer