Page({



  tochat: function(){
    wx.navigateTo({
      url: '/pages/chat/index' // 确保这个路径是你的帖子详细页面的路径
    });
  },

  onBack: function() {
    // 返回上一页面
    wx.navigateBack({
      delta: 1, // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
      success: function(res) {
        // 返回成功
      },
      fail: function(res) {
        // 返回失败
      }
    });
 
  },
  data: {
    steps: [
      {
        text: '阶段一',
        desc: '描述信息',
      },
      {
        text: '阶段二',
        desc: '描述信息',
      },
      {
        text: '阶段三',
        desc: '描述信息',
      },
      {
        text: '阶段四',
        desc: '描述信息',
      },
    ],
  
  },
  
});
