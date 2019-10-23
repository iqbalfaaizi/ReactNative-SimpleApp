import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    StatusBar,
} from 'react-native'

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
        <>
        <StatusBar backgroundColor="#0B81C7" />
        <ImageBackground source={require('../assets/images/bg2.jpg')} style={{
            width:'100%',
            height:'100%'
        }}>
            
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
        </ImageBackground>
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