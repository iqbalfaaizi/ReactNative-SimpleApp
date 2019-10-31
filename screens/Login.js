import React from 'react'
import {View,Text,TextInput,TouchableOpacity,Alert,ScrollView,ActivityIndicator} from 'react-native'
import styles from '../assets/styles/StyleLogin'

export default class Login extends React.Component {
    static navigationOptions = {header: null}

    constructor (props) {
        super (props)
        global.userToken = '',
        this.state = {
            email : '',
            password: '',
        }
    }

    loginPress = async () => {
        const { email, password } = this.state
        try {
            let response = await fetch('http://192.168.56.1:9999/auth/login',{
                method: 'POST',
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email : email,
                    password : password,
                })
            });
            let responseJson = await response.json()

            if (responseJson.auth == true) {
                Alert.alert('Successfully logged in')
                global.userToken = responseJson.accessToken.toString();
                setTimeout( ()=> {
                    this.props.navigation.navigate('Dashboard', { token: userToken, email: email })
                },1000 );
                
            } else {
                Alert.alert('Input correct email or password!')
            }
        } catch (error) {
            console.error(error)
        }
    }

    render (){
        return(
        <>
        <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={styles.container}>
                <Text style={styles.hdTitle}>Log In</Text>
                
                <View style={styles.inputGroup}>
                    <TextInput 
                        style={styles.inputTxt} 
                        
                        placeholder="Your Email" 
                        placeholderTextColor="#0B81C7"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({ email: text })} />

                    <TextInput style={styles.inputTxt} secureTextEntry={true}
                        
                        placeholder="Password" 
                        placeholderTextColor="#0B81C7"
                        returnKeyLabel={"next"}
                        onChangeText={(pass) => this.setState({ password: pass })} />
                </View>

                {/* <TouchableOpacity style={styles.btnConfirm}
                    onPress={() => this.props.navigation.navigate('Dashboard', {email: this.state.email, name: 'Admin'})} 
                >
                    <Text style={{color: '#fff'}}>Log In</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.btnConfirm}
                    onPress={() => this.loginPress()}>
                    <Text style={{color: '#fff'}}>
                        Log In
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{marginBottom: 20}}>
                <View style={styles.txtFooter}>
                    <Text style={{color: '#0B81C7', fontFamily: 'sans-serif-thin'}}>
                        Not a member yet?
                    </Text>
                </View>

                <TouchableOpacity style={styles.btnRegister}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={{color: '#0B81C7'}}>
                            Sign Up
                        </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
        )
    }
}