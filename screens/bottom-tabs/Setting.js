import React, {Component} from 'react'
import { View, Text, ScrollView } from 'react-native'
import {ListItem, Icon, Button, SearchBar } from 'react-native-elements'

const list = [
  {
    title: 'Set Username',
    icon: 'user',
    ScreenName: 'Username'
  },
  {
    title: 'Storage',
    icon: 'hard-drive',
    ScreenName: 'Username'
  },
  {
    title: 'Notification',
    icon: 'bell'
  },
  {
    title: 'Report Bug',
    icon: 'smile',
  },
]

const darkMode = [
  {
    title: 'Dark Mode',
    icon: 'moon',
    ScreenName: 'Username'
  },
]

export default class Setting extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      toggle: 'toggle-off',
      color: '',
      textColor:'',
    }
  }

  updateSearch = search => {
    this.setState({search})
  }

  searchBarDark(){
    const {search} = this.state;
    if(this.state.toggle === 'toggle-off'){
      return(
        <SearchBar
            lightTheme
            round
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
          />
      )
    }else {
      return(
        <SearchBar
            darkTheme
            round
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
          />
      )
    }
  }

  goToOtherScreen(ScreenName) {
      const {navigation} = this.props
      navigation.navigate(ScreenName);
  }

  toggleDarkMode(){
    if(this.state.toggle === 'toggle-off'){
      this.setState({toggle:'toggle-on', color:'#333',textColor:'#fff'})
    }else if(this.state.toggle === 'toggle-on'){
      this.setState({toggle:'toggle-off', color:'#fff',textColor:'#333'})
    }
  }

  render() {
      return (
      <>
        {this.searchBarDark()}
          <ScrollView style={{backgroundColor: this.state.color}}>
              {
                  list.map((item, i) => (
                  <ListItem
                    containerStyle={{backgroundColor: this.state.color}}
                    key={i}
                    title={item.title}
                    titleStyle={{color:this.state.textColor}}
                    leftIcon={{ name: item.icon, type: 'feather', color: this.state.textColor }}
                    bottomDivider
                    chevron
                    button 
                    onPress={() => this.goToOtherScreen(item.ScreenName)}
                  />
                  ))
              }
              {
                darkMode.map((item, i) =>(
                  <ListItem
                    containerStyle={{backgroundColor: this.state.color}}
                    key={i}
                    title={item.title}
                    titleStyle={{color:this.state.textColor}}
                    leftIcon={{ name: item.icon, type: 'feather', color: this.state.textColor }}
                    bottomDivider
                    onPress={() => this.toggleDarkMode() }
                    rightElement={<Icon containerStyle={{ alignSelf: 'flex-start' }} type="font-awesome" color="#C8C8C8" name={this.state.toggle} />}
                  />
                ))
              }
          </ScrollView>
      </>
      )
  }
}
