// pages/id/index.js
Page({
  data: {
      value: '',
    },
  
    onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
  tomy: function(){
      wx.navigateTo({
        url: '/pages/my/index' // 确保这个路径是你的帖子详细页面的路径
      });
  }
})