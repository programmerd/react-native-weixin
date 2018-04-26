import React,{Component} from 'react'
import {View,Text,Dimensions,TextInput} from 'react-native'
import {StackNavigator} from 'react-navigation'

const {width}=Dimensions.get("window");
const InputWidth=width*0.8;
class Search extends Component<{}>{
    static navigationOptions=(navigation)=>{
        return {
            headerStyle:{backgroundColor:"#3b3b3b",paddingRight:20},
            headerRight:(
              <View>
                  {console.log(width*0.8)}
                <TextInput
                     autoFocus={true}
                    //  underlineColorAndroid="green"
                     style={{color:"#fff",fontSize:16,width:InputWidth}}/>
              </View>
            ),
            headerTintColor:'#fff',
            headerPressColorAndroid : '#fff',
            gesturesEnabled: true
          }
    }
    render(){
        return(
            <View>
                <Text>这是搜索兴趣爱好栏目</Text>
            </View>
        )
    }
}
export default Search