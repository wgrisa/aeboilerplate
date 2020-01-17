import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { me } from './ducks/get-me'

const ducks = combineReducers({
  me,
})

export const configureStore = () => createStore(ducks, composeWithDevTools(applyMiddleware(thunk)))
