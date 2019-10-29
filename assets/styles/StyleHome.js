import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgtext:{
        color: '#fff',
        fontSize:80,
        fontWeight: 'bold',
        fontFamily: 'Modak-Regular',
        marginTop: 230,
        marginLeft:50,
        opacity: .50,
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

export default styles
