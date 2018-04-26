// @flow
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  SectionList,
  Button,
  Dimensions
} from 'react-native';
import {computed} from 'mobx'
import {observer,inject} from 'mobx-react/native'
import LetterView from './LetterView'


@inject('store')
@observer
class Message extends Component<{}>{
  constructor(props) {
    super(props);
  }

  @computed get communicationList(){
    return this.props.store.communication;
  }

  _detailItem=(thisItem:Object)=>{
    this.props.store.navigation.navigate('MessageDetail',{msg: thisItem});

  }
  //渲染分组的list
  _renderItem = (item)=>{
    const itemKey=item.section.key+item.index;
    return (
      <TouchableHighlight
        underlayColor="#ddd"
        onPress={()=>{}}
        onHideUnderlay={()=>{
         this._detailItem(item.item)
        }}

      >
        <View style={styles.MainStyle}>
          <Image
            source ={item.item.img}
            style ={{width:45,height:45}}/>
          <Text key={itemKey} style={{marginLeft:10, fontSize:16}}>
            {item.item.title}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
  // 组件之间的分割
  _itemSeparator =()=>{
    return(
      <Text style={{height:1,backgroundColor:"#eee"}}></Text>
    )
  }
  //分组header
  _renderSectionHeader =(item)=>{
    if(item.section.data.length){
      return (
        <Text style={styles.SectionHeader}>
          {item.section.key}
        </Text>
      )
    }

  }
  //循环key
  _keyExtractor =(item,index)=>{
    return item+index
  }
  //scroll方法
  _getItemLayout (data,index){
    return {length: 61, offset: (61+1) * index, index: index}
  }
  _onSectionSelect =(sum,offset)=>{

  this._secList
    .scrollToIndex({
      animated:true,
      index:sum,
      viewOffset:-offset
    })
  }


  render() {
    const {communicationList} =this;
    return (
      <View style={{backgroundColor:'#fff'}}>
        <LetterView
          communicationList={communicationList}
          onSectionSelect={this._onSectionSelect}
        />
        <SectionList
          ref={(secList)=>{this._secList=secList}}
          sections={communicationList}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._itemSeparator}
          renderSectionHeader={this._renderSectionHeader}
          keyExtractor={this._keyExtractor}
          initialNumToRender={20}
          removeClippedSubviews={true}
          getItemLayout={this._getItemLayout}
        />
      </View>
    )
  }
}
// 样式类
const styles=StyleSheet.create({
  MainStyle:{
    padding:8,
    paddingRight:15,
    flexDirection:"row",
    alignItems:"center"
  },
  SectionHeader:{
    backgroundColor:"#eee",
    padding:2,
    height:24,
    paddingLeft:10,
    color:"#aaa"
  },
})
export default Message