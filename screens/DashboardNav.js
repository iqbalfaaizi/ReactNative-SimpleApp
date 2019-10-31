import React from 'react'
import{View,Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Icon} from 'react-native-elements'

//Dashboard Page
import Dashboard from './bottom-tabs/Dashboard'
import Pokedex from './dashboard/Pokedex'
import ReduxTest from './dashboard/ReduxTest'
import Users from './dashboard/usersData'
//Setting Page
import Setting from './bottom-tabs/Setting'
import Username from './settings/SetUsername'

import Profile from './bottom-tabs/Profile'

//Dashboard screen navigation
const DashNav = createStackNavigator({
    Dashboard: {screen: Dashboard},
    Pokedex: {screen: Pokedex},
    ReduxTest: {screen: ReduxTest},
    Users: {screen:Users},
},{initialRouteName: 'Dashboard'},{defaultNavigationOptions:{header: null}})

// Hiding bottom bar from child screen
DashNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 ){
        tabBarVisible = false;
    }
    return {tabBarVisible};
}

//Setting Screen Navigation
const SettingNav = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            title : 'Settings',
            headerStyle: { backgroundColor: '#0B81C7', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', left: -10},
            headerLeft: (
                <Icon 
                name='setting' 
                type='antdesign'
                color='#fff'
                paddingLeft={16}
                size={35}
                />
            )
        }
    },
    Username: {screen: Username}
},{initialRouteName: 'Setting'},{defaultNavigationOptions:{header: null}})

//Bottom bar tabs navigation
const DashboardStack = createMaterialBottomTabNavigator({
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
    Setting: {
        screen: SettingNav,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <AntIcon style={[{color: tintColor}]} size={25} name={'setting'} />
                </View>
            ),
            activeColor: '#fff',
            inactiveColor: '#a5a5a5',
            barStyle: {backgroundColor: '#0B81C7'},
        }
    }
},{
    initialRouteName: "Dashboard",
    activeColor: '#fff',
    inactiveColor: '#a5a5a5',
    barStyle: {backgroundColor: '#0B81C7'},
})

export default createAppContainer(DashboardStack)