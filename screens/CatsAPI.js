/* import React, {Component} from 'react'
import{
    View,Text,FlatList,ActivityIndicator,TouchableOpacity,StyleSheet,Image
} from 'react-native'
import { Item } from 'react-native-paper/typings/components/Drawer';

export default class CatsAPI extends Component{
    constructor(props){
        super(props)
        this.state = {loading: true}
    }

    async componentDidMount(){
        try {
            const response = await fetch('https://cat-fact.herokuapp.com/facts');
            const responseJson = await response.json();
            this.setState({
                loading:false,
                catList: responseJson.all,
            });
        }catch (error) {
            console.error(error);
        }
    }

    render(){
        const{ catList, loading } = this.state;
        if(!loading){
            return(
                <FlatList
                    data = {catList}
                    renderItem={({item}) => <Text>{item.text}</Text>}
                    keyExtractor = { ({_id}, index) => id }
                />
            )
        }else{
            return <ActivityIndicator />
        }
    }

} */