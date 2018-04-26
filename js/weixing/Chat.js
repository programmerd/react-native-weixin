import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import {inject,observer} from 'mobx-react/native'

@inject('store')
@observer
class Chat extends Component<{}>{
  static  navigationOptions=({navigation})=> {
    const {params}=navigation.state;
    return {
      title: params.itemName,
      headerLeft:(
        <TouchableHighlight
          actionsOpacity={0.5}
          underlayColor="#424445"
          onPress={()=>{}}
          onHideUnderlay={()=>{
            navigation.navigate('Home')
            // navigation.goBack()
          }}>
          <View style={{marginLeft:15, marginRight: 15,height:50,justifyContent:'center'}}>
            <Image source={require('./../img/left.png')} style={{width:15,height:15}}/>
          </View>
        </TouchableHighlight>
      ),
      headerStyle: {backgroundColor: "#3b3b3b", height: 50},
      headerTitleStyle: {color: '#fff',fontSize:17,fontWeight:'normal'},
      headerTintColor:'#fff',
      headerPressColorAndroid : '#fff',
      headerRight:(
        <View style={{marginRight:15}}>
          <Image source={require('./../img/find3.png')} style={{width:30,height:30}}/>
        </View>
      )
    }
  }
  render(){
    return(
      <View>
        <Text>这是聊天列表</Text>
      </View>
    )
  }
}
export default  Chat
