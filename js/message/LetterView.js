import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import {observer,inject} from 'mobx-react/native'

const returnTrue = () => true;
var phoneHeight=Dimensions.get('window').height;

@inject('store')
@observer
class LetterView extends Component<{}>{
  constructor(props) {
    super(props);
    this.letterArr=this.props.store.letterArr.slice();
    this.topHeight=this.props.store.topHeight;
    this.bottomHeight=phoneHeight-this.props.store.bottomHeight;
    this.letterHeight=Math.floor(((phoneHeight-100)/this.letterArr.length))
  }
  // 实现字母
  _EenglshLitter =()=>{
    return this.letterArr.map((value) =>{
      return (
        <View
          key={value}
          style={{width:20,height:20}}
        >
          <Text style={{textAlign:'center'}}>
            {value}
          </Text>
        </View>
      )
    })
  }
  //按下
  detectAndScrollToSection =(e)=>{
    this.props.store.isSwipeEnabled=false;
    this.refs.view.setNativeProps({
      style: {
        backgroundColor: 'rgba(0,0,0,0.3)'
      }
    })
    // 显示左侧字母提示
   this.props.store.letterShow =true;
  }
  // 触摸查找
  mouseOver =(e)=>{
    var sum=0;
    var offset=0;
    var ev =e.nativeEvent.touches[0];
    if(ev.pageY>this.topHeight && ev.pageY<this.bottomHeight){
      // console.log(ev.pageY)
      var letterCount=Math.floor((ev.pageY-this.topHeight)/(this.letterHeight))
      this.props.store.letter=this.letterArr[letterCount]

        // 偏移量
        offset=letterCount*23;
        //A状况下的偏移量
        if(letterCount===0){
           sum=0;
          this.props.onSectionSelect(sum,offset)
        }else{
          for(var i=letterCount-1;i>=0;i--){
            if(this.props.communicationList[i].data.length===0){
              offset-=23;
            }else{
              sum+=this.props.communicationList[i].data.length
            }
          }
          this.props.onSectionSelect(sum,offset)
        }

    }
  }
// 抬起
  resetSection =(e)=>{
    this.props.store.isSwipeEnabled=true;
    this.refs.view.setNativeProps({
      style: {
        backgroundColor: 'transparent'
      }
    })
    this.props.store.letterShow=false;
  }

  render(){
    const observable=this.props.store;
    return(
      <View   pointerEvents='box-none' style={styles.topView}>
        {observable.letterShow?
          <View style={styles.showLetter}>
            <View style={styles.viewShow}>
              <Text style={styles.textShow}>{observable.letter}</Text>
            </View>
          </View>:null
        }
        <View
          style={styles.Letter26}
          ref="view"
          onStartShouldSetResponder={returnTrue}
          onMoveShouldSetResponder={returnTrue}
          onResponderGrant={this.detectAndScrollToSection}
          onResponderRelease={this.resetSection}
          onResponderMove={this.mouseOver}
        >
          {this._EenglshLitter()}
        </View>
      </View>
    )
  }
}

// 样式类
const styles=StyleSheet.create({
  topView:{
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0
  },
  showLetter:{
    flex:1,
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:10,
    backgroundColor:'transparent',
    justifyContent:"center",
    alignItems:"center"
  },
  viewShow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    width: 80,
    height: 80,
    borderRadius: 3
  },
  textShow: {
    fontSize: 50,
    color: '#fff',
  },
  Letter26:{
    width:20,
    flex:1,
    backgroundColor:'transparent',
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    zIndex:10000,
    justifyContent:"space-around",
    alignItems:'center'
  }
})

export default LetterView