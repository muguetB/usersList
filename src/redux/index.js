// @flow

import { WelcomeReducer } from '../welcome/redux'

export default function createReducers() {
    return {
        welcome: WelcomeReducer,
    }
}
