import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  TouchableHighlight
} from 'react-native';
import { computed } from 'mobx';
import { observer , inject } from 'mobx-react/native'

@inject('store')
@observer
class MySelf extends Component<{}>{

  @computed get mySelfList(){
    const mySelfList = this.props.store.mySelfArr.map((v)=>{
          return {
            key:v.key,
            data:v.data.slice()
          }
    }).slice()
    return mySelfList
  }

  _sectionList =(item)=>{
    return (
      <TouchableHighlight
        underlayColor='#333'
        onPress={()=>{}}
        onHideUnderlay={()=>{
          console.log('激活')
        }}
      >
        <View style={styles.selfMain}>
          <Image source={item.item.img} style={{width:30,height:30}}/>
          <View style={styles.selfRight}>
            <Text key={item.section.key+item.index} style={{fontSize:16}}>{item.item.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _itemSeparator =()=>{
    return <Text style={{height:1}}></Text>
  }

  _keyExtractor =(item,index)=>{
    return item+index
  }

  _renderHeader =()=>{
    return <Text style={{height:20}}></Text>
  }

  _headerComponent =()=>{
    return (
      <TouchableHighlight
        underlayColor='#333'
        onPress={()=>{}}
      >
        <View style={styles.selfHeader}>
          <Image source={require('./../img/message.png')} style={{width:60,height:60}}/>
          <View style={styles.selfHeaderRight}>
            <View>
              <Text style={{fontSize:16, color:'#000'}}>微商一哥</Text>
              <Text style={{paddingTop:5}}>微信号：{'wei_syige'}</Text>
            </View>
            <View>
              <Image source={require('./../img/QR.jpg')} style={{width:25,height:25}}/>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    const {mySelfList}=this
    return(
      <View style={{backgroundColor:'#eee'}}>
        <Text style={{height:20}}></Text>
        <SectionList
          sections={mySelfList}
          renderItem={this._sectionList}
          ItemSeparatorComponent={this._itemSeparator}
          keyExtractor={this._keyExtractor}
          renderSectionHeader={this._renderHeader}
          ListHeaderComponent={this._headerComponent}
        />
      </View>
    )
  }
}

const styles =StyleSheet.create({
  selfHeader:{
    padding:8,
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  selfHeaderRight:{
    flexDirection:"row",
    justifyContent:'space-between',
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    alignItems:'center'
  },
  selfMain:{
    flexDirection:'row',
    padding:8,
    paddingLeft:20,
    alignItems:'center',
    backgroundColor:'#fff'
  },
  selfRight:{
    flex:1,
    flexDirection:"row",
    paddingLeft:15,
    paddingRight:15,
  }
})
export default MySelf;