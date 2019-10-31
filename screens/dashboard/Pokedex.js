import React, {Component} from 'react'
import {View,Text,FlatList,ActivityIndicator,TouchableOpacity,StyleSheet,Image} from 'react-native'

export default class Pokedex extends Component {
    static navigationOptions ={
        title : 'Simple Pokédex API',
        headerStyle: { backgroundColor: '#0B81C7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', },
    }

    constructor(props){
        super(props);
        this.state = {pokeList: [], isLoading: true}
    }

    async componentDidMount(){
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                pokeList: responseJson.results,
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    renderItem(data) {
        return(
            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                <View style={styles.listItemContainer}>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'}} 
                            style={styles.pokeImage}/>
                    <Text style={styles.pokeItemHeader}>
                       {data.item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        const { pokeList, isLoading } = this.state;
        if(!isLoading){
            return(
                <FlatList 
                    data = {pokeList}
                    renderItem= {this.renderItem}
                    keyExtractor = { (item) => item.name }
                />
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