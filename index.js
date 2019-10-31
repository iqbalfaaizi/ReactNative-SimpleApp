/**
 * @format
 */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/App';
import {name as appName} from './app.json';

export default class ReduxCounter extends Component {
    render() {
        return(
            <App />
        )
    }
}

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ReduxCounter', () => ReduxCounter )