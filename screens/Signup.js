import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native'

export default class Signup extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {
            email: '',
            phone: '',
        }
    }

    _handlePress(){
        if(this.state.email === ''){
            Alert.alert("Please input your email!")
        }else {
            Alert.alert(this.state.email+", Successfully registered!")
        }
    }

    render() {
        return(
        <>
        <ScrollView style={{backgroundColor:'#0B81C7'}}>

            {/* Content */}
            <View style={styles.container}>
                <Text style={styles.hdTitle}>Register</Text>
                
                <View style={styles.inputGroup}>
                    <TextInput style={styles.inputTxt} 
                        placeholder="Your Email" placeholderTextColor="#fff"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TextInput style={styles.inputTxt} placeholder="Phone" placeholderTextColor="#fff"/>
                    <TextInput style={styles.inputTxt} secureTextEntry={true} placeholder="Password" placeholderTextColor="#fff"/>
                    <TextInput style={styles.inputTxt} secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="#fff"/>
                </View>

                <TouchableOpacity style={styles.btnConfirm} 
                    onPress={() => this._handlePress()}
                >
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

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    hdTitle:{
        color: '#fff',
        fontSize: 30,
        fontFamily: 'sans-serif-light',
        alignSelf: 'center',
        marginVertical: 30
    },
    inputGroup:{
        width: '80%',
        alignSelf: 'center',
    },
    inputTxt:{
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginBottom: 20,
        opacity: .60,
        fontFamily: 'sans-serif-light'
    },
    btnConfirm: {
        width: '80%',
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 150,
        marginTop: 10,
    },

    txtFooter: {
        alignItems: 'center', marginTop: 30, marginBottom: 10
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
})
