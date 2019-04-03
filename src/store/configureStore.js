// @flow

import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createReducers from '../redux'
import sagas from '../sagas'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()

    const appReducer = combineReducers(createReducers())

    const rootReducer = (state, action) => appReducer(state, action)

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

    sagas.forEach(saga => saga.map(sagaMiddleware.run))

    return store
}
