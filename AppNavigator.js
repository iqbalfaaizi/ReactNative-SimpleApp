import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Signup from './screens/Signup'
import Login from './screens/Login'
import Home from './screens/Home'
import DashboardScr from './screens/DashboardScreen'

class DashboardScreen extends React.Component{
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <>
            <DashboardScr />
            </>
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Signup: {screen: Signup},
    Login: {screen: Login},
    Dashboard: {screen: DashboardScreen},
},{initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)