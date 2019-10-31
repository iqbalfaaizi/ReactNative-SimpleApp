import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class Profile extends Component {
    render(){
        return(
            <View>
                <Text>Hello, Im Profile</Text>
                <TouchableOpacity style={{backgroundColor:'yellow', height: 30}}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text>Click here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}