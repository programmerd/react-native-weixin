/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,

} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TabMainScreen from './TabMainScreen'
import SearchScreen from './search/Search'
import styles from './css/styles'
import Chat from './weixing/Chat'
import MessageDetail from './message/Detail/MessageDetail'

class MainWeb extends Component<{}>{
  static navigationOptions=({navigation})=>{
    return {
      headerStyle:{backgroundColor:"#3b3b3b",paddingRight:20,height:50,paddingLeft:20},
      headerLeft:<Text style={styles.HeadColor}>微信</Text>,
      headerRight:(
        <View style={styles.HeadTopRight}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Search')}>
            <Text style={styles.HeadColor}>搜索</Text>
          </TouchableOpacity>
          <Text style={[styles.HeadColor,{fontSize:28}]}>+</Text>
        </View>
      )
    }
  }
  render(){
    const {navigation}=this.props
    return (
      <TabMainScreen navigations={navigation}/>
    )
  }
}


const MainScreen=StackNavigator({
  Home:{
    screen:MainWeb
  },
  Search:{
    screen:SearchScreen
  },
  Chat:{
    screen:Chat
  },
  MessageDetail:{
    screen:MessageDetail
  }
})

export default MainScreen


