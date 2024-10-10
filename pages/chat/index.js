Page({
  data: {
    avatarUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.BsbnwLoTgeNhaZiC1-XUfAHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7', // 头像图片路径
    message: '你好，这是一条消息内容。' ,//消息内容
      
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
}
});