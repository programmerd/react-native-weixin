import {observable} from "mobx"
import {Image} from 'react-native'

class Store{
  @observable bottomHeight:number=50;  //底部导航高度
  @observable topHeight:number=50;  //顶部导航高度
  @observable isSwipeEnabled:boolean=true;  //tabNavigator是否可以左右滑动

  //定义 持久性存储的数据
  @observable count:string = "";
  //定义 通讯录 页面的数据列表
  @observable.ref communication:Array=[];

  //定义 通讯录 页面的字母相关
  @observable letter:string="L";
  @observable letterShow:boolean=false;
  @observable letterArr:Array =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  //定义 通讯录 页面的详情资料
  @observable.ref msgDetail:Array=[];

  //定义 发现 页面的数据列表
  @observable.ref discoverData:Array=[];
  //定义 我  页面的数据列表
  @observable mySelfArr:Array=[];
  //存储navigation
  @observable navigation:Object={};

  constructor() {
    this.communicationList();
    this.letterArrList();
    this.mySelfArrList();
    this.msgDetailList();
  }
  communicationList () {
    this.communication=[
      { key: "A", data: [{ title: "阿童木" ,img:require('./img/hand0.png') ,userId:'qwwrr_dfsj' ,area:"中国"}, { title: "阿玛尼" ,img:require('./img/hand1.png') ,userId:'qwwrr_dfsdfj' ,area:"中国"}, { title: "爱多多" ,img:require('./img/hand2.png') ,userId:'qwrr_dfsj' ,area:"中国"}] },
      { key: "B", data: [{ title: "表哥" ,img:require('./img/hand3.png') ,userId:'qwwr_dfsj' ,area:"中国"}, { title: "贝贝" ,img:require('./img/hand4.png') ,userId:'dfrr_sj' ,area:"中国"}, { title: "表弟" ,img:require('./img/hand5.png') ,userId:'rtwwrr_dfsj' ,area:"中国"}, { title: "表姐" ,img:require('./img/hand6.png') ,userId:'sdfwwrr_dfsj' ,area:"中国"}, { title: "表叔" ,img:require('./img/hand0.png') ,userId:'aaarr_dfsj' ,area:"中国"}] },
      { key: "C", data: [{ title: "成吉思汗" ,img:require('./img/hand1.png') ,userId:'hrr_dfsj' ,area:"中国"}, { title: "超市快递" ,img:require('./img/hand3.png') ,userId:'qgr_dfsj' ,area:"中国"}] },
      { key: "D", data: [{ title: "王磊" ,img:require('./img/hand4.png') ,userId:'ccwrr_dfsj' ,area:"中国"}, { title: "王者荣耀" ,img:require('./img/hand5.png') ,userId:'bbrr_dfsj' ,area:"中国"}, { title: "往事不能回味" ,img:require('./img/hand6.png') ,userId:'qfdswrr_dfsj' ,area:"中国"},{ title: "王小磊" ,img:require('./img/hand4.png') ,userId:'nnrr_dfsj' ,area:"中国"}, { title: "王中磊" ,img:require('./img/hand0.png') ,userId:'ttwwrr_dfsj' ,area:"中国"}, { title: "王大磊" ,img:require('./img/hand0.png') ,userId:'ppwrr_dfsj' ,area:"中国"}] },
      { key: "E", data: [] },
      { key: "F", data: [] },
      { key: "G", data: [] },
      { key: "H", data: [] },
      { key: "I", data: [] },
      { key: "J", data: [{ title: "阿童木" ,img:require('./img/hand0.png') ,userId:'qwwrr_dfsj' ,area:"中国"}, { title: "阿玛尼" ,img:require('./img/hand1.png') ,userId:'qwwrr_dfsdfj' ,area:"中国"}, { title: "爱多多" ,img:require('./img/hand2.png') ,userId:'qwrr_dfsj' ,area:"中国"}] },
      { key: "K", data: [{ title: "表哥" ,img:require('./img/hand3.png') ,userId:'qwwr_dfsj' ,area:"中国"}, { title: "贝贝" ,img:require('./img/hand4.png') ,userId:'dfrr_sj' ,area:"中国"}, { title: "表弟" ,img:require('./img/hand5.png') ,userId:'rtwwrr_dfsj' ,area:"中国"}, { title: "表姐" ,img:require('./img/hand6.png') ,userId:'sdfwwrr_dfsj' ,area:"中国"}, { title: "表叔" ,img:require('./img/hand0.png') ,userId:'aaarr_dfsj' ,area:"中国"}] },
      { key: "L", data: [{ title: "成吉思汗" ,img:require('./img/hand1.png') ,userId:'hrr_dfsj' ,area:"中国"}, { title: "超市快递" ,img:require('./img/hand3.png') ,userId:'qgr_dfsj' ,area:"中国"}] },
      { key: "M", data: [{ title: "王磊" ,img:require('./img/hand4.png') ,userId:'ccwrr_dfsj' ,area:"中国"}, { title: "王者荣耀" ,img:require('./img/hand5.png') ,userId:'bbrr_dfsj' ,area:"中国"}, { title: "往事不能回味" ,img:require('./img/hand6.png') ,userId:'qfdswrr_dfsj' ,area:"中国"},{ title: "王小磊" ,img:require('./img/hand4.png') ,userId:'nnrr_dfsj' ,area:"中国"}, { title: "王中磊" ,img:require('./img/hand0.png') ,userId:'ttwwrr_dfsj' ,area:"中国"}, { title: "王大磊" ,img:require('./img/hand0.png') ,userId:'ppwrr_dfsj' ,area:"中国"}] },
      { key: "N", data: [] },
      { key: "0", data: []},
      { key: "P", data: []},
      { key: "Q", data: []},
      { key: "R", data: []},
      { key: "S", data: []},
      { key: "T", data: []},
      { key: "U", data: []},
      { key: "V", data: []},
      { key: "W", data: []},
      { key: "X", data: []},
      { key: "Y", data: [{ title: "阿童木" ,img:require('./img/hand0.png') ,userId:'qwwrr_dfsj' ,area:"中国"}, { title: "阿玛尼" ,img:require('./img/hand1.png') ,userId:'qwwrr_dfsdfj' ,area:"中国"}, { title: "爱多多" ,img:require('./img/hand2.png') ,userId:'qwrr_dfsj' ,area:"中国"}] },
      { key: "Z", data: [{ title: "表哥" ,img:require('./img/hand3.png') ,userId:'qwwr_dfsj' ,area:"中国"}, { title: "贝贝" ,img:require('./img/hand4.png') ,userId:'dfrr_sj' ,area:"中国"}, { title: "表弟" ,img:require('./img/hand5.png') ,userId:'rtwwrr_dfsj' ,area:"中国"}, { title: "表姐" ,img:require('./img/hand6.png') ,userId:'sdfwwrr_dfsj' ,area:"中国"}, { title: "表叔" ,img:require('./img/hand0.png') ,userId:'aaarr_dfsj' ,area:"中国"}] },
    ]
  }

  letterArrList (){
    this.discoverData=[
      { key:"PYQ" , data:[{title:"朋友圈",img:require('./img/find0.png')}] },
      { key:"CYC" , data:[{title:"扫一扫",img:require('./img/find1.png')}, {title:"摇一摇",img:require('./img/find2.png')}] },
      { key:"KYK" , data:[{title:"看一看",img:require('./img/find3.png')}, {title:"搜一搜",img:require('./img/find4.png')}] },
      { key:"FJR" , data:[{title:"附近的人",img:require('./img/find6.png')}, {title:"漂流瓶",img:require('./img/find5.png')}] },
      { key:"GW" , data:[{title:"购物",img:require('./img/find7.png')}, {title:"游戏",img:require('./img/find8.png')}] },
      { key:"XCX" , data:[{title:"小程序",img:require('./img/find3.png')}] },
      { key:"KB" , data:[] },
    ]
  }

  mySelfArrList (){
    this.mySelfArr=[
      { key:'QB' , data:[{title:"钱包" , img:require('./img/find2.png')}]},
      { key:'KB' , data:[{title:"收藏" , img:require('./img/find6.png')} , {title:"相册" , img:require('./img/find8.png')} , {title:"卡包" , img:require('./img/find4.png')} , {title:"表情" , img:require('./img/find7.png')}]},
      { key:"SZ" , data:[{title:"设置" , img:require('./img/find3.png')}]}
    ]
  }

  msgDetailList (){
    this.msgDetail=[
      { key :"SZ" , data:[{title:"设置备注和标签"}]},
      { key :"GR" , data:[{title:"地区"} , {title:"个人相册"} ,{title:"更多"}]},
    ]
  }
}
const store:Object = new Store();
export default  store