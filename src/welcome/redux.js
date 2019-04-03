// @flow

import { createAction } from 'redux-actions'

export const IS_VISITED = 'IS_VISITED'
export const CHECK_IF_VISITED = 'CHECK_IF_VISITED'

export const setVisitedAction = createAction(IS_VISITED)
export const checkIfVisitedAction = createAction(CHECK_IF_VISITED)

const emptyWelcomeReducer = {
    isVisited: false,
}

export const WelcomeReducer = (state: Object = emptyWelcomeReducer, action: Object) => {
    switch (action.type) {
        case IS_VISITED:
            return {
                ...state,
                isVisited: true,
            }
        default:
            return state
    }
}
