import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {ListItem, Icon, Button} from 'react-native-elements'

const list = [
  {
    title: 'Set Username',
    icon: 'user',
    ScreenName: 'Username'
  },
  {
    title: 'Storage',
    icon: 'hard-drive',
    ScreenName: 'Username'
  },
  {
    title: 'Dark Mode',
    icon: 'moon',
    ScreenName: 'Username'
  },
]

const list2 = [
    {
      title: 'Notification',
      icon: 'bell'
    },
    {
      title: 'Report Bug',
      icon: 'smile',
    },
  ]

export default class Setting extends Component {
    goToOtherScreen(ScreenName) {
        const {navigation} = this.props
        navigation.navigate(ScreenName);
    }

    render() {
        return (
        <>
            <View>
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon, type: 'feather' }}
                        bottomDivider
                        chevron
                        button 
                        onPress={() => this.goToOtherScreen(item.ScreenName)}
                    />
                    ))
                }
            </View>

            <View style={{marginTop: 20}}>
            {
                list2.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon, type: 'feather' }}
                    bottomDivider
                    chevron
                />
                ))
            }
            </View>
        </>
        )
    }
}
