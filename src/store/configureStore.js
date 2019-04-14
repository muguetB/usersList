// @flow

import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import createReducers from '../redux'
import sagas from '../sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const initialState =
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

  const middleware = applyMiddleware(sagaMiddleware)

  const appReducer = combineReducers(createReducers())

  const rootReducer = (state, action) => appReducer(state, action)

  const store = createStore(rootReducer, initialState, compose(middleware))

  sagas.forEach(saga => saga.map(sagaMiddleware.run))

  return store
}
