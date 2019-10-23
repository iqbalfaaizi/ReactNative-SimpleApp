import React from 'react'
import{View,Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import AntIcon from 'react-native-vector-icons/AntDesign'

import Dashboard from './Dashboard'
import Profile from './Profile'
import Pokedex from './Pokedex'

const DashNav = createStackNavigator({
    Dashboard: {screen: Dashboard},
    Pokedex: {screen: Pokedex},
},{initialRouteName: 'Dashboard'},{defaultNavigationOptions:{header: null}})

const DashboardNav = createMaterialBottomTabNavigator({
    Dashboard: {
        screen: DashNav,
        navigationOptions: {
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <AntIcon style={[{color: tintColor}]} size={25} name={'home'} />
                </View>
            ),
            
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <AntIcon style={[{color: tintColor}]} size={25} name={'user'} />
                </View>
            ),
            activeColor: '#fff',
            inactiveColor: '#a5a5a5',
            barStyle: {backgroundColor: '#0B81C7'},
        }
    },
},{
    initialRouteName: "Dashboard",
    activeColor: '#fff',
    inactiveColor: '#a5a5a5',
    barStyle: {backgroundColor: '#0B81C7'},
})

export default createAppContainer(DashboardNav)