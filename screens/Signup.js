import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, } from 'react-native'
import styles from '../assets/styles/StyleSignup'

export default class Signup extends React.Component {
    static navigationOptions = { header: null }
    
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            cpassword: '',
        }
    }

    signupPress = async () => {
        const { name, username, email, password, cpassword } = this.state
        try {
            let response = await fetch('http://192.168.56.1:9999/auth/register-user',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: name,
                    username: username,
                    email : email,
                    password : password,
                })
            });
            let responseJson = await response.json()

            if (password != cpassword) {
                Alert.alert('Your confirmation password did not match!')
            } else if( responseJson.status == 'success' ) {
                Alert.alert('Registration successfully.')
                this.props.navigation.navigate('Login');
            } else {
                Alert.alert('You must fill all the forms or email already taken.')
            }

        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return(
        <>
        <ScrollView style={{backgroundColor:'#0B81C7'}}>

            <View style={styles.container}>
                <Text style={styles.hdTitle}>Register</Text>
                
                <View style={styles.inputGroup}>
                    <TextInput style={styles.inputTxt} 
                        placeholder="Name" placeholderTextColor="#fff"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({name: text})}
                    />

                    <TextInput style={styles.inputTxt} 
                        placeholder="Username" placeholderTextColor="#fff"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({username: text})}
                    />

                    <TextInput style={styles.inputTxt} 
                        placeholder="Email" placeholderTextColor="#fff"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({email: text})}
                    />

                    <TextInput style={styles.inputTxt} 
                        secureTextEntry={true} 
                        placeholder="Password" 
                        placeholderTextColor="#fff"
                        onChangeText={(text) => this.setState({password: text})}
                    />
                    <TextInput style={styles.inputTxt} 
                        secureTextEntry={true} 
                        placeholder="Confirm Password" 
                        placeholderTextColor="#fff"
                        onChangeText={(text) => this.setState({cpassword: text})}/>
                </View>

                <TouchableOpacity style={styles.btnConfirm} onPress={ () => this.signupPress() } >
                    <Text style={{color: '#0B81C7'}}>Register</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
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
