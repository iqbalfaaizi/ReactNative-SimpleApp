import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        top: 50,
    },
    imgBg:{
        width: '100%', height: 300, top: -50,
    },
    hdTitle: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop:10,
    },
    content :{
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    contentTxt: {
        marginTop: 10, color: '#4f4f4f', fontSize: 13,
        marginHorizontal: 5,
        textAlign: 'center', justifyContent: 'center'
    },
    contentContainer:{
        flex:1,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent:'center',
    },
    icon:{
        width: 70, 
        height: 70, 
        borderRadius: 50, 
        justifyContent:'center',
        alignItems:'center',
    }
})

export default styles