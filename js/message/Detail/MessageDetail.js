import React ,{Component} from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native'
import {observable ,computed} from 'mobx';
import {observer , inject} from 'mobx-react/native'

@inject('store')
@observer
class MessageDetail extends Component<{}>{

  @observable.ref itemDetail=this.props.navigation.state.params.msg;

  static navigationOptions=({navigation})=>{
    return {
      headerTitle:"详情信息",
      headerTitleStyle:{color:'#fff',fontSize:17, fontWeight:'normal'},
      headerStyle: {backgroundColor: "#3b3b3b", height: 50},
      headerRight:(
        <View style={{marginRight:15}}>
          <Image source={require('./../../img/find3.png')} style={{width:30,height:30}}/>
        </View>
      ),
      headerPressColorAndroid:"#fff",
      headerTintColor:"#fff"
    }
  }

  render(){
    console.log(this.itemDetail)
    return (
      <View>
        <Text style={styles.itemSpace}></Text>
        <View style={styles.detailList}>
          <Image source={this.itemDetail.img} style={{width:60,height:60}}/>
          <View style={{marginLeft:30}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize:16,color:'#000', paddingRight:10}}>{this.itemDetail.title}</Text>
              <Text style={{color:'#1e6cff'}}>{'♂'}</Text>
            </View>
            <Text style={{fontSize:12 ,paddingTop:5}}>微信号：{this.itemDetail.userId}</Text>
          </View>
        </View>

        <Text style={styles.itemSpace}></Text>
        <TouchableHighlight underlayColor='#333' onPress={()=>{}}>
          <View style={styles.detailList}>
            <Text style={styles.listRemarks}>设置备注和标签</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.itemSpace}></Text>
        <View style={styles.detailList}>
          <Text style={styles.listFontSize}>地区</Text>
          <Text>{this.itemDetail.area}</Text>
        </View>

        <TouchableHighlight underlayColor='#333' onPress={()=>{}}>
          <View style={[styles.detailList,styles.photoBorder]}>
            <Text style={styles.listFontSize}>个人相册</Text>
            <View style={{flexDirection:'row'}}>
              <Image source={this.itemDetail.img} style={styles.listImgStyle}/>
              <Image source={this.itemDetail.img} style={styles.listImgStyle}/>
              <Image source={this.itemDetail.img} style={styles.listImgStyle}/>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='#333' onPress={()=>{}}>
          <View style={styles.detailList}>
            <Text style={styles.listFontSize}>更多</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.itemSpace}></Text>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('Chat',{itemName:this.itemDetail.title})}}>
          <View style={[styles.buttonStyle,{ backgroundColor:'#50a051'}]}>
              <Text style={{color:'#fff',fontSize:16}}>发消息</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.itemSpace}></Text>
          <View style={[styles.buttonStyle,{ backgroundColor:'#fefefe'}]}>
            <Text style={{color:'#000',fontSize:16}}>视频通话</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  itemSpace:{
    height:20
  },
  detailList:{
    padding:12,
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  listRemarks:{
    fontSize:16,
    color:'#666',
  },
  listFontSize:{
    fontSize:16,
    color:'#666',
    width:90
  },
  listImgStyle:{
    width:50,
    height:50,
    marginRight:10,
  },
  photoBorder:{
    borderColor:'#efefef',
    borderTopWidth:1,
    borderBottomWidth:1
  },
  buttonStyle:{
    marginLeft:20,
    marginRight:20,
    height:46,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderColor:'#ededed',
    borderWidth:1
  }

})

export default MessageDetail