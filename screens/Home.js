import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    StatusBar,
    ScrollView,
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <>
            <StatusBar backgroundColor="#0B81C7" />
            <ImageBackground source={require('../assets/images/bg2.jpg')} style={{
               width:'100%' ,
               height:'100%'
            }}>
            
            <View style={styles.container} />

            <View>
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
            </ImageBackground>
            </>
        )
    }
}

class SignupScreen extends React.Component {
    static navigationOptions ={
        header: null
    }

    render() {
        return(
            <>
            <ScrollView style={{backgroundColor:'#0B81C7'}}>
                <View style={styles.container}>
                    <Signup />
                </View>

                <View style={{marginBottom: 20}}>
                    <View style={styles.txtFooter}>
                        <Text style={{color: '#fff', fontFamily: 'sans-serif-thin'}}>
                            Already registered?
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnLogin}
                        onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={{color: '#fff'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </>
        )
    }
}

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render(){
        return(
        <>
            <ScrollView style={{backgroundColor:'#fff'}}>
                <View style={styles.container}>
                    <Login />
                </View>

                <View style={{marginBottom: 20}}>
                    <View style={styles.txtFooter}>
                        <Text style={{color: '#0B81C7', fontFamily: 'sans-serif-thin'}}>
                            Not a member yet?
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.btnRegister}
                        onPress={() => this.props.navigation.navigate('Signup')}
                        >
                            <Text style={{color: '#0B81C7'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btngroup: { 
        height: 110,
        marginBottom: 30,
        marginHorizontal: 10
    },
    btnsignup:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    btntxt: {
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 5
    },
    buttonBtm: {
        width:'100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
    },
    btnLogin: {
        width: '80%',
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: '#fff',
    },
    btnRegister: {
        width: '80%',
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: '#0B81C7',
    },
    txtFooter: {
        alignItems: 'center', marginTop: 40, marginBottom: 10
    }
})

const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Signup: {screen: SignupScreen},
    Login: {screen: LoginScreen},
},{initialRouteName: 'Home',});

export default createAppContainer(AppNavigator);