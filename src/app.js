// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import configureStore from './store/configureStore'
import WelcomePage from './welcome'

const MainStack = createStackNavigator(
    {
        Welcome: {
            screen: WelcomePage,
        },
    },
    {
        headerMode: 'screen',
    },
)

const store = configureStore()
const AppContainer = createAppContainer(MainStack)

export default function App() {
    return (
        <Provider store={store}>
            <WelcomePage />
        </Provider>
    )
}
