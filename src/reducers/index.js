import { combineReducers } from 'redux'
import btns from './btnsReducer'
import dogs from './dogsReducer'

const reducApp = combineReducers({
  btns,
  dogs
})

export default reducApp
