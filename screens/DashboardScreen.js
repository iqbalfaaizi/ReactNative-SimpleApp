import React from 'react'
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import AntIcon from 'react-native-vector-icons/AntDesign'

import DashboardPage from './Dashboard'
import ProfilePage from './Profile'

class DshboardScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
}

const RootStack = createMaterialBottomTabNavigator({
    Dashboard: {
        screen: DashboardPage,
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
        screen: ProfilePage,
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
    }
},{
    header: null,
    initialRouteName: "Dashboard",
    activeColor: '#fff',
    inactiveColor: '#a5a5a5',
    barStyle: {backgroundColor: '#0B81C7'},
})

const Container = createAppContainer(RootStack);
export default Container;