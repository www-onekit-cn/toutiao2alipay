import{OnekitPage,tt} from '../toutiao2alipay/index'

// slider
// const pageData = {
//     onShareAppMessage:function(){
//       return {
//         title:'slider',
//         path:'page/component/pages/slider/slider'
//       }
//     },
//     bindchanging:function(e){
//       console.log('拖动过程中触发的事件',e)
//     }
//   }
// for(var i = 1;i < 5;++i){
//   (function(index){
//     pageData[(('slider' + index)) + 'change'] = function(e){
//     console.log((('slider' + index)) + '发生change事件，携带值为',e.detail.value)
//   }
//   })(i);
// }
// OnekitPage(pageData)

// switch
// OnekitPage({
//     switch1Change:function(e){
//       console.log('switch1 发生 change 事件，携带值为',e.detail.value)
//     },
//     switch2Change:function(e){
//       console.log('switch2 发生 change 事件，携带值为',e.detail.value)
//     }
//   })

//picker
// var ms = [
//   [
//     '无脊柱动物',
//     '脊柱动物'
//   ],
//   [
//     [
//       '扁性动物',
//       '线形动物',
//       '环节动物',
//       '软体动物',
//       '节肢动物'
//     ],
//     [
//       '鱼',
//       '两栖动物',
//       '爬行动物'
//     ]
//   ],
//   [
//     [
//       [
//         '猪肉绦虫',
//         '吸血虫'
//       ],
//       [
//         '蛔虫'
//       ],
//       [
//         '蚂蚁',
//         '蚂蟥'
//       ],
//       [
//         '河蚌',
//         '蜗牛',
//         '蛞蝓'
//       ],
//       [
//         '昆虫',
//         '甲壳动物',
//         '蛛形动物',
//         '多足动物'
//       ]
//     ],
//     [
//       [
//         '鲫鱼',
//         '带鱼'
//       ],
//       [
//         '青蛙',
//         '娃娃鱼'
//       ],
//       [
//         '蜥蜴',
//         '龟',
//         '壁虎'
//       ]
//     ]
//   ]
// ]
// OnekitPage({
//     data:{
//         array:[
//           '美国',
//           '中国',
//           '巴西',
//           '日本'
//         ],
//         index:0,
//         objectArray:[
//           {
//               id:0,
//               name:'美国',
//               en:'USA'
//             },
//           {
//               id:1,
//               name:'中国',
//               en:'China'
//             },
//           {
//               id:2,
//               name:'巴西',
//               en:"Brasil"
//             },
//           {
//               id:3,
//               name:'日本',
//               en:"Japan"
//             }
//         ],
//         objectIndex:0,
//         multiArray:[
//           [
//             '无脊柱动物',
//             '脊柱动物'
//           ],
//           [
//             '扁性动物',
//             '线形动物',
//             '环节动物',
//             '软体动物',
//             '节肢动物'
//           ],
//           [
//             '猪肉绦虫',
//             '吸血虫'
//           ]
//         ],
//         multiIndex:[
//           0,
//           0,
//           0
//         ],
//         objectMultiIndex:[
//           0,
//           0,
//           0
//         ],
//         date:'2016',
//         date1:'2016-09',
//         date2:'2016-09-01',
//         time:'12:01',
//         region:[
//           "北京市",
//           "北京市",
//           "朝阳区"
//         ],
//         timeStart:'09:01',
//         timeEnd:'21:01'
//       },
//     bindPickerChange:function(e){
//       this.setData({
//         index:e.detail.value
//       })
//     },
//     bindObjectPickerChange:function(e){
//       this.setData({
//         objectIndex:e.detail.value
//       })
//     },
//     bindMultiPickerChange:function(e){
//       this.setData({
//         multiIndex:e.detail.value
//       })
//     },
//     bindMultiPickerColumnChange:function(e){
//       var data = {
//         multiArray:this.data.multiArray,
//         multiIndex:this.data.multiIndex
//       }
//           switch(e.detail.column){
//       case 0:
//         data.multiIndex[0] = e.detail.value;
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         data.multiArray[1] = ms[1][data.multiIndex[0]];
//         data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
//         break;
//       case 1:
//         data.multiIndex[1] = e.detail.value;
//         data.multiIndex[2] = 0;
//         data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
//         break;
//       case 2:
//         data.multiIndex[2] = e.detail.value;
//         break;
//     }
//       this.setData(data)
//     },
//     bindDateChange:function(e){
//       this.setData({
//         date:e.detail.value
//       })
//     },
//     bindDateChange1:function(e){
//       this.setData({
//         date1:e.detail.value
//       })
//     },
//     bindDateChange2:function(e){
//       this.setData({
//         date2:e.detail.value
//       })
//     },
//     bindTimeChange:function(e){
//       this.setData({
//         time:e.detail.value
//       })
//     },
//     bindRegionChange:function(e){
//       this.setData({
//         region:e.detail.value
//       })
//     },
//     cancel:function(){
//       console.log("取消选择并收起 picker ")
//     }
//   })

// navigator
OnekitPage({
    onShareAppMessage:function(){
      return {
        title:'navigator',
        path:'page/component/pages/navigator/navigator'
      }
    }
  })