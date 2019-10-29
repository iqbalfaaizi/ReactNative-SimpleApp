import {StyleSheet} from 'react-native'

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

export default styles