import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import WinXin from './weixing/WeiXing.js'
import Message from './message/Message.js'
import Find from './discover/Find.js'
import MySelf from './myself/MySelf.js'
import store from "./Store";

class TabMainNavigator extends Component<{}>{
  render(){
    store.navigation=this.props.navigations //传递navigation到所有子目录
    return(
      <WeiXinWeb/>
    )
  }
}

const WeiXinWeb=TabNavigator({
    WX:{
      screen:WinXin,
      navigationOptions:{
        tabBarLabel:"微信",
        tabBarIcon: ({ tintColor}) => (  
          <Image   
              source={require('./img/mistle_toe.png')}  
              style={[styles.icon, {tintColor: tintColor}]}  
          />  
          )  
      }
    },
    TXL:{
      screen:Message,
      navigationOptions:{
        tabBarLabel:"通讯录",
        tabBarIcon:({tintColor})=>(
            <Image 
              source={require('./img/self.png')}
              style={[styles.icon,{tintColor:tintColor}]}
            />
        )
      }
    },
    FX:{
      screen:Find,
      navigationOptions:{
        tabBarLabel:"发现",
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./img/mistle_toe.png')}
            style={[styles.icon,{tintColor:tintColor}]}
          />
        )
      }
    },
    My:{
      screen:MySelf,
      navigationOptions:{
        tabBarLabel:"我",
        tabBarIcon:({tintColor})=>(
          <Image 
            source={require('./img/self.png')}
            style={[styles.icon,{tintColor:tintColor}]}
          />
        )
      }
    }
  },
  {
    initialRouteName:"WX",
    tabBarPosition:"bottom",
    // lazy:true,
    swipeEnabled: store.isSwipeEnabled,
    tabBarOptions:{
      showIcon:true,
      showLabel:true,
      pressOpacity:0.5, //按下的透明度
      activeTintColor:"#54bd50",
      inactiveTintColor:"#c0c0c0",
      indicatorStyle:{
        height:0
     },
      style:{
        backgroundColor:"#fff",
        height:50,
        // borderTopWidth:5,  //底部导航加上边框
        // borderTopColor:"#0f0"
      },
      labelStyle:{
        fontSize:14,
        marginTop:-4
      },
      iconStyle:{
        marginTop:-3
      },
    }

  });

  const styles=StyleSheet.create({
    icon:{
      width:25,
      height:25
    }
  })

export default TabMainNavigator