import React, {Component} from 'react'
import {View,Text,FlatList,ActivityIndicator,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import TokenStore from '../../src/tokenStore'

export default class Users extends Component {
    static navigationOptions ={
        title : 'Data User',
        headerStyle: { backgroundColor: '#0B81C7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', },
    }

    constructor(props){
        super(props)
        this.state = {
            userList:[], 
            loading: true
        }
    }
    
    async componentDidMount(){
        try {
            const response = await fetch('http://192.168.56.1:9999/users',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': TokenStore.getToken()
                }
            });
            const responseJson = await response.json()
            if(responseJson.auth == true){
                this.setState({
                    loading: false,
                    userList: responseJson.users
                })
            }else{
                alert(responseJson.users)
                setTimeout( ()=> {
                    this.props.navigation.navigate('Dashboard')
                },1000 );
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    render(){
        const{ userList, loading } = this.state;
        const avatar_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

        
        if(!loading){
            return(
            <>
            <ScrollView>
                {/* <FlatList 
                    data = {userList}
                    renderItem= {this.renderItem}
                    keyExtractor = { (item) => item.name }
                /> */}

                <View>
                {
                    userList.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: avatar_url } }}
                        rightElement={<Icon type="material" color="#C8C8C8" name='more-vert' />}
                        title={l.name}
                        subtitle={l.email}
                        bottomDivider
                    />
                    ))
                }
                </View>

            </ScrollView>
            </>
            )
        } else {
            return <ActivityIndicator />
        }
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#202020',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 30,
        textTransform: 'capitalize'
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 30,
        width: 30
    }
})