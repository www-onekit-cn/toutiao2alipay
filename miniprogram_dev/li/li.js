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
OnekitPage({
    switch1Change:function(e){
      console.log('switch1 发生 change 事件，携带值为',e.detail.value)
    },
    switch2Change:function(e){
      console.log('switch2 发生 change 事件，携带值为',e.detail.value)
    }
  })
