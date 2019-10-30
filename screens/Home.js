import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, } from 'react-native'

import styles from '../assets/styles/StyleHome'

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
        <>
        <StatusBar backgroundColor="#0B81C7" />
        {/*  <ImageBackground source={require('../assets/images/bg2.jpg')} style={{
                width:'100%',
                height:'100%'
            }}> */}
        <View style={{backgroundColor:'#0B81C7',width: '100%', height:'100%'}}>

            <Text style={styles.bgtext}>hello {'\n'}world.</Text>
            
            <View style={styles.container} />
            
            <View style={styles.btngroup}>
                {/* Sign UP Button */}
                <TouchableOpacity 
                    style={[styles.btnsignup,styles.buttonBtm]}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={[{color: '#fff',},styles.btntxt]}>SIGNUP</Text>
                </TouchableOpacity>

                {/* Sign IN Button */}
                <TouchableOpacity 
                    style={[{backgroundColor: '#fff'},styles.buttonBtm]}
                    onPress={() => this.props.navigation.navigate('Login')}
                    >
                    <Text style={[{color:'#0B81C7'},styles.btntxt]}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
        )
    }
}

