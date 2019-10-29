import { StyleSheet } from 'react-native'

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

export default styles