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

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super (props)

        this.state = {
            email : '',
        }
    }

    _handlePress(){
        Alert.alert("Your email: "+ this.state.email)
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
                        placeholder="Your Email" placeholderTextColor="#0B81C7"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput style={styles.inputTxt} secureTextEntry={true} placeholder="Password" placeholderTextColor="#0B81C7"/>
                </View>

                <TouchableOpacity style={styles.btnConfirm}
                    onPress={() => this.props.navigation.navigate('Dashboard', {email: this.state.email, name: 'Admin'})} 
                >
                    <Text style={{color: '#fff'}}>Log In</Text>
                </TouchableOpacity>
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
        flex:1,
    },
    hdTitle:{
        color: '#0B81C7',
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
        borderBottomColor: '#0B81C7',
        marginBottom: 30,
        opacity: .60,
        fontFamily: 'sans-serif-light'
    },
    btnConfirm: {
        width: '80%',
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B81C7',
        borderRadius: 150,
        marginTop: 10,
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
        marginTop: 10,
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