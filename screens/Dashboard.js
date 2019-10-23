import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native'


import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class Dashboard extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const email =  this.props.navigation.getParam('email', 'Guest')
        return(
        <>
        <StatusBar backgroundColor='#0B81C7' />
            <View style={{backgroundColor:'#F8F8F8', flex:1}}>
                <ImageBackground 
                source={require('../assets/images/bg_dashboard.png')} 
                style={styles.imgBg} >

                    <View style={styles.container}>

                        <Text style={styles.hdTitle}>
                            Welcome, {email}
                        </Text>

                        <View style={[styles.contentContainer,{marginTop: 40}]}>
                            
                            <TouchableOpacity style={[styles.content,{marginRight:15}]}>
                                <View style={[styles.icon,{backgroundColor: '#95C600'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'android'} />
                                </View>

                                <Text style={styles.contentTxt}>
                                    Android Apps
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.content,{marginLeft:15}]}>
                                <View style={[styles.icon,{backgroundColor: '#ffa100'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'assignment'} />
                                </View>
                                <Text style={styles.contentTxt}>
                                    Open Assignment
                                </Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={[styles.contentContainer,{marginTop: 100}]}>
                
                            <TouchableOpacity style={[styles.content,{marginRight:15}]}>
                                <View style={[styles.icon,{backgroundColor: '#4284F3'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'g-translate'} />
                                </View>

                                <Text style={styles.contentTxt}>
                                    Translate Something
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.content,{marginLeft:15}]}
                                onPress={() => this.props.navigation.navigate('Pokedex')}
                            >
                                <View style={[styles.icon,{backgroundColor: 'red'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'pregnant-woman'} />
                                </View>

                                <Text style={styles.contentTxt}>
                                    Pokedex
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
        )
    }
}

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