// @flow
import React,{Component} from 'react'
import { inject } from 'mobx-react/native'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import Chat from './Chat'


@inject('store')
class WinXin extends Component<{}>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  toSession=(item:any)=>{
    const itemName=item.title;
    this.props.store.navigation.navigate('Chat',{itemName:itemName})
    AsyncStorage.setItem("con",JSON.stringify(item),()=>{
        this.props.store.count=item.content
      })
  };
  // 渲染List列表
  _renderItem=({item}:any)=>{
    var date=new Date()
    var random=Math.floor(Math.random()*61);
    return (
      <TouchableHighlight underlayColor='#ddd' onPress={()=>{}} onHideUnderlay={()=>{this.toSession(item)}}>
        <View style={styles.MainStyle}>
          <Image source={item.src} style={{width:50,height:50}}/>
          <View style={styles.ListMainRight}>
            <View style={styles.ListRightTop}>
              <Text>{item.title}</Text>
              <Text>{date.getHours()}:{random>10?random:"0"+random}</Text>
            </View>
            <View>
              <Text>{item.content}</Text>
            </View>
          </View>
        </View>  
      </TouchableHighlight>
    )
  }
  // 列表之间分隔线组件
  _ItemSeparatorComponent=()=>{
    return <Text style={{height:1,backgroundColor:"#eee"}}></Text>
  }
  //主体渲染
  render(){
    //模拟数据
    var data=[];
    for(var i=0;i<20;i++){
      data.push({key:i+1,title:`微信名称———${i+1}`,content:`聊天的最后一条信息---${i+1}`,src:require("./../img/self.png")})
    }
    return(
      <View style={{backgroundColor:"#fff"}}>
          <FlatList
            data={data}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._ItemSeparatorComponent}
          ></FlatList>
      </View>
    )
  }
}


// 样式类
const styles=StyleSheet.create({
  MainStyle:{
    padding:8,
    paddingRight:15,
    flexDirection:"row"
  },
  ListMainRight:{
    flex:1,
    paddingLeft:10,
    justifyContent:"space-around"
  },
  ListRightTop:{
    flexDirection:"row",
    justifyContent:"space-between"}
})
export default WinXin;