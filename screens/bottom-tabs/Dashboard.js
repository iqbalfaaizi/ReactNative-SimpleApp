import React, {Component} from 'react'
import {
    View, Text, ScrollView, TouchableOpacity, ImageBackground, StatusBar,
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Icon } from 'react-native-elements'
import styles from '../../assets/styles/StyleDashboard'

export default class Dashboard extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const email =  this.props.navigation.getParam(email, 'Guest')
        return(
        <>
        <StatusBar backgroundColor='#0B81C7' />
            <View style={{backgroundColor:'#F8F8F8', flex:1}}>
                <ImageBackground 
                source={require('../../assets/images/bg_dashboard.png')} 
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

                            <TouchableOpacity style={[styles.content,{marginLeft:15}]}
                                onPress={() => this.props.navigation.navigate('Users')}>
                                <View style={[styles.icon,{backgroundColor: '#ffa100'}]}>
                                    <Icon name='accessibility' type='material' color='#fff' size={40} />
                                </View>
                                <Text style={styles.contentTxt}>
                                    Users Data
                                </Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={[styles.contentContainer,{marginTop: 100}]}>
                
                            <TouchableOpacity style={[styles.content,{marginRight:15}]}
                                onPress={() => this.props.navigation.navigate('ReduxTest')}>
                                <View style={[styles.icon,{backgroundColor: '#4284F3'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'language'} />
                                </View>

                                <Text style={styles.contentTxt}> Redux </Text>
                            </TouchableOpacity>

                            {/* Pokedex */}
                            <TouchableOpacity style={[styles.content,{marginLeft:15}]}
                                onPress={() => this.props.navigation.navigate('Pokedex')}>

                                <View style={[styles.icon,{backgroundColor: 'red'}]}>
                                    <MaterialIcon style={{color:'#fff'}} size={40} name={'pregnant-woman'} />
                                </View>
                                <Text style={styles.contentTxt}>Pokedex</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
        )
    }
}
