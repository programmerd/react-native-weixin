import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Image,
  TouchableHighlight,
} from 'react-native';
import { computed} from 'mobx'
import { observer, inject} from 'mobx-react/native'

@inject('store')
@observer
class Find extends Component<{}> {

  @computed get discoverList(){
   return this.props.store.discoverData
  }

  _sectionsList=(item)=>{
    return (
      <TouchableHighlight
        underlayColor='#ddd'
        onPress={()=>{}}
        onHideUnderlay={()=>{
          console.log('激活')
        }}
      >
        <View style={styles.disMain}>
          <Image source={item.item.img} style={{width:30,height:30}}/>
          <View  key={item.section.key} style={styles.disRight}>
            <Text style={{fontSize:16}}>{item.item.title}</Text>
            <Text>12</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _keyExtractor =(item,index)=>{
    return item+index
  }

  _itemSeparator =()=>{
    return (
      <Text style={{height:1,backgroundColor:"#eee"}}></Text>
    )
  }

  _sectionHeader =(item)=>{
    return (
      <Text style={{height:20,backgroundColor:"#eee"}}></Text>
    )
  }

  render() {
    const {discoverList}=this;
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <SectionList
          sections={discoverList}
          renderItem={this._sectionsList}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._itemSeparator}
          renderSectionHeader={this._sectionHeader}
          initialNumToRender={10}
          removeClippedSubviews={true}
        />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  disMain:{
    flexDirection:'row',
    padding:8,
    paddingLeft:20,
    alignItems:'center'
  },
  disRight:{
    flex:1,
    flexDirection:"row",
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'space-between'
  }
})

export default Find